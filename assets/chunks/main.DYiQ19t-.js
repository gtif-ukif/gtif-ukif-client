var Xi=Object.defineProperty;var Dn=e=>{throw TypeError(e)};var ji=(e,t,n)=>t in e?Xi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var R=(e,t,n)=>ji(e,typeof t!="symbol"?t+"":t,n),Ke=(e,t,n)=>t.has(e)||Dn("Cannot "+n);var x=(e,t,n)=>(Ke(e,t,"read from private field"),n?n.call(e):t.get(e)),A=(e,t,n)=>t.has(e)?Dn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),pt=(e,t,n,i)=>(Ke(e,t,"write to private field"),i?i.call(e,n):t.set(e,n),n),H=(e,t,n)=>(Ke(e,t,"access private method"),n);import{x as h,T as ue,E as yt,i as lt,a as hn}from"./lit-element.C0HUAAc_.js";import{n as L}from"./when.BR7zwNJC.js";import{c as Yi}from"./repeat.DMN4mHUT.js";import{e as zi,i as Wi,t as Rt}from"./directive.CvdRHFdJ.js";import{f as Gi,m as Ji}from"./directive-helpers.CBzmZSrJ.js";import{o as ye,a as Ki}from"./unsafe-html.99KofNIx.js";import{e as bn,a as Qi}from"./addCommonStyleSheet.B9YrlOoW.js";import{c as ce,g as to}from"./commonjsHelpers.BosuxZz1.js";import{_ as eo}from"./index.BUIxO2d3.js";import{g as no}from"./getElement.CdRlZPdn.js";/**
 * wms-capabilities @0.6.0
 * @description WMS service Capabilities > JSON, based on openlayers 
 * @license BSD-2-Clause
 * @preserve
 */var E=e=>e!==void 0,Xn=(e,t,n)=>t in e?e[t]:e[t]=n;const ne={ELEMENT:1,TEXT:3,CDATA_SECTION:4};class io{constructor(t){this._parser=new t}toDocument(t){return this._parser.parseFromString(t,"application/xml")}getAllTextContent(t,n){return Ge(t,n).join("")}}function Ge(e,t){return jn(e,t,[]).join("")}function jn(e,t,n){if(e.nodeType===ne.CDATA_SECTION||e.nodeType===ne.TEXT)t?n.push(String(e.nodeValue).replace(/(\r\n|\r|\n)/g,"")):n.push(e.nodeValue);else{var i;for(i=e.firstChild;i;i=i.nextSibling)jn(i,t,n)}return n}function oo(e,t,n,i){for(var o=ro(t);o;o=ao(o)){var r=o.namespaceURI||null,a=e[r];if(E(a)){var s=a[o.localName];E(s)&&s.call(i,o,n)}}}function ro(e){let t=e.firstElementChild||e.firstChild;for(;t&&t.nodeType!==ne.ELEMENT;)t=t.nextSibling;return t}function ao(e){let t=e.nextElementSibling||e.nextSibling;for(;t&&t.nodeType!==ne.ELEMENT;)t=t.nextSibling;return t}function F(e,t,n){return so(e,t,n)}function so(e,t,n){var i=E(n)?n:{},o,r;for(o=0,r=e.length;o<r;++o)i[e[o]]=t;return i}function Yn(e,t){return function(n,i){var o=e.call(E(t)?t:this,n,i);if(E(o)){var r=i[i.length-1];r.push(o)}}}function N(e,t,n,i,o){return i.push(e),oo(t,n,i,o),i.pop()}function f(e,t,n){return function(i,o){let r=e.call(E(n)?n:this,i,o);if(E(r)){var a=o[o.length-1],s=E(t)?t:i.localName;a[s]=r}}}function J(e,t,n){return function(i,o){var r=e.call(E(n)?n:this,i,o);if(E(r)){var a=o[o.length-1],s=E(t)?t:i.localName,l=Xn(a,s,[]);l.push(r)}}}const lo=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function uo(e){return e.replace(lo,"")}function Vt(e){const t=/^\s*(true|1)|(false|0)\s*$/.exec(e);if(t)return E(t[1])||!1}function It(e){return gt(Ge(e,!1))}function gt(e){const t=/^\s*([+\-]?\d*\.?\d+(?:e[+\-]?\d+)?)\s*$/i.exec(e);if(t)return parseFloat(t[1])}function Qe(e){return Ee(Ge(e,!1))}function Ee(e){const t=/^\s*(\d+)\s*$/.exec(e);if(t)return parseInt(t[1],10)}function C(e){return uo(Ge(e,!1))}const co="http://www.w3.org/1999/xlink";function wn(e){return e.getAttributeNS(co,"href")}function ho(e,t){return N({},No,e,t)}function zn(e){return[gt(e.getAttribute("minx")),gt(e.getAttribute("miny")),gt(e.getAttribute("maxx")),gt(e.getAttribute("maxy"))]}function po(e,t){const n=zn(e),i=[gt(e.getAttribute("resx")),gt(e.getAttribute("resy"))];return{crs:e.getAttribute("CRS")||e.getAttribute("SRS"),extent:n,res:i}}function fo(e,t){const n=zn(e);if(!(!E(n[0])||!E(n[1])||!E(n[2])||!E(n[3])))return n}function go(e,t){const n=parseFloat(e.getAttribute("min")),i=parseFloat(e.getAttribute("max"));return{min:n,max:i}}function yo(e,t){const n=N({},ko,e,t);if(!E(n))return;const i=n.westBoundLongitude,o=n.southBoundLatitude,r=n.eastBoundLongitude,a=n.northBoundLatitude;if(!(!E(i)||!E(o)||!E(r)||!E(a)))return[i,o,r,a]}function mo(e,t){return N({},Ho,e,t)}function vo(e,t){return N({},Oo,e,t)}function bo(e,t){return N({},Po,e,t)}function wo(e,t){return N({},Mo,e,t)}function So(e,t){return N({},Io,e,t)}function xo(e,t){return N([],Bo,e,t)}function Eo(e,t){const n=Vt(e.getAttribute("queryable"));return N({queryable:E(n)?n:!1},Jn,e,t)}function $o(e,t){var n=t[t.length-1];const i=N({},Jn,e,t);if(!E(i))return;let o=Vt(e.getAttribute("queryable"));E(o)||(o=n.queryable),i.queryable=E(o)?o:!1;let r=Ee(e.getAttribute("cascaded"));E(r)||(r=n.cascaded),i.cascaded=r;let a=Vt(e.getAttribute("opaque"));E(a)||(a=n.opaque),i.opaque=E(a)?a:!1;let s=Vt(e.getAttribute("noSubsets"));E(s)||(s=n.noSubsets),i.noSubsets=E(s)?s:!1;let l=gt(e.getAttribute("fixedWidth"));E(l)||(l=n.fixedWidth),i.fixedWidth=l;let u=gt(e.getAttribute("fixedHeight"));E(u)||(u=n.fixedHeight),i.fixedHeight=u;const p=["Style","CRS","AuthorityURL"];for(let y=0,b=p.length;y<b;y++){const g=p[y],w=n[g];if(E(w)){let P=Xn(i,g,[]);P=P.concat(w),i[g]=P}}const d=["EX_GeographicBoundingBox","BoundingBox","Dimension","Attribution","MinScaleDenominator","MaxScaleDenominator"];for(let y=0,b=d.length;y<b;y++){const g=d[y],w=i[g];if(!E(w)){const P=n[g];i[g]=P}}return i}function To(e,t){return{name:e.getAttribute("name"),units:e.getAttribute("units"),unitSymbol:e.getAttribute("unitSymbol"),default:e.getAttribute("default"),multipleValues:Vt(e.getAttribute("multipleValues")),nearestValue:Vt(e.getAttribute("nearestValue")),current:Vt(e.getAttribute("current")),values:C(e)}}function vt(e,t){return N({},jo,e,t)}function Co(e,t){return N({},Uo,e,t)}function Ao(e,t){return N({},qo,e,t)}function _o(e,t){return N({},Zo,e,t)}function tn(e,t){return N({},Fo,e,t)}function Wn(e,t){var n=vt(e,t);if(E(n)){const i=[Ee(e.getAttribute("width")),Ee(e.getAttribute("height"))];return n.size=i,n}}function Do(e,t){var n=vt(e,t);if(E(n))return n.name=e.getAttribute("name"),n}function Lo(e,t){var n=vt(e,t);if(E(n))return n.type=e.getAttribute("type"),n}function Vo(e,t){return N({},Xo,e,t)}function Gn(e,t){return N([],Yo,e,t)}const q=[null,"http://www.opengis.net/wms"],Ro=F(q,{Service:f(vo),Capability:f(mo)}),Ho=F(q,{Request:f(Co),Exception:f(xo),Layer:f(Eo)}),Oo=F(q,{Name:f(C),Title:f(C),Abstract:f(C),KeywordList:f(Gn),OnlineResource:f(wn),ContactInformation:f(bo),Fees:f(C),AccessConstraints:f(C),LayerLimit:f(Qe),MaxWidth:f(Qe),MaxHeight:f(Qe)}),Po=F(q,{ContactPersonPrimary:f(wo),ContactPosition:f(C),ContactAddress:f(So),ContactVoiceTelephone:f(C),ContactFacsimileTelephone:f(C),ContactElectronicMailAddress:f(C)}),Mo=F(q,{ContactPerson:f(C),ContactOrganization:f(C)}),Io=F(q,{AddressType:f(C),Address:f(C),City:f(C),StateOrProvince:f(C),PostCode:f(C),Country:f(C)}),Bo=F(q,{Format:Yn(C)}),Jn=F(q,{Name:f(C),Title:f(C),Abstract:f(C),KeywordList:f(Gn),CRS:J(C),SRS:J(C),EX_GeographicBoundingBox:f(yo),LatLonBoundingBox:f(fo),BoundingBox:J(po),Dimension:J(To),Attribution:f(ho),AuthorityURL:J(Do),Identifier:J(C),MetadataURL:J(Lo),DataURL:J(vt),FeatureListURL:J(vt),Style:J(Vo),MinScaleDenominator:f(It),MaxScaleDenominator:f(It),ScaleHint:f(go),Layer:J($o)}),No=F(q,{Title:f(C),OnlineResource:f(wn),LogoURL:f(Wn)}),ko=F(q,{westBoundLongitude:f(It),eastBoundLongitude:f(It),southBoundLatitude:f(It),northBoundLatitude:f(It)}),Uo=F(q,{GetCapabilities:f(tn),GetMap:f(tn),GetFeatureInfo:f(tn)}),Fo=F(q,{Format:J(C),DCPType:J(Ao)}),qo=F(q,{HTTP:f(_o)}),Zo=F(q,{Get:f(vt),Post:f(vt)}),Xo=F(q,{Name:f(C),Title:f(C),Abstract:f(C),LegendURL:J(Wn),StyleSheetURL:f(vt),StyleURL:f(vt)}),jo=F(q,{Format:f(C),OnlineResource:f(wn)}),Yo=F(q,{Keyword:Yn(C)});class zo{constructor(t,n){!n&&typeof window<"u"&&(n=window.DOMParser),this.version=void 0,this._parser=new io(n),this._data=t}data(t){return this._data=t,this}toJSON(t){return t=t||this._data,this.parse(t)}parse(t){return this.readFromDocument(this._parser.toDocument(t))}readFromDocument(t){for(let n=t.firstChild;n;n=n.nextSibling)if(n.nodeType==ne.ELEMENT)return this.readFromNode(n);return null}readFromNode(t){return this.version=t.getAttribute("version"),N({version:this.version},Ro,t,[])||null}}async function Wo(e){let t=new URL(e),n=t.searchParams;n.set("SERVICE","WMS"),n.set("REQUEST","GetCapabilities");let i=t.toString();const o=await fetch(i);if(o.ok){const r=await o.text();return new zo(r).toJSON()}else throw new Error(`Error: ${o.status}`)}function Sn(e){const t=/\b(?:wms|ows)\b/i,n=/{(?:z|x|y-?)}\/{(?:z|x|y-?)}\/{(?:z|x|y-?)}/i;return t.test(e)?"TileWMS":n.test(e)?"XYZ":!1}function Go(e){const n=/^(?:(?:https?|ftp):\/\/|\/\/)?(?:localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(?:\w+[\w-]*\.)+\w+)(?::\d+)?(?:\/\S*)?$/.test(e),i=Sn(e);return!!(e&&n&&i)}function Kn(e){return e.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2": ').replace(/,\s*}/g,"}").replace(/,\s*]/g,"]").replace(/\s*(\{|}|\[|\]|,)\s*/g,"$1").replaceAll('": //',"://")}function Jo(e){try{return JSON.parse(Kn(e)),!!e}catch{return!1}}function Ko(e,t){const n=new URL(e).searchParams;Object.entries(t).forEach(([a,s])=>{typeof s=="object"&&!Array.isArray(s)&&s!==null?Object.keys(s).forEach(l=>{n.set(l,s[l])}):n.set(a,s)});const i=e.split("?")[0],o=n.toString();return`${i}?${o}`}/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */function Ln(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,i)}return n}function dt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ln(Object(n),!0).forEach(function(i){Qo(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ln(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function me(e){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?me=function(t){return typeof t}:me=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},me(e)}function Qo(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function bt(){return bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},bt.apply(this,arguments)}function tr(e,t){if(e==null)return{};var n={},i=Object.keys(e),o,r;for(r=0;r<i.length;r++)o=i[r],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function er(e,t){if(e==null)return{};var n=tr(e,t),i,o;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var nr="1.15.6";function mt(e){if(typeof window<"u"&&window.navigator)return!!navigator.userAgent.match(e)}var wt=mt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),ae=mt(/Edge/i),Vn=mt(/firefox/i),Gt=mt(/safari/i)&&!mt(/chrome/i)&&!mt(/android/i),xn=mt(/iP(ad|od|hone)/i),Qn=mt(/chrome/i)&&mt(/android/i),ti={capture:!1,passive:!1};function T(e,t,n){e.addEventListener(t,n,!wt&&ti)}function $(e,t,n){e.removeEventListener(t,n,!wt&&ti)}function $e(e,t){if(t){if(t[0]===">"&&(t=t.substring(1)),e)try{if(e.matches)return e.matches(t);if(e.msMatchesSelector)return e.msMatchesSelector(t);if(e.webkitMatchesSelector)return e.webkitMatchesSelector(t)}catch{return!1}return!1}}function ei(e){return e.host&&e!==document&&e.host.nodeType?e.host:e.parentNode}function st(e,t,n,i){if(e){n=n||document;do{if(t!=null&&(t[0]===">"?e.parentNode===n&&$e(e,t):$e(e,t))||i&&e===n)return e;if(e===n)break}while(e=ei(e))}return null}var Rn=/\s+/g;function tt(e,t,n){if(e&&t)if(e.classList)e.classList[n?"add":"remove"](t);else{var i=(" "+e.className+" ").replace(Rn," ").replace(" "+t+" "," ");e.className=(i+(n?" "+t:"")).replace(Rn," ")}}function m(e,t,n){var i=e&&e.style;if(i){if(n===void 0)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e,""):e.currentStyle&&(n=e.currentStyle),t===void 0?n:n[t];!(t in i)&&t.indexOf("webkit")===-1&&(t="-webkit-"+t),i[t]=n+(typeof n=="string"?"":"px")}}function Nt(e,t){var n="";if(typeof e=="string")n=e;else do{var i=m(e,"transform");i&&i!=="none"&&(n=i+" "+n)}while(!t&&(e=e.parentNode));var o=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return o&&new o(n)}function ni(e,t,n){if(e){var i=e.getElementsByTagName(t),o=0,r=i.length;if(n)for(;o<r;o++)n(i[o],o);return i}return[]}function ct(){var e=document.scrollingElement;return e||document.documentElement}function I(e,t,n,i,o){if(!(!e.getBoundingClientRect&&e!==window)){var r,a,s,l,u,p,d;if(e!==window&&e.parentNode&&e!==ct()?(r=e.getBoundingClientRect(),a=r.top,s=r.left,l=r.bottom,u=r.right,p=r.height,d=r.width):(a=0,s=0,l=window.innerHeight,u=window.innerWidth,p=window.innerHeight,d=window.innerWidth),(t||n)&&e!==window&&(o=o||e.parentNode,!wt))do if(o&&o.getBoundingClientRect&&(m(o,"transform")!=="none"||n&&m(o,"position")!=="static")){var y=o.getBoundingClientRect();a-=y.top+parseInt(m(o,"border-top-width")),s-=y.left+parseInt(m(o,"border-left-width")),l=a+r.height,u=s+r.width;break}while(o=o.parentNode);if(i&&e!==window){var b=Nt(o||e),g=b&&b.a,w=b&&b.d;b&&(a/=w,s/=g,d/=g,p/=w,l=a+p,u=s+d)}return{top:a,left:s,bottom:l,right:u,width:d,height:p}}}function Hn(e,t,n){for(var i=Ct(e,!0),o=I(e)[t];i;){var r=I(i)[n],a=void 0;if(a=o>=r,!a)return i;if(i===ct())break;i=Ct(i,!1)}return!1}function Ut(e,t,n,i){for(var o=0,r=0,a=e.children;r<a.length;){if(a[r].style.display!=="none"&&a[r]!==v.ghost&&(i||a[r]!==v.dragged)&&st(a[r],n.draggable,e,!1)){if(o===t)return a[r];o++}r++}return null}function En(e,t){for(var n=e.lastElementChild;n&&(n===v.ghost||m(n,"display")==="none"||t&&!$e(n,t));)n=n.previousElementSibling;return n||null}function nt(e,t){var n=0;if(!e||!e.parentNode)return-1;for(;e=e.previousElementSibling;)e.nodeName.toUpperCase()!=="TEMPLATE"&&e!==v.clone&&(!t||$e(e,t))&&n++;return n}function On(e){var t=0,n=0,i=ct();if(e)do{var o=Nt(e),r=o.a,a=o.d;t+=e.scrollLeft*r,n+=e.scrollTop*a}while(e!==i&&(e=e.parentNode));return[t,n]}function ir(e,t){for(var n in e)if(e.hasOwnProperty(n)){for(var i in t)if(t.hasOwnProperty(i)&&t[i]===e[n][i])return Number(n)}return-1}function Ct(e,t){if(!e||!e.getBoundingClientRect)return ct();var n=e,i=!1;do if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var o=m(n);if(n.clientWidth<n.scrollWidth&&(o.overflowX=="auto"||o.overflowX=="scroll")||n.clientHeight<n.scrollHeight&&(o.overflowY=="auto"||o.overflowY=="scroll")){if(!n.getBoundingClientRect||n===document.body)return ct();if(i||t)return n;i=!0}}while(n=n.parentNode);return ct()}function or(e,t){if(e&&t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}function en(e,t){return Math.round(e.top)===Math.round(t.top)&&Math.round(e.left)===Math.round(t.left)&&Math.round(e.height)===Math.round(t.height)&&Math.round(e.width)===Math.round(t.width)}var Jt;function ii(e,t){return function(){if(!Jt){var n=arguments,i=this;n.length===1?e.call(i,n[0]):e.apply(i,n),Jt=setTimeout(function(){Jt=void 0},t)}}}function rr(){clearTimeout(Jt),Jt=void 0}function oi(e,t,n){e.scrollLeft+=t,e.scrollTop+=n}function ri(e){var t=window.Polymer,n=window.jQuery||window.Zepto;return t&&t.dom?t.dom(e).cloneNode(!0):n?n(e).clone(!0)[0]:e.cloneNode(!0)}function ai(e,t,n){var i={};return Array.from(e.children).forEach(function(o){var r,a,s,l;if(!(!st(o,t.draggable,e,!1)||o.animated||o===n)){var u=I(o);i.left=Math.min((r=i.left)!==null&&r!==void 0?r:1/0,u.left),i.top=Math.min((a=i.top)!==null&&a!==void 0?a:1/0,u.top),i.right=Math.max((s=i.right)!==null&&s!==void 0?s:-1/0,u.right),i.bottom=Math.max((l=i.bottom)!==null&&l!==void 0?l:-1/0,u.bottom)}}),i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}var K="Sortable"+new Date().getTime();function ar(){var e=[],t;return{captureAnimationState:function(){if(e=[],!!this.options.animation){var i=[].slice.call(this.el.children);i.forEach(function(o){if(!(m(o,"display")==="none"||o===v.ghost)){e.push({target:o,rect:I(o)});var r=dt({},e[e.length-1].rect);if(o.thisAnimationDuration){var a=Nt(o,!0);a&&(r.top-=a.f,r.left-=a.e)}o.fromRect=r}})}},addAnimationState:function(i){e.push(i)},removeAnimationState:function(i){e.splice(ir(e,{target:i}),1)},animateAll:function(i){var o=this;if(!this.options.animation){clearTimeout(t),typeof i=="function"&&i();return}var r=!1,a=0;e.forEach(function(s){var l=0,u=s.target,p=u.fromRect,d=I(u),y=u.prevFromRect,b=u.prevToRect,g=s.rect,w=Nt(u,!0);w&&(d.top-=w.f,d.left-=w.e),u.toRect=d,u.thisAnimationDuration&&en(y,d)&&!en(p,d)&&(g.top-d.top)/(g.left-d.left)===(p.top-d.top)/(p.left-d.left)&&(l=lr(g,y,b,o.options)),en(d,p)||(u.prevFromRect=p,u.prevToRect=d,l||(l=o.options.animation),o.animate(u,g,d,l)),l&&(r=!0,a=Math.max(a,l),clearTimeout(u.animationResetTimer),u.animationResetTimer=setTimeout(function(){u.animationTime=0,u.prevFromRect=null,u.fromRect=null,u.prevToRect=null,u.thisAnimationDuration=null},l),u.thisAnimationDuration=l)}),clearTimeout(t),r?t=setTimeout(function(){typeof i=="function"&&i()},a):typeof i=="function"&&i(),e=[]},animate:function(i,o,r,a){if(a){m(i,"transition",""),m(i,"transform","");var s=Nt(this.el),l=s&&s.a,u=s&&s.d,p=(o.left-r.left)/(l||1),d=(o.top-r.top)/(u||1);i.animatingX=!!p,i.animatingY=!!d,m(i,"transform","translate3d("+p+"px,"+d+"px,0)"),this.forRepaintDummy=sr(i),m(i,"transition","transform "+a+"ms"+(this.options.easing?" "+this.options.easing:"")),m(i,"transform","translate3d(0,0,0)"),typeof i.animated=="number"&&clearTimeout(i.animated),i.animated=setTimeout(function(){m(i,"transition",""),m(i,"transform",""),i.animated=!1,i.animatingX=!1,i.animatingY=!1},a)}}}}function sr(e){return e.offsetWidth}function lr(e,t,n,i){return Math.sqrt(Math.pow(t.top-e.top,2)+Math.pow(t.left-e.left,2))/Math.sqrt(Math.pow(t.top-n.top,2)+Math.pow(t.left-n.left,2))*i.animation}var Ht=[],nn={initializeByDefault:!0},se={mount:function(t){for(var n in nn)nn.hasOwnProperty(n)&&!(n in t)&&(t[n]=nn[n]);Ht.forEach(function(i){if(i.pluginName===t.pluginName)throw"Sortable: Cannot mount plugin ".concat(t.pluginName," more than once")}),Ht.push(t)},pluginEvent:function(t,n,i){var o=this;this.eventCanceled=!1,i.cancel=function(){o.eventCanceled=!0};var r=t+"Global";Ht.forEach(function(a){n[a.pluginName]&&(n[a.pluginName][r]&&n[a.pluginName][r](dt({sortable:n},i)),n.options[a.pluginName]&&n[a.pluginName][t]&&n[a.pluginName][t](dt({sortable:n},i)))})},initializePlugins:function(t,n,i,o){Ht.forEach(function(s){var l=s.pluginName;if(!(!t.options[l]&&!s.initializeByDefault)){var u=new s(t,n,t.options);u.sortable=t,u.options=t.options,t[l]=u,bt(i,u.defaults)}});for(var r in t.options)if(t.options.hasOwnProperty(r)){var a=this.modifyOption(t,r,t.options[r]);typeof a<"u"&&(t.options[r]=a)}},getEventProperties:function(t,n){var i={};return Ht.forEach(function(o){typeof o.eventProperties=="function"&&bt(i,o.eventProperties.call(n[o.pluginName],t))}),i},modifyOption:function(t,n,i){var o;return Ht.forEach(function(r){t[r.pluginName]&&r.optionListeners&&typeof r.optionListeners[n]=="function"&&(o=r.optionListeners[n].call(t[r.pluginName],i))}),o}};function ur(e){var t=e.sortable,n=e.rootEl,i=e.name,o=e.targetEl,r=e.cloneEl,a=e.toEl,s=e.fromEl,l=e.oldIndex,u=e.newIndex,p=e.oldDraggableIndex,d=e.newDraggableIndex,y=e.originalEvent,b=e.putSortable,g=e.extraEventProperties;if(t=t||n&&n[K],!!t){var w,P=t.options,W="on"+i.charAt(0).toUpperCase()+i.substr(1);window.CustomEvent&&!wt&&!ae?w=new CustomEvent(i,{bubbles:!0,cancelable:!0}):(w=document.createEvent("Event"),w.initEvent(i,!0,!0)),w.to=a||n,w.from=s||n,w.item=o||n,w.clone=r,w.oldIndex=l,w.newIndex=u,w.oldDraggableIndex=p,w.newDraggableIndex=d,w.originalEvent=y,w.pullMode=b?b.lastPutMode:void 0;var B=dt(dt({},g),se.getEventProperties(i,t));for(var Q in B)w[Q]=B[Q];n&&n.dispatchEvent(w),P[W]&&P[W].call(t,w)}}var cr=["evt"],G=function(t,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=i.evt,r=er(i,cr);se.pluginEvent.bind(v)(t,n,dt({dragEl:c,parentEl:O,ghostEl:S,rootEl:D,nextEl:Lt,lastDownEl:ve,cloneEl:V,cloneHidden:$t,dragStarted:Yt,putSortable:k,activeSortable:v.active,originalEvent:o,oldIndex:Bt,oldDraggableIndex:Kt,newIndex:et,newDraggableIndex:Et,hideGhostForTarget:ci,unhideGhostForTarget:di,cloneNowHidden:function(){$t=!0},cloneNowShown:function(){$t=!1},dispatchSortableEvent:function(s){z({sortable:n,name:s,originalEvent:o})}},r))};function z(e){ur(dt({putSortable:k,cloneEl:V,targetEl:c,rootEl:D,oldIndex:Bt,oldDraggableIndex:Kt,newIndex:et,newDraggableIndex:Et},e))}var c,O,S,D,Lt,ve,V,$t,Bt,et,Kt,Et,de,k,Pt=!1,Te=!1,Ce=[],_t,at,on,rn,Pn,Mn,Yt,Ot,Qt,te=!1,he=!1,be,j,an=[],pn=!1,Ae=[],Je=typeof document<"u",pe=xn,In=ae||wt?"cssFloat":"float",dr=Je&&!Qn&&!xn&&"draggable"in document.createElement("div"),si=function(){if(Je){if(wt)return!1;var e=document.createElement("x");return e.style.cssText="pointer-events:auto",e.style.pointerEvents==="auto"}}(),li=function(t,n){var i=m(t),o=parseInt(i.width)-parseInt(i.paddingLeft)-parseInt(i.paddingRight)-parseInt(i.borderLeftWidth)-parseInt(i.borderRightWidth),r=Ut(t,0,n),a=Ut(t,1,n),s=r&&m(r),l=a&&m(a),u=s&&parseInt(s.marginLeft)+parseInt(s.marginRight)+I(r).width,p=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+I(a).width;if(i.display==="flex")return i.flexDirection==="column"||i.flexDirection==="column-reverse"?"vertical":"horizontal";if(i.display==="grid")return i.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal";if(r&&s.float&&s.float!=="none"){var d=s.float==="left"?"left":"right";return a&&(l.clear==="both"||l.clear===d)?"vertical":"horizontal"}return r&&(s.display==="block"||s.display==="flex"||s.display==="table"||s.display==="grid"||u>=o&&i[In]==="none"||a&&i[In]==="none"&&u+p>o)?"vertical":"horizontal"},hr=function(t,n,i){var o=i?t.left:t.top,r=i?t.right:t.bottom,a=i?t.width:t.height,s=i?n.left:n.top,l=i?n.right:n.bottom,u=i?n.width:n.height;return o===s||r===l||o+a/2===s+u/2},pr=function(t,n){var i;return Ce.some(function(o){var r=o[K].options.emptyInsertThreshold;if(!(!r||En(o))){var a=I(o),s=t>=a.left-r&&t<=a.right+r,l=n>=a.top-r&&n<=a.bottom+r;if(s&&l)return i=o}}),i},ui=function(t){function n(r,a){return function(s,l,u,p){var d=s.options.group.name&&l.options.group.name&&s.options.group.name===l.options.group.name;if(r==null&&(a||d))return!0;if(r==null||r===!1)return!1;if(a&&r==="clone")return r;if(typeof r=="function")return n(r(s,l,u,p),a)(s,l,u,p);var y=(a?s:l).options.group.name;return r===!0||typeof r=="string"&&r===y||r.join&&r.indexOf(y)>-1}}var i={},o=t.group;(!o||me(o)!="object")&&(o={name:o}),i.name=o.name,i.checkPull=n(o.pull,!0),i.checkPut=n(o.put),i.revertClone=o.revertClone,t.group=i},ci=function(){!si&&S&&m(S,"display","none")},di=function(){!si&&S&&m(S,"display","")};Je&&!Qn&&document.addEventListener("click",function(e){if(Te)return e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.stopImmediatePropagation&&e.stopImmediatePropagation(),Te=!1,!1},!0);var Dt=function(t){if(c){t=t.touches?t.touches[0]:t;var n=pr(t.clientX,t.clientY);if(n){var i={};for(var o in t)t.hasOwnProperty(o)&&(i[o]=t[o]);i.target=i.rootEl=n,i.preventDefault=void 0,i.stopPropagation=void 0,n[K]._onDragOver(i)}}},fr=function(t){c&&c.parentNode[K]._isOutsideThisEl(t.target)};function v(e,t){if(!(e&&e.nodeType&&e.nodeType===1))throw"Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(e));this.el=e,this.options=t=bt({},t),e[K]=this;var n={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return li(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(a,s){a.setData("Text",s.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:v.supportPointer!==!1&&"PointerEvent"in window&&(!Gt||xn),emptyInsertThreshold:5};se.initializePlugins(this,e,n);for(var i in n)!(i in t)&&(t[i]=n[i]);ui(t);for(var o in this)o.charAt(0)==="_"&&typeof this[o]=="function"&&(this[o]=this[o].bind(this));this.nativeDraggable=t.forceFallback?!1:dr,this.nativeDraggable&&(this.options.touchStartThreshold=1),t.supportPointer?T(e,"pointerdown",this._onTapStart):(T(e,"mousedown",this._onTapStart),T(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(T(e,"dragover",this),T(e,"dragenter",this)),Ce.push(this.el),t.store&&t.store.get&&this.sort(t.store.get(this)||[]),bt(this,ar())}v.prototype={constructor:v,_isOutsideThisEl:function(t){!this.el.contains(t)&&t!==this.el&&(Ot=null)},_getDirection:function(t,n){return typeof this.options.direction=="function"?this.options.direction.call(this,t,n,c):this.options.direction},_onTapStart:function(t){if(t.cancelable){var n=this,i=this.el,o=this.options,r=o.preventOnFilter,a=t.type,s=t.touches&&t.touches[0]||t.pointerType&&t.pointerType==="touch"&&t,l=(s||t).target,u=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||l,p=o.filter;if(xr(i),!c&&!(/mousedown|pointerdown/.test(a)&&t.button!==0||o.disabled)&&!u.isContentEditable&&!(!this.nativeDraggable&&Gt&&l&&l.tagName.toUpperCase()==="SELECT")&&(l=st(l,o.draggable,i,!1),!(l&&l.animated)&&ve!==l)){if(Bt=nt(l),Kt=nt(l,o.draggable),typeof p=="function"){if(p.call(this,t,l,this)){z({sortable:n,rootEl:u,name:"filter",targetEl:l,toEl:i,fromEl:i}),G("filter",n,{evt:t}),r&&t.preventDefault();return}}else if(p&&(p=p.split(",").some(function(d){if(d=st(u,d.trim(),i,!1),d)return z({sortable:n,rootEl:d,name:"filter",targetEl:l,fromEl:i,toEl:i}),G("filter",n,{evt:t}),!0}),p)){r&&t.preventDefault();return}o.handle&&!st(u,o.handle,i,!1)||this._prepareDragStart(t,s,l)}}},_prepareDragStart:function(t,n,i){var o=this,r=o.el,a=o.options,s=r.ownerDocument,l;if(i&&!c&&i.parentNode===r){var u=I(i);if(D=r,c=i,O=c.parentNode,Lt=c.nextSibling,ve=i,de=a.group,v.dragged=c,_t={target:c,clientX:(n||t).clientX,clientY:(n||t).clientY},Pn=_t.clientX-u.left,Mn=_t.clientY-u.top,this._lastX=(n||t).clientX,this._lastY=(n||t).clientY,c.style["will-change"]="all",l=function(){if(G("delayEnded",o,{evt:t}),v.eventCanceled){o._onDrop();return}o._disableDelayedDragEvents(),!Vn&&o.nativeDraggable&&(c.draggable=!0),o._triggerDragStart(t,n),z({sortable:o,name:"choose",originalEvent:t}),tt(c,a.chosenClass,!0)},a.ignore.split(",").forEach(function(p){ni(c,p.trim(),sn)}),T(s,"dragover",Dt),T(s,"mousemove",Dt),T(s,"touchmove",Dt),a.supportPointer?(T(s,"pointerup",o._onDrop),!this.nativeDraggable&&T(s,"pointercancel",o._onDrop)):(T(s,"mouseup",o._onDrop),T(s,"touchend",o._onDrop),T(s,"touchcancel",o._onDrop)),Vn&&this.nativeDraggable&&(this.options.touchStartThreshold=4,c.draggable=!0),G("delayStart",this,{evt:t}),a.delay&&(!a.delayOnTouchOnly||n)&&(!this.nativeDraggable||!(ae||wt))){if(v.eventCanceled){this._onDrop();return}a.supportPointer?(T(s,"pointerup",o._disableDelayedDrag),T(s,"pointercancel",o._disableDelayedDrag)):(T(s,"mouseup",o._disableDelayedDrag),T(s,"touchend",o._disableDelayedDrag),T(s,"touchcancel",o._disableDelayedDrag)),T(s,"mousemove",o._delayedDragTouchMoveHandler),T(s,"touchmove",o._delayedDragTouchMoveHandler),a.supportPointer&&T(s,"pointermove",o._delayedDragTouchMoveHandler),o._dragStartTimer=setTimeout(l,a.delay)}else l()}},_delayedDragTouchMoveHandler:function(t){var n=t.touches?t.touches[0]:t;Math.max(Math.abs(n.clientX-this._lastX),Math.abs(n.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){c&&sn(c),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._disableDelayedDrag),$(t,"touchend",this._disableDelayedDrag),$(t,"touchcancel",this._disableDelayedDrag),$(t,"pointerup",this._disableDelayedDrag),$(t,"pointercancel",this._disableDelayedDrag),$(t,"mousemove",this._delayedDragTouchMoveHandler),$(t,"touchmove",this._delayedDragTouchMoveHandler),$(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,n){n=n||t.pointerType=="touch"&&t,!this.nativeDraggable||n?this.options.supportPointer?T(document,"pointermove",this._onTouchMove):n?T(document,"touchmove",this._onTouchMove):T(document,"mousemove",this._onTouchMove):(T(c,"dragend",this),T(D,"dragstart",this._onDragStart));try{document.selection?we(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch{}},_dragStarted:function(t,n){if(Pt=!1,D&&c){G("dragStarted",this,{evt:n}),this.nativeDraggable&&T(document,"dragover",fr);var i=this.options;!t&&tt(c,i.dragClass,!1),tt(c,i.ghostClass,!0),v.active=this,t&&this._appendGhost(),z({sortable:this,name:"start",originalEvent:n})}else this._nulling()},_emulateDragOver:function(){if(at){this._lastX=at.clientX,this._lastY=at.clientY,ci();for(var t=document.elementFromPoint(at.clientX,at.clientY),n=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(at.clientX,at.clientY),t!==n);)n=t;if(c.parentNode[K]._isOutsideThisEl(t),n)do{if(n[K]){var i=void 0;if(i=n[K]._onDragOver({clientX:at.clientX,clientY:at.clientY,target:t,rootEl:n}),i&&!this.options.dragoverBubble)break}t=n}while(n=ei(n));di()}},_onTouchMove:function(t){if(_t){var n=this.options,i=n.fallbackTolerance,o=n.fallbackOffset,r=t.touches?t.touches[0]:t,a=S&&Nt(S,!0),s=S&&a&&a.a,l=S&&a&&a.d,u=pe&&j&&On(j),p=(r.clientX-_t.clientX+o.x)/(s||1)+(u?u[0]-an[0]:0)/(s||1),d=(r.clientY-_t.clientY+o.y)/(l||1)+(u?u[1]-an[1]:0)/(l||1);if(!v.active&&!Pt){if(i&&Math.max(Math.abs(r.clientX-this._lastX),Math.abs(r.clientY-this._lastY))<i)return;this._onDragStart(t,!0)}if(S){a?(a.e+=p-(on||0),a.f+=d-(rn||0)):a={a:1,b:0,c:0,d:1,e:p,f:d};var y="matrix(".concat(a.a,",").concat(a.b,",").concat(a.c,",").concat(a.d,",").concat(a.e,",").concat(a.f,")");m(S,"webkitTransform",y),m(S,"mozTransform",y),m(S,"msTransform",y),m(S,"transform",y),on=p,rn=d,at=r}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!S){var t=this.options.fallbackOnBody?document.body:D,n=I(c,!0,pe,!0,t),i=this.options;if(pe){for(j=t;m(j,"position")==="static"&&m(j,"transform")==="none"&&j!==document;)j=j.parentNode;j!==document.body&&j!==document.documentElement?(j===document&&(j=ct()),n.top+=j.scrollTop,n.left+=j.scrollLeft):j=ct(),an=On(j)}S=c.cloneNode(!0),tt(S,i.ghostClass,!1),tt(S,i.fallbackClass,!0),tt(S,i.dragClass,!0),m(S,"transition",""),m(S,"transform",""),m(S,"box-sizing","border-box"),m(S,"margin",0),m(S,"top",n.top),m(S,"left",n.left),m(S,"width",n.width),m(S,"height",n.height),m(S,"opacity","0.8"),m(S,"position",pe?"absolute":"fixed"),m(S,"zIndex","100000"),m(S,"pointerEvents","none"),v.ghost=S,t.appendChild(S),m(S,"transform-origin",Pn/parseInt(S.style.width)*100+"% "+Mn/parseInt(S.style.height)*100+"%")}},_onDragStart:function(t,n){var i=this,o=t.dataTransfer,r=i.options;if(G("dragStart",this,{evt:t}),v.eventCanceled){this._onDrop();return}G("setupClone",this),v.eventCanceled||(V=ri(c),V.removeAttribute("id"),V.draggable=!1,V.style["will-change"]="",this._hideClone(),tt(V,this.options.chosenClass,!1),v.clone=V),i.cloneId=we(function(){G("clone",i),!v.eventCanceled&&(i.options.removeCloneOnHide||D.insertBefore(V,c),i._hideClone(),z({sortable:i,name:"clone"}))}),!n&&tt(c,r.dragClass,!0),n?(Te=!0,i._loopId=setInterval(i._emulateDragOver,50)):($(document,"mouseup",i._onDrop),$(document,"touchend",i._onDrop),$(document,"touchcancel",i._onDrop),o&&(o.effectAllowed="move",r.setData&&r.setData.call(i,o,c)),T(document,"drop",i),m(c,"transform","translateZ(0)")),Pt=!0,i._dragStartId=we(i._dragStarted.bind(i,n,t)),T(document,"selectstart",i),Yt=!0,window.getSelection().removeAllRanges(),Gt&&m(document.body,"user-select","none")},_onDragOver:function(t){var n=this.el,i=t.target,o,r,a,s=this.options,l=s.group,u=v.active,p=de===l,d=s.sort,y=k||u,b,g=this,w=!1;if(pn)return;function P(jt,qi){G(jt,g,dt({evt:t,isOwner:p,axis:b?"vertical":"horizontal",revert:a,dragRect:o,targetRect:r,canSort:d,fromSortable:y,target:i,completed:B,onMove:function(_n,Zi){return fe(D,n,c,o,_n,I(_n),t,Zi)},changed:Q},qi))}function W(){P("dragOverAnimationCapture"),g.captureAnimationState(),g!==y&&y.captureAnimationState()}function B(jt){return P("dragOverCompleted",{insertion:jt}),jt&&(p?u._hideClone():u._showClone(g),g!==y&&(tt(c,k?k.options.ghostClass:u.options.ghostClass,!1),tt(c,s.ghostClass,!0)),k!==g&&g!==v.active?k=g:g===v.active&&k&&(k=null),y===g&&(g._ignoreWhileAnimating=i),g.animateAll(function(){P("dragOverAnimationComplete"),g._ignoreWhileAnimating=null}),g!==y&&(y.animateAll(),y._ignoreWhileAnimating=null)),(i===c&&!c.animated||i===n&&!i.animated)&&(Ot=null),!s.dragoverBubble&&!t.rootEl&&i!==document&&(c.parentNode[K]._isOutsideThisEl(t.target),!jt&&Dt(t)),!s.dragoverBubble&&t.stopPropagation&&t.stopPropagation(),w=!0}function Q(){et=nt(c),Et=nt(c,s.draggable),z({sortable:g,name:"change",toEl:n,newIndex:et,newDraggableIndex:Et,originalEvent:t})}if(t.preventDefault!==void 0&&t.cancelable&&t.preventDefault(),i=st(i,s.draggable,n,!0),P("dragOver"),v.eventCanceled)return w;if(c.contains(t.target)||i.animated&&i.animatingX&&i.animatingY||g._ignoreWhileAnimating===i)return B(!1);if(Te=!1,u&&!s.disabled&&(p?d||(a=O!==D):k===this||(this.lastPutMode=de.checkPull(this,u,c,t))&&l.checkPut(this,u,c,t))){if(b=this._getDirection(t,i)==="vertical",o=I(c),P("dragOverValid"),v.eventCanceled)return w;if(a)return O=D,W(),this._hideClone(),P("revert"),v.eventCanceled||(Lt?D.insertBefore(c,Lt):D.appendChild(c)),B(!0);var Y=En(n,s.draggable);if(!Y||vr(t,b,this)&&!Y.animated){if(Y===c)return B(!1);if(Y&&n===t.target&&(i=Y),i&&(r=I(i)),fe(D,n,c,o,i,r,t,!!i)!==!1)return W(),Y&&Y.nextSibling?n.insertBefore(c,Y.nextSibling):n.appendChild(c),O=n,Q(),B(!0)}else if(Y&&mr(t,b,this)){var ot=Ut(n,0,s,!0);if(ot===c)return B(!1);if(i=ot,r=I(i),fe(D,n,c,o,i,r,t,!1)!==!1)return W(),n.insertBefore(c,ot),O=n,Q(),B(!0)}else if(i.parentNode===n){r=I(i);var _=0,Z,rt=c.parentNode!==n,X=!hr(c.animated&&c.toRect||o,i.animated&&i.toRect||r,b),qt=b?"top":"left",St=Hn(i,"top","top")||Hn(c,"top","top"),Zt=St?St.scrollTop:void 0;Ot!==i&&(Z=r[qt],te=!1,he=!X&&s.invertSwap||rt),_=br(t,i,r,b,X?1:s.swapThreshold,s.invertedSwapThreshold==null?s.swapThreshold:s.invertedSwapThreshold,he,Ot===i);var ht;if(_!==0){var At=nt(c);do At-=_,ht=O.children[At];while(ht&&(m(ht,"display")==="none"||ht===S))}if(_===0||ht===i)return B(!1);Ot=i,Qt=_;var Xt=i.nextElementSibling,xt=!1;xt=_===1;var le=fe(D,n,c,o,i,r,t,xt);if(le!==!1)return(le===1||le===-1)&&(xt=le===1),pn=!0,setTimeout(yr,30),W(),xt&&!Xt?n.appendChild(c):i.parentNode.insertBefore(c,xt?Xt:i),St&&oi(St,0,Zt-St.scrollTop),O=c.parentNode,Z!==void 0&&!he&&(be=Math.abs(Z-I(i)[qt])),Q(),B(!0)}if(n.contains(c))return B(!1)}return!1},_ignoreWhileAnimating:null,_offMoveEvents:function(){$(document,"mousemove",this._onTouchMove),$(document,"touchmove",this._onTouchMove),$(document,"pointermove",this._onTouchMove),$(document,"dragover",Dt),$(document,"mousemove",Dt),$(document,"touchmove",Dt)},_offUpEvents:function(){var t=this.el.ownerDocument;$(t,"mouseup",this._onDrop),$(t,"touchend",this._onDrop),$(t,"pointerup",this._onDrop),$(t,"pointercancel",this._onDrop),$(t,"touchcancel",this._onDrop),$(document,"selectstart",this)},_onDrop:function(t){var n=this.el,i=this.options;if(et=nt(c),Et=nt(c,i.draggable),G("drop",this,{evt:t}),O=c&&c.parentNode,et=nt(c),Et=nt(c,i.draggable),v.eventCanceled){this._nulling();return}Pt=!1,he=!1,te=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),fn(this.cloneId),fn(this._dragStartId),this.nativeDraggable&&($(document,"drop",this),$(n,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),Gt&&m(document.body,"user-select",""),m(c,"transform",""),t&&(Yt&&(t.cancelable&&t.preventDefault(),!i.dropBubble&&t.stopPropagation()),S&&S.parentNode&&S.parentNode.removeChild(S),(D===O||k&&k.lastPutMode!=="clone")&&V&&V.parentNode&&V.parentNode.removeChild(V),c&&(this.nativeDraggable&&$(c,"dragend",this),sn(c),c.style["will-change"]="",Yt&&!Pt&&tt(c,k?k.options.ghostClass:this.options.ghostClass,!1),tt(c,this.options.chosenClass,!1),z({sortable:this,name:"unchoose",toEl:O,newIndex:null,newDraggableIndex:null,originalEvent:t}),D!==O?(et>=0&&(z({rootEl:O,name:"add",toEl:O,fromEl:D,originalEvent:t}),z({sortable:this,name:"remove",toEl:O,originalEvent:t}),z({rootEl:O,name:"sort",toEl:O,fromEl:D,originalEvent:t}),z({sortable:this,name:"sort",toEl:O,originalEvent:t})),k&&k.save()):et!==Bt&&et>=0&&(z({sortable:this,name:"update",toEl:O,originalEvent:t}),z({sortable:this,name:"sort",toEl:O,originalEvent:t})),v.active&&((et==null||et===-1)&&(et=Bt,Et=Kt),z({sortable:this,name:"end",toEl:O,originalEvent:t}),this.save()))),this._nulling()},_nulling:function(){G("nulling",this),D=c=O=S=Lt=V=ve=$t=_t=at=Yt=et=Et=Bt=Kt=Ot=Qt=k=de=v.dragged=v.ghost=v.clone=v.active=null,Ae.forEach(function(t){t.checked=!0}),Ae.length=on=rn=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":c&&(this._onDragOver(t),gr(t));break;case"selectstart":t.preventDefault();break}},toArray:function(){for(var t=[],n,i=this.el.children,o=0,r=i.length,a=this.options;o<r;o++)n=i[o],st(n,a.draggable,this.el,!1)&&t.push(n.getAttribute(a.dataIdAttr)||Sr(n));return t},sort:function(t,n){var i={},o=this.el;this.toArray().forEach(function(r,a){var s=o.children[a];st(s,this.options.draggable,o,!1)&&(i[r]=s)},this),n&&this.captureAnimationState(),t.forEach(function(r){i[r]&&(o.removeChild(i[r]),o.appendChild(i[r]))}),n&&this.animateAll()},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,n){return st(t,n||this.options.draggable,this.el,!1)},option:function(t,n){var i=this.options;if(n===void 0)return i[t];var o=se.modifyOption(this,t,n);typeof o<"u"?i[t]=o:i[t]=n,t==="group"&&ui(i)},destroy:function(){G("destroy",this);var t=this.el;t[K]=null,$(t,"mousedown",this._onTapStart),$(t,"touchstart",this._onTapStart),$(t,"pointerdown",this._onTapStart),this.nativeDraggable&&($(t,"dragover",this),$(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(n){n.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),Ce.splice(Ce.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!$t){if(G("hideClone",this),v.eventCanceled)return;m(V,"display","none"),this.options.removeCloneOnHide&&V.parentNode&&V.parentNode.removeChild(V),$t=!0}},_showClone:function(t){if(t.lastPutMode!=="clone"){this._hideClone();return}if($t){if(G("showClone",this),v.eventCanceled)return;c.parentNode==D&&!this.options.group.revertClone?D.insertBefore(V,c):Lt?D.insertBefore(V,Lt):D.appendChild(V),this.options.group.revertClone&&this.animate(c,V),m(V,"display",""),$t=!1}}};function gr(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.cancelable&&e.preventDefault()}function fe(e,t,n,i,o,r,a,s){var l,u=e[K],p=u.options.onMove,d;return window.CustomEvent&&!wt&&!ae?l=new CustomEvent("move",{bubbles:!0,cancelable:!0}):(l=document.createEvent("Event"),l.initEvent("move",!0,!0)),l.to=t,l.from=e,l.dragged=n,l.draggedRect=i,l.related=o||t,l.relatedRect=r||I(t),l.willInsertAfter=s,l.originalEvent=a,e.dispatchEvent(l),p&&(d=p.call(u,l,a)),d}function sn(e){e.draggable=!1}function yr(){pn=!1}function mr(e,t,n){var i=I(Ut(n.el,0,n.options,!0)),o=ai(n.el,n.options,S),r=10;return t?e.clientX<o.left-r||e.clientY<i.top&&e.clientX<i.right:e.clientY<o.top-r||e.clientY<i.bottom&&e.clientX<i.left}function vr(e,t,n){var i=I(En(n.el,n.options.draggable)),o=ai(n.el,n.options,S),r=10;return t?e.clientX>o.right+r||e.clientY>i.bottom&&e.clientX>i.left:e.clientY>o.bottom+r||e.clientX>i.right&&e.clientY>i.top}function br(e,t,n,i,o,r,a,s){var l=i?e.clientY:e.clientX,u=i?n.height:n.width,p=i?n.top:n.left,d=i?n.bottom:n.right,y=!1;if(!a){if(s&&be<u*o){if(!te&&(Qt===1?l>p+u*r/2:l<d-u*r/2)&&(te=!0),te)y=!0;else if(Qt===1?l<p+be:l>d-be)return-Qt}else if(l>p+u*(1-o)/2&&l<d-u*(1-o)/2)return wr(t)}return y=y||a,y&&(l<p+u*r/2||l>d-u*r/2)?l>p+u/2?1:-1:0}function wr(e){return nt(c)<nt(e)?1:-1}function Sr(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,i=0;n--;)i+=t.charCodeAt(n);return i.toString(36)}function xr(e){Ae.length=0;for(var t=e.getElementsByTagName("input"),n=t.length;n--;){var i=t[n];i.checked&&Ae.push(i)}}function we(e){return setTimeout(e,0)}function fn(e){return clearTimeout(e)}Je&&T(document,"touchmove",function(e){(v.active||Pt)&&e.cancelable&&e.preventDefault()});v.utils={on:T,off:$,css:m,find:ni,is:function(t,n){return!!st(t,n,t,!1)},extend:or,throttle:ii,closest:st,toggleClass:tt,clone:ri,index:nt,nextTick:we,cancelNextTick:fn,detectDirection:li,getChild:Ut,expando:K};v.get=function(e){return e[K]};v.mount=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t[0].constructor===Array&&(t=t[0]),t.forEach(function(i){if(!i.prototype||!i.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(i));i.utils&&(v.utils=dt(dt({},v.utils),i.utils)),se.mount(i)})};v.create=function(e,t){return new v(e,t)};v.version=nr;var M=[],zt,gn,yn=!1,ln,un,_e,Wt;function Er(){function e(){this.defaults={scroll:!0,forceAutoScrollFallback:!1,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0};for(var t in this)t.charAt(0)==="_"&&typeof this[t]=="function"&&(this[t]=this[t].bind(this))}return e.prototype={dragStarted:function(n){var i=n.originalEvent;this.sortable.nativeDraggable?T(document,"dragover",this._handleAutoScroll):this.options.supportPointer?T(document,"pointermove",this._handleFallbackAutoScroll):i.touches?T(document,"touchmove",this._handleFallbackAutoScroll):T(document,"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(n){var i=n.originalEvent;!this.options.dragOverBubble&&!i.rootEl&&this._handleAutoScroll(i)},drop:function(){this.sortable.nativeDraggable?$(document,"dragover",this._handleAutoScroll):($(document,"pointermove",this._handleFallbackAutoScroll),$(document,"touchmove",this._handleFallbackAutoScroll),$(document,"mousemove",this._handleFallbackAutoScroll)),Bn(),Se(),rr()},nulling:function(){_e=gn=zt=yn=Wt=ln=un=null,M.length=0},_handleFallbackAutoScroll:function(n){this._handleAutoScroll(n,!0)},_handleAutoScroll:function(n,i){var o=this,r=(n.touches?n.touches[0]:n).clientX,a=(n.touches?n.touches[0]:n).clientY,s=document.elementFromPoint(r,a);if(_e=n,i||this.options.forceAutoScrollFallback||ae||wt||Gt){cn(n,this.options,s,i);var l=Ct(s,!0);yn&&(!Wt||r!==ln||a!==un)&&(Wt&&Bn(),Wt=setInterval(function(){var u=Ct(document.elementFromPoint(r,a),!0);u!==l&&(l=u,Se()),cn(n,o.options,u,i)},10),ln=r,un=a)}else{if(!this.options.bubbleScroll||Ct(s,!0)===ct()){Se();return}cn(n,this.options,Ct(s,!1),!1)}}},bt(e,{pluginName:"scroll",initializeByDefault:!0})}function Se(){M.forEach(function(e){clearInterval(e.pid)}),M=[]}function Bn(){clearInterval(Wt)}var cn=ii(function(e,t,n,i){if(t.scroll){var o=(e.touches?e.touches[0]:e).clientX,r=(e.touches?e.touches[0]:e).clientY,a=t.scrollSensitivity,s=t.scrollSpeed,l=ct(),u=!1,p;gn!==n&&(gn=n,Se(),zt=t.scroll,p=t.scrollFn,zt===!0&&(zt=Ct(n,!0)));var d=0,y=zt;do{var b=y,g=I(b),w=g.top,P=g.bottom,W=g.left,B=g.right,Q=g.width,Y=g.height,ot=void 0,_=void 0,Z=b.scrollWidth,rt=b.scrollHeight,X=m(b),qt=b.scrollLeft,St=b.scrollTop;b===l?(ot=Q<Z&&(X.overflowX==="auto"||X.overflowX==="scroll"||X.overflowX==="visible"),_=Y<rt&&(X.overflowY==="auto"||X.overflowY==="scroll"||X.overflowY==="visible")):(ot=Q<Z&&(X.overflowX==="auto"||X.overflowX==="scroll"),_=Y<rt&&(X.overflowY==="auto"||X.overflowY==="scroll"));var Zt=ot&&(Math.abs(B-o)<=a&&qt+Q<Z)-(Math.abs(W-o)<=a&&!!qt),ht=_&&(Math.abs(P-r)<=a&&St+Y<rt)-(Math.abs(w-r)<=a&&!!St);if(!M[d])for(var At=0;At<=d;At++)M[At]||(M[At]={});(M[d].vx!=Zt||M[d].vy!=ht||M[d].el!==b)&&(M[d].el=b,M[d].vx=Zt,M[d].vy=ht,clearInterval(M[d].pid),(Zt!=0||ht!=0)&&(u=!0,M[d].pid=setInterval((function(){i&&this.layer===0&&v.active._onTouchMove(_e);var Xt=M[this.layer].vy?M[this.layer].vy*s:0,xt=M[this.layer].vx?M[this.layer].vx*s:0;typeof p=="function"&&p.call(v.dragged.parentNode[K],xt,Xt,e,_e,M[this.layer].el)!=="continue"||oi(M[this.layer].el,xt,Xt)}).bind({layer:d}),24))),d++}while(t.bubbleScroll&&y!==l&&(y=Ct(y,!1)));yn=u}},30),hi=function(t){var n=t.originalEvent,i=t.putSortable,o=t.dragEl,r=t.activeSortable,a=t.dispatchSortableEvent,s=t.hideGhostForTarget,l=t.unhideGhostForTarget;if(n){var u=i||r;s();var p=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:n,d=document.elementFromPoint(p.clientX,p.clientY);l(),u&&!u.el.contains(d)&&(a("spill"),this.onSpill({dragEl:o,putSortable:i}))}};function $n(){}$n.prototype={startIndex:null,dragStart:function(t){var n=t.oldDraggableIndex;this.startIndex=n},onSpill:function(t){var n=t.dragEl,i=t.putSortable;this.sortable.captureAnimationState(),i&&i.captureAnimationState();var o=Ut(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(n,o):this.sortable.el.appendChild(n),this.sortable.animateAll(),i&&i.animateAll()},drop:hi};bt($n,{pluginName:"revertOnSpill"});function Tn(){}Tn.prototype={onSpill:function(t){var n=t.dragEl,i=t.putSortable,o=i||this.sortable;o.captureAnimationState(),n.parentNode&&n.parentNode.removeChild(n),o.animateAll()},drop:hi};bt(Tn,{pluginName:"removeOnSpill"});v.mount(new Er);v.mount(Tn,$n);const $r=e=>{const t=e.item;let n=Array.prototype.slice.call(t.parentNode.childNodes);return n=n.filter(i=>i.nodeType!=Node.ELEMENT_NODE||!i.classList.contains("sortable-fallback")),n},Tr=(e,t,n,i,o,r)=>{const s=e.item.parentNode;for(const w of n)s.appendChild(w);if(e.oldIndex==e.newIndex)return;const l=i.getArray(),u=e.item.querySelector("eox-layercontrol-layer").layer.get(o),p=l.find(w=>w.get(o)===u),d=r.dataset.layer,y=l.find(w=>w.get(o)==d);let b,g;for(b=0;b<l.length;b++)if(l[b]==p){i.removeAt(b);break}for(g=0;g<l.length;g++)if(l[g]===y){b>g?i.insertAt(g,p):i.insertAt(g+1,p);break}t.requestUpdate()};function Cr(e,t,n,i){let o=[],r=null;e._sortable=v.create(e,{handle:".drag-handle",filter:".drag-handle.disabled",swapThreshold:.5,animation:150,easing:"cubic-bezier(1, 0, 0, 1)",onStart:a=>{console.log(a),o=$r(a)},onMove:a=>{r=a.related},onEnd:a=>Tr(a,i,o,t,n,r)})}function Ar(e,t,n,i){const o=e.getArray();let r=!1;o.forEach(a=>{const s=a.ol_uid;a.get(t)||(a.set(t,s),r=!0),a.get(n)||(a.set(n,`layer ${s}`),r=!0),r&&i.requestUpdate()})}function Cn(e,t,n){let i=[];const o=(r,a,s)=>{i=[...i,...r.filter(u=>u.get(a)===s)];const l=r.filter(u=>u.getLayers);return l.length>0&&l.forEach(u=>o(u.getLayers().getArray(),a,s)),i};return o(e,t,n),i}function _r(e,t,n){if(!e||!t)return!1;if(!pi(e,n))return!0;const i=e.get("minZoom"),o=e.get("maxZoom"),r=t.getView().getZoom();return r>i&&r<o}function pi(e,t){const n=e.get("minZoom"),i=e.get("maxZoom");return!!(t&&(n!==-1/0||i!==1/0))}function Nn(e,t){var o,r,a;return!e||!t?void 0:e.getLayers?"group":((a=(o=t.getInteractions().getArray().filter(s=>s.freehand_!==void 0).map(s=>s.source_))==null?void 0:o.ol_uid)==null?void 0:a.includes(e.getSource?(r=e.getSource())==null?void 0:r.ol_uid:void 0))?"draw":e.declutter_!==void 0||e.get("type")==="Vector"?"vector":"raster"}const Dr=(e,t,n)=>{let i=t;return n.layer.getSource().getTileUrlFunction()&&(i||(i=n.layer.getSource().getTileUrlFunction()),n.layer.getSource().setTileUrlFunction((...o)=>Ko(i(...o),e)),n.layer.getSource().setKey(new Date)),i};function Lr(e,t,n){const i="updateStyleVariables"in t,o="setStyle"in t,r=i?t.style_:n.style;let a=r==null?void 0:r.variables;if(a){const s=An(e);if(r.variables={...a,...s},i)t.updateStyleVariables(s);else if(o){const l=Vr(r);t.setStyle(l)}}}const An=e=>{const t={};for(const n in e)if(typeof e[n]=="object"&&e[n]!==null){const i=An(e[n]);for(const o in i)t[o]=i==null?void 0:i[o]}else t[n]=e==null?void 0:e[n];return t};function Vr(e){let t=e;if("variables"in e){let n=JSON.stringify(e);const{variables:i}=e;for(const o in i)typeof i[o]=="number"?n=n.replaceAll(`["var","${o}"]`,i[o]):n=n.replaceAll(`["var","${o}"]`,`"${i[o]}"`);t=JSON.parse(n)}return t}const Rr=(e,t)=>{if(!e)return;const n=An(t);let i,o;return Array.isArray(e)?o=structuredClone(e):o=[structuredClone(e)],i=o.filter(r=>{if(!("boundTo"in r))return!0;const a=r.boundTo.key,s=r.boundTo.value;return!(a in n)||n[a]==s}),i.length||(i=o),i.map(r=>{var a;return delete r.boundTo,!("domainProperties"in r)||"domain"in r?r:(a=Object.keys(r))==null?void 0:a.reduce((s,l)=>(l==="domainProperties"?s.domain=r[l].map(u=>n[u]):s[l]=r[l],s),{})})};function fi(e,t){var i;let n={};for(const o in e){const r=e[o].type;if(r&&r!=="object")n[o]=r==="number"?Number(t[o]):t[o];else if(typeof e[o]=="object"&&((i=e[o])!=null&&i.properties)){const a=fi(e[o].properties,t);Object.keys(a).length>0&&(n[o]=a)}}return n}function Hr(e,t){var r,a,s,l,u;if(!t)return null;let n={},i="updateStyleVariables"in e?(r=e.style_)==null?void 0:r.variables:(a=t.style)==null?void 0:a.variables;if((t.type==="style"||t.style)&&i)n=i;else if((l=(s=e.getSource())==null?void 0:s.getTileUrlFunction)!=null&&l.call(s)){const p=new URL(e.getSource().getTileUrlFunction()([0,0,0]));n=Object.fromEntries(p.searchParams.entries())}else return null;const o=fi(((u=t.schema)==null?void 0:u.properties)||t.schema,n);return Object.keys(o).length?o:null}const gi=(e,t)=>e==null?void 0:e.filter(n=>["remove","sort"].filter(i=>t!=null&&t.get("layerControlDisable")?i!=="sort":!0).includes(n)),yi=(e,t)=>e==null?void 0:e.filter(n=>{let i=!0;return["remove","sort"].includes(n)&&(i=!1),n==="info"&&(i=t.get("description")),n==="config"&&(i=t.get("layerConfig")),n==="datetime"&&(i=t.get("layerDatetime")),n==="legend"&&(i=t.get("layerLegend")),i}),Or=(e,t,n)=>h`
  <button
    slot="${e}-icon"
    class="no-margin transparent square primary-text small"
  >
    ${n?e:h`<i class="small primary-text">${t}</i>`}
  </button>
