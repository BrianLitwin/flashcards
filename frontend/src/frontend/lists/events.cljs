(ns frontend.lists.events
  (:require [re-frame.core :as rf]))

(rf/reg-event-fx
 :lists/init
 (fn []
   { :dispatch [:fetch-lists]}))

(rf/reg-event-db
 :lists/success-fetch-list
 (fn [db [_ list]]
   (assoc db :lists/list list)))

(rf/reg-event-fx
 :lists/select-list-id
 (fn [_ [_ id]]
   {:dispatch [:fetch-list id :lists/success-fetch-list]}))
