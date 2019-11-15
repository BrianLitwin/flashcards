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
var _STAR_current_trace_STAR_32843 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__32844 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__32845 = null;
var count__32846 = (0);
var i__32847 = (0);
while(true){
if((i__32847 < count__32846)){
var vec__32848 = cljs.core._nth.call(null,chunk__32845,i__32847);
var effect_key = cljs.core.nth.call(null,vec__32848,(0),null);
var effect_value = cljs.core.nth.call(null,vec__32848,(1),null);
var temp__4655__auto___32864 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___32864)){
var effect_fn_32865 = temp__4655__auto___32864;
effect_fn_32865.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__32866 = seq__32844;
var G__32867 = chunk__32845;
var G__32868 = count__32846;
var G__32869 = (i__32847 + (1));
seq__32844 = G__32866;
chunk__32845 = G__32867;
count__32846 = G__32868;
i__32847 = G__32869;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32844);
if(temp__4657__auto__){
var seq__32844__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32844__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__32844__$1);
var G__32870 = cljs.core.chunk_rest.call(null,seq__32844__$1);
var G__32871 = c__29271__auto__;
var G__32872 = cljs.core.count.call(null,c__29271__auto__);
var G__32873 = (0);
seq__32844 = G__32870;
chunk__32845 = G__32871;
count__32846 = G__32872;
i__32847 = G__32873;
continue;
} else {
var vec__32851 = cljs.core.first.call(null,seq__32844__$1);
var effect_key = cljs.core.nth.call(null,vec__32851,(0),null);
var effect_value = cljs.core.nth.call(null,vec__32851,(1),null);
var temp__4655__auto___32874 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___32874)){
var effect_fn_32875 = temp__4655__auto___32874;
effect_fn_32875.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__32876 = cljs.core.next.call(null,seq__32844__$1);
var G__32877 = null;
var G__32878 = (0);
var G__32879 = (0);
seq__32844 = G__32876;
chunk__32845 = G__32877;
count__32846 = G__32878;
i__32847 = G__32879;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__32487__auto___32880 = re_frame.interop.now.call(null);
var duration__32488__auto___32881 = (end__32487__auto___32880 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__32488__auto___32881,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__32487__auto___32880);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_32843;
}} else {
var seq__32854 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__32855 = null;
var count__32856 = (0);
var i__32857 = (0);
while(true){
if((i__32857 < count__32856)){
var vec__32858 = cljs.core._nth.call(null,chunk__32855,i__32857);
var effect_key = cljs.core.nth.call(null,vec__32858,(0),null);
var effect_value = cljs.core.nth.call(null,vec__32858,(1),null);
var temp__4655__auto___32882 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___32882)){
var effect_fn_32883 = temp__4655__auto___32882;
effect_fn_32883.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__32884 = seq__32854;
var G__32885 = chunk__32855;
var G__32886 = count__32856;
var G__32887 = (i__32857 + (1));
seq__32854 = G__32884;
chunk__32855 = G__32885;
count__32856 = G__32886;
i__32857 = G__32887;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32854);
if(temp__4657__auto__){
var seq__32854__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32854__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__32854__$1);
var G__32888 = cljs.core.chunk_rest.call(null,seq__32854__$1);
var G__32889 = c__29271__auto__;
var G__32890 = cljs.core.count.call(null,c__29271__auto__);
var G__32891 = (0);
seq__32854 = G__32888;
chunk__32855 = G__32889;
count__32856 = G__32890;
i__32857 = G__32891;
continue;
} else {
var vec__32861 = cljs.core.first.call(null,seq__32854__$1);
var effect_key = cljs.core.nth.call(null,vec__32861,(0),null);
var effect_value = cljs.core.nth.call(null,vec__32861,(1),null);
var temp__4655__auto___32892 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___32892)){
var effect_fn_32893 = temp__4655__auto___32892;
effect_fn_32893.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}

