(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{39:function(e,t,n){},40:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(21),a=n.n(s),i=n(11),o=n(8),l=n(16),d=n(29),j=n(4),u="LOG_IN_REQUEST",b="LOG_IN_SUCCESS",m="LOG_IN_FAILED",p="LOG_OUT",O="/",h="/home",f="/login",x="/add",g={phone:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":personId";return"/".concat(e)},edit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":id";return"/edit/".concat(e)}},v="GET_USERS_REQUESTED",_="GET_USERS_SUCCESS",N="GET_USERS_FAILED",y="SHOW_FORM_ERRORS",S={users:[],loading:!1,error:null},w={isLogged:!1,isLoading:!1,email:"",error:null},E={errors:{}},L=Object(l.combineReducers)({logUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case b:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,isLogged:!0});case m:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,isLogged:!1,error:t.message});case p:return Object(j.a)(Object(j.a)({},e),{},{isLogged:!1});default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(j.a)(Object(j.a)({},e),{},{loading:!0});case _:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,users:t.users});case N:return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:t.message});default:return e}},showFormErrors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(j.a)(Object(j.a)({},e),{},{errors:t.errors});default:return e}}}),A=n(30),C=n(7),F=n.n(C),I=n(14),T=function(){return{type:u}},k=function(){return{type:p}},U=function(e){return{type:_,users:e}},R="current user",q=F.a.mark(W),G=F.a.mark(B),M=F.a.mark(H),Z=F.a.mark(J),D=F.a.mark(Q),P=F.a.mark($),V=function(){return fetch("http://localhost:3000/phones.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){return e.phones})).catch((function(e){console.log(e.toString())}))};function W(e){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(I.c)(1e3);case 3:return e.next=5,Object(I.b)(V);case 5:return t=e.sent,e.next=8,Object(I.d)(U(t));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(I.d)((n=e.t0,{type:N,message:n.message}));case 14:case"end":return e.stop()}var n}),q,null,[[0,10]])}function B(e){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(I.c)(1e3);case 3:return localStorage.setItem(R,"some email"),e.next=6,Object(I.d)({type:b});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(I.d)((t=e.t0,{type:m,message:t.message}));case 12:case"end":return e.stop()}var t}),G,null,[[0,8]])}function H(e){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem(R),e.next=3,Object(I.d)(k());case 3:case"end":return e.stop()}}),M)}function J(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.e)(u,B);case 2:return e.next=4,Object(I.e)(p,H);case 4:case"end":return e.stop()}}),Z)}function Q(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.e)(v,W);case 2:case"end":return e.stop()}}),D)}function $(){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(I.a)([Q(),J()]);case 2:case"end":return e.stop()}}),P)}var z=Object(A.a)(),Y=Object(l.createStore)(L,Object(d.composeWithDevTools)(Object(l.applyMiddleware)(z)));z.run($);var K=Y,X=(n(39),n(40),n(9)),ee=n(17),te=n(1),ne=function(e){var t=e.component,n=e.restricted,r=Object(ee.a)(e,["component","restricted"]),c=Object(o.c)((function(e){return e}));return Object(te.jsx)(X.b,Object(j.a)(Object(j.a)({},r),{},{render:function(e){return c.logUser.isLogged&&n?Object(te.jsx)(X.a,{to:{pathname:O}}):Object(te.jsx)(t,Object(j.a)({},e))}}))},re=function(e){var t=e.component,n=Object(ee.a)(e,["component"]),r=Object(o.c)((function(e){return e}));return Object(te.jsx)(X.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return r.logUser.isLogged?Object(te.jsx)(t,Object(j.a)({},e)):Object(te.jsx)(X.a,{to:{pathname:f}})}}))},ce=n(24),se=function(){var e,t,n=Object(ce.a)(),r=n.register,c=n.handleSubmit,s=n.watch,a=n.formState.errors,i=s("email"),l=Object(o.b)(),d=Object(o.c)((function(e){return e.logUser.isLoading}));return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsxs)("form",{onSubmit:c((function(){l(T(i))})),className:"form",children:[" ",Object(te.jsx)("input",Object(j.a)(Object(j.a)({},r("email",{validate:{required:function(e){return e.length||"This field is required"},isCorrect:function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||"Invalid email address"}}})),{},{className:"form__field",placeholder:"email"})),a.email&&Object(te.jsx)("span",{children:null===(e=a.email)||void 0===e?void 0:e.message})," ",Object(te.jsx)("input",Object(j.a)(Object(j.a)({},r("password",{validate:{required:function(e){return e.length||"This field is required"},length:function(e){return e.length>8||"Needs at least 8 symbols"},capital:function(e){return-1!==e.search(/[A-Z]/)||"Must contain at least 1 capital letter"},small:function(e){return-1!==e.search(/[a-z]/)||"Must contain at least 1 small letter"},digits:function(e){return-1!==e.search(/[0-9]/)||"Must contain at least 1 digit"}}})),{},{className:"form__field",type:"password",placeholder:"password"})),a.password&&Object(te.jsx)("span",{children:null===(t=a.password)||void 0===t?void 0:t.message}),Object(te.jsx)("input",{type:"submit",className:"form__button"})]}),d?Object(te.jsx)("div",{className:"dialog",children:Object(te.jsx)("div",{className:"dialog__overlay",children:Object(te.jsx)("div",{className:"dialog__window",children:Object(te.jsx)("p",{className:"dialog__msg",children:"Getting access..."})})})}):Object(te.jsx)(te.Fragment,{})]})},ae=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){var t;return null===(t=e.users.users)||void 0===t?void 0:t.sort((function(e,t){return e.name.last.localeCompare(t.name.last)}))})),n=Object(o.c)((function(e){return e.users.loading}));return Object(r.useEffect)((function(){e({type:v})}),[]),Object(te.jsxs)("main",{className:"main",children:[Object(te.jsx)("div",{className:"bg",children:Object(te.jsx)("div",{className:"container",children:Object(te.jsx)(i.b,{to:{pathname:h},className:"main__link",children:"Go home"})})}),Object(te.jsxs)("div",{className:"container",children:[Object(te.jsx)("button",{type:"button",className:"form__button",children:"Send contacts"}),Object(te.jsx)("button",{type:"button",className:"form__button",children:"Update contacts"}),Object(te.jsx)("button",{type:"button",className:"form__button",children:"Delete user"}),Object(te.jsx)(i.b,{to:x,className:"form__button",children:"Add user"}),n?Object(te.jsx)("p",{children:"Wait for it..."}):Object(te.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e,n){var r,c,s=e.id,a=e.name;e.phone;return(null===(r=t[n-1])||void 0===r?void 0:r.name.last.slice(0,1))!==(null===(c=t[n])||void 0===c?void 0:c.name.last.slice(0,1))?Object(te.jsxs)("li",{className:"withSeparator",children:[Object(te.jsxs)("p",{children:[t[n].name.last.slice(0,1)," "]}),Object(te.jsx)("ul",{className:"firstInRow",children:Object(te.jsx)("li",{className:"name",children:Object(te.jsxs)(i.b,{to:"/".concat(s),children:[a.last," ",a.first]})})})]},s):Object(te.jsx)("li",{className:"name",children:Object(te.jsxs)(i.b,{to:"/".concat(s),children:[a.last," ",a.first]})},s)}))})]})]})},ie=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e}));return Object(te.jsxs)("div",{children:[Object(te.jsx)("h1",{children:"Home"}),t.logUser.isLogged?Object(te.jsx)("button",{onClick:function(){e(k())},children:"Click here to log out"}):Object(te.jsx)(i.b,{to:{pathname:f},children:"Go to sign in page"})]})},oe=function(){var e=Object(X.g)().personId,t=Object(o.c)((function(e){return e.users.users})),n=Object(r.useMemo)((function(){return null===t||void 0===t?void 0:t.find((function(t){return t.id===e}))}),[t,e]);return n?Object(te.jsx)(te.Fragment,{children:Object(te.jsxs)("div",{className:"container",children:[Object(te.jsx)(i.b,{to:"edit/".concat(n.id),children:"Edit user"}),Object(te.jsxs)("div",{className:"person",children:[Object(te.jsxs)("h1",{children:[n.name.first," ",n.name.last]}),Object(te.jsxs)("p",{children:[Object(te.jsx)("span",{className:"person__info-title",children:"id:  "}),Object(te.jsx)("span",{className:"person__info-description",children:n.id})]}),Object(te.jsxs)("p",{children:[Object(te.jsx)("span",{className:"person__info-title",children:"Status:  "}),Object(te.jsx)("span",{className:"person__info-description",children:n.isActive?"active":"not active"})]}),Object(te.jsxs)("p",{children:[Object(te.jsx)("span",{className:"person__info-title",children:"Age:  "}),Object(te.jsx)("span",{className:"person__info-description",children:n.age})]}),Object(te.jsxs)("p",{children:[Object(te.jsx)("span",{className:"person__info-title",children:"Company:  "}),Object(te.jsx)("span",{className:"person__info-description",children:n.company})]}),Object(te.jsxs)("p",{children:[Object(te.jsx)("span",{className:"person__info-title",children:"Email:  "}),Object(te.jsx)("span",{className:"person__info-description",children:n.email})]}),Object(te.jsxs)("p",{children:[Object(te.jsx)("span",{className:"person__info-title",children:"Phone:  "}),Object(te.jsx)("span",{className:"person__info-description",children:n.phone})]}),Object(te.jsxs)("p",{children:[Object(te.jsx)("span",{className:"person__info-title",children:"Address: "}),Object(te.jsx)("span",{className:"person__info-description",children:n.address})]}),Object(te.jsxs)("p",{children:[Object(te.jsx)("span",{className:"person__info-title",children:"Registered:  "}),Object(te.jsx)("span",{className:"person__info-description",children:n.registered})]})]})]})}):null};function le(e){var t=e.defaultValues,n=e.children,s=e.onSubmit,a=Object(ce.a)({defaultValues:t}),i=a.handleSubmit,l=a.register,d=(a.watch,a.formState.errors),u=Object(o.b)();Object(o.c)((function(e){return e}));return Object(r.useEffect)((function(){console.log("errors",d),u(function(e){return{type:y,errors:e}}(d))}),[d.email]),Object(te.jsx)("div",{className:"container",children:Object(te.jsxs)("form",{onSubmit:i(s),className:"add-form",children:[Object(te.jsx)("p",{className:"edit-form__title",children:"Edit profile"}),Array.isArray(n)?n.map((function(e){var t;return(null===e||void 0===e||null===(t=e.props)||void 0===t?void 0:t.name)?c.a.createElement(e.type,Object(j.a)({},Object(j.a)(Object(j.a)({},e.props),{},{register:l,key:e.props.name}))):e})):n]})})}function de(e){e.defaultValues;var t=e.register,n=e.name,r=e.validate,c=Object(ee.a)(e,["defaultValues","register","name","validate"]);return Object(te.jsx)(te.Fragment,{children:Object(te.jsx)("input",Object(j.a)(Object(j.a)(Object(j.a)({},t(n,r)),c),{},{className:"add-form__field"}))})}function je(e){var t=e.register,n=e.options,r=e.name,c=Object(ee.a)(e,["register","options","name"]);return Object(te.jsx)("select",Object(j.a)(Object(j.a)(Object(j.a)({},t(r)),c),{},{className:"edit-form__field",children:n.map((function(e){return Object(te.jsx)("option",{value:e,children:e})}))}))}var ue=function(e){e.defaultValues;var t,n,c,s,a,i,l=Object(o.c)((function(e){return e.showFormErrors.errors}));return Object(r.useEffect)((function(){var e,t,n;console.log("errors mail",null===(e=l.email)||void 0===e?void 0:e.message),console.log("errors age",null===(t=l.age)||void 0===t?void 0:t.message),console.log("errors age",null===(n=l.phone)||void 0===n?void 0:n.message)})),Object(te.jsx)(te.Fragment,{children:Object(te.jsxs)(le,{onSubmit:function(e){return console.log(e)},children:[Object(te.jsx)(de,{type:"text",name:"firstName",placeholder:"First name"}),Object(te.jsx)(de,{type:"text",name:"lastName",placeholder:"Last name"}),Object(te.jsx)(de,{type:"number",name:"age",placeholder:"Age",validate:{validate:{required:function(e){return e.length||"This field is required"},isCorrect:function(e){return+e>=1&&+e<=120||"Your age must be 1 to 120 years"}}}}),(null===(t=l.age)||void 0===t?void 0:t.message)&&Object(te.jsx)("span",{children:null===(n=l.age)||void 0===n?void 0:n.message}),Object(te.jsx)(je,{name:"status",options:["active","not active"]}),Object(te.jsx)(de,{type:"text",name:"company",placeholder:"Company"}),Object(te.jsx)(de,{type:"text",name:"email",placeholder:"Email",validate:{validate:{required:function(e){return e.length||"This field is required"},isCorrect:function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||"Invalid email address"}}}}),(null===(c=l.email)||void 0===c?void 0:c.message)&&Object(te.jsx)("span",{children:null===(s=l.email)||void 0===s?void 0:s.message}),Object(te.jsx)(de,{type:"text",name:"phone",placeholder:"Phone",validate:{validate:{required:function(e){return e.length||"This field is required"},isCorrectLength:function(e){return 11!==e.match(/[0-9]/g).join("").length||"Phone number must contain 11 digits"},startsCorrectly:function(e){return"1"===e.slice(0,1)||"1"===e.slice(1,2)||"Phone number must start with 1"}}}}),(null===(a=l.phone)||void 0===a?void 0:a.message)&&Object(te.jsx)("span",{children:null===(i=l.phone)||void 0===i?void 0:i.message}),Object(te.jsx)(de,{type:"text",name:"address",placeholder:"Address"}),Object(te.jsx)(de,{type:"text",name:"registered",placeholder:"Registered"}),Object(te.jsx)("button",{className:"form__button",children:"Submit"})]})})},be=function(){var e=Object(o.b)();return Object(r.useEffect)((function(){localStorage.getItem(R)&&e(T())}),[e]),Object(te.jsx)(te.Fragment,{children:Object(te.jsxs)(X.d,{children:[Object(te.jsx)(re,{component:ue,path:x}),Object(te.jsx)(re,{component:ae,path:O,exact:!0}),Object(te.jsx)(ne,{restricted:!1,component:ie,path:h,exact:!0}),Object(te.jsx)(ne,{restricted:!0,component:se,path:f,exact:!0}),Object(te.jsx)(re,{component:oe,path:g.phone(),exact:!0})]})})},me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};a.a.render(Object(te.jsx)(c.a.StrictMode,{children:Object(te.jsx)(i.a,{children:Object(te.jsx)(o.a,{store:K,children:Object(te.jsx)(be,{})})})}),document.getElementById("root")),me()}},[[44,1,2]]]);
//# sourceMappingURL=main.291affd9.chunk.js.map