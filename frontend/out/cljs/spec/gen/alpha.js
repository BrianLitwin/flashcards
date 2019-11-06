// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37294 = arguments.length;
var i__29602__auto___37295 = (0);
while(true){
if((i__29602__auto___37295 < len__29601__auto___37294)){
args__29608__auto__.push((arguments[i__29602__auto___37295]));

var G__37296 = (i__29602__auto___37295 + (1));
i__29602__auto___37295 = G__37296;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq37293){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37293));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37298 = arguments.length;
var i__29602__auto___37299 = (0);
while(true){
if((i__29602__auto___37299 < len__29601__auto___37298)){
args__29608__auto__.push((arguments[i__29602__auto___37299]));

var G__37300 = (i__29602__auto___37299 + (1));
i__29602__auto___37299 = G__37300;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq37297){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37297));
});

var g_QMARK__37301 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_37302 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37301){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__37301))
,null));
var mkg_37303 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__37301,g_37302){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__37301,g_37302))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__37301,g_37302,mkg_37303){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__37301).call(null,x);
});})(g_QMARK__37301,g_37302,mkg_37303))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__37301,g_37302,mkg_37303){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_37303).call(null,gfn);
});})(g_QMARK__37301,g_37302,mkg_37303))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__37301,g_37302,mkg_37303){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_37302).call(null,generator);
});})(g_QMARK__37301,g_37302,mkg_37303))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__32247__auto___37323 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__32247__auto___37323){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37324 = arguments.length;
var i__29602__auto___37325 = (0);
while(true){
if((i__29602__auto___37325 < len__29601__auto___37324)){
args__29608__auto__.push((arguments[i__29602__auto___37325]));

var G__37326 = (i__29602__auto___37325 + (1));
i__29602__auto___37325 = G__37326;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37323))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37323){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37323),args);
});})(g__32247__auto___37323))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__32247__auto___37323){
return (function (seq37304){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37304));
});})(g__32247__auto___37323))
;


var g__32247__auto___37327 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__32247__auto___37327){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37328 = arguments.length;
var i__29602__auto___37329 = (0);
while(true){
if((i__29602__auto___37329 < len__29601__auto___37328)){
args__29608__auto__.push((arguments[i__29602__auto___37329]));

var G__37330 = (i__29602__auto___37329 + (1));
i__29602__auto___37329 = G__37330;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37327))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37327){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37327),args);
});})(g__32247__auto___37327))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__32247__auto___37327){
return (function (seq37305){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37305));
});})(g__32247__auto___37327))
;


var g__32247__auto___37331 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__32247__auto___37331){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37332 = arguments.length;
var i__29602__auto___37333 = (0);
while(true){
if((i__29602__auto___37333 < len__29601__auto___37332)){
args__29608__auto__.push((arguments[i__29602__auto___37333]));

var G__37334 = (i__29602__auto___37333 + (1));
i__29602__auto___37333 = G__37334;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37331))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37331){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37331),args);
});})(g__32247__auto___37331))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__32247__auto___37331){
return (function (seq37306){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37306));
});})(g__32247__auto___37331))
;


var g__32247__auto___37335 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__32247__auto___37335){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37336 = arguments.length;
var i__29602__auto___37337 = (0);
while(true){
if((i__29602__auto___37337 < len__29601__auto___37336)){
args__29608__auto__.push((arguments[i__29602__auto___37337]));

var G__37338 = (i__29602__auto___37337 + (1));
i__29602__auto___37337 = G__37338;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37335))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37335){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37335),args);
});})(g__32247__auto___37335))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__32247__auto___37335){
return (function (seq37307){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37307));
});})(g__32247__auto___37335))
;


var g__32247__auto___37339 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__32247__auto___37339){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37340 = arguments.length;
var i__29602__auto___37341 = (0);
while(true){
if((i__29602__auto___37341 < len__29601__auto___37340)){
args__29608__auto__.push((arguments[i__29602__auto___37341]));

var G__37342 = (i__29602__auto___37341 + (1));
i__29602__auto___37341 = G__37342;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37339))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37339){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37339),args);
});})(g__32247__auto___37339))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__32247__auto___37339){
return (function (seq37308){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37308));
});})(g__32247__auto___37339))
;


