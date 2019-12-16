(ns frontend.make-list.core
  (:require [re-frame.core :as rf]
            [frontend.common.components :refer [groups-component]]
            [frontend.make-list.dispatchers]
            [frontend.make-list.events]
            [frontend.make-list.subs]))

(defn save-list []
 [:button {:on-click #(rf/dispatch [:create-list])} "Save"])

(defn list-name []
  (let [name @(rf/subscribe [:make-list/name])]
    [:div
      [:div "List name"]
      [:input.make-list-name-input
        {:type "text"
         :value name
         :on-change #(rf/dispatch [:make-list/name (-> % .-target .-value)]) }]
      [save-list]]))

(defn make-list-groups []
  (let [groups @(rf/subscribe [:groups])
        selected-groups @(rf/subscribe [:make-list/groups])]
  [groups-component groups selected-groups :make-list/select-group]))

(defn make-list-view []
    [:div.make-list-view
    [list-name]
    [make-list-groups]])
