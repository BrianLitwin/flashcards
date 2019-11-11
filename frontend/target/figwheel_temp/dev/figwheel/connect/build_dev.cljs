(ns figwheel.connect.build-dev (:require [frontend.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "dev", :websocket-url "ws://localhost:5000/figwheel-ws"})

