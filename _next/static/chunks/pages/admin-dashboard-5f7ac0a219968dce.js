(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{19344:function(e,t,n){"use strict";var r,i,a,s=n(71383),l=n(31513),u=n(85444),o=n(77740),c=n(85893),d=u.default.table(r||(r=(0,s.Z)(["\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]))),p=u.default.span(i||(i=(0,s.Z)(["\n  font-weight: 600;\n"]))),v=u.default.ul(a||(a=(0,s.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]))),h=function(e){var t=e.list,n=e.title,r=e.inline,i=void 0!==r&&r;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:n}),(1===(null===t||void 0===t?void 0:t.length)||i)&&(0,c.jsx)(p,{children:null===t||void 0===t?void 0:t.map((function(e,n){return(0,c.jsxs)("span",{children:[e,n!==t.length-1&&", "," "]},e)}))})]}),!i&&((null===t||void 0===t?void 0:t.length)||0)>1&&(0,c.jsx)("tr",{children:(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:(0,c.jsx)(v,{children:null===t||void 0===t?void 0:t.map((function(e){return(0,c.jsx)("li",{children:e},e)}))})})})})]})},f=function(e){return!!e&&(1!==e.length||""!==e[0])};t.Z=function(e){var t,n=e.children,r=e.request,i=e.teams,a=void 0===i?[]:i;if(!r)return null;var s,u="gold"===("gold"===r.serviceType?"gold":"silver")?r.devIdps:(0,l.LF)(r.realm),v="saml"!==r.protocol;return(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(d,{children:(0,c.jsxs)("tbody",{children:[r.usesTeam?(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Associated Team:"}),(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:r.team&&r.team.name||(null===(t=a.find((function(e){return String(e.id)===String(r.teamId)})))||void 0===t?void 0:t.name)})})]}):(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Are you accountable for this project?"}),(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:(s=r.projectLead,void 0===s?"":s?"Yes":"No")})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Client Protocol:"}),(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:v?"OpenID Connect":"SAML"})})]}),v&&(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Client Type:"}),(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:r.publicAccess?"Public":"Confidential"})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Usecase:"}),(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:o.F[r.authType||"browser-login"]})})]}),(0,c.jsxs)("tr",{children:[(0,c.jsx)("td",{children:"Project Name:"}),(0,c.jsx)("td",{children:(0,c.jsx)(p,{children:r.projectName})})]}),(0,c.jsx)(h,{list:u,title:"Identity Providers Required:",inline:!0}),f(r.devValidRedirectUris)&&(0,c.jsx)(h,{list:r.devValidRedirectUris,title:"Dev Redirect URIs:"}),f(r.testValidRedirectUris)&&(0,c.jsx)(h,{list:r.testValidRedirectUris,title:"Test Redirect URIs:"}),f(r.prodValidRedirectUris)&&(0,c.jsx)(h,{list:r.prodValidRedirectUris,title:"Prod Redirect URIs:"}),n]})})})}},66732:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ne}});var r,i=n(16835),a=n(50029),s=n(71383),l=n(87794),u=n.n(l),o=n(67294),c=n(85444),d=n(11163),p=n(96486),v=n(51436),h=n(64735),f=n(59912),x=n(96807),j=n(37226),m=n(76691),b=n(61165),g=n(63055),S=n(31513),E=n(59499),w=n(85330),y=n(4826),U=n(19344),C=n(35611),R=[{value:"draft",label:"Draft"},{value:"submitted",label:"Submitted"},{value:"pr",label:"PR"},{value:"prFailed",label:"PR Failed"},{value:"planned",label:"Planned"},{value:"applied",label:"Applied"},{value:"applyFailed",label:"Apply Failed"}],P=n(85893),T=(0,c.default)(C.ZP)(r||(r=(0,s.Z)(["\n  & label {\n    display: block;\n    font-weight: bold;\n  }\n"])));var Z,A=function(e){var t=e.request,n=e.onUpdate,r=(0,o.useState)(t.status),i=r[0],s=r[1],l="edit-metadata",c=function(){var e=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.Uw)({id:t.id,status:i});case 2:if(!n){e.next=5;break}return e.next=5,n();case 5:window.location.hash="#";case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){s(t.status)}),[t.id]);var d=(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(T,{label:"Integration Status",onChange:function(e){s(e.target.value)},value:i,children:R.map((function(e){return(0,P.jsx)("option",{value:e.value,children:e.label},e.value)}))})});return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(y.ZP,{variant:"bcPrimary",size:"small",onClick:function(){return window.location.hash=l},children:"Edit Metadata"}),(0,P.jsx)(b.Z,{id:l,content:d,onConfirm:c,icon:v.UJf,title:"Edit Metadata",closable:!0})]})},_=c.default.div(Z||(Z=(0,s.Z)(["\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function k(e){var t=e.currentUser,n=e.request,r=e.onUpdate;return n?(0,P.jsxs)(_,{children:[(0,P.jsx)("br",{}),(0,P.jsxs)(U.Z,{request:n,children:[(0,P.jsx)("br",{}),t.isAdmin&&(0,P.jsx)(A,{request:n,onUpdate:r})]})]}):null}var q,I=n(56839),O=n(70300),D=n(76944),F=n(83333),L=c.default.div(q||(q=(0,s.Z)(["\n  text-align: center;\n"]))),N=[{value:"all",text:"All Events"},{value:"request-pr-success",text:"REQUEST_PR_SUCCESS"},{value:"request-pr-failure",text:"REQUEST_PR_FAILURE"},{value:"request-plan-success",text:"REQUEST_PLAN_SUCCESS"},{value:"request-plan-failure",text:"REQUEST_PLAN_FAILURE"},{value:"request-apply-success",text:"REQUEST_APPLY_SUCCESS"},{value:"request-apply-failure",text:"REQUEST_APPLY_FAILURE"},{value:"request-create-success",text:"REQUEST_CREATE_SUCCESS"},{value:"request-create-failure",text:"REQUEST_CREATE_FAILURE"},{value:"request-update-success",text:"REQUEST_UPDATE_SUCCESS"},{value:"request-update-failure",text:"REQUEST_UPDATE_FAILURE"},{value:"request-delete-success",text:"REQUEST_DELETE_SUCCESS"},{value:"request-delete-failure",text:"REQUEST_DELETE_FAILURE"},{value:"email-submission-failure",text:"EMAIL_SUBMISSION_FAILURE"}];function K(e){var t=e.requestId,n=(0,o.useState)("all"),r=n[0],s=n[1],l=(0,o.useState)([]),c=l[0],d=l[1],p=(0,o.useState)(!1),v=p[0],h=p[1],f=(0,o.useState)(!1),x=f[0],j=f[1],m=function(){var e=(0,a.Z)(u().mark((function e(){var n,a,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return h(!0),e.next=5,(0,D.v)({requestId:t,eventCode:r});case 5:n=e.sent,a=(0,i.Z)(n,2),s=a[0],a[1]?j(!0):s&&d(s.rows),h(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(0,o.useEffect)((function(){m()}),[t,r]);var b;return x?null:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(O.Z,{children:[(0,P.jsx)("br",{}),(0,P.jsx)(C.ZP,{style:{display:"inline-block",width:"250px"},value:r,onChange:function(e){s(e.target.value)},children:(b=N,(0,P.jsx)(P.Fragment,{children:b.map((function(e){return(0,P.jsx)("option",{value:e.value,children:e.text},e.value)}))}))})]}),v?(0,P.jsx)(L,{children:(0,P.jsx)(I.rj,{color:"#000",height:45,width:45,wrapperClass:"d-block",visible:v})}):(0,P.jsx)(F.Z,{events:c})]})}var Q,M=n(12059);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,E.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=c.default.div(Q||(Q=(0,s.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"])));var W,G=function(e){var t=e.currentUser,n=e.selectedRequest,r=e.defaultTabKey,s=e.setActiveKey,l=e.setRows,o=e.activeKey,c=void 0===o?r:o;if(!n)return null;var d,p=n.environments,h=void 0===p?[]:p,f=n.status,x=n.bceidApproved,m=(0,S.Jx)(n),g=m&&h.includes("prod"),E=g&&"applied"!==f&&x,U="bceid-approval-modal";d=g&&"applied"===f&&!x?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("p",{children:"To begin the BCeID integration in production, Click Below."}),(0,P.jsx)(y.ZP,{onClick:function(){return window.location.hash=U},children:"Approve Production"})]}):E?(0,P.jsx)(P.Fragment,{children:(0,P.jsx)(M.Z,{integration:n,title:"The terraform script will take approximately 20 minutes to complete."})}):(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)("p",{children:["This request is ",x?"already approved.":"not ready to approve production."]})});var C=function(){var e=(0,a.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.WN)(z(z({},n),{},{bceidApproved:!0}),!0);case 2:t=e.sent,r=(0,i.Z)(t,2),r[1]||l();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(w.mQ,{activeKey:c,onChange:function(e){return s(e)},tabBarGutter:30,children:[(0,P.jsx)(w.OK,{tab:"Details",children:(0,P.jsx)(B,{children:(0,P.jsx)(k,{currentUser:t,request:n,onUpdate:l})})},"details"),m&&(0,P.jsx)(w.OK,{tab:"Prod Configuration",children:(0,P.jsxs)(B,{children:[(0,P.jsx)("br",{}),d]})},"prod-configuration"),(0,P.jsx)(w.OK,{tab:"Events",children:(0,P.jsx)(B,{children:(0,P.jsx)(K,{requestId:n.id})})},"events")]}),(0,P.jsx)(b.Z,{id:U,content:"Are you sure you want to approve this integration for production?",onConfirm:C,icon:v.eHv,title:"Approve Production"})]})},Y=c.default.div(W||(W=(0,s.Z)(["\n  text-align: center;\n"]))),J=[{value:["onestopauth"],label:"IDIR"},{value:["onestopauth-basic","onestopauth-business","onestopauth-both"],label:"BCeID"}],X=[{value:"active",label:"Active"},{value:"archived",label:"Deleted"}],H=[{value:"dev",label:"Dev"},{value:"test",label:"Test"},{value:"prod",label:"Prod"}],$=[{value:"silver",label:"Silver"},{value:"gold",label:"Gold"}],ee=[{value:5,text:"5 per page"},{value:10,text:"10 per page"},{value:15,text:"15 per page"},{value:30,text:"30 per page"},{value:50,text:"50 per page"},{value:100,text:"100 per page"}],te=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}];function ne(e){var t,n,r=e.session,s=(0,d.useRouter)(),l=(0,o.useState)(!1),c=l[0],E=l[1],w=(0,o.useState)(!1),y=w[0],U=w[1],C=(0,o.useState)([]),T=C[0],Z=C[1],A=(0,o.useState)(String((null===(t=s.query)||void 0===t?void 0:t.id)||"")),_=A[0],k=A[1],q=(0,o.useState)(0),I=q[0],O=q[1],D=(0,o.useState)(5),F=D[0],L=D[1],N=(0,o.useState)(1),K=N[0],Q=N[1],M=(0,o.useState)(Number(null===(n=s.query)||void 0===n?void 0:n.id)||void 0),V=M[0],z=M[1],B=(0,o.useState)([]),W=B[0],ne=B[1],re=(0,o.useState)([]),ie=re[0],ae=re[1],se=(0,o.useState)([]),le=se[0],ue=se[1],oe=(0,o.useState)([]),ce=oe[0],de=oe[1],pe=(0,o.useState)([]),ve=pe[0],he=pe[1],fe=(0,o.useState)("details"),xe=fe[0],je=fe[1],me=T.find((function(e){return e.id===V})),be=function(){var e=(0,a.Z)(u().mark((function e(){var t,n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,S.UT)(ie,W),n=(0,i.Z)(t,2),r=n[0],a=n[1],e.abrupt("return",(0,j.zD)({searchField:["id","projectName"],searchKey:_,order:[["updatedAt","desc"],["status","desc"]],limit:F,page:K,status:le.map((function(e){return e.value})),archiveStatus:ce.map((function(e){return e.value})),realms:r,environments:a,types:ve.map((function(e){return e.value}))}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ge=function(){var e=(0,a.Z)(u().mark((function e(){var t,n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.next=3,be();case 3:t=e.sent,n=(0,i.Z)(t,2),r=n[0],n[1]?U(!0):r&&(Z(r.rows),O(r.count)),E(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if((0,o.useEffect)((function(){z(void 0),ge()}),[_,F,K,le,ce,ie,W,ve]),(0,o.useEffect)((function(){var e;return(0,S.rn)(T)&&(e=setTimeout((0,a.Z)(u().mark((function t(){var n,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,be();case 2:n=t.sent,r=(0,i.Z)(n,2),a=r[0],r[1]?clearInterval(e):a&&(Z(a.rows),O(a.count));case 7:case"end":return t.stop()}}),t)}))),5e3)),function(){e&&clearInterval(e)}}),[T]),y)return null;var Se=function(e){return["applied"].includes((null===e||void 0===e?void 0:e.status)||"")},Ee=function(e){return!["pr","planned","submitted"].includes((null===e||void 0===e?void 0:e.status)||"")},we=function(){var e=(0,a.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&Se(t)){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,s.push("/request/".concat(t.id,"?status=").concat(t.status));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ye=function(){var e=(0,a.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.id&&Ee(t)){e.next=2;break}return e.abrupt("return");case 2:z(t.id),window.location.hash="delete-modal";case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ue=function(){var e=(0,a.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Ee){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,j.Jl)(V);case 4:return e.next=6,be();case 6:window.location.hash="#";case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,P.jsxs)(f.Z,{rules:te,children:[(0,P.jsx)(h.ZP,{cols:10,children:(0,P.jsxs)(h.ZP.Row,{collapse:"1200",gutter:[15,2],children:[(0,P.jsx)(h.ZP.Col,{span:6,children:(0,P.jsx)(x.Z,{filters:[{value:W,multiselect:!0,onChange:ne,options:H,label:"Environments"},{value:ie,multiselect:!0,onChange:ae,options:J,label:"IDPs"},{value:le,multiselect:!0,onChange:ue,options:R,label:"Workflow Status"},{value:ce,multiselect:!0,onChange:de,options:X,label:"Archive Status"},{value:ve,multiselect:!0,onChange:he,options:$,label:"Service Type"}],headers:[{name:"Request ID"},{name:"Project Name"},{name:"Request Status"},{name:"File Status"},{name:"Service Type"},{name:"Actions",style:{textAlign:"center",minWidth:"140px"}}],pagination:!0,pageLimits:ee,searchKey:_,searchPlaceholder:"Project ID or Name",limit:F,page:K,rowCount:I,onSearch:function(e){k(e),Q(1)},onEnter:function(e){k(e),Q(1)},onLimit:function(e){Q(1),L(e)},onPrev:Q,onNext:Q,loading:c,totalColSpan:15,searchColSpan:5,headerAlign:"bottom",headerGutter:[5,0],children:T.length>0?T.map((function(e){return(0,P.jsxs)("tr",{className:V===e.id?"active":"",onClick:function(){z(e.id),je("details")},children:[(0,P.jsx)("td",{children:(0,p.padStart)(String(e.id),8,"0")}),(0,P.jsx)("td",{children:e.projectName}),(0,P.jsx)("td",{children:(0,p.startCase)(e.status)}),(0,P.jsx)("td",{children:e.archived?"Deleted":"Active"}),(0,P.jsx)("td",{children:"gold"===e.serviceType?"Gold":"Silver"}),(0,P.jsx)("td",{children:(0,P.jsxs)(m.c4,{children:[(0,P.jsx)(m.Kk,{icon:v.Mdf,role:"button","aria-label":"events",onClick:function(t){t.stopPropagation(),z(e.id),je("events")},title:"Events"}),(0,P.jsx)(m.MO,{}),(0,P.jsx)(m.Kk,{disabled:!Se(e),icon:v.Xcf,role:"button","aria-label":"edit",onClick:function(){return we(e)},title:"Edit"}),(0,P.jsx)(m.MO,{}),(0,P.jsx)(m.Kk,{icon:v.$aW,role:"button","aria-label":"delete",onClick:function(){return ye(e)},disabled:!Ee(e),activeColor:g.Uo,title:"Delete"})]})})]},e.id)})):(0,P.jsx)("tr",{children:(0,P.jsx)("td",{colSpan:10,children:(0,P.jsx)(Y,{children:"No clients found."})})})})}),(0,P.jsx)(h.ZP.Col,{span:4,children:me&&(0,P.jsx)(G,{currentUser:r,selectedRequest:me,defaultTabKey:"details",setActiveKey:je,activeKey:xe,setRows:ge})})]})}),(0,P.jsx)(b.Z,{id:"delete-modal",content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:Ue,confirmText:"Delete",title:"Confirm Deletion"})]})}},25809:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return n(66732)}])}},function(e){e.O(0,[301,786,734,774,888,179],(function(){return t=25809,e(e.s=t);var t}));var t=e.O();_N_E=t}]);