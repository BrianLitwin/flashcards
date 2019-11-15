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
var len__29601__auto___38089 = arguments.length;
var i__29602__auto___38090 = (0);
while(true){
if((i__29602__auto___38090 < len__29601__auto___38089)){
args__29608__auto__.push((arguments[i__29602__auto___38090]));

var G__38091 = (i__29602__auto___38090 + (1));
i__29602__auto___38090 = G__38091;
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

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq38088){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38088));
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
var len__29601__auto___38093 = arguments.length;
var i__29602__auto___38094 = (0);
while(true){
if((i__29602__auto___38094 < len__29601__auto___38093)){
args__29608__auto__.push((arguments[i__29602__auto___38094]));

var G__38095 = (i__29602__auto___38094 + (1));
i__29602__auto___38094 = G__38095;
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

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq38092){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38092));
});

var g_QMARK__38096 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_38097 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38096){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__38096))
,null));
var mkg_38098 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38096,g_38097){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__38096,g_38097))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__38096,g_38097,mkg_38098){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__38096).call(null,x);
});})(g_QMARK__38096,g_38097,mkg_38098))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__38096,g_38097,mkg_38098){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_38098).call(null,gfn);
});})(g_QMARK__38096,g_38097,mkg_38098))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__38096,g_38097,mkg_38098){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_38097).call(null,generator);
});})(g_QMARK__38096,g_38097,mkg_38098))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31891__auto___38118 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__31891__auto___38118){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38119 = arguments.length;
var i__29602__auto___38120 = (0);
while(true){
if((i__29602__auto___38120 < len__29601__auto___38119)){
args__29608__auto__.push((arguments[i__29602__auto___38120]));

var G__38121 = (i__29602__auto___38120 + (1));
i__29602__auto___38120 = G__38121;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38118))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38118){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38118),args);
});})(g__31891__auto___38118))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__31891__auto___38118){
return (function (seq38099){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38099));
});})(g__31891__auto___38118))
;


var g__31891__auto___38122 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__31891__auto___38122){
return (function cljs$spec$gen$alpha$list(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38123 = arguments.length;
var i__29602__auto___38124 = (0);
while(true){
if((i__29602__auto___38124 < len__29601__auto___38123)){
args__29608__auto__.push((arguments[i__29602__auto___38124]));

var G__38125 = (i__29602__auto___38124 + (1));
i__29602__auto___38124 = G__38125;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38122))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38122){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38122),args);
});})(g__31891__auto___38122))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__31891__auto___38122){
return (function (seq38100){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38100));
});})(g__31891__auto___38122))
;


var g__31891__auto___38126 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__31891__auto___38126){
return (function cljs$spec$gen$alpha$map(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38127 = arguments.length;
var i__29602__auto___38128 = (0);
while(true){
if((i__29602__auto___38128 < len__29601__auto___38127)){
args__29608__auto__.push((arguments[i__29602__auto___38128]));

var G__38129 = (i__29602__auto___38128 + (1));
i__29602__auto___38128 = G__38129;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38126))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38126){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38126),args);
});})(g__31891__auto___38126))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__31891__auto___38126){
return (function (seq38101){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38101));
});})(g__31891__auto___38126))
;


var g__31891__auto___38130 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__31891__auto___38130){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38131 = arguments.length;
var i__29602__auto___38132 = (0);
while(true){
if((i__29602__auto___38132 < len__29601__auto___38131)){
args__29608__auto__.push((arguments[i__29602__auto___38132]));

var G__38133 = (i__29602__auto___38132 + (1));
i__29602__auto___38132 = G__38133;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38130))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38130){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38130),args);
});})(g__31891__auto___38130))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__31891__auto___38130){
return (function (seq38102){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38102));
});})(g__31891__auto___38130))
;


var g__31891__auto___38134 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__31891__auto___38134){
return (function cljs$spec$gen$alpha$set(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38135 = arguments.length;
var i__29602__auto___38136 = (0);
while(true){
if((i__29602__auto___38136 < len__29601__auto___38135)){
args__29608__auto__.push((arguments[i__29602__auto___38136]));

var G__38137 = (i__29602__auto___38136 + (1));
i__29602__auto___38136 = G__38137;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38134))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38134){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38134),args);
});})(g__31891__auto___38134))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__31891__auto___38134){
return (function (seq38103){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38103));
});})(g__31891__auto___38134))
;


