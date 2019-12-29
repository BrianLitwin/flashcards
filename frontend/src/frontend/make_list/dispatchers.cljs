(ns frontend.make-list.dispatchers
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]))

(rf/reg-event-fx
 :create-list
 (fn [{:keys [db]}]
   (let [groups @(rf/subscribe [:make-list/groups])
         name @(rf/subscribe [:make-list/name])]
   {:db (assoc db :make-list/name "" :make-list/groups #{})
    :http-xhrio
    {:method           :post
     :uri              (str "http://localhost:8001/api/list/")
     :params           {:name name :groups groups}
     :format           (ajax/json-request-format)
     :response-format  (ajax/json-response-format {:keywords? true})
     :on-success       [:success-create-list]}})))

(rf/reg-event-db
  :success-create-list
  (fn [{:keys [lists] :as db} [_ new-list]]
    (assoc db :lists (conj lists new-list))))
