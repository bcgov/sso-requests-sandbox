(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[367],{16530:function(t,e,i){"use strict";var n=i(64836),r=i(75263);Object.defineProperty(e,"__esModule",{value:!0}),e.default=e.applyTheme=void 0;var s,o=n(i(87462)),a=n(i(63366)),h=n(i(81880)),l=r(i(67294)),u=n(i(86010)),c=n(i(85444)),p=i(80927),d="pg-notification",f="pg-notification-content",g=c.default.input.attrs({type:"checkbox"})(s||(s=(0,h.default)(["\n  position: absolute;\n  left: -100vw;\n\n  &:checked + ."," {\n    display: none;\n  }\n"])),d),v={checkboxId:"",styleProps:{},Sheader:null,Scontent:null,Sgroup:null,Sclose:null},m=l.default.createContext(v),y=function(t,e,i){void 0===i&&(i={});var n=(0,p.processStyle)(t),r=(0,p.processStyle)(i),s=(0,p.createStyleBuilder)(n,e,r),h=e.as||{},c=s(h.container||"aside","container"),v=s(h.header||"header","header"),y=s(h.content||"div","content"),w=s(h.group||"div","group"),b=s("label","close"),z=(0,p.createBootstrap)(n,"notification"),x=function(t){var e=z(t),i=e.id,n=(e.name,e.label,e.ariaLabel,e.styleProps),r=e.children,s=e.className,h=e.rest,p=h.closable,f=(0,a.default)(h,["closable"]),x=i+"-toggle";return l.default.createElement(m.Provider,{value:{checkboxId:x,styleProps:n,Sheader:v,Scontent:y,Sgroup:w,Sclose:b}},p&&l.default.createElement(g,{id:x}),l.default.createElement(c,(0,o.default)({},n,f,{className:(0,u.default)(d,s)}),r))};return x.Header=function(t){var e=t.children,i=t.className,n=(0,a.default)(t,["children","className"]),r=(0,u.default)("pg-notification-header",i),s=(0,l.useContext)(m),h=s.Sheader,c=s.styleProps;return l.default.createElement(h,(0,o.default)({className:r},c,n),e)},x.Content=function(t){var e=t.children,i=t.className,n=(0,a.default)(t,["children","className"]),r=(0,u.default)(f,i),s=(0,l.useContext)(m),h=s.Scontent,c=s.styleProps;return l.default.createElement(h,(0,o.default)({className:r},c,n),e)},x.Group=function(t){var e=t.children,i=t.className,n=(0,a.default)(t,["children","className"]),r=(0,u.default)(f,i),s=(0,l.useContext)(m),h=s.Sgroup,c=s.styleProps;return l.default.createElement(h,(0,o.default)({className:r},c,n),e)},x.Close=function(t){var e=t.children,i=t.className,n=(0,a.default)(t,["children","className"]),r=(0,u.default)("pg-notification-close",i),s=(0,l.useContext)(m),h=s.Sclose,c=s.checkboxId,p=s.styleProps;return l.default.createElement(h,(0,o.default)({className:r,htmlFor:c},p,{role:"button","aria-label":"close"},n),e)},x};e.applyTheme=y;var w=y({},{},{});e.default=w},99245:function(t,e,i){t=i.nmd(t);var n=9007199254740991,r="[object Map]",s="[object Promise]",o="[object Set]",a="[object WeakMap]",h="[object DataView]",l=/^\[object .+?Constructor\]$/,u="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g,c="object"==typeof self&&self&&self.Object===Object&&self,p=u||c||Function("return this")(),d=e&&!e.nodeType&&e,f=d&&t&&!t.nodeType&&t,g=f&&f.exports===d;var v,m,y=Function.prototype,w=Object.prototype,b=p["__core-js_shared__"],z=function(){var t=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),x=y.toString,S=w.hasOwnProperty,N=w.toString,R=RegExp("^"+x.call(S).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),j=g?p.Buffer:void 0,E=w.propertyIsEnumerable,O=j?j.isBuffer:void 0,_=(v=Object.keys,m=Object,function(t){return v(m(t))}),W=$(p,"DataView"),M=$(p,"Map"),P=$(p,"Promise"),C=$(p,"Set"),k=$(p,"WeakMap"),B=!E.call({valueOf:1},"valueOf"),H=G(W),L=G(M),T=G(P),A=G(C),D=G(k);function F(t){if(!q(t)||function(t){return!!z&&z in t}(t))return!1;var e=Z(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(i){}return e}(t)?R:l;return e.test(G(t))}function $(t,e){var i=function(t,e){return null==t?void 0:t[e]}(t,e);return F(i)?i:void 0}var U=function(t){return N.call(t)};function G(t){if(null!=t){try{return x.call(t)}catch(e){}try{return t+""}catch(e){}}return""}function I(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Y(t)}(t)&&S.call(t,"callee")&&(!E.call(t,"callee")||"[object Arguments]"==N.call(t))}(W&&U(new W(new ArrayBuffer(1)))!=h||M&&U(new M)!=r||P&&U(P.resolve())!=s||C&&U(new C)!=o||k&&U(new k)!=a)&&(U=function(t){var e=N.call(t),i="[object Object]"==e?t.constructor:void 0,n=i?G(i):void 0;if(n)switch(n){case H:return h;case L:return r;case T:return s;case A:return o;case D:return a}return e});var X=Array.isArray;function Y(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!Z(t)}var V=O||function(){return!1};function Z(t){var e=q(t)?N.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}function q(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}t.exports=function(t){if(Y(t)&&(X(t)||"string"==typeof t||"function"==typeof t.splice||V(t)||I(t)))return!t.length;var e=U(t);if(e==r||e==o)return!t.size;if(B||function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||w)}(t))return!_(t).length;for(var i in t)if(S.call(t,i))return!1;return!0}},46312:function(t,e,i){"use strict";i.d(e,{e:function(){return N}});var n=i(67294),r=i(73935),s=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),o=function(){return o=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},o.apply(this,arguments)},a={width:"100%",height:"10px",top:"0px",left:"0px",cursor:"row-resize"},h={width:"10px",height:"100%",top:"0px",left:"0px",cursor:"col-resize"},l={width:"20px",height:"20px",position:"absolute"},u={top:o(o({},a),{top:"-5px"}),right:o(o({},h),{left:void 0,right:"-5px"}),bottom:o(o({},a),{top:void 0,bottom:"-5px"}),left:o(o({},h),{left:"-5px"}),topRight:o(o({},l),{right:"-10px",top:"-10px",cursor:"ne-resize"}),bottomRight:o(o({},l),{right:"-10px",bottom:"-10px",cursor:"se-resize"}),bottomLeft:o(o({},l),{left:"-10px",bottom:"-10px",cursor:"sw-resize"}),topLeft:o(o({},l),{left:"-10px",top:"-10px",cursor:"nw-resize"})},c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.onMouseDown=function(t){e.props.onResizeStart(t,e.props.direction)},e.onTouchStart=function(t){e.props.onResizeStart(t,e.props.direction)},e}return s(e,t),e.prototype.render=function(){return n.createElement("div",{className:this.props.className||"",style:o(o({position:"absolute",userSelect:"none"},u[this.props.direction]),this.props.replaceStyles||{}),onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart},this.props.children)},e}(n.PureComponent),p=function(){var t=function(e,i){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])},t(e,i)};return function(e,i){function n(){this.constructor=e}t(e,i),e.prototype=null===i?Object.create(i):(n.prototype=i.prototype,new n)}}(),d=function(){return d=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},d.apply(this,arguments)},f={width:"auto",height:"auto"},g=function(t,e,i){return Math.max(Math.min(t,i),e)},v=function(t,e){return Math.round(t/e)*e},m=function(t,e){return new RegExp(t,"i").test(e)},y=function(t){return Boolean(t.touches&&t.touches.length)},w=function(t,e,i){void 0===i&&(i=0);var n=e.reduce((function(i,n,r){return Math.abs(n-t)<Math.abs(e[i]-t)?r:i}),0),r=Math.abs(e[n]-t);return 0===i||r<i?e[n]:t},b=function(t){return"auto"===(t=t.toString())||t.endsWith("px")||t.endsWith("%")||t.endsWith("vh")||t.endsWith("vw")||t.endsWith("vmax")||t.endsWith("vmin")?t:t+"px"},z=function(t,e,i,n){if(t&&"string"===typeof t){if(t.endsWith("px"))return Number(t.replace("px",""));if(t.endsWith("%"))return e*(Number(t.replace("%",""))/100);if(t.endsWith("vw"))return i*(Number(t.replace("vw",""))/100);if(t.endsWith("vh"))return n*(Number(t.replace("vh",""))/100)}return t},x=["as","style","className","grid","snap","bounds","boundsByDirection","size","defaultSize","minWidth","minHeight","maxWidth","maxHeight","lockAspectRatio","lockAspectRatioExtraWidth","lockAspectRatioExtraHeight","enable","handleStyles","handleClasses","handleWrapperStyle","handleWrapperClass","children","onResizeStart","onResize","onResizeStop","handleComponent","scale","resizeRatio","snapGap"],S="__resizable_base__",N=function(t){function e(e){var i=t.call(this,e)||this;return i.ratio=1,i.resizable=null,i.parentLeft=0,i.parentTop=0,i.resizableLeft=0,i.resizableRight=0,i.resizableTop=0,i.resizableBottom=0,i.targetLeft=0,i.targetTop=0,i.appendBase=function(){if(!i.resizable||!i.window)return null;var t=i.parentNode;if(!t)return null;var e=i.window.document.createElement("div");return e.style.width="100%",e.style.height="100%",e.style.position="absolute",e.style.transform="scale(0, 0)",e.style.left="0",e.style.flex="0 0 100%",e.classList?e.classList.add(S):e.className+=S,t.appendChild(e),e},i.removeBase=function(t){var e=i.parentNode;e&&e.removeChild(t)},i.ref=function(t){t&&(i.resizable=t)},i.state={isResizing:!1,width:"undefined"===typeof(i.propsSize&&i.propsSize.width)?"auto":i.propsSize&&i.propsSize.width,height:"undefined"===typeof(i.propsSize&&i.propsSize.height)?"auto":i.propsSize&&i.propsSize.height,direction:"right",original:{x:0,y:0,width:0,height:0},backgroundStyle:{height:"100%",width:"100%",backgroundColor:"rgba(0,0,0,0)",cursor:"auto",opacity:0,position:"fixed",zIndex:9999,top:"0",left:"0",bottom:"0",right:"0"},flexBasis:void 0},i.onResizeStart=i.onResizeStart.bind(i),i.onMouseMove=i.onMouseMove.bind(i),i.onMouseUp=i.onMouseUp.bind(i),i}return p(e,t),Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.resizable?this.resizable.parentNode:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"window",{get:function(){return this.resizable&&this.resizable.ownerDocument?this.resizable.ownerDocument.defaultView:null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"propsSize",{get:function(){return this.props.size||this.props.defaultSize||f},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){var t=0,e=0;if(this.resizable&&this.window){var i=this.resizable.offsetWidth,n=this.resizable.offsetHeight,r=this.resizable.style.position;"relative"!==r&&(this.resizable.style.position="relative"),t="auto"!==this.resizable.style.width?this.resizable.offsetWidth:i,e="auto"!==this.resizable.style.height?this.resizable.offsetHeight:n,this.resizable.style.position=r}return{width:t,height:e}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"sizeStyle",{get:function(){var t=this,e=this.props.size,i=function(e){if("undefined"===typeof t.state[e]||"auto"===t.state[e])return"auto";if(t.propsSize&&t.propsSize[e]&&t.propsSize[e].toString().endsWith("%")){if(t.state[e].toString().endsWith("%"))return t.state[e].toString();var i=t.getParentSize();return Number(t.state[e].toString().replace("px",""))/i[e]*100+"%"}return b(t.state[e])};return{width:e&&"undefined"!==typeof e.width&&!this.state.isResizing?b(e.width):i("width"),height:e&&"undefined"!==typeof e.height&&!this.state.isResizing?b(e.height):i("height")}},enumerable:!1,configurable:!0}),e.prototype.getParentSize=function(){if(!this.parentNode)return this.window?{width:this.window.innerWidth,height:this.window.innerHeight}:{width:0,height:0};var t=this.appendBase();if(!t)return{width:0,height:0};var e=!1,i=this.parentNode.style.flexWrap;"wrap"!==i&&(e=!0,this.parentNode.style.flexWrap="wrap"),t.style.position="relative",t.style.minWidth="100%",t.style.minHeight="100%";var n={width:t.offsetWidth,height:t.offsetHeight};return e&&(this.parentNode.style.flexWrap=i),this.removeBase(t),n},e.prototype.bindEvents=function(){this.window&&(this.window.addEventListener("mouseup",this.onMouseUp),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseleave",this.onMouseUp),this.window.addEventListener("touchmove",this.onMouseMove,{capture:!0,passive:!1}),this.window.addEventListener("touchend",this.onMouseUp))},e.prototype.unbindEvents=function(){this.window&&(this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.window.removeEventListener("mouseleave",this.onMouseUp),this.window.removeEventListener("touchmove",this.onMouseMove,!0),this.window.removeEventListener("touchend",this.onMouseUp))},e.prototype.componentDidMount=function(){if(this.resizable&&this.window){var t=this.window.getComputedStyle(this.resizable);this.setState({width:this.state.width||this.size.width,height:this.state.height||this.size.height,flexBasis:"auto"!==t.flexBasis?t.flexBasis:void 0})}},e.prototype.componentWillUnmount=function(){this.window&&this.unbindEvents()},e.prototype.createSizeForCssProperty=function(t,e){var i=this.propsSize&&this.propsSize[e];return"auto"!==this.state[e]||this.state.original[e]!==t||"undefined"!==typeof i&&"auto"!==i?t:"auto"},e.prototype.calculateNewMaxFromBoundary=function(t,e){var i,n,r=this.props.boundsByDirection,s=this.state.direction,o=r&&m("left",s),a=r&&m("top",s);if("parent"===this.props.bounds){var h=this.parentNode;h&&(i=o?this.resizableRight-this.parentLeft:h.offsetWidth+(this.parentLeft-this.resizableLeft),n=a?this.resizableBottom-this.parentTop:h.offsetHeight+(this.parentTop-this.resizableTop))}else"window"===this.props.bounds?this.window&&(i=o?this.resizableRight:this.window.innerWidth-this.resizableLeft,n=a?this.resizableBottom:this.window.innerHeight-this.resizableTop):this.props.bounds&&(i=o?this.resizableRight-this.targetLeft:this.props.bounds.offsetWidth+(this.targetLeft-this.resizableLeft),n=a?this.resizableBottom-this.targetTop:this.props.bounds.offsetHeight+(this.targetTop-this.resizableTop));return i&&Number.isFinite(i)&&(t=t&&t<i?t:i),n&&Number.isFinite(n)&&(e=e&&e<n?e:n),{maxWidth:t,maxHeight:e}},e.prototype.calculateNewSizeFromDirection=function(t,e){var i=this.props.scale||1,n=this.props.resizeRatio||1,r=this.state,s=r.direction,o=r.original,a=this.props,h=a.lockAspectRatio,l=a.lockAspectRatioExtraHeight,u=a.lockAspectRatioExtraWidth,c=o.width,p=o.height,d=l||0,f=u||0;return m("right",s)&&(c=o.width+(t-o.x)*n/i,h&&(p=(c-f)/this.ratio+d)),m("left",s)&&(c=o.width-(t-o.x)*n/i,h&&(p=(c-f)/this.ratio+d)),m("bottom",s)&&(p=o.height+(e-o.y)*n/i,h&&(c=(p-d)*this.ratio+f)),m("top",s)&&(p=o.height-(e-o.y)*n/i,h&&(c=(p-d)*this.ratio+f)),{newWidth:c,newHeight:p}},e.prototype.calculateNewSizeFromAspectRatio=function(t,e,i,n){var r=this.props,s=r.lockAspectRatio,o=r.lockAspectRatioExtraHeight,a=r.lockAspectRatioExtraWidth,h="undefined"===typeof n.width?10:n.width,l="undefined"===typeof i.width||i.width<0?t:i.width,u="undefined"===typeof n.height?10:n.height,c="undefined"===typeof i.height||i.height<0?e:i.height,p=o||0,d=a||0;if(s){var f=(u-p)*this.ratio+d,v=(c-p)*this.ratio+d,m=(h-d)/this.ratio+p,y=(l-d)/this.ratio+p,w=Math.max(h,f),b=Math.min(l,v),z=Math.max(u,m),x=Math.min(c,y);t=g(t,w,b),e=g(e,z,x)}else t=g(t,h,l),e=g(e,u,c);return{newWidth:t,newHeight:e}},e.prototype.setBoundingClientRect=function(){if("parent"===this.props.bounds){var t=this.parentNode;if(t){var e=t.getBoundingClientRect();this.parentLeft=e.left,this.parentTop=e.top}}if(this.props.bounds&&"string"!==typeof this.props.bounds){var i=this.props.bounds.getBoundingClientRect();this.targetLeft=i.left,this.targetTop=i.top}if(this.resizable){var n=this.resizable.getBoundingClientRect(),r=n.left,s=n.top,o=n.right,a=n.bottom;this.resizableLeft=r,this.resizableRight=o,this.resizableTop=s,this.resizableBottom=a}},e.prototype.onResizeStart=function(t,e){if(this.resizable&&this.window){var i,n=0,r=0;if(t.nativeEvent&&function(t){return Boolean((t.clientX||0===t.clientX)&&(t.clientY||0===t.clientY))}(t.nativeEvent)?(n=t.nativeEvent.clientX,r=t.nativeEvent.clientY):t.nativeEvent&&y(t.nativeEvent)&&(n=t.nativeEvent.touches[0].clientX,r=t.nativeEvent.touches[0].clientY),this.props.onResizeStart)if(this.resizable)if(!1===this.props.onResizeStart(t,e,this.resizable))return;this.props.size&&("undefined"!==typeof this.props.size.height&&this.props.size.height!==this.state.height&&this.setState({height:this.props.size.height}),"undefined"!==typeof this.props.size.width&&this.props.size.width!==this.state.width&&this.setState({width:this.props.size.width})),this.ratio="number"===typeof this.props.lockAspectRatio?this.props.lockAspectRatio:this.size.width/this.size.height;var s=this.window.getComputedStyle(this.resizable);if("auto"!==s.flexBasis){var o=this.parentNode;if(o){var a=this.window.getComputedStyle(o).flexDirection;this.flexDir=a.startsWith("row")?"row":"column",i=s.flexBasis}}this.setBoundingClientRect(),this.bindEvents();var h={original:{x:n,y:r,width:this.size.width,height:this.size.height},isResizing:!0,backgroundStyle:d(d({},this.state.backgroundStyle),{cursor:this.window.getComputedStyle(t.target).cursor||"auto"}),direction:e,flexBasis:i};this.setState(h)}},e.prototype.onMouseMove=function(t){var e=this;if(this.state.isResizing&&this.resizable&&this.window){if(this.window.TouchEvent&&y(t))try{t.preventDefault(),t.stopPropagation()}catch(M){}var i=this.props,n=i.maxWidth,s=i.maxHeight,o=i.minWidth,a=i.minHeight,h=y(t)?t.touches[0].clientX:t.clientX,l=y(t)?t.touches[0].clientY:t.clientY,u=this.state,c=u.direction,p=u.original,d=u.width,f=u.height,g=this.getParentSize(),m=function(t,e,i,n,r,s,o){return n=z(n,t.width,e,i),r=z(r,t.height,e,i),s=z(s,t.width,e,i),o=z(o,t.height,e,i),{maxWidth:"undefined"===typeof n?void 0:Number(n),maxHeight:"undefined"===typeof r?void 0:Number(r),minWidth:"undefined"===typeof s?void 0:Number(s),minHeight:"undefined"===typeof o?void 0:Number(o)}}(g,this.window.innerWidth,this.window.innerHeight,n,s,o,a);n=m.maxWidth,s=m.maxHeight,o=m.minWidth,a=m.minHeight;var b=this.calculateNewSizeFromDirection(h,l),x=b.newHeight,S=b.newWidth,N=this.calculateNewMaxFromBoundary(n,s);this.props.snap&&this.props.snap.x&&(S=w(S,this.props.snap.x,this.props.snapGap)),this.props.snap&&this.props.snap.y&&(x=w(x,this.props.snap.y,this.props.snapGap));var R=this.calculateNewSizeFromAspectRatio(S,x,{width:N.maxWidth,height:N.maxHeight},{width:o,height:a});if(S=R.newWidth,x=R.newHeight,this.props.grid){var j=v(S,this.props.grid[0]),E=v(x,this.props.grid[1]),O=this.props.snapGap||0;S=0===O||Math.abs(j-S)<=O?j:S,x=0===O||Math.abs(E-x)<=O?E:x}var _={width:S-p.width,height:x-p.height};if(d&&"string"===typeof d)if(d.endsWith("%"))S=S/g.width*100+"%";else if(d.endsWith("vw")){S=S/this.window.innerWidth*100+"vw"}else if(d.endsWith("vh")){S=S/this.window.innerHeight*100+"vh"}if(f&&"string"===typeof f)if(f.endsWith("%"))x=x/g.height*100+"%";else if(f.endsWith("vw")){x=x/this.window.innerWidth*100+"vw"}else if(f.endsWith("vh")){x=x/this.window.innerHeight*100+"vh"}var W={width:this.createSizeForCssProperty(S,"width"),height:this.createSizeForCssProperty(x,"height")};"row"===this.flexDir?W.flexBasis=W.width:"column"===this.flexDir&&(W.flexBasis=W.height),(0,r.flushSync)((function(){e.setState(W)})),this.props.onResize&&this.props.onResize(t,c,this.resizable,_)}},e.prototype.onMouseUp=function(t){var e=this.state,i=e.isResizing,n=e.direction,r=e.original;if(i&&this.resizable){var s={width:this.size.width-r.width,height:this.size.height-r.height};this.props.onResizeStop&&this.props.onResizeStop(t,n,this.resizable,s),this.props.size&&this.setState(this.props.size),this.unbindEvents(),this.setState({isResizing:!1,backgroundStyle:d(d({},this.state.backgroundStyle),{cursor:"auto"})})}},e.prototype.updateSize=function(t){this.setState({width:t.width,height:t.height})},e.prototype.renderResizer=function(){var t=this,e=this.props,i=e.enable,r=e.handleStyles,s=e.handleClasses,o=e.handleWrapperStyle,a=e.handleWrapperClass,h=e.handleComponent;if(!i)return null;var l=Object.keys(i).map((function(e){return!1!==i[e]?n.createElement(c,{key:e,direction:e,onResizeStart:t.onResizeStart,replaceStyles:r&&r[e],className:s&&s[e]},h&&h[e]?h[e]:null):null}));return n.createElement("div",{className:a,style:o},l)},e.prototype.render=function(){var t=this,e=Object.keys(this.props).reduce((function(e,i){return-1!==x.indexOf(i)||(e[i]=t.props[i]),e}),{}),i=d(d(d({position:"relative",userSelect:this.state.isResizing?"none":"auto"},this.props.style),this.sizeStyle),{maxWidth:this.props.maxWidth,maxHeight:this.props.maxHeight,minWidth:this.props.minWidth,minHeight:this.props.minHeight,boxSizing:"border-box",flexShrink:0});this.state.flexBasis&&(i.flexBasis=this.state.flexBasis);var r=this.props.as||"div";return n.createElement(r,d({ref:this.ref,style:i,className:this.props.className},e),this.state.isResizing&&n.createElement("div",{style:this.state.backgroundStyle}),this.props.children,this.renderResizer())},e.defaultProps={as:"div",onResizeStart:function(){},onResize:function(){},onResizeStop:function(){},enable:{top:!0,right:!0,bottom:!0,left:!0,topRight:!0,bottomRight:!0,bottomLeft:!0,topLeft:!0},style:{},grid:[1,1],lockAspectRatio:!1,lockAspectRatioExtraWidth:0,lockAspectRatioExtraHeight:0,scale:1,resizeRatio:1,snapGap:0},e}(n.PureComponent)},42050:function(t,e,i){"use strict";i.d(e,{Z:function(){return p}});var n=i(94184),r=i.n(n),s=i(67294),o=i(76792);function a(t,e){let i=0;return s.Children.map(t,(t=>s.isValidElement(t)?e(t,i++):t))}var h=i(85893);function l(t,e,i){const n=(t-e)/(i-e)*100;return Math.round(1e3*n)/1e3}function u({min:t,now:e,max:i,label:n,visuallyHidden:s,striped:o,animated:a,className:u,style:c,variant:p,bsPrefix:d,...f},g){return(0,h.jsx)("div",{ref:g,...f,role:"progressbar",className:r()(u,`${d}-bar`,{[`bg-${p}`]:p,[`${d}-bar-animated`]:a,[`${d}-bar-striped`]:a||o}),style:{width:`${l(e,t,i)}%`,...c},"aria-valuenow":e,"aria-valuemin":t,"aria-valuemax":i,children:s?(0,h.jsx)("span",{className:"visually-hidden",children:n}):n})}const c=s.forwardRef((({isChild:t,...e},i)=>{if(e.bsPrefix=(0,o.vE)(e.bsPrefix,"progress"),t)return u(e,i);const{min:n,now:l,max:c,label:p,visuallyHidden:d,striped:f,animated:g,bsPrefix:v,variant:m,className:y,children:w,...b}=e;return(0,h.jsx)("div",{ref:i,...b,className:r()(y,v),children:w?a(w,(t=>(0,s.cloneElement)(t,{isChild:!0}))):u({min:n,now:l,max:c,label:p,visuallyHidden:d,striped:f,animated:g,bsPrefix:v,variant:m},i)})}));c.displayName="ProgressBar",c.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1};var p=c},41070:function(t,e,i){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},n.apply(this,arguments)},r=this&&this.__rest||function(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(t);r<n.length;r++)e.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(t,n[r])&&(i[n[r]]=t[n[r]])}return i};e.__esModule=!0;var s=i(67294),o=i(65837),a=i(64643);e.default=function(t){var e=t.delay,i=void 0===e?0:e,h=t.type,l=void 0===h?"text":h,u=t.color,c=void 0===u?"#CDCDCD":u,p=t.rows,d=void 0===p?3:p,f=t.ready,g=t.firstLaunchOnly,v=t.children,m=t.className,y=t.showLoadingAnimation,w=t.customPlaceholder,b=r(t,["delay","type","color","rows","ready","firstLaunchOnly","children","className","showLoadingAnimation","customPlaceholder"]),z=s.useState(f),x=z[0],S=z[1],N=s.useRef(null);return s.useEffect((function(){g||!x||f?f&&(N.current&&window.clearTimeout(N.current),x||S(!0)):i&&i>0?N.current=window.setTimeout((function(){S(!1)}),i):S(!1)}),[g,x,f,i]),s.useEffect((function(){return function(){N.current&&window.clearTimeout(N.current)}}),[]),x?v:function(){var t=y?a.joinClassNames("show-loading-animation",m):m;if(w&&s.isValidElement(w)){var e=a.joinClassNames(w.props.className,t);return s.cloneElement(w,{className:e})}if(w)return w;var i=o[l];return s.createElement(i,n({},b,{color:c,rows:d,className:t}))}()}},76457:function(t,e,i){"use strict";var n=i(41070);e.Z=n.default},41985:function(t,e,i){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},n.apply(this,arguments)};e.__esModule=!0;var r=i(67294),s=i(72075),o=i(91817),a=i(64643),h={display:"flex"};e.default=function(t){var e=t.className,i=t.style,l=t.color,u=t.rows;return r.createElement("div",{className:a.joinClassNames("media-block",e),style:n(n({},h),i)},r.createElement(o.default,{color:l,style:{minHeight:55,width:55,minWidth:55,marginRight:10}}),r.createElement(s.default,{color:l,rows:u}))}},38588:function(t,e,i){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},n.apply(this,arguments)};e.__esModule=!0;var r=i(67294),s=i(64643);e.default=function(t){var e=t.className,i=t.style,o={backgroundColor:t.color,width:"100%",height:"100%",marginRight:10};return r.createElement("div",{className:s.joinClassNames("rect-shape",e),style:n(n({},o),i)})}},91817:function(t,e,i){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},n.apply(this,arguments)};e.__esModule=!0;var r=i(67294),s=i(64643);e.default=function(t){var e=t.className,i=t.style,o={backgroundColor:t.color,borderRadius:"500rem",width:"100%",height:"100%"};return r.createElement("div",{className:s.joinClassNames("round-shape",e),style:n(n({},o),i)})}},72075:function(t,e,i){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},n.apply(this,arguments)};e.__esModule=!0;var r=i(67294),s=i(72992),o=i(64643),a={width:"100%"},h=[97,100,94,90,98,95,98,40];e.default=function(t){var e=t.rows,i=t.lineSpacing,l=t.color,u=t.style,c=t.className,p=t.widths,d=void 0===p?h:p,f=function(t){return{maxHeight:100/(2*e-1)+"%",width:d[(t+d.length)%d.length]+"%"}};return r.createElement("div",{className:o.joinClassNames("text-block",c),style:n(n({},a),u)},Array.apply(null,Array(e)).map((function(t,e){return r.createElement(s.default,{color:l,style:f(e),lineSpacing:0!==e?i:0,key:e})})))}},72992:function(t,e,i){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,i=1,n=arguments.length;i<n;i++)for(var r in e=arguments[i])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},n.apply(this,arguments)};e.__esModule=!0;var r=i(67294),s=i(64643);e.default=function(t){var e=t.className,i=t.maxHeight,o=t.color,a=t.lineSpacing,h=void 0===a?"0.7em":a,l=t.style,u={maxHeight:i,width:"100%",height:"1em",backgroundColor:o,marginTop:h};return r.createElement("div",{className:s.joinClassNames("text-row",e),style:n(n({},u),l)})}},65837:function(t,e,i){"use strict";e.__esModule=!0,e.media=e.text=e.rect=e.round=e.textRow=e.MediaBlock=e.TextBlock=e.RectShape=e.RoundShape=e.TextRow=void 0;var n=i(72992);e.TextRow=n.default;var r=i(91817);e.RoundShape=r.default;var s=i(38588);e.RectShape=s.default;var o=i(72075);e.TextBlock=o.default;var a=i(41985);e.MediaBlock=a.default,e.textRow=n.default,e.round=r.default,e.rect=s.default,e.text=o.default,e.media=a.default},64643:function(t,e){"use strict";e.__esModule=!0,e.joinClassNames=void 0,e.joinClassNames=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.filter((function(t){return t})).join(" ")}}}]);