(ns frontend.stats.subs
  (:require [re-frame.core :as rf]))


; (defn make-map [sessions]
;   (reduce (fn [map session] (assoc map (:id session) )) {} sessions)
; )

; {:id 4, :answers [], :date "2019-11-17T16:41:37.908056Z", :list 6}

(defn get-questions [list sessions]
  (prn (first sessions))
  (map #(-> % :question vector) (:cards list)))

(defn format-date [sesh]
  (-> sesh :date js/moment (.format "MM/DD")))

(rf/reg-sub
  :stats/table-stats
  :<- [:stats/sessions]
  :<- [:stats/list]
  (fn [[sessions list]]
    { :headers (cons "" (map format-date sessions))
      :rows (get-questions list sessions)}))
