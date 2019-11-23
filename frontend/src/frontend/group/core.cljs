(ns frontend.group.core
  (:require
    [frontend.group.subs]
    [frontend.group.events]
    [frontend.group.dispatchers]
    [re-frame.core :as rf]))

  (defn group-info [{:keys [name id url]}]
    (let [new-name @(rf/subscribe [:change-group-name id])]
    [:div.group-info
    {:style {:height "35px" :paddingLeft "25px"}}
    [:div {:style {:cursor "pointer"}
           :on-click #(.open js/window url)}
     name]
          [:div {:style {:paddingLeft "25px" :display "inline"}}
          "Rename"]
          [:input
            {:value new-name
             :on-change #(rf/dispatch [:change-group-name (-> % .-target .-value) id])
            }]
          [:button
            {:on-click #(rf/dispatch [:save-group-name new-name id])}
          "save"]]))

  (defn groups []
    (let [groups @(rf/subscribe [:groups])
          text @(rf/subscribe [:new-group-input])]
    [:div
        [:h5 "New Group"]
        [:input
          { :value text
            :type "text"
            :on-change #(rf/dispatch [:new-group-input (-> % .-target .-value)])}]
         [:button {:on-click #(rf/dispatch [:new-group text])} "Save"]
      (doall (for [group groups] ^{:key (:id group)} [group-info group]))]))
