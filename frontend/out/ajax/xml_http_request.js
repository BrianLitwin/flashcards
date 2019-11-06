// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.call(null,(function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.call(null,headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.call(null,cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():window.XMLHttpRequest);
ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__40196,handler){
var map__40197 = p__40196;
var map__40197__$1 = ((((!((map__40197 == null)))?((((map__40197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40197.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40197):map__40197);
var uri = cljs.core.get.call(null,map__40197__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__40197__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__40197__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__40197__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__40197__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__40197__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__40197__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__40197,map__40197__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__40195_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__40195_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__40197,map__40197__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___40209 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___40209)){
var response_type_40210 = temp__4657__auto___40209;
this$__$1.responseType = cljs.core.name.call(null,response_type_40210);
} else {
}

var seq__40199_40211 = cljs.core.seq.call(null,headers);
var chunk__40200_40212 = null;
var count__40201_40213 = (0);
var i__40202_40214 = (0);
while(true){
if((i__40202_40214 < count__40201_40213)){
var vec__40203_40215 = cljs.core._nth.call(null,chunk__40200_40212,i__40202_40214);
var k_40216 = cljs.core.nth.call(null,vec__40203_40215,(0),null);
var v_40217 = cljs.core.nth.call(null,vec__40203_40215,(1),null);
this$__$1.setRequestHeader(k_40216,v_40217);

var G__40218 = seq__40199_40211;
var G__40219 = chunk__40200_40212;
var G__40220 = count__40201_40213;
var G__40221 = (i__40202_40214 + (1));
seq__40199_40211 = G__40218;
chunk__40200_40212 = G__40219;
count__40201_40213 = G__40220;
i__40202_40214 = G__40221;
continue;
} else {
var temp__4657__auto___40222 = cljs.core.seq.call(null,seq__40199_40211);
if(temp__4657__auto___40222){
var seq__40199_40223__$1 = temp__4657__auto___40222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40199_40223__$1)){
var c__29271__auto___40224 = cljs.core.chunk_first.call(null,seq__40199_40223__$1);
var G__40225 = cljs.core.chunk_rest.call(null,seq__40199_40223__$1);
var G__40226 = c__29271__auto___40224;
var G__40227 = cljs.core.count.call(null,c__29271__auto___40224);
var G__40228 = (0);
seq__40199_40211 = G__40225;
chunk__40200_40212 = G__40226;
count__40201_40213 = G__40227;
i__40202_40214 = G__40228;
continue;
} else {
var vec__40206_40229 = cljs.core.first.call(null,seq__40199_40223__$1);
var k_40230 = cljs.core.nth.call(null,vec__40206_40229,(0),null);
var v_40231 = cljs.core.nth.call(null,vec__40206_40229,(1),null);
this$__$1.setRequestHeader(k_40230,v_40231);

var G__40232 = cljs.core.next.call(null,seq__40199_40223__$1);
var G__40233 = null;
var G__40234 = (0);
var G__40235 = (0);
seq__40199_40211 = G__40232;
chunk__40200_40212 = G__40233;
count__40201_40213 = G__40234;
i__40202_40214 = G__40235;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__28432__auto__ = body;
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return "";
}
})());

return this$__$1;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers.call(null,this$__$1.getAllResponseHeaders());
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1572995738627
