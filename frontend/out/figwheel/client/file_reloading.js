// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28432__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28432__auto__){
return or__28432__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__28432__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
var or__28432__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__28432__auto____$1)){
return or__28432__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37462_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37462_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37463 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37464 = null;
var count__37465 = (0);
var i__37466 = (0);
while(true){
if((i__37466 < count__37465)){
var n = cljs.core._nth.call(null,chunk__37464,i__37466);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37467 = seq__37463;
var G__37468 = chunk__37464;
var G__37469 = count__37465;
var G__37470 = (i__37466 + (1));
seq__37463 = G__37467;
chunk__37464 = G__37468;
count__37465 = G__37469;
i__37466 = G__37470;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37463);
if(temp__4657__auto__){
var seq__37463__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37463__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__37463__$1);
var G__37471 = cljs.core.chunk_rest.call(null,seq__37463__$1);
var G__37472 = c__29271__auto__;
var G__37473 = cljs.core.count.call(null,c__29271__auto__);
var G__37474 = (0);
seq__37463 = G__37471;
chunk__37464 = G__37472;
count__37465 = G__37473;
i__37466 = G__37474;
continue;
} else {
var n = cljs.core.first.call(null,seq__37463__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37475 = cljs.core.next.call(null,seq__37463__$1);
var G__37476 = null;
var G__37477 = (0);
var G__37478 = (0);
seq__37463 = G__37475;
chunk__37464 = G__37476;
count__37465 = G__37477;
i__37466 = G__37478;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37488_37496 = cljs.core.seq.call(null,deps);
var chunk__37489_37497 = null;
var count__37490_37498 = (0);
var i__37491_37499 = (0);
while(true){
if((i__37491_37499 < count__37490_37498)){
var dep_37500 = cljs.core._nth.call(null,chunk__37489_37497,i__37491_37499);
topo_sort_helper_STAR_.call(null,dep_37500,(depth + (1)),state);

var G__37501 = seq__37488_37496;
var G__37502 = chunk__37489_37497;
var G__37503 = count__37490_37498;
var G__37504 = (i__37491_37499 + (1));
seq__37488_37496 = G__37501;
chunk__37489_37497 = G__37502;
count__37490_37498 = G__37503;
i__37491_37499 = G__37504;
continue;
} else {
var temp__4657__auto___37505 = cljs.core.seq.call(null,seq__37488_37496);
if(temp__4657__auto___37505){
var seq__37488_37506__$1 = temp__4657__auto___37505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37488_37506__$1)){
var c__29271__auto___37507 = cljs.core.chunk_first.call(null,seq__37488_37506__$1);
var G__37508 = cljs.core.chunk_rest.call(null,seq__37488_37506__$1);
var G__37509 = c__29271__auto___37507;
var G__37510 = cljs.core.count.call(null,c__29271__auto___37507);
var G__37511 = (0);
seq__37488_37496 = G__37508;
chunk__37489_37497 = G__37509;
count__37490_37498 = G__37510;
i__37491_37499 = G__37511;
continue;
} else {
var dep_37512 = cljs.core.first.call(null,seq__37488_37506__$1);
topo_sort_helper_STAR_.call(null,dep_37512,(depth + (1)),state);

var G__37513 = cljs.core.next.call(null,seq__37488_37506__$1);
var G__37514 = null;
var G__37515 = (0);
var G__37516 = (0);
seq__37488_37496 = G__37513;
chunk__37489_37497 = G__37514;
count__37490_37498 = G__37515;
i__37491_37499 = G__37516;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37492){
var vec__37493 = p__37492;
var seq__37494 = cljs.core.seq.call(null,vec__37493);
var first__37495 = cljs.core.first.call(null,seq__37494);
var seq__37494__$1 = cljs.core.next.call(null,seq__37494);
var x = first__37495;
var xs = seq__37494__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37493,seq__37494,first__37495,seq__37494__$1,x,xs,get_deps__$1){
return (function (p1__37479_SHARP_){
return clojure.set.difference.call(null,p1__37479_SHARP_,x);
});})(vec__37493,seq__37494,first__37495,seq__37494__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37517 = cljs.core.seq.call(null,provides);
var chunk__37518 = null;
var count__37519 = (0);
var i__37520 = (0);
while(true){
if((i__37520 < count__37519)){
var prov = cljs.core._nth.call(null,chunk__37518,i__37520);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37521_37529 = cljs.core.seq.call(null,requires);
var chunk__37522_37530 = null;
var count__37523_37531 = (0);
var i__37524_37532 = (0);
while(true){
if((i__37524_37532 < count__37523_37531)){
var req_37533 = cljs.core._nth.call(null,chunk__37522_37530,i__37524_37532);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37533,prov);

var G__37534 = seq__37521_37529;
var G__37535 = chunk__37522_37530;
var G__37536 = count__37523_37531;
var G__37537 = (i__37524_37532 + (1));
seq__37521_37529 = G__37534;
chunk__37522_37530 = G__37535;
count__37523_37531 = G__37536;
i__37524_37532 = G__37537;
continue;
} else {
var temp__4657__auto___37538 = cljs.core.seq.call(null,seq__37521_37529);
if(temp__4657__auto___37538){
var seq__37521_37539__$1 = temp__4657__auto___37538;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37521_37539__$1)){
var c__29271__auto___37540 = cljs.core.chunk_first.call(null,seq__37521_37539__$1);
var G__37541 = cljs.core.chunk_rest.call(null,seq__37521_37539__$1);
var G__37542 = c__29271__auto___37540;
var G__37543 = cljs.core.count.call(null,c__29271__auto___37540);
var G__37544 = (0);
seq__37521_37529 = G__37541;
chunk__37522_37530 = G__37542;
count__37523_37531 = G__37543;
i__37524_37532 = G__37544;
continue;
} else {
var req_37545 = cljs.core.first.call(null,seq__37521_37539__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37545,prov);

var G__37546 = cljs.core.next.call(null,seq__37521_37539__$1);
var G__37547 = null;
var G__37548 = (0);
var G__37549 = (0);
seq__37521_37529 = G__37546;
chunk__37522_37530 = G__37547;
count__37523_37531 = G__37548;
i__37524_37532 = G__37549;
continue;
}
} else {
}
}
break;
}

var G__37550 = seq__37517;
var G__37551 = chunk__37518;
var G__37552 = count__37519;
var G__37553 = (i__37520 + (1));
seq__37517 = G__37550;
chunk__37518 = G__37551;
count__37519 = G__37552;
i__37520 = G__37553;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37517);
if(temp__4657__auto__){
var seq__37517__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37517__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__37517__$1);
var G__37554 = cljs.core.chunk_rest.call(null,seq__37517__$1);
var G__37555 = c__29271__auto__;
var G__37556 = cljs.core.count.call(null,c__29271__auto__);
var G__37557 = (0);
seq__37517 = G__37554;
chunk__37518 = G__37555;
count__37519 = G__37556;
i__37520 = G__37557;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37517__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37525_37558 = cljs.core.seq.call(null,requires);
var chunk__37526_37559 = null;
var count__37527_37560 = (0);
var i__37528_37561 = (0);
while(true){
if((i__37528_37561 < count__37527_37560)){
var req_37562 = cljs.core._nth.call(null,chunk__37526_37559,i__37528_37561);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37562,prov);

var G__37563 = seq__37525_37558;
var G__37564 = chunk__37526_37559;
var G__37565 = count__37527_37560;
var G__37566 = (i__37528_37561 + (1));
seq__37525_37558 = G__37563;
chunk__37526_37559 = G__37564;
count__37527_37560 = G__37565;
i__37528_37561 = G__37566;
continue;
} else {
var temp__4657__auto___37567__$1 = cljs.core.seq.call(null,seq__37525_37558);
if(temp__4657__auto___37567__$1){
var seq__37525_37568__$1 = temp__4657__auto___37567__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37525_37568__$1)){
var c__29271__auto___37569 = cljs.core.chunk_first.call(null,seq__37525_37568__$1);
var G__37570 = cljs.core.chunk_rest.call(null,seq__37525_37568__$1);
var G__37571 = c__29271__auto___37569;
var G__37572 = cljs.core.count.call(null,c__29271__auto___37569);
var G__37573 = (0);
seq__37525_37558 = G__37570;
chunk__37526_37559 = G__37571;
count__37527_37560 = G__37572;
i__37528_37561 = G__37573;
continue;
} else {
var req_37574 = cljs.core.first.call(null,seq__37525_37568__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37574,prov);

var G__37575 = cljs.core.next.call(null,seq__37525_37568__$1);
var G__37576 = null;
var G__37577 = (0);
var G__37578 = (0);
seq__37525_37558 = G__37575;
chunk__37526_37559 = G__37576;
count__37527_37560 = G__37577;
i__37528_37561 = G__37578;
continue;
}
} else {
}
}
break;
}

