// Compiled by ClojureScript 1.9.908 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if(typeof re_frame.trace.traces !== 'undefined'){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frame.trace.next_delivery !== 'undefined'){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(cljs.core.truth_(re_frame.trace.trace_enabled_QMARK_)){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__32509){
var map__32510 = p__32509;
var map__32510__$1 = ((((!((map__32510 == null)))?((((map__32510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32510):map__32510);
var operation = cljs.core.get.call(null,map__32510__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__32510__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__32510__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__32510__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__28432__auto__ = child_of;
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__32512_32524 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__32513_32525 = null;
var count__32514_32526 = (0);
var i__32515_32527 = (0);
while(true){
if((i__32515_32527 < count__32514_32526)){
var vec__32516_32528 = cljs.core._nth.call(null,chunk__32513_32525,i__32515_32527);
var k_32529 = cljs.core.nth.call(null,vec__32516_32528,(0),null);
var cb_32530 = cljs.core.nth.call(null,vec__32516_32528,(1),null);
try{cb_32530.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e32519){var e_32531 = e32519;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_32529,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_32531);
}
var G__32532 = seq__32512_32524;
var G__32533 = chunk__32513_32525;
var G__32534 = count__32514_32526;
var G__32535 = (i__32515_32527 + (1));
seq__32512_32524 = G__32532;
chunk__32513_32525 = G__32533;
count__32514_32526 = G__32534;
i__32515_32527 = G__32535;
continue;
} else {
var temp__4657__auto___32536 = cljs.core.seq.call(null,seq__32512_32524);
if(temp__4657__auto___32536){
var seq__32512_32537__$1 = temp__4657__auto___32536;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32512_32537__$1)){
var c__29271__auto___32538 = cljs.core.chunk_first.call(null,seq__32512_32537__$1);
var G__32539 = cljs.core.chunk_rest.call(null,seq__32512_32537__$1);
var G__32540 = c__29271__auto___32538;
var G__32541 = cljs.core.count.call(null,c__29271__auto___32538);
var G__32542 = (0);
seq__32512_32524 = G__32539;
chunk__32513_32525 = G__32540;
count__32514_32526 = G__32541;
i__32515_32527 = G__32542;
continue;
} else {
var vec__32520_32543 = cljs.core.first.call(null,seq__32512_32537__$1);
var k_32544 = cljs.core.nth.call(null,vec__32520_32543,(0),null);
var cb_32545 = cljs.core.nth.call(null,vec__32520_32543,(1),null);
try{cb_32545.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e32523){var e_32546 = e32523;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_32544,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_32546);
}
var G__32547 = cljs.core.next.call(null,seq__32512_32537__$1);
var G__32548 = null;
var G__32549 = (0);
var G__32550 = (0);
seq__32512_32524 = G__32547;
chunk__32513_32525 = G__32548;
count__32514_32526 = G__32549;
i__32515_32527 = G__32550;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map?rel=1573832696534
