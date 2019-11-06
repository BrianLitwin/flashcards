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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__31569){
var map__31570 = p__31569;
var map__31570__$1 = ((((!((map__31570 == null)))?((((map__31570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31570):map__31570);
var operation = cljs.core.get.call(null,map__31570__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__31570__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__31570__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__31570__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__31572_31584 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__31573_31585 = null;
var count__31574_31586 = (0);
var i__31575_31587 = (0);
while(true){
if((i__31575_31587 < count__31574_31586)){
var vec__31576_31588 = cljs.core._nth.call(null,chunk__31573_31585,i__31575_31587);
var k_31589 = cljs.core.nth.call(null,vec__31576_31588,(0),null);
var cb_31590 = cljs.core.nth.call(null,vec__31576_31588,(1),null);
try{cb_31590.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e31579){var e_31591 = e31579;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_31589,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_31591);
}
var G__31592 = seq__31572_31584;
var G__31593 = chunk__31573_31585;
var G__31594 = count__31574_31586;
var G__31595 = (i__31575_31587 + (1));
seq__31572_31584 = G__31592;
chunk__31573_31585 = G__31593;
count__31574_31586 = G__31594;
i__31575_31587 = G__31595;
continue;
} else {
var temp__4657__auto___31596 = cljs.core.seq.call(null,seq__31572_31584);
if(temp__4657__auto___31596){
var seq__31572_31597__$1 = temp__4657__auto___31596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31572_31597__$1)){
var c__29271__auto___31598 = cljs.core.chunk_first.call(null,seq__31572_31597__$1);
var G__31599 = cljs.core.chunk_rest.call(null,seq__31572_31597__$1);
var G__31600 = c__29271__auto___31598;
var G__31601 = cljs.core.count.call(null,c__29271__auto___31598);
var G__31602 = (0);
seq__31572_31584 = G__31599;
chunk__31573_31585 = G__31600;
count__31574_31586 = G__31601;
i__31575_31587 = G__31602;
continue;
} else {
var vec__31580_31603 = cljs.core.first.call(null,seq__31572_31597__$1);
var k_31604 = cljs.core.nth.call(null,vec__31580_31603,(0),null);
var cb_31605 = cljs.core.nth.call(null,vec__31580_31603,(1),null);
try{cb_31605.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e31583){var e_31606 = e31583;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_31604,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_31606);
}
var G__31607 = cljs.core.next.call(null,seq__31572_31597__$1);
var G__31608 = null;
var G__31609 = (0);
var G__31610 = (0);
seq__31572_31584 = G__31607;
chunk__31573_31585 = G__31608;
count__31574_31586 = G__31609;
i__31575_31587 = G__31610;
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

//# sourceMappingURL=trace.js.map?rel=1572992065735
