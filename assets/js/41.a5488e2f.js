(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{310:function(t,i,n){},377:function(t,i,n){"use strict";var e=n(310);n.n(e).a},402:function(t,i,n){"use strict";n.r(i);var e=n(17),s=n(26),a=function(){function t(i,n){Object(e.a)(this,t),this.target=i,this.url=n,this.img=new Image,this.init()}return Object(s.a)(t,[{key:"init",value:function(){var t=this;this.img.crossOrigin="Anonymous",this.img.addEventListener("load",function(){return t.onLoad()},!1),this.img.src=this.url}},{key:"onLoad",value:function(){var t=document.createElement("canvas"),i=t.getContext("2d");t.width=this.img.width,t.height=this.img.height,i.drawImage(this.img,0,0),this.target.appendChild(t)}}]),t}(),o={name:"",mounted:function(){new a(this.$refs.box,"https://source.unsplash.com/random/1600x900")}},r=(n(377),n(25)),u=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"box"})},[],!1,null,"0bb956bc",null);i.default=u.exports}}]);