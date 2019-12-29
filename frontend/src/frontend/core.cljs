(ns frontend.core
    (:require [reagent.core :as r]
              [frontend.cards]
              [frontend.session.core :refer [session]]
              [frontend.stats.core :refer [session-stats]]
              [frontend.lists.core :refer [lists-page]]
              [frontend.group.core :refer [groups]]
              [frontend.edit-list.core :refer [edit-list]]
              [frontend.make-list.core :refer [make-list-view]]
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
    [sidebar-item "edit list" "edit-list"]
    [sidebar-item "lists" "list"]
    [sidebar-item "session" "session"]
    [sidebar-item "stats" "stats"]
    [sidebar-item "test all" "testall"]])


(defn menu []
  (let [show (r/atom true)]
    [:div
      [:input]
      [:div {:style {:background "lightYellow"}}
        (for [x (range 10)]
          [:div{ :mouseOver #(prn "1")  :style {:height "30px"}} x])
      ]]))

(defn home [] [menu])
(defn testall [] [:div])

(def views
  { :session session
    :home home
    :groups groups
    :list lists-page
    :new-list make-list-view
    :edit-list edit-list
    :stats session-stats
    :testall testall})

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
