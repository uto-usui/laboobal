(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{108:function(t,n,e){e(109);var r=e(69).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},109:function(t,n,e){var r=e(82);r(r.S+r.F*!e(66),"Object",{defineProperty:e(73).f})},214:function(t,n,e){},348:function(t,n,e){"use strict";var r=e(214);e.n(r).a},394:function(t,n,e){"use strict";e.r(n);var r=e(62),o=e(63),i=function(){function t(n,e){Object(r.a)(this,t),this.target=n,this.url=e,this.img=new Image,this.init()}return Object(o.a)(t,[{key:"init",value:function(){var t=this;this.img.crossOrigin="Anonymous",this.img.addEventListener("load",(function(){return t.onLoad()}),!1),this.img.src=this.url}},{key:"onLoad",value:function(){var t=document.createElement("canvas"),n=t.getContext("2d");t.width=this.target.offsetWidth,t.height=this.target.offsetHeight;var e=300*this.target.offsetWidth/800,r=79*this.target.offsetWidth/800,o=this.target.offsetWidth/2+e/-2,i=this.target.offsetHeight/2+r/-2;n.drawImage(this.img,o,i,e,r),this.target.appendChild(t)}}]),t}(),u={name:"",mounted:function(){new i(this.$refs.box,"/images/logo/vogue.svg")}},c=(e(348),e(2)),f=Object(c.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"box"})}),[],!1,null,"36b0c85c",null);n.default=f.exports},62:function(t,n,e){"use strict";function r(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return r}))},63:function(t,n,e){"use strict";e.d(n,"a",(function(){return u}));var r=e(86),o=e.n(r);function i(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(t,r.key,r)}}function u(t,n,e){return n&&i(t.prototype,n),e&&i(t,e),t}},66:function(t,n,e){t.exports=!e(79)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},68:function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},69:function(t,n){var e=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=e)},70:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},73:function(t,n,e){var r=e(78),o=e(98),i=e(96),u=Object.defineProperty;n.f=e(66)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},76:function(t,n,e){var r=e(73),o=e(88);t.exports=e(66)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},78:function(t,n,e){var r=e(70);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},79:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},80:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},82:function(t,n,e){var r=e(68),o=e(69),i=e(92),u=e(76),c=e(80),f=function(t,n,e){var a,s,p,l=t&f.F,h=t&f.G,v=t&f.S,d=t&f.P,y=t&f.B,g=t&f.W,w=h?o:o[n]||(o[n]={}),b=w.prototype,m=h?r:v?r[n]:(r[n]||{}).prototype;for(a in h&&(e=n),e)(s=!l&&m&&void 0!==m[a])&&c(w,a)||(p=s?m[a]:e[a],w[a]=h&&"function"!=typeof m[a]?e[a]:y&&s?i(p,r):g&&m[a]==p?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(p):d&&"function"==typeof p?i(Function.call,p):p,d&&((w.virtual||(w.virtual={}))[a]=p,t&f.R&&b&&!b[a]&&u(b,a,p)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},86:function(t,n,e){t.exports=e(108)},88:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},92:function(t,n,e){var r=e(94);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},93:function(t,n,e){var r=e(70),o=e(68).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},94:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},96:function(t,n,e){var r=e(70);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},98:function(t,n,e){t.exports=!e(66)&&!e(79)((function(){return 7!=Object.defineProperty(e(93)("div"),"a",{get:function(){return 7}}).a}))}}]);