var G__32894 = cljs.core.next.call(null,seq__32854__$1);
var G__32895 = null;
var G__32896 = (0);
var G__32897 = (0);
seq__32854 = G__32894;
chunk__32855 = G__32895;
count__32856 = G__32896;
i__32857 = G__32897;
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
var seq__32898 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__32899 = null;
var count__32900 = (0);
var i__32901 = (0);
while(true){
if((i__32901 < count__32900)){
var map__32902 = cljs.core._nth.call(null,chunk__32899,i__32901);
var map__32902__$1 = ((((!((map__32902 == null)))?((((map__32902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32902):map__32902);
var effect = map__32902__$1;
var ms = cljs.core.get.call(null,map__32902__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__32902__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__32898,chunk__32899,count__32900,i__32901,map__32902,map__32902__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__32898,chunk__32899,count__32900,i__32901,map__32902,map__32902__$1,effect,ms,dispatch))
,ms);
}

var G__32906 = seq__32898;
var G__32907 = chunk__32899;
var G__32908 = count__32900;
var G__32909 = (i__32901 + (1));
seq__32898 = G__32906;
chunk__32899 = G__32907;
count__32900 = G__32908;
i__32901 = G__32909;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32898);
if(temp__4657__auto__){
var seq__32898__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32898__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__32898__$1);
var G__32910 = cljs.core.chunk_rest.call(null,seq__32898__$1);
var G__32911 = c__29271__auto__;
var G__32912 = cljs.core.count.call(null,c__29271__auto__);
var G__32913 = (0);
seq__32898 = G__32910;
chunk__32899 = G__32911;
count__32900 = G__32912;
i__32901 = G__32913;
continue;
} else {
var map__32904 = cljs.core.first.call(null,seq__32898__$1);
var map__32904__$1 = ((((!((map__32904 == null)))?((((map__32904.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32904.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32904):map__32904);
var effect = map__32904__$1;
var ms = cljs.core.get.call(null,map__32904__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__32904__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__32898,chunk__32899,count__32900,i__32901,map__32904,map__32904__$1,effect,ms,dispatch,seq__32898__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__32898,chunk__32899,count__32900,i__32901,map__32904,map__32904__$1,effect,ms,dispatch,seq__32898__$1,temp__4657__auto__))
,ms);
}

var G__32914 = cljs.core.next.call(null,seq__32898__$1);
var G__32915 = null;
var G__32916 = (0);
var G__32917 = (0);
seq__32898 = G__32914;
chunk__32899 = G__32915;
count__32900 = G__32916;
i__32901 = G__32917;
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
var seq__32918 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__32919 = null;
var count__32920 = (0);
var i__32921 = (0);
while(true){
if((i__32921 < count__32920)){
var event = cljs.core._nth.call(null,chunk__32919,i__32921);
re_frame.router.dispatch.call(null,event);

var G__32922 = seq__32918;
var G__32923 = chunk__32919;
var G__32924 = count__32920;
var G__32925 = (i__32921 + (1));
seq__32918 = G__32922;
chunk__32919 = G__32923;
count__32920 = G__32924;
i__32921 = G__32925;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32918);
if(temp__4657__auto__){
var seq__32918__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32918__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__32918__$1);
var G__32926 = cljs.core.chunk_rest.call(null,seq__32918__$1);
var G__32927 = c__29271__auto__;
var G__32928 = cljs.core.count.call(null,c__29271__auto__);
var G__32929 = (0);
seq__32918 = G__32926;
chunk__32919 = G__32927;
count__32920 = G__32928;
i__32921 = G__32929;
continue;
} else {
var event = cljs.core.first.call(null,seq__32918__$1);
re_frame.router.dispatch.call(null,event);

var G__32930 = cljs.core.next.call(null,seq__32918__$1);
var G__32931 = null;
var G__32932 = (0);
var G__32933 = (0);
seq__32918 = G__32930;
chunk__32919 = G__32931;
count__32920 = G__32932;
i__32921 = G__32933;
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
var seq__32934 = cljs.core.seq.call(null,value);
var chunk__32935 = null;
var count__32936 = (0);
var i__32937 = (0);
while(true){
if((i__32937 < count__32936)){
var event = cljs.core._nth.call(null,chunk__32935,i__32937);
clear_event.call(null,event);

var G__32938 = seq__32934;
var G__32939 = chunk__32935;
var G__32940 = count__32936;
var G__32941 = (i__32937 + (1));
seq__32934 = G__32938;
chunk__32935 = G__32939;
count__32936 = G__32940;
i__32937 = G__32941;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__32934);
if(temp__4657__auto__){
var seq__32934__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32934__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__32934__$1);
var G__32942 = cljs.core.chunk_rest.call(null,seq__32934__$1);
var G__32943 = c__29271__auto__;
var G__32944 = cljs.core.count.call(null,c__29271__auto__);
var G__32945 = (0);
seq__32934 = G__32942;
chunk__32935 = G__32943;
count__32936 = G__32944;
i__32937 = G__32945;
continue;
} else {
var event = cljs.core.first.call(null,seq__32934__$1);
clear_event.call(null,event);

var G__32946 = cljs.core.next.call(null,seq__32934__$1);
var G__32947 = null;
var G__32948 = (0);
var G__32949 = (0);
seq__32934 = G__32946;
chunk__32935 = G__32947;
count__32936 = G__32948;
i__32937 = G__32949;
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

//# sourceMappingURL=fx.js.map?rel=1573832697667
