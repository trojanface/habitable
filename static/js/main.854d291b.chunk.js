(this.webpackJsonphabitable=this.webpackJsonphabitable||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(17),o=n.n(a),s=(n(34),n(10)),r=(n.p,n(35),n(36),n(1));var l=function(){return Object(r.jsxs)("header",{className:"MenuBar",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"habitable"})}),Object(r.jsx)("hr",{className:"MenuLine"})]})},d=(n(38),n(39),n(40).DateTime),u=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];var j=function(e){var t=e.props,n=u[d.now().c.month];console.log(t);var i=Object(c.useContext)(N),a=Object(r.jsx)("button",{className:"addHabitButton",onClick:function(){i(1)},children:"+"});return 1===t?a=Object(r.jsx)("button",{className:"closeHabitButton",onClick:function(){i(0)},children:"X"}):0===t?a=Object(r.jsx)("button",{className:"addHabitButton",onClick:function(){i(1)},children:"+"}):2===t&&(a=Object(r.jsx)("button",{className:"addHabitButton",onClick:function(){i(1)},children:"X"})),Object(r.jsxs)("footer",{className:"footer",children:[Object(r.jsx)("div",{className:"addHabit",children:a}),Object(r.jsx)("hr",{className:"MenuLine"}),Object(r.jsxs)("h4",{className:"time",children:[d.now().c.hour,":",d.now().c.minute]}),Object(r.jsxs)("h6",{className:"date",children:[n," ",d.now().c.day]})]})},b=(n(41),n(28)),h=n(29),O=n(27);n(42);function p(){for(var e=[],t=["S","M","T","W","T","F","S"],n=0;n<7;n++)e.push(Object(r.jsx)(O.a,{xs:!0,children:Object(r.jsx)("button",{className:"weekdayButton",children:t[n]})},n));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Meditation"}),Object(r.jsx)(b.a,{children:Object(r.jsx)(h.a,{xs:5,children:e})})]})}function x(){return Object(r.jsxs)("div",{className:"mainCard",children:[Object(r.jsx)("h3",{className:"titleYourHabits",children:"Your Habits"}),Object(r.jsx)(p,{})]})}var f=n(9),y=(n(43),n(15)),m=n(7);function v(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),i=n[0],a=n[1];return Object(r.jsx)("div",{children:Object(r.jsxs)("span",{children:["Run task  ",i?Object(r.jsxs)("span",{children:[Object(r.jsx)("button",{onClick:function(){a(!1)},children:"At"})," ",Object(r.jsx)("input",{type:"time"})]}):Object(r.jsxs)("span",{children:[Object(r.jsx)("button",{onClick:function(){a(!0)},children:"Between"})," ",Object(r.jsx)("input",{type:"time"})," and ",Object(r.jsx)("input",{type:"time"})]})," on ",Object(r.jsxs)(y.a,{id:"dropdown-basic-button",title:"days",children:[Object(r.jsx)(m.a.Item,{children:"Sunday"}),Object(r.jsx)(m.a.Item,{children:"Monday"}),Object(r.jsx)(m.a.Item,{children:"Tuesday"}),Object(r.jsx)(m.a.Item,{children:"Wednesday"}),Object(r.jsx)(m.a.Item,{children:"Thursday"}),Object(r.jsx)(m.a.Item,{children:"Friday"}),Object(r.jsx)(m.a.Item,{children:"Saturday"})]}),Object(r.jsx)("button",{onClick:function(){e.deleteFunc(e.index,e.type)},children:"X"})]})})}function g(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:["Longitude: ",Object(r.jsx)("input",{type:"number"})," Latitude: ",Object(r.jsx)("input",{type:"number"})," Radius(M): ",Object(r.jsx)("input",{type:"number"})]}),Object(r.jsx)("button",{onClick:function(){e.deleteFunc(e.index,e.type)},children:"X"})]})}function w(e){return Object(r.jsx)("div",{children:Object(r.jsx)("button",{onClick:function(){e.triggerValue(e.index,e.value,e.arrayType)},children:e.value})})}function A(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",placeholder:"Your notification text"}),Object(r.jsx)("button",{onClick:function(){e.deleteFunc(e.index,e.type)},children:"X"})]})}function k(){for(var e=Object(c.useState)([]),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),o=Object(s.a)(a,2),l=o[0],d=o[1],u=Object(c.useState)([]),j=Object(s.a)(u,2),b=(j[0],j[1],[]),h=[],O=function(e,t,c){var a=[];"condition"===c&&(a=Object(f.a)(n)),"effect"===c&&(a=Object(f.a)(l)),"And"===t?a.splice(e,1,{type:"AndOr",value:"Or"}):"Or"===t&&a.splice(e,1,{type:"AndOr",value:"And"}),"condition"===c&&i(a),"effect"===c&&d(a)},p=function(e,t){var c=[];"time"!==t&&"geo"!==t||(c=Object(f.a)(n)),"push"===t&&(c=Object(f.a)(l)),e===c.length-1?c.splice(e-1,2):c.splice(e,2),"time"!==t&&"geo"!==t||i(c),"push"===t&&d(c)},x=0;x<n.length;x++)"time"===n[x].type?b.push(Object(r.jsx)(v,{type:n[x].type,index:x,deleteFunc:p},x)):"geo"===n[x].type?b.push(Object(r.jsx)(g,{type:n[x].type,deleteFunc:p},x)):"AndOr"===n[x].type&&b.push(Object(r.jsx)(w,{index:x,arrayType:"condition",type:n[x].type,value:n[x].value,triggerValue:O},x));for(var k=0;k<l.length;k++)"push"===l[k].type?h.push(Object(r.jsx)(A,{type:l[k].type,index:k,deleteFunc:p},k)):"AndOr"===l[k].type&&h.push(Object(r.jsx)(w,{index:k,arrayType:"effect",type:l[k].type,value:l[k].value,triggerValue:O},k));console.log(n),console.log(l);var N=function(e){"time"===e?n.length>0?i([].concat(Object(f.a)(n),[{type:"AndOr",value:"And"},{type:"time",timeHour:0,timeMinute:0,onSunday:!1,onMonday:!1,onTuesday:!1,onWednesday:!1,onThursday:!1,onFriday:!1,onSaturday:!1}])):i([].concat(Object(f.a)(n),[{type:"time",timeHour:0,timeMinute:0,onSunday:!1,onMonday:!1,onTuesday:!1,onWednesday:!1,onThursday:!1,onFriday:!1,onSaturday:!1}])):"geo"===e&&(n.length>0?i([].concat(Object(f.a)(n),[{type:"AndOr",value:"And"},{type:"geo",lat:0,lon:0,radius:0}])):i([].concat(Object(f.a)(n),[{type:"geo",lat:0,lon:0,radius:0}])))};return Object(r.jsxs)("div",{className:"mainCard",children:[Object(r.jsx)("h4",{className:"titleYourHabits",children:"Create a new habit"}),Object(r.jsx)("input",{placeholder:"Habit Name"}),Object(r.jsx)("h5",{className:"subtitle",children:"Conditions"}),b,Object(r.jsxs)(y.a,{id:"dropdown-basic-button",title:"Add",children:[Object(r.jsx)(m.a.Item,{onClick:function(){N("time")},children:"Time"}),Object(r.jsx)(m.a.Item,{onClick:function(){N("geo")},children:"Geolocation"}),Object(r.jsx)(m.a.Item,{href:"#/action-3",children:"Something else"})]}),Object(r.jsx)("h5",{className:"subtitle",children:"Effects"}),h,Object(r.jsxs)(y.a,{id:"dropdown-basic-button",title:"Add",children:[Object(r.jsx)(m.a.Item,{onClick:function(){"push"==="push"&&(l.length>0?d([].concat(Object(f.a)(l),[{type:"AndOr",value:"And"},{type:"push",text:""}])):d([].concat(Object(f.a)(l),[{type:"push",text:""}])))},children:"Push Notification"}),Object(r.jsx)(m.a.Item,{href:"#/action-3",children:"Something else"})]}),Object(r.jsx)("h5",{className:"subtitle",children:"Authentication"}),Object(r.jsx)("button",{className:"buttonAdd",children:"Add"})]})}var N=i.a.createContext();var C=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],i=t[1],a=Object(r.jsx)(x,{});return 0===n?a=Object(r.jsx)(x,{}):1===n&&(a=Object(r.jsx)(k,{})),Object(r.jsx)(N.Provider,{value:function(e){i(e)},children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),a,Object(r.jsx)(j,{props:n})]})})},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,51)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/habitable",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/habitable","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):T(t,e)}))}}(),M()}},[[47,1,2]]]);
//# sourceMappingURL=main.854d291b.chunk.js.map