(this.webpackJsonpchat_front=this.webpackJsonpchat_front||[]).push([[13],{218:function(e,t,n){"use strict";var a,r=n(233),o=n.n(r),i=n(221),c={getSocket:function(){return a||(a=o()(i.a.server))},close:function(){a.close()}};t.a=c},219:function(e,t,n){"use strict";var a=n(232),r=n.n(a),o=n(3),i=n(220),c=n(221),s=n(7),l=n(27),u=n(223),d={errConn:{es:"Error de conexi\xf3n",en:"Network error"},getTokenIdError:{es:"Su sesi\xf3n ha expirado",en:"Expired session"}};t.a=function(){var e=Object(i.a)(),t=e.openErrorNotification,n=e.openSuccessNotification,a=Object(o.useRecoilValue)(s.k),m=Object(o.useRecoilValue)(s.g),p=Object(u.a)();return{postRequest:function(e){var o=e.url,i=e.bodyParams,s=void 0===i?{}:i,u=e.doFnAfterSuccess,f=void 0===u?null:u,b=e.doFnAfterError,g=void 0===b?null:b,E=e.messageOnSuccess,h=void 0===E?null:E,O=e.messageOnError,v=void 0===O?null:O,j=function(e){return r.a.post("".concat(c.a.server).concat(o),s,{headers:{Authorization:e}}).then((function(t){return h&&n(h),f&&f(t,e),t})).catch((function(e){return e.response?v&&t(v):t(d.errConn[a]),g&&g(e),e}))};if(m)return j(m).catch((function(e){return console.log("Error al realizar la peticion con el token guardado en recoil state, asi que intentamos usando firebase"),l.a.auth().currentUser.getIdToken(!0).then((function(e){return j(e)})).catch((function(e){return console.log("Error al realizar la peticion con el token proveniente de firebase"),p(),e}))}))}}}},220:function(e,t,n){"use strict";var a=n(9),r=n(25),o=(n(0),n(3)),i=n(78);t.a=function(){var e=Object(o.useRecoilState)(i.a),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.a)(Object(a.a)({},n),{},{open:!0,autoHideDuration:3e3}),l=function(e,t){c(Object(a.a)(Object(a.a)({},s),{},{severity:e,msg:t}))};return{openNotification:function(e){c(Object(a.a)(Object(a.a)({},s),e))},openSuccessNotification:function(e){l("success",e)},openErrorNotification:function(e){l("error",e)},openInfoNotification:function(e){l("info",e)},openWarningNotification:function(e){l("warning",e)}}}},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={server:location.origin}},223:function(e,t,n){"use strict";var a=n(3),r=n(7),o=n(0),i=n(218),c=n(27);t.a=function(){var e=Object(a.useSetRecoilState)(r.l),t=Object(a.useSetRecoilState)(r.o),n=Object(a.useSetRecoilState)(r.n),s=Object(a.useSetRecoilState)(r.d),l=Object(a.useSetRecoilState)(r.i),u=i.a.getSocket();return Object(o.useCallback)((function(){Object(r.f)(),t(null),s([]),l([]),u.emit("logout",{}),n(!1),e(null),c.a.auth().signOut()}),[])}},234:function(e,t){},257:function(e){e.exports=JSON.parse('{"title":{"es":"Adicionar contacto","en":"Add contact"},"search":{"es":"Buscar...","en":"Search..."},"close":{"es":"Cerrar","en":"Close"},"lbErrorLoadingUsers":{"es":"Error al cargar los usuarios","en":"Error loading users"},"lbErrorSendigFriendRequest":{"es":"Error al enviar solicitud de amistad","en":"Error sending friend request"}}')},353:function(e){e.exports=JSON.parse('{"addContact":{"es":"Adicionar","en":"Add"},"addGroup":{"es":"Grupo","en":"Group"},"sendMsg":{"es":"Enviar","en":"Send"},"shareMsg":{"es":"Compartir","en":"Share"},"sendAll":{"es":"Difusi\xf3n","en":"Diffusion"}}')},437:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),i=n(3),c=n(206),s=n(440),l=n(441),u=n(418),d=n(305),m=n.n(d),p=n(306),f=n.n(p),b=Object(c.a)((function(e){return{speedDial:{position:"absolute",bottom:e.spacing(0),right:e.spacing(0)},speedDialDiv:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2),width:e.spacing(7),height:e.spacing(7)},icon:{color:e.palette.text.secondary}}})),g=r.a.memo((function(e){var t=e.idioma,n=e.handleOpen,a=e.handleClose,o=e.open,i=e.openAddContactView,c=e.text,d=b();return r.a.createElement("div",{id:"idMainButton",className:d.speedDialDiv},r.a.createElement(s.a,{ariaLabel:"Main speed dial button",className:d.speedDial,icon:r.a.createElement(l.a,null),onClose:a,onOpen:n,open:o},r.a.createElement(u.a,{key:"add",icon:r.a.createElement(m.a,{className:d.icon}),tooltipTitle:c.addContact[t],tooltipOpen:!0,onClick:i}),r.a.createElement(u.a,{key:"addgroup",icon:r.a.createElement(f.a,{className:d.icon}),tooltipTitle:c.sendAll[t],tooltipOpen:!0,onClick:function(){console.log("Enviar mensaje de difusion"),alert("Not implemented!")}})))})),E=n(26),h=n(426),O=n(424),v=n(427),j=n(428),S=n(421),R=n(423),C=n(425),k=n(420),N=n(307),y=n(217),A=n(443),x=n(310),I=n.n(x),q=n(422),w=n(59),F=n(57),U=n(56),D=n(97),M=n.n(D),V=n(429),T=n(209),W=n(309),P=n.n(W),z=n(257),L=n(308),J=Object(c.a)((function(e){return{dialogContent:{padding:0},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(E.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(E.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:{padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},avatarMan:{color:e.palette.getContrastText(w.a[400]),backgroundColor:w.a[400]},avatarWoman:{color:e.palette.getContrastText(F.a[300]),backgroundColor:F.a[300]}}})),B=function(e){var t=e.user,n=e.sendFriendRequest,a=J(),o="M"===t.gender?"avatarMan":"avatarWoman";return r.a.createElement(v.a,{key:t.email,id:t.id&&t.id},r.a.createElement(N.a,null,r.a.createElement(y.a,{className:t.gender&&a[o],src:t.avatarUrl})),r.a.createElement(j.a,{primary:t.nickname,secondary:t.email}),r.a.createElement(L.a,null,r.a.createElement(T.a,{color:t.blockinguser?U.a[100]:w.a[300],onClick:function(){n(t.userId)},disabled:t.blockinguser},r.a.createElement(P.a,{id:"idAddUserIconButton",color:t.blockinguser?"disabled":"primary"}))))},G=function(e){var t=e.idioma,n=e.buscarUsuarios,a=e.inputSearchRef,i=J(),c=r.a.useState(""),s=Object(o.a)(c,2),l=s[0],u=s[1];return r.a.createElement("div",{className:i.search},r.a.createElement("div",{className:i.searchIcon},r.a.createElement(I.a,null)),r.a.createElement(A.a,{onKeyPress:function(e){13===e.charCode&&n()},placeholder:z.search[t],classes:{root:i.inputRoot,input:i.inputInput},inputProps:{"aria-label":"search"},value:l,onChange:function(e){var t=e.target.value;u(t)},inputRef:a,endAdornment:r.a.createElement(V.a,{position:"end"},""!==l?r.a.createElement(T.a,{size:"small","aria-label":"toggle password visibility",onClick:function(){u("")}},r.a.createElement(M.a,null)):null,r.a.createElement(T.a,{size:"small","aria-label":"toggle password visibility",onClick:n},r.a.createElement(I.a,null)))}))},H=function(e){var t=e.idioma,n=e.closeAddContactWin,a=e.open,o=e.buscarUsuarios,i=e.users,c=e.inputSearchRef,s=e.sendFriendRequest,l=J();return r.a.createElement(k.a,{id:"idWinAddContact",maxWidth:"xs",onEntering:function(){},"aria-labelledby":"confirmation-dialog-title",open:a,onClose:n},r.a.createElement(S.a,{id:"confirmation-dialog-title",className:l.dialogTitle},z.title[t]," "),r.a.createElement(q.a,null),r.a.createElement(G,{idioma:t,buscarUsuarios:o,inputSearchRef:c}),r.a.createElement(R.a,{dividers:!0,className:l.dialogContent},r.a.createElement(O.a,{style:{minHeight:"200px"}},i.map((function(e){return r.a.createElement(B,{user:e,sendFriendRequest:s})})))),r.a.createElement(C.a,null,r.a.createElement(h.a,{autoFocus:!0,onClick:n,color:"primary"},z.close[t])))},_=n(7),K=n(67),Q=n(75),X=n(219),Y=n(218),Z=function(e){var t=Object(i.useRecoilValue)(_.k),n=Object(i.useRecoilState)(_.b),c=Object(o.a)(n,2),s=c[0],l=c[1],u=Object(a.useState)([]),d=Object(o.a)(u,2),m=d[0],p=d[1],f=Object(a.useRef)({value:""}),b=Object(i.useRecoilValue)(_.l),g=Object(X.a)().postRequest,E=Object(i.useRecoilValue)(K.b),h=Object(i.useSetRecoilState)(Q.d),O=function(){E?p([{email:"user.email@mail.com",gender:"M",nickname:"Nickname",id:"idUsuarioEjemplo"}]):g({url:"/users/searchContact",bodyParams:{stringPattern:f.current.value,start:0,limit:20},doFnAfterSuccess:function(e){200===e.status&&p(e.data.users)},messageOnError:z.lbErrorLoadingUsers[t]})};Object(a.useEffect)((function(){O()}),[]);return r.a.createElement(H,{idioma:t,closeAddContactWin:function(){l(!1)},open:s,users:m,buscarUsuarios:O,inputSearchRef:f,sendFriendRequest:function(e){g({url:"/users/sendFriendRequest",bodyParams:{userId:e},doFnAfterSuccess:function(t,n){200===t.status&&(p((function(t){return t.filter((function(t){return t.userId!==e}))})),h({action:"add",payload:{friend:t.data.friend}}),Y.a.getSocket().emit("request friendship",{userIdRequester:b.userId,userIdRequested:e,token:n}))},messageOnError:z.lbErrorSendigFriendRequest[t]})}})},$=function(e){return r.a.createElement(Z,null)},ee=n(353),te=r.a.memo((function(e){var t=Object(i.useRecoilState)(_.m),n=Object(o.a)(t,2),a=n[0],c=n[1],s=Object(i.useRecoilState)(_.b),l=Object(o.a)(s,2),u=l[0],d=l[1],m=Object(i.useRecoilValue)(_.k);return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{open:a,handleOpen:function(){c(!0)},handleClose:function(){c(!1)},idioma:m,text:ee,openAddContactView:function(){d(!0)}}),u?r.a.createElement($,null):null)}));t.default=function(e){return r.a.createElement(te,null)}}}]);
//# sourceMappingURL=13.c295f43b.chunk.js.map