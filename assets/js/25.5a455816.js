(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{100:function(t,e,n){n(101),t.exports=n(62).Array.isArray},101:function(t,e,n){var i=n(70);i(i.S,"Array",{isArray:n(135)})},102:function(t,e,n){t.exports=n(103)},103:function(t,e,n){n(92),n(104),t.exports=n(62).Array.from},104:function(t,e,n){"use strict";var i=n(74),r=n(70),a=n(116),o=n(125),s=n(126),c=n(115),u=n(105),h=n(127);r(r.S+r.F*!n(128)((function(t){Array.from(t)})),"Array",{from:function(t){var e,n,r,l,f=a(t),d="function"==typeof this?this:Array,p=arguments.length,v=p>1?arguments[1]:void 0,g=void 0!==v,b=0,y=h(f);if(g&&(v=i(v,p>2?arguments[2]:void 0,2)),null==y||d==Array&&s(y))for(n=new d(e=c(f.length));e>b;b++)u(n,b,g?v(f[b],b):f[b]);else for(l=y.call(f),n=new d;!(r=l.next()).done;b++)u(n,b,g?o(l,v,[r.value,b],!0):r.value);return n.length=b,n}})},105:function(t,e,n){"use strict";var i=n(66),r=n(75);t.exports=function(t,e,n){e in t?i.f(t,e,r(0,n)):t[e]=n}},106:function(t,e,n){t.exports=n(107)},107:function(t,e,n){n(120),n(92),t.exports=n(108)},108:function(t,e,n){var i=n(117),r=n(80)("iterator"),a=n(91);t.exports=n(62).isIterable=function(t){var e=Object(t);return void 0!==e[r]||"@@iterator"in e||a.hasOwnProperty(i(e))}},109:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n(73),r=n.n(i);function a(t,e,n){return e in t?r()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},110:function(t,e,n){"use strict";var i=n(99),r=n.n(i);var a=n(102),o=n.n(a),s=n(106),c=n.n(s);function u(t){return function(t){if(r()(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return o()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",(function(){return u}))},111:function(t,e,n){"use strict";var i=n(34),r=n(83)(1);i(i.P+i.F*!n(84)([].map,!0),"Array",{map:function(t){return r(this,t,arguments[1])}})},147:function(t,e,n){"use strict";const i=/iPhone/i,r=/iPod/i,a=/iPad/i,o=/\bAndroid(?:.+)Mobile\b/i,s=/Android/i,c=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,u=/Silk/i,h=/Windows Phone/i,l=/\bWindows(?:.+)ARM\b/i,f=/BlackBerry/i,d=/BB10/i,p=/Opera Mini/i,v=/\b(CriOS|Chrome)(?:.+)Mobile/i,g=/Mobile(?:.+)Firefox\b/i;function b(t,e){return t.test(e)}function y(t){let e=(t=t||("undefined"!=typeof navigator?navigator.userAgent:"")).split("[FBAN");void 0!==e[1]&&(t=e[0]),void 0!==(e=t.split("Twitter"))[1]&&(t=e[0]);const n={apple:{phone:b(i,t)&&!b(h,t),ipod:b(r,t),tablet:!b(i,t)&&b(a,t)&&!b(h,t),device:(b(i,t)||b(r,t)||b(a,t))&&!b(h,t)},amazon:{phone:b(c,t),tablet:!b(c,t)&&b(u,t),device:b(c,t)||b(u,t)},android:{phone:!b(h,t)&&b(c,t)||!b(h,t)&&b(o,t),tablet:!b(h,t)&&!b(c,t)&&!b(o,t)&&(b(u,t)||b(s,t)),device:!b(h,t)&&(b(c,t)||b(u,t)||b(o,t)||b(s,t))||b(/\bokhttp\b/i,t)},windows:{phone:b(h,t),tablet:b(l,t),device:b(h,t)||b(l,t)},other:{blackberry:b(f,t),blackberry10:b(d,t),opera:b(p,t),firefox:b(g,t),chrome:b(v,t),device:b(f,t)||b(d,t)||b(p,t)||b(g,t)||b(v,t)},any:!1,phone:!1,tablet:!1};return n.any=n.apple.device||n.android.device||n.windows.device||n.other.device,n.phone=n.apple.phone||n.android.phone||n.windows.phone,n.tablet=n.apple.tablet||n.android.tablet||n.windows.tablet,n}n.d(e,"a",(function(){return y}))},184:function(t,e,n){"use strict";var i=n(34),r=n(43)(!1),a=[].indexOf,o=!!a&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(o||!n(84)(a)),"Array",{indexOf:function(t){return o?a.apply(this,arguments)||0:r(this,t,arguments[1])}})},247:function(t,e,n){},381:function(t){t.exports=JSON.parse('["Monkey D. Luffy","Roronoa Zoro","Nami","Usopp","Vinsmoke Sanji","Tony Tony Chopper","Nico Robin","Franky","Brook","Jimbei","Trafalgar Law","Sabo","ym"]')},382:function(t,e,n){"use strict";var i=n(247);n.n(i).a},480:function(t,e,n){"use strict";n.r(e);var i=n(110),r=(n(184),n(97),n(78),n(71),n(111),n(61)),a=(n(94),n(381)),o=n(147),s=a.length-1,c={name:"VirtualScroll",components:{},data:function(){return{jsonData:a,dataLastIndex:s,targetHeight:0,targetsHeight:0,accelerate:{current:0,target:0},touchPos:{startY:0,diff:0,endY:0},scroll:0,ease:.1,targets:[{dom:null,pos:0,index:0}],positions:[],listIndex:[0,1,2,3,4,5,6,7,8]}},computed:{displayList:function(){var t=this;return this.listIndex.map((function(e){return t.jsonData[e]}))}},watch:{},mounted:function(){var t=this;this.$nextTick((function(){t.init()}))},created:function(){},beforeDestroy:function(){},methods:{init:function(){this.initItemsStyle(),this.update()},initItemsStyle:function(){var t=this;this.targetHeight=this.$refs.targets[0].offsetHeight,this.targetsHeight=this.targetHeight*this.listIndex.length,this.$refs.targets.forEach((function(e,n){t.positions.push(t.targetHeight*n),r.i.set(e,{y:t.positions[n]})}))},update:function(){requestAnimationFrame(this.update),o.a.any?this.touchPosToAccelerate():this.updateAccelerate()},updateAccelerate:function(){this.accelerate.target+=(this.accelerate.current-this.accelerate.target)*this.ease,this.accelerate.target=Math.trunc(100*this.accelerate.target)/100,Math.trunc(this.accelerate.target)!==this.accelerate.current&&(this.scroll+=this.accelerate.target-this.scroll,this.moveItems())},touchPosToAccelerate:function(){this.accelerate.target+=(this.touchPos.diff-this.accelerate.target)*this.ease,this.accelerate.target=Math.trunc(100*this.accelerate.target)/100,Math.trunc(this.accelerate.target)!==this.accelerate.current&&(this.scroll+=this.accelerate.target-this.scroll,this.moveItems())},moveItems:function(){var t=this;this.$refs.targets.forEach((function(e,n){t.checkPosition(n),r.i.set(e,{y:t.positions[n]})}))},checkPosition:function(t){if(this.positions[t]<-this.targetHeight){console.log("💫 up");var e=this.positions.indexOf(Math.max.apply(null,this.positions)),n=Math.max.apply(Math,Object(i.a)(this.positions));this.positions[t]=n+this.targetHeight,this.listIndex[e]===this.dataLastIndex?this.$set(this.listIndex,t,0):this.$set(this.listIndex,t,this.listIndex[e]+1)}else if(this.positions[t]>this.targetHeight*this.positions.length){console.log("💫 down");var r=this.positions.indexOf(Math.min.apply(null,this.positions)),a=Math.min.apply(Math,Object(i.a)(this.positions));this.positions[t]=a-this.targetHeight,0===this.listIndex[r]?this.$set(this.listIndex,t,this.dataLastIndex):this.$set(this.listIndex,t,this.listIndex[r]-1)}this.positions[t]+=this.scroll/5},wheelHandle:function(t){var e=t.wheelDelta||-t.deltaY||-t.detail,n=Math.trunc(10*e)/10;Math.abs(n)>1&&(this.accelerate.current=n);Math.max(-1,Math.min(1,n))},touchStartHandle:function(t){console.log("touchStartHandle"),this.touchPos.startY=t.changedTouches[0].screenY},touchMoveHandle:function(t){this.touchPos.endY=t.changedTouches[0].screenY,this.touchPos.diff=this.touchPos.endY-this.touchPos.startY},touchEndHandle:function(t){console.log("touchEndHandle"),this.touchPos.endY=t.changedTouches[0].screenY,this.touchPos.startY=0,this.touchPos.diff=0,this.touchPos.endY,this.touchPos.startY,this.touchPos.endY,this.touchPos.startY}}},u=(n(382),n(2)),h=Object(u.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{ref:"wrap",staticClass:"virtual-scroll",attrs:{id:"js-wrap"},on:{wheel:t.wheelHandle,touchstart:t.touchStartHandle,touchmove:t.touchMoveHandle,touchend:t.touchEndHandle}},[n("div",{staticClass:"vs__inner"},t._l(t.displayList,(function(e,i){return n("div",{key:"target"+i,ref:"targets",refInFor:!0,staticClass:"vs__target"},[n("div",{staticClass:"target__inner",domProps:{innerHTML:t._s(e)}})])})),0),t._v(" "),t._e()])}),[],!1,null,"4b353cf1",null);e.default=h.exports},64:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return i}))},65:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var i=n(73),r=n.n(i);function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),r()(t,i.key,i)}}function o(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}},71:function(t,e,n){"use strict";var i=n(34),r=n(83)(0),a=n(84)([].forEach,!0);i(i.P+i.F*!a,"Array",{forEach:function(t){return r(this,t,arguments[1])}})},73:function(t,e,n){t.exports=n(81)},81:function(t,e,n){n(82);var i=n(62).Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},82:function(t,e,n){var i=n(70);i(i.S+i.F*!n(63),"Object",{defineProperty:n(66).f})},94:function(t,e,n){"use strict";n(95),n(97);var i=n(64),r=n(65),a=n(109),o=function(){function t(){Object(i.a)(this,t)}return Object(r.a)(t,null,[{key:"rotateX",value:function(t,e){var n=Math.cos(e),i=Math.sin(e),r=t.y*n-t.z*i,a=t.z*n+t.y*i;t.y=r,t.z=a}},{key:"rotateY",value:function(t,e){var n=Math.cos(e),i=Math.sin(e),r=t.x*n-t.z*i,a=t.z*n+t.x*i;t.x=r,t.z=a}},{key:"rotateZ",value:function(t,e){var n=Math.cos(e),i=Math.sin(e),r=t.x*n-t.y*i,a=t.y*n+t.x*i;t.x=r,t.y=a}},{key:"orgTrunc",value:function(t,e){return Math.trunc(t*e)/e}}]),t}();Object(a.a)(o,"map",(function(t,e,n,i,r){return t<=e?i:t>=n?r:(r-i)/(n-e)*(t-e)+i})),Object(a.a)(o,"lerp",(function(t,e,n){return t+(e-t)*n})),Object(a.a)(o,"norm",(function(t,e,n){return(n-t)/(e-t)})),Object(a.a)(o,"distance",(function(t,e,n,i){return Math.hypot(n-t,i-e)})),Object(a.a)(o,"angleToRadian",(function(t){return t*Math.PI/180})),Object(a.a)(o,"radianToAngle",(function(t){return 180*t/Math.PI})),Object(a.a)(o,"getRadian",(function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return Math.atan2(e-i,t-n)})),Object(a.a)(o,"random",(function(t,e){return Math.random()*(e-t)+t})),Object(a.a)(o,"randomInt",(function(t,e){return Math.trunc(Math.random()*(e-t+1))+t})),Object(a.a)(o,"randomArr",(function(t){return t[o.randomInt(0,t.length-1)]})),Object(a.a)(o,"rangeBoolean",(function(t){return 0===o.randomInt(0,t-1)})),Object(a.a)(o,"aperture",(function(t,e,n){return(n-(e-t))/t})),Object(a.a)(o,"rotate2d",(function(t,e,n,i,r){var a=Math.PI/180*r,o=Math.cos(a),s=Math.sin(a);return[o*(n-t)+s*(i-e)+t,o*(i-e)-s*(n-t)+e]})),e.a=o},95:function(t,e,n){var i=n(34),r=Math.abs;i(i.S,"Math",{hypot:function(t,e){for(var n,i,a=0,o=0,s=arguments.length,c=0;o<s;)c<(n=r(arguments[o++]))?(a=a*(i=c/n)*i+1,c=n):a+=n>0?(i=n/c)*i:n;return c===1/0?1/0:c*Math.sqrt(a)}})},97:function(t,e,n){var i=n(34);i(i.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},99:function(t,e,n){t.exports=n(100)}}]);