`,mi=(e,t)=>h`
  <button
    class="remove-icon no-margin transparent square small action"
    @click=${()=>{const{layer:n}=e;n==null||n.set("layerControlOptional",!0),n==null||n.setVisible(!1),e.dispatchEvent(new CustomEvent("changed",{detail:n,bubbles:!0}))}}
  >
    ${e.unstyled?"x":h`<i class="small red-text">${t}</i>`}
  </button>
`,vi=(e,t,n)=>h`
  <button
    class="sort-icon no-margin transparent square primary-text drag-handle small action ${e.layer.get("layerControlDisable")?"disabled":""}"
    style="cursor: ns-resize;"
  >
    ${n?"═":h`<i class="small primary-text">${t}</i>`}
  </button>
`;function ee(){return{dots:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>menu-down</title>
      <path d="M7,10L12,15L17,10H7Z" />
    </svg>`,info:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>information-outline</title>
      <path
        d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z"
      />
    </svg>`,opacity:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>circle-opacity</title>
      <path
        d="M18 10V8H20V10H18M18 12V10H16V12H18M18 8V6H16V8H18M16 2.84V4H18C17.37 3.54 16.71 3.15 16 2.84M18 4V6H20C19.42 5.25 18.75 4.58 18 4M20 6V8H21.16C20.85 7.29 20.46 6.63 20 6M22 12C22 11.32 21.93 10.65 21.8 10H20V12H22M16 6V4H14V6H16M16 16H18V14H16V16M18 18H20L20 18V16H18V18M16 20H18L18 20V18H16V20M14 21.8C14.7 21.66 15.36 21.44 16 21.16V20H14V21.8M18 14H20V12H18V14M16 8H14V10H16V8M20 16H21.16C21.44 15.36 21.66 14.7 21.8 14H20V16M16 12H14V14H16V12M12 18V16H14V14H12V12H14V10H12V8H14V6H12V4H14V2.2C13.35 2.07 12.69 2 12 2C6.5 2 2 6.5 2 12S6.5 22 12 22V20H14V18H12M14 18H16V16H14V18Z"
      />
    </svg>`,config:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>tune</title>
      <path
        d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z"
      />
    </svg>`,datetime:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>calendar-clock-outline</title>
      <path
        d="M6 1V3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.89 21 5 21H11.1C12.36 22.24 14.09 23 16 23C19.87 23 23 19.87 23 16C23 14.09 22.24 12.36 21 11.1V5C21 3.9 20.11 3 19 3H18V1H16V3H8V1M5 5H19V7H5M5 9H19V9.67C18.09 9.24 17.07 9 16 9C12.13 9 9 12.13 9 16C9 17.07 9.24 18.09 9.67 19H5M16 11.15C18.68 11.15 20.85 13.32 20.85 16C20.85 18.68 18.68 20.85 16 20.85C13.32 20.85 11.15 18.68 11.15 16C11.15 13.32 13.32 11.15 16 11.15M15 13V16.69L18.19 18.53L18.94 17.23L16.5 15.82V13Z"
      />
    </svg>`,legend:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>map-legend</title>
      <path
        d="M9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3L20.34,3.03L15,5.1L9,3M8,5.45V17.15L5,18.31V6.46L8,5.45M10,5.47L14,6.87V18.53L10,17.13V5.47M19,5.7V17.54L16,18.55V6.86L19,5.7M7.46,6.3L5.57,6.97V9.12L7.46,8.45V6.3M7.46,9.05L5.57,9.72V11.87L7.46,11.2V9.05M7.46,11.8L5.57,12.47V14.62L7.46,13.95V11.8M7.46,14.55L5.57,15.22V17.37L7.46,16.7V14.55Z"
      />
    </svg>`,remove:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>delete-outline</title>
      <path
        d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
      />
    </svg>`,sort:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <title>drag-horizontal-variant</title>
      <path d="M21 11H3V9H21V11M21 13H3V15H21V13Z" />
    </svg>`}}const bi=e=>{var n;const t=["layerControlHide","layerControlOptional"];return(n=e==null?void 0:e.getArray())==null?void 0:n.filter(i=>t.every(o=>!i.get(o)))};function wi(e,t){t.dispatchEvent(new CustomEvent("datetime:updated",{detail:e.detail,bubbles:!0}))}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Si=zi(class extends Wi{constructor(e){if(super(e),e.type!==Rt.PROPERTY&&e.type!==Rt.ATTRIBUTE&&e.type!==Rt.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Gi(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===ue||t===yt)return t;const n=e.element,i=e.name;if(e.type===Rt.PROPERTY){if(t===n[i])return ue}else if(e.type===Rt.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(i))return ue}else if(e.type===Rt.ATTRIBUTE&&n.getAttribute(i)===t+"")return ue;return Ji(e),t}});var xi="Expected a function",kn=NaN,Pr="[object Symbol]",Mr=/^\s+|\s+$/g,Ir=/^[-+]0x[0-9a-f]+$/i,Br=/^0b[01]+$/i,Nr=/^0o[0-7]+$/i,kr=parseInt,Ur=typeof ce=="object"&&ce&&ce.Object===Object&&ce,Fr=typeof self=="object"&&self&&self.Object===Object&&self,qr=Ur||Fr||Function("return this")(),Zr=Object.prototype,Xr=Zr.toString,jr=Math.max,Yr=Math.min,dn=function(){return qr.Date.now()};function zr(e,t,n){var i,o,r,a,s,l,u=0,p=!1,d=!1,y=!0;if(typeof e!="function")throw new TypeError(xi);t=Un(t)||0,De(n)&&(p=!!n.leading,d="maxWait"in n,r=d?jr(Un(n.maxWait)||0,t):r,y="trailing"in n?!!n.trailing:y);function b(_){var Z=i,rt=o;return i=o=void 0,u=_,a=e.apply(rt,Z),a}function g(_){return u=_,s=setTimeout(W,t),p?b(_):a}function w(_){var Z=_-l,rt=_-u,X=t-Z;return d?Yr(X,r-rt):X}function P(_){var Z=_-l,rt=_-u;return l===void 0||Z>=t||Z<0||d&&rt>=r}function W(){var _=dn();if(P(_))return B(_);s=setTimeout(W,w(_))}function B(_){return s=void 0,y&&i?b(_):(i=o=void 0,a)}function Q(){s!==void 0&&clearTimeout(s),u=0,i=l=o=s=void 0}function Y(){return s===void 0?a:B(dn())}function ot(){var _=dn(),Z=P(_);if(i=arguments,o=this,l=_,Z){if(s===void 0)return g(l);if(d)return s=setTimeout(W,t),b(l)}return s===void 0&&(s=setTimeout(W,t)),a}return ot.cancel=Q,ot.flush=Y,ot}function Wr(e,t,n){var i=!0,o=!0;if(typeof e!="function")throw new TypeError(xi);return De(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),zr(e,t,{leading:i,maxWait:t,trailing:o})}function De(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function Gr(e){return!!e&&typeof e=="object"}function Jr(e){return typeof e=="symbol"||Gr(e)&&Xr.call(e)==Pr}function Un(e){if(typeof e=="number")return e;if(Jr(e))return kn;if(De(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=De(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Mr,"");var n=Br.test(e);return n||Nr.test(e)?kr(e.slice(2),n?2:8):Ir.test(e)?kn:+e}var Kr=Wr;const Fn=to(Kr);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ge=e=>e??yt;var it,Le,Ve;class Ei extends lt{constructor(){super();A(this,it,[]);A(this,Le,hn`
    .separator {
      margin: 0 0 24px 0;
    }
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      --cle-padding: 0;
    }
  `);A(this,Ve,"");this.unstyled=!1,this.noShadow=!1,this.layer=null}get layerLegend(){return x(this,it)?x(this,it).length>1?x(this,it):x(this,it)[0]:null}set layerLegend(n){var i;Array.isArray(n)?pt(this,it,n.map((o,r)=>{var a;return{id:(((a=this.layer)==null?void 0:a.get("id"))??"")+r,...o}})):pt(this,it,[{id:(((i=this.layer)==null?void 0:i.get("id"))??"")+0,...n}])}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){this.layerLegend&&new ResizeObserver(()=>{var n;pt(this,it,(n=x(this,it))==null?void 0:n.map(i=>(this.offsetWidth!==i.width&&(i.width=this.offsetWidth),{...i}))),this.requestUpdate()}).observe(this.renderRoot.querySelector(".legend-container"))}render(){return customElements.get("color-legend")||console.error("Please import `color-legend-element` in order to use layerLegend"),h`
      <style>
        ${x(this,Le)}
        ${!this.unstyled&&x(this,Ve)}
      </style>
      ${L(this.layerLegend,()=>h`
          <div class="legend-container">
            <!-- Render color-legend-->
            ${x(this,it).map((n,i,o)=>h`
                <color-legend
                  id="${n.id}"
                  width=${n.width??325}
                  scaleType="${ge(n.scaleType)}"
                  markType="${ge(n.markType)}"
                  titleText="${ge(n.title)}"
                  .range=${n.range}
                  .domain=${n.domain}
                  tickFormat="${ge(n.tickFormat)}"
                  .ticks=${n.ticks??5}
                  .tickValues=${n.tickValues}
                  .marginLeft=${8}
                  .marginRight=${8}
                >
                </color-legend>
                ${i!==o.length-1?h`<div class="separator"></div>`:yt}
              `)}
          </div>
        `)}
    `}}it=new WeakMap,Le=new WeakMap,Ve=new WeakMap,R(Ei,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerLegend:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-legend",Ei);var ft,kt,ie,oe,mn,Re,He;class $i extends lt{constructor(){super();A(this,oe);A(this,ft,{});A(this,kt,null);A(this,ie);A(this,Re,hn`
    color-legend {
      --cle-background: transparent;
      --cle-font-family: inherit;
      --cle-font-size: 12px;
      --cle-font-size-title: 12px;
      --cle-font-weight: 400;
      --cle-font-weight-title: 400;
      --cle-letter-spacing: inherit;
      --cle-letter-spacing-title: inherit;
      font-size: small;
    }
  `);A(this,He,hn`
    input[type="range"],
    eox-jsonform {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
    eox-layercontrol-layer-legend {
      display: block;
      margin-bottom: 1rem;
    }
  `);this.layer=null,this.unstyled=!1,this.noShadow=!1,this.layerConfig=null,this.throttleDataChange=Fn(H(this,oe,mn),1e3)}updated(n){if(n.has("layerConfig")){const i=this.layerConfig.type==="style"||this.layerConfig.style?100:1e3;this.throttleDataChange=Fn(H(this,oe,mn),i),this.requestUpdate()}}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){pt(this,kt,Hr(this.layer,this.layerConfig)),Object.keys(x(this,ft)).length!==0&&pt(this,kt,x(this,ft)),customElements.get("eox-jsonform")||console.error("Please import @eox/jsonform in order to use layerconfig");const n={disable_edit_json:!0,disable_collapse:!0,disable_properties:!0};return h`
      <style>
        ${x(this,Re)}
        ${!this.unstyled&&x(this,He)}
      </style>
      ${L(this.layerConfig,()=>h`
          ${L(this.layerConfig.legend,()=>h`
              <eox-layercontrol-layer-legend
                .noShadow=${!0}
                .unstyled=${this.unstyled}
                .layer=${this.layer}
                .layerLegend=${Rr(this.layerConfig.legend,x(this,ft))}
              ></eox-layercontrol-layer-legend>
            `)}
          <!-- Render a JSON form for layer configuration -->
          <eox-jsonform
            .schema=${this.layerConfig.schema}
            .value=${x(this,kt)}
            .options=${n}
            .noShadow=${!0}
            @change=${this.throttleDataChange}
          ></eox-jsonform>
        `)}
    `}}ft=new WeakMap,kt=new WeakMap,ie=new WeakMap,oe=new WeakSet,mn=function(n){pt(this,ft,n.detail),this.layerConfig.type==="style"||this.layerConfig.style?"setStyle"in this.layer||"updateStyleVariables"in this.layer?Lr(x(this,ft),this.layer,this.layerConfig):console.error(`Layer type ${this.layer.get("type")??""} does not support styles configuration`):pt(this,ie,Dr(x(this,ft),x(this,ie),this)),this.dispatchEvent(new CustomEvent("layerConfig:change",{bubbles:!0,detail:{jsonformValue:n.detail,layer:this.layer}})),this.requestUpdate()},Re=new WeakMap,He=new WeakMap,R($i,"properties",{layer:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},layerConfig:{attribute:!1}});customElements.define("eox-layercontrol-layerconfig",$i);var Oe,Ci,Pe,Me;class Ti extends lt{constructor(){super();A(this,Oe);A(this,Pe,"");A(this,Me,"");this.unstyled=!1,this.noShadow=!1,this.layerDatetime=null,this.layer=null}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){return customElements.get("eox-timecontrol")||console.error("Please import @eox/timecontrol in order to use layerDatetime"),h`
      <style>
        ${x(this,Pe)}
        ${!this.unstyled&&x(this,Me)}
      </style>
      ${L(this.layerDatetime,()=>h`
          <!-- Render a Timecontrol for layer date time -->
          <eox-timecontrol
            ?unstyled=${this.unstyled}
            .for=${void 0}
            .layer=${void 0}
            .navigation=${this.layerDatetime.navigation??!1}
            .slider=${this.layerDatetime.slider??!1}
            .play=${this.layerDatetime.play??!1}
            .controlValues=${this.layerDatetime.controlValues}
            .controlProperty=${void 0}
            current-step=${this.layerDatetime.currentStep}
            .displayFormat=${this.layerDatetime.displayFormat}
            @stepchange=${H(this,Oe,Ci)}
          ></eox-timecontrol>
        `)}
    `}}Oe=new WeakSet,Ci=function(n){this.dispatchEvent(new CustomEvent("datetime:updated",{bubbles:!0,detail:{datetime:n.detail.currentStep,layer:this.layer}})),this.layerDatetime.currentStep=n.detail.currentStep,this.requestUpdate()},Pe=new WeakMap,Me=new WeakMap,R(Ti,"properties",{unstyled:{type:Boolean},noShadow:{type:Boolean},layerDatetime:{attribute:!1},layer:{attribute:!1}});customElements.define("eox-layercontrol-layer-datetime",Ti);var re,Ie,Be;class Ai extends lt{constructor(){super();A(this,re,n=>(this.selectedTab===n||this.toolsAsList)&&"highlighted");A(this,Ie,`
    .tabbed figure,
    .listed figure {
      margin: 0;
    }
    .tabbed nav,
    .listed nav {
      display: flex;
      justify-content: space-between;
    }
    .tabbed nav div,
    .listed nav div {
      display: flex;
    }
    .tabbed .tab,
    .listed .tab {
      display: none;
    }
    .tabbed .tab.highlighted,
    .listed .tab.highlighted {
      display: block;
    }
    .listed .tab {
      margin-bottom: .5rem;
    }
  `);A(this,Be,`
    ${bn}
    figure {
      padding: var(--padding-vertical) var(--padding);
      background-color: var(--surface); /* fallback */
      background-color: var(--item-hover-color);
    }
    .listed [name*=-icon] {
      display: none;
    }
    .listed [name*=-icon]+span {
      text-transform: capitalize;
      font-weight: bold;
    }
    .tabbed > nav > div > label,
    .tabbed > nav > div > span {
      border-bottom: 1px solid var(--surface);
    }
    .tabbed > nav > div > label.highlighted,
    .tabbed > nav > div > span.highlighted {
      border-bottom: 2px solid var(--outline-variant);
    }
    :host {
      --eox-slider-thumb-height: 10px !important;
      --eox-slider-thumb-width: 10px !important;
      --eox-slider-track-height: 4px !important;
      --eox-panel-spacing: 0 !important;
      --eox-slider-margin: 0 !important;
      font-size: small;
    }
  `);this.actions=[],this.selectedTab=0,this.tabs=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const n=this.tabs,i=this.actions,o=i.length+n.length>1;return h`
      <style>
        ${x(this,Ie)}
        ${!this.unstyled&&x(this,Be)}
      </style>
      <div class="${this.toolsAsList?"listed":"tabbed"}">
        <!-- Navigation for tabs and actions -->
        ${L(o,()=>h`
            <nav>
              ${L(!this.toolsAsList,()=>h`
                  <div>
                    <!-- Labels for tabs -->
                    ${ye(n,(r,a)=>h`
                        <label
                          class=${x(this,re).call(this,a)}
                          @click=${()=>this.selectedTab=a}
                        >
                          <!-- Customizable icon for each tab -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </label>
                      `)}
                  </div>
                  <div>
                    <!-- Icons for actions -->
                    ${ye(i,r=>h`
                        <span>
                          <!-- Customizable icon for each action -->
                          <slot name=${`${r}-icon`}>${r}</slot>
                        </span>
                      `)}
                  </div>
                `)}
            </nav>
          `)}
        <figure
          class="no-round small-padding vertical-padding"
          style="overflow: hidden; white-space: normal"
        >
          <!-- Content for each tab -->
          ${ye(n,(r,a)=>h`
              ${L(this.toolsAsList,()=>h`
                  <label>
                    <!-- Customizable icon for each tab -->
                    <slot name=${`${r}-icon`}>${r}</slot>
                    <span>${r}</span>
                  </label>
                `)}
              <div class="tab ${x(this,re).call(this,a)}">
                <!-- Content slot for each tab -->
                <slot name=${`${r}-content`}>${r}</slot>
              </div>
              ${L(this.toolsAsList&&a<n.length-1,()=>h`<hr class="small" />`)}
            `)}
        </figure>
      </div>
    `}}re=new WeakMap,Ie=new WeakMap,Be=new WeakMap,R(Ai,"properties",{actions:{attribute:!1},selectedTab:{state:!0},tabs:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean}});customElements.define("eox-layercontrol-tools-items",Ai);var Ne,ke;class _i extends lt{constructor(){super();R(this,"_removeButton",n=>mi(this,n));R(this,"_sortButton",n=>vi(this,n,this.unstyled));R(this,"_button",(n,i)=>Or(n,i,this.unstyled));R(this,"_getDefaultTools",n=>{var i,o;return h`
      <div slot="info-content">
        ${Ki(this.layer.get("description"))}
      </div>
      <div slot="opacity-content">
        <div class="row">
          <!-- Input for opacity -->
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value=${Si((i=this.layer)==null?void 0:i.getOpacity())}
            class="tiny max"
            @input=${r=>{this.layer.setOpacity(parseFloat(r.target.value)),this.requestUpdate()}}
          />
          <span class="small-text" style="width: 30px; text-align: right">${Math.round(((o=this.layer)==null?void 0:o.getOpacity())*100)}%</span>
        </div class="row">
      </div>
      <div slot="config-content">
        <!-- Layer configuration -->
        ${L(this.layer.get("layerConfig"),()=>h`
            <eox-layercontrol-layerconfig
              slot="config-content"
              .layer=${this.layer}
              .noShadow=${!0}
              .layerConfig=${this.layer.get("layerConfig")}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layerconfig>
          `)}
      </div>
      <div slot="datetime-content">
        <!-- Layer datetime -->
        ${L(this.layer.get("layerDatetime"),()=>h`
            <eox-layercontrol-layer-datetime
              slot="datetime-content"
              .noShadow=${!0}
              .layerDatetime=${this.layer.get("layerDatetime")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
              @datetime:updated=${r=>wi(r,this)}
            ></eox-layercontrol-layer-datetime>
          `)}
      </div>
      <div slot="legend-content">
        <!-- Layer legend -->
        ${L(this.layer.get("layerLegend"),()=>h`
            <eox-layercontrol-layer-legend
              slot="legend-content"
              .noShadow=${!0}
              .layerLegend=${this.layer.get("layerLegend")}
              .layer=${this.layer}
              .unstyled=${this.unstyled}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-legend>
          `)}
      </div>
      <div slot="remove-icon">${this._removeButton(n.remove)}</div>
      <div slot="sort-icon">${this._sortButton(n.sort)}</div>
    `});A(this,Ne,"");A(this,ke,`
    ${this.embedded?"":bn}
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    .single-action-container,
    details.tools {
      position: relative;
    }
    .single-action {
      position: relative;
    }
    details.tools summary button {
      pointer-events: none;
    }
    .single-action,
    details.tools summary {
      position: absolute;
      right: 1.5rem;
      top: -32px;
      height: 24px;
      cursor: pointer;
      display: var(--layer-tools-button-visibility);
    }
    .single-action,
    details.tools summary {
      transition: opacity .2s;
    }
    .single-action,
    details.tools summary {
      opacity: .5;
    }
    .single-action:hover,
    details.tools summary:hover {
      opacity: 1;
    }
    [slot=info-content],
    [slot=opacity-content],
    [slot=config-content],
    [slot=datetime-content],
    [slot=legend-content] {
      padding: 6px 0;
    }
    [slot=info-content] * {
      max-width: 100%;
    }
    /*eox-layercontrol-layerconfig {
      border: 1px solid var(--outline-variant);
      padding: .5rem !important;
      display: block;
    }*/
  `);this.layer=null,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,setTimeout(()=>{var n;this.embedded=((n=this.parentElement)==null?void 0:n.tagName)==="EOX-LAYERCONTROL-LAYER"})}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const n=gi(this.tools,this.layer),i=yi(this.tools,this.layer),o=n==null?void 0:n.length,r=i==null?void 0:i.length;return h`
      <style>
        ${x(this,Ne)}
        ${!this.unstyled&&x(this,ke)}
      </style>
      ${L(o+r>0,()=>h`
          ${L(!(o===1&&r===0),()=>h`
              <details
                class="tools"
                open=${this.embedded===!1?!0:this.layer.get("layerControlToolsExpand")||yt}
              >
                <summary></summary>
                <eox-layercontrol-tools-items
                  class="${this.toolsAsList?"tools-list":"tools-tab"}"
                  .noShadow=${!1}
                  .actions=${n}
                  .tabs=${i}
                  .unstyled=${this.unstyled}
                  .toolsAsList=${this.toolsAsList}
                >
                  <!-- Rendering tabs and content -->
                  ${ye(i,a=>this._button(a,ee()[a]))}
                  <!-- Including default tools -->
                  ${this._getDefaultTools(ee())}
                </eox-layercontrol-tools-items>
              </details>
            `)}
        `)}
    `}}Ne=new WeakMap,ke=new WeakMap,R(_i,"properties",{layer:{attribute:!1},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},embedded:{state:!0}});customElements.define("eox-layercontrol-layer-tools",_i);const Qr=e=>{const t=()=>{const n=_r(e.layer,e.map,e.showLayerZoomState);let i=!1;!n&&e.currLayerVisibilityBasedOnZoom?(e.currLayerVisibilityBasedOnZoom=!1,i=!0):n&&!e.currLayerVisibilityBasedOnZoom&&(e.currLayerVisibilityBasedOnZoom=!0,i=!0),i&&(e.requestUpdate(),e.dispatchEvent(new CustomEvent("change:resolution",{bubbles:!0})))};pi(e.layer,e.showLayerZoomState)&&(t(),e.map.getView().on("change:resolution",()=>t()))},ta=(e,t)=>{const n=t.layer;n.setVisible(e.target.checked),e.target.checked&&n.get("layerControlExclusive")&&t.closest(`${t.globallyExclusiveLayers?".layers":"eox-layercontrol-layer-list"} > ul`).querySelectorAll("eox-layercontrol-layer").forEach(o=>{var r;o.layer!==n&&((r=o.layer)!=null&&r.get("layerControlExclusive"))&&(o.layer.setVisible(!1),o.requestUpdate())}),t.dispatchEvent(new CustomEvent("changed",{bubbles:!0,detail:n})),t.requestUpdate()};var ut,Mt,Li,Ue,Fe;class Di extends lt{constructor(){super();A(this,ut);R(this,"currLayerVisibilityBasedOnZoom",!0);A(this,Ue,"");A(this,Fe,`
    eox-layercontrol-layer {
      width: 100%;
      position: relative;
    }
    eox-layercontrol-layer nav {
      height: 32px;
      margin-block-start: 0 !important;
    }
    eox-layercontrol-layer > nav > .action.tools {
      display: var(--layer-tools-button-visibility);
    }
    eox-layercontrol-layer .action.tools.dots {
      transition: rotate 0s;
    }
    eox-layercontrol-layer:has(eox-layercontrol-layer-tools > details[open]) .action.tools.dots {
      transform: rotate(180deg);
    }
    eox-layercontrol-layer > nav > .action.visibility {
      padding: .3rem;  
      transform: translateX(.3rem);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:hover) > nav > .action {
        display: var(--layer-toggle-button-visibility);
      }
    }
    eox-layercontrol-layer nav:has(.action input[type=checkbox]:not(:checked)),
    eox-layercontrol-layer nav:has(.action input[type=radio]:not(:checked)),
    eox-layercontrol-layer:has(.action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer:has(.action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-list,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) .arrow-container,
    eox-layercontrol-layer-group:has(summary .action input[type=checkbox]:not(:checked)) eox-layercontrol-layer-tools,
    eox-layercontrol-layer-group:has(summary .action input[type=radio]:not(:checked)) eox-layercontrol-layer-tools {
      opacity: .5;
    }
    .tooltip {
      opacity: 1;
    }
    .layer input[type=checkbox],
    .layer input[type=radio] {
      display: var(--layer-input-visibility);
    }
    .layer.zoom-state-invisible {
      opacity: 0.5;
    }
    .layer {
      padding: var(--padding-vertical) 0;
      display: var(--layer-visibility);
      user-select: none;
    }
    .layertitle {
      display: var(--layer-title-visibility);
    }
    .drag-handle {
      -webkit-user-drag: element;
      user-select: none;
    }
    :is(.checkbox,.radio)>span:after {
      transition: none !important;
    }
  `);this.layer=null,this.layerType=void 0,this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}firstUpdated(){Qr(this)}render(){var p,d;const n=this.layer.getVisible(),i=n?"visible":"",o=this.currLayerVisibilityBasedOnZoom?"":"zoom-state-invisible",r=H(this,ut,Mt).call(this,"layerControlDisable")?"disabled":"",a=H(this,ut,Mt).call(this,"layerControlExclusive")?"radio":"checkbox",s=((p=gi(this.tools,this.layer))==null?void 0:p.length)>0,l=((d=yi(this.tools,this.layer))==null?void 0:d.length)>0,u=document.querySelector("eox-layercontrol-layer-tools");return u&&Object.assign(u,{layer:this.layer,tools:this.tools,toolsAsList:this.toolsAsList}),h`
      <style>
        ${x(this,Ue)}
        ${!this.unstyled&&x(this,Fe)}
      </style>
      ${L(this.layer,()=>h`
          <!-- Render the layer -->
          <nav
            class="layer ${r} ${i} ${o} responsive tiny-space"
          >
            ${L(!this.unstyled,()=>{if(H(this,ut,Mt).call(this,"color"))return h`
                  <i class="small" style="color: ${H(this,ut,Mt).call(this,"color")}">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <title>square-rounded</title>
                      <path
                        d="M8 3H16C18.76 3 21 5.24 21 8V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3Z"
                      />
                    </svg>
                  </i>
                `;switch(this.layerType){case"group":return h` <i class="small"> </i> `;case"draw":return h`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-square-edit</title>
                        <path
                          d="M22.7 14.4L21.7 15.4L19.6 13.3L20.6 12.3C20.8 12.1 21.2 12.1 21.4 12.3L22.7 13.6C22.9 13.8 22.9 14.1 22.7 14.4M13 19.9L19.1 13.8L21.2 15.9L15.1 22H13V19.9M11 19.9V19.1L11.6 18.5L12.1 18H8V16H6V8H8V6H16V8H18V12.1L19.1 11L19.3 10.8C19.5 10.6 19.8 10.4 20.1 10.3V8H22.1V2H16.1V4H8V2H2V8H4V16H2V22H8V20L11 19.9M18 4H20V6H18V4M4 4H6V6H4V4M6 20H4V18H6V20Z"
                        />
                      </svg>
                    </i>
                  `;case"vector":return h`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>vector-polygon</title>
                        <path
                          d="M2,2V8H4.28L5.57,16H4V22H10V20.06L15,20.05V22H21V16H19.17L20,9H22V3H16V6.53L14.8,8H9.59L8,5.82V2M4,4H6V6H4M18,5H20V7H18M6.31,8H7.11L9,10.59V14H15V10.91L16.57,9H18L17.16,16H15V18.06H10V16H7.6M11,10H13V12H11M6,18H8V20H6M17,18H19V20H17"
                        />
                      </svg>
                    </i>
                  `;case"raster":return h`
                    <i class="small grey-text">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>checkerboard</title>
                        <path
                          d="M2 2V22H22V2H2M20 12H16V16H20V20H16V16H12V20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12M16 8V12H12V8H16M12 12V16H8V12H12Z"
                        />
                      </svg>
                    </i>
                  `;default:return h` <i class="small grey-text"> </i> `}})}

            <!-- Layer title -->
            <div class="max truncate drag-handle ${r}">
              <span class="layertitle truncate"
                >${H(this,ut,Mt).call(this,this.titleProperty)}</span
              >
            </div>

            ${L(l,()=>h`
                <button
                  class="transparent square primary-text small action tools ${this.tools.length===1?this.tools[0]:"dots"}"
                  @click=${()=>{var b,g,w;const y=((g=(b=this.renderRoot.querySelector("eox-layercontrol-layer-tools"))==null?void 0:b.shadowRoot)==null?void 0:g.querySelector("details"))||((w=this.renderRoot.querySelector("eox-layercontrol-layer-tools"))==null?void 0:w.querySelector("details"));y.open=!y.open}}
                >
                  <i class="small">
                    ${ee()[this.tools.length>1?"dots":this.tools[0]]}
                  </i>
                  <!--<div class="tooltip top" style="pointer-events: none">Tools</div>-->
                </button>
              `)}
            ${L(!l&&s,()=>this.tools[0]==="remove"?mi(this,ee()[this.tools[0]]):vi(this,ee()[this.tools[0]],!1))}

            <!-- Input element for layer visibility -->
            <label
              class="${r} ${a} icon square primary-text action visibility small"
            >
              <input
                type=${a}
                .checked=${Si(n)}
                @click=${H(this,ut,Li)}
                disabled=${r||yt}
              />
              <span>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye-off-outline</title>
                    <path
                      d="M2,5.27L3.28,4L20,20.72L18.73,22L15.65,18.92C14.5,19.3 13.28,19.5 12,19.5C7,19.5 2.73,16.39 1,12C1.69,10.24 2.79,8.69 4.19,7.46L2,5.27M12,9A3,3 0 0,1 15,12C15,12.35 14.94,12.69 14.83,13L11,9.17C11.31,9.06 11.65,9 12,9M12,4.5C17,4.5 21.27,7.61 23,12C22.18,14.08 20.79,15.88 19,17.19L17.58,15.76C18.94,14.82 20.06,13.54 20.82,12C19.17,8.64 15.76,6.5 12,6.5C10.91,6.5 9.84,6.68 8.84,7L7.3,5.47C8.74,4.85 10.33,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C12.69,17.5 13.37,17.43 14,17.29L11.72,15C10.29,14.85 9.15,13.71 9,12.28L5.6,8.87C4.61,9.72 3.78,10.78 3.18,12Z"
                    />
                  </svg>
                </i>
                <i>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>eye</title>
                    <path
                      d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                    />
                  </svg>
                </i>
              </span>
              <!--<div class="tooltip top" style="pointer-events: none">${n?"Hide":"Show"}</div>-->
            </label>
          </nav>
        `)}

      <!-- Render layer tools -->
      ${L(l&&!u,()=>h`
          <eox-layercontrol-layer-tools
            .noShadow=${!1}
            .layer=${this.layer}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
          ></eox-layercontrol-layer-tools>
        `)}
    `}}ut=new WeakSet,Mt=function(n){var i;return(i=this.layer)==null?void 0:i.get(n)},Li=function(n){ta(n,this)},Ue=new WeakMap,Fe=new WeakMap,R(Di,"properties",{layer:{attribute:!1},layerType:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean}});customElements.define("eox-layercontrol-layer",Di);var qe,Ze;class Vi extends lt{constructor(){super();A(this,qe,"");A(this,Ze,`
    details > summary {
      min-block-size: 0rem;
      display: var(--layer-summary-visibility);
      user-select: none;
    }
    details .arrow-container > i {
      transition: transform 0.1s ease-in-out;
    }
    details[open] > summary > .arrow-container > i {
      transform: rotate(90deg);
    }
    .arrow-container {
      position: absolute;
      height: 32px;
      display: flex;
      align-items: center;
      left: calc(var(--padding));
      z-index: 1;
    }
    .list li ul.list > li .arrow-container {
      left: calc(var(--padding) + var(--list-padding) - .5rem);
    }
  `);this.group=null,this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=[],this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){var o,r;const n=!!((o=this.group)!=null&&o.get("layerControlExpand")),i=(r=bi(this.group.getLayers()))==null?void 0:r.length;return h`
      <style>
        ${x(this,qe)}
        ${!this.unstyled&&x(this,Ze)}
      </style>
      ${L(this.group,()=>h`
          <!-- Render the details element with the layer control -->
          <details
            class="max-width"
            open=${n||yt}
            data-children-length=${i}
          >
            <summary class="square">
              ${L(i>0,()=>h`
                  <!-- Open/close arrow -->
                  <div class="arrow-container">
                    <i class="small">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <title>chevron-right</title>
                        <path
                          d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                        />
                      </svg>
                    </i>
                  </div>
                `)}

              <!-- Render the layer control within the summary -->
              <eox-layercontrol-layer
                .noShadow=${!0}
                .layer=${this.group}
                .map=${this.map}
                .titleProperty=${this.titleProperty}
                .showLayerZoomState=${this.showLayerZoomState}
                .layerType=${"group"}
                .tools=${this.tools}
                .unstyled=${this.unstyled}
                .toolsAsList=${this.toolsAsList}
                .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                @changed=${()=>this.requestUpdate()}
              ></eox-layercontrol-layer>
            </summary>

            <!-- Render the list of layers within the details -->
            <eox-layercontrol-layer-list
              .noShadow=${!0}
              .idProperty=${this.idProperty}
              .layers=${this.group.getLayers()}
              .map=${this.map}
              .titleProperty=${this.titleProperty}
              .showLayerZoomState=${this.showLayerZoomState}
              .tools=${this.tools}
              .unstyled=${this.unstyled}
              .toolsAsList=${this.toolsAsList}
              .globallyExclusiveLayers=${this.globallyExclusiveLayers}
              @changed=${()=>this.requestUpdate()}
            ></eox-layercontrol-layer-list>
          </details>
        `)}
    `}}qe=new WeakMap,Ze=new WeakMap,R(Vi,"properties",{group:{attribute:!1},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean}});customElements.define("eox-layercontrol-layer-group",Vi);const ea=e=>{const{layers:t,idProperty:n,titleProperty:i,renderRoot:o}=e,r=eo(()=>{e.requestUpdate(),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0}))},50),a=()=>r();if(t&&(t.hasListener("change:length")&&(t==null||t.un("change:length",a)),t.on("change:length",a),t)){const s=o.querySelector("ul");Ar(t,n,i,e),Cr(s,t,n,e)}};var Xe,je;class Ri extends lt{constructor(){super();A(this,Xe,"");A(this,je,`
    eox-layercontrol-layer-group {
      box-sizing: border-box;
      width: 100%;
    }
    eox-layercontrol-layer.sortable-chosen {
      background: #eeea !important;
    }
    eox-layercontrol-layer.sortable-drag {
      opacity: 0;
    }
    eox-layercontrol-layer.sortable-ghost {
    }
    eox-layercontrol-layer {
      padding: 0 var(--padding);
    }
    @media (pointer:fine) {
      eox-layercontrol-layer:not(:has(details[open])):hover {
        background-color: var(--item-hover-color);
      }
    }
    .list li ul.list > li eox-layercontrol-layer {
      padding-left: var(--list-padding);
    }
    .list li ul.list li ul.list > li eox-layercontrol-layer {
      padding-left: calc(var(--list-padding) * 2 - .5rem);
    }
    .list li ul.list > li:has(details[open]) eox-layercontrol-tools-items {
      display: block;
    }
    .list.no-space li.square {
      padding: 0;
    }
  `);this.idProperty="id",this.layers=null,this.map=null,this.tools=void 0,this.titleProperty="title",this.showLayerZoomState=!1,this.unstyled=!1,this.noShadow=!1,this.toolsAsList=!1,this.globallyExclusiveLayers=!1}firstUpdated(){ea(this)}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const n=this.layers?bi(this.layers).reverse():[];return h`
      <style>
        ${x(this,Xe)}
        ${!this.unstyled&&x(this,je)}
      </style>
      <ul class="list no-space">
        ${L(this.layers,()=>h`
            ${Yi(n,i=>i,i=>h`
                <li
                  data-layer="${i.get(this.idProperty)}"
                  data-type="${Nn(i,this.map)}"
                  class="square"
                >
                  ${i.getLayers?h`
                          <eox-layercontrol-layer-group
                            .noShadow=${!0}
                            .group=${i}
                            .idProperty=${this.idProperty}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            @changed=${()=>this.requestUpdate()}
                          >
                          </eox-layercontrol-layer-group>
                        `:h`
                          <eox-layercontrol-layer
                            .noShadow=${!0}
                            .layer=${i}
                            .map=${this.map}
                            .titleProperty=${this.titleProperty}
                            .showLayerZoomState=${this.showLayerZoomState}
                            .layerType=${Nn(i,this.map)}
                            .tools=${this.tools}
                            .unstyled=${this.unstyled}
                            .toolsAsList=${this.toolsAsList}
                            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
                            @changed=${()=>this.requestUpdate()}
                          ></eox-layercontrol-layer>
                        `}
                </li>
              `)}
          `)}
      </ul>
    `}}Xe=new WeakMap,je=new WeakMap,R(Ri,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},unstyled:{type:Boolean},noShadow:{type:Boolean},toolsAsList:{type:Boolean},globallyExclusiveLayers:{type:Boolean}});customElements.define("eox-layercontrol-layer-list",Ri);const na=e=>{const t=e.querySelector("select[name=optional]"),n=t?t.value:null,i=Cn(e.layers.getArray(),"layerControlOptional",!0).find(o=>(o.get(e.idProperty)||o.ol_uid)===n);i==null||i.set("layerControlOptional",!1),i==null||i.setVisible(!0),e.dispatchEvent(new CustomEvent("changed",{bubbles:!0})),e.renderRoot.parentNode.querySelectorAll("eox-layercontrol-layer-list").forEach(o=>o.requestUpdate()),e.requestUpdate()};var Ye,Oi;class Hi extends lt{constructor(){super();A(this,Ye);this.idProperty="id",this.layers=null,this.titleProperty="title",this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const n=Cn(this.layers.getArray(),"layerControlOptional",!0);return h`
      <nav class="bottom-padding large-padding">
        <div class="field suffix border small max">
          <!-- Dropdown select element -->
          <select
            name="optional"
            data-cy="optionalLayers"
            class="small-padding"
            style="font-size: small"
          >
            <!-- Default placeholder option -->
            <option disabled selected value>-- select --</option>

            <!-- Mapping through filtered layers list to generate dropdown options -->
            ${n.map(i=>{const o=i.get(this.idProperty)||i.ol_uid,r=i.get(this.titleProperty),a=`layer ${i.get(this.idProperty)}`;return h` <option value="${o}">${r||a}</option> `})}
          </select>

          <!-- Label for the dropdown -->
          <label for="optional">Optional layers</label>
        </div>

        <!-- Button to handle adding layers -->
        <button class="small" @click="${H(this,Ye,Oi)}">Add</button>
      </nav>
    `}}Ye=new WeakSet,Oi=function(){na(this)},R(Hi,"properties",{idProperty:{attribute:"id-property"},layers:{attribute:!1},titleProperty:{attribute:"title-property",type:String},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-optional-list",Hi);const ia=(e,t)=>{t.jsonInput=e.target.value,t.requestUpdate()},qn=e=>{const t=JSON.parse(`{"data":${Kn(e.jsonInput)}}`);Array.isArray(t.data)?t.data.forEach(n=>{e.eoxMap.addOrUpdateLayer(n)}):e.eoxMap.addOrUpdateLayer(t.data),e.jsonInput=null,e.requestUpdate()},oa=(e,t)=>{t.urlInput=e.target.value,t.requestUpdate()};async function ra(e){const t=e.urlInput;if(e.wmsCapabilities=null,e.searchLoad=!0,e.requestUpdate(),!t)return!1;if(Sn(t)==="XYZ")return{Name:t};try{const n=await Wo(t);e.wmsCapabilities=n}catch{}finally{e.searchLoad=!1,e.requestUpdate()}return!1}const aa=(e,t)=>{const{Name:n}=e,i=Sn(t.urlInput)||"XYZ",o={type:"Tile",properties:{id:n,title:n},source:{type:i,url:t.urlInput,params:{LAYERS:n}}};t.jsonInput=JSON.stringify(o)},sa=(e,t)=>{t.open=e||null,t.urlInput=null,t.jsonInput=null,t.wmsCapabilities=null,t.requestUpdate()};var U,Mi,Ii,vn,Bi,Ni,xe,ze;class Pi extends lt{constructor(){super();A(this,U);R(this,"urlInput",null);R(this,"jsonInput",null);R(this,"open",null);R(this,"searchLoad",!1);R(this,"wmsCapabilities",null);A(this,ze,`
    .eox-add-layer-main .open {
      position: relative;
    }
    .eox-add-layer-main .close {
      display: none;
    }
    .field.small > :is(input, textarea, select) {
      font-size: 0.75rem;
    }
  `);this.eoxMap=null,this.unstyled=!1,this.noShadow=!1}createRenderRoot(){return this.noShadow?this:super.createRenderRoot()}render(){const n={add:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>layers-plus</title>
        <path
          d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11,16L2,9L11,2L20,9L11,16M11,18.54L12,17.75V18C12,18.71 12.12,19.39 12.35,20L11,21.07L2,14.07L3.62,12.81L11,18.54Z"
        />
      </svg>`,plus:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>plus</title>
        <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
      </svg>`,search:h`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>magnify</title>
        <path
          d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
        />
      </svg>`},i=this.open?"open":"close",o=this.open==="url",r=this.open==="json",a=!Go(this.urlInput)||this.searchLoad?!0:yt;return h`
      <style>
        ${x(this,ze)}
      </style>
      <div class="eox-add-layer-main">
        <nav class="eox-add-layer-col">
          <!-- Tabbed interface for URL and JSON -->
          <div
            class="eox-add-layer-tab tabs min left-align ${i}"
          >
            <a
              @click=${()=>H(this,U,xe).call(this,"url")}
              class="${o?"active":""}"
            >
              URL
            </a>
            <a
              @click=${()=>H(this,U,xe).call(this,"json")}
              class="${r?"active":""}"
            >
              JSON
            </a>
          </div>

          <div class="max"></div>

          <!-- Button to toggle tabs -->
          <button
            class="add-icon transparent square primary-text small"
            @click=${()=>H(this,U,xe).call(this,this.open?null:"url")}
          >
            ${this.unstyled?"Add Layer":h`<i class="small primary-text">${n.add}</i>`}
          </button>
        </nav>
        <div class="eox-add ${i}" style="padding: 15px 0">
          ${o?h`
                <nav>
                  <!-- Input field for URL -->
                  <div class="eox-add-layer-col field border small responsive">
                    <input
                      type="text"
                      class="add-url"
                      placeholder="Add URL (WMS/XYZ)"
                      .value="${this.urlInput}"
                      @input=${H(this,U,Mi)}
                    />
                  </div>
                  <!-- Search button for URL -->
                  <button
                    class="search-icon"
                    disabled=${a}
                    @click=${H(this,U,Ii)}
                  >
                    ${this.unstyled?"Search":h`<i class="small">${n.search}</i>`}
                  </button>
                </nav>

                <!-- Display layers for WMS capabilities -->
                ${this.wmsCapabilities?h`<ul class="search-lists">
                      ${this.wmsCapabilities.Capability.Layer.Layer.map(s=>{const l=s.Name;return h`
                            <li class="search-list">
                              ${l}
                              <!-- Button to add layer -->
                              <button
                                class="add-layer-icon icon"
                                @click=${()=>H(this,U,vn).call(this,s)}
                              >
                                ${this.unstyled?"+":""}
                              </button>
                            </li>
                          `})}
                    </ul>`:yt}
              `:h`
                <!-- Textarea for JSON input -->
                <div class="field textarea small border no-margin">
                  <textarea
                    class="add-layer-input small"
                    style="overflow-wrap: break-word; font-family: monospace;"
                    placeholder="Please input a valid eox-map layer JSON."
                    @input=${H(this,U,Ni)}
                    .value=${this.jsonInput}
                  ></textarea>
                </div>

                <!-- Button to add JSON layer -->
                <button
                  class="add-layer-icon json-add-layer small square small-margin"
                  style="position: absolute; bottom: 15px; right: 0;"
                  disabled=${Jo(this.jsonInput)?yt:!0}
                  @click=${H(this,U,Bi)}
                >
                  ${this.unstyled?"Add JSON":h`<i class="small">${n.plus}</i>`}
                </button>
              `}
        </div>
      </div>
    `}}U=new WeakSet,Mi=function(n){oa(n,this)},Ii=async function(){const n=await ra(this);n&&H(this,U,vn).call(this,n)},vn=function(n){aa(n,this),qn(this)},Bi=function(){qn(this)},Ni=function(n){ia(n,this)},xe=function(n){sa(n,this)},ze=new WeakMap,R(Pi,"properties",{eoxMap:{attribute:!1,state:!0},unstyled:{type:Boolean},noShadow:{type:Boolean}});customElements.define("eox-layercontrol-add-layers",Pi);const la=(e,t)=>{if(t.requestUpdate(),e.target.tagName==="EOX-LAYERCONTROL-LAYER-TOOLS"){const n=t.renderRoot.querySelector("eox-layercontrol-optional-list");n==null||n.requestUpdate()}},Zn=e=>{const t=no(e.for);return t&&t.map!==e.map&&(e.map=t.map),t};Qi();var Tt,Ft,Ui,Fi,We;class ki extends lt{constructor(){super();A(this,Ft);A(this,Tt);A(this,We,`
    ${bn}
    :host, :root {
      --padding: 0.5rem;
      --padding-vertical: .2rem;
      --list-padding: 2rem;
      --layer-input-visibility: flex;
      --layer-summary-visibility: flex;
      --layer-type-visibility: block;
      --layer-title-visibility: inline;
      --layer-visibility: flex;
      --layer-tools-button-visibility: flex;
      --layer-toggle-button-visibility: none;

      --primary-color: var(--primary);
      --secondary-color: var(--secondary);
      --item-color: color-mix(
        in srgb,
        var(--primary-color) 10%,
        transparent
      );
      --item-hover-color: color-mix(
        in srgb,
        var(--surface) 80%,
        transparent
      );

      display: flex;
      flex-direction: column;
      --background-color: var(--eox-background-color, transparent);
      background-color: var(--background-color, transparent);
    }
    
    .layerstitle {
      display: block;
      padding-left: var(--padding);
      padding-right: var(--padding);
    }
    select {
      background-color: var(--background-color);
    }
  `);this.for="eox-map",this.idProperty="id",this.map=null,this.titleProperty="title",this.showLayerZoomState=!1,this.tools=["info","opacity","datetime","config","remove","sort"],this.addExternalLayers=!1,this.unstyled=!1,this.styleOverride="",this.toolsAsList=!1,this.globallyExclusiveLayers=!1}firstUpdated(){this.eoxMap=Zn(this)}updated(n){n.has("for")&&(this.eoxMap=Zn(this))}get eoxMap(){return x(this,Tt)}set eoxMap(n){const i=x(this,Tt);pt(this,Tt,n),this.requestUpdate("eoxMap",i)}render(){var o,r,a;const n=(o=this.map)==null?void 0:o.getLayers().getArray(),i=n&&((r=Cn(n,"layerControlOptional",!0))==null?void 0:r.length)>0;return h`
      <style>
        ${!this.unstyled&&x(this,We)}
        ${this.styleOverride}
      </style>

      <span class="layerstitle">
        <slot name="layerstitle"
          ><p><strong>Layers</strong></p></slot
        >
      </span>

      <!-- Conditional rendering of add layers component -->
      ${L(this.addExternalLayers&&((a=x(this,Tt))==null?void 0:a.addOrUpdateLayer),()=>h`
          <eox-layercontrol-add-layers
            .noShadow=${!0}
            .eoxMap=${x(this,Tt)}
            .unstyled=${this.unstyled}
          ></eox-layercontrol-add-layers>
        `)}

      <!-- Conditional rendering of layer list component -->
      ${L(this.map,()=>h`
          <eox-layercontrol-layer-list
            .noShadow=${!0}
            class="layers"
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .map=${this.map}
            .titleProperty=${this.titleProperty}
            .showLayerZoomState=${this.showLayerZoomState}
            .tools=${this.tools}
            .unstyled=${this.unstyled}
            .toolsAsList=${this.toolsAsList}
            .globallyExclusiveLayers=${this.globallyExclusiveLayers}
            @changed=${H(this,Ft,Ui)}
            @datetime:updated=${s=>wi(s,this)}
            @layerConfig:change=${H(this,Ft,Fi)}
          ></eox-layercontrol-layer-list>
        `)}

      <!-- Conditional rendering of optional list component -->
      ${L(i,()=>h`
          <eox-layercontrol-optional-list
            .noShadow=${!0}
            .idProperty=${this.idProperty}
            .layers=${this.map.getLayers()}
            .titleProperty=${this.titleProperty}
            @changed=${()=>this.requestUpdate()}
          ></eox-layercontrol-optional-list>
        `)}
    `}}Tt=new WeakMap,Ft=new WeakSet,Ui=function(n){la(n,this),this.dispatchEvent(new CustomEvent("layerchange",{detail:n.detail}))},Fi=function(n){this.dispatchEvent(new CustomEvent("layerConfig:change",{detail:n.detail}))},We=new WeakMap,R(ki,"properties",{for:{type:String},idProperty:{attribute:"id-property"},map:{attribute:!1,state:!0},titleProperty:{attribute:"title-property",type:String},showLayerZoomState:{attribute:"show-layer-zoom-state",type:Boolean},tools:{attribute:!1},addExternalLayers:{attribute:!1},unstyled:{type:Boolean},styleOverride:{type:String},toolsAsList:{type:Boolean},globallyExclusiveLayers:{attribute:"globally-exclusive-layers",type:Boolean}});customElements.define("eox-layercontrol",ki);export{ki as EOxLayerControl};
