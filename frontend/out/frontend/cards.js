// Compiled by ClojureScript 1.9.908 {}
goog.provide('frontend.cards');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
frontend.cards.make = (function frontend$cards$make(key){
re_frame.core.reg_sub.call(null,key,(function (db){
return key.call(null,db);
}));

return re_frame.core.reg_event_db.call(null,key,(function (db,p__33157){
var vec__33158 = p__33157;
var _ = cljs.core.nth.call(null,vec__33158,(0),null);
var value = cljs.core.nth.call(null,vec__33158,(1),null);
return cljs.core.assoc.call(null,db,key,value);
}));
});
frontend.cards.init_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"card-index","card-index",-335870362),new cljs.core.Keyword(null,"hide-answer","hide-answer",477568072),new cljs.core.Keyword(null,"new-group-input","new-group-input",317419625),new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.Keyword(null,"new-group-names","new-group-names",244811448),new cljs.core.Keyword("make-list","list","make-list/list",-438075624),new cljs.core.Keyword(null,"groups","groups",-136896102),new cljs.core.Keyword("make-list","display-cards","make-list/display-cards",296379806),new cljs.core.Keyword(null,"view","view",1247994814)],[(0),true,"",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309)]);
cljs.core.doall.call(null,cljs.core.map.call(null,frontend.cards.make,cljs.core.keys.call(null,frontend.cards.init_state)));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),(function (db){
return cljs.core.merge.call(null,db,frontend.cards.init_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc-card","inc-card",-867154536),(function (p__33161,p__33162){
var map__33163 = p__33161;
var map__33163__$1 = ((((!((map__33163 == null)))?((((map__33163.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33163.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33163):map__33163);
var db = map__33163__$1;
var card_index = cljs.core.get.call(null,map__33163__$1,new cljs.core.Keyword(null,"card-index","card-index",-335870362));
var answers = cljs.core.get.call(null,map__33163__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var vec__33164 = p__33162;
var _ = cljs.core.nth.call(null,vec__33164,(0),null);
var n = cljs.core.nth.call(null,vec__33164,(1),null);
var new_n = (card_index + n);
var hide_answer = ((new_n > card_index)) && ((cljs.core.get.call(null,answers,new_n) == null));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"card-index","card-index",-335870362),new_n,new cljs.core.Keyword(null,"hide-answer","hide-answer",477568072),hide_answer);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cant-inc","cant-inc",-1870503003),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__33168,p__33169){
var vec__33170 = p__33168;
var cards = cljs.core.nth.call(null,vec__33170,(0),null);
var i = cljs.core.nth.call(null,vec__33170,(1),null);
var vec__33173 = p__33169;
var _ = cljs.core.nth.call(null,vec__33173,(0),null);
var n = cljs.core.nth.call(null,vec__33173,(1),null);
var new_n = (i + n);
var under = ((0) > new_n);
var over = (new_n >= cljs.core.count.call(null,cards));
return (under) || (over);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__33176){
var vec__33177 = p__33176;
var cards = cljs.core.nth.call(null,vec__33177,(0),null);
var i = cljs.core.nth.call(null,vec__33177,(1),null);
return cljs.core.get.call(null,cards,i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"answer","answer",-742633163),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__33180){
var vec__33181 = p__33180;
var answers = cljs.core.nth.call(null,vec__33181,(0),null);
var i = cljs.core.nth.call(null,vec__33181,(1),null);
return cljs.core.get.call(null,answers,i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"answered-correctly","answered-correctly",-1858143777),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770)], null),(function (answers){
var answered = cljs.core.filter.call(null,(function (p1__33184_SHARP_){
return !((p1__33184_SHARP_ == null));
}),answers);
var correct = cljs.core.filter.call(null,cljs.core.true_QMARK_,answered);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"correct","correct",984806334),cljs.core.count.call(null,correct),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count.call(null,answered)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"session-stats","session-stats",-1599687604),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__33185){
var vec__33186 = p__33185;
var cards = cljs.core.nth.call(null,vec__33186,(0),null);
var i = cljs.core.nth.call(null,vec__33186,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count.call(null,cards)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"set-answer","set-answer",1193421704),(function (p__33189,p__33190){
var map__33191 = p__33189;
var map__33191__$1 = ((((!((map__33191 == null)))?((((map__33191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33191):map__33191);
var db = map__33191__$1;
var db__$1 = cljs.core.get.call(null,map__33191__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33192 = p__33190;
var _ = cljs.core.nth.call(null,vec__33192,(0),null);
var answer = cljs.core.nth.call(null,vec__33192,(1),null);
var map__33196 = db__$1;
var map__33196__$1 = ((((!((map__33196 == null)))?((((map__33196.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33196.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33196):map__33196);
var answers = cljs.core.get.call(null,map__33196__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var card_index = cljs.core.get.call(null,map__33196__$1,new cljs.core.Keyword(null,"card-index","card-index",-335870362));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.assoc.call(null,answers,card_index,answer)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-answer","post-answer",-1390820830),answer], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-group-name","change-group-name",-1743146754),(function (db,p__33198){
var vec__33199 = p__33198;
var _ = cljs.core.nth.call(null,vec__33199,(0),null);
var name = cljs.core.nth.call(null,vec__33199,(1),null);
var id = cljs.core.nth.call(null,vec__33199,(2),null);
var key = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
var names = new cljs.core.Keyword(null,"new-group-names","new-group-names",244811448).cljs$core$IFn$_invoke$arity$1(db);
var new_names = cljs.core.assoc.call(null,names,key,name);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"new-group-names","new-group-names",244811448),new_names);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"change-group-name","change-group-name",-1743146754),(function (db,p__33202){
var vec__33203 = p__33202;
var _ = cljs.core.nth.call(null,vec__33203,(0),null);
var id = cljs.core.nth.call(null,vec__33203,(1),null);
var key = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
var names = new cljs.core.Keyword(null,"new-group-names","new-group-names",244811448).cljs$core$IFn$_invoke$arity$1(db);
var new_QMARK_ = cljs.core.contains_QMARK_.call(null,key,names);
if(new_QMARK_){
return "";
} else {
return key.call(null,names);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-fetch-cards","success-fetch-cards",-1017431355),(function (db,p__33206){
var vec__33207 = p__33206;
var _ = cljs.core.nth.call(null,vec__33207,(0),null);
var response = cljs.core.nth.call(null,vec__33207,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cards","cards",169174038),response,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,response),null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-post-answer","success-post-answer",1502812737),(function (db){
return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-add-group","success-add-group",2112442263),(function (db){
return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-fetch-groups","success-fetch-groups",246392592),(function (db,p__33210){
var vec__33211 = p__33210;
var _ = cljs.core.nth.call(null,vec__33211,(0),null);
var response = cljs.core.nth.call(null,vec__33211,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"groups","groups",-136896102),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-new-group","success-new-group",597468038),(function (db,p__33214){
var vec__33215 = p__33214;
var _ = cljs.core.nth.call(null,vec__33215,(0),null);
var response = cljs.core.nth.call(null,vec__33215,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.conj.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(db),response));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"success-save-group-name","success-save-group-name",1653418771),(function (p__33218,p__33219){
var map__33220 = p__33218;
var map__33220__$1 = ((((!((map__33220 == null)))?((((map__33220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33220.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33220):map__33220);
var db = cljs.core.get.call(null,map__33220__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33221 = p__33219;
var _ = cljs.core.nth.call(null,vec__33221,(0),null);
var map__33224 = cljs.core.nth.call(null,vec__33221,(1),null);
var map__33224__$1 = ((((!((map__33224 == null)))?((((map__33224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33224.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33224):map__33224);
var group = map__33224__$1;
var id = cljs.core.get.call(null,map__33224__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.map.call(null,((function (map__33220,map__33220__$1,db,vec__33221,_,map__33224,map__33224__$1,group,id){
return (function (item){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),id)){
return group;
} else {
return item;
}
});})(map__33220,map__33220__$1,db,vec__33221,_,map__33224,map__33224__$1,group,id))
,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(db))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-group-name","change-group-name",-1743146754),"",id], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-cards-in-groups","success-cards-in-groups",1396019813),(function (db,p__33227){
var vec__33228 = p__33227;
var _ = cljs.core.nth.call(null,vec__33228,(0),null);
var response = cljs.core.nth.call(null,vec__33228,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("make-list","display-cards","make-list/display-cards",296379806),response);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"cards-in-group","cards-in-group",484417986),(function (p__33231,p__33232){
var map__33233 = p__33231;
var map__33233__$1 = ((((!((map__33233 == null)))?((((map__33233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33233.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33233):map__33233);
var db = cljs.core.get.call(null,map__33233__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33234 = p__33232;
var _ = cljs.core.nth.call(null,vec__33234,(0),null);
var id = cljs.core.nth.call(null,vec__33234,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8001/api/group/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/cards/"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-cards-in-groups","success-cards-in-groups",1396019813)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"save-group-name","save-group-name",-1045316077),(function (db,p__33238){
var vec__33239 = p__33238;
var _ = cljs.core.nth.call(null,vec__33239,(0),null);
var name = cljs.core.nth.call(null,vec__33239,(1),null);
var id = cljs.core.nth.call(null,vec__33239,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8001/api/group/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/"].join(''),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-save-group-name","success-save-group-name",1653418771)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"new-group","new-group",-1853027446),(function (p__33242,p__33243){
var map__33244 = p__33242;
var map__33244__$1 = ((((!((map__33244 == null)))?((((map__33244.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33244.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33244):map__33244);
var db = cljs.core.get.call(null,map__33244__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__33245 = p__33243;
var _ = cljs.core.nth.call(null,vec__33245,(0),null);
var name = cljs.core.nth.call(null,vec__33245,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"new-group-input","new-group-input",317419625),""),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/group/",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-new-group","success-new-group",597468038)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fetch-groups","fetch-groups",-1083278192),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/group/",new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-fetch-groups","success-fetch-groups",246392592)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"add-group","add-group",1646859519),(function (_,p__33249){
var vec__33250 = p__33249;
var ___$1 = cljs.core.nth.call(null,vec__33250,(0),null);
var card = cljs.core.nth.call(null,vec__33250,(1),null);
var group = cljs.core.nth.call(null,vec__33250,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8001/api/card/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(card),"/add_group/"].join(''),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),group], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-add-group","success-add-group",2112442263)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"post-answer","post-answer",-1390820830),(function (_,p__33253){
var vec__33254 = p__33253;
var ___$1 = cljs.core.nth.call(null,vec__33254,(0),null);
var answer = cljs.core.nth.call(null,vec__33254,(1),null);
var card = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152)], null))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/answer/",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card","card",-1430355152),card,new cljs.core.Keyword(null,"correct","correct",984806334),answer], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-post-answer","success-post-answer",1502812737)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fetch-cards","fetch-cards",-438007940),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/card/",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-fetch-cards","success-fetch-cards",-1017431355)], null)], null)], null);
}));

//# sourceMappingURL=cards.js.map?rel=1573832698410
