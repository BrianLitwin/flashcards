// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.reader');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.tools.reader');
goog.require('cljs.tools.reader.edn');
goog.require('goog.string.StringBuffer');
cljs.reader.zero_fill_right_and_truncate = (function cljs$reader$zero_fill_right_and_truncate(s,width){
if(cljs.core._EQ_.call(null,width,cljs.core.count.call(null,s))){
return s;
} else {
if((width < cljs.core.count.call(null,s))){
return cljs.core.subs.call(null,s,(0),width);
} else {
var b = (new goog.string.StringBuffer(s));
while(true){
if((b.getLength() < width)){
var G__36527 = b.append("0");
b = G__36527;
continue;
} else {
return b.toString();
}
break;
}

}
}
});
cljs.reader.divisible_QMARK_ = (function cljs$reader$divisible_QMARK_(num,div){
return (cljs.core.mod.call(null,num,div) === (0));
});
cljs.reader.indivisible_QMARK_ = (function cljs$reader$indivisible_QMARK_(num,div){
return cljs.core.not.call(null,cljs.reader.divisible_QMARK_.call(null,num,div));
});
cljs.reader.leap_year_QMARK_ = (function cljs$reader$leap_year_QMARK_(year){
var and__28420__auto__ = cljs.reader.divisible_QMARK_.call(null,year,(4));
if(cljs.core.truth_(and__28420__auto__)){
var or__28432__auto__ = cljs.reader.indivisible_QMARK_.call(null,year,(100));
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return cljs.reader.divisible_QMARK_.call(null,year,(400));
}
} else {
return and__28420__auto__;
}
});
cljs.reader.days_in_month = (function (){var dim_norm = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
var dim_leap = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,(31),(29),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
return ((function (dim_norm,dim_leap){
return (function (month,leap_year_QMARK_){
return cljs.core.get.call(null,(cljs.core.truth_(leap_year_QMARK_)?dim_leap:dim_norm),month);
});
;})(dim_norm,dim_leap))
})();
cljs.reader.timestamp_regex = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
cljs.reader.parse_int = (function cljs$reader$parse_int(s){
var n = parseInt(s,(10));
if(cljs.core.not.call(null,isNaN(n))){
return n;
} else {
return null;
}
});
cljs.reader.check = (function cljs$reader$check(low,n,high,msg){
if(((low <= n)) && ((n <= high))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," Failed:  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(low),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),"<=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high)].join('')));
}

