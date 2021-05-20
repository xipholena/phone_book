(this.webpackJsonpphone_book=this.webpackJsonpphone_book||[]).push([[0],{162:function(e,t,n){},163:function(e,t,n){},205:function(e,t,n){"use strict";n.r(t);var o=n(0),s=n.n(o),c=n(43),i=n.n(c),r=n(18),a=n(21),l=n(8),d=n(88),j=n(10),u=n(208),b="LOG_IN",h="LOG_OUT",O="GET_PHONES",p={isLogged:!1,phones:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.isLogged,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(j.a)(Object(j.a)({},e),{},{isLogged:!0});case h:return Object(j.a)(Object(j.a)({},e),{},{isLogged:!1});default:return e}},g=Object(l.combineReducers)({logUser:m,setPhones:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p.phones,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(j.a)(Object(j.a)({},e),{},{phones:t.payload});default:return e}},form:u.a}),x=Object(l.createStore)(g,p,Object(d.composeWithDevTools)(Object(l.applyMiddleware)())),f=(n(162),n(163),n(7)),v=n(45),F="jwt",w=function(){return!!localStorage.getItem(F)},L=n(2),S=function(e){var t=e.component,n=e.restricted,o=Object(v.a)(e,["component","restricted"]);return Object(L.jsx)(f.b,Object(j.a)(Object(j.a)({},o),{},{render:function(e){return w()&&n?Object(L.jsx)(f.a,{to:"/dashboard"}):Object(L.jsx)(t,Object(j.a)({},e))}}))},y=function(e){var t=e.component,n=e.phones,o=Object(v.a)(e,["component","phones"]);return Object(L.jsx)(f.b,Object(j.a)(Object(j.a)({},o),{},{render:function(e){return w()?Object(L.jsx)(t,Object(j.a)({phones:n},e)):Object(L.jsx)(f.a,{to:"/login"})}}))},k=n(207),I=n(206),C=function(e){return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("input",{type:"text"}),e.meta.error&&Object(L.jsx)("span",{children:e.meta.error})]})},E=Object(I.a)({form:"signIn",initialValues:{emailField:"",passwordField:""},validate:function(e){var t={};return e.emailField?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.emailField)||(t.emailField="Invalid email address"):t.emailField="Email Required",e.passwordField?e.passwordField.length<8?t.passwordField="Needs at least 8 symbools":-1===e.passwordField.search(/[A-Z]/)?t.passwordField="Must contain at least 1 capital letter":-1===e.passwordField.search(/[a-z]/)?t.passwordField="Must contain at least 1 small letter":-1===e.passwordField.search(/[0-9]/)&&(t.passwordField="Must contain at least 1 digit"):t.passwordField="Password Required",t}})((function(e){e.routeProps,e.inputEmailValidator;var t=e.handleSubmit;return Object(L.jsxs)("div",{children:[Object(L.jsx)("h1",{children:"Sign in"}),Object(L.jsxs)("form",{onSubmit:t,children:[" ",Object(L.jsx)(k.a,{name:"emailField",type:"text",component:C}),Object(L.jsx)(k.a,{name:"passwordField",type:"text",component:C}),Object(L.jsx)("button",{children:"Click here to log in"})]})]})})),N=function(e){var t=e.phones;return Object(o.useEffect)((function(){}),[]),Object(L.jsx)("main",{className:"main",children:Object(L.jsxs)("div",{className:"container",children:[Object(L.jsx)("ul",{children:null===t||void 0===t?void 0:t.map((function(e,n){var o,s,c=e.id,i=e.name,r=e.phone;return(null===(o=t[n-1])||void 0===o?void 0:o.name.last.slice(0,1))!==(null===(s=t[n])||void 0===s?void 0:s.name.last.slice(0,1))?Object(L.jsxs)("li",{className:"withSeparator",children:[Object(L.jsxs)("p",{children:[t[n].name.last.slice(0,1)," "]}),Object(L.jsx)("ul",{className:"firstInRow",children:Object(L.jsxs)("li",{children:[i.last," ",i.first,", phone: ",r]})})]},c):Object(L.jsxs)("li",{children:[i.last," ",i.first,", phone: ",r]},c)}))}),Object(L.jsx)(r.b,{to:"/home",children:"Go home"})]})})},_=n(90),P=n(91),G=n(93),M=n(92),T=function(e){Object(G.a)(n,e);var t=Object(M.a)(n);function n(e){var o;return Object(_.a)(this,n),(o=t.call(this,e)).handleLogout=function(){localStorage.removeItem(F),o.setState({isLogin:!1})},o.state={isLogin:w()},o}return Object(P.a)(n,[{key:"render",value:function(){var e=this;return Object(L.jsxs)("div",{children:[Object(L.jsx)("h1",{children:"Home"}),this.state.isLogin?Object(L.jsx)("button",{onClick:function(){return e.handleLogout()},children:"Click here to log out"}):Object(L.jsx)(r.b,{to:"/login",children:"Go to sign in page"})]})}}]),n}(o.Component),A=Object(a.b)((function(e){return{phones:e.phones,isLogged:e.isLogged}}),(function(e){return{onLogUser:function(){return e(m())}}}))((function(e,t){var n=e.phones;return Object(o.useEffect)((function(){console.log(t)}),[]),Object(L.jsxs)(f.d,{children:[Object(L.jsx)(S,{restricted:!1,component:T,path:"/home",exact:!0}),Object(L.jsx)(S,{restricted:!0,component:E,path:"/login",exact:!0}),Object(L.jsx)(y,{component:N,path:"/",exact:!0,phones:n}),Object(L.jsx)(f.a,{path:"/phone_book",to:"/login"})]})})),R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,209)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),o(e),s(e),c(e),i(e)}))};i.a.render(Object(L.jsx)(s.a.StrictMode,{children:Object(L.jsxs)(r.a,{children:[Object(L.jsx)(a.a,{store:x,children:Object(L.jsx)(A,{})}),","]})}),document.getElementById("root")),R()}},[[205,1,2]]]);
//# sourceMappingURL=main.bbe1c213.chunk.js.map