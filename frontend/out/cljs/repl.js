// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38884){
var map__38885 = p__38884;
var map__38885__$1 = ((((!((map__38885 == null)))?((((map__38885.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38885.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38885):map__38885);
var m = map__38885__$1;
var n = cljs.core.get.call(null,map__38885__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38885__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38887_38909 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38888_38910 = null;
var count__38889_38911 = (0);
var i__38890_38912 = (0);
while(true){
if((i__38890_38912 < count__38889_38911)){
var f_38913 = cljs.core._nth.call(null,chunk__38888_38910,i__38890_38912);
cljs.core.println.call(null,"  ",f_38913);

var G__38914 = seq__38887_38909;
var G__38915 = chunk__38888_38910;
var G__38916 = count__38889_38911;
var G__38917 = (i__38890_38912 + (1));
seq__38887_38909 = G__38914;
chunk__38888_38910 = G__38915;
count__38889_38911 = G__38916;
i__38890_38912 = G__38917;
continue;
} else {
var temp__4657__auto___38918 = cljs.core.seq.call(null,seq__38887_38909);
if(temp__4657__auto___38918){
var seq__38887_38919__$1 = temp__4657__auto___38918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38887_38919__$1)){
var c__29271__auto___38920 = cljs.core.chunk_first.call(null,seq__38887_38919__$1);
var G__38921 = cljs.core.chunk_rest.call(null,seq__38887_38919__$1);
var G__38922 = c__29271__auto___38920;
var G__38923 = cljs.core.count.call(null,c__29271__auto___38920);
var G__38924 = (0);
seq__38887_38909 = G__38921;
chunk__38888_38910 = G__38922;
count__38889_38911 = G__38923;
i__38890_38912 = G__38924;
continue;
} else {
var f_38925 = cljs.core.first.call(null,seq__38887_38919__$1);
cljs.core.println.call(null,"  ",f_38925);

var G__38926 = cljs.core.next.call(null,seq__38887_38919__$1);
var G__38927 = null;
var G__38928 = (0);
var G__38929 = (0);
seq__38887_38909 = G__38926;
chunk__38888_38910 = G__38927;
count__38889_38911 = G__38928;
i__38890_38912 = G__38929;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38930 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28432__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38930);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38930)))?cljs.core.second.call(null,arglists_38930):arglists_38930));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38891_38931 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38892_38932 = null;
var count__38893_38933 = (0);
var i__38894_38934 = (0);
while(true){
if((i__38894_38934 < count__38893_38933)){
var vec__38895_38935 = cljs.core._nth.call(null,chunk__38892_38932,i__38894_38934);
var name_38936 = cljs.core.nth.call(null,vec__38895_38935,(0),null);
var map__38898_38937 = cljs.core.nth.call(null,vec__38895_38935,(1),null);
var map__38898_38938__$1 = ((((!((map__38898_38937 == null)))?((((map__38898_38937.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38898_38937.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38898_38937):map__38898_38937);
var doc_38939 = cljs.core.get.call(null,map__38898_38938__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38940 = cljs.core.get.call(null,map__38898_38938__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38936);

cljs.core.println.call(null," ",arglists_38940);

if(cljs.core.truth_(doc_38939)){
cljs.core.println.call(null," ",doc_38939);
} else {
}

var G__38941 = seq__38891_38931;
var G__38942 = chunk__38892_38932;
var G__38943 = count__38893_38933;
var G__38944 = (i__38894_38934 + (1));
seq__38891_38931 = G__38941;
chunk__38892_38932 = G__38942;
count__38893_38933 = G__38943;
i__38894_38934 = G__38944;
continue;
} else {
var temp__4657__auto___38945 = cljs.core.seq.call(null,seq__38891_38931);
if(temp__4657__auto___38945){
var seq__38891_38946__$1 = temp__4657__auto___38945;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38891_38946__$1)){
var c__29271__auto___38947 = cljs.core.chunk_first.call(null,seq__38891_38946__$1);
var G__38948 = cljs.core.chunk_rest.call(null,seq__38891_38946__$1);
var G__38949 = c__29271__auto___38947;
var G__38950 = cljs.core.count.call(null,c__29271__auto___38947);
var G__38951 = (0);
seq__38891_38931 = G__38948;
chunk__38892_38932 = G__38949;
count__38893_38933 = G__38950;
i__38894_38934 = G__38951;
continue;
} else {
var vec__38900_38952 = cljs.core.first.call(null,seq__38891_38946__$1);
var name_38953 = cljs.core.nth.call(null,vec__38900_38952,(0),null);
var map__38903_38954 = cljs.core.nth.call(null,vec__38900_38952,(1),null);
var map__38903_38955__$1 = ((((!((map__38903_38954 == null)))?((((map__38903_38954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38903_38954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38903_38954):map__38903_38954);
var doc_38956 = cljs.core.get.call(null,map__38903_38955__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38957 = cljs.core.get.call(null,map__38903_38955__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38953);

cljs.core.println.call(null," ",arglists_38957);

if(cljs.core.truth_(doc_38956)){
cljs.core.println.call(null," ",doc_38956);
} else {
}

var G__38958 = cljs.core.next.call(null,seq__38891_38946__$1);
var G__38959 = null;
var G__38960 = (0);
var G__38961 = (0);
seq__38891_38931 = G__38958;
chunk__38892_38932 = G__38959;
count__38893_38933 = G__38960;
i__38894_38934 = G__38961;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__38905 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38906 = null;
var count__38907 = (0);
var i__38908 = (0);
while(true){
if((i__38908 < count__38907)){
var role = cljs.core._nth.call(null,chunk__38906,i__38908);
var temp__4657__auto___38962__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38962__$1)){
var spec_38963 = temp__4657__auto___38962__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38963));
} else {
}

var G__38964 = seq__38905;
var G__38965 = chunk__38906;
var G__38966 = count__38907;
var G__38967 = (i__38908 + (1));
seq__38905 = G__38964;
chunk__38906 = G__38965;
count__38907 = G__38966;
i__38908 = G__38967;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38905);
if(temp__4657__auto____$1){
var seq__38905__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38905__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__38905__$1);
var G__38968 = cljs.core.chunk_rest.call(null,seq__38905__$1);
var G__38969 = c__29271__auto__;
var G__38970 = cljs.core.count.call(null,c__29271__auto__);
var G__38971 = (0);
seq__38905 = G__38968;
chunk__38906 = G__38969;
count__38907 = G__38970;
i__38908 = G__38971;
continue;
} else {
var role = cljs.core.first.call(null,seq__38905__$1);
var temp__4657__auto___38972__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38972__$2)){
var spec_38973 = temp__4657__auto___38972__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38973));
} else {
}

var G__38974 = cljs.core.next.call(null,seq__38905__$1);
var G__38975 = null;
var G__38976 = (0);
var G__38977 = (0);
seq__38905 = G__38974;
chunk__38906 = G__38975;
count__38907 = G__38976;
i__38908 = G__38977;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1573832705507
