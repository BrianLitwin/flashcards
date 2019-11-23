(ns frontend.lists.dispatchers
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]))

(rf/reg-event-fx
  :fetch-lists
  (fn []
    {:http-xhrio
     {:method           :get
      :uri              (str "http://localhost:8001/api/list/")
      :format           (ajax/json-request-format)
      :response-format  (ajax/json-response-format {:keywords? true})
      :on-success       [:success-fetch-lists]}}))

(rf/reg-event-db
  :success-fetch-lists
  (fn [db [_ response]]
    (assoc db :lists response)))

(rf/reg-event-fx
  :fetch-list
  (fn [_ [_ list-id success-handler]]
      {:http-xhrio
       {:method           :get
        :uri              (str "http://localhost:8001/api/list/" list-id "/")
        :format           (ajax/json-request-format)
        :response-format  (ajax/json-response-format {:keywords? true})
        :on-success       [(or success-handler :success-fetch-list)]}}))

(rf/reg-event-db
  :success-fetch-list
  (fn [db [_ list]]
    (assoc db :session/list list)))

(rf/reg-event-fx
 :create-list
 (fn [{:keys [db]}]
   (let [list @(rf/subscribe [:make-list/list])
         name @(rf/subscribe [:make-list/name])]
   {:db (assoc db :make-list/name "" :make-list/list #{})
    :http-xhrio
    {:method           :post
     :uri              (str "http://localhost:8001/api/list/")
     :params           {:name name :cards list}
     :format           (ajax/json-request-format)
     :response-format  (ajax/json-response-format {:keywords? true})
     :on-success       [:success-create-list]}})))

(rf/reg-event-db
  :success-create-list
  (fn [{:keys [lists] :as db} [_ new-list]]
    (assoc db :lists (conj lists new-list))))