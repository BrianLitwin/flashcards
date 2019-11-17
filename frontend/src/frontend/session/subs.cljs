(ns frontend.session.subs
  (:require [re-frame.core :as rf]))

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

(rf/reg-sub
 :session/ready-to-finish
 :<- [:session/cards]
 :<- [:session/answers]
 (fn [[cards answers]]
   (->> answers (filter nil?) empty?)))
