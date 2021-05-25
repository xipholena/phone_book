(this.webpackJsonpphone_book=this.webpackJsonpphone_book||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(23),a=n.n(s),o=n(15),i=n(11),u=n(16),l=n(32),j=n(35),d=n(7),b="LOG_IN",h="LOG_OUT",O="/",p="/home",f="/login",m="/phone_book",g="GET_USERS_SUCCESS",x="GET_USERS_FAILED",v={isLogged:!1},S={users:[],loading:!1,error:null};var E=Object(u.combineReducers)({logUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(d.a)(Object(d.a)({},e),{},{isLogged:!0});case h:return Object(d.a)(Object(d.a)({},e),{},{isLogged:!1});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,users:t.users});case x:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:t.message});default:return e}}}),_=n(36),w=n(6),T=n.n(w),U=n(20),y="current user",L=function(){return!!localStorage.getItem(y)},C=T.a.mark(N),k=T.a.mark(R),G=T.a.mark(A),I=function(){return fetch("http://localhost:3000/phones.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e.toString())}))};function N(e){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(U.b)(I);case 3:return t=e.sent,e.next=6,Object(U.c)({type:"GET_USERS_SUCCESS",users:t});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(U.c)({type:"GET_USERS_FAILED",message:e.t0.message});case 12:case"end":return e.stop()}}),C,null,[[0,8]])}function R(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.d)("GET_USERS_REQUESTED",N);case 2:case"end":return e.stop()}}),k)}function A(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.a)([R()]);case 2:case"end":return e.stop()}}),G)}var F=Object(_.a)(),D=Object(u.createStore)(E,Object(l.composeWithDevTools)(Object(u.applyMiddleware)(j.a,F)));F.run(A);var M=D,q=(n(45),n(46),n(8)),Z=n(26),B=n(3),J=function(e){var t=e.component,n=e.restricted,r=Object(Z.a)(e,["component","restricted"]);return Object(B.jsx)(q.b,Object(d.a)(Object(d.a)({},r),{},{render:function(e){return L()&&n?Object(B.jsx)(q.a,{to:{pathname:O}}):Object(B.jsx)(t,Object(d.a)({},e))}}))},P=function(e){var t=e.component,n=Object(Z.a)(e,["component"]),r=M.getState();return Object(B.jsx)(q.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return r.logUser.isLogged?Object(B.jsx)(t,Object(d.a)({},e)):Object(B.jsx)(q.a,{to:{pathname:f}})}}))},Q=n(34),z=function(e){var t,n,r=Object(q.g)(),c=Object(Q.a)(),s=c.register,a=c.handleSubmit,o=c.watch,u=c.formState.errors,l=o("email"),j=Object(i.c)();return Object(B.jsxs)("form",{onSubmit:a((function(){var e;j({type:b,payload:!0}),e=l,localStorage.setItem(y,e),r.push(O)})),className:"form",children:[" ",Object(B.jsx)("input",Object(d.a)(Object(d.a)({},s("email",{validate:{required:function(e){return e.length||"This field is required"},isCorrect:function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||"Invalid email address"}}})),{},{className:"form__field"})),u.email&&Object(B.jsx)("span",{children:null===(t=u.email)||void 0===t?void 0:t.message})," ",Object(B.jsx)("input",Object(d.a)(Object(d.a)({},s("password",{validate:{required:function(e){return e.length||"This field is required"},length:function(e){return e.length>8||"Needs at least 8 symbols"},capital:function(e){return-1!==e.search(/[A-Z]/)||"Must contain at least 1 capital letter"},small:function(e){return-1!==e.search(/[a-z]/)||"Must contain at least 1 small letter"},digits:function(e){return-1!==e.search(/[0-9]/)||"Must contain at least 1 digit"}}})),{},{className:"form__field"})),u.password&&Object(B.jsx)("span",{children:null===(n=u.password)||void 0===n?void 0:n.message}),Object(B.jsx)("input",{type:"submit",className:"form__button"})]})},H=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){var t;return null===(t=e.users.users.phones)||void 0===t?void 0:t.sort((function(e,t){return e.name.last.localeCompare(t.name.last)}))}));Object(i.d)((function(e){return e.users.users})),Object(i.d)((function(e){return e.users.loading})),Object(i.d)((function(e){return e.users.error}));return Object(r.useEffect)((function(){e({type:"GET_USERS_REQUESTED"})}),[]),Object(B.jsx)("main",{className:"main",children:Object(B.jsxs)("div",{className:"container",children:[Object(B.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e,n){var r,c,s=e.id,a=e.name,o=e.phone;return(null===(r=t[n-1])||void 0===r?void 0:r.name.last.slice(0,1))!==(null===(c=t[n])||void 0===c?void 0:c.name.last.slice(0,1))?Object(B.jsxs)("li",{className:"withSeparator",children:[Object(B.jsxs)("p",{children:[t[n].name.last.slice(0,1)," "]}),Object(B.jsx)("ul",{className:"firstInRow",children:Object(B.jsxs)("li",{children:[a.last," ",a.first,", phone: ",o]})})]},s):Object(B.jsxs)("li",{children:[a.last," ",a.first,", phone: ",o]},s)}))}),Object(B.jsx)(o.b,{to:{pathname:p},children:"Go home"})]})})},W=function(){var e=Object(i.c)(),t=function(){localStorage.removeItem(y),e({type:h})},n=M.getState();return Object(B.jsxs)("div",{children:[Object(B.jsx)("h1",{children:"Home"}),n.logUser.isLogged||L()?Object(B.jsx)("button",{onClick:function(){return t()},children:"Click here to log out"}):Object(B.jsx)(o.b,{to:{pathname:f},children:"Go to sign in page"})]})},$=Object(i.b)((function(e){return{phones:e.users.users.phones,isLogged:e.logUser.isLogged,form:e.form}}))((function(e){e.phones,Object(i.d)((function(e){return e}));return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)(q.d,{children:[Object(B.jsx)(J,{restricted:!1,component:W,path:p,exact:!0}),Object(B.jsx)(J,{restricted:!0,component:z,path:f,exact:!0}),Object(B.jsx)(P,{component:H,path:O,exact:!0}),Object(B.jsx)(q.a,{path:m,to:{pathname:f}})]})})})),K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(B.jsx)(c.a.StrictMode,{children:Object(B.jsx)(o.a,{children:Object(B.jsx)(i.a,{store:M,children:Object(B.jsx)($,{})})})}),document.getElementById("root")),K()}},[[49,1,2]]]);
//# sourceMappingURL=main.6908f053.chunk.js.map