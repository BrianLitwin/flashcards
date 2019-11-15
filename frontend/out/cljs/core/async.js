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
var G__34338 = arguments.length;
switch (G__34338) {
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
if(typeof cljs.core.async.t_cljs$core$async34339 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34339 = (function (f,blockable,meta34340){
this.f = f;
this.blockable = blockable;
this.meta34340 = meta34340;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34341,meta34340__$1){
var self__ = this;
var _34341__$1 = this;
return (new cljs.core.async.t_cljs$core$async34339(self__.f,self__.blockable,meta34340__$1));
});

cljs.core.async.t_cljs$core$async34339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34341){
var self__ = this;
var _34341__$1 = this;
return self__.meta34340;
});

cljs.core.async.t_cljs$core$async34339.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34339.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34339.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34340","meta34340",-156340725,null)], null);
});

cljs.core.async.t_cljs$core$async34339.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34339.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34339";

cljs.core.async.t_cljs$core$async34339.cljs$lang$ctorPrWriter = (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async34339");
});

cljs.core.async.__GT_t_cljs$core$async34339 = (function cljs$core$async$__GT_t_cljs$core$async34339(f__$1,blockable__$1,meta34340){
return (new cljs.core.async.t_cljs$core$async34339(f__$1,blockable__$1,meta34340));
});

}

return (new cljs.core.async.t_cljs$core$async34339(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34345 = arguments.length;
switch (G__34345) {
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
var G__34348 = arguments.length;
switch (G__34348) {
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
var G__34351 = arguments.length;
switch (G__34351) {
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
var val_34353 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34353);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34353,ret){
return (function (){
return fn1.call(null,val_34353);
});})(val_34353,ret))
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
var G__34355 = arguments.length;
switch (G__34355) {
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
var n__29377__auto___34357 = n;
var x_34358 = (0);
while(true){
if((x_34358 < n__29377__auto___34357)){
(a[x_34358] = (0));

var G__34359 = (x_34358 + (1));
x_34358 = G__34359;
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

var G__34360 = (i + (1));
i = G__34360;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34361 = (function (flag,meta34362){
this.flag = flag;
this.meta34362 = meta34362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34363,meta34362__$1){
var self__ = this;
var _34363__$1 = this;
return (new cljs.core.async.t_cljs$core$async34361(self__.flag,meta34362__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34363){
var self__ = this;
var _34363__$1 = this;
return self__.meta34362;
});})(flag))
;

cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34361.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34362","meta34362",-1936448393,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34361";

cljs.core.async.t_cljs$core$async34361.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async34361");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34361 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34361(flag__$1,meta34362){
return (new cljs.core.async.t_cljs$core$async34361(flag__$1,meta34362));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34361(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34364 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34364 = (function (flag,cb,meta34365){
this.flag = flag;
this.cb = cb;
this.meta34365 = meta34365;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34366,meta34365__$1){
var self__ = this;
var _34366__$1 = this;
return (new cljs.core.async.t_cljs$core$async34364(self__.flag,self__.cb,meta34365__$1));
});

cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34366){
var self__ = this;
var _34366__$1 = this;
return self__.meta34365;
});

cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34364.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34364.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34365","meta34365",2014471108,null)], null);
});

cljs.core.async.t_cljs$core$async34364.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34364.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34364";

cljs.core.async.t_cljs$core$async34364.cljs$lang$ctorPrWriter = (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async34364");
});

cljs.core.async.__GT_t_cljs$core$async34364 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34364(flag__$1,cb__$1,meta34365){
return (new cljs.core.async.t_cljs$core$async34364(flag__$1,cb__$1,meta34365));
});

}

