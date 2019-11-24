(ns frontend.cards
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]))

(defn make [key]
  (do
    (rf/reg-sub key (fn [db] (key db)))
    (rf/reg-event-db key (fn [db [_ value]] (assoc db key value)))))

(def init-state
 {
  :session/answers []
  :session/card-index 0
  :session/hide-answer true
  :session/view :start ;;  :start :session :finish
  :session/select-list nil ;; set the id here
  :session/list nil
  :session/session-id nil

  :stats/sessions []
  :stats/list nil
  :stats/select-list-id nil

  :lists/list nil

  :page :home
  :groups []
  :lists []
  :new-group-input ""
  :new-group-names {}
  :make-list/display-cards []
  :make-list/list #{}
  :make-list/name "" })

(doall
  (map make (keys init-state)))

(rf/reg-event-db
 :init
 (fn [db]
   (merge db init-state)))


(rf/reg-event-db
 :change-group-name
 (fn [db [_ name id]]
   (let [key (keyword (str id))
         names (:new-group-names db)
         new-names (assoc names key name)]
    (assoc db :new-group-names new-names))))

(rf/reg-sub
 :change-group-name
 (fn [db [_ id]]
   (let [key (keyword (str id))
         names (:new-group-names db)
         new? (contains? key names)]
    (if new? "" (key names)))))

(rf/reg-event-db
  :success-fetch-cards
  (fn [db [_ response]]
    (assoc db
      :session/cards response
      :session/answers (-> response count (repeat nil) vec))))

(rf/reg-event-db
 :success-post-answer
 (fn [db] db))

(rf/reg-event-db
 :success-add-group
 (fn [db] db))

(rf/reg-event-fx
 :success-fetch-groups
 (fn [{:keys [db]} [_ response]]
   (let [group-id (-> response first :id)]
   {:db (assoc db :groups response )
    :dispatch [:cards-in-group group-id]}))) ;; fetch these so that in 'groups', it's initialized w/ some cards

(rf/reg-event-db
 :success-new-group
 (fn [db [_ response]]
   (assoc db :groups (conj (:groups db) response))))

(rf/reg-event-fx
 :success-save-group-name
 (fn [{:keys [db]} [_ {:keys [id] :as group}]]
   { :dispatch-n [
      [:groups (map (fn [item] (if (= (:id item) id) group item)) (:groups db))]
      [:change-group-name "" id]]}))

(rf/reg-event-db
  :success-cards-in-groups
 (fn [db [_ response]]
   (assoc db :make-list/display-cards response)))

(rf/reg-event-fx
 :cards-in-group
 (fn [{:keys [db]} [_ id]]
   {:http-xhrio
    {:method           :get
     :uri              (str "http://localhost:8001/api/group/" id "/cards/")
     :format           (ajax/json-request-format)
     :response-format  (ajax/json-response-format {:keywords? true})
     :on-success       [:success-cards-in-groups]}}
   ))

(rf/reg-event-fx
 :save-group-name
 (fn [db [_ name id]]
   {:http-xhrio
    {:method           :patch
     :uri              (str "http://localhost:8001/api/group/" id "/")
     :params           {:name name :id id}
     :format           (ajax/json-request-format)
     :response-format  (ajax/json-response-format {:keywords? true})
     :on-success       [:success-save-group-name]}}))

 (rf/reg-event-fx
  :new-group
  (fn [{:keys [db]} [_ name]]
   {:db (assoc db :new-group-input "")
    :http-xhrio
     {:method           :post
      :uri              "http://localhost:8001/api/group/"
      :params           {:name name}
      :format           (ajax/json-request-format)
      :response-format  (ajax/json-response-format {:keywords? true})
      :on-success       [:success-new-group]}}))

(rf/reg-event-fx
 :fetch-groups
 (fn []
   {:http-xhrio
    {:method           :get
     :uri              "http://localhost:8001/api/group/"
     :format           (ajax/json-request-format)
     :response-format  (ajax/json-response-format {:keywords? true})
     :on-success       [:success-fetch-groups]}}))


(rf/reg-event-fx
 :add-group
 (fn [_ [_ card group]]
   {:http-xhrio
    {:method           :post
     :uri              (str "http://localhost:8001/api/card/" card "/add_group/")
     :params           {:group group}
     :format           (ajax/json-request-format)
     :response-format  (ajax/json-response-format {:keywords? true})
     :on-success       [:success-add-group]}}))


(rf/reg-event-fx
  :post-answer
  (fn [_ [_ answer]]
  (let [card (:id @(rf/subscribe [:session/card]))
        session-id @(rf/subscribe [:session/session-id])]
  {:http-xhrio
   {:method           :post
    :uri              "http://localhost:8001/api/answer/"
    :params           {:card card :correct answer :session session-id}
    :format           (ajax/json-request-format)
    :response-format  (ajax/json-response-format {:keywords? true})
    :on-success       [:success-post-answer]}})))

(rf/reg-event-fx
 :fetch-cards
 (fn []
   {:http-xhrio
    {:method           :get
     :uri              "http://localhost:8001/api/card/"
     :params           {}
     :format           (ajax/json-request-format)
     :response-format  (ajax/json-response-format {:keywords? true})
     :on-success       [:success-fetch-cards]}}))
