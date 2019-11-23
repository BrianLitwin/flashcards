(ns frontend.lists.core
  (:require [re-frame.core :as rf]
            [frontend.lists.dispatchers]
            [frontend.lists.events]
            [frontend.lists.subs]
            [frontend.common.utils :refer [keyed-list]]
            [frontend.common.components :refer [list-dropdown]]))

(defn list-component [{:keys [name]}]
  [:div name])

(defn card [card]
  [:ul (:question card)])

(defn lists-page []
  (let [list @(rf/subscribe [:lists/list])]
  (prn (:cards list))
    [:div.lists-page
    (list-dropdown {:event-id :lists/select-list-id})
    (keyed-list (:cards list) card)]))