var g__32247__auto___37343 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__32247__auto___37343){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37344 = arguments.length;
var i__29602__auto___37345 = (0);
while(true){
if((i__29602__auto___37345 < len__29601__auto___37344)){
args__29608__auto__.push((arguments[i__29602__auto___37345]));

var G__37346 = (i__29602__auto___37345 + (1));
i__29602__auto___37345 = G__37346;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37343))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37343){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37343),args);
});})(g__32247__auto___37343))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__32247__auto___37343){
return (function (seq37309){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37309));
});})(g__32247__auto___37343))
;


var g__32247__auto___37347 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__32247__auto___37347){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37348 = arguments.length;
var i__29602__auto___37349 = (0);
while(true){
if((i__29602__auto___37349 < len__29601__auto___37348)){
args__29608__auto__.push((arguments[i__29602__auto___37349]));

var G__37350 = (i__29602__auto___37349 + (1));
i__29602__auto___37349 = G__37350;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37347))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37347){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37347),args);
});})(g__32247__auto___37347))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__32247__auto___37347){
return (function (seq37310){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37310));
});})(g__32247__auto___37347))
;


var g__32247__auto___37351 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__32247__auto___37351){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37352 = arguments.length;
var i__29602__auto___37353 = (0);
while(true){
if((i__29602__auto___37353 < len__29601__auto___37352)){
args__29608__auto__.push((arguments[i__29602__auto___37353]));

var G__37354 = (i__29602__auto___37353 + (1));
i__29602__auto___37353 = G__37354;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37351))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37351){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37351),args);
});})(g__32247__auto___37351))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__32247__auto___37351){
return (function (seq37311){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37311));
});})(g__32247__auto___37351))
;


var g__32247__auto___37355 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__32247__auto___37355){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37356 = arguments.length;
var i__29602__auto___37357 = (0);
while(true){
if((i__29602__auto___37357 < len__29601__auto___37356)){
args__29608__auto__.push((arguments[i__29602__auto___37357]));

var G__37358 = (i__29602__auto___37357 + (1));
i__29602__auto___37357 = G__37358;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37355))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37355){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37355),args);
});})(g__32247__auto___37355))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__32247__auto___37355){
return (function (seq37312){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37312));
});})(g__32247__auto___37355))
;


var g__32247__auto___37359 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__32247__auto___37359){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37360 = arguments.length;
var i__29602__auto___37361 = (0);
while(true){
if((i__29602__auto___37361 < len__29601__auto___37360)){
args__29608__auto__.push((arguments[i__29602__auto___37361]));

var G__37362 = (i__29602__auto___37361 + (1));
i__29602__auto___37361 = G__37362;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37359))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37359){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37359),args);
});})(g__32247__auto___37359))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__32247__auto___37359){
return (function (seq37313){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37313));
});})(g__32247__auto___37359))
;


var g__32247__auto___37363 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__32247__auto___37363){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37364 = arguments.length;
var i__29602__auto___37365 = (0);
while(true){
if((i__29602__auto___37365 < len__29601__auto___37364)){
args__29608__auto__.push((arguments[i__29602__auto___37365]));

var G__37366 = (i__29602__auto___37365 + (1));
i__29602__auto___37365 = G__37366;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37363))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37363){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37363),args);
});})(g__32247__auto___37363))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__32247__auto___37363){
return (function (seq37314){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37314));
});})(g__32247__auto___37363))
;


var g__32247__auto___37367 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__32247__auto___37367){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37368 = arguments.length;
var i__29602__auto___37369 = (0);
while(true){
if((i__29602__auto___37369 < len__29601__auto___37368)){
args__29608__auto__.push((arguments[i__29602__auto___37369]));

var G__37370 = (i__29602__auto___37369 + (1));
i__29602__auto___37369 = G__37370;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37367))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37367){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37367),args);
});})(g__32247__auto___37367))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__32247__auto___37367){
return (function (seq37315){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37315));
});})(g__32247__auto___37367))
;


