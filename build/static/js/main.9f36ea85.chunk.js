(this["webpackJsonpsnarkjs-react"]=this["webpackJsonpsnarkjs-react"]||[]).push([[0],{214:function(t,e,n){},215:function(t,e,n){},220:function(t,e){},222:function(t,e){},232:function(t,e){},234:function(t,e){},260:function(t,e){},261:function(t,e){},266:function(t,e){},268:function(t,e){},275:function(t,e){},294:function(t,e){},331:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(199),i=n.n(a),o=(n(214),n(22)),u=n(3),s=n(4),l=(n(215),n(126)),j=n(333),f=n(334),h=n(209),b=n(34),p=n(330),O=function(){var t=Object(s.a)(Object(u.a)().mark((function t(e,n,c){var r,a,i;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.groth16.fullProve(e,n,c);case 2:return r=t.sent,a=r.proof,i=r.publicSignals,t.abrupt("return",{proof:a,publicSignals:i});case 6:case"end":return t.stop()}}),t)})));return function(e,n,c){return t.apply(this,arguments)}}(),d=function(){var t=Object(s.a)(Object(u.a)().mark((function t(e,n,c){var r,a;return Object(u.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e).then((function(t){return t.json()}));case 2:return r=t.sent,t.next=5,p.groth16.verify(r,n,c);case 5:return a=t.sent,t.abrupt("return",a);case 7:case"end":return t.stop()}}),t)})));return function(e,n,c){return t.apply(this,arguments)}}();var g=function(){var t=Object(c.useState)("3"),e=Object(o.a)(t,2),n=e[0],r=e[1],a=Object(c.useState)("11"),i=Object(o.a)(a,2),u=i[0],s=i[1],p=Object(c.useState)(""),g=Object(o.a)(p,2),x=g[0],v=g[1],S=Object(c.useState)(""),k=Object(o.a)(S,2),y=k[0],m=k[1],w=Object(c.useState)(!1),C=Object(o.a)(w,2),I=C[0],P=C[1];return Object(b.jsx)("div",{children:Object(b.jsxs)("header",{className:"App-header",children:[Object(b.jsxs)(l.a,{children:["The underlying circuit is from the ",Object(b.jsx)("a",{href:"https://github.com/iden3/snarkjs",children:"snarkjs readme"})]}),Object(b.jsx)("pre",{children:"Witness Inputs"}),Object(b.jsx)(j.a,{label:"Input a:",children:Object(b.jsx)(f.a,{type:"text",required:!0,value:n,onChange:function(t){r(t.target.value)},placeholder:"e.g. 3"})}),Object(b.jsx)(j.a,{label:"Input b:",children:Object(b.jsx)(f.a,{type:"text",required:!0,value:u,onChange:function(t){s(t.target.value)},placeholder:"e.g. 11"})}),Object(b.jsx)(h.a.Outline,{onClick:function(){if(console.log(u.length),0!=n.length&&0!=u.length){var t={a:n,b:u};console.log(t),O(t,"http://localhost:8000/circuit.wasm","http://localhost:8000/circuit_final.zkey").then((function(t){var e=t.proof,n=t.publicSignals;v(JSON.stringify(e,null,2)),m(JSON.stringify(n,null,2)),d("http://localhost:8000/verification_key.json",n,e).then((function(t){P(t)}))}))}},children:"Generate Proof"}),"Proof: ",Object(b.jsx)(l.a,{width:.5,children:x}),"Signals: ",Object(b.jsx)(l.a,{children:y}),"Result:",x.length>0&&Object(b.jsx)(l.a,{children:I?"Valid proof":"Invalid proof"})]})})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,335)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),a(t),i(t)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),x()}},[[331,1,2]]]);
//# sourceMappingURL=main.9f36ea85.chunk.js.map