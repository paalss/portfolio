(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[7],{40:function(e,t,n){"use strict";var i=n(41),o=n.n(i),r=n(0);t.a=function(e){var t=e.tools,n=e.thereAreMoreTools,i=void 0!==n&&n,a=e.toolsText,s=void 0!==a&&a;return Object(r.jsxs)("ul",{className:o.a.tools,children:[s&&"Verkt\xf8y: ",t&&t.map((function(e,t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:o.a.tool,children:e}),Object(r.jsx)("span",{className:o.a.invisible,children:" \xad"})]},t)})),i&&Object(r.jsx)(r.Fragment,{children:".\xa0.\xa0."})]})}},41:function(e,t,n){e.exports={tools:"ToolList_tools__34VQq",tool:"ToolList_tool__2QtsK",invisible:"ToolList_invisible__2nn8n"}},42:function(e,t,n){"use strict";var i=n(40);t.a=i.a},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=n(1),r=d(o),a=d(n(9)),s=n(44),l=d(n(45)),c=d(n(46)),u=d(n(47));function d(e){return e&&e.__esModule?e:{default:e}}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,v=0,g=0,b=0,j="data-lazyload-listened",y=[],k=[],w=!1;try{var O=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("test",null,O)}catch(M){}var x=!!w&&{capture:!1,passive:!0},_=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,l.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,i=void 0,o=void 0,r=void 0,a=void 0;try{var s=t.getBoundingClientRect();i=s.top,o=s.left,r=s.height,a=s.width}catch(M){i=h,o=v,r=b,a=g}var l=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,u=Math.max(i,0),d=Math.max(o,0),f=Math.min(l,i+r)-u,p=Math.min(c,o+a)-d,m=void 0,j=void 0,y=void 0,k=void 0;try{var w=n.getBoundingClientRect();m=w.top,j=w.left,y=w.height,k=w.width}catch(M){m=h,j=v,y=b,k=g}var O=m-u,x=j-d,_=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return O-_[0]<=f&&O+y+_[1]>=0&&x-_[0]<=p&&x+k+_[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,i=void 0;try{var o=t.getBoundingClientRect();n=o.top,i=o.height}catch(M){n=h,i=b}var r=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=r&&n+i+a[1]>=0}(e))?e.visible||(e.props.once&&k.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},E=function(){k.forEach((function(e){var t=y.indexOf(e);-1!==t&&y.splice(t,1)})),k=[]},N=function(){for(var e=0;e<y.length;++e){var t=y[e];_(t)}E()},L=void 0,T=null,I=function(e){function t(e){f(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return m(t,e),i(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===L||"debounce"===L&&void 0===this.props.debounce;if(n&&((0,s.off)(e,"scroll",T,x),(0,s.off)(window,"resize",T,x),T=null),T||(void 0!==this.props.debounce?(T=(0,c.default)(N,"number"===typeof this.props.debounce?this.props.debounce:300),L="debounce"):void 0!==this.props.throttle?(T=(0,u.default)(N,"number"===typeof this.props.throttle?this.props.throttle:300),L="throttle"):T=N),this.props.overflow){var i=(0,l.default)(this.ref);if(i&&"function"===typeof i.getAttribute){var o=+i.getAttribute(j)+1;1===o&&i.addEventListener("scroll",T,x),i.setAttribute(j,o)}}else if(0===y.length||n){var r=this.props,a=r.scroll,d=r.resize;a&&(0,s.on)(e,"scroll",T,x),d&&(0,s.on)(window,"resize",T,x)}y.push(this),_(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,l.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(j)-1;0===t?(e.removeEventListener("scroll",T,x),e.removeAttribute(j)):e.setAttribute(j,t)}}var n=y.indexOf(this);-1!==n&&y.splice(n,1),0===y.length&&"undefined"!==typeof window&&((0,s.off)(window,"resize",T,x),(0,s.off)(window,"scroll",T,x))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,i=e.placeholder,o=e.className,a=e.classNamePrefix,s=e.style;return r.default.createElement("div",{className:a+"-wrapper "+o,ref:this.setRef,style:s},this.visible?n:i||r.default.createElement("div",{style:{height:t},className:a+"-placeholder"}))}}]),t}(o.Component);I.propTypes={className:a.default.string,classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool,style:a.default.object},I.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var A=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function o(){f(this,o);var e=p(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.displayName="LazyLoad"+A(t),e}return m(o,n),i(o,[{key:"render",value:function(){return r.default.createElement(I,e,r.default.createElement(t,this.props))}}]),o}(o.Component)}},t.default=I,t.forceCheck=N,t.forceVisible=function(){for(var e=0;e<y.length;++e){var t=y[e];t.visible=!0,t.forceUpdate()}E()}},44:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,i){i=i||!1,e.addEventListener?e.addEventListener(t,n,i):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,i){i=i||!1,e.removeEventListener?e.removeEventListener(t,n,i):e.detachEvent&&e.detachEvent("on"+t,n)}},45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,i=e;i;){if(!i.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(i),r=o.position,a=o.overflow,s=o["overflow-x"],l=o["overflow-y"];if("static"===r&&t)i=i.parentNode;else{if(n.test(a)&&n.test(s)&&n.test(l))return i;i=i.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var i=void 0,o=void 0,r=void 0,a=void 0,s=void 0,l=function l(){var c=+new Date-a;c<t&&c>=0?i=setTimeout(l,t-c):(i=null,n||(s=e.apply(r,o),i||(r=null,o=null)))};return function(){r=this,o=arguments,a=+new Date;var c=n&&!i;return i||(i=setTimeout(l,t)),c&&(s=e.apply(r,o),r=null,o=null),s}}},47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var i,o;return t||(t=250),function(){var r=n||this,a=+new Date,s=arguments;i&&a<i+t?(clearTimeout(o),o=setTimeout((function(){i=a,e.apply(r,s)}),t)):(i=a,e.apply(r,s))}}},48:function(e,t,n){e.exports={lightbox:"LightboxImage_lightbox__2tWSq",lightboxOverlay:"LightboxImage_lightboxOverlay__3xZna",listItem:"LightboxImage_listItem__2xjM9",galleryImg:"LightboxImage_galleryImg__3HnY9",frame:"LightboxImage_frame__1wFUK"}},49:function(e,t,n){"use strict";var i=n(43),o=n.n(i),r=n(48),a=n.n(r),s=n(0);var l=function(e){var t=e.imgSrc,n=e.imgWidth,i=e.imgHeight,r=e.imgAlt,l=e.title,c=e.gallery;return void 0!==c&&c?Object(s.jsx)("a",{href:t,"data-caption":l,className:a.a.listItem,children:Object(s.jsx)(o.a,{height:300,children:Object(s.jsx)("div",{className:a.a.frame,children:Object(s.jsx)("img",{height:300,width:340,src:t,alt:r,className:a.a.galleryImg})})})}):Object(s.jsx)("a",{href:t,"data-caption":l,"data-type":"image",children:Object(s.jsx)("img",{src:t,width:n,height:i,alt:r})})};t.a=l},50:function(e,t,n){e.exports={figure:"Figure_figure__1h6Gi"}},51:function(e,t,n){"use strict";var i=n(49),o=n(50),r=n.n(o),a=n(0);var s=function(e){var t=e.imgSrc,n=e.imgWidth,o=e.imgHeight,s=e.imgAlt,l=e.caption;return Object(a.jsxs)("figure",{className:r.a.figure,children:[Object(a.jsx)(i.a,{imgSrc:t,imgWidth:n,imgHeight:o,imgAlt:s,title:l}),Object(a.jsx)("figcaption",{children:l})]})};t.a=s},65:function(e,t,n){"use strict";n.r(t);var i=n.p+"static/media/app-recording1.b1310380.gif",o=n.p+"static/media/overview.0b5f315e.webp",r=n.p+"static/media/top-novels2.3ebe772d.webp",a=n.p+"static/media/best-metroidvanias.48a83b0f.webp",s=n(51),l=n(42),c=n(0);t.default=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("img",{src:i,width:1296,height:616,alt:"ranking app interface"}),Object(c.jsxs)("span",{className:"link",children:[Object(c.jsx)("span",{className:"fas fa-circle-notch"})," Ikke tilgjengelig live"]}),Object(c.jsxs)("a",{className:"link",href:"https://github.com/paalss/Ranking-app",target:"_blank",rel:"noopener noreferrer",children:[Object(c.jsx)("span",{className:"fab fa-github"})," Kildekode"]}),Object(c.jsxs)("h2",{children:["Ranking app",Object(c.jsx)("span",{className:"subtitle",children:"2020 h\xf8st\u20132021 september"})]}),Object(c.jsx)(l.a,{tools:["JavaScript","TypeScript","Jest","PHP","MySQL","Relasjonsdatabase","HTML","CSS","Docker"],toolsText:!0}),"Prosjektet er forel\xf8pig satt p\xe5 pause.",Object(c.jsx)("p",{children:"I slutten av juli 2020 begynte jeg \xe5 lage denne webappen for \xe5 rangere ting, hvor poenggivingen er en sortering fra best til d\xe5rligst. Jeg vet ikke hvor mye jeg vil klare \xe5 legge til denne webappen, men det hadde v\xe6rt g\xf8y om brukerne kunne dele/vise listen sin med andre brukere, bidra p\xe5 felles lister og importere listelementer direkte fra andre databaser (med web API)."}),Object(c.jsx)("h3",{children:"Motivasjon til prosjektet"}),"Kort sagt: Jeg ville pr\xf8ve \xe5 lage det ranker.com burde ha v\xe6rt. Og for \xe5 ha et kodeprosjekt \xe5 drive p\xe5 med.",Object(c.jsx)("p",{children:"Ranker.com er en nettapp som hadde mye av den samme funksjonaliteten som jeg nevnte over. Jeg likte det, og det var derfor skuffende da ranker.com plutselig p\xe5 et tidspunkt bestemte seg for \xe5 skrote konseptet sitt. (De byttet ut \xe5 ordne lister mot \xe5 kun velge \xe9n favoritt per kategori.) Nettsidedesignet syntes jeg allerede ikke var s\xe6rlig pent. Det var dette, samt behovet mitt for \xe5 holde p\xe5 med noe koding etter \xe5 ha blitt ferdig med studiene, som fikk meg til \xe5 begynne dette prosjektet."}),Object(c.jsx)("p",{children:"Det skal nevnes at ranker.com i ettertid har ombestemt seg og g\xe5tt tilbake til sitt originale konsept igjen. Men nettsiden er fortsatt et stort rot."}),Object(c.jsx)("p",{children:"Uansett, jeg hadde jo blitt bedre p\xe5 programmering i JavaScript, s\xe5 det i seg selv er jo motivasjon nok til \xe5 fortsette med det."}),Object(c.jsxs)("div",{"uk-lightbox":"animation: slide",children:[Object(c.jsx)(s.a,{imgSrc:o,imgWidth:493,imgHeight:401,imgAlt:"oversikt over lister eksempel",caption:"Lag egne lister"}),Object(c.jsx)(s.a,{imgSrc:a,imgWidth:906,imgHeight:604,imgAlt:"beste metroidvanias listeeksempel",caption:"Sett inn egne elementer, tilpass etter behov"}),Object(c.jsx)(s.a,{imgSrc:r,imgWidth:964,imgHeight:763,imgAlt:"beste b\xf8ker listeeksempel",caption:"F\xe5 pene og oversiktlige lister"})]})]})}}}]);
//# sourceMappingURL=7.c179bc24.chunk.js.map