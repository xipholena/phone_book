(this.webpackJsonpphone_book=this.webpackJsonpphone_book||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(23),s=n.n(a),o=n(16),i=n(9),u=n(17),l=n(32),j=n(35),d=n(7),b="LOG_IN_REQUEST",O="LOG_IN_SUCCESS",p="LOG_IN_FAILED",h="LOG_OUT",f="/",m="/home",g="/login",x="/phone_book",v="GET_USERS_REQUESTED",S="GET_USERS_SUCCESS",_="GET_USERS_FAILED",w={isLogged:!1,isLoading:!1,email:"",error:null},L={users:[],loading:!1,error:null};var E=Object(u.combineReducers)({logUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!0});case O:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,isLogged:!0});case p:return Object(d.a)(Object(d.a)({},e),{},{isLoading:!1,isLogged:!1,error:t.message});case h:return Object(d.a)(Object(d.a)({},e),{},{isLogged:!1});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,users:t.users});case _:return Object(d.a)(Object(d.a)({},e),{},{loading:!1,error:t.message});default:return e}}}),k=n(36),y=n(6),N=n.n(y),U=n(15),C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:b,payload:e}},I=function(){return{type:h}},T="current user",G=N.a.mark(Z),A=N.a.mark(B),F=N.a.mark(J),R=N.a.mark(P),D=N.a.mark(Q),M=N.a.mark(z),q=function(){return fetch("http://localhost:3000/phones.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e.toString())}))};function Z(e){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(U.b)(q);case 3:return t=e.sent,e.next=6,Object(U.d)({type:S,users:t});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(U.d)({type:_,error:e.t0.message});case 12:case"end":return e.stop()}}),G,null,[[0,8]])}function B(e){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(U.c)(1e3);case 3:return localStorage.setItem(T,"some email"),e.next=6,Object(U.d)({type:O});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(U.d)({type:p,message:e.t0.message});case 12:case"end":return e.stop()}}),A,null,[[0,8]])}function J(e){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem(T),e.next=3,Object(U.d)(I());case 3:case"end":return e.stop()}}),F)}function P(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.e)(b,B);case 2:return e.next=4,Object(U.e)(h,J);case 4:case"end":return e.stop()}}),R)}function Q(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.e)(v,Z);case 2:case"end":return e.stop()}}),D)}function z(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(U.a)([Q(),P()]);case 2:case"end":return e.stop()}}),M)}var H=Object(k.a)(),W=Object(u.createStore)(E,Object(l.composeWithDevTools)(Object(u.applyMiddleware)(j.a,H)));H.run(z);var $=W,K=(n(45),n(46),n(8)),V=n(26),X=n(3),Y=function(e){var t=e.component,n=e.restricted,r=Object(V.a)(e,["component","restricted"]),c=Object(i.d)((function(e){return e}));return Object(X.jsx)(K.b,Object(d.a)(Object(d.a)({},r),{},{render:function(e){return c.logUser.isLogged&&n?Object(X.jsx)(K.a,{to:{pathname:f}}):Object(X.jsx)(t,Object(d.a)({},e))}}))},ee=function(e){var t=e.component,n=Object(V.a)(e,["component"]),r=Object(i.d)((function(e){return e}));return Object(X.jsx)(K.b,Object(d.a)(Object(d.a)({},n),{},{render:function(e){return r.logUser.isLogged?Object(X.jsx)(t,Object(d.a)({},e)):Object(X.jsx)(K.a,{to:{pathname:g}})}}))},te=n(34),ne=function(e){Object(K.g)();var t,n,r=Object(te.a)(),c=r.register,a=r.handleSubmit,s=r.watch,o=r.formState.errors,u=s("email"),l=Object(i.c)();return Object(X.jsxs)("form",{onSubmit:a((function(){l(C(u))})),className:"form",children:[" ",Object(X.jsx)("input",Object(d.a)(Object(d.a)({},c("email",{validate:{required:function(e){return e.length||"This field is required"},isCorrect:function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||"Invalid email address"}}})),{},{className:"form__field"})),o.email&&Object(X.jsx)("span",{children:null===(t=o.email)||void 0===t?void 0:t.message})," ",Object(X.jsx)("input",Object(d.a)(Object(d.a)({},c("password",{validate:{required:function(e){return e.length||"This field is required"},length:function(e){return e.length>8||"Needs at least 8 symbols"},capital:function(e){return-1!==e.search(/[A-Z]/)||"Must contain at least 1 capital letter"},small:function(e){return-1!==e.search(/[a-z]/)||"Must contain at least 1 small letter"},digits:function(e){return-1!==e.search(/[0-9]/)||"Must contain at least 1 digit"}}})),{},{className:"form__field"})),o.password&&Object(X.jsx)("span",{children:null===(n=o.password)||void 0===n?void 0:n.message}),Object(X.jsx)("input",{type:"submit",className:"form__button"})]})},re=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){var t;return null===(t=e.users.users.phones)||void 0===t?void 0:t.sort((function(e,t){return e.name.last.localeCompare(t.name.last)}))}));Object(i.d)((function(e){return e.users.users})),Object(i.d)((function(e){return e.users.loading})),Object(i.d)((function(e){return e.users.error}));return Object(r.useEffect)((function(){e({type:v})}),[]),Object(X.jsxs)("main",{className:"main",children:[Object(X.jsx)("div",{className:"bg",children:Object(X.jsx)("div",{className:"container",children:Object(X.jsx)(o.b,{to:{pathname:m},className:"main__link",children:"Go home"})})}),Object(X.jsx)("div",{className:"container",children:Object(X.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e,n){var r,c,a=e.id,s=e.name,o=e.phone;return(null===(r=t[n-1])||void 0===r?void 0:r.name.last.slice(0,1))!==(null===(c=t[n])||void 0===c?void 0:c.name.last.slice(0,1))?Object(X.jsxs)("li",{className:"withSeparator",children:[Object(X.jsxs)("p",{children:[t[n].name.last.slice(0,1)," "]}),Object(X.jsx)("ul",{className:"firstInRow",children:Object(X.jsxs)("li",{children:[s.last," ",s.first,", phone: ",o]})})]},a):Object(X.jsxs)("li",{children:[s.last," ",s.first,", phone: ",o]},a)}))})})]})},ce=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){return e}));return Object(X.jsxs)("div",{children:[Object(X.jsx)("h1",{children:"Home"}),t.logUser.isLogged?Object(X.jsx)("button",{onClick:function(){e(I())},children:"Click here to log out"}):Object(X.jsx)(o.b,{to:{pathname:g},children:"Go to sign in page"})]})},ae=Object(i.b)((function(e){return{phones:e.users.users.phones,isLogged:e.logUser.isLogged}}))((function(e){e.phones,Object(i.d)((function(e){return e}));var t=Object(i.c)();return Object(r.useEffect)((function(){localStorage.getItem(T)&&t(C())}),[t]),Object(X.jsx)(X.Fragment,{children:Object(X.jsxs)(K.d,{children:[Object(X.jsx)(ee,{component:re,path:f,exact:!0}),Object(X.jsx)(Y,{restricted:!1,component:ce,path:m,exact:!0}),Object(X.jsx)(Y,{restricted:!0,component:ne,path:g,exact:!0}),Object(X.jsx)(K.a,{path:x,to:{pathname:g}})]})})})),se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(X.jsx)(c.a.StrictMode,{children:Object(X.jsx)(o.a,{children:Object(X.jsx)(i.a,{store:$,children:Object(X.jsx)(ae,{})})})}),document.getElementById("root")),se()}},[[49,1,2]]]);
//# sourceMappingURL=main.f682685d.chunk.js.map