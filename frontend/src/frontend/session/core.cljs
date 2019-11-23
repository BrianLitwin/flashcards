(ns frontend.session.core
  (:require [re-frame.core :as rf]
            [frontend.session.subs]
            [frontend.session.events]
            [frontend.session.dispatchers]
            [frontend.common.components :refer [list-dropdown]]))

;; views

(defn back-next []
  [:div.session-nav-container
    [:button.back-next-btn
    {:disabled @(rf/subscribe [:session/cant-inc -1])
     :on-click #(rf/dispatch [:session/inc-card -1])}
      "Back"]
    [:button.back-next-btn
     {:disabled
        (or (nil? @(rf/subscribe [:session/answer])) @(rf/subscribe [:session/cant-inc 1]))
      :on-click #(rf/dispatch [:session/inc-card 1])} "Next"]])

(defn set-answer-btn [set-correct?]
  (let [answer @(rf/subscribe [:session/answer])
        title (if set-correct? "Correct" "Inccorect")
        ;;emphasize? (if set-correct? (true? answer) (false? answer))
        set-answer
          #(rf/dispatch [:session/set-answer (if set-correct? true false)])]
    [:button {:on-click #(set-answer)} title]))

(defn show-answer []
  (let [hide-answer @(rf/subscribe [:session/hide-answer])]
  [:div.session-nav-container
    [:button
      {:on-click
        #(rf/dispatch [:session/hide-answer (not hide-answer)])}
    "Show answer"]]))

(defn set-answer []
  [:div.session-nav-container
    [set-answer-btn false]
    [set-answer-btn true]])

  (defn session-view []
    (let [card @(rf/subscribe [:session/card])
          answer @(rf/subscribe [:session/answer])

          progress @(rf/subscribe [:session/completed])
          sesh @(rf/subscribe [:session/score])
          hide-answer @(rf/subscribe [:session/hide-answer])]
    [:div
    [:p " " (str (:correct sesh) " / " (:total sesh))]
    [:p (str (+ 1 (:index progress)) " of " (:total progress) " total cards")]
    [back-next]
    [set-answer]
    [show-answer]

      [:div (:id card)]
      [:div (:question card)]
      [:div
        {:style
         {:display (if hide-answer "none" "inline-block")
          :white-space "pre-wrap"
          :max-width "80%"}}
        (:answer card)]]))

(defn start-view []
  (let [lists @(rf/subscribe [:lists])]
  [:div.session-start-view
    [:div "Choose a list: "]
    [list-dropdown {:event-id :session/select-list}]
    [:button.start-session-button
      {:on-click #(rf/dispatch [:session/start])}
    "Start"]]))

(defn finish-view []
 [:div "finished"])

(def views
 {:start start-view
  :session session-view
  :finish finish-view})

(defn session []
  (let [view @(rf/subscribe [:session/view])]
    [:div.session-container [(views view)]]))
