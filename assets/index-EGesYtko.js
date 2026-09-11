var y_=Object.defineProperty;var w_=(n,i,s)=>i in n?y_(n,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[i]=s;var Es=(n,i,s)=>w_(n,typeof i!="symbol"?i+"":i,s);function x_(n,i){for(var s=0;s<i.length;s++){const o=i[s];if(typeof o!="string"&&!Array.isArray(o)){for(const d in o)if(d!=="default"&&!(d in n)){const f=Object.getOwnPropertyDescriptor(o,d);f&&Object.defineProperty(n,d,f.get?f:{enumerable:!0,get:()=>o[d]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function s(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(d){if(d.ep)return;d.ep=!0;const f=s(d);fetch(d.href,f)}})();var __=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function f1(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var um={exports:{}},Zc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wb;function S_(){if(Wb)return Zc;Wb=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(o,d,f){var g=null;if(f!==void 0&&(g=""+f),d.key!==void 0&&(g=""+d.key),"key"in d){f={};for(var w in d)w!=="key"&&(f[w]=d[w])}else f=d;return d=f.ref,{$$typeof:n,type:o,key:g,ref:d!==void 0?d:null,props:f}}return Zc.Fragment=i,Zc.jsx=s,Zc.jsxs=s,Zc}var Jb;function k_(){return Jb||(Jb=1,um.exports=S_()),um.exports}var p=k_(),dm={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function C_(){if(ty)return ue;ty=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),C=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),E=Symbol.for("react.view_transition"),j=Symbol.iterator;function D(B){return B===null||typeof B!="object"?null:(B=j&&B[j]||B["@@iterator"],typeof B=="function"?B:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nt=Object.assign,Et={};function ut(B,st,yt){this.props=B,this.context=st,this.refs=Et,this.updater=yt||Q}ut.prototype.isReactComponent={},ut.prototype.setState=function(B,st){if(typeof B!="object"&&typeof B!="function"&&B!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,B,st,"setState")},ut.prototype.forceUpdate=function(B){this.updater.enqueueForceUpdate(this,B,"forceUpdate")};function Ct(){}Ct.prototype=ut.prototype;function rt(B,st,yt){this.props=B,this.context=st,this.refs=Et,this.updater=yt||Q}var dt=rt.prototype=new Ct;dt.constructor=rt,nt(dt,ut.prototype),dt.isPureReactComponent=!0;var xt=Array.isArray;function wt(){}var vt={H:null,A:null,T:null,S:null},ot=Object.prototype.hasOwnProperty;function gt(B,st,yt){var $=yt.ref;return{$$typeof:n,type:B,key:st,ref:$!==void 0?$:null,props:yt}}function Qt(B,st){return gt(B.type,st,B.props)}function oe(B){return typeof B=="object"&&B!==null&&B.$$typeof===n}function de(B){var st={"=":"=0",":":"=2"};return"$"+B.replace(/[=:]/g,function(yt){return st[yt]})}var Ne=/\/+/g;function ve(B,st){return typeof B=="object"&&B!==null&&B.key!=null?de(""+B.key):st.toString(36)}function zt(B){switch(B.status){case"fulfilled":return B.value;case"rejected":throw B.reason;default:switch(typeof B.status=="string"?B.then(wt,wt):(B.status="pending",B.then(function(st){B.status==="pending"&&(B.status="fulfilled",B.value=st)},function(st){B.status==="pending"&&(B.status="rejected",B.reason=st)})),B.status){case"fulfilled":return B.value;case"rejected":throw B.reason}}throw B}function qt(B,st,yt,$,bt){var pt=typeof B;(pt==="undefined"||pt==="boolean")&&(B=null);var lt=!1;if(B===null)lt=!0;else switch(pt){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(B.$$typeof){case n:case i:lt=!0;break;case z:return lt=B._init,qt(lt(B._payload),st,yt,$,bt)}}if(lt)return bt=bt(B),lt=$===""?"."+ve(B,0):$,xt(bt)?(yt="",lt!=null&&(yt=lt.replace(Ne,"$&/")+"/"),qt(bt,st,yt,"",function(ye){return ye})):bt!=null&&(oe(bt)&&(bt=Qt(bt,yt+(bt.key==null||B&&B.key===bt.key?"":(""+bt.key).replace(Ne,"$&/")+"/")+lt)),st.push(bt)),1;lt=0;var jt=$===""?".":$+":";if(xt(B))for(var At=0;At<B.length;At++)$=B[At],pt=jt+ve($,At),lt+=qt($,st,yt,pt,bt);else if(At=D(B),typeof At=="function")for(B=At.call(B),At=0;!($=B.next()).done;)$=$.value,pt=jt+ve($,At++),lt+=qt($,st,yt,pt,bt);else if(pt==="object"){if(typeof B.then=="function")return qt(zt(B),st,yt,$,bt);throw st=String(B),Error("Objects are not valid as a React child (found: "+(st==="[object Object]"?"object with keys {"+Object.keys(B).join(", ")+"}":st)+"). If you meant to render a collection of children, use an array instead.")}return lt}function Lt(B,st,yt){if(B==null)return B;var $=[],bt=0;return qt(B,$,"","",function(pt){return st.call(yt,pt,bt++)}),$}function ie(B){if(B._status===-1){var st=B._result,yt=st();yt.then(function($){(B._status===0||B._status===-1)&&(B._status=1,B._result=$,yt.status===void 0&&(yt.status="fulfilled",yt.value=$))},function($){(B._status===0||B._status===-1)&&(B._status=2,B._result=$,yt.status===void 0&&(yt.status="rejected",yt.reason=$))}),B._status===-1&&(B._status=0,B._result=yt)}if(B._status===1)return B._result.default;throw B._result}var re=typeof reportError=="function"?reportError:function(B){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var st=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof B=="object"&&B!==null&&typeof B.message=="string"?String(B.message):String(B),error:B});if(!window.dispatchEvent(st))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",B);return}console.error(B)};function Gt(B){var st=vt.T,yt={};yt.types=st!==null?st.types:null,vt.T=yt;try{var $=B(),bt=vt.S;bt!==null&&bt(yt,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(wt,re)}catch(pt){re(pt)}finally{st!==null&&yt.types!==null&&(st.types=yt.types),vt.T=st}}function Ee(B){var st=vt.T;if(st!==null){var yt=st.types;yt===null?st.types=[B]:yt.indexOf(B)===-1&&yt.push(B)}else Gt(Ee.bind(null,B))}var va={map:Lt,forEach:function(B,st,yt){Lt(B,function(){st.apply(this,arguments)},yt)},count:function(B){var st=0;return Lt(B,function(){st++}),st},toArray:function(B){return Lt(B,function(st){return st})||[]},only:function(B){if(!oe(B))throw Error("React.Children.only expected to receive a single React element child.");return B}};return ue.Activity=S,ue.Children=va,ue.Component=ut,ue.Fragment=s,ue.Profiler=d,ue.PureComponent=rt,ue.StrictMode=o,ue.Suspense=x,ue.ViewTransition=E,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=vt,ue.__COMPILER_RUNTIME={__proto__:null,c:function(B){return vt.H.useMemoCache(B)}},ue.addTransitionType=Ee,ue.cache=function(B){return function(){return B.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(B,st,yt){if(B==null)throw Error("The argument must be a React element, but you passed "+B+".");var $=nt({},B.props),bt=B.key;if(st!=null)for(pt in st.key!==void 0&&(bt=""+st.key),st)!ot.call(st,pt)||pt==="key"||pt==="__self"||pt==="__source"||pt==="ref"&&st.ref===void 0||($[pt]=st[pt]);var pt=arguments.length-2;if(pt===1)$.children=yt;else if(1<pt){for(var lt=Array(pt),jt=0;jt<pt;jt++)lt[jt]=arguments[jt+2];$.children=lt}return gt(B.type,bt,$)},ue.createContext=function(B){return B={$$typeof:g,_currentValue:B,_currentValue2:B,_threadCount:0,Provider:null,Consumer:null},B.Provider=B,B.Consumer={$$typeof:f,_context:B},B},ue.createElement=function(B,st,yt){var $,bt={},pt=null;if(st!=null)for($ in st.key!==void 0&&(pt=""+st.key),st)ot.call(st,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(bt[$]=st[$]);var lt=arguments.length-2;if(lt===1)bt.children=yt;else if(1<lt){for(var jt=Array(lt),At=0;At<lt;At++)jt[At]=arguments[At+2];bt.children=jt}if(B&&B.defaultProps)for($ in lt=B.defaultProps,lt)bt[$]===void 0&&(bt[$]=lt[$]);return gt(B,pt,bt)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(B){return{$$typeof:w,render:B}},ue.isValidElement=oe,ue.lazy=function(B){return{$$typeof:z,_payload:{_status:-1,_result:B},_init:ie}},ue.memo=function(B,st){return{$$typeof:C,type:B,compare:st===void 0?null:st}},ue.startTransition=Gt,ue.unstable_useCacheRefresh=function(){return vt.H.useCacheRefresh()},ue.use=function(B){return vt.H.use(B)},ue.useActionState=function(B,st,yt){return vt.H.useActionState(B,st,yt)},ue.useCallback=function(B,st){return vt.H.useCallback(B,st)},ue.useContext=function(B){return vt.H.useContext(B)},ue.useDebugValue=function(){},ue.useDeferredValue=function(B,st){return vt.H.useDeferredValue(B,st)},ue.useEffect=function(B,st){return vt.H.useEffect(B,st)},ue.useEffectEvent=function(B){return vt.H.useEffectEvent(B)},ue.useId=function(){return vt.H.useId()},ue.useImperativeHandle=function(B,st,yt){return vt.H.useImperativeHandle(B,st,yt)},ue.useInsertionEffect=function(B,st){return vt.H.useInsertionEffect(B,st)},ue.useLayoutEffect=function(B,st){return vt.H.useLayoutEffect(B,st)},ue.useMemo=function(B,st){return vt.H.useMemo(B,st)},ue.useOptimistic=function(B,st){return vt.H.useOptimistic(B,st)},ue.useReducer=function(B,st,yt){return vt.H.useReducer(B,st,yt)},ue.useRef=function(B){return vt.H.useRef(B)},ue.useState=function(B){return vt.H.useState(B)},ue.useSyncExternalStore=function(B,st,yt){return vt.H.useSyncExternalStore(B,st,yt)},ue.useTransition=function(){return vt.H.useTransition()},ue.version="19.3.0",ue}var ey;function ag(){return ey||(ey=1,dm.exports=C_()),dm.exports}var Bt=ag();const A_=f1(Bt),T_=x_({__proto__:null,default:A_},[Bt]);var hm={exports:{}},Wc={},fm={exports:{}},pm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function E_(){return ny||(ny=1,(function(n){function i(zt,qt){var Lt=zt.length;zt.push(qt);t:for(;0<Lt;){var ie=Lt-1>>>1,re=zt[ie];if(0<d(re,qt))zt[ie]=qt,zt[Lt]=re,Lt=ie;else break t}}function s(zt){return zt.length===0?null:zt[0]}function o(zt){if(zt.length===0)return null;var qt=zt[0],Lt=zt.pop();if(Lt!==qt){zt[0]=Lt;t:for(var ie=0,re=zt.length,Gt=re>>>1;ie<Gt;){var Ee=2*(ie+1)-1,va=zt[Ee],B=Ee+1,st=zt[B];if(0>d(va,Lt))B<re&&0>d(st,va)?(zt[ie]=st,zt[B]=Lt,ie=B):(zt[ie]=va,zt[Ee]=Lt,ie=Ee);else if(B<re&&0>d(st,Lt))zt[ie]=st,zt[B]=Lt,ie=B;else break t}}return qt}function d(zt,qt){var Lt=zt.sortIndex-qt.sortIndex;return Lt!==0?Lt:zt.id-qt.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;n.unstable_now=function(){return f.now()}}else{var g=Date,w=g.now();n.unstable_now=function(){return g.now()-w}}var x=[],C=[],z=1,S=null,E=3,j=!1,D=!1,Q=!1,nt=!1,Et=typeof setTimeout=="function"?setTimeout:null,ut=typeof clearTimeout=="function"?clearTimeout:null,Ct=typeof setImmediate<"u"?setImmediate:null;function rt(zt){for(var qt=s(C);qt!==null;){if(qt.callback===null)o(C);else if(qt.startTime<=zt)o(C),qt.sortIndex=qt.expirationTime,i(x,qt);else break;qt=s(C)}}function dt(zt){if(Q=!1,rt(zt),!D)if(s(x)!==null)D=!0,xt||(xt=!0,oe());else{var qt=s(C);qt!==null&&ve(dt,qt.startTime-zt)}}var xt=!1,wt=-1,vt=5,ot=-1;function gt(){return nt?!0:!(n.unstable_now()-ot<vt)}function Qt(){if(nt=!1,xt){var zt=n.unstable_now();ot=zt;var qt=!0;try{t:{D=!1,Q&&(Q=!1,ut(wt),wt=-1),j=!0;var Lt=E;try{e:{for(rt(zt),S=s(x);S!==null&&!(S.expirationTime>zt&&gt());){var ie=S.callback;if(typeof ie=="function"){S.callback=null,E=S.priorityLevel;var re=ie(S.expirationTime<=zt);if(zt=n.unstable_now(),typeof re=="function"){S.callback=re,rt(zt),qt=!0;break e}S===s(x)&&o(x),rt(zt)}else o(x);S=s(x)}if(S!==null)qt=!0;else{var Gt=s(C);Gt!==null&&ve(dt,Gt.startTime-zt),qt=!1}}break t}finally{S=null,E=Lt,j=!1}qt=void 0}}finally{qt?oe():xt=!1}}}var oe;if(typeof Ct=="function")oe=function(){Ct(Qt)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,Ne=de.port2;de.port1.onmessage=Qt,oe=function(){Ne.postMessage(null)}}else oe=function(){Et(Qt,0)};function ve(zt,qt){wt=Et(function(){zt(n.unstable_now())},qt)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(zt){zt.callback=null},n.unstable_forceFrameRate=function(zt){0>zt||125<zt?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):vt=0<zt?Math.floor(1e3/zt):5},n.unstable_getCurrentPriorityLevel=function(){return E},n.unstable_next=function(zt){switch(E){case 1:case 2:case 3:var qt=3;break;default:qt=E}var Lt=E;E=qt;try{return zt()}finally{E=Lt}},n.unstable_requestPaint=function(){nt=!0},n.unstable_runWithPriority=function(zt,qt){switch(zt){case 1:case 2:case 3:case 4:case 5:break;default:zt=3}var Lt=E;E=zt;try{return qt()}finally{E=Lt}},n.unstable_scheduleCallback=function(zt,qt,Lt){var ie=n.unstable_now();switch(typeof Lt=="object"&&Lt!==null?(Lt=Lt.delay,Lt=typeof Lt=="number"&&0<Lt?ie+Lt:ie):Lt=ie,zt){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=Lt+re,zt={id:z++,callback:qt,priorityLevel:zt,startTime:Lt,expirationTime:re,sortIndex:-1},Lt>ie?(zt.sortIndex=Lt,i(C,zt),s(x)===null&&zt===s(C)&&(Q?(ut(wt),wt=-1):Q=!0,ve(dt,Lt-ie))):(zt.sortIndex=re,i(x,zt),D||j||(D=!0,xt||(xt=!0,oe()))),zt},n.unstable_shouldYield=gt,n.unstable_wrapCallback=function(zt){var qt=E;return function(){var Lt=E;E=qt;try{return zt.apply(this,arguments)}finally{E=Lt}}}})(pm)),pm}var ay;function z_(){return ay||(ay=1,fm.exports=E_()),fm.exports}var mm={exports:{}},ta={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function N_(){if(iy)return ta;iy=1;var n=ag();function i(z){var S="https://react.dev/errors/"+z;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)S+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+z+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),g=Symbol.for("react.optimistic_key");function w(z,S,E){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:j==null?null:j===g?g:""+j,children:z,containerInfo:S,implementation:E}}var x=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(z,S){if(z==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return ta.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ta.browser=function(z){return{$$typeof:f,_reason:z}},ta.createPortal=function(z,S){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(i(299));return w(z,S,null,E)},ta.flushSync=function(z){var S=x.T,E=o.p;try{if(x.T=null,o.p=2,z)return z()}finally{x.T=S,o.p=E,o.d.f()}},ta.preconnect=function(z,S){typeof z=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,o.d.C(z,S))},ta.prefetchDNS=function(z){typeof z=="string"&&o.d.D(z)},ta.preinit=function(z,S){if(typeof z=="string"&&S&&typeof S.as=="string"){var E=S.as,j=C(E,S.crossOrigin),D=typeof S.integrity=="string"?S.integrity:void 0,Q=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;E==="style"?o.d.S(z,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:j,integrity:D,fetchPriority:Q}):E==="script"&&o.d.X(z,{crossOrigin:j,integrity:D,fetchPriority:Q,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},ta.preinitModule=function(z,S){if(typeof z=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var E=C(S.as,S.crossOrigin);o.d.M(z,{crossOrigin:E,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})}}else S==null&&o.d.M(z)},ta.preload=function(z,S){if(typeof z=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var E=S.as,j=C(E,S.crossOrigin);o.d.L(z,E,{crossOrigin:j,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},ta.preloadModule=function(z,S){if(typeof z=="string")if(S){var E=C(S.as,S.crossOrigin);o.d.m(z,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:E,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0})}else o.d.m(z)},ta.requestFormReset=function(z){o.d.r(z)},ta.unstable_batchedUpdates=function(z,S){return z(S)},ta.useFormState=function(z,S,E){return x.H.useFormState(z,S,E)},ta.useFormStatus=function(){return x.H.useHostTransitionStatus()},ta.version="19.3.0",ta}var ry;function O_(){if(ry)return mm.exports;ry=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),mm.exports=N_(),mm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function j_(){if(sy)return Wc;sy=1;var n=z_(),i=ag(),s=O_();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)e+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var e=t,a=e;a&&!a.alternate;)e=a,(e.flags&4098)!==0&&(t=e.return),a=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function w(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x(t){if(f(t)!==t)throw Error(o(188))}function C(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(o(188));return e!==t?null:t}for(var a=t,r=e;;){var l=a.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===a)return x(l),t;if(u===r)return x(l),e;u=u.sibling}throw Error(o(188))}if(a.return!==r.return)a=l,r=u;else{for(var b=!1,A=l.child;A;){if(A===a){b=!0,a=l,r=u;break}if(A===r){b=!0,r=l,a=u;break}A=A.sibling}if(!b){for(A=u.child;A;){if(A===a){b=!0,a=u,r=l;break}if(A===r){b=!0,r=u,a=l;break}A=A.sibling}if(!b)throw Error(o(189))}}if(a.alternate!==r)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?t:e}function z(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=z(t),e!==null)return e;t=t.sibling}return null}function S(t,e,a,r,l,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,l,u)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&S(t.child,e,a,r,l,u))return!0;t=t.sibling}return!1}function E(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function j(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function D(t){var e=[null,null],a=E(t);return a===null||Q(e,t,a.child,{foundSelf:!1}),e}function Q(t,e,a,r){for(;a!==null;){if(a===e)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&Q(t,e,a.child,r))return!0;a=a.sibling}return!1}function nt(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(o(559))}}var Et=null,ut=null;function Ct(t,e,a){return t===a?!0:t===e?(Et=t,!0):!1}function rt(t,e,a){return t===a?(ut=t,!1):t===e?(ut!==null&&(Et=t),!0):!1}function dt(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function xt(t,e,a){for(var r=0,l=t;l;l=a(l))r++;l=0;for(var u=e;u;u=a(u))l++;for(;0<r-l;)t=a(t),r--;for(;0<l-r;)e=a(e),l--;for(;r--;){if(t===e||e!==null&&t===e.alternate)return t;t=a(t),e=a(e)}return null}var wt=Object.assign,vt=Symbol.for("react.element"),ot=Symbol.for("react.transitional.element"),gt=Symbol.for("react.portal"),Qt=Symbol.for("react.fragment"),oe=Symbol.for("react.strict_mode"),de=Symbol.for("react.profiler"),Ne=Symbol.for("react.consumer"),ve=Symbol.for("react.context"),zt=Symbol.for("react.forward_ref"),qt=Symbol.for("react.suspense"),Lt=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),Gt=Symbol.for("react.activity"),Ee=Symbol.for("react.legacy_hidden"),va=Symbol.for("react.memo_cache_sentinel"),B=Symbol.for("react.view_transition"),st=Symbol.for("react.recoverable"),yt=Symbol.iterator;function $(t){return t===null||typeof t!="object"?null:(t=yt&&t[yt]||t["@@iterator"],typeof t=="function"?t:null)}var bt=Symbol.for("react.client.reference");function pt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===bt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Qt:return"Fragment";case de:return"Profiler";case oe:return"StrictMode";case qt:return"Suspense";case Lt:return"SuspenseList";case Gt:return"Activity";case B:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case gt:return"Portal";case ve:return t.displayName||"Context";case Ne:return(t._context.displayName||"Context")+".Consumer";case zt:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ie:return e=t.displayName||null,e!==null?e:pt(t.type)||"Memo";case re:e=t._payload,t=t._init;try{return pt(t(e))}catch{}}return null}var lt=Array.isArray,jt=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,At=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ye={pending:!1,data:null,method:null,action:null},Ue=[],He=-1;function Ln(t){return{current:t}}function sn(t){0>He||(t.current=Ue[He],Ue[He]=null,He--)}function De(t,e){He++,Ue[He]=t.current,t.current=e}var Fe=Ln(null),or=Ln(null),jn=Ln(null),Bs=Ln(null);function Di(t,e){switch(De(jn,e),De(or,t),De(Fe,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?ob(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=ob(e),t=lb(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}sn(Fe),De(Fe,t)}function lr(){sn(Fe),sn(or),sn(jn)}function cr(t){var e=t.memoizedState;e!==null&&(jl._currentValue=e.memoizedState,De(Bs,t)),e=Fe.current;var a=lb(e,t.type);e!==a&&(De(or,t),De(Fe,a))}function Bn(t){or.current===t&&(sn(Fe),sn(or)),Bs.current===t&&(sn(Bs),jl._currentValue=ye)}var di,$o;function ba(t){if(di===void 0)try{throw Error()}catch(a){var e=a.stack.trim().match(/\n( *(at )?)/);di=e&&e[1]||"",$o=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+di+t+$o}var Us=!1;function Fr(t,e){if(!t||Us)return"";Us=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var ft=function(){throw Error()};if(Object.defineProperty(ft.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ft,[])}catch(Rt){var V=Rt}Reflect.construct(t,[],ft)}else{try{ft.call()}catch(Rt){V=Rt}ft=!1;try{var et=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ft=!0,new t}finally{ft&&(et!==void 0?Object.defineProperty(t.prototype,"props",et):delete t.prototype.props)}}}else{try{throw Error()}catch(Rt){V=Rt}(ft=t())&&typeof ft.catch=="function"&&ft.catch(function(){})}}catch(Rt){if(Rt&&V&&typeof Rt.stack=="string")return[Rt.stack,V.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),b=u[0],A=u[1];if(b&&A){var M=b.split(`
`),P=A.split(`
`);for(l=r=0;r<M.length&&!M[r].includes("DetermineComponentFrameRoot");)r++;for(;l<P.length&&!P[l].includes("DetermineComponentFrameRoot");)l++;if(r===M.length||l===P.length)for(r=M.length-1,l=P.length-1;1<=r&&0<=l&&M[r]!==P[l];)l--;for(;1<=r&&0<=l;r--,l--)if(M[r]!==P[l]){if(r!==1||l!==1)do if(r--,l--,0>l||M[r]!==P[l]){var it=`
`+M[r].replace(" at new "," at ");return t.displayName&&it.includes("<anonymous>")&&(it=it.replace("<anonymous>",t.displayName)),it}while(1<=r&&0<=l);break}}}finally{Us=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ba(a):""}function ur(t,e){switch(t.tag){case 26:case 27:case 5:return ba(t.type);case 16:return ba("Lazy");case 13:return t.child!==e&&e!==null?ba("Suspense Fallback"):ba("Suspense");case 19:return ba("SuspenseList");case 0:case 15:return Fr(t.type,!1);case 11:return Fr(t.type.render,!1);case 1:return Fr(t.type,!0);case 31:return ba("Activity");case 30:return ba("ViewTransition");default:return""}}function Hs(t){try{var e="",a=null;do e+=ur(t,a),a=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Is=Object.prototype.hasOwnProperty,Ta=n.unstable_scheduleCallback,Ft=n.unstable_cancelCallback,qs=n.unstable_shouldYield,dr=n.unstable_requestPaint,Un=n.unstable_now,$t=n.unstable_getCurrentPriorityLevel,Lo=n.unstable_ImmediatePriority,Jl=n.unstable_UserBlockingPriority,Yr=n.unstable_NormalPriority,Ru=n.unstable_LowPriority,Bo=n.unstable_IdlePriority,Yh=n.log,Ph=n.unstable_setDisableYieldValue,Xa=null,_n=null;function Qa(t){if(typeof Yh=="function"&&Ph(t),_n&&typeof _n.setStrictMode=="function")try{_n.setStrictMode(Xa,t)}catch{}}var Hn=Math.clz32?Math.clz32:Xh,Pe=Math.log,Sn=Math.LN2;function Xh(t){return t>>>=0,t===0?32:31-(Pe(t)/Sn|0)|0}var hr=256,fr=262144,pr=4194304;function mr(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ea(t,e,a){var r=t.pendingLanes;if(r===0)return 0;var l=0,u=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var A=r&134217727;return A!==0?(r=A&~u,r!==0?l=mr(r):(b&=A,b!==0?l=mr(b):a||(a=A&~t,a!==0&&(l=mr(a))))):(A=r&~u,A!==0?l=mr(A):b!==0?l=mr(b):a||(a=r&~t,a!==0&&(l=mr(a)))),l===0?0:e!==0&&e!==l&&(e&u)===0&&(u=l&-l,a=e&-e,u>=a||u===32&&(a&4194048)!==0)?e:l}function Za(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function hi(t,e){(e&8)!==0&&(e|=e&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=e;0<a;){var r=31-Hn(a),l=1<<r;e|=t[r],a&=~l}return e}function Uo(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Mu(){var t=pr;return pr<<=1,(pr&62914560)===0&&(pr=4194304),t}function Wa(t){for(var e=[],a=0;31>a;a++)e.push(t);return e}function Pr(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function gr(t,e,a,r,l,u){var b=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,M=t.expirationTimes,P=t.hiddenUpdates;for(a=b&~a;0<a;){var it=31-Hn(a),ft=1<<it;A[it]=0,M[it]=-1;var V=P[it];if(V!==null)for(P[it]=null,it=0;it<V.length;it++){var et=V[it];et!==null&&(et.lane&=-536870913)}a&=~ft}r!==0&&tc(t,r,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(b&~e))}function tc(t,e,a){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-Hn(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Ho(t,e){var a=t.entangledLanes|=e;for(t=t.entanglements;a;){var r=31-Hn(a),l=1<<r;l&e|t[r]&e&&(t[r]|=e),a&=~l}}function We(t,e){var a=e&-e;return a=(a&42)!==0?1:fi(a),(a&(t.suspendedLanes|e))!==0?0:a}function fi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function za(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ec(){var t=At.p;return t!==0?t:(t=window.event,t===void 0?32:Gb(t.type))}function Vs(t,e){var a=At.p;try{return At.p=t,e()}finally{At.p=a}}var Na=Math.random().toString(36).slice(2),wn="__reactFiber$"+Na,hn="__reactProps$"+Na,vr="__reactContainer$"+Na,Ks="__reactEvents$"+Na,$u="__reactListeners$"+Na,we="__reactHandles$"+Na,nc="__reactResources$"+Na,Xr="__reactMarker$"+Na,br="__reactLoad$"+Na;function Ri(t){delete t[wn],delete t[hn],delete t[$u],delete t[we]}function Mi(t){var e;if(e=t[wn])return e;for(var a=t.parentNode;a;){if(e=a[vr]||a[wn]){if(a=e.alternate,e.child!==null||a!==null&&a.child!==null)for(t=Cb(t);t!==null;){if(a=t[wn])return a;t=Cb(t)}return e}t=a,a=t.parentNode}return null}function yr(t){if(t=t[wn]||t[vr]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Qr(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function ze(t){var e=t[nc];return e||(e=t[nc]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Je(t){t[Xr]=!0}function Zr(t){t[br]=void 0}var wr=new Set,Io={};function pi(t,e){mi(t,e),mi(t+"Capture",e)}function mi(t,e){for(Io[t]=e,t=0;t<e.length;t++)wr.add(e[t])}var Lu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Gs={},ac={};function Qh(t){return Is.call(ac,t)?!0:Is.call(Gs,t)?!1:Lu.test(t)?ac[t]=!0:(Gs[t]=!0,!1)}var Vt=!1;function ic(){var t=Vt;return Vt=!1,t}function qo(t,e,a){if(Qh(e))if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,a)}}function Vo(t,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,a)}}function on(t,e,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(e,a,r)}}function kn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function $i(t,e,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(b){a=""+b,u.call(this,b)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(b){a=""+b},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ko(t){if(!t._valueTracker){var e=Fs(t)?"checked":"value";t._valueTracker=$i(t,e,""+t[e])}}function rc(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var a=e.getValue(),r="";return t&&(r=Fs(t)?t.checked?"true":"false":t.value),t=r,t!==a?(e.setValue(t),!0):!1}var Cn=/[\n"\\]/g;function tn(t){return t.replace(Cn,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function xr(t,e,a,r,l,u,b,A){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),e!=null?b==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+kn(e)):t.value!==""+kn(e)&&(t.value=""+kn(e)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),e!=null?b==="number"&&t.value==e?Ps(t,kn(t.value)):Ps(t,kn(e)):a!=null?Ps(t,kn(a)):r!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+kn(A):t.removeAttribute("name")}function Ys(t,e,a,r,l,u,b,A){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Ko(t);return}a=a!=null?""+kn(a):"",e=e!=null?""+kn(e):a,A||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=A?t.checked:!!r,t.defaultChecked=!!r,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),Ko(t)}function Ps(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function ca(t,e,a,r){if(t=t.options,e){e={};for(var l=0;l<a.length;l++)e["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=e.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+kn(a),e=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function Bu(t,e,a){if(e!=null&&(e=""+kn(e),e!==t.value&&(t.value=e),a==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=a!=null?""+kn(a):""}function Oa(t,e,a,r){if(e==null){if(r!=null){if(a!=null)throw Error(o(92));if(lt(r)){if(1<r.length)throw Error(o(93));r=r[0]}a=r}a==null&&(a=""),e=a}a=kn(e),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Ko(t)}function Li(t,e){if(e){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=e;return}}t.textContent=e}var Uu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Go(t,e,a){var r=e.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,a):typeof a!="number"||a===0||Uu.has(e)?e==="float"?t.cssFloat=a:t[e]=(""+a).trim():t[e]=a+"px"}function Wr(t,e,a){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Vt=!0);for(var l in e)r=e[l],e.hasOwnProperty(l)&&a[l]!==r&&(Go(t,l,r),Vt=!0)}else for(var u in e)e.hasOwnProperty(u)&&Go(t,u,e[u])}function Xs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Bi(t){return Zh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ja(){}var sc=null;function Jr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gi=null,Ui=null;function Iu(t){var e=yr(t);if(e&&(t=e.stateNode)){var a=t[hn]||null;t:switch(t=e.stateNode,e.type){case"input":if(xr(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),e=a.name,a.type==="radio"&&e!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+tn(""+e)+'"][type="radio"]'),e=0;e<a.length;e++){var r=a[e];if(r!==t&&r.form===t.form){var l=r[hn]||null;if(!l)throw Error(o(90));xr(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<a.length;e++)r=a[e],r.form===t.form&&rc(r)}break t;case"textarea":Bu(t,a.value,a.defaultValue);break t;case"select":e=a.value,e!=null&&ca(t,!!a.multiple,e,!1)}}}var oc=!1;function qu(t,e,a){if(oc)return t(e,a);oc=!0;try{var r=t(e);return r}finally{if(oc=!1,(gi!==null||Ui!==null)&&(Kd(),gi&&(e=gi,t=Ui,Ui=gi=null,Iu(e),t)))for(e=0;e<t.length;e++)Iu(t[e])}}function _r(t,e){var a=t.stateNode;if(a===null)return null;var r=a[hn]||null;if(r===null)return null;a=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(o(231,e,typeof a));return a}var ja=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fo=!1;if(ja)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Fo=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Fo=!1}var Da=null,ts=null,Qs=null;function Vu(){if(Qs)return Qs;var t,e=ts,a=e.length,r,l="value"in Da?Da.value:Da.textContent,u=l.length;for(t=0;t<a&&e[t]===l[t];t++);var b=a-t;for(r=1;r<=b&&e[a-r]===l[u-r];r++);return Qs=l.slice(t,1<r?1-r:void 0)}function vi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ii(){return!0}function Yo(){return!1}function Dn(t){function e(a,r,l,u,b){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=b,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(u):u[A]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Ii:Yo,this.isPropagationStopped=Yo,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ii)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ii)},persist:function(){},isPersistent:Ii}),e}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},es=Dn(ti),fn=wt({},ti,{view:0,detail:0}),Zs=Dn(fn),Sr,Po,qi,Ws=wt({},fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qi&&(qi&&t.type==="mousemove"?(Sr=t.screenX-qi.screenX,Po=t.screenY-qi.screenY):Po=Sr=0,qi=t),Sr)},movementY:function(t){return"movementY"in t?t.movementY:Po}}),lc=Dn(Ws),Xo=wt({},Ws,{dataTransfer:0}),cc=Dn(Xo),kr=wt({},fn,{relatedTarget:0}),Js=Dn(kr),uc=wt({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),Qo=Dn(uc),dc=wt({},ti,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ku=Dn(dc),Wh=wt({},ti,{data:0}),Zo=Dn(Wh),Wo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fc(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=hc[t])?!!e[t]:!1}function pc(){return fc}var Gu=wt({},fn,{key:function(t){if(t.key){var e=Wo[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(t){return t.type==="keypress"?vi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tf=Dn(Gu),Fu=wt({},Ws,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mc=Dn(Fu),ef=wt({},ti,{submitter:0}),Yu=Dn(ef),gc=wt({},fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),Pu=Dn(gc),Xu=wt({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),nf=Dn(Xu),af=wt({},Ws,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),rf=Dn(af),Jo=wt({},ti,{newState:0,oldState:0,source:0}),bi=Dn(Jo),ln=[9,13,27,32],ns=ja&&"CompositionEvent"in window,ei=null;ja&&"documentMode"in document&&(ei=document.documentMode);var sf=ja&&"TextEvent"in window&&!ei,tl=ja&&(!ns||ei&&8<ei&&11>=ei),vc=" ",Vi=!1;function el(t,e){switch(t){case"keyup":return ln.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ua=!1;function Qu(t,e){switch(t){case"compositionend":return Cr(e);case"keypress":return e.which!==32?null:(Vi=!0,vc);case"textInput":return t=e.data,t===vc&&Vi?null:t;default:return null}}function c(t,e){if(ua)return t==="compositionend"||!ns&&el(t,e)?(t=Vu(),Qs=ts=Da=null,ua=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tl&&e.locale!=="ko"?null:e.data;default:return null}}var h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function m(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!h[t.type]:e==="textarea"}function y(t,e,a,r){gi?Ui?Ui.push(r):Ui=[r]:gi=r,e=Qd(e,"onChange"),0<e.length&&(a=new es("onChange","change",null,a,r),t.push({event:a,listeners:e}))}var _=null,k=null;function N(t){eb(t,0)}function O(t){var e=Qr(t);if(rc(e))return t}function H(t,e){if(t==="change")return e}var Z=!1;if(ja){var q;if(ja){var U="oninput"in document;if(!U){var I=document.createElement("div");I.setAttribute("oninput","return;"),U=typeof I.oninput=="function"}q=U}else q=!1;Z=q&&(!document.documentMode||9<document.documentMode)}function X(){_&&(_.detachEvent("onpropertychange",K),k=_=null)}function K(t){if(t.propertyName==="value"&&O(k)){var e=[];y(e,k,t,Jr(t)),qu(N,e)}}function G(t,e,a){t==="focusin"?(X(),_=e,k=a,_.attachEvent("onpropertychange",K)):t==="focusout"&&X()}function F(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return O(k)}function at(t,e){if(t==="click")return O(e)}function tt(t,e){if(t==="input"||t==="change")return O(e)}function ct(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var mt=typeof Object.is=="function"?Object.is:ct;function _t(t,e){if(mt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var a=Object.keys(t),r=Object.keys(e);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!Is.call(e,l)||!mt(t[l],e[l]))return!1}return!0}function Nt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tt(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ut(t,e){var a=Tt(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=e&&r>=e)return{node:a,offset:e-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Tt(a)}}function Ot(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ot(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function It(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Nt(t.document);e instanceof t.HTMLIFrameElement;){try{var a=typeof e.contentWindow.location.href=="string"}catch{a=!1}if(a)t=e.contentWindow;else break;e=Nt(t.document)}return e}function St(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var se=ja&&"documentMode"in document&&11>=document.documentMode,Jt=null,le=null,he=null,Pn=!1;function ce(t,e,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Pn||Jt==null||Jt!==Nt(r)||(r=Jt,"selectionStart"in r&&St(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),he&&_t(he,r)||(he=r,r=Qd(le,"onSelect"),0<r.length&&(e=new es("onSelect","select",null,e,a),t.push({event:e,listeners:r}),e.target=Jt)))}function en(t,e){var a={};return a[t.toLowerCase()]=e.toLowerCase(),a["Webkit"+t]="webkit"+e,a["Moz"+t]="moz"+e,a}var cn={animationend:en("Animation","AnimationEnd"),animationiteration:en("Animation","AnimationIteration"),animationstart:en("Animation","AnimationStart"),transitionrun:en("Transition","TransitionRun"),transitionstart:en("Transition","TransitionStart"),transitioncancel:en("Transition","TransitionCancel"),transitionend:en("Transition","TransitionEnd")},as={},In={};ja&&(In=document.createElement("div").style,"AnimationEvent"in window||(delete cn.animationend.animation,delete cn.animationiteration.animation,delete cn.animationstart.animation),"TransitionEvent"in window||delete cn.transitionend.transition);function da(t){if(as[t])return as[t];if(!cn[t])return t;var e=cn[t],a;for(a in e)if(e.hasOwnProperty(a)&&a in In)return as[t]=e[a];return t}var nl=da("animationend"),Tg=da("animationiteration"),Eg=da("animationstart"),Ew=da("transitionrun"),zw=da("transitionstart"),Nw=da("transitioncancel"),zg=da("transitionend"),Ng=new Map,of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");of.push("scrollEnd");function yi(t,e){Ng.set(t,e),pi(e,[t])}var Ow=0;function Ar(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=Si.identifierPrefix;var a=Ow++;return t="_"+t+"t_"+a.toString(32)+"_",e.autoName=t}function Og(t){if(t==null||typeof t=="string")return t;var e=null,a=_l;if(a!==null)for(var r=0;r<a.length;r++){var l=t[a[r]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??t.default}function Tr(t,e){return t=Og(t),e=Og(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Zu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],al=0,lf=0;function Wu(){for(var t=al,e=lf=al=0;e<t;){var a=ni[e];ni[e++]=null;var r=ni[e];ni[e++]=null;var l=ni[e];ni[e++]=null;var u=ni[e];if(ni[e++]=null,r!==null&&l!==null){var b=r.pending;b===null?l.next=l:(l.next=b.next,b.next=l),r.pending=l}u!==0&&jg(a,l,u)}}function Ju(t,e,a,r){ni[al++]=t,ni[al++]=e,ni[al++]=a,ni[al++]=r,lf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function cf(t,e,a,r){return Ju(t,e,a,r),td(t)}function to(t,e){return Ju(t,null,null,e),td(t)}function jg(t,e,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,u=t.return;u!==null;)u.childLanes|=a,r=u.alternate,r!==null&&(r.childLanes|=a),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&e!==null&&(l=31-Hn(a),t=u.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=a|536870912),u):null}function td(t){if(50<Uc)throw Uc=0,Vd=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var il={};function jw(t,e,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ya(t,e,a,r){return new jw(t,e,a,r)}function uf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Er(t,e){var a=t.alternate;return a===null?(a=ya(t.tag,e,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=e,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,e=t.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Dg(t,e){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,e=a.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function ed(t,e,a,r,l,u){var b=0;if(r=t,typeof r=="function")uf(r)&&(b=1);else if(typeof r=="string")b=s_(t,a,Fe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Gt:return t=ya(31,a,e,l),t.elementType=Gt,t.lanes=u,t;case Qt:return eo(a.children,l,u,e);case oe:b=8,l|=24;break;case de:return t=ya(12,a,e,l|2),t.elementType=de,t.lanes=u,t;case qt:return t=ya(13,a,e,l),t.elementType=qt,t.lanes=u,t;case Lt:return t=ya(19,a,e,l),t.elementType=Lt,t.lanes=u,t;case Ee:case B:return t=l|32,t=ya(30,a,e,t),t.elementType=B,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ve:b=10;break t;case Ne:b=9;break t;case zt:b=11;break t;case ie:b=14;break t;case re:b=16,r=null;break t}b=29,a=Error(o(130,t===null?"null":typeof t,"")),r=null}return e=ya(b,a,e,l),e.elementType=t,e.type=r,e.lanes=u,e}function eo(t,e,a,r){return t=ya(7,t,r,e),t.lanes=a,t}function df(t,e,a){return t=ya(6,t,null,e),t.lanes=a,t}function Rg(t){var e=ya(18,null,null,0);return e.stateNode=t,e}function hf(t,e,a){return e=ya(4,t.children!==null?t.children:[],t.key,e),e.lanes=a,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Mg=new WeakMap;function ai(t,e){if(typeof t=="object"&&t!==null){var a=Mg.get(t);return a!==void 0?a:(e={value:t,source:e,stack:Hs(e)},Mg.set(t,e),e)}return{value:t,source:e,stack:Hs(e)}}var rl=[],sl=0,nd=null,bc=0,ii=[],ri=0,is=null,Ki=1,Gi="";function zr(t,e){rl[sl++]=bc,rl[sl++]=nd,nd=t,bc=e}function $g(t,e,a){ii[ri++]=Ki,ii[ri++]=Gi,ii[ri++]=is,is=t;var r=Ki;t=Gi;var l=32-Hn(r)-1;r&=~(1<<l),a+=1;var u=32-Hn(e)+l;if(30<u){var b=l-l%5;u=(r&(1<<b)-1).toString(32),r>>=b,l-=b,Ki=1<<32-Hn(e)+l|a<<l|r,Gi=u+t}else Ki=1<<u|a<<l|r,Gi=t}function ad(t){t.return!==null&&(zr(t,1),$g(t,1,0))}function ff(t){for(;t===nd;)nd=rl[--sl],rl[sl]=null,bc=rl[--sl],rl[sl]=null;for(;t===is;)is=ii[--ri],ii[ri]=null,Gi=ii[--ri],ii[ri]=null,Ki=ii[--ri],ii[ri]=null}function Lg(t,e){ii[ri++]=Ki,ii[ri++]=Gi,ii[ri++]=is,Ki=e.id,Gi=e.overflow,is=t}var qn=null,Xe=null,be=!1,rs=null,si=!1,pf=Error(o(519));function ss(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yc(ai(e,t)),pf}function Bg(t){var e=t.stateNode,a=t.type,r=t.memoizedProps;switch(e[wn]=t,e[hn]=r,a){case"dialog":_e("cancel",e),_e("close",e);break;case"iframe":case"object":case"embed":_e("load",e);break;case"video":case"audio":for(a=0;a<Ic.length;a++)_e(Ic[a],e);break;case"source":_e("error",e);break;case"img":case"image":case"link":_e("error",e),_e("load",e);break;case"details":_e("toggle",e);break;case"input":_e("invalid",e),Ys(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_e("invalid",e);break;case"textarea":_e("invalid",e),Oa(e,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||e.textContent===""+a||r.suppressHydrationWarning===!0||rb(e.textContent,a)?(r.popover!=null&&(_e("beforetoggle",e),_e("toggle",e)),r.onScroll!=null&&_e("scroll",e),r.onScrollEnd!=null&&_e("scrollend",e),r.onClick!=null&&(e.onclick=Ja),e=!0):e=!1,e||ss(t,!0)}function id(t){for(qn=t.return;qn;)switch(qn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:qn=qn.return}}function ol(t){if(t!==qn)return!1;if(!be)return id(t),be=!0,!1;var e=t.tag,a;if((a=e!==3&&e!==27)&&((a=e===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Kp(t.type,t.memoizedProps)),a=!a),a&&Xe&&ss(t),id(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Xe=kb(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Xe=kb(t)}else e===27?(e=Xe,_s(t.type)?(t=Jp,Jp=null,Xe=t):Xe=e):Xe=qn?li(t.stateNode.nextSibling):null;return!0}function no(){Xe=qn=null,be=!1}function mf(){var t=rs;return t!==null&&(_a===null?_a=t:_a.push.apply(_a,t),rs=null),t}function yc(t){rs===null?rs=[t]:rs.push(t)}var gf=Ln(null),ao=null,Nr=null;function os(t,e,a){De(gf,e._currentValue),e._currentValue=a}function Or(t){t._currentValue=gf.current,sn(gf)}function rd(t,e,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===a)break;t=t.return}}function vf(t,e,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var b=l.child;u=u.firstContext;t:for(;u!==null;){var A=u;u=l;for(var M=0;M<e.length;M++)if(A.context===e[M]){u.lanes|=a,A=u.alternate,A!==null&&(A.lanes|=a),rd(u.return,a,t),r||(b=null);break t}u=A.next}}else if(l.tag===18){if(b=l.return,b===null)throw Error(o(341));b.lanes|=a,u=b.alternate,u!==null&&(u.lanes|=a),rd(b,a,t),b=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,b=l.alternate,b!==null&&(b.lanes|=a),rd(l.return,a,t),b=l.child,b=b!==null?b.sibling:null):b=l.child;if(b!==null)b.return=l;else for(b=l;b!==null;){if(b===t){b=null;break}if(l=b.sibling,l!==null){l.return=b.return,b=l;break}b=b.return}l=b}}function io(t,e,a,r){t=null;for(var l=e,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var b=l.alternate;if(b===null)throw Error(o(387));if(b=b.memoizedProps,b!==null){var A=l.type;mt(l.pendingProps.value,b.value)||(t!==null?t.push(A):t=[A])}}else if(l===Bs.current){if(b=l.alternate,b===null)throw Error(o(387));b.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(jl):t=[jl])}l=l.return}return t!==null&&vf(e,t,a,r),e.flags|=262144,t!==null}function sd(t){for(t=t.firstContext;t!==null;){if(!mt(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ro(t){ao=t,Nr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Xn(t){return Ug(ao,t)}function od(t,e){return ao===null&&ro(t),Ug(t,e)}function Ug(t,e){var a=e._currentValue;if(e={context:e,memoizedValue:a,next:null},Nr===null){if(t===null)throw Error(o(308));Nr=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Nr=Nr.next=e;return a}var Dw=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(a){return a()})}},Rw=n.unstable_scheduleCallback,Mw=n.unstable_NormalPriority,An={$$typeof:ve,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bf(){return{controller:new Dw,data:new Map,refCount:0}}function wc(t){t.refCount--,t.refCount===0&&Rw(Mw,function(){t.controller.abort()})}function Hg(t,e){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<e.length;t++){var r=e[t];a.indexOf(r)===-1&&a.push(r)}}}var xc=null;function $w(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var _c=null,yf=0,so=0,ll=null;function Lw(t,e){if(_c===null){var a=_c=[];yf=0,so=Mp(),ll={status:"pending",value:void 0,then:function(r){a.push(r)}}}return yf++,e.then(Ig,Ig),e}function Ig(){if(--yf===0&&(xc=null,_c!==null)){ll!==null&&(ll.status="fulfilled");var t=_c;_c=null,so=0,ll=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function Bw(t,e){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<a.length;l++)(0,a[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var qg=jt.S;jt.S=function(t,e){if(R0=Un(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&Lw(t,e),xc!==null)for(var a=Al;a!==null;)Hg(a,xc),a=a.next;if(a=t.types,a!==null){for(var r=Al;r!==null;)Hg(r,a),r=r.next;if(so!==0){r=xc,r===null&&(r=xc=[]);for(var l=0;l<a.length;l++){var u=a[l];r.indexOf(u)===-1&&r.push(u)}}}qg!==null&&qg(t,e)};var oo=Ln(null);function wf(){var t=oo.current;return t!==null?t:Ye.pooledCache}function ld(t,e){e===null?De(oo,oo.current):De(oo,e.pool)}function Vg(){var t=wf();return t===null?null:{parent:An._currentValue,pool:t}}var cl=Error(o(460)),xf=Error(o(474)),cd=Error(o(542)),ud={then:function(){}};function Kg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Gg(t,e,a){switch(a=t[a],a===void 0?t.push(e):a!==e&&(e.then(Ja,Ja),e=a),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Yg(t),t===void 0&&!("reason"in e)?Error(o(600)):t;default:if(typeof e.status=="string")e.then(Ja,Ja);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Yg(t),t}throw co=e,cl}}function lo(t){try{var e=t._init;return e(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(co=a,cl):a}}var co=null;function Fg(){if(co===null)throw Error(o(459));var t=co;return co=null,t}function Yg(t){if(t===cl||t===cd)throw Error(o(483))}var ul=null,Sc=0;function dd(t){var e=Sc;return Sc+=1,ul===null&&(ul=[]),Gg(ul,t,e)}function ls(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function hd(t,e){throw e.$$typeof===vt?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function Pg(t){function e(Y,L){if(t){var W=Y.deletions;W===null?(Y.deletions=[L],Y.flags|=16):W.push(L)}}function a(Y,L){if(!t)return null;for(;L!==null;)e(Y,L),L=L.sibling;return null}function r(Y){for(var L=new Map;Y!==null;)Y.key===null?L.set(Y.index,Y):L.set(Y.key,Y),Y=Y.sibling;return L}function l(Y,L){return Y=Er(Y,L),Y.index=0,Y.sibling=null,Y}function u(Y,L,W){return Y.index=W,t?(W=Y.alternate,W!==null?(W=W.index,W<L?(Y.flags|=2,L):W):(Y.flags|=134217730,L)):(Y.flags|=1048576,L)}function b(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function A(Y,L,W,ht){return L===null||L.tag!==6?(L=df(W,Y.mode,ht),L.return=Y,L):(L=l(L,W),L.return=Y,L)}function M(Y,L,W,ht){var Ht=W.type;return Ht===Qt?(Y=it(Y,L,W.props.children,ht,W.key),ls(Y,W),Y):L!==null&&(L.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===re&&lo(Ht)===L.type)?(L=l(L,W.props),ls(L,W),L.return=Y,L):(L=ed(W.type,W.key,W.props,null,Y.mode,ht),ls(L,W),L.return=Y,L)}function P(Y,L,W,ht){return L===null||L.tag!==4||L.stateNode.containerInfo!==W.containerInfo||L.stateNode.implementation!==W.implementation?(L=hf(W,Y.mode,ht),L.return=Y,L):(L=l(L,W.children||[]),L.return=Y,L)}function it(Y,L,W,ht,Ht){return L===null||L.tag!==7?(L=eo(W,Y.mode,ht,Ht),L.return=Y,L):(L=l(L,W),L.return=Y,L)}function ft(Y,L,W){if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return L=df(""+L,Y.mode,W),L.return=Y,L;if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ot:return W=ed(L.type,L.key,L.props,null,Y.mode,W),ls(W,L),W.return=Y,W;case gt:return L=hf(L,Y.mode,W),L.return=Y,L;case re:return L=lo(L),ft(Y,L,W)}if(lt(L)||$(L))return L=eo(L,Y.mode,W,null),L.return=Y,L;if(typeof L.then=="function")return ft(Y,dd(L),W);if(L.$$typeof===ve)return ft(Y,od(Y,L),W);hd(Y,L)}return null}function V(Y,L,W,ht){var Ht=L!==null?L.key:null;if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return Ht!==null?null:A(Y,L,""+W,ht);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case ot:return W.key===Ht?M(Y,L,W,ht):null;case gt:return W.key===Ht?P(Y,L,W,ht):null;case re:return W=lo(W),V(Y,L,W,ht)}if(lt(W)||$(W))return Ht!==null?null:it(Y,L,W,ht,null);if(typeof W.then=="function")return V(Y,L,dd(W),ht);if(W.$$typeof===ve)return V(Y,L,od(Y,W),ht);hd(Y,W)}return null}function et(Y,L,W,ht,Ht){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return Y=Y.get(W)||null,A(L,Y,""+ht,Ht);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case ot:return Y=Y.get(ht.key===null?W:ht.key)||null,M(L,Y,ht,Ht);case gt:return Y=Y.get(ht.key===null?W:ht.key)||null,P(L,Y,ht,Ht);case re:return ht=lo(ht),et(Y,L,W,ht,Ht)}if(lt(ht)||$(ht))return Y=Y.get(W)||null,it(L,Y,ht,Ht,null);if(typeof ht.then=="function")return et(Y,L,W,dd(ht),Ht);if(ht.$$typeof===ve)return et(Y,L,W,od(L,ht),Ht);hd(L,ht)}return null}function Rt(Y,L,W,ht){for(var Ht=null,ke=null,Xt=L,ne=L=0,zn=null;Xt!==null&&ne<W.length;ne++){Xt.index>ne?(zn=Xt,Xt=null):zn=Xt.sibling;var Te=V(Y,Xt,W[ne],ht);if(Te===null){Xt===null&&(Xt=zn);break}t&&Xt&&Te.alternate===null&&e(Y,Xt),L=u(Te,L,ne),ke===null?Ht=Te:ke.sibling=Te,ke=Te,Xt=zn}if(ne===W.length)return a(Y,Xt),be&&zr(Y,ne),Ht;if(Xt===null){for(;ne<W.length;ne++)Xt=ft(Y,W[ne],ht),Xt!==null&&(L=u(Xt,L,ne),ke===null?Ht=Xt:ke.sibling=Xt,ke=Xt);return be&&zr(Y,ne),Ht}for(Xt=r(Xt);ne<W.length;ne++)zn=et(Xt,Y,ne,W[ne],ht),zn!==null&&(t&&(Te=zn.alternate,Te!==null&&Xt.delete(Te.key===null?ne:Te.key)),L=u(zn,L,ne),ke===null?Ht=zn:ke.sibling=zn,ke=zn);return t&&Xt.forEach(function(Ts){return e(Y,Ts)}),be&&zr(Y,ne),Ht}function Kt(Y,L,W,ht){if(W==null)throw Error(o(151));for(var Ht=null,ke=null,Xt=L,ne=L=0,zn=null,Te=W.next();Xt!==null&&!Te.done;ne++,Te=W.next()){Xt.index>ne?(zn=Xt,Xt=null):zn=Xt.sibling;var Ts=V(Y,Xt,Te.value,ht);if(Ts===null){Xt===null&&(Xt=zn);break}t&&Xt&&Ts.alternate===null&&e(Y,Xt),L=u(Ts,L,ne),ke===null?Ht=Ts:ke.sibling=Ts,ke=Ts,Xt=zn}if(Te.done)return a(Y,Xt),be&&zr(Y,ne),Ht;if(Xt===null){for(;!Te.done;ne++,Te=W.next())Te=ft(Y,Te.value,ht),Te!==null&&(L=u(Te,L,ne),ke===null?Ht=Te:ke.sibling=Te,ke=Te);return be&&zr(Y,ne),Ht}for(Xt=r(Xt);!Te.done;ne++,Te=W.next())Te=et(Xt,Y,ne,Te.value,ht),Te!==null&&(t&&(zn=Te.alternate,zn!==null&&Xt.delete(zn.key===null?ne:zn.key)),L=u(Te,L,ne),ke===null?Ht=Te:ke.sibling=Te,ke=Te);return t&&Xt.forEach(function(b_){return e(Y,b_)}),be&&zr(Y,ne),Ht}function pe(Y,L,W,ht){if(typeof W=="object"&&W!==null&&W.type===Qt&&W.key===null&&W.props.ref===void 0&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case ot:t:{for(var Ht=W.key;L!==null;){if(L.key===Ht){if(Ht=W.type,Ht===Qt){if(L.tag===7){a(Y,L.sibling),ht=l(L,W.props.children),ls(ht,W),ht.return=Y,Y=ht;break t}}else if(L.elementType===Ht||typeof Ht=="object"&&Ht!==null&&Ht.$$typeof===re&&lo(Ht)===L.type){a(Y,L.sibling),ht=l(L,W.props),ls(ht,W),ht.return=Y,Y=ht;break t}a(Y,L);break}else e(Y,L);L=L.sibling}W.type===Qt?(ht=eo(W.props.children,Y.mode,ht,W.key),ls(ht,W),ht.return=Y,Y=ht):(ht=ed(W.type,W.key,W.props,null,Y.mode,ht),ls(ht,W),ht.return=Y,Y=ht)}return b(Y);case gt:t:{for(Ht=W.key;L!==null;){if(L.key===Ht)if(L.tag===4&&L.stateNode.containerInfo===W.containerInfo&&L.stateNode.implementation===W.implementation){a(Y,L.sibling),ht=l(L,W.children||[]),ht.return=Y,Y=ht;break t}else{a(Y,L);break}else e(Y,L);L=L.sibling}ht=hf(W,Y.mode,ht),ht.return=Y,Y=ht}return b(Y);case re:return W=lo(W),pe(Y,L,W,ht)}if(lt(W))return Rt(Y,L,W,ht);if($(W)){if(Ht=$(W),typeof Ht!="function")throw Error(o(150));return W=Ht.call(W),Kt(Y,L,W,ht)}if(typeof W.then=="function")return pe(Y,L,dd(W),ht);if(W.$$typeof===ve)return pe(Y,L,od(Y,W),ht);hd(Y,W)}return typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint"?(W=""+W,L!==null&&L.tag===6?(a(Y,L.sibling),ht=l(L,W),ht.return=Y,Y=ht):(a(Y,L),ht=df(W,Y.mode,ht),ht.return=Y,Y=ht),b(Y)):a(Y,L)}return function(Y,L,W,ht){try{Sc=0;var Ht=pe(Y,L,W,ht);return ul=null,Ht}catch(Xt){if(Xt===cl||Xt===cd)throw Xt;var ke=ya(29,Xt,null,Y.mode);return ke.lanes=ht,ke.return=Y,ke}finally{}}}var uo=Pg(!0),Xg=Pg(!1),cs=!1;function _f(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Sf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function us(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ds(t,e,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Re&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=td(t),jg(t,null,a),e}return Ju(t,r,e,a),td(t)}function kc(t,e,a){if(e=e.updateQueue,e!==null&&(e=e.shared,(a&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Ho(t,a)}}function kf(t,e){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var b={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?l=u=b:u=u.next=b,a=a.next}while(a!==null);u===null?l=u=e:u=u.next=e}else l=u=e;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=e:t.next=e,a.lastBaseUpdate=e}var Cf=!1;function Cc(){if(Cf){var t=ll;if(t!==null)throw t}}function Ac(t,e,a,r){Cf=!1;var l=t.updateQueue;cs=!1;var u=l.firstBaseUpdate,b=l.lastBaseUpdate,A=l.shared.pending;if(A!==null){l.shared.pending=null;var M=A,P=M.next;M.next=null,b===null?u=P:b.next=P,b=M;var it=t.alternate;it!==null&&(it=it.updateQueue,A=it.lastBaseUpdate,A!==b&&(A===null?it.firstBaseUpdate=P:A.next=P,it.lastBaseUpdate=M))}if(u!==null){var ft=l.baseState;b=0,it=P=M=null,A=u;do{var V=A.lane&-536870913,et=V!==A.lane;if(et?(Se&V)===V:(r&V)===V){V!==0&&V===so&&(Cf=!0),it!==null&&(it=it.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Rt=t,Kt=A;V=e;var pe=a;switch(Kt.tag){case 1:if(Rt=Kt.payload,typeof Rt=="function"){ft=Rt.call(pe,ft,V);break t}ft=Rt;break t;case 3:Rt.flags=Rt.flags&-65537|128;case 0:if(Rt=Kt.payload,V=typeof Rt=="function"?Rt.call(pe,ft,V):Rt,V==null)break t;ft=wt({},ft,V);break t;case 2:cs=!0}}V=A.callback,V!==null&&(t.flags|=64,et&&(t.flags|=8192),et=l.callbacks,et===null?l.callbacks=[V]:et.push(V))}else et={lane:V,tag:A.tag,payload:A.payload,callback:A.callback,next:null},it===null?(P=it=et,M=ft):it=it.next=et,b|=V;if(A=A.next,A===null){if(A=l.shared.pending,A===null)break;et=A,A=et.next,et.next=null,l.lastBaseUpdate=et,l.shared.pending=null}}while(!0);it===null&&(M=ft),l.baseState=M,l.firstBaseUpdate=P,l.lastBaseUpdate=it,u===null&&(l.shared.lanes=0),bs|=b,t.lanes=b,t.memoizedState=ft}}function Qg(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function Zg(t,e){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Qg(a[t],e)}var hs=Ln(null),fd=Ln(0);function Wg(t,e){t=$r,De(fd,t),De(hs,e),$r=t|e.baseLanes}function Af(){De(fd,$r),De(hs,hs.current)}function Tf(){$r=fd.current,sn(hs),sn(fd)}var Qn=Ln(null),ra=null;function fs(t){var e=t.alternate;De(Zn,Zn.current&1),De(Qn,t),ra===null&&(e===null||hs.current!==null||e.memoizedState!==null)&&(ra=t)}function Ef(t){De(Zn,Zn.current),De(Qn,t),ra===null&&(ra=t)}function Jg(t){t.tag===22?(De(Zn,Zn.current),De(Qn,t),ra===null&&(ra=t)):ps()}function ps(){De(Zn,Zn.current),De(Qn,Qn.current)}function Ra(t){sn(Qn),ra===t&&(ra=null),sn(Zn)}var Zn=Ln(0);function Tc(t,e){De(Qn,Qn.current),De(Zn,e)}function zf(t){sn(Zn),sn(Qn),ra===t&&(ra=null)}function pd(t){for(var e=t;e!==null;){if(e.tag===13){var a=e.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zp(a)||Wp(a)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jr=0,fe=null,Ge=null,Tn=null,md=!1,dl=!1,ho=!1,gd=0,Ec=0,hl=null,Uw=0;function pn(){throw Error(o(321))}function Nf(t,e){if(e===null)return!1;for(var a=0;a<e.length&&a<t.length;a++)if(!mt(t[a],e[a]))return!1;return!0}function Of(t,e,a,r,l,u){return jr=u,fe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jt.H=t===null||t.memoizedState===null?$v:Lv,ho=!1,u=a(r,l),ho=!1,dl&&(u=ev(e,a,r,l)),tv(t),u}function tv(t){jt.H=Sd;var e=Ge!==null&&Ge.next!==null;if(jr=0,Tn=Ge=fe=null,md=!1,Ec=0,hl=null,e)throw Error(o(300));t===null||En||(t=t.dependencies,t!==null&&sd(t)&&(En=!0))}function ev(t,e,a,r){fe=t;var l=0;do{if(dl&&(hl=null),Ec=0,dl=!1,25<=l)throw Error(o(301));if(l+=1,Tn=Ge=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}jt.H=Yw,u=e(a,r)}while(dl);return u}function Hw(){var t=jt.H,e=t.useState()[0];return e=typeof e.then=="function"?zc(e):e,t=t.useState()[0],(Ge!==null?Ge.memoizedState:null)!==t&&(fe.flags|=1024),e}function jf(){var t=gd!==0;return gd=0,t}function Df(t,e,a){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~a}function Rf(t){if(md){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}md=!1}jr=0,Tn=Ge=fe=null,dl=!1,Ec=gd=0,hl=null}function ha(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Tn===null?fe.memoizedState=Tn=t:Tn=Tn.next=t,Tn}function xn(){if(Ge===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Ge.next;var e=Tn===null?fe.memoizedState:Tn.next;if(e!==null)Tn=e,Ge=t;else{if(t===null)throw fe.alternate===null?Error(o(467)):Error(o(310));Ge=t,t={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},Tn===null?fe.memoizedState=Tn=t:Tn=Tn.next=t}return Tn}function vd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zc(t){var e=Ec;return Ec+=1,hl===null&&(hl=[]),t=Gg(hl,t,e),e=fe,(Tn===null?e.memoizedState:Tn.next)===null&&(e=e.alternate,jt.H=e===null||e.memoizedState===null?$v:Lv),t}function bd(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return zc(t);if(t.$$typeof===st)return;if(t.$$typeof===ve)return Xn(t)}throw Error(o(438,String(t)))}function Mf(t){var e=null,a=fe.updateQueue;if(a!==null&&(e=a.memoCache),e==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),a===null&&(a=vd(),fe.updateQueue=a),a.memoCache=e,a=e.data[e.index],a===void 0)for(a=e.data[e.index]=Array(t),r=0;r<t;r++)a[r]=va;return e.index++,a}function Dr(t,e){return typeof e=="function"?e(t):e}function yd(t){var e=xn();return $f(e,Ge,t)}function $f(t,e,a){var r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=a;var l=t.baseQueue,u=r.pending;if(u!==null){if(l!==null){var b=l.next;l.next=u.next,u.next=b}e.baseQueue=l=u,r.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{e=l.next;var A=b=null,M=null,P=e,it=!1;do{var ft=P.lane&-536870913;if(ft!==P.lane?(Se&ft)===ft:(jr&ft)===ft){var V=P.revertLane;if(V===0)M!==null&&(M=M.next={lane:0,revertLane:0,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),ft===so&&(it=!0);else if((jr&V)===V){P=P.next,V===so&&(it=!0);continue}else ft={lane:0,revertLane:P.revertLane,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},M===null?(A=M=ft,b=u):M=M.next=ft,fe.lanes|=V,bs|=V;ft=P.action,ho&&a(u,ft),u=P.hasEagerState?P.eagerState:a(u,ft)}else V={lane:ft,revertLane:P.revertLane,gesture:P.gesture,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},M===null?(A=M=V,b=u):M=M.next=V,fe.lanes|=ft,bs|=ft;P=P.next}while(P!==null&&P!==e);if(M===null?b=u:M.next=A,!mt(u,t.memoizedState)&&(En=!0,it&&(a=ll,a!==null)))throw a;t.memoizedState=u,t.baseState=b,t.baseQueue=M,r.lastRenderedState=u}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Lf(t){var e=xn(),a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,u=e.memoizedState;if(l!==null){a.pending=null;var b=l=l.next;do u=t(u,b.action),b=b.next;while(b!==l);mt(u,e.memoizedState)||(En=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),a.lastRenderedState=u}return[u,r]}function nv(t,e,a){var r=fe,l=xn(),u=be;if(u){if(a===void 0)throw Error(o(407));a=a()}else a=e();var b=!mt((Ge||l).memoizedState,a);if(b&&(l.memoizedState=a,En=!0),l=l.queue,Hf(rv.bind(null,r,l,t),[t]),t=l.getSnapshot!==e||b||Tn!==null&&(Tn.memoizedState.tag&1)!==0,fl(t?9:8,{destroy:void 0},iv.bind(null,r,l,a,e),null),t){if(r.flags|=2048,Ye===null)throw Error(o(349));u||(jr&127)!==0||av(r,e,a)}return a}function av(t,e,a){t.flags|=16384,t={getSnapshot:e,value:a},e=fe.updateQueue,e===null?(e=vd(),fe.updateQueue=e,e.stores=[t]):(a=e.stores,a===null?e.stores=[t]:a.push(t))}function iv(t,e,a,r){e.value=a,e.getSnapshot=r,sv(e)&&ov(t)}function rv(t,e,a){return a(function(){sv(e)&&ov(t)})}function sv(t){var e=t.getSnapshot;t=t.value;try{var a=e();return!mt(t,a)}catch{return!0}}function ov(t){var e=to(t,2);e!==null&&Sa(e,t,2)}function Bf(t){var e=ha();if(typeof t=="function"){var a=t;if(t=a(),ho){Qa(!0);try{a()}finally{Qa(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:t},e}function lv(t,e,a,r){return t.baseState=a,$f(t,Ge,typeof r=="function"?r:Dr)}function Iw(t,e,a,r,l){if(_d(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){u.listeners.push(b)}};jt.T!==null?a(!0):u.isTransition=!1,r(u),a=e.pending,a===null?(u.next=e.pending=u,cv(e,u)):(u.next=a.next,e.pending=a.next=u)}}function cv(t,e){var a=e.action,r=e.payload,l=t.state;if(e.isTransition){var u=jt.T,b={};b.types=u!==null?u.types:null,jt.T=b;try{var A=a(l,r),M=jt.S;M!==null&&M(b,A),uv(t,e,A)}catch(P){Uf(t,e,P)}finally{u!==null&&b.types!==null&&(u.types=b.types),jt.T=u}}else try{u=a(l,r),uv(t,e,u)}catch(P){Uf(t,e,P)}}function uv(t,e,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){dv(t,e,r)},function(r){return Uf(t,e,r)}):dv(t,e,a)}function dv(t,e,a){e.status="fulfilled",e.value=a,hv(e),t.state=a,e=t.pending,e!==null&&(a=e.next,a===e?t.pending=null:(a=a.next,e.next=a,cv(t,a)))}function Uf(t,e,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=a,hv(e),e=e.next;while(e!==r)}t.action=null}function hv(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function fv(t,e){return e}function pv(t,e){if(be){var a=Ye.formState;if(a!==null){t:{var r=fe;if(be){if(Xe){e:{for(var l=Xe,u=si;l.nodeType!==8;){if(!u){l=null;break e}if(l=li(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Xe=li(l.nextSibling),r=l.data==="F!";break t}}ss(r)}r=!1}r&&(e=a[0])}}return a=ha(),a.memoizedState=a.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fv,lastRenderedState:e},a.queue=r,a=Dv.bind(null,fe,r),r.dispatch=a,r=Bf(!1),u=Gf.bind(null,fe,!1,r.queue),r=ha(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,a=Iw.bind(null,fe,l,u,a),l.dispatch=a,r.memoizedState=t,[e,a,!1]}function mv(t){var e=xn();return gv(e,Ge,t)}function gv(t,e,a){if(e=$f(t,e,fv)[0],t=yd(Dr)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=zc(e)}catch(b){throw b===cl?cd:b}else r=e;e=xn();var l=e.queue,u=l.dispatch;return a!==e.memoizedState&&(fe.flags|=2048,fl(9,{destroy:void 0},qw.bind(null,l,a),null)),[r,u,t]}function qw(t,e){t.action=e}function vv(t){var e=xn(),a=Ge;if(a!==null)return gv(e,a,t);xn(),e=e.memoizedState,a=xn();var r=a.queue.dispatch;return a.memoizedState=t,[e,r,!1]}function fl(t,e,a,r){return t={tag:t,create:a,deps:r,inst:e,next:null},e=fe.updateQueue,e===null&&(e=vd(),fe.updateQueue=e),a=e.lastEffect,a===null?e.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,e.lastEffect=t),t}function bv(){return xn().memoizedState}function wd(t,e,a,r){var l=ha();fe.flags|=t,l.memoizedState=fl(1|e,{destroy:void 0},a,r===void 0?null:r)}function xd(t,e,a,r){var l=xn();r=r===void 0?null:r;var u=l.memoizedState.inst;Ge!==null&&r!==null&&Nf(r,Ge.memoizedState.deps)?l.memoizedState=fl(e,u,a,r):(fe.flags|=t,l.memoizedState=fl(1|e,u,a,r))}function yv(t,e){wd(8390656,8,t,e)}function Hf(t,e){xd(2048,8,t,e)}function Vw(t){fe.flags|=4;var e=fe.updateQueue;if(e===null)e=vd(),fe.updateQueue=e,e.events=[t];else{var a=e.events;a===null?e.events=[t]:a.push(t)}}function wv(t){var e=xn().memoizedState;return Vw({ref:e,nextImpl:t}),function(){if((Re&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function xv(t,e){return xd(4,2,t,e)}function _v(t,e){return xd(4,4,t,e)}function Sv(t,e){if(typeof e=="function"){t=t();var a=e(t);return function(){typeof a=="function"?a():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function kv(t,e,a){a=a!=null?a.concat([t]):null,xd(4,4,Sv.bind(null,e,t),a)}function If(){}function Cv(t,e){var a=xn();e=e===void 0?null:e;var r=a.memoizedState;return e!==null&&Nf(e,r[1])?r[0]:(a.memoizedState=[t,e],t)}function Av(t,e){var a=xn();e=e===void 0?null:e;var r=a.memoizedState;if(e!==null&&Nf(e,r[1]))return r[0];if(r=t(),ho){Qa(!0);try{t()}finally{Qa(!1)}}return a.memoizedState=[r,e],r}function qf(t,e,a){return a===void 0||(jr&1073741824)!==0&&(Se&261930)===0?t.memoizedState=e:(t.memoizedState=a,t=$0(),fe.lanes|=t,bs|=t,a)}function Tv(t,e,a,r){return mt(a,e)?a:hs.current!==null?(t=qf(t,a,r),mt(t,e)||(En=!0),t):(jr&106)===0||(jr&1073741824)!==0&&(Se&261930)===0?(En=!0,t.memoizedState=a):(t=$0(),fe.lanes|=t,bs|=t,e)}function Ev(t,e,a,r,l){var u=At.p;At.p=u!==0&&8>u?u:8;var b=jt.T,A={};A.types=b!==null?b.types:null,jt.T=A,Gf(t,!1,e,a);try{var M=l(),P=jt.S;if(P!==null&&P(A,M),M!==null&&typeof M=="object"&&typeof M.then=="function"){var it=Bw(M,r);Nc(t,e,it,Ba(t))}else Nc(t,e,r,Ba(t))}catch(ft){Nc(t,e,{then:function(){},status:"rejected",reason:ft},Ba())}finally{At.p=u,b!==null&&A.types!==null&&(b.types=A.types),jt.T=b}}function Kw(){}function Vf(t,e,a,r){if(t.tag!==5)throw Error(o(476));var l=zv(t).queue;Ev(t,l,e,ye,a===null?Kw:function(){return Nv(t),a(r)})}function zv(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ye,baseState:ye,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:ye},next:null};var a={};return e.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Dr,lastRenderedState:a},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function Nv(t){var e=zv(t);e.next===null&&(e=t.alternate.memoizedState),Nc(t,e.next.queue,{},Ba())}function Kf(){return Xn(jl)}function Ov(){return xn().memoizedState}function jv(){return xn().memoizedState}function Gw(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var a=Ba();t=us(a);var r=ds(e,t,a);r!==null&&(Sa(r,e,a),kc(r,e,a)),e={cache:bf()},t.payload=e;return}e=e.return}}function Fw(t,e,a){var r=Ba();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_d(t)?Rv(e,a):(a=cf(t,e,a,r),a!==null&&(Sa(a,t,r),Mv(a,e,r)))}function Dv(t,e,a){var r=Ba();Nc(t,e,a,r)}function Nc(t,e,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_d(t))Rv(e,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var b=e.lastRenderedState,A=u(b,a);if(l.hasEagerState=!0,l.eagerState=A,mt(A,b))return Ju(t,e,l,0),Ye===null&&Wu(),!1}catch{}finally{}if(a=cf(t,e,l,r),a!==null)return Sa(a,t,r),Mv(a,e,r),!0}return!1}function Gf(t,e,a,r){if(r={lane:2,revertLane:Mp(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},_d(t)){if(e)throw Error(o(479))}else e=cf(t,a,r,2),e!==null&&Sa(e,t,2)}function _d(t){var e=t.alternate;return t===fe||e!==null&&e===fe}function Rv(t,e){dl=md=!0;var a=t.pending;a===null?e.next=e:(e.next=a.next,a.next=e),t.pending=e}function Mv(t,e,a){if((a&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,a|=r,e.lanes=a,Ho(t,a)}}var Sd={readContext:Xn,use:bd,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useLayoutEffect:pn,useInsertionEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useSyncExternalStore:pn,useId:pn,useHostTransitionStatus:pn,useFormState:pn,useActionState:pn,useOptimistic:pn,useMemoCache:pn,useCacheRefresh:pn,useEffectEvent:pn},$v={readContext:Xn,use:bd,useCallback:function(t,e){return ha().memoizedState=[t,e===void 0?null:e],t},useContext:Xn,useEffect:yv,useImperativeHandle:function(t,e,a){a=a!=null?a.concat([t]):null,wd(4194308,4,Sv.bind(null,e,t),a)},useLayoutEffect:function(t,e){return wd(4194308,4,t,e)},useInsertionEffect:function(t,e){wd(4,2,t,e)},useMemo:function(t,e){var a=ha();e=e===void 0?null:e;var r=t();if(ho){Qa(!0);try{t()}finally{Qa(!1)}}return a.memoizedState=[r,e],r},useReducer:function(t,e,a){var r=ha();if(a!==void 0){var l=a(e);if(ho){Qa(!0);try{a(e)}finally{Qa(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=Fw.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var e=ha();return t={current:t},e.memoizedState=t},useState:function(t){t=Bf(t);var e=t.queue,a=Dv.bind(null,fe,e);return e.dispatch=a,[t.memoizedState,a]},useDebugValue:If,useDeferredValue:function(t,e){var a=ha();return qf(a,t,e)},useTransition:function(){var t=Bf(!1);return t=Ev.bind(null,fe,t.queue,!0,!1),ha().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,a){var r=fe,l=ha();if(be){if(a===void 0)throw Error(o(407));a=a()}else{if(a=e(),Ye===null)throw Error(o(349));(Se&127)!==0||av(r,e,a)}l.memoizedState=a;var u={value:a,getSnapshot:e};return l.queue=u,yv(rv.bind(null,r,u,t),[t]),r.flags|=2048,fl(9,{destroy:void 0},iv.bind(null,r,u,a,e),null),a},useId:function(){var t=ha(),e=Ye.identifierPrefix;if(be){var a=Gi,r=Ki;a=(r&~(1<<32-Hn(r)-1)).toString(32)+a,e="_"+e+"R_"+a,a=gd++,0<a&&(e+="H"+a.toString(32)),e+="_"}else a=Uw++,e="_"+e+"r_"+a.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Kf,useFormState:pv,useActionState:pv,useOptimistic:function(t){var e=ha();e.memoizedState=e.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=a,e=Gf.bind(null,fe,!0,a),a.dispatch=e,[t,e]},useMemoCache:Mf,useCacheRefresh:function(){return ha().memoizedState=Gw.bind(null,fe)},useEffectEvent:function(t){var e=ha(),a={impl:t};return e.memoizedState=a,function(){if((Re&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Lv={readContext:Xn,use:bd,useCallback:Cv,useContext:Xn,useEffect:Hf,useImperativeHandle:kv,useInsertionEffect:xv,useLayoutEffect:_v,useMemo:Av,useReducer:yd,useRef:bv,useState:function(){return yd(Dr)},useDebugValue:If,useDeferredValue:function(t,e){var a=xn();return Tv(a,Ge.memoizedState,t,e)},useTransition:function(){var t=yd(Dr)[0],e=xn().memoizedState;return[typeof t=="boolean"?t:zc(t),e]},useSyncExternalStore:nv,useId:Ov,useHostTransitionStatus:Kf,useFormState:mv,useActionState:mv,useOptimistic:function(t,e){var a=xn();return lv(a,Ge,t,e)},useMemoCache:Mf,useCacheRefresh:jv,useEffectEvent:wv},Yw={readContext:Xn,use:bd,useCallback:Cv,useContext:Xn,useEffect:Hf,useImperativeHandle:kv,useInsertionEffect:xv,useLayoutEffect:_v,useMemo:Av,useReducer:Lf,useRef:bv,useState:function(){return Lf(Dr)},useDebugValue:If,useDeferredValue:function(t,e){var a=xn();return Ge===null?qf(a,t,e):Tv(a,Ge.memoizedState,t,e)},useTransition:function(){var t=Lf(Dr)[0],e=xn().memoizedState;return[typeof t=="boolean"?t:zc(t),e]},useSyncExternalStore:nv,useId:Ov,useHostTransitionStatus:Kf,useFormState:vv,useActionState:vv,useOptimistic:function(t,e){var a=xn();return Ge!==null?lv(a,Ge,t,e):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Mf,useCacheRefresh:jv,useEffectEvent:wv};function Ff(t,e,a,r){e=t.memoizedState,a=a(r,e),a=a==null?e:wt({},e,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Yf={enqueueSetState:function(t,e,a){t=t._reactInternals;var r=Ba(),l=us(r);l.payload=e,a!=null&&(l.callback=a),e=ds(t,l,r),e!==null&&(Sa(e,t,r),kc(e,t,r))},enqueueReplaceState:function(t,e,a){t=t._reactInternals;var r=Ba(),l=us(r);l.tag=1,l.payload=e,a!=null&&(l.callback=a),e=ds(t,l,r),e!==null&&(Sa(e,t,r),kc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var a=Ba(),r=us(a);r.tag=2,e!=null&&(r.callback=e),e=ds(t,r,a),e!==null&&(Sa(e,t,a),kc(e,t,a))}};function Bv(t,e,a,r,l,u,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,b):e.prototype&&e.prototype.isPureReactComponent?!_t(a,r)||!_t(l,u):!0}function Uv(t,e,a,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(a,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(a,r),e.state!==t&&Yf.enqueueReplaceState(e,e.state,null)}function fo(t,e){var a=e;if("ref"in e){a={};for(var r in e)r!=="ref"&&(a[r]=e[r])}if(t=t.defaultProps){a===e&&(a=wt({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function Hv(t){Zu(t)}function Iv(t){console.error(t)}function qv(t){Zu(t)}function kd(t,e){try{var a=t.onUncaughtError;a(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Vv(t,e,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Pf(t,e,a){return a=us(a),a.tag=3,a.payload={element:null},a.callback=function(){kd(t,e)},a}function Kv(t){return t=us(t),t.tag=3,t}function Gv(t,e,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;t.payload=function(){return l(u)},t.callback=function(){Vv(e,a,r)}}var b=a.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){Vv(e,a,r),typeof l!="function"&&(ys===null?ys=new Set([this]):ys.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function Pw(t,e,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=a.alternate,e!==null&&io(e,a,l,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return ra===null?Gd():a.alternate===null&&mn===0&&(mn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===ud?a.flags|=16384:(e=a.updateQueue,e===null?a.updateQueue=new Set([r]):e.add(r),jp(t,r,l)),!1;case 22:return a.flags|=65536,r===ud?a.flags|=16384:(e=a.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=e):(a=e.retryQueue,a===null?e.retryQueue=new Set([r]):a.add(r)),jp(t,r,l)),!1}throw Error(o(435,a.tag))}return jp(t,r,l),Gd(),!1}if(be)return e=Qn.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==pf&&(t=Error(o(422),{cause:r}),yc(ai(t,a)))):(r!==pf&&(e=Error(o(423),{cause:r}),yc(ai(e,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=ai(r,a),l=Pf(t.stateNode,r,l),kf(t,l),mn!==4&&(mn=2)),!1;var u=Error(o(520),{cause:r});if(u=ai(u,a),Bc===null?Bc=[u]:Bc.push(u),mn!==4&&(mn=2),e===null)return!0;r=ai(r,a),a=e;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=Pf(a.stateNode,r,t),kf(a,t),!1;case 1:if(e=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(ys===null||!ys.has(u))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Kv(l),Gv(l,t,a,r),kf(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Xf=Error(o(461)),En=!1;function Rn(t,e,a,r){e.child=t===null?Xg(e,null,a,r):uo(e,t.child,a,r)}function Fv(t,e,a,r,l){a=a.render;var u=e.ref;if("ref"in r){var b={};for(var A in r)A!=="ref"&&(b[A]=r[A])}else b=r;return ro(e),r=Of(t,e,a,b,u,l),A=jf(),t!==null&&!En?(Df(t,e,l),Rr(t,e,l)):(be&&A&&ad(e),e.flags|=1,Rn(t,e,r,l),e.child)}function Yv(t,e,a,r,l){if(t===null){var u=a.type;return typeof u=="function"&&!uf(u)&&u.defaultProps===void 0&&a.compare===null?(e.tag=15,e.type=u,Pv(t,e,u,r,l)):(t=ed(a.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!ap(t,l)){var b=u.memoizedProps;if(a=a.compare,a=a!==null?a:_t,a(b,r)&&t.ref===e.ref)return Rr(t,e,l)}return e.flags|=1,t=Er(u,r),t.ref=e.ref,t.return=e,e.child=t}function Pv(t,e,a,r,l){if(t!==null){var u=t.memoizedProps;if(_t(u,r)&&t.ref===e.ref)if(En=!1,e.pendingProps=r=u,ap(t,l))(t.flags&131072)!==0&&(En=!0);else return e.lanes=t.lanes,Rr(t,e,l)}return Qf(t,e,a,r,l)}function Xv(t,e,a,r){var l=r.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,t!==null){for(r=e.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,e.child=null;return Qv(t,e,u,a,r)}if((a&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ld(e,u!==null?u.cachePool:null),u!==null?Wg(e,u):Af(),Jg(e);else return r=e.lanes=536870912,Qv(t,e,u!==null?u.baseLanes|a:a,a,r)}else u!==null?(ld(e,u.cachePool),Wg(e,u),ps(),e.memoizedState=null):(t!==null&&ld(e,null),Af(),ps());return Rn(t,e,l,a),e.child}function Oc(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Qv(t,e,a,r,l){var u=wf();return u=u===null?null:{parent:An._currentValue,pool:u},e.memoizedState={baseLanes:a,cachePool:u},t!==null&&ld(e,null),Af(),Jg(e),t!==null&&io(t,e,r,!0),e.childLanes=l,null}function Cd(t,e){return e=Ad({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Zv(t,e,a){return uo(e,t.child,null,a),t=Cd(e,e.pendingProps),t.flags|=2,Ra(e),e.memoizedState=null,t}function Xw(t,e,a){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(be){if(r.mode==="hidden")return t=Cd(e,r),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Oc(null,t);if(Ef(e),(t=Xe)?(t=Sb(t,si),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:is!==null?{id:Ki,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Rg(t),a.return=e,e.child=a,qn=e,Xe=null)):t=null,t===null)throw ss(e);return e.lanes=536870912,null}return Cd(e,r)}var u=t.memoizedState;if(u!==null){var b=u.dehydrated;if(Ef(e),l)if(e.flags&256)e.flags&=-257,e=Zv(t,e,a);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(En||io(t,e,a,!1),l=(a&t.childLanes)!==0,En||l){if(hs.current===null){if(r=Ye,r!==null&&(b=We(r,a),b!==0&&b!==u.retryLane))throw u.retryLane=b,to(t,b),Sa(r,t,b),Xf;Gd()}e=Zv(t,e,a)}else t=u.treeContext,Xe=li(b.nextSibling),qn=e,be=!0,rs=null,si=!1,t!==null&&Lg(e,t),e=Cd(e,r),e.flags|=134221824;return e}return t=Er(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function pl(t,e){var a=e.ref;if(a===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(t===null||t.ref!==a)&&(e.flags|=4194816)}}function Qf(t,e,a,r,l){return ro(e),a=Of(t,e,a,r,void 0,l),r=jf(),t!==null&&!En?(Df(t,e,l),Rr(t,e,l)):(be&&r&&ad(e),e.flags|=1,Rn(t,e,a,l),e.child)}function Wv(t,e,a,r,l,u){return ro(e),e.updateQueue=null,a=ev(e,r,a,l),tv(t),r=jf(),t!==null&&!En?(Df(t,e,u),Rr(t,e,u)):(be&&r&&ad(e),e.flags|=1,Rn(t,e,a,u),e.child)}function Jv(t,e,a,r,l){if(ro(e),e.stateNode===null){var u=il,b=a.contextType;typeof b=="object"&&b!==null&&(u=Xn(b)),u=new a(r,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Yf,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=r,u.state=e.memoizedState,u.refs={},_f(e),b=a.contextType,u.context=typeof b=="object"&&b!==null?Xn(b):il,u.state=e.memoizedState,b=a.getDerivedStateFromProps,typeof b=="function"&&(Ff(e,a,b,r),u.state=e.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(b=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),b!==u.state&&Yf.enqueueReplaceState(u,u.state,null),Ac(e,r,u,l),Cc(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){u=e.stateNode;var A=e.memoizedProps,M=fo(a,A);u.props=M;var P=u.context,it=a.contextType;b=il,typeof it=="object"&&it!==null&&(b=Xn(it));var ft=a.getDerivedStateFromProps;it=typeof ft=="function"||typeof u.getSnapshotBeforeUpdate=="function",A=e.pendingProps!==A,it||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(A||P!==b)&&Uv(e,u,r,b),cs=!1;var V=e.memoizedState;u.state=V,Ac(e,r,u,l),Cc(),P=e.memoizedState,A||V!==P||cs?(typeof ft=="function"&&(Ff(e,a,ft,r),P=e.memoizedState),(M=cs||Bv(e,a,M,r,V,P,b))?(it||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=P),u.props=r,u.state=P,u.context=b,r=M):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,Sf(t,e),b=e.memoizedProps,it=fo(a,b),u.props=it,ft=e.pendingProps,V=u.context,P=a.contextType,M=il,typeof P=="object"&&P!==null&&(M=Xn(P)),A=a.getDerivedStateFromProps,(P=typeof A=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b!==ft||V!==M)&&Uv(e,u,r,M),cs=!1,V=e.memoizedState,u.state=V,Ac(e,r,u,l),Cc();var et=e.memoizedState;b!==ft||V!==et||cs||t!==null&&t.dependencies!==null&&sd(t.dependencies)?(typeof A=="function"&&(Ff(e,a,A,r),et=e.memoizedState),(it=cs||Bv(e,a,it,r,V,et,M)||t!==null&&t.dependencies!==null&&sd(t.dependencies))?(P||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,et,M),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,et,M)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||b===t.memoizedProps&&V===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&V===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=et),u.props=r,u.state=et,u.context=M,r=it):(typeof u.componentDidUpdate!="function"||b===t.memoizedProps&&V===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&V===t.memoizedState||(e.flags|=1024),r=!1)}return u=r,pl(t,e),r=(e.flags&128)!==0,u||r?(u=e.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&r?(e.child=uo(e,t.child,null,l),e.child=uo(e,null,a,l)):Rn(t,e,a,l),e.memoizedState=u.state,t=e.child):t=Rr(t,e,l),t}function t0(t,e,a,r){return no(),e.flags|=256,Rn(t,e,a,r),e.child}var Zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wf(t){return{baseLanes:t,cachePool:Vg()}}function Jf(t,e,a){return t=t!==null?t.childLanes&~a:0,e&&(t|=La),t}function e0(t,e,a){var r=e.pendingProps,l=!1,u=(e.flags&128)!==0,b;if((b=u)||(b=t!==null&&t.memoizedState===null?!1:(Zn.current&2)!==0),b&&(l=!0,e.flags&=-129),b=(e.flags&32)!==0,e.flags&=-33,t===null){if(be){if(l?fs(e):ps(),(t=Xe)?(t=Sb(t,si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:is!==null?{id:Ki,overflow:Gi}:null,retryLane:536870912,hydrationErrors:null},a=Rg(t),a.return=e,e.child=a,qn=e,Xe=null)):t=null,t===null)throw ss(e);return Wp(t)?e.lanes=32:e.lanes=536870912,null}return u=r.children,r=r.fallback,l?(ps(),l=e.mode,u=Ad({mode:"hidden",children:u},l),r=eo(r,l,a,null),u.return=e,r.return=e,u.sibling=r,e.child=u,r=e.child,r.memoizedState=Wf(a),r.childLanes=Jf(t,b,a),e.memoizedState=Zf,Oc(null,r)):(fs(e),tp(e,u))}var A=t.memoizedState;if(A!==null){var M=A.dehydrated;if(M!==null)return Qw(t,e,u,b,r,M,A,a)}return l?(ps(),l=r.fallback,u=e.mode,A=t.child,M=A.sibling,r=Er(A,{mode:"hidden",children:r.children}),r.subtreeFlags=A.subtreeFlags&1206910976,M!==null?l=Er(M,l):(l=eo(l,u,a,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,Oc(null,r),r=e.child,l=t.child.memoizedState,l===null?l=Wf(a):(u=l.cachePool,u!==null?(A=An._currentValue,u=u.parent!==A?{parent:A,pool:A}:u):u=Vg(),l={baseLanes:l.baseLanes|a,cachePool:u}),r.memoizedState=l,r.childLanes=Jf(t,b,a),e.memoizedState=Zf,Oc(t.child,r)):(fs(e),a=t.child,t=a.sibling,a=Er(a,{mode:"visible",children:r.children}),a.return=e,a.sibling=null,t!==null&&(b=e.deletions,b===null?(e.deletions=[t],e.flags|=16):b.push(t)),e.child=a,e.memoizedState=null,a)}function tp(t,e){return e=Ad({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function Ad(t,e){return t=ya(22,t,null,e),t.lanes=0,t}function Td(t,e,a){return uo(e,t.child,null,a),t=tp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Qw(t,e,a,r,l,u,b,A){if(a)return e.flags&256?(fs(e),e.flags&=-257,Td(t,e,A)):e.memoizedState!==null?(ps(),e.child=t.child,e.flags|=128,null):(ps(),u=l.fallback,b=e.mode,l=Ad({mode:"visible",children:l.children},b),u=eo(u,b,A,null),u.flags|=2,l.return=e,u.return=e,l.sibling=u,e.child=l,uo(e,t.child,null,A),l=e.child,l.memoizedState=Wf(A),l.childLanes=Jf(t,r,A),e.memoizedState=Zf,Oc(null,l));if(fs(e),Wp(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var M=r.dgst;return r=M,r!==""&&(l=Error(o(419)),l.stack="",l.digest=r,yc({value:l,source:null,stack:null})),Td(t,e,A)}if(En||io(t,e,A,!1),r=(A&t.childLanes)!==0,En||r){if(hs.current!==null)return Td(t,e,A);if(r=Ye,r!==null&&(l=We(r,A),l!==0&&l!==b.retryLane))throw b.retryLane=l,to(t,l),Sa(r,t,l),Xf;return Zp(u)||Gd(),Td(t,e,A)}return Zp(u)?(e.flags|=192,e.child=t.child,null):(t=b.treeContext,Xe=li(u.nextSibling),qn=e,be=!0,rs=null,si=!1,t!==null&&Lg(e,t),e=tp(e,l.children),e.flags|=134221824,e)}function n0(t,e,a){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),rd(t.return,e,a)}function a0(t){for(var e=null;t!==null;){var a=t.alternate;a!==null&&pd(a)===null&&(e=t),t=t.sibling}return e}function Ed(t,e,a,r,l,u){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:u}:(b.isBackwards=e,b.rendering=null,b.renderingStartTime=0,b.last=r,b.tail=a,b.tailMode=l,b.treeForkCount=u)}function ep(t){var e=t.child;for(t.child=null;e!==null;){var a=e.sibling;e.sibling=t.child,t.child=e,e=a}}function np(t,e,a){var r=e.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var b=Zn.current;if(e.flags&128)return Tc(e,b),null;var A=(b&2)!==0;if(A?(b=b&1|2,e.flags|=128):b&=1,Tc(e,b),l==="backwards"&&t!==null?(ep(t),Rn(t,e,r,a),ep(t)):Rn(t,e,r,a),r=be?bc:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&n0(t,a,e);else if(t.tag===19)n0(t,a,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=a0(e.child),a===null?(l=e.child,e.child=null):(l=a.sibling,a.sibling=null,ep(e)),Ed(e,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(a=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&pd(t)===null){e.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}Ed(e,!0,a,null,u,r);break;case"together":Ed(e,!1,null,null,void 0,r);break;case"independent":e.memoizedState=null;break;default:a=a0(e.child),a===null?(l=e.child,e.child=null):(l=a.sibling,a.sibling=null),Ed(e,!1,l,a,u,r)}return e.child}function i0(t,e,a){var r=e.pendingProps;return os(e,e.type,r.value),Rn(t,e,r.children,a),e.child}function Rr(t,e,a){if(t!==null&&(e.dependencies=t.dependencies),bs|=e.lanes,(a&e.childLanes)===0)if(t!==null){if(io(t,e,a,!1),(a&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,a=Er(t,t.pendingProps),e.child=a,a.return=e;t.sibling!==null;)t=t.sibling,a=a.sibling=Er(t,t.pendingProps),a.return=e;a.sibling=null}return e.child}function ap(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&sd(t)))}function Zw(t,e,a){switch(e.tag){case 3:Di(e,e.stateNode.containerInfo),os(e,An,t.memoizedState.cache),no();break;case 27:case 5:cr(e);break;case 4:Di(e,e.stateNode.containerInfo);break;case 10:os(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,Ef(e),null;break;case 13:var r=e.memoizedState;if(r!==null){if(r.dehydrated!==null)return fs(e),e.flags|=128,null;r=io(t,e,a,!1);var l=e.child.childLanes;return r||(a&l)!==0?e0(t,e,a):(fs(e),t=Rr(t,e,a),t!==null?t.sibling:null)}fs(e);break;case 19:if(e.flags&128)return np(t,e,a);if(l=(t.flags&128)!==0,r=(a&e.childLanes)!==0,r||(io(t,e,a,!1),r=(a&e.childLanes)!==0),l){if(r)return np(t,e,a);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Tc(e,Zn.current),r)break;return null;case 22:return e.lanes=0,Xv(t,e,a,e.pendingProps);case 24:os(e,An,t.memoizedState.cache)}return Rr(t,e,a)}function r0(t,e,a){if(t!==null)if(t.memoizedProps!==e.pendingProps)En=!0;else{if(!ap(t,a)&&(e.flags&128)===0)return En=!1,Zw(t,e,a);En=(t.flags&131072)!==0}else En=!1,be&&(e.flags&1048576)!==0&&$g(e,bc,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=lo(e.elementType),e.type=t,typeof t=="function")uf(t)?(r=fo(t,r),e.tag=1,e=Jv(null,e,t,r,a)):(e.tag=0,e=Qf(null,e,t,r,a));else{if(t!=null){var l=t.$$typeof;if(l===zt){e.tag=11,e=Fv(null,e,t,r,a);break t}else if(l===ie){e.tag=14,e=Yv(null,e,t,r,a);break t}else if(l===ve){e.tag=10,e.type=t,e=i0(null,e,a);break t}}throw e=pt(t)||t,Error(o(306,e,""))}}return e;case 0:return Qf(t,e,e.type,e.pendingProps,a);case 1:return r=e.type,l=fo(r,e.pendingProps),Jv(t,e,r,l,a);case 3:t:{if(Di(e,e.stateNode.containerInfo),t===null)throw Error(o(387));r=e.pendingProps;var u=e.memoizedState;l=u.element,Sf(t,e),Ac(e,r,null,a);var b=e.memoizedState;if(r=b.cache,os(e,An,r),r!==u.cache&&vf(e,[An],a,!0),Cc(),r=b.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:b.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=t0(t,e,r,a);break t}else if(r!==l){l=ai(Error(o(424)),e),yc(l),e=t0(t,e,r,a);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Xe=li(t.firstChild),qn=e,be=!0,rs=null,si=!0,a=Xg(e,null,r,a),e.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(no(),r===l){e=Rr(t,e,a);break t}Rn(t,e,r,a)}e=e.child}return e;case 26:return pl(t,e),t===null?(a=Nb(e.type,null,e.pendingProps,null))?e.memoizedState=a:be||(e.stateNode=cb(e.type,e.pendingProps,jn.current,e)):e.memoizedState=Nb(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return cr(e),t===null&&be&&(r=e.stateNode=Ab(e.type,e.pendingProps,jn.current),qn=e,si=!0,l=Xe,_s(e.type)?(Jp=l,Xe=li(r.firstChild)):Xe=l),Rn(t,e,e.pendingProps.children,a),pl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&be&&((l=r=Xe)&&(r=Gx(r,e.type,e.pendingProps,si),r!==null?(e.stateNode=r,qn=e,Xe=li(r.firstChild),si=!1,l=!0):l=!1),l||ss(e)),cr(e),l=e.type,u=e.pendingProps,b=t!==null?t.memoizedProps:null,r=u.children,Kp(l,u)?r=null:b!==null&&Kp(l,b)&&(e.flags|=32),e.memoizedState!==null&&(l=Of(t,e,Hw,null,null,a),jl._currentValue=l),pl(t,e),Rn(t,e,r,a),e.child;case 6:return t===null&&be&&((t=a=Xe)&&(a=Fx(a,e.pendingProps,si),a!==null?(e.stateNode=a,qn=e,Xe=null,t=!0):t=!1),t||ss(e)),null;case 13:return e0(t,e,a);case 4:return Di(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=uo(e,null,r,a):Rn(t,e,r,a),e.child;case 11:return Fv(t,e,e.type,e.pendingProps,a);case 7:return r=e.pendingProps,pl(t,e),Rn(t,e,r,a),e.child;case 8:return Rn(t,e,e.pendingProps.children,a),e.child;case 12:return Rn(t,e,e.pendingProps.children,a),e.child;case 10:return i0(t,e,a);case 9:return l=e.type._context,r=e.pendingProps.children,ro(e),l=Xn(l),r=r(l),e.flags|=1,Rn(t,e,r,a),e.child;case 14:return Yv(t,e,e.type,e.pendingProps,a);case 15:return Pv(t,e,e.type,e.pendingProps,a);case 19:return np(t,e,a);case 31:return Xw(t,e,a);case 22:return Xv(t,e,a,e.pendingProps);case 24:return ro(e),r=Xn(An),t===null?(l=wf(),l===null&&(l=Ye,u=bf(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=a),l=u),e.memoizedState={parent:r,cache:l},_f(e),os(e,An,l)):((t.lanes&a)!==0&&(Sf(t,e),Ac(e,null,null,a),Cc()),l=t.memoizedState,u=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),os(e,An,r)):(r=u.cache,os(e,An,r),r!==l.cache&&vf(e,[An],a,!0))),Rn(t,e,e.pendingProps.children,a),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=e.pendingProps,r.name!=null&&r.name!=="auto"?e.flags|=t===null?18882560:18874368:be&&ad(e),t!==null&&t.memoizedProps.name!==r.name?e.flags|=4194816:pl(t,e),Rn(t,e,r.children,a),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Mr(t){t.flags|=4}function ip(t,e,a,r,l){var u;if((u=(t.mode&32)!==0)&&(u=a===null?Rb(e,r):Rb(e,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),u){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(H0())t.flags|=8192;else throw co=ud,xf}else t.flags&=-16777217}function s0(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Mb(e))if(H0())t.flags|=8192;else throw co=ud,xf}function zd(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?Mu():536870912,t.lanes|=e,yl|=e)}function jc(t,e){if(!be)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(e=t.tail,a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?t.tail=null:a.sibling=null}}function Qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(e)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,e}function Ww(t,e,a){var r=e.pendingProps;switch(ff(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(e),null;case 1:return Qe(e),null;case 3:return a=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),Or(An),lr(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ol(e)?Mr(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,mf())),Qe(e),null;case 26:var l=e.type,u=e.memoizedState;return t===null?(Mr(e),u!==null?(Qe(e),s0(e,u)):(Qe(e),ip(e,l,null,r,a))):u?u!==t.memoizedState?(Mr(e),Qe(e),s0(e,u)):(Qe(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&Mr(e),Qe(e),ip(e,l,t,r,a)),null;case 27:if(Bn(e),a=jn.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Mr(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return Qe(e),e.subtreeFlags&=-33554433,null}t=Fe.current,ol(e)?Bg(e):(t=Ab(l,r,a),e.stateNode=t,Mr(e))}return Qe(e),e.subtreeFlags&=-33554433,null;case 5:if(Bn(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Mr(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return Qe(e),e.subtreeFlags&=-33554433,null}if(u=Fe.current,ol(e))Bg(e);else{var b=Vc(jn.current);switch(u){case 1:u=b.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=b.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=b.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=b.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=b.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?b.createElement("select",{is:r.is}):b.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?b.createElement(l,{is:r.is}):b.createElement(l)}}u[wn]=e,u[hn]=r;t:for(b=e.child;b!==null;){if(b.tag===5||b.tag===6)u.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break t;for(;b.sibling===null;){if(b.return===null||b.return===e)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}e.stateNode=u;t:switch(Jn(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Mr(e)}}return Qe(e),e.subtreeFlags&=-33554433,ip(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,a),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&Mr(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(o(166));if(t=jn.current,ol(e)){if(t=e.stateNode,a=e.memoizedProps,r=null,l=qn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[wn]=e,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||rb(t.nodeValue,a)),t||ss(e,!0)}else t=Vc(t).createTextNode(r),t[wn]=e,e.stateNode=t}return Qe(e),null;case 31:if(a=e.memoizedState,t===null||t.memoizedState!==null){if(r=ol(e),a!==null){if(t===null){if(!r)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[wn]=e}else no(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qe(e),t=!1}else a=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return e.flags&256?(Ra(e),e):(Ra(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Qe(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=ol(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[wn]=e}else no(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Qe(e),l=!1}else l=mf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(Ra(e),e):(Ra(e),null)}return Ra(e),(e.flags&128)!==0?(e.lanes=a,e):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),a!==t&&a&&(e.child.flags|=8192),zd(e,e.updateQueue),Qe(e),null);case 4:return lr(),t===null&&Up(e.stateNode.containerInfo),e.flags|=67108864,Qe(e),null;case 10:return Or(e.type),Qe(e),null;case 19:if(zf(e),r=e.memoizedState,r===null)return Qe(e),null;if(l=(e.flags&128)!==0,u=r.rendering,u===null)if(l)jc(r,!1);else{if(mn!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=pd(t),u!==null){for(e.flags|=128,jc(r,!1),t=u.updateQueue,e.updateQueue=t,zd(e,t),e.subtreeFlags=0,t=a,a=e.child;a!==null;)Dg(a,t),a=a.sibling;return Tc(e,Zn.current&1|2),be&&zr(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&Un()>Id&&(e.flags|=128,l=!0,jc(r,!1),e.lanes=4194304)}else{if(!l)if(t=pd(u),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,zd(e,t),jc(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!be)return Qe(e),null}else 2*Un()-r.renderingStartTime>Id&&a!==536870912&&(e.flags|=128,l=!0,jc(r,!1),e.lanes=4194304);r.isBackwards?(u.sibling=e.child,e.child=u):(t=r.last,t!==null?t.sibling=u:e.child=u,r.last=u)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=Un(),t.sibling=null,u=Zn.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||be?Tc(e,u):(a=u,De(Qn,e),De(Zn,a),ra===null&&(ra=e)),be&&zr(e,r.treeForkCount),t}return Qe(e),null;case 22:case 23:return Ra(e),Tf(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(a&536870912)!==0&&(e.flags&128)===0&&(Qe(e),e.subtreeFlags&6&&(e.flags|=8192)):Qe(e),a=e.updateQueue,a!==null&&zd(e,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==a&&(e.flags|=2048),t!==null&&sn(oo),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),e.memoizedState.cache!==a&&(e.flags|=2048),Or(An),Qe(e),null;case 25:return null;case 30:return e.flags|=33554432,Qe(e),null}throw Error(o(156,e.tag))}function Jw(t,e){switch(ff(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Or(An),lr(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Bn(e),null;case 31:if(e.memoizedState!==null){if(Ra(e),e.alternate===null)throw Error(o(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(Ra(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return zf(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return lr(),null;case 10:return Or(e.type),null;case 22:case 23:return Ra(e),Tf(),t!==null&&sn(oo),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return Or(An),null;case 25:return null;default:return null}}function o0(t,e){switch(ff(e),e.tag){case 3:Or(An),lr();break;case 26:case 27:case 5:Bn(e);break;case 4:lr();break;case 31:e.memoizedState!==null&&Ra(e);break;case 13:Ra(e);break;case 19:zf(e);break;case 10:Or(e.type);break;case 22:case 23:Ra(e),Tf(),t!==null&&sn(oo);break;case 24:Or(An)}}function Dc(t,e){try{var a=e.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var u=a.create,b=a.inst;r=u(),b.destroy=r}a=a.next}while(a!==l)}}catch(A){qe(e,e.return,A)}}function ms(t,e,a){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&t)===t){var b=r.inst,A=b.destroy;if(A!==void 0){b.destroy=void 0,l=e;var M=a,P=A;try{P()}catch(it){qe(l,M,it)}}}r=r.next}while(r!==u)}}catch(it){qe(e,e.return,it)}}function l0(t){var e=t.updateQueue;if(e!==null){var a=t.stateNode;try{Zg(e,a)}catch(r){qe(t,t.return,r)}}}function c0(t,e,a){a.props=fo(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){qe(t,e,r)}}function Fi(t,e){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,u=Ar(t.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=gb(u)),r=l.ref;break;case 7:if(t.stateNode===null){var b=new Ua(t);S(t.child,!1,Vx,b,void 0,void 0),t.stateNode=b}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(A){qe(t,e,A)}}function Wn(t,e){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){qe(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){qe(t,e,l)}else a.current=null}function Nd(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var a=0;a<e.length;a++)_b(t.stateNode,e[a])}function u0(t){for(var e=t.return;e!==null&&(sp(e)&&_b(t.stateNode,e.stateNode),!rp(e));)e=e.return}function Rc(t){for(var e=t.return;e!==null&&(sp(e)&&Kx(t.stateNode,e.stateNode),!rp(e));)e=e.return}function rp(t){return t.tag===5||t.tag===3||t.tag===27}function sp(t){return t&&t.tag===7&&t.stateNode!==null}function op(t){var e=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){qe(t,t.return,l)}}function lp(t,e,a){try{var r=t.stateNode;Cx(r,t.type,a,e),r[hn]=e}catch(l){qe(t,t.return,l)}}function d0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&_s(t.type)||t.tag===4}function cp(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||d0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&_s(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function up(t,e,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,e):(e=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.appendChild(l),a=a._reactRootContainer,a!=null||e.onclick!==null||(e.onclick=Ja)),Nd(t,r),Vt=!0;else if(l!==4&&(l===27&&(Nd(t,r),r=null,_s(t.type)&&(a=t.stateNode,e=null)),t=t.child,t!==null))for(up(t,e,a,r),t=t.sibling;t!==null;)up(t,e,a,r),t=t.sibling}function Od(t,e,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?a.insertBefore(l,e):a.appendChild(l),Nd(t,r),Vt=!0;else if(l!==4&&(l===27&&(Nd(t,r),r=null,_s(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Od(t,e,a,r),t=t.sibling;t!==null;)Od(t,e,a,r),t=t.sibling}function h0(t){var e=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Jn(e,r,a),e[wn]=t,e[hn]=a}catch(u){qe(t,t.return,u)}}var jd=!1,Ma=null;function f0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(jd=!0)}var Yi=null;function p0(){var t=Yi;return Yi=null,t}var wa=0;function ml(t,e,a,r,l){return wa=0,m0(t.child,e,a,r,l)}function m0(t,e,a,r,l){for(var u=!1;t!==null;){if(t.tag===5){var b=t.stateNode;if(r!==null){var A=Yp(b);r.push(A),A.view&&(u=!0)}else u||Yp(b).view&&(u=!0);jd=!0,pb(b,wa===0?e:e+"_"+wa,a),wa++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||m0(t.child,e,a,r,l)&&(u=!0));t=t.sibling}return u}function Pi(t,e){for(;t!==null;)t.tag===5?mb(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Pi(t.child,e)),t=t.sibling}function Dd(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Dd(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(o(544));var a=e.name;e=Tr(e.default,e.share),e!=="none"&&(ml(t,a,e,null,!1)||Pi(t.child,!1))}t=t.sibling}}function dp(t,e){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,l=Ar(r,a),u=Tr(r.default,a.paired?r.share:r.enter);u!=="none"?ml(t,l,u,null,!1)?(Dd(t),a.paired||e||Sl(t,r.onEnter)):Pi(t.child,!1):Dd(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)dp(t,e),t=t.sibling;else Dd(t)}function hp(t){if(Ma!==null&&Ma.size!==0){var e=Ma;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=e.get(r);if(l!==void 0){var u=Tr(a.default,a.share);if(u!=="none"&&(ml(t,r,u,null,!1)?(u=t.stateNode,l.paired=u,u.paired=l,Sl(t,a.onShare)):Pi(t.child,!1)),e.delete(r),e.size===0)break}}}hp(t)}t=t.sibling}}}function fp(t){if(t.tag===30){var e=t.memoizedProps,a=Ar(e,t.stateNode),r=Ma!==null?Ma.get(a):void 0,l=Tr(e.default,r!==void 0?e.share:e.exit);l!=="none"&&(ml(t,a,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,Ma.delete(a),Sl(t,e.onShare)):Sl(t,e.onExit):Pi(t.child,!1)),Ma!==null&&hp(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)fp(t),t=t.sibling;else Ma!==null&&hp(t)}function g0(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,a=Ar(e,t.stateNode);e=Tr(e.default,e.update),t.flags&=-5,e!=="none"&&ml(t,a,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&g0(t);t=t.sibling}}function pp(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Pi(t.child,!1))}pp(t)}t=t.sibling}}function Rd(t){if(t.tag===30)t.stateNode.paired=null,Pi(t.child,!1),pp(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Rd(t),t=t.sibling;else pp(t)}function v0(t){for(t=t.child;t!==null;)t.tag===30?Pi(t.child,!1):(t.subtreeFlags&33554432)!==0&&v0(t),t=t.sibling}function mp(t,e,a,r,l,u,b){for(var A=!1;e!==null;){if(e.tag===5){var M=e.stateNode;if(u!==null&&wa<u.length){var P=u[wa],it=Yp(M);(P.view||it.view)&&(A=!0);var ft;if(ft=(t.flags&4)===0)if(it.clip)ft=!0;else{ft=P.rect;var V=it.rect;ft=ft.y!==V.y||ft.x!==V.x||ft.height!==V.height||ft.width!==V.width}ft&&(t.flags|=4),it.abs?it=!P.abs:(P=P.rect,it=it.rect,it=P.height!==it.height||P.width!==it.width),it&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&pb(M,wa===0?a:a+"_"+wa,l),A&&(t.flags&4)!==0||(Yi===null&&(Yi=[]),Yi.push(M,wa===0?r:r+"_"+wa,e.memoizedProps)),wa++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&b?t.flags|=e.flags&32:mp(t,e.child,a,r,l,u,b)&&(A=!0));e=e.sibling}return A}function b0(t,e){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,l=Ar(a,r),u=Tr(a.default,a.update),b;b=t.memoizedState,t.memoizedState=null,r=t;var A=t.child;wa=0,l=mp(r,A,l,l,u,b,!1),(t.flags&4)!==0&&l&&Sl(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&b0(t);t=t.sibling}}var Vn=!1,Me=!1,Xi=!1,gp=!1,y0=typeof WeakSet=="function"?WeakSet:Set,Kn=null,Qi=!1,Mc=!1,Md=!1,vp=!1;function tx(t,e,a){if(t=t.containerInfo,qp=Dl,t=It(t),St(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,b=l.focusNode;l=l.focusOffset;try{r.nodeType,b.nodeType}catch{r=null;break t}var A=0,M=-1,P=-1,it=0,ft=0,V=t,et=null;e:for(;;){for(var Rt;V!==r||u!==0&&V.nodeType!==3||(M=A+u),V!==b||l!==0&&V.nodeType!==3||(P=A+l),V.nodeType===3&&(A+=V.nodeValue.length),(Rt=V.firstChild)!==null;)et=V,V=Rt;for(;;){if(V===t)break e;if(et===r&&++it===u&&(M=A),et===b&&++ft===l&&(P=A),(Rt=V.nextSibling)!==null)break;V=et,et=V.parentNode}V=Rt}r=M===-1||P===-1?null:{start:M,end:P}}else r=null}r=r||{start:0,end:0}}else r=null;for(Vp={focusedElem:t,selectionRange:r},Dl=!1,a=(a&335544064)===a,Kn=e,e=a?9270:1024;Kn!==null;){if(t=Kn,a&&(r=t.deletions,r!==null))for(u=0;u<r.length;u++)a&&fp(r[u]);if(t.alternate===null&&(t.flags&2)!==0)a&&f0(t),$d(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&fp(r),$d(a);continue}else if(r!==null&&r.memoizedState!==null){a&&f0(t),$d(a);continue}}r=t.child,(t.subtreeFlags&e)!==0&&r!==null?(r.return=t,Kn=r):(a&&g0(t),$d(a))}}Ma=null}function $d(t){for(;Kn!==null;){var e=Kn,a=t,r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var u=e.stateNode;try{var b=fo(e.type,l);a=u.getSnapshotBeforeUpdate(b,r),u.__reactInternalSnapshotBeforeUpdate=a}catch(A){qe(e,e.return,A)}}break;case 3:if((l&1024)!==0){if(r=e.stateNode.containerInfo,a=r.nodeType,a===9)Qp(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Qp(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=Ar(r.memoizedProps,r.stateNode),l=e.memoizedProps,l=Tr(l.default,l.update),l!=="none"&&ml(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(o(163))}if(r=e.sibling,r!==null){r.return=e.return,Kn=r;break}Kn=e.return}}function w0(t,e,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(t,a),r&4&&Dc(5,a);break;case 1:if(Zi(t,a),r&4)if(t=a.stateNode,e===null)try{t.componentDidMount()}catch(b){qe(a,a.return,b)}else{var l=fo(a.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(b){qe(a,a.return,b)}}r&64&&l0(a),r&512&&Fi(a,a.return);break;case 3:if(Zi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Zg(t,e)}catch(b){qe(a,a.return,b)}}break;case 27:e===null&&r&4&&h0(a);case 26:case 5:Zi(t,a),e===null&&r&4&&op(a),r&512&&Fi(a,a.return);break;case 12:Zi(t,a);break;case 31:Zi(t,a),r&4&&k0(t,a);break;case 13:Zi(t,a),r&4&&C0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=hx.bind(null,a),Yx(t,a))));break;case 22:if(r=a.memoizedState!==null||Vn,!r){var u=e!==null&&e.memoizedState!==null||Me;e=Vn,l=Me,Vn=r,(Me=u)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),_i(t,a,r)):Zi(t,a),Vn=e,Me=l}break;case 30:Zi(t,a),r&512&&Fi(a,a.return);break;case 7:r&512&&Fi(a,a.return);default:Zi(t,a)}}function bp(t,e){for(t=t.child;t!==null;)x0(t,e),t=t.sibling}function x0(t,e){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(e){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,u=t.memoizedProps.style,b=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(M){qe(t,t.return,M)}yp(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,Vt=!0}catch(M){qe(t,t.return,M)}break;case 18:try{var A=t.stateNode;e?fb(A,!0):fb(t.stateNode,!1)}catch(M){qe(t,t.return,M)}break;case 22:case 23:t.memoizedState===null&&bp(t,e);break;default:bp(t,e)}}function yp(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=e;switch(a.tag){case 4:x0(a,r);break t;case 22:a.memoizedState===null&&yp(a,r);break t;default:yp(a,r)}}t=t.sibling}}function _0(t){var e=t.alternate;e!==null&&(t.alternate=null,_0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Ri(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var nn=null,xa=!1;function wi(t,e,a){for(a=a.child;a!==null;)S0(t,e,a),a=a.sibling}function S0(t,e,a){if(_n&&typeof _n.onCommitFiberUnmount=="function")try{_n.onCommitFiberUnmount(Xa,a)}catch{}switch(a.tag){case 26:Me||Wn(a,e),wi(t,e,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Me&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Me||Wn(a,e),Rc(a);var r=nn,l=xa;_s(a.type)&&(nn=a.stateNode,xa=!1),wi(t,e,a),Tb(a.stateNode,a.type,a.memoizedProps),nn=r,xa=l;break;case 5:Me||Wn(a,e),Rc(a);case 6:if(a.tag===6&&Rc(a),r=nn,l=xa,nn=null,wi(t,e,a),nn=r,xa=l,nn!==null)if(xa)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode),Vt=!0}catch(u){qe(a,e,u)}else try{nn.removeChild(a.stateNode),Vt=!0}catch(u){qe(a,e,u)}break;case 18:nn!==null&&(xa?(t=nn,hb(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Rl(t)):hb(nn,a.stateNode));break;case 4:r=nn,l=xa,nn=a.stateNode.containerInfo,xa=!0,wi(t,e,a),nn=r,xa=l;break;case 0:case 11:case 14:case 15:ms(2,a,e),Me||ms(4,a,e),wi(t,e,a);break;case 1:Me||(Wn(a,e),r=a.stateNode,typeof r.componentWillUnmount=="function"&&c0(a,e,r)),wi(t,e,a);break;case 21:wi(t,e,a);break;case 22:Me=(r=Me)||a.memoizedState!==null,wi(t,e,a),Me=r;break;case 30:Wn(a,e),wi(t,e,a);break;case 7:Me||Wn(a,e),wi(t,e,a);break;default:wi(t,e,a)}}function k0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Rl(t)}catch(a){qe(e,e.return,a)}}}function C0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Rl(t)}catch(a){qe(e,e.return,a)}}function ex(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new y0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new y0),e;default:throw Error(o(435,t.tag))}}function Ld(t,e){var a=ex(t);e.forEach(function(r){if(!a.has(r)){a.add(r);var l=fx.bind(null,t,r);r.then(l,l)}})}function fa(t,e,a){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],b=t,A=e,M=A;t:for(;M!==null;){switch(M.tag){case 27:if(_s(M.type)){nn=M.stateNode,xa=!1;break t}break;case 5:nn=M.stateNode,xa=!1;break t;case 3:case 4:nn=M.stateNode.containerInfo,xa=!0;break t}M=M.return}if(nn===null)throw Error(o(160));S0(b,A,u),nn=null,xa=!1,b=u.alternate,b!==null&&(b.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)A0(e,t,a),e=e.sibling}var xi=null;function A0(t,e,a){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var b=r[u];b.ref.impl=b.nextImpl}fa(e,t,a),pa(t),l&4&&(ms(3,t,t.return),Dc(3,t),ms(5,t,t.return));break;case 1:fa(e,t,a),pa(t),l&512&&(Me||r===null||Wn(r,r.return)),l&64&&Vn&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?e:a.concat(e))));break;case 26:if(u=xi,fa(e,t,a),pa(t),l&512&&(Me||r===null||Wn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Vn)t.stateNode=cb(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,a=t.memoizedProps,l=u.ownerDocument||u;e:switch(e){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Xr]||r[wn]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(e),l.head.insertBefore(r,l.querySelector("head > title"))),Jn(r,e,a),r[wn]=t,Je(r),e=r;break t;case"link":if(u=Db("link","href",l).get(e+(a.href||""))){for(b=0;b<u.length;b++)if(r=u[b],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(b,1);break e}}r=l.createElement(e),Jn(r,e,a),l.head.appendChild(r);break;case"meta":if(u=Db("meta","content",l).get(e+(a.content||""))){for(b=0;b<u.length;b++)if(r=u[b],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(b,1);break e}}r=l.createElement(e),Jn(r,e,a),l.head.appendChild(r);break;default:throw Error(o(468,e))}r[wn]=t,Je(r),e=r}t.stateNode=e}else Vn||am(u,t.type,t.stateNode);else t.stateNode=jb(u,a,t.memoizedProps);else l!==a?(l===null?(e=r.stateNode,e===null||Me||e.parentNode.removeChild(e)):l.count--,a===null?Vn||am(u,t.type,t.stateNode):jb(u,a,t.memoizedProps)):a===null&&t.stateNode!==null&&lp(t,t.memoizedProps,r.memoizedProps);break;case 27:fa(e,t,a),pa(t),l&512&&(Me||r===null||Wn(r,r.return)),r!==null&&l&4&&lp(t,t.memoizedProps,r.memoizedProps);break;case 5:if(u=Xi,Xi=!1,fa(e,t,a),Xi=u,pa(t),l&512&&(Me||r===null||Wn(r,r.return)),t.flags&32){e=t.stateNode;try{Li(e,""),Vt=!0}catch(it){qe(t,t.return,it)}}l&4&&t.stateNode!=null&&(e=t.memoizedProps,lp(t,e,r!==null?r.memoizedProps:e)),l&1024&&(gp=!0);break;case 6:if(fa(e,t,a),pa(t),l&4){if(t.stateNode===null)throw Error(o(162));e=t.memoizedProps,a=t.stateNode;try{a.nodeValue=e,Vt=!0}catch(it){qe(t,t.return,it)}}break;case 3:if(Vt=!1,Wd=null,u=xi,xi=Kc(e.containerInfo),fa(e,t,a),xi=u,pa(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Rl(e.containerInfo)}catch(it){qe(t,t.return,it)}gp&&(gp=!1,T0(t)),Vt=!1;break;case 4:l=Xi,Xi=Vn,r=ic(),u=xi,xi=Kc(t.stateNode.containerInfo),fa(e,t,a),pa(t),xi=u,Vt&&Mc&&(Md=!0),Vt=r,Xi=l;break;case 12:fa(e,t,a),pa(t);break;case 31:fa(e,t,a),pa(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Ld(t,e)));break;case 13:fa(e,t,a),pa(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Hd=Un()),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Ld(t,e)));break;case 22:u=t.memoizedState!==null,b=r!==null&&r.memoizedState!==null;var A=Vn,M=Me,P=Xi;Vn=A||u,Xi=P||u,Me=M||b,fa(e,t,a),Me=M,Xi=P,Vn=A,pa(t),l&8192&&(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,!u||r===null||b||Vn||Me||(e=b||Me,a=Vn,r=Me,Vn=u||Vn,Me=e,gs(t,2),Vn=a,Me=r),!u&&Xi||bp(t,u)),l&4&&(e=t.updateQueue,e!==null&&(a=e.retryQueue,a!==null&&(e.retryQueue=null,Ld(t,a))));break;case 19:fa(e,t,a),pa(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Ld(t,e)));break;case 30:l&512&&(Me||r===null||Wn(r,r.return)),l=ic(),u=Mc,b=(a&335544064)===a,A=t.memoizedProps,Mc=b&&Tr(A.default,A.update)!=="none",fa(e,t,a),pa(t),b&&r!==null&&Vt&&(t.flags|=4),Mc=u,Vt=l;break;case 21:break;case 7:l&512&&(Me||r===null||Wn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:fa(e,t,a),pa(t)}}function pa(t){var e=t.flags;if(e&2){try{for(var a,r=t.return;r!==null;){if(d0(r)){a=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(sp(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if(rp(l))break;l=l.return}var b=r;if(a==null)throw Error(o(160));switch(a.tag){case 27:var A=a.stateNode,M=cp(t);Od(t,M,A,b);break;case 5:var P=a.stateNode;a.flags&32&&(Li(P,""),a.flags&=-33);var it=cp(t);Od(t,it,P,b);break;case 3:case 4:var ft=a.stateNode.containerInfo,V=cp(t);up(t,V,ft,b);break;default:throw Error(o(161))}}catch(et){qe(t,t.return,et)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function T0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;T0(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Dl=!0,e.reset(),Dl=!1),t=t.sibling}}function gl(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)E0(e,t),e=e.sibling;else b0(e)}function E0(t,e){var a=t.alternate;if(a===null)dp(t,!1);else switch(t.tag){case 3:if(vp=Qi=!1,p0(),gl(e,t),!Qi&&!Md){if(t=Yi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var l=t[r+1];mb(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),vp=!0}Yi=null;break;case 5:gl(e,t);break;case 4:r=Qi,Qi=!1,gl(e,t),Qi&&(Md=!0),Qi=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?dp(t,!1):gl(e,t));break;case 30:r=Qi,l=p0(),Qi=!1,gl(e,t),Qi&&(t.flags|=4);var u=t.memoizedProps,b=t.stateNode;e=Ar(u,b),b=Ar(a.memoizedProps,b);var A=Tr(u.default,u.update);A==="none"?e=!1:(u=a.memoizedState,a.memoizedState=null,a=t.child,wa=0,e=mp(t,a,e,b,A,u,!0),wa!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(Sl(t,t.memoizedProps.onUpdate),Yi=l):l!==null&&(l.push.apply(l,Yi),Yi=l),Qi=(t.flags&32)!==0?!0:r;break;default:gl(e,t)}}function Zi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)w0(t,e.alternate,e),e=e.sibling}function gs(t,e){for(t=t.child;t!==null;){var a=t,r=e;switch(a.tag){case 0:case 11:case 14:case 15:ms(4,a,a.return),gs(a,r);break;case 1:Wn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&c0(a,a.return,l),gs(a,r);break;case 27:(r&2)!==0&&Tb(a.stateNode,a.type,a.memoizedProps);case 5:Wn(a,a.return),a.tag!==5&&a.tag!==27||Rc(a),gs(a,r);break;case 6:Rc(a);break;case 26:Wn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Me||l.parentNode.removeChild(l),gs(a,r);break;case 22:a.memoizedState===null&&gs(a,r);break;case 30:Wn(a,a.return),gs(a,r);break;case 7:Wn(a,a.return);default:gs(a,r)}t=t.sibling}}function _i(t,e,a){for(a=(e.subtreeFlags&8772)!==0?a:a&-2,e=e.child;e!==null;){var r=e.alternate,l=t,u=e,b=u.flags,A=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:_i(l,u,a),Dc(4,u);break;case 1:if(_i(l,u,a),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(it){qe(r,r.return,it)}if(r=u,l=r.updateQueue,l!==null){var M=r.stateNode;try{var P=l.shared.hiddenCallbacks;if(P!==null)for(l.shared.hiddenCallbacks=null,l=0;l<P.length;l++)Qg(P[l],M)}catch(it){qe(r,r.return,it)}}A&&b&64&&l0(u),Fi(u,u.return);break;case 27:(a&2)!==0&&h0(u);case 5:u.tag!==5&&u.tag!==27||u0(u),_i(l,u,a),A&&r===null&&b&4&&op(u),Fi(u,u.return);break;case 6:u0(u);break;case 26:M=u.stateNode,u.memoizedState!==null||M===null||Vn||am(Kc(M.ownerDocument),u.type,M),_i(l,u,a),A&&r===null&&b&4&&op(u),Fi(u,u.return);break;case 12:_i(l,u,a);break;case 31:_i(l,u,a),A&&b&4&&k0(l,u);break;case 13:_i(l,u,a),A&&b&4&&C0(l,u);break;case 22:u.memoizedState===null&&_i(l,u,a),Fi(u,u.return);break;case 30:_i(l,u,a),Fi(u,u.return);break;case 7:Fi(u,u.return);default:_i(l,u,a)}e=e.sibling}}function wp(t,e){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&wc(a))}function xp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&wc(t))}function oi(t,e,a,r){var l=(a&335544064)===a;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)z0(t,e,a,r),e=e.sibling;else l&&v0(e)}function z0(t,e,a,r){var l=(a&335544064)===a;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Rd(e);var u=e.flags;switch(e.tag){case 0:case 11:case 15:oi(t,e,a,r),u&2048&&Dc(9,e);break;case 1:oi(t,e,a,r);break;case 3:oi(t,e,a,r),l&&vp&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,e.alternate!==null&&(u=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==u&&(e.refCount++,u!=null&&wc(u)));break;case 12:if(u&2048){oi(t,e,a,r),u=e.stateNode;try{var b=e.memoizedProps,A=b.id,M=b.onPostCommit;typeof M=="function"&&M(A,e.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(P){qe(e,e.return,P)}}else oi(t,e,a,r);break;case 31:oi(t,e,a,r);break;case 13:oi(t,e,a,r);break;case 23:break;case 22:b=e.stateNode,A=e.alternate,e.memoizedState!==null?(l&&A!==null&&A.memoizedState===null&&Rd(A),b._visibility&2?oi(t,e,a,r):$c(t,e)):(l&&A!==null&&A.memoizedState!==null&&Rd(e),b._visibility&2?oi(t,e,a,r):(b._visibility|=2,vl(t,e,a,r,(e.subtreeFlags&10256)!==0||!1))),u&2048&&wp(A,e);break;case 24:oi(t,e,a,r),u&2048&&xp(e.alternate,e);break;case 30:l&&(u=e.alternate,u!==null&&(Pi(u.child,!0),Pi(e.child,!0))),oi(t,e,a,r);break;default:oi(t,e,a,r)}}function vl(t,e,a,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,b=e,A=a,M=r,P=b.flags;switch(b.tag){case 0:case 11:case 15:vl(u,b,A,M,l),Dc(8,b);break;case 23:break;case 22:var it=b.stateNode;b.memoizedState!==null?it._visibility&2?vl(u,b,A,M,l):$c(u,b):(it._visibility|=2,vl(u,b,A,M,l)),l&&P&2048&&wp(b.alternate,b);break;case 24:vl(u,b,A,M,l),l&&P&2048&&xp(b.alternate,b);break;default:vl(u,b,A,M,l)}e=e.sibling}}function $c(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var a=t,r=e,l=r.flags;switch(r.tag){case 22:$c(a,r),l&2048&&wp(r.alternate,r);break;case 24:$c(a,r),l&2048&&xp(r.alternate,r);break;default:$c(a,r)}e=e.sibling}}var po=8192;function mo(t,e,a){if(t.subtreeFlags&po)for(t=t.child;t!==null;)N0(t,e,a),t=t.sibling}function N0(t,e,a){switch(t.tag){case 26:mo(t,e,a),t.flags&po&&(t.memoizedState!==null?o_(a,xi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&Lb(a,t)));break;case 5:mo(t,e,a),t.flags&po&&(t=t.stateNode,(e&335544128)===e&&Lb(a,t));break;case 3:case 4:var r=xi;xi=Kc(t.stateNode.containerInfo),mo(t,e,a),xi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=po,po=16777216,mo(t,e,a),po=r):mo(t,e,a));break;case 30:if((t.flags&po)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,Ma===null&&(Ma=new Map),Ma.set(r,l)}mo(t,e,a);break;default:mo(t,e,a)}}function O0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function Lc(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];Kn=r,D0(r,t)}O0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)j0(t),t=t.sibling}function j0(t){switch(t.tag){case 0:case 11:case 15:Lc(t),t.flags&2048&&ms(9,t,t.return);break;case 3:Lc(t);break;case 12:Lc(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,Bd(t)):Lc(t);break;default:Lc(t)}}function Bd(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var a=0;a<e.length;a++){var r=e[a];Kn=r,D0(r,t)}O0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:ms(8,e,e.return),Bd(e);break;case 22:a=e.stateNode,a._visibility&2&&(a._visibility&=-3,Bd(e));break;default:Bd(e)}t=t.sibling}}function D0(t,e){for(;Kn!==null;){var a=Kn;switch(a.tag){case 0:case 11:case 15:ms(8,a,e);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wc(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Kn=r;else t:for(a=t;Kn!==null;){r=Kn;var l=r.sibling,u=r.return;if(_0(r),r===a){Kn=null;break t}if(l!==null){l.return=u,Kn=l;break t}Kn=u}}}var nx={getCacheForType:function(t){var e=Xn(An),a=e.data.get(t);return a===void 0&&(a=t(),e.data.set(t,a)),a},cacheSignal:function(){return Xn(An).controller.signal}},ax=typeof WeakMap=="function"?WeakMap:Map,Re=0,Ye=null,xe=null,Se=0,Ie=0,$a=null,vs=!1,bl=!1,_p=!1,$r=0,mn=0,bs=0,go=0,Ud=0,La=0,yl=0,Bc=null,_a=null,Sp=!1,Hd=0,R0=0,Id=1/0,qd=null,ys=null,un=0,Si=null,vo=null,Wi=0,kp=0,Cp=null,M0=null,wl=null,xl=null,_l=null,Uc=0,Vd=null;function Ba(){return(Re&2)!==0&&Se!==0?Se&-Se:jt.T!==null?Mp():ec()}function $0(){if(La===0)if((Se&536870912)===0||be){var t=fr;fr<<=1,(fr&3932160)===0&&(fr=262144),La=t}else La=536870912;return t=Qn.current,t!==null&&(t.flags|=32),La}function Sl(t,e){if(e!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=gb(Ar(t.memoizedProps,a))),xl===null&&(xl=[]),xl.push(e.bind(null,r))}}function Sa(t,e,a){(t===Ye&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(kl(t,0),ws(t,Se,La,!1)),Pr(t,a),((Re&2)===0||t!==Ye)&&(t===Ye&&((Re&2)===0&&(go|=a),mn===4&&ws(t,Se,La,!1)),Ji(t))}function L0(t,e,a){if((Re&6)!==0)throw Error(o(327));var r=!a&&(e&127)===0&&(e&t.expiredLanes)===0||Za(t,e),l=r?sx(t,e):Tp(t,e,!0),u=r;do{if(l===0){bl&&!r&&ws(t,e,0,!1);break}else{if(a=t.current.alternate,u&&!ix(a)){l=Tp(t,e,!1),u=!1;continue}if(l===2){if(u=e,t.errorRecoveryDisabledLanes&u)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){e=b;t:{var A=t;l=Bc;var M=A.current.memoizedState.isDehydrated;if(M&&(kl(A,b).flags|=256),b=Tp(A,b,!1),b!==2&&b!==6){if(_p&&!M){A.errorRecoveryDisabledLanes|=u,go|=u,l=4;break t}u=_a,_a=l,u!==null&&(_a===null?_a=u:_a.push.apply(_a,u))}l=b}if(u=!1,l!==2)continue}}if(l===1){kl(t,0),ws(t,e,0,!0);break}t:{switch(r=t,u=l,u){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:ws(r,e,La,!vs);break t;case 2:_a=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(l=Hd+300-Un(),10<l)){if(ws(r,e,La,!vs),Ea(r,0,!0)!==0)break t;Wi=e,r.timeoutHandle=Fp(B0.bind(null,r,a,_a,qd,Sp,e,La,go,yl,vs,u,"Throttled",-0,0),l);break t}B0(r,a,_a,qd,Sp,e,La,go,yl,vs,u,null,-0,0)}}break}while(!0);Ji(t)}function B0(t,e,a,r,l,u,b,A,M,P,it,ft,V,et){t.timeoutHandle=-1;var Rt=e.subtreeFlags,Kt=(u&335544064)===u;if(ft=null,(Kt||Rt&8192||(Rt&16785408)===16785408)&&(ft={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ja},Ma=null,N0(e,u,ft),Kt&&(Rt=ft,Kt=t.containerInfo,Kt=(Kt.nodeType===9?Kt:Kt.ownerDocument).__reactViewTransition,Kt!=null&&(Rt.count++,Rt.waitingForViewTransition=!0,Rt=Yc.bind(Rt),Kt.finished.then(Rt,Rt))),Rt=(u&62914560)===u?Hd-Un():(u&4194048)===u?R0-Un():0,Rt=l_(ft,Rt),Rt!==null)){Wi=u,t.cancelPendingCommit=Rt(F0.bind(null,t,e,u,a,r,l,b,A,M,P,it,ft,null,V,et)),ws(t,u,b,!P);return}F0(t,e,u,a,r,l,b,A,M,P,it,ft)}function ix(t){for(var e=t;;){var a=e.tag;if((a===0||a===11||a===15)&&e.flags&16384&&(a=e.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],u=l.getSnapshot;l=l.value;try{if(!mt(u(),l))return!1}catch{return!1}}if(a=e.child,e.subtreeFlags&16384&&a!==null)a.return=e,e=a;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ws(t,e,a,r){e=hi(t,e),e&=~Ud,e&=~go,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var u=31-Hn(l),b=1<<u;r[u]=-1,l&=~b}a!==0&&tc(t,a,e)}function Kd(){return(Re&6)===0?(Hc(0),!1):!0}function Ap(){if(xe!==null){if(Ie===0)var t=xe.return;else t=xe,Nr=ao=null,Rf(t),ul=null,Sc=0,t=xe;for(;t!==null;)o0(t.alternate,t),t=t.return;xe=null}}function kl(t,e){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Ex(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,Ap(),Ye=t,xe=a=Er(t.current,null),Se=e,Ie=0,$a=null,vs=!1,bl=Za(t,e),_p=!1,yl=La=Ud=go=bs=mn=0,_a=Bc=null,Sp=!1,$r=hi(t,e),Wu(),a}function U0(t,e){fe=null,jt.H=Sd,e===cl||e===cd?(e=Fg(),Ie=3):e===xf?(e=Fg(),Ie=4):Ie=e===Xf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,$a=e,xe===null&&(mn=1,kd(t,ai(e,t.current)))}function H0(){var t=Qn.current;return t===null?!0:(Se&4194048)===Se?ra===null:(Se&62914560)===Se||(Se&536870912)!==0?t===ra:!1}function I0(){var t=jt.H;return jt.H=Sd,t===null?Sd:t}function q0(){var t=jt.A;return jt.A=nx,t}function Gd(){mn=4,vs||(Se&4194048)!==Se&&Qn.current!==null||(bl=!0),(bs&134217727)===0&&(go&134217727)===0||Ye===null||ws(Ye,Se,La,!1)}function Tp(t,e,a){var r=Re;Re|=2;var l=I0(),u=q0();(Ye!==t||Se!==e)&&(qd=null,kl(t,e)),e=!1;var b=mn;t:do try{if(Ie!==0&&xe!==null){var A=xe,M=$a;switch(Ie){case 8:Ap(),b=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(e=!0);var P=Ie;if(Ie=0,$a=null,Cl(t,A,M,P),a&&bl){b=0;break t}break;default:P=Ie,Ie=0,$a=null,Cl(t,A,M,P)}}rx(),b=mn;break}catch(it){U0(t,it)}while(!0);return e&&t.shellSuspendCounter++,Nr=ao=null,Re=r,jt.H=l,jt.A=u,xe===null&&(Ye=null,Se=0,Wu()),b}function rx(){for(;xe!==null;)V0(xe)}function sx(t,e){var a=Re;Re|=2;var r=I0(),l=q0();Ye!==t||Se!==e?(qd=null,Id=Un()+500,kl(t,e)):bl=Za(t,e);t:do try{if(Ie!==0&&xe!==null){e=xe;var u=$a;e:switch(Ie){case 1:Ie=0,$a=null,Cl(t,e,u,1);break;case 2:case 9:if(Kg(u)){Ie=0,$a=null,K0(e);break}e=function(){Ie!==2&&Ie!==9||Ye!==t||(Ie=7),Ji(t)},u.then(e,e);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:Kg(u)?(Ie=0,$a=null,K0(e)):(Ie=0,$a=null,Cl(t,e,u,7));break;case 5:var b=null;switch(xe.tag){case 26:b=xe.memoizedState;case 5:case 27:var A=xe;if(b?Mb(b):A.stateNode.complete){Ie=0,$a=null;var M=A.sibling;if(M!==null)xe=M;else{var P=A.return;P!==null?(xe=P,Fd(P)):xe=null}break e}}Ie=0,$a=null,Cl(t,e,u,5);break;case 6:Ie=0,$a=null,Cl(t,e,u,6);break;case 8:Ap(),mn=6;break t;default:throw Error(o(462))}}ox();break}catch(it){U0(t,it)}while(!0);return Nr=ao=null,jt.H=r,jt.A=l,Re=a,xe!==null?0:(Ye=null,Se=0,Wu(),mn)}function ox(){for(;xe!==null&&!qs();)V0(xe)}function V0(t){var e=r0(t.alternate,t,$r);t.memoizedProps=t.pendingProps,e===null?Fd(t):xe=e}function K0(t){var e=t,a=e.alternate;switch(e.tag){case 15:case 0:e=Wv(a,e,e.pendingProps,e.type,void 0,Se);break;case 11:e=Wv(a,e,e.pendingProps,e.type.render,e.ref,Se);break;case 5:Rf(e);var r=e;r===qn&&(be?(id(r),r.tag===5&&r.stateNode!=null&&(Xe=r.stateNode)):(id(r),be=!0));default:o0(a,e),e=xe=Dg(e,$r),e=r0(a,e,$r)}t.memoizedProps=t.pendingProps,e===null?Fd(t):xe=e}function Cl(t,e,a,r){Nr=ao=null,Rf(e),ul=null,Sc=0;var l=e.return;try{if(Pw(t,l,e,a,Se)){mn=1,kd(t,ai(a,t.current)),xe=null;return}}catch(u){if(l!==null)throw xe=l,u;mn=1,kd(t,ai(a,t.current)),xe=null;return}e.flags&32768?(be||r===1?t=!0:bl||(Se&536870912)!==0?t=!1:(vs=t=!0,(r===2||r===9||r===3||r===6)&&(r=Qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),G0(e,t)):Fd(e)}function Fd(t){var e=t;do{if((e.flags&32768)!==0){G0(e,vs);return}t=e.return;var a=Ww(e.alternate,e,$r);if(a!==null){xe=a;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);mn===0&&(mn=5)}function G0(t,e){do{var a=Jw(t.alternate,t);if(a!==null){a.flags&=32767,xe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!e&&(t=t.sibling,t!==null)){xe=t;return}xe=t=a}while(t!==null);mn=6,xe=null}function F0(t,e,a,r,l,u,b,A,M,P,it,ft){t.cancelPendingCommit=null;do Yd();while(un!==0);if((Re&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));t===Ye&&(xe=Ye=null,Se=0),vo=e,Si=t,Wi=a,Cp=l,M0=r,lx(t,e,a,b,A,M,ft)}}function lx(t,e,a,r,l,u,b){var A=e.lanes|e.childLanes;if(kp=A,A|=lf,gr(t,a,A,r,l,u),xl=null,(a&335544064)===a?(_l=$w(t),r=10262):(_l=null,r=10256),(e.subtreeFlags&r)!==0||(e.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,px(Yr,function(){return Op(),null})):(t.callbackNode=null,t.callbackPriority=0),jd=!1,r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=jt.T,jt.T=null,l=At.p,At.p=2,u=Re,Re|=4;try{tx(t,e,a)}finally{Re=u,At.p=l,jt.T=r}}un=1,jd?wl=Rx(b,t.containerInfo,_l,Ep,zp,ux,Np,Op,cx):(Ep(),zp(),Np())}function cx(t){if(un!==0){var e=Si.onRecoverableError;e(t,{componentStack:null})}}function ux(){un===3&&(un=0,E0(vo,Si),un=4)}function Ep(){if(un===1){un=0;var t=Si,e=vo,a=Wi,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=jt.T,jt.T=null;var l=At.p;At.p=2;var u=Re;Re|=4;try{Mc=Md=!1,A0(e,t,a),a=Vp;var b=It(t.containerInfo),A=a.focusedElem,M=a.selectionRange;if(b!==A&&A&&A.ownerDocument&&Ot(A.ownerDocument.documentElement,A)){if(M!==null&&St(A)){var P=M.start,it=M.end;if(it===void 0&&(it=P),"selectionStart"in A)A.selectionStart=P,A.selectionEnd=Math.min(it,A.value.length);else{var ft=A.ownerDocument||document,V=ft&&ft.defaultView||window;if(V.getSelection){var et=V.getSelection(),Rt=A.textContent.length,Kt=Math.min(M.start,Rt),pe=M.end===void 0?Kt:Math.min(M.end,Rt);!et.extend&&Kt>pe&&(b=pe,pe=Kt,Kt=b);var Y=Ut(A,Kt),L=Ut(A,pe);if(Y&&L&&(et.rangeCount!==1||et.anchorNode!==Y.node||et.anchorOffset!==Y.offset||et.focusNode!==L.node||et.focusOffset!==L.offset)){var W=ft.createRange();W.setStart(Y.node,Y.offset),et.removeAllRanges(),Kt>pe?(et.addRange(W),et.extend(L.node,L.offset)):(W.setEnd(L.node,L.offset),et.addRange(W))}}}}for(ft=[],et=A;et=et.parentNode;)et.nodeType===1&&ft.push({element:et,left:et.scrollLeft,top:et.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ft.length;A++){var ht=ft[A];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Dl=!!qp,Vp=qp=null}finally{Re=u,At.p=l,jt.T=r}}t.current=e,un=2}}function zp(){if(un===2){un=0;var t=Si,e=vo,a=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||a){a=jt.T,jt.T=null;var r=At.p;At.p=2;var l=Re;Re|=4;try{w0(t,e.alternate,e)}finally{Re=l,At.p=r,jt.T=a}}un=3}}function Np(){if(un===4||un===3){un=0;var t=wl;wl=null,dr();var e=Si,a=vo,r=Wi,l=M0,u=(r&335544064)===r?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?un=5:(un=0,vo=Si=null,Y0(e,e.pendingLanes)),u=e.pendingLanes,u===0&&(ys=null),za(r),a=a.stateNode,_n&&typeof _n.onCommitFiberRoot=="function")try{_n.onCommitFiberRoot(Xa,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=jt.T,u=At.p,At.p=2,jt.T=null;try{for(var b=e.onRecoverableError,A=0;A<l.length;A++){var M=l[A];b(M.value,{componentStack:M.stack})}}finally{jt.T=a,At.p=u}}if(l=xl,b=_l,_l=null,l!==null&&(xl=null,b===null&&(b=[]),t!==null))for(M=0;M<l.length;M++)a=(0,l[M])(b),a!==void 0&&t.finished.finally(a);(Wi&3)!==0&&Yd(),Ji(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===Vd?Uc++:(Uc=0,Vd=e):(Uc=0,Vd=null),Hc(0)}}function Y0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,wc(e)))}function Yd(){return wl!==null&&(wl.skipTransition(),wl=null),Ep(),zp(),Np(),Op()}function Op(){if(un!==5)return!1;var t=Si,e=kp;kp=0;var a=za(Wi),r=jt.T,l=At.p;try{At.p=32>a?32:a,jt.T=null,a=Cp,Cp=null;var u=Si,b=Wi;if(un=0,vo=Si=null,Wi=0,(Re&6)!==0)throw Error(o(331));var A=Re;if(Re|=4,j0(u.current),z0(u,u.current,b,a),Re=A,Hc(0,!1),_n&&typeof _n.onPostCommitFiberRoot=="function")try{_n.onPostCommitFiberRoot(Xa,u)}catch{}return!0}finally{At.p=l,jt.T=r,Y0(t,e)}}function P0(t,e,a){e=ai(a,e),e=Pf(t.stateNode,e,2),t=ds(t,e,2),t!==null&&(Pr(t,2),Ji(t))}function qe(t,e,a){if(t.tag===3)P0(t,t,a);else for(;e!==null;){if(e.tag===3){P0(e,t,a);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ys===null||!ys.has(r))){t=ai(a,t),a=Kv(2),r=ds(e,a,2),r!==null&&(Gv(a,r,e,t),Pr(r,2),Ji(r));break}}e=e.return}}function jp(t,e,a){var r=t.pingCache;if(r===null){r=t.pingCache=new ax;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(a)||(_p=!0,l.add(a),t=dx.bind(null,t,e,a),e.then(t,t))}function dx(t,e,a){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ye===t&&(Se&a)===a&&((mn===4||mn===3&&(Se&62914560)===Se&&300>Un()-Hd)&&(Re&2)===0?kl(t,0):Ud|=a,yl===Se&&(yl=0)),Ji(t)}function X0(t,e){e===0&&(e=Mu()),t=to(t,e),t!==null&&(Pr(t,e),Ji(t))}function hx(t){var e=t.memoizedState,a=0;e!==null&&(a=e.retryLane),X0(t,a)}function fx(t,e){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(o(314))}r!==null&&r.delete(e),X0(t,a)}function px(t,e){return Ta(t,e)}var Al=null,Tl=null,Dp=!1,Pd=!1,Rp=!1,xs=0;function Ji(t){t!==Tl&&t.next===null&&(Tl===null?Al=Tl=t:Tl=Tl.next=t),Pd=!0,Dp||(Dp=!0,gx())}function Hc(t,e){if(!Rp&&Pd){Rp=!0;do for(var a=!1,r=Al;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var b=r.suspendedLanes,A=r.pingedLanes;u=(1<<31-Hn(42|t)+1)-1,u&=l&~(b&~A),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,J0(r,u))}else u=Se,u=Ea(r,r===Ye?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Za(r,u)||(a=!0,J0(r,u));r=r.next}while(a);Rp=!1}}function mx(){Q0()}function Q0(){Pd=Dp=!1;var t=0;xs!==0&&Tx()&&(t=xs);for(var e=Un(),a=null,r=Al;r!==null;){var l=r.next,u=Z0(r,e);u===0?(r.next=null,a===null?Al=l:a.next=l,l===null&&(Tl=a)):(a=r,(t!==0||(u&3)!==0)&&(Pd=!0)),r=l}un!==0&&un!==5||Hc(t),xs!==0&&(xs=0)}function Z0(t,e){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var b=31-Hn(u),A=1<<b,M=l[b];M===-1?((A&a)===0||(A&r)!==0)&&(l[b]=Uo(A,e)):M<=e&&(t.expiredLanes|=A),u&=~A}if(e=Ye,a=Se,a=Ea(t,t===e?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===e&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ft(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Za(t,a)){if(e=a&-a,e===t.callbackPriority)return e;switch(r!==null&&Ft(r),za(a)){case 2:case 8:a=Jl;break;case 32:a=Yr;break;case 268435456:a=Bo;break;default:a=Yr}return r=W0.bind(null,t),a=Ta(a,r),t.callbackPriority=e,t.callbackNode=a,e}return r!==null&&r!==null&&Ft(r),t.callbackPriority=2,t.callbackNode=null,2}function W0(t,e){if(un!==0&&un!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Yd()&&t.callbackNode!==a)return null;var r=Se;return r=Ea(t,t===Ye?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(L0(t,r,e),Z0(t,Un()),t.callbackNode!=null&&t.callbackNode===a?W0.bind(null,t):null)}function J0(t,e){if(Yd())return null;L0(t,e,!0)}function gx(){zx(function(){(Re&6)!==0?Ta(Lo,mx):Q0()})}function Mp(){if(xs===0){var t=so;t===0&&(t=hr,hr<<=1,(hr&261888)===0&&(hr=256)),xs=t}return xs}function tb(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Bi(t)}function vx(t,e,a,r,l){if(e==="submit"&&a&&a.stateNode===l){var u=tb((l[hn]||null).action),b=r.submitter;b&&(e=(e=b[hn]||null)?tb(e.formAction):b.getAttribute("formAction"),e!==null&&(u=e,b=null));var A=new es("action","action",null,r,l);t.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(xs!==0){var M=new FormData(l,b);Vf(a,{pending:!0,data:M,method:l.method,action:u},null,M)}}else typeof u=="function"&&(A.preventDefault(),M=new FormData(l,b),Vf(a,{pending:!0,data:M,method:l.method,action:u},u,M))},currentTarget:l}]})}}for(var $p=0;$p<of.length;$p++){var Lp=of[$p],bx=Lp.toLowerCase(),yx=Lp[0].toUpperCase()+Lp.slice(1);yi(bx,"on"+yx)}yi(nl,"onAnimationEnd"),yi(Tg,"onAnimationIteration"),yi(Eg,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(Ew,"onTransitionRun"),yi(zw,"onTransitionStart"),yi(Nw,"onTransitionCancel"),yi(zg,"onTransitionEnd"),mi("onMouseEnter",["mouseout","mouseover"]),mi("onMouseLeave",["mouseout","mouseover"]),mi("onPointerEnter",["pointerout","pointerover"]),mi("onPointerLeave",["pointerout","pointerover"]),pi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pi("onBeforeInput",["compositionend","keypress","textInput","paste"]),pi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ic="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ic));function eb(t,e){e=(e&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var u=void 0;if(e)for(var b=r.length-1;0<=b;b--){var A=r[b],M=A.instance,P=A.currentTarget;if(A=A.listener,M!==u&&l.isPropagationStopped())break t;u=A,l.currentTarget=P;try{u(l)}catch(it){Zu(it)}l.currentTarget=null,u=M}else for(b=0;b<r.length;b++){if(A=r[b],M=A.instance,P=A.currentTarget,A=A.listener,M!==u&&l.isPropagationStopped())break t;u=A,l.currentTarget=P;try{u(l)}catch(it){Zu(it)}l.currentTarget=null,u=M}}}}function _e(t,e){var a=e[Ks];a===void 0&&(a=e[Ks]=new Set);var r=t+"__bubble";a.has(r)||(nb(e,t,2,!1),a.add(r))}function Bp(t,e,a){var r=0;e&&(r|=4),nb(a,t,r,e)}var Xd="_reactListening"+Math.random().toString(36).slice(2);function Up(t){if(!t[Xd]){t[Xd]=!0,wr.forEach(function(a){a!=="selectionchange"&&(wx.has(a)||Bp(a,!1,t),Bp(a,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Xd]||(e[Xd]=!0,Bp("selectionchange",!1,e))}}function nb(t,e,a,r){switch(Gb(e)){case 2:var l=h_;break;case 8:l=f_;break;default:l=rm}a=l.bind(null,e,a,t),l=void 0,!Fo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,a,{capture:!0,passive:l}):t.addEventListener(e,a,!0):l!==void 0?t.addEventListener(e,a,{passive:l}):t.addEventListener(e,a,!1)}function Hp(t,e,a,r,l){var u=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var b=r.tag;if(b===3||b===4){var A=r.stateNode.containerInfo;if(A===l)break;if(b===4)for(b=r.return;b!==null;){var M=b.tag;if((M===3||M===4)&&b.stateNode.containerInfo===l)return;b=b.return}for(;A!==null;){if(b=Mi(A),b===null)return;if(M=b.tag,M===5||M===6||M===26||M===27){r=u=b;continue t}A=A.parentNode}}r=r.return}qu(function(){var P=u,it=Jr(a),ft=[];t:{var V=Ng.get(t);if(V!==void 0){var et=es,Rt=t;switch(t){case"keypress":if(vi(a)===0)break t;case"keydown":case"keyup":et=tf;break;case"focusin":Rt="focus",et=Js;break;case"focusout":Rt="blur",et=Js;break;case"beforeblur":case"afterblur":et=Js;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=lc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=cc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=Pu;break;case nl:case Tg:case Eg:et=Qo;break;case zg:et=nf;break;case"scroll":case"scrollend":et=Zs;break;case"wheel":et=rf;break;case"copy":case"cut":case"paste":et=Ku;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=mc;break;case"submit":et=Yu;break;case"toggle":case"beforetoggle":et=bi}var Kt=(e&4)!==0,pe=!Kt&&(t==="scroll"||t==="scrollend"),Y=Kt?V!==null?V+"Capture":null:V;Kt=[];for(var L=P,W;L!==null;){var ht=L;if(W=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||W===null||Y===null||(ht=_r(L,Y),ht!=null&&Kt.push(qc(L,ht,W))),pe)break;L=L.return}0<Kt.length&&(V=new et(V,Rt,null,a,it),ft.push({event:V,listeners:Kt}))}}if((e&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",V=t==="mouseout"||t==="pointerout",et&&a!==sc&&(Rt=a.relatedTarget||a.fromElement)&&(Mi(Rt)||Rt[vr]))break t;(V||et)&&(Rt=it.window===it?it:(et=it.ownerDocument)?et.defaultView||et.parentWindow:window,V?(et=a.relatedTarget||a.toElement,V=P,et=et?Mi(et):null,et!==null&&(pe=f(et),Kt=et.tag,et!==pe||Kt!==5&&Kt!==27&&Kt!==6)&&(et=null)):(V=null,et=P),V!==et&&(Kt=lc,ht="onMouseLeave",Y="onMouseEnter",L="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=mc,ht="onPointerLeave",Y="onPointerEnter",L="pointer"),pe=V==null?Rt:Qr(V),W=et==null?Rt:Qr(et),Rt=new Kt(ht,L+"leave",V,a,it),Rt.target=pe,Rt.relatedTarget=W,ht=null,Mi(it)===P&&(Kt=new Kt(Y,L+"enter",et,a,it),Kt.target=W,Kt.relatedTarget=pe,ht=Kt),pe=ht,Kt=V&&et?xt(V,et,xx):null,V!==null&&ab(ft,Rt,V,Kt,!1),et!==null&&pe!==null&&ab(ft,pe,et,Kt,!0)))}t:{if(V=P?Qr(P):window,et=V.nodeName&&V.nodeName.toLowerCase(),et==="select"||et==="input"&&V.type==="file")var Ht=H;else if(m(V))if(Z)Ht=tt;else{Ht=F;var ke=G}else et=V.nodeName,!et||et.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?P&&Xs(P.elementType)&&(Ht=H):Ht=at;if(Ht&&(Ht=Ht(t,P))){y(ft,Ht,a,it);break t}ke&&ke(t,V,P)}switch(ke=P?Qr(P):window,t){case"focusin":(m(ke)||ke.contentEditable==="true")&&(Jt=ke,le=P,he=null);break;case"focusout":he=le=Jt=null;break;case"mousedown":Pn=!0;break;case"contextmenu":case"mouseup":case"dragend":Pn=!1,ce(ft,a,it);break;case"selectionchange":if(se)break;case"keydown":case"keyup":ce(ft,a,it)}var Xt;if(ns)t:{switch(t){case"compositionstart":var ne="onCompositionStart";break t;case"compositionend":ne="onCompositionEnd";break t;case"compositionupdate":ne="onCompositionUpdate";break t}ne=void 0}else ua?el(t,a)&&(ne="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ne="onCompositionStart");ne&&(tl&&a.locale!=="ko"&&(ua||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&ua&&(Xt=Vu()):(Da=it,ts="value"in Da?Da.value:Da.textContent,ua=!0)),ke=Qd(P,ne),0<ke.length&&(ne=new Zo(ne,t,null,a,it),ft.push({event:ne,listeners:ke}),Xt?ne.data=Xt:(Xt=Cr(a),Xt!==null&&(ne.data=Xt)))),(Xt=sf?Qu(t,a):c(t,a))&&(ne=Qd(P,"onBeforeInput"),0<ne.length&&(ke=new Zo("onBeforeInput","beforeinput",null,a,it),ft.push({event:ke,listeners:ne}),ke.data=Xt)),vx(ft,t,P,a,it)}eb(ft,e)})}function qc(t,e,a){return{instance:t,listener:e,currentTarget:a}}function Qd(t,e){for(var a=e+"Capture",r=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=_r(t,a),l!=null&&r.unshift(qc(t,l,u)),l=_r(t,e),l!=null&&r.push(qc(t,l,u))),t.tag===3)return r;t=t.return}return[]}function xx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ab(t,e,a,r,l){for(var u=e._reactName,b=[];a!==null&&a!==r;){var A=a,M=A.alternate,P=A.stateNode;if(A=A.tag,M!==null&&M===r)break;A!==5&&A!==26&&A!==27||P===null||(M=P,l?(P=_r(a,u),P!=null&&b.unshift(qc(a,P,M))):l||(P=_r(a,u),P!=null&&b.push(qc(a,P,M)))),a=a.return}b.length!==0&&t.push({event:e,listeners:b})}var _x=/\r\n?/g,Sx=/\u0000|\uFFFD/g;function ib(t){return(typeof t=="string"?t:""+t).replace(_x,`
`).replace(Sx,"")}function rb(t,e){return e=ib(e),ib(t)===e}function Ve(t,e,a,r,l,u){switch(a){case"children":if(typeof r=="string")e==="body"||e==="textarea"&&r===""||Li(t,r);else if(typeof r=="number"||typeof r=="bigint")e!=="body"&&Li(t,""+r);else return;break;case"className":Vo(t,"class",r);break;case"tabIndex":Vo(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Vo(t,a,r);break;case"style":Wr(t,r,u);return;case"data":if(e!=="object"){Vo(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Bi(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(e!=="input"&&Ve(t,e,"name",l.name,l,null),Ve(t,e,"formEncType",l.formEncType,l,null),Ve(t,e,"formMethod",l.formMethod,l,null),Ve(t,e,"formTarget",l.formTarget,l,null)):(Ve(t,e,"encType",l.encType,l,null),Ve(t,e,"method",l.method,l,null),Ve(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Bi(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Ja);return;case"onScroll":r!=null&&_e("scroll",t);return;case"onScrollEnd":r!=null&&_e("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(o(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Bi(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":_e("beforetoggle",t),_e("toggle",t),qo(t,"popover",r);break;case"xlinkActuate":on(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":on(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":on(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":on(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":on(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":on(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":on(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":on(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":on(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":qo(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Hu.get(a)||a,qo(t,a,r);else return}Vt=!0}function Ip(t,e,a,r,l,u){switch(a){case"style":Wr(t,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(o(60));(u!=null?u.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")Li(t,r);else if(typeof r=="number"||typeof r=="bigint")Li(t,""+r);else return;break;case"onScroll":r!=null&&_e("scroll",t);return;case"onScrollEnd":r!=null&&_e("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Ja);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Io.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),u=a.slice(2,l?a.length-7:void 0),e=t[hn]||null,e=e!=null?e[a]:null,typeof e=="function"&&t.removeEventListener(u,e,l),typeof r=="function")){typeof e!="function"&&e!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(u,r,l);break t}Vt=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):qo(t,a,r)}return}Vt=!0}function Jn(t,e,a){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_e("error",t),_e("load",t);var r=!1,l=!1,u;for(u in a)if(a.hasOwnProperty(u)){var b=a[u];if(b!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ve(t,e,u,b,a,null)}}l&&Ve(t,e,"srcSet",a.srcSet,a,null),r&&Ve(t,e,"src",a.src,a,null);return;case"input":_e("invalid",t);var A=u=b=l=null,M=null,P=null;for(r in a)if(a.hasOwnProperty(r)){var it=a[r];if(it!=null)switch(r){case"name":l=it;break;case"type":b=it;break;case"checked":M=it;break;case"defaultChecked":P=it;break;case"value":u=it;break;case"defaultValue":A=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(o(137,e));break;default:Ve(t,e,r,it,a,null)}}Ys(t,u,A,M,P,b,l,!1);return;case"select":_e("invalid",t),r=b=u=null;for(l in a)if(a.hasOwnProperty(l)&&(A=a[l],A!=null))switch(l){case"value":u=A;break;case"defaultValue":b=A;break;case"multiple":r=A;default:Ve(t,e,l,A,a,null)}e=u,a=b,t.multiple=!!r,e!=null?ca(t,!!r,e,!1):a!=null&&ca(t,!!r,a,!0);return;case"textarea":_e("invalid",t),u=l=r=null;for(b in a)if(a.hasOwnProperty(b)&&(A=a[b],A!=null))switch(b){case"value":r=A;break;case"defaultValue":l=A;break;case"children":u=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(91));break;default:Ve(t,e,b,A,a,null)}Oa(t,r,l,u);return;case"option":for(M in a)if(a.hasOwnProperty(M)&&(r=a[M],r!=null))switch(M){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ve(t,e,M,r,a,null)}return;case"dialog":_e("beforetoggle",t),_e("toggle",t),_e("cancel",t),_e("close",t);break;case"iframe":case"object":_e("load",t);break;case"video":case"audio":for(r=0;r<Ic.length;r++)_e(Ic[r],t);break;case"image":_e("error",t),_e("load",t);break;case"details":_e("toggle",t);break;case"embed":case"source":case"link":_e("error",t),_e("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in a)if(a.hasOwnProperty(P)&&(r=a[P],r!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:Ve(t,e,P,r,a,null)}return;default:if(Xs(e)){for(it in a)a.hasOwnProperty(it)&&(r=a[it],r!==void 0&&Ip(t,e,it,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Ve(t,e,A,r,a,null))}var kx={};function Cx(t,e,a,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,b=null,A=null,M=null,P=null,it=null;for(et in a){var ft=a[et];if(a.hasOwnProperty(et)&&ft!=null)switch(et){case"checked":break;case"value":break;case"defaultValue":M=ft;default:r.hasOwnProperty(et)||Ve(t,e,et,null,r,ft)}}for(var V in r){var et=r[V];if(ft=a[V],r.hasOwnProperty(V)&&(et!=null||ft!=null))switch(V){case"type":et!==ft&&(Vt=!0),u=et;break;case"name":et!==ft&&(Vt=!0),l=et;break;case"checked":et!==ft&&(Vt=!0),P=et;break;case"defaultChecked":et!==ft&&(Vt=!0),it=et;break;case"value":et!==ft&&(Vt=!0),b=et;break;case"defaultValue":et!==ft&&(Vt=!0),A=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(o(137,e));break;default:et!==ft&&Ve(t,e,V,et,r,ft)}}xr(t,b,A,M,P,it,u,l);return;case"select":et=b=A=V=null;for(u in a)if(M=a[u],a.hasOwnProperty(u)&&M!=null)switch(u){case"value":break;case"multiple":et=M;default:r.hasOwnProperty(u)||Ve(t,e,u,null,r,M)}for(l in r)if(u=r[l],M=a[l],r.hasOwnProperty(l)&&(u!=null||M!=null))switch(l){case"value":u!==M&&(Vt=!0),V=u;break;case"defaultValue":u!==M&&(Vt=!0),A=u;break;case"multiple":u!==M&&(Vt=!0),b=u;default:u!==M&&Ve(t,e,l,u,r,M)}e=A,a=b,r=et,V!=null?ca(t,!!a,V,!1):!!r!=!!a&&(e!=null?ca(t,!!a,e,!0):ca(t,!!a,a?[]:"",!1));return;case"textarea":et=V=null;for(A in a)if(l=a[A],a.hasOwnProperty(A)&&l!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ve(t,e,A,null,r,l)}for(b in r)if(l=r[b],u=a[b],r.hasOwnProperty(b)&&(l!=null||u!=null))switch(b){case"value":l!==u&&(Vt=!0),V=l;break;case"defaultValue":l!==u&&(Vt=!0),et=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==u&&Ve(t,e,b,l,r,u)}Bu(t,V,et);return;case"option":for(var Rt in a)if(V=a[Rt],a.hasOwnProperty(Rt)&&V!=null&&!r.hasOwnProperty(Rt))switch(Rt){case"selected":t.selected=!1;break;default:Ve(t,e,Rt,null,r,V)}for(M in r)if(V=r[M],et=a[M],r.hasOwnProperty(M)&&V!==et&&(V!=null||et!=null))switch(M){case"selected":V!==et&&(Vt=!0),t.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:Ve(t,e,M,V,r,et)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)V=a[Kt],a.hasOwnProperty(Kt)&&V!=null&&!r.hasOwnProperty(Kt)&&Ve(t,e,Kt,null,r,V);for(P in r)if(V=r[P],et=a[P],r.hasOwnProperty(P)&&V!==et&&(V!=null||et!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(o(137,e));break;default:Ve(t,e,P,V,r,et)}return;default:if(Xs(e)){for(var pe in a)V=a[pe],a.hasOwnProperty(pe)&&V!==void 0&&!r.hasOwnProperty(pe)&&Ip(t,e,pe,void 0,r,V);for(it in r)V=r[it],et=a[it],!r.hasOwnProperty(it)||V===et||V===void 0&&et===void 0||Ip(t,e,it,V,r,et);return}}for(var Y in a)V=a[Y],a.hasOwnProperty(Y)&&V!=null&&!r.hasOwnProperty(Y)&&Ve(t,e,Y,null,r,V);for(ft in r)V=r[ft],et=a[ft],!r.hasOwnProperty(ft)||V===et||V==null&&et==null||Ve(t,e,ft,V,r,et)}function sb(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ax(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],u=l.transferSize,b=l.initiatorType,A=l.duration;if(u&&A&&sb(b)){for(b=0,A=l.responseEnd,r+=1;r<a.length;r++){var M=a[r],P=M.startTime;if(P>A)break;var it=M.transferSize,ft=M.initiatorType;it&&sb(ft)&&(M=M.responseEnd,b+=it*(M<A?1:(A-P)/(M-P)))}if(--r,e+=8*(u+b)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var qp=null,Vp=null;function Vc(t){return t.nodeType===9?t:t.ownerDocument}function ob(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lb(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function cb(t,e,a,r){return a=Vc(a).createElement(t),a[wn]=r,a[hn]=e,Jn(a,t,e),Je(a),a}function Kp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gp=null;function Tx(){var t=window.event;return t&&t.type==="popstate"?t===Gp?!1:(Gp=t,!0):(Gp=null,!1)}var Fp=typeof setTimeout=="function"?setTimeout:void 0,Ex=typeof clearTimeout=="function"?clearTimeout:void 0,ub=typeof Promise=="function"?Promise:void 0,db=typeof requestAnimationFrame=="function"?requestAnimationFrame:Fp,zx=typeof queueMicrotask=="function"?queueMicrotask:typeof ub<"u"?function(t){return ub.resolve(null).then(t).catch(Nx)}:Fp;function Nx(t){setTimeout(function(){throw t})}function _s(t){return t==="head"}function hb(t,e){var a=e,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(l),Rl(e);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")tm(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,tm(a);for(var u=a.firstChild;u;){var b=u.nextSibling,A=u.nodeName;u[Xr]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=b}}else a==="body"&&tm(t.ownerDocument.body);a=l}while(a);Rl(e)}function fb(t,e){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?e?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(e?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function pb(t,e,a){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(e=t.getClientRects(),e.length===1)var r=1;else for(var l=r=0;l<e.length;l++){var u=e[l];0<u.width&&0<u.height&&r++}r===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function mb(t,e){t=t.style,e=e.style;var a=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(a=e.display,t.display=a==null||typeof a=="boolean"?"":a,a=e.margin,a!=null?t.margin=a:(a=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function Ox(t,e,a){return a=a.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Yp(t){var e=t.getBoundingClientRect(),a=getComputedStyle(t);return Ox(e,a,t)}function jx(t){return t.documentElement.clientHeight}function Dx(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Rx(t,e,a,r,l,u,b,A,M){var P=e.nodeType===9?e:e.ownerDocument;try{var it=P.startViewTransition({update:function(){var V=P.defaultView,et=V.navigation&&V.navigation.transition,Rt=P.fonts.status;r();var Kt=[];if(Rt==="loaded"&&(jx(P),P.fonts.status==="loading"&&Kt.push(P.fonts.ready)),Rt=Kt.length,t!==null)for(var pe=t.suspenseyImages,Y=0,L=0;L<pe.length;L++){var W=pe[L];if(!W.complete){var ht=W.getBoundingClientRect();if(0<ht.bottom&&0<ht.right&&ht.top<V.innerHeight&&ht.left<V.innerWidth){if(Y+=$b(W),Y>Jd){Kt.length=Rt;break}W=new Promise(Dx.bind(W)),Kt.push(W)}}}if(0<Kt.length)return V=Promise.race([Promise.all(Kt),new Promise(function(Ht){return setTimeout(Ht,500)})]).then(l,l),(et?Promise.allSettled([et.finished,V]):V).then(u,u);if(l(),et)return et.finished.then(u,u);u()},types:a});P.__reactViewTransition=it;var ft=[];return it.ready.then(function(){for(var V=P.documentElement.getAnimations({subtree:!0}),et=0;et<V.length;et++){var Rt=V[et],Kt=Rt.effect,pe=Kt.pseudoElement;if(pe!=null&&pe.startsWith("::view-transition")){ft.push(Rt),Rt=Kt.getKeyframes();for(var Y=pe=void 0,L=!0,W=0;W<Rt.length;W++){var ht=Rt[W],Ht=ht.width;if(pe===void 0)pe=Ht;else if(pe!==Ht){L=!1;break}if(Ht=ht.height,Y===void 0)Y=Ht;else if(Y!==Ht){L=!1;break}delete ht.width,delete ht.height,ht.transform==="none"&&delete ht.transform}L&&pe!==void 0&&Y!==void 0&&(Kt.setKeyframes(Rt),L=getComputedStyle(Kt.target,Kt.pseudoElement),L.width!==pe||L.height!==Y)&&(L=Rt[0],L.width=pe,L.height=Y,L=Rt[Rt.length-1],L.width=pe,L.height=Y,Kt.setKeyframes(Rt))}}b()},function(V){P.__reactViewTransition===it&&(P.__reactViewTransition=null);try{if(typeof V=="object"&&V!==null)switch(V.name){case"InvalidStateError":(V.message==="View transition was skipped because document visibility state is hidden."||V.message==="Skipping view transition because document visibility state has become hidden."||V.message==="Skipping view transition because viewport size changed."||V.message==="Transition was aborted because of invalid state")&&(V=null)}V!==null&&M(V)}finally{r(),l(),b()}}),it.finished.finally(function(){for(var V=0;V<ft.length;V++)ft[V].cancel();P.__reactViewTransition===it&&(P.__reactViewTransition=null),A()}),it}catch{return r(),l(),b(),null}}function bo(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}bo.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:wt({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},bo.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,a=t.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var u=a[l].effect;u!==null&&u.target===t&&u.pseudoElement===e&&r.push(a[l])}return r},bo.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function gb(t){return{name:t,group:new bo("group",t),imagePair:new bo("image-pair",t),old:new bo("old",t),new:new bo("new",t)}}function Ua(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}Ua.prototype.addEventListener=function(t,e,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(bb(u,t,e,a)===-1){var b=this,A=e;a!=null&&typeof a!="boolean"&&a.once===!0&&(A=function(M){b.removeEventListener(t,e,a),typeof e=="function"?e.call(this,M):e.handleEvent(M)}),r!==null&&(l=b.removeEventListener.bind(b,t,e,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=El(a),u.push({type:t,listener:e,optionsOrUseCapture:a,attachedListener:A,cleanup:l}),S(this._fragmentFiber.child,!1,Mx,t,A,r)}this._eventListeners=u}};function Mx(t,e,a,r){return nt(t).addEventListener(e,a,r),!1}Ua.prototype.removeEventListener=function(t,e,a){var r=this._eventListeners;if(r!==null&&(e=bb(r,t,e,a),e!==-1)){var l=r[e];a=l.attachedListener;var u=l.cleanup;l=El(l.optionsOrUseCapture),S(this._fragmentFiber.child,!1,$x,t,a,l),r.splice(e,1),u!==null&&u()}};function $x(t,e,a,r){return nt(t).removeEventListener(e,a,r),!1}function El(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function vb(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function bb(t,e,a,r){if(t.length===0)return-1;r=vb(r);for(var l=0;l<t.length;l++){var u=t[l];if(u.type===e&&u.listener===a&&vb(u.optionsOrUseCapture)===r)return l}return-1}Ua.prototype.dispatchEvent=function(t){var e=E(this._fragmentFiber);if(e===null)return!0;e=nt(e);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=e.nodeType===9?e.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var u=a[l];r.addEventListener(u.type,u.attachedListener,El(u.optionsOrUseCapture))}if(e.appendChild(r),t=r.dispatchEvent(t),a)for(l=0;l<a.length;l++)u=a[l],r.removeEventListener(u.type,u.attachedListener,El(u.optionsOrUseCapture));return e.removeChild(r),t}return e.dispatchEvent(t)},Ua.prototype.focus=function(t){S(this._fragmentFiber.child,!0,yb,t,void 0,void 0)};function yb(t,e){return t.tag===6?!1:(t=nt(t),Px(t,e))}Ua.prototype.focusLast=function(t){var e=[];S(this._fragmentFiber.child,!0,Pp,e,void 0,void 0);for(var a=e.length-1;0<=a&&!yb(e[a],t);a--);};function Pp(t,e){return e.push(t),!1}Ua.prototype.blur=function(){var t=E(this._fragmentFiber);t!==null&&(t=nt(t),t=Vc(t).activeElement,t!==null&&S(this._fragmentFiber.child,!1,Lx,t,void 0,void 0))};function Lx(t,e){return t.tag===6?!1:(t=nt(t),t===e||t.contains(e)?(e.blur(),!0):!1)}Ua.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),S(this._fragmentFiber.child,!1,Bx,t,void 0,void 0)};function Bx(t,e){return t.tag===6||(t=nt(t),e.observe(t)),!1}Ua.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),S(this._fragmentFiber.child,!1,Ux,t,void 0,void 0);for(var a=e=0;a<ki.length;a++){var r=ki[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):ki[e++]=r}ki.length=e}};function Ux(t,e){return t.tag===6||(t=nt(t),e.unobserve(t)),!1}var ki=[],Xp=!1;function Hx(t,e,a){ki.push({fragmentInstance:t,observer:e,instance:a}),Xp||(Xp=!0,Xx(function(){Xp=!1;var r=ki;ki=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}Ua.prototype.getClientRects=function(){var t=[];return S(this._fragmentFiber.child,!1,Ix,t,void 0,void 0),t};function Ix(t,e){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),e.push.apply(e,a.getClientRects())}else t=nt(t),e.push.apply(e,t.getClientRects());return!1}Ua.prototype.getRootNode=function(t){var e=E(this._fragmentFiber);return e===null?this:nt(e).getRootNode(t)},Ua.prototype.compareDocumentPosition=function(t){var e=E(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];S(this._fragmentFiber.child,!1,Pp,a,void 0,void 0);var r=nt(e);if(a.length===0){if(a=r,j(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(a=e)}e=this._fragmentFiber;var l=r=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=D(e)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=nt(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=nt(a[0]),l=nt(a[a.length-1]);var u=j(this._fragmentFiber)?e.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var b=e.compareDocumentPosition(t),A=l.compareDocumentPosition(t),M=b&Node.DOCUMENT_POSITION_CONTAINED_BY||A&Node.DOCUMENT_POSITION_CONTAINED_BY;return A=r&&u&&b&Node.DOCUMENT_POSITION_FOLLOWING&&A&Node.DOCUMENT_POSITION_PRECEDING,e=r&&e===t||u&&l===t||M||A?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&e===t||!u&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:b,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||qx(e,this._fragmentFiber,a[0],a[a.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function qx(t,e,a,r,l){var u=Mi(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===e||u.alternate===e)){a=!0;break t}u=u.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;t:{for(u=e,e=E(e);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==e&&u.alternate!==e)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!u)&&!(e=u===a)&&(e=xt(a,u,dt),e===null?e=!1:(S(e,!0,Ct,u,a),u=Et,Et=null,e=u!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!u)&&!(e=u===r)&&(e=xt(r,u,dt),e===null?e=!1:(S(e,!0,rt,u,r),u=Et,ut=Et=null,e=u!==null)),e):!1}function wb(t,e){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}Ua.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(o(566));var e=[];S(this._fragmentFiber.child,!1,Pp,e,void 0,void 0);var a=t!==!1;if(e.length===0){var r=D(this._fragmentFiber);if(r=a?r[1]||r[0]||E(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=nt(r),wb(t,a);return}if(r=nt(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?e.length-1:0;r!==(a?-1:e.length);){var l=e[r];l.tag===6?(l=nt(l),wb(l,a)):nt(l).scrollIntoView(t),r+=a?-1:1}};function Vx(t,e){return t=nt(t),xb(t,e),!1}function xb(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function _b(t,e){var a=e._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.addEventListener(l.type,l.attachedListener,El(l.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(u){for(var b=0,A=0;A<ki.length;A++){var M=ki[A];(M.fragmentInstance!==e||M.observer!==u||M.instance!==t)&&(ki[b++]=M)}ki.length=b,u.observe(t)}),xb(t,e))}function Kx(t,e){var a=e._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.removeEventListener(l.type,l.attachedListener,El(l.optionsOrUseCapture))}t.nodeType!==3&&(a=e._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?Hx(e,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Qp(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var a=e;switch(e=e.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qp(a),Ri(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Gx(t,e,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Xr])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function Fx(t,e,a){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function Sb(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=li(t.nextSibling),t===null))return null;return t}function Zp(t){return t.data==="$?"||t.data==="$~"}function Wp(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Yx(t,e){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||a.readyState!=="loading")e();else{var r=function(){e(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function li(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Jp=null;function kb(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(e===0)return li(t.nextSibling);e--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||e++}t=t.nextSibling}return null}function Cb(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(e===0)return t;e--}else a!=="/$"&&a!=="/&"||e++}t=t.previousSibling}return null}function Px(t,e){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function Xx(t){db(function(){db(function(e){return t(e)})})}function Ab(t,e,a){switch(e=Vc(a),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function Tb(t,e,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&Ve(t,e,r,null,kx,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Ja&&(t.onclick=null),Ri(t)}function tm(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Ri(t)}var ci=new Map,Eb=new Set;function Kc(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var Lr=At.d;At.d={f:Qx,r:Zx,D:Wx,C:Jx,L:t_,m:e_,X:a_,S:n_,M:i_};function Qx(){var t=Lr.f(),e=Kd();return t||e}function Zx(t){var e=yr(t);e!==null&&e.tag===5&&e.type==="form"?Nv(e):Lr.r(t)}var zl=typeof document>"u"?null:document;function zb(t,e,a){var r=zl;if(r&&typeof e=="string"&&e){var l=tn(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),Eb.has(l)||(Eb.add(l),t={rel:t,crossOrigin:a,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),Jn(e,"link",t),Je(e),r.head.appendChild(e)))}}function Wx(t){Lr.D(t),zb("dns-prefetch",t,null)}function Jx(t,e){Lr.C(t,e),zb("preconnect",t,e)}function t_(t,e,a){Lr.L(t,e,a);var r=zl;if(r&&t&&e){var l='link[rel="preload"][as="'+tn(e)+'"]';e==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+tn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+tn(a.imageSizes)+'"]')):l+='[href="'+tn(t)+'"]';var u=l;switch(e){case"style":u=Nl(t);break;case"script":u=Ol(t)}if(!(ci.has(u)||(t=wt({rel:"preload",href:e==="image"&&a&&a.imageSrcSet?void 0:t,as:e},a),ci.set(u,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(Gc(u))||e==="script"&&r.querySelector(Fc(u))))){var b=r.createElement("link");Jn(b,"link",t),e==="style"&&(b[br]=!0,b.onload=b.onerror=function(){Zr(b)}),Je(b),r.head.appendChild(b)}}}function e_(t,e){Lr.m(t,e);var a=zl;if(a&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+tn(r)+'"][href="'+tn(t)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Ol(t)}if(!ci.has(u)&&(t=wt({rel:"modulepreload",href:t},e),ci.set(u,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fc(u)))return}r=a.createElement("link"),Jn(r,"link",t),Je(r),a.head.appendChild(r)}}}function n_(t,e,a){Lr.S(t,e,a);var r=zl;if(r&&t){var l=ze(r).hoistableStyles,u=Nl(t);e=e||"default";var b=l.get(u);if(!b){var A={loading:0,preload:null};if(b=r.querySelector(Gc(u)))A.loading=5;else{t=wt({rel:"stylesheet",href:t,"data-precedence":e},a),(a=ci.get(u))&&em(t,a);var M=b=r.createElement("link");Je(M),Jn(M,"link",t),M._p=new Promise(function(P,it){M.onload=P,M.onerror=it}),M.addEventListener("load",function(){A.loading|=1}),M.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Zd(b,e,r)}b={type:"stylesheet",instance:b,count:1,state:A},l.set(u,b)}}}function a_(t,e){Lr.X(t,e);var a=zl;if(a&&t){var r=ze(a).hoistableScripts,l=Ol(t),u=r.get(l);u||(u=a.querySelector(Fc(l)),u||(t=wt({src:t,async:!0},e),(e=ci.get(l))&&nm(t,e),u=a.createElement("script"),Je(u),Jn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function i_(t,e){Lr.M(t,e);var a=zl;if(a&&t){var r=ze(a).hoistableScripts,l=Ol(t),u=r.get(l);u||(u=a.querySelector(Fc(l)),u||(t=wt({src:t,async:!0,type:"module"},e),(e=ci.get(l))&&nm(t,e),u=a.createElement("script"),Je(u),Jn(u,"link",t),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function Nb(t,e,a,r){var l=(l=jn.current)?Kc(l):null;if(!l)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Nl(a.href),e=ze(l).hoistableStyles,r=e.get(a),r||(r={type:"style",instance:null,count:0,state:null},e.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Nl(a.href);var u=ze(l).hoistableStyles,b=u.get(t);if(b||(l=l.ownerDocument||l,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,b),(u=l.querySelector(Gc(t)))?u._p||(b.instance=u,b.state.loading=5):(u=ci.get(t),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,u)),r_(l,t,u,b.state))),e&&r===null)throw Error(o(528,""));return b}if(e&&r!==null)throw Error(o(529,""));return null;case"script":return e=a.async,a=a.src,typeof a=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(a=Ol(a),e=ze(l).hoistableScripts,r=e.get(a),r||(r={type:"script",instance:null,count:0,state:null},e.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Nl(t){return'href="'+tn(t)+'"'}function Gc(t){return'link[rel="stylesheet"]['+t+"]"}function Ob(t){return wt({},t,{"data-precedence":t.precedence,precedence:null})}function r_(t,e,a,r){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[br]!==!0){r.loading=1;return}}else e=t.createElement("link"),e[br]=!0,e.onload=e.onerror=Zr.bind(null,e),Jn(e,"link",a),Je(e),t.head.appendChild(e);r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2})}function Ol(t){return'[src="'+tn(t)+'"]'}function Fc(t){return"script[async]"+t}function jb(t,e,a){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+tn(a.href)+'"]');if(r)return e.instance=r,Je(r),r;var l=wt({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Je(r),Jn(r,"style",l),Zd(r,a.precedence,t),e.instance=r;case"stylesheet":l=Nl(a.href);var u=t.querySelector(Gc(l));if(u)return e.state.loading|=4,e.instance=u,Je(u),u;r=Ob(a),(l=ci.get(l))&&em(r,l),u=(t.ownerDocument||t).createElement("link"),Je(u);var b=u;return b._p=new Promise(function(A,M){b.onload=A,b.onerror=M}),Jn(u,"link",r),e.state.loading|=4,Zd(u,a.precedence,t),e.instance=u;case"script":return u=Ol(a.src),(l=t.querySelector(Fc(u)))?(e.instance=l,Je(l),l):(r=a,(l=ci.get(u))&&(r=wt({},a),nm(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Je(l),Jn(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Zd(r,a.precedence,t));return e.instance}function Zd(t,e,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,b=0;b<r.length;b++){var A=r[b];if(A.dataset.precedence===e)u=A;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=a.nodeType===9?a.head:a,e.insertBefore(t,e.firstChild))}function em(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function nm(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Wd=null;function Db(t,e,a){if(Wd===null){var r=new Map,l=Wd=new Map;l.set(a,r)}else l=Wd,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var u=a[l];if(!(u[Xr]||u[wn]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var b=u.getAttribute(e)||"";b=t+b;var A=r.get(b);A?A.push(u):r.set(b,[u])}}return r}function am(t,e,a){t=t.ownerDocument||t,t.head.insertBefore(a,e==="title"?t.querySelector("head > title"):null)}function s_(t,e,a){if(a===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function Rb(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Mb(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $b(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Lb(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=$b(e),t.suspenseyImages.push(e)),t=c_.bind(t),e.decode().then(t,t))}function o_(t,e,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Nl(r.href),u=e.querySelector(Gc(l));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Yc.bind(t),e.then(t,t)),a.state.loading|=4,a.instance=u,Je(u);return}u=e.ownerDocument||e,r=Ob(r),(l=ci.get(l))&&em(r,l),u=u.createElement("link"),Je(u);var b=u;b._p=new Promise(function(A,M){b.onload=A,b.onerror=M}),Jn(u,"link",r),a.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,e),(e=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Yc.bind(t),e.addEventListener("load",a),e.addEventListener("error",a))}}var Jd=0;function l_(t,e){return t.stylesheets&&t.count===0&&eh(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&eh(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Jd===0&&(Jd=62500*Ax());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&eh(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Jd?50:800)+e);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Bb(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)eh(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function Yc(){this.count--,Bb(this)}function c_(){this.imgCount--,Bb(this)}var th=null;function eh(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,th=new Map,e.forEach(u_,t),th=null,Yc.call(t))}function u_(t,e){if(!(e.state.loading&4)){var a=th.get(t);if(a)var r=a.get(null);else{a=new Map,th.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var b=l[u];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(a.set(b.dataset.precedence,b),r=b)}r&&a.set(null,r)}l=e.instance,b=l.getAttribute("data-precedence"),u=a.get(b)||r,u===r&&a.set(null,l),a.set(b,l),this.count++,r=Yc.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var jl={$$typeof:ve,Provider:null,Consumer:null,_currentValue:ye,_currentValue2:ye,_threadCount:0};function d_(t,e,a,r,l,u,b,A,M){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.hiddenUpdates=Wa(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=M,this.transitionTypes=null,this.incompleteTransitions=new Map}function Ub(t,e,a,r,l,u,b,A,M,P,it,ft){return t=new d_(t,e,a,b,M,P,it,ft,A),e=1,u===!0&&(e|=24),u=ya(3,null,null,e),t.current=u,u.stateNode=t,e=bf(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:r,isDehydrated:a,cache:e},_f(u),t}function Hb(t){return t?(t=il,t):il}function Ib(t,e,a,r,l,u){l=Hb(l),r.context===null?r.context=l:r.pendingContext=l,r=us(e),r.payload={element:a},u=u===void 0?null:u,u!==null&&(r.callback=u),a=ds(t,r,e),a!==null&&(Sa(a,t,e),kc(a,t,e))}function qb(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<e?a:e}}function im(t,e){qb(t,e),(t=t.alternate)&&qb(t,e)}function Vb(t){if(t.tag===13||t.tag===31){var e=to(t,67108864);e!==null&&Sa(e,t,67108864),im(t,67108864)}}function Kb(t){if(t.tag===13||t.tag===31){var e=Ba();e=fi(e);var a=to(t,e);a!==null&&Sa(a,t,e),im(t,e)}}var Dl=!0;function h_(t,e,a,r){var l=jt.T;jt.T=null;var u=At.p;try{At.p=2,rm(t,e,a,r)}finally{At.p=u,jt.T=l}}function f_(t,e,a,r){var l=jt.T;jt.T=null;var u=At.p;try{At.p=8,rm(t,e,a,r)}finally{At.p=u,jt.T=l}}function rm(t,e,a,r){if(Dl){var l=sm(r);if(l===null)Hp(t,e,r,nh,a),Fb(t,r);else if(m_(l,t,e,a,r))r.stopPropagation();else if(Fb(t,r),e&4&&-1<p_.indexOf(t)){for(;l!==null;){var u=yr(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var b=mr(u.pendingLanes);if(b!==0){var A=u;for(A.pendingLanes|=2,A.entangledLanes|=2;b;){var M=1<<31-Hn(b);A.entanglements[1]|=M,b&=~M}Ji(u),(Re&6)===0&&(Id=Un()+500,Hc(0))}}break;case 31:case 13:A=to(u,2),A!==null&&Sa(A,u,2),Kd(),im(u,2)}if(u=sm(r),u===null&&Hp(t,e,r,nh,a),u===l)break;l=u}l!==null&&r.stopPropagation()}else Hp(t,e,r,null,a)}}function sm(t){return t=Jr(t),om(t)}var nh=null;function om(t){if(nh=null,t=Mi(t),t!==null){var e=f(t);if(e===null)t=null;else{var a=e.tag;if(a===13){if(t=g(e),t!==null)return t;t=null}else if(a===31){if(t=w(e),t!==null)return t;t=null}else if(a===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return nh=t,null}function Gb(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch($t()){case Lo:return 2;case Jl:return 8;case Yr:case Ru:return 32;case Bo:return 268435456;default:return 32}default:return 32}}var lm=!1,Ss=null,ks=null,Cs=null,Pc=new Map,Xc=new Map,As=[],p_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Fb(t,e){switch(t){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":ks=null;break;case"mouseover":case"mouseout":Cs=null;break;case"pointerover":case"pointerout":Pc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xc.delete(e.pointerId)}}function Qc(t,e,a,r,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:a,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},e!==null&&(e=yr(e),e!==null&&Vb(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function m_(t,e,a,r,l){switch(e){case"focusin":return Ss=Qc(Ss,t,e,a,r,l),!0;case"dragenter":return ks=Qc(ks,t,e,a,r,l),!0;case"mouseover":return Cs=Qc(Cs,t,e,a,r,l),!0;case"pointerover":var u=l.pointerId;return Pc.set(u,Qc(Pc.get(u)||null,t,e,a,r,l)),!0;case"gotpointercapture":return u=l.pointerId,Xc.set(u,Qc(Xc.get(u)||null,t,e,a,r,l)),!0}return!1}function Yb(t){var e=Mi(t.target);if(e!==null){var a=f(e);if(a!==null){if(e=a.tag,e===13){if(e=g(a),e!==null){t.blockedOn=e,Vs(t.priority,function(){Kb(a)});return}}else if(e===31){if(e=w(a),e!==null){t.blockedOn=e,Vs(t.priority,function(){Kb(a)});return}}else if(e===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ah(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var a=sm(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);sc=r,a.target.dispatchEvent(r),sc=null}else return e=yr(a),e!==null&&Vb(e),t.blockedOn=a,!1;e.shift()}return!0}function Pb(t,e,a){ah(t)&&a.delete(e)}function g_(){lm=!1,Ss!==null&&ah(Ss)&&(Ss=null),ks!==null&&ah(ks)&&(ks=null),Cs!==null&&ah(Cs)&&(Cs=null),Pc.forEach(Pb),Xc.forEach(Pb)}function ih(t,e){t.blockedOn===e&&(t.blockedOn=null,lm||(lm=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,g_)))}var rh=null;function Xb(t){rh!==t&&(rh=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){rh===t&&(rh=null);for(var e=0;e<t.length;e+=3){var a=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(om(r||a)===null)continue;break}var u=yr(a);u!==null&&(t.splice(e,3),e-=3,Vf(u,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Rl(t){function e(M){return ih(M,t)}Ss!==null&&ih(Ss,t),ks!==null&&ih(ks,t),Cs!==null&&ih(Cs,t),Pc.forEach(e),Xc.forEach(e);for(var a=0;a<As.length;a++){var r=As[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<As.length&&(a=As[0],a.blockedOn===null);)Yb(a),a.blockedOn===null&&As.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],u=a[r+1],b=l[hn]||null;if(typeof u=="function")b||Xb(a);else if(b){var A=null;if(u&&u.hasAttribute("formAction")){if(l=u,b=u[hn]||null)A=b.formAction;else if(om(l)!==null)continue}else A=b.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),Xb(a)}}}function Qb(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(b){return l=b})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function cm(t){this._internalRoot=t}sh.prototype.render=cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var a=e.current,r=Ba();Ib(a,r,t,e,null,null)},sh.prototype.unmount=cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ib(t.current,2,null,t,null,null),Kd(),e[vr]=null}};function sh(t){this._internalRoot=t}sh.prototype.unstable_scheduleHydration=function(t){if(t){var e=ec();t={blockedOn:null,target:t,priority:e};for(var a=0;a<As.length&&e!==0&&e<As[a].priority;a++);As.splice(a,0,t),a===0&&Yb(t)}};var Zb=i.version;if(Zb!=="19.3.0")throw Error(o(527,Zb,"19.3.0"));At.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=C(e),t=t!==null?z(t):null,t=t===null?null:t.stateNode,t};var v_={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:jt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var oh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!oh.isDisabled&&oh.supportsFiber)try{Xa=oh.inject(v_),_n=oh}catch{}}return Wc.createRoot=function(t,e){if(!d(t))throw Error(o(299));var a=!1,r="",l=Hv,u=Iv,b=qv;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(b=e.onRecoverableError)),e=Ub(t,1,!1,null,null,a,r,null,l,u,b,Qb),t[vr]=e.current,Up(t),new cm(e)},Wc.hydrateRoot=function(t,e,a){if(!d(t))throw Error(o(299));var r=!1,l="",u=Hv,b=Iv,A=qv,M=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(b=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(M=a.formState)),e=Ub(t,1,!0,e,a??null,r,l,M,u,b,A,Qb),e.context=Hb(null),a=e.current,r=Ba(),r=fi(r),l=us(r),l.callback=null,ds(a,l,r),a=r,e.current.lanes=a,Pr(e,a),Ji(e),t[vr]=e.current,Up(t),new sh(e)},Wc.version="19.3.0",Wc}var oy;function D_(){if(oy)return hm.exports;oy=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),hm.exports=j_(),hm.exports}var R_=D_(),vh={exports:{}},M_=vh.exports,ly;function $_(){return ly||(ly=1,(function(n,i){((s,o)=>{n.exports=o()})(M_,function(){var s=function(c,h){return(s=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(m,y){m.__proto__=y}:function(m,y){for(var _ in y)Object.prototype.hasOwnProperty.call(y,_)&&(m[_]=y[_])}))(c,h)},o=function(){return(o=Object.assign||function(c){for(var h,m=1,y=arguments.length;m<y;m++)for(var _ in h=arguments[m])Object.prototype.hasOwnProperty.call(h,_)&&(c[_]=h[_]);return c}).apply(this,arguments)};function d(c,h,m){for(var y,_=0,k=h.length;_<k;_++)!y&&_ in h||((y=y||Array.prototype.slice.call(h,0,_))[_]=h[_]);return c.concat(y||Array.prototype.slice.call(h))}var f=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:__,g=Object.keys,w=Array.isArray;function x(c,h){return typeof h=="object"&&g(h).forEach(function(m){c[m]=h[m]}),c}typeof Promise>"u"||f.Promise||(f.Promise=Promise);var C=Object.getPrototypeOf,z={}.hasOwnProperty;function S(c,h){return z.call(c,h)}function E(c,h){typeof h=="function"&&(h=h(C(c))),(typeof Reflect>"u"?g:Reflect.ownKeys)(h).forEach(function(m){D(c,m,h[m])})}var j=Object.defineProperty;function D(c,h,m,y){j(c,h,x(m&&S(m,"get")&&typeof m.get=="function"?{get:m.get,set:m.set,configurable:!0}:{value:m,configurable:!0,writable:!0},y))}function Q(c){return{from:function(h){return c.prototype=Object.create(h.prototype),D(c.prototype,"constructor",c),{extend:E.bind(null,c.prototype)}}}}var nt=Object.getOwnPropertyDescriptor,Et=[].slice;function ut(c,h,m){return Et.call(c,h,m)}function Ct(c,h){return h(c)}function rt(c){if(!c)throw new Error("Assertion Failed")}function dt(c){f.setImmediate?setImmediate(c):setTimeout(c,0)}function xt(c,h){if(typeof h=="string"&&S(c,h))return c[h];if(!h)return c;if(typeof h!="string"){for(var m=[],y=0,_=h.length;y<_;++y){var k=xt(c,h[y]);m.push(k)}return m}var N,O=h.indexOf(".");return O===-1||(N=c[h.substr(0,O)])==null?void 0:xt(N,h.substr(O+1))}function wt(c,h,m){if(c&&h!==void 0&&!("isFrozen"in Object&&Object.isFrozen(c)))if(typeof h!="string"&&"length"in h){rt(typeof m!="string"&&"length"in m);for(var y=0,_=h.length;y<_;++y)wt(c,h[y],m[y])}else{var k=h.indexOf(".");if(k!==-1){var N=h.substr(0,k),k=h.substr(k+1);if(k==="")m===void 0?w(c)&&!isNaN(parseInt(N))?c.splice(N,1):delete c[N]:c[N]=m;else{var O=c[N];if(!O||!S(c,N)){if(m===void 0)return;O=c[N]={}}wt(O,k,m)}}else m===void 0?w(c)&&!isNaN(parseInt(h))?c.splice(h,1):delete c[h]:c[h]=m}}function vt(c){var h,m={};for(h in c)S(c,h)&&(m[h]=c[h]);return m}var ot=[].concat;function gt(c){return ot.apply([],c)}var Ee="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(gt([8,16,32,64].map(function(c){return["Int","Uint","Float"].map(function(h){return h+c+"Array"})}))).filter(function(c){return f[c]}),Qt=new Set(Ee.map(function(c){return f[c]})),oe=null;function de(c){return oe=new WeakMap,c=(function h(m){if(!m||typeof m!="object")return m;var y=oe.get(m);if(y)return y;if(w(m)){y=[],oe.set(m,y);for(var _=0,k=m.length;_<k;++_)y.push(h(m[_]))}else if(Qt.has(m.constructor))y=m;else{var N,O=C(m);for(N in y=O===Object.prototype?{}:Object.create(O),oe.set(m,y),m)S(m,N)&&(y[N]=h(m[N]))}return y})(c),oe=null,c}var Ne={}.toString;function ve(c){return Ne.call(c).slice(8,-1)}var zt=typeof Symbol<"u"?Symbol.iterator:"@@iterator",qt=typeof zt=="symbol"?function(c){var h;return c!=null&&(h=c[zt])&&h.apply(c)}:function(){return null};function Lt(c,h){h=c.indexOf(h),0<=h&&c.splice(h,1)}var ie={};function re(c){var h,m,y,_;if(arguments.length===1){if(w(c))return c.slice();if(this===ie&&typeof c=="string")return[c];if(_=qt(c))for(m=[];!(y=_.next()).done;)m.push(y.value);else{if(c==null)return[c];if(typeof(h=c.length)!="number")return[c];for(m=new Array(h);h--;)m[h]=c[h]}}else for(h=arguments.length,m=new Array(h);h--;)m[h]=arguments[h];return m}var Gt=typeof Symbol<"u"?function(c){return c[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},Ee=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Bn=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(Ee),va={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function B(c,h){this.name=c,this.message=h}function st(c,h){return c+". Errors: "+Object.keys(h).map(function(m){return h[m].toString()}).filter(function(m,y,_){return _.indexOf(m)===y}).join(`
`)}function yt(c,h,m,y){this.failures=h,this.failedKeys=y,this.successCount=m,this.message=st(c,h)}function $(c,h){this.name="BulkError",this.failures=Object.keys(h).map(function(m){return h[m]}),this.failuresByPos=h,this.message=st(c,this.failures)}Q(B).from(Error).extend({toString:function(){return this.name+": "+this.message}}),Q(yt).from(B),Q($).from(B);var bt=Bn.reduce(function(c,h){return c[h]=h+"Error",c},{}),pt=B,lt=Bn.reduce(function(c,h){var m=h+"Error";function y(_,k){this.name=m,_?typeof _=="string"?(this.message="".concat(_).concat(k?`
 `+k:""),this.inner=k||null):typeof _=="object"&&(this.message="".concat(_.name," ").concat(_.message),this.inner=_):(this.message=va[h]||m,this.inner=null)}return Q(y).from(pt),c[h]=y,c},{}),jt=(lt.Syntax=SyntaxError,lt.Type=TypeError,lt.Range=RangeError,Ee.reduce(function(c,h){return c[h+"Error"]=lt[h],c},{}));Ee=Bn.reduce(function(c,h){return["Syntax","Type","Range"].indexOf(h)===-1&&(c[h+"Error"]=lt[h]),c},{});function At(){}function ye(c){return c}function Ue(c,h){return c==null||c===ye?h:function(m){return h(c(m))}}function He(c,h){return function(){c.apply(this,arguments),h.apply(this,arguments)}}function Ln(c,h){return c===At?h:function(){var m=c.apply(this,arguments),y=(m!==void 0&&(arguments[0]=m),this.onsuccess),_=this.onerror,k=(this.onsuccess=null,this.onerror=null,h.apply(this,arguments));return y&&(this.onsuccess=this.onsuccess?He(y,this.onsuccess):y),_&&(this.onerror=this.onerror?He(_,this.onerror):_),k!==void 0?k:m}}function sn(c,h){return c===At?h:function(){c.apply(this,arguments);var m=this.onsuccess,y=this.onerror;this.onsuccess=this.onerror=null,h.apply(this,arguments),m&&(this.onsuccess=this.onsuccess?He(m,this.onsuccess):m),y&&(this.onerror=this.onerror?He(y,this.onerror):y)}}function De(c,h){return c===At?h:function(){var m=c.apply(this,arguments),y=(x(arguments[0],m),this.onsuccess),_=this.onerror,k=(this.onsuccess=null,this.onerror=null,h.apply(this,arguments));return y&&(this.onsuccess=this.onsuccess?He(y,this.onsuccess):y),_&&(this.onerror=this.onerror?He(_,this.onerror):_),m===void 0?k===void 0?void 0:k:x(m,k)}}function Fe(c,h){return c===At?h:function(){return h.apply(this,arguments)!==!1&&c.apply(this,arguments)}}function or(c,h){return c===At?h:function(){var m=c.apply(this,arguments);if(m&&typeof m.then=="function"){for(var y=this,_=arguments.length,k=new Array(_);_--;)k[_]=arguments[_];return m.then(function(){return h.apply(y,k)})}return h.apply(this,arguments)}}Ee.ModifyError=yt,Ee.DexieError=B,Ee.BulkError=$;var jn=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Bs(c){jn=c}var Di={},lr=100,cr=typeof Promise>"u"?[]:(Bn=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[cr=crypto.subtle.digest("SHA-512",new Uint8Array([0])),C(cr),Bn]:[Bn,C(Bn),Bn]),Bn=cr[0],ei=cr[1],ei=ei&&ei.then,di=Bn&&Bn.constructor,$o=!!cr[2],ba=function(c,h){qs.push([c,h]),Fr&&(queueMicrotask(Ph),Fr=!1)},Us=!0,Fr=!0,ur=[],Hs=[],Is=ye,Ta={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:At,pgp:!1,env:{},finalize:At},Ft=Ta,qs=[],dr=0,Un=[];function $t(c){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var h=this._PSD=Ft;if(typeof c!="function"){if(c!==Di)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Yr(this,this._value)}else this._state=null,this._value=null,++h.ref,(function m(y,_){try{_(function(k){if(y._state===null){if(k===y)throw new TypeError("A promise cannot be resolved with itself.");var N=y._lib&&Xa();k&&typeof k.then=="function"?m(y,function(O,H){k instanceof $t?k._then(O,H):k.then(O,H)}):(y._state=!0,y._value=k,Ru(y)),N&&_n()}},Yr.bind(null,y))}catch(k){Yr(y,k)}})(this,c)}var Lo={get:function(){var c=Ft,h=pr;function m(y,_){var k=this,N=!c.global&&(c!==Ft||h!==pr),O=N&&!hi(),H=new $t(function(Z,q){Bo(k,new Jl(tc(y,c,N,O),tc(_,c,N,O),Z,q,c))});return this._consoleTask&&(H._consoleTask=this._consoleTask),H}return m.prototype=Di,m},set:function(c){D(this,"then",c&&c.prototype===Di?Lo:{get:function(){return c},set:Lo.set})}};function Jl(c,h,m,y,_){this.onFulfilled=typeof c=="function"?c:null,this.onRejected=typeof h=="function"?h:null,this.resolve=m,this.reject=y,this.psd=_}function Yr(c,h){var m,y;Hs.push(h),c._state===null&&(m=c._lib&&Xa(),h=Is(h),c._state=!1,c._value=h,y=c,ur.some(function(_){return _._value===y._value})||ur.push(y),Ru(c),m)&&_n()}function Ru(c){var h=c._listeners;c._listeners=[];for(var m=0,y=h.length;m<y;++m)Bo(c,h[m]);var _=c._PSD;--_.ref||_.finalize(),dr===0&&(++dr,ba(function(){--dr==0&&Qa()},[]))}function Bo(c,h){if(c._state===null)c._listeners.push(h);else{var m=c._state?h.onFulfilled:h.onRejected;if(m===null)return(c._state?h.resolve:h.reject)(c._value);++h.psd.ref,++dr,ba(Yh,[m,c,h])}}function Yh(c,h,m){try{var y,_=h._value;!h._state&&Hs.length&&(Hs=[]),y=jn&&h._consoleTask?h._consoleTask.run(function(){return c(_)}):c(_),h._state||Hs.indexOf(_)!==-1||(k=>{for(var N=ur.length;N;)if(ur[--N]._value===k._value)return ur.splice(N,1)})(h),m.resolve(y)}catch(k){m.reject(k)}finally{--dr==0&&Qa(),--m.psd.ref||m.psd.finalize()}}function Ph(){gr(Ta,function(){Xa()&&_n()})}function Xa(){var c=Us;return Fr=Us=!1,c}function _n(){var c,h,m;do for(;0<qs.length;)for(c=qs,qs=[],m=c.length,h=0;h<m;++h){var y=c[h];y[0].apply(null,y[1])}while(0<qs.length);Fr=Us=!0}function Qa(){for(var c=ur,h=(ur=[],c.forEach(function(y){y._PSD.onunhandled.call(null,y._value,y)}),Un.slice(0)),m=h.length;m;)h[--m]()}function Hn(c){return new $t(Di,!1,c)}function Pe(c,h){var m=Ft;return function(){var y=Xa(),_=Ft;try{return Wa(m,!0),c.apply(this,arguments)}catch(k){h&&h(k)}finally{Wa(_,!1),y&&_n()}}}E($t.prototype,{then:Lo,_then:function(c,h){Bo(this,new Jl(null,null,c,h,Ft))},catch:function(c){var h,m;return arguments.length===1?this.then(null,c):(h=c,m=arguments[1],typeof h=="function"?this.then(null,function(y){return(y instanceof h?m:Hn)(y)}):this.then(null,function(y){return(y&&y.name===h?m:Hn)(y)}))},finally:function(c){return this.then(function(h){return $t.resolve(c()).then(function(){return h})},function(h){return $t.resolve(c()).then(function(){return Hn(h)})})},timeout:function(c,h){var m=this;return c<1/0?new $t(function(y,_){var k=setTimeout(function(){return _(new lt.Timeout(h))},c);m.then(y,_).finally(clearTimeout.bind(null,k))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&D($t.prototype,Symbol.toStringTag,"Dexie.Promise"),Ta.env=Pr(),E($t,{all:function(){var c=re.apply(null,arguments).map(Uo);return new $t(function(h,m){c.length===0&&h([]);var y=c.length;c.forEach(function(_,k){return $t.resolve(_).then(function(N){c[k]=N,--y||h(c)},m)})})},resolve:function(c){return c instanceof $t?c:c&&typeof c.then=="function"?new $t(function(h,m){c.then(h,m)}):new $t(Di,!0,c)},reject:Hn,race:function(){var c=re.apply(null,arguments).map(Uo);return new $t(function(h,m){c.map(function(y){return $t.resolve(y).then(h,m)})})},PSD:{get:function(){return Ft},set:function(c){return Ft=c}},totalEchoes:{get:function(){return pr}},newPSD:Ea,usePSD:gr,scheduler:{get:function(){return ba},set:function(c){ba=c}},rejectionMapper:{get:function(){return Is},set:function(c){Is=c}},follow:function(c,h){return new $t(function(m,y){return Ea(function(_,k){var N=Ft;N.unhandleds=[],N.onunhandled=k,N.finalize=He(function(){var O,H=this;O=function(){H.unhandleds.length===0?_():k(H.unhandleds[0])},Un.push(function Z(){O(),Un.splice(Un.indexOf(Z),1)}),++dr,ba(function(){--dr==0&&Qa()},[])},N.finalize),c()},h,m,y)})}}),di&&(di.allSettled&&D($t,"allSettled",function(){var c=re.apply(null,arguments).map(Uo);return new $t(function(h){c.length===0&&h([]);var m=c.length,y=new Array(m);c.forEach(function(_,k){return $t.resolve(_).then(function(N){return y[k]={status:"fulfilled",value:N}},function(N){return y[k]={status:"rejected",reason:N}}).then(function(){return--m||h(y)})})})}),di.any&&typeof AggregateError<"u"&&D($t,"any",function(){var c=re.apply(null,arguments).map(Uo);return new $t(function(h,m){c.length===0&&m(new AggregateError([]));var y=c.length,_=new Array(y);c.forEach(function(k,N){return $t.resolve(k).then(function(O){return h(O)},function(O){_[N]=O,--y||m(new AggregateError(_))})})})}),di.withResolvers)&&($t.withResolvers=di.withResolvers);var Sn={awaits:0,echoes:0,id:0},Xh=0,hr=[],fr=0,pr=0,mr=0;function Ea(c,N,m,y){var _=Ft,k=Object.create(_),N=(k.parent=_,k.ref=0,k.global=!1,k.id=++mr,Ta.env,k.env=$o?{Promise:$t,PromiseProp:{value:$t,configurable:!0,writable:!0},all:$t.all,race:$t.race,allSettled:$t.allSettled,any:$t.any,resolve:$t.resolve,reject:$t.reject}:{},N&&x(k,N),++_.ref,k.finalize=function(){--this.parent.ref||this.parent.finalize()},gr(k,c,m,y));return k.ref===0&&k.finalize(),N}function Za(){return Sn.id||(Sn.id=++Xh),++Sn.awaits,Sn.echoes+=lr,Sn.id}function hi(){return!!Sn.awaits&&(--Sn.awaits==0&&(Sn.id=0),Sn.echoes=Sn.awaits*lr,!0)}function Uo(c){return Sn.echoes&&c&&c.constructor===di?(Za(),c.then(function(h){return hi(),h},function(h){return hi(),We(h)})):c}function Mu(){var c=hr[hr.length-1];hr.pop(),Wa(c,!1)}function Wa(c,h){var m,y,_=Ft;(h?!Sn.echoes||fr++&&c===Ft:!fr||--fr&&c===Ft)||queueMicrotask(h?(function(k){++pr,Sn.echoes&&--Sn.echoes!=0||(Sn.echoes=Sn.awaits=Sn.id=0),hr.push(Ft),Wa(k,!0)}).bind(null,c):Mu),c!==Ft&&(Ft=c,_===Ta&&(Ta.env=Pr()),$o)&&(m=Ta.env.Promise,y=c.env,_.global||c.global)&&(Object.defineProperty(f,"Promise",y.PromiseProp),m.all=y.all,m.race=y.race,m.resolve=y.resolve,m.reject=y.reject,y.allSettled&&(m.allSettled=y.allSettled),y.any)&&(m.any=y.any)}function Pr(){var c=f.Promise;return $o?{Promise:c,PromiseProp:Object.getOwnPropertyDescriptor(f,"Promise"),all:c.all,race:c.race,allSettled:c.allSettled,any:c.any,resolve:c.resolve,reject:c.reject}:{}}function gr(c,h,m,y,_){var k=Ft;try{return Wa(c,!0),h(m,y,_)}finally{Wa(k,!1)}}function tc(c,h,m,y){return typeof c!="function"?c:function(){var _=Ft;m&&Za(),Wa(h,!0);try{return c.apply(this,arguments)}finally{Wa(_,!1),y&&queueMicrotask(hi)}}}function Ho(c){Promise===di&&Sn.echoes===0?fr===0?c():enqueueNativeMicroTask(c):setTimeout(c,0)}(""+ei).indexOf("[native code]")===-1&&(Za=hi=At);var We=$t.reject,fi="￿",za="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",ec="String expected.",Vs="__dbnames",Na="readonly",wn="readwrite";function hn(c,h){return c?h?function(){return c.apply(this,arguments)&&h.apply(this,arguments)}:c:h}var vr={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Ks(c){return typeof c!="string"||/\./.test(c)?function(h){return h}:function(h){return h[c]===void 0&&c in h&&delete(h=de(h))[c],h}}function $u(){throw lt.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function we(c,h){try{var m=nc(c),y=nc(h);if(m!==y)return m==="Array"?1:y==="Array"?-1:m==="binary"?1:y==="binary"?-1:m==="string"?1:y==="string"?-1:m==="Date"?1:y!=="Date"?NaN:-1;switch(m){case"number":case"Date":case"string":return h<c?1:c<h?-1:0;case"binary":for(var _=Xr(c),k=Xr(h),N=_.length,O=k.length,H=N<O?N:O,Z=0;Z<H;++Z)if(_[Z]!==k[Z])return _[Z]<k[Z]?-1:1;return N===O?0:N<O?-1:1;case"Array":for(var q=c,U=h,I=q.length,X=U.length,K=I<X?I:X,G=0;G<K;++G){var F=we(q[G],U[G]);if(F!==0)return F}return I===X?0:I<X?-1:1}}catch{}return NaN}function nc(c){var h=typeof c;return h=="object"&&(ArrayBuffer.isView(c)||(h=ve(c))==="ArrayBuffer")?"binary":h}function Xr(c){return c instanceof Uint8Array?c:ArrayBuffer.isView(c)?new Uint8Array(c.buffer,c.byteOffset,c.byteLength):new Uint8Array(c)}function br(c,h,m){var y=c.schema.yProps;return y?(h&&0<m.numFailures&&(h=h.filter(function(_,k){return!m.failures[k]})),Promise.all(y.map(function(_){return _=_.updatesTable,h?c.db.table(_).where("k").anyOf(h).delete():c.db.table(_).clear()})).then(function(){return m})):m}Mi.prototype.execute=function(c){var h=this["@@propmod"];if(h.add!==void 0){var m=h.add;if(w(m))return d(d([],w(c)?c:[],!0),m).sort();if(typeof m=="number")return(Number(c)||0)+m;if(typeof m=="bigint")try{return BigInt(c)+m}catch{return BigInt(0)+m}throw new TypeError("Invalid term ".concat(m))}if(h.remove!==void 0){var y=h.remove;if(w(y))return w(c)?c.filter(function(_){return!y.includes(_)}).sort():[];if(typeof y=="number")return Number(c)-y;if(typeof y=="bigint")try{return BigInt(c)-y}catch{return BigInt(0)-y}throw new TypeError("Invalid subtrahend ".concat(y))}return m=(m=h.replacePrefix)==null?void 0:m[0],m&&typeof c=="string"&&c.startsWith(m)?h.replacePrefix[1]+c.substring(m.length):c};var Ri=Mi;function Mi(c){this["@@propmod"]=c}function yr(c,h){for(var m=g(h),y=m.length,_=!1,k=0;k<y;++k){var N=m[k],O=h[N],H=xt(c,N);O instanceof Ri?(wt(c,N,O.execute(H)),_=!0):H!==O&&(wt(c,N,O),_=!0)}return _}ze.prototype._trans=function(c,h,m){var y=this._tx||Ft.trans,_=this.name,k=jn&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(c==="readonly"?"read":"write"," ").concat(this.name));function N(Z,q,U){if(U.schema[_])return h(U.idbtrans,U);throw new lt.NotFound("Table "+_+" not part of transaction")}var O=Xa();try{var H=y&&y.db._novip===this.db._novip?y===Ft.trans?y._promise(c,N,m):Ea(function(){return y._promise(c,N,m)},{trans:y,transless:Ft.transless||Ft}):(function Z(q,U,I,X){if(q.idbdb&&(q._state.openComplete||Ft.letThrough||q._vip)){var K=q._createTransaction(U,I,q._dbSchema);try{K.create(),q._state.PR1398_maxLoop=3}catch(G){return G.name===bt.InvalidState&&q.isOpen()&&0<--q._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),q.close({disableAutoOpen:!1}),q.open().then(function(){return Z(q,U,I,X)})):We(G)}return K._promise(U,function(G,F){return Ea(function(){return Ft.trans=K,X(G,F,K)})}).then(function(G){if(U==="readwrite")try{K.idbtrans.commit()}catch{}return U==="readonly"?G:K._completion.then(function(){return G})})}if(q._state.openComplete)return We(new lt.DatabaseClosed(q._state.dbOpenError));if(!q._state.isBeingOpened){if(!q._state.autoOpen)return We(new lt.DatabaseClosed);q.open().catch(At)}return q._state.dbReadyPromise.then(function(){return Z(q,U,I,X)})})(this.db,c,[this.name],N);return k&&(H._consoleTask=k,H=H.catch(function(Z){return console.trace(Z),We(Z)})),H}finally{O&&_n()}},ze.prototype.get=function(c,h){var m=this;return c&&c.constructor===Object?this.where(c).first(h):c==null?We(new lt.Type("Invalid argument to Table.get()")):this._trans("readonly",function(y){return m.core.get({trans:y,key:c}).then(function(_){return m.hook.reading.fire(_)})}).then(h)},ze.prototype.where=function(c){if(typeof c=="string")return new this.db.WhereClause(this,c);if(w(c))return new this.db.WhereClause(this,"[".concat(c.join("+"),"]"));var h=g(c);if(h.length===1)return this.where(h[0]).equals(c[h[0]]);var m=this.schema.indexes.concat(this.schema.primKey).filter(function(O){if(O.compound&&h.every(function(Z){return 0<=O.keyPath.indexOf(Z)})){for(var H=0;H<h.length;++H)if(h.indexOf(O.keyPath[H])===-1)return!1;return!0}return!1}).sort(function(O,H){return O.keyPath.length-H.keyPath.length})[0];if(m&&this.db._maxKey!==fi)return N=m.keyPath.slice(0,h.length),this.where(N).equals(N.map(function(O){return c[O]}));!m&&jn&&console.warn("The query ".concat(JSON.stringify(c)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(h.join("+"),"]"));var y=this.schema.idxByName;function _(O,H){return we(O,H)===0}var N=h.reduce(function(q,H){var Z=q[0],q=q[1],U=y[H],I=c[H];return[Z||U,Z||!U?hn(q,U&&U.multi?function(X){return X=xt(X,H),w(X)&&X.some(function(K){return _(I,K)})}:function(X){return _(I,xt(X,H))}):q]},[null,null]),k=N[0],N=N[1];return k?this.where(k.name).equals(c[k.keyPath]).filter(N):m?this.filter(N):this.where(h).equals("")},ze.prototype.filter=function(c){return this.toCollection().and(c)},ze.prototype.count=function(c){return this.toCollection().count(c)},ze.prototype.offset=function(c){return this.toCollection().offset(c)},ze.prototype.limit=function(c){return this.toCollection().limit(c)},ze.prototype.each=function(c){return this.toCollection().each(c)},ze.prototype.toArray=function(c){return this.toCollection().toArray(c)},ze.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},ze.prototype.orderBy=function(c){return new this.db.Collection(new this.db.WhereClause(this,w(c)?"[".concat(c.join("+"),"]"):c))},ze.prototype.reverse=function(){return this.toCollection().reverse()},ze.prototype.mapToClass=function(c){for(var h=this.db,m=this.name,y=((this.schema.mappedClass=c).prototype instanceof $u&&(c=(N=>{var O=q,H=N;if(typeof H!="function"&&H!==null)throw new TypeError("Class extends value "+String(H)+" is not a constructor or null");function Z(){this.constructor=O}function q(){return N!==null&&N.apply(this,arguments)||this}return s(O,H),O.prototype=H===null?Object.create(H):(Z.prototype=H.prototype,new Z),Object.defineProperty(q.prototype,"db",{get:function(){return h},enumerable:!1,configurable:!0}),q.prototype.table=function(){return m},q})(c)),new Set),_=c.prototype;_;_=C(_))Object.getOwnPropertyNames(_).forEach(function(N){return y.add(N)});function k(N){if(!N)return N;var O,H=Object.create(c.prototype);for(O in N)if(!y.has(O))try{H[O]=N[O]}catch{}return H}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=k,this.hook("reading",k),c},ze.prototype.defineClass=function(){return this.mapToClass(function(c){x(this,c)})},ze.prototype.add=function(c,h){var m=this,y=this.schema.primKey,_=y.auto,k=y.keyPath,N=c;return k&&_&&(N=Ks(k)(c)),this._trans("readwrite",function(O){return m.core.mutate({trans:O,type:"add",keys:h!=null?[h]:null,values:[N]})}).then(function(O){return O.numFailures?$t.reject(O.failures[0]):O.lastResult}).then(function(O){if(k)try{wt(c,k,O)}catch{}return O})},ze.prototype.upsert=function(c,h){var m=this,y=this.schema.primKey.keyPath;return this._trans("readwrite",function(_){return m.core.get({trans:_,key:c}).then(function(k){var N=k??{};return yr(N,h),y&&wt(N,y,c),m.core.mutate({trans:_,type:"put",values:[N],keys:[c],upsert:!0,updates:{keys:[c],changeSpecs:[h]}}).then(function(O){return O.numFailures?$t.reject(O.failures[0]):!!k})})})},ze.prototype.update=function(c,h){return typeof c!="object"||w(c)?this.where(":id").equals(c).modify(h):(c=xt(c,this.schema.primKey.keyPath))===void 0?We(new lt.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(c).modify(h)},ze.prototype.put=function(c,h){var m=this,y=this.schema.primKey,_=y.auto,k=y.keyPath,N=c;return k&&_&&(N=Ks(k)(c)),this._trans("readwrite",function(O){return m.core.mutate({trans:O,type:"put",values:[N],keys:h!=null?[h]:null})}).then(function(O){return O.numFailures?$t.reject(O.failures[0]):O.lastResult}).then(function(O){if(k)try{wt(c,k,O)}catch{}return O})},ze.prototype.delete=function(c){var h=this;return this._trans("readwrite",function(m){return h.core.mutate({trans:m,type:"delete",keys:[c]}).then(function(y){return br(h,[c],y)}).then(function(y){return y.numFailures?$t.reject(y.failures[0]):void 0})})},ze.prototype.clear=function(){var c=this;return this._trans("readwrite",function(h){return c.core.mutate({trans:h,type:"deleteRange",range:vr}).then(function(m){return br(c,null,m)})}).then(function(h){return h.numFailures?$t.reject(h.failures[0]):void 0})},ze.prototype.bulkGet=function(c){var h=this;return this._trans("readonly",function(m){return h.core.getMany({keys:c,trans:m}).then(function(y){return y.map(function(_){return h.hook.reading.fire(_)})})})},ze.prototype.bulkAdd=function(c,h,m){var y=this,_=Array.isArray(h)?h:void 0,k=(m=m||(_?void 0:h))?m.allKeys:void 0;return this._trans("readwrite",function(N){var O=y.schema.primKey,Z=O.auto,O=O.keyPath;if(O&&_)throw new lt.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(_&&_.length!==c.length)throw new lt.InvalidArgument("Arguments objects and keys must have the same length");var H=c.length,Z=O&&Z?c.map(Ks(O)):c;return y.core.mutate({trans:N,type:"add",keys:_,values:Z,wantResults:k}).then(function(q){var U=q.numFailures,I=q.failures;if(U===0)return k?q.results:q.lastResult;throw new $("".concat(y.name,".bulkAdd(): ").concat(U," of ").concat(H," operations failed"),I)})})},ze.prototype.bulkPut=function(c,h,m){var y=this,_=Array.isArray(h)?h:void 0,k=(m=m||(_?void 0:h))?m.allKeys:void 0;return this._trans("readwrite",function(N){var O=y.schema.primKey,Z=O.auto,O=O.keyPath;if(O&&_)throw new lt.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(_&&_.length!==c.length)throw new lt.InvalidArgument("Arguments objects and keys must have the same length");var H=c.length,Z=O&&Z?c.map(Ks(O)):c;return y.core.mutate({trans:N,type:"put",keys:_,values:Z,wantResults:k}).then(function(q){var U=q.numFailures,I=q.failures;if(U===0)return k?q.results:q.lastResult;throw new $("".concat(y.name,".bulkPut(): ").concat(U," of ").concat(H," operations failed"),I)})})},ze.prototype.bulkUpdate=function(c){var h=this,m=this.core,y=c.map(function(N){return N.key}),_=c.map(function(N){return N.changes}),k=[];return this._trans("readwrite",function(N){return m.getMany({trans:N,keys:y,cache:"clone"}).then(function(O){var H=[],Z=[],q=(c.forEach(function(U,I){var X=U.key,K=U.changes,G=O[I];if(G){for(var F=0,at=Object.keys(K);F<at.length;F++){var tt=at[F],ct=K[tt];if(tt===h.schema.primKey.keyPath){if(we(ct,X)!==0)throw new lt.Constraint("Cannot update primary key in bulkUpdate()")}else wt(G,tt,ct)}k.push(I),H.push(X),Z.push(G)}}),H.length);return m.mutate({trans:N,type:"put",keys:H,values:Z,updates:{keys:y,changeSpecs:_}}).then(function(U){var I=U.numFailures,X=U.failures;if(I===0)return q;for(var K=0,G=Object.keys(X);K<G.length;K++){var F,at=G[K],tt=k[Number(at)];tt!=null&&(F=X[at],delete X[at],X[tt]=F)}throw new $("".concat(h.name,".bulkUpdate(): ").concat(I," of ").concat(q," operations failed"),X)})})})},ze.prototype.bulkDelete=function(c){var h=this,m=c.length;return this._trans("readwrite",function(y){return h.core.mutate({trans:y,type:"delete",keys:c}).then(function(_){return br(h,c,_)})}).then(function(y){var _=y.numFailures,k=y.failures;if(_===0)return y.lastResult;throw new $("".concat(h.name,".bulkDelete(): ").concat(_," of ").concat(m," operations failed"),k)})};var Qr=ze;function ze(){}function Je(c){function h(N,O){if(O){for(var H=arguments.length,Z=new Array(H-1);--H;)Z[H-1]=arguments[H];return m[N].subscribe.apply(null,Z),c}if(typeof N=="string")return m[N]}var m={};h.addEventType=k;for(var y=1,_=arguments.length;y<_;++y)k(arguments[y]);return h;function k(N,O,H){var Z,q;if(typeof N!="object")return O=O||Fe,q={subscribers:[],fire:H=H||At,subscribe:function(U){q.subscribers.indexOf(U)===-1&&(q.subscribers.push(U),q.fire=O(q.fire,U))},unsubscribe:function(U){q.subscribers=q.subscribers.filter(function(I){return I!==U}),q.fire=q.subscribers.reduce(O,H)}},m[N]=h[N]=q;g(Z=N).forEach(function(U){var I=Z[U];if(w(I))k(U,Z[U][0],Z[U][1]);else{if(I!=="asap")throw new lt.InvalidArgument("Invalid event config");var X=k(U,ye,function(){for(var K=arguments.length,G=new Array(K);K--;)G[K]=arguments[K];X.subscribers.forEach(function(F){dt(function(){F.apply(null,G)})})})}})}}function Zr(c,h){return Q(h).from({prototype:c}),h}function wr(c,h){return!(c.filter||c.algorithm||c.or)&&(h?c.justLimit:!c.replayFilter)}function Io(c,h){c.filter=hn(c.filter,h)}function pi(c,h,m){var y=c.replayFilter;c.replayFilter=y?function(){return hn(y(),h())}:h,c.justLimit=m&&!y}function mi(c,h){if(c.isPrimKey)return h.primaryKey;var m=h.getIndexByKeyPath(c.index);if(m)return m;throw new lt.Schema("KeyPath "+c.index+" on object store "+h.name+" is not indexed")}function Lu(c,h,m){var y=mi(c,h.schema);return h.openCursor({trans:m,values:!c.keysOnly,reverse:c.dir==="prev",unique:!!c.unique,query:{index:y,range:c.range}})}function Gs(c,h,m,y){var _,k,N=c.replayFilter?hn(c.filter,c.replayFilter()):c.filter;return c.or?(_={},k=function(O,H,Z){var q,U;N&&!N(H,Z,function(I){return H.stop(I)},function(I){return H.fail(I)})||((U=""+(q=H.primaryKey))=="[object ArrayBuffer]"&&(U=""+new Uint8Array(q)),S(_,U))||(_[U]=!0,h(O,H,Z))},Promise.all([c.or._iterate(k,m),ac(Lu(c,y,m),c.algorithm,k,!c.keysOnly&&c.valueMapper)])):ac(Lu(c,y,m),hn(c.algorithm,N),h,!c.keysOnly&&c.valueMapper)}function ac(c,h,m,y){var _=Pe(y?function(k,N,O){return m(y(k),N,O)}:m);return c.then(function(k){if(k)return k.start(function(){var N=function(){return k.continue()};h&&!h(k,function(O){return N=O},function(O){k.stop(O),N=At},function(O){k.fail(O),N=At})||_(k.value,k,function(O){return N=O}),N()})})}Vt.prototype._read=function(c,h){var m=this._ctx;return m.error?m.table._trans(null,We.bind(null,m.error)):m.table._trans("readonly",c).then(h)},Vt.prototype._write=function(c){var h=this._ctx;return h.error?h.table._trans(null,We.bind(null,h.error)):h.table._trans("readwrite",c,"locked")},Vt.prototype._addAlgorithm=function(c){var h=this._ctx;h.algorithm=hn(h.algorithm,c)},Vt.prototype._iterate=function(c,h){return Gs(this._ctx,c,h,this._ctx.table.core)},Vt.prototype.clone=function(c){var h=Object.create(this.constructor.prototype),m=Object.create(this._ctx);return c&&x(m,c),h._ctx=m,h},Vt.prototype.raw=function(){return this._ctx.valueMapper=null,this},Vt.prototype.each=function(c){var h=this._ctx;return this._read(function(m){return Gs(h,c,m,h.table.core)})},Vt.prototype.count=function(c){var h=this;return this._read(function(m){var y,_=h._ctx,k=_.table.core;return wr(_,!0)?k.count({trans:m,query:{index:mi(_,k.schema),range:_.range}}).then(function(N){return Math.min(N,_.limit)}):(y=0,Gs(_,function(){return++y,!1},m,k).then(function(){return y}))}).then(c)},Vt.prototype.sortBy=function(c,h){var m=c.split(".").reverse(),y=m[0],_=m.length-1;function k(H,Z){return Z?k(H[m[Z]],Z-1):H[y]}var N=this._ctx.dir==="next"?1:-1;function O(H,Z){return we(k(H,_),k(Z,_))*N}return this.toArray(function(H){return H.slice().sort(O)}).then(h)},Vt.prototype.toArray=function(c){var h=this;return this._read(function(m){var y,_,k,N=h._ctx;return wr(N,!0)&&0<N.limit?(y=N.valueMapper,_=mi(N,N.table.core.schema),N.table.core.query({trans:m,limit:N.limit,values:!0,direction:N.dir==="prev"?"prev":void 0,query:{index:_,range:N.range}}).then(function(O){return O=O.result,y?O.map(y):O})):(k=[],Gs(N,function(O){return k.push(O)},m,N.table.core).then(function(){return k}))},c)},Vt.prototype.offset=function(c){var h=this._ctx;return c<=0||(h.offset+=c,wr(h)?pi(h,function(){var m=c;return function(y,_){return m===0||(m===1?--m:_(function(){y.advance(m),m=0}),!1)}}):pi(h,function(){var m=c;return function(){return--m<0}})),this},Vt.prototype.limit=function(c){return this._ctx.limit=Math.min(this._ctx.limit,c),pi(this._ctx,function(){var h=c;return function(m,y,_){return--h<=0&&y(_),0<=h}},!0),this},Vt.prototype.until=function(c,h){return Io(this._ctx,function(m,y,_){return!c(m.value)||(y(_),h)}),this},Vt.prototype.first=function(c){return this.limit(1).toArray(function(h){return h[0]}).then(c)},Vt.prototype.last=function(c){return this.reverse().first(c)},Vt.prototype.filter=function(c){var h;return Io(this._ctx,function(m){return c(m.value)}),(h=this._ctx).isMatch=hn(h.isMatch,c),this},Vt.prototype.and=function(c){return this.filter(c)},Vt.prototype.or=function(c){return new this.db.WhereClause(this._ctx.table,c,this)},Vt.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},Vt.prototype.desc=function(){return this.reverse()},Vt.prototype.eachKey=function(c){var h=this._ctx;return h.keysOnly=!h.isMatch,this.each(function(m,y){c(y.key,y)})},Vt.prototype.eachUniqueKey=function(c){return this._ctx.unique="unique",this.eachKey(c)},Vt.prototype.eachPrimaryKey=function(c){var h=this._ctx;return h.keysOnly=!h.isMatch,this.each(function(m,y){c(y.primaryKey,y)})},Vt.prototype.keys=function(c){var h=this._ctx,m=(h.keysOnly=!h.isMatch,[]);return this.each(function(y,_){m.push(_.key)}).then(function(){return m}).then(c)},Vt.prototype.primaryKeys=function(c){var h=this._ctx;if(wr(h,!0)&&0<h.limit)return this._read(function(y){var _=mi(h,h.table.core.schema);return h.table.core.query({trans:y,values:!1,limit:h.limit,direction:h.dir==="prev"?"prev":void 0,query:{index:_,range:h.range}})}).then(function(y){return y.result}).then(c);h.keysOnly=!h.isMatch;var m=[];return this.each(function(y,_){m.push(_.primaryKey)}).then(function(){return m}).then(c)},Vt.prototype.uniqueKeys=function(c){return this._ctx.unique="unique",this.keys(c)},Vt.prototype.firstKey=function(c){return this.limit(1).keys(function(h){return h[0]}).then(c)},Vt.prototype.lastKey=function(c){return this.reverse().firstKey(c)},Vt.prototype.distinct=function(){var c,h=this._ctx,h=h.index&&h.table.schema.idxByName[h.index];return h&&h.multi&&(c={},Io(this._ctx,function(y){var y=y.primaryKey.toString(),_=S(c,y);return c[y]=!0,!_})),this},Vt.prototype.modify=function(c){var h=this,m=this._ctx;return this._write(function(y){function _(G,F){var at=F.failures;I+=G-F.numFailures;for(var tt=0,ct=g(at);tt<ct.length;tt++){var mt=ct[tt];U.push(at[mt])}}var k=typeof c=="function"?c:function(G){return yr(G,c)},N=m.table.core,q=N.schema.primaryKey,O=q.outbound,H=q.extractKey,Z=200,q=h.db._options.modifyChunkSize,U=(q&&(Z=typeof q=="object"?q[N.name]||q["*"]||200:q),[]),I=0,X=[],K=c===ic;return h.clone().primaryKeys().then(function(G){function F(tt){var ct=Math.min(Z,G.length-tt),mt=G.slice(tt,tt+ct);return(K?Promise.resolve([]):N.getMany({trans:y,keys:mt,cache:"immutable"})).then(function(_t){var Nt=[],Tt=[],Ut=O?[]:null,Ot=K?mt:[];if(!K)for(var It=0;It<ct;++It){var St=_t[It],se={value:de(St),primKey:G[tt+It]};k.call(se,se.value,se)!==!1&&(se.value==null?Ot.push(G[tt+It]):O||we(H(St),H(se.value))===0?(Tt.push(se.value),O&&Ut.push(G[tt+It])):(Ot.push(G[tt+It]),Nt.push(se.value)))}return Promise.resolve(0<Nt.length&&N.mutate({trans:y,type:"add",values:Nt}).then(function(Jt){for(var le in Jt.failures)Ot.splice(parseInt(le),1);_(Nt.length,Jt)})).then(function(){return(0<Tt.length||at&&typeof c=="object")&&N.mutate({trans:y,type:"put",keys:Ut,values:Tt,criteria:at,changeSpec:typeof c!="function"&&c,isAdditionalChunk:0<tt}).then(function(Jt){return _(Tt.length,Jt)})}).then(function(){return(0<Ot.length||at&&K)&&N.mutate({trans:y,type:"delete",keys:Ot,criteria:at,isAdditionalChunk:0<tt}).then(function(Jt){return br(m.table,Ot,Jt)}).then(function(Jt){return _(Ot.length,Jt)})}).then(function(){return G.length>tt+ct&&F(tt+Z)})})}var at=wr(m)&&m.limit===1/0&&(typeof c!="function"||K)&&{index:m.index,range:m.range};return F(0).then(function(){if(0<U.length)throw new yt("Error modifying one or more objects",U,I,X);return G.length})})})},Vt.prototype.delete=function(){var c=this._ctx,h=c.range;return!wr(c)||c.table.schema.yProps||!c.isPrimKey&&h.type!==3?this.modify(ic):this._write(function(m){var y=c.table.core.schema.primaryKey,_=h;return c.table.core.count({trans:m,query:{index:y,range:_}}).then(function(k){return c.table.core.mutate({trans:m,type:"deleteRange",range:_}).then(function(H){var O=H.failures,H=H.numFailures;if(H)throw new yt("Could not delete some values",Object.keys(O).map(function(Z){return O[Z]}),k-H);return k-H})})})};var Qh=Vt;function Vt(){}var ic=function(c,h){return h.value=null};function qo(c,h){return c<h?-1:c===h?0:1}function Vo(c,h){return h<c?-1:c===h?0:1}function on(c,h,m){return c=c instanceof rc?new c.Collection(c):c,c._ctx.error=new(m||TypeError)(h),c}function kn(c){return new c.Collection(c,function(){return Ko("")}).limit(0)}function Fs(X,h,m,y){var _,k,N,O,H,Z,q,U=m.length;if(!m.every(function(G){return typeof G=="string"}))return on(X,ec);function I(G){_=G==="next"?function(at){return at.toUpperCase()}:function(at){return at.toLowerCase()},k=G==="next"?function(at){return at.toLowerCase()}:function(at){return at.toUpperCase()},N=G==="next"?qo:Vo;var F=m.map(function(at){return{lower:k(at),upper:_(at)}}).sort(function(at,tt){return N(at.lower,tt.lower)});O=F.map(function(at){return at.upper}),H=F.map(function(at){return at.lower}),q=(Z=G)==="next"?"":y}I("next");var X=new X.Collection(X,function(){return $i(O[0],H[U-1]+y)}),K=(X._ondirectionchange=function(G){I(G)},0);return X._addAlgorithm(function(G,F,at){var tt=G.key;if(typeof tt=="string"){var ct=k(tt);if(h(ct,H,K))return!0;for(var mt=null,_t=K;_t<U;++_t){var Nt=((Tt,Ut,Ot,It,St,se)=>{for(var Jt=Math.min(Tt.length,It.length),le=-1,he=0;he<Jt;++he){var Pn=Ut[he];if(Pn!==It[he])return St(Tt[he],Ot[he])<0?Tt.substr(0,he)+Ot[he]+Ot.substr(he+1):St(Tt[he],It[he])<0?Tt.substr(0,he)+It[he]+Ot.substr(he+1):0<=le?Tt.substr(0,le)+Ut[le]+Ot.substr(le+1):null;St(Tt[he],Pn)<0&&(le=he)}return Jt<It.length&&se==="next"?Tt+Ot.substr(Tt.length):Jt<Tt.length&&se==="prev"?Tt.substr(0,Ot.length):le<0?null:Tt.substr(0,le)+It[le]+Ot.substr(le+1)})(tt,ct,O[_t],H[_t],N,Z);Nt===null&&mt===null?K=_t+1:(mt===null||0<N(mt,Nt))&&(mt=Nt)}F(mt!==null?function(){G.continue(mt+q)}:at)}return!1}),X}function $i(c,h,m,y){return{type:2,lower:c,upper:h,lowerOpen:m,upperOpen:y}}function Ko(c){return{type:1,lower:c,upper:c}}Object.defineProperty(Cn.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Cn.prototype.between=function(c,h,m,y){m=m!==!1,y=y===!0;try{return 0<this._cmp(c,h)||this._cmp(c,h)===0&&(m||y)&&(!m||!y)?kn(this):new this.Collection(this,function(){return $i(c,h,!m,!y)})}catch{return on(this,za)}},Cn.prototype.equals=function(c){return c==null?on(this,za):new this.Collection(this,function(){return Ko(c)})},Cn.prototype.above=function(c){return c==null?on(this,za):new this.Collection(this,function(){return $i(c,void 0,!0)})},Cn.prototype.aboveOrEqual=function(c){return c==null?on(this,za):new this.Collection(this,function(){return $i(c,void 0,!1)})},Cn.prototype.below=function(c){return c==null?on(this,za):new this.Collection(this,function(){return $i(void 0,c,!1,!0)})},Cn.prototype.belowOrEqual=function(c){return c==null?on(this,za):new this.Collection(this,function(){return $i(void 0,c)})},Cn.prototype.startsWith=function(c){return typeof c!="string"?on(this,ec):this.between(c,c+fi,!0,!0)},Cn.prototype.startsWithIgnoreCase=function(c){return c===""?this.startsWith(c):Fs(this,function(h,m){return h.indexOf(m[0])===0},[c],fi)},Cn.prototype.equalsIgnoreCase=function(c){return Fs(this,function(h,m){return h===m[0]},[c],"")},Cn.prototype.anyOfIgnoreCase=function(){var c=re.apply(ie,arguments);return c.length===0?kn(this):Fs(this,function(h,m){return m.indexOf(h)!==-1},c,"")},Cn.prototype.startsWithAnyOfIgnoreCase=function(){var c=re.apply(ie,arguments);return c.length===0?kn(this):Fs(this,function(h,m){return m.some(function(y){return h.indexOf(y)===0})},c,fi)},Cn.prototype.anyOf=function(){var c,h,m=this,y=re.apply(ie,arguments),_=this._cmp;try{y.sort(_)}catch{return on(this,za)}return y.length===0?kn(this):((c=new this.Collection(this,function(){return $i(y[0],y[y.length-1])}))._ondirectionchange=function(k){_=k==="next"?m._ascending:m._descending,y.sort(_)},h=0,c._addAlgorithm(function(k,N,O){for(var H=k.key;0<_(H,y[h]);)if(++h===y.length)return N(O),!1;return _(H,y[h])===0||(N(function(){k.continue(y[h])}),!1)}),c)},Cn.prototype.notEqual=function(c){return this.inAnyRange([[-1/0,c],[c,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Cn.prototype.noneOf=function(){var c=re.apply(ie,arguments);if(c.length===0)return new this.Collection(this);try{c.sort(this._ascending)}catch{return on(this,za)}var h=c.reduce(function(m,y){return m?m.concat([[m[m.length-1][1],y]]):[[-1/0,y]]},null);return h.push([c[c.length-1],this.db._maxKey]),this.inAnyRange(h,{includeLowers:!1,includeUppers:!1})},Cn.prototype.inAnyRange=function(c,at){var m=this,y=this._cmp,_=this._ascending,k=this._descending,N=this._min,O=this._max;if(c.length===0)return kn(this);if(!c.every(function(tt){return tt[0]!==void 0&&tt[1]!==void 0&&_(tt[0],tt[1])<=0}))return on(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",lt.InvalidArgument);var H=!at||at.includeLowers!==!1,Z=at&&at.includeUppers===!0,q,U=_;function I(tt,ct){return U(tt[0],ct[0])}try{(q=c.reduce(function(tt,ct){for(var mt=0,_t=tt.length;mt<_t;++mt){var Nt=tt[mt];if(y(ct[0],Nt[1])<0&&0<y(ct[1],Nt[0])){Nt[0]=N(Nt[0],ct[0]),Nt[1]=O(Nt[1],ct[1]);break}}return mt===_t&&tt.push(ct),tt},[])).sort(I)}catch{return on(this,za)}var X=0,K=Z?function(tt){return 0<_(tt,q[X][1])}:function(tt){return 0<=_(tt,q[X][1])},G=H?function(tt){return 0<k(tt,q[X][0])}:function(tt){return 0<=k(tt,q[X][0])},F=K,at=new this.Collection(this,function(){return $i(q[0][0],q[q.length-1][1],!H,!Z)});return at._ondirectionchange=function(tt){U=tt==="next"?(F=K,_):(F=G,k),q.sort(I)},at._addAlgorithm(function(tt,ct,mt){for(var _t,Nt=tt.key;F(Nt);)if(++X===q.length)return ct(mt),!1;return!K(_t=Nt)&&!G(_t)||(m._cmp(Nt,q[X][1])===0||m._cmp(Nt,q[X][0])===0||ct(function(){U===_?tt.continue(q[X][0]):tt.continue(q[X][1])}),!1)}),at},Cn.prototype.startsWithAnyOf=function(){var c=re.apply(ie,arguments);return c.every(function(h){return typeof h=="string"})?c.length===0?kn(this):this.inAnyRange(c.map(function(h){return[h,h+fi]})):on(this,"startsWithAnyOf() only works with strings")};var rc=Cn;function Cn(){}function tn(c){return Pe(function(h){return xr(h),c(h.target.error),!1})}function xr(c){c.stopPropagation&&c.stopPropagation(),c.preventDefault&&c.preventDefault()}var Ys="storagemutated",Ps="x-storagemutated-1",ca=Je(null,Ys),Bu=(Oa.prototype._lock=function(){return rt(!Ft.global),++this._reculock,this._reculock!==1||Ft.global||(Ft.lockOwnerFor=this),this},Oa.prototype._unlock=function(){if(rt(!Ft.global),--this._reculock==0)for(Ft.global||(Ft.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var c=this._blockedFuncs.shift();try{gr(c[1],c[0])}catch{}}return this},Oa.prototype._locked=function(){return this._reculock&&Ft.lockOwnerFor!==this},Oa.prototype.create=function(c){var h=this;if(this.mode){var m=this.db.idbdb,y=this.db._state.dbOpenError;if(rt(!this.idbtrans),!c&&!m)switch(y&&y.name){case"DatabaseClosedError":throw new lt.DatabaseClosed(y);case"MissingAPIError":throw new lt.MissingAPI(y.message,y);default:throw new lt.OpenFailed(y)}if(!this.active)throw new lt.TransactionInactive;rt(this._completion._state===null),(c=this.idbtrans=c||(this.db.core||m).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Pe(function(_){xr(_),h._reject(c.error)}),c.onabort=Pe(function(_){xr(_),h.active&&h._reject(new lt.Abort(c.error)),h.active=!1,h.on("abort").fire(_)}),c.oncomplete=Pe(function(){h.active=!1,h._resolve(),"mutatedParts"in c&&ca.storagemutated.fire(c.mutatedParts)})}return this},Oa.prototype._promise=function(c,h,m){var y,_=this;return c==="readwrite"&&this.mode!=="readwrite"?We(new lt.ReadOnly("Transaction is readonly")):this.active?this._locked()?new $t(function(k,N){_._blockedFuncs.push([function(){_._promise(c,h,m).then(k,N)},Ft])}):m?Ea(function(){var k=new $t(function(N,O){_._lock();var H=h(N,O,_);H&&H.then&&H.then(N,O)});return k.finally(function(){return _._unlock()}),k._lib=!0,k}):((y=new $t(function(k,N){var O=h(k,N,_);O&&O.then&&O.then(k,N)}))._lib=!0,y):We(new lt.TransactionInactive)},Oa.prototype._root=function(){return this.parent?this.parent._root():this},Oa.prototype.waitFor=function(c){var h,m=this._root(),y=$t.resolve(c),_=(m._waitingFor?m._waitingFor=m._waitingFor.then(function(){return y}):(m._waitingFor=y,m._waitingQueue=[],h=m.idbtrans.objectStore(m.storeNames[0]),(function k(){for(++m._spinCount;m._waitingQueue.length;)m._waitingQueue.shift()();m._waitingFor&&(h.get(-1/0).onsuccess=k)})()),m._waitingFor);return new $t(function(k,N){y.then(function(O){return m._waitingQueue.push(Pe(k.bind(null,O)))},function(O){return m._waitingQueue.push(Pe(N.bind(null,O)))}).finally(function(){m._waitingFor===_&&(m._waitingFor=null)})})},Oa.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new lt.Abort))},Oa.prototype.table=function(c){var h=this._memoizedTables||(this._memoizedTables={});if(S(h,c))return h[c];var m=this.schema[c];if(m)return(m=new this.db.Table(c,m,this)).core=this.db.core.table(c),h[c]=m;throw new lt.NotFound("Table "+c+" not part of transaction")},Oa);function Oa(){}function Li(c,h,m,y,_,k,N,O){return{name:c,keyPath:h,unique:m,multi:y,auto:_,compound:k,src:(m&&!N?"&":"")+(y?"*":"")+(_?"++":"")+Uu(h),type:O}}function Uu(c){return typeof c=="string"?c:c?"["+[].join.call(c,"+")+"]":""}function Go(c,h,m){return{name:c,primKey:h,indexes:m,mappedClass:null,idxByName:(y=function(_){return[_.name,_]},m.reduce(function(_,k,N){return k=y(k,N),k&&(_[k[0]]=k[1]),_},{}))};var y}var Wr=function(c){try{return c.only([[]]),Wr=function(){return[[]]},[[]]}catch{return Wr=function(){return fi},fi}};function Xs(c){return c==null?function(){}:typeof c=="string"?(h=c).split(".").length===1?function(m){return m[h]}:function(m){return xt(m,h)}:function(m){return xt(m,c)};var h}function Hu(c){return[].slice.call(c)}var Zh=0;function Bi(c){return c==null?":id":typeof c=="string"?c:"[".concat(c.join("+"),"]")}function Ja(c,h,N){function y(F){if(F.type===3)return null;if(F.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var X=F.lower,K=F.upper,G=F.lowerOpen,F=F.upperOpen;return X===void 0?K===void 0?null:h.upperBound(K,!!F):K===void 0?h.lowerBound(X,!!G):h.bound(X,K,!!G,!!F)}function _(I){var X,K,G=I.name;return{name:G,schema:I,mutate:function(F){var at=F.trans,tt=F.type,ct=F.keys,mt=F.values,_t=F.range;return new Promise(function(Nt,Tt){Nt=Pe(Nt);var Ut=at.objectStore(G),Ot=Ut.keyPath==null,It=tt==="put"||tt==="add";if(!It&&tt!=="delete"&&tt!=="deleteRange")throw new Error("Invalid operation type: "+tt);var St,se=(ct||mt||{length:1}).length;if(ct&&mt&&ct.length!==mt.length)throw new Error("Given keys array must have same length as given values array.");if(se===0)return Nt({numFailures:0,failures:{},results:[],lastResult:void 0});function Jt(In){++Pn,xr(In)}var le=[],he=[],Pn=0;if(tt==="deleteRange"){if(_t.type===4)return Nt({numFailures:Pn,failures:he,results:[],lastResult:void 0});_t.type===3?le.push(St=Ut.clear()):le.push(St=Ut.delete(y(_t)))}else{var Ot=It?Ot?[mt,ct]:[mt,null]:[ct,null],ce=Ot[0],en=Ot[1];if(It)for(var cn=0;cn<se;++cn)le.push(St=en&&en[cn]!==void 0?Ut[tt](ce[cn],en[cn]):Ut[tt](ce[cn])),St.onerror=Jt;else for(cn=0;cn<se;++cn)le.push(St=Ut[tt](ce[cn])),St.onerror=Jt}function as(In){In=In.target.result,le.forEach(function(da,nl){return da.error!=null&&(he[nl]=da.error)}),Nt({numFailures:Pn,failures:he,results:tt==="delete"?ct:le.map(function(da){return da.result}),lastResult:In})}St.onerror=function(In){Jt(In),as(In)},St.onsuccess=as})},getMany:function(F){var at=F.trans,tt=F.keys;return new Promise(function(ct,mt){ct=Pe(ct);for(var _t,Nt=at.objectStore(G),Tt=tt.length,Ut=new Array(Tt),Ot=0,It=0,St=function(le){le=le.target,Ut[le._pos]=le.result,++It===Ot&&ct(Ut)},se=tn(mt),Jt=0;Jt<Tt;++Jt)tt[Jt]!=null&&((_t=Nt.get(tt[Jt]))._pos=Jt,_t.onsuccess=St,_t.onerror=se,++Ot);Ot===0&&ct(Ut)})},get:function(F){var at=F.trans,tt=F.key;return new Promise(function(ct,mt){ct=Pe(ct);var _t=at.objectStore(G).get(tt);_t.onsuccess=function(Nt){return ct(Nt.target.result)},_t.onerror=tn(mt)})},query:(X=H,K=Z,function(F){return new Promise(function(at,tt){at=Pe(at);var ct,mt,_t,Nt,se=F.trans,Tt=F.values,Ut=F.limit,St=F.query,Ot=(Ot=F.direction)!=null?Ot:"next",It=Ut===1/0?void 0:Ut,Jt=St.index,St=St.range,se=se.objectStore(G),se=Jt.isPrimaryKey?se:se.index(Jt.name),Jt=y(St);if(Ut===0)return at({result:[]});K?(St={query:Jt,count:It,direction:Ot},(ct=Tt?se.getAll(St):se.getAllKeys(St)).onsuccess=function(le){return at({result:le.target.result})},ct.onerror=tn(tt)):X&&Ot==="next"?((ct=Tt?se.getAll(Jt,It):se.getAllKeys(Jt,It)).onsuccess=function(le){return at({result:le.target.result})},ct.onerror=tn(tt)):(mt=0,_t=!Tt&&"openKeyCursor"in se?se.openKeyCursor(Jt,Ot):se.openCursor(Jt,Ot),Nt=[],_t.onsuccess=function(){var le=_t.result;return!le||(Nt.push(Tt?le.value:le.primaryKey),++mt===Ut)?at({result:Nt}):void le.continue()},_t.onerror=tn(tt))})}),openCursor:function(F){var at=F.trans,tt=F.values,ct=F.query,mt=F.reverse,_t=F.unique;return new Promise(function(Nt,Tt){Nt=Pe(Nt);var It=ct.index,Ut=ct.range,Ot=at.objectStore(G),Ot=It.isPrimaryKey?Ot:Ot.index(It.name),It=mt?_t?"prevunique":"prev":_t?"nextunique":"next",St=!tt&&"openKeyCursor"in Ot?Ot.openKeyCursor(y(Ut),It):Ot.openCursor(y(Ut),It);St.onerror=tn(Tt),St.onsuccess=Pe(function(se){var Jt,le,he,Pn,ce=St.result;ce?(ce.___id=++Zh,ce.done=!1,Jt=ce.continue.bind(ce),le=(le=ce.continuePrimaryKey)&&le.bind(ce),he=ce.advance.bind(ce),Pn=function(){throw new Error("Cursor not stopped")},ce.trans=at,ce.stop=ce.continue=ce.continuePrimaryKey=ce.advance=function(){throw new Error("Cursor not started")},ce.fail=Pe(Tt),ce.next=function(){var en=this,cn=1;return this.start(function(){return cn--?en.continue():en.stop()}).then(function(){return en})},ce.start=function(en){function cn(){if(St.result)try{en()}catch(In){ce.fail(In)}else ce.done=!0,ce.start=function(){throw new Error("Cursor behind last entry")},ce.stop()}var as=new Promise(function(In,da){In=Pe(In),St.onerror=tn(da),ce.fail=da,ce.stop=function(nl){ce.stop=ce.continue=ce.continuePrimaryKey=ce.advance=Pn,In(nl)}});return St.onsuccess=Pe(function(In){St.onsuccess=cn,cn()}),ce.continue=Jt,ce.continuePrimaryKey=le,ce.advance=he,cn(),as},Nt(ce)):Nt(null)},Tt)})},count:function(F){var at=F.query,tt=F.trans,ct=at.index,mt=at.range;return new Promise(function(_t,Nt){var Tt=tt.objectStore(G),Tt=ct.isPrimaryKey?Tt:Tt.index(ct.name),Ut=y(mt),Ut=Ut?Tt.count(Ut):Tt.count();Ut.onsuccess=Pe(function(Ot){return _t(Ot.target.result)}),Ut.onerror=tn(Nt)})}}}k=N,O=Hu((N=c).objectStoreNames),q=0<O.length?k.objectStore(O[0]):{};var k,N={schema:{name:N.name,tables:O.map(function(I){return k.objectStore(I)}).map(function(I){var X=I.keyPath,K=I.autoIncrement,F=w(X),G={},F={name:I.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:X==null,compound:F,keyPath:X,autoIncrement:K,unique:!0,extractKey:Xs(X)},indexes:Hu(I.indexNames).map(function(at){return I.index(at)}).map(function(mt){var _t=mt.name,tt=mt.unique,ct=mt.multiEntry,mt=mt.keyPath,_t={name:_t,compound:w(mt),keyPath:mt,unique:tt,multiEntry:ct,extractKey:Xs(mt)};return G[Bi(mt)]=_t}),getIndexByKeyPath:function(at){return G[Bi(at)]}};return G[":id"]=F.primaryKey,X!=null&&(G[Bi(X)]=F.primaryKey),F})},hasGetAll:0<O.length&&"getAll"in q&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in q},O=N.schema,H=N.hasGetAll,Z=N.hasIdb3Features,q=O.tables.map(_),U={};return q.forEach(function(I){return U[I.name]=I}),{stack:"dbcore",transaction:c.transaction.bind(c),table:function(I){if(U[I])return U[I];throw new Error("Table '".concat(I,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Wr(h),schema:O}}function sc(c,h,m,y){return m=m.IDBKeyRange,h=Ja(h,m,y),{dbcore:c.dbcore.reduce(function(_,k){return k=k.create,o(o({},_),k(_))},h)}}function Jr(c,h){var m=h.db,m=sc(c._middlewares,m,c._deps,h);c.core=m.dbcore,c.tables.forEach(function(y){var _=y.name;c.core.schema.tables.some(function(k){return k.name===_})&&(y.core=c.core.table(_),c[_]instanceof c.Table)&&(c[_].core=y.core)})}function gi(c,h,m,y){m.forEach(function(_){var k=y[_];h.forEach(function(N){var O=(function H(Z,q){return nt(Z,q)||(Z=C(Z))&&H(Z,q)})(N,_);(!O||"value"in O&&O.value===void 0)&&(N===c.Transaction.prototype||N instanceof c.Transaction?D(N,_,{get:function(){return this.table(_)},set:function(H){j(this,_,{value:H,writable:!0,configurable:!0,enumerable:!0})}}):N[_]=new c.Table(_,k))})})}function Ui(c,h){h.forEach(function(m){for(var y in m)m[y]instanceof c.Table&&delete m[y]})}function Iu(c,h){return c._cfg.version-h._cfg.version}function oc(c,h,m,y){var _=c._dbSchema,k=(m.objectStoreNames.contains("$meta")&&!_.$meta&&(_.$meta=Go("$meta",Qs("")[0],[]),c._storeNames.push("$meta")),c._createTransaction("readwrite",c._storeNames,_)),N=(k.create(m),k._completion.catch(y),k._reject.bind(k)),O=Ft.transless||Ft;Ea(function(){if(Ft.trans=k,Ft.transless=O,h!==0)return Jr(c,m),Z=h,((H=k).storeNames.includes("$meta")?H.table("$meta").get("version").then(function(q){return q??Z}):$t.resolve(Z)).then(function(F){var U=c,I=F,X=k,K=m,G=[],F=U._versions,at=U._dbSchema=Da(0,U.idbdb,K);return(F=F.filter(function(tt){return tt._cfg.version>=I})).length===0?$t.resolve():(F.forEach(function(tt){G.push(function(){var ct,mt,_t,Nt=at,Tt=tt._cfg.dbschema,Ut=(ts(U,Nt,K),ts(U,Tt,K),at=U._dbSchema=Tt,_r(Nt,Tt)),Ot=(Ut.add.forEach(function(It){ja(K,It[0],It[1].primKey,It[1].indexes)}),Ut.change.forEach(function(It){if(It.recreate)throw new lt.Upgrade("Not yet support for changing primary key");var St=K.objectStore(It.name);It.add.forEach(function(se){return Hi(St,se)}),It.change.forEach(function(se){St.deleteIndex(se.name),Hi(St,se)}),It.del.forEach(function(se){return St.deleteIndex(se)})}),tt._cfg.contentUpgrade);if(Ot&&tt._cfg.version>I)return Jr(U,K),X._memoizedTables={},ct=vt(Tt),Ut.del.forEach(function(It){ct[It]=Nt[It]}),Ui(U,[U.Transaction.prototype]),gi(U,[U.Transaction.prototype],g(ct),ct),X.schema=ct,(mt=Gt(Ot))&&Za(),Tt=$t.follow(function(){var It;(_t=Ot(X))&&mt&&(It=hi.bind(null,null),_t.then(It,It))}),_t&&typeof _t.then=="function"?$t.resolve(_t):Tt.then(function(){return _t})}),G.push(function(ct){var mt,_t,Nt=tt._cfg.dbschema;mt=Nt,_t=ct,[].slice.call(_t.db.objectStoreNames).forEach(function(Tt){return mt[Tt]==null&&_t.db.deleteObjectStore(Tt)}),Ui(U,[U.Transaction.prototype]),gi(U,[U.Transaction.prototype],U._storeNames,U._dbSchema),X.schema=U._dbSchema}),G.push(function(ct){U.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(U.idbdb.version/10)===tt._cfg.version?(U.idbdb.deleteObjectStore("$meta"),delete U._dbSchema.$meta,U._storeNames=U._storeNames.filter(function(mt){return mt!=="$meta"})):ct.objectStore("$meta").put(tt._cfg.version,"version"))})}),(function tt(){return G.length?$t.resolve(G.shift()(X.idbtrans)).then(tt):$t.resolve()})().then(function(){Fo(at,K)}))}).catch(N);var H,Z;g(_).forEach(function(q){ja(m,q,_[q].primKey,_[q].indexes)}),Jr(c,m),$t.follow(function(){return c.on.populate.fire(k)}).catch(N)})}function qu(c,h){Fo(c._dbSchema,h),h.db.version%10!=0||h.objectStoreNames.contains("$meta")||h.db.createObjectStore("$meta").add(Math.ceil(h.db.version/10-1),"version");var m=Da(0,c.idbdb,h);ts(c,c._dbSchema,h);for(var y=0,_=_r(m,c._dbSchema).change;y<_.length;y++){var k=(N=>{if(N.change.length||N.recreate)return console.warn("Unable to patch indexes of table ".concat(N.name," because it has changes on the type of index or primary key.")),{value:void 0};var O=h.objectStore(N.name);N.add.forEach(function(H){jn&&console.debug("Dexie upgrade patch: Creating missing index ".concat(N.name,".").concat(H.src)),Hi(O,H)})})(_[y]);if(typeof k=="object")return k.value}}function _r(c,h){var m,y={del:[],add:[],change:[]};for(m in c)h[m]||y.del.push(m);for(m in h){var _=c[m],k=h[m];if(_){var N={name:m,def:k,recreate:!1,del:[],add:[],change:[]};if(""+(_.primKey.keyPath||"")!=""+(k.primKey.keyPath||"")||_.primKey.auto!==k.primKey.auto)N.recreate=!0,y.change.push(N);else{var O=_.idxByName,H=k.idxByName,Z=void 0;for(Z in O)H[Z]||N.del.push(Z);for(Z in H){var q=O[Z],U=H[Z];q?q.src!==U.src&&N.change.push(U):N.add.push(U)}(0<N.del.length||0<N.add.length||0<N.change.length)&&y.change.push(N)}}else y.add.push([m,k])}return y}function ja(c,h,m,y){var _=c.db.createObjectStore(h,m.keyPath?{keyPath:m.keyPath,autoIncrement:m.auto}:{autoIncrement:m.auto});y.forEach(function(k){return Hi(_,k)})}function Fo(c,h){g(c).forEach(function(m){h.db.objectStoreNames.contains(m)||(jn&&console.debug("Dexie: Creating missing table",m),ja(h,m,c[m].primKey,c[m].indexes))})}function Hi(c,h){c.createIndex(h.name,h.keyPath,{unique:h.unique,multiEntry:h.multi})}function Da(c,h,m){var y={};return ut(h.objectStoreNames,0).forEach(function(_){for(var k=m.objectStore(_),N=Li(Uu(Z=k.keyPath),Z||"",!0,!1,!!k.autoIncrement,Z&&typeof Z!="string",!0),O=[],H=0;H<k.indexNames.length;++H){var q=k.index(k.indexNames[H]),Z=q.keyPath,q=Li(q.name,Z,!!q.unique,!!q.multiEntry,!1,Z&&typeof Z!="string",!1);O.push(q)}y[_]=Go(_,N,O)}),y}function ts(c,h,m){for(var y=m.db.objectStoreNames,_=0;_<y.length;++_){var k=y[_],N=m.objectStore(k);c._hasGetAll="getAll"in N;for(var O=0;O<N.indexNames.length;++O){var H,Z=N.indexNames[O],q=N.index(Z).keyPath,q=typeof q=="string"?q:"["+ut(q).join("+")+"]";h[k]&&(H=h[k].idxByName[q])&&(H.name=Z,delete h[k].idxByName[q],h[k].idxByName[Z]=H)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&f.WorkerGlobalScope&&f instanceof f.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(c._hasGetAll=!1)}function Qs(c){return c.split(",").map(function(h,m){var _=h.split(":"),y=(y=_[1])==null?void 0:y.trim(),_=(h=_[0].trim()).replace(/([&*]|\+\+)/g,""),k=/^\[/.test(_)?_.match(/^\[(.*)\]$/)[1].split("+"):_;return Li(_,k||null,/\&/.test(h),/\*/.test(h),/\+\+/.test(h),w(k),m===0,y)})}vi.prototype._createTableSchema=Go,vi.prototype._parseIndexSyntax=Qs,vi.prototype._parseStoresSpec=function(c,h){var m=this;g(c).forEach(function(y){if(c[y]!==null){var _=m._parseIndexSyntax(c[y]),k=_.shift();if(!k)throw new lt.Schema("Invalid schema for table "+y+": "+c[y]);if(k.unique=!0,k.multi)throw new lt.Schema("Primary key cannot be multiEntry*");_.forEach(function(N){if(N.auto)throw new lt.Schema("Only primary key can be marked as autoIncrement (++)");if(!N.keyPath)throw new lt.Schema("Index must have a name and cannot be an empty string")}),k=m._createTableSchema(y,k,_),h[y]=k}})},vi.prototype.stores=function(m){var h=this.db,m=(this._cfg.storesSource=this._cfg.storesSource?x(this._cfg.storesSource,m):m,h._versions),y={},_={};return m.forEach(function(k){x(y,k._cfg.storesSource),_=k._cfg.dbschema={},k._parseStoresSpec(y,_)}),h._dbSchema=_,Ui(h,[h._allTables,h,h.Transaction.prototype]),gi(h,[h._allTables,h,h.Transaction.prototype,this._cfg.tables],g(_),_),h._storeNames=g(_),this},vi.prototype.upgrade=function(c){return this._cfg.contentUpgrade=or(this._cfg.contentUpgrade||At,c),this};var Vu=vi;function vi(){}var Ii=(()=>{var c,h,m;return typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"?(c=new Set,h=new FinalizationRegistry(function(y){c.delete(y)}),{toArray:function(){return Array.from(c).map(function(y){return y.deref()}).filter(function(y){return y!==void 0})},add:function(y){var _=new WeakRef(y._novip);c.add(_),h.register(y._novip,_,_),c.size>y._options.maxConnections&&(_=c.values().next().value,c.delete(_),h.unregister(_))},remove:function(y){if(y)for(var _=c.values(),k=_.next();!k.done;){var N=k.value;if(N.deref()===y._novip)return c.delete(N),void h.unregister(N);k=_.next()}}}):(m=[],{toArray:function(){return m},add:function(y){m.push(y._novip)},remove:function(y){y&&(y=m.indexOf(y._novip))!==-1&&m.splice(y,1)}})})();function Yo(c,h){var m=c._dbNamesDB;return m||(m=c._dbNamesDB=new bi(Vs,{addons:[],indexedDB:c,IDBKeyRange:h})).version(1).stores({dbnames:"name"}),m.table("dbnames")}function Dn(c){return c&&typeof c.databases=="function"}function ti(c){return Ea(function(){return Ft.letThrough=!0,c()})}function es(c){return!("from"in c)}var fn=function(c,h){var m;if(!this)return m=new fn,c&&"d"in c&&x(m,c),m;x(this,arguments.length?{d:1,from:c,to:1<arguments.length?h:c}:{d:0})};function Zs(c,h,m){var y=we(h,m);if(!isNaN(y)){if(0<y)throw RangeError();if(es(c))return x(c,{from:h,to:m,d:1});var y=c.l,_=c.r;if(we(m,c.from)<0)return y?Zs(y,h,m):c.l={from:h,to:m,d:1,l:null,r:null},Ws(c);if(0<we(h,c.to))return _?Zs(_,h,m):c.r={from:h,to:m,d:1,l:null,r:null},Ws(c);we(h,c.from)<0&&(c.from=h,c.l=null,c.d=_?_.d+1:1),0<we(m,c.to)&&(c.to=m,c.r=null,c.d=c.l?c.l.d+1:1),h=!c.r,y&&!c.l&&Sr(c,y),_&&h&&Sr(c,_)}}function Sr(c,h){es(h)||(function m(y,_){var k=_.from,N=_.l,O=_.r;Zs(y,k,_.to),N&&m(y,N),O&&m(y,O)})(c,h)}function Po(c,h){var m=qi(h),y=m.next();if(!y.done)for(var _=y.value,k=qi(c),N=k.next(_.from),O=N.value;!y.done&&!N.done;){if(we(O.from,_.to)<=0&&0<=we(O.to,_.from))return!0;we(_.from,O.from)<0?_=(y=m.next(O.from)).value:O=(N=k.next(_.from)).value}return!1}function qi(c){var h=es(c)?null:{s:0,n:c};return{next:function(m){for(var y=0<arguments.length;h;)switch(h.s){case 0:if(h.s=1,y)for(;h.n.l&&we(m,h.n.from)<0;)h={up:h,n:h.n.l,s:1};else for(;h.n.l;)h={up:h,n:h.n.l,s:1};case 1:if(h.s=2,!y||we(m,h.n.to)<=0)return{value:h.n,done:!1};case 2:if(h.n.r){h.s=3,h={up:h,n:h.n.r,s:0};continue}case 3:h=h.up}return{done:!0}}}}function Ws(c){var h,m,y,_=(((_=c.r)==null?void 0:_.d)||0)-(((_=c.l)==null?void 0:_.d)||0),_=1<_?"r":_<-1?"l":"";_&&(h=_=="r"?"l":"r",m=o({},c),y=c[_],c.from=y.from,c.to=y.to,c[_]=y[_],m[_]=y[h],(c[h]=m).d=lc(m)),c.d=lc(c)}function lc(m){var h=m.r,m=m.l;return(h?m?Math.max(h.d,m.d):h.d:m?m.d:0)+1}function Xo(c,h){return g(h).forEach(function(m){c[m]?Sr(c[m],h[m]):c[m]=(function y(_){var k,N,O={};for(k in _)S(_,k)&&(N=_[k],O[k]=!N||typeof N!="object"||Qt.has(N.constructor)?N:y(N));return O})(h[m])}),c}function cc(c,h){return c.all||h.all||Object.keys(c).some(function(m){return h[m]&&Po(h[m],c[m])})}E(fn.prototype,((Bn={add:function(c){return Sr(this,c),this},addKey:function(c){return Zs(this,c,c),this},addKeys:function(c){var h=this;return c.forEach(function(m){return Zs(h,m,m)}),this},hasKey:function(c){var h=qi(this).next(c).value;return h&&we(h.from,c)<=0&&0<=we(h.to,c)}})[zt]=function(){return qi(this)},Bn));var kr={},Js={},uc=!1;function Qo(c){Xo(Js,c),uc||(uc=!0,setTimeout(function(){uc=!1,dc(Js,!(Js={}))},0))}function dc(c,h){h===void 0&&(h=!1);var m=new Set;if(c.all)for(var y=0,_=Object.values(kr);y<_.length;y++)Ku(O=_[y],c,m,h);else for(var k in c){var N,O,k=/^idb\:\/\/(.*)\/(.*)\//.exec(k);k&&(N=k[1],k=k[2],O=kr["idb://".concat(N,"/").concat(k)])&&Ku(O,c,m,h)}m.forEach(function(H){return H()})}function Ku(c,h,m,y){for(var _=[],k=0,N=Object.entries(c.queries.query);k<N.length;k++){for(var O=N[k],H=O[0],Z=[],q=0,U=O[1];q<U.length;q++){var I=U[q];cc(h,I.obsSet)?I.subscribers.forEach(function(F){return m.add(F)}):y&&Z.push(I)}y&&_.push([H,Z])}if(y)for(var X=0,K=_;X<K.length;X++){var G=K[X],H=G[0],Z=G[1];c.queries.query[H]=Z}}function Wh(c){var h=c._state,m=c._deps.indexedDB;if(h.isBeingOpened||c.idbdb)return h.dbReadyPromise.then(function(){return h.dbOpenError?We(h.dbOpenError):c});h.isBeingOpened=!0,h.dbOpenError=null,h.openComplete=!1;var y=h.openCanceller,_=Math.round(10*c.verno),k=!1;function N(){if(h.openCanceller!==y)throw new lt.DatabaseClosed("db.open() was cancelled")}function O(){return new $t(function(I,X){if(N(),!m)throw new lt.MissingAPI;var K=c.name,G=h.autoSchema||!_?m.open(K):m.open(K,_);if(!G)throw new lt.MissingAPI;G.onerror=tn(X),G.onblocked=Pe(c._fireOnBlocked),G.onupgradeneeded=Pe(function(F){var at;q=G.transaction,h.autoSchema&&!c._options.allowEmptyDB?(G.onerror=xr,q.abort(),G.result.close(),(at=m.deleteDatabase(K)).onsuccess=at.onerror=Pe(function(){X(new lt.NoSuchDatabase("Database ".concat(K," doesnt exist")))})):(q.onerror=tn(X),at=F.oldVersion>Math.pow(2,62)?0:F.oldVersion,U=at<1,c.idbdb=G.result,k&&qu(c,q),oc(c,at/10,q,X))},X),G.onsuccess=Pe(function(){q=null;var F,at,tt,ct,mt,_t,Nt=c.idbdb=G.result,Tt=ut(Nt.objectStoreNames);if(0<Tt.length)try{var Ut=Nt.transaction((mt=Tt).length===1?mt[0]:mt,"readonly");if(h.autoSchema)_t=Nt,ct=Ut,(tt=c).verno=_t.version/10,ct=tt._dbSchema=Da(0,_t,ct),tt._storeNames=ut(_t.objectStoreNames,0),gi(tt,[tt._allTables],g(ct),ct);else if(ts(c,c._dbSchema,Ut),at=Ut,((at=_r(Da(0,(F=c).idbdb,at),F._dbSchema)).add.length||at.change.some(function(Ot){return Ot.add.length||Ot.change.length}))&&!k)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Nt.close(),_=Nt.version+1,k=!0,I(O());Jr(c,Ut)}catch{}Ii.add(c),Nt.onversionchange=Pe(function(Ot){h.vcFired=!0,c.on("versionchange").fire(Ot)}),Nt.onclose=Pe(function(){c.close({disableAutoOpen:!1})}),U&&(Tt=c._deps,mt=K,Dn(_t=Tt.indexedDB)||mt===Vs||Yo(_t,Tt.IDBKeyRange).put({name:mt}).catch(At)),I()},X)}).catch(function(I){switch(I==null?void 0:I.name){case"UnknownError":if(0<h.PR1398_maxLoop)return h.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),O();break;case"VersionError":if(0<_)return _=0,O()}return $t.reject(I)})}var H,Z=h.dbReadyResolve,q=null,U=!1;return $t.race([y,(typeof navigator>"u"?$t.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(I){function X(){return indexedDB.databases().finally(I)}H=setInterval(X,100),X()}).finally(function(){return clearInterval(H)}):Promise.resolve()).then(O)]).then(function(){return N(),h.onReadyBeingFired=[],$t.resolve(ti(function(){return c.on.ready.fire(c.vip)})).then(function I(){var X;if(0<h.onReadyBeingFired.length)return X=h.onReadyBeingFired.reduce(or,At),h.onReadyBeingFired=[],$t.resolve(ti(function(){return X(c.vip)})).then(I)})}).finally(function(){h.openCanceller===y&&(h.onReadyBeingFired=null,h.isBeingOpened=!1)}).catch(function(I){h.dbOpenError=I;try{q&&q.abort()}catch{}return y===h.openCanceller&&c._close(),We(I)}).finally(function(){h.openComplete=!0,Z()}).then(function(){var I;return U&&(I={},c.tables.forEach(function(X){X.schema.indexes.forEach(function(K){K.name&&(I["idb://".concat(c.name,"/").concat(X.name,"/").concat(K.name)]=new fn(-1/0,[[[]]]))}),I["idb://".concat(c.name,"/").concat(X.name,"/")]=I["idb://".concat(c.name,"/").concat(X.name,"/:dels")]=new fn(-1/0,[[[]]])}),ca(Ys).fire(I),dc(I,!0)),c})}function Zo(c){function h(k){return c.next(k)}var m=_(h),y=_(function(k){return c.throw(k)});function _(k){return function(O){var O=k(O),H=O.value;return O.done?H:H&&typeof H.then=="function"?H.then(m,y):w(H)?Promise.all(H).then(m,y):m(H)}}return _(h)()}function Wo(c,h,m){for(var y=w(c)?c.slice():[c],_=0;_<m;++_)y.push(h);return y}var Jh={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(c){return o(o({},c),{table:function(y){var m=c.table(y),y=m.schema,_=Object.create(null),k=[];function N(I,X,K){var tt=Bi(I),G=_[tt]=_[tt]||[],F=I==null?0:typeof I=="string"?1:I.length,at=0<X,tt=o(o({},K),{name:at?"".concat(tt,"(virtual-from:").concat(K.name,")"):K.name,lowLevelIndex:K,isVirtual:at,keyTail:X,keyLength:F,extractKey:Xs(I),unique:!at&&K.unique});return G.push(tt),tt.isPrimaryKey||k.push(tt),1<F&&N(F===2?I[0]:I.slice(0,F-1),X+1,K),G.sort(function(ct,mt){return ct.keyTail-mt.keyTail}),tt}var O=N(y.primaryKey.keyPath,0,y.primaryKey);_[":id"]=[O];for(var H=0,Z=y.indexes;H<Z.length;H++){var q=Z[H];N(q.keyPath,0,q)}function U(I){var X,K=I.query.index;return K.isVirtual?o(o({},I),{query:{index:K.lowLevelIndex,range:(X=I.query.range,K=K.keyTail,{type:X.type===1?2:X.type,lower:Wo(X.lower,X.lowerOpen?c.MAX_KEY:c.MIN_KEY,K),lowerOpen:!0,upper:Wo(X.upper,X.upperOpen?c.MIN_KEY:c.MAX_KEY,K),upperOpen:!0})}}):I}return o(o({},m),{schema:o(o({},y),{primaryKey:O,indexes:k,getIndexByKeyPath:function(I){return(I=_[Bi(I)])&&I[0]}}),count:function(I){return m.count(U(I))},query:function(I){return m.query(U(I))},openCursor:function(I){var X=I.query.index,K=X.keyTail,G=X.keyLength;return X.isVirtual?m.openCursor(U(I)).then(function(at){return at&&F(at)}):m.openCursor(I);function F(at){return Object.create(at,{continue:{value:function(tt){tt!=null?at.continue(Wo(tt,I.reverse?c.MAX_KEY:c.MIN_KEY,K)):I.unique?at.continue(at.key.slice(0,G).concat(I.reverse?c.MIN_KEY:c.MAX_KEY,K)):at.continue()}},continuePrimaryKey:{value:function(tt,ct){at.continuePrimaryKey(Wo(tt,c.MAX_KEY,K),ct)}},primaryKey:{get:function(){return at.primaryKey}},key:{get:function(){var tt=at.key;return G===1?tt[0]:tt.slice(0,G)}},value:{get:function(){return at.value}}})}}})}})}};function hc(c,h,m,y){return m=m||{},y=y||"",g(c).forEach(function(_){var k,N,O;S(h,_)?(k=c[_],N=h[_],typeof k=="object"&&typeof N=="object"&&k&&N?(O=ve(k))!==ve(N)?m[y+_]=h[_]:O==="Object"?hc(k,N,m,y+_+"."):k!==N&&(m[y+_]=h[_]):k!==N&&(m[y+_]=h[_])):m[y+_]=void 0}),g(h).forEach(function(_){S(c,_)||(m[y+_]=h[_])}),m}function fc(c,h){return h.type==="delete"?h.keys:h.keys||h.values.map(c.extractKey)}var pc={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(c){return o(o({},c),{table:function(h){var m=c.table(h),y=m.schema.primaryKey;return o(o({},m),{mutate:function(_){var k=Ft.trans,N=k.table(h).hook,O=N.deleting,H=N.creating,Z=N.updating;switch(_.type){case"add":if(H.fire===At)break;return k._promise("readwrite",function(){return q(_)},!0);case"put":if(H.fire===At&&Z.fire===At)break;return k._promise("readwrite",function(){return q(_)},!0);case"delete":if(O.fire===At)break;return k._promise("readwrite",function(){return q(_)},!0);case"deleteRange":if(O.fire===At)break;return k._promise("readwrite",function(){return(function U(I,X,K){return m.query({trans:I,values:!1,query:{index:y,range:X},limit:K}).then(function(G){var F=G.result;return q({type:"delete",keys:F,trans:I}).then(function(at){return 0<at.numFailures?Promise.reject(at.failures[0]):F.length<K?{failures:[],numFailures:0,lastResult:void 0}:U(I,o(o({},X),{lower:F[F.length-1],lowerOpen:!0}),K)})})})(_.trans,_.range,1e4)},!0)}return m.mutate(_);function q(U){var I,X,K,G=Ft.trans,F=U.keys||fc(y,U);if(F)return(U=U.type==="add"||U.type==="put"?o(o({},U),{keys:F}):o({},U)).type!=="delete"&&(U.values=d([],U.values)),U.keys&&(U.keys=d([],U.keys)),I=m,K=F,((X=U).type==="add"?Promise.resolve([]):I.getMany({trans:X.trans,keys:K,cache:"immutable"})).then(function(at){var tt=F.map(function(ct,mt){var _t,Nt,Tt,Ut=at[mt],Ot={onerror:null,onsuccess:null};return U.type==="delete"?O.fire.call(Ot,ct,Ut,G):U.type==="add"||Ut===void 0?(_t=H.fire.call(Ot,ct,U.values[mt],G),ct==null&&_t!=null&&(U.keys[mt]=ct=_t,y.outbound||wt(U.values[mt],y.keyPath,ct))):(_t=hc(Ut,U.values[mt]),(Nt=Z.fire.call(Ot,_t,ct,Ut,G))&&(Tt=U.values[mt],Object.keys(Nt).forEach(function(It){S(Tt,It)?Tt[It]=Nt[It]:wt(Tt,It,Nt[It])}))),Ot});return m.mutate(U).then(function(ct){for(var mt=ct.failures,_t=ct.results,Nt=ct.numFailures,ct=ct.lastResult,Tt=0;Tt<F.length;++Tt){var Ut=(_t||F)[Tt],Ot=tt[Tt];Ut==null?Ot.onerror&&Ot.onerror(mt[Tt]):Ot.onsuccess&&Ot.onsuccess(U.type==="put"&&at[Tt]?U.values[Tt]:Ut)}return{failures:mt,results:_t,numFailures:Nt,lastResult:ct}}).catch(function(ct){return tt.forEach(function(mt){return mt.onerror&&mt.onerror(ct)}),Promise.reject(ct)})});throw new Error("Keys missing")}}})}})}};function Gu(c,h,m){try{if(!h||h.keys.length<c.length)return null;for(var y=[],_=0,k=0;_<h.keys.length&&k<c.length;++_)we(h.keys[_],c[k])===0&&(y.push(m?de(h.values[_]):h.values[_]),++k);return y.length===c.length?y:null}catch{return null}}var tf={stack:"dbcore",level:-1,create:function(c){return{table:function(h){var m=c.table(h);return o(o({},m),{getMany:function(y){var _;return y.cache?(_=Gu(y.keys,y.trans._cache,y.cache==="clone"))?$t.resolve(_):m.getMany(y).then(function(k){return y.trans._cache={keys:y.keys,values:y.cache==="clone"?de(k):k},k}):m.getMany(y)},mutate:function(y){return y.type!=="add"&&(y.trans._cache=null),m.mutate(y)}})}}}};function Fu(c,h){return c.trans.mode==="readonly"&&!!c.subscr&&!c.trans.explicit&&c.trans.db._options.cache!=="disabled"&&!h.schema.primaryKey.outbound}function mc(c,h){switch(c){case"query":return h.values&&!h.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var ef={stack:"dbcore",level:0,name:"Observability",create:function(c){var h=c.schema.name,m=new fn(c.MIN_KEY,c.MAX_KEY);return o(o({},c),{transaction:function(y,_,k){if(Ft.subscr&&_!=="readonly")throw new lt.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Ft.querier));return c.transaction(y,_,k)},table:function(y){function _(F){var G,F=F.query;return[G=F.index,new fn((G=(F=F.range).lower)!=null?G:c.MIN_KEY,(G=F.upper)!=null?G:c.MAX_KEY)]}var k=c.table(y),N=k.schema,O=N.primaryKey,H=N.indexes,Z=O.extractKey,q=O.outbound,U=O.autoIncrement&&H.filter(function(K){return K.compound&&K.keyPath.includes(O.keyPath)}),I=o(o({},k),{mutate:function(K){function G(St){return St="idb://".concat(h,"/").concat(y,"/").concat(St),mt[St]||(mt[St]=new fn)}var F,at,tt,ct=K.trans,mt=K.mutatedParts||(K.mutatedParts={}),_t=G(""),Nt=G(":dels"),Tt=K.type,Ot=K.type==="deleteRange"?[K.range]:K.type==="delete"?[K.keys]:K.values.length<50?[fc(O,K).filter(function(St){return St}),K.values]:[],Ut=Ot[0],Ot=Ot[1],It=K.trans._cache;return w(Ut)?(_t.addKeys(Ut),(Tt=Tt==="delete"||Ut.length===Ot.length?Gu(Ut,It):null)||Nt.addKeys(Ut),(Tt||Ot)&&(F=G,at=Tt,tt=Ot,N.indexes.forEach(function(St){var se=F(St.name||"");function Jt(he){return he!=null?St.extractKey(he):null}function le(he){St.multiEntry&&w(he)?he.forEach(function(Pn){return se.addKey(Pn)}):se.addKey(he)}(at||tt).forEach(function(he,en){var ce=at&&Jt(at[en]),en=tt&&Jt(tt[en]);we(ce,en)!==0&&(ce!=null&&le(ce),en!=null)&&le(en)})}))):Ut?(Ot={from:(It=Ut.lower)!=null?It:c.MIN_KEY,to:(Tt=Ut.upper)!=null?Tt:c.MAX_KEY},Nt.add(Ot),_t.add(Ot)):(_t.add(m),Nt.add(m),N.indexes.forEach(function(St){return G(St.name).add(m)})),k.mutate(K).then(function(St){return!Ut||K.type!=="add"&&K.type!=="put"||(_t.addKeys(St.results),U&&U.forEach(function(se){for(var Jt=K.values.map(function(ce){return se.extractKey(ce)}),le=se.keyPath.findIndex(function(ce){return ce===O.keyPath}),he=0,Pn=St.results.length;he<Pn;++he)Jt[he][le]=St.results[he];G(se.name).addKeys(Jt)})),ct.mutatedParts=Xo(ct.mutatedParts||{},mt),St})}}),X={get:function(K){return[O,new fn(K.key)]},getMany:function(K){return[O,new fn().addKeys(K.keys)]},count:_,query:_,openCursor:_};return g(X).forEach(function(K){I[K]=function(G){var F=Ft.subscr,at=!!F,tt=Fu(Ft,k)&&mc(K,G)?G.obsSet={}:F;if(at){var ct,F=function(Ot){return Ot="idb://".concat(h,"/").concat(y,"/").concat(Ot),tt[Ot]||(tt[Ot]=new fn)},mt=F(""),_t=F(":dels"),at=X[K](G),Nt=at[0],at=at[1];if((K==="query"&&Nt.isPrimaryKey&&!G.values?_t:F(Nt.name||"")).add(at),!Nt.isPrimaryKey){if(K!=="count")return ct=K==="query"&&q&&G.values&&k.query(o(o({},G),{values:!1})),k[K].apply(this,arguments).then(function(Ot){if(K==="query"){if(q&&G.values)return ct.then(function(Jt){return Jt=Jt.result,mt.addKeys(Jt),Ot});var It=G.values?Ot.result.map(Z):Ot.result;(G.values?mt:_t).addKeys(It)}else{var St,se;if(K==="openCursor")return se=G.values,(St=Ot)&&Object.create(St,{key:{get:function(){return _t.addKey(St.primaryKey),St.key}},primaryKey:{get:function(){var Jt=St.primaryKey;return _t.addKey(Jt),Jt}},value:{get:function(){return se&&mt.addKey(St.primaryKey),St.value}}})}return Ot});_t.add(m)}}return k[K].apply(this,arguments)}}),I}})}};function Yu(c,h,m){var y;return m.numFailures===0?h:h.type==="deleteRange"||(y=h.keys?h.keys.length:"values"in h&&h.values?h.values.length:1,m.numFailures===y)?null:(y=o({},h),w(y.keys)&&(y.keys=y.keys.filter(function(_,k){return!(k in m.failures)})),"values"in y&&w(y.values)&&(y.values=y.values.filter(function(_,k){return!(k in m.failures)})),y)}function gc(c,h){return m=c,((y=h).lower===void 0||(y.lowerOpen?0<we(m,y.lower):0<=we(m,y.lower)))&&(m=c,(y=h).upper===void 0||(y.upperOpen?we(m,y.upper)<0:we(m,y.upper)<=0));var m,y}function Pu(c,h,m,y,_,k){var N,O,H,Z,q,U,I;return!m||m.length===0||(N=h.query.index,O=N.multiEntry,H=h.query.range,Z=y.schema.primaryKey.extractKey,q=N.extractKey,U=(N.lowLevelIndex||N).extractKey,(y=m.reduce(function(X,K){var G=X,F=[];if(K.type==="add"||K.type==="put")for(var at=new fn,tt=K.values.length-1;0<=tt;--tt){var ct,mt=K.values[tt],_t=Z(mt);!at.hasKey(_t)&&(ct=q(mt),O&&w(ct)?ct.some(function(It){return gc(It,H)}):gc(ct,H))&&(at.addKey(_t),F.push(mt))}switch(K.type){case"add":var Nt=new fn().addKeys(h.values?X.map(function(St){return Z(St)}):X),G=X.concat(h.values?F.filter(function(St){return St=Z(St),!Nt.hasKey(St)&&(Nt.addKey(St),!0)}):F.map(function(St){return Z(St)}).filter(function(St){return!Nt.hasKey(St)&&(Nt.addKey(St),!0)}));break;case"put":var Tt=new fn().addKeys(K.values.map(function(St){return Z(St)}));G=X.filter(function(St){return!Tt.hasKey(h.values?Z(St):St)}).concat(h.values?F:F.map(function(St){return Z(St)}));break;case"delete":var Ut=new fn().addKeys(K.keys);G=X.filter(function(St){return!Ut.hasKey(h.values?Z(St):St)});break;case"deleteRange":var Ot=K.range;G=X.filter(function(St){return!gc(Z(St),Ot)})}return G},c))===c)?c:(I=function(X,K){return we(U(X),U(K))||we(Z(X),Z(K))},y.sort(h.direction==="prev"||h.direction==="prevunique"?function(X,K){return I(K,X)}:I),h.limit&&h.limit<1/0&&(y.length>h.limit?y.length=h.limit:c.length===h.limit&&y.length<h.limit&&(_.dirty=!0)),k?Object.freeze(y):y)}function Xu(c,h){return we(c.lower,h.lower)===0&&we(c.upper,h.upper)===0&&!!c.lowerOpen==!!h.lowerOpen&&!!c.upperOpen==!!h.upperOpen}function nf(c,h){return((m,y,_,k)=>{if(m===void 0)return y!==void 0?-1:0;if(y===void 0)return 1;if((m=we(m,y))===0){if(_&&k)return 0;if(_)return 1;if(k)return-1}return m})(c.lower,h.lower,c.lowerOpen,h.lowerOpen)<=0&&0<=((m,y,_,k)=>{if(m===void 0)return y!==void 0?1:0;if(y===void 0)return-1;if((m=we(m,y))===0){if(_&&k)return 0;if(_)return-1;if(k)return 1}return m})(c.upper,h.upper,c.upperOpen,h.upperOpen)}function af(c,h,m,y){c.subscribers.add(m),y.addEventListener("abort",function(){var _,k;c.subscribers.delete(m),c.subscribers.size===0&&(_=c,k=h,setTimeout(function(){_.subscribers.size===0&&Lt(k,_)},3e3))})}var rf={stack:"dbcore",level:0,name:"Cache",create:function(c){var h=c.schema.name;return o(o({},c),{transaction:function(m,y,_){var k,N,O=c.transaction(m,y,_);return y==="readwrite"&&(_=(k=new AbortController).signal,O.addEventListener("abort",(N=function(H){return function(){if(k.abort(),y==="readwrite"){for(var Z=new Set,q=0,U=m;q<U.length;q++){var I=U[q],X=kr["idb://".concat(h,"/").concat(I)];if(X){var K=c.table(I),G=X.optimisticOps.filter(function(St){return St.trans===O});if(O._explicit&&H&&O.mutatedParts)for(var F=0,at=Object.values(X.queries.query);F<at.length;F++)for(var tt=0,ct=(Nt=at[F]).slice();tt<ct.length;tt++)cc((Tt=ct[tt]).obsSet,O.mutatedParts)&&(Lt(Nt,Tt),Tt.subscribers.forEach(function(St){return Z.add(St)}));else if(0<G.length){X.optimisticOps=X.optimisticOps.filter(function(St){return St.trans!==O});for(var mt=0,_t=Object.values(X.queries.query);mt<_t.length;mt++)for(var Nt,Tt,Ut,Ot=0,It=(Nt=_t[mt]).slice();Ot<It.length;Ot++)(Tt=It[Ot]).res!=null&&O.mutatedParts&&(H&&!Tt.dirty?(Ut=Object.isFrozen(Tt.res),Ut=Pu(Tt.res,Tt.req,G,K,Tt,Ut),Tt.dirty?(Lt(Nt,Tt),Tt.subscribers.forEach(function(St){return Z.add(St)})):Ut!==Tt.res&&(Tt.res=Ut,Tt.promise=$t.resolve({result:Ut}))):(Tt.dirty&&Lt(Nt,Tt),Tt.subscribers.forEach(function(St){return Z.add(St)})))}}}Z.forEach(function(St){return St()})}}})(!1),{signal:_}),O.addEventListener("error",N(!1),{signal:_}),O.addEventListener("complete",N(!0),{signal:_})),O},table:function(m){var y=c.table(m),_=y.schema.primaryKey;return o(o({},y),{mutate:function(k){var N,O=Ft.trans;return!_.outbound&&O.db._options.cache!=="disabled"&&!O.explicit&&O.idbtrans.mode==="readwrite"&&(N=kr["idb://".concat(h,"/").concat(m)])?(O=y.mutate(k),k.type!=="add"&&k.type!=="put"||!(50<=k.values.length||fc(_,k).some(function(H){return H==null}))?(N.optimisticOps.push(k),k.mutatedParts&&Qo(k.mutatedParts),O.then(function(H){0<H.numFailures&&(Lt(N.optimisticOps,k),(H=Yu(0,k,H))&&N.optimisticOps.push(H),k.mutatedParts)&&Qo(k.mutatedParts)}),O.catch(function(){Lt(N.optimisticOps,k),k.mutatedParts&&Qo(k.mutatedParts)})):O.then(function(H){var Z=Yu(0,o(o({},k),{values:k.values.map(function(q,U){var I;return H.failures[U]?q:(wt(I=(I=_.keyPath)!=null&&I.includes(".")?de(q):o({},q),_.keyPath,H.results[U]),I)})}),H);N.optimisticOps.push(Z),queueMicrotask(function(){return k.mutatedParts&&Qo(k.mutatedParts)})}),O):y.mutate(k)},query:function(k){var N,O,H,Z,q,U,I;return Fu(Ft,y)&&mc("query",k)?(N=((H=Ft.trans)==null?void 0:H.db._options.cache)==="immutable",O=(H=Ft).requery,H=H.signal,U=((X,K,G,F)=>{var at=kr["idb://".concat(X,"/").concat(K)];if(!at)return[];if(!(X=at.queries[G]))return[null,!1,at,null];var tt=X[(F.query?F.query.index.name:null)||""];if(!tt)return[null,!1,at,null];switch(G){case"query":var ct=(mt=F.direction)!=null?mt:"next",mt=tt.find(function(_t){var Nt;return _t.req.limit===F.limit&&_t.req.values===F.values&&((Nt=_t.req.direction)!=null?Nt:"next")===ct&&Xu(_t.req.query.range,F.query.range)});return mt?[mt,!0,at,tt]:[tt.find(function(_t){var Nt;return("limit"in _t.req?_t.req.limit:1/0)>=F.limit&&((Nt=_t.req.direction)!=null?Nt:"next")===ct&&(!F.values||_t.req.values)&&nf(_t.req.query.range,F.query.range)}),!1,at,tt];case"count":return mt=tt.find(function(_t){return Xu(_t.req.query.range,F.query.range)}),[mt,!!mt,at,tt]}})(h,m,"query",k),I=U[0],Z=U[2],q=U[3],I&&U[1]?I.obsSet=k.obsSet:(U=y.query(k).then(function(X){var K=X.result;if(I&&(I.res=K),N){for(var G=0,F=K.length;G<F;++G)Object.freeze(K[G]);Object.freeze(K)}return X}).catch(function(X){return q&&I&&Lt(q,I),Promise.reject(X)}),I={obsSet:k.obsSet,promise:U,subscribers:new Set,type:"query",req:k,dirty:!1},q?q.push(I):(q=[I],(Z=Z||(kr["idb://".concat(h,"/").concat(m)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[k.query.index.name||""]=q)),af(I,q,O,H),I.promise.then(function(X){return X=Pu(X.result,k,Z==null?void 0:Z.optimisticOps,y,I,N),{result:N?X:de(X)}})):y.query(k)}})}})}};function Jo(c,h){return new Proxy(c,{get:function(m,y,_){return y==="db"?h:Reflect.get(m,y,_)}})}ln.prototype.version=function(c){if(isNaN(c)||c<.1)throw new lt.Type("Given version is not a positive number");if(c=Math.round(10*c)/10,this.idbdb||this._state.isBeingOpened)throw new lt.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,c);var h=this._versions,m=h.filter(function(y){return y._cfg.version===c})[0];return m||(m=new this.Version(c),h.push(m),h.sort(Iu),m.stores({}),this._state.autoSchema=!1),m},ln.prototype._whenReady=function(c){var h=this;return this.idbdb&&(this._state.openComplete||Ft.letThrough||this._vip)?c():new $t(function(m,y){if(h._state.openComplete)return y(new lt.DatabaseClosed(h._state.dbOpenError));if(!h._state.isBeingOpened){if(!h._state.autoOpen)return void y(new lt.DatabaseClosed);h.open().catch(At)}h._state.dbReadyPromise.then(m,y)}).then(c)},ln.prototype.use=function(_){var h=_.stack,m=_.create,y=_.level,_=_.name,k=(_&&this.unuse({stack:h,name:_}),this._middlewares[h]||(this._middlewares[h]=[]));return k.push({stack:h,create:m,level:y??10,name:_}),k.sort(function(N,O){return N.level-O.level}),this},ln.prototype.unuse=function(c){var h=c.stack,m=c.name,y=c.create;return h&&this._middlewares[h]&&(this._middlewares[h]=this._middlewares[h].filter(function(_){return y?_.create!==y:!!m&&_.name!==m})),this},ln.prototype.open=function(){var c=this;return gr(Ta,function(){return Wh(c)})},ln.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var c=this._state;if(Ii.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}c.isBeingOpened||(c.dbReadyPromise=new $t(function(h){c.dbReadyResolve=h}),c.openCanceller=new $t(function(h,m){c.cancelOpen=m}))},ln.prototype.close=function(h){var h=(h===void 0?{disableAutoOpen:!0}:h).disableAutoOpen,m=this._state;h?(m.isBeingOpened&&m.cancelOpen(new lt.DatabaseClosed),this._close(),m.autoOpen=!1,m.dbOpenError=new lt.DatabaseClosed):(this._close(),m.autoOpen=this._options.autoOpen||m.isBeingOpened,m.openComplete=!1,m.dbOpenError=null)},ln.prototype.delete=function(c){var h=this,m=(c===void 0&&(c={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),y=this._state;return new $t(function(_,k){function N(){h.close(c);var O=h._deps.indexedDB.deleteDatabase(h.name);O.onsuccess=Pe(function(){var H,Z,q;H=h._deps,Z=h.name,Dn(q=H.indexedDB)||Z===Vs||Yo(q,H.IDBKeyRange).delete(Z).catch(At),_()}),O.onerror=tn(k),O.onblocked=h._fireOnBlocked}if(m)throw new lt.InvalidArgument("Invalid closeOptions argument to db.delete()");y.isBeingOpened?y.dbReadyPromise.then(N):N()})},ln.prototype.backendDB=function(){return this.idbdb},ln.prototype.isOpen=function(){return this.idbdb!==null},ln.prototype.hasBeenClosed=function(){var c=this._state.dbOpenError;return c&&c.name==="DatabaseClosed"},ln.prototype.hasFailed=function(){return this._state.dbOpenError!==null},ln.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(ln.prototype,"tables",{get:function(){var c=this;return g(this._allTables).map(function(h){return c._allTables[h]})},enumerable:!1,configurable:!0}),ln.prototype.transaction=function(){var c=(function(h,m,y){var _=arguments.length;if(_<2)throw new lt.InvalidArgument("Too few arguments");for(var k=new Array(_-1);--_;)k[_-1]=arguments[_];return y=k.pop(),[h,gt(k),y]}).apply(this,arguments);return this._transaction.apply(this,c)},ln.prototype._transaction=function(c,h,m){var y,_,k=this,N=Ft.trans,O=(N&&N.db===this&&c.indexOf("!")===-1||(N=null),c.indexOf("?")!==-1);c=c.replace("!","").replace("?","");try{if(_=h.map(function(Z){if(Z=Z instanceof k.Table?Z.name:Z,typeof Z!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return Z}),c=="r"||c===Na)y=Na;else{if(c!="rw"&&c!=wn)throw new lt.InvalidArgument("Invalid transaction mode: "+c);y=wn}if(N){if(N.mode===Na&&y===wn){if(!O)throw new lt.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");N=null}N&&_.forEach(function(Z){if(N&&N.storeNames.indexOf(Z)===-1){if(!O)throw new lt.SubTransaction("Table "+Z+" not included in parent transaction.");N=null}}),O&&N&&!N.active&&(N=null)}}catch(Z){return N?N._promise(null,function(q,U){U(Z)}):We(Z)}var H=(function Z(q,U,I,X,K){return $t.resolve().then(function(){var tt=Ft.transless||Ft,G=q._createTransaction(U,I,q._dbSchema,X),tt=(G.explicit=!0,{trans:G,transless:tt});if(X)G.idbtrans=X.idbtrans;else try{G.create(),G.idbtrans._explicit=!0,q._state.PR1398_maxLoop=3}catch(ct){return ct.name===bt.InvalidState&&q.isOpen()&&0<--q._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),q.close({disableAutoOpen:!1}),q.open().then(function(){return Z(q,U,I,null,K)})):We(ct)}var F,at=Gt(K),tt=(at&&Za(),$t.follow(function(){var ct;(F=K.call(G,G))&&(at?(ct=hi.bind(null,null),F.then(ct,ct)):typeof F.next=="function"&&typeof F.throw=="function"&&(F=Zo(F)))},tt));return(F&&typeof F.then=="function"?$t.resolve(F).then(function(ct){return G.active?ct:We(new lt.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):tt.then(function(){return F})).then(function(ct){return X&&G._resolve(),G._completion.then(function(){return ct})}).catch(function(ct){return G._reject(ct),We(ct)})})}).bind(null,this,y,_,N,m);return N?N._promise(y,H,"lock"):Ft.trans?gr(Ft.transless,function(){return k._whenReady(H)}):this._whenReady(H)},ln.prototype.table=function(c){if(S(this._allTables,c))return this._allTables[c];throw new lt.InvalidTable("Table ".concat(c," does not exist"))};var bi=ln;function ln(c,h){var m,y,_,k,N,O=this,H=(this._middlewares={},this.verno=0,ln.dependencies),H=(this._options=h=o({addons:ln.addons,autoOpen:!0,indexedDB:H.indexedDB,IDBKeyRange:H.IDBKeyRange,cache:"cloned",maxConnections:1e3},h),this._deps={indexedDB:h.indexedDB,IDBKeyRange:h.IDBKeyRange},h.addons),Z=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:At,dbReadyPromise:null,cancelOpen:At,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:h.autoOpen}),q=(Z.dbReadyPromise=new $t(function(U){Z.dbReadyResolve=U}),Z.openCanceller=new $t(function(U,I){Z.cancelOpen=I}),this._state=Z,this.name=c,this.on=Je(this,"populate","blocked","versionchange","close",{ready:[or,At]}),this.once=function(U,I){var X=function(){for(var K=[],G=0;G<arguments.length;G++)K[G]=arguments[G];O.on(U).unsubscribe(X),I.apply(O,K)};return O.on(U,X)},this.on.ready.subscribe=Ct(this.on.ready.subscribe,function(U){return function(I,X){ln.vip(function(){var K,G=O._state;G.openComplete?(G.dbOpenError||$t.resolve().then(I),X&&U(I)):G.onReadyBeingFired?(G.onReadyBeingFired.push(I),X&&U(I)):(U(I),K=O,X||U(function F(){K.on.ready.unsubscribe(I),K.on.ready.unsubscribe(F)}))})}}),this.Collection=(m=this,Zr(Qh.prototype,function(F,G){this.db=m;var X=vr,K=null;if(G)try{X=G()}catch(tt){K=tt}var G=F._ctx,F=G.table,at=F.hook.reading.fire;this._ctx={table:F,index:G.index,isPrimKey:!G.index||F.schema.primKey.keyPath&&G.index===F.schema.primKey.name,range:X,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:K,or:G.or,valueMapper:at!==ye?at:null}})),this.Table=(y=this,Zr(Qr.prototype,function(U,I,X){this.db=y,this._tx=X,this.name=U,this.schema=I,this.hook=y._allTables[U]?y._allTables[U].hook:Je(null,{creating:[Ln,At],reading:[Ue,ye],updating:[De,At],deleting:[sn,At]})})),this.Transaction=(_=this,Zr(Bu.prototype,function(U,I,X,K,G){var F=this;U!=="readonly"&&I.forEach(function(at){at=(at=X[at])==null?void 0:at.yProps,at&&(I=I.concat(at.map(function(tt){return tt.updatesTable})))}),this.db=_,this.mode=U,this.storeNames=I,this.schema=X,this.chromeTransactionDurability=K,this.idbtrans=null,this.on=Je(this,"complete","error","abort"),this.parent=G||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new $t(function(at,tt){F._resolve=at,F._reject=tt}),this._completion.then(function(){F.active=!1,F.on.complete.fire()},function(at){var tt=F.active;return F.active=!1,F.on.error.fire(at),F.parent?F.parent._reject(at):tt&&F.idbtrans&&F.idbtrans.abort(),We(at)})})),this.Version=(k=this,Zr(Vu.prototype,function(U){this.db=k,this._cfg={version:U,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(N=this,Zr(rc.prototype,function(U,I,X){if(this.db=N,this._ctx={table:U,index:I===":id"?null:I,or:X},this._cmp=this._ascending=we,this._descending=function(K,G){return we(G,K)},this._max=function(K,G){return 0<we(K,G)?K:G},this._min=function(K,G){return we(K,G)<0?K:G},this._IDBKeyRange=N._deps.IDBKeyRange,!this._IDBKeyRange)throw new lt.MissingAPI})),this.on("versionchange",function(U){0<U.newVersion?console.warn("Another connection wants to upgrade database '".concat(O.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(O.name,"'. Closing db now to resume the delete request.")),O.close({disableAutoOpen:!1})}),this.on("blocked",function(U){!U.newVersion||U.newVersion<U.oldVersion?console.warn("Dexie.delete('".concat(O.name,"') was blocked")):console.warn("Upgrade '".concat(O.name,"' blocked by other connection holding version ").concat(U.oldVersion/10))}),this._maxKey=Wr(h.IDBKeyRange),this._createTransaction=function(U,I,X,K){return new O.Transaction(U,I,X,O._options.chromeTransactionDurability,K)},this._fireOnBlocked=function(U){O.on("blocked").fire(U),Ii.toArray().filter(function(I){return I.name===O.name&&I!==O&&!I._state.vcFired}).map(function(I){return I.on("versionchange").fire(U)})},this.use(tf),this.use(rf),this.use(ef),this.use(Jh),this.use(pc),new Proxy(this,{get:function(U,I,X){var K;return I==="_vip"||(I==="table"?function(G){return Jo(O.table(G),q)}:(K=Reflect.get(U,I,X))instanceof Qr?Jo(K,q):I==="tables"?K.map(function(G){return Jo(G,q)}):I==="_createTransaction"?function(){return Jo(K.apply(this,arguments),q)}:K)}}));this.vip=q,H.forEach(function(U){return U(O)})}var ns,ei=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",sf=(tl.prototype.subscribe=function(c,h,m){return this._subscribe(c&&typeof c!="function"?c:{next:c,error:h,complete:m})},tl.prototype[ei]=function(){return this},tl);function tl(c){this._subscribe=c}try{ns={indexedDB:f.indexedDB||f.mozIndexedDB||f.webkitIndexedDB||f.msIndexedDB,IDBKeyRange:f.IDBKeyRange||f.webkitIDBKeyRange}}catch{ns={indexedDB:null,IDBKeyRange:null}}function vc(c){var h,m=!1,y=new sf(function(_){var k=Gt(c),N,O=!1,H={},Z={},q={get closed(){return O},unsubscribe:function(){O||(O=!0,N&&N.abort(),U&&ca.storagemutated.unsubscribe(K))}},U=(_.start&&_.start(q),!1),I=function(){return Ho(G)};function X(){return cc(Z,H)}var K=function(F){Xo(H,F),X()&&I()},G=function(){var F,at,tt;!O&&ns.indexedDB&&(H={},F={},N&&N.abort(),N=new AbortController,tt=(ct=>{var mt=Xa();try{k&&Za();var _t=Ea(c,ct);return _t=k?_t.finally(hi):_t}finally{mt&&_n()}})(at={subscr:F,signal:N.signal,requery:I,querier:c,trans:null}),U||(ca.storagemutated.subscribe(K),U=!0),Promise.resolve(tt).then(function(ct){m=!0,h=ct,O||at.signal.aborted||(X()||(Z=F,X())?I():(H={},Ho(function(){return!O&&_.next&&_.next(ct)})))},function(ct){m=!1,["DatabaseClosedError","AbortError"].includes(ct==null?void 0:ct.name)||O||Ho(function(){O||_.error&&_.error(ct)})}))};return setTimeout(I,0),q});return y.hasValue=function(){return m},y.getValue=function(){return h},y}var Vi=bi;function el(c){var h=ua;try{ua=!0,ca.storagemutated.fire(c),dc(c,!0)}finally{ua=h}}E(Vi,o(o({},Ee),{delete:function(c){return new Vi(c,{addons:[]}).delete()},exists:function(c){return new Vi(c,{addons:[]}).open().then(function(h){return h.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(c){try{return h=Vi.dependencies,m=h.indexedDB,h=h.IDBKeyRange,(Dn(m)?Promise.resolve(m.databases()).then(function(y){return y.map(function(_){return _.name}).filter(function(_){return _!==Vs})}):Yo(m,h).toCollection().primaryKeys()).then(c)}catch{return We(new lt.MissingAPI)}var h,m},defineClass:function(){return function(c){x(this,c)}},ignoreTransaction:function(c){return Ft.trans?gr(Ft.transless||Ta,c):c()},vip:ti,async:function(c){return function(){try{var h=Zo(c.apply(this,arguments));return h&&typeof h.then=="function"?h:$t.resolve(h)}catch(m){return We(m)}}},spawn:function(c,h,m){try{var y=Zo(c.apply(m,h||[]));return y&&typeof y.then=="function"?y:$t.resolve(y)}catch(_){return We(_)}},currentTransaction:{get:function(){return Ft.trans||null}},waitFor:function(c,h){return c=$t.resolve(typeof c=="function"?Vi.ignoreTransaction(c):c).timeout(h||6e4),Ft.trans?Ft.trans.waitFor(c):c},Promise:$t,debug:{get:function(){return jn},set:function(c){Bs(c)}},derive:Q,extend:x,props:E,override:Ct,Events:Je,on:ca,liveQuery:vc,extendObservabilitySet:Xo,getByKeyPath:xt,setByKeyPath:wt,delByKeyPath:function(c,h){typeof h=="string"?wt(c,h,void 0):"length"in h&&[].map.call(h,function(m){wt(c,m,void 0)})},shallowClone:vt,deepClone:de,getObjectDiff:hc,cmp:we,asap:dt,minKey:-1/0,addons:[],connections:{get:Ii.toArray},errnames:bt,dependencies:ns,cache:kr,semVer:"4.4.6",version:"4.4.6".split(".").map(function(c){return parseInt(c)}).reduce(function(c,h,m){return c+h/Math.pow(10,2*m)})})),Vi.maxKey=Wr(Vi.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(ca(Ys,function(c){ua||(c=new CustomEvent(Ps,{detail:c}),ua=!0,dispatchEvent(c),ua=!1)}),addEventListener(Ps,function(c){c=c.detail,ua||el(c)}));var Cr,ua=!1,Qu=function(){};return typeof BroadcastChannel<"u"&&((Qu=function(){(Cr=new BroadcastChannel(Ps)).onmessage=function(c){return c.data&&el(c.data)}})(),typeof Cr.unref=="function"&&Cr.unref(),ca(Ys,function(c){ua||Cr.postMessage(c)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(c){if(!bi.disableBfCache&&c.persisted){jn&&console.debug("Dexie: handling persisted pagehide"),Cr!=null&&Cr.close();for(var h=0,m=Ii.toArray();h<m.length;h++)m[h].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(c){!bi.disableBfCache&&c.persisted&&(jn&&console.debug("Dexie: handling persisted pageshow"),Qu(),el({all:new fn(-1/0,[[]])}))})),$t.rejectionMapper=function(c,h){return!c||c instanceof B||c instanceof TypeError||c instanceof SyntaxError||!c.name||!jt[c.name]?c:(h=new jt[c.name](h||c.message,c),"stack"in c&&D(h,"stack",{get:function(){return this.inner.stack}}),h)},Bs(jn),o(bi,Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:1e3,Dexie:bi,Entity:$u,PropModification:Ri,RangeSet:fn,add:function(c){return new Ri({add:c})},cmp:we,default:bi,liveQuery:vc,mergeRanges:Sr,rangesOverlap:Po,remove:function(c){return new Ri({remove:c})},replacePrefix:function(c,h){return new Ri({replacePrefix:[c,h]})}}),{default:bi}),bi})})(vh)),vh.exports}var L_=$_();const Lm=f1(L_),cy=Symbol.for("Dexie"),Sh=globalThis[cy]||(globalThis[cy]=Lm);if(Lm.semVer!==Sh.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Lm.semVer} and ${Sh.semVer}`);const{liveQuery:LT,mergeRanges:BT,rangesOverlap:UT,RangeSet:HT,cmp:IT,Entity:qT,PropModification:VT,replacePrefix:KT,add:GT,remove:FT,DexieYProvider:YT}=Sh;class B_ extends Sh{constructor(){super("korean-srs");Es(this,"words");Es(this,"categories");Es(this,"reviews");Es(this,"sources");Es(this,"packs");Es(this,"achievements");Es(this,"progression");this.version(1).stores({words:"&id, korean, categoryId, nextReviewAt, createdAt",categories:"&id, name, createdAt",reviews:"++id, wordId, dateString, timestamp"}),this.version(2).stores({words:"&id, korean, categoryId, sourceId, nextReviewAt, createdAt",categories:"&id, name, createdAt",reviews:"++id, wordId, dateString, timestamp",sources:"&id, type, artistId, title, createdAt",packs:"&id, sourceId, difficulty, createdAt",achievements:"&id, earnedAt"}),this.version(3).stores({words:"&id, korean, categoryId, sourceId, nextReviewAt, createdAt",categories:"&id, name, createdAt",reviews:"++id, wordId, dateString, timestamp",sources:"&id, type, artistId, title, createdAt",packs:"&id, sourceId, difficulty, createdAt",achievements:"&id, earnedAt",progression:"&id"})}}const me=new B_;function Hr(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,n=>{const i=Math.random()*16|0;return(n==="x"?i:i&3|8).toString(16)})}const U_=[{name:"Основы",colorHex:"#E53935",emoji:"📌"},{name:"Еда",colorHex:"#FB8C00",emoji:"🍱"},{name:"Путешествия",colorHex:"#00897B",emoji:"✈️"},{name:"Работа",colorHex:"#1E88E5",emoji:"💼"},{name:"Учёба",colorHex:"#8E24AA",emoji:"📚"},{name:"Общение",colorHex:"#43A047",emoji:"💬"},{name:"Эмоции",colorHex:"#F06292",emoji:"😊"},{name:"Природа",colorHex:"#558B2F",emoji:"🌿"}],p1=[{korean:"초",translation:"секунда",transcription:"секундо",categoryName:"Основы"},{korean:"차",translation:"чай",transcription:"чай",categoryName:"Еда"},{korean:"커피",translation:"кофе",transcription:"кофе",categoryName:"Еда"},{korean:"오후",translation:"после полудня",transcription:"после полудня (P.M.)",categoryName:"Основы"},{korean:"호주",translation:"Австралия",transcription:"Австралия",categoryName:"Путешествия"},{korean:"코코아",translation:"какао",transcription:"какао",categoryName:"Еда"},{korean:"포도",translation:"виноград",transcription:"виноград",categoryName:"Еда"},{korean:"스키",translation:"катание на лыжах",transcription:"катание на лыжах",categoryName:"Основы"},{korean:"터키",translation:"Турция",transcription:"Турция",categoryName:"Путешествия"},{korean:"페루",translation:"Перу",transcription:"Перу",categoryName:"Путешествия"},{korean:"기차",translation:"поезд",transcription:"поезд",categoryName:"Путешествия"},{korean:"모스크바",translation:"Москва",transcription:"Москва",categoryName:"Путешествия"},{korean:"콩",translation:"зернышки / фасоль",transcription:"зернышки",categoryName:"Еда"},{korean:"밥",translation:"рис / еда",transcription:"рис",categoryName:"Еда"},{korean:"한문",translation:"1 минута",transcription:"1 минута",categoryName:"Основы"},{korean:"자동차",translation:"автомобиль / машина",transcription:"автомобиль",categoryName:"Путешествия"},{korean:"지하철",translation:"метро",transcription:"подвал / метро",categoryName:"Путешествия"},{korean:"인천",translation:"Инчхон",transcription:"Инчхон",categoryName:"Путешествия"},{korean:"프랑스",translation:"Франция",transcription:"Франция",categoryName:"Путешествия"}];function H_(n){const i=n.trim();return p1.find(s=>s.korean===i)}const I_=["g","kk","n","d","tt","r","m","b","pp","s","ss","","j","jj","ch","k","t","p","h"],q_=["a","ae","ya","yae","eo","e","yeo","ye","o","wa","wae","oe","yo","u","wo","we","wi","yu","eu","ui","i"],V_=["","k","k","ks","n","nj","nh","t","l","lg","lm","lb","ls","lt","lp","lh","m","p","bs","s","ss","ng","j","ch","k","t","p","h"];function ql(n){let i="";for(const s of n){const o=s.codePointAt(0);if(o!==void 0)if(o>=44032&&o<=55203){const d=o-44032,f=Math.floor(d/588),g=Math.floor(d%588/28),w=d%28;i+=I_[f]??"",i+=q_[g]??"",i+=V_[w]??""}else i+=s}return i}function K_(n){return Array.from(n).some(i=>{const s=i.codePointAt(0)??0;return s>=44032&&s<=55203||s>=12593&&s<=12686})}const m1="reward_threshold",g1="gemini_proxy_url",v1="theme_id",b1="show_romaja",y1="greeting_",w1="voice_card",x1="voice_listen",_1="color_theme",G_="system";function S1(){try{const n=localStorage.getItem(_1);if(n==="light"||n==="dark"||n==="system")return n}catch{}return G_}function F_(n){try{localStorage.setItem(_1,n)}catch{}}function k1(){const n=S1();return n==="light"?"light":n==="dark"||typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function ig(){try{const n=k1();document.documentElement.dataset.colorTheme=n,document.documentElement.classList.toggle("sl-theme-dark",n==="dark"),document.documentElement.classList.toggle("sl-theme-light",n!=="dark")}catch{}}const Y_="mentor",P_="energetic",C1=5,X_="bts",Bm="https://vercel-proxy-zeta-fawn.vercel.app/api/gemini";function A1(){try{const n=Number(localStorage.getItem(m1));if(Number.isInteger(n)&&n>=1)return n}catch{}return C1}function Q_(n){try{const i=Math.max(1,Math.floor(n));localStorage.setItem(m1,String(i))}catch{}}function T1(){try{const n=localStorage.getItem(g1);return n===null?Bm:n.trim()}catch{return Bm}}function Z_(n){try{localStorage.setItem(g1,n.trim())}catch{}}function jh(){try{const n=localStorage.getItem(v1);if(n)return n.trim()}catch{}return X_}function W_(n){try{localStorage.setItem(v1,n.trim())}catch{}}function J_(){try{return localStorage.getItem(b1)==="1"}catch{}return!1}function t2(n){try{localStorage.setItem(b1,n?"1":"0")}catch{}}function e2(n){try{const i=localStorage.getItem(y1+n);if(i&&i.trim())return i.trim()}catch{}return null}function n2(n,i){try{localStorage.setItem(y1+n,i.trim())}catch{}}function E1(n,i){try{const s=localStorage.getItem(n);if(s&&s.trim())return s.trim()}catch{}return i}function z1(n,i){try{localStorage.setItem(n,i.trim())}catch{}}function a2(){return E1(w1,Y_)}function i2(n){z1(w1,n)}function r2(){return E1(x1,P_)}function s2(n){z1(x1,n)}const o2=[{id:"rm",artistName:"RM",imageName:"bts_rm",russian:"Каждый день — шанс стать собой",korean:"매일은 더 나다운 내가 될 기회야"},{id:"jin",artistName:"Jin",imageName:"bts_jin",russian:"Ты уже достоин любви — просто живи",korean:"너는 이미 사랑받을 자격이 있어"},{id:"suga",artistName:"SUGA",imageName:"bts_suga",russian:"Даже маленький шаг — это уже прогресс",korean:"작은 한 걸음도 이미 성장이야"},{id:"jhope",artistName:"j-hope",imageName:"bts_jhope",russian:"Начни с улыбки — путь станет светлее",korean:"미소부터 시작하면 길이 밝아져"},{id:"jimin",artistName:"Jimin",imageName:"bts_jimin",russian:"Будь мягче к себе и смелее вперёд",korean:"자신에게는 다정하게, 앞으로는 용기 있게"},{id:"v",artistName:"V",imageName:"bts_v",russian:"Иди своим ритмом — он тоже верный",korean:"네 리듬대로 가도 괜찮아"},{id:"jungkook",artistName:"Jungkook",imageName:"bts_jungkook",russian:"Ещё одна попытка — и ты уже ближе",korean:"한 번 더 하면 이미 더 가까워져"}],l2=["bts_jhope_01","bts_jhope_02","bts_jhope_smile","bts_jimin_01","bts_jimin_02","bts_jimin_concert","bts_jin_black_swan","bts_jin_idol","bts_jin_life_goes_on","bts_jk_please_wait","bts_jungkook_01","bts_jungkook_02","bts_jungkook_03","bts_rm_black_swan","bts_rm_life_goes_on","bts_rm_wink","bts_suga_01","bts_suga_02","bts_suga_dna","bts_v_01","bts_v_02","bts_v_life_goes_on"],c2=[{id:"bangchan",artistName:"Bang Chan",imageName:"skz_bangchan",russian:"Ты поднимаешься с каждым новым днём",korean:"새로운 날마다 넌 한 걸음씩 올라가고 있어"},{id:"leeknow",artistName:"Lee Know",imageName:"skz_leeknow",russian:"Не торопись — всё придёт в свой срок",korean:"서두르지 마, 모든 게 제때 온다고"},{id:"changbin",artistName:"Changbin",imageName:"skz_changbin",russian:"Попробуй ещё раз — и не сдавайся",korean:"다시 도전해 봐, 포기하지 마"},{id:"hyunjin",artistName:"Hyunjin",imageName:"skz_hyunjin",russian:"Даже в темноте ты сияешь",korean:"어둠 속에서도 넌 빛나고 있어"},{id:"han",artistName:"HAN",imageName:"skz_han",russian:"Сегодня ты тоже молодец",korean:"오늘도 넌 정말 잘하고 있어"},{id:"felix",artistName:"Felix",imageName:"skz_felix",russian:"Не бойся быть собой",korean:"너 자신을 있는 그대로, 두려워하지 마"},{id:"seungmin",artistName:"Seungmin",imageName:"skz_seungmin",russian:"Один шаг за другим — и ты справишься",korean:"하나씩 천천히, 넌 할 수 있어"},{id:"in",artistName:"I.N",imageName:"skz_in",russian:"Улыбнись — ты на верном пути",korean:"미소 지어 봐, 넌 올바른 길에 있어"}],u2=["skz_bangchan_01","skz_leeknow_01","skz_changbin_01","skz_hyunjin_01","skz_han_01","skz_felix_01","skz_seungmin_01","skz_in_01"],Um=[{id:"bts",name:"BTS",emoji:"💜",greetings:o2,gifNames:l2,statusGifName:"bts_jk_please_wait",gifDir:"bts-gifs",portraitDir:"portraits"},{id:"stray-kids",name:"Stray Kids",emoji:"🖤",greetings:c2,gifNames:u2,statusGifName:"skz_status",gifDir:"skz-gifs",portraitDir:"skz-portraits"}];function rg(n){return Um.find(i=>i.id===n)??Um[0]}function Ai(){return rg(jh())}function d2(n){const i=Ai().greetings;return i.find(s=>s.id===n)??i[0]}function sg(n){const i=Ai().greetings,s=n?i.filter(o=>o.id!==n.id):i;return s[Math.floor(Math.random()*s.length)]??i[0]}function h2(){const n=Ai().gifNames;return n[Math.floor(Math.random()*n.length)]??n[0]}function Dh(n){return`/korean-srs/${Ai().gifDir}/${n}.gif`}function ou(n){return`/korean-srs/${Ai().portraitDir}/${n}.png`}const gm=[{type:"song",emoji:"🎵",label:"Песня",koreanLabel:"노래"},{type:"post",emoji:"📱",label:"Пост",koreanLabel:"게시글"},{type:"variety",emoji:"🎬",label:"Шоу",koreanLabel:"예능"},{type:"fanchant",emoji:"📣",label:"Фанчант",koreanLabel:"떼창"},{type:"textbook",emoji:"📚",label:"Учебник",koreanLabel:"교재"},{type:"user",emoji:"✍️",label:"Своё",koreanLabel:"직접"}];function f2(n){return gm.find(i=>i.type===n)??gm[gm.length-1]}function Rh(n){var o;if(!n)return"";const i=f2(n.type),s=(o=n.artistId)!=null&&o.trim()?` · ${n.artistId}`:"";return`${i.emoji} ${n.title}${s}`}const p2={rm:"Лидер",jin:"Вокал",suga:"Рэп",jhope:"Танцы",jimin:"Вокал",v:"Вокал",jungkook:"Вокал",bangchan:"Лидер",leeknow:"Танцы",changbin:"Рэп",hyunjin:"Танцы",han:"Рэп",felix:"Рэп",seungmin:"Вокал",in:"Вокал"};function m2(n){return rg(n).greetings.map((s,o)=>({id:s.id,stageName:s.artistName,koreanName:"",imageName:s.imageName,colorHex:"",role:p2[s.id]??"",tierThreshold:(o+1)*200}))}function N1(){return m2(Ai().id)}const g2=[{themeId:"bts",type:"song",title:"Spring Day",koreanTitle:"봄날",album:"You Never Walk Alone"},{themeId:"bts",type:"song",title:"Butter",koreanTitle:"Butter",album:"Butter"},{themeId:"bts",type:"song",title:"Dynamite",koreanTitle:"Dynamite",album:"Dynamite"},{themeId:"bts",type:"variety",title:"Run BTS!",koreanTitle:"달려라 방탄",album:null},{themeId:"bts",type:"fanchant",title:'Фанчант "I Purple You"',koreanTitle:"보라해",album:null},{themeId:"stray-kids",type:"song",title:"MANIAC",koreanTitle:"MANIAC",album:"ODDINARY"},{themeId:"stray-kids",type:"song",title:"S-Class",koreanTitle:"특",album:"5-STAR"},{themeId:"stray-kids",type:"variety",title:"SKZ-CODE",koreanTitle:"SKZ CODE",album:null}];function v2(){const n=Date.now();return g2.map((i,s)=>({id:`src_${i.themeId}_${s}`,type:i.type,artistId:null,title:i.title,koreanTitle:i.koreanTitle,album:i.album,snippet:null,createdAt:n+s}))}function b2(n){const i=Ai().id;return n.filter(s=>s.id.startsWith(`src_${i}_`)).sort((s,o)=>s.createdAt-o.createdAt)}function y2(){return[{id:"seed-bts-springday",title:"BTS — Spring Day",subtitle:"Мы встретимся снова · 다시 만날 거야",emoji:"🌸",colorHex:"#FF8A65",difficulty:"Начальный",sourceId:null,wordDefs:[{korean:"봄",translation:"весна"},{korean:"하루",translation:"одни сутки, день"},{korean:"여행",translation:"путешествие"},{korean:"기억",translation:"воспоминание, память"},{korean:"지나가다",translation:"проходить, проходить мимо"},{korean:"기다리다",translation:"ждать"},{korean:"사랑",translation:"любовь"}],createdAt:1},{id:"seed-bts-butter",title:"BTS — Butter",subtitle:"Мягко, как масло · 버터처럼",emoji:"🧈",colorHex:"#FFD54F",difficulty:"Начальный",sourceId:null,wordDefs:[{korean:"춤",translation:"танец"},{korean:"노래",translation:"песня"},{korean:"춤추다",translation:"танцевать",exampleSentence:"춤을 춰요",exampleTranslation:"Танцую"},{korean:"좋다",translation:"быть хорошим, нравиться"},{korean:"자신감",translation:"уверенность"},{korean:"말",translation:"слово, конь (разный ханжа)"},{korean:"서로",translation:"друг друга, взаимно"},{korean:"빛",translation:"свет"}],createdAt:2},{id:"seed-bts-dynamite",title:"BTS — Dynamite",subtitle:"Вспышка энергии · 다이너마이트",emoji:"🕺",colorHex:"#E040FB",difficulty:"Начальный",sourceId:null,wordDefs:[{korean:"자유",translation:"свобода"},{korean:"기분",translation:"настроение, самочувствие"},{korean:"비트",translation:"бит (ритм)"},{korean:"앵콜",translation:"бис (encore)"},{korean:"빛나다",translation:"сиять, сверкать"},{korean:"halo",translation:"ореол"},{korean:"halo가 빛나요",translation:"Ореол сияет"}],createdAt:3},{id:"seed-skz-maniac",title:"Stray Kids — MANIAC",subtitle:"Не будь обычным · 일반적이지 마",emoji:"🪲",colorHex:"#7C4DFF",difficulty:"Начальный",sourceId:null,wordDefs:[{korean:"이상",translation:"ненормальный, странный"},{korean:"다르다",translation:"быть другим, отличаться"},{korean:"미치다",translation:"сойти с ума, безумный"},{korean:"자기",translation:"себя, ты (ласково)"},{korean:"느끼다",translation:"ощущать, чувствовать"},{korean:"rules",translation:"правила"},{korean:"camouflage",translation:"маскировка"}],createdAt:4},{id:"seed-skz-sclass",title:"Stray Kids — S-Class",subtitle:"Сияй по-своему · S클래스",emoji:"💎",colorHex:"#00BCD4",difficulty:"Начальный",sourceId:null,wordDefs:[{korean:"별",translation:"звезда"},{korean:"빛나다",translation:"сиять, сверкать"},{korean:"매력",translation:"очарование, привлекательность"},{korean:"개성",translation:"индивидуальность"},{korean:"자신감",translation:"уверенность"},{korean:"Style",translation:"стиль"},{korean:"S클래스",translation:"S-класс (уровень)"}],createdAt:5}]}const w2={1:0,2:1,3:3,4:5};function x2(n,i){const s=w2[n]??0,o=i>=3?1:0;return s+o}function Mh(n,i){let s=-1;for(let o=0;o<i.length;o++)n>=i[o].tierThreshold&&(s=o);return s}function _2(n,i){const s=Mh(n,i);return s>=0?i[s]:null}function O1(n,i){const s=Mh(n,i);return s+1<i.length?i[s+1]:null}function j1(n,i){const s=Mh(n,i);if(s<0){const f=i[0];return f?Math.max(0,Math.min(1,n/f.tierThreshold)):0}if(s+1>=i.length)return 1;const o=i[s].tierThreshold,d=i[s+1].tierThreshold;return Math.max(0,Math.min(1,(n-o)/(d-o)))}const uy=[{kind:"reviews",title:"Повторение дня",description:"Просмотреть 20 карточек",target:20,rewardXp:20},{kind:"words",title:"Новые слова",description:"Довести словарь до 10 слов",target:10,rewardXp:15},{kind:"master",title:"Запоминание",description:"Выучить 5 слов навсегда",target:5,rewardXp:25},{kind:"streak",title:"Серия",description:"3 дня подряд без пропусков",target:3,rewardXp:30},{kind:"accuracy",title:"Точность",description:"Правильность ответов ≥ 80%",target:80,rewardXp:20}];function Hm(n){const i=new Date(n.getFullYear(),0,0),s=Math.floor((n.getTime()-i.getTime())/(1440*60*1e3));return uy[s%uy.length]}function D1(n,i){let s=0;switch(n.kind){case"reviews":s=i.todayReviews;break;case"words":s=i.totalWords;break;case"master":s=i.masteredWords;break;case"streak":s=i.streak;break;case"accuracy":{const o=i.totalReviews>0?i.correctReviews/i.totalReviews*100:0;s=Math.round(o*100)/100;break}}return Math.max(0,Math.min(1,s/n.target))}function dy(n,i){return D1(n,i)>=1}function R1(){return[{id:"words_10",title:"Первые слова",description:"10 слов в словаре",icon:"book"},{id:"words_50",title:"Словолюб",description:"50 слов в словаре",icon:"journals"},{id:"reviews_100",title:"Сто раз",description:"100 повторений карточек",icon:"folder"},{id:"reviews_500",title:"Полтысячи",description:"500 повторений карточек",icon:"fire"},{id:"streak_3",title:"Первый шаг",description:"3 дня подряд",icon:"flower1"},{id:"streak_7",title:"Неделя сил",description:"7 дней подряд",icon:"stars"},{id:"mastered_10",title:"Коллекционер",description:"10 выученных слов",icon:"award"},{id:"mastered_50",title:"Мастер словаря",description:"50 выученных слов",icon:"gem"},{id:"accuracy_90",title:"Снайпер",description:"Точность 90% (30+ повторов)",icon:"bullseye"}]}function hy(n,i){const s=i.totalReviews>0?i.correctReviews/i.totalReviews*100:0,o={words_10:i.totalWords>=10,words_50:i.totalWords>=50,reviews_100:i.totalReviews>=100,reviews_500:i.totalReviews>=500,streak_3:i.streak>=3,streak_7:i.streak>=7,mastered_10:i.masteredWords>=10,mastered_50:i.masteredWords>=50,accuracy_90:i.totalReviews>=30&&s>=90};return R1().filter(d=>o[d.id]&&!n.has(d.id))}const Im=[{value:1,label:"Забыл",koreanLabel:"다시",name:"AGAIN"},{value:2,label:"Трудно",koreanLabel:"어려움",name:"HARD"},{value:3,label:"Хорошо",koreanLabel:"알맞음",name:"GOOD"},{value:4,label:"Легко",koreanLabel:"쉬움",name:"EASY"}];function S2(n){return Im.find(i=>i.value===n)??Im[0]}const fy=1.3,k2=1440*60*1e3;function C2(n,i,s=Date.now()){let o,d=n.easeFactor,f=n.repetitions;switch(i){case 1:f=0,o=1,d=Math.max(fy,n.easeFactor-.2);break;case 2:f=n.repetitions+1,o=n.intervalDays<=1?1:Math.round(n.intervalDays*1.2),d=Math.max(fy,n.easeFactor-.15);break;case 3:switch(n.repetitions){case 0:o=1;break;case 1:o=3;break;default:o=Math.round(n.intervalDays*n.easeFactor)}f=n.repetitions+1;break;case 4:switch(n.repetitions){case 0:o=3;break;case 1:o=6;break;default:o=Math.round(n.intervalDays*n.easeFactor*1.3)}d=n.easeFactor+.15,f=n.repetitions+1;break}o<1&&(o=1);const g=s+o*k2,w=i!==1;return{updatedState:{intervalDays:o,easeFactor:d,repetitions:f,nextReviewAt:g,lastResult:S2(i).name,totalReviews:n.totalReviews+1,correctReviews:w?n.correctReviews+1:n.correctReviews}}}const M1=21;function lu(n){const i=new Date(n),s=i.getFullYear(),o=String(i.getMonth()+1).padStart(2,"0"),d=String(i.getDate()).padStart(2,"0");return`${s}-${o}-${d}`}function A2(){const n=new Date;return n.setHours(0,0,0,0),n.getTime()}async function T2(){if(await me.categories.count()>0)return;const i=Date.now();await me.categories.bulkAdd(U_.map((s,o)=>({id:Hr(),name:s.name,colorHex:s.colorHex,emoji:s.emoji,createdAt:i+o,isDefault:!0})))}async function E2(){if(await me.words.count()>0)return;const i=await me.categories.toArray(),s=Date.now(),o=p1.map((d,f)=>{const g=i.find(w=>w.name===d.categoryName);return{id:Hr(),korean:d.korean,hanja:null,romaja:ql(d.korean),translation:d.translation,exampleSentence:null,exampleTranslation:null,categoryId:(g==null?void 0:g.id)??null,sourceId:null,tags:[],difficulty:"Начальный",createdAt:s+f,intervalDays:0,easeFactor:2.5,repetitions:0,nextReviewAt:s,lastResult:null,totalReviews:0,correctReviews:0,masteredAt:null}});await me.words.bulkAdd(o)}async function z2(){await T2(),await E2(),await D2(),await N2(),await M2(),await L2()}async function N2(){await me.packs.count()>0||await me.packs.bulkAdd(y2())}async function O2(){return me.packs.orderBy("createdAt").toArray()}async function j2(n){const i=await me.words.toArray(),s=new Set(i.map(f=>f.korean)),o=Date.now();let d=0;for(const f of n.wordDefs){if(s.has(f.korean))continue;const g={id:Hr(),korean:f.korean,hanja:f.hanja??null,romaja:ql(f.korean),translation:f.translation,exampleSentence:f.exampleSentence??null,exampleTranslation:f.exampleTranslation??null,categoryId:null,sourceId:n.sourceId,tags:f.tags??[],difficulty:f.difficulty??n.difficulty,createdAt:o+d,intervalDays:0,easeFactor:2.5,repetitions:0,nextReviewAt:o,lastResult:null,totalReviews:0,correctReviews:0,masteredAt:null};await me.words.add(g),s.add(f.korean),d+=1}return d}async function D2(){await me.sources.count()>0||await me.sources.bulkAdd(v2())}async function R2(){return me.sources.orderBy("createdAt").toArray()}async function M2(){if(await me.achievements.count()>0)return;const i=R1();await me.achievements.bulkAdd(i.map(s=>({...s,earnedAt:null})))}async function vm(){return me.achievements.toArray()}async function py(n,i=Date.now()){if(n.length===0)return;const o=(await me.achievements.toArray()).filter(d=>n.includes(d.id)&&!d.earnedAt).map(d=>({...d,earnedAt:i}));o.length>0&&await me.achievements.bulkPut(o)}async function $2(){const n=await me.progression.get("main");if(n)return n;const i={id:"main",xp:0,rewardedMissionDate:null};return await me.progression.put(i),i}async function my(n){await me.progression.put(n)}async function L2(){const i=(await me.words.toArray()).filter(f=>(!f.masteredAt||typeof f.masteredAt!="number")&&f.intervalDays>=M1);if(i.length===0)return;const s=await me.reviews.toArray(),o=new Map;for(const f of s){const g=o.get(f.wordId);(!g||f.timestamp>g)&&o.set(f.wordId,f.timestamp)}const d=[];for(const f of i)d.push({...f,masteredAt:o.get(f.id)??f.createdAt});d.length>0&&await me.words.bulkPut(d)}async function B2(){return me.words.orderBy("createdAt").reverse().toArray()}async function U2(){return me.categories.orderBy("createdAt").toArray()}async function H2(n=Date.now()){return(await me.words.toArray()).filter(s=>s.nextReviewAt<=n).sort((s,o)=>s.nextReviewAt-o.nextReviewAt)}async function gy(n){await me.words.add(n)}async function vy(n){await me.words.put(n)}async function by(n){await me.words.delete(n)}async function I2(n){await me.categories.add(n)}async function q2(n){const i=n.trim();if(!i)return;const s=i.toLowerCase();return(await me.categories.toArray()).find(d=>d.name.toLowerCase()===s)}async function V2(n,i="🎵",s="#E53935"){const o=await q2(n);if(o)return o;const d={id:Hr(),name:n.trim(),colorHex:s,emoji:i,createdAt:Date.now(),isDefault:!1};return await me.categories.add(d),d}async function K2(n,i="song"){const s=n.trim().toLowerCase();return s?(await me.sources.where("type").equals(i).toArray()).find(d=>d.title.toLowerCase()===s):void 0}async function G2(n){const i=await K2(n,"song");if(i)return i;const s={id:Hr(),type:"song",artistId:null,title:n.trim(),koreanTitle:"",album:null,snippet:null,createdAt:Date.now()};return await me.sources.add(s),s}async function F2(n){const i=await me.words.toArray(),s=new Set(i.map(f=>f.korean)),o=Date.now();let d=0;for(const f of n.drafts){const g=f.korean.trim(),w=f.translation.trim();if(!g||!w||s.has(g))continue;const x=new Set;for(const z of f.tags??[]){const S=z.trim();S&&x.add(S)}x.add(n.soundName);const C={id:Hr(),korean:g,hanja:null,romaja:ql(g),translation:w,exampleSentence:null,exampleTranslation:null,categoryId:n.categoryId,sourceId:n.sourceId,tags:[...x],difficulty:"Начальный",createdAt:o+d,intervalDays:0,easeFactor:2.5,repetitions:0,nextReviewAt:o,lastResult:null,totalReviews:0,correctReviews:0,masteredAt:null};await me.words.add(C),s.add(g),d+=1}return d}async function Y2(n,i,s=Date.now()){const d=C2({intervalDays:n.intervalDays,easeFactor:n.easeFactor,repetitions:n.repetitions,nextReviewAt:n.nextReviewAt,lastResult:n.lastResult,totalReviews:n.totalReviews,correctReviews:n.correctReviews},i,s).updatedState,f=n.masteredAt??(d.intervalDays>=M1?s:null),g={...n,intervalDays:d.intervalDays,easeFactor:d.easeFactor,repetitions:d.repetitions,nextReviewAt:d.nextReviewAt,lastResult:d.lastResult,totalReviews:d.totalReviews,correctReviews:d.correctReviews,masteredAt:f};await me.words.put(g);const w={wordId:n.id,rating:i,dateString:lu(s),timestamp:s};await me.reviews.add(w)}async function bm(n=Date.now()){const i=lu(n);return me.reviews.where("dateString").equals(i).count()}async function ym(){const n=await me.reviews.toArray(),i=new Set(n.map(f=>f.dateString));if(i.size===0)return 0;let s=0,o=A2();const d=lu(o);if(i.has(d))s=1,o-=1440*60*1e3;else{if(o-=1440*60*1e3,!i.has(lu(o)))return 0;s=1,o-=1440*60*1e3}for(;;){const f=lu(o);if(i.has(f))s+=1,o-=1440*60*1e3;else break}return s}let cu;function P2(){if(cu)return cu;const n=window.speechSynthesis;if(!n)return null;const i=n.getVoices(),s=i.find(o=>o.lang==="ko-KR")??i.find(o=>o.lang.toLowerCase().startsWith("ko"))??null;return cu=s,s}function X2(n){const i=window.speechSynthesis;if(i){if(i.getVoices().length>0){cu=void 0;return}i.addEventListener("voiceschanged",()=>{cu=void 0},{once:!0})}}function lh(n,i){const s=window.speechSynthesis;if(!s)return;const o=n.trim();if(!o)return;s.cancel();const d=new SpeechSynthesisUtterance(o),f=P2();f&&(d.voice=f),d.lang="ko-KR",d.rate=(i==null?void 0:i.rate)??.9,d.pitch=(i==null?void 0:i.pitch)??1,s.speak(d)}const kh=[{id:"neutral",name:"Нейтральный",koreanLabel:"기본",rate:.9,pitch:1},{id:"mentor",name:"Спокойный наставник",koreanLabel:"다정",rate:.8,pitch:.9},{id:"energetic",name:"Энергичный",koreanLabel:"활기찬",rate:1.15,pitch:1.2},{id:"soft",name:"Мягкий",koreanLabel:"부드러운",rate:.85,pitch:1.15},{id:"deep",name:"Низкий тон",koreanLabel:"낮은",rate:.82,pitch:.8}];function Ml(n){return kh.find(i=>i.id===n)??kh[0]}const $1="woori_locale";function Q2(){try{const n=localStorage.getItem($1);if(n==="ru"||n==="en")return n}catch{}return null}function Z2(){return(typeof navigator<"u"?(navigator.language||"").toLowerCase():"").startsWith("en")?"en":"ru"}function W2(n){try{localStorage.setItem($1,n)}catch{}}let og=Q2()??Z2();function J2(){return og}function tS(n){og=n,W2(n)}const eS={"app.subtitle":{ru:"Корейский с любимой группой",en:"Learn Korean with your favorite group"},"common.loading":{ru:"Загрузка…",en:"Loading…"},"common.save":{ru:"Сохранить",en:"Save"},"common.add":{ru:"Добавить",en:"Add"},"common.check":{ru:"Проверить",en:"Check"},"common.next":{ru:"Дальше",en:"Next"},"common.cancel":{ru:"Отмена",en:"Cancel"},"common.delete":{ru:"Удалить",en:"Delete"},"common.edit":{ru:"Изменить",en:"Edit"},"common.close":{ru:"Задать",en:"Close"},"tab.home":{ru:"Главная",en:"Home"},"tab.cards":{ru:"Карточки",en:"Cards"},"tab.listening":{ru:"Аудирование",en:"Listening"},"tab.quiz":{ru:"Квиз",en:"Quiz"},"tab.dictionary":{ru:"Словарь",en:"Dictionary"},"tab.gallery":{ru:"Коллекция",en:"Collection"},"tab.progress":{ru:"Прогресс",en:"Progress"},"tab.settings":{ru:"Настройки",en:"Settings"},"home.sectionStats":{ru:"Показатели дня",en:"Today"},"home.stats.words":{ru:"Всего слов",en:"Total words"},"home.stats.toReview":{ru:"К повторению",en:"To review"},"home.startReview":{ru:"Начать повторение",en:"Start review"},"home.startCards":{ru:"Начать карточки",en:"Start cards"},"home.sectionQuick":{ru:"Быстрые действия",en:"Quick actions"},"home.quick.add":{ru:"Добавить",en:"Add word"},"home.quick.scan":{ru:"Сканировать",en:"Scan"},"home.quick.difficult":{ru:"Трудные ({count})",en:"Difficult ({count})"},"home.quick.help":{ru:"Помощь",en:"Help"},"home.quick.packs":{ru:"Паки слов",en:"Word packs"},"home.quick.song":{ru:"Учить по песне",en:"Learn by song"},"song.title":{ru:"Учить по песне",en:"Learn by song"},"song.reviewTitle":{ru:"Распознанные слова",en:"Recognized words"},"song.backToInput":{ru:"Назад",en:"Back"},"song.nameLabel":{ru:"Название песни",en:"Song title"},"song.namePlaceholder":{ru:"Dynamite",en:"Dynamite"},"song.nameHint":{ru:"Слова будут добавлены в категорию с этим названием.",en:"Words will be added to a category with this title."},"song.nameRequired":{ru:"Укажите название песни.",en:"Enter the song title."},"song.audioHint":{ru:"Аудио загружается напрямую в Gemini (не через прокси). Если не работает — вставьте текст вручную.",en:"Audio is sent directly to Gemini (not via proxy). If it fails, paste lyrics manually."},"song.upload":{ru:"Загрузить",en:"Upload"},"song.record":{ru:"Записать",en:"Record"},"song.stopRecord":{ru:"Стоп",en:"Stop"},"song.transcribeRecord":{ru:"Распознать запись",en:"Transcribe recording"},"song.recordManualHint":{ru:"Запись сохранена. Нажмите «Распознать запись» или вставьте текст вручную.",en:"Recording saved. Tap “Transcribe recording” or paste lyrics manually."},"song.parseHintName":{ru:"Сначала укажите название песни.",en:"Enter the song title first."},"song.parseHintLyrics":{ru:"Вставьте текст или распознайте аудио.",en:"Paste lyrics or transcribe audio first."},"song.noApiKey":{ru:"Ключ Gemini API не настроен — загрузка аудио недоступна.",en:"Gemini API key is not set — audio upload is unavailable."},"song.openSettings":{ru:"Настроить",en:"Settings"},"song.micDenied":{ru:"Нет доступа к микрофону. Вставьте текст песни вручную.",en:"Microphone access denied. Paste lyrics manually."},"song.transcribing":{ru:"Распознавание аудио…",en:"Transcribing audio…"},"song.parsing":{ru:"Разбор слов…",en:"Parsing words…"},"song.lyricsManual":{ru:"Текст песни (вручную)",en:"Song lyrics (manual)"},"song.lyricsLabel":{ru:"Текст песни",en:"Song lyrics"},"song.lyricsPlaceholder":{ru:"Вставьте корейский текст построчно…",en:"Paste Korean lyrics line by line…"},"song.parse":{ru:"Разобрать слова",en:"Parse words"},"song.noWords":{ru:"Не найдено корейских слов.",en:"No Korean words found."},"song.errorUnknown":{ru:"Неизвестная ошибка.",en:"Unknown error."},"song.summary":{ru:"{newCount} новых · {knownCount} уже знаю · {inSongCount} в этой песне",en:"{newCount} new · {knownCount} known · {inSongCount} in this song"},"song.sectionNew":{ru:"Новые слова",en:"New words"},"song.sectionKnown":{ru:"Уже знаю",en:"Already know"},"song.sectionKnownHint":{ru:"Эти слова уже есть в вашем словаре.",en:"These words are already in your dictionary."},"song.sectionInSong":{ru:"Уже в этой песне",en:"Already in this song"},"song.sectionInSongHint":{ru:"Эти слова уже добавлены из этой песни раньше.",en:"These words were already imported from this song."},"song.badgeKnown":{ru:"знаю",en:"known"},"song.badgeInSong":{ru:"в песне",en:"in song"},"song.mastered":{ru:"выучено",en:"mastered"},"song.save":{ru:"Добавить ({count})",en:"Add ({count})"},"home.emptyTitle":{ru:"Ваш словарь пока пуст.",en:"Your dictionary is empty."},"home.emptyText":{ru:"Добавьте свои первые слова вручную или отсканируйте текст из учебника!",en:"Add your first words manually or scan text from your textbook!"},"home.mentor":{ru:"Твой наставник",en:"Your mentor"},"home.mentor.none":{ru:"Коллекция фотокарточек",en:"Photo-card collection"},"home.mentor.toNext":{ru:"до «{name}» ещё {count} XP",en:'{count} XP to "{name}"'},"home.mentor.allOpen":{ru:"все участники открыты",en:"all members unlocked"},"home.mission":{ru:"Миссия дня",en:"Today's mission"},"home.mission.reward":{ru:"+{count} XP",en:"+{count} XP"},"gallery.title":{ru:"Коллекция",en:"Collection"},"gallery.sectionCards":{ru:"Фотокарточки",en:"Photocards"},"gallery.unlocked":{ru:"✓ Получена",en:"✓ Unlocked"},"gallery.sectionAchievements":{ru:"Достижения",en:"Achievements"},"gallery.toNext":{ru:"до «{name}» ещё {count} XP",en:'{count} XP to "{name}"'},"gallery.allOpen":{ru:"все участники открыты",en:"all members unlocked"},"gallery.empty":{ru:"Изучайте слова и повторяйте карточки, чтобы открывать награды.",en:"Study words and review cards to unlock rewards."},"gallery.member":{ru:"Участник",en:"Member"},"listen.tapToListen":{ru:"Нажмите, чтобы прослушать",en:"Tap to listen"},"listen.revealWord":{ru:"Слово",en:"Word"},"mission.reviews.title":{ru:"Повторение дня",en:"Daily review"},"mission.reviews.desc":{ru:"Просмотреть 20 карточек",en:"Review 20 cards"},"mission.words.title":{ru:"Новые слова",en:"New words"},"mission.words.desc":{ru:"Довести словарь до 10 слов",en:"Reach 10 words in your dictionary"},"mission.master.title":{ru:"Запоминание",en:"Memorizing"},"mission.master.desc":{ru:"Выучить 5 слов навсегда",en:"Master 5 words forever"},"mission.streak.title":{ru:"Серия",en:"Streak"},"mission.streak.desc":{ru:"3 дня подряд без пропусков",en:"3 days in a row"},"mission.accuracy.title":{ru:"Точность",en:"Accuracy"},"mission.accuracy.desc":{ru:"Правильность ответов ≥ 80%",en:"Answer accuracy ≥ 80%"},"achievement.words_10.title":{ru:"Первые слова",en:"First words"},"achievement.words_10.desc":{ru:"10 слов в словаре",en:"10 words in dictionary"},"achievement.words_50.title":{ru:"Словолюб",en:"Word lover"},"achievement.words_50.desc":{ru:"50 слов в словаре",en:"50 words in dictionary"},"achievement.reviews_100.title":{ru:"Сто раз",en:"Hundred times"},"achievement.reviews_100.desc":{ru:"100 повторений карточек",en:"100 card reviews"},"achievement.reviews_500.title":{ru:"Полтысячи",en:"Half a thousand"},"achievement.reviews_500.desc":{ru:"500 повторений карточек",en:"500 card reviews"},"achievement.streak_3.title":{ru:"Первый шаг",en:"First step"},"achievement.streak_3.desc":{ru:"3 дня подряд",en:"3 days in a row"},"achievement.streak_7.title":{ru:"Неделя сил",en:"Week of power"},"achievement.streak_7.desc":{ru:"7 дней подряд",en:"7 days in a row"},"achievement.mastered_10.title":{ru:"Коллекционер",en:"Collector"},"achievement.mastered_10.desc":{ru:"10 выученных слов",en:"10 mastered words"},"achievement.mastered_50.title":{ru:"Мастер словаря",en:"Dictionary master"},"achievement.mastered_50.desc":{ru:"50 выученных слов",en:"50 mastered words"},"achievement.accuracy_90.title":{ru:"Снайпер",en:"Sniper"},"achievement.accuracy_90.desc":{ru:"Точность 90% (30+ повторов)",en:"90% accuracy (30+ reviews)"},"packs.title":{ru:"Паки слов",en:"Word packs"},"packs.search":{ru:"Поиск пака — по слову или переводу",en:"Search packs by word or translation"},"packs.added":{ru:"✓ Добавлено",en:"✓ Added"},"packs.empty":{ru:"Ничего не нашлось. Попробуйте другой запрос.",en:"Nothing found. Try another query."},"packs.footer":{ru:"Слова из пака добавляются в словарь, если их там ещё нет. Потом они учат по тем же карточкам и квизам.",en:"Pack words are added to your dictionary if they are not there yet. Then you study them in cards and quizzes."},"packs.words":{ru:"{count} слов",en:"{count} words"},"cards.nothing":{ru:"Повторять нечего",en:"Nothing to review"},"cards.nothingDesc":{ru:"Нет слов, требующих повторения.",en:"No words are due for review."},"cards.reviewAll":{ru:"Повторить все слова",en:"Review all words"},"cards.difficult":{ru:"Трудные слова ({count})",en:"Difficult words ({count})"},"cards.doneTitle":{ru:"Отличная работа!",en:"Great job!"},"cards.doneDesc":{ru:"Вы прошли все карточки этой серии.",en:"You finished all the cards in this session."},"cards.progress":{ru:"Карточка {i} из {total}",en:"Card {i} of {total}"},"cards.tapToFlip":{ru:"Нажмите, чтобы перевернуть",en:"Tap to flip"},"cards.evaluate":{ru:"Оцените ваш ответ",en:"Rate your answer"},"cards.reps":{ru:"Повторы: {count}",en:"Reviews: {count}"},"cards.interval":{ru:"Интервал: {count} дн",en:"Interval: {count} d"},"cards.nextReview":{ru:"Повторить через {count} дн",en:"Review in {count} d"},"cards.editAria":{ru:"Редактировать слово",en:"Edit word"},"cards.speakAria":{ru:"Озвучить",en:"Speak"},"detail.title":{ru:"Слово",en:"Word"},"detail.mastered":{ru:"Выучено",en:"Mastered"},"detail.toReview":{ru:"К повторению",en:"To review"},"detail.inProgress":{ru:"Изучается",en:"In progress"},"detail.status":{ru:"Статус",en:"Status"},"detail.reps":{ru:"Повторы",en:"Reviews"},"detail.interval":{ru:"Интервал",en:"Interval"},"detail.nextReview":{ru:"Следующее повторение",en:"Next review"},"detail.deleteConfirm":{ru:"Удалить слово?",en:"Delete this word?"},"add.titleNew":{ru:"Добавить слово",en:"Add word"},"add.titleEdit":{ru:"Изменить слово",en:"Edit word"},"add.korean":{ru:"Корейское слово *",en:"Korean word *"},"add.translation":{ru:"Перевод *",en:"Translation *"},"add.romaja":{ru:"Ромадзия (автозаполнение)",en:"Romanization (auto)"},"add.hanja":{ru:"Ханча (необязательно)",en:"Hanja (optional)"},"add.exampleSentence":{ru:"Пример предложения",en:"Example sentence"},"add.exampleTranslation":{ru:"Перевод примера",en:"Example translation"},"add.category":{ru:"Категория",en:"Category"},"add.source":{ru:"Источник (откуда слово)",en:"Source (where the word is from)"},"add.noSource":{ru:"✍️ Без источника",en:"✍️ No source"},"add.level":{ru:"Уровень",en:"Level"},"add.errKorean":{ru:"Укажите корейское слово.",en:"Enter the Korean word."},"add.errTranslation":{ru:"Укажите перевод.",en:"Enter the translation."},"listen.needWords":{ru:"Нужно минимум 2 слова",en:"Need at least 2 words"},"listen.needWordsDesc":{ru:"Добавьте слова в словарь, чтобы начать аудирование.",en:"Add words to your dictionary to start listening."},"listen.correct":{ru:"✅ Правильно!",en:"✅ Correct!"},"listen.wrong":{ru:"❌ Неправильно",en:"❌ Wrong"},"listen.answer":{ru:"Ответ",en:"Answer"},"listen.word":{ru:"Слово",en:"Word"},"listen.score":{ru:"Счёт: {score} / {total}",en:"Score: {score} / {total}"},"reward.title":{ru:"Отлично! 🎉",en:"Awesome! 🎉"},"reward.body":{ru:"Продолжайте в том же духе!",en:"Keep it up!"},"reward.continue":{ru:"Продолжить",en:"Continue"},"quiz.title":{ru:"Квиз",en:"Quiz"},"quiz.desc":{ru:"Показано русское слово — выберите правильный вариант по-корейски.",en:"You see a word in your language — pick the correct Korean option."},"quiz.start":{ru:"Начать",en:"Start"},"dict.search":{ru:"Поиск: корейский, перевод, ромадзия…",en:"Search: Korean, translation, romanization…"},"dict.selectOnAria":{ru:"Выйти из выбора",en:"Exit selection"},"dict.selectOffAria":{ru:"Выбрать слова",en:"Select words"},"dict.selectionHint":{ru:"Выбрано: {count}. Нажмите на слово, чтобы выбрать или убрать.",en:"Selected: {count}. Tap a word to toggle it."},"dict.all":{ru:"Все",en:"All"},"dict.addCategory":{ru:"+ Категория",en:"+ Category"},"dict.emptyFound":{ru:"Ничего не найдено по вашему запросу.",en:"Nothing found for your query."},"dict.emptyEmpty":{ru:"Словарь пуст. Добавьте слова!",en:"The dictionary is empty. Add some words!"},"dict.tags":{ru:"✏️ Теги",en:"✏️ Tags"},"dict.delete":{ru:"🗑 Удалить",en:"🗑 Delete"},"dict.tagsDialog":{ru:"Назначить теги ({count} слов)",en:"Assign tags ({count} words)"},"dict.tagsHint":{ru:"Теги будут добавлены ко всем выбранным словам (существующие сохранятся).",en:"Tags will be added to all selected words (existing ones stay)."},"dict.assign":{ru:"Назначить",en:"Assign"},"dict.addWordAria":{ru:"Добавить слово",en:"Add word"},"progress.stat":{ru:"Статистика",en:"Statistics"},"progress.mastered":{ru:"Выучено",en:"Mastered"},"progress.daysToMaster":{ru:"Дней до выуч.",en:"Days to master"},"progress.dueToday":{ru:"К сегодня",en:"Due today"},"progress.today":{ru:"Сегодня",en:"Today"},"progress.streakDays":{ru:"Серия дней",en:"Day streak"},"progress.byMonth":{ru:"Запомнено по месяцам",en:"Mastered by month"},"progress.byCat":{ru:"Выучено по категориям",en:"Mastered by category"},"progress.byCatDict":{ru:"Слова по категориям",en:"Words by category"},"progress.noCategory":{ru:"Без категории",en:"No category"},"progress.proverb":{ru:"Многие капли образуют гору",en:"Many drops form a mountain"},"word.status.mastered":{ru:"Выучено",en:"Mastered"},"word.status.due":{ru:"Повторить",en:"Review"},"word.status.in":{ru:"Через {count} дн",en:"In {count} d"},"word.level":{ru:"Ур.",en:"Lv."},"settings.title":{ru:"Настройки",en:"Settings"},"settings.back":{ru:"Настройки",en:"Settings"},"settings.group.interface":{ru:"Интерфейс",en:"Interface"},"settings.group.appearance":{ru:"Оформление",en:"Appearance"},"settings.group.learning":{ru:"Обучение",en:"Learning"},"settings.group.content":{ru:"Тема и контент",en:"Theme & content"},"settings.group.integrations":{ru:"Сканирование",en:"Scanning"},"settings.group.help":{ru:"Справка",en:"Help"},"settings.lang":{ru:"Язык",en:"Language"},"settings.langHint":{ru:"Язык интерфейса. Данные слов не меняются.",en:"Interface language. Word data is unchanged."},"settings.ocr":{ru:"Распознавание текста",en:"Text recognition"},"settings.apiKey":{ru:"Gemini API ключ",en:"Gemini API key"},"settings.apiKeyHint":{ru:"Нужен для сканирования текста с фото. Ключ сохраняется в браузере.",en:"Needed to scan text from photos. The key is stored in your browser."},"settings.proxy":{ru:"Обход ограничений региона",en:"Region restrictions bypass"},"settings.proxyLabel":{ru:"Адрес прокси (Cloudflare Worker)",en:"Proxy URL (Cloudflare Worker)"},"settings.proxyHint":{ru:"По умолчанию уже стоит общий адрес — сканирование работает сразу. Очистите поле для прямого подключения или вставьте свой адрес.",en:"A shared proxy is set by default, so scanning works right away. Clear the field to connect directly or paste your own URL."},"settings.listenSection":{ru:"Аудирование",en:"Listening"},"settings.listenThreshold":{ru:"Правильных ответов подряд для GIF-награды",en:"Consecutive correct answers for a GIF reward"},"settings.listenThresholdHint":{ru:"Награда показывается при каждой кратности: {first}, {second}, {third}...",en:"The reward shows at each multiple: {first}, {second}, {third}..."},"settings.display":{ru:"Отображение",en:"Display"},"settings.colorTheme":{ru:"Тема оформления",en:"Appearance"},"settings.colorThemeHint":{ru:"Светлая, тёмная или как в системе",en:"Light, dark or follow the system"},"settings.colorThemeSystem":{ru:"Как в системе",en:"System"},"settings.colorThemeLight":{ru:"Светлая",en:"Light"},"settings.colorThemeDark":{ru:"Тёмная",en:"Dark"},"settings.showRomaja":{ru:"Английская транскрипция",en:"Show romanization"},"settings.showRomajaHint":{ru:"Показывать romanization под словами и на карточках",en:"Show romanization under words and on cards"},"settings.voices":{ru:"Голоса",en:"Voices"},"settings.voicesCards":{ru:"Карточки",en:"Cards"},"settings.voicesCardsHint":{ru:"Тембр и скорость озвучки на карточках.",en:"Timbre and speed on cards."},"settings.voicesListen":{ru:"Аудирование",en:"Listening"},"settings.voicesListenHint":{ru:"Тембр и скорость озвучки вопросов аудирования.",en:"Timbre and speed for listening questions."},"settings.theme":{ru:"Тема",en:"Theme"},"settings.themeHint":{ru:"Тема меняет приветствия, GIF-награды и картинки в приложении.",en:"The theme changes greetings, GIF rewards and pictures."},"settings.themePreview":{ru:"Тема: предпросмотр",en:"Theme preview"},"settings.guide":{ru:"Инструкция",en:"Guide"},"settings.guideHow":{ru:"Как установить и настроить",en:"How to install and configure"},"settings.guideHint":{ru:"Пошаговая инструкция для новичков: установка на телефон, подключение распознавания и часто задаваемые вопросы.",en:"Step-by-step guide: installing on a phone, enabling recognition and FAQs."},"guide.title":{ru:"Как пользоваться приложением",en:"How to use the app"},"guide.intro":{ru:"«Woori · 우리» — это приложение для запоминания корейских слов. Всё хранится на вашем телефоне и работает даже без интернета. Пошаговая инструкция ниже.",en:"“Woori · 우리” is an app for memorizing Korean words. Everything is stored on your phone and works offline. A step-by-step guide is below."},"guide.ok":{ru:"Понятно, спасибо",en:"Got it, thanks"},"guide.install.title":{ru:"Как установить приложение",en:"How to install the app"},"guide.install.iphone.title":{ru:"На iPhone (Safari)",en:"On iPhone (Safari)"},"guide.install.iphone.text":{ru:'1. Откройте адрес приложения в браузере Safari. 2. Нажмите кнопку «Поделиться» (квадрат со стрелкой вверх внизу). 3. Выберите «На экран "Домой"». 4. Нажмите «Добавить». Появится иконка приложения — как у обычных.',en:"1. Open the app URL in Safari. 2. Tap the Share button (square with an up arrow). 3. Choose “Add to Home Screen”. 4. Tap “Add”. An app icon appears like a native app."},"guide.install.android.title":{ru:"На телефоне с Android (Chrome)",en:"On Android (Chrome)"},"guide.install.android.text":{ru:"1. Откройте адрес приложения в Chrome. 2. Нажмите на три точки (⋮) вверху. 3. Выберите «Установить приложение» или «Добавить на главный экран». 4. Подтвердите. Иконка появится на рабочем столе.",en:"1. Open the app URL in Chrome. 2. Tap the three dots (⋮) at the top. 3. Choose “Install app” or “Add to Home screen”. 4. Confirm. The icon appears on your home screen."},"guide.ocr.title":{ru:"Как включить распознавание с фото",en:"How to enable photo recognition"},"guide.ocr.key.title":{ru:"Получить бесплатный ключ",en:"Get a free key"},"guide.ocr.key.text":{ru:"1. Зайдите в настройки (⚙️ внизу). 2. Нажмите ссылку «AI Studio». 3. Войдите аккаунтом Google и нажмите «Получить ключ» / «Create API key». Это бесплатно. 4. Скопируйте длинный ключ (начинается с AIza...).",en:"1. Open Settings (⚙️ at the bottom). 2. Tap the “AI Studio” link. 3. Sign in with Google and tap “Create API key”. It is free. 4. Copy the long key (starts with AIza...)."},"guide.ocr.paste.title":{ru:"Вставить ключ в приложение",en:"Paste the key into the app"},"guide.ocr.paste.text":{ru:"Вернитесь в приложение и вставьте ключ в поле «Gemini API ключ» в настройках. Нажмите на экране ещё раз, чтобы сохранить.",en:"Return to the app and paste the key into the “Gemini API key” field in Settings. Tap elsewhere to save."},"guide.ocr.scan.title":{ru:"Начать сканирование",en:"Start scanning"},"guide.ocr.scan.text":{ru:"Нажмите «📷 Сканировать» на главном экране, сфотографируйте страницу учебника или тетрадь — приложение распознает слова и переводы.",en:"Tap “📷 Scan” on the home screen and photograph a textbook page — the app recognizes words and translations."},"guide.fail.title":{ru:"Если сканирование не работает",en:"If scanning does not work"},"guide.fail.key.title":{ru:"Проверьте ключ",en:"Check the key"},"guide.fail.key.text":{ru:"Ошибка «Ключ Gemini отклонён» — значит ключ вписан неверно или заканчивается его лимит. Получите новый ключ заново по шагам из раздела 2.",en:"The “Gemini key rejected” error means the key is wrong or its quota is used up. Get a new key following the steps in section 2."},"guide.fail.proxy.title":{ru:"Проверьте адрес помощника (прокси)",en:"Check the helper URL (proxy)"},"guide.fail.proxy.text":{ru:"В настройках в разделе «Обход ограничений региона» по умолчанию стоит адрес {proxy}. Не удаляйте его — он помогает сканированию работать из вашей страны. Если его нет — вставьте адрес обратно.",en:"In Settings → “Region restrictions bypass” a default URL {proxy} is set. Keep it — it helps scanning work from your country. If missing, paste it back."},"guide.fail.camera.title":{ru:"Разрешите доступ к камере",en:"Allow camera access"},"guide.fail.camera.text":{ru:"На iPhone: Настройки → Safari → и включите камеру для приложения. На Android: при первом снимке разрешите доступ к камере.",en:"On iPhone: Settings → Safari, enable camera for the app. On Android: allow camera access at the first capture."},"guide.practice.title":{ru:"Как заниматься",en:"How to study"},"guide.practice.cards.title":{ru:"Карточки 🗂️",en:"Cards 🗂️"},"guide.practice.cards.text":{ru:"Каждый день здесь появляются слова, которые пора повторить. Переворачивайте карточку и честно оценивайте ответ: «Забыл», «Трудно», «Хорошо» или «Легко».",en:"Every day words due for review appear here. Flip the card and honestly rate your answer: “Forgot”, “Hard”, “Good” or “Easy”."},"guide.practice.listen.title":{ru:"Аудирование 🎧 и Квиз 🧠",en:"Listening 🎧 and Quiz 🧠"},"guide.practice.listen.text":{ru:"Проверьте себя: услышите слово и выберите перевод, или увидите русское слово и выберите правильный корейский. За серию верных ответов — приятные картинки-награды.",en:"Test yourself: hear a word and pick the translation, or see a word and pick the Korean one. For a streak of correct answers you get GIF rewards."},"guide.practice.dict.title":{ru:"Словарь 📖 и уроки",en:"Dictionary 📖 and packs"},"guide.practice.dict.text":{ru:"Добавляйте слова вручную, сканируйте из учебника или выбирайте их пачкой, чтобы развесить по тегам. Прогресс 📊 показывает, сколько слов вы уже запомнили.",en:"Add words manually, scan from a textbook or import packs, and organize them with tags. Progress 📊 shows how many words you have memorized."},"guide.faq.title":{ru:"Частые вопросы",en:"FAQ"},"guide.faq.data.title":{ru:"Что делать, если пропали слова?",en:"What if my words disappeared?"},"guide.faq.data.text":{ru:"Данные хранятся на телефоне. Не удаляйте приложение и не очищайте данные Safari, чтобы ничего не потерять. Обновления безопасны — слова сохраняются.",en:"Data is stored on your phone. Do not delete the app or clear Safari data. Updates are safe — words are kept."},"guide.faq.theme.title":{ru:"Можно ли поменять оформление?",en:"Can I change the theme?"},"guide.faq.theme.text":{ru:"Да! Сейчас выбрана тема «{theme}». Зайдите в настройки → «Тема» и выберите другую. Меняются картинки, приветствия и награды.",en:"Yes! The theme “{theme}” is active. Open Settings → Theme and pick another one. Pictures, greetings and rewards change."},"guide.faq.gif.title":{ru:"Куда делись GIF-награды?",en:"Where did GIF rewards go?"},"guide.faq.gif.text":{ru:"Награды появляются за серию правильных ответов в «Аудировании» и «Квизе». Количество правильных ответов подряд для награды можно настроить в настройках.",en:"Rewards appear for a streak of correct answers in Listening and Quiz. The required streak can be adjusted in Settings."}};function R(n,i){const s=eS[n],o=s?og==="en"?s.en:s.ru:n;return i?o.replace(/\{(\w+)\}/g,(d,f)=>i[f]!==void 0?String(i[f]):d):o}function nS(){const n=jh(),i=e2(n),s=Ai().greetings;return i&&s.some(o=>o.id===i)?i:sg().id}function yy(){const n=new Date,i=n.getFullYear(),s=String(n.getMonth()+1).padStart(2,"0"),o=String(n.getDate()).padStart(2,"0");return`${i}-${s}-${o}`}const wy=[{id:"home",title:"Главная",korean:"홈",icon:"house"},{id:"cards",title:"Карточки",korean:"복습",icon:"stack"},{id:"listening",title:"Аудирование",korean:"듣기",icon:"headphones"},{id:"quiz",title:"Квиз",korean:"퀴즈",icon:"patch-question"},{id:"dictionary",title:"Словарь",korean:"단어장",icon:"book"},{id:"gallery",title:"Коллекция",korean:"컬렉션",icon:"images"},{id:"progress",title:"Прогресс",korean:"통계",icon:"bar-chart"},{id:"settings",title:"Настройки",korean:"설정",icon:"gear"}];function aS(){let n="home",i=[],s=[],o=[],d=[],f={id:"main",xp:0,rewardedMissionDate:null},g=[],w="",x=null,C=!1,z=new Set,S=[],E=0,j=!1,D=null,Q=null,nt=!1,Et=0,ut=0,Ct={consecutiveCorrect:0,rewardGifName:null},rt=!1,dt=!1,xt=!1,wt=!1,vt=!1,ot=!1,gt=null,Qt=null,oe="",de=null,Ne=nS(),ve=J_(),zt=a2(),qt=r2(),Lt=S1();const ie=new Set;let re={v:0};function Gt(){re={v:re.v+1},ie.forEach($=>$())}async function Ee(){i=await B2(),s=await U2(),o=await R2(),d=await O2(),Gt()}async function va(){f=await $2(),g=await vm()}function B($,bt){const pt=i.reduce((jt,At)=>jt+At.totalReviews,0),lt=i.reduce((jt,At)=>jt+At.correctReviews,0);return{totalWords:i.length,totalReviews:pt,correctReviews:lt,masteredWords:i.filter(jt=>!!jt.masteredAt).length,todayReviews:$,streak:bt}}async function st($){const bt=await bm(),pt=await ym(),lt=B(bt,pt);f={...f,xp:f.xp+x2($,pt)};const jt=yy();if(f.rewardedMissionDate!==jt){const Ue=Hm(new Date);dy(Ue,lt)&&(f={...f,xp:f.xp+Ue.rewardXp,rewardedMissionDate:jt})}const At=new Set(g.map(Ue=>Ue.id)),ye=hy(At,lt);ye.length>0&&(await py(ye.map(Ue=>Ue.id),Date.now()),g=await vm()),await my(f)}async function yt(){const $=await bm(),bt=await ym(),pt=B($,bt),lt=yy(),jt=new Set(g.map(Ue=>Ue.id)),At=hy(jt,pt);let ye=At.length>0;if(f.rewardedMissionDate!==lt){const Ue=Hm(new Date);dy(Ue,pt)&&(f={...f,xp:f.xp+Ue.rewardXp,rewardedMissionDate:lt},ye=!0)}At.length>0&&(await py(At.map(Ue=>Ue.id),Date.now()),g=await vm()),ye&&await my(f)}return{subscribe($){return ie.add($),()=>ie.delete($)},getSnapshot(){return re},async init(){await z2(),await Ee(),await va()},getTab:()=>n,getWords:()=>i,getCategories:()=>s,getSources:()=>o,getXp:()=>f.xp,getAchievements:()=>g,getProgression:()=>f,sourceFor:$=>$?o.find(bt=>bt.id===$)??null:null,getSearchQuery:()=>w,getSelectedCategoryId:()=>x,isSelectionActive:()=>C,getSelectedIds:()=>z,getCardsQueue:()=>S,getCardIndex:()=>E,getIsCardFlipped:()=>j,getQuizQuestion:()=>D,getSelectedOptionIndex:()=>Q,getIsAnswerChecked:()=>nt,getQuizScore:()=>Et,getQuizTotalCount:()=>ut,getQuizReward:()=>Ct,getIsAddWordOpen:()=>rt,getIsScanOcrOpen:()=>dt,getIsCreateCategoryOpen:()=>xt,getIsGuideOpen:()=>wt,getIsPacksOpen:()=>vt,getIsSongImportOpen:()=>ot,getPacks:()=>d,getSelectedWordForDetail:()=>gt,getEditingWord:()=>Qt,getPrefilledKorean:()=>oe,getPrefilledCategoryId:()=>de,getGreetingId:()=>Ne,getShowRomaja:()=>ve,getColorTheme:()=>Lt,getCardVoice:()=>Ml(zt),getListenVoice:()=>Ml(qt),getLocale:()=>J2(),setLocale($){tS($),Gt()},get isReady(){return re.v>0},async selectTab($){$!=="listening"&&n==="listening"&&(Ct={consecutiveCorrect:0,rewardGifName:null}),n=$,Gt(),$==="cards"&&S.length===0?await this.startDueReview():$==="listening"&&(D===null||D.kind!=="listen")?await this.loadNextQuizQuestion("listen"):$==="quiz"&&(D===null||D.kind!=="reverse")&&await this.loadNextQuizQuestion("reverse")},async startDueReview(){S=await H2(),E=0,j=!1,n="cards",Gt(),this.speakCurrentCard()},async startReviewAll(){S=[...i].sort(()=>Math.random()-.5),E=0,j=!1,n="cards",Gt(),this.speakCurrentCard()},async startDifficultReview(){S=this.difficultWords().sort(()=>Math.random()-.5),E=0,j=!1,n="cards",Gt(),this.speakCurrentCard()},flipCard(){j=!j,Gt()},async rateCard($){if(E>=S.length)return;const bt=S[E];await Y2(bt,$),E+=1,j=!1,await Ee(),await st($),Gt(),this.speakCurrentCard()},speakCurrentCard(){E<S.length&&lh(S[E].korean,Ml(zt))},speakText($){lh($,Ml(zt))},async loadNextQuizQuestion($){const bt=i;if(bt.length<2){D=null,Gt();return}const pt=bt[Math.floor(Math.random()*bt.length)],lt=Fe=>$==="listen"?Fe.translation:Fe.korean,jt=lt(pt),At=new Set([jt]),ye=[],Ue=[...bt].sort(()=>Math.random()-.5);for(const Fe of Ue)if(Fe.id!==pt.id&&!At.has(lt(Fe))&&(At.add(lt(Fe)),ye.push(Fe),ye.length===3))break;let He,Ln,sn;$==="listen"?(He=[{text:pt.translation}],ye.forEach(Fe=>He.push({text:Fe.translation})),He.sort(()=>Math.random()-.5),Ln=pt.korean,sn=pt.romaja):(He=[{text:pt.korean,romaja:pt.romaja}],ye.forEach(Fe=>He.push({text:Fe.korean,romaja:Fe.romaja})),He.sort(()=>Math.random()-.5),Ln=pt.translation,sn=void 0);const De=He.findIndex(Fe=>Fe.text===jt);D={kind:$,targetWordId:pt.id,prompt:Ln,promptRomaja:sn,options:He,correctOptionIndex:De<0?0:De},Q=null,nt=!1,Ct={rewardGifName:null,consecutiveCorrect:Ct.consecutiveCorrect},Gt(),$==="listen"&&lh(pt.korean,Ml(qt))},selectQuizOption($){nt||(Q=$,Gt())},checkQuizAnswer(){const $=D;if(!$||Q===null)return;nt=!0,ut+=1;const bt=Q===$.correctOptionIndex;bt&&(Et+=1);const pt={...Ct};if(bt){pt.consecutiveCorrect+=1;const lt=A1();pt.consecutiveCorrect>=lt&&pt.consecutiveCorrect%lt===0?pt.rewardGifName=h2():pt.rewardGifName=null}else pt.consecutiveCorrect=0,pt.rewardGifName=null;Ct=pt,Gt()},dismissQuizReward(){Ct={...Ct,rewardGifName:null},Gt()},replayQuizAudio(){(D==null?void 0:D.kind)==="listen"&&lh(D.prompt,Ml(qt))},openAddWord($="",bt=null){oe=$,de=bt,Qt=null,rt=!0,Gt()},openEditWord($){Qt=$,rt=!0,Gt()},closeAddWord(){rt=!1,Qt=null,oe="",Gt()},openScanOcr(){dt=!0,Gt()},closeScanOcr(){dt=!1,Gt()},openSongImport(){ot=!0,Gt()},closeSongImport(){ot=!1,Gt()},openSettings(){dt=!1,ot=!1,vt=!1,n="settings",Gt()},openCreateCategory(){xt=!0,Gt()},closeCreateCategory(){xt=!1,Gt()},openGuide(){wt=!0,Gt()},closeGuide(){wt=!1,Gt()},openPacks(){vt=!0,Gt()},closePacks(){vt=!1,Gt()},async addPack($){const bt=d.find(pt=>pt.id===$);bt&&(await j2(bt),await Ee(),await yt(),Gt())},openWordDetail($){gt=$,Gt()},closeWordDetail(){gt=null,Gt()},setSearchQuery($){w=$,Gt()},setSelectedCategory($){x=$,Gt()},setGreeting($){Ne=$,n2(jh(),$),Gt()},setShowRomaja($){ve=$,t2($),Gt()},setColorTheme($){Lt=$,F_($),ig(),Gt()},setCardVoice($){zt=$,i2($),Gt()},setListenVoice($){qt=$,s2($),Gt()},selectTheme($){W_($),Ne=sg().id,Gt()},async saveWord($){var jt;const bt=$.romaja.trim()||ql($.korean),pt=Date.now(),lt=(jt=$.sourceId)!=null&&jt.trim()?$.sourceId.trim():null;if(Qt){const ye={...Qt,korean:$.korean.trim(),hanja:$.hanja.trim()||null,romaja:bt,translation:$.translation.trim(),exampleSentence:$.exampleSentence.trim()||null,exampleTranslation:$.exampleTranslation.trim()||null,categoryId:$.categoryId,sourceId:lt,difficulty:$.difficulty};await vy(ye),S=S.map(Ue=>Ue.id===ye.id?ye:Ue)}else{const At={id:Hr(),korean:$.korean.trim(),hanja:$.hanja.trim()||null,romaja:bt,translation:$.translation.trim(),exampleSentence:$.exampleSentence.trim()||null,exampleTranslation:$.exampleTranslation.trim()||null,categoryId:$.categoryId,sourceId:lt,tags:[],difficulty:$.difficulty,createdAt:pt,intervalDays:0,easeFactor:2.5,repetitions:0,nextReviewAt:pt,lastResult:null,totalReviews:0,correctReviews:0,masteredAt:null};await gy(At)}rt=!1,Qt=null,oe="",await Ee(),await yt(),Gt()},async importWords($){const bt=Date.now();for(const pt of $){const lt=pt.korean.trim(),jt=pt.translation.trim();if(!lt||!jt)continue;const At=pt.tags.map(He=>He.trim()).filter(He=>He.length>0),ye=s.find(He=>At.some(Ln=>Ln.toLowerCase()===He.name.toLowerCase())),Ue={id:Hr(),korean:lt,hanja:null,romaja:ql(lt),translation:jt,exampleSentence:null,exampleTranslation:null,categoryId:(ye==null?void 0:ye.id)??null,sourceId:null,tags:At,difficulty:"Начальный",createdAt:bt,intervalDays:0,easeFactor:2.5,repetitions:0,nextReviewAt:bt,lastResult:null,totalReviews:0,correctReviews:0,masteredAt:null};await gy(Ue)}dt=!1,await Ee(),await yt(),Gt()},async importSongWords($,bt){const pt=bt.trim();if(!pt)return 0;const lt=await V2(pt),jt=await G2(pt),At=$.filter(Ue=>Ue.korean.trim()&&Ue.translation.trim()),ye=await F2({drafts:At,categoryId:lt.id,sourceId:jt.id,soundName:pt});return ot=!1,await Ee(),await yt(),Gt(),ye},async deleteWord($){(gt==null?void 0:gt.id)===$.id&&(gt=null),await by($.id),await Ee()},toggleSelectionMode(){C=!C,C||(z=new Set),Gt()},toggleSelectWord($){z.has($)?(z=new Set(z),z.delete($)):(z=new Set(z),z.add($)),Gt()},clearSelection(){C=!1,z=new Set,Gt()},async assignTagsToSelected($){const bt=Array.from(new Set($.map(pt=>pt.trim()).filter(Boolean)));if(z.size!==0){for(const pt of i){if(!z.has(pt.id))continue;const lt=Array.from(new Set([...pt.tags,...bt]));(lt.length!==pt.tags.length||lt.some((At,ye)=>At!==pt.tags[ye]))&&await vy({...pt,tags:lt})}this.clearSelection(),await Ee()}},async deleteSelection(){const $=new Set(z);for(const bt of i)$.has(bt.id)&&((gt==null?void 0:gt.id)===bt.id&&(gt=null),await by(bt.id));this.clearSelection(),await Ee()},async createCategory($,bt,pt){await I2({id:Hr(),name:$.trim(),colorHex:pt.trim(),emoji:bt.trim(),createdAt:Date.now(),isDefault:!1}),xt=!1,await Ee()},dueWords(){return i.filter($=>$.nextReviewAt<=Date.now()).sort(($,bt)=>$.nextReviewAt-bt.nextReviewAt)},difficultWords(){return i.filter($=>$.lastResult==="AGAIN"||$.lastResult==="HARD"||$.totalReviews>0&&$.easeFactor<2)},filteredWords(){const $=w.trim().toLowerCase();return i.filter(bt=>{var lt;return x===null||bt.categoryId===x?$?bt.korean.toLowerCase().includes($)||bt.translation.toLowerCase().includes($)||bt.romaja.toLowerCase().includes($)||(((lt=bt.hanja)==null?void 0:lt.toLowerCase().includes($))??!1):!0:!1})},totalWordsCount(){return i.length},masteredWordsCount(){return i.filter($=>!!$.masteredAt).length},avgDaysToMaster(){const $=i.filter(pt=>!!pt.masteredAt);if($.length===0)return null;const bt=$.reduce((pt,lt)=>pt+Math.max(0,(lt.masteredAt-lt.createdAt)/(1440*60*1e3)),0);return Math.round(bt/$.length)},masteredByMonth(){const $=new Date,bt=[];for(let pt=11;pt>=0;pt--){const lt=new Date($.getFullYear(),$.getMonth()-pt,1),jt=lt.toLocaleString("ru-RU",{month:"short"}),At=new Date(lt.getFullYear(),lt.getMonth()+1,1);bt.push({month:jt,from:lt.getTime(),to:At.getTime(),label:jt})}return bt.map(pt=>({month:pt.label,count:i.filter(lt=>!!lt.masteredAt&&lt.masteredAt>=pt.from&&lt.masteredAt<pt.to).length}))},masteredByCategory(){const $=new Map;for(const bt of i){if(!bt.masteredAt)continue;const pt=bt.categoryId?this.categoryName(bt.categoryId):"Без категории";$.set(pt,($.get(pt)??0)+1)}return Array.from($.entries()).map(([bt,pt])=>({categoryName:bt,count:pt}))},async todayReviewsCount(){return bm()},async streakCount(){return ym()},accuracyPercent(){const $=i.reduce((pt,lt)=>pt+lt.totalReviews,0),bt=i.reduce((pt,lt)=>pt+lt.correctReviews,0);return $>0?Math.round(bt/$*100):100},categoryName($){var bt;return $?((bt=s.find(pt=>pt.id===$))==null?void 0:bt.name)??"":""},categoryFor($){if($)return s.find(bt=>bt.id===$)}}}const J=aS();function sa(){return Bt.useSyncExternalStore(J.subscribe,J.getSnapshot)}const Ze={red:"#DC2626",charcoal:"#18181B",success:"#16A34A",warning:"#EA580C",blue:"#2563EB",accentPink:"#F43F5E"};function Vl(n){return`#${n.trim().replace(/^#/,"")}`}function iS({size:n=40}){const i=n/2,s=n/2,o=n*.32,d=[-Math.sin(0)*o,-Math.sin(120*(Math.PI/180))*o,-Math.sin(240*(Math.PI/180))*o],f=[Math.cos(0)*o*.6,Math.cos(120*(Math.PI/180))*o*.6,Math.cos(240*(Math.PI/180))*o*.6];return p.jsxs("svg",{width:n,height:n,viewBox:`0 0 ${n} ${n}`,children:[[Ze.charcoal,Ze.accentPink,Ze.red].map((g,w)=>p.jsx("circle",{cx:i+d[w]*.5,cy:s+f[w],r:o*.55,fill:g,opacity:.92},w)),p.jsx("circle",{cx:i,cy:s,r:n*.09,fill:"#ffffff"})]})}function Ci({title:n,subtitle:i,showLogo:s=!0}){return p.jsx("header",{className:"header-row",children:p.jsxs("div",{className:"header-brand",children:[s?p.jsx(iS,{size:40}):null,p.jsxs("div",{children:[p.jsx("p",{className:"header-title",children:n}),i?p.jsx("p",{className:"header-subtitle",children:i}):null]})]})})}function Ns({value:n,label:i,koreanLabel:s,size:o=100,color:d,background:f="#ffffff",className:g=""}){const w=o*.08,x=(o-w)/2,C=2*Math.PI*x;return p.jsxs("div",{className:`circular-stat ${g}`.trim(),children:[p.jsxs("svg",{width:o,height:o,style:{"--circ":C},children:[p.jsx("circle",{className:"circular-track",cx:o/2,cy:o/2,r:x,fill:f,strokeWidth:w}),p.jsx("circle",{className:"circular-ring",cx:o/2,cy:o/2,r:x,fill:"none",stroke:d,strokeWidth:w,strokeDasharray:`${C*.75} ${C}`,strokeLinecap:"round",transform:`rotate(-90 ${o/2} ${o/2})`}),p.jsx("text",{x:o/2,y:o/2,className:"circular-value",fontSize:o*.26,children:n})]}),p.jsxs("span",{className:"circular-label",children:[i," · ",s]})]})}var qm="";function Vm(n){qm=n}function rS(n=""){if(!qm){const i=[...document.getElementsByTagName("script")],s=i.find(o=>o.hasAttribute("data-shoelace"));if(s)Vm(s.getAttribute("data-shoelace"));else{const o=i.find(f=>/shoelace(\.min)?\.js($|\?)/.test(f.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(f.src));let d="";o&&(d=o.getAttribute("src")),Vm(d.split("/").slice(0,-1).join("/"))}}return qm.replace(/\/$/,"")+(n?`/${n.replace(/^\//,"")}`:"")}var sS={name:"default",resolver:n=>rS(`assets/icons/${n}.svg`)},oS=sS,xy={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},lS={name:"system",resolver:n=>n in xy?`data:image/svg+xml,${encodeURIComponent(xy[n])}`:""},cS=lS,uS=[oS,cS],Km=[];function dS(n){Km.push(n)}function hS(n){Km=Km.filter(i=>i!==n)}function _y(n){return uS.find(i=>i.name===n)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bh=globalThis,lg=bh.ShadowRoot&&(bh.ShadyCSS===void 0||bh.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,cg=Symbol(),Sy=new WeakMap;let L1=class{constructor(i,s,o){if(this._$cssResult$=!0,o!==cg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=s}get styleSheet(){let i=this.o;const s=this.t;if(lg&&i===void 0){const o=s!==void 0&&s.length===1;o&&(i=Sy.get(s)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),o&&Sy.set(s,i))}return i}toString(){return this.cssText}};const fS=n=>new L1(typeof n=="string"?n:n+"",void 0,cg),Zt=(n,...i)=>{const s=n.length===1?n[0]:i.reduce((o,d,f)=>o+(g=>{if(g._$cssResult$===!0)return g.cssText;if(typeof g=="number")return g;throw Error("Value passed to 'css' function must be a 'css' function result: "+g+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(d)+n[f+1],n[0]);return new L1(s,n,cg)},pS=(n,i)=>{if(lg)n.adoptedStyleSheets=i.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of i){const o=document.createElement("style"),d=bh.litNonce;d!==void 0&&o.setAttribute("nonce",d),o.textContent=s.cssText,n.appendChild(o)}},ky=lg?n=>n:n=>n instanceof CSSStyleSheet?(i=>{let s="";for(const o of i.cssRules)s+=o.cssText;return fS(s)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:mS,defineProperty:gS,getOwnPropertyDescriptor:vS,getOwnPropertyNames:bS,getOwnPropertySymbols:yS,getPrototypeOf:wS}=Object,Ds=globalThis,Cy=Ds.trustedTypes,xS=Cy?Cy.emptyScript:"",wm=Ds.reactiveElementPolyfillSupport,uu=(n,i)=>n,Kl={toAttribute(n,i){switch(i){case Boolean:n=n?xS:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,i){let s=n;switch(i){case Boolean:s=n!==null;break;case Number:s=n===null?null:Number(n);break;case Object:case Array:try{s=JSON.parse(n)}catch{s=null}}return s}},ug=(n,i)=>!mS(n,i),Ay={attribute:!0,type:String,converter:Kl,reflect:!1,useDefault:!1,hasChanged:ug};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),Ds.litPropertyMetadata??(Ds.litPropertyMetadata=new WeakMap);let Bl=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??(this.l=[])).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,s=Ay){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(i,s),!s.noAccessor){const o=Symbol(),d=this.getPropertyDescriptor(i,o,s);d!==void 0&&gS(this.prototype,i,d)}}static getPropertyDescriptor(i,s,o){const{get:d,set:f}=vS(this.prototype,i)??{get(){return this[s]},set(g){this[s]=g}};return{get:d,set(g){const w=d==null?void 0:d.call(this);f==null||f.call(this,g),this.requestUpdate(i,w,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??Ay}static _$Ei(){if(this.hasOwnProperty(uu("elementProperties")))return;const i=wS(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(uu("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(uu("properties"))){const s=this.properties,o=[...bS(s),...yS(s)];for(const d of o)this.createProperty(d,s[d])}const i=this[Symbol.metadata];if(i!==null){const s=litPropertyMetadata.get(i);if(s!==void 0)for(const[o,d]of s)this.elementProperties.set(o,d)}this._$Eh=new Map;for(const[s,o]of this.elementProperties){const d=this._$Eu(s,o);d!==void 0&&this._$Eh.set(d,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const o=new Set(i.flat(1/0).reverse());for(const d of o)s.unshift(ky(d))}else i!==void 0&&s.push(ky(i));return s}static _$Eu(i,s){const o=s.attribute;return o===!1?void 0:typeof o=="string"?o:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(s=>s(this))}addController(i){var s;(this._$EO??(this._$EO=new Set)).add(i),this.renderRoot!==void 0&&this.isConnected&&((s=i.hostConnected)==null||s.call(i))}removeController(i){var s;(s=this._$EO)==null||s.delete(i)}_$E_(){const i=new Map,s=this.constructor.elementProperties;for(const o of s.keys())this.hasOwnProperty(o)&&(i.set(o,this[o]),delete this[o]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pS(i,this.constructor.elementStyles),i}connectedCallback(){var i;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostConnected)==null?void 0:o.call(s)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostDisconnected)==null?void 0:o.call(s)})}attributeChangedCallback(i,s,o){this._$AK(i,o)}_$ET(i,s){var f;const o=this.constructor.elementProperties.get(i),d=this.constructor._$Eu(i,o);if(d!==void 0&&o.reflect===!0){const g=(((f=o.converter)==null?void 0:f.toAttribute)!==void 0?o.converter:Kl).toAttribute(s,o.type);this._$Em=i,g==null?this.removeAttribute(d):this.setAttribute(d,g),this._$Em=null}}_$AK(i,s){var f,g;const o=this.constructor,d=o._$Eh.get(i);if(d!==void 0&&this._$Em!==d){const w=o.getPropertyOptions(d),x=typeof w.converter=="function"?{fromAttribute:w.converter}:((f=w.converter)==null?void 0:f.fromAttribute)!==void 0?w.converter:Kl;this._$Em=d;const C=x.fromAttribute(s,w.type);this[d]=C??((g=this._$Ej)==null?void 0:g.get(d))??C,this._$Em=null}}requestUpdate(i,s,o,d=!1,f){var g;if(i!==void 0){const w=this.constructor;if(d===!1&&(f=this[i]),o??(o=w.getPropertyOptions(i)),!((o.hasChanged??ug)(f,s)||o.useDefault&&o.reflect&&f===((g=this._$Ej)==null?void 0:g.get(i))&&!this.hasAttribute(w._$Eu(i,o))))return;this.C(i,s,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,s,{useDefault:o,reflect:d,wrapped:f},g){o&&!(this._$Ej??(this._$Ej=new Map)).has(i)&&(this._$Ej.set(i,g??s??this[i]),f!==!0||g!==void 0)||(this._$AL.has(i)||(this.hasUpdated||o||(s=void 0),this._$AL.set(i,s)),d===!0&&this._$Em!==i&&(this._$Eq??(this._$Eq=new Set)).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[f,g]of this._$Ep)this[f]=g;this._$Ep=void 0}const d=this.constructor.elementProperties;if(d.size>0)for(const[f,g]of d){const{wrapped:w}=g,x=this[f];w!==!0||this._$AL.has(f)||x===void 0||this.C(f,void 0,g,x)}}let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),(o=this._$EO)==null||o.forEach(d=>{var f;return(f=d.hostUpdate)==null?void 0:f.call(d)}),this.update(s)):this._$EM()}catch(d){throw i=!1,this._$EM(),d}i&&this._$AE(s)}willUpdate(i){}_$AE(i){var s;(s=this._$EO)==null||s.forEach(o=>{var d;return(d=o.hostUpdated)==null?void 0:d.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(i){}firstUpdated(i){}};Bl.elementStyles=[],Bl.shadowRootOptions={mode:"open"},Bl[uu("elementProperties")]=new Map,Bl[uu("finalized")]=new Map,wm==null||wm({ReactiveElement:Bl}),(Ds.reactiveElementVersions??(Ds.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const du=globalThis,Ty=n=>n,Ch=du.trustedTypes,Ey=Ch?Ch.createPolicy("lit-html",{createHTML:n=>n}):void 0,B1="$lit$",Os=`lit$${Math.random().toFixed(9).slice(2)}$`,U1="?"+Os,_S=`<${U1}>`,Co=document,yu=()=>Co.createComment(""),wu=n=>n===null||typeof n!="object"&&typeof n!="function",dg=Array.isArray,SS=n=>dg(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",xm=`[ 	
\f\r]`,Jc=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zy=/-->/g,Ny=/>/g,yo=RegExp(`>|${xm}(?:([^\\s"'>=/]+)(${xm}*=${xm}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Oy=/'/g,jy=/"/g,H1=/^(?:script|style|textarea|title)$/i,kS=n=>(i,...s)=>({_$litType$:n,strings:i,values:s}),kt=kS(1),Va=Symbol.for("lit-noChange"),an=Symbol.for("lit-nothing"),Dy=new WeakMap,_o=Co.createTreeWalker(Co,129);function I1(n,i){if(!dg(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ey!==void 0?Ey.createHTML(i):i}const CS=(n,i)=>{const s=n.length-1,o=[];let d,f=i===2?"<svg>":i===3?"<math>":"",g=Jc;for(let w=0;w<s;w++){const x=n[w];let C,z,S=-1,E=0;for(;E<x.length&&(g.lastIndex=E,z=g.exec(x),z!==null);)E=g.lastIndex,g===Jc?z[1]==="!--"?g=zy:z[1]!==void 0?g=Ny:z[2]!==void 0?(H1.test(z[2])&&(d=RegExp("</"+z[2],"g")),g=yo):z[3]!==void 0&&(g=yo):g===yo?z[0]===">"?(g=d??Jc,S=-1):z[1]===void 0?S=-2:(S=g.lastIndex-z[2].length,C=z[1],g=z[3]===void 0?yo:z[3]==='"'?jy:Oy):g===jy||g===Oy?g=yo:g===zy||g===Ny?g=Jc:(g=yo,d=void 0);const j=g===yo&&n[w+1].startsWith("/>")?" ":"";f+=g===Jc?x+_S:S>=0?(o.push(C),x.slice(0,S)+B1+x.slice(S)+Os+j):x+Os+(S===-2?w:j)}return[I1(n,f+(n[s]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),o]};class xu{constructor({strings:i,_$litType$:s},o){let d;this.parts=[];let f=0,g=0;const w=i.length-1,x=this.parts,[C,z]=CS(i,s);if(this.el=xu.createElement(C,o),_o.currentNode=this.el.content,s===2||s===3){const S=this.el.content.firstChild;S.replaceWith(...S.childNodes)}for(;(d=_o.nextNode())!==null&&x.length<w;){if(d.nodeType===1){if(d.hasAttributes())for(const S of d.getAttributeNames())if(S.endsWith(B1)){const E=z[g++],j=d.getAttribute(S).split(Os),D=/([.?@])?(.*)/.exec(E);x.push({type:1,index:f,name:D[2],strings:j,ctor:D[1]==="."?TS:D[1]==="?"?ES:D[1]==="@"?zS:$h}),d.removeAttribute(S)}else S.startsWith(Os)&&(x.push({type:6,index:f}),d.removeAttribute(S));if(H1.test(d.tagName)){const S=d.textContent.split(Os),E=S.length-1;if(E>0){d.textContent=Ch?Ch.emptyScript:"";for(let j=0;j<E;j++)d.append(S[j],yu()),_o.nextNode(),x.push({type:2,index:++f});d.append(S[E],yu())}}}else if(d.nodeType===8)if(d.data===U1)x.push({type:2,index:f});else{let S=-1;for(;(S=d.data.indexOf(Os,S+1))!==-1;)x.push({type:7,index:f}),S+=Os.length-1}f++}}static createElement(i,s){const o=Co.createElement("template");return o.innerHTML=i,o}}function Gl(n,i,s=n,o){var g,w;if(i===Va)return i;let d=o!==void 0?(g=s._$Co)==null?void 0:g[o]:s._$Cl;const f=wu(i)?void 0:i._$litDirective$;return(d==null?void 0:d.constructor)!==f&&((w=d==null?void 0:d._$AO)==null||w.call(d,!1),f===void 0?d=void 0:(d=new f(n),d._$AT(n,s,o)),o!==void 0?(s._$Co??(s._$Co=[]))[o]=d:s._$Cl=d),d!==void 0&&(i=Gl(n,d._$AS(n,i.values),d,o)),i}class AS{constructor(i,s){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:s},parts:o}=this._$AD,d=((i==null?void 0:i.creationScope)??Co).importNode(s,!0);_o.currentNode=d;let f=_o.nextNode(),g=0,w=0,x=o[0];for(;x!==void 0;){if(g===x.index){let C;x.type===2?C=new ku(f,f.nextSibling,this,i):x.type===1?C=new x.ctor(f,x.name,x.strings,this,i):x.type===6&&(C=new NS(f,this,i)),this._$AV.push(C),x=o[++w]}g!==(x==null?void 0:x.index)&&(f=_o.nextNode(),g++)}return _o.currentNode=Co,d}p(i){let s=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(i,o,s),s+=o.strings.length-2):o._$AI(i[s])),s++}}class ku{get _$AU(){var i;return((i=this._$AM)==null?void 0:i._$AU)??this._$Cv}constructor(i,s,o,d){this.type=2,this._$AH=an,this._$AN=void 0,this._$AA=i,this._$AB=s,this._$AM=o,this.options=d,this._$Cv=(d==null?void 0:d.isConnected)??!0}get parentNode(){let i=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=s.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,s=this){i=Gl(this,i,s),wu(i)?i===an||i==null||i===""?(this._$AH!==an&&this._$AR(),this._$AH=an):i!==this._$AH&&i!==Va&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):SS(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==an&&wu(this._$AH)?this._$AA.nextSibling.data=i:this.T(Co.createTextNode(i)),this._$AH=i}$(i){var f;const{values:s,_$litType$:o}=i,d=typeof o=="number"?this._$AC(i):(o.el===void 0&&(o.el=xu.createElement(I1(o.h,o.h[0]),this.options)),o);if(((f=this._$AH)==null?void 0:f._$AD)===d)this._$AH.p(s);else{const g=new AS(d,this),w=g.u(this.options);g.p(s),this.T(w),this._$AH=g}}_$AC(i){let s=Dy.get(i.strings);return s===void 0&&Dy.set(i.strings,s=new xu(i)),s}k(i){dg(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let o,d=0;for(const f of i)d===s.length?s.push(o=new ku(this.O(yu()),this.O(yu()),this,this.options)):o=s[d],o._$AI(f),d++;d<s.length&&(this._$AR(o&&o._$AB.nextSibling,d),s.length=d)}_$AR(i=this._$AA.nextSibling,s){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,s);i!==this._$AB;){const d=Ty(i).nextSibling;Ty(i).remove(),i=d}}setConnected(i){var s;this._$AM===void 0&&(this._$Cv=i,(s=this._$AP)==null||s.call(this,i))}}let $h=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,s,o,d,f){this.type=1,this._$AH=an,this._$AN=void 0,this.element=i,this.name=s,this._$AM=d,this.options=f,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=an}_$AI(i,s=this,o,d){const f=this.strings;let g=!1;if(f===void 0)i=Gl(this,i,s,0),g=!wu(i)||i!==this._$AH&&i!==Va,g&&(this._$AH=i);else{const w=i;let x,C;for(i=f[0],x=0;x<f.length-1;x++)C=Gl(this,w[o+x],s,x),C===Va&&(C=this._$AH[x]),g||(g=!wu(C)||C!==this._$AH[x]),C===an?i=an:i!==an&&(i+=(C??"")+f[x+1]),this._$AH[x]=C}g&&!d&&this.j(i)}j(i){i===an?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}};class TS extends $h{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===an?void 0:i}}class ES extends $h{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==an)}}class zS extends $h{constructor(i,s,o,d,f){super(i,s,o,d,f),this.type=5}_$AI(i,s=this){if((i=Gl(this,i,s,0)??an)===Va)return;const o=this._$AH,d=i===an&&o!==an||i.capture!==o.capture||i.once!==o.once||i.passive!==o.passive,f=i!==an&&(o===an||d);d&&this.element.removeEventListener(this.name,this,o),f&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,i):this._$AH.handleEvent(i)}}class NS{constructor(i,s,o){this.element=i,this.type=6,this._$AN=void 0,this._$AM=s,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(i){Gl(this,i)}}const _m=du.litHtmlPolyfillSupport;_m==null||_m(xu,ku),(du.litHtmlVersions??(du.litHtmlVersions=[])).push("3.3.3");const OS=(n,i,s)=>{const o=(s==null?void 0:s.renderBefore)??i;let d=o._$litPart$;if(d===void 0){const f=(s==null?void 0:s.renderBefore)??null;o._$litPart$=d=new ku(i.insertBefore(yu(),f),f,void 0,s??{})}return d._$AI(n),d};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ko=globalThis;let hu=class extends Bl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const i=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=i.firstChild),i}update(i){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=OS(s,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return Va}};var h1;hu._$litElement$=!0,hu.finalized=!0,(h1=ko.litElementHydrateSupport)==null||h1.call(ko,{LitElement:hu});const Sm=ko.litElementPolyfillSupport;Sm==null||Sm({LitElement:hu});(ko.litElementVersions??(ko.litElementVersions=[])).push("4.2.2");var jS=Zt`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,q1=Object.defineProperty,DS=Object.defineProperties,RS=Object.getOwnPropertyDescriptor,MS=Object.getOwnPropertyDescriptors,Ry=Object.getOwnPropertySymbols,$S=Object.prototype.hasOwnProperty,LS=Object.prototype.propertyIsEnumerable,km=(n,i)=>(i=Symbol[n])?i:Symbol.for("Symbol."+n),hg=n=>{throw TypeError(n)},My=(n,i,s)=>i in n?q1(n,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[i]=s,Vr=(n,i)=>{for(var s in i||(i={}))$S.call(i,s)&&My(n,s,i[s]);if(Ry)for(var s of Ry(i))LS.call(i,s)&&My(n,s,i[s]);return n},Cu=(n,i)=>DS(n,MS(i)),v=(n,i,s,o)=>{for(var d=o>1?void 0:o?RS(i,s):i,f=n.length-1,g;f>=0;f--)(g=n[f])&&(d=(o?g(i,s,d):g(d))||d);return o&&d&&q1(i,s,d),d},V1=(n,i,s)=>i.has(n)||hg("Cannot "+s),BS=(n,i,s)=>(V1(n,i,"read from private field"),i.get(n)),US=(n,i,s)=>i.has(n)?hg("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(n):i.set(n,s),HS=(n,i,s,o)=>(V1(n,i,"write to private field"),i.set(n,s),s),IS=function(n,i){this[0]=n,this[1]=i},qS=n=>{var i=n[km("asyncIterator")],s=!1,o,d={};return i==null?(i=n[km("iterator")](),o=f=>d[f]=g=>i[f](g)):(i=i.call(n),o=f=>d[f]=g=>{if(s){if(s=!1,f==="throw")throw g;return g}return s=!0,{done:!1,value:new IS(new Promise(w=>{var x=i[f](g);x instanceof Object||hg("Object expected"),w(x)}),1)}}),d[km("iterator")]=()=>d,o("next"),"throw"in i?o("throw"):d.throw=f=>{throw f},"return"in i&&o("return"),d};function Dt(n,i){const s=Vr({waitUntilFirstUpdate:!1},i);return(o,d)=>{const{update:f}=o,g=Array.isArray(n)?n:[n];o.update=function(w){g.forEach(x=>{const C=x;if(w.has(C)){const z=w.get(C),S=this[C];z!==S&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[d](z,S)}}),f.call(this,w)}}}var ee=Zt`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const VS={attribute:!0,type:String,converter:Kl,reflect:!1,hasChanged:ug},KS=(n=VS,i,s)=>{const{kind:o,metadata:d}=s;let f=globalThis.litPropertyMetadata.get(d);if(f===void 0&&globalThis.litPropertyMetadata.set(d,f=new Map),o==="setter"&&((n=Object.create(n)).wrapped=!0),f.set(s.name,n),o==="accessor"){const{name:g}=s;return{set(w){const x=i.get.call(this);i.set.call(this,w),this.requestUpdate(g,x,n,!0,w)},init(w){return w!==void 0&&this.C(g,void 0,n,w),w}}}if(o==="setter"){const{name:g}=s;return function(w){const x=this[g];i.call(this,w),this.requestUpdate(g,x,n,!0,w)}}throw Error("Unsupported decorator location: "+o)};function T(n){return(i,s)=>typeof s=="object"?KS(n,i,s):((o,d,f)=>{const g=d.hasOwnProperty(f);return d.constructor.createProperty(f,o),g?Object.getOwnPropertyDescriptor(d,f):void 0})(n,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wt(n){return T({...n,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Au(n){return(i,s)=>{const o=typeof i=="function"?i:i[s];Object.assign(o,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const K1=(n,i,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(n,i,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Mt(n,i){return(s,o,d)=>{const f=g=>{var w;return((w=g.renderRoot)==null?void 0:w.querySelector(n))??null};return K1(s,o,{get(){return f(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function GS(n){return(i,s)=>K1(i,s,{async get(){var o;return await this.updateComplete,((o=this.renderRoot)==null?void 0:o.querySelector(n))??null}})}var yh,Pt=class extends hu{constructor(){super(),US(this,yh,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([n,i])=>{this.constructor.define(n,i)})}emit(n,i){const s=new CustomEvent(n,Vr({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return this.dispatchEvent(s),s}static define(n,i=this,s={}){const o=customElements.get(n);if(!o){try{customElements.define(n,i,s)}catch{customElements.define(n,class extends i{},s)}return}let d=" (unknown version)",f=d;"version"in i&&i.version&&(d=" v"+i.version),"version"in o&&o.version&&(f=" v"+o.version),!(d&&f&&d===f)&&console.warn(`Attempted to register <${n}>${d}, but <${n}>${f} has already been registered.`)}attributeChangedCallback(n,i,s){BS(this,yh)||(this.constructor.elementProperties.forEach((o,d)=>{o.reflect&&this[d]!=null&&this.initialReflectedProperties.set(d,this[d])}),HS(this,yh,!0)),super.attributeChangedCallback(n,i,s)}willUpdate(n){super.willUpdate(n),this.initialReflectedProperties.forEach((i,s)=>{n.has(s)&&this[s]==null&&(this[s]=i)})}};yh=new WeakMap;Pt.version="2.20.1";Pt.dependencies={};v([T()],Pt.prototype,"dir",2);v([T()],Pt.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const FS=(n,i)=>(n==null?void 0:n._$litType$)!==void 0,G1=n=>n.strings===void 0,YS={},PS=(n,i=YS)=>n._$AH=i;var tu=Symbol(),ch=Symbol(),Cm,Am=new Map,Ke=class extends Pt{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(n,i){var s;let o;if(i!=null&&i.spriteSheet)return this.svg=kt`<svg part="svg">
        <use part="use" href="${n}"></use>
      </svg>`,this.svg;try{if(o=await fetch(n,{mode:"cors"}),!o.ok)return o.status===410?tu:ch}catch{return ch}try{const d=document.createElement("div");d.innerHTML=await o.text();const f=d.firstElementChild;if(((s=f==null?void 0:f.tagName)==null?void 0:s.toLowerCase())!=="svg")return tu;Cm||(Cm=new DOMParser);const w=Cm.parseFromString(f.outerHTML,"text/html").body.querySelector("svg");return w?(w.part.add("svg"),document.adoptNode(w)):tu}catch{return tu}}connectedCallback(){super.connectedCallback(),dS(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),hS(this)}getIconSource(){const n=_y(this.library);return this.name&&n?{url:n.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var n;const{url:i,fromLibrary:s}=this.getIconSource(),o=s?_y(this.library):void 0;if(!i){this.svg=null;return}let d=Am.get(i);if(d||(d=this.resolveIcon(i,o),Am.set(i,d)),!this.initialRender)return;const f=await d;if(f===ch&&Am.delete(i),i===this.getIconSource().url){if(FS(f)){if(this.svg=f,o){await this.updateComplete;const g=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&g&&o.mutator(g)}return}switch(f){case ch:case tu:this.svg=null,this.emit("sl-error");break;default:this.svg=f.cloneNode(!0),(n=o==null?void 0:o.mutator)==null||n.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Ke.styles=[ee,jS];v([Wt()],Ke.prototype,"svg",2);v([T({reflect:!0})],Ke.prototype,"name",2);v([T()],Ke.prototype,"src",2);v([T()],Ke.prototype,"label",2);v([T({reflect:!0})],Ke.prototype,"library",2);v([Dt("label")],Ke.prototype,"handleLabelChange",1);v([Dt(["name","src","library"])],Ke.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const XS=new Set(["children","localName","ref","style","className"]),$y=new WeakMap,Ly=(n,i,s,o,d)=>{const f=d==null?void 0:d[i];f===void 0?(n[i]=s,s==null&&i in HTMLElement.prototype&&n.removeAttribute(i)):s!==o&&((g,w,x)=>{let C=$y.get(g);C===void 0&&$y.set(g,C=new Map);let z=C.get(w);x!==void 0?z===void 0?(C.set(w,z={handleEvent:x}),g.addEventListener(w,z)):z.handleEvent=x:z!==void 0&&(C.delete(w),g.removeEventListener(w,z))})(n,f,s)},QS=({react:n,tagName:i,elementClass:s,events:o,displayName:d})=>{const f=new Set(Object.keys(o??{})),g=n.forwardRef(((w,x)=>{const C=n.useRef(new Map),z=n.useRef(null),S={},E={};for(const[j,D]of Object.entries(w))XS.has(j)?S[j==="className"?"class":j]=D:f.has(j)||j in s.prototype?E[j]=D:S[j]=D;return n.useLayoutEffect((()=>{if(z.current===null)return;const j=new Map;for(const D in E)Ly(z.current,D,w[D],C.current.get(D),o),C.current.delete(D),j.set(D,w[D]);for(const[D,Q]of C.current)Ly(z.current,D,void 0,Q,o);C.current=j})),n.useLayoutEffect((()=>{var j;(j=z.current)==null||j.removeAttribute("defer-hydration")}),[]),S.suppressHydrationWarning=!0,n.createElement(i,{...S,ref:n.useCallback((j=>{z.current=j,typeof x=="function"?x(j):x!==null&&(x.current=j)}),[x])})}));return g.displayName=d,g};var ZS="sl-icon";Ke.define("sl-icon");var WS=QS({tagName:ZS,elementClass:Ke,react:T_,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),JS=WS;function ae({name:n,label:i,className:s,size:o,style:d}){return p.jsx(JS,{name:n,label:i,className:s,style:{fontSize:o,...d}})}function tk(){sa();const n=J.totalWordsCount(),i=J.dueWords(),s=d2(J.getGreetingId()),o=J.getXp(),d=N1(),f=_2(o,d),g=O1(o,d),w=Math.round(j1(o,d)*100),x=Hm(new Date),[C,z]=Bt.useState(0),[S,E]=Bt.useState(0);return Bt.useEffect(()=>{let j=!0;return J.streakCount().then(D=>j&&E(D)),J.todayReviewsCount().then(D=>j&&z(D)),()=>{j=!1}},[J.getSnapshot()]),p.jsxs("div",{children:[p.jsx(Ci,{title:"Woori · 우리",subtitle:R("app.subtitle")}),p.jsxs("div",{className:"greeting-card card",onClick:()=>J.setGreeting(sg(s).id),children:[p.jsx("img",{className:"greeting-image",src:ou(s.imageName),alt:s.artistName}),p.jsxs("div",{children:[p.jsx("p",{className:"greeting-text-rus",children:s.russian}),p.jsx("p",{className:"greeting-text-kor",children:s.korean}),p.jsx("p",{className:"greeting-artist",children:s.artistName})]})]}),f?p.jsxs("div",{className:"card mentor-card",onClick:()=>J.selectTab("gallery"),children:[p.jsx("img",{className:"mentor-avatar",src:ou(f.imageName),alt:f.stageName}),p.jsxs("div",{className:"mentor-body",children:[p.jsxs("p",{className:"mentor-title",children:[R("home.mentor")," — ",f.stageName," ",p.jsx("span",{className:"mentor-role",children:f.role})]}),p.jsx("div",{className:"progress-track",children:p.jsx("div",{className:"progress-fill",style:{width:`${w}%`}})}),p.jsx("p",{className:"mentor-hint",children:g?`${o} XP · ${R("home.mentor.toNext",{name:g.stageName,count:Math.max(0,g.tierThreshold-o)})}`:`${o} XP · ${R("home.mentor.allOpen")}`})]})]}):p.jsxs("div",{className:"card mentor-card",onClick:()=>J.selectTab("gallery"),children:[p.jsx("img",{className:"mentor-avatar",src:ou(s.imageName),alt:s.artistName}),p.jsxs("div",{className:"mentor-body",children:[p.jsx("p",{className:"mentor-title",children:R("home.mentor.none")}),p.jsxs("p",{className:"mentor-hint",children:[o," XP"]})]})]}),p.jsx("h2",{className:"section-title",children:R("home.sectionStats")}),p.jsxs("div",{className:"stats-row",children:[p.jsx(Ns,{value:`${n}`,label:R("home.stats.words"),koreanLabel:"총 단어",color:Ze.charcoal,className:"circular-stat-charcoal"}),p.jsx(Ns,{value:`${i.length}`,label:R("home.stats.toReview"),koreanLabel:"오늘 복습",color:Ze.red,background:i.length>0?"var(--red-soft)":"var(--surface)"})]}),p.jsx("button",{className:"primary-btn mb24",onClick:()=>J.startDueReview(),children:p.jsxs("span",{children:[p.jsx("span",{children:i.length>0?`${R("home.startReview")} (${i.length})`:R("home.startCards")}),p.jsx("span",{className:"btn-kor",children:"시작하기"})]})}),p.jsxs("div",{className:"card mission-card",children:[p.jsxs("div",{className:"mission-head",children:[p.jsx("span",{className:"mission-icon",children:p.jsx(ae,{name:"bullseye"})}),p.jsxs("div",{className:"mission-body",children:[p.jsxs("p",{className:"mission-title",children:[R("home.mission"),": ",R("mission."+x.kind+".title")]}),p.jsx("p",{className:"mission-desc",children:R("mission."+x.kind+".desc")})]}),p.jsx("span",{className:"mission-reward",children:R("home.mission.reward",{count:x.rewardXp})})]}),p.jsx("div",{className:"progress-track",children:p.jsx("div",{className:"progress-fill",style:{width:`${Math.round(D1(x,{totalWords:n,totalReviews:0,correctReviews:0,masteredWords:0,todayReviews:C,streak:S})*100)}%`}})})]}),p.jsx("h2",{className:"section-title",children:R("home.sectionQuick")}),p.jsxs("div",{className:"quick-actions",children:[p.jsxs("button",{className:"quick-action card-flat",onClick:()=>J.openAddWord(),children:[p.jsx("span",{className:"quick-icon",style:{background:`${Ze.red}1a`,color:Ze.red},children:p.jsx(ae,{name:"plus",size:20})}),p.jsx("span",{className:"quick-title",children:R("home.quick.add")}),p.jsx("span",{className:"quick-subtitle",children:"단어 추가"})]}),p.jsxs("button",{className:"quick-action card-flat",onClick:()=>J.openScanOcr(),children:[p.jsx("span",{className:"quick-icon",style:{background:"var(--charcoal-soft)",color:"var(--charcoal)"},children:p.jsx(ae,{name:"camera",size:20})}),p.jsx("span",{className:"quick-title",children:R("home.quick.scan")}),p.jsx("span",{className:"quick-subtitle",children:"텍스트 스캔 (OCR)"})]}),p.jsxs("button",{className:"quick-action card-flat",onClick:()=>J.openSongImport(),children:[p.jsx("span",{className:"quick-icon",style:{background:`${Ze.accentPink}1a`,color:Ze.accentPink},children:p.jsx(ae,{name:"headphones",size:20})}),p.jsx("span",{className:"quick-title",children:R("home.quick.song")}),p.jsx("span",{className:"quick-subtitle",children:"노래로 배우기"})]}),p.jsxs("button",{className:"quick-action card-flat",onClick:()=>J.startDifficultReview(),children:[p.jsx("span",{className:"quick-icon",style:{background:`${Ze.warning}1a`,color:Ze.warning},children:p.jsx(ae,{name:"exclamation-triangle",size:20})}),p.jsx("span",{className:"quick-title",children:R("home.quick.difficult",{count:J.difficultWords().length})}),p.jsx("span",{className:"quick-subtitle",children:"어려운 단어 복습"})]}),p.jsxs("button",{className:"quick-action card-flat",onClick:()=>J.openGuide(),children:[p.jsx("span",{className:"quick-icon",style:{background:`${Ze.blue}1a`,color:Ze.blue},children:p.jsx(ae,{name:"question-circle",size:20})}),p.jsx("span",{className:"quick-title",children:R("home.quick.help")}),p.jsx("span",{className:"quick-subtitle",children:"사용 방법"})]}),p.jsxs("button",{className:"quick-action card-flat",onClick:()=>J.openPacks(),children:[p.jsx("span",{className:"quick-icon",style:{background:`${Ze.success}1a`,color:Ze.success},children:p.jsx(ae,{name:"box-seam",size:20})}),p.jsx("span",{className:"quick-title",children:R("home.quick.packs")}),p.jsx("span",{className:"quick-subtitle",children:"단어 팩"})]})]}),n===0&&p.jsxs("div",{className:"empty-hint",children:[p.jsx("span",{style:{fontSize:24},children:p.jsx(ae,{name:"lightbulb",size:24})}),p.jsxs("span",{children:[R("home.emptyTitle")," ",R("home.emptyText")]})]})]})}const By={1:Ze.red,2:Ze.warning,3:Ze.success,4:Ze.blue};function ek({onRate:n}){return p.jsx("div",{className:"rating-row",children:Im.map(i=>p.jsxs("button",{className:"rating-btn",style:{background:`${By[i.value]}18`,color:By[i.value]},onClick:()=>n(i.value),children:[p.jsx("span",{children:i.label}),p.jsx("span",{className:"rating-kor",children:i.koreanLabel})]},i.value))})}function nk(n){const i=Math.max(1,Math.round((n.nextReviewAt-Date.now())/864e5));return R("cards.nextReview",{count:i})}function Uy({title:n,desc:i,difficultCount:s}){return p.jsxs("div",{children:[p.jsx(Ci,{title:R("tab.cards"),subtitle:"복습"}),p.jsxs("div",{className:"cards-done center",children:[p.jsx("div",{className:"empty-state-icon",children:p.jsx(ae,{name:"stars",size:48,style:{color:"var(--warning)"}})}),p.jsx("h2",{children:n}),p.jsx("p",{className:"muted",children:i}),p.jsx("button",{className:"primary-btn mt20",onClick:()=>J.startReviewAll(),children:p.jsxs("span",{children:[R("cards.reviewAll"),p.jsx("span",{className:"btn-kor",children:"모든 단어 복습"})]})}),s>0&&p.jsx("button",{className:"secondary-btn mt12",onClick:()=>J.startDifficultReview(),children:p.jsxs("span",{children:[R("cards.difficult",{count:s}),p.jsx("span",{className:"btn-kor",children:"어려운 단어"})]})})]})]})}function ak(){sa();const n=J.getCardsQueue(),i=J.getCardIndex(),s=J.getIsCardFlipped(),o=J.difficultWords().length;if(n.length===0)return p.jsx(Uy,{title:R("cards.nothing"),desc:R("cards.nothingDesc"),difficultCount:o});if(i>=n.length)return p.jsx(Uy,{title:R("cards.doneTitle"),desc:R("cards.doneDesc"),difficultCount:o});const d=n[i];return p.jsxs("div",{children:[p.jsx(Ci,{title:R("tab.cards"),subtitle:"복습"}),p.jsxs("div",{className:"cards-toolbar-row",children:[p.jsx("span",{className:"muted",style:{fontSize:13},children:R("cards.progress",{i:i+1,total:n.length})}),p.jsxs("div",{className:"cards-toolbar-actions",children:[p.jsx("button",{className:"icon-btn",onClick:()=>J.openEditWord(d),"aria-label":R("cards.editAria"),children:p.jsx(ae,{name:"pencil"})}),p.jsx("button",{className:"icon-btn",onClick:()=>J.speakText(d.korean),"aria-label":R("cards.speakAria"),children:p.jsx(ae,{name:"volume-up"})})]})]}),p.jsx("div",{className:"progress-track",children:p.jsx("div",{className:"progress-fill",style:{width:`${(i+1)/n.length*100}%`}})}),p.jsx("div",{className:"flip-card",onClick:()=>J.flipCard(),children:p.jsxs("div",{className:`flip-inner ${s?"flipped":""}`,children:[p.jsx("div",{className:"flip-face flip-front",children:p.jsxs("div",{className:"flashcard",children:[p.jsx("span",{className:"fc-korean",children:d.korean}),d.hanja&&p.jsx("span",{className:"fc-hanja",children:d.hanja}),J.getShowRomaja()&&p.jsx("span",{className:"fc-romaja",children:d.romaja}),p.jsx("button",{className:"speaker-btn mt16",onClick:f=>{f.stopPropagation(),J.speakText(d.korean)},children:p.jsx(ae,{name:"volume-up"})}),p.jsx("span",{className:"muted mt16 cards-tap-hint",children:R("cards.tapToFlip")})]})}),p.jsx("div",{className:"flip-face flip-back",children:p.jsxs("div",{className:"flashcard",children:[p.jsx("span",{className:"fc-translation",children:d.translation}),p.jsx("span",{className:"fc-korean fc-korean-sm",children:d.korean}),d.exampleSentence&&p.jsxs("div",{className:"fc-example",children:[p.jsx("div",{children:d.exampleSentence}),d.exampleTranslation&&p.jsx("div",{children:d.exampleTranslation})]}),p.jsxs("div",{className:"fc-stats",children:[p.jsx("span",{children:R("cards.reps",{count:d.repetitions})}),p.jsx("span",{children:R("cards.interval",{count:d.intervalDays})}),p.jsxs("span",{children:["EF: ",d.easeFactor.toFixed(2)," · ",nk(d)]})]})]})})]})}),s&&p.jsxs("div",{children:[p.jsx("p",{className:"muted center cards-evaluate-hint",children:R("cards.evaluate")}),p.jsx(ek,{onRate:f=>J.rateCard(f)})]})]})}function ik(){sa();const n=J.getQuizQuestion(),i=J.getSelectedOptionIndex(),s=J.getIsAnswerChecked(),o=J.getQuizScore(),d=J.getQuizTotalCount(),f=J.getQuizReward();return n?p.jsxs("div",{children:[p.jsx(Ci,{title:R("tab.listening"),subtitle:"듣기"}),p.jsxs("div",{className:"card quiz-card",style:{marginBottom:16},children:[p.jsx("button",{className:"speaker-btn speaker-btn-lg",onClick:()=>J.replayQuizAudio(),"aria-label":R("listen.tapToListen"),children:p.jsx(ae,{name:"volume-up",size:24})}),s?p.jsxs(p.Fragment,{children:[p.jsx("p",{className:"quiz-korean",children:n.prompt}),J.getShowRomaja()&&n.promptRomaja&&p.jsx("p",{className:"muted listen-romaja",children:n.promptRomaja})]}):p.jsx("p",{className:"muted listen-prompt-hint",children:R("listen.tapToListen")}),p.jsx("div",{className:"quiz-options",children:n.options.map((g,w)=>{let x="quiz-option";return s?w===n.correctOptionIndex?x+=" correct":w===i&&(x+=" wrong"):w===i&&(x+=" selected"),p.jsx("button",{className:x,onClick:()=>J.selectQuizOption(w),children:g.text},w)})}),s?p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"reveal-row",children:[p.jsxs("span",{children:[R("listen.answer"),":"," ",i===n.correctOptionIndex?R("listen.correct"):R("listen.wrong")]}),p.jsxs("span",{children:[R("listen.revealWord"),": ",n.options[n.correctOptionIndex].text]})]}),p.jsx("button",{className:"primary-btn mt20",onClick:()=>J.loadNextQuizQuestion("listen"),children:p.jsxs("span",{children:[R("common.next"),p.jsx("span",{className:"btn-kor",children:"다음"})]})})]}):p.jsx("button",{className:"primary-btn mt20",onClick:()=>J.checkQuizAnswer(),disabled:i===null,style:i===null?{opacity:.5}:{},children:p.jsxs("span",{children:[R("common.check"),p.jsx("span",{className:"btn-kor",children:"확인"})]})})]}),p.jsx("p",{className:"quiz-score center",children:R("listen.score",{score:o,total:d})}),f.rewardGifName&&p.jsx("div",{className:"reward-overlay",onClick:()=>J.dismissQuizReward(),children:p.jsxs("div",{className:"reward-box",children:[p.jsx("img",{src:Dh(f.rewardGifName),alt:"BTS reward"}),p.jsx("h3",{children:R("reward.title")}),p.jsx("p",{children:R("reward.body")}),p.jsx("button",{className:"primary-btn",onClick:()=>J.dismissQuizReward(),children:R("reward.continue")})]})})]}):p.jsxs("div",{children:[p.jsx(Ci,{title:R("tab.listening"),subtitle:"듣기"}),p.jsxs("div",{className:"cards-done center",children:[p.jsx("div",{className:"empty-state-icon",children:p.jsx(ae,{name:"headphones",size:48,style:{color:"var(--red)"}})}),p.jsx("h2",{children:R("listen.needWords")}),p.jsx("p",{className:"muted",children:R("listen.needWordsDesc")})]})]})}function rk(){sa();const n=J.getQuizQuestion(),i=J.getSelectedOptionIndex(),s=J.getIsAnswerChecked(),o=J.getQuizScore(),d=J.getQuizTotalCount(),f=J.getQuizReward();return!n||n.kind!=="reverse"?p.jsxs("div",{children:[p.jsx(Ci,{title:R("tab.quiz"),subtitle:"퀴즈"}),p.jsxs("div",{className:"cards-done center",children:[p.jsx("div",{className:"empty-state-icon",children:p.jsx(ae,{name:"patch-question",size:48,style:{color:"var(--red)"}})}),p.jsx("h2",{children:R("quiz.title")}),p.jsx("p",{className:"muted",children:R("quiz.desc")}),p.jsx("button",{className:"primary-btn mt20",onClick:()=>J.loadNextQuizQuestion("reverse"),children:p.jsxs("span",{children:[R("quiz.start"),p.jsx("span",{className:"btn-kor",children:"시작"})]})})]})]}):p.jsxs("div",{children:[p.jsx(Ci,{title:R("tab.quiz"),subtitle:"퀴즈"}),p.jsxs("div",{className:"card quiz-card",style:{marginBottom:16},children:[p.jsx("p",{className:"quiz-korean quiz-korean-lg",children:n.prompt}),p.jsx("div",{className:"quiz-options",children:n.options.map((g,w)=>{let x="quiz-option";return s?w===n.correctOptionIndex?x+=" correct":w===i&&(x+=" wrong"):w===i&&(x+=" selected"),p.jsxs("button",{className:x,onClick:()=>J.selectQuizOption(w),children:[g.text,g.romaja&&J.getShowRomaja()&&p.jsx("span",{className:"quiz-option-romaja",children:g.romaja})]},w)})}),s?p.jsxs(p.Fragment,{children:[p.jsxs("div",{className:"reveal-row",children:[p.jsx("span",{children:i===n.correctOptionIndex?R("listen.correct"):R("listen.wrong")}),p.jsxs("span",{children:[R("listen.answer"),": ",n.options[n.correctOptionIndex].text]})]}),p.jsx("button",{className:"primary-btn mt20",onClick:()=>J.loadNextQuizQuestion("reverse"),children:p.jsxs("span",{children:[R("common.next"),p.jsx("span",{className:"btn-kor",children:"다음"})]})})]}):p.jsx("button",{className:"primary-btn mt20",onClick:()=>J.checkQuizAnswer(),disabled:i===null,style:i===null?{opacity:.5}:{},children:p.jsxs("span",{children:[R("common.check"),p.jsx("span",{className:"btn-kor",children:"확인"})]})})]}),p.jsx("p",{className:"quiz-score center",children:R("listen.score",{score:o,total:d})}),f.rewardGifName&&p.jsx("div",{className:"reward-overlay",onClick:()=>J.dismissQuizReward(),children:p.jsxs("div",{className:"reward-box",children:[p.jsx("img",{src:Dh(f.rewardGifName),alt:"BTS reward"}),p.jsx("h3",{children:R("reward.title")}),p.jsx("p",{children:R("reward.body")}),p.jsx("button",{className:"primary-btn",onClick:()=>J.dismissQuizReward(),children:R("reward.continue")})]})})]})}function sk(n){if(n.repetitions>=3)return{text:R("word.status.mastered"),cls:"badge-mastered"};if(n.nextReviewAt<=Date.now())return{text:R("word.status.due"),cls:"badge-due"};const i=Math.max(1,Math.round((n.nextReviewAt-Date.now())/(1440*60*1e3)));return{text:R("word.status.in",{count:i}),cls:""}}function ok({word:n,selectable:i=!1,selected:s=!1}){const o=J.categoryFor(n.categoryId),d=J.sourceFor(n.sourceId),f=sk(n),g=n.difficulty;return p.jsxs("div",{className:`word-item card-flat ${i?"word-selectable":""} ${s?"word-selected":""}`,onClick:()=>i?J.toggleSelectWord(n.id):J.openWordDetail(n),children:[i&&p.jsx("span",{className:`word-check ${s?"word-check-on":""}`,children:s?p.jsx(ae,{name:"check",size:14}):null}),p.jsxs("div",{className:"word-item-head",children:[p.jsxs("div",{className:"word-item-main",children:[p.jsx("span",{className:"word-korean",children:n.korean}),n.hanja&&p.jsx("span",{className:"word-hanja",children:n.hanja}),J.getShowRomaja()&&p.jsx("span",{className:"word-romaja",children:n.romaja})]}),p.jsx("button",{className:"icon-btn",onClick:w=>{w.stopPropagation(),J.speakText(n.korean)},children:p.jsx(ae,{name:"volume-up"})})]}),p.jsx("div",{className:"word-translation",children:n.translation}),n.exampleSentence&&p.jsx("div",{className:"word-example",children:n.exampleSentence}),p.jsxs("div",{className:"word-meta",children:[o&&p.jsxs("span",{className:"badge badge-cat",style:{background:Vl(o.colorHex)},children:[o.emoji," ",o.name]}),p.jsxs("span",{className:"badge",children:[R("word.level")," ",g]}),p.jsx("span",{className:`badge ${f.cls}`,children:f.text}),d&&p.jsx("span",{className:"badge",children:Rh(d)}),n.tags.map(w=>p.jsxs("span",{className:"badge",children:["#",w]},w))]})]})}function F1({tags:n,onChange:i}){sa();const[s,o]=Bt.useState(""),[d,f]=Bt.useState(!1),g=Bt.useRef(null),w=J.getCategories().map(E=>E.name);Bt.useEffect(()=>{function E(j){g.current&&!g.current.contains(j.target)&&f(!1)}return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[]);const x=new Set(n.map(E=>E.toLowerCase())),C=w.filter(E=>!x.has(E.toLowerCase())&&E.toLowerCase().includes(s.toLowerCase()));function z(E){const j=E.trim();!j||x.has(j.toLowerCase())||(i([...n,j]),o(""),f(!1))}function S(E){i(n.filter(j=>j!==E))}return p.jsxs("div",{ref:g,style:{position:"relative",width:"100%",marginTop:4},children:[n.length>0&&p.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:n.map(E=>p.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,background:"var(--red)",color:"#fff",borderRadius:8,padding:"2px 8px",fontSize:11,fontWeight:600},children:[E,p.jsx("button",{onClick:()=>S(E),style:{background:"none",color:"#fff",fontSize:13,padding:0,lineHeight:1},children:p.jsx(ae,{name:"x",size:12})})]},E))}),p.jsx("input",{className:"form-input",value:s,onChange:E=>{o(E.target.value),f(!0)},onFocus:()=>f(!0),onKeyDown:E=>{E.key==="Enter"&&(E.preventDefault(),C.length>0?z(C[0]):s.trim()&&z(s))},placeholder:n.length>0?"ещё тег...":"теги через запятую",style:{width:"100%",fontSize:12,color:"var(--text-secondary)"}}),d&&s.trim()&&p.jsxs("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#fff",border:"1px solid var(--border)",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,.1)",maxHeight:120,overflowY:"auto",zIndex:10},children:[C.map(E=>p.jsx("button",{onClick:()=>z(E),style:{display:"block",width:"100%",textAlign:"left",padding:"8px 12px",fontSize:13,background:"none",borderBottom:"1px solid var(--border)"},children:E},E)),s.trim()&&!x.has(s.trim().toLowerCase())&&p.jsxs("button",{onClick:()=>z(s),style:{display:"block",width:"100%",textAlign:"left",padding:"8px 12px",fontSize:13,fontWeight:600,background:"none"},children:["+ «",s.trim(),"»"]})]})]})}function lk(){sa();const n=J.filteredWords(),i=J.getCategories(),s=J.getSelectedCategoryId(),o=J.getSearchQuery(),d=J.isSelectionActive(),f=J.getSelectedIds(),[g,w]=Bt.useState(!1),[x,C]=Bt.useState([]);return p.jsxs("div",{children:[p.jsx(Ci,{title:R("tab.dictionary"),subtitle:"단어장"}),p.jsxs("div",{className:"search-row",children:[p.jsx("input",{className:"search-input",placeholder:R("dict.search"),value:o,onChange:z=>J.setSearchQuery(z.target.value)}),p.jsx("button",{className:"icon-btn",onClick:()=>J.toggleSelectionMode(),"aria-label":R(d?"dict.selectOnAria":"dict.selectOffAria"),style:d?{background:"var(--red)",color:"#fff",border:"none"}:{},children:d?p.jsx(ae,{name:"x-lg"}):p.jsx(ae,{name:"check-square"})})]}),d&&p.jsx("p",{className:"selection-hint",children:R("dict.selectionHint",{count:f.size})}),p.jsxs("div",{className:"chips-row",children:[p.jsx("button",{className:`chip ${s===null?"active":""}`,onClick:()=>J.setSelectedCategory(null),children:R("dict.all")}),i.map(z=>p.jsxs("button",{className:`chip ${s===z.id?"active":""}`,onClick:()=>J.setSelectedCategory(s===z.id?null:z.id),children:[z.emoji," ",z.name]},z.id)),p.jsx("button",{className:"chip",onClick:()=>J.openCreateCategory(),children:R("dict.addCategory")})]}),n.length===0?p.jsxs("div",{className:"empty-hint",children:[p.jsx("span",{className:"empty-state-icon",children:p.jsx(ae,{name:"inbox",size:24,style:{color:"var(--text-tertiary)"}})}),p.jsx("span",{children:R(o||s?"dict.emptyFound":"dict.emptyEmpty")})]}):p.jsx("div",{className:"word-list",children:n.map(z=>p.jsx(ok,{word:z,selectable:d,selected:f.has(z.id)},z.id))}),p.jsx("button",{className:"fab",onClick:()=>J.openAddWord(),"aria-label":R("dict.addWordAria"),children:p.jsx(ae,{name:"plus",size:24})}),d&&p.jsxs("div",{className:"bulk-toolbar",children:[p.jsx("span",{className:"bulk-count",children:f.size}),p.jsx("button",{className:"secondary-btn",onClick:()=>{C([]),w(!0)},children:R("dict.tags")}),p.jsx("button",{className:"danger-btn",onClick:()=>J.deleteSelection(),children:R("dict.delete")}),p.jsx("button",{className:"secondary-btn",onClick:()=>J.clearSelection(),children:R("common.cancel")})]}),g&&p.jsx("div",{className:"overlay",onClick:()=>w(!1),children:p.jsxs("div",{className:"sheet",onClick:z=>z.stopPropagation(),children:[p.jsxs("div",{className:"sheet-header",children:[p.jsx("h3",{className:"sheet-title",children:R("dict.tagsDialog",{count:f.size})}),p.jsx("button",{className:"sheet-close",onClick:()=>w(!1),children:p.jsx(ae,{name:"x-lg"})})]}),p.jsx(F1,{tags:x,onChange:C}),p.jsx("p",{className:"field-hint",children:R("dict.tagsHint")}),p.jsx("button",{className:"primary-btn",onClick:()=>{J.assignTagsToSelected(x),w(!1)},children:R("dict.assign")})]})})]})}function uh({title:n,children:i,list:s=!1}){return p.jsxs("section",{className:"settings-group",children:[p.jsx("h2",{className:"settings-group-title",children:n}),p.jsx("div",{className:`card settings-group-card ${s?"settings-group-card--list":"settings-group-card--padded"}`,children:i})]})}function ck(){sa();const[n,i]=Bt.useState(0),[s,o]=Bt.useState(0);Bt.useEffect(()=>{let D=!0;return J.streakCount().then(Q=>D&&i(Q)),J.todayReviewsCount().then(Q=>D&&o(Q)),()=>{D=!1}},[J.getSnapshot()]);const d=J.totalWordsCount(),f=J.masteredWordsCount(),g=J.avgDaysToMaster(),w=J.dueWords().length,x=J.masteredByMonth(),C=J.masteredByCategory(),z=J.getWords(),E=J.getCategories().map(D=>({category:D,count:z.filter(Q=>Q.categoryId===D.id).length})),j=z.filter(D=>D.categoryId===null).length;return p.jsxs("div",{children:[p.jsx(Ci,{title:R("tab.progress"),subtitle:"진행"}),p.jsxs("div",{className:"proverb-card",children:[p.jsx("p",{className:"proverb-kor",children:"티끌 모아 태산"}),p.jsx("p",{className:"proverb-rus",children:R("progress.proverb")})]}),p.jsx(uh,{title:R("progress.stat"),children:p.jsxs("div",{className:"progress-grid",children:[p.jsx(Ns,{value:`${d}`,label:R("home.stats.words"),koreanLabel:"총 단어",color:Ze.charcoal,className:"circular-stat-charcoal"}),p.jsx(Ns,{value:`${f}`,label:R("progress.mastered"),koreanLabel:"완료",color:Ze.success}),p.jsx(Ns,{value:`${g??"—"}`,label:R("progress.daysToMaster"),koreanLabel:"완료까지",color:Ze.accentPink}),p.jsx(Ns,{value:`${w}`,label:R("progress.dueToday"),koreanLabel:"오늘",color:Ze.red}),p.jsx(Ns,{value:`${s}`,label:R("progress.today"),koreanLabel:"복습",color:Ze.blue}),p.jsx(Ns,{value:`${n}`,label:R("progress.streakDays"),koreanLabel:"연속",color:Ze.warning})]})}),p.jsx(uh,{title:R("progress.byMonth"),children:p.jsx("div",{className:"month-bars",children:x.map(D=>{const Q=Math.max(1,...x.map(nt=>nt.count));return p.jsxs("div",{className:"month-bar-col",children:[p.jsx("span",{className:"month-bar-num",children:D.count>0?D.count:""}),p.jsx("div",{className:"month-bar",style:{height:`${Math.round(D.count/Q*100)}%`}}),p.jsx("span",{className:"month-bar-label",children:D.month})]},D.month)})})}),C.length>0&&p.jsx(uh,{title:R("progress.byCat"),list:!0,children:p.jsx("div",{className:"cat-breakdown",children:C.map(({categoryName:D,count:Q})=>p.jsxs("div",{className:"cat-row card-flat",children:[p.jsx("span",{className:"cat-emoji cat-emoji-success",children:p.jsx(ae,{name:"check-lg",size:16,style:{color:"var(--success-strong)"}})}),p.jsx("span",{children:D}),p.jsx("span",{className:"cat-count",children:Q})]},D))})}),p.jsx(uh,{title:R("progress.byCatDict"),list:!0,children:p.jsxs("div",{className:"cat-breakdown",children:[E.map(({category:D,count:Q})=>p.jsxs("div",{className:"cat-row card-flat",children:[p.jsx("span",{className:"cat-emoji",style:{backgroundColor:`${Vl(D.colorHex)}20`},children:D.emoji}),p.jsx("span",{children:D.name}),p.jsx("span",{className:"cat-count",children:Q})]},D.id)),j>0&&p.jsxs("div",{className:"cat-row card-flat",children:[p.jsx("span",{className:"cat-emoji",children:p.jsx(ae,{name:"file-text",size:16,style:{color:"var(--text-secondary)"}})}),p.jsx("span",{children:R("progress.noCategory")}),p.jsx("span",{className:"cat-count",children:j})]})]})})]})}function Tm({title:n,children:i,list:s=!1}){return p.jsxs("section",{className:"settings-group",children:[p.jsx("h2",{className:"settings-group-title",children:n}),p.jsx("div",{className:`card settings-group-card ${s?"settings-group-card--list":"settings-group-card--padded"}`,children:i})]})}function uk(){sa();const n=J.getXp(),i=N1(),s=Mh(n,i),o=J.getAchievements(),d=o.filter(w=>w.earnedAt).length,f=Math.round(j1(n,i)*100),g=O1(n,i);return p.jsxs("div",{children:[p.jsx(Ci,{title:R("tab.gallery"),subtitle:"컬렉션"}),p.jsxs(Tm,{title:R("gallery.title"),children:[p.jsxs("div",{className:"xp-row",children:[p.jsxs("span",{className:"xp-score",children:[p.jsx(ae,{name:"heart",size:14,style:{color:"var(--accent-pink)"}})," ",n," ",p.jsx("span",{className:"muted",children:"XP"})]}),p.jsx("span",{className:"xp-label",children:g?`${R("gallery.toNext",{name:g.stageName,count:Math.max(0,g.tierThreshold-n)})}`:R("gallery.allOpen")})]}),p.jsx("div",{className:"progress-track gallery-xp-track",children:p.jsx("div",{className:"progress-fill",style:{width:`${f}%`,background:"var(--red)"}})})]}),p.jsx(Tm,{title:R("gallery.sectionCards"),children:p.jsx("div",{className:"gallery-grid",children:i.map((w,x)=>{const C=x<=s;return p.jsxs("div",{className:`photo-card ${C?"":"photo-locked"}`,children:[p.jsxs("div",{className:"photo-card-img-wrap",children:[p.jsx("img",{className:"photo-card-img",src:ou(w.imageName),alt:w.stageName}),!C&&p.jsx("span",{className:"photo-lock",children:p.jsx(ae,{name:"lock"})})]}),p.jsx("p",{className:"photo-name",children:w.stageName}),p.jsx("p",{className:"photo-role",children:w.role||R("gallery.member")}),p.jsx("p",{className:"photo-status",children:C?R("gallery.unlocked"):`${w.tierThreshold} XP`})]},w.id)})})}),p.jsx(Tm,{title:R("gallery.sectionAchievements"),list:!0,children:p.jsx("div",{className:"achievement-list",children:o.map(w=>p.jsxs("div",{className:`achievement-row card-flat ${w.earnedAt?"":"achievement-locked"}`,children:[p.jsx("span",{className:"achievement-icon",children:w.earnedAt?p.jsx(ae,{name:w.icon}):p.jsx(ae,{name:"lock"})}),p.jsxs("div",{className:"achievement-body",children:[p.jsx("p",{className:"achievement-title",children:R("achievement."+w.id+".title")}),p.jsx("p",{className:"achievement-desc",children:R("achievement."+w.id+".desc")})]}),w.earnedAt&&p.jsx("span",{className:"achievement-check",children:p.jsx(ae,{name:"check-lg"})})]},w.id))})}),d===0&&p.jsxs("div",{className:"empty-hint",children:[p.jsx("span",{className:"empty-state-icon",children:p.jsx(ae,{name:"gift",size:24})}),p.jsx("span",{children:R("gallery.empty")})]})]})}const dk=["gemini-3.8-flash","gemini-3.7-flash","gemini-3.6-flash","gemini-3.5-flash","gemini-flash-latest"],fg=["gemini-2.5-flash","gemini-2.0-flash","gemini-3.5-flash","gemini-3.6-flash","gemini-3.7-flash","gemini-3.8-flash","gemini-flash-latest"],hk=12e4,fk=45e3;class Ao extends Error{constructor(i){super(i),this.name="GeminiOcrError"}}const Gm=()=>new Ao("Укажите ключ Gemini API, чтобы распознавать текст с фото."),Fm=()=>new Ao("Gemini вернул неожиданный ответ."),pk=n=>new Ao(n??"Не удалось связаться с Gemini. Проверьте интернет или вставьте текст песни вручную."),Hy=()=>new Ao("Не удалось подготовить изображение для распознавания."),Y1="gemini_api_key";function Hl(){try{return(localStorage.getItem(Y1)??"").trim()}catch{return""}}function mk(n){try{localStorage.setItem(Y1,n.trim())}catch{}}const gk=/[\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+/g;function wh(n){const i=n.match(gk)??[],s=new Set,o=[];for(const d of i){const f=d.trim();f&&!s.has(f)&&(s.add(f),o.push(f))}return o}async function vk(n,i){const s=i.trim();let o=Gm();if(s)try{const d=await wk(n,s),f=pg(d);if(f.length>0)return f}catch(d){o=d instanceof Error?d:Fm()}throw s?o:Gm()}async function bk(n,i){const s=Array.from(new Set(n.map(C=>C.trim()).filter(C=>C.length>0)));if(s.length===0)return{};const o=i.trim();if(!o)throw Gm();const f=`Translate these Korean words and phrases into natural Russian.
Return ONLY a JSON array, no markdown, no commentary:
[{"korean":"커피","translation":"кофе"}]
If a word has several meanings, pick the most common everyday one.

Words:
${s.map((C,z)=>`${z+1}. ${C}`).join(`
`)}`,g=await Lh(o,f,null,null),w=pg(g),x={};for(const C of w)C.translation&&(x[C.korean]=C.translation);return x}function pg(n){const i=yk(n);if(i&&i.length>0)return i;const s=[],o=new Set,d=["	"," | ","|"," — "," – "," - "," – ",":","："];for(const f of n.split(/\r?\n/)){const g=f.trim();if(!g)continue;let w="",x="";for(const C of d){const z=g.indexOf(C);if(z>=0){w=g.slice(0,z).trim(),x=g.slice(z+C.length).trim();break}}if(!w){const z=wh(g)[0];if(!z)continue;w=z,x=g.replace(z,"").trim().replace(/^[\s.,;:!?()–—-]+|[\s.,;:!?()–—-]+$/g,"")}!w||!K_(w)||o.has(w)||(wh(x).join("")===x&&(x=""),o.add(w),s.push({korean:w,translation:x}))}if(s.length===0)for(const f of wh(n))s.push({korean:f,translation:""});return s}function yk(n){const i=n.replace(/```json/g,"").replace(/```/g,"").trim(),s=i.indexOf("["),o=i.lastIndexOf("]");if(s<0||o<s)return null;const d=i.slice(s,o+1);let f;try{f=JSON.parse(d)}catch{return null}if(!Array.isArray(f))return null;const g=[],w=new Set;for(const x of f){if(!x||typeof x!="object")continue;const C=x,z=(typeof C.korean=="string"?C.korean:typeof C.word=="string"?C.word:"").trim(),S=(typeof C.translation=="string"?C.translation:typeof C.russian=="string"?C.russian:"").trim();!z||w.has(z)||(w.add(z),g.push({korean:z,translation:S}))}return g}async function wk(n,i){const s=await Tk(n);return Lh(i,`This is a photo of a Korean notebook, textbook, sign or vocabulary list.
Extract every Korean Hangul word or short phrase.
If a Russian or English translation is written next to that word on the image, copy that translation exactly.
If no translation is visible for a word, leave translation as an empty string. Do not invent it.
Return ONLY a JSON array, no markdown, no commentary:
[{"korean":"커피","translation":"кофе"}]`,s,null)}async function xk(n,i,s){return Lh(n,i,null,s,{audioFirst:!0,thinking:!1,models:fg})}async function _k(n,i,s,o){return Lh(n,i,null,null,{audioFirst:!0,thinking:!1,models:fg,fileRef:{uri:s,mimeType:o}})}async function Lh(n,i,s,o,d={}){const f=d.models??(o?fg:dk);let g=Fm();for(const w of f)try{return await Sk(w,n,i,s,o,d)}catch(x){g=x instanceof Error?x:Fm()}throw g}async function Sk(n,i,s,o,d,f={}){const g=`https://generativelanguage.googleapis.com/v1beta/models/${n}:generateContent`,w=!!d||!!f.fileRef;let x=null;o?x={inline_data:{mime_type:"image/jpeg",data:o}}:f.fileRef?x={file_data:{mime_type:f.fileRef.mimeType,file_uri:f.fileRef.uri}}:d&&(x={inline_data:{mime_type:d.mimeType,data:d.data}});const C=[];x&&f.audioFirst?C.push(x,{text:s}):(C.push({text:s}),x&&C.push(x));const z=f.thinking??!w,S={contents:[{parts:C}]};z&&(S.generationConfig={thinkingConfig:{thinkingLevel:"low"}});const E=new AbortController,D=setTimeout(()=>E.abort(),w?hk:fk),Q=w?"":T1();let nt;try{Q?nt=await fetch(Q,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:n,key:i,body:S}),signal:E.signal}):nt=await fetch(g,{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":i},body:JSON.stringify(S),signal:E.signal})}catch(Ct){clearTimeout(D);const rt=Ct instanceof Error&&Ct.name==="AbortError";throw pk(rt?"Распознавание аудио заняло слишком много времени. Попробуйте короче фрагмент или вставьте текст вручную.":void 0)}if(clearTimeout(D),!nt.ok)throw new Ao(Ak(await nt.text(),nt.status,n));const Et=await nt.json().catch(()=>null),ut=kk(Et);if(ut)return ut;throw new Ao(Ck(Et))}function kk(n){var o;if(!n||typeof n!="object")return null;const s=n.candidates;if(!(s!=null&&s.length))return null;for(const d of s){const f=(o=d.content)==null?void 0:o.parts;if(!(f!=null&&f.length))continue;const g=f.filter(w=>!w.thought).map(w=>w.text??"").join(`
`).trim();if(g)return g}return null}function Ck(n){var d,f,g,w,x,C;if(!n||typeof n!="object")return"Gemini вернул пустой ответ. Попробуйте вставить текст песни вручную.";const i=n,s=(d=i.promptFeedback)==null?void 0:d.blockReason;if(s){const z=(f=i.promptFeedback)==null?void 0:f.blockReasonMessage;return z?`Запрос заблокирован (${s}): ${z}`:`Запрос заблокирован: ${s}. Вставьте текст песни вручную.`}const o=(w=(g=i.candidates)==null?void 0:g[0])==null?void 0:w.finishReason;if(o&&o!=="STOP"){const z=(C=(x=i.candidates)==null?void 0:x[0])==null?void 0:C.finishMessage;return z?`Gemini не смог обработать аудио (${o}): ${z}`:`Gemini не смог обработать аудио (${o}). Вставьте текст песни вручную.`}return"Gemini вернул ответ без текста. Попробуйте другой файл или вставьте текст вручную."}function Ak(n,i,s){var f,g;let o="",d="";try{const w=JSON.parse(n);o=((f=w.error)==null?void 0:f.message)??"",d=((g=w.error)==null?void 0:g.status)??""}catch{}return i===404||d==="NOT_FOUND"?`Модель ${s} недоступна. Пробую другую или локальное распознавание.`:i===400||i===401||i===403||d==="UNAUTHENTICATED"||d==="PERMISSION_DENIED"?o?`Ключ Gemini отклонён: ${o}`:"Ключ Gemini отклонён. Проверьте ключ в AI Studio (обычно начинается с AIza).":i===429?"Превышен лимит Gemini. Подождите немного или используйте локальное распознавание.":o||`Ошибка Gemini (${i})`}async function Tk(n){const i=await createImageBitmap(n).catch(()=>null);if(!i)throw Hy();const s=document.createElement("canvas"),o=1600,d=Math.max(i.width,i.height),f=d>o?o/d:1;s.width=Math.max(1,Math.round(i.width*f)),s.height=Math.max(1,Math.round(i.height*f));const g=s.getContext("2d");if(!g)throw Hy();return g.drawImage(i,0,0,s.width,s.height),i.close(),s.toDataURL("image/jpeg",.8).replace(/^data:image\/jpeg;base64,/,"")}function Ek({title:n,children:i}){return p.jsxs("section",{className:"settings-group",children:[n?p.jsx("h2",{className:"settings-group-title",children:n}):null,p.jsx("div",{className:"card settings-group-card",children:i})]})}function $l({label:n,value:i,onClick:s}){return p.jsxs("button",{type:"button",className:"settings-link-row",onClick:s,children:[p.jsx("span",{className:"settings-link-label",children:n}),i?p.jsx("span",{className:"settings-link-value",children:i}):null,p.jsx(ae,{name:"chevron-right",className:"settings-link-chevron",size:14})]})}function zs({title:n,children:i}){return p.jsxs("section",{className:"settings-section",children:[p.jsx("h2",{className:"section-title",children:n}),i]})}function zk({label:n,children:i,inline:s}){return p.jsxs("div",{className:`settings-row${s?" settings-row--inline":""}`,children:[n?p.jsx("span",{className:"settings-row-label",children:n}):null,i]})}function Ll({title:n,onBack:i,children:s}){return p.jsxs(p.Fragment,{children:[p.jsxs("button",{type:"button",className:"settings-back",onClick:i,children:[p.jsx(ae,{name:"chevron-left",size:18}),R("settings.back")]}),p.jsx("h1",{className:"settings-subtitle",children:n}),s]})}function Nk(){sa();const[n,i]=Bt.useState("main"),[s,o]=Bt.useState(Hl()),[d,f]=Bt.useState(A1()),[g,w]=Bt.useState(T1()),[x,C]=Bt.useState(jh()),z=rg(x),S=J.getLocale(),E=J.getColorTheme();function j(){const nt=Math.max(1,Math.floor(Number(d)||C1));Q_(nt),f(nt)}function D(){mk(s)}function Q(){return R(E==="light"?"settings.colorThemeLight":E==="dark"?"settings.colorThemeDark":"settings.colorThemeSystem")}return n==="language"?p.jsx("div",{className:"settings-page",children:p.jsx(Ll,{title:R("settings.lang"),onBack:()=>i("main"),children:p.jsxs("div",{className:"card",children:[p.jsxs("div",{className:"flow-layout",children:[p.jsx("button",{className:`select-chip ${S==="ru"?"active":""}`,onClick:()=>J.setLocale("ru"),children:"Русский"}),p.jsx("button",{className:`select-chip ${S==="en"?"active":""}`,onClick:()=>J.setLocale("en"),children:"English"})]}),p.jsx("p",{className:"field-hint",children:R("settings.langHint")})]})})}):n==="appearance"?p.jsx("div",{className:"settings-page",children:p.jsxs(Ll,{title:R("settings.group.appearance"),onBack:()=>i("main"),children:[p.jsx(zs,{title:R("settings.colorTheme"),children:p.jsxs("div",{className:"card",children:[p.jsx("div",{className:"flow-layout",children:[["system","gear",R("settings.colorThemeSystem")],["light","sun",R("settings.colorThemeLight")],["dark","moon-stars",R("settings.colorThemeDark")]].map(([nt,Et,ut])=>p.jsxs("button",{className:`select-chip ${E===nt?"active":""}`,onClick:()=>J.setColorTheme(nt),children:[p.jsx(ae,{name:Et,size:14})," ",ut]},nt))}),p.jsx("p",{className:"field-hint",children:R("settings.colorThemeHint")})]})}),p.jsx(zs,{title:R("settings.display"),children:p.jsx("div",{className:"card",children:p.jsxs(zk,{inline:!0,children:[p.jsxs("span",{className:"settings-row-label",children:[p.jsx("strong",{children:R("settings.showRomaja")}),p.jsx("span",{className:"setting-toggle-subtitle",children:R("settings.showRomajaHint")})]}),p.jsx("input",{className:"setting-toggle",type:"checkbox",checked:J.getShowRomaja(),onChange:nt=>J.setShowRomaja(nt.target.checked)})]})})})]})}):n==="learning"?p.jsx("div",{className:"settings-page",children:p.jsxs(Ll,{title:R("settings.group.learning"),onBack:()=>i("main"),children:[p.jsx(zs,{title:R("settings.listenSection"),children:p.jsxs("div",{className:"card",children:[p.jsx("label",{className:"form-label",children:R("settings.listenThreshold")}),p.jsx("input",{className:"form-input",value:d,onChange:nt=>f(Number(nt.target.value.replace(/\D/g,""))||0),onBlur:j,type:"number",min:1,inputMode:"numeric"}),p.jsx("p",{className:"field-hint",children:R("settings.listenThresholdHint",{first:d,second:d*2,third:d*3})})]})}),p.jsx(zs,{title:R("settings.voices"),children:p.jsxs("div",{className:"card",children:[p.jsx("label",{className:"form-label",children:R("settings.voicesCards")}),p.jsx("select",{className:"form-input",value:J.getCardVoice().id,onChange:nt=>J.setCardVoice(nt.target.value),children:kh.map(nt=>p.jsxs("option",{value:nt.id,children:[nt.name," · ",nt.koreanLabel]},nt.id))}),p.jsx("p",{className:"field-hint",children:R("settings.voicesCardsHint")}),p.jsx("div",{className:"settings-divider"}),p.jsx("label",{className:"form-label",children:R("settings.voicesListen")}),p.jsx("select",{className:"form-input",value:J.getListenVoice().id,onChange:nt=>J.setListenVoice(nt.target.value),children:kh.map(nt=>p.jsxs("option",{value:nt.id,children:[nt.name," · ",nt.koreanLabel]},nt.id))}),p.jsx("p",{className:"field-hint",children:R("settings.voicesListenHint")})]})})]})}):n==="content"?p.jsx("div",{className:"settings-page",children:p.jsxs(Ll,{title:R("settings.group.content"),onBack:()=>i("main"),children:[p.jsxs(zs,{title:R("settings.theme"),children:[p.jsx("div",{className:"theme-row",children:Um.map(nt=>{const Et=nt.id===x;return p.jsxs("button",{type:"button",className:`theme-card ${Et?"active":""}`,onClick:()=>{J.selectTheme(nt.id),C(nt.id)},children:[p.jsx("span",{className:"theme-emoji",children:nt.emoji}),p.jsx("span",{className:"theme-name",children:nt.name}),Et?p.jsx("span",{className:"theme-check",children:p.jsx(ae,{name:"check-lg"})}):null]},nt.id)})}),p.jsx("p",{className:"field-hint",children:R("settings.themeHint")})]}),p.jsx(zs,{title:R("settings.themePreview"),children:p.jsx("div",{className:"card",children:p.jsxs("div",{className:"theme-preview",children:[p.jsx("img",{className:"greeting-image",src:ou(z.greetings[0].imageName),alt:z.greetings[0].artistName}),p.jsxs("div",{children:[p.jsx("p",{className:"greeting-text-rus",children:z.greetings[0].russian}),p.jsx("p",{className:"greeting-text-kor",children:z.greetings[0].korean}),p.jsx("p",{className:"greeting-artist",children:z.greetings[0].artistName})]})]})})})]})}):n==="scanning"?p.jsx("div",{className:"settings-page",children:p.jsxs(Ll,{title:R("settings.group.integrations"),onBack:()=>i("main"),children:[p.jsx(zs,{title:R("settings.ocr"),children:p.jsxs("div",{className:"card",children:[p.jsx("label",{className:"form-label",children:R("settings.apiKey")}),p.jsx("input",{className:"form-input",value:s,onChange:nt=>o(nt.target.value),onBlur:D,placeholder:"AIza...",type:"password",autoComplete:"off"}),p.jsxs("p",{className:"field-hint",children:[R("settings.apiKeyHint")," Получите в"," ",p.jsx("a",{href:"https://aistudio.google.com/apikey",target:"_blank",rel:"noreferrer",children:"AI Studio"})]})]})}),p.jsx(zs,{title:R("settings.proxy"),children:p.jsxs("div",{className:"card",children:[p.jsx("label",{className:"form-label",children:R("settings.proxyLabel")}),p.jsx("input",{className:"form-input",value:g,onChange:nt=>w(nt.target.value),onBlur:()=>Z_(g),placeholder:"https://korean-srs-gemini-proxy.ваш-субдомен.workers.dev",autoCapitalize:"off",autoCorrect:"off"}),p.jsx("p",{className:"field-hint",children:R("settings.proxyHint")})]})})]})}):n==="help"?p.jsx("div",{className:"settings-page",children:p.jsx(Ll,{title:R("settings.guide"),onBack:()=>i("main"),children:p.jsxs("div",{className:"card",children:[p.jsx("button",{className:"secondary-btn",onClick:()=>J.openGuide(),children:p.jsxs("span",{children:[R("settings.guideHow"),p.jsx("span",{className:"btn-kor",children:"사용 설명"})]})}),p.jsx("p",{className:"field-hint",children:R("settings.guideHint")})]})})}):p.jsxs("div",{className:"settings-page",children:[p.jsx(Ci,{title:R("settings.title"),subtitle:"설정"}),p.jsxs(Ek,{children:[p.jsx($l,{label:R("settings.lang"),value:S==="ru"?"Русский":"English",onClick:()=>i("language")}),p.jsx($l,{label:R("settings.group.appearance"),value:Q(),onClick:()=>i("appearance")}),p.jsx($l,{label:R("settings.voices"),value:J.getCardVoice().name,onClick:()=>i("learning")}),p.jsx($l,{label:R("settings.theme"),value:z.name,onClick:()=>i("content")}),p.jsx($l,{label:R("settings.ocr"),value:s?"••••":"—",onClick:()=>i("scanning")}),p.jsx($l,{label:R("settings.guideHow"),onClick:()=>i("help")})]})]})}const Ok=["Начальный","Средний","Продвинутый"];function jk(){sa();const n=J.getEditingWord(),i=J.getCategories(),s=b2(J.getSources()),[o,d]=Bt.useState(J.getPrefilledKorean()),[f,g]=Bt.useState(""),[w,x]=Bt.useState(""),[C,z]=Bt.useState(""),[S,E]=Bt.useState(""),[j,D]=Bt.useState(""),[Q,nt]=Bt.useState(J.getPrefilledCategoryId()),[Et,ut]=Bt.useState(null),[Ct,rt]=Bt.useState("Начальный"),[dt,xt]=Bt.useState("");Bt.useEffect(()=>{const ot=J.getEditingWord();ot&&(d(ot.korean),g(ot.hanja??""),x(ot.romaja),z(ot.translation),E(ot.exampleSentence??""),D(ot.exampleTranslation??""),nt(ot.categoryId),ut(ot.sourceId),rt(ot.difficulty))},[]);function wt(ot){d(ot);const gt=H_(ot);gt&&!C&&z(gt.translation),w||x(ql(ot))}function vt(){if(!o.trim()){xt(R("add.errKorean"));return}if(!C.trim()){xt(R("add.errTranslation"));return}J.saveWord({korean:o,hanja:f,romaja:w,translation:C,exampleSentence:S,exampleTranslation:j,categoryId:Q,sourceId:Et,difficulty:Ct})}return p.jsx("div",{className:"overlay",onClick:()=>J.closeAddWord(),children:p.jsxs("div",{className:"sheet",onClick:ot=>ot.stopPropagation(),children:[p.jsxs("div",{className:"sheet-header",children:[p.jsx("h3",{className:"sheet-title",children:R(n?"add.titleEdit":"add.titleNew")}),p.jsx("button",{className:"sheet-close",onClick:()=>J.closeAddWord(),children:p.jsx(ae,{name:"x-lg"})})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:R("add.korean")}),p.jsx("input",{className:"form-input",value:o,onChange:ot=>wt(ot.target.value),placeholder:"커피"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:R("add.translation")}),p.jsx("input",{className:"form-input",value:C,onChange:ot=>z(ot.target.value),placeholder:"кофе"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:R("add.romaja")}),p.jsx("input",{className:"form-input",value:w,onChange:ot=>x(ot.target.value),placeholder:"keopi"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:R("add.hanja")}),p.jsx("input",{className:"form-input",value:f,onChange:ot=>g(ot.target.value),placeholder:"咖啡"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:R("add.exampleSentence")}),p.jsx("input",{className:"form-input",value:S,onChange:ot=>E(ot.target.value),placeholder:"저는 커피를 마셔요"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:R("add.exampleTranslation")}),p.jsx("input",{className:"form-input",value:j,onChange:ot=>D(ot.target.value),placeholder:"Я пью кофе"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:R("add.category")}),p.jsx("div",{className:"flow-layout",children:i.map(ot=>p.jsxs("button",{className:`select-chip ${Q===ot.id?"active":""}`,onClick:()=>nt(Q===ot.id?null:ot.id),children:[p.jsx("span",{style:{color:Vl(ot.colorHex)},children:ot.emoji})," ",ot.name]},ot.id))})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:R("add.source")}),p.jsxs("div",{className:"flow-layout",children:[p.jsx("button",{className:`select-chip ${Et===null?"active":""}`,onClick:()=>ut(null),children:R("add.noSource")}),s.map(ot=>p.jsx("button",{className:`select-chip ${Et===ot.id?"active":""}`,onClick:()=>ut(ot.id),children:Rh(ot)},ot.id))]})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:R("add.level")}),p.jsx("div",{className:"flow-layout",children:Ok.map(ot=>p.jsx("button",{className:`select-chip ${Ct===ot?"active":""}`,onClick:()=>rt(ot),children:ot},ot))})]}),dt&&p.jsx("div",{className:"scan-error",children:dt}),p.jsx("button",{className:"save-btn",onClick:vt,children:R(n?"common.save":"common.add")})]})})}function Dk(){sa();const n=J.getSelectedWordForDetail();if(!n)return null;const i=J.categoryFor(n.categoryId),s=J.sourceFor(n.sourceId),o=n.repetitions>=3?R("detail.mastered"):n.nextReviewAt<=Date.now()?R("detail.toReview"):R("detail.inProgress");return p.jsx("div",{className:"overlay",onClick:()=>J.closeWordDetail(),children:p.jsxs("div",{className:"sheet",onClick:d=>d.stopPropagation(),children:[p.jsxs("div",{className:"sheet-header",children:[p.jsx("h3",{className:"sheet-title",children:R("detail.title")}),p.jsx("button",{className:"sheet-close",onClick:()=>J.closeWordDetail(),children:p.jsx(ae,{name:"x-lg"})})]}),p.jsxs("div",{className:"word-meta",style:{marginBottom:16},children:[i&&p.jsxs("span",{className:"badge badge-cat",style:{background:Vl(i.colorHex)},children:[i.emoji," ",i.name]}),p.jsxs("span",{className:"badge",children:[R("word.level")," ",n.difficulty]}),s&&p.jsx("span",{className:"badge",children:Rh(s)}),n.tags.map(d=>p.jsxs("span",{className:"badge",children:["#",d]},d))]}),p.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:12},children:[p.jsx("span",{style:{fontSize:34,fontWeight:700,color:"var(--charcoal)"},children:n.korean}),n.hanja&&p.jsx("span",{style:{fontSize:18,color:"var(--text-secondary)"},children:n.hanja}),p.jsx("button",{className:"icon-btn",onClick:()=>J.speakText(n.korean),children:p.jsx(ae,{name:"volume-up"})})]}),J.getShowRomaja()&&p.jsx("p",{style:{fontSize:16,color:"var(--text-secondary)",margin:0},children:n.romaja}),p.jsx("div",{className:"card-flat mt16",style:{padding:16},children:p.jsx("p",{style:{fontSize:18,fontWeight:600,margin:0},children:n.translation})}),n.exampleSentence&&p.jsxs("div",{className:"card-flat mt12",style:{padding:16},children:[p.jsx("p",{style:{fontSize:15,margin:0},children:n.exampleSentence}),n.exampleTranslation&&p.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",margin:"6px 0 0"},children:n.exampleTranslation})]}),p.jsxs("div",{className:"card-flat mt12",style:{padding:16,fontSize:13,color:"var(--text-secondary)"},children:[p.jsxs("div",{children:[R("detail.status"),": ",o]}),p.jsxs("div",{children:[R("detail.reps"),": ",n.repetitions]}),p.jsx("div",{children:R("cards.interval",{count:n.intervalDays})}),p.jsxs("div",{children:[R("detail.nextReview"),": ",new Date(n.nextReviewAt).toLocaleDateString("ru-RU")]})]}),p.jsx("button",{className:"primary-btn mt20",onClick:()=>J.openEditWord(n),children:p.jsx("span",{children:R("common.edit")})}),p.jsx("button",{className:"danger-btn",onClick:()=>{confirm(R("detail.deleteConfirm"))&&J.deleteWord(n)},children:R("common.delete")})]})})}const Rk=["📌","🍱","✈️","💼","📚","💬","😊","🌿","🎯","🎁","🏠","⭐"],Mk=["#E53935","#FB8C00","#00897B","#1E88E5","#8E24AA","#43A047","#F06292","#558B2F","#5E35B1","#00ACC1"];function $k(){sa();const[n,i]=Bt.useState(""),[s,o]=Bt.useState("📌"),[d,f]=Bt.useState("#E53935"),[g,w]=Bt.useState("");function x(){if(!n.trim()){w("Введите название категории.");return}J.createCategory(n,s,d)}return p.jsx("div",{className:"overlay",onClick:()=>J.closeCreateCategory(),children:p.jsxs("div",{className:"sheet",onClick:C=>C.stopPropagation(),children:[p.jsxs("div",{className:"sheet-header",children:[p.jsx("h3",{className:"sheet-title",children:"Новая категория"}),p.jsx("button",{className:"sheet-close",onClick:()=>J.closeCreateCategory(),children:"✕"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:"Название"}),p.jsx("input",{className:"form-input",value:n,onChange:C=>i(C.target.value),placeholder:"Хобби"})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:"Эмодзи"}),p.jsx("div",{className:"flow-layout",children:Rk.map(C=>p.jsx("button",{className:`select-chip ${s===C?"active":""}`,onClick:()=>o(C),style:{fontSize:18},children:C},C))})]}),p.jsxs("div",{className:"form-group",children:[p.jsx("label",{className:"form-label",children:"Цвет"}),p.jsx("div",{className:"flow-layout",children:Mk.map(C=>p.jsx("button",{className:`select-chip ${d===C?"active":""}`,onClick:()=>f(C),style:{width:34,height:34,padding:0,background:C},"aria-label":C},C))})]}),g&&p.jsx("div",{className:"scan-error",children:g}),p.jsx("button",{className:"save-btn",onClick:x,children:"Создать"})]})})}function P1({value:n,onChange:i,onParse:s,parsing:o}){return p.jsxs("div",{className:"mb12",children:[p.jsx("label",{className:"form-label",children:"Вставьте корейский текст"}),p.jsx("textarea",{className:"textarea",value:n,onChange:d=>i(d.target.value),placeholder:`커피 - кофе
차 - чай`}),p.jsx("button",{type:"button",className:"primary-btn mt12",onClick:s,disabled:o,children:"Распознать"})]})}function X1({drafts:n,selected:i,readyCount:s,onToggle:o,onUpdateField:d,onUpdateTags:f,onSave:g,saveLabel:w,knownInDictionaryCount:x,renderLeading:C,readOnly:z,rowMeta:S}){return p.jsxs(p.Fragment,{children:[p.jsxs("p",{className:"section-title mt12",children:["Распознанные слова (",s," готовых",x!=null&&x>0?` · ${x} уже в словаре`:"",")"]}),p.jsx("div",{className:"mb12",children:n.map((E,j)=>{const D=(z==null?void 0:z(j))??!1;return p.jsxs("div",{className:"scanned-word-row",style:{flexWrap:"wrap"},children:[C?C(j):p.jsx("button",{type:"button",className:`scan-check ${i[j]?"active":""}`,onClick:()=>o(j),style:i[j]?{background:"var(--red)",color:"#fff",border:"none"}:{},children:i[j]?"✓":"○"}),p.jsx("input",{className:"form-input",value:E.korean,onChange:Q=>d(j,"korean",Q.target.value),placeholder:"корейское",readOnly:D,style:{width:96,flex:"none",fontWeight:700,fontSize:16}}),p.jsx("input",{className:"form-input",value:E.translation,onChange:Q=>d(j,"translation",Q.target.value),placeholder:"перевод",readOnly:D}),!D&&p.jsx(F1,{tags:E.tags,onChange:Q=>f(j,Q)}),S==null?void 0:S(j)]},j)})}),p.jsx("button",{type:"button",className:"save-btn",onClick:g,disabled:s===0,style:s===0?{opacity:.5}:{},children:w})]})}function Lk(){sa();const n=Bt.useRef(null),i=Bt.useRef(null),[s,o]=Bt.useState(""),[d,f]=Bt.useState(!1),[g,w]=Bt.useState(""),[x,C]=Bt.useState(""),[z,S]=Bt.useState(!1),[E,j]=Bt.useState([]),[D,Q]=Bt.useState([]);function nt(vt){var Qt;const ot=(Qt=vt.target.files)==null?void 0:Qt[0];if(!ot)return;const gt=URL.createObjectURL(ot);o(gt),Et(ot)}async function Et(vt){const ot=Hl();if(!ot){w("Укажите ключ Gemini API в настройках.");return}f(!0),w(""),j([]),Q([]);try{const gt=await vk(vt,ot);gt.length>0?(j(gt.map(Qt=>({korean:Qt.korean,translation:Qt.translation,tags:[]}))),Q(gt.map(()=>!0))):w("Не удалось распознать корейский текст на изображении.")}catch(gt){w(gt instanceof Error?gt.message:"Неизвестная ошибка.")}finally{f(!1)}}function ut(){const vt=pg(x);vt.length!==0&&(j(vt.map(ot=>({korean:ot.korean,translation:ot.translation,tags:[]}))),Q(vt.map(()=>!0)),S(!0))}function Ct(vt,ot,gt){j(Qt=>Qt.map((oe,de)=>de===vt?{...oe,[ot]:gt}:oe))}function rt(vt,ot){j(gt=>gt.map((Qt,oe)=>oe===vt?{...Qt,tags:ot}:Qt))}function dt(vt){Q(ot=>ot.map((gt,Qt)=>Qt===vt?!gt:gt))}function xt(){const vt=E.filter((ot,gt)=>D[gt]);vt.length!==0&&J.importWords(vt)}const wt=E.filter((vt,ot)=>D[ot]&&vt.korean.trim()&&vt.translation.trim()).length;return p.jsx("div",{className:"overlay",onClick:()=>J.closeScanOcr(),children:p.jsxs("div",{className:"sheet",onClick:vt=>vt.stopPropagation(),children:[p.jsxs("div",{className:"sheet-header",children:[p.jsx("h3",{className:"sheet-title",children:"Сканирование (OCR)"}),p.jsx("button",{className:"sheet-close",onClick:()=>J.closeScanOcr(),children:p.jsx(ae,{name:"x-lg"})})]}),!Hl()&&p.jsxs("div",{className:"scan-error",children:["Ключ Gemini API не настроен."," ",p.jsx("button",{style:{textDecoration:"underline",color:"inherit",background:"none"},onClick:()=>J.openSettings(),children:"Настроить в Настройках"})]}),p.jsxs("div",{className:"scan-tools",children:[p.jsxs("button",{className:"scan-tool",onClick:()=>{var vt;return(vt=n.current)==null?void 0:vt.click()},disabled:d,children:[p.jsx("span",{className:"scan-tool-icon",children:p.jsx(ae,{name:"camera",size:22})}),p.jsx("span",{children:"Камера"})]}),p.jsxs("button",{className:"scan-tool",onClick:()=>{var vt;return(vt=i.current)==null?void 0:vt.click()},disabled:d,children:[p.jsx("span",{className:"scan-tool-icon",children:p.jsx(ae,{name:"images",size:22})}),p.jsx("span",{children:"Галерея"})]}),p.jsx("input",{ref:n,type:"file",accept:"image/*",capture:"environment",onChange:nt,style:{display:"none"}}),p.jsx("input",{ref:i,type:"file",accept:"image/*",onChange:nt,style:{display:"none"}}),p.jsxs("button",{className:"scan-tool",onClick:()=>{S(!0),j([]),Q([])},children:[p.jsx("span",{className:"scan-tool-icon",children:p.jsx(ae,{name:"pencil-square",size:22})}),p.jsx("span",{children:"Текст"})]})]}),s&&p.jsx("img",{className:"scan-preview",src:s,alt:"Preview"}),d&&p.jsxs("div",{className:"scan-status",children:[p.jsx("img",{src:Dh(Ai().statusGifName),alt:"BTS",style:{width:"100%",maxHeight:320,objectFit:"cover",borderRadius:14,marginBottom:10}}),"Распознавание…"]}),g&&p.jsx("div",{className:"scan-error",children:g}),z&&p.jsx(P1,{value:x,onChange:C,onParse:ut}),E.length>0&&p.jsx(X1,{drafts:E,selected:D,readyCount:wt,onToggle:dt,onUpdateField:Ct,onUpdateTags:rt,onSave:xt,saveLabel:`Сохранить (${wt})`})]})})}function eu({num:n,title:i,steps:s}){return p.jsxs("div",{className:"guide-section",children:[p.jsxs("h3",{className:"guide-title",children:[n,". ",i]}),p.jsx("ol",{className:"guide-list",children:s.map(o=>p.jsxs("li",{children:[p.jsx("strong",{children:o.title}),o.text&&p.jsx("p",{children:o.text})]},o.title))})]})}function Bk(){const n=Ai();return p.jsx("div",{className:"overlay",onClick:()=>J.closeGuide(),children:p.jsxs("div",{className:"sheet",onClick:i=>i.stopPropagation(),children:[p.jsxs("div",{className:"sheet-header",children:[p.jsx("h3",{className:"sheet-title",children:R("guide.title")}),p.jsx("button",{className:"sheet-close",onClick:()=>J.closeGuide(),children:p.jsx(ae,{name:"x-lg"})})]}),p.jsx("p",{className:"muted",style:{fontSize:13,marginTop:0},children:R("guide.intro")}),p.jsx(eu,{num:"1",title:R("guide.install.title"),steps:[{title:R("guide.install.iphone.title"),text:R("guide.install.iphone.text")},{title:R("guide.install.android.title"),text:R("guide.install.android.text")}]}),p.jsx(eu,{num:"2",title:R("guide.ocr.title"),steps:[{title:R("guide.ocr.key.title"),text:R("guide.ocr.key.text")},{title:R("guide.ocr.paste.title"),text:R("guide.ocr.paste.text")},{title:R("guide.ocr.scan.title"),text:R("guide.ocr.scan.text")}]}),p.jsx(eu,{num:"3",title:R("guide.fail.title"),steps:[{title:R("guide.fail.key.title"),text:R("guide.fail.key.text")},{title:R("guide.fail.proxy.title"),text:R("guide.fail.proxy.text",{proxy:Bm})},{title:R("guide.fail.camera.title"),text:R("guide.fail.camera.text")}]}),p.jsx(eu,{num:"4",title:R("guide.practice.title"),steps:[{title:R("guide.practice.cards.title"),text:R("guide.practice.cards.text")},{title:R("guide.practice.listen.title"),text:R("guide.practice.listen.text")},{title:R("guide.practice.dict.title"),text:R("guide.practice.dict.text")}]}),p.jsx(eu,{num:"5",title:R("guide.faq.title"),steps:[{title:R("guide.faq.data.title"),text:R("guide.faq.data.text")},{title:R("guide.faq.theme.title"),text:R("guide.faq.theme.text",{theme:n.name})},{title:R("guide.faq.gif.title"),text:R("guide.faq.gif.text")}]}),p.jsx("button",{className:"primary-btn mt20",onClick:()=>J.closeGuide(),children:p.jsxs("span",{children:[R("guide.ok"),p.jsx("span",{className:"btn-kor",children:"알겠어요"})]})})]})})}function Uk(){sa();const n=J.getPacks(),i=J.getWords(),[s,o]=Bt.useState(""),d=Bt.useMemo(()=>new Set(i.map(g=>g.korean)),[i]),f=Bt.useMemo(()=>{const g=s.trim().toLowerCase();return g?n.filter(w=>[w.title,w.subtitle,...w.wordDefs.map(C=>C.korean),...w.wordDefs.map(C=>C.translation)].join(" ").toLowerCase().includes(g)):n},[n,s]);return p.jsx("div",{className:"overlay",onClick:()=>J.closePacks(),children:p.jsxs("div",{className:"sheet",onClick:g=>g.stopPropagation(),children:[p.jsxs("div",{className:"sheet-header",children:[p.jsx("h3",{className:"sheet-title",children:R("packs.title")}),p.jsx("button",{className:"sheet-close",onClick:()=>J.closePacks(),children:p.jsx(ae,{name:"x-lg"})})]}),p.jsx("input",{className:"form-input",value:s,onChange:g=>o(g.target.value),placeholder:R("packs.search"),style:{marginBottom:12}}),p.jsxs("div",{className:"packs-list",children:[f.map(g=>{const w=g.wordDefs.filter(C=>!d.has(C.korean)).length,x=J.sourceFor(g.sourceId);return p.jsx("div",{className:"pack-card",children:p.jsxs("div",{className:"pack-card-head",children:[p.jsx("span",{className:"pack-emoji",style:{background:`${Vl(g.colorHex)}1f`,color:Vl(g.colorHex)},children:g.emoji}),p.jsxs("div",{className:"pack-body",children:[p.jsx("p",{className:"pack-title",children:g.title}),p.jsx("p",{className:"pack-subtitle",children:g.subtitle}),p.jsxs("p",{className:"pack-meta",children:[R("packs.words",{count:g.wordDefs.length})," · ",g.difficulty,x?` · ${Rh(x)}`:""]})]}),w===0?p.jsx("span",{className:"pack-added",children:R("packs.added")}):p.jsxs("button",{className:"pack-add",onClick:()=>J.addPack(g.id),children:["+",w]})]})},g.id)}),f.length===0&&p.jsxs("div",{className:"empty-hint",children:[p.jsx("span",{style:{fontSize:24},children:p.jsx(ae,{name:"box-seam",size:24,style:{color:"var(--text-tertiary)"}})}),p.jsx("span",{children:R("packs.empty")})]})]}),p.jsx("p",{style:{fontSize:11,color:"var(--text-secondary)",marginTop:12},children:R("packs.footer")})]})})}const Hk=10*1024*1024,Ik=2*1024*1024,Q1={mp3:"audio/mpeg",mpeg:"audio/mpeg",mpga:"audio/mpeg",mp4:"audio/mp4",m4a:"audio/m4a",wav:"audio/wav",webm:"audio/webm",ogg:"audio/ogg",aac:"audio/aac",flac:"audio/flac"};class Ca extends Ao{constructor(i){super(i),this.name="GeminiAudioError"}}function qk(n){return new Promise(i=>setTimeout(i,n))}function Vk(n){var s;if(n.type&&n.type.startsWith("audio/"))return n.type;const i=((s=n.name.split(".").pop())==null?void 0:s.toLowerCase())??"";return Q1[i]??"audio/mpeg"}function mg(n){const i=Vk(n);return i==="audio/mp3"||i==="audio/x-mpeg"||i==="audio/mpga"?"audio/mpeg":i}function Kk(n){var d;if(n.size>Hk)throw new Ca("Файл слишком большой (макс. 10 МБ). Сожмите аудио или вставьте текст вручную.");const i=((d=n.name.split(".").pop())==null?void 0:d.toLowerCase())??"",s=n.type.startsWith("audio/"),o=i in Q1;if(!s&&!o)throw new Ca("Поддерживаются аудиофайлы: mp3, m4a, wav, webm, ogg.")}function Iy(n,i){var s;try{const o=JSON.parse(n);if((s=o.error)!=null&&s.message)return o.error.message}catch{}return i===403||i===401?"Ключ Gemini отклонён при загрузке аудио. Проверьте ключ в настройках.":`Не удалось загрузить аудио в Gemini (${i}). Вставьте текст песни вручную.`}async function Gk(n,i){const s=mg(n),d=await fetch("https://generativelanguage.googleapis.com/upload/v1beta/files",{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":i,"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":String(n.size),"X-Goog-Upload-Header-Content-Type":s},body:JSON.stringify({file:{display_name:n.name||"audio.mp3"}})});if(!d.ok)throw new Ca(Iy(await d.text(),d.status));const f=d.headers.get("X-Goog-Upload-URL")??d.headers.get("x-goog-upload-url");if(!f)throw new Ca("Gemini не вернул URL для загрузки аудио.");const g=await fetch(f,{method:"POST",headers:{"Content-Length":String(n.size),"X-Goog-Upload-Offset":"0","X-Goog-Upload-Command":"upload, finalize"},body:n});if(!g.ok)throw new Ca(Iy(await g.text(),g.status));const x=(await g.json()).file;if(!(x!=null&&x.name)||!x.uri)throw new Ca("Gemini не вернул ссылку на загруженный файл.");return Fk({...x,mimeType:x.mimeType??s},i)}async function Fk(n,i){if(n.state==="ACTIVE")return n;const s=`https://generativelanguage.googleapis.com/v1beta/${n.name}`;for(let o=0;o<30;o+=1){const d=await fetch(s,{headers:{"x-goog-api-key":i}});if(!d.ok)throw new Ca("Не удалось дождаться обработки аудио на сервере Gemini.");const f=await d.json();if(f.state==="ACTIVE")return f;if(f.state==="FAILED")throw new Ca("Gemini не смог обработать аудиофайл. Вставьте текст вручную.");await qk(2e3)}throw new Ca("Таймаут обработки аудио на сервере Gemini. Попробуйте короче фрагмент или вставьте текст вручную.")}async function Yk(n){const i=mg(n),s=await new Promise((o,d)=>{const f=new FileReader;f.onload=()=>{const g=typeof f.result=="string"?f.result:"",w=g.includes(",")?g.split(",")[1]??"":g;if(!w){d(new Ca("Не удалось прочитать аудиофайл."));return}o(w)},f.onerror=()=>d(new Ca("Не удалось прочитать аудиофайл.")),f.readAsDataURL(n)});return{mimeType:i,data:s}}const qy=`This is a Korean song audio clip.
Transcribe the sung or spoken Korean lyrics as accurately as possible.
Return ONLY the Hangul lyrics, line by line. No romanization, no translation, no commentary, no markdown.`;async function Pk(n,i){const s=i.trim();if(!s)throw new Ca("Укажите ключ Gemini API, чтобы распознать аудио.");Kk(n);let o="";try{const f=await Gk(n,s);o=await _k(s,qy,f.uri,f.mimeType??mg(n))}catch(f){if(n.size>Ik)throw f instanceof Error?f:new Ca("Не удалось распознать аудио. Вставьте текст вручную.");const g=await Yk(n);o=await xk(s,qy,g)}const d=o.trim();if(!d)throw new Ca("Не удалось распознать текст песни. Вставьте текст вручную.");return d}async function Z1(n,i){const s=wh(n);if(s.length===0)return[];const o=i.trim();if(!o)return s.map(f=>({korean:f,translation:""}));const d=await bk(s,o);return s.map(f=>({korean:f,translation:d[f]||""}))}async function Xk(n,i){const s=await Pk(n,i);return Z1(s,i)}function Qk(n){const i=new Set,s=[];for(const o of n){const d=o.korean.trim();!d||i.has(d)||(i.add(d),s.push({korean:d,translation:o.translation.trim(),tags:o.tags??[]}))}return s}function Zk(n,i,s){const o=new Map;for(const d of i)o.set(d.korean,d);return Qk(n).map(d=>{const f=o.get(d.korean);return f?s&&f.categoryId===s?{...d,status:"inSongCategory",existingWord:f}:{...d,status:"known",existingWord:f}:{...d,status:"new"}})}function Wk(){sa();const n=Bt.useRef(null),i=Bt.useRef(null),s=Bt.useRef([]),[o,d]=Bt.useState(""),[f,g]=Bt.useState(!1),[w,x]=Bt.useState(""),[C,z]=Bt.useState(!0),[S,E]=Bt.useState(!1),[j,D]=Bt.useState(""),[Q,nt]=Bt.useState(""),[Et,ut]=Bt.useState(""),[Ct,rt]=Bt.useState(!1),[dt,xt]=Bt.useState([]),[wt,vt]=Bt.useState([]);Bt.useEffect(()=>{var st;return z(typeof navigator<"u"&&!!((st=navigator.mediaDevices)!=null&&st.getUserMedia)&&typeof MediaRecorder<"u"),()=>{j&&URL.revokeObjectURL(j)}},[j]);function ot(){return o.trim()}function gt(st){const yt=ot();xt(st.map($=>({korean:$.korean,translation:$.translation,tags:yt?[yt]:[]}))),vt(st.map(()=>!0)),rt(!1)}async function Qt(st){const yt=Hl();if(!yt){x(R("song.noApiKey"));return}g(!0),x(""),xt([]),vt([]);try{const $=await Xk(st,yt);$.length>0?gt($):x(R("song.noWords"))}catch($){x($ instanceof Error?$.message:R("song.errorUnknown"))}finally{g(!1)}}function oe(st){const yt=st.type||"audio/webm",$=yt.includes("mp4")?"m4a":yt.includes("webm")?"webm":"wav";return new File([st],`recording.${$}`,{type:yt})}function de(){j&&URL.revokeObjectURL(j),D("")}function Ne(st){var $;const yt=($=st.target.files)==null?void 0:$[0];yt&&(de(),nt(yt.name),Qt(yt),st.target.value="")}async function ve(){x(""),xt([]),vt([]),nt("");try{const st=await navigator.mediaDevices.getUserMedia({audio:!0});s.current=[];const yt=new MediaRecorder(st);i.current=yt,yt.ondataavailable=$=>{$.data.size>0&&s.current.push($.data)},yt.onstop=()=>{st.getTracks().forEach(bt=>bt.stop());const $=new Blob(s.current,{type:yt.mimeType||"audio/webm"});j&&URL.revokeObjectURL(j),D(URL.createObjectURL($)),Qt(oe($))},yt.start(),E(!0)}catch{x(R("song.micDenied")),z(!1)}}function zt(){const st=i.current;st&&st.state!=="inactive"&&st.stop(),E(!1)}async function qt(){const st=Hl();if(!st){x(R("song.noApiKey"));return}g(!0),x("");try{const yt=await Z1(Et,st);if(yt.length===0)return;gt(yt)}catch(yt){x(yt instanceof Error?yt.message:R("song.errorUnknown"))}finally{g(!1)}}function Lt(st,yt,$){xt(bt=>bt.map((pt,lt)=>lt===st?{...pt,[yt]:$}:pt))}function ie(st,yt){xt($=>$.map((bt,pt)=>pt===st?{...bt,tags:yt}:bt))}function re(st){vt(yt=>yt.map(($,bt)=>bt===st?!$:$))}async function Gt(){if(!o.trim()){x(R("song.nameRequired"));return}const st=dt.filter((yt,$)=>wt[$]);st.length!==0&&await J.importSongWords(st,o.trim())}const Ee=dt.filter((st,yt)=>wt[yt]&&st.korean.trim()&&st.translation.trim()).length,va=Bt.useMemo(()=>{var yt;const st=o.trim().toLowerCase();return st?((yt=J.getCategories().find($=>$.name.toLowerCase()===st))==null?void 0:yt.id)??null:null},[o,J.getSnapshot()]),B=Bt.useMemo(()=>dt.length===0?0:Zk(dt,J.getWords(),va).filter(yt=>yt.status!=="new").length,[dt,va,J.getSnapshot()]);return p.jsx("div",{className:"overlay",onClick:()=>J.closeSongImport(),children:p.jsxs("div",{className:"sheet sheet-scroll",onClick:st=>st.stopPropagation(),children:[p.jsxs("div",{className:"sheet-header",children:[p.jsx("h3",{className:"sheet-title",children:R("song.title")}),p.jsx("button",{className:"sheet-close",onClick:()=>J.closeSongImport(),children:p.jsx(ae,{name:"x-lg"})})]}),!Hl()&&p.jsxs("div",{className:"scan-error",children:[R("song.noApiKey")," ",p.jsx("button",{style:{textDecoration:"underline",color:"inherit",background:"none"},onClick:()=>J.openSettings(),children:R("song.openSettings")})]}),p.jsx("label",{className:"form-label",children:R("song.nameLabel")}),p.jsx("input",{className:"form-input",value:o,onChange:st=>{const yt=st.target.value;d(yt);const $=yt.trim();$&&xt(bt=>bt.map(pt=>({...pt,tags:[$]})))},placeholder:R("song.namePlaceholder"),style:{marginBottom:12}}),p.jsx("p",{style:{fontSize:11,color:"var(--text-secondary)",margin:"0 0 12px"},children:R("song.nameHint")}),p.jsxs("div",{className:"scan-tools",children:[p.jsxs("button",{className:"scan-tool",onClick:()=>{var st;return(st=n.current)==null?void 0:st.click()},disabled:f||S,children:[p.jsx("span",{className:"scan-tool-icon",children:p.jsx(ae,{name:"volume-up",size:22})}),p.jsx("span",{children:R("song.upload")})]}),C&&p.jsxs("button",{className:"scan-tool",onClick:()=>S?zt():ve(),disabled:f,children:[p.jsx("span",{className:"scan-tool-icon",children:p.jsx(ae,{name:S?"x-lg":"play",size:22})}),p.jsx("span",{children:R(S?"song.stopRecord":"song.record")})]}),p.jsxs("button",{className:"scan-tool",onClick:()=>{rt(!0),xt([]),vt([])},disabled:f||S,children:[p.jsx("span",{className:"scan-tool-icon",children:p.jsx(ae,{name:"pencil-square",size:22})}),p.jsx("span",{children:"Текст"})]}),p.jsx("input",{ref:n,type:"file",accept:"audio/mpeg,audio/mp3,audio/mp4,audio/x-m4a,audio/wav,audio/webm,audio/ogg,.mp3,.m4a,.wav",onChange:Ne,style:{display:"none"}})]}),Q&&p.jsx("p",{style:{fontSize:12,color:"var(--text-primary)",margin:"8px 0 0"},children:Q}),j&&p.jsx("audio",{controls:!0,src:j,style:{width:"100%",marginTop:8}}),f&&p.jsxs("div",{className:"scan-status",children:[p.jsx("img",{src:Dh(Ai().statusGifName),alt:"",style:{width:"100%",maxHeight:320,objectFit:"cover",borderRadius:14,marginBottom:10}}),"Распознавание…"]}),w&&p.jsx("div",{className:"scan-error",children:w}),Ct&&p.jsx(P1,{value:Et,onChange:ut,onParse:()=>void qt(),parsing:f}),dt.length>0&&p.jsx(X1,{drafts:dt,selected:wt,readyCount:Ee,onToggle:re,onUpdateField:Lt,onUpdateTags:ie,onSave:()=>void Gt(),saveLabel:R("song.save",{count:Ee}),knownInDictionaryCount:B})]})})}const Jk={home:()=>p.jsx(tk,{}),cards:()=>p.jsx(ak,{}),listening:()=>p.jsx(ik,{}),quiz:()=>p.jsx(rk,{}),dictionary:()=>p.jsx(lk,{}),progress:()=>p.jsx(ck,{}),gallery:()=>p.jsx(uk,{}),settings:()=>p.jsx(Nk,{})};function tC(){const[n,i]=Bt.useState(!1),[s,o]=Bt.useState({left:0,width:0}),d=Bt.useRef(null);sa();const f=Bt.useCallback(()=>{const x=d.current;if(!x)return;const C=wy.findIndex(S=>S.id===J.getTab()),z=x.querySelectorAll(".tab-item")[C];z&&o({left:z.offsetLeft,width:z.offsetWidth})},[]);if(Bt.useLayoutEffect(()=>{f();const x=d.current;if(!x)return;const C=new ResizeObserver(f);return C.observe(x),window.addEventListener("resize",f),()=>{C.disconnect(),window.removeEventListener("resize",f)}},[f,J.getSnapshot()]),Bt.useEffect(()=>(X2(),J.init().then(()=>i(!0)),()=>{J.closeScanOcr(),J.closeAddWord(),J.closeCreateCategory(),J.closeWordDetail(),J.closeGuide(),J.closeSongImport()}),[]),!n)return p.jsx("div",{className:"app",children:p.jsx("div",{className:"screen center muted",children:R("common.loading")})});const g=J.getTab(),w=J.dueWords().length;return p.jsxs("div",{className:"app",children:[p.jsx("div",{className:"screen screen-enter",children:Jk[g]()},g),J.getIsAddWordOpen()&&p.jsx(jk,{}),J.getIsScanOcrOpen()&&p.jsx(Lk,{}),J.getIsCreateCategoryOpen()&&p.jsx($k,{}),J.getIsGuideOpen()&&p.jsx(Bk,{}),J.getIsPacksOpen()&&p.jsx(Uk,{}),J.getIsSongImportOpen()&&p.jsx(Wk,{}),J.getSelectedWordForDetail()&&p.jsx(Dk,{}),p.jsxs("nav",{ref:x=>{d.current=x},className:"tab-bar",children:[p.jsx("span",{className:"tab-ind",style:{transform:`translateX(${s.left}px)`,width:s.width}}),wy.map(x=>p.jsxs("button",{type:"button",className:`tab-item ${g===x.id?"active":""}`,"aria-label":R("tab."+x.id),title:R("tab."+x.id),onClick:()=>J.selectTab(x.id),children:[p.jsx("span",{className:"tab-icon",children:p.jsx(ae,{name:x.icon})}),p.jsx("span",{className:"tab-label",children:R("tab."+x.id)}),p.jsx("span",{className:"tab-kor",children:x.korean}),x.id==="cards"&&w>0&&p.jsx("span",{className:"tab-badge",children:w})]},x.id))]})]})}const eC="modulepreload",nC=function(n){return"/korean-srs/"+n},Vy={},aC=function(i,s,o){let d=Promise.resolve();if(s&&s.length>0){let g=function(C){return Promise.all(C.map(z=>Promise.resolve(z).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};document.getElementsByTagName("link");const w=document.querySelector("meta[property=csp-nonce]"),x=(w==null?void 0:w.nonce)||(w==null?void 0:w.getAttribute("nonce"));d=g(s.map(C=>{if(C=nC(C),C in Vy)return;Vy[C]=!0;const z=C.endsWith(".css"),S=z?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${C}"]${S}`))return;const E=document.createElement("link");if(E.rel=z?"stylesheet":eC,z||(E.as="script"),E.crossOrigin="",E.href=C,x&&E.setAttribute("nonce",x),document.head.appendChild(E),z)return new Promise((j,D)=>{E.addEventListener("load",j),E.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${C}`)))})}))}function f(g){const w=new Event("vite:preloadError",{cancelable:!0});if(w.payload=g,window.dispatchEvent(w),!w.defaultPrevented)throw g}return d.then(g=>{for(const w of g||[])w.status==="rejected"&&f(w.reason);return i().catch(f)})};function iC(n={}){const{immediate:i=!1,onNeedRefresh:s,onOfflineReady:o,onRegistered:d,onRegisteredSW:f,onRegisterError:g}=n;let w,x;const C=async(S=!0)=>{await x};async function z(){if("serviceWorker"in navigator){if(w=await aC(async()=>{const{Workbox:S}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:S}},[]).then(({Workbox:S})=>new S("/korean-srs/sw.js",{scope:"/korean-srs/",type:"classic"})).catch(S=>{g==null||g(S)}),!w)return;w.addEventListener("activated",S=>{(S.isUpdate||S.isExternal)&&window.location.reload()}),w.addEventListener("installed",S=>{S.isUpdate||o==null||o()}),w.register({immediate:i}).then(S=>{f?f("/korean-srs/sw.js",S):d==null||d(S)}).catch(S=>{g==null||g(S)})}}return x=z(),C}var nu=new WeakMap,au=new WeakMap,iu=new WeakMap,Em=new WeakSet,dh=new WeakMap,Kr=class{constructor(n,i){this.handleFormData=s=>{const o=this.options.disabled(this.host),d=this.options.name(this.host),f=this.options.value(this.host),g=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!g&&typeof d=="string"&&d.length>0&&typeof f<"u"&&(Array.isArray(f)?f.forEach(w=>{s.formData.append(d,w.toString())}):s.formData.append(d,f.toString()))},this.handleFormSubmit=s=>{var o;const d=this.options.disabled(this.host),f=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=nu.get(this.form))==null||o.forEach(g=>{this.setUserInteracted(g,!0)})),this.form&&!this.form.noValidate&&!d&&!f(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),dh.set(this.host,[])},this.handleInteraction=s=>{const o=dh.get(this.host);o.includes(s.type)||o.push(s.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const o of s)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const o of s)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=n).addController(this),this.options=Vr({form:s=>{const o=s.form;if(o){const f=s.getRootNode().querySelector(`#${o}`);if(f)return f}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var o;return(o=s.disabled)!=null?o:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,o)=>s.value=o,assumeInteractionOn:["sl-input"]},i)}hostConnected(){const n=this.options.form(this.host);n&&this.attachForm(n),dh.set(this.host,[]),this.options.assumeInteractionOn.forEach(i=>{this.host.addEventListener(i,this.handleInteraction)})}hostDisconnected(){this.detachForm(),dh.delete(this.host),this.options.assumeInteractionOn.forEach(n=>{this.host.removeEventListener(n,this.handleInteraction)})}hostUpdated(){const n=this.options.form(this.host);n||this.detachForm(),n&&this.form!==n&&(this.detachForm(),this.attachForm(n)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(n){n?(this.form=n,nu.has(this.form)?nu.get(this.form).add(this.host):nu.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),au.has(this.form)||(au.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),iu.has(this.form)||(iu.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const n=nu.get(this.form);n&&(n.delete(this.host),n.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),au.has(this.form)&&(this.form.reportValidity=au.get(this.form),au.delete(this.form)),iu.has(this.form)&&(this.form.checkValidity=iu.get(this.form),iu.delete(this.form)),this.form=void 0))}setUserInteracted(n,i){i?Em.add(n):Em.delete(n),n.requestUpdate()}doAction(n,i){if(this.form){const s=document.createElement("button");s.type=n,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",i&&(s.name=i.name,s.value=i.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{i.hasAttribute(o)&&s.setAttribute(o,i.getAttribute(o))})),this.form.append(s),s.click(),s.remove()}}getForm(){var n;return(n=this.form)!=null?n:null}reset(n){this.doAction("reset",n)}submit(n){this.doAction("submit",n)}setValidity(n){const i=this.host,s=!!Em.has(i),o=!!i.required;i.toggleAttribute("data-required",o),i.toggleAttribute("data-optional",!o),i.toggleAttribute("data-invalid",!n),i.toggleAttribute("data-valid",n),i.toggleAttribute("data-user-invalid",!n&&s),i.toggleAttribute("data-user-valid",n&&s)}updateValidity(){const n=this.host;this.setValidity(n.validity.valid)}emitInvalidEvent(n){const i=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});n||i.preventDefault(),this.host.dispatchEvent(i)||n==null||n.preventDefault()}},Bh=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),rC=Object.freeze(Cu(Vr({},Bh),{valid:!1,valueMissing:!0})),sC=Object.freeze(Cu(Vr({},Bh),{valid:!1,customError:!0})),oC=Zt`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,lC=Zt`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Fl=(n="value")=>(i,s)=>{const o=i.constructor,d=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(f,g,w){var x;const C=o.getPropertyOptions(n),z=typeof C.attribute=="string"?C.attribute:n;if(f===z){const S=C.converter||Kl,j=(typeof S=="function"?S:(x=S==null?void 0:S.fromAttribute)!=null?x:Kl.fromAttribute)(w,C.type);this[n]!==j&&(this[s]=j)}d.call(this,f,g,w)}},Oo=Zt`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,ga=class{constructor(n,...i){this.slotNames=[],this.handleSlotChange=s=>{const o=s.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=n).addController(this),this.slotNames=i}hasDefaultSlot(){return[...this.host.childNodes].some(n=>{if(n.nodeType===n.TEXT_NODE&&n.textContent.trim()!=="")return!0;if(n.nodeType===n.ELEMENT_NODE){const i=n;if(i.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!i.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(n){return this.host.querySelector(`:scope > [slot="${n}"]`)!==null}test(n){return n==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(n)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function cC(n){if(!n)return"";const i=n.assignedNodes({flatten:!0});let s="";return[...i].forEach(o=>{o.nodeType===Node.TEXT_NODE&&(s+=o.textContent)}),s}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tr={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},Tu=n=>(...i)=>({_$litDirective$:n,values:i});let Eu=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,s,o){this._$Ct=i,this._$AM=s,this._$Ci=o}_$AS(i,s){return this.update(i,s)}update(i,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const te=Tu(class extends Eu{constructor(n){var i;if(super(n),n.type!==tr.ATTRIBUTE||n.name!=="class"||((i=n.strings)==null?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(n){return" "+Object.keys(n).filter(i=>n[i]).join(" ")+" "}update(n,[i]){var o,d;if(this.st===void 0){this.st=new Set,n.strings!==void 0&&(this.nt=new Set(n.strings.join(" ").split(/\s/).filter(f=>f!=="")));for(const f in i)i[f]&&!((o=this.nt)!=null&&o.has(f))&&this.st.add(f);return this.render(i)}const s=n.element.classList;for(const f of this.st)f in i||(s.remove(f),this.st.delete(f));for(const f in i){const g=!!i[f];g===this.st.has(f)||(d=this.nt)!=null&&d.has(f)||(g?(s.add(f),this.st.add(f)):(s.remove(f),this.st.delete(f)))}return Va}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yt=n=>n??an;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const To=Tu(class extends Eu{constructor(n){if(super(n),n.type!==tr.PROPERTY&&n.type!==tr.ATTRIBUTE&&n.type!==tr.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!G1(n))throw Error("`live` bindings can only contain a single expression")}render(n){return n}update(n,[i]){if(i===Va||i===an)return i;const s=n.element,o=n.name;if(n.type===tr.PROPERTY){if(i===s[o])return Va}else if(n.type===tr.BOOLEAN_ATTRIBUTE){if(!!i===s.hasAttribute(o))return Va}else if(n.type===tr.ATTRIBUTE&&s.getAttribute(o)===i+"")return Va;return PS(n),i}});var Mn=class extends Pt{constructor(){super(...arguments),this.formControlController=new Kr(this,{value:n=>n.checked?n.value||"on":void 0,defaultValue:n=>n.defaultChecked,setValue:(n,i)=>n.checked=i}),this.hasSlotController=new ga(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(n){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(n)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(n){this.input.focus(n)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(n){this.input.setCustomValidity(n),this.formControlController.updateValidity()}render(){const n=this.hasSlotController.test("help-text"),i=this.helpText?!0:!!n;return kt`
      <div
        class=${te({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":i})}
      >
        <label
          part="base"
          class=${te({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${Yt(this.value)}
            .indeterminate=${To(this.indeterminate)}
            .checked=${To(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?" control--checked":""}${this.indeterminate?" control--indeterminate":""}"
            class="checkbox__control"
          >
            ${this.checked?kt`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?kt`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:""}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${i?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Mn.styles=[ee,Oo,lC];Mn.dependencies={"sl-icon":Ke};v([Mt('input[type="checkbox"]')],Mn.prototype,"input",2);v([Wt()],Mn.prototype,"hasFocus",2);v([T()],Mn.prototype,"title",2);v([T()],Mn.prototype,"name",2);v([T()],Mn.prototype,"value",2);v([T({reflect:!0})],Mn.prototype,"size",2);v([T({type:Boolean,reflect:!0})],Mn.prototype,"disabled",2);v([T({type:Boolean,reflect:!0})],Mn.prototype,"checked",2);v([T({type:Boolean,reflect:!0})],Mn.prototype,"indeterminate",2);v([Fl("checked")],Mn.prototype,"defaultChecked",2);v([T({reflect:!0})],Mn.prototype,"form",2);v([T({type:Boolean,reflect:!0})],Mn.prototype,"required",2);v([T({attribute:"help-text"})],Mn.prototype,"helpText",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],Mn.prototype,"handleDisabledChange",1);v([Dt(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Mn.prototype,"handleStateChange",1);var uC=Zt`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`;const Ym=new Set,Ul=new Map;let Br,gg="ltr",vg="en";const W1=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(W1){const n=new MutationObserver(tw);gg=document.documentElement.dir||"ltr",vg=document.documentElement.lang||navigator.language,n.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function J1(...n){n.map(i=>{const s=i.$code.toLowerCase();Ul.has(s)?Ul.set(s,Object.assign(Object.assign({},Ul.get(s)),i)):Ul.set(s,i),Br||(Br=i)}),tw()}function tw(){W1&&(gg=document.documentElement.dir||"ltr",vg=document.documentElement.lang||navigator.language),[...Ym.keys()].map(n=>{typeof n.requestUpdate=="function"&&n.requestUpdate()})}let dC=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){Ym.add(this.host)}hostDisconnected(){Ym.delete(this.host)}dir(){return`${this.host.dir||gg}`.toLowerCase()}lang(){const i=`${this.host.lang||vg}`.toLowerCase().replace(/_/g,"-");try{return new Intl.Locale(i),i}catch{return Br?Br.$code.toLowerCase():"en"}}getTranslationData(i){var s,o;let d;try{d=new Intl.Locale(i.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}const f=d.language.toLowerCase(),g=(o=(s=d.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&o!==void 0?o:"",w=Ul.get(`${f}-${g}`),x=Ul.get(f);return{locale:d,language:f,region:g,primary:w,secondary:x}}exists(i,s){var o;const{primary:d,secondary:f}=this.getTranslationData((o=s.lang)!==null&&o!==void 0?o:this.lang());return s=Object.assign({includeFallback:!1},s),!!(d&&d[i]||f&&f[i]||s.includeFallback&&Br&&Br[i])}term(i,...s){const{primary:o,secondary:d}=this.getTranslationData(this.lang());let f;if(o&&o[i])f=o[i];else if(d&&d[i])f=d[i];else if(Br&&Br[i])f=Br[i];else return console.error(`No translation found for: ${String(i)}`),String(i);return typeof f=="function"?f(...s):f}date(i,s){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),s).format(i)}number(i,s){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),s).format(i)}relativeTime(i,s,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(i,s)}};var ew={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(n,i)=>`Go to slide ${n} of ${i}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:n=>n===0?"No options selected":n===1?"1 option selected":`${n} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:n=>`Slide ${n}`,toggleColorFormat:"Toggle color format"};J1(ew);var hC=ew,Oe=class extends dC{};J1(hC);var zu=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this)}render(){return kt`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};zu.styles=[ee,uC];var nw=new Map,fC=new WeakMap;function pC(n){return n??{keyframes:[],options:{duration:0}}}function Ky(n,i){return i.toLowerCase()==="rtl"?{keyframes:n.rtlKeyframes||n.keyframes,options:n.options}:n}function $e(n,i){nw.set(n,pC(i))}function rn(n,i,s){const o=fC.get(n);if(o!=null&&o[i])return Ky(o[i],s.dir);const d=nw.get(i);return d?Ky(d,s.dir):{keyframes:[],options:{duration:0}}}function vn(n,i,s){return new Promise(o=>{if((s==null?void 0:s.duration)===1/0)throw new Error("Promise-based animations must be finite.");const d=n.animate(i,Cu(Vr({},s),{duration:Pm()?0:s.duration}));d.addEventListener("cancel",o,{once:!0}),d.addEventListener("finish",o,{once:!0})})}function Gy(n){return n=n.toString().toLowerCase(),n.indexOf("ms")>-1?parseFloat(n):n.indexOf("s")>-1?parseFloat(n)*1e3:parseFloat(n)}function Pm(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function On(n){return Promise.all(n.getAnimations().map(i=>new Promise(s=>{i.cancel(),requestAnimationFrame(s)})))}function Ah(n,i){return n.map(s=>Cu(Vr({},s),{height:s.height==="auto"?`${i}px`:s.height}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Fy(n,i,s){return n?i(n):s==null?void 0:s(n)}var bn=class Xm extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(i){return i instanceof Element&&i.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await On(this.childrenContainer);const{keyframes:i,options:s}=rn(this,"tree-item.collapse",{dir:this.localize.dir()});await vn(this.childrenContainer,Ah(i,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const i=this.parentElement;return!!i&&Xm.isTreeItem(i)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(i){i.has("selected")&&!i.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await On(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:i,options:s}=rn(this,"tree-item.expand",{dir:this.localize.dir()});await vn(this.childrenContainer,Ah(i,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:i=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>Xm.isTreeItem(s)&&(i||!s.disabled)):[]}render(){const i=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return kt`
      <div
        part="base"
        class="${te({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?"item--disabled":""}
            ${this.expanded?"item--expanded":""}
            ${this.indeterminate?"item--indeterminate":""}
            ${this.selected?"item--selected":""}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${te({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${Fy(this.loading,()=>kt` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${i?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${i?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${Fy(this.selectable,()=>kt`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${To(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};bn.styles=[ee,oC];bn.dependencies={"sl-checkbox":Mn,"sl-icon":Ke,"sl-spinner":zu};v([Wt()],bn.prototype,"indeterminate",2);v([Wt()],bn.prototype,"isLeaf",2);v([Wt()],bn.prototype,"loading",2);v([Wt()],bn.prototype,"selectable",2);v([T({type:Boolean,reflect:!0})],bn.prototype,"expanded",2);v([T({type:Boolean,reflect:!0})],bn.prototype,"selected",2);v([T({type:Boolean,reflect:!0})],bn.prototype,"disabled",2);v([T({type:Boolean,reflect:!0})],bn.prototype,"lazy",2);v([Mt("slot:not([name])")],bn.prototype,"defaultSlot",2);v([Mt("slot[name=children]")],bn.prototype,"childrenSlot",2);v([Mt(".tree-item__item")],bn.prototype,"itemElement",2);v([Mt(".tree-item__children")],bn.prototype,"childrenContainer",2);v([Mt(".tree-item__expand-button slot")],bn.prototype,"expandButtonSlot",2);v([Dt("loading",{waitUntilFirstUpdate:!0})],bn.prototype,"handleLoadingChange",1);v([Dt("disabled")],bn.prototype,"handleDisabledChange",1);v([Dt("selected")],bn.prototype,"handleSelectedChange",1);v([Dt("expanded",{waitUntilFirstUpdate:!0})],bn.prototype,"handleExpandedChange",1);v([Dt("expanded",{waitUntilFirstUpdate:!0})],bn.prototype,"handleExpandAnimation",1);v([Dt("lazy",{waitUntilFirstUpdate:!0})],bn.prototype,"handleLazyChange",1);var fu=bn;$e("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});$e("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});fu.define("sl-tree-item");var mC=Zt`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,gC=Zt`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const Rs=Math.min,Ir=Math.max,Th=Math.round,hh=Math.floor,qr=n=>({x:n,y:n}),vC={left:"right",right:"left",bottom:"top",top:"bottom"};function aw(n,i,s){return Ir(n,Rs(i,s))}function Yl(n,i){return typeof n=="function"?n(i):n}function Eo(n){return n.split("-")[0]}function Pl(n){return n.split("-")[1]}function iw(n){return n==="x"?"y":"x"}function bg(n){return n==="y"?"height":"width"}function Ur(n){const i=n[0];return i==="t"||i==="b"?"y":"x"}function yg(n){return iw(Ur(n))}function bC(n,i,s){s===void 0&&(s=!1);const o=Pl(n),d=yg(n),f=bg(d);let g=d==="x"?o===(s?"end":"start")?"right":"left":o==="start"?"bottom":"top";return i.reference[f]>i.floating[f]&&(g=Eh(g)),[g,Eh(g)]}function yC(n){const i=Eh(n);return[Qm(n),i,Qm(i)]}function Qm(n){return n.includes("start")?n.replace("start","end"):n.replace("end","start")}const Yy=["left","right"],Py=["right","left"],wC=["top","bottom"],xC=["bottom","top"];function _C(n,i,s){switch(n){case"top":case"bottom":return s?i?Py:Yy:i?Yy:Py;case"left":case"right":return i?wC:xC;default:return[]}}function SC(n,i,s,o){const d=Pl(n);let f=_C(Eo(n),s==="start",o);return d&&(f=f.map(g=>g+"-"+d),i&&(f=f.concat(f.map(Qm)))),f}function Eh(n){const i=Eo(n);return vC[i]+n.slice(i.length)}function kC(n){var i,s,o,d;return{top:(i=n.top)!=null?i:0,right:(s=n.right)!=null?s:0,bottom:(o=n.bottom)!=null?o:0,left:(d=n.left)!=null?d:0}}function rw(n){return typeof n!="number"?kC(n):{top:n,right:n,bottom:n,left:n}}function zh(n){const{x:i,y:s,width:o,height:d}=n;return{width:o,height:d,top:s,left:i,right:i+o,bottom:s+d,x:i,y:s}}function Xy(n,i,s){let{reference:o,floating:d}=n;const f=Ur(i),g=yg(i),w=bg(g),x=Eo(i),C=f==="y",z=o.x+o.width/2-d.width/2,S=o.y+o.height/2-d.height/2,E=o[w]/2-d[w]/2;let j;switch(x){case"top":j={x:z,y:o.y-d.height};break;case"bottom":j={x:z,y:o.y+o.height};break;case"right":j={x:o.x+o.width,y:S};break;case"left":j={x:o.x-d.width,y:S};break;default:j={x:o.x,y:o.y}}const D=Pl(i);return D&&(j[g]+=E*(D==="end"?1:-1)*(s&&C?-1:1)),j}async function CC(n,i){var s;i===void 0&&(i={});const{x:o,y:d,platform:f,rects:g,elements:w,strategy:x}=n,{boundary:C="clippingAncestors",rootBoundary:z="viewport",elementContext:S="floating",altBoundary:E=!1,padding:j=0}=Yl(i,n),D=rw(j),nt=w[E?S==="floating"?"reference":"floating":S],Et=zh(await f.getClippingRect({element:(s=await(f.isElement==null?void 0:f.isElement(nt)))==null||s?nt:nt.contextElement||await(f.getDocumentElement==null?void 0:f.getDocumentElement(w.floating)),boundary:C,rootBoundary:z,strategy:x})),ut=S==="floating"?{x:o,y:d,width:g.floating.width,height:g.floating.height}:g.reference,Ct=await(f.getOffsetParent==null?void 0:f.getOffsetParent(w.floating)),rt=await(f.isElement==null?void 0:f.isElement(Ct))&&await(f.getScale==null?void 0:f.getScale(Ct))||{x:1,y:1},dt=zh(f.convertOffsetParentRelativeRectToViewportRelativeRect?await f.convertOffsetParentRelativeRectToViewportRelativeRect({elements:w,rect:ut,offsetParent:Ct,strategy:x}):ut);return{top:(Et.top-dt.top+D.top)/rt.y,bottom:(dt.bottom-Et.bottom+D.bottom)/rt.y,left:(Et.left-dt.left+D.left)/rt.x,right:(dt.right-Et.right+D.right)/rt.x}}const AC=50,TC=async(n,i,s)=>{const{placement:o="bottom",strategy:d="absolute",middleware:f=[],platform:g}=s,w=g.detectOverflow?g:{...g,detectOverflow:CC},x=await(g.isRTL==null?void 0:g.isRTL(i));let C=await g.getElementRects({reference:n,floating:i,strategy:d}),{x:z,y:S}=Xy(C,o,x),E=o,j=0;const D={};for(let Q=0;Q<f.length;Q++){const nt=f[Q];if(!nt)continue;const{name:Et,fn:ut}=nt,{x:Ct,y:rt,data:dt,reset:xt}=await ut({x:z,y:S,initialPlacement:o,placement:E,strategy:d,middlewareData:D,rects:C,platform:w,elements:{reference:n,floating:i}});z=Ct??z,S=rt??S,D[Et]={...D[Et],...dt},xt&&j<AC&&(j++,typeof xt=="object"&&(xt.placement&&(E=xt.placement),xt.rects&&(C=xt.rects===!0?await g.getElementRects({reference:n,floating:i,strategy:d}):xt.rects),{x:z,y:S}=Xy(C,E,x)),Q=-1)}return{x:z,y:S,placement:E,strategy:d,middlewareData:D}},EC=n=>({name:"arrow",options:n,async fn(i){const{x:s,y:o,placement:d,rects:f,platform:g,elements:w,middlewareData:x}=i,{element:C,padding:z=0}=Yl(n,i)||{};if(C==null)return{};const S=rw(z),E={x:s,y:o},j=yg(d),D=bg(j),Q=await g.getDimensions(C),nt=j==="y",Et=nt?"top":"left",ut=nt?"bottom":"right",Ct=nt?"clientHeight":"clientWidth",rt=f.reference[D]+f.reference[j]-E[j]-f.floating[D],dt=E[j]-f.reference[j],xt=await(g.getOffsetParent==null?void 0:g.getOffsetParent(C));let wt=xt?xt[Ct]:0;(!wt||!await(g.isElement==null?void 0:g.isElement(xt)))&&(wt=w.floating[Ct]||f.floating[D]);const vt=rt/2-dt/2,ot=wt/2-Q[D]/2-1,gt=Rs(S[Et],ot),Qt=Rs(S[ut],ot),oe=wt-Q[D]-Qt,de=wt/2-Q[D]/2+vt,Ne=aw(gt,de,oe),ve=!x.arrow&&Pl(d)!=null&&de!==Ne&&f.reference[D]/2-(de<gt?gt:Qt)-Q[D]/2<0,zt=ve?de<gt?de-gt:de-oe:0;return{[j]:E[j]+zt,data:{[j]:Ne,centerOffset:de-Ne-zt,...ve&&{alignmentOffset:zt}},reset:ve}}}),zC=function(n){return n===void 0&&(n={}),{name:"flip",options:n,async fn(i){var s,o;const{placement:d,middlewareData:f,rects:g,initialPlacement:w,platform:x,elements:C}=i,{mainAxis:z=!0,crossAxis:S=!0,fallbackPlacements:E,fallbackStrategy:j="bestFit",fallbackAxisSideDirection:D="none",flipAlignment:Q=!0,...nt}=Yl(n,i);if((s=f.arrow)!=null&&s.alignmentOffset)return{};const Et=Eo(d),ut=Ur(w),Ct=Eo(w)===w,rt=await(x.isRTL==null?void 0:x.isRTL(C.floating)),dt=E||(Ct||!Q?[Eh(w)]:yC(w)),xt=D!=="none";!E&&xt&&dt.push(...SC(w,Q,D,rt));const wt=[w,...dt],vt=await x.detectOverflow(i,nt),ot=[];let gt=((o=f.flip)==null?void 0:o.overflows)||[];if(z&&ot.push(vt[Et]),S){const Ne=bC(d,g,rt);ot.push(vt[Ne[0]],vt[Ne[1]])}if(gt=[...gt,{placement:d,overflows:ot}],!ot.every(Ne=>Ne<=0)){var Qt,oe;const Ne=(((Qt=f.flip)==null?void 0:Qt.index)||0)+1,ve=wt[Ne];if(ve&&(!(S==="alignment"?ut!==Ur(ve):!1)||gt.every(Lt=>Ur(Lt.placement)===ut?Lt.overflows[0]>0:!0)))return{data:{index:Ne,overflows:gt},reset:{placement:ve}};let zt=(oe=gt.filter(qt=>qt.overflows[0]<=0).sort((qt,Lt)=>qt.overflows[1]-Lt.overflows[1])[0])==null?void 0:oe.placement;if(!zt)switch(j){case"bestFit":{var de;const qt=(de=gt.filter(Lt=>{if(xt){const ie=Ur(Lt.placement);return ie===ut||ie==="y"}return!0}).map(Lt=>[Lt.placement,Lt.overflows.filter(ie=>ie>0).reduce((ie,re)=>ie+re,0)]).sort((Lt,ie)=>Lt[1]-ie[1])[0])==null?void 0:de[0];qt&&(zt=qt);break}case"initialPlacement":zt=w;break}if(d!==zt)return{reset:{placement:zt}}}return{}}}},NC=new Set(["left","top"]);async function OC(n,i){const{placement:s,platform:o,elements:d}=n,f=await(o.isRTL==null?void 0:o.isRTL(d.floating)),g=Eo(s),w=Pl(s),x=Ur(s)==="y",C=NC.has(g)?-1:1,z=f&&x?-1:1,S=Yl(i,n);let{mainAxis:E,crossAxis:j,alignmentAxis:D}=typeof S=="number"?{mainAxis:S,crossAxis:0,alignmentAxis:null}:{mainAxis:S.mainAxis||0,crossAxis:S.crossAxis||0,alignmentAxis:S.alignmentAxis};return w&&typeof D=="number"&&(j=w==="end"?D*-1:D),x?{x:j*z,y:E*C}:{x:E*C,y:j*z}}const jC=function(n){return n===void 0&&(n=0),{name:"offset",options:n,async fn(i){var s,o;const{x:d,y:f,placement:g,middlewareData:w}=i,x=await OC(i,n);return g===((s=w.offset)==null?void 0:s.placement)&&(o=w.arrow)!=null&&o.alignmentOffset?{}:{x:d+x.x,y:f+x.y,data:{...x,placement:g}}}}},DC=function(n){return n===void 0&&(n={}),{name:"shift",options:n,async fn(i){const{x:s,y:o,placement:d,platform:f}=i,{mainAxis:g=!0,crossAxis:w=!1,limiter:x={fn:ut=>{let{x:Ct,y:rt}=ut;return{x:Ct,y:rt}}},...C}=Yl(n,i),z={x:s,y:o},S=await f.detectOverflow(i,C),E=Ur(d),j=iw(E);let D=z[j],Q=z[E];const nt=(ut,Ct)=>aw(Ct+S[ut==="y"?"top":"left"],Ct,Ct-S[ut==="y"?"bottom":"right"]);g&&(D=nt(j,D)),w&&(Q=nt(E,Q));const Et=x.fn({...i,[j]:D,[E]:Q});return{...Et,data:{x:Et.x-s,y:Et.y-o,enabled:{[j]:g,[E]:w}}}}}},RC=function(n){return n===void 0&&(n={}),{name:"size",options:n,async fn(i){const{placement:s,rects:o,platform:d,elements:f}=i,{apply:g=()=>{},...w}=Yl(n,i),x=await d.detectOverflow(i,w),C=Eo(s),z=Pl(s),S=Ur(s)==="y",{width:E,height:j}=o.floating;let D,Q;C==="top"||C==="bottom"?(D=C,Q=z===(await(d.isRTL==null?void 0:d.isRTL(f.floating))?"start":"end")?"left":"right"):(Q=C,D=z==="end"?"top":"bottom");const nt=j-x.top-x.bottom,Et=E-x.left-x.right,ut=Rs(j-x[D],nt),Ct=Rs(E-x[Q],Et),rt=i.middlewareData.shift,dt=!rt;let xt=ut,wt=Ct;rt!=null&&rt.enabled.x&&(wt=Et),rt!=null&&rt.enabled.y&&(xt=nt),dt&&!z&&(S?wt=E-2*Ir(x.left,x.right):xt=j-2*Ir(x.top,x.bottom)),await g({...i,availableWidth:wt,availableHeight:xt});const vt=await d.getDimensions(f.floating);return E!==vt.width||j!==vt.height?{reset:{rects:!0}}:{}}}};function Uh(){return typeof window<"u"}function Xl(n){return sw(n)?(n.nodeName||"").toLowerCase():"#document"}function Aa(n){var i;return(n==null||(i=n.ownerDocument)==null?void 0:i.defaultView)||window}function Gr(n){var i;return(i=(sw(n)?n.ownerDocument:n.document)||window.document)==null?void 0:i.documentElement}function sw(n){return Uh()?n instanceof Node||n instanceof Aa(n).Node:!1}function er(n){return Uh()?n instanceof Element||n instanceof Aa(n).Element:!1}function Ms(n){return Uh()?n instanceof HTMLElement||n instanceof Aa(n).HTMLElement:!1}function Qy(n){return!Uh()||typeof ShadowRoot>"u"?!1:n instanceof ShadowRoot||n instanceof Aa(n).ShadowRoot}function Hh(n){const{overflow:i,overflowX:s,overflowY:o,display:d}=nr(n);return/auto|scroll|overlay|hidden|clip/.test(i+o+s)&&d!=="inline"&&d!=="contents"}function MC(n){return/^(table|td|th)$/.test(Xl(n))}function Ih(n){try{if(n.matches(":popover-open"))return!0}catch{}try{return n.matches(":modal")}catch{return!1}}const $C=/transform|translate|scale|rotate|perspective|filter/,LC=/paint|layout|strict|content/,wo=n=>!!n&&n!=="none";let zm;function qh(n){const i=er(n)?nr(n):n;return wo(i.transform)||wo(i.translate)||wo(i.scale)||wo(i.rotate)||wo(i.perspective)||!wg()&&(wo(i.backdropFilter)||wo(i.filter))||$C.test(i.willChange||"")||LC.test(i.contain||"")}function BC(n){let i=zo(n);for(;Ms(i)&&!_u(i);){if(qh(i))return i;if(Ih(i))return null;i=zo(i)}return null}function wg(){return zm==null&&(zm=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),zm}function _u(n){return/^(html|body|#document)$/.test(Xl(n))}function nr(n){return Aa(n).getComputedStyle(n)}function Vh(n){return er(n)?{scrollLeft:n.scrollLeft,scrollTop:n.scrollTop}:{scrollLeft:n.scrollX,scrollTop:n.scrollY}}function zo(n){if(Xl(n)==="html")return n;const i=n.assignedSlot||n.parentNode||Qy(n)&&n.host||Gr(n);return Qy(i)?i.host:i}function ow(n){const i=zo(n);return _u(i)?(n.ownerDocument||n).body:Ms(i)&&Hh(i)?i:ow(i)}function Su(n,i,s){var o;i===void 0&&(i=[]),s===void 0&&(s=!0);const d=ow(n),f=d===((o=n.ownerDocument)==null?void 0:o.body),g=Aa(d);if(f){const w=Zm(g);return i.concat(g,g.visualViewport||[],Hh(d)?d:[],w&&s?Su(w):[])}else return i.concat(d,Su(d,[],s))}function Zm(n){return n.parent&&Object.getPrototypeOf(n.parent)?n.frameElement:null}function lw(n){const i=nr(n);let s=parseFloat(i.width)||0,o=parseFloat(i.height)||0;const d=Ms(n),f=d?n.offsetWidth:s,g=d?n.offsetHeight:o,w=Th(s)!==f||Th(o)!==g;return w&&(s=f,o=g),{width:s,height:o,$:w}}function xg(n){return er(n)?n:n.contextElement}function Il(n){const i=xg(n);if(!Ms(i))return qr(1);const s=i.getBoundingClientRect(),{width:o,height:d,$:f}=lw(i);let g=(f?Th(s.width):s.width)/o,w=(f?Th(s.height):s.height)/d;return(!g||!Number.isFinite(g))&&(g=1),(!w||!Number.isFinite(w))&&(w=1),{x:g,y:w}}const UC=qr(0);function cw(n){const i=Aa(n);return!wg()||!i.visualViewport?UC:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function HC(n,i,s){return i===void 0&&(i=!1),!!s&&i&&s===Aa(n)}function No(n,i,s,o){i===void 0&&(i=!1),s===void 0&&(s=!1);const d=n.getBoundingClientRect(),f=xg(n);let g=qr(1);i&&(o?er(o)&&(g=Il(o)):g=Il(n));const w=HC(f,s,o)?cw(f):qr(0);let x=(d.left+w.x)/g.x,C=(d.top+w.y)/g.y,z=d.width/g.x,S=d.height/g.y;if(f&&o){const E=Aa(f),j=er(o)?Aa(o):o;let D=E,Q=Zm(D);for(;Q&&j!==D;){const nt=Il(Q),Et=Q.getBoundingClientRect(),ut=nr(Q),Ct=Et.left+(Q.clientLeft+parseFloat(ut.paddingLeft))*nt.x,rt=Et.top+(Q.clientTop+parseFloat(ut.paddingTop))*nt.y;x*=nt.x,C*=nt.y,z*=nt.x,S*=nt.y,x+=Ct,C+=rt,D=Aa(Q),Q=Zm(D)}}return zh({width:z,height:S,x,y:C})}function Kh(n,i){const s=Vh(n).scrollLeft;return i?i.left+s:No(Gr(n)).left+s}function uw(n,i){const s=n.getBoundingClientRect(),o=s.left+i.scrollLeft-Kh(n,s),d=s.top+i.scrollTop;return{x:o,y:d}}function IC(n){let{elements:i,rect:s,offsetParent:o,strategy:d}=n;const f=d==="fixed",g=Gr(o),w=i?Ih(i.floating):!1;if(o===g||w&&f)return s;let x={scrollLeft:0,scrollTop:0},C=qr(1);const z=qr(0),S=Ms(o);if((S||!f)&&((Xl(o)!=="body"||Hh(g))&&(x=Vh(o)),S)){const j=No(o);C=Il(o),z.x=j.x+o.clientLeft,z.y=j.y+o.clientTop}const E=g&&!S&&!f?uw(g,x):qr(0);return{width:s.width*C.x,height:s.height*C.y,x:s.x*C.x-x.scrollLeft*C.x+z.x+E.x,y:s.y*C.y-x.scrollTop*C.y+z.y+E.y}}function qC(n){return n.getClientRects?Array.from(n.getClientRects()):[]}function VC(n){const i=Vh(n),s=n.ownerDocument.body,o=Ir(n.scrollWidth,n.clientWidth,s.scrollWidth,s.clientWidth),d=Ir(n.scrollHeight,n.clientHeight,s.scrollHeight,s.clientHeight);let f=-i.scrollLeft+Kh(n);const g=-i.scrollTop;return nr(s).direction==="rtl"&&(f+=Ir(n.clientWidth,s.clientWidth)-o),{width:o,height:d,x:f,y:g}}const KC=25;function GC(n,i,s){s===void 0&&(s="viewport");const o=s==="layoutViewport",d=Aa(n),f=Gr(n),g=d.visualViewport;let w=f.clientWidth,x=f.clientHeight,C=0,z=0;if(g){const E=!wg()||i==="fixed";o?E||(C=-g.offsetLeft,z=-g.offsetTop):(w=g.width,x=g.height,E&&(C=g.offsetLeft,z=g.offsetTop))}if(Kh(f)<=0){const E=f.ownerDocument,j=E.body,D=getComputedStyle(j),Q=E.compatMode==="CSS1Compat"&&parseFloat(D.marginLeft)+parseFloat(D.marginRight)||0,nt=Math.abs(f.clientWidth-j.clientWidth-Q),Et=getComputedStyle(f).scrollbarGutter==="stable both-edges"?nt/2:nt;Et<=KC&&(w-=Et)}return{width:w,height:x,x:C,y:z}}function FC(n,i){const s=No(n,!0,i==="fixed"),o=s.top+n.clientTop,d=s.left+n.clientLeft,f=Il(n),g=n.clientWidth*f.x,w=n.clientHeight*f.y,x=d*f.x,C=o*f.y;return{width:g,height:w,x,y:C}}function Zy(n,i,s){let o;if(i==="viewport"||i==="layoutViewport")o=GC(n,s,i);else if(i==="document")o=VC(Gr(n));else if(er(i))o=FC(i,s);else{const d=cw(n);o={x:i.x-d.x,y:i.y-d.y,width:i.width,height:i.height}}return zh(o)}function YC(n,i){const s=i.get(n);if(s)return s;let o=Su(n,[],!1).filter(w=>er(w)&&Xl(w)!=="body"),d=null;const f=nr(n).position==="fixed";let g=f?zo(n):n;for(;er(g)&&!_u(g);){const w=nr(g),x=qh(g),C=d?d.position:f?"fixed":"";!x&&(C==="fixed"||C==="absolute"&&w.position==="static")?o=o.filter(S=>S!==g):d=w,g=zo(g)}return i.set(n,o),o}function PC(n){let{element:i,boundary:s,rootBoundary:o,strategy:d}=n;const g=[...s==="clippingAncestors"?Ih(i)?[]:YC(i,this._c):[].concat(s),o],w=Zy(i,g[0],d);let x=w.top,C=w.right,z=w.bottom,S=w.left;for(let E=1;E<g.length;E++){const j=Zy(i,g[E],d);x=Ir(j.top,x),C=Rs(j.right,C),z=Rs(j.bottom,z),S=Ir(j.left,S)}return{width:C-S,height:z-x,x:S,y:x}}function XC(n){const{width:i,height:s}=lw(n);return{width:i,height:s}}function QC(n,i,s){const o=Ms(i),d=Gr(i),f=s==="fixed",g=No(n,!0,f,i);let w={scrollLeft:0,scrollTop:0};const x=qr(0);if((o||!f)&&((Xl(i)!=="body"||Hh(d))&&(w=Vh(i)),o)){const E=No(i,!0,f,i);x.x=E.x+i.clientLeft,x.y=E.y+i.clientTop}!o&&d&&(x.x=Kh(d));const C=d&&!o&&!f?uw(d,w):qr(0),z=g.left+w.scrollLeft-x.x-C.x,S=g.top+w.scrollTop-x.y-C.y;return{x:z,y:S,width:g.width,height:g.height}}function Nm(n){return nr(n).position==="static"}function Wy(n,i){if(!Ms(n)||nr(n).position==="fixed")return null;if(i)return i(n);let s=n.offsetParent;return Gr(n)===s&&(s=s.ownerDocument.body),s}function dw(n,i){const s=Aa(n);if(Ih(n))return s;if(!Ms(n)){let d=zo(n);for(;d&&!_u(d);){if(er(d)&&!Nm(d))return d;d=zo(d)}return s}let o=Wy(n,i);for(;o&&MC(o)&&Nm(o);)o=Wy(o,i);return o&&_u(o)&&Nm(o)&&!qh(o)?s:o||BC(n)||s}const ZC=async function(n){const i=this.getOffsetParent||dw,s=this.getDimensions,o=await s(n.floating);return{reference:QC(n.reference,await i(n.floating),n.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function WC(n){return nr(n).direction==="rtl"}const xh={convertOffsetParentRelativeRectToViewportRelativeRect:IC,getDocumentElement:Gr,getClippingRect:PC,getOffsetParent:dw,getElementRects:ZC,getClientRects:qC,getDimensions:XC,getScale:Il,isElement:er,isRTL:WC};function hw(n,i){return n.x===i.x&&n.y===i.y&&n.width===i.width&&n.height===i.height}function JC(n,i,s){let o=null,d;const f=Gr(n);function g(){var z;clearTimeout(d),(z=o)==null||z.disconnect(),o=null}function w(z,S){z===void 0&&(z=!1),S===void 0&&(S=1),g();const E=n.getBoundingClientRect(),{left:j,top:D,width:Q,height:nt}=E;if(z||i(),!Q||!nt)return;const Et=hh(D),ut=hh(f.clientWidth-(j+Q)),Ct=hh(f.clientHeight-(D+nt)),rt=hh(j),xt={rootMargin:-Et+"px "+-ut+"px "+-Ct+"px "+-rt+"px",threshold:Ir(0,Rs(1,S))||1};let wt=!0;function vt(ot){const gt=ot[0].intersectionRatio;if(!hw(E,n.getBoundingClientRect()))return w();if(gt!==S){if(!wt)return w();gt?w(!1,gt):d=setTimeout(()=>{w(!1,1e-7)},1e3)}wt=!1}try{o=new IntersectionObserver(vt,{...xt,root:f.ownerDocument})}catch{o=new IntersectionObserver(vt,xt)}o.observe(n)}const x=Aa(n),C=()=>w(s);return x.addEventListener("resize",C),w(!0),()=>{x.removeEventListener("resize",C),g()}}function t5(n,i,s,o){o===void 0&&(o={});const{ancestorScroll:d=!0,ancestorResize:f=!0,elementResize:g=typeof ResizeObserver=="function",layoutShift:w=typeof IntersectionObserver=="function",animationFrame:x=!1}=o,C=xg(n),z=d||f?[...C?Su(C):[],...i?Su(i):[]]:[];z.forEach(Et=>{d&&Et.addEventListener("scroll",s),f&&Et.addEventListener("resize",s)});const S=C&&w?JC(C,s,f):null;let E=-1,j=null;g&&(j=new ResizeObserver(Et=>{let[ut]=Et;ut&&ut.target===C&&j&&i&&(j.unobserve(i),cancelAnimationFrame(E),E=requestAnimationFrame(()=>{var Ct;(Ct=j)==null||Ct.observe(i)})),s()}),C&&!x&&j.observe(C),i&&j.observe(i));let D,Q=x?No(n):null;x&&nt();function nt(){const Et=No(n);Q&&!hw(Q,Et)&&s(),Q=Et,D=requestAnimationFrame(nt)}return s(),()=>{var Et;z.forEach(ut=>{d&&ut.removeEventListener("scroll",s),f&&ut.removeEventListener("resize",s)}),S==null||S(),(Et=j)==null||Et.disconnect(),j=null,x&&cancelAnimationFrame(D)}}const e5=jC,n5=DC,a5=zC,Jy=RC,i5=EC,r5=(n,i,s)=>{const o=new Map,d=s??{},f={...xh,...d.platform,_c:o};return TC(n,i,{...d,platform:f})};function s5(n){return o5(n)}function Om(n){return n.assignedSlot?n.assignedSlot:n.parentNode instanceof ShadowRoot?n.parentNode.host:n.parentNode}function o5(n){for(let i=n;i;i=Om(i))if(i instanceof Element&&getComputedStyle(i).display==="none")return null;for(let i=Om(n);i;i=Om(i)){if(!(i instanceof Element))continue;const s=getComputedStyle(i);if(s.display!=="contents"&&(s.position!=="static"||qh(s)||i.tagName==="BODY"))return i}return null}function l5(n){return n!==null&&typeof n=="object"&&"getBoundingClientRect"in n&&("contextElement"in n?n.contextElement instanceof Element:!0)}var Le=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const n=this.anchorEl.getBoundingClientRect(),i=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let o=0,d=0,f=0,g=0,w=0,x=0,C=0,z=0;s?n.top<i.top?(o=n.left,d=n.bottom,f=n.right,g=n.bottom,w=i.left,x=i.top,C=i.right,z=i.top):(o=i.left,d=i.bottom,f=i.right,g=i.bottom,w=n.left,x=n.top,C=n.right,z=n.top):n.left<i.left?(o=n.right,d=n.top,f=i.left,g=i.top,w=n.right,x=n.bottom,C=i.left,z=i.bottom):(o=i.right,d=i.top,f=n.left,g=n.top,w=i.right,x=i.bottom,C=n.left,z=n.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${d}px`),this.style.setProperty("--hover-bridge-top-right-x",`${f}px`),this.style.setProperty("--hover-bridge-top-right-y",`${g}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${w}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${x}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${C}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${z}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(n){super.updated(n),n.has("active")&&(this.active?this.start():this.stop()),n.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const n=this.getRootNode();this.anchorEl=n.getElementById(this.anchor)}else this.anchor instanceof Element||l5(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=t5(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(n=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>n())):n()})}reposition(){if(!this.active||!this.anchorEl)return;const n=[e5({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?n.push(Jy({apply:({rects:s})=>{const o=this.sync==="width"||this.sync==="both",d=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${s.reference.width}px`:"",this.popup.style.height=d?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&n.push(a5({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&n.push(n5({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?n.push(Jy({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&n.push(i5({element:this.arrowEl,padding:this.arrowPadding}));const i=this.strategy==="absolute"?s=>xh.getOffsetParent(s,s5):xh.getOffsetParent;r5(this.anchorEl,this.popup,{placement:this.placement,middleware:n,strategy:this.strategy,platform:Cu(Vr({},xh),{getOffsetParent:i})}).then(({x:s,y:o,middlewareData:d,placement:f})=>{const g=this.localize.dir()==="rtl",w={top:"bottom",right:"left",bottom:"top",left:"right"}[f.split("-")[0]];if(this.setAttribute("data-current-placement",f),Object.assign(this.popup.style,{left:`${s}px`,top:`${o}px`}),this.arrow){const x=d.arrow.x,C=d.arrow.y;let z="",S="",E="",j="";if(this.arrowPlacement==="start"){const D=typeof x=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";z=typeof C=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",S=g?D:"",j=g?"":D}else if(this.arrowPlacement==="end"){const D=typeof x=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";S=g?"":D,j=g?D:"",E=typeof C=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(j=typeof x=="number"?"calc(50% - var(--arrow-size-diagonal))":"",z=typeof C=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(j=typeof x=="number"?`${x}px`:"",z=typeof C=="number"?`${C}px`:"");Object.assign(this.arrowEl.style,{top:z,right:S,bottom:E,left:j,[w]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return kt`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${te({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${te({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?kt`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Le.styles=[ee,gC];v([Mt(".popup")],Le.prototype,"popup",2);v([Mt(".popup__arrow")],Le.prototype,"arrowEl",2);v([T()],Le.prototype,"anchor",2);v([T({type:Boolean,reflect:!0})],Le.prototype,"active",2);v([T({reflect:!0})],Le.prototype,"placement",2);v([T({reflect:!0})],Le.prototype,"strategy",2);v([T({type:Number})],Le.prototype,"distance",2);v([T({type:Number})],Le.prototype,"skidding",2);v([T({type:Boolean})],Le.prototype,"arrow",2);v([T({attribute:"arrow-placement"})],Le.prototype,"arrowPlacement",2);v([T({attribute:"arrow-padding",type:Number})],Le.prototype,"arrowPadding",2);v([T({type:Boolean})],Le.prototype,"flip",2);v([T({attribute:"flip-fallback-placements",converter:{fromAttribute:n=>n.split(" ").map(i=>i.trim()).filter(i=>i!==""),toAttribute:n=>n.join(" ")}})],Le.prototype,"flipFallbackPlacements",2);v([T({attribute:"flip-fallback-strategy"})],Le.prototype,"flipFallbackStrategy",2);v([T({type:Object})],Le.prototype,"flipBoundary",2);v([T({attribute:"flip-padding",type:Number})],Le.prototype,"flipPadding",2);v([T({type:Boolean})],Le.prototype,"shift",2);v([T({type:Object})],Le.prototype,"shiftBoundary",2);v([T({attribute:"shift-padding",type:Number})],Le.prototype,"shiftPadding",2);v([T({attribute:"auto-size"})],Le.prototype,"autoSize",2);v([T()],Le.prototype,"sync",2);v([T({type:Object})],Le.prototype,"autoSizeBoundary",2);v([T({attribute:"auto-size-padding",type:Number})],Le.prototype,"autoSizePadding",2);v([T({attribute:"hover-bridge",type:Boolean})],Le.prototype,"hoverBridge",2);function ma(n,i){return new Promise(s=>{function o(d){d.target===n&&(n.removeEventListener(i,o),s())}n.addEventListener(i,o)})}var Gn=class extends Pt{constructor(){super(),this.localize=new Oe(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=n=>{n.key==="Escape"&&(n.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const n=Gy(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),n)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const n=Gy(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),n)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this.closeWatcher)==null||n.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(n){return this.trigger.split(" ").includes(n)}async handleOpenChange(){var n,i;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((n=this.closeWatcher)==null||n.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await On(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:o}=rn(this,"tooltip.show",{dir:this.localize.dir()});await vn(this.popup.popup,s,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(i=this.closeWatcher)==null||i.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await On(this.body);const{keyframes:s,options:o}=rn(this,"tooltip.hide",{dir:this.localize.dir()});await vn(this.popup.popup,s,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,ma(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ma(this,"sl-after-hide")}render(){return kt`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${te({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};Gn.styles=[ee,mC];Gn.dependencies={"sl-popup":Le};v([Mt("slot:not([name])")],Gn.prototype,"defaultSlot",2);v([Mt(".tooltip__body")],Gn.prototype,"body",2);v([Mt("sl-popup")],Gn.prototype,"popup",2);v([T()],Gn.prototype,"content",2);v([T()],Gn.prototype,"placement",2);v([T({type:Boolean,reflect:!0})],Gn.prototype,"disabled",2);v([T({type:Number})],Gn.prototype,"distance",2);v([T({type:Boolean,reflect:!0})],Gn.prototype,"open",2);v([T({type:Number})],Gn.prototype,"skidding",2);v([T()],Gn.prototype,"trigger",2);v([T({type:Boolean})],Gn.prototype,"hoist",2);v([Dt("open",{waitUntilFirstUpdate:!0})],Gn.prototype,"handleOpenChange",1);v([Dt(["content","distance","hoist","placement","skidding"])],Gn.prototype,"handleOptionsChange",1);v([Dt("disabled")],Gn.prototype,"handleDisabledChange",1);$e("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});$e("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});Gn.define("sl-tooltip");var c5=Zt`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function Nn(n,i,s){const o=d=>Object.is(d,-0)?0:d;return n<i?o(i):n>s?o(s):o(n)}function t1(n,i=!1){function s(f){const g=f.getChildrenItems({includeDisabled:!1});if(g.length){const w=g.every(C=>C.selected),x=g.every(C=>!C.selected&&!C.indeterminate);f.selected=w,f.indeterminate=!w&&!x}}function o(f){const g=f.parentElement;fu.isTreeItem(g)&&(s(g),o(g))}function d(f){for(const g of f.getChildrenItems())g.selected=i?f.selected||g.selected:!g.disabled&&f.selected,d(g);i&&s(f)}d(n),o(n)}var jo=class extends Pt{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new Oe(this),this.initTreeItem=n=>{n.selectable=this.selection==="multiple",["expand","collapse"].filter(i=>!!this.querySelector(`[slot="${i}-icon"]`)).forEach(i=>{const s=n.querySelector(`[slot="${i}-icon"]`),o=this.getExpandButtonIcon(i);o&&(s===null?n.append(o):s.hasAttribute("data-default")&&s.replaceWith(o))})},this.handleTreeChanged=n=>{for(const i of n){const s=[...i.addedNodes].filter(fu.isTreeItem),o=[...i.removedNodes].filter(fu.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&o.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=n=>{const i=n.relatedTarget;(!i||!this.contains(i))&&(this.tabIndex=0)},this.handleFocusIn=n=>{const i=n.target;n.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),fu.isTreeItem(i)&&!i.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=i,this.tabIndex=-1,i.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this.mutationObserver)==null||n.disconnect()}getExpandButtonIcon(n){const s=(n==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const o=s.cloneNode(!0);return[o,...o.querySelectorAll("[id]")].forEach(d=>d.removeAttribute("id")),o.setAttribute("data-default",""),o.slot=`${n}-icon`,o}return null}selectItem(n){const i=[...this.selectedItems];if(this.selection==="multiple")n.selected=!n.selected,n.lazy&&(n.expanded=!0),t1(n);else if(this.selection==="single"||n.isLeaf){const o=this.getAllTreeItems();for(const d of o)d.selected=d===n}else this.selection==="leaf"&&(n.expanded=!n.expanded);const s=this.selectedItems;(i.length!==s.length||s.some(o=>!i.includes(o)))&&Promise.all(s.map(o=>o.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(n){n==null||n.focus()}handleKeyDown(n){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(n.key)||n.composedPath().some(d=>{var f;return["input","textarea"].includes((f=d==null?void 0:d.tagName)==null?void 0:f.toLowerCase())}))return;const i=this.getFocusableItems(),s=this.localize.dir()==="ltr",o=this.localize.dir()==="rtl";if(i.length>0){n.preventDefault();const d=i.findIndex(x=>x.matches(":focus")),f=i[d],g=x=>{const C=i[Nn(x,0,i.length-1)];this.focusItem(C)},w=x=>{f.expanded=x};n.key==="ArrowDown"?g(d+1):n.key==="ArrowUp"?g(d-1):s&&n.key==="ArrowRight"||o&&n.key==="ArrowLeft"?!f||f.disabled||f.expanded||f.isLeaf&&!f.lazy?g(d+1):w(!0):s&&n.key==="ArrowLeft"||o&&n.key==="ArrowRight"?!f||f.disabled||f.isLeaf||!f.expanded?g(d-1):w(!1):n.key==="Home"?g(0):n.key==="End"?g(i.length-1):(n.key==="Enter"||n.key===" ")&&(f.disabled||this.selectItem(f))}}handleClick(n){const i=n.target,s=i.closest("sl-tree-item"),o=n.composedPath().some(d=>{var f;return(f=d==null?void 0:d.classList)==null?void 0:f.contains("tree-item__expand-button")});!s||s.disabled||i!==this.clickTarget||(o?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(n){this.clickTarget=n.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const n=this.selection==="multiple",i=this.getAllTreeItems();this.setAttribute("aria-multiselectable",n?"true":"false");for(const s of i)s.selectable=n;n&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>t1(s,!0)))}get selectedItems(){const n=this.getAllTreeItems(),i=s=>s.selected;return n.filter(i)}getFocusableItems(){const n=this.getAllTreeItems(),i=new Set;return n.filter(s=>{var o;if(s.disabled)return!1;const d=(o=s.parentElement)==null?void 0:o.closest("[role=treeitem]");return d&&(!d.expanded||d.loading||i.has(d))&&i.add(s),!i.has(s)})}render(){return kt`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};jo.styles=[ee,c5];v([Mt("slot:not([name])")],jo.prototype,"defaultSlot",2);v([Mt("slot[name=expand-icon]")],jo.prototype,"expandedIconSlot",2);v([Mt("slot[name=collapse-icon]")],jo.prototype,"collapsedIconSlot",2);v([T()],jo.prototype,"selection",2);v([Dt("selection")],jo.prototype,"handleSelectionChange",1);jo.define("sl-tree");var u5=Zt`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,_g=class extends Pt{render(){return kt` <slot></slot> `}};_g.styles=[ee,u5];_g.define("sl-visually-hidden");var d5=Zt`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,h5=0,Nu=class extends Pt{constructor(){super(...arguments),this.attrId=++h5,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return kt`
      <slot
        part="base"
        class=${te({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Nu.styles=[ee,d5];v([T({reflect:!0})],Nu.prototype,"name",2);v([T({type:Boolean,reflect:!0})],Nu.prototype,"active",2);v([Dt("active")],Nu.prototype,"handleActiveChange",1);Nu.define("sl-tab-panel");var f5=Zt`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,p5=Zt`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const fw=Symbol.for(""),m5=n=>{if((n==null?void 0:n.r)===fw)return n==null?void 0:n._$litStatic$},Nh=(n,...i)=>({_$litStatic$:i.reduce((s,o,d)=>s+(f=>{if(f._$litStatic$!==void 0)return f._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${f}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+n[d+1],n[0]),r:fw}),e1=new Map,g5=n=>(i,...s)=>{const o=s.length;let d,f;const g=[],w=[];let x,C=0,z=!1;for(;C<o;){for(x=i[C];C<o&&(f=s[C],(d=m5(f))!==void 0);)x+=d+i[++C],z=!0;C!==o&&w.push(f),g.push(x),C++}if(C===o&&g.push(i[o]),z){const S=g.join("$$lit$$");(i=e1.get(S))===void 0&&(g.raw=g,e1.set(S,i=g)),s=w}return n(i,...s)},pu=g5(kt);var $n=class extends Pt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(n){this.disabled&&(n.preventDefault(),n.stopPropagation())}click(){this.button.click()}focus(n){this.button.focus(n)}blur(){this.button.blur()}render(){const n=!!this.href,i=n?Nh`a`:Nh`button`;return pu`
      <${i}
        part="base"
        class=${te({"icon-button":!0,"icon-button--disabled":!n&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Yt(n?void 0:this.disabled)}
        type=${Yt(n?void 0:"button")}
        href=${Yt(n?this.href:void 0)}
        target=${Yt(n?this.target:void 0)}
        download=${Yt(n?this.download:void 0)}
        rel=${Yt(n&&this.target?"noreferrer noopener":void 0)}
        role=${Yt(n?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Yt(this.name)}
          library=${Yt(this.library)}
          src=${Yt(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${i}>
    `}};$n.styles=[ee,p5];$n.dependencies={"sl-icon":Ke};v([Mt(".icon-button")],$n.prototype,"button",2);v([Wt()],$n.prototype,"hasFocus",2);v([T()],$n.prototype,"name",2);v([T()],$n.prototype,"library",2);v([T()],$n.prototype,"src",2);v([T()],$n.prototype,"href",2);v([T()],$n.prototype,"target",2);v([T()],$n.prototype,"download",2);v([T()],$n.prototype,"label",2);v([T({type:Boolean,reflect:!0})],$n.prototype,"disabled",2);var $s=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return kt`
      <span
        part="base"
        class=${te({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?kt`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};$s.styles=[ee,f5];$s.dependencies={"sl-icon-button":$n};v([T({reflect:!0})],$s.prototype,"variant",2);v([T({reflect:!0})],$s.prototype,"size",2);v([T({type:Boolean,reflect:!0})],$s.prototype,"pill",2);v([T({type:Boolean})],$s.prototype,"removable",2);$s.define("sl-tag");var v5=Zt`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,je=class extends Pt{constructor(){super(...arguments),this.formControlController=new Kr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ga(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var n;super.disconnectedCallback(),this.input&&((n=this.resizeObserver)==null||n.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(n){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(n)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(n){this.input.focus(n)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(n){if(n){typeof n.top=="number"&&(this.input.scrollTop=n.top),typeof n.left=="number"&&(this.input.scrollLeft=n.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(n,i,s="none"){this.input.setSelectionRange(n,i,s)}setRangeText(n,i,s,o="preserve"){const d=i??this.input.selectionStart,f=s??this.input.selectionEnd;this.input.setRangeText(n,d,f,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(n){this.input.setCustomValidity(n),this.formControlController.updateValidity()}render(){const n=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),s=this.label?!0:!!n,o=this.helpText?!0:!!i;return kt`
      <div
        part="form-control"
        class=${te({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${te({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${Yt(this.name)}
              .value=${To(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Yt(this.placeholder)}
              rows=${Yt(this.rows)}
              minlength=${Yt(this.minlength)}
              maxlength=${Yt(this.maxlength)}
              autocapitalize=${Yt(this.autocapitalize)}
              autocorrect=${Yt(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${Yt(this.spellcheck)}
              enterkeyhint=${Yt(this.enterkeyhint)}
              inputmode=${Yt(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!=="auto"}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};je.styles=[ee,Oo,v5];v([Mt(".textarea__control")],je.prototype,"input",2);v([Mt(".textarea__size-adjuster")],je.prototype,"sizeAdjuster",2);v([Wt()],je.prototype,"hasFocus",2);v([T()],je.prototype,"title",2);v([T()],je.prototype,"name",2);v([T()],je.prototype,"value",2);v([T({reflect:!0})],je.prototype,"size",2);v([T({type:Boolean,reflect:!0})],je.prototype,"filled",2);v([T()],je.prototype,"label",2);v([T({attribute:"help-text"})],je.prototype,"helpText",2);v([T()],je.prototype,"placeholder",2);v([T({type:Number})],je.prototype,"rows",2);v([T()],je.prototype,"resize",2);v([T({type:Boolean,reflect:!0})],je.prototype,"disabled",2);v([T({type:Boolean,reflect:!0})],je.prototype,"readonly",2);v([T({reflect:!0})],je.prototype,"form",2);v([T({type:Boolean,reflect:!0})],je.prototype,"required",2);v([T({type:Number})],je.prototype,"minlength",2);v([T({type:Number})],je.prototype,"maxlength",2);v([T()],je.prototype,"autocapitalize",2);v([T()],je.prototype,"autocorrect",2);v([T()],je.prototype,"autocomplete",2);v([T({type:Boolean})],je.prototype,"autofocus",2);v([T()],je.prototype,"enterkeyhint",2);v([T({type:Boolean,converter:{fromAttribute:n=>!(!n||n==="false"),toAttribute:n=>n?"true":"false"}})],je.prototype,"spellcheck",2);v([T()],je.prototype,"inputmode",2);v([Fl()],je.prototype,"defaultValue",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],je.prototype,"handleDisabledChange",1);v([Dt("rows",{waitUntilFirstUpdate:!0})],je.prototype,"handleRowsChange",1);v([Dt("value",{waitUntilFirstUpdate:!0})],je.prototype,"handleValueChange",1);je.define("sl-textarea");var b5=Zt`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,y5=0,Ti=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.attrId=++y5,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(n){n.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,kt`
      <div
        part="base"
        class=${te({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?kt`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Ti.styles=[ee,b5];Ti.dependencies={"sl-icon-button":$n};v([Mt(".tab")],Ti.prototype,"tab",2);v([T({reflect:!0})],Ti.prototype,"panel",2);v([T({type:Boolean,reflect:!0})],Ti.prototype,"active",2);v([T({type:Boolean,reflect:!0})],Ti.prototype,"closable",2);v([T({type:Boolean,reflect:!0})],Ti.prototype,"disabled",2);v([T({type:Number,reflect:!0})],Ti.prototype,"tabIndex",2);v([Dt("active")],Ti.prototype,"handleActiveChange",1);v([Dt("disabled")],Ti.prototype,"handleDisabledChange",1);Ti.define("sl-tab");var w5=Zt`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,x5=Zt`
  :host {
    display: contents;
  }
`,Ou=class extends Pt{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(n=>{this.emit("sl-resize",{detail:{entries:n}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const n=this.shadowRoot.querySelector("slot");if(n!==null){const i=n.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],i.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return kt` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ou.styles=[ee,x5];v([T({type:Boolean,reflect:!0})],Ou.prototype,"disabled",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],Ou.prototype,"handleDisabledChange",1);function _5(n,i){return{top:Math.round(n.getBoundingClientRect().top-i.getBoundingClientRect().top),left:Math.round(n.getBoundingClientRect().left-i.getBoundingClientRect().left)}}var Wm=new Set;function S5(){const n=document.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}function k5(){const n=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(n)||!n?0:n}function mu(n){if(Wm.add(n),!document.documentElement.classList.contains("sl-scroll-lock")){const i=S5()+k5();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),i<2&&(s=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${i}px`)}}function gu(n){Wm.delete(n),Wm.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Jm(n,i,s="vertical",o="smooth"){const d=_5(n,i),f=d.top+i.scrollTop,g=d.left+i.scrollLeft,w=i.scrollLeft,x=i.scrollLeft+i.offsetWidth,C=i.scrollTop,z=i.scrollTop+i.offsetHeight;(s==="horizontal"||s==="both")&&(g<w?i.scrollTo({left:g,behavior:o}):g+n.clientWidth>x&&i.scrollTo({left:g-i.offsetWidth+n.clientWidth,behavior:o})),(s==="vertical"||s==="both")&&(f<C?i.scrollTo({top:f,behavior:o}):f+n.clientHeight>z&&i.scrollTo({top:f-i.offsetHeight+n.clientHeight,behavior:o}))}var na=class extends Pt{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new Oe(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const n=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(i=>{const s=i.filter(({target:o})=>{if(o===this)return!0;if(o.closest("sl-tab-group")!==this)return!1;const d=o.tagName.toLowerCase();return d==="sl-tab"||d==="sl-tab-panel"});if(s.length!==0){if(s.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels()),s.some(o=>o.attributeName==="disabled"))this.syncTabsAndPanels();else if(s.some(o=>o.attributeName==="active")){const d=s.filter(f=>f.attributeName==="active"&&f.target.tagName.toLowerCase()==="sl-tab").map(f=>f.target).find(f=>f.active);d&&this.setActiveTab(d)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),n.then(()=>{new IntersectionObserver((s,o)=>{var d;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((d=this.getActiveTab())!=null?d:this.tabs[0],{emitEvents:!1}),o.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var n,i;super.disconnectedCallback(),(n=this.mutationObserver)==null||n.disconnect(),this.nav&&((i=this.resizeObserver)==null||i.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(n=>n.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(n=>n.active)}handleClick(n){const s=n.target.closest("sl-tab");(s==null?void 0:s.closest("sl-tab-group"))===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(n){const s=n.target.closest("sl-tab");if((s==null?void 0:s.closest("sl-tab-group"))===this&&(["Enter"," "].includes(n.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),n.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(n.key))){const d=this.tabs.find(w=>w.matches(":focus")),f=this.localize.dir()==="rtl";let g=null;if((d==null?void 0:d.tagName.toLowerCase())==="sl-tab"){if(n.key==="Home")g=this.focusableTabs[0];else if(n.key==="End")g=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&n.key===(f?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&n.key==="ArrowUp"){const w=this.tabs.findIndex(x=>x===d);g=this.findNextFocusableTab(w,"backward")}else if(["top","bottom"].includes(this.placement)&&n.key===(f?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&n.key==="ArrowDown"){const w=this.tabs.findIndex(x=>x===d);g=this.findNextFocusableTab(w,"forward")}if(!g)return;g.tabIndex=0,g.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(g,{scrollBehavior:"smooth"}):this.tabs.forEach(w=>{w.tabIndex=w===g?0:-1}),["top","bottom"].includes(this.placement)&&Jm(g,this.nav,"horizontal"),n.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(n,i){if(i=Vr({emitEvents:!0,scrollBehavior:"auto"},i),n!==this.activeTab&&!n.disabled){const s=this.activeTab;this.activeTab=n,this.tabs.forEach(o=>{o.active=o===this.activeTab,o.tabIndex=o===this.activeTab?0:-1}),this.panels.forEach(o=>{var d;return o.active=o.name===((d=this.activeTab)==null?void 0:d.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Jm(this.activeTab,this.nav,"horizontal",i.scrollBehavior),i.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(n=>{const i=this.panels.find(s=>s.name===n.panel);i&&(n.setAttribute("aria-controls",i.getAttribute("id")),i.setAttribute("aria-labelledby",n.getAttribute("id")))})}repositionIndicator(){const n=this.getActiveTab();if(!n)return;const i=n.clientWidth,s=n.clientHeight,o=this.localize.dir()==="rtl",d=this.getAllTabs(),g=d.slice(0,d.indexOf(n)).reduce((w,x)=>({left:w.left+x.clientWidth,top:w.top+x.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${i}px`,this.indicator.style.height="auto",this.indicator.style.translate=o?`${-1*g.left}px`:`${g.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${g.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(n=>!n.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(n,i){let s=null;const o=i==="forward"?1:-1;let d=n+o;for(;n<this.tabs.length;){if(s=this.tabs[d]||null,s===null){i==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;d+=o}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(n){const i=this.tabs.find(s=>s.panel===n);i&&this.setActiveTab(i,{scrollBehavior:"smooth"})}render(){const n=this.localize.dir()==="rtl";return kt`
      <div
        part="base"
        class=${te({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?kt`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${te({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${n?"chevron-right":"chevron-left"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?kt`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${te({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${n?"chevron-left":"chevron-right"}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};na.styles=[ee,w5];na.dependencies={"sl-icon-button":$n,"sl-resize-observer":Ou};v([Mt(".tab-group")],na.prototype,"tabGroup",2);v([Mt(".tab-group__body")],na.prototype,"body",2);v([Mt(".tab-group__nav")],na.prototype,"nav",2);v([Mt(".tab-group__indicator")],na.prototype,"indicator",2);v([Wt()],na.prototype,"hasScrollControls",2);v([Wt()],na.prototype,"shouldHideScrollStartButton",2);v([Wt()],na.prototype,"shouldHideScrollEndButton",2);v([T()],na.prototype,"placement",2);v([T()],na.prototype,"activation",2);v([T({attribute:"no-scroll-controls",type:Boolean})],na.prototype,"noScrollControls",2);v([T({attribute:"fixed-scroll-controls",type:Boolean})],na.prototype,"fixedScrollControls",2);v([Au({passive:!0})],na.prototype,"updateScrollButtons",1);v([Dt("noScrollControls",{waitUntilFirstUpdate:!0})],na.prototype,"updateScrollControls",1);v([Dt("placement",{waitUntilFirstUpdate:!0})],na.prototype,"syncIndicator",1);na.define("sl-tab-group");var C5=Zt`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,Sg=class extends Pt{constructor(){super(...arguments),this.effect="none"}render(){return kt`
      <div
        part="base"
        class=${te({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};Sg.styles=[ee,C5];v([T()],Sg.prototype,"effect",2);Sg.define("sl-skeleton");var A5=Zt`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function vu(n,i){function s(d){const f=n.getBoundingClientRect(),g=n.ownerDocument.defaultView,w=f.left+g.scrollX,x=f.top+g.scrollY,C=d.pageX-w,z=d.pageY-x;i!=null&&i.onMove&&i.onMove(C,z)}function o(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",o),i!=null&&i.onStop&&i.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",o),(i==null?void 0:i.initialEvent)instanceof PointerEvent&&s(i.initialEvent)}var n1=()=>null,Ka=class extends Pt{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new Oe(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=n1,this.snapThreshold=12}toSnapFunction(n){const i=n.split(" ");return({pos:s,size:o,snapThreshold:d,isRtl:f,vertical:g})=>{let w=s,x=Number.POSITIVE_INFINITY;return i.forEach(C=>{let z;if(C.startsWith("repeat(")){const E=n.substring(7,n.length-1),j=E.endsWith("%"),D=Number.parseFloat(E),Q=j?o*(D/100):D;z=Math.round((f&&!g?o-s:s)/Q)*Q}else C.endsWith("%")?z=o*(Number.parseFloat(C)/100):z=Number.parseFloat(C);f&&!g&&(z=o-z);const S=Math.abs(s-z);S<=d&&S<x&&(w=z,x=S)}),w}}set snap(n){this.snapValue=n??"",n?this.snapFunction=typeof n=="string"?this.toSnapFunction(n):n:this.snapFunction=n1}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(n=>this.handleResize(n)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this.resizeObserver)==null||n.unobserve(this)}detectSize(){const{width:n,height:i}=this.getBoundingClientRect();this.size=this.vertical?i:n}percentageToPixels(n){return this.size*(n/100)}pixelsToPercentage(n){return n/this.size*100}handleDrag(n){const i=this.localize.dir()==="rtl";this.disabled||(n.cancelable&&n.preventDefault(),vu(this,{onMove:(s,o)=>{var d;let f=this.vertical?o:s;this.primary==="end"&&(f=this.size-f),f=(d=this.snapFunction({pos:f,size:this.size,snapThreshold:this.snapThreshold,isRtl:i,vertical:this.vertical}))!=null?d:f,this.position=Nn(this.pixelsToPercentage(f),0,100)},initialEvent:n}))}handleKeyDown(n){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(n.key)){let i=this.position;const s=(n.shiftKey?10:1)*(this.primary==="end"?-1:1);if(n.preventDefault(),(n.key==="ArrowLeft"&&!this.vertical||n.key==="ArrowUp"&&this.vertical)&&(i-=s),(n.key==="ArrowRight"&&!this.vertical||n.key==="ArrowDown"&&this.vertical)&&(i+=s),n.key==="Home"&&(i=this.primary==="end"?100:0),n.key==="End"&&(i=this.primary==="end"?0:100),n.key==="Enter")if(this.isCollapsed)i=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const o=this.position;i=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=o})}this.position=Nn(i,0,100)}}handleResize(n){const{width:i,height:s}=n[0].contentRect;this.size=this.vertical?s:i,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const n=this.vertical?"gridTemplateRows":"gridTemplateColumns",i=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",o=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,d="auto";return this.primary==="end"?s&&!this.vertical?this.style[n]=`${o} var(--divider-width) ${d}`:this.style[n]=`${d} var(--divider-width) ${o}`:s&&!this.vertical?this.style[n]=`${d} var(--divider-width) ${o}`:this.style[n]=`${o} var(--divider-width) ${d}`,this.style[i]="",kt`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${Yt(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};Ka.styles=[ee,A5];v([Mt(".divider")],Ka.prototype,"divider",2);v([T({type:Number,reflect:!0})],Ka.prototype,"position",2);v([T({attribute:"position-in-pixels",type:Number})],Ka.prototype,"positionInPixels",2);v([T({type:Boolean,reflect:!0})],Ka.prototype,"vertical",2);v([T({type:Boolean,reflect:!0})],Ka.prototype,"disabled",2);v([T()],Ka.prototype,"primary",2);v([T({reflect:!0})],Ka.prototype,"snap",1);v([T({type:Number,attribute:"snap-threshold"})],Ka.prototype,"snapThreshold",2);v([Dt("position")],Ka.prototype,"handlePositionChange",1);v([Dt("positionInPixels")],Ka.prototype,"handlePositionInPixelsChange",1);v([Dt("vertical")],Ka.prototype,"handleVerticalChange",1);Ka.define("sl-split-panel");var T5=Zt`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,oa=class extends Pt{constructor(){super(...arguments),this.formControlController=new Kr(this,{value:n=>n.checked?n.value||"on":void 0,defaultValue:n=>n.defaultChecked,setValue:(n,i)=>n.checked=i}),this.hasSlotController=new ga(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(n){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(n)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(n){n.key==="ArrowLeft"&&(n.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),n.key==="ArrowRight"&&(n.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(n){this.input.focus(n)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(n){this.input.setCustomValidity(n),this.formControlController.updateValidity()}render(){const n=this.hasSlotController.test("help-text"),i=this.helpText?!0:!!n;return kt`
      <div
        class=${te({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":i})}
      >
        <label
          part="base"
          class=${te({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${Yt(this.value)}
            .checked=${To(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?"true":"false"}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${i?"false":"true"}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};oa.styles=[ee,Oo,T5];v([Mt('input[type="checkbox"]')],oa.prototype,"input",2);v([Wt()],oa.prototype,"hasFocus",2);v([T()],oa.prototype,"title",2);v([T()],oa.prototype,"name",2);v([T()],oa.prototype,"value",2);v([T({reflect:!0})],oa.prototype,"size",2);v([T({type:Boolean,reflect:!0})],oa.prototype,"disabled",2);v([T({type:Boolean,reflect:!0})],oa.prototype,"checked",2);v([Fl("checked")],oa.prototype,"defaultChecked",2);v([T({reflect:!0})],oa.prototype,"form",2);v([T({type:Boolean,reflect:!0})],oa.prototype,"required",2);v([T({attribute:"help-text"})],oa.prototype,"helpText",2);v([Dt("checked",{waitUntilFirstUpdate:!0})],oa.prototype,"handleCheckedChange",1);v([Dt("disabled",{waitUntilFirstUpdate:!0})],oa.prototype,"handleDisabledChange",1);oa.define("sl-switch");Ou.define("sl-resize-observer");var E5=Zt`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tg=class extends Eu{constructor(i){if(super(i),this.it=an,i.type!==tr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===an||i==null)return this._t=void 0,this.it=i;if(i===Va)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this._t;this.it=i;const s=[i];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};tg.directiveName="unsafeHTML",tg.resultType=1;const _h=Tu(tg);var Ce=class extends Pt{constructor(){super(...arguments),this.formControlController=new Kr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ga(this,"help-text","label"),this.localize=new Oe(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=n=>kt`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${i=>this.handleTagRemove(i,n)}
      >
        ${n.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=n=>{const i=n.composedPath();this&&!i.includes(this)&&this.hide()},this.handleDocumentKeyDown=n=>{const i=n.target,s=i.closest(".select__clear")!==null,o=i.closest("sl-icon-button")!==null;if(!(s||o)){if(n.key==="Escape"&&this.open&&!this.closeWatcher&&(n.preventDefault(),n.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),n.key==="Enter"||n.key===" "&&this.typeToSelectString===""){if(n.preventDefault(),n.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(n.key)){const d=this.getAllOptions(),f=d.indexOf(this.currentOption);let g=Math.max(0,f);if(n.preventDefault(),!this.open&&(this.show(),this.currentOption))return;n.key==="ArrowDown"?(g=f+1,g>d.length-1&&(g=0)):n.key==="ArrowUp"?(g=f-1,g<0&&(g=d.length-1)):n.key==="Home"?g=0:n.key==="End"&&(g=d.length-1),this.setCurrentOption(d[g])}if(n.key&&n.key.length===1||n.key==="Backspace"){const d=this.getAllOptions();if(n.metaKey||n.ctrlKey||n.altKey)return;if(!this.open){if(n.key==="Backspace")return;this.show()}n.stopPropagation(),n.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),n.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=n.key.toLowerCase();for(const f of d)if(f.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(f);break}}}},this.handleDocumentMouseDown=n=>{const i=n.composedPath();this&&!i.includes(this)&&this.hide()}}get value(){return this._value}set value(n){this.multiple?n=Array.isArray(n)?n:n.split(" "):n=Array.isArray(n)?n.join(" "):n,this._value!==n&&(this.valueHasChanged=!0,this._value=n)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var n;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((n=this.closeWatcher)==null||n.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var n;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(n=this.closeWatcher)==null||n.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(n){const s=n.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(n.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(n){n.key!=="Tab"&&(n.stopPropagation(),this.handleDocumentKeyDown(n))}handleClearClick(n){n.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(n){n.stopPropagation(),n.preventDefault()}handleOptionClick(n){const s=n.target.closest("sl-option"),o=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==o&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const n=this.getAllOptions(),i=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(i)?i:[i],o=[];n.forEach(d=>o.push(d.value)),this.setSelectedOptions(n.filter(d=>s.includes(d.value)))}handleTagRemove(n,i){n.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(i,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(n){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),n&&(this.currentOption=n,n.current=!0,n.tabIndex=0,n.focus())}setSelectedOptions(n){const i=this.getAllOptions(),s=Array.isArray(n)?n:[n];i.forEach(o=>o.selected=!1),s.length&&s.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(n,i){i===!0||i===!1?n.selected=i:n.selected=!n.selected,this.selectionChanged()}selectionChanged(){var n,i,s;const o=this.getAllOptions();this.selectedOptions=o.filter(f=>f.selected);const d=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(f=>f.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const f=this.selectedOptions[0];this.value=(n=f==null?void 0:f.value)!=null?n:"",this.displayLabel=(s=(i=f==null?void 0:f.getTextLabel)==null?void 0:i.call(f))!=null?s:""}this.valueHasChanged=d,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((n,i)=>{if(i<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(n,i);return kt`<div @sl-remove=${o=>this.handleTagRemove(o,n)}>
          ${typeof s=="string"?_h(s):s}
        </div>`}else if(i===this.maxOptionsVisible)return kt`<sl-tag size=${this.size}>+${this.selectedOptions.length-i}</sl-tag>`;return kt``})}handleInvalid(n){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(n)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(n,i,s){if(super.attributeChangedCallback(n,i,s),n==="value"){const o=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=o}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const n=this.getAllOptions(),i=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(n.filter(s=>i.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await On(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:n,options:i}=rn(this,"select.show",{dir:this.localize.dir()});await vn(this.popup.popup,n,i),this.currentOption&&Jm(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await On(this);const{keyframes:n,options:i}=rn(this,"select.hide",{dir:this.localize.dir()});await vn(this.popup.popup,n,i),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ma(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ma(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(n){this.valueInput.setCustomValidity(n),this.formControlController.updateValidity()}focus(n){this.displayInput.focus(n)}blur(){this.displayInput.blur()}render(){const n=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),s=this.label?!0:!!n,o=this.helpText?!0:!!i,d=this.clearable&&!this.disabled&&this.value.length>0,f=this.placeholder&&this.value&&this.value.length<=0;return kt`
      <div
        part="form-control"
        class=${te({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":o})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${te({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":f,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?kt`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${d?kt`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};Ce.styles=[ee,Oo,E5];Ce.dependencies={"sl-icon":Ke,"sl-popup":Le,"sl-tag":$s};v([Mt(".select")],Ce.prototype,"popup",2);v([Mt(".select__combobox")],Ce.prototype,"combobox",2);v([Mt(".select__display-input")],Ce.prototype,"displayInput",2);v([Mt(".select__value-input")],Ce.prototype,"valueInput",2);v([Mt(".select__listbox")],Ce.prototype,"listbox",2);v([Wt()],Ce.prototype,"hasFocus",2);v([Wt()],Ce.prototype,"displayLabel",2);v([Wt()],Ce.prototype,"currentOption",2);v([Wt()],Ce.prototype,"selectedOptions",2);v([Wt()],Ce.prototype,"valueHasChanged",2);v([T()],Ce.prototype,"name",2);v([Wt()],Ce.prototype,"value",1);v([T({attribute:"value"})],Ce.prototype,"defaultValue",2);v([T({reflect:!0})],Ce.prototype,"size",2);v([T()],Ce.prototype,"placeholder",2);v([T({type:Boolean,reflect:!0})],Ce.prototype,"multiple",2);v([T({attribute:"max-options-visible",type:Number})],Ce.prototype,"maxOptionsVisible",2);v([T({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);v([T({type:Boolean})],Ce.prototype,"clearable",2);v([T({type:Boolean,reflect:!0})],Ce.prototype,"open",2);v([T({type:Boolean})],Ce.prototype,"hoist",2);v([T({type:Boolean,reflect:!0})],Ce.prototype,"filled",2);v([T({type:Boolean,reflect:!0})],Ce.prototype,"pill",2);v([T()],Ce.prototype,"label",2);v([T({reflect:!0})],Ce.prototype,"placement",2);v([T({attribute:"help-text"})],Ce.prototype,"helpText",2);v([T({reflect:!0})],Ce.prototype,"form",2);v([T({type:Boolean,reflect:!0})],Ce.prototype,"required",2);v([T()],Ce.prototype,"getTag",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleDisabledChange",1);v([Dt(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Ce.prototype,"handleValueChange",1);v([Dt("open",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleOpenChange",1);$e("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});$e("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Ce.define("sl-select");zu.define("sl-spinner");var z5=Zt`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,dn=class extends Pt{constructor(){super(...arguments),this.formControlController=new Kr(this),this.hasSlotController=new ga(this,"help-text","label"),this.localize=new Oe(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=n=>n.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this.resizeObserver)==null||n.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(n){this.input.style.setProperty("--percent",`${n*100}%`)}syncTooltip(n){if(this.output!==null){const i=this.input.offsetWidth,s=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),d=this.localize.dir()==="rtl",f=i*n;if(d){const g=`${i-f}px + ${n} * ${o}`;this.output.style.translate=`calc((${g} - ${s/2}px - ${o} / 2))`}else{const g=`${f}px - ${n} * ${o}`;this.output.style.translate=`calc(${g} - ${s/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const n=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(n),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(n))}handleInvalid(n){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(n)}focus(n){this.input.focus(n)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(n){this.input.setCustomValidity(n),this.formControlController.updateValidity()}render(){const n=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),s=this.label?!0:!!n,o=this.helpText?!0:!!i;return kt`
      <div
        part="form-control"
        class=${te({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${te({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${Yt(this.name)}
              ?disabled=${this.disabled}
              min=${Yt(this.min)}
              max=${Yt(this.max)}
              step=${Yt(this.step)}
              .value=${To(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?kt`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter=="function"?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:""}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};dn.styles=[ee,Oo,z5];v([Mt(".range__control")],dn.prototype,"input",2);v([Mt(".range__tooltip")],dn.prototype,"output",2);v([Wt()],dn.prototype,"hasFocus",2);v([Wt()],dn.prototype,"hasTooltip",2);v([T()],dn.prototype,"title",2);v([T()],dn.prototype,"name",2);v([T({type:Number})],dn.prototype,"value",2);v([T()],dn.prototype,"label",2);v([T({attribute:"help-text"})],dn.prototype,"helpText",2);v([T({type:Boolean,reflect:!0})],dn.prototype,"disabled",2);v([T({type:Number})],dn.prototype,"min",2);v([T({type:Number})],dn.prototype,"max",2);v([T({type:Number})],dn.prototype,"step",2);v([T()],dn.prototype,"tooltip",2);v([T({attribute:!1})],dn.prototype,"tooltipFormatter",2);v([T({reflect:!0})],dn.prototype,"form",2);v([Fl()],dn.prototype,"defaultValue",2);v([Au({passive:!0})],dn.prototype,"handleThumbDragStart",1);v([Dt("value",{waitUntilFirstUpdate:!0})],dn.prototype,"handleValueChange",1);v([Dt("disabled",{waitUntilFirstUpdate:!0})],dn.prototype,"handleDisabledChange",1);v([Dt("hasTooltip",{waitUntilFirstUpdate:!0})],dn.prototype,"syncRange",1);dn.define("sl-range");var N5=Zt`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pw="important",O5=" !"+pw,ka=Tu(class extends Eu{constructor(n){var i;if(super(n),n.type!==tr.ATTRIBUTE||n.name!=="style"||((i=n.strings)==null?void 0:i.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((i,s)=>{const o=n[s];return o==null?i:i+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(n,[i]){const{style:s}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(i)),this.render(i);for(const o of this.ft)i[o]==null&&(this.ft.delete(o),o.includes("-")?s.removeProperty(o):s[o]=null);for(const o in i){const d=i[o];if(d!=null){this.ft.add(o);const f=typeof d=="string"&&d.endsWith(O5);o.includes("-")||f?s.setProperty(o,f?d.slice(0,-11):d,f?pw:""):s[o]=d}}return Va}});var la=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(n){return this.getValueFromXCoordinate(n.clientX)}getValueFromTouchPosition(n){return this.getValueFromXCoordinate(n.touches[0].clientX)}getValueFromXCoordinate(n){const i=this.localize.dir()==="rtl",{left:s,right:o,width:d}=this.rating.getBoundingClientRect(),f=i?this.roundToPrecision((o-n)/d*this.max,this.precision):this.roundToPrecision((n-s)/d*this.max,this.precision);return Nn(f,0,this.max)}handleClick(n){this.disabled||(this.setValue(this.getValueFromMousePosition(n)),this.emit("sl-change"))}setValue(n){this.disabled||this.readonly||(this.value=n===this.value?0:n,this.isHovering=!1)}handleKeyDown(n){const i=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",o=this.value;if(!(this.disabled||this.readonly)){if(n.key==="ArrowDown"||i&&n.key==="ArrowLeft"||s&&n.key==="ArrowRight"){const d=n.shiftKey?1:this.precision;this.value=Math.max(0,this.value-d),n.preventDefault()}if(n.key==="ArrowUp"||i&&n.key==="ArrowRight"||s&&n.key==="ArrowLeft"){const d=n.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+d),n.preventDefault()}n.key==="Home"&&(this.value=0,n.preventDefault()),n.key==="End"&&(this.value=this.max,n.preventDefault()),this.value!==o&&this.emit("sl-change")}}handleMouseEnter(n){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(n)}handleMouseMove(n){this.hoverValue=this.getValueFromMousePosition(n)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(n){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(n),n.preventDefault()}handleTouchMove(n){this.hoverValue=this.getValueFromTouchPosition(n)}handleTouchEnd(n){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),n.preventDefault()}roundToPrecision(n,i=.5){const s=1/i;return Math.ceil(n*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(n){this.rating.focus(n)}blur(){this.rating.blur()}render(){const n=this.localize.dir()==="rtl",i=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,kt`
      <div
        part="base"
        class=${te({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":n})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?"true":"false"}
        aria-readonly=${this.readonly?"true":"false"}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?"-1":"0"}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${i.map(o=>s>o&&s<o+1?kt`
                <span
                  class=${te({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===o+1})}
                  role="presentation"
                >
                  <div
                    style=${ka({clipPath:n?`inset(0 ${(s-o)*100}% 0 0)`:`inset(0 0 0 ${(s-o)*100}%)`})}
                  >
                    ${_h(this.getSymbol(o+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${ka({clipPath:n?`inset(0 0 0 ${100-(s-o)*100}%)`:`inset(0 ${100-(s-o)*100}% 0 0)`})}
                  >
                    ${_h(this.getSymbol(o+1))}
                  </div>
                </span>
              `:kt`
              <span
                class=${te({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===o+1,"rating__symbol--active":s>=o+1})}
                role="presentation"
              >
                ${_h(this.getSymbol(o+1))}
              </span>
            `)}
        </span>
      </div>
    `}};la.styles=[ee,N5];la.dependencies={"sl-icon":Ke};v([Mt(".rating")],la.prototype,"rating",2);v([Wt()],la.prototype,"hoverValue",2);v([Wt()],la.prototype,"isHovering",2);v([T()],la.prototype,"label",2);v([T({type:Number})],la.prototype,"value",2);v([T({type:Number})],la.prototype,"max",2);v([T({type:Number})],la.prototype,"precision",2);v([T({type:Boolean,reflect:!0})],la.prototype,"readonly",2);v([T({type:Boolean,reflect:!0})],la.prototype,"disabled",2);v([T()],la.prototype,"getSymbol",2);v([Au({passive:!0})],la.prototype,"handleTouchMove",1);v([Dt("hoverValue")],la.prototype,"handleHoverValueChange",1);v([Dt("isHovering")],la.prototype,"handleIsHoveringChange",1);la.define("sl-rating");var j5=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],Do=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const n=new Date,i=new Date(this.date);if(isNaN(i.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=i.getTime()-n.getTime(),{unit:o,value:d}=j5.find(f=>Math.abs(s)<f.max);if(this.isoTime=i.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(s/d),o,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let f;o==="minute"?f=fh("second"):o==="hour"?f=fh("minute"):o==="day"?f=fh("hour"):f=fh("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),f)}return kt` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};v([Wt()],Do.prototype,"isoTime",2);v([Wt()],Do.prototype,"relativeTime",2);v([T()],Do.prototype,"date",2);v([T()],Do.prototype,"format",2);v([T()],Do.prototype,"numeric",2);v([T({type:Boolean})],Do.prototype,"sync",2);function fh(n){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[n];return s-Date.now()%s}Do.define("sl-relative-time");var mw=Zt`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,D5=Zt`
  ${mw}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,Ei=class extends Pt{constructor(){super(...arguments),this.hasSlotController=new ga(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(n){if(this.disabled){n.preventDefault(),n.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(n){this.input.focus(n)}blur(){this.input.blur()}render(){return pu`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${te({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${Yt(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Ei.styles=[ee,D5];v([Mt(".button")],Ei.prototype,"input",2);v([Mt(".hidden-input")],Ei.prototype,"hiddenInput",2);v([Wt()],Ei.prototype,"hasFocus",2);v([T({type:Boolean,reflect:!0})],Ei.prototype,"checked",2);v([T()],Ei.prototype,"value",2);v([T({type:Boolean,reflect:!0})],Ei.prototype,"disabled",2);v([T({reflect:!0})],Ei.prototype,"size",2);v([T({type:Boolean,reflect:!0})],Ei.prototype,"pill",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],Ei.prototype,"handleDisabledChange",1);Ei.define("sl-radio-button");var R5=Zt`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,M5=Zt`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ro=class extends Pt{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(n){const i=ru(n.target);i==null||i.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(n){const i=ru(n.target);i==null||i.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(n){const i=ru(n.target);i==null||i.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(n){const i=ru(n.target);i==null||i.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const n=[...this.defaultSlot.assignedElements({flatten:!0})];n.forEach(i=>{const s=n.indexOf(i),o=ru(i);o&&(o.toggleAttribute("data-sl-button-group__button",!0),o.toggleAttribute("data-sl-button-group__button--first",s===0),o.toggleAttribute("data-sl-button-group__button--inner",s>0&&s<n.length-1),o.toggleAttribute("data-sl-button-group__button--last",s===n.length-1),o.toggleAttribute("data-sl-button-group__button--radio",o.tagName.toLowerCase()==="sl-radio-button"))})}render(){return kt`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Ro.styles=[ee,M5];v([Mt("slot")],Ro.prototype,"defaultSlot",2);v([Wt()],Ro.prototype,"disableRole",2);v([T()],Ro.prototype,"label",2);function ru(n){var i;const s="sl-button, sl-radio-button";return(i=n.closest(s))!=null?i:n.querySelector(s)}var aa=class extends Pt{constructor(){super(...arguments),this.formControlController=new Kr(this),this.hasSlotController=new ga(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const n=this.required&&!this.value;return this.customValidityMessage!==""?sC:n?rC:Bh}get validationMessage(){const n=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:n?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(n){const i=n.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),o=this.value;!i||i.disabled||(this.value=i.value,s.forEach(d=>d.checked=d===i),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(n){var i;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(n.key))return;const s=this.getAllRadios().filter(w=>!w.disabled),o=(i=s.find(w=>w.checked))!=null?i:s[0],d=n.key===" "?0:["ArrowUp","ArrowLeft"].includes(n.key)?-1:1,f=this.value;let g=s.indexOf(o)+d;g<0&&(g=s.length-1),g>s.length-1&&(g=0),this.getAllRadios().forEach(w=>{w.checked=!1,this.hasButtonGroup||w.setAttribute("tabindex","-1")}),this.value=s[g].value,s[g].checked=!0,this.hasButtonGroup?s[g].shadowRoot.querySelector("button").focus():(s[g].setAttribute("tabindex","0"),s[g].focus()),this.value!==f&&(this.emit("sl-change"),this.emit("sl-input")),n.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(n){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(n)}async syncRadioElements(){var n,i;const s=this.getAllRadios();if(await Promise.all(s.map(async o=>{await o.updateComplete,o.checked=o.value===this.value,o.size=this.size})),this.hasButtonGroup=s.some(o=>o.tagName.toLowerCase()==="sl-radio-button"),s.length>0&&!s.some(o=>o.checked))if(this.hasButtonGroup){const o=(n=s[0].shadowRoot)==null?void 0:n.querySelector("button");o&&o.setAttribute("tabindex","0")}else s[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const o=(i=this.shadowRoot)==null?void 0:i.querySelector("sl-button-group");o&&(o.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(i=>i.checked=i.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const n=this.required&&!this.value,i=this.customValidityMessage!=="";return n||i?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const n=this.validity.valid;return this.errorMessage=this.customValidityMessage||n?"":this.validationInput.validationMessage,this.formControlController.setValidity(n),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),n||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),n}setCustomValidity(n=""){this.customValidityMessage=n,this.errorMessage=n,this.validationInput.setCustomValidity(n),this.formControlController.updateValidity()}focus(n){const i=this.getAllRadios(),s=i.find(f=>f.checked),o=i.find(f=>!f.disabled),d=s||o;d&&d.focus(n)}render(){const n=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),s=this.label?!0:!!n,o=this.helpText?!0:!!i,d=kt`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return kt`
      <fieldset
        part="form-control"
        class=${te({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":o})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${s?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?kt`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${d}
                </sl-button-group>
              `:d}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};aa.styles=[ee,Oo,R5];aa.dependencies={"sl-button-group":Ro};v([Mt("slot:not([name])")],aa.prototype,"defaultSlot",2);v([Mt(".radio-group__validation-input")],aa.prototype,"validationInput",2);v([Wt()],aa.prototype,"hasButtonGroup",2);v([Wt()],aa.prototype,"errorMessage",2);v([Wt()],aa.prototype,"defaultValue",2);v([T()],aa.prototype,"label",2);v([T({attribute:"help-text"})],aa.prototype,"helpText",2);v([T()],aa.prototype,"name",2);v([T({reflect:!0})],aa.prototype,"value",2);v([T({reflect:!0})],aa.prototype,"size",2);v([T({reflect:!0})],aa.prototype,"form",2);v([T({type:Boolean,reflect:!0})],aa.prototype,"required",2);v([Dt("size",{waitUntilFirstUpdate:!0})],aa.prototype,"handleSizeChange",1);v([Dt("value")],aa.prototype,"handleValueChange",1);aa.define("sl-radio-group");var $5=Zt`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ql=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.value=0,this.label=""}updated(n){if(super.updated(n),n.has("value")){const i=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*i,o=s-this.value/100*s;this.indicatorOffset=`${o}px`}}render(){return kt`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Ql.styles=[ee,$5];v([Mt(".progress-ring__indicator")],Ql.prototype,"indicator",2);v([Wt()],Ql.prototype,"indicatorOffset",2);v([T({type:Number,reflect:!0})],Ql.prototype,"value",2);v([T()],Ql.prototype,"label",2);Ql.define("sl-progress-ring");var L5=Zt`
  :host {
    display: inline-block;
  }
`;let gw=null;class vw{}vw.render=function(n,i){gw(n,i)};self.QrCreator=vw;(function(n){function i(w,x,C,z){var S={},E=n(C,x);E.u(w),E.J(),z=z||0;var j=E.h(),D=E.h()+2*z;return S.text=w,S.level=x,S.version=C,S.O=D,S.a=function(Q,nt){return Q-=z,nt-=z,0>Q||Q>=j||0>nt||nt>=j?!1:E.a(Q,nt)},S}function s(w,x,C,z,S,E,j,D,Q,nt){function Et(ut,Ct,rt,dt,xt,wt,vt){ut?(w.lineTo(Ct+wt,rt+vt),w.arcTo(Ct,rt,dt,xt,E)):w.lineTo(Ct,rt)}j?w.moveTo(x+E,C):w.moveTo(x,C),Et(D,z,C,z,S,-E,0),Et(Q,z,S,x,S,0,-E),Et(nt,x,S,x,C,E,0),Et(j,x,C,z,C,0,E)}function o(w,x,C,z,S,E,j,D,Q,nt){function Et(ut,Ct,rt,dt){w.moveTo(ut+rt,Ct),w.lineTo(ut,Ct),w.lineTo(ut,Ct+dt),w.arcTo(ut,Ct,ut+rt,Ct,E)}j&&Et(x,C,E,E),D&&Et(z,C,-E,E),Q&&Et(z,S,-E,-E),nt&&Et(x,S,E,-E)}function d(w,x){var C=x.fill;if(typeof C=="string")w.fillStyle=C;else{var z=C.type,S=C.colorStops;if(C=C.position.map(j=>Math.round(j*x.size)),z==="linear-gradient")var E=w.createLinearGradient.apply(w,C);else if(z==="radial-gradient")E=w.createRadialGradient.apply(w,C);else throw Error("Unsupported fill");S.forEach(([j,D])=>{E.addColorStop(j,D)}),w.fillStyle=E}}function f(w,x){t:{var C=x.text,z=x.v,S=x.N,E=x.K,j=x.P;for(S=Math.max(1,S||1),E=Math.min(40,E||40);S<=E;S+=1)try{var D=i(C,z,S,j);break t}catch{}D=void 0}if(!D)return null;for(C=w.getContext("2d"),x.background&&(C.fillStyle=x.background,C.fillRect(x.left,x.top,x.size,x.size)),z=D.O,E=x.size/z,C.beginPath(),j=0;j<z;j+=1)for(S=0;S<z;S+=1){var Q=C,nt=x.left+S*E,Et=x.top+j*E,ut=j,Ct=S,rt=D.a,dt=nt+E,xt=Et+E,wt=ut-1,vt=ut+1,ot=Ct-1,gt=Ct+1,Qt=Math.floor(Math.min(.5,Math.max(0,x.R))*E),oe=rt(ut,Ct),de=rt(wt,ot),Ne=rt(wt,Ct);wt=rt(wt,gt);var ve=rt(ut,gt);gt=rt(vt,gt),Ct=rt(vt,Ct),vt=rt(vt,ot),ut=rt(ut,ot),nt=Math.round(nt),Et=Math.round(Et),dt=Math.round(dt),xt=Math.round(xt),oe?s(Q,nt,Et,dt,xt,Qt,!Ne&&!ut,!Ne&&!ve,!Ct&&!ve,!Ct&&!ut):o(Q,nt,Et,dt,xt,Qt,Ne&&ut&&de,Ne&&ve&&wt,Ct&&ve&&gt,Ct&&ut&&vt)}return d(C,x),C.fill(),w}var g={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};gw=function(w,x){var C={};Object.assign(C,g,w),C.N=C.minVersion,C.K=C.maxVersion,C.v=C.ecLevel,C.left=C.left,C.top=C.top,C.size=C.size,C.fill=C.fill,C.background=C.background,C.text=C.text,C.R=C.radius,C.P=C.quiet,x instanceof HTMLCanvasElement?((x.width!==C.size||x.height!==C.size)&&(x.width=C.size,x.height=C.size),x.getContext("2d").clearRect(0,0,x.width,x.height),f(x,C)):(w=document.createElement("canvas"),w.width=C.size,w.height=C.size,C=f(w,C),x.appendChild(C))}})((function(){function n(x){var C=s.s(x);return{S:function(){return 4},b:function(){return C.length},write:function(z){for(var S=0;S<C.length;S+=1)z.put(C[S],8)}}}function i(){var x=[],C=0,z={B:function(){return x},c:function(S){return(x[Math.floor(S/8)]>>>7-S%8&1)==1},put:function(S,E){for(var j=0;j<E;j+=1)z.m((S>>>E-j-1&1)==1)},f:function(){return C},m:function(S){var E=Math.floor(C/8);x.length<=E&&x.push(0),S&&(x[E]|=128>>>C%8),C+=1}};return z}function s(x,C){function z(ut,Ct){for(var rt=-1;7>=rt;rt+=1)if(!(-1>=ut+rt||D<=ut+rt))for(var dt=-1;7>=dt;dt+=1)-1>=Ct+dt||D<=Ct+dt||(j[ut+rt][Ct+dt]=0<=rt&&6>=rt&&(dt==0||dt==6)||0<=dt&&6>=dt&&(rt==0||rt==6)||2<=rt&&4>=rt&&2<=dt&&4>=dt)}function S(ut,Ct){for(var rt=D=4*x+17,dt=Array(rt),xt=0;xt<rt;xt+=1){dt[xt]=Array(rt);for(var wt=0;wt<rt;wt+=1)dt[xt][wt]=null}for(j=dt,z(0,0),z(D-7,0),z(0,D-7),rt=f.G(x),dt=0;dt<rt.length;dt+=1)for(xt=0;xt<rt.length;xt+=1){wt=rt[dt];var vt=rt[xt];if(j[wt][vt]==null)for(var ot=-2;2>=ot;ot+=1)for(var gt=-2;2>=gt;gt+=1)j[wt+ot][vt+gt]=ot==-2||ot==2||gt==-2||gt==2||ot==0&&gt==0}for(rt=8;rt<D-8;rt+=1)j[rt][6]==null&&(j[rt][6]=rt%2==0);for(rt=8;rt<D-8;rt+=1)j[6][rt]==null&&(j[6][rt]=rt%2==0);for(rt=f.w(E<<3|Ct),dt=0;15>dt;dt+=1)xt=!ut&&(rt>>dt&1)==1,j[6>dt?dt:8>dt?dt+1:D-15+dt][8]=xt,j[8][8>dt?D-dt-1:9>dt?15-dt:14-dt]=xt;if(j[D-8][8]=!ut,7<=x){for(rt=f.A(x),dt=0;18>dt;dt+=1)xt=!ut&&(rt>>dt&1)==1,j[Math.floor(dt/3)][dt%3+D-8-3]=xt;for(dt=0;18>dt;dt+=1)xt=!ut&&(rt>>dt&1)==1,j[dt%3+D-8-3][Math.floor(dt/3)]=xt}if(Q==null){for(ut=w.I(x,E),rt=i(),dt=0;dt<nt.length;dt+=1)xt=nt[dt],rt.put(4,4),rt.put(xt.b(),f.f(4,x)),xt.write(rt);for(dt=xt=0;dt<ut.length;dt+=1)xt+=ut[dt].j;if(rt.f()>8*xt)throw Error("code length overflow. ("+rt.f()+">"+8*xt+")");for(rt.f()+4<=8*xt&&rt.put(0,4);rt.f()%8!=0;)rt.m(!1);for(;!(rt.f()>=8*xt)&&(rt.put(236,8),!(rt.f()>=8*xt));)rt.put(17,8);var Qt=0;for(xt=dt=0,wt=Array(ut.length),vt=Array(ut.length),ot=0;ot<ut.length;ot+=1){var oe=ut[ot].j,de=ut[ot].o-oe;for(dt=Math.max(dt,oe),xt=Math.max(xt,de),wt[ot]=Array(oe),gt=0;gt<wt[ot].length;gt+=1)wt[ot][gt]=255&rt.B()[gt+Qt];for(Qt+=oe,gt=f.C(de),oe=o(wt[ot],gt.b()-1).l(gt),vt[ot]=Array(gt.b()-1),gt=0;gt<vt[ot].length;gt+=1)de=gt+oe.b()-vt[ot].length,vt[ot][gt]=0<=de?oe.c(de):0}for(gt=rt=0;gt<ut.length;gt+=1)rt+=ut[gt].o;for(rt=Array(rt),gt=Qt=0;gt<dt;gt+=1)for(ot=0;ot<ut.length;ot+=1)gt<wt[ot].length&&(rt[Qt]=wt[ot][gt],Qt+=1);for(gt=0;gt<xt;gt+=1)for(ot=0;ot<ut.length;ot+=1)gt<vt[ot].length&&(rt[Qt]=vt[ot][gt],Qt+=1);Q=rt}for(ut=Q,rt=-1,dt=D-1,xt=7,wt=0,Ct=f.F(Ct),vt=D-1;0<vt;vt-=2)for(vt==6&&--vt;;){for(ot=0;2>ot;ot+=1)j[dt][vt-ot]==null&&(gt=!1,wt<ut.length&&(gt=(ut[wt]>>>xt&1)==1),Ct(dt,vt-ot)&&(gt=!gt),j[dt][vt-ot]=gt,--xt,xt==-1&&(wt+=1,xt=7));if(dt+=rt,0>dt||D<=dt){dt-=rt,rt=-rt;break}}}var E=d[C],j=null,D=0,Q=null,nt=[],Et={u:function(ut){ut=n(ut),nt.push(ut),Q=null},a:function(ut,Ct){if(0>ut||D<=ut||0>Ct||D<=Ct)throw Error(ut+","+Ct);return j[ut][Ct]},h:function(){return D},J:function(){for(var ut=0,Ct=0,rt=0;8>rt;rt+=1){S(!0,rt);var dt=f.D(Et);(rt==0||ut>dt)&&(ut=dt,Ct=rt)}S(!1,Ct)}};return Et}function o(x,C){if(typeof x.length>"u")throw Error(x.length+"/"+C);var z=(function(){for(var E=0;E<x.length&&x[E]==0;)E+=1;for(var j=Array(x.length-E+C),D=0;D<x.length-E;D+=1)j[D]=x[D+E];return j})(),S={c:function(E){return z[E]},b:function(){return z.length},multiply:function(E){for(var j=Array(S.b()+E.b()-1),D=0;D<S.b();D+=1)for(var Q=0;Q<E.b();Q+=1)j[D+Q]^=g.i(g.g(S.c(D))+g.g(E.c(Q)));return o(j,0)},l:function(E){if(0>S.b()-E.b())return S;for(var j=g.g(S.c(0))-g.g(E.c(0)),D=Array(S.b()),Q=0;Q<S.b();Q+=1)D[Q]=S.c(Q);for(Q=0;Q<E.b();Q+=1)D[Q]^=g.i(g.g(E.c(Q))+j);return o(D,0).l(E)}};return S}s.s=function(x){for(var C=[],z=0;z<x.length;z++){var S=x.charCodeAt(z);128>S?C.push(S):2048>S?C.push(192|S>>6,128|S&63):55296>S||57344<=S?C.push(224|S>>12,128|S>>6&63,128|S&63):(z++,S=65536+((S&1023)<<10|x.charCodeAt(z)&1023),C.push(240|S>>18,128|S>>12&63,128|S>>6&63,128|S&63))}return C};var d={L:1,M:0,Q:3,H:2},f=(function(){function x(S){for(var E=0;S!=0;)E+=1,S>>>=1;return E}var C=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],z={w:function(S){for(var E=S<<10;0<=x(E)-x(1335);)E^=1335<<x(E)-x(1335);return(S<<10|E)^21522},A:function(S){for(var E=S<<12;0<=x(E)-x(7973);)E^=7973<<x(E)-x(7973);return S<<12|E},G:function(S){return C[S-1]},F:function(S){switch(S){case 0:return function(E,j){return(E+j)%2==0};case 1:return function(E){return E%2==0};case 2:return function(E,j){return j%3==0};case 3:return function(E,j){return(E+j)%3==0};case 4:return function(E,j){return(Math.floor(E/2)+Math.floor(j/3))%2==0};case 5:return function(E,j){return E*j%2+E*j%3==0};case 6:return function(E,j){return(E*j%2+E*j%3)%2==0};case 7:return function(E,j){return(E*j%3+(E+j)%2)%2==0};default:throw Error("bad maskPattern:"+S)}},C:function(S){for(var E=o([1],0),j=0;j<S;j+=1)E=E.multiply(o([1,g.i(j)],0));return E},f:function(S,E){if(S!=4||1>E||40<E)throw Error("mode: "+S+"; type: "+E);return 10>E?8:16},D:function(S){for(var E=S.h(),j=0,D=0;D<E;D+=1)for(var Q=0;Q<E;Q+=1){for(var nt=0,Et=S.a(D,Q),ut=-1;1>=ut;ut+=1)if(!(0>D+ut||E<=D+ut))for(var Ct=-1;1>=Ct;Ct+=1)0>Q+Ct||E<=Q+Ct||(ut!=0||Ct!=0)&&Et==S.a(D+ut,Q+Ct)&&(nt+=1);5<nt&&(j+=3+nt-5)}for(D=0;D<E-1;D+=1)for(Q=0;Q<E-1;Q+=1)nt=0,S.a(D,Q)&&(nt+=1),S.a(D+1,Q)&&(nt+=1),S.a(D,Q+1)&&(nt+=1),S.a(D+1,Q+1)&&(nt+=1),(nt==0||nt==4)&&(j+=3);for(D=0;D<E;D+=1)for(Q=0;Q<E-6;Q+=1)S.a(D,Q)&&!S.a(D,Q+1)&&S.a(D,Q+2)&&S.a(D,Q+3)&&S.a(D,Q+4)&&!S.a(D,Q+5)&&S.a(D,Q+6)&&(j+=40);for(Q=0;Q<E;Q+=1)for(D=0;D<E-6;D+=1)S.a(D,Q)&&!S.a(D+1,Q)&&S.a(D+2,Q)&&S.a(D+3,Q)&&S.a(D+4,Q)&&!S.a(D+5,Q)&&S.a(D+6,Q)&&(j+=40);for(Q=nt=0;Q<E;Q+=1)for(D=0;D<E;D+=1)S.a(D,Q)&&(nt+=1);return j+=Math.abs(100*nt/E/E-50)/5*10}};return z})(),g=(function(){for(var x=Array(256),C=Array(256),z=0;8>z;z+=1)x[z]=1<<z;for(z=8;256>z;z+=1)x[z]=x[z-4]^x[z-5]^x[z-6]^x[z-8];for(z=0;255>z;z+=1)C[x[z]]=z;return{g:function(S){if(1>S)throw Error("glog("+S+")");return C[S]},i:function(S){for(;0>S;)S+=255;for(;256<=S;)S-=255;return x[S]}}})(),w=(function(){function x(S,E){switch(E){case d.L:return C[4*(S-1)];case d.M:return C[4*(S-1)+1];case d.Q:return C[4*(S-1)+2];case d.H:return C[4*(S-1)+3]}}var C=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],z={I:function(S,E){var j=x(S,E);if(typeof j>"u")throw Error("bad rs block @ typeNumber:"+S+"/errorCorrectLevel:"+E);S=j.length/3,E=[];for(var D=0;D<S;D+=1)for(var Q=j[3*D],nt=j[3*D+1],Et=j[3*D+2],ut=0;ut<Q;ut+=1){var Ct=Et,rt={};rt.o=nt,rt.j=Ct,E.push(rt)}return E}};return z})();return s})());const B5=QrCreator;var zi=class extends Pt{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&B5.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var n;return kt`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((n=this.label)==null?void 0:n.length)>0?this.label:this.value}
        style=${ka({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};zi.styles=[ee,L5];v([Mt("canvas")],zi.prototype,"canvas",2);v([T()],zi.prototype,"value",2);v([T()],zi.prototype,"label",2);v([T({type:Number})],zi.prototype,"size",2);v([T()],zi.prototype,"fill",2);v([T()],zi.prototype,"background",2);v([T({type:Number})],zi.prototype,"radius",2);v([T({attribute:"error-correction"})],zi.prototype,"errorCorrection",2);v([Dt(["background","errorCorrection","fill","radius","size","value"])],zi.prototype,"generate",1);zi.define("sl-qr-code");var U5=Zt`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,ar=class extends Pt{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return kt`
      <span
        part="base"
        class=${te({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?kt` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};ar.styles=[ee,U5];ar.dependencies={"sl-icon":Ke};v([Wt()],ar.prototype,"checked",2);v([Wt()],ar.prototype,"hasFocus",2);v([T()],ar.prototype,"value",2);v([T({reflect:!0})],ar.prototype,"size",2);v([T({type:Boolean,reflect:!0})],ar.prototype,"disabled",2);v([Dt("checked")],ar.prototype,"handleCheckedChange",1);v([Dt("disabled",{waitUntilFirstUpdate:!0})],ar.prototype,"handleDisabledChange",1);ar.define("sl-radio");var H5=Zt`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,ui=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const n=this.closest("sl-select");n&&n.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const n=this.childNodes;let i="";return[...n].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(i+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(i+=s.textContent)}),i.trim()}render(){return kt`
      <div
        part="base"
        class=${te({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};ui.styles=[ee,H5];ui.dependencies={"sl-icon":Ke};v([Mt(".option__label")],ui.prototype,"defaultSlot",2);v([Wt()],ui.prototype,"current",2);v([Wt()],ui.prototype,"selected",2);v([Wt()],ui.prototype,"hasHover",2);v([T({reflect:!0})],ui.prototype,"value",2);v([T({type:Boolean,reflect:!0})],ui.prototype,"disabled",2);v([Dt("disabled")],ui.prototype,"handleDisabledChange",1);v([Dt("selected")],ui.prototype,"handleSelectedChange",1);v([Dt("value")],ui.prototype,"handleValueChange",1);ui.define("sl-option");Le.define("sl-popup");var I5=Zt`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,ju=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return kt`
      <div
        part="base"
        class=${te({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${Yt(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${ka({width:`${this.value}%`})}>
          ${this.indeterminate?"":kt` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};ju.styles=[ee,I5];v([T({type:Number,reflect:!0})],ju.prototype,"value",2);v([T({type:Boolean,reflect:!0})],ju.prototype,"indeterminate",2);v([T()],ju.prototype,"label",2);ju.define("sl-progress-bar");var q5=Zt`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,bw=class extends Pt{render(){return kt` <slot part="base" class="menu-label"></slot> `}};bw.styles=[ee,q5];bw.define("sl-menu-label");var V5=Zt`
  :host {
    display: contents;
  }
`,ir=class extends Pt{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=n=>{this.emit("sl-mutation",{detail:{mutationList:n}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const n=typeof this.attr=="string"&&this.attr.length>0,i=n&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:n,attributeFilter:i,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return kt` <slot></slot> `}};ir.styles=[ee,V5];v([T({reflect:!0})],ir.prototype,"attr",2);v([T({attribute:"attr-old-value",type:Boolean,reflect:!0})],ir.prototype,"attrOldValue",2);v([T({attribute:"char-data",type:Boolean,reflect:!0})],ir.prototype,"charData",2);v([T({attribute:"char-data-old-value",type:Boolean,reflect:!0})],ir.prototype,"charDataOldValue",2);v([T({attribute:"child-list",type:Boolean,reflect:!0})],ir.prototype,"childList",2);v([T({type:Boolean,reflect:!0})],ir.prototype,"disabled",2);v([Dt("disabled")],ir.prototype,"handleDisabledChange",1);v([Dt("attr",{waitUntilFirstUpdate:!0}),Dt("attr-old-value",{waitUntilFirstUpdate:!0}),Dt("char-data",{waitUntilFirstUpdate:!0}),Dt("char-data-old-value",{waitUntilFirstUpdate:!0}),Dt("childList",{waitUntilFirstUpdate:!0})],ir.prototype,"handleChange",1);ir.define("sl-mutation-observer");var K5=Zt`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,ge=class extends Pt{constructor(){super(...arguments),this.formControlController=new Kr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ga(this,"help-text","label"),this.localize=new Oe(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var n;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((n=this.input)==null?void 0:n.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(n){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=n,this.value=this.__dateInput.value}get valueAsNumber(){var n;return this.__numberInput.value=this.value,((n=this.input)==null?void 0:n.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(n){this.__numberInput.valueAsNumber=n,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(n){n.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(n){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(n)}handleKeyDown(n){const i=n.metaKey||n.ctrlKey||n.shiftKey||n.altKey;n.key==="Enter"&&!i&&setTimeout(()=>{!n.defaultPrevented&&!n.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(n){this.input.focus(n)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(n,i,s="none"){this.input.setSelectionRange(n,i,s)}setRangeText(n,i,s,o="preserve"){const d=i??this.input.selectionStart,f=s??this.input.selectionEnd;this.input.setRangeText(n,d,f,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(n){this.input.setCustomValidity(n),this.formControlController.updateValidity()}render(){const n=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),s=this.label?!0:!!n,o=this.helpText?!0:!!i,f=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return kt`
      <div
        part="form-control"
        class=${te({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":o})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${s?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${te({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${Yt(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Yt(this.placeholder)}
              minlength=${Yt(this.minlength)}
              maxlength=${Yt(this.maxlength)}
              min=${Yt(this.min)}
              max=${Yt(this.max)}
              step=${Yt(this.step)}
              .value=${To(this.value)}
              autocapitalize=${Yt(this.autocapitalize)}
              autocomplete=${Yt(this.autocomplete)}
              autocorrect=${Yt(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${Yt(this.pattern)}
              enterkeyhint=${Yt(this.enterkeyhint)}
              inputmode=${Yt(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${f?kt`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?kt`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?kt`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:kt`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ge.styles=[ee,Oo,K5];ge.dependencies={"sl-icon":Ke};v([Mt(".input__control")],ge.prototype,"input",2);v([Wt()],ge.prototype,"hasFocus",2);v([T()],ge.prototype,"title",2);v([T({reflect:!0})],ge.prototype,"type",2);v([T()],ge.prototype,"name",2);v([T()],ge.prototype,"value",2);v([Fl()],ge.prototype,"defaultValue",2);v([T({reflect:!0})],ge.prototype,"size",2);v([T({type:Boolean,reflect:!0})],ge.prototype,"filled",2);v([T({type:Boolean,reflect:!0})],ge.prototype,"pill",2);v([T()],ge.prototype,"label",2);v([T({attribute:"help-text"})],ge.prototype,"helpText",2);v([T({type:Boolean})],ge.prototype,"clearable",2);v([T({type:Boolean,reflect:!0})],ge.prototype,"disabled",2);v([T()],ge.prototype,"placeholder",2);v([T({type:Boolean,reflect:!0})],ge.prototype,"readonly",2);v([T({attribute:"password-toggle",type:Boolean})],ge.prototype,"passwordToggle",2);v([T({attribute:"password-visible",type:Boolean})],ge.prototype,"passwordVisible",2);v([T({attribute:"no-spin-buttons",type:Boolean})],ge.prototype,"noSpinButtons",2);v([T({reflect:!0})],ge.prototype,"form",2);v([T({type:Boolean,reflect:!0})],ge.prototype,"required",2);v([T()],ge.prototype,"pattern",2);v([T({type:Number})],ge.prototype,"minlength",2);v([T({type:Number})],ge.prototype,"maxlength",2);v([T()],ge.prototype,"min",2);v([T()],ge.prototype,"max",2);v([T()],ge.prototype,"step",2);v([T()],ge.prototype,"autocapitalize",2);v([T()],ge.prototype,"autocorrect",2);v([T()],ge.prototype,"autocomplete",2);v([T({type:Boolean})],ge.prototype,"autofocus",2);v([T()],ge.prototype,"enterkeyhint",2);v([T({type:Boolean,converter:{fromAttribute:n=>!(!n||n==="false"),toAttribute:n=>n?"true":"false"}})],ge.prototype,"spellcheck",2);v([T()],ge.prototype,"inputmode",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],ge.prototype,"handleDisabledChange",1);v([Dt("step",{waitUntilFirstUpdate:!0})],ge.prototype,"handleStepChange",1);v([Dt("value",{waitUntilFirstUpdate:!0})],ge.prototype,"handleValueChange",1);ge.define("sl-input");var G5=Zt`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,kg=class extends Pt{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(n){const i=["menuitem","menuitemcheckbox"],s=n.composedPath(),o=s.find(w=>{var x;return i.includes(((x=w==null?void 0:w.getAttribute)==null?void 0:x.call(w,"role"))||"")});if(!o||s.find(w=>{var x;return((x=w==null?void 0:w.getAttribute)==null?void 0:x.call(w,"role"))==="menu"})!==this)return;const g=o;g.type==="checkbox"&&(g.checked=!g.checked),this.emit("sl-select",{detail:{item:g}})}handleKeyDown(n){if(n.key==="Enter"||n.key===" "){const i=this.getCurrentItem();n.preventDefault(),n.stopPropagation(),i==null||i.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(n.key)){const i=this.getAllItems(),s=this.getCurrentItem();let o=s?i.indexOf(s):0;i.length>0&&(n.preventDefault(),n.stopPropagation(),n.key==="ArrowDown"?o++:n.key==="ArrowUp"?o--:n.key==="Home"?o=0:n.key==="End"&&(o=i.length-1),o<0&&(o=i.length-1),o>i.length-1&&(o=0),this.setCurrentItem(i[o]),i[o].focus())}}handleMouseDown(n){const i=n.target;this.isMenuItem(i)&&this.setCurrentItem(i)}handleSlotChange(){const n=this.getAllItems();n.length>0&&this.setCurrentItem(n[0])}isMenuItem(n){var i;return n.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((i=n.getAttribute("role"))!=null?i:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(n=>!(n.inert||!this.isMenuItem(n)))}getCurrentItem(){return this.getAllItems().find(n=>n.getAttribute("tabindex")==="0")}setCurrentItem(n){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===n?"0":"-1")})}render(){return kt`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};kg.styles=[ee,G5];v([Mt("slot")],kg.prototype,"defaultSlot",2);kg.define("sl-menu");var F5=Zt`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const bu=(n,i)=>{var o;const s=n._$AN;if(s===void 0)return!1;for(const d of s)(o=d._$AO)==null||o.call(d,i,!1),bu(d,i);return!0},Oh=n=>{let i,s;do{if((i=n._$AM)===void 0)break;s=i._$AN,s.delete(n),n=i}while((s==null?void 0:s.size)===0)},yw=n=>{for(let i;i=n._$AM;n=i){let s=i._$AN;if(s===void 0)i._$AN=s=new Set;else if(s.has(n))break;s.add(n),X5(i)}};function Y5(n){this._$AN!==void 0?(Oh(this),this._$AM=n,yw(this)):this._$AM=n}function P5(n,i=!1,s=0){const o=this._$AH,d=this._$AN;if(d!==void 0&&d.size!==0)if(i)if(Array.isArray(o))for(let f=s;f<o.length;f++)bu(o[f],!1),Oh(o[f]);else o!=null&&(bu(o,!1),Oh(o));else bu(this,n)}const X5=n=>{n.type==tr.CHILD&&(n._$AP??(n._$AP=P5),n._$AQ??(n._$AQ=Y5))};class Q5 extends Eu{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,s,o){super._$AT(i,s,o),yw(this),this.isConnected=i._$AU}_$AO(i,s=!0){var o,d;i!==this.isConnected&&(this.isConnected=i,i?(o=this.reconnected)==null||o.call(this):(d=this.disconnected)==null||d.call(this)),s&&(bu(this,i),Oh(this))}setValue(i){if(G1(this._$Ct))this._$Ct._$AI(i,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=i,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Z5=()=>new W5;class W5{}const jm=new WeakMap,J5=Tu(class extends Q5{render(n){return an}update(n,[i]){var o;const s=i!==this.G;return s&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=i,this.ht=(o=n.options)==null?void 0:o.host,this.rt(this.ct=n.element)),an}rt(n){if(this.G!==void 0)if(this.isConnected||(n=void 0),typeof this.G=="function"){const i=this.ht??globalThis;let s=jm.get(i);s===void 0&&(s=new WeakMap,jm.set(i,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,n),n!==void 0&&this.G.call(this.ht,n)}else this.G.value=n}get lt(){var n,i;return typeof this.G=="function"?(n=jm.get(this.ht??globalThis))==null?void 0:n.get(this.G):(i=this.G)==null?void 0:i.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var t3=class{constructor(n,i){this.popupRef=Z5(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var o;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(o=s.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),o=s==null?void 0:s.assignedElements({flatten:!0}).filter(C=>C.localName==="sl-menu")[0],d=getComputedStyle(this.host).direction==="rtl";if(!o)return;const{left:f,top:g,width:w,height:x}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${d?f+w:f}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${g}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${d?f+w:f}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${g+x}px`)},(this.host=n).addController(this),this.hasSlotController=i}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(n){const i=this.host.renderRoot.querySelector("slot[name='submenu']");if(!i){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const o of i.assignedElements())if(s=o.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let o=1;o!==s.length;++o)s[o].setAttribute("tabindex","-1");this.popupRef.value&&(n.preventDefault(),n.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(n){this.popupRef.value&&this.popupRef.value.active!==n&&(this.popupRef.value.active=n,this.host.requestUpdate())}enableSubmenu(n=!0){n?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var n;if(!((n=this.host.parentElement)!=null&&n.computedStyleMap))return;const i=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce((d,f)=>{var g;const w=(g=i.get(f))!=null?g:new CSSUnitValue(0,"px"),C=(w instanceof CSSUnitValue?w:new CSSUnitValue(0,"px")).to("px");return d-C.value},0);this.skidding=o}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const n=getComputedStyle(this.host).direction==="rtl";return this.isConnected?kt`
      <sl-popup
        ${J5(this.popupRef)}
        placement=${n?"left-start":"right-start"}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:kt` <slot name="submenu" hidden></slot> `}},Ga=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new ga(this,"submenu"),this.submenuController=new t3(this,this.hasSlotController),this.handleHostClick=n=>{this.disabled&&(n.preventDefault(),n.stopImmediatePropagation())},this.handleMouseOver=n=>{this.focus(),n.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const n=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=n;return}n!==this.cachedTextLabel&&(this.cachedTextLabel=n,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return cC(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const n=this.localize.dir()==="rtl",i=this.submenuController.isExpanded();return kt`
      <div
        id="anchor"
        part="base"
        class=${te({"menu-item":!0,"menu-item--rtl":n,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":i})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!i}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${n?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?kt` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};Ga.styles=[ee,F5];Ga.dependencies={"sl-icon":Ke,"sl-popup":Le,"sl-spinner":zu};v([Mt("slot:not([name])")],Ga.prototype,"defaultSlot",2);v([Mt(".menu-item")],Ga.prototype,"menuItem",2);v([T()],Ga.prototype,"type",2);v([T({type:Boolean,reflect:!0})],Ga.prototype,"checked",2);v([T()],Ga.prototype,"value",2);v([T({type:Boolean,reflect:!0})],Ga.prototype,"loading",2);v([T({type:Boolean,reflect:!0})],Ga.prototype,"disabled",2);v([Dt("checked")],Ga.prototype,"handleCheckedChange",1);v([Dt("disabled")],Ga.prototype,"handleDisabledChange",1);v([Dt("type")],Ga.prototype,"handleTypeChange",1);Ga.define("sl-menu-item");var e3=Zt`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,Mo=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.position=50}handleDrag(n){const{width:i}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";n.preventDefault(),vu(this.base,{onMove:o=>{this.position=parseFloat(Nn(o/i*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:n})}handleKeyDown(n){const i=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(n.key)){const o=n.shiftKey?10:1;let d=this.position;n.preventDefault(),(i&&n.key==="ArrowLeft"||s&&n.key==="ArrowRight")&&(d-=o),(i&&n.key==="ArrowRight"||s&&n.key==="ArrowLeft")&&(d+=o),n.key==="Home"&&(d=0),n.key==="End"&&(d=100),d=Nn(d,0,100),this.position=d}}handlePositionChange(){this.emit("sl-change")}render(){const n=this.localize.dir()==="rtl";return kt`
      <div
        part="base"
        id="image-comparer"
        class=${te({"image-comparer":!0,"image-comparer--rtl":n})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${ka({clipPath:n?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${ka({left:n?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};Mo.styles=[ee,e3];Mo.scopedElement={"sl-icon":Ke};v([Mt(".image-comparer")],Mo.prototype,"base",2);v([Mt(".image-comparer__handle")],Mo.prototype,"handle",2);v([T({type:Number,reflect:!0})],Mo.prototype,"position",2);v([Dt("position",{waitUntilFirstUpdate:!0})],Mo.prototype,"handlePositionChange",1);Mo.define("sl-image-comparer");var n3=Zt`
  :host {
    display: block;
  }
`,Dm=new Map;function a3(n,i="cors"){const s=Dm.get(n);if(s!==void 0)return Promise.resolve(s);const o=fetch(n,{mode:i}).then(async d=>{const f={ok:d.ok,status:d.status,html:await d.text()};return Dm.set(n,f),f});return Dm.set(n,o),o}var Zl=class extends Pt{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(n){const i=document.createElement("script");[...n.attributes].forEach(s=>i.setAttribute(s.name,s.value)),i.textContent=n.textContent,n.parentNode.replaceChild(i,n)}async handleSrcChange(){try{const n=this.src,i=await a3(n,this.mode);if(n!==this.src)return;if(!i.ok){this.emit("sl-error",{detail:{status:i.status}});return}this.innerHTML=i.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return kt`<slot></slot>`}};Zl.styles=[ee,n3];v([T()],Zl.prototype,"src",2);v([T()],Zl.prototype,"mode",2);v([T({attribute:"allow-scripts",type:Boolean})],Zl.prototype,"allowScripts",2);v([Dt("src")],Zl.prototype,"handleSrcChange",1);Zl.define("sl-include");Ke.define("sl-icon");$n.define("sl-icon-button");var Gh=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const n=["","kilo","mega","giga","tera"],i=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?n:i,o=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),d=s[o]+this.unit,f=parseFloat((this.value/Math.pow(1e3,o)).toPrecision(3));return this.localize.number(f,{style:"unit",unit:d,unitDisplay:this.display})}};v([T({type:Number})],Gh.prototype,"value",2);v([T()],Gh.prototype,"unit",2);v([T()],Gh.prototype,"display",2);Gh.define("sl-format-bytes");var Fa=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.date=new Date,this.hourFormat="auto"}render(){const n=new Date(this.date),i=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(n.getMilliseconds()))return kt`
      <time datetime=${n.toISOString()}>
        ${this.localize.date(n,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:i})}
      </time>
    `}};v([T()],Fa.prototype,"date",2);v([T()],Fa.prototype,"weekday",2);v([T()],Fa.prototype,"era",2);v([T()],Fa.prototype,"year",2);v([T()],Fa.prototype,"month",2);v([T()],Fa.prototype,"day",2);v([T()],Fa.prototype,"hour",2);v([T()],Fa.prototype,"minute",2);v([T()],Fa.prototype,"second",2);v([T({attribute:"time-zone-name"})],Fa.prototype,"timeZoneName",2);v([T({attribute:"time-zone"})],Fa.prototype,"timeZone",2);v([T({attribute:"hour-format"})],Fa.prototype,"hourFormat",2);Fa.define("sl-format-date");var Ni=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};v([T({type:Number})],Ni.prototype,"value",2);v([T()],Ni.prototype,"type",2);v([T({attribute:"no-grouping",type:Boolean})],Ni.prototype,"noGrouping",2);v([T()],Ni.prototype,"currency",2);v([T({attribute:"currency-display"})],Ni.prototype,"currencyDisplay",2);v([T({attribute:"minimum-integer-digits",type:Number})],Ni.prototype,"minimumIntegerDigits",2);v([T({attribute:"minimum-fraction-digits",type:Number})],Ni.prototype,"minimumFractionDigits",2);v([T({attribute:"maximum-fraction-digits",type:Number})],Ni.prototype,"maximumFractionDigits",2);v([T({attribute:"minimum-significant-digits",type:Number})],Ni.prototype,"minimumSignificantDigits",2);v([T({attribute:"maximum-significant-digits",type:Number})],Ni.prototype,"maximumSignificantDigits",2);Ni.define("sl-format-number");var i3=Zt`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Fh=class extends Pt{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Fh.styles=[ee,i3];v([T({type:Boolean,reflect:!0})],Fh.prototype,"vertical",2);v([Dt("vertical")],Fh.prototype,"handleVerticalChange",1);Fh.define("sl-divider");var r3=Zt`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*Cg(n=document.activeElement){n!=null&&(yield n,"shadowRoot"in n&&n.shadowRoot&&n.shadowRoot.mode!=="closed"&&(yield*qS(Cg(n.shadowRoot.activeElement))))}function ww(){return[...Cg()].pop()}var a1=new WeakMap;function xw(n){let i=a1.get(n);return i||(i=window.getComputedStyle(n,null),a1.set(n,i)),i}function s3(n){if(typeof n.checkVisibility=="function")return n.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const i=xw(n);return i.visibility!=="hidden"&&i.display!=="none"}function o3(n){const i=xw(n),{overflowY:s,overflowX:o}=i;return s==="scroll"||o==="scroll"?!0:s!=="auto"||o!=="auto"?!1:n.scrollHeight>n.clientHeight&&s==="auto"||n.scrollWidth>n.clientWidth&&o==="auto"}function l3(n){const i=n.tagName.toLowerCase(),s=Number(n.getAttribute("tabindex"));if(n.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||n.hasAttribute("disabled")||n.closest("[inert]"))return!1;if(i==="input"&&n.getAttribute("type")==="radio"){const f=n.getRootNode(),g=`input[type='radio'][name="${n.getAttribute("name")}"]`,w=f.querySelector(`${g}:checked`);return w?w===n:f.querySelector(g)===n}return s3(n)?(i==="audio"||i==="video")&&n.hasAttribute("controls")||n.hasAttribute("tabindex")||n.hasAttribute("contenteditable")&&n.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(i)?!0:o3(n):!1}function c3(n){var i,s;const o=eg(n),d=(i=o[0])!=null?i:null,f=(s=o[o.length-1])!=null?s:null;return{start:d,end:f}}function u3(n,i){var s;return((s=n.getRootNode({composed:!0}))==null?void 0:s.host)!==i}function eg(n){const i=new WeakMap,s=[];function o(d){if(d instanceof Element){if(d.hasAttribute("inert")||d.closest("[inert]")||i.has(d))return;i.set(d,!0),!s.includes(d)&&l3(d)&&s.push(d),d instanceof HTMLSlotElement&&u3(d,n)&&d.assignedElements({flatten:!0}).forEach(f=>{o(f)}),d.shadowRoot!==null&&d.shadowRoot.mode==="open"&&o(d.shadowRoot)}for(const f of d.children)o(f)}return o(n),s.sort((d,f)=>{const g=Number(d.getAttribute("tabindex"))||0;return(Number(f.getAttribute("tabindex"))||0)-g})}var su=[],_w=class{constructor(n){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=i=>{var s;if(i.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const o=ww();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;i.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const d=eg(this.element);let f=d.findIndex(w=>w===o);this.previousFocus=this.currentFocus;const g=this.tabDirection==="forward"?1:-1;for(;;){f+g>=d.length?f=0:f+g<0?f=d.length-1:f+=g,this.previousFocus=this.currentFocus;const w=d[f];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||w&&this.possiblyHasTabbableChildren(w))return;i.preventDefault(),this.currentFocus=w,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const x=[...Cg()];if(x.includes(this.currentFocus)||!x.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=n,this.elementsWithTabbableControls=["iframe"]}activate(){su.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){su=su.filter(n=>n!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return su[su.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const n=eg(this.element);if(!this.element.matches(":focus-within")){const i=n[0],s=n[n.length-1],o=this.tabDirection==="forward"?i:s;typeof(o==null?void 0:o.focus)=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(n){return this.elementsWithTabbableControls.includes(n.tagName.toLowerCase())||n.hasAttribute("controls")}},Ag=n=>{var i;const{activeElement:s}=document;s&&n.contains(s)&&((i=document.activeElement)==null||i.blur())};function i1(n){return n.charAt(0).toUpperCase()+n.slice(1)}var Ya=class extends Pt{constructor(){super(...arguments),this.hasSlotController=new ga(this,"footer"),this.localize=new Oe(this),this.modal=new _w(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=n=>{this.contained||n.key==="Escape"&&this.modal.isActive()&&this.open&&(n.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),mu(this)))}disconnectedCallback(){super.disconnectedCallback(),gu(this),this.removeOpenListeners()}requestClose(n){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:n}}).defaultPrevented){const s=rn(this,"drawer.denyClose",{dir:this.localize.dir()});vn(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var n;"CloseWatcher"in window?((n=this.closeWatcher)==null||n.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var n;document.removeEventListener("keydown",this.handleDocumentKeyDown),(n=this.closeWatcher)==null||n.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),mu(this));const n=this.querySelector("[autofocus]");n&&n.removeAttribute("autofocus"),await Promise.all([On(this.drawer),On(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(n?n.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),n&&n.setAttribute("autofocus","")});const i=rn(this,`drawer.show${i1(this.placement)}`,{dir:this.localize.dir()}),s=rn(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([vn(this.panel,i.keyframes,i.options),vn(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{Ag(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),gu(this)),await Promise.all([On(this.drawer),On(this.overlay)]);const n=rn(this,`drawer.hide${i1(this.placement)}`,{dir:this.localize.dir()}),i=rn(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([vn(this.overlay,i.keyframes,i.options).then(()=>{this.overlay.hidden=!0}),vn(this.panel,n.keyframes,n.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof(s==null?void 0:s.focus)=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),mu(this)),this.open&&this.contained&&(this.modal.deactivate(),gu(this))}async show(){if(!this.open)return this.open=!0,ma(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ma(this,"sl-after-hide")}render(){return kt`
      <div
        part="base"
        class=${te({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Yt(this.noHeader?this.label:void 0)}
          aria-labelledby=${Yt(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":kt`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click=${()=>this.requestClose("close-button")}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Ya.styles=[ee,r3];Ya.dependencies={"sl-icon-button":$n};v([Mt(".drawer")],Ya.prototype,"drawer",2);v([Mt(".drawer__panel")],Ya.prototype,"panel",2);v([Mt(".drawer__overlay")],Ya.prototype,"overlay",2);v([T({type:Boolean,reflect:!0})],Ya.prototype,"open",2);v([T({reflect:!0})],Ya.prototype,"label",2);v([T({reflect:!0})],Ya.prototype,"placement",2);v([T({type:Boolean,reflect:!0})],Ya.prototype,"contained",2);v([T({attribute:"no-header",type:Boolean,reflect:!0})],Ya.prototype,"noHeader",2);v([Dt("open",{waitUntilFirstUpdate:!0})],Ya.prototype,"handleOpenChange",1);v([Dt("contained",{waitUntilFirstUpdate:!0})],Ya.prototype,"handleNoModalChange",1);$e("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});$e("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});$e("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});$e("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});$e("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});$e("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});$e("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});$e("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});$e("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});$e("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});$e("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Ya.define("sl-drawer");var d3=Zt`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,ia=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=n=>{this.open&&n.key==="Escape"&&(n.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=n=>{var i;if(n.key==="Escape"&&this.open&&!this.closeWatcher){n.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(n.key==="Tab"){if(this.open&&((i=document.activeElement)==null?void 0:i.tagName.toLowerCase())==="sl-menu-item"){n.preventDefault(),this.hide(),this.focusOnTrigger();return}const s=(o,d)=>{if(!o)return null;const f=o.closest(d);if(f)return f;const g=o.getRootNode();return g instanceof ShadowRoot?s(g.host,d):null};setTimeout(()=>{var o;const d=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?ww():document.activeElement;(!this.containingElement||s(d,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=n=>{const i=n.composedPath();this.containingElement&&!i.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=n=>{const i=n.target;!this.stayOpenOnSelect&&i.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const n=this.trigger.assignedElements({flatten:!0})[0];typeof(n==null?void 0:n.focus)=="function"&&n.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(n=>n.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(n){if([" ","Enter"].includes(n.key)){n.preventDefault(),this.handleTriggerClick();return}const i=this.getMenu();if(i){const s=i.getAllItems(),o=s[0],d=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(n.key)&&(n.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(n.key==="ArrowDown"||n.key==="Home")&&(i.setCurrentItem(o),o.focus()),(n.key==="ArrowUp"||n.key==="End")&&(i.setCurrentItem(d),d.focus())}))}}handleTriggerKeyUp(n){n.key===" "&&n.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const i=this.trigger.assignedElements({flatten:!0}).find(o=>c3(o).start);let s;if(i){switch(i.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=i.button;break;default:s=i}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,ma(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ma(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var n;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((n=this.closeWatcher)==null||n.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var n;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(n=this.closeWatcher)==null||n.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await On(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:n,options:i}=rn(this,"dropdown.show",{dir:this.localize.dir()});await vn(this.popup.popup,n,i),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await On(this);const{keyframes:n,options:i}=rn(this,"dropdown.hide",{dir:this.localize.dir()});await vn(this.popup.popup,n,i),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return kt`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${Yt(this.sync?this.sync:void 0)}
        class=${te({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?"false":"true"} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};ia.styles=[ee,d3];ia.dependencies={"sl-popup":Le};v([Mt(".dropdown")],ia.prototype,"popup",2);v([Mt(".dropdown__trigger")],ia.prototype,"trigger",2);v([Mt(".dropdown__panel")],ia.prototype,"panel",2);v([T({type:Boolean,reflect:!0})],ia.prototype,"open",2);v([T({reflect:!0})],ia.prototype,"placement",2);v([T({type:Boolean,reflect:!0})],ia.prototype,"disabled",2);v([T({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],ia.prototype,"stayOpenOnSelect",2);v([T({attribute:!1})],ia.prototype,"containingElement",2);v([T({type:Number})],ia.prototype,"distance",2);v([T({type:Number})],ia.prototype,"skidding",2);v([T({type:Boolean})],ia.prototype,"hoist",2);v([T({reflect:!0})],ia.prototype,"sync",2);v([Dt("open",{waitUntilFirstUpdate:!0})],ia.prototype,"handleOpenChange",1);$e("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});$e("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});ia.define("sl-dropdown");var h3=Zt`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Fn=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let n=this.value;if(this.from){const i=this.getRootNode(),s=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let d=this.from,f="";s?[d,f]=this.from.trim().split("."):o&&([d,f]=this.from.trim().replace(/\]$/,"").split("["));const g="getElementById"in i?i.getElementById(d):null;g?o?n=g.getAttribute(f)||"":s?n=g[f]||"":n=g.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!n)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(n),this.showStatus("success"),this.emit("sl-copy",{detail:{value:n}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(n){const i=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),o=this.errorLabel||this.localize.term("error"),d=n==="success"?this.successIcon:this.errorIcon,f=rn(this,"copy.in",{dir:"ltr"}),g=rn(this,"copy.out",{dir:"ltr"});this.tooltip.content=n==="success"?s:o,await this.copyIcon.animate(g.keyframes,g.options).finished,this.copyIcon.hidden=!0,this.status=n,d.hidden=!1,await d.animate(f.keyframes,f.options).finished,setTimeout(async()=>{await d.animate(g.keyframes,g.options).finished,d.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(f.keyframes,f.options).finished,this.tooltip.content=i,this.isCopying=!1},this.feedbackDuration)}render(){const n=this.copyLabel||this.localize.term("copy");return kt`
      <sl-tooltip
        class=${te({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${n}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Fn.styles=[ee,h3];Fn.dependencies={"sl-icon":Ke,"sl-tooltip":Gn};v([Mt('slot[name="copy-icon"]')],Fn.prototype,"copyIcon",2);v([Mt('slot[name="success-icon"]')],Fn.prototype,"successIcon",2);v([Mt('slot[name="error-icon"]')],Fn.prototype,"errorIcon",2);v([Mt("sl-tooltip")],Fn.prototype,"tooltip",2);v([Wt()],Fn.prototype,"isCopying",2);v([Wt()],Fn.prototype,"status",2);v([T()],Fn.prototype,"value",2);v([T()],Fn.prototype,"from",2);v([T({type:Boolean,reflect:!0})],Fn.prototype,"disabled",2);v([T({attribute:"copy-label"})],Fn.prototype,"copyLabel",2);v([T({attribute:"success-label"})],Fn.prototype,"successLabel",2);v([T({attribute:"error-label"})],Fn.prototype,"errorLabel",2);v([T({attribute:"feedback-duration",type:Number})],Fn.prototype,"feedbackDuration",2);v([T({attribute:"tooltip-placement"})],Fn.prototype,"tooltipPlacement",2);v([T({type:Boolean})],Fn.prototype,"hoist",2);$e("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});$e("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});Fn.define("sl-copy-button");var f3=Zt`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Oi=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(n=>{for(const i of n)i.type==="attributes"&&i.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this.detailsObserver)==null||n.disconnect()}handleSummaryClick(n){n.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(n){(n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.open?this.hide():this.show()),(n.key==="ArrowUp"||n.key==="ArrowLeft")&&(n.preventDefault(),this.hide()),(n.key==="ArrowDown"||n.key==="ArrowRight")&&(n.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await On(this.body);const{keyframes:i,options:s}=rn(this,"details.show",{dir:this.localize.dir()});await vn(this.body,Ah(i,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await On(this.body);const{keyframes:i,options:s}=rn(this,"details.hide",{dir:this.localize.dir()});await vn(this.body,Ah(i,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,ma(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,ma(this,"sl-after-hide")}render(){const n=this.localize.dir()==="rtl";return kt`
      <details
        part="base"
        class=${te({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":n})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${n?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${n?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Oi.styles=[ee,f3];Oi.dependencies={"sl-icon":Ke};v([Mt(".details")],Oi.prototype,"details",2);v([Mt(".details__header")],Oi.prototype,"header",2);v([Mt(".details__body")],Oi.prototype,"body",2);v([Mt(".details__expand-icon-slot")],Oi.prototype,"expandIconSlot",2);v([T({type:Boolean,reflect:!0})],Oi.prototype,"open",2);v([T()],Oi.prototype,"summary",2);v([T({type:Boolean,reflect:!0})],Oi.prototype,"disabled",2);v([Dt("open",{waitUntilFirstUpdate:!0})],Oi.prototype,"handleOpenChange",1);$e("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});$e("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});Oi.define("sl-details");var p3=Zt`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,rr=class extends Pt{constructor(){super(...arguments),this.hasSlotController=new ga(this,"footer"),this.localize=new Oe(this),this.modal=new _w(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=n=>{n.key==="Escape"&&this.modal.isActive()&&this.open&&(n.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),mu(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),gu(this),this.removeOpenListeners()}requestClose(n){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:n}}).defaultPrevented){const s=rn(this,"dialog.denyClose",{dir:this.localize.dir()});vn(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var n;"CloseWatcher"in window?((n=this.closeWatcher)==null||n.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var n;(n=this.closeWatcher)==null||n.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),mu(this);const n=this.querySelector("[autofocus]");n&&n.removeAttribute("autofocus"),await Promise.all([On(this.dialog),On(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(n?n.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),n&&n.setAttribute("autofocus","")});const i=rn(this,"dialog.show",{dir:this.localize.dir()}),s=rn(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([vn(this.panel,i.keyframes,i.options),vn(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{Ag(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([On(this.dialog),On(this.overlay)]);const n=rn(this,"dialog.hide",{dir:this.localize.dir()}),i=rn(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([vn(this.overlay,i.keyframes,i.options).then(()=>{this.overlay.hidden=!0}),vn(this.panel,n.keyframes,n.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,gu(this);const s=this.originalTrigger;typeof(s==null?void 0:s.focus)=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ma(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ma(this,"sl-after-hide")}render(){return kt`
      <div
        part="base"
        class=${te({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Yt(this.noHeader?this.label:void 0)}
          aria-labelledby=${Yt(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":kt`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};rr.styles=[ee,p3];rr.dependencies={"sl-icon-button":$n};v([Mt(".dialog")],rr.prototype,"dialog",2);v([Mt(".dialog__panel")],rr.prototype,"panel",2);v([Mt(".dialog__overlay")],rr.prototype,"overlay",2);v([T({type:Boolean,reflect:!0})],rr.prototype,"open",2);v([T({reflect:!0})],rr.prototype,"label",2);v([T({attribute:"no-header",type:Boolean,reflect:!0})],rr.prototype,"noHeader",2);v([Dt("open",{waitUntilFirstUpdate:!0})],rr.prototype,"handleOpenChange",1);$e("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});$e("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});$e("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});$e("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});$e("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});rr.define("sl-dialog");Mn.define("sl-checkbox");var m3=Zt`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Be=class extends Pt{constructor(){super(...arguments),this.formControlController=new Kr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ga(this,"[default]","prefix","suffix"),this.localize=new Oe(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Bh}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(n){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(n)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(n){this.button.focus(n)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(n){this.isButton()&&(this.button.setCustomValidity(n),this.formControlController.updateValidity())}render(){const n=this.isLink(),i=n?Nh`a`:Nh`button`;return pu`
      <${i}
        part="base"
        class=${te({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Yt(n?void 0:this.disabled)}
        type=${Yt(n?void 0:this.type)}
        title=${this.title}
        name=${Yt(n?void 0:this.name)}
        value=${Yt(n?void 0:this.value)}
        href=${Yt(n&&!this.disabled?this.href:void 0)}
        target=${Yt(n?this.target:void 0)}
        download=${Yt(n?this.download:void 0)}
        rel=${Yt(n?this.rel:void 0)}
        role=${Yt(n?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?pu` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?pu`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${i}>
    `}};Be.styles=[ee,mw];Be.dependencies={"sl-icon":Ke,"sl-spinner":zu};v([Mt(".button")],Be.prototype,"button",2);v([Wt()],Be.prototype,"hasFocus",2);v([Wt()],Be.prototype,"invalid",2);v([T()],Be.prototype,"title",2);v([T({reflect:!0})],Be.prototype,"variant",2);v([T({reflect:!0})],Be.prototype,"size",2);v([T({type:Boolean,reflect:!0})],Be.prototype,"caret",2);v([T({type:Boolean,reflect:!0})],Be.prototype,"disabled",2);v([T({type:Boolean,reflect:!0})],Be.prototype,"loading",2);v([T({type:Boolean,reflect:!0})],Be.prototype,"outline",2);v([T({type:Boolean,reflect:!0})],Be.prototype,"pill",2);v([T({type:Boolean,reflect:!0})],Be.prototype,"circle",2);v([T()],Be.prototype,"type",2);v([T()],Be.prototype,"name",2);v([T()],Be.prototype,"value",2);v([T()],Be.prototype,"href",2);v([T()],Be.prototype,"target",2);v([T()],Be.prototype,"rel",2);v([T()],Be.prototype,"download",2);v([T()],Be.prototype,"form",2);v([T({attribute:"formaction"})],Be.prototype,"formAction",2);v([T({attribute:"formenctype"})],Be.prototype,"formEnctype",2);v([T({attribute:"formmethod"})],Be.prototype,"formMethod",2);v([T({attribute:"formnovalidate",type:Boolean})],Be.prototype,"formNoValidate",2);v([T({attribute:"formtarget"})],Be.prototype,"formTarget",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],Be.prototype,"handleDisabledChange",1);function ea(n,i){g3(n)&&(n="100%");const s=v3(n);return n=i===360?n:Math.min(i,Math.max(0,parseFloat(n))),s&&(n=parseInt(String(n*i),10)/100),Math.abs(n-i)<1e-6?1:(i===360?n=(n<0?n%i+i:n%i)/i:n=n%i/i,n)}function ph(n){return Math.min(1,Math.max(0,n))}function g3(n){return typeof n=="string"&&n.indexOf(".")!==-1&&parseFloat(n)===1}function v3(n){return typeof n=="string"&&n.indexOf("%")!==-1}function Sw(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function mh(n){return Number(n)<=1?`${Number(n)*100}%`:n}function So(n){return n.length===1?"0"+n:String(n)}function b3(n,i,s){return{r:ea(n,255)*255,g:ea(i,255)*255,b:ea(s,255)*255}}function r1(n,i,s){n=ea(n,255),i=ea(i,255),s=ea(s,255);const o=Math.max(n,i,s),d=Math.min(n,i,s);let f=0,g=0;const w=(o+d)/2;if(o===d)g=0,f=0;else{const x=o-d;switch(g=w>.5?x/(2-o-d):x/(o+d),o){case n:f=(i-s)/x+(i<s?6:0);break;case i:f=(s-n)/x+2;break;case s:f=(n-i)/x+4;break}f/=6}return{h:f,s:g,l:w}}function Rm(n,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?n+(i-n)*(6*s):s<1/2?i:s<2/3?n+(i-n)*(2/3-s)*6:n}function y3(n,i,s){let o,d,f;if(n=ea(n,360),i=ea(i,100),s=ea(s,100),i===0)d=s,f=s,o=s;else{const g=s<.5?s*(1+i):s+i-s*i,w=2*s-g;o=Rm(w,g,n+1/3),d=Rm(w,g,n),f=Rm(w,g,n-1/3)}return{r:o*255,g:d*255,b:f*255}}function s1(n,i,s){n=ea(n,255),i=ea(i,255),s=ea(s,255);const o=Math.max(n,i,s),d=Math.min(n,i,s);let f=0;const g=o,w=o-d,x=o===0?0:w/o;if(o===d)f=0;else{switch(o){case n:f=(i-s)/w+(i<s?6:0);break;case i:f=(s-n)/w+2;break;case s:f=(n-i)/w+4;break}f/=6}return{h:f,s:x,v:g}}function w3(n,i,s){n=ea(n,360)*6,i=ea(i,100),s=ea(s,100);const o=Math.floor(n),d=n-o,f=s*(1-i),g=s*(1-d*i),w=s*(1-(1-d)*i),x=o%6,C=[s,g,f,f,w,s][x],z=[w,s,s,g,f,f][x],S=[f,f,w,s,s,g][x];return{r:C*255,g:z*255,b:S*255}}function o1(n,i,s,o){const d=So(Math.round(n).toString(16)),f=So(Math.round(i).toString(16)),g=So(Math.round(s).toString(16));return o&&d.startsWith(d.charAt(1))&&f.startsWith(f.charAt(1))&&g.startsWith(g.charAt(1))?d.charAt(0)+f.charAt(0)+g.charAt(0):d+f+g}function x3(n,i,s,o,d){const f=So(Math.round(n).toString(16)),g=So(Math.round(i).toString(16)),w=So(Math.round(s).toString(16)),x=So(S3(o));return d&&f.startsWith(f.charAt(1))&&g.startsWith(g.charAt(1))&&w.startsWith(w.charAt(1))&&x.startsWith(x.charAt(1))?f.charAt(0)+g.charAt(0)+w.charAt(0)+x.charAt(0):f+g+w+x}function _3(n,i,s,o){const d=n/100,f=i/100,g=s/100,w=o/100,x=255*(1-d)*(1-w),C=255*(1-f)*(1-w),z=255*(1-g)*(1-w);return{r:x,g:C,b:z}}function l1(n,i,s){let o=1-n/255,d=1-i/255,f=1-s/255,g=Math.min(o,d,f);return g===1?(o=0,d=0,f=0):(o=(o-g)/(1-g)*100,d=(d-g)/(1-g)*100,f=(f-g)/(1-g)*100),g*=100,{c:Math.round(o),m:Math.round(d),y:Math.round(f),k:Math.round(g)}}function S3(n){return Math.round(parseFloat(n)*255).toString(16)}function c1(n){return Ia(n)/255}function Ia(n){return parseInt(n,16)}function k3(n){return{r:n>>16,g:(n&65280)>>8,b:n&255}}const ng={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function C3(n){let i={r:0,g:0,b:0},s=1,o=null,d=null,f=null,g=!1,w=!1;return typeof n=="string"&&(n=E3(n)),typeof n=="object"&&(Ha(n.r)&&Ha(n.g)&&Ha(n.b)?(i=b3(n.r,n.g,n.b),g=!0,w=String(n.r).substr(-1)==="%"?"prgb":"rgb"):Ha(n.h)&&Ha(n.s)&&Ha(n.v)?(o=mh(n.s),d=mh(n.v),i=w3(n.h,o,d),g=!0,w="hsv"):Ha(n.h)&&Ha(n.s)&&Ha(n.l)?(o=mh(n.s),f=mh(n.l),i=y3(n.h,o,f),g=!0,w="hsl"):Ha(n.c)&&Ha(n.m)&&Ha(n.y)&&Ha(n.k)&&(i=_3(n.c,n.m,n.y,n.k),g=!0,w="cmyk"),Object.prototype.hasOwnProperty.call(n,"a")&&(s=n.a)),s=Sw(s),{ok:g,format:n.format||w,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:s}}const A3="[-\\+]?\\d+%?",T3="[-\\+]?\\d*\\.\\d+%?",js="(?:"+T3+")|(?:"+A3+")",Mm="[\\s|\\(]+("+js+")[,|\\s]+("+js+")[,|\\s]+("+js+")\\s*\\)?",gh="[\\s|\\(]+("+js+")[,|\\s]+("+js+")[,|\\s]+("+js+")[,|\\s]+("+js+")\\s*\\)?",qa={hex:/^[0-9a-fA-F]+$/,CSS_UNIT:new RegExp(js),rgb:new RegExp("rgb"+Mm),rgba:new RegExp("rgba"+gh),hsl:new RegExp("hsl"+Mm),hsla:new RegExp("hsla"+gh),hsv:new RegExp("hsv"+Mm),hsva:new RegExp("hsva"+gh),cmyk:new RegExp("cmyk"+gh),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function E3(n){if(n=n.trim().toLowerCase(),n.length===0)return!1;let i=!1;if(ng[n])n=ng[n],i=!0;else if(n==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s;if(typeof n=="string"&&n.length<=9&&(n.startsWith("#")||qa.hex.test(n))){if(s=qa.hex8.exec(n),s)return{r:Ia(s[1]),g:Ia(s[2]),b:Ia(s[3]),a:c1(s[4]),format:i?"name":"hex8"};if(s=qa.hex6.exec(n),s)return{r:Ia(s[1]),g:Ia(s[2]),b:Ia(s[3]),format:i?"name":"hex"};if(s=qa.hex4.exec(n),s)return{r:Ia(s[1]+s[1]),g:Ia(s[2]+s[2]),b:Ia(s[3]+s[3]),a:c1(s[4]+s[4]),format:i?"name":"hex8"};if(s=qa.hex3.exec(n),s)return{r:Ia(s[1]+s[1]),g:Ia(s[2]+s[2]),b:Ia(s[3]+s[3]),format:i?"name":"hex"}}return s=qa.rgb.exec(n),s?{r:s[1],g:s[2],b:s[3]}:(s=qa.rgba.exec(n),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=qa.hsl.exec(n),s?{h:s[1],s:s[2],l:s[3]}:(s=qa.hsla.exec(n),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=qa.hsv.exec(n),s?{h:s[1],s:s[2],v:s[3]}:(s=qa.hsva.exec(n),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=qa.cmyk.exec(n),s?{c:s[1],m:s[2],y:s[3],k:s[4]}:!1))))))}function Ha(n){return typeof n=="number"?!Number.isNaN(n):qa.CSS_UNIT.test(n)}class gn{constructor(i="",s={}){if(i instanceof gn)return i;typeof i=="number"&&(i=k3(i)),this.originalInput=i;const o=C3(i);this.originalInput=i,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??o.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const i=this.toRgb();return(i.r*299+i.g*587+i.b*114)/1e3}getLuminance(){const i=this.toRgb();let s,o,d;const f=i.r/255,g=i.g/255,w=i.b/255;return f<=.03928?s=f/12.92:s=Math.pow((f+.055)/1.055,2.4),g<=.03928?o=g/12.92:o=Math.pow((g+.055)/1.055,2.4),w<=.03928?d=w/12.92:d=Math.pow((w+.055)/1.055,2.4),.2126*s+.7152*o+.0722*d}getAlpha(){return this.a}setAlpha(i){return this.a=Sw(i),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:i}=this.toHsl();return i===0}toHsv(){const i=s1(this.r,this.g,this.b);return{h:i.h*360,s:i.s,v:i.v,a:this.a}}toHsvString(){const i=s1(this.r,this.g,this.b),s=Math.round(i.h*360),o=Math.round(i.s*100),d=Math.round(i.v*100);return this.a===1?`hsv(${s}, ${o}%, ${d}%)`:`hsva(${s}, ${o}%, ${d}%, ${this.roundA})`}toHsl(){const i=r1(this.r,this.g,this.b);return{h:i.h*360,s:i.s,l:i.l,a:this.a}}toHslString(){const i=r1(this.r,this.g,this.b),s=Math.round(i.h*360),o=Math.round(i.s*100),d=Math.round(i.l*100);return this.a===1?`hsl(${s}, ${o}%, ${d}%)`:`hsla(${s}, ${o}%, ${d}%, ${this.roundA})`}toHex(i=!1){return o1(this.r,this.g,this.b,i)}toHexString(i=!1){return"#"+this.toHex(i)}toHex8(i=!1){return x3(this.r,this.g,this.b,this.a,i)}toHex8String(i=!1){return"#"+this.toHex8(i)}toHexShortString(i=!1){return this.a===1?this.toHexString(i):this.toHex8String(i)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const i=Math.round(this.r),s=Math.round(this.g),o=Math.round(this.b);return this.a===1?`rgb(${i}, ${s}, ${o})`:`rgba(${i}, ${s}, ${o}, ${this.roundA})`}toPercentageRgb(){const i=s=>`${Math.round(ea(s,255)*100)}%`;return{r:i(this.r),g:i(this.g),b:i(this.b),a:this.a}}toPercentageRgbString(){const i=s=>Math.round(ea(s,255)*100);return this.a===1?`rgb(${i(this.r)}%, ${i(this.g)}%, ${i(this.b)}%)`:`rgba(${i(this.r)}%, ${i(this.g)}%, ${i(this.b)}%, ${this.roundA})`}toCmyk(){return{...l1(this.r,this.g,this.b)}}toCmykString(){const{c:i,m:s,y:o,k:d}=l1(this.r,this.g,this.b);return`cmyk(${i}, ${s}, ${o}, ${d})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const i="#"+o1(this.r,this.g,this.b,!1);for(const[s,o]of Object.entries(ng))if(i===o)return s;return!1}toString(i){const s=!!i;i=i??this.format;let o=!1;const d=this.a<1&&this.a>=0;return!s&&d&&(i.startsWith("hex")||i==="name")?i==="name"&&this.a===0?this.toName():this.toRgbString():(i==="rgb"&&(o=this.toRgbString()),i==="prgb"&&(o=this.toPercentageRgbString()),(i==="hex"||i==="hex6")&&(o=this.toHexString()),i==="hex3"&&(o=this.toHexString(!0)),i==="hex4"&&(o=this.toHex8String(!0)),i==="hex8"&&(o=this.toHex8String()),i==="name"&&(o=this.toName()),i==="hsl"&&(o=this.toHslString()),i==="hsv"&&(o=this.toHsvString()),i==="cmyk"&&(o=this.toCmykString()),o||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new gn(this.toString())}lighten(i=10){const s=this.toHsl();return s.l+=i/100,s.l=ph(s.l),new gn(s)}brighten(i=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(i/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(i/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(i/100)))),new gn(s)}darken(i=10){const s=this.toHsl();return s.l-=i/100,s.l=ph(s.l),new gn(s)}tint(i=10){return this.mix("white",i)}shade(i=10){return this.mix("black",i)}desaturate(i=10){const s=this.toHsl();return s.s-=i/100,s.s=ph(s.s),new gn(s)}saturate(i=10){const s=this.toHsl();return s.s+=i/100,s.s=ph(s.s),new gn(s)}greyscale(){return this.desaturate(100)}spin(i){const s=this.toHsl(),o=(s.h+i)%360;return s.h=o<0?360+o:o,new gn(s)}mix(i,s=50){const o=this.toRgb(),d=new gn(i).toRgb(),f=s/100,g={r:(d.r-o.r)*f+o.r,g:(d.g-o.g)*f+o.g,b:(d.b-o.b)*f+o.b,a:(d.a-o.a)*f+o.a};return new gn(g)}analogous(i=6,s=30){const o=this.toHsl(),d=360/s,f=[this];for(o.h=(o.h-(d*i>>1)+720)%360;--i;)o.h=(o.h+d)%360,f.push(new gn(o));return f}complement(){const i=this.toHsl();return i.h=(i.h+180)%360,new gn(i)}monochromatic(i=6){const s=this.toHsv(),{h:o}=s,{s:d}=s;let{v:f}=s;const g=[],w=1/i;for(;i--;)g.push(new gn({h:o,s:d,v:f})),f=(f+w)%1;return g}splitcomplement(){const i=this.toHsl(),{h:s}=i;return[this,new gn({h:(s+72)%360,s:i.s,l:i.l}),new gn({h:(s+216)%360,s:i.s,l:i.l})]}onBackground(i){const s=this.toRgb(),o=new gn(i).toRgb(),d=s.a+o.a*(1-s.a);return new gn({r:(s.r*s.a+o.r*o.a*(1-s.a))/d,g:(s.g*s.a+o.g*o.a*(1-s.a))/d,b:(s.b*s.a+o.b*o.a*(1-s.a))/d,a:d})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(i){const s=this.toHsl(),{h:o}=s,d=[this],f=360/i;for(let g=1;g<i;g++)d.push(new gn({h:(o+g*f)%360,s:s.s,l:s.l}));return d}equals(i){const s=new gn(i);return this.format==="cmyk"||s.format==="cmyk"?this.toCmykString()===s.toCmykString():this.toRgbString()===s.toRgbString()}}var u1="EyeDropper"in window,Ae=class extends Pt{constructor(){super(),this.formControlController=new Kr(this),this.isSafeValue=!1,this.localize=new Oe(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const n=["hex","rgb","hsl","hsv"],i=(n.indexOf(this.format)+1)%n.length;this.format=n[i],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(n){const i=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=i.querySelector(".color-picker__slider-handle"),{width:o}=i.getBoundingClientRect();let d=this.value,f=this.value;s.focus(),n.preventDefault(),vu(i,{onMove:g=>{this.alpha=Nn(g/o*100,0,100),this.syncValues(),this.value!==f&&(f=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==d&&(d=this.value,this.emit("sl-change"))},initialEvent:n})}handleHueDrag(n){const i=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=i.querySelector(".color-picker__slider-handle"),{width:o}=i.getBoundingClientRect();let d=this.value,f=this.value;s.focus(),n.preventDefault(),vu(i,{onMove:g=>{this.hue=Nn(g/o*360,0,360),this.syncValues(),this.value!==f&&(f=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==d&&(d=this.value,this.emit("sl-change"))},initialEvent:n})}handleGridDrag(n){const i=this.shadowRoot.querySelector(".color-picker__grid"),s=i.querySelector(".color-picker__grid-handle"),{width:o,height:d}=i.getBoundingClientRect();let f=this.value,g=this.value;s.focus(),n.preventDefault(),this.isDraggingGridHandle=!0,vu(i,{onMove:(w,x)=>{this.saturation=Nn(w/o*100,0,100),this.brightness=Nn(100-x/d*100,0,100),this.syncValues(),this.value!==g&&(g=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==f&&(f=this.value,this.emit("sl-change"))},initialEvent:n})}handleAlphaKeyDown(n){const i=n.shiftKey?10:1,s=this.value;n.key==="ArrowLeft"&&(n.preventDefault(),this.alpha=Nn(this.alpha-i,0,100),this.syncValues()),n.key==="ArrowRight"&&(n.preventDefault(),this.alpha=Nn(this.alpha+i,0,100),this.syncValues()),n.key==="Home"&&(n.preventDefault(),this.alpha=0,this.syncValues()),n.key==="End"&&(n.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(n){const i=n.shiftKey?10:1,s=this.value;n.key==="ArrowLeft"&&(n.preventDefault(),this.hue=Nn(this.hue-i,0,360),this.syncValues()),n.key==="ArrowRight"&&(n.preventDefault(),this.hue=Nn(this.hue+i,0,360),this.syncValues()),n.key==="Home"&&(n.preventDefault(),this.hue=0,this.syncValues()),n.key==="End"&&(n.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(n){const i=n.shiftKey?10:1,s=this.value;n.key==="ArrowLeft"&&(n.preventDefault(),this.saturation=Nn(this.saturation-i,0,100),this.syncValues()),n.key==="ArrowRight"&&(n.preventDefault(),this.saturation=Nn(this.saturation+i,0,100),this.syncValues()),n.key==="ArrowUp"&&(n.preventDefault(),this.brightness=Nn(this.brightness+i,0,100),this.syncValues()),n.key==="ArrowDown"&&(n.preventDefault(),this.brightness=Nn(this.brightness-i,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(n){const i=n.target,s=this.value;n.stopPropagation(),this.input.value?(this.setColor(i.value),i.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(n){this.formControlController.updateValidity(),n.stopPropagation()}handleInputKeyDown(n){if(n.key==="Enter"){const i=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(n){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(n)}handleTouchMove(n){n.preventDefault()}parseColor(n){const i=new gn(n);if(!i.isValid)return null;const s=i.toHsl(),o={h:s.h,s:s.s*100,l:s.l*100,a:s.a},d=i.toRgb(),f=i.toHexString(),g=i.toHex8String(),w=i.toHsv(),x={h:w.h,s:w.s*100,v:w.v*100,a:w.a};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},hsv:{h:x.h,s:x.s,v:x.v,string:this.setLetterCase(`hsv(${Math.round(x.h)}, ${Math.round(x.s)}%, ${Math.round(x.v)}%)`)},hsva:{h:x.h,s:x.s,v:x.v,a:x.a,string:this.setLetterCase(`hsva(${Math.round(x.h)}, ${Math.round(x.s)}%, ${Math.round(x.v)}%, ${x.a.toFixed(2).toString()})`)},rgb:{r:d.r,g:d.g,b:d.b,string:this.setLetterCase(`rgb(${Math.round(d.r)}, ${Math.round(d.g)}, ${Math.round(d.b)})`)},rgba:{r:d.r,g:d.g,b:d.b,a:d.a,string:this.setLetterCase(`rgba(${Math.round(d.r)}, ${Math.round(d.g)}, ${Math.round(d.b)}, ${d.a.toFixed(2).toString()})`)},hex:this.setLetterCase(f),hexa:this.setLetterCase(g)}}setColor(n){const i=this.parseColor(n);return i===null?!1:(this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=this.opacity?i.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(n){return typeof n!="string"?"":this.uppercase?n.toUpperCase():n.toLowerCase()}async syncValues(){const n=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);n!==null&&(this.format==="hsl"?this.inputValue=this.opacity?n.hsla.string:n.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?n.rgba.string:n.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?n.hsva.string:n.hsv.string:this.inputValue=this.opacity?n.hexa:n.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!u1)return;new EyeDropper().open().then(i=>{const s=this.value;this.setColor(i.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(n){const i=this.value;this.disabled||(this.setColor(n),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(n,i,s,o=100){const d=new gn(`hsva(${n}, ${i}%, ${s}%, ${o/100})`);return d.isValid?d.toHex8String():""}stopNestedEventPropagation(n){n.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(n,i){if(this.isEmpty=!i,i||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(i);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=n??""}}focus(n){this.inline?this.base.focus(n):this.trigger.focus(n)}blur(){var n;const i=this.inline?this.base:this.trigger;this.hasFocus&&(i.focus({preventScroll:!0}),i.blur()),(n=this.dropdown)!=null&&n.open&&this.dropdown.hide()}getFormattedValue(n="hex"){const i=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(i===null)return"";switch(n){case"hex":return i.hex;case"hexa":return i.hexa;case"rgb":return i.rgb.string;case"rgba":return i.rgba.string;case"hsl":return i.hsl.string;case"hsla":return i.hsla.string;case"hsv":return i.hsv.string;case"hsva":return i.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(n){this.input.setCustomValidity(n),this.formControlController.updateValidity()}render(){const n=this.saturation,i=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(d=>d.trim()!==""),o=kt`
      <div
        part="base"
        class=${te({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?kt`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${ka({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${te({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${ka({top:`${i}%`,left:`${n}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${Yt(this.disabled?void 0:"0")}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${ka({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${Yt(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?kt`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${ka({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${ka({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${Yt(this.disabled?void 0:"0")}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:""}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term("copy")}
            style=${ka({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?"":this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term("currentValue")}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?"":kt`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term("toggleColorFormat")}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${u1?kt`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term("selectAColorFromTheScreen")}
                    ></sl-icon>
                  </sl-button>
                `:""}
          </sl-button-group>
        </div>

        ${s.length>0?kt`
              <div part="swatches" class="color-picker__swatches">
                ${s.map(d=>{const f=this.parseColor(d);return f?kt`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${Yt(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${d}
                      @click=${()=>this.selectSwatch(d)}
                      @keydown=${g=>!this.disabled&&g.key==="Enter"&&this.setColor(f.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${ka({backgroundColor:f.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${d}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?o:kt`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?"true":"false"}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${te({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${ka({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${o}
      </sl-dropdown>
    `}};Ae.styles=[ee,m3];Ae.dependencies={"sl-button-group":Ro,"sl-button":Be,"sl-dropdown":ia,"sl-icon":Ke,"sl-input":ge,"sl-visually-hidden":_g};v([Mt('[part~="base"]')],Ae.prototype,"base",2);v([Mt('[part~="input"]')],Ae.prototype,"input",2);v([Mt(".color-dropdown")],Ae.prototype,"dropdown",2);v([Mt('[part~="preview"]')],Ae.prototype,"previewButton",2);v([Mt('[part~="trigger"]')],Ae.prototype,"trigger",2);v([Wt()],Ae.prototype,"hasFocus",2);v([Wt()],Ae.prototype,"isDraggingGridHandle",2);v([Wt()],Ae.prototype,"isEmpty",2);v([Wt()],Ae.prototype,"inputValue",2);v([Wt()],Ae.prototype,"hue",2);v([Wt()],Ae.prototype,"saturation",2);v([Wt()],Ae.prototype,"brightness",2);v([Wt()],Ae.prototype,"alpha",2);v([T()],Ae.prototype,"value",2);v([Fl()],Ae.prototype,"defaultValue",2);v([T()],Ae.prototype,"label",2);v([T()],Ae.prototype,"format",2);v([T({type:Boolean,reflect:!0})],Ae.prototype,"inline",2);v([T({reflect:!0})],Ae.prototype,"size",2);v([T({attribute:"no-format-toggle",type:Boolean})],Ae.prototype,"noFormatToggle",2);v([T()],Ae.prototype,"name",2);v([T({type:Boolean,reflect:!0})],Ae.prototype,"disabled",2);v([T({type:Boolean})],Ae.prototype,"hoist",2);v([T({type:Boolean})],Ae.prototype,"opacity",2);v([T({type:Boolean})],Ae.prototype,"uppercase",2);v([T()],Ae.prototype,"swatches",2);v([T({reflect:!0})],Ae.prototype,"form",2);v([T({type:Boolean,reflect:!0})],Ae.prototype,"required",2);v([Au({passive:!1})],Ae.prototype,"handleTouchMove",1);v([Dt("format",{waitUntilFirstUpdate:!0})],Ae.prototype,"handleFormatChange",1);v([Dt("opacity",{waitUntilFirstUpdate:!0})],Ae.prototype,"handleOpacityChange",1);v([Dt("value")],Ae.prototype,"handleValueChange",1);Ae.define("sl-color-picker");var z3=Zt`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,kw=class extends Pt{constructor(){super(...arguments),this.hasSlotController=new ga(this,"footer","header","image")}render(){return kt`
      <div
        part="base"
        class=${te({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};kw.styles=[ee,z3];kw.define("sl-card");var N3=class{constructor(n,i){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},n.addController(this),this.host=n,this.tickCallback=i}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(n){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},n)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},O3=Zt`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*j3(n,i){if(n!==void 0){let s=0;for(const o of n)yield i(o,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*D3(n,i,s=1){const o=i===void 0?0:n;i??(i=n);for(let d=o;s>0?d<i:i<d;d+=s)yield d}var yn=class extends Pt{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new N3(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new Oe(this),this.pendingSlideChange=!1,this.handleMouseDrag=n=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[n.clientX,n.clientY]),this.scrollContainer.scrollBy({left:-n.movementX,top:-n.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const n=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const i=n.scrollLeft,s=n.scrollTop;n.style.removeProperty("scroll-snap-type"),n.style.setProperty("overflow","hidden");const o=n.scrollLeft,d=n.scrollTop;n.style.removeProperty("overflow"),n.style.setProperty("scroll-snap-type","none"),n.scrollTo({left:i,top:s,behavior:"instant"}),requestAnimationFrame(async()=>{(i!==o||s!==d)&&(n.scrollTo({left:o,top:d,behavior:Pm()?"auto":"smooth"}),await ma(n,"scrollend")),n.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=n=>{n.some(s=>[...s.addedNodes,...s.removedNodes].some(o=>this.isCarouselItem(o)&&!o.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var n;super.disconnectedCallback(),(n=this.mutationObserver)==null||n.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(n){(n.has("slidesPerMove")||n.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const n=this.getSlides().length,{slidesPerPage:i,slidesPerMove:s,loop:o}=this,d=o?n/s:(n-i)/s+1;return Math.ceil(d)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:n=!0}={}){return[...this.children].filter(i=>this.isCarouselItem(i)&&(!n||!i.hasAttribute("data-clone")))}handleClick(n){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const i=Math.abs(this.dragStartPosition[0]-n.clientX),s=Math.abs(this.dragStartPosition[1]-n.clientY);Math.sqrt(i*i+s*s)>=10&&n.preventDefault()}}handleKeyDown(n){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(n.key)){const i=n.target,s=this.localize.dir()==="rtl",o=i.closest('[part~="pagination-item"]')!==null,d=n.key==="ArrowDown"||!s&&n.key==="ArrowRight"||s&&n.key==="ArrowLeft",f=n.key==="ArrowUp"||!s&&n.key==="ArrowLeft"||s&&n.key==="ArrowRight";n.preventDefault(),f&&this.previous(),d&&this.next(),n.key==="Home"&&this.goToSlide(0),n.key==="End"&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{var g;const w=(g=this.shadowRoot)==null?void 0:g.querySelector('[part~="pagination-item--active"]');w&&w.focus()})}}handleMouseDragStart(n){this.mouseDragging&&n.button===0&&(n.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const n=new IntersectionObserver(i=>{n.disconnect();for(const w of i){const x=w.target;x.toggleAttribute("inert",!w.isIntersecting),x.classList.toggle("--in-view",w.isIntersecting),x.setAttribute("aria-hidden",w.isIntersecting?"false":"true")}const s=i.find(w=>w.isIntersecting);if(!s)return;const o=this.getSlides({excludeClones:!1}),d=this.getSlides().length,f=o.indexOf(s.target),g=this.loop?f-this.slidesPerPage:f;if(this.activeSlide=(Math.ceil(g/this.slidesPerMove)*this.slidesPerMove+d)%d,!this.scrolling&&this.loop&&s.target.hasAttribute("data-clone")){const w=Number(s.target.getAttribute("data-clone"));this.goToSlide(w,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(i=>{n.observe(i)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(n){return n instanceof Element&&n.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((n,i)=>{n.classList.remove("--in-view"),n.classList.remove("--is-active"),n.setAttribute("role","group"),n.setAttribute("aria-label",this.localize.term("slideNum",i+1)),this.pagination&&(n.setAttribute("id",`slide-${i+1}`),n.setAttribute("role","tabpanel"),n.removeAttribute("aria-label"),n.setAttribute("aria-labelledby",`tab-${i+1}`)),n.hasAttribute("data-clone")&&n.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const n=this.getSlides(),i=this.slidesPerPage,s=n.slice(-i),o=n.slice(0,i);s.reverse().forEach((d,f)=>{const g=d.cloneNode(!0);g.setAttribute("data-clone",String(n.length-f-1)),this.prepend(g)}),o.forEach((d,f)=>{const g=d.cloneNode(!0);g.setAttribute("data-clone",String(f)),this.append(g)})}handleSlideChange(){const n=this.getSlides();n.forEach((i,s)=>{i.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:n[this.activeSlide]}})}updateSlidesSnap(){const n=this.getSlides(),i=this.slidesPerMove;n.forEach((s,o)=>{(o+i)%i===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(n="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,n)}next(n="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,n)}goToSlide(n,i="smooth"){const{slidesPerPage:s,loop:o}=this,d=this.getSlides(),f=this.getSlides({excludeClones:!1});if(!d.length)return;const g=o?(n+d.length)%d.length:Nn(n,0,d.length-s);this.activeSlide=g;const w=this.localize.dir()==="rtl",x=Nn(n+(o?s:0)+(w?s-1:0),0,f.length-1),C=f[x];this.scrollToSlide(C,Pm()?"auto":i)}scrollToSlide(n,i="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const s=this.scrollContainer,o=s.getBoundingClientRect(),d=n.getBoundingClientRect(),f=d.left-o.left,g=d.top-o.top;f||g?(this.pendingSlideChange=!0,s.scrollTo({left:f+s.scrollLeft,top:g+s.scrollTop,behavior:i})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:n,scrolling:i}=this,s=this.getPageCount(),o=this.getCurrentPage(),d=this.canScrollPrev(),f=this.canScrollNext(),g=this.localize.dir()==="ltr";return kt`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${te({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${i?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?kt`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${te({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!d})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${d?"false":"true"}"
                  @click=${d?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${g?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${te({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!f})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${f?"false":"true"}"
                  @click=${f?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${g?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?kt`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${j3(D3(s),w=>{const x=w===o;return kt`
                    <button
                      part="pagination-item ${x?"pagination-item--active":""}"
                      class="${te({"carousel__pagination-item":!0,"carousel__pagination-item--active":x})}"
                      role="tab"
                      id="tab-${w+1}"
                      aria-controls="slide-${w+1}"
                      aria-selected="${x?"true":"false"}"
                      aria-label="${x?this.localize.term("slideNum",w+1):this.localize.term("goToSlide",w+1,s)}"
                      tabindex=${x?"0":"-1"}
                      @click=${()=>this.goToSlide(w*n)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};yn.styles=[ee,O3];yn.dependencies={"sl-icon":Ke};v([T({type:Boolean,reflect:!0})],yn.prototype,"loop",2);v([T({type:Boolean,reflect:!0})],yn.prototype,"navigation",2);v([T({type:Boolean,reflect:!0})],yn.prototype,"pagination",2);v([T({type:Boolean,reflect:!0})],yn.prototype,"autoplay",2);v([T({type:Number,attribute:"autoplay-interval"})],yn.prototype,"autoplayInterval",2);v([T({type:Number,attribute:"slides-per-page"})],yn.prototype,"slidesPerPage",2);v([T({type:Number,attribute:"slides-per-move"})],yn.prototype,"slidesPerMove",2);v([T()],yn.prototype,"orientation",2);v([T({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],yn.prototype,"mouseDragging",2);v([Mt(".carousel__slides")],yn.prototype,"scrollContainer",2);v([Mt(".carousel__pagination")],yn.prototype,"paginationContainer",2);v([Wt()],yn.prototype,"activeSlide",2);v([Wt()],yn.prototype,"scrolling",2);v([Wt()],yn.prototype,"dragging",2);v([Au({passive:!0})],yn.prototype,"handleScroll",1);v([Dt("loop",{waitUntilFirstUpdate:!0}),Dt("slidesPerPage",{waitUntilFirstUpdate:!0})],yn.prototype,"initializeSlides",1);v([Dt("activeSlide")],yn.prototype,"handleSlideChange",1);v([Dt("slidesPerMove")],yn.prototype,"updateSlidesSnap",1);v([Dt("autoplay")],yn.prototype,"handleAutoplayChange",1);yn.define("sl-carousel");var R3=(n,i)=>{let s=0;return function(...o){window.clearTimeout(s),s=window.setTimeout(()=>{n.call(this,...o)},i)}},d1=(n,i,s)=>{const o=n[i];n[i]=function(...d){o.call(this,...d),s.call(this,o,...d)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const i=new Set,s=new WeakMap,o=f=>{for(const g of f.changedTouches)i.add(g.identifier)},d=f=>{for(const g of f.changedTouches)i.delete(g.identifier)};document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",d,!0),document.addEventListener("touchcancel",d,!0),d1(EventTarget.prototype,"addEventListener",function(f,g){if(g!=="scrollend")return;const w=R3(()=>{i.size?w():this.dispatchEvent(new Event("scrollend"))},100);f.call(this,"scroll",w,{passive:!0}),s.set(this,w)}),d1(EventTarget.prototype,"removeEventListener",function(f,g){if(g!=="scrollend")return;const w=s.get(this);w&&f.call(this,"scroll",w,{passive:!0})})}})();var M3=Zt`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Cw=class extends Pt{connectedCallback(){super.connectedCallback()}render(){return kt` <slot></slot> `}};Cw.styles=[ee,M3];Cw.define("sl-carousel-item");var $3=Zt`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,Ls=class extends Pt{constructor(){super(...arguments),this.hasSlotController=new ga(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const n=this.defaultSlot.assignedElements({flatten:!0}).filter(i=>i.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(n){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return kt`
      <div
        part="base"
        class=${te({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?kt`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${Yt(this.target?this.target:void 0)}"
                rel=${Yt(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?kt`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?kt`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:""}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Ls.styles=[ee,$3];v([Mt("slot:not([name])")],Ls.prototype,"defaultSlot",2);v([Wt()],Ls.prototype,"renderType",2);v([T()],Ls.prototype,"href",2);v([T()],Ls.prototype,"target",2);v([T()],Ls.prototype,"rel",2);v([Dt("href",{waitUntilFirstUpdate:!0})],Ls.prototype,"hrefChanged",1);Ls.define("sl-breadcrumb-item");Ro.define("sl-button-group");var L3=Zt`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,sr=class extends Pt{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const n=kt`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let i=kt``;return this.initials?i=kt`<div part="initials" class="avatar__initials">${this.initials}</div>`:i=kt`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,kt`
      <div
        part="base"
        class=${te({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?n:i}
      </div>
    `}};sr.styles=[ee,L3];sr.dependencies={"sl-icon":Ke};v([Wt()],sr.prototype,"hasError",2);v([T()],sr.prototype,"image",2);v([T()],sr.prototype,"label",2);v([T()],sr.prototype,"initials",2);v([T()],sr.prototype,"loading",2);v([T({reflect:!0})],sr.prototype,"shape",2);v([Dt("image")],sr.prototype,"handleImageChange",1);sr.define("sl-avatar");var B3=Zt`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Wl=class extends Pt{constructor(){super(...arguments),this.localize=new Oe(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const i=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),i.setAttribute("data-default",""),i.slot="separator",i}handleSlotChange(){const n=[...this.defaultSlot.assignedElements({flatten:!0})].filter(i=>i.tagName.toLowerCase()==="sl-breadcrumb-item");n.forEach((i,s)=>{const o=i.querySelector('[slot="separator"]');o===null?i.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),s===n.length-1?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),kt`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Wl.styles=[ee,B3];Wl.dependencies={"sl-icon":Ke};v([Mt("slot")],Wl.prototype,"defaultSlot",2);v([Mt('slot[name="separator"]')],Wl.prototype,"separatorSlot",2);v([T()],Wl.prototype,"label",2);Wl.define("sl-breadcrumb");Be.define("sl-button");var U3=Zt`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,ji=class extends Pt{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const n=document.createElement("canvas"),{width:i,height:s}=this.animatedImage;n.width=i,n.height=s,n.getContext("2d").drawImage(this.animatedImage,0,0,i,s),this.frozenFrame=n.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return kt`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?"false":"true"}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?kt`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?"true":"false"}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:""}
      </div>
    `}};ji.styles=[ee,U3];ji.dependencies={"sl-icon":Ke};v([Mt(".animated-image__animated")],ji.prototype,"animatedImage",2);v([Wt()],ji.prototype,"frozenFrame",2);v([Wt()],ji.prototype,"isLoaded",2);v([T()],ji.prototype,"src",2);v([T()],ji.prototype,"alt",2);v([T({type:Boolean,reflect:!0})],ji.prototype,"play",2);v([Dt("play",{waitUntilFirstUpdate:!0})],ji.prototype,"handlePlayChange",1);v([Dt("src")],ji.prototype,"handleSrcChange",1);ji.define("sl-animated-image");var H3=Zt`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Du=class extends Pt{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return kt`
      <span
        part="base"
        class=${te({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Du.styles=[ee,H3];v([T({reflect:!0})],Du.prototype,"variant",2);v([T({type:Boolean,reflect:!0})],Du.prototype,"pill",2);v([T({type:Boolean,reflect:!0})],Du.prototype,"pulse",2);Du.define("sl-badge");var I3=Zt`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Pa=class xo extends Pt{constructor(){super(...arguments),this.hasSlotController=new ga(this,"icon","suffix"),this.localize=new Oe(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var i;(i=this.countdownAnimation)==null||i.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var i;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(i=this.countdownAnimation)==null||i.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:i}=this,s="100%",o="0";this.countdownAnimation=i.animate([{width:s},{width:o}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await On(this.base),this.base.hidden=!1;const{keyframes:i,options:s}=rn(this,"alert.show",{dir:this.localize.dir()});await vn(this.base,i,s),this.emit("sl-after-show")}else{Ag(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await On(this.base);const{keyframes:i,options:s}=rn(this,"alert.hide",{dir:this.localize.dir()});await vn(this.base,i,s),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,ma(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ma(this,"sl-after-hide")}async toast(){return new Promise(i=>{this.handleCountdownChange(),xo.toastStack.parentElement===null&&document.body.append(xo.toastStack),xo.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{xo.toastStack.removeChild(this),i(),xo.toastStack.querySelector("sl-alert")===null&&xo.toastStack.remove()},{once:!0})})}render(){return kt`
      <div
        part="base"
        class=${te({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-hidden=${this.open?"false":"true"}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?kt`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?kt`
              <div
                class=${te({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Pa.styles=[ee,I3];Pa.dependencies={"sl-icon-button":$n};v([Mt('[part~="base"]')],Pa.prototype,"base",2);v([Mt(".alert__countdown-elapsed")],Pa.prototype,"countdownElement",2);v([T({type:Boolean,reflect:!0})],Pa.prototype,"open",2);v([T({type:Boolean,reflect:!0})],Pa.prototype,"closable",2);v([T({reflect:!0})],Pa.prototype,"variant",2);v([T({type:Number})],Pa.prototype,"duration",2);v([T({type:String,reflect:!0})],Pa.prototype,"countdown",2);v([Wt()],Pa.prototype,"remainingTime",2);v([Dt("open",{waitUntilFirstUpdate:!0})],Pa.prototype,"handleOpenChange",1);v([Dt("duration")],Pa.prototype,"handleDurationChange",1);var q3=Pa;$e("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});$e("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});q3.define("sl-alert");const V3=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],K3=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],G3=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],F3=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],Y3=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],P3=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],X3=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],Q3=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],Z3=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],W3=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],J3=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],tA=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],eA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],nA=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],aA=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],iA=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],rA=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],sA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],oA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],lA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],cA=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],uA=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],dA=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],hA=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],fA=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],pA=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],mA=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],gA=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],vA=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],bA=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],yA=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],wA=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],xA=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_A=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],SA=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],kA=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],CA=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],AA=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],TA=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],EA=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],zA=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],NA=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],OA=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],jA=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],DA=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],RA=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],MA=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],$A=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],LA=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],BA=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],UA=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],HA=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],IA=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],qA=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],VA=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],KA=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],GA=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],FA=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],YA=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],PA=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],XA=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],QA=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],ZA=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],WA=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],JA=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],tT=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],eT=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],nT=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],aT=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],iT=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],rT=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],sT=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],oT=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],lT=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],cT=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],uT=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],dT=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],hT=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],fT=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],pT=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],mT=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],gT=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],vT=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],bT=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],yT=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],wT=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],xT=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],_T=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],ST=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],kT=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],CT=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],AT=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],TT=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ET=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],zT=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],NT=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],OT=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],jT=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],Aw={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},DT=Object.freeze(Object.defineProperty({__proto__:null,backInDown:nA,backInLeft:aA,backInRight:iA,backInUp:rA,backOutDown:sA,backOutLeft:oA,backOutRight:lA,backOutUp:cA,bounce:V3,bounceIn:uA,bounceInDown:dA,bounceInLeft:hA,bounceInRight:fA,bounceInUp:pA,bounceOut:mA,bounceOutDown:gA,bounceOutLeft:vA,bounceOutRight:bA,bounceOutUp:yA,easings:Aw,fadeIn:wA,fadeInBottomLeft:xA,fadeInBottomRight:_A,fadeInDown:SA,fadeInDownBig:kA,fadeInLeft:CA,fadeInLeftBig:AA,fadeInRight:TA,fadeInRightBig:EA,fadeInTopLeft:zA,fadeInTopRight:NA,fadeInUp:OA,fadeInUpBig:jA,fadeOut:DA,fadeOutBottomLeft:RA,fadeOutBottomRight:MA,fadeOutDown:$A,fadeOutDownBig:LA,fadeOutLeft:BA,fadeOutLeftBig:UA,fadeOutRight:HA,fadeOutRightBig:IA,fadeOutTopLeft:qA,fadeOutTopRight:VA,fadeOutUp:KA,fadeOutUpBig:GA,flash:K3,flip:FA,flipInX:YA,flipInY:PA,flipOutX:XA,flipOutY:QA,headShake:G3,heartBeat:F3,hinge:yT,jackInTheBox:wT,jello:Y3,lightSpeedInLeft:ZA,lightSpeedInRight:WA,lightSpeedOutLeft:JA,lightSpeedOutRight:tT,pulse:P3,rollIn:xT,rollOut:_T,rotateIn:eT,rotateInDownLeft:nT,rotateInDownRight:aT,rotateInUpLeft:iT,rotateInUpRight:rT,rotateOut:sT,rotateOutDownLeft:oT,rotateOutDownRight:lT,rotateOutUpLeft:cT,rotateOutUpRight:uT,rubberBand:X3,shake:Q3,shakeX:Z3,shakeY:W3,slideInDown:dT,slideInLeft:hT,slideInRight:fT,slideInUp:pT,slideOutDown:mT,slideOutLeft:gT,slideOutRight:vT,slideOutUp:bT,swing:J3,tada:tA,wobble:eA,zoomIn:ST,zoomInDown:kT,zoomInLeft:CT,zoomInRight:AT,zoomInUp:TT,zoomOut:ET,zoomOutDown:zT,zoomOutLeft:NT,zoomOutRight:OT,zoomOutUp:jT},Symbol.toStringTag,{value:"Module"}));var RT=Zt`
  :host {
    display: contents;
  }
`,Yn=class extends Pt{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var n,i;return(i=(n=this.animation)==null?void 0:n.currentTime)!=null?i:0}set currentTime(n){this.animation&&(this.animation.currentTime=n)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var n,i;const s=(n=Aw[this.easing])!=null?n:this.easing,o=(i=this.keyframes)!=null?i:DT[this.name],f=(await this.defaultSlot).assignedElements()[0];return!f||!o?!1:(this.destroyAnimation(),this.animation=f.animate(o,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var n;(n=this.animation)==null||n.cancel()}finish(){var n;(n=this.animation)==null||n.finish()}render(){return kt` <slot @slotchange=${this.handleSlotChange}></slot> `}};Yn.styles=[ee,RT];v([GS("slot")],Yn.prototype,"defaultSlot",2);v([T()],Yn.prototype,"name",2);v([T({type:Boolean,reflect:!0})],Yn.prototype,"play",2);v([T({type:Number})],Yn.prototype,"delay",2);v([T()],Yn.prototype,"direction",2);v([T({type:Number})],Yn.prototype,"duration",2);v([T()],Yn.prototype,"easing",2);v([T({attribute:"end-delay",type:Number})],Yn.prototype,"endDelay",2);v([T()],Yn.prototype,"fill",2);v([T({type:Number})],Yn.prototype,"iterations",2);v([T({attribute:"iteration-start",type:Number})],Yn.prototype,"iterationStart",2);v([T({attribute:!1})],Yn.prototype,"keyframes",2);v([T({attribute:"playback-rate",type:Number})],Yn.prototype,"playbackRate",2);v([Dt(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Yn.prototype,"handleAnimationChange",1);v([Dt("play")],Yn.prototype,"handlePlayChange",1);v([Dt("playbackRate")],Yn.prototype,"handlePlaybackRateChange",1);Yn.define("sl-animation");Vm("/korean-srs/shoelace");iC({immediate:!0});ig();const $m=document.querySelector('meta[name="theme-color"]'),MT=window.matchMedia("(prefers-color-scheme: dark)");function Tw(){$m==null||$m.setAttribute("content",k1()==="dark"?"#0F1117":"#F8F9FA")}Tw();MT.addEventListener("change",()=>{ig(),Tw()});R_.createRoot(document.getElementById("root")).render(p.jsx(Bt.StrictMode,{children:p.jsx(tC,{})}));
