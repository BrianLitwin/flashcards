(ns frontend.cards
  (:require [re-frame.core :as rf]
            [ajax.core :as ajax]))

(defn make [key]
  (do
    (rf/reg-sub key (fn [db] (key db)))
    (rf/reg-event-db key (fn [db [_ value]] (assoc db key value)))))

(def init-state
 {:cards []
  :answers []
  :card-index 0
  :hide-answer true
  :view :home
  :groups []
  :new-group-input ""
  :new-group-names {}
  :make-list/display-cards []
  :make-list/list #{}})

(doall
  (map make (keys init-state)))

(rf/reg-event-db
 :init
 (fn [db]
   (merge db init-state)))

(rf/reg-event-db
 :inc-card
 (fn [{:keys [card-index answers] :as db} [_ n]]
   (let [new-n (+ card-index n)
         hide-answer
         (and
           (> new-n card-index)
           (-> answers (get new-n) nil?))]
   (assoc
     db
     :card-index new-n
     :hide-answer hide-answer ))))

(rf/reg-sub
  :cant-inc
  :<- [:cards]
  :<- [:card-index]
  (fn [[cards i] [_ n]]
    (let [new-n (+ i n)
          under (> 0 new-n)
          over (>= new-n (count cards))]
        (or under over))))

(rf/reg-sub
 :card
 :<- [:cards]
 :<- [:card-index]
 (fn [[cards i]] (get cards i)))

(rf/reg-sub
 :answer
 :<- [:answers]
 :<- [:card-index]
 (fn [[answers i]] (get answers i)))

(rf/reg-sub
 :answered-correctly
 :<- [:answers]
 (fn [answers]
   (let [answered (filter #(not (nil? %)) answers)
         correct (filter true? answered)]
    {:correct (count correct) :total (count answered)})))

(rf/reg-sub
 :session-stats
 :<- [:cards]
 :<- [:card-index]
 (fn [[cards i]]
   {:index i :total (count cards)}))

(rf/reg-event-fx
 :set-answer
 (fn [{:keys [db] :as db} [_ answer]]
   (let [{:keys [answers card-index]} db]
    {:db (assoc db
          :answers
          (assoc answers card-index answer))
     :dispatch [:post-answer answer]})))

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
      :cards response
      :answers (-> response count (repeat nil) vec))))

(rf/reg-event-db
 :success-post-answer
 (fn [db] db))

(rf/reg-event-db
 :success-add-group
 (fn [db] db))

(rf/reg-event-db
 :success-fetch-groups
 (fn [db [_ response]] (assoc db :groups response)))

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
  (let [card (:id @(rf/subscribe [:card]))]
  {:http-xhrio
   {:method           :post
    :uri              "http://localhost:8001/api/answer/"
    :params           {:card card :correct answer}
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
