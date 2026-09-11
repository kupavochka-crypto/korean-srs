var n_=Object.defineProperty;var i_=(a,i,s)=>i in a?n_(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s;var Cs=(a,i,s)=>i_(a,typeof i!="symbol"?i+"":i,s);function r_(a,i){for(var s=0;s<i.length;s++){const o=i[s];if(typeof o!="string"&&!Array.isArray(o)){for(const d in o)if(d!=="default"&&!(d in a)){const f=Object.getOwnPropertyDescriptor(o,d);f&&Object.defineProperty(a,d,f.get?f:{enumerable:!0,get:()=>o[d]})}}}return Object.freeze(Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function s(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(d){if(d.ep)return;d.ep=!0;const f=s(d);fetch(d.href,f)}})();var s_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Jy(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var em={exports:{}},Ic={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ub;function o_(){if(Ub)return Ic;Ub=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function s(o,d,f){var g=null;if(f!==void 0&&(g=""+f),d.key!==void 0&&(g=""+d.key),"key"in d){f={};for(var x in d)x!=="key"&&(f[x]=d[x])}else f=d;return d=f.ref,{$$typeof:a,type:o,key:g,ref:d!==void 0?d:null,props:f}}return Ic.Fragment=i,Ic.jsx=s,Ic.jsxs=s,Ic}var Vb;function l_(){return Vb||(Vb=1,em.exports=o_()),em.exports}var m=l_(),am={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qb;function c_(){if(qb)return oe;qb=1;var a=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),N=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),T=Symbol.for("react.view_transition"),D=Symbol.iterator;function R(L){return L===null||typeof L!="object"?null:(L=D&&L[D]||L["@@iterator"],typeof L=="function"?L:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},mt=Object.assign,Ot={};function ut(L,xt,H){this.props=L,this.context=xt,this.refs=Ot,this.updater=H||W}ut.prototype.isReactComponent={},ut.prototype.setState=function(L,xt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,xt,"setState")},ut.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function St(){}St.prototype=ut.prototype;function rt(L,xt,H){this.props=L,this.context=xt,this.refs=Ot,this.updater=H||W}var dt=rt.prototype=new St;dt.constructor=rt,mt(dt,ut.prototype),dt.isPureReactComponent=!0;var kt=Array.isArray;function yt(){}var pt={H:null,A:null,T:null,S:null},it=Object.prototype.hasOwnProperty;function ft(L,xt,H){var ot=H.ref;return{$$typeof:a,type:L,key:xt,ref:ot!==void 0?ot:null,props:H}}function ee(L,xt){return ft(L.type,xt,L.props)}function le(L){return typeof L=="object"&&L!==null&&L.$$typeof===a}function pe(L){var xt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(H){return xt[H]})}var $e=/\/+/g;function ge(L,xt){return typeof L=="object"&&L!==null&&L.key!=null?pe(""+L.key):xt.toString(36)}function Et(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(yt,yt):(L.status="pending",L.then(function(xt){L.status==="pending"&&(L.status="fulfilled",L.value=xt)},function(xt){L.status==="pending"&&(L.status="rejected",L.reason=xt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function Yt(L,xt,H,ot,vt){var Mt=typeof L;(Mt==="undefined"||Mt==="boolean")&&(L=null);var gt=!1;if(L===null)gt=!0;else switch(Mt){case"bigint":case"string":case"number":gt=!0;break;case"object":switch(L.$$typeof){case a:case i:gt=!0;break;case N:return gt=L._init,Yt(gt(L._payload),xt,H,ot,vt)}}if(gt)return vt=vt(L),gt=ot===""?"."+ge(L,0):ot,kt(vt)?(H="",gt!=null&&(H=gt.replace($e,"$&/")+"/"),Yt(vt,xt,H,"",function(we){return we})):vt!=null&&(le(vt)&&(vt=ee(vt,H+(vt.key==null||L&&L.key===vt.key?"":(""+vt.key).replace($e,"$&/")+"/")+gt)),xt.push(vt)),1;gt=0;var Nt=ot===""?".":ot+":";if(kt(L))for(var Ct=0;Ct<L.length;Ct++)ot=L[Ct],Mt=Nt+ge(ot,Ct),gt+=Yt(ot,xt,H,Mt,vt);else if(Ct=R(L),typeof Ct=="function")for(L=Ct.call(L),Ct=0;!(ot=L.next()).done;)ot=ot.value,Mt=Nt+ge(ot,Ct++),gt+=Yt(ot,xt,H,Mt,vt);else if(Mt==="object"){if(typeof L.then=="function")return Yt(Et(L),xt,H,ot,vt);throw xt=String(L),Error("Objects are not valid as a React child (found: "+(xt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":xt)+"). If you meant to render a collection of children, use an array instead.")}return gt}function Bt(L,xt,H){if(L==null)return L;var ot=[],vt=0;return Yt(L,ot,"","",function(Mt){return xt.call(H,Mt,vt++)}),ot}function ie(L){if(L._status===-1){var xt=L._result,H=xt();H.then(function(ot){(L._status===0||L._status===-1)&&(L._status=1,L._result=ot,H.status===void 0&&(H.status="fulfilled",H.value=ot))},function(ot){(L._status===0||L._status===-1)&&(L._status=2,L._result=ot,H.status===void 0&&(H.status="rejected",H.reason=ot))}),L._status===-1&&(L._status=0,L._result=H)}if(L._status===1)return L._result.default;throw L._result}var jt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var xt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(xt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)};function Ge(L){var xt=pt.T,H={};H.types=xt!==null?xt.types:null,pt.T=H;try{var ot=L(),vt=pt.S;vt!==null&&vt(H,ot),typeof ot=="object"&&ot!==null&&typeof ot.then=="function"&&ot.then(yt,jt)}catch(Mt){jt(Mt)}finally{xt!==null&&H.types!==null&&(xt.types=H.types),pt.T=xt}}function ma(L){var xt=pt.T;if(xt!==null){var H=xt.types;H===null?xt.types=[L]:H.indexOf(L)===-1&&H.push(L)}else Ge(ma.bind(null,L))}var Gn={map:Bt,forEach:function(L,xt,H){Bt(L,function(){xt.apply(this,arguments)},H)},count:function(L){var xt=0;return Bt(L,function(){xt++}),xt},toArray:function(L){return Bt(L,function(xt){return xt})||[]},only:function(L){if(!le(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return oe.Activity=_,oe.Children=Gn,oe.Component=ut,oe.Fragment=s,oe.Profiler=d,oe.PureComponent=rt,oe.StrictMode=o,oe.Suspense=S,oe.ViewTransition=T,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=pt,oe.__COMPILER_RUNTIME={__proto__:null,c:function(L){return pt.H.useMemoCache(L)}},oe.addTransitionType=ma,oe.cache=function(L){return function(){return L.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(L,xt,H){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var ot=mt({},L.props),vt=L.key;if(xt!=null)for(Mt in xt.key!==void 0&&(vt=""+xt.key),xt)!it.call(xt,Mt)||Mt==="key"||Mt==="__self"||Mt==="__source"||Mt==="ref"&&xt.ref===void 0||(ot[Mt]=xt[Mt]);var Mt=arguments.length-2;if(Mt===1)ot.children=H;else if(1<Mt){for(var gt=Array(Mt),Nt=0;Nt<Mt;Nt++)gt[Nt]=arguments[Nt+2];ot.children=gt}return ft(L.type,vt,ot)},oe.createContext=function(L){return L={$$typeof:g,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:f,_context:L},L},oe.createElement=function(L,xt,H){var ot,vt={},Mt=null;if(xt!=null)for(ot in xt.key!==void 0&&(Mt=""+xt.key),xt)it.call(xt,ot)&&ot!=="key"&&ot!=="__self"&&ot!=="__source"&&(vt[ot]=xt[ot]);var gt=arguments.length-2;if(gt===1)vt.children=H;else if(1<gt){for(var Nt=Array(gt),Ct=0;Ct<gt;Ct++)Nt[Ct]=arguments[Ct+2];vt.children=Nt}if(L&&L.defaultProps)for(ot in gt=L.defaultProps,gt)vt[ot]===void 0&&(vt[ot]=gt[ot]);return ft(L,Mt,vt)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(L){return{$$typeof:x,render:L}},oe.isValidElement=le,oe.lazy=function(L){return{$$typeof:N,_payload:{_status:-1,_result:L},_init:ie}},oe.memo=function(L,xt){return{$$typeof:E,type:L,compare:xt===void 0?null:xt}},oe.startTransition=Ge,oe.unstable_useCacheRefresh=function(){return pt.H.useCacheRefresh()},oe.use=function(L){return pt.H.use(L)},oe.useActionState=function(L,xt,H){return pt.H.useActionState(L,xt,H)},oe.useCallback=function(L,xt){return pt.H.useCallback(L,xt)},oe.useContext=function(L){return pt.H.useContext(L)},oe.useDebugValue=function(){},oe.useDeferredValue=function(L,xt){return pt.H.useDeferredValue(L,xt)},oe.useEffect=function(L,xt){return pt.H.useEffect(L,xt)},oe.useEffectEvent=function(L){return pt.H.useEffectEvent(L)},oe.useId=function(){return pt.H.useId()},oe.useImperativeHandle=function(L,xt,H){return pt.H.useImperativeHandle(L,xt,H)},oe.useInsertionEffect=function(L,xt){return pt.H.useInsertionEffect(L,xt)},oe.useLayoutEffect=function(L,xt){return pt.H.useLayoutEffect(L,xt)},oe.useMemo=function(L,xt){return pt.H.useMemo(L,xt)},oe.useOptimistic=function(L,xt){return pt.H.useOptimistic(L,xt)},oe.useReducer=function(L,xt,H){return pt.H.useReducer(L,xt,H)},oe.useRef=function(L){return pt.H.useRef(L)},oe.useState=function(L){return pt.H.useState(L)},oe.useSyncExternalStore=function(L,xt,H){return pt.H.useSyncExternalStore(L,xt,H)},oe.useTransition=function(){return pt.H.useTransition()},oe.version="19.3.0",oe}var Ib;function Ym(){return Ib||(Ib=1,am.exports=c_()),am.exports}var te=Ym();const u_=Jy(te),d_=r_({__proto__:null,default:u_},[te]);var nm={exports:{}},Kc={},im={exports:{}},rm={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kb;function h_(){return Kb||(Kb=1,(function(a){function i(Et,Yt){var Bt=Et.length;Et.push(Yt);t:for(;0<Bt;){var ie=Bt-1>>>1,jt=Et[ie];if(0<d(jt,Yt))Et[ie]=Yt,Et[Bt]=jt,Bt=ie;else break t}}function s(Et){return Et.length===0?null:Et[0]}function o(Et){if(Et.length===0)return null;var Yt=Et[0],Bt=Et.pop();if(Bt!==Yt){Et[0]=Bt;t:for(var ie=0,jt=Et.length,Ge=jt>>>1;ie<Ge;){var ma=2*(ie+1)-1,Gn=Et[ma],L=ma+1,xt=Et[L];if(0>d(Gn,Bt))L<jt&&0>d(xt,Gn)?(Et[ie]=xt,Et[L]=Bt,ie=L):(Et[ie]=Gn,Et[ma]=Bt,ie=ma);else if(L<jt&&0>d(xt,Bt))Et[ie]=xt,Et[L]=Bt,ie=L;else break t}}return Yt}function d(Et,Yt){var Bt=Et.sortIndex-Yt.sortIndex;return Bt!==0?Bt:Et.id-Yt.id}if(a.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;a.unstable_now=function(){return f.now()}}else{var g=Date,x=g.now();a.unstable_now=function(){return g.now()-x}}var S=[],E=[],N=1,_=null,T=3,D=!1,R=!1,W=!1,mt=!1,Ot=typeof setTimeout=="function"?setTimeout:null,ut=typeof clearTimeout=="function"?clearTimeout:null,St=typeof setImmediate<"u"?setImmediate:null;function rt(Et){for(var Yt=s(E);Yt!==null;){if(Yt.callback===null)o(E);else if(Yt.startTime<=Et)o(E),Yt.sortIndex=Yt.expirationTime,i(S,Yt);else break;Yt=s(E)}}function dt(Et){if(W=!1,rt(Et),!R)if(s(S)!==null)R=!0,kt||(kt=!0,le());else{var Yt=s(E);Yt!==null&&ge(dt,Yt.startTime-Et)}}var kt=!1,yt=-1,pt=5,it=-1;function ft(){return mt?!0:!(a.unstable_now()-it<pt)}function ee(){if(mt=!1,kt){var Et=a.unstable_now();it=Et;var Yt=!0;try{t:{R=!1,W&&(W=!1,ut(yt),yt=-1),D=!0;var Bt=T;try{e:{for(rt(Et),_=s(S);_!==null&&!(_.expirationTime>Et&&ft());){var ie=_.callback;if(typeof ie=="function"){_.callback=null,T=_.priorityLevel;var jt=ie(_.expirationTime<=Et);if(Et=a.unstable_now(),typeof jt=="function"){_.callback=jt,rt(Et),Yt=!0;break e}_===s(S)&&o(S),rt(Et)}else o(S);_=s(S)}if(_!==null)Yt=!0;else{var Ge=s(E);Ge!==null&&ge(dt,Ge.startTime-Et),Yt=!1}}break t}finally{_=null,T=Bt,D=!1}Yt=void 0}}finally{Yt?le():kt=!1}}}var le;if(typeof St=="function")le=function(){St(ee)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,$e=pe.port2;pe.port1.onmessage=ee,le=function(){$e.postMessage(null)}}else le=function(){Ot(ee,0)};function ge(Et,Yt){yt=Ot(function(){Et(a.unstable_now())},Yt)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(Et){Et.callback=null},a.unstable_forceFrameRate=function(Et){0>Et||125<Et?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):pt=0<Et?Math.floor(1e3/Et):5},a.unstable_getCurrentPriorityLevel=function(){return T},a.unstable_next=function(Et){switch(T){case 1:case 2:case 3:var Yt=3;break;default:Yt=T}var Bt=T;T=Yt;try{return Et()}finally{T=Bt}},a.unstable_requestPaint=function(){mt=!0},a.unstable_runWithPriority=function(Et,Yt){switch(Et){case 1:case 2:case 3:case 4:case 5:break;default:Et=3}var Bt=T;T=Et;try{return Yt()}finally{T=Bt}},a.unstable_scheduleCallback=function(Et,Yt,Bt){var ie=a.unstable_now();switch(typeof Bt=="object"&&Bt!==null?(Bt=Bt.delay,Bt=typeof Bt=="number"&&0<Bt?ie+Bt:ie):Bt=ie,Et){case 1:var jt=-1;break;case 2:jt=250;break;case 5:jt=1073741823;break;case 4:jt=1e4;break;default:jt=5e3}return jt=Bt+jt,Et={id:N++,callback:Yt,priorityLevel:Et,startTime:Bt,expirationTime:jt,sortIndex:-1},Bt>ie?(Et.sortIndex=Bt,i(E,Et),s(S)===null&&Et===s(E)&&(W?(ut(yt),yt=-1):W=!0,ge(dt,Bt-ie))):(Et.sortIndex=jt,i(S,Et),R||D||(R=!0,kt||(kt=!0,le()))),Et},a.unstable_shouldYield=ft,a.unstable_wrapCallback=function(Et){var Yt=T;return function(){var Bt=T;T=Yt;try{return Et.apply(this,arguments)}finally{T=Bt}}}})(rm)),rm}var Fb;function f_(){return Fb||(Fb=1,im.exports=h_()),im.exports}var sm={exports:{}},Za={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gb;function p_(){if(Gb)return Za;Gb=1;var a=Ym();function i(N){var _="https://react.dev/errors/"+N;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)_+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+N+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var o={d:{f:s,r:function(){throw Error(i(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),g=Symbol.for("react.optimistic_key");function x(N,_,T){var D=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:D==null?null:D===g?g:""+D,children:N,containerInfo:_,implementation:T}}var S=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(N,_){if(N==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Za.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Za.browser=function(N){return{$$typeof:f,_reason:N}},Za.createPortal=function(N,_){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(i(299));return x(N,_,null,T)},Za.flushSync=function(N){var _=S.T,T=o.p;try{if(S.T=null,o.p=2,N)return N()}finally{S.T=_,o.p=T,o.d.f()}},Za.preconnect=function(N,_){typeof N=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,o.d.C(N,_))},Za.prefetchDNS=function(N){typeof N=="string"&&o.d.D(N)},Za.preinit=function(N,_){if(typeof N=="string"&&_&&typeof _.as=="string"){var T=_.as,D=E(T,_.crossOrigin),R=typeof _.integrity=="string"?_.integrity:void 0,W=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;T==="style"?o.d.S(N,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:D,integrity:R,fetchPriority:W}):T==="script"&&o.d.X(N,{crossOrigin:D,integrity:R,fetchPriority:W,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Za.preinitModule=function(N,_){if(typeof N=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var T=E(_.as,_.crossOrigin);o.d.M(N,{crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&o.d.M(N)},Za.preload=function(N,_){if(typeof N=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var T=_.as,D=E(T,_.crossOrigin);o.d.L(N,T,{crossOrigin:D,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Za.preloadModule=function(N,_){if(typeof N=="string")if(_){var T=E(_.as,_.crossOrigin);o.d.m(N,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:T,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else o.d.m(N)},Za.requestFormReset=function(N){o.d.r(N)},Za.unstable_batchedUpdates=function(N,_){return N(_)},Za.useFormState=function(N,_,T){return S.H.useFormState(N,_,T)},Za.useFormStatus=function(){return S.H.useHostTransitionStatus()},Za.version="19.3.0",Za}var Yb;function m_(){if(Yb)return sm.exports;Yb=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),sm.exports=p_(),sm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pb;function g_(){if(Pb)return Kc;Pb=1;var a=f_(),i=Ym(),s=m_();function o(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var e=t,n=e;n&&!n.alternate;)e=n,(e.flags&4098)!==0&&(t=e.return),n=e.return;for(;e.return;)e=e.return;return e.tag===3?t:null}function g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function x(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function S(t){if(f(t)!==t)throw Error(o(188))}function E(t){var e=t.alternate;if(!e){if(e=f(t),e===null)throw Error(o(188));return e!==t?null:t}for(var n=t,r=e;;){var l=n.return;if(l===null)break;var u=l.alternate;if(u===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===u.child){for(u=l.child;u;){if(u===n)return S(l),t;if(u===r)return S(l),e;u=u.sibling}throw Error(o(188))}if(n.return!==r.return)n=l,r=u;else{for(var b=!1,C=l.child;C;){if(C===n){b=!0,n=l,r=u;break}if(C===r){b=!0,r=l,n=u;break}C=C.sibling}if(!b){for(C=u.child;C;){if(C===n){b=!0,n=u,r=l;break}if(C===r){b=!0,r=u,n=l;break}C=C.sibling}if(!b)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?t:e}function N(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=N(t),e!==null)return e;t=t.sibling}return null}function _(t,e,n,r,l,u){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&n(t,r,l,u)||(t.tag!==22||t.memoizedState===null)&&(e||t.tag!==5&&t.tag!==27)&&_(t.child,e,n,r,l,u))return!0;t=t.sibling}return!1}function T(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function D(t){var e=!1;for(t=t.return;t!==null&&(t.tag===4&&(e=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return e}function R(t){var e=[null,null],n=T(t);return n===null||W(e,t,n.child,{foundSelf:!1}),e}function W(t,e,n,r){for(;n!==null;){if(n===e)r.foundSelf=!0;else if(n.tag===5||n.tag===27||n.tag===6){if(r.foundSelf)return t[1]=n,!0;t[0]=n}else if((n.tag!==22||n.memoizedState===null)&&W(t,e,n.child,r))return!0;n=n.sibling}return!1}function mt(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(o(559))}}var Ot=null,ut=null;function St(t,e,n){return t===n?!0:t===e?(Ot=t,!0):!1}function rt(t,e,n){return t===n?(ut=t,!1):t===e?(ut!==null&&(Ot=t),!0):!1}function dt(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function kt(t,e,n){for(var r=0,l=t;l;l=n(l))r++;l=0;for(var u=e;u;u=n(u))l++;for(;0<r-l;)t=n(t),r--;for(;0<l-r;)e=n(e),l--;for(;r--;){if(t===e||e!==null&&t===e.alternate)return t;t=n(t),e=n(e)}return null}var yt=Object.assign,pt=Symbol.for("react.element"),it=Symbol.for("react.transitional.element"),ft=Symbol.for("react.portal"),ee=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),$e=Symbol.for("react.consumer"),ge=Symbol.for("react.context"),Et=Symbol.for("react.forward_ref"),Yt=Symbol.for("react.suspense"),Bt=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),jt=Symbol.for("react.lazy"),Ge=Symbol.for("react.activity"),ma=Symbol.for("react.legacy_hidden"),Gn=Symbol.for("react.memo_cache_sentinel"),L=Symbol.for("react.view_transition"),xt=Symbol.for("react.recoverable"),H=Symbol.iterator;function ot(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Symbol.for("react.client.reference");function Mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===vt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ee:return"Fragment";case pe:return"Profiler";case le:return"StrictMode";case Yt:return"Suspense";case Bt:return"SuspenseList";case Ge:return"Activity";case L:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case ft:return"Portal";case ge:return t.displayName||"Context";case $e:return(t._context.displayName||"Context")+".Consumer";case Et:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ie:return e=t.displayName||null,e!==null?e:Mt(t.type)||"Memo";case jt:e=t._payload,t=t._init;try{return Mt(t(e))}catch{}}return null}var gt=Array.isArray,Nt=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ct=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we={pending:!1,data:null,method:null,action:null},ba=[],ya=-1;function an(t){return{current:t}}function sa(t){0>ya||(t.current=ba[ya],ba[ya]=null,ya--)}function ce(t,e){ya++,ba[ya]=t.current,t.current=e}var Yn=an(null),rr=an(null),Na=an(null),Rs=an(null);function Ni(t,e){switch(ce(Na,e),ce(rr,t),ce(Yn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?X0(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=X0(e),t=Q0(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}sa(Yn),ce(Yn,t)}function sr(){sa(Yn),sa(rr),sa(Na)}function or(t){var e=t.memoizedState;e!==null&&(El._currentValue=e.memoizedState,ce(Rs,t)),e=Yn.current;var n=Q0(e,t.type);e!==n&&(ce(rr,t),ce(Yn,n))}function Ma(t){rr.current===t&&(sa(Yn),sa(rr)),Rs.current===t&&(sa(Rs),El._currentValue=we)}var ui,Oo;function gn(t){if(ui===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ui=e&&e[1]||"",Oo=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ui+t+Oo}var Ms=!1;function Ir(t,e){if(!t||Ms)return"";Ms=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(e){var ct=function(){throw Error()};if(Object.defineProperty(ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ct,[])}catch(Rt){var I=Rt}Reflect.construct(t,[],ct)}else{try{ct.call()}catch(Rt){I=Rt}ct=!1;try{var tt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ct=!0,new t}finally{ct&&(tt!==void 0?Object.defineProperty(t.prototype,"props",tt):delete t.prototype.props)}}}else{try{throw Error()}catch(Rt){I=Rt}(ct=t())&&typeof ct.catch=="function"&&ct.catch(function(){})}}catch(Rt){if(Rt&&I&&typeof Rt.stack=="string")return[Rt.stack,I.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=r.DetermineComponentFrameRoot(),b=u[0],C=u[1];if(b&&C){var j=b.split(`
`),P=C.split(`
`);for(l=r=0;r<j.length&&!j[r].includes("DetermineComponentFrameRoot");)r++;for(;l<P.length&&!P[l].includes("DetermineComponentFrameRoot");)l++;if(r===j.length||l===P.length)for(r=j.length-1,l=P.length-1;1<=r&&0<=l&&j[r]!==P[l];)l--;for(;1<=r&&0<=l;r--,l--)if(j[r]!==P[l]){if(r!==1||l!==1)do if(r--,l--,0>l||j[r]!==P[l]){var nt=`
`+j[r].replace(" at new "," at ");return t.displayName&&nt.includes("<anonymous>")&&(nt=nt.replace("<anonymous>",t.displayName)),nt}while(1<=r&&0<=l);break}}}finally{Ms=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?gn(n):""}function lr(t,e){switch(t.tag){case 26:case 27:case 5:return gn(t.type);case 16:return gn("Lazy");case 13:return t.child!==e&&e!==null?gn("Suspense Fallback"):gn("Suspense");case 19:return gn("SuspenseList");case 0:case 15:return Ir(t.type,!1);case 11:return Ir(t.type.render,!1);case 1:return Ir(t.type,!0);case 31:return gn("Activity");case 30:return gn("ViewTransition");default:return""}}function $s(t){try{var e="",n=null;do e+=lr(t,n),n=t,t=t.return;while(t);return e}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ls=Object.prototype.hasOwnProperty,kn=a.unstable_scheduleCallback,Kt=a.unstable_cancelCallback,Bs=a.unstable_shouldYield,cr=a.unstable_requestPaint,$a=a.unstable_now,Lt=a.unstable_getCurrentPriorityLevel,jo=a.unstable_ImmediatePriority,Fl=a.unstable_UserBlockingPriority,Kr=a.unstable_NormalPriority,Tu=a.unstable_LowPriority,Do=a.unstable_IdlePriority,Bh=a.log,Hh=a.unstable_setDisableYieldValue,Pn=null,xa=null;function Xn(t){if(typeof Bh=="function"&&Hh(t),xa&&typeof xa.setStrictMode=="function")try{xa.setStrictMode(Pn,t)}catch{}}var La=Math.clz32?Math.clz32:Uh,Ie=Math.log,wa=Math.LN2;function Uh(t){return t>>>=0,t===0?32:31-(Ie(t)/wa|0)|0}var ur=256,dr=262144,hr=4194304;function fr(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Cn(t,e,n){var r=t.pendingLanes;if(r===0)return 0;var l=0,u=t.suspendedLanes,b=t.pingedLanes;t=t.warmLanes;var C=r&134217727;return C!==0?(r=C&~u,r!==0?l=fr(r):(b&=C,b!==0?l=fr(b):n||(n=C&~t,n!==0&&(l=fr(n))))):(C=r&~u,C!==0?l=fr(C):b!==0?l=fr(b):n||(n=r&~t,n!==0&&(l=fr(n)))),l===0?0:e!==0&&e!==l&&(e&u)===0&&(u=l&-l,n=e&-e,u>=n||u===32&&(n&4194048)!==0)?e:l}function Qn(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function di(t,e){(e&8)!==0&&(e|=e&32);var n=t.entangledLanes;if(n!==0)for(t=t.entanglements,n&=e;0<n;){var r=31-La(n),l=1<<r;e|=t[r],n&=~l}return e}function Ro(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zu(){var t=hr;return hr<<=1,(hr&62914560)===0&&(hr=4194304),t}function Zn(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fr(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function pr(t,e,n,r,l,u){var b=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var C=t.entanglements,j=t.expirationTimes,P=t.hiddenUpdates;for(n=b&~n;0<n;){var nt=31-La(n),ct=1<<nt;C[nt]=0,j[nt]=-1;var I=P[nt];if(I!==null)for(P[nt]=null,nt=0;nt<I.length;nt++){var tt=I[nt];tt!==null&&(tt.lane&=-536870913)}n&=~ct}r!==0&&Gl(t,r,0),u!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=u&~(b&~e))}function Gl(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var r=31-La(e);t.entangledLanes|=e,t.entanglements[r]=t.entanglements[r]|1073741824|n&261930}function Mo(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-La(n),l=1<<r;l&e|t[r]&e&&(t[r]|=e),n&=~l}}function Ye(t,e){var n=e&-e;return n=(n&42)!==0?1:hi(n),(n&(t.suspendedLanes|e))!==0?0:n}function hi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function An(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Yl(){var t=Ct.p;return t!==0?t:(t=window.event,t===void 0?32:Db(t.type))}function Hs(t,e){var n=Ct.p;try{return Ct.p=t,e()}finally{Ct.p=n}}var En=Math.random().toString(36).slice(2),ga="__reactFiber$"+En,oa="__reactProps$"+En,mr="__reactContainer$"+En,Us="__reactEvents$"+En,Nu="__reactListeners$"+En,be="__reactHandles$"+En,Pl="__reactResources$"+En,Gr="__reactMarker$"+En,gr="__reactLoad$"+En;function Oi(t){delete t[ga],delete t[oa],delete t[Nu],delete t[be]}function ji(t){var e;if(e=t[ga])return e;for(var n=t.parentNode;n;){if(e=n[mr]||n[ga]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=fb(t);t!==null;){if(n=t[ga])return n;t=fb(t)}return e}t=n,n=t.parentNode}return null}function vr(t){if(t=t[ga]||t[mr]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Yr(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(o(33))}function Te(t){var e=t[Pl];return e||(e=t[Pl]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function Pe(t){t[Gr]=!0}function Pr(t){t[gr]=void 0}var br=new Set,$o={};function fi(t,e){pi(t,e),pi(t+"Capture",e)}function pi(t,e){for($o[t]=e,t=0;t<e.length;t++)br.add(e[t])}var Ou=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vs={},Xl={};function Vh(t){return Ls.call(Xl,t)?!0:Ls.call(Vs,t)?!1:Ou.test(t)?Xl[t]=!0:(Vs[t]=!0,!1)}var qt=!1;function Ql(){var t=qt;return qt=!1,t}function Lo(t,e,n){if(Vh(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var r=e.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,n)}}function Bo(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,n)}}function ta(t,e,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,r)}}function _a(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qs(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Di(t,e,n){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,u=r.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return l.call(this)},set:function(b){n=""+b,u.call(this,b)}}),Object.defineProperty(t,e,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(b){n=""+b},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ho(t){if(!t._valueTracker){var e=qs(t)?"checked":"value";t._valueTracker=Di(t,e,""+t[e])}}function Zl(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qs(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}var Sa=/[\n"\\]/g;function Xe(t){return t.replace(Sa,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function yr(t,e,n,r,l,u,b,C){t.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?t.type=b:t.removeAttribute("type"),e!=null?b==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+_a(e)):t.value!==""+_a(e)&&(t.value=""+_a(e)):b!=="submit"&&b!=="reset"||t.removeAttribute("value"),e!=null?b==="number"&&t.value==e?Ks(t,_a(t.value)):Ks(t,_a(e)):n!=null?Ks(t,_a(n)):r!=null&&t.removeAttribute("value"),l==null&&u!=null&&(t.defaultChecked=!!u),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+_a(C):t.removeAttribute("name")}function Is(t,e,n,r,l,u,b,C){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.type=u),e!=null||n!=null){if(!(u!=="submit"&&u!=="reset"||e!=null)){Ho(t);return}n=n!=null?""+_a(n):"",e=e!=null?""+_a(e):n,C||e===t.value||(t.value=e),t.defaultValue=e}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=C?t.checked:!!r,t.defaultChecked=!!r,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(t.name=b),Ho(t)}function Ks(t,e){t.defaultValue!==""+e&&(t.defaultValue=""+e)}function on(t,e,n,r){if(t=t.options,e){e={};for(var l=0;l<n.length;l++)e["$"+n[l]]=!0;for(n=0;n<t.length;n++)l=e.hasOwnProperty("$"+t[n].value),t[n].selected!==l&&(t[n].selected=l),l&&r&&(t[n].defaultSelected=!0)}else{for(n=""+_a(n),e=null,l=0;l<t.length;l++){if(t[l].value===n){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}e!==null||t[l].disabled||(e=t[l])}e!==null&&(e.selected=!0)}}function ju(t,e,n){if(e!=null&&(e=""+_a(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+_a(n):""}function Tn(t,e,n,r){if(e==null){if(r!=null){if(n!=null)throw Error(o(92));if(gt(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}n==null&&(n=""),e=n}n=_a(e),t.defaultValue=n,r=t.textContent,r===n&&r!==""&&r!==null&&(t.value=r),Ho(t)}function Ri(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Du=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uo(t,e,n){var r=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?r?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":r?t.setProperty(e,n):typeof n!="number"||n===0||Du.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function Xr(t,e,n){if(e!=null&&typeof e!="object")throw Error(o(62));if(t=t.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||e!=null&&e.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",qt=!0);for(var l in e)r=e[l],e.hasOwnProperty(l)&&n[l]!==r&&(Uo(t,l,r),qt=!0)}else for(var u in e)e.hasOwnProperty(u)&&Uo(t,u,e[u])}function Fs(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ru=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Mi(t){return qh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Wn(){}var Wl=null;function Qr(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mi=null,$i=null;function Mu(t){var e=vr(t);if(e&&(t=e.stateNode)){var n=t[oa]||null;t:switch(t=e.stateNode,e.type){case"input":if(yr(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Xe(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var l=r[oa]||null;if(!l)throw Error(o(90));yr(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(e=0;e<n.length;e++)r=n[e],r.form===t.form&&Zl(r)}break t;case"textarea":ju(t,n.value,n.defaultValue);break t;case"select":e=n.value,e!=null&&on(t,!!n.multiple,e,!1)}}}var Jl=!1;function $u(t,e,n){if(Jl)return t(e,n);Jl=!0;try{var r=t(e);return r}finally{if(Jl=!1,(mi!==null||$i!==null)&&(Bd(),mi&&(e=mi,t=$i,$i=mi=null,Mu(e),t)))for(e=0;e<t.length;e++)Mu(t[e])}}function xr(t,e){var n=t.stateNode;if(n===null)return null;var r=n[oa]||null;if(r===null)return null;n=r[e];t:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(o(231,e,typeof n));return n}var zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vo=!1;if(zn)try{var Li={};Object.defineProperty(Li,"passive",{get:function(){Vo=!0}}),window.addEventListener("test",Li,Li),window.removeEventListener("test",Li,Li)}catch{Vo=!1}var Nn=null,Zr=null,Gs=null;function Lu(){if(Gs)return Gs;var t,e=Zr,n=e.length,r,l="value"in Nn?Nn.value:Nn.textContent,u=l.length;for(t=0;t<n&&e[t]===l[t];t++);var b=n-t;for(r=1;r<=b&&e[n-r]===l[u-r];r++);return Gs=l.slice(t,1<r?1-r:void 0)}function gi(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bi(){return!0}function qo(){return!1}function Oa(t){function e(n,r,l,u,b){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=u,this.target=b,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(n=t[C],this[C]=n?n(u):u[C]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Bi:qo,this.isPropagationStopped=qo,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bi)},persist:function(){},isPersistent:Bi}),e}var Jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wr=Oa(Jn),la=yt({},Jn,{view:0,detail:0}),Ys=Oa(la),wr,Io,Hi,Ps=yt({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Hi&&(Hi&&t.type==="mousemove"?(wr=t.screenX-Hi.screenX,Io=t.screenY-Hi.screenY):Io=wr=0,Hi=t),wr)},movementY:function(t){return"movementY"in t?t.movementY:Io}}),tc=Oa(Ps),Ko=yt({},Ps,{dataTransfer:0}),ec=Oa(Ko),_r=yt({},la,{relatedTarget:0}),Xs=Oa(_r),ac=yt({},Jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Fo=Oa(ac),nc=yt({},Jn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bu=Oa(nc),Ih=yt({},Jn,{data:0}),Go=Oa(Ih),Yo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ic={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rc(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ic[t])?!!e[t]:!1}function sc(){return rc}var Hu=yt({},la,{key:function(t){if(t.key){var e=Yo[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=gi(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kh[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sc,charCode:function(t){return t.type==="keypress"?gi(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?gi(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Fh=Oa(Hu),Uu=yt({},Ps,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),oc=Oa(Uu),Gh=yt({},Jn,{submitter:0}),Vu=Oa(Gh),lc=yt({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sc}),qu=Oa(lc),Iu=yt({},Jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yh=Oa(Iu),Ph=yt({},Ps,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Xh=Oa(Ph),Po=yt({},Jn,{newState:0,oldState:0,source:0}),vi=Oa(Po),ea=[9,13,27,32],Jr=zn&&"CompositionEvent"in window,ti=null;zn&&"documentMode"in document&&(ti=document.documentMode);var Qh=zn&&"TextEvent"in window&&!ti,Xo=zn&&(!Jr||ti&&8<ti&&11>=ti),cc=" ",Ui=!1;function Qo(t,e){switch(t){case"keyup":return ea.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sr(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ln=!1;function Ku(t,e){switch(t){case"compositionend":return Sr(e);case"keypress":return e.which!==32?null:(Ui=!0,cc);case"textInput":return t=e.data,t===cc&&Ui?null:t;default:return null}}function c(t,e){if(ln)return t==="compositionend"||!Jr&&Qo(t,e)?(t=Lu(),Gs=Zr=Nn=null,ln=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xo&&e.locale!=="ko"?null:e.data;default:return null}}var h={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!h[t.type]:e==="textarea"}function y(t,e,n,r){mi?$i?$i.push(r):$i=[r]:mi=r,e=Kd(e,"onChange"),0<e.length&&(n=new Wr("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var w=null,k=null;function z(t){I0(t,0)}function O(t){var e=Yr(t);if(Zl(e))return t}function U(t,e){if(t==="change")return e}var Q=!1;if(zn){var q;if(zn){var B="oninput"in document;if(!B){var V=document.createElement("div");V.setAttribute("oninput","return;"),B=typeof V.oninput=="function"}q=B}else q=!1;Q=q&&(!document.documentMode||9<document.documentMode)}function X(){w&&(w.detachEvent("onpropertychange",K),k=w=null)}function K(t){if(t.propertyName==="value"&&O(k)){var e=[];y(e,k,t,Qr(t)),$u(z,e)}}function F(t,e,n){t==="focusin"?(X(),w=e,k=n,w.attachEvent("onpropertychange",K)):t==="focusout"&&X()}function G(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return O(k)}function at(t,e){if(t==="click")return O(e)}function J(t,e){if(t==="input"||t==="change")return O(e)}function st(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ht=typeof Object.is=="function"?Object.is:st;function bt(t,e){if(ht(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Ls.call(e,l)||!ht(t[l],e[l]))return!1}return!0}function Tt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function At(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ht(t,e){var n=At(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}t:{for(;n;){if(n.nextSibling){n=n.nextSibling;break t}n=n.parentNode}n=void 0}n=At(n)}}function zt(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?zt(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Vt(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Tt(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Tt(t.document)}return e}function wt(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var ne=zn&&"documentMode"in document&&11>=document.documentMode,Zt=null,re=null,de=null,Fa=!1;function se(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fa||Zt==null||Zt!==Tt(r)||(r=Zt,"selectionStart"in r&&wt(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),de&&bt(de,r)||(de=r,r=Kd(re,"onSelect"),0<r.length&&(e=new Wr("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zt)))}function Qe(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var aa={animationend:Qe("Animation","AnimationEnd"),animationiteration:Qe("Animation","AnimationIteration"),animationstart:Qe("Animation","AnimationStart"),transitionrun:Qe("Transition","TransitionRun"),transitionstart:Qe("Transition","TransitionStart"),transitioncancel:Qe("Transition","TransitionCancel"),transitionend:Qe("Transition","TransitionEnd")},ts={},Ba={};zn&&(Ba=document.createElement("div").style,"AnimationEvent"in window||(delete aa.animationend.animation,delete aa.animationiteration.animation,delete aa.animationstart.animation),"TransitionEvent"in window||delete aa.transitionend.transition);function cn(t){if(ts[t])return ts[t];if(!aa[t])return t;var e=aa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ba)return ts[t]=e[n];return t}var Zo=cn("animationend"),mg=cn("animationiteration"),gg=cn("animationstart"),hx=cn("transitionrun"),fx=cn("transitionstart"),px=cn("transitioncancel"),vg=cn("transitionend"),bg=new Map,Zh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zh.push("scrollEnd");function bi(t,e){bg.set(t,e),fi(e,[t])}var mx=0;function kr(t,e){if(t.name!=null&&t.name!=="auto")return t.name;if(e.autoName!==null)return e.autoName;t=_i.identifierPrefix;var n=mx++;return t="_"+t+"t_"+n.toString(32)+"_",e.autoName=t}function yg(t){if(t==null||typeof t=="string")return t;var e=null,n=vl;if(n!==null)for(var r=0;r<n.length;r++){var l=t[n[r]];if(l!=null){if(l==="none")return"none";e=e==null?l:e+(" "+l)}}return e??t.default}function Cr(t,e){return t=yg(t),e=yg(e),e==null?t==="auto"?null:t:e==="auto"?null:e}var Fu=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ei=[],Wo=0,Wh=0;function Gu(){for(var t=Wo,e=Wh=Wo=0;e<t;){var n=ei[e];ei[e++]=null;var r=ei[e];ei[e++]=null;var l=ei[e];ei[e++]=null;var u=ei[e];if(ei[e++]=null,r!==null&&l!==null){var b=r.pending;b===null?l.next=l:(l.next=b.next,b.next=l),r.pending=l}u!==0&&xg(n,l,u)}}function Yu(t,e,n,r){ei[Wo++]=t,ei[Wo++]=e,ei[Wo++]=n,ei[Wo++]=r,Wh|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Jh(t,e,n,r){return Yu(t,e,n,r),Pu(t)}function Qs(t,e){return Yu(t,null,null,e),Pu(t)}function xg(t,e,n){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n);for(var l=!1,u=t.return;u!==null;)u.childLanes|=n,r=u.alternate,r!==null&&(r.childLanes|=n),u.tag===22&&(t=u.stateNode,t===null||t._visibility&1||(l=!0)),t=u,u=u.return;return t.tag===3?(u=t.stateNode,l&&e!==null&&(l=31-La(n),t=u.hiddenUpdates,r=t[l],r===null?t[l]=[e]:r.push(e),e.lane=n|536870912),u):null}function Pu(t){if(50<Oc)throw Oc=0,Ld=null,Error(o(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Jo={};function gx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(t,e,n,r){return new gx(t,e,n,r)}function tf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ar(t,e){var n=t.alternate;return n===null?(n=vn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&1206910976,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function wg(t,e){t.flags&=1206910978;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function Xu(t,e,n,r,l,u){var b=0;if(r=t,typeof r=="function")tf(r)&&(b=1);else if(typeof r=="string")b=Kw(t,n,Yn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Ge:return t=vn(31,n,e,l),t.elementType=Ge,t.lanes=u,t;case ee:return Zs(n.children,l,u,e);case le:b=8,l|=24;break;case pe:return t=vn(12,n,e,l|2),t.elementType=pe,t.lanes=u,t;case Yt:return t=vn(13,n,e,l),t.elementType=Yt,t.lanes=u,t;case Bt:return t=vn(19,n,e,l),t.elementType=Bt,t.lanes=u,t;case ma:case L:return t=l|32,t=vn(30,n,e,t),t.elementType=L,t.lanes=u,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ge:b=10;break t;case $e:b=9;break t;case Et:b=11;break t;case ie:b=14;break t;case jt:b=16,r=null;break t}b=29,n=Error(o(130,t===null?"null":typeof t,"")),r=null}return e=vn(b,n,e,l),e.elementType=t,e.type=r,e.lanes=u,e}function Zs(t,e,n,r){return t=vn(7,t,r,e),t.lanes=n,t}function ef(t,e,n){return t=vn(6,t,null,e),t.lanes=n,t}function _g(t){var e=vn(18,null,null,0);return e.stateNode=t,e}function af(t,e,n){return e=vn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var Sg=new WeakMap;function ai(t,e){if(typeof t=="object"&&t!==null){var n=Sg.get(t);return n!==void 0?n:(e={value:t,source:e,stack:$s(e)},Sg.set(t,e),e)}return{value:t,source:e,stack:$s(e)}}var tl=[],el=0,Qu=null,uc=0,ni=[],ii=0,es=null,Vi=1,qi="";function Er(t,e){tl[el++]=uc,tl[el++]=Qu,Qu=t,uc=e}function kg(t,e,n){ni[ii++]=Vi,ni[ii++]=qi,ni[ii++]=es,es=t;var r=Vi;t=qi;var l=32-La(r)-1;r&=~(1<<l),n+=1;var u=32-La(e)+l;if(30<u){var b=l-l%5;u=(r&(1<<b)-1).toString(32),r>>=b,l-=b,Vi=1<<32-La(e)+l|n<<l|r,qi=u+t}else Vi=1<<u|n<<l|r,qi=t}function Zu(t){t.return!==null&&(Er(t,1),kg(t,1,0))}function nf(t){for(;t===Qu;)Qu=tl[--el],tl[el]=null,uc=tl[--el],tl[el]=null;for(;t===es;)es=ni[--ii],ni[ii]=null,qi=ni[--ii],ni[ii]=null,Vi=ni[--ii],ni[ii]=null}function Cg(t,e){ni[ii++]=Vi,ni[ii++]=qi,ni[ii++]=es,Vi=e.id,qi=e.overflow,es=t}var Ha=null,Ke=null,ve=!1,as=null,ri=!1,rf=Error(o(519));function ns(t){var e=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw dc(ai(e,t)),rf}function Ag(t){var e=t.stateNode,n=t.type,r=t.memoizedProps;switch(e[ga]=t,e[oa]=r,n){case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":case"embed":xe("load",e);break;case"video":case"audio":for(n=0;n<Dc.length;n++)xe(Dc[n],e);break;case"source":xe("error",e);break;case"img":case"image":case"link":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"input":xe("invalid",e),Is(e,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":xe("invalid",e);break;case"textarea":xe("invalid",e),Tn(e,r.value,r.defaultValue,r.children)}n=r.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||r.suppressHydrationWarning===!0||Y0(e.textContent,n)?(r.popover!=null&&(xe("beforetoggle",e),xe("toggle",e)),r.onScroll!=null&&xe("scroll",e),r.onScrollEnd!=null&&xe("scrollend",e),r.onClick!=null&&(e.onclick=Wn),e=!0):e=!1,e||ns(t,!0)}function Wu(t){for(Ha=t.return;Ha;)switch(Ha.tag){case 5:case 31:case 13:ri=!1;return;case 27:case 3:ri=!0;return;default:Ha=Ha.return}}function al(t){if(t!==Ha)return!1;if(!ve)return Wu(t),ve=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||Mp(t.type,t.memoizedProps)),n=!n),n&&Ke&&ns(t),Wu(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Ke=hb(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(317));Ke=hb(t)}else e===27?(e=Ke,ys(t.type)?(t=Kp,Kp=null,Ke=t):Ke=e):Ke=Ha?oi(t.stateNode.nextSibling):null;return!0}function Ws(){Ke=Ha=null,ve=!1}function sf(){var t=as;return t!==null&&(xn===null?xn=t:xn.push.apply(xn,t),as=null),t}function dc(t){as===null?as=[t]:as.push(t)}var of=an(null),Js=null,Tr=null;function is(t,e,n){ce(of,e._currentValue),e._currentValue=n}function zr(t){t._currentValue=of.current,sa(of)}function Ju(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function lf(t,e,n,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var u=l.dependencies;if(u!==null){var b=l.child;u=u.firstContext;t:for(;u!==null;){var C=u;u=l;for(var j=0;j<e.length;j++)if(C.context===e[j]){u.lanes|=n,C=u.alternate,C!==null&&(C.lanes|=n),Ju(u.return,n,t),r||(b=null);break t}u=C.next}}else if(l.tag===18){if(b=l.return,b===null)throw Error(o(341));b.lanes|=n,u=b.alternate,u!==null&&(u.lanes|=n),Ju(b,n,t),b=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=n,b=l.alternate,b!==null&&(b.lanes|=n),Ju(l.return,n,t),b=l.child,b=b!==null?b.sibling:null):b=l.child;if(b!==null)b.return=l;else for(b=l;b!==null;){if(b===t){b=null;break}if(l=b.sibling,l!==null){l.return=b.return,b=l;break}b=b.return}l=b}}function to(t,e,n,r){t=null;for(var l=e,u=!1;l!==null;){if(!u){if((l.flags&524288)!==0)u=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var b=l.alternate;if(b===null)throw Error(o(387));if(b=b.memoizedProps,b!==null){var C=l.type;ht(l.pendingProps.value,b.value)||(t!==null?t.push(C):t=[C])}}else if(l===Rs.current){if(b=l.alternate,b===null)throw Error(o(387));b.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(El):t=[El])}l=l.return}return t!==null&&lf(e,t,n,r),e.flags|=262144,t!==null}function td(t){for(t=t.firstContext;t!==null;){if(!ht(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function eo(t){Js=t,Tr=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ga(t){return Eg(Js,t)}function ed(t,e){return Js===null&&eo(t),Eg(t,e)}function Eg(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Tr===null){if(t===null)throw Error(o(308));Tr=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Tr=Tr.next=e;return n}var vx=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,r){t.push(r)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},bx=a.unstable_scheduleCallback,yx=a.unstable_NormalPriority,ka={$$typeof:ge,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cf(){return{controller:new vx,data:new Map,refCount:0}}function hc(t){t.refCount--,t.refCount===0&&bx(yx,function(){t.controller.abort()})}function Tg(t,e){if((t.pendingLanes&4194048)!==0){var n=t.transitionTypes;for(n===null&&(n=t.transitionTypes=[]),t=0;t<e.length;t++){var r=e[t];n.indexOf(r)===-1&&n.push(r)}}}var fc=null;function xx(t){var e=t.transitionTypes;return t.transitionTypes=null,e}var pc=null,uf=0,ao=0,nl=null;function wx(t,e){if(pc===null){var n=pc=[];uf=0,ao=Ap(),nl={status:"pending",value:void 0,then:function(r){n.push(r)}}}return uf++,e.then(zg,zg),e}function zg(){if(--uf===0&&(fc=null,pc!==null)){nl!==null&&(nl.status="fulfilled");var t=pc;pc=null,ao=0,nl=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function _x(t,e){var n=[],r={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return t.then(function(){r.status="fulfilled",r.value=e;for(var l=0;l<n.length;l++)(0,n[l])(e)},function(l){for(r.status="rejected",r.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),r}var Ng=Nt.S;Nt.S=function(t,e){if(_0=$a(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&wx(t,e),fc!==null)for(var n=wl;n!==null;)Tg(n,fc),n=n.next;if(n=t.types,n!==null){for(var r=wl;r!==null;)Tg(r,n),r=r.next;if(ao!==0){r=fc,r===null&&(r=fc=[]);for(var l=0;l<n.length;l++){var u=n[l];r.indexOf(u)===-1&&r.push(u)}}}Ng!==null&&Ng(t,e)};var no=an(null);function df(){var t=no.current;return t!==null?t:qe.pooledCache}function ad(t,e){e===null?ce(no,no.current):ce(no,e.pool)}function Og(){var t=df();return t===null?null:{parent:ka._currentValue,pool:t}}var il=Error(o(460)),hf=Error(o(474)),nd=Error(o(542)),id={then:function(){}};function jg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Dg(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(Wn,Wn),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mg(t),t===void 0&&!("reason"in e)?Error(o(600)):t;default:if(typeof e.status=="string")e.then(Wn,Wn);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(o(482));t=e,t.status="pending",t.then(function(r){if(e.status==="pending"){var l=e;l.status="fulfilled",l.value=r}},function(r){if(e.status==="pending"){var l=e;l.status="rejected",l.reason=r}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,Mg(t),t}throw ro=e,il}}function io(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ro=n,il):n}}var ro=null;function Rg(){if(ro===null)throw Error(o(459));var t=ro;return ro=null,t}function Mg(t){if(t===il||t===nd)throw Error(o(483))}var rl=null,mc=0;function rd(t){var e=mc;return mc+=1,rl===null&&(rl=[]),Dg(rl,t,e)}function rs(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function sd(t,e){throw e.$$typeof===pt?Error(o(525)):(t=Object.prototype.toString.call(e),Error(o(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function $g(t){function e(Y,M){if(t){var Z=Y.deletions;Z===null?(Y.deletions=[M],Y.flags|=16):Z.push(M)}}function n(Y,M){if(!t)return null;for(;M!==null;)e(Y,M),M=M.sibling;return null}function r(Y){for(var M=new Map;Y!==null;)Y.key===null?M.set(Y.index,Y):M.set(Y.key,Y),Y=Y.sibling;return M}function l(Y,M){return Y=Ar(Y,M),Y.index=0,Y.sibling=null,Y}function u(Y,M,Z){return Y.index=Z,t?(Z=Y.alternate,Z!==null?(Z=Z.index,Z<M?(Y.flags|=2,M):Z):(Y.flags|=134217730,M)):(Y.flags|=1048576,M)}function b(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function C(Y,M,Z,lt){return M===null||M.tag!==6?(M=ef(Z,Y.mode,lt),M.return=Y,M):(M=l(M,Z),M.return=Y,M)}function j(Y,M,Z,lt){var Ut=Z.type;return Ut===ee?(Y=nt(Y,M,Z.props.children,lt,Z.key),rs(Y,Z),Y):M!==null&&(M.elementType===Ut||typeof Ut=="object"&&Ut!==null&&Ut.$$typeof===jt&&io(Ut)===M.type)?(M=l(M,Z.props),rs(M,Z),M.return=Y,M):(M=Xu(Z.type,Z.key,Z.props,null,Y.mode,lt),rs(M,Z),M.return=Y,M)}function P(Y,M,Z,lt){return M===null||M.tag!==4||M.stateNode.containerInfo!==Z.containerInfo||M.stateNode.implementation!==Z.implementation?(M=af(Z,Y.mode,lt),M.return=Y,M):(M=l(M,Z.children||[]),M.return=Y,M)}function nt(Y,M,Z,lt,Ut){return M===null||M.tag!==7?(M=Zs(Z,Y.mode,lt,Ut),M.return=Y,M):(M=l(M,Z),M.return=Y,M)}function ct(Y,M,Z){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=ef(""+M,Y.mode,Z),M.return=Y,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case it:return Z=Xu(M.type,M.key,M.props,null,Y.mode,Z),rs(Z,M),Z.return=Y,Z;case ft:return M=af(M,Y.mode,Z),M.return=Y,M;case jt:return M=io(M),ct(Y,M,Z)}if(gt(M)||ot(M))return M=Zs(M,Y.mode,Z,null),M.return=Y,M;if(typeof M.then=="function")return ct(Y,rd(M),Z);if(M.$$typeof===ge)return ct(Y,ed(Y,M),Z);sd(Y,M)}return null}function I(Y,M,Z,lt){var Ut=M!==null?M.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Ut!==null?null:C(Y,M,""+Z,lt);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case it:return Z.key===Ut?j(Y,M,Z,lt):null;case ft:return Z.key===Ut?P(Y,M,Z,lt):null;case jt:return Z=io(Z),I(Y,M,Z,lt)}if(gt(Z)||ot(Z))return Ut!==null?null:nt(Y,M,Z,lt,null);if(typeof Z.then=="function")return I(Y,M,rd(Z),lt);if(Z.$$typeof===ge)return I(Y,M,ed(Y,Z),lt);sd(Y,Z)}return null}function tt(Y,M,Z,lt,Ut){if(typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint")return Y=Y.get(Z)||null,C(M,Y,""+lt,Ut);if(typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case it:return Y=Y.get(lt.key===null?Z:lt.key)||null,j(M,Y,lt,Ut);case ft:return Y=Y.get(lt.key===null?Z:lt.key)||null,P(M,Y,lt,Ut);case jt:return lt=io(lt),tt(Y,M,Z,lt,Ut)}if(gt(lt)||ot(lt))return Y=Y.get(Z)||null,nt(M,Y,lt,Ut,null);if(typeof lt.then=="function")return tt(Y,M,Z,rd(lt),Ut);if(lt.$$typeof===ge)return tt(Y,M,Z,ed(M,lt),Ut);sd(M,lt)}return null}function Rt(Y,M,Z,lt){for(var Ut=null,Se=null,Pt=M,ae=M=0,Ea=null;Pt!==null&&ae<Z.length;ae++){Pt.index>ae?(Ea=Pt,Pt=null):Ea=Pt.sibling;var Ee=I(Y,Pt,Z[ae],lt);if(Ee===null){Pt===null&&(Pt=Ea);break}t&&Pt&&Ee.alternate===null&&e(Y,Pt),M=u(Ee,M,ae),Se===null?Ut=Ee:Se.sibling=Ee,Se=Ee,Pt=Ea}if(ae===Z.length)return n(Y,Pt),ve&&Er(Y,ae),Ut;if(Pt===null){for(;ae<Z.length;ae++)Pt=ct(Y,Z[ae],lt),Pt!==null&&(M=u(Pt,M,ae),Se===null?Ut=Pt:Se.sibling=Pt,Se=Pt);return ve&&Er(Y,ae),Ut}for(Pt=r(Pt);ae<Z.length;ae++)Ea=tt(Pt,Y,ae,Z[ae],lt),Ea!==null&&(t&&(Ee=Ea.alternate,Ee!==null&&Pt.delete(Ee.key===null?ae:Ee.key)),M=u(Ea,M,ae),Se===null?Ut=Ea:Se.sibling=Ea,Se=Ea);return t&&Pt.forEach(function(ks){return e(Y,ks)}),ve&&Er(Y,ae),Ut}function It(Y,M,Z,lt){if(Z==null)throw Error(o(151));for(var Ut=null,Se=null,Pt=M,ae=M=0,Ea=null,Ee=Z.next();Pt!==null&&!Ee.done;ae++,Ee=Z.next()){Pt.index>ae?(Ea=Pt,Pt=null):Ea=Pt.sibling;var ks=I(Y,Pt,Ee.value,lt);if(ks===null){Pt===null&&(Pt=Ea);break}t&&Pt&&ks.alternate===null&&e(Y,Pt),M=u(ks,M,ae),Se===null?Ut=ks:Se.sibling=ks,Se=ks,Pt=Ea}if(Ee.done)return n(Y,Pt),ve&&Er(Y,ae),Ut;if(Pt===null){for(;!Ee.done;ae++,Ee=Z.next())Ee=ct(Y,Ee.value,lt),Ee!==null&&(M=u(Ee,M,ae),Se===null?Ut=Ee:Se.sibling=Ee,Se=Ee);return ve&&Er(Y,ae),Ut}for(Pt=r(Pt);!Ee.done;ae++,Ee=Z.next())Ee=tt(Pt,Y,ae,Ee.value,lt),Ee!==null&&(t&&(Ea=Ee.alternate,Ea!==null&&Pt.delete(Ea.key===null?ae:Ea.key)),M=u(Ee,M,ae),Se===null?Ut=Ee:Se.sibling=Ee,Se=Ee);return t&&Pt.forEach(function(a_){return e(Y,a_)}),ve&&Er(Y,ae),Ut}function fe(Y,M,Z,lt){if(typeof Z=="object"&&Z!==null&&Z.type===ee&&Z.key===null&&Z.props.ref===void 0&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case it:t:{for(var Ut=Z.key;M!==null;){if(M.key===Ut){if(Ut=Z.type,Ut===ee){if(M.tag===7){n(Y,M.sibling),lt=l(M,Z.props.children),rs(lt,Z),lt.return=Y,Y=lt;break t}}else if(M.elementType===Ut||typeof Ut=="object"&&Ut!==null&&Ut.$$typeof===jt&&io(Ut)===M.type){n(Y,M.sibling),lt=l(M,Z.props),rs(lt,Z),lt.return=Y,Y=lt;break t}n(Y,M);break}else e(Y,M);M=M.sibling}Z.type===ee?(lt=Zs(Z.props.children,Y.mode,lt,Z.key),rs(lt,Z),lt.return=Y,Y=lt):(lt=Xu(Z.type,Z.key,Z.props,null,Y.mode,lt),rs(lt,Z),lt.return=Y,Y=lt)}return b(Y);case ft:t:{for(Ut=Z.key;M!==null;){if(M.key===Ut)if(M.tag===4&&M.stateNode.containerInfo===Z.containerInfo&&M.stateNode.implementation===Z.implementation){n(Y,M.sibling),lt=l(M,Z.children||[]),lt.return=Y,Y=lt;break t}else{n(Y,M);break}else e(Y,M);M=M.sibling}lt=af(Z,Y.mode,lt),lt.return=Y,Y=lt}return b(Y);case jt:return Z=io(Z),fe(Y,M,Z,lt)}if(gt(Z))return Rt(Y,M,Z,lt);if(ot(Z)){if(Ut=ot(Z),typeof Ut!="function")throw Error(o(150));return Z=Ut.call(Z),It(Y,M,Z,lt)}if(typeof Z.then=="function")return fe(Y,M,rd(Z),lt);if(Z.$$typeof===ge)return fe(Y,M,ed(Y,Z),lt);sd(Y,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,M!==null&&M.tag===6?(n(Y,M.sibling),lt=l(M,Z),lt.return=Y,Y=lt):(n(Y,M),lt=ef(Z,Y.mode,lt),lt.return=Y,Y=lt),b(Y)):n(Y,M)}return function(Y,M,Z,lt){try{mc=0;var Ut=fe(Y,M,Z,lt);return rl=null,Ut}catch(Pt){if(Pt===il||Pt===nd)throw Pt;var Se=vn(29,Pt,null,Y.mode);return Se.lanes=lt,Se.return=Y,Se}finally{}}}var so=$g(!0),Lg=$g(!1),ss=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pf(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function os(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ls(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Oe&2)!==0){var l=r.pending;return l===null?e.next=e:(e.next=l.next,l.next=e),r.pending=e,e=Pu(t),xg(t,null,n),e}return Yu(t,r,e,n),Pu(t)}function gc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mo(t,n)}}function mf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,u=null;if(n=n.firstBaseUpdate,n!==null){do{var b={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};u===null?l=u=b:u=u.next=b,n=n.next}while(n!==null);u===null?l=u=e:u=u.next=e}else l=u=e;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:u,shared:r.shared,callbacks:r.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var gf=!1;function vc(){if(gf){var t=nl;if(t!==null)throw t}}function bc(t,e,n,r){gf=!1;var l=t.updateQueue;ss=!1;var u=l.firstBaseUpdate,b=l.lastBaseUpdate,C=l.shared.pending;if(C!==null){l.shared.pending=null;var j=C,P=j.next;j.next=null,b===null?u=P:b.next=P,b=j;var nt=t.alternate;nt!==null&&(nt=nt.updateQueue,C=nt.lastBaseUpdate,C!==b&&(C===null?nt.firstBaseUpdate=P:C.next=P,nt.lastBaseUpdate=j))}if(u!==null){var ct=l.baseState;b=0,nt=P=j=null,C=u;do{var I=C.lane&-536870913,tt=I!==C.lane;if(tt?(_e&I)===I:(r&I)===I){I!==0&&I===ao&&(gf=!0),nt!==null&&(nt=nt.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Rt=t,It=C;I=e;var fe=n;switch(It.tag){case 1:if(Rt=It.payload,typeof Rt=="function"){ct=Rt.call(fe,ct,I);break t}ct=Rt;break t;case 3:Rt.flags=Rt.flags&-65537|128;case 0:if(Rt=It.payload,I=typeof Rt=="function"?Rt.call(fe,ct,I):Rt,I==null)break t;ct=yt({},ct,I);break t;case 2:ss=!0}}I=C.callback,I!==null&&(t.flags|=64,tt&&(t.flags|=8192),tt=l.callbacks,tt===null?l.callbacks=[I]:tt.push(I))}else tt={lane:I,tag:C.tag,payload:C.payload,callback:C.callback,next:null},nt===null?(P=nt=tt,j=ct):nt=nt.next=tt,b|=I;if(C=C.next,C===null){if(C=l.shared.pending,C===null)break;tt=C,C=tt.next,tt.next=null,l.lastBaseUpdate=tt,l.shared.pending=null}}while(!0);nt===null&&(j=ct),l.baseState=j,l.firstBaseUpdate=P,l.lastBaseUpdate=nt,u===null&&(l.shared.lanes=0),ms|=b,t.lanes=b,t.memoizedState=ct}}function Bg(t,e){if(typeof t!="function")throw Error(o(191,t));t.call(e)}function Hg(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)Bg(n[t],e)}var cs=an(null),od=an(0);function Ug(t,e){t=Rr,ce(od,t),ce(cs,e),Rr=t|e.baseLanes}function vf(){ce(od,Rr),ce(cs,cs.current)}function bf(){Rr=od.current,sa(cs),sa(od)}var Ya=an(null),nn=null;function us(t){var e=t.alternate;ce(Pa,Pa.current&1),ce(Ya,t),nn===null&&(e===null||cs.current!==null||e.memoizedState!==null)&&(nn=t)}function yf(t){ce(Pa,Pa.current),ce(Ya,t),nn===null&&(nn=t)}function Vg(t){t.tag===22?(ce(Pa,Pa.current),ce(Ya,t),nn===null&&(nn=t)):ds()}function ds(){ce(Pa,Pa.current),ce(Ya,Ya.current)}function On(t){sa(Ya),nn===t&&(nn=null),sa(Pa)}var Pa=an(0);function yc(t,e){ce(Ya,Ya.current),ce(Pa,e)}function xf(t){sa(Pa),sa(Ya),nn===t&&(nn=null)}function ld(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||qp(n)||Ip(n)))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!=="independent"){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nr=0,he=null,Ve=null,Ca=null,cd=!1,sl=!1,oo=!1,ud=0,xc=0,ol=null,Sx=0;function ca(){throw Error(o(321))}function wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ht(t[n],e[n]))return!1;return!0}function _f(t,e,n,r,l,u){return Nr=u,he=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Nt.H=t===null||t.memoizedState===null?kv:Cv,oo=!1,u=n(r,l),oo=!1,sl&&(u=Ig(e,n,r,l)),qg(t),u}function qg(t){Nt.H=vd;var e=Ve!==null&&Ve.next!==null;if(Nr=0,Ca=Ve=he=null,cd=!1,xc=0,ol=null,e)throw Error(o(300));t===null||Aa||(t=t.dependencies,t!==null&&td(t)&&(Aa=!0))}function Ig(t,e,n,r){he=t;var l=0;do{if(sl&&(ol=null),xc=0,sl=!1,25<=l)throw Error(o(301));if(l+=1,Ca=Ve=null,t.updateQueue!=null){var u=t.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Nt.H=Ox,u=e(n,r)}while(sl);return u}function kx(){var t=Nt.H,e=t.useState()[0];return e=typeof e.then=="function"?wc(e):e,t=t.useState()[0],(Ve!==null?Ve.memoizedState:null)!==t&&(he.flags|=1024),e}function Sf(){var t=ud!==0;return ud=0,t}function kf(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function Cf(t){if(cd){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}cd=!1}Nr=0,Ca=Ve=he=null,sl=!1,xc=ud=0,ol=null}function un(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ca===null?he.memoizedState=Ca=t:Ca=Ca.next=t,Ca}function va(){if(Ve===null){var t=he.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=Ca===null?he.memoizedState:Ca.next;if(e!==null)Ca=e,Ve=t;else{if(t===null)throw he.alternate===null?Error(o(467)):Error(o(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},Ca===null?he.memoizedState=Ca=t:Ca=Ca.next=t}return Ca}function dd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wc(t){var e=xc;return xc+=1,ol===null&&(ol=[]),t=Dg(ol,t,e),e=he,(Ca===null?e.memoizedState:Ca.next)===null&&(e=e.alternate,Nt.H=e===null||e.memoizedState===null?kv:Cv),t}function hd(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return wc(t);if(t.$$typeof===xt)return;if(t.$$typeof===ge)return Ga(t)}throw Error(o(438,String(t)))}function Af(t){var e=null,n=he.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var r=he.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(e={data:r.data.map(function(l){return l.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=dd(),he.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),r=0;r<t;r++)n[r]=Gn;return e.index++,n}function Or(t,e){return typeof e=="function"?e(t):e}function fd(t){var e=va();return Ef(e,Ve,t)}function Ef(t,e,n){var r=t.queue;if(r===null)throw Error(o(311));r.lastRenderedReducer=n;var l=t.baseQueue,u=r.pending;if(u!==null){if(l!==null){var b=l.next;l.next=u.next,u.next=b}e.baseQueue=l=u,r.pending=null}if(u=t.baseState,l===null)t.memoizedState=u;else{e=l.next;var C=b=null,j=null,P=e,nt=!1;do{var ct=P.lane&-536870913;if(ct!==P.lane?(_e&ct)===ct:(Nr&ct)===ct){var I=P.revertLane;if(I===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),ct===ao&&(nt=!0);else if((Nr&I)===I){P=P.next,I===ao&&(nt=!0);continue}else ct={lane:0,revertLane:P.revertLane,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},j===null?(C=j=ct,b=u):j=j.next=ct,he.lanes|=I,ms|=I;ct=P.action,oo&&n(u,ct),u=P.hasEagerState?P.eagerState:n(u,ct)}else I={lane:ct,revertLane:P.revertLane,gesture:P.gesture,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},j===null?(C=j=I,b=u):j=j.next=I,he.lanes|=ct,ms|=ct;P=P.next}while(P!==null&&P!==e);if(j===null?b=u:j.next=C,!ht(u,t.memoizedState)&&(Aa=!0,nt&&(n=nl,n!==null)))throw n;t.memoizedState=u,t.baseState=b,t.baseQueue=j,r.lastRenderedState=u}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Tf(t){var e=va(),n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=t;var r=n.dispatch,l=n.pending,u=e.memoizedState;if(l!==null){n.pending=null;var b=l=l.next;do u=t(u,b.action),b=b.next;while(b!==l);ht(u,e.memoizedState)||(Aa=!0),e.memoizedState=u,e.baseQueue===null&&(e.baseState=u),n.lastRenderedState=u}return[u,r]}function Kg(t,e,n){var r=he,l=va(),u=ve;if(u){if(n===void 0)throw Error(o(407));n=n()}else n=e();var b=!ht((Ve||l).memoizedState,n);if(b&&(l.memoizedState=n,Aa=!0),l=l.queue,Of(Yg.bind(null,r,l,t),[t]),t=l.getSnapshot!==e||b||Ca!==null&&(Ca.memoizedState.tag&1)!==0,ll(t?9:8,{destroy:void 0},Gg.bind(null,r,l,n,e),null),t){if(r.flags|=2048,qe===null)throw Error(o(349));u||(Nr&127)!==0||Fg(r,e,n)}return n}function Fg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=he.updateQueue,e===null?(e=dd(),he.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Gg(t,e,n,r){e.value=n,e.getSnapshot=r,Pg(e)&&Xg(t)}function Yg(t,e,n){return n(function(){Pg(e)&&Xg(t)})}function Pg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ht(t,n)}catch{return!0}}function Xg(t){var e=Qs(t,2);e!==null&&wn(e,t,2)}function zf(t){var e=un();if(typeof t=="function"){var n=t;if(t=n(),oo){Xn(!0);try{n()}finally{Xn(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:t},e}function Qg(t,e,n,r){return t.baseState=n,Ef(t,Ve,typeof r=="function"?r:Or)}function Cx(t,e,n,r,l){if(gd(t))throw Error(o(485));if(t=e.action,t!==null){var u={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){u.listeners.push(b)}};Nt.T!==null?n(!0):u.isTransition=!1,r(u),n=e.pending,n===null?(u.next=e.pending=u,Zg(e,u)):(u.next=n.next,e.pending=n.next=u)}}function Zg(t,e){var n=e.action,r=e.payload,l=t.state;if(e.isTransition){var u=Nt.T,b={};b.types=u!==null?u.types:null,Nt.T=b;try{var C=n(l,r),j=Nt.S;j!==null&&j(b,C),Wg(t,e,C)}catch(P){Nf(t,e,P)}finally{u!==null&&b.types!==null&&(u.types=b.types),Nt.T=u}}else try{u=n(l,r),Wg(t,e,u)}catch(P){Nf(t,e,P)}}function Wg(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(r){Jg(t,e,r)},function(r){return Nf(t,e,r)}):Jg(t,e,n)}function Jg(t,e,n){e.status="fulfilled",e.value=n,tv(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,Zg(t,n)))}function Nf(t,e,n){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do e.status="rejected",e.reason=n,tv(e),e=e.next;while(e!==r)}t.action=null}function tv(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ev(t,e){return e}function av(t,e){if(ve){var n=qe.formState;if(n!==null){t:{var r=he;if(ve){if(Ke){e:{for(var l=Ke,u=ri;l.nodeType!==8;){if(!u){l=null;break e}if(l=oi(l.nextSibling),l===null){l=null;break e}}u=l.data,l=u==="F!"||u==="F"?l:null}if(l){Ke=oi(l.nextSibling),r=l.data==="F!";break t}}ns(r)}r=!1}r&&(e=n[0])}}return n=un(),n.memoizedState=n.baseState=e,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ev,lastRenderedState:e},n.queue=r,n=wv.bind(null,he,r),r.dispatch=n,r=zf(!1),u=$f.bind(null,he,!1,r.queue),r=un(),l={state:e,dispatch:null,action:t,pending:null},r.queue=l,n=Cx.bind(null,he,l,u,n),l.dispatch=n,r.memoizedState=t,[e,n,!1]}function nv(t){var e=va();return iv(e,Ve,t)}function iv(t,e,n){if(e=Ef(t,e,ev)[0],t=fd(Or)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var r=wc(e)}catch(b){throw b===il?nd:b}else r=e;e=va();var l=e.queue,u=l.dispatch;return n!==e.memoizedState&&(he.flags|=2048,ll(9,{destroy:void 0},Ax.bind(null,l,n),null)),[r,u,t]}function Ax(t,e){t.action=e}function rv(t){var e=va(),n=Ve;if(n!==null)return iv(e,n,t);va(),e=e.memoizedState,n=va();var r=n.queue.dispatch;return n.memoizedState=t,[e,r,!1]}function ll(t,e,n,r){return t={tag:t,create:n,deps:r,inst:e,next:null},e=he.updateQueue,e===null&&(e=dd(),he.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t),t}function sv(){return va().memoizedState}function pd(t,e,n,r){var l=un();he.flags|=t,l.memoizedState=ll(1|e,{destroy:void 0},n,r===void 0?null:r)}function md(t,e,n,r){var l=va();r=r===void 0?null:r;var u=l.memoizedState.inst;Ve!==null&&r!==null&&wf(r,Ve.memoizedState.deps)?l.memoizedState=ll(e,u,n,r):(he.flags|=t,l.memoizedState=ll(1|e,u,n,r))}function ov(t,e){pd(8390656,8,t,e)}function Of(t,e){md(2048,8,t,e)}function Ex(t){he.flags|=4;var e=he.updateQueue;if(e===null)e=dd(),he.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function lv(t){var e=va().memoizedState;return Ex({ref:e,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(o(440));return e.impl.apply(void 0,arguments)}}function cv(t,e){return md(4,2,t,e)}function uv(t,e){return md(4,4,t,e)}function dv(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function hv(t,e,n){n=n!=null?n.concat([t]):null,md(4,4,dv.bind(null,e,t),n)}function jf(){}function fv(t,e){var n=va();e=e===void 0?null:e;var r=n.memoizedState;return e!==null&&wf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function pv(t,e){var n=va();e=e===void 0?null:e;var r=n.memoizedState;if(e!==null&&wf(e,r[1]))return r[0];if(r=t(),oo){Xn(!0);try{t()}finally{Xn(!1)}}return n.memoizedState=[r,e],r}function Df(t,e,n){return n===void 0||(Nr&1073741824)!==0&&(_e&261930)===0?t.memoizedState=e:(t.memoizedState=n,t=k0(),he.lanes|=t,ms|=t,n)}function mv(t,e,n,r){return ht(n,e)?n:cs.current!==null?(t=Df(t,n,r),ht(t,e)||(Aa=!0),t):(Nr&106)===0||(Nr&1073741824)!==0&&(_e&261930)===0?(Aa=!0,t.memoizedState=n):(t=k0(),he.lanes|=t,ms|=t,e)}function gv(t,e,n,r,l){var u=Ct.p;Ct.p=u!==0&&8>u?u:8;var b=Nt.T,C={};C.types=b!==null?b.types:null,Nt.T=C,$f(t,!1,e,n);try{var j=l(),P=Nt.S;if(P!==null&&P(C,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var nt=_x(j,r);_c(t,e,nt,Mn(t))}else _c(t,e,r,Mn(t))}catch(ct){_c(t,e,{then:function(){},status:"rejected",reason:ct},Mn())}finally{Ct.p=u,b!==null&&C.types!==null&&(b.types=C.types),Nt.T=b}}function Tx(){}function Rf(t,e,n,r){if(t.tag!==5)throw Error(o(476));var l=vv(t).queue;gv(t,l,e,we,n===null?Tx:function(){return bv(t),n(r)})}function vv(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:we,baseState:we,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:we},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Or,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function bv(t){var e=vv(t);e.next===null&&(e=t.alternate.memoizedState),_c(t,e.next.queue,{},Mn())}function Mf(){return Ga(El)}function yv(){return va().memoizedState}function xv(){return va().memoizedState}function zx(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=Mn();t=os(n);var r=ls(e,t,n);r!==null&&(wn(r,e,n),gc(r,e,n)),e={cache:cf()},t.payload=e;return}e=e.return}}function Nx(t,e,n){var r=Mn();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},gd(t)?_v(e,n):(n=Jh(t,e,n,r),n!==null&&(wn(n,t,r),Sv(n,e,r)))}function wv(t,e,n){var r=Mn();_c(t,e,n,r)}function _c(t,e,n,r){var l={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(gd(t))_v(e,l);else{var u=t.alternate;if(t.lanes===0&&(u===null||u.lanes===0)&&(u=e.lastRenderedReducer,u!==null))try{var b=e.lastRenderedState,C=u(b,n);if(l.hasEagerState=!0,l.eagerState=C,ht(C,b))return Yu(t,e,l,0),qe===null&&Gu(),!1}catch{}finally{}if(n=Jh(t,e,l,r),n!==null)return wn(n,t,r),Sv(n,e,r),!0}return!1}function $f(t,e,n,r){if(r={lane:2,revertLane:Ap(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},gd(t)){if(e)throw Error(o(479))}else e=Jh(t,n,r,2),e!==null&&wn(e,t,2)}function gd(t){var e=t.alternate;return t===he||e!==null&&e===he}function _v(t,e){sl=cd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Sv(t,e,n){if((n&4194048)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Mo(t,n)}}var vd={readContext:Ga,use:hd,useCallback:ca,useContext:ca,useEffect:ca,useImperativeHandle:ca,useLayoutEffect:ca,useInsertionEffect:ca,useMemo:ca,useReducer:ca,useRef:ca,useState:ca,useDebugValue:ca,useDeferredValue:ca,useTransition:ca,useSyncExternalStore:ca,useId:ca,useHostTransitionStatus:ca,useFormState:ca,useActionState:ca,useOptimistic:ca,useMemoCache:ca,useCacheRefresh:ca,useEffectEvent:ca},kv={readContext:Ga,use:hd,useCallback:function(t,e){return un().memoizedState=[t,e===void 0?null:e],t},useContext:Ga,useEffect:ov,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,pd(4194308,4,dv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return pd(4194308,4,t,e)},useInsertionEffect:function(t,e){pd(4,2,t,e)},useMemo:function(t,e){var n=un();e=e===void 0?null:e;var r=t();if(oo){Xn(!0);try{t()}finally{Xn(!1)}}return n.memoizedState=[r,e],r},useReducer:function(t,e,n){var r=un();if(n!==void 0){var l=n(e);if(oo){Xn(!0);try{n(e)}finally{Xn(!1)}}}else l=e;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=Nx.bind(null,he,t),[r.memoizedState,t]},useRef:function(t){var e=un();return t={current:t},e.memoizedState=t},useState:function(t){t=zf(t);var e=t.queue,n=wv.bind(null,he,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:jf,useDeferredValue:function(t,e){var n=un();return Df(n,t,e)},useTransition:function(){var t=zf(!1);return t=gv.bind(null,he,t.queue,!0,!1),un().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var r=he,l=un();if(ve){if(n===void 0)throw Error(o(407));n=n()}else{if(n=e(),qe===null)throw Error(o(349));(_e&127)!==0||Fg(r,e,n)}l.memoizedState=n;var u={value:n,getSnapshot:e};return l.queue=u,ov(Yg.bind(null,r,u,t),[t]),r.flags|=2048,ll(9,{destroy:void 0},Gg.bind(null,r,u,n,e),null),n},useId:function(){var t=un(),e=qe.identifierPrefix;if(ve){var n=qi,r=Vi;n=(r&~(1<<32-La(r)-1)).toString(32)+n,e="_"+e+"R_"+n,n=ud++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=Sx++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:Mf,useFormState:av,useActionState:av,useOptimistic:function(t){var e=un();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=$f.bind(null,he,!0,n),n.dispatch=e,[t,e]},useMemoCache:Af,useCacheRefresh:function(){return un().memoizedState=zx.bind(null,he)},useEffectEvent:function(t){var e=un(),n={impl:t};return e.memoizedState=n,function(){if((Oe&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Cv={readContext:Ga,use:hd,useCallback:fv,useContext:Ga,useEffect:Of,useImperativeHandle:hv,useInsertionEffect:cv,useLayoutEffect:uv,useMemo:pv,useReducer:fd,useRef:sv,useState:function(){return fd(Or)},useDebugValue:jf,useDeferredValue:function(t,e){var n=va();return mv(n,Ve.memoizedState,t,e)},useTransition:function(){var t=fd(Or)[0],e=va().memoizedState;return[typeof t=="boolean"?t:wc(t),e]},useSyncExternalStore:Kg,useId:yv,useHostTransitionStatus:Mf,useFormState:nv,useActionState:nv,useOptimistic:function(t,e){var n=va();return Qg(n,Ve,t,e)},useMemoCache:Af,useCacheRefresh:xv,useEffectEvent:lv},Ox={readContext:Ga,use:hd,useCallback:fv,useContext:Ga,useEffect:Of,useImperativeHandle:hv,useInsertionEffect:cv,useLayoutEffect:uv,useMemo:pv,useReducer:Tf,useRef:sv,useState:function(){return Tf(Or)},useDebugValue:jf,useDeferredValue:function(t,e){var n=va();return Ve===null?Df(n,t,e):mv(n,Ve.memoizedState,t,e)},useTransition:function(){var t=Tf(Or)[0],e=va().memoizedState;return[typeof t=="boolean"?t:wc(t),e]},useSyncExternalStore:Kg,useId:yv,useHostTransitionStatus:Mf,useFormState:rv,useActionState:rv,useOptimistic:function(t,e){var n=va();return Ve!==null?Qg(n,Ve,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:Af,useCacheRefresh:xv,useEffectEvent:lv};function Lf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bf={enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Mn(),l=os(r);l.payload=e,n!=null&&(l.callback=n),e=ls(t,l,r),e!==null&&(wn(e,t,r),gc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Mn(),l=os(r);l.tag=1,l.payload=e,n!=null&&(l.callback=n),e=ls(t,l,r),e!==null&&(wn(e,t,r),gc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Mn(),r=os(n);r.tag=2,e!=null&&(r.callback=e),e=ls(t,r,n),e!==null&&(wn(e,t,n),gc(e,t,n))}};function Av(t,e,n,r,l,u,b){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,u,b):e.prototype&&e.prototype.isPureReactComponent?!bt(n,r)||!bt(l,u):!0}function Ev(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Bf.enqueueReplaceState(e,e.state,null)}function lo(t,e){var n=e;if("ref"in e){n={};for(var r in e)r!=="ref"&&(n[r]=e[r])}if(t=t.defaultProps){n===e&&(n=yt({},n));for(var l in t)n[l]===void 0&&(n[l]=t[l])}return n}function Tv(t){Fu(t)}function zv(t){console.error(t)}function Nv(t){Fu(t)}function bd(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(r){setTimeout(function(){throw r})}}function Ov(t,e,n){try{var r=t.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Hf(t,e,n){return n=os(n),n.tag=3,n.payload={element:null},n.callback=function(){bd(t,e)},n}function jv(t){return t=os(t),t.tag=3,t}function Dv(t,e,n,r){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var u=r.value;t.payload=function(){return l(u)},t.callback=function(){Ov(e,n,r)}}var b=n.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(t.callback=function(){Ov(e,n,r),typeof l!="function"&&(gs===null?gs=new Set([this]):gs.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})})}function jx(t,e,n,r,l){if(n.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(e=n.alternate,e!==null&&to(e,n,l,!0),n=Ya.current,n!==null){switch(n.tag){case 31:case 13:case 19:return nn===null?Hd():n.alternate===null&&ua===0&&(ua=3),n.flags&=-257,n.flags|=65536,n.lanes=l,r===id?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([r]):e.add(r),Sp(t,r,l)),!1;case 22:return n.flags|=65536,r===id?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([r]):n.add(r)),Sp(t,r,l)),!1}throw Error(o(435,n.tag))}return Sp(t,r,l),Hd(),!1}if(ve)return e=Ya.current,e!==null?((e.flags&65536)===0&&(e.flags|=256),e.flags|=65536,e.lanes=l,r!==rf&&(t=Error(o(422),{cause:r}),dc(ai(t,n)))):(r!==rf&&(e=Error(o(423),{cause:r}),dc(ai(e,n))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=ai(r,n),l=Hf(t.stateNode,r,l),mf(t,l),ua!==4&&(ua=2)),!1;var u=Error(o(520),{cause:r});if(u=ai(u,n),Nc===null?Nc=[u]:Nc.push(u),ua!==4&&(ua=2),e===null)return!0;r=ai(r,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=l&-l,n.lanes|=t,t=Hf(n.stateNode,r,t),mf(n,t),!1;case 1:if(e=n.type,u=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(gs===null||!gs.has(u))))return n.flags|=65536,l&=-l,n.lanes|=l,l=jv(l),Dv(l,t,n,r),mf(n,l),!1;break;case 22:if(n.memoizedState!==null)return n.flags|=65536,!1}n=n.return}while(n!==null);return!1}var Uf=Error(o(461)),Aa=!1;function ja(t,e,n,r){e.child=t===null?Lg(e,null,n,r):so(e,t.child,n,r)}function Rv(t,e,n,r,l){n=n.render;var u=e.ref;if("ref"in r){var b={};for(var C in r)C!=="ref"&&(b[C]=r[C])}else b=r;return eo(e),r=_f(t,e,n,b,u,l),C=Sf(),t!==null&&!Aa?(kf(t,e,l),jr(t,e,l)):(ve&&C&&Zu(e),e.flags|=1,ja(t,e,r,l),e.child)}function Mv(t,e,n,r,l){if(t===null){var u=n.type;return typeof u=="function"&&!tf(u)&&u.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=u,$v(t,e,u,r,l)):(t=Xu(n.type,null,r,e,e.mode,l),t.ref=e.ref,t.return=e,e.child=t)}if(u=t.child,!Pf(t,l)){var b=u.memoizedProps;if(n=n.compare,n=n!==null?n:bt,n(b,r)&&t.ref===e.ref)return jr(t,e,l)}return e.flags|=1,t=Ar(u,r),t.ref=e.ref,t.return=e,e.child=t}function $v(t,e,n,r,l){if(t!==null){var u=t.memoizedProps;if(bt(u,r)&&t.ref===e.ref)if(Aa=!1,e.pendingProps=r=u,Pf(t,l))(t.flags&131072)!==0&&(Aa=!0);else return e.lanes=t.lanes,jr(t,e,l)}return Vf(t,e,n,r,l)}function Lv(t,e,n,r){var l=r.children,u=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((e.flags&128)!==0){if(u=u!==null?u.baseLanes|n:n,t!==null){for(r=e.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~u}else r=0,e.child=null;return Bv(t,e,u,n,r)}if((n&536870912)!==0)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&ad(e,u!==null?u.cachePool:null),u!==null?Ug(e,u):vf(),Vg(e);else return r=e.lanes=536870912,Bv(t,e,u!==null?u.baseLanes|n:n,n,r)}else u!==null?(ad(e,u.cachePool),Ug(e,u),ds(),e.memoizedState=null):(t!==null&&ad(e,null),vf(),ds());return ja(t,e,l,n),e.child}function Sc(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function Bv(t,e,n,r,l){var u=df();return u=u===null?null:{parent:ka._currentValue,pool:u},e.memoizedState={baseLanes:n,cachePool:u},t!==null&&ad(e,null),vf(),Vg(e),t!==null&&to(t,e,r,!0),e.childLanes=l,null}function yd(t,e){return e=xd({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function Hv(t,e,n){return so(e,t.child,null,n),t=yd(e,e.pendingProps),t.flags|=2,On(e),e.memoizedState=null,t}function Dx(t,e,n){var r=e.pendingProps,l=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(ve){if(r.mode==="hidden")return t=yd(e,r),e.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Sc(null,t);if(yf(e),(t=Ke)?(t=db(t,ri),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:es!==null?{id:Vi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},n=_g(t),n.return=e,e.child=n,Ha=e,Ke=null)):t=null,t===null)throw ns(e);return e.lanes=536870912,null}return yd(e,r)}var u=t.memoizedState;if(u!==null){var b=u.dehydrated;if(yf(e),l)if(e.flags&256)e.flags&=-257,e=Hv(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(o(558));else if(Aa||to(t,e,n,!1),l=(n&t.childLanes)!==0,Aa||l){if(cs.current===null){if(r=qe,r!==null&&(b=Ye(r,n),b!==0&&b!==u.retryLane))throw u.retryLane=b,Qs(t,b),wn(r,t,b),Uf;Hd()}e=Hv(t,e,n)}else t=u.treeContext,Ke=oi(b.nextSibling),Ha=e,ve=!0,as=null,ri=!1,t!==null&&Cg(e,t),e=yd(e,r),e.flags|=134221824;return e}return t=Ar(t.child,{mode:r.mode,children:r.children}),t.ref=e.ref,e.child=t,t.return=e,t}function cl(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function Vf(t,e,n,r,l){return eo(e),n=_f(t,e,n,r,void 0,l),r=Sf(),t!==null&&!Aa?(kf(t,e,l),jr(t,e,l)):(ve&&r&&Zu(e),e.flags|=1,ja(t,e,n,l),e.child)}function Uv(t,e,n,r,l,u){return eo(e),e.updateQueue=null,n=Ig(e,r,n,l),qg(t),r=Sf(),t!==null&&!Aa?(kf(t,e,u),jr(t,e,u)):(ve&&r&&Zu(e),e.flags|=1,ja(t,e,n,u),e.child)}function Vv(t,e,n,r,l){if(eo(e),e.stateNode===null){var u=Jo,b=n.contextType;typeof b=="object"&&b!==null&&(u=Ga(b)),u=new n(r,u),e.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=Bf,e.stateNode=u,u._reactInternals=e,u=e.stateNode,u.props=r,u.state=e.memoizedState,u.refs={},ff(e),b=n.contextType,u.context=typeof b=="object"&&b!==null?Ga(b):Jo,u.state=e.memoizedState,b=n.getDerivedStateFromProps,typeof b=="function"&&(Lf(e,n,b,r),u.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(b=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),b!==u.state&&Bf.enqueueReplaceState(u,u.state,null),bc(e,r,u,l),vc(),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!0}else if(t===null){u=e.stateNode;var C=e.memoizedProps,j=lo(n,C);u.props=j;var P=u.context,nt=n.contextType;b=Jo,typeof nt=="object"&&nt!==null&&(b=Ga(nt));var ct=n.getDerivedStateFromProps;nt=typeof ct=="function"||typeof u.getSnapshotBeforeUpdate=="function",C=e.pendingProps!==C,nt||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(C||P!==b)&&Ev(e,u,r,b),ss=!1;var I=e.memoizedState;u.state=I,bc(e,r,u,l),vc(),P=e.memoizedState,C||I!==P||ss?(typeof ct=="function"&&(Lf(e,n,ct,r),P=e.memoizedState),(j=ss||Av(e,n,j,r,I,P,b))?(nt||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(e.flags|=4194308)):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=P),u.props=r,u.state=P,u.context=b,r=j):(typeof u.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{u=e.stateNode,pf(t,e),b=e.memoizedProps,nt=lo(n,b),u.props=nt,ct=e.pendingProps,I=u.context,P=n.contextType,j=Jo,typeof P=="object"&&P!==null&&(j=Ga(P)),C=n.getDerivedStateFromProps,(P=typeof C=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(b!==ct||I!==j)&&Ev(e,u,r,j),ss=!1,I=e.memoizedState,u.state=I,bc(e,r,u,l),vc();var tt=e.memoizedState;b!==ct||I!==tt||ss||t!==null&&t.dependencies!==null&&td(t.dependencies)?(typeof C=="function"&&(Lf(e,n,C,r),tt=e.memoizedState),(nt=ss||Av(e,n,nt,r,I,tt,j)||t!==null&&t.dependencies!==null&&td(t.dependencies))?(P||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(r,tt,j),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(r,tt,j)),typeof u.componentDidUpdate=="function"&&(e.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof u.componentDidUpdate!="function"||b===t.memoizedProps&&I===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&I===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=tt),u.props=r,u.state=tt,u.context=j,r=nt):(typeof u.componentDidUpdate!="function"||b===t.memoizedProps&&I===t.memoizedState||(e.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||b===t.memoizedProps&&I===t.memoizedState||(e.flags|=1024),r=!1)}return u=r,cl(t,e),r=(e.flags&128)!==0,u||r?(u=e.stateNode,n=r&&typeof n.getDerivedStateFromError!="function"?null:u.render(),e.flags|=1,t!==null&&r?(e.child=so(e,t.child,null,l),e.child=so(e,null,n,l)):ja(t,e,n,l),e.memoizedState=u.state,t=e.child):t=jr(t,e,l),t}function qv(t,e,n,r){return Ws(),e.flags|=256,ja(t,e,n,r),e.child}var qf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function If(t){return{baseLanes:t,cachePool:Og()}}function Kf(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=Rn),t}function Iv(t,e,n){var r=e.pendingProps,l=!1,u=(e.flags&128)!==0,b;if((b=u)||(b=t!==null&&t.memoizedState===null?!1:(Pa.current&2)!==0),b&&(l=!0,e.flags&=-129),b=(e.flags&32)!==0,e.flags&=-33,t===null){if(ve){if(l?us(e):ds(),(t=Ke)?(t=db(t,ri),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:es!==null?{id:Vi,overflow:qi}:null,retryLane:536870912,hydrationErrors:null},n=_g(t),n.return=e,e.child=n,Ha=e,Ke=null)):t=null,t===null)throw ns(e);return Ip(t)?e.lanes=32:e.lanes=536870912,null}return u=r.children,r=r.fallback,l?(ds(),l=e.mode,u=xd({mode:"hidden",children:u},l),r=Zs(r,l,n,null),u.return=e,r.return=e,u.sibling=r,e.child=u,r=e.child,r.memoizedState=If(n),r.childLanes=Kf(t,b,n),e.memoizedState=qf,Sc(null,r)):(us(e),Ff(e,u))}var C=t.memoizedState;if(C!==null){var j=C.dehydrated;if(j!==null)return Rx(t,e,u,b,r,j,C,n)}return l?(ds(),l=r.fallback,u=e.mode,C=t.child,j=C.sibling,r=Ar(C,{mode:"hidden",children:r.children}),r.subtreeFlags=C.subtreeFlags&1206910976,j!==null?l=Ar(j,l):(l=Zs(l,u,n,null),l.flags|=2),l.return=e,r.return=e,r.sibling=l,e.child=r,Sc(null,r),r=e.child,l=t.child.memoizedState,l===null?l=If(n):(u=l.cachePool,u!==null?(C=ka._currentValue,u=u.parent!==C?{parent:C,pool:C}:u):u=Og(),l={baseLanes:l.baseLanes|n,cachePool:u}),r.memoizedState=l,r.childLanes=Kf(t,b,n),e.memoizedState=qf,Sc(t.child,r)):(us(e),n=t.child,t=n.sibling,n=Ar(n,{mode:"visible",children:r.children}),n.return=e,n.sibling=null,t!==null&&(b=e.deletions,b===null?(e.deletions=[t],e.flags|=16):b.push(t)),e.child=n,e.memoizedState=null,n)}function Ff(t,e){return e=xd({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function xd(t,e){return t=vn(22,t,null,e),t.lanes=0,t}function wd(t,e,n){return so(e,t.child,null,n),t=Ff(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Rx(t,e,n,r,l,u,b,C){if(n)return e.flags&256?(us(e),e.flags&=-257,wd(t,e,C)):e.memoizedState!==null?(ds(),e.child=t.child,e.flags|=128,null):(ds(),u=l.fallback,b=e.mode,l=xd({mode:"visible",children:l.children},b),u=Zs(u,b,C,null),u.flags|=2,l.return=e,u.return=e,l.sibling=u,e.child=l,so(e,t.child,null,C),l=e.child,l.memoizedState=If(C),l.childLanes=Kf(t,r,C),e.memoizedState=qf,Sc(null,l));if(us(e),Ip(u)){if(r=u.nextSibling&&u.nextSibling.dataset,r)var j=r.dgst;return r=j,r!==""&&(l=Error(o(419)),l.stack="",l.digest=r,dc({value:l,source:null,stack:null})),wd(t,e,C)}if(Aa||to(t,e,C,!1),r=(C&t.childLanes)!==0,Aa||r){if(cs.current!==null)return wd(t,e,C);if(r=qe,r!==null&&(l=Ye(r,C),l!==0&&l!==b.retryLane))throw b.retryLane=l,Qs(t,l),wn(r,t,l),Uf;return qp(u)||Hd(),wd(t,e,C)}return qp(u)?(e.flags|=192,e.child=t.child,null):(t=b.treeContext,Ke=oi(u.nextSibling),Ha=e,ve=!0,as=null,ri=!1,t!==null&&Cg(e,t),e=Ff(e,l.children),e.flags|=134221824,e)}function Kv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ju(t.return,e,n)}function Fv(t){for(var e=null;t!==null;){var n=t.alternate;n!==null&&ld(n)===null&&(e=t),t=t.sibling}return e}function _d(t,e,n,r,l,u){var b=t.memoizedState;b===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l,treeForkCount:u}:(b.isBackwards=e,b.rendering=null,b.renderingStartTime=0,b.last=r,b.tail=n,b.tailMode=l,b.treeForkCount=u)}function Gf(t){var e=t.child;for(t.child=null;e!==null;){var n=e.sibling;e.sibling=t.child,t.child=e,e=n}}function Yf(t,e,n){var r=e.pendingProps,l=r.revealOrder,u=r.tail;r=r.children;var b=Pa.current;if(e.flags&128)return yc(e,b),null;var C=(b&2)!==0;if(C?(b=b&1|2,e.flags|=128):b&=1,yc(e,b),l==="backwards"&&t!==null?(Gf(t),ja(t,e,r,n),Gf(t)):ja(t,e,r,n),r=ve?uc:0,!C&&t!==null&&(t.flags&128)!==0)t:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kv(t,n,e);else if(t.tag===19)Kv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break t;for(;t.sibling===null;){if(t.return===null||t.return===e)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":n=Fv(e.child),n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null,Gf(e)),_d(e,!0,l,null,u,r);break;case"unstable_legacy-backwards":for(n=null,l=e.child,e.child=null;l!==null;){if(t=l.alternate,t!==null&&ld(t)===null){e.child=l;break}t=l.sibling,l.sibling=n,n=l,l=t}_d(e,!0,n,null,u,r);break;case"together":_d(e,!1,null,null,void 0,r);break;case"independent":e.memoizedState=null;break;default:n=Fv(e.child),n===null?(l=e.child,e.child=null):(l=n.sibling,n.sibling=null),_d(e,!1,l,n,u,r)}return e.child}function Gv(t,e,n){var r=e.pendingProps;return is(e,e.type,r.value),ja(t,e,r.children,n),e.child}function jr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,(n&e.childLanes)===0)if(t!==null){if(to(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(o(153));if(e.child!==null){for(t=e.child,n=Ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Pf(t,e){return(t.lanes&e)!==0?!0:(t=t.dependencies,!!(t!==null&&td(t)))}function Mx(t,e,n){switch(e.tag){case 3:Ni(e,e.stateNode.containerInfo),is(e,ka,t.memoizedState.cache),Ws();break;case 27:case 5:or(e);break;case 4:Ni(e,e.stateNode.containerInfo);break;case 10:is(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,yf(e),null;break;case 13:var r=e.memoizedState;if(r!==null){if(r.dehydrated!==null)return us(e),e.flags|=128,null;r=to(t,e,n,!1);var l=e.child.childLanes;return r||(n&l)!==0?Iv(t,e,n):(us(e),t=jr(t,e,n),t!==null?t.sibling:null)}us(e);break;case 19:if(e.flags&128)return Yf(t,e,n);if(l=(t.flags&128)!==0,r=(n&e.childLanes)!==0,r||(to(t,e,n,!1),r=(n&e.childLanes)!==0),l){if(r)return Yf(t,e,n);e.flags|=128}if(l=e.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),yc(e,Pa.current),r)break;return null;case 22:return e.lanes=0,Lv(t,e,n,e.pendingProps);case 24:is(e,ka,t.memoizedState.cache)}return jr(t,e,n)}function Yv(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)Aa=!0;else{if(!Pf(t,n)&&(e.flags&128)===0)return Aa=!1,Mx(t,e,n);Aa=(t.flags&131072)!==0}else Aa=!1,ve&&(e.flags&1048576)!==0&&kg(e,uc,e.index);switch(e.lanes=0,e.tag){case 16:t:{var r=e.pendingProps;if(t=io(e.elementType),e.type=t,typeof t=="function")tf(t)?(r=lo(t,r),e.tag=1,e=Vv(null,e,t,r,n)):(e.tag=0,e=Vf(null,e,t,r,n));else{if(t!=null){var l=t.$$typeof;if(l===Et){e.tag=11,e=Rv(null,e,t,r,n);break t}else if(l===ie){e.tag=14,e=Mv(null,e,t,r,n);break t}else if(l===ge){e.tag=10,e.type=t,e=Gv(null,e,n);break t}}throw e=Mt(t)||t,Error(o(306,e,""))}}return e;case 0:return Vf(t,e,e.type,e.pendingProps,n);case 1:return r=e.type,l=lo(r,e.pendingProps),Vv(t,e,r,l,n);case 3:t:{if(Ni(e,e.stateNode.containerInfo),t===null)throw Error(o(387));r=e.pendingProps;var u=e.memoizedState;l=u.element,pf(t,e),bc(e,r,null,n);var b=e.memoizedState;if(r=b.cache,is(e,ka,r),r!==u.cache&&lf(e,[ka],n,!0),vc(),r=b.element,u.isDehydrated)if(u={element:r,isDehydrated:!1,cache:b.cache},e.updateQueue.baseState=u,e.memoizedState=u,e.flags&256){e=qv(t,e,r,n);break t}else if(r!==l){l=ai(Error(o(424)),e),dc(l),e=qv(t,e,r,n);break t}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=oi(t.firstChild),Ha=e,ve=!0,as=null,ri=!0,n=Lg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|134221824,n=n.sibling}else{if(Ws(),r===l){e=jr(t,e,n);break t}ja(t,e,r,n)}e=e.child}return e;case 26:return cl(t,e),t===null?(n=bb(e.type,null,e.pendingProps,null))?e.memoizedState=n:ve||(e.stateNode=Z0(e.type,e.pendingProps,Na.current,e)):e.memoizedState=bb(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return or(e),t===null&&ve&&(r=e.stateNode=pb(e.type,e.pendingProps,Na.current),Ha=e,ri=!0,l=Ke,ys(e.type)?(Kp=l,Ke=oi(r.firstChild)):Ke=l),ja(t,e,e.pendingProps.children,n),cl(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&ve&&((l=r=Ke)&&(r=zw(r,e.type,e.pendingProps,ri),r!==null?(e.stateNode=r,Ha=e,Ke=oi(r.firstChild),ri=!1,l=!0):l=!1),l||ns(e)),or(e),l=e.type,u=e.pendingProps,b=t!==null?t.memoizedProps:null,r=u.children,Mp(l,u)?r=null:b!==null&&Mp(l,b)&&(e.flags|=32),e.memoizedState!==null&&(l=_f(t,e,kx,null,null,n),El._currentValue=l),cl(t,e),ja(t,e,r,n),e.child;case 6:return t===null&&ve&&((t=n=Ke)&&(n=Nw(n,e.pendingProps,ri),n!==null?(e.stateNode=n,Ha=e,Ke=null,t=!0):t=!1),t||ns(e)),null;case 13:return Iv(t,e,n);case 4:return Ni(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=so(e,null,r,n):ja(t,e,r,n),e.child;case 11:return Rv(t,e,e.type,e.pendingProps,n);case 7:return r=e.pendingProps,cl(t,e),ja(t,e,r,n),e.child;case 8:return ja(t,e,e.pendingProps.children,n),e.child;case 12:return ja(t,e,e.pendingProps.children,n),e.child;case 10:return Gv(t,e,n);case 9:return l=e.type._context,r=e.pendingProps.children,eo(e),l=Ga(l),r=r(l),e.flags|=1,ja(t,e,r,n),e.child;case 14:return Mv(t,e,e.type,e.pendingProps,n);case 15:return $v(t,e,e.type,e.pendingProps,n);case 19:return Yf(t,e,n);case 31:return Dx(t,e,n);case 22:return Lv(t,e,n,e.pendingProps);case 24:return eo(e),r=Ga(ka),t===null?(l=df(),l===null&&(l=qe,u=cf(),l.pooledCache=u,u.refCount++,u!==null&&(l.pooledCacheLanes|=n),l=u),e.memoizedState={parent:r,cache:l},ff(e),is(e,ka,l)):((t.lanes&n)!==0&&(pf(t,e),bc(e,null,null,n),vc()),l=t.memoizedState,u=e.memoizedState,l.parent!==r?(l={parent:r,cache:r},e.memoizedState=l,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=l),is(e,ka,r)):(r=u.cache,is(e,ka,r),r!==l.cache&&lf(e,[ka],n,!0))),ja(t,e,e.pendingProps.children,n),e.child;case 30:return e.stateNode===null&&(e.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=e.pendingProps,r.name!=null&&r.name!=="auto"?e.flags|=t===null?18882560:18874368:ve&&Zu(e),t!==null&&t.memoizedProps.name!==r.name?e.flags|=4194816:cl(t,e),ja(t,e,r.children,n),e.child;case 29:throw e.pendingProps}throw Error(o(156,e.tag))}function Dr(t){t.flags|=4}function Xf(t,e,n,r,l){var u;if((u=(t.mode&32)!==0)&&(u=n===null?_b(e,r):_b(e,r)&&(r.src!==n.src||r.srcSet!==n.srcSet)),u){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(T0())t.flags|=8192;else throw ro=id,hf}else t.flags&=-16777217}function Pv(t,e){if(e.type!=="stylesheet"||(e.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Sb(e))if(T0())t.flags|=8192;else throw ro=id,hf}function Sd(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?zu():536870912,t.lanes|=e,pl|=e)}function kc(t,e){if(!ve)switch(t.tailMode){case"visible":break;case"collapsed":for(var n=t.tail,r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(e=t.tail,n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null}}function Fe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var l=t.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $x(t,e,n){var r=e.pendingProps;switch(nf(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(e),null;case 1:return Fe(e),null;case 3:return n=e.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),e.memoizedState.cache!==r&&(e.flags|=2048),zr(ka),sr(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(al(e)?Dr(e):t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,sf())),Fe(e),null;case 26:var l=e.type,u=e.memoizedState;return t===null?(Dr(e),u!==null?(Fe(e),Pv(e,u)):(Fe(e),Xf(e,l,null,r,n))):u?u!==t.memoizedState?(Dr(e),Fe(e),Pv(e,u)):(Fe(e),e.flags&=-16777217):(t=t.memoizedProps,t!==r&&Dr(e),Fe(e),Xf(e,l,t,r,n)),null;case 27:if(Ma(e),n=Na.current,l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Dr(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return Fe(e),e.subtreeFlags&=-33554433,null}t=Yn.current,al(e)?Ag(e):(t=pb(l,r,n),e.stateNode=t,Dr(e))}return Fe(e),e.subtreeFlags&=-33554433,null;case 5:if(Ma(e),l=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==r&&Dr(e);else{if(!r){if(e.stateNode===null)throw Error(o(166));return Fe(e),e.subtreeFlags&=-33554433,null}if(u=Yn.current,al(e))Ag(e);else{var b=Mc(Na.current);switch(u){case 1:u=b.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:u=b.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":u=b.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":u=b.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":u=b.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof r.is=="string"?b.createElement("select",{is:r.is}):b.createElement("select"),r.multiple?u.multiple=!0:r.size&&(u.size=r.size);break;default:u=typeof r.is=="string"?b.createElement(l,{is:r.is}):b.createElement(l)}}u[ga]=e,u[oa]=r;t:for(b=e.child;b!==null;){if(b.tag===5||b.tag===6)u.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break t;for(;b.sibling===null;){if(b.return===null||b.return===e)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}e.stateNode=u;t:switch(Qa(u,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Dr(e)}}return Fe(e),e.subtreeFlags&=-33554433,Xf(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==r&&Dr(e);else{if(typeof r!="string"&&e.stateNode===null)throw Error(o(166));if(t=Na.current,al(e)){if(t=e.stateNode,n=e.memoizedProps,r=null,l=Ha,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[ga]=e,t=!!(t.nodeValue===n||r!==null&&r.suppressHydrationWarning===!0||Y0(t.nodeValue,n)),t||ns(e,!0)}else t=Mc(t).createTextNode(r),t[ga]=e,e.stateNode=t}return Fe(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(r=al(e),n!==null){if(t===null){if(!r)throw Error(o(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(o(557));t[ga]=e}else Ws(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Fe(e),t=!1}else n=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(On(e),e):(On(e),null);if((e.flags&128)!==0)throw Error(o(558))}return Fe(e),null;case 13:if(r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(o(318));if(l=e.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(o(317));l[ga]=e}else Ws(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Fe(e),l=!1}else l=sf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return e.flags&256?(On(e),e):(On(e),null)}return On(e),(e.flags&128)!==0?(e.lanes=n,e):(n=r!==null,t=t!==null&&t.memoizedState!==null,n&&(r=e.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==l&&(r.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Sd(e,e.updateQueue),Fe(e),null);case 4:return sr(),t===null&&Np(e.stateNode.containerInfo),e.flags|=67108864,Fe(e),null;case 10:return zr(e.type),Fe(e),null;case 19:if(xf(e),r=e.memoizedState,r===null)return Fe(e),null;if(l=(e.flags&128)!==0,u=r.rendering,u===null)if(l)kc(r,!1);else{if(ua!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(u=ld(t),u!==null){for(e.flags|=128,kc(r,!1),t=u.updateQueue,e.updateQueue=t,Sd(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)wg(n,t),n=n.sibling;return yc(e,Pa.current&1|2),ve&&Er(e,r.treeForkCount),e.child}t=t.sibling}r.tail!==null&&$a()>Md&&(e.flags|=128,l=!0,kc(r,!1),e.lanes=4194304)}else{if(!l)if(t=ld(u),t!==null){if(e.flags|=128,l=!0,t=t.updateQueue,e.updateQueue=t,Sd(e,t),kc(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!u.alternate&&!ve)return Fe(e),null}else 2*$a()-r.renderingStartTime>Md&&n!==536870912&&(e.flags|=128,l=!0,kc(r,!1),e.lanes=4194304);r.isBackwards?(u.sibling=e.child,e.child=u):(t=r.last,t!==null?t.sibling=u:e.child=u,r.last=u)}if(r.tail!==null){t=r.tail;t:{for(n=t;n!==null;){if(n.alternate!==null){n=!1;break t}n=n.sibling}n=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=$a(),t.sibling=null,u=Pa.current,u=l?u&1|2:u&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!n||ve?yc(e,u):(n=u,ce(Ya,e),ce(Pa,n),nn===null&&(nn=e)),ve&&Er(e,r.treeForkCount),t}return Fe(e),null;case 22:case 23:return On(e),bf(),r=e.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(e.flags|=8192):r&&(e.flags|=8192),r?(n&536870912)!==0&&(e.flags&128)===0&&(Fe(e),e.subtreeFlags&6&&(e.flags|=8192)):Fe(e),n=e.updateQueue,n!==null&&Sd(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),r=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),r!==n&&(e.flags|=2048),t!==null&&sa(no),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),zr(ka),Fe(e),null;case 25:return null;case 30:return e.flags|=33554432,Fe(e),null}throw Error(o(156,e.tag))}function Lx(t,e){switch(nf(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zr(ka),sr(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Ma(e),null;case 31:if(e.memoizedState!==null){if(On(e),e.alternate===null)throw Error(o(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(On(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(o(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return xf(e),t=e.flags,t&65536?(e.flags=t&-65537|128,t=e.memoizedState,t!==null&&(t.rendering=null,t.tail=null),e.flags|=4,e):null;case 4:return sr(),null;case 10:return zr(e.type),null;case 22:case 23:return On(e),bf(),t!==null&&sa(no),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return zr(ka),null;case 25:return null;default:return null}}function Xv(t,e){switch(nf(e),e.tag){case 3:zr(ka),sr();break;case 26:case 27:case 5:Ma(e);break;case 4:sr();break;case 31:e.memoizedState!==null&&On(e);break;case 13:On(e);break;case 19:xf(e);break;case 10:zr(e.type);break;case 22:case 23:On(e),bf(),t!==null&&sa(no);break;case 24:zr(ka)}}function Cc(t,e){try{var n=e.updateQueue,r=n!==null?n.lastEffect:null;if(r!==null){var l=r.next;n=l;do{if((n.tag&t)===t){r=void 0;var u=n.create,b=n.inst;r=u(),b.destroy=r}n=n.next}while(n!==l)}}catch(C){Be(e,e.return,C)}}function hs(t,e,n){try{var r=e.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var u=l.next;r=u;do{if((r.tag&t)===t){var b=r.inst,C=b.destroy;if(C!==void 0){b.destroy=void 0,l=e;var j=n,P=C;try{P()}catch(nt){Be(l,j,nt)}}}r=r.next}while(r!==u)}}catch(nt){Be(e,e.return,nt)}}function Qv(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{Hg(e,n)}catch(r){Be(t,t.return,r)}}}function Zv(t,e,n){n.props=lo(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(r){Be(t,e,r)}}function Ii(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,u=kr(t.memoizedProps,l);(l.ref===null||l.ref.name!==u)&&(l.ref=ib(u)),r=l.ref;break;case 7:if(t.stateNode===null){var b=new $n(t);_(t.child,!1,Ew,b,void 0,void 0),t.stateNode=b}r=t.stateNode;break;default:r=t.stateNode}typeof n=="function"?t.refCleanup=n(r):n.current=r}}catch(C){Be(t,e,C)}}function Xa(t,e){var n=t.ref,r=t.refCleanup;if(n!==null)if(typeof r=="function")try{r()}catch(l){Be(t,e,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){Be(t,e,l)}else n.current=null}function kd(t,e){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&e!==null)for(var n=0;n<e.length;n++)ub(t.stateNode,e[n])}function Wv(t){for(var e=t.return;e!==null&&(Zf(e)&&ub(t.stateNode,e.stateNode),!Qf(e));)e=e.return}function Ac(t){for(var e=t.return;e!==null&&(Zf(e)&&Tw(t.stateNode,e.stateNode),!Qf(e));)e=e.return}function Qf(t){return t.tag===5||t.tag===3||t.tag===27}function Zf(t){return t&&t.tag===7&&t.stateNode!==null}function Wf(t){var e=t.type,n=t.memoizedProps,r=t.stateNode;try{t:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break t;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(l){Be(t,t.return,l)}}function Jf(t,e,n){try{var r=t.stateNode;cw(r,t.type,n,e),r[oa]=e}catch(l){Be(t,t.return,l)}}function Jv(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ys(t.type)||t.tag===4}function tp(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||Jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ys(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ep(t,e,n,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(l,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(l),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wn)),kd(t,r),qt=!0;else if(l!==4&&(l===27&&(kd(t,r),r=null,ys(t.type)&&(n=t.stateNode,e=null)),t=t.child,t!==null))for(ep(t,e,n,r),t=t.sibling;t!==null;)ep(t,e,n,r),t=t.sibling}function Cd(t,e,n,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,e?n.insertBefore(l,e):n.appendChild(l),kd(t,r),qt=!0;else if(l!==4&&(l===27&&(kd(t,r),r=null,ys(t.type)&&(n=t.stateNode)),t=t.child,t!==null))for(Cd(t,e,n,r),t=t.sibling;t!==null;)Cd(t,e,n,r),t=t.sibling}function t0(t){var e=t.stateNode,n=t.memoizedProps;try{for(var r=t.type,l=e.attributes;l.length;)e.removeAttributeNode(l[0]);Qa(e,r,n),e[ga]=t,e[oa]=n}catch(u){Be(t,t.return,u)}}var Ad=!1,jn=null;function e0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Ad=!0)}var Ki=null;function a0(){var t=Ki;return Ki=null,t}var bn=0;function ul(t,e,n,r,l){return bn=0,n0(t.child,e,n,r,l)}function n0(t,e,n,r,l){for(var u=!1;t!==null;){if(t.tag===5){var b=t.stateNode;if(r!==null){var C=Bp(b);r.push(C),C.view&&(u=!0)}else u||Bp(b).view&&(u=!0);Ad=!0,ab(b,bn===0?e:e+"_"+bn,n),bn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||n0(t.child,e,n,r,l)&&(u=!0));t=t.sibling}return u}function Fi(t,e){for(;t!==null;)t.tag===5?nb(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&e||Fi(t.child,e)),t=t.sibling}function Ed(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Ed(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var e=t.memoizedProps;if(e.name==null||e.name==="auto")throw Error(o(544));var n=e.name;e=Cr(e.default,e.share),e!=="none"&&(ul(t,n,e,null,!1)||Fi(t.child,!1))}t=t.sibling}}function ap(t,e){if(t.tag===30){var n=t.stateNode,r=t.memoizedProps,l=kr(r,n),u=Cr(r.default,n.paired?r.share:r.enter);u!=="none"?ul(t,l,u,null,!1)?(Ed(t),n.paired||e||bl(t,r.onEnter)):Fi(t.child,!1):Ed(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ap(t,e),t=t.sibling;else Ed(t)}function np(t){if(jn!==null&&jn.size!==0){var e=jn;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.memoizedProps,r=n.name;if(r!=null&&r!=="auto"){var l=e.get(r);if(l!==void 0){var u=Cr(n.default,n.share);if(u!=="none"&&(ul(t,r,u,null,!1)?(u=t.stateNode,l.paired=u,u.paired=l,bl(t,n.onShare)):Fi(t.child,!1)),e.delete(r),e.size===0)break}}}np(t)}t=t.sibling}}}function ip(t){if(t.tag===30){var e=t.memoizedProps,n=kr(e,t.stateNode),r=jn!==null?jn.get(n):void 0,l=Cr(e.default,r!==void 0?e.share:e.exit);l!=="none"&&(ul(t,n,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,jn.delete(n),bl(t,e.onShare)):bl(t,e.onExit):Fi(t.child,!1)),jn!==null&&np(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ip(t),t=t.sibling;else jn!==null&&np(t)}function i0(t){for(t=t.child;t!==null;){if(t.tag===30){var e=t.memoizedProps,n=kr(e,t.stateNode);e=Cr(e.default,e.update),t.flags&=-5,e!=="none"&&ul(t,n,e,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&i0(t);t=t.sibling}}function rp(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var e=t.stateNode;e.paired!==null&&(e.paired=null,Fi(t.child,!1))}rp(t)}t=t.sibling}}function Td(t){if(t.tag===30)t.stateNode.paired=null,Fi(t.child,!1),rp(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Td(t),t=t.sibling;else rp(t)}function r0(t){for(t=t.child;t!==null;)t.tag===30?Fi(t.child,!1):(t.subtreeFlags&33554432)!==0&&r0(t),t=t.sibling}function sp(t,e,n,r,l,u,b){for(var C=!1;e!==null;){if(e.tag===5){var j=e.stateNode;if(u!==null&&bn<u.length){var P=u[bn],nt=Bp(j);(P.view||nt.view)&&(C=!0);var ct;if(ct=(t.flags&4)===0)if(nt.clip)ct=!0;else{ct=P.rect;var I=nt.rect;ct=ct.y!==I.y||ct.x!==I.x||ct.height!==I.height||ct.width!==I.width}ct&&(t.flags|=4),nt.abs?nt=!P.abs:(P=P.rect,nt=nt.rect,nt=P.height!==nt.height||P.width!==nt.width),nt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&ab(j,bn===0?n:n+"_"+bn,l),C&&(t.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(j,bn===0?r:r+"_"+bn,e.memoizedProps)),bn++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&b?t.flags|=e.flags&32:sp(t,e.child,n,r,l,u,b)&&(C=!0));e=e.sibling}return C}function s0(t,e){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,r=t.stateNode,l=kr(n,r),u=Cr(n.default,n.update),b;b=t.memoizedState,t.memoizedState=null,r=t;var C=t.child;bn=0,l=sp(r,C,l,l,u,b,!1),(t.flags&4)!==0&&l&&bl(t,n.onUpdate)}else(t.subtreeFlags&33554432)!==0&&s0(t);t=t.sibling}}var Ua=!1,je=!1,Gi=!1,op=!1,o0=typeof WeakSet=="function"?WeakSet:Set,Va=null,Yi=!1,Ec=!1,zd=!1,lp=!1;function Bx(t,e,n){if(t=t.containerInfo,Dp=Tl,t=Vt(t),wt(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var u=l.anchorOffset,b=l.focusNode;l=l.focusOffset;try{r.nodeType,b.nodeType}catch{r=null;break t}var C=0,j=-1,P=-1,nt=0,ct=0,I=t,tt=null;e:for(;;){for(var Rt;I!==r||u!==0&&I.nodeType!==3||(j=C+u),I!==b||l!==0&&I.nodeType!==3||(P=C+l),I.nodeType===3&&(C+=I.nodeValue.length),(Rt=I.firstChild)!==null;)tt=I,I=Rt;for(;;){if(I===t)break e;if(tt===r&&++nt===u&&(j=C),tt===b&&++ct===l&&(P=C),(Rt=I.nextSibling)!==null)break;I=tt,tt=I.parentNode}I=Rt}r=j===-1||P===-1?null:{start:j,end:P}}else r=null}r=r||{start:0,end:0}}else r=null;for(Rp={focusedElem:t,selectionRange:r},Tl=!1,n=(n&335544064)===n,Va=e,e=n?9270:1024;Va!==null;){if(t=Va,n&&(r=t.deletions,r!==null))for(u=0;u<r.length;u++)n&&ip(r[u]);if(t.alternate===null&&(t.flags&2)!==0)n&&e0(t),Nd(n);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&n&&ip(r),Nd(n);continue}else if(r!==null&&r.memoizedState!==null){n&&e0(t),Nd(n);continue}}r=t.child,(t.subtreeFlags&e)!==0&&r!==null?(r.return=t,Va=r):(n&&i0(t),Nd(n))}}jn=null}function Nd(t){for(;Va!==null;){var e=Va,n=t,r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){n=void 0,l=r.memoizedProps,r=r.memoizedState;var u=e.stateNode;try{var b=lo(e.type,l);n=u.getSnapshotBeforeUpdate(b,r),u.__reactInternalSnapshotBeforeUpdate=n}catch(C){Be(e,e.return,C)}}break;case 3:if((l&1024)!==0){if(r=e.stateNode.containerInfo,n=r.nodeType,n===9)Vp(r);else if(n===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Vp(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:n&&r!==null&&(n=kr(r.memoizedProps,r.stateNode),l=e.memoizedProps,l=Cr(l.default,l.update),l!=="none"&&ul(r,n,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(o(163))}if(r=e.sibling,r!==null){r.return=e.return,Va=r;break}Va=e.return}}function l0(t,e,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Pi(t,n),r&4&&Cc(5,n);break;case 1:if(Pi(t,n),r&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(b){Be(n,n.return,b)}else{var l=lo(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(l,e,t.__reactInternalSnapshotBeforeUpdate)}catch(b){Be(n,n.return,b)}}r&64&&Qv(n),r&512&&Ii(n,n.return);break;case 3:if(Pi(t,n),r&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{Hg(t,e)}catch(b){Be(n,n.return,b)}}break;case 27:e===null&&r&4&&t0(n);case 26:case 5:Pi(t,n),e===null&&r&4&&Wf(n),r&512&&Ii(n,n.return);break;case 12:Pi(t,n);break;case 31:Pi(t,n),r&4&&h0(t,n);break;case 13:Pi(t,n),r&4&&f0(t,n),r&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=Qx.bind(null,n),Ow(t,n))));break;case 22:if(r=n.memoizedState!==null||Ua,!r){var u=e!==null&&e.memoizedState!==null||je;e=Ua,l=je,Ua=r,(je=u)&&!l?(r=2,(n.subtreeFlags&8772)!==0&&(r|=1),wi(t,n,r)):Pi(t,n),Ua=e,je=l}break;case 30:Pi(t,n),r&512&&Ii(n,n.return);break;case 7:r&512&&Ii(n,n.return);default:Pi(t,n)}}function cp(t,e){for(t=t.child;t!==null;)c0(t,e),t=t.sibling}function c0(t,e){switch(t.tag){case 5:case 26:try{var n=t.stateNode;if(e){var r=n.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,u=t.memoizedProps.style,b=u!=null&&u.hasOwnProperty("display")?u.display:null;l.style.display=b==null||typeof b=="boolean"?"":(""+b).trim()}}catch(j){Be(t,t.return,j)}up(t,e);break;case 6:try{t.stateNode.nodeValue=e?"":t.memoizedProps,qt=!0}catch(j){Be(t,t.return,j)}break;case 18:try{var C=t.stateNode;e?eb(C,!0):eb(t.stateNode,!1)}catch(j){Be(t,t.return,j)}break;case 22:case 23:t.memoizedState===null&&cp(t,e);break;default:cp(t,e)}}function up(t,e){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var n=t,r=e;switch(n.tag){case 4:c0(n,r);break t;case 22:n.memoizedState===null&&up(n,r);break t;default:up(n,r)}}t=t.sibling}}function u0(t){var e=t.alternate;e!==null&&(t.alternate=null,u0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&Oi(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ze=null,yn=!1;function yi(t,e,n){for(n=n.child;n!==null;)d0(t,e,n),n=n.sibling}function d0(t,e,n){if(xa&&typeof xa.onCommitFiberUnmount=="function")try{xa.onCommitFiberUnmount(Pn,n)}catch{}switch(n.tag){case 26:je||Xa(n,e),yi(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&!je&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:je||Xa(n,e),Ac(n);var r=Ze,l=yn;ys(n.type)&&(Ze=n.stateNode,yn=!1),yi(t,e,n),mb(n.stateNode,n.type,n.memoizedProps),Ze=r,yn=l;break;case 5:je||Xa(n,e),Ac(n);case 6:if(n.tag===6&&Ac(n),r=Ze,l=yn,Ze=null,yi(t,e,n),Ze=r,yn=l,Ze!==null)if(yn)try{(Ze.nodeType===9?Ze.body:Ze.nodeName==="HTML"?Ze.ownerDocument.body:Ze).removeChild(n.stateNode),qt=!0}catch(u){Be(n,e,u)}else try{Ze.removeChild(n.stateNode),qt=!0}catch(u){Be(n,e,u)}break;case 18:Ze!==null&&(yn?(t=Ze,tb(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),zl(t)):tb(Ze,n.stateNode));break;case 4:r=Ze,l=yn,Ze=n.stateNode.containerInfo,yn=!0,yi(t,e,n),Ze=r,yn=l;break;case 0:case 11:case 14:case 15:hs(2,n,e),je||hs(4,n,e),yi(t,e,n);break;case 1:je||(Xa(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"&&Zv(n,e,r)),yi(t,e,n);break;case 21:yi(t,e,n);break;case 22:je=(r=je)||n.memoizedState!==null,yi(t,e,n),je=r;break;case 30:Xa(n,e),yi(t,e,n);break;case 7:je||Xa(n,e),yi(t,e,n);break;default:yi(t,e,n)}}function h0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{zl(t)}catch(n){Be(e,e.return,n)}}}function f0(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{zl(t)}catch(n){Be(e,e.return,n)}}function Hx(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new o0),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new o0),e;default:throw Error(o(435,t.tag))}}function Od(t,e){var n=Hx(t);e.forEach(function(r){if(!n.has(r)){n.add(r);var l=Zx.bind(null,t,r);r.then(l,l)}})}function dn(t,e,n){var r=e.deletions;if(r!==null)for(var l=0;l<r.length;l++){var u=r[l],b=t,C=e,j=C;t:for(;j!==null;){switch(j.tag){case 27:if(ys(j.type)){Ze=j.stateNode,yn=!1;break t}break;case 5:Ze=j.stateNode,yn=!1;break t;case 3:case 4:Ze=j.stateNode.containerInfo,yn=!0;break t}j=j.return}if(Ze===null)throw Error(o(160));d0(b,C,u),Ze=null,yn=!1,b=u.alternate,b!==null&&(b.return=null),u.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)p0(e,t,n),e=e.sibling}var xi=null;function p0(t,e,n){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var u=0;u<r.length;u++){var b=r[u];b.ref.impl=b.nextImpl}dn(e,t,n),hn(t),l&4&&(hs(3,t,t.return),Cc(3,t),hs(5,t,t.return));break;case 1:dn(e,t,n),hn(t),l&512&&(je||r===null||Xa(r,r.return)),l&64&&Ua&&(t=t.updateQueue,t!==null&&(e=t.callbacks,e!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?e:n.concat(e))));break;case 26:if(u=xi,dn(e,t,n),hn(t),l&512&&(je||r===null||Xa(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,n=t.memoizedState,r===null)if(n===null)if(t.stateNode===null)if(Ua)t.stateNode=Z0(t.type,t.memoizedProps,e.containerInfo,t);else{t:{e=t.type,n=t.memoizedProps,l=u.ownerDocument||u;e:switch(e){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Gr]||r[ga]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(e),l.head.insertBefore(r,l.querySelector("head > title"))),Qa(r,e,n),r[ga]=t,Pe(r),e=r;break t;case"link":if(u=wb("link","href",l).get(e+(n.href||""))){for(b=0;b<u.length;b++)if(r=u[b],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(b,1);break e}}r=l.createElement(e),Qa(r,e,n),l.head.appendChild(r);break;case"meta":if(u=wb("meta","content",l).get(e+(n.content||""))){for(b=0;b<u.length;b++)if(r=u[b],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(b,1);break e}}r=l.createElement(e),Qa(r,e,n),l.head.appendChild(r);break;default:throw Error(o(468,e))}r[ga]=t,Pe(r),e=r}t.stateNode=e}else Ua||Pp(u,t.type,t.stateNode);else t.stateNode=xb(u,n,t.memoizedProps);else l!==n?(l===null?(e=r.stateNode,e===null||je||e.parentNode.removeChild(e)):l.count--,n===null?Ua||Pp(u,t.type,t.stateNode):xb(u,n,t.memoizedProps)):n===null&&t.stateNode!==null&&Jf(t,t.memoizedProps,r.memoizedProps);break;case 27:dn(e,t,n),hn(t),l&512&&(je||r===null||Xa(r,r.return)),r!==null&&l&4&&Jf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(u=Gi,Gi=!1,dn(e,t,n),Gi=u,hn(t),l&512&&(je||r===null||Xa(r,r.return)),t.flags&32){e=t.stateNode;try{Ri(e,""),qt=!0}catch(nt){Be(t,t.return,nt)}}l&4&&t.stateNode!=null&&(e=t.memoizedProps,Jf(t,e,r!==null?r.memoizedProps:e)),l&1024&&(op=!0);break;case 6:if(dn(e,t,n),hn(t),l&4){if(t.stateNode===null)throw Error(o(162));e=t.memoizedProps,n=t.stateNode;try{n.nodeValue=e,qt=!0}catch(nt){Be(t,t.return,nt)}}break;case 3:if(qt=!1,Gd=null,u=xi,xi=$c(e.containerInfo),dn(e,t,n),xi=u,hn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{zl(e.containerInfo)}catch(nt){Be(t,t.return,nt)}op&&(op=!1,m0(t)),qt=!1;break;case 4:l=Gi,Gi=Ua,r=Ql(),u=xi,xi=$c(t.stateNode.containerInfo),dn(e,t,n),hn(t),xi=u,qt&&Ec&&(zd=!0),qt=r,Gi=l;break;case 12:dn(e,t,n),hn(t);break;case 31:dn(e,t,n),hn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Od(t,e)));break;case 13:dn(e,t,n),hn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Rd=$a()),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Od(t,e)));break;case 22:u=t.memoizedState!==null,b=r!==null&&r.memoizedState!==null;var C=Ua,j=je,P=Gi;Ua=C||u,Gi=P||u,je=j||b,dn(e,t,n),je=j,Gi=P,Ua=C,hn(t),l&8192&&(e=t.stateNode,e._visibility=u?e._visibility&-2:e._visibility|1,!u||r===null||b||Ua||je||(e=b||je,n=Ua,r=je,Ua=u||Ua,je=e,fs(t,2),Ua=n,je=r),!u&&Gi||cp(t,u)),l&4&&(e=t.updateQueue,e!==null&&(n=e.retryQueue,n!==null&&(e.retryQueue=null,Od(t,n))));break;case 19:dn(e,t,n),hn(t),l&4&&(e=t.updateQueue,e!==null&&(t.updateQueue=null,Od(t,e)));break;case 30:l&512&&(je||r===null||Xa(r,r.return)),l=Ql(),u=Ec,b=(n&335544064)===n,C=t.memoizedProps,Ec=b&&Cr(C.default,C.update)!=="none",dn(e,t,n),hn(t),b&&r!==null&&qt&&(t.flags|=4),Ec=u,qt=l;break;case 21:break;case 7:l&512&&(je||r===null||Xa(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:dn(e,t,n),hn(t)}}function hn(t){var e=t.flags;if(e&2){try{for(var n,r=t.return;r!==null;){if(Jv(r)){n=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(Zf(l)){var u=l.stateNode;r===null?r=[u]:r.push(u)}if(Qf(l))break;l=l.return}var b=r;if(n==null)throw Error(o(160));switch(n.tag){case 27:var C=n.stateNode,j=tp(t);Cd(t,j,C,b);break;case 5:var P=n.stateNode;n.flags&32&&(Ri(P,""),n.flags&=-33);var nt=tp(t);Cd(t,nt,P,b);break;case 3:case 4:var ct=n.stateNode.containerInfo,I=tp(t);ep(t,I,ct,b);break;default:throw Error(o(161))}}catch(tt){Be(t,t.return,tt)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function m0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;m0(e),e.tag===5&&e.flags&1024&&(e=e.stateNode,Tl=!0,e.reset(),Tl=!1),t=t.sibling}}function dl(t,e){if(e.subtreeFlags&9270)for(e=e.child;e!==null;)g0(e,t),e=e.sibling;else s0(e)}function g0(t,e){var n=t.alternate;if(n===null)ap(t,!1);else switch(t.tag){case 3:if(lp=Yi=!1,a0(),dl(e,t),!Yi&&!zd){if(t=Ki,t!==null)for(var r=0;r<t.length;r+=3){n=t[r];var l=t[r+1];nb(n,t[r+2]),n=n.ownerDocument.documentElement,n!==null&&n.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=e.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),lp=!0}Ki=null;break;case 5:dl(e,t);break;case 4:r=Yi,Yi=!1,dl(e,t),Yi&&(zd=!0),Yi=r;break;case 22:t.memoizedState===null&&(n.memoizedState!==null?ap(t,!1):dl(e,t));break;case 30:r=Yi,l=a0(),Yi=!1,dl(e,t),Yi&&(t.flags|=4);var u=t.memoizedProps,b=t.stateNode;e=kr(u,b),b=kr(n.memoizedProps,b);var C=Cr(u.default,u.update);C==="none"?e=!1:(u=n.memoizedState,n.memoizedState=null,n=t.child,bn=0,e=sp(t,n,e,b,C,u,!0),bn!==(u===null?0:u.length)&&(t.flags|=32)),(t.flags&4)!==0&&e?(bl(t,t.memoizedProps.onUpdate),Ki=l):l!==null&&(l.push.apply(l,Ki),Ki=l),Yi=(t.flags&32)!==0?!0:r;break;default:dl(e,t)}}function Pi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)l0(t,e.alternate,e),e=e.sibling}function fs(t,e){for(t=t.child;t!==null;){var n=t,r=e;switch(n.tag){case 0:case 11:case 14:case 15:hs(4,n,n.return),fs(n,r);break;case 1:Xa(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&Zv(n,n.return,l),fs(n,r);break;case 27:(r&2)!==0&&mb(n.stateNode,n.type,n.memoizedProps);case 5:Xa(n,n.return),n.tag!==5&&n.tag!==27||Ac(n),fs(n,r);break;case 6:Ac(n);break;case 26:Xa(n,n.return),l=n.stateNode,n.memoizedState!==null||l===null||je||l.parentNode.removeChild(l),fs(n,r);break;case 22:n.memoizedState===null&&fs(n,r);break;case 30:Xa(n,n.return),fs(n,r);break;case 7:Xa(n,n.return);default:fs(n,r)}t=t.sibling}}function wi(t,e,n){for(n=(e.subtreeFlags&8772)!==0?n:n&-2,e=e.child;e!==null;){var r=e.alternate,l=t,u=e,b=u.flags,C=(n&1)!==0;switch(u.tag){case 0:case 11:case 15:wi(l,u,n),Cc(4,u);break;case 1:if(wi(l,u,n),r=u,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(nt){Be(r,r.return,nt)}if(r=u,l=r.updateQueue,l!==null){var j=r.stateNode;try{var P=l.shared.hiddenCallbacks;if(P!==null)for(l.shared.hiddenCallbacks=null,l=0;l<P.length;l++)Bg(P[l],j)}catch(nt){Be(r,r.return,nt)}}C&&b&64&&Qv(u),Ii(u,u.return);break;case 27:(n&2)!==0&&t0(u);case 5:u.tag!==5&&u.tag!==27||Wv(u),wi(l,u,n),C&&r===null&&b&4&&Wf(u),Ii(u,u.return);break;case 6:Wv(u);break;case 26:j=u.stateNode,u.memoizedState!==null||j===null||Ua||Pp($c(j.ownerDocument),u.type,j),wi(l,u,n),C&&r===null&&b&4&&Wf(u),Ii(u,u.return);break;case 12:wi(l,u,n);break;case 31:wi(l,u,n),C&&b&4&&h0(l,u);break;case 13:wi(l,u,n),C&&b&4&&f0(l,u);break;case 22:u.memoizedState===null&&wi(l,u,n),Ii(u,u.return);break;case 30:wi(l,u,n),Ii(u,u.return);break;case 7:Ii(u,u.return);default:wi(l,u,n)}e=e.sibling}}function dp(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&hc(n))}function hp(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&hc(t))}function si(t,e,n,r){var l=(n&335544064)===n;if(e.subtreeFlags&(l?10262:10256))for(e=e.child;e!==null;)v0(t,e,n,r),e=e.sibling;else l&&r0(e)}function v0(t,e,n,r){var l=(n&335544064)===n;l&&e.alternate===null&&e.return!==null&&e.return.alternate!==null&&Td(e);var u=e.flags;switch(e.tag){case 0:case 11:case 15:si(t,e,n,r),u&2048&&Cc(9,e);break;case 1:si(t,e,n,r);break;case 3:si(t,e,n,r),l&&lp&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),u&2048&&(u=null,e.alternate!==null&&(u=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==u&&(e.refCount++,u!=null&&hc(u)));break;case 12:if(u&2048){si(t,e,n,r),u=e.stateNode;try{var b=e.memoizedProps,C=b.id,j=b.onPostCommit;typeof j=="function"&&j(C,e.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(P){Be(e,e.return,P)}}else si(t,e,n,r);break;case 31:si(t,e,n,r);break;case 13:si(t,e,n,r);break;case 23:break;case 22:b=e.stateNode,C=e.alternate,e.memoizedState!==null?(l&&C!==null&&C.memoizedState===null&&Td(C),b._visibility&2?si(t,e,n,r):Tc(t,e)):(l&&C!==null&&C.memoizedState!==null&&Td(e),b._visibility&2?si(t,e,n,r):(b._visibility|=2,hl(t,e,n,r,(e.subtreeFlags&10256)!==0||!1))),u&2048&&dp(C,e);break;case 24:si(t,e,n,r),u&2048&&hp(e.alternate,e);break;case 30:l&&(u=e.alternate,u!==null&&(Fi(u.child,!0),Fi(e.child,!0))),si(t,e,n,r);break;default:si(t,e,n,r)}}function hl(t,e,n,r,l){for(l=l&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var u=t,b=e,C=n,j=r,P=b.flags;switch(b.tag){case 0:case 11:case 15:hl(u,b,C,j,l),Cc(8,b);break;case 23:break;case 22:var nt=b.stateNode;b.memoizedState!==null?nt._visibility&2?hl(u,b,C,j,l):Tc(u,b):(nt._visibility|=2,hl(u,b,C,j,l)),l&&P&2048&&dp(b.alternate,b);break;case 24:hl(u,b,C,j,l),l&&P&2048&&hp(b.alternate,b);break;default:hl(u,b,C,j,l)}e=e.sibling}}function Tc(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,r=e,l=r.flags;switch(r.tag){case 22:Tc(n,r),l&2048&&dp(r.alternate,r);break;case 24:Tc(n,r),l&2048&&hp(r.alternate,r);break;default:Tc(n,r)}e=e.sibling}}var co=8192;function uo(t,e,n){if(t.subtreeFlags&co)for(t=t.child;t!==null;)b0(t,e,n),t=t.sibling}function b0(t,e,n){switch(t.tag){case 26:uo(t,e,n),t.flags&co&&(t.memoizedState!==null?Fw(n,xi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(e&335544128)===e&&Cb(n,t)));break;case 5:uo(t,e,n),t.flags&co&&(t=t.stateNode,(e&335544128)===e&&Cb(n,t));break;case 3:case 4:var r=xi;xi=$c(t.stateNode.containerInfo),uo(t,e,n),xi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=co,co=16777216,uo(t,e,n),co=r):uo(t,e,n));break;case 30:if((t.flags&co)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,jn===null&&(jn=new Map),jn.set(r,l)}uo(t,e,n);break;default:uo(t,e,n)}}function y0(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function zc(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];Va=r,w0(r,t)}y0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)x0(t),t=t.sibling}function x0(t){switch(t.tag){case 0:case 11:case 15:zc(t),t.flags&2048&&hs(9,t,t.return);break;case 3:zc(t);break;case 12:zc(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,jd(t)):zc(t);break;default:zc(t)}}function jd(t){var e=t.deletions;if((t.flags&16)!==0){if(e!==null)for(var n=0;n<e.length;n++){var r=e[n];Va=r,w0(r,t)}y0(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:hs(8,e,e.return),jd(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,jd(e));break;default:jd(e)}t=t.sibling}}function w0(t,e){for(;Va!==null;){var n=Va;switch(n.tag){case 0:case 11:case 15:hs(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:hc(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Va=r;else t:for(n=t;Va!==null;){r=Va;var l=r.sibling,u=r.return;if(u0(r),r===n){Va=null;break t}if(l!==null){l.return=u,Va=l;break t}Va=u}}}var Ux={getCacheForType:function(t){var e=Ga(ka),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Ga(ka).controller.signal}},Vx=typeof WeakMap=="function"?WeakMap:Map,Oe=0,qe=null,ye=null,_e=0,Le=0,Dn=null,ps=!1,fl=!1,fp=!1,Rr=0,ua=0,ms=0,ho=0,Dd=0,Rn=0,pl=0,Nc=null,xn=null,pp=!1,Rd=0,_0=0,Md=1/0,$d=null,gs=null,na=0,_i=null,fo=null,Xi=0,mp=0,gp=null,S0=null,ml=null,gl=null,vl=null,Oc=0,Ld=null;function Mn(){return(Oe&2)!==0&&_e!==0?_e&-_e:Nt.T!==null?Ap():Yl()}function k0(){if(Rn===0)if((_e&536870912)===0||ve){var t=dr;dr<<=1,(dr&3932160)===0&&(dr=262144),Rn=t}else Rn=536870912;return t=Ya.current,t!==null&&(t.flags|=32),Rn}function bl(t,e){if(e!=null){var n=t.stateNode,r=n.ref;r===null&&(r=n.ref=ib(kr(t.memoizedProps,n))),gl===null&&(gl=[]),gl.push(e.bind(null,r))}}function wn(t,e,n){(t===qe&&(Le===2||Le===9)||t.cancelPendingCommit!==null)&&(yl(t,0),vs(t,_e,Rn,!1)),Fr(t,n),((Oe&2)===0||t!==qe)&&(t===qe&&((Oe&2)===0&&(ho|=n),ua===4&&vs(t,_e,Rn,!1)),Qi(t))}function C0(t,e,n){if((Oe&6)!==0)throw Error(o(327));var r=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Qn(t,e),l=r?Kx(t,e):bp(t,e,!0),u=r;do{if(l===0){fl&&!r&&vs(t,e,0,!1);break}else{if(n=t.current.alternate,u&&!qx(n)){l=bp(t,e,!1),u=!1;continue}if(l===2){if(u=e,t.errorRecoveryDisabledLanes&u)var b=0;else b=t.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){e=b;t:{var C=t;l=Nc;var j=C.current.memoizedState.isDehydrated;if(j&&(yl(C,b).flags|=256),b=bp(C,b,!1),b!==2&&b!==6){if(fp&&!j){C.errorRecoveryDisabledLanes|=u,ho|=u,l=4;break t}u=xn,xn=l,u!==null&&(xn===null?xn=u:xn.push.apply(xn,u))}l=b}if(u=!1,l!==2)continue}}if(l===1){yl(t,0),vs(t,e,0,!0);break}t:{switch(r=t,u=l,u){case 0:case 1:throw Error(o(345));case 4:if((e&4194048)!==e&&(e&62914560)!==e)break;case 6:vs(r,e,Rn,!ps);break t;case 2:xn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((e&62914560)===e&&(l=Rd+300-$a(),10<l)){if(vs(r,e,Rn,!ps),Cn(r,0,!0)!==0)break t;Xi=e,r.timeoutHandle=Lp(A0.bind(null,r,n,xn,$d,pp,e,Rn,ho,pl,ps,u,"Throttled",-0,0),l);break t}A0(r,n,xn,$d,pp,e,Rn,ho,pl,ps,u,null,-0,0)}}break}while(!0);Qi(t)}function A0(t,e,n,r,l,u,b,C,j,P,nt,ct,I,tt){t.timeoutHandle=-1;var Rt=e.subtreeFlags,It=(u&335544064)===u;if(ct=null,(It||Rt&8192||(Rt&16785408)===16785408)&&(ct={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wn},jn=null,b0(e,u,ct),It&&(Rt=ct,It=t.containerInfo,It=(It.nodeType===9?It:It.ownerDocument).__reactViewTransition,It!=null&&(Rt.count++,Rt.waitingForViewTransition=!0,Rt=Hc.bind(Rt),It.finished.then(Rt,Rt))),Rt=(u&62914560)===u?Rd-$a():(u&4194048)===u?_0-$a():0,Rt=Gw(ct,Rt),Rt!==null)){Xi=u,t.cancelPendingCommit=Rt(R0.bind(null,t,e,u,n,r,l,b,C,j,P,nt,ct,null,I,tt)),vs(t,u,b,!P);return}R0(t,e,u,n,r,l,b,C,j,P,nt,ct)}function qx(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var l=n[r],u=l.getSnapshot;l=l.value;try{if(!ht(u(),l))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function vs(t,e,n,r){e=di(t,e),e&=~Dd,e&=~ho,t.suspendedLanes|=e,t.pingedLanes&=~e,r&&(t.warmLanes|=e),r=t.expirationTimes;for(var l=e;0<l;){var u=31-La(l),b=1<<u;r[u]=-1,l&=~b}n!==0&&Gl(t,n,e)}function Bd(){return(Oe&6)===0?(jc(0),!1):!0}function vp(){if(ye!==null){if(Le===0)var t=ye.return;else t=ye,Tr=Js=null,Cf(t),rl=null,mc=0,t=ye;for(;t!==null;)Xv(t.alternate,t),t=t.return;ye=null}}function yl(t,e){var n=t.timeoutHandle;return n!==-1&&(t.timeoutHandle=-1,hw(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Xi=0,vp(),qe=t,ye=n=Ar(t.current,null),_e=e,Le=0,Dn=null,ps=!1,fl=Qn(t,e),fp=!1,pl=Rn=Dd=ho=ms=ua=0,xn=Nc=null,pp=!1,Rr=di(t,e),Gu(),n}function E0(t,e){he=null,Nt.H=vd,e===il||e===nd?(e=Rg(),Le=3):e===hf?(e=Rg(),Le=4):Le=e===Uf?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,Dn=e,ye===null&&(ua=1,bd(t,ai(e,t.current)))}function T0(){var t=Ya.current;return t===null?!0:(_e&4194048)===_e?nn===null:(_e&62914560)===_e||(_e&536870912)!==0?t===nn:!1}function z0(){var t=Nt.H;return Nt.H=vd,t===null?vd:t}function N0(){var t=Nt.A;return Nt.A=Ux,t}function Hd(){ua=4,ps||(_e&4194048)!==_e&&Ya.current!==null||(fl=!0),(ms&134217727)===0&&(ho&134217727)===0||qe===null||vs(qe,_e,Rn,!1)}function bp(t,e,n){var r=Oe;Oe|=2;var l=z0(),u=N0();(qe!==t||_e!==e)&&($d=null,yl(t,e)),e=!1;var b=ua;t:do try{if(Le!==0&&ye!==null){var C=ye,j=Dn;switch(Le){case 8:vp(),b=6;break t;case 3:case 2:case 9:case 6:Ya.current===null&&(e=!0);var P=Le;if(Le=0,Dn=null,xl(t,C,j,P),n&&fl){b=0;break t}break;default:P=Le,Le=0,Dn=null,xl(t,C,j,P)}}Ix(),b=ua;break}catch(nt){E0(t,nt)}while(!0);return e&&t.shellSuspendCounter++,Tr=Js=null,Oe=r,Nt.H=l,Nt.A=u,ye===null&&(qe=null,_e=0,Gu()),b}function Ix(){for(;ye!==null;)O0(ye)}function Kx(t,e){var n=Oe;Oe|=2;var r=z0(),l=N0();qe!==t||_e!==e?($d=null,Md=$a()+500,yl(t,e)):fl=Qn(t,e);t:do try{if(Le!==0&&ye!==null){e=ye;var u=Dn;e:switch(Le){case 1:Le=0,Dn=null,xl(t,e,u,1);break;case 2:case 9:if(jg(u)){Le=0,Dn=null,j0(e);break}e=function(){Le!==2&&Le!==9||qe!==t||(Le=7),Qi(t)},u.then(e,e);break t;case 3:Le=7;break t;case 4:Le=5;break t;case 7:jg(u)?(Le=0,Dn=null,j0(e)):(Le=0,Dn=null,xl(t,e,u,7));break;case 5:var b=null;switch(ye.tag){case 26:b=ye.memoizedState;case 5:case 27:var C=ye;if(b?Sb(b):C.stateNode.complete){Le=0,Dn=null;var j=C.sibling;if(j!==null)ye=j;else{var P=C.return;P!==null?(ye=P,Ud(P)):ye=null}break e}}Le=0,Dn=null,xl(t,e,u,5);break;case 6:Le=0,Dn=null,xl(t,e,u,6);break;case 8:vp(),ua=6;break t;default:throw Error(o(462))}}Fx();break}catch(nt){E0(t,nt)}while(!0);return Tr=Js=null,Nt.H=r,Nt.A=l,Oe=n,ye!==null?0:(qe=null,_e=0,Gu(),ua)}function Fx(){for(;ye!==null&&!Bs();)O0(ye)}function O0(t){var e=Yv(t.alternate,t,Rr);t.memoizedProps=t.pendingProps,e===null?Ud(t):ye=e}function j0(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=Uv(n,e,e.pendingProps,e.type,void 0,_e);break;case 11:e=Uv(n,e,e.pendingProps,e.type.render,e.ref,_e);break;case 5:Cf(e);var r=e;r===Ha&&(ve?(Wu(r),r.tag===5&&r.stateNode!=null&&(Ke=r.stateNode)):(Wu(r),ve=!0));default:Xv(n,e),e=ye=wg(e,Rr),e=Yv(n,e,Rr)}t.memoizedProps=t.pendingProps,e===null?Ud(t):ye=e}function xl(t,e,n,r){Tr=Js=null,Cf(e),rl=null,mc=0;var l=e.return;try{if(jx(t,l,e,n,_e)){ua=1,bd(t,ai(n,t.current)),ye=null;return}}catch(u){if(l!==null)throw ye=l,u;ua=1,bd(t,ai(n,t.current)),ye=null;return}e.flags&32768?(ve||r===1?t=!0:fl||(_e&536870912)!==0?t=!1:(ps=t=!0,(r===2||r===9||r===3||r===6)&&(r=Ya.current,r!==null&&r.tag===13&&(r.flags|=16384))),D0(e,t)):Ud(e)}function Ud(t){var e=t;do{if((e.flags&32768)!==0){D0(e,ps);return}t=e.return;var n=$x(e.alternate,e,Rr);if(n!==null){ye=n;return}if(e=e.sibling,e!==null){ye=e;return}ye=e=t}while(e!==null);ua===0&&(ua=5)}function D0(t,e){do{var n=Lx(t.alternate,t);if(n!==null){n.flags&=32767,ye=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){ye=t;return}ye=t=n}while(t!==null);ua=6,ye=null}function R0(t,e,n,r,l,u,b,C,j,P,nt,ct){t.cancelPendingCommit=null;do Vd();while(na!==0);if((Oe&6)!==0)throw Error(o(327));if(e!==null){if(e===t.current)throw Error(o(177));t===qe&&(ye=qe=null,_e=0),fo=e,_i=t,Xi=n,gp=l,S0=r,Gx(t,e,n,b,C,j,ct)}}function Gx(t,e,n,r,l,u,b){var C=e.lanes|e.childLanes;if(mp=C,C|=Wh,pr(t,n,C,r,l,u),gl=null,(n&335544064)===n?(vl=xx(t),r=10262):(vl=null,r=10256),(e.subtreeFlags&r)!==0||(e.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,Wx(Kr,function(){return _p(),null})):(t.callbackNode=null,t.callbackPriority=0),Ad=!1,r=(e.flags&13878)!==0,(e.subtreeFlags&13878)!==0||r){r=Nt.T,Nt.T=null,l=Ct.p,Ct.p=2,u=Oe,Oe|=4;try{Bx(t,e,n)}finally{Oe=u,Ct.p=l,Nt.T=r}}na=1,Ad?ml=bw(b,t.containerInfo,vl,yp,xp,Px,wp,_p,Yx):(yp(),xp(),wp())}function Yx(t){if(na!==0){var e=_i.onRecoverableError;e(t,{componentStack:null})}}function Px(){na===3&&(na=0,g0(fo,_i),na=4)}function yp(){if(na===1){na=0;var t=_i,e=fo,n=Xi,r=(e.flags&13878)!==0;if((e.subtreeFlags&13878)!==0||r){r=Nt.T,Nt.T=null;var l=Ct.p;Ct.p=2;var u=Oe;Oe|=4;try{Ec=zd=!1,p0(e,t,n),n=Rp;var b=Vt(t.containerInfo),C=n.focusedElem,j=n.selectionRange;if(b!==C&&C&&C.ownerDocument&&zt(C.ownerDocument.documentElement,C)){if(j!==null&&wt(C)){var P=j.start,nt=j.end;if(nt===void 0&&(nt=P),"selectionStart"in C)C.selectionStart=P,C.selectionEnd=Math.min(nt,C.value.length);else{var ct=C.ownerDocument||document,I=ct&&ct.defaultView||window;if(I.getSelection){var tt=I.getSelection(),Rt=C.textContent.length,It=Math.min(j.start,Rt),fe=j.end===void 0?It:Math.min(j.end,Rt);!tt.extend&&It>fe&&(b=fe,fe=It,It=b);var Y=Ht(C,It),M=Ht(C,fe);if(Y&&M&&(tt.rangeCount!==1||tt.anchorNode!==Y.node||tt.anchorOffset!==Y.offset||tt.focusNode!==M.node||tt.focusOffset!==M.offset)){var Z=ct.createRange();Z.setStart(Y.node,Y.offset),tt.removeAllRanges(),It>fe?(tt.addRange(Z),tt.extend(M.node,M.offset)):(Z.setEnd(M.node,M.offset),tt.addRange(Z))}}}}for(ct=[],tt=C;tt=tt.parentNode;)tt.nodeType===1&&ct.push({element:tt,left:tt.scrollLeft,top:tt.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<ct.length;C++){var lt=ct[C];lt.element.scrollLeft=lt.left,lt.element.scrollTop=lt.top}}Tl=!!Dp,Rp=Dp=null}finally{Oe=u,Ct.p=l,Nt.T=r}}t.current=e,na=2}}function xp(){if(na===2){na=0;var t=_i,e=fo,n=(e.flags&8772)!==0;if((e.subtreeFlags&8772)!==0||n){n=Nt.T,Nt.T=null;var r=Ct.p;Ct.p=2;var l=Oe;Oe|=4;try{l0(t,e.alternate,e)}finally{Oe=l,Ct.p=r,Nt.T=n}}na=3}}function wp(){if(na===4||na===3){na=0;var t=ml;ml=null,cr();var e=_i,n=fo,r=Xi,l=S0,u=(r&335544064)===r?10262:10256;if((n.subtreeFlags&u)!==0||(n.flags&u)!==0?na=5:(na=0,fo=_i=null,M0(e,e.pendingLanes)),u=e.pendingLanes,u===0&&(gs=null),An(r),n=n.stateNode,xa&&typeof xa.onCommitFiberRoot=="function")try{xa.onCommitFiberRoot(Pn,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=Nt.T,u=Ct.p,Ct.p=2,Nt.T=null;try{for(var b=e.onRecoverableError,C=0;C<l.length;C++){var j=l[C];b(j.value,{componentStack:j.stack})}}finally{Nt.T=n,Ct.p=u}}if(l=gl,b=vl,vl=null,l!==null&&(gl=null,b===null&&(b=[]),t!==null))for(j=0;j<l.length;j++)n=(0,l[j])(b),n!==void 0&&t.finished.finally(n);(Xi&3)!==0&&Vd(),Qi(e),u=e.pendingLanes,(r&261930)!==0&&(u&42)!==0?e===Ld?Oc++:(Oc=0,Ld=e):(Oc=0,Ld=null),jc(0)}}function M0(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,hc(e)))}function Vd(){return ml!==null&&(ml.skipTransition(),ml=null),yp(),xp(),wp(),_p()}function _p(){if(na!==5)return!1;var t=_i,e=mp;mp=0;var n=An(Xi),r=Nt.T,l=Ct.p;try{Ct.p=32>n?32:n,Nt.T=null,n=gp,gp=null;var u=_i,b=Xi;if(na=0,fo=_i=null,Xi=0,(Oe&6)!==0)throw Error(o(331));var C=Oe;if(Oe|=4,x0(u.current),v0(u,u.current,b,n),Oe=C,jc(0,!1),xa&&typeof xa.onPostCommitFiberRoot=="function")try{xa.onPostCommitFiberRoot(Pn,u)}catch{}return!0}finally{Ct.p=l,Nt.T=r,M0(t,e)}}function $0(t,e,n){e=ai(n,e),e=Hf(t.stateNode,e,2),t=ls(t,e,2),t!==null&&(Fr(t,2),Qi(t))}function Be(t,e,n){if(t.tag===3)$0(t,t,n);else for(;e!==null;){if(e.tag===3){$0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(gs===null||!gs.has(r))){t=ai(n,t),n=jv(2),r=ls(e,n,2),r!==null&&(Dv(n,r,e,t),Fr(r,2),Qi(r));break}}e=e.return}}function Sp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Vx;var l=new Set;r.set(e,l)}else l=r.get(e),l===void 0&&(l=new Set,r.set(e,l));l.has(n)||(fp=!0,l.add(n),t=Xx.bind(null,t,e,n),e.then(t,t))}function Xx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,qe===t&&(_e&n)===n&&((ua===4||ua===3&&(_e&62914560)===_e&&300>$a()-Rd)&&(Oe&2)===0?yl(t,0):Dd|=n,pl===_e&&(pl=0)),Qi(t)}function L0(t,e){e===0&&(e=zu()),t=Qs(t,e),t!==null&&(Fr(t,e),Qi(t))}function Qx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),L0(t,n)}function Zx(t,e){var n=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(o(314))}r!==null&&r.delete(e),L0(t,n)}function Wx(t,e){return kn(t,e)}var wl=null,_l=null,kp=!1,qd=!1,Cp=!1,bs=0;function Qi(t){t!==_l&&t.next===null&&(_l===null?wl=_l=t:_l=_l.next=t),qd=!0,kp||(kp=!0,tw())}function jc(t,e){if(!Cp&&qd){Cp=!0;do for(var n=!1,r=wl;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var u=0;else{var b=r.suspendedLanes,C=r.pingedLanes;u=(1<<31-La(42|t)+1)-1,u&=l&~(b&~C),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(n=!0,V0(r,u))}else u=_e,u=Cn(r,r===qe?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(u&3)===0||Qn(r,u)||(n=!0,V0(r,u));r=r.next}while(n);Cp=!1}}function Jx(){B0()}function B0(){qd=kp=!1;var t=0;bs!==0&&dw()&&(t=bs);for(var e=$a(),n=null,r=wl;r!==null;){var l=r.next,u=H0(r,e);u===0?(r.next=null,n===null?wl=l:n.next=l,l===null&&(_l=n)):(n=r,(t!==0||(u&3)!==0)&&(qd=!0)),r=l}na!==0&&na!==5||jc(t),bs!==0&&(bs=0)}function H0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,u=t.pendingLanes&-62914561;0<u;){var b=31-La(u),C=1<<b,j=l[b];j===-1?((C&n)===0||(C&r)!==0)&&(l[b]=Ro(C,e)):j<=e&&(t.expiredLanes|=C),u&=~C}if(e=qe,n=_e,n=Cn(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,n===0||t===e&&(Le===2||Le===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Kt(r),t.callbackNode=null,t.callbackPriority=0;if((n&3)===0||Qn(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(r!==null&&Kt(r),An(n)){case 2:case 8:n=Fl;break;case 32:n=Kr;break;case 268435456:n=Do;break;default:n=Kr}return r=U0.bind(null,t),n=kn(n,r),t.callbackPriority=e,t.callbackNode=n,e}return r!==null&&r!==null&&Kt(r),t.callbackPriority=2,t.callbackNode=null,2}function U0(t,e){if(na!==0&&na!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(Vd()&&t.callbackNode!==n)return null;var r=_e;return r=Cn(t,t===qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(C0(t,r,e),H0(t,$a()),t.callbackNode!=null&&t.callbackNode===n?U0.bind(null,t):null)}function V0(t,e){if(Vd())return null;C0(t,e,!0)}function tw(){fw(function(){(Oe&6)!==0?kn(jo,Jx):B0()})}function Ap(){if(bs===0){var t=ao;t===0&&(t=ur,ur<<=1,(ur&261888)===0&&(ur=256)),bs=t}return bs}function q0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Mi(t)}function ew(t,e,n,r,l){if(e==="submit"&&n&&n.stateNode===l){var u=q0((l[oa]||null).action),b=r.submitter;b&&(e=(e=b[oa]||null)?q0(e.formAction):b.getAttribute("formAction"),e!==null&&(u=e,b=null));var C=new Wr("action","action",null,r,l);t.push({event:C,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(bs!==0){var j=new FormData(l,b);Rf(n,{pending:!0,data:j,method:l.method,action:u},null,j)}}else typeof u=="function"&&(C.preventDefault(),j=new FormData(l,b),Rf(n,{pending:!0,data:j,method:l.method,action:u},u,j))},currentTarget:l}]})}}for(var Ep=0;Ep<Zh.length;Ep++){var Tp=Zh[Ep],aw=Tp.toLowerCase(),nw=Tp[0].toUpperCase()+Tp.slice(1);bi(aw,"on"+nw)}bi(Zo,"onAnimationEnd"),bi(mg,"onAnimationIteration"),bi(gg,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(hx,"onTransitionRun"),bi(fx,"onTransitionStart"),bi(px,"onTransitionCancel"),bi(vg,"onTransitionEnd"),pi("onMouseEnter",["mouseout","mouseover"]),pi("onMouseLeave",["mouseout","mouseover"]),pi("onPointerEnter",["pointerout","pointerover"]),pi("onPointerLeave",["pointerout","pointerover"]),fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),iw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Dc));function I0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],l=r.event;r=r.listeners;t:{var u=void 0;if(e)for(var b=r.length-1;0<=b;b--){var C=r[b],j=C.instance,P=C.currentTarget;if(C=C.listener,j!==u&&l.isPropagationStopped())break t;u=C,l.currentTarget=P;try{u(l)}catch(nt){Fu(nt)}l.currentTarget=null,u=j}else for(b=0;b<r.length;b++){if(C=r[b],j=C.instance,P=C.currentTarget,C=C.listener,j!==u&&l.isPropagationStopped())break t;u=C,l.currentTarget=P;try{u(l)}catch(nt){Fu(nt)}l.currentTarget=null,u=j}}}}function xe(t,e){var n=e[Us];n===void 0&&(n=e[Us]=new Set);var r=t+"__bubble";n.has(r)||(K0(e,t,2,!1),n.add(r))}function zp(t,e,n){var r=0;e&&(r|=4),K0(n,t,r,e)}var Id="_reactListening"+Math.random().toString(36).slice(2);function Np(t){if(!t[Id]){t[Id]=!0,br.forEach(function(n){n!=="selectionchange"&&(iw.has(n)||zp(n,!1,t),zp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Id]||(e[Id]=!0,zp("selectionchange",!1,e))}}function K0(t,e,n,r){switch(Db(e)){case 2:var l=Qw;break;case 8:l=Zw;break;default:l=Qp}n=l.bind(null,e,n,t),l=void 0,!Vo||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(e,n,{capture:!0,passive:l}):t.addEventListener(e,n,!0):l!==void 0?t.addEventListener(e,n,{passive:l}):t.addEventListener(e,n,!1)}function Op(t,e,n,r,l){var u=r;if((e&1)===0&&(e&2)===0&&r!==null)t:for(;;){if(r===null)return;var b=r.tag;if(b===3||b===4){var C=r.stateNode.containerInfo;if(C===l)break;if(b===4)for(b=r.return;b!==null;){var j=b.tag;if((j===3||j===4)&&b.stateNode.containerInfo===l)return;b=b.return}for(;C!==null;){if(b=ji(C),b===null)return;if(j=b.tag,j===5||j===6||j===26||j===27){r=u=b;continue t}C=C.parentNode}}r=r.return}$u(function(){var P=u,nt=Qr(n),ct=[];t:{var I=bg.get(t);if(I!==void 0){var tt=Wr,Rt=t;switch(t){case"keypress":if(gi(n)===0)break t;case"keydown":case"keyup":tt=Fh;break;case"focusin":Rt="focus",tt=Xs;break;case"focusout":Rt="blur",tt=Xs;break;case"beforeblur":case"afterblur":tt=Xs;break;case"click":if(n.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":tt=tc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":tt=ec;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":tt=qu;break;case Zo:case mg:case gg:tt=Fo;break;case vg:tt=Yh;break;case"scroll":case"scrollend":tt=Ys;break;case"wheel":tt=Xh;break;case"copy":case"cut":case"paste":tt=Bu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":tt=oc;break;case"submit":tt=Vu;break;case"toggle":case"beforetoggle":tt=vi}var It=(e&4)!==0,fe=!It&&(t==="scroll"||t==="scrollend"),Y=It?I!==null?I+"Capture":null:I;It=[];for(var M=P,Z;M!==null;){var lt=M;if(Z=lt.stateNode,lt=lt.tag,lt!==5&&lt!==26&&lt!==27||Z===null||Y===null||(lt=xr(M,Y),lt!=null&&It.push(Rc(M,lt,Z))),fe)break;M=M.return}0<It.length&&(I=new tt(I,Rt,null,n,nt),ct.push({event:I,listeners:It}))}}if((e&7)===0){t:{if(tt=t==="mouseover"||t==="pointerover",I=t==="mouseout"||t==="pointerout",tt&&n!==Wl&&(Rt=n.relatedTarget||n.fromElement)&&(ji(Rt)||Rt[mr]))break t;(I||tt)&&(Rt=nt.window===nt?nt:(tt=nt.ownerDocument)?tt.defaultView||tt.parentWindow:window,I?(tt=n.relatedTarget||n.toElement,I=P,tt=tt?ji(tt):null,tt!==null&&(fe=f(tt),It=tt.tag,tt!==fe||It!==5&&It!==27&&It!==6)&&(tt=null)):(I=null,tt=P),I!==tt&&(It=tc,lt="onMouseLeave",Y="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(It=oc,lt="onPointerLeave",Y="onPointerEnter",M="pointer"),fe=I==null?Rt:Yr(I),Z=tt==null?Rt:Yr(tt),Rt=new It(lt,M+"leave",I,n,nt),Rt.target=fe,Rt.relatedTarget=Z,lt=null,ji(nt)===P&&(It=new It(Y,M+"enter",tt,n,nt),It.target=Z,It.relatedTarget=fe,lt=It),fe=lt,It=I&&tt?kt(I,tt,rw):null,I!==null&&F0(ct,Rt,I,It,!1),tt!==null&&fe!==null&&F0(ct,fe,tt,It,!0)))}t:{if(I=P?Yr(P):window,tt=I.nodeName&&I.nodeName.toLowerCase(),tt==="select"||tt==="input"&&I.type==="file")var Ut=U;else if(p(I))if(Q)Ut=J;else{Ut=G;var Se=F}else tt=I.nodeName,!tt||tt.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?P&&Fs(P.elementType)&&(Ut=U):Ut=at;if(Ut&&(Ut=Ut(t,P))){y(ct,Ut,n,nt);break t}Se&&Se(t,I,P)}switch(Se=P?Yr(P):window,t){case"focusin":(p(Se)||Se.contentEditable==="true")&&(Zt=Se,re=P,de=null);break;case"focusout":de=re=Zt=null;break;case"mousedown":Fa=!0;break;case"contextmenu":case"mouseup":case"dragend":Fa=!1,se(ct,n,nt);break;case"selectionchange":if(ne)break;case"keydown":case"keyup":se(ct,n,nt)}var Pt;if(Jr)t:{switch(t){case"compositionstart":var ae="onCompositionStart";break t;case"compositionend":ae="onCompositionEnd";break t;case"compositionupdate":ae="onCompositionUpdate";break t}ae=void 0}else ln?Qo(t,n)&&(ae="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(ae="onCompositionStart");ae&&(Xo&&n.locale!=="ko"&&(ln||ae!=="onCompositionStart"?ae==="onCompositionEnd"&&ln&&(Pt=Lu()):(Nn=nt,Zr="value"in Nn?Nn.value:Nn.textContent,ln=!0)),Se=Kd(P,ae),0<Se.length&&(ae=new Go(ae,t,null,n,nt),ct.push({event:ae,listeners:Se}),Pt?ae.data=Pt:(Pt=Sr(n),Pt!==null&&(ae.data=Pt)))),(Pt=Qh?Ku(t,n):c(t,n))&&(ae=Kd(P,"onBeforeInput"),0<ae.length&&(Se=new Go("onBeforeInput","beforeinput",null,n,nt),ct.push({event:Se,listeners:ae}),Se.data=Pt)),ew(ct,t,P,n,nt)}I0(ct,e)})}function Rc(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kd(t,e){for(var n=e+"Capture",r=[];t!==null;){var l=t,u=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||u===null||(l=xr(t,n),l!=null&&r.unshift(Rc(t,l,u)),l=xr(t,e),l!=null&&r.push(Rc(t,l,u))),t.tag===3)return r;t=t.return}return[]}function rw(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function F0(t,e,n,r,l){for(var u=e._reactName,b=[];n!==null&&n!==r;){var C=n,j=C.alternate,P=C.stateNode;if(C=C.tag,j!==null&&j===r)break;C!==5&&C!==26&&C!==27||P===null||(j=P,l?(P=xr(n,u),P!=null&&b.unshift(Rc(n,P,j))):l||(P=xr(n,u),P!=null&&b.push(Rc(n,P,j)))),n=n.return}b.length!==0&&t.push({event:e,listeners:b})}var sw=/\r\n?/g,ow=/\u0000|\uFFFD/g;function G0(t){return(typeof t=="string"?t:""+t).replace(sw,`
`).replace(ow,"")}function Y0(t,e){return e=G0(e),G0(t)===e}function He(t,e,n,r,l,u){switch(n){case"children":if(typeof r=="string")e==="body"||e==="textarea"&&r===""||Ri(t,r);else if(typeof r=="number"||typeof r=="bigint")e!=="body"&&Ri(t,""+r);else return;break;case"className":Bo(t,"class",r);break;case"tabIndex":Bo(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Bo(t,n,r);break;case"style":Xr(t,r,u);return;case"data":if(e!=="object"){Bo(t,"data",r);break}case"src":case"href":if(r===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=Mi(r),t.setAttribute(n,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(n==="formAction"?(e!=="input"&&He(t,e,"name",l.name,l,null),He(t,e,"formEncType",l.formEncType,l,null),He(t,e,"formMethod",l.formMethod,l,null),He(t,e,"formTarget",l.formTarget,l,null)):(He(t,e,"encType",l.encType,l,null),He(t,e,"method",l.method,l,null),He(t,e,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(n);break}r=Mi(r),t.setAttribute(n,r);break;case"onClick":r!=null&&(t.onclick=Wn);return;case"onScroll":r!=null&&xe("scroll",t);return;case"onScrollEnd":r!=null&&xe("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(o(60));(u!=null?u.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}n=Mi(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,r):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":r===!0?t.setAttribute(n,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(n,r):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(n,r):t.removeAttribute(n);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(n):t.setAttribute(n,r);break;case"popover":xe("beforetoggle",t),xe("toggle",t),Lo(t,"popover",r);break;case"xlinkActuate":ta(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ta(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ta(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ta(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ta(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ta(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ta(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ta(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ta(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Lo(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")n=Ru.get(n)||n,Lo(t,n,r);else return}qt=!0}function jp(t,e,n,r,l,u){switch(n){case"style":Xr(t,r,u);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(o(61));if(n=r.__html,n!=null){if(l.children!=null)throw Error(o(60));(u!=null?u.__html:void 0)!==n&&(t.innerHTML=n)}}break;case"children":if(typeof r=="string")Ri(t,r);else if(typeof r=="number"||typeof r=="bigint")Ri(t,""+r);else return;break;case"onScroll":r!=null&&xe("scroll",t);return;case"onScrollEnd":r!=null&&xe("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Wn);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!$o.hasOwnProperty(n))t:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),u=n.slice(2,l?n.length-7:void 0),e=t[oa]||null,e=e!=null?e[n]:null,typeof e=="function"&&t.removeEventListener(u,e,l),typeof r=="function")){typeof e!="function"&&e!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(u,r,l);break t}qt=!0,n in t?t[n]=r:r===!0?t.setAttribute(n,""):Lo(t,n,r)}return}qt=!0}function Qa(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",t),xe("load",t);var r=!1,l=!1,u;for(u in n)if(n.hasOwnProperty(u)){var b=n[u];if(b!=null)switch(u){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:He(t,e,u,b,n,null)}}l&&He(t,e,"srcSet",n.srcSet,n,null),r&&He(t,e,"src",n.src,n,null);return;case"input":xe("invalid",t);var C=u=b=l=null,j=null,P=null;for(r in n)if(n.hasOwnProperty(r)){var nt=n[r];if(nt!=null)switch(r){case"name":l=nt;break;case"type":b=nt;break;case"checked":j=nt;break;case"defaultChecked":P=nt;break;case"value":u=nt;break;case"defaultValue":C=nt;break;case"children":case"dangerouslySetInnerHTML":if(nt!=null)throw Error(o(137,e));break;default:He(t,e,r,nt,n,null)}}Is(t,u,C,j,P,b,l,!1);return;case"select":xe("invalid",t),r=b=u=null;for(l in n)if(n.hasOwnProperty(l)&&(C=n[l],C!=null))switch(l){case"value":u=C;break;case"defaultValue":b=C;break;case"multiple":r=C;default:He(t,e,l,C,n,null)}e=u,n=b,t.multiple=!!r,e!=null?on(t,!!r,e,!1):n!=null&&on(t,!!r,n,!0);return;case"textarea":xe("invalid",t),u=l=r=null;for(b in n)if(n.hasOwnProperty(b)&&(C=n[b],C!=null))switch(b){case"value":r=C;break;case"defaultValue":l=C;break;case"children":u=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(o(91));break;default:He(t,e,b,C,n,null)}Tn(t,r,l,u);return;case"option":for(j in n)if(n.hasOwnProperty(j)&&(r=n[j],r!=null))switch(j){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:He(t,e,j,r,n,null)}return;case"dialog":xe("beforetoggle",t),xe("toggle",t),xe("cancel",t),xe("close",t);break;case"iframe":case"object":xe("load",t);break;case"video":case"audio":for(r=0;r<Dc.length;r++)xe(Dc[r],t);break;case"image":xe("error",t),xe("load",t);break;case"details":xe("toggle",t);break;case"embed":case"source":case"link":xe("error",t),xe("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in n)if(n.hasOwnProperty(P)&&(r=n[P],r!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,e));default:He(t,e,P,r,n,null)}return;default:if(Fs(e)){for(nt in n)n.hasOwnProperty(nt)&&(r=n[nt],r!==void 0&&jp(t,e,nt,r,n,void 0));return}}for(C in n)n.hasOwnProperty(C)&&(r=n[C],r!=null&&He(t,e,C,r,n,null))}var lw={};function cw(t,e,n,r){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,u=null,b=null,C=null,j=null,P=null,nt=null;for(tt in n){var ct=n[tt];if(n.hasOwnProperty(tt)&&ct!=null)switch(tt){case"checked":break;case"value":break;case"defaultValue":j=ct;default:r.hasOwnProperty(tt)||He(t,e,tt,null,r,ct)}}for(var I in r){var tt=r[I];if(ct=n[I],r.hasOwnProperty(I)&&(tt!=null||ct!=null))switch(I){case"type":tt!==ct&&(qt=!0),u=tt;break;case"name":tt!==ct&&(qt=!0),l=tt;break;case"checked":tt!==ct&&(qt=!0),P=tt;break;case"defaultChecked":tt!==ct&&(qt=!0),nt=tt;break;case"value":tt!==ct&&(qt=!0),b=tt;break;case"defaultValue":tt!==ct&&(qt=!0),C=tt;break;case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(o(137,e));break;default:tt!==ct&&He(t,e,I,tt,r,ct)}}yr(t,b,C,j,P,nt,u,l);return;case"select":tt=b=C=I=null;for(u in n)if(j=n[u],n.hasOwnProperty(u)&&j!=null)switch(u){case"value":break;case"multiple":tt=j;default:r.hasOwnProperty(u)||He(t,e,u,null,r,j)}for(l in r)if(u=r[l],j=n[l],r.hasOwnProperty(l)&&(u!=null||j!=null))switch(l){case"value":u!==j&&(qt=!0),I=u;break;case"defaultValue":u!==j&&(qt=!0),C=u;break;case"multiple":u!==j&&(qt=!0),b=u;default:u!==j&&He(t,e,l,u,r,j)}e=C,n=b,r=tt,I!=null?on(t,!!n,I,!1):!!r!=!!n&&(e!=null?on(t,!!n,e,!0):on(t,!!n,n?[]:"",!1));return;case"textarea":tt=I=null;for(C in n)if(l=n[C],n.hasOwnProperty(C)&&l!=null&&!r.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:He(t,e,C,null,r,l)}for(b in r)if(l=r[b],u=n[b],r.hasOwnProperty(b)&&(l!=null||u!=null))switch(b){case"value":l!==u&&(qt=!0),I=l;break;case"defaultValue":l!==u&&(qt=!0),tt=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(o(91));break;default:l!==u&&He(t,e,b,l,r,u)}ju(t,I,tt);return;case"option":for(var Rt in n)if(I=n[Rt],n.hasOwnProperty(Rt)&&I!=null&&!r.hasOwnProperty(Rt))switch(Rt){case"selected":t.selected=!1;break;default:He(t,e,Rt,null,r,I)}for(j in r)if(I=r[j],tt=n[j],r.hasOwnProperty(j)&&I!==tt&&(I!=null||tt!=null))switch(j){case"selected":I!==tt&&(qt=!0),t.selected=I&&typeof I!="function"&&typeof I!="symbol";break;default:He(t,e,j,I,r,tt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var It in n)I=n[It],n.hasOwnProperty(It)&&I!=null&&!r.hasOwnProperty(It)&&He(t,e,It,null,r,I);for(P in r)if(I=r[P],tt=n[P],r.hasOwnProperty(P)&&I!==tt&&(I!=null||tt!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(o(137,e));break;default:He(t,e,P,I,r,tt)}return;default:if(Fs(e)){for(var fe in n)I=n[fe],n.hasOwnProperty(fe)&&I!==void 0&&!r.hasOwnProperty(fe)&&jp(t,e,fe,void 0,r,I);for(nt in r)I=r[nt],tt=n[nt],!r.hasOwnProperty(nt)||I===tt||I===void 0&&tt===void 0||jp(t,e,nt,I,r,tt);return}}for(var Y in n)I=n[Y],n.hasOwnProperty(Y)&&I!=null&&!r.hasOwnProperty(Y)&&He(t,e,Y,null,r,I);for(ct in r)I=r[ct],tt=n[ct],!r.hasOwnProperty(ct)||I===tt||I==null&&tt==null||He(t,e,ct,I,r,tt)}function P0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function uw(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),r=0;r<n.length;r++){var l=n[r],u=l.transferSize,b=l.initiatorType,C=l.duration;if(u&&C&&P0(b)){for(b=0,C=l.responseEnd,r+=1;r<n.length;r++){var j=n[r],P=j.startTime;if(P>C)break;var nt=j.transferSize,ct=j.initiatorType;nt&&P0(ct)&&(j=j.responseEnd,b+=nt*(j<C?1:(C-P)/(j-P)))}if(--r,e+=8*(u+b)/(l.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Dp=null,Rp=null;function Mc(t){return t.nodeType===9?t:t.ownerDocument}function X0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Q0(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function Z0(t,e,n,r){return n=Mc(n).createElement(t),n[ga]=r,n[oa]=e,Qa(n,t,e),Pe(n),n}function Mp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $p=null;function dw(){var t=window.event;return t&&t.type==="popstate"?t===$p?!1:($p=t,!0):($p=null,!1)}var Lp=typeof setTimeout=="function"?setTimeout:void 0,hw=typeof clearTimeout=="function"?clearTimeout:void 0,W0=typeof Promise=="function"?Promise:void 0,J0=typeof requestAnimationFrame=="function"?requestAnimationFrame:Lp,fw=typeof queueMicrotask=="function"?queueMicrotask:typeof W0<"u"?function(t){return W0.resolve(null).then(t).catch(pw)}:Lp;function pw(t){setTimeout(function(){throw t})}function ys(t){return t==="head"}function tb(t,e){var n=e,r=0;do{var l=n.nextSibling;if(t.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(r===0){t.removeChild(l),zl(e);return}r--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")r++;else if(n==="html")Fp(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Fp(n);for(var u=n.firstChild;u;){var b=u.nextSibling,C=u.nodeName;u[Gr]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&u.rel.toLowerCase()==="stylesheet"||n.removeChild(u),u=b}}else n==="body"&&Fp(t.ownerDocument.body);n=l}while(n);zl(e)}function eb(t,e){var n=t;t=0;do{var r=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=r}while(n)}function ab(t,e,n){if(e=CSS.escape(e)!==e?"r-"+btoa(e).replace(/=/g,""):e,t.style.viewTransitionName=e,n!=null&&(t.style.viewTransitionClass=n),n=getComputedStyle(t),n.display==="inline"){if(e=t.getClientRects(),e.length===1)var r=1;else for(var l=r=0;l<e.length;l++){var u=e[l];0<u.width&&0<u.height&&r++}r===1&&(t=t.style,t.display=e.length===1?"inline-block":"block",t.marginTop="-"+n.paddingTop,t.marginBottom="-"+n.paddingBottom)}}function nb(t,e){t=t.style,e=e.style;var n=e!=null?e.hasOwnProperty("viewTransitionName")?e.viewTransitionName:e.hasOwnProperty("view-transition-name")?e["view-transition-name"]:null:null;t.viewTransitionName=n==null||typeof n=="boolean"?"":(""+n).trim(),n=e!=null?e.hasOwnProperty("viewTransitionClass")?e.viewTransitionClass:e.hasOwnProperty("view-transition-class")?e["view-transition-class"]:null:null,t.viewTransitionClass=n==null||typeof n=="boolean"?"":(""+n).trim(),t.display==="inline-block"&&(e==null?t.display=t.margin="":(n=e.display,t.display=n==null||typeof n=="boolean"?"":n,n=e.margin,n!=null?t.margin=n:(n=e.hasOwnProperty("marginTop")?e.marginTop:e["margin-top"],t.marginTop=n==null||typeof n=="boolean"?"":n,e=e.hasOwnProperty("marginBottom")?e.marginBottom:e["margin-bottom"],t.marginBottom=e==null||typeof e=="boolean"?"":e)))}function mw(t,e,n){return n=n.ownerDocument.defaultView,{rect:t,abs:e.position==="absolute"||e.position==="fixed",clip:e.clipPath!=="none"||e.overflow!=="visible"||e.filter!=="none"||e.mask!=="none"||e.mask!=="none"||e.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=n.innerHeight&&t.left<=n.innerWidth}}function Bp(t){var e=t.getBoundingClientRect(),n=getComputedStyle(t);return mw(e,n,t)}function gw(t){return t.documentElement.clientHeight}function vw(t){this.addEventListener("load",t),this.addEventListener("error",t)}function bw(t,e,n,r,l,u,b,C,j){var P=e.nodeType===9?e:e.ownerDocument;try{var nt=P.startViewTransition({update:function(){var I=P.defaultView,tt=I.navigation&&I.navigation.transition,Rt=P.fonts.status;r();var It=[];if(Rt==="loaded"&&(gw(P),P.fonts.status==="loading"&&It.push(P.fonts.ready)),Rt=It.length,t!==null)for(var fe=t.suspenseyImages,Y=0,M=0;M<fe.length;M++){var Z=fe[M];if(!Z.complete){var lt=Z.getBoundingClientRect();if(0<lt.bottom&&0<lt.right&&lt.top<I.innerHeight&&lt.left<I.innerWidth){if(Y+=kb(Z),Y>Yd){It.length=Rt;break}Z=new Promise(vw.bind(Z)),It.push(Z)}}}if(0<It.length)return I=Promise.race([Promise.all(It),new Promise(function(Ut){return setTimeout(Ut,500)})]).then(l,l),(tt?Promise.allSettled([tt.finished,I]):I).then(u,u);if(l(),tt)return tt.finished.then(u,u);u()},types:n});P.__reactViewTransition=nt;var ct=[];return nt.ready.then(function(){for(var I=P.documentElement.getAnimations({subtree:!0}),tt=0;tt<I.length;tt++){var Rt=I[tt],It=Rt.effect,fe=It.pseudoElement;if(fe!=null&&fe.startsWith("::view-transition")){ct.push(Rt),Rt=It.getKeyframes();for(var Y=fe=void 0,M=!0,Z=0;Z<Rt.length;Z++){var lt=Rt[Z],Ut=lt.width;if(fe===void 0)fe=Ut;else if(fe!==Ut){M=!1;break}if(Ut=lt.height,Y===void 0)Y=Ut;else if(Y!==Ut){M=!1;break}delete lt.width,delete lt.height,lt.transform==="none"&&delete lt.transform}M&&fe!==void 0&&Y!==void 0&&(It.setKeyframes(Rt),M=getComputedStyle(It.target,It.pseudoElement),M.width!==fe||M.height!==Y)&&(M=Rt[0],M.width=fe,M.height=Y,M=Rt[Rt.length-1],M.width=fe,M.height=Y,It.setKeyframes(Rt))}}b()},function(I){P.__reactViewTransition===nt&&(P.__reactViewTransition=null);try{if(typeof I=="object"&&I!==null)switch(I.name){case"InvalidStateError":(I.message==="View transition was skipped because document visibility state is hidden."||I.message==="Skipping view transition because document visibility state has become hidden."||I.message==="Skipping view transition because viewport size changed."||I.message==="Transition was aborted because of invalid state")&&(I=null)}I!==null&&j(I)}finally{r(),l(),b()}}),nt.finished.finally(function(){for(var I=0;I<ct.length;I++)ct[I].cancel();P.__reactViewTransition===nt&&(P.__reactViewTransition=null),C()}),nt}catch{return r(),l(),b(),null}}function po(t,e){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+e+")"}po.prototype.animate=function(t,e){return e=typeof e=="number"?{duration:e}:yt({},e),e.pseudoElement=this._selector,this._scope.animate(t,e)},po.prototype.getAnimations=function(){for(var t=this._scope,e=this._selector,n=t.getAnimations({subtree:!0}),r=[],l=0;l<n.length;l++){var u=n[l].effect;u!==null&&u.target===t&&u.pseudoElement===e&&r.push(n[l])}return r},po.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function ib(t){return{name:t,group:new po("group",t),imagePair:new po("image-pair",t),old:new po("old",t),new:new po("new",t)}}function $n(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}$n.prototype.addEventListener=function(t,e,n){var r=null,l=null;if(!(n!=null&&typeof n!="boolean"&&(r=n.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(sb(u,t,e,n)===-1){var b=this,C=e;n!=null&&typeof n!="boolean"&&n.once===!0&&(C=function(j){b.removeEventListener(t,e,n),typeof e=="function"?e.call(this,j):e.handleEvent(j)}),r!==null&&(l=b.removeEventListener.bind(b,t,e,n),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Sl(n),u.push({type:t,listener:e,optionsOrUseCapture:n,attachedListener:C,cleanup:l}),_(this._fragmentFiber.child,!1,yw,t,C,r)}this._eventListeners=u}};function yw(t,e,n,r){return mt(t).addEventListener(e,n,r),!1}$n.prototype.removeEventListener=function(t,e,n){var r=this._eventListeners;if(r!==null&&(e=sb(r,t,e,n),e!==-1)){var l=r[e];n=l.attachedListener;var u=l.cleanup;l=Sl(l.optionsOrUseCapture),_(this._fragmentFiber.child,!1,xw,t,n,l),r.splice(e,1),u!==null&&u()}};function xw(t,e,n,r){return mt(t).removeEventListener(e,n,r),!1}function Sl(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function rb(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function sb(t,e,n,r){if(t.length===0)return-1;r=rb(r);for(var l=0;l<t.length;l++){var u=t[l];if(u.type===e&&u.listener===n&&rb(u.optionsOrUseCapture)===r)return l}return-1}$n.prototype.dispatchEvent=function(t){var e=T(this._fragmentFiber);if(e===null)return!0;e=mt(e);var n=this._eventListeners;if(n!==null&&0<n.length||!t.bubbles){var r=e.nodeType===9?e.createComment(""):document.createTextNode("");if(n)for(var l=0;l<n.length;l++){var u=n[l];r.addEventListener(u.type,u.attachedListener,Sl(u.optionsOrUseCapture))}if(e.appendChild(r),t=r.dispatchEvent(t),n)for(l=0;l<n.length;l++)u=n[l],r.removeEventListener(u.type,u.attachedListener,Sl(u.optionsOrUseCapture));return e.removeChild(r),t}return e.dispatchEvent(t)},$n.prototype.focus=function(t){_(this._fragmentFiber.child,!0,ob,t,void 0,void 0)};function ob(t,e){return t.tag===6?!1:(t=mt(t),jw(t,e))}$n.prototype.focusLast=function(t){var e=[];_(this._fragmentFiber.child,!0,Hp,e,void 0,void 0);for(var n=e.length-1;0<=n&&!ob(e[n],t);n--);};function Hp(t,e){return e.push(t),!1}$n.prototype.blur=function(){var t=T(this._fragmentFiber);t!==null&&(t=mt(t),t=Mc(t).activeElement,t!==null&&_(this._fragmentFiber.child,!1,ww,t,void 0,void 0))};function ww(t,e){return t.tag===6?!1:(t=mt(t),t===e||t.contains(e)?(e.blur(),!0):!1)}$n.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),_(this._fragmentFiber.child,!1,_w,t,void 0,void 0)};function _w(t,e){return t.tag===6||(t=mt(t),e.observe(t)),!1}$n.prototype.unobserveUsing=function(t){var e=this._observers;if(e!==null&&e.has(t)){e.delete(t),_(this._fragmentFiber.child,!1,Sw,t,void 0,void 0);for(var n=e=0;n<Si.length;n++){var r=Si[n];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Si[e++]=r}Si.length=e}};function Sw(t,e){return t.tag===6||(t=mt(t),e.unobserve(t)),!1}var Si=[],Up=!1;function kw(t,e,n){Si.push({fragmentInstance:t,observer:e,instance:n}),Up||(Up=!0,Dw(function(){Up=!1;var r=Si;Si=[];for(var l=0;l<r.length;l++){var u=r[l];u.observer.unobserve(u.instance)}}))}$n.prototype.getClientRects=function(){var t=[];return _(this._fragmentFiber.child,!1,Cw,t,void 0,void 0),t};function Cw(t,e){if(t.tag===6){t=t.stateNode;var n=t.ownerDocument.createRange();n.selectNodeContents(t),e.push.apply(e,n.getClientRects())}else t=mt(t),e.push.apply(e,t.getClientRects());return!1}$n.prototype.getRootNode=function(t){var e=T(this._fragmentFiber);return e===null?this:mt(e).getRootNode(t)},$n.prototype.compareDocumentPosition=function(t){var e=T(this._fragmentFiber);if(e===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var n=[];_(this._fragmentFiber.child,!1,Hp,n,void 0,void 0);var r=mt(e);if(n.length===0){if(n=r,D(this._fragmentFiber)){t:{for(e=this._fragmentFiber.return;e!==null;){if(e.tag===4){e=e.stateNode.containerInfo;break t}if(e.tag===3||e.tag===5||e.tag===27)break;e=e.return}e=null}e!=null&&(n=e)}e=this._fragmentFiber;var l=r=n.compareDocumentPosition(t);return n===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(n=R(e)[1],n===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=mt(n).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}e=mt(n[0]),l=mt(n[n.length-1]);var u=D(this._fragmentFiber)?e.parentElement:r;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=u.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var b=e.compareDocumentPosition(t),C=l.compareDocumentPosition(t),j=b&Node.DOCUMENT_POSITION_CONTAINED_BY||C&Node.DOCUMENT_POSITION_CONTAINED_BY;return C=r&&u&&b&Node.DOCUMENT_POSITION_FOLLOWING&&C&Node.DOCUMENT_POSITION_PRECEDING,e=r&&e===t||u&&l===t||j||C?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&e===t||!u&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:b,e&Node.DOCUMENT_POSITION_DISCONNECTED||e&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Aw(e,this._fragmentFiber,n[0],n[n.length-1],t)?e:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Aw(t,e,n,r,l){var u=ji(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(n=!!u)t:{for(;u!==null;){if(u.tag===7&&(u===e||u.alternate===e)){n=!0;break t}u=u.return}n=!1}return n}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=l.ownerDocument,l===u||l===u.documentElement||l===u.body;t:{for(u=e,e=T(e);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==e&&u.alternate!==e)){u=!0;break t}u=u.return}u=!1}return u}return t&Node.DOCUMENT_POSITION_PRECEDING?((e=!!u)&&!(e=u===n)&&(e=kt(n,u,dt),e===null?e=!1:(_(e,!0,St,u,n),u=Ot,Ot=null,e=u!==null)),e):t&Node.DOCUMENT_POSITION_FOLLOWING?((e=!!u)&&!(e=u===r)&&(e=kt(r,u,dt),e===null?e=!1:(_(e,!0,rt,u,r),u=Ot,ut=Ot=null,e=u!==null)),e):!1}function lb(t,e){var n=t.ownerDocument.createRange();n.selectNodeContents(t),t=n.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,e?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}$n.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(o(566));var e=[];_(this._fragmentFiber.child,!1,Hp,e,void 0,void 0);var n=t!==!1;if(e.length===0){var r=R(this._fragmentFiber);if(r=n?r[1]||r[0]||T(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=mt(r),lb(t,n);return}if(r=mt(r),r.nodeType!==9){if(r.nodeType===11){n="host"in r?r.host:null,n!==null&&n.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=n?e.length-1:0;r!==(n?-1:e.length);){var l=e[r];l.tag===6?(l=mt(l),lb(l,n)):mt(l).scrollIntoView(t),r+=n?-1:1}};function Ew(t,e){return t=mt(t),cb(t,e),!1}function cb(t,e){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(e)}function ub(t,e){var n=e._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];t.addEventListener(l.type,l.attachedListener,Sl(l.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(u){for(var b=0,C=0;C<Si.length;C++){var j=Si[C];(j.fragmentInstance!==e||j.observer!==u||j.instance!==t)&&(Si[b++]=j)}Si.length=b,u.observe(t)}),cb(t,e))}function Tw(t,e){var n=e._eventListeners;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];t.removeEventListener(l.type,l.attachedListener,Sl(l.optionsOrUseCapture))}t.nodeType!==3&&(n=e._observers,n!==null&&n.forEach(function(u){typeof u.rootMargin=="string"?kw(e,u,t):u.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(e))}function Vp(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Vp(n),Oi(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function zw(t,e,n,r){for(;t.nodeType===1;){var l=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Gr])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(u=t.getAttribute("rel"),u==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(u!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(u=t.getAttribute("src"),(u!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&u&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var u=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===u)return t}else return t;if(t=oi(t.nextSibling),t===null)break}return null}function Nw(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=oi(t.nextSibling),t===null))return null;return t}function db(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=oi(t.nextSibling),t===null))return null;return t}function qp(t){return t.data==="$?"||t.data==="$~"}function Ip(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ow(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var r=function(){e(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Kp=null;function hb(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return oi(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function fb(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function jw(t,e){function n(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",n,!0),(t.focus||HTMLElement.prototype.focus).call(t,e)}finally{t.ownerDocument.removeEventListener("focus",n,!0)}return r}function Dw(t){J0(function(){J0(function(e){return t(e)})})}function pb(t,e,n){switch(e=Mc(n),t){case"html":if(t=e.documentElement,!t)throw Error(o(452));return t;case"head":if(t=e.head,!t)throw Error(o(453));return t;case"body":if(t=e.body,!t)throw Error(o(454));return t;default:throw Error(o(451))}}function mb(t,e,n){for(var r in n){var l=n[r];n.hasOwnProperty(r)&&l!=null&&He(t,e,r,null,lw,l)}n.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Wn&&(t.onclick=null),Oi(t)}function Fp(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);Oi(t)}var li=new Map,gb=new Set;function $c(t){if(typeof t.getRootNode=="function"){var e=t.getRootNode();if(e.nodeType===9||e.nodeType===11)return e}return t.nodeType===9?t:t.ownerDocument}var Mr=Ct.d;Ct.d={f:Rw,r:Mw,D:$w,C:Lw,L:Bw,m:Hw,X:Vw,S:Uw,M:qw};function Rw(){var t=Mr.f(),e=Bd();return t||e}function Mw(t){var e=vr(t);e!==null&&e.tag===5&&e.type==="form"?bv(e):Mr.r(t)}var kl=typeof document>"u"?null:document;function vb(t,e,n){var r=kl;if(r&&typeof e=="string"&&e){var l=Xe(e);l='link[rel="'+t+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),gb.has(l)||(gb.add(l),t={rel:t,crossOrigin:n,href:e},r.querySelector(l)===null&&(e=r.createElement("link"),Qa(e,"link",t),Pe(e),r.head.appendChild(e)))}}function $w(t){Mr.D(t),vb("dns-prefetch",t,null)}function Lw(t,e){Mr.C(t,e),vb("preconnect",t,e)}function Bw(t,e,n){Mr.L(t,e,n);var r=kl;if(r&&t&&e){var l='link[rel="preload"][as="'+Xe(e)+'"]';e==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+Xe(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+Xe(n.imageSizes)+'"]')):l+='[href="'+Xe(t)+'"]';var u=l;switch(e){case"style":u=Cl(t);break;case"script":u=Al(t)}if(!(li.has(u)||(t=yt({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),li.set(u,t),r.querySelector(l)!==null||e==="style"&&r.querySelector(Lc(u))||e==="script"&&r.querySelector(Bc(u))))){var b=r.createElement("link");Qa(b,"link",t),e==="style"&&(b[gr]=!0,b.onload=b.onerror=function(){Pr(b)}),Pe(b),r.head.appendChild(b)}}}function Hw(t,e){Mr.m(t,e);var n=kl;if(n&&t){var r=e&&typeof e.as=="string"?e.as:"script",l='link[rel="modulepreload"][as="'+Xe(r)+'"][href="'+Xe(t)+'"]',u=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Al(t)}if(!li.has(u)&&(t=yt({rel:"modulepreload",href:t},e),li.set(u,t),n.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Bc(u)))return}r=n.createElement("link"),Qa(r,"link",t),Pe(r),n.head.appendChild(r)}}}function Uw(t,e,n){Mr.S(t,e,n);var r=kl;if(r&&t){var l=Te(r).hoistableStyles,u=Cl(t);e=e||"default";var b=l.get(u);if(!b){var C={loading:0,preload:null};if(b=r.querySelector(Lc(u)))C.loading=5;else{t=yt({rel:"stylesheet",href:t,"data-precedence":e},n),(n=li.get(u))&&Gp(t,n);var j=b=r.createElement("link");Pe(j),Qa(j,"link",t),j._p=new Promise(function(P,nt){j.onload=P,j.onerror=nt}),j.addEventListener("load",function(){C.loading|=1}),j.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Fd(b,e,r)}b={type:"stylesheet",instance:b,count:1,state:C},l.set(u,b)}}}function Vw(t,e){Mr.X(t,e);var n=kl;if(n&&t){var r=Te(n).hoistableScripts,l=Al(t),u=r.get(l);u||(u=n.querySelector(Bc(l)),u||(t=yt({src:t,async:!0},e),(e=li.get(l))&&Yp(t,e),u=n.createElement("script"),Pe(u),Qa(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function qw(t,e){Mr.M(t,e);var n=kl;if(n&&t){var r=Te(n).hoistableScripts,l=Al(t),u=r.get(l);u||(u=n.querySelector(Bc(l)),u||(t=yt({src:t,async:!0,type:"module"},e),(e=li.get(l))&&Yp(t,e),u=n.createElement("script"),Pe(u),Qa(u,"link",t),n.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},r.set(l,u))}}function bb(t,e,n,r){var l=(l=Na.current)?$c(l):null;if(!l)throw Error(o(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(n=Cl(n.href),e=Te(l).hoistableStyles,r=e.get(n),r||(r={type:"style",instance:null,count:0,state:null},e.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=Cl(n.href);var u=Te(l).hoistableStyles,b=u.get(t);if(b||(l=l.ownerDocument||l,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(t,b),(u=l.querySelector(Lc(t)))?u._p||(b.instance=u,b.state.loading=5):(u=li.get(t),u||(u={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},li.set(t,u)),Iw(l,t,u,b.state))),e&&r===null)throw Error(o(528,""));return b}if(e&&r!==null)throw Error(o(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(n=Al(n),e=Te(l).hoistableScripts,r=e.get(n),r||(r={type:"script",instance:null,count:0,state:null},e.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,t))}}function Cl(t){return'href="'+Xe(t)+'"'}function Lc(t){return'link[rel="stylesheet"]['+t+"]"}function yb(t){return yt({},t,{"data-precedence":t.precedence,precedence:null})}function Iw(t,e,n,r){if(e=t.querySelector('link[rel="preload"][as="style"]['+e+"]")){if(e[gr]!==!0){r.loading=1;return}}else e=t.createElement("link"),e[gr]=!0,e.onload=e.onerror=Pr.bind(null,e),Qa(e,"link",n),Pe(e),t.head.appendChild(e);r.preload=e,e.addEventListener("load",function(){return r.loading|=1}),e.addEventListener("error",function(){return r.loading|=2})}function Al(t){return'[src="'+Xe(t)+'"]'}function Bc(t){return"script[async]"+t}function xb(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var r=t.querySelector('style[data-href~="'+Xe(n.href)+'"]');if(r)return e.instance=r,Pe(r),r;var l=yt({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Pe(r),Qa(r,"style",l),Fd(r,n.precedence,t),e.instance=r;case"stylesheet":l=Cl(n.href);var u=t.querySelector(Lc(l));if(u)return e.state.loading|=4,e.instance=u,Pe(u),u;r=yb(n),(l=li.get(l))&&Gp(r,l),u=(t.ownerDocument||t).createElement("link"),Pe(u);var b=u;return b._p=new Promise(function(C,j){b.onload=C,b.onerror=j}),Qa(u,"link",r),e.state.loading|=4,Fd(u,n.precedence,t),e.instance=u;case"script":return u=Al(n.src),(l=t.querySelector(Bc(u)))?(e.instance=l,Pe(l),l):(r=n,(l=li.get(u))&&(r=yt({},n),Yp(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Pe(l),Qa(l,"link",r),t.head.appendChild(l),e.instance=l);case"void":return null;default:throw Error(o(443,e.type))}else e.type==="stylesheet"&&(e.state.loading&4)===0&&(r=e.instance,e.state.loading|=4,Fd(r,n.precedence,t));return e.instance}function Fd(t,e,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,u=l,b=0;b<r.length;b++){var C=r[b];if(C.dataset.precedence===e)u=C;else if(u!==l)break}u?u.parentNode.insertBefore(t,u.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function Gp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function Yp(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var Gd=null;function wb(t,e,n){if(Gd===null){var r=new Map,l=Gd=new Map;l.set(n,r)}else l=Gd,r=l.get(n),r||(r=new Map,l.set(n,r));if(r.has(t))return r;for(r.set(t,null),n=n.getElementsByTagName(t),l=0;l<n.length;l++){var u=n[l];if(!(u[Gr]||u[ga]||t==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var b=u.getAttribute(e)||"";b=t+b;var C=r.get(b);C?C.push(u):r.set(b,[u])}}return r}function Pp(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function Kw(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function _b(t,e){return t==="img"&&e.src!=null&&e.src!==""&&e.onLoad==null&&e.loading!=="lazy"}function Sb(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function kb(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Cb(t,e){typeof e.decode=="function"&&(t.imgCount++,e.complete||(t.imgBytes+=kb(e),t.suspenseyImages.push(e)),t=Yw.bind(t),e.decode().then(t,t))}function Fw(t,e,n,r){if(n.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Cl(r.href),u=e.querySelector(Lc(l));if(u){e=u._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Hc.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=u,Pe(u);return}u=e.ownerDocument||e,r=yb(r),(l=li.get(l))&&Gp(r,l),u=u.createElement("link"),Pe(u);var b=u;b._p=new Promise(function(C,j){b.onload=C,b.onerror=j}),Qa(u,"link",r),n.instance=u}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&(n.state.loading&3)===0&&(t.count++,n=Hc.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Yd=0;function Gw(t,e){return t.stylesheets&&t.count===0&&Xd(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var r=setTimeout(function(){if(t.stylesheets&&Xd(t,t.stylesheets),t.unsuspend){var u=t.unsuspend;t.unsuspend=null,u()}},6e4+e);0<t.imgBytes&&Yd===0&&(Yd=62500*uw());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xd(t,t.stylesheets),t.unsuspend)){var u=t.unsuspend;t.unsuspend=null,u()}},(t.imgBytes>Yd?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function Ab(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Xd(t,t.stylesheets);else if(t.unsuspend){var e=t.unsuspend;t.unsuspend=null,e()}}}function Hc(){this.count--,Ab(this)}function Yw(){this.imgCount--,Ab(this)}var Pd=null;function Xd(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pd=new Map,e.forEach(Pw,t),Pd=null,Hc.call(t))}function Pw(t,e){if(!(e.state.loading&4)){var n=Pd.get(t);if(n)var r=n.get(null);else{n=new Map,Pd.set(t,n);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<l.length;u++){var b=l[u];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(n.set(b.dataset.precedence,b),r=b)}r&&n.set(null,r)}l=e.instance,b=l.getAttribute("data-precedence"),u=n.get(b)||r,u===r&&n.set(null,l),n.set(b,l),this.count++,r=Hc.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),u?u.parentNode.insertBefore(l,u.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),e.state.loading|=4}}var El={$$typeof:ge,Provider:null,Consumer:null,_currentValue:we,_currentValue2:we,_threadCount:0};function Xw(t,e,n,r,l,u,b,C,j){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zn(0),this.hiddenUpdates=Zn(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=u,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.transitionTypes=null,this.incompleteTransitions=new Map}function Eb(t,e,n,r,l,u,b,C,j,P,nt,ct){return t=new Xw(t,e,n,b,j,P,nt,ct,C),e=1,u===!0&&(e|=24),u=vn(3,null,null,e),t.current=u,u.stateNode=t,e=cf(),e.refCount++,t.pooledCache=e,e.refCount++,u.memoizedState={element:r,isDehydrated:n,cache:e},ff(u),t}function Tb(t){return t?(t=Jo,t):Jo}function zb(t,e,n,r,l,u){l=Tb(l),r.context===null?r.context=l:r.pendingContext=l,r=os(e),r.payload={element:n},u=u===void 0?null:u,u!==null&&(r.callback=u),n=ls(t,r,e),n!==null&&(wn(n,t,e),gc(n,t,e))}function Nb(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xp(t,e){Nb(t,e),(t=t.alternate)&&Nb(t,e)}function Ob(t){if(t.tag===13||t.tag===31){var e=Qs(t,67108864);e!==null&&wn(e,t,67108864),Xp(t,67108864)}}function jb(t){if(t.tag===13||t.tag===31){var e=Mn();e=hi(e);var n=Qs(t,e);n!==null&&wn(n,t,e),Xp(t,e)}}var Tl=!0;function Qw(t,e,n,r){var l=Nt.T;Nt.T=null;var u=Ct.p;try{Ct.p=2,Qp(t,e,n,r)}finally{Ct.p=u,Nt.T=l}}function Zw(t,e,n,r){var l=Nt.T;Nt.T=null;var u=Ct.p;try{Ct.p=8,Qp(t,e,n,r)}finally{Ct.p=u,Nt.T=l}}function Qp(t,e,n,r){if(Tl){var l=Zp(r);if(l===null)Op(t,e,r,Qd,n),Rb(t,r);else if(Jw(l,t,e,n,r))r.stopPropagation();else if(Rb(t,r),e&4&&-1<Ww.indexOf(t)){for(;l!==null;){var u=vr(l);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var b=fr(u.pendingLanes);if(b!==0){var C=u;for(C.pendingLanes|=2,C.entangledLanes|=2;b;){var j=1<<31-La(b);C.entanglements[1]|=j,b&=~j}Qi(u),(Oe&6)===0&&(Md=$a()+500,jc(0))}}break;case 31:case 13:C=Qs(u,2),C!==null&&wn(C,u,2),Bd(),Xp(u,2)}if(u=Zp(r),u===null&&Op(t,e,r,Qd,n),u===l)break;l=u}l!==null&&r.stopPropagation()}else Op(t,e,r,null,n)}}function Zp(t){return t=Qr(t),Wp(t)}var Qd=null;function Wp(t){if(Qd=null,t=ji(t),t!==null){var e=f(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=g(e),t!==null)return t;t=null}else if(n===31){if(t=x(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return Qd=t,null}function Db(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Lt()){case jo:return 2;case Fl:return 8;case Kr:case Tu:return 32;case Do:return 268435456;default:return 32}default:return 32}}var Jp=!1,xs=null,ws=null,_s=null,Uc=new Map,Vc=new Map,Ss=[],Ww="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rb(t,e){switch(t){case"focusin":case"focusout":xs=null;break;case"dragenter":case"dragleave":ws=null;break;case"mouseover":case"mouseout":_s=null;break;case"pointerover":case"pointerout":Uc.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vc.delete(e.pointerId)}}function qc(t,e,n,r,l,u){return t===null||t.nativeEvent!==u?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:u,targetContainers:[l]},e!==null&&(e=vr(e),e!==null&&Ob(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,l!==null&&e.indexOf(l)===-1&&e.push(l),t)}function Jw(t,e,n,r,l){switch(e){case"focusin":return xs=qc(xs,t,e,n,r,l),!0;case"dragenter":return ws=qc(ws,t,e,n,r,l),!0;case"mouseover":return _s=qc(_s,t,e,n,r,l),!0;case"pointerover":var u=l.pointerId;return Uc.set(u,qc(Uc.get(u)||null,t,e,n,r,l)),!0;case"gotpointercapture":return u=l.pointerId,Vc.set(u,qc(Vc.get(u)||null,t,e,n,r,l)),!0}return!1}function Mb(t){var e=ji(t.target);if(e!==null){var n=f(e);if(n!==null){if(e=n.tag,e===13){if(e=g(n),e!==null){t.blockedOn=e,Hs(t.priority,function(){jb(n)});return}}else if(e===31){if(e=x(n),e!==null){t.blockedOn=e,Hs(t.priority,function(){jb(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zd(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zp(t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Wl=r,n.target.dispatchEvent(r),Wl=null}else return e=vr(n),e!==null&&Ob(e),t.blockedOn=n,!1;e.shift()}return!0}function $b(t,e,n){Zd(t)&&n.delete(e)}function t_(){Jp=!1,xs!==null&&Zd(xs)&&(xs=null),ws!==null&&Zd(ws)&&(ws=null),_s!==null&&Zd(_s)&&(_s=null),Uc.forEach($b),Vc.forEach($b)}function Wd(t,e){t.blockedOn===e&&(t.blockedOn=null,Jp||(Jp=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,t_)))}var Jd=null;function Lb(t){Jd!==t&&(Jd=t,a.unstable_scheduleCallback(a.unstable_NormalPriority,function(){Jd===t&&(Jd=null);for(var e=0;e<t.length;e+=3){var n=t[e],r=t[e+1],l=t[e+2];if(typeof r!="function"){if(Wp(r||n)===null)continue;break}var u=vr(n);u!==null&&(t.splice(e,3),e-=3,Rf(u,{pending:!0,data:l,method:n.method,action:r},r,l))}}))}function zl(t){function e(j){return Wd(j,t)}xs!==null&&Wd(xs,t),ws!==null&&Wd(ws,t),_s!==null&&Wd(_s,t),Uc.forEach(e),Vc.forEach(e);for(var n=0;n<Ss.length;n++){var r=Ss[n];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ss.length&&(n=Ss[0],n.blockedOn===null);)Mb(n),n.blockedOn===null&&Ss.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var l=n[r],u=n[r+1],b=l[oa]||null;if(typeof u=="function")b||Lb(n);else if(b){var C=null;if(u&&u.hasAttribute("formAction")){if(l=u,b=u[oa]||null)C=b.formAction;else if(Wp(l)!==null)continue}else C=b.action;typeof C=="function"?n[r+1]=C:(n.splice(r,3),r-=3),Lb(n)}}}function Bb(){function t(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(b){return l=b})},focusReset:"manual",scroll:"manual"})}function e(){l!==null&&(l(),l=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),l!==null&&(l(),l=null)}}}function tm(t){this._internalRoot=t}th.prototype.render=tm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(o(409));var n=e.current,r=Mn();zb(n,r,t,e,null,null)},th.prototype.unmount=tm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;zb(t.current,2,null,t,null,null),Bd(),e[mr]=null}};function th(t){this._internalRoot=t}th.prototype.unstable_scheduleHydration=function(t){if(t){var e=Yl();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ss.length&&e!==0&&e<Ss[n].priority;n++);Ss.splice(n,0,t),n===0&&Mb(t)}};var Hb=i.version;if(Hb!=="19.3.0")throw Error(o(527,Hb,"19.3.0"));Ct.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(o(188)):(t=Object.keys(t).join(","),Error(o(268,t)));return t=E(e),t=t!==null?N(t):null,t=t===null?null:t.stateNode,t};var e_={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:Nt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eh=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eh.isDisabled&&eh.supportsFiber)try{Pn=eh.inject(e_),xa=eh}catch{}}return Kc.createRoot=function(t,e){if(!d(t))throw Error(o(299));var n=!1,r="",l=Tv,u=zv,b=Nv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onUncaughtError!==void 0&&(l=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(b=e.onRecoverableError)),e=Eb(t,1,!1,null,null,n,r,null,l,u,b,Bb),t[mr]=e.current,Np(t),new tm(e)},Kc.hydrateRoot=function(t,e,n){if(!d(t))throw Error(o(299));var r=!1,l="",u=Tv,b=zv,C=Nv,j=null;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(b=n.onCaughtError),n.onRecoverableError!==void 0&&(C=n.onRecoverableError),n.formState!==void 0&&(j=n.formState)),e=Eb(t,1,!0,e,n??null,r,l,j,u,b,C,Bb),e.context=Tb(null),n=e.current,r=Mn(),r=hi(r),l=os(r),l.callback=null,ls(n,l,r),n=r,e.current.lanes=n,Fr(e,n),Qi(e),t[mr]=e.current,Np(t),new th(e)},Kc.version="19.3.0",Kc}var Xb;function v_(){if(Xb)return nm.exports;Xb=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(i){console.error(i)}}return a(),nm.exports=g_(),nm.exports}var b_=v_(),uh={exports:{}},y_=uh.exports,Qb;function x_(){return Qb||(Qb=1,(function(a,i){((s,o)=>{a.exports=o()})(y_,function(){var s=function(c,h){return(s=Object.setPrototypeOf||({__proto__:[]}instanceof Array?function(p,y){p.__proto__=y}:function(p,y){for(var w in y)Object.prototype.hasOwnProperty.call(y,w)&&(p[w]=y[w])}))(c,h)},o=function(){return(o=Object.assign||function(c){for(var h,p=1,y=arguments.length;p<y;p++)for(var w in h=arguments[p])Object.prototype.hasOwnProperty.call(h,w)&&(c[w]=h[w]);return c}).apply(this,arguments)};function d(c,h,p){for(var y,w=0,k=h.length;w<k;w++)!y&&w in h||((y=y||Array.prototype.slice.call(h,0,w))[w]=h[w]);return c.concat(y||Array.prototype.slice.call(h))}var f=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:s_,g=Object.keys,x=Array.isArray;function S(c,h){return typeof h=="object"&&g(h).forEach(function(p){c[p]=h[p]}),c}typeof Promise>"u"||f.Promise||(f.Promise=Promise);var E=Object.getPrototypeOf,N={}.hasOwnProperty;function _(c,h){return N.call(c,h)}function T(c,h){typeof h=="function"&&(h=h(E(c))),(typeof Reflect>"u"?g:Reflect.ownKeys)(h).forEach(function(p){R(c,p,h[p])})}var D=Object.defineProperty;function R(c,h,p,y){D(c,h,S(p&&_(p,"get")&&typeof p.get=="function"?{get:p.get,set:p.set,configurable:!0}:{value:p,configurable:!0,writable:!0},y))}function W(c){return{from:function(h){return c.prototype=Object.create(h.prototype),R(c.prototype,"constructor",c),{extend:T.bind(null,c.prototype)}}}}var mt=Object.getOwnPropertyDescriptor,Ot=[].slice;function ut(c,h,p){return Ot.call(c,h,p)}function St(c,h){return h(c)}function rt(c){if(!c)throw new Error("Assertion Failed")}function dt(c){f.setImmediate?setImmediate(c):setTimeout(c,0)}function kt(c,h){if(typeof h=="string"&&_(c,h))return c[h];if(!h)return c;if(typeof h!="string"){for(var p=[],y=0,w=h.length;y<w;++y){var k=kt(c,h[y]);p.push(k)}return p}var z,O=h.indexOf(".");return O===-1||(z=c[h.substr(0,O)])==null?void 0:kt(z,h.substr(O+1))}function yt(c,h,p){if(c&&h!==void 0&&!("isFrozen"in Object&&Object.isFrozen(c)))if(typeof h!="string"&&"length"in h){rt(typeof p!="string"&&"length"in p);for(var y=0,w=h.length;y<w;++y)yt(c,h[y],p[y])}else{var k=h.indexOf(".");if(k!==-1){var z=h.substr(0,k),k=h.substr(k+1);if(k==="")p===void 0?x(c)&&!isNaN(parseInt(z))?c.splice(z,1):delete c[z]:c[z]=p;else{var O=c[z];if(!O||!_(c,z)){if(p===void 0)return;O=c[z]={}}yt(O,k,p)}}else p===void 0?x(c)&&!isNaN(parseInt(h))?c.splice(h,1):delete c[h]:c[h]=p}}function pt(c){var h,p={};for(h in c)_(c,h)&&(p[h]=c[h]);return p}var it=[].concat;function ft(c){return it.apply([],c)}var ma="BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ft([8,16,32,64].map(function(c){return["Int","Uint","Float"].map(function(h){return h+c+"Array"})}))).filter(function(c){return f[c]}),ee=new Set(ma.map(function(c){return f[c]})),le=null;function pe(c){return le=new WeakMap,c=(function h(p){if(!p||typeof p!="object")return p;var y=le.get(p);if(y)return y;if(x(p)){y=[],le.set(p,y);for(var w=0,k=p.length;w<k;++w)y.push(h(p[w]))}else if(ee.has(p.constructor))y=p;else{var z,O=E(p);for(z in y=O===Object.prototype?{}:Object.create(O),le.set(p,y),p)_(p,z)&&(y[z]=h(p[z]))}return y})(c),le=null,c}var $e={}.toString;function ge(c){return $e.call(c).slice(8,-1)}var Et=typeof Symbol<"u"?Symbol.iterator:"@@iterator",Yt=typeof Et=="symbol"?function(c){var h;return c!=null&&(h=c[Et])&&h.apply(c)}:function(){return null};function Bt(c,h){h=c.indexOf(h),0<=h&&c.splice(h,1)}var ie={};function jt(c){var h,p,y,w;if(arguments.length===1){if(x(c))return c.slice();if(this===ie&&typeof c=="string")return[c];if(w=Yt(c))for(p=[];!(y=w.next()).done;)p.push(y.value);else{if(c==null)return[c];if(typeof(h=c.length)!="number")return[c];for(p=new Array(h);h--;)p[h]=c[h]}}else for(h=arguments.length,p=new Array(h);h--;)p[h]=arguments[h];return p}var Ge=typeof Symbol<"u"?function(c){return c[Symbol.toStringTag]==="AsyncFunction"}:function(){return!1},ma=["Unknown","Constraint","Data","TransactionInactive","ReadOnly","Version","NotFound","InvalidState","InvalidAccess","Abort","Timeout","QuotaExceeded","Syntax","DataClone"],Ma=["Modify","Bulk","OpenFailed","VersionChange","Schema","Upgrade","InvalidTable","MissingAPI","NoSuchDatabase","InvalidArgument","SubTransaction","Unsupported","Internal","DatabaseClosed","PrematureCommit","ForeignAwait"].concat(ma),Gn={VersionChanged:"Database version changed by other database connection",DatabaseClosed:"Database has been closed",Abort:"Transaction aborted",TransactionInactive:"Transaction has already completed or failed",MissingAPI:"IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb"};function L(c,h){this.name=c,this.message=h}function xt(c,h){return c+". Errors: "+Object.keys(h).map(function(p){return h[p].toString()}).filter(function(p,y,w){return w.indexOf(p)===y}).join(`
`)}function H(c,h,p,y){this.failures=h,this.failedKeys=y,this.successCount=p,this.message=xt(c,h)}function ot(c,h){this.name="BulkError",this.failures=Object.keys(h).map(function(p){return h[p]}),this.failuresByPos=h,this.message=xt(c,this.failures)}W(L).from(Error).extend({toString:function(){return this.name+": "+this.message}}),W(H).from(L),W(ot).from(L);var vt=Ma.reduce(function(c,h){return c[h]=h+"Error",c},{}),Mt=L,gt=Ma.reduce(function(c,h){var p=h+"Error";function y(w,k){this.name=p,w?typeof w=="string"?(this.message="".concat(w).concat(k?`
 `+k:""),this.inner=k||null):typeof w=="object"&&(this.message="".concat(w.name," ").concat(w.message),this.inner=w):(this.message=Gn[h]||p,this.inner=null)}return W(y).from(Mt),c[h]=y,c},{}),Nt=(gt.Syntax=SyntaxError,gt.Type=TypeError,gt.Range=RangeError,ma.reduce(function(c,h){return c[h+"Error"]=gt[h],c},{}));ma=Ma.reduce(function(c,h){return["Syntax","Type","Range"].indexOf(h)===-1&&(c[h+"Error"]=gt[h]),c},{});function Ct(){}function we(c){return c}function ba(c,h){return c==null||c===we?h:function(p){return h(c(p))}}function ya(c,h){return function(){c.apply(this,arguments),h.apply(this,arguments)}}function an(c,h){return c===Ct?h:function(){var p=c.apply(this,arguments),y=(p!==void 0&&(arguments[0]=p),this.onsuccess),w=this.onerror,k=(this.onsuccess=null,this.onerror=null,h.apply(this,arguments));return y&&(this.onsuccess=this.onsuccess?ya(y,this.onsuccess):y),w&&(this.onerror=this.onerror?ya(w,this.onerror):w),k!==void 0?k:p}}function sa(c,h){return c===Ct?h:function(){c.apply(this,arguments);var p=this.onsuccess,y=this.onerror;this.onsuccess=this.onerror=null,h.apply(this,arguments),p&&(this.onsuccess=this.onsuccess?ya(p,this.onsuccess):p),y&&(this.onerror=this.onerror?ya(y,this.onerror):y)}}function ce(c,h){return c===Ct?h:function(){var p=c.apply(this,arguments),y=(S(arguments[0],p),this.onsuccess),w=this.onerror,k=(this.onsuccess=null,this.onerror=null,h.apply(this,arguments));return y&&(this.onsuccess=this.onsuccess?ya(y,this.onsuccess):y),w&&(this.onerror=this.onerror?ya(w,this.onerror):w),p===void 0?k===void 0?void 0:k:S(p,k)}}function Yn(c,h){return c===Ct?h:function(){return h.apply(this,arguments)!==!1&&c.apply(this,arguments)}}function rr(c,h){return c===Ct?h:function(){var p=c.apply(this,arguments);if(p&&typeof p.then=="function"){for(var y=this,w=arguments.length,k=new Array(w);w--;)k[w]=arguments[w];return p.then(function(){return h.apply(y,k)})}return h.apply(this,arguments)}}ma.ModifyError=H,ma.DexieError=L,ma.BulkError=ot;var Na=typeof location<"u"&&/^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);function Rs(c){Na=c}var Ni={},sr=100,or=typeof Promise>"u"?[]:(Ma=Promise.resolve(),typeof crypto<"u"&&crypto.subtle?[or=crypto.subtle.digest("SHA-512",new Uint8Array([0])),E(or),Ma]:[Ma,E(Ma),Ma]),Ma=or[0],ti=or[1],ti=ti&&ti.then,ui=Ma&&Ma.constructor,Oo=!!or[2],gn=function(c,h){Bs.push([c,h]),Ir&&(queueMicrotask(Hh),Ir=!1)},Ms=!0,Ir=!0,lr=[],$s=[],Ls=we,kn={id:"global",global:!0,ref:0,unhandleds:[],onunhandled:Ct,pgp:!1,env:{},finalize:Ct},Kt=kn,Bs=[],cr=0,$a=[];function Lt(c){if(typeof this!="object")throw new TypeError("Promises must be constructed via new");this._listeners=[],this._lib=!1;var h=this._PSD=Kt;if(typeof c!="function"){if(c!==Ni)throw new TypeError("Not a function");this._state=arguments[1],this._value=arguments[2],this._state===!1&&Kr(this,this._value)}else this._state=null,this._value=null,++h.ref,(function p(y,w){try{w(function(k){if(y._state===null){if(k===y)throw new TypeError("A promise cannot be resolved with itself.");var z=y._lib&&Pn();k&&typeof k.then=="function"?p(y,function(O,U){k instanceof Lt?k._then(O,U):k.then(O,U)}):(y._state=!0,y._value=k,Tu(y)),z&&xa()}},Kr.bind(null,y))}catch(k){Kr(y,k)}})(this,c)}var jo={get:function(){var c=Kt,h=hr;function p(y,w){var k=this,z=!c.global&&(c!==Kt||h!==hr),O=z&&!di(),U=new Lt(function(Q,q){Do(k,new Fl(Gl(y,c,z,O),Gl(w,c,z,O),Q,q,c))});return this._consoleTask&&(U._consoleTask=this._consoleTask),U}return p.prototype=Ni,p},set:function(c){R(this,"then",c&&c.prototype===Ni?jo:{get:function(){return c},set:jo.set})}};function Fl(c,h,p,y,w){this.onFulfilled=typeof c=="function"?c:null,this.onRejected=typeof h=="function"?h:null,this.resolve=p,this.reject=y,this.psd=w}function Kr(c,h){var p,y;$s.push(h),c._state===null&&(p=c._lib&&Pn(),h=Ls(h),c._state=!1,c._value=h,y=c,lr.some(function(w){return w._value===y._value})||lr.push(y),Tu(c),p)&&xa()}function Tu(c){var h=c._listeners;c._listeners=[];for(var p=0,y=h.length;p<y;++p)Do(c,h[p]);var w=c._PSD;--w.ref||w.finalize(),cr===0&&(++cr,gn(function(){--cr==0&&Xn()},[]))}function Do(c,h){if(c._state===null)c._listeners.push(h);else{var p=c._state?h.onFulfilled:h.onRejected;if(p===null)return(c._state?h.resolve:h.reject)(c._value);++h.psd.ref,++cr,gn(Bh,[p,c,h])}}function Bh(c,h,p){try{var y,w=h._value;!h._state&&$s.length&&($s=[]),y=Na&&h._consoleTask?h._consoleTask.run(function(){return c(w)}):c(w),h._state||$s.indexOf(w)!==-1||(k=>{for(var z=lr.length;z;)if(lr[--z]._value===k._value)return lr.splice(z,1)})(h),p.resolve(y)}catch(k){p.reject(k)}finally{--cr==0&&Xn(),--p.psd.ref||p.psd.finalize()}}function Hh(){pr(kn,function(){Pn()&&xa()})}function Pn(){var c=Ms;return Ir=Ms=!1,c}function xa(){var c,h,p;do for(;0<Bs.length;)for(c=Bs,Bs=[],p=c.length,h=0;h<p;++h){var y=c[h];y[0].apply(null,y[1])}while(0<Bs.length);Ir=Ms=!0}function Xn(){for(var c=lr,h=(lr=[],c.forEach(function(y){y._PSD.onunhandled.call(null,y._value,y)}),$a.slice(0)),p=h.length;p;)h[--p]()}function La(c){return new Lt(Ni,!1,c)}function Ie(c,h){var p=Kt;return function(){var y=Pn(),w=Kt;try{return Zn(p,!0),c.apply(this,arguments)}catch(k){h&&h(k)}finally{Zn(w,!1),y&&xa()}}}T(Lt.prototype,{then:jo,_then:function(c,h){Do(this,new Fl(null,null,c,h,Kt))},catch:function(c){var h,p;return arguments.length===1?this.then(null,c):(h=c,p=arguments[1],typeof h=="function"?this.then(null,function(y){return(y instanceof h?p:La)(y)}):this.then(null,function(y){return(y&&y.name===h?p:La)(y)}))},finally:function(c){return this.then(function(h){return Lt.resolve(c()).then(function(){return h})},function(h){return Lt.resolve(c()).then(function(){return La(h)})})},timeout:function(c,h){var p=this;return c<1/0?new Lt(function(y,w){var k=setTimeout(function(){return w(new gt.Timeout(h))},c);p.then(y,w).finally(clearTimeout.bind(null,k))}):this}}),typeof Symbol<"u"&&Symbol.toStringTag&&R(Lt.prototype,Symbol.toStringTag,"Dexie.Promise"),kn.env=Fr(),T(Lt,{all:function(){var c=jt.apply(null,arguments).map(Ro);return new Lt(function(h,p){c.length===0&&h([]);var y=c.length;c.forEach(function(w,k){return Lt.resolve(w).then(function(z){c[k]=z,--y||h(c)},p)})})},resolve:function(c){return c instanceof Lt?c:c&&typeof c.then=="function"?new Lt(function(h,p){c.then(h,p)}):new Lt(Ni,!0,c)},reject:La,race:function(){var c=jt.apply(null,arguments).map(Ro);return new Lt(function(h,p){c.map(function(y){return Lt.resolve(y).then(h,p)})})},PSD:{get:function(){return Kt},set:function(c){return Kt=c}},totalEchoes:{get:function(){return hr}},newPSD:Cn,usePSD:pr,scheduler:{get:function(){return gn},set:function(c){gn=c}},rejectionMapper:{get:function(){return Ls},set:function(c){Ls=c}},follow:function(c,h){return new Lt(function(p,y){return Cn(function(w,k){var z=Kt;z.unhandleds=[],z.onunhandled=k,z.finalize=ya(function(){var O,U=this;O=function(){U.unhandleds.length===0?w():k(U.unhandleds[0])},$a.push(function Q(){O(),$a.splice($a.indexOf(Q),1)}),++cr,gn(function(){--cr==0&&Xn()},[])},z.finalize),c()},h,p,y)})}}),ui&&(ui.allSettled&&R(Lt,"allSettled",function(){var c=jt.apply(null,arguments).map(Ro);return new Lt(function(h){c.length===0&&h([]);var p=c.length,y=new Array(p);c.forEach(function(w,k){return Lt.resolve(w).then(function(z){return y[k]={status:"fulfilled",value:z}},function(z){return y[k]={status:"rejected",reason:z}}).then(function(){return--p||h(y)})})})}),ui.any&&typeof AggregateError<"u"&&R(Lt,"any",function(){var c=jt.apply(null,arguments).map(Ro);return new Lt(function(h,p){c.length===0&&p(new AggregateError([]));var y=c.length,w=new Array(y);c.forEach(function(k,z){return Lt.resolve(k).then(function(O){return h(O)},function(O){w[z]=O,--y||p(new AggregateError(w))})})})}),ui.withResolvers)&&(Lt.withResolvers=ui.withResolvers);var wa={awaits:0,echoes:0,id:0},Uh=0,ur=[],dr=0,hr=0,fr=0;function Cn(c,z,p,y){var w=Kt,k=Object.create(w),z=(k.parent=w,k.ref=0,k.global=!1,k.id=++fr,kn.env,k.env=Oo?{Promise:Lt,PromiseProp:{value:Lt,configurable:!0,writable:!0},all:Lt.all,race:Lt.race,allSettled:Lt.allSettled,any:Lt.any,resolve:Lt.resolve,reject:Lt.reject}:{},z&&S(k,z),++w.ref,k.finalize=function(){--this.parent.ref||this.parent.finalize()},pr(k,c,p,y));return k.ref===0&&k.finalize(),z}function Qn(){return wa.id||(wa.id=++Uh),++wa.awaits,wa.echoes+=sr,wa.id}function di(){return!!wa.awaits&&(--wa.awaits==0&&(wa.id=0),wa.echoes=wa.awaits*sr,!0)}function Ro(c){return wa.echoes&&c&&c.constructor===ui?(Qn(),c.then(function(h){return di(),h},function(h){return di(),Ye(h)})):c}function zu(){var c=ur[ur.length-1];ur.pop(),Zn(c,!1)}function Zn(c,h){var p,y,w=Kt;(h?!wa.echoes||dr++&&c===Kt:!dr||--dr&&c===Kt)||queueMicrotask(h?(function(k){++hr,wa.echoes&&--wa.echoes!=0||(wa.echoes=wa.awaits=wa.id=0),ur.push(Kt),Zn(k,!0)}).bind(null,c):zu),c!==Kt&&(Kt=c,w===kn&&(kn.env=Fr()),Oo)&&(p=kn.env.Promise,y=c.env,w.global||c.global)&&(Object.defineProperty(f,"Promise",y.PromiseProp),p.all=y.all,p.race=y.race,p.resolve=y.resolve,p.reject=y.reject,y.allSettled&&(p.allSettled=y.allSettled),y.any)&&(p.any=y.any)}function Fr(){var c=f.Promise;return Oo?{Promise:c,PromiseProp:Object.getOwnPropertyDescriptor(f,"Promise"),all:c.all,race:c.race,allSettled:c.allSettled,any:c.any,resolve:c.resolve,reject:c.reject}:{}}function pr(c,h,p,y,w){var k=Kt;try{return Zn(c,!0),h(p,y,w)}finally{Zn(k,!1)}}function Gl(c,h,p,y){return typeof c!="function"?c:function(){var w=Kt;p&&Qn(),Zn(h,!0);try{return c.apply(this,arguments)}finally{Zn(w,!1),y&&queueMicrotask(di)}}}function Mo(c){Promise===ui&&wa.echoes===0?dr===0?c():enqueueNativeMicroTask(c):setTimeout(c,0)}(""+ti).indexOf("[native code]")===-1&&(Qn=di=Ct);var Ye=Lt.reject,hi="￿",An="Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.",Yl="String expected.",Hs="__dbnames",En="readonly",ga="readwrite";function oa(c,h){return c?h?function(){return c.apply(this,arguments)&&h.apply(this,arguments)}:c:h}var mr={type:3,lower:-1/0,lowerOpen:!1,upper:[[]],upperOpen:!1};function Us(c){return typeof c!="string"||/\./.test(c)?function(h){return h}:function(h){return h[c]===void 0&&c in h&&delete(h=pe(h))[c],h}}function Nu(){throw gt.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.")}function be(c,h){try{var p=Pl(c),y=Pl(h);if(p!==y)return p==="Array"?1:y==="Array"?-1:p==="binary"?1:y==="binary"?-1:p==="string"?1:y==="string"?-1:p==="Date"?1:y!=="Date"?NaN:-1;switch(p){case"number":case"Date":case"string":return h<c?1:c<h?-1:0;case"binary":for(var w=Gr(c),k=Gr(h),z=w.length,O=k.length,U=z<O?z:O,Q=0;Q<U;++Q)if(w[Q]!==k[Q])return w[Q]<k[Q]?-1:1;return z===O?0:z<O?-1:1;case"Array":for(var q=c,B=h,V=q.length,X=B.length,K=V<X?V:X,F=0;F<K;++F){var G=be(q[F],B[F]);if(G!==0)return G}return V===X?0:V<X?-1:1}}catch{}return NaN}function Pl(c){var h=typeof c;return h=="object"&&(ArrayBuffer.isView(c)||(h=ge(c))==="ArrayBuffer")?"binary":h}function Gr(c){return c instanceof Uint8Array?c:ArrayBuffer.isView(c)?new Uint8Array(c.buffer,c.byteOffset,c.byteLength):new Uint8Array(c)}function gr(c,h,p){var y=c.schema.yProps;return y?(h&&0<p.numFailures&&(h=h.filter(function(w,k){return!p.failures[k]})),Promise.all(y.map(function(w){return w=w.updatesTable,h?c.db.table(w).where("k").anyOf(h).delete():c.db.table(w).clear()})).then(function(){return p})):p}ji.prototype.execute=function(c){var h=this["@@propmod"];if(h.add!==void 0){var p=h.add;if(x(p))return d(d([],x(c)?c:[],!0),p).sort();if(typeof p=="number")return(Number(c)||0)+p;if(typeof p=="bigint")try{return BigInt(c)+p}catch{return BigInt(0)+p}throw new TypeError("Invalid term ".concat(p))}if(h.remove!==void 0){var y=h.remove;if(x(y))return x(c)?c.filter(function(w){return!y.includes(w)}).sort():[];if(typeof y=="number")return Number(c)-y;if(typeof y=="bigint")try{return BigInt(c)-y}catch{return BigInt(0)-y}throw new TypeError("Invalid subtrahend ".concat(y))}return p=(p=h.replacePrefix)==null?void 0:p[0],p&&typeof c=="string"&&c.startsWith(p)?h.replacePrefix[1]+c.substring(p.length):c};var Oi=ji;function ji(c){this["@@propmod"]=c}function vr(c,h){for(var p=g(h),y=p.length,w=!1,k=0;k<y;++k){var z=p[k],O=h[z],U=kt(c,z);O instanceof Oi?(yt(c,z,O.execute(U)),w=!0):U!==O&&(yt(c,z,O),w=!0)}return w}Te.prototype._trans=function(c,h,p){var y=this._tx||Kt.trans,w=this.name,k=Na&&typeof console<"u"&&console.createTask&&console.createTask("Dexie: ".concat(c==="readonly"?"read":"write"," ").concat(this.name));function z(Q,q,B){if(B.schema[w])return h(B.idbtrans,B);throw new gt.NotFound("Table "+w+" not part of transaction")}var O=Pn();try{var U=y&&y.db._novip===this.db._novip?y===Kt.trans?y._promise(c,z,p):Cn(function(){return y._promise(c,z,p)},{trans:y,transless:Kt.transless||Kt}):(function Q(q,B,V,X){if(q.idbdb&&(q._state.openComplete||Kt.letThrough||q._vip)){var K=q._createTransaction(B,V,q._dbSchema);try{K.create(),q._state.PR1398_maxLoop=3}catch(F){return F.name===vt.InvalidState&&q.isOpen()&&0<--q._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),q.close({disableAutoOpen:!1}),q.open().then(function(){return Q(q,B,V,X)})):Ye(F)}return K._promise(B,function(F,G){return Cn(function(){return Kt.trans=K,X(F,G,K)})}).then(function(F){if(B==="readwrite")try{K.idbtrans.commit()}catch{}return B==="readonly"?F:K._completion.then(function(){return F})})}if(q._state.openComplete)return Ye(new gt.DatabaseClosed(q._state.dbOpenError));if(!q._state.isBeingOpened){if(!q._state.autoOpen)return Ye(new gt.DatabaseClosed);q.open().catch(Ct)}return q._state.dbReadyPromise.then(function(){return Q(q,B,V,X)})})(this.db,c,[this.name],z);return k&&(U._consoleTask=k,U=U.catch(function(Q){return console.trace(Q),Ye(Q)})),U}finally{O&&xa()}},Te.prototype.get=function(c,h){var p=this;return c&&c.constructor===Object?this.where(c).first(h):c==null?Ye(new gt.Type("Invalid argument to Table.get()")):this._trans("readonly",function(y){return p.core.get({trans:y,key:c}).then(function(w){return p.hook.reading.fire(w)})}).then(h)},Te.prototype.where=function(c){if(typeof c=="string")return new this.db.WhereClause(this,c);if(x(c))return new this.db.WhereClause(this,"[".concat(c.join("+"),"]"));var h=g(c);if(h.length===1)return this.where(h[0]).equals(c[h[0]]);var p=this.schema.indexes.concat(this.schema.primKey).filter(function(O){if(O.compound&&h.every(function(Q){return 0<=O.keyPath.indexOf(Q)})){for(var U=0;U<h.length;++U)if(h.indexOf(O.keyPath[U])===-1)return!1;return!0}return!1}).sort(function(O,U){return O.keyPath.length-U.keyPath.length})[0];if(p&&this.db._maxKey!==hi)return z=p.keyPath.slice(0,h.length),this.where(z).equals(z.map(function(O){return c[O]}));!p&&Na&&console.warn("The query ".concat(JSON.stringify(c)," on ").concat(this.name," would benefit from a ")+"compound index [".concat(h.join("+"),"]"));var y=this.schema.idxByName;function w(O,U){return be(O,U)===0}var z=h.reduce(function(q,U){var Q=q[0],q=q[1],B=y[U],V=c[U];return[Q||B,Q||!B?oa(q,B&&B.multi?function(X){return X=kt(X,U),x(X)&&X.some(function(K){return w(V,K)})}:function(X){return w(V,kt(X,U))}):q]},[null,null]),k=z[0],z=z[1];return k?this.where(k.name).equals(c[k.keyPath]).filter(z):p?this.filter(z):this.where(h).equals("")},Te.prototype.filter=function(c){return this.toCollection().and(c)},Te.prototype.count=function(c){return this.toCollection().count(c)},Te.prototype.offset=function(c){return this.toCollection().offset(c)},Te.prototype.limit=function(c){return this.toCollection().limit(c)},Te.prototype.each=function(c){return this.toCollection().each(c)},Te.prototype.toArray=function(c){return this.toCollection().toArray(c)},Te.prototype.toCollection=function(){return new this.db.Collection(new this.db.WhereClause(this))},Te.prototype.orderBy=function(c){return new this.db.Collection(new this.db.WhereClause(this,x(c)?"[".concat(c.join("+"),"]"):c))},Te.prototype.reverse=function(){return this.toCollection().reverse()},Te.prototype.mapToClass=function(c){for(var h=this.db,p=this.name,y=((this.schema.mappedClass=c).prototype instanceof Nu&&(c=(z=>{var O=q,U=z;if(typeof U!="function"&&U!==null)throw new TypeError("Class extends value "+String(U)+" is not a constructor or null");function Q(){this.constructor=O}function q(){return z!==null&&z.apply(this,arguments)||this}return s(O,U),O.prototype=U===null?Object.create(U):(Q.prototype=U.prototype,new Q),Object.defineProperty(q.prototype,"db",{get:function(){return h},enumerable:!1,configurable:!0}),q.prototype.table=function(){return p},q})(c)),new Set),w=c.prototype;w;w=E(w))Object.getOwnPropertyNames(w).forEach(function(z){return y.add(z)});function k(z){if(!z)return z;var O,U=Object.create(c.prototype);for(O in z)if(!y.has(O))try{U[O]=z[O]}catch{}return U}return this.schema.readHook&&this.hook.reading.unsubscribe(this.schema.readHook),this.schema.readHook=k,this.hook("reading",k),c},Te.prototype.defineClass=function(){return this.mapToClass(function(c){S(this,c)})},Te.prototype.add=function(c,h){var p=this,y=this.schema.primKey,w=y.auto,k=y.keyPath,z=c;return k&&w&&(z=Us(k)(c)),this._trans("readwrite",function(O){return p.core.mutate({trans:O,type:"add",keys:h!=null?[h]:null,values:[z]})}).then(function(O){return O.numFailures?Lt.reject(O.failures[0]):O.lastResult}).then(function(O){if(k)try{yt(c,k,O)}catch{}return O})},Te.prototype.upsert=function(c,h){var p=this,y=this.schema.primKey.keyPath;return this._trans("readwrite",function(w){return p.core.get({trans:w,key:c}).then(function(k){var z=k??{};return vr(z,h),y&&yt(z,y,c),p.core.mutate({trans:w,type:"put",values:[z],keys:[c],upsert:!0,updates:{keys:[c],changeSpecs:[h]}}).then(function(O){return O.numFailures?Lt.reject(O.failures[0]):!!k})})})},Te.prototype.update=function(c,h){return typeof c!="object"||x(c)?this.where(":id").equals(c).modify(h):(c=kt(c,this.schema.primKey.keyPath))===void 0?Ye(new gt.InvalidArgument("Given object does not contain its primary key")):this.where(":id").equals(c).modify(h)},Te.prototype.put=function(c,h){var p=this,y=this.schema.primKey,w=y.auto,k=y.keyPath,z=c;return k&&w&&(z=Us(k)(c)),this._trans("readwrite",function(O){return p.core.mutate({trans:O,type:"put",values:[z],keys:h!=null?[h]:null})}).then(function(O){return O.numFailures?Lt.reject(O.failures[0]):O.lastResult}).then(function(O){if(k)try{yt(c,k,O)}catch{}return O})},Te.prototype.delete=function(c){var h=this;return this._trans("readwrite",function(p){return h.core.mutate({trans:p,type:"delete",keys:[c]}).then(function(y){return gr(h,[c],y)}).then(function(y){return y.numFailures?Lt.reject(y.failures[0]):void 0})})},Te.prototype.clear=function(){var c=this;return this._trans("readwrite",function(h){return c.core.mutate({trans:h,type:"deleteRange",range:mr}).then(function(p){return gr(c,null,p)})}).then(function(h){return h.numFailures?Lt.reject(h.failures[0]):void 0})},Te.prototype.bulkGet=function(c){var h=this;return this._trans("readonly",function(p){return h.core.getMany({keys:c,trans:p}).then(function(y){return y.map(function(w){return h.hook.reading.fire(w)})})})},Te.prototype.bulkAdd=function(c,h,p){var y=this,w=Array.isArray(h)?h:void 0,k=(p=p||(w?void 0:h))?p.allKeys:void 0;return this._trans("readwrite",function(z){var O=y.schema.primKey,Q=O.auto,O=O.keyPath;if(O&&w)throw new gt.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");if(w&&w.length!==c.length)throw new gt.InvalidArgument("Arguments objects and keys must have the same length");var U=c.length,Q=O&&Q?c.map(Us(O)):c;return y.core.mutate({trans:z,type:"add",keys:w,values:Q,wantResults:k}).then(function(q){var B=q.numFailures,V=q.failures;if(B===0)return k?q.results:q.lastResult;throw new ot("".concat(y.name,".bulkAdd(): ").concat(B," of ").concat(U," operations failed"),V)})})},Te.prototype.bulkPut=function(c,h,p){var y=this,w=Array.isArray(h)?h:void 0,k=(p=p||(w?void 0:h))?p.allKeys:void 0;return this._trans("readwrite",function(z){var O=y.schema.primKey,Q=O.auto,O=O.keyPath;if(O&&w)throw new gt.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");if(w&&w.length!==c.length)throw new gt.InvalidArgument("Arguments objects and keys must have the same length");var U=c.length,Q=O&&Q?c.map(Us(O)):c;return y.core.mutate({trans:z,type:"put",keys:w,values:Q,wantResults:k}).then(function(q){var B=q.numFailures,V=q.failures;if(B===0)return k?q.results:q.lastResult;throw new ot("".concat(y.name,".bulkPut(): ").concat(B," of ").concat(U," operations failed"),V)})})},Te.prototype.bulkUpdate=function(c){var h=this,p=this.core,y=c.map(function(z){return z.key}),w=c.map(function(z){return z.changes}),k=[];return this._trans("readwrite",function(z){return p.getMany({trans:z,keys:y,cache:"clone"}).then(function(O){var U=[],Q=[],q=(c.forEach(function(B,V){var X=B.key,K=B.changes,F=O[V];if(F){for(var G=0,at=Object.keys(K);G<at.length;G++){var J=at[G],st=K[J];if(J===h.schema.primKey.keyPath){if(be(st,X)!==0)throw new gt.Constraint("Cannot update primary key in bulkUpdate()")}else yt(F,J,st)}k.push(V),U.push(X),Q.push(F)}}),U.length);return p.mutate({trans:z,type:"put",keys:U,values:Q,updates:{keys:y,changeSpecs:w}}).then(function(B){var V=B.numFailures,X=B.failures;if(V===0)return q;for(var K=0,F=Object.keys(X);K<F.length;K++){var G,at=F[K],J=k[Number(at)];J!=null&&(G=X[at],delete X[at],X[J]=G)}throw new ot("".concat(h.name,".bulkUpdate(): ").concat(V," of ").concat(q," operations failed"),X)})})})},Te.prototype.bulkDelete=function(c){var h=this,p=c.length;return this._trans("readwrite",function(y){return h.core.mutate({trans:y,type:"delete",keys:c}).then(function(w){return gr(h,c,w)})}).then(function(y){var w=y.numFailures,k=y.failures;if(w===0)return y.lastResult;throw new ot("".concat(h.name,".bulkDelete(): ").concat(w," of ").concat(p," operations failed"),k)})};var Yr=Te;function Te(){}function Pe(c){function h(z,O){if(O){for(var U=arguments.length,Q=new Array(U-1);--U;)Q[U-1]=arguments[U];return p[z].subscribe.apply(null,Q),c}if(typeof z=="string")return p[z]}var p={};h.addEventType=k;for(var y=1,w=arguments.length;y<w;++y)k(arguments[y]);return h;function k(z,O,U){var Q,q;if(typeof z!="object")return O=O||Yn,q={subscribers:[],fire:U=U||Ct,subscribe:function(B){q.subscribers.indexOf(B)===-1&&(q.subscribers.push(B),q.fire=O(q.fire,B))},unsubscribe:function(B){q.subscribers=q.subscribers.filter(function(V){return V!==B}),q.fire=q.subscribers.reduce(O,U)}},p[z]=h[z]=q;g(Q=z).forEach(function(B){var V=Q[B];if(x(V))k(B,Q[B][0],Q[B][1]);else{if(V!=="asap")throw new gt.InvalidArgument("Invalid event config");var X=k(B,we,function(){for(var K=arguments.length,F=new Array(K);K--;)F[K]=arguments[K];X.subscribers.forEach(function(G){dt(function(){G.apply(null,F)})})})}})}}function Pr(c,h){return W(h).from({prototype:c}),h}function br(c,h){return!(c.filter||c.algorithm||c.or)&&(h?c.justLimit:!c.replayFilter)}function $o(c,h){c.filter=oa(c.filter,h)}function fi(c,h,p){var y=c.replayFilter;c.replayFilter=y?function(){return oa(y(),h())}:h,c.justLimit=p&&!y}function pi(c,h){if(c.isPrimKey)return h.primaryKey;var p=h.getIndexByKeyPath(c.index);if(p)return p;throw new gt.Schema("KeyPath "+c.index+" on object store "+h.name+" is not indexed")}function Ou(c,h,p){var y=pi(c,h.schema);return h.openCursor({trans:p,values:!c.keysOnly,reverse:c.dir==="prev",unique:!!c.unique,query:{index:y,range:c.range}})}function Vs(c,h,p,y){var w,k,z=c.replayFilter?oa(c.filter,c.replayFilter()):c.filter;return c.or?(w={},k=function(O,U,Q){var q,B;z&&!z(U,Q,function(V){return U.stop(V)},function(V){return U.fail(V)})||((B=""+(q=U.primaryKey))=="[object ArrayBuffer]"&&(B=""+new Uint8Array(q)),_(w,B))||(w[B]=!0,h(O,U,Q))},Promise.all([c.or._iterate(k,p),Xl(Ou(c,y,p),c.algorithm,k,!c.keysOnly&&c.valueMapper)])):Xl(Ou(c,y,p),oa(c.algorithm,z),h,!c.keysOnly&&c.valueMapper)}function Xl(c,h,p,y){var w=Ie(y?function(k,z,O){return p(y(k),z,O)}:p);return c.then(function(k){if(k)return k.start(function(){var z=function(){return k.continue()};h&&!h(k,function(O){return z=O},function(O){k.stop(O),z=Ct},function(O){k.fail(O),z=Ct})||w(k.value,k,function(O){return z=O}),z()})})}qt.prototype._read=function(c,h){var p=this._ctx;return p.error?p.table._trans(null,Ye.bind(null,p.error)):p.table._trans("readonly",c).then(h)},qt.prototype._write=function(c){var h=this._ctx;return h.error?h.table._trans(null,Ye.bind(null,h.error)):h.table._trans("readwrite",c,"locked")},qt.prototype._addAlgorithm=function(c){var h=this._ctx;h.algorithm=oa(h.algorithm,c)},qt.prototype._iterate=function(c,h){return Vs(this._ctx,c,h,this._ctx.table.core)},qt.prototype.clone=function(c){var h=Object.create(this.constructor.prototype),p=Object.create(this._ctx);return c&&S(p,c),h._ctx=p,h},qt.prototype.raw=function(){return this._ctx.valueMapper=null,this},qt.prototype.each=function(c){var h=this._ctx;return this._read(function(p){return Vs(h,c,p,h.table.core)})},qt.prototype.count=function(c){var h=this;return this._read(function(p){var y,w=h._ctx,k=w.table.core;return br(w,!0)?k.count({trans:p,query:{index:pi(w,k.schema),range:w.range}}).then(function(z){return Math.min(z,w.limit)}):(y=0,Vs(w,function(){return++y,!1},p,k).then(function(){return y}))}).then(c)},qt.prototype.sortBy=function(c,h){var p=c.split(".").reverse(),y=p[0],w=p.length-1;function k(U,Q){return Q?k(U[p[Q]],Q-1):U[y]}var z=this._ctx.dir==="next"?1:-1;function O(U,Q){return be(k(U,w),k(Q,w))*z}return this.toArray(function(U){return U.slice().sort(O)}).then(h)},qt.prototype.toArray=function(c){var h=this;return this._read(function(p){var y,w,k,z=h._ctx;return br(z,!0)&&0<z.limit?(y=z.valueMapper,w=pi(z,z.table.core.schema),z.table.core.query({trans:p,limit:z.limit,values:!0,direction:z.dir==="prev"?"prev":void 0,query:{index:w,range:z.range}}).then(function(O){return O=O.result,y?O.map(y):O})):(k=[],Vs(z,function(O){return k.push(O)},p,z.table.core).then(function(){return k}))},c)},qt.prototype.offset=function(c){var h=this._ctx;return c<=0||(h.offset+=c,br(h)?fi(h,function(){var p=c;return function(y,w){return p===0||(p===1?--p:w(function(){y.advance(p),p=0}),!1)}}):fi(h,function(){var p=c;return function(){return--p<0}})),this},qt.prototype.limit=function(c){return this._ctx.limit=Math.min(this._ctx.limit,c),fi(this._ctx,function(){var h=c;return function(p,y,w){return--h<=0&&y(w),0<=h}},!0),this},qt.prototype.until=function(c,h){return $o(this._ctx,function(p,y,w){return!c(p.value)||(y(w),h)}),this},qt.prototype.first=function(c){return this.limit(1).toArray(function(h){return h[0]}).then(c)},qt.prototype.last=function(c){return this.reverse().first(c)},qt.prototype.filter=function(c){var h;return $o(this._ctx,function(p){return c(p.value)}),(h=this._ctx).isMatch=oa(h.isMatch,c),this},qt.prototype.and=function(c){return this.filter(c)},qt.prototype.or=function(c){return new this.db.WhereClause(this._ctx.table,c,this)},qt.prototype.reverse=function(){return this._ctx.dir=this._ctx.dir==="prev"?"next":"prev",this._ondirectionchange&&this._ondirectionchange(this._ctx.dir),this},qt.prototype.desc=function(){return this.reverse()},qt.prototype.eachKey=function(c){var h=this._ctx;return h.keysOnly=!h.isMatch,this.each(function(p,y){c(y.key,y)})},qt.prototype.eachUniqueKey=function(c){return this._ctx.unique="unique",this.eachKey(c)},qt.prototype.eachPrimaryKey=function(c){var h=this._ctx;return h.keysOnly=!h.isMatch,this.each(function(p,y){c(y.primaryKey,y)})},qt.prototype.keys=function(c){var h=this._ctx,p=(h.keysOnly=!h.isMatch,[]);return this.each(function(y,w){p.push(w.key)}).then(function(){return p}).then(c)},qt.prototype.primaryKeys=function(c){var h=this._ctx;if(br(h,!0)&&0<h.limit)return this._read(function(y){var w=pi(h,h.table.core.schema);return h.table.core.query({trans:y,values:!1,limit:h.limit,direction:h.dir==="prev"?"prev":void 0,query:{index:w,range:h.range}})}).then(function(y){return y.result}).then(c);h.keysOnly=!h.isMatch;var p=[];return this.each(function(y,w){p.push(w.primaryKey)}).then(function(){return p}).then(c)},qt.prototype.uniqueKeys=function(c){return this._ctx.unique="unique",this.keys(c)},qt.prototype.firstKey=function(c){return this.limit(1).keys(function(h){return h[0]}).then(c)},qt.prototype.lastKey=function(c){return this.reverse().firstKey(c)},qt.prototype.distinct=function(){var c,h=this._ctx,h=h.index&&h.table.schema.idxByName[h.index];return h&&h.multi&&(c={},$o(this._ctx,function(y){var y=y.primaryKey.toString(),w=_(c,y);return c[y]=!0,!w})),this},qt.prototype.modify=function(c){var h=this,p=this._ctx;return this._write(function(y){function w(F,G){var at=G.failures;V+=F-G.numFailures;for(var J=0,st=g(at);J<st.length;J++){var ht=st[J];B.push(at[ht])}}var k=typeof c=="function"?c:function(F){return vr(F,c)},z=p.table.core,q=z.schema.primaryKey,O=q.outbound,U=q.extractKey,Q=200,q=h.db._options.modifyChunkSize,B=(q&&(Q=typeof q=="object"?q[z.name]||q["*"]||200:q),[]),V=0,X=[],K=c===Ql;return h.clone().primaryKeys().then(function(F){function G(J){var st=Math.min(Q,F.length-J),ht=F.slice(J,J+st);return(K?Promise.resolve([]):z.getMany({trans:y,keys:ht,cache:"immutable"})).then(function(bt){var Tt=[],At=[],Ht=O?[]:null,zt=K?ht:[];if(!K)for(var Vt=0;Vt<st;++Vt){var wt=bt[Vt],ne={value:pe(wt),primKey:F[J+Vt]};k.call(ne,ne.value,ne)!==!1&&(ne.value==null?zt.push(F[J+Vt]):O||be(U(wt),U(ne.value))===0?(At.push(ne.value),O&&Ht.push(F[J+Vt])):(zt.push(F[J+Vt]),Tt.push(ne.value)))}return Promise.resolve(0<Tt.length&&z.mutate({trans:y,type:"add",values:Tt}).then(function(Zt){for(var re in Zt.failures)zt.splice(parseInt(re),1);w(Tt.length,Zt)})).then(function(){return(0<At.length||at&&typeof c=="object")&&z.mutate({trans:y,type:"put",keys:Ht,values:At,criteria:at,changeSpec:typeof c!="function"&&c,isAdditionalChunk:0<J}).then(function(Zt){return w(At.length,Zt)})}).then(function(){return(0<zt.length||at&&K)&&z.mutate({trans:y,type:"delete",keys:zt,criteria:at,isAdditionalChunk:0<J}).then(function(Zt){return gr(p.table,zt,Zt)}).then(function(Zt){return w(zt.length,Zt)})}).then(function(){return F.length>J+st&&G(J+Q)})})}var at=br(p)&&p.limit===1/0&&(typeof c!="function"||K)&&{index:p.index,range:p.range};return G(0).then(function(){if(0<B.length)throw new H("Error modifying one or more objects",B,V,X);return F.length})})})},qt.prototype.delete=function(){var c=this._ctx,h=c.range;return!br(c)||c.table.schema.yProps||!c.isPrimKey&&h.type!==3?this.modify(Ql):this._write(function(p){var y=c.table.core.schema.primaryKey,w=h;return c.table.core.count({trans:p,query:{index:y,range:w}}).then(function(k){return c.table.core.mutate({trans:p,type:"deleteRange",range:w}).then(function(U){var O=U.failures,U=U.numFailures;if(U)throw new H("Could not delete some values",Object.keys(O).map(function(Q){return O[Q]}),k-U);return k-U})})})};var Vh=qt;function qt(){}var Ql=function(c,h){return h.value=null};function Lo(c,h){return c<h?-1:c===h?0:1}function Bo(c,h){return h<c?-1:c===h?0:1}function ta(c,h,p){return c=c instanceof Zl?new c.Collection(c):c,c._ctx.error=new(p||TypeError)(h),c}function _a(c){return new c.Collection(c,function(){return Ho("")}).limit(0)}function qs(X,h,p,y){var w,k,z,O,U,Q,q,B=p.length;if(!p.every(function(F){return typeof F=="string"}))return ta(X,Yl);function V(F){w=F==="next"?function(at){return at.toUpperCase()}:function(at){return at.toLowerCase()},k=F==="next"?function(at){return at.toLowerCase()}:function(at){return at.toUpperCase()},z=F==="next"?Lo:Bo;var G=p.map(function(at){return{lower:k(at),upper:w(at)}}).sort(function(at,J){return z(at.lower,J.lower)});O=G.map(function(at){return at.upper}),U=G.map(function(at){return at.lower}),q=(Q=F)==="next"?"":y}V("next");var X=new X.Collection(X,function(){return Di(O[0],U[B-1]+y)}),K=(X._ondirectionchange=function(F){V(F)},0);return X._addAlgorithm(function(F,G,at){var J=F.key;if(typeof J=="string"){var st=k(J);if(h(st,U,K))return!0;for(var ht=null,bt=K;bt<B;++bt){var Tt=((At,Ht,zt,Vt,wt,ne)=>{for(var Zt=Math.min(At.length,Vt.length),re=-1,de=0;de<Zt;++de){var Fa=Ht[de];if(Fa!==Vt[de])return wt(At[de],zt[de])<0?At.substr(0,de)+zt[de]+zt.substr(de+1):wt(At[de],Vt[de])<0?At.substr(0,de)+Vt[de]+zt.substr(de+1):0<=re?At.substr(0,re)+Ht[re]+zt.substr(re+1):null;wt(At[de],Fa)<0&&(re=de)}return Zt<Vt.length&&ne==="next"?At+zt.substr(At.length):Zt<At.length&&ne==="prev"?At.substr(0,zt.length):re<0?null:At.substr(0,re)+Vt[re]+zt.substr(re+1)})(J,st,O[bt],U[bt],z,Q);Tt===null&&ht===null?K=bt+1:(ht===null||0<z(ht,Tt))&&(ht=Tt)}G(ht!==null?function(){F.continue(ht+q)}:at)}return!1}),X}function Di(c,h,p,y){return{type:2,lower:c,upper:h,lowerOpen:p,upperOpen:y}}function Ho(c){return{type:1,lower:c,upper:c}}Object.defineProperty(Sa.prototype,"Collection",{get:function(){return this._ctx.table.db.Collection},enumerable:!1,configurable:!0}),Sa.prototype.between=function(c,h,p,y){p=p!==!1,y=y===!0;try{return 0<this._cmp(c,h)||this._cmp(c,h)===0&&(p||y)&&(!p||!y)?_a(this):new this.Collection(this,function(){return Di(c,h,!p,!y)})}catch{return ta(this,An)}},Sa.prototype.equals=function(c){return c==null?ta(this,An):new this.Collection(this,function(){return Ho(c)})},Sa.prototype.above=function(c){return c==null?ta(this,An):new this.Collection(this,function(){return Di(c,void 0,!0)})},Sa.prototype.aboveOrEqual=function(c){return c==null?ta(this,An):new this.Collection(this,function(){return Di(c,void 0,!1)})},Sa.prototype.below=function(c){return c==null?ta(this,An):new this.Collection(this,function(){return Di(void 0,c,!1,!0)})},Sa.prototype.belowOrEqual=function(c){return c==null?ta(this,An):new this.Collection(this,function(){return Di(void 0,c)})},Sa.prototype.startsWith=function(c){return typeof c!="string"?ta(this,Yl):this.between(c,c+hi,!0,!0)},Sa.prototype.startsWithIgnoreCase=function(c){return c===""?this.startsWith(c):qs(this,function(h,p){return h.indexOf(p[0])===0},[c],hi)},Sa.prototype.equalsIgnoreCase=function(c){return qs(this,function(h,p){return h===p[0]},[c],"")},Sa.prototype.anyOfIgnoreCase=function(){var c=jt.apply(ie,arguments);return c.length===0?_a(this):qs(this,function(h,p){return p.indexOf(h)!==-1},c,"")},Sa.prototype.startsWithAnyOfIgnoreCase=function(){var c=jt.apply(ie,arguments);return c.length===0?_a(this):qs(this,function(h,p){return p.some(function(y){return h.indexOf(y)===0})},c,hi)},Sa.prototype.anyOf=function(){var c,h,p=this,y=jt.apply(ie,arguments),w=this._cmp;try{y.sort(w)}catch{return ta(this,An)}return y.length===0?_a(this):((c=new this.Collection(this,function(){return Di(y[0],y[y.length-1])}))._ondirectionchange=function(k){w=k==="next"?p._ascending:p._descending,y.sort(w)},h=0,c._addAlgorithm(function(k,z,O){for(var U=k.key;0<w(U,y[h]);)if(++h===y.length)return z(O),!1;return w(U,y[h])===0||(z(function(){k.continue(y[h])}),!1)}),c)},Sa.prototype.notEqual=function(c){return this.inAnyRange([[-1/0,c],[c,this.db._maxKey]],{includeLowers:!1,includeUppers:!1})},Sa.prototype.noneOf=function(){var c=jt.apply(ie,arguments);if(c.length===0)return new this.Collection(this);try{c.sort(this._ascending)}catch{return ta(this,An)}var h=c.reduce(function(p,y){return p?p.concat([[p[p.length-1][1],y]]):[[-1/0,y]]},null);return h.push([c[c.length-1],this.db._maxKey]),this.inAnyRange(h,{includeLowers:!1,includeUppers:!1})},Sa.prototype.inAnyRange=function(c,at){var p=this,y=this._cmp,w=this._ascending,k=this._descending,z=this._min,O=this._max;if(c.length===0)return _a(this);if(!c.every(function(J){return J[0]!==void 0&&J[1]!==void 0&&w(J[0],J[1])<=0}))return ta(this,"First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower",gt.InvalidArgument);var U=!at||at.includeLowers!==!1,Q=at&&at.includeUppers===!0,q,B=w;function V(J,st){return B(J[0],st[0])}try{(q=c.reduce(function(J,st){for(var ht=0,bt=J.length;ht<bt;++ht){var Tt=J[ht];if(y(st[0],Tt[1])<0&&0<y(st[1],Tt[0])){Tt[0]=z(Tt[0],st[0]),Tt[1]=O(Tt[1],st[1]);break}}return ht===bt&&J.push(st),J},[])).sort(V)}catch{return ta(this,An)}var X=0,K=Q?function(J){return 0<w(J,q[X][1])}:function(J){return 0<=w(J,q[X][1])},F=U?function(J){return 0<k(J,q[X][0])}:function(J){return 0<=k(J,q[X][0])},G=K,at=new this.Collection(this,function(){return Di(q[0][0],q[q.length-1][1],!U,!Q)});return at._ondirectionchange=function(J){B=J==="next"?(G=K,w):(G=F,k),q.sort(V)},at._addAlgorithm(function(J,st,ht){for(var bt,Tt=J.key;G(Tt);)if(++X===q.length)return st(ht),!1;return!K(bt=Tt)&&!F(bt)||(p._cmp(Tt,q[X][1])===0||p._cmp(Tt,q[X][0])===0||st(function(){B===w?J.continue(q[X][0]):J.continue(q[X][1])}),!1)}),at},Sa.prototype.startsWithAnyOf=function(){var c=jt.apply(ie,arguments);return c.every(function(h){return typeof h=="string"})?c.length===0?_a(this):this.inAnyRange(c.map(function(h){return[h,h+hi]})):ta(this,"startsWithAnyOf() only works with strings")};var Zl=Sa;function Sa(){}function Xe(c){return Ie(function(h){return yr(h),c(h.target.error),!1})}function yr(c){c.stopPropagation&&c.stopPropagation(),c.preventDefault&&c.preventDefault()}var Is="storagemutated",Ks="x-storagemutated-1",on=Pe(null,Is),ju=(Tn.prototype._lock=function(){return rt(!Kt.global),++this._reculock,this._reculock!==1||Kt.global||(Kt.lockOwnerFor=this),this},Tn.prototype._unlock=function(){if(rt(!Kt.global),--this._reculock==0)for(Kt.global||(Kt.lockOwnerFor=null);0<this._blockedFuncs.length&&!this._locked();){var c=this._blockedFuncs.shift();try{pr(c[1],c[0])}catch{}}return this},Tn.prototype._locked=function(){return this._reculock&&Kt.lockOwnerFor!==this},Tn.prototype.create=function(c){var h=this;if(this.mode){var p=this.db.idbdb,y=this.db._state.dbOpenError;if(rt(!this.idbtrans),!c&&!p)switch(y&&y.name){case"DatabaseClosedError":throw new gt.DatabaseClosed(y);case"MissingAPIError":throw new gt.MissingAPI(y.message,y);default:throw new gt.OpenFailed(y)}if(!this.active)throw new gt.TransactionInactive;rt(this._completion._state===null),(c=this.idbtrans=c||(this.db.core||p).transaction(this.storeNames,this.mode,{durability:this.chromeTransactionDurability})).onerror=Ie(function(w){yr(w),h._reject(c.error)}),c.onabort=Ie(function(w){yr(w),h.active&&h._reject(new gt.Abort(c.error)),h.active=!1,h.on("abort").fire(w)}),c.oncomplete=Ie(function(){h.active=!1,h._resolve(),"mutatedParts"in c&&on.storagemutated.fire(c.mutatedParts)})}return this},Tn.prototype._promise=function(c,h,p){var y,w=this;return c==="readwrite"&&this.mode!=="readwrite"?Ye(new gt.ReadOnly("Transaction is readonly")):this.active?this._locked()?new Lt(function(k,z){w._blockedFuncs.push([function(){w._promise(c,h,p).then(k,z)},Kt])}):p?Cn(function(){var k=new Lt(function(z,O){w._lock();var U=h(z,O,w);U&&U.then&&U.then(z,O)});return k.finally(function(){return w._unlock()}),k._lib=!0,k}):((y=new Lt(function(k,z){var O=h(k,z,w);O&&O.then&&O.then(k,z)}))._lib=!0,y):Ye(new gt.TransactionInactive)},Tn.prototype._root=function(){return this.parent?this.parent._root():this},Tn.prototype.waitFor=function(c){var h,p=this._root(),y=Lt.resolve(c),w=(p._waitingFor?p._waitingFor=p._waitingFor.then(function(){return y}):(p._waitingFor=y,p._waitingQueue=[],h=p.idbtrans.objectStore(p.storeNames[0]),(function k(){for(++p._spinCount;p._waitingQueue.length;)p._waitingQueue.shift()();p._waitingFor&&(h.get(-1/0).onsuccess=k)})()),p._waitingFor);return new Lt(function(k,z){y.then(function(O){return p._waitingQueue.push(Ie(k.bind(null,O)))},function(O){return p._waitingQueue.push(Ie(z.bind(null,O)))}).finally(function(){p._waitingFor===w&&(p._waitingFor=null)})})},Tn.prototype.abort=function(){this.active&&(this.active=!1,this.idbtrans&&this.idbtrans.abort(),this._reject(new gt.Abort))},Tn.prototype.table=function(c){var h=this._memoizedTables||(this._memoizedTables={});if(_(h,c))return h[c];var p=this.schema[c];if(p)return(p=new this.db.Table(c,p,this)).core=this.db.core.table(c),h[c]=p;throw new gt.NotFound("Table "+c+" not part of transaction")},Tn);function Tn(){}function Ri(c,h,p,y,w,k,z,O){return{name:c,keyPath:h,unique:p,multi:y,auto:w,compound:k,src:(p&&!z?"&":"")+(y?"*":"")+(w?"++":"")+Du(h),type:O}}function Du(c){return typeof c=="string"?c:c?"["+[].join.call(c,"+")+"]":""}function Uo(c,h,p){return{name:c,primKey:h,indexes:p,mappedClass:null,idxByName:(y=function(w){return[w.name,w]},p.reduce(function(w,k,z){return k=y(k,z),k&&(w[k[0]]=k[1]),w},{}))};var y}var Xr=function(c){try{return c.only([[]]),Xr=function(){return[[]]},[[]]}catch{return Xr=function(){return hi},hi}};function Fs(c){return c==null?function(){}:typeof c=="string"?(h=c).split(".").length===1?function(p){return p[h]}:function(p){return kt(p,h)}:function(p){return kt(p,c)};var h}function Ru(c){return[].slice.call(c)}var qh=0;function Mi(c){return c==null?":id":typeof c=="string"?c:"[".concat(c.join("+"),"]")}function Wn(c,h,z){function y(G){if(G.type===3)return null;if(G.type===4)throw new Error("Cannot convert never type to IDBKeyRange");var X=G.lower,K=G.upper,F=G.lowerOpen,G=G.upperOpen;return X===void 0?K===void 0?null:h.upperBound(K,!!G):K===void 0?h.lowerBound(X,!!F):h.bound(X,K,!!F,!!G)}function w(V){var X,K,F=V.name;return{name:F,schema:V,mutate:function(G){var at=G.trans,J=G.type,st=G.keys,ht=G.values,bt=G.range;return new Promise(function(Tt,At){Tt=Ie(Tt);var Ht=at.objectStore(F),zt=Ht.keyPath==null,Vt=J==="put"||J==="add";if(!Vt&&J!=="delete"&&J!=="deleteRange")throw new Error("Invalid operation type: "+J);var wt,ne=(st||ht||{length:1}).length;if(st&&ht&&st.length!==ht.length)throw new Error("Given keys array must have same length as given values array.");if(ne===0)return Tt({numFailures:0,failures:{},results:[],lastResult:void 0});function Zt(Ba){++Fa,yr(Ba)}var re=[],de=[],Fa=0;if(J==="deleteRange"){if(bt.type===4)return Tt({numFailures:Fa,failures:de,results:[],lastResult:void 0});bt.type===3?re.push(wt=Ht.clear()):re.push(wt=Ht.delete(y(bt)))}else{var zt=Vt?zt?[ht,st]:[ht,null]:[st,null],se=zt[0],Qe=zt[1];if(Vt)for(var aa=0;aa<ne;++aa)re.push(wt=Qe&&Qe[aa]!==void 0?Ht[J](se[aa],Qe[aa]):Ht[J](se[aa])),wt.onerror=Zt;else for(aa=0;aa<ne;++aa)re.push(wt=Ht[J](se[aa])),wt.onerror=Zt}function ts(Ba){Ba=Ba.target.result,re.forEach(function(cn,Zo){return cn.error!=null&&(de[Zo]=cn.error)}),Tt({numFailures:Fa,failures:de,results:J==="delete"?st:re.map(function(cn){return cn.result}),lastResult:Ba})}wt.onerror=function(Ba){Zt(Ba),ts(Ba)},wt.onsuccess=ts})},getMany:function(G){var at=G.trans,J=G.keys;return new Promise(function(st,ht){st=Ie(st);for(var bt,Tt=at.objectStore(F),At=J.length,Ht=new Array(At),zt=0,Vt=0,wt=function(re){re=re.target,Ht[re._pos]=re.result,++Vt===zt&&st(Ht)},ne=Xe(ht),Zt=0;Zt<At;++Zt)J[Zt]!=null&&((bt=Tt.get(J[Zt]))._pos=Zt,bt.onsuccess=wt,bt.onerror=ne,++zt);zt===0&&st(Ht)})},get:function(G){var at=G.trans,J=G.key;return new Promise(function(st,ht){st=Ie(st);var bt=at.objectStore(F).get(J);bt.onsuccess=function(Tt){return st(Tt.target.result)},bt.onerror=Xe(ht)})},query:(X=U,K=Q,function(G){return new Promise(function(at,J){at=Ie(at);var st,ht,bt,Tt,ne=G.trans,At=G.values,Ht=G.limit,wt=G.query,zt=(zt=G.direction)!=null?zt:"next",Vt=Ht===1/0?void 0:Ht,Zt=wt.index,wt=wt.range,ne=ne.objectStore(F),ne=Zt.isPrimaryKey?ne:ne.index(Zt.name),Zt=y(wt);if(Ht===0)return at({result:[]});K?(wt={query:Zt,count:Vt,direction:zt},(st=At?ne.getAll(wt):ne.getAllKeys(wt)).onsuccess=function(re){return at({result:re.target.result})},st.onerror=Xe(J)):X&&zt==="next"?((st=At?ne.getAll(Zt,Vt):ne.getAllKeys(Zt,Vt)).onsuccess=function(re){return at({result:re.target.result})},st.onerror=Xe(J)):(ht=0,bt=!At&&"openKeyCursor"in ne?ne.openKeyCursor(Zt,zt):ne.openCursor(Zt,zt),Tt=[],bt.onsuccess=function(){var re=bt.result;return!re||(Tt.push(At?re.value:re.primaryKey),++ht===Ht)?at({result:Tt}):void re.continue()},bt.onerror=Xe(J))})}),openCursor:function(G){var at=G.trans,J=G.values,st=G.query,ht=G.reverse,bt=G.unique;return new Promise(function(Tt,At){Tt=Ie(Tt);var Vt=st.index,Ht=st.range,zt=at.objectStore(F),zt=Vt.isPrimaryKey?zt:zt.index(Vt.name),Vt=ht?bt?"prevunique":"prev":bt?"nextunique":"next",wt=!J&&"openKeyCursor"in zt?zt.openKeyCursor(y(Ht),Vt):zt.openCursor(y(Ht),Vt);wt.onerror=Xe(At),wt.onsuccess=Ie(function(ne){var Zt,re,de,Fa,se=wt.result;se?(se.___id=++qh,se.done=!1,Zt=se.continue.bind(se),re=(re=se.continuePrimaryKey)&&re.bind(se),de=se.advance.bind(se),Fa=function(){throw new Error("Cursor not stopped")},se.trans=at,se.stop=se.continue=se.continuePrimaryKey=se.advance=function(){throw new Error("Cursor not started")},se.fail=Ie(At),se.next=function(){var Qe=this,aa=1;return this.start(function(){return aa--?Qe.continue():Qe.stop()}).then(function(){return Qe})},se.start=function(Qe){function aa(){if(wt.result)try{Qe()}catch(Ba){se.fail(Ba)}else se.done=!0,se.start=function(){throw new Error("Cursor behind last entry")},se.stop()}var ts=new Promise(function(Ba,cn){Ba=Ie(Ba),wt.onerror=Xe(cn),se.fail=cn,se.stop=function(Zo){se.stop=se.continue=se.continuePrimaryKey=se.advance=Fa,Ba(Zo)}});return wt.onsuccess=Ie(function(Ba){wt.onsuccess=aa,aa()}),se.continue=Zt,se.continuePrimaryKey=re,se.advance=de,aa(),ts},Tt(se)):Tt(null)},At)})},count:function(G){var at=G.query,J=G.trans,st=at.index,ht=at.range;return new Promise(function(bt,Tt){var At=J.objectStore(F),At=st.isPrimaryKey?At:At.index(st.name),Ht=y(ht),Ht=Ht?At.count(Ht):At.count();Ht.onsuccess=Ie(function(zt){return bt(zt.target.result)}),Ht.onerror=Xe(Tt)})}}}k=z,O=Ru((z=c).objectStoreNames),q=0<O.length?k.objectStore(O[0]):{};var k,z={schema:{name:z.name,tables:O.map(function(V){return k.objectStore(V)}).map(function(V){var X=V.keyPath,K=V.autoIncrement,G=x(X),F={},G={name:V.name,primaryKey:{name:null,isPrimaryKey:!0,outbound:X==null,compound:G,keyPath:X,autoIncrement:K,unique:!0,extractKey:Fs(X)},indexes:Ru(V.indexNames).map(function(at){return V.index(at)}).map(function(ht){var bt=ht.name,J=ht.unique,st=ht.multiEntry,ht=ht.keyPath,bt={name:bt,compound:x(ht),keyPath:ht,unique:J,multiEntry:st,extractKey:Fs(ht)};return F[Mi(ht)]=bt}),getIndexByKeyPath:function(at){return F[Mi(at)]}};return F[":id"]=G.primaryKey,X!=null&&(F[Mi(X)]=G.primaryKey),G})},hasGetAll:0<O.length&&"getAll"in q&&!(typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604),hasIdb3Features:"getAllRecords"in q},O=z.schema,U=z.hasGetAll,Q=z.hasIdb3Features,q=O.tables.map(w),B={};return q.forEach(function(V){return B[V.name]=V}),{stack:"dbcore",transaction:c.transaction.bind(c),table:function(V){if(B[V])return B[V];throw new Error("Table '".concat(V,"' not found"))},MIN_KEY:-1/0,MAX_KEY:Xr(h),schema:O}}function Wl(c,h,p,y){return p=p.IDBKeyRange,h=Wn(h,p,y),{dbcore:c.dbcore.reduce(function(w,k){return k=k.create,o(o({},w),k(w))},h)}}function Qr(c,h){var p=h.db,p=Wl(c._middlewares,p,c._deps,h);c.core=p.dbcore,c.tables.forEach(function(y){var w=y.name;c.core.schema.tables.some(function(k){return k.name===w})&&(y.core=c.core.table(w),c[w]instanceof c.Table)&&(c[w].core=y.core)})}function mi(c,h,p,y){p.forEach(function(w){var k=y[w];h.forEach(function(z){var O=(function U(Q,q){return mt(Q,q)||(Q=E(Q))&&U(Q,q)})(z,w);(!O||"value"in O&&O.value===void 0)&&(z===c.Transaction.prototype||z instanceof c.Transaction?R(z,w,{get:function(){return this.table(w)},set:function(U){D(this,w,{value:U,writable:!0,configurable:!0,enumerable:!0})}}):z[w]=new c.Table(w,k))})})}function $i(c,h){h.forEach(function(p){for(var y in p)p[y]instanceof c.Table&&delete p[y]})}function Mu(c,h){return c._cfg.version-h._cfg.version}function Jl(c,h,p,y){var w=c._dbSchema,k=(p.objectStoreNames.contains("$meta")&&!w.$meta&&(w.$meta=Uo("$meta",Gs("")[0],[]),c._storeNames.push("$meta")),c._createTransaction("readwrite",c._storeNames,w)),z=(k.create(p),k._completion.catch(y),k._reject.bind(k)),O=Kt.transless||Kt;Cn(function(){if(Kt.trans=k,Kt.transless=O,h!==0)return Qr(c,p),Q=h,((U=k).storeNames.includes("$meta")?U.table("$meta").get("version").then(function(q){return q??Q}):Lt.resolve(Q)).then(function(G){var B=c,V=G,X=k,K=p,F=[],G=B._versions,at=B._dbSchema=Nn(0,B.idbdb,K);return(G=G.filter(function(J){return J._cfg.version>=V})).length===0?Lt.resolve():(G.forEach(function(J){F.push(function(){var st,ht,bt,Tt=at,At=J._cfg.dbschema,Ht=(Zr(B,Tt,K),Zr(B,At,K),at=B._dbSchema=At,xr(Tt,At)),zt=(Ht.add.forEach(function(Vt){zn(K,Vt[0],Vt[1].primKey,Vt[1].indexes)}),Ht.change.forEach(function(Vt){if(Vt.recreate)throw new gt.Upgrade("Not yet support for changing primary key");var wt=K.objectStore(Vt.name);Vt.add.forEach(function(ne){return Li(wt,ne)}),Vt.change.forEach(function(ne){wt.deleteIndex(ne.name),Li(wt,ne)}),Vt.del.forEach(function(ne){return wt.deleteIndex(ne)})}),J._cfg.contentUpgrade);if(zt&&J._cfg.version>V)return Qr(B,K),X._memoizedTables={},st=pt(At),Ht.del.forEach(function(Vt){st[Vt]=Tt[Vt]}),$i(B,[B.Transaction.prototype]),mi(B,[B.Transaction.prototype],g(st),st),X.schema=st,(ht=Ge(zt))&&Qn(),At=Lt.follow(function(){var Vt;(bt=zt(X))&&ht&&(Vt=di.bind(null,null),bt.then(Vt,Vt))}),bt&&typeof bt.then=="function"?Lt.resolve(bt):At.then(function(){return bt})}),F.push(function(st){var ht,bt,Tt=J._cfg.dbschema;ht=Tt,bt=st,[].slice.call(bt.db.objectStoreNames).forEach(function(At){return ht[At]==null&&bt.db.deleteObjectStore(At)}),$i(B,[B.Transaction.prototype]),mi(B,[B.Transaction.prototype],B._storeNames,B._dbSchema),X.schema=B._dbSchema}),F.push(function(st){B.idbdb.objectStoreNames.contains("$meta")&&(Math.ceil(B.idbdb.version/10)===J._cfg.version?(B.idbdb.deleteObjectStore("$meta"),delete B._dbSchema.$meta,B._storeNames=B._storeNames.filter(function(ht){return ht!=="$meta"})):st.objectStore("$meta").put(J._cfg.version,"version"))})}),(function J(){return F.length?Lt.resolve(F.shift()(X.idbtrans)).then(J):Lt.resolve()})().then(function(){Vo(at,K)}))}).catch(z);var U,Q;g(w).forEach(function(q){zn(p,q,w[q].primKey,w[q].indexes)}),Qr(c,p),Lt.follow(function(){return c.on.populate.fire(k)}).catch(z)})}function $u(c,h){Vo(c._dbSchema,h),h.db.version%10!=0||h.objectStoreNames.contains("$meta")||h.db.createObjectStore("$meta").add(Math.ceil(h.db.version/10-1),"version");var p=Nn(0,c.idbdb,h);Zr(c,c._dbSchema,h);for(var y=0,w=xr(p,c._dbSchema).change;y<w.length;y++){var k=(z=>{if(z.change.length||z.recreate)return console.warn("Unable to patch indexes of table ".concat(z.name," because it has changes on the type of index or primary key.")),{value:void 0};var O=h.objectStore(z.name);z.add.forEach(function(U){Na&&console.debug("Dexie upgrade patch: Creating missing index ".concat(z.name,".").concat(U.src)),Li(O,U)})})(w[y]);if(typeof k=="object")return k.value}}function xr(c,h){var p,y={del:[],add:[],change:[]};for(p in c)h[p]||y.del.push(p);for(p in h){var w=c[p],k=h[p];if(w){var z={name:p,def:k,recreate:!1,del:[],add:[],change:[]};if(""+(w.primKey.keyPath||"")!=""+(k.primKey.keyPath||"")||w.primKey.auto!==k.primKey.auto)z.recreate=!0,y.change.push(z);else{var O=w.idxByName,U=k.idxByName,Q=void 0;for(Q in O)U[Q]||z.del.push(Q);for(Q in U){var q=O[Q],B=U[Q];q?q.src!==B.src&&z.change.push(B):z.add.push(B)}(0<z.del.length||0<z.add.length||0<z.change.length)&&y.change.push(z)}}else y.add.push([p,k])}return y}function zn(c,h,p,y){var w=c.db.createObjectStore(h,p.keyPath?{keyPath:p.keyPath,autoIncrement:p.auto}:{autoIncrement:p.auto});y.forEach(function(k){return Li(w,k)})}function Vo(c,h){g(c).forEach(function(p){h.db.objectStoreNames.contains(p)||(Na&&console.debug("Dexie: Creating missing table",p),zn(h,p,c[p].primKey,c[p].indexes))})}function Li(c,h){c.createIndex(h.name,h.keyPath,{unique:h.unique,multiEntry:h.multi})}function Nn(c,h,p){var y={};return ut(h.objectStoreNames,0).forEach(function(w){for(var k=p.objectStore(w),z=Ri(Du(Q=k.keyPath),Q||"",!0,!1,!!k.autoIncrement,Q&&typeof Q!="string",!0),O=[],U=0;U<k.indexNames.length;++U){var q=k.index(k.indexNames[U]),Q=q.keyPath,q=Ri(q.name,Q,!!q.unique,!!q.multiEntry,!1,Q&&typeof Q!="string",!1);O.push(q)}y[w]=Uo(w,z,O)}),y}function Zr(c,h,p){for(var y=p.db.objectStoreNames,w=0;w<y.length;++w){var k=y[w],z=p.objectStore(k);c._hasGetAll="getAll"in z;for(var O=0;O<z.indexNames.length;++O){var U,Q=z.indexNames[O],q=z.index(Q).keyPath,q=typeof q=="string"?q:"["+ut(q).join("+")+"]";h[k]&&(U=h[k].idxByName[q])&&(U.name=Q,delete h[k].idxByName[q],h[k].idxByName[Q]=U)}}typeof navigator<"u"&&/Safari/.test(navigator.userAgent)&&!/(Chrome\/|Edge\/)/.test(navigator.userAgent)&&f.WorkerGlobalScope&&f instanceof f.WorkerGlobalScope&&[].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1]<604&&(c._hasGetAll=!1)}function Gs(c){return c.split(",").map(function(h,p){var w=h.split(":"),y=(y=w[1])==null?void 0:y.trim(),w=(h=w[0].trim()).replace(/([&*]|\+\+)/g,""),k=/^\[/.test(w)?w.match(/^\[(.*)\]$/)[1].split("+"):w;return Ri(w,k||null,/\&/.test(h),/\*/.test(h),/\+\+/.test(h),x(k),p===0,y)})}gi.prototype._createTableSchema=Uo,gi.prototype._parseIndexSyntax=Gs,gi.prototype._parseStoresSpec=function(c,h){var p=this;g(c).forEach(function(y){if(c[y]!==null){var w=p._parseIndexSyntax(c[y]),k=w.shift();if(!k)throw new gt.Schema("Invalid schema for table "+y+": "+c[y]);if(k.unique=!0,k.multi)throw new gt.Schema("Primary key cannot be multiEntry*");w.forEach(function(z){if(z.auto)throw new gt.Schema("Only primary key can be marked as autoIncrement (++)");if(!z.keyPath)throw new gt.Schema("Index must have a name and cannot be an empty string")}),k=p._createTableSchema(y,k,w),h[y]=k}})},gi.prototype.stores=function(p){var h=this.db,p=(this._cfg.storesSource=this._cfg.storesSource?S(this._cfg.storesSource,p):p,h._versions),y={},w={};return p.forEach(function(k){S(y,k._cfg.storesSource),w=k._cfg.dbschema={},k._parseStoresSpec(y,w)}),h._dbSchema=w,$i(h,[h._allTables,h,h.Transaction.prototype]),mi(h,[h._allTables,h,h.Transaction.prototype,this._cfg.tables],g(w),w),h._storeNames=g(w),this},gi.prototype.upgrade=function(c){return this._cfg.contentUpgrade=rr(this._cfg.contentUpgrade||Ct,c),this};var Lu=gi;function gi(){}var Bi=(()=>{var c,h,p;return typeof FinalizationRegistry<"u"&&typeof WeakRef<"u"?(c=new Set,h=new FinalizationRegistry(function(y){c.delete(y)}),{toArray:function(){return Array.from(c).map(function(y){return y.deref()}).filter(function(y){return y!==void 0})},add:function(y){var w=new WeakRef(y._novip);c.add(w),h.register(y._novip,w,w),c.size>y._options.maxConnections&&(w=c.values().next().value,c.delete(w),h.unregister(w))},remove:function(y){if(y)for(var w=c.values(),k=w.next();!k.done;){var z=k.value;if(z.deref()===y._novip)return c.delete(z),void h.unregister(z);k=w.next()}}}):(p=[],{toArray:function(){return p},add:function(y){p.push(y._novip)},remove:function(y){y&&(y=p.indexOf(y._novip))!==-1&&p.splice(y,1)}})})();function qo(c,h){var p=c._dbNamesDB;return p||(p=c._dbNamesDB=new vi(Hs,{addons:[],indexedDB:c,IDBKeyRange:h})).version(1).stores({dbnames:"name"}),p.table("dbnames")}function Oa(c){return c&&typeof c.databases=="function"}function Jn(c){return Cn(function(){return Kt.letThrough=!0,c()})}function Wr(c){return!("from"in c)}var la=function(c,h){var p;if(!this)return p=new la,c&&"d"in c&&S(p,c),p;S(this,arguments.length?{d:1,from:c,to:1<arguments.length?h:c}:{d:0})};function Ys(c,h,p){var y=be(h,p);if(!isNaN(y)){if(0<y)throw RangeError();if(Wr(c))return S(c,{from:h,to:p,d:1});var y=c.l,w=c.r;if(be(p,c.from)<0)return y?Ys(y,h,p):c.l={from:h,to:p,d:1,l:null,r:null},Ps(c);if(0<be(h,c.to))return w?Ys(w,h,p):c.r={from:h,to:p,d:1,l:null,r:null},Ps(c);be(h,c.from)<0&&(c.from=h,c.l=null,c.d=w?w.d+1:1),0<be(p,c.to)&&(c.to=p,c.r=null,c.d=c.l?c.l.d+1:1),h=!c.r,y&&!c.l&&wr(c,y),w&&h&&wr(c,w)}}function wr(c,h){Wr(h)||(function p(y,w){var k=w.from,z=w.l,O=w.r;Ys(y,k,w.to),z&&p(y,z),O&&p(y,O)})(c,h)}function Io(c,h){var p=Hi(h),y=p.next();if(!y.done)for(var w=y.value,k=Hi(c),z=k.next(w.from),O=z.value;!y.done&&!z.done;){if(be(O.from,w.to)<=0&&0<=be(O.to,w.from))return!0;be(w.from,O.from)<0?w=(y=p.next(O.from)).value:O=(z=k.next(w.from)).value}return!1}function Hi(c){var h=Wr(c)?null:{s:0,n:c};return{next:function(p){for(var y=0<arguments.length;h;)switch(h.s){case 0:if(h.s=1,y)for(;h.n.l&&be(p,h.n.from)<0;)h={up:h,n:h.n.l,s:1};else for(;h.n.l;)h={up:h,n:h.n.l,s:1};case 1:if(h.s=2,!y||be(p,h.n.to)<=0)return{value:h.n,done:!1};case 2:if(h.n.r){h.s=3,h={up:h,n:h.n.r,s:0};continue}case 3:h=h.up}return{done:!0}}}}function Ps(c){var h,p,y,w=(((w=c.r)==null?void 0:w.d)||0)-(((w=c.l)==null?void 0:w.d)||0),w=1<w?"r":w<-1?"l":"";w&&(h=w=="r"?"l":"r",p=o({},c),y=c[w],c.from=y.from,c.to=y.to,c[w]=y[w],p[w]=y[h],(c[h]=p).d=tc(p)),c.d=tc(c)}function tc(p){var h=p.r,p=p.l;return(h?p?Math.max(h.d,p.d):h.d:p?p.d:0)+1}function Ko(c,h){return g(h).forEach(function(p){c[p]?wr(c[p],h[p]):c[p]=(function y(w){var k,z,O={};for(k in w)_(w,k)&&(z=w[k],O[k]=!z||typeof z!="object"||ee.has(z.constructor)?z:y(z));return O})(h[p])}),c}function ec(c,h){return c.all||h.all||Object.keys(c).some(function(p){return h[p]&&Io(h[p],c[p])})}T(la.prototype,((Ma={add:function(c){return wr(this,c),this},addKey:function(c){return Ys(this,c,c),this},addKeys:function(c){var h=this;return c.forEach(function(p){return Ys(h,p,p)}),this},hasKey:function(c){var h=Hi(this).next(c).value;return h&&be(h.from,c)<=0&&0<=be(h.to,c)}})[Et]=function(){return Hi(this)},Ma));var _r={},Xs={},ac=!1;function Fo(c){Ko(Xs,c),ac||(ac=!0,setTimeout(function(){ac=!1,nc(Xs,!(Xs={}))},0))}function nc(c,h){h===void 0&&(h=!1);var p=new Set;if(c.all)for(var y=0,w=Object.values(_r);y<w.length;y++)Bu(O=w[y],c,p,h);else for(var k in c){var z,O,k=/^idb\:\/\/(.*)\/(.*)\//.exec(k);k&&(z=k[1],k=k[2],O=_r["idb://".concat(z,"/").concat(k)])&&Bu(O,c,p,h)}p.forEach(function(U){return U()})}function Bu(c,h,p,y){for(var w=[],k=0,z=Object.entries(c.queries.query);k<z.length;k++){for(var O=z[k],U=O[0],Q=[],q=0,B=O[1];q<B.length;q++){var V=B[q];ec(h,V.obsSet)?V.subscribers.forEach(function(G){return p.add(G)}):y&&Q.push(V)}y&&w.push([U,Q])}if(y)for(var X=0,K=w;X<K.length;X++){var F=K[X],U=F[0],Q=F[1];c.queries.query[U]=Q}}function Ih(c){var h=c._state,p=c._deps.indexedDB;if(h.isBeingOpened||c.idbdb)return h.dbReadyPromise.then(function(){return h.dbOpenError?Ye(h.dbOpenError):c});h.isBeingOpened=!0,h.dbOpenError=null,h.openComplete=!1;var y=h.openCanceller,w=Math.round(10*c.verno),k=!1;function z(){if(h.openCanceller!==y)throw new gt.DatabaseClosed("db.open() was cancelled")}function O(){return new Lt(function(V,X){if(z(),!p)throw new gt.MissingAPI;var K=c.name,F=h.autoSchema||!w?p.open(K):p.open(K,w);if(!F)throw new gt.MissingAPI;F.onerror=Xe(X),F.onblocked=Ie(c._fireOnBlocked),F.onupgradeneeded=Ie(function(G){var at;q=F.transaction,h.autoSchema&&!c._options.allowEmptyDB?(F.onerror=yr,q.abort(),F.result.close(),(at=p.deleteDatabase(K)).onsuccess=at.onerror=Ie(function(){X(new gt.NoSuchDatabase("Database ".concat(K," doesnt exist")))})):(q.onerror=Xe(X),at=G.oldVersion>Math.pow(2,62)?0:G.oldVersion,B=at<1,c.idbdb=F.result,k&&$u(c,q),Jl(c,at/10,q,X))},X),F.onsuccess=Ie(function(){q=null;var G,at,J,st,ht,bt,Tt=c.idbdb=F.result,At=ut(Tt.objectStoreNames);if(0<At.length)try{var Ht=Tt.transaction((ht=At).length===1?ht[0]:ht,"readonly");if(h.autoSchema)bt=Tt,st=Ht,(J=c).verno=bt.version/10,st=J._dbSchema=Nn(0,bt,st),J._storeNames=ut(bt.objectStoreNames,0),mi(J,[J._allTables],g(st),st);else if(Zr(c,c._dbSchema,Ht),at=Ht,((at=xr(Nn(0,(G=c).idbdb,at),G._dbSchema)).add.length||at.change.some(function(zt){return zt.add.length||zt.change.length}))&&!k)return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."),Tt.close(),w=Tt.version+1,k=!0,V(O());Qr(c,Ht)}catch{}Bi.add(c),Tt.onversionchange=Ie(function(zt){h.vcFired=!0,c.on("versionchange").fire(zt)}),Tt.onclose=Ie(function(){c.close({disableAutoOpen:!1})}),B&&(At=c._deps,ht=K,Oa(bt=At.indexedDB)||ht===Hs||qo(bt,At.IDBKeyRange).put({name:ht}).catch(Ct)),V()},X)}).catch(function(V){switch(V==null?void 0:V.name){case"UnknownError":if(0<h.PR1398_maxLoop)return h.PR1398_maxLoop--,console.warn("Dexie: Workaround for Chrome UnknownError on open()"),O();break;case"VersionError":if(0<w)return w=0,O()}return Lt.reject(V)})}var U,Q=h.dbReadyResolve,q=null,B=!1;return Lt.race([y,(typeof navigator>"u"?Lt.resolve():!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent)&&indexedDB.databases?new Promise(function(V){function X(){return indexedDB.databases().finally(V)}U=setInterval(X,100),X()}).finally(function(){return clearInterval(U)}):Promise.resolve()).then(O)]).then(function(){return z(),h.onReadyBeingFired=[],Lt.resolve(Jn(function(){return c.on.ready.fire(c.vip)})).then(function V(){var X;if(0<h.onReadyBeingFired.length)return X=h.onReadyBeingFired.reduce(rr,Ct),h.onReadyBeingFired=[],Lt.resolve(Jn(function(){return X(c.vip)})).then(V)})}).finally(function(){h.openCanceller===y&&(h.onReadyBeingFired=null,h.isBeingOpened=!1)}).catch(function(V){h.dbOpenError=V;try{q&&q.abort()}catch{}return y===h.openCanceller&&c._close(),Ye(V)}).finally(function(){h.openComplete=!0,Q()}).then(function(){var V;return B&&(V={},c.tables.forEach(function(X){X.schema.indexes.forEach(function(K){K.name&&(V["idb://".concat(c.name,"/").concat(X.name,"/").concat(K.name)]=new la(-1/0,[[[]]]))}),V["idb://".concat(c.name,"/").concat(X.name,"/")]=V["idb://".concat(c.name,"/").concat(X.name,"/:dels")]=new la(-1/0,[[[]]])}),on(Is).fire(V),nc(V,!0)),c})}function Go(c){function h(k){return c.next(k)}var p=w(h),y=w(function(k){return c.throw(k)});function w(k){return function(O){var O=k(O),U=O.value;return O.done?U:U&&typeof U.then=="function"?U.then(p,y):x(U)?Promise.all(U).then(p,y):p(U)}}return w(h)()}function Yo(c,h,p){for(var y=x(c)?c.slice():[c],w=0;w<p;++w)y.push(h);return y}var Kh={stack:"dbcore",name:"VirtualIndexMiddleware",level:1,create:function(c){return o(o({},c),{table:function(y){var p=c.table(y),y=p.schema,w=Object.create(null),k=[];function z(V,X,K){var J=Mi(V),F=w[J]=w[J]||[],G=V==null?0:typeof V=="string"?1:V.length,at=0<X,J=o(o({},K),{name:at?"".concat(J,"(virtual-from:").concat(K.name,")"):K.name,lowLevelIndex:K,isVirtual:at,keyTail:X,keyLength:G,extractKey:Fs(V),unique:!at&&K.unique});return F.push(J),J.isPrimaryKey||k.push(J),1<G&&z(G===2?V[0]:V.slice(0,G-1),X+1,K),F.sort(function(st,ht){return st.keyTail-ht.keyTail}),J}var O=z(y.primaryKey.keyPath,0,y.primaryKey);w[":id"]=[O];for(var U=0,Q=y.indexes;U<Q.length;U++){var q=Q[U];z(q.keyPath,0,q)}function B(V){var X,K=V.query.index;return K.isVirtual?o(o({},V),{query:{index:K.lowLevelIndex,range:(X=V.query.range,K=K.keyTail,{type:X.type===1?2:X.type,lower:Yo(X.lower,X.lowerOpen?c.MAX_KEY:c.MIN_KEY,K),lowerOpen:!0,upper:Yo(X.upper,X.upperOpen?c.MIN_KEY:c.MAX_KEY,K),upperOpen:!0})}}):V}return o(o({},p),{schema:o(o({},y),{primaryKey:O,indexes:k,getIndexByKeyPath:function(V){return(V=w[Mi(V)])&&V[0]}}),count:function(V){return p.count(B(V))},query:function(V){return p.query(B(V))},openCursor:function(V){var X=V.query.index,K=X.keyTail,F=X.keyLength;return X.isVirtual?p.openCursor(B(V)).then(function(at){return at&&G(at)}):p.openCursor(V);function G(at){return Object.create(at,{continue:{value:function(J){J!=null?at.continue(Yo(J,V.reverse?c.MAX_KEY:c.MIN_KEY,K)):V.unique?at.continue(at.key.slice(0,F).concat(V.reverse?c.MIN_KEY:c.MAX_KEY,K)):at.continue()}},continuePrimaryKey:{value:function(J,st){at.continuePrimaryKey(Yo(J,c.MAX_KEY,K),st)}},primaryKey:{get:function(){return at.primaryKey}},key:{get:function(){var J=at.key;return F===1?J[0]:J.slice(0,F)}},value:{get:function(){return at.value}}})}}})}})}};function ic(c,h,p,y){return p=p||{},y=y||"",g(c).forEach(function(w){var k,z,O;_(h,w)?(k=c[w],z=h[w],typeof k=="object"&&typeof z=="object"&&k&&z?(O=ge(k))!==ge(z)?p[y+w]=h[w]:O==="Object"?ic(k,z,p,y+w+"."):k!==z&&(p[y+w]=h[w]):k!==z&&(p[y+w]=h[w])):p[y+w]=void 0}),g(h).forEach(function(w){_(c,w)||(p[y+w]=h[w])}),p}function rc(c,h){return h.type==="delete"?h.keys:h.keys||h.values.map(c.extractKey)}var sc={stack:"dbcore",name:"HooksMiddleware",level:2,create:function(c){return o(o({},c),{table:function(h){var p=c.table(h),y=p.schema.primaryKey;return o(o({},p),{mutate:function(w){var k=Kt.trans,z=k.table(h).hook,O=z.deleting,U=z.creating,Q=z.updating;switch(w.type){case"add":if(U.fire===Ct)break;return k._promise("readwrite",function(){return q(w)},!0);case"put":if(U.fire===Ct&&Q.fire===Ct)break;return k._promise("readwrite",function(){return q(w)},!0);case"delete":if(O.fire===Ct)break;return k._promise("readwrite",function(){return q(w)},!0);case"deleteRange":if(O.fire===Ct)break;return k._promise("readwrite",function(){return(function B(V,X,K){return p.query({trans:V,values:!1,query:{index:y,range:X},limit:K}).then(function(F){var G=F.result;return q({type:"delete",keys:G,trans:V}).then(function(at){return 0<at.numFailures?Promise.reject(at.failures[0]):G.length<K?{failures:[],numFailures:0,lastResult:void 0}:B(V,o(o({},X),{lower:G[G.length-1],lowerOpen:!0}),K)})})})(w.trans,w.range,1e4)},!0)}return p.mutate(w);function q(B){var V,X,K,F=Kt.trans,G=B.keys||rc(y,B);if(G)return(B=B.type==="add"||B.type==="put"?o(o({},B),{keys:G}):o({},B)).type!=="delete"&&(B.values=d([],B.values)),B.keys&&(B.keys=d([],B.keys)),V=p,K=G,((X=B).type==="add"?Promise.resolve([]):V.getMany({trans:X.trans,keys:K,cache:"immutable"})).then(function(at){var J=G.map(function(st,ht){var bt,Tt,At,Ht=at[ht],zt={onerror:null,onsuccess:null};return B.type==="delete"?O.fire.call(zt,st,Ht,F):B.type==="add"||Ht===void 0?(bt=U.fire.call(zt,st,B.values[ht],F),st==null&&bt!=null&&(B.keys[ht]=st=bt,y.outbound||yt(B.values[ht],y.keyPath,st))):(bt=ic(Ht,B.values[ht]),(Tt=Q.fire.call(zt,bt,st,Ht,F))&&(At=B.values[ht],Object.keys(Tt).forEach(function(Vt){_(At,Vt)?At[Vt]=Tt[Vt]:yt(At,Vt,Tt[Vt])}))),zt});return p.mutate(B).then(function(st){for(var ht=st.failures,bt=st.results,Tt=st.numFailures,st=st.lastResult,At=0;At<G.length;++At){var Ht=(bt||G)[At],zt=J[At];Ht==null?zt.onerror&&zt.onerror(ht[At]):zt.onsuccess&&zt.onsuccess(B.type==="put"&&at[At]?B.values[At]:Ht)}return{failures:ht,results:bt,numFailures:Tt,lastResult:st}}).catch(function(st){return J.forEach(function(ht){return ht.onerror&&ht.onerror(st)}),Promise.reject(st)})});throw new Error("Keys missing")}}})}})}};function Hu(c,h,p){try{if(!h||h.keys.length<c.length)return null;for(var y=[],w=0,k=0;w<h.keys.length&&k<c.length;++w)be(h.keys[w],c[k])===0&&(y.push(p?pe(h.values[w]):h.values[w]),++k);return y.length===c.length?y:null}catch{return null}}var Fh={stack:"dbcore",level:-1,create:function(c){return{table:function(h){var p=c.table(h);return o(o({},p),{getMany:function(y){var w;return y.cache?(w=Hu(y.keys,y.trans._cache,y.cache==="clone"))?Lt.resolve(w):p.getMany(y).then(function(k){return y.trans._cache={keys:y.keys,values:y.cache==="clone"?pe(k):k},k}):p.getMany(y)},mutate:function(y){return y.type!=="add"&&(y.trans._cache=null),p.mutate(y)}})}}}};function Uu(c,h){return c.trans.mode==="readonly"&&!!c.subscr&&!c.trans.explicit&&c.trans.db._options.cache!=="disabled"&&!h.schema.primaryKey.outbound}function oc(c,h){switch(c){case"query":return h.values&&!h.unique;case"get":case"getMany":case"count":case"openCursor":return!1}}var Gh={stack:"dbcore",level:0,name:"Observability",create:function(c){var h=c.schema.name,p=new la(c.MIN_KEY,c.MAX_KEY);return o(o({},c),{transaction:function(y,w,k){if(Kt.subscr&&w!=="readonly")throw new gt.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Kt.querier));return c.transaction(y,w,k)},table:function(y){function w(G){var F,G=G.query;return[F=G.index,new la((F=(G=G.range).lower)!=null?F:c.MIN_KEY,(F=G.upper)!=null?F:c.MAX_KEY)]}var k=c.table(y),z=k.schema,O=z.primaryKey,U=z.indexes,Q=O.extractKey,q=O.outbound,B=O.autoIncrement&&U.filter(function(K){return K.compound&&K.keyPath.includes(O.keyPath)}),V=o(o({},k),{mutate:function(K){function F(wt){return wt="idb://".concat(h,"/").concat(y,"/").concat(wt),ht[wt]||(ht[wt]=new la)}var G,at,J,st=K.trans,ht=K.mutatedParts||(K.mutatedParts={}),bt=F(""),Tt=F(":dels"),At=K.type,zt=K.type==="deleteRange"?[K.range]:K.type==="delete"?[K.keys]:K.values.length<50?[rc(O,K).filter(function(wt){return wt}),K.values]:[],Ht=zt[0],zt=zt[1],Vt=K.trans._cache;return x(Ht)?(bt.addKeys(Ht),(At=At==="delete"||Ht.length===zt.length?Hu(Ht,Vt):null)||Tt.addKeys(Ht),(At||zt)&&(G=F,at=At,J=zt,z.indexes.forEach(function(wt){var ne=G(wt.name||"");function Zt(de){return de!=null?wt.extractKey(de):null}function re(de){wt.multiEntry&&x(de)?de.forEach(function(Fa){return ne.addKey(Fa)}):ne.addKey(de)}(at||J).forEach(function(de,Qe){var se=at&&Zt(at[Qe]),Qe=J&&Zt(J[Qe]);be(se,Qe)!==0&&(se!=null&&re(se),Qe!=null)&&re(Qe)})}))):Ht?(zt={from:(Vt=Ht.lower)!=null?Vt:c.MIN_KEY,to:(At=Ht.upper)!=null?At:c.MAX_KEY},Tt.add(zt),bt.add(zt)):(bt.add(p),Tt.add(p),z.indexes.forEach(function(wt){return F(wt.name).add(p)})),k.mutate(K).then(function(wt){return!Ht||K.type!=="add"&&K.type!=="put"||(bt.addKeys(wt.results),B&&B.forEach(function(ne){for(var Zt=K.values.map(function(se){return ne.extractKey(se)}),re=ne.keyPath.findIndex(function(se){return se===O.keyPath}),de=0,Fa=wt.results.length;de<Fa;++de)Zt[de][re]=wt.results[de];F(ne.name).addKeys(Zt)})),st.mutatedParts=Ko(st.mutatedParts||{},ht),wt})}}),X={get:function(K){return[O,new la(K.key)]},getMany:function(K){return[O,new la().addKeys(K.keys)]},count:w,query:w,openCursor:w};return g(X).forEach(function(K){V[K]=function(F){var G=Kt.subscr,at=!!G,J=Uu(Kt,k)&&oc(K,F)?F.obsSet={}:G;if(at){var st,G=function(zt){return zt="idb://".concat(h,"/").concat(y,"/").concat(zt),J[zt]||(J[zt]=new la)},ht=G(""),bt=G(":dels"),at=X[K](F),Tt=at[0],at=at[1];if((K==="query"&&Tt.isPrimaryKey&&!F.values?bt:G(Tt.name||"")).add(at),!Tt.isPrimaryKey){if(K!=="count")return st=K==="query"&&q&&F.values&&k.query(o(o({},F),{values:!1})),k[K].apply(this,arguments).then(function(zt){if(K==="query"){if(q&&F.values)return st.then(function(Zt){return Zt=Zt.result,ht.addKeys(Zt),zt});var Vt=F.values?zt.result.map(Q):zt.result;(F.values?ht:bt).addKeys(Vt)}else{var wt,ne;if(K==="openCursor")return ne=F.values,(wt=zt)&&Object.create(wt,{key:{get:function(){return bt.addKey(wt.primaryKey),wt.key}},primaryKey:{get:function(){var Zt=wt.primaryKey;return bt.addKey(Zt),Zt}},value:{get:function(){return ne&&ht.addKey(wt.primaryKey),wt.value}}})}return zt});bt.add(p)}}return k[K].apply(this,arguments)}}),V}})}};function Vu(c,h,p){var y;return p.numFailures===0?h:h.type==="deleteRange"||(y=h.keys?h.keys.length:"values"in h&&h.values?h.values.length:1,p.numFailures===y)?null:(y=o({},h),x(y.keys)&&(y.keys=y.keys.filter(function(w,k){return!(k in p.failures)})),"values"in y&&x(y.values)&&(y.values=y.values.filter(function(w,k){return!(k in p.failures)})),y)}function lc(c,h){return p=c,((y=h).lower===void 0||(y.lowerOpen?0<be(p,y.lower):0<=be(p,y.lower)))&&(p=c,(y=h).upper===void 0||(y.upperOpen?be(p,y.upper)<0:be(p,y.upper)<=0));var p,y}function qu(c,h,p,y,w,k){var z,O,U,Q,q,B,V;return!p||p.length===0||(z=h.query.index,O=z.multiEntry,U=h.query.range,Q=y.schema.primaryKey.extractKey,q=z.extractKey,B=(z.lowLevelIndex||z).extractKey,(y=p.reduce(function(X,K){var F=X,G=[];if(K.type==="add"||K.type==="put")for(var at=new la,J=K.values.length-1;0<=J;--J){var st,ht=K.values[J],bt=Q(ht);!at.hasKey(bt)&&(st=q(ht),O&&x(st)?st.some(function(Vt){return lc(Vt,U)}):lc(st,U))&&(at.addKey(bt),G.push(ht))}switch(K.type){case"add":var Tt=new la().addKeys(h.values?X.map(function(wt){return Q(wt)}):X),F=X.concat(h.values?G.filter(function(wt){return wt=Q(wt),!Tt.hasKey(wt)&&(Tt.addKey(wt),!0)}):G.map(function(wt){return Q(wt)}).filter(function(wt){return!Tt.hasKey(wt)&&(Tt.addKey(wt),!0)}));break;case"put":var At=new la().addKeys(K.values.map(function(wt){return Q(wt)}));F=X.filter(function(wt){return!At.hasKey(h.values?Q(wt):wt)}).concat(h.values?G:G.map(function(wt){return Q(wt)}));break;case"delete":var Ht=new la().addKeys(K.keys);F=X.filter(function(wt){return!Ht.hasKey(h.values?Q(wt):wt)});break;case"deleteRange":var zt=K.range;F=X.filter(function(wt){return!lc(Q(wt),zt)})}return F},c))===c)?c:(V=function(X,K){return be(B(X),B(K))||be(Q(X),Q(K))},y.sort(h.direction==="prev"||h.direction==="prevunique"?function(X,K){return V(K,X)}:V),h.limit&&h.limit<1/0&&(y.length>h.limit?y.length=h.limit:c.length===h.limit&&y.length<h.limit&&(w.dirty=!0)),k?Object.freeze(y):y)}function Iu(c,h){return be(c.lower,h.lower)===0&&be(c.upper,h.upper)===0&&!!c.lowerOpen==!!h.lowerOpen&&!!c.upperOpen==!!h.upperOpen}function Yh(c,h){return((p,y,w,k)=>{if(p===void 0)return y!==void 0?-1:0;if(y===void 0)return 1;if((p=be(p,y))===0){if(w&&k)return 0;if(w)return 1;if(k)return-1}return p})(c.lower,h.lower,c.lowerOpen,h.lowerOpen)<=0&&0<=((p,y,w,k)=>{if(p===void 0)return y!==void 0?1:0;if(y===void 0)return-1;if((p=be(p,y))===0){if(w&&k)return 0;if(w)return-1;if(k)return 1}return p})(c.upper,h.upper,c.upperOpen,h.upperOpen)}function Ph(c,h,p,y){c.subscribers.add(p),y.addEventListener("abort",function(){var w,k;c.subscribers.delete(p),c.subscribers.size===0&&(w=c,k=h,setTimeout(function(){w.subscribers.size===0&&Bt(k,w)},3e3))})}var Xh={stack:"dbcore",level:0,name:"Cache",create:function(c){var h=c.schema.name;return o(o({},c),{transaction:function(p,y,w){var k,z,O=c.transaction(p,y,w);return y==="readwrite"&&(w=(k=new AbortController).signal,O.addEventListener("abort",(z=function(U){return function(){if(k.abort(),y==="readwrite"){for(var Q=new Set,q=0,B=p;q<B.length;q++){var V=B[q],X=_r["idb://".concat(h,"/").concat(V)];if(X){var K=c.table(V),F=X.optimisticOps.filter(function(wt){return wt.trans===O});if(O._explicit&&U&&O.mutatedParts)for(var G=0,at=Object.values(X.queries.query);G<at.length;G++)for(var J=0,st=(Tt=at[G]).slice();J<st.length;J++)ec((At=st[J]).obsSet,O.mutatedParts)&&(Bt(Tt,At),At.subscribers.forEach(function(wt){return Q.add(wt)}));else if(0<F.length){X.optimisticOps=X.optimisticOps.filter(function(wt){return wt.trans!==O});for(var ht=0,bt=Object.values(X.queries.query);ht<bt.length;ht++)for(var Tt,At,Ht,zt=0,Vt=(Tt=bt[ht]).slice();zt<Vt.length;zt++)(At=Vt[zt]).res!=null&&O.mutatedParts&&(U&&!At.dirty?(Ht=Object.isFrozen(At.res),Ht=qu(At.res,At.req,F,K,At,Ht),At.dirty?(Bt(Tt,At),At.subscribers.forEach(function(wt){return Q.add(wt)})):Ht!==At.res&&(At.res=Ht,At.promise=Lt.resolve({result:Ht}))):(At.dirty&&Bt(Tt,At),At.subscribers.forEach(function(wt){return Q.add(wt)})))}}}Q.forEach(function(wt){return wt()})}}})(!1),{signal:w}),O.addEventListener("error",z(!1),{signal:w}),O.addEventListener("complete",z(!0),{signal:w})),O},table:function(p){var y=c.table(p),w=y.schema.primaryKey;return o(o({},y),{mutate:function(k){var z,O=Kt.trans;return!w.outbound&&O.db._options.cache!=="disabled"&&!O.explicit&&O.idbtrans.mode==="readwrite"&&(z=_r["idb://".concat(h,"/").concat(p)])?(O=y.mutate(k),k.type!=="add"&&k.type!=="put"||!(50<=k.values.length||rc(w,k).some(function(U){return U==null}))?(z.optimisticOps.push(k),k.mutatedParts&&Fo(k.mutatedParts),O.then(function(U){0<U.numFailures&&(Bt(z.optimisticOps,k),(U=Vu(0,k,U))&&z.optimisticOps.push(U),k.mutatedParts)&&Fo(k.mutatedParts)}),O.catch(function(){Bt(z.optimisticOps,k),k.mutatedParts&&Fo(k.mutatedParts)})):O.then(function(U){var Q=Vu(0,o(o({},k),{values:k.values.map(function(q,B){var V;return U.failures[B]?q:(yt(V=(V=w.keyPath)!=null&&V.includes(".")?pe(q):o({},q),w.keyPath,U.results[B]),V)})}),U);z.optimisticOps.push(Q),queueMicrotask(function(){return k.mutatedParts&&Fo(k.mutatedParts)})}),O):y.mutate(k)},query:function(k){var z,O,U,Q,q,B,V;return Uu(Kt,y)&&oc("query",k)?(z=((U=Kt.trans)==null?void 0:U.db._options.cache)==="immutable",O=(U=Kt).requery,U=U.signal,B=((X,K,F,G)=>{var at=_r["idb://".concat(X,"/").concat(K)];if(!at)return[];if(!(X=at.queries[F]))return[null,!1,at,null];var J=X[(G.query?G.query.index.name:null)||""];if(!J)return[null,!1,at,null];switch(F){case"query":var st=(ht=G.direction)!=null?ht:"next",ht=J.find(function(bt){var Tt;return bt.req.limit===G.limit&&bt.req.values===G.values&&((Tt=bt.req.direction)!=null?Tt:"next")===st&&Iu(bt.req.query.range,G.query.range)});return ht?[ht,!0,at,J]:[J.find(function(bt){var Tt;return("limit"in bt.req?bt.req.limit:1/0)>=G.limit&&((Tt=bt.req.direction)!=null?Tt:"next")===st&&(!G.values||bt.req.values)&&Yh(bt.req.query.range,G.query.range)}),!1,at,J];case"count":return ht=J.find(function(bt){return Iu(bt.req.query.range,G.query.range)}),[ht,!!ht,at,J]}})(h,p,"query",k),V=B[0],Q=B[2],q=B[3],V&&B[1]?V.obsSet=k.obsSet:(B=y.query(k).then(function(X){var K=X.result;if(V&&(V.res=K),z){for(var F=0,G=K.length;F<G;++F)Object.freeze(K[F]);Object.freeze(K)}return X}).catch(function(X){return q&&V&&Bt(q,V),Promise.reject(X)}),V={obsSet:k.obsSet,promise:B,subscribers:new Set,type:"query",req:k,dirty:!1},q?q.push(V):(q=[V],(Q=Q||(_r["idb://".concat(h,"/").concat(p)]={queries:{query:{},count:{}},objs:new Map,optimisticOps:[],unsignaledParts:{}})).queries.query[k.query.index.name||""]=q)),Ph(V,q,O,U),V.promise.then(function(X){return X=qu(X.result,k,Q==null?void 0:Q.optimisticOps,y,V,z),{result:z?X:pe(X)}})):y.query(k)}})}})}};function Po(c,h){return new Proxy(c,{get:function(p,y,w){return y==="db"?h:Reflect.get(p,y,w)}})}ea.prototype.version=function(c){if(isNaN(c)||c<.1)throw new gt.Type("Given version is not a positive number");if(c=Math.round(10*c)/10,this.idbdb||this._state.isBeingOpened)throw new gt.Schema("Cannot add version when database is open");this.verno=Math.max(this.verno,c);var h=this._versions,p=h.filter(function(y){return y._cfg.version===c})[0];return p||(p=new this.Version(c),h.push(p),h.sort(Mu),p.stores({}),this._state.autoSchema=!1),p},ea.prototype._whenReady=function(c){var h=this;return this.idbdb&&(this._state.openComplete||Kt.letThrough||this._vip)?c():new Lt(function(p,y){if(h._state.openComplete)return y(new gt.DatabaseClosed(h._state.dbOpenError));if(!h._state.isBeingOpened){if(!h._state.autoOpen)return void y(new gt.DatabaseClosed);h.open().catch(Ct)}h._state.dbReadyPromise.then(p,y)}).then(c)},ea.prototype.use=function(w){var h=w.stack,p=w.create,y=w.level,w=w.name,k=(w&&this.unuse({stack:h,name:w}),this._middlewares[h]||(this._middlewares[h]=[]));return k.push({stack:h,create:p,level:y??10,name:w}),k.sort(function(z,O){return z.level-O.level}),this},ea.prototype.unuse=function(c){var h=c.stack,p=c.name,y=c.create;return h&&this._middlewares[h]&&(this._middlewares[h]=this._middlewares[h].filter(function(w){return y?w.create!==y:!!p&&w.name!==p})),this},ea.prototype.open=function(){var c=this;return pr(kn,function(){return Ih(c)})},ea.prototype._close=function(){this.on.close.fire(new CustomEvent("close"));var c=this._state;if(Bi.remove(this),this.idbdb){try{this.idbdb.close()}catch{}this.idbdb=null}c.isBeingOpened||(c.dbReadyPromise=new Lt(function(h){c.dbReadyResolve=h}),c.openCanceller=new Lt(function(h,p){c.cancelOpen=p}))},ea.prototype.close=function(h){var h=(h===void 0?{disableAutoOpen:!0}:h).disableAutoOpen,p=this._state;h?(p.isBeingOpened&&p.cancelOpen(new gt.DatabaseClosed),this._close(),p.autoOpen=!1,p.dbOpenError=new gt.DatabaseClosed):(this._close(),p.autoOpen=this._options.autoOpen||p.isBeingOpened,p.openComplete=!1,p.dbOpenError=null)},ea.prototype.delete=function(c){var h=this,p=(c===void 0&&(c={disableAutoOpen:!0}),0<arguments.length&&typeof arguments[0]!="object"),y=this._state;return new Lt(function(w,k){function z(){h.close(c);var O=h._deps.indexedDB.deleteDatabase(h.name);O.onsuccess=Ie(function(){var U,Q,q;U=h._deps,Q=h.name,Oa(q=U.indexedDB)||Q===Hs||qo(q,U.IDBKeyRange).delete(Q).catch(Ct),w()}),O.onerror=Xe(k),O.onblocked=h._fireOnBlocked}if(p)throw new gt.InvalidArgument("Invalid closeOptions argument to db.delete()");y.isBeingOpened?y.dbReadyPromise.then(z):z()})},ea.prototype.backendDB=function(){return this.idbdb},ea.prototype.isOpen=function(){return this.idbdb!==null},ea.prototype.hasBeenClosed=function(){var c=this._state.dbOpenError;return c&&c.name==="DatabaseClosed"},ea.prototype.hasFailed=function(){return this._state.dbOpenError!==null},ea.prototype.dynamicallyOpened=function(){return this._state.autoSchema},Object.defineProperty(ea.prototype,"tables",{get:function(){var c=this;return g(this._allTables).map(function(h){return c._allTables[h]})},enumerable:!1,configurable:!0}),ea.prototype.transaction=function(){var c=(function(h,p,y){var w=arguments.length;if(w<2)throw new gt.InvalidArgument("Too few arguments");for(var k=new Array(w-1);--w;)k[w-1]=arguments[w];return y=k.pop(),[h,ft(k),y]}).apply(this,arguments);return this._transaction.apply(this,c)},ea.prototype._transaction=function(c,h,p){var y,w,k=this,z=Kt.trans,O=(z&&z.db===this&&c.indexOf("!")===-1||(z=null),c.indexOf("?")!==-1);c=c.replace("!","").replace("?","");try{if(w=h.map(function(Q){if(Q=Q instanceof k.Table?Q.name:Q,typeof Q!="string")throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");return Q}),c=="r"||c===En)y=En;else{if(c!="rw"&&c!=ga)throw new gt.InvalidArgument("Invalid transaction mode: "+c);y=ga}if(z){if(z.mode===En&&y===ga){if(!O)throw new gt.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");z=null}z&&w.forEach(function(Q){if(z&&z.storeNames.indexOf(Q)===-1){if(!O)throw new gt.SubTransaction("Table "+Q+" not included in parent transaction.");z=null}}),O&&z&&!z.active&&(z=null)}}catch(Q){return z?z._promise(null,function(q,B){B(Q)}):Ye(Q)}var U=(function Q(q,B,V,X,K){return Lt.resolve().then(function(){var J=Kt.transless||Kt,F=q._createTransaction(B,V,q._dbSchema,X),J=(F.explicit=!0,{trans:F,transless:J});if(X)F.idbtrans=X.idbtrans;else try{F.create(),F.idbtrans._explicit=!0,q._state.PR1398_maxLoop=3}catch(st){return st.name===vt.InvalidState&&q.isOpen()&&0<--q._state.PR1398_maxLoop?(console.warn("Dexie: Need to reopen db"),q.close({disableAutoOpen:!1}),q.open().then(function(){return Q(q,B,V,null,K)})):Ye(st)}var G,at=Ge(K),J=(at&&Qn(),Lt.follow(function(){var st;(G=K.call(F,F))&&(at?(st=di.bind(null,null),G.then(st,st)):typeof G.next=="function"&&typeof G.throw=="function"&&(G=Go(G)))},J));return(G&&typeof G.then=="function"?Lt.resolve(G).then(function(st){return F.active?st:Ye(new gt.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"))}):J.then(function(){return G})).then(function(st){return X&&F._resolve(),F._completion.then(function(){return st})}).catch(function(st){return F._reject(st),Ye(st)})})}).bind(null,this,y,w,z,p);return z?z._promise(y,U,"lock"):Kt.trans?pr(Kt.transless,function(){return k._whenReady(U)}):this._whenReady(U)},ea.prototype.table=function(c){if(_(this._allTables,c))return this._allTables[c];throw new gt.InvalidTable("Table ".concat(c," does not exist"))};var vi=ea;function ea(c,h){var p,y,w,k,z,O=this,U=(this._middlewares={},this.verno=0,ea.dependencies),U=(this._options=h=o({addons:ea.addons,autoOpen:!0,indexedDB:U.indexedDB,IDBKeyRange:U.IDBKeyRange,cache:"cloned",maxConnections:1e3},h),this._deps={indexedDB:h.indexedDB,IDBKeyRange:h.IDBKeyRange},h.addons),Q=(this._dbSchema={},this._versions=[],this._storeNames=[],this._allTables={},this.idbdb=null,this._novip=this,{dbOpenError:null,isBeingOpened:!1,onReadyBeingFired:null,openComplete:!1,dbReadyResolve:Ct,dbReadyPromise:null,cancelOpen:Ct,openCanceller:null,autoSchema:!0,PR1398_maxLoop:3,autoOpen:h.autoOpen}),q=(Q.dbReadyPromise=new Lt(function(B){Q.dbReadyResolve=B}),Q.openCanceller=new Lt(function(B,V){Q.cancelOpen=V}),this._state=Q,this.name=c,this.on=Pe(this,"populate","blocked","versionchange","close",{ready:[rr,Ct]}),this.once=function(B,V){var X=function(){for(var K=[],F=0;F<arguments.length;F++)K[F]=arguments[F];O.on(B).unsubscribe(X),V.apply(O,K)};return O.on(B,X)},this.on.ready.subscribe=St(this.on.ready.subscribe,function(B){return function(V,X){ea.vip(function(){var K,F=O._state;F.openComplete?(F.dbOpenError||Lt.resolve().then(V),X&&B(V)):F.onReadyBeingFired?(F.onReadyBeingFired.push(V),X&&B(V)):(B(V),K=O,X||B(function G(){K.on.ready.unsubscribe(V),K.on.ready.unsubscribe(G)}))})}}),this.Collection=(p=this,Pr(Vh.prototype,function(G,F){this.db=p;var X=mr,K=null;if(F)try{X=F()}catch(J){K=J}var F=G._ctx,G=F.table,at=G.hook.reading.fire;this._ctx={table:G,index:F.index,isPrimKey:!F.index||G.schema.primKey.keyPath&&F.index===G.schema.primKey.name,range:X,keysOnly:!1,dir:"next",unique:"",algorithm:null,filter:null,replayFilter:null,justLimit:!0,isMatch:null,offset:0,limit:1/0,error:K,or:F.or,valueMapper:at!==we?at:null}})),this.Table=(y=this,Pr(Yr.prototype,function(B,V,X){this.db=y,this._tx=X,this.name=B,this.schema=V,this.hook=y._allTables[B]?y._allTables[B].hook:Pe(null,{creating:[an,Ct],reading:[ba,we],updating:[ce,Ct],deleting:[sa,Ct]})})),this.Transaction=(w=this,Pr(ju.prototype,function(B,V,X,K,F){var G=this;B!=="readonly"&&V.forEach(function(at){at=(at=X[at])==null?void 0:at.yProps,at&&(V=V.concat(at.map(function(J){return J.updatesTable})))}),this.db=w,this.mode=B,this.storeNames=V,this.schema=X,this.chromeTransactionDurability=K,this.idbtrans=null,this.on=Pe(this,"complete","error","abort"),this.parent=F||null,this.active=!0,this._reculock=0,this._blockedFuncs=[],this._resolve=null,this._reject=null,this._waitingFor=null,this._waitingQueue=null,this._spinCount=0,this._completion=new Lt(function(at,J){G._resolve=at,G._reject=J}),this._completion.then(function(){G.active=!1,G.on.complete.fire()},function(at){var J=G.active;return G.active=!1,G.on.error.fire(at),G.parent?G.parent._reject(at):J&&G.idbtrans&&G.idbtrans.abort(),Ye(at)})})),this.Version=(k=this,Pr(Lu.prototype,function(B){this.db=k,this._cfg={version:B,storesSource:null,dbschema:{},tables:{},contentUpgrade:null}})),this.WhereClause=(z=this,Pr(Zl.prototype,function(B,V,X){if(this.db=z,this._ctx={table:B,index:V===":id"?null:V,or:X},this._cmp=this._ascending=be,this._descending=function(K,F){return be(F,K)},this._max=function(K,F){return 0<be(K,F)?K:F},this._min=function(K,F){return be(K,F)<0?K:F},this._IDBKeyRange=z._deps.IDBKeyRange,!this._IDBKeyRange)throw new gt.MissingAPI})),this.on("versionchange",function(B){0<B.newVersion?console.warn("Another connection wants to upgrade database '".concat(O.name,"'. Closing db now to resume the upgrade.")):console.warn("Another connection wants to delete database '".concat(O.name,"'. Closing db now to resume the delete request.")),O.close({disableAutoOpen:!1})}),this.on("blocked",function(B){!B.newVersion||B.newVersion<B.oldVersion?console.warn("Dexie.delete('".concat(O.name,"') was blocked")):console.warn("Upgrade '".concat(O.name,"' blocked by other connection holding version ").concat(B.oldVersion/10))}),this._maxKey=Xr(h.IDBKeyRange),this._createTransaction=function(B,V,X,K){return new O.Transaction(B,V,X,O._options.chromeTransactionDurability,K)},this._fireOnBlocked=function(B){O.on("blocked").fire(B),Bi.toArray().filter(function(V){return V.name===O.name&&V!==O&&!V._state.vcFired}).map(function(V){return V.on("versionchange").fire(B)})},this.use(Fh),this.use(Xh),this.use(Gh),this.use(Kh),this.use(sc),new Proxy(this,{get:function(B,V,X){var K;return V==="_vip"||(V==="table"?function(F){return Po(O.table(F),q)}:(K=Reflect.get(B,V,X))instanceof Yr?Po(K,q):V==="tables"?K.map(function(F){return Po(F,q)}):V==="_createTransaction"?function(){return Po(K.apply(this,arguments),q)}:K)}}));this.vip=q,U.forEach(function(B){return B(O)})}var Jr,ti=typeof Symbol<"u"&&"observable"in Symbol?Symbol.observable:"@@observable",Qh=(Xo.prototype.subscribe=function(c,h,p){return this._subscribe(c&&typeof c!="function"?c:{next:c,error:h,complete:p})},Xo.prototype[ti]=function(){return this},Xo);function Xo(c){this._subscribe=c}try{Jr={indexedDB:f.indexedDB||f.mozIndexedDB||f.webkitIndexedDB||f.msIndexedDB,IDBKeyRange:f.IDBKeyRange||f.webkitIDBKeyRange}}catch{Jr={indexedDB:null,IDBKeyRange:null}}function cc(c){var h,p=!1,y=new Qh(function(w){var k=Ge(c),z,O=!1,U={},Q={},q={get closed(){return O},unsubscribe:function(){O||(O=!0,z&&z.abort(),B&&on.storagemutated.unsubscribe(K))}},B=(w.start&&w.start(q),!1),V=function(){return Mo(F)};function X(){return ec(Q,U)}var K=function(G){Ko(U,G),X()&&V()},F=function(){var G,at,J;!O&&Jr.indexedDB&&(U={},G={},z&&z.abort(),z=new AbortController,J=(st=>{var ht=Pn();try{k&&Qn();var bt=Cn(c,st);return bt=k?bt.finally(di):bt}finally{ht&&xa()}})(at={subscr:G,signal:z.signal,requery:V,querier:c,trans:null}),B||(on.storagemutated.subscribe(K),B=!0),Promise.resolve(J).then(function(st){p=!0,h=st,O||at.signal.aborted||(X()||(Q=G,X())?V():(U={},Mo(function(){return!O&&w.next&&w.next(st)})))},function(st){p=!1,["DatabaseClosedError","AbortError"].includes(st==null?void 0:st.name)||O||Mo(function(){O||w.error&&w.error(st)})}))};return setTimeout(V,0),q});return y.hasValue=function(){return p},y.getValue=function(){return h},y}var Ui=vi;function Qo(c){var h=ln;try{ln=!0,on.storagemutated.fire(c),nc(c,!0)}finally{ln=h}}T(Ui,o(o({},ma),{delete:function(c){return new Ui(c,{addons:[]}).delete()},exists:function(c){return new Ui(c,{addons:[]}).open().then(function(h){return h.close(),!0}).catch("NoSuchDatabaseError",function(){return!1})},getDatabaseNames:function(c){try{return h=Ui.dependencies,p=h.indexedDB,h=h.IDBKeyRange,(Oa(p)?Promise.resolve(p.databases()).then(function(y){return y.map(function(w){return w.name}).filter(function(w){return w!==Hs})}):qo(p,h).toCollection().primaryKeys()).then(c)}catch{return Ye(new gt.MissingAPI)}var h,p},defineClass:function(){return function(c){S(this,c)}},ignoreTransaction:function(c){return Kt.trans?pr(Kt.transless||kn,c):c()},vip:Jn,async:function(c){return function(){try{var h=Go(c.apply(this,arguments));return h&&typeof h.then=="function"?h:Lt.resolve(h)}catch(p){return Ye(p)}}},spawn:function(c,h,p){try{var y=Go(c.apply(p,h||[]));return y&&typeof y.then=="function"?y:Lt.resolve(y)}catch(w){return Ye(w)}},currentTransaction:{get:function(){return Kt.trans||null}},waitFor:function(c,h){return c=Lt.resolve(typeof c=="function"?Ui.ignoreTransaction(c):c).timeout(h||6e4),Kt.trans?Kt.trans.waitFor(c):c},Promise:Lt,debug:{get:function(){return Na},set:function(c){Rs(c)}},derive:W,extend:S,props:T,override:St,Events:Pe,on,liveQuery:cc,extendObservabilitySet:Ko,getByKeyPath:kt,setByKeyPath:yt,delByKeyPath:function(c,h){typeof h=="string"?yt(c,h,void 0):"length"in h&&[].map.call(h,function(p){yt(c,p,void 0)})},shallowClone:pt,deepClone:pe,getObjectDiff:ic,cmp:be,asap:dt,minKey:-1/0,addons:[],connections:{get:Bi.toArray},errnames:vt,dependencies:Jr,cache:_r,semVer:"4.4.6",version:"4.4.6".split(".").map(function(c){return parseInt(c)}).reduce(function(c,h,p){return c+h/Math.pow(10,2*p)})})),Ui.maxKey=Xr(Ui.dependencies.IDBKeyRange),typeof dispatchEvent<"u"&&typeof addEventListener<"u"&&(on(Is,function(c){ln||(c=new CustomEvent(Ks,{detail:c}),ln=!0,dispatchEvent(c),ln=!1)}),addEventListener(Ks,function(c){c=c.detail,ln||Qo(c)}));var Sr,ln=!1,Ku=function(){};return typeof BroadcastChannel<"u"&&((Ku=function(){(Sr=new BroadcastChannel(Ks)).onmessage=function(c){return c.data&&Qo(c.data)}})(),typeof Sr.unref=="function"&&Sr.unref(),on(Is,function(c){ln||Sr.postMessage(c)})),typeof addEventListener<"u"&&(addEventListener("pagehide",function(c){if(!vi.disableBfCache&&c.persisted){Na&&console.debug("Dexie: handling persisted pagehide"),Sr!=null&&Sr.close();for(var h=0,p=Bi.toArray();h<p.length;h++)p[h].close({disableAutoOpen:!1})}}),addEventListener("pageshow",function(c){!vi.disableBfCache&&c.persisted&&(Na&&console.debug("Dexie: handling persisted pageshow"),Ku(),Qo({all:new la(-1/0,[[]])}))})),Lt.rejectionMapper=function(c,h){return!c||c instanceof L||c instanceof TypeError||c instanceof SyntaxError||!c.name||!Nt[c.name]?c:(h=new Nt[c.name](h||c.message,c),"stack"in c&&R(h,"stack",{get:function(){return this.inner.stack}}),h)},Rs(Na),o(vi,Object.freeze({__proto__:null,DEFAULT_MAX_CONNECTIONS:1e3,Dexie:vi,Entity:Nu,PropModification:Oi,RangeSet:la,add:function(c){return new Oi({add:c})},cmp:be,default:vi,liveQuery:cc,mergeRanges:wr,rangesOverlap:Io,remove:function(c){return new Oi({remove:c})},replacePrefix:function(c,h){return new Oi({replacePrefix:[c,h]})}}),{default:vi}),vi})})(uh)),uh.exports}var w_=x_();const Tm=Jy(w_),Zb=Symbol.for("Dexie"),mh=globalThis[Zb]||(globalThis[Zb]=Tm);if(Tm.semVer!==mh.semVer)throw new Error(`Two different versions of Dexie loaded in the same app: ${Tm.semVer} and ${mh.semVer}`);const{liveQuery:PA,mergeRanges:XA,rangesOverlap:QA,RangeSet:ZA,cmp:WA,Entity:JA,PropModification:tE,replacePrefix:eE,add:aE,remove:nE,DexieYProvider:iE}=mh;class __ extends mh{constructor(){super("korean-srs");Cs(this,"words");Cs(this,"categories");Cs(this,"reviews");Cs(this,"sources");Cs(this,"packs");Cs(this,"achievements");Cs(this,"progression");this.version(1).stores({words:"&id, korean, categoryId, nextReviewAt, createdAt",categories:"&id, name, createdAt",reviews:"++id, wordId, dateString, timestamp"}),this.version(2).stores({words:"&id, korean, categoryId, sourceId, nextReviewAt, createdAt",categories:"&id, name, createdAt",reviews:"++id, wordId, dateString, timestamp",sources:"&id, type, artistId, title, createdAt",packs:"&id, sourceId, difficulty, createdAt",achievements:"&id, earnedAt"}),this.version(3).stores({words:"&id, korean, categoryId, sourceId, nextReviewAt, createdAt",categories:"&id, name, createdAt",reviews:"++id, wordId, dateString, timestamp",sources:"&id, type, artistId, title, createdAt",packs:"&id, sourceId, difficulty, createdAt",achievements:"&id, earnedAt",progression:"&id"})}}const ke=new __;function Dl(){return typeof crypto<"u"&&"randomUUID"in crypto?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,a=>{const i=Math.random()*16|0;return(a==="x"?i:i&3|8).toString(16)})}const S_=[{name:"Основы",colorHex:"#E53935",emoji:"📌"},{name:"Еда",colorHex:"#FB8C00",emoji:"🍱"},{name:"Путешествия",colorHex:"#00897B",emoji:"✈️"},{name:"Работа",colorHex:"#1E88E5",emoji:"💼"},{name:"Учёба",colorHex:"#8E24AA",emoji:"📚"},{name:"Общение",colorHex:"#43A047",emoji:"💬"},{name:"Эмоции",colorHex:"#F06292",emoji:"😊"},{name:"Природа",colorHex:"#558B2F",emoji:"🌿"}],t1=[{korean:"초",translation:"секунда",transcription:"секундо",categoryName:"Основы"},{korean:"차",translation:"чай",transcription:"чай",categoryName:"Еда"},{korean:"커피",translation:"кофе",transcription:"кофе",categoryName:"Еда"},{korean:"오후",translation:"после полудня",transcription:"после полудня (P.M.)",categoryName:"Основы"},{korean:"호주",translation:"Австралия",transcription:"Австралия",categoryName:"Путешествия"},{korean:"코코아",translation:"какао",transcription:"какао",categoryName:"Еда"},{korean:"포도",translation:"виноград",transcription:"виноград",categoryName:"Еда"},{korean:"스키",translation:"катание на лыжах",transcription:"катание на лыжах",categoryName:"Основы"},{korean:"터키",translation:"Турция",transcription:"Турция",categoryName:"Путешествия"},{korean:"페루",translation:"Перу",transcription:"Перу",categoryName:"Путешествия"},{korean:"기차",translation:"поезд",transcription:"поезд",categoryName:"Путешествия"},{korean:"모스크바",translation:"Москва",transcription:"Москва",categoryName:"Путешествия"},{korean:"콩",translation:"зернышки / фасоль",transcription:"зернышки",categoryName:"Еда"},{korean:"밥",translation:"рис / еда",transcription:"рис",categoryName:"Еда"},{korean:"한문",translation:"1 минута",transcription:"1 минута",categoryName:"Основы"},{korean:"자동차",translation:"автомобиль / машина",transcription:"автомобиль",categoryName:"Путешествия"},{korean:"지하철",translation:"метро",transcription:"подвал / метро",categoryName:"Путешествия"},{korean:"인천",translation:"Инчхон",transcription:"Инчхон",categoryName:"Путешествия"},{korean:"프랑스",translation:"Франция",transcription:"Франция",categoryName:"Путешествия"}];function k_(a){const i=a.trim();return t1.find(s=>s.korean===i)}const C_=["g","kk","n","d","tt","r","m","b","pp","s","ss","","j","jj","ch","k","t","p","h"],A_=["a","ae","ya","yae","eo","e","yeo","ye","o","wa","wae","oe","yo","u","wo","we","wi","yu","eu","ui","i"],E_=["","k","k","ks","n","nj","nh","t","l","lg","lm","lb","ls","lt","lp","lh","m","p","bs","s","ss","ng","j","ch","k","t","p","h"];function du(a){let i="";for(const s of a){const o=s.codePointAt(0);if(o!==void 0)if(o>=44032&&o<=55203){const d=o-44032,f=Math.floor(d/588),g=Math.floor(d%588/28),x=d%28;i+=C_[f]??"",i+=A_[g]??"",i+=E_[x]??""}else i+=s}return i}function T_(a){return Array.from(a).some(i=>{const s=i.codePointAt(0)??0;return s>=44032&&s<=55203||s>=12593&&s<=12686})}const e1="reward_threshold",a1="gemini_proxy_url",n1="theme_id",i1="show_romaja",r1="greeting_",s1="voice_card",o1="voice_listen",l1="color_theme",z_="system";function c1(){try{const a=localStorage.getItem(l1);if(a==="light"||a==="dark"||a==="system")return a}catch{}return z_}function N_(a){try{localStorage.setItem(l1,a)}catch{}}function u1(){const a=c1();return a==="light"?"light":a==="dark"||typeof window<"u"&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Pm(){try{const a=u1();document.documentElement.dataset.colorTheme=a,document.documentElement.classList.toggle("sl-theme-dark",a==="dark"),document.documentElement.classList.toggle("sl-theme-light",a!=="dark")}catch{}}const O_="mentor",j_="energetic",d1=5,D_="bts",zm="https://vercel-proxy-zeta-fawn.vercel.app/api/gemini";function h1(){try{const a=Number(localStorage.getItem(e1));if(Number.isInteger(a)&&a>=1)return a}catch{}return d1}function R_(a){try{const i=Math.max(1,Math.floor(a));localStorage.setItem(e1,String(i))}catch{}}function f1(){try{const a=localStorage.getItem(a1);return a===null?zm:a.trim()}catch{return zm}}function M_(a){try{localStorage.setItem(a1,a.trim())}catch{}}function kh(){try{const a=localStorage.getItem(n1);if(a)return a.trim()}catch{}return D_}function $_(a){try{localStorage.setItem(n1,a.trim())}catch{}}function L_(){try{return localStorage.getItem(i1)==="1"}catch{}return!1}function B_(a){try{localStorage.setItem(i1,a?"1":"0")}catch{}}function H_(a){try{const i=localStorage.getItem(r1+a);if(i&&i.trim())return i.trim()}catch{}return null}function U_(a,i){try{localStorage.setItem(r1+a,i.trim())}catch{}}function p1(a,i){try{const s=localStorage.getItem(a);if(s&&s.trim())return s.trim()}catch{}return i}function m1(a,i){try{localStorage.setItem(a,i.trim())}catch{}}function V_(){return p1(s1,O_)}function q_(a){m1(s1,a)}function I_(){return p1(o1,j_)}function K_(a){m1(o1,a)}const F_=[{id:"rm",artistName:"RM",imageName:"bts_rm",russian:"Каждый день — шанс стать собой",korean:"매일은 더 나다운 내가 될 기회야"},{id:"jin",artistName:"Jin",imageName:"bts_jin",russian:"Ты уже достоин любви — просто живи",korean:"너는 이미 사랑받을 자격이 있어"},{id:"suga",artistName:"SUGA",imageName:"bts_suga",russian:"Даже маленький шаг — это уже прогресс",korean:"작은 한 걸음도 이미 성장이야"},{id:"jhope",artistName:"j-hope",imageName:"bts_jhope",russian:"Начни с улыбки — путь станет светлее",korean:"미소부터 시작하면 길이 밝아져"},{id:"jimin",artistName:"Jimin",imageName:"bts_jimin",russian:"Будь мягче к себе и смелее вперёд",korean:"자신에게는 다정하게, 앞으로는 용기 있게"},{id:"v",artistName:"V",imageName:"bts_v",russian:"Иди своим ритмом — он тоже верный",korean:"네 리듬대로 가도 괜찮아"},{id:"jungkook",artistName:"Jungkook",imageName:"bts_jungkook",russian:"Ещё одна попытка — и ты уже ближе",korean:"한 번 더 하면 이미 더 가까워져"}],G_=["bts_jhope_01","bts_jhope_02","bts_jhope_smile","bts_jimin_01","bts_jimin_02","bts_jimin_concert","bts_jin_black_swan","bts_jin_idol","bts_jin_life_goes_on","bts_jk_please_wait","bts_jungkook_01","bts_jungkook_02","bts_jungkook_03","bts_rm_black_swan","bts_rm_life_goes_on","bts_rm_wink","bts_suga_01","bts_suga_02","bts_suga_dna","bts_v_01","bts_v_02","bts_v_life_goes_on"],Y_=[{id:"bangchan",artistName:"Bang Chan",imageName:"skz_bangchan",russian:"Ты поднимаешься с каждым новым днём",korean:"새로운 날마다 넌 한 걸음씩 올라가고 있어"},{id:"leeknow",artistName:"Lee Know",imageName:"skz_leeknow",russian:"Не торопись — всё придёт в свой срок",korean:"서두르지 마, 모든 게 제때 온다고"},{id:"changbin",artistName:"Changbin",imageName:"skz_changbin",russian:"Попробуй ещё раз — и не сдавайся",korean:"다시 도전해 봐, 포기하지 마"},{id:"hyunjin",artistName:"Hyunjin",imageName:"skz_hyunjin",russian:"Даже в темноте ты сияешь",korean:"어둠 속에서도 넌 빛나고 있어"},{id:"han",artistName:"HAN",imageName:"skz_han",russian:"Сегодня ты тоже молодец",korean:"오늘도 넌 정말 잘하고 있어"},{id:"felix",artistName:"Felix",imageName:"skz_felix",russian:"Не бойся быть собой",korean:"너 자신을 있는 그대로, 두려워하지 마"},{id:"seungmin",artistName:"Seungmin",imageName:"skz_seungmin",russian:"Один шаг за другим — и ты справишься",korean:"하나씩 천천히, 넌 할 수 있어"},{id:"in",artistName:"I.N",imageName:"skz_in",russian:"Улыбнись — ты на верном пути",korean:"미소 지어 봐, 넌 올바른 길에 있어"}],P_=["skz_bangchan_01","skz_leeknow_01","skz_changbin_01","skz_hyunjin_01","skz_han_01","skz_felix_01","skz_seungmin_01","skz_in_01"],Nm=[{id:"bts",name:"BTS",emoji:"💜",greetings:F_,gifNames:G_,statusGifName:"bts_jk_please_wait",gifDir:"bts-gifs",portraitDir:"portraits"},{id:"stray-kids",name:"Stray Kids",emoji:"🖤",greetings:Y_,gifNames:P_,statusGifName:"skz_status",gifDir:"skz-gifs",portraitDir:"skz-portraits"}];function Xm(a){return Nm.find(i=>i.id===a)??Nm[0]}function tr(){return Xm(kh())}function X_(a){const i=tr().greetings;return i.find(s=>s.id===a)??i[0]}function Qm(a){const i=tr().greetings,s=a?i.filter(o=>o.id!==a.id):i;return s[Math.floor(Math.random()*s.length)]??i[0]}function Q_(){const a=tr().gifNames;return a[Math.floor(Math.random()*a.length)]??a[0]}function Zm(a){return`/korean-srs/${tr().gifDir}/${a}.gif`}function Jc(a){return`/korean-srs/${tr().portraitDir}/${a}.png`}const om=[{type:"song",emoji:"🎵",label:"Песня",koreanLabel:"노래"},{type:"post",emoji:"📱",label:"Пост",koreanLabel:"게시글"},{type:"variety",emoji:"🎬",label:"Шоу",koreanLabel:"예능"},{type:"fanchant",emoji:"📣",label:"Фанчант",koreanLabel:"떼창"},{type:"textbook",emoji:"📚",label:"Учебник",koreanLabel:"교재"},{type:"user",emoji:"✍️",label:"Своё",koreanLabel:"직접"}];function Z_(a){return om.find(i=>i.type===a)??om[om.length-1]}function Ch(a){var o;if(!a)return"";const i=Z_(a.type),s=(o=a.artistId)!=null&&o.trim()?` · ${a.artistId}`:"";return`${i.emoji} ${a.title}${s}`}const W_={rm:"Лидер",jin:"Вокал",suga:"Рэп",jhope:"Танцы",jimin:"Вокал",v:"Вокал",jungkook:"Вокал",bangchan:"Лидер",leeknow:"Танцы",changbin:"Рэп",hyunjin:"Танцы",han:"Рэп",felix:"Рэп",seungmin:"Вокал",in:"Вокал"};function J_(a){return Xm(a).greetings.map((s,o)=>({id:s.id,stageName:s.artistName,koreanName:"",imageName:s.imageName,colorHex:"",role:W_[s.id]??"",tierThreshold:(o+1)*200}))}function g1(){return J_(tr().id)}const t2=[{themeId:"bts",type:"song",title:"Spring Day",koreanTitle:"봄날",album:"You Never Walk Alone"},{themeId:"bts",type:"song",title:"Butter",koreanTitle:"Butter",album:"Butter"},{themeId:"bts",type:"song",title:"Dynamite",koreanTitle:"Dynamite",album:"Dynamite"},{themeId:"bts",type:"variety",title:"Run BTS!",koreanTitle:"달려라 방탄",album:null},{themeId:"bts",type:"fanchant",title:'Фанчант "I Purple You"',koreanTitle:"보라해",album:null},{themeId:"stray-kids",type:"song",title:"MANIAC",koreanTitle:"MANIAC",album:"ODDINARY"},{themeId:"stray-kids",type:"song",title:"S-Class",koreanTitle:"특",album:"5-STAR"},{themeId:"stray-kids",type:"variety",title:"SKZ-CODE",koreanTitle:"SKZ CODE",album:null}];function e2(){const a=Date.now();return t2.map((i,s)=>({id:`src_${i.themeId}_${s}`,type:i.type,artistId:null,title:i.title,koreanTitle:i.koreanTitle,album:i.album,snippet:null,createdAt:a+s}))}function a2(a){const i=tr().id;return a.filter(s=>s.id.startsWith(`src_${i}_`)).sort((s,o)=>s.createdAt-o.createdAt)}function n2(){return[{id:"seed-bts-springday",title:"BTS — Spring Day",subtitle:"Мы встретимся снова · 다시 만날 거야",emoji:"🌸",colorHex:"#FF8A65",difficulty:"Начальный",sourceId:null,wordDefs:[{korean:"봄",translation:"весна"},{korean:"하루",translation:"одни сутки, день"},{korean:"여행",translation:"путешествие"},{korean:"기억",translation:"воспоминание, память"},{korean:"지나가다",translation:"проходить, проходить мимо"},{korean:"기다리다",translation:"ждать"},{korean:"사랑",translation:"любовь"}],createdAt:1},{id:"seed-bts-butter",title:"BTS — Butter",subtitle:"Мягко, как масло · 버터처럼",emoji:"🧈",colorHex:"#FFD54F",difficulty:"Начальный",sourceId:null,wordDefs:[{korean:"춤",translation:"танец"},{korean:"노래",translation:"песня"},{korean:"춤추다",translation:"танцевать",exampleSentence:"춤을 춰요",exampleTranslation:"Танцую"},{korean:"좋다",translation:"быть хорошим, нравиться"},{korean:"자신감",translation:"уверенность"},{korean:"말",translation:"слово, конь (разный ханжа)"},{korean:"서로",translation:"друг друга, взаимно"},{korean:"빛",translation:"свет"}],createdAt:2},{id:"seed-bts-dynamite",title:"BTS — Dynamite",subtitle:"Вспышка энергии · 다이너마이트",emoji:"🕺",colorHex:"#E040FB",difficulty:"Начальный",sourceId:null,wordDefs:[{korean:"자유",translation:"свобода"},{korean:"기분",translation:"настроение, самочувствие"},{korean:"비트",translation:"бит (ритм)"},{korean:"앵콜",translation:"бис (encore)"},{korean:"빛나다",translation:"сиять, сверкать"},{korean:"halo",translation:"ореол"},{korean:"halo가 빛나요",translation:"Ореол сияет"}],createdAt:3},{id:"seed-skz-maniac",title:"Stray Kids — MANIAC",subtitle:"Не будь обычным · 일반적이지 마",emoji:"🪲",colorHex:"#7C4DFF",difficulty:"Начальный",sourceId:null,wordDefs:[{korean:"이상",translation:"ненормальный, странный"},{korean:"다르다",translation:"быть другим, отличаться"},{korean:"미치다",translation:"сойти с ума, безумный"},{korean:"자기",translation:"себя, ты (ласково)"},{korean:"느끼다",translation:"ощущать, чувствовать"},{korean:"rules",translation:"правила"},{korean:"camouflage",translation:"маскировка"}],createdAt:4},{id:"seed-skz-sclass",title:"Stray Kids — S-Class",subtitle:"Сияй по-своему · S클래스",emoji:"💎",colorHex:"#00BCD4",difficulty:"Начальный",sourceId:null,wordDefs:[{korean:"별",translation:"звезда"},{korean:"빛나다",translation:"сиять, сверкать"},{korean:"매력",translation:"очарование, привлекательность"},{korean:"개성",translation:"индивидуальность"},{korean:"자신감",translation:"уверенность"},{korean:"Style",translation:"стиль"},{korean:"S클래스",translation:"S-класс (уровень)"}],createdAt:5}]}const i2={1:0,2:1,3:3,4:5};function r2(a,i){const s=i2[a]??0,o=i>=3?1:0;return s+o}function Ah(a,i){let s=-1;for(let o=0;o<i.length;o++)a>=i[o].tierThreshold&&(s=o);return s}function s2(a,i){const s=Ah(a,i);return s>=0?i[s]:null}function v1(a,i){const s=Ah(a,i);return s+1<i.length?i[s+1]:null}function b1(a,i){const s=Ah(a,i);if(s<0){const f=i[0];return f?Math.max(0,Math.min(1,a/f.tierThreshold)):0}if(s+1>=i.length)return 1;const o=i[s].tierThreshold,d=i[s+1].tierThreshold;return Math.max(0,Math.min(1,(a-o)/(d-o)))}const Wb=[{kind:"reviews",title:"Повторение дня",description:"Просмотреть 20 карточек",target:20,rewardXp:20},{kind:"words",title:"Новые слова",description:"Довести словарь до 10 слов",target:10,rewardXp:15},{kind:"master",title:"Запоминание",description:"Выучить 5 слов навсегда",target:5,rewardXp:25},{kind:"streak",title:"Серия",description:"3 дня подряд без пропусков",target:3,rewardXp:30},{kind:"accuracy",title:"Точность",description:"Правильность ответов ≥ 80%",target:80,rewardXp:20}];function Om(a){const i=new Date(a.getFullYear(),0,0),s=Math.floor((a.getTime()-i.getTime())/(1440*60*1e3));return Wb[s%Wb.length]}function y1(a,i){let s=0;switch(a.kind){case"reviews":s=i.todayReviews;break;case"words":s=i.totalWords;break;case"master":s=i.masteredWords;break;case"streak":s=i.streak;break;case"accuracy":{const o=i.totalReviews>0?i.correctReviews/i.totalReviews*100:0;s=Math.round(o*100)/100;break}}return Math.max(0,Math.min(1,s/a.target))}function Jb(a,i){return y1(a,i)>=1}function x1(){return[{id:"words_10",title:"Первые слова",description:"10 слов в словаре",icon:"book"},{id:"words_50",title:"Словолюб",description:"50 слов в словаре",icon:"journals"},{id:"reviews_100",title:"Сто раз",description:"100 повторений карточек",icon:"folder"},{id:"reviews_500",title:"Полтысячи",description:"500 повторений карточек",icon:"fire"},{id:"streak_3",title:"Первый шаг",description:"3 дня подряд",icon:"flower1"},{id:"streak_7",title:"Неделя сил",description:"7 дней подряд",icon:"stars"},{id:"mastered_10",title:"Коллекционер",description:"10 выученных слов",icon:"award"},{id:"mastered_50",title:"Мастер словаря",description:"50 выученных слов",icon:"gem"},{id:"accuracy_90",title:"Снайпер",description:"Точность 90% (30+ повторов)",icon:"bullseye"}]}function ty(a,i){const s=i.totalReviews>0?i.correctReviews/i.totalReviews*100:0,o={words_10:i.totalWords>=10,words_50:i.totalWords>=50,reviews_100:i.totalReviews>=100,reviews_500:i.totalReviews>=500,streak_3:i.streak>=3,streak_7:i.streak>=7,mastered_10:i.masteredWords>=10,mastered_50:i.masteredWords>=50,accuracy_90:i.totalReviews>=30&&s>=90};return x1().filter(d=>o[d.id]&&!a.has(d.id))}const jm=[{value:1,label:"Забыл",koreanLabel:"다시",name:"AGAIN"},{value:2,label:"Трудно",koreanLabel:"어려움",name:"HARD"},{value:3,label:"Хорошо",koreanLabel:"알맞음",name:"GOOD"},{value:4,label:"Легко",koreanLabel:"쉬움",name:"EASY"}];function o2(a){return jm.find(i=>i.value===a)??jm[0]}const ey=1.3,l2=1440*60*1e3;function c2(a,i,s=Date.now()){let o,d=a.easeFactor,f=a.repetitions;switch(i){case 1:f=0,o=1,d=Math.max(ey,a.easeFactor-.2);break;case 2:f=a.repetitions+1,o=a.intervalDays<=1?1:Math.round(a.intervalDays*1.2),d=Math.max(ey,a.easeFactor-.15);break;case 3:switch(a.repetitions){case 0:o=1;break;case 1:o=3;break;default:o=Math.round(a.intervalDays*a.easeFactor)}f=a.repetitions+1;break;case 4:switch(a.repetitions){case 0:o=3;break;case 1:o=6;break;default:o=Math.round(a.intervalDays*a.easeFactor*1.3)}d=a.easeFactor+.15,f=a.repetitions+1;break}o<1&&(o=1);const g=s+o*l2,x=i!==1;return{updatedState:{intervalDays:o,easeFactor:d,repetitions:f,nextReviewAt:g,lastResult:o2(i).name,totalReviews:a.totalReviews+1,correctReviews:x?a.correctReviews+1:a.correctReviews}}}const w1=21;function tu(a){const i=new Date(a),s=i.getFullYear(),o=String(i.getMonth()+1).padStart(2,"0"),d=String(i.getDate()).padStart(2,"0");return`${s}-${o}-${d}`}function u2(){const a=new Date;return a.setHours(0,0,0,0),a.getTime()}async function d2(){if(await ke.categories.count()>0)return;const i=Date.now();await ke.categories.bulkAdd(S_.map((s,o)=>({id:Dl(),name:s.name,colorHex:s.colorHex,emoji:s.emoji,createdAt:i+o,isDefault:!0})))}async function h2(){if(await ke.words.count()>0)return;const i=await ke.categories.toArray(),s=Date.now(),o=t1.map((d,f)=>{const g=i.find(x=>x.name===d.categoryName);return{id:Dl(),korean:d.korean,hanja:null,romaja:du(d.korean),translation:d.translation,exampleSentence:null,exampleTranslation:null,categoryId:(g==null?void 0:g.id)??null,sourceId:null,tags:[],difficulty:"Начальный",createdAt:s+f,intervalDays:0,easeFactor:2.5,repetitions:0,nextReviewAt:s,lastResult:null,totalReviews:0,correctReviews:0,masteredAt:null}});await ke.words.bulkAdd(o)}async function f2(){await d2(),await h2(),await v2(),await p2(),await y2(),await w2()}async function p2(){await ke.packs.count()>0||await ke.packs.bulkAdd(n2())}async function m2(){return ke.packs.orderBy("createdAt").toArray()}async function g2(a){const i=await ke.words.toArray(),s=new Set(i.map(f=>f.korean)),o=Date.now();let d=0;for(const f of a.wordDefs){if(s.has(f.korean))continue;const g={id:Dl(),korean:f.korean,hanja:f.hanja??null,romaja:du(f.korean),translation:f.translation,exampleSentence:f.exampleSentence??null,exampleTranslation:f.exampleTranslation??null,categoryId:null,sourceId:a.sourceId,tags:f.tags??[],difficulty:f.difficulty??a.difficulty,createdAt:o+d,intervalDays:0,easeFactor:2.5,repetitions:0,nextReviewAt:o,lastResult:null,totalReviews:0,correctReviews:0,masteredAt:null};await ke.words.add(g),s.add(f.korean),d+=1}return d}async function v2(){await ke.sources.count()>0||await ke.sources.bulkAdd(e2())}async function b2(){return ke.sources.orderBy("createdAt").toArray()}async function y2(){if(await ke.achievements.count()>0)return;const i=x1();await ke.achievements.bulkAdd(i.map(s=>({...s,earnedAt:null})))}async function lm(){return ke.achievements.toArray()}async function ay(a,i=Date.now()){if(a.length===0)return;const o=(await ke.achievements.toArray()).filter(d=>a.includes(d.id)&&!d.earnedAt).map(d=>({...d,earnedAt:i}));o.length>0&&await ke.achievements.bulkPut(o)}async function x2(){const a=await ke.progression.get("main");if(a)return a;const i={id:"main",xp:0,rewardedMissionDate:null};return await ke.progression.put(i),i}async function ny(a){await ke.progression.put(a)}async function w2(){const i=(await ke.words.toArray()).filter(f=>(!f.masteredAt||typeof f.masteredAt!="number")&&f.intervalDays>=w1);if(i.length===0)return;const s=await ke.reviews.toArray(),o=new Map;for(const f of s){const g=o.get(f.wordId);(!g||f.timestamp>g)&&o.set(f.wordId,f.timestamp)}const d=[];for(const f of i)d.push({...f,masteredAt:o.get(f.id)??f.createdAt});d.length>0&&await ke.words.bulkPut(d)}async function _2(){return ke.words.orderBy("createdAt").reverse().toArray()}async function S2(){return ke.categories.orderBy("createdAt").toArray()}async function k2(a=Date.now()){return(await ke.words.toArray()).filter(s=>s.nextReviewAt<=a).sort((s,o)=>s.nextReviewAt-o.nextReviewAt)}async function iy(a){await ke.words.add(a)}async function ry(a){await ke.words.put(a)}async function sy(a){await ke.words.delete(a)}async function C2(a){await ke.categories.add(a)}async function A2(a,i,s=Date.now()){const d=c2({intervalDays:a.intervalDays,easeFactor:a.easeFactor,repetitions:a.repetitions,nextReviewAt:a.nextReviewAt,lastResult:a.lastResult,totalReviews:a.totalReviews,correctReviews:a.correctReviews},i,s).updatedState,f=a.masteredAt??(d.intervalDays>=w1?s:null),g={...a,intervalDays:d.intervalDays,easeFactor:d.easeFactor,repetitions:d.repetitions,nextReviewAt:d.nextReviewAt,lastResult:d.lastResult,totalReviews:d.totalReviews,correctReviews:d.correctReviews,masteredAt:f};await ke.words.put(g);const x={wordId:a.id,rating:i,dateString:tu(s),timestamp:s};await ke.reviews.add(x)}async function cm(a=Date.now()){const i=tu(a);return ke.reviews.where("dateString").equals(i).count()}async function um(){const a=await ke.reviews.toArray(),i=new Set(a.map(f=>f.dateString));if(i.size===0)return 0;let s=0,o=u2();const d=tu(o);if(i.has(d))s=1,o-=1440*60*1e3;else{if(o-=1440*60*1e3,!i.has(tu(o)))return 0;s=1,o-=1440*60*1e3}for(;;){const f=tu(o);if(i.has(f))s+=1,o-=1440*60*1e3;else break}return s}let eu;function E2(){if(eu)return eu;const a=window.speechSynthesis;if(!a)return null;const i=a.getVoices(),s=i.find(o=>o.lang==="ko-KR")??i.find(o=>o.lang.toLowerCase().startsWith("ko"))??null;return eu=s,s}function T2(a){const i=window.speechSynthesis;if(i){if(i.getVoices().length>0){eu=void 0;return}i.addEventListener("voiceschanged",()=>{eu=void 0},{once:!0})}}function ah(a,i){const s=window.speechSynthesis;if(!s)return;const o=a.trim();if(!o)return;s.cancel();const d=new SpeechSynthesisUtterance(o),f=E2();f&&(d.voice=f),d.lang="ko-KR",d.rate=(i==null?void 0:i.rate)??.9,d.pitch=(i==null?void 0:i.pitch)??1,s.speak(d)}const gh=[{id:"neutral",name:"Нейтральный",koreanLabel:"기본",rate:.9,pitch:1},{id:"mentor",name:"Спокойный наставник",koreanLabel:"다정",rate:.8,pitch:.9},{id:"energetic",name:"Энергичный",koreanLabel:"활기찬",rate:1.15,pitch:1.2},{id:"soft",name:"Мягкий",koreanLabel:"부드러운",rate:.85,pitch:1.15},{id:"deep",name:"Низкий тон",koreanLabel:"낮은",rate:.82,pitch:.8}];function Nl(a){return gh.find(i=>i.id===a)??gh[0]}const _1="woori_locale";function z2(){try{const a=localStorage.getItem(_1);if(a==="ru"||a==="en")return a}catch{}return null}function N2(){return(typeof navigator<"u"?(navigator.language||"").toLowerCase():"").startsWith("en")?"en":"ru"}function O2(a){try{localStorage.setItem(_1,a)}catch{}}let Wm=z2()??N2();function j2(){return Wm}function D2(a){Wm=a,O2(a)}const R2={"app.subtitle":{ru:"Корейский с любимой группой",en:"Learn Korean with your favorite group"},"common.loading":{ru:"Загрузка…",en:"Loading…"},"common.save":{ru:"Сохранить",en:"Save"},"common.add":{ru:"Добавить",en:"Add"},"common.check":{ru:"Проверить",en:"Check"},"common.next":{ru:"Дальше",en:"Next"},"common.cancel":{ru:"Отмена",en:"Cancel"},"common.delete":{ru:"Удалить",en:"Delete"},"common.edit":{ru:"Изменить",en:"Edit"},"common.close":{ru:"Задать",en:"Close"},"tab.home":{ru:"Главная",en:"Home"},"tab.cards":{ru:"Карточки",en:"Cards"},"tab.listening":{ru:"Аудирование",en:"Listening"},"tab.quiz":{ru:"Квиз",en:"Quiz"},"tab.dictionary":{ru:"Словарь",en:"Dictionary"},"tab.gallery":{ru:"Коллекция",en:"Collection"},"tab.progress":{ru:"Прогресс",en:"Progress"},"tab.settings":{ru:"Настройки",en:"Settings"},"home.sectionStats":{ru:"Показатели дня",en:"Today"},"home.stats.words":{ru:"Всего слов",en:"Total words"},"home.stats.toReview":{ru:"К повторению",en:"To review"},"home.startReview":{ru:"Начать повторение",en:"Start review"},"home.startCards":{ru:"Начать карточки",en:"Start cards"},"home.sectionQuick":{ru:"Быстрые действия",en:"Quick actions"},"home.quick.add":{ru:"Добавить",en:"Add word"},"home.quick.scan":{ru:"Сканировать",en:"Scan"},"home.quick.difficult":{ru:"Трудные ({count})",en:"Difficult ({count})"},"home.quick.help":{ru:"Помощь",en:"Help"},"home.quick.packs":{ru:"Паки слов",en:"Word packs"},"home.emptyTitle":{ru:"Ваш словарь пока пуст.",en:"Your dictionary is empty."},"home.emptyText":{ru:"Добавьте свои первые слова вручную или отсканируйте текст из учебника!",en:"Add your first words manually or scan text from your textbook!"},"home.mentor":{ru:"Твой наставник",en:"Your mentor"},"home.mentor.none":{ru:"Коллекция фотокарточек",en:"Photo-card collection"},"home.mentor.toNext":{ru:"до «{name}» ещё {count} XP",en:'{count} XP to "{name}"'},"home.mentor.allOpen":{ru:"все участники открыты",en:"all members unlocked"},"home.mission":{ru:"Миссия дня",en:"Today's mission"},"home.mission.reward":{ru:"+{count} XP",en:"+{count} XP"},"gallery.title":{ru:"Коллекция",en:"Collection"},"gallery.sectionCards":{ru:"Фотокарточки",en:"Photocards"},"gallery.unlocked":{ru:"✓ Получена",en:"✓ Unlocked"},"gallery.sectionAchievements":{ru:"Достижения",en:"Achievements"},"gallery.toNext":{ru:"до «{name}» ещё {count} XP",en:'{count} XP to "{name}"'},"gallery.allOpen":{ru:"все участники открыты",en:"all members unlocked"},"gallery.empty":{ru:"Изучайте слова и повторяйте карточки, чтобы открывать награды.",en:"Study words and review cards to unlock rewards."},"mission.reviews.title":{ru:"Повторение дня",en:"Daily review"},"mission.reviews.desc":{ru:"Просмотреть 20 карточек",en:"Review 20 cards"},"mission.words.title":{ru:"Новые слова",en:"New words"},"mission.words.desc":{ru:"Довести словарь до 10 слов",en:"Reach 10 words in your dictionary"},"mission.master.title":{ru:"Запоминание",en:"Memorizing"},"mission.master.desc":{ru:"Выучить 5 слов навсегда",en:"Master 5 words forever"},"mission.streak.title":{ru:"Серия",en:"Streak"},"mission.streak.desc":{ru:"3 дня подряд без пропусков",en:"3 days in a row"},"mission.accuracy.title":{ru:"Точность",en:"Accuracy"},"mission.accuracy.desc":{ru:"Правильность ответов ≥ 80%",en:"Answer accuracy ≥ 80%"},"achievement.words_10.title":{ru:"Первые слова",en:"First words"},"achievement.words_10.desc":{ru:"10 слов в словаре",en:"10 words in dictionary"},"achievement.words_50.title":{ru:"Словолюб",en:"Word lover"},"achievement.words_50.desc":{ru:"50 слов в словаре",en:"50 words in dictionary"},"achievement.reviews_100.title":{ru:"Сто раз",en:"Hundred times"},"achievement.reviews_100.desc":{ru:"100 повторений карточек",en:"100 card reviews"},"achievement.reviews_500.title":{ru:"Полтысячи",en:"Half a thousand"},"achievement.reviews_500.desc":{ru:"500 повторений карточек",en:"500 card reviews"},"achievement.streak_3.title":{ru:"Первый шаг",en:"First step"},"achievement.streak_3.desc":{ru:"3 дня подряд",en:"3 days in a row"},"achievement.streak_7.title":{ru:"Неделя сил",en:"Week of power"},"achievement.streak_7.desc":{ru:"7 дней подряд",en:"7 days in a row"},"achievement.mastered_10.title":{ru:"Коллекционер",en:"Collector"},"achievement.mastered_10.desc":{ru:"10 выученных слов",en:"10 mastered words"},"achievement.mastered_50.title":{ru:"Мастер словаря",en:"Dictionary master"},"achievement.mastered_50.desc":{ru:"50 выученных слов",en:"50 mastered words"},"achievement.accuracy_90.title":{ru:"Снайпер",en:"Sniper"},"achievement.accuracy_90.desc":{ru:"Точность 90% (30+ повторов)",en:"90% accuracy (30+ reviews)"},"packs.title":{ru:"Паки слов",en:"Word packs"},"packs.search":{ru:"Поиск пака — по слову или переводу",en:"Search packs by word or translation"},"packs.added":{ru:"✓ Добавлено",en:"✓ Added"},"packs.empty":{ru:"Ничего не нашлось. Попробуйте другой запрос.",en:"Nothing found. Try another query."},"packs.footer":{ru:"Слова из пака добавляются в словарь, если их там ещё нет. Потом они учат по тем же карточкам и квизам.",en:"Pack words are added to your dictionary if they are not there yet. Then you study them in cards and quizzes."},"packs.words":{ru:"{count} слов",en:"{count} words"},"cards.nothing":{ru:"Повторять нечего",en:"Nothing to review"},"cards.nothingDesc":{ru:"Нет слов, требующих повторения.",en:"No words are due for review."},"cards.reviewAll":{ru:"Повторить все слова",en:"Review all words"},"cards.difficult":{ru:"Трудные слова ({count})",en:"Difficult words ({count})"},"cards.doneTitle":{ru:"Отличная работа!",en:"Great job!"},"cards.doneDesc":{ru:"Вы прошли все карточки этой серии.",en:"You finished all the cards in this session."},"cards.progress":{ru:"Карточка {i} из {total}",en:"Card {i} of {total}"},"cards.tapToFlip":{ru:"Нажмите, чтобы перевернуть",en:"Tap to flip"},"cards.evaluate":{ru:"Оцените ваш ответ",en:"Rate your answer"},"cards.reps":{ru:"Повторы: {count}",en:"Reviews: {count}"},"cards.interval":{ru:"Интервал: {count} дн",en:"Interval: {count} d"},"cards.nextReview":{ru:"Повторить через {count} дн",en:"Review in {count} d"},"cards.editAria":{ru:"Редактировать слово",en:"Edit word"},"cards.speakAria":{ru:"Озвучить",en:"Speak"},"detail.title":{ru:"Слово",en:"Word"},"detail.mastered":{ru:"Выучено",en:"Mastered"},"detail.toReview":{ru:"К повторению",en:"To review"},"detail.inProgress":{ru:"Изучается",en:"In progress"},"detail.status":{ru:"Статус",en:"Status"},"detail.reps":{ru:"Повторы",en:"Reviews"},"detail.interval":{ru:"Интервал",en:"Interval"},"detail.nextReview":{ru:"Следующее повторение",en:"Next review"},"detail.deleteConfirm":{ru:"Удалить слово?",en:"Delete this word?"},"add.titleNew":{ru:"Добавить слово",en:"Add word"},"add.titleEdit":{ru:"Изменить слово",en:"Edit word"},"add.korean":{ru:"Корейское слово *",en:"Korean word *"},"add.translation":{ru:"Перевод *",en:"Translation *"},"add.romaja":{ru:"Ромадзия (автозаполнение)",en:"Romanization (auto)"},"add.hanja":{ru:"Ханча (необязательно)",en:"Hanja (optional)"},"add.exampleSentence":{ru:"Пример предложения",en:"Example sentence"},"add.exampleTranslation":{ru:"Перевод примера",en:"Example translation"},"add.category":{ru:"Категория",en:"Category"},"add.source":{ru:"Источник (откуда слово)",en:"Source (where the word is from)"},"add.noSource":{ru:"✍️ Без источника",en:"✍️ No source"},"add.level":{ru:"Уровень",en:"Level"},"add.errKorean":{ru:"Укажите корейское слово.",en:"Enter the Korean word."},"add.errTranslation":{ru:"Укажите перевод.",en:"Enter the translation."},"listen.needWords":{ru:"Нужно минимум 2 слова",en:"Need at least 2 words"},"listen.needWordsDesc":{ru:"Добавьте слова в словарь, чтобы начать аудирование.",en:"Add words to your dictionary to start listening."},"listen.correct":{ru:"✅ Правильно!",en:"✅ Correct!"},"listen.wrong":{ru:"❌ Неправильно",en:"❌ Wrong"},"listen.answer":{ru:"Ответ",en:"Answer"},"listen.word":{ru:"Слово",en:"Word"},"listen.score":{ru:"Счёт: {score} / {total}",en:"Score: {score} / {total}"},"reward.title":{ru:"Отлично! 🎉",en:"Awesome! 🎉"},"reward.body":{ru:"Продолжайте в том же духе!",en:"Keep it up!"},"reward.continue":{ru:"Продолжить",en:"Continue"},"quiz.title":{ru:"Квиз",en:"Quiz"},"quiz.desc":{ru:"Показано русское слово — выберите правильный вариант по-корейски.",en:"You see a word in your language — pick the correct Korean option."},"quiz.start":{ru:"Начать",en:"Start"},"dict.search":{ru:"Поиск: корейский, перевод, ромадзия…",en:"Search: Korean, translation, romanization…"},"dict.selectOnAria":{ru:"Выйти из выбора",en:"Exit selection"},"dict.selectOffAria":{ru:"Выбрать слова",en:"Select words"},"dict.selectionHint":{ru:"Выбрано: {count}. Нажмите на слово, чтобы выбрать или убрать.",en:"Selected: {count}. Tap a word to toggle it."},"dict.all":{ru:"Все",en:"All"},"dict.addCategory":{ru:"+ Категория",en:"+ Category"},"dict.emptyFound":{ru:"Ничего не найдено по вашему запросу.",en:"Nothing found for your query."},"dict.emptyEmpty":{ru:"Словарь пуст. Добавьте слова!",en:"The dictionary is empty. Add some words!"},"dict.tags":{ru:"✏️ Теги",en:"✏️ Tags"},"dict.delete":{ru:"🗑 Удалить",en:"🗑 Delete"},"dict.tagsDialog":{ru:"Назначить теги ({count} слов)",en:"Assign tags ({count} words)"},"dict.tagsHint":{ru:"Теги будут добавлены ко всем выбранным словам (существующие сохранятся).",en:"Tags will be added to all selected words (existing ones stay)."},"dict.assign":{ru:"Назначить",en:"Assign"},"dict.addWordAria":{ru:"Добавить слово",en:"Add word"},"progress.stat":{ru:"Статистика",en:"Statistics"},"progress.mastered":{ru:"Выучено",en:"Mastered"},"progress.daysToMaster":{ru:"Дней до выуч.",en:"Days to master"},"progress.dueToday":{ru:"К сегодня",en:"Due today"},"progress.today":{ru:"Сегодня",en:"Today"},"progress.streakDays":{ru:"Серия дней",en:"Day streak"},"progress.byMonth":{ru:"Запомнено по месяцам",en:"Mastered by month"},"progress.byCat":{ru:"Выучено по категориям",en:"Mastered by category"},"progress.byCatDict":{ru:"Слова по категориям",en:"Words by category"},"progress.noCategory":{ru:"Без категории",en:"No category"},"progress.proverb":{ru:"Многие капли образуют гору",en:"Many drops form a mountain"},"word.status.mastered":{ru:"Выучено",en:"Mastered"},"word.status.due":{ru:"Повторить",en:"Review"},"word.status.in":{ru:"Через {count} дн",en:"In {count} d"},"word.level":{ru:"Ур.",en:"Lv."},"settings.title":{ru:"Настройки",en:"Settings"},"settings.lang":{ru:"Язык",en:"Language"},"settings.langHint":{ru:"Язык интерфейса. Данные слов не меняются.",en:"Interface language. Word data is unchanged."},"settings.ocr":{ru:"Распознавание текста",en:"Text recognition"},"settings.apiKey":{ru:"Gemini API ключ",en:"Gemini API key"},"settings.apiKeyHint":{ru:"Нужен для сканирования текста с фото. Ключ сохраняется в браузере.",en:"Needed to scan text from photos. The key is stored in your browser."},"settings.proxy":{ru:"Обход ограничений региона",en:"Region restrictions bypass"},"settings.proxyLabel":{ru:"Адрес прокси (Cloudflare Worker)",en:"Proxy URL (Cloudflare Worker)"},"settings.proxyHint":{ru:"По умолчанию уже стоит общий адрес — сканирование работает сразу. Очистите поле для прямого подключения или вставьте свой адрес.",en:"A shared proxy is set by default, so scanning works right away. Clear the field to connect directly or paste your own URL."},"settings.listenSection":{ru:"Аудирование",en:"Listening"},"settings.listenThreshold":{ru:"Правильных ответов подряд для GIF-награды",en:"Consecutive correct answers for a GIF reward"},"settings.listenThresholdHint":{ru:"Награда показывается при каждой кратности: {first}, {second}, {third}...",en:"The reward shows at each multiple: {first}, {second}, {third}..."},"settings.display":{ru:"Отображение",en:"Display"},"settings.colorTheme":{ru:"Тема оформления",en:"Appearance"},"settings.colorThemeHint":{ru:"Светлая, тёмная или как в системе",en:"Light, dark or follow the system"},"settings.colorThemeSystem":{ru:"Как в системе",en:"System"},"settings.colorThemeLight":{ru:"Светлая",en:"Light"},"settings.colorThemeDark":{ru:"Тёмная",en:"Dark"},"settings.showRomaja":{ru:"Английская транскрипция",en:"Show romanization"},"settings.showRomajaHint":{ru:"Показывать romanization под словами и на карточках",en:"Show romanization under words and on cards"},"settings.voices":{ru:"Голоса",en:"Voices"},"settings.voicesCards":{ru:"Карточки",en:"Cards"},"settings.voicesCardsHint":{ru:"Тембр и скорость озвучки на карточках.",en:"Timbre and speed on cards."},"settings.voicesListen":{ru:"Аудирование",en:"Listening"},"settings.voicesListenHint":{ru:"Тембр и скорость озвучки вопросов аудирования.",en:"Timbre and speed for listening questions."},"settings.theme":{ru:"Тема",en:"Theme"},"settings.themeHint":{ru:"Тема меняет приветствия, GIF-награды и картинки в приложении.",en:"The theme changes greetings, GIF rewards and pictures."},"settings.themePreview":{ru:"Тема: предпросмотр",en:"Theme preview"},"settings.guide":{ru:"Инструкция",en:"Guide"},"settings.guideHow":{ru:"Как установить и настроить",en:"How to install and configure"},"settings.guideHint":{ru:"Пошаговая инструкция для новичков: установка на телефон, подключение распознавания и часто задаваемые вопросы.",en:"Step-by-step guide: installing on a phone, enabling recognition and FAQs."},"guide.title":{ru:"Как пользоваться приложением",en:"How to use the app"},"guide.intro":{ru:"«Woori · 우리» — это приложение для запоминания корейских слов. Всё хранится на вашем телефоне и работает даже без интернета. Пошаговая инструкция ниже.",en:"“Woori · 우리” is an app for memorizing Korean words. Everything is stored on your phone and works offline. A step-by-step guide is below."},"guide.ok":{ru:"Понятно, спасибо",en:"Got it, thanks"},"guide.install.title":{ru:"Как установить приложение",en:"How to install the app"},"guide.install.iphone.title":{ru:"На iPhone (Safari)",en:"On iPhone (Safari)"},"guide.install.iphone.text":{ru:'1. Откройте адрес приложения в браузере Safari. 2. Нажмите кнопку «Поделиться» (квадрат со стрелкой вверх внизу). 3. Выберите «На экран "Домой"». 4. Нажмите «Добавить». Появится иконка приложения — как у обычных.',en:"1. Open the app URL in Safari. 2. Tap the Share button (square with an up arrow). 3. Choose “Add to Home Screen”. 4. Tap “Add”. An app icon appears like a native app."},"guide.install.android.title":{ru:"На телефоне с Android (Chrome)",en:"On Android (Chrome)"},"guide.install.android.text":{ru:"1. Откройте адрес приложения в Chrome. 2. Нажмите на три точки (⋮) вверху. 3. Выберите «Установить приложение» или «Добавить на главный экран». 4. Подтвердите. Иконка появится на рабочем столе.",en:"1. Open the app URL in Chrome. 2. Tap the three dots (⋮) at the top. 3. Choose “Install app” or “Add to Home screen”. 4. Confirm. The icon appears on your home screen."},"guide.ocr.title":{ru:"Как включить распознавание с фото",en:"How to enable photo recognition"},"guide.ocr.key.title":{ru:"Получить бесплатный ключ",en:"Get a free key"},"guide.ocr.key.text":{ru:"1. Зайдите в настройки (⚙️ внизу). 2. Нажмите ссылку «AI Studio». 3. Войдите аккаунтом Google и нажмите «Получить ключ» / «Create API key». Это бесплатно. 4. Скопируйте длинный ключ (начинается с AIza...).",en:"1. Open Settings (⚙️ at the bottom). 2. Tap the “AI Studio” link. 3. Sign in with Google and tap “Create API key”. It is free. 4. Copy the long key (starts with AIza...)."},"guide.ocr.paste.title":{ru:"Вставить ключ в приложение",en:"Paste the key into the app"},"guide.ocr.paste.text":{ru:"Вернитесь в приложение и вставьте ключ в поле «Gemini API ключ» в настройках. Нажмите на экране ещё раз, чтобы сохранить.",en:"Return to the app and paste the key into the “Gemini API key” field in Settings. Tap elsewhere to save."},"guide.ocr.scan.title":{ru:"Начать сканирование",en:"Start scanning"},"guide.ocr.scan.text":{ru:"Нажмите «📷 Сканировать» на главном экране, сфотографируйте страницу учебника или тетрадь — приложение распознает слова и переводы.",en:"Tap “📷 Scan” on the home screen and photograph a textbook page — the app recognizes words and translations."},"guide.fail.title":{ru:"Если сканирование не работает",en:"If scanning does not work"},"guide.fail.key.title":{ru:"Проверьте ключ",en:"Check the key"},"guide.fail.key.text":{ru:"Ошибка «Ключ Gemini отклонён» — значит ключ вписан неверно или заканчивается его лимит. Получите новый ключ заново по шагам из раздела 2.",en:"The “Gemini key rejected” error means the key is wrong or its quota is used up. Get a new key following the steps in section 2."},"guide.fail.proxy.title":{ru:"Проверьте адрес помощника (прокси)",en:"Check the helper URL (proxy)"},"guide.fail.proxy.text":{ru:"В настройках в разделе «Обход ограничений региона» по умолчанию стоит адрес {proxy}. Не удаляйте его — он помогает сканированию работать из вашей страны. Если его нет — вставьте адрес обратно.",en:"In Settings → “Region restrictions bypass” a default URL {proxy} is set. Keep it — it helps scanning work from your country. If missing, paste it back."},"guide.fail.camera.title":{ru:"Разрешите доступ к камере",en:"Allow camera access"},"guide.fail.camera.text":{ru:"На iPhone: Настройки → Safari → и включите камеру для приложения. На Android: при первом снимке разрешите доступ к камере.",en:"On iPhone: Settings → Safari, enable camera for the app. On Android: allow camera access at the first capture."},"guide.practice.title":{ru:"Как заниматься",en:"How to study"},"guide.practice.cards.title":{ru:"Карточки 🗂️",en:"Cards 🗂️"},"guide.practice.cards.text":{ru:"Каждый день здесь появляются слова, которые пора повторить. Переворачивайте карточку и честно оценивайте ответ: «Забыл», «Трудно», «Хорошо» или «Легко».",en:"Every day words due for review appear here. Flip the card and honestly rate your answer: “Forgot”, “Hard”, “Good” or “Easy”."},"guide.practice.listen.title":{ru:"Аудирование 🎧 и Квиз 🧠",en:"Listening 🎧 and Quiz 🧠"},"guide.practice.listen.text":{ru:"Проверьте себя: услышите слово и выберите перевод, или увидите русское слово и выберите правильный корейский. За серию верных ответов — приятные картинки-награды.",en:"Test yourself: hear a word and pick the translation, or see a word and pick the Korean one. For a streak of correct answers you get GIF rewards."},"guide.practice.dict.title":{ru:"Словарь 📖 и уроки",en:"Dictionary 📖 and packs"},"guide.practice.dict.text":{ru:"Добавляйте слова вручную, сканируйте из учебника или выбирайте их пачкой, чтобы развесить по тегам. Прогресс 📊 показывает, сколько слов вы уже запомнили.",en:"Add words manually, scan from a textbook or import packs, and organize them with tags. Progress 📊 shows how many words you have memorized."},"guide.faq.title":{ru:"Частые вопросы",en:"FAQ"},"guide.faq.data.title":{ru:"Что делать, если пропали слова?",en:"What if my words disappeared?"},"guide.faq.data.text":{ru:"Данные хранятся на телефоне. Не удаляйте приложение и не очищайте данные Safari, чтобы ничего не потерять. Обновления безопасны — слова сохраняются.",en:"Data is stored on your phone. Do not delete the app or clear Safari data. Updates are safe — words are kept."},"guide.faq.theme.title":{ru:"Можно ли поменять оформление?",en:"Can I change the theme?"},"guide.faq.theme.text":{ru:"Да! Сейчас выбрана тема «{theme}». Зайдите в настройки → «Тема» и выберите другую. Меняются картинки, приветствия и награды.",en:"Yes! The theme “{theme}” is active. Open Settings → Theme and pick another one. Pictures, greetings and rewards change."},"guide.faq.gif.title":{ru:"Куда делись GIF-награды?",en:"Where did GIF rewards go?"},"guide.faq.gif.text":{ru:"Награды появляются за серию правильных ответов в «Аудировании» и «Квизе». Количество правильных ответов подряд для награды можно настроить в настройках.",en:"Rewards appear for a streak of correct answers in Listening and Quiz. The required streak can be adjusted in Settings."}};function $(a,i){const s=R2[a],o=s?Wm==="en"?s.en:s.ru:a;return i?o.replace(/\{(\w+)\}/g,(d,f)=>i[f]!==void 0?String(i[f]):d):o}function M2(){const a=kh(),i=H_(a),s=tr().greetings;return i&&s.some(o=>o.id===i)?i:Qm().id}function oy(){const a=new Date,i=a.getFullYear(),s=String(a.getMonth()+1).padStart(2,"0"),o=String(a.getDate()).padStart(2,"0");return`${i}-${s}-${o}`}const ly=[{id:"home",title:"Главная",korean:"홈",icon:"house"},{id:"cards",title:"Карточки",korean:"복습",icon:"stack"},{id:"listening",title:"Аудирование",korean:"듣기",icon:"headphones"},{id:"quiz",title:"Квиз",korean:"퀴즈",icon:"patch-question"},{id:"dictionary",title:"Словарь",korean:"단어장",icon:"book"},{id:"gallery",title:"Коллекция",korean:"컬렉션",icon:"images"},{id:"progress",title:"Прогресс",korean:"통계",icon:"bar-chart"},{id:"settings",title:"Настройки",korean:"설정",icon:"gear"}];function $2(){let a="home",i=[],s=[],o=[],d=[],f={id:"main",xp:0,rewardedMissionDate:null},g=[],x="",S=null,E=!1,N=new Set,_=[],T=0,D=!1,R=null,W=null,mt=!1,Ot=0,ut=0,St={consecutiveCorrect:0,rewardGifName:null},rt=!1,dt=!1,kt=!1,yt=!1,pt=!1,it=null,ft=null,ee="",le=null,pe=M2(),$e=L_(),ge=V_(),Et=I_(),Yt=c1();const Bt=new Set;let ie={v:0};function jt(){ie={v:ie.v+1},Bt.forEach(H=>H())}async function Ge(){i=await _2(),s=await S2(),o=await b2(),d=await m2(),jt()}async function ma(){f=await x2(),g=await lm()}function Gn(H,ot){const vt=i.reduce((gt,Nt)=>gt+Nt.totalReviews,0),Mt=i.reduce((gt,Nt)=>gt+Nt.correctReviews,0);return{totalWords:i.length,totalReviews:vt,correctReviews:Mt,masteredWords:i.filter(gt=>!!gt.masteredAt).length,todayReviews:H,streak:ot}}async function L(H){const ot=await cm(),vt=await um(),Mt=Gn(ot,vt);f={...f,xp:f.xp+r2(H,vt)};const gt=oy();if(f.rewardedMissionDate!==gt){const we=Om(new Date);Jb(we,Mt)&&(f={...f,xp:f.xp+we.rewardXp,rewardedMissionDate:gt})}const Nt=new Set(g.map(we=>we.id)),Ct=ty(Nt,Mt);Ct.length>0&&(await ay(Ct.map(we=>we.id),Date.now()),g=await lm()),await ny(f)}async function xt(){const H=await cm(),ot=await um(),vt=Gn(H,ot),Mt=oy(),gt=new Set(g.map(we=>we.id)),Nt=ty(gt,vt);let Ct=Nt.length>0;if(f.rewardedMissionDate!==Mt){const we=Om(new Date);Jb(we,vt)&&(f={...f,xp:f.xp+we.rewardXp,rewardedMissionDate:Mt},Ct=!0)}Nt.length>0&&(await ay(Nt.map(we=>we.id),Date.now()),g=await lm()),Ct&&await ny(f)}return{subscribe(H){return Bt.add(H),()=>Bt.delete(H)},getSnapshot(){return ie},async init(){await f2(),await Ge(),await ma()},getTab:()=>a,getWords:()=>i,getCategories:()=>s,getSources:()=>o,getXp:()=>f.xp,getAchievements:()=>g,getProgression:()=>f,sourceFor:H=>H?o.find(ot=>ot.id===H)??null:null,getSearchQuery:()=>x,getSelectedCategoryId:()=>S,isSelectionActive:()=>E,getSelectedIds:()=>N,getCardsQueue:()=>_,getCardIndex:()=>T,getIsCardFlipped:()=>D,getQuizQuestion:()=>R,getSelectedOptionIndex:()=>W,getIsAnswerChecked:()=>mt,getQuizScore:()=>Ot,getQuizTotalCount:()=>ut,getQuizReward:()=>St,getIsAddWordOpen:()=>rt,getIsScanOcrOpen:()=>dt,getIsCreateCategoryOpen:()=>kt,getIsGuideOpen:()=>yt,getIsPacksOpen:()=>pt,getPacks:()=>d,getSelectedWordForDetail:()=>it,getEditingWord:()=>ft,getPrefilledKorean:()=>ee,getPrefilledCategoryId:()=>le,getGreetingId:()=>pe,getShowRomaja:()=>$e,getColorTheme:()=>Yt,getCardVoice:()=>Nl(ge),getListenVoice:()=>Nl(Et),getLocale:()=>j2(),setLocale(H){D2(H),jt()},get isReady(){return ie.v>0},async selectTab(H){H!=="listening"&&a==="listening"&&(St={consecutiveCorrect:0,rewardGifName:null}),a=H,jt(),H==="cards"&&_.length===0?await this.startDueReview():H==="listening"&&(R===null||R.kind!=="listen")?await this.loadNextQuizQuestion("listen"):H==="quiz"&&(R===null||R.kind!=="reverse")&&await this.loadNextQuizQuestion("reverse")},async startDueReview(){_=await k2(),T=0,D=!1,a="cards",jt(),this.speakCurrentCard()},async startReviewAll(){_=[...i].sort(()=>Math.random()-.5),T=0,D=!1,a="cards",jt(),this.speakCurrentCard()},async startDifficultReview(){_=this.difficultWords().sort(()=>Math.random()-.5),T=0,D=!1,a="cards",jt(),this.speakCurrentCard()},flipCard(){D=!D,jt()},async rateCard(H){if(T>=_.length)return;const ot=_[T];await A2(ot,H),T+=1,D=!1,await Ge(),await L(H),jt(),this.speakCurrentCard()},speakCurrentCard(){T<_.length&&ah(_[T].korean,Nl(ge))},speakText(H){ah(H,Nl(ge))},async loadNextQuizQuestion(H){const ot=i;if(ot.length<2){R=null,jt();return}const vt=ot[Math.floor(Math.random()*ot.length)],Mt=ce=>H==="listen"?ce.translation:ce.korean,gt=Mt(vt),Nt=new Set([gt]),Ct=[],we=[...ot].sort(()=>Math.random()-.5);for(const ce of we)if(ce.id!==vt.id&&!Nt.has(Mt(ce))&&(Nt.add(Mt(ce)),Ct.push(ce),Ct.length===3))break;let ba,ya,an;H==="listen"?(ba=[{text:vt.translation}],Ct.forEach(ce=>ba.push({text:ce.translation})),ba.sort(()=>Math.random()-.5),ya=vt.korean,an=vt.romaja):(ba=[{text:vt.korean,romaja:vt.romaja}],Ct.forEach(ce=>ba.push({text:ce.korean,romaja:ce.romaja})),ba.sort(()=>Math.random()-.5),ya=vt.translation,an=void 0);const sa=ba.findIndex(ce=>ce.text===gt);R={kind:H,targetWordId:vt.id,prompt:ya,promptRomaja:an,options:ba,correctOptionIndex:sa<0?0:sa},W=null,mt=!1,St={rewardGifName:null,consecutiveCorrect:St.consecutiveCorrect},jt(),H==="listen"&&ah(vt.korean,Nl(Et))},selectQuizOption(H){mt||(W=H,jt())},checkQuizAnswer(){const H=R;if(!H||W===null)return;mt=!0,ut+=1;const ot=W===H.correctOptionIndex;ot&&(Ot+=1);const vt={...St};if(ot){vt.consecutiveCorrect+=1;const Mt=h1();vt.consecutiveCorrect>=Mt&&vt.consecutiveCorrect%Mt===0?vt.rewardGifName=Q_():vt.rewardGifName=null}else vt.consecutiveCorrect=0,vt.rewardGifName=null;St=vt,jt()},dismissQuizReward(){St={...St,rewardGifName:null},jt()},replayQuizAudio(){(R==null?void 0:R.kind)==="listen"&&ah(R.prompt,Nl(Et))},openAddWord(H="",ot=null){ee=H,le=ot,ft=null,rt=!0,jt()},openEditWord(H){ft=H,rt=!0,jt()},closeAddWord(){rt=!1,ft=null,ee="",jt()},openScanOcr(){dt=!0,jt()},closeScanOcr(){dt=!1,jt()},openSettings(){dt=!1,a="settings",jt()},openCreateCategory(){kt=!0,jt()},closeCreateCategory(){kt=!1,jt()},openGuide(){yt=!0,jt()},closeGuide(){yt=!1,jt()},openPacks(){pt=!0,jt()},closePacks(){pt=!1,jt()},async addPack(H){const ot=d.find(vt=>vt.id===H);ot&&(await g2(ot),await Ge(),await xt(),jt())},openWordDetail(H){it=H,jt()},closeWordDetail(){it=null,jt()},setSearchQuery(H){x=H,jt()},setSelectedCategory(H){S=H,jt()},setGreeting(H){pe=H,U_(kh(),H),jt()},setShowRomaja(H){$e=H,B_(H),jt()},setColorTheme(H){Yt=H,N_(H),Pm(),jt()},setCardVoice(H){ge=H,q_(H),jt()},setListenVoice(H){Et=H,K_(H),jt()},selectTheme(H){$_(H),pe=Qm().id,jt()},async saveWord(H){var gt;const ot=H.romaja.trim()||du(H.korean),vt=Date.now(),Mt=(gt=H.sourceId)!=null&&gt.trim()?H.sourceId.trim():null;if(ft){const Ct={...ft,korean:H.korean.trim(),hanja:H.hanja.trim()||null,romaja:ot,translation:H.translation.trim(),exampleSentence:H.exampleSentence.trim()||null,exampleTranslation:H.exampleTranslation.trim()||null,categoryId:H.categoryId,sourceId:Mt,difficulty:H.difficulty};await ry(Ct),_=_.map(we=>we.id===Ct.id?Ct:we)}else{const Nt={id:Dl(),korean:H.korean.trim(),hanja:H.hanja.trim()||null,romaja:ot,translation:H.translation.trim(),exampleSentence:H.exampleSentence.trim()||null,exampleTranslation:H.exampleTranslation.trim()||null,categoryId:H.categoryId,sourceId:Mt,tags:[],difficulty:H.difficulty,createdAt:vt,intervalDays:0,easeFactor:2.5,repetitions:0,nextReviewAt:vt,lastResult:null,totalReviews:0,correctReviews:0,masteredAt:null};await iy(Nt)}rt=!1,ft=null,ee="",await Ge(),await xt(),jt()},async importWords(H){const ot=Date.now();for(const vt of H){const Mt=vt.korean.trim(),gt=vt.translation.trim();if(!Mt||!gt)continue;const Nt=vt.tags.map(ba=>ba.trim()).filter(ba=>ba.length>0),Ct=s.find(ba=>Nt.some(ya=>ya.toLowerCase()===ba.name.toLowerCase())),we={id:Dl(),korean:Mt,hanja:null,romaja:du(Mt),translation:gt,exampleSentence:null,exampleTranslation:null,categoryId:(Ct==null?void 0:Ct.id)??null,sourceId:null,tags:Nt,difficulty:"Начальный",createdAt:ot,intervalDays:0,easeFactor:2.5,repetitions:0,nextReviewAt:ot,lastResult:null,totalReviews:0,correctReviews:0,masteredAt:null};await iy(we)}dt=!1,await Ge(),await xt(),jt()},async deleteWord(H){(it==null?void 0:it.id)===H.id&&(it=null),await sy(H.id),await Ge()},toggleSelectionMode(){E=!E,E||(N=new Set),jt()},toggleSelectWord(H){N.has(H)?(N=new Set(N),N.delete(H)):(N=new Set(N),N.add(H)),jt()},clearSelection(){E=!1,N=new Set,jt()},async assignTagsToSelected(H){const ot=Array.from(new Set(H.map(vt=>vt.trim()).filter(Boolean)));if(N.size!==0){for(const vt of i){if(!N.has(vt.id))continue;const Mt=Array.from(new Set([...vt.tags,...ot]));(Mt.length!==vt.tags.length||Mt.some((Nt,Ct)=>Nt!==vt.tags[Ct]))&&await ry({...vt,tags:Mt})}this.clearSelection(),await Ge()}},async deleteSelection(){const H=new Set(N);for(const ot of i)H.has(ot.id)&&((it==null?void 0:it.id)===ot.id&&(it=null),await sy(ot.id));this.clearSelection(),await Ge()},async createCategory(H,ot,vt){await C2({id:Dl(),name:H.trim(),colorHex:vt.trim(),emoji:ot.trim(),createdAt:Date.now(),isDefault:!1}),kt=!1,await Ge()},dueWords(){return i.filter(H=>H.nextReviewAt<=Date.now()).sort((H,ot)=>H.nextReviewAt-ot.nextReviewAt)},difficultWords(){return i.filter(H=>H.lastResult==="AGAIN"||H.lastResult==="HARD"||H.totalReviews>0&&H.easeFactor<2)},filteredWords(){const H=x.trim().toLowerCase();return i.filter(ot=>{var Mt;return S===null||ot.categoryId===S?H?ot.korean.toLowerCase().includes(H)||ot.translation.toLowerCase().includes(H)||ot.romaja.toLowerCase().includes(H)||(((Mt=ot.hanja)==null?void 0:Mt.toLowerCase().includes(H))??!1):!0:!1})},totalWordsCount(){return i.length},masteredWordsCount(){return i.filter(H=>!!H.masteredAt).length},avgDaysToMaster(){const H=i.filter(vt=>!!vt.masteredAt);if(H.length===0)return null;const ot=H.reduce((vt,Mt)=>vt+Math.max(0,(Mt.masteredAt-Mt.createdAt)/(1440*60*1e3)),0);return Math.round(ot/H.length)},masteredByMonth(){const H=new Date,ot=[];for(let vt=11;vt>=0;vt--){const Mt=new Date(H.getFullYear(),H.getMonth()-vt,1),gt=Mt.toLocaleString("ru-RU",{month:"short"}),Nt=new Date(Mt.getFullYear(),Mt.getMonth()+1,1);ot.push({month:gt,from:Mt.getTime(),to:Nt.getTime(),label:gt})}return ot.map(vt=>({month:vt.label,count:i.filter(Mt=>!!Mt.masteredAt&&Mt.masteredAt>=vt.from&&Mt.masteredAt<vt.to).length}))},masteredByCategory(){const H=new Map;for(const ot of i){if(!ot.masteredAt)continue;const vt=ot.categoryId?this.categoryName(ot.categoryId):"Без категории";H.set(vt,(H.get(vt)??0)+1)}return Array.from(H.entries()).map(([ot,vt])=>({categoryName:ot,count:vt}))},async todayReviewsCount(){return cm()},async streakCount(){return um()},accuracyPercent(){const H=i.reduce((vt,Mt)=>vt+Mt.totalReviews,0),ot=i.reduce((vt,Mt)=>vt+Mt.correctReviews,0);return H>0?Math.round(ot/H*100):100},categoryName(H){var ot;return H?((ot=s.find(vt=>vt.id===H))==null?void 0:ot.name)??"":""},categoryFor(H){if(H)return s.find(ot=>ot.id===H)}}}const et=$2();function pn(){return te.useSyncExternalStore(et.subscribe,et.getSnapshot)}const ia={red:"#DC2626",charcoal:"#18181B",success:"#16A34A",warning:"#EA580C",blue:"#2563EB",accentPink:"#F43F5E"};function Ml(a){return`#${a.trim().replace(/^#/,"")}`}function S1({size:a=40}){const i=a/2,s=a/2,o=a*.32,d=[-Math.sin(0)*o,-Math.sin(120*(Math.PI/180))*o,-Math.sin(240*(Math.PI/180))*o],f=[Math.cos(0)*o*.6,Math.cos(120*(Math.PI/180))*o*.6,Math.cos(240*(Math.PI/180))*o*.6];return m.jsxs("svg",{width:a,height:a,viewBox:`0 0 ${a} ${a}`,children:[[ia.charcoal,ia.accentPink,ia.red].map((g,x)=>m.jsx("circle",{cx:i+d[x]*.5,cy:s+f[x],r:o*.55,fill:g,opacity:.92},x)),m.jsx("circle",{cx:i,cy:s,r:a*.09,fill:"#ffffff"})]})}function As({value:a,label:i,koreanLabel:s,size:o=100,color:d,background:f="#ffffff",className:g=""}){const x=o*.08,S=(o-x)/2,E=2*Math.PI*S;return m.jsxs("div",{className:`circular-stat ${g}`.trim(),children:[m.jsxs("svg",{width:o,height:o,style:{"--circ":E},children:[m.jsx("circle",{className:"circular-track",cx:o/2,cy:o/2,r:S,fill:f,strokeWidth:x}),m.jsx("circle",{className:"circular-ring",cx:o/2,cy:o/2,r:S,fill:"none",stroke:d,strokeWidth:x,strokeDasharray:`${E*.75} ${E}`,strokeLinecap:"round",transform:`rotate(-90 ${o/2} ${o/2})`}),m.jsx("text",{x:o/2,y:o/2,className:"circular-value",fontSize:o*.26,children:a})]}),m.jsxs("span",{className:"circular-label",children:[i," · ",s]})]})}var Dm="";function Rm(a){Dm=a}function L2(a=""){if(!Dm){const i=[...document.getElementsByTagName("script")],s=i.find(o=>o.hasAttribute("data-shoelace"));if(s)Rm(s.getAttribute("data-shoelace"));else{const o=i.find(f=>/shoelace(\.min)?\.js($|\?)/.test(f.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(f.src));let d="";o&&(d=o.getAttribute("src")),Rm(d.split("/").slice(0,-1).join("/"))}}return Dm.replace(/\/$/,"")+(a?`/${a.replace(/^\//,"")}`:"")}var B2={name:"default",resolver:a=>L2(`assets/icons/${a}.svg`)},H2=B2,cy={caret:`
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
  `},U2={name:"system",resolver:a=>a in cy?`data:image/svg+xml,${encodeURIComponent(cy[a])}`:""},V2=U2,q2=[H2,V2],Mm=[];function I2(a){Mm.push(a)}function K2(a){Mm=Mm.filter(i=>i!==a)}function uy(a){return q2.find(i=>i.name===a)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const dh=globalThis,Jm=dh.ShadowRoot&&(dh.ShadyCSS===void 0||dh.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tg=Symbol(),dy=new WeakMap;let k1=class{constructor(i,s,o){if(this._$cssResult$=!0,o!==tg)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=i,this.t=s}get styleSheet(){let i=this.o;const s=this.t;if(Jm&&i===void 0){const o=s!==void 0&&s.length===1;o&&(i=dy.get(s)),i===void 0&&((this.o=i=new CSSStyleSheet).replaceSync(this.cssText),o&&dy.set(s,i))}return i}toString(){return this.cssText}};const F2=a=>new k1(typeof a=="string"?a:a+"",void 0,tg),Xt=(a,...i)=>{const s=a.length===1?a[0]:i.reduce((o,d,f)=>o+(g=>{if(g._$cssResult$===!0)return g.cssText;if(typeof g=="number")return g;throw Error("Value passed to 'css' function must be a 'css' function result: "+g+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(d)+a[f+1],a[0]);return new k1(s,a,tg)},G2=(a,i)=>{if(Jm)a.adoptedStyleSheets=i.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of i){const o=document.createElement("style"),d=dh.litNonce;d!==void 0&&o.setAttribute("nonce",d),o.textContent=s.cssText,a.appendChild(o)}},hy=Jm?a=>a:a=>a instanceof CSSStyleSheet?(i=>{let s="";for(const o of i.cssRules)s+=o.cssText;return F2(s)})(a):a;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Y2,defineProperty:P2,getOwnPropertyDescriptor:X2,getOwnPropertyNames:Q2,getOwnPropertySymbols:Z2,getPrototypeOf:W2}=Object,zs=globalThis,fy=zs.trustedTypes,J2=fy?fy.emptyScript:"",dm=zs.reactiveElementPolyfillSupport,au=(a,i)=>a,$l={toAttribute(a,i){switch(i){case Boolean:a=a?J2:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,i){let s=a;switch(i){case Boolean:s=a!==null;break;case Number:s=a===null?null:Number(a);break;case Object:case Array:try{s=JSON.parse(a)}catch{s=null}}return s}},eg=(a,i)=>!Y2(a,i),py={attribute:!0,type:String,converter:$l,reflect:!1,useDefault:!1,hasChanged:eg};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),zs.litPropertyMetadata??(zs.litPropertyMetadata=new WeakMap);let Ol=class extends HTMLElement{static addInitializer(i){this._$Ei(),(this.l??(this.l=[])).push(i)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(i,s=py){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(i)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(i,s),!s.noAccessor){const o=Symbol(),d=this.getPropertyDescriptor(i,o,s);d!==void 0&&P2(this.prototype,i,d)}}static getPropertyDescriptor(i,s,o){const{get:d,set:f}=X2(this.prototype,i)??{get(){return this[s]},set(g){this[s]=g}};return{get:d,set(g){const x=d==null?void 0:d.call(this);f==null||f.call(this,g),this.requestUpdate(i,x,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(i){return this.elementProperties.get(i)??py}static _$Ei(){if(this.hasOwnProperty(au("elementProperties")))return;const i=W2(this);i.finalize(),i.l!==void 0&&(this.l=[...i.l]),this.elementProperties=new Map(i.elementProperties)}static finalize(){if(this.hasOwnProperty(au("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(au("properties"))){const s=this.properties,o=[...Q2(s),...Z2(s)];for(const d of o)this.createProperty(d,s[d])}const i=this[Symbol.metadata];if(i!==null){const s=litPropertyMetadata.get(i);if(s!==void 0)for(const[o,d]of s)this.elementProperties.set(o,d)}this._$Eh=new Map;for(const[s,o]of this.elementProperties){const d=this._$Eu(s,o);d!==void 0&&this._$Eh.set(d,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const o=new Set(i.flat(1/0).reverse());for(const d of o)s.unshift(hy(d))}else i!==void 0&&s.push(hy(i));return s}static _$Eu(i,s){const o=s.attribute;return o===!1?void 0:typeof o=="string"?o:typeof i=="string"?i.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var i;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(i=this.constructor.l)==null||i.forEach(s=>s(this))}addController(i){var s;(this._$EO??(this._$EO=new Set)).add(i),this.renderRoot!==void 0&&this.isConnected&&((s=i.hostConnected)==null||s.call(i))}removeController(i){var s;(s=this._$EO)==null||s.delete(i)}_$E_(){const i=new Map,s=this.constructor.elementProperties;for(const o of s.keys())this.hasOwnProperty(o)&&(i.set(o,this[o]),delete this[o]);i.size>0&&(this._$Ep=i)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return G2(i,this.constructor.elementStyles),i}connectedCallback(){var i;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostConnected)==null?void 0:o.call(s)})}enableUpdating(i){}disconnectedCallback(){var i;(i=this._$EO)==null||i.forEach(s=>{var o;return(o=s.hostDisconnected)==null?void 0:o.call(s)})}attributeChangedCallback(i,s,o){this._$AK(i,o)}_$ET(i,s){var f;const o=this.constructor.elementProperties.get(i),d=this.constructor._$Eu(i,o);if(d!==void 0&&o.reflect===!0){const g=(((f=o.converter)==null?void 0:f.toAttribute)!==void 0?o.converter:$l).toAttribute(s,o.type);this._$Em=i,g==null?this.removeAttribute(d):this.setAttribute(d,g),this._$Em=null}}_$AK(i,s){var f,g;const o=this.constructor,d=o._$Eh.get(i);if(d!==void 0&&this._$Em!==d){const x=o.getPropertyOptions(d),S=typeof x.converter=="function"?{fromAttribute:x.converter}:((f=x.converter)==null?void 0:f.fromAttribute)!==void 0?x.converter:$l;this._$Em=d;const E=S.fromAttribute(s,x.type);this[d]=E??((g=this._$Ej)==null?void 0:g.get(d))??E,this._$Em=null}}requestUpdate(i,s,o,d=!1,f){var g;if(i!==void 0){const x=this.constructor;if(d===!1&&(f=this[i]),o??(o=x.getPropertyOptions(i)),!((o.hasChanged??eg)(f,s)||o.useDefault&&o.reflect&&f===((g=this._$Ej)==null?void 0:g.get(i))&&!this.hasAttribute(x._$Eu(i,o))))return;this.C(i,s,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(i,s,{useDefault:o,reflect:d,wrapped:f},g){o&&!(this._$Ej??(this._$Ej=new Map)).has(i)&&(this._$Ej.set(i,g??s??this[i]),f!==!0||g!==void 0)||(this._$AL.has(i)||(this.hasUpdated||o||(s=void 0),this._$AL.set(i,s)),d===!0&&this._$Em!==i&&(this._$Eq??(this._$Eq=new Set)).add(i))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const i=this.scheduleUpdate();return i!=null&&await i,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[f,g]of this._$Ep)this[f]=g;this._$Ep=void 0}const d=this.constructor.elementProperties;if(d.size>0)for(const[f,g]of d){const{wrapped:x}=g,S=this[f];x!==!0||this._$AL.has(f)||S===void 0||this.C(f,void 0,g,S)}}let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),(o=this._$EO)==null||o.forEach(d=>{var f;return(f=d.hostUpdate)==null?void 0:f.call(d)}),this.update(s)):this._$EM()}catch(d){throw i=!1,this._$EM(),d}i&&this._$AE(s)}willUpdate(i){}_$AE(i){var s;(s=this._$EO)==null||s.forEach(o=>{var d;return(d=o.hostUpdated)==null?void 0:d.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(i)),this.updated(i)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(i){return!0}update(i){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(i){}firstUpdated(i){}};Ol.elementStyles=[],Ol.shadowRootOptions={mode:"open"},Ol[au("elementProperties")]=new Map,Ol[au("finalized")]=new Map,dm==null||dm({ReactiveElement:Ol}),(zs.reactiveElementVersions??(zs.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nu=globalThis,my=a=>a,vh=nu.trustedTypes,gy=vh?vh.createPolicy("lit-html",{createHTML:a=>a}):void 0,C1="$lit$",Es=`lit$${Math.random().toFixed(9).slice(2)}$`,A1="?"+Es,tS=`<${A1}>`,wo=document,hu=()=>wo.createComment(""),fu=a=>a===null||typeof a!="object"&&typeof a!="function",ag=Array.isArray,eS=a=>ag(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",hm=`[ 	
\f\r]`,Fc=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,vy=/-->/g,by=/>/g,mo=RegExp(`>|${hm}(?:([^\\s"'>=/]+)(${hm}*=${hm}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yy=/'/g,xy=/"/g,E1=/^(?:script|style|textarea|title)$/i,aS=a=>(i,...s)=>({_$litType$:a,strings:i,values:s}),_t=aS(1),Un=Symbol.for("lit-noChange"),We=Symbol.for("lit-nothing"),wy=new WeakMap,bo=wo.createTreeWalker(wo,129);function T1(a,i){if(!ag(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return gy!==void 0?gy.createHTML(i):i}const nS=(a,i)=>{const s=a.length-1,o=[];let d,f=i===2?"<svg>":i===3?"<math>":"",g=Fc;for(let x=0;x<s;x++){const S=a[x];let E,N,_=-1,T=0;for(;T<S.length&&(g.lastIndex=T,N=g.exec(S),N!==null);)T=g.lastIndex,g===Fc?N[1]==="!--"?g=vy:N[1]!==void 0?g=by:N[2]!==void 0?(E1.test(N[2])&&(d=RegExp("</"+N[2],"g")),g=mo):N[3]!==void 0&&(g=mo):g===mo?N[0]===">"?(g=d??Fc,_=-1):N[1]===void 0?_=-2:(_=g.lastIndex-N[2].length,E=N[1],g=N[3]===void 0?mo:N[3]==='"'?xy:yy):g===xy||g===yy?g=mo:g===vy||g===by?g=Fc:(g=mo,d=void 0);const D=g===mo&&a[x+1].startsWith("/>")?" ":"";f+=g===Fc?S+tS:_>=0?(o.push(E),S.slice(0,_)+C1+S.slice(_)+Es+D):S+Es+(_===-2?x:D)}return[T1(a,f+(a[s]||"<?>")+(i===2?"</svg>":i===3?"</math>":"")),o]};class pu{constructor({strings:i,_$litType$:s},o){let d;this.parts=[];let f=0,g=0;const x=i.length-1,S=this.parts,[E,N]=nS(i,s);if(this.el=pu.createElement(E,o),bo.currentNode=this.el.content,s===2||s===3){const _=this.el.content.firstChild;_.replaceWith(..._.childNodes)}for(;(d=bo.nextNode())!==null&&S.length<x;){if(d.nodeType===1){if(d.hasAttributes())for(const _ of d.getAttributeNames())if(_.endsWith(C1)){const T=N[g++],D=d.getAttribute(_).split(Es),R=/([.?@])?(.*)/.exec(T);S.push({type:1,index:f,name:R[2],strings:D,ctor:R[1]==="."?rS:R[1]==="?"?sS:R[1]==="@"?oS:Eh}),d.removeAttribute(_)}else _.startsWith(Es)&&(S.push({type:6,index:f}),d.removeAttribute(_));if(E1.test(d.tagName)){const _=d.textContent.split(Es),T=_.length-1;if(T>0){d.textContent=vh?vh.emptyScript:"";for(let D=0;D<T;D++)d.append(_[D],hu()),bo.nextNode(),S.push({type:2,index:++f});d.append(_[T],hu())}}}else if(d.nodeType===8)if(d.data===A1)S.push({type:2,index:f});else{let _=-1;for(;(_=d.data.indexOf(Es,_+1))!==-1;)S.push({type:7,index:f}),_+=Es.length-1}f++}}static createElement(i,s){const o=wo.createElement("template");return o.innerHTML=i,o}}function Ll(a,i,s=a,o){var g,x;if(i===Un)return i;let d=o!==void 0?(g=s._$Co)==null?void 0:g[o]:s._$Cl;const f=fu(i)?void 0:i._$litDirective$;return(d==null?void 0:d.constructor)!==f&&((x=d==null?void 0:d._$AO)==null||x.call(d,!1),f===void 0?d=void 0:(d=new f(a),d._$AT(a,s,o)),o!==void 0?(s._$Co??(s._$Co=[]))[o]=d:s._$Cl=d),d!==void 0&&(i=Ll(a,d._$AS(a,i.values),d,o)),i}class iS{constructor(i,s){this._$AV=[],this._$AN=void 0,this._$AD=i,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(i){const{el:{content:s},parts:o}=this._$AD,d=((i==null?void 0:i.creationScope)??wo).importNode(s,!0);bo.currentNode=d;let f=bo.nextNode(),g=0,x=0,S=o[0];for(;S!==void 0;){if(g===S.index){let E;S.type===2?E=new bu(f,f.nextSibling,this,i):S.type===1?E=new S.ctor(f,S.name,S.strings,this,i):S.type===6&&(E=new lS(f,this,i)),this._$AV.push(E),S=o[++x]}g!==(S==null?void 0:S.index)&&(f=bo.nextNode(),g++)}return bo.currentNode=wo,d}p(i){let s=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(i,o,s),s+=o.strings.length-2):o._$AI(i[s])),s++}}class bu{get _$AU(){var i;return((i=this._$AM)==null?void 0:i._$AU)??this._$Cv}constructor(i,s,o,d){this.type=2,this._$AH=We,this._$AN=void 0,this._$AA=i,this._$AB=s,this._$AM=o,this.options=d,this._$Cv=(d==null?void 0:d.isConnected)??!0}get parentNode(){let i=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(i==null?void 0:i.nodeType)===11&&(i=s.parentNode),i}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(i,s=this){i=Ll(this,i,s),fu(i)?i===We||i==null||i===""?(this._$AH!==We&&this._$AR(),this._$AH=We):i!==this._$AH&&i!==Un&&this._(i):i._$litType$!==void 0?this.$(i):i.nodeType!==void 0?this.T(i):eS(i)?this.k(i):this._(i)}O(i){return this._$AA.parentNode.insertBefore(i,this._$AB)}T(i){this._$AH!==i&&(this._$AR(),this._$AH=this.O(i))}_(i){this._$AH!==We&&fu(this._$AH)?this._$AA.nextSibling.data=i:this.T(wo.createTextNode(i)),this._$AH=i}$(i){var f;const{values:s,_$litType$:o}=i,d=typeof o=="number"?this._$AC(i):(o.el===void 0&&(o.el=pu.createElement(T1(o.h,o.h[0]),this.options)),o);if(((f=this._$AH)==null?void 0:f._$AD)===d)this._$AH.p(s);else{const g=new iS(d,this),x=g.u(this.options);g.p(s),this.T(x),this._$AH=g}}_$AC(i){let s=wy.get(i.strings);return s===void 0&&wy.set(i.strings,s=new pu(i)),s}k(i){ag(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let o,d=0;for(const f of i)d===s.length?s.push(o=new bu(this.O(hu()),this.O(hu()),this,this.options)):o=s[d],o._$AI(f),d++;d<s.length&&(this._$AR(o&&o._$AB.nextSibling,d),s.length=d)}_$AR(i=this._$AA.nextSibling,s){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,s);i!==this._$AB;){const d=my(i).nextSibling;my(i).remove(),i=d}}setConnected(i){var s;this._$AM===void 0&&(this._$Cv=i,(s=this._$AP)==null||s.call(this,i))}}let Eh=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(i,s,o,d,f){this.type=1,this._$AH=We,this._$AN=void 0,this.element=i,this.name=s,this._$AM=d,this.options=f,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=We}_$AI(i,s=this,o,d){const f=this.strings;let g=!1;if(f===void 0)i=Ll(this,i,s,0),g=!fu(i)||i!==this._$AH&&i!==Un,g&&(this._$AH=i);else{const x=i;let S,E;for(i=f[0],S=0;S<f.length-1;S++)E=Ll(this,x[o+S],s,S),E===Un&&(E=this._$AH[S]),g||(g=!fu(E)||E!==this._$AH[S]),E===We?i=We:i!==We&&(i+=(E??"")+f[S+1]),this._$AH[S]=E}g&&!d&&this.j(i)}j(i){i===We?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,i??"")}};class rS extends Eh{constructor(){super(...arguments),this.type=3}j(i){this.element[this.name]=i===We?void 0:i}}class sS extends Eh{constructor(){super(...arguments),this.type=4}j(i){this.element.toggleAttribute(this.name,!!i&&i!==We)}}class oS extends Eh{constructor(i,s,o,d,f){super(i,s,o,d,f),this.type=5}_$AI(i,s=this){if((i=Ll(this,i,s,0)??We)===Un)return;const o=this._$AH,d=i===We&&o!==We||i.capture!==o.capture||i.once!==o.once||i.passive!==o.passive,f=i!==We&&(o===We||d);d&&this.element.removeEventListener(this.name,this,o),f&&this.element.addEventListener(this.name,this,i),this._$AH=i}handleEvent(i){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,i):this._$AH.handleEvent(i)}}class lS{constructor(i,s,o){this.element=i,this.type=6,this._$AN=void 0,this._$AM=s,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(i){Ll(this,i)}}const fm=nu.litHtmlPolyfillSupport;fm==null||fm(pu,bu),(nu.litHtmlVersions??(nu.litHtmlVersions=[])).push("3.3.3");const cS=(a,i,s)=>{const o=(s==null?void 0:s.renderBefore)??i;let d=o._$litPart$;if(d===void 0){const f=(s==null?void 0:s.renderBefore)??null;o._$litPart$=d=new bu(i.insertBefore(hu(),f),f,void 0,s??{})}return d._$AI(a),d};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const xo=globalThis;let iu=class extends Ol{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const i=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=i.firstChild),i}update(i){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(i),this._$Do=cS(s,this.renderRoot,this.renderOptions)}connectedCallback(){var i;super.connectedCallback(),(i=this._$Do)==null||i.setConnected(!0)}disconnectedCallback(){var i;super.disconnectedCallback(),(i=this._$Do)==null||i.setConnected(!1)}render(){return Un}};var Wy;iu._$litElement$=!0,iu.finalized=!0,(Wy=xo.litElementHydrateSupport)==null||Wy.call(xo,{LitElement:iu});const pm=xo.litElementPolyfillSupport;pm==null||pm({LitElement:iu});(xo.litElementVersions??(xo.litElementVersions=[])).push("4.2.2");var uS=Xt`
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
`,z1=Object.defineProperty,dS=Object.defineProperties,hS=Object.getOwnPropertyDescriptor,fS=Object.getOwnPropertyDescriptors,_y=Object.getOwnPropertySymbols,pS=Object.prototype.hasOwnProperty,mS=Object.prototype.propertyIsEnumerable,mm=(a,i)=>(i=Symbol[a])?i:Symbol.for("Symbol."+a),ng=a=>{throw TypeError(a)},Sy=(a,i,s)=>i in a?z1(a,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[i]=s,Ur=(a,i)=>{for(var s in i||(i={}))pS.call(i,s)&&Sy(a,s,i[s]);if(_y)for(var s of _y(i))mS.call(i,s)&&Sy(a,s,i[s]);return a},yu=(a,i)=>dS(a,fS(i)),v=(a,i,s,o)=>{for(var d=o>1?void 0:o?hS(i,s):i,f=a.length-1,g;f>=0;f--)(g=a[f])&&(d=(o?g(i,s,d):g(d))||d);return o&&d&&z1(i,s,d),d},N1=(a,i,s)=>i.has(a)||ng("Cannot "+s),gS=(a,i,s)=>(N1(a,i,"read from private field"),i.get(a)),vS=(a,i,s)=>i.has(a)?ng("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(a):i.set(a,s),bS=(a,i,s,o)=>(N1(a,i,"write to private field"),i.set(a,s),s),yS=function(a,i){this[0]=a,this[1]=i},xS=a=>{var i=a[mm("asyncIterator")],s=!1,o,d={};return i==null?(i=a[mm("iterator")](),o=f=>d[f]=g=>i[f](g)):(i=i.call(a),o=f=>d[f]=g=>{if(s){if(s=!1,f==="throw")throw g;return g}return s=!0,{done:!1,value:new yS(new Promise(x=>{var S=i[f](g);S instanceof Object||ng("Object expected"),x(S)}),1)}}),d[mm("iterator")]=()=>d,o("next"),"throw"in i?o("throw"):d.throw=f=>{throw f},"return"in i&&o("return"),d};function Dt(a,i){const s=Ur({waitUntilFirstUpdate:!1},i);return(o,d)=>{const{update:f}=o,g=Array.isArray(a)?a:[a];o.update=function(x){g.forEach(S=>{const E=S;if(x.has(E)){const N=x.get(E),_=this[E];N!==_&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[d](N,_)}}),f.call(this,x)}}}var Jt=Xt`
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
 */const wS={attribute:!0,type:String,converter:$l,reflect:!1,hasChanged:eg},_S=(a=wS,i,s)=>{const{kind:o,metadata:d}=s;let f=globalThis.litPropertyMetadata.get(d);if(f===void 0&&globalThis.litPropertyMetadata.set(d,f=new Map),o==="setter"&&((a=Object.create(a)).wrapped=!0),f.set(s.name,a),o==="accessor"){const{name:g}=s;return{set(x){const S=i.get.call(this);i.set.call(this,x),this.requestUpdate(g,S,a,!0,x)},init(x){return x!==void 0&&this.C(g,void 0,a,x),x}}}if(o==="setter"){const{name:g}=s;return function(x){const S=this[g];i.call(this,x),this.requestUpdate(g,S,a,!0,x)}}throw Error("Unsupported decorator location: "+o)};function A(a){return(i,s)=>typeof s=="object"?_S(a,i,s):((o,d,f)=>{const g=d.hasOwnProperty(f);return d.constructor.createProperty(f,o),g?Object.getOwnPropertyDescriptor(d,f):void 0})(a,i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Qt(a){return A({...a,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function xu(a){return(i,s)=>{const o=typeof i=="function"?i:i[s];Object.assign(o,a)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const O1=(a,i,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof i!="object"&&Object.defineProperty(a,i,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $t(a,i){return(s,o,d)=>{const f=g=>{var x;return((x=g.renderRoot)==null?void 0:x.querySelector(a))??null};return O1(s,o,{get(){return f(this)}})}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function SS(a){return(i,s)=>O1(i,s,{async get(){var o;return await this.updateComplete,((o=this.renderRoot)==null?void 0:o.querySelector(a))??null}})}var hh,Gt=class extends iu{constructor(){super(),vS(this,hh,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([a,i])=>{this.constructor.define(a,i)})}emit(a,i){const s=new CustomEvent(a,Ur({bubbles:!0,cancelable:!1,composed:!0,detail:{}},i));return this.dispatchEvent(s),s}static define(a,i=this,s={}){const o=customElements.get(a);if(!o){try{customElements.define(a,i,s)}catch{customElements.define(a,class extends i{},s)}return}let d=" (unknown version)",f=d;"version"in i&&i.version&&(d=" v"+i.version),"version"in o&&o.version&&(f=" v"+o.version),!(d&&f&&d===f)&&console.warn(`Attempted to register <${a}>${d}, but <${a}>${f} has already been registered.`)}attributeChangedCallback(a,i,s){gS(this,hh)||(this.constructor.elementProperties.forEach((o,d)=>{o.reflect&&this[d]!=null&&this.initialReflectedProperties.set(d,this[d])}),bS(this,hh,!0)),super.attributeChangedCallback(a,i,s)}willUpdate(a){super.willUpdate(a),this.initialReflectedProperties.forEach((i,s)=>{a.has(s)&&this[s]==null&&(this[s]=i)})}};hh=new WeakMap;Gt.version="2.20.1";Gt.dependencies={};v([A()],Gt.prototype,"dir",2);v([A()],Gt.prototype,"lang",2);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const kS=(a,i)=>(a==null?void 0:a._$litType$)!==void 0,j1=a=>a.strings===void 0,CS={},AS=(a,i=CS)=>a._$AH=i;var Gc=Symbol(),nh=Symbol(),gm,vm=new Map,Ue=class extends Gt{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(a,i){var s;let o;if(i!=null&&i.spriteSheet)return this.svg=_t`<svg part="svg">
        <use part="use" href="${a}"></use>
      </svg>`,this.svg;try{if(o=await fetch(a,{mode:"cors"}),!o.ok)return o.status===410?Gc:nh}catch{return nh}try{const d=document.createElement("div");d.innerHTML=await o.text();const f=d.firstElementChild;if(((s=f==null?void 0:f.tagName)==null?void 0:s.toLowerCase())!=="svg")return Gc;gm||(gm=new DOMParser);const x=gm.parseFromString(f.outerHTML,"text/html").body.querySelector("svg");return x?(x.part.add("svg"),document.adoptNode(x)):Gc}catch{return Gc}}connectedCallback(){super.connectedCallback(),I2(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),K2(this)}getIconSource(){const a=uy(this.library);return this.name&&a?{url:a.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var a;const{url:i,fromLibrary:s}=this.getIconSource(),o=s?uy(this.library):void 0;if(!i){this.svg=null;return}let d=vm.get(i);if(d||(d=this.resolveIcon(i,o),vm.set(i,d)),!this.initialRender)return;const f=await d;if(f===nh&&vm.delete(i),i===this.getIconSource().url){if(kS(f)){if(this.svg=f,o){await this.updateComplete;const g=this.shadowRoot.querySelector("[part='svg']");typeof o.mutator=="function"&&g&&o.mutator(g)}return}switch(f){case nh:case Gc:this.svg=null,this.emit("sl-error");break;default:this.svg=f.cloneNode(!0),(a=o==null?void 0:o.mutator)==null||a.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};Ue.styles=[Jt,uS];v([Qt()],Ue.prototype,"svg",2);v([A({reflect:!0})],Ue.prototype,"name",2);v([A()],Ue.prototype,"src",2);v([A()],Ue.prototype,"label",2);v([A({reflect:!0})],Ue.prototype,"library",2);v([Dt("label")],Ue.prototype,"handleLabelChange",1);v([Dt(["name","src","library"])],Ue.prototype,"setIcon",1);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ES=new Set(["children","localName","ref","style","className"]),ky=new WeakMap,Cy=(a,i,s,o,d)=>{const f=d==null?void 0:d[i];f===void 0?(a[i]=s,s==null&&i in HTMLElement.prototype&&a.removeAttribute(i)):s!==o&&((g,x,S)=>{let E=ky.get(g);E===void 0&&ky.set(g,E=new Map);let N=E.get(x);S!==void 0?N===void 0?(E.set(x,N={handleEvent:S}),g.addEventListener(x,N)):N.handleEvent=S:N!==void 0&&(E.delete(x),g.removeEventListener(x,N))})(a,f,s)},TS=({react:a,tagName:i,elementClass:s,events:o,displayName:d})=>{const f=new Set(Object.keys(o??{})),g=a.forwardRef(((x,S)=>{const E=a.useRef(new Map),N=a.useRef(null),_={},T={};for(const[D,R]of Object.entries(x))ES.has(D)?_[D==="className"?"class":D]=R:f.has(D)||D in s.prototype?T[D]=R:_[D]=R;return a.useLayoutEffect((()=>{if(N.current===null)return;const D=new Map;for(const R in T)Cy(N.current,R,x[R],E.current.get(R),o),E.current.delete(R),D.set(R,x[R]);for(const[R,W]of E.current)Cy(N.current,R,void 0,W,o);E.current=D})),a.useLayoutEffect((()=>{var D;(D=N.current)==null||D.removeAttribute("defer-hydration")}),[]),_.suppressHydrationWarning=!0,a.createElement(i,{..._,ref:a.useCallback((D=>{N.current=D,typeof S=="function"?S(D):S!==null&&(S.current=D)}),[S])})}));return g.displayName=d,g};var zS="sl-icon";Ue.define("sl-icon");var NS=TS({tagName:zS,elementClass:Ue,react:d_,events:{onSlLoad:"sl-load",onSlError:"sl-error"},displayName:"SlIcon"}),OS=NS;function ue({name:a,label:i,className:s,size:o,style:d}){return m.jsx(OS,{name:a,label:i,className:s,style:{fontSize:o,...d}})}function jS(){pn();const a=et.totalWordsCount(),i=et.dueWords(),s=X_(et.getGreetingId()),o=et.getXp(),d=g1(),f=s2(o,d),g=v1(o,d),x=Math.round(b1(o,d)*100),S=Om(new Date),[E,N]=te.useState(0),[_,T]=te.useState(0);return te.useEffect(()=>{let D=!0;return et.streakCount().then(R=>D&&T(R)),et.todayReviewsCount().then(R=>D&&N(R)),()=>{D=!1}},[et.getSnapshot()]),m.jsxs("div",{children:[m.jsx("header",{className:"header-row",children:m.jsxs("div",{className:"header-brand",children:[m.jsx(S1,{size:40}),m.jsxs("div",{children:[m.jsx("p",{className:"header-title",children:"Woori · 우리"}),m.jsx("p",{className:"header-subtitle",children:$("app.subtitle")})]})]})}),m.jsxs("div",{className:"greeting-card card",onClick:()=>et.setGreeting(Qm(s).id),children:[m.jsx("img",{className:"greeting-image",src:Jc(s.imageName),alt:s.artistName}),m.jsxs("div",{children:[m.jsx("p",{className:"greeting-text-rus",children:s.russian}),m.jsx("p",{className:"greeting-text-kor",children:s.korean}),m.jsx("p",{className:"greeting-artist",children:s.artistName})]})]}),f?m.jsxs("div",{className:"card mentor-card",onClick:()=>et.selectTab("gallery"),children:[m.jsx("img",{className:"mentor-avatar",src:Jc(f.imageName),alt:f.stageName}),m.jsxs("div",{className:"mentor-body",children:[m.jsxs("p",{className:"mentor-title",children:[$("home.mentor")," — ",f.stageName," ",m.jsx("span",{className:"mentor-role",children:f.role})]}),m.jsx("div",{className:"progress-track",children:m.jsx("div",{className:"progress-fill",style:{width:`${x}%`}})}),m.jsx("p",{className:"mentor-hint",children:g?`${o} XP · ${$("home.mentor.toNext",{name:g.stageName,count:Math.max(0,g.tierThreshold-o)})}`:`${o} XP · ${$("home.mentor.allOpen")}`})]})]}):m.jsxs("div",{className:"card mentor-card",onClick:()=>et.selectTab("gallery"),children:[m.jsx("img",{className:"mentor-avatar",src:Jc(s.imageName),alt:s.artistName}),m.jsxs("div",{className:"mentor-body",children:[m.jsx("p",{className:"mentor-title",children:$("home.mentor.none")}),m.jsxs("p",{className:"mentor-hint",children:[o," XP"]})]})]}),m.jsx("h2",{className:"section-title",children:$("home.sectionStats")}),m.jsxs("div",{className:"stats-row",children:[m.jsx(As,{value:`${a}`,label:$("home.stats.words"),koreanLabel:"총 단어",color:ia.charcoal,className:"circular-stat-charcoal"}),m.jsx(As,{value:`${i.length}`,label:$("home.stats.toReview"),koreanLabel:"오늘 복습",color:ia.red,background:i.length>0?"#FEF2F2":"#ffffff"})]}),m.jsx("button",{className:"primary-btn mb24",onClick:()=>et.startDueReview(),children:m.jsxs("span",{children:[m.jsx("span",{children:i.length>0?`${$("home.startReview")} (${i.length})`:$("home.startCards")}),m.jsx("span",{className:"btn-kor",children:"시작하기"})]})}),m.jsxs("div",{className:"card mission-card",children:[m.jsxs("div",{className:"mission-head",children:[m.jsx("span",{className:"mission-icon",children:m.jsx(ue,{name:"bullseye"})}),m.jsxs("div",{className:"mission-body",children:[m.jsxs("p",{className:"mission-title",children:[$("home.mission"),": ",$("mission."+S.kind+".title")]}),m.jsx("p",{className:"mission-desc",children:$("mission."+S.kind+".desc")})]}),m.jsx("span",{className:"mission-reward",children:$("home.mission.reward",{count:S.rewardXp})})]}),m.jsx("div",{className:"progress-track",children:m.jsx("div",{className:"progress-fill",style:{width:`${Math.round(y1(S,{totalWords:a,totalReviews:0,correctReviews:0,masteredWords:0,todayReviews:E,streak:_})*100)}%`}})})]}),m.jsx("h2",{className:"section-title",children:$("home.sectionQuick")}),m.jsxs("div",{className:"quick-actions",children:[m.jsxs("button",{className:"quick-action card-flat",onClick:()=>et.openAddWord(),children:[m.jsx("span",{className:"quick-icon",style:{background:`${ia.red}1a`,color:ia.red},children:m.jsx(ue,{name:"plus",size:20})}),m.jsx("span",{className:"quick-title",children:$("home.quick.add")}),m.jsx("span",{className:"quick-subtitle",children:"단어 추가"})]}),m.jsxs("button",{className:"quick-action card-flat",onClick:()=>et.openScanOcr(),children:[m.jsx("span",{className:"quick-icon",style:{background:"var(--charcoal-soft)",color:"var(--charcoal)"},children:m.jsx(ue,{name:"camera",size:20})}),m.jsx("span",{className:"quick-title",children:$("home.quick.scan")}),m.jsx("span",{className:"quick-subtitle",children:"텍스트 스캔 (OCR)"})]}),m.jsxs("button",{className:"quick-action card-flat",onClick:()=>et.startDifficultReview(),children:[m.jsx("span",{className:"quick-icon",style:{background:`${ia.warning}1a`,color:ia.warning},children:m.jsx(ue,{name:"exclamation-triangle",size:20})}),m.jsx("span",{className:"quick-title",children:$("home.quick.difficult",{count:et.difficultWords().length})}),m.jsx("span",{className:"quick-subtitle",children:"어려운 단어 복습"})]}),m.jsxs("button",{className:"quick-action card-flat",onClick:()=>et.openGuide(),children:[m.jsx("span",{className:"quick-icon",style:{background:`${ia.blue}1a`,color:ia.blue},children:m.jsx(ue,{name:"question-circle",size:20})}),m.jsx("span",{className:"quick-title",children:$("home.quick.help")}),m.jsx("span",{className:"quick-subtitle",children:"사용 방법"})]}),m.jsxs("button",{className:"quick-action card-flat",onClick:()=>et.openPacks(),children:[m.jsx("span",{className:"quick-icon",style:{background:`${ia.success}1a`,color:ia.success},children:m.jsx(ue,{name:"box-seam",size:20})}),m.jsx("span",{className:"quick-title",children:$("home.quick.packs")}),m.jsx("span",{className:"quick-subtitle",children:"단어 팩"})]})]}),a===0&&m.jsxs("div",{className:"empty-hint",children:[m.jsx("span",{style:{fontSize:24},children:m.jsx(ue,{name:"lightbulb",size:24})}),m.jsxs("span",{children:[$("home.emptyTitle")," ",$("home.emptyText")]})]})]})}const Ay={1:ia.red,2:ia.warning,3:ia.success,4:ia.blue};function DS({onRate:a}){return m.jsx("div",{className:"rating-row",children:jm.map(i=>m.jsxs("button",{className:"rating-btn",style:{background:`${Ay[i.value]}18`,color:Ay[i.value]},onClick:()=>a(i.value),children:[m.jsx("span",{children:i.label}),m.jsx("span",{className:"rating-kor",children:i.koreanLabel})]},i.value))})}function RS(a){const i=Math.max(1,Math.round((a.nextReviewAt-Date.now())/864e5));return $("cards.nextReview",{count:i})}function MS(){pn();const a=et.getCardsQueue(),i=et.getCardIndex(),s=et.getIsCardFlipped(),o=et.difficultWords().length;if(a.length===0)return m.jsxs("div",{className:"cards-done center",children:[m.jsx("div",{style:{fontSize:48,marginBottom:12},children:m.jsx(ue,{name:"stars",size:48,style:{color:"var(--warning)"}})}),m.jsx("h2",{children:$("cards.nothing")}),m.jsx("p",{className:"muted",children:$("cards.nothingDesc")}),m.jsx("button",{className:"primary-btn mt20",onClick:()=>et.startReviewAll(),children:m.jsxs("span",{children:[$("cards.reviewAll"),m.jsx("span",{className:"btn-kor",children:"모든 단어 복습"})]})}),o>0&&m.jsx("button",{className:"secondary-btn mt12",onClick:()=>et.startDifficultReview(),children:m.jsxs("span",{children:[$("cards.difficult",{count:o}),m.jsx("span",{className:"btn-kor",children:"어려운 단어"})]})})]});if(i>=a.length)return m.jsxs("div",{className:"cards-done center",children:[m.jsx("div",{style:{fontSize:48,marginBottom:12},children:m.jsx(ue,{name:"stars",size:48,style:{color:"var(--warning)"}})}),m.jsx("h2",{children:$("cards.doneTitle")}),m.jsx("p",{className:"muted",children:$("cards.doneDesc")}),m.jsx("button",{className:"primary-btn mt20",onClick:()=>et.startReviewAll(),children:m.jsxs("span",{children:[$("cards.reviewAll"),m.jsx("span",{className:"btn-kor",children:"모든 단어 복습"})]})}),o>0&&m.jsx("button",{className:"secondary-btn mt12",onClick:()=>et.startDifficultReview(),children:m.jsxs("span",{children:[$("cards.difficult",{count:o}),m.jsx("span",{className:"btn-kor",children:"어려운 단어"})]})})]});const d=a[i];return m.jsxs("div",{children:[m.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[m.jsx("span",{className:"muted",style:{fontSize:13},children:$("cards.progress",{i:i+1,total:a.length})}),m.jsxs("div",{style:{display:"flex",gap:8},children:[m.jsx("button",{className:"icon-btn",onClick:()=>et.openEditWord(d),"aria-label":$("cards.editAria"),children:m.jsx(ue,{name:"pencil"})}),m.jsx("button",{className:"icon-btn",onClick:()=>et.speakText(d.korean),"aria-label":$("cards.speakAria"),children:m.jsx(ue,{name:"volume-up"})})]})]}),m.jsx("div",{className:"progress-track",children:m.jsx("div",{className:"progress-fill",style:{width:`${(i+1)/a.length*100}%`}})}),m.jsx("div",{className:"flip-card",onClick:()=>et.flipCard(),children:m.jsxs("div",{className:`flip-inner ${s?"flipped":""}`,children:[m.jsx("div",{className:"flip-face flip-front",children:m.jsxs("div",{className:"flashcard",children:[m.jsx("span",{className:"fc-korean",children:d.korean}),d.hanja&&m.jsx("span",{className:"fc-hanja",children:d.hanja}),et.getShowRomaja()&&m.jsx("span",{className:"fc-romaja",children:d.romaja}),m.jsx("button",{className:"speaker-btn mt16",onClick:f=>{f.stopPropagation(),et.speakText(d.korean)},children:m.jsx(ue,{name:"volume-up"})}),m.jsx("span",{className:"muted mt16",style:{fontSize:12},children:$("cards.tapToFlip")})]})}),m.jsx("div",{className:"flip-face flip-back",children:m.jsxs("div",{className:"flashcard",children:[m.jsx("span",{className:"fc-translation",children:d.translation}),m.jsx("span",{className:"fc-korean mt12",style:{fontSize:26},children:d.korean}),d.exampleSentence&&m.jsxs("div",{className:"fc-example",children:[m.jsx("div",{children:d.exampleSentence}),d.exampleTranslation&&m.jsx("div",{children:d.exampleTranslation})]}),m.jsxs("div",{className:"fc-stats",children:[m.jsx("span",{children:$("cards.reps",{count:d.repetitions})}),m.jsx("span",{children:$("cards.interval",{count:d.intervalDays})}),m.jsxs("span",{children:["EF: ",d.easeFactor.toFixed(2)," · ",RS(d)]})]})]})})]})}),s&&m.jsxs("div",{children:[m.jsx("p",{className:"muted center",style:{fontSize:13,marginTop:16},children:$("cards.evaluate")}),m.jsx(DS,{onRate:f=>et.rateCard(f)})]})]})}function $S(){pn();const a=et.getQuizQuestion(),i=et.getSelectedOptionIndex(),s=et.getIsAnswerChecked(),o=et.getQuizScore(),d=et.getQuizTotalCount(),f=et.getQuizReward();return a?m.jsxs("div",{children:[m.jsxs("div",{className:"card quiz-card",style:{marginBottom:16},children:[m.jsx("button",{className:"speaker-btn",style:{width:56,height:56,fontSize:24,margin:"0 auto"},onClick:()=>et.replayQuizAudio(),children:m.jsx(ue,{name:"volume-up",size:24})}),m.jsx("p",{className:"quiz-korean",children:a.prompt}),et.getShowRomaja()&&a.promptRomaja&&m.jsx("p",{className:"muted",style:{margin:0},children:a.promptRomaja}),m.jsx("div",{className:"quiz-options",children:a.options.map((g,x)=>{let S="quiz-option";return s?x===a.correctOptionIndex?S+=" correct":x===i&&(S+=" wrong"):x===i&&(S+=" selected"),m.jsx("button",{className:S,onClick:()=>et.selectQuizOption(x),children:g.text},x)})}),s?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"reveal-row",children:[m.jsxs("span",{children:[$("listen.answer"),":"," ",i===a.correctOptionIndex?$("listen.correct"):$("listen.wrong")]}),m.jsxs("span",{children:[$("listen.word"),": ",a.options[a.correctOptionIndex].text]})]}),m.jsx("button",{className:"primary-btn mt20",onClick:()=>et.loadNextQuizQuestion("listen"),children:m.jsxs("span",{children:[$("common.next"),m.jsx("span",{className:"btn-kor",children:"다음"})]})})]}):m.jsx("button",{className:"primary-btn mt20",onClick:()=>et.checkQuizAnswer(),disabled:i===null,style:i===null?{opacity:.5}:{},children:m.jsxs("span",{children:[$("common.check"),m.jsx("span",{className:"btn-kor",children:"확인"})]})})]}),m.jsx("p",{className:"quiz-score center",children:$("listen.score",{score:o,total:d})}),f.rewardGifName&&m.jsx("div",{className:"reward-overlay",onClick:()=>et.dismissQuizReward(),children:m.jsxs("div",{className:"reward-box",children:[m.jsx("img",{src:Zm(f.rewardGifName),alt:"BTS reward"}),m.jsx("h3",{children:$("reward.title")}),m.jsx("p",{children:$("reward.body")}),m.jsx("button",{className:"primary-btn",onClick:()=>et.dismissQuizReward(),children:$("reward.continue")})]})})]}):m.jsxs("div",{className:"cards-done center",children:[m.jsx("div",{style:{fontSize:48,marginBottom:12},children:m.jsx(ue,{name:"headphones",size:48,style:{color:"var(--red)"}})}),m.jsx("h2",{children:$("listen.needWords")}),m.jsx("p",{className:"muted",children:$("listen.needWordsDesc")})]})}function LS(){pn();const a=et.getQuizQuestion(),i=et.getSelectedOptionIndex(),s=et.getIsAnswerChecked(),o=et.getQuizScore(),d=et.getQuizTotalCount(),f=et.getQuizReward();return!a||a.kind!=="reverse"?m.jsxs("div",{className:"cards-done center",children:[m.jsx("div",{style:{fontSize:48,marginBottom:12},children:m.jsx(ue,{name:"patch-question",size:48,style:{color:"var(--red)"}})}),m.jsx("h2",{children:$("quiz.title")}),m.jsx("p",{className:"muted",children:$("quiz.desc")}),m.jsx("button",{className:"primary-btn mt20",onClick:()=>et.loadNextQuizQuestion("reverse"),children:m.jsxs("span",{children:[$("quiz.start"),m.jsx("span",{className:"btn-kor",children:"시작"})]})})]}):m.jsxs("div",{children:[m.jsxs("div",{className:"card quiz-card",style:{marginBottom:16},children:[m.jsx("p",{className:"quiz-korean",style:{fontSize:30},children:a.prompt}),m.jsx("div",{className:"quiz-options",children:a.options.map((g,x)=>{let S="quiz-option";return s?x===a.correctOptionIndex?S+=" correct":x===i&&(S+=" wrong"):x===i&&(S+=" selected"),m.jsxs("button",{className:S,onClick:()=>et.selectQuizOption(x),children:[g.text,g.romaja&&et.getShowRomaja()&&m.jsx("span",{className:"quiz-option-romaja",children:g.romaja})]},x)})}),s?m.jsxs(m.Fragment,{children:[m.jsxs("div",{className:"reveal-row",children:[m.jsx("span",{children:i===a.correctOptionIndex?$("listen.correct"):$("listen.wrong")}),m.jsxs("span",{children:[$("listen.answer"),": ",a.options[a.correctOptionIndex].text]})]}),m.jsx("button",{className:"primary-btn mt20",onClick:()=>et.loadNextQuizQuestion("reverse"),children:m.jsxs("span",{children:[$("common.next"),m.jsx("span",{className:"btn-kor",children:"다음"})]})})]}):m.jsx("button",{className:"primary-btn mt20",onClick:()=>et.checkQuizAnswer(),disabled:i===null,style:i===null?{opacity:.5}:{},children:m.jsxs("span",{children:[$("common.check"),m.jsx("span",{className:"btn-kor",children:"확인"})]})})]}),m.jsx("p",{className:"quiz-score center",children:$("listen.score",{score:o,total:d})}),f.rewardGifName&&m.jsx("div",{className:"reward-overlay",onClick:()=>et.dismissQuizReward(),children:m.jsxs("div",{className:"reward-box",children:[m.jsx("img",{src:Zm(f.rewardGifName),alt:"BTS reward"}),m.jsx("h3",{children:$("reward.title")}),m.jsx("p",{children:$("reward.body")}),m.jsx("button",{className:"primary-btn",onClick:()=>et.dismissQuizReward(),children:$("reward.continue")})]})})]})}function BS(a){if(a.repetitions>=3)return{text:$("word.status.mastered"),cls:"badge-mastered"};if(a.nextReviewAt<=Date.now())return{text:$("word.status.due"),cls:"badge-due"};const i=Math.max(1,Math.round((a.nextReviewAt-Date.now())/(1440*60*1e3)));return{text:$("word.status.in",{count:i}),cls:""}}function HS({word:a,selectable:i=!1,selected:s=!1}){const o=et.categoryFor(a.categoryId),d=et.sourceFor(a.sourceId),f=BS(a),g=a.difficulty;return m.jsxs("div",{className:`word-item card-flat ${i?"word-selectable":""} ${s?"word-selected":""}`,onClick:()=>i?et.toggleSelectWord(a.id):et.openWordDetail(a),children:[i&&m.jsx("span",{className:`word-check ${s?"word-check-on":""}`,children:s?m.jsx(ue,{name:"check",size:14}):null}),m.jsxs("div",{className:"word-item-head",children:[m.jsxs("div",{className:"word-item-main",children:[m.jsx("span",{className:"word-korean",children:a.korean}),a.hanja&&m.jsx("span",{className:"word-hanja",children:a.hanja}),et.getShowRomaja()&&m.jsx("span",{className:"word-romaja",children:a.romaja})]}),m.jsx("button",{className:"icon-btn",onClick:x=>{x.stopPropagation(),et.speakText(a.korean)},children:m.jsx(ue,{name:"volume-up"})})]}),m.jsx("div",{className:"word-translation",children:a.translation}),a.exampleSentence&&m.jsx("div",{className:"word-example",children:a.exampleSentence}),m.jsxs("div",{className:"word-meta",children:[o&&m.jsxs("span",{className:"badge badge-cat",style:{background:Ml(o.colorHex)},children:[o.emoji," ",o.name]}),m.jsxs("span",{className:"badge",children:[$("word.level")," ",g]}),m.jsx("span",{className:`badge ${f.cls}`,children:f.text}),d&&m.jsx("span",{className:"badge",children:Ch(d)}),a.tags.map(x=>m.jsxs("span",{className:"badge",children:["#",x]},x))]})]})}function D1({tags:a,onChange:i}){pn();const[s,o]=te.useState(""),[d,f]=te.useState(!1),g=te.useRef(null),x=et.getCategories().map(T=>T.name);te.useEffect(()=>{function T(D){g.current&&!g.current.contains(D.target)&&f(!1)}return document.addEventListener("mousedown",T),()=>document.removeEventListener("mousedown",T)},[]);const S=new Set(a.map(T=>T.toLowerCase())),E=x.filter(T=>!S.has(T.toLowerCase())&&T.toLowerCase().includes(s.toLowerCase()));function N(T){const D=T.trim();!D||S.has(D.toLowerCase())||(i([...a,D]),o(""),f(!1))}function _(T){i(a.filter(D=>D!==T))}return m.jsxs("div",{ref:g,style:{position:"relative",width:"100%",marginTop:4},children:[a.length>0&&m.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:a.map(T=>m.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,background:"var(--red)",color:"#fff",borderRadius:8,padding:"2px 8px",fontSize:11,fontWeight:600},children:[T,m.jsx("button",{onClick:()=>_(T),style:{background:"none",color:"#fff",fontSize:13,padding:0,lineHeight:1},children:m.jsx(ue,{name:"x",size:12})})]},T))}),m.jsx("input",{className:"form-input",value:s,onChange:T=>{o(T.target.value),f(!0)},onFocus:()=>f(!0),onKeyDown:T=>{T.key==="Enter"&&(T.preventDefault(),E.length>0?N(E[0]):s.trim()&&N(s))},placeholder:a.length>0?"ещё тег...":"теги через запятую",style:{width:"100%",fontSize:12,color:"var(--text-secondary)"}}),d&&s.trim()&&m.jsxs("div",{style:{position:"absolute",top:"100%",left:0,right:0,background:"#fff",border:"1px solid var(--border)",borderRadius:8,boxShadow:"0 4px 12px rgba(0,0,0,.1)",maxHeight:120,overflowY:"auto",zIndex:10},children:[E.map(T=>m.jsx("button",{onClick:()=>N(T),style:{display:"block",width:"100%",textAlign:"left",padding:"8px 12px",fontSize:13,background:"none",borderBottom:"1px solid var(--border)"},children:T},T)),s.trim()&&!S.has(s.trim().toLowerCase())&&m.jsxs("button",{onClick:()=>N(s),style:{display:"block",width:"100%",textAlign:"left",padding:"8px 12px",fontSize:13,fontWeight:600,background:"none"},children:["+ «",s.trim(),"»"]})]})]})}function US(){pn();const a=et.filteredWords(),i=et.getCategories(),s=et.getSelectedCategoryId(),o=et.getSearchQuery(),d=et.isSelectionActive(),f=et.getSelectedIds(),[g,x]=te.useState(!1),[S,E]=te.useState([]);return m.jsxs("div",{children:[m.jsxs("div",{className:"search-row",children:[m.jsx("input",{className:"search-input",placeholder:$("dict.search"),value:o,onChange:N=>et.setSearchQuery(N.target.value)}),m.jsx("button",{className:"icon-btn",onClick:()=>et.toggleSelectionMode(),"aria-label":$(d?"dict.selectOnAria":"dict.selectOffAria"),style:d?{background:"var(--red)",color:"#fff",border:"none"}:{},children:d?m.jsx(ue,{name:"x-lg"}):m.jsx(ue,{name:"check-square"})})]}),d&&m.jsx("p",{className:"selection-hint",children:$("dict.selectionHint",{count:f.size})}),m.jsxs("div",{className:"chips-row",children:[m.jsx("button",{className:`chip ${s===null?"active":""}`,onClick:()=>et.setSelectedCategory(null),children:$("dict.all")}),i.map(N=>m.jsxs("button",{className:`chip ${s===N.id?"active":""}`,onClick:()=>et.setSelectedCategory(s===N.id?null:N.id),children:[N.emoji," ",N.name]},N.id)),m.jsx("button",{className:"chip",onClick:()=>et.openCreateCategory(),children:$("dict.addCategory")})]}),a.length===0?m.jsxs("div",{className:"empty-hint",children:[m.jsx("span",{style:{fontSize:24},children:m.jsx(ue,{name:"inbox",size:24,style:{color:"var(--text-tertiary)"}})}),m.jsx("span",{children:$(o||s?"dict.emptyFound":"dict.emptyEmpty")})]}):m.jsx("div",{className:"word-list",children:a.map(N=>m.jsx(HS,{word:N,selectable:d,selected:f.has(N.id)},N.id))}),m.jsx("button",{className:"fab",onClick:()=>et.openAddWord(),"aria-label":$("dict.addWordAria"),children:"+"}),d&&m.jsxs("div",{className:"bulk-toolbar",children:[m.jsx("span",{className:"bulk-count",children:f.size}),m.jsx("button",{className:"secondary-btn",onClick:()=>{E([]),x(!0)},children:$("dict.tags")}),m.jsx("button",{className:"danger-btn",onClick:()=>et.deleteSelection(),children:$("dict.delete")}),m.jsx("button",{className:"secondary-btn",onClick:()=>et.clearSelection(),children:$("common.cancel")})]}),g&&m.jsx("div",{className:"overlay",onClick:()=>x(!1),children:m.jsxs("div",{className:"sheet",onClick:N=>N.stopPropagation(),children:[m.jsxs("div",{className:"sheet-header",children:[m.jsx("h3",{className:"sheet-title",children:$("dict.tagsDialog",{count:f.size})}),m.jsx("button",{className:"sheet-close",onClick:()=>x(!1),children:m.jsx(ue,{name:"x-lg"})})]}),m.jsx(D1,{tags:S,onChange:E}),m.jsx("p",{style:{fontSize:11,color:"var(--text-secondary)",margin:"8px 0 16px"},children:$("dict.tagsHint")}),m.jsx("button",{className:"primary-btn",onClick:()=>{et.assignTagsToSelected(S),x(!1)},children:$("dict.assign")})]})})]})}function VS(){pn();const[a,i]=te.useState(0),[s,o]=te.useState(0);te.useEffect(()=>{let R=!0;return et.streakCount().then(W=>R&&i(W)),et.todayReviewsCount().then(W=>R&&o(W)),()=>{R=!1}},[et.getSnapshot()]);const d=et.totalWordsCount(),f=et.masteredWordsCount(),g=et.avgDaysToMaster(),x=et.dueWords().length,S=et.masteredByMonth(),E=et.masteredByCategory(),N=et.getWords(),T=et.getCategories().map(R=>({category:R,count:N.filter(W=>W.categoryId===R.id).length})),D=N.filter(R=>R.categoryId===null).length;return m.jsxs("div",{children:[m.jsxs("div",{className:"proverb-card",children:[m.jsx("p",{className:"proverb-kor",children:"티끌 모아 태산"}),m.jsx("p",{className:"proverb-rus",children:$("progress.proverb")})]}),m.jsx("h2",{className:"section-title",children:$("progress.stat")}),m.jsxs("div",{className:"progress-grid",children:[m.jsx(As,{value:`${d}`,label:$("home.stats.words"),koreanLabel:"총 단어",color:ia.charcoal,className:"circular-stat-charcoal"}),m.jsx(As,{value:`${f}`,label:$("progress.mastered"),koreanLabel:"완료",color:ia.success}),m.jsx(As,{value:`${g??"—"}`,label:$("progress.daysToMaster"),koreanLabel:"완료까지",color:ia.accentPink}),m.jsx(As,{value:`${x}`,label:$("progress.dueToday"),koreanLabel:"오늘",color:ia.red}),m.jsx(As,{value:`${s}`,label:$("progress.today"),koreanLabel:"복습",color:ia.blue}),m.jsx(As,{value:`${a}`,label:$("progress.streakDays"),koreanLabel:"연속",color:ia.warning})]}),m.jsx("h2",{className:"section-title",children:$("progress.byMonth")}),m.jsx("div",{className:"month-bars",children:S.map(R=>{const W=Math.max(1,...S.map(mt=>mt.count));return m.jsxs("div",{className:"month-bar-col",children:[m.jsx("span",{className:"month-bar-num",children:R.count>0?R.count:""}),m.jsx("div",{className:"month-bar",style:{height:`${Math.round(R.count/W*100)}%`}}),m.jsx("span",{className:"month-bar-label",children:R.month})]},R.month)})}),E.length>0&&m.jsxs(m.Fragment,{children:[m.jsx("h2",{className:"section-title",children:$("progress.byCat")}),m.jsx("div",{className:"cat-breakdown",children:E.map(({categoryName:R,count:W})=>m.jsxs("div",{className:"cat-row card-flat",children:[m.jsx("span",{className:"cat-emoji",style:{backgroundColor:"#DCEDFE"},children:m.jsx(ue,{name:"check-lg",size:16,style:{color:"var(--success-strong)"}})}),m.jsx("span",{children:R}),m.jsx("span",{className:"cat-count",children:W})]},R))})]}),m.jsx("h2",{className:"section-title",children:$("progress.byCatDict")}),m.jsxs("div",{className:"cat-breakdown",children:[T.map(({category:R,count:W})=>m.jsxs("div",{className:"cat-row card-flat",children:[m.jsx("span",{className:"cat-emoji",style:{backgroundColor:`${Ml(R.colorHex)}20`},children:R.emoji}),m.jsx("span",{children:R.name}),m.jsx("span",{className:"cat-count",children:W})]},R.id)),D>0&&m.jsxs("div",{className:"cat-row card-flat",children:[m.jsx("span",{className:"cat-emoji",children:m.jsx(ue,{name:"file-text",size:16,style:{color:"var(--text-secondary)"}})}),m.jsx("span",{children:$("progress.noCategory")}),m.jsx("span",{className:"cat-count",children:D})]})]})]})}function qS(){pn();const a=et.getXp(),i=g1(),s=Ah(a,i),o=et.getAchievements(),d=o.filter(x=>x.earnedAt).length,f=Math.round(b1(a,i)*100),g=v1(a,i);return m.jsxs("div",{children:[m.jsx("header",{className:"header-row",children:m.jsx("div",{className:"header-brand",children:m.jsxs("div",{children:[m.jsx("p",{className:"header-title",children:$("gallery.title")}),m.jsx("p",{className:"header-subtitle",children:"컬렉션"})]})})}),m.jsxs("div",{className:"card",style:{marginBottom:16},children:[m.jsxs("div",{className:"xp-row",children:[m.jsxs("span",{className:"xp-score",children:[m.jsx(ue,{name:"heart",size:14,style:{color:"var(--accent-pink)"}})," ",a," ",m.jsx("span",{className:"muted",children:"XP"})]}),m.jsx("span",{className:"xp-label",children:g?`${$("gallery.toNext",{name:g.stageName,count:Math.max(0,g.tierThreshold-a)})}`:$("gallery.allOpen")})]}),m.jsx("div",{className:"progress-track",style:{marginTop:8},children:m.jsx("div",{className:"progress-fill",style:{width:`${f}%`,background:"var(--red)"}})})]}),m.jsx("h2",{className:"section-title",children:$("gallery.sectionCards")}),m.jsx("div",{className:"gallery-grid",children:i.map((x,S)=>{const E=S<=s;return m.jsxs("div",{className:`photo-card ${E?"":"photo-locked"}`,children:[m.jsxs("div",{className:"photo-card-img-wrap",children:[m.jsx("img",{className:"photo-card-img",src:Jc(x.imageName),alt:x.stageName}),!E&&m.jsx("span",{className:"photo-lock",children:m.jsx(ue,{name:"lock"})})]}),m.jsx("p",{className:"photo-name",children:x.stageName}),m.jsx("p",{className:"photo-role",children:x.role||"Участник"}),m.jsx("p",{className:"photo-status",children:E?$("gallery.unlocked"):`${x.tierThreshold} XP`})]},x.id)})}),m.jsx("h2",{className:"section-title",children:$("gallery.sectionAchievements")}),m.jsx("div",{className:"achievement-list",children:o.map(x=>m.jsxs("div",{className:`achievement-row card-flat ${x.earnedAt?"":"achievement-locked"}`,children:[m.jsx("span",{className:"achievement-icon",children:x.earnedAt?m.jsx(ue,{name:x.icon}):m.jsx(ue,{name:"lock"})}),m.jsxs("div",{className:"achievement-body",children:[m.jsx("p",{className:"achievement-title",children:$("achievement."+x.id+".title")}),m.jsx("p",{className:"achievement-desc",children:$("achievement."+x.id+".desc")})]}),x.earnedAt&&m.jsx("span",{className:"achievement-check",children:m.jsx(ue,{name:"check-lg"})})]},x.id))}),d===0&&m.jsxs("div",{className:"empty-hint",children:[m.jsx("span",{style:{fontSize:24},children:m.jsx(ue,{name:"gift",size:24})}),m.jsx("span",{children:$("gallery.empty")})]})]})}const IS=["gemini-3.8-flash","gemini-3.7-flash","gemini-3.6-flash","gemini-3.5-flash","gemini-flash-latest"];class Th extends Error{constructor(i){super(i),this.name="GeminiOcrError"}}const Ey=()=>new Th("Укажите ключ Gemini API, чтобы распознавать текст с фото."),mu=()=>new Th("Gemini вернул неожиданный ответ."),Ty=()=>new Th("Не удалось подготовить изображение для распознавания."),R1="gemini_api_key";function $m(){try{return(localStorage.getItem(R1)??"").trim()}catch{return""}}function KS(a){try{localStorage.setItem(R1,a.trim())}catch{}}const FS=/[\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+/g;function bm(a){const i=a.match(FS)??[],s=new Set,o=[];for(const d of i){const f=d.trim();f&&!s.has(f)&&(s.add(f),o.push(f))}return o}async function GS(a,i){const s=i.trim();let o=Ey();if(s)try{const d=await PS(a,s),f=M1(d);if(f.length>0)return f}catch(d){o=d instanceof Error?d:mu()}throw s?o:Ey()}function M1(a){const i=YS(a);if(i&&i.length>0)return i;const s=[],o=new Set,d=["	"," | ","|"," — "," – "," - "," – ",":","："];for(const f of a.split(/\r?\n/)){const g=f.trim();if(!g)continue;let x="",S="";for(const E of d){const N=g.indexOf(E);if(N>=0){x=g.slice(0,N).trim(),S=g.slice(N+E.length).trim();break}}if(!x){const N=bm(g)[0];if(!N)continue;x=N,S=g.replace(N,"").trim().replace(/^[\s.,;:!?()–—-]+|[\s.,;:!?()–—-]+$/g,"")}!x||!T_(x)||o.has(x)||(bm(S).join("")===S&&(S=""),o.add(x),s.push({korean:x,translation:S}))}if(s.length===0)for(const f of bm(a))s.push({korean:f,translation:""});return s}function YS(a){const i=a.replace(/```json/g,"").replace(/```/g,"").trim(),s=i.indexOf("["),o=i.lastIndexOf("]");if(s<0||o<s)return null;const d=i.slice(s,o+1);let f;try{f=JSON.parse(d)}catch{return null}if(!Array.isArray(f))return null;const g=[],x=new Set;for(const S of f){if(!S||typeof S!="object")continue;const E=S,N=(typeof E.korean=="string"?E.korean:typeof E.word=="string"?E.word:"").trim(),_=(typeof E.translation=="string"?E.translation:typeof E.russian=="string"?E.russian:"").trim();!N||x.has(N)||(x.add(N),g.push({korean:N,translation:_}))}return g}async function PS(a,i){const s=await JS(a);return XS(i,`This is a photo of a Korean notebook, textbook, sign or vocabulary list.
Extract every Korean Hangul word or short phrase.
If a Russian or English translation is written next to that word on the image, copy that translation exactly.
If no translation is visible for a word, leave translation as an empty string. Do not invent it.
Return ONLY a JSON array, no markdown, no commentary:
[{"korean":"커피","translation":"кофе"}]`,s)}async function XS(a,i,s){let o=mu();for(const d of IS)try{return await QS(d,a,i,s)}catch(f){o=f instanceof Error?f:mu()}throw o}async function QS(a,i,s,o){const d=`https://generativelanguage.googleapis.com/v1beta/models/${a}:generateContent`,f=[{text:s}];o&&f.push({inline_data:{mime_type:"image/jpeg",data:o}});const g={contents:[{parts:f}],generationConfig:{thinkingConfig:{thinkingLevel:"low"}}},x=new AbortController,S=setTimeout(()=>x.abort(),45e3),E=f1();let N;try{E?N=await fetch(E,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:a,key:i,body:g}),signal:x.signal}):N=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-key":i},body:JSON.stringify(g),signal:x.signal})}catch{throw clearTimeout(S),mu()}if(clearTimeout(S),!N.ok)throw new Th(WS(await N.text(),N.status,a));const _=await N.json().catch(()=>null),T=ZS(_);if(T)return T;throw mu()}function ZS(a){var o;if(!a||typeof a!="object")return null;const s=a.candidates;if(!s)return null;for(const d of s){const f=(o=d.content)==null?void 0:o.parts;if(!f)continue;const g=f.map(x=>x.text??"").join(`
`).trim();if(g)return g}return null}function WS(a,i,s){var f,g;let o="",d="";try{const x=JSON.parse(a);o=((f=x.error)==null?void 0:f.message)??"",d=((g=x.error)==null?void 0:g.status)??""}catch{}return i===404||d==="NOT_FOUND"?`Модель ${s} недоступна. Пробую другую или локальное распознавание.`:i===400||i===401||i===403||d==="UNAUTHENTICATED"||d==="PERMISSION_DENIED"?o?`Ключ Gemini отклонён: ${o}`:"Ключ Gemini отклонён. Проверьте ключ в AI Studio (обычно начинается с AIza).":i===429?"Превышен лимит Gemini. Подождите немного или используйте локальное распознавание.":o||`Ошибка Gemini (${i})`}async function JS(a){const i=await createImageBitmap(a).catch(()=>null);if(!i)throw Ty();const s=document.createElement("canvas"),o=1600,d=Math.max(i.width,i.height),f=d>o?o/d:1;s.width=Math.max(1,Math.round(i.width*f)),s.height=Math.max(1,Math.round(i.height*f));const g=s.getContext("2d");if(!g)throw Ty();return g.drawImage(i,0,0,s.width,s.height),i.close(),s.toDataURL("image/jpeg",.8).replace(/^data:image\/jpeg;base64,/,"")}function tk(){pn();const[a,i]=te.useState($m()),[s,o]=te.useState(h1()),[d,f]=te.useState(f1()),[g,x]=te.useState(kh()),S=Xm(g);function E(){const _=Math.max(1,Math.floor(Number(s)||d1));R_(_),o(_)}function N(){KS(a)}return m.jsxs("div",{children:[m.jsx("header",{className:"header-row",children:m.jsxs("div",{className:"header-brand",children:[m.jsx(S1,{size:40}),m.jsxs("div",{children:[m.jsx("p",{className:"header-title",children:$("settings.title")}),m.jsx("p",{className:"header-subtitle",children:"설정"})]})]})}),m.jsx("h2",{className:"section-title",children:$("settings.lang")}),m.jsxs("div",{className:"card",children:[m.jsxs("div",{className:"flow-layout",children:[m.jsx("button",{className:`select-chip ${et.getLocale()==="ru"?"active":""}`,onClick:()=>et.setLocale("ru"),children:"Русский"}),m.jsx("button",{className:`select-chip ${et.getLocale()==="en"?"active":""}`,onClick:()=>et.setLocale("en"),children:"English"})]}),m.jsx("p",{style:{fontSize:11,color:"var(--text-secondary)",margin:"8px 0 0"},children:$("settings.langHint")})]}),m.jsx("h2",{className:"section-title",children:$("settings.colorTheme")}),m.jsxs("div",{className:"card",children:[m.jsx("div",{className:"flow-layout",children:[["system","gear",$("settings.colorThemeSystem")],["light","sun",$("settings.colorThemeLight")],["dark","moon-stars",$("settings.colorThemeDark")]].map(([_,T,D])=>m.jsxs("button",{className:`select-chip ${et.getColorTheme()===_?"active":""}`,onClick:()=>et.setColorTheme(_),children:[m.jsx(ue,{name:T,size:14})," ",D]},_))}),m.jsx("p",{style:{fontSize:11,color:"var(--text-secondary)",margin:"8px 0 0"},children:$("settings.colorThemeHint")})]}),m.jsx("h2",{className:"section-title",children:$("settings.ocr")}),m.jsxs("div",{className:"card",children:[m.jsx("label",{className:"form-label",children:$("settings.apiKey")}),m.jsx("input",{className:"form-input",value:a,onChange:_=>i(_.target.value),onBlur:N,placeholder:"AIza...",type:"password",autoComplete:"off"}),m.jsxs("p",{style:{fontSize:11,color:"var(--text-secondary)",margin:"6px 0 0"},children:[$("settings.apiKeyHint")," Получите в"," ",m.jsx("a",{href:"https://aistudio.google.com/apikey",target:"_blank",rel:"noreferrer",children:"AI Studio"})]})]}),m.jsx("h2",{className:"section-title",children:$("settings.proxy")}),m.jsxs("div",{className:"card",children:[m.jsx("label",{className:"form-label",children:$("settings.proxyLabel")}),m.jsx("input",{className:"form-input",value:d,onChange:_=>f(_.target.value),onBlur:()=>M_(d),placeholder:"https://korean-srs-gemini-proxy.ваш-субдомен.workers.dev",autoCapitalize:"off",autoCorrect:"off"}),m.jsx("p",{style:{fontSize:11,color:"var(--text-secondary)",margin:"6px 0 0"},children:$("settings.proxyHint")})]}),m.jsx("h2",{className:"section-title",children:$("settings.listenSection")}),m.jsxs("div",{className:"card",children:[m.jsx("label",{className:"form-label",children:$("settings.listenThreshold")}),m.jsx("input",{className:"form-input",value:s,onChange:_=>o(Number(_.target.value.replace(/\D/g,""))||0),onBlur:E,type:"number",min:1,inputMode:"numeric"}),m.jsx("p",{style:{fontSize:11,color:"var(--text-secondary)",margin:"6px 0 0"},children:$("settings.listenThresholdHint",{first:s,second:s*2,third:s*3})})]}),m.jsx("h2",{className:"section-title",children:$("settings.display")}),m.jsx("div",{className:"card",children:m.jsxs("label",{className:"setting-toggle-row",children:[m.jsxs("span",{children:[m.jsx("strong",{children:$("settings.showRomaja")}),m.jsx("span",{className:"setting-toggle-subtitle",children:$("settings.showRomajaHint")})]}),m.jsx("input",{className:"setting-toggle",type:"checkbox",checked:et.getShowRomaja(),onChange:_=>et.setShowRomaja(_.target.checked)})]})}),m.jsx("h2",{className:"section-title",children:$("settings.voices")}),m.jsxs("div",{className:"card",children:[m.jsx("label",{className:"form-label",children:$("settings.voicesCards")}),m.jsx("select",{className:"form-input",value:et.getCardVoice().id,onChange:_=>et.setCardVoice(_.target.value),children:gh.map(_=>m.jsxs("option",{value:_.id,children:[_.name," · ",_.koreanLabel]},_.id))}),m.jsx("p",{style:{fontSize:11,color:"var(--text-secondary)",margin:"6px 0 0"},children:$("settings.voicesCardsHint")}),m.jsx("label",{className:"form-label mt16",children:$("settings.voicesListen")}),m.jsx("select",{className:"form-input",value:et.getListenVoice().id,onChange:_=>et.setListenVoice(_.target.value),children:gh.map(_=>m.jsxs("option",{value:_.id,children:[_.name," · ",_.koreanLabel]},_.id))}),m.jsx("p",{style:{fontSize:11,color:"var(--text-secondary)",margin:"6px 0 0"},children:$("settings.voicesListenHint")})]}),m.jsx("h2",{className:"section-title",children:$("settings.theme")}),m.jsx("div",{className:"theme-row",children:Nm.map(_=>{const T=_.id===g;return m.jsxs("button",{className:`theme-card ${T?"active":""}`,onClick:()=>{et.selectTheme(_.id),x(_.id)},children:[m.jsx("span",{className:"theme-emoji",children:_.emoji}),m.jsx("span",{className:"theme-name",children:_.name}),T&&m.jsx("span",{className:"theme-check",children:m.jsx(ue,{name:"check-lg"})})]},_.id)})}),m.jsx("p",{style:{fontSize:11,color:"var(--text-secondary)",margin:"6px 0 0"},children:$("settings.themeHint")}),m.jsx("h2",{className:"section-title",children:$("settings.themePreview")}),m.jsx("div",{className:"card",children:m.jsxs("div",{className:"theme-preview",children:[m.jsx("img",{className:"greeting-image",src:Jc(S.greetings[0].imageName),alt:S.greetings[0].artistName}),m.jsxs("div",{children:[m.jsx("p",{className:"greeting-text-rus",children:S.greetings[0].russian}),m.jsx("p",{className:"greeting-text-kor",children:S.greetings[0].korean}),m.jsx("p",{className:"greeting-artist",children:S.greetings[0].artistName})]})]})}),m.jsx("h2",{className:"section-title",children:$("settings.guide")}),m.jsxs("div",{className:"card",children:[m.jsx("button",{className:"secondary-btn",onClick:()=>et.openGuide(),children:m.jsxs("span",{children:[$("settings.guideHow"),m.jsx("span",{className:"btn-kor",children:"사용 설명"})]})}),m.jsx("p",{style:{fontSize:11,color:"var(--text-secondary)",margin:"8px 0 0"},children:$("settings.guideHint")})]})]})}const ek=["Начальный","Средний","Продвинутый"];function ak(){pn();const a=et.getEditingWord(),i=et.getCategories(),s=a2(et.getSources()),[o,d]=te.useState(et.getPrefilledKorean()),[f,g]=te.useState(""),[x,S]=te.useState(""),[E,N]=te.useState(""),[_,T]=te.useState(""),[D,R]=te.useState(""),[W,mt]=te.useState(et.getPrefilledCategoryId()),[Ot,ut]=te.useState(null),[St,rt]=te.useState("Начальный"),[dt,kt]=te.useState("");te.useEffect(()=>{const it=et.getEditingWord();it&&(d(it.korean),g(it.hanja??""),S(it.romaja),N(it.translation),T(it.exampleSentence??""),R(it.exampleTranslation??""),mt(it.categoryId),ut(it.sourceId),rt(it.difficulty))},[]);function yt(it){d(it);const ft=k_(it);ft&&!E&&N(ft.translation),x||S(du(it))}function pt(){if(!o.trim()){kt($("add.errKorean"));return}if(!E.trim()){kt($("add.errTranslation"));return}et.saveWord({korean:o,hanja:f,romaja:x,translation:E,exampleSentence:_,exampleTranslation:D,categoryId:W,sourceId:Ot,difficulty:St})}return m.jsx("div",{className:"overlay",onClick:()=>et.closeAddWord(),children:m.jsxs("div",{className:"sheet",onClick:it=>it.stopPropagation(),children:[m.jsxs("div",{className:"sheet-header",children:[m.jsx("h3",{className:"sheet-title",children:$(a?"add.titleEdit":"add.titleNew")}),m.jsx("button",{className:"sheet-close",onClick:()=>et.closeAddWord(),children:m.jsx(ue,{name:"x-lg"})})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:$("add.korean")}),m.jsx("input",{className:"form-input",value:o,onChange:it=>yt(it.target.value),placeholder:"커피"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:$("add.translation")}),m.jsx("input",{className:"form-input",value:E,onChange:it=>N(it.target.value),placeholder:"кофе"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:$("add.romaja")}),m.jsx("input",{className:"form-input",value:x,onChange:it=>S(it.target.value),placeholder:"keopi"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:$("add.hanja")}),m.jsx("input",{className:"form-input",value:f,onChange:it=>g(it.target.value),placeholder:"咖啡"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:$("add.exampleSentence")}),m.jsx("input",{className:"form-input",value:_,onChange:it=>T(it.target.value),placeholder:"저는 커피를 마셔요"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:$("add.exampleTranslation")}),m.jsx("input",{className:"form-input",value:D,onChange:it=>R(it.target.value),placeholder:"Я пью кофе"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:$("add.category")}),m.jsx("div",{className:"flow-layout",children:i.map(it=>m.jsxs("button",{className:`select-chip ${W===it.id?"active":""}`,onClick:()=>mt(W===it.id?null:it.id),children:[m.jsx("span",{style:{color:Ml(it.colorHex)},children:it.emoji})," ",it.name]},it.id))})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:$("add.source")}),m.jsxs("div",{className:"flow-layout",children:[m.jsx("button",{className:`select-chip ${Ot===null?"active":""}`,onClick:()=>ut(null),children:$("add.noSource")}),s.map(it=>m.jsx("button",{className:`select-chip ${Ot===it.id?"active":""}`,onClick:()=>ut(it.id),children:Ch(it)},it.id))]})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:$("add.level")}),m.jsx("div",{className:"flow-layout",children:ek.map(it=>m.jsx("button",{className:`select-chip ${St===it?"active":""}`,onClick:()=>rt(it),children:it},it))})]}),dt&&m.jsx("div",{className:"scan-error",children:dt}),m.jsx("button",{className:"save-btn",onClick:pt,children:$(a?"common.save":"common.add")})]})})}function nk(){pn();const a=et.getSelectedWordForDetail();if(!a)return null;const i=et.categoryFor(a.categoryId),s=et.sourceFor(a.sourceId),o=a.repetitions>=3?$("detail.mastered"):a.nextReviewAt<=Date.now()?$("detail.toReview"):$("detail.inProgress");return m.jsx("div",{className:"overlay",onClick:()=>et.closeWordDetail(),children:m.jsxs("div",{className:"sheet",onClick:d=>d.stopPropagation(),children:[m.jsxs("div",{className:"sheet-header",children:[m.jsx("h3",{className:"sheet-title",children:$("detail.title")}),m.jsx("button",{className:"sheet-close",onClick:()=>et.closeWordDetail(),children:m.jsx(ue,{name:"x-lg"})})]}),m.jsxs("div",{className:"word-meta",style:{marginBottom:16},children:[i&&m.jsxs("span",{className:"badge badge-cat",style:{background:Ml(i.colorHex)},children:[i.emoji," ",i.name]}),m.jsxs("span",{className:"badge",children:[$("word.level")," ",a.difficulty]}),s&&m.jsx("span",{className:"badge",children:Ch(s)}),a.tags.map(d=>m.jsxs("span",{className:"badge",children:["#",d]},d))]}),m.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:12},children:[m.jsx("span",{style:{fontSize:34,fontWeight:700,color:"var(--charcoal)"},children:a.korean}),a.hanja&&m.jsx("span",{style:{fontSize:18,color:"var(--text-secondary)"},children:a.hanja}),m.jsx("button",{className:"icon-btn",onClick:()=>et.speakText(a.korean),children:m.jsx(ue,{name:"volume-up"})})]}),et.getShowRomaja()&&m.jsx("p",{style:{fontSize:16,color:"var(--text-secondary)",margin:0},children:a.romaja}),m.jsx("div",{className:"card-flat mt16",style:{padding:16},children:m.jsx("p",{style:{fontSize:18,fontWeight:600,margin:0},children:a.translation})}),a.exampleSentence&&m.jsxs("div",{className:"card-flat mt12",style:{padding:16},children:[m.jsx("p",{style:{fontSize:15,margin:0},children:a.exampleSentence}),a.exampleTranslation&&m.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",margin:"6px 0 0"},children:a.exampleTranslation})]}),m.jsxs("div",{className:"card-flat mt12",style:{padding:16,fontSize:13,color:"var(--text-secondary)"},children:[m.jsxs("div",{children:[$("detail.status"),": ",o]}),m.jsxs("div",{children:[$("detail.reps"),": ",a.repetitions]}),m.jsx("div",{children:$("cards.interval",{count:a.intervalDays})}),m.jsxs("div",{children:[$("detail.nextReview"),": ",new Date(a.nextReviewAt).toLocaleDateString("ru-RU")]})]}),m.jsx("button",{className:"primary-btn mt20",onClick:()=>et.openEditWord(a),children:m.jsx("span",{children:$("common.edit")})}),m.jsx("button",{className:"danger-btn",onClick:()=>{confirm($("detail.deleteConfirm"))&&et.deleteWord(a)},children:$("common.delete")})]})})}const ik=["📌","🍱","✈️","💼","📚","💬","😊","🌿","🎯","🎁","🏠","⭐"],rk=["#E53935","#FB8C00","#00897B","#1E88E5","#8E24AA","#43A047","#F06292","#558B2F","#5E35B1","#00ACC1"];function sk(){pn();const[a,i]=te.useState(""),[s,o]=te.useState("📌"),[d,f]=te.useState("#E53935"),[g,x]=te.useState("");function S(){if(!a.trim()){x("Введите название категории.");return}et.createCategory(a,s,d)}return m.jsx("div",{className:"overlay",onClick:()=>et.closeCreateCategory(),children:m.jsxs("div",{className:"sheet",onClick:E=>E.stopPropagation(),children:[m.jsxs("div",{className:"sheet-header",children:[m.jsx("h3",{className:"sheet-title",children:"Новая категория"}),m.jsx("button",{className:"sheet-close",onClick:()=>et.closeCreateCategory(),children:"✕"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:"Название"}),m.jsx("input",{className:"form-input",value:a,onChange:E=>i(E.target.value),placeholder:"Хобби"})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:"Эмодзи"}),m.jsx("div",{className:"flow-layout",children:ik.map(E=>m.jsx("button",{className:`select-chip ${s===E?"active":""}`,onClick:()=>o(E),style:{fontSize:18},children:E},E))})]}),m.jsxs("div",{className:"form-group",children:[m.jsx("label",{className:"form-label",children:"Цвет"}),m.jsx("div",{className:"flow-layout",children:rk.map(E=>m.jsx("button",{className:`select-chip ${d===E?"active":""}`,onClick:()=>f(E),style:{width:34,height:34,padding:0,background:E},"aria-label":E},E))})]}),g&&m.jsx("div",{className:"scan-error",children:g}),m.jsx("button",{className:"save-btn",onClick:S,children:"Создать"})]})})}function ok(){pn();const a=te.useRef(null),i=te.useRef(null),[s,o]=te.useState(""),[d,f]=te.useState(!1),[g,x]=te.useState(""),[S,E]=te.useState(""),[N,_]=te.useState(!1),[T,D]=te.useState([]),[R,W]=te.useState([]);function mt(pt){var ee;const it=(ee=pt.target.files)==null?void 0:ee[0];if(!it)return;const ft=URL.createObjectURL(it);o(ft),Ot(it)}async function Ot(pt){const it=$m();if(!it){x("Укажите ключ Gemini API в настройках.");return}f(!0),x(""),D([]),W([]);try{const ft=await GS(pt,it);ft.length>0?(D(ft.map(ee=>({korean:ee.korean,translation:ee.translation,tags:[]}))),W(ft.map(()=>!0))):x("Не удалось распознать корейский текст на изображении.")}catch(ft){x(ft instanceof Error?ft.message:"Неизвестная ошибка.")}finally{f(!1)}}function ut(){const pt=M1(S);pt.length!==0&&(D(pt.map(it=>({korean:it.korean,translation:it.translation,tags:[]}))),W(pt.map(()=>!0)),_(!0))}function St(pt,it,ft){D(ee=>ee.map((le,pe)=>pe===pt?{...le,[it]:ft}:le))}function rt(pt,it){D(ft=>ft.map((ee,le)=>le===pt?{...ee,tags:it}:ee))}function dt(pt){W(it=>it.map((ft,ee)=>ee===pt?!ft:ft))}function kt(){const pt=T.filter((it,ft)=>R[ft]);pt.length!==0&&et.importWords(pt)}const yt=T.filter((pt,it)=>R[it]&&pt.korean.trim()&&pt.translation.trim()).length;return m.jsx("div",{className:"overlay",onClick:()=>et.closeScanOcr(),children:m.jsxs("div",{className:"sheet",onClick:pt=>pt.stopPropagation(),children:[m.jsxs("div",{className:"sheet-header",children:[m.jsx("h3",{className:"sheet-title",children:"Сканирование (OCR)"}),m.jsx("button",{className:"sheet-close",onClick:()=>et.closeScanOcr(),children:m.jsx(ue,{name:"x-lg"})})]}),!$m()&&m.jsxs("div",{className:"scan-error",children:["Ключ Gemini API не настроен."," ",m.jsx("button",{style:{textDecoration:"underline",color:"inherit",background:"none"},onClick:()=>et.openSettings(),children:"Настроить в Настройках"})]}),m.jsxs("div",{className:"scan-tools",children:[m.jsxs("button",{className:"scan-tool",onClick:()=>{var pt;return(pt=a.current)==null?void 0:pt.click()},disabled:d,children:[m.jsx("span",{className:"scan-tool-icon",children:m.jsx(ue,{name:"camera",size:22})}),m.jsx("span",{children:"Камера"})]}),m.jsxs("button",{className:"scan-tool",onClick:()=>{var pt;return(pt=i.current)==null?void 0:pt.click()},disabled:d,children:[m.jsx("span",{className:"scan-tool-icon",children:m.jsx(ue,{name:"images",size:22})}),m.jsx("span",{children:"Галерея"})]}),m.jsx("input",{ref:a,type:"file",accept:"image/*",capture:"environment",onChange:mt,style:{display:"none"}}),m.jsx("input",{ref:i,type:"file",accept:"image/*",onChange:mt,style:{display:"none"}}),m.jsxs("button",{className:"scan-tool",onClick:()=>{_(!0),D([]),W([])},children:[m.jsx("span",{className:"scan-tool-icon",children:m.jsx(ue,{name:"pencil-square",size:22})}),m.jsx("span",{children:"Текст"})]})]}),s&&m.jsx("img",{className:"scan-preview",src:s,alt:"Preview"}),d&&m.jsxs("div",{className:"scan-status",children:[m.jsx("img",{src:Zm(tr().statusGifName),alt:"BTS",style:{width:"100%",maxHeight:320,objectFit:"cover",borderRadius:14,marginBottom:10}}),"Распознавание…"]}),g&&m.jsx("div",{className:"scan-error",children:g}),N&&m.jsxs("div",{className:"mb12",children:[m.jsx("label",{className:"form-label",children:"Вставьте корейский текст"}),m.jsx("textarea",{className:"textarea",value:S,onChange:pt=>E(pt.target.value),placeholder:`커피 - кофе
차 - чай`}),m.jsx("button",{className:"primary-btn mt12",onClick:ut,children:"Распознать"})]}),T.length>0&&m.jsxs(m.Fragment,{children:[m.jsxs("p",{className:"section-title mt12",children:["Распознанные слова (",yt," готовых)"]}),m.jsx("div",{className:"mb12",children:T.map((pt,it)=>m.jsxs("div",{className:"scanned-word-row",style:{flexWrap:"wrap"},children:[m.jsx("button",{className:`scan-check ${R[it]?"active":""}`,onClick:()=>dt(it),style:R[it]?{background:"var(--red)",color:"#fff",border:"none"}:{},children:R[it]?"✓":"○"}),m.jsx("input",{className:"form-input",value:pt.korean,onChange:ft=>St(it,"korean",ft.target.value),placeholder:"корейское",style:{width:96,flex:"none",fontWeight:700,fontSize:16}}),m.jsx("input",{className:"form-input",value:pt.translation,onChange:ft=>St(it,"translation",ft.target.value),placeholder:"перевод"}),m.jsx(D1,{tags:pt.tags,onChange:ft=>rt(it,ft)})]},it))}),m.jsxs("button",{className:"save-btn",onClick:kt,disabled:yt===0,style:yt===0?{opacity:.5}:{},children:["Сохранить (",yt,")"]})]})]})})}function Yc({num:a,title:i,steps:s}){return m.jsxs("div",{className:"guide-section",children:[m.jsxs("h3",{className:"guide-title",children:[a,". ",i]}),m.jsx("ol",{className:"guide-list",children:s.map(o=>m.jsxs("li",{children:[m.jsx("strong",{children:o.title}),o.text&&m.jsx("p",{children:o.text})]},o.title))})]})}function lk(){const a=tr();return m.jsx("div",{className:"overlay",onClick:()=>et.closeGuide(),children:m.jsxs("div",{className:"sheet",onClick:i=>i.stopPropagation(),children:[m.jsxs("div",{className:"sheet-header",children:[m.jsx("h3",{className:"sheet-title",children:$("guide.title")}),m.jsx("button",{className:"sheet-close",onClick:()=>et.closeGuide(),children:m.jsx(ue,{name:"x-lg"})})]}),m.jsx("p",{className:"muted",style:{fontSize:13,marginTop:0},children:$("guide.intro")}),m.jsx(Yc,{num:"1",title:$("guide.install.title"),steps:[{title:$("guide.install.iphone.title"),text:$("guide.install.iphone.text")},{title:$("guide.install.android.title"),text:$("guide.install.android.text")}]}),m.jsx(Yc,{num:"2",title:$("guide.ocr.title"),steps:[{title:$("guide.ocr.key.title"),text:$("guide.ocr.key.text")},{title:$("guide.ocr.paste.title"),text:$("guide.ocr.paste.text")},{title:$("guide.ocr.scan.title"),text:$("guide.ocr.scan.text")}]}),m.jsx(Yc,{num:"3",title:$("guide.fail.title"),steps:[{title:$("guide.fail.key.title"),text:$("guide.fail.key.text")},{title:$("guide.fail.proxy.title"),text:$("guide.fail.proxy.text",{proxy:zm})},{title:$("guide.fail.camera.title"),text:$("guide.fail.camera.text")}]}),m.jsx(Yc,{num:"4",title:$("guide.practice.title"),steps:[{title:$("guide.practice.cards.title"),text:$("guide.practice.cards.text")},{title:$("guide.practice.listen.title"),text:$("guide.practice.listen.text")},{title:$("guide.practice.dict.title"),text:$("guide.practice.dict.text")}]}),m.jsx(Yc,{num:"5",title:$("guide.faq.title"),steps:[{title:$("guide.faq.data.title"),text:$("guide.faq.data.text")},{title:$("guide.faq.theme.title"),text:$("guide.faq.theme.text",{theme:a.name})},{title:$("guide.faq.gif.title"),text:$("guide.faq.gif.text")}]}),m.jsx("button",{className:"primary-btn mt20",onClick:()=>et.closeGuide(),children:m.jsxs("span",{children:[$("guide.ok"),m.jsx("span",{className:"btn-kor",children:"알겠어요"})]})})]})})}function ck(){pn();const a=et.getPacks(),i=et.getWords(),[s,o]=te.useState(""),d=te.useMemo(()=>new Set(i.map(g=>g.korean)),[i]),f=te.useMemo(()=>{const g=s.trim().toLowerCase();return g?a.filter(x=>[x.title,x.subtitle,...x.wordDefs.map(E=>E.korean),...x.wordDefs.map(E=>E.translation)].join(" ").toLowerCase().includes(g)):a},[a,s]);return m.jsx("div",{className:"overlay",onClick:()=>et.closePacks(),children:m.jsxs("div",{className:"sheet",onClick:g=>g.stopPropagation(),children:[m.jsxs("div",{className:"sheet-header",children:[m.jsx("h3",{className:"sheet-title",children:$("packs.title")}),m.jsx("button",{className:"sheet-close",onClick:()=>et.closePacks(),children:m.jsx(ue,{name:"x-lg"})})]}),m.jsx("input",{className:"form-input",value:s,onChange:g=>o(g.target.value),placeholder:$("packs.search"),style:{marginBottom:12}}),m.jsxs("div",{className:"packs-list",children:[f.map(g=>{const x=g.wordDefs.filter(E=>!d.has(E.korean)).length,S=et.sourceFor(g.sourceId);return m.jsx("div",{className:"pack-card",children:m.jsxs("div",{className:"pack-card-head",children:[m.jsx("span",{className:"pack-emoji",style:{background:`${Ml(g.colorHex)}1f`,color:Ml(g.colorHex)},children:g.emoji}),m.jsxs("div",{className:"pack-body",children:[m.jsx("p",{className:"pack-title",children:g.title}),m.jsx("p",{className:"pack-subtitle",children:g.subtitle}),m.jsxs("p",{className:"pack-meta",children:[$("packs.words",{count:g.wordDefs.length})," · ",g.difficulty,S?` · ${Ch(S)}`:""]})]}),x===0?m.jsx("span",{className:"pack-added",children:$("packs.added")}):m.jsxs("button",{className:"pack-add",onClick:()=>et.addPack(g.id),children:["+",x]})]})},g.id)}),f.length===0&&m.jsxs("div",{className:"empty-hint",children:[m.jsx("span",{style:{fontSize:24},children:m.jsx(ue,{name:"box-seam",size:24,style:{color:"var(--text-tertiary)"}})}),m.jsx("span",{children:$("packs.empty")})]})]}),m.jsx("p",{style:{fontSize:11,color:"var(--text-secondary)",marginTop:12},children:$("packs.footer")})]})})}const uk={home:()=>m.jsx(jS,{}),cards:()=>m.jsx(MS,{}),listening:()=>m.jsx($S,{}),quiz:()=>m.jsx(LS,{}),dictionary:()=>m.jsx(US,{}),progress:()=>m.jsx(VS,{}),gallery:()=>m.jsx(qS,{}),settings:()=>m.jsx(tk,{})};function dk(){const[a,i]=te.useState(!1),[s,o]=te.useState({left:0,width:0}),d=te.useRef(null);pn();const f=te.useCallback(()=>{const S=d.current;if(!S)return;const E=ly.findIndex(_=>_.id===et.getTab()),N=S.querySelectorAll(".tab-item")[E];N&&o({left:N.offsetLeft,width:N.offsetWidth})},[]);if(te.useLayoutEffect(()=>{f();const S=d.current;if(!S)return;const E=new ResizeObserver(f);return E.observe(S),window.addEventListener("resize",f),()=>{E.disconnect(),window.removeEventListener("resize",f)}},[f,et.getSnapshot()]),te.useEffect(()=>(T2(),et.init().then(()=>i(!0)),()=>{et.closeScanOcr(),et.closeAddWord(),et.closeCreateCategory(),et.closeWordDetail(),et.closeGuide()}),[]),!a)return m.jsx("div",{className:"app",children:m.jsx("div",{className:"screen center muted",children:$("common.loading")})});const g=et.getTab(),x=et.dueWords().length;return m.jsxs("div",{className:"app",children:[m.jsx("div",{className:"screen screen-enter",children:uk[g]()},g),et.getIsAddWordOpen()&&m.jsx(ak,{}),et.getIsScanOcrOpen()&&m.jsx(ok,{}),et.getIsCreateCategoryOpen()&&m.jsx(sk,{}),et.getIsGuideOpen()&&m.jsx(lk,{}),et.getIsPacksOpen()&&m.jsx(ck,{}),et.getSelectedWordForDetail()&&m.jsx(nk,{}),m.jsxs("nav",{ref:S=>{d.current=S},className:"tab-bar",children:[m.jsx("span",{className:"tab-ind",style:{transform:`translateX(${s.left}px)`,width:s.width}}),ly.map(S=>m.jsxs("button",{type:"button",className:`tab-item ${g===S.id?"active":""}`,"aria-label":$("tab."+S.id),title:$("tab."+S.id),onClick:()=>et.selectTab(S.id),children:[m.jsx("span",{className:"tab-icon",children:m.jsx(ue,{name:S.icon})}),m.jsx("span",{className:"tab-label",children:$("tab."+S.id)}),m.jsx("span",{className:"tab-kor",children:S.korean}),S.id==="cards"&&x>0&&m.jsx("span",{className:"tab-badge",children:x})]},S.id))]})]})}const hk="modulepreload",fk=function(a){return"/korean-srs/"+a},zy={},pk=function(i,s,o){let d=Promise.resolve();if(s&&s.length>0){let g=function(E){return Promise.all(E.map(N=>Promise.resolve(N).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};document.getElementsByTagName("link");const x=document.querySelector("meta[property=csp-nonce]"),S=(x==null?void 0:x.nonce)||(x==null?void 0:x.getAttribute("nonce"));d=g(s.map(E=>{if(E=fk(E),E in zy)return;zy[E]=!0;const N=E.endsWith(".css"),_=N?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${E}"]${_}`))return;const T=document.createElement("link");if(T.rel=N?"stylesheet":hk,N||(T.as="script"),T.crossOrigin="",T.href=E,S&&T.setAttribute("nonce",S),document.head.appendChild(T),N)return new Promise((D,R)=>{T.addEventListener("load",D),T.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${E}`)))})}))}function f(g){const x=new Event("vite:preloadError",{cancelable:!0});if(x.payload=g,window.dispatchEvent(x),!x.defaultPrevented)throw g}return d.then(g=>{for(const x of g||[])x.status==="rejected"&&f(x.reason);return i().catch(f)})};function mk(a={}){const{immediate:i=!1,onNeedRefresh:s,onOfflineReady:o,onRegistered:d,onRegisteredSW:f,onRegisterError:g}=a;let x,S;const E=async(_=!0)=>{await S};async function N(){if("serviceWorker"in navigator){if(x=await pk(async()=>{const{Workbox:_}=await import("./workbox-window.prod.es5-BBnX5xw4.js");return{Workbox:_}},[]).then(({Workbox:_})=>new _("/korean-srs/sw.js",{scope:"/korean-srs/",type:"classic"})).catch(_=>{g==null||g(_)}),!x)return;x.addEventListener("activated",_=>{(_.isUpdate||_.isExternal)&&window.location.reload()}),x.addEventListener("installed",_=>{_.isUpdate||o==null||o()}),x.register({immediate:i}).then(_=>{f?f("/korean-srs/sw.js",_):d==null||d(_)}).catch(_=>{g==null||g(_)})}}return S=N(),E}var Pc=new WeakMap,Xc=new WeakMap,Qc=new WeakMap,ym=new WeakSet,ih=new WeakMap,Vr=class{constructor(a,i){this.handleFormData=s=>{const o=this.options.disabled(this.host),d=this.options.name(this.host),f=this.options.value(this.host),g=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!o&&!g&&typeof d=="string"&&d.length>0&&typeof f<"u"&&(Array.isArray(f)?f.forEach(x=>{s.formData.append(d,x.toString())}):s.formData.append(d,f.toString()))},this.handleFormSubmit=s=>{var o;const d=this.options.disabled(this.host),f=this.options.reportValidity;this.form&&!this.form.noValidate&&((o=Pc.get(this.form))==null||o.forEach(g=>{this.setUserInteracted(g,!0)})),this.form&&!this.form.noValidate&&!d&&!f(this.host)&&(s.preventDefault(),s.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),ih.set(this.host,[])},this.handleInteraction=s=>{const o=ih.get(this.host);o.includes(s.type)||o.push(s.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const o of s)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const s=this.form.querySelectorAll("*");for(const o of s)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=a).addController(this),this.options=Ur({form:s=>{const o=s.form;if(o){const f=s.getRootNode().querySelector(`#${o}`);if(f)return f}return s.closest("form")},name:s=>s.name,value:s=>s.value,defaultValue:s=>s.defaultValue,disabled:s=>{var o;return(o=s.disabled)!=null?o:!1},reportValidity:s=>typeof s.reportValidity=="function"?s.reportValidity():!0,checkValidity:s=>typeof s.checkValidity=="function"?s.checkValidity():!0,setValue:(s,o)=>s.value=o,assumeInteractionOn:["sl-input"]},i)}hostConnected(){const a=this.options.form(this.host);a&&this.attachForm(a),ih.set(this.host,[]),this.options.assumeInteractionOn.forEach(i=>{this.host.addEventListener(i,this.handleInteraction)})}hostDisconnected(){this.detachForm(),ih.delete(this.host),this.options.assumeInteractionOn.forEach(a=>{this.host.removeEventListener(a,this.handleInteraction)})}hostUpdated(){const a=this.options.form(this.host);a||this.detachForm(),a&&this.form!==a&&(this.detachForm(),this.attachForm(a)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(a){a?(this.form=a,Pc.has(this.form)?Pc.get(this.form).add(this.host):Pc.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Xc.has(this.form)||(Xc.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Qc.has(this.form)||(Qc.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const a=Pc.get(this.form);a&&(a.delete(this.host),a.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Xc.has(this.form)&&(this.form.reportValidity=Xc.get(this.form),Xc.delete(this.form)),Qc.has(this.form)&&(this.form.checkValidity=Qc.get(this.form),Qc.delete(this.form)),this.form=void 0))}setUserInteracted(a,i){i?ym.add(a):ym.delete(a),a.requestUpdate()}doAction(a,i){if(this.form){const s=document.createElement("button");s.type=a,s.style.position="absolute",s.style.width="0",s.style.height="0",s.style.clipPath="inset(50%)",s.style.overflow="hidden",s.style.whiteSpace="nowrap",i&&(s.name=i.name,s.value=i.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{i.hasAttribute(o)&&s.setAttribute(o,i.getAttribute(o))})),this.form.append(s),s.click(),s.remove()}}getForm(){var a;return(a=this.form)!=null?a:null}reset(a){this.doAction("reset",a)}submit(a){this.doAction("submit",a)}setValidity(a){const i=this.host,s=!!ym.has(i),o=!!i.required;i.toggleAttribute("data-required",o),i.toggleAttribute("data-optional",!o),i.toggleAttribute("data-invalid",!a),i.toggleAttribute("data-valid",a),i.toggleAttribute("data-user-invalid",!a&&s),i.toggleAttribute("data-user-valid",a&&s)}updateValidity(){const a=this.host;this.setValidity(a.validity.valid)}emitInvalidEvent(a){const i=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});a||i.preventDefault(),this.host.dispatchEvent(i)||a==null||a.preventDefault()}},zh=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),gk=Object.freeze(yu(Ur({},zh),{valid:!1,valueMissing:!0})),vk=Object.freeze(yu(Ur({},zh),{valid:!1,customError:!0})),bk=Xt`
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
`,yk=Xt`
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
`,Bl=(a="value")=>(i,s)=>{const o=i.constructor,d=o.prototype.attributeChangedCallback;o.prototype.attributeChangedCallback=function(f,g,x){var S;const E=o.getPropertyOptions(a),N=typeof E.attribute=="string"?E.attribute:a;if(f===N){const _=E.converter||$l,D=(typeof _=="function"?_:(S=_==null?void 0:_.fromAttribute)!=null?S:$l.fromAttribute)(x,E.type);this[a]!==D&&(this[s]=D)}d.call(this,f,g,x)}},Ao=Xt`
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
`,mn=class{constructor(a,...i){this.slotNames=[],this.handleSlotChange=s=>{const o=s.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=a).addController(this),this.slotNames=i}hasDefaultSlot(){return[...this.host.childNodes].some(a=>{if(a.nodeType===a.TEXT_NODE&&a.textContent.trim()!=="")return!0;if(a.nodeType===a.ELEMENT_NODE){const i=a;if(i.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!i.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(a){return this.host.querySelector(`:scope > [slot="${a}"]`)!==null}test(a){return a==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(a)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}};function xk(a){if(!a)return"";const i=a.assignedNodes({flatten:!0});let s="";return[...i].forEach(o=>{o.nodeType===Node.TEXT_NODE&&(s+=o.textContent)}),s}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4},wu=a=>(...i)=>({_$litDirective$:a,values:i});let _u=class{constructor(i){}get _$AU(){return this._$AM._$AU}_$AT(i,s,o){this._$Ct=i,this._$AM=s,this._$Ci=o}_$AS(i,s){return this.update(i,s)}update(i,s){return this.render(...s)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=wu(class extends _u{constructor(a){var i;if(super(a),a.type!==Zi.ATTRIBUTE||a.name!=="class"||((i=a.strings)==null?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(a){return" "+Object.keys(a).filter(i=>a[i]).join(" ")+" "}update(a,[i]){var o,d;if(this.st===void 0){this.st=new Set,a.strings!==void 0&&(this.nt=new Set(a.strings.join(" ").split(/\s/).filter(f=>f!=="")));for(const f in i)i[f]&&!((o=this.nt)!=null&&o.has(f))&&this.st.add(f);return this.render(i)}const s=a.element.classList;for(const f of this.st)f in i||(s.remove(f),this.st.delete(f));for(const f in i){const g=!!i[f];g===this.st.has(f)||(d=this.nt)!=null&&d.has(f)||(g?(s.add(f),this.st.add(f)):(s.remove(f),this.st.delete(f)))}return Un}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ft=a=>a??We;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _o=wu(class extends _u{constructor(a){if(super(a),a.type!==Zi.PROPERTY&&a.type!==Zi.ATTRIBUTE&&a.type!==Zi.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!j1(a))throw Error("`live` bindings can only contain a single expression")}render(a){return a}update(a,[i]){if(i===Un||i===We)return i;const s=a.element,o=a.name;if(a.type===Zi.PROPERTY){if(i===s[o])return Un}else if(a.type===Zi.BOOLEAN_ATTRIBUTE){if(!!i===s.hasAttribute(o))return Un}else if(a.type===Zi.ATTRIBUTE&&s.getAttribute(o)===i+"")return Un;return AS(a),i}});var Da=class extends Gt{constructor(){super(...arguments),this.formControlController=new Vr(this,{value:a=>a.checked?a.value||"on":void 0,defaultValue:a=>a.defaultChecked,setValue:(a,i)=>a.checked=i}),this.hasSlotController=new mn(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(a){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(a)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(a){this.input.focus(a)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(a){this.input.setCustomValidity(a),this.formControlController.updateValidity()}render(){const a=this.hasSlotController.test("help-text"),i=this.helpText?!0:!!a;return _t`
      <div
        class=${Wt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":i})}
      >
        <label
          part="base"
          class=${Wt({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size==="small","checkbox--medium":this.size==="medium","checkbox--large":this.size==="large"})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${Ft(this.value)}
            .indeterminate=${_o(this.indeterminate)}
            .checked=${_o(this.checked)}
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
            ${this.checked?_t`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:""}
            ${!this.checked&&this.indeterminate?_t`
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
    `}};Da.styles=[Jt,Ao,yk];Da.dependencies={"sl-icon":Ue};v([$t('input[type="checkbox"]')],Da.prototype,"input",2);v([Qt()],Da.prototype,"hasFocus",2);v([A()],Da.prototype,"title",2);v([A()],Da.prototype,"name",2);v([A()],Da.prototype,"value",2);v([A({reflect:!0})],Da.prototype,"size",2);v([A({type:Boolean,reflect:!0})],Da.prototype,"disabled",2);v([A({type:Boolean,reflect:!0})],Da.prototype,"checked",2);v([A({type:Boolean,reflect:!0})],Da.prototype,"indeterminate",2);v([Bl("checked")],Da.prototype,"defaultChecked",2);v([A({reflect:!0})],Da.prototype,"form",2);v([A({type:Boolean,reflect:!0})],Da.prototype,"required",2);v([A({attribute:"help-text"})],Da.prototype,"helpText",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],Da.prototype,"handleDisabledChange",1);v([Dt(["checked","indeterminate"],{waitUntilFirstUpdate:!0})],Da.prototype,"handleStateChange",1);var wk=Xt`
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
`;const Lm=new Set,jl=new Map;let $r,ig="ltr",rg="en";const $1=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if($1){const a=new MutationObserver(B1);ig=document.documentElement.dir||"ltr",rg=document.documentElement.lang||navigator.language,a.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function L1(...a){a.map(i=>{const s=i.$code.toLowerCase();jl.has(s)?jl.set(s,Object.assign(Object.assign({},jl.get(s)),i)):jl.set(s,i),$r||($r=i)}),B1()}function B1(){$1&&(ig=document.documentElement.dir||"ltr",rg=document.documentElement.lang||navigator.language),[...Lm.keys()].map(a=>{typeof a.requestUpdate=="function"&&a.requestUpdate()})}let _k=class{constructor(i){this.host=i,this.host.addController(this)}hostConnected(){Lm.add(this.host)}hostDisconnected(){Lm.delete(this.host)}dir(){return`${this.host.dir||ig}`.toLowerCase()}lang(){const i=`${this.host.lang||rg}`.toLowerCase().replace(/_/g,"-");try{return new Intl.Locale(i),i}catch{return $r?$r.$code.toLowerCase():"en"}}getTranslationData(i){var s,o;let d;try{d=new Intl.Locale(i.replace(/_/g,"-"))}catch{return{locale:void 0,language:"",region:"",primary:void 0,secondary:void 0}}const f=d.language.toLowerCase(),g=(o=(s=d.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&o!==void 0?o:"",x=jl.get(`${f}-${g}`),S=jl.get(f);return{locale:d,language:f,region:g,primary:x,secondary:S}}exists(i,s){var o;const{primary:d,secondary:f}=this.getTranslationData((o=s.lang)!==null&&o!==void 0?o:this.lang());return s=Object.assign({includeFallback:!1},s),!!(d&&d[i]||f&&f[i]||s.includeFallback&&$r&&$r[i])}term(i,...s){const{primary:o,secondary:d}=this.getTranslationData(this.lang());let f;if(o&&o[i])f=o[i];else if(d&&d[i])f=d[i];else if($r&&$r[i])f=$r[i];else return console.error(`No translation found for: ${String(i)}`),String(i);return typeof f=="function"?f(...s):f}date(i,s){return i=new Date(i),new Intl.DateTimeFormat(this.lang(),s).format(i)}number(i,s){return i=Number(i),isNaN(i)?"":new Intl.NumberFormat(this.lang(),s).format(i)}relativeTime(i,s,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(i,s)}};var H1={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(a,i)=>`Go to slide ${a} of ${i}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:a=>a===0?"No options selected":a===1?"1 option selected":`${a} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:a=>`Slide ${a}`,toggleColorFormat:"Toggle color format"};L1(H1);var Sk=H1,ze=class extends _k{};L1(Sk);var Su=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this)}render(){return _t`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Su.styles=[Jt,wk];var U1=new Map,kk=new WeakMap;function Ck(a){return a??{keyframes:[],options:{duration:0}}}function Ny(a,i){return i.toLowerCase()==="rtl"?{keyframes:a.rtlKeyframes||a.keyframes,options:a.options}:a}function De(a,i){U1.set(a,Ck(i))}function Je(a,i,s){const o=kk.get(a);if(o!=null&&o[i])return Ny(o[i],s.dir);const d=U1.get(i);return d?Ny(d,s.dir):{keyframes:[],options:{duration:0}}}function ha(a,i,s){return new Promise(o=>{if((s==null?void 0:s.duration)===1/0)throw new Error("Promise-based animations must be finite.");const d=a.animate(i,yu(Ur({},s),{duration:Bm()?0:s.duration}));d.addEventListener("cancel",o,{once:!0}),d.addEventListener("finish",o,{once:!0})})}function Oy(a){return a=a.toString().toLowerCase(),a.indexOf("ms")>-1?parseFloat(a):a.indexOf("s")>-1?parseFloat(a)*1e3:parseFloat(a)}function Bm(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function za(a){return Promise.all(a.getAnimations().map(i=>new Promise(s=>{i.cancel(),requestAnimationFrame(s)})))}function bh(a,i){return a.map(s=>yu(Ur({},s),{height:s.height==="auto"?`${i}px`:s.height}))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function jy(a,i,s){return a?i(a):s==null?void 0:s(a)}var fa=class Hm extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(i){return i instanceof Element&&i.getAttribute("role")==="treeitem"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","treeitem"),this.setAttribute("tabindex","-1"),this.isNestedItem()&&(this.slot="children")}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?"auto":"0",this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit("sl-collapse"),await za(this.childrenContainer);const{keyframes:i,options:s}=Je(this,"tree-item.collapse",{dir:this.localize.dir()});await ha(this.childrenContainer,bh(i,this.childrenContainer.scrollHeight),s),this.childrenContainer.hidden=!0,this.emit("sl-after-collapse")}isNestedItem(){const i=this.parentElement;return!!i&&Hm.isTreeItem(i)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(i){i.has("selected")&&!i.has("indeterminate")&&(this.indeterminate=!1)}async animateExpand(){this.emit("sl-expand"),await za(this.childrenContainer),this.childrenContainer.hidden=!1;const{keyframes:i,options:s}=Je(this,"tree-item.expand",{dir:this.localize.dir()});await ha(this.childrenContainer,bh(i,this.childrenContainer.scrollHeight),s),this.childrenContainer.style.height="auto",this.emit("sl-after-expand")}handleLoadingChange(){this.setAttribute("aria-busy",this.loading?"true":"false"),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleExpandedChange(){this.isLeaf?this.removeAttribute("aria-expanded"):this.setAttribute("aria-expanded",this.expanded?"true":"false")}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit("sl-lazy-load")):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit("sl-lazy-change")}getChildrenItems({includeDisabled:i=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(s=>Hm.isTreeItem(s)&&(i||!s.disabled)):[]}render(){const i=this.localize.dir()==="rtl",s=!this.loading&&(!this.isLeaf||this.lazy);return _t`
      <div
        part="base"
        class="${Wt({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":s,"tree-item--rtl":this.localize.dir()==="rtl"})}"
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
            class=${Wt({"tree-item__expand-button":!0,"tree-item__expand-button--visible":s})}
            aria-hidden="true"
          >
            ${jy(this.loading,()=>_t` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${i?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${i?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </div>

          ${jy(this.selectable,()=>_t`
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
                ?checked="${_o(this.selected)}"
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
    `}};fa.styles=[Jt,bk];fa.dependencies={"sl-checkbox":Da,"sl-icon":Ue,"sl-spinner":Su};v([Qt()],fa.prototype,"indeterminate",2);v([Qt()],fa.prototype,"isLeaf",2);v([Qt()],fa.prototype,"loading",2);v([Qt()],fa.prototype,"selectable",2);v([A({type:Boolean,reflect:!0})],fa.prototype,"expanded",2);v([A({type:Boolean,reflect:!0})],fa.prototype,"selected",2);v([A({type:Boolean,reflect:!0})],fa.prototype,"disabled",2);v([A({type:Boolean,reflect:!0})],fa.prototype,"lazy",2);v([$t("slot:not([name])")],fa.prototype,"defaultSlot",2);v([$t("slot[name=children]")],fa.prototype,"childrenSlot",2);v([$t(".tree-item__item")],fa.prototype,"itemElement",2);v([$t(".tree-item__children")],fa.prototype,"childrenContainer",2);v([$t(".tree-item__expand-button slot")],fa.prototype,"expandButtonSlot",2);v([Dt("loading",{waitUntilFirstUpdate:!0})],fa.prototype,"handleLoadingChange",1);v([Dt("disabled")],fa.prototype,"handleDisabledChange",1);v([Dt("selected")],fa.prototype,"handleSelectedChange",1);v([Dt("expanded",{waitUntilFirstUpdate:!0})],fa.prototype,"handleExpandedChange",1);v([Dt("expanded",{waitUntilFirstUpdate:!0})],fa.prototype,"handleExpandAnimation",1);v([Dt("lazy",{waitUntilFirstUpdate:!0})],fa.prototype,"handleLazyChange",1);var ru=fa;De("tree-item.expand",{keyframes:[{height:"0",opacity:"0",overflow:"hidden"},{height:"auto",opacity:"1",overflow:"hidden"}],options:{duration:250,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});De("tree-item.collapse",{keyframes:[{height:"auto",opacity:"1",overflow:"hidden"},{height:"0",opacity:"0",overflow:"hidden"}],options:{duration:200,easing:"cubic-bezier(0.4, 0.0, 0.2, 1)"}});ru.define("sl-tree-item");var Ak=Xt`
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
`,Ek=Xt`
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
`;const Ns=Math.min,Br=Math.max,yh=Math.round,rh=Math.floor,Hr=a=>({x:a,y:a}),Tk={left:"right",right:"left",bottom:"top",top:"bottom"};function V1(a,i,s){return Br(a,Ns(i,s))}function Hl(a,i){return typeof a=="function"?a(i):a}function So(a){return a.split("-")[0]}function Ul(a){return a.split("-")[1]}function q1(a){return a==="x"?"y":"x"}function sg(a){return a==="y"?"height":"width"}function Lr(a){const i=a[0];return i==="t"||i==="b"?"y":"x"}function og(a){return q1(Lr(a))}function zk(a,i,s){s===void 0&&(s=!1);const o=Ul(a),d=og(a),f=sg(d);let g=d==="x"?o===(s?"end":"start")?"right":"left":o==="start"?"bottom":"top";return i.reference[f]>i.floating[f]&&(g=xh(g)),[g,xh(g)]}function Nk(a){const i=xh(a);return[Um(a),i,Um(i)]}function Um(a){return a.includes("start")?a.replace("start","end"):a.replace("end","start")}const Dy=["left","right"],Ry=["right","left"],Ok=["top","bottom"],jk=["bottom","top"];function Dk(a,i,s){switch(a){case"top":case"bottom":return s?i?Ry:Dy:i?Dy:Ry;case"left":case"right":return i?Ok:jk;default:return[]}}function Rk(a,i,s,o){const d=Ul(a);let f=Dk(So(a),s==="start",o);return d&&(f=f.map(g=>g+"-"+d),i&&(f=f.concat(f.map(Um)))),f}function xh(a){const i=So(a);return Tk[i]+a.slice(i.length)}function Mk(a){var i,s,o,d;return{top:(i=a.top)!=null?i:0,right:(s=a.right)!=null?s:0,bottom:(o=a.bottom)!=null?o:0,left:(d=a.left)!=null?d:0}}function I1(a){return typeof a!="number"?Mk(a):{top:a,right:a,bottom:a,left:a}}function wh(a){const{x:i,y:s,width:o,height:d}=a;return{width:o,height:d,top:s,left:i,right:i+o,bottom:s+d,x:i,y:s}}function My(a,i,s){let{reference:o,floating:d}=a;const f=Lr(i),g=og(i),x=sg(g),S=So(i),E=f==="y",N=o.x+o.width/2-d.width/2,_=o.y+o.height/2-d.height/2,T=o[x]/2-d[x]/2;let D;switch(S){case"top":D={x:N,y:o.y-d.height};break;case"bottom":D={x:N,y:o.y+o.height};break;case"right":D={x:o.x+o.width,y:_};break;case"left":D={x:o.x-d.width,y:_};break;default:D={x:o.x,y:o.y}}const R=Ul(i);return R&&(D[g]+=T*(R==="end"?1:-1)*(s&&E?-1:1)),D}async function $k(a,i){var s;i===void 0&&(i={});const{x:o,y:d,platform:f,rects:g,elements:x,strategy:S}=a,{boundary:E="clippingAncestors",rootBoundary:N="viewport",elementContext:_="floating",altBoundary:T=!1,padding:D=0}=Hl(i,a),R=I1(D),mt=x[T?_==="floating"?"reference":"floating":_],Ot=wh(await f.getClippingRect({element:(s=await(f.isElement==null?void 0:f.isElement(mt)))==null||s?mt:mt.contextElement||await(f.getDocumentElement==null?void 0:f.getDocumentElement(x.floating)),boundary:E,rootBoundary:N,strategy:S})),ut=_==="floating"?{x:o,y:d,width:g.floating.width,height:g.floating.height}:g.reference,St=await(f.getOffsetParent==null?void 0:f.getOffsetParent(x.floating)),rt=await(f.isElement==null?void 0:f.isElement(St))&&await(f.getScale==null?void 0:f.getScale(St))||{x:1,y:1},dt=wh(f.convertOffsetParentRelativeRectToViewportRelativeRect?await f.convertOffsetParentRelativeRectToViewportRelativeRect({elements:x,rect:ut,offsetParent:St,strategy:S}):ut);return{top:(Ot.top-dt.top+R.top)/rt.y,bottom:(dt.bottom-Ot.bottom+R.bottom)/rt.y,left:(Ot.left-dt.left+R.left)/rt.x,right:(dt.right-Ot.right+R.right)/rt.x}}const Lk=50,Bk=async(a,i,s)=>{const{placement:o="bottom",strategy:d="absolute",middleware:f=[],platform:g}=s,x=g.detectOverflow?g:{...g,detectOverflow:$k},S=await(g.isRTL==null?void 0:g.isRTL(i));let E=await g.getElementRects({reference:a,floating:i,strategy:d}),{x:N,y:_}=My(E,o,S),T=o,D=0;const R={};for(let W=0;W<f.length;W++){const mt=f[W];if(!mt)continue;const{name:Ot,fn:ut}=mt,{x:St,y:rt,data:dt,reset:kt}=await ut({x:N,y:_,initialPlacement:o,placement:T,strategy:d,middlewareData:R,rects:E,platform:x,elements:{reference:a,floating:i}});N=St??N,_=rt??_,R[Ot]={...R[Ot],...dt},kt&&D<Lk&&(D++,typeof kt=="object"&&(kt.placement&&(T=kt.placement),kt.rects&&(E=kt.rects===!0?await g.getElementRects({reference:a,floating:i,strategy:d}):kt.rects),{x:N,y:_}=My(E,T,S)),W=-1)}return{x:N,y:_,placement:T,strategy:d,middlewareData:R}},Hk=a=>({name:"arrow",options:a,async fn(i){const{x:s,y:o,placement:d,rects:f,platform:g,elements:x,middlewareData:S}=i,{element:E,padding:N=0}=Hl(a,i)||{};if(E==null)return{};const _=I1(N),T={x:s,y:o},D=og(d),R=sg(D),W=await g.getDimensions(E),mt=D==="y",Ot=mt?"top":"left",ut=mt?"bottom":"right",St=mt?"clientHeight":"clientWidth",rt=f.reference[R]+f.reference[D]-T[D]-f.floating[R],dt=T[D]-f.reference[D],kt=await(g.getOffsetParent==null?void 0:g.getOffsetParent(E));let yt=kt?kt[St]:0;(!yt||!await(g.isElement==null?void 0:g.isElement(kt)))&&(yt=x.floating[St]||f.floating[R]);const pt=rt/2-dt/2,it=yt/2-W[R]/2-1,ft=Ns(_[Ot],it),ee=Ns(_[ut],it),le=yt-W[R]-ee,pe=yt/2-W[R]/2+pt,$e=V1(ft,pe,le),ge=!S.arrow&&Ul(d)!=null&&pe!==$e&&f.reference[R]/2-(pe<ft?ft:ee)-W[R]/2<0,Et=ge?pe<ft?pe-ft:pe-le:0;return{[D]:T[D]+Et,data:{[D]:$e,centerOffset:pe-$e-Et,...ge&&{alignmentOffset:Et}},reset:ge}}}),Uk=function(a){return a===void 0&&(a={}),{name:"flip",options:a,async fn(i){var s,o;const{placement:d,middlewareData:f,rects:g,initialPlacement:x,platform:S,elements:E}=i,{mainAxis:N=!0,crossAxis:_=!0,fallbackPlacements:T,fallbackStrategy:D="bestFit",fallbackAxisSideDirection:R="none",flipAlignment:W=!0,...mt}=Hl(a,i);if((s=f.arrow)!=null&&s.alignmentOffset)return{};const Ot=So(d),ut=Lr(x),St=So(x)===x,rt=await(S.isRTL==null?void 0:S.isRTL(E.floating)),dt=T||(St||!W?[xh(x)]:Nk(x)),kt=R!=="none";!T&&kt&&dt.push(...Rk(x,W,R,rt));const yt=[x,...dt],pt=await S.detectOverflow(i,mt),it=[];let ft=((o=f.flip)==null?void 0:o.overflows)||[];if(N&&it.push(pt[Ot]),_){const $e=zk(d,g,rt);it.push(pt[$e[0]],pt[$e[1]])}if(ft=[...ft,{placement:d,overflows:it}],!it.every($e=>$e<=0)){var ee,le;const $e=(((ee=f.flip)==null?void 0:ee.index)||0)+1,ge=yt[$e];if(ge&&(!(_==="alignment"?ut!==Lr(ge):!1)||ft.every(Bt=>Lr(Bt.placement)===ut?Bt.overflows[0]>0:!0)))return{data:{index:$e,overflows:ft},reset:{placement:ge}};let Et=(le=ft.filter(Yt=>Yt.overflows[0]<=0).sort((Yt,Bt)=>Yt.overflows[1]-Bt.overflows[1])[0])==null?void 0:le.placement;if(!Et)switch(D){case"bestFit":{var pe;const Yt=(pe=ft.filter(Bt=>{if(kt){const ie=Lr(Bt.placement);return ie===ut||ie==="y"}return!0}).map(Bt=>[Bt.placement,Bt.overflows.filter(ie=>ie>0).reduce((ie,jt)=>ie+jt,0)]).sort((Bt,ie)=>Bt[1]-ie[1])[0])==null?void 0:pe[0];Yt&&(Et=Yt);break}case"initialPlacement":Et=x;break}if(d!==Et)return{reset:{placement:Et}}}return{}}}},Vk=new Set(["left","top"]);async function qk(a,i){const{placement:s,platform:o,elements:d}=a,f=await(o.isRTL==null?void 0:o.isRTL(d.floating)),g=So(s),x=Ul(s),S=Lr(s)==="y",E=Vk.has(g)?-1:1,N=f&&S?-1:1,_=Hl(i,a);let{mainAxis:T,crossAxis:D,alignmentAxis:R}=typeof _=="number"?{mainAxis:_,crossAxis:0,alignmentAxis:null}:{mainAxis:_.mainAxis||0,crossAxis:_.crossAxis||0,alignmentAxis:_.alignmentAxis};return x&&typeof R=="number"&&(D=x==="end"?R*-1:R),S?{x:D*N,y:T*E}:{x:T*E,y:D*N}}const Ik=function(a){return a===void 0&&(a=0),{name:"offset",options:a,async fn(i){var s,o;const{x:d,y:f,placement:g,middlewareData:x}=i,S=await qk(i,a);return g===((s=x.offset)==null?void 0:s.placement)&&(o=x.arrow)!=null&&o.alignmentOffset?{}:{x:d+S.x,y:f+S.y,data:{...S,placement:g}}}}},Kk=function(a){return a===void 0&&(a={}),{name:"shift",options:a,async fn(i){const{x:s,y:o,placement:d,platform:f}=i,{mainAxis:g=!0,crossAxis:x=!1,limiter:S={fn:ut=>{let{x:St,y:rt}=ut;return{x:St,y:rt}}},...E}=Hl(a,i),N={x:s,y:o},_=await f.detectOverflow(i,E),T=Lr(d),D=q1(T);let R=N[D],W=N[T];const mt=(ut,St)=>V1(St+_[ut==="y"?"top":"left"],St,St-_[ut==="y"?"bottom":"right"]);g&&(R=mt(D,R)),x&&(W=mt(T,W));const Ot=S.fn({...i,[D]:R,[T]:W});return{...Ot,data:{x:Ot.x-s,y:Ot.y-o,enabled:{[D]:g,[T]:x}}}}}},Fk=function(a){return a===void 0&&(a={}),{name:"size",options:a,async fn(i){const{placement:s,rects:o,platform:d,elements:f}=i,{apply:g=()=>{},...x}=Hl(a,i),S=await d.detectOverflow(i,x),E=So(s),N=Ul(s),_=Lr(s)==="y",{width:T,height:D}=o.floating;let R,W;E==="top"||E==="bottom"?(R=E,W=N===(await(d.isRTL==null?void 0:d.isRTL(f.floating))?"start":"end")?"left":"right"):(W=E,R=N==="end"?"top":"bottom");const mt=D-S.top-S.bottom,Ot=T-S.left-S.right,ut=Ns(D-S[R],mt),St=Ns(T-S[W],Ot),rt=i.middlewareData.shift,dt=!rt;let kt=ut,yt=St;rt!=null&&rt.enabled.x&&(yt=Ot),rt!=null&&rt.enabled.y&&(kt=mt),dt&&!N&&(_?yt=T-2*Br(S.left,S.right):kt=D-2*Br(S.top,S.bottom)),await g({...i,availableWidth:yt,availableHeight:kt});const pt=await d.getDimensions(f.floating);return T!==pt.width||D!==pt.height?{reset:{rects:!0}}:{}}}};function Nh(){return typeof window<"u"}function Vl(a){return K1(a)?(a.nodeName||"").toLowerCase():"#document"}function Sn(a){var i;return(a==null||(i=a.ownerDocument)==null?void 0:i.defaultView)||window}function qr(a){var i;return(i=(K1(a)?a.ownerDocument:a.document)||window.document)==null?void 0:i.documentElement}function K1(a){return Nh()?a instanceof Node||a instanceof Sn(a).Node:!1}function Wi(a){return Nh()?a instanceof Element||a instanceof Sn(a).Element:!1}function Os(a){return Nh()?a instanceof HTMLElement||a instanceof Sn(a).HTMLElement:!1}function $y(a){return!Nh()||typeof ShadowRoot>"u"?!1:a instanceof ShadowRoot||a instanceof Sn(a).ShadowRoot}function Oh(a){const{overflow:i,overflowX:s,overflowY:o,display:d}=Ji(a);return/auto|scroll|overlay|hidden|clip/.test(i+o+s)&&d!=="inline"&&d!=="contents"}function Gk(a){return/^(table|td|th)$/.test(Vl(a))}function jh(a){try{if(a.matches(":popover-open"))return!0}catch{}try{return a.matches(":modal")}catch{return!1}}const Yk=/transform|translate|scale|rotate|perspective|filter/,Pk=/paint|layout|strict|content/,go=a=>!!a&&a!=="none";let xm;function Dh(a){const i=Wi(a)?Ji(a):a;return go(i.transform)||go(i.translate)||go(i.scale)||go(i.rotate)||go(i.perspective)||!lg()&&(go(i.backdropFilter)||go(i.filter))||Yk.test(i.willChange||"")||Pk.test(i.contain||"")}function Xk(a){let i=ko(a);for(;Os(i)&&!gu(i);){if(Dh(i))return i;if(jh(i))return null;i=ko(i)}return null}function lg(){return xm==null&&(xm=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),xm}function gu(a){return/^(html|body|#document)$/.test(Vl(a))}function Ji(a){return Sn(a).getComputedStyle(a)}function Rh(a){return Wi(a)?{scrollLeft:a.scrollLeft,scrollTop:a.scrollTop}:{scrollLeft:a.scrollX,scrollTop:a.scrollY}}function ko(a){if(Vl(a)==="html")return a;const i=a.assignedSlot||a.parentNode||$y(a)&&a.host||qr(a);return $y(i)?i.host:i}function F1(a){const i=ko(a);return gu(i)?(a.ownerDocument||a).body:Os(i)&&Oh(i)?i:F1(i)}function vu(a,i,s){var o;i===void 0&&(i=[]),s===void 0&&(s=!0);const d=F1(a),f=d===((o=a.ownerDocument)==null?void 0:o.body),g=Sn(d);if(f){const x=Vm(g);return i.concat(g,g.visualViewport||[],Oh(d)?d:[],x&&s?vu(x):[])}else return i.concat(d,vu(d,[],s))}function Vm(a){return a.parent&&Object.getPrototypeOf(a.parent)?a.frameElement:null}function G1(a){const i=Ji(a);let s=parseFloat(i.width)||0,o=parseFloat(i.height)||0;const d=Os(a),f=d?a.offsetWidth:s,g=d?a.offsetHeight:o,x=yh(s)!==f||yh(o)!==g;return x&&(s=f,o=g),{width:s,height:o,$:x}}function cg(a){return Wi(a)?a:a.contextElement}function Rl(a){const i=cg(a);if(!Os(i))return Hr(1);const s=i.getBoundingClientRect(),{width:o,height:d,$:f}=G1(i);let g=(f?yh(s.width):s.width)/o,x=(f?yh(s.height):s.height)/d;return(!g||!Number.isFinite(g))&&(g=1),(!x||!Number.isFinite(x))&&(x=1),{x:g,y:x}}const Qk=Hr(0);function Y1(a){const i=Sn(a);return!lg()||!i.visualViewport?Qk:{x:i.visualViewport.offsetLeft,y:i.visualViewport.offsetTop}}function Zk(a,i,s){return i===void 0&&(i=!1),!!s&&i&&s===Sn(a)}function Co(a,i,s,o){i===void 0&&(i=!1),s===void 0&&(s=!1);const d=a.getBoundingClientRect(),f=cg(a);let g=Hr(1);i&&(o?Wi(o)&&(g=Rl(o)):g=Rl(a));const x=Zk(f,s,o)?Y1(f):Hr(0);let S=(d.left+x.x)/g.x,E=(d.top+x.y)/g.y,N=d.width/g.x,_=d.height/g.y;if(f&&o){const T=Sn(f),D=Wi(o)?Sn(o):o;let R=T,W=Vm(R);for(;W&&D!==R;){const mt=Rl(W),Ot=W.getBoundingClientRect(),ut=Ji(W),St=Ot.left+(W.clientLeft+parseFloat(ut.paddingLeft))*mt.x,rt=Ot.top+(W.clientTop+parseFloat(ut.paddingTop))*mt.y;S*=mt.x,E*=mt.y,N*=mt.x,_*=mt.y,S+=St,E+=rt,R=Sn(W),W=Vm(R)}}return wh({width:N,height:_,x:S,y:E})}function Mh(a,i){const s=Rh(a).scrollLeft;return i?i.left+s:Co(qr(a)).left+s}function P1(a,i){const s=a.getBoundingClientRect(),o=s.left+i.scrollLeft-Mh(a,s),d=s.top+i.scrollTop;return{x:o,y:d}}function Wk(a){let{elements:i,rect:s,offsetParent:o,strategy:d}=a;const f=d==="fixed",g=qr(o),x=i?jh(i.floating):!1;if(o===g||x&&f)return s;let S={scrollLeft:0,scrollTop:0},E=Hr(1);const N=Hr(0),_=Os(o);if((_||!f)&&((Vl(o)!=="body"||Oh(g))&&(S=Rh(o)),_)){const D=Co(o);E=Rl(o),N.x=D.x+o.clientLeft,N.y=D.y+o.clientTop}const T=g&&!_&&!f?P1(g,S):Hr(0);return{width:s.width*E.x,height:s.height*E.y,x:s.x*E.x-S.scrollLeft*E.x+N.x+T.x,y:s.y*E.y-S.scrollTop*E.y+N.y+T.y}}function Jk(a){return a.getClientRects?Array.from(a.getClientRects()):[]}function tC(a){const i=Rh(a),s=a.ownerDocument.body,o=Br(a.scrollWidth,a.clientWidth,s.scrollWidth,s.clientWidth),d=Br(a.scrollHeight,a.clientHeight,s.scrollHeight,s.clientHeight);let f=-i.scrollLeft+Mh(a);const g=-i.scrollTop;return Ji(s).direction==="rtl"&&(f+=Br(a.clientWidth,s.clientWidth)-o),{width:o,height:d,x:f,y:g}}const eC=25;function aC(a,i,s){s===void 0&&(s="viewport");const o=s==="layoutViewport",d=Sn(a),f=qr(a),g=d.visualViewport;let x=f.clientWidth,S=f.clientHeight,E=0,N=0;if(g){const T=!lg()||i==="fixed";o?T||(E=-g.offsetLeft,N=-g.offsetTop):(x=g.width,S=g.height,T&&(E=g.offsetLeft,N=g.offsetTop))}if(Mh(f)<=0){const T=f.ownerDocument,D=T.body,R=getComputedStyle(D),W=T.compatMode==="CSS1Compat"&&parseFloat(R.marginLeft)+parseFloat(R.marginRight)||0,mt=Math.abs(f.clientWidth-D.clientWidth-W),Ot=getComputedStyle(f).scrollbarGutter==="stable both-edges"?mt/2:mt;Ot<=eC&&(x-=Ot)}return{width:x,height:S,x:E,y:N}}function nC(a,i){const s=Co(a,!0,i==="fixed"),o=s.top+a.clientTop,d=s.left+a.clientLeft,f=Rl(a),g=a.clientWidth*f.x,x=a.clientHeight*f.y,S=d*f.x,E=o*f.y;return{width:g,height:x,x:S,y:E}}function Ly(a,i,s){let o;if(i==="viewport"||i==="layoutViewport")o=aC(a,s,i);else if(i==="document")o=tC(qr(a));else if(Wi(i))o=nC(i,s);else{const d=Y1(a);o={x:i.x-d.x,y:i.y-d.y,width:i.width,height:i.height}}return wh(o)}function iC(a,i){const s=i.get(a);if(s)return s;let o=vu(a,[],!1).filter(x=>Wi(x)&&Vl(x)!=="body"),d=null;const f=Ji(a).position==="fixed";let g=f?ko(a):a;for(;Wi(g)&&!gu(g);){const x=Ji(g),S=Dh(g),E=d?d.position:f?"fixed":"";!S&&(E==="fixed"||E==="absolute"&&x.position==="static")?o=o.filter(_=>_!==g):d=x,g=ko(g)}return i.set(a,o),o}function rC(a){let{element:i,boundary:s,rootBoundary:o,strategy:d}=a;const g=[...s==="clippingAncestors"?jh(i)?[]:iC(i,this._c):[].concat(s),o],x=Ly(i,g[0],d);let S=x.top,E=x.right,N=x.bottom,_=x.left;for(let T=1;T<g.length;T++){const D=Ly(i,g[T],d);S=Br(D.top,S),E=Ns(D.right,E),N=Ns(D.bottom,N),_=Br(D.left,_)}return{width:E-_,height:N-S,x:_,y:S}}function sC(a){const{width:i,height:s}=G1(a);return{width:i,height:s}}function oC(a,i,s){const o=Os(i),d=qr(i),f=s==="fixed",g=Co(a,!0,f,i);let x={scrollLeft:0,scrollTop:0};const S=Hr(0);if((o||!f)&&((Vl(i)!=="body"||Oh(d))&&(x=Rh(i)),o)){const T=Co(i,!0,f,i);S.x=T.x+i.clientLeft,S.y=T.y+i.clientTop}!o&&d&&(S.x=Mh(d));const E=d&&!o&&!f?P1(d,x):Hr(0),N=g.left+x.scrollLeft-S.x-E.x,_=g.top+x.scrollTop-S.y-E.y;return{x:N,y:_,width:g.width,height:g.height}}function wm(a){return Ji(a).position==="static"}function By(a,i){if(!Os(a)||Ji(a).position==="fixed")return null;if(i)return i(a);let s=a.offsetParent;return qr(a)===s&&(s=s.ownerDocument.body),s}function X1(a,i){const s=Sn(a);if(jh(a))return s;if(!Os(a)){let d=ko(a);for(;d&&!gu(d);){if(Wi(d)&&!wm(d))return d;d=ko(d)}return s}let o=By(a,i);for(;o&&Gk(o)&&wm(o);)o=By(o,i);return o&&gu(o)&&wm(o)&&!Dh(o)?s:o||Xk(a)||s}const lC=async function(a){const i=this.getOffsetParent||X1,s=this.getDimensions,o=await s(a.floating);return{reference:oC(a.reference,await i(a.floating),a.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function cC(a){return Ji(a).direction==="rtl"}const fh={convertOffsetParentRelativeRectToViewportRelativeRect:Wk,getDocumentElement:qr,getClippingRect:rC,getOffsetParent:X1,getElementRects:lC,getClientRects:Jk,getDimensions:sC,getScale:Rl,isElement:Wi,isRTL:cC};function Q1(a,i){return a.x===i.x&&a.y===i.y&&a.width===i.width&&a.height===i.height}function uC(a,i,s){let o=null,d;const f=qr(a);function g(){var N;clearTimeout(d),(N=o)==null||N.disconnect(),o=null}function x(N,_){N===void 0&&(N=!1),_===void 0&&(_=1),g();const T=a.getBoundingClientRect(),{left:D,top:R,width:W,height:mt}=T;if(N||i(),!W||!mt)return;const Ot=rh(R),ut=rh(f.clientWidth-(D+W)),St=rh(f.clientHeight-(R+mt)),rt=rh(D),kt={rootMargin:-Ot+"px "+-ut+"px "+-St+"px "+-rt+"px",threshold:Br(0,Ns(1,_))||1};let yt=!0;function pt(it){const ft=it[0].intersectionRatio;if(!Q1(T,a.getBoundingClientRect()))return x();if(ft!==_){if(!yt)return x();ft?x(!1,ft):d=setTimeout(()=>{x(!1,1e-7)},1e3)}yt=!1}try{o=new IntersectionObserver(pt,{...kt,root:f.ownerDocument})}catch{o=new IntersectionObserver(pt,kt)}o.observe(a)}const S=Sn(a),E=()=>x(s);return S.addEventListener("resize",E),x(!0),()=>{S.removeEventListener("resize",E),g()}}function dC(a,i,s,o){o===void 0&&(o={});const{ancestorScroll:d=!0,ancestorResize:f=!0,elementResize:g=typeof ResizeObserver=="function",layoutShift:x=typeof IntersectionObserver=="function",animationFrame:S=!1}=o,E=cg(a),N=d||f?[...E?vu(E):[],...i?vu(i):[]]:[];N.forEach(Ot=>{d&&Ot.addEventListener("scroll",s),f&&Ot.addEventListener("resize",s)});const _=E&&x?uC(E,s,f):null;let T=-1,D=null;g&&(D=new ResizeObserver(Ot=>{let[ut]=Ot;ut&&ut.target===E&&D&&i&&(D.unobserve(i),cancelAnimationFrame(T),T=requestAnimationFrame(()=>{var St;(St=D)==null||St.observe(i)})),s()}),E&&!S&&D.observe(E),i&&D.observe(i));let R,W=S?Co(a):null;S&&mt();function mt(){const Ot=Co(a);W&&!Q1(W,Ot)&&s(),W=Ot,R=requestAnimationFrame(mt)}return s(),()=>{var Ot;N.forEach(ut=>{d&&ut.removeEventListener("scroll",s),f&&ut.removeEventListener("resize",s)}),_==null||_(),(Ot=D)==null||Ot.disconnect(),D=null,S&&cancelAnimationFrame(R)}}const hC=Ik,fC=Kk,pC=Uk,Hy=Fk,mC=Hk,gC=(a,i,s)=>{const o=new Map,d=s??{},f={...fh,...d.platform,_c:o};return Bk(a,i,{...d,platform:f})};function vC(a){return bC(a)}function _m(a){return a.assignedSlot?a.assignedSlot:a.parentNode instanceof ShadowRoot?a.parentNode.host:a.parentNode}function bC(a){for(let i=a;i;i=_m(i))if(i instanceof Element&&getComputedStyle(i).display==="none")return null;for(let i=_m(a);i;i=_m(i)){if(!(i instanceof Element))continue;const s=getComputedStyle(i);if(s.display!=="contents"&&(s.position!=="static"||Dh(s)||i.tagName==="BODY"))return i}return null}function yC(a){return a!==null&&typeof a=="object"&&"getBoundingClientRect"in a&&("contextElement"in a?a.contextElement instanceof Element:!0)}var Re=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const a=this.anchorEl.getBoundingClientRect(),i=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let o=0,d=0,f=0,g=0,x=0,S=0,E=0,N=0;s?a.top<i.top?(o=a.left,d=a.bottom,f=a.right,g=a.bottom,x=i.left,S=i.top,E=i.right,N=i.top):(o=i.left,d=i.bottom,f=i.right,g=i.bottom,x=a.left,S=a.top,E=a.right,N=a.top):a.left<i.left?(o=a.right,d=a.top,f=i.left,g=i.top,x=a.right,S=a.bottom,E=i.left,N=i.bottom):(o=i.right,d=i.top,f=a.left,g=a.top,x=i.right,S=i.bottom,E=a.left,N=a.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${d}px`),this.style.setProperty("--hover-bridge-top-right-x",`${f}px`),this.style.setProperty("--hover-bridge-top-right-y",`${g}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${x}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${S}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${E}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${N}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(a){super.updated(a),a.has("active")&&(this.active?this.start():this.stop()),a.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const a=this.getRootNode();this.anchorEl=a.getElementById(this.anchor)}else this.anchor instanceof Element||yC(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=dC(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(a=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>a())):a()})}reposition(){if(!this.active||!this.anchorEl)return;const a=[hC({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?a.push(Hy({apply:({rects:s})=>{const o=this.sync==="width"||this.sync==="both",d=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${s.reference.width}px`:"",this.popup.style.height=d?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&a.push(pC({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&a.push(fC({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?a.push(Hy({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&a.push(mC({element:this.arrowEl,padding:this.arrowPadding}));const i=this.strategy==="absolute"?s=>fh.getOffsetParent(s,vC):fh.getOffsetParent;gC(this.anchorEl,this.popup,{placement:this.placement,middleware:a,strategy:this.strategy,platform:yu(Ur({},fh),{getOffsetParent:i})}).then(({x:s,y:o,middlewareData:d,placement:f})=>{const g=this.localize.dir()==="rtl",x={top:"bottom",right:"left",bottom:"top",left:"right"}[f.split("-")[0]];if(this.setAttribute("data-current-placement",f),Object.assign(this.popup.style,{left:`${s}px`,top:`${o}px`}),this.arrow){const S=d.arrow.x,E=d.arrow.y;let N="",_="",T="",D="";if(this.arrowPlacement==="start"){const R=typeof S=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";N=typeof E=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",_=g?R:"",D=g?"":R}else if(this.arrowPlacement==="end"){const R=typeof S=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";_=g?"":R,D=g?R:"",T=typeof E=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(D=typeof S=="number"?"calc(50% - var(--arrow-size-diagonal))":"",N=typeof E=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(D=typeof S=="number"?`${S}px`:"",N=typeof E=="number"?`${E}px`:"");Object.assign(this.arrowEl.style,{top:N,right:_,bottom:T,left:D,[x]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return _t`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${Wt({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${Wt({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?_t`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};Re.styles=[Jt,Ek];v([$t(".popup")],Re.prototype,"popup",2);v([$t(".popup__arrow")],Re.prototype,"arrowEl",2);v([A()],Re.prototype,"anchor",2);v([A({type:Boolean,reflect:!0})],Re.prototype,"active",2);v([A({reflect:!0})],Re.prototype,"placement",2);v([A({reflect:!0})],Re.prototype,"strategy",2);v([A({type:Number})],Re.prototype,"distance",2);v([A({type:Number})],Re.prototype,"skidding",2);v([A({type:Boolean})],Re.prototype,"arrow",2);v([A({attribute:"arrow-placement"})],Re.prototype,"arrowPlacement",2);v([A({attribute:"arrow-padding",type:Number})],Re.prototype,"arrowPadding",2);v([A({type:Boolean})],Re.prototype,"flip",2);v([A({attribute:"flip-fallback-placements",converter:{fromAttribute:a=>a.split(" ").map(i=>i.trim()).filter(i=>i!==""),toAttribute:a=>a.join(" ")}})],Re.prototype,"flipFallbackPlacements",2);v([A({attribute:"flip-fallback-strategy"})],Re.prototype,"flipFallbackStrategy",2);v([A({type:Object})],Re.prototype,"flipBoundary",2);v([A({attribute:"flip-padding",type:Number})],Re.prototype,"flipPadding",2);v([A({type:Boolean})],Re.prototype,"shift",2);v([A({type:Object})],Re.prototype,"shiftBoundary",2);v([A({attribute:"shift-padding",type:Number})],Re.prototype,"shiftPadding",2);v([A({attribute:"auto-size"})],Re.prototype,"autoSize",2);v([A()],Re.prototype,"sync",2);v([A({type:Object})],Re.prototype,"autoSizeBoundary",2);v([A({attribute:"auto-size-padding",type:Number})],Re.prototype,"autoSizePadding",2);v([A({attribute:"hover-bridge",type:Boolean})],Re.prototype,"hoverBridge",2);function fn(a,i){return new Promise(s=>{function o(d){d.target===a&&(a.removeEventListener(i,o),s())}a.addEventListener(i,o)})}var qa=class extends Gt{constructor(){super(),this.localize=new ze(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=a=>{a.key==="Escape"&&(a.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const a=Oy(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),a)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const a=Oy(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),a)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var a;super.disconnectedCallback(),(a=this.closeWatcher)==null||a.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(a){return this.trigger.split(" ").includes(a)}async handleOpenChange(){var a,i;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((a=this.closeWatcher)==null||a.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await za(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:o}=Je(this,"tooltip.show",{dir:this.localize.dir()});await ha(this.popup.popup,s,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(i=this.closeWatcher)==null||i.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await za(this.body);const{keyframes:s,options:o}=Je(this,"tooltip.hide",{dir:this.localize.dir()});await ha(this.popup.popup,s,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,fn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,fn(this,"sl-after-hide")}render(){return _t`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${Wt({tooltip:!0,"tooltip--open":this.open})}
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
    `}};qa.styles=[Jt,Ak];qa.dependencies={"sl-popup":Re};v([$t("slot:not([name])")],qa.prototype,"defaultSlot",2);v([$t(".tooltip__body")],qa.prototype,"body",2);v([$t("sl-popup")],qa.prototype,"popup",2);v([A()],qa.prototype,"content",2);v([A()],qa.prototype,"placement",2);v([A({type:Boolean,reflect:!0})],qa.prototype,"disabled",2);v([A({type:Number})],qa.prototype,"distance",2);v([A({type:Boolean,reflect:!0})],qa.prototype,"open",2);v([A({type:Number})],qa.prototype,"skidding",2);v([A()],qa.prototype,"trigger",2);v([A({type:Boolean})],qa.prototype,"hoist",2);v([Dt("open",{waitUntilFirstUpdate:!0})],qa.prototype,"handleOpenChange",1);v([Dt(["content","distance","hoist","placement","skidding"])],qa.prototype,"handleOptionsChange",1);v([Dt("disabled")],qa.prototype,"handleDisabledChange",1);De("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});De("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});qa.define("sl-tooltip");var xC=Xt`
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
`;function Ta(a,i,s){const o=d=>Object.is(d,-0)?0:d;return a<i?o(i):a>s?o(s):o(a)}function Uy(a,i=!1){function s(f){const g=f.getChildrenItems({includeDisabled:!1});if(g.length){const x=g.every(E=>E.selected),S=g.every(E=>!E.selected&&!E.indeterminate);f.selected=x,f.indeterminate=!x&&!S}}function o(f){const g=f.parentElement;ru.isTreeItem(g)&&(s(g),o(g))}function d(f){for(const g of f.getChildrenItems())g.selected=i?f.selected||g.selected:!g.disabled&&f.selected,d(g);i&&s(f)}d(a),o(a)}var Eo=class extends Gt{constructor(){super(),this.selection="single",this.clickTarget=null,this.localize=new ze(this),this.initTreeItem=a=>{a.selectable=this.selection==="multiple",["expand","collapse"].filter(i=>!!this.querySelector(`[slot="${i}-icon"]`)).forEach(i=>{const s=a.querySelector(`[slot="${i}-icon"]`),o=this.getExpandButtonIcon(i);o&&(s===null?a.append(o):s.hasAttribute("data-default")&&s.replaceWith(o))})},this.handleTreeChanged=a=>{for(const i of a){const s=[...i.addedNodes].filter(ru.isTreeItem),o=[...i.removedNodes].filter(ru.isTreeItem);s.forEach(this.initTreeItem),this.lastFocusedItem&&o.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=a=>{const i=a.relatedTarget;(!i||!this.contains(i))&&(this.tabIndex=0)},this.handleFocusIn=a=>{const i=a.target;a.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),ru.isTreeItem(i)&&!i.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=i,this.tabIndex=-1,i.tabIndex=0)},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut),this.addEventListener("sl-lazy-change",this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute("role","tree"),this.setAttribute("tabindex","0"),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var a;super.disconnectedCallback(),(a=this.mutationObserver)==null||a.disconnect()}getExpandButtonIcon(a){const s=(a==="expand"?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(s){const o=s.cloneNode(!0);return[o,...o.querySelectorAll("[id]")].forEach(d=>d.removeAttribute("id")),o.setAttribute("data-default",""),o.slot=`${a}-icon`,o}return null}selectItem(a){const i=[...this.selectedItems];if(this.selection==="multiple")a.selected=!a.selected,a.lazy&&(a.expanded=!0),Uy(a);else if(this.selection==="single"||a.isLeaf){const o=this.getAllTreeItems();for(const d of o)d.selected=d===a}else this.selection==="leaf"&&(a.expanded=!a.expanded);const s=this.selectedItems;(i.length!==s.length||s.some(o=>!i.includes(o)))&&Promise.all(s.map(o=>o.updateComplete)).then(()=>{this.emit("sl-selection-change",{detail:{selection:s}})})}getAllTreeItems(){return[...this.querySelectorAll("sl-tree-item")]}focusItem(a){a==null||a.focus()}handleKeyDown(a){if(!["ArrowDown","ArrowUp","ArrowRight","ArrowLeft","Home","End","Enter"," "].includes(a.key)||a.composedPath().some(d=>{var f;return["input","textarea"].includes((f=d==null?void 0:d.tagName)==null?void 0:f.toLowerCase())}))return;const i=this.getFocusableItems(),s=this.localize.dir()==="ltr",o=this.localize.dir()==="rtl";if(i.length>0){a.preventDefault();const d=i.findIndex(S=>S.matches(":focus")),f=i[d],g=S=>{const E=i[Ta(S,0,i.length-1)];this.focusItem(E)},x=S=>{f.expanded=S};a.key==="ArrowDown"?g(d+1):a.key==="ArrowUp"?g(d-1):s&&a.key==="ArrowRight"||o&&a.key==="ArrowLeft"?!f||f.disabled||f.expanded||f.isLeaf&&!f.lazy?g(d+1):x(!0):s&&a.key==="ArrowLeft"||o&&a.key==="ArrowRight"?!f||f.disabled||f.isLeaf||!f.expanded?g(d-1):x(!1):a.key==="Home"?g(0):a.key==="End"?g(i.length-1):(a.key==="Enter"||a.key===" ")&&(f.disabled||this.selectItem(f))}}handleClick(a){const i=a.target,s=i.closest("sl-tree-item"),o=a.composedPath().some(d=>{var f;return(f=d==null?void 0:d.classList)==null?void 0:f.contains("tree-item__expand-button")});!s||s.disabled||i!==this.clickTarget||(o?s.expanded=!s.expanded:this.selectItem(s))}handleMouseDown(a){this.clickTarget=a.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){const a=this.selection==="multiple",i=this.getAllTreeItems();this.setAttribute("aria-multiselectable",a?"true":"false");for(const s of i)s.selectable=a;a&&(await this.updateComplete,[...this.querySelectorAll(":scope > sl-tree-item")].forEach(s=>Uy(s,!0)))}get selectedItems(){const a=this.getAllTreeItems(),i=s=>s.selected;return a.filter(i)}getFocusableItems(){const a=this.getAllTreeItems(),i=new Set;return a.filter(s=>{var o;if(s.disabled)return!1;const d=(o=s.parentElement)==null?void 0:o.closest("[role=treeitem]");return d&&(!d.expanded||d.loading||i.has(d))&&i.add(s),!i.has(s)})}render(){return _t`
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
    `}};Eo.styles=[Jt,xC];v([$t("slot:not([name])")],Eo.prototype,"defaultSlot",2);v([$t("slot[name=expand-icon]")],Eo.prototype,"expandedIconSlot",2);v([$t("slot[name=collapse-icon]")],Eo.prototype,"collapsedIconSlot",2);v([A()],Eo.prototype,"selection",2);v([Dt("selection")],Eo.prototype,"handleSelectionChange",1);Eo.define("sl-tree");var wC=Xt`
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
`,ug=class extends Gt{render(){return _t` <slot></slot> `}};ug.styles=[Jt,wC];ug.define("sl-visually-hidden");var _C=Xt`
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
`,SC=0,ku=class extends Gt{constructor(){super(...arguments),this.attrId=++SC,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return _t`
      <slot
        part="base"
        class=${Wt({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};ku.styles=[Jt,_C];v([A({reflect:!0})],ku.prototype,"name",2);v([A({type:Boolean,reflect:!0})],ku.prototype,"active",2);v([Dt("active")],ku.prototype,"handleActiveChange",1);ku.define("sl-tab-panel");var kC=Xt`
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
`,CC=Xt`
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
 */const Z1=Symbol.for(""),AC=a=>{if((a==null?void 0:a.r)===Z1)return a==null?void 0:a._$litStatic$},_h=(a,...i)=>({_$litStatic$:i.reduce((s,o,d)=>s+(f=>{if(f._$litStatic$!==void 0)return f._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${f}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+a[d+1],a[0]),r:Z1}),Vy=new Map,EC=a=>(i,...s)=>{const o=s.length;let d,f;const g=[],x=[];let S,E=0,N=!1;for(;E<o;){for(S=i[E];E<o&&(f=s[E],(d=AC(f))!==void 0);)S+=d+i[++E],N=!0;E!==o&&x.push(f),g.push(S),E++}if(E===o&&g.push(i[o]),N){const _=g.join("$$lit$$");(i=Vy.get(_))===void 0&&(g.raw=g,Vy.set(_,i=g)),s=x}return a(i,...s)},su=EC(_t);var Ra=class extends Gt{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(a){this.disabled&&(a.preventDefault(),a.stopPropagation())}click(){this.button.click()}focus(a){this.button.focus(a)}blur(){this.button.blur()}render(){const a=!!this.href,i=a?_h`a`:_h`button`;return su`
      <${i}
        part="base"
        class=${Wt({"icon-button":!0,"icon-button--disabled":!a&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Ft(a?void 0:this.disabled)}
        type=${Ft(a?void 0:"button")}
        href=${Ft(a?this.href:void 0)}
        target=${Ft(a?this.target:void 0)}
        download=${Ft(a?this.download:void 0)}
        rel=${Ft(a&&this.target?"noreferrer noopener":void 0)}
        role=${Ft(a?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Ft(this.name)}
          library=${Ft(this.library)}
          src=${Ft(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${i}>
    `}};Ra.styles=[Jt,CC];Ra.dependencies={"sl-icon":Ue};v([$t(".icon-button")],Ra.prototype,"button",2);v([Qt()],Ra.prototype,"hasFocus",2);v([A()],Ra.prototype,"name",2);v([A()],Ra.prototype,"library",2);v([A()],Ra.prototype,"src",2);v([A()],Ra.prototype,"href",2);v([A()],Ra.prototype,"target",2);v([A()],Ra.prototype,"download",2);v([A()],Ra.prototype,"label",2);v([A({type:Boolean,reflect:!0})],Ra.prototype,"disabled",2);var js=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return _t`
      <span
        part="base"
        class=${Wt({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?_t`
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
    `}};js.styles=[Jt,kC];js.dependencies={"sl-icon-button":Ra};v([A({reflect:!0})],js.prototype,"variant",2);v([A({reflect:!0})],js.prototype,"size",2);v([A({type:Boolean,reflect:!0})],js.prototype,"pill",2);v([A({type:Boolean})],js.prototype,"removable",2);js.define("sl-tag");var TC=Xt`
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
`,Ne=class extends Gt{constructor(){super(...arguments),this.formControlController=new Vr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new mn(this,"help-text","label"),this.hasFocus=!1,this.title="",this.name="",this.value="",this.size="medium",this.filled=!1,this.label="",this.helpText="",this.placeholder="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.form="",this.required=!1,this.spellcheck=!0,this.defaultValue=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var a;super.disconnectedCallback(),this.input&&((a=this.resizeObserver)==null||a.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(a){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(a)}setTextareaHeight(){this.resize==="auto"?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=""}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(a){this.input.focus(a)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(a){if(a){typeof a.top=="number"&&(this.input.scrollTop=a.top),typeof a.left=="number"&&(this.input.scrollLeft=a.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(a,i,s="none"){this.input.setSelectionRange(a,i,s)}setRangeText(a,i,s,o="preserve"){const d=i??this.input.selectionStart,f=s??this.input.selectionEnd;this.input.setRangeText(a,d,f,o),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(a){this.input.setCustomValidity(a),this.formControlController.updateValidity()}render(){const a=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),s=this.label?!0:!!a,o=this.helpText?!0:!!i;return _t`
      <div
        part="form-control"
        class=${Wt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":o})}
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
            class=${Wt({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${Ft(this.name)}
              .value=${_o(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Ft(this.placeholder)}
              rows=${Ft(this.rows)}
              minlength=${Ft(this.minlength)}
              maxlength=${Ft(this.maxlength)}
              autocapitalize=${Ft(this.autocapitalize)}
              autocorrect=${Ft(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${Ft(this.spellcheck)}
              enterkeyhint=${Ft(this.enterkeyhint)}
              inputmode=${Ft(this.inputmode)}
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
    `}};Ne.styles=[Jt,Ao,TC];v([$t(".textarea__control")],Ne.prototype,"input",2);v([$t(".textarea__size-adjuster")],Ne.prototype,"sizeAdjuster",2);v([Qt()],Ne.prototype,"hasFocus",2);v([A()],Ne.prototype,"title",2);v([A()],Ne.prototype,"name",2);v([A()],Ne.prototype,"value",2);v([A({reflect:!0})],Ne.prototype,"size",2);v([A({type:Boolean,reflect:!0})],Ne.prototype,"filled",2);v([A()],Ne.prototype,"label",2);v([A({attribute:"help-text"})],Ne.prototype,"helpText",2);v([A()],Ne.prototype,"placeholder",2);v([A({type:Number})],Ne.prototype,"rows",2);v([A()],Ne.prototype,"resize",2);v([A({type:Boolean,reflect:!0})],Ne.prototype,"disabled",2);v([A({type:Boolean,reflect:!0})],Ne.prototype,"readonly",2);v([A({reflect:!0})],Ne.prototype,"form",2);v([A({type:Boolean,reflect:!0})],Ne.prototype,"required",2);v([A({type:Number})],Ne.prototype,"minlength",2);v([A({type:Number})],Ne.prototype,"maxlength",2);v([A()],Ne.prototype,"autocapitalize",2);v([A()],Ne.prototype,"autocorrect",2);v([A()],Ne.prototype,"autocomplete",2);v([A({type:Boolean})],Ne.prototype,"autofocus",2);v([A()],Ne.prototype,"enterkeyhint",2);v([A({type:Boolean,converter:{fromAttribute:a=>!(!a||a==="false"),toAttribute:a=>a?"true":"false"}})],Ne.prototype,"spellcheck",2);v([A()],Ne.prototype,"inputmode",2);v([Bl()],Ne.prototype,"defaultValue",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleDisabledChange",1);v([Dt("rows",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleRowsChange",1);v([Dt("value",{waitUntilFirstUpdate:!0})],Ne.prototype,"handleValueChange",1);Ne.define("sl-textarea");var zC=Xt`
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
`,NC=0,ki=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.attrId=++NC,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(a){a.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false"),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,_t`
      <div
        part="base"
        class=${Wt({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?_t`
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
    `}};ki.styles=[Jt,zC];ki.dependencies={"sl-icon-button":Ra};v([$t(".tab")],ki.prototype,"tab",2);v([A({reflect:!0})],ki.prototype,"panel",2);v([A({type:Boolean,reflect:!0})],ki.prototype,"active",2);v([A({type:Boolean,reflect:!0})],ki.prototype,"closable",2);v([A({type:Boolean,reflect:!0})],ki.prototype,"disabled",2);v([A({type:Number,reflect:!0})],ki.prototype,"tabIndex",2);v([Dt("active")],ki.prototype,"handleActiveChange",1);v([Dt("disabled")],ki.prototype,"handleDisabledChange",1);ki.define("sl-tab");var OC=Xt`
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
`,jC=Xt`
  :host {
    display: contents;
  }
`,Cu=class extends Gt{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(a=>{this.emit("sl-resize",{detail:{entries:a}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){const a=this.shadowRoot.querySelector("slot");if(a!==null){const i=a.assignedElements({flatten:!0});this.observedElements.forEach(s=>this.resizeObserver.unobserve(s)),this.observedElements=[],i.forEach(s=>{this.resizeObserver.observe(s),this.observedElements.push(s)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return _t` <slot @slotchange=${this.handleSlotChange}></slot> `}};Cu.styles=[Jt,jC];v([A({type:Boolean,reflect:!0})],Cu.prototype,"disabled",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],Cu.prototype,"handleDisabledChange",1);function DC(a,i){return{top:Math.round(a.getBoundingClientRect().top-i.getBoundingClientRect().top),left:Math.round(a.getBoundingClientRect().left-i.getBoundingClientRect().left)}}var qm=new Set;function RC(){const a=document.documentElement.clientWidth;return Math.abs(window.innerWidth-a)}function MC(){const a=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));return isNaN(a)||!a?0:a}function ou(a){if(qm.add(a),!document.documentElement.classList.contains("sl-scroll-lock")){const i=RC()+MC();let s=getComputedStyle(document.documentElement).scrollbarGutter;(!s||s==="auto")&&(s="stable"),i<2&&(s=""),document.documentElement.style.setProperty("--sl-scroll-lock-gutter",s),document.documentElement.classList.add("sl-scroll-lock"),document.documentElement.style.setProperty("--sl-scroll-lock-size",`${i}px`)}}function lu(a){qm.delete(a),qm.size===0&&(document.documentElement.classList.remove("sl-scroll-lock"),document.documentElement.style.removeProperty("--sl-scroll-lock-size"))}function Im(a,i,s="vertical",o="smooth"){const d=DC(a,i),f=d.top+i.scrollTop,g=d.left+i.scrollLeft,x=i.scrollLeft,S=i.scrollLeft+i.offsetWidth,E=i.scrollTop,N=i.scrollTop+i.offsetHeight;(s==="horizontal"||s==="both")&&(g<x?i.scrollTo({left:g,behavior:o}):g+a.clientWidth>S&&i.scrollTo({left:g-i.offsetWidth+a.clientWidth,behavior:o})),(s==="vertical"||s==="both")&&(f<E?i.scrollTo({top:f,behavior:o}):f+a.clientHeight>N&&i.scrollTo({top:f-i.offsetHeight+a.clientHeight,behavior:o}))}var Ja=class extends Gt{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new ze(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){const a=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(i=>{const s=i.filter(({target:o})=>{if(o===this)return!0;if(o.closest("sl-tab-group")!==this)return!1;const d=o.tagName.toLowerCase();return d==="sl-tab"||d==="sl-tab-panel"});if(s.length!==0){if(s.some(o=>!["aria-labelledby","aria-controls"].includes(o.attributeName))&&setTimeout(()=>this.setAriaLabels()),s.some(o=>o.attributeName==="disabled"))this.syncTabsAndPanels();else if(s.some(o=>o.attributeName==="active")){const d=s.filter(f=>f.attributeName==="active"&&f.target.tagName.toLowerCase()==="sl-tab").map(f=>f.target).find(f=>f.active);d&&this.setActiveTab(d)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:["active","disabled","name","panel"],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),a.then(()=>{new IntersectionObserver((s,o)=>{var d;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((d=this.getActiveTab())!=null?d:this.tabs[0],{emitEvents:!1}),o.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var a,i;super.disconnectedCallback(),(a=this.mutationObserver)==null||a.disconnect(),this.nav&&((i=this.resizeObserver)==null||i.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(a=>a.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(a=>a.active)}handleClick(a){const s=a.target.closest("sl-tab");(s==null?void 0:s.closest("sl-tab-group"))===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(a){const s=a.target.closest("sl-tab");if((s==null?void 0:s.closest("sl-tab-group"))===this&&(["Enter"," "].includes(a.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),a.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(a.key))){const d=this.tabs.find(x=>x.matches(":focus")),f=this.localize.dir()==="rtl";let g=null;if((d==null?void 0:d.tagName.toLowerCase())==="sl-tab"){if(a.key==="Home")g=this.focusableTabs[0];else if(a.key==="End")g=this.focusableTabs[this.focusableTabs.length-1];else if(["top","bottom"].includes(this.placement)&&a.key===(f?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&a.key==="ArrowUp"){const x=this.tabs.findIndex(S=>S===d);g=this.findNextFocusableTab(x,"backward")}else if(["top","bottom"].includes(this.placement)&&a.key===(f?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&a.key==="ArrowDown"){const x=this.tabs.findIndex(S=>S===d);g=this.findNextFocusableTab(x,"forward")}if(!g)return;g.tabIndex=0,g.focus({preventScroll:!0}),this.activation==="auto"?this.setActiveTab(g,{scrollBehavior:"smooth"}):this.tabs.forEach(x=>{x.tabIndex=x===g?0:-1}),["top","bottom"].includes(this.placement)&&Im(g,this.nav,"horizontal"),a.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(a,i){if(i=Ur({emitEvents:!0,scrollBehavior:"auto"},i),a!==this.activeTab&&!a.disabled){const s=this.activeTab;this.activeTab=a,this.tabs.forEach(o=>{o.active=o===this.activeTab,o.tabIndex=o===this.activeTab?0:-1}),this.panels.forEach(o=>{var d;return o.active=o.name===((d=this.activeTab)==null?void 0:d.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&Im(this.activeTab,this.nav,"horizontal",i.scrollBehavior),i.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(a=>{const i=this.panels.find(s=>s.name===a.panel);i&&(a.setAttribute("aria-controls",i.getAttribute("id")),i.setAttribute("aria-labelledby",a.getAttribute("id")))})}repositionIndicator(){const a=this.getActiveTab();if(!a)return;const i=a.clientWidth,s=a.clientHeight,o=this.localize.dir()==="rtl",d=this.getAllTabs(),g=d.slice(0,d.indexOf(a)).reduce((x,S)=>({left:x.left+S.clientWidth,top:x.top+S.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${i}px`,this.indicator.style.height="auto",this.indicator.style.translate=o?`${-1*g.left}px`:`${g.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${g.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(a=>!a.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(a,i){let s=null;const o=i==="forward"?1:-1;let d=a+o;for(;a<this.tabs.length;){if(s=this.tabs[d]||null,s===null){i==="forward"?s=this.focusableTabs[0]:s=this.focusableTabs[this.focusableTabs.length-1];break}if(!s.disabled)break;d+=o}return s}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()==="rtl"?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(a){const i=this.tabs.find(s=>s.panel===a);i&&this.setActiveTab(i,{scrollBehavior:"smooth"})}render(){const a=this.localize.dir()==="rtl";return _t`
      <div
        part="base"
        class=${Wt({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?_t`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${Wt({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${a?"chevron-right":"chevron-left"}
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

          ${this.hasScrollControls?_t`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${Wt({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${a?"chevron-left":"chevron-right"}
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
    `}};Ja.styles=[Jt,OC];Ja.dependencies={"sl-icon-button":Ra,"sl-resize-observer":Cu};v([$t(".tab-group")],Ja.prototype,"tabGroup",2);v([$t(".tab-group__body")],Ja.prototype,"body",2);v([$t(".tab-group__nav")],Ja.prototype,"nav",2);v([$t(".tab-group__indicator")],Ja.prototype,"indicator",2);v([Qt()],Ja.prototype,"hasScrollControls",2);v([Qt()],Ja.prototype,"shouldHideScrollStartButton",2);v([Qt()],Ja.prototype,"shouldHideScrollEndButton",2);v([A()],Ja.prototype,"placement",2);v([A()],Ja.prototype,"activation",2);v([A({attribute:"no-scroll-controls",type:Boolean})],Ja.prototype,"noScrollControls",2);v([A({attribute:"fixed-scroll-controls",type:Boolean})],Ja.prototype,"fixedScrollControls",2);v([xu({passive:!0})],Ja.prototype,"updateScrollButtons",1);v([Dt("noScrollControls",{waitUntilFirstUpdate:!0})],Ja.prototype,"updateScrollControls",1);v([Dt("placement",{waitUntilFirstUpdate:!0})],Ja.prototype,"syncIndicator",1);Ja.define("sl-tab-group");var $C=Xt`
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
`,dg=class extends Gt{constructor(){super(...arguments),this.effect="none"}render(){return _t`
      <div
        part="base"
        class=${Wt({skeleton:!0,"skeleton--pulse":this.effect==="pulse","skeleton--sheen":this.effect==="sheen"})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};dg.styles=[Jt,$C];v([A()],dg.prototype,"effect",2);dg.define("sl-skeleton");var LC=Xt`
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
`;function cu(a,i){function s(d){const f=a.getBoundingClientRect(),g=a.ownerDocument.defaultView,x=f.left+g.scrollX,S=f.top+g.scrollY,E=d.pageX-x,N=d.pageY-S;i!=null&&i.onMove&&i.onMove(E,N)}function o(){document.removeEventListener("pointermove",s),document.removeEventListener("pointerup",o),i!=null&&i.onStop&&i.onStop()}document.addEventListener("pointermove",s,{passive:!0}),document.addEventListener("pointerup",o),(i==null?void 0:i.initialEvent)instanceof PointerEvent&&s(i.initialEvent)}var qy=()=>null,Vn=class extends Gt{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new ze(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue="",this.snapFunction=qy,this.snapThreshold=12}toSnapFunction(a){const i=a.split(" ");return({pos:s,size:o,snapThreshold:d,isRtl:f,vertical:g})=>{let x=s,S=Number.POSITIVE_INFINITY;return i.forEach(E=>{let N;if(E.startsWith("repeat(")){const T=a.substring(7,a.length-1),D=T.endsWith("%"),R=Number.parseFloat(T),W=D?o*(R/100):R;N=Math.round((f&&!g?o-s:s)/W)*W}else E.endsWith("%")?N=o*(Number.parseFloat(E)/100):N=Number.parseFloat(E);f&&!g&&(N=o-N);const _=Math.abs(s-N);_<=d&&_<S&&(x=N,S=_)}),x}}set snap(a){this.snapValue=a??"",a?this.snapFunction=typeof a=="string"?this.toSnapFunction(a):a:this.snapFunction=qy}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(a=>this.handleResize(a)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var a;super.disconnectedCallback(),(a=this.resizeObserver)==null||a.unobserve(this)}detectSize(){const{width:a,height:i}=this.getBoundingClientRect();this.size=this.vertical?i:a}percentageToPixels(a){return this.size*(a/100)}pixelsToPercentage(a){return a/this.size*100}handleDrag(a){const i=this.localize.dir()==="rtl";this.disabled||(a.cancelable&&a.preventDefault(),cu(this,{onMove:(s,o)=>{var d;let f=this.vertical?o:s;this.primary==="end"&&(f=this.size-f),f=(d=this.snapFunction({pos:f,size:this.size,snapThreshold:this.snapThreshold,isRtl:i,vertical:this.vertical}))!=null?d:f,this.position=Ta(this.pixelsToPercentage(f),0,100)},initialEvent:a}))}handleKeyDown(a){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End","Enter"].includes(a.key)){let i=this.position;const s=(a.shiftKey?10:1)*(this.primary==="end"?-1:1);if(a.preventDefault(),(a.key==="ArrowLeft"&&!this.vertical||a.key==="ArrowUp"&&this.vertical)&&(i-=s),(a.key==="ArrowRight"&&!this.vertical||a.key==="ArrowDown"&&this.vertical)&&(i+=s),a.key==="Home"&&(i=this.primary==="end"?100:0),a.key==="End"&&(i=this.primary==="end"?0:100),a.key==="Enter")if(this.isCollapsed)i=this.positionBeforeCollapsing,this.isCollapsed=!1;else{const o=this.position;i=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=o})}this.position=Ta(i,0,100)}}handleResize(a){const{width:i,height:s}=a[0].contentRect;this.size=this.vertical?s:i,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute("position-in-pixels")),this.positionInPixels=Number(this.getAttribute("position-in-pixels")),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const a=this.vertical?"gridTemplateRows":"gridTemplateColumns",i=this.vertical?"gridTemplateColumns":"gridTemplateRows",s=this.localize.dir()==="rtl",o=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,d="auto";return this.primary==="end"?s&&!this.vertical?this.style[a]=`${o} var(--divider-width) ${d}`:this.style[a]=`${d} var(--divider-width) ${o}`:s&&!this.vertical?this.style[a]=`${d} var(--divider-width) ${o}`:this.style[a]=`${o} var(--divider-width) ${d}`,this.style[i]="",_t`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${Ft(this.disabled?void 0:"0")}
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
    `}};Vn.styles=[Jt,LC];v([$t(".divider")],Vn.prototype,"divider",2);v([A({type:Number,reflect:!0})],Vn.prototype,"position",2);v([A({attribute:"position-in-pixels",type:Number})],Vn.prototype,"positionInPixels",2);v([A({type:Boolean,reflect:!0})],Vn.prototype,"vertical",2);v([A({type:Boolean,reflect:!0})],Vn.prototype,"disabled",2);v([A()],Vn.prototype,"primary",2);v([A({reflect:!0})],Vn.prototype,"snap",1);v([A({type:Number,attribute:"snap-threshold"})],Vn.prototype,"snapThreshold",2);v([Dt("position")],Vn.prototype,"handlePositionChange",1);v([Dt("positionInPixels")],Vn.prototype,"handlePositionInPixelsChange",1);v([Dt("vertical")],Vn.prototype,"handleVerticalChange",1);Vn.define("sl-split-panel");var BC=Xt`
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
`,rn=class extends Gt{constructor(){super(...arguments),this.formControlController=new Vr(this,{value:a=>a.checked?a.value||"on":void 0,defaultValue:a=>a.defaultChecked,setValue:(a,i)=>a.checked=i}),this.hasSlotController=new mn(this,"help-text"),this.hasFocus=!1,this.title="",this.name="",this.size="medium",this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form="",this.required=!1,this.helpText=""}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleInput(){this.emit("sl-input")}handleInvalid(a){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(a)}handleClick(){this.checked=!this.checked,this.emit("sl-change")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleKeyDown(a){a.key==="ArrowLeft"&&(a.preventDefault(),this.checked=!1,this.emit("sl-change"),this.emit("sl-input")),a.key==="ArrowRight"&&(a.preventDefault(),this.checked=!0,this.emit("sl-change"),this.emit("sl-input"))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(a){this.input.focus(a)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(a){this.input.setCustomValidity(a),this.formControlController.updateValidity()}render(){const a=this.hasSlotController.test("help-text"),i=this.helpText?!0:!!a;return _t`
      <div
        class=${Wt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-help-text":i})}
      >
        <label
          part="base"
          class=${Wt({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size==="small","switch--medium":this.size==="medium","switch--large":this.size==="large"})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${Ft(this.value)}
            .checked=${_o(this.checked)}
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
    `}};rn.styles=[Jt,Ao,BC];v([$t('input[type="checkbox"]')],rn.prototype,"input",2);v([Qt()],rn.prototype,"hasFocus",2);v([A()],rn.prototype,"title",2);v([A()],rn.prototype,"name",2);v([A()],rn.prototype,"value",2);v([A({reflect:!0})],rn.prototype,"size",2);v([A({type:Boolean,reflect:!0})],rn.prototype,"disabled",2);v([A({type:Boolean,reflect:!0})],rn.prototype,"checked",2);v([Bl("checked")],rn.prototype,"defaultChecked",2);v([A({reflect:!0})],rn.prototype,"form",2);v([A({type:Boolean,reflect:!0})],rn.prototype,"required",2);v([A({attribute:"help-text"})],rn.prototype,"helpText",2);v([Dt("checked",{waitUntilFirstUpdate:!0})],rn.prototype,"handleCheckedChange",1);v([Dt("disabled",{waitUntilFirstUpdate:!0})],rn.prototype,"handleDisabledChange",1);rn.define("sl-switch");Cu.define("sl-resize-observer");var HC=Xt`
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
 */let Km=class extends _u{constructor(i){if(super(i),this.it=We,i.type!==Zi.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(i){if(i===We||i==null)return this._t=void 0,this.it=i;if(i===Un)return i;if(typeof i!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(i===this.it)return this._t;this.it=i;const s=[i];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}};Km.directiveName="unsafeHTML",Km.resultType=1;const ph=wu(Km);var Ce=class extends Gt{constructor(){super(...arguments),this.formControlController=new Vr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new mn(this,"help-text","label"),this.localize=new ze(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.valueHasChanged=!1,this.name="",this._value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=a=>_t`
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
        @sl-remove=${i=>this.handleTagRemove(i,a)}
      >
        ${a.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=a=>{const i=a.composedPath();this&&!i.includes(this)&&this.hide()},this.handleDocumentKeyDown=a=>{const i=a.target,s=i.closest(".select__clear")!==null,o=i.closest("sl-icon-button")!==null;if(!(s||o)){if(a.key==="Escape"&&this.open&&!this.closeWatcher&&(a.preventDefault(),a.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),a.key==="Enter"||a.key===" "&&this.typeToSelectString===""){if(a.preventDefault(),a.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(a.key)){const d=this.getAllOptions(),f=d.indexOf(this.currentOption);let g=Math.max(0,f);if(a.preventDefault(),!this.open&&(this.show(),this.currentOption))return;a.key==="ArrowDown"?(g=f+1,g>d.length-1&&(g=0)):a.key==="ArrowUp"?(g=f-1,g<0&&(g=d.length-1)):a.key==="Home"?g=0:a.key==="End"&&(g=d.length-1),this.setCurrentOption(d[g])}if(a.key&&a.key.length===1||a.key==="Backspace"){const d=this.getAllOptions();if(a.metaKey||a.ctrlKey||a.altKey)return;if(!this.open){if(a.key==="Backspace")return;this.show()}a.stopPropagation(),a.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),a.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=a.key.toLowerCase();for(const f of d)if(f.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(f);break}}}},this.handleDocumentMouseDown=a=>{const i=a.composedPath();this&&!i.includes(this)&&this.hide()}}get value(){return this._value}set value(a){this.multiple?a=Array.isArray(a)?a:a.split(" "):a=Array.isArray(a)?a.join(" "):a,this._value!==a&&(this.valueHasChanged=!0,this._value=a)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var a;document.addEventListener("focusin",this.handleDocumentFocusIn),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener("focusin",this.handleDocumentFocusIn),"CloseWatcher"in window&&((a=this.closeWatcher)==null||a.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var a;document.removeEventListener("focusin",this.handleDocumentFocusIn),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener("focusin",this.handleDocumentFocusIn),(a=this.closeWatcher)==null||a.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(a){const s=a.composedPath().some(o=>o instanceof Element&&o.tagName.toLowerCase()==="sl-icon-button");this.disabled||s||(a.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(a){a.key!=="Tab"&&(a.stopPropagation(),this.handleDocumentKeyDown(a))}handleClearClick(a){a.stopPropagation(),this.valueHasChanged=!0,this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(a){a.stopPropagation(),a.preventDefault()}handleOptionClick(a){const s=a.target.closest("sl-option"),o=this.value;s&&!s.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(s):this.setSelectedOptions(s),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==o&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get("sl-option")||customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange());const a=this.getAllOptions(),i=this.valueHasChanged?this.value:this.defaultValue,s=Array.isArray(i)?i:[i],o=[];a.forEach(d=>o.push(d.value)),this.setSelectedOptions(a.filter(d=>s.includes(d.value)))}handleTagRemove(a,i){a.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(i,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(a){this.getAllOptions().forEach(s=>{s.current=!1,s.tabIndex=-1}),a&&(this.currentOption=a,a.current=!0,a.tabIndex=0,a.focus())}setSelectedOptions(a){const i=this.getAllOptions(),s=Array.isArray(a)?a:[a];i.forEach(o=>o.selected=!1),s.length&&s.forEach(o=>o.selected=!0),this.selectionChanged()}toggleOptionSelection(a,i){i===!0||i===!1?a.selected=i:a.selected=!a.selected,this.selectionChanged()}selectionChanged(){var a,i,s;const o=this.getAllOptions();this.selectedOptions=o.filter(f=>f.selected);const d=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(f=>f.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length);else{const f=this.selectedOptions[0];this.value=(a=f==null?void 0:f.value)!=null?a:"",this.displayLabel=(s=(i=f==null?void 0:f.getTextLabel)==null?void 0:i.call(f))!=null?s:""}this.valueHasChanged=d,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((a,i)=>{if(i<this.maxOptionsVisible||this.maxOptionsVisible<=0){const s=this.getTag(a,i);return _t`<div @sl-remove=${o=>this.handleTagRemove(o,a)}>
          ${typeof s=="string"?ph(s):s}
        </div>`}else if(i===this.maxOptionsVisible)return _t`<sl-tag size=${this.size}>+${this.selectedOptions.length-i}</sl-tag>`;return _t``})}handleInvalid(a){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(a)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(a,i,s){if(super.attributeChangedCallback(a,i,s),a==="value"){const o=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=o}}handleValueChange(){if(!this.valueHasChanged){const s=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=s}const a=this.getAllOptions(),i=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(a.filter(s=>i.includes(s.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await za(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:a,options:i}=Je(this,"select.show",{dir:this.localize.dir()});await ha(this.popup.popup,a,i),this.currentOption&&Im(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await za(this);const{keyframes:a,options:i}=Je(this,"select.hide",{dir:this.localize.dir()});await ha(this.popup.popup,a,i),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,fn(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,fn(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(a){this.valueInput.setCustomValidity(a),this.formControlController.updateValidity()}focus(a){this.displayInput.focus(a)}blur(){this.displayInput.blur()}render(){const a=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),s=this.label?!0:!!a,o=this.helpText?!0:!!i,d=this.clearable&&!this.disabled&&this.value.length>0,f=this.placeholder&&this.value&&this.value.length<=0;return _t`
      <div
        part="form-control"
        class=${Wt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":o})}
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
            class=${Wt({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":f,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
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

              ${this.multiple?_t`<div part="tags" class="select__tags">${this.tags}</div>`:""}

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

              ${d?_t`
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
    `}};Ce.styles=[Jt,Ao,HC];Ce.dependencies={"sl-icon":Ue,"sl-popup":Re,"sl-tag":js};v([$t(".select")],Ce.prototype,"popup",2);v([$t(".select__combobox")],Ce.prototype,"combobox",2);v([$t(".select__display-input")],Ce.prototype,"displayInput",2);v([$t(".select__value-input")],Ce.prototype,"valueInput",2);v([$t(".select__listbox")],Ce.prototype,"listbox",2);v([Qt()],Ce.prototype,"hasFocus",2);v([Qt()],Ce.prototype,"displayLabel",2);v([Qt()],Ce.prototype,"currentOption",2);v([Qt()],Ce.prototype,"selectedOptions",2);v([Qt()],Ce.prototype,"valueHasChanged",2);v([A()],Ce.prototype,"name",2);v([Qt()],Ce.prototype,"value",1);v([A({attribute:"value"})],Ce.prototype,"defaultValue",2);v([A({reflect:!0})],Ce.prototype,"size",2);v([A()],Ce.prototype,"placeholder",2);v([A({type:Boolean,reflect:!0})],Ce.prototype,"multiple",2);v([A({attribute:"max-options-visible",type:Number})],Ce.prototype,"maxOptionsVisible",2);v([A({type:Boolean,reflect:!0})],Ce.prototype,"disabled",2);v([A({type:Boolean})],Ce.prototype,"clearable",2);v([A({type:Boolean,reflect:!0})],Ce.prototype,"open",2);v([A({type:Boolean})],Ce.prototype,"hoist",2);v([A({type:Boolean,reflect:!0})],Ce.prototype,"filled",2);v([A({type:Boolean,reflect:!0})],Ce.prototype,"pill",2);v([A()],Ce.prototype,"label",2);v([A({reflect:!0})],Ce.prototype,"placement",2);v([A({attribute:"help-text"})],Ce.prototype,"helpText",2);v([A({reflect:!0})],Ce.prototype,"form",2);v([A({type:Boolean,reflect:!0})],Ce.prototype,"required",2);v([A()],Ce.prototype,"getTag",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleDisabledChange",1);v([Dt(["defaultValue","value"],{waitUntilFirstUpdate:!0})],Ce.prototype,"handleValueChange",1);v([Dt("open",{waitUntilFirstUpdate:!0})],Ce.prototype,"handleOpenChange",1);De("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});De("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});Ce.define("sl-select");Su.define("sl-spinner");var UC=Xt`
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
`,ra=class extends Gt{constructor(){super(...arguments),this.formControlController=new Vr(this),this.hasSlotController=new mn(this,"help-text","label"),this.localize=new ze(this),this.hasFocus=!1,this.hasTooltip=!1,this.title="",this.name="",this.value=0,this.label="",this.helpText="",this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip="top",this.tooltipFormatter=a=>a.toString(),this.form="",this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var a;super.disconnectedCallback(),(a=this.resizeObserver)==null||a.unobserve(this.input)}handleChange(){this.emit("sl-change")}handleInput(){this.value=parseFloat(this.input.value),this.emit("sl-input"),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit("sl-focus")}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(a){this.input.style.setProperty("--percent",`${a*100}%`)}syncTooltip(a){if(this.output!==null){const i=this.input.offsetWidth,s=this.output.offsetWidth,o=getComputedStyle(this.input).getPropertyValue("--thumb-size"),d=this.localize.dir()==="rtl",f=i*a;if(d){const g=`${i-f}px + ${a} * ${o}`;this.output.style.translate=`calc((${g} - ${s/2}px - ${o} / 2))`}else{const g=`${f}px - ${a} * ${o}`;this.output.style.translate=`calc(${g} - ${s/2}px + ${o} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){const a=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(a),this.tooltip!=="none"&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(a))}handleInvalid(a){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(a)}focus(a){this.input.focus(a)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(a){this.input.setCustomValidity(a),this.formControlController.updateValidity()}render(){const a=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),s=this.label?!0:!!a,o=this.helpText?!0:!!i;return _t`
      <div
        part="form-control"
        class=${Wt({"form-control":!0,"form-control--medium":!0,"form-control--has-label":s,"form-control--has-help-text":o})}
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
            class=${Wt({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()==="rtl","range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip==="top","range--tooltip-bottom":this.tooltip==="bottom"})}
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
              name=${Ft(this.name)}
              ?disabled=${this.disabled}
              min=${Ft(this.min)}
              max=${Ft(this.max)}
              step=${Ft(this.step)}
              .value=${_o(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!=="none"&&!this.disabled?_t`
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
    `}};ra.styles=[Jt,Ao,UC];v([$t(".range__control")],ra.prototype,"input",2);v([$t(".range__tooltip")],ra.prototype,"output",2);v([Qt()],ra.prototype,"hasFocus",2);v([Qt()],ra.prototype,"hasTooltip",2);v([A()],ra.prototype,"title",2);v([A()],ra.prototype,"name",2);v([A({type:Number})],ra.prototype,"value",2);v([A()],ra.prototype,"label",2);v([A({attribute:"help-text"})],ra.prototype,"helpText",2);v([A({type:Boolean,reflect:!0})],ra.prototype,"disabled",2);v([A({type:Number})],ra.prototype,"min",2);v([A({type:Number})],ra.prototype,"max",2);v([A({type:Number})],ra.prototype,"step",2);v([A()],ra.prototype,"tooltip",2);v([A({attribute:!1})],ra.prototype,"tooltipFormatter",2);v([A({reflect:!0})],ra.prototype,"form",2);v([Bl()],ra.prototype,"defaultValue",2);v([xu({passive:!0})],ra.prototype,"handleThumbDragStart",1);v([Dt("value",{waitUntilFirstUpdate:!0})],ra.prototype,"handleValueChange",1);v([Dt("disabled",{waitUntilFirstUpdate:!0})],ra.prototype,"handleDisabledChange",1);v([Dt("hasTooltip",{waitUntilFirstUpdate:!0})],ra.prototype,"syncRange",1);ra.define("sl-range");var VC=Xt`
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
 */const W1="important",qC=" !"+W1,_n=wu(class extends _u{constructor(a){var i;if(super(a),a.type!==Zi.ATTRIBUTE||a.name!=="style"||((i=a.strings)==null?void 0:i.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(a){return Object.keys(a).reduce((i,s)=>{const o=a[s];return o==null?i:i+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(a,[i]){const{style:s}=a.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(i)),this.render(i);for(const o of this.ft)i[o]==null&&(this.ft.delete(o),o.includes("-")?s.removeProperty(o):s[o]=null);for(const o in i){const d=i[o];if(d!=null){this.ft.add(o);const f=typeof d=="string"&&d.endsWith(qC);o.includes("-")||f?s.setProperty(o,f?d.slice(0,-11):d,f?W1:""):s[o]=d}}return Un}});var sn=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.hoverValue=0,this.isHovering=!1,this.label="",this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>'<sl-icon name="star-fill" library="system"></sl-icon>'}getValueFromMousePosition(a){return this.getValueFromXCoordinate(a.clientX)}getValueFromTouchPosition(a){return this.getValueFromXCoordinate(a.touches[0].clientX)}getValueFromXCoordinate(a){const i=this.localize.dir()==="rtl",{left:s,right:o,width:d}=this.rating.getBoundingClientRect(),f=i?this.roundToPrecision((o-a)/d*this.max,this.precision):this.roundToPrecision((a-s)/d*this.max,this.precision);return Ta(f,0,this.max)}handleClick(a){this.disabled||(this.setValue(this.getValueFromMousePosition(a)),this.emit("sl-change"))}setValue(a){this.disabled||this.readonly||(this.value=a===this.value?0:a,this.isHovering=!1)}handleKeyDown(a){const i=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl",o=this.value;if(!(this.disabled||this.readonly)){if(a.key==="ArrowDown"||i&&a.key==="ArrowLeft"||s&&a.key==="ArrowRight"){const d=a.shiftKey?1:this.precision;this.value=Math.max(0,this.value-d),a.preventDefault()}if(a.key==="ArrowUp"||i&&a.key==="ArrowRight"||s&&a.key==="ArrowLeft"){const d=a.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+d),a.preventDefault()}a.key==="Home"&&(this.value=0,a.preventDefault()),a.key==="End"&&(this.value=this.max,a.preventDefault()),this.value!==o&&this.emit("sl-change")}}handleMouseEnter(a){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(a)}handleMouseMove(a){this.hoverValue=this.getValueFromMousePosition(a)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(a){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(a),a.preventDefault()}handleTouchMove(a){this.hoverValue=this.getValueFromTouchPosition(a)}handleTouchEnd(a){this.isHovering=!1,this.setValue(this.hoverValue),this.emit("sl-change"),a.preventDefault()}roundToPrecision(a,i=.5){const s=1/i;return Math.ceil(a*s)/s}handleHoverValueChange(){this.emit("sl-hover",{detail:{phase:"move",value:this.hoverValue}})}handleIsHoveringChange(){this.emit("sl-hover",{detail:{phase:this.isHovering?"start":"end",value:this.hoverValue}})}focus(a){this.rating.focus(a)}blur(){this.rating.blur()}render(){const a=this.localize.dir()==="rtl",i=Array.from(Array(this.max).keys());let s=0;return this.disabled||this.readonly?s=this.value:s=this.isHovering?this.hoverValue:this.value,_t`
      <div
        part="base"
        class=${Wt({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":a})}
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
          ${i.map(o=>s>o&&s<o+1?_t`
                <span
                  class=${Wt({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===o+1})}
                  role="presentation"
                >
                  <div
                    style=${_n({clipPath:a?`inset(0 ${(s-o)*100}% 0 0)`:`inset(0 0 0 ${(s-o)*100}%)`})}
                  >
                    ${ph(this.getSymbol(o+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${_n({clipPath:a?`inset(0 0 0 ${100-(s-o)*100}%)`:`inset(0 ${100-(s-o)*100}% 0 0)`})}
                  >
                    ${ph(this.getSymbol(o+1))}
                  </div>
                </span>
              `:_t`
              <span
                class=${Wt({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(s)===o+1,"rating__symbol--active":s>=o+1})}
                role="presentation"
              >
                ${ph(this.getSymbol(o+1))}
              </span>
            `)}
        </span>
      </div>
    `}};sn.styles=[Jt,VC];sn.dependencies={"sl-icon":Ue};v([$t(".rating")],sn.prototype,"rating",2);v([Qt()],sn.prototype,"hoverValue",2);v([Qt()],sn.prototype,"isHovering",2);v([A()],sn.prototype,"label",2);v([A({type:Number})],sn.prototype,"value",2);v([A({type:Number})],sn.prototype,"max",2);v([A({type:Number})],sn.prototype,"precision",2);v([A({type:Boolean,reflect:!0})],sn.prototype,"readonly",2);v([A({type:Boolean,reflect:!0})],sn.prototype,"disabled",2);v([A()],sn.prototype,"getSymbol",2);v([xu({passive:!0})],sn.prototype,"handleTouchMove",1);v([Dt("hoverValue")],sn.prototype,"handleHoverValueChange",1);v([Dt("isHovering")],sn.prototype,"handleIsHoveringChange",1);sn.define("sl-rating");var IC=[{max:276e4,value:6e4,unit:"minute"},{max:72e6,value:36e5,unit:"hour"},{max:5184e5,value:864e5,unit:"day"},{max:24192e5,value:6048e5,unit:"week"},{max:28512e6,value:2592e6,unit:"month"},{max:1/0,value:31536e6,unit:"year"}],To=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.isoTime="",this.relativeTime="",this.date=new Date,this.format="long",this.numeric="auto",this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){const a=new Date,i=new Date(this.date);if(isNaN(i.getMilliseconds()))return this.relativeTime="",this.isoTime="","";const s=i.getTime()-a.getTime(),{unit:o,value:d}=IC.find(f=>Math.abs(s)<f.max);if(this.isoTime=i.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(s/d),o,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let f;o==="minute"?f=sh("second"):o==="hour"?f=sh("minute"):o==="day"?f=sh("hour"):f=sh("day"),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),f)}return _t` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};v([Qt()],To.prototype,"isoTime",2);v([Qt()],To.prototype,"relativeTime",2);v([A()],To.prototype,"date",2);v([A()],To.prototype,"format",2);v([A()],To.prototype,"numeric",2);v([A({type:Boolean})],To.prototype,"sync",2);function sh(a){const s={second:1e3,minute:6e4,hour:36e5,day:864e5}[a];return s-Date.now()%s}To.define("sl-relative-time");var J1=Xt`
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
`,KC=Xt`
  ${J1}

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
`,Ci=class extends Gt{constructor(){super(...arguments),this.hasSlotController=new mn(this,"[default]","prefix","suffix"),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size="medium",this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","presentation")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(a){if(this.disabled){a.preventDefault(),a.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(a){this.input.focus(a)}blur(){this.input.blur()}render(){return su`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?" button--checked":""}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${Wt({button:!0,"button--default":!0,"button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
          aria-disabled=${this.disabled}
          type="button"
          value=${Ft(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};Ci.styles=[Jt,KC];v([$t(".button")],Ci.prototype,"input",2);v([$t(".hidden-input")],Ci.prototype,"hiddenInput",2);v([Qt()],Ci.prototype,"hasFocus",2);v([A({type:Boolean,reflect:!0})],Ci.prototype,"checked",2);v([A()],Ci.prototype,"value",2);v([A({type:Boolean,reflect:!0})],Ci.prototype,"disabled",2);v([A({reflect:!0})],Ci.prototype,"size",2);v([A({type:Boolean,reflect:!0})],Ci.prototype,"pill",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],Ci.prototype,"handleDisabledChange",1);Ci.define("sl-radio-button");var FC=Xt`
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
`,GC=Xt`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,zo=class extends Gt{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(a){const i=Zc(a.target);i==null||i.toggleAttribute("data-sl-button-group__button--focus",!0)}handleBlur(a){const i=Zc(a.target);i==null||i.toggleAttribute("data-sl-button-group__button--focus",!1)}handleMouseOver(a){const i=Zc(a.target);i==null||i.toggleAttribute("data-sl-button-group__button--hover",!0)}handleMouseOut(a){const i=Zc(a.target);i==null||i.toggleAttribute("data-sl-button-group__button--hover",!1)}handleSlotChange(){const a=[...this.defaultSlot.assignedElements({flatten:!0})];a.forEach(i=>{const s=a.indexOf(i),o=Zc(i);o&&(o.toggleAttribute("data-sl-button-group__button",!0),o.toggleAttribute("data-sl-button-group__button--first",s===0),o.toggleAttribute("data-sl-button-group__button--inner",s>0&&s<a.length-1),o.toggleAttribute("data-sl-button-group__button--last",s===a.length-1),o.toggleAttribute("data-sl-button-group__button--radio",o.tagName.toLowerCase()==="sl-radio-button"))})}render(){return _t`
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
    `}};zo.styles=[Jt,GC];v([$t("slot")],zo.prototype,"defaultSlot",2);v([Qt()],zo.prototype,"disableRole",2);v([A()],zo.prototype,"label",2);function Zc(a){var i;const s="sl-button, sl-radio-button";return(i=a.closest(s))!=null?i:a.querySelector(s)}var tn=class extends Gt{constructor(){super(...arguments),this.formControlController=new Vr(this),this.hasSlotController=new mn(this,"help-text","label"),this.customValidityMessage="",this.hasButtonGroup=!1,this.errorMessage="",this.defaultValue="",this.label="",this.helpText="",this.name="option",this.value="",this.size="medium",this.form="",this.required=!1}get validity(){const a=this.required&&!this.value;return this.customValidityMessage!==""?vk:a?gk:zh}get validationMessage(){const a=this.required&&!this.value;return this.customValidityMessage!==""?this.customValidityMessage:a?this.validationInput.validationMessage:""}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(a){const i=a.target.closest("sl-radio, sl-radio-button"),s=this.getAllRadios(),o=this.value;!i||i.disabled||(this.value=i.value,s.forEach(d=>d.checked=d===i),this.value!==o&&(this.emit("sl-change"),this.emit("sl-input")))}handleKeyDown(a){var i;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(a.key))return;const s=this.getAllRadios().filter(x=>!x.disabled),o=(i=s.find(x=>x.checked))!=null?i:s[0],d=a.key===" "?0:["ArrowUp","ArrowLeft"].includes(a.key)?-1:1,f=this.value;let g=s.indexOf(o)+d;g<0&&(g=s.length-1),g>s.length-1&&(g=0),this.getAllRadios().forEach(x=>{x.checked=!1,this.hasButtonGroup||x.setAttribute("tabindex","-1")}),this.value=s[g].value,s[g].checked=!0,this.hasButtonGroup?s[g].shadowRoot.querySelector("button").focus():(s[g].setAttribute("tabindex","0"),s[g].focus()),this.value!==f&&(this.emit("sl-change"),this.emit("sl-input")),a.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(a){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(a)}async syncRadioElements(){var a,i;const s=this.getAllRadios();if(await Promise.all(s.map(async o=>{await o.updateComplete,o.checked=o.value===this.value,o.size=this.size})),this.hasButtonGroup=s.some(o=>o.tagName.toLowerCase()==="sl-radio-button"),s.length>0&&!s.some(o=>o.checked))if(this.hasButtonGroup){const o=(a=s[0].shadowRoot)==null?void 0:a.querySelector("button");o&&o.setAttribute("tabindex","0")}else s[0].setAttribute("tabindex","0");if(this.hasButtonGroup){const o=(i=this.shadowRoot)==null?void 0:i.querySelector("sl-button-group");o&&(o.disableRole=!0)}}syncRadios(){if(customElements.get("sl-radio")&&customElements.get("sl-radio-button")){this.syncRadioElements();return}customElements.get("sl-radio")?this.syncRadioElements():customElements.whenDefined("sl-radio").then(()=>this.syncRadios()),customElements.get("sl-radio-button")?this.syncRadioElements():customElements.whenDefined("sl-radio-button").then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(i=>i.checked=i.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){const a=this.required&&!this.value,i=this.customValidityMessage!=="";return a||i?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){const a=this.validity.valid;return this.errorMessage=this.customValidityMessage||a?"":this.validationInput.validationMessage,this.formControlController.setValidity(a),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),a||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),a}setCustomValidity(a=""){this.customValidityMessage=a,this.errorMessage=a,this.validationInput.setCustomValidity(a),this.formControlController.updateValidity()}focus(a){const i=this.getAllRadios(),s=i.find(f=>f.checked),o=i.find(f=>!f.disabled),d=s||o;d&&d.focus(a)}render(){const a=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),s=this.label?!0:!!a,o=this.helpText?!0:!!i,d=_t`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return _t`
      <fieldset
        part="form-control"
        class=${Wt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--radio-group":!0,"form-control--has-label":s,"form-control--has-help-text":o})}
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

          ${this.hasButtonGroup?_t`
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
    `}};tn.styles=[Jt,Ao,FC];tn.dependencies={"sl-button-group":zo};v([$t("slot:not([name])")],tn.prototype,"defaultSlot",2);v([$t(".radio-group__validation-input")],tn.prototype,"validationInput",2);v([Qt()],tn.prototype,"hasButtonGroup",2);v([Qt()],tn.prototype,"errorMessage",2);v([Qt()],tn.prototype,"defaultValue",2);v([A()],tn.prototype,"label",2);v([A({attribute:"help-text"})],tn.prototype,"helpText",2);v([A()],tn.prototype,"name",2);v([A({reflect:!0})],tn.prototype,"value",2);v([A({reflect:!0})],tn.prototype,"size",2);v([A({reflect:!0})],tn.prototype,"form",2);v([A({type:Boolean,reflect:!0})],tn.prototype,"required",2);v([Dt("size",{waitUntilFirstUpdate:!0})],tn.prototype,"handleSizeChange",1);v([Dt("value")],tn.prototype,"handleValueChange",1);tn.define("sl-radio-group");var YC=Xt`
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
`,ql=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.value=0,this.label=""}updated(a){if(super.updated(a),a.has("value")){const i=parseFloat(getComputedStyle(this.indicator).getPropertyValue("r")),s=2*Math.PI*i,o=s-this.value/100*s;this.indicatorOffset=`${o}px`}}render(){return _t`
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
    `}};ql.styles=[Jt,YC];v([$t(".progress-ring__indicator")],ql.prototype,"indicator",2);v([Qt()],ql.prototype,"indicatorOffset",2);v([A({type:Number,reflect:!0})],ql.prototype,"value",2);v([A()],ql.prototype,"label",2);ql.define("sl-progress-ring");var PC=Xt`
  :host {
    display: inline-block;
  }
`;let tx=null;class ex{}ex.render=function(a,i){tx(a,i)};self.QrCreator=ex;(function(a){function i(x,S,E,N){var _={},T=a(E,S);T.u(x),T.J(),N=N||0;var D=T.h(),R=T.h()+2*N;return _.text=x,_.level=S,_.version=E,_.O=R,_.a=function(W,mt){return W-=N,mt-=N,0>W||W>=D||0>mt||mt>=D?!1:T.a(W,mt)},_}function s(x,S,E,N,_,T,D,R,W,mt){function Ot(ut,St,rt,dt,kt,yt,pt){ut?(x.lineTo(St+yt,rt+pt),x.arcTo(St,rt,dt,kt,T)):x.lineTo(St,rt)}D?x.moveTo(S+T,E):x.moveTo(S,E),Ot(R,N,E,N,_,-T,0),Ot(W,N,_,S,_,0,-T),Ot(mt,S,_,S,E,T,0),Ot(D,S,E,N,E,0,T)}function o(x,S,E,N,_,T,D,R,W,mt){function Ot(ut,St,rt,dt){x.moveTo(ut+rt,St),x.lineTo(ut,St),x.lineTo(ut,St+dt),x.arcTo(ut,St,ut+rt,St,T)}D&&Ot(S,E,T,T),R&&Ot(N,E,-T,T),W&&Ot(N,_,-T,-T),mt&&Ot(S,_,T,-T)}function d(x,S){var E=S.fill;if(typeof E=="string")x.fillStyle=E;else{var N=E.type,_=E.colorStops;if(E=E.position.map(D=>Math.round(D*S.size)),N==="linear-gradient")var T=x.createLinearGradient.apply(x,E);else if(N==="radial-gradient")T=x.createRadialGradient.apply(x,E);else throw Error("Unsupported fill");_.forEach(([D,R])=>{T.addColorStop(D,R)}),x.fillStyle=T}}function f(x,S){t:{var E=S.text,N=S.v,_=S.N,T=S.K,D=S.P;for(_=Math.max(1,_||1),T=Math.min(40,T||40);_<=T;_+=1)try{var R=i(E,N,_,D);break t}catch{}R=void 0}if(!R)return null;for(E=x.getContext("2d"),S.background&&(E.fillStyle=S.background,E.fillRect(S.left,S.top,S.size,S.size)),N=R.O,T=S.size/N,E.beginPath(),D=0;D<N;D+=1)for(_=0;_<N;_+=1){var W=E,mt=S.left+_*T,Ot=S.top+D*T,ut=D,St=_,rt=R.a,dt=mt+T,kt=Ot+T,yt=ut-1,pt=ut+1,it=St-1,ft=St+1,ee=Math.floor(Math.min(.5,Math.max(0,S.R))*T),le=rt(ut,St),pe=rt(yt,it),$e=rt(yt,St);yt=rt(yt,ft);var ge=rt(ut,ft);ft=rt(pt,ft),St=rt(pt,St),pt=rt(pt,it),ut=rt(ut,it),mt=Math.round(mt),Ot=Math.round(Ot),dt=Math.round(dt),kt=Math.round(kt),le?s(W,mt,Ot,dt,kt,ee,!$e&&!ut,!$e&&!ge,!St&&!ge,!St&&!ut):o(W,mt,Ot,dt,kt,ee,$e&&ut&&pe,$e&&ge&&yt,St&&ge&&ft,St&&ut&&pt)}return d(E,S),E.fill(),x}var g={minVersion:1,maxVersion:40,ecLevel:"L",left:0,top:0,size:200,fill:"#000",background:null,text:"no text",radius:.5,quiet:0};tx=function(x,S){var E={};Object.assign(E,g,x),E.N=E.minVersion,E.K=E.maxVersion,E.v=E.ecLevel,E.left=E.left,E.top=E.top,E.size=E.size,E.fill=E.fill,E.background=E.background,E.text=E.text,E.R=E.radius,E.P=E.quiet,S instanceof HTMLCanvasElement?((S.width!==E.size||S.height!==E.size)&&(S.width=E.size,S.height=E.size),S.getContext("2d").clearRect(0,0,S.width,S.height),f(S,E)):(x=document.createElement("canvas"),x.width=E.size,x.height=E.size,E=f(x,E),S.appendChild(E))}})((function(){function a(S){var E=s.s(S);return{S:function(){return 4},b:function(){return E.length},write:function(N){for(var _=0;_<E.length;_+=1)N.put(E[_],8)}}}function i(){var S=[],E=0,N={B:function(){return S},c:function(_){return(S[Math.floor(_/8)]>>>7-_%8&1)==1},put:function(_,T){for(var D=0;D<T;D+=1)N.m((_>>>T-D-1&1)==1)},f:function(){return E},m:function(_){var T=Math.floor(E/8);S.length<=T&&S.push(0),_&&(S[T]|=128>>>E%8),E+=1}};return N}function s(S,E){function N(ut,St){for(var rt=-1;7>=rt;rt+=1)if(!(-1>=ut+rt||R<=ut+rt))for(var dt=-1;7>=dt;dt+=1)-1>=St+dt||R<=St+dt||(D[ut+rt][St+dt]=0<=rt&&6>=rt&&(dt==0||dt==6)||0<=dt&&6>=dt&&(rt==0||rt==6)||2<=rt&&4>=rt&&2<=dt&&4>=dt)}function _(ut,St){for(var rt=R=4*S+17,dt=Array(rt),kt=0;kt<rt;kt+=1){dt[kt]=Array(rt);for(var yt=0;yt<rt;yt+=1)dt[kt][yt]=null}for(D=dt,N(0,0),N(R-7,0),N(0,R-7),rt=f.G(S),dt=0;dt<rt.length;dt+=1)for(kt=0;kt<rt.length;kt+=1){yt=rt[dt];var pt=rt[kt];if(D[yt][pt]==null)for(var it=-2;2>=it;it+=1)for(var ft=-2;2>=ft;ft+=1)D[yt+it][pt+ft]=it==-2||it==2||ft==-2||ft==2||it==0&&ft==0}for(rt=8;rt<R-8;rt+=1)D[rt][6]==null&&(D[rt][6]=rt%2==0);for(rt=8;rt<R-8;rt+=1)D[6][rt]==null&&(D[6][rt]=rt%2==0);for(rt=f.w(T<<3|St),dt=0;15>dt;dt+=1)kt=!ut&&(rt>>dt&1)==1,D[6>dt?dt:8>dt?dt+1:R-15+dt][8]=kt,D[8][8>dt?R-dt-1:9>dt?15-dt:14-dt]=kt;if(D[R-8][8]=!ut,7<=S){for(rt=f.A(S),dt=0;18>dt;dt+=1)kt=!ut&&(rt>>dt&1)==1,D[Math.floor(dt/3)][dt%3+R-8-3]=kt;for(dt=0;18>dt;dt+=1)kt=!ut&&(rt>>dt&1)==1,D[dt%3+R-8-3][Math.floor(dt/3)]=kt}if(W==null){for(ut=x.I(S,T),rt=i(),dt=0;dt<mt.length;dt+=1)kt=mt[dt],rt.put(4,4),rt.put(kt.b(),f.f(4,S)),kt.write(rt);for(dt=kt=0;dt<ut.length;dt+=1)kt+=ut[dt].j;if(rt.f()>8*kt)throw Error("code length overflow. ("+rt.f()+">"+8*kt+")");for(rt.f()+4<=8*kt&&rt.put(0,4);rt.f()%8!=0;)rt.m(!1);for(;!(rt.f()>=8*kt)&&(rt.put(236,8),!(rt.f()>=8*kt));)rt.put(17,8);var ee=0;for(kt=dt=0,yt=Array(ut.length),pt=Array(ut.length),it=0;it<ut.length;it+=1){var le=ut[it].j,pe=ut[it].o-le;for(dt=Math.max(dt,le),kt=Math.max(kt,pe),yt[it]=Array(le),ft=0;ft<yt[it].length;ft+=1)yt[it][ft]=255&rt.B()[ft+ee];for(ee+=le,ft=f.C(pe),le=o(yt[it],ft.b()-1).l(ft),pt[it]=Array(ft.b()-1),ft=0;ft<pt[it].length;ft+=1)pe=ft+le.b()-pt[it].length,pt[it][ft]=0<=pe?le.c(pe):0}for(ft=rt=0;ft<ut.length;ft+=1)rt+=ut[ft].o;for(rt=Array(rt),ft=ee=0;ft<dt;ft+=1)for(it=0;it<ut.length;it+=1)ft<yt[it].length&&(rt[ee]=yt[it][ft],ee+=1);for(ft=0;ft<kt;ft+=1)for(it=0;it<ut.length;it+=1)ft<pt[it].length&&(rt[ee]=pt[it][ft],ee+=1);W=rt}for(ut=W,rt=-1,dt=R-1,kt=7,yt=0,St=f.F(St),pt=R-1;0<pt;pt-=2)for(pt==6&&--pt;;){for(it=0;2>it;it+=1)D[dt][pt-it]==null&&(ft=!1,yt<ut.length&&(ft=(ut[yt]>>>kt&1)==1),St(dt,pt-it)&&(ft=!ft),D[dt][pt-it]=ft,--kt,kt==-1&&(yt+=1,kt=7));if(dt+=rt,0>dt||R<=dt){dt-=rt,rt=-rt;break}}}var T=d[E],D=null,R=0,W=null,mt=[],Ot={u:function(ut){ut=a(ut),mt.push(ut),W=null},a:function(ut,St){if(0>ut||R<=ut||0>St||R<=St)throw Error(ut+","+St);return D[ut][St]},h:function(){return R},J:function(){for(var ut=0,St=0,rt=0;8>rt;rt+=1){_(!0,rt);var dt=f.D(Ot);(rt==0||ut>dt)&&(ut=dt,St=rt)}_(!1,St)}};return Ot}function o(S,E){if(typeof S.length>"u")throw Error(S.length+"/"+E);var N=(function(){for(var T=0;T<S.length&&S[T]==0;)T+=1;for(var D=Array(S.length-T+E),R=0;R<S.length-T;R+=1)D[R]=S[R+T];return D})(),_={c:function(T){return N[T]},b:function(){return N.length},multiply:function(T){for(var D=Array(_.b()+T.b()-1),R=0;R<_.b();R+=1)for(var W=0;W<T.b();W+=1)D[R+W]^=g.i(g.g(_.c(R))+g.g(T.c(W)));return o(D,0)},l:function(T){if(0>_.b()-T.b())return _;for(var D=g.g(_.c(0))-g.g(T.c(0)),R=Array(_.b()),W=0;W<_.b();W+=1)R[W]=_.c(W);for(W=0;W<T.b();W+=1)R[W]^=g.i(g.g(T.c(W))+D);return o(R,0).l(T)}};return _}s.s=function(S){for(var E=[],N=0;N<S.length;N++){var _=S.charCodeAt(N);128>_?E.push(_):2048>_?E.push(192|_>>6,128|_&63):55296>_||57344<=_?E.push(224|_>>12,128|_>>6&63,128|_&63):(N++,_=65536+((_&1023)<<10|S.charCodeAt(N)&1023),E.push(240|_>>18,128|_>>12&63,128|_>>6&63,128|_&63))}return E};var d={L:1,M:0,Q:3,H:2},f=(function(){function S(_){for(var T=0;_!=0;)T+=1,_>>>=1;return T}var E=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],N={w:function(_){for(var T=_<<10;0<=S(T)-S(1335);)T^=1335<<S(T)-S(1335);return(_<<10|T)^21522},A:function(_){for(var T=_<<12;0<=S(T)-S(7973);)T^=7973<<S(T)-S(7973);return _<<12|T},G:function(_){return E[_-1]},F:function(_){switch(_){case 0:return function(T,D){return(T+D)%2==0};case 1:return function(T){return T%2==0};case 2:return function(T,D){return D%3==0};case 3:return function(T,D){return(T+D)%3==0};case 4:return function(T,D){return(Math.floor(T/2)+Math.floor(D/3))%2==0};case 5:return function(T,D){return T*D%2+T*D%3==0};case 6:return function(T,D){return(T*D%2+T*D%3)%2==0};case 7:return function(T,D){return(T*D%3+(T+D)%2)%2==0};default:throw Error("bad maskPattern:"+_)}},C:function(_){for(var T=o([1],0),D=0;D<_;D+=1)T=T.multiply(o([1,g.i(D)],0));return T},f:function(_,T){if(_!=4||1>T||40<T)throw Error("mode: "+_+"; type: "+T);return 10>T?8:16},D:function(_){for(var T=_.h(),D=0,R=0;R<T;R+=1)for(var W=0;W<T;W+=1){for(var mt=0,Ot=_.a(R,W),ut=-1;1>=ut;ut+=1)if(!(0>R+ut||T<=R+ut))for(var St=-1;1>=St;St+=1)0>W+St||T<=W+St||(ut!=0||St!=0)&&Ot==_.a(R+ut,W+St)&&(mt+=1);5<mt&&(D+=3+mt-5)}for(R=0;R<T-1;R+=1)for(W=0;W<T-1;W+=1)mt=0,_.a(R,W)&&(mt+=1),_.a(R+1,W)&&(mt+=1),_.a(R,W+1)&&(mt+=1),_.a(R+1,W+1)&&(mt+=1),(mt==0||mt==4)&&(D+=3);for(R=0;R<T;R+=1)for(W=0;W<T-6;W+=1)_.a(R,W)&&!_.a(R,W+1)&&_.a(R,W+2)&&_.a(R,W+3)&&_.a(R,W+4)&&!_.a(R,W+5)&&_.a(R,W+6)&&(D+=40);for(W=0;W<T;W+=1)for(R=0;R<T-6;R+=1)_.a(R,W)&&!_.a(R+1,W)&&_.a(R+2,W)&&_.a(R+3,W)&&_.a(R+4,W)&&!_.a(R+5,W)&&_.a(R+6,W)&&(D+=40);for(W=mt=0;W<T;W+=1)for(R=0;R<T;R+=1)_.a(R,W)&&(mt+=1);return D+=Math.abs(100*mt/T/T-50)/5*10}};return N})(),g=(function(){for(var S=Array(256),E=Array(256),N=0;8>N;N+=1)S[N]=1<<N;for(N=8;256>N;N+=1)S[N]=S[N-4]^S[N-5]^S[N-6]^S[N-8];for(N=0;255>N;N+=1)E[S[N]]=N;return{g:function(_){if(1>_)throw Error("glog("+_+")");return E[_]},i:function(_){for(;0>_;)_+=255;for(;256<=_;)_-=255;return S[_]}}})(),x=(function(){function S(_,T){switch(T){case d.L:return E[4*(_-1)];case d.M:return E[4*(_-1)+1];case d.Q:return E[4*(_-1)+2];case d.H:return E[4*(_-1)+3]}}var E=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],N={I:function(_,T){var D=S(_,T);if(typeof D>"u")throw Error("bad rs block @ typeNumber:"+_+"/errorCorrectLevel:"+T);_=D.length/3,T=[];for(var R=0;R<_;R+=1)for(var W=D[3*R],mt=D[3*R+1],Ot=D[3*R+2],ut=0;ut<W;ut+=1){var St=Ot,rt={};rt.o=mt,rt.j=St,T.push(rt)}return T}};return N})();return s})());const XC=QrCreator;var Ai=class extends Gt{constructor(){super(...arguments),this.value="",this.label="",this.size=128,this.fill="black",this.background="white",this.radius=0,this.errorCorrection="H"}firstUpdated(){this.generate()}generate(){this.hasUpdated&&XC.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){var a;return _t`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${((a=this.label)==null?void 0:a.length)>0?this.label:this.value}
        style=${_n({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Ai.styles=[Jt,PC];v([$t("canvas")],Ai.prototype,"canvas",2);v([A()],Ai.prototype,"value",2);v([A()],Ai.prototype,"label",2);v([A({type:Number})],Ai.prototype,"size",2);v([A()],Ai.prototype,"fill",2);v([A()],Ai.prototype,"background",2);v([A({type:Number})],Ai.prototype,"radius",2);v([A({attribute:"error-correction"})],Ai.prototype,"errorCorrection",2);v([Dt(["background","errorCorrection","fill","radius","size","value"])],Ai.prototype,"generate",1);Ai.define("sl-qr-code");var QC=Xt`
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
`,er=class extends Gt{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size="medium",this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.addEventListener("blur",this.handleBlur),this.addEventListener("click",this.handleClick),this.addEventListener("focus",this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return _t`
      <span
        part="base"
        class=${Wt({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size==="small","radio--medium":this.size==="medium","radio--large":this.size==="large"})}
      >
        <span part="${`control${this.checked?" control--checked":""}`}" class="radio__control">
          ${this.checked?_t` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:""}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};er.styles=[Jt,QC];er.dependencies={"sl-icon":Ue};v([Qt()],er.prototype,"checked",2);v([Qt()],er.prototype,"hasFocus",2);v([A()],er.prototype,"value",2);v([A({reflect:!0})],er.prototype,"size",2);v([A({type:Boolean,reflect:!0})],er.prototype,"disabled",2);v([Dt("checked")],er.prototype,"handleCheckedChange",1);v([Dt("disabled",{waitUntilFirstUpdate:!0})],er.prototype,"handleDisabledChange",1);er.define("sl-radio");var ZC=Xt`
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
`,ci=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.setAttribute("aria-selected","false")}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined("sl-select").then(()=>{const a=this.closest("sl-select");a&&a.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleSelectedChange(){this.setAttribute("aria-selected",this.selected?"true":"false")}handleValueChange(){typeof this.value!="string"&&(this.value=String(this.value)),this.value.includes(" ")&&(console.error("Option values cannot include a space. All spaces have been replaced with underscores.",this),this.value=this.value.replace(/ /g,"_"))}getTextLabel(){const a=this.childNodes;let i="";return[...a].forEach(s=>{s.nodeType===Node.ELEMENT_NODE&&(s.hasAttribute("slot")||(i+=s.textContent)),s.nodeType===Node.TEXT_NODE&&(i+=s.textContent)}),i.trim()}render(){return _t`
      <div
        part="base"
        class=${Wt({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};ci.styles=[Jt,ZC];ci.dependencies={"sl-icon":Ue};v([$t(".option__label")],ci.prototype,"defaultSlot",2);v([Qt()],ci.prototype,"current",2);v([Qt()],ci.prototype,"selected",2);v([Qt()],ci.prototype,"hasHover",2);v([A({reflect:!0})],ci.prototype,"value",2);v([A({type:Boolean,reflect:!0})],ci.prototype,"disabled",2);v([Dt("disabled")],ci.prototype,"handleDisabledChange",1);v([Dt("selected")],ci.prototype,"handleSelectedChange",1);v([Dt("value")],ci.prototype,"handleValueChange",1);ci.define("sl-option");Re.define("sl-popup");var WC=Xt`
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
`,Au=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.value=0,this.indeterminate=!1,this.label=""}render(){return _t`
      <div
        part="base"
        class=${Wt({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()==="rtl"})}
        role="progressbar"
        title=${Ft(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${_n({width:`${this.value}%`})}>
          ${this.indeterminate?"":_t` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Au.styles=[Jt,WC];v([A({type:Number,reflect:!0})],Au.prototype,"value",2);v([A({type:Boolean,reflect:!0})],Au.prototype,"indeterminate",2);v([A()],Au.prototype,"label",2);Au.define("sl-progress-bar");var JC=Xt`
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
`,ax=class extends Gt{render(){return _t` <slot part="base" class="menu-label"></slot> `}};ax.styles=[Jt,JC];ax.define("sl-menu-label");var t5=Xt`
  :host {
    display: contents;
  }
`,ar=class extends Gt{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=a=>{this.emit("sl-mutation",{detail:{mutationList:a}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){const a=typeof this.attr=="string"&&this.attr.length>0,i=a&&this.attr!=="*"?this.attr.split(" "):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:a,attributeFilter:i,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return _t` <slot></slot> `}};ar.styles=[Jt,t5];v([A({reflect:!0})],ar.prototype,"attr",2);v([A({attribute:"attr-old-value",type:Boolean,reflect:!0})],ar.prototype,"attrOldValue",2);v([A({attribute:"char-data",type:Boolean,reflect:!0})],ar.prototype,"charData",2);v([A({attribute:"char-data-old-value",type:Boolean,reflect:!0})],ar.prototype,"charDataOldValue",2);v([A({attribute:"child-list",type:Boolean,reflect:!0})],ar.prototype,"childList",2);v([A({type:Boolean,reflect:!0})],ar.prototype,"disabled",2);v([Dt("disabled")],ar.prototype,"handleDisabledChange",1);v([Dt("attr",{waitUntilFirstUpdate:!0}),Dt("attr-old-value",{waitUntilFirstUpdate:!0}),Dt("char-data",{waitUntilFirstUpdate:!0}),Dt("char-data-old-value",{waitUntilFirstUpdate:!0}),Dt("childList",{waitUntilFirstUpdate:!0})],ar.prototype,"handleChange",1);ar.define("sl-mutation-observer");var e5=Xt`
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
`,me=class extends Gt{constructor(){super(...arguments),this.formControlController=new Vr(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new mn(this,"help-text","label"),this.localize=new ze(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var a;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((a=this.input)==null?void 0:a.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(a){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=a,this.value=this.__dateInput.value}get valueAsNumber(){var a;return this.__numberInput.value=this.value,((a=this.input)==null?void 0:a.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(a){this.__numberInput.valueAsNumber=a,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(a){a.preventDefault(),this.value!==""&&(this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(a){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(a)}handleKeyDown(a){const i=a.metaKey||a.ctrlKey||a.shiftKey||a.altKey;a.key==="Enter"&&!i&&setTimeout(()=>{!a.defaultPrevented&&!a.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(a){this.input.focus(a)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(a,i,s="none"){this.input.setSelectionRange(a,i,s)}setRangeText(a,i,s,o="preserve"){const d=i??this.input.selectionStart,f=s??this.input.selectionEnd;this.input.setRangeText(a,d,f,o),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(a){this.input.setCustomValidity(a),this.formControlController.updateValidity()}render(){const a=this.hasSlotController.test("label"),i=this.hasSlotController.test("help-text"),s=this.label?!0:!!a,o=this.helpText?!0:!!i,f=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return _t`
      <div
        part="form-control"
        class=${Wt({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":s,"form-control--has-help-text":o})}
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
            class=${Wt({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${Ft(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${Ft(this.placeholder)}
              minlength=${Ft(this.minlength)}
              maxlength=${Ft(this.maxlength)}
              min=${Ft(this.min)}
              max=${Ft(this.max)}
              step=${Ft(this.step)}
              .value=${_o(this.value)}
              autocapitalize=${Ft(this.autocapitalize)}
              autocomplete=${Ft(this.autocomplete)}
              autocorrect=${Ft(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${Ft(this.pattern)}
              enterkeyhint=${Ft(this.enterkeyhint)}
              inputmode=${Ft(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${f?_t`
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
            ${this.passwordToggle&&!this.disabled?_t`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?_t`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:_t`
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
    `}};me.styles=[Jt,Ao,e5];me.dependencies={"sl-icon":Ue};v([$t(".input__control")],me.prototype,"input",2);v([Qt()],me.prototype,"hasFocus",2);v([A()],me.prototype,"title",2);v([A({reflect:!0})],me.prototype,"type",2);v([A()],me.prototype,"name",2);v([A()],me.prototype,"value",2);v([Bl()],me.prototype,"defaultValue",2);v([A({reflect:!0})],me.prototype,"size",2);v([A({type:Boolean,reflect:!0})],me.prototype,"filled",2);v([A({type:Boolean,reflect:!0})],me.prototype,"pill",2);v([A()],me.prototype,"label",2);v([A({attribute:"help-text"})],me.prototype,"helpText",2);v([A({type:Boolean})],me.prototype,"clearable",2);v([A({type:Boolean,reflect:!0})],me.prototype,"disabled",2);v([A()],me.prototype,"placeholder",2);v([A({type:Boolean,reflect:!0})],me.prototype,"readonly",2);v([A({attribute:"password-toggle",type:Boolean})],me.prototype,"passwordToggle",2);v([A({attribute:"password-visible",type:Boolean})],me.prototype,"passwordVisible",2);v([A({attribute:"no-spin-buttons",type:Boolean})],me.prototype,"noSpinButtons",2);v([A({reflect:!0})],me.prototype,"form",2);v([A({type:Boolean,reflect:!0})],me.prototype,"required",2);v([A()],me.prototype,"pattern",2);v([A({type:Number})],me.prototype,"minlength",2);v([A({type:Number})],me.prototype,"maxlength",2);v([A()],me.prototype,"min",2);v([A()],me.prototype,"max",2);v([A()],me.prototype,"step",2);v([A()],me.prototype,"autocapitalize",2);v([A()],me.prototype,"autocorrect",2);v([A()],me.prototype,"autocomplete",2);v([A({type:Boolean})],me.prototype,"autofocus",2);v([A()],me.prototype,"enterkeyhint",2);v([A({type:Boolean,converter:{fromAttribute:a=>!(!a||a==="false"),toAttribute:a=>a?"true":"false"}})],me.prototype,"spellcheck",2);v([A()],me.prototype,"inputmode",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],me.prototype,"handleDisabledChange",1);v([Dt("step",{waitUntilFirstUpdate:!0})],me.prototype,"handleStepChange",1);v([Dt("value",{waitUntilFirstUpdate:!0})],me.prototype,"handleValueChange",1);me.define("sl-input");var a5=Xt`
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
`,hg=class extends Gt{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(a){const i=["menuitem","menuitemcheckbox"],s=a.composedPath(),o=s.find(x=>{var S;return i.includes(((S=x==null?void 0:x.getAttribute)==null?void 0:S.call(x,"role"))||"")});if(!o||s.find(x=>{var S;return((S=x==null?void 0:x.getAttribute)==null?void 0:S.call(x,"role"))==="menu"})!==this)return;const g=o;g.type==="checkbox"&&(g.checked=!g.checked),this.emit("sl-select",{detail:{item:g}})}handleKeyDown(a){if(a.key==="Enter"||a.key===" "){const i=this.getCurrentItem();a.preventDefault(),a.stopPropagation(),i==null||i.click()}else if(["ArrowDown","ArrowUp","Home","End"].includes(a.key)){const i=this.getAllItems(),s=this.getCurrentItem();let o=s?i.indexOf(s):0;i.length>0&&(a.preventDefault(),a.stopPropagation(),a.key==="ArrowDown"?o++:a.key==="ArrowUp"?o--:a.key==="Home"?o=0:a.key==="End"&&(o=i.length-1),o<0&&(o=i.length-1),o>i.length-1&&(o=0),this.setCurrentItem(i[o]),i[o].focus())}}handleMouseDown(a){const i=a.target;this.isMenuItem(i)&&this.setCurrentItem(i)}handleSlotChange(){const a=this.getAllItems();a.length>0&&this.setCurrentItem(a[0])}isMenuItem(a){var i;return a.tagName.toLowerCase()==="sl-menu-item"||["menuitem","menuitemcheckbox","menuitemradio"].includes((i=a.getAttribute("role"))!=null?i:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(a=>!(a.inert||!this.isMenuItem(a)))}getCurrentItem(){return this.getAllItems().find(a=>a.getAttribute("tabindex")==="0")}setCurrentItem(a){this.getAllItems().forEach(s=>{s.setAttribute("tabindex",s===a?"0":"-1")})}render(){return _t`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};hg.styles=[Jt,a5];v([$t("slot")],hg.prototype,"defaultSlot",2);hg.define("sl-menu");var n5=Xt`
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
 */const uu=(a,i)=>{var o;const s=a._$AN;if(s===void 0)return!1;for(const d of s)(o=d._$AO)==null||o.call(d,i,!1),uu(d,i);return!0},Sh=a=>{let i,s;do{if((i=a._$AM)===void 0)break;s=i._$AN,s.delete(a),a=i}while((s==null?void 0:s.size)===0)},nx=a=>{for(let i;i=a._$AM;a=i){let s=i._$AN;if(s===void 0)i._$AN=s=new Set;else if(s.has(a))break;s.add(a),s5(i)}};function i5(a){this._$AN!==void 0?(Sh(this),this._$AM=a,nx(this)):this._$AM=a}function r5(a,i=!1,s=0){const o=this._$AH,d=this._$AN;if(d!==void 0&&d.size!==0)if(i)if(Array.isArray(o))for(let f=s;f<o.length;f++)uu(o[f],!1),Sh(o[f]);else o!=null&&(uu(o,!1),Sh(o));else uu(this,a)}const s5=a=>{a.type==Zi.CHILD&&(a._$AP??(a._$AP=r5),a._$AQ??(a._$AQ=i5))};class o5 extends _u{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,s,o){super._$AT(i,s,o),nx(this),this.isConnected=i._$AU}_$AO(i,s=!0){var o,d;i!==this.isConnected&&(this.isConnected=i,i?(o=this.reconnected)==null||o.call(this):(d=this.disconnected)==null||d.call(this)),s&&(uu(this,i),Sh(this))}setValue(i){if(j1(this._$Ct))this._$Ct._$AI(i,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=i,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l5=()=>new c5;class c5{}const Sm=new WeakMap,u5=wu(class extends o5{render(a){return We}update(a,[i]){var o;const s=i!==this.G;return s&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=i,this.ht=(o=a.options)==null?void 0:o.host,this.rt(this.ct=a.element)),We}rt(a){if(this.G!==void 0)if(this.isConnected||(a=void 0),typeof this.G=="function"){const i=this.ht??globalThis;let s=Sm.get(i);s===void 0&&(s=new WeakMap,Sm.set(i,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,a),a!==void 0&&this.G.call(this.ht,a)}else this.G.value=a}get lt(){var a,i;return typeof this.G=="function"?(a=Sm.get(this.ht??globalThis))==null?void 0:a.get(this.G):(i=this.G)==null?void 0:i.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var d5=class{constructor(a,i){this.popupRef=l5(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=s=>{this.host.style.setProperty("--safe-triangle-cursor-x",`${s.clientX}px`),this.host.style.setProperty("--safe-triangle-cursor-y",`${s.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test("submenu")&&this.enableSubmenu()},this.handleKeyDown=s=>{switch(s.key){case"Escape":case"Tab":this.disableSubmenu();break;case"ArrowLeft":s.target!==this.host&&(s.preventDefault(),s.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case"ArrowRight":case"Enter":case" ":this.handleSubmenuEntry(s);break}},this.handleClick=s=>{var o;s.target===this.host?(s.preventDefault(),s.stopPropagation()):s.target instanceof Element&&(s.target.tagName==="sl-menu-item"||(o=s.target.role)!=null&&o.startsWith("menuitem"))&&this.disableSubmenu()},this.handleFocusOut=s=>{s.relatedTarget&&s.relatedTarget instanceof Element&&this.host.contains(s.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=s=>{s.stopPropagation()},this.handlePopupReposition=()=>{const s=this.host.renderRoot.querySelector("slot[name='submenu']"),o=s==null?void 0:s.assignedElements({flatten:!0}).filter(E=>E.localName==="sl-menu")[0],d=getComputedStyle(this.host).direction==="rtl";if(!o)return;const{left:f,top:g,width:x,height:S}=o.getBoundingClientRect();this.host.style.setProperty("--safe-triangle-submenu-start-x",`${d?f+x:f}px`),this.host.style.setProperty("--safe-triangle-submenu-start-y",`${g}px`),this.host.style.setProperty("--safe-triangle-submenu-end-x",`${d?f+x:f}px`),this.host.style.setProperty("--safe-triangle-submenu-end-y",`${g+S}px`)},(this.host=a).addController(this),this.hasSlotController=i}hostConnected(){this.hasSlotController.test("submenu")&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test("submenu")&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||(this.host.addEventListener("mousemove",this.handleMouseMove),this.host.addEventListener("mouseover",this.handleMouseOver),this.host.addEventListener("keydown",this.handleKeyDown),this.host.addEventListener("click",this.handleClick),this.host.addEventListener("focusout",this.handleFocusOut),this.isConnected=!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.addEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&(this.host.removeEventListener("mousemove",this.handleMouseMove),this.host.removeEventListener("mouseover",this.handleMouseOver),this.host.removeEventListener("keydown",this.handleKeyDown),this.host.removeEventListener("click",this.handleClick),this.host.removeEventListener("focusout",this.handleFocusOut),this.isConnected=!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener("mouseover",this.handlePopupMouseover),this.popupRef.value.removeEventListener("sl-reposition",this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(a){const i=this.host.renderRoot.querySelector("slot[name='submenu']");if(!i){console.error("Cannot activate a submenu if no corresponding menuitem can be found.",this);return}let s=null;for(const o of i.assignedElements())if(s=o.querySelectorAll("sl-menu-item, [role^='menuitem']"),s.length!==0)break;if(!(!s||s.length===0)){s[0].setAttribute("tabindex","0");for(let o=1;o!==s.length;++o)s[o].setAttribute("tabindex","-1");this.popupRef.value&&(a.preventDefault(),a.stopPropagation(),this.popupRef.value.active?s[0]instanceof HTMLElement&&s[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{s[0]instanceof HTMLElement&&s[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(a){this.popupRef.value&&this.popupRef.value.active!==a&&(this.popupRef.value.active=a,this.host.requestUpdate())}enableSubmenu(a=!0){a?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){var a;if(!((a=this.host.parentElement)!=null&&a.computedStyleMap))return;const i=this.host.parentElement.computedStyleMap(),o=["padding-top","border-top-width","margin-top"].reduce((d,f)=>{var g;const x=(g=i.get(f))!=null?g:new CSSUnitValue(0,"px"),E=(x instanceof CSSUnitValue?x:new CSSUnitValue(0,"px")).to("px");return d-E.value},0);this.skidding=o}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){const a=getComputedStyle(this.host).direction==="rtl";return this.isConnected?_t`
      <sl-popup
        ${u5(this.popupRef)}
        placement=${a?"left-start":"right-start"}
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
    `:_t` <slot name="submenu" hidden></slot> `}},qn=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.type="normal",this.checked=!1,this.value="",this.loading=!1,this.disabled=!1,this.hasSlotController=new mn(this,"submenu"),this.submenuController=new d5(this,this.hasSlotController),this.handleHostClick=a=>{this.disabled&&(a.preventDefault(),a.stopImmediatePropagation())},this.handleMouseOver=a=>{this.focus(),a.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleHostClick),this.addEventListener("mouseover",this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick),this.removeEventListener("mouseover",this.handleMouseOver)}handleDefaultSlotChange(){const a=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=a;return}a!==this.cachedTextLabel&&(this.cachedTextLabel=a,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!=="checkbox"){this.checked=!1,console.error('The checked attribute can only be used on menu items with type="checkbox"',this);return}this.type==="checkbox"?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){this.type==="checkbox"?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return xk(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test("submenu")}render(){const a=this.localize.dir()==="rtl",i=this.submenuController.isExpanded();return _t`
      <div
        id="anchor"
        part="base"
        class=${Wt({"menu-item":!0,"menu-item--rtl":a,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":i})}
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
          <sl-icon name=${a?"chevron-left":"chevron-right"} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?_t` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:""}
      </div>
    `}};qn.styles=[Jt,n5];qn.dependencies={"sl-icon":Ue,"sl-popup":Re,"sl-spinner":Su};v([$t("slot:not([name])")],qn.prototype,"defaultSlot",2);v([$t(".menu-item")],qn.prototype,"menuItem",2);v([A()],qn.prototype,"type",2);v([A({type:Boolean,reflect:!0})],qn.prototype,"checked",2);v([A()],qn.prototype,"value",2);v([A({type:Boolean,reflect:!0})],qn.prototype,"loading",2);v([A({type:Boolean,reflect:!0})],qn.prototype,"disabled",2);v([Dt("checked")],qn.prototype,"handleCheckedChange",1);v([Dt("disabled")],qn.prototype,"handleDisabledChange",1);v([Dt("type")],qn.prototype,"handleTypeChange",1);qn.define("sl-menu-item");var h5=Xt`
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
`,No=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.position=50}handleDrag(a){const{width:i}=this.base.getBoundingClientRect(),s=this.localize.dir()==="rtl";a.preventDefault(),cu(this.base,{onMove:o=>{this.position=parseFloat(Ta(o/i*100,0,100).toFixed(2)),s&&(this.position=100-this.position)},initialEvent:a})}handleKeyDown(a){const i=this.localize.dir()==="ltr",s=this.localize.dir()==="rtl";if(["ArrowLeft","ArrowRight","Home","End"].includes(a.key)){const o=a.shiftKey?10:1;let d=this.position;a.preventDefault(),(i&&a.key==="ArrowLeft"||s&&a.key==="ArrowRight")&&(d-=o),(i&&a.key==="ArrowRight"||s&&a.key==="ArrowLeft")&&(d+=o),a.key==="Home"&&(d=0),a.key==="End"&&(d=100),d=Ta(d,0,100),this.position=d}}handlePositionChange(){this.emit("sl-change")}render(){const a=this.localize.dir()==="rtl";return _t`
      <div
        part="base"
        id="image-comparer"
        class=${Wt({"image-comparer":!0,"image-comparer--rtl":a})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${_n({clipPath:a?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${_n({left:a?`${100-this.position}%`:`${this.position}%`})}
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
    `}};No.styles=[Jt,h5];No.scopedElement={"sl-icon":Ue};v([$t(".image-comparer")],No.prototype,"base",2);v([$t(".image-comparer__handle")],No.prototype,"handle",2);v([A({type:Number,reflect:!0})],No.prototype,"position",2);v([Dt("position",{waitUntilFirstUpdate:!0})],No.prototype,"handlePositionChange",1);No.define("sl-image-comparer");var f5=Xt`
  :host {
    display: block;
  }
`,km=new Map;function p5(a,i="cors"){const s=km.get(a);if(s!==void 0)return Promise.resolve(s);const o=fetch(a,{mode:i}).then(async d=>{const f={ok:d.ok,status:d.status,html:await d.text()};return km.set(a,f),f});return km.set(a,o),o}var Il=class extends Gt{constructor(){super(...arguments),this.mode="cors",this.allowScripts=!1}executeScript(a){const i=document.createElement("script");[...a.attributes].forEach(s=>i.setAttribute(s.name,s.value)),i.textContent=a.textContent,a.parentNode.replaceChild(i,a)}async handleSrcChange(){try{const a=this.src,i=await p5(a,this.mode);if(a!==this.src)return;if(!i.ok){this.emit("sl-error",{detail:{status:i.status}});return}this.innerHTML=i.html,this.allowScripts&&[...this.querySelectorAll("script")].forEach(s=>this.executeScript(s)),this.emit("sl-load")}catch{this.emit("sl-error",{detail:{status:-1}})}}render(){return _t`<slot></slot>`}};Il.styles=[Jt,f5];v([A()],Il.prototype,"src",2);v([A()],Il.prototype,"mode",2);v([A({attribute:"allow-scripts",type:Boolean})],Il.prototype,"allowScripts",2);v([Dt("src")],Il.prototype,"handleSrcChange",1);Il.define("sl-include");Ue.define("sl-icon");Ra.define("sl-icon-button");var $h=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.value=0,this.unit="byte",this.display="short"}render(){if(isNaN(this.value))return"";const a=["","kilo","mega","giga","tera"],i=["","kilo","mega","giga","tera","peta"],s=this.unit==="bit"?a:i,o=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),s.length-1)),d=s[o]+this.unit,f=parseFloat((this.value/Math.pow(1e3,o)).toPrecision(3));return this.localize.number(f,{style:"unit",unit:d,unitDisplay:this.display})}};v([A({type:Number})],$h.prototype,"value",2);v([A()],$h.prototype,"unit",2);v([A()],$h.prototype,"display",2);$h.define("sl-format-bytes");var In=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.date=new Date,this.hourFormat="auto"}render(){const a=new Date(this.date),i=this.hourFormat==="auto"?void 0:this.hourFormat==="12";if(!isNaN(a.getMilliseconds()))return _t`
      <time datetime=${a.toISOString()}>
        ${this.localize.date(a,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:i})}
      </time>
    `}};v([A()],In.prototype,"date",2);v([A()],In.prototype,"weekday",2);v([A()],In.prototype,"era",2);v([A()],In.prototype,"year",2);v([A()],In.prototype,"month",2);v([A()],In.prototype,"day",2);v([A()],In.prototype,"hour",2);v([A()],In.prototype,"minute",2);v([A()],In.prototype,"second",2);v([A({attribute:"time-zone-name"})],In.prototype,"timeZoneName",2);v([A({attribute:"time-zone"})],In.prototype,"timeZone",2);v([A({attribute:"hour-format"})],In.prototype,"hourFormat",2);In.define("sl-format-date");var Ei=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.value=0,this.type="decimal",this.noGrouping=!1,this.currency="USD",this.currencyDisplay="symbol"}render(){return isNaN(this.value)?"":this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};v([A({type:Number})],Ei.prototype,"value",2);v([A()],Ei.prototype,"type",2);v([A({attribute:"no-grouping",type:Boolean})],Ei.prototype,"noGrouping",2);v([A()],Ei.prototype,"currency",2);v([A({attribute:"currency-display"})],Ei.prototype,"currencyDisplay",2);v([A({attribute:"minimum-integer-digits",type:Number})],Ei.prototype,"minimumIntegerDigits",2);v([A({attribute:"minimum-fraction-digits",type:Number})],Ei.prototype,"minimumFractionDigits",2);v([A({attribute:"maximum-fraction-digits",type:Number})],Ei.prototype,"maximumFractionDigits",2);v([A({attribute:"minimum-significant-digits",type:Number})],Ei.prototype,"minimumSignificantDigits",2);v([A({attribute:"maximum-significant-digits",type:Number})],Ei.prototype,"maximumSignificantDigits",2);Ei.define("sl-format-number");var m5=Xt`
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
`,Lh=class extends Gt{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","separator")}handleVerticalChange(){this.setAttribute("aria-orientation",this.vertical?"vertical":"horizontal")}};Lh.styles=[Jt,m5];v([A({type:Boolean,reflect:!0})],Lh.prototype,"vertical",2);v([Dt("vertical")],Lh.prototype,"handleVerticalChange",1);Lh.define("sl-divider");var g5=Xt`
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
`;function*fg(a=document.activeElement){a!=null&&(yield a,"shadowRoot"in a&&a.shadowRoot&&a.shadowRoot.mode!=="closed"&&(yield*xS(fg(a.shadowRoot.activeElement))))}function ix(){return[...fg()].pop()}var Iy=new WeakMap;function rx(a){let i=Iy.get(a);return i||(i=window.getComputedStyle(a,null),Iy.set(a,i)),i}function v5(a){if(typeof a.checkVisibility=="function")return a.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const i=rx(a);return i.visibility!=="hidden"&&i.display!=="none"}function b5(a){const i=rx(a),{overflowY:s,overflowX:o}=i;return s==="scroll"||o==="scroll"?!0:s!=="auto"||o!=="auto"?!1:a.scrollHeight>a.clientHeight&&s==="auto"||a.scrollWidth>a.clientWidth&&o==="auto"}function y5(a){const i=a.tagName.toLowerCase(),s=Number(a.getAttribute("tabindex"));if(a.hasAttribute("tabindex")&&(isNaN(s)||s<=-1)||a.hasAttribute("disabled")||a.closest("[inert]"))return!1;if(i==="input"&&a.getAttribute("type")==="radio"){const f=a.getRootNode(),g=`input[type='radio'][name="${a.getAttribute("name")}"]`,x=f.querySelector(`${g}:checked`);return x?x===a:f.querySelector(g)===a}return v5(a)?(i==="audio"||i==="video")&&a.hasAttribute("controls")||a.hasAttribute("tabindex")||a.hasAttribute("contenteditable")&&a.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(i)?!0:b5(a):!1}function x5(a){var i,s;const o=Fm(a),d=(i=o[0])!=null?i:null,f=(s=o[o.length-1])!=null?s:null;return{start:d,end:f}}function w5(a,i){var s;return((s=a.getRootNode({composed:!0}))==null?void 0:s.host)!==i}function Fm(a){const i=new WeakMap,s=[];function o(d){if(d instanceof Element){if(d.hasAttribute("inert")||d.closest("[inert]")||i.has(d))return;i.set(d,!0),!s.includes(d)&&y5(d)&&s.push(d),d instanceof HTMLSlotElement&&w5(d,a)&&d.assignedElements({flatten:!0}).forEach(f=>{o(f)}),d.shadowRoot!==null&&d.shadowRoot.mode==="open"&&o(d.shadowRoot)}for(const f of d.children)o(f)}return o(a),s.sort((d,f)=>{const g=Number(d.getAttribute("tabindex"))||0;return(Number(f.getAttribute("tabindex"))||0)-g})}var Wc=[],sx=class{constructor(a){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=i=>{var s;if(i.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const o=ix();if(this.previousFocus=o,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;i.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const d=Fm(this.element);let f=d.findIndex(x=>x===o);this.previousFocus=this.currentFocus;const g=this.tabDirection==="forward"?1:-1;for(;;){f+g>=d.length?f=0:f+g<0?f=d.length-1:f+=g,this.previousFocus=this.currentFocus;const x=d[f];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||x&&this.possiblyHasTabbableChildren(x))return;i.preventDefault(),this.currentFocus=x,(s=this.currentFocus)==null||s.focus({preventScroll:!1});const S=[...fg()];if(S.includes(this.currentFocus)||!S.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=a,this.elementsWithTabbableControls=["iframe"]}activate(){Wc.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Wc=Wc.filter(a=>a!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Wc[Wc.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const a=Fm(this.element);if(!this.element.matches(":focus-within")){const i=a[0],s=a[a.length-1],o=this.tabDirection==="forward"?i:s;typeof(o==null?void 0:o.focus)=="function"&&(this.currentFocus=o,o.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(a){return this.elementsWithTabbableControls.includes(a.tagName.toLowerCase())||a.hasAttribute("controls")}},pg=a=>{var i;const{activeElement:s}=document;s&&a.contains(s)&&((i=document.activeElement)==null||i.blur())};function Ky(a){return a.charAt(0).toUpperCase()+a.slice(1)}var Kn=class extends Gt{constructor(){super(...arguments),this.hasSlotController=new mn(this,"footer"),this.localize=new ze(this),this.modal=new sx(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=a=>{this.contained||a.key==="Escape"&&this.modal.isActive()&&this.open&&(a.stopImmediatePropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),ou(this)))}disconnectedCallback(){super.disconnectedCallback(),lu(this),this.removeOpenListeners()}requestClose(a){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:a}}).defaultPrevented){const s=Je(this,"drawer.denyClose",{dir:this.localize.dir()});ha(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var a;"CloseWatcher"in window?((a=this.closeWatcher)==null||a.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard"))):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var a;document.removeEventListener("keydown",this.handleDocumentKeyDown),(a=this.closeWatcher)==null||a.destroy()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),ou(this));const a=this.querySelector("[autofocus]");a&&a.removeAttribute("autofocus"),await Promise.all([za(this.drawer),za(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(a?a.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),a&&a.setAttribute("autofocus","")});const i=Je(this,`drawer.show${Ky(this.placement)}`,{dir:this.localize.dir()}),s=Je(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([ha(this.panel,i.keyframes,i.options),ha(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{pg(this),this.emit("sl-hide"),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),lu(this)),await Promise.all([za(this.drawer),za(this.overlay)]);const a=Je(this,`drawer.hide${Ky(this.placement)}`,{dir:this.localize.dir()}),i=Je(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([ha(this.overlay,i.keyframes,i.options).then(()=>{this.overlay.hidden=!0}),ha(this.panel,a.keyframes,a.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const s=this.originalTrigger;typeof(s==null?void 0:s.focus)=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),ou(this)),this.open&&this.contained&&(this.modal.deactivate(),lu(this))}async show(){if(!this.open)return this.open=!0,fn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,fn(this,"sl-after-hide")}render(){return _t`
      <div
        part="base"
        class=${Wt({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Ft(this.noHeader?this.label:void 0)}
          aria-labelledby=${Ft(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":_t`
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
    `}};Kn.styles=[Jt,g5];Kn.dependencies={"sl-icon-button":Ra};v([$t(".drawer")],Kn.prototype,"drawer",2);v([$t(".drawer__panel")],Kn.prototype,"panel",2);v([$t(".drawer__overlay")],Kn.prototype,"overlay",2);v([A({type:Boolean,reflect:!0})],Kn.prototype,"open",2);v([A({reflect:!0})],Kn.prototype,"label",2);v([A({reflect:!0})],Kn.prototype,"placement",2);v([A({type:Boolean,reflect:!0})],Kn.prototype,"contained",2);v([A({attribute:"no-header",type:Boolean,reflect:!0})],Kn.prototype,"noHeader",2);v([Dt("open",{waitUntilFirstUpdate:!0})],Kn.prototype,"handleOpenChange",1);v([Dt("contained",{waitUntilFirstUpdate:!0})],Kn.prototype,"handleNoModalChange",1);De("drawer.showTop",{keyframes:[{opacity:0,translate:"0 -100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});De("drawer.hideTop",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 -100%"}],options:{duration:250,easing:"ease"}});De("drawer.showEnd",{keyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});De("drawer.hideEnd",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],options:{duration:250,easing:"ease"}});De("drawer.showBottom",{keyframes:[{opacity:0,translate:"0 100%"},{opacity:1,translate:"0 0"}],options:{duration:250,easing:"ease"}});De("drawer.hideBottom",{keyframes:[{opacity:1,translate:"0 0"},{opacity:0,translate:"0 100%"}],options:{duration:250,easing:"ease"}});De("drawer.showStart",{keyframes:[{opacity:0,translate:"-100%"},{opacity:1,translate:"0"}],rtlKeyframes:[{opacity:0,translate:"100%"},{opacity:1,translate:"0"}],options:{duration:250,easing:"ease"}});De("drawer.hideStart",{keyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"-100%"}],rtlKeyframes:[{opacity:1,translate:"0"},{opacity:0,translate:"100%"}],options:{duration:250,easing:"ease"}});De("drawer.denyClose",{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}});De("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});De("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});Kn.define("sl-drawer");var _5=Xt`
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
`,en=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=a=>{this.open&&a.key==="Escape"&&(a.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=a=>{var i;if(a.key==="Escape"&&this.open&&!this.closeWatcher){a.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(a.key==="Tab"){if(this.open&&((i=document.activeElement)==null?void 0:i.tagName.toLowerCase())==="sl-menu-item"){a.preventDefault(),this.hide(),this.focusOnTrigger();return}const s=(o,d)=>{if(!o)return null;const f=o.closest(d);if(f)return f;const g=o.getRootNode();return g instanceof ShadowRoot?s(g.host,d):null};setTimeout(()=>{var o;const d=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?ix():document.activeElement;(!this.containingElement||s(d,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=a=>{const i=a.composedPath();this.containingElement&&!i.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=a=>{const i=a.target;!this.stayOpenOnSelect&&i.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const a=this.trigger.assignedElements({flatten:!0})[0];typeof(a==null?void 0:a.focus)=="function"&&a.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(a=>a.tagName.toLowerCase()==="sl-menu")}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(a){if([" ","Enter"].includes(a.key)){a.preventDefault(),this.handleTriggerClick();return}const i=this.getMenu();if(i){const s=i.getAllItems(),o=s[0],d=s[s.length-1];["ArrowDown","ArrowUp","Home","End"].includes(a.key)&&(a.preventDefault(),this.open||(this.show(),await this.updateComplete),s.length>0&&this.updateComplete.then(()=>{(a.key==="ArrowDown"||a.key==="Home")&&(i.setCurrentItem(o),o.focus()),(a.key==="ArrowUp"||a.key==="End")&&(i.setCurrentItem(d),d.focus())}))}}handleTriggerKeyUp(a){a.key===" "&&a.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const i=this.trigger.assignedElements({flatten:!0}).find(o=>x5(o).start);let s;if(i){switch(i.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":s=i.button;break;default:s=i}s.setAttribute("aria-haspopup","true"),s.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,fn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,fn(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){var a;this.panel.addEventListener("sl-select",this.handlePanelSelect),"CloseWatcher"in window?((a=this.closeWatcher)==null||a.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var a;this.panel&&(this.panel.removeEventListener("sl-select",this.handlePanelSelect),this.panel.removeEventListener("keydown",this.handleKeyDown)),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown),(a=this.closeWatcher)==null||a.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await za(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:a,options:i}=Je(this,"dropdown.show",{dir:this.localize.dir()});await ha(this.popup.popup,a,i),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await za(this);const{keyframes:a,options:i}=Je(this,"dropdown.hide",{dir:this.localize.dir()});await ha(this.popup.popup,a,i),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return _t`
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
        sync=${Ft(this.sync?this.sync:void 0)}
        class=${Wt({dropdown:!0,"dropdown--open":this.open})}
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
    `}};en.styles=[Jt,_5];en.dependencies={"sl-popup":Re};v([$t(".dropdown")],en.prototype,"popup",2);v([$t(".dropdown__trigger")],en.prototype,"trigger",2);v([$t(".dropdown__panel")],en.prototype,"panel",2);v([A({type:Boolean,reflect:!0})],en.prototype,"open",2);v([A({reflect:!0})],en.prototype,"placement",2);v([A({type:Boolean,reflect:!0})],en.prototype,"disabled",2);v([A({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],en.prototype,"stayOpenOnSelect",2);v([A({attribute:!1})],en.prototype,"containingElement",2);v([A({type:Number})],en.prototype,"distance",2);v([A({type:Number})],en.prototype,"skidding",2);v([A({type:Boolean})],en.prototype,"hoist",2);v([A({reflect:!0})],en.prototype,"sync",2);v([Dt("open",{waitUntilFirstUpdate:!0})],en.prototype,"handleOpenChange",1);De("dropdown.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});De("dropdown.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});en.define("sl-dropdown");var S5=Xt`
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
`,Ia=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let a=this.value;if(this.from){const i=this.getRootNode(),s=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let d=this.from,f="";s?[d,f]=this.from.trim().split("."):o&&([d,f]=this.from.trim().replace(/\]$/,"").split("["));const g="getElementById"in i?i.getElementById(d):null;g?o?a=g.getAttribute(f)||"":s?a=g[f]||"":a=g.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!a)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(a),this.showStatus("success"),this.emit("sl-copy",{detail:{value:a}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(a){const i=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),o=this.errorLabel||this.localize.term("error"),d=a==="success"?this.successIcon:this.errorIcon,f=Je(this,"copy.in",{dir:"ltr"}),g=Je(this,"copy.out",{dir:"ltr"});this.tooltip.content=a==="success"?s:o,await this.copyIcon.animate(g.keyframes,g.options).finished,this.copyIcon.hidden=!0,this.status=a,d.hidden=!1,await d.animate(f.keyframes,f.options).finished,setTimeout(async()=>{await d.animate(g.keyframes,g.options).finished,d.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(f.keyframes,f.options).finished,this.tooltip.content=i,this.isCopying=!1},this.feedbackDuration)}render(){const a=this.copyLabel||this.localize.term("copy");return _t`
      <sl-tooltip
        class=${Wt({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${a}
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
    `}};Ia.styles=[Jt,S5];Ia.dependencies={"sl-icon":Ue,"sl-tooltip":qa};v([$t('slot[name="copy-icon"]')],Ia.prototype,"copyIcon",2);v([$t('slot[name="success-icon"]')],Ia.prototype,"successIcon",2);v([$t('slot[name="error-icon"]')],Ia.prototype,"errorIcon",2);v([$t("sl-tooltip")],Ia.prototype,"tooltip",2);v([Qt()],Ia.prototype,"isCopying",2);v([Qt()],Ia.prototype,"status",2);v([A()],Ia.prototype,"value",2);v([A()],Ia.prototype,"from",2);v([A({type:Boolean,reflect:!0})],Ia.prototype,"disabled",2);v([A({attribute:"copy-label"})],Ia.prototype,"copyLabel",2);v([A({attribute:"success-label"})],Ia.prototype,"successLabel",2);v([A({attribute:"error-label"})],Ia.prototype,"errorLabel",2);v([A({attribute:"feedback-duration",type:Number})],Ia.prototype,"feedbackDuration",2);v([A({attribute:"tooltip-placement"})],Ia.prototype,"tooltipPlacement",2);v([A({type:Boolean})],Ia.prototype,"hoist",2);De("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});De("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});Ia.define("sl-copy-button");var k5=Xt`
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
`,Ti=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(a=>{for(const i of a)i.type==="attributes"&&i.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var a;super.disconnectedCallback(),(a=this.detailsObserver)==null||a.disconnect()}handleSummaryClick(a){a.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(a){(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this.open?this.hide():this.show()),(a.key==="ArrowUp"||a.key==="ArrowLeft")&&(a.preventDefault(),this.hide()),(a.key==="ArrowDown"||a.key==="ArrowRight")&&(a.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await za(this.body);const{keyframes:i,options:s}=Je(this,"details.show",{dir:this.localize.dir()});await ha(this.body,bh(i,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await za(this.body);const{keyframes:i,options:s}=Je(this,"details.hide",{dir:this.localize.dir()});await ha(this.body,bh(i,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,fn(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,fn(this,"sl-after-hide")}render(){const a=this.localize.dir()==="rtl";return _t`
      <details
        part="base"
        class=${Wt({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":a})}
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
              <sl-icon library="system" name=${a?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${a?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Ti.styles=[Jt,k5];Ti.dependencies={"sl-icon":Ue};v([$t(".details")],Ti.prototype,"details",2);v([$t(".details__header")],Ti.prototype,"header",2);v([$t(".details__body")],Ti.prototype,"body",2);v([$t(".details__expand-icon-slot")],Ti.prototype,"expandIconSlot",2);v([A({type:Boolean,reflect:!0})],Ti.prototype,"open",2);v([A()],Ti.prototype,"summary",2);v([A({type:Boolean,reflect:!0})],Ti.prototype,"disabled",2);v([Dt("open",{waitUntilFirstUpdate:!0})],Ti.prototype,"handleOpenChange",1);De("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});De("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});Ti.define("sl-details");var C5=Xt`
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
`,nr=class extends Gt{constructor(){super(...arguments),this.hasSlotController=new mn(this,"footer"),this.localize=new ze(this),this.modal=new sx(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=a=>{a.key==="Escape"&&this.modal.isActive()&&this.open&&(a.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),ou(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),lu(this),this.removeOpenListeners()}requestClose(a){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:a}}).defaultPrevented){const s=Je(this,"dialog.denyClose",{dir:this.localize.dir()});ha(this.panel,s.keyframes,s.options);return}this.hide()}addOpenListeners(){var a;"CloseWatcher"in window?((a=this.closeWatcher)==null||a.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var a;(a=this.closeWatcher)==null||a.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),ou(this);const a=this.querySelector("[autofocus]");a&&a.removeAttribute("autofocus"),await Promise.all([za(this.dialog),za(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(a?a.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),a&&a.setAttribute("autofocus","")});const i=Je(this,"dialog.show",{dir:this.localize.dir()}),s=Je(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([ha(this.panel,i.keyframes,i.options),ha(this.overlay,s.keyframes,s.options)]),this.emit("sl-after-show")}else{pg(this),this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([za(this.dialog),za(this.overlay)]);const a=Je(this,"dialog.hide",{dir:this.localize.dir()}),i=Je(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([ha(this.overlay,i.keyframes,i.options).then(()=>{this.overlay.hidden=!0}),ha(this.panel,a.keyframes,a.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,lu(this);const s=this.originalTrigger;typeof(s==null?void 0:s.focus)=="function"&&setTimeout(()=>s.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,fn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,fn(this,"sl-after-hide")}render(){return _t`
      <div
        part="base"
        class=${Wt({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${Ft(this.noHeader?this.label:void 0)}
          aria-labelledby=${Ft(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":_t`
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
    `}};nr.styles=[Jt,C5];nr.dependencies={"sl-icon-button":Ra};v([$t(".dialog")],nr.prototype,"dialog",2);v([$t(".dialog__panel")],nr.prototype,"panel",2);v([$t(".dialog__overlay")],nr.prototype,"overlay",2);v([A({type:Boolean,reflect:!0})],nr.prototype,"open",2);v([A({reflect:!0})],nr.prototype,"label",2);v([A({attribute:"no-header",type:Boolean,reflect:!0})],nr.prototype,"noHeader",2);v([Dt("open",{waitUntilFirstUpdate:!0})],nr.prototype,"handleOpenChange",1);De("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});De("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});De("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});De("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});De("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});nr.define("sl-dialog");Da.define("sl-checkbox");var A5=Xt`
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
`,Me=class extends Gt{constructor(){super(...arguments),this.formControlController=new Vr(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new mn(this,"[default]","prefix","suffix"),this.localize=new ze(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:zh}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(a){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(a)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(a){this.button.focus(a)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(a){this.isButton()&&(this.button.setCustomValidity(a),this.formControlController.updateValidity())}render(){const a=this.isLink(),i=a?_h`a`:_h`button`;return su`
      <${i}
        part="base"
        class=${Wt({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${Ft(a?void 0:this.disabled)}
        type=${Ft(a?void 0:this.type)}
        title=${this.title}
        name=${Ft(a?void 0:this.name)}
        value=${Ft(a?void 0:this.value)}
        href=${Ft(a&&!this.disabled?this.href:void 0)}
        target=${Ft(a?this.target:void 0)}
        download=${Ft(a?this.download:void 0)}
        rel=${Ft(a?this.rel:void 0)}
        role=${Ft(a?void 0:"button")}
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
        ${this.caret?su` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?su`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${i}>
    `}};Me.styles=[Jt,J1];Me.dependencies={"sl-icon":Ue,"sl-spinner":Su};v([$t(".button")],Me.prototype,"button",2);v([Qt()],Me.prototype,"hasFocus",2);v([Qt()],Me.prototype,"invalid",2);v([A()],Me.prototype,"title",2);v([A({reflect:!0})],Me.prototype,"variant",2);v([A({reflect:!0})],Me.prototype,"size",2);v([A({type:Boolean,reflect:!0})],Me.prototype,"caret",2);v([A({type:Boolean,reflect:!0})],Me.prototype,"disabled",2);v([A({type:Boolean,reflect:!0})],Me.prototype,"loading",2);v([A({type:Boolean,reflect:!0})],Me.prototype,"outline",2);v([A({type:Boolean,reflect:!0})],Me.prototype,"pill",2);v([A({type:Boolean,reflect:!0})],Me.prototype,"circle",2);v([A()],Me.prototype,"type",2);v([A()],Me.prototype,"name",2);v([A()],Me.prototype,"value",2);v([A()],Me.prototype,"href",2);v([A()],Me.prototype,"target",2);v([A()],Me.prototype,"rel",2);v([A()],Me.prototype,"download",2);v([A()],Me.prototype,"form",2);v([A({attribute:"formaction"})],Me.prototype,"formAction",2);v([A({attribute:"formenctype"})],Me.prototype,"formEnctype",2);v([A({attribute:"formmethod"})],Me.prototype,"formMethod",2);v([A({attribute:"formnovalidate",type:Boolean})],Me.prototype,"formNoValidate",2);v([A({attribute:"formtarget"})],Me.prototype,"formTarget",2);v([Dt("disabled",{waitUntilFirstUpdate:!0})],Me.prototype,"handleDisabledChange",1);function Wa(a,i){E5(a)&&(a="100%");const s=T5(a);return a=i===360?a:Math.min(i,Math.max(0,parseFloat(a))),s&&(a=parseInt(String(a*i),10)/100),Math.abs(a-i)<1e-6?1:(i===360?a=(a<0?a%i+i:a%i)/i:a=a%i/i,a)}function oh(a){return Math.min(1,Math.max(0,a))}function E5(a){return typeof a=="string"&&a.indexOf(".")!==-1&&parseFloat(a)===1}function T5(a){return typeof a=="string"&&a.indexOf("%")!==-1}function ox(a){return a=parseFloat(a),(isNaN(a)||a<0||a>1)&&(a=1),a}function lh(a){return Number(a)<=1?`${Number(a)*100}%`:a}function yo(a){return a.length===1?"0"+a:String(a)}function z5(a,i,s){return{r:Wa(a,255)*255,g:Wa(i,255)*255,b:Wa(s,255)*255}}function Fy(a,i,s){a=Wa(a,255),i=Wa(i,255),s=Wa(s,255);const o=Math.max(a,i,s),d=Math.min(a,i,s);let f=0,g=0;const x=(o+d)/2;if(o===d)g=0,f=0;else{const S=o-d;switch(g=x>.5?S/(2-o-d):S/(o+d),o){case a:f=(i-s)/S+(i<s?6:0);break;case i:f=(s-a)/S+2;break;case s:f=(a-i)/S+4;break}f/=6}return{h:f,s:g,l:x}}function Cm(a,i,s){return s<0&&(s+=1),s>1&&(s-=1),s<1/6?a+(i-a)*(6*s):s<1/2?i:s<2/3?a+(i-a)*(2/3-s)*6:a}function N5(a,i,s){let o,d,f;if(a=Wa(a,360),i=Wa(i,100),s=Wa(s,100),i===0)d=s,f=s,o=s;else{const g=s<.5?s*(1+i):s+i-s*i,x=2*s-g;o=Cm(x,g,a+1/3),d=Cm(x,g,a),f=Cm(x,g,a-1/3)}return{r:o*255,g:d*255,b:f*255}}function Gy(a,i,s){a=Wa(a,255),i=Wa(i,255),s=Wa(s,255);const o=Math.max(a,i,s),d=Math.min(a,i,s);let f=0;const g=o,x=o-d,S=o===0?0:x/o;if(o===d)f=0;else{switch(o){case a:f=(i-s)/x+(i<s?6:0);break;case i:f=(s-a)/x+2;break;case s:f=(a-i)/x+4;break}f/=6}return{h:f,s:S,v:g}}function O5(a,i,s){a=Wa(a,360)*6,i=Wa(i,100),s=Wa(s,100);const o=Math.floor(a),d=a-o,f=s*(1-i),g=s*(1-d*i),x=s*(1-(1-d)*i),S=o%6,E=[s,g,f,f,x,s][S],N=[x,s,s,g,f,f][S],_=[f,f,x,s,s,g][S];return{r:E*255,g:N*255,b:_*255}}function Yy(a,i,s,o){const d=yo(Math.round(a).toString(16)),f=yo(Math.round(i).toString(16)),g=yo(Math.round(s).toString(16));return o&&d.startsWith(d.charAt(1))&&f.startsWith(f.charAt(1))&&g.startsWith(g.charAt(1))?d.charAt(0)+f.charAt(0)+g.charAt(0):d+f+g}function j5(a,i,s,o,d){const f=yo(Math.round(a).toString(16)),g=yo(Math.round(i).toString(16)),x=yo(Math.round(s).toString(16)),S=yo(R5(o));return d&&f.startsWith(f.charAt(1))&&g.startsWith(g.charAt(1))&&x.startsWith(x.charAt(1))&&S.startsWith(S.charAt(1))?f.charAt(0)+g.charAt(0)+x.charAt(0)+S.charAt(0):f+g+x+S}function D5(a,i,s,o){const d=a/100,f=i/100,g=s/100,x=o/100,S=255*(1-d)*(1-x),E=255*(1-f)*(1-x),N=255*(1-g)*(1-x);return{r:S,g:E,b:N}}function Py(a,i,s){let o=1-a/255,d=1-i/255,f=1-s/255,g=Math.min(o,d,f);return g===1?(o=0,d=0,f=0):(o=(o-g)/(1-g)*100,d=(d-g)/(1-g)*100,f=(f-g)/(1-g)*100),g*=100,{c:Math.round(o),m:Math.round(d),y:Math.round(f),k:Math.round(g)}}function R5(a){return Math.round(parseFloat(a)*255).toString(16)}function Xy(a){return Bn(a)/255}function Bn(a){return parseInt(a,16)}function M5(a){return{r:a>>16,g:(a&65280)>>8,b:a&255}}const Gm={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function $5(a){let i={r:0,g:0,b:0},s=1,o=null,d=null,f=null,g=!1,x=!1;return typeof a=="string"&&(a=H5(a)),typeof a=="object"&&(Ln(a.r)&&Ln(a.g)&&Ln(a.b)?(i=z5(a.r,a.g,a.b),g=!0,x=String(a.r).substr(-1)==="%"?"prgb":"rgb"):Ln(a.h)&&Ln(a.s)&&Ln(a.v)?(o=lh(a.s),d=lh(a.v),i=O5(a.h,o,d),g=!0,x="hsv"):Ln(a.h)&&Ln(a.s)&&Ln(a.l)?(o=lh(a.s),f=lh(a.l),i=N5(a.h,o,f),g=!0,x="hsl"):Ln(a.c)&&Ln(a.m)&&Ln(a.y)&&Ln(a.k)&&(i=D5(a.c,a.m,a.y,a.k),g=!0,x="cmyk"),Object.prototype.hasOwnProperty.call(a,"a")&&(s=a.a)),s=ox(s),{ok:g,format:a.format||x,r:Math.min(255,Math.max(i.r,0)),g:Math.min(255,Math.max(i.g,0)),b:Math.min(255,Math.max(i.b,0)),a:s}}const L5="[-\\+]?\\d+%?",B5="[-\\+]?\\d*\\.\\d+%?",Ts="(?:"+B5+")|(?:"+L5+")",Am="[\\s|\\(]+("+Ts+")[,|\\s]+("+Ts+")[,|\\s]+("+Ts+")\\s*\\)?",ch="[\\s|\\(]+("+Ts+")[,|\\s]+("+Ts+")[,|\\s]+("+Ts+")[,|\\s]+("+Ts+")\\s*\\)?",Hn={hex:/^[0-9a-fA-F]+$/,CSS_UNIT:new RegExp(Ts),rgb:new RegExp("rgb"+Am),rgba:new RegExp("rgba"+ch),hsl:new RegExp("hsl"+Am),hsla:new RegExp("hsla"+ch),hsv:new RegExp("hsv"+Am),hsva:new RegExp("hsva"+ch),cmyk:new RegExp("cmyk"+ch),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function H5(a){if(a=a.trim().toLowerCase(),a.length===0)return!1;let i=!1;if(Gm[a])a=Gm[a],i=!0;else if(a==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let s;if(typeof a=="string"&&a.length<=9&&(a.startsWith("#")||Hn.hex.test(a))){if(s=Hn.hex8.exec(a),s)return{r:Bn(s[1]),g:Bn(s[2]),b:Bn(s[3]),a:Xy(s[4]),format:i?"name":"hex8"};if(s=Hn.hex6.exec(a),s)return{r:Bn(s[1]),g:Bn(s[2]),b:Bn(s[3]),format:i?"name":"hex"};if(s=Hn.hex4.exec(a),s)return{r:Bn(s[1]+s[1]),g:Bn(s[2]+s[2]),b:Bn(s[3]+s[3]),a:Xy(s[4]+s[4]),format:i?"name":"hex8"};if(s=Hn.hex3.exec(a),s)return{r:Bn(s[1]+s[1]),g:Bn(s[2]+s[2]),b:Bn(s[3]+s[3]),format:i?"name":"hex"}}return s=Hn.rgb.exec(a),s?{r:s[1],g:s[2],b:s[3]}:(s=Hn.rgba.exec(a),s?{r:s[1],g:s[2],b:s[3],a:s[4]}:(s=Hn.hsl.exec(a),s?{h:s[1],s:s[2],l:s[3]}:(s=Hn.hsla.exec(a),s?{h:s[1],s:s[2],l:s[3],a:s[4]}:(s=Hn.hsv.exec(a),s?{h:s[1],s:s[2],v:s[3]}:(s=Hn.hsva.exec(a),s?{h:s[1],s:s[2],v:s[3],a:s[4]}:(s=Hn.cmyk.exec(a),s?{c:s[1],m:s[2],y:s[3],k:s[4]}:!1))))))}function Ln(a){return typeof a=="number"?!Number.isNaN(a):Hn.CSS_UNIT.test(a)}class da{constructor(i="",s={}){if(i instanceof da)return i;typeof i=="number"&&(i=M5(i)),this.originalInput=i;const o=$5(i);this.originalInput=i,this.r=o.r,this.g=o.g,this.b=o.b,this.a=o.a,this.roundA=Math.round(100*this.a)/100,this.format=s.format??o.format,this.gradientType=s.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=o.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const i=this.toRgb();return(i.r*299+i.g*587+i.b*114)/1e3}getLuminance(){const i=this.toRgb();let s,o,d;const f=i.r/255,g=i.g/255,x=i.b/255;return f<=.03928?s=f/12.92:s=Math.pow((f+.055)/1.055,2.4),g<=.03928?o=g/12.92:o=Math.pow((g+.055)/1.055,2.4),x<=.03928?d=x/12.92:d=Math.pow((x+.055)/1.055,2.4),.2126*s+.7152*o+.0722*d}getAlpha(){return this.a}setAlpha(i){return this.a=ox(i),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:i}=this.toHsl();return i===0}toHsv(){const i=Gy(this.r,this.g,this.b);return{h:i.h*360,s:i.s,v:i.v,a:this.a}}toHsvString(){const i=Gy(this.r,this.g,this.b),s=Math.round(i.h*360),o=Math.round(i.s*100),d=Math.round(i.v*100);return this.a===1?`hsv(${s}, ${o}%, ${d}%)`:`hsva(${s}, ${o}%, ${d}%, ${this.roundA})`}toHsl(){const i=Fy(this.r,this.g,this.b);return{h:i.h*360,s:i.s,l:i.l,a:this.a}}toHslString(){const i=Fy(this.r,this.g,this.b),s=Math.round(i.h*360),o=Math.round(i.s*100),d=Math.round(i.l*100);return this.a===1?`hsl(${s}, ${o}%, ${d}%)`:`hsla(${s}, ${o}%, ${d}%, ${this.roundA})`}toHex(i=!1){return Yy(this.r,this.g,this.b,i)}toHexString(i=!1){return"#"+this.toHex(i)}toHex8(i=!1){return j5(this.r,this.g,this.b,this.a,i)}toHex8String(i=!1){return"#"+this.toHex8(i)}toHexShortString(i=!1){return this.a===1?this.toHexString(i):this.toHex8String(i)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const i=Math.round(this.r),s=Math.round(this.g),o=Math.round(this.b);return this.a===1?`rgb(${i}, ${s}, ${o})`:`rgba(${i}, ${s}, ${o}, ${this.roundA})`}toPercentageRgb(){const i=s=>`${Math.round(Wa(s,255)*100)}%`;return{r:i(this.r),g:i(this.g),b:i(this.b),a:this.a}}toPercentageRgbString(){const i=s=>Math.round(Wa(s,255)*100);return this.a===1?`rgb(${i(this.r)}%, ${i(this.g)}%, ${i(this.b)}%)`:`rgba(${i(this.r)}%, ${i(this.g)}%, ${i(this.b)}%, ${this.roundA})`}toCmyk(){return{...Py(this.r,this.g,this.b)}}toCmykString(){const{c:i,m:s,y:o,k:d}=Py(this.r,this.g,this.b);return`cmyk(${i}, ${s}, ${o}, ${d})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const i="#"+Yy(this.r,this.g,this.b,!1);for(const[s,o]of Object.entries(Gm))if(i===o)return s;return!1}toString(i){const s=!!i;i=i??this.format;let o=!1;const d=this.a<1&&this.a>=0;return!s&&d&&(i.startsWith("hex")||i==="name")?i==="name"&&this.a===0?this.toName():this.toRgbString():(i==="rgb"&&(o=this.toRgbString()),i==="prgb"&&(o=this.toPercentageRgbString()),(i==="hex"||i==="hex6")&&(o=this.toHexString()),i==="hex3"&&(o=this.toHexString(!0)),i==="hex4"&&(o=this.toHex8String(!0)),i==="hex8"&&(o=this.toHex8String()),i==="name"&&(o=this.toName()),i==="hsl"&&(o=this.toHslString()),i==="hsv"&&(o=this.toHsvString()),i==="cmyk"&&(o=this.toCmykString()),o||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new da(this.toString())}lighten(i=10){const s=this.toHsl();return s.l+=i/100,s.l=oh(s.l),new da(s)}brighten(i=10){const s=this.toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(255*-(i/100)))),s.g=Math.max(0,Math.min(255,s.g-Math.round(255*-(i/100)))),s.b=Math.max(0,Math.min(255,s.b-Math.round(255*-(i/100)))),new da(s)}darken(i=10){const s=this.toHsl();return s.l-=i/100,s.l=oh(s.l),new da(s)}tint(i=10){return this.mix("white",i)}shade(i=10){return this.mix("black",i)}desaturate(i=10){const s=this.toHsl();return s.s-=i/100,s.s=oh(s.s),new da(s)}saturate(i=10){const s=this.toHsl();return s.s+=i/100,s.s=oh(s.s),new da(s)}greyscale(){return this.desaturate(100)}spin(i){const s=this.toHsl(),o=(s.h+i)%360;return s.h=o<0?360+o:o,new da(s)}mix(i,s=50){const o=this.toRgb(),d=new da(i).toRgb(),f=s/100,g={r:(d.r-o.r)*f+o.r,g:(d.g-o.g)*f+o.g,b:(d.b-o.b)*f+o.b,a:(d.a-o.a)*f+o.a};return new da(g)}analogous(i=6,s=30){const o=this.toHsl(),d=360/s,f=[this];for(o.h=(o.h-(d*i>>1)+720)%360;--i;)o.h=(o.h+d)%360,f.push(new da(o));return f}complement(){const i=this.toHsl();return i.h=(i.h+180)%360,new da(i)}monochromatic(i=6){const s=this.toHsv(),{h:o}=s,{s:d}=s;let{v:f}=s;const g=[],x=1/i;for(;i--;)g.push(new da({h:o,s:d,v:f})),f=(f+x)%1;return g}splitcomplement(){const i=this.toHsl(),{h:s}=i;return[this,new da({h:(s+72)%360,s:i.s,l:i.l}),new da({h:(s+216)%360,s:i.s,l:i.l})]}onBackground(i){const s=this.toRgb(),o=new da(i).toRgb(),d=s.a+o.a*(1-s.a);return new da({r:(s.r*s.a+o.r*o.a*(1-s.a))/d,g:(s.g*s.a+o.g*o.a*(1-s.a))/d,b:(s.b*s.a+o.b*o.a*(1-s.a))/d,a:d})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(i){const s=this.toHsl(),{h:o}=s,d=[this],f=360/i;for(let g=1;g<i;g++)d.push(new da({h:(o+g*f)%360,s:s.s,l:s.l}));return d}equals(i){const s=new da(i);return this.format==="cmyk"||s.format==="cmyk"?this.toCmykString()===s.toCmykString():this.toRgbString()===s.toRgbString()}}var Qy="EyeDropper"in window,Ae=class extends Gt{constructor(){super(),this.formControlController=new Vr(this),this.isSafeValue=!1,this.localize=new ze(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue="",this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value="",this.defaultValue="",this.label="",this.format="hex",this.inline=!1,this.size="medium",this.noFormatToggle=!1,this.name="",this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches="",this.form="",this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit("sl-focus")},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit("sl-blur")},this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand("copy"),this.previewButton.focus(),this.previewButton.classList.add("color-picker__preview-color--copied"),this.previewButton.addEventListener("animationend",()=>{this.previewButton.classList.remove("color-picker__preview-color--copied")})}handleFormatToggle(){const a=["hex","rgb","hsl","hsv"],i=(a.indexOf(this.format)+1)%a.length;this.format=a[i],this.setColor(this.value),this.emit("sl-change"),this.emit("sl-input")}handleAlphaDrag(a){const i=this.shadowRoot.querySelector(".color-picker__slider.color-picker__alpha"),s=i.querySelector(".color-picker__slider-handle"),{width:o}=i.getBoundingClientRect();let d=this.value,f=this.value;s.focus(),a.preventDefault(),cu(i,{onMove:g=>{this.alpha=Ta(g/o*100,0,100),this.syncValues(),this.value!==f&&(f=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==d&&(d=this.value,this.emit("sl-change"))},initialEvent:a})}handleHueDrag(a){const i=this.shadowRoot.querySelector(".color-picker__slider.color-picker__hue"),s=i.querySelector(".color-picker__slider-handle"),{width:o}=i.getBoundingClientRect();let d=this.value,f=this.value;s.focus(),a.preventDefault(),cu(i,{onMove:g=>{this.hue=Ta(g/o*360,0,360),this.syncValues(),this.value!==f&&(f=this.value,this.emit("sl-input"))},onStop:()=>{this.value!==d&&(d=this.value,this.emit("sl-change"))},initialEvent:a})}handleGridDrag(a){const i=this.shadowRoot.querySelector(".color-picker__grid"),s=i.querySelector(".color-picker__grid-handle"),{width:o,height:d}=i.getBoundingClientRect();let f=this.value,g=this.value;s.focus(),a.preventDefault(),this.isDraggingGridHandle=!0,cu(i,{onMove:(x,S)=>{this.saturation=Ta(x/o*100,0,100),this.brightness=Ta(100-S/d*100,0,100),this.syncValues(),this.value!==g&&(g=this.value,this.emit("sl-input"))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==f&&(f=this.value,this.emit("sl-change"))},initialEvent:a})}handleAlphaKeyDown(a){const i=a.shiftKey?10:1,s=this.value;a.key==="ArrowLeft"&&(a.preventDefault(),this.alpha=Ta(this.alpha-i,0,100),this.syncValues()),a.key==="ArrowRight"&&(a.preventDefault(),this.alpha=Ta(this.alpha+i,0,100),this.syncValues()),a.key==="Home"&&(a.preventDefault(),this.alpha=0,this.syncValues()),a.key==="End"&&(a.preventDefault(),this.alpha=100,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleHueKeyDown(a){const i=a.shiftKey?10:1,s=this.value;a.key==="ArrowLeft"&&(a.preventDefault(),this.hue=Ta(this.hue-i,0,360),this.syncValues()),a.key==="ArrowRight"&&(a.preventDefault(),this.hue=Ta(this.hue+i,0,360),this.syncValues()),a.key==="Home"&&(a.preventDefault(),this.hue=0,this.syncValues()),a.key==="End"&&(a.preventDefault(),this.hue=360,this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleGridKeyDown(a){const i=a.shiftKey?10:1,s=this.value;a.key==="ArrowLeft"&&(a.preventDefault(),this.saturation=Ta(this.saturation-i,0,100),this.syncValues()),a.key==="ArrowRight"&&(a.preventDefault(),this.saturation=Ta(this.saturation+i,0,100),this.syncValues()),a.key==="ArrowUp"&&(a.preventDefault(),this.brightness=Ta(this.brightness+i,0,100),this.syncValues()),a.key==="ArrowDown"&&(a.preventDefault(),this.brightness=Ta(this.brightness-i,0,100),this.syncValues()),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputChange(a){const i=a.target,s=this.value;a.stopPropagation(),this.input.value?(this.setColor(i.value),i.value=this.value):this.value="",this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}handleInputInput(a){this.formControlController.updateValidity(),a.stopPropagation()}handleInputKeyDown(a){if(a.key==="Enter"){const i=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(a){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(a)}handleTouchMove(a){a.preventDefault()}parseColor(a){const i=new da(a);if(!i.isValid)return null;const s=i.toHsl(),o={h:s.h,s:s.s*100,l:s.l*100,a:s.a},d=i.toRgb(),f=i.toHexString(),g=i.toHex8String(),x=i.toHsv(),S={h:x.h,s:x.s*100,v:x.v*100,a:x.a};return{hsl:{h:o.h,s:o.s,l:o.l,string:this.setLetterCase(`hsl(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%)`)},hsla:{h:o.h,s:o.s,l:o.l,a:o.a,string:this.setLetterCase(`hsla(${Math.round(o.h)}, ${Math.round(o.s)}%, ${Math.round(o.l)}%, ${o.a.toFixed(2).toString()})`)},hsv:{h:S.h,s:S.s,v:S.v,string:this.setLetterCase(`hsv(${Math.round(S.h)}, ${Math.round(S.s)}%, ${Math.round(S.v)}%)`)},hsva:{h:S.h,s:S.s,v:S.v,a:S.a,string:this.setLetterCase(`hsva(${Math.round(S.h)}, ${Math.round(S.s)}%, ${Math.round(S.v)}%, ${S.a.toFixed(2).toString()})`)},rgb:{r:d.r,g:d.g,b:d.b,string:this.setLetterCase(`rgb(${Math.round(d.r)}, ${Math.round(d.g)}, ${Math.round(d.b)})`)},rgba:{r:d.r,g:d.g,b:d.b,a:d.a,string:this.setLetterCase(`rgba(${Math.round(d.r)}, ${Math.round(d.g)}, ${Math.round(d.b)}, ${d.a.toFixed(2).toString()})`)},hex:this.setLetterCase(f),hexa:this.setLetterCase(g)}}setColor(a){const i=this.parseColor(a);return i===null?!1:(this.hue=i.hsva.h,this.saturation=i.hsva.s,this.brightness=i.hsva.v,this.alpha=this.opacity?i.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(a){return typeof a!="string"?"":this.uppercase?a.toUpperCase():a.toLowerCase()}async syncValues(){const a=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);a!==null&&(this.format==="hsl"?this.inputValue=this.opacity?a.hsla.string:a.hsl.string:this.format==="rgb"?this.inputValue=this.opacity?a.rgba.string:a.rgb.string:this.format==="hsv"?this.inputValue=this.opacity?a.hsva.string:a.hsv.string:this.inputValue=this.opacity?a.hexa:a.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove("color-picker__preview-color--copied")}handleEyeDropper(){if(!Qy)return;new EyeDropper().open().then(i=>{const s=this.value;this.setColor(i.sRGBHex),this.value!==s&&(this.emit("sl-change"),this.emit("sl-input"))}).catch(()=>{})}selectSwatch(a){const i=this.value;this.disabled||(this.setColor(a),this.value!==i&&(this.emit("sl-change"),this.emit("sl-input")))}getHexString(a,i,s,o=100){const d=new da(`hsva(${a}, ${i}%, ${s}%, ${o/100})`);return d.isValid?d.toHex8String():""}stopNestedEventPropagation(a){a.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(a,i){if(this.isEmpty=!i,i||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){const s=this.parseColor(i);s!==null?(this.inputValue=this.value,this.hue=s.hsva.h,this.saturation=s.hsva.s,this.brightness=s.hsva.v,this.alpha=s.hsva.a*100,this.syncValues()):this.inputValue=a??""}}focus(a){this.inline?this.base.focus(a):this.trigger.focus(a)}blur(){var a;const i=this.inline?this.base:this.trigger;this.hasFocus&&(i.focus({preventScroll:!0}),i.blur()),(a=this.dropdown)!=null&&a.open&&this.dropdown.hide()}getFormattedValue(a="hex"){const i=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(i===null)return"";switch(a){case"hex":return i.hex;case"hexa":return i.hexa;case"rgb":return i.rgb.string;case"rgba":return i.rgba.string;case"hsl":return i.hsl.string;case"hsla":return i.hsla.string;case"hsv":return i.hsv.string;case"hsva":return i.hsva.string;default:return""}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener("sl-after-show",()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(a){this.input.setCustomValidity(a),this.formControlController.updateValidity()}render(){const a=this.saturation,i=100-this.brightness,s=Array.isArray(this.swatches)?this.swatches:this.swatches.split(";").filter(d=>d.trim()!==""),o=_t`
      <div
        part="base"
        class=${Wt({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?"true":"false"}
        aria-labelledby="label"
        tabindex=${this.inline?"0":"-1"}
      >
        ${this.inline?_t`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${_n({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${Wt({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${_n({top:`${i}%`,left:`${a}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${Ft(this.disabled?void 0:"0")}
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
                style=${_n({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${Ft(this.disabled?void 0:"0")}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?_t`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${_n({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${_n({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${Ft(this.disabled?void 0:"0")}
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
            style=${_n({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
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
            ${this.noFormatToggle?"":_t`
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
            ${Qy?_t`
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

        ${s.length>0?_t`
              <div part="swatches" class="color-picker__swatches">
                ${s.map(d=>{const f=this.parseColor(d);return f?_t`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${Ft(this.disabled?void 0:"0")}
                      role="button"
                      aria-label=${d}
                      @click=${()=>this.selectSwatch(d)}
                      @keydown=${g=>!this.disabled&&g.key==="Enter"&&this.setColor(f.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${_n({backgroundColor:f.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${d}"`,this),"")})}
              </div>
            `:""}
      </div>
    `;return this.inline?o:_t`
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
          class=${Wt({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size==="small","color-dropdown__trigger--medium":this.size==="medium","color-dropdown__trigger--large":this.size==="large","color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${_n({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${o}
      </sl-dropdown>
    `}};Ae.styles=[Jt,A5];Ae.dependencies={"sl-button-group":zo,"sl-button":Me,"sl-dropdown":en,"sl-icon":Ue,"sl-input":me,"sl-visually-hidden":ug};v([$t('[part~="base"]')],Ae.prototype,"base",2);v([$t('[part~="input"]')],Ae.prototype,"input",2);v([$t(".color-dropdown")],Ae.prototype,"dropdown",2);v([$t('[part~="preview"]')],Ae.prototype,"previewButton",2);v([$t('[part~="trigger"]')],Ae.prototype,"trigger",2);v([Qt()],Ae.prototype,"hasFocus",2);v([Qt()],Ae.prototype,"isDraggingGridHandle",2);v([Qt()],Ae.prototype,"isEmpty",2);v([Qt()],Ae.prototype,"inputValue",2);v([Qt()],Ae.prototype,"hue",2);v([Qt()],Ae.prototype,"saturation",2);v([Qt()],Ae.prototype,"brightness",2);v([Qt()],Ae.prototype,"alpha",2);v([A()],Ae.prototype,"value",2);v([Bl()],Ae.prototype,"defaultValue",2);v([A()],Ae.prototype,"label",2);v([A()],Ae.prototype,"format",2);v([A({type:Boolean,reflect:!0})],Ae.prototype,"inline",2);v([A({reflect:!0})],Ae.prototype,"size",2);v([A({attribute:"no-format-toggle",type:Boolean})],Ae.prototype,"noFormatToggle",2);v([A()],Ae.prototype,"name",2);v([A({type:Boolean,reflect:!0})],Ae.prototype,"disabled",2);v([A({type:Boolean})],Ae.prototype,"hoist",2);v([A({type:Boolean})],Ae.prototype,"opacity",2);v([A({type:Boolean})],Ae.prototype,"uppercase",2);v([A()],Ae.prototype,"swatches",2);v([A({reflect:!0})],Ae.prototype,"form",2);v([A({type:Boolean,reflect:!0})],Ae.prototype,"required",2);v([xu({passive:!1})],Ae.prototype,"handleTouchMove",1);v([Dt("format",{waitUntilFirstUpdate:!0})],Ae.prototype,"handleFormatChange",1);v([Dt("opacity",{waitUntilFirstUpdate:!0})],Ae.prototype,"handleOpacityChange",1);v([Dt("value")],Ae.prototype,"handleValueChange",1);Ae.define("sl-color-picker");var U5=Xt`
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
`,lx=class extends Gt{constructor(){super(...arguments),this.hasSlotController=new mn(this,"footer","header","image")}render(){return _t`
      <div
        part="base"
        class=${Wt({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};lx.styles=[Jt,U5];lx.define("sl-card");var V5=class{constructor(a,i){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},a.addController(this),this.host=a,this.tickCallback=i}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(a){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},a)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},q5=Xt`
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
 */function*I5(a,i){if(a!==void 0){let s=0;for(const o of a)yield i(o,s++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*K5(a,i,s=1){const o=i===void 0?0:a;i??(i=a);for(let d=o;s>0?d<i:i<d;d+=s)yield d}var pa=class extends Gt{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new V5(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new ze(this),this.pendingSlideChange=!1,this.handleMouseDrag=a=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0,this.dragStartPosition=[a.clientX,a.clientY]),this.scrollContainer.scrollBy({left:-a.movementX,top:-a.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const a=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const i=a.scrollLeft,s=a.scrollTop;a.style.removeProperty("scroll-snap-type"),a.style.setProperty("overflow","hidden");const o=a.scrollLeft,d=a.scrollTop;a.style.removeProperty("overflow"),a.style.setProperty("scroll-snap-type","none"),a.scrollTo({left:i,top:s,behavior:"instant"}),requestAnimationFrame(async()=>{(i!==o||s!==d)&&(a.scrollTo({left:o,top:d,behavior:Bm()?"auto":"smooth"}),await fn(a,"scrollend")),a.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=a=>{a.some(s=>[...s.addedNodes,...s.removedNodes].some(o=>this.isCarouselItem(o)&&!o.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"))}disconnectedCallback(){var a;super.disconnectedCallback(),(a=this.mutationObserver)==null||a.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(a){(a.has("slidesPerMove")||a.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const a=this.getSlides().length,{slidesPerPage:i,slidesPerMove:s,loop:o}=this,d=o?a/s:(a-i)/s+1;return Math.ceil(d)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:a=!0}={}){return[...this.children].filter(i=>this.isCarouselItem(i)&&(!a||!i.hasAttribute("data-clone")))}handleClick(a){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){const i=Math.abs(this.dragStartPosition[0]-a.clientX),s=Math.abs(this.dragStartPosition[1]-a.clientY);Math.sqrt(i*i+s*s)>=10&&a.preventDefault()}}handleKeyDown(a){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(a.key)){const i=a.target,s=this.localize.dir()==="rtl",o=i.closest('[part~="pagination-item"]')!==null,d=a.key==="ArrowDown"||!s&&a.key==="ArrowRight"||s&&a.key==="ArrowLeft",f=a.key==="ArrowUp"||!s&&a.key==="ArrowLeft"||s&&a.key==="ArrowRight";a.preventDefault(),f&&this.previous(),d&&this.next(),a.key==="Home"&&this.goToSlide(0),a.key==="End"&&this.goToSlide(this.getSlides().length-1),o&&this.updateComplete.then(()=>{var g;const x=(g=this.shadowRoot)==null?void 0:g.querySelector('[part~="pagination-item--active"]');x&&x.focus()})}}handleMouseDragStart(a){this.mouseDragging&&a.button===0&&(a.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){const a=new IntersectionObserver(i=>{a.disconnect();for(const x of i){const S=x.target;S.toggleAttribute("inert",!x.isIntersecting),S.classList.toggle("--in-view",x.isIntersecting),S.setAttribute("aria-hidden",x.isIntersecting?"false":"true")}const s=i.find(x=>x.isIntersecting);if(!s)return;const o=this.getSlides({excludeClones:!1}),d=this.getSlides().length,f=o.indexOf(s.target),g=this.loop?f-this.slidesPerPage:f;if(this.activeSlide=(Math.ceil(g/this.slidesPerMove)*this.slidesPerMove+d)%d,!this.scrolling&&this.loop&&s.target.hasAttribute("data-clone")){const x=Number(s.target.getAttribute("data-clone"));this.goToSlide(x,"instant")}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(i=>{a.observe(i)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(a){return a instanceof Element&&a.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((a,i)=>{a.classList.remove("--in-view"),a.classList.remove("--is-active"),a.setAttribute("role","group"),a.setAttribute("aria-label",this.localize.term("slideNum",i+1)),this.pagination&&(a.setAttribute("id",`slide-${i+1}`),a.setAttribute("role","tabpanel"),a.removeAttribute("aria-label"),a.setAttribute("aria-labelledby",`tab-${i+1}`)),a.hasAttribute("data-clone")&&a.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,"auto"),this.synchronizeSlides()}createClones(){const a=this.getSlides(),i=this.slidesPerPage,s=a.slice(-i),o=a.slice(0,i);s.reverse().forEach((d,f)=>{const g=d.cloneNode(!0);g.setAttribute("data-clone",String(a.length-f-1)),this.prepend(g)}),o.forEach((d,f)=>{const g=d.cloneNode(!0);g.setAttribute("data-clone",String(f)),this.append(g)})}handleSlideChange(){const a=this.getSlides();a.forEach((i,s)=>{i.classList.toggle("--is-active",s===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:a[this.activeSlide]}})}updateSlidesSnap(){const a=this.getSlides(),i=this.slidesPerMove;a.forEach((s,o)=>{(o+i)%i===0?s.style.removeProperty("scroll-snap-align"):s.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(a="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,a)}next(a="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,a)}goToSlide(a,i="smooth"){const{slidesPerPage:s,loop:o}=this,d=this.getSlides(),f=this.getSlides({excludeClones:!1});if(!d.length)return;const g=o?(a+d.length)%d.length:Ta(a,0,d.length-s);this.activeSlide=g;const x=this.localize.dir()==="rtl",S=Ta(a+(o?s:0)+(x?s-1:0),0,f.length-1),E=f[S];this.scrollToSlide(E,Bm()?"auto":i)}scrollToSlide(a,i="smooth"){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;const s=this.scrollContainer,o=s.getBoundingClientRect(),d=a.getBoundingClientRect(),f=d.left-o.left,g=d.top-o.top;f||g?(this.pendingSlideChange=!0,s.scrollTo({left:f+s.scrollLeft,top:g+s.scrollTop,behavior:i})):this.pendingSlideChange=!1})}render(){const{slidesPerMove:a,scrolling:i}=this,s=this.getPageCount(),o=this.getCurrentPage(),d=this.canScrollPrev(),f=this.canScrollNext(),g=this.localize.dir()==="ltr";return _t`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${Wt({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
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

        ${this.navigation?_t`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${Wt({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!d})}"
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
                  class=${Wt({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!f})}
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
        ${this.pagination?_t`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${I5(K5(s),x=>{const S=x===o;return _t`
                    <button
                      part="pagination-item ${S?"pagination-item--active":""}"
                      class="${Wt({"carousel__pagination-item":!0,"carousel__pagination-item--active":S})}"
                      role="tab"
                      id="tab-${x+1}"
                      aria-controls="slide-${x+1}"
                      aria-selected="${S?"true":"false"}"
                      aria-label="${S?this.localize.term("slideNum",x+1):this.localize.term("goToSlide",x+1,s)}"
                      tabindex=${S?"0":"-1"}
                      @click=${()=>this.goToSlide(x*a)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};pa.styles=[Jt,q5];pa.dependencies={"sl-icon":Ue};v([A({type:Boolean,reflect:!0})],pa.prototype,"loop",2);v([A({type:Boolean,reflect:!0})],pa.prototype,"navigation",2);v([A({type:Boolean,reflect:!0})],pa.prototype,"pagination",2);v([A({type:Boolean,reflect:!0})],pa.prototype,"autoplay",2);v([A({type:Number,attribute:"autoplay-interval"})],pa.prototype,"autoplayInterval",2);v([A({type:Number,attribute:"slides-per-page"})],pa.prototype,"slidesPerPage",2);v([A({type:Number,attribute:"slides-per-move"})],pa.prototype,"slidesPerMove",2);v([A()],pa.prototype,"orientation",2);v([A({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],pa.prototype,"mouseDragging",2);v([$t(".carousel__slides")],pa.prototype,"scrollContainer",2);v([$t(".carousel__pagination")],pa.prototype,"paginationContainer",2);v([Qt()],pa.prototype,"activeSlide",2);v([Qt()],pa.prototype,"scrolling",2);v([Qt()],pa.prototype,"dragging",2);v([xu({passive:!0})],pa.prototype,"handleScroll",1);v([Dt("loop",{waitUntilFirstUpdate:!0}),Dt("slidesPerPage",{waitUntilFirstUpdate:!0})],pa.prototype,"initializeSlides",1);v([Dt("activeSlide")],pa.prototype,"handleSlideChange",1);v([Dt("slidesPerMove")],pa.prototype,"updateSlidesSnap",1);v([Dt("autoplay")],pa.prototype,"handleAutoplayChange",1);pa.define("sl-carousel");var F5=(a,i)=>{let s=0;return function(...o){window.clearTimeout(s),s=window.setTimeout(()=>{a.call(this,...o)},i)}},Zy=(a,i,s)=>{const o=a[i];a[i]=function(...d){o.call(this,...d),s.call(this,o,...d)}};(()=>{if(typeof window>"u")return;if(!("onscrollend"in window)){const i=new Set,s=new WeakMap,o=f=>{for(const g of f.changedTouches)i.add(g.identifier)},d=f=>{for(const g of f.changedTouches)i.delete(g.identifier)};document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",d,!0),document.addEventListener("touchcancel",d,!0),Zy(EventTarget.prototype,"addEventListener",function(f,g){if(g!=="scrollend")return;const x=F5(()=>{i.size?x():this.dispatchEvent(new Event("scrollend"))},100);f.call(this,"scroll",x,{passive:!0}),s.set(this,x)}),Zy(EventTarget.prototype,"removeEventListener",function(f,g){if(g!=="scrollend")return;const x=s.get(this);x&&f.call(this,"scroll",x,{passive:!0})})}})();var G5=Xt`
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
`,cx=class extends Gt{connectedCallback(){super.connectedCallback()}render(){return _t` <slot></slot> `}};cx.styles=[Jt,G5];cx.define("sl-carousel-item");var Y5=Xt`
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
`,Ds=class extends Gt{constructor(){super(...arguments),this.hasSlotController=new mn(this,"prefix","suffix"),this.renderType="button",this.rel="noreferrer noopener"}setRenderType(){const a=this.defaultSlot.assignedElements({flatten:!0}).filter(i=>i.tagName.toLowerCase()==="sl-dropdown").length>0;if(this.href){this.renderType="link";return}if(a){this.renderType="dropdown";return}this.renderType="button"}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return _t`
      <div
        part="base"
        class=${Wt({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test("prefix"),"breadcrumb-item--has-suffix":this.hasSlotController.test("suffix")})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType==="link"?_t`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${Ft(this.target?this.target:void 0)}"
                rel=${Ft(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:""}
        ${this.renderType==="button"?_t`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:""}
        ${this.renderType==="dropdown"?_t`
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
    `}};Ds.styles=[Jt,Y5];v([$t("slot:not([name])")],Ds.prototype,"defaultSlot",2);v([Qt()],Ds.prototype,"renderType",2);v([A()],Ds.prototype,"href",2);v([A()],Ds.prototype,"target",2);v([A()],Ds.prototype,"rel",2);v([Dt("href",{waitUntilFirstUpdate:!0})],Ds.prototype,"hrefChanged",1);Ds.define("sl-breadcrumb-item");zo.define("sl-button-group");var P5=Xt`
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
`,ir=class extends Gt{constructor(){super(...arguments),this.hasError=!1,this.image="",this.label="",this.initials="",this.loading="eager",this.shape="circle"}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit("sl-error")}render(){const a=_t`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `;let i=_t``;return this.initials?i=_t`<div part="initials" class="avatar__initials">${this.initials}</div>`:i=_t`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,_t`
      <div
        part="base"
        class=${Wt({avatar:!0,"avatar--circle":this.shape==="circle","avatar--rounded":this.shape==="rounded","avatar--square":this.shape==="square"})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?a:i}
      </div>
    `}};ir.styles=[Jt,P5];ir.dependencies={"sl-icon":Ue};v([Qt()],ir.prototype,"hasError",2);v([A()],ir.prototype,"image",2);v([A()],ir.prototype,"label",2);v([A()],ir.prototype,"initials",2);v([A()],ir.prototype,"loading",2);v([A({reflect:!0})],ir.prototype,"shape",2);v([Dt("image")],ir.prototype,"handleImageChange",1);ir.define("sl-avatar");var X5=Xt`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Kl=class extends Gt{constructor(){super(...arguments),this.localize=new ze(this),this.separatorDir=this.localize.dir(),this.label=""}getSeparator(){const i=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[i,...i.querySelectorAll("[id]")].forEach(s=>s.removeAttribute("id")),i.setAttribute("data-default",""),i.slot="separator",i}handleSlotChange(){const a=[...this.defaultSlot.assignedElements({flatten:!0})].filter(i=>i.tagName.toLowerCase()==="sl-breadcrumb-item");a.forEach((i,s)=>{const o=i.querySelector('[slot="separator"]');o===null?i.append(this.getSeparator()):o.hasAttribute("data-default")&&o.replaceWith(this.getSeparator()),s===a.length-1?i.setAttribute("aria-current","page"):i.removeAttribute("aria-current")})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),_t`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()==="rtl"?"chevron-left":"chevron-right"} library="system"></sl-icon>
        </slot>
      </span>
    `}};Kl.styles=[Jt,X5];Kl.dependencies={"sl-icon":Ue};v([$t("slot")],Kl.prototype,"defaultSlot",2);v([$t('slot[name="separator"]')],Kl.prototype,"separatorSlot",2);v([A()],Kl.prototype,"label",2);Kl.define("sl-breadcrumb");Me.define("sl-button");var Q5=Xt`
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
`,zi=class extends Gt{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){const a=document.createElement("canvas"),{width:i,height:s}=this.animatedImage;a.width=i,a.height=s,a.getContext("2d").drawImage(this.animatedImage,0,0,i,s),this.frozenFrame=a.toDataURL("image/gif"),this.isLoaded||(this.emit("sl-load"),this.isLoaded=!0)}handleError(){this.emit("sl-error")}handlePlayChange(){this.play&&(this.animatedImage.src="",this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return _t`
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

        ${this.isLoaded?_t`
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
    `}};zi.styles=[Jt,Q5];zi.dependencies={"sl-icon":Ue};v([$t(".animated-image__animated")],zi.prototype,"animatedImage",2);v([Qt()],zi.prototype,"frozenFrame",2);v([Qt()],zi.prototype,"isLoaded",2);v([A()],zi.prototype,"src",2);v([A()],zi.prototype,"alt",2);v([A({type:Boolean,reflect:!0})],zi.prototype,"play",2);v([Dt("play",{waitUntilFirstUpdate:!0})],zi.prototype,"handlePlayChange",1);v([Dt("src")],zi.prototype,"handleSrcChange",1);zi.define("sl-animated-image");var Z5=Xt`
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
`,Eu=class extends Gt{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return _t`
      <span
        part="base"
        class=${Wt({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Eu.styles=[Jt,Z5];v([A({reflect:!0})],Eu.prototype,"variant",2);v([A({type:Boolean,reflect:!0})],Eu.prototype,"pill",2);v([A({type:Boolean,reflect:!0})],Eu.prototype,"pulse",2);Eu.define("sl-badge");var W5=Xt`
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
`,Fn=class vo extends Gt{constructor(){super(...arguments),this.hasSlotController=new mn(this,"icon","suffix"),this.localize=new ze(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||(this.currentToastStack=Object.assign(document.createElement("div"),{className:"sl-toast-stack"})),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var i;(i=this.countdownAnimation)==null||i.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var i;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(i=this.countdownAnimation)==null||i.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){const{countdownElement:i}=this,s="100%",o="0";this.countdownAnimation=i.animate([{width:s},{width:o}],{duration:this.duration,easing:"linear"})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await za(this.base),this.base.hidden=!1;const{keyframes:i,options:s}=Je(this,"alert.show",{dir:this.localize.dir()});await ha(this.base,i,s),this.emit("sl-after-show")}else{pg(this),this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await za(this.base);const{keyframes:i,options:s}=Je(this,"alert.hide",{dir:this.localize.dir()});await ha(this.base,i,s),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,fn(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,fn(this,"sl-after-hide")}async toast(){return new Promise(i=>{this.handleCountdownChange(),vo.toastStack.parentElement===null&&document.body.append(vo.toastStack),vo.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{vo.toastStack.removeChild(this),i(),vo.toastStack.querySelector("sl-alert")===null&&vo.toastStack.remove()},{once:!0})})}render(){return _t`
      <div
        part="base"
        class=${Wt({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
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

        ${this.closable?_t`
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

        ${this.countdown?_t`
              <div
                class=${Wt({alert__countdown:!0,"alert__countdown--ltr":this.countdown==="ltr"})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:""}
      </div>
    `}};Fn.styles=[Jt,W5];Fn.dependencies={"sl-icon-button":Ra};v([$t('[part~="base"]')],Fn.prototype,"base",2);v([$t(".alert__countdown-elapsed")],Fn.prototype,"countdownElement",2);v([A({type:Boolean,reflect:!0})],Fn.prototype,"open",2);v([A({type:Boolean,reflect:!0})],Fn.prototype,"closable",2);v([A({reflect:!0})],Fn.prototype,"variant",2);v([A({type:Number})],Fn.prototype,"duration",2);v([A({type:String,reflect:!0})],Fn.prototype,"countdown",2);v([Qt()],Fn.prototype,"remainingTime",2);v([Dt("open",{waitUntilFirstUpdate:!0})],Fn.prototype,"handleOpenChange",1);v([Dt("duration")],Fn.prototype,"handleDurationChange",1);var J5=Fn;De("alert.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});De("alert.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});J5.define("sl-alert");const t3=[{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.4,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.43,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -30px, 0) scaleY(1.1)"},{offset:.53,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"},{offset:.7,easing:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",transform:"translate3d(0, -15px, 0) scaleY(1.05)"},{offset:.8,"transition-timing-function":"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0) scaleY(0.95)"},{offset:.9,transform:"translate3d(0, -4px, 0) scaleY(1.02)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)",transform:"translate3d(0, 0, 0)"}],e3=[{offset:0,opacity:"1"},{offset:.25,opacity:"0"},{offset:.5,opacity:"1"},{offset:.75,opacity:"0"},{offset:1,opacity:"1"}],a3=[{offset:0,transform:"translateX(0)"},{offset:.065,transform:"translateX(-6px) rotateY(-9deg)"},{offset:.185,transform:"translateX(5px) rotateY(7deg)"},{offset:.315,transform:"translateX(-3px) rotateY(-5deg)"},{offset:.435,transform:"translateX(2px) rotateY(3deg)"},{offset:.5,transform:"translateX(0)"}],n3=[{offset:0,transform:"scale(1)"},{offset:.14,transform:"scale(1.3)"},{offset:.28,transform:"scale(1)"},{offset:.42,transform:"scale(1.3)"},{offset:.7,transform:"scale(1)"}],i3=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.111,transform:"translate3d(0, 0, 0)"},{offset:.222,transform:"skewX(-12.5deg) skewY(-12.5deg)"},{offset:.33299999999999996,transform:"skewX(6.25deg) skewY(6.25deg)"},{offset:.444,transform:"skewX(-3.125deg) skewY(-3.125deg)"},{offset:.555,transform:"skewX(1.5625deg) skewY(1.5625deg)"},{offset:.6659999999999999,transform:"skewX(-0.78125deg) skewY(-0.78125deg)"},{offset:.777,transform:"skewX(0.390625deg) skewY(0.390625deg)"},{offset:.888,transform:"skewX(-0.1953125deg) skewY(-0.1953125deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],r3=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.5,transform:"scale3d(1.05, 1.05, 1.05)"},{offset:1,transform:"scale3d(1, 1, 1)"}],s3=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.3,transform:"scale3d(1.25, 0.75, 1)"},{offset:.4,transform:"scale3d(0.75, 1.25, 1)"},{offset:.5,transform:"scale3d(1.15, 0.85, 1)"},{offset:.65,transform:"scale3d(0.95, 1.05, 1)"},{offset:.75,transform:"scale3d(1.05, 0.95, 1)"},{offset:1,transform:"scale3d(1, 1, 1)"}],o3=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],l3=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(-10px, 0, 0)"},{offset:.2,transform:"translate3d(10px, 0, 0)"},{offset:.3,transform:"translate3d(-10px, 0, 0)"},{offset:.4,transform:"translate3d(10px, 0, 0)"},{offset:.5,transform:"translate3d(-10px, 0, 0)"},{offset:.6,transform:"translate3d(10px, 0, 0)"},{offset:.7,transform:"translate3d(-10px, 0, 0)"},{offset:.8,transform:"translate3d(10px, 0, 0)"},{offset:.9,transform:"translate3d(-10px, 0, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],c3=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.1,transform:"translate3d(0, -10px, 0)"},{offset:.2,transform:"translate3d(0, 10px, 0)"},{offset:.3,transform:"translate3d(0, -10px, 0)"},{offset:.4,transform:"translate3d(0, 10px, 0)"},{offset:.5,transform:"translate3d(0, -10px, 0)"},{offset:.6,transform:"translate3d(0, 10px, 0)"},{offset:.7,transform:"translate3d(0, -10px, 0)"},{offset:.8,transform:"translate3d(0, 10px, 0)"},{offset:.9,transform:"translate3d(0, -10px, 0)"},{offset:1,transform:"translate3d(0, 0, 0)"}],u3=[{offset:.2,transform:"rotate3d(0, 0, 1, 15deg)"},{offset:.4,transform:"rotate3d(0, 0, 1, -10deg)"},{offset:.6,transform:"rotate3d(0, 0, 1, 5deg)"},{offset:.8,transform:"rotate3d(0, 0, 1, -5deg)"},{offset:1,transform:"rotate3d(0, 0, 1, 0deg)"}],d3=[{offset:0,transform:"scale3d(1, 1, 1)"},{offset:.1,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.2,transform:"scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)"},{offset:.3,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.4,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.5,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.6,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.7,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:.8,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)"},{offset:.9,transform:"scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)"},{offset:1,transform:"scale3d(1, 1, 1)"}],h3=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:.15,transform:"translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)"},{offset:.3,transform:"translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)"},{offset:.45,transform:"translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)"},{offset:.6,transform:"translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)"},{offset:.75,transform:"translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],f3=[{offset:0,transform:"translateY(-1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],p3=[{offset:0,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],m3=[{offset:0,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],g3=[{offset:0,transform:"translateY(1200px) scale(0.7)",opacity:"0.7"},{offset:.8,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"scale(1)",opacity:"1"}],v3=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(700px) scale(0.7)",opacity:"0.7"}],b3=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(-2000px) scale(0.7)",opacity:"0.7"}],y3=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateX(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateX(2000px) scale(0.7)",opacity:"0.7"}],x3=[{offset:0,transform:"scale(1)",opacity:"1"},{offset:.2,transform:"translateY(0px) scale(0.7)",opacity:"0.7"},{offset:1,transform:"translateY(-700px) scale(0.7)",opacity:"0.7"}],w3=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.2,transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.2,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.4,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.4,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"scale3d(1.03, 1.03, 1.03)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.8,transform:"scale3d(0.97, 0.97, 0.97)"},{offset:.8,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,opacity:"1",transform:"scale3d(1, 1, 1)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],_3=[{offset:0,opacity:"0",transform:"translate3d(0, -3000px, 0) scaleY(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, 25px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, -10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, 5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],S3=[{offset:0,opacity:"0",transform:"translate3d(-3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(-10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],k3=[{offset:0,opacity:"0",transform:"translate3d(3000px, 0, 0) scaleX(3)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(-25px, 0, 0) scaleX(1)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(10px, 0, 0) scaleX(0.98)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(-5px, 0, 0) scaleX(0.995)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],C3=[{offset:0,opacity:"0",transform:"translate3d(0, 3000px, 0) scaleY(5)"},{offset:0,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.6,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.6,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.75,transform:"translate3d(0, 10px, 0) scaleY(0.95)"},{offset:.75,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:.9,transform:"translate3d(0, -5px, 0) scaleY(0.985)"},{offset:.9,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"},{offset:1,transform:"translate3d(0, 0, 0)"},{offset:1,easing:"cubic-bezier(0.215, 0.61, 0.355, 1)"}],A3=[{offset:.2,transform:"scale3d(0.9, 0.9, 0.9)"},{offset:.5,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:.55,opacity:"1",transform:"scale3d(1.1, 1.1, 1.1)"},{offset:1,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"}],E3=[{offset:.2,transform:"translate3d(0, 10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, -20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0) scaleY(3)"}],T3=[{offset:.2,opacity:"1",transform:"translate3d(20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0) scaleX(2)"}],z3=[{offset:.2,opacity:"1",transform:"translate3d(-20px, 0, 0) scaleX(0.9)"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0) scaleX(2)"}],N3=[{offset:.2,transform:"translate3d(0, -10px, 0) scaleY(0.985)"},{offset:.4,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:.45,opacity:"1",transform:"translate3d(0, 20px, 0) scaleY(0.9)"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0) scaleY(3)"}],O3=[{offset:0,opacity:"0"},{offset:1,opacity:"1"}],j3=[{offset:0,opacity:"0",transform:"translate3d(-100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],D3=[{offset:0,opacity:"0",transform:"translate3d(100%, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],R3=[{offset:0,opacity:"0",transform:"translate3d(0, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],M3=[{offset:0,opacity:"0",transform:"translate3d(0, -2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],$3=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],L3=[{offset:0,opacity:"0",transform:"translate3d(-2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],B3=[{offset:0,opacity:"0",transform:"translate3d(100%, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],H3=[{offset:0,opacity:"0",transform:"translate3d(2000px, 0, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],U3=[{offset:0,opacity:"0",transform:"translate3d(-100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],V3=[{offset:0,opacity:"0",transform:"translate3d(100%, -100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],q3=[{offset:0,opacity:"0",transform:"translate3d(0, 100%, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],I3=[{offset:0,opacity:"0",transform:"translate3d(0, 2000px, 0)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],K3=[{offset:0,opacity:"1"},{offset:1,opacity:"0"}],F3=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, 100%, 0)"}],G3=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, 100%, 0)"}],Y3=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 100%, 0)"}],P3=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, 2000px, 0)"}],X3=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-100%, 0, 0)"}],Q3=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(-2000px, 0, 0)"}],Z3=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0)"}],W3=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(2000px, 0, 0)"}],J3=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(-100%, -100%, 0)"}],tA=[{offset:0,opacity:"1",transform:"translate3d(0, 0, 0)"},{offset:1,opacity:"0",transform:"translate3d(100%, -100%, 0)"}],eA=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -100%, 0)"}],aA=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(0, -2000px, 0)"}],nA=[{offset:0,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)",easing:"ease-out"},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:"ease-out"},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:"ease-in"},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:"ease-in"},{offset:1,transform:"perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)",easing:"ease-in"}],iA=[{offset:0,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(1, 0, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(1, 0, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],rA=[{offset:0,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",easing:"ease-in",opacity:"0"},{offset:.4,transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)",easing:"ease-in"},{offset:.6,transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",opacity:"1"},{offset:.8,transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)"},{offset:1,transform:"perspective(400px)"}],sA=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(1, 0, 0, -20deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(1, 0, 0, 90deg)",opacity:"0"}],oA=[{offset:0,transform:"perspective(400px)"},{offset:.3,transform:"perspective(400px) rotate3d(0, 1, 0, -15deg)",opacity:"1"},{offset:1,transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)",opacity:"0"}],lA=[{offset:0,transform:"translate3d(-100%, 0, 0) skewX(30deg)",opacity:"0"},{offset:.6,transform:"skewX(-20deg)",opacity:"1"},{offset:.8,transform:"skewX(5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],cA=[{offset:0,transform:"translate3d(100%, 0, 0) skewX(-30deg)",opacity:"0"},{offset:.6,transform:"skewX(20deg)",opacity:"1"},{offset:.8,transform:"skewX(-5deg)"},{offset:1,transform:"translate3d(0, 0, 0)"}],uA=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(-100%, 0, 0) skewX(-30deg)",opacity:"0"}],dA=[{offset:0,opacity:"1"},{offset:1,transform:"translate3d(100%, 0, 0) skewX(30deg)",opacity:"0"}],hA=[{offset:0,transform:"rotate3d(0, 0, 1, -200deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],fA=[{offset:0,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],pA=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],mA=[{offset:0,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],gA=[{offset:0,transform:"rotate3d(0, 0, 1, -90deg)",opacity:"0"},{offset:1,transform:"translate3d(0, 0, 0)",opacity:"1"}],vA=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 200deg)",opacity:"0"}],bA=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 45deg)",opacity:"0"}],yA=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],xA=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, -45deg)",opacity:"0"}],wA=[{offset:0,opacity:"1"},{offset:1,transform:"rotate3d(0, 0, 1, 90deg)",opacity:"0"}],_A=[{offset:0,transform:"translate3d(0, -100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],SA=[{offset:0,transform:"translate3d(-100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],kA=[{offset:0,transform:"translate3d(100%, 0, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],CA=[{offset:0,transform:"translate3d(0, 100%, 0)",visibility:"visible"},{offset:1,transform:"translate3d(0, 0, 0)"}],AA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, 100%, 0)"}],EA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(-100%, 0, 0)"}],TA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(100%, 0, 0)"}],zA=[{offset:0,transform:"translate3d(0, 0, 0)"},{offset:1,visibility:"hidden",transform:"translate3d(0, -100%, 0)"}],NA=[{offset:0,easing:"ease-in-out"},{offset:.2,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.4,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:.6,transform:"rotate3d(0, 0, 1, 80deg)",easing:"ease-in-out"},{offset:.8,transform:"rotate3d(0, 0, 1, 60deg)",easing:"ease-in-out",opacity:"1"},{offset:1,transform:"translate3d(0, 700px, 0)",opacity:"0"}],OA=[{offset:0,opacity:"0",transform:"scale(0.1) rotate(30deg)","transform-origin":"center bottom"},{offset:.5,transform:"rotate(-10deg)"},{offset:.7,transform:"rotate(3deg)"},{offset:1,opacity:"1",transform:"scale(1)"}],jA=[{offset:0,opacity:"0",transform:"translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)"},{offset:1,opacity:"1",transform:"translate3d(0, 0, 0)"}],DA=[{offset:0,opacity:"1"},{offset:1,opacity:"0",transform:"translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)"}],RA=[{offset:0,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:.5,opacity:"1"}],MA=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],$A=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],LA=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],BA=[{offset:0,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:.6,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],HA=[{offset:0,opacity:"1"},{offset:.5,opacity:"0",transform:"scale3d(0.3, 0.3, 0.3)"},{offset:1,opacity:"0"}],UA=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],VA=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(-2000px, 0, 0)"}],qA=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)"},{offset:1,opacity:"0",transform:"scale(0.1) translate3d(2000px, 0, 0)"}],IA=[{offset:.4,opacity:"1",transform:"scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",easing:"cubic-bezier(0.55, 0.055, 0.675, 0.19)"},{offset:1,opacity:"0",transform:"scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)",easing:"cubic-bezier(0.175, 0.885, 0.32, 1)"}],ux={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",easeInSine:"cubic-bezier(0.47, 0, 0.745, 0.715)",easeOutSine:"cubic-bezier(0.39, 0.575, 0.565, 1)",easeInOutSine:"cubic-bezier(0.445, 0.05, 0.55, 0.95)",easeInQuad:"cubic-bezier(0.55, 0.085, 0.68, 0.53)",easeOutQuad:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",easeInOutQuad:"cubic-bezier(0.455, 0.03, 0.515, 0.955)",easeInCubic:"cubic-bezier(0.55, 0.055, 0.675, 0.19)",easeOutCubic:"cubic-bezier(0.215, 0.61, 0.355, 1)",easeInOutCubic:"cubic-bezier(0.645, 0.045, 0.355, 1)",easeInQuart:"cubic-bezier(0.895, 0.03, 0.685, 0.22)",easeOutQuart:"cubic-bezier(0.165, 0.84, 0.44, 1)",easeInOutQuart:"cubic-bezier(0.77, 0, 0.175, 1)",easeInQuint:"cubic-bezier(0.755, 0.05, 0.855, 0.06)",easeOutQuint:"cubic-bezier(0.23, 1, 0.32, 1)",easeInOutQuint:"cubic-bezier(0.86, 0, 0.07, 1)",easeInExpo:"cubic-bezier(0.95, 0.05, 0.795, 0.035)",easeOutExpo:"cubic-bezier(0.19, 1, 0.22, 1)",easeInOutExpo:"cubic-bezier(1, 0, 0, 1)",easeInCirc:"cubic-bezier(0.6, 0.04, 0.98, 0.335)",easeOutCirc:"cubic-bezier(0.075, 0.82, 0.165, 1)",easeInOutCirc:"cubic-bezier(0.785, 0.135, 0.15, 0.86)",easeInBack:"cubic-bezier(0.6, -0.28, 0.735, 0.045)",easeOutBack:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",easeInOutBack:"cubic-bezier(0.68, -0.55, 0.265, 1.55)"},KA=Object.freeze(Object.defineProperty({__proto__:null,backInDown:f3,backInLeft:p3,backInRight:m3,backInUp:g3,backOutDown:v3,backOutLeft:b3,backOutRight:y3,backOutUp:x3,bounce:t3,bounceIn:w3,bounceInDown:_3,bounceInLeft:S3,bounceInRight:k3,bounceInUp:C3,bounceOut:A3,bounceOutDown:E3,bounceOutLeft:T3,bounceOutRight:z3,bounceOutUp:N3,easings:ux,fadeIn:O3,fadeInBottomLeft:j3,fadeInBottomRight:D3,fadeInDown:R3,fadeInDownBig:M3,fadeInLeft:$3,fadeInLeftBig:L3,fadeInRight:B3,fadeInRightBig:H3,fadeInTopLeft:U3,fadeInTopRight:V3,fadeInUp:q3,fadeInUpBig:I3,fadeOut:K3,fadeOutBottomLeft:F3,fadeOutBottomRight:G3,fadeOutDown:Y3,fadeOutDownBig:P3,fadeOutLeft:X3,fadeOutLeftBig:Q3,fadeOutRight:Z3,fadeOutRightBig:W3,fadeOutTopLeft:J3,fadeOutTopRight:tA,fadeOutUp:eA,fadeOutUpBig:aA,flash:e3,flip:nA,flipInX:iA,flipInY:rA,flipOutX:sA,flipOutY:oA,headShake:a3,heartBeat:n3,hinge:NA,jackInTheBox:OA,jello:i3,lightSpeedInLeft:lA,lightSpeedInRight:cA,lightSpeedOutLeft:uA,lightSpeedOutRight:dA,pulse:r3,rollIn:jA,rollOut:DA,rotateIn:hA,rotateInDownLeft:fA,rotateInDownRight:pA,rotateInUpLeft:mA,rotateInUpRight:gA,rotateOut:vA,rotateOutDownLeft:bA,rotateOutDownRight:yA,rotateOutUpLeft:xA,rotateOutUpRight:wA,rubberBand:s3,shake:o3,shakeX:l3,shakeY:c3,slideInDown:_A,slideInLeft:SA,slideInRight:kA,slideInUp:CA,slideOutDown:AA,slideOutLeft:EA,slideOutRight:TA,slideOutUp:zA,swing:u3,tada:d3,wobble:h3,zoomIn:RA,zoomInDown:MA,zoomInLeft:$A,zoomInRight:LA,zoomInUp:BA,zoomOut:HA,zoomOutDown:UA,zoomOutLeft:VA,zoomOutRight:qA,zoomOutUp:IA},Symbol.toStringTag,{value:"Module"}));var FA=Xt`
  :host {
    display: contents;
  }
`,Ka=class extends Gt{constructor(){super(...arguments),this.hasStarted=!1,this.name="none",this.play=!1,this.delay=0,this.direction="normal",this.duration=1e3,this.easing="linear",this.endDelay=0,this.fill="auto",this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-finish")},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit("sl-cancel")}}get currentTime(){var a,i;return(i=(a=this.animation)==null?void 0:a.currentTime)!=null?i:0}set currentTime(a){this.animation&&(this.animation.currentTime=a)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){var a,i;const s=(a=ux[this.easing])!=null?a:this.easing,o=(i=this.keyframes)!=null?i:KA[this.name],f=(await this.defaultSlot).assignedElements()[0];return!f||!o?!1:(this.destroyAnimation(),this.animation=f.animate(o,{delay:this.delay,direction:this.direction,duration:this.duration,easing:s,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener("cancel",this.handleAnimationCancel),this.animation.addEventListener("finish",this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit("sl-start")):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener("cancel",this.handleAnimationCancel),this.animation.removeEventListener("finish",this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit("sl-start")),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var a;(a=this.animation)==null||a.cancel()}finish(){var a;(a=this.animation)==null||a.finish()}render(){return _t` <slot @slotchange=${this.handleSlotChange}></slot> `}};Ka.styles=[Jt,FA];v([SS("slot")],Ka.prototype,"defaultSlot",2);v([A()],Ka.prototype,"name",2);v([A({type:Boolean,reflect:!0})],Ka.prototype,"play",2);v([A({type:Number})],Ka.prototype,"delay",2);v([A()],Ka.prototype,"direction",2);v([A({type:Number})],Ka.prototype,"duration",2);v([A()],Ka.prototype,"easing",2);v([A({attribute:"end-delay",type:Number})],Ka.prototype,"endDelay",2);v([A()],Ka.prototype,"fill",2);v([A({type:Number})],Ka.prototype,"iterations",2);v([A({attribute:"iteration-start",type:Number})],Ka.prototype,"iterationStart",2);v([A({attribute:!1})],Ka.prototype,"keyframes",2);v([A({attribute:"playback-rate",type:Number})],Ka.prototype,"playbackRate",2);v([Dt(["name","delay","direction","duration","easing","endDelay","fill","iterations","iterationsStart","keyframes"])],Ka.prototype,"handleAnimationChange",1);v([Dt("play")],Ka.prototype,"handlePlayChange",1);v([Dt("playbackRate")],Ka.prototype,"handlePlaybackRateChange",1);Ka.define("sl-animation");Rm("/korean-srs/shoelace");mk({immediate:!0});Pm();const Em=document.querySelector('meta[name="theme-color"]'),GA=window.matchMedia("(prefers-color-scheme: dark)");function dx(){Em==null||Em.setAttribute("content",u1()==="dark"?"#0F1117":"#F8F9FA")}dx();GA.addEventListener("change",()=>{Pm(),dx()});b_.createRoot(document.getElementById("root")).render(m.jsx(te.StrictMode,{children:m.jsx(dk,{})}));
