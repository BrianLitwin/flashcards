(ns frontend.stats.events
  (:require [re-frame.core :as rf]))

(rf/reg-event-db
 :stats/set-list
 (fn [db [_ list]]
   (assoc db :stats/list list)))

(rf/reg-event-fx
 :stats/display-list-sessions
 (fn [{:keys [db]} [_ list-id]]
   {:db (assoc db :stats/select-list-id list-id)
    :dispatch-n [
      [:fetch-list-sessions list-id]
      [:fetch-list list-id :stats/set-list]]}))
