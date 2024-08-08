/*! For license information please see alameda_bundle_chrome_zh_CN.js.LICENSE.txt */
(()=>{var __webpack_modules__={968:(__unused_webpack_module,exports)=>{(function(){var requirejs,require,define;(function(global,Promise,undef){if(!Promise)throw new Error("No Promise implementation available");var topReq,dataMain,src,subPath,bootstrapConfig=requirejs||require,hasOwn=Object.prototype.hasOwnProperty,contexts={},queue=[],currDirRegExp=/^\.\//,urlRegExp=/^\/|\:|\?|\.js$/,commentRegExp=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,slice=Array.prototype.slice;if("function"!=typeof requirejs){var asap=Promise.resolve(void 0);requirejs=topReq=newContext("_"),"function"!=typeof require&&(require=topReq),topReq.exec=function(text){return eval(text)},topReq.contexts=contexts,define=function(){queue.push(slice.call(arguments,0))},define.amd={jQuery:!0},bootstrapConfig&&topReq.config(bootstrapConfig),topReq.isBrowser&&!contexts._.config.skipDataMain&&(dataMain=document.querySelectorAll("script[data-main]")[0],dataMain=dataMain&&dataMain.getAttribute("data-main"),dataMain&&(dataMain=dataMain.replace(jsSuffixRegExp,""),bootstrapConfig&&bootstrapConfig.baseUrl||-1!==dataMain.indexOf("!")||(src=dataMain.split("/"),dataMain=src.pop(),subPath=src.length?src.join("/")+"/":"./",topReq.config({baseUrl:subPath})),topReq([dataMain])))}function commentReplace(e,t){return t||""}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return e&&hasProp(e,t)&&e[t]}function obj(){return Object.create(null)}function eachProp(e,t){var n;for(n in e)if(hasProp(e,n)&&t(e[n],n))break}function mixin(e,t,n,r){return t&&eachProp(t,(function(t,o){!n&&hasProp(e,o)||(!r||"object"!=typeof t||!t||Array.isArray(t)||"function"==typeof t||t instanceof RegExp?e[o]=t:(e[o]||(e[o]={}),mixin(e[o],t,n,r)))})),e}function getGlobal(e){if(!e)return e;var t=global;return e.split(".").forEach((function(e){t=t[e]})),t}function newContext(e){var t,n,r,o,i,a,s,c,u=obj(),l=obj(),f={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},d=obj(),p=[],h=obj(),m=obj(),g=obj(),b=0,_=(new Date).getTime(),w=0,y=obj(),v=obj(),x=obj(),j=Promise.resolve();function q(e,t,n){var r,o,i,a,s,c,u,l,d,p,h=t&&t.split("/"),m=f.map,g=m&&m["*"];if(e&&(c=(e=e.split("/")).length-1,f.nodeIdCompat&&jsSuffixRegExp.test(e[c])&&(e[c]=e[c].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),function(e){var t,n,r=e.length;for(t=0;t<r;t++)if("."===(n=e[t]))e.splice(t,1),t-=1;else if(".."===n){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;t>0&&(e.splice(t-1,2),t-=2)}}(e),e=e.join("/")),n&&m&&(h||g)){e:for(i=(o=e.split("/")).length;i>0;i-=1){if(s=o.slice(0,i).join("/"),h)for(a=h.length;a>0;a-=1)if((r=getOwn(m,h.slice(0,a).join("/")))&&(r=getOwn(r,s))){u=r,l=i;break e}!d&&g&&getOwn(g,s)&&(d=getOwn(g,s),p=i)}!u&&d&&(u=d,l=p),u&&(o.splice(0,l,u),e=o.join("/"))}return getOwn(f.pkgs,e)||e}function E(e){var t,r,o,i;for(t=0;t<queue.length;t+=1){if("string"!=typeof queue[t][0]){if(!e)break;queue[t].unshift(e),e=undef}t-=1,(r=(o=queue.shift())[0])in u||r in l||(r in h?n.apply(undef,o):l[r]=o)}e&&(i=getOwn(f.shim,e)||{},n(e,i.deps||[],i.exportsFn))}function O(e,t){var o=function(a,s,c,l){var f,d;if(t&&E(),"string"==typeof a){if(i[a])return i[a](e);if(!((f=r(a,e,!0).id)in u))throw new Error("Not loaded: "+f);return u[f]}return a&&!Array.isArray(a)&&(d=a,a=undef,Array.isArray(s)&&(a=s,s=c,c=l),t)?o.config(d)(a,s,c):(s=s||function(){return slice.call(arguments,0)},j.then((function(){return E(),n(undef,a||[],s,c,e)})))};return o.isBrowser="undefined"!=typeof document&&"undefined"!=typeof navigator,o.nameToUrl=function(e,t,n){var r,i,a,s,c,u,l=getOwn(f.pkgs,e);if(l&&(e=l),u=getOwn(x,e))return o.nameToUrl(u,t,n);if(urlRegExp.test(e))s=e+(t||"");else{for(r=f.paths,a=(i=e.split("/")).length;a>0;a-=1)if(c=getOwn(r,i.slice(0,a).join("/"))){Array.isArray(c)&&(c=c[0]),i.splice(0,a,c);break}s=i.join("/"),s=("/"===(s+=t||(/^data\:|^blob\:|\?/.test(s)||n?"":".js")).charAt(0)||s.match(/^[\w\+\.\-]+:/)?"":f.baseUrl)+s}return f.urlArgs&&!/^blob\:/.test(s)?s+f.urlArgs(e,s):s},o.toUrl=function(t){var n,r=t.lastIndexOf("."),i=t.split("/")[0];return-1!==r&&(!("."===i||".."===i)||r>1)&&(n=t.substring(r,t.length),t=t.substring(0,r)),o.nameToUrl(q(t,e),n,!0)},o.defined=function(t){return r(t,e,!0).id in u},o.specified=function(t){return(t=r(t,e,!0).id)in u||t in h},o}function S(e,t,n){e&&(u[e]=n,requirejs.onResourceLoad&&requirejs.onResourceLoad(c,t.map,t.deps)),t.finished=!0,t.resolve(n)}function k(e,t){e.finished=!0,e.rejected=!0,e.reject(t)}function C(e){e.factoryCalled=!0;var t,n=e.map.id;try{t=c.execCb(n,e.factory,e.values,u[n])}catch(t){return k(e,t)}n?t===undef&&(t=e.cjsModule?e.cjsModule.exports:e.usingExports?u[n]:{__DropboxAlamedaHackNoUndefinedModules:!0}):p.splice(p.indexOf(e),1),S(n,e,t)}function T(e,t){this.rejected||this.depDefined[t]||(this.depDefined[t]=!0,this.depCount+=1,this.values[t]=e,this.depending||this.depCount!==this.depMax||C(this))}function M(e,t){var n={};return n.promise=new Promise((function(t,r){n.resolve=t,n.reject=function(t){e||p.splice(p.indexOf(n),1),r(t)}})),n.map=e?t||r(e):{},n.depCount=0,n.depMax=0,n.values=[],n.depDefined=[],n.depFinished=T,n.map.pr&&(n.deps=[r(n.map.pr)]),n}function R(e,t){var n;return e?(n=e in h&&h[e])||(n=h[e]=M(e,t)):(n=M(),p.push(n)),n}function A(e,t){return function(n){e.rejected||(n.dynaId||(n.dynaId="id"+(w+=1),n.requireModules=[t]),k(e,n))}}function P(e,t,n,r){n.depMax+=1,o(e,t).then((function(e){n.depFinished(e,r)}),A(n,e.id)).catch(A(n,n.map.id))}function $(e,n,o){e.load(n.n,O(o),function(e){var n;function o(t){n||S(e,R(e),t)}return o.error=function(t){k(R(e),t)},o.fromText=function(o,i){var a,s=R(e),c=r(r(e).n),u=c.id;n=!0,s.factory=function(e,t){return t},i&&(o=i),hasProp(f.config,e)&&(f.config[u]=f.config[e]);try{t.exec(o)}catch(e){(a=new Error("fromText eval for "+u+" failed: "+e)).requireType="fromtexteval",k(s,a)}E(u),s.deps=[c],P(c,null,s,s.deps.length)},o}(n.id),f)}function U(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function L(e,t,n){var r=e.map.id;t[r]=!0,!e.finished&&e.deps&&e.deps.forEach((function(r){var o=r.id,a=!hasProp(i,o)&&R(o,r);!a||a.finished||n[o]||(hasProp(t,o)?e.deps.forEach((function(t,n){t.id===o&&e.depFinished(u[o],n)})):L(a,t,n))})),n[r]=!0}function D(e){var t,n,r,o=[],i=1e3*f.waitSeconds,s=i&&_+i<(new Date).getTime();if(0===b&&(e?e.finished||L(e,{},{}):p.length&&p.forEach((function(e){L(e,{},{})}))),s){for(n in h)(r=h[n]).finished||o.push(r.map.id);(t=new Error("Timeout for modules: "+o)).requireModules=o,t.requireType="timeout",o.forEach((function(e){k(R(e),t)}))}else(b||p.length)&&(a||(a=!0,setTimeout((function(){a=!1,D()}),70)))}function I(e){return setTimeout((function(){e.dynaId&&y[e.dynaId]||(y[e.dynaId]=!0,t.onError(e))})),e}return s="function"==typeof importScripts?function(e){var t=e.url;v[t]||(v[t]=!0,R(e.id),importScripts(t),E(e.id))}:function(e){var n,o=e.id,i=e.url;v[i]||(v[i]=!0,(n=document.createElement("script")).setAttribute("data-requiremodule",o),n.type=f.scriptType||"text/javascript",n.charset="utf-8",n.async=!0,b+=1,n.addEventListener("load",(function(){b-=1,E(o)}),!1),n.addEventListener("error",(function(){b-=1;var e,i=getOwn(f.paths,o);if(i&&Array.isArray(i)&&i.length>1){n.parentNode.removeChild(n),i.shift();var a=R(o);a.map=r(o),a.map.url=t.nameToUrl(o),s(a.map)}else(e=new Error("Load failed: "+o+": "+n.src)).requireModules=[o],e.requireType="scripterror",k(R(o),e)}),!1),n.src=i,f.onNodeCreated&&f.onNodeCreated(n,f,o,i),10===document.documentMode?asap.then((function(){document.head.appendChild(n)})):document.head.appendChild(n))},o=function(e,i){var a,c,u=e.id,d=f.shim[u];if(u in l)a=l[u],delete l[u],n.apply(undef,a);else if(!(u in h))if(e.pr){if(!(c=getOwn(x,u)))return o(r(e.pr)).then((function(n){var o=e.prn?e:r(u,i,!0),a=o.id,s=getOwn(f.shim,a);return a in g||(g[a]=!0,s&&s.deps?t(s.deps,(function(){$(n,o,i)})):$(n,o,i)),R(a).promise}));e.url=t.nameToUrl(c),s(e)}else d&&d.deps?t(d.deps,(function(){s(e)})):s(e);return R(u).promise},r=function(e,n,r){if("string"!=typeof e)return e;var o,i,a,s,c,l,f=e+" & "+(n||"")+" & "+!!r;return s=(a=U(e))[0],e=a[1],!s&&f in d?d[f]:(s&&(o=(s=q(s,n,r))in u&&u[s]),s?o&&o.normalize?(e=o.normalize(e,function(e){return function(t){return q(t,e,!0)}}(n)),l=!0):e=-1===e.indexOf("!")?q(e,n,r):e:(s=(a=U(e=q(e,n,r)))[0],e=a[1],i=t.nameToUrl(e)),c={id:s?s+"!"+e:e,n:e,pr:s,url:i,prn:s&&l},s||(d[f]=c),c)},i={require:function(e){return O(e)},exports:function(e){var t=u[e];return void 0!==t?t:u[e]={}},module:function(e,t){return{id:e,uri:t||"",exports:i.exports(e),config:function(){return getOwn(f.config,e)||{}}}}},n=function(e,t,n,o,a){if(e){if(e in m)return;m[e]=!0}var s=R(e);return t&&!Array.isArray(t)&&(n=t,t=[]),t=t?slice.call(t,0):null,o||(hasProp(f,"defaultErrback")?f.defaultErrback&&(o=f.defaultErrback):o=I),o&&s.promise.catch(o),a=a||e,"function"==typeof n?(!t.length&&n.length&&(n.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,(function(e,n){t.push(n)})),t=(1===n.length?["require"]:["require","exports","module"]).concat(t)),s.factory=n,s.deps=t,s.depending=!0,t.forEach((function(n,o){var c;t[o]=c=r(n,a,!0),"require"===(n=c.id)?s.values[o]=i.require(e):"exports"===n?(s.values[o]=i.exports(e),s.usingExports=!0):"module"===n?s.values[o]=s.cjsModule=i.module(e,s.map.url):void 0===n?s.values[o]=void 0:P(c,a,s,o)})),s.depending=!1,s.depCount===s.depMax&&C(s)):e&&S(e,s,n),_=(new Date).getTime(),e||D(s),s.promise},(t=O(null,!0)).config=function(n){if(n.context&&n.context!==e){var r=getOwn(contexts,n.context);return r?r.req.config(n):newContext(n.context).config(n)}if(d=obj(),n.baseUrl&&"/"!==n.baseUrl.charAt(n.baseUrl.length-1)&&(n.baseUrl+="/"),"string"==typeof n.urlArgs){var o=n.urlArgs;n.urlArgs=function(e,t){return(-1===t.indexOf("?")?"?":"&")+o}}var i=f.shim,a={paths:!0,bundles:!0,config:!0,map:!0};return eachProp(n,(function(e,t){a[t]?(f[t]||(f[t]={}),mixin(f[t],e,!0,!0)):f[t]=e})),n.bundles&&eachProp(n.bundles,(function(e,t){e.forEach((function(e){e!==t&&(x[e]=t)}))})),n.shim&&(eachProp(n.shim,(function(e,t){Array.isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=function(e){return function(){var t;return e.init&&(t=e.init.apply(global,arguments)),t||e.exports&&getGlobal(e.exports)}}(e)),i[t]=e})),f.shim=i),n.packages&&n.packages.forEach((function(e){var t;t=(e="string"==typeof e?{name:e}:e).name,e.location&&(f.paths[t]=e.location),f.pkgs[t]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")})),(n.deps||n.callback)&&t(n.deps,n.callback),t},t.onError=function(e){throw e},c={id:e,defined:u,waiting:l,config:f,deferreds:h,req:t,execCb:function(e,t,n,r){return t.apply(r,n)}},contexts[e]=c,t}})(this,"undefined"!=typeof Promise?Promise:void 0),exports.define=define,exports.require=require,exports.requirejs=requirejs}).call(window)},746:()=>{!function(){if("object"!=typeof globalThis)try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,"undefined"==typeof globalThis&&(window.globalThis=window),delete Object.prototype.__magic__}catch(e){window.globalThis=window}}()},535:(e,t,n)=>{"use strict";function r(e,t,n,r,o){o&&console.log(o.stack),o&&o.dynaId&&(o.excExtra={requireModules:o.requireModules},o.force=!0,o.message.startsWith("Timeout for modules:")||o.message.startsWith("Load failed:")?o.severity="non-critical":o.severity="critical");const i=["ResizeObserver loop limit exceeded","ResizeObserver loop completed with undelivered notifications"];(null==o?void 0:o.message)&&i.some((e=>null==o?void 0:o.message.startsWith(e)))&&(o.severity="non-critical");const s=window.requireContexts["externals"in window.requireContexts?"externals":"_"];return(0,s.require)([s.exceptionModule]).then((([s])=>{o||(o=new Error("string"==typeof e?e:String(e)),i.some((e=>null==o?void 0:o.message.startsWith(e)))&&(o.severity="non-critical"),t&&n&&r&&(o.stack_frames=[{url:t,line:n,column:r,func:"",context:[],args:[]}]));const c=u();c.tags&&(o.tags=[...o.tags||[],...c.tags]),c.extras&&(o.excExtra=Object.assign(Object.assign({},c.extras),o.excExtra||{}));let l={};a&&a.dsn&&(l=a),s.sendExceptionReport(o,l)}),(()=>{})).catch((()=>{})),!1}function o(){window.onerror=r;window.addEventListener("unhandledrejection",(e=>{var t;(t=e.reason)instanceof Error&&r("",void 0,void 0,void 0,t)}))}n.r(t),n.d(t,{addExceptionExtras:()=>c,enableSentryReporting:()=>l,getExceptionExtras:()=>u,installGlobalErrorHandlers:()=>o,reportError:()=>r});const i=e=>{const t={};return e.forEach((e=>{t[e]||(t[e]=!0)})),Object.keys(t)};let a,s={};function c(e){s={extras:Object.assign(Object.assign({},s.extras||{}),e.extras||{}),tags:i([...s.tags||[],...e.tags||[]])}}function u(){return s}function l(e){a=e}},994:()=>{window.__CIRCULAR_DEPENDENCY__={}},376:(e,t,n)=>{"use strict";n.r(t);n(994),n(193),n(746)},193:()=>{"use strict";void 0===window&&(window={}),void 0===window.matchMedia&&(window.matchMedia=e=>({})),"undefined"!=typeof BigInt&&(BigInt.prototype.toJSON=function(){return this.toString()})},285:(e,t,n)=>{"use strict";n.r(t),n.d(t,{configure_requirejs:()=>w});var r=n(968);const o=["edison:preloadCss","js:requireCssWithComponent","js:require_css","ensemble","css-modules"],i=["css-modules"];function a(e,t,n){if(n[t].length>0){if(i.includes(t)){const r=n[t];for(let t=0;t<r.length;t++){const{elem:n,path:o}=r[t];if(o>e.path)return[n,t]}}return[n[t][n[t].length-1].elem.nextElementSibling,null]}const r=o.indexOf(t);for(let e=r-1;e>=0;e--){const t=n[o[e]]||[];if(t.length>0)return[t[t.length-1].elem.nextElementSibling,null]}for(let e=r+1;e<o.length;e++){const t=n[o[e]]||[];if(t.length>0)return[t[0].elem,null]}return[null,null]}function s(e,t,n,r,o){e.elem.setAttribute("data-loader",t),e.elem instanceof HTMLStyleElement&&e.elem.setAttribute("path",e.path);let s=null,c=null;if(!o){if(i.includes(t)&&function(e,t,n){if(n.hasOwnProperty(t)&&null!=n[t]&&n[t].length>0)return n[t].map((({path:e})=>e)).includes(e.path);return!1}(e,t,n))return!1;[s,c]=a(e,t,n)}return null===c?n[t].push(e):n[t].splice(c,0,e),s?r.insertBefore(e.elem,s):r.appendChild(e.elem),!0}function c(){const e={};for(const t of["edison:preloadCss","js:require_css","js:requireCssWithComponent","ensemble","css-modules"])e[t]=[];return e}function u(e,t,n){!function(){const e=c();for(const t of Array.from(document.head.children))if(t instanceof HTMLLinkElement&&"stylesheet"===t.rel||t instanceof HTMLStyleElement&&null!=t.getAttribute("path")){const n=t instanceof HTMLLinkElement?new URL(t.href).pathname:t.getAttribute("path");if(null!=n){const r=t.getAttribute("data-loader");null!=r&&e.hasOwnProperty(r)&&e[r]instanceof Array&&e[r].push({elem:t,path:n})}}document.defaultView.__injectCssCache=e}(),(0,r.define)("css",[],(()=>{let e=!1;return{load(t,r,o,u){var l;let f=null===(l=null==u?void 0:u.paths)||void 0===l?void 0:l[`css!${t}`];f||(window.EDISON_LOCALMODE?f=t:r(["metaserver/static/js/core/exception"],(e=>{e.reportException({err:new Error(`Failed to load CSS module '${t}', could not find RequireJSConfig for it.`),tags:["css_loader"]})})));const d=Array.isArray(f)?f[0]:f,p=document.createElement("link");p.type="text/css",p.rel="stylesheet",p.href=`${u.baseUrl}${d}`,p.onload=()=>{o({})},p.onerror=(t,i,a,s,c)=>{if(o({}),r(["metaserver/static/js/core/exception"],(e=>{if(c)e.reportException({err:c,tags:["css_loader"]});else{const n="string"==typeof t?t:`${t.type} ${d}`;e.reportStack(n,{tags:["css_loader"]})}})),!e&&Array.isArray(f)&&u.baseUrl!==n){e=!0;const t=p.nextElementSibling;document.head.removeChild(p),p.href=`${n}${d}`,null!==t?document.head.insertBefore(p,t):document.head.appendChild(p)}};const h=new URL(p.href);0===function(e,t,n=document){const r=n.defaultView;r.__injectCssCache||(r.__injectCssCache=c());const o=r.__injectCssCache;o[t]=o[t]?o[t]:[];const u=i.includes(t);if(!u&&e.length>1){const[r]=a(e[0],t,o),i=n.createDocumentFragment();let c=0;for(const n of e)s(n,t,o,i,!u)&&c++;return null===r?n.head.appendChild(i):n.head.insertBefore(i,r),c}{let r=0;for(const i of e)s(i,t,o,n.head,!1)&&r++;return r}}([{elem:p,path:h.pathname}],"css-modules")&&o({})}}})),t(["css"])}var l=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((r=r.apply(e,t||[])).next())}))};function f(e){const t="data_module";(0,r.define)(t,["require"],(e=>({normalize:function(e){return e.startsWith(`${t}!`)&&(e=e.slice(`${t}!`.length)),e},load:function(t,n,r,o){e(["js/edison/edison"],(({Edison:e})=>l(this,void 0,void 0,(function*(){yield e.waitUntilInitialized();if(e.getIsStreamingEnabled())try{const n=yield e.getStreamedDataModule(t);r(n)}catch(e){r.error(e)}else e.loadDataModule([t]).then((e=>{r(e[t])})).catch((e=>{r.error(e)}))}))))}}))),e(["data_module"])}function d(e,t,n){e&&!window._jsReadyToLoad?function(e,t,n,r){const o=t=>{clearTimeout(i),window.removeEventListener(e,o),t||r(e),n()},i=setTimeout(o,t);window.addEventListener(e,o)}("loadJS",1e4,t,(e=>{n(["metaserver/static/js/core/exception"],(t=>{t.reportStack(`${e} event did not fire in time`,{tags:[`${e}-timeout`]})}))})):t()}n(193);function p(e,t){const n=function(e){const t=Object.assign({},e);e.map&&(t.map=Object.assign({},e.map),t.map["*"]=Object.assign({},e.map["*"]));e.paths&&(t.paths=Object.assign({},e.paths));return t}(e);if(t.langpack){const{locale:e}=t.langpack;if(e){const t=`metaserver/static/js/langpack/icu-${e}.json`;if(n.map){const e="metaserver/static/js/langpack";n.map["*"][e]=`json_loader!${t}`}}}if(t.requireFallbackBaseUrl)for(const e in n.paths)if(n.paths.hasOwnProperty(e)){const r=n.paths[e];e.startsWith("css!")||r.startsWith("/")||r.startsWith("https://")?n.paths[e]=r:n.paths[e]=[r,t.requireFallbackBaseUrl+r]}return t.useReactNext&&n.map&&function(e){if(!e.map||!e.map["*"])return!1;const t=["react","react-dom","react-next","react-dom-next"],n=e.map["*"];if(t.filter((e=>!n[e])).length>0)return!1;const r=e.paths;if(!r)return!1;return 0===t.map((e=>n[e])).filter((e=>!r[e])).length}(n)&&(n.map["*"].react=n.map["*"]["react-next"],n.map["*"]["react-dom"]=n.map["*"]["react-dom-next"]),n.onNodeCreated=function(e,t,n,r){e.crossOrigin="anonymous"},n}var h=n(116),m=n(535);let g=!0,b=null;function _(e){!function(e,t=!0){t?globalThis.__init_data_raw__=e:(b=e,g=!1)}(e,!0)}function w(e,t,n){var o;"string"==typeof t.initDataBase64&&_(t.initDataBase64);const i=(null!==(o=e.context)&&void 0!==o?o:"_")in window.requirejs.contexts,a=p(e,t),s=r.requirejs.config(a);s.onError=()=>{};const c=e.context||"_",l={require:s,requireConfig:a,exceptionModule:t.exceptionModule||"metaserver/static/js/core/exception_reporter"};var g,b;window.requireContexts[c]=l,g=s,b=t.requireFallbackBaseUrl,(0,r.define)("json_loader",[],(()=>({normalize:function(e){const t="json_loader";return e.startsWith(`${t}!`)&&(e=e.slice(`${t}!`.length)),e},load(e,t,n,r){var o;const i=null===(o=null==r?void 0:r.paths)||void 0===o?void 0:o[`json_loader!${e}`];i||(n({}),t(["metaserver/static/js/core/exception"],(t=>{t.reportStack(`no paths configuration to load ${e} with json_loader`,{tags:["json_loader"]})})));const a=Array.isArray(i)?i[0]:i;!function e(r){const o=new XMLHttpRequest;o.addEventListener("load",(()=>{try{null!=o.response&&"object"==typeof o.response?n(o.response):n(JSON.parse(o.responseText))}catch(e){n({}),t(["metaserver/static/js/core/exception"],(t=>{t.reportException({err:e,tags:["json_loader"]})}))}})),o.addEventListener("error",(()=>{b&&r!==b&&e(b)})),o.open("GET",`${r}${a}`);try{o.responseType="json"}catch(e){}o.send()}(r.baseUrl)}}))),g(["json_loader"]),u(0,s,t.requireFallbackBaseUrl),function(e){(0,r.define)("library_loader",[],(()=>({load:function(e,t,n,r){const[o,i]=e.split(":");window.requireContexts[o].require([i],(e=>{n(e)}))}}))),e(["library_loader"])}(s),function(e){(0,r.define)("jsconst_loader",[],(()=>({normalize:function(e){const t="jsconst_loader";return e.startsWith(`${t}!`)&&(e=e.slice(`${t}!`.length)),e},load:function(e,t,n,r){window.ensemble.requestConstModule(e,r.context,n)}}))),e(["jsconst_loader"])}(s),function(e){(0,r.define)("unreadable_jsconst_loader",[],(()=>({load:function(e,t,n,r){n({__esModule:!0,error:"JSCONSTS NOT SUPPORTED"})}}))),e(["unreadable_jsconst_loader"])}(s),f(s),s.onError=()=>{},d(Boolean(t.deferJs),(function(){i||function(e,t){const n=r.requirejs.contexts[t];let o;if(window.performance){const e=window.location.search.indexOf("show_debug_spans")>-1;o=(t,n)=>{const r=void 0===t?"anonymous-"+y++:t;e&&window.performance.mark(`${r} execCb start`);const o=n();return e&&(window.performance.mark(`${r} execCb end`),window.performance.measure(`execCb ${r}`,`${r} execCb start`,`${r} execCb end`)),o}}else o=(e,t)=>t();n.execCb=(e,n,r,i)=>{if(r.some((e=>void 0===e))){const n=window.requireContexts[t].firstUndefinedModule;n||(window.requireContexts[t].firstUndefinedModule=e);const o=r.indexOf(void 0),i=new Error(`alameda error: module ${e} had an undefined dep in position ${o}`);throw n&&(i.reported=!0),i}return o(e,(()=>n.apply(i,r)))}}(0,c);(0,h.execTiers)(s,(()=>{}),n)}),s),(0,m.addExceptionExtras)({extras:t.exceptionExtras||{},tags:t.exceptionTags||[]}),t.sentryOptions&&t.sentryOptions.dsn&&(0,m.enableSentryReporting)(t.sentryOptions)}let y=0},116:(e,t,n)=>{"use strict";function r(e,t,n){if(0===n.length)return;const o=n[0];let i=o.length;0===i&&r(e,t,n.slice(1));const a=()=>{i-=1,0===i&&r(e,t,n.slice(1))};o.forEach((t=>{const n=t[0],r=t[1];e(n,(function(){r.apply(null,arguments),a()}),(e=>{a()}))}))}n.r(t),n.d(t,{execTiers:()=>r})}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__={};!function(e,t){function n(e,t){var n=arguments.length>2?arguments[2]:[];if(!1===o(e))throw new TypeError(Object.prototype.toString.call(e)+"is not a function.");return e.apply(t,n)}function r(e,t){return e[t]}function o(e){return"function"==typeof e}function i(e){if(null===e||e===t)throw TypeError(Object.prototype.toString.call(e)+" is not coercible to Object.");return e}function a(e,n){return function(e){if(null===e||e===t)throw TypeError();return Object(e)}(e)[n]}function s(e,n){var r=a(e,n);if(null===r||r===t)return t;if(!1===o(r))throw new TypeError("Method not callable: "+n);return r}function c(t){switch(typeof t){case"undefined":return"undefined";case"boolean":return"boolean";case"number":return"number";case"string":return"string";case"symbol":return"symbol";default:return null===t?"null":"Symbol"in e&&(t instanceof e.Symbol||t.constructor===e.Symbol)?"symbol":"object"}}var u,l,f,d,p=function(){function e(e){return/^[0-9]$/.test(e)}return function(t,n,r,o,i,a){for(var s=t.length,u=n.length,l=r+s,f=o.length,d="",p=0;p<a.length;p+=1){var h=a.charAt(p),m=p+1>=a.length,g=p+2>=a.length;if("$"!==h||m)d+=a.charAt(p);else{var b=a.charAt(p+1);if("$"===b)d+="$",p+=1;else if("&"===b)d+=t,p+=1;else if("`"===b)d+=0===r?"":n.slice(0,r-1),p+=1;else if("'"===b)d+=l>=u?"":n.slice(l),p+=1;else{var _=g?null:a.charAt(p+2);if(!e(b)||"0"===b||!g&&e(_))if(e(b)&&(g||e(_))){var w=b+_,y=parseInt(w,10)-1;d+=w<=f&&"Undefined"===c(o[y])?"":o[y],p+=2}else d+="$";else{var v=parseInt(b,10);d+=v<=f&&"Undefined"===c(o[v-1])?"":o[v-1],p+=1}}}}return d}}();function h(n){if("object"!==c(n))return!1;var o="Symbol"in e&&"match"in e.Symbol?r(n,e.Symbol.match):t;if(o!==t)return function(e){return Boolean(e)}(o);try{var i=n.lastIndex;return n.lastIndex=0,RegExp.prototype.exec.call(n),!0}catch(e){}finally{n.lastIndex=i}return!1}function m(e,t,n){var r=e.length;if(""===t&&n<=r)return n;for(var o=t.length,i=n,a=-1;i+o<=r;){for(var s=!0,c=0;c<o;c+=1)if(e[i+c]!==t[c]){s=!1;break}if(s){a=i;break}i+=1}return a}function g(i){var a=arguments.length>1?arguments[1]:t;if("object"===c(i)){if(arguments.length<2)var u="default";else a===String?u="string":a===Number&&(u="number");var l="function"==typeof e.Symbol&&"symbol"==typeof e.Symbol.toPrimitive?s(i,e.Symbol.toPrimitive):t;if(l!==t){var f=n(l,i,[u]);if("object"!==c(f))return f;throw new TypeError("Cannot convert exotic object to primitive.")}return"default"===u&&(u="number"),function(e,t){if("string"===t)var i=["toString","valueOf"];else i=["valueOf","toString"];for(var a=0;a<i.length;++a){var s=r(e,i[a]);if(o(s)){var u=n(s,e);if("object"!==c(u))return u}}throw new TypeError("Cannot convert to primitive.")}(i,u)}return i}function b(e){switch(c(e)){case"symbol":throw new TypeError("Cannot convert a Symbol value to a string");case"object":return b(g(e,String));default:return String(e)}}"replaceAll"in String.prototype||(u=String.prototype,l="replaceAll",f=function(a,c){"use strict";var u=i(this);if(a!==t&&null!==a){if(h(a)){var l=r(a,"flags");if(!("flags"in RegExp.prototype)&&!0!==a.global)throw TypeError("");if("flags"in RegExp.prototype&&(i(l),-1===b(l).indexOf("g")))throw TypeError("")}var f="Symbol"in e&&"replace"in e.Symbol?s(a,e.Symbol.replace):t;if(f!==t)return n(f,a,[u,c])}var d=b(u),g=b(a),_=o(c);!1===_&&(c=b(c));for(var w=g.length,y=Math.max(1,w),v=[],x=m(d,g,0);-1!==x;)v.push(x),x=m(d,g,x+y);for(var j=0,q="",E=0;E<v.length;E++){var O=d.substring(j,v[E]);if(_)var S=b(n(c,t,[g,v[E],d]));else S=p(g,d,v[E],[],t,c);q=q+O+S,j=v[E]+w}return j<d.length&&(q+=d.substring(j)),q},d={value:f,writable:!0,enumerable:!1,configurable:!0},Object.defineProperty(u,l,d))}("object"==typeof window&&window||"object"==typeof self&&self||"object"==typeof __webpack_require__.g&&__webpack_require__.g||{}),(()=>{"use strict";window.define=void 0;const e=__webpack_require__(968);window.requirejs=e.requirejs,window.define=e.define,window.require=e.require,__webpack_require__(376),window.performance&&window.performance.setResourceTimingBufferSize&&window.performance.setResourceTimingBufferSize(1e3);const{configure_requirejs:t}=__webpack_require__(285),{execTiers:n}=__webpack_require__(116);window.execTiers=n,window.InitRequireJs(t);const{installGlobalErrorHandlers:r}=__webpack_require__(535);let o;r(),o=()=>{},window.monkey_check=o})()})();
//# sourceMappingURL=alameda_bundle_chrome_zh_CN.js-vflcQzsNd.map