(ns frontend.edit-list.core
  (:require [re-frame.core :as rf]

            [frontend.edit-list.dispatchers]
            [frontend.common.components :refer [list-dropdown
                                                groups-component]]
            [frontend.common.utils :refer [set-rm-or-add]]))

(defn edit-list []
  (let [groups @(rf/subscribe [:groups])
        selected-groups @(rf/subscribe [:edit-list/groups])]
  [:div
    [list-dropdown {:event-id :edit-list/select-list}]
    [:button {:on-click #(rf/dispatch [:edit-list/save])} "Save"]
    [groups-component groups selected-groups :edit-list/select-group]]))

(rf/reg-sub
 :edit-list/selected-groups
 :<- [:edit-list/list]
 (fn [list]
   (-> list :groups set)))

(rf/reg-event-db
  :edit-list/success-select-list
  (fn [db [_ list]]
    (assoc db
      :edit-list/list list
      :edit-list/groups (->> list :groups (map :id) set))))

(rf/reg-event-fx
  :edit-list/select-list
  (fn [_ [_ list-id]]
    {:dispatch [:fetch-list list-id :edit-list/success-select-list]}))

(rf/reg-event-db
 :edit-list/select-group
 (fn [db [_ group-id]]
  (let [groups @(rf/subscribe [:edit-list/groups])]
    (assoc db :edit-list/groups (set-rm-or-add groups group-id)))))
