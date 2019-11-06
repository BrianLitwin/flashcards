// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33543 = arguments.length;
switch (G__33543) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async33544 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33544 = (function (f,blockable,meta33545){
this.f = f;
this.blockable = blockable;
this.meta33545 = meta33545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33546,meta33545__$1){
var self__ = this;
var _33546__$1 = this;
return (new cljs.core.async.t_cljs$core$async33544(self__.f,self__.blockable,meta33545__$1));
});

cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33546){
var self__ = this;
var _33546__$1 = this;
return self__.meta33545;
});

cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33544.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33545","meta33545",-743872468,null)], null);
});

cljs.core.async.t_cljs$core$async33544.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33544.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33544";

cljs.core.async.t_cljs$core$async33544.cljs$lang$ctorPrWriter = (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async33544");
});

cljs.core.async.__GT_t_cljs$core$async33544 = (function cljs$core$async$__GT_t_cljs$core$async33544(f__$1,blockable__$1,meta33545){
return (new cljs.core.async.t_cljs$core$async33544(f__$1,blockable__$1,meta33545));
});

}

return (new cljs.core.async.t_cljs$core$async33544(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33550 = arguments.length;
switch (G__33550) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33553 = arguments.length;
switch (G__33553) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33556 = arguments.length;
switch (G__33556) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_33558 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33558);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33558,ret){
return (function (){
return fn1.call(null,val_33558);
});})(val_33558,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33560 = arguments.length;
switch (G__33560) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__29377__auto___33562 = n;
var x_33563 = (0);
while(true){
if((x_33563 < n__29377__auto___33562)){
(a[x_33563] = (0));

var G__33564 = (x_33563 + (1));
x_33563 = G__33564;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__33565 = (i + (1));
i = G__33565;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33566 = (function (flag,meta33567){
this.flag = flag;
this.meta33567 = meta33567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33568,meta33567__$1){
var self__ = this;
var _33568__$1 = this;
return (new cljs.core.async.t_cljs$core$async33566(self__.flag,meta33567__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33568){
var self__ = this;
var _33568__$1 = this;
return self__.meta33567;
});})(flag))
;

cljs.core.async.t_cljs$core$async33566.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33566.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33566.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33567","meta33567",1420854378,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33566";

cljs.core.async.t_cljs$core$async33566.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async33566");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33566 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33566(flag__$1,meta33567){
return (new cljs.core.async.t_cljs$core$async33566(flag__$1,meta33567));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33566(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33569 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33569 = (function (flag,cb,meta33570){
this.flag = flag;
this.cb = cb;
this.meta33570 = meta33570;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33571,meta33570__$1){
var self__ = this;
var _33571__$1 = this;
return (new cljs.core.async.t_cljs$core$async33569(self__.flag,self__.cb,meta33570__$1));
});

cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33571){
var self__ = this;
var _33571__$1 = this;
return self__.meta33570;
});

cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33569.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33569.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33570","meta33570",-1683819759,null)], null);
});

cljs.core.async.t_cljs$core$async33569.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33569.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33569";

cljs.core.async.t_cljs$core$async33569.cljs$lang$ctorPrWriter = (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async33569");
});

cljs.core.async.__GT_t_cljs$core$async33569 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33569(flag__$1,cb__$1,meta33570){
return (new cljs.core.async.t_cljs$core$async33569(flag__$1,cb__$1,meta33570));
});

}

