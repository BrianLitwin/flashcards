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

(rf/reg-event-fx
  :success-fetch-lists
  (fn [{:keys [db]} [_ response]]
    (let [id (-> response first :id)]
      {:db (assoc db :lists response
                :session/select-list id)
       :dispatch [:stats/display-list-sessions id] ;; prob not  ideal
      })))

(rf/reg-event-fx
  :fetch-list
  (fn [_ [_ list-id success-handler]]
      {:http-xhrio
       {:method           :get
        :uri              (str "http://localhost:8001/api/list/" list-id "/")
        :format           (ajax/json-request-format)
        :response-format  (ajax/json-response-format {:keywords? true})
        :on-success       [(or success-handler :success-fetch-list)]}}))

(defn randomize [vec]
  (loop [v vec i 0]
    (if (= i (count vec))
    v
    (let [n (rand-int (-> v count (- 1)))
          p (rand-int (-> v count (- 1)))
          n1 (get v n)
          p1 (get v p)
          v1 (assoc v p n1)
          v2 (assoc v1 n p1)]
      (recur v2 (inc i))))))

(rf/reg-event-db
  :success-fetch-list
  (fn [db [_ {:keys [cards] :as list}]]
    (let [cards (randomize cards)]
    (assoc db :session/list (assoc list :cards cards)))))

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