var g__32247__auto___37371 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__32247__auto___37371){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37372 = arguments.length;
var i__29602__auto___37373 = (0);
while(true){
if((i__29602__auto___37373 < len__29601__auto___37372)){
args__29608__auto__.push((arguments[i__29602__auto___37373]));

var G__37374 = (i__29602__auto___37373 + (1));
i__29602__auto___37373 = G__37374;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37371))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37371){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37371),args);
});})(g__32247__auto___37371))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__32247__auto___37371){
return (function (seq37316){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37316));
});})(g__32247__auto___37371))
;


var g__32247__auto___37375 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__32247__auto___37375){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37376 = arguments.length;
var i__29602__auto___37377 = (0);
while(true){
if((i__29602__auto___37377 < len__29601__auto___37376)){
args__29608__auto__.push((arguments[i__29602__auto___37377]));

var G__37378 = (i__29602__auto___37377 + (1));
i__29602__auto___37377 = G__37378;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37375))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37375){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37375),args);
});})(g__32247__auto___37375))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__32247__auto___37375){
return (function (seq37317){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37317));
});})(g__32247__auto___37375))
;


var g__32247__auto___37379 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__32247__auto___37379){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37380 = arguments.length;
var i__29602__auto___37381 = (0);
while(true){
if((i__29602__auto___37381 < len__29601__auto___37380)){
args__29608__auto__.push((arguments[i__29602__auto___37381]));

var G__37382 = (i__29602__auto___37381 + (1));
i__29602__auto___37381 = G__37382;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37379))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37379){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37379),args);
});})(g__32247__auto___37379))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__32247__auto___37379){
return (function (seq37318){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37318));
});})(g__32247__auto___37379))
;


var g__32247__auto___37383 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__32247__auto___37383){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37384 = arguments.length;
var i__29602__auto___37385 = (0);
while(true){
if((i__29602__auto___37385 < len__29601__auto___37384)){
args__29608__auto__.push((arguments[i__29602__auto___37385]));

var G__37386 = (i__29602__auto___37385 + (1));
i__29602__auto___37385 = G__37386;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37383))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37383){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37383),args);
});})(g__32247__auto___37383))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__32247__auto___37383){
return (function (seq37319){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37319));
});})(g__32247__auto___37383))
;


var g__32247__auto___37387 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__32247__auto___37387){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37388 = arguments.length;
var i__29602__auto___37389 = (0);
while(true){
if((i__29602__auto___37389 < len__29601__auto___37388)){
args__29608__auto__.push((arguments[i__29602__auto___37389]));

var G__37390 = (i__29602__auto___37389 + (1));
i__29602__auto___37389 = G__37390;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37387))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37387){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37387),args);
});})(g__32247__auto___37387))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__32247__auto___37387){
return (function (seq37320){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37320));
});})(g__32247__auto___37387))
;


var g__32247__auto___37391 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__32247__auto___37391){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37392 = arguments.length;
var i__29602__auto___37393 = (0);
while(true){
if((i__29602__auto___37393 < len__29601__auto___37392)){
args__29608__auto__.push((arguments[i__29602__auto___37393]));

var G__37394 = (i__29602__auto___37393 + (1));
i__29602__auto___37393 = G__37394;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37391))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37391){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37391),args);
});})(g__32247__auto___37391))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__32247__auto___37391){
return (function (seq37321){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37321));
});})(g__32247__auto___37391))
;


var g__32247__auto___37395 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__32247__auto___37395){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37396 = arguments.length;
var i__29602__auto___37397 = (0);
while(true){
if((i__29602__auto___37397 < len__29601__auto___37396)){
args__29608__auto__.push((arguments[i__29602__auto___37397]));

var G__37398 = (i__29602__auto___37397 + (1));
i__29602__auto___37397 = G__37398;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32247__auto___37395))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32247__auto___37395){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__32247__auto___37395),args);
});})(g__32247__auto___37395))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__32247__auto___37395){
return (function (seq37322){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37322));
});})(g__32247__auto___37395))
;

