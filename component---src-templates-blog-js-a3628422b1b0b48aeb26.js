(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{AVaJ:function(e,t,a){"use strict";var l=a("q1tI"),n=a.n(l),r=a("77kd"),c=a("L3hq");t.a=function(e){var t=e.children;return n.a.createElement("div",{className:""},n.a.createElement(c.a,null)," ",t,n.a.createElement(r.a,null))}},c851:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return d}));var l=a("q1tI"),n=a.n(l),r=a("Wbzz"),c=a("AVaJ"),m=a("GUvt"),o=function(e){var t=e.pageNumber,a=null;return t?(1===t?a="/":2<t?a="page/"+(t-1):2===t&&(a="/blog/"),n.a.createElement("div",{className:"flex flex-row justify-center border rounded bg-blue-500 text-white hover:bg-blue-700 pl-2 pr-3 py-2 h-16 "},n.a.createElement(m.a,{className:" text-3xl mt-2"}),n.a.createElement("button",{className:"focus:outline-none",onClick:function(){return Object(r.d)(a)}},"Previous Posts"))):null},u=function(e){var t=e.pageNumber;return e.hasNextPage?n.a.createElement("div",{className:"flex flex-row justify-center border rounded bg-blue-500 text-white hover:bg-blue-700 pr-0 pl-4 py-2 h-16"},n.a.createElement("button",{className:"focus:outline-none",onClick:function(){return Object(r.d)("page/"+(t+1))}},"Next Posts"),n.a.createElement(m.b,{className:"text-5xl"})):null},s=a("0riU"),d=(t.default=function(e){var t=e.pageContext,a=t.hasNextPage,l=t.pageNumber,m=e.data;return console.log(e),n.a.createElement(c.a,{className:""},n.a.createElement("div",{className:"xl:w-4/6 xl:mx-auto md:w-4/6 md:mx-auto sm:w-4/6 sm:mx-auto lg:w-4/6 lg:mx-auto  container leading-relaxed py-16 "},n.a.createElement("div",null,m.wpgraphql.posts.nodes.map((function(e){return n.a.createElement("div",{className:"py-6 border rounded-lg mx-auto my-16 shadow-2xl bg-gray-200",key:e.id},n.a.createElement(s.default,{title:e.title,description:e.excerpt,author:e.author.node.name,image:e.featuredImage.node.guid}),n.a.createElement("div",{className:"flex flex-col  "},n.a.createElement("img",{className:"rounded shadow-xl object-cover  xl:mx-auto xl:w-4/5  xl:h-screen sm:w-4/5 sm:mx-auto ",src:e.featuredImage.node.guid,alt:e.featuredImage.node.guid}),n.a.createElement("div",{className:"px-6 "},n.a.createElement("div",{className:"text-blue-600 text-2xl font-serif text-center mt-8"},n.a.createElement(r.a,{to:"/blog"+e.uri},e.title)),n.a.createElement("div",{className:"font-sans mx-6 my-8",dangerouslySetInnerHTML:{__html:e.excerpt}}),n.a.createElement("div",{className:"border focus:outline-none rounded-md bg-blue-500 hover:bg-blue-700 w-32 text-white px-6 mb-4 ml-6"},n.a.createElement(r.a,{to:"/blog"+e.uri},"Read More")),n.a.createElement("div",{className:""},"created by",n.a.createElement(r.a,{className:"text-blue-500",to:""},"@",e.author.node.name)))))})))),n.a.createElement("div",{className:"flex flex-row justify-between mx-32 mb-32"},n.a.createElement(o,{pageNumber:l}),n.a.createElement(u,{pageNumber:l,hasNextPage:a})))},"826161254")}}]);
//# sourceMappingURL=component---src-templates-blog-js-a3628422b1b0b48aeb26.js.map