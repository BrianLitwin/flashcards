(ns frontend.stats.core
  (:require
    [frontend.stats.dispatchers]
    [frontend.stats.events]
    [frontend.stats.subs]
    [re-frame.core :as rf]
    [frontend.common.components :refer [list-dropdown]]
    [frontend.common.components :refer [table]]))

(defn session-stats []
  (let [stats @(rf/subscribe [:stats/table-stats])]
    [:div
      [list-dropdown {:event-id :stats/display-list-sessions}]
      [table stats]]))