var g__31891__auto___38138 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__31891__auto___38138){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38139 = arguments.length;
var i__29602__auto___38140 = (0);
while(true){
if((i__29602__auto___38140 < len__29601__auto___38139)){
args__29608__auto__.push((arguments[i__29602__auto___38140]));

var G__38141 = (i__29602__auto___38140 + (1));
i__29602__auto___38140 = G__38141;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38138))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38138){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38138),args);
});})(g__31891__auto___38138))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__31891__auto___38138){
return (function (seq38104){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38104));
});})(g__31891__auto___38138))
;


var g__31891__auto___38142 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__31891__auto___38142){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38143 = arguments.length;
var i__29602__auto___38144 = (0);
while(true){
if((i__29602__auto___38144 < len__29601__auto___38143)){
args__29608__auto__.push((arguments[i__29602__auto___38144]));

var G__38145 = (i__29602__auto___38144 + (1));
i__29602__auto___38144 = G__38145;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38142))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38142){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38142),args);
});})(g__31891__auto___38142))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__31891__auto___38142){
return (function (seq38105){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38105));
});})(g__31891__auto___38142))
;


var g__31891__auto___38146 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__31891__auto___38146){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38147 = arguments.length;
var i__29602__auto___38148 = (0);
while(true){
if((i__29602__auto___38148 < len__29601__auto___38147)){
args__29608__auto__.push((arguments[i__29602__auto___38148]));

var G__38149 = (i__29602__auto___38148 + (1));
i__29602__auto___38148 = G__38149;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38146))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38146){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38146),args);
});})(g__31891__auto___38146))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__31891__auto___38146){
return (function (seq38106){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38106));
});})(g__31891__auto___38146))
;


var g__31891__auto___38150 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__31891__auto___38150){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38151 = arguments.length;
var i__29602__auto___38152 = (0);
while(true){
if((i__29602__auto___38152 < len__29601__auto___38151)){
args__29608__auto__.push((arguments[i__29602__auto___38152]));

var G__38153 = (i__29602__auto___38152 + (1));
i__29602__auto___38152 = G__38153;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38150))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38150){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38150),args);
});})(g__31891__auto___38150))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__31891__auto___38150){
return (function (seq38107){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38107));
});})(g__31891__auto___38150))
;


var g__31891__auto___38154 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__31891__auto___38154){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38155 = arguments.length;
var i__29602__auto___38156 = (0);
while(true){
if((i__29602__auto___38156 < len__29601__auto___38155)){
args__29608__auto__.push((arguments[i__29602__auto___38156]));

var G__38157 = (i__29602__auto___38156 + (1));
i__29602__auto___38156 = G__38157;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38154))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38154){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38154),args);
});})(g__31891__auto___38154))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__31891__auto___38154){
return (function (seq38108){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38108));
});})(g__31891__auto___38154))
;


var g__31891__auto___38158 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__31891__auto___38158){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38159 = arguments.length;
var i__29602__auto___38160 = (0);
while(true){
if((i__29602__auto___38160 < len__29601__auto___38159)){
args__29608__auto__.push((arguments[i__29602__auto___38160]));

var G__38161 = (i__29602__auto___38160 + (1));
i__29602__auto___38160 = G__38161;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38158))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38158){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38158),args);
});})(g__31891__auto___38158))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__31891__auto___38158){
return (function (seq38109){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38109));
});})(g__31891__auto___38158))
;


var g__31891__auto___38162 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__31891__auto___38162){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38163 = arguments.length;
var i__29602__auto___38164 = (0);
while(true){
if((i__29602__auto___38164 < len__29601__auto___38163)){
args__29608__auto__.push((arguments[i__29602__auto___38164]));

var G__38165 = (i__29602__auto___38164 + (1));
i__29602__auto___38164 = G__38165;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38162))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38162){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38162),args);
});})(g__31891__auto___38162))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__31891__auto___38162){
return (function (seq38110){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38110));
});})(g__31891__auto___38162))
;


