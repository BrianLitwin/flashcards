(ns frontend.stats.subs
  (:require [re-frame.core :as rf]))


; (defn make-map [sessions]
;   (reduce (fn [map session] (assoc map (:id session) )) {} sessions)
; )

; {:id 4, :answers [], :date "2019-11-17T16:41:37.908056Z", :list 6}

; [{id: 109, date: "2019-11-19T18:46:52.063577Z", correct: true, card: 21, session: 6}
;  {id: 110, date: "2019-11-19T18:46:55.930513Z", correct: false, card: 22, session: 6}
;  {id: 111, date: "2019-11-19T18:47:01.844145Z", correct: true, card: 23, session: 6}]

(defn get-questions [list sessions]
  (map #(-> % :question vector) (:cards list)))

(defn format-date [sesh]
  (-> sesh :date js/moment (.format "MM/DD")))

(defn name-item [item]
  (cond
    (true? item) "R"
    (false? item) "W"
    :else "" ))

(defn map-card-ids [answers]
  (reduce
  (fn [map {:keys [card correct]}] (assoc map card correct))
  {}
  answers))

(defn lookup-answers [card sessions]
  (reduce
  (fn [vec session]
    (->> card :id (get session) name-item (conj vec)))
  [(:question card)]
  sessions))

(defn get-answers [cards sessions]
  (mapv #(lookup-answers % sessions) cards))


(rf/reg-sub
  :stats/table-stats
  :<- [:stats/sessions]
  :<- [:stats/list]
  (fn [[sessions {:keys [cards] :as list}]]
    (let [cards (mapv (fn [{:keys [id question]}] {:question question :id id}) cards)
          answer-vecs (map :answers sessions)
          answer-maps (mapv map-card-ids answer-vecs)
          rows (get-answers cards answer-maps)
          headers (cons "" (mapv format-date sessions))]
    { :headers headers :rows rows })))
;
; (def answer-maps  [{} {} {21 true, 22 false, 23 true}])
; (def cards [{:question "Flexbox was designed as a ..", :id 21}
;             {:question "What are the two axes of flexbox?", :id 22}
;             {:question "What is the main axis defined by and what are its values?", :id 23}])
