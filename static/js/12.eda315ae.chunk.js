(this.webpackJsonpchat_front=this.webpackJsonpchat_front||[]).push([[12],{218:function(e,t,n){"use strict";var o,c=n(233),a=n.n(c),i=n(221),r={getSocket:function(){return o||(o=a()(i.a.server))},close:function(){o.close()}};t.a=r},219:function(e,t,n){"use strict";var o=n(232),c=n.n(o),a=n(3),i=n(220),r=n(221),s=n(7),u=n(27),d=n(223),f={errConn:{es:"Error de conexi\xf3n",en:"Network error"},getTokenIdError:{es:"Su sesi\xf3n ha expirado",en:"Expired session"}};t.a=function(){var e=Object(i.a)(),t=e.openErrorNotification,n=e.openSuccessNotification,o=Object(a.useRecoilValue)(s.k),l=Object(a.useRecoilValue)(s.g),b=Object(d.a)();return{postRequest:function(e){var a=e.url,i=e.bodyParams,s=void 0===i?{}:i,d=e.doFnAfterSuccess,m=void 0===d?null:d,O=e.doFnAfterError,k=void 0===O?null:O,j=e.messageOnSuccess,g=void 0===j?null:j,p=e.messageOnError,v=void 0===p?null:p,I=function(e){return c.a.post("".concat(r.a.server).concat(a),s,{headers:{Authorization:e}}).then((function(t){return g&&n(g),m&&m(t,e),t})).catch((function(e){return e.response?v&&t(v):t(f.errConn[o]),k&&k(e),e}))};if(l)return I(l).catch((function(e){return console.log("Error al realizar la peticion con el token guardado en recoil state, asi que intentamos usando firebase"),u.a.auth().currentUser.getIdToken(!0).then((function(e){return I(e)})).catch((function(e){return console.log("Error al realizar la peticion con el token proveniente de firebase"),b(),e}))}))}}}},220:function(e,t,n){"use strict";var o=n(9),c=n(25),a=(n(0),n(3)),i=n(78);t.a=function(){var e=Object(a.useRecoilState)(i.a),t=Object(c.a)(e,2),n=t[0],r=t[1],s=Object(o.a)(Object(o.a)({},n),{},{open:!0,autoHideDuration:3e3}),u=function(e,t){r(Object(o.a)(Object(o.a)({},s),{},{severity:e,msg:t}))};return{openNotification:function(e){r(Object(o.a)(Object(o.a)({},s),e))},openSuccessNotification:function(e){u("success",e)},openErrorNotification:function(e){u("error",e)},openInfoNotification:function(e){u("info",e)},openWarningNotification:function(e){u("warning",e)}}}},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o={server:"https://shut-app-pro.herokuapp.com"}},223:function(e,t,n){"use strict";var o=n(3),c=n(7),a=n(0),i=n(218),r=n(27);t.a=function(){var e=Object(o.useSetRecoilState)(c.l),t=Object(o.useSetRecoilState)(c.o),n=Object(o.useSetRecoilState)(c.n),s=Object(o.useSetRecoilState)(c.d),u=Object(o.useSetRecoilState)(c.i),d=i.a.getSocket();return Object(a.useCallback)((function(){Object(c.f)(),t(null),s([]),u([]),d.emit("logout",{}),n(!1),e(null),r.a.auth().signOut()}),[])}},224:function(e,t,n){"use strict";var o=function(){localStorage.removeItem("denyOSNotification")};t.a={askNotificationPermission:function(e){o();var t=function(t){"permission"in Notification||(Notification.permission=t),e&&e()};"Notification"in window?!function(){try{Notification.requestPermission().then()}catch(e){return!1}return!0}()?Notification.requestPermission((function(e){t(e)})):Notification.requestPermission().then((function(e){t(e)})):console.log("This browser does not support notifications.")},permissionType:function(){return Notification.permission},denyPermission:function(){localStorage.setItem("denyOSNotification",!0)},allowedNotifications:function(){return"granted"===Notification.permission&&!localStorage.getItem("denyOSNotification")}}},226:function(e){e.exports=JSON.parse('{"disconnected":{"es":"se ha desconectado","en":"has disconnected"},"connected":{"es":"se ha conectado","en":"has connected"},"accept":{"es":"es ahora tu contacto","en":"is now your friend"},"decline":{"es":"te ha rechazado","en":"has declined you"},"delete":{"es":"te ha eliminado de sus contactos","en":"has remove you from the list of contacts"},"block":{"es":"te he bloqueado","en":"has bloqued you"},"errorLoadingFriends":{"es":"Error al cargar contactos","en":"Error while loading contacts"},"requestedInv":{"es":"solicita ser su amigo","en":"request be your friend"},"declinedInv":{"es":"ha cancelado la solicitud de amistad","en":"cancel the friend request"},"writingYou":{"es":"ha escrito","en":"has whritten"},"connError":{"es":"Error de conexi\xf3n","en":"Network error"}}')},234:function(e,t){},435:function(e,t,n){"use strict";n.r(t);var o,c,a=n(0),i=n.n(a),r=n(3),s=n(75),u=n(218),d=n(7),f=n(76),l=n(226),b=n(25);"undefined"!==typeof document.hidden?(o="hidden",c="visibilitychange"):"undefined"!==typeof document.msHidden?(o="msHidden",c="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(o="webkitHidden",c="webkitvisibilitychange");var m=function(){var e=Object(a.useState)(!0),t=Object(b.a)(e,2),n=t[0],i=t[1],r=function(){document[o]?i(!1):i(!0)};return Object(a.useEffect)((function(){"undefined"===typeof document.addEventListener||void 0===o?(console.log("Switch to a Google Chrome or Firefox browser, that supports the Page Visibility API."),i(!1)):document.addEventListener(c,r,!1)}),[]),n},O=n(224),k=n(77),j=n.n(k),g=function(e){var t=u.a.getSocket(),n=Object(r.useSetRecoilState)(s.d),o=Object(r.useRecoilValue)(d.l),c=Object(f.b)().enqueueSnackbar,b=m();return Object(a.useEffect)((function(){return t.on("new user",(function(e){var t={data:e,msg:l.connected};O.a.allowedNotifications()&&!b?t.OSNotification=function(e,t){new Notification(e,{body:t,icon:j.a})}:t.notification=c,n({action:"connect",payload:t})})),o&&t.emit("new user",{userId:o.userId}),function(){return t.off("new user")}}),[n,t,o,b]),i.a.createElement(i.a.Fragment,null)},p=function(e){var t=Object(r.useSetRecoilState)(s.d),n=u.a.getSocket(),o=Object(f.b)().enqueueSnackbar;return Object(a.useEffect)((function(){return n.on("user disconnect",(function(e){t({action:"disconnect",payload:{socketId:e.socketId,notification:o,msg:l.disconnected}})})),function(){return n.off("user disconnect")}}),[]),i.a.createElement(i.a.Fragment,null)},v=n(55),I=n(9),S=function(e){var t=Object(r.useRecoilState)(d.c),n=Object(b.a)(t,2),o=n[0],c=n[1],s=u.a.getSocket();return Object(a.useEffect)((function(){return s.on("message",(function(e){var t=Object(I.a)({},o);o[e.socketId]?(t[e.socketId]=Object(I.a)({},o[e.socketId]),o[e.socketId].text?(t[e.socketId].text=[].concat(Object(v.a)(o[e.socketId].text),[{myMsg:!1,msg:e.msg}]),e.socketId!==t.active&&(t[e.socketId].novistos=t[e.socketId].novistos+1)):t[e.socketId].text=[]):t[e.socketId]={text:[{myMsg:!1,msg:e.msg}],nickname:null,socketId:null,novistos:1},c(t)})),function(){return s.off("message")}}),[o]),i.a.createElement(i.a.Fragment,null)},E=n(220),h=n(219),y=function(e){var t=u.a.getSocket(),n=Object(r.useSetRecoilState)(s.d),o=Object(f.b)().enqueueSnackbar,c=Object(r.useRecoilValue)(d.k),b=Object(E.a)().openErrorNotification,k=Object(h.a)().postRequest,g=m();return Object(a.useEffect)((function(){return t.on("declined friendship",(function(e){var t=e.declinerId,a=(e.declinedId,e.socketIdDecliner);e.socketIdDeclined;k({url:"/users/getFriendById",bodyParams:{friendId:t},doFnAfterSuccess:function(e){if(200===e.status){n({action:"update",payload:{friend:Object(I.a)(Object(I.a)({},e.data.friend),{},{socketId:a})}});var t=e.data.friend;O.a.allowedNotifications()&&!g?new Notification(t.nickname,{body:"".concat(t.nickname," ").concat(l.declinedInv[c]),icon:j.a}):o("".concat(t.nickname," ").concat(l.declinedInv[c]),{variant:"warning"})}},doFnAfterError:function(e){e.response?404===e.response.status&&n({action:"delete",payload:{friendId:t}}):b(l.connError[c])}})})),function(){return t.off("declined friendship")}}),[]),i.a.createElement(i.a.Fragment,null)},N=function(e){var t=u.a.getSocket(),n=Object(r.useSetRecoilState)(s.d),o=Object(f.b)().enqueueSnackbar,c=Object(r.useRecoilValue)(d.l),b=Object(r.useRecoilValue)(d.k),k=Object(E.a)().openErrorNotification,g=Object(h.a)().postRequest,p=m();return Object(a.useEffect)((function(){return t.on("requested friendship",(function(e){var t=e.userIdRequester,a=e.userIdRequested,i=e.socketIdRequester;a===c.userId&&g({url:"/users/getFriendById",bodyParams:{friendId:t},doFnAfterSuccess:function(e){if(200===e.status){n({action:"add",payload:{friend:Object(I.a)(Object(I.a)({},e.data.friend),{},{socketId:i})}});var t=e.data.friend;O.a.allowedNotifications()&&!p?new Notification(t.nickname,{body:"".concat(t.nickname," ").concat(l.requestedInv[b]),icon:j.a}):o("".concat(t.nickname," ").concat(l.requestedInv[b]),{variant:"success"})}},doFnAfterError:function(e){e.response?k(l.errorLoadingFriends[b]):k(l.connError[b])}})})),function(){return t.off("requested friendship")}}),[]),i.a.createElement(i.a.Fragment,null)},R=function(e){var t=u.a.getSocket(),n=Object(r.useSetRecoilState)(s.d),o=Object(f.b)().enqueueSnackbar,c=Object(r.useRecoilValue)(d.k),b=Object(E.a)().openErrorNotification,k=Object(h.a)().postRequest,g=m();return Object(a.useEffect)((function(){return t.on("accepted friendship",(function(e){var t=e.accepterId,a=e.socketIdAccepter;k({url:"/users/getFriendById",bodyParams:{friendId:t},doFnAfterSuccess:function(e){if(200===e.status){n({action:"update",payload:{friend:Object(I.a)(Object(I.a)({},e.data.friend),{},{socketId:a})}});var t=e.data.friend;O.a.allowedNotifications()&&!g?new Notification(t.nickname,{body:"".concat(t.nickname," ").concat(l.accept[c]),icon:j.a}):o("".concat(t.nickname," ").concat(l.accept[c]),{variant:"success"})}},doFnAfterError:function(e){e.response?b(l.errorLoadingFriends[c]):b(l.connError[c])}})})),function(){return t.off("accepted friendship")}}),[]),i.a.createElement(i.a.Fragment,null)},w=function(e){var t=u.a.getSocket(),n=Object(r.useSetRecoilState)(s.d),o=Object(f.b)().enqueueSnackbar,c=Object(r.useRecoilValue)(d.k),b=Object(E.a)().openErrorNotification,k=Object(h.a)().postRequest,g=m();return Object(a.useEffect)((function(){return t.on("deleted contact",(function(e){var t=e.deleterId,a=e.socketIdDeleter;k({url:"/users/getFriendById",bodyParams:{friendId:t},doFnAfterSuccess:function(e){if(200===e.status){n({action:"update",payload:{friend:Object(I.a)(Object(I.a)({},e.data.friend),{},{socketId:a})}});var t=e.data.friend;O.a.allowedNotifications()&&!g?new Notification(t.nickname,{body:"".concat(t.nickname," ").concat(l.delete[c]),icon:j.a}):o("".concat(t.nickname," ").concat(l.delete[c]),{variant:"error"})}},doFnAfterError:function(e){e.response?b(l.errorLoadingFriends[c]):b(l.connError[c])}})})),function(){return t.off("deleted contact")}}),[]),i.a.createElement(i.a.Fragment,null)},F=function(e){var t=u.a.getSocket(),n=Object(r.useSetRecoilState)(s.d),o=Object(f.b)().enqueueSnackbar,c=Object(r.useRecoilValue)(d.k),b=Object(E.a)().openErrorNotification,k=Object(h.a)().postRequest,g=m();return Object(a.useEffect)((function(){return t.on("blocked contact",(function(e){var t=e.blokerId,a=e.socketIdBloked;k({url:"/users/getFriendById",bodyParams:{friendId:t},doFnAfterSuccess:function(e){if(200===e.status){n({action:"update",payload:{friend:Object(I.a)(Object(I.a)({},e.data.friend),{},{socketId:a})}});var t=e.data.friend;O.a.allowedNotifications()&&!g?new Notification(t.nickname,{body:"".concat(t.nickname," ").concat(l.block[c]),icon:j.a}):o("".concat(t.nickname," ").concat(l.block[c]),{variant:"error"})}},doFnAfterError:function(e){e.response?b(l.errorLoadingFriends[c]):b(l.connError[c])}})})),function(){return t.off("bloked contact")}}),[]),i.a.createElement(i.a.Fragment,null)},q=n(79),A=[],V=function(e){var t=u.a.getSocket(),n=Object(r.useSetRecoilState)(s.a),o=Object(r.useSetRecoilState)(s.c),c=Object(r.useSetRecoilState)(s.b),k=Object(r.useRecoilValue)(d.l),g=Object(r.useRecoilValue)(d.a),p=Object(f.b)().enqueueSnackbar,v=Object(r.useRecoilState)(s.d),I=Object(b.a)(v,2),S=I[0],E=I[1],h=Object(r.useRecoilValue)(d.k),y=Object(r.useRecoilValue)(d.g),N=m(),R=i.a.useCallback((function(e){A.push(e)}),[]);return Object(a.useEffect)((function(){N&&(A.reverse().forEach((function(e){return e()})),A=[])}),[N]),Object(a.useEffect)((function(){return t.on("recived message",(function(e){var t=e.content,o=e.userOriginId,c=(e.socketIdSender,e.messageId),a=e.datetime,i=(e.consecutive,S.find((function(e){return e.contactId===o})));if(g!==o){O.a.allowedNotifications()&&!N?new Notification(i.nickname,{body:t,icon:j.a}):p("".concat(i.nickname," ").concat(l.writingYou[h]),{variant:"info"});var r=Object(q.a)({},o,{cantidad:1,lastMessage:t,datetime:a});E({action:"set_message_info",payload:{dataObj:r}})}else{O.a.allowedNotifications()&&!N&&new Notification(i.nickname,{body:t,icon:j.a});var s=Object(q.a)({},o,{cantidad:0,lastMessage:t,datetime:a});E({action:"set_message_info",payload:{dataObj:s}});var d=function(){u.a.getSocket().emit("read messages",{userId:k.userId,contactId:i.contactId,notifyTo:i.socketId,token:y})};N?d():R(d)}n({contactId:o,messageId:c,content:t,datetime:a,state:0})})),t.on("saved message",(function(e){var t=e.contactId,n=e.messageId,c=e.datetime,a=e.consecutive;e.soketIdContact;o({contactId:t,messageId:n,datetime:c,consecutive:a})})),t.on("readed messages",(function(e){var t=e.contactId;c({contactId:t})})),function(){t.off("recived message"),t.off("saved message"),t.off("readed messages")}})),i.a.createElement(i.a.Fragment,null)};t.default=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,null),i.a.createElement(p,null),i.a.createElement(S,null),i.a.createElement(N,null),i.a.createElement(y,null),i.a.createElement(R,null),i.a.createElement(w,null),i.a.createElement(F,null),i.a.createElement(V,null))}}}]);
//# sourceMappingURL=12.eda315ae.chunk.js.map