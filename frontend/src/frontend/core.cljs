(ns frontend.core
    (:require [reagent.core :as r]
              [frontend.cards]
              [frontend.session.core :refer [session]]
              [frontend.stats.core :refer [session-stats]]
              [frontend.lists.core :refer [lists-page]]
              [frontend.group.core :refer [groups]]
              [frontend.router :refer [set-url]]
              [cljsjs.moment]
              [re-frame.core :as rf]
              [day8.re-frame.http-fx]))

(enable-console-print!)

(println "This text is printed from src/frontend/core.cljs. and edit it and see reloading in action.")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:text "Hello world!"}))

(defn sidebar-item [text page]
  (let [current-page @(rf/subscribe [:page])]
    [:div {:on-click #(set-url page)
           :class
            (if  (= page current-page)
            ["sidebar-menu-item", "sidebar-menu-item__highlighted"]
             "sidebar-menu-item")}
     text]))

(defn sidebar []
  [:div.sidebar-menu
    [sidebar-item "home" "home"]
    [sidebar-item "groups" "groups"]
    [sidebar-item "new list" "new-list"]
    [sidebar-item "lists" "list"]
    [sidebar-item "session" "session"]
    [sidebar-item "stats" "stats"]])

(defn home [] [:div "home"])

(defn make-list []
  (let [cards @(rf/subscribe [:make-list/display-cards])
        list @(rf/subscribe [:make-list/list])
        groups @(rf/subscribe [:groups])
        new-list
          #(rf/dispatch
            [:make-list/list
            (if (contains? list %) (disj list %) (conj list %))])
        card-ids (->> cards (map :id) set)
        all-added (and
                    (= (clojure.set/intersection list card-ids) card-ids)
                    (-> card-ids count (= 0) not))
        add-or-rm-all
          #(rf/dispatch
            [:make-list/list
              (if all-added
                (clojure.set/difference list card-ids)
                (into list card-ids))])]
  [:div
    [:select
      {:on-change
         #(rf/dispatch [:cards-in-group (-> % .-target .-value)])}
         (doall (for [{:keys [name id]} groups]
           ^{:key id} [:option {:value id} name ]))]
  [:div
    [:input
      {:type "checkbox"
       :checked all-added
       :on-change #(add-or-rm-all)}]
       "Add group"]
  (doall
    (for [[i {:keys [id] :as card}] (map-indexed vector cards)]
      ^{:key id}
      [:ul
      [:input
      {:type "checkbox"
       :checked (contains? list id)
       :on-change #(new-list id)}]
      (:question card)]))]))

(defn new-list []
  (let [name @(rf/subscribe [:make-list/name])
        list @(rf/subscribe [:make-list/list])
        disabled (and (= (count list) 0) (= (count name) 0))]
  [:div {:style {:width "100%"}}
    [:button "Make new list"]
    [:input
      {:type "text"
       :value name
       :on-change
        #(rf/dispatch [:make-list/name (-> % .-target .-value)])}]
    [:button {:disabled disabled
              :on-click #(rf/dispatch [:create-list])} "Save"]
    [make-list]]))

(def views
  { :session session
    :home home
    :groups groups
    :list lists-page
    :new-list new-list
    :stats session-stats})

(defn app []
  (let [page @(rf/subscribe [:page])]
  [:div.page
  [sidebar]
  [(page views)]]))

(defn mount-root []
  (rf/dispatch-sync [:init])
  (rf/dispatch [:fetch-cards])
  (rf/dispatch [:fetch-groups])
  (rf/dispatch [:fetch-lists])
  (r/render [app] (js/document.getElementById "app")))

(mount-root)
