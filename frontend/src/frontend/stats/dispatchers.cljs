(ns frontend.stats.dispatchers
 (:require [re-frame.core :as rf]
           [ajax.core :as ajax]))

(rf/reg-event-db
 :success-list-session
 (fn [db [_ sessions]]
   (assoc db :stats/sessions sessions)))

(rf/reg-event-fx
 :fetch-list-sessions
 (fn [_ [_ list-id]]
   {:http-xhrio
    {:method           :get
     :uri              (str "http://localhost:8001/api/list/" list-id "/sessions/")
     :params           {:list list-id}
     :format           (ajax/json-request-format)
     :response-format  (ajax/json-response-format {:keywords? true})
     :on-success       [:success-list-session]}}))
