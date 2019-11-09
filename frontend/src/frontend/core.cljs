(ns frontend.core
  (:require [reagent.core :as r]
            [frontend.cards]
            [re-frame.core :as rf]
            [day8.re-frame.http-fx]))


(defn app []
  (let [card @(rf/subscribe [:card])
        answer @(rf/subscribe [:answer])
        hide-answer @(rf/subscribe [:hide-answer])]
  [:div
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
        "Wrong"]
    [:button
      {:on-click #(rf/dispatch [:set-answer true])
       :style
        {:background (if (true? answer) "lightBlue")}}
        "Right"]]
    [:div
      [:button
        {:on-click
          #(rf/dispatch [:hide-answer (not hide-answer)])}
      "Show"
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

(defn mount-root []
  (r/render [app] (js/document.getElementById "app")))

(mount-root)
