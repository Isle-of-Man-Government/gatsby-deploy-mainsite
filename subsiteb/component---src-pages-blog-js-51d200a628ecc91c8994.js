(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{vx99:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return p}));var a=n("q1tI"),r=n.n(a),l=n("Bl7J"),c=n("KQm4"),i=n("Wbzz"),o={categories:"",posts:""},u=function(e){var t=e.children;return r.a.createElement("div",{className:"blog-archive-container",key:t.slug},null!==t.featuredImage&&r.a.createElement("div",{className:"blog-archive-image-container"}),r.a.createElement("div",null,r.a.createElement(i.Link,{to:"/"+t.slug},r.a.createElement("h3",{dangerouslySetInnerHTML:{__html:t.title}})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.excerpt}})))},s=function(e){var t=[];o.posts=e.children.map((function(e){return e.node})),o.categories=e.children.map((function(e){return e.node.categories.edges.map((function(e){return e.node.name}))})),t=Object(c.a)(new Set([].concat.apply([],o.categories))).sort();var n=Object(a.useState)(""),l=n[0],i=n[1],s=Object(a.useState)([]),m=s[0],p=s[1],d=Object(a.useState)([]),g=d[0],f=d[1],b=function(e){if("clearTerms"!==e.target.value)return f(g.concat(e.target.value)),void i("");i(""),f([])};return Object(a.useEffect)((function(){var e=o.posts.filter((function(e){return e.title.toLowerCase().includes(l.toLowerCase())}));p(e)}),[l]),Object(a.useEffect)((function(){var e=o.posts;0!==g.length&&(e=o.posts.filter((function(e){return-1<e.categories.edges.map((function(e){var t=e.node;return-1<g.indexOf(t.name)})).indexOf(!0)}))),p(e)}),[g]),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Search posts by title or category..."),r.a.createElement("input",{type:"text",placeholder:"Type to fileter posts by title",onChange:function(e){i(e.target.value)},style:{minWidth:"300px"},value:l}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"category-button-list"},t.map((function(e){return r.a.createElement("button",{key:e,className:"btn btn-primary -1"<g.indexOf(e)?"btn btn-primary active":"btn btn-primary inactive",value:e,onClick:b},e)})),r.a.createElement("button",{className:"btn btn-secondary",value:"clearTerms",onClick:b},"Clear All")),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement("br",null),m.map((function(e){return r.a.createElement(u,{key:e.slug},e)})))},m=n("vrFN"),p=(t.default=function(e){var t=e.data;return r.a.createElement(l.a,{className:"blog-archive-page"},r.a.createElement(m.a,{title:"Blog Archive ",description:"A list of all the blogs..."}),r.a.createElement("h1",null,"Blog Archive"),r.a.createElement(s,null,t.wpgraphql.posts.edges))},"246658375")}}]);
//# sourceMappingURL=component---src-pages-blog-js-51d200a628ecc91c8994.js.map