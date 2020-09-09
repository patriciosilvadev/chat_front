(this.webpackJsonpchat_front=this.webpackJsonpchat_front||[]).push([[10],{218:function(e,t,a){"use strict";var n,o=a(233),r=a.n(o),c=a(221),i={getSocket:function(){return n||(n=r()(c.a.server))},close:function(){n.close()}};t.a=i},219:function(e,t,a){"use strict";var n=a(232),o=a.n(n),r=a(3),c=a(220),i=a(221),s=a(7),l=a(27),u=a(223),d={errConn:{es:"Error de conexi\xf3n",en:"Network error"},getTokenIdError:{es:"Su sesi\xf3n ha expirado",en:"Expired session"}};t.a=function(){var e=Object(c.a)(),t=e.openErrorNotification,a=e.openSuccessNotification,n=Object(r.useRecoilValue)(s.k),p=Object(r.useRecoilValue)(s.g),f=Object(u.a)();return{postRequest:function(e){var r=e.url,c=e.bodyParams,s=void 0===c?{}:c,u=e.doFnAfterSuccess,m=void 0===u?null:u,g=e.doFnAfterError,b=void 0===g?null:g,v=e.messageOnSuccess,h=void 0===v?null:v,O=e.messageOnError,x=void 0===O?null:O,j=function(e){return o.a.post("".concat(i.a.server).concat(r),s,{headers:{Authorization:e}}).then((function(t){return h&&a(h),m&&m(t,e),t})).catch((function(e){return e.response?x&&t(x):t(d.errConn[n]),b&&b(e),e}))};if(p)return j(p).catch((function(e){return console.log("Error al realizar la peticion con el token guardado en recoil state, asi que intentamos usando firebase"),l.a.auth().currentUser.getIdToken(!0).then((function(e){return j(e)})).catch((function(e){return console.log("Error al realizar la peticion con el token proveniente de firebase"),f(),e}))}))}}}},220:function(e,t,a){"use strict";var n=a(9),o=a(25),r=(a(0),a(3)),c=a(78);t.a=function(){var e=Object(r.useRecoilState)(c.a),t=Object(o.a)(e,2),a=t[0],i=t[1],s=Object(n.a)(Object(n.a)({},a),{},{open:!0,autoHideDuration:3e3}),l=function(e,t){i(Object(n.a)(Object(n.a)({},s),{},{severity:e,msg:t}))};return{openNotification:function(e){i(Object(n.a)(Object(n.a)({},s),e))},openSuccessNotification:function(e){l("success",e)},openErrorNotification:function(e){l("error",e)},openInfoNotification:function(e){l("info",e)},openWarningNotification:function(e){l("warning",e)}}}},221:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n={server:"https://shut-app-pro.herokuapp.com"}},223:function(e,t,a){"use strict";var n=a(3),o=a(7),r=a(0),c=a(218),i=a(27);t.a=function(){var e=Object(n.useSetRecoilState)(o.l),t=Object(n.useSetRecoilState)(o.o),a=Object(n.useSetRecoilState)(o.n),s=Object(n.useSetRecoilState)(o.d),l=Object(n.useSetRecoilState)(o.i),u=c.a.getSocket();return Object(r.useCallback)((function(){Object(o.f)(),t(null),s([]),l([]),u.emit("logout",{}),a(!1),e(null),i.a.auth().signOut()}),[])}},234:function(e,t){},301:function(e,t,a){"use strict";var n=a(1),o=a(4),r=a(0),c=(a(2),a(6)),i=a(8),s=a(15),l=a(173),u=r.forwardRef((function(e,t){var a=e.classes,i=e.className,u=e.color,d=void 0===u?"primary":u,p=e.position,f=void 0===p?"fixed":p,m=Object(o.a)(e,["classes","className","color","position"]);return r.createElement(l.a,Object(n.a)({square:!0,component:"header",elevation:4,className:Object(c.a)(a.root,a["position".concat(Object(s.a)(f))],a["color".concat(Object(s.a)(d))],i,"fixed"===f&&"mui-fixed"),ref:t},m))}));t.a=Object(i.a)((function(e){var t="light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900];return{root:{display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",zIndex:e.zIndex.appBar,flexShrink:0},positionFixed:{position:"fixed",top:0,left:"auto",right:0,"@media print":{position:"absolute"}},positionAbsolute:{position:"absolute",top:0,left:"auto",right:0},positionSticky:{position:"sticky",top:0,left:"auto",right:0},positionStatic:{position:"static"},positionRelative:{position:"relative"},colorDefault:{backgroundColor:t,color:e.palette.getContrastText(t)},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},colorInherit:{color:"inherit"},colorTransparent:{backgroundColor:"transparent",color:"inherit"}}}),{name:"MuiAppBar"})(u)},302:function(e,t,a){"use strict";var n=a(1),o=a(4),r=a(12),c=a(0),i=(a(2),a(6)),s=a(8),l=c.forwardRef((function(e,t){var a=e.classes,r=e.className,s=e.component,l=void 0===s?"div":s,u=e.disableGutters,d=void 0!==u&&u,p=e.variant,f=void 0===p?"regular":p,m=Object(o.a)(e,["classes","className","component","disableGutters","variant"]);return c.createElement(l,Object(n.a)({className:Object(i.a)(a.root,a[f],r,!d&&a.gutters),ref:t},m))}));t.a=Object(s.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center"},gutters:Object(r.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}),regular:e.mixins.toolbar,dense:{minHeight:48}}}),{name:"MuiToolbar"})(l)},364:function(e,t,a){"use strict";var n=a(61);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(74)).default)(o.default.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=r},365:function(e,t,a){"use strict";var n=a(61);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(74)).default)(o.default.createElement("path",{d:"M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"}),"Cached");t.default=r},366:function(e,t,a){"use strict";var n=a(61);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(74)).default)(o.default.createElement("path",{d:"M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");t.default=r},367:function(e,t,a){"use strict";var n=a(61);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(74)).default)(o.default.createElement("path",{d:"M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"}),"DoneAll");t.default=r},368:function(e){e.exports=JSON.parse('{"errorLoadConversation":{"es":"Error al cargar mensajes","en":"Error loading messages"}}')},369:function(e,t,a){"use strict";var n=a(61);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(a(0)),r=(0,n(a(74)).default)(o.default.createElement("path",{d:"M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"}),"Telegram");t.default=r},370:function(e){e.exports=JSON.parse('{"notEditable":{"es":"No puede enviar mensajes a este usuario","en":"Can\'t send messages to this user"}}')},434:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(25),c=a(3),i=a(75),s=a(7),l=a(79),u=a(301),d=a(302),p=a(217),f=a(210),m=a(209),g=a(361),b=a(206),v=a(8),h=a(59),O=a(57),x=a(364),j=a.n(x),E=a(287),k=a.n(E),y=Object(b.a)((function(e){var t;return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(.5)},title:{display:"block",marginLeft:e.spacing(1)},customAppBar:(t={width:"100%"},Object(l.a)(t,e.breakpoints.up("sm"),{width:e.breakpoints.values.sm}),Object(l.a)(t,"right","auto"),t),avatarMan:{color:e.palette.getContrastText(h.a[400]),backgroundColor:h.a[400]},avatarWoman:{color:e.palette.getContrastText(O.a[300]),backgroundColor:O.a[300]}}})),S=Object(v.a)((function(e){return{badge:{backgroundColor:"#44b700",color:"#44b700",boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",animation:"$ripple 1.2s infinite ease-in-out",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(g.a),R=Object(v.a)((function(e){return{badge:{backgroundColor:e.palette.grey[500],color:e.palette.grey[500],boxShadow:"0 0 0 2px ".concat(e.palette.background.paper),"&::after":{position:"absolute",top:0,left:0,width:"100%",height:"100%",borderRadius:"50%",border:"1px solid currentColor",content:'""'}},"@keyframes ripple":{"0%":{transform:"scale(.8)",opacity:1},"100%":{transform:"scale(2.4)",opacity:0}}}}))(g.a),C=function(e){return e.contact.socketId&&1===e.contact.friendShipStatus?o.a.createElement(S,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},e.children):o.a.createElement(R,{overlap:"circle",anchorOrigin:{vertical:"bottom",horizontal:"right"},variant:"dot"},e.children)},N=o.a.memo((function(e){var t=e.closeChat,a=e.contact,n=y(),r=a.avatarUrl?a.avatarUrl:null,c="M"===a.gender?"avatarMan":"avatarWoman";return o.a.createElement(u.a,{position:"fixed",className:n.customAppBar},o.a.createElement(d.a,null,o.a.createElement(m.a,{edge:"start",className:n.menuButton,color:"inherit","aria-label":"open drawer",onClick:t},o.a.createElement(j.a,null)),o.a.createElement(C,{contact:a},o.a.createElement(p.a,{src:r,className:a.gender&&n[c]})),o.a.createElement(f.a,{className:n.title,variant:"h5",noWrap:!0},a.nickname),o.a.createElement("div",{className:n.grow}),o.a.createElement(m.a,{"aria-label":"show 4 new mails",color:"inherit"},o.a.createElement(k.a,null))))})),w=o.a.memo((function(){var e=Object(c.useRecoilState)(s.a),t=Object(r.a)(e,2),a=t[0],n=t[1],l=Object(c.useRecoilValue)(i.d).find((function(e){return e.contactId===a})),u=o.a.useCallback((function(){n(null)}),[]);return o.a.createElement(N,{closeChat:u,contact:l})})),M=function(e){return o.a.createElement(w,null)},I=a(9),A=a(56),T={50:"#f1f8e9",100:"#dcedc8",200:"#c5e1a5",300:"#aed581",400:"#9ccc65",500:"#8bc34a",600:"#7cb342",700:"#689f38",800:"#558b2f",900:"#33691e",A100:"#ccff90",A200:"#b2ff59",A400:"#76ff03",A700:"#64dd17"},L=a(365),z=a.n(L),B=a(366),V=a.n(B),D=a(367),_=a.n(D),P=a(288),W=a(289),F=Object(b.a)((function(e){return{message:{padding:"".concat(e.spacing(1),"px ").concat(e.spacing(2),"px"),maxWidth:"60%",marginTop:e.spacing(2),marginBottom:0,marginLeft:"".concat(e.spacing(2),"px"),marginRight:"".concat(e.spacing(2),"px"),borderRadius:"10px",backgroundColor:e.palette.info.dark,color:e.palette.info.contrastText,position:"relative"},timeMessage:Object(I.a)({paddingLeft:e.spacing(2),maxWidth:"60%",marginBottom:e.spacing(1),marginLeft:"".concat(e.spacing(2),"px"),marginRight:"".concat(e.spacing(1),"px"),color:e.palette.text.disabled},e.typography.subtitle2),mymsg:{textAlign:"right",alignSelf:"flex-end",borderRadius:"10px 0 10px 10px"},notmymsg:{alignSelf:"flex-start",borderRadius:"0 10px 10px 10px"},msgAvatar:{width:e.spacing(3),height:e.spacing(3),position:"absolute",top:"-".concat(e.spacing(1.5),"px")},myMsgAvatar:{right:"-".concat(e.spacing(1.5),"px")},notMyMsgAvatar:{left:"-".concat(e.spacing(1.5),"px")},doneIcon:{marginRight:e.spacing(1),fontSize:e.spacing(2.2)},avatarMan:{color:e.palette.getContrastText(h.a[400]),backgroundColor:h.a[400]},avatarWoman:{color:e.palette.getContrastText(O.a[300]),backgroundColor:O.a[300]}}})),G=o.a.memo((function(e){var t,a=e.state,n=e.content,r=e.datetime,c=e.contact,i=e.avatarSrc,s=e.userGender,l=e.idioma,u=F(),d=a>0?u.mymsg:u.notmymsg,f=a>0?u.myMsgAvatar:u.notMyMsgAvatar,m=a>0?i:c.avatarUrl,g="es"===l?{locale:W.a}:{},b=Object(P.a)(new Date(r),new Date,g),v=null;return 1===a&&(v=o.a.createElement(z.a,{className:u.doneIcon,style:{color:A.a[500]}})),2===a&&(v=o.a.createElement(V.a,{className:u.doneIcon,style:{color:T[500]}})),3===a&&(v=o.a.createElement(_.a,{className:u.doneIcon,style:{color:T[500]}})),t=0===a?"M"===c.gender?"avatarMan":"F"===c.gender?"avatarWoman":"":"M"===s?"avatarMan":"F"===s?"avatarWoman":"",o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"".concat(u.message," ").concat(d)},o.a.createElement(p.a,{alt:c.nickname,src:m,variant:"circle",className:"".concat(u.msgAvatar," ").concat(f," ").concat(u[t])}),n),o.a.createElement("span",{className:" ".concat(d)},o.a.createElement("span",{className:"".concat(u.timeMessage)},b),v))})),H=Object(b.a)((function(e){return{chatConversation:{position:"relative",flexGrow:1,display:"flex",flexDirection:"column",overflowY:"auto",height:"100%"},offset:e.mixins.toolbar,offsetDown:Object(I.a)(Object(I.a)({},e.mixins.toolbar),{},{bottom:0,position:"relative"})}})),q=function(e){var t=e.contact,a=e.avatarSrc,n=e.messages,r=e.idioma,c=e.userGender;o.a.useEffect((function(){var e=document.getElementById("chatConversation");e&&(e.scrollTop=e.scrollHeight)}));var i=H();return o.a.createElement("div",{id:"chatConversation",className:i.chatConversation},o.a.createElement("div",{className:i.offset}),n.map((function(e,n,i){return o.a.createElement(G,Object.assign({},e,{key:n,contact:t,avatarSrc:a,userGender:c,idioma:r}))})),o.a.createElement("div",{className:i.offsetDown}))},J=a(219),U=a(368),$=function(){var e=Object(c.useRecoilValue)(s.a),t=Object(c.useSetRecoilState)(i.e),a=Object(c.useRecoilValue)(Object(s.j)(e)),r=Object(c.useRecoilValue)(s.o),l=Object(c.useRecoilValue)(s.l),u=Object(c.useRecoilValue)(s.k),d=Object(c.useRecoilValue)(i.d),p=Object(J.a)().postRequest,f=d.find((function(t){return t.contactId===e}));return Object(n.useEffect)((function(){0===a.length&&p({url:"/messages/getMessagesByContact",messageOnError:U.errorLoadConversation[u],bodyParams:{contactId:f.contactId},doFnAfterSuccess:function(e,a){200===e.status&&t({contactId:f.contactId,conversation:e.data.conversation})}})}),[]),a?o.a.createElement(q,{contact:f,avatarSrc:r,userGender:l.gender,messages:a,idioma:u}):null},Y=function(e){return o.a.createElement($,null)},K=a(220),Q=a(369),X=a.n(Q),Z=Object(b.a)((function(e){var t;return{appBar:(t={top:"auto",bottom:0,position:"fixed",width:"100%"},Object(l.a)(t,e.breakpoints.up("sm"),{width:e.breakpoints.values.sm}),Object(l.a)(t,"right","auto"),t),grow:{flexGrow:1},toolbar:{padding:0},icon:{fontSize:e.spacing(3.75)},textarea:{border:"1px solid white",fontFamily:"inherit",fontSize:"large",padding:"1px 6px",backgroundColor:e.palette.background.paper,color:e.palette.text.primary,width:"100%",marginTop:e.spacing(1),marginBottom:e.spacing(1),maxHeight:e.spacing(10),minHeight:e.spacing(4),overflowY:"auto",borderRadius:e.spacing(.5),marginLeft:e.spacing(2),cursor:"text"}}})),ee=function(e){var t=e.sendMessage,a=e.refAreaTexto,n=e.keyPress,r=Z();return o.a.createElement(u.a,{color:"primary",className:r.appBar},o.a.createElement(d.a,{variant:"dense",className:r.toolbar},o.a.createElement("div",{className:r.textarea,role:"textbox",contentEditable:!0,ref:a,onKeyPress:n}),o.a.createElement("div",{className:r.grow}),o.a.createElement(m.a,{color:"inherit",onClick:t},o.a.createElement(X.a,{className:r.icon}))))},te=a(218),ae=a(370),ne=function(e){var t=Object(K.a)().openWarningNotification,a=Object(c.useRecoilValue)(s.l),l=Object(c.useRecoilValue)(s.k),u=Object(c.useSetRecoilState)(i.a),d=Object(c.useRecoilValue)(s.a),p=Object(c.useRecoilValue)(s.g),f=Object(c.useRecoilValue)(i.d).find((function(e){return e.contactId===d})),m=Object(n.useRef)(""),g=Object(n.useState)(0),b=Object(r.a)(g,2),v=b[0],h=b[1],O=function(){""!==m.current.innerText.replace(/^(\s*\r*)(.)(\s*\r*)$/,"$2")&&(u({contactId:f.contactId,messageId:v,content:m.current.innerText,datetime:new Date,state:1}),h((function(e){return e+1})),te.a.getSocket().emit("send message",{content:m.current.innerText,userOriginId:a.userId,userDestinyId:d,toSocketId:f.socketId,token:p,consecutive:v}),m.current.innerText="",m.current.focus())};return Object(n.useEffect)((function(){5!==f.friendShipStatus?m.current.focus():t(ae.notEditable[l])}),[]),5!==f.friendShipStatus?o.a.createElement(ee,{sendMessage:O,keyPress:function(e){13===e.charCode&&(e.preventDefault(),O())},refAreaTexto:m}):null},oe=function(e){return o.a.createElement(ne,null)},re=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(M,null),o.a.createElement(Y,null),o.a.createElement(oe,null))};t.default=function(e){return o.a.createElement(re,null)}}}]);
//# sourceMappingURL=10.4de64b74.chunk.js.map