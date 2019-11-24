(ns frontend.session.events
  (:require [re-frame.core :as rf]))

  (rf/reg-event-db
   :session/inc-card
   (fn [db [_ n]]
     (let [card-index @(rf/subscribe [:session/card-index])
           cards @(rf/subscribe [:session/cards])
           answers @(rf/subscribe [:session/answers])
           complete? @(rf/subscribe [:session/complete?])
           on-last-card (= (+ card-index 1) (count cards))
           new-n (+ card-index n)
           hide-answer
           (and
             (> new-n card-index)
             (-> answers (get new-n) nil?))]
     (assoc
       db
       :session/card-index new-n
       :session/hide-answer hide-answer
       :session/view (if (and on-last-card complete?) :finish :session)))))

(rf/reg-event-fx
 :session/set-answer
 (fn [{:keys [db]} [_ answer]]
   (let [answers @(rf/subscribe [:session/answers])
         card-index @(rf/subscribe [:session/card-index])
         ]
     {:db (assoc db
      :session/answers
        (assoc answers card-index answer))
      :dispatch [:post-answer answer]})))

(rf/reg-event-fx
 :session/start
 (fn [{:keys [db]}]
   (let [list (:session/select-list db)]
   { :db (assoc db :session/view :session )
     :dispatch-n [[:fetch-list list]
                  [:create-session list]]})))

(rf/reg-event-db
 :session/finish
 (fn [db] (assoc db :session/view :start)))
