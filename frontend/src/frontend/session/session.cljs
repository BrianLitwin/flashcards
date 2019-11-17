(ns frontend.session
  (:require [re-frame.core :as rf]
            [frontend.utils :refer [keyed-list]]))

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
    [:p (str (:correct sesh) " / " (:total sesh))]
    [:p (str (:index progress) " / " (:total progress))]
    [back-next]
    [set-answer]
    [show-answer]

      [:div (:id card)]
      [:div (:question card)]
      [:div
        {:style
         {:display (if hide-answer "none" "inline-block")
          :white-space "pre"}
         :rows 30
         :cols 300}
        (:answer card)]]))

(defn make-option [{:keys [name id]}]
  (prn list)
  [:option {:value id} name])

(defn start-view []
  (let [lists @(rf/subscribe [:lists])]
  [:div.session-start-view
    [:div "Choose a list: "]
    [:select.select-list
      {:on-change #(rf/dispatch [:session/select-list (-> % .-target .-value)]) }
      (keyed-list lists make-option)]
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

;; events

(rf/reg-event-db
 :session/inc-card
 (fn [{:keys [card-index answers] :as db} [_ n]]
   (let [new-n (+ card-index n)
         hide-answer
         (and
           (> new-n card-index)
           (-> answers (get new-n) nil?))]
   (assoc
     db
     :session/card-index new-n
     :session/hide-answer hide-answer ))))


(rf/reg-event-fx
 :session/set-answer
 (fn [{:keys [db]} [_ answer]]
   (let [answers @(rf/subscribe [:session/answers])
         card-index @(rf/subscribe [:session/card-index])]
     {:db (assoc db
      :session/answers
        (assoc answers card-index answer))
      :dispatch [:post-answer answer]})))

(rf/reg-event-fx
 :session/start
 (fn [{:keys [db]}]
   {
     :dispatch [:fetch-list]
     :db (assoc db :session/view :session)}))

;; subscriptions

(rf/reg-sub
 :session/cards
 :<- [:session/list]
 (fn [{:keys [cards]}] cards))

(rf/reg-sub
  :session/cant-inc
  :<- [:session/cards]
  :<- [:session/card-index]
  (fn [[cards i] [_ n]]
    (let [new-n (+ i n)
          under (> 0 new-n)
          over (>= new-n (count cards))]
        (or under over))))

(rf/reg-sub
  :session/card
  :<- [:session/cards]
  :<- [:session/card-index]
  (fn [[cards i]] (get cards i)))

(rf/reg-sub
  :session/answer
  :<- [:session/answers]
  :<- [:session/card-index]
  (fn [[answers i]] (get answers i)))

(rf/reg-sub
  :session/score
  :<- [:session/answers]
  (fn [answers]
    (let [answered (filter #(not (nil? %)) answers)
      correct (filter true? answered)]
      {:correct (count correct) :total (count answered)})))

(rf/reg-sub
  :session/completed
  :<- [:session/cards]
  :<- [:session/card-index]
  (fn [[cards i]]
    {:index i :total (count cards)}))