var g__31891__auto___38166 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__31891__auto___38166){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38167 = arguments.length;
var i__29602__auto___38168 = (0);
while(true){
if((i__29602__auto___38168 < len__29601__auto___38167)){
args__29608__auto__.push((arguments[i__29602__auto___38168]));

var G__38169 = (i__29602__auto___38168 + (1));
i__29602__auto___38168 = G__38169;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38166))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38166){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38166),args);
});})(g__31891__auto___38166))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__31891__auto___38166){
return (function (seq38111){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38111));
});})(g__31891__auto___38166))
;


var g__31891__auto___38170 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__31891__auto___38170){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38171 = arguments.length;
var i__29602__auto___38172 = (0);
while(true){
if((i__29602__auto___38172 < len__29601__auto___38171)){
args__29608__auto__.push((arguments[i__29602__auto___38172]));

var G__38173 = (i__29602__auto___38172 + (1));
i__29602__auto___38172 = G__38173;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38170))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38170){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38170),args);
});})(g__31891__auto___38170))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__31891__auto___38170){
return (function (seq38112){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38112));
});})(g__31891__auto___38170))
;


var g__31891__auto___38174 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__31891__auto___38174){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38175 = arguments.length;
var i__29602__auto___38176 = (0);
while(true){
if((i__29602__auto___38176 < len__29601__auto___38175)){
args__29608__auto__.push((arguments[i__29602__auto___38176]));

var G__38177 = (i__29602__auto___38176 + (1));
i__29602__auto___38176 = G__38177;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38174))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38174){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38174),args);
});})(g__31891__auto___38174))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__31891__auto___38174){
return (function (seq38113){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38113));
});})(g__31891__auto___38174))
;


var g__31891__auto___38178 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__31891__auto___38178){
return (function cljs$spec$gen$alpha$return(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38179 = arguments.length;
var i__29602__auto___38180 = (0);
while(true){
if((i__29602__auto___38180 < len__29601__auto___38179)){
args__29608__auto__.push((arguments[i__29602__auto___38180]));

var G__38181 = (i__29602__auto___38180 + (1));
i__29602__auto___38180 = G__38181;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38178))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38178){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38178),args);
});})(g__31891__auto___38178))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__31891__auto___38178){
return (function (seq38114){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38114));
});})(g__31891__auto___38178))
;


var g__31891__auto___38182 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__31891__auto___38182){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38183 = arguments.length;
var i__29602__auto___38184 = (0);
while(true){
if((i__29602__auto___38184 < len__29601__auto___38183)){
args__29608__auto__.push((arguments[i__29602__auto___38184]));

var G__38185 = (i__29602__auto___38184 + (1));
i__29602__auto___38184 = G__38185;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38182))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38182){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38182),args);
});})(g__31891__auto___38182))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31891__auto___38182){
return (function (seq38115){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38115));
});})(g__31891__auto___38182))
;


var g__31891__auto___38186 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__31891__auto___38186){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38187 = arguments.length;
var i__29602__auto___38188 = (0);
while(true){
if((i__29602__auto___38188 < len__29601__auto___38187)){
args__29608__auto__.push((arguments[i__29602__auto___38188]));

var G__38189 = (i__29602__auto___38188 + (1));
i__29602__auto___38188 = G__38189;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38186))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38186){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38186),args);
});})(g__31891__auto___38186))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__31891__auto___38186){
return (function (seq38116){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38116));
});})(g__31891__auto___38186))
;


var g__31891__auto___38190 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__31891__auto___38190){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38191 = arguments.length;
var i__29602__auto___38192 = (0);
while(true){
if((i__29602__auto___38192 < len__29601__auto___38191)){
args__29608__auto__.push((arguments[i__29602__auto___38192]));

var G__38193 = (i__29602__auto___38192 + (1));
i__29602__auto___38192 = G__38193;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31891__auto___38190))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31891__auto___38190){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31891__auto___38190),args);
});})(g__31891__auto___38190))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__31891__auto___38190){
return (function (seq38117){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38117));
});})(g__31891__auto___38190))
;

