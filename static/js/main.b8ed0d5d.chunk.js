(this.webpackJsonphabitable=this.webpackJsonphabitable||[]).push([[0],{34:function(e,n,t){},35:function(e,n,t){},36:function(e,n,t){},39:function(e,n,t){},41:function(e,n,t){},42:function(e,n,t){},43:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t.n(c),o=t(14),a=t.n(o),s=(t(34),t(19)),r=(t.p,t(35),t(36),t(1));var l=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"MenuBar",children:Object(r.jsx)("h1",{children:"habitable"})}),Object(r.jsx)("hr",{className:"MenuLine"})]})},d=(t(38),t(39),t(40).DateTime),u=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];var j=function(e){var n=e.props,t=u[d.now().c.month];console.log(n);var i=Object(c.useContext)(N),o=Object(r.jsx)("button",{className:"addHabitButton",onClick:function(){i(1)},children:"+"});return 1===n?o=Object(r.jsx)("button",{className:"closeHabitButton",onClick:function(){i(0)},children:"X"}):0===n?o=Object(r.jsx)("button",{className:"addHabitButton",onClick:function(){i(1)},children:"+"}):2===n&&(o=Object(r.jsx)("button",{className:"addHabitButton",onClick:function(){i(1)},children:"X"})),Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsx)("div",{className:"addHabit",children:o}),Object(r.jsx)("hr",{className:"MenuLine"}),Object(r.jsxs)("h4",{className:"time",children:[d.now().c.hour,":",d.now().c.minute]}),Object(r.jsxs)("h6",{className:"date",children:[t," ",d.now().c.day]})]})},b=(t(41),t(26)),h=t(27),f=t(25);t(42);function O(){for(var e=[],n=["S","M","T","W","T","F","S"],t=0;t<7;t++)e.push(Object(r.jsx)(f.a,{xs:!0,children:Object(r.jsx)("button",{className:"weekdayButton",children:n[t]})},t));return Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:"Meditation"}),Object(r.jsx)(b.a,{children:Object(r.jsx)(h.a,{xs:5,children:e})})]})}function x(){return Object(r.jsxs)("div",{className:"mainCard",children:[Object(r.jsx)("h3",{className:"titleYourHabits",children:"Your Habits"}),Object(r.jsx)(O,{})]})}var v=t(29),m=(t(43),t(28)),g=t(10);function w(){return Object(r.jsx)("div",{children:"yo"})}function p(){for(var e=Object(c.useState)([]),n=Object(s.a)(e,2),t=n[0],i=n[1],o=[],a=0;a<t.length;a++)o.push(Object(r.jsx)(w,{},a));return console.log(t),Object(r.jsxs)("div",{className:"mainCard",children:[Object(r.jsx)("h4",{className:"titleYourHabits",children:"Create a new habit"}),Object(r.jsx)("h5",{className:"subtitle",children:"Conditions"}),o,Object(r.jsxs)(m.a,{id:"dropdown-basic-button",title:"Add",children:[Object(r.jsx)(g.a.Item,{onClick:function(){i([].concat(Object(v.a)(t),[{timeHour:0,timeMinute:0,onSunday:!1,onMonday:!1,onTuesday:!1,onWednesday:!1,onThursday:!1,onFriday:!1,onSaturday:!1}]))},children:"Time"}),Object(r.jsx)(g.a.Item,{href:"#/action-2",children:"Geolocation"}),Object(r.jsx)(g.a.Item,{href:"#/action-3",children:"Something else"})]}),Object(r.jsx)("h5",{className:"subtitle",children:"Effects"}),Object(r.jsx)("button",{className:"buttonAdd",children:"Add"}),Object(r.jsx)("h5",{className:"subtitle",children:"Authentication"}),Object(r.jsx)("button",{className:"buttonAdd",children:"Add"})]})}var N=i.a.createContext();var k=function(){var e=Object(c.useState)(0),n=Object(s.a)(e,2),t=n[0],i=n[1],o=Object(r.jsx)(x,{});return 0===t?o=Object(r.jsx)(x,{}):1===t&&(o=Object(r.jsx)(p,{})),Object(r.jsx)(N.Provider,{value:function(e){i(e)},children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(l,{}),o,Object(r.jsx)(j,{props:t})]})})},C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function A(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),o(e),a(e)}))};a.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/habitable",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/habitable","/service-worker.js");C?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):A(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):A(n,e)}))}}(),y()}},[[47,1,2]]]);
//# sourceMappingURL=main.b8ed0d5d.chunk.js.map