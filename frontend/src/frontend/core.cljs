(ns frontend.core
    (:require [reagent.core :as r]
              [frontend.cards]
              [frontend.router]
              [re-frame.core :as rf]
              [day8.re-frame.http-fx]))

(enable-console-print!)

(println "This text is printed from src/frontend/core.cljs. Go ahead and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn sidebar-item [text view]
  (let [cur-view @(rf/subscribe [:view])]
    [:div {:on-click #(rf/dispatch [:view view])
           :class
            (if (= view cur-view)
            ["sidebar-menu-item", "sidebar-menu-item__highlighted"]
             "sidebar-menu-item")}
     text]))

(defn sidebar []
  [:div.sidebar-menu
  [sidebar-item "home" :home]
  [sidebar-item "groups" :groups]
  [sidebar-item "lists" :lists]
  [sidebar-item "session" :session]
  ])

(defn back-next []
  [:div {:style {
      :background "blue"
      :height "50px"
      :display "flex"
      :align-items "center"
      :justify-content "center"
    }}
    [:button.back-next-btn
    { :disabled @(rf/subscribe [:cant-inc -1])
      :on-click #(rf/dispatch [:inc-card -1])}
      "Back"]
    [:button.back-next-btn
     {:disabled
        (or (nil? @(rf/subscribe [:answer])) @(rf/subscribe [:cant-inc 1]))
      :on-click #(rf/dispatch [:inc-card 1])} "Next"]])

(defn session []
  (let [card @(rf/subscribe [:card])
        answer @(rf/subscribe [:answer])
        hide-answer @(rf/subscribe [:hide-answer])
        progress @(rf/subscribe [:session-stats])
        sesh @(rf/subscribe [:answered-correctly])]
  [:div {:style {:background "lightBlue" :flexGrow 1 :display "flex" :flexDirection "column"}}
  [:p (str (:correct sesh) " / " (:total sesh))]
  [:p (str (:index progress) " / " (:total progress))]
  [back-next]
  [:div
    [:button
      {:on-click #(rf/dispatch [:set-answer false])
       :style
        {:background (if (false? answer) "lightBlue")}}
        "Incorrect"]
    [:button
      {:on-click #(rf/dispatch [:set-answer true])
       :style
        {:background (if (true? answer) "lightBlue")}}
        "Correct"]]
    [:div
      [:button
        {:on-click
          #(rf/dispatch [:hide-answer (not hide-answer)])}
      "Show Answer"
      ]
    ]

    [:div (:id card)]
    [:div (:question card)]
    [:div
      {:style
       {:display (if hide-answer "none" "inline-block")
        :white-space "pre"}
       :rows 30
       :cols 300}
      (:answer card)]]))

(defn home [] [:div "home"])

(defn group-info [{:keys [name id url]}]
  (let [new-name @(rf/subscribe [:change-group-name id])]
  [:div
  {:on-click #(.open js/window url)
   :style {:height "35px" :paddingLeft "25px" :cursor "pointer"}}
    name
        [:div {:style {:paddingLeft "25px" :display "inline"}}
        "Rename"]
        [:input
          {:value new-name
           :on-change #(rf/dispatch [:change-group-name (-> % .-target .-value) id])
          }]
        [:button
          {:on-click #(rf/dispatch [:save-group-name new-name id])}
        "save"]]))

(defn groups []
  (let [groups @(rf/subscribe [:groups])
        text @(rf/subscribe [:new-group-input])]
  [:div
      [:h5 "New Group"]
      [:input
        { :value text
          :type "text"
          :on-change #(rf/dispatch [:new-group-input (-> % .-target .-value)])}]
       [:button {:on-click #(rf/dispatch [:new-group text])} "Save"]
    (doall (for [group groups] ^{:key (:id group)} [group-info group]))]))

(defn make-list []
  (let [cards @(rf/subscribe [:make-list/display-cards])
        list @(rf/subscribe [:make-list/list])
        groups @(rf/subscribe [:groups])
        new-list
          #(rf/dispatch
            [:make-list/list
            (if (contains? list %) (disj list %) (conj list %))])
        card-ids (->> cards (map :id) set)
        all-added (= (clojure.set/intersection list card-ids) card-ids)
        add-or-rm-all
          #(rf/dispatch
            [:make-list/list
              (if all-added
                (clojure.set/difference list card-ids)
                (into list card-ids))])]
  [:div
    [:select
      {:on-change
         #(rf/dispatch [:cards-in-group (-> % .-target .-value)])}
         (doall (for [{:keys [name id]} groups]
           ^{:key id} [:option {:value id} name ]))]
  [:div
    [:input
      {:type "checkbox"
       :checked all-added
       :on-change #(add-or-rm-all)}]
       "Add all"]
  (doall
    (for [[i {:keys [id] :as card}] (map-indexed vector cards)]
      ^{:key id}
      [:ul
      [:input
        {:type "checkbox"
        :checked (contains? list id)
        :on-change #(new-list id)}]
      (:question card)]))]))

(defn lists []
  [:div {:style {:width "100%"}}
    [:button "Make new list"]
    [make-list]])

(def views
  {:session session :home home :groups groups :lists lists })

(defn app []
  (let [view @(rf/subscribe [:view])]
  [:div.page
  [sidebar]
  [(views view)]]))


(defn mount-root []
  (rf/dispatch-sync [:init])
  (rf/dispatch [:fetch-cards])
  (rf/dispatch [:fetch-groups])
  (r/render [app] (js/document.getElementById "app")))

(mount-root)

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
