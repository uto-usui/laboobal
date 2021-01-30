(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{650:function(t,i,e){"use strict";e.r(i);e(179),e(526),e(77),e(341),e(85),e(11),e(528),e(533),e(535),e(536),e(537),e(538),e(539),e(540),e(541),e(542),e(543),e(544),e(545),e(547),e(548),e(549),e(550),e(551),e(552),e(553),e(554),e(555),e(556),e(557);var s=e(20),h=e(29);e.d(i,"Fake3d",(function(){return r}));var r=function(){function t(){Object(s.a)(this,t),this.container=document.getElementById("gl"),this.canvas=document.createElement("canvas"),this.container.appendChild(this.canvas),this.gl=this.canvas.getContext("webgl"),this.ratio=window.devicePixelRatio,this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.mouseX=0,this.mouseY=0,this.mouseTargetX=0,this.mouseTargetY=0,this.imageOriginal=this.container.getAttribute("data-imageOriginal"),this.imageDepth=this.container.getAttribute("data-imageDepth"),this.vth=this.container.getAttribute("data-verticalThreshold"),this.hth=this.container.getAttribute("data-horizontalThreshold"),this.imageURLs=[this.imageOriginal,this.imageDepth],this.textures=[],this.startTime=(new Date).getTime(),this.createScene(),this.addTexture(),this.mouseMove(),this.gyro()}return Object(h.a)(t,[{key:"addShader",value:function(t,i){var e=this.gl.createShader(i);if(this.gl.shaderSource(e,t),this.gl.compileShader(e),!this.gl.getShaderParameter(e,this.gl.COMPILE_STATUS))throw new Error("Shader compile error: "+this.gl.getShaderInfoLog(e));this.gl.attachShader(this.program,e)}},{key:"resizeHandler",value:function(){var t,i;this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,this.width=this.container.offsetWidth,this.height=this.container.offsetHeight,this.canvas.width=this.width*this.ratio,this.canvas.height=this.height*this.ratio,this.canvas.style.width=this.width+"px",this.canvas.style.height=this.height+"px",this.height/this.width<this.imageAspect?(t=1,i=this.height/this.width/this.imageAspect):(t=this.width/this.height*this.imageAspect,i=1),this.uResolution.set(this.width,this.height,t,i),this.uRatio.set(1/this.ratio),this.uThreshold.set(this.hth,this.vth),this.gl.viewport(0,0,this.width*this.ratio,this.height*this.ratio)}},{key:"resize",value:function(){this.resizeHandler(),window.addEventListener("resize",this.resizeHandler.bind(this))}},{key:"createScene",value:function(){this.program=this.gl.createProgram(),this.addShader("#define GLSLIFY 1\nattribute vec2 a_position;\n\nvoid main() {\n  gl_Position = vec4( a_position, 0, 1 );\n}",this.gl.VERTEX_SHADER),this.addShader("#ifdef GL_ES\n  precision mediump float;\n#define GLSLIFY 1\n#endif\n\nuniform vec4 resolution;\nuniform vec2 mouse;\nuniform vec2 threshold;\nuniform float time;\nuniform float pixelRatio;\nuniform sampler2D image0;\nuniform sampler2D image1;\n\nvec2 mirrored(vec2 v) {\n  vec2 m = mod(v,2.);\n  return mix(m,2.0 - m, step(1.0 ,m));\n}\n\nvoid main() {\n  // uvs and textures\n  vec2 uv = pixelRatio*gl_FragCoord.xy / resolution.xy ;\n  vec2 vUv = (uv - vec2(0.5))*resolution.zw + vec2(0.5);\n  vUv.y = 1. - vUv.y;\n  vec4 tex1 = texture2D(image1,mirrored(vUv));\n  vec2 fake3d = vec2(vUv.x + (tex1.r - 0.5)*mouse.x/threshold.x, vUv.y + (tex1.r - 0.5)*mouse.y/threshold.y);\n  gl_FragColor = texture2D(image0,mirrored(fake3d));\n}",this.gl.FRAGMENT_SHADER),this.gl.linkProgram(this.program),this.gl.useProgram(this.program),this.uResolution=new a("resolution","4f",this.program,this.gl),this.uMouse=new a("mouse","2f",this.program,this.gl),this.uTime=new a("time","1f",this.program,this.gl),this.uRatio=new a("pixelRatio","1f",this.program,this.gl),this.uThreshold=new a("threshold","2f",this.program,this.gl),this.billboard=new o(this.gl),this.positionLocation=this.gl.getAttribLocation(this.program,"a_position"),this.gl.enableVertexAttribArray(this.positionLocation),this.gl.vertexAttribPointer(this.positionLocation,2,this.gl.FLOAT,!1,0,0)}},{key:"addTexture",value:function(){!function(t,i){for(var e=[],s=t.length,h=function(){0===--s&&i(e)},r=0;r<s;++r){var a=n(t[r],h);e.push(a)}}(this.imageURLs,this.start.bind(this))}},{key:"start",value:function(t){var i=this.gl;this.imageAspect=t[0].naturalHeight/t[0].naturalWidth;for(var e=0;e<t.length;e++){var s=i.createTexture();i.bindTexture(i.TEXTURE_2D,s),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.LINEAR),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,i.RGBA,i.UNSIGNED_BYTE,t[e]),this.textures.push(s)}var h=this.gl.getUniformLocation(this.program,"image0"),r=this.gl.getUniformLocation(this.program,"image1");this.gl.uniform1i(h,0),this.gl.uniform1i(r,1),this.gl.activeTexture(this.gl.TEXTURE0),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[0]),this.gl.activeTexture(this.gl.TEXTURE1),this.gl.bindTexture(this.gl.TEXTURE_2D,this.textures[1]),this.resize(),this.render()}},{key:"gyro",value:function(){}},{key:"mouseMove",value:function(){var t=this;document.addEventListener("mousemove",(function(i){var e=t.windowWidth/2,s=t.windowHeight/2;t.mouseTargetX=(e-i.clientX)/e*.1,t.mouseTargetY=(s-i.clientY)/s*.1}))}},{key:"render",value:function(){var t=((new Date).getTime()-this.startTime)/1e3;this.uTime.set(t),this.mouseX+=.05*(this.mouseTargetX-this.mouseX),this.mouseY+=.05*(this.mouseTargetY-this.mouseY),this.uMouse.set(this.mouseX,this.mouseY),this.billboard.render(this.gl),requestAnimationFrame(this.render.bind(this))}}]),t}();function n(t,i){var e=new Image;return e.src=t,e.onload=i,e}function a(t,i,e,s){this.name=t,this.suffix=i,this.gl=s,this.program=e,this.location=s.getUniformLocation(e,t)}function o(t){var i=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,i),t.bufferData(t.ARRAY_BUFFER,o.verts,t.STATIC_DRAW)}a.prototype.set=function(){for(var t="uniform"+this.suffix,i=arguments.length,e=new Array(i),s=0;s<i;s++)e[s]=arguments[s];var h=[this.location].concat(e);this.gl[t].apply(this.gl,h)},o.verts=new Float32Array([-1,-1,1,-1,-1,1,1,1]),o.prototype.render=function(t){t.drawArrays(t.TRIANGLE_STRIP,0,4)}}}]);