return n;
});
cljs.reader.parse_and_validate_timestamp = (function cljs$reader$parse_and_validate_timestamp(s){
var vec__36528 = cljs.core.re_matches.call(null,cljs.reader.timestamp_regex,s);
var _ = cljs.core.nth.call(null,vec__36528,(0),null);
var years = cljs.core.nth.call(null,vec__36528,(1),null);
var months = cljs.core.nth.call(null,vec__36528,(2),null);
var days = cljs.core.nth.call(null,vec__36528,(3),null);
var hours = cljs.core.nth.call(null,vec__36528,(4),null);
var minutes = cljs.core.nth.call(null,vec__36528,(5),null);
var seconds = cljs.core.nth.call(null,vec__36528,(6),null);
var fraction = cljs.core.nth.call(null,vec__36528,(7),null);
var offset_sign = cljs.core.nth.call(null,vec__36528,(8),null);
var offset_hours = cljs.core.nth.call(null,vec__36528,(9),null);
var offset_minutes = cljs.core.nth.call(null,vec__36528,(10),null);
var v = vec__36528;
if(cljs.core.not.call(null,v)){
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
} else {
var years__$1 = cljs.reader.parse_int.call(null,years);
var months__$1 = (function (){var or__28432__auto__ = cljs.reader.parse_int.call(null,months);
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return (1);
}
})();
var days__$1 = (function (){var or__28432__auto__ = cljs.reader.parse_int.call(null,days);
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return (1);
}
})();
var hours__$1 = (function (){var or__28432__auto__ = cljs.reader.parse_int.call(null,hours);
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return (0);
}
})();
var minutes__$1 = (function (){var or__28432__auto__ = cljs.reader.parse_int.call(null,minutes);
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return (0);
}
})();
var seconds__$1 = (function (){var or__28432__auto__ = cljs.reader.parse_int.call(null,seconds);
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return (0);
}
})();
var fraction__$1 = (function (){var or__28432__auto__ = cljs.reader.parse_int.call(null,cljs.reader.zero_fill_right_and_truncate.call(null,fraction,(3)));
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return (0);
}
})();
var offset_sign__$1 = ((cljs.core._EQ_.call(null,offset_sign,"-"))?(-1):(1));
var offset_hours__$1 = (function (){var or__28432__auto__ = cljs.reader.parse_int.call(null,offset_hours);
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return (0);
}
})();
var offset_minutes__$1 = (function (){var or__28432__auto__ = cljs.reader.parse_int.call(null,offset_minutes);
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return (0);
}
})();
var offset = (offset_sign__$1 * ((offset_hours__$1 * (60)) + offset_minutes__$1));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [years__$1,cljs.reader.check.call(null,(1),months__$1,(12),"timestamp month field must be in range 1..12"),cljs.reader.check.call(null,(1),days__$1,cljs.reader.days_in_month.call(null,months__$1,cljs.reader.leap_year_QMARK_.call(null,years__$1)),"timestamp day field must be in range 1..last day in month"),cljs.reader.check.call(null,(0),hours__$1,(23),"timestamp hour field must be in range 0..23"),cljs.reader.check.call(null,(0),minutes__$1,(59),"timestamp minute field must be in range 0..59"),cljs.reader.check.call(null,(0),seconds__$1,((cljs.core._EQ_.call(null,minutes__$1,(59)))?(60):(59)),"timestamp second field must be in range 0..60"),cljs.reader.check.call(null,(0),fraction__$1,(999),"timestamp millisecond field must be in range 0..999"),offset], null);
}
});
cljs.reader.parse_timestamp = (function cljs$reader$parse_timestamp(ts){
var temp__4655__auto__ = cljs.reader.parse_and_validate_timestamp.call(null,ts);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__36531 = temp__4655__auto__;
var years = cljs.core.nth.call(null,vec__36531,(0),null);
var months = cljs.core.nth.call(null,vec__36531,(1),null);
var days = cljs.core.nth.call(null,vec__36531,(2),null);
var hours = cljs.core.nth.call(null,vec__36531,(3),null);
var minutes = cljs.core.nth.call(null,vec__36531,(4),null);
var seconds = cljs.core.nth.call(null,vec__36531,(5),null);
var ms = cljs.core.nth.call(null,vec__36531,(6),null);
var offset = cljs.core.nth.call(null,vec__36531,(7),null);
return (new Date((Date.UTC(years,(months - (1)),days,hours,minutes,seconds,ms) - ((offset * (60)) * (1000)))));
} else {
throw (new Error(["Unrecognized date/time syntax: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ts)].join('')));
}
});
cljs.reader.read_date = (function cljs$reader$read_date(s){
if(typeof s === 'string'){
return cljs.reader.parse_timestamp.call(null,s);
} else {
throw (new Error("Instance literal expects a string for its timestamp."));
}
});
cljs.reader.read_queue = (function cljs$reader$read_queue(elems){
if(cljs.core.vector_QMARK_.call(null,elems)){
return cljs.core.into.call(null,cljs.core.PersistentQueue.EMPTY,elems);
} else {
throw (new Error("Queue literal expects a vector for its elements."));
}
});
cljs.reader.read_js = (function cljs$reader$read_js(form){
if(cljs.core.vector_QMARK_.call(null,form)){
var arr = [];
var seq__36534_36550 = cljs.core.seq.call(null,form);
var chunk__36535_36551 = null;
var count__36536_36552 = (0);
var i__36537_36553 = (0);
while(true){
if((i__36537_36553 < count__36536_36552)){
var x_36554 = cljs.core._nth.call(null,chunk__36535_36551,i__36537_36553);
arr.push(x_36554);

var G__36555 = seq__36534_36550;
var G__36556 = chunk__36535_36551;
var G__36557 = count__36536_36552;
var G__36558 = (i__36537_36553 + (1));
seq__36534_36550 = G__36555;
chunk__36535_36551 = G__36556;
count__36536_36552 = G__36557;
i__36537_36553 = G__36558;
continue;
} else {
var temp__4657__auto___36559 = cljs.core.seq.call(null,seq__36534_36550);
if(temp__4657__auto___36559){
var seq__36534_36560__$1 = temp__4657__auto___36559;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36534_36560__$1)){
var c__29271__auto___36561 = cljs.core.chunk_first.call(null,seq__36534_36560__$1);
var G__36562 = cljs.core.chunk_rest.call(null,seq__36534_36560__$1);
var G__36563 = c__29271__auto___36561;
var G__36564 = cljs.core.count.call(null,c__29271__auto___36561);
var G__36565 = (0);
seq__36534_36550 = G__36562;
chunk__36535_36551 = G__36563;
count__36536_36552 = G__36564;
i__36537_36553 = G__36565;
continue;
} else {
var x_36566 = cljs.core.first.call(null,seq__36534_36560__$1);
arr.push(x_36566);

var G__36567 = cljs.core.next.call(null,seq__36534_36560__$1);
var G__36568 = null;
var G__36569 = (0);
var G__36570 = (0);
seq__36534_36550 = G__36567;
chunk__36535_36551 = G__36568;
count__36536_36552 = G__36569;
i__36537_36553 = G__36570;
continue;
}
} else {
}
}
break;
}

return arr;
} else {
if(cljs.core.map_QMARK_.call(null,form)){
var obj = {};
var seq__36540_36571 = cljs.core.seq.call(null,form);
var chunk__36541_36572 = null;
var count__36542_36573 = (0);
var i__36543_36574 = (0);
while(true){
if((i__36543_36574 < count__36542_36573)){
var vec__36544_36575 = cljs.core._nth.call(null,chunk__36541_36572,i__36543_36574);
var k_36576 = cljs.core.nth.call(null,vec__36544_36575,(0),null);
var v_36577 = cljs.core.nth.call(null,vec__36544_36575,(1),null);
goog.object.set(obj,cljs.core.name.call(null,k_36576),v_36577);

var G__36578 = seq__36540_36571;
var G__36579 = chunk__36541_36572;
var G__36580 = count__36542_36573;
var G__36581 = (i__36543_36574 + (1));
seq__36540_36571 = G__36578;
chunk__36541_36572 = G__36579;
count__36542_36573 = G__36580;
i__36543_36574 = G__36581;
continue;
} else {
var temp__4657__auto___36582 = cljs.core.seq.call(null,seq__36540_36571);
if(temp__4657__auto___36582){
var seq__36540_36583__$1 = temp__4657__auto___36582;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36540_36583__$1)){
var c__29271__auto___36584 = cljs.core.chunk_first.call(null,seq__36540_36583__$1);
var G__36585 = cljs.core.chunk_rest.call(null,seq__36540_36583__$1);
var G__36586 = c__29271__auto___36584;
var G__36587 = cljs.core.count.call(null,c__29271__auto___36584);
var G__36588 = (0);
seq__36540_36571 = G__36585;
chunk__36541_36572 = G__36586;
count__36542_36573 = G__36587;
i__36543_36574 = G__36588;
continue;
} else {
var vec__36547_36589 = cljs.core.first.call(null,seq__36540_36583__$1);
var k_36590 = cljs.core.nth.call(null,vec__36547_36589,(0),null);
var v_36591 = cljs.core.nth.call(null,vec__36547_36589,(1),null);
goog.object.set(obj,cljs.core.name.call(null,k_36590),v_36591);

var G__36592 = cljs.core.next.call(null,seq__36540_36583__$1);
var G__36593 = null;
var G__36594 = (0);
var G__36595 = (0);
seq__36540_36571 = G__36592;
chunk__36541_36572 = G__36593;
count__36542_36573 = G__36594;
i__36543_36574 = G__36595;
continue;
}
} else {
}
}
break;
}

return obj;
} else {
throw (new Error(["JS literal expects a vector or map containing ","only string or unqualified keyword keys"].join('')));

}
}
});
cljs.reader.read_uuid = (function cljs$reader$read_uuid(uuid){
if(typeof uuid === 'string'){
return cljs.core.uuid.call(null,uuid);
} else {
throw (new Error("UUID literal expects a string as its representation."));
}
});
cljs.reader._STAR_default_data_reader_fn_STAR_ = cljs.core.atom.call(null,null);
cljs.reader._STAR_tag_table_STAR_ = cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Symbol(null,"inst","inst",-2008473268,null),cljs.reader.read_date,new cljs.core.Symbol(null,"uuid","uuid",-504564192,null),cljs.reader.read_uuid,new cljs.core.Symbol(null,"queue","queue",-1198599890,null),cljs.reader.read_queue,new cljs.core.Symbol(null,"js","js",-886355190,null),cljs.reader.read_js], null),cljs.core.PersistentArrayMap.EMPTY));
/**
 * Reads the first object from an cljs.tools.reader.reader-types/IPushbackReader.
 * Returns the object read. If EOF, throws if eof-error? is true otherwise returns eof.
 * If no reader is provided, *in* will be used.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * cljs.tools.reader.edn/read doesn't depend on dynamic Vars, all configuration
 * is done by passing an opt map.
 * 
 * opts is a map that can include the following keys:
 * :eof - value to return on end-of-file. When not supplied, eof throws an exception.
 * :readers  - a map of tag symbols to data-reader functions to be considered before default-data-readers.
 *            When not supplied, only the default-data-readers will be used.
 * :default - A function of two args, that will, if present and no reader is found for a tag,
 *            be called with the tag and the value.
 */
