_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{Juyh:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return _}));var r=n("o0o1"),o=n.n(r);function u(t,e,n,r,o,u,c){try{var a=t[u](c),i=a.value}catch(f){return void n(f)}a.done?e(i):Promise.resolve(i).then(r,o)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=n("q1tI"),l=n.n(p),y=n("vcXL"),d=n.n(y),h=n("Y0NT"),b=n("5Yp1"),v=l.a.createElement;function w(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}var _=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(f,t);var e,n,r,i=w(f);function f(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,f),i.apply(this,arguments)}return e=f,n=[{key:"render",value:function(){var t=this.props,e=t.user,n=t.statusCode;return n?v(h.default,{statusCode:n}):v(b.a,{title:"About"},v("p",null,e.name),v("img",{src:e.avatar_url,alt:"Reed",height:"200px"}))}}],r=[{key:"getInitialProps",value:function(){var t,e=(t=o.a.mark((function t(){var e,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d()("https://api.github.com/users/reedbarger");case 2:return e=t.sent,n=e.status>200&&e.status,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",{user:r,statusCode:n});case 8:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var c=t.apply(e,n);function a(t){u(c,r,o,a,i,"next",t)}function i(t){u(c,r,o,a,i,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}()}],n&&c(e.prototype,n),r&&c(e,r),f}(p.Component)},Y0NT:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),u=n("5Yp1"),c=o.a.createElement;e.default=function(t){var e=t.statusCode;return c(u.a,{title:"Error!!!"},e?"Could not load your data. Status code ".concat(e):"Couldn't get that page")}},rB5V:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return n("Juyh")}])},vcXL:function(t,e,n){"use strict";var r=self.fetch.bind(self);t.exports=r,t.exports.default=t.exports}},[["rB5V",0,2,1,3]]]);