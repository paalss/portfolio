(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[4],{38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(1),i=f(o),l=f(n(9)),a=n(39),s=f(n(40)),u=f(n(41)),c=f(n(42));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function v(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var h=0,m=0,g=0,b=0,y="data-lazyload-listened",j=[],k=[],w=!1;try{var O=Object.defineProperty({},"passive",{get:function(){w=!0}});window.addEventListener("test",null,O)}catch(A){}var x=!!w&&{capture:!1,passive:!0},_=function(e){var t=e.ref;if(t instanceof HTMLElement){var n=(0,s.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=e.ref,r=void 0,o=void 0,i=void 0,l=void 0;try{var a=t.getBoundingClientRect();r=a.top,o=a.left,i=a.height,l=a.width}catch(A){r=h,o=m,i=b,l=g}var s=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,c=Math.max(r,0),f=Math.max(o,0),d=Math.min(s,r+i)-c,p=Math.min(u,o+l)-f,v=void 0,y=void 0,j=void 0,k=void 0;try{var w=n.getBoundingClientRect();v=w.top,y=w.left,j=w.height,k=w.width}catch(A){v=h,y=m,j=b,k=g}var O=v-c,x=y-f,_=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return O-_[0]<=d&&O+j+_[1]>=0&&x-_[0]<=p&&x+k+_[1]>=0}(e,n):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,r=void 0;try{var o=t.getBoundingClientRect();n=o.top,r=o.height}catch(A){n=h,r=b}var i=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=i&&n+r+l[1]>=0}(e))?e.visible||(e.props.once&&k.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},E=function(){k.forEach((function(e){var t=j.indexOf(e);-1!==t&&j.splice(t,1)})),k=[]},N=function(){for(var e=0;e<j.length;++e){var t=j[e];_(t)}E()},L=void 0,I=null,M=function(e){function t(e){d(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n.setRef=n.setRef.bind(n),n}return v(t,e),r(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===L||"debounce"===L&&void 0===this.props.debounce;if(n&&((0,a.off)(e,"scroll",I,x),(0,a.off)(window,"resize",I,x),I=null),I||(void 0!==this.props.debounce?(I=(0,u.default)(N,"number"===typeof this.props.debounce?this.props.debounce:300),L="debounce"):void 0!==this.props.throttle?(I=(0,c.default)(N,"number"===typeof this.props.throttle?this.props.throttle:300),L="throttle"):I=N),this.props.overflow){var r=(0,s.default)(this.ref);if(r&&"function"===typeof r.getAttribute){var o=+r.getAttribute(y)+1;1===o&&r.addEventListener("scroll",I,x),r.setAttribute(y,o)}}else if(0===j.length||n){var i=this.props,l=i.scroll,f=i.resize;l&&(0,a.on)(e,"scroll",I,x),f&&(0,a.on)(window,"resize",I,x)}j.push(this),_(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",I,x),e.removeAttribute(y)):e.setAttribute(y,t)}}var n=j.indexOf(this);-1!==n&&j.splice(n,1),0===j.length&&"undefined"!==typeof window&&((0,a.off)(window,"resize",I,x),(0,a.off)(window,"scroll",I,x))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,n=e.children,r=e.placeholder,o=e.className,l=e.classNamePrefix,a=e.style;return i.default.createElement("div",{className:l+"-wrapper "+o,ref:this.setRef,style:a},this.visible?n:r||i.default.createElement("div",{style:{height:t},className:l+"-placeholder"}))}}]),t}(o.Component);M.propTypes={className:l.default.string,classNamePrefix:l.default.string,once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool,style:l.default.object},M.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var P=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function o(){d(this,o);var e=p(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return e.displayName="LazyLoad"+P(t),e}return v(o,n),r(o,[{key:"render",value:function(){return i.default.createElement(M,e,i.default.createElement(t,this.props))}}]),o}(o.Component)}},t.default=M,t.forceCheck=N,t.forceVisible=function(){for(var e=0;e<j.length;++e){var t=j[e];t.visible=!0,t.forceUpdate()}E()}},39:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,r){r=r||!1,e.addEventListener?e.addEventListener(t,n,r):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,r){r=r||!1,e.removeEventListener?e.removeEventListener(t,n,r):e.detachEvent&&e.detachEvent("on"+t,n)}},40:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,r=e;r;){if(!r.parentNode)return e.ownerDocument||document.documentElement;var o=window.getComputedStyle(r),i=o.position,l=o.overflow,a=o["overflow-x"],s=o["overflow-y"];if("static"===i&&t)r=r.parentNode;else{if(n.test(l)&&n.test(a)&&n.test(s))return r;r=r.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},41:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r=void 0,o=void 0,i=void 0,l=void 0,a=void 0,s=function s(){var u=+new Date-l;u<t&&u>=0?r=setTimeout(s,t-u):(r=null,n||(a=e.apply(i,o),r||(i=null,o=null)))};return function(){i=this,o=arguments,l=+new Date;var u=n&&!r;return r||(r=setTimeout(s,t)),u&&(a=e.apply(i,o),i=null,o=null),a}}},42:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var r,o;return t||(t=250),function(){var i=n||this,l=+new Date,a=arguments;r&&l<r+t?(clearTimeout(o),o=setTimeout((function(){r=l,e.apply(i,a)}),t)):(r=l,e.apply(i,a))}}},43:function(e,t,n){e.exports={lightbox:"LightboxImage_lightbox__2teut",lightboxOverlay:"LightboxImage_lightboxOverlay__3ZQGx",listItem:"LightboxImage_listItem__2f2sa",galleryImg:"LightboxImage_galleryImg__3L2UF",frame:"LightboxImage_frame__3Vuvf"}},44:function(e,t,n){"use strict";var r=n(38),o=n.n(r),i=n(43),l=n.n(i),a=n(0);var s=function(e){var t=e.imgSrc,n=e.imgAlt,r=e.title,i=e.gallery;return void 0!==i&&i?Object(a.jsx)("a",{href:t,"data-caption":r,className:l.a.listItem,children:Object(a.jsx)(o.a,{height:"300px",children:Object(a.jsx)("div",{className:l.a.frame,children:Object(a.jsx)("img",{src:t,alt:n,className:l.a.galleryImg})})})}):Object(a.jsx)("a",{href:t,"data-caption":r,children:Object(a.jsx)("img",{src:t,alt:n})})};t.a=s},45:function(e,t,n){e.exports={figure:"Figure_figure__3E5FP"}},46:function(e,t,n){"use strict";var r=n(44),o=n(45),i=n.n(o),l=n(0);var a=function(e){var t=e.imgSrc,n=e.imgAlt,o=e.caption;return Object(l.jsxs)("figure",{className:i.a.figure,children:[Object(l.jsx)(r.a,{imgSrc:t,imgAlt:n,title:o}),Object(l.jsx)("figcaption",{children:o})]})};t.a=a},61:function(e,t,n){"use strict";n.r(t);var r=n(19),o=n.p+"static/media/JrNM-logo-web.f33cf098.jpg",i=n.p+"static/media/velkommen-til-Jr-NM-Jervskogen.fca63dda.jpg",l=n(46),a=n(0);t.default=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{src:r.a,alt:"Artist booking app grensesnitt"}),Object(a.jsxs)("h2",{children:["Praksisplass",Object(a.jsx)("span",{className:"subtitle",children:Object(a.jsxs)("ul",{className:"tools",children:["Verkt\xf8y:",Object(a.jsx)("br",{}),Object(a.jsx)("li",{children:"Photoshop"})]})})]}),Object(a.jsx)("p",{children:"I 2013 hadde jeg en-ukes praksis hos Orega p\xe5 Lade i Trondheim. Dette var mens jeg gikk interi\xf8r og utstillingsdesign p\xe5 VGS. Der fikk jeg v\xe6re med p\xe5 \xe5 designe logo for Junior NM p\xe5 Ski 2015. Det var kjempekult!"}),Object(a.jsx)("p",{children:"Leveransen min p\xe5 slutten av uka ble bokstavene \xabNM\xbb slik som de er i den ferdige logoen, pluss en gr\xe5 tekst under hvor det sto \xabJr NM p\xe5 ski 2015\xbb."}),Object(a.jsxs)("p",{children:["Jeg brukte Photoshop fordi jeg ikke kunne Illustrator eller visste hvorfor det var et ideelt verkt\xf8y p\xe5 den tiden. Det har ergret meg i ettertid: n\xe5r man bytter farge med fill-bucket p\xe5 pikselgrafikk, vil ikke alle piksler f\xf8lge med alltid, s\xe5 man ender opp noen ganger med pikselrester fra andre fargeversjoner. ",Object(a.jsx)("br",{}),"Jeg lagde en profilmanual til logoen som viste forskjellige versjoner og bakgrunner logoen kunne v\xe6re p\xe5, og man kan tydelig se at man kan se rester etter tidligere farger."]}),Object(a.jsx)("p",{children:"I den ferdige logoen som ble brukt i arrangementet hadde den gr\xe5 teksten heldigvis blitt byttet ut med en bl\xe5 tekst, som ser mye bedre ut. Mistenker ogs\xe5 at de har vektorisert den, siden logoen s\xe5 mye renere ut da jeg s\xe5 at den p\xe5 arrangementet."}),Object(a.jsxs)("div",{"uk-grid":!0,"uk-lightbox":"animation: slide",children:[Object(a.jsx)(l.a,{imgSrc:o,imgAlt:"Logo for Junior NM p\xe5 ski 2015",caption:"Logo som ble brukt. Den er bearbeidet etter jeg leverte den i 2013"}),Object(a.jsx)(l.a,{imgSrc:i,imgAlt:"plakat med logo",caption:"Plakat"})]})]})}}}]);
//# sourceMappingURL=4.c248a9c0.chunk.js.map