(ns frontend.session.dispatchers
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]))

(rf/reg-event-db
  :success-create-session
  (fn [db [_ {:keys [id]}]]
    (assoc db :session/session-id id)))

(rf/reg-event-fx
  :create-session
  (fn [_ [_ list-id]]
    {:http-xhrio
     {:method           :post
      :uri              "http://localhost:8001/api/session/"
      :params           {:list list-id}
      :format           (ajax/json-request-format)
      :response-format  (ajax/json-response-format {:keywords? true})
      :on-success       [:success-create-session]}}))