var g__32260__auto___37420 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__32260__auto___37420){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37421 = arguments.length;
var i__29602__auto___37422 = (0);
while(true){
if((i__29602__auto___37422 < len__29601__auto___37421)){
args__29608__auto__.push((arguments[i__29602__auto___37422]));

var G__37423 = (i__29602__auto___37422 + (1));
i__29602__auto___37422 = G__37423;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37420))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37420){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37420);
});})(g__32260__auto___37420))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__32260__auto___37420){
return (function (seq37399){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37399));
});})(g__32260__auto___37420))
;


var g__32260__auto___37424 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__32260__auto___37424){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37425 = arguments.length;
var i__29602__auto___37426 = (0);
while(true){
if((i__29602__auto___37426 < len__29601__auto___37425)){
args__29608__auto__.push((arguments[i__29602__auto___37426]));

var G__37427 = (i__29602__auto___37426 + (1));
i__29602__auto___37426 = G__37427;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37424))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37424){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37424);
});})(g__32260__auto___37424))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__32260__auto___37424){
return (function (seq37400){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37400));
});})(g__32260__auto___37424))
;


var g__32260__auto___37428 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__32260__auto___37428){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37429 = arguments.length;
var i__29602__auto___37430 = (0);
while(true){
if((i__29602__auto___37430 < len__29601__auto___37429)){
args__29608__auto__.push((arguments[i__29602__auto___37430]));

var G__37431 = (i__29602__auto___37430 + (1));
i__29602__auto___37430 = G__37431;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37428))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37428){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37428);
});})(g__32260__auto___37428))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__32260__auto___37428){
return (function (seq37401){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37401));
});})(g__32260__auto___37428))
;


var g__32260__auto___37432 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__32260__auto___37432){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37433 = arguments.length;
var i__29602__auto___37434 = (0);
while(true){
if((i__29602__auto___37434 < len__29601__auto___37433)){
args__29608__auto__.push((arguments[i__29602__auto___37434]));

var G__37435 = (i__29602__auto___37434 + (1));
i__29602__auto___37434 = G__37435;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37432))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37432){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37432);
});})(g__32260__auto___37432))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__32260__auto___37432){
return (function (seq37402){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37402));
});})(g__32260__auto___37432))
;


var g__32260__auto___37436 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__32260__auto___37436){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37437 = arguments.length;
var i__29602__auto___37438 = (0);
while(true){
if((i__29602__auto___37438 < len__29601__auto___37437)){
args__29608__auto__.push((arguments[i__29602__auto___37438]));

var G__37439 = (i__29602__auto___37438 + (1));
i__29602__auto___37438 = G__37439;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37436))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37436){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37436);
});})(g__32260__auto___37436))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__32260__auto___37436){
return (function (seq37403){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37403));
});})(g__32260__auto___37436))
;


var g__32260__auto___37440 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__32260__auto___37440){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37441 = arguments.length;
var i__29602__auto___37442 = (0);
while(true){
if((i__29602__auto___37442 < len__29601__auto___37441)){
args__29608__auto__.push((arguments[i__29602__auto___37442]));

var G__37443 = (i__29602__auto___37442 + (1));
i__29602__auto___37442 = G__37443;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37440))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37440){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37440);
});})(g__32260__auto___37440))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__32260__auto___37440){
return (function (seq37404){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37404));
});})(g__32260__auto___37440))
;


var g__32260__auto___37444 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__32260__auto___37444){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37445 = arguments.length;
var i__29602__auto___37446 = (0);
while(true){
if((i__29602__auto___37446 < len__29601__auto___37445)){
args__29608__auto__.push((arguments[i__29602__auto___37446]));

var G__37447 = (i__29602__auto___37446 + (1));
i__29602__auto___37446 = G__37447;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37444))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37444){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37444);
});})(g__32260__auto___37444))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__32260__auto___37444){
return (function (seq37405){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37405));
});})(g__32260__auto___37444))
;


