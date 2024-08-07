"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[291],{63916:function(e,n,t){t.d(n,{Kk:function(){return k},MO:function(){return E},ZP:function(){return F},c4:function(){return S}});var r,i,o,a=t(16835),l=t(50029),c=t(59499),s=t(4730),d=t(71383),u=t(87794),p=t.n(u),h=t(67294),f=t(11163),g=t(71893),x=t(99603),v=t(59417),m=t(27008),j=t(12183),P=t(34798),b=t.n(P),Z=t(30274),y=t(24534),C=t(85893),w=["disabled","activeColor","isUnread"];function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}var S=g.ZP.div(r||(r=(0,d.Z)(["\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-right: 15px;\n  & > * {\n    margin-left: 15px;\n  }\n"]))),k=(0,g.ZP)(function(e){e.disabled,e.activeColor,e.isUnread;var n=(0,s.Z)(e,w);return(0,C.jsx)(x.G,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach(function(n){(0,c.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}({},n))})(i||(i=(0,d.Z)(["\n  cursor: ",";\n  ","\n  ",";\n"])),function(e){return e.disabled?"not-allowed":"pointer"},function(e){return e.disabled?"color: #CACACA;":"color: inherit; &:hover { color: ".concat(e.activeColor||"#000","; }")},function(e){return e.isUnread?"color: ".concat(j.Uo):""}),E=g.ZP.div(o||(o=(0,d.Z)(["\n  height: 40px;\n  border-right: 2px solid #e3e3e3;\n"])));function F(e){var n,t,r=e.request,i=e.onDelete,o=e.defaultActiveColor,c=e.children,s=e.editIconStyle,d=e.delIconStyle,u=(0,f.useRouter)(),g=(0,Z.$8)(r),x=(0,Z.uP)(r),P=(0,h.useState)(!1),w=P[0],O=P[1],E=(n=(0,l.Z)(p().mark(function e(n){return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.stopPropagation(),x){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,u.push("/request/".concat(r.id,"?status=").concat(r.status));case 5:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)}),F=(t=(0,l.Z)(p().mark(function e(){var n,t,o;return p().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!["pr","planned","submitted"].includes((null==r?void 0:r.status)||"")){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,m.Jl)(r.id);case 5:n=e.sent,(t=(0,a.Z)(n,2))[0],o=t[1],window.location.hash="#",i&&i(r,o);case 11:case"end":return e.stop()}},e)})),function(){return t.apply(this,arguments)});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(S,{children:[c,(0,C.jsx)(k,{disabled:!x,icon:v.Xcf,role:"button","data-testid":"action-button-edit","aria-label":"edit",onClick:E,activeColor:o,title:"Edit",size:"lg",style:void 0===s?{}:s}),(0,C.jsx)(k,{icon:v.$aW,role:"button","data-testid":"action-button-delete","aria-label":"delete",onClick:g?function(){r.id&&g&&O(!0)}:b(),disabled:!g,activeColor:j.Uo,title:"Delete",size:"lg",style:void 0===d?{}:d})]}),(0,C.jsx)(y.Z,{id:"delete-modal-".concat(null==r?void 0:r.id),projectName:r.projectName,onConfirm:F,title:"Confirm Deletion",content:"You are about to delete this integration request. This action cannot be undone.",openModal:w,handleCloseModal:function(){O(!1)}})]})}},24534:function(e,n,t){t.d(n,{Z:function(){return p}});var r=t(50029),i=t(87794),o=t.n(i),a=t(35166),l=t(67294),c=t(11915),s=t(70100),d=t.n(s),u=t(85893);function p(e){var n,t=e.id,i=e.onConfirm,s=e.title,p=e.content,h=e.projectName,f=e.openModal,g=e.handleCloseModal,x=(0,l.useState)(""),v=x[0],m=x[1],j=d()(h)===d()(v),P=(n=(0,r.Z)(o().mark(function e(){return o().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!j){e.next=3;break}return e.next=3,i();case 3:case"end":return e.stop()}},e)})),function(){return n.apply(this,arguments)});return(0,u.jsx)("div",{children:(0,u.jsx)(a.Z,{"data-testid":"modal-delete-integration",content:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{children:p}),(0,u.jsx)(c.default,{"data-testid":"delete-confirmation-input",label:h?"Please enter ".concat(h," below to confirm deletion."):"Please enter the project name below to confirm deletion.",value:v,onChange:function(e){return m(e.target.value)}})]}),onConfirm:P,title:s,confirmText:"Delete",buttonStyle:"danger",disableConfirm:!j,openModal:f,handleClose:g,id:t})})}},32098:function(e,n,t){t.d(n,{$:function(){return h},B:function(){return f}});var r,i,o=t(71383);t(67294);var a=t(71893),l=t(99603),c=t(59417),s=t(12183),d=t(85893),u=(0,a.ZP)(l.G)(r||(r=(0,o.Z)(["\n  margin-right: 10px;\n"]))),p=a.ZP.div(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"])));function h(e){var n=e.children;return(0,d.jsxs)(p,{children:[(0,d.jsx)(u,{icon:c.sqG,color:s.UH,size:"2x"}),(0,d.jsx)("span",{children:(0,d.jsx)("em",{children:n})})]})}function f(e){var n=e.children;return(0,d.jsxs)(p,{children:[(0,d.jsx)(u,{icon:c.eHv,color:s.Uo,size:"2x"}),(0,d.jsx)("span",{children:n})]})}},56784:function(e,n,t){var r,i=t(71383),o=t(71893).ZP.div(r||(r=(0,i.Z)(["\n  min-height: 44px;\n  border-bottom: 1px solid #707070;\n  margin-bottom: 12px;\n  padding-bottom: 5px;\n  overflow: wrap;\n"])));n.Z=o},47755:function(e,n,t){var r,i,o,a,l,c,s=t(59499),d=t(71383),u=t(85330),p=t(4826),h=t(67294),f=t(79521),g=t(64735),x=t(91050),v=t(71893),m=t(23157),j=t(56784),P=t(59417),b=t(99603),Z=t(34798),y=t.n(Z),C=t(11058),w=t(76457),O=t(65837),S=t(12183),k=t(246),E=t.n(k),F=t(85893);function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,r)}return t}function R(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach(function(n){(0,s.Z)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var T=E(),N=(0,v.ZP)(b.G)(r||(r=(0,d.Z)(["\n  color: '#000';\n"]))),D=(0,v.ZP)(x.Z)(i||(i=(0,d.Z)(["\n  margin: 0 !important;\n  & li {\n    margin: 0 !important;\n  }\n"]))),A=v.ZP.label(o||(o=(0,d.Z)(["\n  cursor: pointer;\n  font-weight: bold;\n  & * {\n    font-weight: normal;\n  }\n"]))),G=v.ZP.li(a||(a=(0,d.Z)(["\n  padding-left: 5px;\n  line-height: 40px;\n"]))),I=(0,v.ZP)(m.ZP)(l||(l=(0,d.Z)(["\n  width: 150px;\n  display: inline-block;\n"]))),L=v.ZP.div(c||(c=(0,d.Z)(["\n  display: grid;\n  grid-template-columns:\n    ","\n    &> * {\n    margin-right: 10px;\n    white-space: nowrap;\n  }\n"])),function(e){return"repeat(".concat(e.itemsLength,", 1fr);")});function U(e){var n=e.setFilter,t=e.options,r=e.setValue,i=e.gotoPage;return(0,F.jsx)("div",{"data-testid":"multi-select-col-filter",children:(0,F.jsx)(m.ZP,{className:"basic-multi-select",classNamePrefix:"select",onChange:function(e){n("status",e),r(e),i(0)},options:t,isMulti:!0})})}var z=function(e){var n=e.canPreviousPage,t=e.previousPage,r=e.canNextPage,i=e.nextPage,o=e.pageOptions,a=e.pageIndex;return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(x.Z.Item,{disabled:!n,onClick:function(){t()},children:"Previous"},"prev"),(0,F.jsx)(x.Z.Item,{disabled:!r,onClick:function(){i()},children:"Next"},"next"),(0,F.jsx)(G,{children:"".concat(a+1," of ").concat((void 0===o?[]:o).length)})]})};n.Z=function(e){var n=e.variant,t=e.headers,r=e.data,i=e.activateRow,o=void 0===i?y():i,a=e.loadMoreItem,l=void 0===a?y():a,c=e.hasMoreItem,s=e.searchLocation,d=e.colfilters,x=void 0===d?[]:d,v=e.showFilters,b=e.searchPlaceholder,Z=e.searchTooltip,k=e.totalColSpan,E=e.headerAlign,M=e.headerGutter,G=e.filterColSpan,B=e.searchColSpan,K=e.onPage,V=void 0===K?y():K,q=e.onEnter,H=void 0===q?y():q,W=e.rowCount,$=void 0===W?10:W,_=e.searchKey,Y=e.onSearch,J=void 0===Y?y():Y,Q=e.loading,X=e.loader,ee=void 0===X?(0,F.jsx)(F.Fragment,{}):X,en=e.onLimit,et=void 0===en?y():en,er=e.limit,ei=void 0===er?10:er,eo=e.noDataFoundElement,ea=void 0===eo?(0,F.jsx)("p",{children:"No Data Found."}):eo,el=e.pagination,ec=e.pageLimits,es=void 0===ec?[5,10,15,30,50,100]:ec,ed=e.rowSelectorKey,eu=void 0===ed?"id":ed,ep=e.readOnly,eh=e.activeSelector,ef=Math.ceil($/ei),eg=h.useMemo(function(){return t},[t]),ex=h.useMemo(function(){return r},[r]),ev=(0,h.useState)(),em=ev[0],ej=ev[1],eP=(0,h.useState)(void 0===_?"":_),eb=eP[0],eZ=eP[1],ey=(0,f.useTable)({columns:eg,data:ex,initialState:{pageIndex:0},manualPagination:!0,pageCount:0===ef?1:ef,autoResetPage:!1,autoResetSortBy:!1},f.useFilters,f.useGlobalFilter,f.useSortBy,f.usePagination),eC=ey.getTableProps,ew=ey.getTableBodyProps,eO=ey.headerGroups,eS=ey.prepareRow,ek=ey.page,eE=ey.canPreviousPage,eF=ey.canNextPage,eM=ey.pageOptions,eR=ey.nextPage,eT=ey.previousPage,eN=ey.state.pageIndex,eD=ey.setFilter,eA=ey.gotoPage,eG=$||ei;$>ei&&(eG=ei);var eI=(0,F.jsx)("td",{colSpan:100,children:(0,F.jsx)("div",{style:{height:"".concat(eG*(S.ZW+S.gM)-S.gM,"px"),paddingTop:"10px"},children:(0,F.jsx)(O.TextBlock,{rows:2*eG,color:"#CCC"})})}),eL=function(){return es.map(function(e){return{value:e,label:"".concat(e," per page")}})},eU=function(e){eA(0),et(e)},ez=function(e){o(e),ej(e)},eB=(0,F.jsx)(g.ZP.Col,{span:void 0===B?4:B,children:(0,F.jsx)(g.ZP,{cols:12,children:(0,F.jsxs)(g.ZP.Row,{gutter:[5,0],align:"center",children:[(0,F.jsx)(g.ZP.Col,{span:8,children:(0,F.jsx)(u.E1,{type:"text",size:"small",maxLength:"1000",placeholder:void 0===b?"Search...":b,value:eb,onChange:function(e){eZ(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&(H(eb),eA(0))}})}),(0,F.jsx)(g.ZP.Col,{span:4,children:(0,F.jsx)(C.Z,{content:void 0===Z?"":Z,children:(0,F.jsx)(p.default,{type:"button",size:"small",onClick:function(){J(eb),eA(0),ej(void 0)},children:"Search"})})})]})})}),eK=(0,F.jsx)(g.ZP.Col,{span:void 0===G?10:G,style:{textAlign:"right"},children:(0,F.jsx)(L,{itemsLength:x.length,children:x.map(function(e){return(0,F.jsx)(A,{children:e.multiselect?(0,F.jsxs)(F.Fragment,{children:[e.label,(0,F.jsx)(U,{setFilter:eD,options:e.options,setValue:e.onChange,gotoPage:eA})]}):(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)("div",{"data-testid":"select-col-filter",children:[e.label,(0,F.jsx)(m.ZP,{className:"basic-single",classNamePrefix:"select",options:e.options,onChange:function(n){return e.onChange&&e.onChange(n.value)},isSearchable:!0,defaultValue:e.options[0],value:e.options.find(function(n){return n.value===e.value})})]})})},e.label)})})}),eV=null,eq=null;return"left"===(void 0===s?"left":s)?(eV=eB,eq=eK):(eV=eK,eq=eB),(0,h.useEffect)(function(){V(eN+1),ej(void 0)},[eN]),(0,F.jsxs)(F.Fragment,{children:[void 0!==v&&v&&(0,F.jsx)(j.Z,{children:(0,F.jsx)(g.ZP,{cols:void 0===k?14:k,children:(0,F.jsxs)(g.ZP.Row,{collapse:"1160",gutter:void 0===M?[]:M,align:void 0===E?"center":E,children:[eV,eq]})})}),(0,F.jsx)(T,{loadMore:l,hasMore:void 0!==c&&c,loader:ee,children:(0,F.jsxs)(u.iA,R(R({variant:void 0===n?"medium":n},eC()),{},{readOnly:void 0!==ep&&ep,children:[(0,F.jsx)("thead",{children:eO.map(function(e){return(0,h.createElement)("tr",R(R({},e.getHeaderGroupProps()),{},{key:e.id}),e.headers.map(function(e){var n,t;return(0,h.createElement)("th",R(R({},e.getHeaderProps(e.getSortByToggleProps())),{},{key:e.id}),e.render("Header"),"\xa0",(0,F.jsx)("span",{children:(n=e.isSorted,t=e.isSortedDesc,n?(0,F.jsx)(N,{icon:t?P.u9C:P.foy,size:"sm"}):null)}))}))})}),(0,F.jsx)("tbody",R(R({},ew()),{},{children:(0,F.jsx)(w.Z,{ready:!Q,showLoadingAnimation:!0,customPlaceholder:eI,children:ek.length>0?ek.map(function(e){eS(e);var n=null!=eh?eh:null==em?void 0:em.original["".concat(eu)];return(0,h.createElement)("tr",R(R({},e.getRowProps()),{},{className:n===(null==e?void 0:e.original["".concat(eu)])?"active":"",key:null==e?void 0:e.id,onClick:function(){return ez(e)}}),e.cells.map(function(e){return(0,h.createElement)("td",R(R({},e.getCellProps()),{},{key:e.getCellProps().key}),e.render("Cell"))}))}):(0,F.jsx)("tr",{children:(0,F.jsx)("td",{colSpan:10,children:ea})})})}))]}))}),void 0!==el&&el&&$>0&&(0,F.jsx)(g.ZP,{cols:12,children:(0,F.jsxs)(g.ZP.Row,{collapse:"992",gutter:[],align:"center",children:[(0,F.jsx)(g.ZP.Col,{span:8,children:(0,F.jsx)(D,{children:(0,F.jsx)(z,{canNextPage:eF,nextPage:eR,canPreviousPage:eE,previousPage:eT,pageIndex:eN,pageOptions:eM})})}),(0,F.jsx)(g.ZP.Col,{span:4,children:(0,F.jsx)("div",{style:{textAlign:"right"},"data-testid":"page-select",children:(0,F.jsx)(I,{menuPosition:"fixed",defaultValue:eN||eL()[0],options:eL(),onChange:function(e){return eU(e.value)}})})})]})})]})}},30274:function(e,n,t){t.d(n,{$8:function(){return r},VV:function(){return a},Yr:function(){return l},te:function(){return o},uP:function(){return i}});var r=function(e){return!(!e||e.apiServiceAccount||e.archived||["planFailed","planned","applyFailed","submitted"].includes((null==e?void 0:e.status)||""))&&(!e.usesTeam||"admin"===e.userTeamRole)},i=function(e){return!!e&&!e.apiServiceAccount&&!e.archived&&!!["draft","applied"].includes(e.status||"")},o=function(e){return!(!e||Number(e.integrationCount)>0)&&"admin"===e.role},a=function(e){return!!e&&"admin"===e.role},l=function(e){return!(!e||e.apiServiceAccount||e.archived||["pr","planned","submitted"].includes((null==e?void 0:e.status)||""))&&(!e.usesTeam||"admin"===e.userTeamRole)}},22280:function(e,n,t){t.d(n,{F:function(){return p}});var r,i,o=t(71383);t(67294);var a=t(11163),l=t(64735),c=t(71893),s=t(85330),d=t(4256),u=t(85893),p=[{maxWidth:900,marginTop:0,marginLeft:10,marginRight:10,marginUnit:"px",horizontalAlign:"none"},{width:480,marginTop:0,marginLeft:2.5,marginRight:2.5,marginUnit:"rem",horizontalAlign:"none"}],h=c.ZP.div(r||(r=(0,o.Z)(["\n  overflow: auto;\n"]))),f=c.ZP.div(i||(i=(0,o.Z)(["\n  padding-top: 2px;\n"])));n.Z=function(e){var n=e.tab,t=e.leftPanel,r=e.rightPanel,i=e.children,o=(0,a.useRouter)(),c=(0,u.jsxs)(s.mQ,{onChange:function(e){o.replace("/my-dashboard/".concat(e))},activeKey:n,tabBarGutter:30,children:[(0,u.jsx)(s.OK,{tab:"My Projects"},"integrations"),(0,u.jsx)(s.OK,{tab:"My Teams"},"teams")]});return(0,u.jsx)(d.Z,{rules:p,children:i?(0,u.jsxs)(f,{children:[c,i]}):(0,u.jsx)(l.ZP,{cols:10,children:(0,u.jsxs)(l.ZP.Row,{collapse:"1100",gutter:[15,2],children:[(0,u.jsx)(l.ZP.Col,{span:6,children:(0,u.jsxs)(h,{children:[c,t&&t()]})}),(0,u.jsx)(l.ZP.Col,{span:4,children:r&&r()})]})})})}},24791:function(e,n,t){t.d(n,{Vs:function(){return h},fW:function(){return f},q1:function(){return p}});var r,i,o=t(71383),a=t(71893),l=t(99603),c=t(59417),s=t(85893),d=a.ZP.div(r||(r=(0,o.Z)(["\n  color: #a12622;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f2dede;\n"]))),u=a.ZP.div(i||(i=(0,o.Z)(["\n  color: #006fc4;\n  height: 60px;\n  padding-left: 20px;\n  padding-top: 16px;\n  padding-bottom: 22px;\n  weight: 700;\n  background-color: #f8f8f8;\n"]))),p=function(){return(0,s.jsxs)(d,{children:[(0,s.jsx)(l.G,{icon:c.RLE,title:"Unavailable"}),"\xa0 The system is unavailable at this moment. please refresh the page."]})},h=function(e){var n=e.message;return(0,s.jsxs)(u,{children:[(0,s.jsx)(l.G,{icon:c.sqG,title:"Information"}),"\xa0 ",n]})},f=function(e){var n=e.message;return(0,s.jsxs)(d,{children:[(0,s.jsx)(l.G,{icon:c.RLE,title:"Error"}),"\xa0 ",n]})}}}]);