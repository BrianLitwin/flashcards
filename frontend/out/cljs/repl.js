// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38089){
var map__38090 = p__38089;
var map__38090__$1 = ((((!((map__38090 == null)))?((((map__38090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38090):map__38090);
var m = map__38090__$1;
var n = cljs.core.get.call(null,map__38090__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38090__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38092_38114 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38093_38115 = null;
var count__38094_38116 = (0);
var i__38095_38117 = (0);
while(true){
if((i__38095_38117 < count__38094_38116)){
var f_38118 = cljs.core._nth.call(null,chunk__38093_38115,i__38095_38117);
cljs.core.println.call(null,"  ",f_38118);

var G__38119 = seq__38092_38114;
var G__38120 = chunk__38093_38115;
var G__38121 = count__38094_38116;
var G__38122 = (i__38095_38117 + (1));
seq__38092_38114 = G__38119;
chunk__38093_38115 = G__38120;
count__38094_38116 = G__38121;
i__38095_38117 = G__38122;
continue;
} else {
var temp__4657__auto___38123 = cljs.core.seq.call(null,seq__38092_38114);
if(temp__4657__auto___38123){
var seq__38092_38124__$1 = temp__4657__auto___38123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38092_38124__$1)){
var c__29271__auto___38125 = cljs.core.chunk_first.call(null,seq__38092_38124__$1);
var G__38126 = cljs.core.chunk_rest.call(null,seq__38092_38124__$1);
var G__38127 = c__29271__auto___38125;
var G__38128 = cljs.core.count.call(null,c__29271__auto___38125);
var G__38129 = (0);
seq__38092_38114 = G__38126;
chunk__38093_38115 = G__38127;
count__38094_38116 = G__38128;
i__38095_38117 = G__38129;
continue;
} else {
var f_38130 = cljs.core.first.call(null,seq__38092_38124__$1);
cljs.core.println.call(null,"  ",f_38130);

var G__38131 = cljs.core.next.call(null,seq__38092_38124__$1);
var G__38132 = null;
var G__38133 = (0);
var G__38134 = (0);
seq__38092_38114 = G__38131;
chunk__38093_38115 = G__38132;
count__38094_38116 = G__38133;
i__38095_38117 = G__38134;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38135 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28432__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38135);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38135)))?cljs.core.second.call(null,arglists_38135):arglists_38135));
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
var seq__38096_38136 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38097_38137 = null;
var count__38098_38138 = (0);
var i__38099_38139 = (0);
while(true){
if((i__38099_38139 < count__38098_38138)){
var vec__38100_38140 = cljs.core._nth.call(null,chunk__38097_38137,i__38099_38139);
var name_38141 = cljs.core.nth.call(null,vec__38100_38140,(0),null);
var map__38103_38142 = cljs.core.nth.call(null,vec__38100_38140,(1),null);
var map__38103_38143__$1 = ((((!((map__38103_38142 == null)))?((((map__38103_38142.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38103_38142.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38103_38142):map__38103_38142);
var doc_38144 = cljs.core.get.call(null,map__38103_38143__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38145 = cljs.core.get.call(null,map__38103_38143__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38141);

cljs.core.println.call(null," ",arglists_38145);

if(cljs.core.truth_(doc_38144)){
cljs.core.println.call(null," ",doc_38144);
} else {
}

var G__38146 = seq__38096_38136;
var G__38147 = chunk__38097_38137;
var G__38148 = count__38098_38138;
var G__38149 = (i__38099_38139 + (1));
seq__38096_38136 = G__38146;
chunk__38097_38137 = G__38147;
count__38098_38138 = G__38148;
i__38099_38139 = G__38149;
continue;
} else {
var temp__4657__auto___38150 = cljs.core.seq.call(null,seq__38096_38136);
if(temp__4657__auto___38150){
var seq__38096_38151__$1 = temp__4657__auto___38150;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38096_38151__$1)){
var c__29271__auto___38152 = cljs.core.chunk_first.call(null,seq__38096_38151__$1);
var G__38153 = cljs.core.chunk_rest.call(null,seq__38096_38151__$1);
var G__38154 = c__29271__auto___38152;
var G__38155 = cljs.core.count.call(null,c__29271__auto___38152);
var G__38156 = (0);
seq__38096_38136 = G__38153;
chunk__38097_38137 = G__38154;
count__38098_38138 = G__38155;
i__38099_38139 = G__38156;
continue;
} else {
var vec__38105_38157 = cljs.core.first.call(null,seq__38096_38151__$1);
var name_38158 = cljs.core.nth.call(null,vec__38105_38157,(0),null);
var map__38108_38159 = cljs.core.nth.call(null,vec__38105_38157,(1),null);
var map__38108_38160__$1 = ((((!((map__38108_38159 == null)))?((((map__38108_38159.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38108_38159.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38108_38159):map__38108_38159);
var doc_38161 = cljs.core.get.call(null,map__38108_38160__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38162 = cljs.core.get.call(null,map__38108_38160__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38158);

cljs.core.println.call(null," ",arglists_38162);

if(cljs.core.truth_(doc_38161)){
cljs.core.println.call(null," ",doc_38161);
} else {
}

var G__38163 = cljs.core.next.call(null,seq__38096_38151__$1);
var G__38164 = null;
var G__38165 = (0);
var G__38166 = (0);
seq__38096_38136 = G__38163;
chunk__38097_38137 = G__38164;
count__38098_38138 = G__38165;
i__38099_38139 = G__38166;
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

var seq__38110 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38111 = null;
var count__38112 = (0);
var i__38113 = (0);
while(true){
if((i__38113 < count__38112)){
var role = cljs.core._nth.call(null,chunk__38111,i__38113);
var temp__4657__auto___38167__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38167__$1)){
var spec_38168 = temp__4657__auto___38167__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38168));
} else {
}

var G__38169 = seq__38110;
var G__38170 = chunk__38111;
var G__38171 = count__38112;
var G__38172 = (i__38113 + (1));
seq__38110 = G__38169;
chunk__38111 = G__38170;
count__38112 = G__38171;
i__38113 = G__38172;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38110);
if(temp__4657__auto____$1){
var seq__38110__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38110__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__38110__$1);
var G__38173 = cljs.core.chunk_rest.call(null,seq__38110__$1);
var G__38174 = c__29271__auto__;
var G__38175 = cljs.core.count.call(null,c__29271__auto__);
var G__38176 = (0);
seq__38110 = G__38173;
chunk__38111 = G__38174;
count__38112 = G__38175;
i__38113 = G__38176;
continue;
} else {
var role = cljs.core.first.call(null,seq__38110__$1);
var temp__4657__auto___38177__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___38177__$2)){
var spec_38178 = temp__4657__auto___38177__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38178));
} else {
}

var G__38179 = cljs.core.next.call(null,seq__38110__$1);
var G__38180 = null;
var G__38181 = (0);
var G__38182 = (0);
seq__38110 = G__38179;
chunk__38111 = G__38180;
count__38112 = G__38181;
i__38113 = G__38182;
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

//# sourceMappingURL=repl.js.map?rel=1572992072218