var g__32260__auto___37448 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__32260__auto___37448){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37449 = arguments.length;
var i__29602__auto___37450 = (0);
while(true){
if((i__29602__auto___37450 < len__29601__auto___37449)){
args__29608__auto__.push((arguments[i__29602__auto___37450]));

var G__37451 = (i__29602__auto___37450 + (1));
i__29602__auto___37450 = G__37451;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37448))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37448){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37448);
});})(g__32260__auto___37448))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__32260__auto___37448){
return (function (seq37406){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37406));
});})(g__32260__auto___37448))
;


var g__32260__auto___37452 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__32260__auto___37452){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37453 = arguments.length;
var i__29602__auto___37454 = (0);
while(true){
if((i__29602__auto___37454 < len__29601__auto___37453)){
args__29608__auto__.push((arguments[i__29602__auto___37454]));

var G__37455 = (i__29602__auto___37454 + (1));
i__29602__auto___37454 = G__37455;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37452))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37452){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37452);
});})(g__32260__auto___37452))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__32260__auto___37452){
return (function (seq37407){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37407));
});})(g__32260__auto___37452))
;


var g__32260__auto___37456 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__32260__auto___37456){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37457 = arguments.length;
var i__29602__auto___37458 = (0);
while(true){
if((i__29602__auto___37458 < len__29601__auto___37457)){
args__29608__auto__.push((arguments[i__29602__auto___37458]));

var G__37459 = (i__29602__auto___37458 + (1));
i__29602__auto___37458 = G__37459;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37456))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37456){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37456);
});})(g__32260__auto___37456))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__32260__auto___37456){
return (function (seq37408){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37408));
});})(g__32260__auto___37456))
;


var g__32260__auto___37460 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__32260__auto___37460){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37461 = arguments.length;
var i__29602__auto___37462 = (0);
while(true){
if((i__29602__auto___37462 < len__29601__auto___37461)){
args__29608__auto__.push((arguments[i__29602__auto___37462]));

var G__37463 = (i__29602__auto___37462 + (1));
i__29602__auto___37462 = G__37463;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37460))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37460){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37460);
});})(g__32260__auto___37460))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__32260__auto___37460){
return (function (seq37409){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37409));
});})(g__32260__auto___37460))
;


var g__32260__auto___37464 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__32260__auto___37464){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37465 = arguments.length;
var i__29602__auto___37466 = (0);
while(true){
if((i__29602__auto___37466 < len__29601__auto___37465)){
args__29608__auto__.push((arguments[i__29602__auto___37466]));

var G__37467 = (i__29602__auto___37466 + (1));
i__29602__auto___37466 = G__37467;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37464))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37464){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37464);
});})(g__32260__auto___37464))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__32260__auto___37464){
return (function (seq37410){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37410));
});})(g__32260__auto___37464))
;


var g__32260__auto___37468 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__32260__auto___37468){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37469 = arguments.length;
var i__29602__auto___37470 = (0);
while(true){
if((i__29602__auto___37470 < len__29601__auto___37469)){
args__29608__auto__.push((arguments[i__29602__auto___37470]));

var G__37471 = (i__29602__auto___37470 + (1));
i__29602__auto___37470 = G__37471;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37468))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37468){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37468);
});})(g__32260__auto___37468))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__32260__auto___37468){
return (function (seq37411){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37411));
});})(g__32260__auto___37468))
;


var g__32260__auto___37472 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__32260__auto___37472){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37473 = arguments.length;
var i__29602__auto___37474 = (0);
while(true){
if((i__29602__auto___37474 < len__29601__auto___37473)){
args__29608__auto__.push((arguments[i__29602__auto___37474]));

var G__37475 = (i__29602__auto___37474 + (1));
i__29602__auto___37474 = G__37475;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37472))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37472){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37472);
});})(g__32260__auto___37472))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__32260__auto___37472){
return (function (seq37412){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37412));
});})(g__32260__auto___37472))
;


var g__32260__auto___37476 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__32260__auto___37476){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37477 = arguments.length;
var i__29602__auto___37478 = (0);
while(true){
if((i__29602__auto___37478 < len__29601__auto___37477)){
args__29608__auto__.push((arguments[i__29602__auto___37478]));

var G__37479 = (i__29602__auto___37478 + (1));
i__29602__auto___37478 = G__37479;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37476))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37476){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37476);
});})(g__32260__auto___37476))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__32260__auto___37476){
return (function (seq37413){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37413));
});})(g__32260__auto___37476))
;