var g__31904__auto___38215 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__31904__auto___38215){
return (function cljs$spec$gen$alpha$any(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38216 = arguments.length;
var i__29602__auto___38217 = (0);
while(true){
if((i__29602__auto___38217 < len__29601__auto___38216)){
args__29608__auto__.push((arguments[i__29602__auto___38217]));

var G__38218 = (i__29602__auto___38217 + (1));
i__29602__auto___38217 = G__38218;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38215))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38215){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38215);
});})(g__31904__auto___38215))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__31904__auto___38215){
return (function (seq38194){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38194));
});})(g__31904__auto___38215))
;


var g__31904__auto___38219 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__31904__auto___38219){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38220 = arguments.length;
var i__29602__auto___38221 = (0);
while(true){
if((i__29602__auto___38221 < len__29601__auto___38220)){
args__29608__auto__.push((arguments[i__29602__auto___38221]));

var G__38222 = (i__29602__auto___38221 + (1));
i__29602__auto___38221 = G__38222;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38219))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38219){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38219);
});})(g__31904__auto___38219))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__31904__auto___38219){
return (function (seq38195){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38195));
});})(g__31904__auto___38219))
;


var g__31904__auto___38223 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__31904__auto___38223){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38224 = arguments.length;
var i__29602__auto___38225 = (0);
while(true){
if((i__29602__auto___38225 < len__29601__auto___38224)){
args__29608__auto__.push((arguments[i__29602__auto___38225]));

var G__38226 = (i__29602__auto___38225 + (1));
i__29602__auto___38225 = G__38226;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38223))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38223){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38223);
});})(g__31904__auto___38223))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__31904__auto___38223){
return (function (seq38196){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38196));
});})(g__31904__auto___38223))
;


var g__31904__auto___38227 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__31904__auto___38227){
return (function cljs$spec$gen$alpha$char(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38228 = arguments.length;
var i__29602__auto___38229 = (0);
while(true){
if((i__29602__auto___38229 < len__29601__auto___38228)){
args__29608__auto__.push((arguments[i__29602__auto___38229]));

var G__38230 = (i__29602__auto___38229 + (1));
i__29602__auto___38229 = G__38230;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38227))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38227){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38227);
});})(g__31904__auto___38227))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__31904__auto___38227){
return (function (seq38197){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38197));
});})(g__31904__auto___38227))
;


var g__31904__auto___38231 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__31904__auto___38231){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38232 = arguments.length;
var i__29602__auto___38233 = (0);
while(true){
if((i__29602__auto___38233 < len__29601__auto___38232)){
args__29608__auto__.push((arguments[i__29602__auto___38233]));

var G__38234 = (i__29602__auto___38233 + (1));
i__29602__auto___38233 = G__38234;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38231))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38231){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38231);
});})(g__31904__auto___38231))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__31904__auto___38231){
return (function (seq38198){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38198));
});})(g__31904__auto___38231))
;


var g__31904__auto___38235 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__31904__auto___38235){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38236 = arguments.length;
var i__29602__auto___38237 = (0);
while(true){
if((i__29602__auto___38237 < len__29601__auto___38236)){
args__29608__auto__.push((arguments[i__29602__auto___38237]));

var G__38238 = (i__29602__auto___38237 + (1));
i__29602__auto___38237 = G__38238;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38235))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38235){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38235);
});})(g__31904__auto___38235))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__31904__auto___38235){
return (function (seq38199){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38199));
});})(g__31904__auto___38235))
;


var g__31904__auto___38239 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__31904__auto___38239){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38240 = arguments.length;
var i__29602__auto___38241 = (0);
while(true){
if((i__29602__auto___38241 < len__29601__auto___38240)){
args__29608__auto__.push((arguments[i__29602__auto___38241]));

var G__38242 = (i__29602__auto___38241 + (1));
i__29602__auto___38241 = G__38242;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38239))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38239){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38239);
});})(g__31904__auto___38239))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__31904__auto___38239){
return (function (seq38200){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38200));
});})(g__31904__auto___38239))
;


