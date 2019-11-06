// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38377){if((e38377 instanceof Error)){
var e = e38377;
return "Error: Unable to stringify";
} else {
throw e38377;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38380 = arguments.length;
switch (G__38380) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38378_SHARP_){
if(typeof p1__38378_SHARP_ === 'string'){
return p1__38378_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38378_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38383 = arguments.length;
var i__29602__auto___38384 = (0);
while(true){
if((i__29602__auto___38384 < len__29601__auto___38383)){
args__29608__auto__.push((arguments[i__29602__auto___38384]));

var G__38385 = (i__29602__auto___38384 + (1));
i__29602__auto___38384 = G__38385;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38382){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38382));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38387 = arguments.length;
var i__29602__auto___38388 = (0);
while(true){
if((i__29602__auto___38388 < len__29601__auto___38387)){
args__29608__auto__.push((arguments[i__29602__auto___38388]));

var G__38389 = (i__29602__auto___38388 + (1));
i__29602__auto___38388 = G__38389;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38386){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38386));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38390){
var map__38391 = p__38390;
var map__38391__$1 = ((((!((map__38391 == null)))?((((map__38391.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38391.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38391):map__38391);
var message = cljs.core.get.call(null,map__38391__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38391__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28432__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28432__auto__)){
return or__28432__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28420__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28420__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28420__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__33497__auto___38470 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___38470,ch){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___38470,ch){
return (function (state_38442){
var state_val_38443 = (state_38442[(1)]);
if((state_val_38443 === (7))){
var inst_38438 = (state_38442[(2)]);
var state_38442__$1 = state_38442;
var statearr_38444_38471 = state_38442__$1;
(statearr_38444_38471[(2)] = inst_38438);

(statearr_38444_38471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38443 === (1))){
var state_38442__$1 = state_38442;
var statearr_38445_38472 = state_38442__$1;
(statearr_38445_38472[(2)] = null);

(statearr_38445_38472[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38443 === (4))){
var inst_38395 = (state_38442[(7)]);
var inst_38395__$1 = (state_38442[(2)]);
var state_38442__$1 = (function (){var statearr_38446 = state_38442;
(statearr_38446[(7)] = inst_38395__$1);

return statearr_38446;
})();
if(cljs.core.truth_(inst_38395__$1)){
var statearr_38447_38473 = state_38442__$1;
(statearr_38447_38473[(1)] = (5));

} else {
var statearr_38448_38474 = state_38442__$1;
(statearr_38448_38474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38443 === (15))){
var inst_38402 = (state_38442[(8)]);
var inst_38417 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38402);
var inst_38418 = cljs.core.first.call(null,inst_38417);
var inst_38419 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38418);
var inst_38420 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38419)].join('');
var inst_38421 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38420);
var state_38442__$1 = state_38442;
var statearr_38449_38475 = state_38442__$1;
(statearr_38449_38475[(2)] = inst_38421);

(statearr_38449_38475[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38443 === (13))){
var inst_38426 = (state_38442[(2)]);
var state_38442__$1 = state_38442;
var statearr_38450_38476 = state_38442__$1;
(statearr_38450_38476[(2)] = inst_38426);

(statearr_38450_38476[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38443 === (6))){
var state_38442__$1 = state_38442;
var statearr_38451_38477 = state_38442__$1;
(statearr_38451_38477[(2)] = null);

(statearr_38451_38477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38443 === (17))){
var inst_38424 = (state_38442[(2)]);
var state_38442__$1 = state_38442;
var statearr_38452_38478 = state_38442__$1;
(statearr_38452_38478[(2)] = inst_38424);

(statearr_38452_38478[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38443 === (3))){
var inst_38440 = (state_38442[(2)]);
var state_38442__$1 = state_38442;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38442__$1,inst_38440);
} else {
if((state_val_38443 === (12))){
var inst_38401 = (state_38442[(9)]);
var inst_38415 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38401,opts);
var state_38442__$1 = state_38442;
if(cljs.core.truth_(inst_38415)){
var statearr_38453_38479 = state_38442__$1;
(statearr_38453_38479[(1)] = (15));

} else {
var statearr_38454_38480 = state_38442__$1;
(statearr_38454_38480[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38443 === (2))){
var state_38442__$1 = state_38442;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38442__$1,(4),ch);
} else {
if((state_val_38443 === (11))){
var inst_38402 = (state_38442[(8)]);
var inst_38407 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38408 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38402);
var inst_38409 = cljs.core.async.timeout.call(null,(1000));
var inst_38410 = [inst_38408,inst_38409];
var inst_38411 = (new cljs.core.PersistentVector(null,2,(5),inst_38407,inst_38410,null));
var state_38442__$1 = state_38442;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38442__$1,(14),inst_38411);
} else {
if((state_val_38443 === (9))){
var inst_38402 = (state_38442[(8)]);
var inst_38428 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38429 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38402);
var inst_38430 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38429);
var inst_38431 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38430)].join('');
var inst_38432 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38431);
var state_38442__$1 = (function (){var statearr_38455 = state_38442;
(statearr_38455[(10)] = inst_38428);

return statearr_38455;
})();
var statearr_38456_38481 = state_38442__$1;
(statearr_38456_38481[(2)] = inst_38432);

(statearr_38456_38481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38443 === (5))){
var inst_38395 = (state_38442[(7)]);
var inst_38397 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38398 = (new cljs.core.PersistentArrayMap(null,2,inst_38397,null));
var inst_38399 = (new cljs.core.PersistentHashSet(null,inst_38398,null));
var inst_38400 = figwheel.client.focus_msgs.call(null,inst_38399,inst_38395);
var inst_38401 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38400);
var inst_38402 = cljs.core.first.call(null,inst_38400);
var inst_38403 = figwheel.client.autoload_QMARK_.call(null);
var state_38442__$1 = (function (){var statearr_38457 = state_38442;
(statearr_38457[(8)] = inst_38402);

(statearr_38457[(9)] = inst_38401);

return statearr_38457;
})();
if(cljs.core.truth_(inst_38403)){
var statearr_38458_38482 = state_38442__$1;
(statearr_38458_38482[(1)] = (8));

} else {
var statearr_38459_38483 = state_38442__$1;
(statearr_38459_38483[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38443 === (14))){
var inst_38413 = (state_38442[(2)]);
var state_38442__$1 = state_38442;
var statearr_38460_38484 = state_38442__$1;
(statearr_38460_38484[(2)] = inst_38413);

(statearr_38460_38484[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38443 === (16))){
var state_38442__$1 = state_38442;
var statearr_38461_38485 = state_38442__$1;
(statearr_38461_38485[(2)] = null);

(statearr_38461_38485[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38443 === (10))){
var inst_38434 = (state_38442[(2)]);
var state_38442__$1 = (function (){var statearr_38462 = state_38442;
(statearr_38462[(11)] = inst_38434);

return statearr_38462;
})();
var statearr_38463_38486 = state_38442__$1;
(statearr_38463_38486[(2)] = null);

(statearr_38463_38486[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38443 === (8))){
var inst_38401 = (state_38442[(9)]);
var inst_38405 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38401,opts);
var state_38442__$1 = state_38442;
if(cljs.core.truth_(inst_38405)){
var statearr_38464_38487 = state_38442__$1;
(statearr_38464_38487[(1)] = (11));

} else {
var statearr_38465_38488 = state_38442__$1;
(statearr_38465_38488[(1)] = (12));

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
});})(c__33497__auto___38470,ch))
;
return ((function (switch__33409__auto__,c__33497__auto___38470,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33410__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33410__auto____0 = (function (){
var statearr_38466 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38466[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33410__auto__);

(statearr_38466[(1)] = (1));

return statearr_38466;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33410__auto____1 = (function (state_38442){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_38442);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e38467){if((e38467 instanceof Object)){
var ex__33413__auto__ = e38467;
var statearr_38468_38489 = state_38442;
(statearr_38468_38489[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38442);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38490 = state_38442;
state_38442 = G__38490;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33410__auto__ = function(state_38442){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33410__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33410__auto____1.call(this,state_38442);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33410__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33410__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___38470,ch))
})();
var state__33499__auto__ = (function (){var statearr_38469 = f__33498__auto__.call(null);
(statearr_38469[(6)] = c__33497__auto___38470);

return statearr_38469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___38470,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38491_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38491_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38493 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38493){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e38492){if((e38492 instanceof Error)){
var e = e38492;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38493], null));
} else {
var e = e38492;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_38493))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38494){
var map__38495 = p__38494;
var map__38495__$1 = ((((!((map__38495 == null)))?((((map__38495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38495):map__38495);
var opts = map__38495__$1;
var build_id = cljs.core.get.call(null,map__38495__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38495,map__38495__$1,opts,build_id){
return (function (p__38497){
var vec__38498 = p__38497;
var seq__38499 = cljs.core.seq.call(null,vec__38498);
var first__38500 = cljs.core.first.call(null,seq__38499);
var seq__38499__$1 = cljs.core.next.call(null,seq__38499);
var map__38501 = first__38500;
var map__38501__$1 = ((((!((map__38501 == null)))?((((map__38501.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38501.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38501):map__38501);
var msg = map__38501__$1;
var msg_name = cljs.core.get.call(null,map__38501__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38499__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38498,seq__38499,first__38500,seq__38499__$1,map__38501,map__38501__$1,msg,msg_name,_,map__38495,map__38495__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38498,seq__38499,first__38500,seq__38499__$1,map__38501,map__38501__$1,msg,msg_name,_,map__38495,map__38495__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38495,map__38495__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38503){
var vec__38504 = p__38503;
var seq__38505 = cljs.core.seq.call(null,vec__38504);
var first__38506 = cljs.core.first.call(null,seq__38505);
var seq__38505__$1 = cljs.core.next.call(null,seq__38505);
var map__38507 = first__38506;
var map__38507__$1 = ((((!((map__38507 == null)))?((((map__38507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38507.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38507):map__38507);
var msg = map__38507__$1;
var msg_name = cljs.core.get.call(null,map__38507__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38505__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38509){
var map__38510 = p__38509;
var map__38510__$1 = ((((!((map__38510 == null)))?((((map__38510.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38510.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38510):map__38510);
var on_compile_warning = cljs.core.get.call(null,map__38510__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38510__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38510,map__38510__$1,on_compile_warning,on_compile_fail){
return (function (p__38512){
var vec__38513 = p__38512;
var seq__38514 = cljs.core.seq.call(null,vec__38513);
var first__38515 = cljs.core.first.call(null,seq__38514);
var seq__38514__$1 = cljs.core.next.call(null,seq__38514);
var map__38516 = first__38515;
var map__38516__$1 = ((((!((map__38516 == null)))?((((map__38516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38516.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38516):map__38516);
var msg = map__38516__$1;
var msg_name = cljs.core.get.call(null,map__38516__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38514__$1;
var pred__38518 = cljs.core._EQ_;
var expr__38519 = msg_name;
if(cljs.core.truth_(pred__38518.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38519))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38518.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38519))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38510,map__38510__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__33497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto__,msg_hist,msg_names,msg){
return (function (state_38608){
var state_val_38609 = (state_38608[(1)]);
if((state_val_38609 === (7))){
var inst_38528 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
if(cljs.core.truth_(inst_38528)){
var statearr_38610_38657 = state_38608__$1;
(statearr_38610_38657[(1)] = (8));

} else {
var statearr_38611_38658 = state_38608__$1;
(statearr_38611_38658[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (20))){
var inst_38602 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
var statearr_38612_38659 = state_38608__$1;
(statearr_38612_38659[(2)] = inst_38602);

(statearr_38612_38659[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (27))){
var inst_38598 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
var statearr_38613_38660 = state_38608__$1;
(statearr_38613_38660[(2)] = inst_38598);

(statearr_38613_38660[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (1))){
var inst_38521 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38608__$1 = state_38608;
if(cljs.core.truth_(inst_38521)){
var statearr_38614_38661 = state_38608__$1;
(statearr_38614_38661[(1)] = (2));

} else {
var statearr_38615_38662 = state_38608__$1;
(statearr_38615_38662[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (24))){
var inst_38600 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
var statearr_38616_38663 = state_38608__$1;
(statearr_38616_38663[(2)] = inst_38600);

(statearr_38616_38663[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (4))){
var inst_38606 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38608__$1,inst_38606);
} else {
if((state_val_38609 === (15))){
var inst_38604 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
var statearr_38617_38664 = state_38608__$1;
(statearr_38617_38664[(2)] = inst_38604);

(statearr_38617_38664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (21))){
var inst_38557 = (state_38608[(2)]);
var inst_38558 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38559 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38558);
var state_38608__$1 = (function (){var statearr_38618 = state_38608;
(statearr_38618[(7)] = inst_38557);

return statearr_38618;
})();
var statearr_38619_38665 = state_38608__$1;
(statearr_38619_38665[(2)] = inst_38559);

(statearr_38619_38665[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (31))){
var inst_38587 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38608__$1 = state_38608;
if(cljs.core.truth_(inst_38587)){
var statearr_38620_38666 = state_38608__$1;
(statearr_38620_38666[(1)] = (34));

} else {
var statearr_38621_38667 = state_38608__$1;
(statearr_38621_38667[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (32))){
var inst_38596 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
var statearr_38622_38668 = state_38608__$1;
(statearr_38622_38668[(2)] = inst_38596);

(statearr_38622_38668[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (33))){
var inst_38583 = (state_38608[(2)]);
var inst_38584 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38585 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38584);
var state_38608__$1 = (function (){var statearr_38623 = state_38608;
(statearr_38623[(8)] = inst_38583);

return statearr_38623;
})();
var statearr_38624_38669 = state_38608__$1;
(statearr_38624_38669[(2)] = inst_38585);

(statearr_38624_38669[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (13))){
var inst_38542 = figwheel.client.heads_up.clear.call(null);
var state_38608__$1 = state_38608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38608__$1,(16),inst_38542);
} else {
if((state_val_38609 === (22))){
var inst_38563 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38564 = figwheel.client.heads_up.append_warning_message.call(null,inst_38563);
var state_38608__$1 = state_38608;
var statearr_38625_38670 = state_38608__$1;
(statearr_38625_38670[(2)] = inst_38564);

(statearr_38625_38670[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (36))){
var inst_38594 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
var statearr_38626_38671 = state_38608__$1;
(statearr_38626_38671[(2)] = inst_38594);

(statearr_38626_38671[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (29))){
var inst_38574 = (state_38608[(2)]);
var inst_38575 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38576 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38575);
var state_38608__$1 = (function (){var statearr_38627 = state_38608;
(statearr_38627[(9)] = inst_38574);

return statearr_38627;
})();
var statearr_38628_38672 = state_38608__$1;
(statearr_38628_38672[(2)] = inst_38576);

(statearr_38628_38672[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (6))){
var inst_38523 = (state_38608[(10)]);
var state_38608__$1 = state_38608;
var statearr_38629_38673 = state_38608__$1;
(statearr_38629_38673[(2)] = inst_38523);

(statearr_38629_38673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (28))){
var inst_38570 = (state_38608[(2)]);
var inst_38571 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38572 = figwheel.client.heads_up.display_warning.call(null,inst_38571);
var state_38608__$1 = (function (){var statearr_38630 = state_38608;
(statearr_38630[(11)] = inst_38570);

return statearr_38630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38608__$1,(29),inst_38572);
} else {
if((state_val_38609 === (25))){
var inst_38568 = figwheel.client.heads_up.clear.call(null);
var state_38608__$1 = state_38608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38608__$1,(28),inst_38568);
} else {
if((state_val_38609 === (34))){
var inst_38589 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38608__$1 = state_38608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38608__$1,(37),inst_38589);
} else {
if((state_val_38609 === (17))){
var inst_38548 = (state_38608[(2)]);
var inst_38549 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38550 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38549);
var state_38608__$1 = (function (){var statearr_38631 = state_38608;
(statearr_38631[(12)] = inst_38548);

return statearr_38631;
})();
var statearr_38632_38674 = state_38608__$1;
(statearr_38632_38674[(2)] = inst_38550);

(statearr_38632_38674[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (3))){
var inst_38540 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38608__$1 = state_38608;
if(cljs.core.truth_(inst_38540)){
var statearr_38633_38675 = state_38608__$1;
(statearr_38633_38675[(1)] = (13));

} else {
var statearr_38634_38676 = state_38608__$1;
(statearr_38634_38676[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (12))){
var inst_38536 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
var statearr_38635_38677 = state_38608__$1;
(statearr_38635_38677[(2)] = inst_38536);

(statearr_38635_38677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (2))){
var inst_38523 = (state_38608[(10)]);
var inst_38523__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38608__$1 = (function (){var statearr_38636 = state_38608;
(statearr_38636[(10)] = inst_38523__$1);

return statearr_38636;
})();
if(cljs.core.truth_(inst_38523__$1)){
var statearr_38637_38678 = state_38608__$1;
(statearr_38637_38678[(1)] = (5));

} else {
var statearr_38638_38679 = state_38608__$1;
(statearr_38638_38679[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (23))){
var inst_38566 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38608__$1 = state_38608;
if(cljs.core.truth_(inst_38566)){
var statearr_38639_38680 = state_38608__$1;
(statearr_38639_38680[(1)] = (25));

} else {
var statearr_38640_38681 = state_38608__$1;
(statearr_38640_38681[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (35))){
var state_38608__$1 = state_38608;
var statearr_38641_38682 = state_38608__$1;
(statearr_38641_38682[(2)] = null);

(statearr_38641_38682[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (19))){
var inst_38561 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38608__$1 = state_38608;
if(cljs.core.truth_(inst_38561)){
var statearr_38642_38683 = state_38608__$1;
(statearr_38642_38683[(1)] = (22));

} else {
var statearr_38643_38684 = state_38608__$1;
(statearr_38643_38684[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (11))){
var inst_38532 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
var statearr_38644_38685 = state_38608__$1;
(statearr_38644_38685[(2)] = inst_38532);

(statearr_38644_38685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (9))){
var inst_38534 = figwheel.client.heads_up.clear.call(null);
var state_38608__$1 = state_38608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38608__$1,(12),inst_38534);
} else {
if((state_val_38609 === (5))){
var inst_38525 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38608__$1 = state_38608;
var statearr_38645_38686 = state_38608__$1;
(statearr_38645_38686[(2)] = inst_38525);

(statearr_38645_38686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (14))){
var inst_38552 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38608__$1 = state_38608;
if(cljs.core.truth_(inst_38552)){
var statearr_38646_38687 = state_38608__$1;
(statearr_38646_38687[(1)] = (18));

} else {
var statearr_38647_38688 = state_38608__$1;
(statearr_38647_38688[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (26))){
var inst_38578 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38608__$1 = state_38608;
if(cljs.core.truth_(inst_38578)){
var statearr_38648_38689 = state_38608__$1;
(statearr_38648_38689[(1)] = (30));

} else {
var statearr_38649_38690 = state_38608__$1;
(statearr_38649_38690[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (16))){
var inst_38544 = (state_38608[(2)]);
var inst_38545 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38546 = figwheel.client.heads_up.display_exception.call(null,inst_38545);
var state_38608__$1 = (function (){var statearr_38650 = state_38608;
(statearr_38650[(13)] = inst_38544);

return statearr_38650;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38608__$1,(17),inst_38546);
} else {
if((state_val_38609 === (30))){
var inst_38580 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38581 = figwheel.client.heads_up.display_warning.call(null,inst_38580);
var state_38608__$1 = state_38608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38608__$1,(33),inst_38581);
} else {
if((state_val_38609 === (10))){
var inst_38538 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
var statearr_38651_38691 = state_38608__$1;
(statearr_38651_38691[(2)] = inst_38538);

(statearr_38651_38691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (18))){
var inst_38554 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38555 = figwheel.client.heads_up.display_exception.call(null,inst_38554);
var state_38608__$1 = state_38608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38608__$1,(21),inst_38555);
} else {
if((state_val_38609 === (37))){
var inst_38591 = (state_38608[(2)]);
var state_38608__$1 = state_38608;
var statearr_38652_38692 = state_38608__$1;
(statearr_38652_38692[(2)] = inst_38591);

(statearr_38652_38692[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38609 === (8))){
var inst_38530 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38608__$1 = state_38608;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38608__$1,(11),inst_38530);
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
});})(c__33497__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33409__auto__,c__33497__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33410__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33410__auto____0 = (function (){
var statearr_38653 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38653[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33410__auto__);

(statearr_38653[(1)] = (1));

return statearr_38653;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33410__auto____1 = (function (state_38608){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_38608);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e38654){if((e38654 instanceof Object)){
var ex__33413__auto__ = e38654;
var statearr_38655_38693 = state_38608;
(statearr_38655_38693[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38608);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38654;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38694 = state_38608;
state_38608 = G__38694;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33410__auto__ = function(state_38608){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33410__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33410__auto____1.call(this,state_38608);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33410__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33410__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto__,msg_hist,msg_names,msg))
})();
var state__33499__auto__ = (function (){var statearr_38656 = f__33498__auto__.call(null);
(statearr_38656[(6)] = c__33497__auto__);

return statearr_38656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto__,msg_hist,msg_names,msg))
);

return c__33497__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33497__auto___38723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto___38723,ch){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto___38723,ch){
return (function (state_38709){
var state_val_38710 = (state_38709[(1)]);
if((state_val_38710 === (1))){
var state_38709__$1 = state_38709;
var statearr_38711_38724 = state_38709__$1;
(statearr_38711_38724[(2)] = null);

(statearr_38711_38724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38710 === (2))){
var state_38709__$1 = state_38709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38709__$1,(4),ch);
} else {
if((state_val_38710 === (3))){
var inst_38707 = (state_38709[(2)]);
var state_38709__$1 = state_38709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38709__$1,inst_38707);
} else {
if((state_val_38710 === (4))){
var inst_38697 = (state_38709[(7)]);
var inst_38697__$1 = (state_38709[(2)]);
var state_38709__$1 = (function (){var statearr_38712 = state_38709;
(statearr_38712[(7)] = inst_38697__$1);

return statearr_38712;
})();
if(cljs.core.truth_(inst_38697__$1)){
var statearr_38713_38725 = state_38709__$1;
(statearr_38713_38725[(1)] = (5));

} else {
var statearr_38714_38726 = state_38709__$1;
(statearr_38714_38726[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38710 === (5))){
var inst_38697 = (state_38709[(7)]);
var inst_38699 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38697);
var state_38709__$1 = state_38709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38709__$1,(8),inst_38699);
} else {
if((state_val_38710 === (6))){
var state_38709__$1 = state_38709;
var statearr_38715_38727 = state_38709__$1;
(statearr_38715_38727[(2)] = null);

(statearr_38715_38727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38710 === (7))){
var inst_38705 = (state_38709[(2)]);
var state_38709__$1 = state_38709;
var statearr_38716_38728 = state_38709__$1;
(statearr_38716_38728[(2)] = inst_38705);

(statearr_38716_38728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38710 === (8))){
var inst_38701 = (state_38709[(2)]);
var state_38709__$1 = (function (){var statearr_38717 = state_38709;
(statearr_38717[(8)] = inst_38701);

return statearr_38717;
})();
var statearr_38718_38729 = state_38709__$1;
(statearr_38718_38729[(2)] = null);

(statearr_38718_38729[(1)] = (2));


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
});})(c__33497__auto___38723,ch))
;
return ((function (switch__33409__auto__,c__33497__auto___38723,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33410__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33410__auto____0 = (function (){
var statearr_38719 = [null,null,null,null,null,null,null,null,null];
(statearr_38719[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33410__auto__);

(statearr_38719[(1)] = (1));

return statearr_38719;
});
var figwheel$client$heads_up_plugin_$_state_machine__33410__auto____1 = (function (state_38709){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_38709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e38720){if((e38720 instanceof Object)){
var ex__33413__auto__ = e38720;
var statearr_38721_38730 = state_38709;
(statearr_38721_38730[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38731 = state_38709;
state_38709 = G__38731;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33410__auto__ = function(state_38709){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33410__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33410__auto____1.call(this,state_38709);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33410__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33410__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto___38723,ch))
})();
var state__33499__auto__ = (function (){var statearr_38722 = f__33498__auto__.call(null);
(statearr_38722[(6)] = c__33497__auto___38723);

return statearr_38722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto___38723,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto__){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto__){
return (function (state_38737){
var state_val_38738 = (state_38737[(1)]);
if((state_val_38738 === (1))){
var inst_38732 = cljs.core.async.timeout.call(null,(3000));
var state_38737__$1 = state_38737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38737__$1,(2),inst_38732);
} else {
if((state_val_38738 === (2))){
var inst_38734 = (state_38737[(2)]);
var inst_38735 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38737__$1 = (function (){var statearr_38739 = state_38737;
(statearr_38739[(7)] = inst_38734);

return statearr_38739;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38737__$1,inst_38735);
} else {
return null;
}
}
});})(c__33497__auto__))
;
return ((function (switch__33409__auto__,c__33497__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33410__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33410__auto____0 = (function (){
var statearr_38740 = [null,null,null,null,null,null,null,null];
(statearr_38740[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33410__auto__);

(statearr_38740[(1)] = (1));

return statearr_38740;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33410__auto____1 = (function (state_38737){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_38737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e38741){if((e38741 instanceof Object)){
var ex__33413__auto__ = e38741;
var statearr_38742_38744 = state_38737;
(statearr_38742_38744[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38741;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38745 = state_38737;
state_38737 = G__38745;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33410__auto__ = function(state_38737){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33410__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33410__auto____1.call(this,state_38737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33410__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33410__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto__))
})();
var state__33499__auto__ = (function (){var statearr_38743 = f__33498__auto__.call(null);
(statearr_38743[(6)] = c__33497__auto__);

return statearr_38743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto__))
);

return c__33497__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__33497__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33497__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__33498__auto__ = (function (){var switch__33409__auto__ = ((function (c__33497__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38752){
var state_val_38753 = (state_38752[(1)]);
if((state_val_38753 === (1))){
var inst_38746 = cljs.core.async.timeout.call(null,(2000));
var state_38752__$1 = state_38752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38752__$1,(2),inst_38746);
} else {
if((state_val_38753 === (2))){
var inst_38748 = (state_38752[(2)]);
var inst_38749 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38750 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38749);
var state_38752__$1 = (function (){var statearr_38754 = state_38752;
(statearr_38754[(7)] = inst_38748);

return statearr_38754;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38752__$1,inst_38750);
} else {
return null;
}
}
});})(c__33497__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__33409__auto__,c__33497__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33410__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33410__auto____0 = (function (){
var statearr_38755 = [null,null,null,null,null,null,null,null];
(statearr_38755[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33410__auto__);

(statearr_38755[(1)] = (1));

return statearr_38755;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33410__auto____1 = (function (state_38752){
while(true){
var ret_value__33411__auto__ = (function (){try{while(true){
var result__33412__auto__ = switch__33409__auto__.call(null,state_38752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33412__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33412__auto__;
}
break;
}
}catch (e38756){if((e38756 instanceof Object)){
var ex__33413__auto__ = e38756;
var statearr_38757_38759 = state_38752;
(statearr_38757_38759[(5)] = ex__33413__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38756;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33411__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38760 = state_38752;
state_38752 = G__38760;
continue;
} else {
return ret_value__33411__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33410__auto__ = function(state_38752){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33410__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33410__auto____1.call(this,state_38752);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33410__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33410__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33410__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33410__auto__;
})()
;})(switch__33409__auto__,c__33497__auto__,figwheel_version,temp__4657__auto__))
})();
var state__33499__auto__ = (function (){var statearr_38758 = f__33498__auto__.call(null);
(statearr_38758[(6)] = c__33497__auto__);

return statearr_38758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33499__auto__);
});})(c__33497__auto__,figwheel_version,temp__4657__auto__))
);

return c__33497__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38761){
var map__38762 = p__38761;
var map__38762__$1 = ((((!((map__38762 == null)))?((((map__38762.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38762.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38762):map__38762);
var file = cljs.core.get.call(null,map__38762__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38762__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38762__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38764 = "";
var G__38764__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38764),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38764);
var G__38764__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38764__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38764__$1);
if(cljs.core.truth_((function (){var and__28420__auto__ = line;
if(cljs.core.truth_(and__28420__auto__)){
return column;
} else {
return and__28420__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38764__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38764__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38765){
var map__38766 = p__38765;
var map__38766__$1 = ((((!((map__38766 == null)))?((((map__38766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38766.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38766):map__38766);
var ed = map__38766__$1;
var formatted_exception = cljs.core.get.call(null,map__38766__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38766__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38766__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38768_38772 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38769_38773 = null;
var count__38770_38774 = (0);
var i__38771_38775 = (0);
while(true){
if((i__38771_38775 < count__38770_38774)){
var msg_38776 = cljs.core._nth.call(null,chunk__38769_38773,i__38771_38775);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38776);

var G__38777 = seq__38768_38772;
var G__38778 = chunk__38769_38773;
var G__38779 = count__38770_38774;
var G__38780 = (i__38771_38775 + (1));
seq__38768_38772 = G__38777;
chunk__38769_38773 = G__38778;
count__38770_38774 = G__38779;
i__38771_38775 = G__38780;
continue;
} else {
var temp__4657__auto___38781 = cljs.core.seq.call(null,seq__38768_38772);
if(temp__4657__auto___38781){
var seq__38768_38782__$1 = temp__4657__auto___38781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38768_38782__$1)){
var c__29271__auto___38783 = cljs.core.chunk_first.call(null,seq__38768_38782__$1);
var G__38784 = cljs.core.chunk_rest.call(null,seq__38768_38782__$1);
var G__38785 = c__29271__auto___38783;
var G__38786 = cljs.core.count.call(null,c__29271__auto___38783);
var G__38787 = (0);
seq__38768_38772 = G__38784;
chunk__38769_38773 = G__38785;
count__38770_38774 = G__38786;
i__38771_38775 = G__38787;
continue;
} else {
var msg_38788 = cljs.core.first.call(null,seq__38768_38782__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38788);

var G__38789 = cljs.core.next.call(null,seq__38768_38782__$1);
var G__38790 = null;
var G__38791 = (0);
var G__38792 = (0);
seq__38768_38772 = G__38789;
chunk__38769_38773 = G__38790;
count__38770_38774 = G__38791;
i__38771_38775 = G__38792;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38793){
var map__38794 = p__38793;
var map__38794__$1 = ((((!((map__38794 == null)))?((((map__38794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38794.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38794):map__38794);
var w = map__38794__$1;
var message = cljs.core.get.call(null,map__38794__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28420__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28420__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28420__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38796 = cljs.core.seq.call(null,plugins);
var chunk__38797 = null;
var count__38798 = (0);
var i__38799 = (0);
while(true){
if((i__38799 < count__38798)){
var vec__38800 = cljs.core._nth.call(null,chunk__38797,i__38799);
var k = cljs.core.nth.call(null,vec__38800,(0),null);
var plugin = cljs.core.nth.call(null,vec__38800,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38806 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38796,chunk__38797,count__38798,i__38799,pl_38806,vec__38800,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38806.call(null,msg_hist);
});})(seq__38796,chunk__38797,count__38798,i__38799,pl_38806,vec__38800,k,plugin))
);
} else {
}

var G__38807 = seq__38796;
var G__38808 = chunk__38797;
var G__38809 = count__38798;
var G__38810 = (i__38799 + (1));
seq__38796 = G__38807;
chunk__38797 = G__38808;
count__38798 = G__38809;
i__38799 = G__38810;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38796);
if(temp__4657__auto__){
var seq__38796__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38796__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__38796__$1);
var G__38811 = cljs.core.chunk_rest.call(null,seq__38796__$1);
var G__38812 = c__29271__auto__;
var G__38813 = cljs.core.count.call(null,c__29271__auto__);
var G__38814 = (0);
seq__38796 = G__38811;
chunk__38797 = G__38812;
count__38798 = G__38813;
i__38799 = G__38814;
continue;
} else {
var vec__38803 = cljs.core.first.call(null,seq__38796__$1);
var k = cljs.core.nth.call(null,vec__38803,(0),null);
var plugin = cljs.core.nth.call(null,vec__38803,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38815 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38796,chunk__38797,count__38798,i__38799,pl_38815,vec__38803,k,plugin,seq__38796__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38815.call(null,msg_hist);
});})(seq__38796,chunk__38797,count__38798,i__38799,pl_38815,vec__38803,k,plugin,seq__38796__$1,temp__4657__auto__))
);
} else {
}

var G__38816 = cljs.core.next.call(null,seq__38796__$1);
var G__38817 = null;
var G__38818 = (0);
var G__38819 = (0);
seq__38796 = G__38816;
chunk__38797 = G__38817;
count__38798 = G__38818;
i__38799 = G__38819;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38821 = arguments.length;
switch (G__38821) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38822_38827 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38823_38828 = null;
var count__38824_38829 = (0);
var i__38825_38830 = (0);
while(true){
if((i__38825_38830 < count__38824_38829)){
var msg_38831 = cljs.core._nth.call(null,chunk__38823_38828,i__38825_38830);
figwheel.client.socket.handle_incoming_message.call(null,msg_38831);

var G__38832 = seq__38822_38827;
var G__38833 = chunk__38823_38828;
var G__38834 = count__38824_38829;
var G__38835 = (i__38825_38830 + (1));
seq__38822_38827 = G__38832;
chunk__38823_38828 = G__38833;
count__38824_38829 = G__38834;
i__38825_38830 = G__38835;
continue;
} else {
var temp__4657__auto___38836 = cljs.core.seq.call(null,seq__38822_38827);
if(temp__4657__auto___38836){
var seq__38822_38837__$1 = temp__4657__auto___38836;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38822_38837__$1)){
var c__29271__auto___38838 = cljs.core.chunk_first.call(null,seq__38822_38837__$1);
var G__38839 = cljs.core.chunk_rest.call(null,seq__38822_38837__$1);
var G__38840 = c__29271__auto___38838;
var G__38841 = cljs.core.count.call(null,c__29271__auto___38838);
var G__38842 = (0);
seq__38822_38827 = G__38839;
chunk__38823_38828 = G__38840;
count__38824_38829 = G__38841;
i__38825_38830 = G__38842;
continue;
} else {
var msg_38843 = cljs.core.first.call(null,seq__38822_38837__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38843);

var G__38844 = cljs.core.next.call(null,seq__38822_38837__$1);
var G__38845 = null;
var G__38846 = (0);
var G__38847 = (0);
seq__38822_38827 = G__38844;
chunk__38823_38828 = G__38845;
count__38824_38829 = G__38846;
i__38825_38830 = G__38847;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29608__auto__ = [];
var len__29601__auto___38852 = arguments.length;
var i__29602__auto___38853 = (0);
while(true){
if((i__29602__auto___38853 < len__29601__auto___38852)){
args__29608__auto__.push((arguments[i__29602__auto___38853]));

var G__38854 = (i__29602__auto___38853 + (1));
i__29602__auto___38853 = G__38854;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38849){
var map__38850 = p__38849;
var map__38850__$1 = ((((!((map__38850 == null)))?((((map__38850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38850):map__38850);
var opts = map__38850__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38848){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38848));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38855){if((e38855 instanceof Error)){
var e = e38855;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38855;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38856){
var map__38857 = p__38856;
var map__38857__$1 = ((((!((map__38857 == null)))?((((map__38857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38857):map__38857);
var msg_name = cljs.core.get.call(null,map__38857__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1572992072701
