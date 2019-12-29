(ns frontend.common.utils)

(defn keyed-list [items component]
  (for [[index item] (map-indexed vector items)]
    ^{:key index} [component item index]))

(defn set-rm-or-add [set item]
  (if (contains? set item)
    (disj set item)
    (conj set item)))