var g__32260__auto___37480 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__32260__auto___37480){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37481 = arguments.length;
var i__29602__auto___37482 = (0);
while(true){
if((i__29602__auto___37482 < len__29601__auto___37481)){
args__29608__auto__.push((arguments[i__29602__auto___37482]));

var G__37483 = (i__29602__auto___37482 + (1));
i__29602__auto___37482 = G__37483;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37480))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37480){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37480);
});})(g__32260__auto___37480))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__32260__auto___37480){
return (function (seq37414){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37414));
});})(g__32260__auto___37480))
;


var g__32260__auto___37484 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__32260__auto___37484){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37485 = arguments.length;
var i__29602__auto___37486 = (0);
while(true){
if((i__29602__auto___37486 < len__29601__auto___37485)){
args__29608__auto__.push((arguments[i__29602__auto___37486]));

var G__37487 = (i__29602__auto___37486 + (1));
i__29602__auto___37486 = G__37487;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37484))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37484){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37484);
});})(g__32260__auto___37484))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__32260__auto___37484){
return (function (seq37415){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37415));
});})(g__32260__auto___37484))
;


var g__32260__auto___37488 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__32260__auto___37488){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37489 = arguments.length;
var i__29602__auto___37490 = (0);
while(true){
if((i__29602__auto___37490 < len__29601__auto___37489)){
args__29608__auto__.push((arguments[i__29602__auto___37490]));

var G__37491 = (i__29602__auto___37490 + (1));
i__29602__auto___37490 = G__37491;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37488))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37488){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37488);
});})(g__32260__auto___37488))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__32260__auto___37488){
return (function (seq37416){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37416));
});})(g__32260__auto___37488))
;


var g__32260__auto___37492 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__32260__auto___37492){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37493 = arguments.length;
var i__29602__auto___37494 = (0);
while(true){
if((i__29602__auto___37494 < len__29601__auto___37493)){
args__29608__auto__.push((arguments[i__29602__auto___37494]));

var G__37495 = (i__29602__auto___37494 + (1));
i__29602__auto___37494 = G__37495;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37492))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37492){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37492);
});})(g__32260__auto___37492))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__32260__auto___37492){
return (function (seq37417){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37417));
});})(g__32260__auto___37492))
;


var g__32260__auto___37496 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__32260__auto___37496){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37497 = arguments.length;
var i__29602__auto___37498 = (0);
while(true){
if((i__29602__auto___37498 < len__29601__auto___37497)){
args__29608__auto__.push((arguments[i__29602__auto___37498]));

var G__37499 = (i__29602__auto___37498 + (1));
i__29602__auto___37498 = G__37499;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37496))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37496){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37496);
});})(g__32260__auto___37496))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__32260__auto___37496){
return (function (seq37418){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37418));
});})(g__32260__auto___37496))
;


var g__32260__auto___37500 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__32260__auto___37500){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37501 = arguments.length;
var i__29602__auto___37502 = (0);
while(true){
if((i__29602__auto___37502 < len__29601__auto___37501)){
args__29608__auto__.push((arguments[i__29602__auto___37502]));

var G__37503 = (i__29602__auto___37502 + (1));
i__29602__auto___37502 = G__37503;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__32260__auto___37500))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__32260__auto___37500){
return (function (args){
return cljs.core.deref.call(null,g__32260__auto___37500);
});})(g__32260__auto___37500))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__32260__auto___37500){
return (function (seq37419){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37419));
});})(g__32260__auto___37500))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29608__auto__ = [];
var len__29601__auto___37506 = arguments.length;
var i__29602__auto___37507 = (0);
while(true){
if((i__29602__auto___37507 < len__29601__auto___37506)){
args__29608__auto__.push((arguments[i__29602__auto___37507]));

var G__37508 = (i__29602__auto___37507 + (1));
i__29602__auto___37507 = G__37508;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__37504_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__37504_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq37505){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37505));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__37509_SHARP_){
return (new Date(p1__37509_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1572992071146
