(ns frontend.cards
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]))

(defn make [key]
  (do
    (rf/reg-sub key (fn [db] (key db)))
    (rf/reg-event-db key (fn [db [_ value]] (assoc db key value)))))

(def init-state
 {:cards []
  :card-index 0})

(doall
  (map make (keys init-state)))

(rf/reg-event-db
 :init
 (fn [db]
   (merge db init-state)))

(rf/reg-event-db
 :inc-card
 (fn [db [_ n]] (assoc db :card-index (+ (:card-index db) n))))

(rf/reg-sub
  :can-inc
  :<- [:cards]
  :<- [:card-index]
  (fn [[cards i] [_ n]]
    (let [new-n (+ i n)
          under (> 0 new-n)
          over (>= new-n (count cards))]
      (or under over))))

(rf/reg-sub
 :card
 :<- [:cards]
 :<- [:card-index]
 (fn [[cards i]]
    (get cards i)))

(rf/reg-event-db
  :success-fetch-cards
  (fn [db [_ response]] (assoc db :cards response)))

(rf/reg-event-fx
 :fetch-cards
 (fn []
   {:http-xhrio
    {:method           :get
     :uri              "http://localhost:8001/api/cards/"
     :params           {}
     :format           (ajax/json-request-format)
     :response-format  (ajax/json-response-format {:keywords? true})
     :on-success       [:success-fetch-cards]}}))

(rf/dispatch [:init])
(rf/dispatch [:fetch-cards])
