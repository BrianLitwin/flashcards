(ns frontend.common.utils)

(defn keyed-list [items component]
  (for [[index item] (map-indexed vector items)]
    ^{:key index} [component item]))
