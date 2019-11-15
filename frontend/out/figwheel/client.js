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
}catch (e39172){if((e39172 instanceof Error)){
var e = e39172;
return "Error: Unable to stringify";
} else {
throw e39172;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39175 = arguments.length;
switch (G__39175) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39173_SHARP_){
if(typeof p1__39173_SHARP_ === 'string'){
return p1__39173_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39173_SHARP_);
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
var len__29601__auto___39178 = arguments.length;
var i__29602__auto___39179 = (0);
while(true){
if((i__29602__auto___39179 < len__29601__auto___39178)){
args__29608__auto__.push((arguments[i__29602__auto___39179]));

var G__39180 = (i__29602__auto___39179 + (1));
i__29602__auto___39179 = G__39180;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39177){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39177));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29608__auto__ = [];
var len__29601__auto___39182 = arguments.length;
var i__29602__auto___39183 = (0);
while(true){
if((i__29602__auto___39183 < len__29601__auto___39182)){
args__29608__auto__.push((arguments[i__29602__auto___39183]));

var G__39184 = (i__29602__auto___39183 + (1));
i__29602__auto___39183 = G__39184;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39181){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39181));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39185){
var map__39186 = p__39185;
var map__39186__$1 = ((((!((map__39186 == null)))?((((map__39186.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39186.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39186):map__39186);
var message = cljs.core.get.call(null,map__39186__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39186__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__34292__auto___39265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___39265,ch){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___39265,ch){
return (function (state_39237){
var state_val_39238 = (state_39237[(1)]);
if((state_val_39238 === (7))){
var inst_39233 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
var statearr_39239_39266 = state_39237__$1;
(statearr_39239_39266[(2)] = inst_39233);

(statearr_39239_39266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (1))){
var state_39237__$1 = state_39237;
var statearr_39240_39267 = state_39237__$1;
(statearr_39240_39267[(2)] = null);

(statearr_39240_39267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (4))){
var inst_39190 = (state_39237[(7)]);
var inst_39190__$1 = (state_39237[(2)]);
var state_39237__$1 = (function (){var statearr_39241 = state_39237;
(statearr_39241[(7)] = inst_39190__$1);

return statearr_39241;
})();
if(cljs.core.truth_(inst_39190__$1)){
var statearr_39242_39268 = state_39237__$1;
(statearr_39242_39268[(1)] = (5));

} else {
var statearr_39243_39269 = state_39237__$1;
(statearr_39243_39269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (15))){
var inst_39197 = (state_39237[(8)]);
var inst_39212 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39197);
var inst_39213 = cljs.core.first.call(null,inst_39212);
var inst_39214 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39213);
var inst_39215 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39214)].join('');
var inst_39216 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39215);
var state_39237__$1 = state_39237;
var statearr_39244_39270 = state_39237__$1;
(statearr_39244_39270[(2)] = inst_39216);

(statearr_39244_39270[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (13))){
var inst_39221 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
var statearr_39245_39271 = state_39237__$1;
(statearr_39245_39271[(2)] = inst_39221);

(statearr_39245_39271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (6))){
var state_39237__$1 = state_39237;
var statearr_39246_39272 = state_39237__$1;
(statearr_39246_39272[(2)] = null);

(statearr_39246_39272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (17))){
var inst_39219 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
var statearr_39247_39273 = state_39237__$1;
(statearr_39247_39273[(2)] = inst_39219);

(statearr_39247_39273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (3))){
var inst_39235 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39237__$1,inst_39235);
} else {
if((state_val_39238 === (12))){
var inst_39196 = (state_39237[(9)]);
var inst_39210 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39196,opts);
var state_39237__$1 = state_39237;
if(cljs.core.truth_(inst_39210)){
var statearr_39248_39274 = state_39237__$1;
(statearr_39248_39274[(1)] = (15));

} else {
var statearr_39249_39275 = state_39237__$1;
(statearr_39249_39275[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (2))){
var state_39237__$1 = state_39237;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39237__$1,(4),ch);
} else {
if((state_val_39238 === (11))){
var inst_39197 = (state_39237[(8)]);
var inst_39202 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39203 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39197);
var inst_39204 = cljs.core.async.timeout.call(null,(1000));
var inst_39205 = [inst_39203,inst_39204];
var inst_39206 = (new cljs.core.PersistentVector(null,2,(5),inst_39202,inst_39205,null));
var state_39237__$1 = state_39237;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39237__$1,(14),inst_39206);
} else {
if((state_val_39238 === (9))){
var inst_39197 = (state_39237[(8)]);
var inst_39223 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39224 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39197);
var inst_39225 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39224);
var inst_39226 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39225)].join('');
var inst_39227 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39226);
var state_39237__$1 = (function (){var statearr_39250 = state_39237;
(statearr_39250[(10)] = inst_39223);

return statearr_39250;
})();
var statearr_39251_39276 = state_39237__$1;
(statearr_39251_39276[(2)] = inst_39227);

(statearr_39251_39276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (5))){
var inst_39190 = (state_39237[(7)]);
var inst_39192 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39193 = (new cljs.core.PersistentArrayMap(null,2,inst_39192,null));
var inst_39194 = (new cljs.core.PersistentHashSet(null,inst_39193,null));
var inst_39195 = figwheel.client.focus_msgs.call(null,inst_39194,inst_39190);
var inst_39196 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39195);
var inst_39197 = cljs.core.first.call(null,inst_39195);
var inst_39198 = figwheel.client.autoload_QMARK_.call(null);
var state_39237__$1 = (function (){var statearr_39252 = state_39237;
(statearr_39252[(8)] = inst_39197);

(statearr_39252[(9)] = inst_39196);

return statearr_39252;
})();
if(cljs.core.truth_(inst_39198)){
var statearr_39253_39277 = state_39237__$1;
(statearr_39253_39277[(1)] = (8));

} else {
var statearr_39254_39278 = state_39237__$1;
(statearr_39254_39278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (14))){
var inst_39208 = (state_39237[(2)]);
var state_39237__$1 = state_39237;
var statearr_39255_39279 = state_39237__$1;
(statearr_39255_39279[(2)] = inst_39208);

(statearr_39255_39279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (16))){
var state_39237__$1 = state_39237;
var statearr_39256_39280 = state_39237__$1;
(statearr_39256_39280[(2)] = null);

(statearr_39256_39280[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (10))){
var inst_39229 = (state_39237[(2)]);
var state_39237__$1 = (function (){var statearr_39257 = state_39237;
(statearr_39257[(11)] = inst_39229);

return statearr_39257;
})();
var statearr_39258_39281 = state_39237__$1;
(statearr_39258_39281[(2)] = null);

(statearr_39258_39281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39238 === (8))){
var inst_39196 = (state_39237[(9)]);
var inst_39200 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39196,opts);
var state_39237__$1 = state_39237;
if(cljs.core.truth_(inst_39200)){
var statearr_39259_39282 = state_39237__$1;
(statearr_39259_39282[(1)] = (11));

} else {
var statearr_39260_39283 = state_39237__$1;
(statearr_39260_39283[(1)] = (12));

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
});})(c__34292__auto___39265,ch))
;
return ((function (switch__34204__auto__,c__34292__auto___39265,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34205__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34205__auto____0 = (function (){
var statearr_39261 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39261[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34205__auto__);

(statearr_39261[(1)] = (1));

return statearr_39261;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34205__auto____1 = (function (state_39237){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_39237);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e39262){if((e39262 instanceof Object)){
var ex__34208__auto__ = e39262;
var statearr_39263_39284 = state_39237;
(statearr_39263_39284[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39237);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39285 = state_39237;
state_39237 = G__39285;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34205__auto__ = function(state_39237){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34205__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34205__auto____1.call(this,state_39237);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34205__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34205__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___39265,ch))
})();
var state__34294__auto__ = (function (){var statearr_39264 = f__34293__auto__.call(null);
(statearr_39264[(6)] = c__34292__auto___39265);

return statearr_39264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___39265,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39286_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39286_SHARP_));
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
var base_path_39288 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39288){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39287){if((e39287 instanceof Error)){
var e = e39287;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39288], null));
} else {
var e = e39287;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39288))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39289){
var map__39290 = p__39289;
var map__39290__$1 = ((((!((map__39290 == null)))?((((map__39290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39290.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39290):map__39290);
var opts = map__39290__$1;
var build_id = cljs.core.get.call(null,map__39290__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39290,map__39290__$1,opts,build_id){
return (function (p__39292){
var vec__39293 = p__39292;
var seq__39294 = cljs.core.seq.call(null,vec__39293);
var first__39295 = cljs.core.first.call(null,seq__39294);
var seq__39294__$1 = cljs.core.next.call(null,seq__39294);
var map__39296 = first__39295;
var map__39296__$1 = ((((!((map__39296 == null)))?((((map__39296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39296.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39296):map__39296);
var msg = map__39296__$1;
var msg_name = cljs.core.get.call(null,map__39296__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39294__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39293,seq__39294,first__39295,seq__39294__$1,map__39296,map__39296__$1,msg,msg_name,_,map__39290,map__39290__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39293,seq__39294,first__39295,seq__39294__$1,map__39296,map__39296__$1,msg,msg_name,_,map__39290,map__39290__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39290,map__39290__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39298){
var vec__39299 = p__39298;
var seq__39300 = cljs.core.seq.call(null,vec__39299);
var first__39301 = cljs.core.first.call(null,seq__39300);
var seq__39300__$1 = cljs.core.next.call(null,seq__39300);
var map__39302 = first__39301;
var map__39302__$1 = ((((!((map__39302 == null)))?((((map__39302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39302.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39302):map__39302);
var msg = map__39302__$1;
var msg_name = cljs.core.get.call(null,map__39302__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39300__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39304){
var map__39305 = p__39304;
var map__39305__$1 = ((((!((map__39305 == null)))?((((map__39305.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39305.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39305):map__39305);
var on_compile_warning = cljs.core.get.call(null,map__39305__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39305__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39305,map__39305__$1,on_compile_warning,on_compile_fail){
return (function (p__39307){
var vec__39308 = p__39307;
var seq__39309 = cljs.core.seq.call(null,vec__39308);
var first__39310 = cljs.core.first.call(null,seq__39309);
var seq__39309__$1 = cljs.core.next.call(null,seq__39309);
var map__39311 = first__39310;
var map__39311__$1 = ((((!((map__39311 == null)))?((((map__39311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39311.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39311):map__39311);
var msg = map__39311__$1;
var msg_name = cljs.core.get.call(null,map__39311__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39309__$1;
var pred__39313 = cljs.core._EQ_;
var expr__39314 = msg_name;
if(cljs.core.truth_(pred__39313.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39314))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39313.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39314))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39305,map__39305__$1,on_compile_warning,on_compile_fail))
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
var c__34292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto__,msg_hist,msg_names,msg){
return (function (state_39403){
var state_val_39404 = (state_39403[(1)]);
if((state_val_39404 === (7))){
var inst_39323 = (state_39403[(2)]);
var state_39403__$1 = state_39403;
if(cljs.core.truth_(inst_39323)){
var statearr_39405_39452 = state_39403__$1;
(statearr_39405_39452[(1)] = (8));

} else {
var statearr_39406_39453 = state_39403__$1;
(statearr_39406_39453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (20))){
var inst_39397 = (state_39403[(2)]);
var state_39403__$1 = state_39403;
var statearr_39407_39454 = state_39403__$1;
(statearr_39407_39454[(2)] = inst_39397);

(statearr_39407_39454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (27))){
var inst_39393 = (state_39403[(2)]);
var state_39403__$1 = state_39403;
var statearr_39408_39455 = state_39403__$1;
(statearr_39408_39455[(2)] = inst_39393);

(statearr_39408_39455[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (1))){
var inst_39316 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39403__$1 = state_39403;
if(cljs.core.truth_(inst_39316)){
var statearr_39409_39456 = state_39403__$1;
(statearr_39409_39456[(1)] = (2));

} else {
var statearr_39410_39457 = state_39403__$1;
(statearr_39410_39457[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (24))){
var inst_39395 = (state_39403[(2)]);
var state_39403__$1 = state_39403;
var statearr_39411_39458 = state_39403__$1;
(statearr_39411_39458[(2)] = inst_39395);

(statearr_39411_39458[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (4))){
var inst_39401 = (state_39403[(2)]);
var state_39403__$1 = state_39403;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39403__$1,inst_39401);
} else {
if((state_val_39404 === (15))){
var inst_39399 = (state_39403[(2)]);
var state_39403__$1 = state_39403;
var statearr_39412_39459 = state_39403__$1;
(statearr_39412_39459[(2)] = inst_39399);

(statearr_39412_39459[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (21))){
var inst_39352 = (state_39403[(2)]);
var inst_39353 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39354 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39353);
var state_39403__$1 = (function (){var statearr_39413 = state_39403;
(statearr_39413[(7)] = inst_39352);

return statearr_39413;
})();
var statearr_39414_39460 = state_39403__$1;
(statearr_39414_39460[(2)] = inst_39354);

(statearr_39414_39460[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (31))){
var inst_39382 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39403__$1 = state_39403;
if(cljs.core.truth_(inst_39382)){
var statearr_39415_39461 = state_39403__$1;
(statearr_39415_39461[(1)] = (34));

} else {
var statearr_39416_39462 = state_39403__$1;
(statearr_39416_39462[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (32))){
var inst_39391 = (state_39403[(2)]);
var state_39403__$1 = state_39403;
var statearr_39417_39463 = state_39403__$1;
(statearr_39417_39463[(2)] = inst_39391);

(statearr_39417_39463[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (33))){
var inst_39378 = (state_39403[(2)]);
var inst_39379 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39380 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39379);
var state_39403__$1 = (function (){var statearr_39418 = state_39403;
(statearr_39418[(8)] = inst_39378);

return statearr_39418;
})();
var statearr_39419_39464 = state_39403__$1;
(statearr_39419_39464[(2)] = inst_39380);

(statearr_39419_39464[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (13))){
var inst_39337 = figwheel.client.heads_up.clear.call(null);
var state_39403__$1 = state_39403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39403__$1,(16),inst_39337);
} else {
if((state_val_39404 === (22))){
var inst_39358 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39359 = figwheel.client.heads_up.append_warning_message.call(null,inst_39358);
var state_39403__$1 = state_39403;
var statearr_39420_39465 = state_39403__$1;
(statearr_39420_39465[(2)] = inst_39359);

(statearr_39420_39465[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (36))){
var inst_39389 = (state_39403[(2)]);
var state_39403__$1 = state_39403;
var statearr_39421_39466 = state_39403__$1;
(statearr_39421_39466[(2)] = inst_39389);

(statearr_39421_39466[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (29))){
var inst_39369 = (state_39403[(2)]);
var inst_39370 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39371 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39370);
var state_39403__$1 = (function (){var statearr_39422 = state_39403;
(statearr_39422[(9)] = inst_39369);

return statearr_39422;
})();
var statearr_39423_39467 = state_39403__$1;
(statearr_39423_39467[(2)] = inst_39371);

(statearr_39423_39467[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (6))){
var inst_39318 = (state_39403[(10)]);
var state_39403__$1 = state_39403;
var statearr_39424_39468 = state_39403__$1;
(statearr_39424_39468[(2)] = inst_39318);

(statearr_39424_39468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (28))){
var inst_39365 = (state_39403[(2)]);
var inst_39366 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39367 = figwheel.client.heads_up.display_warning.call(null,inst_39366);
var state_39403__$1 = (function (){var statearr_39425 = state_39403;
(statearr_39425[(11)] = inst_39365);

return statearr_39425;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39403__$1,(29),inst_39367);
} else {
if((state_val_39404 === (25))){
var inst_39363 = figwheel.client.heads_up.clear.call(null);
var state_39403__$1 = state_39403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39403__$1,(28),inst_39363);
} else {
if((state_val_39404 === (34))){
var inst_39384 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39403__$1 = state_39403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39403__$1,(37),inst_39384);
} else {
if((state_val_39404 === (17))){
var inst_39343 = (state_39403[(2)]);
var inst_39344 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39345 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39344);
var state_39403__$1 = (function (){var statearr_39426 = state_39403;
(statearr_39426[(12)] = inst_39343);

return statearr_39426;
})();
var statearr_39427_39469 = state_39403__$1;
(statearr_39427_39469[(2)] = inst_39345);

(statearr_39427_39469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (3))){
var inst_39335 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39403__$1 = state_39403;
if(cljs.core.truth_(inst_39335)){
var statearr_39428_39470 = state_39403__$1;
(statearr_39428_39470[(1)] = (13));

} else {
var statearr_39429_39471 = state_39403__$1;
(statearr_39429_39471[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (12))){
var inst_39331 = (state_39403[(2)]);
var state_39403__$1 = state_39403;
var statearr_39430_39472 = state_39403__$1;
(statearr_39430_39472[(2)] = inst_39331);

(statearr_39430_39472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (2))){
var inst_39318 = (state_39403[(10)]);
var inst_39318__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39403__$1 = (function (){var statearr_39431 = state_39403;
(statearr_39431[(10)] = inst_39318__$1);

return statearr_39431;
})();
if(cljs.core.truth_(inst_39318__$1)){
var statearr_39432_39473 = state_39403__$1;
(statearr_39432_39473[(1)] = (5));

} else {
var statearr_39433_39474 = state_39403__$1;
(statearr_39433_39474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (23))){
var inst_39361 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39403__$1 = state_39403;
if(cljs.core.truth_(inst_39361)){
var statearr_39434_39475 = state_39403__$1;
(statearr_39434_39475[(1)] = (25));

} else {
var statearr_39435_39476 = state_39403__$1;
(statearr_39435_39476[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (35))){
var state_39403__$1 = state_39403;
var statearr_39436_39477 = state_39403__$1;
(statearr_39436_39477[(2)] = null);

(statearr_39436_39477[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (19))){
var inst_39356 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39403__$1 = state_39403;
if(cljs.core.truth_(inst_39356)){
var statearr_39437_39478 = state_39403__$1;
(statearr_39437_39478[(1)] = (22));

} else {
var statearr_39438_39479 = state_39403__$1;
(statearr_39438_39479[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (11))){
var inst_39327 = (state_39403[(2)]);
var state_39403__$1 = state_39403;
var statearr_39439_39480 = state_39403__$1;
(statearr_39439_39480[(2)] = inst_39327);

(statearr_39439_39480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (9))){
var inst_39329 = figwheel.client.heads_up.clear.call(null);
var state_39403__$1 = state_39403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39403__$1,(12),inst_39329);
} else {
if((state_val_39404 === (5))){
var inst_39320 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39403__$1 = state_39403;
var statearr_39440_39481 = state_39403__$1;
(statearr_39440_39481[(2)] = inst_39320);

(statearr_39440_39481[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (14))){
var inst_39347 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39403__$1 = state_39403;
if(cljs.core.truth_(inst_39347)){
var statearr_39441_39482 = state_39403__$1;
(statearr_39441_39482[(1)] = (18));

} else {
var statearr_39442_39483 = state_39403__$1;
(statearr_39442_39483[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (26))){
var inst_39373 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39403__$1 = state_39403;
if(cljs.core.truth_(inst_39373)){
var statearr_39443_39484 = state_39403__$1;
(statearr_39443_39484[(1)] = (30));

} else {
var statearr_39444_39485 = state_39403__$1;
(statearr_39444_39485[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (16))){
var inst_39339 = (state_39403[(2)]);
var inst_39340 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39341 = figwheel.client.heads_up.display_exception.call(null,inst_39340);
var state_39403__$1 = (function (){var statearr_39445 = state_39403;
(statearr_39445[(13)] = inst_39339);

return statearr_39445;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39403__$1,(17),inst_39341);
} else {
if((state_val_39404 === (30))){
var inst_39375 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39376 = figwheel.client.heads_up.display_warning.call(null,inst_39375);
var state_39403__$1 = state_39403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39403__$1,(33),inst_39376);
} else {
if((state_val_39404 === (10))){
var inst_39333 = (state_39403[(2)]);
var state_39403__$1 = state_39403;
var statearr_39446_39486 = state_39403__$1;
(statearr_39446_39486[(2)] = inst_39333);

(statearr_39446_39486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (18))){
var inst_39349 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39350 = figwheel.client.heads_up.display_exception.call(null,inst_39349);
var state_39403__$1 = state_39403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39403__$1,(21),inst_39350);
} else {
if((state_val_39404 === (37))){
var inst_39386 = (state_39403[(2)]);
var state_39403__$1 = state_39403;
var statearr_39447_39487 = state_39403__$1;
(statearr_39447_39487[(2)] = inst_39386);

(statearr_39447_39487[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39404 === (8))){
var inst_39325 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39403__$1 = state_39403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39403__$1,(11),inst_39325);
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
});})(c__34292__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34204__auto__,c__34292__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34205__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34205__auto____0 = (function (){
var statearr_39448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39448[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34205__auto__);

(statearr_39448[(1)] = (1));

return statearr_39448;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34205__auto____1 = (function (state_39403){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_39403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e39449){if((e39449 instanceof Object)){
var ex__34208__auto__ = e39449;
var statearr_39450_39488 = state_39403;
(statearr_39450_39488[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39489 = state_39403;
state_39403 = G__39489;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34205__auto__ = function(state_39403){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34205__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34205__auto____1.call(this,state_39403);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34205__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34205__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto__,msg_hist,msg_names,msg))
})();
var state__34294__auto__ = (function (){var statearr_39451 = f__34293__auto__.call(null);
(statearr_39451[(6)] = c__34292__auto__);

return statearr_39451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto__,msg_hist,msg_names,msg))
);

return c__34292__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34292__auto___39518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto___39518,ch){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto___39518,ch){
return (function (state_39504){
var state_val_39505 = (state_39504[(1)]);
if((state_val_39505 === (1))){
var state_39504__$1 = state_39504;
var statearr_39506_39519 = state_39504__$1;
(statearr_39506_39519[(2)] = null);

(statearr_39506_39519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39505 === (2))){
var state_39504__$1 = state_39504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39504__$1,(4),ch);
} else {
if((state_val_39505 === (3))){
var inst_39502 = (state_39504[(2)]);
var state_39504__$1 = state_39504;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39504__$1,inst_39502);
} else {
if((state_val_39505 === (4))){
var inst_39492 = (state_39504[(7)]);
var inst_39492__$1 = (state_39504[(2)]);
var state_39504__$1 = (function (){var statearr_39507 = state_39504;
(statearr_39507[(7)] = inst_39492__$1);

return statearr_39507;
})();
if(cljs.core.truth_(inst_39492__$1)){
var statearr_39508_39520 = state_39504__$1;
(statearr_39508_39520[(1)] = (5));

} else {
var statearr_39509_39521 = state_39504__$1;
(statearr_39509_39521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39505 === (5))){
var inst_39492 = (state_39504[(7)]);
var inst_39494 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39492);
var state_39504__$1 = state_39504;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39504__$1,(8),inst_39494);
} else {
if((state_val_39505 === (6))){
var state_39504__$1 = state_39504;
var statearr_39510_39522 = state_39504__$1;
(statearr_39510_39522[(2)] = null);

(statearr_39510_39522[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39505 === (7))){
var inst_39500 = (state_39504[(2)]);
var state_39504__$1 = state_39504;
var statearr_39511_39523 = state_39504__$1;
(statearr_39511_39523[(2)] = inst_39500);

(statearr_39511_39523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39505 === (8))){
var inst_39496 = (state_39504[(2)]);
var state_39504__$1 = (function (){var statearr_39512 = state_39504;
(statearr_39512[(8)] = inst_39496);

return statearr_39512;
})();
var statearr_39513_39524 = state_39504__$1;
(statearr_39513_39524[(2)] = null);

(statearr_39513_39524[(1)] = (2));


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
});})(c__34292__auto___39518,ch))
;
return ((function (switch__34204__auto__,c__34292__auto___39518,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34205__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34205__auto____0 = (function (){
var statearr_39514 = [null,null,null,null,null,null,null,null,null];
(statearr_39514[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34205__auto__);

(statearr_39514[(1)] = (1));

return statearr_39514;
});
var figwheel$client$heads_up_plugin_$_state_machine__34205__auto____1 = (function (state_39504){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_39504);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e39515){if((e39515 instanceof Object)){
var ex__34208__auto__ = e39515;
var statearr_39516_39525 = state_39504;
(statearr_39516_39525[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39504);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39526 = state_39504;
state_39504 = G__39526;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34205__auto__ = function(state_39504){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34205__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34205__auto____1.call(this,state_39504);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34205__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34205__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto___39518,ch))
})();
var state__34294__auto__ = (function (){var statearr_39517 = f__34293__auto__.call(null);
(statearr_39517[(6)] = c__34292__auto___39518);

return statearr_39517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto___39518,ch))
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
var c__34292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto__){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto__){
return (function (state_39532){
var state_val_39533 = (state_39532[(1)]);
if((state_val_39533 === (1))){
var inst_39527 = cljs.core.async.timeout.call(null,(3000));
var state_39532__$1 = state_39532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39532__$1,(2),inst_39527);
} else {
if((state_val_39533 === (2))){
var inst_39529 = (state_39532[(2)]);
var inst_39530 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39532__$1 = (function (){var statearr_39534 = state_39532;
(statearr_39534[(7)] = inst_39529);

return statearr_39534;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39532__$1,inst_39530);
} else {
return null;
}
}
});})(c__34292__auto__))
;
return ((function (switch__34204__auto__,c__34292__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34205__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34205__auto____0 = (function (){
var statearr_39535 = [null,null,null,null,null,null,null,null];
(statearr_39535[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34205__auto__);

(statearr_39535[(1)] = (1));

return statearr_39535;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34205__auto____1 = (function (state_39532){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_39532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e39536){if((e39536 instanceof Object)){
var ex__34208__auto__ = e39536;
var statearr_39537_39539 = state_39532;
(statearr_39537_39539[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39536;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39540 = state_39532;
state_39532 = G__39540;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34205__auto__ = function(state_39532){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34205__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34205__auto____1.call(this,state_39532);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34205__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34205__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto__))
})();
var state__34294__auto__ = (function (){var statearr_39538 = f__34293__auto__.call(null);
(statearr_39538[(6)] = c__34292__auto__);

return statearr_39538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto__))
);

return c__34292__auto__;
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
var c__34292__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34292__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__34293__auto__ = (function (){var switch__34204__auto__ = ((function (c__34292__auto__,figwheel_version,temp__4657__auto__){
return (function (state_39547){
var state_val_39548 = (state_39547[(1)]);
if((state_val_39548 === (1))){
var inst_39541 = cljs.core.async.timeout.call(null,(2000));
var state_39547__$1 = state_39547;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39547__$1,(2),inst_39541);
} else {
if((state_val_39548 === (2))){
var inst_39543 = (state_39547[(2)]);
var inst_39544 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39545 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39544);
var state_39547__$1 = (function (){var statearr_39549 = state_39547;
(statearr_39549[(7)] = inst_39543);

return statearr_39549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39547__$1,inst_39545);
} else {
return null;
}
}
});})(c__34292__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__34204__auto__,c__34292__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34205__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34205__auto____0 = (function (){
var statearr_39550 = [null,null,null,null,null,null,null,null];
(statearr_39550[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34205__auto__);

(statearr_39550[(1)] = (1));

return statearr_39550;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34205__auto____1 = (function (state_39547){
while(true){
var ret_value__34206__auto__ = (function (){try{while(true){
var result__34207__auto__ = switch__34204__auto__.call(null,state_39547);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34207__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34207__auto__;
}
break;
}
}catch (e39551){if((e39551 instanceof Object)){
var ex__34208__auto__ = e39551;
var statearr_39552_39554 = state_39547;
(statearr_39552_39554[(5)] = ex__34208__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39547);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39551;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34206__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39555 = state_39547;
state_39547 = G__39555;
continue;
} else {
return ret_value__34206__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34205__auto__ = function(state_39547){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34205__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34205__auto____1.call(this,state_39547);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34205__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34205__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34205__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34205__auto__;
})()
;})(switch__34204__auto__,c__34292__auto__,figwheel_version,temp__4657__auto__))
})();
var state__34294__auto__ = (function (){var statearr_39553 = f__34293__auto__.call(null);
(statearr_39553[(6)] = c__34292__auto__);

return statearr_39553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34294__auto__);
});})(c__34292__auto__,figwheel_version,temp__4657__auto__))
);

return c__34292__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39556){
var map__39557 = p__39556;
var map__39557__$1 = ((((!((map__39557 == null)))?((((map__39557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39557):map__39557);
var file = cljs.core.get.call(null,map__39557__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39557__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39557__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39559 = "";
var G__39559__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39559),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39559);
var G__39559__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39559__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39559__$1);
if(cljs.core.truth_((function (){var and__28420__auto__ = line;
if(cljs.core.truth_(and__28420__auto__)){
return column;
} else {
return and__28420__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39559__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39559__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39560){
var map__39561 = p__39560;
var map__39561__$1 = ((((!((map__39561 == null)))?((((map__39561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39561.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39561):map__39561);
var ed = map__39561__$1;
var formatted_exception = cljs.core.get.call(null,map__39561__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39561__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39561__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39563_39567 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39564_39568 = null;
var count__39565_39569 = (0);
var i__39566_39570 = (0);
while(true){
if((i__39566_39570 < count__39565_39569)){
var msg_39571 = cljs.core._nth.call(null,chunk__39564_39568,i__39566_39570);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39571);

var G__39572 = seq__39563_39567;
var G__39573 = chunk__39564_39568;
var G__39574 = count__39565_39569;
var G__39575 = (i__39566_39570 + (1));
seq__39563_39567 = G__39572;
chunk__39564_39568 = G__39573;
count__39565_39569 = G__39574;
i__39566_39570 = G__39575;
continue;
} else {
var temp__4657__auto___39576 = cljs.core.seq.call(null,seq__39563_39567);
if(temp__4657__auto___39576){
var seq__39563_39577__$1 = temp__4657__auto___39576;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39563_39577__$1)){
var c__29271__auto___39578 = cljs.core.chunk_first.call(null,seq__39563_39577__$1);
var G__39579 = cljs.core.chunk_rest.call(null,seq__39563_39577__$1);
var G__39580 = c__29271__auto___39578;
var G__39581 = cljs.core.count.call(null,c__29271__auto___39578);
var G__39582 = (0);
seq__39563_39567 = G__39579;
chunk__39564_39568 = G__39580;
count__39565_39569 = G__39581;
i__39566_39570 = G__39582;
continue;
} else {
var msg_39583 = cljs.core.first.call(null,seq__39563_39577__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39583);

var G__39584 = cljs.core.next.call(null,seq__39563_39577__$1);
var G__39585 = null;
var G__39586 = (0);
var G__39587 = (0);
seq__39563_39567 = G__39584;
chunk__39564_39568 = G__39585;
count__39565_39569 = G__39586;
i__39566_39570 = G__39587;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39588){
var map__39589 = p__39588;
var map__39589__$1 = ((((!((map__39589 == null)))?((((map__39589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39589.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39589):map__39589);
var w = map__39589__$1;
var message = cljs.core.get.call(null,map__39589__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__39591 = cljs.core.seq.call(null,plugins);
var chunk__39592 = null;
var count__39593 = (0);
var i__39594 = (0);
while(true){
if((i__39594 < count__39593)){
var vec__39595 = cljs.core._nth.call(null,chunk__39592,i__39594);
var k = cljs.core.nth.call(null,vec__39595,(0),null);
var plugin = cljs.core.nth.call(null,vec__39595,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39601 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39591,chunk__39592,count__39593,i__39594,pl_39601,vec__39595,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39601.call(null,msg_hist);
});})(seq__39591,chunk__39592,count__39593,i__39594,pl_39601,vec__39595,k,plugin))
);
} else {
}

var G__39602 = seq__39591;
var G__39603 = chunk__39592;
var G__39604 = count__39593;
var G__39605 = (i__39594 + (1));
seq__39591 = G__39602;
chunk__39592 = G__39603;
count__39593 = G__39604;
i__39594 = G__39605;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39591);
if(temp__4657__auto__){
var seq__39591__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39591__$1)){
var c__29271__auto__ = cljs.core.chunk_first.call(null,seq__39591__$1);
var G__39606 = cljs.core.chunk_rest.call(null,seq__39591__$1);
var G__39607 = c__29271__auto__;
var G__39608 = cljs.core.count.call(null,c__29271__auto__);
var G__39609 = (0);
seq__39591 = G__39606;
chunk__39592 = G__39607;
count__39593 = G__39608;
i__39594 = G__39609;
continue;
} else {
var vec__39598 = cljs.core.first.call(null,seq__39591__$1);
var k = cljs.core.nth.call(null,vec__39598,(0),null);
var plugin = cljs.core.nth.call(null,vec__39598,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39610 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39591,chunk__39592,count__39593,i__39594,pl_39610,vec__39598,k,plugin,seq__39591__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39610.call(null,msg_hist);
});})(seq__39591,chunk__39592,count__39593,i__39594,pl_39610,vec__39598,k,plugin,seq__39591__$1,temp__4657__auto__))
);
} else {
}

var G__39611 = cljs.core.next.call(null,seq__39591__$1);
var G__39612 = null;
var G__39613 = (0);
var G__39614 = (0);
seq__39591 = G__39611;
chunk__39592 = G__39612;
count__39593 = G__39613;
i__39594 = G__39614;
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
var G__39616 = arguments.length;
switch (G__39616) {
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

var seq__39617_39622 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39618_39623 = null;
var count__39619_39624 = (0);
var i__39620_39625 = (0);
while(true){
if((i__39620_39625 < count__39619_39624)){
var msg_39626 = cljs.core._nth.call(null,chunk__39618_39623,i__39620_39625);
figwheel.client.socket.handle_incoming_message.call(null,msg_39626);

var G__39627 = seq__39617_39622;
var G__39628 = chunk__39618_39623;
var G__39629 = count__39619_39624;
var G__39630 = (i__39620_39625 + (1));
seq__39617_39622 = G__39627;
chunk__39618_39623 = G__39628;
count__39619_39624 = G__39629;
i__39620_39625 = G__39630;
continue;
} else {
var temp__4657__auto___39631 = cljs.core.seq.call(null,seq__39617_39622);
if(temp__4657__auto___39631){
var seq__39617_39632__$1 = temp__4657__auto___39631;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39617_39632__$1)){
var c__29271__auto___39633 = cljs.core.chunk_first.call(null,seq__39617_39632__$1);
var G__39634 = cljs.core.chunk_rest.call(null,seq__39617_39632__$1);
var G__39635 = c__29271__auto___39633;
var G__39636 = cljs.core.count.call(null,c__29271__auto___39633);
var G__39637 = (0);
seq__39617_39622 = G__39634;
chunk__39618_39623 = G__39635;
count__39619_39624 = G__39636;
i__39620_39625 = G__39637;
continue;
} else {
var msg_39638 = cljs.core.first.call(null,seq__39617_39632__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39638);

var G__39639 = cljs.core.next.call(null,seq__39617_39632__$1);
var G__39640 = null;
var G__39641 = (0);
var G__39642 = (0);
seq__39617_39622 = G__39639;
chunk__39618_39623 = G__39640;
count__39619_39624 = G__39641;
i__39620_39625 = G__39642;
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
var len__29601__auto___39647 = arguments.length;
var i__29602__auto___39648 = (0);
while(true){
if((i__29602__auto___39648 < len__29601__auto___39647)){
args__29608__auto__.push((arguments[i__29602__auto___39648]));

var G__39649 = (i__29602__auto___39648 + (1));
i__29602__auto___39648 = G__39649;
continue;
} else {
}
break;
}

var argseq__29609__auto__ = ((((0) < args__29608__auto__.length))?(new cljs.core.IndexedSeq(args__29608__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29609__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39644){
var map__39645 = p__39644;
var map__39645__$1 = ((((!((map__39645 == null)))?((((map__39645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39645.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39645):map__39645);
var opts = map__39645__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39643){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39643));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39650){if((e39650 instanceof Error)){
var e = e39650;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39650;

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
return (function (p__39651){
var map__39652 = p__39651;
var map__39652__$1 = ((((!((map__39652 == null)))?((((map__39652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39652):map__39652);
var msg_name = cljs.core.get.call(null,map__39652__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1573832706182
