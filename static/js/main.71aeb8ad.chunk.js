(this.webpackJsonpphone_book=this.webpackJsonpphone_book||[]).push([[0],{30:function(t,e,n){},32:function(t,e,n){},39:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),r=n(19),i=n.n(r),s=n(8),a=(n(30),n(14)),j=n.n(a),u=n(20),h=n(17),b=(n(32),n(2)),l=n(7),d=n(11),p="jwt",O=function(){return!!localStorage.getItem(p)},f=n(1),g=function(t){var e=t.component,n=t.restricted,c=Object(d.a)(t,["component","restricted"]);return Object(f.jsx)(b.b,Object(l.a)(Object(l.a)({},c),{},{render:function(t){return O()&&n?Object(f.jsx)(b.a,{to:"/dashboard"}):Object(f.jsx)(e,Object(l.a)({},t))}}))},x=function(t){var e=t.component,n=t.phones,c=t.getPhonesHandler,o=Object(d.a)(t,["component","phones","getPhonesHandler"]);return Object(f.jsx)(b.b,Object(l.a)(Object(l.a)({},o),{},{render:function(t){return O()?Object(f.jsx)(e,Object(l.a)({phones:n,getPhonesHandler:c},t)):Object(f.jsx)(b.a,{to:"/signin"})}}))},m=function(t){var e=function(){localStorage.setItem(p,"TestLogin"),t.history.push("/dashboard")};return Object(c.useEffect)((function(){console.log(t)}),[]),Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Sign in"}),Object(f.jsx)("button",{onClick:function(){return e()},children:"Click here to log in"})]})},v=function(t){var e=t.phones,n=t.getPhonesHandler;return Object(c.useEffect)((function(){n()}),[]),Object(f.jsx)("main",{className:"main",children:Object(f.jsx)("div",{className:"container",children:Object(f.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(t){var e=t.id,n=t.name,c=t.phone;return Object(f.jsxs)("li",{children:[n.last," ",n.first,", phone: ",c]},e)}))})})})},k=n(22),S=n(23),C=n(25),L=n(24),P=function(t){Object(C.a)(n,t);var e=Object(L.a)(n);function n(t){var c;return Object(k.a)(this,n),(c=e.call(this,t)).handleLogout=function(){localStorage.removeItem(p),c.setState({isLogin:!1})},c.state={isLogin:O()},c}return Object(S.a)(n,[{key:"render",value:function(){var t=this;return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Home"}),this.state.isLogin?Object(f.jsx)("button",{onClick:function(){return t.handleLogout()},children:"Click here to log out"}):Object(f.jsx)(s.b,{to:"/signin",children:"Go to sign in page"})]})}}]),n}(c.Component),y=function(){var t=Object(c.useState)([]),e=Object(h.a)(t,2),n=e[0],o=e[1],r=Object(c.useState)(!1),i=Object(h.a)(r,2);i[0],i[1],Object(b.g)();function s(){return(s=Object(u.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("http://localhost:3000/phones.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(t){return t.json()})).then((function(t){return o(t.phones)})).catch((function(t){console.log(t.toString())})));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(c.useEffect)((function(){}),[]),Object(f.jsxs)(b.d,{children:[Object(f.jsx)(g,{restricted:!1,component:P,path:"/",exact:!0}),Object(f.jsx)(g,{restricted:!0,component:m,path:"/signin",exact:!0}),Object(f.jsx)(x,{component:v,path:"/dashboard",phones:n,getPhonesHandler:function(){return s.apply(this,arguments)},exact:!0})]})},H=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,40)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),c(t),o(t),r(t),i(t)}))};i.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(s.a,{children:Object(f.jsx)(y,{})})}),document.getElementById("root")),H()}},[[39,1,2]]]);
//# sourceMappingURL=main.71aeb8ad.chunk.js.map