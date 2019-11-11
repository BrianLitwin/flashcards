(ns frontend.core
  (:require [reagent.core :as r]
            [frontend.cards]
            [re-frame.core :as rf]
            [day8.re-frame.http-fx]))


(defn sidebar-item [text view]
  (let [cur-view @(rf/subscribe [:view])]
    [:div {:on-click #(rf/dispatch [:view view])
           :style {:color (if (= view cur-view) "red" "black")}}
     text]))

(defn sidebar []
  [:div
    {:style
      {
        :background "lightGray"
        :height "100vh"
        :width "225px"
      }
  }
  [sidebar-item "home" :home]
  [sidebar-item "groups" :groups]
  [sidebar-item "session" :session]
  ])

(defn back-next []
  (let [btn-style {:margin 40 :width 80 :height 30}]
  [:div {:style {
      :background "blue"
      :height "50px"
      :display "flex"
      :align-items "center"
      :justify-content "center"
    }}
    [:button
    { :disabled @(rf/subscribe [:cant-inc -1])
      :on-click #(rf/dispatch [:inc-card -1])
      :style btn-style}
      "Back"]
    [:button
     {:style btn-style
      :disabled
        (or (nil? @(rf/subscribe [:answer])) @(rf/subscribe [:cant-inc 1]))
      :on-click #(rf/dispatch [:inc-card 1])} "Next"]]))

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

(def views
  {:session session :home home :groups groups}
)

(defn app []
  (let [view @(rf/subscribe [:view])]
  [:div {:style {:display "flex"}}
  [sidebar]
  [(views view)]]))

(defn mount-root []
  (rf/dispatch-sync [:init])
  (rf/dispatch [:fetch-cards])
  (rf/dispatch [:fetch-groups])
  (r/render [app] (js/document.getElementById "app")))

(mount-root)
(.log js/console "seen")
