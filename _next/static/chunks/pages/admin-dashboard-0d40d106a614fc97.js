(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{83333:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r,i=n(71383);n(67294);var a=n(71893),s=n(31513),l=n(85893),o=a.ZP.div(r||(r=(0,i.Z)(["\n  margin-top: 20px;\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function c(e){var t=e.events;return(0,l.jsx)(o,{children:t&&0!==t.length?t.map(function(e){var t;return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"Event Code: "}),e.eventCode]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"Created Time: "}),(t=e.createdAt,new Date(t).toLocaleString())]}),e.idirUserDisplayName&&(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:"Created By: "}),e.idirUserDisplayName]})}),e.details&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{children:(0,l.jsx)("strong",{children:"Details"})}),"request-update-success"===e.eventCode?(0,l.jsxs)(l.Fragment,{children:[(0,s.Sx)(e.details.changes),(0,l.jsx)("strong",{children:"Comment: "}),(0,l.jsx)("p",{children:e.details.comment})]}):(0,l.jsx)("pre",{children:(0,l.jsx)("code",{children:JSON.stringify(e.details||{},void 0,2)})})]}),(0,l.jsx)("hr",{})]},e.id)}):(0,l.jsx)("div",{children:"No events found"})})}},19344:function(e,t,n){"use strict";var r,i,a,s=n(71383),l=n(71893),o=n(77740),c=n(63005),u=n(85893),d=l.ZP.table(r||(r=(0,s.Z)(["\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]))),p=l.ZP.span(i||(i=(0,s.Z)(["\n  font-weight: 600;\n"]))),v=l.ZP.ul(a||(a=(0,s.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]))),h=function(e){var t=e.list,n=e.title,r=e.inline,i=void 0!==r&&r,a=e.testid;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:n}),((null==t?void 0:t.length)===1||i)&&(0,u.jsx)(p,{"data-testid":a,children:null==t?void 0:t.map(function(e,n){return(0,u.jsxs)("span",{children:[e,n!==t.length-1&&", "," "]},e)})})]}),!i&&((null==t?void 0:t.length)||0)>1&&(0,u.jsx)("tr",{children:(0,u.jsx)("td",{children:(0,u.jsx)(p,{children:(0,u.jsx)(v,{children:null==t?void 0:t.map(function(e){return(0,u.jsx)("li",{children:e},e)})})})})})]})};t.Z=function(e){var t,n,r,i,a,s,l,v,f=e.children,x=e.request,b=e.teams;if(!x)return null;var j=null!==(i=x.devIdps)&&void 0!==i?i:[],m="saml"!==x.protocol,g=j.map(function(e){return c.S[e]}),w="";x.usesTeam&&(w=(null===(v=(void 0===b?[]:b).find(function(e){return String(e.id)===String(x.teamId)}))||void 0===v?void 0:v.name)||x.team&&x.team.name);var y=(t=x.primaryEndUsers,n=x.primaryEndUsersOther,null==t?void 0:t.map(function(e){switch(e){case"livingInBC":return"People living in BC";case"businessInBC":return"People doing business/travel in BC";case"bcGovEmployees":return"BC Gov Employees";case"other":return"Other: ".concat(null!=n?n:"");default:return""}}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(d,{children:(0,u.jsxs)("tbody",{children:[w?(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Associated Team:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"associated-team",children:w})})]}):(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Are you accountable for this project?"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"you-accountable",children:void 0===(r=x.projectLead)?"":r?"Yes":"No"})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Client Protocol:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"client-protocol",children:m?"OpenID Connect":"SAML"})})]}),m&&(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Client Type:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"client-type-team",children:x.publicAccess?"Public":"Confidential"})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Usecase:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"use-case",children:o.F[x.authType||"browser-login"]})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Project Name:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"project-name",children:x.projectName})})]}),y&&(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Primary End Users:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"project-name",children:y.join(", ")})})]}),x.additionalRoleAttribute&&(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Additional Role Attribute:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"add-role-attrib",children:x.additionalRoleAttribute})})]}),(0,u.jsx)(h,{list:g,title:"Identity Providers Required:",inline:!0,testid:"idp-required"}),(null===(a=x.environments)||void 0===a?void 0:a.includes("dev"))&&(0,u.jsx)(h,{list:x.devValidRedirectUris,title:"Dev Redirect URIs:",testid:"dev-uri"}),(null===(s=x.environments)||void 0===s?void 0:s.includes("test"))&&(0,u.jsx)(h,{list:x.testValidRedirectUris,title:"Test Redirect URIs:",testid:"test-uri"}),(null===(l=x.environments)||void 0===l?void 0:l.includes("prod"))&&(0,u.jsx)(h,{list:x.prodValidRedirectUris,title:"Prod Redirect URIs:",testid:"prod-uri"}),f]})})})}},63005:function(e,t,n){"use strict";n.d(t,{S:function(){return r}});var r={idir:"IDIR",azureidir:"Azure IDIR",bceidbasic:"Basic BCeID",bceidbusiness:"Business BCeID",bceidboth:"Basic or Business BCeID",githubbcgov:"GitHub BC Gov",githubpublic:"GitHub",digitalcredential:"Digital Credential"}},77740:function(e,t,n){"use strict";n.d(t,{F:function(){return r}});var r={"browser-login":"Browser Login","service-account":"Service Account",both:"Browser Login & Service Account"}},80877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ed}});var r,i,a,s,l,o=n(16835),c=n(50029),u=n(87794),d=n.n(u),p=n(67294),v=n(11163),h=n(20070),f=n.n(h),x=n(59417),b=n(53442),j=n(37226),m=n(76691),g=n(61165),w=n(63055),y=n(31513),S=n(71383),E=n(71893),P=n(85330),C=n(99154),A=n(19344),U=n(4826),R=n(74379),Z=[{value:"draft",label:"Draft"},{value:"submitted",label:"Submitted"},{value:"pr",label:"PR"},{value:"prFailed",label:"PR Failed"},{value:"planned",label:"Planned"},{value:"applied",label:"Applied"},{value:"applyFailed",label:"Apply Failed"}],O=n(85893),D=function(e){var t,n=e.request,r=e.onUpdate,i=(0,p.useState)(n.status),a=i[0],s=i[1],l="edit-metadata",o=(t=(0,c.Z)(d().mark(function e(){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.Uw)({id:n.id,status:a});case 2:if(!r){e.next=5;break}return e.next=5,r();case 5:window.location.hash="#";case 6:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});(0,p.useEffect)(function(){s(n.status)},[n.id]);var u=(0,O.jsxs)("div",{"data-testid":"integration-status",children:[(0,O.jsx)("p",{style:{fontWeight:"bold"},children:"Integration Status"}),(0,O.jsx)(R.ZP,{className:"react-select-container",classNamePrefix:"select",options:Z.filter(function(e){return["submitted","planned"].includes(e.value)}),onChange:function(e){return s(e.value)},isSearchable:!0})]});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(U.default,{variant:"bcPrimary",size:"small",onClick:function(){return window.location.hash=l},children:"Edit Metadata"}),(0,O.jsx)(g.Z,{id:l,content:u,onConfirm:o,icon:x.UJf,title:"Edit Metadata",closable:!0})]})},T=E.ZP.div(r||(r=(0,S.Z)(["\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function I(e){var t=e.currentUser,n=e.request,r=e.onUpdate;return n?(0,O.jsxs)(T,{children:[(0,O.jsx)("br",{}),(0,O.jsxs)(A.Z,{request:n,children:[(0,O.jsx)("br",{}),t.isAdmin&&(0,O.jsx)(D,{request:n,onUpdate:r})]})]}):null}var _=n(59499),k=n(42894),F=n(70300),q=n(76944),N=n(83333);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach(function(t){(0,_.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var K=E.ZP.div(i||(i=(0,S.Z)(["\n  text-align: center;\n"]))),Q=[{value:"all",label:"All Events"},{value:"request-pr-success",label:"REQUEST_PR_SUCCESS"},{value:"request-pr-failure",label:"REQUEST_PR_FAILURE"},{value:"request-plan-success",label:"REQUEST_PLAN_SUCCESS"},{value:"request-plan-failure",label:"REQUEST_PLAN_FAILURE"},{value:"request-apply-success",label:"REQUEST_APPLY_SUCCESS"},{value:"request-apply-failure",label:"REQUEST_APPLY_FAILURE"},{value:"request-create-success",label:"REQUEST_CREATE_SUCCESS"},{value:"request-create-failure",label:"REQUEST_CREATE_FAILURE"},{value:"request-update-success",label:"REQUEST_UPDATE_SUCCESS"},{value:"request-update-failure",label:"REQUEST_UPDATE_FAILURE"},{value:"request-delete-success",label:"REQUEST_DELETE_SUCCESS"},{value:"request-delete-failure",label:"REQUEST_DELETE_FAILURE"},{value:"email-submission-failure",label:"EMAIL_SUBMISSION_FAILURE"}];function H(e){var t,n=e.requestId,r=(0,p.useState)("all"),i=r[0],a=r[1],s=(0,p.useState)([]),l=s[0],u=s[1],v=(0,p.useState)(!1),h=v[0],f=v[1],x=(0,p.useState)(!1),b=x[0],j=x[1],m=(t=(0,c.Z)(d().mark(function e(){var t,r,a;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return f(!0),e.next=5,(0,q.v)({requestId:n,eventCode:i});case 5:t=e.sent,a=(r=(0,o.Z)(t,2))[0],r[1]?j(!0):a&&u(a.rows),f(!1);case 11:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});(0,p.useEffect)(function(){m()},[n,i]);var g=function(e){a(e)};return b?null:(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(F.Z,{"data-testid":"events-dropdown",children:[(0,O.jsx)("br",{}),(0,O.jsx)(R.ZP,{options:Q,onChange:function(e){return g(e.value)},maxMenuHeight:300,styles:{control:function(e){return L(L({},e),{},{width:"250px"})},menu:function(e){return L(L({},e),{},{width:"250px"})}}})]}),h?(0,O.jsx)(K,{children:(0,O.jsx)(k.rj,{color:"#000",height:45,width:45,wrapperClass:"d-block",visible:h})}):(0,O.jsx)(N.Z,{events:l})]})}var G=n(12059);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach(function(t){(0,_.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var J=E.ZP.div(a||(a=(0,S.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]))),V=function(e){var t,n,r=e.integration,i=e.type,a=e.canApproveProd,s=e.awaitingTFComplete,l=e.onApproved;if(!r)return null;var u=f()(i),p="".concat(i,"-approval-modal"),v=!1;switch(i){case"bceid":v=(0,y.he)(r);break;case"github":v=(0,y.R5)(r);break;case"digitalCredential":v=(0,y.jt)(r)}n=a?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("p",{children:"To begin the ".concat(u," integration in production, Click Below.")}),(0,O.jsx)(U.default,{onClick:function(){return window.location.hash=p},disabled:s,children:"Approve Prod"})]}):s&&v?(0,O.jsx)(G.Z,{integration:r,title:"The terraform script will take approximately 20 minutes to complete."}):(0,O.jsx)("p",{children:"This integration has already been approved."});var h=(t=(0,c.Z)(d().mark(function e(){var t,n;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,j.WN)(z(z({},r),{},(0,_.Z)({},"".concat(i,"Approved"),!0)),!0);case 2:t=e.sent,n=(0,o.Z)(t,2)[1],l&&!n&&l();case 6:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(J,{children:[(0,O.jsx)("br",{}),n]}),(0,O.jsx)(g.Z,{id:p,content:"Are you sure you want to approve this integration for ".concat(u," production?"),onConfirm:h,icon:x.eHv,title:"".concat(u," Approve")})]})},W=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.bceidApproved;return(0,O.jsx)(V,{type:"bceid",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},Y=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.githubApproved;return(0,O.jsx)(V,{type:"github",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},X=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.digitalCredentialApproved;return(0,O.jsx)(V,{type:"digitalCredential",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},$=E.ZP.div(s||(s=(0,S.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]))),ee=function(e){var t=e.currentUser,n=e.integration,r=e.defaultTabKey,i=e.setActiveKey,a=e.setRows,s=e.activeKey;if(!n)return null;var l=n.environments,o=(void 0===l?[]:l).includes("prod"),c=(0,C.Jx)(n),u=(0,C.dV)(n),d=(0,C.S3)(n);return(0,O.jsx)(O.Fragment,{children:(0,O.jsxs)(P.mQ,{activeKey:void 0===s?r:s,onChange:function(e){return i(e)},tabBarGutter:30,children:[(0,O.jsx)(P.OK,{tab:"Details",children:(0,O.jsx)($,{children:(0,O.jsx)(I,{currentUser:t,request:n,onUpdate:a})})},"details"),c&&o&&(0,O.jsx)(P.OK,{tab:"BCeID Prod",children:(0,O.jsx)(W,{integration:n,onApproved:function(){return a()}})},"bceid-prod"),u&&o&&(0,O.jsx)(P.OK,{tab:"GitHub Prod",children:(0,O.jsx)(Y,{integration:n,onApproved:function(){return a()}})},"github-prod"),d&&o&&(0,O.jsx)(P.OK,{tab:"Digital Credential Prod",children:(0,O.jsx)(X,{integration:n,onApproved:function(){return a()}})},"vc-prod"),(0,O.jsx)(P.OK,{tab:"Events",children:(0,O.jsx)($,{children:(0,O.jsx)(H,{requestId:n.id})})},"events")]})})},et=n(46312),en=n(59912),er=n(49910),ei=E.ZP.div(l||(l=(0,S.Z)(["\n  height: 100%;\n  overflow: auto;\n"]))),ea=function(e){var t=e.leftPanel,n=e.rightPanel,r=e.showResizable;return e.children,(0,O.jsxs)(en.Z,{rules:er.F,children:[void 0===r||r?(0,O.jsx)(et.e,{style:{paddingTop:"2px",borderBottom:"3px solid black"},defaultSize:{width:"100%",height:.45*window.innerHeight},enable:{bottom:!0},handleStyles:{bottom:{bottom:0}},children:(0,O.jsx)(ei,{children:t&&t()})}):t&&t(),(0,O.jsx)("br",{}),n&&n()]})},es=[{value:"idir",label:"IDIR"},{value:"bceid",label:"BCeID"},{value:"github",label:"GitHub"},{value:"digitalcredential",label:"Digital Credential"}],el=[{value:"active",label:"Active"},{value:"archived",label:"Deleted"}],eo=[{value:"dev",label:"Dev"},{value:"test",label:"Test"},{value:"prod",label:"Prod"}],ec=[5,10,15,30,50,100];function eu(){return(0,O.jsx)("span",{style:{marginLeft:"40%"},children:"Actions"})}function ed(e){var t,n,r,i,a,s,l,u=e.session,h=(0,v.useRouter)(),S=(0,p.useState)(!1),E=S[0],P=S[1],C=(0,p.useState)(!1),A=C[0],U=C[1],R=(0,p.useState)([]),D=R[0],T=R[1],I=(0,p.useState)(String((null===(s=h.query)||void 0===s?void 0:s.id)||"")),_=I[0],k=I[1],F=(0,p.useState)(0),q=F[0],N=F[1],B=(0,p.useState)(5),L=B[0],K=B[1],Q=(0,p.useState)(1),H=Q[0],G=Q[1],M=(0,p.useState)(Number(null===(l=h.query)||void 0===l?void 0:l.id)||void 0),z=M[0],J=M[1],V=(0,p.useState)([]),W=V[0],Y=V[1],X=(0,p.useState)([]),$=X[0],et=X[1],en=(0,p.useState)([]),er=en[0],ei=en[1],ed=(0,p.useState)([]),ep=ed[0],ev=ed[1],eh=(0,p.useState)("details"),ef=eh[0],ex=eh[1],eb=D.find(function(e){return e.id===z}),ej=(t=(0,c.Z)(d().mark(function e(){var t,n,r,i,a;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,y.UT)($,W),r=(n=(0,o.Z)(t,3))[0],i=n[1],a=n[2],e.abrupt("return",(0,j.zD)({searchField:["id","projectName"],searchKey:_,order:[["updatedAt","desc"],["status","desc"]],limit:L,page:H,status:er.map(function(e){return e.value}),archiveStatus:ep.map(function(e){return e.value}),realms:i,environments:a,types:["gold"],devIdps:r}));case 2:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)}),em=(n=(0,c.Z)(d().mark(function e(){var t,n,r;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,ej();case 3:t=e.sent,r=(n=(0,o.Z)(t,2))[0],n[1]?U(!0):r&&(T(r.rows),N(r.count)),P(!1);case 9:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});if((0,p.useEffect)(function(){J(void 0),em()},[_,L,H,er,ep,$,W]),(0,p.useEffect)(function(){var e;return(0,y.rn)(D)&&(e=setTimeout((0,c.Z)(d().mark(function t(){var n,r,i;return d().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ej();case 2:n=t.sent,i=(r=(0,o.Z)(n,2))[0],r[1]?clearInterval(e):i&&(T(i.rows),N(i.count));case 7:case"end":return t.stop()}},t)})),5e3)),function(){e&&clearInterval(e)}},[D]),A)return null;var eg=function(e){return!e.archived&&["applied"].includes((null==e?void 0:e.status)||"")},ew=function(e){return!0!==e.archived&&!["pr","planned","submitted"].includes((null==e?void 0:e.status)||"")},ey=(r=(0,c.Z)(d().mark(function e(t){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!t.id||!eg(t))){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,h.push("/request/".concat(t.id,"?status=").concat(t.status));case 4:case"end":return e.stop()}},e)})),function(e){return r.apply(this,arguments)}),eS=(i=(0,c.Z)(d().mark(function e(t){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!t.id||!ew(t))){e.next=2;break}return e.abrupt("return");case 2:J(t.id),window.location.hash="delete-modal";case 4:case"end":return e.stop()}},e)})),function(e){return i.apply(this,arguments)}),eE=(a=(0,c.Z)(d().mark(function e(){return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(ew){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,j.Jl)(z);case 4:return e.next=6,ej();case 6:window.location.hash="#";case 7:case"end":return e.stop()}},e)})),function(){return a.apply(this,arguments)}),eP=function(e){J(e.cells[0].value),ex("details")};return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(ea,{leftPanel:function(){return(0,O.jsx)(b.Z,{searchPlaceholder:"Project ID or Name",headers:[{accessor:"id",Header:"Request ID"},{accessor:"projectName",Header:"Project Name"},{accessor:"status",Header:"Request Status"},{accessor:"archived",Header:"File Status"},{accessor:"actions",Header:(0,O.jsx)(eu,{}),disableSortBy:!0}],data:D.map(function(e){return{id:e.id,projectName:e.projectName,status:f()(e.status),archived:e.archived?"Deleted":"Active",environments:e.environments,actions:(0,O.jsxs)(m.c4,{children:[(0,O.jsx)(m.Kk,{icon:x.Mdf,role:"button","aria-label":"events",onClick:function(t){t.stopPropagation(),J(e.id),ex("events")},title:"Events"}),(0,O.jsx)(m.MO,{}),(0,O.jsx)(m.Kk,{disabled:!eg(e),icon:x.Xcf,role:"button","aria-label":"edit",onClick:function(){return ey(e)},title:"Edit"}),(0,O.jsx)(m.MO,{}),(0,O.jsx)(m.Kk,{icon:x.$aW,role:"button","aria-label":"delete",onClick:function(){return eS(e)},disabled:!ew(e),activeColor:w.Uo,title:"Delete from Keycloak"})]})}}),activateRow:eP,colfilters:[{value:W,multiselect:!0,onChange:Y,options:eo,label:"Environments"},{value:$,multiselect:!0,onChange:et,options:es,label:"IDPs"},{value:er,multiselect:!0,onChange:ei,options:Z,label:"Workflow Status"},{value:ep,multiselect:!0,onChange:ev,options:el,label:"Archive Status"}],showFilters:!0,loading:E,totalColSpan:15,searchColSpan:5,headerAlign:"bottom",headerGutter:[5,0],onPage:G,rowCount:q,searchKey:_,onSearch:function(e){k(e)},onEnter:function(e){k(e)},pageLimits:ec,limit:L,onLimit:function(e){G(1),K(e)},noDataFoundElement:(0,O.jsx)("div",{style:{textAlign:"center"},children:"No clients found."}),pagination:!0})},rightPanel:function(){return eb&&(0,O.jsx)(ee,{currentUser:u,integration:eb,defaultTabKey:"details",setActiveKey:ex,activeKey:ef,setRows:em})}}),(0,O.jsx)(g.Z,{id:"delete-modal","data-testid":"modal-delete-integration",content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:eE,confirmText:"Delete",title:"Confirm Deletion"})]})}},76944:function(e,t,n){"use strict";n.d(t,{v:function(){return o}});var r,i=n(50029),a=n(87794),s=n.n(a),l=n(21963),o=(r=(0,i.Z)(s().mark(function e(t){var n;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.e.post("events",t).then(function(e){return e.data});case 3:return n=e.sent,e.abrupt("return",[n,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return r.apply(this,arguments)})},25809:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return n(80877)}])}},function(e){e.O(0,[693,634,295,691,137,774,888,179],function(){return e(e.s=25809)}),_N_E=e.O()}]);