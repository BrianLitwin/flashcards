(ns frontend.router
  (:require [bide.core :as bide]
            [re-frame.core :as rf]))

(defn on-navigate
    "A function which will be called on each route change."
    [name params query]
    (rf/dispatch [:page name])
    (println "Route change to: " name params query))

(def router
  (bide/router
    [["/home" :home]
     ["/groups" :groups]
     ["/new-list" :new-list]
     ["/list" :list]
     ["/session" :session]
     ["/stats" :stats]
     ["*" :not-found]]))

(bide/start! router {:default :home
                     :on-navigate on-navigate})

(defn set-url [page]
    (apply on-navigate (bide/match router (str "/" page)))
    (js/window.history.pushState nil nil page))
