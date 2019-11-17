(ns frontend.stats.core
  (:require
    [frontend.stats.dispatchers]
    [frontend.stats.events]
    [re-frame.core :as rf]
    [frontend.common.components :refer [list-dropdown]]
    [frontend.common.components :refer [table]]))

(defn session-stats []
  [:div
    [list-dropdown {:event-id :stats/select-list}]
    [table {:headers ["1 " "header 2"]
            :rows [["1" "2"]["3" "4"]]

    }]])
