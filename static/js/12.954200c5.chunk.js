(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[12],{69:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.forceVisible=e.forceCheck=e.lazyload=void 0;var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=r(1),i=s(o),a=s(r(12)),u=r(70),c=s(r(71)),l=s(r(72)),f=s(r(73));function s(t){return t&&t.__esModule?t:{default:t}}function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function d(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var v=0,y=0,m=0,g=0,w="data-lazyload-listened",b=[],E=[],L=!1;try{var _=Object.defineProperty({},"passive",{get:function(){L=!0}});window.addEventListener("test",null,_)}catch(A){}var x=!!L&&{capture:!1,passive:!0},O=function(t){var e=t.ref;if(e instanceof HTMLElement){var r=(0,c.default)(e);(t.props.overflow&&r!==e.ownerDocument&&r!==document&&r!==document.documentElement?function(t,e){var r=t.ref,n=void 0,o=void 0,i=void 0,a=void 0;try{var u=e.getBoundingClientRect();n=u.top,o=u.left,i=u.height,a=u.width}catch(A){n=v,o=y,i=g,a=m}var c=window.innerHeight||document.documentElement.clientHeight,l=window.innerWidth||document.documentElement.clientWidth,f=Math.max(n,0),s=Math.max(o,0),h=Math.min(c,n+i)-f,p=Math.min(l,o+a)-s,d=void 0,w=void 0,b=void 0,E=void 0;try{var L=r.getBoundingClientRect();d=L.top,w=L.left,b=L.height,E=L.width}catch(A){d=v,w=y,b=g,E=m}var _=d-f,x=w-s,O=Array.isArray(t.props.offset)?t.props.offset:[t.props.offset,t.props.offset];return _-O[0]<=h&&_+b+O[1]>=0&&x-O[0]<=p&&x+E+O[1]>=0}(t,r):function(t){var e=t.ref;if(!(e.offsetWidth||e.offsetHeight||e.getClientRects().length))return!1;var r=void 0,n=void 0;try{var o=e.getBoundingClientRect();r=o.top,n=o.height}catch(A){r=v,n=g}var i=window.innerHeight||document.documentElement.clientHeight,a=Array.isArray(t.props.offset)?t.props.offset:[t.props.offset,t.props.offset];return r-a[0]<=i&&r+n+a[1]>=0}(t))?t.visible||(t.props.once&&E.push(t),t.visible=!0,t.forceUpdate()):t.props.once&&t.visible||(t.visible=!1,t.props.unmountIfInvisible&&t.forceUpdate())}},j=function(){E.forEach((function(t){var e=b.indexOf(t);-1!==e&&b.splice(e,1)})),E=[]},P=function(){for(var t=0;t<b.length;++t){var e=b[t];O(e)}j()},N=void 0,k=null,T=function(t){function e(t){h(this,e);var r=p(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return r.visible=!1,r.setRef=r.setRef.bind(r),r}return d(e,t),n(e,[{key:"componentDidMount",value:function(){var t=window,e=this.props.scrollContainer;e&&"string"===typeof e&&(t=t.document.querySelector(e));var r=void 0!==this.props.debounce&&"throttle"===N||"debounce"===N&&void 0===this.props.debounce;if(r&&((0,u.off)(t,"scroll",k,x),(0,u.off)(window,"resize",k,x),k=null),k||(void 0!==this.props.debounce?(k=(0,l.default)(P,"number"===typeof this.props.debounce?this.props.debounce:300),N="debounce"):void 0!==this.props.throttle?(k=(0,f.default)(P,"number"===typeof this.props.throttle?this.props.throttle:300),N="throttle"):k=P),this.props.overflow){var n=(0,c.default)(this.ref);if(n&&"function"===typeof n.getAttribute){var o=+n.getAttribute(w)+1;1===o&&n.addEventListener("scroll",k,x),n.setAttribute(w,o)}}else if(0===b.length||r){var i=this.props,a=i.scroll,s=i.resize;a&&(0,u.on)(t,"scroll",k,x),s&&(0,u.on)(window,"resize",k,x)}b.push(this),O(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var t=(0,c.default)(this.ref);if(t&&"function"===typeof t.getAttribute){var e=+t.getAttribute(w)-1;0===e?(t.removeEventListener("scroll",k,x),t.removeAttribute(w)):t.setAttribute(w,e)}}var r=b.indexOf(this);-1!==r&&b.splice(r,1),0===b.length&&"undefined"!==typeof window&&((0,u.off)(window,"resize",k,x),(0,u.off)(window,"scroll",k,x))}},{key:"setRef",value:function(t){t&&(this.ref=t)}},{key:"render",value:function(){var t=this.props,e=t.height,r=t.children,n=t.placeholder,o=t.className,a=t.classNamePrefix,u=t.style;return i.default.createElement("div",{className:a+"-wrapper "+o,ref:this.setRef,style:u},this.visible?r:n||i.default.createElement("div",{style:{height:e},className:a+"-placeholder"}))}}]),e}(o.Component);T.propTypes={className:a.default.string,classNamePrefix:a.default.string,once:a.default.bool,height:a.default.oneOfType([a.default.number,a.default.string]),offset:a.default.oneOfType([a.default.number,a.default.arrayOf(a.default.number)]),overflow:a.default.bool,resize:a.default.bool,scroll:a.default.bool,children:a.default.node,throttle:a.default.oneOfType([a.default.number,a.default.bool]),debounce:a.default.oneOfType([a.default.number,a.default.bool]),placeholder:a.default.node,scrollContainer:a.default.oneOfType([a.default.string,a.default.object]),unmountIfInvisible:a.default.bool,style:a.default.object},T.defaultProps={className:"",classNamePrefix:"lazyload",once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var C=function(t){return t.displayName||t.name||"Component"};e.lazyload=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(e){return function(r){function o(){h(this,o);var t=p(this,(o.__proto__||Object.getPrototypeOf(o)).call(this));return t.displayName="LazyLoad"+C(e),t}return d(o,r),n(o,[{key:"render",value:function(){return i.default.createElement(T,t,i.default.createElement(e,this.props))}}]),o}(o.Component)}},e.default=T,e.forceCheck=P,e.forceVisible=function(){for(var t=0;t<b.length;++t){var e=b[t];e.visible=!0,e.forceUpdate()}j()}},70:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.on=function(t,e,r,n){n=n||!1,t.addEventListener?t.addEventListener(e,r,n):t.attachEvent&&t.attachEvent("on"+e,(function(e){r.call(t,e||window.event)}))},e.off=function(t,e,r,n){n=n||!1,t.removeEventListener?t.removeEventListener(e,r,n):t.detachEvent&&t.detachEvent("on"+e,r)}},71:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){if(!(t instanceof HTMLElement))return document.documentElement;for(var e="absolute"===t.style.position,r=/(scroll|auto)/,n=t;n;){if(!n.parentNode)return t.ownerDocument||document.documentElement;var o=window.getComputedStyle(n),i=o.position,a=o.overflow,u=o["overflow-x"],c=o["overflow-y"];if("static"===i&&e)n=n.parentNode;else{if(r.test(a)&&r.test(u)&&r.test(c))return n;n=n.parentNode}}return t.ownerDocument||t.documentElement||document.documentElement}},72:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r){var n=void 0,o=void 0,i=void 0,a=void 0,u=void 0,c=function c(){var l=+new Date-a;l<e&&l>=0?n=setTimeout(c,e-l):(n=null,r||(u=t.apply(i,o),n||(i=null,o=null)))};return function(){i=this,o=arguments,a=+new Date;var l=r&&!n;return n||(n=setTimeout(c,e)),l&&(u=t.apply(i,o),i=null,o=null),u}}},73:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,r){var n,o;return e||(e=250),function(){var i=r||this,a=+new Date,u=arguments;n&&a<n+e?(clearTimeout(o),o=setTimeout((function(){n=a,t.apply(i,u)}),e)):(n=a,t.apply(i,u))}}},82:function(t,e,r){t.exports=r(83)},83:function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(C){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new N(n||[]);return i._invoke=function(t,e,r){var n=s;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===v)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===s)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=f(t,e,r);if("normal"===c.type){if(n=r.done?d:h,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=d,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(C){return{type:"throw",arg:C}}}t.wrap=l;var s="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function m(){}function g(){}var w={};w[i]=function(){return this};var b=Object.getPrototypeOf,E=b&&b(b(k([])));E&&E!==r&&n.call(E,i)&&(w=E);var L=g.prototype=y.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,a,u){var c=f(t[o],t,i);if("throw"!==c.type){var l=c.arg,s=l.value;return s&&"object"===typeof s&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function k(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return m.prototype=L.constructor=g,g.constructor=m,m.displayName=c(g,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,u,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(x.prototype),x.prototype[a]=function(){return this},t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(L),c(L,u,"Generator"),L[i]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},84:function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,"a",(function(){return o}))}}]);
//# sourceMappingURL=12.954200c5.chunk.js.map