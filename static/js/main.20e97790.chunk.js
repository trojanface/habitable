(this.webpackJsonphabitable=this.webpackJsonphabitable||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},,,function(e,n,t){},,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),i=t.n(c),o=t(7),a=t.n(o),r=(t(16),t(11)),s=(t.p,t(17),t(18),t(0));var l=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{className:"MenuBar",children:Object(s.jsx)("h1",{children:"habitable"})}),Object(s.jsx)("hr",{className:"MenuLine"})]})},d=(t(20),t(21),t(22).DateTime),u=["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];var j=function(e){var n=e.props,t=u[d.now().c.month];console.log(n);var i=Object(c.useContext)(w),o=Object(s.jsx)("button",{className:"addHabitButton",onClick:function(){i(1)},children:"+"});return o=0!==n?Object(s.jsx)("button",{className:"closeHabitButton",onClick:function(){i(0)},children:"X"}):Object(s.jsx)("button",{className:"addHabitButton",onClick:function(){i(1)},children:"+"}),Object(s.jsxs)("div",{className:"footer",children:[Object(s.jsx)("div",{className:"addHabit",children:o}),Object(s.jsx)("hr",{className:"MenuLine"}),Object(s.jsxs)("h4",{className:"time",children:[d.now().c.hour,":",d.now().c.minute]}),Object(s.jsxs)("h6",{className:"date",children:[t," ",d.now().c.day]})]})},h=(t(23),t(9)),b=t(10),f=t(8);t(24);function v(){for(var e=[],n=["S","M","T","W","T","F","S"],t=0;t<7;t++)e.push(Object(s.jsx)(f.a,{xs:!0,children:Object(s.jsx)("button",{className:"weekdayButton",children:n[t]})},t));return Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Meditation"}),Object(s.jsx)(h.a,{children:Object(s.jsx)(b.a,{xs:5,children:e})})]})}function O(){return Object(s.jsxs)("div",{className:"mainCard",children:[Object(s.jsx)("h3",{className:"titleYourHabits",children:"Your Habits"}),Object(s.jsx)(v,{})]})}function x(){return Object(s.jsx)("div",{children:Object(s.jsx)("h1",{children:"New Habit"})})}var w=i.a.createContext();var g=function(){var e=Object(c.useState)(0),n=Object(r.a)(e,2),t=n[0],i=n[1],o=Object(s.jsx)(O,{});return o=0===t?Object(s.jsx)(O,{}):Object(s.jsx)(x,{}),Object(s.jsx)(w.Provider,{value:function(e){i(e)},children:Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(l,{}),o,Object(s.jsx)(j,{props:t})]})})},m=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function p(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var N=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,o=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),o(e),a(e)}))};a.a.render(Object(s.jsx)(i.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/habitable",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/habitable","/service-worker.js");m?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var c=t.headers.get("content-type");404===t.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):p(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):p(n,e)}))}}(),N()}],[[25,1,2]]]);
//# sourceMappingURL=main.20e97790.chunk.js.map