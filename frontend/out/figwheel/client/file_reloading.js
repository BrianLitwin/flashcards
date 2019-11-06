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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36667_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36667_SHARP_));
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
var seq__36668 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36669 = null;
var count__36670 = (0);
var i__36671 = (0);
while(true){
if((i__36671 < count__36670)){
var n = cljs.core._nth.call(null,chunk__36669,i__36671);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36672 = seq__36668;
var G__36673 = chunk__36669;
var G__36674 = count__36670;
var G__36675 = (i__36671 + (1));
seq__36668 = G__36672;
chunk__36669 = G__36673;
count__36670 = G__36674;
i__36671 = G__36675;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36668);
if(temp__4657__auto__){
var seq__36668__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36668__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__36668__$1);
var G__36676 = cljs.core.chunk_rest.call(null,seq__36668__$1);
var G__36677 = c__29271__auto__;
var G__36678 = cljs.core.count.call(null,c__29271__auto__);
var G__36679 = (0);
seq__36668 = G__36676;
chunk__36669 = G__36677;
count__36670 = G__36678;
i__36671 = G__36679;
continue;
} else {
var n = cljs.core.first.call(null,seq__36668__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36680 = cljs.core.next.call(null,seq__36668__$1);
var G__36681 = null;
var G__36682 = (0);
var G__36683 = (0);
seq__36668 = G__36680;
chunk__36669 = G__36681;
count__36670 = G__36682;
i__36671 = G__36683;
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

var seq__36693_36701 = cljs.core.seq.call(null,deps);
var chunk__36694_36702 = null;
var count__36695_36703 = (0);
var i__36696_36704 = (0);
while(true){
if((i__36696_36704 < count__36695_36703)){
var dep_36705 = cljs.core._nth.call(null,chunk__36694_36702,i__36696_36704);
topo_sort_helper_STAR_.call(null,dep_36705,(depth + (1)),state);

var G__36706 = seq__36693_36701;
var G__36707 = chunk__36694_36702;
var G__36708 = count__36695_36703;
var G__36709 = (i__36696_36704 + (1));
seq__36693_36701 = G__36706;
chunk__36694_36702 = G__36707;
count__36695_36703 = G__36708;
i__36696_36704 = G__36709;
continue;
} else {
var temp__4657__auto___36710 = cljs.core.seq.call(null,seq__36693_36701);
if(temp__4657__auto___36710){
var seq__36693_36711__$1 = temp__4657__auto___36710;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36693_36711__$1)){
var c__29271__auto___36712 = cljs.core.chunk_first.call(null,seq__36693_36711__$1);
var G__36713 = cljs.core.chunk_rest.call(null,seq__36693_36711__$1);
var G__36714 = c__29271__auto___36712;
var G__36715 = cljs.core.count.call(null,c__29271__auto___36712);
var G__36716 = (0);
seq__36693_36701 = G__36713;
chunk__36694_36702 = G__36714;
count__36695_36703 = G__36715;
i__36696_36704 = G__36716;
continue;
} else {
var dep_36717 = cljs.core.first.call(null,seq__36693_36711__$1);
topo_sort_helper_STAR_.call(null,dep_36717,(depth + (1)),state);

var G__36718 = cljs.core.next.call(null,seq__36693_36711__$1);
var G__36719 = null;
var G__36720 = (0);
var G__36721 = (0);
seq__36693_36701 = G__36718;
chunk__36694_36702 = G__36719;
count__36695_36703 = G__36720;
i__36696_36704 = G__36721;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36697){
var vec__36698 = p__36697;
var seq__36699 = cljs.core.seq.call(null,vec__36698);
var first__36700 = cljs.core.first.call(null,seq__36699);
var seq__36699__$1 = cljs.core.next.call(null,seq__36699);
var x = first__36700;
var xs = seq__36699__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36698,seq__36699,first__36700,seq__36699__$1,x,xs,get_deps__$1){
return (function (p1__36684_SHARP_){
return clojure.set.difference.call(null,p1__36684_SHARP_,x);
});})(vec__36698,seq__36699,first__36700,seq__36699__$1,x,xs,get_deps__$1))
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
var seq__36722 = cljs.core.seq.call(null,provides);
var chunk__36723 = null;
var count__36724 = (0);
var i__36725 = (0);
while(true){
if((i__36725 < count__36724)){
var prov = cljs.core._nth.call(null,chunk__36723,i__36725);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36726_36734 = cljs.core.seq.call(null,requires);
var chunk__36727_36735 = null;
var count__36728_36736 = (0);
var i__36729_36737 = (0);
while(true){
if((i__36729_36737 < count__36728_36736)){
var req_36738 = cljs.core._nth.call(null,chunk__36727_36735,i__36729_36737);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36738,prov);

var G__36739 = seq__36726_36734;
var G__36740 = chunk__36727_36735;
var G__36741 = count__36728_36736;
var G__36742 = (i__36729_36737 + (1));
seq__36726_36734 = G__36739;
chunk__36727_36735 = G__36740;
count__36728_36736 = G__36741;
i__36729_36737 = G__36742;
continue;
} else {
var temp__4657__auto___36743 = cljs.core.seq.call(null,seq__36726_36734);
if(temp__4657__auto___36743){
var seq__36726_36744__$1 = temp__4657__auto___36743;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36726_36744__$1)){
var c__29271__auto___36745 = cljs.core.chunk_first.call(null,seq__36726_36744__$1);
var G__36746 = cljs.core.chunk_rest.call(null,seq__36726_36744__$1);
var G__36747 = c__29271__auto___36745;
var G__36748 = cljs.core.count.call(null,c__29271__auto___36745);
var G__36749 = (0);
seq__36726_36734 = G__36746;
chunk__36727_36735 = G__36747;
count__36728_36736 = G__36748;
i__36729_36737 = G__36749;
continue;
} else {
var req_36750 = cljs.core.first.call(null,seq__36726_36744__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36750,prov);

var G__36751 = cljs.core.next.call(null,seq__36726_36744__$1);
var G__36752 = null;
var G__36753 = (0);
var G__36754 = (0);
seq__36726_36734 = G__36751;
chunk__36727_36735 = G__36752;
count__36728_36736 = G__36753;
i__36729_36737 = G__36754;
continue;
}
} else {
}
}
break;
}

