(this["webpackJsonpaxios-sample-app"]=this["webpackJsonpaxios-sample-app"]||[]).push([[0],{31:function(e,t,s){},33:function(e,t,s){},66:function(e,t){},73:function(e,t,s){"use strict";s.r(t);var n=s(4),a=s.n(n),c=s(24),r=s.n(c),o=(s(31),s(0)),i=s.n(o),d=s(2),p=s(5),l=s.p+"static/media/logo.6ce24c58.svg",u=(s(33),s(25)),h=s.n(u),j=(s(52),s(26)),b=s(3);var f=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),s=(t[0],t[1]);return j.a.extend({hooks:{beforeRequest:[function(e){e.headers.set("Access-Control-Allow-Origin","x")}]}}),new Request("https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x83A164Ad6947ddDc64Fe959e50625760b51946bB",{method:"HEAD",mode:"no-cors"}),Object(n.useEffect)((function(){(function(){var e=Object(d.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x83A164Ad6947ddDc64Fe959e50625760b51946bB");case 2:t=e.sent,console.log(t.data.assets),s(t.data.assets);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsx)("img",{src:l,className:"App-logo",alt:"logo"}),Object(b.jsxs)("p",{children:["Edit ",Object(b.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(b.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,74)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),n(e),a(e),c(e),r(e)}))};r.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(f,{})}),document.getElementById("root")),g()}},[[73,1,2]]]);
//# sourceMappingURL=main.2381cfac.chunk.js.map