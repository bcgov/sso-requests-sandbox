(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[883],{16530:function(e,t,n){"use strict";var r,a=n(64836),c=n(75263);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.applyTheme=void 0;var l=a(n(87462)),o=a(n(63366)),u=a(n(81880)),s=c(n(67294)),i=a(n(86010)),f=a(n(85444)),d=n(80927),p="pg-notification",y="pg-notification-content",b=f.default.input.attrs({type:"checkbox"})(r||(r=(0,u.default)(["\n  position: absolute;\n  left: -100vw;\n\n  &:checked + ."," {\n    display: none;\n  }\n"])),p),h=s.default.createContext({checkboxId:"",styleProps:{},Sheader:null,Scontent:null,Sgroup:null,Sclose:null}),v=function(e,t,n){void 0===n&&(n={});var r=(0,d.processStyle)(e),a=(0,d.processStyle)(n),c=(0,d.createStyleBuilder)(r,t,a),u=t.as||{},f=c(u.container||"aside","container"),v=c(u.header||"header","header"),m=c(u.content||"div","content"),g=c(u.group||"div","group"),j=c("label","close"),S=(0,d.createBootstrap)(r,"notification"),N=function(e){var t=S(e),n=t.id,r=(t.name,t.label,t.ariaLabel,t.styleProps),a=t.children,c=t.className,u=t.rest,d=u.closable,y=(0,o.default)(u,["closable"]),N=n+"-toggle";return s.default.createElement(h.Provider,{value:{checkboxId:N,styleProps:r,Sheader:v,Scontent:m,Sgroup:g,Sclose:j}},d&&s.default.createElement(b,{id:N}),s.default.createElement(f,(0,l.default)({},r,y,{className:(0,i.default)(p,c)}),a))};return N.Header=function(e){var t=e.children,n=e.className,r=(0,o.default)(e,["children","className"]),a=(0,i.default)("pg-notification-header",n),c=(0,s.useContext)(h),u=c.Sheader,f=c.styleProps;return s.default.createElement(u,(0,l.default)({className:a},f,r),t)},N.Content=function(e){var t=e.children,n=e.className,r=(0,o.default)(e,["children","className"]),a=(0,i.default)(y,n),c=(0,s.useContext)(h),u=c.Scontent,f=c.styleProps;return s.default.createElement(u,(0,l.default)({className:a},f,r),t)},N.Group=function(e){var t=e.children,n=e.className,r=(0,o.default)(e,["children","className"]),a=(0,i.default)(y,n),c=(0,s.useContext)(h),u=c.Sgroup,f=c.styleProps;return s.default.createElement(u,(0,l.default)({className:a},f,r),t)},N.Close=function(e){var t=e.children,n=e.className,r=(0,o.default)(e,["children","className"]),a=(0,i.default)("pg-notification-close",n),c=(0,s.useContext)(h),u=c.Sclose,f=c.checkboxId,d=c.styleProps;return s.default.createElement(u,(0,l.default)({className:a,htmlFor:f},d,{role:"button","aria-label":"close"},r),t)},N};t.applyTheme=v;var m=v({},{},{});t.default=m},99245:function(e,t,n){e=n.nmd(e);var r,a,c,l="[object Map]",o="[object Promise]",u="[object Set]",s="[object WeakMap]",i="[object DataView]",f=/^\[object .+?Constructor\]$/,d="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,p="object"==typeof self&&self&&self.Object===Object&&self,y=d||p||Function("return this")(),b=t&&!t.nodeType&&t,h=b&&e&&!e.nodeType&&e,v=h&&h.exports===b,m=Function.prototype,g=Object.prototype,j=y["__core-js_shared__"],S=(r=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"",N=m.toString,O=g.hasOwnProperty,k=g.toString,P=RegExp("^"+N.call(O).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),w=v?y.Buffer:void 0,x=g.propertyIsEnumerable,_=w?w.isBuffer:void 0,E=(a=Object.keys,c=Object,function(e){return a(c(e))}),C=V(y,"DataView"),$=V(y,"Map"),B=V(y,"Promise"),F=V(y,"Set"),I=V(y,"WeakMap"),M=!x.call({valueOf:1},"valueOf"),T=z(C),A=z($),D=z(B),G=z(F),R=z(I);function V(e,t){var n=null==e?void 0:e[t];return!(!K(n)||S&&S in n)&&(J(n)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(n)?P:f).test(z(n))?n:void 0}var W=function(e){return k.call(e)};function z(e){if(null!=e){try{return N.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(C&&W(new C(new ArrayBuffer(1)))!=i||$&&W(new $)!=l||B&&W(B.resolve())!=o||F&&W(new F)!=u||I&&W(new I)!=s)&&(W=function(e){var t=k.call(e),n="[object Object]"==t?e.constructor:void 0,r=n?z(n):void 0;if(r)switch(r){case T:return i;case A:return l;case D:return o;case G:return u;case R:return s}return t});var H=Array.isArray;function L(e){var t;return null!=e&&"number"==typeof(t=e.length)&&t>-1&&t%1==0&&t<=9007199254740991&&!J(e)}var q=_||function(){return!1};function J(e){var t=K(e)?k.call(e):"";return"[object Function]"==t||"[object GeneratorFunction]"==t}function K(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=function(e){if(L(e)&&(H(e)||"string"==typeof e||"function"==typeof e.splice||q(e)||e&&"object"==typeof e&&L(e)&&O.call(e,"callee")&&(!x.call(e,"callee")||"[object Arguments]"==k.call(e))))return!e.length;var t,n,r=W(e);if(r==l||r==u)return!e.size;if(M||(n="function"==typeof(t=e&&e.constructor)&&t.prototype||g,e===n))return!E(e).length;for(var a in e)if(O.call(e,a))return!1;return!0}}}]);