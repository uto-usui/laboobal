(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{328:function(t,n,i){"use strict";i(74),i(329),i(330);var e=i(19),a=i(29),r=i(331),s=function(){function t(){Object(e.a)(this,t)}return Object(a.a)(t,null,[{key:"rotateX",value:function(t,n){var i=Math.cos(n),e=Math.sin(n),a=t.y*i-t.z*e,r=t.z*i+t.y*e;t.y=a,t.z=r}},{key:"rotateY",value:function(t,n){var i=Math.cos(n),e=Math.sin(n),a=t.x*i-t.z*e,r=t.z*i+t.x*e;t.x=a,t.z=r}},{key:"rotateZ",value:function(t,n){var i=Math.cos(n),e=Math.sin(n),a=t.x*i-t.y*e,r=t.y*i+t.x*e;t.x=a,t.y=r}},{key:"orgTrunc",value:function(t,n){return Math.trunc(t*n)/n}}]),t}();Object(r.a)(s,"map",(function(t,n,i,e,a){return t<=n?e:t>=i?a:(a-e)/(i-n)*(t-n)+e})),Object(r.a)(s,"map3",(function(t,n,i){var e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;return Math.pow(s.map(t,n,i,-1,1),2)*e+a})),Object(r.a)(s,"lerp",(function(t,n,i){return t+(n-t)*i})),Object(r.a)(s,"norm",(function(t,n,i){return(i-t)/(n-t)})),Object(r.a)(s,"distance",(function(t,n,i,e){return Math.hypot(i-t,e-n)})),Object(r.a)(s,"angleToRadian",(function(t){return t*Math.PI/180})),Object(r.a)(s,"radianToAngle",(function(t){return 180*t/Math.PI})),Object(r.a)(s,"getRadian",(function(t,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;return Math.atan2(n-e,t-i)})),Object(r.a)(s,"random",(function(t,n){return Math.random()*(n-t)+t})),Object(r.a)(s,"randomInt",(function(t,n){return Math.trunc(Math.random()*(n-t+1))+t})),Object(r.a)(s,"randomArr",(function(t){return t[s.randomInt(0,t.length-1)]})),Object(r.a)(s,"rangeBoolean",(function(t){return 0===s.randomInt(0,t-1)})),Object(r.a)(s,"aperture",(function(t,n,i){return(i-(n-t))/t})),Object(r.a)(s,"rotate2d",(function(t,n,i,e,a){var r=Math.PI/180*a,s=Math.cos(r),h=Math.sin(r);return[s*(i-t)+h*(e-n)+t,s*(e-n)-h*(i-t)+n]})),n.a=s},329:function(t,n,i){var e=i(2),a=Math.hypot,r=Math.abs,s=Math.sqrt;e({target:"Math",stat:!0,forced:!!a&&a(1/0,NaN)!==1/0},{hypot:function(t,n){for(var i,e,a=0,h=0,o=arguments.length,c=0;h<o;)c<(i=r(arguments[h++]))?(a=a*(e=c/i)*e+1,c=i):a+=i>0?(e=i/c)*e:i;return c===1/0?1/0:c*s(a)}})},330:function(t,n,i){var e=i(2),a=Math.ceil,r=Math.floor;e({target:"Math",stat:!0},{trunc:function(t){return(t>0?r:a)(t)}})},331:function(t,n,i){"use strict";i.d(n,"a",(function(){return e}));i(107);function e(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}},332:function(t,n,i){"use strict";i.d(n,"a",(function(){return r}));i(105),i(106);var e=i(19),a=i(29),r=function(){function t(n,i,a){Object(e.a)(this,t),this.target=n,this.eventType=i,this.listen(a)}return Object(a.a)(t,[{key:"listen",value:function(t){this._eventRemovers||(this._eventRemovers=[]),this.target.addEventListener(this.eventType,t);var n=this;this._eventRemovers.push({remove:function(){n.target.removeEventListener(n.eventType,t)}})}},{key:"destroy",value:function(){this._eventRemovers&&(this._eventRemovers.forEach((function(t){t.remove()})),console.log("destroy",this.target,this.eventType))}}]),t}();n.b=r},345:function(t,n,i){i(2)({target:"Function",proto:!0},{bind:i(181)})},398:function(t,n,i){},484:function(t,n,i){"use strict";i(398)},573:function(t,n,i){"use strict";i.r(n);i(180),i(105),i(345),i(330),i(106),i(59),i(60),i(84),i(110),i(11),i(33),i(39);var e=i(70);function a(t,n){var i;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(i=Object(e.a)(t))||n&&t&&"number"==typeof t.length){i&&(t=i);var a=0,r=function(){};return{s:r,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,h=!0,o=!1;return{s:function(){i=t[Symbol.iterator]()},n:function(){var t=i.next();return h=t.done,t},e:function(t){o=!0,s=t},f:function(){try{h||null==i.return||i.return()}finally{if(o)throw s}}}}var r=i(19),s=i(29),h=i(332),o=i(328),c=function(){function t(n,i,e){Object(r.a)(this,t),this.x=n,this.y=i,this.r=1,this.ctx=e,this.isGrowing=!0,this.color="hsla(".concat(170+Math.trunc(o.a.random(-15,15)),", ").concat(70+Math.trunc(o.a.random(-50,20)),"%, 55%, 1)")}return Object(s.a)(t,[{key:"growing",value:function(){this.isGrowing&&this.r++}},{key:"show",value:function(){this.ctx.beginPath(),this.ctx.strokeStyle=this.color,this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI),this.ctx.stroke(),this.ctx.closePath()}}]),t}(),u=function(){function t(n){var i=n.wrap,e=n.canvas;Object(r.a)(this,t),this.canvas=e,this.ctx=this.canvas.getContext("2d"),this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this.wrap=i||window,this.width=this.wrap===window?window.innerWidth:this.wrap.offsetWidth,this.height=this.wrap===window?window.innerHeight:this.wrap.offsetHeight,this.canvas.style.width=this.width+"px",this.canvas.style.height=this.height+"px",this.canvas.setAttribute("height",this.height),this.canvas.setAttribute("width",this.width),this._canvas.style.width=this.width+"px",this._canvas.style.height=this.height+"px",this._canvas.setAttribute("height",this.height),this._canvas.setAttribute("width",this.width),this._ctx.textAlign="center",this._ctx.textBaseline="middle",this.quality=10,this.words=["A","B","C","D","E","F"],this.eventList=[],this.eventList.push(new h.a(this.wrap,"click",this.replay.bind(this))),this.animationId=0,this.replay()}return Object(s.a)(t,[{key:"replay",value:function(){this.drawNext=!0,this.animationId&&window.cancelAnimationFrame(this.animationId),this._ctx.clearRect(0,0,this.width,this.height),this.ctx.clearRect(0,0,this.width,this.height);var t=o.a.randomArr(this.words);this._ctx.font="normal 900 ".concat(this.width/t.length+2,"px sans-serif"),this._ctx.fillText(t,this.width/2,this.height/2),this.possibleSpots=[],this.circles=[];for(var n=0;n<this._canvas.width;n+=10)for(var i=0;i<this._canvas.height;i+=10){var e=this._ctx.getImageData(n,i,1,1).data;if(e[0]>0||e[1]>0||e[2]>0||e[3]>0){this.possibleSpots.push({x:n,y:i});for(var a=0;a<10;a++)for(var r=0;r<10;r++)this.possibleSpots.push({x:n+a,y:i+r})}}this._ctx.clearRect(0,0,this.width,this.height),this.counter=0,this.loop()}},{key:"loop",value:function(){this.ctx.clearRect(0,0,this.width,this.height),this.counter++;for(var t=0;t<this.quality;t++)this.newCircle();var n,i=a(this.circles);try{for(i.s();!(n=i.n()).done;){var e,r=n.value,s=a(this.circles);try{for(s.s();!(e=s.n()).done;){var h=e.value;if(r!==h&&o.a.distance(r.x,r.y,h.x,h.y)<r.r+h.r){r.isGrowing=!1;break}}}catch(t){s.e(t)}finally{s.f()}r.show(),r.growing()}}catch(t){i.e(t)}finally{i.f()}this.drawNext&&(this.animationId=window.requestAnimationFrame(this.loop.bind(this)))}},{key:"newCircle",value:function(){var t,n=o.a.randomArr(this.possibleSpots),i=!0,e=a(this.circles);try{for(e.s();!(t=e.n()).done;){var r=t.value;if(o.a.distance(r.x,r.y,n.x,n.y)<=r.r){i=!1;break}}}catch(t){e.e(t)}finally{e.f()}i&&this.circles.push(new c(n.x,n.y,this.ctx))}},{key:"destroy",value:function(){window.cancelAnimationFrame(this.animationId),this.eventList.forEach((function(t){return t.destroy()})),this.canvas=null,this._canvas=null,this.ctx=null,this._ctx=null}}]),t}(),l={name:"FillText",data:function(){return{FillText:null}},mounted:function(){this.FillText=new u({wrap:this.$refs.wrap,canvas:this.$refs.canvas})},beforeDestroy:function(){this.FillText&&(this.FillText.destroy(),this.FillText=null)}},f=(i(484),i(28)),v=Object(f.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{ref:"wrap",staticClass:"wrap"},[n("canvas",{ref:"canvas",staticClass:"canvas"})])}),[],!1,null,"e5ae9462",null);n.default=v.exports}}]);