// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_31903 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__31904 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__31905 = null;
var count__31906 = (0);
var i__31907 = (0);
while(true){
if((i__31907 < count__31906)){
var vec__31908 = cljs.core._nth.call(null,chunk__31905,i__31907);
var effect_key = cljs.core.nth.call(null,vec__31908,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31908,(1),null);
var temp__4655__auto___31924 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31924)){
var effect_fn_31925 = temp__4655__auto___31924;
effect_fn_31925.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__31926 = seq__31904;
var G__31927 = chunk__31905;
var G__31928 = count__31906;
var G__31929 = (i__31907 + (1));
seq__31904 = G__31926;
chunk__31905 = G__31927;
count__31906 = G__31928;
i__31907 = G__31929;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31904);
if(temp__4657__auto__){
var seq__31904__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31904__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__31904__$1);
var G__31930 = cljs.core.chunk_rest.call(null,seq__31904__$1);
var G__31931 = c__29271__auto__;
var G__31932 = cljs.core.count.call(null,c__29271__auto__);
var G__31933 = (0);
seq__31904 = G__31930;
chunk__31905 = G__31931;
count__31906 = G__31932;
i__31907 = G__31933;
continue;
} else {
var vec__31911 = cljs.core.first.call(null,seq__31904__$1);
var effect_key = cljs.core.nth.call(null,vec__31911,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31911,(1),null);
var temp__4655__auto___31934 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31934)){
var effect_fn_31935 = temp__4655__auto___31934;
effect_fn_31935.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__31936 = cljs.core.next.call(null,seq__31904__$1);
var G__31937 = null;
var G__31938 = (0);
var G__31939 = (0);
seq__31904 = G__31936;
chunk__31905 = G__31937;
count__31906 = G__31938;
i__31907 = G__31939;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__31547__auto___31940 = re_frame.interop.now.call(null);
var duration__31548__auto___31941 = (end__31547__auto___31940 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__31548__auto___31941,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__31547__auto___31940);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_31903;
}} else {
var seq__31914 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__31915 = null;
var count__31916 = (0);
var i__31917 = (0);
while(true){
if((i__31917 < count__31916)){
var vec__31918 = cljs.core._nth.call(null,chunk__31915,i__31917);
var effect_key = cljs.core.nth.call(null,vec__31918,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31918,(1),null);
var temp__4655__auto___31942 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31942)){
var effect_fn_31943 = temp__4655__auto___31942;
effect_fn_31943.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__31944 = seq__31914;
var G__31945 = chunk__31915;
var G__31946 = count__31916;
var G__31947 = (i__31917 + (1));
seq__31914 = G__31944;
chunk__31915 = G__31945;
count__31916 = G__31946;
i__31917 = G__31947;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31914);
if(temp__4657__auto__){
var seq__31914__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31914__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__31914__$1);
var G__31948 = cljs.core.chunk_rest.call(null,seq__31914__$1);
var G__31949 = c__29271__auto__;
var G__31950 = cljs.core.count.call(null,c__29271__auto__);
var G__31951 = (0);
seq__31914 = G__31948;
chunk__31915 = G__31949;
count__31916 = G__31950;
i__31917 = G__31951;
continue;
} else {
var vec__31921 = cljs.core.first.call(null,seq__31914__$1);
var effect_key = cljs.core.nth.call(null,vec__31921,(0),null);
var effect_value = cljs.core.nth.call(null,vec__31921,(1),null);
var temp__4655__auto___31952 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___31952)){
var effect_fn_31953 = temp__4655__auto___31952;
effect_fn_31953.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__31954 = cljs.core.next.call(null,seq__31914__$1);
var G__31955 = null;
var G__31956 = (0);
var G__31957 = (0);
seq__31914 = G__31954;
chunk__31915 = G__31955;
count__31916 = G__31956;
i__31917 = G__31957;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__31958 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__31959 = null;
var count__31960 = (0);
var i__31961 = (0);
while(true){
if((i__31961 < count__31960)){
var map__31962 = cljs.core._nth.call(null,chunk__31959,i__31961);
var map__31962__$1 = ((((!((map__31962 == null)))?((((map__31962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31962.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31962):map__31962);
var effect = map__31962__$1;
var ms = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31962__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31958,chunk__31959,count__31960,i__31961,map__31962,map__31962__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31958,chunk__31959,count__31960,i__31961,map__31962,map__31962__$1,effect,ms,dispatch))
,ms);
}

var G__31966 = seq__31958;
var G__31967 = chunk__31959;
var G__31968 = count__31960;
var G__31969 = (i__31961 + (1));
seq__31958 = G__31966;
chunk__31959 = G__31967;
count__31960 = G__31968;
i__31961 = G__31969;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31958);
if(temp__4657__auto__){
var seq__31958__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31958__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__31958__$1);
var G__31970 = cljs.core.chunk_rest.call(null,seq__31958__$1);
var G__31971 = c__29271__auto__;
var G__31972 = cljs.core.count.call(null,c__29271__auto__);
var G__31973 = (0);
seq__31958 = G__31970;
chunk__31959 = G__31971;
count__31960 = G__31972;
i__31961 = G__31973;
continue;
} else {
var map__31964 = cljs.core.first.call(null,seq__31958__$1);
var map__31964__$1 = ((((!((map__31964 == null)))?((((map__31964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31964):map__31964);
var effect = map__31964__$1;
var ms = cljs.core.get.call(null,map__31964__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__31964__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__31958,chunk__31959,count__31960,i__31961,map__31964,map__31964__$1,effect,ms,dispatch,seq__31958__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__31958,chunk__31959,count__31960,i__31961,map__31964,map__31964__$1,effect,ms,dispatch,seq__31958__$1,temp__4657__auto__))
,ms);
}

var G__31974 = cljs.core.next.call(null,seq__31958__$1);
var G__31975 = null;
var G__31976 = (0);
var G__31977 = (0);
seq__31958 = G__31974;
chunk__31959 = G__31975;
count__31960 = G__31976;
i__31961 = G__31977;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__31978 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__31979 = null;
var count__31980 = (0);
var i__31981 = (0);
while(true){
if((i__31981 < count__31980)){
var event = cljs.core._nth.call(null,chunk__31979,i__31981);
re_frame.router.dispatch.call(null,event);

var G__31982 = seq__31978;
var G__31983 = chunk__31979;
var G__31984 = count__31980;
var G__31985 = (i__31981 + (1));
seq__31978 = G__31982;
chunk__31979 = G__31983;
count__31980 = G__31984;
i__31981 = G__31985;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31978);
if(temp__4657__auto__){
var seq__31978__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31978__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__31978__$1);
var G__31986 = cljs.core.chunk_rest.call(null,seq__31978__$1);
var G__31987 = c__29271__auto__;
var G__31988 = cljs.core.count.call(null,c__29271__auto__);
var G__31989 = (0);
seq__31978 = G__31986;
chunk__31979 = G__31987;
count__31980 = G__31988;
i__31981 = G__31989;
continue;
} else {
var event = cljs.core.first.call(null,seq__31978__$1);
re_frame.router.dispatch.call(null,event);

var G__31990 = cljs.core.next.call(null,seq__31978__$1);
var G__31991 = null;
var G__31992 = (0);
var G__31993 = (0);
seq__31978 = G__31990;
chunk__31979 = G__31991;
count__31980 = G__31992;
i__31981 = G__31993;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__31994 = cljs.core.seq.call(null,value);
var chunk__31995 = null;
var count__31996 = (0);
var i__31997 = (0);
while(true){
if((i__31997 < count__31996)){
var event = cljs.core._nth.call(null,chunk__31995,i__31997);
clear_event.call(null,event);

var G__31998 = seq__31994;
var G__31999 = chunk__31995;
var G__32000 = count__31996;
var G__32001 = (i__31997 + (1));
seq__31994 = G__31998;
chunk__31995 = G__31999;
count__31996 = G__32000;
i__31997 = G__32001;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__31994);
if(temp__4657__auto__){
var seq__31994__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31994__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__31994__$1);
var G__32002 = cljs.core.chunk_rest.call(null,seq__31994__$1);
var G__32003 = c__29271__auto__;
var G__32004 = cljs.core.count.call(null,c__29271__auto__);
var G__32005 = (0);
seq__31994 = G__32002;
chunk__31995 = G__32003;
count__31996 = G__32004;
i__31997 = G__32005;
continue;
} else {
var event = cljs.core.first.call(null,seq__31994__$1);
clear_event.call(null,event);

var G__32006 = cljs.core.next.call(null,seq__31994__$1);
var G__32007 = null;
var G__32008 = (0);
var G__32009 = (0);
seq__31994 = G__32006;
chunk__31995 = G__32007;
count__31996 = G__32008;
i__31997 = G__32009;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1572992066474
