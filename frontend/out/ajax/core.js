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
var len__29601__auto___32173 = arguments.length;
var i__29602__auto___32174 = (0);
while(true){
if((i__29602__auto___32174 < len__29601__auto___32173)){
args__29608__auto__.push((arguments[i__29602__auto___32174]));

var G__32175 = (i__29602__auto___32174 + (1));
i__29602__auto___32174 = G__32175;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31462__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"GET",(((f__31462__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31462__auto__));
});

ajax.core.GET.cljs$lang$maxFixedArity = (1);

ajax.core.GET.cljs$lang$applyTo = (function (seq32171){
var G__32172 = cljs.core.first.call(null,seq32171);
var seq32171__$1 = cljs.core.next.call(null,seq32171);
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(G__32172,seq32171__$1);
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
var len__29601__auto___32178 = arguments.length;
var i__29602__auto___32179 = (0);
while(true){
if((i__29602__auto___32179 < len__29601__auto___32178)){
args__29608__auto__.push((arguments[i__29602__auto___32179]));

var G__32180 = (i__29602__auto___32179 + (1));
i__29602__auto___32179 = G__32180;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31462__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"HEAD",(((f__31462__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31462__auto__));
});

ajax.core.HEAD.cljs$lang$maxFixedArity = (1);

ajax.core.HEAD.cljs$lang$applyTo = (function (seq32176){
var G__32177 = cljs.core.first.call(null,seq32176);
var seq32176__$1 = cljs.core.next.call(null,seq32176);
return ajax.core.HEAD.cljs$core$IFn$_invoke$arity$variadic(G__32177,seq32176__$1);
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
var len__29601__auto___32183 = arguments.length;
var i__29602__auto___32184 = (0);
while(true){
if((i__29602__auto___32184 < len__29601__auto___32183)){
args__29608__auto__.push((arguments[i__29602__auto___32184]));

var G__32185 = (i__29602__auto___32184 + (1));
i__29602__auto___32184 = G__32185;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31462__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"POST",(((f__31462__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31462__auto__));
});

ajax.core.POST.cljs$lang$maxFixedArity = (1);

ajax.core.POST.cljs$lang$applyTo = (function (seq32181){
var G__32182 = cljs.core.first.call(null,seq32181);
var seq32181__$1 = cljs.core.next.call(null,seq32181);
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic(G__32182,seq32181__$1);
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
var len__29601__auto___32188 = arguments.length;
var i__29602__auto___32189 = (0);
while(true){
if((i__29602__auto___32189 < len__29601__auto___32188)){
args__29608__auto__.push((arguments[i__29602__auto___32189]));

var G__32190 = (i__29602__auto___32189 + (1));
i__29602__auto___32189 = G__32190;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31462__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PUT",(((f__31462__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31462__auto__));
});

ajax.core.PUT.cljs$lang$maxFixedArity = (1);

ajax.core.PUT.cljs$lang$applyTo = (function (seq32186){
var G__32187 = cljs.core.first.call(null,seq32186);
var seq32186__$1 = cljs.core.next.call(null,seq32186);
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic(G__32187,seq32186__$1);
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
var len__29601__auto___32193 = arguments.length;
var i__29602__auto___32194 = (0);
while(true){
if((i__29602__auto___32194 < len__29601__auto___32193)){
args__29608__auto__.push((arguments[i__29602__auto___32194]));

var G__32195 = (i__29602__auto___32194 + (1));
i__29602__auto___32194 = G__32195;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31462__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"DELETE",(((f__31462__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31462__auto__));
});

ajax.core.DELETE.cljs$lang$maxFixedArity = (1);

ajax.core.DELETE.cljs$lang$applyTo = (function (seq32191){
var G__32192 = cljs.core.first.call(null,seq32191);
var seq32191__$1 = cljs.core.next.call(null,seq32191);
return ajax.core.DELETE.cljs$core$IFn$_invoke$arity$variadic(G__32192,seq32191__$1);
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
var len__29601__auto___32198 = arguments.length;
var i__29602__auto___32199 = (0);
while(true){
if((i__29602__auto___32199 < len__29601__auto___32198)){
args__29608__auto__.push((arguments[i__29602__auto___32199]));

var G__32200 = (i__29602__auto___32199 + (1));
i__29602__auto___32199 = G__32200;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31462__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"OPTIONS",(((f__31462__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31462__auto__));
});

ajax.core.OPTIONS.cljs$lang$maxFixedArity = (1);

ajax.core.OPTIONS.cljs$lang$applyTo = (function (seq32196){
var G__32197 = cljs.core.first.call(null,seq32196);
var seq32196__$1 = cljs.core.next.call(null,seq32196);
return ajax.core.OPTIONS.cljs$core$IFn$_invoke$arity$variadic(G__32197,seq32196__$1);
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
var len__29601__auto___32203 = arguments.length;
var i__29602__auto___32204 = (0);
while(true){
if((i__29602__auto___32204 < len__29601__auto___32203)){
args__29608__auto__.push((arguments[i__29602__auto___32204]));

var G__32205 = (i__29602__auto___32204 + (1));
i__29602__auto___32204 = G__32205;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31462__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"TRACE",(((f__31462__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31462__auto__));
});

ajax.core.TRACE.cljs$lang$maxFixedArity = (1);

ajax.core.TRACE.cljs$lang$applyTo = (function (seq32201){
var G__32202 = cljs.core.first.call(null,seq32201);
var seq32201__$1 = cljs.core.next.call(null,seq32201);
return ajax.core.TRACE.cljs$core$IFn$_invoke$arity$variadic(G__32202,seq32201__$1);
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
var len__29601__auto___32208 = arguments.length;
var i__29602__auto___32209 = (0);
while(true){
if((i__29602__auto___32209 < len__29601__auto___32208)){
args__29608__auto__.push((arguments[i__29602__auto___32209]));

var G__32210 = (i__29602__auto___32209 + (1));
i__29602__auto___32209 = G__32210;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31462__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PATCH",(((f__31462__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31462__auto__));
});

ajax.core.PATCH.cljs$lang$maxFixedArity = (1);

ajax.core.PATCH.cljs$lang$applyTo = (function (seq32206){
var G__32207 = cljs.core.first.call(null,seq32206);
var seq32206__$1 = cljs.core.next.call(null,seq32206);
return ajax.core.PATCH.cljs$core$IFn$_invoke$arity$variadic(G__32207,seq32206__$1);
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
var len__29601__auto___32213 = arguments.length;
var i__29602__auto___32214 = (0);
while(true){
if((i__29602__auto___32214 < len__29601__auto___32213)){
args__29608__auto__.push((arguments[i__29602__auto___32214]));

var G__32215 = (i__29602__auto___32214 + (1));
i__29602__auto___32214 = G__32215;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic = (function (uri,opts){
var f__31462__auto__ = cljs.core.first.call(null,opts);
return ajax.easy.easy_ajax_request.call(null,uri,"PURGE",(((f__31462__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__31462__auto__));
});

ajax.core.PURGE.cljs$lang$maxFixedArity = (1);

ajax.core.PURGE.cljs$lang$applyTo = (function (seq32211){
var G__32212 = cljs.core.first.call(null,seq32211);
var seq32211__$1 = cljs.core.next.call(null,seq32211);
return ajax.core.PURGE.cljs$core$IFn$_invoke$arity$variadic(G__32212,seq32211__$1);
});


//# sourceMappingURL=core.js.map?rel=1573832695845
