(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[5],{45:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=n(1),i=f(r),a=f(n(7)),l=n(46),s=f(n(47)),u=f(n(48)),c=f(n(49));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=0,m=0,g=0,b=0,y="data-lazyload-listened",j=[],k=[],w=!1;try{var O=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("test",null,O)}catch(A){}var x=!!w&&{capture:!1,passive:!0},_=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,s.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,o=void 0,r=void 0,i=void 0,a=void 0;try{var l=t.getBoundingClientRect();o=l.top,r=l.left,i=l.height,a=l.width}catch(A){o=v,r=m,i=b,a=g}var s=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,c=Math.max(o,0),f=Math.max(r,0),d=Math.min(s,o+i)-c,p=Math.min(u,r+a)-f,h=void 0,y=void 0,j=void 0,k=void 0;try{var w=n.getBoundingClientRect();h=w.top,y=w.left,j=w.height,k=w.width}catch(A){h=v,y=m,j=b,k=g}var O=h-c,x=y-f,_=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return O-_[0]<=d&&O+j+_[1]>=0&&x-_[0]<=p&&x+k+_[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,o=void 0;try{var r=t.getBoundingClientRect();n=r.top,o=r.height}catch(A){n=v,o=b}var i=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-a[0]<=i&&n+o+a[1]>=0}(e))?e.visible||(e.props.once&&k.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},E=function(){k.forEach((function(e){var t=j.indexOf(e);-1!==t&&j.splice(t,1)})),k=[]},N=function(){for(var e=0;e<j.length;++e){var t=j[e];_(t)}E()},I=void 0,M=null,L=function(e){function t(e){d(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return h(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===I||"debounce"===I&&void 0===this.props.debounce;if(n&&((0,l.off)(e,"scroll",M,x),(0,l.off)(window,"resize",M,x),M=null),M||(void 0!==this.props.debounce?(M=(0,u.default)(N,"number"===typeof this.props.debounce?this.props.debounce:300),I="debounce"):void 0!==this.props.throttle?(M=(0,c.default)(N,"number"===typeof this.props.throttle?this.props.throttle:300),I="throttle"):M=N),this.props.overflow){var o=(0,s.default)(this.ref);if(o&&"function"===typeof o.getAttribute){var r=+o.getAttribute(y)+1;1===r&&o.addEventListener("scroll",M,x),o.setAttribute(y,r)}}else if(0===j.length||n){var i=this.props,a=i.scroll,f=i.resize;a&&(0,l.on)(e,"scroll",M,x),f&&(0,l.on)(window,"resize",M,x)}j.push(this),_(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",M,x),e.removeAttribute(y)):e.setAttribute(y,t)}}var n=j.indexOf(this);-1!==n&&j.splice(n,1),0===j.length&&"undefined"!==typeof window&&((0,l.off)(window,"resize",M,x),(0,l.off)(window,"scroll",M,x))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,o=e.placeholder,r=e.className,a=e.classNamePrefix,l=e.style;return i.default.createElement("div",{className:a+"-wrapper "+r,ref:this.setRef,style:l},this.visible?n:o||i.default.createElement("div",{style:{height:t},className:a+"-placeholder"}))}}]),t}(r.Component);L.propTypes={className:a.default.string,classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool,style:a.default.object},L.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var P=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){d(this,r);var e=p(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+P(t),e}return h(r,n),o(r,[{key:"render",value:function(){return i.default.createElement(L,e,i.default.createElement(t,this.props))}}]),r}(r.Component)}},t.default=L,t.forceCheck=N,t.forceVisible=function(){for(var e=0;e<j.length;++e){var t=j[e];t.visible=!0,t.forceUpdate()}E()}},46:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,o){o=o||!1,e.addEventListener?e.addEventListener(t,n,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,n,o):e.detachEvent&&e.detachEvent("on"+t,n)}},47:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(o),i=r.position,a=r.overflow,l=r["overflow-x"],s=r["overflow-y"];if("static"===i&&t)o=o.parentNode;else{if(n.test(a)&&n.test(l)&&n.test(s))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},48:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o=void 0,r=void 0,i=void 0,a=void 0,l=void 0,s=function s(){var u=+new Date-a;u<t&&u>=0?o=setTimeout(s,t-u):(o=null,n||(l=e.apply(i,r),o||(i=null,r=null)))};return function(){i=this,r=arguments,a=+new Date;var u=n&&!o;return o||(o=setTimeout(s,t)),u&&(l=e.apply(i,r),i=null,r=null),l}}},49:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var o,r;return t||(t=250),function(){var i=n||this,a=+new Date,l=arguments;o&&a<o+t?(clearTimeout(r),r=setTimeout((function(){o=a,e.apply(i,l)}),t)):(o=a,e.apply(i,l))}}},50:function(e,t,n){e.exports={lightbox:"LightboxImage_lightbox__2tWSq",lightboxOverlay:"LightboxImage_lightboxOverlay__3xZna",listItem:"LightboxImage_listItem__2xjM9",galleryImg:"LightboxImage_galleryImg__3HnY9",frame:"LightboxImage_frame__1wFUK"}},51:function(e,t,n){"use strict";var o=n(45),r=n.n(o),i=n(50),a=n.n(i),l=n(0);var s=function(e){var t=e.imgSrc,n=e.imgAlt,o=e.title,i=e.gallery;return void 0!==i&&i?Object(l.jsx)("a",{href:t,"data-caption":o,className:a.a.listItem,children:Object(l.jsx)(r.a,{height:"300px",children:Object(l.jsx)("div",{className:a.a.frame,children:Object(l.jsx)("img",{src:t,alt:n,className:a.a.galleryImg})})})}):Object(l.jsx)("a",{href:t,"data-caption":o,"data-type":"image",children:Object(l.jsx)("img",{src:t,alt:n})})};t.a=s},52:function(e,t,n){e.exports={figure:"Figure_figure__1h6Gi"}},53:function(e,t,n){"use strict";var o=n(51),r=n(52),i=n.n(r),a=n(0);var l=function(e){var t=e.imgSrc,n=e.imgAlt,r=e.caption;return Object(a.jsxs)("figure",{className:i.a.figure,children:[Object(a.jsx)(o.a,{imgSrc:t,imgAlt:n,title:r}),Object(a.jsx)("figcaption",{children:r})]})};t.a=l},71:function(e,t,n){"use strict";n.r(t);var o=n(22),r=n.p+"static/media/JrNM-logo-web.f33cf098.jpg",i=n.p+"static/media/velkommen-til-Jr-NM-Jervskogen.fca63dda.jpg",a=n(53),l=n(0);t.default=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("img",{src:o.a,alt:"Artist booking app grensesnitt"}),Object(l.jsxs)("h2",{children:["Praksisplass",Object(l.jsx)("span",{className:"subtitle",children:"2013"})]}),Object(l.jsxs)("ul",{className:"tools",children:["Verkt\xf8y ",Object(l.jsx)("li",{children:"Photoshop"})]}),Object(l.jsx)("p",{children:"I 2013 hadde jeg en-ukes praksis hos Orega p\xe5 Lade i Trondheim. Dette var mens jeg gikk interi\xf8r og utstillingsdesign p\xe5 VGS. Der fikk jeg v\xe6re med p\xe5 \xe5 designe logo for Junior NM p\xe5 Ski 2015. Det var kjempekult!"}),Object(l.jsx)("p",{children:"Leveransen min p\xe5 slutten av uka ble bokstavene \xabNM\xbb slik som de er i den ferdige logoen, med norskeflagg og alt. Jeg hadde ogs\xe5 en gr\xe5 tekst under hvor det sto \xabJr NM p\xe5 ski 2015\xbb."}),Object(l.jsx)("p",{children:"Til \xe5 designe logoen brukte jeg Photoshop. I ettertid har jeg skj\xf8nt at jeg heller burde ha brukt et vektorprogram som Illustrator, men dette visste jeg ikke da. En konsekvens av \xe5 bruke Photoshop var at ikke alle piksler ville henge med n\xe5r man endrer farge med paint-bucket-tool. Jeg pr\xf8vde ut logoen i masse forskjellige farger, og man kunne se restepiksler fra tidligere fargefyll."}),Object(l.jsx)("p",{children:"I den ferdige logoen som ble brukt i arrangementet hadde den gr\xe5 teksten heldigvis blitt byttet ut med en bl\xe5 tekst, som ser mye bedre ut. Mistenker ogs\xe5 at de har vektorisert den, siden logoen s\xe5 mye renere ut da jeg s\xe5 at den p\xe5 arrangementet."}),Object(l.jsxs)("div",{"uk-lightbox":"animation: slide",children:[Object(l.jsx)(a.a,{imgSrc:r,imgAlt:"Logo for Junior NM p\xe5 ski 2015",caption:"Logo som ble brukt. Den er bearbeidet etter jeg leverte den i 2013"}),Object(l.jsx)(a.a,{imgSrc:i,imgAlt:"plakat med logo",caption:"Plakat"})]})]})}}}]);
//# sourceMappingURL=5.a362f86a.chunk.js.map