(ns frontend.testall.dispatchers
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]))

(rf/reg-event-db
 :testall/success-fetch
 (fn [db [_ response]]
   (assoc db :testall/session response)))

(rf/reg-event-fx
 :testall/fetch
 (fn [{:keys [db]}]
   {:http-xhrio
    {:method           :get
     :uri              (str "http://localhost:8001/api/session/testall")
     :format           (ajax/json-request-format)
     :response-format  (ajax/json-response-format {:keywords? true})
     :on-success       [:testall/success-fetch]}}))
