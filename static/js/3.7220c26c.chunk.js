(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[3],{40:function(e,t,i){"use strict";var o=i(41),n=i.n(o),r=i(0);t.a=function(e){var t=e.tools,i=e.thereAreMoreTools,o=void 0!==i&&i,l=e.toolsText,a=void 0!==l&&l;return Object(r.jsxs)("ul",{className:n.a.tools,children:[a&&"Verkt\xf8y: ",t&&t.map((function(e,t){return Object(r.jsxs)("li",{children:[Object(r.jsx)("span",{className:n.a.tool,children:e}),Object(r.jsx)("span",{className:n.a.invisible,children:" \xad"})]},t)})),o&&Object(r.jsx)(r.Fragment,{children:".\xa0.\xa0."})]})}},41:function(e,t,i){e.exports={tools:"ToolList_tools__34VQq",tool:"ToolList_tool__2QtsK",invisible:"ToolList_invisible__2nn8n"}},42:function(e,t,i){"use strict";var o=i(40);t.a=o.a},43:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceVisible=t.forceCheck=t.lazyload=void 0;var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,i,o){return i&&e(t.prototype,i),o&&e(t,o),t}}(),n=i(1),r=f(n),l=f(i(9)),a=i(44),s=f(i(45)),c=f(i(46)),u=f(i(47));function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=0,v=0,b=0,g=0,y="data-lazyload-listened",j=[],w=[],x=!1;try{var O=Object.defineProperty({},"passive",{get:function(){x=!0}});window.addEventListener("test",null,O)}catch(M){}var _=!!x&&{capture:!1,passive:!0},k=function(e){var t=e.ref;if(t instanceof HTMLElement){var i=(0,s.default)(t);(e.props.overflow&&i!==t.ownerDocument&&i!==document&&i!==document.documentElement?function(e,t){var i=e.ref,o=void 0,n=void 0,r=void 0,l=void 0;try{var a=t.getBoundingClientRect();o=a.top,n=a.left,r=a.height,l=a.width}catch(M){o=m,n=v,r=g,l=b}var s=window.innerHeight||document.documentElement.clientHeight,c=window.innerWidth||document.documentElement.clientWidth,u=Math.max(o,0),f=Math.max(n,0),d=Math.min(s,o+r)-u,p=Math.min(c,n+l)-f,h=void 0,y=void 0,j=void 0,w=void 0;try{var x=i.getBoundingClientRect();h=x.top,y=x.left,j=x.height,w=x.width}catch(M){h=m,y=v,j=g,w=b}var O=h-u,_=y-f,k=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return O-k[0]<=d&&O+j+k[1]>=0&&_-k[0]<=p&&_+w+k[1]>=0}(e,i):function(e){var t=e.ref;if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var i=void 0,o=void 0;try{var n=t.getBoundingClientRect();i=n.top,o=n.height}catch(M){i=m,o=g}var r=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return i-l[0]<=r&&i+o+l[1]>=0}(e))?e.visible||(e.props.once&&w.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},E=function(){w.forEach((function(e){var t=j.indexOf(e);-1!==t&&j.splice(t,1)})),w=[]},A=function(){for(var e=0;e<j.length;++e){var t=j[e];k(t)}E()},N=void 0,T=null,L=function(e){function t(e){d(this,t);var i=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.visible=!1,i.setRef=i.setRef.bind(i),i}return h(t,e),o(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var i=void 0!==this.props.debounce&&"throttle"===N||"debounce"===N&&void 0===this.props.debounce;if(i&&((0,a.off)(e,"scroll",T,_),(0,a.off)(window,"resize",T,_),T=null),T||(void 0!==this.props.debounce?(T=(0,c.default)(A,"number"===typeof this.props.debounce?this.props.debounce:300),N="debounce"):void 0!==this.props.throttle?(T=(0,u.default)(A,"number"===typeof this.props.throttle?this.props.throttle:300),N="throttle"):T=A),this.props.overflow){var o=(0,s.default)(this.ref);if(o&&"function"===typeof o.getAttribute){var n=+o.getAttribute(y)+1;1===n&&o.addEventListener("scroll",T,_),o.setAttribute(y,n)}}else if(0===j.length||i){var r=this.props,l=r.scroll,f=r.resize;l&&(0,a.on)(e,"scroll",T,_),f&&(0,a.on)(window,"resize",T,_)}j.push(this),k(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,s.default)(this.ref);if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(y)-1;0===t?(e.removeEventListener("scroll",T,_),e.removeAttribute(y)):e.setAttribute(y,t)}}var i=j.indexOf(this);-1!==i&&j.splice(i,1),0===j.length&&"undefined"!==typeof window&&((0,a.off)(window,"resize",T,_),(0,a.off)(window,"scroll",T,_))}},{key:"setRef",value:function(e){e&&(this.ref=e)}},{key:"render",value:function(){var e=this.props,t=e.height,i=e.children,o=e.placeholder,n=e.className,l=e.classNamePrefix,a=e.style;return r.default.createElement("div",{className:l+"-wrapper "+n,ref:this.setRef,style:a},this.visible?i:o||r.default.createElement("div",{style:{height:t},className:l+"-placeholder"}))}}]),t}(n.Component);L.propTypes={className:l.default.string,classNamePrefix:l.default.string,once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool,style:l.default.object},L.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var I=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(i){function n(){d(this,n);var e=p(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));return e.displayName="LazyLoad"+I(t),e}return h(n,i),o(n,[{key:"render",value:function(){return r.default.createElement(L,e,r.default.createElement(t,this.props))}}]),n}(n.Component)}},t.default=L,t.forceCheck=A,t.forceVisible=function(){for(var e=0;e<j.length;++e){var t=j[e];t.visible=!0,t.forceUpdate()}E()}},44:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,i,o){o=o||!1,e.addEventListener?e.addEventListener(t,i,o):e.attachEvent&&e.attachEvent("on"+t,(function(t){i.call(e,t||window.event)}))},t.off=function(e,t,i,o){o=o||!1,e.removeEventListener?e.removeEventListener(t,i,o):e.detachEvent&&e.detachEvent("on"+t,i)}},45:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,i=/(scroll|auto)/,o=e;o;){if(!o.parentNode)return e.ownerDocument||document.documentElement;var n=window.getComputedStyle(o),r=n.position,l=n.overflow,a=n["overflow-x"],s=n["overflow-y"];if("static"===r&&t)o=o.parentNode;else{if(i.test(l)&&i.test(a)&&i.test(s))return o;o=o.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},46:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){var o=void 0,n=void 0,r=void 0,l=void 0,a=void 0,s=function s(){var c=+new Date-l;c<t&&c>=0?o=setTimeout(s,t-c):(o=null,i||(a=e.apply(r,n),o||(r=null,n=null)))};return function(){r=this,n=arguments,l=+new Date;var c=i&&!o;return o||(o=setTimeout(s,t)),c&&(a=e.apply(r,n),r=null,n=null),a}}},47:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,i){var o,n;return t||(t=250),function(){var r=i||this,l=+new Date,a=arguments;o&&l<o+t?(clearTimeout(n),n=setTimeout((function(){o=l,e.apply(r,a)}),t)):(o=l,e.apply(r,a))}}},48:function(e,t,i){e.exports={lightbox:"LightboxImage_lightbox__2tWSq",lightboxOverlay:"LightboxImage_lightboxOverlay__3xZna",listItem:"LightboxImage_listItem__2xjM9",galleryImg:"LightboxImage_galleryImg__3HnY9",frame:"LightboxImage_frame__1wFUK"}},49:function(e,t,i){"use strict";var o=i(43),n=i.n(o),r=i(48),l=i.n(r),a=i(0);var s=function(e){var t=e.imgSrc,i=e.imgWidth,o=e.imgHeight,r=e.imgAlt,s=e.title,c=e.gallery;return void 0!==c&&c?Object(a.jsx)("a",{href:t,"data-caption":s,className:l.a.listItem,children:Object(a.jsx)(n.a,{height:300,children:Object(a.jsx)("div",{className:l.a.frame,children:Object(a.jsx)("img",{height:300,width:340,src:t,alt:r,className:l.a.galleryImg})})})}):Object(a.jsx)("a",{href:t,"data-caption":s,"data-type":"image",children:Object(a.jsx)("img",{src:t,width:i,height:o,alt:r})})};t.a=s},50:function(e,t,i){e.exports={figure:"Figure_figure__1h6Gi"}},51:function(e,t,i){"use strict";var o=i(49),n=i(50),r=i.n(n),l=i(0);var a=function(e){var t=e.imgSrc,i=e.imgWidth,n=e.imgHeight,a=e.imgAlt,s=e.caption;return Object(l.jsxs)("figure",{className:r.a.figure,children:[Object(l.jsx)(o.a,{imgSrc:t,imgWidth:i,imgHeight:n,imgAlt:a,title:s}),Object(l.jsx)("figcaption",{children:s})]})};t.a=a},66:function(e,t,i){"use strict";i.r(t);var o=i(21),n=i.p+"static/media/Android-Mobile\u20132.25d1af4b.webp",r=i.p+"static/media/Android-Mobile\u20133.25ccd4f9.webp",l=i.p+"static/media/Android-Mobile\u20134.d26dbb80.webp",a=i.p+"static/media/Web-1280\u20134.3432dfe3.webp",s=i(51),c=i(42),u=i(0);t.default=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("h2",{children:["Prosjekt i studiene",Object(u.jsx)("span",{className:"subtitle",children:"2019 h\xf8st"})]}),Object(u.jsx)(c.a,{tools:["Adobe XD"],toolsText:!0}),Object(u.jsx)("p",{children:'I faget "grafiske verkt\xf8y, prinsipper og metoder" skulle vi lage en klikkbar hi-fi prototype for en app. Appen skulle v\xe6re musikkrelatert, s\xe5 det endte opp med \xe5 bli en app for privatpersoner og musikkartister som kunne avtale spillejobber med hverandre. Jeg bestemte meg til \xe5 lage mobil- og desktop-visning av alle sidene.'}),Object(u.jsx)("h3",{children:"Noen utvalgte bilder"}),Object(u.jsxs)("div",{"uk-lightbox":"animation: slide",className:"flex wrap",children:[Object(u.jsx)(s.a,{imgSrc:o.a,imgWidth:360,imgHeight:646,imgAlt:"Startside",caption:"Startside"}),Object(u.jsx)(s.a,{imgSrc:n,imgWidth:360,imgHeight:640,imgAlt:"S\xf8kefelt",caption:"S\xf8kefelt"}),Object(u.jsx)(s.a,{imgSrc:r,imgWidth:360,imgHeight:864,imgAlt:"S\xf8keresultater",caption:"S\xf8keresultater"}),Object(u.jsx)(s.a,{imgSrc:l,imgWidth:360,imgHeight:1027,imgAlt:"Artistprofil",caption:"Artistprofil"}),Object(u.jsx)(s.a,{imgSrc:a,imgWidth:1280,imgHeight:848,imgAlt:"En desktopside",caption:"En desktopside"})]})]})}}}]);
//# sourceMappingURL=3.7220c26c.chunk.js.map