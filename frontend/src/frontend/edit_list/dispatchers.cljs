(ns frontend.edit-list.dispatchers
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]))

(rf/reg-event-fx
 :edit-list/save
 (fn [{:keys [db]}]
   (let [list @(rf/subscribe [:edit-list/list])
         groups @(rf/subscribe [:edit-list/groups])]
   {:http-xhrio
    {:method           :post
     :params           {:groups groups}
     :uri              (str "http://localhost:8001/api/list/" (:id list) "/edit_groups/")
     :format           (ajax/json-request-format)
     :response-format  (ajax/json-response-format {:keywords? true})
     :on-success       [:success-fetch-lists]}})))
