(ns frontend.session.core
  (:require [re-frame.core :as rf]
            [frontend.session.subs]
            [frontend.session.events]
            [frontend.session.dispatchers]
            [frontend.common.components :refer [list-dropdown]]))

;; views

(defn back-next-model
  [{:keys [can-increment-fn next-item-fn total]}]
  (let [current (r/atom 0)
        can-inc-by?
            #(let [new-n (+ % current)
                  over (> new-n total)
                  under (> 0 new-n)]
                  (not (or over under (not (can-increment-fn)))))
        increment (do
                    (next-item-fn)
                    (reset! current (+ % @current)))]
          (prn current)
      {:can-inc-by? can-inc-by? :increment increment}))

(defn back-next-buttons [model-options]
  (let [{:keys [can-inc-by? increment]} (back-next-model model-options)]
  [:div.session-nav-container
    [:button.back-next-btn
    {:disabled (can-inc-by? -1)
     :on-click #(increment -1)}
      "Back"]
    [:button.back-next-btn
     {:disabled (not (can-inc-by? 1))
      :on-click #(increment 1)}
      "Next"]]))

(defn back-next []
  (back-next-buttons
    {:can-increment-fn #(nil? @(rf/subscribe [:session/answer]))
     :next-item-fn #(rf/dispatch [:session/inc-card -1])
     :total #(count @(rf/subscribe [:session/cards]))}))

; (defn back-next []
;   [:div.session-nav-container
;     [:button.back-next-btn
;     {:disabled @(rf/subscribe [:session/cant-inc -1])
;      :on-click #(rf/dispatch [:session/inc-card -1])}
;       "Back"]
;     [:button.back-next-btn
;      {:disabled
;         (or (nil? @(rf/subscribe [:session/answer])) @(rf/subscribe [:session/cant-inc 1]))
;       :on-click #(rf/dispatch [:session/inc-card 1])} "Next"]])

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
  [:div
  [:div "finished"]
  [:button {:on-click #(rf/dispatch [:session/inc-card -1])} "go back"]
  [:button {:on-click #(rf/dispatch [:session/finish])} "complete"]])

(def views
 {:start start-view
  :session session-view
  :finish finish-view})

(defn session []
  (let [view @(rf/subscribe [:session/view])]
    [:div.session-container [(views view)]]))
