(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[6],{60:function(e,t,n){"use strict";var i=n(61),r=n.n(i),o=n(0);t.a=function(e){var t=e.tools,n=e.thereAreMoreTools,i=void 0!==n&&n,a=e.toolsText,s=void 0!==a&&a;return Object(o.jsxs)("ul",{className:r.a.tools,children:[s&&"Verkt\xf8y: ",t&&t.map((function(e,t){return Object(o.jsxs)("li",{children:[Object(o.jsx)("span",{className:r.a.tool,children:e}),Object(o.jsx)("span",{className:r.a.invisible,children:" \xad"})]},t)})),i&&Object(o.jsx)(o.Fragment,{children:".\xa0.\xa0."})]})}},61:function(e,t,n){e.exports={tools:"ToolList_tools__34VQq",tool:"ToolList_tool__2QtsK",invisible:"ToolList_invisible__2nn8n"}},62:function(e,t,n){"use strict";var i=n(60);t.a=i.a},63:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n(1),o=f(r),a=f(n(9)),s=n(64),l=f(n(65)),c=f(n(66)),d=f(n(67));function f(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var b=0,g=0,m=0,j=0,v="data-lazyload-listened",x=[],O=[],k=!1;try{var y=Object.defineProperty({},"passive",{get:function(){k=!0}});window.addEventListener("test",null,y)}catch(I){}var _=!!k&&{capture:!1,passive:!0},w=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,l.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,i=void 0,r=void 0,o=void 0,a=void 0;try{var s=t.getBoundingClientRect();i=s.top,r=s.left,o=s.height,a=s.width}catch(I){i=b,r=g,o=j,a=m}var l=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,d=Math.max(i,0),f=Math.max(r,0),u=Math.min(l,i+o)-d,p=Math.min(c,r+a)-f,h=void 0,v=void 0,x=void 0,O=void 0;try{var k=n.getBoundingClientRect();h=k.top,v=k.left,x=k.height,O=k.width}catch(I){h=b,v=g,x=j,O=m}var y=h-d,_=v-f,w=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return y-w[0]<=u&&y+x+w[1]>=0&&_-w[0]<=p&&_+O+w[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,i=void 0;try{var r=t.getBoundingClientRect();n=r.top,i=r.height}catch(I){n=b,i=j}var o=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=o&&n+i+a[1]>=0}(e))?e.visible||(e.props.once&&O.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},N=function(){O.forEach((function(e){var t=x.indexOf(e);-1!==t&&x.splice(t,1)})),O=[]},E=function(){for(var e=0;e<x.length;++e){var t=x[e];w(t)}N()},S=void 0,T=null,H=function(e){function t(e){u(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return h(t,e),i(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===S||"debounce"===S&&void 0===this.props.debounce;if(n&&((0,s.off)(e,"scroll",T,_),(0,s.off)(window,"resize",T,_),T=null),T||(void 0!==this.props.debounce?(T=(0,c.default)(E,"number"===typeof this.props.debounce?this.props.debounce:300),S="debounce"):void 0!==this.props.throttle?(T=(0,d.default)(E,"number"===typeof this.props.throttle?this.props.throttle:300),S="throttle"):T=E),this.props.overflow){var i=(0,l.default)(this.ref);if(i&&"function"===typeof i.getAttribute){var r=+i.getAttribute(v)+1;1===r&&i.addEventListener("scroll",T,_),i.setAttribute(v,r)}}else if(0===x.length||n){var o=this.props,a=o.scroll,f=o.resize;a&&(0,s.on)(e,"scroll",T,_),f&&(0,s.on)(window,"resize",T,_)}x.push(this),w(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(v)-1;0===t?(e.removeEventListener("scroll",T,_),e.removeAttribute(v)):e.setAttribute(v,t)}}var n=x.indexOf(this);-1!==n&&x.splice(n,1),0===x.length&&"undefined"!==typeof window&&((0,s.off)(window,"resize",T,_),(0,s.off)(window,"scroll",T,_))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,i=e.placeholder,r=e.className,a=e.classNamePrefix,s=e.style;return o.default.createElement("div",{className:a+"-wrapper "+r,ref:this.setRef,style:s},this.visible?n:i||o.default.createElement("div",{style:{height:t},className:a+"-placeholder"}))}}]),t}(r.Component);H.propTypes={className:a.default.string,classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool,style:a.default.object},H.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var L=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){u(this,r);var e=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+L(t),e}return h(r,n),i(r,[{key:"render",value:function(){return o.default.createElement(H,e,o.default.createElement(t,this.props))}}]),r}(r.Component)}},t.default=H,t.forceCheck=E,t.forceVisible=function(){for(var e=0;e<x.length;++e){var t=x[e];t.visible=!0,t.forceUpdate()}N()}},64:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,i){i=i||!1,e.addEventListener?e.addEventListener(t,n,i):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,i){i=i||!1,e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent&&e.detachEvent("on"+t,n)}},65:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,i=e;i;){if(!i.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(i),o=r.position,a=r.overflow,s=r["overflow-x"],l=r["overflow-y"];if("static"===o&&t)i=i.parentNode;else{if(n.test(a)&&n.test(s)&&n.test(l))return i;i=i.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},66:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var i=void 0,r=void 0,o=void 0,a=void 0,s=void 0,l=function l(){var c=+new Date-a;c<t&&c>=0?i=setTimeout(l,t-c):(i=null,n||(s=e.apply(o,r),i||(o=null,r=null)))};return function(){o=this,r=arguments,a=+new Date;var c=n&&!i;return i||(i=setTimeout(l,t)),c&&(s=e.apply(o,r),o=null,r=null),s}}},67:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var i,r;return t||(t=250),function(){var o=n||this,a=+new Date,s=arguments;i&&a<i+t?(clearTimeout(r),r=setTimeout((function(){i=a,e.apply(o,s)}),t)):(i=a,e.apply(o,s))}}},68:function(e,t,n){e.exports={lightbox:"LightboxImage_lightbox__2tWSq",lightboxOverlay:"LightboxImage_lightboxOverlay__3xZna",listItem:"LightboxImage_listItem__2xjM9",galleryImg:"LightboxImage_galleryImg__3HnY9",frame:"LightboxImage_frame__1wFUK"}},69:function(e,t,n){"use strict";var i=n(63),r=n.n(i),o=n(68),a=n.n(o),s=n(0),l=function(e){var t=e.imgSrc,n=e.imgWidth,i=e.imgHeight,o=e.imgAlt,l=e.title,c=e.gallery;return void 0!==c&&c?Object(s.jsx)("a",{href:t,"data-caption":l,className:a.a.listItem,children:Object(s.jsx)(r.a,{height:300,children:Object(s.jsx)("div",{className:a.a.frame,children:Object(s.jsx)("img",{height:300,width:340,src:t,alt:o,className:a.a.galleryImg})})})}):Object(s.jsx)("a",{href:t,"data-caption":l,"data-type":"image",children:Object(s.jsx)("img",{src:t,width:n,height:i,alt:o})})};t.a=l},70:function(e,t,n){e.exports={figure:"Figure_figure__1h6Gi"}},71:function(e,t,n){"use strict";var i=n(69),r=n(70),o=n.n(r),a=n(0),s=function(e){var t=e.imgSrc,n=e.imgWidth,r=e.imgHeight,s=e.imgAlt,l=e.caption;return Object(a.jsxs)("figure",{className:o.a.figure,children:[Object(a.jsx)(i.a,{imgSrc:t,imgWidth:n,imgHeight:r,imgAlt:s,title:l}),Object(a.jsx)("figcaption",{children:l})]})};t.a=s},83:function(e,t,n){"use strict";n.r(t);var i=n(2),r=n(8),o=n(25),a=n.p+"static/media/pf4.b6f67eaf.webp",s=n.p+"static/media/pf3.3f77a759.webp",l=n.p+"static/media/pf2-full2.1da26c2e.webp",c=n.p+"static/media/pf1-2.4241bd98.webp",d=n.p+"static/media/pf1-1.b1c127b3.webp",f=n(71),u=n(62),p=n(0);t.default=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:Object(p.jsx)(i.b,{id:"Fritidsprosjekt etter studiene<0>2020 desember\u2013n\xe5</0>",components:{0:Object(p.jsx)("span",{className:"subtitle"})}})}),Object(p.jsx)(u.a,{tools:["React","JavaScript","JSX","CSS","React Lingui"],toolsText:!0}),Object(p.jsx)(i.b,{id:'<0>F\xf8r jeg lagde denne portef\xf8ljen hadde jeg lagd massevis av tidligere versjoner. Denne versjonen ble til fordi jeg var uforn\xf8yd med den forrige (se under): Den hadde litt for d\xe5rlig design og hadde lite fokus p\xe5 nettsider jeg hadde laget.</0><1>Hvorfor React?</1><2>F\xf8r jeg brukte React til portef\xf8ljen brukte jeg JavaScript til \xe5 etterligne en komponent-basert arkitektur. Det var fordi noen elementer m\xe5tte gjenbrukes p\xe5 hver side (Nav og Footer) og et element m\xe5tte ryddes bort fra index.html (s\xf8ylediagrammet).</2><3>\xc5 lage komponenter med "vanilla JavaScript" ble ganske uelegant etter hvert som koden ble st\xf8rre. Jeg gikk derfor over til React da det var det komponent-baesrte verkt\xf8yet jeg hadde tidligere erfaring med.</3>',components:{0:Object(p.jsx)("p",{}),1:Object(p.jsx)("h3",{}),2:Object(p.jsx)("p",{}),3:Object(p.jsx)("p",{})}}),Object(p.jsx)("div",{"uk-lightbox":"animation: slide",children:Object(p.jsx)(f.a,{imgSrc:o.a,imgWidth:1229,imgHeight:7013,imgAlt:r.a._("portef\xf8lje 5"),caption:r.a._("portef\xf8lje 5")})}),Object(p.jsxs)("span",{className:"link",children:[Object(p.jsx)("span",{className:"fas fa-circle-notch"})," ",r.a._("Du er p\xe5 siden")]}),Object(p.jsxs)("a",{className:"link",href:"https://github.com/paalss/portfolio",target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("span",{className:"fab fa-github"}),r.a._("Kildekode")]})]}),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h2",{children:["Fritidsprosjekt under studiene",Object(p.jsx)("span",{className:"subtitle",children:"2019"})]}),Object(p.jsx)(u.a,{tools:["PHP","HTML","CSS"],toolsText:!0}),Object(p.jsx)(i.b,{id:"<0>Portef\xf8ljene jeg hadde lagd f\xf8r denne (se under) var enten for mangelfull av informasjon om mitt arbeid eller hadde for d\xe5rlig kode, s\xe5 da begynte jeg heller p\xe5 denne. I denne fors\xf8kte jeg \xe5 dekke s\xe5 mye som mulig av det arbeidet jeg hadde gjort, alt grafisk og koderelatert.</0><1>Denne lagde jeg i PHP, mest for \xe5 l\xf8se for \xe5 fikse \xabsamme-header-og-footer-p\xe5-alle-sidene\xbb. Jeg kunne ikke JavaScript s\xe5 godt p\xe5 denne tiden, og jeg hadde tilgang p\xe5 en <2>live server</2> \xad (folk.ntnu.no/paalsst) som st\xf8ttet PHP. S\xe5 det er grunnen til at det ikke ble en statisk side.</1>",components:{0:Object(p.jsx)("p",{}),1:Object(p.jsx)("p",{}),2:Object(p.jsx)("i",{})}}),Object(p.jsx)("div",{"uk-lightbox":"animation: slide",children:Object(p.jsx)(f.a,{imgSrc:a,imgWidth:973,imgHeight:1057,imgAlt:r.a._("portef\xf8lje 4"),caption:r.a._("portef\xf8lje 4")})}),Object(p.jsxs)("span",{className:"link",children:[Object(p.jsx)("span",{className:"fas fa-circle-notch"})," ",r.a._("Ikke tilgjengelig live")]}),Object(p.jsxs)("a",{className:"link",href:"https://github.com/paalss/portfolio-2019-fritid",target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("span",{className:"fab fa-github"})," ",r.a._("Kildekode")]})]}),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:Object(p.jsx)(i.b,{id:"Eksamensinnlevering i webkoding<0>2016 h\xf8st</0>",components:{0:Object(p.jsx)("span",{className:"subtitle"})}})}),Object(p.jsx)(u.a,{tools:["HTML","CSS"],toolsText:!0}),Object(p.jsx)("div",{"uk-lightbox":"animation: slide",children:Object(p.jsx)(f.a,{imgSrc:s,imgWidth:1280,imgHeight:623,imgAlt:r.a._("portef\xf8lje 3"),caption:r.a._("portef\xf8lje 3")})}),Object(p.jsxs)("a",{className:"link",href:"https://paalss.github.io/portfolio-2016-2-webkoding-final-delivery/",target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("span",{className:"fas fa-circle-notch"})," ",r.a._("Bes\xf8k siden")]}),Object(p.jsxs)("a",{className:"link",href:"https://github.com/paalss/portfolio-2016-2-webkoding-final-delivery",target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("span",{className:"fab fa-github"})," ",r.a._("Kildekode")]})]}),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:Object(p.jsx)(i.b,{id:"En portef\xf8lje p\xe5begynt like f\xf8r studiene<0>2016</0>",components:{0:Object(p.jsx)("span",{className:"subtitle"})}})}),Object(p.jsx)(u.a,{tools:["HTML","CSS"],toolsText:!0}),Object(p.jsx)("p",{children:r.a._("Denne kom jeg aldri langt med f\xf8r jeg la prosjektet fra meg. Den har ingen undersider og index-siden er halvferdig.")}),Object(p.jsx)("div",{"uk-lightbox":"animation: slide",children:Object(p.jsx)(f.a,{imgSrc:l,imgWidth:1331,imgHeight:752,imgAlt:r.a._("portef\xf8lje 2"),caption:r.a._("Fritidsprosjekt som aldri ble fullf\xf8rt")})}),Object(p.jsxs)("a",{className:"link",href:"https://paalss.github.io/portfolio-2016-1-fritid/",target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("span",{className:"fas fa-circle-notch"})," ",r.a._("Bes\xf8k siden")]}),Object(p.jsxs)("a",{className:"link",href:"https://github.com/paalss/portfolio-2016-1-fritid",target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("span",{className:"fab fa-github"})," ",r.a._("Kildekode")]})]}),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{children:Object(p.jsx)(i.b,{id:"Innlevering p\xe5 VGS og videreutvikling etter det<0>2015</0>",components:{0:Object(p.jsx)("span",{className:"subtitle"})}})}),Object(p.jsx)(u.a,{tools:["HTML","CSS"],toolsText:!0}),Object(p.jsx)("p",{children:Object(p.jsx)(i.b,{id:"I 2015 gikk jeg p\xe5 <0>medier og kommunikasjon</0> p\xe5 By\xe5sen VGS. Der hadde jeg en oppgave i \xe5 lage en tresiders portef\xf8lje om meg selv. Etter \xe5 ha levert denne oppgaven endret jeg litt p\xe5 layout-et.",components:{0:Object(p.jsx)("i",{})}})}),Object(p.jsxs)("div",{"uk-lightbox":"animation: slide",children:[Object(p.jsx)(f.a,{imgSrc:c,imgWidth:1280,imgHeight:622,imgAlt:r.a._("portef\xf8lje 1 versjon 2"),caption:r.a._("Videreutvikling etter leveranse: nye farger og noe endret layout")}),Object(p.jsx)(f.a,{imgSrc:d,imgWidth:723,imgHeight:437,imgAlt:r.a._("portef\xf8lje 1 versjon 1"),caption:r.a._("Innleveringsoppgave p\xe5 medier og kommunikasjon")})]}),Object(p.jsxs)("a",{className:"link",href:"https://paalss.github.io/portfolio-2015-2-etter-innlevering/",target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("span",{className:"fas fa-circle-notch"})," ",r.a._("Bes\xf8k siden")]}),Object(p.jsxs)("a",{className:"link",href:"https://github.com/paalss/portfolio-2015-2-etter-innlevering",target:"_blank",rel:"noopener noreferrer",children:[Object(p.jsx)("span",{className:"fab fa-github"})," ",r.a._("Kildekode")]})]})]})}}}]);
//# sourceMappingURL=6.e210b8a9.chunk.js.map