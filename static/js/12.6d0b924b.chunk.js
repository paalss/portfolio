(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[12],{48:function(e,t,c){},49:function(e,t,c){e.exports={squareLink:"SquareLink_squareLink__1axgg",frame:"SquareLink_frame__3-fjx",desktopEmptySpace:"SquareLink_desktopEmptySpace__BGRNF"}},50:function(e,t,c){},51:function(e,t,c){"use strict";c.r(t),c.d(t,"WebworkLinks",(function(){return b})),c.d(t,"GraphicworkLinks",(function(){return u})),c.d(t,"OtherLinks",(function(){return f}));var s=c(11),r=(c(48),c(0)),l=function(e){return e.map((function(e){var t=e.tech,c=e.level,s="",l="";return"0"===c&&(s="Kan litt ".concat(t),l="16.5%"),"1"===c&&(s="Kan grunnleggende ".concat(t),l="33%"),"2"===c&&(s="Behersker ".concat(t," godt"),l="66%"),"3"===c&&(s="Ganske god p\xe5 ".concat(t),l="100%"),Object(r.jsx)("li",{title:s,children:Object(r.jsxs)("div",{className:"flex-li",children:[Object(r.jsx)("span",{className:"chart__label",children:t}),Object(r.jsx)("div",{className:"chart__bar",style:{width:l}})]})},t)}))};var i=function(e){var t=e.web,c=e.design;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"skills",children:[Object(r.jsxs)("ul",{className:"lines",children:[Object(r.jsx)("li",{className:"line l--0",children:Object(r.jsx)("span",{className:"line__label title",children:"Erfaring:"})}),Object(r.jsx)("li",{className:"line l--33",children:Object(r.jsx)("span",{className:"line__label",children:"Grunn\xadleggende"})}),Object(r.jsx)("li",{className:"line l--66",children:Object(r.jsx)("span",{className:"line__label",children:"Behersker godt"})}),Object(r.jsx)("li",{className:"line l--100",children:Object(r.jsx)("span",{className:"line__label",children:"Ganske god p\xe5"})})]}),Object(r.jsxs)("div",{className:"charts",children:[Object(r.jsxs)("div",{className:"chart chart--dev",children:[Object(r.jsx)("h3",{className:"chart__title",children:"Webutvikling"}),Object(r.jsx)("ul",{className:"chart--horiz",children:t&&l(t)})]}),Object(r.jsxs)("div",{className:"chart chart--design",children:[Object(r.jsx)("h3",{className:"chart__title",children:"Grafisk design"}),Object(r.jsx)("ul",{className:"chart--horiz",children:c&&l(c)})]})]})]})})},a=c(10),n=c(49),o=c.n(n);var j=function(e){var t=e.link,c=e.imgSrc,s=e.imgAlt,l=e.title,i=e.tools,n=e.thereAreMoreTools,j=void 0!==n&&n,d=e.desktopEmptySpace;return void 0!==d&&d?Object(r.jsx)("div",{className:o.a.desktopEmptySpace}):Object(r.jsxs)(a.b,{to:t,className:o.a.squareLink,children:[Object(r.jsx)("div",{className:o.a.frame,children:Object(r.jsx)("img",{src:c,alt:s})}),Object(r.jsx)("h3",{children:l}),Object(r.jsxs)("ul",{className:"tools",children:[i&&i.map((function(e,t){return Object(r.jsxs)("span",{children:[Object(r.jsx)("li",{children:e})," "]},t)})),j&&Object(r.jsx)(r.Fragment,{children:".\xa0.\xa0."})]})]})},d=(c(50),c.p+"static/media/react-certificate.34220dc2.jpg"),h=c(1);var m=function(){return Object(h.useEffect)((function(){function e(e,t,c,s,r){return s+(e-t)*(r-s)/(c-t)}document.querySelectorAll(".card3d").forEach((function(t){t.addEventListener("mousemove",(function(c){!function(t,c){var s=t.querySelector("img"),r=c.offsetX,l=c.offsetY,i=e(r,0,500,-15,15),a=e(l,0,500,15,-15),n=e(l,0,500,1.5,.5);s.style.transform="rotateX(".concat(a,"deg) rotateY(").concat(i,"deg)"),s.style.filter="brightness(".concat(n,")")}(t,c)})),t.addEventListener("mouseleave",(function(e){var c=t.querySelector("img");c.style.transform="rotateX(0deg) rotateY(0deg)",c.style.filter="brightness(1)"}))}))}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"certification-bg",children:Object(r.jsx)("a",{href:"https://www.udemy.com/certificate/UC-0f5eb1d1-16ce-43f4-87ef-f0c9b09a9e04/",target:"_blank",rel:"noopener noreferrer",className:"card3d",title:"\xc5pne Udemy siden for dette sertifikatet",children:Object(r.jsx)("img",{src:d,alt:"Certificate of completion. React - The Complete Guide (incl Hooks, React Router, Redux)"})})})})};function b(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"squarelinks-flex",children:[s.e.map((function(e){return Object(r.jsx)(j,{link:e.path,imgSrc:e.imgSrc,imgAlt:e.imgAlt,title:e.title,tools:e.tools,thereAreMoreTools:e.thereAreMoreTools},e.id)})),Object(r.jsx)(j,{desktopEmptySpace:!0})]}),Object(r.jsx)("div",{className:"mt-50",children:Object(r.jsxs)("a",{className:"link",href:"https://github.com/paalss?tab=repositories",target:"_blank",rel:"noopener noreferrer",children:[Object(r.jsx)("span",{className:"fab fa-github"})," Se flere prosjekter"]})})]})}function u(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"squarelinks-flex",children:[s.d.map((function(e){return Object(r.jsx)(j,{link:e.path,imgSrc:e.imgSrc,imgAlt:e.imgAlt,title:e.title,tools:e.tools,thereAreMoreTools:e.thereAreMoreTools},e.id)})),Object(r.jsx)(j,{desktopEmptySpace:!0}),Object(r.jsx)(j,{desktopEmptySpace:!0})]})})}function f(){return Object(r.jsx)("div",{className:"squarelinks-flex",children:Object(r.jsx)(j,{link:s.c.path,imgSrc:s.c.imgSrc,imgAlt:s.c.imgAlt,title:s.c.title})})}t.default=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"Kompetanse"}),Object(r.jsx)("p",{className:"mb-50",children:"Jeg har erfaring innen webutvikling og grafisk design."}),Object(r.jsx)("div",{id:"skills-placeholder",className:"skills-placeholder mb-130",children:Object(r.jsx)(i,{web:[{tech:"HTML & CSS",level:"3"},{tech:"JavaScript",level:"3"},{tech:Object(r.jsx)(r.Fragment,{children:"MySQL & relasjons\xaddatabaser"}),level:"3"},{tech:"React",level:"2"},{tech:"PHP",level:"2"},{tech:"Automatisk testing",level:"1"},{tech:"NodeJS",level:"1"},{tech:"Docker",level:"1"}],design:[{tech:"Adobe XD, Photoshop, Illustrator & InDesign",level:"2"}]})}),Object(r.jsx)("h2",{children:"Nettsider"}),Object(r.jsx)("p",{className:"mb-50",children:"Her er noen nettsider som jeg er stolt av \xe5 ha laget / bidratt p\xe5 og som jeg har skrevet litt om."}),Object(r.jsx)(b,{}),Object(r.jsx)("h2",{className:"mb-50",children:"Grafisk"}),Object(r.jsx)(u,{}),Object(r.jsx)("h2",{className:"mb-50",children:"Annet"}),Object(r.jsx)(f,{}),Object(r.jsx)("h2",{className:"mb-50",children:"Sertififiseringer"}),Object(r.jsx)(m,{})]})}}}]);
//# sourceMappingURL=12.6d0b924b.chunk.js.map