(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{111:function(t,n,r){var e=r(145),o=r(116);t.exports=function(t){return e(o(t))}},114:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},115:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},116:function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},117:function(t,n,r){var e=r(124)("keys"),o=r(122);t.exports=function(t){return e[t]||(e[t]=o(t))}},121:function(t,n){t.exports=!0},122:function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},123:function(t,n,r){var e=r(73).f,o=r(80),i=r(77)("toStringTag");t.exports=function(t,n,r){t&&!o(t=r?t:t.prototype,i)&&e(t,i,{configurable:!0,value:n})}},124:function(t,n,r){var e=r(69),o=r(68),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:e.version,mode:r(121)?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},125:function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},126:function(t,n,r){"use strict";var e=r(121),o=r(82),i=r(136),u=r(76),c=r(99),s=r(143),a=r(123),f=r(139),p=r(77)("iterator"),l=!([].keys&&"next"in[].keys()),v=function(){return this};t.exports=function(t,n,r,h,y,d,x){s(r,n,h);var g,m,w,b=function(t){if(!l&&t in L)return L[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},S=n+" Iterator",_="values"==y,O=!1,L=t.prototype,j=L[p]||L["@@iterator"]||y&&L[y],T=j||b(y),P=y?_?b("entries"):T:void 0,k="Array"==n&&L.entries||j;if(k&&(w=f(k.call(new t)))!==Object.prototype&&w.next&&(a(w,S,!0),e||"function"==typeof w[p]||u(w,p,v)),_&&j&&"values"!==j.name&&(O=!0,T=function(){return j.call(this)}),e&&!x||!l&&!O&&L[p]||u(L,p,T),c[n]=T,c[S]=v,y)if(g={values:_?T:b("values"),keys:d?T:b("keys"),entries:P},x)for(m in g)m in L||i(L,m,g[m]);else o(o.P+o.F*(l||O),n,g);return g}},127:function(t,n,r){var e=r(116);t.exports=function(t){return Object(e(t))}},129:function(t,n,r){var e=r(78),o=r(144),i=r(125),u=r(117)("IE_PROTO"),c=function(){},s=function(){var t,n=r(93)("iframe"),e=i.length;for(n.style.display="none",r(138).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),s=t.F;e--;)delete s.prototype[i[e]];return s()};t.exports=Object.create||function(t,n){var r;return null!==t?(c.prototype=e(t),r=new c,c.prototype=null,r[u]=t):r=s(),void 0===n?r:o(r,n)}},130:function(t,n,r){var e=r(137),o=r(125);t.exports=Object.keys||function(t){return e(t,o)}},131:function(t,n,r){var e=r(115),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},132:function(t,n,r){var e=r(114),o=r(77)("toStringTag"),i="Arguments"==e(function(){return arguments}());t.exports=function(t){var n,r,u;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,n){try{return t[n]}catch(t){}}(n=Object(t),o))?r:i?e(n):"Object"==(u=e(n))&&"function"==typeof n.callee?"Arguments":u}},136:function(t,n,r){t.exports=r(76)},137:function(t,n,r){var e=r(80),o=r(111),i=r(146)(!1),u=r(117)("IE_PROTO");t.exports=function(t,n){var r,c=o(t),s=0,a=[];for(r in c)r!=u&&e(c,r)&&a.push(r);for(;n.length>s;)e(c,r=n[s++])&&(~i(a,r)||a.push(r));return a}},138:function(t,n,r){var e=r(68).document;t.exports=e&&e.documentElement},139:function(t,n,r){var e=r(80),o=r(127),i=r(117)("IE_PROTO"),u=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=o(t),e(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},141:function(t,n,r){"use strict";var e=r(142)(!0);r(126)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,n=this._t,r=this._i;return r>=n.length?{value:void 0,done:!0}:(t=e(n,r),this._i+=t.length,{value:t,done:!1})}))},142:function(t,n,r){var e=r(115),o=r(116);t.exports=function(t){return function(n,r){var i,u,c=String(o(n)),s=e(r),a=c.length;return s<0||s>=a?t?"":void 0:(i=c.charCodeAt(s))<55296||i>56319||s+1===a||(u=c.charCodeAt(s+1))<56320||u>57343?t?c.charAt(s):i:t?c.slice(s,s+2):u-56320+(i-55296<<10)+65536}}},143:function(t,n,r){"use strict";var e=r(129),o=r(88),i=r(123),u={};r(76)(u,r(77)("iterator"),(function(){return this})),t.exports=function(t,n,r){t.prototype=e(u,{next:o(1,r)}),i(t,n+" Iterator")}},144:function(t,n,r){var e=r(73),o=r(78),i=r(130);t.exports=r(66)?Object.defineProperties:function(t,n){o(t);for(var r,u=i(n),c=u.length,s=0;c>s;)e.f(t,r=u[s++],n[r]);return t}},145:function(t,n,r){var e=r(114);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},146:function(t,n,r){var e=r(111),o=r(131),i=r(147);t.exports=function(t){return function(n,r,u){var c,s=e(n),a=o(s.length),f=i(u,a);if(t&&r!=r){for(;a>f;)if((c=s[f++])!=c)return!0}else for(;a>f;f++)if((t||f in s)&&s[f]===r)return t||f||0;return!t&&-1}}},147:function(t,n,r){var e=r(115),o=Math.max,i=Math.min;t.exports=function(t,n){return(t=e(t))<0?o(t+n,0):i(t,n)}},148:function(t,n,r){"use strict";var e=r(149),o=r(150),i=r(99),u=r(111);t.exports=r(126)(Array,"Array",(function(t,n){this._t=u(t),this._i=0,this._k=n}),(function(){var t=this._t,n=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,o(1)):o(0,"keys"==n?r:"values"==n?t[r]:[r,t[r]])}),"values"),i.Arguments=i.Array,e("keys"),e("values"),e("entries")},149:function(t,n){t.exports=function(){}},150:function(t,n){t.exports=function(t,n){return{value:n,done:!!t}}},153:function(t,n,r){r(148);for(var e=r(68),o=r(76),i=r(99),u=r(77)("toStringTag"),c="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),s=0;s<c.length;s++){var a=c[s],f=e[a],p=f&&f.prototype;p&&!p[u]&&o(p,u,a),i[a]=i.Array}},155:function(t,n,r){var e=r(78);t.exports=function(t,n,r,o){try{return o?n(e(r)[0],r[1]):n(r)}catch(n){var i=t.return;throw void 0!==i&&e(i.call(t)),n}}},156:function(t,n,r){var e=r(99),o=r(77)("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(e.Array===t||i[o]===t)}},157:function(t,n,r){var e=r(132),o=r(77)("iterator"),i=r(99);t.exports=r(69).getIteratorMethod=function(t){if(null!=t)return t[o]||t["@@iterator"]||i[e(t)]}},158:function(t,n,r){var e=r(77)("iterator"),o=!1;try{var i=[7][e]();i.return=function(){o=!0},Array.from(i,(function(){throw 2}))}catch(t){}t.exports=function(t,n){if(!n&&!o)return!1;var r=!1;try{var i=[7],u=i[e]();u.next=function(){return{done:r=!0}},i[e]=function(){return u},t(i)}catch(t){}return r}},224:function(t,n,r){},380:function(t,n,r){"use strict";var e=r(224);r.n(e).a},428:function(t,n,r){"use strict";r.r(n);r(159);var e,o=r(160),i={name:"ThreeVideo",data:function(){return{video:null}},watch:{},mounted:(e=Object(o.a)(regeneratorRuntime.mark((function t(){var n,e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([r.e(3),r.e(37)]).then(r.bind(null,387));case 2:n=t.sent,e=n.VideoScript,this.video=new e({wrap:this.$refs.canvas,video:this.$refs.video});case 5:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)}),beforeDestroy:function(){this.video&&this.video.destroy()},methods:{}},u=(r(380),r(2)),c=Object(u.a)(i,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{ref:"wrap",staticClass:"wrap"},[n("video",{ref:"video",staticClass:"video",staticStyle:{display:"none",position:"absolute",left:"15px",top:"75px"},attrs:{src:"/video/sky.mp4",controls:"false",autoplay:"",loop:"",playsinline:""}}),this._v(" "),n("div",{ref:"canvas",staticClass:"canvas",attrs:{id:"canvas"}})])}),[],!1,null,"a135a15e",null);n.default=c.exports},66:function(t,n,r){t.exports=!r(79)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},68:function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},69:function(t,n){var r=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=r)},70:function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},73:function(t,n,r){var e=r(78),o=r(98),i=r(96),u=Object.defineProperty;n.f=r(66)?Object.defineProperty:function(t,n,r){if(e(t),n=i(n,!0),e(r),o)try{return u(t,n,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},76:function(t,n,r){var e=r(73),o=r(88);t.exports=r(66)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},77:function(t,n,r){var e=r(124)("wks"),o=r(122),i=r(68).Symbol,u="function"==typeof i;(t.exports=function(t){return e[t]||(e[t]=u&&i[t]||(u?i:o)("Symbol."+t))}).store=e},78:function(t,n,r){var e=r(70);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},79:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},80:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},82:function(t,n,r){var e=r(68),o=r(69),i=r(92),u=r(76),c=r(80),s=function(t,n,r){var a,f,p,l=t&s.F,v=t&s.G,h=t&s.S,y=t&s.P,d=t&s.B,x=t&s.W,g=v?o:o[n]||(o[n]={}),m=g.prototype,w=v?e:h?e[n]:(e[n]||{}).prototype;for(a in v&&(r=n),r)(f=!l&&w&&void 0!==w[a])&&c(g,a)||(p=f?w[a]:r[a],g[a]=v&&"function"!=typeof w[a]?r[a]:d&&f?i(p,e):x&&w[a]==p?function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(p):y&&"function"==typeof p?i(Function.call,p):p,y&&((g.virtual||(g.virtual={}))[a]=p,t&s.R&&m&&!m[a]&&u(m,a,p)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,t.exports=s},88:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},92:function(t,n,r){var e=r(94);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},93:function(t,n,r){var e=r(70),o=r(68).document,i=e(o)&&e(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},94:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},96:function(t,n,r){var e=r(70);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},98:function(t,n,r){t.exports=!r(66)&&!r(79)((function(){return 7!=Object.defineProperty(r(93)("div"),"a",{get:function(){return 7}}).a}))},99:function(t,n){t.exports={}}}]);