return (new cljs.core.async.t_cljs$core$async33569(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33572_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33572_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33573_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33573_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__28432__auto__ = wport;
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return port;
}
})()], null));
} else {
var G__33574 = (i + (1));
i = G__33574;
continue;
}
} else {
return null;
}
break;
}
})();
var or__28432__auto__ = ret;
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__28420__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__28420__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__28420__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__29608__auto__ = [];
var len__29601__auto___33580 = arguments.length;
var i__29602__auto___33581 = (0);
while(true){
if((i__29602__auto___33581 < len__29601__auto___33580)){
args__29608__auto__.push((arguments[i__29602__auto___33581]));

var G__33582 = (i__29602__auto___33581 + (1));
i__29602__auto___33581 = G__33582;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33577){
var map__33578 = p__33577;
var map__33578__$1 = ((((!((map__33578 == null)))?((((map__33578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33578.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33578):map__33578);
var opts = map__33578__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33575){
var G__33576 = cljs.core.first.call(null,seq33575);
var seq33575__$1 = cljs.core.next.call(null,seq33575);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33576,seq33575__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33584 = arguments.length;
switch (G__33584) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33497__auto___33630 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___33630){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___33630){
return (function (state_33608){
var state_val_33609 = (state_33608[(1)]);
if((state_val_33609 === (7))){
var inst_33604 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
var statearr_33610_33631 = state_33608__$1;
(statearr_33610_33631[(2)] = inst_33604);

(statearr_33610_33631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (1))){
var state_33608__$1 = state_33608;
var statearr_33611_33632 = state_33608__$1;
(statearr_33611_33632[(2)] = null);

(statearr_33611_33632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (4))){
var inst_33587 = (state_33608[(7)]);
var inst_33587__$1 = (state_33608[(2)]);
var inst_33588 = (inst_33587__$1 == null);
var state_33608__$1 = (function (){var statearr_33612 = state_33608;
(statearr_33612[(7)] = inst_33587__$1);

return statearr_33612;
})();
if(cljs.core.truth_(inst_33588)){
var statearr_33613_33633 = state_33608__$1;
(statearr_33613_33633[(1)] = (5));

} else {
var statearr_33614_33634 = state_33608__$1;
(statearr_33614_33634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (13))){
var state_33608__$1 = state_33608;
var statearr_33615_33635 = state_33608__$1;
(statearr_33615_33635[(2)] = null);

(statearr_33615_33635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (6))){
var inst_33587 = (state_33608[(7)]);
var state_33608__$1 = state_33608;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33608__$1,(11),to,inst_33587);
} else {
if((state_val_33609 === (3))){
var inst_33606 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33608__$1,inst_33606);
} else {
if((state_val_33609 === (12))){
var state_33608__$1 = state_33608;
var statearr_33616_33636 = state_33608__$1;
(statearr_33616_33636[(2)] = null);

(statearr_33616_33636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (2))){
var state_33608__$1 = state_33608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33608__$1,(4),from);
} else {
if((state_val_33609 === (11))){
var inst_33597 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
if(cljs.core.truth_(inst_33597)){
var statearr_33617_33637 = state_33608__$1;
(statearr_33617_33637[(1)] = (12));

} else {
var statearr_33618_33638 = state_33608__$1;
(statearr_33618_33638[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (9))){
var state_33608__$1 = state_33608;
var statearr_33619_33639 = state_33608__$1;
(statearr_33619_33639[(2)] = null);

(statearr_33619_33639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (5))){
var state_33608__$1 = state_33608;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33620_33640 = state_33608__$1;
(statearr_33620_33640[(1)] = (8));

} else {
var statearr_33621_33641 = state_33608__$1;
(statearr_33621_33641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (14))){
var inst_33602 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
var statearr_33622_33642 = state_33608__$1;
(statearr_33622_33642[(2)] = inst_33602);

(statearr_33622_33642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (10))){
var inst_33594 = (state_33608[(2)]);
var state_33608__$1 = state_33608;
var statearr_33623_33643 = state_33608__$1;
(statearr_33623_33643[(2)] = inst_33594);

(statearr_33623_33643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33609 === (8))){
var inst_33591 = cljs.core.async.close_BANG_.call(null,to);
var state_33608__$1 = state_33608;
var statearr_33624_33644 = state_33608__$1;
(statearr_33624_33644[(2)] = inst_33591);

(statearr_33624_33644[(1)] = (10));


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
});})(c__33497__auto___33630))
;
return ((function (switch__33409__auto__,c__33497__auto___33630){
return (function() {
var cljs$core$async$state_machine__33410__auto__ = null;
var cljs$core$async$state_machine__33410__auto____0 = (function (){
var statearr_33625 = [null,null,null,null,null,null,null,null];
(statearr_33625[(0)] = cljs$core$async$state_machine__33410__auto__);

(statearr_33625[(1)] = (1));

return statearr_33625;
});
var cljs$core$async$state_machine__33410__auto____1 = (function (state_33608){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_33608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e33626){if((e33626 instanceof Object)){
var ex__33413__auto__ = e33626;
var statearr_33627_33645 = state_33608;
(statearr_33627_33645[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33626;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33646 = state_33608;
state_33608 = G__33646;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$state_machine__33410__auto__ = function(state_33608){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33410__auto____1.call(this,state_33608);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33410__auto____0;
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33410__auto____1;
return cljs$core$async$state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___33630))
})();
var state__33499__auto__ = (function (){var statearr_33628 = f__33498__auto__.call(null);
(statearr_33628[(6)] = c__33497__auto___33630);

return statearr_33628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___33630))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__33647){
var vec__33648 = p__33647;
var v = cljs.core.nth.call(null,vec__33648,(0),null);
var p = cljs.core.nth.call(null,vec__33648,(1),null);
var job = vec__33648;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33497__auto___33819 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___33819,res,vec__33648,v,p,job,jobs,results){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___33819,res,vec__33648,v,p,job,jobs,results){
return (function (state_33655){
var state_val_33656 = (state_33655[(1)]);
if((state_val_33656 === (1))){
var state_33655__$1 = state_33655;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33655__$1,(2),res,v);
} else {
if((state_val_33656 === (2))){
var inst_33652 = (state_33655[(2)]);
var inst_33653 = cljs.core.async.close_BANG_.call(null,res);
var state_33655__$1 = (function (){var statearr_33657 = state_33655;
(statearr_33657[(7)] = inst_33652);

return statearr_33657;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33655__$1,inst_33653);
} else {
return null;
}
}
});})(c__33497__auto___33819,res,vec__33648,v,p,job,jobs,results))
;
return ((function (switch__33409__auto__,c__33497__auto___33819,res,vec__33648,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0 = (function (){
var statearr_33658 = [null,null,null,null,null,null,null,null];
(statearr_33658[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__);

(statearr_33658[(1)] = (1));

return statearr_33658;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1 = (function (state_33655){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_33655);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e33659){if((e33659 instanceof Object)){
var ex__33413__auto__ = e33659;
var statearr_33660_33820 = state_33655;
(statearr_33660_33820[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33655);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33659;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33821 = state_33655;
state_33655 = G__33821;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__ = function(state_33655){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1.call(this,state_33655);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___33819,res,vec__33648,v,p,job,jobs,results))
})();
var state__33499__auto__ = (function (){var statearr_33661 = f__33498__auto__.call(null);
(statearr_33661[(6)] = c__33497__auto___33819);

return statearr_33661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___33819,res,vec__33648,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33662){
var vec__33663 = p__33662;
var v = cljs.core.nth.call(null,vec__33663,(0),null);
var p = cljs.core.nth.call(null,vec__33663,(1),null);
var job = vec__33663;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__29377__auto___33822 = n;
var __33823 = (0);
while(true){
if((__33823 < n__29377__auto___33822)){
var G__33666_33824 = type;
var G__33666_33825__$1 = (((G__33666_33824 instanceof cljs.core.Keyword))?G__33666_33824.fqn:null);
switch (G__33666_33825__$1) {
case "compute":
var c__33497__auto___33827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33823,c__33497__auto___33827,G__33666_33824,G__33666_33825__$1,n__29377__auto___33822,jobs,results,process,async){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (__33823,c__33497__auto___33827,G__33666_33824,G__33666_33825__$1,n__29377__auto___33822,jobs,results,process,async){
return (function (state_33679){
var state_val_33680 = (state_33679[(1)]);
if((state_val_33680 === (1))){
var state_33679__$1 = state_33679;
var statearr_33681_33828 = state_33679__$1;
(statearr_33681_33828[(2)] = null);

(statearr_33681_33828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (2))){
var state_33679__$1 = state_33679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33679__$1,(4),jobs);
} else {
if((state_val_33680 === (3))){
var inst_33677 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33679__$1,inst_33677);
} else {
if((state_val_33680 === (4))){
var inst_33669 = (state_33679[(2)]);
var inst_33670 = process.call(null,inst_33669);
var state_33679__$1 = state_33679;
if(cljs.core.truth_(inst_33670)){
var statearr_33682_33829 = state_33679__$1;
(statearr_33682_33829[(1)] = (5));

} else {
var statearr_33683_33830 = state_33679__$1;
(statearr_33683_33830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (5))){
var state_33679__$1 = state_33679;
var statearr_33684_33831 = state_33679__$1;
(statearr_33684_33831[(2)] = null);

(statearr_33684_33831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (6))){
var state_33679__$1 = state_33679;
var statearr_33685_33832 = state_33679__$1;
(statearr_33685_33832[(2)] = null);

(statearr_33685_33832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33680 === (7))){
var inst_33675 = (state_33679[(2)]);
var state_33679__$1 = state_33679;
var statearr_33686_33833 = state_33679__$1;
(statearr_33686_33833[(2)] = inst_33675);

(statearr_33686_33833[(1)] = (3));


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
});})(__33823,c__33497__auto___33827,G__33666_33824,G__33666_33825__$1,n__29377__auto___33822,jobs,results,process,async))
;
return ((function (__33823,switch__33409__auto__,c__33497__auto___33827,G__33666_33824,G__33666_33825__$1,n__29377__auto___33822,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0 = (function (){
var statearr_33687 = [null,null,null,null,null,null,null];
(statearr_33687[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__);

(statearr_33687[(1)] = (1));

return statearr_33687;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1 = (function (state_33679){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_33679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e33688){if((e33688 instanceof Object)){
var ex__33413__auto__ = e33688;
var statearr_33689_33834 = state_33679;
(statearr_33689_33834[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33679);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33688;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33835 = state_33679;
state_33679 = G__33835;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__ = function(state_33679){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1.call(this,state_33679);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__;
})()
;})(__33823,switch__33409__auto__,c__33497__auto___33827,G__33666_33824,G__33666_33825__$1,n__29377__auto___33822,jobs,results,process,async))
})();
var state__33499__auto__ = (function (){var statearr_33690 = f__33498__auto__.call(null);
(statearr_33690[(6)] = c__33497__auto___33827);

return statearr_33690;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(__33823,c__33497__auto___33827,G__33666_33824,G__33666_33825__$1,n__29377__auto___33822,jobs,results,process,async))
);


break;
case "async":
var c__33497__auto___33836 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33823,c__33497__auto___33836,G__33666_33824,G__33666_33825__$1,n__29377__auto___33822,jobs,results,process,async){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (__33823,c__33497__auto___33836,G__33666_33824,G__33666_33825__$1,n__29377__auto___33822,jobs,results,process,async){
return (function (state_33703){
var state_val_33704 = (state_33703[(1)]);
if((state_val_33704 === (1))){
var state_33703__$1 = state_33703;
var statearr_33705_33837 = state_33703__$1;
(statearr_33705_33837[(2)] = null);

(statearr_33705_33837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33704 === (2))){
var state_33703__$1 = state_33703;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33703__$1,(4),jobs);
} else {
if((state_val_33704 === (3))){
var inst_33701 = (state_33703[(2)]);
var state_33703__$1 = state_33703;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33703__$1,inst_33701);
} else {
if((state_val_33704 === (4))){
var inst_33693 = (state_33703[(2)]);
var inst_33694 = async.call(null,inst_33693);
var state_33703__$1 = state_33703;
if(cljs.core.truth_(inst_33694)){
var statearr_33706_33838 = state_33703__$1;
(statearr_33706_33838[(1)] = (5));

} else {
var statearr_33707_33839 = state_33703__$1;
(statearr_33707_33839[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33704 === (5))){
var state_33703__$1 = state_33703;
var statearr_33708_33840 = state_33703__$1;
(statearr_33708_33840[(2)] = null);

(statearr_33708_33840[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33704 === (6))){
var state_33703__$1 = state_33703;
var statearr_33709_33841 = state_33703__$1;
(statearr_33709_33841[(2)] = null);

(statearr_33709_33841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33704 === (7))){
var inst_33699 = (state_33703[(2)]);
var state_33703__$1 = state_33703;
var statearr_33710_33842 = state_33703__$1;
(statearr_33710_33842[(2)] = inst_33699);

(statearr_33710_33842[(1)] = (3));


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
});})(__33823,c__33497__auto___33836,G__33666_33824,G__33666_33825__$1,n__29377__auto___33822,jobs,results,process,async))
;
return ((function (__33823,switch__33409__auto__,c__33497__auto___33836,G__33666_33824,G__33666_33825__$1,n__29377__auto___33822,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0 = (function (){
var statearr_33711 = [null,null,null,null,null,null,null];
(statearr_33711[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__);

(statearr_33711[(1)] = (1));

return statearr_33711;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1 = (function (state_33703){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_33703);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e33712){if((e33712 instanceof Object)){
var ex__33413__auto__ = e33712;
var statearr_33713_33843 = state_33703;
(statearr_33713_33843[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33703);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33712;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33844 = state_33703;
state_33703 = G__33844;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__ = function(state_33703){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1.call(this,state_33703);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__;
})()
;})(__33823,switch__33409__auto__,c__33497__auto___33836,G__33666_33824,G__33666_33825__$1,n__29377__auto___33822,jobs,results,process,async))
})();
var state__33499__auto__ = (function (){var statearr_33714 = f__33498__auto__.call(null);
(statearr_33714[(6)] = c__33497__auto___33836);

return statearr_33714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(__33823,c__33497__auto___33836,G__33666_33824,G__33666_33825__$1,n__29377__auto___33822,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33666_33825__$1)].join('')));

}

var G__33845 = (__33823 + (1));
__33823 = G__33845;
continue;
} else {
}
break;
}

var c__33497__auto___33846 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___33846,jobs,results,process,async){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___33846,jobs,results,process,async){
return (function (state_33736){
var state_val_33737 = (state_33736[(1)]);
if((state_val_33737 === (1))){
var state_33736__$1 = state_33736;
var statearr_33738_33847 = state_33736__$1;
(statearr_33738_33847[(2)] = null);

(statearr_33738_33847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (2))){
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33736__$1,(4),from);
} else {
if((state_val_33737 === (3))){
var inst_33734 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33736__$1,inst_33734);
} else {
if((state_val_33737 === (4))){
var inst_33717 = (state_33736[(7)]);
var inst_33717__$1 = (state_33736[(2)]);
var inst_33718 = (inst_33717__$1 == null);
var state_33736__$1 = (function (){var statearr_33739 = state_33736;
(statearr_33739[(7)] = inst_33717__$1);

return statearr_33739;
})();
if(cljs.core.truth_(inst_33718)){
var statearr_33740_33848 = state_33736__$1;
(statearr_33740_33848[(1)] = (5));

} else {
var statearr_33741_33849 = state_33736__$1;
(statearr_33741_33849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (5))){
var inst_33720 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33736__$1 = state_33736;
var statearr_33742_33850 = state_33736__$1;
(statearr_33742_33850[(2)] = inst_33720);

(statearr_33742_33850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (6))){
var inst_33722 = (state_33736[(8)]);
var inst_33717 = (state_33736[(7)]);
var inst_33722__$1 = cljs.core.async.chan.call(null,(1));
var inst_33723 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33724 = [inst_33717,inst_33722__$1];
var inst_33725 = (new cljs.core.PersistentVector(null,2,(5),inst_33723,inst_33724,null));
var state_33736__$1 = (function (){var statearr_33743 = state_33736;
(statearr_33743[(8)] = inst_33722__$1);

return statearr_33743;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33736__$1,(8),jobs,inst_33725);
} else {
if((state_val_33737 === (7))){
var inst_33732 = (state_33736[(2)]);
var state_33736__$1 = state_33736;
var statearr_33744_33851 = state_33736__$1;
(statearr_33744_33851[(2)] = inst_33732);

(statearr_33744_33851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33737 === (8))){
var inst_33722 = (state_33736[(8)]);
var inst_33727 = (state_33736[(2)]);
var state_33736__$1 = (function (){var statearr_33745 = state_33736;
(statearr_33745[(9)] = inst_33727);

return statearr_33745;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33736__$1,(9),results,inst_33722);
} else {
if((state_val_33737 === (9))){
var inst_33729 = (state_33736[(2)]);
var state_33736__$1 = (function (){var statearr_33746 = state_33736;
(statearr_33746[(10)] = inst_33729);

return statearr_33746;
})();
var statearr_33747_33852 = state_33736__$1;
(statearr_33747_33852[(2)] = null);

(statearr_33747_33852[(1)] = (2));


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
});})(c__33497__auto___33846,jobs,results,process,async))
;
return ((function (switch__33409__auto__,c__33497__auto___33846,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0 = (function (){
var statearr_33748 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__);

(statearr_33748[(1)] = (1));

return statearr_33748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1 = (function (state_33736){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_33736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e33749){if((e33749 instanceof Object)){
var ex__33413__auto__ = e33749;
var statearr_33750_33853 = state_33736;
(statearr_33750_33853[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33854 = state_33736;
state_33736 = G__33854;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__ = function(state_33736){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1.call(this,state_33736);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___33846,jobs,results,process,async))
})();
var state__33499__auto__ = (function (){var statearr_33751 = f__33498__auto__.call(null);
(statearr_33751[(6)] = c__33497__auto___33846);

return statearr_33751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___33846,jobs,results,process,async))
);


var c__33497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto__,jobs,results,process,async){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto__,jobs,results,process,async){
return (function (state_33789){
var state_val_33790 = (state_33789[(1)]);
if((state_val_33790 === (7))){
var inst_33785 = (state_33789[(2)]);
var state_33789__$1 = state_33789;
var statearr_33791_33855 = state_33789__$1;
(statearr_33791_33855[(2)] = inst_33785);

(statearr_33791_33855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (20))){
var state_33789__$1 = state_33789;
var statearr_33792_33856 = state_33789__$1;
(statearr_33792_33856[(2)] = null);

(statearr_33792_33856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (1))){
var state_33789__$1 = state_33789;
var statearr_33793_33857 = state_33789__$1;
(statearr_33793_33857[(2)] = null);

(statearr_33793_33857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (4))){
var inst_33754 = (state_33789[(7)]);
var inst_33754__$1 = (state_33789[(2)]);
var inst_33755 = (inst_33754__$1 == null);
var state_33789__$1 = (function (){var statearr_33794 = state_33789;
(statearr_33794[(7)] = inst_33754__$1);

return statearr_33794;
})();
if(cljs.core.truth_(inst_33755)){
var statearr_33795_33858 = state_33789__$1;
(statearr_33795_33858[(1)] = (5));

} else {
var statearr_33796_33859 = state_33789__$1;
(statearr_33796_33859[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (15))){
var inst_33767 = (state_33789[(8)]);
var state_33789__$1 = state_33789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33789__$1,(18),to,inst_33767);
} else {
if((state_val_33790 === (21))){
var inst_33780 = (state_33789[(2)]);
var state_33789__$1 = state_33789;
var statearr_33797_33860 = state_33789__$1;
(statearr_33797_33860[(2)] = inst_33780);

(statearr_33797_33860[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (13))){
var inst_33782 = (state_33789[(2)]);
var state_33789__$1 = (function (){var statearr_33798 = state_33789;
(statearr_33798[(9)] = inst_33782);

return statearr_33798;
})();
var statearr_33799_33861 = state_33789__$1;
(statearr_33799_33861[(2)] = null);

(statearr_33799_33861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (6))){
var inst_33754 = (state_33789[(7)]);
var state_33789__$1 = state_33789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33789__$1,(11),inst_33754);
} else {
if((state_val_33790 === (17))){
var inst_33775 = (state_33789[(2)]);
var state_33789__$1 = state_33789;
if(cljs.core.truth_(inst_33775)){
var statearr_33800_33862 = state_33789__$1;
(statearr_33800_33862[(1)] = (19));

} else {
var statearr_33801_33863 = state_33789__$1;
(statearr_33801_33863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (3))){
var inst_33787 = (state_33789[(2)]);
var state_33789__$1 = state_33789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33789__$1,inst_33787);
} else {
if((state_val_33790 === (12))){
var inst_33764 = (state_33789[(10)]);
var state_33789__$1 = state_33789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33789__$1,(14),inst_33764);
} else {
if((state_val_33790 === (2))){
var state_33789__$1 = state_33789;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33789__$1,(4),results);
} else {
if((state_val_33790 === (19))){
var state_33789__$1 = state_33789;
var statearr_33802_33864 = state_33789__$1;
(statearr_33802_33864[(2)] = null);

(statearr_33802_33864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (11))){
var inst_33764 = (state_33789[(2)]);
var state_33789__$1 = (function (){var statearr_33803 = state_33789;
(statearr_33803[(10)] = inst_33764);

return statearr_33803;
})();
var statearr_33804_33865 = state_33789__$1;
(statearr_33804_33865[(2)] = null);

(statearr_33804_33865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (9))){
var state_33789__$1 = state_33789;
var statearr_33805_33866 = state_33789__$1;
(statearr_33805_33866[(2)] = null);

(statearr_33805_33866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (5))){
var state_33789__$1 = state_33789;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33806_33867 = state_33789__$1;
(statearr_33806_33867[(1)] = (8));

} else {
var statearr_33807_33868 = state_33789__$1;
(statearr_33807_33868[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (14))){
var inst_33769 = (state_33789[(11)]);
var inst_33767 = (state_33789[(8)]);
var inst_33767__$1 = (state_33789[(2)]);
var inst_33768 = (inst_33767__$1 == null);
var inst_33769__$1 = cljs.core.not.call(null,inst_33768);
var state_33789__$1 = (function (){var statearr_33808 = state_33789;
(statearr_33808[(11)] = inst_33769__$1);

(statearr_33808[(8)] = inst_33767__$1);

return statearr_33808;
})();
if(inst_33769__$1){
var statearr_33809_33869 = state_33789__$1;
(statearr_33809_33869[(1)] = (15));

} else {
var statearr_33810_33870 = state_33789__$1;
(statearr_33810_33870[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (16))){
var inst_33769 = (state_33789[(11)]);
var state_33789__$1 = state_33789;
var statearr_33811_33871 = state_33789__$1;
(statearr_33811_33871[(2)] = inst_33769);

(statearr_33811_33871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (10))){
var inst_33761 = (state_33789[(2)]);
var state_33789__$1 = state_33789;
var statearr_33812_33872 = state_33789__$1;
(statearr_33812_33872[(2)] = inst_33761);

(statearr_33812_33872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (18))){
var inst_33772 = (state_33789[(2)]);
var state_33789__$1 = state_33789;
var statearr_33813_33873 = state_33789__$1;
(statearr_33813_33873[(2)] = inst_33772);

(statearr_33813_33873[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33790 === (8))){
var inst_33758 = cljs.core.async.close_BANG_.call(null,to);
var state_33789__$1 = state_33789;
var statearr_33814_33874 = state_33789__$1;
(statearr_33814_33874[(2)] = inst_33758);

(statearr_33814_33874[(1)] = (10));


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
});})(c__33497__auto__,jobs,results,process,async))
;
return ((function (switch__33409__auto__,c__33497__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0 = (function (){
var statearr_33815 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33815[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__);

(statearr_33815[(1)] = (1));

return statearr_33815;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1 = (function (state_33789){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_33789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e33816){if((e33816 instanceof Object)){
var ex__33413__auto__ = e33816;
var statearr_33817_33875 = state_33789;
(statearr_33817_33875[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33816;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33876 = state_33789;
state_33789 = G__33876;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__ = function(state_33789){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1.call(this,state_33789);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33410__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto__,jobs,results,process,async))
})();
var state__33499__auto__ = (function (){var statearr_33818 = f__33498__auto__.call(null);
(statearr_33818[(6)] = c__33497__auto__);

return statearr_33818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto__,jobs,results,process,async))
);

return c__33497__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33878 = arguments.length;
switch (G__33878) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33881 = arguments.length;
switch (G__33881) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33884 = arguments.length;
switch (G__33884) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__33497__auto___33933 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___33933,tc,fc){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___33933,tc,fc){
return (function (state_33910){
var state_val_33911 = (state_33910[(1)]);
if((state_val_33911 === (7))){
var inst_33906 = (state_33910[(2)]);
var state_33910__$1 = state_33910;
var statearr_33912_33934 = state_33910__$1;
(statearr_33912_33934[(2)] = inst_33906);

(statearr_33912_33934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33911 === (1))){
var state_33910__$1 = state_33910;
var statearr_33913_33935 = state_33910__$1;
(statearr_33913_33935[(2)] = null);

(statearr_33913_33935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33911 === (4))){
var inst_33887 = (state_33910[(7)]);
var inst_33887__$1 = (state_33910[(2)]);
var inst_33888 = (inst_33887__$1 == null);
var state_33910__$1 = (function (){var statearr_33914 = state_33910;
(statearr_33914[(7)] = inst_33887__$1);

return statearr_33914;
})();
if(cljs.core.truth_(inst_33888)){
var statearr_33915_33936 = state_33910__$1;
(statearr_33915_33936[(1)] = (5));

} else {
var statearr_33916_33937 = state_33910__$1;
(statearr_33916_33937[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33911 === (13))){
var state_33910__$1 = state_33910;
var statearr_33917_33938 = state_33910__$1;
(statearr_33917_33938[(2)] = null);

(statearr_33917_33938[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33911 === (6))){
var inst_33887 = (state_33910[(7)]);
var inst_33893 = p.call(null,inst_33887);
var state_33910__$1 = state_33910;
if(cljs.core.truth_(inst_33893)){
var statearr_33918_33939 = state_33910__$1;
(statearr_33918_33939[(1)] = (9));

} else {
var statearr_33919_33940 = state_33910__$1;
(statearr_33919_33940[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33911 === (3))){
var inst_33908 = (state_33910[(2)]);
var state_33910__$1 = state_33910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33910__$1,inst_33908);
} else {
if((state_val_33911 === (12))){
var state_33910__$1 = state_33910;
var statearr_33920_33941 = state_33910__$1;
(statearr_33920_33941[(2)] = null);

(statearr_33920_33941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33911 === (2))){
var state_33910__$1 = state_33910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33910__$1,(4),ch);
} else {
if((state_val_33911 === (11))){
var inst_33887 = (state_33910[(7)]);
var inst_33897 = (state_33910[(2)]);
var state_33910__$1 = state_33910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33910__$1,(8),inst_33897,inst_33887);
} else {
if((state_val_33911 === (9))){
var state_33910__$1 = state_33910;
var statearr_33921_33942 = state_33910__$1;
(statearr_33921_33942[(2)] = tc);

(statearr_33921_33942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33911 === (5))){
var inst_33890 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33891 = cljs.core.async.close_BANG_.call(null,fc);
var state_33910__$1 = (function (){var statearr_33922 = state_33910;
(statearr_33922[(8)] = inst_33890);

return statearr_33922;
})();
var statearr_33923_33943 = state_33910__$1;
(statearr_33923_33943[(2)] = inst_33891);

(statearr_33923_33943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33911 === (14))){
var inst_33904 = (state_33910[(2)]);
var state_33910__$1 = state_33910;
var statearr_33924_33944 = state_33910__$1;
(statearr_33924_33944[(2)] = inst_33904);

(statearr_33924_33944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33911 === (10))){
var state_33910__$1 = state_33910;
var statearr_33925_33945 = state_33910__$1;
(statearr_33925_33945[(2)] = fc);

(statearr_33925_33945[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33911 === (8))){
var inst_33899 = (state_33910[(2)]);
var state_33910__$1 = state_33910;
if(cljs.core.truth_(inst_33899)){
var statearr_33926_33946 = state_33910__$1;
(statearr_33926_33946[(1)] = (12));

} else {
var statearr_33927_33947 = state_33910__$1;
(statearr_33927_33947[(1)] = (13));

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
});})(c__33497__auto___33933,tc,fc))
;
return ((function (switch__33409__auto__,c__33497__auto___33933,tc,fc){
return (function() {
var cljs$core$async$state_machine__33410__auto__ = null;
var cljs$core$async$state_machine__33410__auto____0 = (function (){
var statearr_33928 = [null,null,null,null,null,null,null,null,null];
(statearr_33928[(0)] = cljs$core$async$state_machine__33410__auto__);

(statearr_33928[(1)] = (1));

return statearr_33928;
});
var cljs$core$async$state_machine__33410__auto____1 = (function (state_33910){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_33910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e33929){if((e33929 instanceof Object)){
var ex__33413__auto__ = e33929;
var statearr_33930_33948 = state_33910;
(statearr_33930_33948[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33929;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33949 = state_33910;
state_33910 = G__33949;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$state_machine__33410__auto__ = function(state_33910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33410__auto____1.call(this,state_33910);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33410__auto____0;
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33410__auto____1;
return cljs$core$async$state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___33933,tc,fc))
})();
var state__33499__auto__ = (function (){var statearr_33931 = f__33498__auto__.call(null);
(statearr_33931[(6)] = c__33497__auto___33933);

return statearr_33931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___33933,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto__){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto__){
return (function (state_33970){
var state_val_33971 = (state_33970[(1)]);
if((state_val_33971 === (7))){
var inst_33966 = (state_33970[(2)]);
var state_33970__$1 = state_33970;
var statearr_33972_33990 = state_33970__$1;
(statearr_33972_33990[(2)] = inst_33966);

(statearr_33972_33990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33971 === (1))){
var inst_33950 = init;
var state_33970__$1 = (function (){var statearr_33973 = state_33970;
(statearr_33973[(7)] = inst_33950);

return statearr_33973;
})();
var statearr_33974_33991 = state_33970__$1;
(statearr_33974_33991[(2)] = null);

(statearr_33974_33991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33971 === (4))){
var inst_33953 = (state_33970[(8)]);
var inst_33953__$1 = (state_33970[(2)]);
var inst_33954 = (inst_33953__$1 == null);
var state_33970__$1 = (function (){var statearr_33975 = state_33970;
(statearr_33975[(8)] = inst_33953__$1);

return statearr_33975;
})();
if(cljs.core.truth_(inst_33954)){
var statearr_33976_33992 = state_33970__$1;
(statearr_33976_33992[(1)] = (5));

} else {
var statearr_33977_33993 = state_33970__$1;
(statearr_33977_33993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33971 === (6))){
var inst_33950 = (state_33970[(7)]);
var inst_33957 = (state_33970[(9)]);
var inst_33953 = (state_33970[(8)]);
var inst_33957__$1 = f.call(null,inst_33950,inst_33953);
var inst_33958 = cljs.core.reduced_QMARK_.call(null,inst_33957__$1);
var state_33970__$1 = (function (){var statearr_33978 = state_33970;
(statearr_33978[(9)] = inst_33957__$1);

return statearr_33978;
})();
if(inst_33958){
var statearr_33979_33994 = state_33970__$1;
(statearr_33979_33994[(1)] = (8));

} else {
var statearr_33980_33995 = state_33970__$1;
(statearr_33980_33995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33971 === (3))){
var inst_33968 = (state_33970[(2)]);
var state_33970__$1 = state_33970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33970__$1,inst_33968);
} else {
if((state_val_33971 === (2))){
var state_33970__$1 = state_33970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33970__$1,(4),ch);
} else {
if((state_val_33971 === (9))){
var inst_33957 = (state_33970[(9)]);
var inst_33950 = inst_33957;
var state_33970__$1 = (function (){var statearr_33981 = state_33970;
(statearr_33981[(7)] = inst_33950);

return statearr_33981;
})();
var statearr_33982_33996 = state_33970__$1;
(statearr_33982_33996[(2)] = null);

(statearr_33982_33996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33971 === (5))){
var inst_33950 = (state_33970[(7)]);
var state_33970__$1 = state_33970;
var statearr_33983_33997 = state_33970__$1;
(statearr_33983_33997[(2)] = inst_33950);

(statearr_33983_33997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33971 === (10))){
var inst_33964 = (state_33970[(2)]);
var state_33970__$1 = state_33970;
var statearr_33984_33998 = state_33970__$1;
(statearr_33984_33998[(2)] = inst_33964);

(statearr_33984_33998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33971 === (8))){
var inst_33957 = (state_33970[(9)]);
var inst_33960 = cljs.core.deref.call(null,inst_33957);
var state_33970__$1 = state_33970;
var statearr_33985_33999 = state_33970__$1;
(statearr_33985_33999[(2)] = inst_33960);

(statearr_33985_33999[(1)] = (10));


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
});})(c__33497__auto__))
;
return ((function (switch__33409__auto__,c__33497__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33410__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33410__auto____0 = (function (){
var statearr_33986 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33986[(0)] = cljs$core$async$reduce_$_state_machine__33410__auto__);

(statearr_33986[(1)] = (1));

return statearr_33986;
});
var cljs$core$async$reduce_$_state_machine__33410__auto____1 = (function (state_33970){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_33970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e33987){if((e33987 instanceof Object)){
var ex__33413__auto__ = e33987;
var statearr_33988_34000 = state_33970;
(statearr_33988_34000[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33987;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34001 = state_33970;
state_33970 = G__34001;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33410__auto__ = function(state_33970){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33410__auto____1.call(this,state_33970);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33410__auto____0;
cljs$core$async$reduce_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33410__auto____1;
return cljs$core$async$reduce_$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto__))
})();
var state__33499__auto__ = (function (){var statearr_33989 = f__33498__auto__.call(null);
(statearr_33989[(6)] = c__33497__auto__);

return statearr_33989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto__))
);

return c__33497__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto__,f__$1){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto__,f__$1){
return (function (state_34007){
var state_val_34008 = (state_34007[(1)]);
if((state_val_34008 === (1))){
var inst_34002 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34007__$1 = state_34007;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34007__$1,(2),inst_34002);
} else {
if((state_val_34008 === (2))){
var inst_34004 = (state_34007[(2)]);
var inst_34005 = f__$1.call(null,inst_34004);
var state_34007__$1 = state_34007;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34007__$1,inst_34005);
} else {
return null;
}
}
});})(c__33497__auto__,f__$1))
;
return ((function (switch__33409__auto__,c__33497__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33410__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33410__auto____0 = (function (){
var statearr_34009 = [null,null,null,null,null,null,null];
(statearr_34009[(0)] = cljs$core$async$transduce_$_state_machine__33410__auto__);

(statearr_34009[(1)] = (1));

return statearr_34009;
});
var cljs$core$async$transduce_$_state_machine__33410__auto____1 = (function (state_34007){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_34007);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e34010){if((e34010 instanceof Object)){
var ex__33413__auto__ = e34010;
var statearr_34011_34013 = state_34007;
(statearr_34011_34013[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34007);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34014 = state_34007;
state_34007 = G__34014;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33410__auto__ = function(state_34007){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33410__auto____1.call(this,state_34007);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33410__auto____0;
cljs$core$async$transduce_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33410__auto____1;
return cljs$core$async$transduce_$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto__,f__$1))
})();
var state__33499__auto__ = (function (){var statearr_34012 = f__33498__auto__.call(null);
(statearr_34012[(6)] = c__33497__auto__);

return statearr_34012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto__,f__$1))
);

return c__33497__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34016 = arguments.length;
switch (G__34016) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto__){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto__){
return (function (state_34041){
var state_val_34042 = (state_34041[(1)]);
if((state_val_34042 === (7))){
var inst_34023 = (state_34041[(2)]);
var state_34041__$1 = state_34041;
var statearr_34043_34064 = state_34041__$1;
(statearr_34043_34064[(2)] = inst_34023);

(statearr_34043_34064[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (1))){
var inst_34017 = cljs.core.seq.call(null,coll);
var inst_34018 = inst_34017;
var state_34041__$1 = (function (){var statearr_34044 = state_34041;
(statearr_34044[(7)] = inst_34018);

return statearr_34044;
})();
var statearr_34045_34065 = state_34041__$1;
(statearr_34045_34065[(2)] = null);

(statearr_34045_34065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (4))){
var inst_34018 = (state_34041[(7)]);
var inst_34021 = cljs.core.first.call(null,inst_34018);
var state_34041__$1 = state_34041;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34041__$1,(7),ch,inst_34021);
} else {
if((state_val_34042 === (13))){
var inst_34035 = (state_34041[(2)]);
var state_34041__$1 = state_34041;
var statearr_34046_34066 = state_34041__$1;
(statearr_34046_34066[(2)] = inst_34035);

(statearr_34046_34066[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (6))){
var inst_34026 = (state_34041[(2)]);
var state_34041__$1 = state_34041;
if(cljs.core.truth_(inst_34026)){
var statearr_34047_34067 = state_34041__$1;
(statearr_34047_34067[(1)] = (8));

} else {
var statearr_34048_34068 = state_34041__$1;
(statearr_34048_34068[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (3))){
var inst_34039 = (state_34041[(2)]);
var state_34041__$1 = state_34041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34041__$1,inst_34039);
} else {
if((state_val_34042 === (12))){
var state_34041__$1 = state_34041;
var statearr_34049_34069 = state_34041__$1;
(statearr_34049_34069[(2)] = null);

(statearr_34049_34069[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (2))){
var inst_34018 = (state_34041[(7)]);
var state_34041__$1 = state_34041;
if(cljs.core.truth_(inst_34018)){
var statearr_34050_34070 = state_34041__$1;
(statearr_34050_34070[(1)] = (4));

} else {
var statearr_34051_34071 = state_34041__$1;
(statearr_34051_34071[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (11))){
var inst_34032 = cljs.core.async.close_BANG_.call(null,ch);
var state_34041__$1 = state_34041;
var statearr_34052_34072 = state_34041__$1;
(statearr_34052_34072[(2)] = inst_34032);

(statearr_34052_34072[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (9))){
var state_34041__$1 = state_34041;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34053_34073 = state_34041__$1;
(statearr_34053_34073[(1)] = (11));

} else {
var statearr_34054_34074 = state_34041__$1;
(statearr_34054_34074[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (5))){
var inst_34018 = (state_34041[(7)]);
var state_34041__$1 = state_34041;
var statearr_34055_34075 = state_34041__$1;
(statearr_34055_34075[(2)] = inst_34018);

(statearr_34055_34075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (10))){
var inst_34037 = (state_34041[(2)]);
var state_34041__$1 = state_34041;
var statearr_34056_34076 = state_34041__$1;
(statearr_34056_34076[(2)] = inst_34037);

(statearr_34056_34076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34042 === (8))){
var inst_34018 = (state_34041[(7)]);
var inst_34028 = cljs.core.next.call(null,inst_34018);
var inst_34018__$1 = inst_34028;
var state_34041__$1 = (function (){var statearr_34057 = state_34041;
(statearr_34057[(7)] = inst_34018__$1);

return statearr_34057;
})();
var statearr_34058_34077 = state_34041__$1;
(statearr_34058_34077[(2)] = null);

(statearr_34058_34077[(1)] = (2));


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
});})(c__33497__auto__))
;
return ((function (switch__33409__auto__,c__33497__auto__){
return (function() {
var cljs$core$async$state_machine__33410__auto__ = null;
var cljs$core$async$state_machine__33410__auto____0 = (function (){
var statearr_34059 = [null,null,null,null,null,null,null,null];
(statearr_34059[(0)] = cljs$core$async$state_machine__33410__auto__);

(statearr_34059[(1)] = (1));

return statearr_34059;
});
var cljs$core$async$state_machine__33410__auto____1 = (function (state_34041){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_34041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e34060){if((e34060 instanceof Object)){
var ex__33413__auto__ = e34060;
var statearr_34061_34078 = state_34041;
(statearr_34061_34078[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34060;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34079 = state_34041;
state_34041 = G__34079;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$state_machine__33410__auto__ = function(state_34041){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33410__auto____1.call(this,state_34041);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33410__auto____0;
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33410__auto____1;
return cljs$core$async$state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto__))
})();
var state__33499__auto__ = (function (){var statearr_34062 = f__33498__auto__.call(null);
(statearr_34062[(6)] = c__33497__auto__);

return statearr_34062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto__))
);

return c__33497__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__29115__auto__ = (((_ == null))?null:_);
var m__29116__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__29115__auto__)]);
if(!((m__29116__auto__ == null))){
return m__29116__auto__.call(null,_);
} else {
var m__29116__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__29116__auto____$1 == null))){
return m__29116__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__29115__auto__ = (((m == null))?null:m);
var m__29116__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__29115__auto__)]);
if(!((m__29116__auto__ == null))){
return m__29116__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__29116__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__29116__auto____$1 == null))){
return m__29116__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__29115__auto__ = (((m == null))?null:m);
var m__29116__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__29115__auto__)]);
if(!((m__29116__auto__ == null))){
return m__29116__auto__.call(null,m,ch);
} else {
var m__29116__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__29116__auto____$1 == null))){
return m__29116__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__29115__auto__ = (((m == null))?null:m);
var m__29116__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__29115__auto__)]);
if(!((m__29116__auto__ == null))){
return m__29116__auto__.call(null,m);
} else {
var m__29116__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__29116__auto____$1 == null))){
return m__29116__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34080 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34080 = (function (ch,cs,meta34081){
this.ch = ch;
this.cs = cs;
this.meta34081 = meta34081;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34082,meta34081__$1){
var self__ = this;
var _34082__$1 = this;
return (new cljs.core.async.t_cljs$core$async34080(self__.ch,self__.cs,meta34081__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34082){
var self__ = this;
var _34082__$1 = this;
return self__.meta34081;
});})(cs))
;

cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34080.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34080.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34081","meta34081",-2084072717,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34080.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34080.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34080";

cljs.core.async.t_cljs$core$async34080.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async34080");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34080 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34080(ch__$1,cs__$1,meta34081){
return (new cljs.core.async.t_cljs$core$async34080(ch__$1,cs__$1,meta34081));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34080(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__33497__auto___34302 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___34302,cs,m,dchan,dctr,done){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___34302,cs,m,dchan,dctr,done){
return (function (state_34217){
var state_val_34218 = (state_34217[(1)]);
if((state_val_34218 === (7))){
var inst_34213 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34219_34303 = state_34217__$1;
(statearr_34219_34303[(2)] = inst_34213);

(statearr_34219_34303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (20))){
var inst_34116 = (state_34217[(7)]);
var inst_34128 = cljs.core.first.call(null,inst_34116);
var inst_34129 = cljs.core.nth.call(null,inst_34128,(0),null);
var inst_34130 = cljs.core.nth.call(null,inst_34128,(1),null);
var state_34217__$1 = (function (){var statearr_34220 = state_34217;
(statearr_34220[(8)] = inst_34129);

return statearr_34220;
})();
if(cljs.core.truth_(inst_34130)){
var statearr_34221_34304 = state_34217__$1;
(statearr_34221_34304[(1)] = (22));

} else {
var statearr_34222_34305 = state_34217__$1;
(statearr_34222_34305[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (27))){
var inst_34158 = (state_34217[(9)]);
var inst_34165 = (state_34217[(10)]);
var inst_34160 = (state_34217[(11)]);
var inst_34085 = (state_34217[(12)]);
var inst_34165__$1 = cljs.core._nth.call(null,inst_34158,inst_34160);
var inst_34166 = cljs.core.async.put_BANG_.call(null,inst_34165__$1,inst_34085,done);
var state_34217__$1 = (function (){var statearr_34223 = state_34217;
(statearr_34223[(10)] = inst_34165__$1);

return statearr_34223;
})();
if(cljs.core.truth_(inst_34166)){
var statearr_34224_34306 = state_34217__$1;
(statearr_34224_34306[(1)] = (30));

} else {
var statearr_34225_34307 = state_34217__$1;
(statearr_34225_34307[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (1))){
var state_34217__$1 = state_34217;
var statearr_34226_34308 = state_34217__$1;
(statearr_34226_34308[(2)] = null);

(statearr_34226_34308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (24))){
var inst_34116 = (state_34217[(7)]);
var inst_34135 = (state_34217[(2)]);
var inst_34136 = cljs.core.next.call(null,inst_34116);
var inst_34094 = inst_34136;
var inst_34095 = null;
var inst_34096 = (0);
var inst_34097 = (0);
var state_34217__$1 = (function (){var statearr_34227 = state_34217;
(statearr_34227[(13)] = inst_34094);

(statearr_34227[(14)] = inst_34095);

(statearr_34227[(15)] = inst_34097);

(statearr_34227[(16)] = inst_34135);

(statearr_34227[(17)] = inst_34096);

return statearr_34227;
})();
var statearr_34228_34309 = state_34217__$1;
(statearr_34228_34309[(2)] = null);

(statearr_34228_34309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (39))){
var state_34217__$1 = state_34217;
var statearr_34232_34310 = state_34217__$1;
(statearr_34232_34310[(2)] = null);

(statearr_34232_34310[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (4))){
var inst_34085 = (state_34217[(12)]);
var inst_34085__$1 = (state_34217[(2)]);
var inst_34086 = (inst_34085__$1 == null);
var state_34217__$1 = (function (){var statearr_34233 = state_34217;
(statearr_34233[(12)] = inst_34085__$1);

return statearr_34233;
})();
if(cljs.core.truth_(inst_34086)){
var statearr_34234_34311 = state_34217__$1;
(statearr_34234_34311[(1)] = (5));

} else {
var statearr_34235_34312 = state_34217__$1;
(statearr_34235_34312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (15))){
var inst_34094 = (state_34217[(13)]);
var inst_34095 = (state_34217[(14)]);
var inst_34097 = (state_34217[(15)]);
var inst_34096 = (state_34217[(17)]);
var inst_34112 = (state_34217[(2)]);
var inst_34113 = (inst_34097 + (1));
var tmp34229 = inst_34094;
var tmp34230 = inst_34095;
var tmp34231 = inst_34096;
var inst_34094__$1 = tmp34229;
var inst_34095__$1 = tmp34230;
var inst_34096__$1 = tmp34231;
var inst_34097__$1 = inst_34113;
var state_34217__$1 = (function (){var statearr_34236 = state_34217;
(statearr_34236[(13)] = inst_34094__$1);

(statearr_34236[(14)] = inst_34095__$1);

(statearr_34236[(15)] = inst_34097__$1);

(statearr_34236[(18)] = inst_34112);

(statearr_34236[(17)] = inst_34096__$1);

return statearr_34236;
})();
var statearr_34237_34313 = state_34217__$1;
(statearr_34237_34313[(2)] = null);

(statearr_34237_34313[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (21))){
var inst_34139 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34241_34314 = state_34217__$1;
(statearr_34241_34314[(2)] = inst_34139);

(statearr_34241_34314[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (31))){
var inst_34165 = (state_34217[(10)]);
var inst_34169 = done.call(null,null);
var inst_34170 = cljs.core.async.untap_STAR_.call(null,m,inst_34165);
var state_34217__$1 = (function (){var statearr_34242 = state_34217;
(statearr_34242[(19)] = inst_34169);

return statearr_34242;
})();
var statearr_34243_34315 = state_34217__$1;
(statearr_34243_34315[(2)] = inst_34170);

(statearr_34243_34315[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (32))){
var inst_34158 = (state_34217[(9)]);
var inst_34160 = (state_34217[(11)]);
var inst_34157 = (state_34217[(20)]);
var inst_34159 = (state_34217[(21)]);
var inst_34172 = (state_34217[(2)]);
var inst_34173 = (inst_34160 + (1));
var tmp34238 = inst_34158;
var tmp34239 = inst_34157;
var tmp34240 = inst_34159;
var inst_34157__$1 = tmp34239;
var inst_34158__$1 = tmp34238;
var inst_34159__$1 = tmp34240;
var inst_34160__$1 = inst_34173;
var state_34217__$1 = (function (){var statearr_34244 = state_34217;
(statearr_34244[(9)] = inst_34158__$1);

(statearr_34244[(11)] = inst_34160__$1);

(statearr_34244[(20)] = inst_34157__$1);

(statearr_34244[(21)] = inst_34159__$1);

(statearr_34244[(22)] = inst_34172);

return statearr_34244;
})();
var statearr_34245_34316 = state_34217__$1;
(statearr_34245_34316[(2)] = null);

(statearr_34245_34316[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (40))){
var inst_34185 = (state_34217[(23)]);
var inst_34189 = done.call(null,null);
var inst_34190 = cljs.core.async.untap_STAR_.call(null,m,inst_34185);
var state_34217__$1 = (function (){var statearr_34246 = state_34217;
(statearr_34246[(24)] = inst_34189);

return statearr_34246;
})();
var statearr_34247_34317 = state_34217__$1;
(statearr_34247_34317[(2)] = inst_34190);

(statearr_34247_34317[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (33))){
var inst_34176 = (state_34217[(25)]);
var inst_34178 = cljs.core.chunked_seq_QMARK_.call(null,inst_34176);
var state_34217__$1 = state_34217;
if(inst_34178){
var statearr_34248_34318 = state_34217__$1;
(statearr_34248_34318[(1)] = (36));

} else {
var statearr_34249_34319 = state_34217__$1;
(statearr_34249_34319[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (13))){
var inst_34106 = (state_34217[(26)]);
var inst_34109 = cljs.core.async.close_BANG_.call(null,inst_34106);
var state_34217__$1 = state_34217;
var statearr_34250_34320 = state_34217__$1;
(statearr_34250_34320[(2)] = inst_34109);

(statearr_34250_34320[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (22))){
var inst_34129 = (state_34217[(8)]);
var inst_34132 = cljs.core.async.close_BANG_.call(null,inst_34129);
var state_34217__$1 = state_34217;
var statearr_34251_34321 = state_34217__$1;
(statearr_34251_34321[(2)] = inst_34132);

(statearr_34251_34321[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (36))){
var inst_34176 = (state_34217[(25)]);
var inst_34180 = cljs.core.chunk_first.call(null,inst_34176);
var inst_34181 = cljs.core.chunk_rest.call(null,inst_34176);
var inst_34182 = cljs.core.count.call(null,inst_34180);
var inst_34157 = inst_34181;
var inst_34158 = inst_34180;
var inst_34159 = inst_34182;
var inst_34160 = (0);
var state_34217__$1 = (function (){var statearr_34252 = state_34217;
(statearr_34252[(9)] = inst_34158);

(statearr_34252[(11)] = inst_34160);

(statearr_34252[(20)] = inst_34157);

(statearr_34252[(21)] = inst_34159);

return statearr_34252;
})();
var statearr_34253_34322 = state_34217__$1;
(statearr_34253_34322[(2)] = null);

(statearr_34253_34322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (41))){
var inst_34176 = (state_34217[(25)]);
var inst_34192 = (state_34217[(2)]);
var inst_34193 = cljs.core.next.call(null,inst_34176);
var inst_34157 = inst_34193;
var inst_34158 = null;
var inst_34159 = (0);
var inst_34160 = (0);
var state_34217__$1 = (function (){var statearr_34254 = state_34217;
(statearr_34254[(9)] = inst_34158);

(statearr_34254[(11)] = inst_34160);

(statearr_34254[(20)] = inst_34157);

(statearr_34254[(21)] = inst_34159);

(statearr_34254[(27)] = inst_34192);

return statearr_34254;
})();
var statearr_34255_34323 = state_34217__$1;
(statearr_34255_34323[(2)] = null);

(statearr_34255_34323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (43))){
var state_34217__$1 = state_34217;
var statearr_34256_34324 = state_34217__$1;
(statearr_34256_34324[(2)] = null);

(statearr_34256_34324[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (29))){
var inst_34201 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34257_34325 = state_34217__$1;
(statearr_34257_34325[(2)] = inst_34201);

(statearr_34257_34325[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (44))){
var inst_34210 = (state_34217[(2)]);
var state_34217__$1 = (function (){var statearr_34258 = state_34217;
(statearr_34258[(28)] = inst_34210);

return statearr_34258;
})();
var statearr_34259_34326 = state_34217__$1;
(statearr_34259_34326[(2)] = null);

(statearr_34259_34326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (6))){
var inst_34149 = (state_34217[(29)]);
var inst_34148 = cljs.core.deref.call(null,cs);
var inst_34149__$1 = cljs.core.keys.call(null,inst_34148);
var inst_34150 = cljs.core.count.call(null,inst_34149__$1);
var inst_34151 = cljs.core.reset_BANG_.call(null,dctr,inst_34150);
var inst_34156 = cljs.core.seq.call(null,inst_34149__$1);
var inst_34157 = inst_34156;
var inst_34158 = null;
var inst_34159 = (0);
var inst_34160 = (0);
var state_34217__$1 = (function (){var statearr_34260 = state_34217;
(statearr_34260[(9)] = inst_34158);

(statearr_34260[(29)] = inst_34149__$1);

(statearr_34260[(11)] = inst_34160);

(statearr_34260[(20)] = inst_34157);

(statearr_34260[(30)] = inst_34151);

(statearr_34260[(21)] = inst_34159);

return statearr_34260;
})();
var statearr_34261_34327 = state_34217__$1;
(statearr_34261_34327[(2)] = null);

(statearr_34261_34327[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (28))){
var inst_34157 = (state_34217[(20)]);
var inst_34176 = (state_34217[(25)]);
var inst_34176__$1 = cljs.core.seq.call(null,inst_34157);
var state_34217__$1 = (function (){var statearr_34262 = state_34217;
(statearr_34262[(25)] = inst_34176__$1);

return statearr_34262;
})();
if(inst_34176__$1){
var statearr_34263_34328 = state_34217__$1;
(statearr_34263_34328[(1)] = (33));

} else {
var statearr_34264_34329 = state_34217__$1;
(statearr_34264_34329[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (25))){
var inst_34160 = (state_34217[(11)]);
var inst_34159 = (state_34217[(21)]);
var inst_34162 = (inst_34160 < inst_34159);
var inst_34163 = inst_34162;
var state_34217__$1 = state_34217;
if(cljs.core.truth_(inst_34163)){
var statearr_34265_34330 = state_34217__$1;
(statearr_34265_34330[(1)] = (27));

} else {
var statearr_34266_34331 = state_34217__$1;
(statearr_34266_34331[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (34))){
var state_34217__$1 = state_34217;
var statearr_34267_34332 = state_34217__$1;
(statearr_34267_34332[(2)] = null);

(statearr_34267_34332[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (17))){
var state_34217__$1 = state_34217;
var statearr_34268_34333 = state_34217__$1;
(statearr_34268_34333[(2)] = null);

(statearr_34268_34333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (3))){
var inst_34215 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34217__$1,inst_34215);
} else {
if((state_val_34218 === (12))){
var inst_34144 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34269_34334 = state_34217__$1;
(statearr_34269_34334[(2)] = inst_34144);

(statearr_34269_34334[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (2))){
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34217__$1,(4),ch);
} else {
if((state_val_34218 === (23))){
var state_34217__$1 = state_34217;
var statearr_34270_34335 = state_34217__$1;
(statearr_34270_34335[(2)] = null);

(statearr_34270_34335[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (35))){
var inst_34199 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34271_34336 = state_34217__$1;
(statearr_34271_34336[(2)] = inst_34199);

(statearr_34271_34336[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (19))){
var inst_34116 = (state_34217[(7)]);
var inst_34120 = cljs.core.chunk_first.call(null,inst_34116);
var inst_34121 = cljs.core.chunk_rest.call(null,inst_34116);
var inst_34122 = cljs.core.count.call(null,inst_34120);
var inst_34094 = inst_34121;
var inst_34095 = inst_34120;
var inst_34096 = inst_34122;
var inst_34097 = (0);
var state_34217__$1 = (function (){var statearr_34272 = state_34217;
(statearr_34272[(13)] = inst_34094);

(statearr_34272[(14)] = inst_34095);

(statearr_34272[(15)] = inst_34097);

(statearr_34272[(17)] = inst_34096);

return statearr_34272;
})();
var statearr_34273_34337 = state_34217__$1;
(statearr_34273_34337[(2)] = null);

(statearr_34273_34337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (11))){
var inst_34094 = (state_34217[(13)]);
var inst_34116 = (state_34217[(7)]);
var inst_34116__$1 = cljs.core.seq.call(null,inst_34094);
var state_34217__$1 = (function (){var statearr_34274 = state_34217;
(statearr_34274[(7)] = inst_34116__$1);

return statearr_34274;
})();
if(inst_34116__$1){
var statearr_34275_34338 = state_34217__$1;
(statearr_34275_34338[(1)] = (16));

} else {
var statearr_34276_34339 = state_34217__$1;
(statearr_34276_34339[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (9))){
var inst_34146 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34277_34340 = state_34217__$1;
(statearr_34277_34340[(2)] = inst_34146);

(statearr_34277_34340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (5))){
var inst_34092 = cljs.core.deref.call(null,cs);
var inst_34093 = cljs.core.seq.call(null,inst_34092);
var inst_34094 = inst_34093;
var inst_34095 = null;
var inst_34096 = (0);
var inst_34097 = (0);
var state_34217__$1 = (function (){var statearr_34278 = state_34217;
(statearr_34278[(13)] = inst_34094);

(statearr_34278[(14)] = inst_34095);

(statearr_34278[(15)] = inst_34097);

(statearr_34278[(17)] = inst_34096);

return statearr_34278;
})();
var statearr_34279_34341 = state_34217__$1;
(statearr_34279_34341[(2)] = null);

(statearr_34279_34341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (14))){
var state_34217__$1 = state_34217;
var statearr_34280_34342 = state_34217__$1;
(statearr_34280_34342[(2)] = null);

(statearr_34280_34342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (45))){
var inst_34207 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34281_34343 = state_34217__$1;
(statearr_34281_34343[(2)] = inst_34207);

(statearr_34281_34343[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (26))){
var inst_34149 = (state_34217[(29)]);
var inst_34203 = (state_34217[(2)]);
var inst_34204 = cljs.core.seq.call(null,inst_34149);
var state_34217__$1 = (function (){var statearr_34282 = state_34217;
(statearr_34282[(31)] = inst_34203);

return statearr_34282;
})();
if(inst_34204){
var statearr_34283_34344 = state_34217__$1;
(statearr_34283_34344[(1)] = (42));

} else {
var statearr_34284_34345 = state_34217__$1;
(statearr_34284_34345[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (16))){
var inst_34116 = (state_34217[(7)]);
var inst_34118 = cljs.core.chunked_seq_QMARK_.call(null,inst_34116);
var state_34217__$1 = state_34217;
if(inst_34118){
var statearr_34285_34346 = state_34217__$1;
(statearr_34285_34346[(1)] = (19));

} else {
var statearr_34286_34347 = state_34217__$1;
(statearr_34286_34347[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (38))){
var inst_34196 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34287_34348 = state_34217__$1;
(statearr_34287_34348[(2)] = inst_34196);

(statearr_34287_34348[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (30))){
var state_34217__$1 = state_34217;
var statearr_34288_34349 = state_34217__$1;
(statearr_34288_34349[(2)] = null);

(statearr_34288_34349[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (10))){
var inst_34095 = (state_34217[(14)]);
var inst_34097 = (state_34217[(15)]);
var inst_34105 = cljs.core._nth.call(null,inst_34095,inst_34097);
var inst_34106 = cljs.core.nth.call(null,inst_34105,(0),null);
var inst_34107 = cljs.core.nth.call(null,inst_34105,(1),null);
var state_34217__$1 = (function (){var statearr_34289 = state_34217;
(statearr_34289[(26)] = inst_34106);

return statearr_34289;
})();
if(cljs.core.truth_(inst_34107)){
var statearr_34290_34350 = state_34217__$1;
(statearr_34290_34350[(1)] = (13));

} else {
var statearr_34291_34351 = state_34217__$1;
(statearr_34291_34351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (18))){
var inst_34142 = (state_34217[(2)]);
var state_34217__$1 = state_34217;
var statearr_34292_34352 = state_34217__$1;
(statearr_34292_34352[(2)] = inst_34142);

(statearr_34292_34352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (42))){
var state_34217__$1 = state_34217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34217__$1,(45),dchan);
} else {
if((state_val_34218 === (37))){
var inst_34085 = (state_34217[(12)]);
var inst_34176 = (state_34217[(25)]);
var inst_34185 = (state_34217[(23)]);
var inst_34185__$1 = cljs.core.first.call(null,inst_34176);
var inst_34186 = cljs.core.async.put_BANG_.call(null,inst_34185__$1,inst_34085,done);
var state_34217__$1 = (function (){var statearr_34293 = state_34217;
(statearr_34293[(23)] = inst_34185__$1);

return statearr_34293;
})();
if(cljs.core.truth_(inst_34186)){
var statearr_34294_34353 = state_34217__$1;
(statearr_34294_34353[(1)] = (39));

} else {
var statearr_34295_34354 = state_34217__$1;
(statearr_34295_34354[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34218 === (8))){
var inst_34097 = (state_34217[(15)]);
var inst_34096 = (state_34217[(17)]);
var inst_34099 = (inst_34097 < inst_34096);
var inst_34100 = inst_34099;
var state_34217__$1 = state_34217;
if(cljs.core.truth_(inst_34100)){
var statearr_34296_34355 = state_34217__$1;
(statearr_34296_34355[(1)] = (10));

} else {
var statearr_34297_34356 = state_34217__$1;
(statearr_34297_34356[(1)] = (11));

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
});})(c__33497__auto___34302,cs,m,dchan,dctr,done))
;
return ((function (switch__33409__auto__,c__33497__auto___34302,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33410__auto__ = null;
var cljs$core$async$mult_$_state_machine__33410__auto____0 = (function (){
var statearr_34298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34298[(0)] = cljs$core$async$mult_$_state_machine__33410__auto__);

(statearr_34298[(1)] = (1));

return statearr_34298;
});
var cljs$core$async$mult_$_state_machine__33410__auto____1 = (function (state_34217){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_34217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e34299){if((e34299 instanceof Object)){
var ex__33413__auto__ = e34299;
var statearr_34300_34357 = state_34217;
(statearr_34300_34357[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34358 = state_34217;
state_34217 = G__34358;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33410__auto__ = function(state_34217){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33410__auto____1.call(this,state_34217);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33410__auto____0;
cljs$core$async$mult_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33410__auto____1;
return cljs$core$async$mult_$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___34302,cs,m,dchan,dctr,done))
})();
var state__33499__auto__ = (function (){var statearr_34301 = f__33498__auto__.call(null);
(statearr_34301[(6)] = c__33497__auto___34302);

return statearr_34301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___34302,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34360 = arguments.length;
switch (G__34360) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__29115__auto__ = (((m == null))?null:m);
var m__29116__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__29115__auto__)]);
if(!((m__29116__auto__ == null))){
return m__29116__auto__.call(null,m,ch);
} else {
var m__29116__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__29116__auto____$1 == null))){
return m__29116__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__29115__auto__ = (((m == null))?null:m);
var m__29116__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__29115__auto__)]);
if(!((m__29116__auto__ == null))){
return m__29116__auto__.call(null,m,ch);
} else {
var m__29116__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__29116__auto____$1 == null))){
return m__29116__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__29115__auto__ = (((m == null))?null:m);
var m__29116__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__29115__auto__)]);
if(!((m__29116__auto__ == null))){
return m__29116__auto__.call(null,m);
} else {
var m__29116__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__29116__auto____$1 == null))){
return m__29116__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__29115__auto__ = (((m == null))?null:m);
var m__29116__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__29115__auto__)]);
if(!((m__29116__auto__ == null))){
return m__29116__auto__.call(null,m,state_map);
} else {
var m__29116__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__29116__auto____$1 == null))){
return m__29116__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__29115__auto__ = (((m == null))?null:m);
var m__29116__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__29115__auto__)]);
if(!((m__29116__auto__ == null))){
return m__29116__auto__.call(null,m,mode);
} else {
var m__29116__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__29116__auto____$1 == null))){
return m__29116__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__29608__auto__ = [];
var len__29601__auto___34372 = arguments.length;
var i__29602__auto___34373 = (0);
while(true){
if((i__29602__auto___34373 < len__29601__auto___34372)){
args__29608__auto__.push((arguments[i__29602__auto___34373]));

var G__34374 = (i__29602__auto___34373 + (1));
i__29602__auto___34373 = G__34374;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((3) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29609__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34366){
var map__34367 = p__34366;
var map__34367__$1 = ((((!((map__34367 == null)))?((((map__34367.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34367.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34367):map__34367);
var opts = map__34367__$1;
var statearr_34369_34375 = state;
(statearr_34369_34375[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__34367,map__34367__$1,opts){
return (function (val){
var statearr_34370_34376 = state;
(statearr_34370_34376[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__34367,map__34367__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_34371_34377 = state;
(statearr_34371_34377[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34362){
var G__34363 = cljs.core.first.call(null,seq34362);
var seq34362__$1 = cljs.core.next.call(null,seq34362);
var G__34364 = cljs.core.first.call(null,seq34362__$1);
var seq34362__$2 = cljs.core.next.call(null,seq34362__$1);
var G__34365 = cljs.core.first.call(null,seq34362__$2);
var seq34362__$3 = cljs.core.next.call(null,seq34362__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34363,G__34364,G__34365,seq34362__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34378 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34378 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34379){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34379 = meta34379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34380,meta34379__$1){
var self__ = this;
var _34380__$1 = this;
return (new cljs.core.async.t_cljs$core$async34378(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34379__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34380){
var self__ = this;
var _34380__$1 = this;
return self__.meta34379;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34378.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34378.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34378.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34378.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34378.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34378.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34378.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34378.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34378.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34379","meta34379",-1592110126,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34378.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34378.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34378";

cljs.core.async.t_cljs$core$async34378.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async34378");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34378 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34378(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34379){
return (new cljs.core.async.t_cljs$core$async34378(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34379));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34378(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33497__auto___34542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___34542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___34542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34482){
var state_val_34483 = (state_34482[(1)]);
if((state_val_34483 === (7))){
var inst_34397 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
var statearr_34484_34543 = state_34482__$1;
(statearr_34484_34543[(2)] = inst_34397);

(statearr_34484_34543[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (20))){
var inst_34409 = (state_34482[(7)]);
var state_34482__$1 = state_34482;
var statearr_34485_34544 = state_34482__$1;
(statearr_34485_34544[(2)] = inst_34409);

(statearr_34485_34544[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (27))){
var state_34482__$1 = state_34482;
var statearr_34486_34545 = state_34482__$1;
(statearr_34486_34545[(2)] = null);

(statearr_34486_34545[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (1))){
var inst_34384 = (state_34482[(8)]);
var inst_34384__$1 = calc_state.call(null);
var inst_34386 = (inst_34384__$1 == null);
var inst_34387 = cljs.core.not.call(null,inst_34386);
var state_34482__$1 = (function (){var statearr_34487 = state_34482;
(statearr_34487[(8)] = inst_34384__$1);

return statearr_34487;
})();
if(inst_34387){
var statearr_34488_34546 = state_34482__$1;
(statearr_34488_34546[(1)] = (2));

} else {
var statearr_34489_34547 = state_34482__$1;
(statearr_34489_34547[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (24))){
var inst_34433 = (state_34482[(9)]);
var inst_34456 = (state_34482[(10)]);
var inst_34442 = (state_34482[(11)]);
var inst_34456__$1 = inst_34433.call(null,inst_34442);
var state_34482__$1 = (function (){var statearr_34490 = state_34482;
(statearr_34490[(10)] = inst_34456__$1);

return statearr_34490;
})();
if(cljs.core.truth_(inst_34456__$1)){
var statearr_34491_34548 = state_34482__$1;
(statearr_34491_34548[(1)] = (29));

} else {
var statearr_34492_34549 = state_34482__$1;
(statearr_34492_34549[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (4))){
var inst_34400 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
if(cljs.core.truth_(inst_34400)){
var statearr_34493_34550 = state_34482__$1;
(statearr_34493_34550[(1)] = (8));

} else {
var statearr_34494_34551 = state_34482__$1;
(statearr_34494_34551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (15))){
var inst_34427 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
if(cljs.core.truth_(inst_34427)){
var statearr_34495_34552 = state_34482__$1;
(statearr_34495_34552[(1)] = (19));

} else {
var statearr_34496_34553 = state_34482__$1;
(statearr_34496_34553[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (21))){
var inst_34432 = (state_34482[(12)]);
var inst_34432__$1 = (state_34482[(2)]);
var inst_34433 = cljs.core.get.call(null,inst_34432__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34434 = cljs.core.get.call(null,inst_34432__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34435 = cljs.core.get.call(null,inst_34432__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34482__$1 = (function (){var statearr_34497 = state_34482;
(statearr_34497[(9)] = inst_34433);

(statearr_34497[(13)] = inst_34434);

(statearr_34497[(12)] = inst_34432__$1);

return statearr_34497;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34482__$1,(22),inst_34435);
} else {
if((state_val_34483 === (31))){
var inst_34464 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
if(cljs.core.truth_(inst_34464)){
var statearr_34498_34554 = state_34482__$1;
(statearr_34498_34554[(1)] = (32));

} else {
var statearr_34499_34555 = state_34482__$1;
(statearr_34499_34555[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (32))){
var inst_34441 = (state_34482[(14)]);
var state_34482__$1 = state_34482;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34482__$1,(35),out,inst_34441);
} else {
if((state_val_34483 === (33))){
var inst_34432 = (state_34482[(12)]);
var inst_34409 = inst_34432;
var state_34482__$1 = (function (){var statearr_34500 = state_34482;
(statearr_34500[(7)] = inst_34409);

return statearr_34500;
})();
var statearr_34501_34556 = state_34482__$1;
(statearr_34501_34556[(2)] = null);

(statearr_34501_34556[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (13))){
var inst_34409 = (state_34482[(7)]);
var inst_34416 = inst_34409.cljs$lang$protocol_mask$partition0$;
var inst_34417 = (inst_34416 & (64));
var inst_34418 = inst_34409.cljs$core$ISeq$;
var inst_34419 = (cljs.core.PROTOCOL_SENTINEL === inst_34418);
var inst_34420 = (inst_34417) || (inst_34419);
var state_34482__$1 = state_34482;
if(cljs.core.truth_(inst_34420)){
var statearr_34502_34557 = state_34482__$1;
(statearr_34502_34557[(1)] = (16));

} else {
var statearr_34503_34558 = state_34482__$1;
(statearr_34503_34558[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (22))){
var inst_34441 = (state_34482[(14)]);
var inst_34442 = (state_34482[(11)]);
var inst_34440 = (state_34482[(2)]);
var inst_34441__$1 = cljs.core.nth.call(null,inst_34440,(0),null);
var inst_34442__$1 = cljs.core.nth.call(null,inst_34440,(1),null);
var inst_34443 = (inst_34441__$1 == null);
var inst_34444 = cljs.core._EQ_.call(null,inst_34442__$1,change);
var inst_34445 = (inst_34443) || (inst_34444);
var state_34482__$1 = (function (){var statearr_34504 = state_34482;
(statearr_34504[(14)] = inst_34441__$1);

(statearr_34504[(11)] = inst_34442__$1);

return statearr_34504;
})();
if(cljs.core.truth_(inst_34445)){
var statearr_34505_34559 = state_34482__$1;
(statearr_34505_34559[(1)] = (23));

} else {
var statearr_34506_34560 = state_34482__$1;
(statearr_34506_34560[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (36))){
var inst_34432 = (state_34482[(12)]);
var inst_34409 = inst_34432;
var state_34482__$1 = (function (){var statearr_34507 = state_34482;
(statearr_34507[(7)] = inst_34409);

return statearr_34507;
})();
var statearr_34508_34561 = state_34482__$1;
(statearr_34508_34561[(2)] = null);

(statearr_34508_34561[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (29))){
var inst_34456 = (state_34482[(10)]);
var state_34482__$1 = state_34482;
var statearr_34509_34562 = state_34482__$1;
(statearr_34509_34562[(2)] = inst_34456);

(statearr_34509_34562[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (6))){
var state_34482__$1 = state_34482;
var statearr_34510_34563 = state_34482__$1;
(statearr_34510_34563[(2)] = false);

(statearr_34510_34563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (28))){
var inst_34452 = (state_34482[(2)]);
var inst_34453 = calc_state.call(null);
var inst_34409 = inst_34453;
var state_34482__$1 = (function (){var statearr_34511 = state_34482;
(statearr_34511[(7)] = inst_34409);

(statearr_34511[(15)] = inst_34452);

return statearr_34511;
})();
var statearr_34512_34564 = state_34482__$1;
(statearr_34512_34564[(2)] = null);

(statearr_34512_34564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (25))){
var inst_34478 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
var statearr_34513_34565 = state_34482__$1;
(statearr_34513_34565[(2)] = inst_34478);

(statearr_34513_34565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (34))){
var inst_34476 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
var statearr_34514_34566 = state_34482__$1;
(statearr_34514_34566[(2)] = inst_34476);

(statearr_34514_34566[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (17))){
var state_34482__$1 = state_34482;
var statearr_34515_34567 = state_34482__$1;
(statearr_34515_34567[(2)] = false);

(statearr_34515_34567[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (3))){
var state_34482__$1 = state_34482;
var statearr_34516_34568 = state_34482__$1;
(statearr_34516_34568[(2)] = false);

(statearr_34516_34568[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (12))){
var inst_34480 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34482__$1,inst_34480);
} else {
if((state_val_34483 === (2))){
var inst_34384 = (state_34482[(8)]);
var inst_34389 = inst_34384.cljs$lang$protocol_mask$partition0$;
var inst_34390 = (inst_34389 & (64));
var inst_34391 = inst_34384.cljs$core$ISeq$;
var inst_34392 = (cljs.core.PROTOCOL_SENTINEL === inst_34391);
var inst_34393 = (inst_34390) || (inst_34392);
var state_34482__$1 = state_34482;
if(cljs.core.truth_(inst_34393)){
var statearr_34517_34569 = state_34482__$1;
(statearr_34517_34569[(1)] = (5));

} else {
var statearr_34518_34570 = state_34482__$1;
(statearr_34518_34570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (23))){
var inst_34441 = (state_34482[(14)]);
var inst_34447 = (inst_34441 == null);
var state_34482__$1 = state_34482;
if(cljs.core.truth_(inst_34447)){
var statearr_34519_34571 = state_34482__$1;
(statearr_34519_34571[(1)] = (26));

} else {
var statearr_34520_34572 = state_34482__$1;
(statearr_34520_34572[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (35))){
var inst_34467 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
if(cljs.core.truth_(inst_34467)){
var statearr_34521_34573 = state_34482__$1;
(statearr_34521_34573[(1)] = (36));

} else {
var statearr_34522_34574 = state_34482__$1;
(statearr_34522_34574[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (19))){
var inst_34409 = (state_34482[(7)]);
var inst_34429 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34409);
var state_34482__$1 = state_34482;
var statearr_34523_34575 = state_34482__$1;
(statearr_34523_34575[(2)] = inst_34429);

(statearr_34523_34575[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (11))){
var inst_34409 = (state_34482[(7)]);
var inst_34413 = (inst_34409 == null);
var inst_34414 = cljs.core.not.call(null,inst_34413);
var state_34482__$1 = state_34482;
if(inst_34414){
var statearr_34524_34576 = state_34482__$1;
(statearr_34524_34576[(1)] = (13));

} else {
var statearr_34525_34577 = state_34482__$1;
(statearr_34525_34577[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (9))){
var inst_34384 = (state_34482[(8)]);
var state_34482__$1 = state_34482;
var statearr_34526_34578 = state_34482__$1;
(statearr_34526_34578[(2)] = inst_34384);

(statearr_34526_34578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (5))){
var state_34482__$1 = state_34482;
var statearr_34527_34579 = state_34482__$1;
(statearr_34527_34579[(2)] = true);

(statearr_34527_34579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (14))){
var state_34482__$1 = state_34482;
var statearr_34528_34580 = state_34482__$1;
(statearr_34528_34580[(2)] = false);

(statearr_34528_34580[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (26))){
var inst_34442 = (state_34482[(11)]);
var inst_34449 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34442);
var state_34482__$1 = state_34482;
var statearr_34529_34581 = state_34482__$1;
(statearr_34529_34581[(2)] = inst_34449);

(statearr_34529_34581[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (16))){
var state_34482__$1 = state_34482;
var statearr_34530_34582 = state_34482__$1;
(statearr_34530_34582[(2)] = true);

(statearr_34530_34582[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (38))){
var inst_34472 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
var statearr_34531_34583 = state_34482__$1;
(statearr_34531_34583[(2)] = inst_34472);

(statearr_34531_34583[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (30))){
var inst_34433 = (state_34482[(9)]);
var inst_34434 = (state_34482[(13)]);
var inst_34442 = (state_34482[(11)]);
var inst_34459 = cljs.core.empty_QMARK_.call(null,inst_34433);
var inst_34460 = inst_34434.call(null,inst_34442);
var inst_34461 = cljs.core.not.call(null,inst_34460);
var inst_34462 = (inst_34459) && (inst_34461);
var state_34482__$1 = state_34482;
var statearr_34532_34584 = state_34482__$1;
(statearr_34532_34584[(2)] = inst_34462);

(statearr_34532_34584[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (10))){
var inst_34384 = (state_34482[(8)]);
var inst_34405 = (state_34482[(2)]);
var inst_34406 = cljs.core.get.call(null,inst_34405,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34407 = cljs.core.get.call(null,inst_34405,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34408 = cljs.core.get.call(null,inst_34405,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34409 = inst_34384;
var state_34482__$1 = (function (){var statearr_34533 = state_34482;
(statearr_34533[(16)] = inst_34407);

(statearr_34533[(7)] = inst_34409);

(statearr_34533[(17)] = inst_34408);

(statearr_34533[(18)] = inst_34406);

return statearr_34533;
})();
var statearr_34534_34585 = state_34482__$1;
(statearr_34534_34585[(2)] = null);

(statearr_34534_34585[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (18))){
var inst_34424 = (state_34482[(2)]);
var state_34482__$1 = state_34482;
var statearr_34535_34586 = state_34482__$1;
(statearr_34535_34586[(2)] = inst_34424);

(statearr_34535_34586[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (37))){
var state_34482__$1 = state_34482;
var statearr_34536_34587 = state_34482__$1;
(statearr_34536_34587[(2)] = null);

(statearr_34536_34587[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34483 === (8))){
var inst_34384 = (state_34482[(8)]);
var inst_34402 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34384);
var state_34482__$1 = state_34482;
var statearr_34537_34588 = state_34482__$1;
(statearr_34537_34588[(2)] = inst_34402);

(statearr_34537_34588[(1)] = (10));


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
});})(c__33497__auto___34542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33409__auto__,c__33497__auto___34542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33410__auto__ = null;
var cljs$core$async$mix_$_state_machine__33410__auto____0 = (function (){
var statearr_34538 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34538[(0)] = cljs$core$async$mix_$_state_machine__33410__auto__);

(statearr_34538[(1)] = (1));

return statearr_34538;
});
var cljs$core$async$mix_$_state_machine__33410__auto____1 = (function (state_34482){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_34482);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e34539){if((e34539 instanceof Object)){
var ex__33413__auto__ = e34539;
var statearr_34540_34589 = state_34482;
(statearr_34540_34589[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34482);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34590 = state_34482;
state_34482 = G__34590;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33410__auto__ = function(state_34482){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33410__auto____1.call(this,state_34482);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33410__auto____0;
cljs$core$async$mix_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33410__auto____1;
return cljs$core$async$mix_$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___34542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33499__auto__ = (function (){var statearr_34541 = f__33498__auto__.call(null);
(statearr_34541[(6)] = c__33497__auto___34542);

return statearr_34541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___34542,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__29115__auto__ = (((p == null))?null:p);
var m__29116__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__29115__auto__)]);
if(!((m__29116__auto__ == null))){
return m__29116__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__29116__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__29116__auto____$1 == null))){
return m__29116__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__29115__auto__ = (((p == null))?null:p);
var m__29116__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__29115__auto__)]);
if(!((m__29116__auto__ == null))){
return m__29116__auto__.call(null,p,v,ch);
} else {
var m__29116__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__29116__auto____$1 == null))){
return m__29116__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34592 = arguments.length;
switch (G__34592) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__29115__auto__ = (((p == null))?null:p);
var m__29116__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29115__auto__)]);
if(!((m__29116__auto__ == null))){
return m__29116__auto__.call(null,p);
} else {
var m__29116__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29116__auto____$1 == null))){
return m__29116__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__29115__auto__ = (((p == null))?null:p);
var m__29116__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__29115__auto__)]);
if(!((m__29116__auto__ == null))){
return m__29116__auto__.call(null,p,v);
} else {
var m__29116__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__29116__auto____$1 == null))){
return m__29116__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34596 = arguments.length;
switch (G__34596) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__28432__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__28432__auto__,mults){
return (function (p1__34594_SHARP_){
if(cljs.core.truth_(p1__34594_SHARP_.call(null,topic))){
return p1__34594_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34594_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28432__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34597 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34598){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34598 = meta34598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34599,meta34598__$1){
var self__ = this;
var _34599__$1 = this;
return (new cljs.core.async.t_cljs$core$async34597(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34598__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34599){
var self__ = this;
var _34599__$1 = this;
return self__.meta34598;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34597.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34597.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34597.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34597.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34597.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34597.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34597.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34597.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34598","meta34598",-1070606677,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34597";

cljs.core.async.t_cljs$core$async34597.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async34597");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34597 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34597(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34598){
return (new cljs.core.async.t_cljs$core$async34597(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34598));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34597(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33497__auto___34717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___34717,mults,ensure_mult,p){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___34717,mults,ensure_mult,p){
return (function (state_34671){
var state_val_34672 = (state_34671[(1)]);
if((state_val_34672 === (7))){
var inst_34667 = (state_34671[(2)]);
var state_34671__$1 = state_34671;
var statearr_34673_34718 = state_34671__$1;
(statearr_34673_34718[(2)] = inst_34667);

(statearr_34673_34718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (20))){
var state_34671__$1 = state_34671;
var statearr_34674_34719 = state_34671__$1;
(statearr_34674_34719[(2)] = null);

(statearr_34674_34719[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (1))){
var state_34671__$1 = state_34671;
var statearr_34675_34720 = state_34671__$1;
(statearr_34675_34720[(2)] = null);

(statearr_34675_34720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (24))){
var inst_34650 = (state_34671[(7)]);
var inst_34659 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34650);
var state_34671__$1 = state_34671;
var statearr_34676_34721 = state_34671__$1;
(statearr_34676_34721[(2)] = inst_34659);

(statearr_34676_34721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (4))){
var inst_34602 = (state_34671[(8)]);
var inst_34602__$1 = (state_34671[(2)]);
var inst_34603 = (inst_34602__$1 == null);
var state_34671__$1 = (function (){var statearr_34677 = state_34671;
(statearr_34677[(8)] = inst_34602__$1);

return statearr_34677;
})();
if(cljs.core.truth_(inst_34603)){
var statearr_34678_34722 = state_34671__$1;
(statearr_34678_34722[(1)] = (5));

} else {
var statearr_34679_34723 = state_34671__$1;
(statearr_34679_34723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (15))){
var inst_34644 = (state_34671[(2)]);
var state_34671__$1 = state_34671;
var statearr_34680_34724 = state_34671__$1;
(statearr_34680_34724[(2)] = inst_34644);

(statearr_34680_34724[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (21))){
var inst_34664 = (state_34671[(2)]);
var state_34671__$1 = (function (){var statearr_34681 = state_34671;
(statearr_34681[(9)] = inst_34664);

return statearr_34681;
})();
var statearr_34682_34725 = state_34671__$1;
(statearr_34682_34725[(2)] = null);

(statearr_34682_34725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (13))){
var inst_34626 = (state_34671[(10)]);
var inst_34628 = cljs.core.chunked_seq_QMARK_.call(null,inst_34626);
var state_34671__$1 = state_34671;
if(inst_34628){
var statearr_34683_34726 = state_34671__$1;
(statearr_34683_34726[(1)] = (16));

} else {
var statearr_34684_34727 = state_34671__$1;
(statearr_34684_34727[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (22))){
var inst_34656 = (state_34671[(2)]);
var state_34671__$1 = state_34671;
if(cljs.core.truth_(inst_34656)){
var statearr_34685_34728 = state_34671__$1;
(statearr_34685_34728[(1)] = (23));

} else {
var statearr_34686_34729 = state_34671__$1;
(statearr_34686_34729[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (6))){
var inst_34650 = (state_34671[(7)]);
var inst_34602 = (state_34671[(8)]);
var inst_34652 = (state_34671[(11)]);
var inst_34650__$1 = topic_fn.call(null,inst_34602);
var inst_34651 = cljs.core.deref.call(null,mults);
var inst_34652__$1 = cljs.core.get.call(null,inst_34651,inst_34650__$1);
var state_34671__$1 = (function (){var statearr_34687 = state_34671;
(statearr_34687[(7)] = inst_34650__$1);

(statearr_34687[(11)] = inst_34652__$1);

return statearr_34687;
})();
if(cljs.core.truth_(inst_34652__$1)){
var statearr_34688_34730 = state_34671__$1;
(statearr_34688_34730[(1)] = (19));

} else {
var statearr_34689_34731 = state_34671__$1;
(statearr_34689_34731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (25))){
var inst_34661 = (state_34671[(2)]);
var state_34671__$1 = state_34671;
var statearr_34690_34732 = state_34671__$1;
(statearr_34690_34732[(2)] = inst_34661);

(statearr_34690_34732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (17))){
var inst_34626 = (state_34671[(10)]);
var inst_34635 = cljs.core.first.call(null,inst_34626);
var inst_34636 = cljs.core.async.muxch_STAR_.call(null,inst_34635);
var inst_34637 = cljs.core.async.close_BANG_.call(null,inst_34636);
var inst_34638 = cljs.core.next.call(null,inst_34626);
var inst_34612 = inst_34638;
var inst_34613 = null;
var inst_34614 = (0);
var inst_34615 = (0);
var state_34671__$1 = (function (){var statearr_34691 = state_34671;
(statearr_34691[(12)] = inst_34614);

(statearr_34691[(13)] = inst_34613);

(statearr_34691[(14)] = inst_34615);

(statearr_34691[(15)] = inst_34637);

(statearr_34691[(16)] = inst_34612);

return statearr_34691;
})();
var statearr_34692_34733 = state_34671__$1;
(statearr_34692_34733[(2)] = null);

(statearr_34692_34733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (3))){
var inst_34669 = (state_34671[(2)]);
var state_34671__$1 = state_34671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34671__$1,inst_34669);
} else {
if((state_val_34672 === (12))){
var inst_34646 = (state_34671[(2)]);
var state_34671__$1 = state_34671;
var statearr_34693_34734 = state_34671__$1;
(statearr_34693_34734[(2)] = inst_34646);

(statearr_34693_34734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (2))){
var state_34671__$1 = state_34671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34671__$1,(4),ch);
} else {
if((state_val_34672 === (23))){
var state_34671__$1 = state_34671;
var statearr_34694_34735 = state_34671__$1;
(statearr_34694_34735[(2)] = null);

(statearr_34694_34735[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (19))){
var inst_34602 = (state_34671[(8)]);
var inst_34652 = (state_34671[(11)]);
var inst_34654 = cljs.core.async.muxch_STAR_.call(null,inst_34652);
var state_34671__$1 = state_34671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34671__$1,(22),inst_34654,inst_34602);
} else {
if((state_val_34672 === (11))){
var inst_34626 = (state_34671[(10)]);
var inst_34612 = (state_34671[(16)]);
var inst_34626__$1 = cljs.core.seq.call(null,inst_34612);
var state_34671__$1 = (function (){var statearr_34695 = state_34671;
(statearr_34695[(10)] = inst_34626__$1);

return statearr_34695;
})();
if(inst_34626__$1){
var statearr_34696_34736 = state_34671__$1;
(statearr_34696_34736[(1)] = (13));

} else {
var statearr_34697_34737 = state_34671__$1;
(statearr_34697_34737[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (9))){
var inst_34648 = (state_34671[(2)]);
var state_34671__$1 = state_34671;
var statearr_34698_34738 = state_34671__$1;
(statearr_34698_34738[(2)] = inst_34648);

(statearr_34698_34738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (5))){
var inst_34609 = cljs.core.deref.call(null,mults);
var inst_34610 = cljs.core.vals.call(null,inst_34609);
var inst_34611 = cljs.core.seq.call(null,inst_34610);
var inst_34612 = inst_34611;
var inst_34613 = null;
var inst_34614 = (0);
var inst_34615 = (0);
var state_34671__$1 = (function (){var statearr_34699 = state_34671;
(statearr_34699[(12)] = inst_34614);

(statearr_34699[(13)] = inst_34613);

(statearr_34699[(14)] = inst_34615);

(statearr_34699[(16)] = inst_34612);

return statearr_34699;
})();
var statearr_34700_34739 = state_34671__$1;
(statearr_34700_34739[(2)] = null);

(statearr_34700_34739[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (14))){
var state_34671__$1 = state_34671;
var statearr_34704_34740 = state_34671__$1;
(statearr_34704_34740[(2)] = null);

(statearr_34704_34740[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (16))){
var inst_34626 = (state_34671[(10)]);
var inst_34630 = cljs.core.chunk_first.call(null,inst_34626);
var inst_34631 = cljs.core.chunk_rest.call(null,inst_34626);
var inst_34632 = cljs.core.count.call(null,inst_34630);
var inst_34612 = inst_34631;
var inst_34613 = inst_34630;
var inst_34614 = inst_34632;
var inst_34615 = (0);
var state_34671__$1 = (function (){var statearr_34705 = state_34671;
(statearr_34705[(12)] = inst_34614);

(statearr_34705[(13)] = inst_34613);

(statearr_34705[(14)] = inst_34615);

(statearr_34705[(16)] = inst_34612);

return statearr_34705;
})();
var statearr_34706_34741 = state_34671__$1;
(statearr_34706_34741[(2)] = null);

(statearr_34706_34741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (10))){
var inst_34614 = (state_34671[(12)]);
var inst_34613 = (state_34671[(13)]);
var inst_34615 = (state_34671[(14)]);
var inst_34612 = (state_34671[(16)]);
var inst_34620 = cljs.core._nth.call(null,inst_34613,inst_34615);
var inst_34621 = cljs.core.async.muxch_STAR_.call(null,inst_34620);
var inst_34622 = cljs.core.async.close_BANG_.call(null,inst_34621);
var inst_34623 = (inst_34615 + (1));
var tmp34701 = inst_34614;
var tmp34702 = inst_34613;
var tmp34703 = inst_34612;
var inst_34612__$1 = tmp34703;
var inst_34613__$1 = tmp34702;
var inst_34614__$1 = tmp34701;
var inst_34615__$1 = inst_34623;
var state_34671__$1 = (function (){var statearr_34707 = state_34671;
(statearr_34707[(12)] = inst_34614__$1);

(statearr_34707[(17)] = inst_34622);

(statearr_34707[(13)] = inst_34613__$1);

(statearr_34707[(14)] = inst_34615__$1);

(statearr_34707[(16)] = inst_34612__$1);

return statearr_34707;
})();
var statearr_34708_34742 = state_34671__$1;
(statearr_34708_34742[(2)] = null);

(statearr_34708_34742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (18))){
var inst_34641 = (state_34671[(2)]);
var state_34671__$1 = state_34671;
var statearr_34709_34743 = state_34671__$1;
(statearr_34709_34743[(2)] = inst_34641);

(statearr_34709_34743[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34672 === (8))){
var inst_34614 = (state_34671[(12)]);
var inst_34615 = (state_34671[(14)]);
var inst_34617 = (inst_34615 < inst_34614);
var inst_34618 = inst_34617;
var state_34671__$1 = state_34671;
if(cljs.core.truth_(inst_34618)){
var statearr_34710_34744 = state_34671__$1;
(statearr_34710_34744[(1)] = (10));

} else {
var statearr_34711_34745 = state_34671__$1;
(statearr_34711_34745[(1)] = (11));

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
});})(c__33497__auto___34717,mults,ensure_mult,p))
;
return ((function (switch__33409__auto__,c__33497__auto___34717,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33410__auto__ = null;
var cljs$core$async$state_machine__33410__auto____0 = (function (){
var statearr_34712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34712[(0)] = cljs$core$async$state_machine__33410__auto__);

(statearr_34712[(1)] = (1));

return statearr_34712;
});
var cljs$core$async$state_machine__33410__auto____1 = (function (state_34671){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_34671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e34713){if((e34713 instanceof Object)){
var ex__33413__auto__ = e34713;
var statearr_34714_34746 = state_34671;
(statearr_34714_34746[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34747 = state_34671;
state_34671 = G__34747;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$state_machine__33410__auto__ = function(state_34671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33410__auto____1.call(this,state_34671);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33410__auto____0;
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33410__auto____1;
return cljs$core$async$state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___34717,mults,ensure_mult,p))
})();
var state__33499__auto__ = (function (){var statearr_34715 = f__33498__auto__.call(null);
(statearr_34715[(6)] = c__33497__auto___34717);

return statearr_34715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___34717,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34749 = arguments.length;
switch (G__34749) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34752 = arguments.length;
switch (G__34752) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34755 = arguments.length;
switch (G__34755) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__33497__auto___34822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___34822,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___34822,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34794){
var state_val_34795 = (state_34794[(1)]);
if((state_val_34795 === (7))){
var state_34794__$1 = state_34794;
var statearr_34796_34823 = state_34794__$1;
(statearr_34796_34823[(2)] = null);

(statearr_34796_34823[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (1))){
var state_34794__$1 = state_34794;
var statearr_34797_34824 = state_34794__$1;
(statearr_34797_34824[(2)] = null);

(statearr_34797_34824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (4))){
var inst_34758 = (state_34794[(7)]);
var inst_34760 = (inst_34758 < cnt);
var state_34794__$1 = state_34794;
if(cljs.core.truth_(inst_34760)){
var statearr_34798_34825 = state_34794__$1;
(statearr_34798_34825[(1)] = (6));

} else {
var statearr_34799_34826 = state_34794__$1;
(statearr_34799_34826[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (15))){
var inst_34790 = (state_34794[(2)]);
var state_34794__$1 = state_34794;
var statearr_34800_34827 = state_34794__$1;
(statearr_34800_34827[(2)] = inst_34790);

(statearr_34800_34827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (13))){
var inst_34783 = cljs.core.async.close_BANG_.call(null,out);
var state_34794__$1 = state_34794;
var statearr_34801_34828 = state_34794__$1;
(statearr_34801_34828[(2)] = inst_34783);

(statearr_34801_34828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (6))){
var state_34794__$1 = state_34794;
var statearr_34802_34829 = state_34794__$1;
(statearr_34802_34829[(2)] = null);

(statearr_34802_34829[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (3))){
var inst_34792 = (state_34794[(2)]);
var state_34794__$1 = state_34794;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34794__$1,inst_34792);
} else {
if((state_val_34795 === (12))){
var inst_34780 = (state_34794[(8)]);
var inst_34780__$1 = (state_34794[(2)]);
var inst_34781 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34780__$1);
var state_34794__$1 = (function (){var statearr_34803 = state_34794;
(statearr_34803[(8)] = inst_34780__$1);

return statearr_34803;
})();
if(cljs.core.truth_(inst_34781)){
var statearr_34804_34830 = state_34794__$1;
(statearr_34804_34830[(1)] = (13));

} else {
var statearr_34805_34831 = state_34794__$1;
(statearr_34805_34831[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (2))){
var inst_34757 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34758 = (0);
var state_34794__$1 = (function (){var statearr_34806 = state_34794;
(statearr_34806[(7)] = inst_34758);

(statearr_34806[(9)] = inst_34757);

return statearr_34806;
})();
var statearr_34807_34832 = state_34794__$1;
(statearr_34807_34832[(2)] = null);

(statearr_34807_34832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (11))){
var inst_34758 = (state_34794[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34794,(10),Object,null,(9));
var inst_34767 = chs__$1.call(null,inst_34758);
var inst_34768 = done.call(null,inst_34758);
var inst_34769 = cljs.core.async.take_BANG_.call(null,inst_34767,inst_34768);
var state_34794__$1 = state_34794;
var statearr_34808_34833 = state_34794__$1;
(statearr_34808_34833[(2)] = inst_34769);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34794__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (9))){
var inst_34758 = (state_34794[(7)]);
var inst_34771 = (state_34794[(2)]);
var inst_34772 = (inst_34758 + (1));
var inst_34758__$1 = inst_34772;
var state_34794__$1 = (function (){var statearr_34809 = state_34794;
(statearr_34809[(10)] = inst_34771);

(statearr_34809[(7)] = inst_34758__$1);

return statearr_34809;
})();
var statearr_34810_34834 = state_34794__$1;
(statearr_34810_34834[(2)] = null);

(statearr_34810_34834[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (5))){
var inst_34778 = (state_34794[(2)]);
var state_34794__$1 = (function (){var statearr_34811 = state_34794;
(statearr_34811[(11)] = inst_34778);

return statearr_34811;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34794__$1,(12),dchan);
} else {
if((state_val_34795 === (14))){
var inst_34780 = (state_34794[(8)]);
var inst_34785 = cljs.core.apply.call(null,f,inst_34780);
var state_34794__$1 = state_34794;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34794__$1,(16),out,inst_34785);
} else {
if((state_val_34795 === (16))){
var inst_34787 = (state_34794[(2)]);
var state_34794__$1 = (function (){var statearr_34812 = state_34794;
(statearr_34812[(12)] = inst_34787);

return statearr_34812;
})();
var statearr_34813_34835 = state_34794__$1;
(statearr_34813_34835[(2)] = null);

(statearr_34813_34835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (10))){
var inst_34762 = (state_34794[(2)]);
var inst_34763 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34794__$1 = (function (){var statearr_34814 = state_34794;
(statearr_34814[(13)] = inst_34762);

return statearr_34814;
})();
var statearr_34815_34836 = state_34794__$1;
(statearr_34815_34836[(2)] = inst_34763);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34794__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34795 === (8))){
var inst_34776 = (state_34794[(2)]);
var state_34794__$1 = state_34794;
var statearr_34816_34837 = state_34794__$1;
(statearr_34816_34837[(2)] = inst_34776);

(statearr_34816_34837[(1)] = (5));


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
});})(c__33497__auto___34822,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33409__auto__,c__33497__auto___34822,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33410__auto__ = null;
var cljs$core$async$state_machine__33410__auto____0 = (function (){
var statearr_34817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34817[(0)] = cljs$core$async$state_machine__33410__auto__);

(statearr_34817[(1)] = (1));

return statearr_34817;
});
var cljs$core$async$state_machine__33410__auto____1 = (function (state_34794){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_34794);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e34818){if((e34818 instanceof Object)){
var ex__33413__auto__ = e34818;
var statearr_34819_34838 = state_34794;
(statearr_34819_34838[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34794);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34839 = state_34794;
state_34794 = G__34839;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$state_machine__33410__auto__ = function(state_34794){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33410__auto____1.call(this,state_34794);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33410__auto____0;
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33410__auto____1;
return cljs$core$async$state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___34822,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33499__auto__ = (function (){var statearr_34820 = f__33498__auto__.call(null);
(statearr_34820[(6)] = c__33497__auto___34822);

return statearr_34820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___34822,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34842 = arguments.length;
switch (G__34842) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33497__auto___34896 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___34896,out){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___34896,out){
return (function (state_34874){
var state_val_34875 = (state_34874[(1)]);
if((state_val_34875 === (7))){
var inst_34853 = (state_34874[(7)]);
var inst_34854 = (state_34874[(8)]);
var inst_34853__$1 = (state_34874[(2)]);
var inst_34854__$1 = cljs.core.nth.call(null,inst_34853__$1,(0),null);
var inst_34855 = cljs.core.nth.call(null,inst_34853__$1,(1),null);
var inst_34856 = (inst_34854__$1 == null);
var state_34874__$1 = (function (){var statearr_34876 = state_34874;
(statearr_34876[(9)] = inst_34855);

(statearr_34876[(7)] = inst_34853__$1);

(statearr_34876[(8)] = inst_34854__$1);

return statearr_34876;
})();
if(cljs.core.truth_(inst_34856)){
var statearr_34877_34897 = state_34874__$1;
(statearr_34877_34897[(1)] = (8));

} else {
var statearr_34878_34898 = state_34874__$1;
(statearr_34878_34898[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (1))){
var inst_34843 = cljs.core.vec.call(null,chs);
var inst_34844 = inst_34843;
var state_34874__$1 = (function (){var statearr_34879 = state_34874;
(statearr_34879[(10)] = inst_34844);

return statearr_34879;
})();
var statearr_34880_34899 = state_34874__$1;
(statearr_34880_34899[(2)] = null);

(statearr_34880_34899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (4))){
var inst_34844 = (state_34874[(10)]);
var state_34874__$1 = state_34874;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34874__$1,(7),inst_34844);
} else {
if((state_val_34875 === (6))){
var inst_34870 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34881_34900 = state_34874__$1;
(statearr_34881_34900[(2)] = inst_34870);

(statearr_34881_34900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (3))){
var inst_34872 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34874__$1,inst_34872);
} else {
if((state_val_34875 === (2))){
var inst_34844 = (state_34874[(10)]);
var inst_34846 = cljs.core.count.call(null,inst_34844);
var inst_34847 = (inst_34846 > (0));
var state_34874__$1 = state_34874;
if(cljs.core.truth_(inst_34847)){
var statearr_34883_34901 = state_34874__$1;
(statearr_34883_34901[(1)] = (4));

} else {
var statearr_34884_34902 = state_34874__$1;
(statearr_34884_34902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (11))){
var inst_34844 = (state_34874[(10)]);
var inst_34863 = (state_34874[(2)]);
var tmp34882 = inst_34844;
var inst_34844__$1 = tmp34882;
var state_34874__$1 = (function (){var statearr_34885 = state_34874;
(statearr_34885[(11)] = inst_34863);

(statearr_34885[(10)] = inst_34844__$1);

return statearr_34885;
})();
var statearr_34886_34903 = state_34874__$1;
(statearr_34886_34903[(2)] = null);

(statearr_34886_34903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (9))){
var inst_34854 = (state_34874[(8)]);
var state_34874__$1 = state_34874;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34874__$1,(11),out,inst_34854);
} else {
if((state_val_34875 === (5))){
var inst_34868 = cljs.core.async.close_BANG_.call(null,out);
var state_34874__$1 = state_34874;
var statearr_34887_34904 = state_34874__$1;
(statearr_34887_34904[(2)] = inst_34868);

(statearr_34887_34904[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (10))){
var inst_34866 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34888_34905 = state_34874__$1;
(statearr_34888_34905[(2)] = inst_34866);

(statearr_34888_34905[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (8))){
var inst_34844 = (state_34874[(10)]);
var inst_34855 = (state_34874[(9)]);
var inst_34853 = (state_34874[(7)]);
var inst_34854 = (state_34874[(8)]);
var inst_34858 = (function (){var cs = inst_34844;
var vec__34849 = inst_34853;
var v = inst_34854;
var c = inst_34855;
return ((function (cs,vec__34849,v,c,inst_34844,inst_34855,inst_34853,inst_34854,state_val_34875,c__33497__auto___34896,out){
return (function (p1__34840_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34840_SHARP_);
});
;})(cs,vec__34849,v,c,inst_34844,inst_34855,inst_34853,inst_34854,state_val_34875,c__33497__auto___34896,out))
})();
var inst_34859 = cljs.core.filterv.call(null,inst_34858,inst_34844);
var inst_34844__$1 = inst_34859;
var state_34874__$1 = (function (){var statearr_34889 = state_34874;
(statearr_34889[(10)] = inst_34844__$1);

return statearr_34889;
})();
var statearr_34890_34906 = state_34874__$1;
(statearr_34890_34906[(2)] = null);

(statearr_34890_34906[(1)] = (2));


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
});})(c__33497__auto___34896,out))
;
return ((function (switch__33409__auto__,c__33497__auto___34896,out){
return (function() {
var cljs$core$async$state_machine__33410__auto__ = null;
var cljs$core$async$state_machine__33410__auto____0 = (function (){
var statearr_34891 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34891[(0)] = cljs$core$async$state_machine__33410__auto__);

(statearr_34891[(1)] = (1));

return statearr_34891;
});
var cljs$core$async$state_machine__33410__auto____1 = (function (state_34874){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_34874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e34892){if((e34892 instanceof Object)){
var ex__33413__auto__ = e34892;
var statearr_34893_34907 = state_34874;
(statearr_34893_34907[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34908 = state_34874;
state_34874 = G__34908;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$state_machine__33410__auto__ = function(state_34874){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33410__auto____1.call(this,state_34874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33410__auto____0;
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33410__auto____1;
return cljs$core$async$state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___34896,out))
})();
var state__33499__auto__ = (function (){var statearr_34894 = f__33498__auto__.call(null);
(statearr_34894[(6)] = c__33497__auto___34896);

return statearr_34894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___34896,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34910 = arguments.length;
switch (G__34910) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33497__auto___34955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___34955,out){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___34955,out){
return (function (state_34934){
var state_val_34935 = (state_34934[(1)]);
if((state_val_34935 === (7))){
var inst_34916 = (state_34934[(7)]);
var inst_34916__$1 = (state_34934[(2)]);
var inst_34917 = (inst_34916__$1 == null);
var inst_34918 = cljs.core.not.call(null,inst_34917);
var state_34934__$1 = (function (){var statearr_34936 = state_34934;
(statearr_34936[(7)] = inst_34916__$1);

return statearr_34936;
})();
if(inst_34918){
var statearr_34937_34956 = state_34934__$1;
(statearr_34937_34956[(1)] = (8));

} else {
var statearr_34938_34957 = state_34934__$1;
(statearr_34938_34957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34935 === (1))){
var inst_34911 = (0);
var state_34934__$1 = (function (){var statearr_34939 = state_34934;
(statearr_34939[(8)] = inst_34911);

return statearr_34939;
})();
var statearr_34940_34958 = state_34934__$1;
(statearr_34940_34958[(2)] = null);

(statearr_34940_34958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34935 === (4))){
var state_34934__$1 = state_34934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34934__$1,(7),ch);
} else {
if((state_val_34935 === (6))){
var inst_34929 = (state_34934[(2)]);
var state_34934__$1 = state_34934;
var statearr_34941_34959 = state_34934__$1;
(statearr_34941_34959[(2)] = inst_34929);

(statearr_34941_34959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34935 === (3))){
var inst_34931 = (state_34934[(2)]);
var inst_34932 = cljs.core.async.close_BANG_.call(null,out);
var state_34934__$1 = (function (){var statearr_34942 = state_34934;
(statearr_34942[(9)] = inst_34931);

return statearr_34942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34934__$1,inst_34932);
} else {
if((state_val_34935 === (2))){
var inst_34911 = (state_34934[(8)]);
var inst_34913 = (inst_34911 < n);
var state_34934__$1 = state_34934;
if(cljs.core.truth_(inst_34913)){
var statearr_34943_34960 = state_34934__$1;
(statearr_34943_34960[(1)] = (4));

} else {
var statearr_34944_34961 = state_34934__$1;
(statearr_34944_34961[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34935 === (11))){
var inst_34911 = (state_34934[(8)]);
var inst_34921 = (state_34934[(2)]);
var inst_34922 = (inst_34911 + (1));
var inst_34911__$1 = inst_34922;
var state_34934__$1 = (function (){var statearr_34945 = state_34934;
(statearr_34945[(10)] = inst_34921);

(statearr_34945[(8)] = inst_34911__$1);

return statearr_34945;
})();
var statearr_34946_34962 = state_34934__$1;
(statearr_34946_34962[(2)] = null);

(statearr_34946_34962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34935 === (9))){
var state_34934__$1 = state_34934;
var statearr_34947_34963 = state_34934__$1;
(statearr_34947_34963[(2)] = null);

(statearr_34947_34963[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34935 === (5))){
var state_34934__$1 = state_34934;
var statearr_34948_34964 = state_34934__$1;
(statearr_34948_34964[(2)] = null);

(statearr_34948_34964[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34935 === (10))){
var inst_34926 = (state_34934[(2)]);
var state_34934__$1 = state_34934;
var statearr_34949_34965 = state_34934__$1;
(statearr_34949_34965[(2)] = inst_34926);

(statearr_34949_34965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34935 === (8))){
var inst_34916 = (state_34934[(7)]);
var state_34934__$1 = state_34934;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34934__$1,(11),out,inst_34916);
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
});})(c__33497__auto___34955,out))
;
return ((function (switch__33409__auto__,c__33497__auto___34955,out){
return (function() {
var cljs$core$async$state_machine__33410__auto__ = null;
var cljs$core$async$state_machine__33410__auto____0 = (function (){
var statearr_34950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34950[(0)] = cljs$core$async$state_machine__33410__auto__);

(statearr_34950[(1)] = (1));

return statearr_34950;
});
var cljs$core$async$state_machine__33410__auto____1 = (function (state_34934){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_34934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e34951){if((e34951 instanceof Object)){
var ex__33413__auto__ = e34951;
var statearr_34952_34966 = state_34934;
(statearr_34952_34966[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34967 = state_34934;
state_34934 = G__34967;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$state_machine__33410__auto__ = function(state_34934){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33410__auto____1.call(this,state_34934);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33410__auto____0;
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33410__auto____1;
return cljs$core$async$state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___34955,out))
})();
var state__33499__auto__ = (function (){var statearr_34953 = f__33498__auto__.call(null);
(statearr_34953[(6)] = c__33497__auto___34955);

return statearr_34953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___34955,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34969 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34969 = (function (f,ch,meta34970){
this.f = f;
this.ch = ch;
this.meta34970 = meta34970;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34971,meta34970__$1){
var self__ = this;
var _34971__$1 = this;
return (new cljs.core.async.t_cljs$core$async34969(self__.f,self__.ch,meta34970__$1));
});

cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34971){
var self__ = this;
var _34971__$1 = this;
return self__.meta34970;
});

cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34972 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34972 = (function (f,ch,meta34970,_,fn1,meta34973){
this.f = f;
this.ch = ch;
this.meta34970 = meta34970;
this._ = _;
this.fn1 = fn1;
this.meta34973 = meta34973;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34974,meta34973__$1){
var self__ = this;
var _34974__$1 = this;
return (new cljs.core.async.t_cljs$core$async34972(self__.f,self__.ch,self__.meta34970,self__._,self__.fn1,meta34973__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34972.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34974){
var self__ = this;
var _34974__$1 = this;
return self__.meta34973;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34972.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34972.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34968_SHARP_){
return f1.call(null,(((p1__34968_SHARP_ == null))?null:self__.f.call(null,p1__34968_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34972.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34970","meta34970",1284331901,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34969","cljs.core.async/t_cljs$core$async34969",-1227111888,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34973","meta34973",-812053739,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34972.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34972.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34972";

cljs.core.async.t_cljs$core$async34972.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async34972");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34972 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34972(f__$1,ch__$1,meta34970__$1,___$2,fn1__$1,meta34973){
return (new cljs.core.async.t_cljs$core$async34972(f__$1,ch__$1,meta34970__$1,___$2,fn1__$1,meta34973));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34972(self__.f,self__.ch,self__.meta34970,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__28420__auto__ = ret;
if(cljs.core.truth_(and__28420__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__28420__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34969.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34969.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34970","meta34970",1284331901,null)], null);
});

cljs.core.async.t_cljs$core$async34969.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34969.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34969";

cljs.core.async.t_cljs$core$async34969.cljs$lang$ctorPrWriter = (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async34969");
});

cljs.core.async.__GT_t_cljs$core$async34969 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34969(f__$1,ch__$1,meta34970){
return (new cljs.core.async.t_cljs$core$async34969(f__$1,ch__$1,meta34970));
});

}

return (new cljs.core.async.t_cljs$core$async34969(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34975 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34975 = (function (f,ch,meta34976){
this.f = f;
this.ch = ch;
this.meta34976 = meta34976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34977,meta34976__$1){
var self__ = this;
var _34977__$1 = this;
return (new cljs.core.async.t_cljs$core$async34975(self__.f,self__.ch,meta34976__$1));
});

cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34977){
var self__ = this;
var _34977__$1 = this;
return self__.meta34976;
});

cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34975.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34976","meta34976",78809684,null)], null);
});

cljs.core.async.t_cljs$core$async34975.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34975";

cljs.core.async.t_cljs$core$async34975.cljs$lang$ctorPrWriter = (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async34975");
});

cljs.core.async.__GT_t_cljs$core$async34975 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34975(f__$1,ch__$1,meta34976){
return (new cljs.core.async.t_cljs$core$async34975(f__$1,ch__$1,meta34976));
});

}

return (new cljs.core.async.t_cljs$core$async34975(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34978 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34978 = (function (p,ch,meta34979){
this.p = p;
this.ch = ch;
this.meta34979 = meta34979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34980,meta34979__$1){
var self__ = this;
var _34980__$1 = this;
return (new cljs.core.async.t_cljs$core$async34978(self__.p,self__.ch,meta34979__$1));
});

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34980){
var self__ = this;
var _34980__$1 = this;
return self__.meta34979;
});

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34978.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34979","meta34979",109464284,null)], null);
});

cljs.core.async.t_cljs$core$async34978.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34978";

cljs.core.async.t_cljs$core$async34978.cljs$lang$ctorPrWriter = (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async34978");
});

cljs.core.async.__GT_t_cljs$core$async34978 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34978(p__$1,ch__$1,meta34979){
return (new cljs.core.async.t_cljs$core$async34978(p__$1,ch__$1,meta34979));
});

}

return (new cljs.core.async.t_cljs$core$async34978(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34982 = arguments.length;
switch (G__34982) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33497__auto___35022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___35022,out){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___35022,out){
return (function (state_35003){
var state_val_35004 = (state_35003[(1)]);
if((state_val_35004 === (7))){
var inst_34999 = (state_35003[(2)]);
var state_35003__$1 = state_35003;
var statearr_35005_35023 = state_35003__$1;
(statearr_35005_35023[(2)] = inst_34999);

(statearr_35005_35023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (1))){
var state_35003__$1 = state_35003;
var statearr_35006_35024 = state_35003__$1;
(statearr_35006_35024[(2)] = null);

(statearr_35006_35024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (4))){
var inst_34985 = (state_35003[(7)]);
var inst_34985__$1 = (state_35003[(2)]);
var inst_34986 = (inst_34985__$1 == null);
var state_35003__$1 = (function (){var statearr_35007 = state_35003;
(statearr_35007[(7)] = inst_34985__$1);

return statearr_35007;
})();
if(cljs.core.truth_(inst_34986)){
var statearr_35008_35025 = state_35003__$1;
(statearr_35008_35025[(1)] = (5));

} else {
var statearr_35009_35026 = state_35003__$1;
(statearr_35009_35026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (6))){
var inst_34985 = (state_35003[(7)]);
var inst_34990 = p.call(null,inst_34985);
var state_35003__$1 = state_35003;
if(cljs.core.truth_(inst_34990)){
var statearr_35010_35027 = state_35003__$1;
(statearr_35010_35027[(1)] = (8));

} else {
var statearr_35011_35028 = state_35003__$1;
(statearr_35011_35028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (3))){
var inst_35001 = (state_35003[(2)]);
var state_35003__$1 = state_35003;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35003__$1,inst_35001);
} else {
if((state_val_35004 === (2))){
var state_35003__$1 = state_35003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35003__$1,(4),ch);
} else {
if((state_val_35004 === (11))){
var inst_34993 = (state_35003[(2)]);
var state_35003__$1 = state_35003;
var statearr_35012_35029 = state_35003__$1;
(statearr_35012_35029[(2)] = inst_34993);

(statearr_35012_35029[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (9))){
var state_35003__$1 = state_35003;
var statearr_35013_35030 = state_35003__$1;
(statearr_35013_35030[(2)] = null);

(statearr_35013_35030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (5))){
var inst_34988 = cljs.core.async.close_BANG_.call(null,out);
var state_35003__$1 = state_35003;
var statearr_35014_35031 = state_35003__$1;
(statearr_35014_35031[(2)] = inst_34988);

(statearr_35014_35031[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (10))){
var inst_34996 = (state_35003[(2)]);
var state_35003__$1 = (function (){var statearr_35015 = state_35003;
(statearr_35015[(8)] = inst_34996);

return statearr_35015;
})();
var statearr_35016_35032 = state_35003__$1;
(statearr_35016_35032[(2)] = null);

(statearr_35016_35032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35004 === (8))){
var inst_34985 = (state_35003[(7)]);
var state_35003__$1 = state_35003;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35003__$1,(11),out,inst_34985);
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
});})(c__33497__auto___35022,out))
;
return ((function (switch__33409__auto__,c__33497__auto___35022,out){
return (function() {
var cljs$core$async$state_machine__33410__auto__ = null;
var cljs$core$async$state_machine__33410__auto____0 = (function (){
var statearr_35017 = [null,null,null,null,null,null,null,null,null];
(statearr_35017[(0)] = cljs$core$async$state_machine__33410__auto__);

(statearr_35017[(1)] = (1));

return statearr_35017;
});
var cljs$core$async$state_machine__33410__auto____1 = (function (state_35003){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_35003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e35018){if((e35018 instanceof Object)){
var ex__33413__auto__ = e35018;
var statearr_35019_35033 = state_35003;
(statearr_35019_35033[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35018;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35034 = state_35003;
state_35003 = G__35034;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$state_machine__33410__auto__ = function(state_35003){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33410__auto____1.call(this,state_35003);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33410__auto____0;
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33410__auto____1;
return cljs$core$async$state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___35022,out))
})();
var state__33499__auto__ = (function (){var statearr_35020 = f__33498__auto__.call(null);
(statearr_35020[(6)] = c__33497__auto___35022);

return statearr_35020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___35022,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35036 = arguments.length;
switch (G__35036) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto__){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto__){
return (function (state_35099){
var state_val_35100 = (state_35099[(1)]);
if((state_val_35100 === (7))){
var inst_35095 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
var statearr_35101_35139 = state_35099__$1;
(statearr_35101_35139[(2)] = inst_35095);

(statearr_35101_35139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (20))){
var inst_35065 = (state_35099[(7)]);
var inst_35076 = (state_35099[(2)]);
var inst_35077 = cljs.core.next.call(null,inst_35065);
var inst_35051 = inst_35077;
var inst_35052 = null;
var inst_35053 = (0);
var inst_35054 = (0);
var state_35099__$1 = (function (){var statearr_35102 = state_35099;
(statearr_35102[(8)] = inst_35054);

(statearr_35102[(9)] = inst_35052);

(statearr_35102[(10)] = inst_35076);

(statearr_35102[(11)] = inst_35051);

(statearr_35102[(12)] = inst_35053);

return statearr_35102;
})();
var statearr_35103_35140 = state_35099__$1;
(statearr_35103_35140[(2)] = null);

(statearr_35103_35140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (1))){
var state_35099__$1 = state_35099;
var statearr_35104_35141 = state_35099__$1;
(statearr_35104_35141[(2)] = null);

(statearr_35104_35141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (4))){
var inst_35040 = (state_35099[(13)]);
var inst_35040__$1 = (state_35099[(2)]);
var inst_35041 = (inst_35040__$1 == null);
var state_35099__$1 = (function (){var statearr_35105 = state_35099;
(statearr_35105[(13)] = inst_35040__$1);

return statearr_35105;
})();
if(cljs.core.truth_(inst_35041)){
var statearr_35106_35142 = state_35099__$1;
(statearr_35106_35142[(1)] = (5));

} else {
var statearr_35107_35143 = state_35099__$1;
(statearr_35107_35143[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (15))){
var state_35099__$1 = state_35099;
var statearr_35111_35144 = state_35099__$1;
(statearr_35111_35144[(2)] = null);

(statearr_35111_35144[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (21))){
var state_35099__$1 = state_35099;
var statearr_35112_35145 = state_35099__$1;
(statearr_35112_35145[(2)] = null);

(statearr_35112_35145[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (13))){
var inst_35054 = (state_35099[(8)]);
var inst_35052 = (state_35099[(9)]);
var inst_35051 = (state_35099[(11)]);
var inst_35053 = (state_35099[(12)]);
var inst_35061 = (state_35099[(2)]);
var inst_35062 = (inst_35054 + (1));
var tmp35108 = inst_35052;
var tmp35109 = inst_35051;
var tmp35110 = inst_35053;
var inst_35051__$1 = tmp35109;
var inst_35052__$1 = tmp35108;
var inst_35053__$1 = tmp35110;
var inst_35054__$1 = inst_35062;
var state_35099__$1 = (function (){var statearr_35113 = state_35099;
(statearr_35113[(8)] = inst_35054__$1);

(statearr_35113[(9)] = inst_35052__$1);

(statearr_35113[(14)] = inst_35061);

(statearr_35113[(11)] = inst_35051__$1);

(statearr_35113[(12)] = inst_35053__$1);

return statearr_35113;
})();
var statearr_35114_35146 = state_35099__$1;
(statearr_35114_35146[(2)] = null);

(statearr_35114_35146[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (22))){
var state_35099__$1 = state_35099;
var statearr_35115_35147 = state_35099__$1;
(statearr_35115_35147[(2)] = null);

(statearr_35115_35147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (6))){
var inst_35040 = (state_35099[(13)]);
var inst_35049 = f.call(null,inst_35040);
var inst_35050 = cljs.core.seq.call(null,inst_35049);
var inst_35051 = inst_35050;
var inst_35052 = null;
var inst_35053 = (0);
var inst_35054 = (0);
var state_35099__$1 = (function (){var statearr_35116 = state_35099;
(statearr_35116[(8)] = inst_35054);

(statearr_35116[(9)] = inst_35052);

(statearr_35116[(11)] = inst_35051);

(statearr_35116[(12)] = inst_35053);

return statearr_35116;
})();
var statearr_35117_35148 = state_35099__$1;
(statearr_35117_35148[(2)] = null);

(statearr_35117_35148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (17))){
var inst_35065 = (state_35099[(7)]);
var inst_35069 = cljs.core.chunk_first.call(null,inst_35065);
var inst_35070 = cljs.core.chunk_rest.call(null,inst_35065);
var inst_35071 = cljs.core.count.call(null,inst_35069);
var inst_35051 = inst_35070;
var inst_35052 = inst_35069;
var inst_35053 = inst_35071;
var inst_35054 = (0);
var state_35099__$1 = (function (){var statearr_35118 = state_35099;
(statearr_35118[(8)] = inst_35054);

(statearr_35118[(9)] = inst_35052);

(statearr_35118[(11)] = inst_35051);

(statearr_35118[(12)] = inst_35053);

return statearr_35118;
})();
var statearr_35119_35149 = state_35099__$1;
(statearr_35119_35149[(2)] = null);

(statearr_35119_35149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (3))){
var inst_35097 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35099__$1,inst_35097);
} else {
if((state_val_35100 === (12))){
var inst_35085 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
var statearr_35120_35150 = state_35099__$1;
(statearr_35120_35150[(2)] = inst_35085);

(statearr_35120_35150[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (2))){
var state_35099__$1 = state_35099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35099__$1,(4),in$);
} else {
if((state_val_35100 === (23))){
var inst_35093 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
var statearr_35121_35151 = state_35099__$1;
(statearr_35121_35151[(2)] = inst_35093);

(statearr_35121_35151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (19))){
var inst_35080 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
var statearr_35122_35152 = state_35099__$1;
(statearr_35122_35152[(2)] = inst_35080);

(statearr_35122_35152[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (11))){
var inst_35051 = (state_35099[(11)]);
var inst_35065 = (state_35099[(7)]);
var inst_35065__$1 = cljs.core.seq.call(null,inst_35051);
var state_35099__$1 = (function (){var statearr_35123 = state_35099;
(statearr_35123[(7)] = inst_35065__$1);

return statearr_35123;
})();
if(inst_35065__$1){
var statearr_35124_35153 = state_35099__$1;
(statearr_35124_35153[(1)] = (14));

} else {
var statearr_35125_35154 = state_35099__$1;
(statearr_35125_35154[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (9))){
var inst_35087 = (state_35099[(2)]);
var inst_35088 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35099__$1 = (function (){var statearr_35126 = state_35099;
(statearr_35126[(15)] = inst_35087);

return statearr_35126;
})();
if(cljs.core.truth_(inst_35088)){
var statearr_35127_35155 = state_35099__$1;
(statearr_35127_35155[(1)] = (21));

} else {
var statearr_35128_35156 = state_35099__$1;
(statearr_35128_35156[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (5))){
var inst_35043 = cljs.core.async.close_BANG_.call(null,out);
var state_35099__$1 = state_35099;
var statearr_35129_35157 = state_35099__$1;
(statearr_35129_35157[(2)] = inst_35043);

(statearr_35129_35157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (14))){
var inst_35065 = (state_35099[(7)]);
var inst_35067 = cljs.core.chunked_seq_QMARK_.call(null,inst_35065);
var state_35099__$1 = state_35099;
if(inst_35067){
var statearr_35130_35158 = state_35099__$1;
(statearr_35130_35158[(1)] = (17));

} else {
var statearr_35131_35159 = state_35099__$1;
(statearr_35131_35159[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (16))){
var inst_35083 = (state_35099[(2)]);
var state_35099__$1 = state_35099;
var statearr_35132_35160 = state_35099__$1;
(statearr_35132_35160[(2)] = inst_35083);

(statearr_35132_35160[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35100 === (10))){
var inst_35054 = (state_35099[(8)]);
var inst_35052 = (state_35099[(9)]);
var inst_35059 = cljs.core._nth.call(null,inst_35052,inst_35054);
var state_35099__$1 = state_35099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35099__$1,(13),out,inst_35059);
} else {
if((state_val_35100 === (18))){
var inst_35065 = (state_35099[(7)]);
var inst_35074 = cljs.core.first.call(null,inst_35065);
var state_35099__$1 = state_35099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35099__$1,(20),out,inst_35074);
} else {
if((state_val_35100 === (8))){
var inst_35054 = (state_35099[(8)]);
var inst_35053 = (state_35099[(12)]);
var inst_35056 = (inst_35054 < inst_35053);
var inst_35057 = inst_35056;
var state_35099__$1 = state_35099;
if(cljs.core.truth_(inst_35057)){
var statearr_35133_35161 = state_35099__$1;
(statearr_35133_35161[(1)] = (10));

} else {
var statearr_35134_35162 = state_35099__$1;
(statearr_35134_35162[(1)] = (11));

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
});})(c__33497__auto__))
;
return ((function (switch__33409__auto__,c__33497__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33410__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33410__auto____0 = (function (){
var statearr_35135 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35135[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33410__auto__);

(statearr_35135[(1)] = (1));

return statearr_35135;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33410__auto____1 = (function (state_35099){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_35099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e35136){if((e35136 instanceof Object)){
var ex__33413__auto__ = e35136;
var statearr_35137_35163 = state_35099;
(statearr_35137_35163[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35136;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35164 = state_35099;
state_35099 = G__35164;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33410__auto__ = function(state_35099){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33410__auto____1.call(this,state_35099);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33410__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33410__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto__))
})();
var state__33499__auto__ = (function (){var statearr_35138 = f__33498__auto__.call(null);
(statearr_35138[(6)] = c__33497__auto__);

return statearr_35138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto__))
);

return c__33497__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35166 = arguments.length;
switch (G__35166) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35169 = arguments.length;
switch (G__35169) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35172 = arguments.length;
switch (G__35172) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33497__auto___35219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___35219,out){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___35219,out){
return (function (state_35196){
var state_val_35197 = (state_35196[(1)]);
if((state_val_35197 === (7))){
var inst_35191 = (state_35196[(2)]);
var state_35196__$1 = state_35196;
var statearr_35198_35220 = state_35196__$1;
(statearr_35198_35220[(2)] = inst_35191);

(statearr_35198_35220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (1))){
var inst_35173 = null;
var state_35196__$1 = (function (){var statearr_35199 = state_35196;
(statearr_35199[(7)] = inst_35173);

return statearr_35199;
})();
var statearr_35200_35221 = state_35196__$1;
(statearr_35200_35221[(2)] = null);

(statearr_35200_35221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (4))){
var inst_35176 = (state_35196[(8)]);
var inst_35176__$1 = (state_35196[(2)]);
var inst_35177 = (inst_35176__$1 == null);
var inst_35178 = cljs.core.not.call(null,inst_35177);
var state_35196__$1 = (function (){var statearr_35201 = state_35196;
(statearr_35201[(8)] = inst_35176__$1);

return statearr_35201;
})();
if(inst_35178){
var statearr_35202_35222 = state_35196__$1;
(statearr_35202_35222[(1)] = (5));

} else {
var statearr_35203_35223 = state_35196__$1;
(statearr_35203_35223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (6))){
var state_35196__$1 = state_35196;
var statearr_35204_35224 = state_35196__$1;
(statearr_35204_35224[(2)] = null);

(statearr_35204_35224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (3))){
var inst_35193 = (state_35196[(2)]);
var inst_35194 = cljs.core.async.close_BANG_.call(null,out);
var state_35196__$1 = (function (){var statearr_35205 = state_35196;
(statearr_35205[(9)] = inst_35193);

return statearr_35205;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35196__$1,inst_35194);
} else {
if((state_val_35197 === (2))){
var state_35196__$1 = state_35196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35196__$1,(4),ch);
} else {
if((state_val_35197 === (11))){
var inst_35176 = (state_35196[(8)]);
var inst_35185 = (state_35196[(2)]);
var inst_35173 = inst_35176;
var state_35196__$1 = (function (){var statearr_35206 = state_35196;
(statearr_35206[(10)] = inst_35185);

(statearr_35206[(7)] = inst_35173);

return statearr_35206;
})();
var statearr_35207_35225 = state_35196__$1;
(statearr_35207_35225[(2)] = null);

(statearr_35207_35225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (9))){
var inst_35176 = (state_35196[(8)]);
var state_35196__$1 = state_35196;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35196__$1,(11),out,inst_35176);
} else {
if((state_val_35197 === (5))){
var inst_35176 = (state_35196[(8)]);
var inst_35173 = (state_35196[(7)]);
var inst_35180 = cljs.core._EQ_.call(null,inst_35176,inst_35173);
var state_35196__$1 = state_35196;
if(inst_35180){
var statearr_35209_35226 = state_35196__$1;
(statearr_35209_35226[(1)] = (8));

} else {
var statearr_35210_35227 = state_35196__$1;
(statearr_35210_35227[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (10))){
var inst_35188 = (state_35196[(2)]);
var state_35196__$1 = state_35196;
var statearr_35211_35228 = state_35196__$1;
(statearr_35211_35228[(2)] = inst_35188);

(statearr_35211_35228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (8))){
var inst_35173 = (state_35196[(7)]);
var tmp35208 = inst_35173;
var inst_35173__$1 = tmp35208;
var state_35196__$1 = (function (){var statearr_35212 = state_35196;
(statearr_35212[(7)] = inst_35173__$1);

return statearr_35212;
})();
var statearr_35213_35229 = state_35196__$1;
(statearr_35213_35229[(2)] = null);

(statearr_35213_35229[(1)] = (2));


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
});})(c__33497__auto___35219,out))
;
return ((function (switch__33409__auto__,c__33497__auto___35219,out){
return (function() {
var cljs$core$async$state_machine__33410__auto__ = null;
var cljs$core$async$state_machine__33410__auto____0 = (function (){
var statearr_35214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35214[(0)] = cljs$core$async$state_machine__33410__auto__);

(statearr_35214[(1)] = (1));

return statearr_35214;
});
var cljs$core$async$state_machine__33410__auto____1 = (function (state_35196){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_35196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e35215){if((e35215 instanceof Object)){
var ex__33413__auto__ = e35215;
var statearr_35216_35230 = state_35196;
(statearr_35216_35230[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35231 = state_35196;
state_35196 = G__35231;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$state_machine__33410__auto__ = function(state_35196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33410__auto____1.call(this,state_35196);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33410__auto____0;
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33410__auto____1;
return cljs$core$async$state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___35219,out))
})();
var state__33499__auto__ = (function (){var statearr_35217 = f__33498__auto__.call(null);
(statearr_35217[(6)] = c__33497__auto___35219);

return statearr_35217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___35219,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35233 = arguments.length;
switch (G__35233) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33497__auto___35299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___35299,out){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___35299,out){
return (function (state_35271){
var state_val_35272 = (state_35271[(1)]);
if((state_val_35272 === (7))){
var inst_35267 = (state_35271[(2)]);
var state_35271__$1 = state_35271;
var statearr_35273_35300 = state_35271__$1;
(statearr_35273_35300[(2)] = inst_35267);

(statearr_35273_35300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (1))){
var inst_35234 = (new Array(n));
var inst_35235 = inst_35234;
var inst_35236 = (0);
var state_35271__$1 = (function (){var statearr_35274 = state_35271;
(statearr_35274[(7)] = inst_35235);

(statearr_35274[(8)] = inst_35236);

return statearr_35274;
})();
var statearr_35275_35301 = state_35271__$1;
(statearr_35275_35301[(2)] = null);

(statearr_35275_35301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (4))){
var inst_35239 = (state_35271[(9)]);
var inst_35239__$1 = (state_35271[(2)]);
var inst_35240 = (inst_35239__$1 == null);
var inst_35241 = cljs.core.not.call(null,inst_35240);
var state_35271__$1 = (function (){var statearr_35276 = state_35271;
(statearr_35276[(9)] = inst_35239__$1);

return statearr_35276;
})();
if(inst_35241){
var statearr_35277_35302 = state_35271__$1;
(statearr_35277_35302[(1)] = (5));

} else {
var statearr_35278_35303 = state_35271__$1;
(statearr_35278_35303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (15))){
var inst_35261 = (state_35271[(2)]);
var state_35271__$1 = state_35271;
var statearr_35279_35304 = state_35271__$1;
(statearr_35279_35304[(2)] = inst_35261);

(statearr_35279_35304[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (13))){
var state_35271__$1 = state_35271;
var statearr_35280_35305 = state_35271__$1;
(statearr_35280_35305[(2)] = null);

(statearr_35280_35305[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (6))){
var inst_35236 = (state_35271[(8)]);
var inst_35257 = (inst_35236 > (0));
var state_35271__$1 = state_35271;
if(cljs.core.truth_(inst_35257)){
var statearr_35281_35306 = state_35271__$1;
(statearr_35281_35306[(1)] = (12));

} else {
var statearr_35282_35307 = state_35271__$1;
(statearr_35282_35307[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (3))){
var inst_35269 = (state_35271[(2)]);
var state_35271__$1 = state_35271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35271__$1,inst_35269);
} else {
if((state_val_35272 === (12))){
var inst_35235 = (state_35271[(7)]);
var inst_35259 = cljs.core.vec.call(null,inst_35235);
var state_35271__$1 = state_35271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35271__$1,(15),out,inst_35259);
} else {
if((state_val_35272 === (2))){
var state_35271__$1 = state_35271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35271__$1,(4),ch);
} else {
if((state_val_35272 === (11))){
var inst_35251 = (state_35271[(2)]);
var inst_35252 = (new Array(n));
var inst_35235 = inst_35252;
var inst_35236 = (0);
var state_35271__$1 = (function (){var statearr_35283 = state_35271;
(statearr_35283[(10)] = inst_35251);

(statearr_35283[(7)] = inst_35235);

(statearr_35283[(8)] = inst_35236);

return statearr_35283;
})();
var statearr_35284_35308 = state_35271__$1;
(statearr_35284_35308[(2)] = null);

(statearr_35284_35308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (9))){
var inst_35235 = (state_35271[(7)]);
var inst_35249 = cljs.core.vec.call(null,inst_35235);
var state_35271__$1 = state_35271;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35271__$1,(11),out,inst_35249);
} else {
if((state_val_35272 === (5))){
var inst_35239 = (state_35271[(9)]);
var inst_35235 = (state_35271[(7)]);
var inst_35244 = (state_35271[(11)]);
var inst_35236 = (state_35271[(8)]);
var inst_35243 = (inst_35235[inst_35236] = inst_35239);
var inst_35244__$1 = (inst_35236 + (1));
var inst_35245 = (inst_35244__$1 < n);
var state_35271__$1 = (function (){var statearr_35285 = state_35271;
(statearr_35285[(12)] = inst_35243);

(statearr_35285[(11)] = inst_35244__$1);

return statearr_35285;
})();
if(cljs.core.truth_(inst_35245)){
var statearr_35286_35309 = state_35271__$1;
(statearr_35286_35309[(1)] = (8));

} else {
var statearr_35287_35310 = state_35271__$1;
(statearr_35287_35310[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (14))){
var inst_35264 = (state_35271[(2)]);
var inst_35265 = cljs.core.async.close_BANG_.call(null,out);
var state_35271__$1 = (function (){var statearr_35289 = state_35271;
(statearr_35289[(13)] = inst_35264);

return statearr_35289;
})();
var statearr_35290_35311 = state_35271__$1;
(statearr_35290_35311[(2)] = inst_35265);

(statearr_35290_35311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (10))){
var inst_35255 = (state_35271[(2)]);
var state_35271__$1 = state_35271;
var statearr_35291_35312 = state_35271__$1;
(statearr_35291_35312[(2)] = inst_35255);

(statearr_35291_35312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35272 === (8))){
var inst_35235 = (state_35271[(7)]);
var inst_35244 = (state_35271[(11)]);
var tmp35288 = inst_35235;
var inst_35235__$1 = tmp35288;
var inst_35236 = inst_35244;
var state_35271__$1 = (function (){var statearr_35292 = state_35271;
(statearr_35292[(7)] = inst_35235__$1);

(statearr_35292[(8)] = inst_35236);

return statearr_35292;
})();
var statearr_35293_35313 = state_35271__$1;
(statearr_35293_35313[(2)] = null);

(statearr_35293_35313[(1)] = (2));


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
});})(c__33497__auto___35299,out))
;
return ((function (switch__33409__auto__,c__33497__auto___35299,out){
return (function() {
var cljs$core$async$state_machine__33410__auto__ = null;
var cljs$core$async$state_machine__33410__auto____0 = (function (){
var statearr_35294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35294[(0)] = cljs$core$async$state_machine__33410__auto__);

(statearr_35294[(1)] = (1));

return statearr_35294;
});
var cljs$core$async$state_machine__33410__auto____1 = (function (state_35271){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_35271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e35295){if((e35295 instanceof Object)){
var ex__33413__auto__ = e35295;
var statearr_35296_35314 = state_35271;
(statearr_35296_35314[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35295;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35315 = state_35271;
state_35271 = G__35315;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$state_machine__33410__auto__ = function(state_35271){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33410__auto____1.call(this,state_35271);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33410__auto____0;
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33410__auto____1;
return cljs$core$async$state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___35299,out))
})();
var state__33499__auto__ = (function (){var statearr_35297 = f__33498__auto__.call(null);
(statearr_35297[(6)] = c__33497__auto___35299);

return statearr_35297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___35299,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35317 = arguments.length;
switch (G__35317) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__33497__auto___35387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___35387,out){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___35387,out){
return (function (state_35359){
var state_val_35360 = (state_35359[(1)]);
if((state_val_35360 === (7))){
var inst_35355 = (state_35359[(2)]);
var state_35359__$1 = state_35359;
var statearr_35361_35388 = state_35359__$1;
(statearr_35361_35388[(2)] = inst_35355);

(statearr_35361_35388[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35360 === (1))){
var inst_35318 = [];
var inst_35319 = inst_35318;
var inst_35320 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35359__$1 = (function (){var statearr_35362 = state_35359;
(statearr_35362[(7)] = inst_35320);

(statearr_35362[(8)] = inst_35319);

return statearr_35362;
})();
var statearr_35363_35389 = state_35359__$1;
(statearr_35363_35389[(2)] = null);

(statearr_35363_35389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35360 === (4))){
var inst_35323 = (state_35359[(9)]);
var inst_35323__$1 = (state_35359[(2)]);
var inst_35324 = (inst_35323__$1 == null);
var inst_35325 = cljs.core.not.call(null,inst_35324);
var state_35359__$1 = (function (){var statearr_35364 = state_35359;
(statearr_35364[(9)] = inst_35323__$1);

return statearr_35364;
})();
if(inst_35325){
var statearr_35365_35390 = state_35359__$1;
(statearr_35365_35390[(1)] = (5));

} else {
var statearr_35366_35391 = state_35359__$1;
(statearr_35366_35391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35360 === (15))){
var inst_35349 = (state_35359[(2)]);
var state_35359__$1 = state_35359;
var statearr_35367_35392 = state_35359__$1;
(statearr_35367_35392[(2)] = inst_35349);

(statearr_35367_35392[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35360 === (13))){
var state_35359__$1 = state_35359;
var statearr_35368_35393 = state_35359__$1;
(statearr_35368_35393[(2)] = null);

(statearr_35368_35393[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35360 === (6))){
var inst_35319 = (state_35359[(8)]);
var inst_35344 = inst_35319.length;
var inst_35345 = (inst_35344 > (0));
var state_35359__$1 = state_35359;
if(cljs.core.truth_(inst_35345)){
var statearr_35369_35394 = state_35359__$1;
(statearr_35369_35394[(1)] = (12));

} else {
var statearr_35370_35395 = state_35359__$1;
(statearr_35370_35395[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35360 === (3))){
var inst_35357 = (state_35359[(2)]);
var state_35359__$1 = state_35359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35359__$1,inst_35357);
} else {
if((state_val_35360 === (12))){
var inst_35319 = (state_35359[(8)]);
var inst_35347 = cljs.core.vec.call(null,inst_35319);
var state_35359__$1 = state_35359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35359__$1,(15),out,inst_35347);
} else {
if((state_val_35360 === (2))){
var state_35359__$1 = state_35359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35359__$1,(4),ch);
} else {
if((state_val_35360 === (11))){
var inst_35323 = (state_35359[(9)]);
var inst_35327 = (state_35359[(10)]);
var inst_35337 = (state_35359[(2)]);
var inst_35338 = [];
var inst_35339 = inst_35338.push(inst_35323);
var inst_35319 = inst_35338;
var inst_35320 = inst_35327;
var state_35359__$1 = (function (){var statearr_35371 = state_35359;
(statearr_35371[(7)] = inst_35320);

(statearr_35371[(8)] = inst_35319);

(statearr_35371[(11)] = inst_35337);

(statearr_35371[(12)] = inst_35339);

return statearr_35371;
})();
var statearr_35372_35396 = state_35359__$1;
(statearr_35372_35396[(2)] = null);

(statearr_35372_35396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35360 === (9))){
var inst_35319 = (state_35359[(8)]);
var inst_35335 = cljs.core.vec.call(null,inst_35319);
var state_35359__$1 = state_35359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35359__$1,(11),out,inst_35335);
} else {
if((state_val_35360 === (5))){
var inst_35320 = (state_35359[(7)]);
var inst_35323 = (state_35359[(9)]);
var inst_35327 = (state_35359[(10)]);
var inst_35327__$1 = f.call(null,inst_35323);
var inst_35328 = cljs.core._EQ_.call(null,inst_35327__$1,inst_35320);
var inst_35329 = cljs.core.keyword_identical_QMARK_.call(null,inst_35320,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35330 = (inst_35328) || (inst_35329);
var state_35359__$1 = (function (){var statearr_35373 = state_35359;
(statearr_35373[(10)] = inst_35327__$1);

return statearr_35373;
})();
if(cljs.core.truth_(inst_35330)){
var statearr_35374_35397 = state_35359__$1;
(statearr_35374_35397[(1)] = (8));

} else {
var statearr_35375_35398 = state_35359__$1;
(statearr_35375_35398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35360 === (14))){
var inst_35352 = (state_35359[(2)]);
var inst_35353 = cljs.core.async.close_BANG_.call(null,out);
var state_35359__$1 = (function (){var statearr_35377 = state_35359;
(statearr_35377[(13)] = inst_35352);

return statearr_35377;
})();
var statearr_35378_35399 = state_35359__$1;
(statearr_35378_35399[(2)] = inst_35353);

(statearr_35378_35399[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35360 === (10))){
var inst_35342 = (state_35359[(2)]);
var state_35359__$1 = state_35359;
var statearr_35379_35400 = state_35359__$1;
(statearr_35379_35400[(2)] = inst_35342);

(statearr_35379_35400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35360 === (8))){
var inst_35319 = (state_35359[(8)]);
var inst_35323 = (state_35359[(9)]);
var inst_35327 = (state_35359[(10)]);
var inst_35332 = inst_35319.push(inst_35323);
var tmp35376 = inst_35319;
var inst_35319__$1 = tmp35376;
var inst_35320 = inst_35327;
var state_35359__$1 = (function (){var statearr_35380 = state_35359;
(statearr_35380[(7)] = inst_35320);

(statearr_35380[(8)] = inst_35319__$1);

(statearr_35380[(14)] = inst_35332);

return statearr_35380;
})();
var statearr_35381_35401 = state_35359__$1;
(statearr_35381_35401[(2)] = null);

(statearr_35381_35401[(1)] = (2));


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
});})(c__33497__auto___35387,out))
;
return ((function (switch__33409__auto__,c__33497__auto___35387,out){
return (function() {
var cljs$core$async$state_machine__33410__auto__ = null;
var cljs$core$async$state_machine__33410__auto____0 = (function (){
var statearr_35382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35382[(0)] = cljs$core$async$state_machine__33410__auto__);

(statearr_35382[(1)] = (1));

return statearr_35382;
});
var cljs$core$async$state_machine__33410__auto____1 = (function (state_35359){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_35359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e35383){if((e35383 instanceof Object)){
var ex__33413__auto__ = e35383;
var statearr_35384_35402 = state_35359;
(statearr_35384_35402[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35403 = state_35359;
state_35359 = G__35403;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
cljs$core$async$state_machine__33410__auto__ = function(state_35359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33410__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33410__auto____1.call(this,state_35359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33410__auto____0;
cljs$core$async$state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33410__auto____1;
return cljs$core$async$state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___35387,out))
})();
var state__33499__auto__ = (function (){var statearr_35385 = f__33498__auto__.call(null);
(statearr_35385[(6)] = c__33497__auto___35387);

return statearr_35385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___35387,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1572992068671
