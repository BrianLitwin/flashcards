// Compiled by ClojureScript 1.9.908 {}
goog.provide('frontend.cards');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ajax.core');
frontend.cards.make = (function frontend$cards$make(key){
re_frame.core.reg_sub.call(null,key,(function (db){
return key.call(null,db);
}));

return re_frame.core.reg_event_db.call(null,key,(function (db,p__43656){
var vec__43657 = p__43656;
var _ = cljs.core.nth.call(null,vec__43657,(0),null);
var value = cljs.core.nth.call(null,vec__43657,(1),null);
return cljs.core.assoc.call(null,db,key,value);
}));
});
frontend.cards.init_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"card-index","card-index",-335870362),new cljs.core.Keyword(null,"hide-answer","hide-answer",477568072),new cljs.core.Keyword(null,"new-group-input","new-group-input",317419625),new cljs.core.Keyword(null,"cards","cards",169174038),new cljs.core.Keyword(null,"answers","answers",-2066449770),new cljs.core.Keyword(null,"new-group-names","new-group-names",244811448),new cljs.core.Keyword("make-list","list","make-list/list",-438075624),new cljs.core.Keyword(null,"groups","groups",-136896102),new cljs.core.Keyword("make-list","display-cards","make-list/display-cards",296379806),new cljs.core.Keyword(null,"view","view",1247994814)],[(0),true,"",cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"home","home",-74557309)]);
cljs.core.doall.call(null,cljs.core.map.call(null,frontend.cards.make,cljs.core.keys.call(null,frontend.cards.init_state)));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"init","init",-1875481434),(function (db){
return cljs.core.merge.call(null,db,frontend.cards.init_state);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc-card","inc-card",-867154536),(function (p__43660,p__43661){
var map__43662 = p__43660;
var map__43662__$1 = ((((!((map__43662 == null)))?((((map__43662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43662.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43662):map__43662);
var db = map__43662__$1;
var card_index = cljs.core.get.call(null,map__43662__$1,new cljs.core.Keyword(null,"card-index","card-index",-335870362));
var answers = cljs.core.get.call(null,map__43662__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var vec__43663 = p__43661;
var _ = cljs.core.nth.call(null,vec__43663,(0),null);
var n = cljs.core.nth.call(null,vec__43663,(1),null);
var new_n = (card_index + n);
var hide_answer = ((new_n > card_index)) && ((cljs.core.get.call(null,answers,new_n) == null));
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"card-index","card-index",-335870362),new_n,new cljs.core.Keyword(null,"hide-answer","hide-answer",477568072),hide_answer);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"cant-inc","cant-inc",-1870503003),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__43667,p__43668){
var vec__43669 = p__43667;
var cards = cljs.core.nth.call(null,vec__43669,(0),null);
var i = cljs.core.nth.call(null,vec__43669,(1),null);
var vec__43672 = p__43668;
var _ = cljs.core.nth.call(null,vec__43672,(0),null);
var n = cljs.core.nth.call(null,vec__43672,(1),null);
var new_n = (i + n);
var under = ((0) > new_n);
var over = (new_n >= cljs.core.count.call(null,cards));
return (under) || (over);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"card","card",-1430355152),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__43675){
var vec__43676 = p__43675;
var cards = cljs.core.nth.call(null,vec__43676,(0),null);
var i = cljs.core.nth.call(null,vec__43676,(1),null);
return cljs.core.get.call(null,cards,i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"answer","answer",-742633163),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__43679){
var vec__43680 = p__43679;
var answers = cljs.core.nth.call(null,vec__43680,(0),null);
var i = cljs.core.nth.call(null,vec__43680,(1),null);
return cljs.core.get.call(null,answers,i);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"answered-correctly","answered-correctly",-1858143777),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770)], null),(function (answers){
var answered = cljs.core.filter.call(null,(function (p1__43683_SHARP_){
return !((p1__43683_SHARP_ == null));
}),answers);
var correct = cljs.core.filter.call(null,cljs.core.true_QMARK_,answered);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"correct","correct",984806334),cljs.core.count.call(null,correct),new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count.call(null,answered)], null);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"session-stats","session-stats",-1599687604),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards","cards",169174038)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card-index","card-index",-335870362)], null),(function (p__43684){
var vec__43685 = p__43684;
var cards = cljs.core.nth.call(null,vec__43685,(0),null);
var i = cljs.core.nth.call(null,vec__43685,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"total","total",1916810418),cljs.core.count.call(null,cards)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"set-answer","set-answer",1193421704),(function (p__43688,p__43689){
var map__43690 = p__43688;
var map__43690__$1 = ((((!((map__43690 == null)))?((((map__43690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43690):map__43690);
var db = map__43690__$1;
var db__$1 = cljs.core.get.call(null,map__43690__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43691 = p__43689;
var _ = cljs.core.nth.call(null,vec__43691,(0),null);
var answer = cljs.core.nth.call(null,vec__43691,(1),null);
var map__43695 = db__$1;
var map__43695__$1 = ((((!((map__43695 == null)))?((((map__43695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43695):map__43695);
var answers = cljs.core.get.call(null,map__43695__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770));
var card_index = cljs.core.get.call(null,map__43695__$1,new cljs.core.Keyword(null,"card-index","card-index",-335870362));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db__$1,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.assoc.call(null,answers,card_index,answer)),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"post-answer","post-answer",-1390820830),answer], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-group-name","change-group-name",-1743146754),(function (db,p__43697){
var vec__43698 = p__43697;
var _ = cljs.core.nth.call(null,vec__43698,(0),null);
var name = cljs.core.nth.call(null,vec__43698,(1),null);
var id = cljs.core.nth.call(null,vec__43698,(2),null);
var key = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
var names = new cljs.core.Keyword(null,"new-group-names","new-group-names",244811448).cljs$core$IFn$_invoke$arity$1(db);
var new_names = cljs.core.assoc.call(null,names,key,name);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"new-group-names","new-group-names",244811448),new_names);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"change-group-name","change-group-name",-1743146754),(function (db,p__43701){
var vec__43702 = p__43701;
var _ = cljs.core.nth.call(null,vec__43702,(0),null);
var id = cljs.core.nth.call(null,vec__43702,(1),null);
var key = cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
var names = new cljs.core.Keyword(null,"new-group-names","new-group-names",244811448).cljs$core$IFn$_invoke$arity$1(db);
var new_QMARK_ = cljs.core.contains_QMARK_.call(null,key,names);
if(new_QMARK_){
return "";
} else {
return key.call(null,names);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-fetch-cards","success-fetch-cards",-1017431355),(function (db,p__43705){
var vec__43706 = p__43705;
var _ = cljs.core.nth.call(null,vec__43706,(0),null);
var response = cljs.core.nth.call(null,vec__43706,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"cards","cards",169174038),response,new cljs.core.Keyword(null,"answers","answers",-2066449770),cljs.core.vec.call(null,cljs.core.repeat.call(null,cljs.core.count.call(null,response),null)));
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-post-answer","success-post-answer",1502812737),(function (db){
return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-add-group","success-add-group",2112442263),(function (db){
return db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-fetch-groups","success-fetch-groups",246392592),(function (db,p__43709){
var vec__43710 = p__43709;
var _ = cljs.core.nth.call(null,vec__43710,(0),null);
var response = cljs.core.nth.call(null,vec__43710,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"groups","groups",-136896102),response);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-new-group","success-new-group",597468038),(function (db,p__43713){
var vec__43714 = p__43713;
var _ = cljs.core.nth.call(null,vec__43714,(0),null);
var response = cljs.core.nth.call(null,vec__43714,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.conj.call(null,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(db),response));
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"success-save-group-name","success-save-group-name",1653418771),(function (p__43717,p__43718){
var map__43719 = p__43717;
var map__43719__$1 = ((((!((map__43719 == null)))?((((map__43719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43719.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43719):map__43719);
var db = cljs.core.get.call(null,map__43719__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43720 = p__43718;
var _ = cljs.core.nth.call(null,vec__43720,(0),null);
var map__43723 = cljs.core.nth.call(null,vec__43720,(1),null);
var map__43723__$1 = ((((!((map__43723 == null)))?((((map__43723.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43723.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43723):map__43723);
var group = map__43723__$1;
var id = cljs.core.get.call(null,map__43723__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102),cljs.core.map.call(null,((function (map__43719,map__43719__$1,db,vec__43720,_,map__43723,map__43723__$1,group,id){
return (function (item){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),id)){
return group;
} else {
return item;
}
});})(map__43719,map__43719__$1,db,vec__43720,_,map__43723,map__43723__$1,group,id))
,new cljs.core.Keyword(null,"groups","groups",-136896102).cljs$core$IFn$_invoke$arity$1(db))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-group-name","change-group-name",-1743146754),"",id], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"success-cards-in-groups","success-cards-in-groups",1396019813),(function (db,p__43726){
var vec__43727 = p__43726;
var _ = cljs.core.nth.call(null,vec__43727,(0),null);
var response = cljs.core.nth.call(null,vec__43727,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("make-list","display-cards","make-list/display-cards",296379806),response);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"cards-in-group","cards-in-group",484417986),(function (p__43730,p__43731){
var map__43732 = p__43730;
var map__43732__$1 = ((((!((map__43732 == null)))?((((map__43732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43732.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43732):map__43732);
var db = cljs.core.get.call(null,map__43732__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43733 = p__43731;
var _ = cljs.core.nth.call(null,vec__43733,(0),null);
var id = cljs.core.nth.call(null,vec__43733,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8001/api/group/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/cards/"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-cards-in-groups","success-cards-in-groups",1396019813)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"save-group-name","save-group-name",-1045316077),(function (db,p__43737){
var vec__43738 = p__43737;
var _ = cljs.core.nth.call(null,vec__43738,(0),null);
var name = cljs.core.nth.call(null,vec__43738,(1),null);
var id = cljs.core.nth.call(null,vec__43738,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8001/api/group/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"/"].join(''),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"id","id",-1388402092),id], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-save-group-name","success-save-group-name",1653418771)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"new-group","new-group",-1853027446),(function (p__43741,p__43742){
var map__43743 = p__43741;
var map__43743__$1 = ((((!((map__43743 == null)))?((((map__43743.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43743.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43743):map__43743);
var db = cljs.core.get.call(null,map__43743__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__43744 = p__43742;
var _ = cljs.core.nth.call(null,vec__43744,(0),null);
var name = cljs.core.nth.call(null,vec__43744,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"new-group-input","new-group-input",317419625),""),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/group/",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-new-group","success-new-group",597468038)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fetch-groups","fetch-groups",-1083278192),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/group/",new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-fetch-groups","success-fetch-groups",246392592)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"add-group","add-group",1646859519),(function (_,p__43748){
var vec__43749 = p__43748;
var ___$1 = cljs.core.nth.call(null,vec__43749,(0),null);
var card = cljs.core.nth.call(null,vec__43749,(1),null);
var group = cljs.core.nth.call(null,vec__43749,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:8001/api/card/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(card),"/add_group/"].join(''),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),group], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-add-group","success-add-group",2112442263)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"post-answer","post-answer",-1390820830),(function (_,p__43752){
var vec__43753 = p__43752;
var ___$1 = cljs.core.nth.call(null,vec__43753,(0),null);
var answer = cljs.core.nth.call(null,vec__43753,(1),null);
var card = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152)], null))));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/answer/",new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"card","card",-1430355152),card,new cljs.core.Keyword(null,"correct","correct",984806334),answer], null),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-post-answer","success-post-answer",1502812737)], null)], null)], null);
}));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword(null,"fetch-cards","fetch-cards",-438007940),(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:8001/api/card/",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format.call(null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success-fetch-cards","success-fetch-cards",-1017431355)], null)], null)], null);
}));

//# sourceMappingURL=cards.js.map?rel=1573829390459
