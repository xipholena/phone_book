(this.webpackJsonpphone_book=this.webpackJsonpphone_book||[]).push([[0],{42:function(e,t,n){},43:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),r=n(24),a=n.n(r),i=n(12),o=n(8),l=n(17),d=n(32),u=n(11),j=n(3),b="LOG_IN_REQUEST",m="LOG_IN_SUCCESS",p="LOG_IN_FAILED",O="LOG_OUT",h="/",f="/home",x="/login",g="/add",v={phone:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":personId";return"/".concat(e)},edit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":id";return"/edit/".concat(e)}},_="GET_USERS_REQUESTED",N="GET_USERS_SUCCESS",y="GET_USERS_FAILED",S="SEND_USER_REQUESTED",w="SEND_USER_SUCCESS",E="UPDATE_USER_REQUESTED",U="DELETE_USER_REQUESTED",k="DELETE_USER_SUCCESS",C={users:[],loading:!1,error:null,isMakingRequest:!1},L={isLogged:!1,isLoading:!1,email:"",error:null},A=Object(l.combineReducers)({logUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!0});case m:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,isLogged:!0});case p:return Object(j.a)(Object(j.a)({},e),{},{isLoading:!1,isLogged:!1,error:t.message});case O:return Object(j.a)(Object(j.a)({},e),{},{isLogged:!1});default:return e}},users:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case _:return Object(j.a)(Object(j.a)({},t),{},{loading:!0});case N:return Object(j.a)(Object(j.a)({},t),{},{loading:!1,users:n.users});case y:return Object(j.a)(Object(j.a)({},t),{},{loading:!1,error:n.message});case k:return Object(j.a)(Object(j.a)({},t),{},{users:null===(e=t.users)||void 0===e?void 0:e.filter((function(e){return e.id!==n.userId}))});case E:case S:return Object(j.a)(Object(j.a)({},t),{},{isMakingRequest:!0});case w:return console.log("reducer, action.newUser",n.newUser),Object(j.a)(Object(j.a)({},t),{},{users:[].concat(Object(u.a)(t.users),[n.newUser]),isMakingRequest:!1});default:return t}}}),T=n(33),R=n(5),I=n.n(R),q=n(9),F=function(){return{type:b}},D=function(){return{type:O}},M=function(e){return{type:N,users:e}},G=function(e){return console.log("actions, sendUserSuccess, parameter: ","newUser: ",e),{type:w,newUser:e}},P=function(e){return console.log("actions, deleteUsersSuccess, parameter: ",e),{type:k,userId:e}},Z="current user",Q=I.a.mark(ee),$=I.a.mark(te),B=I.a.mark(ne),J=I.a.mark(se),W=I.a.mark(ce),Y=I.a.mark(re),z=I.a.mark(ae),H=I.a.mark(ie),K=I.a.mark(oe),V=I.a.mark(le),X=function(){return fetch("http://localhost:3000/phones.json",{headers:{"Content-Type":"application/json",Accept:"application/json",redirect:"error"}}).then((function(e){return e.json()})).then((function(e){return e.phones})).catch((function(e){console.log("some error",e.toString())}))};function ee(e){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(q.c)(1e3);case 3:return e.next=5,Object(q.b)(X);case 5:return t=e.sent,e.next=8,Object(q.d)(M(t));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(0),e.next=14,Object(q.d)((n=e.t0,{type:y,message:n.message}));case 14:case"end":return e.stop()}var n}),Q,null,[[0,10]])}function te(e){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(q.c)(1e3);case 3:return localStorage.setItem(Z,"some email"),e.next=6,Object(q.d)({type:m});case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(q.d)((t=e.t0,{type:p,message:t.message}));case 12:case"end":return e.stop()}var t}),$,null,[[0,8]])}function ne(e){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem(Z),e.next=3,Object(q.d)(D());case 3:case"end":return e.stop()}}),B)}function se(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.e)(b,te);case 2:return e.next=4,Object(q.e)(O,ne);case 4:case"end":return e.stop()}}),J)}function ce(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.e)(m,ee);case 2:case"end":return e.stop()}}),W)}function re(e){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(q.c)(1e3);case 3:return t.next=5,Object(q.d)(P(e.userId));case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),Y,null,[[0,7]])}function ae(e){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(q.c)(1e3);case 3:return t.next=5,Object(q.d)(G(e.newUser));case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),z,null,[[0,7]])}function ie(e){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(q.c)(1e3);case 3:return t.next=5,Object(q.d)(P(e.userId));case 5:return t.next=7,Object(q.d)(G(e.updatedUser));case 7:t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:case"end":return t.stop()}}),H,null,[[0,9]])}function oe(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.e)(U,re);case 2:return e.next=4,Object(q.e)(S,ae);case 4:return e.next=6,Object(q.e)(E,ie);case 6:case"end":return e.stop()}}),K)}function le(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(q.a)([ce(),se(),oe()]);case 2:case"end":return e.stop()}}),V)}var de=Object(T.a)(),ue=Object(l.createStore)(A,Object(d.composeWithDevTools)(Object(l.applyMiddleware)(de)));de.run(le);var je=ue,be=(n(42),n(43),n(10)),me=n(27),pe=n(1),Oe=function(e){var t=e.component,n=e.restricted,s=Object(me.a)(e,["component","restricted"]),c=Object(o.c)((function(e){return e}));return Object(pe.jsx)(be.b,Object(j.a)(Object(j.a)({},s),{},{render:function(e){return c.logUser.isLogged&&n?Object(pe.jsx)(be.a,{to:{pathname:h}}):Object(pe.jsx)(t,Object(j.a)({},e))}}))},he=function(e){var t=e.component,n=Object(me.a)(e,["component"]),s=Object(o.c)((function(e){return e}));return Object(pe.jsx)(be.b,Object(j.a)(Object(j.a)({},n),{},{render:function(e){return s.logUser.isLogged?Object(pe.jsx)(t,Object(j.a)({},e)):Object(pe.jsx)(be.a,{to:{pathname:x}})}}))},fe=n(21),xe=function(){var e,t,n=Object(fe.a)(),s=n.register,c=n.handleSubmit,r=n.watch,a=n.formState.errors,i=r("email"),l=Object(o.b)(),d=Object(o.c)((function(e){return e.logUser.isLoading}));return Object(pe.jsxs)(pe.Fragment,{children:[Object(pe.jsxs)("form",{onSubmit:c((function(){l(F(i))})),className:"form",children:[" ",Object(pe.jsx)("input",Object(j.a)(Object(j.a)({},s("email",{validate:{required:function(e){return e.length||"This field is required"},isCorrect:function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||"Invalid email address"}}})),{},{className:"form__field",placeholder:"email"})),a.email&&Object(pe.jsx)("span",{children:null===(e=a.email)||void 0===e?void 0:e.message})," ",Object(pe.jsx)("input",Object(j.a)(Object(j.a)({},s("password",{validate:{required:function(e){return e.length||"This field is required"},length:function(e){return e.length>8||"Needs at least 8 symbols"},capital:function(e){return-1!==e.search(/[A-Z]/)||"Must contain at least 1 capital letter"},small:function(e){return-1!==e.search(/[a-z]/)||"Must contain at least 1 small letter"},digits:function(e){return-1!==e.search(/[0-9]/)||"Must contain at least 1 digit"}}})),{},{className:"form__field",type:"password",placeholder:"password"})),a.password&&Object(pe.jsx)("span",{children:null===(t=a.password)||void 0===t?void 0:t.message}),Object(pe.jsx)("input",{type:"submit",className:"form__button"})]}),d?Object(pe.jsx)("div",{className:"dialog",children:Object(pe.jsx)("div",{className:"dialog__overlay",children:Object(pe.jsx)("div",{className:"dialog__window",children:Object(pe.jsx)("p",{className:"dialog__msg",children:"Getting access..."})})})}):Object(pe.jsx)(pe.Fragment,{})]})},ge=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){var t;return null===(t=e.users.users)||void 0===t?void 0:t.sort((function(e,t){return e.name.last.localeCompare(t.name.last)}))})),n=Object(o.c)((function(e){return e.users.loading})),s=function(t,n){e(function(e){return console.log("actions deleteUser, parameter:",e),{type:U,userId:e}}(n))};return Object(pe.jsxs)("main",{className:"main",children:[Object(pe.jsx)("div",{className:"bg",children:Object(pe.jsx)("div",{className:"container",children:Object(pe.jsx)(i.b,{to:{pathname:f},className:"main__link",children:"Go home"})})}),Object(pe.jsxs)("div",{className:"container",children:[Object(pe.jsx)(i.b,{to:g,className:"form__button",children:"Add user"}),n?Object(pe.jsx)("p",{children:"Wait for it..."}):Object(pe.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e,n){var c,r,a=e.id,o=e.name;e.phone;return(null===(c=t[n-1])||void 0===c?void 0:c.name.last.slice(0,1))!==(null===(r=t[n])||void 0===r?void 0:r.name.last.slice(0,1))?Object(pe.jsxs)("li",{className:"withSeparator",children:[Object(pe.jsxs)("p",{children:[t[n].name.last.slice(0,1)," "]}),Object(pe.jsx)("ul",{className:"firstInRow",children:Object(pe.jsxs)("li",{className:"name",children:[Object(pe.jsxs)(i.b,{to:"/".concat(a),children:[o.last," ",o.first]}),Object(pe.jsx)("button",{onClick:function(e){return s(0,a)},type:"button",className:"form__button",children:"Delete user "})]})})]},a):Object(pe.jsx)(pe.Fragment,{children:Object(pe.jsxs)("li",{className:"name",children:[Object(pe.jsxs)(i.b,{to:"/".concat(a),children:[o.last," ",o.first]}),Object(pe.jsx)("button",{onClick:function(e){return s(0,a)},type:"button",className:"form__button",children:"Delete user "})]},a)})}))})]})]})},ve=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e}));return Object(pe.jsxs)("div",{children:[Object(pe.jsx)("h1",{children:"Home"}),t.logUser.isLogged?Object(pe.jsx)("button",{onClick:function(){e(D())},children:"Click here to log out"}):Object(pe.jsx)(i.b,{to:{pathname:x},children:"Go to sign in page"})]})},_e=function(){var e=Object(be.h)().personId,t=Object(o.c)((function(e){return e.users.users})),n=Object(s.useMemo)((function(){return null===t||void 0===t?void 0:t.find((function(t){return t.id===e}))}),[t,e]);Object(be.h)();return Object(s.useEffect)((function(){console.log("personId",e),console.log("person",n)})),n?Object(pe.jsx)(pe.Fragment,{children:Object(pe.jsxs)("div",{className:"container",children:[Object(pe.jsx)(i.b,{to:"/edit/:".concat(n.id),className:"form__button",children:"Edit user "}),Object(pe.jsxs)("div",{className:"person",children:[Object(pe.jsxs)("h1",{children:[n.name.first," ",n.name.last]}),Object(pe.jsxs)("p",{children:[Object(pe.jsx)("span",{className:"person__info-title",children:"id:  "}),Object(pe.jsx)("span",{className:"person__info-description",children:n.id})]}),Object(pe.jsxs)("p",{children:[Object(pe.jsx)("span",{className:"person__info-title",children:"Status:  "}),Object(pe.jsx)("span",{className:"person__info-description",children:n.isActive?"active":"not active"})]}),Object(pe.jsxs)("p",{children:[Object(pe.jsx)("span",{className:"person__info-title",children:"Age:  "}),Object(pe.jsx)("span",{className:"person__info-description",children:n.age})]}),Object(pe.jsxs)("p",{children:[Object(pe.jsx)("span",{className:"person__info-title",children:"Company:  "}),Object(pe.jsx)("span",{className:"person__info-description",children:n.company})]}),Object(pe.jsxs)("p",{children:[Object(pe.jsx)("span",{className:"person__info-title",children:"Email:  "}),Object(pe.jsx)("span",{className:"person__info-description",children:n.email})]}),Object(pe.jsxs)("p",{children:[Object(pe.jsx)("span",{className:"person__info-title",children:"Phone:  "}),Object(pe.jsx)("span",{className:"person__info-description",children:n.phone})]}),Object(pe.jsxs)("p",{children:[Object(pe.jsx)("span",{className:"person__info-title",children:"Address: "}),Object(pe.jsx)("span",{className:"person__info-description",children:n.address})]}),Object(pe.jsxs)("p",{children:[Object(pe.jsx)("span",{className:"person__info-title",children:"Registered:  "}),Object(pe.jsx)("span",{className:"person__info-description",children:n.registered})]})]})]})}):Object(pe.jsx)("h1",{children:"Sorry, something went wrong"})},Ne=function(){var e,t,n,c,r,a,i=Object(be.h)();Object(s.useEffect)((function(){console.log("params",i)}));var l=Object(o.b)(),d=Object(o.c)((function(e){return null===e||void 0===e?void 0:e.users.isMakingRequest})),u=Object(fe.a)(),b=u.register,m=u.handleSubmit,p=u.watch,O=u.formState.errors,h=p("firstName"),f=p("lastName"),x=p("status"),g=p("age"),v=p("company"),_=p("email"),N=p("phone"),y=p("address"),S=p("registered"),w={id:i.id.slice(1),isActive:"active"===x,age:g,name:{first:h,last:f},company:v,email:_,phone:N,address:y,registered:S};return Object(pe.jsxs)(pe.Fragment,{children:[Object(pe.jsx)("div",{className:"container",children:Object(pe.jsxs)("form",{onSubmit:m((function(){console.log(i.id.slice(1)),l(function(e,t){return console.log("actions updateUser, parameter:",e),{type:E,userId:e,updatedUser:t}}(i.id.slice(1),w))})),className:"edit-form",children:[Object(pe.jsx)("p",{className:"edit-form__title",children:"Edit profile"}),Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"First name",className:"add-form__field"},b("firstName",{}))),Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"Last name",className:"add-form__field"},b("lastName",{}))),Object(pe.jsxs)("select",Object(j.a)(Object(j.a)({className:"add-form__field"},b("status")),{},{children:[Object(pe.jsx)("option",{value:"active",children:"active"}),Object(pe.jsx)("option",{value:"not active",children:"not active"})]})),Object(pe.jsx)("input",Object(j.a)({type:"number",placeholder:"Age",className:"add-form__field"},b("age",{validate:{required:function(e){return e.length||"This field is required"},isCorrect:function(e){return+e>=1&&+e<=120||"Your age must be 1 to 120 years"}}}))),(null===(e=O.age)||void 0===e?void 0:e.message)&&Object(pe.jsx)("span",{children:null===(t=O.age)||void 0===t?void 0:t.message}),Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"Company",className:"add-form__field"},b("company",{}))),Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"Email",className:"add-form__field"},b("email",{validate:{required:function(e){return e.length||"This field is required"},isCorrect:function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||"Invalid email address"}}}))),(null===(n=O.email)||void 0===n?void 0:n.message)&&Object(pe.jsx)("span",{children:null===(c=O.email)||void 0===c?void 0:c.message}),Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"Phone",className:"add-form__field"},b("phone",{validate:{required:function(e){return e.length||"This field is required"},isCorrectLength:function(e){return 11!==e.match(/[0-9]/g).join("").length||"Phone number must contain 11 digits"},startsCorrectly:function(e){return"1"===e.slice(0,1)||"1"===e.slice(1,2)||"Phone number must start with 1"}}}))),(null===(r=O.phone)||void 0===r?void 0:r.message)&&Object(pe.jsx)("span",{children:null===(a=O.phone)||void 0===a?void 0:a.message}),Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"Address",className:"add-form__field"},b("address",{}))),Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"Registered",className:"add-form__field"},b("registered",{}))),Object(pe.jsx)("button",{className:"form__button",children:"Submit"})]})}),d?Object(pe.jsx)("div",{className:"dialog",children:Object(pe.jsx)("div",{className:"dialog__overlay",children:Object(pe.jsx)("div",{className:"dialog__window",children:Object(pe.jsx)("p",{className:"dialog__msg",children:"Sending data..."})})})}):Object(pe.jsx)(pe.Fragment,{})]})};var ye=function(){Object(be.g)();var e,t,n,s,c,r,a=Object(fe.a)(),i=a.register,l=a.handleSubmit,d=a.watch,u=a.formState.errors,b=Object(o.b)(),m=Object(o.c)((function(e){return null===e||void 0===e?void 0:e.users.isMakingRequest})),p=d("firstName"),O=d("lastName"),h=d("status"),f=d("age"),x=d("company"),g=d("email"),v=d("phone"),_=d("address"),N=d("registered");return Object(pe.jsxs)(pe.Fragment,{children:[Object(pe.jsx)("div",{className:"container",children:Object(pe.jsxs)("form",{className:"add-form",onSubmit:l((function(){console.log(p,O,"status:",h,f,x,g,v,_,N);var e={id:(new Date).getTime().toString(),isActive:"active"===h,age:f,name:{first:p,last:O},company:x,email:g,phone:v,address:_,registered:N};b(function(e){return console.log("actions, sendUserRequest, newUser:",e),{type:S,newUser:e}}(e))})),children:[Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"First name",className:"add-form__field"},i("firstName",{}))),Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"Last name",className:"add-form__field"},i("lastName",{}))),Object(pe.jsxs)("select",Object(j.a)(Object(j.a)({className:"add-form__field"},i("status")),{},{children:[Object(pe.jsx)("option",{value:"active",children:"active"}),Object(pe.jsx)("option",{value:"not active",children:"not active"})]})),Object(pe.jsx)("input",Object(j.a)({type:"number",placeholder:"Age",className:"add-form__field"},i("age",{validate:{required:function(e){return e.length||"This field is required"},isCorrect:function(e){return+e>=1&&+e<=120||"Your age must be 1 to 120 years"}}}))),(null===(e=u.age)||void 0===e?void 0:e.message)&&Object(pe.jsx)("span",{children:null===(t=u.age)||void 0===t?void 0:t.message}),Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"Company",className:"add-form__field"},i("company",{}))),Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"Email",className:"add-form__field"},i("email",{validate:{required:function(e){return e.length||"This field is required"},isCorrect:function(e){return/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)||"Invalid email address"}}}))),(null===(n=u.email)||void 0===n?void 0:n.message)&&Object(pe.jsx)("span",{children:null===(s=u.email)||void 0===s?void 0:s.message}),Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"Phone",className:"add-form__field"},i("phone",{validate:{required:function(e){return e.length||"This field is required"},isCorrectLength:function(e){return 11!==e.match(/[0-9]/g).join("").length||"Phone number must contain 11 digits"},startsCorrectly:function(e){return"1"===e.slice(0,1)||"1"===e.slice(1,2)||"Phone number must start with 1"}}}))),(null===(c=u.phone)||void 0===c?void 0:c.message)&&Object(pe.jsx)("span",{children:null===(r=u.phone)||void 0===r?void 0:r.message}),Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"Address",className:"add-form__field"},i("address",{}))),Object(pe.jsx)("input",Object(j.a)({type:"text",placeholder:"Registered",className:"add-form__field"},i("registered",{}))),Object(pe.jsx)("button",{type:"submit",className:"form__button",children:"Submit"})]})}),m?Object(pe.jsx)("div",{className:"dialog",children:Object(pe.jsx)("div",{className:"dialog__overlay",children:Object(pe.jsx)("div",{className:"dialog__window",children:Object(pe.jsx)("p",{className:"dialog__msg",children:"Sending data..."})})})}):Object(pe.jsx)(pe.Fragment,{})]})},Se=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e}));return Object(s.useEffect)((function(){localStorage.getItem(Z)&&e(F())}),[e]),console.log("render App"),console.log("state",t),Object(pe.jsx)(pe.Fragment,{children:Object(pe.jsxs)(be.d,{children:[Object(pe.jsx)(he,{component:ye,path:g}),Object(pe.jsx)(he,{component:Ne,path:v.edit()}),Object(pe.jsx)(he,{component:ge,path:h,exact:!0}),Object(pe.jsx)(Oe,{restricted:!1,component:ve,path:f,exact:!0}),Object(pe.jsx)(Oe,{restricted:!0,component:xe,path:x,exact:!0}),Object(pe.jsx)(he,{component:_e,path:v.phone(),exact:!0})]})})},we=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(pe.jsx)(c.a.StrictMode,{children:Object(pe.jsx)(i.a,{children:Object(pe.jsx)(o.a,{store:je,children:Object(pe.jsx)(Se,{})})})}),document.getElementById("root")),we()}},[[47,1,2]]]);
//# sourceMappingURL=main.8171ef84.chunk.js.map