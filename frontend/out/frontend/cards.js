// Compiled by ClojureScript 1.9.908 {}
goog.provide('frontend.cards');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
frontend.cards.make = (function frontend$cards$make(key){
re_frame.core.reg_sub.call(null,key,(function (db){
return key.call(null,db);
}));

return re_frame.core.reg_event_db.call(null,key,(function (db,p__41117){
var vec__41118 = p__41117;
var _ = cljs.core.nth.call(null,vec__41118,(0),null);
var value = cljs.core.nth.call(null,vec__41118,(1),null);
return cljs.core.assoc.call(null,db,key,value);
}));
});
frontend.cards.init_state = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"card-index","card-index",-335870362),(0),new cljs.core.Keyword(null,"hide-answer","hide-answer",477568072),true], null);
cljs.core.doall.call(null,cljs.core.map.call(null,frontend.cards.make,cljs.core.keys.call(null,frontend.cards.init_state)));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),(function (db){
return cljs.core.merge.call(null,db,frontend.cards.init_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc-card","inc-card",-867154536),(function (p__41121,p__41122){
var map__41123 = p__41121;
var map__41123__$1 = ((((!((map__41123 == null)))?((((map__41123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41123):map__41123);
var db = map__41123__$1;
var card_index = cljs.core.get.call(null,map__41123__$1,new cljs.core.Keyword(null,"card-index","card-index",-335870362));
var answers = cljs.core.get.call(null,map__41123__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var vec__41124 = p__41122;
var _ = cljs.core.nth.call(null,vec__41124,(0),null);
var n = cljs.core.nth.call(null,vec__41124,(1),null);
var new_n = (card_index + n);
var hide_answer = ((new_n > card_index)) && ((cljs.core.get.call(null,answers,new_n) == null));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"card-index","card-index",-335870362),new_n,new cljs.core.Keyword(null,"hide-answer","hide-answer",477568072),hide_answer);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cant-inc","cant-inc",-1870503003),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__41128,p__41129){
var vec__41130 = p__41128;
var cards = cljs.core.nth.call(null,vec__41130,(0),null);
var i = cljs.core.nth.call(null,vec__41130,(1),null);
var vec__41133 = p__41129;
var _ = cljs.core.nth.call(null,vec__41133,(0),null);
var n = cljs.core.nth.call(null,vec__41133,(1),null);
var new_n = (i + n);
var under = ((0) > new_n);
var over = (new_n >= cljs.core.count.call(null,cards));
return (under) || (over);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__41136){
var vec__41137 = p__41136;
var cards = cljs.core.nth.call(null,vec__41137,(0),null);
var i = cljs.core.nth.call(null,vec__41137,(1),null);
return cljs.core.get.call(null,cards,i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"answer","answer",-742633163),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__41140){
var vec__41141 = p__41140;
var answers = cljs.core.nth.call(null,vec__41141,(0),null);
var i = cljs.core.nth.call(null,vec__41141,(1),null);
return cljs.core.get.call(null,answers,i);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"set-answer","set-answer",1193421704),(function (p__41144,p__41145){
var map__41146 = p__41144;
var map__41146__$1 = ((((!((map__41146 == null)))?((((map__41146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41146.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41146):map__41146);
var db = map__41146__$1;
var db__$1 = cljs.core.get.call(null,map__41146__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41147 = p__41145;
var _ = cljs.core.nth.call(null,vec__41147,(0),null);
var answer = cljs.core.nth.call(null,vec__41147,(1),null);
var map__41151 = db__$1;
var map__41151__$1 = ((((!((map__41151 == null)))?((((map__41151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41151):map__41151);
var answers = cljs.core.get.call(null,map__41151__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var card_index = cljs.core.get.call(null,map__41151__$1,new cljs.core.Keyword(null,"card-index","card-index",-335870362));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.assoc.call(null,answers,card_index,answer)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-answer","post-answer",-1390820830),answer], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-fetch-cards","success-fetch-cards",-1017431355),(function (db,p__41153){
var vec__41154 = p__41153;
var _ = cljs.core.nth.call(null,vec__41154,(0),null);
var response = cljs.core.nth.call(null,vec__41154,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cards","cards",169174038),response,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,response),null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-post-answer","success-post-answer",1502812737),(function (db){
return db;
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"post-answer","post-answer",-1390820830),(function (_,p__41157){
var vec__41158 = p__41157;
var ___$1 = cljs.core.nth.call(null,vec__41158,(0),null);
var answer = cljs.core.nth.call(null,vec__41158,(1),null);
var card = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152)], null))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/answer/",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card","card",-1430355152),card,new cljs.core.Keyword(null,"correct","correct",984806334),answer], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-post-answer","success-post-answer",1502812737)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fetch-cards","fetch-cards",-438007940),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/cards/",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-fetch-cards","success-fetch-cards",-1017431355)], null)], null)], null);
}));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",-1875481434)], null));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-cards","fetch-cards",-438007940)], null));

//# sourceMappingURL=cards.js.map?rel=1573305775051
