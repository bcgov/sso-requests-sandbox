(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{64735:function(t,e,i){"use strict";e.ZP=void 0;var s={};var n=(0,i(70623).applyTheme)(s,{defaultProps:{},staticProps:[],cols:20,gutter:[5,2]});var r=n;e.ZP=r},70623:function(t,e,i){"use strict";var s=i(64836),n=i(75263);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.applyTheme=void 0;var r,o,l=s(i(63366)),a=s(i(87462)),c=s(i(81880)),h=n(i(67294)),d=s(i(86010)),u=s(i(85444)),p=i(80927),g="pg-grid-col",v={start:"flex-start",center:"center",end:"flex-end","space-between":"space-between","space-around":"space-around"},f={top:"flex-start",center:"center",bottom:"flex-end"},m={styleProps:{},Srow:null,Scol:null,cols:16,gutter:0,gutterUnit:"px",justify:"start",align:"start"},_=h.default.createContext(m),$=function(t,e){var i,s=(0,p.processStyle)(t),n=(0,p.createStyleBuilder)(s,e),m=e.as||{},$=n(m.container||"div","container"),y=n((i=m.row||"div",u.default[i](r||(r=(0,c.default)(["\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-pack: inherit;\n    -ms-flex-pack: inherit;\n    justify-content: inherit;\n    -webkit-box-align: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    ","\n  "])),(function(t){return"\n      margin-left: -"+t.gutterHorizontal+t.gutterUnit+";\n      margin-right: -"+t.gutterHorizontal+t.gutterUnit+";\n      row-gap: "+t.gutterVertical+t.gutterUnit+";\n      & > ."+g+" {\n        padding: "+t.gutterVertical+t.gutterUnit+" "+t.gutterHorizontal+t.gutterUnit+";\n      }\n      justify-content: "+v[t.justify]+";\n      align-items: "+f[t.align]+";\n      "+(t.collapse?"@media (max-width: "+t.collapse+"px) {\n              -webkit-box-orient: vertical;\n              -ms-flex-direction: column;\n              flex-direction: column;\n              & > ."+g+" {\n                width: 100% !important;\n              }\n            }\n            ":"")+"\n    "}))),"row"),A=n(function(t){return u.default[t](o||(o=(0,c.default)(["\n    width: ","%;\n  "])),(function(t){return t.width}))}(m.col||"div"),"col"),S=e.cols,E=void 0===S?16:S,b=e.gutter,w=e.gutterUnit,C=e.justify,x=e.align,U=(0,p.createBootstrap)(s,"grid"),P=function(t){var e=U(t),i=(e.id,e.name,e.label,e.ariaLabel,e.styleProps),s=e.children,n=e.className,r=e.rest,o=r.cols;return h.default.createElement(_.Provider,{value:{styleProps:i,Srow:y,Scol:A,cols:o||E,gutter:b,gutterUnit:w,justify:C,align:x}},h.default.createElement($,(0,a.default)({},r,{className:(0,d.default)("pg-grid-container",n)}),s))};return P.Row=function(t){var e=(0,h.useContext)(_),i=e.Srow,s=e.styleProps,n=e.gutter,r=e.gutterUnit,o=e.justify,c=e.align,u=t.children,p=t.className,g=t.gutter,v=void 0===g?n:g,f=t.gutterUnit,m=void 0===f?r:f,$=t.justify,y=void 0===$?o:$,A=t.align,S=void 0===A?c:A,E=t.collapse,b=(0,l.default)(t,["children","className","gutter","gutterUnit","justify","align","collapse"]),w=(0,d.default)("pg-grid-row",p),C=0,x=0;if(Array.isArray(v))C=v[0]||0,x=v[1]||0;else{var U=v||0;C=U,x=U}return h.default.createElement(i,(0,a.default)({className:w},s,b,{collapse:E||"",gutterHorizontal:C,gutterVertical:x,gutterUnit:m||"px",justify:y||"start",align:S||"start"}),u)},P.Col=function(t){var e=t.children,i=t.className,s=t.span,n=void 0===s?1:s,r=(0,l.default)(t,["children","className","span"]),o=(0,d.default)(g,i),c=(0,h.useContext)(_),u=c.Scol,p=c.cols,v=c.styleProps,f=n/p*100;return h.default.createElement(u,(0,a.default)({className:o},v,r,{width:f}),e)},P};e.applyTheme=$;var y=$({},{});e.default=y},89222:function(t,e){"use strict";Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const l=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var a;const c=window,h=c.trustedTypes,d=h?h.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g};let f=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(l(t))}else void 0!==t&&e.push(l(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),n=i.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,t.appendChild(s)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var m;f.finalized=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(a=c.reactiveElementVersions)&&void 0!==a?a:c.reactiveElementVersions=[]).push("1.5.0");const _=window,$=_.trustedTypes,y=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,S="?"+A,E=`<${S}>`,b=document,w=(t="")=>b.createComment(t),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,x=Array.isArray,U=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,P=/-->/g,N=/>/g,O=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),k=/'/g,T=/"/g,I=/^(?:script|style|textarea|title)$/i,M=(W=1,(t,...e)=>({_$litType$:W,strings:t,values:e})),H=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),j=new WeakMap,G=b.createTreeWalker(b,129,null,!1);var W;class L{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,l=this.parts,[a,c]=((t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=U;for(let a=0;a<i;a++){const e=t[a];let i,l,c=-1,h=0;for(;h<e.length&&(o.lastIndex=h,l=o.exec(e),null!==l);)h=o.lastIndex,o===U?"!--"===l[1]?o=P:void 0!==l[1]?o=N:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=O):void 0!==l[3]&&(o=O):o===O?">"===l[0]?(o=n??U,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,i=l[1],o=void 0===l[3]?O:'"'===l[3]?T:k):o===T||o===k?o=O:o===P||o===N?o=U:(o=O,n=void 0);const d=o===O&&t[a+1].startsWith("/>")?" ":"";r+=o===U?e+E:c>=0?(s.push(i),e.slice(0,c)+"$lit$"+e.slice(c)+A+d):e+A+(-2===c?(s.push(void 0),a):d)}const l=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(l):l,s]})(t,e);if(this.el=L.createElement(a,i),G.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=G.nextNode())&&l.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(A)){const i=c[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(A),e=/([.?@])?(.*)/.exec(i);l.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?K:"@"===e[1]?Z:B})}else l.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(I.test(s.tagName)){const t=s.textContent.split(A),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],w()),G.nextNode(),l.push({type:2,index:++n});s.append(t[e],w())}}}else if(8===s.nodeType)if(s.data===S)l.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(A,t+1));)l.push({type:7,index:n}),t+=A.length-1}n++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,s){var n,r,o,l;if(e===H)return e;let a=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const c=C(e)?void 0:e._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(r=null==a?void 0:a._$AO)||void 0===r||r.call(a,!1),void 0===c?a=void 0:(a=new c(t),a._$AT(t,i,s)),void 0!==s?(null!==(o=(l=i)._$Co)&&void 0!==o?o:l._$Co=[])[s]=a:i._$Cl=a),void 0!==a&&(e=z(t,a._$AS(t,e.values),a,s)),e}class D{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(i,!0);G.currentNode=n;let r=G.nextNode(),o=0,l=0,a=s[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Y(r,r.nextSibling,this,t):1===a.type?e=new a.ctor(r,a.name,a.strings,this,t):6===a.type&&(e=new F(r,this,t)),this.u.push(e),a=s[++l]}o!==(null==a?void 0:a.index)&&(r=G.nextNode(),o++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{constructor(t,e,i,s){var n;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),C(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==H&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>x(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==R&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=L.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new D(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new L(t)),e}k(t){x(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Y(this.O(w()),this.O(w()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}let B=class{constructor(t,e,i,s,n){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=z(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==H,r&&(this._$AH=t);else{const s=t;let o,l;for(t=n[0],o=0;o<n.length-1;o++)l=z(this,s[i+o],e,o),l===H&&(l=this._$AH[o]),r||(r=!C(l)||l!==this._$AH[o]),l===R?t=R:t!==R&&(t+=(l??"")+n[o+1]),this._$AH[o]=l}r&&!s&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class q extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const V=$?$.emptyScript:"";class K extends B{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class Z extends B{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:R)===H)return;const s=this._$AH,n=t===R&&s!==R||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==R&&(s===R||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const Q=_.litHtmlPolyfillSupport;null==Q||Q(L,Y),(null!==(m=_.litHtmlVersions)&&void 0!==m?m:_.litHtmlVersions=[]).push("2.5.0");var J,X;let tt=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new Y(e.insertBefore(w(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return H}};tt.finalized=!0,tt._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");const it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>{return void 0!==i?(s=t,n=i,void e.constructor.createProperty(n,s)):it(t,e);var s,n}}var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;const rt=2;const ot=(t,e)=>{var i,s;const n=t._$AN;if(void 0===n)return!1;for(const r of n)null===(s=(i=r)._$AO)||void 0===s||s.call(i,e,!1),ot(r,e);return!0},lt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},at=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),dt(e)}};function ct(t){void 0!==this._$AN?(lt(this),this._$AM=t,at(this)):this._$AM=t}function ht(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let r=i;r<s.length;r++)ot(s[r],!1),lt(s[r]);else null!=s&&(ot(s,!1),lt(s));else ot(this,t)}const dt=t=>{var e,i,s,n;t.type==rt&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=ht),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=ct))};class ut{}const pt=new WeakMap,gt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),at(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(ot(this,t),lt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}{render(t){return R}update(t,[e]){var i;const s=e!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.dt=null===(i=t.options)||void 0===i?void 0:i.host,this.rt(this.ct=t.element)),R}rt(t){var e;if("function"==typeof this.Y){const i=null!==(e=this.dt)&&void 0!==e?e:globalThis;let s=pt.get(i);void 0===s&&(s=new WeakMap,pt.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.dt,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.dt,t)}else this.Y.value=t}get lt(){var t,e,i;return"function"==typeof this.Y?null===(e=pt.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.Y):null===(i=this.Y)||void 0===i?void 0:i.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var vt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,mt=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?ft(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&vt(e,i,r),r};e.GiscusWidget=class extends tt{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new ut,this.messageEventHandler=this.handleMessageEvent.bind(this),this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var t;return null==(t=this._iframeRef)?void 0:t.value}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){const t=location.href,e=new URL(t),i=localStorage.getItem(this.GISCUS_SESSION_KEY),s=e.searchParams.get("giscus")||"";if(this.__session="",s)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(s)),this.__session=s,e.searchParams.delete("giscus"),void history.replaceState(void 0,document.title,e.toString());if(i)try{this.__session=JSON.parse(i)}catch(n){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==n?void 0:n.message)} Session has been cleared.`)}}handleMessageEvent(t){if(t.origin!==this.host)return;const{data:e}=t;if("object"!=typeof e||!e.giscus||(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),!e.giscus.error))return;const i=e.giscus.error;if(i.includes("Bad credentials")||i.includes("Invalid state value")||i.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",console.warn(`${this._formatError(i)} Session has been cleared.`),void this.update(new Map);console.error(`${this._formatError(i)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}i.includes("Discussion not found")?console.warn(`[giscus] ${i}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(i)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){var e,i;null==(i=null==(e=this.iframeRef)?void 0:e.contentWindow)||i.postMessage({giscus:t},this.host)}updateConfig(){const t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}firstUpdated(){var t;null==(t=this.iframeRef)||t.addEventListener("load",(()=>{var t;return null==(t=this.iframeRef)?void 0:t.classList.remove("loading")}))}requestUpdate(t,e,i){this.hasUpdated&&"host"!==t?this.updateConfig():super.requestUpdate(t,e,i)}getMetaContent(t,e=!1){const i=e?`meta[property='og:${t}'],`:"",s=document.querySelector(i+`meta[name='${t}']`);return s?s.content:""}_getCleanedUrl(){const t=new URL(location.href);return t.searchParams.delete("giscus"),t}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){const t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,i=this.getMetaContent("description",!0),s=this.getMetaContent("giscus:backlink")||t,n={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:i,backLink:s};return`${this.host||this.GISCUS_DEFAULT_HOST}${this.lang?`/${this.lang}`:""}/widget?${new URLSearchParams(n)}`}render(){return M`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${gt(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},e.GiscusWidget.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,t,n)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,mt([st({reflect:!0})],e.GiscusWidget.prototype,"host",2),mt([st({reflect:!0})],e.GiscusWidget.prototype,"repo",2),mt([st({reflect:!0})],e.GiscusWidget.prototype,"repoId",2),mt([st({reflect:!0})],e.GiscusWidget.prototype,"category",2),mt([st({reflect:!0})],e.GiscusWidget.prototype,"categoryId",2),mt([st({reflect:!0})],e.GiscusWidget.prototype,"mapping",2),mt([st({reflect:!0})],e.GiscusWidget.prototype,"term",2),mt([st({reflect:!0})],e.GiscusWidget.prototype,"strict",2),mt([st({reflect:!0})],e.GiscusWidget.prototype,"reactionsEnabled",2),mt([st({reflect:!0})],e.GiscusWidget.prototype,"emitMetadata",2),mt([st({reflect:!0})],e.GiscusWidget.prototype,"inputPosition",2),mt([st({reflect:!0})],e.GiscusWidget.prototype,"theme",2),mt([st({reflect:!0})],e.GiscusWidget.prototype,"lang",2),mt([st({reflect:!0})],e.GiscusWidget.prototype,"loading",2),e.GiscusWidget=mt([(t=>e=>{return"function"==typeof e?(i=t,s=e,customElements.define(i,s),s):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e);var i,s})("giscus-widget")],e.GiscusWidget)},58071:function(t,e,i){"use strict";const s=i(85893),n=i(67294);t.exports=function({id:t,host:e,repo:r,repoId:o,category:l,categoryId:a,mapping:c,term:h,strict:d,reactionsEnabled:u,emitMetadata:p,inputPosition:g,theme:v,lang:f,loading:m}){const[_,$]=n.useState(!1);return n.useEffect((()=>{_||(Promise.resolve().then((()=>i(89222))),$(!0))}),[]),_?s.jsx("giscus-widget",{id:t,host:e,repo:r,repoid:o,category:l,categoryid:a,mapping:c,term:h,strict:d,reactionsenabled:u,emitmetadata:p,inputposition:g,theme:v,lang:f,loading:m}):null}},63095:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return _}});var s=i(67294),n=i(9008),r=i.n(n),o=i(64735),l=i(17933),a=i(85330),c=i(9669),h=i.n(c),d=i(58071),u=i(11752),p=i.n(u),g=i(85893),v=(p()()||{}).publicRuntimeConfig,f=(void 0===v?{}:v).gh_secret_manage_discussions;function m(t){t.children;var e=(0,s.useState)({}),i=e[0],n=e[1],r=(0,s.useState)([]),o=r[0],l=r[1];(0,s.useEffect)((function(){c()}),[]);var c=function(){h()({url:"https://api.github.com/graphql",method:"post",data:{query:'{\n            repository(owner: "bcgov", name: "sso-keycloak") {\n              id\n              nameWithOwner\n              discussions(first: 10) {\n                # type: DiscussionConnection\n                totalCount # Int!\n                nodes {\n                  title\n                  number\n                  category {\n                    id\n                    name\n                  }\n                }\n\n              }\n            }\n          }\n          '},headers:{Authorization:"bearer ".concat(f)}}).then((function(t){var e,i,s,r,o,a;n(null===t||void 0===t||null===(e=t.data)||void 0===e||null===(i=e.data)||void 0===i?void 0:i.repository),l(null===t||void 0===t||null===(s=t.data)||void 0===s||null===(r=s.data)||void 0===r||null===(o=r.repository)||void 0===o||null===(a=o.discussions)||void 0===a?void 0:a.nodes)}))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("h2",{children:"Frequently Asked Questions"}),(0,g.jsx)(a.UQ,{children:o.map((function(t){return(0,g.jsx)(a.UQ.Panel,{title:t.title,children:(0,g.jsx)("div",{style:{maxHeight:"300px",overflowY:"scroll"},children:(0,g.jsx)(d,{repo:i.nameWithOwner,repoId:i.id,category:t.category.name,categoryId:t.category.id,mapping:"number",term:t.number,reactionsEnabled:"0",emitMetadata:"0",inputPosition:"bottom",theme:"light",lang:"en"})})},t.number)}))})]})}function _(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(r(),{children:[(0,g.jsx)("meta",{name:"description",content:"The request process workflow tool for the RedHat SSO Dev Exchange service"}),(0,g.jsx)("link",{rel:"icon",href:"/bcid-favicon-32x32.png"})]}),(0,g.jsx)(l.Z,{rules:l.I,children:(0,g.jsx)(o.ZP,{cols:2,gutter:[5,2],children:(0,g.jsx)(o.ZP.Row,{children:(0,g.jsx)(o.ZP.Col,{span:"2",children:(0,g.jsx)(m,{})})})})})]})}},50008:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return i(63095)}])}},function(t){t.O(0,[774,888,179],(function(){return e=50008,t(t.s=e);var e}));var e=t.O();_N_E=e}]);