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

(defn session []
  (let [card @(rf/subscribe [:card])
        answer @(rf/subscribe [:answer])
        hide-answer @(rf/subscribe [:hide-answer])
        progress @(rf/subscribe [:session-stats])
        sesh @(rf/subscribe [:answered-correctly])]
  [:div {:style {:background "green"}}
  [:p (str (:correct sesh) " / " (:total sesh))]
  [:p (str (:index progress) " / " (:total progress))]
  [:button {
    :disabled @(rf/subscribe [:cant-inc -1])
    :on-click #(rf/dispatch [:inc-card -1])}
    "Back"]
  [:button
   {:disabled
      (or (nil? answer) @(rf/subscribe [:cant-inc 1]))
    :on-click #(rf/dispatch [:inc-card 1])} "Next"]
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

(defn groups []
  (let [groups @(rf/subscribe [:groups])
        text @(rf/subscribe [:new-group-input])]
  [:div
      [:input
        { :value text
          :type "text"
          :on-change #(rf/dispatch [:new-group-input (-> % .-target .-value)])}]
       [:button {:on-click #(rf/dispatch [:new-group text])} "Save"]

    (doall (for [group groups]
      [:ul {:key (:id group)} (:name group)]))]))

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
