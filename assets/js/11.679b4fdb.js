(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{322:function(e,t,i){"use strict";i(104),i(105);var s=i(20),n=i(29),r=function(){function e(t,i,n){Object(s.a)(this,e),this.target=t,this.eventType=i,this.listen(n)}return Object(n.a)(e,[{key:"listen",value:function(e){this._eventRemovers||(this._eventRemovers=[]),this.target.addEventListener(this.eventType,e);var t=this;this._eventRemovers.push({remove:function(){t.target.removeEventListener(t.eventType,e)}})}},{key:"destroy",value:function(){this._eventRemovers&&(this._eventRemovers.forEach((function(e){e.remove()})),console.log("destroy",this.target,this.eventType))}}]),e}();t.a=r},336:function(e,t,i){"use strict";i.d(t,"a",(function(){return r}));var s=i(320),n=i(321),r=(s.C.registerPlugin(n.a)||s.C).core.Tween},339:function(e,t,i){i(2)({target:"Function",proto:!0},{bind:i(179)})},341:function(e,t,i){var s=i(2),n=i(5),r=i(107),l=[].slice,a=function(e){return function(t,i){var s=arguments.length>2,n=s?l.call(arguments,2):void 0;return e(s?function(){("function"==typeof t?t:Function(t)).apply(this,n)}:t,i)}};s({global:!0,bind:!0,forced:/MSIE .\./.test(r)},{setTimeout:a(n.setTimeout),setInterval:a(n.setInterval)})},348:function(e,t,i){"use strict";i(178),i(104),i(349),i(76),i(339),i(105),i(341);var s=i(36),n=i(20),r=i(29),l=i(342),a=i(336),o=i(320),u=i(322),h="\n\n  // 頂点は一括で指定する\n\n  varying vec2 vUv;\n  void main() {\n    vUv = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n  }\n",c="\n  varying vec2 vUv;\n\n  // images\n  uniform sampler2D texture1;\n  uniform sampler2D texture2;\n  uniform sampler2D disp;\n\n  uniform float dispPower; // 0 ~ 1\n  uniform float intensity;\n\n  void main() {\n    vec2 uv = vUv;\n\n    vec4 disp = texture2D(disp, uv);\n    vec2 dispVec = vec2(disp.x, disp.y);\n\n    // naname 1\n    vec2 distPos1 = uv + (dispVec * intensity * dispPower);\n    vec2 distPos2 = uv + (dispVec * -(intensity * (1.0 - dispPower)));\n\n    vec4 _texture1 = texture2D(texture1, distPos1);\n    vec4 _texture2 = texture2D(texture2, distPos2);\n\n    gl_FragColor = mix(_texture1, _texture2, dispPower);\n  }\n  ",d=function(){function e(t,i){var r=i.images,l=i.texture,a=i.deep,o=i.speed,u=i.fragment;return Object(n.a)(this,e),this.bindAll(["render","nextSlide","timer"]),this.vertex=h,this.fragment=u||c,this.el=t,this.inner=this.el.querySelector(".js-slider__inner"),this.bullets=Object(s.a)(this.el.querySelectorAll(".js-slider-bullet")),this.renderer=null,this.scene=null,this.clock=null,this.camera=null,this.geometry=null,this.material=null,this.mesh=null,this.bg=null,this.timerId=0,this.images=r,this.texture=l,this.counter={current:0,prev:this.images.length-1,next:1,total:this.images.length-1},this.state={animating:!1,initial:!0},this.effect={deep:a||.5,speed:o||2.5},this.eventList=[],this.init(),this}return Object(r.a)(e,[{key:"bindAll",value:function(e){var t=this;e.forEach((function(e){return t[e]=t[e].bind(t)}))}},{key:"setStyles",value:function(){this.bullets.forEach((function(e,t){if(0!==t){var i=e.querySelector(".js-slider-bullet__text"),s=e.querySelector(".js-slider-bullet__line");a.a.set(i,{alpha:.25}),a.a.set(s,{scaleX:0,transformOrigin:"left"})}}))}},{key:"cameraSetup",value:function(){this.camera=new l.OrthographicCamera(this.el.offsetWidth/-2,this.el.offsetWidth/2,this.el.offsetHeight/2,this.el.offsetHeight/-2,1,1e3),this.camera.lookAt(this.scene.position),this.camera.position.z=1}},{key:"setup",value:function(){this.scene=new l.Scene,this.clock=new l.Clock(!0),this.renderer=new l.WebGLRenderer({alpha:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(this.el.offsetWidth,this.el.offsetHeight),this.inner.appendChild(this.renderer.domElement)}},{key:"loadTextures",value:function(){var e=this,t=new l.TextureLoader;t.crossOrigin="",this.bg=[],this.images.forEach((function(i){var s=t.load("".concat(i,"?v=").concat(Date.now()),e.render);s.wrapS=l.ClampToEdgeWrapping,s.wrapT=l.ClampToEdgeWrapping,s.minFilter=l.LinearFilter,e.bg.push(s)})),this.disp=t.load(this.texture,this.render),this.disp.magFilter=this.disp.minFilter=l.LinearFilter,this.disp.wrapS=this.disp.wrapT=l.RepeatWrapping}},{key:"createMesh",value:function(){this.material=new l.ShaderMaterial({uniforms:{dispPower:{type:"f",value:0},intensity:{type:"f",value:this.effect.deep},texture1:{type:"t",value:this.bg[0]},texture2:{type:"t",value:this.bg[1]},disp:{type:"t",value:this.disp}},transparent:!0,vertexShader:this.vertex,fragmentShader:this.fragment}),this.geometry=new l.PlaneBufferGeometry(this.el.offsetWidth,this.el.offsetHeight,1),this.mesh=new l.Mesh(this.geometry,this.material),this.scene.add(this.mesh)}},{key:"transitionPrev",value:function(){}},{key:"transitionNext",value:function(){var e=this;a.a.to(this.material.uniforms.dispPower,this.effect.speed,{value:1,ease:"Expo.easeInOut",onUpdate:this.render,onComplete:function(){e.material.uniforms.dispPower.value=0,e.changeTexture(),e.state.animating=!1}}),this.updateControler("next")}},{key:"updateControler",value:function(e){var t=new o.f({paused:!0}),i=this.bullets[this.counter.current],s="next"===e?this.bullets[this.counter.next]:this.bullets[this.counter.prev],n=i.querySelectorAll(".js-slider-bullet__text"),r=s.querySelectorAll(".js-slider-bullet__text"),l=i.querySelectorAll(".js-slider-bullet__line"),a=s.querySelectorAll(".js-slider-bullet__line");t.to(n,1,{alpha:.25,ease:"Linear.easeNone"},0).set(l,{transformOrigin:"right"},0).to(l,1,{scaleX:0,ease:"Expo.easeInOut"},0),t.to(r,1,{alpha:1,ease:"Linear.easeNone"},1).set(a,{transformOrigin:"left"},1).to(a,1,{scaleX:1,ease:"Expo.easeInOut"},1),t.play()}},{key:"prevSlide",value:function(){this.state.animating||(this.state.animating=!0,this.transitionPrev(),this.counter.current=this.counter.current===this.counter.total?0:this.counter.current-1,this.counter.prev=this.counter.current===this.counter.total?0:this.counter.current-1)}},{key:"nextSlide",value:function(){this.state.animating||(this.state.animating=!0,this.transitionNext(),this.counter.current=this.counter.current===this.counter.total?0:this.counter.current+1,this.counter.next=this.counter.current===this.counter.total?0:this.counter.current+1)}},{key:"changeTexture",value:function(){this.material.uniforms.texture1.value=this.bg[this.counter.current],this.material.uniforms.texture2.value=this.bg[this.counter.next]}},{key:"listeners",value:function(){this.eventList.push(new u.a(window,"wheel",this.nextSlide))}},{key:"timer",value:function(){this.timerId=setInterval(this.nextSlide,3e3)}},{key:"render",value:function(){this.renderer.render(this.scene,this.camera)}},{key:"init",value:function(){this.setup(),this.cameraSetup(),this.loadTextures(),this.createMesh(),this.setStyles(),this.render(),this.listeners(),this.timer()}},{key:"destroy",value:function(){clearInterval(this.timerId),this.eventList.forEach((function(e){return e.destroy()})),this.scene.remove(this.mesh),this.geometry.dispose(),this.material.dispose(),this.renderer.domElement=null}}]),e}();t.a=d},349:function(e,t,i){i(2)({target:"Date",stat:!0},{now:function(){return(new Date).getTime()}})},373:function(e,t,i){},459:function(e,t,i){"use strict";var s=i(373);i.n(s).a},590:function(e,t,i){"use strict";i.r(t);var s=i(348),n={name:"DistortionSliderA",data:function(){return{distortionSlider:{}}},mounted:function(){this.distortionSlider=new s.a(this.$refs.slider,{images:["https://images.unsplash.com/photo-1548112129-b5cf67e9558d","https://images.unsplash.com/photo-1548106755-5c6bf746ca84","https://images.unsplash.com/photo-1547962041-6d2d7c4bdf6e"],texture:"/images/texture/01.png",deep:10})},destroyed:function(){this.distortionSlider.destroy(),this.distortionSlider=null}},r=(i(459),i(28)),l=Object(r.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"wrap"},[t("div",{ref:"slider",staticClass:"slider js-slider"},[t("div",{staticClass:"slider__inner js-slider__inner"}),this._v(" "),this._m(0)])])}),[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("nav",{staticClass:"slider__nav js-slider__nav"},[i("div",{staticClass:"slider-bullet js-slider-bullet"},[i("span",{staticClass:"slider-bullet__text js-slider-bullet__text"},[e._v("01")]),e._v(" "),i("span",{staticClass:"slider-bullet__line js-slider-bullet__line"})]),e._v(" "),i("div",{staticClass:"slider-bullet js-slider-bullet"},[i("span",{staticClass:"slider-bullet__text js-slider-bullet__text"},[e._v("02")]),e._v(" "),i("span",{staticClass:"slider-bullet__line js-slider-bullet__line"})]),e._v(" "),i("div",{staticClass:"slider-bullet js-slider-bullet"},[i("span",{staticClass:"slider-bullet__text js-slider-bullet__text"},[e._v("03")]),e._v(" "),i("span",{staticClass:"slider-bullet__line js-slider-bullet__line"})])])}],!1,null,"3051a849",null);t.default=l.exports}}]);