// Compiled by ClojureScript 1.9.908 {}
goog.provide('frontend.cards');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
frontend.cards.make = (function frontend$cards$make(key){
re_frame.core.reg_sub.call(null,key,(function (db){
return key.call(null,db);
}));

return re_frame.core.reg_event_db.call(null,key,(function (db,p__32502){
var vec__32503 = p__32502;
var _ = cljs.core.nth.call(null,vec__32503,(0),null);
var value = cljs.core.nth.call(null,vec__32503,(1),null);
return cljs.core.assoc.call(null,db,key,value);
}));
});
frontend.cards.init_state = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cards","cards",169174038),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"card-index","card-index",-335870362),(0),new cljs.core.Keyword(null,"hide-answer","hide-answer",477568072),true,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"new-group-input","new-group-input",317419625),"",new cljs.core.Keyword(null,"new-group-names","new-group-names",244811448),cljs.core.PersistentArrayMap.EMPTY], null);
cljs.core.doall.call(null,cljs.core.map.call(null,frontend.cards.make,cljs.core.keys.call(null,frontend.cards.init_state)));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),(function (db){
return cljs.core.merge.call(null,db,frontend.cards.init_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc-card","inc-card",-867154536),(function (p__32506,p__32507){
var map__32508 = p__32506;
var map__32508__$1 = ((((!((map__32508 == null)))?((((map__32508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32508):map__32508);
var db = map__32508__$1;
var card_index = cljs.core.get.call(null,map__32508__$1,new cljs.core.Keyword(null,"card-index","card-index",-335870362));
var answers = cljs.core.get.call(null,map__32508__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var vec__32509 = p__32507;
var _ = cljs.core.nth.call(null,vec__32509,(0),null);
var n = cljs.core.nth.call(null,vec__32509,(1),null);
var new_n = (card_index + n);
var hide_answer = ((new_n > card_index)) && ((cljs.core.get.call(null,answers,new_n) == null));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"card-index","card-index",-335870362),new_n,new cljs.core.Keyword(null,"hide-answer","hide-answer",477568072),hide_answer);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cant-inc","cant-inc",-1870503003),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__32513,p__32514){
var vec__32515 = p__32513;
var cards = cljs.core.nth.call(null,vec__32515,(0),null);
var i = cljs.core.nth.call(null,vec__32515,(1),null);
var vec__32518 = p__32514;
var _ = cljs.core.nth.call(null,vec__32518,(0),null);
var n = cljs.core.nth.call(null,vec__32518,(1),null);
var new_n = (i + n);
var under = ((0) > new_n);
var over = (new_n >= cljs.core.count.call(null,cards));
return (under) || (over);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__32521){
var vec__32522 = p__32521;
var cards = cljs.core.nth.call(null,vec__32522,(0),null);
var i = cljs.core.nth.call(null,vec__32522,(1),null);
return cljs.core.get.call(null,cards,i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"answer","answer",-742633163),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__32525){
var vec__32526 = p__32525;
var answers = cljs.core.nth.call(null,vec__32526,(0),null);
var i = cljs.core.nth.call(null,vec__32526,(1),null);
return cljs.core.get.call(null,answers,i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"answered-correctly","answered-correctly",-1858143777),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770)], null),(function (answers){
var answered = cljs.core.filter.call(null,(function (p1__32529_SHARP_){
return !((p1__32529_SHARP_ == null));
}),answers);
var correct = cljs.core.filter.call(null,cljs.core.true_QMARK_,answered);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"correct","correct",984806334),cljs.core.count.call(null,correct),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count.call(null,answered)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"session-stats","session-stats",-1599687604),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__32530){
var vec__32531 = p__32530;
var cards = cljs.core.nth.call(null,vec__32531,(0),null);
var i = cljs.core.nth.call(null,vec__32531,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count.call(null,cards)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"set-answer","set-answer",1193421704),(function (p__32534,p__32535){
var map__32536 = p__32534;
var map__32536__$1 = ((((!((map__32536 == null)))?((((map__32536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32536.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32536):map__32536);
var db = map__32536__$1;
var db__$1 = cljs.core.get.call(null,map__32536__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32537 = p__32535;
var _ = cljs.core.nth.call(null,vec__32537,(0),null);
var answer = cljs.core.nth.call(null,vec__32537,(1),null);
var map__32541 = db__$1;
var map__32541__$1 = ((((!((map__32541 == null)))?((((map__32541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32541.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32541):map__32541);
var answers = cljs.core.get.call(null,map__32541__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var card_index = cljs.core.get.call(null,map__32541__$1,new cljs.core.Keyword(null,"card-index","card-index",-335870362));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.assoc.call(null,answers,card_index,answer)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-answer","post-answer",-1390820830),answer], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-group-name","change-group-name",-1743146754),(function (db,p__32543){
var vec__32544 = p__32543;
var _ = cljs.core.nth.call(null,vec__32544,(0),null);
var name = cljs.core.nth.call(null,vec__32544,(1),null);
var id = cljs.core.nth.call(null,vec__32544,(2),null);
var key = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
var names = new cljs.core.Keyword(null,"new-group-names","new-group-names",244811448).cljs$core$IFn$_invoke$arity$1(db);
var new_names = cljs.core.assoc.call(null,names,key,name);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"new-group-names","new-group-names",244811448),new_names);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"change-group-name","change-group-name",-1743146754),(function (db,p__32547){
var vec__32548 = p__32547;
var _ = cljs.core.nth.call(null,vec__32548,(0),null);
var id = cljs.core.nth.call(null,vec__32548,(1),null);
var key = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
var names = new cljs.core.Keyword(null,"new-group-names","new-group-names",244811448).cljs$core$IFn$_invoke$arity$1(db);
var new_QMARK_ = cljs.core.contains_QMARK_.call(null,key,names);
if(new_QMARK_){
return "";
} else {
return key.call(null,names);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-fetch-cards","success-fetch-cards",-1017431355),(function (db,p__32551){
var vec__32552 = p__32551;
var _ = cljs.core.nth.call(null,vec__32552,(0),null);
var response = cljs.core.nth.call(null,vec__32552,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cards","cards",169174038),response,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,response),null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-post-answer","success-post-answer",1502812737),(function (db){
return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-add-group","success-add-group",2112442263),(function (db){
return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-fetch-groups","success-fetch-groups",246392592),(function (db,p__32555){
var vec__32556 = p__32555;
var _ = cljs.core.nth.call(null,vec__32556,(0),null);
var response = cljs.core.nth.call(null,vec__32556,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"groups","groups",-136896102),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-new-group","success-new-group",597468038),(function (db,p__32559){
var vec__32560 = p__32559;
var _ = cljs.core.nth.call(null,vec__32560,(0),null);
var response = cljs.core.nth.call(null,vec__32560,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.conj.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(db),response));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"success-save-group-name","success-save-group-name",1653418771),(function (p__32563,p__32564){
var map__32565 = p__32563;
var map__32565__$1 = ((((!((map__32565 == null)))?((((map__32565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32565):map__32565);
var db = cljs.core.get.call(null,map__32565__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32566 = p__32564;
var _ = cljs.core.nth.call(null,vec__32566,(0),null);
var map__32569 = cljs.core.nth.call(null,vec__32566,(1),null);
var map__32569__$1 = ((((!((map__32569 == null)))?((((map__32569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32569.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32569):map__32569);
var group = map__32569__$1;
var id = cljs.core.get.call(null,map__32569__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
console.log(group);

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.map.call(null,((function (map__32565,map__32565__$1,db,vec__32566,_,map__32569,map__32569__$1,group,id){
return (function (item){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),id)){
return group;
} else {
return item;
}
});})(map__32565,map__32565__$1,db,vec__32566,_,map__32569,map__32569__$1,group,id))
,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(db))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-group-name","change-group-name",-1743146754),"",id], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"save-group-name","save-group-name",-1045316077),(function (db,p__32572){
var vec__32573 = p__32572;
var _ = cljs.core.nth.call(null,vec__32573,(0),null);
var name = cljs.core.nth.call(null,vec__32573,(1),null);
var id = cljs.core.nth.call(null,vec__32573,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8001/api/group/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/"].join(''),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-save-group-name","success-save-group-name",1653418771)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"new-group","new-group",-1853027446),(function (p__32576,p__32577){
var map__32578 = p__32576;
var map__32578__$1 = ((((!((map__32578 == null)))?((((map__32578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32578):map__32578);
var db = cljs.core.get.call(null,map__32578__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32579 = p__32577;
var _ = cljs.core.nth.call(null,vec__32579,(0),null);
var name = cljs.core.nth.call(null,vec__32579,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"new-group-input","new-group-input",317419625),""),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/group/",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-new-group","success-new-group",597468038)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fetch-groups","fetch-groups",-1083278192),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/group/",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-fetch-groups","success-fetch-groups",246392592)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"add-group","add-group",1646859519),(function (_,p__32583){
var vec__32584 = p__32583;
var ___$1 = cljs.core.nth.call(null,vec__32584,(0),null);
var card = cljs.core.nth.call(null,vec__32584,(1),null);
var group = cljs.core.nth.call(null,vec__32584,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8001/api/card/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(card),"/add_group/"].join(''),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),group], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-add-group","success-add-group",2112442263)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"post-answer","post-answer",-1390820830),(function (_,p__32587){
var vec__32588 = p__32587;
var ___$1 = cljs.core.nth.call(null,vec__32588,(0),null);
var answer = cljs.core.nth.call(null,vec__32588,(1),null);
var card = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152)], null))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/answer/",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card","card",-1430355152),card,new cljs.core.Keyword(null,"correct","correct",984806334),answer], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-post-answer","success-post-answer",1502812737)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fetch-cards","fetch-cards",-438007940),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/card/",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-fetch-cards","success-fetch-cards",-1017431355)], null)], null)], null);
}));

//# sourceMappingURL=cards.js.map?rel=1573415814924
