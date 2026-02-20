function jf(u,c){for(var a=0;a<c.length;a++){const m=c[a];if(typeof m!="string"&&!Array.isArray(m)){for(const h in m)if(h!=="default"&&!(h in u)){const g=Object.getOwnPropertyDescriptor(m,h);g&&Object.defineProperty(u,h,g.get?g:{enumerable:!0,get:()=>m[h]})}}}return Object.freeze(Object.defineProperty(u,Symbol.toStringTag,{value:"Module"}))}(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const h of document.querySelectorAll('link[rel="modulepreload"]'))m(h);new MutationObserver(h=>{for(const g of h)if(g.type==="childList")for(const j of g.addedNodes)j.tagName==="LINK"&&j.rel==="modulepreload"&&m(j)}).observe(document,{childList:!0,subtree:!0});function a(h){const g={};return h.integrity&&(g.integrity=h.integrity),h.referrerPolicy&&(g.referrerPolicy=h.referrerPolicy),h.crossOrigin==="use-credentials"?g.credentials="include":h.crossOrigin==="anonymous"?g.credentials="omit":g.credentials="same-origin",g}function m(h){if(h.ep)return;h.ep=!0;const g=a(h);fetch(h.href,g)}})();function cc(u){return u&&u.__esModule&&Object.prototype.hasOwnProperty.call(u,"default")?u.default:u}var Fs={exports:{}},Pr={},As={exports:{}},X={};var Hu;function Nf(){if(Hu)return X;Hu=1;var u=Symbol.for("react.element"),c=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),h=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),j=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),R=Symbol.iterator;function D(v){return v===null||typeof v!="object"?null:(v=R&&v[R]||v["@@iterator"],typeof v=="function"?v:null)}var Y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,$={};function L(v,C,G){this.props=v,this.context=C,this.refs=$,this.updater=G||Y}L.prototype.isReactComponent={},L.prototype.setState=function(v,C){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,C,"setState")},L.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function ie(){}ie.prototype=L.prototype;function se(v,C,G){this.props=v,this.context=C,this.refs=$,this.updater=G||Y}var q=se.prototype=new ie;q.constructor=se,K(q,L.prototype),q.isPureReactComponent=!0;var Z=Array.isArray,ee=Object.prototype.hasOwnProperty,ze={current:null},Me={key:!0,ref:!0,__self:!0,__source:!0};function Ve(v,C,G){var J,ne={},re=null,ue=null;if(C!=null)for(J in C.ref!==void 0&&(ue=C.ref),C.key!==void 0&&(re=""+C.key),C)ee.call(C,J)&&!Me.hasOwnProperty(J)&&(ne[J]=C[J]);var oe=arguments.length-2;if(oe===1)ne.children=G;else if(1<oe){for(var pe=Array(oe),Je=0;Je<oe;Je++)pe[Je]=arguments[Je+2];ne.children=pe}if(v&&v.defaultProps)for(J in oe=v.defaultProps,oe)ne[J]===void 0&&(ne[J]=oe[J]);return{$$typeof:u,type:v,key:re,ref:ue,props:ne,_owner:ze.current}}function vt(v,C){return{$$typeof:u,type:v.type,key:C,ref:v.ref,props:v.props,_owner:v._owner}}function nt(v){return typeof v=="object"&&v!==null&&v.$$typeof===u}function ye(v){var C={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(G){return C[G]})}var Be=/\/+/g;function xe(v,C){return typeof v=="object"&&v!==null&&v.key!=null?ye(""+v.key):C.toString(36)}function Te(v,C,G,J,ne){var re=typeof v;(re==="undefined"||re==="boolean")&&(v=null);var ue=!1;if(v===null)ue=!0;else switch(re){case"string":case"number":ue=!0;break;case"object":switch(v.$$typeof){case u:case c:ue=!0}}if(ue)return ue=v,ne=ne(ue),v=J===""?"."+xe(ue,0):J,Z(ne)?(G="",v!=null&&(G=v.replace(Be,"$&/")+"/"),Te(ne,C,G,"",function(Je){return Je})):ne!=null&&(nt(ne)&&(ne=vt(ne,G+(!ne.key||ue&&ue.key===ne.key?"":(""+ne.key).replace(Be,"$&/")+"/")+v)),C.push(ne)),1;if(ue=0,J=J===""?".":J+":",Z(v))for(var oe=0;oe<v.length;oe++){re=v[oe];var pe=J+xe(re,oe);ue+=Te(re,C,G,pe,ne)}else if(pe=D(v),typeof pe=="function")for(v=pe.call(v),oe=0;!(re=v.next()).done;)re=re.value,pe=J+xe(re,oe++),ue+=Te(re,C,G,pe,ne);else if(re==="object")throw C=String(v),Error("Objects are not valid as a React child (found: "+(C==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.");return ue}function De(v,C,G){if(v==null)return v;var J=[],ne=0;return Te(v,J,"","",function(re){return C.call(G,re,ne++)}),J}function Ee(v){if(v._status===-1){var C=v._result;C=C(),C.then(function(G){(v._status===0||v._status===-1)&&(v._status=1,v._result=G)},function(G){(v._status===0||v._status===-1)&&(v._status=2,v._result=G)}),v._status===-1&&(v._status=0,v._result=C)}if(v._status===1)return v._result.default;throw v._result}var de={current:null},O={transition:null},H={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:O,ReactCurrentOwner:ze};function A(){throw Error("act(...) is not supported in production builds of React.")}return X.Children={map:De,forEach:function(v,C,G){De(v,function(){C.apply(this,arguments)},G)},count:function(v){var C=0;return De(v,function(){C++}),C},toArray:function(v){return De(v,function(C){return C})||[]},only:function(v){if(!nt(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},X.Component=L,X.Fragment=a,X.Profiler=h,X.PureComponent=se,X.StrictMode=m,X.Suspense=k,X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=H,X.act=A,X.cloneElement=function(v,C,G){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var J=K({},v.props),ne=v.key,re=v.ref,ue=v._owner;if(C!=null){if(C.ref!==void 0&&(re=C.ref,ue=ze.current),C.key!==void 0&&(ne=""+C.key),v.type&&v.type.defaultProps)var oe=v.type.defaultProps;for(pe in C)ee.call(C,pe)&&!Me.hasOwnProperty(pe)&&(J[pe]=C[pe]===void 0&&oe!==void 0?oe[pe]:C[pe])}var pe=arguments.length-2;if(pe===1)J.children=G;else if(1<pe){oe=Array(pe);for(var Je=0;Je<pe;Je++)oe[Je]=arguments[Je+2];J.children=oe}return{$$typeof:u,type:v.type,key:ne,ref:re,props:J,_owner:ue}},X.createContext=function(v){return v={$$typeof:j,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:g,_context:v},v.Consumer=v},X.createElement=Ve,X.createFactory=function(v){var C=Ve.bind(null,v);return C.type=v,C},X.createRef=function(){return{current:null}},X.forwardRef=function(v){return{$$typeof:N,render:v}},X.isValidElement=nt,X.lazy=function(v){return{$$typeof:z,_payload:{_status:-1,_result:v},_init:Ee}},X.memo=function(v,C){return{$$typeof:_,type:v,compare:C===void 0?null:C}},X.startTransition=function(v){var C=O.transition;O.transition={};try{v()}finally{O.transition=C}},X.unstable_act=A,X.useCallback=function(v,C){return de.current.useCallback(v,C)},X.useContext=function(v){return de.current.useContext(v)},X.useDebugValue=function(){},X.useDeferredValue=function(v){return de.current.useDeferredValue(v)},X.useEffect=function(v,C){return de.current.useEffect(v,C)},X.useId=function(){return de.current.useId()},X.useImperativeHandle=function(v,C,G){return de.current.useImperativeHandle(v,C,G)},X.useInsertionEffect=function(v,C){return de.current.useInsertionEffect(v,C)},X.useLayoutEffect=function(v,C){return de.current.useLayoutEffect(v,C)},X.useMemo=function(v,C){return de.current.useMemo(v,C)},X.useReducer=function(v,C,G){return de.current.useReducer(v,C,G)},X.useRef=function(v){return de.current.useRef(v)},X.useState=function(v){return de.current.useState(v)},X.useSyncExternalStore=function(v,C,G){return de.current.useSyncExternalStore(v,C,G)},X.useTransition=function(){return de.current.useTransition()},X.version="18.3.1",X}var Qu;function Qs(){return Qu||(Qu=1,As.exports=Nf()),As.exports}var Yu;function kf(){if(Yu)return Pr;Yu=1;var u=Qs(),c=Symbol.for("react.element"),a=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,h=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function j(N,k,_){var z,R={},D=null,Y=null;_!==void 0&&(D=""+_),k.key!==void 0&&(D=""+k.key),k.ref!==void 0&&(Y=k.ref);for(z in k)m.call(k,z)&&!g.hasOwnProperty(z)&&(R[z]=k[z]);if(N&&N.defaultProps)for(z in k=N.defaultProps,k)R[z]===void 0&&(R[z]=k[z]);return{$$typeof:c,type:N,key:D,ref:Y,props:R,_owner:h.current}}return Pr.Fragment=a,Pr.jsx=j,Pr.jsxs=j,Pr}var Ku;function Sf(){return Ku||(Ku=1,Fs.exports=kf()),Fs.exports}var s=Sf(),S=Qs();const dc=cc(S),Ef=jf({__proto__:null,default:dc},[S]);var Bl={},Is={exports:{}},Xe={},Us={exports:{}},Bs={};var Gu;function Cf(){return Gu||(Gu=1,(function(u){function c(O,H){var A=O.length;O.push(H);e:for(;0<A;){var v=A-1>>>1,C=O[v];if(0<h(C,H))O[v]=H,O[A]=C,A=v;else break e}}function a(O){return O.length===0?null:O[0]}function m(O){if(O.length===0)return null;var H=O[0],A=O.pop();if(A!==H){O[0]=A;e:for(var v=0,C=O.length,G=C>>>1;v<G;){var J=2*(v+1)-1,ne=O[J],re=J+1,ue=O[re];if(0>h(ne,A))re<C&&0>h(ue,ne)?(O[v]=ue,O[re]=A,v=re):(O[v]=ne,O[J]=A,v=J);else if(re<C&&0>h(ue,A))O[v]=ue,O[re]=A,v=re;else break e}}return H}function h(O,H){var A=O.sortIndex-H.sortIndex;return A!==0?A:O.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var g=performance;u.unstable_now=function(){return g.now()}}else{var j=Date,N=j.now();u.unstable_now=function(){return j.now()-N}}var k=[],_=[],z=1,R=null,D=3,Y=!1,K=!1,$=!1,L=typeof setTimeout=="function"?setTimeout:null,ie=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function q(O){for(var H=a(_);H!==null;){if(H.callback===null)m(_);else if(H.startTime<=O)m(_),H.sortIndex=H.expirationTime,c(k,H);else break;H=a(_)}}function Z(O){if($=!1,q(O),!K)if(a(k)!==null)K=!0,Ee(ee);else{var H=a(_);H!==null&&de(Z,H.startTime-O)}}function ee(O,H){K=!1,$&&($=!1,ie(Ve),Ve=-1),Y=!0;var A=D;try{for(q(H),R=a(k);R!==null&&(!(R.expirationTime>H)||O&&!ye());){var v=R.callback;if(typeof v=="function"){R.callback=null,D=R.priorityLevel;var C=v(R.expirationTime<=H);H=u.unstable_now(),typeof C=="function"?R.callback=C:R===a(k)&&m(k),q(H)}else m(k);R=a(k)}if(R!==null)var G=!0;else{var J=a(_);J!==null&&de(Z,J.startTime-H),G=!1}return G}finally{R=null,D=A,Y=!1}}var ze=!1,Me=null,Ve=-1,vt=5,nt=-1;function ye(){return!(u.unstable_now()-nt<vt)}function Be(){if(Me!==null){var O=u.unstable_now();nt=O;var H=!0;try{H=Me(!0,O)}finally{H?xe():(ze=!1,Me=null)}}else ze=!1}var xe;if(typeof se=="function")xe=function(){se(Be)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,De=Te.port2;Te.port1.onmessage=Be,xe=function(){De.postMessage(null)}}else xe=function(){L(Be,0)};function Ee(O){Me=O,ze||(ze=!0,xe())}function de(O,H){Ve=L(function(){O(u.unstable_now())},H)}u.unstable_IdlePriority=5,u.unstable_ImmediatePriority=1,u.unstable_LowPriority=4,u.unstable_NormalPriority=3,u.unstable_Profiling=null,u.unstable_UserBlockingPriority=2,u.unstable_cancelCallback=function(O){O.callback=null},u.unstable_continueExecution=function(){K||Y||(K=!0,Ee(ee))},u.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):vt=0<O?Math.floor(1e3/O):5},u.unstable_getCurrentPriorityLevel=function(){return D},u.unstable_getFirstCallbackNode=function(){return a(k)},u.unstable_next=function(O){switch(D){case 1:case 2:case 3:var H=3;break;default:H=D}var A=D;D=H;try{return O()}finally{D=A}},u.unstable_pauseExecution=function(){},u.unstable_requestPaint=function(){},u.unstable_runWithPriority=function(O,H){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var A=D;D=O;try{return H()}finally{D=A}},u.unstable_scheduleCallback=function(O,H,A){var v=u.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?v+A:v):A=v,O){case 1:var C=-1;break;case 2:C=250;break;case 5:C=1073741823;break;case 4:C=1e4;break;default:C=5e3}return C=A+C,O={id:z++,callback:H,priorityLevel:O,startTime:A,expirationTime:C,sortIndex:-1},A>v?(O.sortIndex=A,c(_,O),a(k)===null&&O===a(_)&&($?(ie(Ve),Ve=-1):$=!0,de(Z,A-v))):(O.sortIndex=C,c(k,O),K||Y||(K=!0,Ee(ee))),O},u.unstable_shouldYield=ye,u.unstable_wrapCallback=function(O){var H=D;return function(){var A=D;D=H;try{return O.apply(this,arguments)}finally{D=A}}}})(Bs)),Bs}var Xu;function Pf(){return Xu||(Xu=1,Us.exports=Cf()),Us.exports}var Ju;function Rf(){if(Ju)return Xe;Ju=1;var u=Qs(),c=Pf();function a(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,h={};function g(e,t){j(e,t),j(e+"Capture",t)}function j(e,t){for(h[e]=t,e=0;e<t.length;e++)m.add(t[e])}var N=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),k=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,z={},R={};function D(e){return k.call(R,e)?!0:k.call(z,e)?!1:_.test(e)?R[e]=!0:(z[e]=!0,!1)}function Y(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K(e,t,n,r){if(t===null||typeof t>"u"||Y(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){L[e]=new $(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];L[t]=new $(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){L[e]=new $(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){L[e]=new $(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){L[e]=new $(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){L[e]=new $(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){L[e]=new $(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){L[e]=new $(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){L[e]=new $(e,5,!1,e.toLowerCase(),null,!1,!1)});var ie=/[\-:]([a-z])/g;function se(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ie,se);L[t]=new $(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ie,se);L[t]=new $(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ie,se);L[t]=new $(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){L[e]=new $(e,1,!1,e.toLowerCase(),null,!1,!1)}),L.xlinkHref=new $("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){L[e]=new $(e,1,!1,e.toLowerCase(),null,!0,!0)});function q(e,t,n,r){var l=L.hasOwnProperty(t)?L[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(K(t,n,l,r)&&(n=null),r||l===null?D(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Z=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ee=Symbol.for("react.element"),ze=Symbol.for("react.portal"),Me=Symbol.for("react.fragment"),Ve=Symbol.for("react.strict_mode"),vt=Symbol.for("react.profiler"),nt=Symbol.for("react.provider"),ye=Symbol.for("react.context"),Be=Symbol.for("react.forward_ref"),xe=Symbol.for("react.suspense"),Te=Symbol.for("react.suspense_list"),De=Symbol.for("react.memo"),Ee=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),O=Symbol.iterator;function H(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var A=Object.assign,v;function C(e){if(v===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var G=!1;function J(e,t){if(!e||G)return"";G=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var r=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){r=w}e.call(t.prototype)}else{try{throw Error()}catch(w){r=w}e()}}catch(w){if(w&&r&&typeof w.stack=="string"){for(var l=w.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,d=i.length-1;1<=o&&0<=d&&l[o]!==i[d];)d--;for(;1<=o&&0<=d;o--,d--)if(l[o]!==i[d]){if(o!==1||d!==1)do if(o--,d--,0>d||l[o]!==i[d]){var f=`
`+l[o].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=o&&0<=d);break}}}finally{G=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?C(e):""}function ne(e){switch(e.tag){case 5:return C(e.type);case 16:return C("Lazy");case 13:return C("Suspense");case 19:return C("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1),e;case 11:return e=J(e.type.render,!1),e;case 1:return e=J(e.type,!0),e;default:return""}}function re(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Me:return"Fragment";case ze:return"Portal";case vt:return"Profiler";case Ve:return"StrictMode";case xe:return"Suspense";case Te:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ye:return(e.displayName||"Context")+".Consumer";case nt:return(e._context.displayName||"Context")+".Provider";case Be:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case De:return t=e.displayName||null,t!==null?t:re(e.type)||"Memo";case Ee:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(t);case 8:return t===Ve?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function oe(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Je(e){var t=pe(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function zr(e){e._valueTracker||(e._valueTracker=Je(e))}function Xs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pe(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Tr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vl(e,t){var n=t.checked;return A({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Js(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=oe(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Zs(e,t){t=t.checked,t!=null&&q(e,"checked",t,!1)}function Hl(e,t){Zs(e,t);var n=oe(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ql(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ql(e,t.type,oe(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function qs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ql(e,t,n){(t!=="number"||Tr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var $n=Array.isArray;function hn(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+oe(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(a(91));return A({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eo(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(a(92));if($n(n)){if(1<n.length)throw Error(a(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:oe(n)}}function to(e,t){var n=oe(t.value),r=oe(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function no(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ro(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ro(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Lr,lo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Lr=Lr||document.createElement("div"),Lr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Lr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sc=["Webkit","ms","Moz","O"];Object.keys(Vn).forEach(function(e){Sc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vn[t]=Vn[e]})});function io(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vn.hasOwnProperty(e)&&Vn[e]?(""+t).trim():t+"px"}function so(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=io(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ec=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gl(e,t){if(t){if(Ec[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(a(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(a(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(a(61))}if(t.style!=null&&typeof t.style!="object")throw Error(a(62))}}function Xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jl=null;function Zl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ql=null,gn=null,vn=null;function oo(e){if(e=fr(e)){if(typeof ql!="function")throw Error(a(280));var t=e.stateNode;t&&(t=nl(t),ql(e.stateNode,e.type,t))}}function ao(e){gn?vn?vn.push(e):vn=[e]:gn=e}function uo(){if(gn){var e=gn,t=vn;if(vn=gn=null,oo(e),t)for(e=0;e<t.length;e++)oo(t[e])}}function co(e,t){return e(t)}function fo(){}var ei=!1;function mo(e,t,n){if(ei)return e(t,n);ei=!0;try{return co(e,t,n)}finally{ei=!1,(gn!==null||vn!==null)&&(fo(),uo())}}function Hn(e,t){var n=e.stateNode;if(n===null)return null;var r=nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(a(231,t,typeof n));return n}var ti=!1;if(N)try{var Qn={};Object.defineProperty(Qn,"passive",{get:function(){ti=!0}}),window.addEventListener("test",Qn,Qn),window.removeEventListener("test",Qn,Qn)}catch{ti=!1}function Cc(e,t,n,r,l,i,o,d,f){var w=Array.prototype.slice.call(arguments,3);try{t.apply(n,w)}catch(P){this.onError(P)}}var Yn=!1,Or=null,Mr=!1,ni=null,Pc={onError:function(e){Yn=!0,Or=e}};function Rc(e,t,n,r,l,i,o,d,f){Yn=!1,Or=null,Cc.apply(Pc,arguments)}function bc(e,t,n,r,l,i,o,d,f){if(Rc.apply(this,arguments),Yn){if(Yn){var w=Or;Yn=!1,Or=null}else throw Error(a(198));Mr||(Mr=!0,ni=w)}}function qt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function po(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ho(e){if(qt(e)!==e)throw Error(a(188))}function _c(e){var t=e.alternate;if(!t){if(t=qt(e),t===null)throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return ho(l),e;if(i===r)return ho(l),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,d=l.child;d;){if(d===n){o=!0,n=l,r=i;break}if(d===r){o=!0,r=l,n=i;break}d=d.sibling}if(!o){for(d=i.child;d;){if(d===n){o=!0,n=i,r=l;break}if(d===r){o=!0,r=i,n=l;break}d=d.sibling}if(!o)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(n.tag!==3)throw Error(a(188));return n.stateNode.current===n?e:t}function go(e){return e=_c(e),e!==null?vo(e):null}function vo(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=vo(e);if(t!==null)return t;e=e.sibling}return null}var yo=c.unstable_scheduleCallback,xo=c.unstable_cancelCallback,zc=c.unstable_shouldYield,Tc=c.unstable_requestPaint,je=c.unstable_now,Lc=c.unstable_getCurrentPriorityLevel,ri=c.unstable_ImmediatePriority,wo=c.unstable_UserBlockingPriority,Dr=c.unstable_NormalPriority,Oc=c.unstable_LowPriority,jo=c.unstable_IdlePriority,Fr=null,yt=null;function Mc(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(Fr,e,void 0,(e.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:Ac,Dc=Math.log,Fc=Math.LN2;function Ac(e){return e>>>=0,e===0?32:31-(Dc(e)/Fc|0)|0}var Ar=64,Ir=4194304;function Kn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ur(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var d=o&~l;d!==0?r=Kn(d):(i&=o,i!==0&&(r=Kn(i)))}else o=n&~l,o!==0?r=Kn(o):i!==0&&(r=Kn(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ct(t),l=1<<n,r|=e[n],t&=~l;return r}function Ic(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Uc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ct(i),d=1<<o,f=l[o];f===-1?((d&n)===0||(d&r)!==0)&&(l[o]=Ic(d,t)):f<=t&&(e.expiredLanes|=d),i&=~d}}function li(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function No(){var e=Ar;return Ar<<=1,(Ar&4194240)===0&&(Ar=64),e}function ii(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ct(t),e[t]=n}function Bc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-ct(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function si(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ct(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var ae=0;function ko(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var So,oi,Eo,Co,Po,ai=!1,Br=[],zt=null,Tt=null,Lt=null,Xn=new Map,Jn=new Map,Ot=[],$c="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ro(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Xn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Jn.delete(t.pointerId)}}function Zn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=fr(t),t!==null&&oi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Wc(e,t,n,r,l){switch(t){case"focusin":return zt=Zn(zt,e,t,n,r,l),!0;case"dragenter":return Tt=Zn(Tt,e,t,n,r,l),!0;case"mouseover":return Lt=Zn(Lt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Xn.set(i,Zn(Xn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Jn.set(i,Zn(Jn.get(i)||null,e,t,n,r,l)),!0}return!1}function bo(e){var t=en(e.target);if(t!==null){var n=qt(t);if(n!==null){if(t=n.tag,t===13){if(t=po(n),t!==null){e.blockedOn=t,Po(e.priority,function(){Eo(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $r(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ci(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Jl=r,n.target.dispatchEvent(r),Jl=null}else return t=fr(n),t!==null&&oi(t),e.blockedOn=n,!1;t.shift()}return!0}function _o(e,t,n){$r(e)&&n.delete(t)}function Vc(){ai=!1,zt!==null&&$r(zt)&&(zt=null),Tt!==null&&$r(Tt)&&(Tt=null),Lt!==null&&$r(Lt)&&(Lt=null),Xn.forEach(_o),Jn.forEach(_o)}function qn(e,t){e.blockedOn===t&&(e.blockedOn=null,ai||(ai=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Vc)))}function er(e){function t(l){return qn(l,e)}if(0<Br.length){qn(Br[0],e);for(var n=1;n<Br.length;n++){var r=Br[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&qn(zt,e),Tt!==null&&qn(Tt,e),Lt!==null&&qn(Lt,e),Xn.forEach(t),Jn.forEach(t),n=0;n<Ot.length;n++)r=Ot[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ot.length&&(n=Ot[0],n.blockedOn===null);)bo(n),n.blockedOn===null&&Ot.shift()}var yn=Z.ReactCurrentBatchConfig,Wr=!0;function Hc(e,t,n,r){var l=ae,i=yn.transition;yn.transition=null;try{ae=1,ui(e,t,n,r)}finally{ae=l,yn.transition=i}}function Qc(e,t,n,r){var l=ae,i=yn.transition;yn.transition=null;try{ae=4,ui(e,t,n,r)}finally{ae=l,yn.transition=i}}function ui(e,t,n,r){if(Wr){var l=ci(e,t,n,r);if(l===null)Pi(e,t,r,Vr,n),Ro(e,r);else if(Wc(l,e,t,n,r))r.stopPropagation();else if(Ro(e,r),t&4&&-1<$c.indexOf(e)){for(;l!==null;){var i=fr(l);if(i!==null&&So(i),i=ci(e,t,n,r),i===null&&Pi(e,t,r,Vr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else Pi(e,t,r,null,n)}}var Vr=null;function ci(e,t,n,r){if(Vr=null,e=Zl(r),e=en(e),e!==null)if(t=qt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=po(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vr=e,null}function zo(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Lc()){case ri:return 1;case wo:return 4;case Dr:case Oc:return 16;case jo:return 536870912;default:return 16}default:return 16}}var Mt=null,di=null,Hr=null;function To(){if(Hr)return Hr;var e,t=di,n=t.length,r,l="value"in Mt?Mt.value:Mt.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Hr=l.slice(e,1<r?1-r:void 0)}function Qr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yr(){return!0}function Lo(){return!1}function Ze(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(i):i[d]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Yr:Lo,this.isPropagationStopped=Lo,this}return A(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yr)},persist:function(){},isPersistent:Yr}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fi=Ze(xn),tr=A({},xn,{view:0,detail:0}),Yc=Ze(tr),mi,pi,nr,Kr=A({},tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nr&&(nr&&e.type==="mousemove"?(mi=e.screenX-nr.screenX,pi=e.screenY-nr.screenY):pi=mi=0,nr=e),mi)},movementY:function(e){return"movementY"in e?e.movementY:pi}}),Oo=Ze(Kr),Kc=A({},Kr,{dataTransfer:0}),Gc=Ze(Kc),Xc=A({},tr,{relatedTarget:0}),hi=Ze(Xc),Jc=A({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Zc=Ze(Jc),qc=A({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ed=Ze(qc),td=A({},xn,{data:0}),Mo=Ze(td),nd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ld={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function id(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ld[e])?!!t[e]:!1}function gi(){return id}var sd=A({},tr,{key:function(e){if(e.key){var t=nd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Qr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gi,charCode:function(e){return e.type==="keypress"?Qr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),od=Ze(sd),ad=A({},Kr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Do=Ze(ad),ud=A({},tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gi}),cd=Ze(ud),dd=A({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),fd=Ze(dd),md=A({},Kr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pd=Ze(md),hd=[9,13,27,32],vi=N&&"CompositionEvent"in window,rr=null;N&&"documentMode"in document&&(rr=document.documentMode);var gd=N&&"TextEvent"in window&&!rr,Fo=N&&(!vi||rr&&8<rr&&11>=rr),Ao=" ",Io=!1;function Uo(e,t){switch(e){case"keyup":return hd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bo(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function vd(e,t){switch(e){case"compositionend":return Bo(t);case"keypress":return t.which!==32?null:(Io=!0,Ao);case"textInput":return e=t.data,e===Ao&&Io?null:e;default:return null}}function yd(e,t){if(wn)return e==="compositionend"||!vi&&Uo(e,t)?(e=To(),Hr=di=Mt=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Fo&&t.locale!=="ko"?null:t.data;default:return null}}var xd={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $o(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xd[e.type]:t==="textarea"}function Wo(e,t,n,r){ao(r),t=qr(t,"onChange"),0<t.length&&(n=new fi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var lr=null,ir=null;function wd(e){oa(e,0)}function Gr(e){var t=En(e);if(Xs(t))return e}function jd(e,t){if(e==="change")return t}var Vo=!1;if(N){var yi;if(N){var xi="oninput"in document;if(!xi){var Ho=document.createElement("div");Ho.setAttribute("oninput","return;"),xi=typeof Ho.oninput=="function"}yi=xi}else yi=!1;Vo=yi&&(!document.documentMode||9<document.documentMode)}function Qo(){lr&&(lr.detachEvent("onpropertychange",Yo),ir=lr=null)}function Yo(e){if(e.propertyName==="value"&&Gr(ir)){var t=[];Wo(t,ir,e,Zl(e)),mo(wd,t)}}function Nd(e,t,n){e==="focusin"?(Qo(),lr=t,ir=n,lr.attachEvent("onpropertychange",Yo)):e==="focusout"&&Qo()}function kd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gr(ir)}function Sd(e,t){if(e==="click")return Gr(t)}function Ed(e,t){if(e==="input"||e==="change")return Gr(t)}function Cd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dt=typeof Object.is=="function"?Object.is:Cd;function sr(e,t){if(dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!k.call(t,l)||!dt(e[l],t[l]))return!1}return!0}function Ko(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Go(e,t){var n=Ko(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ko(n)}}function Xo(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Xo(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Jo(){for(var e=window,t=Tr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Tr(e.document)}return t}function wi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Pd(e){var t=Jo(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Xo(n.ownerDocument.documentElement,n)){if(r!==null&&wi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Go(n,i);var o=Go(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rd=N&&"documentMode"in document&&11>=document.documentMode,jn=null,ji=null,or=null,Ni=!1;function Zo(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ni||jn==null||jn!==Tr(r)||(r=jn,"selectionStart"in r&&wi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),or&&sr(or,r)||(or=r,r=qr(ji,"onSelect"),0<r.length&&(t=new fi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=jn)))}function Xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:Xr("Animation","AnimationEnd"),animationiteration:Xr("Animation","AnimationIteration"),animationstart:Xr("Animation","AnimationStart"),transitionend:Xr("Transition","TransitionEnd")},ki={},qo={};N&&(qo=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function Jr(e){if(ki[e])return ki[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in qo)return ki[e]=t[n];return e}var ea=Jr("animationend"),ta=Jr("animationiteration"),na=Jr("animationstart"),ra=Jr("transitionend"),la=new Map,ia="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dt(e,t){la.set(e,t),g(t,[e])}for(var Si=0;Si<ia.length;Si++){var Ei=ia[Si],bd=Ei.toLowerCase(),_d=Ei[0].toUpperCase()+Ei.slice(1);Dt(bd,"on"+_d)}Dt(ea,"onAnimationEnd"),Dt(ta,"onAnimationIteration"),Dt(na,"onAnimationStart"),Dt("dblclick","onDoubleClick"),Dt("focusin","onFocus"),Dt("focusout","onBlur"),Dt(ra,"onTransitionEnd"),j("onMouseEnter",["mouseout","mouseover"]),j("onMouseLeave",["mouseout","mouseover"]),j("onPointerEnter",["pointerout","pointerover"]),j("onPointerLeave",["pointerout","pointerover"]),g("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),g("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),g("onBeforeInput",["compositionend","keypress","textInput","paste"]),g("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),g("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ar="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zd=new Set("cancel close invalid load scroll toggle".split(" ").concat(ar));function sa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,bc(r,t,void 0,e),e.currentTarget=null}function oa(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var d=r[o],f=d.instance,w=d.currentTarget;if(d=d.listener,f!==i&&l.isPropagationStopped())break e;sa(l,d,w),i=f}else for(o=0;o<r.length;o++){if(d=r[o],f=d.instance,w=d.currentTarget,d=d.listener,f!==i&&l.isPropagationStopped())break e;sa(l,d,w),i=f}}}if(Mr)throw e=ni,Mr=!1,ni=null,e}function fe(e,t){var n=t[Li];n===void 0&&(n=t[Li]=new Set);var r=e+"__bubble";n.has(r)||(aa(t,e,2,!1),n.add(r))}function Ci(e,t,n){var r=0;t&&(r|=4),aa(n,e,r,t)}var Zr="_reactListening"+Math.random().toString(36).slice(2);function ur(e){if(!e[Zr]){e[Zr]=!0,m.forEach(function(n){n!=="selectionchange"&&(zd.has(n)||Ci(n,!1,e),Ci(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Zr]||(t[Zr]=!0,Ci("selectionchange",!1,t))}}function aa(e,t,n,r){switch(zo(t)){case 1:var l=Hc;break;case 4:l=Qc;break;default:l=ui}n=l.bind(null,t,n,e),l=void 0,!ti||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Pi(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var d=r.stateNode.containerInfo;if(d===l||d.nodeType===8&&d.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var f=o.tag;if((f===3||f===4)&&(f=o.stateNode.containerInfo,f===l||f.nodeType===8&&f.parentNode===l))return;o=o.return}for(;d!==null;){if(o=en(d),o===null)return;if(f=o.tag,f===5||f===6){r=i=o;continue e}d=d.parentNode}}r=r.return}mo(function(){var w=i,P=Zl(n),b=[];e:{var E=la.get(e);if(E!==void 0){var M=fi,I=e;switch(e){case"keypress":if(Qr(n)===0)break e;case"keydown":case"keyup":M=od;break;case"focusin":I="focus",M=hi;break;case"focusout":I="blur",M=hi;break;case"beforeblur":case"afterblur":M=hi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=Oo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Gc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=cd;break;case ea:case ta:case na:M=Zc;break;case ra:M=fd;break;case"scroll":M=Yc;break;case"wheel":M=pd;break;case"copy":case"cut":case"paste":M=ed;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Do}var U=(t&4)!==0,Ne=!U&&e==="scroll",y=U?E!==null?E+"Capture":null:E;U=[];for(var p=w,x;p!==null;){x=p;var T=x.stateNode;if(x.tag===5&&T!==null&&(x=T,y!==null&&(T=Hn(p,y),T!=null&&U.push(cr(p,T,x)))),Ne)break;p=p.return}0<U.length&&(E=new M(E,I,null,n,P),b.push({event:E,listeners:U}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",E&&n!==Jl&&(I=n.relatedTarget||n.fromElement)&&(en(I)||I[kt]))break e;if((M||E)&&(E=P.window===P?P:(E=P.ownerDocument)?E.defaultView||E.parentWindow:window,M?(I=n.relatedTarget||n.toElement,M=w,I=I?en(I):null,I!==null&&(Ne=qt(I),I!==Ne||I.tag!==5&&I.tag!==6)&&(I=null)):(M=null,I=w),M!==I)){if(U=Oo,T="onMouseLeave",y="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(U=Do,T="onPointerLeave",y="onPointerEnter",p="pointer"),Ne=M==null?E:En(M),x=I==null?E:En(I),E=new U(T,p+"leave",M,n,P),E.target=Ne,E.relatedTarget=x,T=null,en(P)===w&&(U=new U(y,p+"enter",I,n,P),U.target=x,U.relatedTarget=Ne,T=U),Ne=T,M&&I)t:{for(U=M,y=I,p=0,x=U;x;x=kn(x))p++;for(x=0,T=y;T;T=kn(T))x++;for(;0<p-x;)U=kn(U),p--;for(;0<x-p;)y=kn(y),x--;for(;p--;){if(U===y||y!==null&&U===y.alternate)break t;U=kn(U),y=kn(y)}U=null}else U=null;M!==null&&ua(b,E,M,U,!1),I!==null&&Ne!==null&&ua(b,Ne,I,U,!0)}}e:{if(E=w?En(w):window,M=E.nodeName&&E.nodeName.toLowerCase(),M==="select"||M==="input"&&E.type==="file")var B=jd;else if($o(E))if(Vo)B=Ed;else{B=kd;var W=Nd}else(M=E.nodeName)&&M.toLowerCase()==="input"&&(E.type==="checkbox"||E.type==="radio")&&(B=Sd);if(B&&(B=B(e,w))){Wo(b,B,n,P);break e}W&&W(e,E,w),e==="focusout"&&(W=E._wrapperState)&&W.controlled&&E.type==="number"&&Ql(E,"number",E.value)}switch(W=w?En(w):window,e){case"focusin":($o(W)||W.contentEditable==="true")&&(jn=W,ji=w,or=null);break;case"focusout":or=ji=jn=null;break;case"mousedown":Ni=!0;break;case"contextmenu":case"mouseup":case"dragend":Ni=!1,Zo(b,n,P);break;case"selectionchange":if(Rd)break;case"keydown":case"keyup":Zo(b,n,P)}var V;if(vi)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else wn?Uo(e,n)&&(Q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Q="onCompositionStart");Q&&(Fo&&n.locale!=="ko"&&(wn||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&wn&&(V=To()):(Mt=P,di="value"in Mt?Mt.value:Mt.textContent,wn=!0)),W=qr(w,Q),0<W.length&&(Q=new Mo(Q,e,null,n,P),b.push({event:Q,listeners:W}),V?Q.data=V:(V=Bo(n),V!==null&&(Q.data=V)))),(V=gd?vd(e,n):yd(e,n))&&(w=qr(w,"onBeforeInput"),0<w.length&&(P=new Mo("onBeforeInput","beforeinput",null,n,P),b.push({event:P,listeners:w}),P.data=V))}oa(b,t)})}function cr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=Hn(e,n),i!=null&&r.unshift(cr(e,i,l)),i=Hn(e,t),i!=null&&r.push(cr(e,i,l))),e=e.return}return r}function kn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function ua(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var d=n,f=d.alternate,w=d.stateNode;if(f!==null&&f===r)break;d.tag===5&&w!==null&&(d=w,l?(f=Hn(n,i),f!=null&&o.unshift(cr(n,f,d))):l||(f=Hn(n,i),f!=null&&o.push(cr(n,f,d)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Td=/\r\n?/g,Ld=/\u0000|\uFFFD/g;function ca(e){return(typeof e=="string"?e:""+e).replace(Td,`
`).replace(Ld,"")}function el(e,t,n){if(t=ca(t),ca(e)!==t&&n)throw Error(a(425))}function tl(){}var Ri=null,bi=null;function _i(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var zi=typeof setTimeout=="function"?setTimeout:void 0,Od=typeof clearTimeout=="function"?clearTimeout:void 0,da=typeof Promise=="function"?Promise:void 0,Md=typeof queueMicrotask=="function"?queueMicrotask:typeof da<"u"?function(e){return da.resolve(null).then(e).catch(Dd)}:zi;function Dd(e){setTimeout(function(){throw e})}function Ti(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);er(t)}function Ft(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function fa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Sn=Math.random().toString(36).slice(2),xt="__reactFiber$"+Sn,dr="__reactProps$"+Sn,kt="__reactContainer$"+Sn,Li="__reactEvents$"+Sn,Fd="__reactListeners$"+Sn,Ad="__reactHandles$"+Sn;function en(e){var t=e[xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[kt]||n[xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=fa(e);e!==null;){if(n=e[xt])return n;e=fa(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[xt]||e[kt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(a(33))}function nl(e){return e[dr]||null}var Oi=[],Cn=-1;function At(e){return{current:e}}function me(e){0>Cn||(e.current=Oi[Cn],Oi[Cn]=null,Cn--)}function ce(e,t){Cn++,Oi[Cn]=e.current,e.current=t}var It={},Fe=At(It),He=At(!1),tn=It;function Pn(e,t){var n=e.type.contextTypes;if(!n)return It;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Qe(e){return e=e.childContextTypes,e!=null}function rl(){me(He),me(Fe)}function ma(e,t,n){if(Fe.current!==It)throw Error(a(168));ce(Fe,t),ce(He,n)}function pa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(a(108,ue(e)||"Unknown",l));return A({},n,r)}function ll(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||It,tn=Fe.current,ce(Fe,e),ce(He,He.current),!0}function ha(e,t,n){var r=e.stateNode;if(!r)throw Error(a(169));n?(e=pa(e,t,tn),r.__reactInternalMemoizedMergedChildContext=e,me(He),me(Fe),ce(Fe,e)):me(He),ce(He,n)}var St=null,il=!1,Mi=!1;function ga(e){St===null?St=[e]:St.push(e)}function Id(e){il=!0,ga(e)}function Ut(){if(!Mi&&St!==null){Mi=!0;var e=0,t=ae;try{var n=St;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,il=!1}catch(l){throw St!==null&&(St=St.slice(e+1)),yo(ri,Ut),l}finally{ae=t,Mi=!1}}return null}var Rn=[],bn=0,sl=null,ol=0,rt=[],lt=0,nn=null,Et=1,Ct="";function rn(e,t){Rn[bn++]=ol,Rn[bn++]=sl,sl=e,ol=t}function va(e,t,n){rt[lt++]=Et,rt[lt++]=Ct,rt[lt++]=nn,nn=e;var r=Et;e=Ct;var l=32-ct(r)-1;r&=~(1<<l),n+=1;var i=32-ct(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,Et=1<<32-ct(t)+l|n<<l|r,Ct=i+e}else Et=1<<i|n<<l|r,Ct=e}function Di(e){e.return!==null&&(rn(e,1),va(e,1,0))}function Fi(e){for(;e===sl;)sl=Rn[--bn],Rn[bn]=null,ol=Rn[--bn],Rn[bn]=null;for(;e===nn;)nn=rt[--lt],rt[lt]=null,Ct=rt[--lt],rt[lt]=null,Et=rt[--lt],rt[lt]=null}var qe=null,et=null,he=!1,ft=null;function ya(e,t){var n=at(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function xa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,et=Ft(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=nn!==null?{id:Et,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=at(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,et=null,!0):!1;default:return!1}}function Ai(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ii(e){if(he){var t=et;if(t){var n=t;if(!xa(e,t)){if(Ai(e))throw Error(a(418));t=Ft(n.nextSibling);var r=qe;t&&xa(e,t)?ya(r,n):(e.flags=e.flags&-4097|2,he=!1,qe=e)}}else{if(Ai(e))throw Error(a(418));e.flags=e.flags&-4097|2,he=!1,qe=e}}}function wa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function al(e){if(e!==qe)return!1;if(!he)return wa(e),he=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_i(e.type,e.memoizedProps)),t&&(t=et)){if(Ai(e))throw ja(),Error(a(418));for(;t;)ya(e,t),t=Ft(t.nextSibling)}if(wa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=Ft(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=qe?Ft(e.stateNode.nextSibling):null;return!0}function ja(){for(var e=et;e;)e=Ft(e.nextSibling)}function _n(){et=qe=null,he=!1}function Ui(e){ft===null?ft=[e]:ft.push(e)}var Ud=Z.ReactCurrentBatchConfig;function mr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(a(309));var r=n.stateNode}if(!r)throw Error(a(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var d=l.refs;o===null?delete d[i]:d[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(a(284));if(!n._owner)throw Error(a(290,e))}return e}function ul(e,t){throw e=Object.prototype.toString.call(t),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Na(e){var t=e._init;return t(e._payload)}function ka(e){function t(y,p){if(e){var x=y.deletions;x===null?(y.deletions=[p],y.flags|=16):x.push(p)}}function n(y,p){if(!e)return null;for(;p!==null;)t(y,p),p=p.sibling;return null}function r(y,p){for(y=new Map;p!==null;)p.key!==null?y.set(p.key,p):y.set(p.index,p),p=p.sibling;return y}function l(y,p){return y=Kt(y,p),y.index=0,y.sibling=null,y}function i(y,p,x){return y.index=x,e?(x=y.alternate,x!==null?(x=x.index,x<p?(y.flags|=2,p):x):(y.flags|=2,p)):(y.flags|=1048576,p)}function o(y){return e&&y.alternate===null&&(y.flags|=2),y}function d(y,p,x,T){return p===null||p.tag!==6?(p=zs(x,y.mode,T),p.return=y,p):(p=l(p,x),p.return=y,p)}function f(y,p,x,T){var B=x.type;return B===Me?P(y,p,x.props.children,T,x.key):p!==null&&(p.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ee&&Na(B)===p.type)?(T=l(p,x.props),T.ref=mr(y,p,x),T.return=y,T):(T=Ll(x.type,x.key,x.props,null,y.mode,T),T.ref=mr(y,p,x),T.return=y,T)}function w(y,p,x,T){return p===null||p.tag!==4||p.stateNode.containerInfo!==x.containerInfo||p.stateNode.implementation!==x.implementation?(p=Ts(x,y.mode,T),p.return=y,p):(p=l(p,x.children||[]),p.return=y,p)}function P(y,p,x,T,B){return p===null||p.tag!==7?(p=fn(x,y.mode,T,B),p.return=y,p):(p=l(p,x),p.return=y,p)}function b(y,p,x){if(typeof p=="string"&&p!==""||typeof p=="number")return p=zs(""+p,y.mode,x),p.return=y,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ee:return x=Ll(p.type,p.key,p.props,null,y.mode,x),x.ref=mr(y,null,p),x.return=y,x;case ze:return p=Ts(p,y.mode,x),p.return=y,p;case Ee:var T=p._init;return b(y,T(p._payload),x)}if($n(p)||H(p))return p=fn(p,y.mode,x,null),p.return=y,p;ul(y,p)}return null}function E(y,p,x,T){var B=p!==null?p.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return B!==null?null:d(y,p,""+x,T);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ee:return x.key===B?f(y,p,x,T):null;case ze:return x.key===B?w(y,p,x,T):null;case Ee:return B=x._init,E(y,p,B(x._payload),T)}if($n(x)||H(x))return B!==null?null:P(y,p,x,T,null);ul(y,x)}return null}function M(y,p,x,T,B){if(typeof T=="string"&&T!==""||typeof T=="number")return y=y.get(x)||null,d(p,y,""+T,B);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case ee:return y=y.get(T.key===null?x:T.key)||null,f(p,y,T,B);case ze:return y=y.get(T.key===null?x:T.key)||null,w(p,y,T,B);case Ee:var W=T._init;return M(y,p,x,W(T._payload),B)}if($n(T)||H(T))return y=y.get(x)||null,P(p,y,T,B,null);ul(p,T)}return null}function I(y,p,x,T){for(var B=null,W=null,V=p,Q=p=0,_e=null;V!==null&&Q<x.length;Q++){V.index>Q?(_e=V,V=null):_e=V.sibling;var le=E(y,V,x[Q],T);if(le===null){V===null&&(V=_e);break}e&&V&&le.alternate===null&&t(y,V),p=i(le,p,Q),W===null?B=le:W.sibling=le,W=le,V=_e}if(Q===x.length)return n(y,V),he&&rn(y,Q),B;if(V===null){for(;Q<x.length;Q++)V=b(y,x[Q],T),V!==null&&(p=i(V,p,Q),W===null?B=V:W.sibling=V,W=V);return he&&rn(y,Q),B}for(V=r(y,V);Q<x.length;Q++)_e=M(V,y,Q,x[Q],T),_e!==null&&(e&&_e.alternate!==null&&V.delete(_e.key===null?Q:_e.key),p=i(_e,p,Q),W===null?B=_e:W.sibling=_e,W=_e);return e&&V.forEach(function(Gt){return t(y,Gt)}),he&&rn(y,Q),B}function U(y,p,x,T){var B=H(x);if(typeof B!="function")throw Error(a(150));if(x=B.call(x),x==null)throw Error(a(151));for(var W=B=null,V=p,Q=p=0,_e=null,le=x.next();V!==null&&!le.done;Q++,le=x.next()){V.index>Q?(_e=V,V=null):_e=V.sibling;var Gt=E(y,V,le.value,T);if(Gt===null){V===null&&(V=_e);break}e&&V&&Gt.alternate===null&&t(y,V),p=i(Gt,p,Q),W===null?B=Gt:W.sibling=Gt,W=Gt,V=_e}if(le.done)return n(y,V),he&&rn(y,Q),B;if(V===null){for(;!le.done;Q++,le=x.next())le=b(y,le.value,T),le!==null&&(p=i(le,p,Q),W===null?B=le:W.sibling=le,W=le);return he&&rn(y,Q),B}for(V=r(y,V);!le.done;Q++,le=x.next())le=M(V,y,Q,le.value,T),le!==null&&(e&&le.alternate!==null&&V.delete(le.key===null?Q:le.key),p=i(le,p,Q),W===null?B=le:W.sibling=le,W=le);return e&&V.forEach(function(wf){return t(y,wf)}),he&&rn(y,Q),B}function Ne(y,p,x,T){if(typeof x=="object"&&x!==null&&x.type===Me&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ee:e:{for(var B=x.key,W=p;W!==null;){if(W.key===B){if(B=x.type,B===Me){if(W.tag===7){n(y,W.sibling),p=l(W,x.props.children),p.return=y,y=p;break e}}else if(W.elementType===B||typeof B=="object"&&B!==null&&B.$$typeof===Ee&&Na(B)===W.type){n(y,W.sibling),p=l(W,x.props),p.ref=mr(y,W,x),p.return=y,y=p;break e}n(y,W);break}else t(y,W);W=W.sibling}x.type===Me?(p=fn(x.props.children,y.mode,T,x.key),p.return=y,y=p):(T=Ll(x.type,x.key,x.props,null,y.mode,T),T.ref=mr(y,p,x),T.return=y,y=T)}return o(y);case ze:e:{for(W=x.key;p!==null;){if(p.key===W)if(p.tag===4&&p.stateNode.containerInfo===x.containerInfo&&p.stateNode.implementation===x.implementation){n(y,p.sibling),p=l(p,x.children||[]),p.return=y,y=p;break e}else{n(y,p);break}else t(y,p);p=p.sibling}p=Ts(x,y.mode,T),p.return=y,y=p}return o(y);case Ee:return W=x._init,Ne(y,p,W(x._payload),T)}if($n(x))return I(y,p,x,T);if(H(x))return U(y,p,x,T);ul(y,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,p!==null&&p.tag===6?(n(y,p.sibling),p=l(p,x),p.return=y,y=p):(n(y,p),p=zs(x,y.mode,T),p.return=y,y=p),o(y)):n(y,p)}return Ne}var zn=ka(!0),Sa=ka(!1),cl=At(null),dl=null,Tn=null,Bi=null;function $i(){Bi=Tn=dl=null}function Wi(e){var t=cl.current;me(cl),e._currentValue=t}function Vi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ln(e,t){dl=e,Bi=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ye=!0),e.firstContext=null)}function it(e){var t=e._currentValue;if(Bi!==e)if(e={context:e,memoizedValue:t,next:null},Tn===null){if(dl===null)throw Error(a(308));Tn=e,dl.dependencies={lanes:0,firstContext:e}}else Tn=Tn.next=e;return t}var ln=null;function Hi(e){ln===null?ln=[e]:ln.push(e)}function Ea(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Hi(t)):(n.next=l.next,l.next=n),t.interleaved=n,Pt(e,r)}function Pt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bt=!1;function Qi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ca(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $t(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(te&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Pt(e,n)}return l=r.interleaved,l===null?(t.next=t,Hi(r)):(t.next=l.next,l.next=t),r.interleaved=t,Pt(e,n)}function fl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,si(e,n)}}function Pa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ml(e,t,n,r){var l=e.updateQueue;Bt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,d=l.shared.pending;if(d!==null){l.shared.pending=null;var f=d,w=f.next;f.next=null,o===null?i=w:o.next=w,o=f;var P=e.alternate;P!==null&&(P=P.updateQueue,d=P.lastBaseUpdate,d!==o&&(d===null?P.firstBaseUpdate=w:d.next=w,P.lastBaseUpdate=f))}if(i!==null){var b=l.baseState;o=0,P=w=f=null,d=i;do{var E=d.lane,M=d.eventTime;if((r&E)===E){P!==null&&(P=P.next={eventTime:M,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var I=e,U=d;switch(E=t,M=n,U.tag){case 1:if(I=U.payload,typeof I=="function"){b=I.call(M,b,E);break e}b=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=U.payload,E=typeof I=="function"?I.call(M,b,E):I,E==null)break e;b=A({},b,E);break e;case 2:Bt=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,E=l.effects,E===null?l.effects=[d]:E.push(d))}else M={eventTime:M,lane:E,tag:d.tag,payload:d.payload,callback:d.callback,next:null},P===null?(w=P=M,f=b):P=P.next=M,o|=E;if(d=d.next,d===null){if(d=l.shared.pending,d===null)break;E=d,d=E.next,E.next=null,l.lastBaseUpdate=E,l.shared.pending=null}}while(!0);if(P===null&&(f=b),l.baseState=f,l.firstBaseUpdate=w,l.lastBaseUpdate=P,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);an|=o,e.lanes=o,e.memoizedState=b}}function Ra(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(a(191,l));l.call(r)}}}var pr={},wt=At(pr),hr=At(pr),gr=At(pr);function sn(e){if(e===pr)throw Error(a(174));return e}function Yi(e,t){switch(ce(gr,t),ce(hr,e),ce(wt,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kl(t,e)}me(wt),ce(wt,t)}function On(){me(wt),me(hr),me(gr)}function ba(e){sn(gr.current);var t=sn(wt.current),n=Kl(t,e.type);t!==n&&(ce(hr,e),ce(wt,n))}function Ki(e){hr.current===e&&(me(wt),me(hr))}var ge=At(0);function pl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gi=[];function Xi(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var hl=Z.ReactCurrentDispatcher,Ji=Z.ReactCurrentBatchConfig,on=0,ve=null,Ce=null,Re=null,gl=!1,vr=!1,yr=0,Bd=0;function Ae(){throw Error(a(321))}function Zi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!dt(e[n],t[n]))return!1;return!0}function qi(e,t,n,r,l,i){if(on=i,ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,hl.current=e===null||e.memoizedState===null?Hd:Qd,e=n(r,l),vr){i=0;do{if(vr=!1,yr=0,25<=i)throw Error(a(301));i+=1,Re=Ce=null,t.updateQueue=null,hl.current=Yd,e=n(r,l)}while(vr)}if(hl.current=xl,t=Ce!==null&&Ce.next!==null,on=0,Re=Ce=ve=null,gl=!1,t)throw Error(a(300));return e}function es(){var e=yr!==0;return yr=0,e}function jt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ve.memoizedState=Re=e:Re=Re.next=e,Re}function st(){if(Ce===null){var e=ve.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Re===null?ve.memoizedState:Re.next;if(t!==null)Re=t,Ce=e;else{if(e===null)throw Error(a(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Re===null?ve.memoizedState=Re=e:Re=Re.next=e}return Re}function xr(e,t){return typeof t=="function"?t(e):t}function ts(e){var t=st(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=Ce,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var d=o=null,f=null,w=i;do{var P=w.lane;if((on&P)===P)f!==null&&(f=f.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),r=w.hasEagerState?w.eagerState:e(r,w.action);else{var b={lane:P,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};f===null?(d=f=b,o=r):f=f.next=b,ve.lanes|=P,an|=P}w=w.next}while(w!==null&&w!==i);f===null?o=r:f.next=d,dt(r,t.memoizedState)||(Ye=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,ve.lanes|=i,an|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ns(e){var t=st(),n=t.queue;if(n===null)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);dt(i,t.memoizedState)||(Ye=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function _a(){}function za(e,t){var n=ve,r=st(),l=t(),i=!dt(r.memoizedState,l);if(i&&(r.memoizedState=l,Ye=!0),r=r.queue,rs(Oa.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Re!==null&&Re.memoizedState.tag&1){if(n.flags|=2048,wr(9,La.bind(null,n,r,l,t),void 0,null),be===null)throw Error(a(349));(on&30)!==0||Ta(n,t,l)}return l}function Ta(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function La(e,t,n,r){t.value=n,t.getSnapshot=r,Ma(t)&&Da(e)}function Oa(e,t,n){return n(function(){Ma(t)&&Da(e)})}function Ma(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dt(e,n)}catch{return!0}}function Da(e){var t=Pt(e,1);t!==null&&gt(t,e,1,-1)}function Fa(e){var t=jt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xr,lastRenderedState:e},t.queue=e,e=e.dispatch=Vd.bind(null,ve,e),[t.memoizedState,e]}function wr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ve.updateQueue,t===null?(t={lastEffect:null,stores:null},ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Aa(){return st().memoizedState}function vl(e,t,n,r){var l=jt();ve.flags|=e,l.memoizedState=wr(1|t,n,void 0,r===void 0?null:r)}function yl(e,t,n,r){var l=st();r=r===void 0?null:r;var i=void 0;if(Ce!==null){var o=Ce.memoizedState;if(i=o.destroy,r!==null&&Zi(r,o.deps)){l.memoizedState=wr(t,n,i,r);return}}ve.flags|=e,l.memoizedState=wr(1|t,n,i,r)}function Ia(e,t){return vl(8390656,8,e,t)}function rs(e,t){return yl(2048,8,e,t)}function Ua(e,t){return yl(4,2,e,t)}function Ba(e,t){return yl(4,4,e,t)}function $a(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wa(e,t,n){return n=n!=null?n.concat([e]):null,yl(4,4,$a.bind(null,t,e),n)}function ls(){}function Va(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ha(e,t){var n=st();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Zi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Qa(e,t,n){return(on&21)===0?(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=n):(dt(n,t)||(n=No(),ve.lanes|=n,an|=n,e.baseState=!0),t)}function $d(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=Ji.transition;Ji.transition={};try{e(!1),t()}finally{ae=n,Ji.transition=r}}function Ya(){return st().memoizedState}function Wd(e,t,n){var r=Qt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ka(e))Ga(t,n);else if(n=Ea(e,t,n,r),n!==null){var l=We();gt(n,e,r,l),Xa(n,t,r)}}function Vd(e,t,n){var r=Qt(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ka(e))Ga(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,d=i(o,n);if(l.hasEagerState=!0,l.eagerState=d,dt(d,o)){var f=t.interleaved;f===null?(l.next=l,Hi(t)):(l.next=f.next,f.next=l),t.interleaved=l;return}}catch{}n=Ea(e,t,l,r),n!==null&&(l=We(),gt(n,e,r,l),Xa(n,t,r))}}function Ka(e){var t=e.alternate;return e===ve||t!==null&&t===ve}function Ga(e,t){vr=gl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xa(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,si(e,n)}}var xl={readContext:it,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},Hd={readContext:it,useCallback:function(e,t){return jt().memoizedState=[e,t===void 0?null:t],e},useContext:it,useEffect:Ia,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,vl(4194308,4,$a.bind(null,t,e),n)},useLayoutEffect:function(e,t){return vl(4194308,4,e,t)},useInsertionEffect:function(e,t){return vl(4,2,e,t)},useMemo:function(e,t){var n=jt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=jt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Wd.bind(null,ve,e),[r.memoizedState,e]},useRef:function(e){var t=jt();return e={current:e},t.memoizedState=e},useState:Fa,useDebugValue:ls,useDeferredValue:function(e){return jt().memoizedState=e},useTransition:function(){var e=Fa(!1),t=e[0];return e=$d.bind(null,e[1]),jt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ve,l=jt();if(he){if(n===void 0)throw Error(a(407));n=n()}else{if(n=t(),be===null)throw Error(a(349));(on&30)!==0||Ta(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,Ia(Oa.bind(null,r,i,e),[e]),r.flags|=2048,wr(9,La.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=jt(),t=be.identifierPrefix;if(he){var n=Ct,r=Et;n=(r&~(1<<32-ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=yr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Bd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Qd={readContext:it,useCallback:Va,useContext:it,useEffect:rs,useImperativeHandle:Wa,useInsertionEffect:Ua,useLayoutEffect:Ba,useMemo:Ha,useReducer:ts,useRef:Aa,useState:function(){return ts(xr)},useDebugValue:ls,useDeferredValue:function(e){var t=st();return Qa(t,Ce.memoizedState,e)},useTransition:function(){var e=ts(xr)[0],t=st().memoizedState;return[e,t]},useMutableSource:_a,useSyncExternalStore:za,useId:Ya,unstable_isNewReconciler:!1},Yd={readContext:it,useCallback:Va,useContext:it,useEffect:rs,useImperativeHandle:Wa,useInsertionEffect:Ua,useLayoutEffect:Ba,useMemo:Ha,useReducer:ns,useRef:Aa,useState:function(){return ns(xr)},useDebugValue:ls,useDeferredValue:function(e){var t=st();return Ce===null?t.memoizedState=e:Qa(t,Ce.memoizedState,e)},useTransition:function(){var e=ns(xr)[0],t=st().memoizedState;return[e,t]},useMutableSource:_a,useSyncExternalStore:za,useId:Ya,unstable_isNewReconciler:!1};function mt(e,t){if(e&&e.defaultProps){t=A({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function is(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:A({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wl={isMounted:function(e){return(e=e._reactInternals)?qt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),l=Qt(e),i=Rt(r,l);i.payload=t,n!=null&&(i.callback=n),t=$t(e,i,l),t!==null&&(gt(t,e,l,r),fl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),l=Qt(e),i=Rt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=$t(e,i,l),t!==null&&(gt(t,e,l,r),fl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=Qt(e),l=Rt(n,r);l.tag=2,t!=null&&(l.callback=t),t=$t(e,l,r),t!==null&&(gt(t,e,r,n),fl(t,e,r))}};function Ja(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!sr(n,r)||!sr(l,i):!0}function Za(e,t,n){var r=!1,l=It,i=t.contextType;return typeof i=="object"&&i!==null?i=it(i):(l=Qe(t)?tn:Fe.current,r=t.contextTypes,i=(r=r!=null)?Pn(e,l):It),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function qa(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wl.enqueueReplaceState(t,t.state,null)}function ss(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Qi(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=it(i):(i=Qe(t)?tn:Fe.current,l.context=Pn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(is(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&wl.enqueueReplaceState(l,l.state,null),ml(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function Mn(e,t){try{var n="",r=t;do n+=ne(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function os(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function as(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Kd=typeof WeakMap=="function"?WeakMap:Map;function eu(e,t,n){n=Rt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Pl||(Pl=!0,ks=r),as(e,t)},n}function tu(e,t,n){n=Rt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){as(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){as(e,t),typeof r!="function"&&(Vt===null?Vt=new Set([this]):Vt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function nu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Kd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=uf.bind(null,e,t,n),t.then(e,e))}function ru(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lu(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rt(-1,1),t.tag=2,$t(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Gd=Z.ReactCurrentOwner,Ye=!1;function $e(e,t,n,r){t.child=e===null?Sa(t,null,n,r):zn(t,e.child,n,r)}function iu(e,t,n,r,l){n=n.render;var i=t.ref;return Ln(t,l),r=qi(e,t,n,r,i,l),n=es(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,bt(e,t,l)):(he&&n&&Di(t),t.flags|=1,$e(e,t,r,l),t.child)}function su(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!_s(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,ou(e,t,i,r,l)):(e=Ll(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:sr,n(o,r)&&e.ref===t.ref)return bt(e,t,l)}return t.flags|=1,e=Kt(i,r),e.ref=t.ref,e.return=t,t.child=e}function ou(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,bt(e,t,l)}return us(e,t,n,r,l)}function au(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ce(Fn,tt),tt|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ce(Fn,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ce(Fn,tt),tt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ce(Fn,tt),tt|=r;return $e(e,t,l,n),t.child}function uu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function us(e,t,n,r,l){var i=Qe(n)?tn:Fe.current;return i=Pn(t,i),Ln(t,l),n=qi(e,t,n,r,i,l),r=es(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,bt(e,t,l)):(he&&r&&Di(t),t.flags|=1,$e(e,t,n,l),t.child)}function cu(e,t,n,r,l){if(Qe(n)){var i=!0;ll(t)}else i=!1;if(Ln(t,l),t.stateNode===null)Nl(e,t),Za(t,n,r),ss(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,d=t.memoizedProps;o.props=d;var f=o.context,w=n.contextType;typeof w=="object"&&w!==null?w=it(w):(w=Qe(n)?tn:Fe.current,w=Pn(t,w));var P=n.getDerivedStateFromProps,b=typeof P=="function"||typeof o.getSnapshotBeforeUpdate=="function";b||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==r||f!==w)&&qa(t,o,r,w),Bt=!1;var E=t.memoizedState;o.state=E,ml(t,r,o,l),f=t.memoizedState,d!==r||E!==f||He.current||Bt?(typeof P=="function"&&(is(t,n,P,r),f=t.memoizedState),(d=Bt||Ja(t,n,d,r,E,f,w))?(b||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),o.props=r,o.state=f,o.context=w,r=d):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Ca(e,t),d=t.memoizedProps,w=t.type===t.elementType?d:mt(t.type,d),o.props=w,b=t.pendingProps,E=o.context,f=n.contextType,typeof f=="object"&&f!==null?f=it(f):(f=Qe(n)?tn:Fe.current,f=Pn(t,f));var M=n.getDerivedStateFromProps;(P=typeof M=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(d!==b||E!==f)&&qa(t,o,r,f),Bt=!1,E=t.memoizedState,o.state=E,ml(t,r,o,l);var I=t.memoizedState;d!==b||E!==I||He.current||Bt?(typeof M=="function"&&(is(t,n,M,r),I=t.memoizedState),(w=Bt||Ja(t,n,w,r,E,I,f)||!1)?(P||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,f),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,f)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=I),o.props=r,o.state=I,o.context=f,r=w):(typeof o.componentDidUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),r=!1)}return cs(e,t,n,r,i,l)}function cs(e,t,n,r,l,i){uu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&ha(t,n,!1),bt(e,t,i);r=t.stateNode,Gd.current=t;var d=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=zn(t,e.child,null,i),t.child=zn(t,null,d,i)):$e(e,t,d,i),t.memoizedState=r.state,l&&ha(t,n,!0),t.child}function du(e){var t=e.stateNode;t.pendingContext?ma(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ma(e,t.context,!1),Yi(e,t.containerInfo)}function fu(e,t,n,r,l){return _n(),Ui(l),t.flags|=256,$e(e,t,n,r),t.child}var ds={dehydrated:null,treeContext:null,retryLane:0};function fs(e){return{baseLanes:e,cachePool:null,transitions:null}}function mu(e,t,n){var r=t.pendingProps,l=ge.current,i=!1,o=(t.flags&128)!==0,d;if((d=o)||(d=e!==null&&e.memoizedState===null?!1:(l&2)!==0),d?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),ce(ge,l&1),e===null)return Ii(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ol(o,r,0,null),e=fn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=fs(n),t.memoizedState=ds,e):ms(t,o));if(l=e.memoizedState,l!==null&&(d=l.dehydrated,d!==null))return Xd(e,t,o,r,d,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,d=l.sibling;var f={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=Kt(l,f),r.subtreeFlags=l.subtreeFlags&14680064),d!==null?i=Kt(d,i):(i=fn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?fs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=ds,r}return i=e.child,e=i.sibling,r=Kt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ms(e,t){return t=Ol({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function jl(e,t,n,r){return r!==null&&Ui(r),zn(t,e.child,null,n),e=ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Xd(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=os(Error(a(422))),jl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Ol({mode:"visible",children:r.children},l,0,null),i=fn(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&zn(t,e.child,null,o),t.child.memoizedState=fs(o),t.memoizedState=ds,i);if((t.mode&1)===0)return jl(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var d=r.dgst;return r=d,i=Error(a(419)),r=os(i,r,void 0),jl(e,t,o,r)}if(d=(o&e.childLanes)!==0,Ye||d){if(r=be,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Pt(e,l),gt(r,e,l,-1))}return bs(),r=os(Error(a(421))),jl(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=cf.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,et=Ft(l.nextSibling),qe=t,he=!0,ft=null,e!==null&&(rt[lt++]=Et,rt[lt++]=Ct,rt[lt++]=nn,Et=e.id,Ct=e.overflow,nn=t),t=ms(t,r.children),t.flags|=4096,t)}function pu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Vi(e.return,t,n)}function ps(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function hu(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if($e(e,t,r.children,n),r=ge.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pu(e,n,t);else if(e.tag===19)pu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ce(ge,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&pl(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),ps(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&pl(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}ps(t,!0,n,null,i);break;case"together":ps(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Nl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(a(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Jd(e,t,n){switch(t.tag){case 3:du(t),_n();break;case 5:ba(t);break;case 1:Qe(t.type)&&ll(t);break;case 4:Yi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;ce(cl,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ce(ge,ge.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?mu(e,t,n):(ce(ge,ge.current&1),e=bt(e,t,n),e!==null?e.sibling:null);ce(ge,ge.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return hu(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),ce(ge,ge.current),r)break;return null;case 22:case 23:return t.lanes=0,au(e,t,n)}return bt(e,t,n)}var gu,hs,vu,yu;gu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},hs=function(){},vu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,sn(wt.current);var i=null;switch(n){case"input":l=Vl(e,l),r=Vl(e,r),i=[];break;case"select":l=A({},l,{value:void 0}),r=A({},r,{value:void 0}),i=[];break;case"textarea":l=Yl(e,l),r=Yl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=tl)}Gl(n,r);var o;n=null;for(w in l)if(!r.hasOwnProperty(w)&&l.hasOwnProperty(w)&&l[w]!=null)if(w==="style"){var d=l[w];for(o in d)d.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(h.hasOwnProperty(w)?i||(i=[]):(i=i||[]).push(w,null));for(w in r){var f=r[w];if(d=l?.[w],r.hasOwnProperty(w)&&f!==d&&(f!=null||d!=null))if(w==="style")if(d){for(o in d)!d.hasOwnProperty(o)||f&&f.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in f)f.hasOwnProperty(o)&&d[o]!==f[o]&&(n||(n={}),n[o]=f[o])}else n||(i||(i=[]),i.push(w,n)),n=f;else w==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,d=d?d.__html:void 0,f!=null&&d!==f&&(i=i||[]).push(w,f)):w==="children"?typeof f!="string"&&typeof f!="number"||(i=i||[]).push(w,""+f):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(h.hasOwnProperty(w)?(f!=null&&w==="onScroll"&&fe("scroll",e),i||d===f||(i=[])):(i=i||[]).push(w,f))}n&&(i=i||[]).push("style",n);var w=i;(t.updateQueue=w)&&(t.flags|=4)}},yu=function(e,t,n,r){n!==r&&(t.flags|=4)};function jr(e,t){if(!he)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Zd(e,t,n){var r=t.pendingProps;switch(Fi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(t),null;case 1:return Qe(t.type)&&rl(),Ie(t),null;case 3:return r=t.stateNode,On(),me(He),me(Fe),Xi(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(al(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ft!==null&&(Cs(ft),ft=null))),hs(e,t),Ie(t),null;case 5:Ki(t);var l=sn(gr.current);if(n=t.type,e!==null&&t.stateNode!=null)vu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(a(166));return Ie(t),null}if(e=sn(wt.current),al(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[xt]=t,r[dr]=i,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(l=0;l<ar.length;l++)fe(ar[l],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Js(r,i),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},fe("invalid",r);break;case"textarea":eo(r,i),fe("invalid",r)}Gl(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var d=i[o];o==="children"?typeof d=="string"?r.textContent!==d&&(i.suppressHydrationWarning!==!0&&el(r.textContent,d,e),l=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(i.suppressHydrationWarning!==!0&&el(r.textContent,d,e),l=["children",""+d]):h.hasOwnProperty(o)&&d!=null&&o==="onScroll"&&fe("scroll",r)}switch(n){case"input":zr(r),qs(r,i,!0);break;case"textarea":zr(r),no(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=tl)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ro(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[xt]=t,e[dr]=r,gu(e,t,!1,!1),t.stateNode=e;e:{switch(o=Xl(n,r),n){case"dialog":fe("cancel",e),fe("close",e),l=r;break;case"iframe":case"object":case"embed":fe("load",e),l=r;break;case"video":case"audio":for(l=0;l<ar.length;l++)fe(ar[l],e);l=r;break;case"source":fe("error",e),l=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),l=r;break;case"details":fe("toggle",e),l=r;break;case"input":Js(e,r),l=Vl(e,r),fe("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=A({},r,{value:void 0}),fe("invalid",e);break;case"textarea":eo(e,r),l=Yl(e,r),fe("invalid",e);break;default:l=r}Gl(n,l),d=l;for(i in d)if(d.hasOwnProperty(i)){var f=d[i];i==="style"?so(e,f):i==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&lo(e,f)):i==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Wn(e,f):typeof f=="number"&&Wn(e,""+f):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(h.hasOwnProperty(i)?f!=null&&i==="onScroll"&&fe("scroll",e):f!=null&&q(e,i,f,o))}switch(n){case"input":zr(e),qs(e,r,!1);break;case"textarea":zr(e),no(e);break;case"option":r.value!=null&&e.setAttribute("value",""+oe(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?hn(e,!!r.multiple,i,!1):r.defaultValue!=null&&hn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ie(t),null;case 6:if(e&&t.stateNode!=null)yu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(a(166));if(n=sn(gr.current),sn(wt.current),al(t)){if(r=t.stateNode,n=t.memoizedProps,r[xt]=t,(i=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:el(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&el(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[xt]=t,t.stateNode=r}return Ie(t),null;case 13:if(me(ge),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(he&&et!==null&&(t.mode&1)!==0&&(t.flags&128)===0)ja(),_n(),t.flags|=98560,i=!1;else if(i=al(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(a(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));i[xt]=t}else _n(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ie(t),i=!1}else ft!==null&&(Cs(ft),ft=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ge.current&1)!==0?Pe===0&&(Pe=3):bs())),t.updateQueue!==null&&(t.flags|=4),Ie(t),null);case 4:return On(),hs(e,t),e===null&&ur(t.stateNode.containerInfo),Ie(t),null;case 10:return Wi(t.type._context),Ie(t),null;case 17:return Qe(t.type)&&rl(),Ie(t),null;case 19:if(me(ge),i=t.memoizedState,i===null)return Ie(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)jr(i,!1);else{if(Pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=pl(e),o!==null){for(t.flags|=128,jr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ce(ge,ge.current&1|2),t.child}e=e.sibling}i.tail!==null&&je()>An&&(t.flags|=128,r=!0,jr(i,!1),t.lanes=4194304)}else{if(!r)if(e=pl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),jr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!he)return Ie(t),null}else 2*je()-i.renderingStartTime>An&&n!==1073741824&&(t.flags|=128,r=!0,jr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=je(),t.sibling=null,n=ge.current,ce(ge,r?n&1|2:n&1),t):(Ie(t),null);case 22:case 23:return Rs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(tt&1073741824)!==0&&(Ie(t),t.subtreeFlags&6&&(t.flags|=8192)):Ie(t),null;case 24:return null;case 25:return null}throw Error(a(156,t.tag))}function qd(e,t){switch(Fi(t),t.tag){case 1:return Qe(t.type)&&rl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return On(),me(He),me(Fe),Xi(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ki(t),null;case 13:if(me(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(a(340));_n()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return me(ge),null;case 4:return On(),null;case 10:return Wi(t.type._context),null;case 22:case 23:return Rs(),null;case 24:return null;default:return null}}var kl=!1,Ue=!1,ef=typeof WeakSet=="function"?WeakSet:Set,F=null;function Dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function gs(e,t,n){try{n()}catch(r){we(e,t,r)}}var xu=!1;function tf(e,t){if(Ri=Wr,e=Jo(),wi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,d=-1,f=-1,w=0,P=0,b=e,E=null;t:for(;;){for(var M;b!==n||l!==0&&b.nodeType!==3||(d=o+l),b!==i||r!==0&&b.nodeType!==3||(f=o+r),b.nodeType===3&&(o+=b.nodeValue.length),(M=b.firstChild)!==null;)E=b,b=M;for(;;){if(b===e)break t;if(E===n&&++w===l&&(d=o),E===i&&++P===r&&(f=o),(M=b.nextSibling)!==null)break;b=E,E=b.parentNode}b=M}n=d===-1||f===-1?null:{start:d,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(bi={focusedElem:e,selectionRange:n},Wr=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var I=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var U=I.memoizedProps,Ne=I.memoizedState,y=t.stateNode,p=y.getSnapshotBeforeUpdate(t.elementType===t.type?U:mt(t.type,U),Ne);y.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(a(163))}}catch(T){we(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return I=xu,xu=!1,I}function Nr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&gs(t,n,i)}l=l.next}while(l!==r)}}function Sl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function vs(e){var t=e.ref;if(t!==null){var n=e.stateNode;e.tag,e=n,typeof t=="function"?t(e):t.current=e}}function wu(e){var t=e.alternate;t!==null&&(e.alternate=null,wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[xt],delete t[dr],delete t[Li],delete t[Fd],delete t[Ad])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ju(e){return e.tag===5||e.tag===3||e.tag===4}function Nu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ju(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ys(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=tl));else if(r!==4&&(e=e.child,e!==null))for(ys(e,t,n),e=e.sibling;e!==null;)ys(e,t,n),e=e.sibling}function xs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(xs(e,t,n),e=e.sibling;e!==null;)xs(e,t,n),e=e.sibling}var Le=null,pt=!1;function Wt(e,t,n){for(n=n.child;n!==null;)ku(e,t,n),n=n.sibling}function ku(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(Fr,n)}catch{}switch(n.tag){case 5:Ue||Dn(n,t);case 6:var r=Le,l=pt;Le=null,Wt(e,t,n),Le=r,pt=l,Le!==null&&(pt?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(pt?(e=Le,n=n.stateNode,e.nodeType===8?Ti(e.parentNode,n):e.nodeType===1&&Ti(e,n),er(e)):Ti(Le,n.stateNode));break;case 4:r=Le,l=pt,Le=n.stateNode.containerInfo,pt=!0,Wt(e,t,n),Le=r,pt=l;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&gs(n,t,o),l=l.next}while(l!==r)}Wt(e,t,n);break;case 1:if(!Ue&&(Dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){we(n,t,d)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,Wt(e,t,n),Ue=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function Su(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new ef),t.forEach(function(r){var l=df.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,d=o;e:for(;d!==null;){switch(d.tag){case 5:Le=d.stateNode,pt=!1;break e;case 3:Le=d.stateNode.containerInfo,pt=!0;break e;case 4:Le=d.stateNode.containerInfo,pt=!0;break e}d=d.return}if(Le===null)throw Error(a(160));ku(i,o,l),Le=null,pt=!1;var f=l.alternate;f!==null&&(f.return=null),l.return=null}catch(w){we(l,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Eu(t,e),t=t.sibling}function Eu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),Nt(e),r&4){try{Nr(3,e,e.return),Sl(3,e)}catch(U){we(e,e.return,U)}try{Nr(5,e,e.return)}catch(U){we(e,e.return,U)}}break;case 1:ht(t,e),Nt(e),r&512&&n!==null&&Dn(n,n.return);break;case 5:if(ht(t,e),Nt(e),r&512&&n!==null&&Dn(n,n.return),e.flags&32){var l=e.stateNode;try{Wn(l,"")}catch(U){we(e,e.return,U)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,d=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{d==="input"&&i.type==="radio"&&i.name!=null&&Zs(l,i),Xl(d,o);var w=Xl(d,i);for(o=0;o<f.length;o+=2){var P=f[o],b=f[o+1];P==="style"?so(l,b):P==="dangerouslySetInnerHTML"?lo(l,b):P==="children"?Wn(l,b):q(l,P,b,w)}switch(d){case"input":Hl(l,i);break;case"textarea":to(l,i);break;case"select":var E=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var M=i.value;M!=null?hn(l,!!i.multiple,M,!1):E!==!!i.multiple&&(i.defaultValue!=null?hn(l,!!i.multiple,i.defaultValue,!0):hn(l,!!i.multiple,i.multiple?[]:"",!1))}l[dr]=i}catch(U){we(e,e.return,U)}}break;case 6:if(ht(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(a(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(U){we(e,e.return,U)}}break;case 3:if(ht(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{er(t.containerInfo)}catch(U){we(e,e.return,U)}break;case 4:ht(t,e),Nt(e);break;case 13:ht(t,e),Nt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(Ns=je())),r&4&&Su(e);break;case 22:if(P=n!==null&&n.memoizedState!==null,e.mode&1?(Ue=(w=Ue)||P,ht(t,e),Ue=w):ht(t,e),Nt(e),r&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!P&&(e.mode&1)!==0)for(F=e,P=e.child;P!==null;){for(b=F=P;F!==null;){switch(E=F,M=E.child,E.tag){case 0:case 11:case 14:case 15:Nr(4,E,E.return);break;case 1:Dn(E,E.return);var I=E.stateNode;if(typeof I.componentWillUnmount=="function"){r=E,n=E.return;try{t=r,I.props=t.memoizedProps,I.state=t.memoizedState,I.componentWillUnmount()}catch(U){we(r,n,U)}}break;case 5:Dn(E,E.return);break;case 22:if(E.memoizedState!==null){Ru(b);continue}}M!==null?(M.return=E,F=M):Ru(b)}P=P.sibling}e:for(P=null,b=e;;){if(b.tag===5){if(P===null){P=b;try{l=b.stateNode,w?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(d=b.stateNode,f=b.memoizedProps.style,o=f!=null&&f.hasOwnProperty("display")?f.display:null,d.style.display=io("display",o))}catch(U){we(e,e.return,U)}}}else if(b.tag===6){if(P===null)try{b.stateNode.nodeValue=w?"":b.memoizedProps}catch(U){we(e,e.return,U)}}else if((b.tag!==22&&b.tag!==23||b.memoizedState===null||b===e)&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===e)break e;for(;b.sibling===null;){if(b.return===null||b.return===e)break e;P===b&&(P=null),b=b.return}P===b&&(P=null),b.sibling.return=b.return,b=b.sibling}}break;case 19:ht(t,e),Nt(e),r&4&&Su(e);break;case 21:break;default:ht(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ju(n)){var r=n;break e}n=n.return}throw Error(a(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Wn(l,""),r.flags&=-33);var i=Nu(e);xs(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,d=Nu(e);ys(e,d,o);break;default:throw Error(a(161))}}catch(f){we(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function nf(e,t,n){F=e,Cu(e)}function Cu(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var l=F,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||kl;if(!o){var d=l.alternate,f=d!==null&&d.memoizedState!==null||Ue;d=kl;var w=Ue;if(kl=o,(Ue=f)&&!w)for(F=l;F!==null;)o=F,f=o.child,o.tag===22&&o.memoizedState!==null?bu(l):f!==null?(f.return=o,F=f):bu(l);for(;i!==null;)F=i,Cu(i),i=i.sibling;F=l,kl=d,Ue=w}Pu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,F=i):Pu(e)}}function Pu(e){for(;F!==null;){var t=F;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ue||Sl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:mt(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ra(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ra(t,o,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var P=w.memoizedState;if(P!==null){var b=P.dehydrated;b!==null&&er(b)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(a(163))}Ue||t.flags&512&&vs(t)}catch(E){we(t,t.return,E)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function Ru(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function bu(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sl(4,t)}catch(f){we(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(f){we(t,l,f)}}var i=t.return;try{vs(t)}catch(f){we(t,i,f)}break;case 5:var o=t.return;try{vs(t)}catch(f){we(t,o,f)}}}catch(f){we(t,t.return,f)}if(t===e){F=null;break}var d=t.sibling;if(d!==null){d.return=t.return,F=d;break}F=t.return}}var rf=Math.ceil,El=Z.ReactCurrentDispatcher,ws=Z.ReactCurrentOwner,ot=Z.ReactCurrentBatchConfig,te=0,be=null,ke=null,Oe=0,tt=0,Fn=At(0),Pe=0,kr=null,an=0,Cl=0,js=0,Sr=null,Ke=null,Ns=0,An=1/0,_t=null,Pl=!1,ks=null,Vt=null,Rl=!1,Ht=null,bl=0,Er=0,Ss=null,_l=-1,zl=0;function We(){return(te&6)!==0?je():_l!==-1?_l:_l=je()}function Qt(e){return(e.mode&1)===0?1:(te&2)!==0&&Oe!==0?Oe&-Oe:Ud.transition!==null?(zl===0&&(zl=No()),zl):(e=ae,e!==0||(e=window.event,e=e===void 0?16:zo(e.type)),e)}function gt(e,t,n,r){if(50<Er)throw Er=0,Ss=null,Error(a(185));Gn(e,n,r),((te&2)===0||e!==be)&&(e===be&&((te&2)===0&&(Cl|=n),Pe===4&&Yt(e,Oe)),Ge(e,r),n===1&&te===0&&(t.mode&1)===0&&(An=je()+500,il&&Ut()))}function Ge(e,t){var n=e.callbackNode;Uc(e,t);var r=Ur(e,e===be?Oe:0);if(r===0)n!==null&&xo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&xo(n),t===1)e.tag===0?Id(zu.bind(null,e)):ga(zu.bind(null,e)),Md(function(){(te&6)===0&&Ut()}),n=null;else{switch(ko(r)){case 1:n=ri;break;case 4:n=wo;break;case 16:n=Dr;break;case 536870912:n=jo;break;default:n=Dr}n=Iu(n,_u.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function _u(e,t){if(_l=-1,zl=0,(te&6)!==0)throw Error(a(327));var n=e.callbackNode;if(In()&&e.callbackNode!==n)return null;var r=Ur(e,e===be?Oe:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Tl(e,r);else{t=r;var l=te;te|=2;var i=Lu();(be!==e||Oe!==t)&&(_t=null,An=je()+500,cn(e,t));do try{of();break}catch(d){Tu(e,d)}while(!0);$i(),El.current=i,te=l,ke!==null?t=0:(be=null,Oe=0,t=Pe)}if(t!==0){if(t===2&&(l=li(e),l!==0&&(r=l,t=Es(e,l))),t===1)throw n=kr,cn(e,0),Yt(e,r),Ge(e,je()),n;if(t===6)Yt(e,r);else{if(l=e.current.alternate,(r&30)===0&&!lf(l)&&(t=Tl(e,r),t===2&&(i=li(e),i!==0&&(r=i,t=Es(e,i))),t===1))throw n=kr,cn(e,0),Yt(e,r),Ge(e,je()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(a(345));case 2:dn(e,Ke,_t);break;case 3:if(Yt(e,r),(r&130023424)===r&&(t=Ns+500-je(),10<t)){if(Ur(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=zi(dn.bind(null,e,Ke,_t),t);break}dn(e,Ke,_t);break;case 4:if(Yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-ct(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*rf(r/1960))-r,10<r){e.timeoutHandle=zi(dn.bind(null,e,Ke,_t),r);break}dn(e,Ke,_t);break;case 5:dn(e,Ke,_t);break;default:throw Error(a(329))}}}return Ge(e,je()),e.callbackNode===n?_u.bind(null,e):null}function Es(e,t){var n=Sr;return e.current.memoizedState.isDehydrated&&(cn(e,t).flags|=256),e=Tl(e,t),e!==2&&(t=Ke,Ke=n,t!==null&&Cs(t)),e}function Cs(e){Ke===null?Ke=e:Ke.push.apply(Ke,e)}function lf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!dt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~js,t&=~Cl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ct(t),r=1<<n;e[n]=-1,t&=~r}}function zu(e){if((te&6)!==0)throw Error(a(327));In();var t=Ur(e,0);if((t&1)===0)return Ge(e,je()),null;var n=Tl(e,t);if(e.tag!==0&&n===2){var r=li(e);r!==0&&(t=r,n=Es(e,r))}if(n===1)throw n=kr,cn(e,0),Yt(e,t),Ge(e,je()),n;if(n===6)throw Error(a(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,dn(e,Ke,_t),Ge(e,je()),null}function Ps(e,t){var n=te;te|=1;try{return e(t)}finally{te=n,te===0&&(An=je()+500,il&&Ut())}}function un(e){Ht!==null&&Ht.tag===0&&(te&6)===0&&In();var t=te;te|=1;var n=ot.transition,r=ae;try{if(ot.transition=null,ae=1,e)return e()}finally{ae=r,ot.transition=n,te=t,(te&6)===0&&Ut()}}function Rs(){tt=Fn.current,me(Fn)}function cn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Od(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Fi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&rl();break;case 3:On(),me(He),me(Fe),Xi();break;case 5:Ki(r);break;case 4:On();break;case 13:me(ge);break;case 19:me(ge);break;case 10:Wi(r.type._context);break;case 22:case 23:Rs()}n=n.return}if(be=e,ke=e=Kt(e.current,null),Oe=tt=t,Pe=0,kr=null,js=Cl=an=0,Ke=Sr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}ln=null}return e}function Tu(e,t){do{var n=ke;try{if($i(),hl.current=xl,gl){for(var r=ve.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}gl=!1}if(on=0,Re=Ce=ve=null,vr=!1,yr=0,ws.current=null,n===null||n.return===null){Pe=1,kr=t,ke=null;break}e:{var i=e,o=n.return,d=n,f=t;if(t=Oe,d.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var w=f,P=d,b=P.tag;if((P.mode&1)===0&&(b===0||b===11||b===15)){var E=P.alternate;E?(P.updateQueue=E.updateQueue,P.memoizedState=E.memoizedState,P.lanes=E.lanes):(P.updateQueue=null,P.memoizedState=null)}var M=ru(o);if(M!==null){M.flags&=-257,lu(M,o,d,i,t),M.mode&1&&nu(i,w,t),t=M,f=w;var I=t.updateQueue;if(I===null){var U=new Set;U.add(f),t.updateQueue=U}else I.add(f);break e}else{if((t&1)===0){nu(i,w,t),bs();break e}f=Error(a(426))}}else if(he&&d.mode&1){var Ne=ru(o);if(Ne!==null){(Ne.flags&65536)===0&&(Ne.flags|=256),lu(Ne,o,d,i,t),Ui(Mn(f,d));break e}}i=f=Mn(f,d),Pe!==4&&(Pe=2),Sr===null?Sr=[i]:Sr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var y=eu(i,f,t);Pa(i,y);break e;case 1:d=f;var p=i.type,x=i.stateNode;if((i.flags&128)===0&&(typeof p.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Vt===null||!Vt.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t;var T=tu(i,d,t);Pa(i,T);break e}}i=i.return}while(i!==null)}Mu(n)}catch(B){t=B,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function Lu(){var e=El.current;return El.current=xl,e===null?xl:e}function bs(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),be===null||(an&268435455)===0&&(Cl&268435455)===0||Yt(be,Oe)}function Tl(e,t){var n=te;te|=2;var r=Lu();(be!==e||Oe!==t)&&(_t=null,cn(e,t));do try{sf();break}catch(l){Tu(e,l)}while(!0);if($i(),te=n,El.current=r,ke!==null)throw Error(a(261));return be=null,Oe=0,Pe}function sf(){for(;ke!==null;)Ou(ke)}function of(){for(;ke!==null&&!zc();)Ou(ke)}function Ou(e){var t=Au(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?Mu(e):ke=t,ws.current=null}function Mu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Zd(n,t,tt),n!==null){ke=n;return}}else{if(n=qd(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Pe=6,ke=null;return}}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Pe===0&&(Pe=5)}function dn(e,t,n){var r=ae,l=ot.transition;try{ot.transition=null,ae=1,af(e,t,n,r)}finally{ot.transition=l,ae=r}return null}function af(e,t,n,r){do In();while(Ht!==null);if((te&6)!==0)throw Error(a(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(a(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Bc(e,i),e===be&&(ke=be=null,Oe=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Rl||(Rl=!0,Iu(Dr,function(){return In(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=ot.transition,ot.transition=null;var o=ae;ae=1;var d=te;te|=4,ws.current=null,tf(e,n),Eu(n,e),Pd(bi),Wr=!!Ri,bi=Ri=null,e.current=n,nf(n),Tc(),te=d,ae=o,ot.transition=i}else e.current=n;if(Rl&&(Rl=!1,Ht=e,bl=l),i=e.pendingLanes,i===0&&(Vt=null),Mc(n.stateNode),Ge(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(Pl)throw Pl=!1,e=ks,ks=null,e;return(bl&1)!==0&&e.tag!==0&&In(),i=e.pendingLanes,(i&1)!==0?e===Ss?Er++:(Er=0,Ss=e):Er=0,Ut(),null}function In(){if(Ht!==null){var e=ko(bl),t=ot.transition,n=ae;try{if(ot.transition=null,ae=16>e?16:e,Ht===null)var r=!1;else{if(e=Ht,Ht=null,bl=0,(te&6)!==0)throw Error(a(331));var l=te;for(te|=4,F=e.current;F!==null;){var i=F,o=i.child;if((F.flags&16)!==0){var d=i.deletions;if(d!==null){for(var f=0;f<d.length;f++){var w=d[f];for(F=w;F!==null;){var P=F;switch(P.tag){case 0:case 11:case 15:Nr(8,P,i)}var b=P.child;if(b!==null)b.return=P,F=b;else for(;F!==null;){P=F;var E=P.sibling,M=P.return;if(wu(P),P===w){F=null;break}if(E!==null){E.return=M,F=E;break}F=M}}}var I=i.alternate;if(I!==null){var U=I.child;if(U!==null){I.child=null;do{var Ne=U.sibling;U.sibling=null,U=Ne}while(U!==null)}}F=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,F=o;else e:for(;F!==null;){if(i=F,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Nr(9,i,i.return)}var y=i.sibling;if(y!==null){y.return=i.return,F=y;break e}F=i.return}}var p=e.current;for(F=p;F!==null;){o=F;var x=o.child;if((o.subtreeFlags&2064)!==0&&x!==null)x.return=o,F=x;else e:for(o=p;F!==null;){if(d=F,(d.flags&2048)!==0)try{switch(d.tag){case 0:case 11:case 15:Sl(9,d)}}catch(B){we(d,d.return,B)}if(d===o){F=null;break e}var T=d.sibling;if(T!==null){T.return=d.return,F=T;break e}F=d.return}}if(te=l,Ut(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(Fr,e)}catch{}r=!0}return r}finally{ae=n,ot.transition=t}}return!1}function Du(e,t,n){t=Mn(n,t),t=eu(e,t,1),e=$t(e,t,1),t=We(),e!==null&&(Gn(e,1,t),Ge(e,t))}function we(e,t,n){if(e.tag===3)Du(e,e,n);else for(;t!==null;){if(t.tag===3){Du(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Vt===null||!Vt.has(r))){e=Mn(n,e),e=tu(t,e,1),t=$t(t,e,1),e=We(),t!==null&&(Gn(t,1,e),Ge(t,e));break}}t=t.return}}function uf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Oe&n)===n&&(Pe===4||Pe===3&&(Oe&130023424)===Oe&&500>je()-Ns?cn(e,0):js|=n),Ge(e,t)}function Fu(e,t){t===0&&((e.mode&1)===0?t=1:(t=Ir,Ir<<=1,(Ir&130023424)===0&&(Ir=4194304)));var n=We();e=Pt(e,t),e!==null&&(Gn(e,t,n),Ge(e,n))}function cf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Fu(e,n)}function df(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(a(314))}r!==null&&r.delete(t),Fu(e,n)}var Au;Au=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||He.current)Ye=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Ye=!1,Jd(e,t,n);Ye=(e.flags&131072)!==0}else Ye=!1,he&&(t.flags&1048576)!==0&&va(t,ol,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Nl(e,t),e=t.pendingProps;var l=Pn(t,Fe.current);Ln(t,n),l=qi(null,t,r,e,l,n);var i=es();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qe(r)?(i=!0,ll(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Qi(t),l.updater=wl,t.stateNode=l,l._reactInternals=t,ss(t,r,e,n),t=cs(null,t,r,!0,i,n)):(t.tag=0,he&&i&&Di(t),$e(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Nl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=mf(r),e=mt(r,e),l){case 0:t=us(null,t,r,e,n);break e;case 1:t=cu(null,t,r,e,n);break e;case 11:t=iu(null,t,r,e,n);break e;case 14:t=su(null,t,r,mt(r.type,e),n);break e}throw Error(a(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:mt(r,l),us(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:mt(r,l),cu(e,t,r,l,n);case 3:e:{if(du(t),e===null)throw Error(a(387));r=t.pendingProps,i=t.memoizedState,l=i.element,Ca(e,t),ml(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=Mn(Error(a(423)),t),t=fu(e,t,r,n,l);break e}else if(r!==l){l=Mn(Error(a(424)),t),t=fu(e,t,r,n,l);break e}else for(et=Ft(t.stateNode.containerInfo.firstChild),qe=t,he=!0,ft=null,n=Sa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_n(),r===l){t=bt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return ba(t),e===null&&Ii(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,_i(r,l)?o=null:i!==null&&_i(r,i)&&(t.flags|=32),uu(e,t),$e(e,t,o,n),t.child;case 6:return e===null&&Ii(t),null;case 13:return mu(e,t,n);case 4:return Yi(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=zn(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:mt(r,l),iu(e,t,r,l,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,ce(cl,r._currentValue),r._currentValue=o,i!==null)if(dt(i.value,o)){if(i.children===l.children&&!He.current){t=bt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var d=i.dependencies;if(d!==null){o=i.child;for(var f=d.firstContext;f!==null;){if(f.context===r){if(i.tag===1){f=Rt(-1,n&-n),f.tag=2;var w=i.updateQueue;if(w!==null){w=w.shared;var P=w.pending;P===null?f.next=f:(f.next=P.next,P.next=f),w.pending=f}}i.lanes|=n,f=i.alternate,f!==null&&(f.lanes|=n),Vi(i.return,n,t),d.lanes|=n;break}f=f.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(a(341));o.lanes|=n,d=o.alternate,d!==null&&(d.lanes|=n),Vi(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}$e(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,Ln(t,n),l=it(l),r=r(l),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,l=mt(r,t.pendingProps),l=mt(r.type,l),su(e,t,r,l,n);case 15:return ou(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:mt(r,l),Nl(e,t),t.tag=1,Qe(r)?(e=!0,ll(t)):e=!1,Ln(t,n),Za(t,r,l),ss(t,r,l,n),cs(null,t,r,!0,e,n);case 19:return hu(e,t,n);case 22:return au(e,t,n)}throw Error(a(156,t.tag))};function Iu(e,t){return yo(e,t)}function ff(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function at(e,t,n,r){return new ff(e,t,n,r)}function _s(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mf(e){if(typeof e=="function")return _s(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Be)return 11;if(e===De)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=at(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ll(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")_s(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Me:return fn(n.children,l,i,t);case Ve:o=8,l|=8;break;case vt:return e=at(12,n,t,l|2),e.elementType=vt,e.lanes=i,e;case xe:return e=at(13,n,t,l),e.elementType=xe,e.lanes=i,e;case Te:return e=at(19,n,t,l),e.elementType=Te,e.lanes=i,e;case de:return Ol(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case nt:o=10;break e;case ye:o=9;break e;case Be:o=11;break e;case De:o=14;break e;case Ee:o=16,r=null;break e}throw Error(a(130,e==null?e:typeof e,""))}return t=at(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function fn(e,t,n,r){return e=at(7,e,r,t),e.lanes=n,e}function Ol(e,t,n,r){return e=at(22,e,r,t),e.elementType=de,e.lanes=n,e.stateNode={isHidden:!1},e}function zs(e,t,n){return e=at(6,e,null,t),e.lanes=n,e}function Ts(e,t,n){return t=at(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ii(0),this.expirationTimes=ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ii(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function Ls(e,t,n,r,l,i,o,d,f){return e=new pf(e,t,n,d,f),t===1?(t=1,i===!0&&(t|=8)):t=0,i=at(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qi(i),e}function hf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ze,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Uu(e){if(!e)return It;e=e._reactInternals;e:{if(qt(e)!==e||e.tag!==1)throw Error(a(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(a(171))}if(e.tag===1){var n=e.type;if(Qe(n))return pa(e,n,t)}return t}function Bu(e,t,n,r,l,i,o,d,f){return e=Ls(n,r,!0,e,l,i,o,d,f),e.context=Uu(null),n=e.current,r=We(),l=Qt(n),i=Rt(r,l),i.callback=t??null,$t(n,i,l),e.current.lanes=l,Gn(e,l,r),Ge(e,r),e}function Ml(e,t,n,r){var l=t.current,i=We(),o=Qt(l);return n=Uu(n),t.context===null?t.context=n:t.pendingContext=n,t=Rt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$t(l,t,o),e!==null&&(gt(e,l,o,i),fl(e,l,o)),o}function Dl(e){return e=e.current,e.child?(e.child.tag===5,e.child.stateNode):null}function $u(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Os(e,t){$u(e,t),(e=e.alternate)&&$u(e,t)}function gf(){return null}var Wu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ms(e){this._internalRoot=e}Fl.prototype.render=Ms.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(a(409));Ml(e,t,null,null)},Fl.prototype.unmount=Ms.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;un(function(){Ml(null,e,null,null)}),t[kt]=null}};function Fl(e){this._internalRoot=e}Fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Co();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ot.length&&t!==0&&t<Ot[n].priority;n++);Ot.splice(n,0,e),n===0&&bo(e)}};function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Al(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Vu(){}function vf(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var w=Dl(o);i.call(w)}}var o=Bu(t,r,e,0,null,!1,!1,"",Vu);return e._reactRootContainer=o,e[kt]=o.current,ur(e.nodeType===8?e.parentNode:e),un(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var d=r;r=function(){var w=Dl(f);d.call(w)}}var f=Ls(e,0,!1,null,null,!1,!1,"",Vu);return e._reactRootContainer=f,e[kt]=f.current,ur(e.nodeType===8?e.parentNode:e),un(function(){Ml(t,f,n,r)}),f}function Il(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var d=l;l=function(){var f=Dl(o);d.call(f)}}Ml(t,o,e,l)}else o=vf(n,t,e,l,r);return Dl(o)}So=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Kn(t.pendingLanes);n!==0&&(si(t,n|1),Ge(t,je()),(te&6)===0&&(An=je()+500,Ut()))}break;case 13:un(function(){var r=Pt(e,1);if(r!==null){var l=We();gt(r,e,1,l)}}),Os(e,1)}},oi=function(e){if(e.tag===13){var t=Pt(e,134217728);if(t!==null){var n=We();gt(t,e,134217728,n)}Os(e,134217728)}},Eo=function(e){if(e.tag===13){var t=Qt(e),n=Pt(e,t);if(n!==null){var r=We();gt(n,e,t,r)}Os(e,t)}},Co=function(){return ae},Po=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}},ql=function(e,t,n){switch(t){case"input":if(Hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=nl(r);if(!l)throw Error(a(90));Xs(r),Hl(r,l)}}}break;case"textarea":to(e,n);break;case"select":t=n.value,t!=null&&hn(e,!!n.multiple,t,!1)}},co=Ps,fo=un;var yf={usingClientEntryPoint:!1,Events:[fr,En,nl,ao,uo,Ps]},Cr={findFiberByHostInstance:en,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xf={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=go(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||gf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{Fr=Ul.inject(xf),yt=Ul}catch{}}return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yf,Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ds(t))throw Error(a(200));return hf(e,t,null,n)},Xe.createRoot=function(e,t){if(!Ds(e))throw Error(a(299));var n=!1,r="",l=Wu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=Ls(e,1,!1,null,null,n,!1,r,l),e[kt]=t.current,ur(e.nodeType===8?e.parentNode:e),new Ms(t)},Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=go(t),e=e===null?null:e.stateNode,e},Xe.flushSync=function(e){return un(e)},Xe.hydrate=function(e,t,n){if(!Al(t))throw Error(a(200));return Il(null,e,t,!0,n)},Xe.hydrateRoot=function(e,t,n){if(!Ds(e))throw Error(a(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=Wu;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Bu(t,null,e,1,n??null,l,!1,i,o),e[kt]=t.current,ur(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new Fl(t)},Xe.render=function(e,t,n){if(!Al(t))throw Error(a(200));return Il(null,e,t,!1,n)},Xe.unmountComponentAtNode=function(e){if(!Al(e))throw Error(a(40));return e._reactRootContainer?(un(function(){Il(null,null,e,!1,function(){e._reactRootContainer=null,e[kt]=null})}),!0):!1},Xe.unstable_batchedUpdates=Ps,Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Al(n))throw Error(a(200));if(e==null||e._reactInternals===void 0)throw Error(a(38));return Il(e,t,n,!1,r)},Xe.version="18.3.1-next-f1338f8080-20240426",Xe}var Zu;function fc(){if(Zu)return Is.exports;Zu=1;function u(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u)}catch(c){console.error(c)}}return u(),Is.exports=Rf(),Is.exports}var qu;function bf(){if(qu)return Bl;qu=1;var u=fc();return Bl.createRoot=u.createRoot,Bl.hydrateRoot=u.hydrateRoot,Bl}var _f=bf();const zf=cc(_f);fc();function Rr(){return Rr=Object.assign?Object.assign.bind():function(u){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var m in a)Object.prototype.hasOwnProperty.call(a,m)&&(u[m]=a[m])}return u},Rr.apply(this,arguments)}var Jt;(function(u){u.Pop="POP",u.Push="PUSH",u.Replace="REPLACE"})(Jt||(Jt={}));const ec="popstate";function Tf(u){u===void 0&&(u={});function c(m,h){let{pathname:g,search:j,hash:N}=m.location;return Ws("",{pathname:g,search:j,hash:N},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function a(m,h){return typeof h=="string"?h:$l(h)}return Of(c,a,null,u)}function Se(u,c){if(u===!1||u===null||typeof u>"u")throw new Error(c)}function Ys(u,c){if(!u){typeof console<"u"&&console.warn(c);try{throw new Error(c)}catch{}}}function Lf(){return Math.random().toString(36).substr(2,8)}function tc(u,c){return{usr:u.state,key:u.key,idx:c}}function Ws(u,c,a,m){return a===void 0&&(a=null),Rr({pathname:typeof u=="string"?u:u.pathname,search:"",hash:""},typeof c=="string"?Un(c):c,{state:a,key:c&&c.key||m||Lf()})}function $l(u){let{pathname:c="/",search:a="",hash:m=""}=u;return a&&a!=="?"&&(c+=a.charAt(0)==="?"?a:"?"+a),m&&m!=="#"&&(c+=m.charAt(0)==="#"?m:"#"+m),c}function Un(u){let c={};if(u){let a=u.indexOf("#");a>=0&&(c.hash=u.substr(a),u=u.substr(0,a));let m=u.indexOf("?");m>=0&&(c.search=u.substr(m),u=u.substr(0,m)),u&&(c.pathname=u)}return c}function Of(u,c,a,m){m===void 0&&(m={});let{window:h=document.defaultView,v5Compat:g=!1}=m,j=h.history,N=Jt.Pop,k=null,_=z();_==null&&(_=0,j.replaceState(Rr({},j.state,{idx:_}),""));function z(){return(j.state||{idx:null}).idx}function R(){N=Jt.Pop;let L=z(),ie=L==null?null:L-_;_=L,k&&k({action:N,location:$.location,delta:ie})}function D(L,ie){N=Jt.Push;let se=Ws($.location,L,ie);_=z()+1;let q=tc(se,_),Z=$.createHref(se);try{j.pushState(q,"",Z)}catch(ee){if(ee instanceof DOMException&&ee.name==="DataCloneError")throw ee;h.location.assign(Z)}g&&k&&k({action:N,location:$.location,delta:1})}function Y(L,ie){N=Jt.Replace;let se=Ws($.location,L,ie);_=z();let q=tc(se,_),Z=$.createHref(se);j.replaceState(q,"",Z),g&&k&&k({action:N,location:$.location,delta:0})}function K(L){let ie=h.location.origin!=="null"?h.location.origin:h.location.href,se=typeof L=="string"?L:$l(L);return se=se.replace(/ $/,"%20"),Se(ie,"No window.location.(origin|href) available to create URL for href: "+se),new URL(se,ie)}let $={get action(){return N},get location(){return u(h,j)},listen(L){if(k)throw new Error("A history only accepts one active listener");return h.addEventListener(ec,R),k=L,()=>{h.removeEventListener(ec,R),k=null}},createHref(L){return c(h,L)},createURL:K,encodeLocation(L){let ie=K(L);return{pathname:ie.pathname,search:ie.search,hash:ie.hash}},push:D,replace:Y,go(L){return j.go(L)}};return $}var nc;(function(u){u.data="data",u.deferred="deferred",u.redirect="redirect",u.error="error"})(nc||(nc={}));function Mf(u,c,a){return a===void 0&&(a="/"),Df(u,c,a)}function Df(u,c,a,m){let h=typeof c=="string"?Un(c):c,g=Ks(h.pathname||"/",a);if(g==null)return null;let j=mc(u);Ff(j);let N=null;for(let k=0;N==null&&k<j.length;++k){let _=Gf(g);N=Qf(j[k],_)}return N}function mc(u,c,a,m){c===void 0&&(c=[]),a===void 0&&(a=[]),m===void 0&&(m="");let h=(g,j,N)=>{let k={relativePath:N===void 0?g.path||"":N,caseSensitive:g.caseSensitive===!0,childrenIndex:j,route:g};k.relativePath.startsWith("/")&&(Se(k.relativePath.startsWith(m),'Absolute route path "'+k.relativePath+'" nested under path '+('"'+m+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),k.relativePath=k.relativePath.slice(m.length));let _=Zt([m,k.relativePath]),z=a.concat(k);g.children&&g.children.length>0&&(Se(g.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+_+'".')),mc(g.children,c,z,_)),!(g.path==null&&!g.index)&&c.push({path:_,score:Vf(_,g.index),routesMeta:z})};return u.forEach((g,j)=>{var N;if(g.path===""||!((N=g.path)!=null&&N.includes("?")))h(g,j);else for(let k of pc(g.path))h(g,j,k)}),c}function pc(u){let c=u.split("/");if(c.length===0)return[];let[a,...m]=c,h=a.endsWith("?"),g=a.replace(/\?$/,"");if(m.length===0)return h?[g,""]:[g];let j=pc(m.join("/")),N=[];return N.push(...j.map(k=>k===""?g:[g,k].join("/"))),h&&N.push(...j),N.map(k=>u.startsWith("/")&&k===""?"/":k)}function Ff(u){u.sort((c,a)=>c.score!==a.score?a.score-c.score:Hf(c.routesMeta.map(m=>m.childrenIndex),a.routesMeta.map(m=>m.childrenIndex)))}const Af=/^:[\w-]+$/,If=3,Uf=2,Bf=1,$f=10,Wf=-2,rc=u=>u==="*";function Vf(u,c){let a=u.split("/"),m=a.length;return a.some(rc)&&(m+=Wf),c&&(m+=Uf),a.filter(h=>!rc(h)).reduce((h,g)=>h+(Af.test(g)?If:g===""?Bf:$f),m)}function Hf(u,c){return u.length===c.length&&u.slice(0,-1).every((m,h)=>m===c[h])?u[u.length-1]-c[c.length-1]:0}function Qf(u,c,a){let{routesMeta:m}=u,h={},g="/",j=[];for(let N=0;N<m.length;++N){let k=m[N],_=N===m.length-1,z=g==="/"?c:c.slice(g.length)||"/",R=Yf({path:k.relativePath,caseSensitive:k.caseSensitive,end:_},z),D=k.route;if(!R)return null;Object.assign(h,R.params),j.push({params:h,pathname:Zt([g,R.pathname]),pathnameBase:em(Zt([g,R.pathnameBase])),route:D}),R.pathnameBase!=="/"&&(g=Zt([g,R.pathnameBase]))}return j}function Yf(u,c){typeof u=="string"&&(u={path:u,caseSensitive:!1,end:!0});let[a,m]=Kf(u.path,u.caseSensitive,u.end),h=c.match(a);if(!h)return null;let g=h[0],j=g.replace(/(.)\/+$/,"$1"),N=h.slice(1);return{params:m.reduce((_,z,R)=>{let{paramName:D,isOptional:Y}=z;if(D==="*"){let $=N[R]||"";j=g.slice(0,g.length-$.length).replace(/(.)\/+$/,"$1")}const K=N[R];return Y&&!K?_[D]=void 0:_[D]=(K||"").replace(/%2F/g,"/"),_},{}),pathname:g,pathnameBase:j,pattern:u}}function Kf(u,c,a){c===void 0&&(c=!1),a===void 0&&(a=!0),Ys(u==="*"||!u.endsWith("*")||u.endsWith("/*"),'Route path "'+u+'" will be treated as if it were '+('"'+u.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+u.replace(/\*$/,"/*")+'".'));let m=[],h="^"+u.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(j,N,k)=>(m.push({paramName:N,isOptional:k!=null}),k?"/?([^\\/]+)?":"/([^\\/]+)"));return u.endsWith("*")?(m.push({paramName:"*"}),h+=u==="*"||u==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?h+="\\/*$":u!==""&&u!=="/"&&(h+="(?:(?=\\/|$))"),[new RegExp(h,c?void 0:"i"),m]}function Gf(u){try{return u.split("/").map(c=>decodeURIComponent(c).replace(/\//g,"%2F")).join("/")}catch(c){return Ys(!1,'The URL path "'+u+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+c+").")),u}}function Ks(u,c){if(c==="/")return u;if(!u.toLowerCase().startsWith(c.toLowerCase()))return null;let a=c.endsWith("/")?c.length-1:c.length,m=u.charAt(a);return m&&m!=="/"?null:u.slice(a)||"/"}const Xf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jf=u=>Xf.test(u);function Zf(u,c){c===void 0&&(c="/");let{pathname:a,search:m="",hash:h=""}=typeof u=="string"?Un(u):u,g;if(a)if(Jf(a))g=a;else{if(a.includes("//")){let j=a;a=a.replace(/\/\/+/g,"/"),Ys(!1,"Pathnames cannot have embedded double slashes - normalizing "+(j+" -> "+a))}a.startsWith("/")?g=lc(a.substring(1),"/"):g=lc(a,c)}else g=c;return{pathname:g,search:tm(m),hash:nm(h)}}function lc(u,c){let a=c.replace(/\/+$/,"").split("/");return u.split("/").forEach(h=>{h===".."?a.length>1&&a.pop():h!=="."&&a.push(h)}),a.length>1?a.join("/"):"/"}function $s(u,c,a,m){return"Cannot include a '"+u+"' character in a manually specified "+("`to."+c+"` field ["+JSON.stringify(m)+"].  Please separate it out to the ")+("`to."+a+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qf(u){return u.filter((c,a)=>a===0||c.route.path&&c.route.path.length>0)}function hc(u,c){let a=qf(u);return c?a.map((m,h)=>h===a.length-1?m.pathname:m.pathnameBase):a.map(m=>m.pathnameBase)}function gc(u,c,a,m){m===void 0&&(m=!1);let h;typeof u=="string"?h=Un(u):(h=Rr({},u),Se(!h.pathname||!h.pathname.includes("?"),$s("?","pathname","search",h)),Se(!h.pathname||!h.pathname.includes("#"),$s("#","pathname","hash",h)),Se(!h.search||!h.search.includes("#"),$s("#","search","hash",h)));let g=u===""||h.pathname==="",j=g?"/":h.pathname,N;if(j==null)N=a;else{let R=c.length-1;if(!m&&j.startsWith("..")){let D=j.split("/");for(;D[0]==="..";)D.shift(),R-=1;h.pathname=D.join("/")}N=R>=0?c[R]:"/"}let k=Zf(h,N),_=j&&j!=="/"&&j.endsWith("/"),z=(g||j===".")&&a.endsWith("/");return!k.pathname.endsWith("/")&&(_||z)&&(k.pathname+="/"),k}const Zt=u=>u.join("/").replace(/\/\/+/g,"/"),em=u=>u.replace(/\/+$/,"").replace(/^\/*/,"/"),tm=u=>!u||u==="?"?"":u.startsWith("?")?u:"?"+u,nm=u=>!u||u==="#"?"":u.startsWith("#")?u:"#"+u;function rm(u){return u!=null&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.internal=="boolean"&&"data"in u}const vc=["post","put","patch","delete"];new Set(vc);const lm=["get",...vc];new Set(lm);function br(){return br=Object.assign?Object.assign.bind():function(u){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var m in a)Object.prototype.hasOwnProperty.call(a,m)&&(u[m]=a[m])}return u},br.apply(this,arguments)}const Gs=S.createContext(null),im=S.createContext(null),mn=S.createContext(null),Wl=S.createContext(null),pn=S.createContext({outlet:null,matches:[],isDataRoute:!1}),yc=S.createContext(null);function sm(u,c){let{relative:a}=c===void 0?{}:c;_r()||Se(!1);let{basename:m,navigator:h}=S.useContext(mn),{hash:g,pathname:j,search:N}=wc(u,{relative:a}),k=j;return m!=="/"&&(k=j==="/"?m:Zt([m,j])),h.createHref({pathname:k,search:N,hash:g})}function _r(){return S.useContext(Wl)!=null}function Bn(){return _r()||Se(!1),S.useContext(Wl).location}function xc(u){S.useContext(mn).static||S.useLayoutEffect(u)}function om(){let{isDataRoute:u}=S.useContext(pn);return u?wm():am()}function am(){_r()||Se(!1);let u=S.useContext(Gs),{basename:c,future:a,navigator:m}=S.useContext(mn),{matches:h}=S.useContext(pn),{pathname:g}=Bn(),j=JSON.stringify(hc(h,a.v7_relativeSplatPath)),N=S.useRef(!1);return xc(()=>{N.current=!0}),S.useCallback(function(_,z){if(z===void 0&&(z={}),!N.current)return;if(typeof _=="number"){m.go(_);return}let R=gc(_,JSON.parse(j),g,z.relative==="path");u==null&&c!=="/"&&(R.pathname=R.pathname==="/"?c:Zt([c,R.pathname])),(z.replace?m.replace:m.push)(R,z.state,z)},[c,m,j,g,u])}function wc(u,c){let{relative:a}=c===void 0?{}:c,{future:m}=S.useContext(mn),{matches:h}=S.useContext(pn),{pathname:g}=Bn(),j=JSON.stringify(hc(h,m.v7_relativeSplatPath));return S.useMemo(()=>gc(u,JSON.parse(j),g,a==="path"),[u,j,g,a])}function um(u,c){return cm(u,c)}function cm(u,c,a,m){_r()||Se(!1);let{navigator:h}=S.useContext(mn),{matches:g}=S.useContext(pn),j=g[g.length-1],N=j?j.params:{};j&&j.pathname;let k=j?j.pathnameBase:"/";j&&j.route;let _=Bn(),z;if(c){var R;let L=typeof c=="string"?Un(c):c;k==="/"||(R=L.pathname)!=null&&R.startsWith(k)||Se(!1),z=L}else z=_;let D=z.pathname||"/",Y=D;if(k!=="/"){let L=k.replace(/^\//,"").split("/");Y="/"+D.replace(/^\//,"").split("/").slice(L.length).join("/")}let K=Mf(u,{pathname:Y}),$=hm(K&&K.map(L=>Object.assign({},L,{params:Object.assign({},N,L.params),pathname:Zt([k,h.encodeLocation?h.encodeLocation(L.pathname).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?k:Zt([k,h.encodeLocation?h.encodeLocation(L.pathnameBase).pathname:L.pathnameBase])})),g,a,m);return c&&$?S.createElement(Wl.Provider,{value:{location:br({pathname:"/",search:"",hash:"",state:null,key:"default"},z),navigationType:Jt.Pop}},$):$}function dm(){let u=xm(),c=rm(u)?u.status+" "+u.statusText:u instanceof Error?u.message:JSON.stringify(u),a=u instanceof Error?u.stack:null,h={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},c),a?S.createElement("pre",{style:h},a):null,null)}const fm=S.createElement(dm,null);class mm extends S.Component{constructor(c){super(c),this.state={location:c.location,revalidation:c.revalidation,error:c.error}}static getDerivedStateFromError(c){return{error:c}}static getDerivedStateFromProps(c,a){return a.location!==c.location||a.revalidation!=="idle"&&c.revalidation==="idle"?{error:c.error,location:c.location,revalidation:c.revalidation}:{error:c.error!==void 0?c.error:a.error,location:a.location,revalidation:c.revalidation||a.revalidation}}componentDidCatch(c,a){console.error("React Router caught the following error during render",c,a)}render(){return this.state.error!==void 0?S.createElement(pn.Provider,{value:this.props.routeContext},S.createElement(yc.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function pm(u){let{routeContext:c,match:a,children:m}=u,h=S.useContext(Gs);return h&&h.static&&h.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(h.staticContext._deepestRenderedBoundaryId=a.route.id),S.createElement(pn.Provider,{value:c},m)}function hm(u,c,a,m){var h;if(c===void 0&&(c=[]),a===void 0&&(a=null),m===void 0&&(m=null),u==null){var g;if(!a)return null;if(a.errors)u=a.matches;else if((g=m)!=null&&g.v7_partialHydration&&c.length===0&&!a.initialized&&a.matches.length>0)u=a.matches;else return null}let j=u,N=(h=a)==null?void 0:h.errors;if(N!=null){let z=j.findIndex(R=>R.route.id&&N?.[R.route.id]!==void 0);z>=0||Se(!1),j=j.slice(0,Math.min(j.length,z+1))}let k=!1,_=-1;if(a&&m&&m.v7_partialHydration)for(let z=0;z<j.length;z++){let R=j[z];if((R.route.HydrateFallback||R.route.hydrateFallbackElement)&&(_=z),R.route.id){let{loaderData:D,errors:Y}=a,K=R.route.loader&&D[R.route.id]===void 0&&(!Y||Y[R.route.id]===void 0);if(R.route.lazy||K){k=!0,_>=0?j=j.slice(0,_+1):j=[j[0]];break}}}return j.reduceRight((z,R,D)=>{let Y,K=!1,$=null,L=null;a&&(Y=N&&R.route.id?N[R.route.id]:void 0,$=R.route.errorElement||fm,k&&(_<0&&D===0?(jm("route-fallback"),K=!0,L=null):_===D&&(K=!0,L=R.route.hydrateFallbackElement||null)));let ie=c.concat(j.slice(0,D+1)),se=()=>{let q;return Y?q=$:K?q=L:R.route.Component?q=S.createElement(R.route.Component,null):R.route.element?q=R.route.element:q=z,S.createElement(pm,{match:R,routeContext:{outlet:z,matches:ie,isDataRoute:a!=null},children:q})};return a&&(R.route.ErrorBoundary||R.route.errorElement||D===0)?S.createElement(mm,{location:a.location,revalidation:a.revalidation,component:$,error:Y,children:se(),routeContext:{outlet:null,matches:ie,isDataRoute:!0}}):se()},null)}var jc=(function(u){return u.UseBlocker="useBlocker",u.UseRevalidator="useRevalidator",u.UseNavigateStable="useNavigate",u})(jc||{}),Nc=(function(u){return u.UseBlocker="useBlocker",u.UseLoaderData="useLoaderData",u.UseActionData="useActionData",u.UseRouteError="useRouteError",u.UseNavigation="useNavigation",u.UseRouteLoaderData="useRouteLoaderData",u.UseMatches="useMatches",u.UseRevalidator="useRevalidator",u.UseNavigateStable="useNavigate",u.UseRouteId="useRouteId",u})(Nc||{});function gm(u){let c=S.useContext(Gs);return c||Se(!1),c}function vm(u){let c=S.useContext(im);return c||Se(!1),c}function ym(u){let c=S.useContext(pn);return c||Se(!1),c}function kc(u){let c=ym(),a=c.matches[c.matches.length-1];return a.route.id||Se(!1),a.route.id}function xm(){var u;let c=S.useContext(yc),a=vm(),m=kc();return c!==void 0?c:(u=a.errors)==null?void 0:u[m]}function wm(){let{router:u}=gm(jc.UseNavigateStable),c=kc(Nc.UseNavigateStable),a=S.useRef(!1);return xc(()=>{a.current=!0}),S.useCallback(function(h,g){g===void 0&&(g={}),a.current&&(typeof h=="number"?u.navigate(h):u.navigate(h,br({fromRouteId:c},g)))},[u,c])}const ic={};function jm(u,c,a){ic[u]||(ic[u]=!0)}function Nm(u,c){u?.v7_startTransition,u?.v7_relativeSplatPath}function Xt(u){Se(!1)}function km(u){let{basename:c="/",children:a=null,location:m,navigationType:h=Jt.Pop,navigator:g,static:j=!1,future:N}=u;_r()&&Se(!1);let k=c.replace(/^\/*/,"/"),_=S.useMemo(()=>({basename:k,navigator:g,static:j,future:br({v7_relativeSplatPath:!1},N)}),[k,N,g,j]);typeof m=="string"&&(m=Un(m));let{pathname:z="/",search:R="",hash:D="",state:Y=null,key:K="default"}=m,$=S.useMemo(()=>{let L=Ks(z,k);return L==null?null:{location:{pathname:L,search:R,hash:D,state:Y,key:K},navigationType:h}},[k,z,R,D,Y,K,h]);return $==null?null:S.createElement(mn.Provider,{value:_},S.createElement(Wl.Provider,{children:a,value:$}))}function Sm(u){let{children:c,location:a}=u;return um(Vs(c),a)}new Promise(()=>{});function Vs(u,c){c===void 0&&(c=[]);let a=[];return S.Children.forEach(u,(m,h)=>{if(!S.isValidElement(m))return;let g=[...c,h];if(m.type===S.Fragment){a.push.apply(a,Vs(m.props.children,g));return}m.type!==Xt&&Se(!1),!m.props.index||!m.props.children||Se(!1);let j={id:m.props.id||g.join("-"),caseSensitive:m.props.caseSensitive,element:m.props.element,Component:m.props.Component,index:m.props.index,path:m.props.path,loader:m.props.loader,action:m.props.action,errorElement:m.props.errorElement,ErrorBoundary:m.props.ErrorBoundary,hasErrorBoundary:m.props.ErrorBoundary!=null||m.props.errorElement!=null,shouldRevalidate:m.props.shouldRevalidate,handle:m.props.handle,lazy:m.props.lazy};m.props.children&&(j.children=Vs(m.props.children,g)),a.push(j)}),a}function Hs(){return Hs=Object.assign?Object.assign.bind():function(u){for(var c=1;c<arguments.length;c++){var a=arguments[c];for(var m in a)Object.prototype.hasOwnProperty.call(a,m)&&(u[m]=a[m])}return u},Hs.apply(this,arguments)}function Em(u,c){if(u==null)return{};var a={},m=Object.keys(u),h,g;for(g=0;g<m.length;g++)h=m[g],!(c.indexOf(h)>=0)&&(a[h]=u[h]);return a}function Cm(u){return!!(u.metaKey||u.altKey||u.ctrlKey||u.shiftKey)}function Pm(u,c){return u.button===0&&(!c||c==="_self")&&!Cm(u)}const Rm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],bm="6";try{window.__reactRouterVersion=bm}catch{}const _m="startTransition",sc=Ef[_m];function zm(u){let{basename:c,children:a,future:m,window:h}=u,g=S.useRef();g.current==null&&(g.current=Tf({window:h,v5Compat:!0}));let j=g.current,[N,k]=S.useState({action:j.action,location:j.location}),{v7_startTransition:_}=m||{},z=S.useCallback(R=>{_&&sc?sc(()=>k(R)):k(R)},[k,_]);return S.useLayoutEffect(()=>j.listen(z),[j,z]),S.useEffect(()=>Nm(m),[m]),S.createElement(km,{basename:c,children:a,location:N.location,navigationType:N.action,navigator:j,future:m})}const Tm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Lm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ut=S.forwardRef(function(c,a){let{onClick:m,relative:h,reloadDocument:g,replace:j,state:N,target:k,to:_,preventScrollReset:z,viewTransition:R}=c,D=Em(c,Rm),{basename:Y}=S.useContext(mn),K,$=!1;if(typeof _=="string"&&Lm.test(_)&&(K=_,Tm))try{let q=new URL(window.location.href),Z=_.startsWith("//")?new URL(q.protocol+_):new URL(_),ee=Ks(Z.pathname,Y);Z.origin===q.origin&&ee!=null?_=ee+Z.search+Z.hash:$=!0}catch{}let L=sm(_,{relative:h}),ie=Om(_,{replace:j,state:N,target:k,preventScrollReset:z,relative:h,viewTransition:R});function se(q){m&&m(q),q.defaultPrevented||ie(q)}return S.createElement("a",Hs({},D,{href:K||L,onClick:$||g?m:se,ref:a,target:k}))});var oc;(function(u){u.UseScrollRestoration="useScrollRestoration",u.UseSubmit="useSubmit",u.UseSubmitFetcher="useSubmitFetcher",u.UseFetcher="useFetcher",u.useViewTransitionState="useViewTransitionState"})(oc||(oc={}));var ac;(function(u){u.UseFetcher="useFetcher",u.UseFetchers="useFetchers",u.UseScrollRestoration="useScrollRestoration"})(ac||(ac={}));function Om(u,c){let{target:a,replace:m,state:h,preventScrollReset:g,relative:j,viewTransition:N}=c===void 0?{}:c,k=om(),_=Bn(),z=wc(u,{relative:j});return S.useCallback(R=>{if(Pm(R,a)){R.preventDefault();let D=m!==void 0?m:$l(_)===$l(z);k(u,{replace:D,state:h,preventScrollReset:g,relative:j,viewTransition:N})}},[_,k,z,m,h,a,u,g,j,N])}function Mm(){const[u,c]=S.useState(!1),[a,m]=S.useState(!1),h=Bn();S.useEffect(()=>{const j=()=>{m(window.scrollY>50)};return window.addEventListener("scroll",j),()=>window.removeEventListener("scroll",j)},[]);const g=j=>h.pathname===j;return s.jsx("nav",{className:a?"scrolled":"",children:s.jsxs("div",{className:"nav-container",children:[s.jsx(ut,{to:"/",className:"nav-logo",children:u?s.jsx("span",{className:"nav-logo-text",children:"DRONA"}):s.jsx("img",{src:"/logo.png",alt:"DRONA Rocket Team",onError:()=>c(!0)})}),s.jsx("div",{className:"nav-spacer"}),s.jsxs("div",{className:"nav-links",children:[s.jsx(ut,{to:"/",className:g("/")?"active":"",children:"Home"}),s.jsx(ut,{to:"/about",className:g("/about")?"active":"",children:"About"}),s.jsx(ut,{to:"/rocket",className:g("/rocket")?"active":"",children:"Rocket"}),s.jsx(ut,{to:"/subsystems",className:g("/subsystems")?"active":"",children:"Subsystems"}),s.jsx(ut,{to:"/team",className:g("/team")?"active":"",children:"Team"}),s.jsx(ut,{to:"/newsletter",className:g("/newsletter")?"active":"",children:"Newsletter"}),s.jsx(ut,{to:"/contact",className:g("/contact")?"active":"",children:"Contact"})]})]})})}function Dm({onDone:u}){const[c,a]=S.useState(0),[m,h]=S.useState(!1),g=S.useRef([]);S.useEffect(()=>{const Y=setTimeout(()=>a(1),200),K=setTimeout(()=>a(2),600),$=setTimeout(()=>a(3),1100);return g.current=[Y,K,$],()=>g.current.forEach(clearTimeout)},[]);const j=()=>{c<3||(a(4),setTimeout(()=>h(!0),300),setTimeout(u,1200))},N=100,k=28,_=312,z=170,R=c===3,D=c>=4;return s.jsxs("div",{id:"intro-overlay",onClick:j,style:{pointerEvents:m?"none":"auto"},children:[s.jsx("div",{className:`intro-panel intro-panel-left${m?" zip-open":""}`}),s.jsx("div",{className:`intro-panel intro-panel-right${m?" zip-open":""}`}),s.jsx("div",{className:`intro-slash${D?" slice":""}`}),s.jsxs("div",{className:`intro-center ${D?"intro-fade":""}`,children:[s.jsxs("svg",{viewBox:"0 0 200 340",width:"200",height:"340",style:{overflow:"visible"},children:[s.jsx("path",{className:`bow-curve${c>=1?" drawn":""}`,d:`M ${N} ${k} Q ${N+58} ${z} ${N} ${_}`,fill:"none",stroke:"#c8a96e",strokeWidth:"4.5",strokeLinecap:"round"}),s.jsx("line",{x1:N,y1:k,x2:R?N-30:N,y2:z,stroke:"#d4c4a0",strokeWidth:"1.5",strokeLinecap:"round",opacity:c>=2?1:0}),s.jsx("line",{x1:R?N-30:N,y1:z,x2:N,y2:_,stroke:"#d4c4a0",strokeWidth:"1.5",strokeLinecap:"round",opacity:c>=2?1:0}),s.jsxs("g",{className:`arrow-g${R?" pulled":""}${D?" fired":""}`,children:[s.jsx("line",{x1:N+58,y1:z,x2:N-50,y2:z,stroke:"#c8a96e",strokeWidth:"2.8",strokeLinecap:"round",opacity:c>=2?1:0}),s.jsx("polygon",{points:`${N-62},${z} ${N-48},${z-6} ${N-52},${z} ${N-48},${z+6}`,fill:"var(--saffron)",opacity:c>=2?1:0}),s.jsx("polygon",{points:`${N+58},${z} ${N+40},${z-7} ${N+44},${z}`,fill:"#c8a96e",opacity:c>=2?.7:0}),s.jsx("polygon",{points:`${N+58},${z} ${N+40},${z+7} ${N+44},${z}`,fill:"#c8a96e",opacity:c>=2?.7:0})]}),R&&s.jsx("circle",{cx:N-36,cy:z,r:"5",fill:"var(--saffron)",opacity:"0.3",style:{filter:"blur(4px)"}})]}),s.jsx("div",{className:`intro-title${c>=1?" show":""}`,children:"DRONA"}),s.jsx("div",{className:`intro-sub${c>=1?" show":""}`,children:"Rocket Team"})]}),c===3&&s.jsx("div",{className:"intro-hint",children:"— Click anywhere to launch —"})]})}function uc(u){let c=u;return()=>(c=c*16807%2147483647,(c-1)/2147483646)}function Fm(){const u=S.useMemo(()=>{const a=uc(77);return Array.from({length:110},(m,h)=>{const g=a()<.18;return{id:h,left:a()*100,top:a()*100,size:g?a()*2+1.8:a()*1.6+.5,dur:a()*3.5+2,delay:a()*5,bright:g}})},[]),c=S.useMemo(()=>{const a=uc(211);return Array.from({length:22},(m,h)=>({id:h,left:a()*100,size:a()*2.2+1.2,dur:a()*16+18,delay:a()*24}))},[]);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"nebula-bg",children:[s.jsx("div",{className:"nebula-layer neb-light"}),s.jsx("div",{className:"nebula-layer neb-cloud-1"}),s.jsx("div",{className:"nebula-layer neb-cloud-2"}),s.jsx("div",{className:"nebula-layer neb-cloud-3"}),s.jsx("div",{className:"nebula-layer neb-pocket"}),s.jsx("div",{className:"nebula-layer neb-void-1"}),s.jsx("div",{className:"nebula-layer neb-void-2"})]}),s.jsx("div",{className:"stars-layer",children:u.map(a=>s.jsx("div",{className:`star${a.bright?" bright":""}`,style:{left:`${a.left}%`,top:`${a.top}%`,width:a.size,height:a.size,animationDuration:`${a.dur}s`,animationDelay:`${a.delay}s`}},a.id))}),s.jsx("div",{className:"particles-layer",children:c.map(a=>s.jsx("div",{className:"mote",style:{left:`${a.left}%`,width:a.size,height:a.size,animationDuration:`${a.dur}s`,animationDelay:`${a.delay}s`}},a.id))})]})}function Am(){const u=S.useRef(null);return S.useEffect(()=>{if(!u.current)return;const c=["#FFD700","#FF9933","#e8a714","#ffcb2f","#c8860a"],a=[],m=8;for(let h=0;h<m;h++){const g=document.createElement("div");g.className="particle";const j=Math.random()*4+2,N=c[Math.floor(Math.random()*c.length)],k=Math.random()*10+15,_=Math.random()*10,z=Math.random()*200-100;g.style.setProperty("--size",`${j}px`),g.style.setProperty("--color",N),g.style.setProperty("--duration",`${k}s`),g.style.setProperty("--delay",`${_}s`),g.style.setProperty("--drift",`${z}px`),g.style.left=`${Math.random()*100}%`,u.current.appendChild(g),a.push(g)}return()=>{a.forEach(h=>h.remove())}},[]),s.jsx("div",{ref:u,style:{position:"fixed",inset:0,pointerEvents:"none",zIndex:3}})}function Im(){const[u,c]=S.useState("default"),[a,m]=S.useState(!1),h=S.useRef(null),g=S.useRef(null),j=S.useRef([null,null,null]),N=S.useRef(null),k=S.useRef({x:-100,y:-100}),_=S.useRef({x:-100,y:-100}),z=S.useRef([{x:-100,y:-100},{x:-100,y:-100},{x:-100,y:-100}]),R=S.useRef({x:-100,y:-100}),D=S.useRef(null);return S.useEffect(()=>{const Y=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),K="ontouchstart"in window||navigator.maxTouchPoints>0;if(Y||K||window.innerWidth<=768)return;const $=Z=>{R.current.x=Z.clientX,R.current.y=Z.clientY},L=()=>m(!0),ie=()=>m(!1),se=Z=>{const ee=Z.target;ee.tagName==="A"||ee.tagName==="BUTTON"||ee.closest("a")||ee.closest("button")||ee.classList.contains("clickable")?(c("hover"),D.current=ee.closest("a")||ee.closest("button")||ee):ee.closest(".circular-reveal-hero")||ee.closest(".video-hero")?(c("video"),D.current=null):(c("default"),D.current=null)},q=()=>{let Z=R.current.x,ee=R.current.y;if(D.current&&u==="hover"){const ye=D.current.getBoundingClientRect(),Be=ye.left+ye.width/2,xe=ye.top+ye.height/2,Te=Be-R.current.x,De=xe-R.current.y,Ee=Math.sqrt(Te*Te+De*De);if(Ee<100){const de=Math.min(20,(100-Ee)/5);Z+=Te/Ee*de,ee+=De/Ee*de}}const ze=Z-k.current.x,Me=ee-k.current.y;k.current.x+=ze*.4,k.current.y+=Me*.4;const Ve=Z-_.current.x,vt=ee-_.current.y;_.current.x+=Ve*.15,_.current.y+=vt*.15;const nt=[.12,.08,.06];for(let ye=0;ye<3;ye++){const Be=ye===0?_.current:z.current[ye-1],xe=z.current[ye],Te=Be.x-xe.x,De=Be.y-xe.y;xe.x+=Te*nt[ye],xe.y+=De*nt[ye],j.current[ye]&&(j.current[ye].style.transform=`translate3d(${xe.x}px, ${xe.y}px, 0) translate(-50%, -50%)`)}h.current&&g.current&&(h.current.style.transform=`translate3d(${k.current.x}px, ${k.current.y}px, 0) translate(-50%, -50%)`,g.current.style.transform=`translate3d(${_.current.x}px, ${_.current.y}px, 0) translate(-50%, -50%)`),N.current=requestAnimationFrame(q)};return window.addEventListener("mousemove",$,{passive:!0}),window.addEventListener("mousedown",L),window.addEventListener("mouseup",ie),window.addEventListener("mouseover",se),N.current=requestAnimationFrame(q),()=>{window.removeEventListener("mousemove",$),window.removeEventListener("mousedown",L),window.removeEventListener("mouseup",ie),window.removeEventListener("mouseover",se),N.current&&cancelAnimationFrame(N.current)}},[u]),typeof window<"u"&&window.innerWidth<=768?null:s.jsxs(s.Fragment,{children:[s.jsx("div",{ref:h,className:`cursor-dot ${u} ${a?"pressed":""}`}),s.jsx("div",{ref:g,className:`cursor-ring ${u} ${a?"pressed":""}`}),[0,1,2].map(Y=>s.jsx("div",{ref:K=>j.current[Y]=K,className:"cursor-particle",style:{opacity:.5-Y*.12}},Y)),s.jsx("style",{children:`
        /* === CURSOR DOT (Inner layer - fast) === */
        .cursor-particle {
          position: fixed;
          top: 0; left: 0;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--gold-bright);
          pointer-events: none;
          z-index: 10000;
          will-change: transform;
          box-shadow: 0 0 6px rgba(255, 215, 0, 0.5);
        }
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          background: #FFD700;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10002;
          will-change: transform;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* === CURSOR RING (Outer layer - slow trailing) === */
        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 30px;
          height: 30px;
          border: 1.5px solid rgba(255, 215, 0, 0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10001;
          will-change: transform;
          transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      height 0.4s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      background 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* === HOVER STATE (on interactive elements) === */
        .cursor-ring.hover {
          width: 50px;
          height: 50px;
          border-color: rgba(255, 215, 0, 0.7);
          background: radial-gradient(
            circle at center,
            transparent 40%,
            rgba(255, 215, 0, 0.06) 100%
          );
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.2);
        }

        .cursor-dot.hover {
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #FFD700, #FF9933);
        }

        /* === VIDEO STATE (on video section) === */
        .cursor-ring.video {
          width: 70px;
          height: 70px;
          border-color: rgba(255, 215, 0, 0.25);
          background: radial-gradient(
            circle at center,
            rgba(255, 215, 0, 0.02) 0%,
            transparent 70%
          );
        }

        .cursor-dot.video {
          width: 4px;
          height: 4px;
          opacity: 0.7;
        }

        /* === PRESSED STATE (on click) === */
        .cursor-ring.pressed {
          transform: translate3d(var(--x, 0), var(--y, 0), 0) translate(-50%, -50%) scale(0.85) !important;
          border-width: 2px;
        }

        .cursor-dot.pressed {
          transform: translate3d(var(--x, 0), var(--y, 0), 0) translate(-50%, -50%) scale(1.5) !important;
        }

        /* === SUBTLE BLUR GLOW ON HOVER === */
        .cursor-ring.hover::after {
          content: '';
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(255, 215, 0, 0.15) 0%,
            transparent 60%
          );
          filter: blur(10px);
          opacity: 1;
        }

        .cursor-ring::after {
          content: '';
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(255, 215, 0, 0.1) 0%,
            transparent 60%
          );
          filter: blur(10px);
          opacity: 0;
          transition: opacity 0.4s;
        }

        /* === HIDE DEFAULT CURSOR === */
        body {
          cursor: none !important;
        }

        a, button, .clickable, input, textarea {
          cursor: none !important;
        }

        /* === MOBILE: RESTORE DEFAULT CURSOR === */
        @media (max-width: 768px) {
          .cursor-dot,
          .cursor-ring {
            display: none !important;
          }
          
          body, a, button, .clickable, input, textarea {
            cursor: auto !important;
          }
        }
      `})]})}function Um(){const u=S.useRef(null),c=S.useRef(null),a=S.useRef({x:-500,y:-500}),m=S.useRef({x:-500,y:-500}),h=S.useRef(150),g=S.useRef(150),j=S.useRef(null);return S.useEffect(()=>{const N=u.current,k=c.current;if(!N||!k)return;if(window.innerWidth<=768){k.style.display="none";return}const z=Y=>{const K=N.getBoundingClientRect();m.current.x=Y.clientX-K.left,m.current.y=Y.clientY-K.top,j.current&&clearTimeout(j.current),j.current=setTimeout(()=>{g.current=400},300)},R=()=>{m.current.x=-500,m.current.y=-500,g.current=150,j.current&&clearTimeout(j.current)},D=()=>{a.current.x+=(m.current.x-a.current.x)*.3,a.current.y+=(m.current.y-a.current.y)*.3,h.current+=(g.current-h.current)*.1,k.style.maskImage=`radial-gradient(circle ${h.current}px at ${a.current.x}px ${a.current.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%)`,k.style.webkitMaskImage=`radial-gradient(circle ${h.current}px at ${a.current.x}px ${a.current.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 100%)`,requestAnimationFrame(D)};return D(),N.addEventListener("mousemove",z),N.addEventListener("mouseleave",R),()=>{N.removeEventListener("mousemove",z),N.removeEventListener("mouseleave",R),j.current&&clearTimeout(j.current)}},[]),s.jsxs("div",{className:"video-hero",ref:u,style:{position:"relative",width:"100%",height:"100vh",overflow:"hidden",background:"black"},children:[s.jsx("video",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",opacity:1,zIndex:1},autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:s.jsx("source",{src:"/videos/left-video.mp4",type:"video/mp4"})}),s.jsx("video",{ref:c,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",opacity:1,zIndex:2},autoPlay:!0,muted:!0,loop:!0,playsInline:!0,children:s.jsx("source",{src:"/videos/right-video.mp4",type:"video/mp4"})}),s.jsxs("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",zIndex:3,textAlign:"center",pointerEvents:"none"},children:[s.jsx("h1",{style:{fontFamily:"Cinzel, serif",fontSize:"4rem",fontWeight:900,margin:"0 0 0.5rem 0",color:"#FFD700",textShadow:"0 2px 10px rgba(0,0,0,0.8)"},children:"DRONA"}),s.jsx("p",{style:{fontFamily:"Rajdhani, sans-serif",fontSize:"1.5rem",fontWeight:600,margin:"0",color:"#FFFFFF",textShadow:"0 2px 8px rgba(0,0,0,0.8)"},children:"Rocketry Team"})]})]})}function Bm(){const[u,c]=S.useState([]);return S.useEffect(()=>{fetch("/gallery/gallery.json").then(a=>a.ok?a.json():[]).then(a=>c(Array.isArray(a)?a:[])).catch(()=>c([]))},[]),u.length===0?null:s.jsx("div",{className:"media-gallery",children:u.map((a,m)=>s.jsx("div",{className:`media-gallery-item ${a.type}`,children:a.type==="video"?s.jsx("video",{loop:!0,muted:!0,playsInline:!0,autoPlay:!0,preload:"metadata",children:s.jsx("source",{src:`/gallery/${a.src}`,type:"video/mp4"})}):s.jsx("img",{src:`/gallery/${a.src}`,alt:"",loading:"lazy"})},m))})}function $m(){return s.jsx("div",{className:"mission-patch-container",children:s.jsxs("div",{className:"mission-patch-wrapper",children:[s.jsx("img",{src:"/mission_patch.png",alt:"DRONA Mission Patch",className:"mission-patch",onError:u=>{u.target.style.display="none",u.target.nextSibling.style.display="block"}}),s.jsxs("div",{className:"mission-patch-fallback",children:[s.jsx("div",{className:"patch-text",children:"DRONA"}),s.jsx("div",{className:"patch-subtitle",children:"MISSION PATCH"})]})]})})}function Wm({size:u=90}){return s.jsxs("svg",{width:u,height:u,viewBox:"0 0 90 90",fill:"none",className:"rocket-icon",children:[s.jsx("path",{d:"M45 8 C38 22 30 55 30 65 L60 65 C60 55 52 22 45 8Z",fill:"#FF9933",opacity:"0.92"}),s.jsx("path",{d:"M45 8 C42 14 40 20 40 25 L50 25 C50 20 48 14 45 8Z",fill:"#FFD700",opacity:"0.55"}),s.jsx("circle",{cx:"45",cy:"40",r:"7",fill:"#0b0f1a",stroke:"#FFD700",strokeWidth:"1.5"}),s.jsx("circle",{cx:"45",cy:"40",r:"3",fill:"#FFD700",opacity:"0.55"}),s.jsx("path",{d:"M30 60 L18 72 L30 68Z",fill:"#FF9933",opacity:"0.7"}),s.jsx("path",{d:"M60 60 L72 72 L60 68Z",fill:"#FF9933",opacity:"0.7"}),s.jsx("ellipse",{cx:"45",cy:"69",rx:"5",ry:"8",fill:"#FF9933",opacity:"0.25"}),s.jsx("ellipse",{cx:"45",cy:"71",rx:"3",ry:"5",fill:"#FFD700",opacity:"0.35"})]})}function Vm(){return s.jsxs(s.Fragment,{children:[s.jsx(Um,{}),s.jsx("section",{id:"about",className:"scroll-section",children:s.jsxs("div",{className:"about-container",children:[s.jsxs("div",{className:"about-text",children:[s.jsxs("div",{className:"reveal",children:[s.jsx("span",{className:"section-label",children:"Our Mission"}),s.jsxs("h2",{className:"section-title",children:["Defying Limits, ",s.jsx("em",{children:"Reaching New Heights"}),s.jsx("div",{className:"title-line"})]})]}),s.jsxs("div",{className:"reveal",style:{transitionDelay:"0.15s"},children:[s.jsxs("p",{children:["We are ",s.jsx("strong",{style:{color:"#e8a714"},children:"DRONA"}),", a student-led rocketry team forging the future of Indian aerospace engineering. Inspired by the legendary archer's mentor, our mission is to train the next generation of space pioneers through hands-on design, rigorous testing, and daring launches."]}),s.jsxs("p",{children:["From concept to liftoff, every component is student-built. Our flagship vehicle,",s.jsx("strong",{style:{color:"#e8a714"},children:" ARJUNA"}),", carries the autonomous",s.jsx("strong",{style:{color:"#e8a714"},children:" GANDIVA"})," payload to altitudes exceeding 10 kilometers — proving that ambition knows no bounds."]})]})]}),s.jsxs("div",{className:"about-visual reveal-scale",style:{transitionDelay:"0.2s"},children:[s.jsx("div",{className:"orb-ring"}),s.jsx("div",{className:"orb-ring"}),s.jsx("div",{className:"orb-ring"}),s.jsx("div",{className:"orb-dot"}),s.jsx("div",{style:{position:"relative",zIndex:2},children:s.jsx(Wm,{size:120})})]})]})}),s.jsx("section",{className:"scroll-section compact",style:{background:"rgba(10, 7, 5, 0.2)"},children:s.jsxs("div",{style:{maxWidth:"800px",margin:"0 auto",width:"100%",textAlign:"center"},children:[s.jsxs("div",{className:"reveal",style:{marginBottom:"2rem"},children:[s.jsx("span",{className:"section-label",children:"Our Identity"}),s.jsxs("h2",{className:"section-title",children:["Mission ",s.jsx("em",{children:"Patch"}),s.jsx("div",{className:"title-line"})]}),s.jsx("p",{style:{color:"var(--text-muted)",marginBottom:"2rem"},children:"The DRONA mission patch represents our journey to the stars, embodying the spirit of innovation and excellence."})]}),s.jsx("div",{className:"reveal",children:s.jsx($m,{})})]})}),s.jsx("section",{className:"scroll-section compact",children:s.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",width:"100%"},children:[s.jsxs("div",{className:"reveal",style:{textAlign:"center",marginBottom:"3rem"},children:[s.jsx("span",{className:"section-label",children:"What We Do"}),s.jsxs("h2",{className:"section-title",children:["Pushing ",s.jsx("em",{children:"Boundaries"}),s.jsx("div",{className:"title-line"})]})]}),s.jsxs("div",{className:"rocket-cards",children:[s.jsxs("div",{className:"rocket-card reveal-left",children:[s.jsx("div",{className:"card-title",children:"Design"}),s.jsx("p",{className:"card-desc",children:"From CAD to CFD, we design every component using cutting-edge aerospace engineering principles."})]}),s.jsxs("div",{className:"rocket-card reveal",children:[s.jsx("div",{className:"card-title",children:"Build"}),s.jsx("p",{className:"card-desc",children:"Our workshop transforms designs into reality with precision machining and composite fabrication."})]}),s.jsxs("div",{className:"rocket-card reveal-right",children:[s.jsx("div",{className:"card-title",children:"Launch"}),s.jsx("p",{className:"card-desc",children:"Test flights validate our work, pushing us to new altitudes and gathering crucial data."})]})]})]})}),s.jsx("section",{className:"scroll-section compact gallery-section",style:{background:"rgba(10, 7, 5, 0.3)"},children:s.jsxs("div",{style:{maxWidth:"1100px",margin:"0 auto",width:"100%"},children:[s.jsxs("div",{className:"reveal",style:{textAlign:"center",marginBottom:"2rem"},children:[s.jsx("span",{className:"section-label",children:"Gallery"}),s.jsxs("h2",{className:"section-title",children:["Photos ",s.jsx("em",{children:"& Videos"}),s.jsx("div",{className:"title-line"})]})]}),s.jsx("div",{className:"reveal",children:s.jsx(Bm,{})})]})}),s.jsx("section",{className:"scroll-section compact",style:{background:"rgba(10, 7, 5, 0.25)"},children:s.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",width:"100%"},children:[s.jsxs("div",{className:"reveal",style:{textAlign:"center",marginBottom:"3rem"},children:[s.jsx("span",{className:"section-label",children:"Our Expertise"}),s.jsxs("h2",{className:"section-title",children:["Engineering ",s.jsx("em",{children:"Subsystems"}),s.jsx("div",{className:"title-line"})]})]}),s.jsxs("div",{className:"subsystems-brief-grid",children:[s.jsxs("div",{className:"subsystem-brief-card reveal",children:[s.jsx("div",{className:"brief-icon",children:"AERO"}),s.jsxs("div",{className:"brief-content",children:[s.jsx("h3",{className:"brief-title",children:"Aerodynamics"}),s.jsx("p",{className:"brief-desc",children:"Ensures efficient trajectory control by analysing aerodynamic forces with tools like OpenRocket, RASAero, FinSim, and ANSYS Fluent, tuning nosecone, fins, airbrakes, and pitot tube for peak performance."})]})]}),s.jsxs("div",{className:"subsystem-brief-card reveal",style:{transitionDelay:"0.08s"},children:[s.jsx("div",{className:"brief-icon",children:"STRUCT"}),s.jsxs("div",{className:"brief-content",children:[s.jsx("h3",{className:"brief-title",children:"Structures"}),s.jsx("p",{className:"brief-desc",children:"Designs the rocket airframe, simulates loads, and selects composites and lightweight metals so the vehicle remains strong yet mass‑efficient throughout the mission."})]})]}),s.jsxs("div",{className:"subsystem-brief-card reveal",style:{transitionDelay:"0.16s"},children:[s.jsx("div",{className:"brief-icon",children:"PROP"}),s.jsxs("div",{className:"brief-content",children:[s.jsx("h3",{className:"brief-title",children:"Propulsion"}),s.jsx("p",{className:"brief-desc",children:"Develops our SRAD N‑class KNSB motor and related hardware, including Aluminium 6061 casing, closures, and a Stainless Steel 310 nozzle insert for reliable thrust delivery."})]})]}),s.jsxs("div",{className:"subsystem-brief-card reveal",style:{transitionDelay:"0.24s"},children:[s.jsx("div",{className:"brief-icon",children:"AVIONICS"}),s.jsxs("div",{className:"brief-content",children:[s.jsx("h3",{className:"brief-title",children:"Avionics & Controls"}),s.jsx("p",{className:"brief-desc",children:"Designs custom PCBs and flight software that handle sensing, apogee detection, logging, telemetry, and control of active surfaces using robust estimation and state‑filtering algorithms."})]})]}),s.jsxs("div",{className:"subsystem-brief-card reveal",style:{transitionDelay:"0.32s"},children:[s.jsx("div",{className:"brief-icon",children:"PAYLOAD"}),s.jsxs("div",{className:"brief-content",children:[s.jsx("h3",{className:"brief-title",children:"Payload"}),s.jsx("p",{className:"brief-desc",children:"Builds Gandiva, a 3U CubeSat payload that demonstrates 2‑DOF ball control using a touchscreen‑driven platform and vision‑based tracking on a Raspberry Pi for compact guidance research."})]})]}),s.jsxs("div",{className:"subsystem-brief-card reveal",style:{transitionDelay:"0.40s"},children:[s.jsx("div",{className:"brief-icon",children:"MGMT"}),s.jsxs("div",{className:"brief-content",children:[s.jsx("h3",{className:"brief-title",children:"Management"}),s.jsx("p",{className:"brief-desc",children:"Coordinates operations, finance, sponsorships, and design, while managing the website and outreach so Arjuna projects run smoothly end‑to‑end."})]})]})]})]})}),s.jsx("section",{className:"scroll-section compact",style:{background:"rgba(10, 7, 5, 0.18)"},children:s.jsxs("div",{style:{maxWidth:"1000px",margin:"0 auto",width:"100%"},children:[s.jsxs("div",{className:"reveal",style:{textAlign:"center",marginBottom:"2rem"},children:[s.jsx("span",{className:"section-label",children:"The People"}),s.jsxs("h2",{className:"section-title",children:["Team ",s.jsx("em",{children:"DRONA"}),s.jsx("div",{className:"title-line"})]})]}),s.jsx("div",{className:"reveal",children:s.jsx("img",{src:"/Team.png",alt:"Team DRONA",className:"team-photo-main"})})]})})]})}function Hm(){const u=[{label:"Height",val:"2.9",unit:"m"},{label:"Diameter",val:"15",unit:"cm"},{label:"Propulsion",val:"N-class SRAD",unit:""},{label:"Target Altitude",val:"10,000",unit:"ft"},{label:"Payload Mass",val:"3.5",unit:"kg"}],c=[{label:"Form Factor",val:"3U CubeSat",unit:""},{label:"Mass",val:"3.5",unit:"kg"},{label:"Control",val:"2-DOF Ball Platform",unit:""},{label:"Actuation",val:"Teensy Touchscreen",unit:""},{label:"Vision",val:"Raspberry Pi Tracking",unit:""}];return s.jsxs(s.Fragment,{children:[s.jsx("section",{className:"rocket-hero",children:s.jsxs("div",{className:"hero-container",children:[s.jsxs("div",{className:"hero-content",children:[s.jsx("h1",{className:"hero-title",children:"ARJUNA"}),s.jsx("p",{className:"hero-subtitle",children:"Sounding Rocket"}),s.jsx("p",{className:"hero-description",children:"Every component designed, manufactured, and tested in-house. From CFD simulations to structural analysis, from propulsion testing to flight software—complete vertical integration."})]}),s.jsx("div",{className:"hero-image",children:s.jsx("img",{src:"/rocket.png",alt:"Arjuna Rocket",className:"rocket-hero-image"})})]})}),s.jsx("section",{className:"rocket-section",children:s.jsx("div",{className:"section-container",children:s.jsxs("div",{className:"logos-showcase",children:[s.jsx("h2",{className:"section-title",children:"Our Systems"}),s.jsxs("div",{className:"logos-grid",children:[s.jsxs("div",{className:"logo-card",children:[s.jsx("img",{src:"/rocket/arjuna_logo.png",alt:"Arjuna Logo",className:"logo-image"}),s.jsx("h3",{className:"logo-title",children:"ARJUNA"}),s.jsx("p",{className:"logo-subtitle",children:"Main Rocket Vehicle"})]}),s.jsxs("div",{className:"logo-card",children:[s.jsx("img",{src:"/rocket/payload_patch.png",alt:"Gandiva Payload",className:"logo-image"}),s.jsx("h3",{className:"logo-title",children:"GANDIVA"}),s.jsx("p",{className:"logo-subtitle",children:"Payload System"})]}),s.jsxs("div",{className:"logo-card",children:[s.jsx("img",{src:"/rocket/SANJAY.png",alt:"Sanjay Avionics",className:"logo-image"}),s.jsx("h3",{className:"logo-title",children:"SANJAY"}),s.jsx("p",{className:"logo-subtitle",children:"Avionics Suite"})]})]})]})})}),s.jsx("section",{className:"rocket-section",children:s.jsx("div",{className:"section-container",children:s.jsxs("div",{className:"section-grid",children:[s.jsxs("div",{className:"section-content",children:[s.jsx("h2",{className:"section-title",children:"ARJUNA"}),s.jsx("span",{className:"section-subtitle",children:"Sounding Rocket"}),s.jsx("p",{className:"section-text",children:"Arjuna is a 2.9 m tall rocket with a 15 cm diameter, designed to house a 3U CubeSat payload weighing approximately 3.5 kg. This single-stage sounding rocket targets 10,000 ft altitude, serving as the main flight platform for our subsystems and Gandiva payload experiments."}),s.jsx("p",{className:"section-text",children:"Powered by a student-researched-and-developed N-class motor using KNSB propellant, with Aluminium 6061 hardware and a Stainless Steel 310 nozzle insert, Arjuna balances performance with safety and manufacturability."})]}),s.jsxs("div",{className:"specs-panel",children:[s.jsx("div",{className:"specs-header",children:"Technical Specifications"}),s.jsx("div",{className:"specs-grid",children:u.map((a,m)=>s.jsxs("div",{className:"spec-item",children:[s.jsx("span",{className:"spec-label",children:a.label}),s.jsxs("span",{className:"spec-value",children:[a.val,a.unit&&s.jsx("span",{className:"spec-unit",children:a.unit})]})]},m))})]})]})})}),s.jsx("section",{className:"rocket-section",children:s.jsx("div",{className:"section-container",children:s.jsxs("div",{className:"section-grid reverse",children:[s.jsxs("div",{className:"specs-panel",children:[s.jsx("div",{className:"specs-header",children:"System Specifications"}),s.jsx("div",{className:"specs-grid",children:c.map((a,m)=>s.jsxs("div",{className:"spec-item",children:[s.jsx("span",{className:"spec-label",children:a.label}),s.jsxs("span",{className:"spec-value",children:[a.val,a.unit&&s.jsx("span",{className:"spec-unit",children:a.unit})]})]},m))})]}),s.jsxs("div",{className:"section-content",children:[s.jsx("h2",{className:"section-title",children:"GANDIVA"}),s.jsx("span",{className:"section-subtitle",children:"Payload System"}),s.jsx("p",{className:"section-text",children:"Gandiva is our 3U CubeSat payload, a compact testbed named after Arjuna's bow that rides inside the main vehicle. It houses stacked electronics and mechanisms that let us run tightly controlled guidance experiments."}),s.jsx("p",{className:"section-text",children:"At its core is a 2‑DOF ball control platform driven by a Teensy-powered resistive touchscreen, while a Raspberry Pi performs vision-based tracking. By comparing touch sensing and camera feedback, Gandiva explores control strategies for space-constrained autonomous payloads."})]})]})})}),s.jsx("section",{className:"rocket-section",children:s.jsx("div",{className:"section-container",children:s.jsxs("div",{className:"subsystems-overview",children:[s.jsx("h2",{className:"section-title",children:"Subsystems Overview"}),s.jsxs("div",{className:"subsystems-grid",children:[s.jsxs("div",{className:"subsystem-card aerostructures",children:[s.jsxs("div",{className:"subsystem-header",children:[s.jsx("img",{src:"/rocket/arjuna_logo.png",alt:"Arjuna Logo",className:"subsystem-logo"}),s.jsx("h3",{className:"subsystem-title",children:"Aerostructures & Recovery"})]}),s.jsxs("div",{className:"subsystem-content",children:[s.jsx("p",{className:"subsystem-desc",children:"The Arjuna rocket stands 2.9 meters tall with a 15 cm diameter."}),s.jsxs("div",{className:"subsystem-details",children:[s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{className:"detail-title",children:"Design"}),s.jsx("p",{className:"detail-text",children:"Glass fiber composite fuselage with Aluminium 6061 components. Tangent Ogive nosecone with 3.2 fineness ratio."})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{className:"detail-title",children:"Recovery"}),s.jsx("p",{className:"detail-text",children:"Dual-event parachute: 36-inch drogue at apogee, 72-inch main at 1,500 feet."})]})]})]})]}),s.jsxs("div",{className:"subsystem-card propulsion",children:[s.jsxs("div",{className:"subsystem-header",children:[s.jsx("img",{src:"/rocket/arjuna_logo.png",alt:"Arjuna Logo",className:"subsystem-logo"}),s.jsx("h3",{className:"subsystem-title",children:"Propulsion"})]}),s.jsxs("div",{className:"subsystem-content",children:[s.jsx("p",{className:"subsystem-desc",children:"N3316 solid propellant SRAD motor."}),s.jsxs("div",{className:"subsystem-details",children:[s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{className:"detail-title",children:"Performance"}),s.jsx("p",{className:"detail-text",children:"KNSB propellant ratio 65:35. Average thrust 3316.1 N, total impulse 13,642.2 Ns."})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{className:"detail-title",children:"Specifications"}),s.jsx("p",{className:"detail-text",children:"Burn time 4.11 seconds, MEOP 5.43 MPa."})]})]})]})]}),s.jsxs("div",{className:"subsystem-card avionics",children:[s.jsxs("div",{className:"subsystem-header",children:[s.jsx("img",{src:"/rocket/SANJAY.png",alt:"Sanjay Logo",className:"subsystem-logo"}),s.jsx("h3",{className:"subsystem-title",children:'Avionics ("Sanjaya")'})]}),s.jsxs("div",{className:"subsystem-content",children:[s.jsx("p",{className:"subsystem-desc",children:"Redundant flight control and telemetry system."}),s.jsxs("div",{className:"subsystem-details",children:[s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{className:"detail-title",children:"Hardware"}),s.jsx("p",{className:"detail-text",children:"Custom SMT PCB with Raspberry Pi RP2354B microcontroller."})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{className:"detail-title",children:"Key Features"}),s.jsx("p",{className:"detail-text",children:"EKF apogee detection, active airbrakes for 10,000-foot target altitude."})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{className:"detail-title",children:"Telemetry"}),s.jsx("p",{className:"detail-text",children:"Live video transmission and real-time data logging via LoRa."})]})]})]})]}),s.jsxs("div",{className:"subsystem-card payload",children:[s.jsxs("div",{className:"subsystem-header",children:[s.jsx("img",{src:"/rocket/payload_patch.png",alt:"Payload Patch",className:"subsystem-logo"}),s.jsx("h3",{className:"subsystem-title",children:"Payload"})]}),s.jsxs("div",{className:"subsystem-content",children:[s.jsx("p",{className:"subsystem-desc",children:"Non-deployable 3U CubeSat, approximately 3.5 kg."}),s.jsxs("div",{className:"subsystem-details",children:[s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{className:"detail-title",children:"Mission"}),s.jsx("p",{className:"detail-text",children:"Demonstrates precise ball control on movable platform during flight."})]}),s.jsxs("div",{className:"detail-section",children:[s.jsx("h4",{className:"detail-title",children:"Objective"}),s.jsx("p",{className:"detail-text",children:"Tests visual sensor reliability in high-vibration environments."})]})]})]})]})]})]})})}),s.jsx("style",{jsx:!0,children:`
        .rocket-hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #000000 0%, #0a0705 50%, #000000 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem;
          z-index: 2;
          position: relative;
        }

        .hero-grid {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
        }

        .hero-content {
          text-align: center;
          max-width: 600px;
        }

        .hero-title {
          font-family: 'Cinzel', serif;
          font-size: 4rem;
          font-weight: 900;
          color: var(--saffron);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          line-height: 1;
        }

        .hero-subtitle {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.8rem;
          color: var(--gold-bright);
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 600;
        }

        .hero-description {
          font-size: 1.3rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.7);
          max-width: 500px;
          margin: 0 auto;
        }

        .hero-image {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .rocket-hero-image {
          max-width: 100%;
          height: auto;
          max-height: 450px;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
        }

        .rocket-section {
          padding: 2rem 2rem;
          background: var(--black);
          position: relative;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          align-items: start;
        }

        .section-grid.reverse {
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .section-content {
          padding: 1.5rem;
        }

        .section-title {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--saffron);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .section-subtitle {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.2rem;
          color: var(--gold-bright);
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 600;
        }

        .section-text {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 1.5rem;
        }

        .specs-panel {
          background: rgba(20, 15, 10, 0.6);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(8px);
        }

        .specs-header {
          font-family: 'Cinzel', serif;
          font-size: 1.3rem;
          color: var(--saffron);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 700;
        }

        .specs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .spec-item {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 215, 0, 0.1);
        }

        .spec-label {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.5rem;
        }

        .spec-value {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--gold-bright);
        }

        .spec-unit {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          margin-left: 0.5rem;
        }

        .logos-showcase {
          text-align: center;
        }

        .logos-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .logo-card {
          background: rgba(20, 15, 10, 0.6);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(8px);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .logo-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 215, 0, 0.4);
        }

        .logo-image {
          width: 80px;
          height: 80px;
          object-fit: contain;
          margin-bottom: 1rem;
          border-radius: 8px;
        }

        .logo-title {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          color: var(--saffron);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .logo-subtitle {
          font-family: 'Rajdhani', sans-serif;
          font-size: 1rem;
          color: var(--gold-bright);
          margin: 0;
        }

        .subsystems-overview {
          text-align: center;
        }

        .subsystems-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.8rem;
          margin-top: 0.8rem;
        }

        .subsystem-card {
          background: rgba(20, 15, 10, 0.6);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(8px);
          text-align: left;
        }

        .subsystem-card.aerostructures {
          background: linear-gradient(135deg, rgba(255, 153, 51, 0.1), rgba(20, 15, 10, 0.6));
          border-color: rgba(255, 153, 51, 0.3);
        }

        .subsystem-card.propulsion {
          background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(20, 15, 10, 0.6));
          border-color: rgba(255, 215, 0, 0.3);
        }

        .subsystem-card.avionics {
          background: linear-gradient(135deg, rgba(100, 149, 237, 0.1), rgba(20, 15, 10, 0.6));
          border-color: rgba(100, 149, 237, 0.3);
        }

        .subsystem-card.payload {
          background: linear-gradient(135deg, rgba(50, 205, 50, 0.1), rgba(20, 15, 10, 0.6));
          border-color: rgba(50, 205, 50, 0.3);
        }

        .subsystem-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .subsystem-logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
          border-radius: 8px;
        }

        .subsystem-title {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          color: var(--saffron);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .subsystem-content {
          color: rgba(255, 255, 255, 0.8);
        }

        .subsystem-desc {
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .subsystem-details {
          display: grid;
          gap: 1rem;
        }

        .detail-section {
          padding: 1rem;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 8px;
        }

        .detail-title {
          font-family: 'Cinzel', serif;
          font-size: 1.1rem;
          color: var(--gold-bright);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .detail-text {
          font-size: 0.9rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.7);
        }

        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .hero-content {
            text-align: center;
          }
          
          .section-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          
          .specs-grid {
            grid-template-columns: 1fr;
          }
          
          .subsystems-grid {
            grid-template-columns: 1fr;
          }
          
          .logos-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})}const Qm={members:[{id:1,name:"Member 1",image:"1.jpeg"},{id:2,name:"Member 2",image:"2.jpeg"},{id:3,name:"Member 3",image:"3.jpeg"},{id:4,name:"Member 4",image:"4.jpeg"},{id:5,name:"Member 5",image:"5.jpeg"},{id:6,name:"Member 6",image:"6.jpeg"},{id:7,name:"Member 7",image:"7.jpeg"},{id:8,name:"Member 8",image:"8.jpeg"},{id:9,name:"Member 9",image:"9.jpeg"},{id:10,name:"Member 10",image:"10.jpeg"},{id:11,name:"Member 11",image:"11.jpeg"},{id:12,name:"Member 12",image:"12.jpeg"},{id:13,name:"Member 13",image:"13.jpeg"},{id:14,name:"Member 14",image:"14.jpeg"},{id:15,name:"Member 15",image:"15.jpeg"}]};function Ym(){const[u,c]=S.useState(Qm),[a,m]=S.useState(null);S.useEffect(()=>{fetch("/data/team.json").then(g=>g.ok?g.json():null).then(g=>g?.subsystems&&c(g)).catch(()=>{})},[]);const h=u?.subsystems||{mechanical:{name:"Mechanical",members:[]},electrical:{name:"Electrical",members:[]},software:{name:"Software",members:[]},management:{name:"Management",members:[]}};return s.jsxs("div",{className:"page-container",children:[s.jsx("style",{children:`
        .team-hero {
          min-height: 60vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--black);
          margin-bottom: 2rem;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .hero-gradient {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 215, 0, 0.1) 0%,
            rgba(0, 0, 0, 0.8) 50%,
            rgba(0, 0, 0, 0.9) 100%
          );
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 215, 0, 0.1);
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 50px;
          padding: 0.5rem 1.5rem;
          margin-bottom: 2rem;
          backdrop-filter: blur(10px);
        }

        .badge-text {
          font-family: 'Cinzel', serif;
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--saffron);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .badge-subtitle {
          font-size: 0.8rem;
          color: var(--gold-bright);
          opacity: 0.8;
        }

        .hero-title {
          font-family: 'Cinzel', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          color: var(--text-primary);
          margin-bottom: 1.5rem;
          line-height: 1.1;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .hero-title .highlight {
          color: var(--saffron);
          position: relative;
        }

        .hero-title .highlight::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--saffron);
          border-radius: 2px;
        }

        .hero-description {
          font-size: 1.2rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .stat-item {
          text-align: center;
          padding: 1rem;
          background: rgba(255, 215, 0, 0.05);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 12px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .stat-item:hover {
          transform: translateY(-5px);
          background: rgba(255, 215, 0, 0.1);
          border-color: rgba(255, 215, 0, 0.4);
        }

        .stat-number {
          display: block;
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          font-weight: 700;
          color: var(--saffron);
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .team-members {
          padding: 2rem;
        }

        .members-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .members-title {
          font-family: 'Cinzel', serif;
          font-size: 2.5rem;
          color: var(--saffron);
          text-align: center;
          margin-bottom: 3rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .subsystem-section {
          margin-bottom: 4rem;
        }

        .subsystem-title {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          color: var(--gold-bright);
          text-align: center;
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          position: relative;
        }

        .subsystem-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--saffron), transparent);
        }

        .members-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .member-card {
          background: rgba(20, 15, 10, 0.6);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 16px;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .member-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 215, 0, 0.4);
          box-shadow: 0 15px 30px rgba(255, 215, 0, 0.15);
        }

        .member-photo {
          width: 350px;
          height: 350px;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          margin-bottom: 1.5rem;
          border: 3px solid rgba(255, 215, 0, 0.3);
        }

        .member-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
        }

        .member-photo .member-initials {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: none;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--saffron), var(--gold-bright));
          color: var(--bg-primary);
          font-family: 'Cinzel', serif;
          font-size: 3rem;
          font-weight: 700;
        }

        .member-name {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          color: var(--saffron);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .member-role {
          font-size: 1.3rem;
          color: var(--gold-bright);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .member-subsystem {
          font-size: 1rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .member-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          backdrop-filter: blur(5px);
        }

        .modal-content {
          background: rgba(20, 15, 10, 0.95);
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 20px;
          padding: 2rem;
          max-width: 500px;
          width: 90%;
          position: relative;
          backdrop-filter: blur(10px);
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: none;
          border: none;
          color: var(--text-muted);
          font-size: 2rem;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .close-btn:hover {
          color: var(--saffron);
        }

        .modal-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .modal-photo {
          width: 100px;
          height: 100px;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }

        .modal-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .modal-photo .modal-initials {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: none;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--saffron), var(--gold-bright));
          color: var(--bg-primary);
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .modal-info h3 {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          color: var(--saffron);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .modal-role {
          font-size: 1.1rem;
          color: var(--gold-bright);
          margin-bottom: 0.5rem;
          font-weight: 600;
        }

        .modal-subsystem {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .modal-body p {
          color: var(--text-muted);
          line-height: 1.6;
          font-size: 1rem;
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 0 1rem;
          }
          
          .hero-stats {
            gap: 1rem;
          }
          
          .members-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 400px;
          }
          
          .member-photo {
            width: 300px;
            height: 300px;
          }
          
          .member-name {
            font-size: 1.5rem;
          }
          
          .member-role {
            font-size: 1.1rem;
          }
          
          .modal-header {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 1024px) {
          .members-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            max-width: 500px;
          }
          
          .member-photo {
            width: 320px;
            height: 320px;
          }
        }
      `}),s.jsxs("section",{className:"team-hero",children:[s.jsx("div",{className:"hero-background",children:s.jsx("div",{className:"hero-gradient"})}),s.jsxs("div",{className:"hero-content",children:[s.jsxs("div",{className:"hero-badge",children:[s.jsx("span",{className:"badge-text",children:"DRONA"}),s.jsx("span",{className:"badge-subtitle",children:"Team"})]}),s.jsxs("h1",{className:"hero-title",children:["Meet Our ",s.jsx("span",{className:"highlight",children:"Team"})]}),s.jsx("p",{className:"hero-description",children:"Meet the brilliant minds behind DRONA's aerospace innovation. Our diverse team of engineers, designers, and visionaries work together to push the boundaries of student rocketry."}),s.jsxs("div",{className:"hero-stats",children:[s.jsxs("div",{className:"stat-item",children:[s.jsxs("span",{className:"stat-number",children:[Object.values(h).reduce((g,j)=>g+j.members.length,0),"+"]}),s.jsx("span",{className:"stat-label",children:"Team Members"})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-number",children:Object.keys(h).length}),s.jsx("span",{className:"stat-label",children:"Subsystems"})]}),s.jsxs("div",{className:"stat-item",children:[s.jsx("span",{className:"stat-number",children:"100%"}),s.jsx("span",{className:"stat-label",children:"Student Built"})]})]})]})]}),s.jsx("section",{className:"team-members",children:s.jsxs("div",{className:"members-container",children:[s.jsx("h2",{className:"members-title",children:"Our Team"}),Object.entries(h).map(([g,j])=>s.jsxs("div",{className:"subsystem-section",children:[s.jsx("h3",{className:"subsystem-title",children:j.name}),s.jsx("div",{className:"members-grid",children:j.members.map((N,k)=>s.jsxs("div",{className:"member-card",onClick:()=>m(N),children:[s.jsxs("div",{className:"member-photo",children:[s.jsx("img",{src:`/team/${N.image}`,alt:N.name,onError:_=>{_.target.style.display="none",_.target.nextElementSibling.style.display="flex"}}),s.jsx("div",{className:"member-initials",children:N.name.split(" ").map(_=>_[0]).join("")})]}),s.jsxs("div",{className:"member-info",children:[s.jsx("h3",{className:"member-name",children:N.name}),s.jsx("p",{className:"member-role",children:N.designation})]})]},N.id))})]},g))]})}),a&&s.jsx("div",{className:"member-modal",onClick:()=>m(null),children:s.jsxs("div",{className:"modal-content",onClick:g=>g.stopPropagation(),children:[s.jsx("button",{className:"close-btn",onClick:()=>m(null),children:"×"}),s.jsxs("div",{className:"modal-header",children:[s.jsxs("div",{className:"modal-photo",children:[s.jsx("img",{src:`/team/${a.image}`,alt:a.name,onError:g=>{g.target.style.display="none",g.target.nextElementSibling.style.display="flex"}}),s.jsx("div",{className:"modal-initials",children:a.name.split(" ").map(g=>g[0]).join("")})]}),s.jsxs("div",{className:"modal-info",children:[s.jsx("h3",{children:a.name}),s.jsx("p",{className:"modal-role",children:a.designation}),s.jsx("div",{className:"modal-subsystem",children:Object.entries(h).find(([g,j])=>j.members.some(N=>N.id===a.id))?.[1]?.name||"Team Member"})]})]}),s.jsx("div",{className:"modal-body",children:s.jsx("p",{children:"Passionate aerospace engineer contributing to DRONA's mission of advancing rocket technology and inspiring the next generation of space explorers."})})]})})]})}function Km(){const[u,c]=S.useState({name:"",email:"",subject:"",message:""}),[a,m]=S.useState(!1),[h,g]=S.useState(!1),j=k=>{c({...u,[k.target.name]:k.target.value})},N=k=>{k.preventDefault(),m(!0),setTimeout(()=>{m(!1),g(!0),c({name:"",email:"",subject:"",message:""}),setTimeout(()=>g(!1),5e3)},1500)};return s.jsxs("div",{className:"page-container",children:[s.jsxs("section",{className:"contact-page",children:[s.jsx("div",{className:"contact-header",children:s.jsxs("div",{className:"reveal",children:[s.jsx("span",{className:"section-label",children:"Get In Touch"}),s.jsxs("h1",{className:"section-title",children:["Contact ",s.jsx("em",{children:"DRONA"}),s.jsx("div",{className:"title-line"})]}),s.jsx("p",{className:"contact-lead",children:"For inquiries, collaborations, or sponsorship opportunities, we'd love to hear from you."})]})}),s.jsxs("div",{className:"contact-content",children:[s.jsxs("div",{className:"contact-info reveal",children:[s.jsxs("div",{className:"contact-card",children:[s.jsx("h3",{children:"Email"}),s.jsx("a",{href:"mailto:drona@gmail.com",className:"contact-email",children:"drona@gmail.com"}),s.jsx("p",{children:"For general inquiries and partnerships"})]}),s.jsxs("div",{className:"contact-card",children:[s.jsx("h3",{children:"Follow Us"}),s.jsxs("div",{className:"social-links",children:[s.jsx("a",{href:"https://x.com",target:"_blank",rel:"noopener noreferrer",className:"social-link",children:s.jsx("span",{children:"X"})}),s.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"social-link",children:s.jsx("span",{children:"IG"})}),s.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"social-link",children:s.jsx("span",{children:"LI"})})]}),s.jsx("p",{children:"Stay updated with our journey"})]}),s.jsxs("div",{className:"contact-card",children:[s.jsx("h3",{children:"Newsletter"}),s.jsx("p",{children:"Subscribe to our newsletter for mission updates and achievements"}),s.jsx(ut,{to:"/newsletter",className:"newsletter-link",children:"Subscribe Now"})]})]}),s.jsx("div",{className:"contact-form-wrapper reveal",children:s.jsxs("div",{className:"contact-form-card",children:[s.jsx("h3",{children:"Send us a Message"}),h?s.jsxs("div",{className:"success-message",children:[s.jsx("div",{className:"success-icon",children:"SUCCESS"}),s.jsx("p",{children:"Thank you for your message! We'll get back to you soon."})]}):s.jsxs("form",{onSubmit:N,className:"contact-form",children:[s.jsx("div",{className:"form-group",children:s.jsx("input",{type:"text",name:"name",value:u.name,onChange:j,placeholder:"Your Name",required:!0,className:"form-input"})}),s.jsx("div",{className:"form-group",children:s.jsx("input",{type:"email",name:"email",value:u.email,onChange:j,placeholder:"Your Email",required:!0,className:"form-input"})}),s.jsx("div",{className:"form-group",children:s.jsx("input",{type:"text",name:"subject",value:u.subject,onChange:j,placeholder:"Subject",required:!0,className:"form-input"})}),s.jsx("div",{className:"form-group",children:s.jsx("textarea",{name:"message",value:u.message,onChange:j,placeholder:"Your Message",required:!0,rows:"5",className:"form-textarea"})}),s.jsx("button",{type:"submit",disabled:a,className:"submit-btn",children:a?"Sending...":"Send Message"})]})]})})]}),s.jsx("footer",{className:"contact-footer",children:s.jsx("p",{children:"© 2025 DRONA Rocket Team | Reaching for the Stars"})})]}),s.jsx("style",{children:`
        .contact-page {
          padding: 6rem 1rem 4rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-lead {
          max-width: 600px;
          margin: 1.5rem auto 0;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-card {
          background: rgba(20, 15, 10, 0.4);
          border: 1px solid rgba(255, 215, 0, 0.1);
          border-radius: 12px;
          padding: 2rem;
          backdrop-filter: blur(8px);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 215, 0, 0.3);
        }

        .contact-card h3 {
          font-family: 'Cinzel', serif;
          font-size: 1.3rem;
          color: var(--saffron);
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .contact-email {
          font-size: 1.1rem;
          color: var(--gold-bright);
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: block;
        }

        .contact-email:hover {
          text-decoration: underline;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          border: 1px solid rgba(255, 215, 0, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--saffron);
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: var(--saffron);
          color: var(--bg-primary);
          transform: scale(1.1);
        }

        .newsletter-link {
          color: var(--gold-bright);
          text-decoration: none;
          font-weight: 600;
          display: inline-block;
          margin-top: 0.5rem;
        }

        .newsletter-link:hover {
          text-decoration: underline;
        }

        .contact-card p {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.5;
        }

        .contact-form-wrapper {
          background: rgba(20, 15, 10, 0.3);
          border: 1px solid rgba(255, 215, 0, 0.1);
          border-radius: 12px;
          padding: 2.5rem;
          backdrop-filter: blur(8px);
        }

        .contact-form-card h3 {
          font-family: 'Cinzel', serif;
          font-size: 1.5rem;
          color: var(--saffron);
          margin-bottom: 2rem;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 215, 0, 0.2);
          border-radius: 8px;
          color: var(--text-primary);
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: var(--saffron);
          background: rgba(0, 0, 0, 0.5);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: var(--text-muted);
        }

        .submit-btn {
          width: 100%;
          padding: 1rem 2rem;
          background: linear-gradient(135deg, var(--saffron), var(--gold-bright));
          border: none;
          border-radius: 8px;
          color: var(--bg-primary);
          font-weight: 600;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(255, 215, 0, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .success-message {
          text-align: center;
          padding: 2rem;
        }

        .success-icon {
          width: 60px;
          height: 60px;
          background: var(--saffron);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 1.5rem;
          color: var(--bg-primary);
        }

        .contact-footer {
          text-align: center;
          margin-top: 4rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .contact-page {
            padding: 4rem 1rem 2rem;
          }
        }
      `})]})}function Gm(){return s.jsx("div",{className:"page-container",children:s.jsx("section",{id:"about-page",className:"scroll-section",children:s.jsxs("div",{className:"about-page-container",children:[s.jsxs("div",{className:"reveal",children:[s.jsx("span",{className:"section-label",children:"Our Story"}),s.jsxs("h2",{className:"section-title",children:["Who We ",s.jsx("em",{children:"Are"}),s.jsx("div",{className:"title-line"})]})]}),s.jsxs("div",{className:"about-page-content reveal",style:{transitionDelay:"0.15s"},children:[s.jsxs("p",{children:[s.jsx("strong",{style:{color:"var(--gold-bright)"},children:"DRONA"})," is a student-led rocketry team forging the future of Indian aerospace engineering. Named after the legendary archer's mentor, our mission is to train the next generation of space pioneers through hands-on design, rigorous testing, and daring launches."]}),s.jsxs("p",{children:["From concept to liftoff, every component is student-built. Our flagship vehicle,"," ",s.jsx("strong",{style:{color:"var(--gold-bright)"},children:"ARJUNA"}),", carries the autonomous"," ",s.jsx("strong",{style:{color:"var(--gold-bright)"},children:"GANDIVA"})," payload to altitudes exceeding 10 kilometers — proving that ambition knows no bounds."]}),s.jsx("p",{children:"We combine design, build, and launch in a complete development cycle — CFD to fabrication, avionics to telemetry. Every subsystem is engineered in-house, from hybrid propulsion to dual-chute recovery."})]}),s.jsxs("div",{className:"about-page-actions reveal",style:{transitionDelay:"0.3s"},children:[s.jsx(ut,{to:"/subsystems",className:"cta-button",children:"Explore Subsystems"}),s.jsx(ut,{to:"/rocket",className:"cta-button secondary",children:"View Rocket"})]})]})})})}const Xm=[{id:"aerodynamics",title:"Aerodynamics",subtitle:"Trajectory & Flow",desc:"The Aerodynamics Subsystem ensures efficient trajectory control by analysing aerodynamic forces using OpenRocket, RASAero, FinSim, and ANSYS Fluent. The team focuses on optimising the nosecone, fins, airbrakes, and pitot tube for peak flight performance.",img:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",features:["Trajectory and stability analysis","Nosecone, fin, and airbrake optimisation","Use of OpenRocket, RASAero, FinSim, ANSYS Fluent"],specs:{focus:"Trajectory control, drag, stability",tools:"OpenRocket, RASAero, FinSim, ANSYS Fluent"},icon:"AERO"},{id:"structures",title:"Structures",subtitle:"Airframe & Loads",desc:"The Structures team designs the rocket airframe, analyses and simulates the loads acting on each component, and specialises in mass optimisation. They select composites and lightweight metals to ensure the rocket remains efficient while safely housing all systems throughout the mission.",img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",features:["Airframe design and load simulation","Mass optimisation","Composite and lightweight metal selection"],specs:{focus:"Strength vs. mass trade-offs",methods:"Structural analysis and simulation"},icon:"STRUCT"},{id:"propulsion",title:"Propulsion",subtitle:"SRAD N-Class Motor",desc:"Our propulsion team utilises a custom SRAD N-class motor, which produces an average thrust of x and a total impulse of y using KNSB propellant. The forward closure, casing, and nozzle holder are engineered from Aluminium 6061, with a durable Stainless Steel 310 nozzle insert.",img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",features:["SRAD N-class motor with KNSB propellant","Aluminium 6061 hardware","Stainless Steel 310 nozzle insert"],specs:{motorClass:"N-class SRAD",propellant:"KNSB",structure:"Al 6061, SS 310 insert"},icon:"PROP"},{id:"avionics",title:"Avionics & Controls",subtitle:"Electronics & Flight Software",desc:"This team manages the rocket’s flight-critical electronics and onboard computing. They design custom PCBs using both Through-Hole and Surface-Mount Technology, integrate multiple sensors for apogee detection, data logging, and real-time telemetry, and implement the recovery sequence through a robust Finite State Machine. The Controls work focuses on active control surfaces and all estimation and state-filtering algorithms within the flight computer software.",img:"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",features:["Custom THT and SMT PCB design","Apogee detection, logging, and telemetry","FSM-based recovery logic and control algorithms"],specs:{focus:"Flight electronics and control",capabilities:"Telemetry, logging, active surface control"},icon:"AVIONICS"},{id:"payload",title:"Payload",subtitle:"Gandiva 3U CubeSat",desc:"Gandiva, our 3U CubeSat payload, demonstrates precise 2-DOF ball control on a servo-actuated platform. It features a Teensy-driven resistive touchscreen for primary actuation, while a Raspberry Pi with onboard object detection independently tracks the ball. By comparing touch sensing with vision-based tracking, the team evaluates camera-based control for compact, space-constrained systems.",img:"https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&q=80",features:["2-DOF ball control testbed","Teensy-driven resistive touchscreen","Raspberry Pi vision and object detection"],specs:{formFactor:"3U CubeSat",control:"Touchscreen and vision-based"},icon:"PAYLOAD"},{id:"management",title:"Management",subtitle:"Operations & Outreach",desc:"Management coordinates overall operations while the finance team oversees budgets, sponsorships, and material procurement for Arjuna’s projects. The design team creates visual content to highlight initiatives and manages the team’s website and social media presence.",img:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",features:["Operations and project coordination","Finance, sponsorships, and procurement","Branding, design, and communications"],specs:{focus:"People, funding, communication",scope:"Arjuna missions and outreach"},icon:"MGMT"}];function Jm(){return s.jsxs("div",{className:"page-container",children:[s.jsxs("section",{id:"subsystems-page",className:"subsystems-page",children:[s.jsxs("div",{className:"reveal",children:[s.jsx("span",{className:"section-label",children:"Technical Teams"}),s.jsxs("h2",{className:"section-title",children:["Our ",s.jsx("em",{children:"Subsystems"}),s.jsx("div",{className:"title-line"})]})]}),s.jsx("p",{className:"subsystems-intro reveal",style:{transitionDelay:"0.1s"},children:"Six specialised subsystems power ARJUNA from concept to liftoff. Each card highlights how a team contributes to the vehicle."}),s.jsx("div",{className:"subsystems-vertical",children:Xm.map((u,c)=>s.jsxs("div",{className:"subsystem-vertical-card reveal",style:{transitionDelay:`${.15+c*.1}s`},children:[s.jsxs("div",{className:"subsystem-header",children:[s.jsx("div",{className:"subsystem-icon-large",children:s.jsx("span",{className:"icon-emoji",children:u.icon})}),s.jsxs("div",{className:"subsystem-title-section",children:[s.jsx("span",{className:"subsystem-subtitle",children:u.subtitle}),s.jsx("h3",{className:"subsystem-title",children:u.title})]})]}),s.jsx("div",{className:"subsystem-image-section",children:s.jsxs("div",{className:"subsystem-image-abstract",children:[s.jsx("div",{className:"subsystem-orbit subsystem-orbit-outer"}),s.jsx("div",{className:"subsystem-orbit subsystem-orbit-inner"}),s.jsx("div",{className:"subsystem-orbit-dot"}),s.jsx("div",{className:"subsystem-image-label",children:u.subtitle})]})}),s.jsx("div",{className:"subsystem-content-section",children:s.jsx("p",{className:"subsystem-desc",children:u.desc})})]},u.id))}),s.jsx("div",{className:"subsystems-cta reveal",style:{transitionDelay:"0.75s"},children:s.jsx(ut,{to:"/rocket",className:"cta-button",children:"Explore Rocket"})})]}),s.jsx("style",{children:`
        .subsystems-vertical {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          margin-top: 4rem;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }

        .subsystem-vertical-card {
          background: linear-gradient(135deg, rgba(20, 15, 10, 0.6), rgba(30, 20, 10, 0.4));
          border: 2px solid rgba(255, 215, 0, 0.1);
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          position: relative;
        }

        .subsystem-vertical-card:hover {
          transform: translateY(-5px);
          border-color: rgba(255, 215, 0, 0.4);
          box-shadow: 0 25px 50px rgba(255, 215, 0, 0.15);
        }

        .subsystem-vertical-card.active {
          border-color: var(--saffron);
          box-shadow: 0 0 40px rgba(255, 215, 0, 0.2);
        }

        .subsystem-header {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          padding: 2rem;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid rgba(255, 215, 0, 0.1);
        }

        .subsystem-icon-large {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, var(--saffron), var(--gold-bright));
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          box-shadow: 0 10px 25px rgba(255, 215, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .subsystem-vertical-card:hover .subsystem-icon-large {
          transform: rotate(10deg) scale(1.1);
        }

        .subsystem-title-section {
          flex: 1;
        }

        .subsystem-subtitle {
          font-size: 0.9rem;
          color: var(--gold-bright);
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-weight: 600;
          display: block;
          margin-bottom: 0.5rem;
        }

        .subsystem-title {
          font-family: 'Cinzel', serif;
          font-size: 2rem;
          color: var(--saffron);
          margin: 0;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .subsystem-toggle-indicator {
          width: 40px;
          height: 40px;
          background: rgba(255, 215, 0, 0.1);
          border: 2px solid rgba(255, 215, 0, 0.3);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: var(--saffron);
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .subsystem-vertical-card.active .subsystem-toggle-indicator {
          background: var(--saffron);
          color: var(--bg-primary);
          transform: rotate(180deg);
        }

        .subsystem-image-section {
          position: relative;
          height: 260px;
          overflow: hidden;
          padding: 1.5rem 2rem 2rem 2rem;
        }

        .subsystem-image-abstract {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 18px;
          background: radial-gradient(circle at top left, rgba(255,215,0,0.25), transparent 55%),
                      radial-gradient(circle at bottom right, rgba(255,153,51,0.2), transparent 55%),
                      rgba(5,5,10,0.9);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .subsystem-orbit {
          position: absolute;
          border-radius: 999px;
          border: 1px solid rgba(255, 215, 0, 0.4);
        }

        .subsystem-orbit-outer {
          width: 70%;
          height: 60%;
          transform: rotate(-18deg);
          opacity: 0.75;
        }

        .subsystem-orbit-inner {
          width: 45%;
          height: 38%;
          transform: rotate(12deg);
          opacity: 0.9;
        }

        .subsystem-orbit-dot {
          position: absolute;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--gold-bright);
          box-shadow: 0 0 14px rgba(255,215,0,0.9);
          top: 28%;
          left: 62%;
        }

        .subsystem-image-label {
          position: relative;
          padding: 0.5rem 1.4rem;
          border-radius: 999px;
          border: 1px solid rgba(255, 215, 0, 0.6);
          background: rgba(0, 0, 0, 0.7);
          font-size: 0.85rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold-bright);
        }

        .subsystem-content-section {
          padding: 2rem;
        }

        .subsystem-desc {
          color: var(--text-muted);
          line-height: 1.7;
          font-size: 1.1rem;
          margin-bottom: 2rem;
        }

        .subsystem-expanded-content {
          animation: slideDown 0.5s ease;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .subsystems-vertical {
            gap: 2rem;
            margin-top: 3rem;
          }
          
          .subsystem-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          
          .subsystem-icon-large {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
          }
          
          .subsystem-title {
            font-size: 1.5rem;
          }
          
          .subsystem-image-section {
            height: 220px;
            padding: 1.25rem 1.5rem 1.75rem 1.5rem;
          }
        }
      `})]})}const Zm=[{date:"June 2026",title:"ARJUNA 10,000ft Mission",excerpt:"Team Drona targets a 10,000 ft apogee in the IREC sub-scale category using a custom N3316 solid motor."},{date:"Active",title:"Sanjaya Avionics Suite",excerpt:"The SRAD avionics system integrates active airbrakes and an EKF algorithm for precise altitude regulation."}];function qm(){return s.jsx("div",{className:"page-container",children:s.jsx("section",{id:"newsletter-page",className:"scroll-section",children:s.jsxs("div",{className:"newsletter-page-inner",children:[s.jsxs("div",{className:"reveal",children:[s.jsx("span",{className:"section-label",children:"Stay Updated"}),s.jsxs("h2",{className:"section-title",children:["Our ",s.jsx("em",{children:"Newsletter"}),s.jsx("div",{className:"title-line"})]})]}),s.jsx("p",{className:"newsletter-page-desc reveal",style:{transitionDelay:"0.1s"},children:"Launch updates and technical insights — coming soon."}),s.jsx("div",{className:"newsletter-articles reveal",style:{transitionDelay:"0.2s"},children:Zm.map((u,c)=>s.jsxs("div",{className:"newsletter-article",children:[s.jsx("span",{className:"newsletter-date",children:u.date}),s.jsx("h3",{className:"newsletter-title",children:u.title}),s.jsx("p",{className:"newsletter-excerpt",children:u.excerpt})]},c))}),s.jsx("p",{className:"newsletter-soon reveal",style:{transitionDelay:"0.3s"},children:"Coming soon"})]})})})}function ep(){const{pathname:u}=Bn();return S.useEffect(()=>{window.scrollTo(0,0)},[u]),S.useEffect(()=>{const c=document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale"),a=new IntersectionObserver(m=>m.forEach(h=>{h.isIntersecting&&h.target.classList.add("visible")}),{threshold:.05,rootMargin:"20px"});return c.forEach(m=>a.observe(m)),()=>a.disconnect()},[u]),s.jsxs("div",{className:"app-shell",children:[s.jsx(Fm,{}),s.jsx(Am,{}),s.jsx(Im,{}),s.jsx(Mm,{}),s.jsxs(Sm,{children:[s.jsx(Xt,{path:"/",element:s.jsx(Vm,{})}),s.jsx(Xt,{path:"/rocket",element:s.jsx(Hm,{})}),s.jsx(Xt,{path:"/team",element:s.jsx(Ym,{})}),s.jsx(Xt,{path:"/contact",element:s.jsx(Km,{})}),s.jsx(Xt,{path:"/about",element:s.jsx(Gm,{})}),s.jsx(Xt,{path:"/subsystems",element:s.jsx(Jm,{})}),s.jsx(Xt,{path:"/newsletter",element:s.jsx(qm,{})})]})]})}function tp(){const[u,c]=S.useState(!0);return s.jsxs(zm,{children:[s.jsx(ep,{}),u&&s.jsx(Dm,{onDone:()=>c(!1)})]})}zf.createRoot(document.getElementById("root")).render(s.jsx(dc.StrictMode,{children:s.jsx(tp,{})}));
