(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[8],{37:function(e,t,a){"use strict";var c=a(32),r=a.n(c),n=a(0);var i=function(e){var t=e.imgSrc,a=e.imgAlt,c=e.title,i=e.group,s=e.gallery;return void 0!==s&&s?Object(n.jsx)("a",{href:t,"data-lightbox":i,"data-title":c,className:"list-item",children:Object(n.jsx)(r.a,{height:"40vh",offset:300,children:Object(n.jsx)("div",{className:"frame",children:Object(n.jsx)("img",{src:t,alt:a,className:"gallery-img"})})})}):Object(n.jsx)("a",{href:t,"data-lightbox":i,"data-title":c,children:Object(n.jsx)("img",{src:t,alt:a})})};t.a=i},46:function(e,t,a){"use strict";a.r(t);var c=a(41),r=a.n(c),n=a(43),i=a(44),s=a(1),l=a(37),o=a(0);t.default=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1],j=Object(s.useState)(!1),d=Object(i.a)(j,2),b=d[0],u=d[1],h=Object(s.useState)(!1),m=Object(i.a)(h,2),f=m[0],p=m[1],g=Object(s.useCallback)(Object(n.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),p(!1),e.prev=2,e.next=5,fetch("https://graph.instagram.com/me/media?fields=id,caption,media_url,media_type&access_token=".concat("IGQVJYdlVoQ2lQMUlJMWJIbDM1dFd6M25NQk9DenBfNFVoaUNjdEFaVXMwM2UtX2FtRmFNR0lFakExN3VTTUNwRkhDaTdhbmxGdWNnVWFNM1pfWTV6aVNvLVRNRU5xeWVGa05rYy1R"));case 5:if((t=e.sent).ok){e.next=8;break}throw new Error("Something went wrong!");case 8:return e.next=10,t.json();case 10:a=e.sent,n=a.data.filter((function(e){return"VIDEO"!==e.media_type})),c(n),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),p(e.t0.message);case 18:u(!1);case 19:case"end":return e.stop()}}),e,null,[[2,15]])}))),[]);Object(s.useEffect)((function(){g()}),[g]);var x=Object(o.jsx)("p",{children:"Fant ingen bilder"});return a.length>0&&(x=a.map((function(e){return Object(o.jsx)(l.a,{imgSrc:e.media_url,imgAlt:e.caption,title:e.caption,group:"gallery",gallery:!0},e.id)}))),f&&(x=Object(o.jsx)("p",{children:f})),b&&(x=Object(o.jsx)("p",{children:"Laster inn..."})),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"gallery-flex",children:x})})}}}]);
//# sourceMappingURL=8.d47a45ee.chunk.js.map