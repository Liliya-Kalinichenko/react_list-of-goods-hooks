(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(8),a=n(1),u=n(4),l=n.n(u),b=(n(13),n(14),n(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.Name="name",t.Length="length",t.Empty=""}(s||(s={}));var d=function(){var t=Object(a.useState)(s.Empty),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),u=Object(r.a)(o,2),d=u[0],j=u[1],m=function(t,e){var n=e.sortField,c=e.isReversed,o=Object(i.a)(t);return n&&o.sort((function(t,e){switch(n){case s.Name:return t.localeCompare(e);case s.Length:return t.length-e.length;default:return 0}})),c&&o.reverse(),o}(h,{sortField:n,isReversed:d});return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{onClick:function(){return c(s.Name)},type:"button",className:l()("button is-info",{"is-light":n!==s.Name}),children:"Sort alphabetically"}),Object(b.jsx)("button",{onClick:function(){return c(s.Length)},type:"button",className:l()("button is-success",{"is-light":n!==s.Length}),children:"Sort by length"}),Object(b.jsx)("button",{onClick:function(){return j((function(t){return!t}))},type:"button",className:l()("button is-warning",{"is-light":!d}),children:"Reverse"}),(n||d)&&Object(b.jsx)("button",{onClick:function(){c(s.Empty),j(!1)},type:"button",className:"button is-danger is-light",children:"Reset"})]}),Object(b.jsx)("ul",{children:m.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.7f535605.chunk.js.map