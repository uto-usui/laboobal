(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{377:function(t,i,s){},464:function(t,i,s){"use strict";var n=s(377);s.n(n).a},557:function(t,i,s){"use strict";s.r(i);var n=s(0);const e={primary:"#FF6473",sub:["#990027","#458083","#25ecb7"],text:"#2a2828",border:"#eaecef"};class a{constructor(t){return this.canvas=t,this.ctx=t.getContext("2d"),this}init(){const{width:t,height:i}=this.canvas.getBoundingClientRect();this.canvas.width=t,this.canvas.height=i,this.render()}render(){this.drawLine(this.canvas.width/2,this.canvas.height/2,this.canvas.width/2+200,this.canvas.height/2+50,e.sub[2]),this.drawLine(this.canvas.width/2,this.canvas.height/2,this.canvas.width/2-200,this.canvas.height/2-50,e.primary)}drawLine(t,i,s,n,e,a=1){this.ctx&&(e&&(this.ctx.strokeStyle=e),this.ctx.lineWidth=a,this.ctx.beginPath(),this.ctx.moveTo(t,i),this.ctx.lineTo(s,n),this.ctx.closePath(),this.ctx.stroke())}}var h=n.a.extend({name:"DrawLines",mounted(){this.$nextTick(()=>{const t=this.$refs.canvas;new a(t).init()})}}),c=(s(464),s(28)),r=Object(c.a)(h,(function(){var t=this.$createElement,i=this._self._c||t;return i("div",[i("canvas",{ref:"canvas"})])}),[],!1,null,"6502d961",null);i.default=r.exports}}]);