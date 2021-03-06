(ns frontend.common.components
  (:require [re-frame.core :as rf]
            [frontend.common.utils :refer [keyed-list]]))

(defn make-option [{:keys [name id]}]
  [:option {:value id} name])

;;
;; select list
;;

(defn list-dropdown [{:keys [event-id]}]
  (let [lists @(rf/subscribe [:lists])
        on-change #(rf/dispatch [event-id (-> % .-target .-value)])]
    [:select.select-list
      {:on-change #(rf/dispatch [event-id (-> % .-target .-value)]) }
      (keyed-list lists make-option)]))


(defn table [{:keys [headers rows]}]
  (let [make-header (fn [header index] (prn index)[:th header])
        make-row-item (fn [item] [:td item])
        make-row (fn [row] [:tr (keyed-list row make-row-item)])
        headers (keyed-list headers make-header)
        rows (keyed-list rows make-row)]
    [:table [:tbody [:tr headers] rows]]))

;;
;; Groups
;;

(defn group-checkbox [{:keys [id name]} selected-groups update-id]
  [:ul
    [:input {
      :type "checkbox"
      :checked (contains? selected-groups id)
      :on-change #(rf/dispatch [update-id id])}]
   name])

(defn groups-component [groups selected-groups update-id]
    [:div
      (doall (for [group groups]
        ^{:key (:id group)} [group-checkbox group selected-groups update-id]))])