var G__37579 = cljs.core.next.call(null,seq__37517__$1);
var G__37580 = null;
var G__37581 = (0);
var G__37582 = (0);
seq__37517 = G__37579;
chunk__37518 = G__37580;
count__37519 = G__37581;
i__37520 = G__37582;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37583_37587 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37584_37588 = null;
var count__37585_37589 = (0);
var i__37586_37590 = (0);
while(true){
if((i__37586_37590 < count__37585_37589)){
var ns_37591 = cljs.core._nth.call(null,chunk__37584_37588,i__37586_37590);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37591);

var G__37592 = seq__37583_37587;
var G__37593 = chunk__37584_37588;
var G__37594 = count__37585_37589;
var G__37595 = (i__37586_37590 + (1));
seq__37583_37587 = G__37592;
chunk__37584_37588 = G__37593;
count__37585_37589 = G__37594;
i__37586_37590 = G__37595;
continue;
} else {
var temp__4657__auto___37596 = cljs.core.seq.call(null,seq__37583_37587);
if(temp__4657__auto___37596){
var seq__37583_37597__$1 = temp__4657__auto___37596;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37583_37597__$1)){
var c__29271__auto___37598 = cljs.core.chunk_first.call(null,seq__37583_37597__$1);
var G__37599 = cljs.core.chunk_rest.call(null,seq__37583_37597__$1);
var G__37600 = c__29271__auto___37598;
var G__37601 = cljs.core.count.call(null,c__29271__auto___37598);
var G__37602 = (0);
seq__37583_37587 = G__37599;
chunk__37584_37588 = G__37600;
count__37585_37589 = G__37601;
i__37586_37590 = G__37602;
continue;
} else {
var ns_37603 = cljs.core.first.call(null,seq__37583_37597__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37603);

var G__37604 = cljs.core.next.call(null,seq__37583_37597__$1);
var G__37605 = null;
var G__37606 = (0);
var G__37607 = (0);
seq__37583_37587 = G__37604;
chunk__37584_37588 = G__37605;
count__37585_37589 = G__37606;
i__37586_37590 = G__37607;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__28432__auto__ = goog.require__;
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37608__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37608 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37609__i = 0, G__37609__a = new Array(arguments.length -  0);
while (G__37609__i < G__37609__a.length) {G__37609__a[G__37609__i] = arguments[G__37609__i + 0]; ++G__37609__i;}
  args = new cljs.core.IndexedSeq(G__37609__a,0,null);
} 
return G__37608__delegate.call(this,args);};
G__37608.cljs$lang$maxFixedArity = 0;
G__37608.cljs$lang$applyTo = (function (arglist__37610){
var args = cljs.core.seq(arglist__37610);
return G__37608__delegate(args);
});
G__37608.cljs$core$IFn$_invoke$arity$variadic = G__37608__delegate;
return G__37608;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37611_SHARP_,p2__37612_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37611_SHARP_)].join('')),p2__37612_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37613_SHARP_,p2__37614_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37613_SHARP_)].join(''),p2__37614_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37615 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37615.addCallback(((function (G__37615){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37615))
);

G__37615.addErrback(((function (G__37615){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37615))
);

return G__37615;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37616 = cljs.core._EQ_;
var expr__37617 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37616.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37617))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37616,expr__37617){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37616,expr__37617))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37616,expr__37617){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37619){if((e37619 instanceof Error)){
var e = e37619;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37619;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37616,expr__37617))
} else {
if(cljs.core.truth_(pred__37616.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37617))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37616.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37617))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37616.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37617))){
return ((function (pred__37616,expr__37617){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37620){if((e37620 instanceof Error)){
var e = e37620;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37620;

}
}})());
});
;})(pred__37616,expr__37617))
} else {
return ((function (pred__37616,expr__37617){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37616,expr__37617))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37621,callback){
var map__37622 = p__37621;
var map__37622__$1 = ((((!((map__37622 == null)))?((((map__37622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37622):map__37622);
var file_msg = map__37622__$1;
var request_url = cljs.core.get.call(null,map__37622__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37622,map__37622__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37622,map__37622__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__34292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto__){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto__){
return (function (state_37646){
var state_val_37647 = (state_37646[(1)]);
if((state_val_37647 === (7))){
var inst_37642 = (state_37646[(2)]);
var state_37646__$1 = state_37646;
var statearr_37648_37665 = state_37646__$1;
(statearr_37648_37665[(2)] = inst_37642);

(statearr_37648_37665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37647 === (1))){
var state_37646__$1 = state_37646;
var statearr_37649_37666 = state_37646__$1;
(statearr_37649_37666[(2)] = null);

(statearr_37649_37666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37647 === (4))){
var inst_37626 = (state_37646[(7)]);
var inst_37626__$1 = (state_37646[(2)]);
var state_37646__$1 = (function (){var statearr_37650 = state_37646;
(statearr_37650[(7)] = inst_37626__$1);

return statearr_37650;
})();
if(cljs.core.truth_(inst_37626__$1)){
var statearr_37651_37667 = state_37646__$1;
(statearr_37651_37667[(1)] = (5));

} else {
var statearr_37652_37668 = state_37646__$1;
(statearr_37652_37668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37647 === (6))){
var state_37646__$1 = state_37646;
var statearr_37653_37669 = state_37646__$1;
(statearr_37653_37669[(2)] = null);

(statearr_37653_37669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37647 === (3))){
var inst_37644 = (state_37646[(2)]);
var state_37646__$1 = state_37646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37646__$1,inst_37644);
} else {
if((state_val_37647 === (2))){
var state_37646__$1 = state_37646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37646__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37647 === (11))){
var inst_37638 = (state_37646[(2)]);
var state_37646__$1 = (function (){var statearr_37654 = state_37646;
(statearr_37654[(8)] = inst_37638);

return statearr_37654;
})();
var statearr_37655_37670 = state_37646__$1;
(statearr_37655_37670[(2)] = null);

(statearr_37655_37670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37647 === (9))){
var inst_37630 = (state_37646[(9)]);
var inst_37632 = (state_37646[(10)]);
var inst_37634 = inst_37632.call(null,inst_37630);
var state_37646__$1 = state_37646;
var statearr_37656_37671 = state_37646__$1;
(statearr_37656_37671[(2)] = inst_37634);

(statearr_37656_37671[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37647 === (5))){
var inst_37626 = (state_37646[(7)]);
var inst_37628 = figwheel.client.file_reloading.blocking_load.call(null,inst_37626);
var state_37646__$1 = state_37646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37646__$1,(8),inst_37628);
} else {
if((state_val_37647 === (10))){
var inst_37630 = (state_37646[(9)]);
var inst_37636 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37630);
var state_37646__$1 = state_37646;
var statearr_37657_37672 = state_37646__$1;
(statearr_37657_37672[(2)] = inst_37636);

(statearr_37657_37672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37647 === (8))){
var inst_37626 = (state_37646[(7)]);
var inst_37632 = (state_37646[(10)]);
var inst_37630 = (state_37646[(2)]);
var inst_37631 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37632__$1 = cljs.core.get.call(null,inst_37631,inst_37626);
var state_37646__$1 = (function (){var statearr_37658 = state_37646;
(statearr_37658[(9)] = inst_37630);

(statearr_37658[(10)] = inst_37632__$1);

return statearr_37658;
})();
if(cljs.core.truth_(inst_37632__$1)){
var statearr_37659_37673 = state_37646__$1;
(statearr_37659_37673[(1)] = (9));

} else {
var statearr_37660_37674 = state_37646__$1;
(statearr_37660_37674[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__34292__auto__))
;
return ((function (switch__34204__auto__,c__34292__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34205__auto__ = null;
var figwheel$client$file_reloading$state_machine__34205__auto____0 = (function (){
var statearr_37661 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37661[(0)] = figwheel$client$file_reloading$state_machine__34205__auto__);

(statearr_37661[(1)] = (1));

return statearr_37661;
});
var figwheel$client$file_reloading$state_machine__34205__auto____1 = (function (state_37646){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_37646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e37662){if((e37662 instanceof Object)){
var ex__34208__auto__ = e37662;
var statearr_37663_37675 = state_37646;
(statearr_37663_37675[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37676 = state_37646;
state_37646 = G__37676;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34205__auto__ = function(state_37646){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34205__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34205__auto____1.call(this,state_37646);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34205__auto____0;
figwheel$client$file_reloading$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34205__auto____1;
return figwheel$client$file_reloading$state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto__))
})();
var state__34294__auto__ = (function (){var statearr_37664 = f__34293__auto__.call(null);
(statearr_37664[(6)] = c__34292__auto__);

return statearr_37664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto__))
);

return c__34292__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37677,callback){
var map__37678 = p__37677;
var map__37678__$1 = ((((!((map__37678 == null)))?((((map__37678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37678.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37678):map__37678);
var file_msg = map__37678__$1;
var namespace = cljs.core.get.call(null,map__37678__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37678,map__37678__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37678,map__37678__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37680){
var map__37681 = p__37680;
var map__37681__$1 = ((((!((map__37681 == null)))?((((map__37681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37681.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37681):map__37681);
var file_msg = map__37681__$1;
var namespace = cljs.core.get.call(null,map__37681__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37683){
var map__37684 = p__37683;
var map__37684__$1 = ((((!((map__37684 == null)))?((((map__37684.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37684.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37684):map__37684);
var file_msg = map__37684__$1;
var namespace = cljs.core.get.call(null,map__37684__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28420__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28420__auto__){
var or__28432__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
var or__28432__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28432__auto____$1)){
return or__28432__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28420__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37686,callback){
var map__37687 = p__37686;
var map__37687__$1 = ((((!((map__37687 == null)))?((((map__37687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37687.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37687):map__37687);
var file_msg = map__37687__$1;
var request_url = cljs.core.get.call(null,map__37687__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37687__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__34292__auto___37737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___37737,out){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___37737,out){
return (function (state_37722){
var state_val_37723 = (state_37722[(1)]);
if((state_val_37723 === (1))){
var inst_37696 = cljs.core.seq.call(null,files);
var inst_37697 = cljs.core.first.call(null,inst_37696);
var inst_37698 = cljs.core.next.call(null,inst_37696);
var inst_37699 = files;
var state_37722__$1 = (function (){var statearr_37724 = state_37722;
(statearr_37724[(7)] = inst_37699);

(statearr_37724[(8)] = inst_37698);

(statearr_37724[(9)] = inst_37697);

return statearr_37724;
})();
var statearr_37725_37738 = state_37722__$1;
(statearr_37725_37738[(2)] = null);

(statearr_37725_37738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (2))){
var inst_37705 = (state_37722[(10)]);
var inst_37699 = (state_37722[(7)]);
var inst_37704 = cljs.core.seq.call(null,inst_37699);
var inst_37705__$1 = cljs.core.first.call(null,inst_37704);
var inst_37706 = cljs.core.next.call(null,inst_37704);
var inst_37707 = (inst_37705__$1 == null);
var inst_37708 = cljs.core.not.call(null,inst_37707);
var state_37722__$1 = (function (){var statearr_37726 = state_37722;
(statearr_37726[(11)] = inst_37706);

(statearr_37726[(10)] = inst_37705__$1);

return statearr_37726;
})();
if(inst_37708){
var statearr_37727_37739 = state_37722__$1;
(statearr_37727_37739[(1)] = (4));

} else {
var statearr_37728_37740 = state_37722__$1;
(statearr_37728_37740[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (3))){
var inst_37720 = (state_37722[(2)]);
var state_37722__$1 = state_37722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37722__$1,inst_37720);
} else {
if((state_val_37723 === (4))){
var inst_37705 = (state_37722[(10)]);
var inst_37710 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37705);
var state_37722__$1 = state_37722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37722__$1,(7),inst_37710);
} else {
if((state_val_37723 === (5))){
var inst_37716 = cljs.core.async.close_BANG_.call(null,out);
var state_37722__$1 = state_37722;
var statearr_37729_37741 = state_37722__$1;
(statearr_37729_37741[(2)] = inst_37716);

(statearr_37729_37741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (6))){
var inst_37718 = (state_37722[(2)]);
var state_37722__$1 = state_37722;
var statearr_37730_37742 = state_37722__$1;
(statearr_37730_37742[(2)] = inst_37718);

(statearr_37730_37742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37723 === (7))){
var inst_37706 = (state_37722[(11)]);
var inst_37712 = (state_37722[(2)]);
var inst_37713 = cljs.core.async.put_BANG_.call(null,out,inst_37712);
var inst_37699 = inst_37706;
var state_37722__$1 = (function (){var statearr_37731 = state_37722;
(statearr_37731[(12)] = inst_37713);

(statearr_37731[(7)] = inst_37699);

return statearr_37731;
})();
var statearr_37732_37743 = state_37722__$1;
(statearr_37732_37743[(2)] = null);

(statearr_37732_37743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__34292__auto___37737,out))
;
return ((function (switch__34204__auto__,c__34292__auto___37737,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34205__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34205__auto____0 = (function (){
var statearr_37733 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37733[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34205__auto__);

(statearr_37733[(1)] = (1));

return statearr_37733;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34205__auto____1 = (function (state_37722){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_37722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e37734){if((e37734 instanceof Object)){
var ex__34208__auto__ = e37734;
var statearr_37735_37744 = state_37722;
(statearr_37735_37744[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37745 = state_37722;
state_37722 = G__37745;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34205__auto__ = function(state_37722){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34205__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34205__auto____1.call(this,state_37722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34205__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34205__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___37737,out))
})();
var state__34294__auto__ = (function (){var statearr_37736 = f__34293__auto__.call(null);
(statearr_37736[(6)] = c__34292__auto___37737);

return statearr_37736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___37737,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37746,opts){
var map__37747 = p__37746;
var map__37747__$1 = ((((!((map__37747 == null)))?((((map__37747.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37747.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37747):map__37747);
var eval_body = cljs.core.get.call(null,map__37747__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37747__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28420__auto__ = eval_body;
if(cljs.core.truth_(and__28420__auto__)){
return typeof eval_body === 'string';
} else {
return and__28420__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37749){var e = e37749;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37750_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37750_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37751){
var vec__37752 = p__37751;
var k = cljs.core.nth.call(null,vec__37752,(0),null);
var v = cljs.core.nth.call(null,vec__37752,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37755){
var vec__37756 = p__37755;
var k = cljs.core.nth.call(null,vec__37756,(0),null);
var v = cljs.core.nth.call(null,vec__37756,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37762,p__37763){
var map__37764 = p__37762;
var map__37764__$1 = ((((!((map__37764 == null)))?((((map__37764.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37764.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37764):map__37764);
var opts = map__37764__$1;
var before_jsload = cljs.core.get.call(null,map__37764__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37764__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37764__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37765 = p__37763;
var map__37765__$1 = ((((!((map__37765 == null)))?((((map__37765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37765.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37765):map__37765);
var msg = map__37765__$1;
var files = cljs.core.get.call(null,map__37765__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37765__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37765__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37919){
var state_val_37920 = (state_37919[(1)]);
if((state_val_37920 === (7))){
var inst_37779 = (state_37919[(7)]);
var inst_37781 = (state_37919[(8)]);
var inst_37782 = (state_37919[(9)]);
var inst_37780 = (state_37919[(10)]);
var inst_37787 = cljs.core._nth.call(null,inst_37780,inst_37782);
var inst_37788 = figwheel.client.file_reloading.eval_body.call(null,inst_37787,opts);
var inst_37789 = (inst_37782 + (1));
var tmp37921 = inst_37779;
var tmp37922 = inst_37781;
var tmp37923 = inst_37780;
var inst_37779__$1 = tmp37921;
var inst_37780__$1 = tmp37923;
var inst_37781__$1 = tmp37922;
var inst_37782__$1 = inst_37789;
var state_37919__$1 = (function (){var statearr_37924 = state_37919;
(statearr_37924[(7)] = inst_37779__$1);

(statearr_37924[(8)] = inst_37781__$1);

(statearr_37924[(9)] = inst_37782__$1);

(statearr_37924[(11)] = inst_37788);

(statearr_37924[(10)] = inst_37780__$1);

return statearr_37924;
})();
var statearr_37925_38008 = state_37919__$1;
(statearr_37925_38008[(2)] = null);

(statearr_37925_38008[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (20))){
var inst_37822 = (state_37919[(12)]);
var inst_37830 = figwheel.client.file_reloading.sort_files.call(null,inst_37822);
var state_37919__$1 = state_37919;
var statearr_37926_38009 = state_37919__$1;
(statearr_37926_38009[(2)] = inst_37830);

(statearr_37926_38009[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (27))){
var state_37919__$1 = state_37919;
var statearr_37927_38010 = state_37919__$1;
(statearr_37927_38010[(2)] = null);

(statearr_37927_38010[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (1))){
var inst_37771 = (state_37919[(13)]);
var inst_37768 = before_jsload.call(null,files);
var inst_37769 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37770 = (function (){return ((function (inst_37771,inst_37768,inst_37769,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37759_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37759_SHARP_);
});
;})(inst_37771,inst_37768,inst_37769,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37771__$1 = cljs.core.filter.call(null,inst_37770,files);
var inst_37772 = cljs.core.not_empty.call(null,inst_37771__$1);
var state_37919__$1 = (function (){var statearr_37928 = state_37919;
(statearr_37928[(14)] = inst_37769);

(statearr_37928[(15)] = inst_37768);

(statearr_37928[(13)] = inst_37771__$1);

return statearr_37928;
})();
if(cljs.core.truth_(inst_37772)){
var statearr_37929_38011 = state_37919__$1;
(statearr_37929_38011[(1)] = (2));

} else {
var statearr_37930_38012 = state_37919__$1;
(statearr_37930_38012[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (24))){
var state_37919__$1 = state_37919;
var statearr_37931_38013 = state_37919__$1;
(statearr_37931_38013[(2)] = null);

(statearr_37931_38013[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (39))){
var inst_37872 = (state_37919[(16)]);
var state_37919__$1 = state_37919;
var statearr_37932_38014 = state_37919__$1;
(statearr_37932_38014[(2)] = inst_37872);

(statearr_37932_38014[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (46))){
var inst_37914 = (state_37919[(2)]);
var state_37919__$1 = state_37919;
var statearr_37933_38015 = state_37919__$1;
(statearr_37933_38015[(2)] = inst_37914);

(statearr_37933_38015[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (4))){
var inst_37816 = (state_37919[(2)]);
var inst_37817 = cljs.core.List.EMPTY;
var inst_37818 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37817);
var inst_37819 = (function (){return ((function (inst_37816,inst_37817,inst_37818,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37760_SHARP_){
var and__28420__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37760_SHARP_);
if(cljs.core.truth_(and__28420__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37760_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37760_SHARP_)));
} else {
return and__28420__auto__;
}
});
;})(inst_37816,inst_37817,inst_37818,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37820 = cljs.core.filter.call(null,inst_37819,files);
var inst_37821 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37822 = cljs.core.concat.call(null,inst_37820,inst_37821);
var state_37919__$1 = (function (){var statearr_37934 = state_37919;
(statearr_37934[(17)] = inst_37816);

(statearr_37934[(18)] = inst_37818);

(statearr_37934[(12)] = inst_37822);

return statearr_37934;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37935_38016 = state_37919__$1;
(statearr_37935_38016[(1)] = (16));

} else {
var statearr_37936_38017 = state_37919__$1;
(statearr_37936_38017[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (15))){
var inst_37806 = (state_37919[(2)]);
var state_37919__$1 = state_37919;
var statearr_37937_38018 = state_37919__$1;
(statearr_37937_38018[(2)] = inst_37806);

(statearr_37937_38018[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (21))){
var inst_37832 = (state_37919[(19)]);
var inst_37832__$1 = (state_37919[(2)]);
var inst_37833 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37832__$1);
var state_37919__$1 = (function (){var statearr_37938 = state_37919;
(statearr_37938[(19)] = inst_37832__$1);

return statearr_37938;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37919__$1,(22),inst_37833);
} else {
if((state_val_37920 === (31))){
var inst_37917 = (state_37919[(2)]);
var state_37919__$1 = state_37919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37919__$1,inst_37917);
} else {
if((state_val_37920 === (32))){
var inst_37872 = (state_37919[(16)]);
var inst_37877 = inst_37872.cljs$lang$protocol_mask$partition0$;
var inst_37878 = (inst_37877 & (64));
var inst_37879 = inst_37872.cljs$core$ISeq$;
var inst_37880 = (cljs.core.PROTOCOL_SENTINEL === inst_37879);
var inst_37881 = (inst_37878) || (inst_37880);
var state_37919__$1 = state_37919;
if(cljs.core.truth_(inst_37881)){
var statearr_37939_38019 = state_37919__$1;
(statearr_37939_38019[(1)] = (35));

} else {
var statearr_37940_38020 = state_37919__$1;
(statearr_37940_38020[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (40))){
var inst_37894 = (state_37919[(20)]);
var inst_37893 = (state_37919[(2)]);
var inst_37894__$1 = cljs.core.get.call(null,inst_37893,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37895 = cljs.core.get.call(null,inst_37893,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37896 = cljs.core.not_empty.call(null,inst_37894__$1);
var state_37919__$1 = (function (){var statearr_37941 = state_37919;
(statearr_37941[(20)] = inst_37894__$1);

(statearr_37941[(21)] = inst_37895);

return statearr_37941;
})();
if(cljs.core.truth_(inst_37896)){
var statearr_37942_38021 = state_37919__$1;
(statearr_37942_38021[(1)] = (41));

} else {
var statearr_37943_38022 = state_37919__$1;
(statearr_37943_38022[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (33))){
var state_37919__$1 = state_37919;
var statearr_37944_38023 = state_37919__$1;
(statearr_37944_38023[(2)] = false);

(statearr_37944_38023[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (13))){
var inst_37792 = (state_37919[(22)]);
var inst_37796 = cljs.core.chunk_first.call(null,inst_37792);
var inst_37797 = cljs.core.chunk_rest.call(null,inst_37792);
var inst_37798 = cljs.core.count.call(null,inst_37796);
var inst_37779 = inst_37797;
var inst_37780 = inst_37796;
var inst_37781 = inst_37798;
var inst_37782 = (0);
var state_37919__$1 = (function (){var statearr_37945 = state_37919;
(statearr_37945[(7)] = inst_37779);

(statearr_37945[(8)] = inst_37781);

(statearr_37945[(9)] = inst_37782);

(statearr_37945[(10)] = inst_37780);

return statearr_37945;
})();
var statearr_37946_38024 = state_37919__$1;
(statearr_37946_38024[(2)] = null);

(statearr_37946_38024[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (22))){
var inst_37835 = (state_37919[(23)]);
var inst_37840 = (state_37919[(24)]);
var inst_37836 = (state_37919[(25)]);
var inst_37832 = (state_37919[(19)]);
var inst_37835__$1 = (state_37919[(2)]);
var inst_37836__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37835__$1);
var inst_37837 = (function (){var all_files = inst_37832;
var res_SINGLEQUOTE_ = inst_37835__$1;
var res = inst_37836__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37835,inst_37840,inst_37836,inst_37832,inst_37835__$1,inst_37836__$1,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37761_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37761_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37835,inst_37840,inst_37836,inst_37832,inst_37835__$1,inst_37836__$1,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37838 = cljs.core.filter.call(null,inst_37837,inst_37835__$1);
var inst_37839 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37840__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37839);
var inst_37841 = cljs.core.not_empty.call(null,inst_37840__$1);
var state_37919__$1 = (function (){var statearr_37947 = state_37919;
(statearr_37947[(23)] = inst_37835__$1);

(statearr_37947[(24)] = inst_37840__$1);

(statearr_37947[(26)] = inst_37838);

(statearr_37947[(25)] = inst_37836__$1);

return statearr_37947;
})();
if(cljs.core.truth_(inst_37841)){
var statearr_37948_38025 = state_37919__$1;
(statearr_37948_38025[(1)] = (23));

} else {
var statearr_37949_38026 = state_37919__$1;
(statearr_37949_38026[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (36))){
var state_37919__$1 = state_37919;
var statearr_37950_38027 = state_37919__$1;
(statearr_37950_38027[(2)] = false);

(statearr_37950_38027[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (41))){
var inst_37894 = (state_37919[(20)]);
var inst_37898 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37899 = cljs.core.map.call(null,inst_37898,inst_37894);
var inst_37900 = cljs.core.pr_str.call(null,inst_37899);
var inst_37901 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37900)].join('');
var inst_37902 = figwheel.client.utils.log.call(null,inst_37901);
var state_37919__$1 = state_37919;
var statearr_37951_38028 = state_37919__$1;
(statearr_37951_38028[(2)] = inst_37902);

(statearr_37951_38028[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (43))){
var inst_37895 = (state_37919[(21)]);
var inst_37905 = (state_37919[(2)]);
var inst_37906 = cljs.core.not_empty.call(null,inst_37895);
var state_37919__$1 = (function (){var statearr_37952 = state_37919;
(statearr_37952[(27)] = inst_37905);

return statearr_37952;
})();
if(cljs.core.truth_(inst_37906)){
var statearr_37953_38029 = state_37919__$1;
(statearr_37953_38029[(1)] = (44));

} else {
var statearr_37954_38030 = state_37919__$1;
(statearr_37954_38030[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (29))){
var inst_37835 = (state_37919[(23)]);
var inst_37872 = (state_37919[(16)]);
var inst_37840 = (state_37919[(24)]);
var inst_37838 = (state_37919[(26)]);
var inst_37836 = (state_37919[(25)]);
var inst_37832 = (state_37919[(19)]);
var inst_37868 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37871 = (function (){var all_files = inst_37832;
var res_SINGLEQUOTE_ = inst_37835;
var res = inst_37836;
var files_not_loaded = inst_37838;
var dependencies_that_loaded = inst_37840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37835,inst_37872,inst_37840,inst_37838,inst_37836,inst_37832,inst_37868,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37870){
var map__37955 = p__37870;
var map__37955__$1 = ((((!((map__37955 == null)))?((((map__37955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37955):map__37955);
var namespace = cljs.core.get.call(null,map__37955__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37835,inst_37872,inst_37840,inst_37838,inst_37836,inst_37832,inst_37868,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37872__$1 = cljs.core.group_by.call(null,inst_37871,inst_37838);
var inst_37874 = (inst_37872__$1 == null);
var inst_37875 = cljs.core.not.call(null,inst_37874);
var state_37919__$1 = (function (){var statearr_37957 = state_37919;
(statearr_37957[(16)] = inst_37872__$1);

(statearr_37957[(28)] = inst_37868);

return statearr_37957;
})();
if(inst_37875){
var statearr_37958_38031 = state_37919__$1;
(statearr_37958_38031[(1)] = (32));

} else {
var statearr_37959_38032 = state_37919__$1;
(statearr_37959_38032[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (44))){
var inst_37895 = (state_37919[(21)]);
var inst_37908 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37895);
var inst_37909 = cljs.core.pr_str.call(null,inst_37908);
var inst_37910 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37909)].join('');
var inst_37911 = figwheel.client.utils.log.call(null,inst_37910);
var state_37919__$1 = state_37919;
var statearr_37960_38033 = state_37919__$1;
(statearr_37960_38033[(2)] = inst_37911);

(statearr_37960_38033[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (6))){
var inst_37813 = (state_37919[(2)]);
var state_37919__$1 = state_37919;
var statearr_37961_38034 = state_37919__$1;
(statearr_37961_38034[(2)] = inst_37813);

(statearr_37961_38034[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (28))){
var inst_37838 = (state_37919[(26)]);
var inst_37865 = (state_37919[(2)]);
var inst_37866 = cljs.core.not_empty.call(null,inst_37838);
var state_37919__$1 = (function (){var statearr_37962 = state_37919;
(statearr_37962[(29)] = inst_37865);

return statearr_37962;
})();
if(cljs.core.truth_(inst_37866)){
var statearr_37963_38035 = state_37919__$1;
(statearr_37963_38035[(1)] = (29));

} else {
var statearr_37964_38036 = state_37919__$1;
(statearr_37964_38036[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (25))){
var inst_37836 = (state_37919[(25)]);
var inst_37852 = (state_37919[(2)]);
var inst_37853 = cljs.core.not_empty.call(null,inst_37836);
var state_37919__$1 = (function (){var statearr_37965 = state_37919;
(statearr_37965[(30)] = inst_37852);

return statearr_37965;
})();
if(cljs.core.truth_(inst_37853)){
var statearr_37966_38037 = state_37919__$1;
(statearr_37966_38037[(1)] = (26));

} else {
var statearr_37967_38038 = state_37919__$1;
(statearr_37967_38038[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (34))){
var inst_37888 = (state_37919[(2)]);
var state_37919__$1 = state_37919;
if(cljs.core.truth_(inst_37888)){
var statearr_37968_38039 = state_37919__$1;
(statearr_37968_38039[(1)] = (38));

} else {
var statearr_37969_38040 = state_37919__$1;
(statearr_37969_38040[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (17))){
var state_37919__$1 = state_37919;
var statearr_37970_38041 = state_37919__$1;
(statearr_37970_38041[(2)] = recompile_dependents);

(statearr_37970_38041[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (3))){
var state_37919__$1 = state_37919;
var statearr_37971_38042 = state_37919__$1;
(statearr_37971_38042[(2)] = null);

(statearr_37971_38042[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (12))){
var inst_37809 = (state_37919[(2)]);
var state_37919__$1 = state_37919;
var statearr_37972_38043 = state_37919__$1;
(statearr_37972_38043[(2)] = inst_37809);

(statearr_37972_38043[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (2))){
var inst_37771 = (state_37919[(13)]);
var inst_37778 = cljs.core.seq.call(null,inst_37771);
var inst_37779 = inst_37778;
var inst_37780 = null;
var inst_37781 = (0);
var inst_37782 = (0);
var state_37919__$1 = (function (){var statearr_37973 = state_37919;
(statearr_37973[(7)] = inst_37779);

(statearr_37973[(8)] = inst_37781);

(statearr_37973[(9)] = inst_37782);

(statearr_37973[(10)] = inst_37780);

return statearr_37973;
})();
var statearr_37974_38044 = state_37919__$1;
(statearr_37974_38044[(2)] = null);

(statearr_37974_38044[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (23))){
var inst_37835 = (state_37919[(23)]);
var inst_37840 = (state_37919[(24)]);
var inst_37838 = (state_37919[(26)]);
var inst_37836 = (state_37919[(25)]);
var inst_37832 = (state_37919[(19)]);
var inst_37843 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37845 = (function (){var all_files = inst_37832;
var res_SINGLEQUOTE_ = inst_37835;
var res = inst_37836;
var files_not_loaded = inst_37838;
var dependencies_that_loaded = inst_37840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37835,inst_37840,inst_37838,inst_37836,inst_37832,inst_37843,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37844){
var map__37975 = p__37844;
var map__37975__$1 = ((((!((map__37975 == null)))?((((map__37975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37975.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37975):map__37975);
var request_url = cljs.core.get.call(null,map__37975__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37835,inst_37840,inst_37838,inst_37836,inst_37832,inst_37843,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37846 = cljs.core.reverse.call(null,inst_37840);
var inst_37847 = cljs.core.map.call(null,inst_37845,inst_37846);
var inst_37848 = cljs.core.pr_str.call(null,inst_37847);
var inst_37849 = figwheel.client.utils.log.call(null,inst_37848);
var state_37919__$1 = (function (){var statearr_37977 = state_37919;
(statearr_37977[(31)] = inst_37843);

return statearr_37977;
})();
var statearr_37978_38045 = state_37919__$1;
(statearr_37978_38045[(2)] = inst_37849);

(statearr_37978_38045[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (35))){
var state_37919__$1 = state_37919;
var statearr_37979_38046 = state_37919__$1;
(statearr_37979_38046[(2)] = true);

(statearr_37979_38046[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (19))){
var inst_37822 = (state_37919[(12)]);
var inst_37828 = figwheel.client.file_reloading.expand_files.call(null,inst_37822);
var state_37919__$1 = state_37919;
var statearr_37980_38047 = state_37919__$1;
(statearr_37980_38047[(2)] = inst_37828);

(statearr_37980_38047[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (11))){
var state_37919__$1 = state_37919;
var statearr_37981_38048 = state_37919__$1;
(statearr_37981_38048[(2)] = null);

(statearr_37981_38048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (9))){
var inst_37811 = (state_37919[(2)]);
var state_37919__$1 = state_37919;
var statearr_37982_38049 = state_37919__$1;
(statearr_37982_38049[(2)] = inst_37811);

(statearr_37982_38049[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (5))){
var inst_37781 = (state_37919[(8)]);
var inst_37782 = (state_37919[(9)]);
var inst_37784 = (inst_37782 < inst_37781);
var inst_37785 = inst_37784;
var state_37919__$1 = state_37919;
if(cljs.core.truth_(inst_37785)){
var statearr_37983_38050 = state_37919__$1;
(statearr_37983_38050[(1)] = (7));

} else {
var statearr_37984_38051 = state_37919__$1;
(statearr_37984_38051[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (14))){
var inst_37792 = (state_37919[(22)]);
var inst_37801 = cljs.core.first.call(null,inst_37792);
var inst_37802 = figwheel.client.file_reloading.eval_body.call(null,inst_37801,opts);
var inst_37803 = cljs.core.next.call(null,inst_37792);
var inst_37779 = inst_37803;
var inst_37780 = null;
var inst_37781 = (0);
var inst_37782 = (0);
var state_37919__$1 = (function (){var statearr_37985 = state_37919;
(statearr_37985[(7)] = inst_37779);

(statearr_37985[(8)] = inst_37781);

(statearr_37985[(32)] = inst_37802);

(statearr_37985[(9)] = inst_37782);

(statearr_37985[(10)] = inst_37780);

return statearr_37985;
})();
var statearr_37986_38052 = state_37919__$1;
(statearr_37986_38052[(2)] = null);

(statearr_37986_38052[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (45))){
var state_37919__$1 = state_37919;
var statearr_37987_38053 = state_37919__$1;
(statearr_37987_38053[(2)] = null);

(statearr_37987_38053[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (26))){
var inst_37835 = (state_37919[(23)]);
var inst_37840 = (state_37919[(24)]);
var inst_37838 = (state_37919[(26)]);
var inst_37836 = (state_37919[(25)]);
var inst_37832 = (state_37919[(19)]);
var inst_37855 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37857 = (function (){var all_files = inst_37832;
var res_SINGLEQUOTE_ = inst_37835;
var res = inst_37836;
var files_not_loaded = inst_37838;
var dependencies_that_loaded = inst_37840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37835,inst_37840,inst_37838,inst_37836,inst_37832,inst_37855,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37856){
var map__37988 = p__37856;
var map__37988__$1 = ((((!((map__37988 == null)))?((((map__37988.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37988.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37988):map__37988);
var namespace = cljs.core.get.call(null,map__37988__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37988__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37835,inst_37840,inst_37838,inst_37836,inst_37832,inst_37855,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37858 = cljs.core.map.call(null,inst_37857,inst_37836);
var inst_37859 = cljs.core.pr_str.call(null,inst_37858);
var inst_37860 = figwheel.client.utils.log.call(null,inst_37859);
var inst_37861 = (function (){var all_files = inst_37832;
var res_SINGLEQUOTE_ = inst_37835;
var res = inst_37836;
var files_not_loaded = inst_37838;
var dependencies_that_loaded = inst_37840;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37835,inst_37840,inst_37838,inst_37836,inst_37832,inst_37855,inst_37857,inst_37858,inst_37859,inst_37860,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37835,inst_37840,inst_37838,inst_37836,inst_37832,inst_37855,inst_37857,inst_37858,inst_37859,inst_37860,state_val_37920,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37862 = setTimeout(inst_37861,(10));
var state_37919__$1 = (function (){var statearr_37990 = state_37919;
(statearr_37990[(33)] = inst_37860);

(statearr_37990[(34)] = inst_37855);

return statearr_37990;
})();
var statearr_37991_38054 = state_37919__$1;
(statearr_37991_38054[(2)] = inst_37862);

(statearr_37991_38054[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (16))){
var state_37919__$1 = state_37919;
var statearr_37992_38055 = state_37919__$1;
(statearr_37992_38055[(2)] = reload_dependents);

(statearr_37992_38055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (38))){
var inst_37872 = (state_37919[(16)]);
var inst_37890 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37872);
var state_37919__$1 = state_37919;
var statearr_37993_38056 = state_37919__$1;
(statearr_37993_38056[(2)] = inst_37890);

(statearr_37993_38056[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (30))){
var state_37919__$1 = state_37919;
var statearr_37994_38057 = state_37919__$1;
(statearr_37994_38057[(2)] = null);

(statearr_37994_38057[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (10))){
var inst_37792 = (state_37919[(22)]);
var inst_37794 = cljs.core.chunked_seq_QMARK_.call(null,inst_37792);
var state_37919__$1 = state_37919;
if(inst_37794){
var statearr_37995_38058 = state_37919__$1;
(statearr_37995_38058[(1)] = (13));

} else {
var statearr_37996_38059 = state_37919__$1;
(statearr_37996_38059[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (18))){
var inst_37826 = (state_37919[(2)]);
var state_37919__$1 = state_37919;
if(cljs.core.truth_(inst_37826)){
var statearr_37997_38060 = state_37919__$1;
(statearr_37997_38060[(1)] = (19));

} else {
var statearr_37998_38061 = state_37919__$1;
(statearr_37998_38061[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (42))){
var state_37919__$1 = state_37919;
var statearr_37999_38062 = state_37919__$1;
(statearr_37999_38062[(2)] = null);

(statearr_37999_38062[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (37))){
var inst_37885 = (state_37919[(2)]);
var state_37919__$1 = state_37919;
var statearr_38000_38063 = state_37919__$1;
(statearr_38000_38063[(2)] = inst_37885);

(statearr_38000_38063[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (8))){
var inst_37779 = (state_37919[(7)]);
var inst_37792 = (state_37919[(22)]);
var inst_37792__$1 = cljs.core.seq.call(null,inst_37779);
var state_37919__$1 = (function (){var statearr_38001 = state_37919;
(statearr_38001[(22)] = inst_37792__$1);

return statearr_38001;
})();
if(inst_37792__$1){
var statearr_38002_38064 = state_37919__$1;
(statearr_38002_38064[(1)] = (10));

} else {
var statearr_38003_38065 = state_37919__$1;
(statearr_38003_38065[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34204__auto__,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34205__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34205__auto____0 = (function (){
var statearr_38004 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38004[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34205__auto__);

(statearr_38004[(1)] = (1));

return statearr_38004;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34205__auto____1 = (function (state_37919){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_37919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e38005){if((e38005 instanceof Object)){
var ex__34208__auto__ = e38005;
var statearr_38006_38066 = state_37919;
(statearr_38006_38066[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38005;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38067 = state_37919;
state_37919 = G__38067;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34205__auto__ = function(state_37919){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34205__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34205__auto____1.call(this,state_37919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34205__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34205__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34294__auto__ = (function (){var statearr_38007 = f__34293__auto__.call(null);
(statearr_38007[(6)] = c__34292__auto__);

return statearr_38007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto__,map__37764,map__37764__$1,opts,before_jsload,on_jsload,reload_dependents,map__37765,map__37765__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34292__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38070,link){
var map__38071 = p__38070;
var map__38071__$1 = ((((!((map__38071 == null)))?((((map__38071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38071.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38071):map__38071);
var file = cljs.core.get.call(null,map__38071__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__38071,map__38071__$1,file){
return (function (p1__38068_SHARP_,p2__38069_SHARP_){
if(cljs.core._EQ_.call(null,p1__38068_SHARP_,p2__38069_SHARP_)){
return p1__38068_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__38071,map__38071__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38074){
var map__38075 = p__38074;
var map__38075__$1 = ((((!((map__38075 == null)))?((((map__38075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38075):map__38075);
var match_length = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38075__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38073_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38073_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38077_SHARP_,p2__38078_SHARP_){
return cljs.core.assoc.call(null,p1__38077_SHARP_,cljs.core.get.call(null,p2__38078_SHARP_,key),p2__38078_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_38079 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38079);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38079);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38080,p__38081){
var map__38082 = p__38080;
var map__38082__$1 = ((((!((map__38082 == null)))?((((map__38082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38082.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38082):map__38082);
var on_cssload = cljs.core.get.call(null,map__38082__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38083 = p__38081;
var map__38083__$1 = ((((!((map__38083 == null)))?((((map__38083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38083.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38083):map__38083);
var files_msg = map__38083__$1;
var files = cljs.core.get.call(null,map__38083__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1573832703622
