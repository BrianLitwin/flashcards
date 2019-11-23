(ns frontend.session.events
  (:require [re-frame.core :as rf]))

  (rf/reg-event-db
   :session/inc-card
   (fn [db [_ n]]
     (let [card-index @(rf/subscribe [:session/card-index])
           answers @(rf/subscribe [:session/answers])
           new-n (+ card-index n)
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
