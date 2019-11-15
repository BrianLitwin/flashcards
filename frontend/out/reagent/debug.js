// Compiled by ClojureScript 1.9.908 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__30666__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30667__i = 0, G__30667__a = new Array(arguments.length -  0);
while (G__30667__i < G__30667__a.length) {G__30667__a[G__30667__i] = arguments[G__30667__i + 0]; ++G__30667__i;}
  args = new cljs.core.IndexedSeq(G__30667__a,0,null);
} 
return G__30666__delegate.call(this,args);};
G__30666.cljs$lang$maxFixedArity = 0;
G__30666.cljs$lang$applyTo = (function (arglist__30668){
var args = cljs.core.seq(arglist__30668);
return G__30666__delegate(args);
});
G__30666.cljs$core$IFn$_invoke$arity$variadic = G__30666__delegate;
return G__30666;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__30669__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__30669 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30670__i = 0, G__30670__a = new Array(arguments.length -  0);
while (G__30670__i < G__30670__a.length) {G__30670__a[G__30670__i] = arguments[G__30670__i + 0]; ++G__30670__i;}
  args = new cljs.core.IndexedSeq(G__30670__a,0,null);
} 
return G__30669__delegate.call(this,args);};
G__30669.cljs$lang$maxFixedArity = 0;
G__30669.cljs$lang$applyTo = (function (arglist__30671){
var args = cljs.core.seq(arglist__30671);
return G__30669__delegate(args);
});
G__30669.cljs$core$IFn$_invoke$arity$variadic = G__30669__delegate;
return G__30669;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1573832692670