var G__36755 = seq__36722;
var G__36756 = chunk__36723;
var G__36757 = count__36724;
var G__36758 = (i__36725 + (1));
seq__36722 = G__36755;
chunk__36723 = G__36756;
count__36724 = G__36757;
i__36725 = G__36758;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36722);
if(temp__4657__auto__){
var seq__36722__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36722__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__36722__$1);
var G__36759 = cljs.core.chunk_rest.call(null,seq__36722__$1);
var G__36760 = c__29271__auto__;
var G__36761 = cljs.core.count.call(null,c__29271__auto__);
var G__36762 = (0);
seq__36722 = G__36759;
chunk__36723 = G__36760;
count__36724 = G__36761;
i__36725 = G__36762;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36722__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36730_36763 = cljs.core.seq.call(null,requires);
var chunk__36731_36764 = null;
var count__36732_36765 = (0);
var i__36733_36766 = (0);
while(true){
if((i__36733_36766 < count__36732_36765)){
var req_36767 = cljs.core._nth.call(null,chunk__36731_36764,i__36733_36766);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36767,prov);

var G__36768 = seq__36730_36763;
var G__36769 = chunk__36731_36764;
var G__36770 = count__36732_36765;
var G__36771 = (i__36733_36766 + (1));
seq__36730_36763 = G__36768;
chunk__36731_36764 = G__36769;
count__36732_36765 = G__36770;
i__36733_36766 = G__36771;
continue;
} else {
var temp__4657__auto___36772__$1 = cljs.core.seq.call(null,seq__36730_36763);
if(temp__4657__auto___36772__$1){
var seq__36730_36773__$1 = temp__4657__auto___36772__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36730_36773__$1)){
var c__29271__auto___36774 = cljs.core.chunk_first.call(null,seq__36730_36773__$1);
var G__36775 = cljs.core.chunk_rest.call(null,seq__36730_36773__$1);
var G__36776 = c__29271__auto___36774;
var G__36777 = cljs.core.count.call(null,c__29271__auto___36774);
var G__36778 = (0);
seq__36730_36763 = G__36775;
chunk__36731_36764 = G__36776;
count__36732_36765 = G__36777;
i__36733_36766 = G__36778;
continue;
} else {
var req_36779 = cljs.core.first.call(null,seq__36730_36773__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36779,prov);

var G__36780 = cljs.core.next.call(null,seq__36730_36773__$1);
var G__36781 = null;
var G__36782 = (0);
var G__36783 = (0);
seq__36730_36763 = G__36780;
chunk__36731_36764 = G__36781;
count__36732_36765 = G__36782;
i__36733_36766 = G__36783;
continue;
}
} else {
}
}
break;
}

