// Compiled by ClojureScript 1.9.908 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.url');
goog.require('ajax.json');
goog.require('ajax.transit');
goog.require('ajax.ring');
goog.require('ajax.formats');
goog.require('ajax.util');
goog.require('ajax.interceptors');
goog.require('ajax.simple');
goog.require('ajax.easy');
goog.require('ajax.protocols');
goog.require('ajax.xhrio');
goog.require('ajax.xml_http_request');
ajax.core.to_interceptor = ajax.interceptors.to_interceptor;
ajax.core.abort = (function ajax$core$abort(this$){

return ajax.protocols._abort.call(null,this$);
});
ajax.core.json_request_format = ajax.json.json_request_format;
ajax.core.json_response_format = ajax.json.json_response_format;
ajax.core.transit_request_format = ajax.transit.transit_request_format;
ajax.core.transit_response_format = ajax.transit.transit_response_format;
ajax.core.ring_response_format = ajax.ring.ring_response_format;
ajax.core.url_request_format = ajax.url.url_request_format;
ajax.core.text_request_format = ajax.formats.text_request_format;
ajax.core.text_response_format = ajax.formats.text_response_format;
ajax.core.raw_response_format = ajax.formats.raw_response_format;
ajax.core.default_interceptors = ajax.simple.default_interceptors;
ajax.core.ajax_request = ajax.simple.ajax_request;
ajax.core.default_formats = ajax.easy.default_formats;
ajax.core.detect_response_format = ajax.easy.detect_response_format;
/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.GET = (function ajax$core$GET(var_args){
var args__29608__auto__ = [];
var len__29601__auto___40454 = arguments.length;
var i__29602__auto___40455 = (0);
while(true){
if((i__29602__auto___40455 < len__29601__auto___40454)){
args__29608__auto__.push((arguments[i__29602__auto___40455]));

var G__40456 = (i__29602__auto___40455 + (1));
i__29602__auto___40455 = G__40456;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__40051__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__40051__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__40051__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq40452){
var G__40453 = cljs.core.first.call(null,seq40452);
var seq40452__$1 = cljs.core.next.call(null,seq40452);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__40453,seq40452__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.HEAD = (function ajax$core$HEAD(var_args){
var args__29608__auto__ = [];
var len__29601__auto___40459 = arguments.length;
var i__29602__auto___40460 = (0);
while(true){
if((i__29602__auto___40460 < len__29601__auto___40459)){
args__29608__auto__.push((arguments[i__29602__auto___40460]));

var G__40461 = (i__29602__auto___40460 + (1));
i__29602__auto___40460 = G__40461;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__40051__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__40051__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__40051__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq40457){
var G__40458 = cljs.core.first.call(null,seq40457);
var seq40457__$1 = cljs.core.next.call(null,seq40457);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__40458,seq40457__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.POST = (function ajax$core$POST(var_args){
var args__29608__auto__ = [];
var len__29601__auto___40464 = arguments.length;
var i__29602__auto___40465 = (0);
while(true){
if((i__29602__auto___40465 < len__29601__auto___40464)){
args__29608__auto__.push((arguments[i__29602__auto___40465]));

var G__40466 = (i__29602__auto___40465 + (1));
i__29602__auto___40465 = G__40466;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__40051__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__40051__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__40051__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq40462){
var G__40463 = cljs.core.first.call(null,seq40462);
var seq40462__$1 = cljs.core.next.call(null,seq40462);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__40463,seq40462__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PUT = (function ajax$core$PUT(var_args){
var args__29608__auto__ = [];
var len__29601__auto___40469 = arguments.length;
var i__29602__auto___40470 = (0);
while(true){
if((i__29602__auto___40470 < len__29601__auto___40469)){
args__29608__auto__.push((arguments[i__29602__auto___40470]));

var G__40471 = (i__29602__auto___40470 + (1));
i__29602__auto___40470 = G__40471;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__40051__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__40051__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__40051__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq40467){
var G__40468 = cljs.core.first.call(null,seq40467);
var seq40467__$1 = cljs.core.next.call(null,seq40467);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__40468,seq40467__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.DELETE = (function ajax$core$DELETE(var_args){
var args__29608__auto__ = [];
var len__29601__auto___40474 = arguments.length;
var i__29602__auto___40475 = (0);
while(true){
if((i__29602__auto___40475 < len__29601__auto___40474)){
args__29608__auto__.push((arguments[i__29602__auto___40475]));

var G__40476 = (i__29602__auto___40475 + (1));
i__29602__auto___40475 = G__40476;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__40051__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__40051__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__40051__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq40472){
var G__40473 = cljs.core.first.call(null,seq40472);
var seq40472__$1 = cljs.core.next.call(null,seq40472);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__40473,seq40472__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.OPTIONS = (function ajax$core$OPTIONS(var_args){
var args__29608__auto__ = [];
var len__29601__auto___40479 = arguments.length;
var i__29602__auto___40480 = (0);
while(true){
if((i__29602__auto___40480 < len__29601__auto___40479)){
args__29608__auto__.push((arguments[i__29602__auto___40480]));

var G__40481 = (i__29602__auto___40480 + (1));
i__29602__auto___40480 = G__40481;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__40051__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__40051__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__40051__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq40477){
var G__40478 = cljs.core.first.call(null,seq40477);
var seq40477__$1 = cljs.core.next.call(null,seq40477);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__40478,seq40477__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.TRACE = (function ajax$core$TRACE(var_args){
var args__29608__auto__ = [];
var len__29601__auto___40484 = arguments.length;
var i__29602__auto___40485 = (0);
while(true){
if((i__29602__auto___40485 < len__29601__auto___40484)){
args__29608__auto__.push((arguments[i__29602__auto___40485]));

var G__40486 = (i__29602__auto___40485 + (1));
i__29602__auto___40485 = G__40486;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__40051__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__40051__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__40051__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq40482){
var G__40483 = cljs.core.first.call(null,seq40482);
var seq40482__$1 = cljs.core.next.call(null,seq40482);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__40483,seq40482__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PATCH = (function ajax$core$PATCH(var_args){
var args__29608__auto__ = [];
var len__29601__auto___40489 = arguments.length;
var i__29602__auto___40490 = (0);
while(true){
if((i__29602__auto___40490 < len__29601__auto___40489)){
args__29608__auto__.push((arguments[i__29602__auto___40490]));

var G__40491 = (i__29602__auto___40490 + (1));
i__29602__auto___40490 = G__40491;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__40051__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__40051__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__40051__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq40487){
var G__40488 = cljs.core.first.call(null,seq40487);
var seq40487__$1 = cljs.core.next.call(null,seq40487);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__40488,seq40487__$1);
});

/**
 * accepts the URI and an optional map of options, options include:
 *      :handler - the handler function for successful operation
 *                 should accept a single parameter which is the
 *                 deserialized response
 *      :progress-handler - the handler function for progress events.
 *                          this handler is only available when using the goog.net.XhrIo API
 *      :error-handler - the handler function for errors, should accept a
 *                       map with keys :status and :status-text
 *      :format - the format for the request
 *      :response-format - the format for the response
 *      :params - a map of parameters that will be sent with the request
 */
ajax.core.PURGE = (function ajax$core$PURGE(var_args){
var args__29608__auto__ = [];
var len__29601__auto___40494 = arguments.length;
var i__29602__auto___40495 = (0);
while(true){
if((i__29602__auto___40495 < len__29601__auto___40494)){
args__29608__auto__.push((arguments[i__29602__auto___40495]));

var G__40496 = (i__29602__auto___40495 + (1));
i__29602__auto___40495 = G__40496;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__40051__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__40051__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__40051__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq40492){
var G__40493 = cljs.core.first.call(null,seq40492);
var seq40492__$1 = cljs.core.next.call(null,seq40492);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__40493,seq40492__$1);
});


//# sourceMappingURL=core.js.map?rel=1572995738996
