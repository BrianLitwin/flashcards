(ns frontend.stats.dispatchers
 (:require [re-frame.core :as rf]
           [ajax.core :as ajax]))

(rf/reg-event-fx
  :create-session
  (fn [_ [_ list-id]]
  (let [card (:id @(rf/subscribe [:session/card]))]
    {:http-xhrio
     {:method           :post
      :uri              "http://localhost:8001/api/session/"
      :params           {:list list-id}
      :format           (ajax/json-request-format)
      :response-format  (ajax/json-response-format {:keywords? true})
      :on-success       [:success-create-session]}})))
