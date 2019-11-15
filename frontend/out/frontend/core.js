// Compiled by ClojureScript 1.9.908 {}
goog.provide('frontend.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('frontend.cards');
goog.require('frontend.router');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
frontend.core.sidebar_item = (function frontend$core$sidebar_item(text,view){
var cur_view = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cur_view){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814),view], null));
});})(cur_view))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,view,cur_view))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sidebar-menu-item","sidebar-menu-item__highlighted"], null):"sidebar-menu-item")], null),text], null);
});
frontend.core.sidebar = (function frontend$core$sidebar(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sidebar-menu","div.sidebar-menu",1970338944),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.sidebar_item,"home",new cljs.core.Keyword(null,"home","home",-74557309)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.sidebar_item,"groups",new cljs.core.Keyword(null,"groups","groups",-136896102)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.sidebar_item,"lists",new cljs.core.Keyword(null,"lists","lists",-884730684)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.sidebar_item,"session",new cljs.core.Keyword(null,"session","session",1008279103)], null)], null);
});
frontend.core.back_next = (function frontend$core$back_next(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"blue",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.back-next-btn","button.back-next-btn",-1980655757),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cant-inc","cant-inc",-1870503003),(-1)], null))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-card","inc-card",-867154536),(-1)], null));
})], null),"Back"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.back-next-btn","button.back-next-btn",-1980655757),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(function (){var or__28432__auto__ = (cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null))) == null);
if(or__28432__auto__){
return or__28432__auto__;
} else {
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cant-inc","cant-inc",-1870503003),(1)], null)));
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-card","inc-card",-867154536),(1)], null));
})], null),"Next"], null)], null);
});
frontend.core.session = (function frontend$core$session(){
var card = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"card","card",-1430355152)], null)));
var answer = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answer","answer",-742633163)], null)));
var hide_answer = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-answer","hide-answer",477568072)], null)));
var progress = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session-stats","session-stats",-1599687604)], null)));
var sesh = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answered-correctly","answered-correctly",-1858143777)], null)));
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background","background",-863952629),"lightBlue",new cljs.core.Keyword(null,"flexGrow","flexGrow",1882590718),(1),new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flexDirection","flexDirection",1286039598),"column"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(sesh))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(sesh))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(progress))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(progress))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.back_next], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (card,answer,hide_answer,progress,sesh){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-answer","set-answer",1193421704),false], null));
});})(card,answer,hide_answer,progress,sesh))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),((answer === false)?"lightBlue":null)], null)], null),"Incorrect"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (card,answer,hide_answer,progress,sesh){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-answer","set-answer",1193421704),true], null));
});})(card,answer,hide_answer,progress,sesh))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background","background",-863952629),((answer === true)?"lightBlue":null)], null)], null),"Correct"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (card,answer,hide_answer,progress,sesh){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hide-answer","hide-answer",477568072),cljs.core.not.call(null,hide_answer)], null));
});})(card,answer,hide_answer,progress,sesh))
], null),"Show Answer"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(card)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(card)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),(cljs.core.truth_(hide_answer)?"none":"inline-block"),new cljs.core.Keyword(null,"white-space","white-space",-707351930),"pre"], null),new cljs.core.Keyword(null,"rows","rows",850049680),(30),new cljs.core.Keyword(null,"cols","cols",-1914801295),(300)], null),new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(card)], null)], null);
});
frontend.core.home = (function frontend$core$home(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"home"], null);
});
frontend.core.group_info = (function frontend$core$group_info(p__40555){
var map__40556 = p__40555;
var map__40556__$1 = ((((!((map__40556 == null)))?((((map__40556.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40556.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40556):map__40556);
var name = cljs.core.get.call(null,map__40556__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var id = cljs.core.get.call(null,map__40556__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var url = cljs.core.get.call(null,map__40556__$1,new cljs.core.Keyword(null,"url","url",276297046));
var new_name = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-group-name","change-group-name",-1743146754),id], null)));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (new_name,map__40556,map__40556__$1,name,id,url){
return (function (){
return window.open(url);
});})(new_name,map__40556,map__40556__$1,name,id,url))
,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),"35px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"25px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], null),name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"25px",new cljs.core.Keyword(null,"display","display",242065432),"inline"], null)], null),"Rename"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new_name,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (new_name,map__40556,map__40556__$1,name,id,url){
return (function (p1__40554_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-group-name","change-group-name",-1743146754),p1__40554_SHARP_.target.value,id], null));
});})(new_name,map__40556,map__40556__$1,name,id,url))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (new_name,map__40556,map__40556__$1,name,id,url){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"save-group-name","save-group-name",-1045316077),new_name,id], null));
});})(new_name,map__40556,map__40556__$1,name,id,url))
], null),"save"], null)], null);
});
frontend.core.groups = (function frontend$core$groups(){
var groups = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102)], null)));
var text = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-group-input","new-group-input",317419625)], null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),"New Group"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),text,new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (groups,text){
return (function (p1__40558_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-group-input","new-group-input",317419625),p1__40558_SHARP_.target.value], null));
});})(groups,text))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (groups,text){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-group","new-group",-1853027446),text], null));
});})(groups,text))
], null),"Save"], null),cljs.core.doall.call(null,(function (){var iter__29240__auto__ = ((function (groups,text){
return (function frontend$core$groups_$_iter__40559(s__40560){
return (new cljs.core.LazySeq(null,((function (groups,text){
return (function (){
var s__40560__$1 = s__40560;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40560__$1);
if(temp__4657__auto__){
var s__40560__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40560__$2)){
var c__29238__auto__ = cljs.core.chunk_first.call(null,s__40560__$2);
var size__29239__auto__ = cljs.core.count.call(null,c__29238__auto__);
var b__40562 = cljs.core.chunk_buffer.call(null,size__29239__auto__);
if((function (){var i__40561 = (0);
while(true){
if((i__40561 < size__29239__auto__)){
var group = cljs.core._nth.call(null,c__29238__auto__,i__40561);
cljs.core.chunk_append.call(null,b__40562,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.group_info,group], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(group)], null)));

var G__40563 = (i__40561 + (1));
i__40561 = G__40563;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40562),frontend$core$groups_$_iter__40559.call(null,cljs.core.chunk_rest.call(null,s__40560__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40562),null);
}
} else {
var group = cljs.core.first.call(null,s__40560__$2);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.group_info,group], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(group)], null)),frontend$core$groups_$_iter__40559.call(null,cljs.core.rest.call(null,s__40560__$2)));
}
} else {
return null;
}
break;
}
});})(groups,text))
,null,null));
});})(groups,text))
;
return iter__29240__auto__.call(null,groups);
})())], null);
});
frontend.core.make_list = (function frontend$core$make_list(){
var cards = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("make-list","display-cards","make-list/display-cards",296379806)], null)));
var list = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("make-list","list","make-list/list",-438075624)], null)));
var groups = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"groups","groups",-136896102)], null)));
var new_list = ((function (cards,list,groups){
return (function (p1__40564_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("make-list","list","make-list/list",-438075624),((cljs.core.contains_QMARK_.call(null,list,p1__40564_SHARP_))?cljs.core.disj.call(null,list,p1__40564_SHARP_):cljs.core.conj.call(null,list,p1__40564_SHARP_))], null));
});})(cards,list,groups))
;
var card_ids = cljs.core.set.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),cards));
var all_added = cljs.core._EQ_.call(null,clojure.set.intersection.call(null,list,card_ids),card_ids);
var add_or_rm_all = ((function (cards,list,groups,new_list,card_ids,all_added){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("make-list","list","make-list/list",-438075624),((all_added)?clojure.set.difference.call(null,list,card_ids):cljs.core.into.call(null,list,card_ids))], null));
});})(cards,list,groups,new_list,card_ids,all_added))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (cards,list,groups,new_list,card_ids,all_added,add_or_rm_all){
return (function (p1__40565_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cards-in-group","cards-in-group",484417986),p1__40565_SHARP_.target.value], null));
});})(cards,list,groups,new_list,card_ids,all_added,add_or_rm_all))
], null),cljs.core.doall.call(null,(function (){var iter__29240__auto__ = ((function (cards,list,groups,new_list,card_ids,all_added,add_or_rm_all){
return (function frontend$core$make_list_$_iter__40566(s__40567){
return (new cljs.core.LazySeq(null,((function (cards,list,groups,new_list,card_ids,all_added,add_or_rm_all){
return (function (){
var s__40567__$1 = s__40567;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40567__$1);
if(temp__4657__auto__){
var s__40567__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40567__$2)){
var c__29238__auto__ = cljs.core.chunk_first.call(null,s__40567__$2);
var size__29239__auto__ = cljs.core.count.call(null,c__29238__auto__);
var b__40569 = cljs.core.chunk_buffer.call(null,size__29239__auto__);
if((function (){var i__40568 = (0);
while(true){
if((i__40568 < size__29239__auto__)){
var map__40570 = cljs.core._nth.call(null,c__29238__auto__,i__40568);
var map__40570__$1 = ((((!((map__40570 == null)))?((((map__40570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40570):map__40570);
var name = cljs.core.get.call(null,map__40570__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var id = cljs.core.get.call(null,map__40570__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append.call(null,b__40569,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__40588 = (i__40568 + (1));
i__40568 = G__40588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40569),frontend$core$make_list_$_iter__40566.call(null,cljs.core.chunk_rest.call(null,s__40567__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40569),null);
}
} else {
var map__40572 = cljs.core.first.call(null,s__40567__$2);
var map__40572__$1 = ((((!((map__40572 == null)))?((((map__40572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40572):map__40572);
var name = cljs.core.get.call(null,map__40572__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var id = cljs.core.get.call(null,map__40572__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),id], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$core$make_list_$_iter__40566.call(null,cljs.core.rest.call(null,s__40567__$2)));
}
} else {
return null;
}
break;
}
});})(cards,list,groups,new_list,card_ids,all_added,add_or_rm_all))
,null,null));
});})(cards,list,groups,new_list,card_ids,all_added,add_or_rm_all))
;
return iter__29240__auto__.call(null,groups);
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),all_added,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (cards,list,groups,new_list,card_ids,all_added,add_or_rm_all){
return (function (){
return add_or_rm_all.call(null);
});})(cards,list,groups,new_list,card_ids,all_added,add_or_rm_all))
], null)], null),"Add all"], null),cljs.core.doall.call(null,(function (){var iter__29240__auto__ = ((function (cards,list,groups,new_list,card_ids,all_added,add_or_rm_all){
return (function frontend$core$make_list_$_iter__40574(s__40575){
return (new cljs.core.LazySeq(null,((function (cards,list,groups,new_list,card_ids,all_added,add_or_rm_all){
return (function (){
var s__40575__$1 = s__40575;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__40575__$1);
if(temp__4657__auto__){
var s__40575__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40575__$2)){
var c__29238__auto__ = cljs.core.chunk_first.call(null,s__40575__$2);
var size__29239__auto__ = cljs.core.count.call(null,c__29238__auto__);
var b__40577 = cljs.core.chunk_buffer.call(null,size__29239__auto__);
if((function (){var i__40576 = (0);
while(true){
if((i__40576 < size__29239__auto__)){
var vec__40578 = cljs.core._nth.call(null,c__29238__auto__,i__40576);
var i = cljs.core.nth.call(null,vec__40578,(0),null);
var map__40581 = cljs.core.nth.call(null,vec__40578,(1),null);
var map__40581__$1 = ((((!((map__40581 == null)))?((((map__40581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40581):map__40581);
var card = map__40581__$1;
var id = cljs.core.get.call(null,map__40581__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.chunk_append.call(null,b__40577,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_.call(null,list,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__40576,vec__40578,i,map__40581,map__40581__$1,card,id,c__29238__auto__,size__29239__auto__,b__40577,s__40575__$2,temp__4657__auto__,cards,list,groups,new_list,card_ids,all_added,add_or_rm_all){
return (function (){
return new_list.call(null,id);
});})(i__40576,vec__40578,i,map__40581,map__40581__$1,card,id,c__29238__auto__,size__29239__auto__,b__40577,s__40575__$2,temp__4657__auto__,cards,list,groups,new_list,card_ids,all_added,add_or_rm_all))
], null)], null),new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(card)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__40589 = (i__40576 + (1));
i__40576 = G__40589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40577),frontend$core$make_list_$_iter__40574.call(null,cljs.core.chunk_rest.call(null,s__40575__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40577),null);
}
} else {
var vec__40583 = cljs.core.first.call(null,s__40575__$2);
var i = cljs.core.nth.call(null,vec__40583,(0),null);
var map__40586 = cljs.core.nth.call(null,vec__40583,(1),null);
var map__40586__$1 = ((((!((map__40586 == null)))?((((map__40586.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40586.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40586):map__40586);
var card = map__40586__$1;
var id = cljs.core.get.call(null,map__40586__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_.call(null,list,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__40583,i,map__40586,map__40586__$1,card,id,s__40575__$2,temp__4657__auto__,cards,list,groups,new_list,card_ids,all_added,add_or_rm_all){
return (function (){
return new_list.call(null,id);
});})(vec__40583,i,map__40586,map__40586__$1,card,id,s__40575__$2,temp__4657__auto__,cards,list,groups,new_list,card_ids,all_added,add_or_rm_all))
], null)], null),new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(card)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),frontend$core$make_list_$_iter__40574.call(null,cljs.core.rest.call(null,s__40575__$2)));
}
} else {
return null;
}
break;
}
});})(cards,list,groups,new_list,card_ids,all_added,add_or_rm_all))
,null,null));
});})(cards,list,groups,new_list,card_ids,all_added,add_or_rm_all))
;
return iter__29240__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cards));
})())], null);
});
frontend.core.lists = (function frontend$core$lists(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Make new list"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.make_list], null)], null);
});
frontend.core.views = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"session","session",1008279103),frontend.core.session,new cljs.core.Keyword(null,"home","home",-74557309),frontend.core.home,new cljs.core.Keyword(null,"groups","groups",-136896102),frontend.core.groups,new cljs.core.Keyword(null,"lists","lists",-884730684),frontend.core.lists], null);
frontend.core.app = (function frontend$core$app(){
var view = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"view","view",1247994814)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page","div.page",1917984906),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.sidebar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.views.call(null,view)], null)], null);
});
frontend.core.mount_root = (function frontend$core$mount_root(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"init","init",-1875481434)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-cards","fetch-cards",-438007940)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fetch-groups","fetch-groups",-1083278192)], null));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.app], null),document.getElementById("app"));
});
frontend.core.mount_root.call(null);

//# sourceMappingURL=core.js.map?rel=1573833205973
