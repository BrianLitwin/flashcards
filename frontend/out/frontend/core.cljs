(ns frontend.core
  (:require [reagent.core :as r]
            [frontend.cards]
            [re-frame.core :as rf]
            [day8.re-frame.http-fx]))


(defn app []
  (let [card @(rf/subscribe [:card])]
  [:div
  [:button {
    :disabled @(rf/subscribe [:can-inc -1])
    :on-click #(rf/dispatch [:inc-card -1])}
    "Back"]
  [:button
   {:disabled @(rf/subscribe [:can-inc 1])
    :on-click #(rf/dispatch [:inc-card 1])} "Next"]
    [:div (:id card)]
    [:div (:question card)]
    [:div
      {:style
       {:display "inline-block"
        :white-space "pre"}
       :rows 30
       :cols 300}
      (:answer card)]]))

(defn mount-root []
  (r/render [app] (js/document.getElementById "app")))

(mount-root)
