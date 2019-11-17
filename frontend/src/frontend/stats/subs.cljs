(ns frontend.stats.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
  :stats/table-stats
  :<- [:stats/sessions]
  (fn [sessions]
    {
      :headers (map :date sessions)
      :rows (map sessions)
    }
    ))
