(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[11],{38:function(e,t,s){"use strict";var c=s(39),r=s.n(c),l=s(0);t.a=function(e){var t=e.tools,s=e.thereAreMoreTools,c=void 0!==s&&s,i=e.toolsText,a=void 0!==i&&i;return Object(l.jsxs)("ul",{className:r.a.tools,children:[a&&"Verkt\xf8y: ",t&&t.map((function(e,t){return Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:r.a.tool,children:e}),Object(l.jsx)("span",{className:r.a.invisible,children:" \xad"})]},t)})),c&&Object(l.jsx)(l.Fragment,{children:".\xa0.\xa0."})]})}},39:function(e,t,s){e.exports={tools:"ToolList_tools__34VQq",tool:"ToolList_tool__2QtsK",invisible:"ToolList_invisible__2nn8n"}},50:function(e,t,s){},51:function(e,t,s){e.exports={squareLink:"SquareLink_squareLink__1axgg",frame:"SquareLink_frame__3-fjx",desktopEmptySpace:"SquareLink_desktopEmptySpace__BGRNF"}},52:function(e,t,s){},53:function(e,t,s){"use strict";s.r(t),s.d(t,"WebworkLinks",(function(){return u})),s.d(t,"GraphicworkLinks",(function(){return x})),s.d(t,"OtherLinks",(function(){return f}));var c=s(11),r=(s(50),s(0)),l=function(e){return e.map((function(e){var t=e.tech,s=e.level,c="",l="";return"0"===s&&(c="Kan litt ".concat(t),l="16.5%"),"1"===s&&(c="Kan grunnleggende ".concat(t),l="33%"),"2"===s&&(c="Behersker ".concat(t," godt"),l="66%"),"3"===s&&(c="Ganske god p\xe5 ".concat(t),l="100%"),Object(r.jsx)("li",{title:c,children:Object(r.jsxs)("div",{className:"flex-li",children:[Object(r.jsx)("span",{className:"chart__label",children:t}),Object(r.jsx)("div",{className:"chart__bar",style:{width:l}})]})},t)}))};var i=function(e){var t=e.web,s=e.design;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"skills",role:"graphics-object",children:[Object(r.jsxs)("ul",{className:"lines",children:[Object(r.jsx)("li",{className:"line l--0",children:Object(r.jsx)("span",{className:"line__label title",children:"Erfaring:"})}),Object(r.jsx)("li",{className:"line l--33",children:Object(r.jsx)("span",{className:"line__label",children:"Grunn\xadleggende"})}),Object(r.jsx)("li",{className:"line l--66",children:Object(r.jsx)("span",{className:"line__label",children:"Behersker godt"})}),Object(r.jsx)("li",{className:"line l--100",children:Object(r.jsx)("span",{className:"line__label",children:"Ganske god p\xe5"})})]}),Object(r.jsxs)("div",{className:"charts",children:[Object(r.jsxs)("div",{className:"chart chart--dev",children:[Object(r.jsx)("h3",{className:"chart__title",children:"Webutvikling"}),Object(r.jsx)("ul",{className:"chart--horiz",children:t&&l(t)})]}),Object(r.jsxs)("div",{className:"chart chart--design",children:[Object(r.jsx)("h3",{className:"chart__title",children:"Grafisk design"}),Object(r.jsx)("ul",{className:"chart--horiz",children:s&&l(s)})]})]})]})})},a=s(10),n=s(38),o=s(51),j=s.n(o);var d=function(e){var t=e.link,s=e.imgSrc,c=e.imgAlt,l=e.title,i=e.tools,o=e.thereAreMoreTools,d=void 0!==o&&o,h=e.desktopEmptySpace;return void 0!==h&&h?Object(r.jsx)("div",{className:j.a.desktopEmptySpace}):Object(r.jsxs)(a.b,{to:t,className:j.a.squareLink,children:[Object(r.jsx)("div",{className:j.a.frame,children:Object(r.jsx)("img",{src:s,alt:c})}),Object(r.jsx)("h3",{children:l}),Object(r.jsx)(n.a,{tools:i,thereAreMoreTools:d})]})},h=(s(52),s.p+"static/media/react-certificate-small.afe3eb54.webp"),b=s(1);var m=function(){return Object(b.useEffect)((function(){function e(e,t,s,c,r){return c+(e-t)*(r-c)/(s-t)}document.querySelectorAll(".card3d").forEach((function(t){t.addEventListener("mousemove",(function(s){!function(t,s){var c=t.querySelector("img"),r=s.offsetX,l=s.offsetY,i=e(r,0,500,-15,15),a=e(l,0,500,15,-15),n=e(l,0,500,1.5,.5);c.style.transform="rotateX(".concat(a,"deg) rotateY(").concat(i,"deg)"),c.style.filter="brightness(".concat(n,")")}(t,s)})),t.addEventListener("mouseleave",(function(e){var s=t.querySelector("img");s.style.transform="rotateX(0deg) rotateY(0deg)",s.style.filter="brightness(1)"}))}))}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"certification-bg",children:Object(r.jsx)("a",{href:"https://www.udemy.com/certificate/UC-0f5eb1d1-16ce-43f4-87ef-f0c9b09a9e04/",target:"_blank",rel:"noopener noreferrer",className:"card3d",title:"\xc5pne Udemy siden for dette sertifikatet",children:Object(r.jsx)("img",{src:h,width:1600,height:1190,alt:"Certificate of completion. React - The Complete Guide (incl Hooks, React Router, Redux)"})})})})};function u(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"squarelinks-flex",children:[c.e.map((function(e){return Object(r.jsx)(d,{link:e.path,imgSrc:e.imgSrc,imgAlt:e.imgAlt,title:e.title,tools:e.tools,thereAreMoreTools:e.thereAreMoreTools},e.id)})),Object(r.jsx)(d,{desktopEmptySpace:!0}),Object(r.jsx)(d,{desktopEmptySpace:!0})]}),Object(r.jsx)("div",{className:"mt-50 center-content",children:Object(r.jsxs)("a",{className:"link",href:"https://github.com/paalss?tab=repositories",target:"_blank",rel:"noopener noreferrer",children:[Object(r.jsx)("span",{className:"fab fa-github"})," Se mer p\xe5 Github"]})})]})}function x(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"squarelinks-flex",children:[c.d.map((function(e){return Object(r.jsx)(d,{link:e.path,imgSrc:e.imgSrc,imgAlt:e.imgAlt,title:e.title,tools:e.tools,thereAreMoreTools:e.thereAreMoreTools},e.id)})),Object(r.jsx)(d,{desktopEmptySpace:!0}),Object(r.jsx)(d,{desktopEmptySpace:!0})]})})}function f(){return Object(r.jsx)("div",{className:"squarelinks-flex",children:Object(r.jsx)(d,{link:c.c.path,imgSrc:c.c.imgSrc,imgAlt:c.c.imgAlt,title:c.c.title})})}t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Kompetanse"}),Object(r.jsx)("div",{className:"mb-50",children:"Jeg har erfaring innen webutvikling og grafisk design."}),Object(r.jsx)("div",{id:"skills-placeholder",className:"skills-placeholder mb-130",children:Object(r.jsx)(i,{web:[{tech:"HTML & CSS",level:"3"},{tech:"JavaScript",level:"3"},{tech:Object(r.jsx)(r.Fragment,{children:"MySQL & relasjons\xaddatabaser"}),level:"3"},{tech:"React",level:"2"},{tech:"PHP",level:"2"},{tech:"Automatisk testing",level:"1"},{tech:"NodeJS",level:"1"},{tech:"Docker",level:"1"}],design:[{tech:"Adobe XD, Photoshop, Illustrator & InDesign",level:"2"}]})}),Object(r.jsx)("h2",{children:"Nettsider"}),Object(r.jsx)("div",{className:"mb-50",children:"Her er noen nettsider som jeg er stolt av \xe5 ha laget / bidratt p\xe5 og som jeg har skrevet litt om."}),Object(r.jsx)(u,{}),Object(r.jsx)("h2",{className:"mb-50",children:"Grafisk"}),Object(r.jsx)(x,{}),Object(r.jsx)("h2",{className:"mb-50",children:"Annet"}),Object(r.jsx)(f,{}),Object(r.jsx)("h2",{className:"mb-50",children:"Sertifikat"}),Object(r.jsx)(m,{})]})}}}]);
//# sourceMappingURL=11.14eb1554.chunk.js.map