(this.webpackJsonpchat_front=this.webpackJsonpchat_front||[]).push([[5],{124:function(e,t,n){e.exports=n(171)},129:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(11),c=n.n(r),i=(n(129),n(3)),u=n(7),s=n(10),l=n(110),d=n(212),f=n(213),m=n(211),p=n(208),b=n(209),h=n(97),v=n.n(h),g=n(76),O=n(207),k=n(206),j=Object(k.a)((function(e){return{container:{padding:0,position:"relative",height:"100vh",overflowY:"hidden",backgroundColor:e.palette.background.paper},background:{backgroundColor:e.palette.background.default}}})),S=function(e){var t=j();return o.a.createElement("div",{className:t.background},o.a.createElement(O.a,{maxWidth:"sm",className:t.container,component:"main"},o.a.createElement(p.a,null),e.children))},y=function(e){return o.a.createElement(S,e)},I=n(9),E=n(25),w=n(215),A=n(214),R=n(78);function C(e){return o.a.createElement(A.a,Object.assign({elevation:6,variant:"filled"},e))}var x=function(){var e=Object(i.useRecoilState)(R.a),t=Object(E.a)(e,2),n=t[0],a=t[1],r=function(e,t){"clickaway"!==t&&a(Object(I.a)(Object(I.a)({},n),{},{open:!1}))};return o.a.createElement(w.a,{open:n.open,autoHideDuration:n.autoHideDuration,onClose:r,anchorOrigin:{vertical:"top",horizontal:"center"}},o.a.createElement(C,{onClose:r,severity:n.severity},n.msg))},T=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,null))},_=n(101),P=n.n(_),D=n(217),z=n(210),q=n(103),W=n.n(q),F=n(77),M=n.n(F),N=o.a.memo((function(e){var t=e.uiConfig,n=e.auth,r=e.isSignedIn,c=e.netError,s=Object(i.useRecoilValue)(u.e)?{backgroundColor:"rgba(60,60,60)"}:{};return o.a.createElement(a.Profiler,{id:"--Profiler--",onRender:function(){return console.log("Se renderizo un componente interno")}},o.a.createElement("div",{style:Object(I.a)(Object(I.a)({},s),{},{justifyContent:"center",alignItems:"center",height:"100%",display:"flex",flexDirection:"column"})},o.a.createElement(D.a,{src:M.a,style:{width:60,height:60,marginTop:24,boxShadow:"0 0px 5px rgb(154,48,154"}}),o.a.createElement(z.a,{variant:"h5",style:{marginTop:12}},"Shut-app"),r?c?o.a.createElement(W.a,{color:"secondary",style:{fontSize:"3em"}}):o.a.createElement(m.a,{color:"secondary"}):o.a.createElement(P.a,{uiConfig:t,firebaseAuth:n})))})),U=n(27),V={signInOptions:[U.a.auth.GoogleAuthProvider.PROVIDER_ID,U.a.auth.FacebookAuthProvider.PROVIDER_ID,U.a.auth.EmailAuthProvider.PROVIDER_ID],callbacks:{signInSuccessWithAuthResult:function(){return!1}}},B=o.a.memo((function(){var e=Object(i.useRecoilState)(u.l),t=Object(E.a)(e,2),n=t[0],r=t[1],c=Object(i.useSetRecoilState)(u.h),l=Object(i.useSetRecoilState)(u.g),d=Object(a.useState)(!1),f=Object(E.a)(d,2),m=f[0],p=f[1],b=Object(a.useState)(!1),h=Object(E.a)(b,2),v=h[0],g=h[1];return Object(a.useEffect)((function(){U.a.auth().onAuthStateChanged((function(e){if(p(!!e),U.a.auth().currentUser){var t=U.a.auth().currentUser.getIdToken(!0),n=U.a.auth().currentUser.getIdTokenResult(!0);Promise.all([t,n]).then((function(e){var t=Object(E.a)(e,2),n=t[0],a=t[1];return l(n),a})).then((function(e){var t=e.claims;c(t);var n=t.name?t.name.split(" "):["",""];r({userId:t.user_id,nickname:t.name,firstName:n[0],lastName:n.filter((function(e,t){return t>0})).join(" "),email:t.email,gender:null})})).catch((function(e){g(!0)}))}}))}),[]),m&&n?o.a.createElement(s.a,{to:"/chat_front/app"}):o.a.createElement(N,{uiConfig:V,auth:U.a.auth(),isSignedIn:m,netError:v})})),H=function(e){return o.a.createElement(B,null)},L=n(109),J=n(24),Y=n(67),G=n(75),K=Object(k.a)((function(e){return{helper:{padding:"35px"}}})),Q=o.a.memo((function(e){var t=e.idioma,n=K(),a=Object(i.useRecoilState)(Y.b),r=Object(E.a)(a,2),c=r[0],s=r[1],l=Object(i.useRecoilValue)(u.e),d=Object(i.useRecoilState)(Y.a),f=Object(E.a)(d,2),m=f[0],p=f[1],b=Object(i.useSetRecoilState)(u.m),h=Object(i.useSetRecoilState)(u.b),v=Object(i.useSetRecoilState)(G.d),g=[{selector:"",content:J.tourWelcome[t]},{selector:"#idMainButton",content:J.tourSpeedDial[t],action:function(){b(!0)}},{selector:"#Mainspeeddialbutton-action-0",content:J.tourSpeedDialAdd[t]},{selector:"#idUsuarioEjemplo",content:J.tourAddWinUser[t],position:"top"},{selector:"#idAddUserIconButton",content:J.tourRequestFriendshipButton[t],position:"botton"},{selector:"#lista>li",content:J.tourFriend[t],position:"botton"},{selector:"#idIconInfoFriendStatus",content:J.tourFriendDetailStatus[t],position:"botton"},{selector:"#idIconFriendActions",content:J.tourFriendActions[t],position:"botton"},{selector:"#userAvatar",content:J.tourStepProfile[t],stepInteraction:!0},{selector:"",content:J.finalStep[t]}].map((function(e){return Object(I.a)(Object(I.a)({},e),{},{style:{backgroundColor:l&&"#444"}})}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(L.a,{steps:g,isOpen:c,onRequestClose:function(){return s(!1)},badgeContent:function(e,n){return"".concat(e," ").concat(J.of[t]," ").concat(n)},accentColor:"salmon",closeWithMask:!1,disableInteraction:!0,rounded:10,maskSpace:5,showNavigation:!1,goToStep:m,nextStep:function(){switch(m){case 2:h(!0),setTimeout((function(){p(m+1),b(!1)}),300);break;case 4:v({action:"add",payload:{friend:{email:"user.email@mail.com",nickname:"Nickname",gender:"M",friendShipStatus:2,friendShipStatusCode:"REQUESTED",isTourTest:!0,contactId:"example_contact_id"}}}),setTimeout((function(){h(!1),p(m+1)}),100);break;default:p(m+1)}},prevStep:function(){switch(m){case 1:b(!1),p(m-1);break;case 3:b(!0),h(!1),p(m-1);break;case 5:v({action:"delete",payload:{friendId:"example_contact_id"}}),h(!0),setTimeout((function(){return p(m-1)}),300);break;default:p(m-1)}},onBeforeClose:function(){v({action:"delete",payload:{friendId:"example_contact_id"}}),b(!1)},className:n.helper}))})),$=o.a.lazy((function(){return n.e(14).then(n.bind(null,438))})),X=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(11),n.e(13)]).then(n.bind(null,436))})),Z=o.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(9)]).then(n.bind(null,433))})),ee=o.a.lazy((function(){return Promise.all([n.e(0),n.e(3),n.e(10)]).then(n.bind(null,434))})),te=o.a.lazy((function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,435))})),ne=Object(l.a)({palette:{type:"dark"}}),ae=Object(l.a)({}),oe=o.a.memo((function(){console.log("BODY APP");var e=Object(i.useRecoilValue)(u.k),t=Object(i.useRecoilValue)(u.e);return Object(i.useRecoilValue)(u.a)?o.a.createElement(ee,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{theme:t?ne:ae},o.a.createElement($,null),o.a.createElement(Z,null),o.a.createElement(X,null),o.a.createElement(Q,{idioma:e})))})),re=o.a.memo((function(){return o.a.createElement(s.d,null,o.a.createElement(s.b,{path:"/chat_front/app",exact:!0,component:oe}),o.a.createElement(s.b,{path:"/chat_front",exact:!0,component:H}))})),ce=function(){var e=Object(i.useRecoilValue)(u.e),t=Object(i.useRecoilValue)(u.n),n=o.a.createRef(),r=o.a.useCallback((function(e){return function(){n.current.closeSnackbar(e)}}),[n]);return o.a.createElement(a.Suspense,{fallback:o.a.createElement(f.a,{style:{zIndex:999999,color:"#fff"},open:!0},o.a.createElement(m.a,{color:"inherit"}))},o.a.createElement(d.a,{theme:e?ne:ae},o.a.createElement(y,null,o.a.createElement(p.a,null),o.a.createElement(T,null),o.a.createElement(g.a,{maxSnack:3,autoHideDuration:3e3,preventDuplicate:!0,anchorOrigin:{vertical:"top",horizontal:"left"},ref:n,action:function(e){return o.a.createElement(b.a,{onClick:r(e)},o.a.createElement(v.a,{fontSize:"small",style:{color:"white"}}))}},o.a.createElement(re,null),t&&o.a.createElement(te,null)))))},ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var se=n(68);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(i.RecoilRoot,null,o.a.createElement(se.a,null,o.a.createElement(ce,null)))),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/chat_front",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/chat_front","/service-worker.js");ie?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ue(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ue(t,e)}))}}()},24:function(e){e.exports=JSON.parse('{"of":{"es":"de","en":"of"},"tourWelcome":{"es":"Bienvenido a Shut-app. Te mostrar\xe9 lo que puedes hacer!","en":"Welcome to Shut-app. I will show you wath you can do!"},"tourSpeedDial":{"es":"Pulsa el bot\xf3n azul y ver\xe1s las principales funciones del sistema.","en":"Press the blue button and you will see the main functions of the system."},"tourStepProfile":{"es":"Si deseas salir o editar tu perfil lo puedes hacer desde aqu\xed.","en":"If you want to logout or edit your profile, you can do it from here."},"tourStepProfileCamera":{"es":"Aqu\xed podr\xe1 cambiar su foto de perfil.","en":"Here you can edit your profile picture."},"tourStepProfileLogout":{"es":"Si otras personas tienen acceso a su dispositivo, cierra la sesion antes de salir.","en":"If other people have access to your device, close the session before exit."},"tourStepProfileMenuOptions":{"es":"Aqu\xed podras editar los datos de tu perfil, adem\xe1s del lenguaje y tema de la aplicaci\xf3n.","en":"Here you can edit your profile data, as well as the language and theme of the application."},"tourStepOtherMenuOptions":{"es":"Estas son otras opciones que podr\xe1s utilizar para reportar errores, entre otras funciones secundarias.","en":"These are other options that you can use to report errors, among other secondary functions."},"tourStepMenuOptionsClose":{"es":"Puedes cerrar el men\xfa presionando en el la imagen de avatar.","en":"You can close the menu pressing in the avatar image"},"tourSpeedDialAdd":{"es":"La m\xe1s usada de todas es Adicionar usuarios.","en":"The most used of all is Add users"},"tourAddWinUser":{"es":"Aqu\xed aparecer\xe1n todos los usuarios a los que puedes solicitar amistad.","en":"Here will appear all the users to whom you can request friendship."},"tourRequestFriendshipButton":{"es":"Solicita amistad pulsando el bot\xf3n +.","en":"Request friendship by pressing the + button."},"tourFriend":{"es":"Todos tus contactos aparecer\xe1n en esta lista, incluso aquellos que te pidan amistad.","en":"All your contacts will appear in this list, even those who ask you for friendship."},"tourFriendDetailStatus":{"es":"Este icono contiene informaci\xf3n sobre el estado de su contacto.","en":"This icon contains information about the status of your contact."},"tourFriendActions":{"es":"Este bot\xf3n muestra diferentes acciones que puede realizar con el contacto, como aceptar o rechazar una solicitud.","en":"This button displays different actions that you can perform with the contact, such as accepting or rejecting a request."},"finalStep":{"es":"Eso es todo por ahora, que te diviertas!","en":"That\'s all for now, have fun!"},"close":{"es":"Cerrar","en":"Close"}}')},27:function(e,t,n){"use strict";var a=n(5),o=(n(94),{apiKey:"AIzaSyDJqy5depKRPIpHmmNxsu3VwFTPJ-dvCzY",authDomain:"shut-up-pro.firebaseapp.com",databaseURL:"https://shut-up-pro.firebaseio.com",projectId:"shut-up-pro",storageBucket:"shut-up-pro.appspot.com",messagingSenderId:"1034880989728",appId:"1:1034880989728:web:574d602e7540573753da45"});a.initializeApp(o);t.a=a},67:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var a=n(3),o=Object(a.atom)({key:"tourAtom",default:!1}),r=Object(a.atom)({key:"focusStepAtom",default:0})},7:function(e,t,n){"use strict";n.d(t,"k",(function(){return o})),n.d(t,"l",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"n",(function(){return s})),n.d(t,"o",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"i",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"j",(function(){return b})),n.d(t,"e",(function(){return h})),n.d(t,"h",(function(){return v})),n.d(t,"g",(function(){return g})),n.d(t,"m",(function(){return O})),n.d(t,"f",(function(){return p}));var a=n(3),o=Object(a.atom)({key:"idiomaState",default:function(){var e="en",t=navigator.language||navigator.userLanguage;return/^(es-).+/.test(t)&&(e="es"),e}()}),r=Object(a.atom)({key:"loginData",default:null}),c=Object(a.atom)({key:"userAvatarState",default:null}),i=(Object(a.atom)({key:"newAvatarState",default:null}),Object(a.atom)({key:"chatConversation",default:{active:!1}})),u=Object(a.atom)({key:"contactListState",default:[]}),s=(Object(a.atom)({key:"view",default:"LOGIN"}),Object(a.atom)({key:"backdropState",default:!1}),Object(a.atom)({key:"subscribeToEventsState",default:!1})),l=Object(a.atom)({key:"addContactViewOpenState",default:!1}),d=Object(a.atom)({key:"friendsAtom",default:[]}),f=Object(a.atom)({key:"activeChatWith",default:null}),m={},p=function(){m={}},b=function(e){if(m[e])return m[e];var t=Object(a.atom)({key:"conversationWith_".concat(e),default:[]});return m[e]=t,t},h=(Object(a.atom)({key:"messagesAtom",default:null}),Object(a.atom)({key:"tokenTimeoutAtom",default:{tokentimeout:0}}),Object(a.atom)({key:"themeAtom",default:"true"===localStorage.getItem("darkMode")})),v=Object(a.atom)({key:"firebaseCurrentUser",default:null}),g=Object(a.atom)({key:"firebaseCurrentTokenState",default:null}),O=Object(a.atom)({key:"speedDialStateAtom",default:!1})},75:function(e,t,n){"use strict";n.d(t,"d",(function(){return l})),n.d(t,"e",(function(){return d})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return m})),n.d(t,"b",(function(){return p}));var a=n(48),o=n.n(a),r=n(9),c=n(108),i=n(55),u=n(3),s=n(7),l=Object(u.selector)({key:"friendSelector",get:function(e){var t=e.get;return t(s.i).length>0?Object(i.a)(t(s.i)).sort((function(e,t){if(e.isTourTest)return-1;if(1===e.friendShipStatus&&1===t.friendShipStatus){if(e.socketId&&!t.socketId)return-1;if(!e.socketId&&t.socketId)return 1}return e.friendShipStatus<t.friendShipStatus?-1:e.friendShipStatus>t.friendShipStatus?1:e.email<t.email?-1:e.email>t.email?1:void 0})):[]},set:function(){var e=Object(c.a)(o.a.mark((function e(t,n){var a,c,u,l,d,f,m,p,b,h,v,g;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=t.set,c=t.get,u=n.action,l=n.payload,e.t0=u,e.next="initialize"===e.t0?5:"add"===e.t0?7:"update"===e.t0?9:"reset_cant_no_leidos"===e.t0?11:"set_message_info"===e.t0?13:"delete"===e.t0?15:"connect"===e.t0?19:"disconnect"===e.t0?21:26;break;case 5:return a(s.i,(function(e){return 0===e.length?l.friends:e})),e.abrupt("break",27);case 7:return a(s.i,(function(e){var t=Object(i.a)(e),n=e.findIndex((function(e){return e.contactId===l.friend.contactId}));if(n<0)return t.push(l.friend),t;var a=Object(r.a)(Object(r.a)({},e[n]),l.friend);return e.slice(0,n).concat([a]).concat(e.slice(n+1))})),e.abrupt("break",27);case 9:return a(s.i,(function(e){var t=e.findIndex((function(e){return e.contactId===l.friend.contactId}));return e.slice(0,t).concat([l.friend]).concat(e.slice(t+1))})),e.abrupt("break",27);case 11:return a(s.i,(function(e){var t=e.findIndex((function(e){return e.contactId===l.contactId}));return e.slice(0,t).concat([Object(r.a)(Object(r.a)({},e[t]),{},{unread:0})]).concat(e.slice(t+1))})),e.abrupt("break",27);case 13:return a(s.i,(function(e){var t=l.dataObj;return e.map((function(e){if(t[e.contactId]){var n=0;return e.unread&&(n=e.unread),t[e.contactId].cantidad&&(n+=t[e.contactId].cantidad),Object(r.a)(Object(r.a)({},e),{},{unread:n,lastMsg:t[e.contactId].lastMessage,datetime:t[e.contactId].datetime})}return e}))})),e.abrupt("break",27);case 15:return c(s.a)===l.friendId&&a(s.a,(function(e){return null})),a(s.i,(function(e){return e.filter((function(e){return e.contactId!==l.friendId}))})),e.abrupt("break",27);case 19:return Array.isArray(l.data)?a(s.i,(function(e){return e.map((function(e){var t=l.data.findIndex((function(t){return t.userId===e.contactId}));return t>=0?Object(r.a)(Object(r.a)({},e),{},{socketId:l.data[t].socketId}):Object(r.a)({},e)}))})):(d=l.data,f=d.userId,m=d.socketId,p=null,b=0,h=!1,a(s.i,(function(e){var t=e.findIndex((function(e){return e.contactId===f}));if(t>=0&&(p=e[t].nickname,b=e[t].friendShipStatus,m!==e[t].socketId)){var n=Object(r.a)(Object(r.a)({},e[t]),{},{socketId:m}),a=e.slice(0,t).concat([n]).concat(e.slice(t+1));return h=!0,a}return e})),p&&1===b&&h&&(l.notification?l.notification("".concat(p," ").concat(l.msg[c(s.k)]),{variant:"info"}):l.OSNotification&&l.OSNotification(p,l.msg[c(s.k)]))),e.abrupt("break",27);case 21:return v=null,g=0,a(s.i,(function(e){var t=e.findIndex((function(e){return e.socketId===l.socketId}));return t>=0?(v=e[t].nickname,g=e[t].friendShipStatus,Object(i.a)(e).slice(0,t).concat([Object(r.a)(Object(r.a)({},e[t]),{},{socketId:null})]).concat(e.slice(t+1))):e})),v&&1===g&&l.notification("".concat(v," ").concat(l.msg[c(s.k)]),{variant:"warning"}),e.abrupt("break",27);case 26:return e.abrupt("break",27);case 27:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}),d=Object(u.selector)({key:"conversationSelector",set:function(e,t){var n=e.set,a=t.contactId,o=t.conversation,r=function(e,t,n,a){return e===n?0:t===n?a?3:2:void 0};n(Object(s.j)(a),(function(e){return o.map((function(e){return{_id:e._id,content:e.content,datetime:e.datetime,state:r(e.userOrigin,e.userDestiny,a,e.readed)}}))}))}}),f=Object(u.selector)({key:"addMessageToConversation",set:function(e,t){var n=e.set,a=t.contactId,o={_id:t.messageId,content:t.content,datetime:t.datetime,state:t.state};n(Object(s.j)(a),(function(e){return e.concat([o])}))}}),m=Object(u.selector)({key:"editMsgToStateSavedSelector",set:function(e,t){var n=e.set,a=t.contactId,o=t.messageId,c=t.datetime,i=t.consecutive;n(Object(s.j)(a),(function(e){var t=e.findIndex((function(e){return e._id===i&&1===e.state}));if(t>=0){var n=Object(r.a)(Object(r.a)({},e[t]),{},{state:2,_id:o,datetime:c});return e.slice(0,t).concat([n]).concat(e.slice(t+1))}return e}))}}),p=Object(u.selector)({key:"editAllMsgToSavedSelector",set:function(e,t){var n=e.set,a=t.contactId;n(Object(s.j)(a),(function(e){return e.map((function(e){return 0!==e.state?Object(r.a)(Object(r.a)({},e),{},{state:3}):e}))}))}})},77:function(e,t,n){e.exports=n.p+"static/media/logo192-removebg-preview.551636c3.png"},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(3),o=Object(a.atom)({key:"notificationAtom",default:{open:!1,autoHideDuration:6e3,severity:"success",msg:""}})}},[[124,6,7]]]);
//# sourceMappingURL=main.84973baa.chunk.js.map