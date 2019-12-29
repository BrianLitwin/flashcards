(ns frontend.make-list.events
  (:require [re-frame.core :as rf]
            [frontend.common.utils :refer [set-rm-or-add]]))

(rf/reg-event-db
  :make-list/select-group
  (fn [db [_ group-id]]
    (let [groups (:make-list/groups db)
          new-group (set-rm-or-add groups group-id)]
    (assoc db :make-list/groups new-group))))
