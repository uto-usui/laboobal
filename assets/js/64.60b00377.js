(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{402:function(e,t,n){},489:function(e,t,n){"use strict";n(402)},597:function(e,t,n){"use strict";n.r(t);var s=n(0);let i,a=100,r=0,o=0,c=3,l="",p=a/2;const d=e=>{e.draw=()=>{e.background(2);const t=3*e.frameCount,n=e.sin(e.radians(t))*o/4;e.push(),e.translate(0,e.height/2),e.ellipse(p,n,a,a),e.pop(),p+=c,(p+a/2>e.width||p<a/2)&&(c*=-1),i&&i(p-a/2)},e.setup=()=>{e.createCanvas(r,o).parent(l)}};var u=s.a.extend({name:"Test",data:()=>({circleWidth:100,posX:0,p5:null}),watch:{circleWidth(e){a=e}},async mounted(){const{default:e}=await n.e(103).then(n.t.bind(null,568,7)),t=this.$refs.wrap;var s,a,c,p;s="canvas",a=t.offsetWidth,c=t.offsetHeight,l=s,r=a,o=c,p=this.writeSpeedValue,i=p,this.p5=new e(d),console.log(this.p5)},beforeDestroy(){this.p5&&(this.p5.remove(),console.log("destroy",this.p5))},methods:{writeSpeedValue(e){this.posX=e}}}),h=(n(489),n(28)),f=Object(h.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wrap",staticClass:"wrap"},[n("div",{attrs:{id:"canvas"}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.circleWidth,expression:"circleWidth",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.circleWidth},on:{input:function(t){t.target.composing||(e.circleWidth=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._v(" "),n("p",{ref:"speed"},[e._v("\n    "+e._s(e.posX)+"\n  ")])])}),[],!1,null,"7fad0b24",null);t.default=f.exports}}]);