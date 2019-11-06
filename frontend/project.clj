(defproject hello-seymore "0.1.0-SNAPSHOT"

  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.908"]
                 [reagent "0.9.0-rc2"]
                 [re-frame "0.11.0-rc1"]
                 [day8.re-frame/http-fx "0.1.6"]]

  :plugins [[lein-figwheel "0.5.13"]]

  :clean-targets [:target-path "out"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :figwheel true
              :compiler {:main "frontend.core"}
             }]
   }

   :figwheel {
     :server-port 5000
   })