var g__31904__auto___38243 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__31904__auto___38243){
return (function cljs$spec$gen$alpha$double(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38244 = arguments.length;
var i__29602__auto___38245 = (0);
while(true){
if((i__29602__auto___38245 < len__29601__auto___38244)){
args__29608__auto__.push((arguments[i__29602__auto___38245]));

var G__38246 = (i__29602__auto___38245 + (1));
i__29602__auto___38245 = G__38246;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38243))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38243){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38243);
});})(g__31904__auto___38243))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__31904__auto___38243){
return (function (seq38201){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38201));
});})(g__31904__auto___38243))
;


var g__31904__auto___38247 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__31904__auto___38247){
return (function cljs$spec$gen$alpha$int(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38248 = arguments.length;
var i__29602__auto___38249 = (0);
while(true){
if((i__29602__auto___38249 < len__29601__auto___38248)){
args__29608__auto__.push((arguments[i__29602__auto___38249]));

var G__38250 = (i__29602__auto___38249 + (1));
i__29602__auto___38249 = G__38250;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38247))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38247){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38247);
});})(g__31904__auto___38247))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__31904__auto___38247){
return (function (seq38202){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38202));
});})(g__31904__auto___38247))
;


var g__31904__auto___38251 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__31904__auto___38251){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38252 = arguments.length;
var i__29602__auto___38253 = (0);
while(true){
if((i__29602__auto___38253 < len__29601__auto___38252)){
args__29608__auto__.push((arguments[i__29602__auto___38253]));

var G__38254 = (i__29602__auto___38253 + (1));
i__29602__auto___38253 = G__38254;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38251))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38251){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38251);
});})(g__31904__auto___38251))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__31904__auto___38251){
return (function (seq38203){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38203));
});})(g__31904__auto___38251))
;


var g__31904__auto___38255 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__31904__auto___38255){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38256 = arguments.length;
var i__29602__auto___38257 = (0);
while(true){
if((i__29602__auto___38257 < len__29601__auto___38256)){
args__29608__auto__.push((arguments[i__29602__auto___38257]));

var G__38258 = (i__29602__auto___38257 + (1));
i__29602__auto___38257 = G__38258;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38255))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38255){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38255);
});})(g__31904__auto___38255))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__31904__auto___38255){
return (function (seq38204){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38204));
});})(g__31904__auto___38255))
;


var g__31904__auto___38259 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__31904__auto___38259){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38260 = arguments.length;
var i__29602__auto___38261 = (0);
while(true){
if((i__29602__auto___38261 < len__29601__auto___38260)){
args__29608__auto__.push((arguments[i__29602__auto___38261]));

var G__38262 = (i__29602__auto___38261 + (1));
i__29602__auto___38261 = G__38262;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38259))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38259){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38259);
});})(g__31904__auto___38259))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__31904__auto___38259){
return (function (seq38205){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38205));
});})(g__31904__auto___38259))
;


var g__31904__auto___38263 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__31904__auto___38263){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38264 = arguments.length;
var i__29602__auto___38265 = (0);
while(true){
if((i__29602__auto___38265 < len__29601__auto___38264)){
args__29608__auto__.push((arguments[i__29602__auto___38265]));

var G__38266 = (i__29602__auto___38265 + (1));
i__29602__auto___38265 = G__38266;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38263))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38263){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38263);
});})(g__31904__auto___38263))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__31904__auto___38263){
return (function (seq38206){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38206));
});})(g__31904__auto___38263))
;


var g__31904__auto___38267 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__31904__auto___38267){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38268 = arguments.length;
var i__29602__auto___38269 = (0);
while(true){
if((i__29602__auto___38269 < len__29601__auto___38268)){
args__29608__auto__.push((arguments[i__29602__auto___38269]));

var G__38270 = (i__29602__auto___38269 + (1));
i__29602__auto___38269 = G__38270;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38267))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38267){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38267);
});})(g__31904__auto___38267))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__31904__auto___38267){
return (function (seq38207){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38207));
});})(g__31904__auto___38267))
;


var g__31904__auto___38271 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__31904__auto___38271){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38272 = arguments.length;
var i__29602__auto___38273 = (0);
while(true){
if((i__29602__auto___38273 < len__29601__auto___38272)){
args__29608__auto__.push((arguments[i__29602__auto___38273]));

var G__38274 = (i__29602__auto___38273 + (1));
i__29602__auto___38273 = G__38274;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38271))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38271){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38271);
});})(g__31904__auto___38271))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__31904__auto___38271){
return (function (seq38208){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38208));
});})(g__31904__auto___38271))
;


