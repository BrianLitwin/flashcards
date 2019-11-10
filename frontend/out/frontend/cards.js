// Compiled by ClojureScript 1.9.908 {}
goog.provide('frontend.cards');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
frontend.cards.make = (function frontend$cards$make(key){
re_frame.core.reg_sub.call(null,key,(function (db){
return key.call(null,db);
}));

return re_frame.core.reg_event_db.call(null,key,(function (db,p__41171){
var vec__41172 = p__41171;
var _ = cljs.core.nth.call(null,vec__41172,(0),null);
var value = cljs.core.nth.call(null,vec__41172,(1),null);
return cljs.core.assoc.call(null,db,key,value);
}));
});
frontend.cards.init_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"card-index","card-index",-335870362),(0),new cljs.core.Keyword(null,"hide-answer","hide-answer",477568072),true,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"new-group-input","new-group-input",317419625),""], null);
cljs.core.doall.call(null,cljs.core.map.call(null,frontend.cards.make,cljs.core.keys.call(null,frontend.cards.init_state)));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),(function (db){
return cljs.core.merge.call(null,db,frontend.cards.init_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc-card","inc-card",-867154536),(function (p__41175,p__41176){
var map__41177 = p__41175;
var map__41177__$1 = ((((!((map__41177 == null)))?((((map__41177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41177.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41177):map__41177);
var db = map__41177__$1;
var card_index = cljs.core.get.call(null,map__41177__$1,new cljs.core.Keyword(null,"card-index","card-index",-335870362));
var answers = cljs.core.get.call(null,map__41177__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var vec__41178 = p__41176;
var _ = cljs.core.nth.call(null,vec__41178,(0),null);
var n = cljs.core.nth.call(null,vec__41178,(1),null);
var new_n = (card_index + n);
var hide_answer = ((new_n > card_index)) && ((cljs.core.get.call(null,answers,new_n) == null));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"card-index","card-index",-335870362),new_n,new cljs.core.Keyword(null,"hide-answer","hide-answer",477568072),hide_answer);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cant-inc","cant-inc",-1870503003),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__41182,p__41183){
var vec__41184 = p__41182;
var cards = cljs.core.nth.call(null,vec__41184,(0),null);
var i = cljs.core.nth.call(null,vec__41184,(1),null);
var vec__41187 = p__41183;
var _ = cljs.core.nth.call(null,vec__41187,(0),null);
var n = cljs.core.nth.call(null,vec__41187,(1),null);
var new_n = (i + n);
var under = ((0) > new_n);
var over = (new_n >= cljs.core.count.call(null,cards));
return (under) || (over);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__41190){
var vec__41191 = p__41190;
var cards = cljs.core.nth.call(null,vec__41191,(0),null);
var i = cljs.core.nth.call(null,vec__41191,(1),null);
return cljs.core.get.call(null,cards,i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"answer","answer",-742633163),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__41194){
var vec__41195 = p__41194;
var answers = cljs.core.nth.call(null,vec__41195,(0),null);
var i = cljs.core.nth.call(null,vec__41195,(1),null);
return cljs.core.get.call(null,answers,i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"answered-correctly","answered-correctly",-1858143777),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770)], null),(function (answers){
var answered = cljs.core.filter.call(null,(function (p1__41198_SHARP_){
return !((p1__41198_SHARP_ == null));
}),answers);
var correct = cljs.core.filter.call(null,cljs.core.true_QMARK_,answered);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"correct","correct",984806334),cljs.core.count.call(null,correct),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count.call(null,answered)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"session-stats","session-stats",-1599687604),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__41199){
var vec__41200 = p__41199;
var cards = cljs.core.nth.call(null,vec__41200,(0),null);
var i = cljs.core.nth.call(null,vec__41200,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count.call(null,cards)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"set-answer","set-answer",1193421704),(function (p__41203,p__41204){
var map__41205 = p__41203;
var map__41205__$1 = ((((!((map__41205 == null)))?((((map__41205.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41205.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41205):map__41205);
var db = map__41205__$1;
var db__$1 = cljs.core.get.call(null,map__41205__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41206 = p__41204;
var _ = cljs.core.nth.call(null,vec__41206,(0),null);
var answer = cljs.core.nth.call(null,vec__41206,(1),null);
var map__41210 = db__$1;
var map__41210__$1 = ((((!((map__41210 == null)))?((((map__41210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41210):map__41210);
var answers = cljs.core.get.call(null,map__41210__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var card_index = cljs.core.get.call(null,map__41210__$1,new cljs.core.Keyword(null,"card-index","card-index",-335870362));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.assoc.call(null,answers,card_index,answer)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-answer","post-answer",-1390820830),answer], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-fetch-cards","success-fetch-cards",-1017431355),(function (db,p__41212){
var vec__41213 = p__41212;
var _ = cljs.core.nth.call(null,vec__41213,(0),null);
var response = cljs.core.nth.call(null,vec__41213,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cards","cards",169174038),response,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,response),null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-post-answer","success-post-answer",1502812737),(function (db){
return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-add-group","success-add-group",2112442263),(function (db){
return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-fetch-groups","success-fetch-groups",246392592),(function (db,p__41216){
var vec__41217 = p__41216;
var _ = cljs.core.nth.call(null,vec__41217,(0),null);
var response = cljs.core.nth.call(null,vec__41217,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"groups","groups",-136896102),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-new-group","success-new-group",597468038),(function (db,p__41220){
var vec__41221 = p__41220;
var _ = cljs.core.nth.call(null,vec__41221,(0),null);
var response = cljs.core.nth.call(null,vec__41221,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.conj.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(db),response));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"new-group","new-group",-1853027446),(function (p__41224,p__41225){
var map__41226 = p__41224;
var map__41226__$1 = ((((!((map__41226 == null)))?((((map__41226.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41226.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41226):map__41226);
var db = cljs.core.get.call(null,map__41226__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__41227 = p__41225;
var _ = cljs.core.nth.call(null,vec__41227,(0),null);
var name = cljs.core.nth.call(null,vec__41227,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"new-group-input","new-group-input",317419625),""),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/group/",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-new-group","success-new-group",597468038)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fetch-groups","fetch-groups",-1083278192),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/group/",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-fetch-groups","success-fetch-groups",246392592)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"add-group","add-group",1646859519),(function (_,p__41231){
var vec__41232 = p__41231;
var ___$1 = cljs.core.nth.call(null,vec__41232,(0),null);
var card = cljs.core.nth.call(null,vec__41232,(1),null);
var group = cljs.core.nth.call(null,vec__41232,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8001/api/card/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(card),"/add_group/"].join(''),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),group], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-add-group","success-add-group",2112442263)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"post-answer","post-answer",-1390820830),(function (_,p__41235){
var vec__41236 = p__41235;
var ___$1 = cljs.core.nth.call(null,vec__41236,(0),null);
var answer = cljs.core.nth.call(null,vec__41236,(1),null);
var card = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152)], null))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/answer/",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card","card",-1430355152),card,new cljs.core.Keyword(null,"correct","correct",984806334),answer], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-post-answer","success-post-answer",1502812737)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fetch-cards","fetch-cards",-438007940),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/card/",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-fetch-cards","success-fetch-cards",-1017431355)], null)], null)], null);
}));

//# sourceMappingURL=cards.js.map?rel=1573388954726
