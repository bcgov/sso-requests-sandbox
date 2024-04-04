(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[897],{83333:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r,i=n(71383);n(67294);var a=n(71893),s=n(31513),o=n(85893),l=a.ZP.div(r||(r=(0,i.Z)(["\n  margin-top: 20px;\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function c(e){var t=e.events;return(0,o.jsx)(l,{children:t&&0!==t.length?t.map(function(e){var t;return(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Event Code: "}),e.eventCode]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Created Time: "}),(t=e.createdAt,new Date(t).toLocaleString())]}),e.idirUserDisplayName&&(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{children:[(0,o.jsx)("strong",{children:"Created By: "}),e.idirUserDisplayName]})}),e.details&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{children:(0,o.jsx)("strong",{children:"Details"})}),"request-update-success"===e.eventCode?(0,o.jsxs)(o.Fragment,{children:[(0,s.Sx)(e.details.changes),(0,o.jsx)("strong",{children:"Comment: "}),(0,o.jsx)("p",{children:e.details.comment})]}):(0,o.jsx)("pre",{children:(0,o.jsx)("code",{children:JSON.stringify(e.details||{},void 0,2)})})]}),(0,o.jsx)("hr",{})]},e.id)}):(0,o.jsx)("div",{children:"No events found"})})}},19344:function(e,t,n){"use strict";var r,i,a,s=n(71383),o=n(71893),l=n(77740),c=n(63005),u=n(85893),d=o.ZP.table(r||(r=(0,s.Z)(["\n  font-size: unset;\n  & tr {\n    display: flex;\n    margin-bottom: 5px;\n    & > td {\n      border: none;\n      padding: 0 5px 0 0;\n    }\n  }\n"]))),p=o.ZP.span(i||(i=(0,s.Z)(["\n  font-weight: 600;\n"]))),v=o.ZP.ul(a||(a=(0,s.Z)(["\n  list-style: none;\n  margin: 0;\n  & li {\n    margin: 0;\n  }\n"]))),h=function(e){var t=e.list,n=e.title,r=e.inline,i=void 0!==r&&r,a=e.testid;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:n}),((null==t?void 0:t.length)===1||i)&&(0,u.jsx)(p,{"data-testid":a,children:null==t?void 0:t.map(function(e,n){return(0,u.jsxs)("span",{children:[e,n!==t.length-1&&", "," "]},e)})})]}),!i&&((null==t?void 0:t.length)||0)>1&&(0,u.jsx)("tr",{children:(0,u.jsx)("td",{children:(0,u.jsx)(p,{children:(0,u.jsx)(v,{children:null==t?void 0:t.map(function(e){return(0,u.jsx)("li",{children:e},e)})})})})})]})};t.Z=function(e){var t,n,r,i,a,s,o,v,f=e.children,x=e.request,b=e.teams;if(!x)return null;var j=null!==(i=x.devIdps)&&void 0!==i?i:[],m="saml"!==x.protocol,g=j.map(function(e){return c.S[e]}),w="";x.usesTeam&&(w=(null===(v=(void 0===b?[]:b).find(function(e){return String(e.id)===String(x.teamId)}))||void 0===v?void 0:v.name)||x.team&&x.team.name);var S=(t=x.primaryEndUsers,n=x.primaryEndUsersOther,null==t?void 0:t.map(function(e){switch(e){case"livingInBC":return"People living in BC";case"businessInBC":return"People doing business/travel in BC";case"bcGovEmployees":return"BC Gov Employees";case"other":return"Other: ".concat(null!=n?n:"");default:return""}}));return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(d,{children:(0,u.jsxs)("tbody",{children:[w?(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Associated Team:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"associated-team",children:w})})]}):(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Are you accountable for this project?"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"you-accountable",children:void 0===(r=x.projectLead)?"":r?"Yes":"No"})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Client Protocol:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"client-protocol",children:m?"OpenID Connect":"SAML"})})]}),m&&(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Client Type:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"client-type-team",children:x.publicAccess?"Public":"Confidential"})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Usecase:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"use-case",children:l.F[x.authType||"browser-login"]})})]}),(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Project Name:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"project-name",children:x.projectName})})]}),S&&(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Primary End Users:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"project-name",children:S.join(", ")})})]}),x.additionalRoleAttribute&&(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:"Additional Role Attribute:"}),(0,u.jsx)("td",{children:(0,u.jsx)(p,{"data-testid":"add-role-attrib",children:x.additionalRoleAttribute})})]}),(0,u.jsx)(h,{list:g,title:"Identity Providers Required:",inline:!0,testid:"idp-required"}),(null===(a=x.environments)||void 0===a?void 0:a.includes("dev"))&&(0,u.jsx)(h,{list:x.devValidRedirectUris,title:"Dev Redirect URIs:",testid:"dev-uri"}),(null===(s=x.environments)||void 0===s?void 0:s.includes("test"))&&(0,u.jsx)(h,{list:x.testValidRedirectUris,title:"Test Redirect URIs:",testid:"test-uri"}),(null===(o=x.environments)||void 0===o?void 0:o.includes("prod"))&&(0,u.jsx)(h,{list:x.prodValidRedirectUris,title:"Prod Redirect URIs:",testid:"prod-uri"}),f]})})})}},63005:function(e,t,n){"use strict";n.d(t,{S:function(){return r}});var r={idir:"IDIR",azureidir:"IDIR - MFA",bceidbasic:"Basic BCeID",bceidbusiness:"Business BCeID",bceidboth:"Basic or Business BCeID",githubbcgov:"GitHub BC Gov",githubpublic:"GitHub",digitalcredential:"Digital Credential"}},77740:function(e,t,n){"use strict";n.d(t,{F:function(){return r}});var r={"browser-login":"Browser Login","service-account":"Service Account",both:"Browser Login & Service Account"}},80877:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eS}});var r,i,a,s,o,l,c=n(50029),u=n(16835),d=n(71383),p=n(87794),v=n.n(p),h=n(67294),f=n(11163),x=n(20070),b=n.n(x),j=n(59417),m=n(53442),g=n(37226),w=n(76691),S=n(61165),y=n(63055),C=n(31513),E=n(71893),P=n(85330),A=n(99154),Z=n(19344),U=n(4826),O=n(23157),k=[{value:"draft",label:"Draft"},{value:"submitted",label:"Submitted"},{value:"planned",label:"Planned"},{value:"planFailed",label:"Plan Failed"},{value:"applied",label:"Applied"},{value:"applyFailed",label:"Apply Failed"}],R=n(85893),T=function(e){var t,n=e.request,r=e.onUpdate,i=(0,h.useState)(n.status),a=i[0],s=i[1],o="edit-metadata",l=(t=(0,c.Z)(v().mark(function e(){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.Uw)({id:n.id,status:a});case 2:if(!r){e.next=5;break}return e.next=5,r();case 5:window.location.hash="#";case 6:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});(0,h.useEffect)(function(){s(n.status)},[n.id]);var u=(0,R.jsxs)("div",{"data-testid":"integration-status",children:[(0,R.jsx)("p",{style:{fontWeight:"bold"},children:"Integration Status"}),(0,R.jsx)(O.ZP,{className:"react-select-container",classNamePrefix:"select",options:k.filter(function(e){return["draft","submitted"].includes(e.value)}),onChange:function(e){return s(e.value)},isSearchable:!0})]});return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(U.default,{variant:"bcPrimary",size:"small",onClick:function(){return window.location.hash=o},children:"Edit Metadata"}),(0,R.jsx)(S.Z,{id:o,content:u,onConfirm:l,icon:j.UJf,title:"Edit Metadata",closable:!0})]})},I=E.ZP.div(r||(r=(0,d.Z)(["\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n"])));function D(e){var t=e.currentUser,n=e.request,r=e.onUpdate;return n?(0,R.jsxs)(I,{children:[(0,R.jsx)("br",{}),(0,R.jsxs)(Z.Z,{request:n,children:[(0,R.jsx)("br",{}),t.isAdmin&&(0,R.jsx)(T,{request:n,onUpdate:r})]})]}):null}var _=n(59499),F=n(42894),q=n(70300),N=n(76944),B=n(83333);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function K(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(t){(0,_.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var H=E.ZP.div(i||(i=(0,d.Z)(["\n  text-align: center;\n"]))),M=[{value:"all",label:"All Events"},{value:"request-pr-success",label:"REQUEST_PR_SUCCESS"},{value:"request-pr-failure",label:"REQUEST_PR_FAILURE"},{value:"request-plan-success",label:"REQUEST_PLAN_SUCCESS"},{value:"request-plan-failure",label:"REQUEST_PLAN_FAILURE"},{value:"request-apply-success",label:"REQUEST_APPLY_SUCCESS"},{value:"request-apply-failure",label:"REQUEST_APPLY_FAILURE"},{value:"request-create-success",label:"REQUEST_CREATE_SUCCESS"},{value:"request-create-failure",label:"REQUEST_CREATE_FAILURE"},{value:"request-update-success",label:"REQUEST_UPDATE_SUCCESS"},{value:"request-update-failure",label:"REQUEST_UPDATE_FAILURE"},{value:"request-delete-success",label:"REQUEST_DELETE_SUCCESS"},{value:"request-delete-failure",label:"REQUEST_DELETE_FAILURE"},{value:"email-submission-failure",label:"EMAIL_SUBMISSION_FAILURE"}];function Q(e){var t,n=e.requestId,r=(0,h.useState)("all"),i=r[0],a=r[1],s=(0,h.useState)([]),o=s[0],l=s[1],d=(0,h.useState)(!1),p=d[0],f=d[1],x=(0,h.useState)(!1),b=x[0],j=x[1],m=(t=(0,c.Z)(v().mark(function e(){var t,r,a;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return f(!0),e.next=5,(0,N.v)({requestId:n,eventCode:i});case 5:t=e.sent,a=(r=(0,u.Z)(t,2))[0],r[1]?j(!0):a&&l(a.rows),f(!1);case 11:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});(0,h.useEffect)(function(){m()},[n,i]);var g=function(e){a(e)};return b?null:(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(q.Z,{"data-testid":"events-dropdown",children:[(0,R.jsx)("br",{}),(0,R.jsx)(O.ZP,{options:M,onChange:function(e){return g(e.value)},maxMenuHeight:300,styles:{control:function(e){return K(K({},e),{},{width:"250px"})},menu:function(e){return K(K({},e),{},{width:"250px"})}}})]}),p?(0,R.jsx)(H,{children:(0,R.jsx)(F.rj,{color:"#000",height:45,width:45,wrapperClass:"d-block",visible:p})}):(0,R.jsx)(B.Z,{events:o})]})}var G=n(44e3),z=n(9206);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach(function(t){(0,_.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var V=E.ZP.div(a||(a=(0,d.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]))),W=function(e){var t,n,r=e.integration,i=e.type,a=e.canApproveProd,s=e.awaitingTFComplete,o=e.onApproved;if(!r)return null;var l=b()(i),d="".concat(i,"-approval-modal"),p=!1;switch(i){case"bceid":p=(0,C.he)(r);break;case"github":p=(0,C.R5)(r);break;case"digitalCredential":p=(0,C.jt)(r)}n=a?(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)("p",{children:"To begin the ".concat(l," integration in production, Click Below.")}),(0,R.jsx)(U.default,{onClick:function(){return window.location.hash=d},disabled:s,children:"Approve Prod"})]}):s&&p?(0,R.jsx)("div",{style:{display:"inline-flex",background:"#FFCCCB",borderRadius:"5px"},children:(0,R.jsx)("div",{style:{padding:5},children:(0,R.jsxs)(G.B,{children:["Your request for ",i," approval could not be completed. Please"," ",(0,R.jsx)(z.rU,{external:!0,href:"mailto:bcgov.sso@gov.bc.ca",children:"contact the Pathfinder SSO Team"})]})})}):(0,R.jsx)("p",{children:"This integration has already been approved."});var h=(t=(0,c.Z)(v().mark(function e(){var t,n;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,g.WN)(J(J({},r),{},(0,_.Z)({},"".concat(i,"Approved"),!0)),!0);case 2:t=e.sent,n=(0,u.Z)(t,2)[1],o&&!n&&o();case 6:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(V,{children:[(0,R.jsx)("br",{}),n]}),(0,R.jsx)(S.Z,{id:d,content:"Are you sure you want to approve this integration for ".concat(l," production?"),onConfirm:h,icon:j.eHv,title:"".concat(l," Approve")})]})},X=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.bceidApproved;return(0,R.jsx)(W,{type:"bceid",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},$=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.githubApproved;return(0,R.jsx)(W,{type:"github",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},ee=function(e){var t=e.integration,n=e.onApproved;if(!t)return null;var r=t.status,i=t.digitalCredentialApproved;return(0,R.jsx)(W,{type:"digitalCredential",integration:t,canApproveProd:!i,awaitingTFComplete:"applied"!==r,onApproved:n})},et=E.ZP.div(s||(s=(0,d.Z)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n"]))),en=function(e){var t=e.currentUser,n=e.integration,r=e.defaultTabKey,i=e.setActiveKey,a=e.setRows,s=e.activeKey;if(!n)return null;var o=n.environments,l=(void 0===o?[]:o).includes("prod"),c=(0,A.Jx)(n),u=(0,A.dV)(n),d=(0,A.S3)(n);return(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)(P.mQ,{activeKey:void 0===s?r:s,onChange:function(e){return i(e)},tabBarGutter:30,children:[(0,R.jsx)(P.OK,{tab:"Details",children:(0,R.jsx)(et,{children:(0,R.jsx)(D,{currentUser:t,request:n,onUpdate:a})})},"details"),c&&l&&(0,R.jsx)(P.OK,{tab:"BCeID Prod",children:(0,R.jsx)(X,{integration:n,onApproved:function(){return a()}})},"bceid-prod"),u&&l&&(0,R.jsx)(P.OK,{tab:"GitHub Prod",children:(0,R.jsx)($,{integration:n,onApproved:function(){return a()}})},"github-prod"),d&&l&&(0,R.jsx)(P.OK,{tab:"Digital Credential Prod",children:(0,R.jsx)(ee,{integration:n,onApproved:function(){return a()}})},"vc-prod"),(0,R.jsx)(P.OK,{tab:"Events",children:(0,R.jsx)(et,{children:(0,R.jsx)(Q,{requestId:n.id})})},"events")]})})},er=n(46312),ei=n(59912),ea=n(49910),es=E.ZP.div(o||(o=(0,d.Z)(["\n  height: 100%;\n  overflow: auto;\n"]))),eo=function(e){var t=e.leftPanel,n=e.rightPanel,r=e.showResizable;return e.children,(0,R.jsxs)(ei.Z,{rules:ea.F,children:[void 0===r||r?(0,R.jsx)(er.e,{style:{paddingTop:"2px",borderBottom:"3px solid black"},defaultSize:{width:"100%",height:.45*window.innerHeight},enable:{bottom:!0},handleStyles:{bottom:{bottom:0}},children:(0,R.jsx)(es,{children:t&&t()})}):t&&t(),(0,R.jsx)("br",{}),n&&n()]})},el=n(3016),ec=n(35685),eu=n(91296),ed=n.n(eu),ep=n(69885),ev=n(34155),eh=[{value:"idir",label:"IDIR"},{value:"bceid",label:"BCeID"},{value:"github",label:"GitHub"},{value:"digitalcredential",label:"Digital Credential"}],ef=[{value:"active",label:"Active"},{value:"archived",label:"Deleted"}],ex=[{value:"dev",label:"Dev"},{value:"test",label:"Test"},{value:"prod",label:"Prod"}],eb=[5,10,15,30,50,100];function ej(){return(0,R.jsx)("span",{style:{marginLeft:"40%"},children:"Actions"})}var em=E.ZP.div(l||(l=(0,d.Z)(["\n  label {\n    margin-bottom: 0.5em;\n  }\n  .error-text {\n    margin-top: 0.5em;\n    color: red;\n  }\n"]))),eg=ed()(function(e,t){if(e.length<=2){t([]);return}(0,ep.$J)(e).then(function(e){var n=(0,u.Z)(e,1)[0];return t((null==n?void 0:n.map(function(e){return{value:e.id,label:e.mail}}))||[])})},300,{trailing:!0}),ew=function(e){var t,n,r=e.selectedIntegration,i=e.loadData,a=(0,h.useState)(!1),s=a[0],o=a[1],l=(0,h.useState)(!1),d=l[0],p=l[1],f=(0,h.useState)(""),x=f[0],b=f[1],j=(0,h.useState)(""),m=j[0],w=j[1],y=(t=(0,c.Z)(v().mark(function e(){var t,n,i;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,(0,el.Um)(String(r.teamId));case 3:t=e.sent,i=(n=(0,u.Z)(t,2))[0],n[1],o(!!i),p(!1);case 9:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});(0,h.useEffect)(function(){w(""),b(""),null!=r&&r.usesTeam&&y()},[null==r?void 0:r.id]),(0,h.useEffect)(function(){w("")},[x]);var C=(n=(0,c.Z)(v().mark(function e(){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!(null!=r&&r.usesTeam&&s)&&!x)){e.next=4;break}return w("Please select an email address to restore the integration to."),e.abrupt("return");case 4:if(!(null!=r&&r.apiServiceAccount)){e.next=9;break}return e.next=7,(0,el.NU)(Number(null==r?void 0:r.teamId),null==r?void 0:r.id);case 7:e.next=11;break;case 9:return e.next=11,(0,g.OS)(null==r?void 0:r.id,x);case 11:return e.next=13,i();case 13:E(),window.location.hash="#";case 15:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)}),E=function(){b(""),w("")};if(!r)return null;var P="";return P=d?"Checking if the team exists...":r.usesTeam&&s?"You are about to restore this integration.":r.apiServiceAccount&&!s?"Cannot restore this team account, team does not exist.":(0,R.jsxs)(em,{children:[(0,R.jsx)("label",{htmlFor:"restoration-email-select",children:"Select an email to assign the integration to."}),(0,R.jsx)(ec.Z,{loadOptions:eg,value:{value:x,label:x},onChange:function(e){return b((null==e?void 0:e.label)||"")},noOptionsMessage:function(){return"Start typing email..."},maxMenuHeight:120,placeholder:"Enter email address",id:"restoration-email-select"}),m&&(0,R.jsx)("p",{className:"error-text",children:"Select an email address"})]}),(0,R.jsx)(S.Z,{id:"restore-modal","data-testid":"modal-restore-integration",content:P,onConfirm:C,confirmText:"Restore",title:"Confirm Restoration",skipCloseOnConfirm:!0,showConfirm:!(r.apiServiceAccount&&!s),onClose:E})};function eS(e){var t,n,r,i,a,s,o,l,d=e.session,p=(0,f.useRouter)(),x=(0,h.useState)(!1),E=x[0],P=x[1],A=(0,h.useState)(!1),Z=A[0],U=A[1],O=(0,h.useState)([]),T=O[0],I=O[1],D=(0,h.useState)(String((null===(o=p.query)||void 0===o?void 0:o.id)||"")),_=D[0],F=D[1],q=(0,h.useState)(0),N=q[0],B=q[1],L=(0,h.useState)(5),K=L[0],H=L[1],M=(0,h.useState)(1),Q=M[0],G=M[1],z=(0,h.useState)(Number(null===(l=p.query)||void 0===l?void 0:l.id)||void 0),Y=z[0],J=z[1],V=(0,h.useState)([]),W=V[0],X=V[1],$=(0,h.useState)([]),ee=$[0],et=$[1],er=(0,h.useState)([]),ei=er[0],ea=er[1],es=(0,h.useState)([]),ec=es[0],eu=es[1],ed=(0,h.useState)("details"),ep=ed[0],em=ed[1],eg=T.find(function(e){return e.id===Y}),eS=(t=(0,c.Z)(v().mark(function e(){var t,n,r,i,a;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,C.UT)(ee,W),r=(n=(0,u.Z)(t,3))[0],i=n[1],a=n[2],e.abrupt("return",(0,g.zD)({searchField:["id","projectName"],searchKey:_,order:[["updatedAt","desc"],["status","desc"]],limit:K,page:Q,status:ei.map(function(e){return e.value}),archiveStatus:ec.map(function(e){return e.value}),realms:i,environments:a,types:["gold"],devIdps:r}));case 2:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)}),ey=(n=(0,c.Z)(v().mark(function e(){var t,n,r;return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return P(!0),e.next=3,eS();case 3:t=e.sent,r=(n=(0,u.Z)(t,2))[0],n[1]?U(!0):r&&(I(r.rows),B(r.count)),P(!1);case 9:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});if((0,h.useEffect)(function(){J(void 0),ey()},[_,K,Q,ei,ec,ee,W]),(0,h.useEffect)(function(){var e;return(0,C.rn)(T)&&(e=setTimeout((0,c.Z)(v().mark(function t(){var n,r,i;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,eS();case 2:n=t.sent,i=(r=(0,u.Z)(n,2))[0],r[1]?clearInterval(e):i&&(I(i.rows),B(i.count));case 7:case"end":return t.stop()}},t)})),5e3)),function(){e&&clearInterval(e)}},[T]),Z)return null;var eC=function(e){return!e.archived&&["applied"].includes((null==e?void 0:e.status)||"")&&!e.apiServiceAccount},eE=function(e){return!0!==e.archived&&!["pr","planned","submitted"].includes((null==e?void 0:e.status)||"")},eP=function(e){return!1!==e.archived&&!!["applied"].includes((null==e?void 0:e.status)||"")},eA=(r=(0,c.Z)(v().mark(function e(t){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!t.id||!eC(t))){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,p.push("/request/".concat(t.id,"?status=").concat(t.status));case 4:case"end":return e.stop()}},e)})),function(e){return r.apply(this,arguments)}),eZ=(i=(0,c.Z)(v().mark(function e(t){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!t.id||!eE(t))){e.next=2;break}return e.abrupt("return");case 2:J(t.id),window.location.hash="delete-modal";case 4:case"end":return e.stop()}},e)})),function(e){return i.apply(this,arguments)}),eU=(a=(0,c.Z)(v().mark(function e(t){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(!t.id||!eP(t))){e.next=2;break}return e.abrupt("return");case 2:J(t.id),window.location.hash="",ev.nextTick(function(){window.location.hash="restore-modal"});case 5:case"end":return e.stop()}},e)})),function(e){return a.apply(this,arguments)}),eO=(s=(0,c.Z)(v().mark(function e(){return v().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(eE){e.next=2;break}return e.abrupt("return");case 2:if(!(null!=eg&&eg.apiServiceAccount)){e.next=7;break}return e.next=5,(0,el.yN)(null==eg?void 0:eg.teamId,Y);case 5:e.next=9;break;case 7:return e.next=9,(0,g.Jl)(Y);case 9:return e.next=11,eS();case 11:window.location.hash="#";case 12:case"end":return e.stop()}},e)})),function(){return s.apply(this,arguments)}),ek=function(e){J(e.cells[0].value),em("details")};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(eo,{leftPanel:function(){return(0,R.jsx)(m.Z,{searchPlaceholder:"Project ID or Name",headers:[{accessor:"id",Header:"Request ID"},{accessor:"projectName",Header:"Project Name"},{accessor:"status",Header:"Request Status"},{accessor:"archived",Header:"File Status"},{accessor:"actions",Header:(0,R.jsx)(ej,{}),disableSortBy:!0}],data:T.map(function(e){return{id:e.id,projectName:e.projectName,status:b()(e.status),archived:e.archived?"Deleted":"Active",environments:e.environments,actions:(0,R.jsxs)(w.c4,{children:[(0,R.jsx)(w.Kk,{icon:j.Mdf,role:"button","aria-label":"events",onClick:function(t){t.stopPropagation(),J(e.id),em("events")},title:"Events"}),(0,R.jsx)(w.MO,{}),(0,R.jsx)(w.Kk,{disabled:!eC(e),icon:j.Xcf,role:"button","aria-label":"edit",onClick:function(){return eA(e)},title:"Edit"}),(0,R.jsx)(w.MO,{}),(0,R.jsx)(w.Kk,{icon:j.$aW,role:"button","aria-label":"delete",onClick:function(){return eZ(e)},disabled:!eE(e),activeColor:y.Uo,title:"Delete from Keycloak"}),(0,R.jsx)(w.MO,{}),(0,R.jsx)(w.Kk,{icon:j.pdr,role:"button","aria-label":"restore",onClick:function(){return eU(e)},disabled:!eP(e),activeColor:y.Uo,title:"Restore at Keycloak"})]})}}),activateRow:ek,colfilters:[{value:W,multiselect:!0,onChange:X,options:ex,label:"Environments"},{value:ee,multiselect:!0,onChange:et,options:eh,label:"IDPs"},{value:ei,multiselect:!0,onChange:ea,options:k,label:"Workflow Status"},{value:ec,multiselect:!0,onChange:eu,options:ef,label:"Archive Status"}],showFilters:!0,loading:E,totalColSpan:15,searchColSpan:5,headerAlign:"bottom",headerGutter:[5,0],onPage:G,rowCount:N,searchKey:_,onSearch:function(e){F(e)},onEnter:function(e){F(e)},pageLimits:eb,limit:K,onLimit:function(e){G(1),H(e)},noDataFoundElement:(0,R.jsx)("div",{style:{textAlign:"center"},children:"No clients found."}),pagination:!0})},rightPanel:function(){return eg&&(0,R.jsx)(en,{currentUser:d,integration:eg,defaultTabKey:"details",setActiveKey:em,activeKey:ep,setRows:ey})}}),(0,R.jsx)(S.Z,{id:"delete-modal","data-testid":"modal-delete-integration",content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:eO,confirmText:"Delete",title:"Confirm Deletion"}),(0,R.jsx)(ew,{selectedIntegration:eg,loadData:ey})]})}},76944:function(e,t,n){"use strict";n.d(t,{v:function(){return l}});var r,i=n(50029),a=n(87794),s=n.n(a),o=n(21963),l=(r=(0,i.Z)(s().mark(function e(t){var n;return s().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.e.post("events",t).then(function(e){return e.data});case 3:return n=e.sent,e.abrupt("return",[n,null]);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",[null,e.t0]);case 11:case"end":return e.stop()}},e,null,[[0,7]])})),function(e){return r.apply(this,arguments)})},25809:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin-dashboard",function(){return n(80877)}])}},function(e){e.O(0,[650,830,908,584,54,774,888,179],function(){return e(e.s=25809)}),_N_E=e.O()}]);