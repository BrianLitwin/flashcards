(ns frontend.common.components
  (:require [re-frame.core :as rf]
            [frontend.common.utils :refer [keyed-list]]))

(defn make-option [{:keys [name id]}]
  [:option {:value id} name])

(defn list-dropdown [{:keys [event-id]}]
  (let [lists @(rf/subscribe [:lists])
        on-change #(rf/dispatch [event-id (-> % .-target .-value)])
  ]
    [:select.select-list
      {:on-change #(rf/dispatch [event-id (-> % .-target .-value)]) }
      (keyed-list lists make-option)]))


(defn table [{:keys [headers rows]}]
  (let [make-header (fn [header] [:th header])
        make-row-item (fn [item] [:td item])
        make-row (fn [row] [:tr (keyed-list row make-row-item)])]
    [:table
      [:tbody
      [:tr (keyed-list headers make-header)]
      (keyed-list rows make-row)]]))