cljs.reader.read = (function cljs$reader$read(var_args){
var G__36597 = arguments.length;
switch (G__36597) {
case 1:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.reader.read.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$1 = (function (reader){
return cljs.tools.reader.edn.read.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$2 = (function (p__36598,reader){
var map__36599 = p__36598;
var map__36599__$1 = ((((!((map__36599 == null)))?((((map__36599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36599.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36599):map__36599);
var opts = map__36599__$1;
var eof = cljs.core.get.call(null,map__36599__$1,new cljs.core.Keyword(null,"eof","eof",-489063237));
return cljs.tools.reader.edn.read.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),((function (map__36599,map__36599__$1,opts,eof){
return (function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
});})(map__36599,map__36599__$1,opts,eof))
),reader);
});

cljs.reader.read.cljs$core$IFn$_invoke$arity$4 = (function (reader,eof_error_QMARK_,eof,opts){
return cljs.tools.reader.edn.read.call(null,reader,eof_error_QMARK_,eof,cljs.core.update.call(null,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null)),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})));
});

cljs.reader.read.cljs$lang$maxFixedArity = 4;

/**
 * Reads one object from the string s.
 * Returns nil when s is nil or empty.
 * 
 * Reads data in the edn format (subset of Clojure data):
 * http://edn-format.org
 * 
 * opts is a map as per cljs.tools.reader.edn/read
 */
cljs.reader.read_string = (function cljs$reader$read_string(var_args){
var G__36603 = arguments.length;
switch (G__36603) {
case 1:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return cljs.tools.reader.edn.read_string.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"readers","readers",-2118263030),cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_),new cljs.core.Keyword(null,"eof","eof",-489063237),null], null),s);
});

cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2 = (function (opts,s){
return cljs.tools.reader.edn.read_string.call(null,cljs.core.update.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_)], null),opts),new cljs.core.Keyword(null,"readers","readers",-2118263030),(function (m){
return cljs.core.merge.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),m);
})),s);
});

cljs.reader.read_string.cljs$lang$maxFixedArity = 2;

cljs.reader.register_tag_parser_BANG_ = (function cljs$reader$register_tag_parser_BANG_(tag,f){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.assoc,tag,f);

return old_parser;
});
cljs.reader.deregister_tag_parser_BANG_ = (function cljs$reader$deregister_tag_parser_BANG_(tag){
var old_parser = cljs.core.get.call(null,cljs.core.deref.call(null,cljs.reader._STAR_tag_table_STAR_),tag);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_tag_table_STAR_,cljs.core.dissoc,tag);

return old_parser;
});
cljs.reader.register_default_tag_parser_BANG_ = (function cljs$reader$register_default_tag_parser_BANG_(f){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return f;
});})(old_parser))
);

return old_parser;
});
cljs.reader.deregister_default_tag_parser_BANG_ = (function cljs$reader$deregister_default_tag_parser_BANG_(){
var old_parser = cljs.core.deref.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_);
cljs.core.swap_BANG_.call(null,cljs.reader._STAR_default_data_reader_fn_STAR_,((function (old_parser){
return (function (_){
return null;
});})(old_parser))
);

return old_parser;
});

//# sourceMappingURL=reader.js.map?rel=1572992070447