var g__31904__auto___38275 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__31904__auto___38275){
return (function cljs$spec$gen$alpha$string(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38276 = arguments.length;
var i__29602__auto___38277 = (0);
while(true){
if((i__29602__auto___38277 < len__29601__auto___38276)){
args__29608__auto__.push((arguments[i__29602__auto___38277]));

var G__38278 = (i__29602__auto___38277 + (1));
i__29602__auto___38277 = G__38278;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38275))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38275){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38275);
});})(g__31904__auto___38275))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__31904__auto___38275){
return (function (seq38209){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38209));
});})(g__31904__auto___38275))
;


var g__31904__auto___38279 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__31904__auto___38279){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38280 = arguments.length;
var i__29602__auto___38281 = (0);
while(true){
if((i__29602__auto___38281 < len__29601__auto___38280)){
args__29608__auto__.push((arguments[i__29602__auto___38281]));

var G__38282 = (i__29602__auto___38281 + (1));
i__29602__auto___38281 = G__38282;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38279))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38279){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38279);
});})(g__31904__auto___38279))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__31904__auto___38279){
return (function (seq38210){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38210));
});})(g__31904__auto___38279))
;


var g__31904__auto___38283 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__31904__auto___38283){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38284 = arguments.length;
var i__29602__auto___38285 = (0);
while(true){
if((i__29602__auto___38285 < len__29601__auto___38284)){
args__29608__auto__.push((arguments[i__29602__auto___38285]));

var G__38286 = (i__29602__auto___38285 + (1));
i__29602__auto___38285 = G__38286;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38283))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38283){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38283);
});})(g__31904__auto___38283))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__31904__auto___38283){
return (function (seq38211){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38211));
});})(g__31904__auto___38283))
;


var g__31904__auto___38287 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__31904__auto___38287){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38288 = arguments.length;
var i__29602__auto___38289 = (0);
while(true){
if((i__29602__auto___38289 < len__29601__auto___38288)){
args__29608__auto__.push((arguments[i__29602__auto___38289]));

var G__38290 = (i__29602__auto___38289 + (1));
i__29602__auto___38289 = G__38290;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38287))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38287){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38287);
});})(g__31904__auto___38287))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__31904__auto___38287){
return (function (seq38212){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38212));
});})(g__31904__auto___38287))
;


var g__31904__auto___38291 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__31904__auto___38291){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38292 = arguments.length;
var i__29602__auto___38293 = (0);
while(true){
if((i__29602__auto___38293 < len__29601__auto___38292)){
args__29608__auto__.push((arguments[i__29602__auto___38293]));

var G__38294 = (i__29602__auto___38293 + (1));
i__29602__auto___38293 = G__38294;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38291))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38291){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38291);
});})(g__31904__auto___38291))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__31904__auto___38291){
return (function (seq38213){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38213));
});})(g__31904__auto___38291))
;


var g__31904__auto___38295 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__31904__auto___38295){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38296 = arguments.length;
var i__29602__auto___38297 = (0);
while(true){
if((i__29602__auto___38297 < len__29601__auto___38296)){
args__29608__auto__.push((arguments[i__29602__auto___38297]));

var G__38298 = (i__29602__auto___38297 + (1));
i__29602__auto___38297 = G__38298;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});})(g__31904__auto___38295))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31904__auto___38295){
return (function (args){
return cljs.core.deref.call(null,g__31904__auto___38295);
});})(g__31904__auto___38295))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__31904__auto___38295){
return (function (seq38214){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38214));
});})(g__31904__auto___38295))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38301 = arguments.length;
var i__29602__auto___38302 = (0);
while(true){
if((i__29602__auto___38302 < len__29601__auto___38301)){
args__29608__auto__.push((arguments[i__29602__auto___38302]));

var G__38303 = (i__29602__auto___38302 + (1));
i__29602__auto___38302 = G__38303;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__38299_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__38299_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq38300){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38300));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__38304_SHARP_){
return (new Date(p1__38304_SHARP_));
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

//# sourceMappingURL=alpha.js.map?rel=1573832704050