var G__36784 = cljs.core.next.call(null,seq__36722__$1);
var G__36785 = null;
var G__36786 = (0);
var G__36787 = (0);
seq__36722 = G__36784;
chunk__36723 = G__36785;
count__36724 = G__36786;
i__36725 = G__36787;
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
var seq__36788_36792 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36789_36793 = null;
var count__36790_36794 = (0);
var i__36791_36795 = (0);
while(true){
if((i__36791_36795 < count__36790_36794)){
var ns_36796 = cljs.core._nth.call(null,chunk__36789_36793,i__36791_36795);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36796);

var G__36797 = seq__36788_36792;
var G__36798 = chunk__36789_36793;
var G__36799 = count__36790_36794;
var G__36800 = (i__36791_36795 + (1));
seq__36788_36792 = G__36797;
chunk__36789_36793 = G__36798;
count__36790_36794 = G__36799;
i__36791_36795 = G__36800;
continue;
} else {
var temp__4657__auto___36801 = cljs.core.seq.call(null,seq__36788_36792);
if(temp__4657__auto___36801){
var seq__36788_36802__$1 = temp__4657__auto___36801;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36788_36802__$1)){
var c__29271__auto___36803 = cljs.core.chunk_first.call(null,seq__36788_36802__$1);
var G__36804 = cljs.core.chunk_rest.call(null,seq__36788_36802__$1);
var G__36805 = c__29271__auto___36803;
var G__36806 = cljs.core.count.call(null,c__29271__auto___36803);
var G__36807 = (0);
seq__36788_36792 = G__36804;
chunk__36789_36793 = G__36805;
count__36790_36794 = G__36806;
i__36791_36795 = G__36807;
continue;
} else {
var ns_36808 = cljs.core.first.call(null,seq__36788_36802__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36808);

var G__36809 = cljs.core.next.call(null,seq__36788_36802__$1);
var G__36810 = null;
var G__36811 = (0);
var G__36812 = (0);
seq__36788_36792 = G__36809;
chunk__36789_36793 = G__36810;
count__36790_36794 = G__36811;
i__36791_36795 = G__36812;
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
var G__36813__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36813 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36814__i = 0, G__36814__a = new Array(arguments.length -  0);
while (G__36814__i < G__36814__a.length) {G__36814__a[G__36814__i] = arguments[G__36814__i + 0]; ++G__36814__i;}
  args = new cljs.core.IndexedSeq(G__36814__a,0,null);
} 
return G__36813__delegate.call(this,args);};
G__36813.cljs$lang$maxFixedArity = 0;
G__36813.cljs$lang$applyTo = (function (arglist__36815){
var args = cljs.core.seq(arglist__36815);
return G__36813__delegate(args);
});
G__36813.cljs$core$IFn$_invoke$arity$variadic = G__36813__delegate;
return G__36813;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__36816_SHARP_,p2__36817_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36816_SHARP_)].join('')),p2__36817_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__36818_SHARP_,p2__36819_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36818_SHARP_)].join(''),p2__36819_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36820 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36820.addCallback(((function (G__36820){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36820))
);

G__36820.addErrback(((function (G__36820){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36820))
);

return G__36820;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36821 = cljs.core._EQ_;
var expr__36822 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36821.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36822))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36821,expr__36822){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36821,expr__36822))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36821,expr__36822){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36824){if((e36824 instanceof Error)){
var e = e36824;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36824;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36821,expr__36822))
} else {
if(cljs.core.truth_(pred__36821.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36822))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36821.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36822))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36821.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36822))){
return ((function (pred__36821,expr__36822){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36825){if((e36825 instanceof Error)){
var e = e36825;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36825;

}
}})());
});
;})(pred__36821,expr__36822))
} else {
return ((function (pred__36821,expr__36822){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36821,expr__36822))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36826,callback){
var map__36827 = p__36826;
var map__36827__$1 = ((((!((map__36827 == null)))?((((map__36827.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36827.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36827):map__36827);
var file_msg = map__36827__$1;
var request_url = cljs.core.get.call(null,map__36827__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36827,map__36827__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36827,map__36827__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__33497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto__){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto__){
return (function (state_36851){
var state_val_36852 = (state_36851[(1)]);
if((state_val_36852 === (7))){
var inst_36847 = (state_36851[(2)]);
var state_36851__$1 = state_36851;
var statearr_36853_36870 = state_36851__$1;
(statearr_36853_36870[(2)] = inst_36847);

(statearr_36853_36870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (1))){
var state_36851__$1 = state_36851;
var statearr_36854_36871 = state_36851__$1;
(statearr_36854_36871[(2)] = null);

(statearr_36854_36871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (4))){
var inst_36831 = (state_36851[(7)]);
var inst_36831__$1 = (state_36851[(2)]);
var state_36851__$1 = (function (){var statearr_36855 = state_36851;
(statearr_36855[(7)] = inst_36831__$1);

return statearr_36855;
})();
if(cljs.core.truth_(inst_36831__$1)){
var statearr_36856_36872 = state_36851__$1;
(statearr_36856_36872[(1)] = (5));

} else {
var statearr_36857_36873 = state_36851__$1;
(statearr_36857_36873[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (6))){
var state_36851__$1 = state_36851;
var statearr_36858_36874 = state_36851__$1;
(statearr_36858_36874[(2)] = null);

(statearr_36858_36874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (3))){
var inst_36849 = (state_36851[(2)]);
var state_36851__$1 = state_36851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36851__$1,inst_36849);
} else {
if((state_val_36852 === (2))){
var state_36851__$1 = state_36851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36851__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36852 === (11))){
var inst_36843 = (state_36851[(2)]);
var state_36851__$1 = (function (){var statearr_36859 = state_36851;
(statearr_36859[(8)] = inst_36843);

return statearr_36859;
})();
var statearr_36860_36875 = state_36851__$1;
(statearr_36860_36875[(2)] = null);

(statearr_36860_36875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (9))){
var inst_36835 = (state_36851[(9)]);
var inst_36837 = (state_36851[(10)]);
var inst_36839 = inst_36837.call(null,inst_36835);
var state_36851__$1 = state_36851;
var statearr_36861_36876 = state_36851__$1;
(statearr_36861_36876[(2)] = inst_36839);

(statearr_36861_36876[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (5))){
var inst_36831 = (state_36851[(7)]);
var inst_36833 = figwheel.client.file_reloading.blocking_load.call(null,inst_36831);
var state_36851__$1 = state_36851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36851__$1,(8),inst_36833);
} else {
if((state_val_36852 === (10))){
var inst_36835 = (state_36851[(9)]);
var inst_36841 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36835);
var state_36851__$1 = state_36851;
var statearr_36862_36877 = state_36851__$1;
(statearr_36862_36877[(2)] = inst_36841);

(statearr_36862_36877[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36852 === (8))){
var inst_36837 = (state_36851[(10)]);
var inst_36831 = (state_36851[(7)]);
var inst_36835 = (state_36851[(2)]);
var inst_36836 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36837__$1 = cljs.core.get.call(null,inst_36836,inst_36831);
var state_36851__$1 = (function (){var statearr_36863 = state_36851;
(statearr_36863[(9)] = inst_36835);

(statearr_36863[(10)] = inst_36837__$1);

return statearr_36863;
})();
if(cljs.core.truth_(inst_36837__$1)){
var statearr_36864_36878 = state_36851__$1;
(statearr_36864_36878[(1)] = (9));

} else {
var statearr_36865_36879 = state_36851__$1;
(statearr_36865_36879[(1)] = (10));

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
});})(c__33497__auto__))
;
return ((function (switch__33409__auto__,c__33497__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33410__auto__ = null;
var figwheel$client$file_reloading$state_machine__33410__auto____0 = (function (){
var statearr_36866 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36866[(0)] = figwheel$client$file_reloading$state_machine__33410__auto__);

(statearr_36866[(1)] = (1));

return statearr_36866;
});
var figwheel$client$file_reloading$state_machine__33410__auto____1 = (function (state_36851){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_36851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e36867){if((e36867 instanceof Object)){
var ex__33413__auto__ = e36867;
var statearr_36868_36880 = state_36851;
(statearr_36868_36880[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36881 = state_36851;
state_36851 = G__36881;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33410__auto__ = function(state_36851){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33410__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33410__auto____1.call(this,state_36851);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33410__auto____0;
figwheel$client$file_reloading$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33410__auto____1;
return figwheel$client$file_reloading$state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto__))
})();
var state__33499__auto__ = (function (){var statearr_36869 = f__33498__auto__.call(null);
(statearr_36869[(6)] = c__33497__auto__);

return statearr_36869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto__))
);

return c__33497__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36882,callback){
var map__36883 = p__36882;
var map__36883__$1 = ((((!((map__36883 == null)))?((((map__36883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36883):map__36883);
var file_msg = map__36883__$1;
var namespace = cljs.core.get.call(null,map__36883__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36883,map__36883__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36883,map__36883__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36885){
var map__36886 = p__36885;
var map__36886__$1 = ((((!((map__36886 == null)))?((((map__36886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36886.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36886):map__36886);
var file_msg = map__36886__$1;
var namespace = cljs.core.get.call(null,map__36886__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36888){
var map__36889 = p__36888;
var map__36889__$1 = ((((!((map__36889 == null)))?((((map__36889.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36889.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36889):map__36889);
var file_msg = map__36889__$1;
var namespace = cljs.core.get.call(null,map__36889__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36891,callback){
var map__36892 = p__36891;
var map__36892__$1 = ((((!((map__36892 == null)))?((((map__36892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36892):map__36892);
var file_msg = map__36892__$1;
var request_url = cljs.core.get.call(null,map__36892__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36892__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__33497__auto___36942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___36942,out){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___36942,out){
return (function (state_36927){
var state_val_36928 = (state_36927[(1)]);
if((state_val_36928 === (1))){
var inst_36901 = cljs.core.seq.call(null,files);
var inst_36902 = cljs.core.first.call(null,inst_36901);
var inst_36903 = cljs.core.next.call(null,inst_36901);
var inst_36904 = files;
var state_36927__$1 = (function (){var statearr_36929 = state_36927;
(statearr_36929[(7)] = inst_36902);

(statearr_36929[(8)] = inst_36904);

(statearr_36929[(9)] = inst_36903);

return statearr_36929;
})();
var statearr_36930_36943 = state_36927__$1;
(statearr_36930_36943[(2)] = null);

(statearr_36930_36943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (2))){
var inst_36910 = (state_36927[(10)]);
var inst_36904 = (state_36927[(8)]);
var inst_36909 = cljs.core.seq.call(null,inst_36904);
var inst_36910__$1 = cljs.core.first.call(null,inst_36909);
var inst_36911 = cljs.core.next.call(null,inst_36909);
var inst_36912 = (inst_36910__$1 == null);
var inst_36913 = cljs.core.not.call(null,inst_36912);
var state_36927__$1 = (function (){var statearr_36931 = state_36927;
(statearr_36931[(10)] = inst_36910__$1);

(statearr_36931[(11)] = inst_36911);

return statearr_36931;
})();
if(inst_36913){
var statearr_36932_36944 = state_36927__$1;
(statearr_36932_36944[(1)] = (4));

} else {
var statearr_36933_36945 = state_36927__$1;
(statearr_36933_36945[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (3))){
var inst_36925 = (state_36927[(2)]);
var state_36927__$1 = state_36927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36927__$1,inst_36925);
} else {
if((state_val_36928 === (4))){
var inst_36910 = (state_36927[(10)]);
var inst_36915 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36910);
var state_36927__$1 = state_36927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36927__$1,(7),inst_36915);
} else {
if((state_val_36928 === (5))){
var inst_36921 = cljs.core.async.close_BANG_.call(null,out);
var state_36927__$1 = state_36927;
var statearr_36934_36946 = state_36927__$1;
(statearr_36934_36946[(2)] = inst_36921);

(statearr_36934_36946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (6))){
var inst_36923 = (state_36927[(2)]);
var state_36927__$1 = state_36927;
var statearr_36935_36947 = state_36927__$1;
(statearr_36935_36947[(2)] = inst_36923);

(statearr_36935_36947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36928 === (7))){
var inst_36911 = (state_36927[(11)]);
var inst_36917 = (state_36927[(2)]);
var inst_36918 = cljs.core.async.put_BANG_.call(null,out,inst_36917);
var inst_36904 = inst_36911;
var state_36927__$1 = (function (){var statearr_36936 = state_36927;
(statearr_36936[(8)] = inst_36904);

(statearr_36936[(12)] = inst_36918);

return statearr_36936;
})();
var statearr_36937_36948 = state_36927__$1;
(statearr_36937_36948[(2)] = null);

(statearr_36937_36948[(1)] = (2));


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
});})(c__33497__auto___36942,out))
;
return ((function (switch__33409__auto__,c__33497__auto___36942,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33410__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33410__auto____0 = (function (){
var statearr_36938 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36938[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33410__auto__);

(statearr_36938[(1)] = (1));

return statearr_36938;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33410__auto____1 = (function (state_36927){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_36927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e36939){if((e36939 instanceof Object)){
var ex__33413__auto__ = e36939;
var statearr_36940_36949 = state_36927;
(statearr_36940_36949[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36950 = state_36927;
state_36927 = G__36950;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33410__auto__ = function(state_36927){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33410__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33410__auto____1.call(this,state_36927);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33410__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33410__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___36942,out))
})();
var state__33499__auto__ = (function (){var statearr_36941 = f__33498__auto__.call(null);
(statearr_36941[(6)] = c__33497__auto___36942);

return statearr_36941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___36942,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36951,opts){
var map__36952 = p__36951;
var map__36952__$1 = ((((!((map__36952 == null)))?((((map__36952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36952.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36952):map__36952);
var eval_body = cljs.core.get.call(null,map__36952__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36952__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36954){var e = e36954;
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
return (function (p1__36955_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36955_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36956){
var vec__36957 = p__36956;
var k = cljs.core.nth.call(null,vec__36957,(0),null);
var v = cljs.core.nth.call(null,vec__36957,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36960){
var vec__36961 = p__36960;
var k = cljs.core.nth.call(null,vec__36961,(0),null);
var v = cljs.core.nth.call(null,vec__36961,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36967,p__36968){
var map__36969 = p__36967;
var map__36969__$1 = ((((!((map__36969 == null)))?((((map__36969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36969.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36969):map__36969);
var opts = map__36969__$1;
var before_jsload = cljs.core.get.call(null,map__36969__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36969__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36969__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36970 = p__36968;
var map__36970__$1 = ((((!((map__36970 == null)))?((((map__36970.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36970.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36970):map__36970);
var msg = map__36970__$1;
var files = cljs.core.get.call(null,map__36970__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36970__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36970__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37124){
var state_val_37125 = (state_37124[(1)]);
if((state_val_37125 === (7))){
var inst_36984 = (state_37124[(7)]);
var inst_36985 = (state_37124[(8)]);
var inst_36987 = (state_37124[(9)]);
var inst_36986 = (state_37124[(10)]);
var inst_36992 = cljs.core._nth.call(null,inst_36985,inst_36987);
var inst_36993 = figwheel.client.file_reloading.eval_body.call(null,inst_36992,opts);
var inst_36994 = (inst_36987 + (1));
var tmp37126 = inst_36984;
var tmp37127 = inst_36985;
var tmp37128 = inst_36986;
var inst_36984__$1 = tmp37126;
var inst_36985__$1 = tmp37127;
var inst_36986__$1 = tmp37128;
var inst_36987__$1 = inst_36994;
var state_37124__$1 = (function (){var statearr_37129 = state_37124;
(statearr_37129[(7)] = inst_36984__$1);

(statearr_37129[(8)] = inst_36985__$1);

(statearr_37129[(11)] = inst_36993);

(statearr_37129[(9)] = inst_36987__$1);

(statearr_37129[(10)] = inst_36986__$1);

return statearr_37129;
})();
var statearr_37130_37213 = state_37124__$1;
(statearr_37130_37213[(2)] = null);

(statearr_37130_37213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (20))){
var inst_37027 = (state_37124[(12)]);
var inst_37035 = figwheel.client.file_reloading.sort_files.call(null,inst_37027);
var state_37124__$1 = state_37124;
var statearr_37131_37214 = state_37124__$1;
(statearr_37131_37214[(2)] = inst_37035);

(statearr_37131_37214[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (27))){
var state_37124__$1 = state_37124;
var statearr_37132_37215 = state_37124__$1;
(statearr_37132_37215[(2)] = null);

(statearr_37132_37215[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (1))){
var inst_36976 = (state_37124[(13)]);
var inst_36973 = before_jsload.call(null,files);
var inst_36974 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36975 = (function (){return ((function (inst_36976,inst_36973,inst_36974,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36964_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36964_SHARP_);
});
;})(inst_36976,inst_36973,inst_36974,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36976__$1 = cljs.core.filter.call(null,inst_36975,files);
var inst_36977 = cljs.core.not_empty.call(null,inst_36976__$1);
var state_37124__$1 = (function (){var statearr_37133 = state_37124;
(statearr_37133[(13)] = inst_36976__$1);

(statearr_37133[(14)] = inst_36973);

(statearr_37133[(15)] = inst_36974);

return statearr_37133;
})();
if(cljs.core.truth_(inst_36977)){
var statearr_37134_37216 = state_37124__$1;
(statearr_37134_37216[(1)] = (2));

} else {
var statearr_37135_37217 = state_37124__$1;
(statearr_37135_37217[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (24))){
var state_37124__$1 = state_37124;
var statearr_37136_37218 = state_37124__$1;
(statearr_37136_37218[(2)] = null);

(statearr_37136_37218[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (39))){
var inst_37077 = (state_37124[(16)]);
var state_37124__$1 = state_37124;
var statearr_37137_37219 = state_37124__$1;
(statearr_37137_37219[(2)] = inst_37077);

(statearr_37137_37219[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (46))){
var inst_37119 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37138_37220 = state_37124__$1;
(statearr_37138_37220[(2)] = inst_37119);

(statearr_37138_37220[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (4))){
var inst_37021 = (state_37124[(2)]);
var inst_37022 = cljs.core.List.EMPTY;
var inst_37023 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37022);
var inst_37024 = (function (){return ((function (inst_37021,inst_37022,inst_37023,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36965_SHARP_){
var and__28420__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36965_SHARP_);
if(cljs.core.truth_(and__28420__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36965_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36965_SHARP_)));
} else {
return and__28420__auto__;
}
});
;})(inst_37021,inst_37022,inst_37023,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37025 = cljs.core.filter.call(null,inst_37024,files);
var inst_37026 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37027 = cljs.core.concat.call(null,inst_37025,inst_37026);
var state_37124__$1 = (function (){var statearr_37139 = state_37124;
(statearr_37139[(17)] = inst_37023);

(statearr_37139[(18)] = inst_37021);

(statearr_37139[(12)] = inst_37027);

return statearr_37139;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37140_37221 = state_37124__$1;
(statearr_37140_37221[(1)] = (16));

} else {
var statearr_37141_37222 = state_37124__$1;
(statearr_37141_37222[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (15))){
var inst_37011 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37142_37223 = state_37124__$1;
(statearr_37142_37223[(2)] = inst_37011);

(statearr_37142_37223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (21))){
var inst_37037 = (state_37124[(19)]);
var inst_37037__$1 = (state_37124[(2)]);
var inst_37038 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37037__$1);
var state_37124__$1 = (function (){var statearr_37143 = state_37124;
(statearr_37143[(19)] = inst_37037__$1);

return statearr_37143;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37124__$1,(22),inst_37038);
} else {
if((state_val_37125 === (31))){
var inst_37122 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37124__$1,inst_37122);
} else {
if((state_val_37125 === (32))){
var inst_37077 = (state_37124[(16)]);
var inst_37082 = inst_37077.cljs$lang$protocol_mask$partition0$;
var inst_37083 = (inst_37082 & (64));
var inst_37084 = inst_37077.cljs$core$ISeq$;
var inst_37085 = (cljs.core.PROTOCOL_SENTINEL === inst_37084);
var inst_37086 = (inst_37083) || (inst_37085);
var state_37124__$1 = state_37124;
if(cljs.core.truth_(inst_37086)){
var statearr_37144_37224 = state_37124__$1;
(statearr_37144_37224[(1)] = (35));

} else {
var statearr_37145_37225 = state_37124__$1;
(statearr_37145_37225[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (40))){
var inst_37099 = (state_37124[(20)]);
var inst_37098 = (state_37124[(2)]);
var inst_37099__$1 = cljs.core.get.call(null,inst_37098,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37100 = cljs.core.get.call(null,inst_37098,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37101 = cljs.core.not_empty.call(null,inst_37099__$1);
var state_37124__$1 = (function (){var statearr_37146 = state_37124;
(statearr_37146[(20)] = inst_37099__$1);

(statearr_37146[(21)] = inst_37100);

return statearr_37146;
})();
if(cljs.core.truth_(inst_37101)){
var statearr_37147_37226 = state_37124__$1;
(statearr_37147_37226[(1)] = (41));

} else {
var statearr_37148_37227 = state_37124__$1;
(statearr_37148_37227[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (33))){
var state_37124__$1 = state_37124;
var statearr_37149_37228 = state_37124__$1;
(statearr_37149_37228[(2)] = false);

(statearr_37149_37228[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (13))){
var inst_36997 = (state_37124[(22)]);
var inst_37001 = cljs.core.chunk_first.call(null,inst_36997);
var inst_37002 = cljs.core.chunk_rest.call(null,inst_36997);
var inst_37003 = cljs.core.count.call(null,inst_37001);
var inst_36984 = inst_37002;
var inst_36985 = inst_37001;
var inst_36986 = inst_37003;
var inst_36987 = (0);
var state_37124__$1 = (function (){var statearr_37150 = state_37124;
(statearr_37150[(7)] = inst_36984);

(statearr_37150[(8)] = inst_36985);

(statearr_37150[(9)] = inst_36987);

(statearr_37150[(10)] = inst_36986);

return statearr_37150;
})();
var statearr_37151_37229 = state_37124__$1;
(statearr_37151_37229[(2)] = null);

(statearr_37151_37229[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (22))){
var inst_37041 = (state_37124[(23)]);
var inst_37037 = (state_37124[(19)]);
var inst_37045 = (state_37124[(24)]);
var inst_37040 = (state_37124[(25)]);
var inst_37040__$1 = (state_37124[(2)]);
var inst_37041__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37040__$1);
var inst_37042 = (function (){var all_files = inst_37037;
var res_SINGLEQUOTE_ = inst_37040__$1;
var res = inst_37041__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37041,inst_37037,inst_37045,inst_37040,inst_37040__$1,inst_37041__$1,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36966_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36966_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37041,inst_37037,inst_37045,inst_37040,inst_37040__$1,inst_37041__$1,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37043 = cljs.core.filter.call(null,inst_37042,inst_37040__$1);
var inst_37044 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37045__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37044);
var inst_37046 = cljs.core.not_empty.call(null,inst_37045__$1);
var state_37124__$1 = (function (){var statearr_37152 = state_37124;
(statearr_37152[(23)] = inst_37041__$1);

(statearr_37152[(26)] = inst_37043);

(statearr_37152[(24)] = inst_37045__$1);

(statearr_37152[(25)] = inst_37040__$1);

return statearr_37152;
})();
if(cljs.core.truth_(inst_37046)){
var statearr_37153_37230 = state_37124__$1;
(statearr_37153_37230[(1)] = (23));

} else {
var statearr_37154_37231 = state_37124__$1;
(statearr_37154_37231[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (36))){
var state_37124__$1 = state_37124;
var statearr_37155_37232 = state_37124__$1;
(statearr_37155_37232[(2)] = false);

(statearr_37155_37232[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (41))){
var inst_37099 = (state_37124[(20)]);
var inst_37103 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37104 = cljs.core.map.call(null,inst_37103,inst_37099);
var inst_37105 = cljs.core.pr_str.call(null,inst_37104);
var inst_37106 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37105)].join('');
var inst_37107 = figwheel.client.utils.log.call(null,inst_37106);
var state_37124__$1 = state_37124;
var statearr_37156_37233 = state_37124__$1;
(statearr_37156_37233[(2)] = inst_37107);

(statearr_37156_37233[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (43))){
var inst_37100 = (state_37124[(21)]);
var inst_37110 = (state_37124[(2)]);
var inst_37111 = cljs.core.not_empty.call(null,inst_37100);
var state_37124__$1 = (function (){var statearr_37157 = state_37124;
(statearr_37157[(27)] = inst_37110);

return statearr_37157;
})();
if(cljs.core.truth_(inst_37111)){
var statearr_37158_37234 = state_37124__$1;
(statearr_37158_37234[(1)] = (44));

} else {
var statearr_37159_37235 = state_37124__$1;
(statearr_37159_37235[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (29))){
var inst_37077 = (state_37124[(16)]);
var inst_37041 = (state_37124[(23)]);
var inst_37043 = (state_37124[(26)]);
var inst_37037 = (state_37124[(19)]);
var inst_37045 = (state_37124[(24)]);
var inst_37040 = (state_37124[(25)]);
var inst_37073 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37076 = (function (){var all_files = inst_37037;
var res_SINGLEQUOTE_ = inst_37040;
var res = inst_37041;
var files_not_loaded = inst_37043;
var dependencies_that_loaded = inst_37045;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37077,inst_37041,inst_37043,inst_37037,inst_37045,inst_37040,inst_37073,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37075){
var map__37160 = p__37075;
var map__37160__$1 = ((((!((map__37160 == null)))?((((map__37160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37160.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37160):map__37160);
var namespace = cljs.core.get.call(null,map__37160__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37077,inst_37041,inst_37043,inst_37037,inst_37045,inst_37040,inst_37073,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37077__$1 = cljs.core.group_by.call(null,inst_37076,inst_37043);
var inst_37079 = (inst_37077__$1 == null);
var inst_37080 = cljs.core.not.call(null,inst_37079);
var state_37124__$1 = (function (){var statearr_37162 = state_37124;
(statearr_37162[(16)] = inst_37077__$1);

(statearr_37162[(28)] = inst_37073);

return statearr_37162;
})();
if(inst_37080){
var statearr_37163_37236 = state_37124__$1;
(statearr_37163_37236[(1)] = (32));

} else {
var statearr_37164_37237 = state_37124__$1;
(statearr_37164_37237[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (44))){
var inst_37100 = (state_37124[(21)]);
var inst_37113 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37100);
var inst_37114 = cljs.core.pr_str.call(null,inst_37113);
var inst_37115 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37114)].join('');
var inst_37116 = figwheel.client.utils.log.call(null,inst_37115);
var state_37124__$1 = state_37124;
var statearr_37165_37238 = state_37124__$1;
(statearr_37165_37238[(2)] = inst_37116);

(statearr_37165_37238[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (6))){
var inst_37018 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37166_37239 = state_37124__$1;
(statearr_37166_37239[(2)] = inst_37018);

(statearr_37166_37239[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (28))){
var inst_37043 = (state_37124[(26)]);
var inst_37070 = (state_37124[(2)]);
var inst_37071 = cljs.core.not_empty.call(null,inst_37043);
var state_37124__$1 = (function (){var statearr_37167 = state_37124;
(statearr_37167[(29)] = inst_37070);

return statearr_37167;
})();
if(cljs.core.truth_(inst_37071)){
var statearr_37168_37240 = state_37124__$1;
(statearr_37168_37240[(1)] = (29));

} else {
var statearr_37169_37241 = state_37124__$1;
(statearr_37169_37241[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (25))){
var inst_37041 = (state_37124[(23)]);
var inst_37057 = (state_37124[(2)]);
var inst_37058 = cljs.core.not_empty.call(null,inst_37041);
var state_37124__$1 = (function (){var statearr_37170 = state_37124;
(statearr_37170[(30)] = inst_37057);

return statearr_37170;
})();
if(cljs.core.truth_(inst_37058)){
var statearr_37171_37242 = state_37124__$1;
(statearr_37171_37242[(1)] = (26));

} else {
var statearr_37172_37243 = state_37124__$1;
(statearr_37172_37243[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (34))){
var inst_37093 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
if(cljs.core.truth_(inst_37093)){
var statearr_37173_37244 = state_37124__$1;
(statearr_37173_37244[(1)] = (38));

} else {
var statearr_37174_37245 = state_37124__$1;
(statearr_37174_37245[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (17))){
var state_37124__$1 = state_37124;
var statearr_37175_37246 = state_37124__$1;
(statearr_37175_37246[(2)] = recompile_dependents);

(statearr_37175_37246[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (3))){
var state_37124__$1 = state_37124;
var statearr_37176_37247 = state_37124__$1;
(statearr_37176_37247[(2)] = null);

(statearr_37176_37247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (12))){
var inst_37014 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37177_37248 = state_37124__$1;
(statearr_37177_37248[(2)] = inst_37014);

(statearr_37177_37248[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (2))){
var inst_36976 = (state_37124[(13)]);
var inst_36983 = cljs.core.seq.call(null,inst_36976);
var inst_36984 = inst_36983;
var inst_36985 = null;
var inst_36986 = (0);
var inst_36987 = (0);
var state_37124__$1 = (function (){var statearr_37178 = state_37124;
(statearr_37178[(7)] = inst_36984);

(statearr_37178[(8)] = inst_36985);

(statearr_37178[(9)] = inst_36987);

(statearr_37178[(10)] = inst_36986);

return statearr_37178;
})();
var statearr_37179_37249 = state_37124__$1;
(statearr_37179_37249[(2)] = null);

(statearr_37179_37249[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (23))){
var inst_37041 = (state_37124[(23)]);
var inst_37043 = (state_37124[(26)]);
var inst_37037 = (state_37124[(19)]);
var inst_37045 = (state_37124[(24)]);
var inst_37040 = (state_37124[(25)]);
var inst_37048 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37050 = (function (){var all_files = inst_37037;
var res_SINGLEQUOTE_ = inst_37040;
var res = inst_37041;
var files_not_loaded = inst_37043;
var dependencies_that_loaded = inst_37045;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37041,inst_37043,inst_37037,inst_37045,inst_37040,inst_37048,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37049){
var map__37180 = p__37049;
var map__37180__$1 = ((((!((map__37180 == null)))?((((map__37180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37180.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37180):map__37180);
var request_url = cljs.core.get.call(null,map__37180__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37041,inst_37043,inst_37037,inst_37045,inst_37040,inst_37048,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37051 = cljs.core.reverse.call(null,inst_37045);
var inst_37052 = cljs.core.map.call(null,inst_37050,inst_37051);
var inst_37053 = cljs.core.pr_str.call(null,inst_37052);
var inst_37054 = figwheel.client.utils.log.call(null,inst_37053);
var state_37124__$1 = (function (){var statearr_37182 = state_37124;
(statearr_37182[(31)] = inst_37048);

return statearr_37182;
})();
var statearr_37183_37250 = state_37124__$1;
(statearr_37183_37250[(2)] = inst_37054);

(statearr_37183_37250[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (35))){
var state_37124__$1 = state_37124;
var statearr_37184_37251 = state_37124__$1;
(statearr_37184_37251[(2)] = true);

(statearr_37184_37251[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (19))){
var inst_37027 = (state_37124[(12)]);
var inst_37033 = figwheel.client.file_reloading.expand_files.call(null,inst_37027);
var state_37124__$1 = state_37124;
var statearr_37185_37252 = state_37124__$1;
(statearr_37185_37252[(2)] = inst_37033);

(statearr_37185_37252[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (11))){
var state_37124__$1 = state_37124;
var statearr_37186_37253 = state_37124__$1;
(statearr_37186_37253[(2)] = null);

(statearr_37186_37253[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (9))){
var inst_37016 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37187_37254 = state_37124__$1;
(statearr_37187_37254[(2)] = inst_37016);

(statearr_37187_37254[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (5))){
var inst_36987 = (state_37124[(9)]);
var inst_36986 = (state_37124[(10)]);
var inst_36989 = (inst_36987 < inst_36986);
var inst_36990 = inst_36989;
var state_37124__$1 = state_37124;
if(cljs.core.truth_(inst_36990)){
var statearr_37188_37255 = state_37124__$1;
(statearr_37188_37255[(1)] = (7));

} else {
var statearr_37189_37256 = state_37124__$1;
(statearr_37189_37256[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (14))){
var inst_36997 = (state_37124[(22)]);
var inst_37006 = cljs.core.first.call(null,inst_36997);
var inst_37007 = figwheel.client.file_reloading.eval_body.call(null,inst_37006,opts);
var inst_37008 = cljs.core.next.call(null,inst_36997);
var inst_36984 = inst_37008;
var inst_36985 = null;
var inst_36986 = (0);
var inst_36987 = (0);
var state_37124__$1 = (function (){var statearr_37190 = state_37124;
(statearr_37190[(7)] = inst_36984);

(statearr_37190[(8)] = inst_36985);

(statearr_37190[(9)] = inst_36987);

(statearr_37190[(10)] = inst_36986);

(statearr_37190[(32)] = inst_37007);

return statearr_37190;
})();
var statearr_37191_37257 = state_37124__$1;
(statearr_37191_37257[(2)] = null);

(statearr_37191_37257[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (45))){
var state_37124__$1 = state_37124;
var statearr_37192_37258 = state_37124__$1;
(statearr_37192_37258[(2)] = null);

(statearr_37192_37258[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (26))){
var inst_37041 = (state_37124[(23)]);
var inst_37043 = (state_37124[(26)]);
var inst_37037 = (state_37124[(19)]);
var inst_37045 = (state_37124[(24)]);
var inst_37040 = (state_37124[(25)]);
var inst_37060 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37062 = (function (){var all_files = inst_37037;
var res_SINGLEQUOTE_ = inst_37040;
var res = inst_37041;
var files_not_loaded = inst_37043;
var dependencies_that_loaded = inst_37045;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37041,inst_37043,inst_37037,inst_37045,inst_37040,inst_37060,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37061){
var map__37193 = p__37061;
var map__37193__$1 = ((((!((map__37193 == null)))?((((map__37193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37193.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37193):map__37193);
var namespace = cljs.core.get.call(null,map__37193__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37193__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37041,inst_37043,inst_37037,inst_37045,inst_37040,inst_37060,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37063 = cljs.core.map.call(null,inst_37062,inst_37041);
var inst_37064 = cljs.core.pr_str.call(null,inst_37063);
var inst_37065 = figwheel.client.utils.log.call(null,inst_37064);
var inst_37066 = (function (){var all_files = inst_37037;
var res_SINGLEQUOTE_ = inst_37040;
var res = inst_37041;
var files_not_loaded = inst_37043;
var dependencies_that_loaded = inst_37045;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37041,inst_37043,inst_37037,inst_37045,inst_37040,inst_37060,inst_37062,inst_37063,inst_37064,inst_37065,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37041,inst_37043,inst_37037,inst_37045,inst_37040,inst_37060,inst_37062,inst_37063,inst_37064,inst_37065,state_val_37125,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37067 = setTimeout(inst_37066,(10));
var state_37124__$1 = (function (){var statearr_37195 = state_37124;
(statearr_37195[(33)] = inst_37065);

(statearr_37195[(34)] = inst_37060);

return statearr_37195;
})();
var statearr_37196_37259 = state_37124__$1;
(statearr_37196_37259[(2)] = inst_37067);

(statearr_37196_37259[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (16))){
var state_37124__$1 = state_37124;
var statearr_37197_37260 = state_37124__$1;
(statearr_37197_37260[(2)] = reload_dependents);

(statearr_37197_37260[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (38))){
var inst_37077 = (state_37124[(16)]);
var inst_37095 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37077);
var state_37124__$1 = state_37124;
var statearr_37198_37261 = state_37124__$1;
(statearr_37198_37261[(2)] = inst_37095);

(statearr_37198_37261[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (30))){
var state_37124__$1 = state_37124;
var statearr_37199_37262 = state_37124__$1;
(statearr_37199_37262[(2)] = null);

(statearr_37199_37262[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (10))){
var inst_36997 = (state_37124[(22)]);
var inst_36999 = cljs.core.chunked_seq_QMARK_.call(null,inst_36997);
var state_37124__$1 = state_37124;
if(inst_36999){
var statearr_37200_37263 = state_37124__$1;
(statearr_37200_37263[(1)] = (13));

} else {
var statearr_37201_37264 = state_37124__$1;
(statearr_37201_37264[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (18))){
var inst_37031 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
if(cljs.core.truth_(inst_37031)){
var statearr_37202_37265 = state_37124__$1;
(statearr_37202_37265[(1)] = (19));

} else {
var statearr_37203_37266 = state_37124__$1;
(statearr_37203_37266[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (42))){
var state_37124__$1 = state_37124;
var statearr_37204_37267 = state_37124__$1;
(statearr_37204_37267[(2)] = null);

(statearr_37204_37267[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (37))){
var inst_37090 = (state_37124[(2)]);
var state_37124__$1 = state_37124;
var statearr_37205_37268 = state_37124__$1;
(statearr_37205_37268[(2)] = inst_37090);

(statearr_37205_37268[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37125 === (8))){
var inst_36984 = (state_37124[(7)]);
var inst_36997 = (state_37124[(22)]);
var inst_36997__$1 = cljs.core.seq.call(null,inst_36984);
var state_37124__$1 = (function (){var statearr_37206 = state_37124;
(statearr_37206[(22)] = inst_36997__$1);

return statearr_37206;
})();
if(inst_36997__$1){
var statearr_37207_37269 = state_37124__$1;
(statearr_37207_37269[(1)] = (10));

} else {
var statearr_37208_37270 = state_37124__$1;
(statearr_37208_37270[(1)] = (11));

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
});})(c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33409__auto__,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33410__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33410__auto____0 = (function (){
var statearr_37209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37209[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33410__auto__);

(statearr_37209[(1)] = (1));

return statearr_37209;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33410__auto____1 = (function (state_37124){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_37124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e37210){if((e37210 instanceof Object)){
var ex__33413__auto__ = e37210;
var statearr_37211_37271 = state_37124;
(statearr_37211_37271[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37210;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37272 = state_37124;
state_37124 = G__37272;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33410__auto__ = function(state_37124){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33410__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33410__auto____1.call(this,state_37124);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33410__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33410__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33499__auto__ = (function (){var statearr_37212 = f__33498__auto__.call(null);
(statearr_37212[(6)] = c__33497__auto__);

return statearr_37212;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto__,map__36969,map__36969__$1,opts,before_jsload,on_jsload,reload_dependents,map__36970,map__36970__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33497__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37275,link){
var map__37276 = p__37275;
var map__37276__$1 = ((((!((map__37276 == null)))?((((map__37276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37276.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37276):map__37276);
var file = cljs.core.get.call(null,map__37276__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37276,map__37276__$1,file){
return (function (p1__37273_SHARP_,p2__37274_SHARP_){
if(cljs.core._EQ_.call(null,p1__37273_SHARP_,p2__37274_SHARP_)){
return p1__37273_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37276,map__37276__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37279){
var map__37280 = p__37279;
var map__37280__$1 = ((((!((map__37280 == null)))?((((map__37280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37280.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37280):map__37280);
var match_length = cljs.core.get.call(null,map__37280__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37280__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37278_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37278_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37282_SHARP_,p2__37283_SHARP_){
return cljs.core.assoc.call(null,p1__37282_SHARP_,cljs.core.get.call(null,p2__37283_SHARP_,key),p2__37283_SHARP_);
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
var loaded_f_datas_37284 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37284);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37284);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37285,p__37286){
var map__37287 = p__37285;
var map__37287__$1 = ((((!((map__37287 == null)))?((((map__37287.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37287.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37287):map__37287);
var on_cssload = cljs.core.get.call(null,map__37287__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37288 = p__37286;
var map__37288__$1 = ((((!((map__37288 == null)))?((((map__37288.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37288.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37288):map__37288);
var files_msg = map__37288__$1;
var files = cljs.core.get.call(null,map__37288__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1572992070832
