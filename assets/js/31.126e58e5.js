(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{100:function(t,n,r){r(101),t.exports=r(62).Array.isArray},101:function(t,n,r){var e=r(70);e(e.S,"Array",{isArray:r(135)})},102:function(t,n,r){t.exports=r(103)},103:function(t,n,r){r(92),r(104),t.exports=r(62).Array.from},104:function(t,n,r){"use strict";var e=r(74),a=r(70),i=r(116),o=r(125),u=r(126),c=r(115),s=r(105),f=r(127);a(a.S+a.F*!r(128)((function(t){Array.from(t)})),"Array",{from:function(t){var n,r,a,l,h=i(t),d="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,p=void 0!==g,y=0,b=f(h);if(p&&(g=e(g,v>2?arguments[2]:void 0,2)),null==b||d==Array&&u(b))for(r=new d(n=c(h.length));n>y;y++)s(r,y,p?g(h[y],y):h[y]);else for(l=b.call(h),r=new d;!(a=l.next()).done;y++)s(r,y,p?o(l,g,[a.value,y],!0):a.value);return r.length=y,r}})},105:function(t,n,r){"use strict";var e=r(66),a=r(75);t.exports=function(t,n,r){n in t?e.f(t,n,a(0,r)):t[n]=r}},106:function(t,n,r){t.exports=r(107)},107:function(t,n,r){r(120),r(92),t.exports=r(108)},108:function(t,n,r){var e=r(117),a=r(80)("iterator"),i=r(91);t.exports=r(62).isIterable=function(t){var n=Object(t);return void 0!==n[a]||"@@iterator"in n||i.hasOwnProperty(e(n))}},109:function(t,n,r){"use strict";r.d(n,"a",(function(){return i}));var e=r(73),a=r.n(e);function i(t,n,r){return n in t?a()(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}},110:function(t,n,r){"use strict";var e=r(99),a=r.n(e);var i=r(102),o=r.n(i),u=r(106),c=r.n(u);function s(t){return function(t){if(a()(t)){for(var n=0,r=new Array(t.length);n<t.length;n++)r[n]=t[n];return r}}(t)||function(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}r.d(n,"a",(function(){return s}))},111:function(t,n,r){"use strict";var e=r(34),a=r(83)(1);e(e.P+e.F*!r(84)([].map,!0),"Array",{map:function(t){return a(this,t,arguments[1])}})},272:function(t,n,r){},404:function(t,n,r){"use strict";var e=r(272);r.n(e).a},443:function(t,n,r){"use strict";r.r(n);var e=r(110),a=(r(111),r(78),r(71),r(64)),i=r(65),o=r(61),u=r(94),c=function(){function t(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.innerWidth,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.innerHeight;Object(a.a)(this,t),this.targets=n,this.angle=0,this.speed=r,this.center={x:e/2-this.targets[0].offsetWidth/2,y:i/2-this.targets[0].offsetHeight/2},this.radius=i/3}return Object(i.a)(t,[{key:"play",value:function(){var t=this;this.targets.forEach((function(n,r){var e=t.angle+360/t.targets.length*r;o.i.set(n,{x:t.center.x+Math.sin(u.a.angleToRadian(e))*t.radius,y:t.center.y+Math.cos(u.a.angleToRadian(e))*t.radius,z:Math.sin(u.a.angleToRadian(t.angle))*t.radius*2,scale:u.a.map(Math.sin(u.a.angleToRadian(t.angle+r*t.radius)),-1,1,1,1.75),rotationY:u.a.map(Math.cos(u.a.angleToRadian(t.angle+r*t.radius)),-1,1,1,360),rotationZ:u.a.map(Math.sin(u.a.angleToRadian(t.angle+r*t.radius)),-1,1,1,360),backgroundColor:"hsla(".concat(t.angle+360/t.targets.length*r,", 80%, 70%, 1)")})})),this.angle+=this.speed,requestAnimationFrame((function(){return t.play()}))}}]),t}(),s={name:"TrigonometryCircle",components:{},mounted:function(){var t=this;this.$nextTick((function(){new c(Object(e.a)(t.$refs.wrap.querySelectorAll(".target")),2,t.$refs.wrap.offsetWidth,t.$refs.wrap.offsetHeight).play()}))},methods:{}},f=(r(404),r(2)),l=Object(f.a)(s,(function(){var t=this.$createElement,n=this._self._c||t;return n("section",{ref:"wrap",staticClass:"wrap",attrs:{id:"js-wrap"}},this._l(12,(function(t){return n("div",{key:t,ref:t,refInFor:!0,staticClass:"target"})})),0)}),[],!1,null,"71e93e1d",null);n.default=l.exports},64:function(t,n,r){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}r.d(n,"a",(function(){return e}))},65:function(t,n,r){"use strict";r.d(n,"a",(function(){return o}));var e=r(73),a=r.n(e);function i(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),a()(t,e.key,e)}}function o(t,n,r){return n&&i(t.prototype,n),r&&i(t,r),t}},71:function(t,n,r){"use strict";var e=r(34),a=r(83)(0),i=r(84)([].forEach,!0);e(e.P+e.F*!i,"Array",{forEach:function(t){return a(this,t,arguments[1])}})},73:function(t,n,r){t.exports=r(81)},81:function(t,n,r){r(82);var e=r(62).Object;t.exports=function(t,n,r){return e.defineProperty(t,n,r)}},82:function(t,n,r){var e=r(70);e(e.S+e.F*!r(63),"Object",{defineProperty:r(66).f})},94:function(t,n,r){"use strict";r(95),r(97);var e=r(64),a=r(65),i=r(109),o=function(){function t(){Object(e.a)(this,t)}return Object(a.a)(t,null,[{key:"rotateX",value:function(t,n){var r=Math.cos(n),e=Math.sin(n),a=t.y*r-t.z*e,i=t.z*r+t.y*e;t.y=a,t.z=i}},{key:"rotateY",value:function(t,n){var r=Math.cos(n),e=Math.sin(n),a=t.x*r-t.z*e,i=t.z*r+t.x*e;t.x=a,t.z=i}},{key:"rotateZ",value:function(t,n){var r=Math.cos(n),e=Math.sin(n),a=t.x*r-t.y*e,i=t.y*r+t.x*e;t.x=a,t.y=i}},{key:"orgTrunc",value:function(t,n){return Math.trunc(t*n)/n}}]),t}();Object(i.a)(o,"map",(function(t,n,r,e,a){return t<=n?e:t>=r?a:(a-e)/(r-n)*(t-n)+e})),Object(i.a)(o,"lerp",(function(t,n,r){return t+(n-t)*r})),Object(i.a)(o,"norm",(function(t,n,r){return(r-t)/(n-t)})),Object(i.a)(o,"distance",(function(t,n,r,e){return Math.hypot(r-t,e-n)})),Object(i.a)(o,"angleToRadian",(function(t){return t*Math.PI/180})),Object(i.a)(o,"radianToAngle",(function(t){return 180*t/Math.PI})),Object(i.a)(o,"getRadian",(function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return Math.atan2(n-e,t-r)})),Object(i.a)(o,"random",(function(t,n){return Math.random()*(n-t)+t})),Object(i.a)(o,"randomInt",(function(t,n){return Math.trunc(Math.random()*(n-t+1))+t})),Object(i.a)(o,"randomArr",(function(t){return t[o.randomInt(0,t.length-1)]})),Object(i.a)(o,"rangeBoolean",(function(t){return 0===o.randomInt(0,t-1)})),Object(i.a)(o,"aperture",(function(t,n,r){return(r-(n-t))/t})),Object(i.a)(o,"rotate2d",(function(t,n,r,e,a){var i=Math.PI/180*a,o=Math.cos(i),u=Math.sin(i);return[o*(r-t)+u*(e-n)+t,o*(e-n)-u*(r-t)+n]})),n.a=o},95:function(t,n,r){var e=r(34),a=Math.abs;e(e.S,"Math",{hypot:function(t,n){for(var r,e,i=0,o=0,u=arguments.length,c=0;o<u;)c<(r=a(arguments[o++]))?(i=i*(e=c/r)*e+1,c=r):i+=r>0?(e=r/c)*e:r;return c===1/0?1/0:c*Math.sqrt(i)}})},97:function(t,n,r){var e=r(34);e(e.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},99:function(t,n,r){t.exports=r(100)}}]);