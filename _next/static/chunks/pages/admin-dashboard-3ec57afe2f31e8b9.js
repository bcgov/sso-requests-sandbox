(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{71431:function(e,t,n){var r,i=1/0,a=NaN,s=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,u=/^0o[0-7]+$/i,c="\\u0300-\\u036f\\ufe20-\\ufe23",d="[\\ud800-\\udfff]",f="["+c+"\\u20d0-\\u20f0]",p="\\ud83c[\\udffb-\\udfff]",v="[^\\ud800-\\udfff]",h="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",m="(?:"+f+"|"+p+")"+"?",j="[\\ufe0e\\ufe0f]?",b=j+m+("(?:\\u200d(?:"+[v,h,x].join("|")+")"+j+m+")*"),g="(?:"+[v+f+"?",f,h,x,d].join("|")+")",y=RegExp(p+"(?="+p+")|"+g+b,"g"),w=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),E=parseInt,S="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,C="object"==typeof self&&self&&self.Object===Object&&self,_=S||C||Function("return this")(),O=(r="length",function(e){return null==e?void 0:e[r]});function P(e){return w.test(e)}function R(e){return P(e)?function(e){var t=y.lastIndex=0;for(;y.test(e);)t++;return t}(e):O(e)}function A(e){return P(e)?function(e){return e.match(y)||[]}(e):function(e){return e.split("")}(e)}var N=Object.prototype.toString,T=_.Symbol,U=Math.ceil,k=Math.floor,Z=T?T.prototype:void 0,I=Z?Z.toString:void 0;function q(e,t){var n="";if(!e||t<1||t>9007199254740991)return n;do{t%2&&(n+=e),(t=k(t/2))&&(e+=e)}while(t);return n}function D(e){if("string"==typeof e)return e;if(M(e))return I?I.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}function F(e,t,n){var r=e.length;return n=void 0===n?r:n,!t&&n>=r?e:function(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var a=Array(i);++r<i;)a[r]=e[r+t];return a}(e,t,n)}function L(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function M(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==N.call(e)}function K(e){return e?(e=function(e){if("number"==typeof e)return e;if(M(e))return a;if(L(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=L(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=o.test(e);return n||u.test(e)?E(e.slice(2),n?2:8):l.test(e)?a:+e}(e))===i||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}e.exports=function(e,t,n){var r;e=null==(r=e)?"":D(r),t=function(e){var t=K(e),n=t%1;return t===t?n?t-n:t:0}(t);var i=t?R(e):0;return t&&i<t?function(e,t){var n=(t=void 0===t?" ":D(t)).length;if(n<2)return n?q(t,e):t;var r=q(t,U(e/R(t)));return P(t)?F(A(r),0,e).join(""):r.slice(0,e)}(t-i,n)+e:e}},68615:function(e,t,n){"use strict";var r,i,a,s=n(71383),l=n(85444),o=n(25506),u=n(76554),c=n(85893),d=l.default.table(r||(r=(0,s.Z)(["\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]))),f=l.default.span(i||(i=(0,s.Z)(["\n  font-weight: 600;\n"]))),p=l.default.ul(a||(a=(0,s.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]))),v=function(e){var t=e.list,n=e.title,r=e.inline,i=void 0!==r&&r;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:n}),(1===(null===t||void 0===t?void 0:t.length)||i)&&(0,c.jsx)(f,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,c.jsxs)("span",{children:[e,n!==t.length-1&&", "," "]},e)}))})]}),!i&&((null===t||void 0===t?void 0:t.length)||0)>1&&(0,c.jsx)("tr",{children:(0,c.jsx)("td",{children:(0,c.jsx)(f,{children:(0,c.jsx)(p,{children:null===t||void 0===t?void 0:t.map((function(e){return(0,c.jsx)("li",{children:e},e)}))})})})})]})};t.Z=function(e){var t,n,r,i=e.children,a=e.request,s=e.teams,l=void 0===s?[]:s;if(!a)return null;var p,h,x="gold"===("gold"===a.serviceType?"gold":"silver")?a.devIdps:u.GO[a.realm||"onestopauth"],m="saml"!==a.protocol,j="";return a.usesTeam&&(j=(null===(p=l.find((function(e){return String(e.id)===String(a.teamId)})))||void 0===p?void 0:p.name)||a.team&&a.team.name),(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d,{children:(0,c.jsxs)("tbody",{children:[j?(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Associated Team:"}),(0,c.jsx)("td",{children:(0,c.jsx)(f,{children:j})})]}):(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Are you accountable for this project?"}),(0,c.jsx)("td",{children:(0,c.jsx)(f,{children:(h=a.projectLead,void 0===h?"":h?"Yes":"No")})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Client Protocol:"}),(0,c.jsx)("td",{children:(0,c.jsx)(f,{children:m?"OpenID Connect":"SAML"})})]}),m&&(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Client Type:"}),(0,c.jsx)("td",{children:(0,c.jsx)(f,{children:a.publicAccess?"Public":"Confidential"})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Usecase:"}),(0,c.jsx)("td",{children:(0,c.jsx)(f,{children:o.F[a.authType||"browser-login"]})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Project Name:"}),(0,c.jsx)("td",{children:(0,c.jsx)(f,{children:a.projectName})})]}),a.additionalRoleAttribute&&(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Additional Role Attribute:"}),(0,c.jsx)("td",{children:(0,c.jsx)(f,{children:a.additionalRoleAttribute})})]}),(0,c.jsx)(v,{list:x,title:"Identity Providers Required:",inline:!0}),(null===(t=a.environments)||void 0===t?void 0:t.includes("dev"))&&(0,c.jsx)(v,{list:a.devValidRedirectUris,title:"Dev Redirect URIs:"}),(null===(n=a.environments)||void 0===n?void 0:n.includes("test"))&&(0,c.jsx)(v,{list:a.testValidRedirectUris,title:"Test Redirect URIs:"}),(null===(r=a.environments)||void 0===r?void 0:r.includes("prod"))&&(0,c.jsx)(v,{list:a.prodValidRedirectUris,title:"Prod Redirect URIs:"}),i]})})})}},94502:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return de}});var r,i=n(16835),a=n(50029),s=n(71383),l=n(87794),o=n.n(l),u=n(67294),c=n(85444),d=n(11163),f=n(71431),p=n.n(f),v=n(20070),h=n.n(v),x=n(59417),m=n(64735),j=n(17933),b=n(15338),g=n(89704),y=n(9392),w=n(63537),E=n(64575),S=n(23761),C=n(85330),_=n(77757),O=n(68615),P=n(4826),R=n(35611),A=[{value:"draft",label:"Draft"},{value:"submitted",label:"Submitted"},{value:"pr",label:"PR"},{value:"prFailed",label:"PR Failed"},{value:"planned",label:"Planned"},{value:"applied",label:"Applied"},{value:"applyFailed",label:"Apply Failed"}],N=n(85893),T=(0,c.default)(R.default)(r||(r=(0,s.Z)(["\n  & label {\n    display: block;\n    font-weight: bold;\n  }\n"])));var U,k=function(e){var t=e.request,n=e.onUpdate,r=(0,u.useState)(t.status),i=r[0],s=r[1],l="edit-metadata",c=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.Uw)({id:t.id,status:i});case 2:if(!n){e.next=5;break}return e.next=5,n();case 5:window.location.hash="#";case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){s(t.status)}),[t.id]);var d=(0,N.jsx)(N.Fragment,{children:(0,N.jsx)(T,{label:"Integration Status",onChange:function(e){s(e.target.value)},value:i,children:A.map((function(e){return(0,N.jsx)("option",{value:e.value,children:e.label},e.value)}))})});return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(P.default,{variant:"bcPrimary",size:"small",onClick:function(){return window.location.hash=l},children:"Edit Metadata"}),(0,N.jsx)(w.Z,{id:l,content:d,onConfirm:c,icon:x.UJf,title:"Edit Metadata",closable:!0})]})},Z=c.default.div(U||(U=(0,s.Z)(["\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function I(e){var t=e.currentUser,n=e.request,r=e.onUpdate;return n?(0,N.jsxs)(Z,{children:[(0,N.jsx)("br",{}),(0,N.jsxs)(O.Z,{request:n,children:[(0,N.jsx)("br",{}),t.isAdmin&&(0,N.jsx)(k,{request:n,onUpdate:r})]})]}):null}var q,D=n(56839),F=n(9431),L=n(69413),M=n(45349),K=c.default.div(q||(q=(0,s.Z)(["\n  text-align: center;\n"]))),Q=[{value:"all",text:"All Events"},{value:"request-pr-success",text:"REQUEST_PR_SUCCESS"},{value:"request-pr-failure",text:"REQUEST_PR_FAILURE"},{value:"request-plan-success",text:"REQUEST_PLAN_SUCCESS"},{value:"request-plan-failure",text:"REQUEST_PLAN_FAILURE"},{value:"request-apply-success",text:"REQUEST_APPLY_SUCCESS"},{value:"request-apply-failure",text:"REQUEST_APPLY_FAILURE"},{value:"request-create-success",text:"REQUEST_CREATE_SUCCESS"},{value:"request-create-failure",text:"REQUEST_CREATE_FAILURE"},{value:"request-update-success",text:"REQUEST_UPDATE_SUCCESS"},{value:"request-update-failure",text:"REQUEST_UPDATE_FAILURE"},{value:"request-delete-success",text:"REQUEST_DELETE_SUCCESS"},{value:"request-delete-failure",text:"REQUEST_DELETE_FAILURE"},{value:"email-submission-failure",text:"EMAIL_SUBMISSION_FAILURE"}];function B(e){var t=e.requestId,n=(0,u.useState)("all"),r=n[0],s=n[1],l=(0,u.useState)([]),c=l[0],d=l[1],f=(0,u.useState)(!1),p=f[0],v=f[1],h=(0,u.useState)(!1),x=h[0],m=h[1],j=function(){var e=(0,a.Z)(o().mark((function e(){var n,a,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return v(!0),e.next=5,(0,L.v)({requestId:t,eventCode:r});case 5:n=e.sent,a=(0,i.Z)(n,2),s=a[0],a[1]?m(!0):s&&d(s.rows),v(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){j()}),[t,r]);var b;return x?null:(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(F.Z,{children:[(0,N.jsx)("br",{}),(0,N.jsx)(R.default,{style:{display:"inline-block",width:"250px"},value:r,onChange:function(e){s(e.target.value)},children:(b=Q,(0,N.jsx)(N.Fragment,{children:b.map((function(e){return(0,N.jsx)("option",{value:e.value,children:e.text},e.value)}))}))})]}),p?(0,N.jsx)(K,{children:(0,N.jsx)(D.rj,{color:"#000",height:45,width:45,wrapperClass:"d-block",visible:p})}):(0,N.jsx)(M.Z,{events:c})]})}var H,$=n(59499),G=n(91832);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,$.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=c.default.div(H||(H=(0,s.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"])));var Y=function(e){var t=e.integration,n=e.type,r=e.canApproveProd,s=e.awaitingTFComplete,l=e.onApproved;if(!t)return null;var u,c=h()(n),d="".concat(n,"-approval-modal"),f="bceid"===n?(0,S.he)(t):(0,S.R5)(t);u=r?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)("p",{children:"To begin the ".concat(c," integration in production, Click Below.")}),(0,N.jsx)(P.default,{onClick:function(){return window.location.hash=d},disabled:s,children:"Approve Prod"})]}):s&&f?(0,N.jsx)(G.Z,{integration:t,title:"The terraform script will take approximately 20 minutes to complete."}):(0,N.jsx)("p",{children:"This integration has already been approved."});var p=function(){var e=(0,a.Z)(o().mark((function e(){var r,a,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.WN)(W(W({},t),{},(0,$.Z)({},"".concat(n,"Approved"),!0)),!0);case 2:r=e.sent,a=(0,i.Z)(r,2),s=a[1],l&&!s&&l();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(z,{children:[(0,N.jsx)("br",{}),u]}),(0,N.jsx)(w.Z,{id:d,content:"Are you sure you want to approve this integration for ".concat(c," production?"),onConfirm:p,icon:x.eHv,title:"".concat(c," Approve")})]})};var J=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=!t.bceidApproved||!1,a="applied"!==r;return(0,N.jsx)(Y,{type:"bceid",integration:t,canApproveProd:i,awaitingTFComplete:a,onApproved:n})};var X,ee=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=!t.githubApproved||!1,a="applied"!==r;return(0,N.jsx)(Y,{type:"github",integration:t,canApproveProd:i,awaitingTFComplete:a,onApproved:n})},te=c.default.div(X||(X=(0,s.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"])));var ne,re=function(e){var t=e.currentUser,n=e.integration,r=e.defaultTabKey,i=e.setActiveKey,a=e.setRows,s=e.activeKey,l=void 0===s?r:s;if(!n)return null;var o=n.environments,u=(void 0===o?[]:o).includes("prod"),c=(0,_.Jx)(n)&&u,d=(0,_.dV)(n)&&u;return(0,N.jsx)(N.Fragment,{children:(0,N.jsxs)(C.mQ,{activeKey:l,onChange:function(e){return i(e)},tabBarGutter:30,children:[(0,N.jsx)(C.OK,{tab:"Details",children:(0,N.jsx)(te,{children:(0,N.jsx)(I,{currentUser:t,request:n,onUpdate:a})})},"details"),c&&(0,N.jsx)(C.OK,{tab:"BCeID Prod",children:(0,N.jsx)(J,{integration:n,onApproved:function(){return a()}})},"bceid-prod"),d&&(0,N.jsx)(C.OK,{tab:"GitHub Prod",children:(0,N.jsx)(ee,{integration:n,onApproved:function(){return a()}})},"github-prod"),(0,N.jsx)(C.OK,{tab:"Events",children:(0,N.jsx)(te,{children:(0,N.jsx)(B,{requestId:n.id})})},"events")]})})},ie=c.default.div(ne||(ne=(0,s.Z)(["\n  text-align: center;\n"]))),ae=[{value:["onestopauth"],label:"IDIR"},{value:["onestopauth-basic","onestopauth-business","onestopauth-both"],label:"BCeID"}],se=[{value:"active",label:"Active"},{value:"archived",label:"Deleted"}],le=[{value:"dev",label:"Dev"},{value:"test",label:"Test"},{value:"prod",label:"Prod"}],oe=[{value:"silver",label:"Silver"},{value:"gold",label:"Gold"}],ue=[{value:5,text:"5 per page"},{value:10,text:"10 per page"},{value:15,text:"15 per page"},{value:30,text:"30 per page"},{value:50,text:"50 per page"},{value:100,text:"100 per page"}],ce=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}];function de(e){var t,n,r=e.session,s=(0,d.useRouter)(),l=(0,u.useState)(!1),c=l[0],f=l[1],v=(0,u.useState)(!1),C=v[0],_=v[1],O=(0,u.useState)([]),P=O[0],R=O[1],T=(0,u.useState)(String((null===(t=s.query)||void 0===t?void 0:t.id)||"")),U=T[0],k=T[1],Z=(0,u.useState)(0),I=Z[0],q=Z[1],D=(0,u.useState)(5),F=D[0],L=D[1],M=(0,u.useState)(1),K=M[0],Q=M[1],B=(0,u.useState)(Number(null===(n=s.query)||void 0===n?void 0:n.id)||void 0),H=B[0],$=B[1],G=(0,u.useState)([]),V=G[0],W=G[1],z=(0,u.useState)([]),Y=z[0],J=z[1],X=(0,u.useState)([]),ee=X[0],te=X[1],ne=(0,u.useState)([]),de=ne[0],fe=ne[1],pe=(0,u.useState)([]),ve=pe[0],he=pe[1],xe=(0,u.useState)("details"),me=xe[0],je=xe[1],be=P.find((function(e){return e.id===H})),ge=function(){var e=(0,a.Z)(o().mark((function e(){var t,n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,S.UT)(Y,V),n=(0,i.Z)(t,2),r=n[0],a=n[1],e.abrupt("return",(0,g.zD)({searchField:["id","projectName"],searchKey:U,order:[["updatedAt","desc"],["status","desc"]],limit:F,page:K,status:ee.map((function(e){return e.value})),archiveStatus:de.map((function(e){return e.value})),realms:r,environments:a,types:ve.map((function(e){return e.value}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ye=function(){var e=(0,a.Z)(o().mark((function e(){var t,n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,ge();case 3:t=e.sent,n=(0,i.Z)(t,2),r=n[0],n[1]?_(!0):r&&(R(r.rows),q(r.count)),f(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if((0,u.useEffect)((function(){$(void 0),ye()}),[U,F,K,ee,de,Y,V,ve]),(0,u.useEffect)((function(){var e;return(0,S.rn)(P)&&(e=setTimeout((0,a.Z)(o().mark((function t(){var n,r,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ge();case 2:n=t.sent,r=(0,i.Z)(n,2),a=r[0],r[1]?clearInterval(e):a&&(R(a.rows),q(a.count));case 7:case"end":return t.stop()}}),t)}))),5e3)),function(){e&&clearInterval(e)}}),[P]),C)return null;var we=function(e){return["applied"].includes((null===e||void 0===e?void 0:e.status)||"")},Ee=function(e){return!["pr","planned","submitted"].includes((null===e||void 0===e?void 0:e.status)||"")},Se=function(){var e=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&we(t)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,s.push("/request/".concat(t.id,"?status=").concat(t.status));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(){var e=(0,a.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&Ee(t)){e.next=2;break}return e.abrupt("return");case 2:$(t.id),window.location.hash="delete-modal";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_e=function(){var e=(0,a.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ee){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,g.Jl)(H);case 4:return e.next=6,ge();case 6:window.location.hash="#";case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,N.jsxs)(j.Z,{rules:ce,children:[(0,N.jsx)(m.ZP,{cols:10,children:(0,N.jsxs)(m.ZP.Row,{collapse:"1200",gutter:[15,2],children:[(0,N.jsx)(m.ZP.Col,{span:6,children:(0,N.jsx)(b.Z,{filters:[{value:V,multiselect:!0,onChange:W,options:le,label:"Environments"},{value:Y,multiselect:!0,onChange:J,options:ae,label:"IDPs"},{value:ee,multiselect:!0,onChange:te,options:A,label:"Workflow Status"},{value:de,multiselect:!0,onChange:fe,options:se,label:"Archive Status"},{value:ve,multiselect:!0,onChange:he,options:oe,label:"Service Type"}],headers:[{label:"Request ID"},{label:"Project Name"},{label:"Request Status"},{label:"File Status"},{label:"Service Type"},{label:"Actions",style:{textAlign:"center",minWidth:"140px"}}],pagination:!0,pageLimits:ue,searchKey:U,searchPlaceholder:"Project ID or Name",limit:F,page:K,rowCount:I,onSearch:function(e){k(e),Q(1)},onEnter:function(e){k(e),Q(1)},onLimit:function(e){Q(1),L(e)},onPrev:Q,onNext:Q,loading:c,totalColSpan:15,searchColSpan:5,headerAlign:"bottom",headerGutter:[5,0],children:P.length>0?P.map((function(e){return(0,N.jsxs)("tr",{className:H===e.id?"active":"",onClick:function(){$(e.id),je("details")},children:[(0,N.jsx)("td",{children:p()(String(e.id),8,"0")}),(0,N.jsx)("td",{children:e.projectName}),(0,N.jsx)("td",{children:h()(e.status)}),(0,N.jsx)("td",{children:e.archived?"Deleted":"Active"}),(0,N.jsx)("td",{children:"gold"===e.serviceType?"Gold":"Silver"}),(0,N.jsx)("td",{children:(0,N.jsxs)(y.c4,{children:[(0,N.jsx)(y.Kk,{icon:x.Mdf,role:"button","aria-label":"events",onClick:function(t){t.stopPropagation(),$(e.id),je("events")},title:"Events"}),(0,N.jsx)(y.MO,{}),(0,N.jsx)(y.Kk,{disabled:!we(e),icon:x.Xcf,role:"button","aria-label":"edit",onClick:function(){return Se(e)},title:"Edit"}),(0,N.jsx)(y.MO,{}),(0,N.jsx)(y.Kk,{icon:x.$aW,role:"button","aria-label":"delete",onClick:function(){return Ce(e)},disabled:!Ee(e),activeColor:E.Uo,title:"Delete"})]})})]},e.id)})):(0,N.jsx)("tr",{children:(0,N.jsx)("td",{colSpan:10,children:(0,N.jsx)(ie,{children:"No clients found."})})})})}),(0,N.jsx)(m.ZP.Col,{span:4,children:be&&(0,N.jsx)(re,{currentUser:r,integration:be,defaultTabKey:"details",setActiveKey:je,activeKey:me,setRows:ye})})]})}),(0,N.jsx)(w.Z,{id:"delete-modal",content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:_e,confirmText:"Delete",title:"Confirm Deletion"})]})}},25809:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return n(94502)}])},42050:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(94184),i=n.n(r),a=n(67294),s=n(76792);function l(e,t){let n=0;return a.Children.map(e,(e=>a.isValidElement(e)?t(e,n++):e))}var o=n(85893);function u(e,t,n){const r=(e-t)/(n-t)*100;return Math.round(1e3*r)/1e3}function c({min:e,now:t,max:n,label:r,visuallyHidden:a,striped:s,animated:l,className:c,style:d,variant:f,bsPrefix:p,...v},h){return(0,o.jsx)("div",{ref:h,...v,role:"progressbar",className:i()(c,`${p}-bar`,{[`bg-${f}`]:f,[`${p}-bar-animated`]:l,[`${p}-bar-striped`]:l||s}),style:{width:`${u(t,e,n)}%`,...d},"aria-valuenow":t,"aria-valuemin":e,"aria-valuemax":n,children:a?(0,o.jsx)("span",{className:"visually-hidden",children:r}):r})}const d=a.forwardRef((({isChild:e,...t},n)=>{if(t.bsPrefix=(0,s.vE)(t.bsPrefix,"progress"),e)return c(t,n);const{min:r,now:u,max:d,label:f,visuallyHidden:p,striped:v,animated:h,bsPrefix:x,variant:m,className:j,children:b,...g}=t;return(0,o.jsx)("div",{ref:n,...g,className:i()(j,x),children:b?l(b,(e=>(0,a.cloneElement)(e,{isChild:!0}))):c({min:r,now:u,max:d,label:f,visuallyHidden:p,striped:v,animated:h,bsPrefix:x,variant:m},n)})}));d.displayName="ProgressBar",d.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1};var f=d},41070:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)},i=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.__esModule=!0;var a=n(67294),s=n(65837),l=n(64643);t.default=function(e){var t=e.delay,n=void 0===t?0:t,o=e.type,u=void 0===o?"text":o,c=e.color,d=void 0===c?"#CDCDCD":c,f=e.rows,p=void 0===f?3:f,v=e.ready,h=e.firstLaunchOnly,x=e.children,m=e.className,j=e.showLoadingAnimation,b=e.customPlaceholder,g=i(e,["delay","type","color","rows","ready","firstLaunchOnly","children","className","showLoadingAnimation","customPlaceholder"]),y=a.useState(v),w=y[0],E=y[1],S=a.useRef(null);return a.useEffect((function(){h||!w||v?v&&(S.current&&window.clearTimeout(S.current),w||E(!0)):n&&n>0?S.current=window.setTimeout((function(){E(!1)}),n):E(!1)}),[h,w,v,n]),a.useEffect((function(){return function(){S.current&&window.clearTimeout(S.current)}}),[]),w?x:function(){var e=j?l.joinClassNames("show-loading-animation",m):m;if(b&&a.isValidElement(b)){var t=l.joinClassNames(b.props.className,e);return a.cloneElement(b,{className:t})}if(b)return b;var n=s[u];return a.createElement(n,r({},g,{color:d,rows:p,className:e}))}()}},76457:function(e,t,n){"use strict";var r=n(41070);t.Z=r.default},41985:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};t.__esModule=!0;var i=n(67294),a=n(72075),s=n(91817),l=n(64643),o={display:"flex"};t.default=function(e){var t=e.className,n=e.style,u=e.color,c=e.rows;return i.createElement("div",{className:l.joinClassNames("media-block",t),style:r(r({},o),n)},i.createElement(s.default,{color:u,style:{minHeight:55,width:55,minWidth:55,marginRight:10}}),i.createElement(a.default,{color:u,rows:c}))}},38588:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};t.__esModule=!0;var i=n(67294),a=n(64643);t.default=function(e){var t=e.className,n=e.style,s={backgroundColor:e.color,width:"100%",height:"100%",marginRight:10};return i.createElement("div",{className:a.joinClassNames("rect-shape",t),style:r(r({},s),n)})}},91817:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};t.__esModule=!0;var i=n(67294),a=n(64643);t.default=function(e){var t=e.className,n=e.style,s={backgroundColor:e.color,borderRadius:"500rem",width:"100%",height:"100%"};return i.createElement("div",{className:a.joinClassNames("round-shape",t),style:r(r({},s),n)})}},72075:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};t.__esModule=!0;var i=n(67294),a=n(72992),s=n(64643),l={width:"100%"},o=[97,100,94,90,98,95,98,40];t.default=function(e){var t=e.rows,n=e.lineSpacing,u=e.color,c=e.style,d=e.className,f=e.widths,p=void 0===f?o:f,v=function(e){return{maxHeight:100/(2*t-1)+"%",width:p[(e+p.length)%p.length]+"%"}};return i.createElement("div",{className:s.joinClassNames("text-block",d),style:r(r({},l),c)},Array.apply(null,Array(t)).map((function(e,t){return i.createElement(a.default,{color:u,style:v(t),lineSpacing:0!==t?n:0,key:t})})))}},72992:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};t.__esModule=!0;var i=n(67294),a=n(64643);t.default=function(e){var t=e.className,n=e.maxHeight,s=e.color,l=e.lineSpacing,o=void 0===l?"0.7em":l,u=e.style,c={maxHeight:n,width:"100%",height:"1em",backgroundColor:s,marginTop:o};return i.createElement("div",{className:a.joinClassNames("text-row",t),style:r(r({},c),u)})}},65837:function(e,t,n){"use strict";t.__esModule=!0,t.media=t.text=t.rect=t.round=t.textRow=t.MediaBlock=t.TextBlock=t.RectShape=t.RoundShape=t.TextRow=void 0;var r=n(72992);t.TextRow=r.default;var i=n(91817);t.RoundShape=i.default;var a=n(38588);t.RectShape=a.default;var s=n(72075);t.TextBlock=s.default;var l=n(41985);t.MediaBlock=l.default,t.textRow=r.default,t.round=i.default,t.rect=a.default,t.text=s.default,t.media=l.default},64643:function(e,t){"use strict";t.__esModule=!0,t.joinClassNames=void 0,t.joinClassNames=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return e.filter((function(e){return e})).join(" ")}}},function(e){e.O(0,[436,340,193,774,888,179],(function(){return t=25809,e(e.s=t);var t}));var t=e.O();_N_E=t}]);