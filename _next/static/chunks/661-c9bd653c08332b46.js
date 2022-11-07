"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[661],{9392:function(n,e,t){t.d(e,{Kk:function(){return C},MO:function(){return w},ZP:function(){return k},c4:function(){return Z}});var r,i,o,a=t(50029),s=t(71383),c=t(87794),l=t.n(c),u=t(11163),d=t(85444),p=t(99603),f=t(59417),h=t(63537),x=t(89704),m=t(64575),v=t(34798),g=t.n(v),b=t(50334),j=t(85893),Z=d.default.div(r||(r=(0,s.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 15px;\n  & > * {\n    margin-left: 15px;\n  }\n"]))),C=(0,d.default)(p.G)(i||(i=(0,s.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"])),(function(n){return n.disabled?"not-allowed":"pointer"}),(function(n){return n.disabled?"color: #CACACA;":"color: inherit; &:hover { color: ".concat(n.activeColor||"#000","; }")}),(function(n){return n.isUnread?"color: ".concat(m.Uo):""})),w=d.default.div(o||(o=(0,s.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"])));function k(n){var e=n.request,t=n.onDelete,r=n.defaultActiveColor,i=n.children,o=n.editIconStyle,s=void 0===o?{}:o,c=n.delIconStyle,d=void 0===c?{}:c,p=(0,u.useRouter)(),v=((e||{}).archived,(0,b.$8)(e)),w=(0,b.uP)(e),k="delete-modal-".concat(null===e||void 0===e?void 0:e.id),y=function(){var n=(0,a.Z)(l().mark((function n(t){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t.stopPropagation(),w){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,p.push("/request/".concat(e.id,"?status=").concat(e.status));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),F=function(){var n=(0,a.Z)(l().mark((function n(){return l().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!["pr","planned","submitted"].includes((null===e||void 0===e?void 0:e.status)||"")){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,(0,x.Jl)(e.id);case 5:window.location.hash="#",t&&t(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(Z,{children:[i,(0,j.jsx)(C,{disabled:!w,icon:f.Xcf,role:"button","aria-label":"edit",onClick:y,activeColor:r,title:"Edit",size:"lg",style:s}),(0,j.jsx)(C,{icon:f.$aW,role:"button","aria-label":"delete",onClick:v?function(){e.id&&v&&(window.location.hash=k)}:g(),disabled:!v,activeColor:m.Uo,title:"Delete",size:"lg",style:d})]}),(0,j.jsx)(h.Z,{id:k,content:"You are about to delete this integration request. This action cannot be undone.",onConfirm:F,title:"Confirm Deletion",confirmText:"Delete"})]})}},70065:function(n,e,t){t.d(e,{Z:function(){return f}});var r,i,o=t(71383),a=(t(67294),t(85444)),s=t(99603),c=t(59417),l=t(64575),u=t(85893),d=(0,a.default)(s.G)(r||(r=(0,o.Z)(["\n  margin-right: 10px;\n"]))),p=a.default.div(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));function f(n){var e=n.children;return(0,u.jsxs)(p,{children:[(0,u.jsx)(d,{icon:c.sqG,color:l.UH,size:"2x"}),(0,u.jsx)("span",{children:(0,u.jsx)("em",{children:e})})]})}},44832:function(n,e,t){var r,i=t(71383),o=t(85444);e.Z=o.default.ul(r||(r=(0,i.Z)(["\n  list-style-type: none;\n  margin: 0;\n  position: relative;\n\n  & li {\n    border-bottom: 1px solid #d4d4d4;\n    & svg.svg-inline--fa {\n      position: absolute;\n      right: 0;\n    }\n\n    & div.icon {\n      position: absolute;\n      right: 0;\n      bottom: 5px;\n    }\n  }\n"])))},91832:function(n,e,t){t.d(e,{s:function(){return T},Z:function(){return q}});var r,i,o,a,s,c,l=t(71383),u=t(42050),d=t(85444),p=t(64575),f=d.default.h3(r||(r=(0,l.Z)(["\n  color: #777777;\n  font-size: ",";\n  font-weight: bold;\n  min-height: 30px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 5px;\n  overflow: wrap;\n"])),p.CA),h=t(99603),x=t(59417),m=t(74150),v=d.default.p(i||(i=(0,l.Z)(["\n  font-size: ",";\n  color: "," !important;\n"])),p.KN,p.we),g=t(11752),b=t.n(g),j=t(44832),Z=t(70065),C=t(85893),w=(b()()||{}).publicRuntimeConfig,k=(void 0===w?{}:w).app_env,y=(0,d.default)(f)(o||(o=(0,l.Z)(["\n  border-bottom: none;\n  margin-top: 10px;\n"]))),F=(0,d.default)(y)(a||(a=(0,l.Z)(["\n  font-size: 14px;\n"]))),P=d.default.a(s||(s=(0,l.Z)(["\n  color: ",";\n"])),p.nc),G=(0,d.default)(u.Z)(c||(c=(0,l.Z)(["\n  margin-bottom: 10px;\n"]))),B=function(n){switch(n){case"submitted":return 0;case"pr":return 33;case"planned":return 66;default:return 100}};function T(n){var e=n.integration,t=e.status,r=e.updatedAt,i=function(n){switch(n){case"prFailed":case"planFailed":case"applyFailed":return!0;default:return!1}}(t),o=new Date(r||"").toLocaleString();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(G,{now:B(t),animated:!0,variant:i?"danger":void 0}),(0,C.jsxs)(v,{children:["Last updated at ",o]})]})}function q(n){var e=n.integration,t=n.title,r=e.status,i=e.prNumber,o=function(n){switch(n){case"submitted":return"Process request submitted...";case"pr":return"Pull request created...";case"planned":return"Terraform plan succeeded...";case"prFailed":case"planFailed":case"applyFailed":return"An error has occurred";default:return""}}(r),a=[(0,C.jsxs)("li",{children:["Process request submitted",(0,C.jsx)(h.G,{icon:x.f8k,color:"#00C45B"})]},"1")],s=function(n){switch(n){case"submitted":default:return 0;case"pr":return 1;case"prFailed":return 2;case"planned":return 3;case"planFailed":return 4;case"applied":return 5;case"applyFailed":return 6}}(r);if(s<1)a.push((0,C.jsxs)("li",{children:["Pull request created",(0,C.jsx)(h.G,{icon:x.LM3,color:"#B2B2B2",spin:!0})]},"2"));else if(2===s)a.push((0,C.jsxs)("li",{children:["Pull request creation failed",(0,C.jsx)(h.G,{icon:x.nYk,color:"#FF0000"})]},"2"));else{var c="production"===k?"https://github.com/bcgov/sso-terraform/pull/".concat(i):"https://github.com/bcgov/sso-terraform-dev/pull/".concat(i);a.push((0,C.jsxs)("li",{children:["Pull request created (",(0,C.jsx)(m.default,{external:!0,href:c,children:"link"}),")",(0,C.jsx)(h.G,{icon:x.f8k,color:"#00C45B"})]},"2"))}return s<3?a.push((0,C.jsxs)("li",{children:["Terraform plan succeeded",(0,C.jsx)(h.G,{icon:x.LM3,color:"#B2B2B2",spin:!0})]},"3")):4===s?a.push((0,C.jsxs)("li",{children:["Terraform plan failed",(0,C.jsx)(h.G,{icon:x.nYk,color:"#FF0000"})]},"3")):a.push((0,C.jsxs)("li",{children:["Terraform plan succeeded",(0,C.jsx)(h.G,{icon:x.f8k,color:"#00C45B"})]},"3")),s<5?a.push((0,C.jsxs)("li",{children:["Request processed",(0,C.jsx)(h.G,{icon:x.LM3,color:"#B2B2B2",spin:!0})]},"4")):6===s?a.push((0,C.jsxs)("li",{children:["Request failed",(0,C.jsx)(h.G,{icon:x.nYk,color:"#FF0000"})]},"4")):a.push((0,C.jsxs)("li",{children:["Request processed",(0,C.jsx)(h.G,{icon:x.f8k,color:"#00C45B"})]},"4")),(0,C.jsxs)(C.Fragment,{children:[t&&(0,C.jsx)(y,{children:t}),(0,C.jsx)(F,{children:o}),(0,C.jsx)(T,{integration:e}),(0,C.jsx)(j.Z,{children:a}),(0,C.jsxs)(Z.Z,{children:["If there is an error or the process takes longer than 20 mins then, please contact our SSO support team by"," ",(0,C.jsx)(P,{href:"https://chat.developer.gov.bc.ca/channel/sso",target:"_blank",title:"Rocket Chat",children:"Rocket.Chat"})," ","or"," ",(0,C.jsx)(P,{href:"mailto:bcgov.sso@gov.bc.ca",title:"Pathfinder SSO",target:"blank",children:"Email us"})," "]})]})}},50334:function(n,e,t){t.d(e,{$8:function(){return r},VV:function(){return a},Yr:function(){return s},te:function(){return o},uP:function(){return i}});var r=function(n){return!(!n||n.apiServiceAccount||n.archived||["pr","planned","submitted"].includes((null===n||void 0===n?void 0:n.status)||""))&&(!n.usesTeam||"admin"===n.userTeamRole)},i=function(n){return!(!n||n.apiServiceAccount||n.archived||!["draft","applied"].includes(n.status||""))},o=function(n){return!(!n||Number(n.integrationCount)>0)&&"admin"===n.role},a=function(n){return!!n&&"admin"===n.role},s=function(n){return!(!n||n.apiServiceAccount||n.archived||["pr","planned","submitted"].includes((null===n||void 0===n?void 0:n.status)||""))&&(!n.usesTeam||"admin"===n.userTeamRole)}},77506:function(n,e,t){t.d(e,{F:function(){return h}});var r,i,o=t(71383),a=t(67294),s=t(11163),c=t(64735),l=t(85444),u=t(85330),d=t(17933),p=t(77945),f=t(85893),h=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],x=l.default.div(r||(r=(0,o.Z)(["\n  overflow: auto;\n"]))),m=l.default.div(i||(i=(0,o.Z)(["\n  padding-top: 2px;\n"])));e.Z=function(n){var e,t=n.tab,r=n.leftPanel,i=n.rightPanel,o=n.children,l=(0,s.useRouter)(),v=(0,a.useContext)(p.SessionContext)||{},g=v.user,b=v.enableGold,j=null===g||void 0===g||null===(e=g.integrations)||void 0===e?void 0:e.find((function(n){return"silver"===n.serviceType})),Z=(0,f.jsxs)(u.mQ,{onChange:function(n){l.replace("/my-dashboard/".concat(n))},activeKey:t,tabBarGutter:30,children:[(0,f.jsx)(u.OK,{tab:"My Projects"},"integrations"),(0,f.jsx)(u.OK,{tab:"My Teams"},"teams"),b&&j&&(0,f.jsx)(u.OK,{tab:"*New - Silver to Gold Upgrade"},"s2g")]});return(0,f.jsx)(d.Z,{rules:h,children:o?(0,f.jsxs)(m,{children:[Z,o]}):(0,f.jsx)(c.ZP,{cols:10,children:(0,f.jsxs)(c.ZP.Row,{collapse:"1100",gutter:[15,2],children:[(0,f.jsx)(c.ZP.Col,{span:6,children:(0,f.jsxs)(x,{children:[Z,r&&r()]})}),(0,f.jsx)(c.ZP.Col,{span:4,children:i&&i()})]})})})}}}]);