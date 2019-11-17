(ns frontend.stats.events
  (:require [re-frame.core :as rf]))

(rf/reg-event-fx
 :stats/display-list-sessions
 (fn [{:keys [db]} [_ list-id]]
   {:db (assoc db :stats/select-list-id list-id)
    :dispatch [:list-sessions list-id]}))