return (new cljs.core.async.t_cljs$core$async34364(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__34367_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34367_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34368_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34368_SHARP_,port], null));
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
var G__34369 = (i + (1));
i = G__34369;
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
var len__29601__auto___34375 = arguments.length;
var i__29602__auto___34376 = (0);
while(true){
if((i__29602__auto___34376 < len__29601__auto___34375)){
args__29608__auto__.push((arguments[i__29602__auto___34376]));

var G__34377 = (i__29602__auto___34376 + (1));
i__29602__auto___34376 = G__34377;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((1) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29609__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34372){
var map__34373 = p__34372;
var map__34373__$1 = ((((!((map__34373 == null)))?((((map__34373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34373.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34373):map__34373);
var opts = map__34373__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34370){
var G__34371 = cljs.core.first.call(null,seq34370);
var seq34370__$1 = cljs.core.next.call(null,seq34370);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34371,seq34370__$1);
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
var G__34379 = arguments.length;
switch (G__34379) {
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
var c__34292__auto___34425 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___34425){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___34425){
return (function (state_34403){
var state_val_34404 = (state_34403[(1)]);
if((state_val_34404 === (7))){
var inst_34399 = (state_34403[(2)]);
var state_34403__$1 = state_34403;
var statearr_34405_34426 = state_34403__$1;
(statearr_34405_34426[(2)] = inst_34399);

(statearr_34405_34426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (1))){
var state_34403__$1 = state_34403;
var statearr_34406_34427 = state_34403__$1;
(statearr_34406_34427[(2)] = null);

(statearr_34406_34427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (4))){
var inst_34382 = (state_34403[(7)]);
var inst_34382__$1 = (state_34403[(2)]);
var inst_34383 = (inst_34382__$1 == null);
var state_34403__$1 = (function (){var statearr_34407 = state_34403;
(statearr_34407[(7)] = inst_34382__$1);

return statearr_34407;
})();
if(cljs.core.truth_(inst_34383)){
var statearr_34408_34428 = state_34403__$1;
(statearr_34408_34428[(1)] = (5));

} else {
var statearr_34409_34429 = state_34403__$1;
(statearr_34409_34429[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (13))){
var state_34403__$1 = state_34403;
var statearr_34410_34430 = state_34403__$1;
(statearr_34410_34430[(2)] = null);

(statearr_34410_34430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (6))){
var inst_34382 = (state_34403[(7)]);
var state_34403__$1 = state_34403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34403__$1,(11),to,inst_34382);
} else {
if((state_val_34404 === (3))){
var inst_34401 = (state_34403[(2)]);
var state_34403__$1 = state_34403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34403__$1,inst_34401);
} else {
if((state_val_34404 === (12))){
var state_34403__$1 = state_34403;
var statearr_34411_34431 = state_34403__$1;
(statearr_34411_34431[(2)] = null);

(statearr_34411_34431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (2))){
var state_34403__$1 = state_34403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34403__$1,(4),from);
} else {
if((state_val_34404 === (11))){
var inst_34392 = (state_34403[(2)]);
var state_34403__$1 = state_34403;
if(cljs.core.truth_(inst_34392)){
var statearr_34412_34432 = state_34403__$1;
(statearr_34412_34432[(1)] = (12));

} else {
var statearr_34413_34433 = state_34403__$1;
(statearr_34413_34433[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (9))){
var state_34403__$1 = state_34403;
var statearr_34414_34434 = state_34403__$1;
(statearr_34414_34434[(2)] = null);

(statearr_34414_34434[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (5))){
var state_34403__$1 = state_34403;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34415_34435 = state_34403__$1;
(statearr_34415_34435[(1)] = (8));

} else {
var statearr_34416_34436 = state_34403__$1;
(statearr_34416_34436[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (14))){
var inst_34397 = (state_34403[(2)]);
var state_34403__$1 = state_34403;
var statearr_34417_34437 = state_34403__$1;
(statearr_34417_34437[(2)] = inst_34397);

(statearr_34417_34437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (10))){
var inst_34389 = (state_34403[(2)]);
var state_34403__$1 = state_34403;
var statearr_34418_34438 = state_34403__$1;
(statearr_34418_34438[(2)] = inst_34389);

(statearr_34418_34438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34404 === (8))){
var inst_34386 = cljs.core.async.close_BANG_.call(null,to);
var state_34403__$1 = state_34403;
var statearr_34419_34439 = state_34403__$1;
(statearr_34419_34439[(2)] = inst_34386);

(statearr_34419_34439[(1)] = (10));


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
});})(c__34292__auto___34425))
;
return ((function (switch__34204__auto__,c__34292__auto___34425){
return (function() {
var cljs$core$async$state_machine__34205__auto__ = null;
var cljs$core$async$state_machine__34205__auto____0 = (function (){
var statearr_34420 = [null,null,null,null,null,null,null,null];
(statearr_34420[(0)] = cljs$core$async$state_machine__34205__auto__);

(statearr_34420[(1)] = (1));

return statearr_34420;
});
var cljs$core$async$state_machine__34205__auto____1 = (function (state_34403){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_34403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e34421){if((e34421 instanceof Object)){
var ex__34208__auto__ = e34421;
var statearr_34422_34440 = state_34403;
(statearr_34422_34440[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34421;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34441 = state_34403;
state_34403 = G__34441;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$state_machine__34205__auto__ = function(state_34403){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34205__auto____1.call(this,state_34403);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34205__auto____0;
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34205__auto____1;
return cljs$core$async$state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___34425))
})();
var state__34294__auto__ = (function (){var statearr_34423 = f__34293__auto__.call(null);
(statearr_34423[(6)] = c__34292__auto___34425);

return statearr_34423;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___34425))
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
return (function (p__34442){
var vec__34443 = p__34442;
var v = cljs.core.nth.call(null,vec__34443,(0),null);
var p = cljs.core.nth.call(null,vec__34443,(1),null);
var job = vec__34443;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34292__auto___34614 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___34614,res,vec__34443,v,p,job,jobs,results){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___34614,res,vec__34443,v,p,job,jobs,results){
return (function (state_34450){
var state_val_34451 = (state_34450[(1)]);
if((state_val_34451 === (1))){
var state_34450__$1 = state_34450;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34450__$1,(2),res,v);
} else {
if((state_val_34451 === (2))){
var inst_34447 = (state_34450[(2)]);
var inst_34448 = cljs.core.async.close_BANG_.call(null,res);
var state_34450__$1 = (function (){var statearr_34452 = state_34450;
(statearr_34452[(7)] = inst_34447);

return statearr_34452;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34450__$1,inst_34448);
} else {
return null;
}
}
});})(c__34292__auto___34614,res,vec__34443,v,p,job,jobs,results))
;
return ((function (switch__34204__auto__,c__34292__auto___34614,res,vec__34443,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0 = (function (){
var statearr_34453 = [null,null,null,null,null,null,null,null];
(statearr_34453[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__);

(statearr_34453[(1)] = (1));

return statearr_34453;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1 = (function (state_34450){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_34450);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e34454){if((e34454 instanceof Object)){
var ex__34208__auto__ = e34454;
var statearr_34455_34615 = state_34450;
(statearr_34455_34615[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34450);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34616 = state_34450;
state_34450 = G__34616;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__ = function(state_34450){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1.call(this,state_34450);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___34614,res,vec__34443,v,p,job,jobs,results))
})();
var state__34294__auto__ = (function (){var statearr_34456 = f__34293__auto__.call(null);
(statearr_34456[(6)] = c__34292__auto___34614);

return statearr_34456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___34614,res,vec__34443,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34457){
var vec__34458 = p__34457;
var v = cljs.core.nth.call(null,vec__34458,(0),null);
var p = cljs.core.nth.call(null,vec__34458,(1),null);
var job = vec__34458;
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
var n__29377__auto___34617 = n;
var __34618 = (0);
while(true){
if((__34618 < n__29377__auto___34617)){
var G__34461_34619 = type;
var G__34461_34620__$1 = (((G__34461_34619 instanceof cljs.core.Keyword))?G__34461_34619.fqn:null);
switch (G__34461_34620__$1) {
case "compute":
var c__34292__auto___34622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34618,c__34292__auto___34622,G__34461_34619,G__34461_34620__$1,n__29377__auto___34617,jobs,results,process,async){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (__34618,c__34292__auto___34622,G__34461_34619,G__34461_34620__$1,n__29377__auto___34617,jobs,results,process,async){
return (function (state_34474){
var state_val_34475 = (state_34474[(1)]);
if((state_val_34475 === (1))){
var state_34474__$1 = state_34474;
var statearr_34476_34623 = state_34474__$1;
(statearr_34476_34623[(2)] = null);

(statearr_34476_34623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (2))){
var state_34474__$1 = state_34474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34474__$1,(4),jobs);
} else {
if((state_val_34475 === (3))){
var inst_34472 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34474__$1,inst_34472);
} else {
if((state_val_34475 === (4))){
var inst_34464 = (state_34474[(2)]);
var inst_34465 = process.call(null,inst_34464);
var state_34474__$1 = state_34474;
if(cljs.core.truth_(inst_34465)){
var statearr_34477_34624 = state_34474__$1;
(statearr_34477_34624[(1)] = (5));

} else {
var statearr_34478_34625 = state_34474__$1;
(statearr_34478_34625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (5))){
var state_34474__$1 = state_34474;
var statearr_34479_34626 = state_34474__$1;
(statearr_34479_34626[(2)] = null);

(statearr_34479_34626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (6))){
var state_34474__$1 = state_34474;
var statearr_34480_34627 = state_34474__$1;
(statearr_34480_34627[(2)] = null);

(statearr_34480_34627[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34475 === (7))){
var inst_34470 = (state_34474[(2)]);
var state_34474__$1 = state_34474;
var statearr_34481_34628 = state_34474__$1;
(statearr_34481_34628[(2)] = inst_34470);

(statearr_34481_34628[(1)] = (3));


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
});})(__34618,c__34292__auto___34622,G__34461_34619,G__34461_34620__$1,n__29377__auto___34617,jobs,results,process,async))
;
return ((function (__34618,switch__34204__auto__,c__34292__auto___34622,G__34461_34619,G__34461_34620__$1,n__29377__auto___34617,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0 = (function (){
var statearr_34482 = [null,null,null,null,null,null,null];
(statearr_34482[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__);

(statearr_34482[(1)] = (1));

return statearr_34482;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1 = (function (state_34474){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_34474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e34483){if((e34483 instanceof Object)){
var ex__34208__auto__ = e34483;
var statearr_34484_34629 = state_34474;
(statearr_34484_34629[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34630 = state_34474;
state_34474 = G__34630;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__ = function(state_34474){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1.call(this,state_34474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__;
})()
;})(__34618,switch__34204__auto__,c__34292__auto___34622,G__34461_34619,G__34461_34620__$1,n__29377__auto___34617,jobs,results,process,async))
})();
var state__34294__auto__ = (function (){var statearr_34485 = f__34293__auto__.call(null);
(statearr_34485[(6)] = c__34292__auto___34622);

return statearr_34485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(__34618,c__34292__auto___34622,G__34461_34619,G__34461_34620__$1,n__29377__auto___34617,jobs,results,process,async))
);


break;
case "async":
var c__34292__auto___34631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34618,c__34292__auto___34631,G__34461_34619,G__34461_34620__$1,n__29377__auto___34617,jobs,results,process,async){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (__34618,c__34292__auto___34631,G__34461_34619,G__34461_34620__$1,n__29377__auto___34617,jobs,results,process,async){
return (function (state_34498){
var state_val_34499 = (state_34498[(1)]);
if((state_val_34499 === (1))){
var state_34498__$1 = state_34498;
var statearr_34500_34632 = state_34498__$1;
(statearr_34500_34632[(2)] = null);

(statearr_34500_34632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (2))){
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34498__$1,(4),jobs);
} else {
if((state_val_34499 === (3))){
var inst_34496 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34498__$1,inst_34496);
} else {
if((state_val_34499 === (4))){
var inst_34488 = (state_34498[(2)]);
var inst_34489 = async.call(null,inst_34488);
var state_34498__$1 = state_34498;
if(cljs.core.truth_(inst_34489)){
var statearr_34501_34633 = state_34498__$1;
(statearr_34501_34633[(1)] = (5));

} else {
var statearr_34502_34634 = state_34498__$1;
(statearr_34502_34634[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (5))){
var state_34498__$1 = state_34498;
var statearr_34503_34635 = state_34498__$1;
(statearr_34503_34635[(2)] = null);

(statearr_34503_34635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (6))){
var state_34498__$1 = state_34498;
var statearr_34504_34636 = state_34498__$1;
(statearr_34504_34636[(2)] = null);

(statearr_34504_34636[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34499 === (7))){
var inst_34494 = (state_34498[(2)]);
var state_34498__$1 = state_34498;
var statearr_34505_34637 = state_34498__$1;
(statearr_34505_34637[(2)] = inst_34494);

(statearr_34505_34637[(1)] = (3));


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
});})(__34618,c__34292__auto___34631,G__34461_34619,G__34461_34620__$1,n__29377__auto___34617,jobs,results,process,async))
;
return ((function (__34618,switch__34204__auto__,c__34292__auto___34631,G__34461_34619,G__34461_34620__$1,n__29377__auto___34617,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0 = (function (){
var statearr_34506 = [null,null,null,null,null,null,null];
(statearr_34506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__);

(statearr_34506[(1)] = (1));

return statearr_34506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1 = (function (state_34498){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_34498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e34507){if((e34507 instanceof Object)){
var ex__34208__auto__ = e34507;
var statearr_34508_34638 = state_34498;
(statearr_34508_34638[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34639 = state_34498;
state_34498 = G__34639;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__ = function(state_34498){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1.call(this,state_34498);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__;
})()
;})(__34618,switch__34204__auto__,c__34292__auto___34631,G__34461_34619,G__34461_34620__$1,n__29377__auto___34617,jobs,results,process,async))
})();
var state__34294__auto__ = (function (){var statearr_34509 = f__34293__auto__.call(null);
(statearr_34509[(6)] = c__34292__auto___34631);

return statearr_34509;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(__34618,c__34292__auto___34631,G__34461_34619,G__34461_34620__$1,n__29377__auto___34617,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34461_34620__$1)].join('')));

}

var G__34640 = (__34618 + (1));
__34618 = G__34640;
continue;
} else {
}
break;
}

var c__34292__auto___34641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___34641,jobs,results,process,async){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___34641,jobs,results,process,async){
return (function (state_34531){
var state_val_34532 = (state_34531[(1)]);
if((state_val_34532 === (1))){
var state_34531__$1 = state_34531;
var statearr_34533_34642 = state_34531__$1;
(statearr_34533_34642[(2)] = null);

(statearr_34533_34642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (2))){
var state_34531__$1 = state_34531;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34531__$1,(4),from);
} else {
if((state_val_34532 === (3))){
var inst_34529 = (state_34531[(2)]);
var state_34531__$1 = state_34531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34531__$1,inst_34529);
} else {
if((state_val_34532 === (4))){
var inst_34512 = (state_34531[(7)]);
var inst_34512__$1 = (state_34531[(2)]);
var inst_34513 = (inst_34512__$1 == null);
var state_34531__$1 = (function (){var statearr_34534 = state_34531;
(statearr_34534[(7)] = inst_34512__$1);

return statearr_34534;
})();
if(cljs.core.truth_(inst_34513)){
var statearr_34535_34643 = state_34531__$1;
(statearr_34535_34643[(1)] = (5));

} else {
var statearr_34536_34644 = state_34531__$1;
(statearr_34536_34644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (5))){
var inst_34515 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34531__$1 = state_34531;
var statearr_34537_34645 = state_34531__$1;
(statearr_34537_34645[(2)] = inst_34515);

(statearr_34537_34645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (6))){
var inst_34517 = (state_34531[(8)]);
var inst_34512 = (state_34531[(7)]);
var inst_34517__$1 = cljs.core.async.chan.call(null,(1));
var inst_34518 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34519 = [inst_34512,inst_34517__$1];
var inst_34520 = (new cljs.core.PersistentVector(null,2,(5),inst_34518,inst_34519,null));
var state_34531__$1 = (function (){var statearr_34538 = state_34531;
(statearr_34538[(8)] = inst_34517__$1);

return statearr_34538;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34531__$1,(8),jobs,inst_34520);
} else {
if((state_val_34532 === (7))){
var inst_34527 = (state_34531[(2)]);
var state_34531__$1 = state_34531;
var statearr_34539_34646 = state_34531__$1;
(statearr_34539_34646[(2)] = inst_34527);

(statearr_34539_34646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34532 === (8))){
var inst_34517 = (state_34531[(8)]);
var inst_34522 = (state_34531[(2)]);
var state_34531__$1 = (function (){var statearr_34540 = state_34531;
(statearr_34540[(9)] = inst_34522);

return statearr_34540;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34531__$1,(9),results,inst_34517);
} else {
if((state_val_34532 === (9))){
var inst_34524 = (state_34531[(2)]);
var state_34531__$1 = (function (){var statearr_34541 = state_34531;
(statearr_34541[(10)] = inst_34524);

return statearr_34541;
})();
var statearr_34542_34647 = state_34531__$1;
(statearr_34542_34647[(2)] = null);

(statearr_34542_34647[(1)] = (2));


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
});})(c__34292__auto___34641,jobs,results,process,async))
;
return ((function (switch__34204__auto__,c__34292__auto___34641,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0 = (function (){
var statearr_34543 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34543[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__);

(statearr_34543[(1)] = (1));

return statearr_34543;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1 = (function (state_34531){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_34531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e34544){if((e34544 instanceof Object)){
var ex__34208__auto__ = e34544;
var statearr_34545_34648 = state_34531;
(statearr_34545_34648[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34649 = state_34531;
state_34531 = G__34649;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__ = function(state_34531){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1.call(this,state_34531);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___34641,jobs,results,process,async))
})();
var state__34294__auto__ = (function (){var statearr_34546 = f__34293__auto__.call(null);
(statearr_34546[(6)] = c__34292__auto___34641);

return statearr_34546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___34641,jobs,results,process,async))
);


var c__34292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto__,jobs,results,process,async){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto__,jobs,results,process,async){
return (function (state_34584){
var state_val_34585 = (state_34584[(1)]);
if((state_val_34585 === (7))){
var inst_34580 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34586_34650 = state_34584__$1;
(statearr_34586_34650[(2)] = inst_34580);

(statearr_34586_34650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (20))){
var state_34584__$1 = state_34584;
var statearr_34587_34651 = state_34584__$1;
(statearr_34587_34651[(2)] = null);

(statearr_34587_34651[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (1))){
var state_34584__$1 = state_34584;
var statearr_34588_34652 = state_34584__$1;
(statearr_34588_34652[(2)] = null);

(statearr_34588_34652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (4))){
var inst_34549 = (state_34584[(7)]);
var inst_34549__$1 = (state_34584[(2)]);
var inst_34550 = (inst_34549__$1 == null);
var state_34584__$1 = (function (){var statearr_34589 = state_34584;
(statearr_34589[(7)] = inst_34549__$1);

return statearr_34589;
})();
if(cljs.core.truth_(inst_34550)){
var statearr_34590_34653 = state_34584__$1;
(statearr_34590_34653[(1)] = (5));

} else {
var statearr_34591_34654 = state_34584__$1;
(statearr_34591_34654[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (15))){
var inst_34562 = (state_34584[(8)]);
var state_34584__$1 = state_34584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34584__$1,(18),to,inst_34562);
} else {
if((state_val_34585 === (21))){
var inst_34575 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34592_34655 = state_34584__$1;
(statearr_34592_34655[(2)] = inst_34575);

(statearr_34592_34655[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (13))){
var inst_34577 = (state_34584[(2)]);
var state_34584__$1 = (function (){var statearr_34593 = state_34584;
(statearr_34593[(9)] = inst_34577);

return statearr_34593;
})();
var statearr_34594_34656 = state_34584__$1;
(statearr_34594_34656[(2)] = null);

(statearr_34594_34656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (6))){
var inst_34549 = (state_34584[(7)]);
var state_34584__$1 = state_34584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34584__$1,(11),inst_34549);
} else {
if((state_val_34585 === (17))){
var inst_34570 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
if(cljs.core.truth_(inst_34570)){
var statearr_34595_34657 = state_34584__$1;
(statearr_34595_34657[(1)] = (19));

} else {
var statearr_34596_34658 = state_34584__$1;
(statearr_34596_34658[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (3))){
var inst_34582 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34584__$1,inst_34582);
} else {
if((state_val_34585 === (12))){
var inst_34559 = (state_34584[(10)]);
var state_34584__$1 = state_34584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34584__$1,(14),inst_34559);
} else {
if((state_val_34585 === (2))){
var state_34584__$1 = state_34584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34584__$1,(4),results);
} else {
if((state_val_34585 === (19))){
var state_34584__$1 = state_34584;
var statearr_34597_34659 = state_34584__$1;
(statearr_34597_34659[(2)] = null);

(statearr_34597_34659[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (11))){
var inst_34559 = (state_34584[(2)]);
var state_34584__$1 = (function (){var statearr_34598 = state_34584;
(statearr_34598[(10)] = inst_34559);

return statearr_34598;
})();
var statearr_34599_34660 = state_34584__$1;
(statearr_34599_34660[(2)] = null);

(statearr_34599_34660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (9))){
var state_34584__$1 = state_34584;
var statearr_34600_34661 = state_34584__$1;
(statearr_34600_34661[(2)] = null);

(statearr_34600_34661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (5))){
var state_34584__$1 = state_34584;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34601_34662 = state_34584__$1;
(statearr_34601_34662[(1)] = (8));

} else {
var statearr_34602_34663 = state_34584__$1;
(statearr_34602_34663[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (14))){
var inst_34564 = (state_34584[(11)]);
var inst_34562 = (state_34584[(8)]);
var inst_34562__$1 = (state_34584[(2)]);
var inst_34563 = (inst_34562__$1 == null);
var inst_34564__$1 = cljs.core.not.call(null,inst_34563);
var state_34584__$1 = (function (){var statearr_34603 = state_34584;
(statearr_34603[(11)] = inst_34564__$1);

(statearr_34603[(8)] = inst_34562__$1);

return statearr_34603;
})();
if(inst_34564__$1){
var statearr_34604_34664 = state_34584__$1;
(statearr_34604_34664[(1)] = (15));

} else {
var statearr_34605_34665 = state_34584__$1;
(statearr_34605_34665[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (16))){
var inst_34564 = (state_34584[(11)]);
var state_34584__$1 = state_34584;
var statearr_34606_34666 = state_34584__$1;
(statearr_34606_34666[(2)] = inst_34564);

(statearr_34606_34666[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (10))){
var inst_34556 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34607_34667 = state_34584__$1;
(statearr_34607_34667[(2)] = inst_34556);

(statearr_34607_34667[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (18))){
var inst_34567 = (state_34584[(2)]);
var state_34584__$1 = state_34584;
var statearr_34608_34668 = state_34584__$1;
(statearr_34608_34668[(2)] = inst_34567);

(statearr_34608_34668[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34585 === (8))){
var inst_34553 = cljs.core.async.close_BANG_.call(null,to);
var state_34584__$1 = state_34584;
var statearr_34609_34669 = state_34584__$1;
(statearr_34609_34669[(2)] = inst_34553);

(statearr_34609_34669[(1)] = (10));


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
});})(c__34292__auto__,jobs,results,process,async))
;
return ((function (switch__34204__auto__,c__34292__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0 = (function (){
var statearr_34610 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34610[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__);

(statearr_34610[(1)] = (1));

return statearr_34610;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1 = (function (state_34584){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_34584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e34611){if((e34611 instanceof Object)){
var ex__34208__auto__ = e34611;
var statearr_34612_34670 = state_34584;
(statearr_34612_34670[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34611;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34671 = state_34584;
state_34584 = G__34671;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__ = function(state_34584){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1.call(this,state_34584);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34205__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto__,jobs,results,process,async))
})();
var state__34294__auto__ = (function (){var statearr_34613 = f__34293__auto__.call(null);
(statearr_34613[(6)] = c__34292__auto__);

return statearr_34613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto__,jobs,results,process,async))
);

return c__34292__auto__;
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
var G__34673 = arguments.length;
switch (G__34673) {
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
var G__34676 = arguments.length;
switch (G__34676) {
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
var G__34679 = arguments.length;
switch (G__34679) {
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
var c__34292__auto___34728 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___34728,tc,fc){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___34728,tc,fc){
return (function (state_34705){
var state_val_34706 = (state_34705[(1)]);
if((state_val_34706 === (7))){
var inst_34701 = (state_34705[(2)]);
var state_34705__$1 = state_34705;
var statearr_34707_34729 = state_34705__$1;
(statearr_34707_34729[(2)] = inst_34701);

(statearr_34707_34729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (1))){
var state_34705__$1 = state_34705;
var statearr_34708_34730 = state_34705__$1;
(statearr_34708_34730[(2)] = null);

(statearr_34708_34730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (4))){
var inst_34682 = (state_34705[(7)]);
var inst_34682__$1 = (state_34705[(2)]);
var inst_34683 = (inst_34682__$1 == null);
var state_34705__$1 = (function (){var statearr_34709 = state_34705;
(statearr_34709[(7)] = inst_34682__$1);

return statearr_34709;
})();
if(cljs.core.truth_(inst_34683)){
var statearr_34710_34731 = state_34705__$1;
(statearr_34710_34731[(1)] = (5));

} else {
var statearr_34711_34732 = state_34705__$1;
(statearr_34711_34732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (13))){
var state_34705__$1 = state_34705;
var statearr_34712_34733 = state_34705__$1;
(statearr_34712_34733[(2)] = null);

(statearr_34712_34733[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (6))){
var inst_34682 = (state_34705[(7)]);
var inst_34688 = p.call(null,inst_34682);
var state_34705__$1 = state_34705;
if(cljs.core.truth_(inst_34688)){
var statearr_34713_34734 = state_34705__$1;
(statearr_34713_34734[(1)] = (9));

} else {
var statearr_34714_34735 = state_34705__$1;
(statearr_34714_34735[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (3))){
var inst_34703 = (state_34705[(2)]);
var state_34705__$1 = state_34705;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34705__$1,inst_34703);
} else {
if((state_val_34706 === (12))){
var state_34705__$1 = state_34705;
var statearr_34715_34736 = state_34705__$1;
(statearr_34715_34736[(2)] = null);

(statearr_34715_34736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (2))){
var state_34705__$1 = state_34705;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34705__$1,(4),ch);
} else {
if((state_val_34706 === (11))){
var inst_34682 = (state_34705[(7)]);
var inst_34692 = (state_34705[(2)]);
var state_34705__$1 = state_34705;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34705__$1,(8),inst_34692,inst_34682);
} else {
if((state_val_34706 === (9))){
var state_34705__$1 = state_34705;
var statearr_34716_34737 = state_34705__$1;
(statearr_34716_34737[(2)] = tc);

(statearr_34716_34737[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (5))){
var inst_34685 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34686 = cljs.core.async.close_BANG_.call(null,fc);
var state_34705__$1 = (function (){var statearr_34717 = state_34705;
(statearr_34717[(8)] = inst_34685);

return statearr_34717;
})();
var statearr_34718_34738 = state_34705__$1;
(statearr_34718_34738[(2)] = inst_34686);

(statearr_34718_34738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (14))){
var inst_34699 = (state_34705[(2)]);
var state_34705__$1 = state_34705;
var statearr_34719_34739 = state_34705__$1;
(statearr_34719_34739[(2)] = inst_34699);

(statearr_34719_34739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (10))){
var state_34705__$1 = state_34705;
var statearr_34720_34740 = state_34705__$1;
(statearr_34720_34740[(2)] = fc);

(statearr_34720_34740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34706 === (8))){
var inst_34694 = (state_34705[(2)]);
var state_34705__$1 = state_34705;
if(cljs.core.truth_(inst_34694)){
var statearr_34721_34741 = state_34705__$1;
(statearr_34721_34741[(1)] = (12));

} else {
var statearr_34722_34742 = state_34705__$1;
(statearr_34722_34742[(1)] = (13));

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
});})(c__34292__auto___34728,tc,fc))
;
return ((function (switch__34204__auto__,c__34292__auto___34728,tc,fc){
return (function() {
var cljs$core$async$state_machine__34205__auto__ = null;
var cljs$core$async$state_machine__34205__auto____0 = (function (){
var statearr_34723 = [null,null,null,null,null,null,null,null,null];
(statearr_34723[(0)] = cljs$core$async$state_machine__34205__auto__);

(statearr_34723[(1)] = (1));

return statearr_34723;
});
var cljs$core$async$state_machine__34205__auto____1 = (function (state_34705){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_34705);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e34724){if((e34724 instanceof Object)){
var ex__34208__auto__ = e34724;
var statearr_34725_34743 = state_34705;
(statearr_34725_34743[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34705);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34744 = state_34705;
state_34705 = G__34744;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$state_machine__34205__auto__ = function(state_34705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34205__auto____1.call(this,state_34705);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34205__auto____0;
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34205__auto____1;
return cljs$core$async$state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___34728,tc,fc))
})();
var state__34294__auto__ = (function (){var statearr_34726 = f__34293__auto__.call(null);
(statearr_34726[(6)] = c__34292__auto___34728);

return statearr_34726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___34728,tc,fc))
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
var c__34292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto__){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto__){
return (function (state_34765){
var state_val_34766 = (state_34765[(1)]);
if((state_val_34766 === (7))){
var inst_34761 = (state_34765[(2)]);
var state_34765__$1 = state_34765;
var statearr_34767_34785 = state_34765__$1;
(statearr_34767_34785[(2)] = inst_34761);

(statearr_34767_34785[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (1))){
var inst_34745 = init;
var state_34765__$1 = (function (){var statearr_34768 = state_34765;
(statearr_34768[(7)] = inst_34745);

return statearr_34768;
})();
var statearr_34769_34786 = state_34765__$1;
(statearr_34769_34786[(2)] = null);

(statearr_34769_34786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (4))){
var inst_34748 = (state_34765[(8)]);
var inst_34748__$1 = (state_34765[(2)]);
var inst_34749 = (inst_34748__$1 == null);
var state_34765__$1 = (function (){var statearr_34770 = state_34765;
(statearr_34770[(8)] = inst_34748__$1);

return statearr_34770;
})();
if(cljs.core.truth_(inst_34749)){
var statearr_34771_34787 = state_34765__$1;
(statearr_34771_34787[(1)] = (5));

} else {
var statearr_34772_34788 = state_34765__$1;
(statearr_34772_34788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (6))){
var inst_34748 = (state_34765[(8)]);
var inst_34752 = (state_34765[(9)]);
var inst_34745 = (state_34765[(7)]);
var inst_34752__$1 = f.call(null,inst_34745,inst_34748);
var inst_34753 = cljs.core.reduced_QMARK_.call(null,inst_34752__$1);
var state_34765__$1 = (function (){var statearr_34773 = state_34765;
(statearr_34773[(9)] = inst_34752__$1);

return statearr_34773;
})();
if(inst_34753){
var statearr_34774_34789 = state_34765__$1;
(statearr_34774_34789[(1)] = (8));

} else {
var statearr_34775_34790 = state_34765__$1;
(statearr_34775_34790[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (3))){
var inst_34763 = (state_34765[(2)]);
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34765__$1,inst_34763);
} else {
if((state_val_34766 === (2))){
var state_34765__$1 = state_34765;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34765__$1,(4),ch);
} else {
if((state_val_34766 === (9))){
var inst_34752 = (state_34765[(9)]);
var inst_34745 = inst_34752;
var state_34765__$1 = (function (){var statearr_34776 = state_34765;
(statearr_34776[(7)] = inst_34745);

return statearr_34776;
})();
var statearr_34777_34791 = state_34765__$1;
(statearr_34777_34791[(2)] = null);

(statearr_34777_34791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (5))){
var inst_34745 = (state_34765[(7)]);
var state_34765__$1 = state_34765;
var statearr_34778_34792 = state_34765__$1;
(statearr_34778_34792[(2)] = inst_34745);

(statearr_34778_34792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (10))){
var inst_34759 = (state_34765[(2)]);
var state_34765__$1 = state_34765;
var statearr_34779_34793 = state_34765__$1;
(statearr_34779_34793[(2)] = inst_34759);

(statearr_34779_34793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34766 === (8))){
var inst_34752 = (state_34765[(9)]);
var inst_34755 = cljs.core.deref.call(null,inst_34752);
var state_34765__$1 = state_34765;
var statearr_34780_34794 = state_34765__$1;
(statearr_34780_34794[(2)] = inst_34755);

(statearr_34780_34794[(1)] = (10));


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
});})(c__34292__auto__))
;
return ((function (switch__34204__auto__,c__34292__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34205__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34205__auto____0 = (function (){
var statearr_34781 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34781[(0)] = cljs$core$async$reduce_$_state_machine__34205__auto__);

(statearr_34781[(1)] = (1));

return statearr_34781;
});
var cljs$core$async$reduce_$_state_machine__34205__auto____1 = (function (state_34765){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_34765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e34782){if((e34782 instanceof Object)){
var ex__34208__auto__ = e34782;
var statearr_34783_34795 = state_34765;
(statearr_34783_34795[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34796 = state_34765;
state_34765 = G__34796;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34205__auto__ = function(state_34765){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34205__auto____1.call(this,state_34765);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34205__auto____0;
cljs$core$async$reduce_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34205__auto____1;
return cljs$core$async$reduce_$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto__))
})();
var state__34294__auto__ = (function (){var statearr_34784 = f__34293__auto__.call(null);
(statearr_34784[(6)] = c__34292__auto__);

return statearr_34784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto__))
);

return c__34292__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto__,f__$1){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto__,f__$1){
return (function (state_34802){
var state_val_34803 = (state_34802[(1)]);
if((state_val_34803 === (1))){
var inst_34797 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34802__$1 = state_34802;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34802__$1,(2),inst_34797);
} else {
if((state_val_34803 === (2))){
var inst_34799 = (state_34802[(2)]);
var inst_34800 = f__$1.call(null,inst_34799);
var state_34802__$1 = state_34802;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34802__$1,inst_34800);
} else {
return null;
}
}
});})(c__34292__auto__,f__$1))
;
return ((function (switch__34204__auto__,c__34292__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34205__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34205__auto____0 = (function (){
var statearr_34804 = [null,null,null,null,null,null,null];
(statearr_34804[(0)] = cljs$core$async$transduce_$_state_machine__34205__auto__);

(statearr_34804[(1)] = (1));

return statearr_34804;
});
var cljs$core$async$transduce_$_state_machine__34205__auto____1 = (function (state_34802){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_34802);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e34805){if((e34805 instanceof Object)){
var ex__34208__auto__ = e34805;
var statearr_34806_34808 = state_34802;
(statearr_34806_34808[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34802);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34805;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34809 = state_34802;
state_34802 = G__34809;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34205__auto__ = function(state_34802){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34205__auto____1.call(this,state_34802);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34205__auto____0;
cljs$core$async$transduce_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34205__auto____1;
return cljs$core$async$transduce_$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto__,f__$1))
})();
var state__34294__auto__ = (function (){var statearr_34807 = f__34293__auto__.call(null);
(statearr_34807[(6)] = c__34292__auto__);

return statearr_34807;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto__,f__$1))
);

return c__34292__auto__;
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
var G__34811 = arguments.length;
switch (G__34811) {
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
var c__34292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto__){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto__){
return (function (state_34836){
var state_val_34837 = (state_34836[(1)]);
if((state_val_34837 === (7))){
var inst_34818 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34838_34859 = state_34836__$1;
(statearr_34838_34859[(2)] = inst_34818);

(statearr_34838_34859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (1))){
var inst_34812 = cljs.core.seq.call(null,coll);
var inst_34813 = inst_34812;
var state_34836__$1 = (function (){var statearr_34839 = state_34836;
(statearr_34839[(7)] = inst_34813);

return statearr_34839;
})();
var statearr_34840_34860 = state_34836__$1;
(statearr_34840_34860[(2)] = null);

(statearr_34840_34860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (4))){
var inst_34813 = (state_34836[(7)]);
var inst_34816 = cljs.core.first.call(null,inst_34813);
var state_34836__$1 = state_34836;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34836__$1,(7),ch,inst_34816);
} else {
if((state_val_34837 === (13))){
var inst_34830 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34841_34861 = state_34836__$1;
(statearr_34841_34861[(2)] = inst_34830);

(statearr_34841_34861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (6))){
var inst_34821 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
if(cljs.core.truth_(inst_34821)){
var statearr_34842_34862 = state_34836__$1;
(statearr_34842_34862[(1)] = (8));

} else {
var statearr_34843_34863 = state_34836__$1;
(statearr_34843_34863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (3))){
var inst_34834 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34836__$1,inst_34834);
} else {
if((state_val_34837 === (12))){
var state_34836__$1 = state_34836;
var statearr_34844_34864 = state_34836__$1;
(statearr_34844_34864[(2)] = null);

(statearr_34844_34864[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (2))){
var inst_34813 = (state_34836[(7)]);
var state_34836__$1 = state_34836;
if(cljs.core.truth_(inst_34813)){
var statearr_34845_34865 = state_34836__$1;
(statearr_34845_34865[(1)] = (4));

} else {
var statearr_34846_34866 = state_34836__$1;
(statearr_34846_34866[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (11))){
var inst_34827 = cljs.core.async.close_BANG_.call(null,ch);
var state_34836__$1 = state_34836;
var statearr_34847_34867 = state_34836__$1;
(statearr_34847_34867[(2)] = inst_34827);

(statearr_34847_34867[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (9))){
var state_34836__$1 = state_34836;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34848_34868 = state_34836__$1;
(statearr_34848_34868[(1)] = (11));

} else {
var statearr_34849_34869 = state_34836__$1;
(statearr_34849_34869[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (5))){
var inst_34813 = (state_34836[(7)]);
var state_34836__$1 = state_34836;
var statearr_34850_34870 = state_34836__$1;
(statearr_34850_34870[(2)] = inst_34813);

(statearr_34850_34870[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (10))){
var inst_34832 = (state_34836[(2)]);
var state_34836__$1 = state_34836;
var statearr_34851_34871 = state_34836__$1;
(statearr_34851_34871[(2)] = inst_34832);

(statearr_34851_34871[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34837 === (8))){
var inst_34813 = (state_34836[(7)]);
var inst_34823 = cljs.core.next.call(null,inst_34813);
var inst_34813__$1 = inst_34823;
var state_34836__$1 = (function (){var statearr_34852 = state_34836;
(statearr_34852[(7)] = inst_34813__$1);

return statearr_34852;
})();
var statearr_34853_34872 = state_34836__$1;
(statearr_34853_34872[(2)] = null);

(statearr_34853_34872[(1)] = (2));


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
});})(c__34292__auto__))
;
return ((function (switch__34204__auto__,c__34292__auto__){
return (function() {
var cljs$core$async$state_machine__34205__auto__ = null;
var cljs$core$async$state_machine__34205__auto____0 = (function (){
var statearr_34854 = [null,null,null,null,null,null,null,null];
(statearr_34854[(0)] = cljs$core$async$state_machine__34205__auto__);

(statearr_34854[(1)] = (1));

return statearr_34854;
});
var cljs$core$async$state_machine__34205__auto____1 = (function (state_34836){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_34836);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e34855){if((e34855 instanceof Object)){
var ex__34208__auto__ = e34855;
var statearr_34856_34873 = state_34836;
(statearr_34856_34873[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34836);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34874 = state_34836;
state_34836 = G__34874;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$state_machine__34205__auto__ = function(state_34836){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34205__auto____1.call(this,state_34836);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34205__auto____0;
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34205__auto____1;
return cljs$core$async$state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto__))
})();
var state__34294__auto__ = (function (){var statearr_34857 = f__34293__auto__.call(null);
(statearr_34857[(6)] = c__34292__auto__);

return statearr_34857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto__))
);

return c__34292__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async34875 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34875 = (function (ch,cs,meta34876){
this.ch = ch;
this.cs = cs;
this.meta34876 = meta34876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34877,meta34876__$1){
var self__ = this;
var _34877__$1 = this;
return (new cljs.core.async.t_cljs$core$async34875(self__.ch,self__.cs,meta34876__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34875.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34877){
var self__ = this;
var _34877__$1 = this;
return self__.meta34876;
});})(cs))
;

cljs.core.async.t_cljs$core$async34875.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34875.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34875.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34875.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34875.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34875.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34875.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34876","meta34876",-193422501,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34875.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34875";

cljs.core.async.t_cljs$core$async34875.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async34875");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34875 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34875(ch__$1,cs__$1,meta34876){
return (new cljs.core.async.t_cljs$core$async34875(ch__$1,cs__$1,meta34876));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34875(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__34292__auto___35097 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___35097,cs,m,dchan,dctr,done){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___35097,cs,m,dchan,dctr,done){
return (function (state_35012){
var state_val_35013 = (state_35012[(1)]);
if((state_val_35013 === (7))){
var inst_35008 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35014_35098 = state_35012__$1;
(statearr_35014_35098[(2)] = inst_35008);

(statearr_35014_35098[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (20))){
var inst_34911 = (state_35012[(7)]);
var inst_34923 = cljs.core.first.call(null,inst_34911);
var inst_34924 = cljs.core.nth.call(null,inst_34923,(0),null);
var inst_34925 = cljs.core.nth.call(null,inst_34923,(1),null);
var state_35012__$1 = (function (){var statearr_35015 = state_35012;
(statearr_35015[(8)] = inst_34924);

return statearr_35015;
})();
if(cljs.core.truth_(inst_34925)){
var statearr_35016_35099 = state_35012__$1;
(statearr_35016_35099[(1)] = (22));

} else {
var statearr_35017_35100 = state_35012__$1;
(statearr_35017_35100[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (27))){
var inst_34960 = (state_35012[(9)]);
var inst_34955 = (state_35012[(10)]);
var inst_34953 = (state_35012[(11)]);
var inst_34880 = (state_35012[(12)]);
var inst_34960__$1 = cljs.core._nth.call(null,inst_34953,inst_34955);
var inst_34961 = cljs.core.async.put_BANG_.call(null,inst_34960__$1,inst_34880,done);
var state_35012__$1 = (function (){var statearr_35018 = state_35012;
(statearr_35018[(9)] = inst_34960__$1);

return statearr_35018;
})();
if(cljs.core.truth_(inst_34961)){
var statearr_35019_35101 = state_35012__$1;
(statearr_35019_35101[(1)] = (30));

} else {
var statearr_35020_35102 = state_35012__$1;
(statearr_35020_35102[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (1))){
var state_35012__$1 = state_35012;
var statearr_35021_35103 = state_35012__$1;
(statearr_35021_35103[(2)] = null);

(statearr_35021_35103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (24))){
var inst_34911 = (state_35012[(7)]);
var inst_34930 = (state_35012[(2)]);
var inst_34931 = cljs.core.next.call(null,inst_34911);
var inst_34889 = inst_34931;
var inst_34890 = null;
var inst_34891 = (0);
var inst_34892 = (0);
var state_35012__$1 = (function (){var statearr_35022 = state_35012;
(statearr_35022[(13)] = inst_34891);

(statearr_35022[(14)] = inst_34892);

(statearr_35022[(15)] = inst_34930);

(statearr_35022[(16)] = inst_34890);

(statearr_35022[(17)] = inst_34889);

return statearr_35022;
})();
var statearr_35023_35104 = state_35012__$1;
(statearr_35023_35104[(2)] = null);

(statearr_35023_35104[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (39))){
var state_35012__$1 = state_35012;
var statearr_35027_35105 = state_35012__$1;
(statearr_35027_35105[(2)] = null);

(statearr_35027_35105[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (4))){
var inst_34880 = (state_35012[(12)]);
var inst_34880__$1 = (state_35012[(2)]);
var inst_34881 = (inst_34880__$1 == null);
var state_35012__$1 = (function (){var statearr_35028 = state_35012;
(statearr_35028[(12)] = inst_34880__$1);

return statearr_35028;
})();
if(cljs.core.truth_(inst_34881)){
var statearr_35029_35106 = state_35012__$1;
(statearr_35029_35106[(1)] = (5));

} else {
var statearr_35030_35107 = state_35012__$1;
(statearr_35030_35107[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (15))){
var inst_34891 = (state_35012[(13)]);
var inst_34892 = (state_35012[(14)]);
var inst_34890 = (state_35012[(16)]);
var inst_34889 = (state_35012[(17)]);
var inst_34907 = (state_35012[(2)]);
var inst_34908 = (inst_34892 + (1));
var tmp35024 = inst_34891;
var tmp35025 = inst_34890;
var tmp35026 = inst_34889;
var inst_34889__$1 = tmp35026;
var inst_34890__$1 = tmp35025;
var inst_34891__$1 = tmp35024;
var inst_34892__$1 = inst_34908;
var state_35012__$1 = (function (){var statearr_35031 = state_35012;
(statearr_35031[(13)] = inst_34891__$1);

(statearr_35031[(14)] = inst_34892__$1);

(statearr_35031[(18)] = inst_34907);

(statearr_35031[(16)] = inst_34890__$1);

(statearr_35031[(17)] = inst_34889__$1);

return statearr_35031;
})();
var statearr_35032_35108 = state_35012__$1;
(statearr_35032_35108[(2)] = null);

(statearr_35032_35108[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (21))){
var inst_34934 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35036_35109 = state_35012__$1;
(statearr_35036_35109[(2)] = inst_34934);

(statearr_35036_35109[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (31))){
var inst_34960 = (state_35012[(9)]);
var inst_34964 = done.call(null,null);
var inst_34965 = cljs.core.async.untap_STAR_.call(null,m,inst_34960);
var state_35012__$1 = (function (){var statearr_35037 = state_35012;
(statearr_35037[(19)] = inst_34964);

return statearr_35037;
})();
var statearr_35038_35110 = state_35012__$1;
(statearr_35038_35110[(2)] = inst_34965);

(statearr_35038_35110[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (32))){
var inst_34952 = (state_35012[(20)]);
var inst_34955 = (state_35012[(10)]);
var inst_34953 = (state_35012[(11)]);
var inst_34954 = (state_35012[(21)]);
var inst_34967 = (state_35012[(2)]);
var inst_34968 = (inst_34955 + (1));
var tmp35033 = inst_34952;
var tmp35034 = inst_34953;
var tmp35035 = inst_34954;
var inst_34952__$1 = tmp35033;
var inst_34953__$1 = tmp35034;
var inst_34954__$1 = tmp35035;
var inst_34955__$1 = inst_34968;
var state_35012__$1 = (function (){var statearr_35039 = state_35012;
(statearr_35039[(20)] = inst_34952__$1);

(statearr_35039[(10)] = inst_34955__$1);

(statearr_35039[(11)] = inst_34953__$1);

(statearr_35039[(21)] = inst_34954__$1);

(statearr_35039[(22)] = inst_34967);

return statearr_35039;
})();
var statearr_35040_35111 = state_35012__$1;
(statearr_35040_35111[(2)] = null);

(statearr_35040_35111[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (40))){
var inst_34980 = (state_35012[(23)]);
var inst_34984 = done.call(null,null);
var inst_34985 = cljs.core.async.untap_STAR_.call(null,m,inst_34980);
var state_35012__$1 = (function (){var statearr_35041 = state_35012;
(statearr_35041[(24)] = inst_34984);

return statearr_35041;
})();
var statearr_35042_35112 = state_35012__$1;
(statearr_35042_35112[(2)] = inst_34985);

(statearr_35042_35112[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (33))){
var inst_34971 = (state_35012[(25)]);
var inst_34973 = cljs.core.chunked_seq_QMARK_.call(null,inst_34971);
var state_35012__$1 = state_35012;
if(inst_34973){
var statearr_35043_35113 = state_35012__$1;
(statearr_35043_35113[(1)] = (36));

} else {
var statearr_35044_35114 = state_35012__$1;
(statearr_35044_35114[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (13))){
var inst_34901 = (state_35012[(26)]);
var inst_34904 = cljs.core.async.close_BANG_.call(null,inst_34901);
var state_35012__$1 = state_35012;
var statearr_35045_35115 = state_35012__$1;
(statearr_35045_35115[(2)] = inst_34904);

(statearr_35045_35115[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (22))){
var inst_34924 = (state_35012[(8)]);
var inst_34927 = cljs.core.async.close_BANG_.call(null,inst_34924);
var state_35012__$1 = state_35012;
var statearr_35046_35116 = state_35012__$1;
(statearr_35046_35116[(2)] = inst_34927);

(statearr_35046_35116[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (36))){
var inst_34971 = (state_35012[(25)]);
var inst_34975 = cljs.core.chunk_first.call(null,inst_34971);
var inst_34976 = cljs.core.chunk_rest.call(null,inst_34971);
var inst_34977 = cljs.core.count.call(null,inst_34975);
var inst_34952 = inst_34976;
var inst_34953 = inst_34975;
var inst_34954 = inst_34977;
var inst_34955 = (0);
var state_35012__$1 = (function (){var statearr_35047 = state_35012;
(statearr_35047[(20)] = inst_34952);

(statearr_35047[(10)] = inst_34955);

(statearr_35047[(11)] = inst_34953);

(statearr_35047[(21)] = inst_34954);

return statearr_35047;
})();
var statearr_35048_35117 = state_35012__$1;
(statearr_35048_35117[(2)] = null);

(statearr_35048_35117[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (41))){
var inst_34971 = (state_35012[(25)]);
var inst_34987 = (state_35012[(2)]);
var inst_34988 = cljs.core.next.call(null,inst_34971);
var inst_34952 = inst_34988;
var inst_34953 = null;
var inst_34954 = (0);
var inst_34955 = (0);
var state_35012__$1 = (function (){var statearr_35049 = state_35012;
(statearr_35049[(20)] = inst_34952);

(statearr_35049[(10)] = inst_34955);

(statearr_35049[(11)] = inst_34953);

(statearr_35049[(21)] = inst_34954);

(statearr_35049[(27)] = inst_34987);

return statearr_35049;
})();
var statearr_35050_35118 = state_35012__$1;
(statearr_35050_35118[(2)] = null);

(statearr_35050_35118[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (43))){
var state_35012__$1 = state_35012;
var statearr_35051_35119 = state_35012__$1;
(statearr_35051_35119[(2)] = null);

(statearr_35051_35119[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (29))){
var inst_34996 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35052_35120 = state_35012__$1;
(statearr_35052_35120[(2)] = inst_34996);

(statearr_35052_35120[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (44))){
var inst_35005 = (state_35012[(2)]);
var state_35012__$1 = (function (){var statearr_35053 = state_35012;
(statearr_35053[(28)] = inst_35005);

return statearr_35053;
})();
var statearr_35054_35121 = state_35012__$1;
(statearr_35054_35121[(2)] = null);

(statearr_35054_35121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (6))){
var inst_34944 = (state_35012[(29)]);
var inst_34943 = cljs.core.deref.call(null,cs);
var inst_34944__$1 = cljs.core.keys.call(null,inst_34943);
var inst_34945 = cljs.core.count.call(null,inst_34944__$1);
var inst_34946 = cljs.core.reset_BANG_.call(null,dctr,inst_34945);
var inst_34951 = cljs.core.seq.call(null,inst_34944__$1);
var inst_34952 = inst_34951;
var inst_34953 = null;
var inst_34954 = (0);
var inst_34955 = (0);
var state_35012__$1 = (function (){var statearr_35055 = state_35012;
(statearr_35055[(30)] = inst_34946);

(statearr_35055[(20)] = inst_34952);

(statearr_35055[(29)] = inst_34944__$1);

(statearr_35055[(10)] = inst_34955);

(statearr_35055[(11)] = inst_34953);

(statearr_35055[(21)] = inst_34954);

return statearr_35055;
})();
var statearr_35056_35122 = state_35012__$1;
(statearr_35056_35122[(2)] = null);

(statearr_35056_35122[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (28))){
var inst_34971 = (state_35012[(25)]);
var inst_34952 = (state_35012[(20)]);
var inst_34971__$1 = cljs.core.seq.call(null,inst_34952);
var state_35012__$1 = (function (){var statearr_35057 = state_35012;
(statearr_35057[(25)] = inst_34971__$1);

return statearr_35057;
})();
if(inst_34971__$1){
var statearr_35058_35123 = state_35012__$1;
(statearr_35058_35123[(1)] = (33));

} else {
var statearr_35059_35124 = state_35012__$1;
(statearr_35059_35124[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (25))){
var inst_34955 = (state_35012[(10)]);
var inst_34954 = (state_35012[(21)]);
var inst_34957 = (inst_34955 < inst_34954);
var inst_34958 = inst_34957;
var state_35012__$1 = state_35012;
if(cljs.core.truth_(inst_34958)){
var statearr_35060_35125 = state_35012__$1;
(statearr_35060_35125[(1)] = (27));

} else {
var statearr_35061_35126 = state_35012__$1;
(statearr_35061_35126[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (34))){
var state_35012__$1 = state_35012;
var statearr_35062_35127 = state_35012__$1;
(statearr_35062_35127[(2)] = null);

(statearr_35062_35127[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (17))){
var state_35012__$1 = state_35012;
var statearr_35063_35128 = state_35012__$1;
(statearr_35063_35128[(2)] = null);

(statearr_35063_35128[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (3))){
var inst_35010 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35012__$1,inst_35010);
} else {
if((state_val_35013 === (12))){
var inst_34939 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35064_35129 = state_35012__$1;
(statearr_35064_35129[(2)] = inst_34939);

(statearr_35064_35129[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (2))){
var state_35012__$1 = state_35012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35012__$1,(4),ch);
} else {
if((state_val_35013 === (23))){
var state_35012__$1 = state_35012;
var statearr_35065_35130 = state_35012__$1;
(statearr_35065_35130[(2)] = null);

(statearr_35065_35130[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (35))){
var inst_34994 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35066_35131 = state_35012__$1;
(statearr_35066_35131[(2)] = inst_34994);

(statearr_35066_35131[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (19))){
var inst_34911 = (state_35012[(7)]);
var inst_34915 = cljs.core.chunk_first.call(null,inst_34911);
var inst_34916 = cljs.core.chunk_rest.call(null,inst_34911);
var inst_34917 = cljs.core.count.call(null,inst_34915);
var inst_34889 = inst_34916;
var inst_34890 = inst_34915;
var inst_34891 = inst_34917;
var inst_34892 = (0);
var state_35012__$1 = (function (){var statearr_35067 = state_35012;
(statearr_35067[(13)] = inst_34891);

(statearr_35067[(14)] = inst_34892);

(statearr_35067[(16)] = inst_34890);

(statearr_35067[(17)] = inst_34889);

return statearr_35067;
})();
var statearr_35068_35132 = state_35012__$1;
(statearr_35068_35132[(2)] = null);

(statearr_35068_35132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (11))){
var inst_34911 = (state_35012[(7)]);
var inst_34889 = (state_35012[(17)]);
var inst_34911__$1 = cljs.core.seq.call(null,inst_34889);
var state_35012__$1 = (function (){var statearr_35069 = state_35012;
(statearr_35069[(7)] = inst_34911__$1);

return statearr_35069;
})();
if(inst_34911__$1){
var statearr_35070_35133 = state_35012__$1;
(statearr_35070_35133[(1)] = (16));

} else {
var statearr_35071_35134 = state_35012__$1;
(statearr_35071_35134[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (9))){
var inst_34941 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35072_35135 = state_35012__$1;
(statearr_35072_35135[(2)] = inst_34941);

(statearr_35072_35135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (5))){
var inst_34887 = cljs.core.deref.call(null,cs);
var inst_34888 = cljs.core.seq.call(null,inst_34887);
var inst_34889 = inst_34888;
var inst_34890 = null;
var inst_34891 = (0);
var inst_34892 = (0);
var state_35012__$1 = (function (){var statearr_35073 = state_35012;
(statearr_35073[(13)] = inst_34891);

(statearr_35073[(14)] = inst_34892);

(statearr_35073[(16)] = inst_34890);

(statearr_35073[(17)] = inst_34889);

return statearr_35073;
})();
var statearr_35074_35136 = state_35012__$1;
(statearr_35074_35136[(2)] = null);

(statearr_35074_35136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (14))){
var state_35012__$1 = state_35012;
var statearr_35075_35137 = state_35012__$1;
(statearr_35075_35137[(2)] = null);

(statearr_35075_35137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (45))){
var inst_35002 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35076_35138 = state_35012__$1;
(statearr_35076_35138[(2)] = inst_35002);

(statearr_35076_35138[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (26))){
var inst_34944 = (state_35012[(29)]);
var inst_34998 = (state_35012[(2)]);
var inst_34999 = cljs.core.seq.call(null,inst_34944);
var state_35012__$1 = (function (){var statearr_35077 = state_35012;
(statearr_35077[(31)] = inst_34998);

return statearr_35077;
})();
if(inst_34999){
var statearr_35078_35139 = state_35012__$1;
(statearr_35078_35139[(1)] = (42));

} else {
var statearr_35079_35140 = state_35012__$1;
(statearr_35079_35140[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (16))){
var inst_34911 = (state_35012[(7)]);
var inst_34913 = cljs.core.chunked_seq_QMARK_.call(null,inst_34911);
var state_35012__$1 = state_35012;
if(inst_34913){
var statearr_35080_35141 = state_35012__$1;
(statearr_35080_35141[(1)] = (19));

} else {
var statearr_35081_35142 = state_35012__$1;
(statearr_35081_35142[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (38))){
var inst_34991 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35082_35143 = state_35012__$1;
(statearr_35082_35143[(2)] = inst_34991);

(statearr_35082_35143[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (30))){
var state_35012__$1 = state_35012;
var statearr_35083_35144 = state_35012__$1;
(statearr_35083_35144[(2)] = null);

(statearr_35083_35144[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (10))){
var inst_34892 = (state_35012[(14)]);
var inst_34890 = (state_35012[(16)]);
var inst_34900 = cljs.core._nth.call(null,inst_34890,inst_34892);
var inst_34901 = cljs.core.nth.call(null,inst_34900,(0),null);
var inst_34902 = cljs.core.nth.call(null,inst_34900,(1),null);
var state_35012__$1 = (function (){var statearr_35084 = state_35012;
(statearr_35084[(26)] = inst_34901);

return statearr_35084;
})();
if(cljs.core.truth_(inst_34902)){
var statearr_35085_35145 = state_35012__$1;
(statearr_35085_35145[(1)] = (13));

} else {
var statearr_35086_35146 = state_35012__$1;
(statearr_35086_35146[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (18))){
var inst_34937 = (state_35012[(2)]);
var state_35012__$1 = state_35012;
var statearr_35087_35147 = state_35012__$1;
(statearr_35087_35147[(2)] = inst_34937);

(statearr_35087_35147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (42))){
var state_35012__$1 = state_35012;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35012__$1,(45),dchan);
} else {
if((state_val_35013 === (37))){
var inst_34971 = (state_35012[(25)]);
var inst_34980 = (state_35012[(23)]);
var inst_34880 = (state_35012[(12)]);
var inst_34980__$1 = cljs.core.first.call(null,inst_34971);
var inst_34981 = cljs.core.async.put_BANG_.call(null,inst_34980__$1,inst_34880,done);
var state_35012__$1 = (function (){var statearr_35088 = state_35012;
(statearr_35088[(23)] = inst_34980__$1);

return statearr_35088;
})();
if(cljs.core.truth_(inst_34981)){
var statearr_35089_35148 = state_35012__$1;
(statearr_35089_35148[(1)] = (39));

} else {
var statearr_35090_35149 = state_35012__$1;
(statearr_35090_35149[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35013 === (8))){
var inst_34891 = (state_35012[(13)]);
var inst_34892 = (state_35012[(14)]);
var inst_34894 = (inst_34892 < inst_34891);
var inst_34895 = inst_34894;
var state_35012__$1 = state_35012;
if(cljs.core.truth_(inst_34895)){
var statearr_35091_35150 = state_35012__$1;
(statearr_35091_35150[(1)] = (10));

} else {
var statearr_35092_35151 = state_35012__$1;
(statearr_35092_35151[(1)] = (11));

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
});})(c__34292__auto___35097,cs,m,dchan,dctr,done))
;
return ((function (switch__34204__auto__,c__34292__auto___35097,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34205__auto__ = null;
var cljs$core$async$mult_$_state_machine__34205__auto____0 = (function (){
var statearr_35093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35093[(0)] = cljs$core$async$mult_$_state_machine__34205__auto__);

(statearr_35093[(1)] = (1));

return statearr_35093;
});
var cljs$core$async$mult_$_state_machine__34205__auto____1 = (function (state_35012){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_35012);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e35094){if((e35094 instanceof Object)){
var ex__34208__auto__ = e35094;
var statearr_35095_35152 = state_35012;
(statearr_35095_35152[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35012);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35153 = state_35012;
state_35012 = G__35153;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34205__auto__ = function(state_35012){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34205__auto____1.call(this,state_35012);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34205__auto____0;
cljs$core$async$mult_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34205__auto____1;
return cljs$core$async$mult_$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___35097,cs,m,dchan,dctr,done))
})();
var state__34294__auto__ = (function (){var statearr_35096 = f__34293__auto__.call(null);
(statearr_35096[(6)] = c__34292__auto___35097);

return statearr_35096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___35097,cs,m,dchan,dctr,done))
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
var G__35155 = arguments.length;
switch (G__35155) {
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
var len__29601__auto___35167 = arguments.length;
var i__29602__auto___35168 = (0);
while(true){
if((i__29602__auto___35168 < len__29601__auto___35167)){
args__29608__auto__.push((arguments[i__29602__auto___35168]));

var G__35169 = (i__29602__auto___35168 + (1));
i__29602__auto___35168 = G__35169;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((3) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29609__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35161){
var map__35162 = p__35161;
var map__35162__$1 = ((((!((map__35162 == null)))?((((map__35162.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35162.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35162):map__35162);
var opts = map__35162__$1;
var statearr_35164_35170 = state;
(statearr_35164_35170[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__35162,map__35162__$1,opts){
return (function (val){
var statearr_35165_35171 = state;
(statearr_35165_35171[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35162,map__35162__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_35166_35172 = state;
(statearr_35166_35172[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35157){
var G__35158 = cljs.core.first.call(null,seq35157);
var seq35157__$1 = cljs.core.next.call(null,seq35157);
var G__35159 = cljs.core.first.call(null,seq35157__$1);
var seq35157__$2 = cljs.core.next.call(null,seq35157__$1);
var G__35160 = cljs.core.first.call(null,seq35157__$2);
var seq35157__$3 = cljs.core.next.call(null,seq35157__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35158,G__35159,G__35160,seq35157__$3);
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
if(typeof cljs.core.async.t_cljs$core$async35173 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35173 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35174){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35174 = meta35174;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35173.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35175,meta35174__$1){
var self__ = this;
var _35175__$1 = this;
return (new cljs.core.async.t_cljs$core$async35173(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35174__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35173.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35175){
var self__ = this;
var _35175__$1 = this;
return self__.meta35174;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35173.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35173.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35173.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35173.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35173.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35173.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35173.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35173.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async35173.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35174","meta35174",1554534162,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35173.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35173.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35173";

cljs.core.async.t_cljs$core$async35173.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async35173");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35173 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35173(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35174){
return (new cljs.core.async.t_cljs$core$async35173(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35174));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35173(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34292__auto___35337 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___35337,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___35337,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35277){
var state_val_35278 = (state_35277[(1)]);
if((state_val_35278 === (7))){
var inst_35192 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
var statearr_35279_35338 = state_35277__$1;
(statearr_35279_35338[(2)] = inst_35192);

(statearr_35279_35338[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (20))){
var inst_35204 = (state_35277[(7)]);
var state_35277__$1 = state_35277;
var statearr_35280_35339 = state_35277__$1;
(statearr_35280_35339[(2)] = inst_35204);

(statearr_35280_35339[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (27))){
var state_35277__$1 = state_35277;
var statearr_35281_35340 = state_35277__$1;
(statearr_35281_35340[(2)] = null);

(statearr_35281_35340[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (1))){
var inst_35179 = (state_35277[(8)]);
var inst_35179__$1 = calc_state.call(null);
var inst_35181 = (inst_35179__$1 == null);
var inst_35182 = cljs.core.not.call(null,inst_35181);
var state_35277__$1 = (function (){var statearr_35282 = state_35277;
(statearr_35282[(8)] = inst_35179__$1);

return statearr_35282;
})();
if(inst_35182){
var statearr_35283_35341 = state_35277__$1;
(statearr_35283_35341[(1)] = (2));

} else {
var statearr_35284_35342 = state_35277__$1;
(statearr_35284_35342[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (24))){
var inst_35251 = (state_35277[(9)]);
var inst_35237 = (state_35277[(10)]);
var inst_35228 = (state_35277[(11)]);
var inst_35251__$1 = inst_35228.call(null,inst_35237);
var state_35277__$1 = (function (){var statearr_35285 = state_35277;
(statearr_35285[(9)] = inst_35251__$1);

return statearr_35285;
})();
if(cljs.core.truth_(inst_35251__$1)){
var statearr_35286_35343 = state_35277__$1;
(statearr_35286_35343[(1)] = (29));

} else {
var statearr_35287_35344 = state_35277__$1;
(statearr_35287_35344[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (4))){
var inst_35195 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
if(cljs.core.truth_(inst_35195)){
var statearr_35288_35345 = state_35277__$1;
(statearr_35288_35345[(1)] = (8));

} else {
var statearr_35289_35346 = state_35277__$1;
(statearr_35289_35346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (15))){
var inst_35222 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
if(cljs.core.truth_(inst_35222)){
var statearr_35290_35347 = state_35277__$1;
(statearr_35290_35347[(1)] = (19));

} else {
var statearr_35291_35348 = state_35277__$1;
(statearr_35291_35348[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (21))){
var inst_35227 = (state_35277[(12)]);
var inst_35227__$1 = (state_35277[(2)]);
var inst_35228 = cljs.core.get.call(null,inst_35227__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35229 = cljs.core.get.call(null,inst_35227__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35230 = cljs.core.get.call(null,inst_35227__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35277__$1 = (function (){var statearr_35292 = state_35277;
(statearr_35292[(12)] = inst_35227__$1);

(statearr_35292[(13)] = inst_35229);

(statearr_35292[(11)] = inst_35228);

return statearr_35292;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35277__$1,(22),inst_35230);
} else {
if((state_val_35278 === (31))){
var inst_35259 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
if(cljs.core.truth_(inst_35259)){
var statearr_35293_35349 = state_35277__$1;
(statearr_35293_35349[(1)] = (32));

} else {
var statearr_35294_35350 = state_35277__$1;
(statearr_35294_35350[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (32))){
var inst_35236 = (state_35277[(14)]);
var state_35277__$1 = state_35277;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35277__$1,(35),out,inst_35236);
} else {
if((state_val_35278 === (33))){
var inst_35227 = (state_35277[(12)]);
var inst_35204 = inst_35227;
var state_35277__$1 = (function (){var statearr_35295 = state_35277;
(statearr_35295[(7)] = inst_35204);

return statearr_35295;
})();
var statearr_35296_35351 = state_35277__$1;
(statearr_35296_35351[(2)] = null);

(statearr_35296_35351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (13))){
var inst_35204 = (state_35277[(7)]);
var inst_35211 = inst_35204.cljs$lang$protocol_mask$partition0$;
var inst_35212 = (inst_35211 & (64));
var inst_35213 = inst_35204.cljs$core$ISeq$;
var inst_35214 = (cljs.core.PROTOCOL_SENTINEL === inst_35213);
var inst_35215 = (inst_35212) || (inst_35214);
var state_35277__$1 = state_35277;
if(cljs.core.truth_(inst_35215)){
var statearr_35297_35352 = state_35277__$1;
(statearr_35297_35352[(1)] = (16));

} else {
var statearr_35298_35353 = state_35277__$1;
(statearr_35298_35353[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (22))){
var inst_35237 = (state_35277[(10)]);
var inst_35236 = (state_35277[(14)]);
var inst_35235 = (state_35277[(2)]);
var inst_35236__$1 = cljs.core.nth.call(null,inst_35235,(0),null);
var inst_35237__$1 = cljs.core.nth.call(null,inst_35235,(1),null);
var inst_35238 = (inst_35236__$1 == null);
var inst_35239 = cljs.core._EQ_.call(null,inst_35237__$1,change);
var inst_35240 = (inst_35238) || (inst_35239);
var state_35277__$1 = (function (){var statearr_35299 = state_35277;
(statearr_35299[(10)] = inst_35237__$1);

(statearr_35299[(14)] = inst_35236__$1);

return statearr_35299;
})();
if(cljs.core.truth_(inst_35240)){
var statearr_35300_35354 = state_35277__$1;
(statearr_35300_35354[(1)] = (23));

} else {
var statearr_35301_35355 = state_35277__$1;
(statearr_35301_35355[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (36))){
var inst_35227 = (state_35277[(12)]);
var inst_35204 = inst_35227;
var state_35277__$1 = (function (){var statearr_35302 = state_35277;
(statearr_35302[(7)] = inst_35204);

return statearr_35302;
})();
var statearr_35303_35356 = state_35277__$1;
(statearr_35303_35356[(2)] = null);

(statearr_35303_35356[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (29))){
var inst_35251 = (state_35277[(9)]);
var state_35277__$1 = state_35277;
var statearr_35304_35357 = state_35277__$1;
(statearr_35304_35357[(2)] = inst_35251);

(statearr_35304_35357[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (6))){
var state_35277__$1 = state_35277;
var statearr_35305_35358 = state_35277__$1;
(statearr_35305_35358[(2)] = false);

(statearr_35305_35358[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (28))){
var inst_35247 = (state_35277[(2)]);
var inst_35248 = calc_state.call(null);
var inst_35204 = inst_35248;
var state_35277__$1 = (function (){var statearr_35306 = state_35277;
(statearr_35306[(15)] = inst_35247);

(statearr_35306[(7)] = inst_35204);

return statearr_35306;
})();
var statearr_35307_35359 = state_35277__$1;
(statearr_35307_35359[(2)] = null);

(statearr_35307_35359[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (25))){
var inst_35273 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
var statearr_35308_35360 = state_35277__$1;
(statearr_35308_35360[(2)] = inst_35273);

(statearr_35308_35360[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (34))){
var inst_35271 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
var statearr_35309_35361 = state_35277__$1;
(statearr_35309_35361[(2)] = inst_35271);

(statearr_35309_35361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (17))){
var state_35277__$1 = state_35277;
var statearr_35310_35362 = state_35277__$1;
(statearr_35310_35362[(2)] = false);

(statearr_35310_35362[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (3))){
var state_35277__$1 = state_35277;
var statearr_35311_35363 = state_35277__$1;
(statearr_35311_35363[(2)] = false);

(statearr_35311_35363[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (12))){
var inst_35275 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35277__$1,inst_35275);
} else {
if((state_val_35278 === (2))){
var inst_35179 = (state_35277[(8)]);
var inst_35184 = inst_35179.cljs$lang$protocol_mask$partition0$;
var inst_35185 = (inst_35184 & (64));
var inst_35186 = inst_35179.cljs$core$ISeq$;
var inst_35187 = (cljs.core.PROTOCOL_SENTINEL === inst_35186);
var inst_35188 = (inst_35185) || (inst_35187);
var state_35277__$1 = state_35277;
if(cljs.core.truth_(inst_35188)){
var statearr_35312_35364 = state_35277__$1;
(statearr_35312_35364[(1)] = (5));

} else {
var statearr_35313_35365 = state_35277__$1;
(statearr_35313_35365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (23))){
var inst_35236 = (state_35277[(14)]);
var inst_35242 = (inst_35236 == null);
var state_35277__$1 = state_35277;
if(cljs.core.truth_(inst_35242)){
var statearr_35314_35366 = state_35277__$1;
(statearr_35314_35366[(1)] = (26));

} else {
var statearr_35315_35367 = state_35277__$1;
(statearr_35315_35367[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (35))){
var inst_35262 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
if(cljs.core.truth_(inst_35262)){
var statearr_35316_35368 = state_35277__$1;
(statearr_35316_35368[(1)] = (36));

} else {
var statearr_35317_35369 = state_35277__$1;
(statearr_35317_35369[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (19))){
var inst_35204 = (state_35277[(7)]);
var inst_35224 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35204);
var state_35277__$1 = state_35277;
var statearr_35318_35370 = state_35277__$1;
(statearr_35318_35370[(2)] = inst_35224);

(statearr_35318_35370[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (11))){
var inst_35204 = (state_35277[(7)]);
var inst_35208 = (inst_35204 == null);
var inst_35209 = cljs.core.not.call(null,inst_35208);
var state_35277__$1 = state_35277;
if(inst_35209){
var statearr_35319_35371 = state_35277__$1;
(statearr_35319_35371[(1)] = (13));

} else {
var statearr_35320_35372 = state_35277__$1;
(statearr_35320_35372[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (9))){
var inst_35179 = (state_35277[(8)]);
var state_35277__$1 = state_35277;
var statearr_35321_35373 = state_35277__$1;
(statearr_35321_35373[(2)] = inst_35179);

(statearr_35321_35373[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (5))){
var state_35277__$1 = state_35277;
var statearr_35322_35374 = state_35277__$1;
(statearr_35322_35374[(2)] = true);

(statearr_35322_35374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (14))){
var state_35277__$1 = state_35277;
var statearr_35323_35375 = state_35277__$1;
(statearr_35323_35375[(2)] = false);

(statearr_35323_35375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (26))){
var inst_35237 = (state_35277[(10)]);
var inst_35244 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35237);
var state_35277__$1 = state_35277;
var statearr_35324_35376 = state_35277__$1;
(statearr_35324_35376[(2)] = inst_35244);

(statearr_35324_35376[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (16))){
var state_35277__$1 = state_35277;
var statearr_35325_35377 = state_35277__$1;
(statearr_35325_35377[(2)] = true);

(statearr_35325_35377[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (38))){
var inst_35267 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
var statearr_35326_35378 = state_35277__$1;
(statearr_35326_35378[(2)] = inst_35267);

(statearr_35326_35378[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (30))){
var inst_35237 = (state_35277[(10)]);
var inst_35229 = (state_35277[(13)]);
var inst_35228 = (state_35277[(11)]);
var inst_35254 = cljs.core.empty_QMARK_.call(null,inst_35228);
var inst_35255 = inst_35229.call(null,inst_35237);
var inst_35256 = cljs.core.not.call(null,inst_35255);
var inst_35257 = (inst_35254) && (inst_35256);
var state_35277__$1 = state_35277;
var statearr_35327_35379 = state_35277__$1;
(statearr_35327_35379[(2)] = inst_35257);

(statearr_35327_35379[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (10))){
var inst_35179 = (state_35277[(8)]);
var inst_35200 = (state_35277[(2)]);
var inst_35201 = cljs.core.get.call(null,inst_35200,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35202 = cljs.core.get.call(null,inst_35200,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35203 = cljs.core.get.call(null,inst_35200,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35204 = inst_35179;
var state_35277__$1 = (function (){var statearr_35328 = state_35277;
(statearr_35328[(16)] = inst_35202);

(statearr_35328[(17)] = inst_35201);

(statearr_35328[(18)] = inst_35203);

(statearr_35328[(7)] = inst_35204);

return statearr_35328;
})();
var statearr_35329_35380 = state_35277__$1;
(statearr_35329_35380[(2)] = null);

(statearr_35329_35380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (18))){
var inst_35219 = (state_35277[(2)]);
var state_35277__$1 = state_35277;
var statearr_35330_35381 = state_35277__$1;
(statearr_35330_35381[(2)] = inst_35219);

(statearr_35330_35381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (37))){
var state_35277__$1 = state_35277;
var statearr_35331_35382 = state_35277__$1;
(statearr_35331_35382[(2)] = null);

(statearr_35331_35382[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35278 === (8))){
var inst_35179 = (state_35277[(8)]);
var inst_35197 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35179);
var state_35277__$1 = state_35277;
var statearr_35332_35383 = state_35277__$1;
(statearr_35332_35383[(2)] = inst_35197);

(statearr_35332_35383[(1)] = (10));


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
});})(c__34292__auto___35337,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34204__auto__,c__34292__auto___35337,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34205__auto__ = null;
var cljs$core$async$mix_$_state_machine__34205__auto____0 = (function (){
var statearr_35333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35333[(0)] = cljs$core$async$mix_$_state_machine__34205__auto__);

(statearr_35333[(1)] = (1));

return statearr_35333;
});
var cljs$core$async$mix_$_state_machine__34205__auto____1 = (function (state_35277){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_35277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e35334){if((e35334 instanceof Object)){
var ex__34208__auto__ = e35334;
var statearr_35335_35384 = state_35277;
(statearr_35335_35384[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35334;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35385 = state_35277;
state_35277 = G__35385;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34205__auto__ = function(state_35277){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34205__auto____1.call(this,state_35277);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34205__auto____0;
cljs$core$async$mix_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34205__auto____1;
return cljs$core$async$mix_$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___35337,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34294__auto__ = (function (){var statearr_35336 = f__34293__auto__.call(null);
(statearr_35336[(6)] = c__34292__auto___35337);

return statearr_35336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___35337,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__35387 = arguments.length;
switch (G__35387) {
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
var G__35391 = arguments.length;
switch (G__35391) {
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
return (function (p1__35389_SHARP_){
if(cljs.core.truth_(p1__35389_SHARP_.call(null,topic))){
return p1__35389_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35389_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__28432__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35392 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35392 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35393){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35393 = meta35393;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35394,meta35393__$1){
var self__ = this;
var _35394__$1 = this;
return (new cljs.core.async.t_cljs$core$async35392(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35393__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35394){
var self__ = this;
var _35394__$1 = this;
return self__.meta35393;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35392.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35392.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35393","meta35393",-1930964008,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35392.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35392.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35392";

cljs.core.async.t_cljs$core$async35392.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async35392");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35392 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35392(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35393){
return (new cljs.core.async.t_cljs$core$async35392(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35393));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35392(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34292__auto___35512 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___35512,mults,ensure_mult,p){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___35512,mults,ensure_mult,p){
return (function (state_35466){
var state_val_35467 = (state_35466[(1)]);
if((state_val_35467 === (7))){
var inst_35462 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35468_35513 = state_35466__$1;
(statearr_35468_35513[(2)] = inst_35462);

(statearr_35468_35513[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (20))){
var state_35466__$1 = state_35466;
var statearr_35469_35514 = state_35466__$1;
(statearr_35469_35514[(2)] = null);

(statearr_35469_35514[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (1))){
var state_35466__$1 = state_35466;
var statearr_35470_35515 = state_35466__$1;
(statearr_35470_35515[(2)] = null);

(statearr_35470_35515[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (24))){
var inst_35445 = (state_35466[(7)]);
var inst_35454 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35445);
var state_35466__$1 = state_35466;
var statearr_35471_35516 = state_35466__$1;
(statearr_35471_35516[(2)] = inst_35454);

(statearr_35471_35516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (4))){
var inst_35397 = (state_35466[(8)]);
var inst_35397__$1 = (state_35466[(2)]);
var inst_35398 = (inst_35397__$1 == null);
var state_35466__$1 = (function (){var statearr_35472 = state_35466;
(statearr_35472[(8)] = inst_35397__$1);

return statearr_35472;
})();
if(cljs.core.truth_(inst_35398)){
var statearr_35473_35517 = state_35466__$1;
(statearr_35473_35517[(1)] = (5));

} else {
var statearr_35474_35518 = state_35466__$1;
(statearr_35474_35518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (15))){
var inst_35439 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35475_35519 = state_35466__$1;
(statearr_35475_35519[(2)] = inst_35439);

(statearr_35475_35519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (21))){
var inst_35459 = (state_35466[(2)]);
var state_35466__$1 = (function (){var statearr_35476 = state_35466;
(statearr_35476[(9)] = inst_35459);

return statearr_35476;
})();
var statearr_35477_35520 = state_35466__$1;
(statearr_35477_35520[(2)] = null);

(statearr_35477_35520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (13))){
var inst_35421 = (state_35466[(10)]);
var inst_35423 = cljs.core.chunked_seq_QMARK_.call(null,inst_35421);
var state_35466__$1 = state_35466;
if(inst_35423){
var statearr_35478_35521 = state_35466__$1;
(statearr_35478_35521[(1)] = (16));

} else {
var statearr_35479_35522 = state_35466__$1;
(statearr_35479_35522[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (22))){
var inst_35451 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
if(cljs.core.truth_(inst_35451)){
var statearr_35480_35523 = state_35466__$1;
(statearr_35480_35523[(1)] = (23));

} else {
var statearr_35481_35524 = state_35466__$1;
(statearr_35481_35524[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (6))){
var inst_35445 = (state_35466[(7)]);
var inst_35397 = (state_35466[(8)]);
var inst_35447 = (state_35466[(11)]);
var inst_35445__$1 = topic_fn.call(null,inst_35397);
var inst_35446 = cljs.core.deref.call(null,mults);
var inst_35447__$1 = cljs.core.get.call(null,inst_35446,inst_35445__$1);
var state_35466__$1 = (function (){var statearr_35482 = state_35466;
(statearr_35482[(7)] = inst_35445__$1);

(statearr_35482[(11)] = inst_35447__$1);

return statearr_35482;
})();
if(cljs.core.truth_(inst_35447__$1)){
var statearr_35483_35525 = state_35466__$1;
(statearr_35483_35525[(1)] = (19));

} else {
var statearr_35484_35526 = state_35466__$1;
(statearr_35484_35526[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (25))){
var inst_35456 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35485_35527 = state_35466__$1;
(statearr_35485_35527[(2)] = inst_35456);

(statearr_35485_35527[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (17))){
var inst_35421 = (state_35466[(10)]);
var inst_35430 = cljs.core.first.call(null,inst_35421);
var inst_35431 = cljs.core.async.muxch_STAR_.call(null,inst_35430);
var inst_35432 = cljs.core.async.close_BANG_.call(null,inst_35431);
var inst_35433 = cljs.core.next.call(null,inst_35421);
var inst_35407 = inst_35433;
var inst_35408 = null;
var inst_35409 = (0);
var inst_35410 = (0);
var state_35466__$1 = (function (){var statearr_35486 = state_35466;
(statearr_35486[(12)] = inst_35408);

(statearr_35486[(13)] = inst_35407);

(statearr_35486[(14)] = inst_35409);

(statearr_35486[(15)] = inst_35432);

(statearr_35486[(16)] = inst_35410);

return statearr_35486;
})();
var statearr_35487_35528 = state_35466__$1;
(statearr_35487_35528[(2)] = null);

(statearr_35487_35528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (3))){
var inst_35464 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35466__$1,inst_35464);
} else {
if((state_val_35467 === (12))){
var inst_35441 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35488_35529 = state_35466__$1;
(statearr_35488_35529[(2)] = inst_35441);

(statearr_35488_35529[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (2))){
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35466__$1,(4),ch);
} else {
if((state_val_35467 === (23))){
var state_35466__$1 = state_35466;
var statearr_35489_35530 = state_35466__$1;
(statearr_35489_35530[(2)] = null);

(statearr_35489_35530[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (19))){
var inst_35397 = (state_35466[(8)]);
var inst_35447 = (state_35466[(11)]);
var inst_35449 = cljs.core.async.muxch_STAR_.call(null,inst_35447);
var state_35466__$1 = state_35466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35466__$1,(22),inst_35449,inst_35397);
} else {
if((state_val_35467 === (11))){
var inst_35407 = (state_35466[(13)]);
var inst_35421 = (state_35466[(10)]);
var inst_35421__$1 = cljs.core.seq.call(null,inst_35407);
var state_35466__$1 = (function (){var statearr_35490 = state_35466;
(statearr_35490[(10)] = inst_35421__$1);

return statearr_35490;
})();
if(inst_35421__$1){
var statearr_35491_35531 = state_35466__$1;
(statearr_35491_35531[(1)] = (13));

} else {
var statearr_35492_35532 = state_35466__$1;
(statearr_35492_35532[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (9))){
var inst_35443 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35493_35533 = state_35466__$1;
(statearr_35493_35533[(2)] = inst_35443);

(statearr_35493_35533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (5))){
var inst_35404 = cljs.core.deref.call(null,mults);
var inst_35405 = cljs.core.vals.call(null,inst_35404);
var inst_35406 = cljs.core.seq.call(null,inst_35405);
var inst_35407 = inst_35406;
var inst_35408 = null;
var inst_35409 = (0);
var inst_35410 = (0);
var state_35466__$1 = (function (){var statearr_35494 = state_35466;
(statearr_35494[(12)] = inst_35408);

(statearr_35494[(13)] = inst_35407);

(statearr_35494[(14)] = inst_35409);

(statearr_35494[(16)] = inst_35410);

return statearr_35494;
})();
var statearr_35495_35534 = state_35466__$1;
(statearr_35495_35534[(2)] = null);

(statearr_35495_35534[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (14))){
var state_35466__$1 = state_35466;
var statearr_35499_35535 = state_35466__$1;
(statearr_35499_35535[(2)] = null);

(statearr_35499_35535[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (16))){
var inst_35421 = (state_35466[(10)]);
var inst_35425 = cljs.core.chunk_first.call(null,inst_35421);
var inst_35426 = cljs.core.chunk_rest.call(null,inst_35421);
var inst_35427 = cljs.core.count.call(null,inst_35425);
var inst_35407 = inst_35426;
var inst_35408 = inst_35425;
var inst_35409 = inst_35427;
var inst_35410 = (0);
var state_35466__$1 = (function (){var statearr_35500 = state_35466;
(statearr_35500[(12)] = inst_35408);

(statearr_35500[(13)] = inst_35407);

(statearr_35500[(14)] = inst_35409);

(statearr_35500[(16)] = inst_35410);

return statearr_35500;
})();
var statearr_35501_35536 = state_35466__$1;
(statearr_35501_35536[(2)] = null);

(statearr_35501_35536[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (10))){
var inst_35408 = (state_35466[(12)]);
var inst_35407 = (state_35466[(13)]);
var inst_35409 = (state_35466[(14)]);
var inst_35410 = (state_35466[(16)]);
var inst_35415 = cljs.core._nth.call(null,inst_35408,inst_35410);
var inst_35416 = cljs.core.async.muxch_STAR_.call(null,inst_35415);
var inst_35417 = cljs.core.async.close_BANG_.call(null,inst_35416);
var inst_35418 = (inst_35410 + (1));
var tmp35496 = inst_35408;
var tmp35497 = inst_35407;
var tmp35498 = inst_35409;
var inst_35407__$1 = tmp35497;
var inst_35408__$1 = tmp35496;
var inst_35409__$1 = tmp35498;
var inst_35410__$1 = inst_35418;
var state_35466__$1 = (function (){var statearr_35502 = state_35466;
(statearr_35502[(12)] = inst_35408__$1);

(statearr_35502[(13)] = inst_35407__$1);

(statearr_35502[(14)] = inst_35409__$1);

(statearr_35502[(17)] = inst_35417);

(statearr_35502[(16)] = inst_35410__$1);

return statearr_35502;
})();
var statearr_35503_35537 = state_35466__$1;
(statearr_35503_35537[(2)] = null);

(statearr_35503_35537[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (18))){
var inst_35436 = (state_35466[(2)]);
var state_35466__$1 = state_35466;
var statearr_35504_35538 = state_35466__$1;
(statearr_35504_35538[(2)] = inst_35436);

(statearr_35504_35538[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35467 === (8))){
var inst_35409 = (state_35466[(14)]);
var inst_35410 = (state_35466[(16)]);
var inst_35412 = (inst_35410 < inst_35409);
var inst_35413 = inst_35412;
var state_35466__$1 = state_35466;
if(cljs.core.truth_(inst_35413)){
var statearr_35505_35539 = state_35466__$1;
(statearr_35505_35539[(1)] = (10));

} else {
var statearr_35506_35540 = state_35466__$1;
(statearr_35506_35540[(1)] = (11));

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
});})(c__34292__auto___35512,mults,ensure_mult,p))
;
return ((function (switch__34204__auto__,c__34292__auto___35512,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34205__auto__ = null;
var cljs$core$async$state_machine__34205__auto____0 = (function (){
var statearr_35507 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35507[(0)] = cljs$core$async$state_machine__34205__auto__);

(statearr_35507[(1)] = (1));

return statearr_35507;
});
var cljs$core$async$state_machine__34205__auto____1 = (function (state_35466){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_35466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e35508){if((e35508 instanceof Object)){
var ex__34208__auto__ = e35508;
var statearr_35509_35541 = state_35466;
(statearr_35509_35541[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35508;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35542 = state_35466;
state_35466 = G__35542;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$state_machine__34205__auto__ = function(state_35466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34205__auto____1.call(this,state_35466);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34205__auto____0;
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34205__auto____1;
return cljs$core$async$state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___35512,mults,ensure_mult,p))
})();
var state__34294__auto__ = (function (){var statearr_35510 = f__34293__auto__.call(null);
(statearr_35510[(6)] = c__34292__auto___35512);

return statearr_35510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___35512,mults,ensure_mult,p))
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
var G__35544 = arguments.length;
switch (G__35544) {
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
var G__35547 = arguments.length;
switch (G__35547) {
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
var G__35550 = arguments.length;
switch (G__35550) {
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
var c__34292__auto___35617 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___35617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___35617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35589){
var state_val_35590 = (state_35589[(1)]);
if((state_val_35590 === (7))){
var state_35589__$1 = state_35589;
var statearr_35591_35618 = state_35589__$1;
(statearr_35591_35618[(2)] = null);

(statearr_35591_35618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (1))){
var state_35589__$1 = state_35589;
var statearr_35592_35619 = state_35589__$1;
(statearr_35592_35619[(2)] = null);

(statearr_35592_35619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (4))){
var inst_35553 = (state_35589[(7)]);
var inst_35555 = (inst_35553 < cnt);
var state_35589__$1 = state_35589;
if(cljs.core.truth_(inst_35555)){
var statearr_35593_35620 = state_35589__$1;
(statearr_35593_35620[(1)] = (6));

} else {
var statearr_35594_35621 = state_35589__$1;
(statearr_35594_35621[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (15))){
var inst_35585 = (state_35589[(2)]);
var state_35589__$1 = state_35589;
var statearr_35595_35622 = state_35589__$1;
(statearr_35595_35622[(2)] = inst_35585);

(statearr_35595_35622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (13))){
var inst_35578 = cljs.core.async.close_BANG_.call(null,out);
var state_35589__$1 = state_35589;
var statearr_35596_35623 = state_35589__$1;
(statearr_35596_35623[(2)] = inst_35578);

(statearr_35596_35623[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (6))){
var state_35589__$1 = state_35589;
var statearr_35597_35624 = state_35589__$1;
(statearr_35597_35624[(2)] = null);

(statearr_35597_35624[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (3))){
var inst_35587 = (state_35589[(2)]);
var state_35589__$1 = state_35589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35589__$1,inst_35587);
} else {
if((state_val_35590 === (12))){
var inst_35575 = (state_35589[(8)]);
var inst_35575__$1 = (state_35589[(2)]);
var inst_35576 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35575__$1);
var state_35589__$1 = (function (){var statearr_35598 = state_35589;
(statearr_35598[(8)] = inst_35575__$1);

return statearr_35598;
})();
if(cljs.core.truth_(inst_35576)){
var statearr_35599_35625 = state_35589__$1;
(statearr_35599_35625[(1)] = (13));

} else {
var statearr_35600_35626 = state_35589__$1;
(statearr_35600_35626[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (2))){
var inst_35552 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35553 = (0);
var state_35589__$1 = (function (){var statearr_35601 = state_35589;
(statearr_35601[(9)] = inst_35552);

(statearr_35601[(7)] = inst_35553);

return statearr_35601;
})();
var statearr_35602_35627 = state_35589__$1;
(statearr_35602_35627[(2)] = null);

(statearr_35602_35627[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (11))){
var inst_35553 = (state_35589[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35589,(10),Object,null,(9));
var inst_35562 = chs__$1.call(null,inst_35553);
var inst_35563 = done.call(null,inst_35553);
var inst_35564 = cljs.core.async.take_BANG_.call(null,inst_35562,inst_35563);
var state_35589__$1 = state_35589;
var statearr_35603_35628 = state_35589__$1;
(statearr_35603_35628[(2)] = inst_35564);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35589__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (9))){
var inst_35553 = (state_35589[(7)]);
var inst_35566 = (state_35589[(2)]);
var inst_35567 = (inst_35553 + (1));
var inst_35553__$1 = inst_35567;
var state_35589__$1 = (function (){var statearr_35604 = state_35589;
(statearr_35604[(10)] = inst_35566);

(statearr_35604[(7)] = inst_35553__$1);

return statearr_35604;
})();
var statearr_35605_35629 = state_35589__$1;
(statearr_35605_35629[(2)] = null);

(statearr_35605_35629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (5))){
var inst_35573 = (state_35589[(2)]);
var state_35589__$1 = (function (){var statearr_35606 = state_35589;
(statearr_35606[(11)] = inst_35573);

return statearr_35606;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35589__$1,(12),dchan);
} else {
if((state_val_35590 === (14))){
var inst_35575 = (state_35589[(8)]);
var inst_35580 = cljs.core.apply.call(null,f,inst_35575);
var state_35589__$1 = state_35589;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35589__$1,(16),out,inst_35580);
} else {
if((state_val_35590 === (16))){
var inst_35582 = (state_35589[(2)]);
var state_35589__$1 = (function (){var statearr_35607 = state_35589;
(statearr_35607[(12)] = inst_35582);

return statearr_35607;
})();
var statearr_35608_35630 = state_35589__$1;
(statearr_35608_35630[(2)] = null);

(statearr_35608_35630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (10))){
var inst_35557 = (state_35589[(2)]);
var inst_35558 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35589__$1 = (function (){var statearr_35609 = state_35589;
(statearr_35609[(13)] = inst_35557);

return statearr_35609;
})();
var statearr_35610_35631 = state_35589__$1;
(statearr_35610_35631[(2)] = inst_35558);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35589__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35590 === (8))){
var inst_35571 = (state_35589[(2)]);
var state_35589__$1 = state_35589;
var statearr_35611_35632 = state_35589__$1;
(statearr_35611_35632[(2)] = inst_35571);

(statearr_35611_35632[(1)] = (5));


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
});})(c__34292__auto___35617,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34204__auto__,c__34292__auto___35617,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34205__auto__ = null;
var cljs$core$async$state_machine__34205__auto____0 = (function (){
var statearr_35612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35612[(0)] = cljs$core$async$state_machine__34205__auto__);

(statearr_35612[(1)] = (1));

return statearr_35612;
});
var cljs$core$async$state_machine__34205__auto____1 = (function (state_35589){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_35589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e35613){if((e35613 instanceof Object)){
var ex__34208__auto__ = e35613;
var statearr_35614_35633 = state_35589;
(statearr_35614_35633[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35634 = state_35589;
state_35589 = G__35634;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$state_machine__34205__auto__ = function(state_35589){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34205__auto____1.call(this,state_35589);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34205__auto____0;
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34205__auto____1;
return cljs$core$async$state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___35617,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34294__auto__ = (function (){var statearr_35615 = f__34293__auto__.call(null);
(statearr_35615[(6)] = c__34292__auto___35617);

return statearr_35615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___35617,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__35637 = arguments.length;
switch (G__35637) {
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
var c__34292__auto___35691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___35691,out){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___35691,out){
return (function (state_35669){
var state_val_35670 = (state_35669[(1)]);
if((state_val_35670 === (7))){
var inst_35649 = (state_35669[(7)]);
var inst_35648 = (state_35669[(8)]);
var inst_35648__$1 = (state_35669[(2)]);
var inst_35649__$1 = cljs.core.nth.call(null,inst_35648__$1,(0),null);
var inst_35650 = cljs.core.nth.call(null,inst_35648__$1,(1),null);
var inst_35651 = (inst_35649__$1 == null);
var state_35669__$1 = (function (){var statearr_35671 = state_35669;
(statearr_35671[(9)] = inst_35650);

(statearr_35671[(7)] = inst_35649__$1);

(statearr_35671[(8)] = inst_35648__$1);

return statearr_35671;
})();
if(cljs.core.truth_(inst_35651)){
var statearr_35672_35692 = state_35669__$1;
(statearr_35672_35692[(1)] = (8));

} else {
var statearr_35673_35693 = state_35669__$1;
(statearr_35673_35693[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (1))){
var inst_35638 = cljs.core.vec.call(null,chs);
var inst_35639 = inst_35638;
var state_35669__$1 = (function (){var statearr_35674 = state_35669;
(statearr_35674[(10)] = inst_35639);

return statearr_35674;
})();
var statearr_35675_35694 = state_35669__$1;
(statearr_35675_35694[(2)] = null);

(statearr_35675_35694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (4))){
var inst_35639 = (state_35669[(10)]);
var state_35669__$1 = state_35669;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35669__$1,(7),inst_35639);
} else {
if((state_val_35670 === (6))){
var inst_35665 = (state_35669[(2)]);
var state_35669__$1 = state_35669;
var statearr_35676_35695 = state_35669__$1;
(statearr_35676_35695[(2)] = inst_35665);

(statearr_35676_35695[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (3))){
var inst_35667 = (state_35669[(2)]);
var state_35669__$1 = state_35669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35669__$1,inst_35667);
} else {
if((state_val_35670 === (2))){
var inst_35639 = (state_35669[(10)]);
var inst_35641 = cljs.core.count.call(null,inst_35639);
var inst_35642 = (inst_35641 > (0));
var state_35669__$1 = state_35669;
if(cljs.core.truth_(inst_35642)){
var statearr_35678_35696 = state_35669__$1;
(statearr_35678_35696[(1)] = (4));

} else {
var statearr_35679_35697 = state_35669__$1;
(statearr_35679_35697[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (11))){
var inst_35639 = (state_35669[(10)]);
var inst_35658 = (state_35669[(2)]);
var tmp35677 = inst_35639;
var inst_35639__$1 = tmp35677;
var state_35669__$1 = (function (){var statearr_35680 = state_35669;
(statearr_35680[(10)] = inst_35639__$1);

(statearr_35680[(11)] = inst_35658);

return statearr_35680;
})();
var statearr_35681_35698 = state_35669__$1;
(statearr_35681_35698[(2)] = null);

(statearr_35681_35698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (9))){
var inst_35649 = (state_35669[(7)]);
var state_35669__$1 = state_35669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35669__$1,(11),out,inst_35649);
} else {
if((state_val_35670 === (5))){
var inst_35663 = cljs.core.async.close_BANG_.call(null,out);
var state_35669__$1 = state_35669;
var statearr_35682_35699 = state_35669__$1;
(statearr_35682_35699[(2)] = inst_35663);

(statearr_35682_35699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (10))){
var inst_35661 = (state_35669[(2)]);
var state_35669__$1 = state_35669;
var statearr_35683_35700 = state_35669__$1;
(statearr_35683_35700[(2)] = inst_35661);

(statearr_35683_35700[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35670 === (8))){
var inst_35650 = (state_35669[(9)]);
var inst_35649 = (state_35669[(7)]);
var inst_35639 = (state_35669[(10)]);
var inst_35648 = (state_35669[(8)]);
var inst_35653 = (function (){var cs = inst_35639;
var vec__35644 = inst_35648;
var v = inst_35649;
var c = inst_35650;
return ((function (cs,vec__35644,v,c,inst_35650,inst_35649,inst_35639,inst_35648,state_val_35670,c__34292__auto___35691,out){
return (function (p1__35635_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35635_SHARP_);
});
;})(cs,vec__35644,v,c,inst_35650,inst_35649,inst_35639,inst_35648,state_val_35670,c__34292__auto___35691,out))
})();
var inst_35654 = cljs.core.filterv.call(null,inst_35653,inst_35639);
var inst_35639__$1 = inst_35654;
var state_35669__$1 = (function (){var statearr_35684 = state_35669;
(statearr_35684[(10)] = inst_35639__$1);

return statearr_35684;
})();
var statearr_35685_35701 = state_35669__$1;
(statearr_35685_35701[(2)] = null);

(statearr_35685_35701[(1)] = (2));


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
});})(c__34292__auto___35691,out))
;
return ((function (switch__34204__auto__,c__34292__auto___35691,out){
return (function() {
var cljs$core$async$state_machine__34205__auto__ = null;
var cljs$core$async$state_machine__34205__auto____0 = (function (){
var statearr_35686 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35686[(0)] = cljs$core$async$state_machine__34205__auto__);

(statearr_35686[(1)] = (1));

return statearr_35686;
});
var cljs$core$async$state_machine__34205__auto____1 = (function (state_35669){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_35669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e35687){if((e35687 instanceof Object)){
var ex__34208__auto__ = e35687;
var statearr_35688_35702 = state_35669;
(statearr_35688_35702[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35703 = state_35669;
state_35669 = G__35703;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$state_machine__34205__auto__ = function(state_35669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34205__auto____1.call(this,state_35669);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34205__auto____0;
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34205__auto____1;
return cljs$core$async$state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___35691,out))
})();
var state__34294__auto__ = (function (){var statearr_35689 = f__34293__auto__.call(null);
(statearr_35689[(6)] = c__34292__auto___35691);

return statearr_35689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___35691,out))
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
var G__35705 = arguments.length;
switch (G__35705) {
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
var c__34292__auto___35750 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___35750,out){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___35750,out){
return (function (state_35729){
var state_val_35730 = (state_35729[(1)]);
if((state_val_35730 === (7))){
var inst_35711 = (state_35729[(7)]);
var inst_35711__$1 = (state_35729[(2)]);
var inst_35712 = (inst_35711__$1 == null);
var inst_35713 = cljs.core.not.call(null,inst_35712);
var state_35729__$1 = (function (){var statearr_35731 = state_35729;
(statearr_35731[(7)] = inst_35711__$1);

return statearr_35731;
})();
if(inst_35713){
var statearr_35732_35751 = state_35729__$1;
(statearr_35732_35751[(1)] = (8));

} else {
var statearr_35733_35752 = state_35729__$1;
(statearr_35733_35752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35730 === (1))){
var inst_35706 = (0);
var state_35729__$1 = (function (){var statearr_35734 = state_35729;
(statearr_35734[(8)] = inst_35706);

return statearr_35734;
})();
var statearr_35735_35753 = state_35729__$1;
(statearr_35735_35753[(2)] = null);

(statearr_35735_35753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35730 === (4))){
var state_35729__$1 = state_35729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35729__$1,(7),ch);
} else {
if((state_val_35730 === (6))){
var inst_35724 = (state_35729[(2)]);
var state_35729__$1 = state_35729;
var statearr_35736_35754 = state_35729__$1;
(statearr_35736_35754[(2)] = inst_35724);

(statearr_35736_35754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35730 === (3))){
var inst_35726 = (state_35729[(2)]);
var inst_35727 = cljs.core.async.close_BANG_.call(null,out);
var state_35729__$1 = (function (){var statearr_35737 = state_35729;
(statearr_35737[(9)] = inst_35726);

return statearr_35737;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35729__$1,inst_35727);
} else {
if((state_val_35730 === (2))){
var inst_35706 = (state_35729[(8)]);
var inst_35708 = (inst_35706 < n);
var state_35729__$1 = state_35729;
if(cljs.core.truth_(inst_35708)){
var statearr_35738_35755 = state_35729__$1;
(statearr_35738_35755[(1)] = (4));

} else {
var statearr_35739_35756 = state_35729__$1;
(statearr_35739_35756[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35730 === (11))){
var inst_35706 = (state_35729[(8)]);
var inst_35716 = (state_35729[(2)]);
var inst_35717 = (inst_35706 + (1));
var inst_35706__$1 = inst_35717;
var state_35729__$1 = (function (){var statearr_35740 = state_35729;
(statearr_35740[(8)] = inst_35706__$1);

(statearr_35740[(10)] = inst_35716);

return statearr_35740;
})();
var statearr_35741_35757 = state_35729__$1;
(statearr_35741_35757[(2)] = null);

(statearr_35741_35757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35730 === (9))){
var state_35729__$1 = state_35729;
var statearr_35742_35758 = state_35729__$1;
(statearr_35742_35758[(2)] = null);

(statearr_35742_35758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35730 === (5))){
var state_35729__$1 = state_35729;
var statearr_35743_35759 = state_35729__$1;
(statearr_35743_35759[(2)] = null);

(statearr_35743_35759[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35730 === (10))){
var inst_35721 = (state_35729[(2)]);
var state_35729__$1 = state_35729;
var statearr_35744_35760 = state_35729__$1;
(statearr_35744_35760[(2)] = inst_35721);

(statearr_35744_35760[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35730 === (8))){
var inst_35711 = (state_35729[(7)]);
var state_35729__$1 = state_35729;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35729__$1,(11),out,inst_35711);
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
});})(c__34292__auto___35750,out))
;
return ((function (switch__34204__auto__,c__34292__auto___35750,out){
return (function() {
var cljs$core$async$state_machine__34205__auto__ = null;
var cljs$core$async$state_machine__34205__auto____0 = (function (){
var statearr_35745 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35745[(0)] = cljs$core$async$state_machine__34205__auto__);

(statearr_35745[(1)] = (1));

return statearr_35745;
});
var cljs$core$async$state_machine__34205__auto____1 = (function (state_35729){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_35729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e35746){if((e35746 instanceof Object)){
var ex__34208__auto__ = e35746;
var statearr_35747_35761 = state_35729;
(statearr_35747_35761[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35762 = state_35729;
state_35729 = G__35762;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$state_machine__34205__auto__ = function(state_35729){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34205__auto____1.call(this,state_35729);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34205__auto____0;
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34205__auto____1;
return cljs$core$async$state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___35750,out))
})();
var state__34294__auto__ = (function (){var statearr_35748 = f__34293__auto__.call(null);
(statearr_35748[(6)] = c__34292__auto___35750);

return statearr_35748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___35750,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35764 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35764 = (function (f,ch,meta35765){
this.f = f;
this.ch = ch;
this.meta35765 = meta35765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35766,meta35765__$1){
var self__ = this;
var _35766__$1 = this;
return (new cljs.core.async.t_cljs$core$async35764(self__.f,self__.ch,meta35765__$1));
});

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35766){
var self__ = this;
var _35766__$1 = this;
return self__.meta35765;
});

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35767 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35767 = (function (f,ch,meta35765,_,fn1,meta35768){
this.f = f;
this.ch = ch;
this.meta35765 = meta35765;
this._ = _;
this.fn1 = fn1;
this.meta35768 = meta35768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35769,meta35768__$1){
var self__ = this;
var _35769__$1 = this;
return (new cljs.core.async.t_cljs$core$async35767(self__.f,self__.ch,self__.meta35765,self__._,self__.fn1,meta35768__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35767.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35769){
var self__ = this;
var _35769__$1 = this;
return self__.meta35768;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35767.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35767.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35763_SHARP_){
return f1.call(null,(((p1__35763_SHARP_ == null))?null:self__.f.call(null,p1__35763_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35767.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35765","meta35765",-667014000,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35764","cljs.core.async/t_cljs$core$async35764",764759085,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35768","meta35768",-951341409,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35767.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35767";

cljs.core.async.t_cljs$core$async35767.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async35767");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35767 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35767(f__$1,ch__$1,meta35765__$1,___$2,fn1__$1,meta35768){
return (new cljs.core.async.t_cljs$core$async35767(f__$1,ch__$1,meta35765__$1,___$2,fn1__$1,meta35768));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35767(self__.f,self__.ch,self__.meta35765,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35764.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35765","meta35765",-667014000,null)], null);
});

cljs.core.async.t_cljs$core$async35764.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35764";

cljs.core.async.t_cljs$core$async35764.cljs$lang$ctorPrWriter = (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async35764");
});

cljs.core.async.__GT_t_cljs$core$async35764 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35764(f__$1,ch__$1,meta35765){
return (new cljs.core.async.t_cljs$core$async35764(f__$1,ch__$1,meta35765));
});

}

return (new cljs.core.async.t_cljs$core$async35764(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35770 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35770 = (function (f,ch,meta35771){
this.f = f;
this.ch = ch;
this.meta35771 = meta35771;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35772,meta35771__$1){
var self__ = this;
var _35772__$1 = this;
return (new cljs.core.async.t_cljs$core$async35770(self__.f,self__.ch,meta35771__$1));
});

cljs.core.async.t_cljs$core$async35770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35772){
var self__ = this;
var _35772__$1 = this;
return self__.meta35771;
});

cljs.core.async.t_cljs$core$async35770.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35770.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35770.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35770.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35770.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35770.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35770.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35771","meta35771",182953560,null)], null);
});

cljs.core.async.t_cljs$core$async35770.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35770.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35770";

cljs.core.async.t_cljs$core$async35770.cljs$lang$ctorPrWriter = (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async35770");
});

cljs.core.async.__GT_t_cljs$core$async35770 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35770(f__$1,ch__$1,meta35771){
return (new cljs.core.async.t_cljs$core$async35770(f__$1,ch__$1,meta35771));
});

}

return (new cljs.core.async.t_cljs$core$async35770(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35773 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35773 = (function (p,ch,meta35774){
this.p = p;
this.ch = ch;
this.meta35774 = meta35774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35775,meta35774__$1){
var self__ = this;
var _35775__$1 = this;
return (new cljs.core.async.t_cljs$core$async35773(self__.p,self__.ch,meta35774__$1));
});

cljs.core.async.t_cljs$core$async35773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35775){
var self__ = this;
var _35775__$1 = this;
return self__.meta35774;
});

cljs.core.async.t_cljs$core$async35773.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35773.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35773.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35773.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35773.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35773.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35773.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35774","meta35774",-1897052822,null)], null);
});

cljs.core.async.t_cljs$core$async35773.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35773";

cljs.core.async.t_cljs$core$async35773.cljs$lang$ctorPrWriter = (function (this__29057__auto__,writer__29058__auto__,opt__29059__auto__){
return cljs.core._write.call(null,writer__29058__auto__,"cljs.core.async/t_cljs$core$async35773");
});

cljs.core.async.__GT_t_cljs$core$async35773 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35773(p__$1,ch__$1,meta35774){
return (new cljs.core.async.t_cljs$core$async35773(p__$1,ch__$1,meta35774));
});

}

return (new cljs.core.async.t_cljs$core$async35773(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__35777 = arguments.length;
switch (G__35777) {
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
var c__34292__auto___35817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___35817,out){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___35817,out){
return (function (state_35798){
var state_val_35799 = (state_35798[(1)]);
if((state_val_35799 === (7))){
var inst_35794 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
var statearr_35800_35818 = state_35798__$1;
(statearr_35800_35818[(2)] = inst_35794);

(statearr_35800_35818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (1))){
var state_35798__$1 = state_35798;
var statearr_35801_35819 = state_35798__$1;
(statearr_35801_35819[(2)] = null);

(statearr_35801_35819[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (4))){
var inst_35780 = (state_35798[(7)]);
var inst_35780__$1 = (state_35798[(2)]);
var inst_35781 = (inst_35780__$1 == null);
var state_35798__$1 = (function (){var statearr_35802 = state_35798;
(statearr_35802[(7)] = inst_35780__$1);

return statearr_35802;
})();
if(cljs.core.truth_(inst_35781)){
var statearr_35803_35820 = state_35798__$1;
(statearr_35803_35820[(1)] = (5));

} else {
var statearr_35804_35821 = state_35798__$1;
(statearr_35804_35821[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (6))){
var inst_35780 = (state_35798[(7)]);
var inst_35785 = p.call(null,inst_35780);
var state_35798__$1 = state_35798;
if(cljs.core.truth_(inst_35785)){
var statearr_35805_35822 = state_35798__$1;
(statearr_35805_35822[(1)] = (8));

} else {
var statearr_35806_35823 = state_35798__$1;
(statearr_35806_35823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (3))){
var inst_35796 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35798__$1,inst_35796);
} else {
if((state_val_35799 === (2))){
var state_35798__$1 = state_35798;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35798__$1,(4),ch);
} else {
if((state_val_35799 === (11))){
var inst_35788 = (state_35798[(2)]);
var state_35798__$1 = state_35798;
var statearr_35807_35824 = state_35798__$1;
(statearr_35807_35824[(2)] = inst_35788);

(statearr_35807_35824[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (9))){
var state_35798__$1 = state_35798;
var statearr_35808_35825 = state_35798__$1;
(statearr_35808_35825[(2)] = null);

(statearr_35808_35825[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (5))){
var inst_35783 = cljs.core.async.close_BANG_.call(null,out);
var state_35798__$1 = state_35798;
var statearr_35809_35826 = state_35798__$1;
(statearr_35809_35826[(2)] = inst_35783);

(statearr_35809_35826[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (10))){
var inst_35791 = (state_35798[(2)]);
var state_35798__$1 = (function (){var statearr_35810 = state_35798;
(statearr_35810[(8)] = inst_35791);

return statearr_35810;
})();
var statearr_35811_35827 = state_35798__$1;
(statearr_35811_35827[(2)] = null);

(statearr_35811_35827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35799 === (8))){
var inst_35780 = (state_35798[(7)]);
var state_35798__$1 = state_35798;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35798__$1,(11),out,inst_35780);
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
});})(c__34292__auto___35817,out))
;
return ((function (switch__34204__auto__,c__34292__auto___35817,out){
return (function() {
var cljs$core$async$state_machine__34205__auto__ = null;
var cljs$core$async$state_machine__34205__auto____0 = (function (){
var statearr_35812 = [null,null,null,null,null,null,null,null,null];
(statearr_35812[(0)] = cljs$core$async$state_machine__34205__auto__);

(statearr_35812[(1)] = (1));

return statearr_35812;
});
var cljs$core$async$state_machine__34205__auto____1 = (function (state_35798){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_35798);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e35813){if((e35813 instanceof Object)){
var ex__34208__auto__ = e35813;
var statearr_35814_35828 = state_35798;
(statearr_35814_35828[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35798);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35813;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35829 = state_35798;
state_35798 = G__35829;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$state_machine__34205__auto__ = function(state_35798){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34205__auto____1.call(this,state_35798);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34205__auto____0;
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34205__auto____1;
return cljs$core$async$state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___35817,out))
})();
var state__34294__auto__ = (function (){var statearr_35815 = f__34293__auto__.call(null);
(statearr_35815[(6)] = c__34292__auto___35817);

return statearr_35815;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___35817,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35831 = arguments.length;
switch (G__35831) {
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
var c__34292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto__){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto__){
return (function (state_35894){
var state_val_35895 = (state_35894[(1)]);
if((state_val_35895 === (7))){
var inst_35890 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
var statearr_35896_35934 = state_35894__$1;
(statearr_35896_35934[(2)] = inst_35890);

(statearr_35896_35934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (20))){
var inst_35860 = (state_35894[(7)]);
var inst_35871 = (state_35894[(2)]);
var inst_35872 = cljs.core.next.call(null,inst_35860);
var inst_35846 = inst_35872;
var inst_35847 = null;
var inst_35848 = (0);
var inst_35849 = (0);
var state_35894__$1 = (function (){var statearr_35897 = state_35894;
(statearr_35897[(8)] = inst_35847);

(statearr_35897[(9)] = inst_35846);

(statearr_35897[(10)] = inst_35871);

(statearr_35897[(11)] = inst_35849);

(statearr_35897[(12)] = inst_35848);

return statearr_35897;
})();
var statearr_35898_35935 = state_35894__$1;
(statearr_35898_35935[(2)] = null);

(statearr_35898_35935[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (1))){
var state_35894__$1 = state_35894;
var statearr_35899_35936 = state_35894__$1;
(statearr_35899_35936[(2)] = null);

(statearr_35899_35936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (4))){
var inst_35835 = (state_35894[(13)]);
var inst_35835__$1 = (state_35894[(2)]);
var inst_35836 = (inst_35835__$1 == null);
var state_35894__$1 = (function (){var statearr_35900 = state_35894;
(statearr_35900[(13)] = inst_35835__$1);

return statearr_35900;
})();
if(cljs.core.truth_(inst_35836)){
var statearr_35901_35937 = state_35894__$1;
(statearr_35901_35937[(1)] = (5));

} else {
var statearr_35902_35938 = state_35894__$1;
(statearr_35902_35938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (15))){
var state_35894__$1 = state_35894;
var statearr_35906_35939 = state_35894__$1;
(statearr_35906_35939[(2)] = null);

(statearr_35906_35939[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (21))){
var state_35894__$1 = state_35894;
var statearr_35907_35940 = state_35894__$1;
(statearr_35907_35940[(2)] = null);

(statearr_35907_35940[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (13))){
var inst_35847 = (state_35894[(8)]);
var inst_35846 = (state_35894[(9)]);
var inst_35849 = (state_35894[(11)]);
var inst_35848 = (state_35894[(12)]);
var inst_35856 = (state_35894[(2)]);
var inst_35857 = (inst_35849 + (1));
var tmp35903 = inst_35847;
var tmp35904 = inst_35846;
var tmp35905 = inst_35848;
var inst_35846__$1 = tmp35904;
var inst_35847__$1 = tmp35903;
var inst_35848__$1 = tmp35905;
var inst_35849__$1 = inst_35857;
var state_35894__$1 = (function (){var statearr_35908 = state_35894;
(statearr_35908[(14)] = inst_35856);

(statearr_35908[(8)] = inst_35847__$1);

(statearr_35908[(9)] = inst_35846__$1);

(statearr_35908[(11)] = inst_35849__$1);

(statearr_35908[(12)] = inst_35848__$1);

return statearr_35908;
})();
var statearr_35909_35941 = state_35894__$1;
(statearr_35909_35941[(2)] = null);

(statearr_35909_35941[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (22))){
var state_35894__$1 = state_35894;
var statearr_35910_35942 = state_35894__$1;
(statearr_35910_35942[(2)] = null);

(statearr_35910_35942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (6))){
var inst_35835 = (state_35894[(13)]);
var inst_35844 = f.call(null,inst_35835);
var inst_35845 = cljs.core.seq.call(null,inst_35844);
var inst_35846 = inst_35845;
var inst_35847 = null;
var inst_35848 = (0);
var inst_35849 = (0);
var state_35894__$1 = (function (){var statearr_35911 = state_35894;
(statearr_35911[(8)] = inst_35847);

(statearr_35911[(9)] = inst_35846);

(statearr_35911[(11)] = inst_35849);

(statearr_35911[(12)] = inst_35848);

return statearr_35911;
})();
var statearr_35912_35943 = state_35894__$1;
(statearr_35912_35943[(2)] = null);

(statearr_35912_35943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (17))){
var inst_35860 = (state_35894[(7)]);
var inst_35864 = cljs.core.chunk_first.call(null,inst_35860);
var inst_35865 = cljs.core.chunk_rest.call(null,inst_35860);
var inst_35866 = cljs.core.count.call(null,inst_35864);
var inst_35846 = inst_35865;
var inst_35847 = inst_35864;
var inst_35848 = inst_35866;
var inst_35849 = (0);
var state_35894__$1 = (function (){var statearr_35913 = state_35894;
(statearr_35913[(8)] = inst_35847);

(statearr_35913[(9)] = inst_35846);

(statearr_35913[(11)] = inst_35849);

(statearr_35913[(12)] = inst_35848);

return statearr_35913;
})();
var statearr_35914_35944 = state_35894__$1;
(statearr_35914_35944[(2)] = null);

(statearr_35914_35944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (3))){
var inst_35892 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35894__$1,inst_35892);
} else {
if((state_val_35895 === (12))){
var inst_35880 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
var statearr_35915_35945 = state_35894__$1;
(statearr_35915_35945[(2)] = inst_35880);

(statearr_35915_35945[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (2))){
var state_35894__$1 = state_35894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35894__$1,(4),in$);
} else {
if((state_val_35895 === (23))){
var inst_35888 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
var statearr_35916_35946 = state_35894__$1;
(statearr_35916_35946[(2)] = inst_35888);

(statearr_35916_35946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (19))){
var inst_35875 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
var statearr_35917_35947 = state_35894__$1;
(statearr_35917_35947[(2)] = inst_35875);

(statearr_35917_35947[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (11))){
var inst_35860 = (state_35894[(7)]);
var inst_35846 = (state_35894[(9)]);
var inst_35860__$1 = cljs.core.seq.call(null,inst_35846);
var state_35894__$1 = (function (){var statearr_35918 = state_35894;
(statearr_35918[(7)] = inst_35860__$1);

return statearr_35918;
})();
if(inst_35860__$1){
var statearr_35919_35948 = state_35894__$1;
(statearr_35919_35948[(1)] = (14));

} else {
var statearr_35920_35949 = state_35894__$1;
(statearr_35920_35949[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (9))){
var inst_35882 = (state_35894[(2)]);
var inst_35883 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35894__$1 = (function (){var statearr_35921 = state_35894;
(statearr_35921[(15)] = inst_35882);

return statearr_35921;
})();
if(cljs.core.truth_(inst_35883)){
var statearr_35922_35950 = state_35894__$1;
(statearr_35922_35950[(1)] = (21));

} else {
var statearr_35923_35951 = state_35894__$1;
(statearr_35923_35951[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (5))){
var inst_35838 = cljs.core.async.close_BANG_.call(null,out);
var state_35894__$1 = state_35894;
var statearr_35924_35952 = state_35894__$1;
(statearr_35924_35952[(2)] = inst_35838);

(statearr_35924_35952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (14))){
var inst_35860 = (state_35894[(7)]);
var inst_35862 = cljs.core.chunked_seq_QMARK_.call(null,inst_35860);
var state_35894__$1 = state_35894;
if(inst_35862){
var statearr_35925_35953 = state_35894__$1;
(statearr_35925_35953[(1)] = (17));

} else {
var statearr_35926_35954 = state_35894__$1;
(statearr_35926_35954[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (16))){
var inst_35878 = (state_35894[(2)]);
var state_35894__$1 = state_35894;
var statearr_35927_35955 = state_35894__$1;
(statearr_35927_35955[(2)] = inst_35878);

(statearr_35927_35955[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35895 === (10))){
var inst_35847 = (state_35894[(8)]);
var inst_35849 = (state_35894[(11)]);
var inst_35854 = cljs.core._nth.call(null,inst_35847,inst_35849);
var state_35894__$1 = state_35894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35894__$1,(13),out,inst_35854);
} else {
if((state_val_35895 === (18))){
var inst_35860 = (state_35894[(7)]);
var inst_35869 = cljs.core.first.call(null,inst_35860);
var state_35894__$1 = state_35894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35894__$1,(20),out,inst_35869);
} else {
if((state_val_35895 === (8))){
var inst_35849 = (state_35894[(11)]);
var inst_35848 = (state_35894[(12)]);
var inst_35851 = (inst_35849 < inst_35848);
var inst_35852 = inst_35851;
var state_35894__$1 = state_35894;
if(cljs.core.truth_(inst_35852)){
var statearr_35928_35956 = state_35894__$1;
(statearr_35928_35956[(1)] = (10));

} else {
var statearr_35929_35957 = state_35894__$1;
(statearr_35929_35957[(1)] = (11));

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
});})(c__34292__auto__))
;
return ((function (switch__34204__auto__,c__34292__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34205__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34205__auto____0 = (function (){
var statearr_35930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35930[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34205__auto__);

(statearr_35930[(1)] = (1));

return statearr_35930;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34205__auto____1 = (function (state_35894){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_35894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e35931){if((e35931 instanceof Object)){
var ex__34208__auto__ = e35931;
var statearr_35932_35958 = state_35894;
(statearr_35932_35958[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35959 = state_35894;
state_35894 = G__35959;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34205__auto__ = function(state_35894){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34205__auto____1.call(this,state_35894);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34205__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34205__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto__))
})();
var state__34294__auto__ = (function (){var statearr_35933 = f__34293__auto__.call(null);
(statearr_35933[(6)] = c__34292__auto__);

return statearr_35933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto__))
);

return c__34292__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35961 = arguments.length;
switch (G__35961) {
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
var G__35964 = arguments.length;
switch (G__35964) {
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
var G__35967 = arguments.length;
switch (G__35967) {
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
var c__34292__auto___36014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___36014,out){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___36014,out){
return (function (state_35991){
var state_val_35992 = (state_35991[(1)]);
if((state_val_35992 === (7))){
var inst_35986 = (state_35991[(2)]);
var state_35991__$1 = state_35991;
var statearr_35993_36015 = state_35991__$1;
(statearr_35993_36015[(2)] = inst_35986);

(statearr_35993_36015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (1))){
var inst_35968 = null;
var state_35991__$1 = (function (){var statearr_35994 = state_35991;
(statearr_35994[(7)] = inst_35968);

return statearr_35994;
})();
var statearr_35995_36016 = state_35991__$1;
(statearr_35995_36016[(2)] = null);

(statearr_35995_36016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (4))){
var inst_35971 = (state_35991[(8)]);
var inst_35971__$1 = (state_35991[(2)]);
var inst_35972 = (inst_35971__$1 == null);
var inst_35973 = cljs.core.not.call(null,inst_35972);
var state_35991__$1 = (function (){var statearr_35996 = state_35991;
(statearr_35996[(8)] = inst_35971__$1);

return statearr_35996;
})();
if(inst_35973){
var statearr_35997_36017 = state_35991__$1;
(statearr_35997_36017[(1)] = (5));

} else {
var statearr_35998_36018 = state_35991__$1;
(statearr_35998_36018[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (6))){
var state_35991__$1 = state_35991;
var statearr_35999_36019 = state_35991__$1;
(statearr_35999_36019[(2)] = null);

(statearr_35999_36019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (3))){
var inst_35988 = (state_35991[(2)]);
var inst_35989 = cljs.core.async.close_BANG_.call(null,out);
var state_35991__$1 = (function (){var statearr_36000 = state_35991;
(statearr_36000[(9)] = inst_35988);

return statearr_36000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35991__$1,inst_35989);
} else {
if((state_val_35992 === (2))){
var state_35991__$1 = state_35991;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35991__$1,(4),ch);
} else {
if((state_val_35992 === (11))){
var inst_35971 = (state_35991[(8)]);
var inst_35980 = (state_35991[(2)]);
var inst_35968 = inst_35971;
var state_35991__$1 = (function (){var statearr_36001 = state_35991;
(statearr_36001[(10)] = inst_35980);

(statearr_36001[(7)] = inst_35968);

return statearr_36001;
})();
var statearr_36002_36020 = state_35991__$1;
(statearr_36002_36020[(2)] = null);

(statearr_36002_36020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (9))){
var inst_35971 = (state_35991[(8)]);
var state_35991__$1 = state_35991;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35991__$1,(11),out,inst_35971);
} else {
if((state_val_35992 === (5))){
var inst_35968 = (state_35991[(7)]);
var inst_35971 = (state_35991[(8)]);
var inst_35975 = cljs.core._EQ_.call(null,inst_35971,inst_35968);
var state_35991__$1 = state_35991;
if(inst_35975){
var statearr_36004_36021 = state_35991__$1;
(statearr_36004_36021[(1)] = (8));

} else {
var statearr_36005_36022 = state_35991__$1;
(statearr_36005_36022[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (10))){
var inst_35983 = (state_35991[(2)]);
var state_35991__$1 = state_35991;
var statearr_36006_36023 = state_35991__$1;
(statearr_36006_36023[(2)] = inst_35983);

(statearr_36006_36023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35992 === (8))){
var inst_35968 = (state_35991[(7)]);
var tmp36003 = inst_35968;
var inst_35968__$1 = tmp36003;
var state_35991__$1 = (function (){var statearr_36007 = state_35991;
(statearr_36007[(7)] = inst_35968__$1);

return statearr_36007;
})();
var statearr_36008_36024 = state_35991__$1;
(statearr_36008_36024[(2)] = null);

(statearr_36008_36024[(1)] = (2));


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
});})(c__34292__auto___36014,out))
;
return ((function (switch__34204__auto__,c__34292__auto___36014,out){
return (function() {
var cljs$core$async$state_machine__34205__auto__ = null;
var cljs$core$async$state_machine__34205__auto____0 = (function (){
var statearr_36009 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36009[(0)] = cljs$core$async$state_machine__34205__auto__);

(statearr_36009[(1)] = (1));

return statearr_36009;
});
var cljs$core$async$state_machine__34205__auto____1 = (function (state_35991){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_35991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e36010){if((e36010 instanceof Object)){
var ex__34208__auto__ = e36010;
var statearr_36011_36025 = state_35991;
(statearr_36011_36025[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36010;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36026 = state_35991;
state_35991 = G__36026;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$state_machine__34205__auto__ = function(state_35991){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34205__auto____1.call(this,state_35991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34205__auto____0;
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34205__auto____1;
return cljs$core$async$state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___36014,out))
})();
var state__34294__auto__ = (function (){var statearr_36012 = f__34293__auto__.call(null);
(statearr_36012[(6)] = c__34292__auto___36014);

return statearr_36012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___36014,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__36028 = arguments.length;
switch (G__36028) {
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
var c__34292__auto___36094 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___36094,out){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___36094,out){
return (function (state_36066){
var state_val_36067 = (state_36066[(1)]);
if((state_val_36067 === (7))){
var inst_36062 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
var statearr_36068_36095 = state_36066__$1;
(statearr_36068_36095[(2)] = inst_36062);

(statearr_36068_36095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (1))){
var inst_36029 = (new Array(n));
var inst_36030 = inst_36029;
var inst_36031 = (0);
var state_36066__$1 = (function (){var statearr_36069 = state_36066;
(statearr_36069[(7)] = inst_36031);

(statearr_36069[(8)] = inst_36030);

return statearr_36069;
})();
var statearr_36070_36096 = state_36066__$1;
(statearr_36070_36096[(2)] = null);

(statearr_36070_36096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (4))){
var inst_36034 = (state_36066[(9)]);
var inst_36034__$1 = (state_36066[(2)]);
var inst_36035 = (inst_36034__$1 == null);
var inst_36036 = cljs.core.not.call(null,inst_36035);
var state_36066__$1 = (function (){var statearr_36071 = state_36066;
(statearr_36071[(9)] = inst_36034__$1);

return statearr_36071;
})();
if(inst_36036){
var statearr_36072_36097 = state_36066__$1;
(statearr_36072_36097[(1)] = (5));

} else {
var statearr_36073_36098 = state_36066__$1;
(statearr_36073_36098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (15))){
var inst_36056 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
var statearr_36074_36099 = state_36066__$1;
(statearr_36074_36099[(2)] = inst_36056);

(statearr_36074_36099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (13))){
var state_36066__$1 = state_36066;
var statearr_36075_36100 = state_36066__$1;
(statearr_36075_36100[(2)] = null);

(statearr_36075_36100[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (6))){
var inst_36031 = (state_36066[(7)]);
var inst_36052 = (inst_36031 > (0));
var state_36066__$1 = state_36066;
if(cljs.core.truth_(inst_36052)){
var statearr_36076_36101 = state_36066__$1;
(statearr_36076_36101[(1)] = (12));

} else {
var statearr_36077_36102 = state_36066__$1;
(statearr_36077_36102[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (3))){
var inst_36064 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36066__$1,inst_36064);
} else {
if((state_val_36067 === (12))){
var inst_36030 = (state_36066[(8)]);
var inst_36054 = cljs.core.vec.call(null,inst_36030);
var state_36066__$1 = state_36066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36066__$1,(15),out,inst_36054);
} else {
if((state_val_36067 === (2))){
var state_36066__$1 = state_36066;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36066__$1,(4),ch);
} else {
if((state_val_36067 === (11))){
var inst_36046 = (state_36066[(2)]);
var inst_36047 = (new Array(n));
var inst_36030 = inst_36047;
var inst_36031 = (0);
var state_36066__$1 = (function (){var statearr_36078 = state_36066;
(statearr_36078[(10)] = inst_36046);

(statearr_36078[(7)] = inst_36031);

(statearr_36078[(8)] = inst_36030);

return statearr_36078;
})();
var statearr_36079_36103 = state_36066__$1;
(statearr_36079_36103[(2)] = null);

(statearr_36079_36103[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (9))){
var inst_36030 = (state_36066[(8)]);
var inst_36044 = cljs.core.vec.call(null,inst_36030);
var state_36066__$1 = state_36066;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36066__$1,(11),out,inst_36044);
} else {
if((state_val_36067 === (5))){
var inst_36034 = (state_36066[(9)]);
var inst_36031 = (state_36066[(7)]);
var inst_36039 = (state_36066[(11)]);
var inst_36030 = (state_36066[(8)]);
var inst_36038 = (inst_36030[inst_36031] = inst_36034);
var inst_36039__$1 = (inst_36031 + (1));
var inst_36040 = (inst_36039__$1 < n);
var state_36066__$1 = (function (){var statearr_36080 = state_36066;
(statearr_36080[(11)] = inst_36039__$1);

(statearr_36080[(12)] = inst_36038);

return statearr_36080;
})();
if(cljs.core.truth_(inst_36040)){
var statearr_36081_36104 = state_36066__$1;
(statearr_36081_36104[(1)] = (8));

} else {
var statearr_36082_36105 = state_36066__$1;
(statearr_36082_36105[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (14))){
var inst_36059 = (state_36066[(2)]);
var inst_36060 = cljs.core.async.close_BANG_.call(null,out);
var state_36066__$1 = (function (){var statearr_36084 = state_36066;
(statearr_36084[(13)] = inst_36059);

return statearr_36084;
})();
var statearr_36085_36106 = state_36066__$1;
(statearr_36085_36106[(2)] = inst_36060);

(statearr_36085_36106[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (10))){
var inst_36050 = (state_36066[(2)]);
var state_36066__$1 = state_36066;
var statearr_36086_36107 = state_36066__$1;
(statearr_36086_36107[(2)] = inst_36050);

(statearr_36086_36107[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36067 === (8))){
var inst_36039 = (state_36066[(11)]);
var inst_36030 = (state_36066[(8)]);
var tmp36083 = inst_36030;
var inst_36030__$1 = tmp36083;
var inst_36031 = inst_36039;
var state_36066__$1 = (function (){var statearr_36087 = state_36066;
(statearr_36087[(7)] = inst_36031);

(statearr_36087[(8)] = inst_36030__$1);

return statearr_36087;
})();
var statearr_36088_36108 = state_36066__$1;
(statearr_36088_36108[(2)] = null);

(statearr_36088_36108[(1)] = (2));


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
});})(c__34292__auto___36094,out))
;
return ((function (switch__34204__auto__,c__34292__auto___36094,out){
return (function() {
var cljs$core$async$state_machine__34205__auto__ = null;
var cljs$core$async$state_machine__34205__auto____0 = (function (){
var statearr_36089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36089[(0)] = cljs$core$async$state_machine__34205__auto__);

(statearr_36089[(1)] = (1));

return statearr_36089;
});
var cljs$core$async$state_machine__34205__auto____1 = (function (state_36066){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_36066);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e36090){if((e36090 instanceof Object)){
var ex__34208__auto__ = e36090;
var statearr_36091_36109 = state_36066;
(statearr_36091_36109[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36066);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36090;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36110 = state_36066;
state_36066 = G__36110;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$state_machine__34205__auto__ = function(state_36066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34205__auto____1.call(this,state_36066);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34205__auto____0;
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34205__auto____1;
return cljs$core$async$state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___36094,out))
})();
var state__34294__auto__ = (function (){var statearr_36092 = f__34293__auto__.call(null);
(statearr_36092[(6)] = c__34292__auto___36094);

return statearr_36092;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___36094,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36112 = arguments.length;
switch (G__36112) {
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
var c__34292__auto___36182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___36182,out){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___36182,out){
return (function (state_36154){
var state_val_36155 = (state_36154[(1)]);
if((state_val_36155 === (7))){
var inst_36150 = (state_36154[(2)]);
var state_36154__$1 = state_36154;
var statearr_36156_36183 = state_36154__$1;
(statearr_36156_36183[(2)] = inst_36150);

(statearr_36156_36183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36155 === (1))){
var inst_36113 = [];
var inst_36114 = inst_36113;
var inst_36115 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36154__$1 = (function (){var statearr_36157 = state_36154;
(statearr_36157[(7)] = inst_36114);

(statearr_36157[(8)] = inst_36115);

return statearr_36157;
})();
var statearr_36158_36184 = state_36154__$1;
(statearr_36158_36184[(2)] = null);

(statearr_36158_36184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36155 === (4))){
var inst_36118 = (state_36154[(9)]);
var inst_36118__$1 = (state_36154[(2)]);
var inst_36119 = (inst_36118__$1 == null);
var inst_36120 = cljs.core.not.call(null,inst_36119);
var state_36154__$1 = (function (){var statearr_36159 = state_36154;
(statearr_36159[(9)] = inst_36118__$1);

return statearr_36159;
})();
if(inst_36120){
var statearr_36160_36185 = state_36154__$1;
(statearr_36160_36185[(1)] = (5));

} else {
var statearr_36161_36186 = state_36154__$1;
(statearr_36161_36186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36155 === (15))){
var inst_36144 = (state_36154[(2)]);
var state_36154__$1 = state_36154;
var statearr_36162_36187 = state_36154__$1;
(statearr_36162_36187[(2)] = inst_36144);

(statearr_36162_36187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36155 === (13))){
var state_36154__$1 = state_36154;
var statearr_36163_36188 = state_36154__$1;
(statearr_36163_36188[(2)] = null);

(statearr_36163_36188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36155 === (6))){
var inst_36114 = (state_36154[(7)]);
var inst_36139 = inst_36114.length;
var inst_36140 = (inst_36139 > (0));
var state_36154__$1 = state_36154;
if(cljs.core.truth_(inst_36140)){
var statearr_36164_36189 = state_36154__$1;
(statearr_36164_36189[(1)] = (12));

} else {
var statearr_36165_36190 = state_36154__$1;
(statearr_36165_36190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36155 === (3))){
var inst_36152 = (state_36154[(2)]);
var state_36154__$1 = state_36154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36154__$1,inst_36152);
} else {
if((state_val_36155 === (12))){
var inst_36114 = (state_36154[(7)]);
var inst_36142 = cljs.core.vec.call(null,inst_36114);
var state_36154__$1 = state_36154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36154__$1,(15),out,inst_36142);
} else {
if((state_val_36155 === (2))){
var state_36154__$1 = state_36154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36154__$1,(4),ch);
} else {
if((state_val_36155 === (11))){
var inst_36122 = (state_36154[(10)]);
var inst_36118 = (state_36154[(9)]);
var inst_36132 = (state_36154[(2)]);
var inst_36133 = [];
var inst_36134 = inst_36133.push(inst_36118);
var inst_36114 = inst_36133;
var inst_36115 = inst_36122;
var state_36154__$1 = (function (){var statearr_36166 = state_36154;
(statearr_36166[(7)] = inst_36114);

(statearr_36166[(11)] = inst_36132);

(statearr_36166[(8)] = inst_36115);

(statearr_36166[(12)] = inst_36134);

return statearr_36166;
})();
var statearr_36167_36191 = state_36154__$1;
(statearr_36167_36191[(2)] = null);

(statearr_36167_36191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36155 === (9))){
var inst_36114 = (state_36154[(7)]);
var inst_36130 = cljs.core.vec.call(null,inst_36114);
var state_36154__$1 = state_36154;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36154__$1,(11),out,inst_36130);
} else {
if((state_val_36155 === (5))){
var inst_36122 = (state_36154[(10)]);
var inst_36115 = (state_36154[(8)]);
var inst_36118 = (state_36154[(9)]);
var inst_36122__$1 = f.call(null,inst_36118);
var inst_36123 = cljs.core._EQ_.call(null,inst_36122__$1,inst_36115);
var inst_36124 = cljs.core.keyword_identical_QMARK_.call(null,inst_36115,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36125 = (inst_36123) || (inst_36124);
var state_36154__$1 = (function (){var statearr_36168 = state_36154;
(statearr_36168[(10)] = inst_36122__$1);

return statearr_36168;
})();
if(cljs.core.truth_(inst_36125)){
var statearr_36169_36192 = state_36154__$1;
(statearr_36169_36192[(1)] = (8));

} else {
var statearr_36170_36193 = state_36154__$1;
(statearr_36170_36193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36155 === (14))){
var inst_36147 = (state_36154[(2)]);
var inst_36148 = cljs.core.async.close_BANG_.call(null,out);
var state_36154__$1 = (function (){var statearr_36172 = state_36154;
(statearr_36172[(13)] = inst_36147);

return statearr_36172;
})();
var statearr_36173_36194 = state_36154__$1;
(statearr_36173_36194[(2)] = inst_36148);

(statearr_36173_36194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36155 === (10))){
var inst_36137 = (state_36154[(2)]);
var state_36154__$1 = state_36154;
var statearr_36174_36195 = state_36154__$1;
(statearr_36174_36195[(2)] = inst_36137);

(statearr_36174_36195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36155 === (8))){
var inst_36122 = (state_36154[(10)]);
var inst_36114 = (state_36154[(7)]);
var inst_36118 = (state_36154[(9)]);
var inst_36127 = inst_36114.push(inst_36118);
var tmp36171 = inst_36114;
var inst_36114__$1 = tmp36171;
var inst_36115 = inst_36122;
var state_36154__$1 = (function (){var statearr_36175 = state_36154;
(statearr_36175[(7)] = inst_36114__$1);

(statearr_36175[(8)] = inst_36115);

(statearr_36175[(14)] = inst_36127);

return statearr_36175;
})();
var statearr_36176_36196 = state_36154__$1;
(statearr_36176_36196[(2)] = null);

(statearr_36176_36196[(1)] = (2));


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
});})(c__34292__auto___36182,out))
;
return ((function (switch__34204__auto__,c__34292__auto___36182,out){
return (function() {
var cljs$core$async$state_machine__34205__auto__ = null;
var cljs$core$async$state_machine__34205__auto____0 = (function (){
var statearr_36177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36177[(0)] = cljs$core$async$state_machine__34205__auto__);

(statearr_36177[(1)] = (1));

return statearr_36177;
});
var cljs$core$async$state_machine__34205__auto____1 = (function (state_36154){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_36154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e36178){if((e36178 instanceof Object)){
var ex__34208__auto__ = e36178;
var statearr_36179_36197 = state_36154;
(statearr_36179_36197[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36198 = state_36154;
state_36154 = G__36198;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
cljs$core$async$state_machine__34205__auto__ = function(state_36154){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34205__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34205__auto____1.call(this,state_36154);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34205__auto____0;
cljs$core$async$state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34205__auto____1;
return cljs$core$async$state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___36182,out))
})();
var state__34294__auto__ = (function (){var statearr_36180 = f__34293__auto__.call(null);
(statearr_36180[(6)] = c__34292__auto___36182);

return statearr_36180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___36182,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1573832700623
