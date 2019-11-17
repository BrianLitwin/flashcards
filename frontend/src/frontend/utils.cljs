(ns frontend.utils)

(defn keyed-list [items component]
  (for [[index item] (map-indexed vector items)]
    ^{:key index} [component item]))
