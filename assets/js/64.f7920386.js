(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{105:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(61),o=n(82),i=r.z.registerPlugin(o.b)||r.z;i.core.Tween},96:function(t,e,n){"use strict";
/*!
 * paths 3.1.1
 * https://greensock.com
 *
 * Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var r=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,o=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,i=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,a=/(^[#\.][a-z]|[a-y][a-z])/i,s=Math.PI/180,l=180/Math.PI,h=Math.sin,u=Math.cos,f=Math.abs,c=Math.sqrt,p=Math.atan2,g=1e8,d=function(t){return"string"==typeof t},v=function(t){return"number"==typeof t},m=function(t){return void 0===t},y={},x={},w=function(t){return Math.round((t+g)%1*1e5)/1e5||(t<0?0:1)},b=function(t){return~~(1e5*t+(t<0?-.5:.5))/1e5},L=function(t,e,n,r){var o=t[e],i=1===r?6:I(o,n,r);if(i&&i+n+2<o.length)return t.splice(e,0,o.slice(0,n+i+2)),o.splice(0,n+i),1},P=function(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||T(t[n])},N=function(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):e.totalPoints=t.totalPoints,e},M=function(t,e){var n=t.length,r=t[n-1]||[],o=r.length;e[0]===r[o-2]&&e[1]===r[o-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e};function C(t){var e,n=(t=d(t)&&a.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=Y(t)):t?d(t)?Y(t):v(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function T(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var A=function(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),o=[].slice.call(t.attributes),i=o.length;for(e=","+e+",";--i>-1;)n=o[i].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,o[i].nodeValue);return r},_={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"},R=function(t,e){for(var n=e?e.split(","):[],r={},o=n.length;--o>-1;)r[n[o]]=+t.getAttribute(n[o])||0;return r};function S(t,e,n){var r,o=t[e],i=t[e+2],a=t[e+4];return o+=(i-o)*n,o+=((i+=(a-i)*n)-o)*n,r=i+(a+(t[e+6]-a)*n-i)*n-o,o=t[e+1],o+=((i=t[e+3])-o)*n,o+=((i+=((a=t[e+5])-i)*n)-o)*n,b(p(i+(a+(t[e+7]-a)*n-i)*n-o,r)*l)}function k(t,e,n){m(n)&&(n=1);var r=(e=e||0)>n,o=Math.max(0,~~(f(n-e)-1e-8));if(r&&(r=n,n=e,e=r,r=1,o-=o?1:0),e<0||n<0){var i=1+~~Math.min(e,n);e+=i,n+=i}var a,s,l,h,u,c,p,g=function(t){for(var e=[],n=0;n<t.length;n++)e[n]=N(t[n],t[n].slice(0));return N(t,e)}(t.totalLength?t:z(t)),d=n>1,v=B(g,e,y),w=B(g,n,x),b=w.segment,C=v.segment,T=w.segIndex,A=v.segIndex,_=w.i,R=v.i,k=A===T,O=_===R&&k,E=k&&R>_||O&&v.t>w.t;if(d||o){if(L(g,A,R,v.t)&&(a=1,A++,O?E?w.t/=v.t:(w.t=(w.t-v.t)/(1-v.t),T++,_=0):A<=T+1&&!E&&(T++,k&&(_-=R))),w.t?L(g,T,_,w.t)&&(E&&a&&A++,r&&T++):(T--,r&&A--),h=[],c=1+(u=g.length)*o,p=A,r)for(c+=(u-(T=(T||u)-1)+A)%u,l=0;l<c;l++)M(h,g[p]),p=(p||u)-1;else for(c+=(u-A+T)%u,l=0;l<c;l++)M(h,g[p++%u]);g=h}else if(s=1===w.t?6:I(b,_,w.t),e!==n)for(a=I(C,R,O?v.t/w.t:v.t),k&&(s+=a),b.splice(_+s+2),a&&C.splice(0,R+a),l=g.length;l--;)(l<A||l>T)&&g.splice(l,1);else b.angle=S(b,_+s,0),v=b[_+=s],w=b[_+1],b.length=b.totalLength=0,b.totalPoints=g.totalPoints=8,b.push(v,w,v,w,v,w,v,w);return r&&P(g,d||o),g.totalLength=0,g}function O(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,o,i,a,s,l,h,u,p,d,v,m,y,x,w,b,L,P=~~t.resolution||12,N=1/P,M=n?e+6*n+1:t.length,C=t[e],T=t[e+1],A=e?e/6*P:0,_=t.samples,R=t.lookup,S=(e?t.minLength:g)||g,k=_[A+n*P-1],O=e?_[A-1]:0;for(_.length=R.length=0,o=e+2;o<M;o+=6){if(i=t[o+4]-C,a=t[o+2]-C,s=t[o]-C,u=t[o+5]-T,p=t[o+3]-T,d=t[o+1]-T,l=h=v=m=0,f(i)<1e-5&&f(u)<1e-5&&f(s)+f(d)<1e-5)t.length>8&&(t.splice(o,6),o-=6,M-=6);else for(r=1;r<=P;r++)l=h-(h=((x=N*r)*x*i+3*(y=1-x)*(x*a+y*s))*x),v=m-(m=(x*x*u+3*y*(x*p+y*d))*x),(b=c(v*v+l*l))<S&&(S=b),O+=b,_[A++]=O;C+=i,T+=u}if(k)for(k-=O;A<_.length;A++)_[A]+=k;if(_.length&&S)for(t.totalLength=L=_[_.length-1]||0,t.minLength=S,b=w=0,r=0;r<L;r+=S)R[b++]=_[w]<r?++w:w;else t.totalLength=_[0]=0;return e?O-_[e/2-1]:O}function z(t,e){var n,r,o;for(o=n=r=0;o<t.length;o++)t[o].resolution=~~e||12,r+=t[o].length,n+=O(t[o]);return t.totalPoints=r,t.totalLength=n,t}function I(t,e,n){if(n<=0||n>=1)return 0;var r=t[e],o=t[e+1],i=t[e+2],a=t[e+3],s=t[e+4],l=t[e+5],h=r+(i-r)*n,u=i+(s-i)*n,f=o+(a-o)*n,c=a+(l-a)*n,p=h+(u-h)*n,g=f+(c-f)*n,d=s+(t[e+6]-s)*n,v=l+(t[e+7]-l)*n;return u+=(d-u)*n,c+=(v-c)*n,t.splice(e+2,4,b(h),b(f),b(p),b(g),b(p+(u-p)*n),b(g+(c-g)*n),b(u),b(c),b(d),b(v)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function B(t,e,n){n=n||{},t.totalLength||z(t),(e<0||e>1)&&(e=w(e));var r,o,i,a,s,l,h=0,u=t[0];if(t.length>1){for(i=t.totalLength*e,s=l=0;(s+=t[l++].totalLength)<i;)h=l;e=(i-(a=s-(u=t[h]).totalLength))/(s-a)||0}return r=u.samples,o=u.resolution,i=u.totalLength*e,a=(l=u.lookup[~~(i/u.minLength)]||0)?r[l-1]:0,(s=r[l])<i&&(a=s,s=r[++l]),n.path=t,n.segment=u,n.segIndex=h,n.i=6*~~(l/o),n.t=1/o*((i-a)/(s-a)+l%o),n}function E(t,e,n,r){var o,i,a,s,l,h,u,f,c,p=t[0],g=r||{};if((e<0||e>1)&&(e=w(e)),t.length>1){for(a=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<a;)p=t[h];e=(a-(s=l-p.totalLength))/(l-s)||0}return o=p.samples,i=p.resolution,a=p.totalLength*e,s=(h=p.lookup[~~(a/p.minLength)]||0)?o[h-1]:0,(l=o[h])<a&&(s=l,l=o[++h]),c=1-(u=1/i*((a-s)/(l-s)+h%i)||0),f=p[h=6*~~(h/i)],g.x=b((u*u*(p[h+6]-f)+3*c*(u*(p[h+4]-f)+c*(p[h+2]-f)))*u+f),g.y=b((u*u*(p[h+7]-(f=p[h+1]))+3*c*(u*(p[h+5]-f)+c*(p[h+3]-f)))*u+f),n&&(g.angle=p.totalLength?S(p,h,u>=1?1-1e-9:u||1e-9):p.angle||0),g}function V(t,e,n,r,o,i,a){for(var s,l,h,u,f,c=t.length;--c>-1;)for(l=(s=t[c]).length,h=0;h<l;h+=2)u=s[h],f=s[h+1],s[h]=u*e+f*r+i,s[h+1]=u*n+f*o+a;return t._dirty=1,t}function X(t,e,n,r,o,i,a,l,p){if(t!==l||e!==p){n=f(n),r=f(r);var g=o%360*s,d=u(g),v=h(g),m=Math.PI,y=2*m,x=(t-l)/2,w=(e-p)/2,b=d*x+v*w,L=-v*x+d*w,P=b*b,N=L*L,M=P/(n*n)+N/(r*r);M>1&&(n=c(M)*n,r=c(M)*r);var C=n*n,T=r*r,A=(C*T-C*N-T*P)/(C*N+T*P);A<0&&(A=0);var _=(i===a?-1:1)*c(A),R=_*(n*L/r),S=_*(-r*b/n),k=(t+l)/2+(d*R-v*S),O=(e+p)/2+(v*R+d*S),z=(b-R)/n,I=(L-S)/r,B=(-b-R)/n,E=(-L-S)/r,V=z*z+I*I,X=(I<0?-1:1)*Math.acos(z/c(V)),Y=(z*E-I*B<0?-1:1)*Math.acos((z*B+I*E)/c(V*(B*B+E*E)));isNaN(Y)&&(Y=m),!a&&Y>0?Y-=y:a&&Y<0&&(Y+=y),X%=y,Y%=y;var j,q=Math.ceil(f(Y)/(y/4)),F=[],G=Y/q,J=4/3*h(G/2)/(1+u(G/2)),U=d*n,Z=v*n,D=v*-r,H=d*r;for(j=0;j<q;j++)b=u(o=X+j*G),L=h(o),z=u(o+=G),I=h(o),F.push(b-J*L,L+J*b,z+J*I,I-J*z,z,I);for(j=0;j<F.length;j+=2)b=F[j],L=F[j+1],F[j]=b*U+L*D+k,F[j+1]=b*Z+L*H+O;return F[j-2]=l,F[j-1]=p,F}}function Y(t){var e,n,o,a,s,l,h,u,c,p,g,d,v,m,y,x=(t+"").replace(i,(function(t){var e=+t;return e<1e-4&&e>-1e-4?0:e})).match(r)||[],w=[],b=0,L=0,P=x.length,N=0,M="ERROR: malformed path: "+t,C=function(t,e,n,r){p=(n-t)/3,g=(r-e)/3,h.push(t+p,e+g,n-p,r-g,n,r)};if(!t||!isNaN(x[0])||isNaN(x[1]))return console.log(M),w;for(e=0;e<P;e++)if(v=s,isNaN(x[e])?l=(s=x[e].toUpperCase())!==x[e]:e--,o=+x[e+1],a=+x[e+2],l&&(o+=b,a+=L),e||(u=o,c=a),"M"===s)h&&(h.length<8?w.length-=1:N+=h.length),b=u=o,L=c=a,h=[o,a],w.push(h),e+=2,s="L";else if("C"===s)h||(h=[0,0]),l||(b=L=0),h.push(o,a,b+1*x[e+3],L+1*x[e+4],b+=1*x[e+5],L+=1*x[e+6]),e+=6;else if("S"===s)p=b,g=L,"C"!==v&&"S"!==v||(p+=b-h[h.length-4],g+=L-h[h.length-3]),l||(b=L=0),h.push(p,g,o,a,b+=1*x[e+3],L+=1*x[e+4]),e+=4;else if("Q"===s)p=b+2/3*(o-b),g=L+2/3*(a-L),l||(b=L=0),b+=1*x[e+3],L+=1*x[e+4],h.push(p,g,b+2/3*(o-b),L+2/3*(a-L),b,L),e+=4;else if("T"===s)p=b-h[h.length-4],g=L-h[h.length-3],h.push(b+p,L+g,o+2/3*(b+1.5*p-o),a+2/3*(L+1.5*g-a),b=o,L=a),e+=2;else if("H"===s)C(b,L,b=o,L),e+=1;else if("V"===s)C(b,L,b,L=o+(l?L-b:0)),e+=1;else if("L"===s||"Z"===s)"Z"===s&&(o=u,a=c,h.closed=!0),("L"===s||f(b-o)>.5||f(L-a)>.5)&&(C(b,L,o,a),"L"===s&&(e+=2)),b=o,L=a;else if("A"===s){if(m=x[e+4],y=x[e+5],p=x[e+6],g=x[e+7],n=7,m.length>1&&(m.length<3?(g=p,p=y,n--):(g=y,p=m.substr(2),n-=2),y=m.charAt(1),m=m.charAt(0)),d=X(b,L,+x[e+1],+x[e+2],+x[e+3],+m,+y,(l?b:0)+1*p,(l?L:0)+1*g),e+=n,d)for(n=0;n<d.length;n++)h.push(d[n]);b=h[h.length-2],L=h[h.length-1]}else console.log(M);return(e=h.length)<6?(w.pop(),e=0):h[0]===h[e-2]&&h[1]===h[e-1]&&(h.closed=!0),w.totalPoints=N+e,w}function j(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,o=[n,r],i=2;i<t.length;i+=2)o.push(n,r,t[i],r=(t[i]-n)*e/2,n=t[i],-r);return o}function q(t,e,n){var r,o,i,a,s,l,f,g,d,v,m,y,x,w,L=t.length-2,P=+t[0],N=+t[1],M=+t[2],C=+t[3],T=[P,N,P,N],A=M-P,_=C-N;for(isNaN(n)&&(n=Math.PI/10),e=e||0===e?+e:1,s=2;s<L;s+=2)r=P,o=N,P=M,N=C,y=(l=A)*l+(g=_)*g,x=(A=(M=+t[s+2])-P)*A+(_=(C=+t[s+3])-N)*_,w=(f=M-r)*f+(d=C-o)*d,m=(i=Math.acos((y+x-w)/c(4*y*x)))/Math.PI*e,v=c(y)*m,m*=c(x),P===r&&N===o||(i>n?(a=p(d,f),T.push(b(P-u(a)*v),b(N-h(a)*v),b(P),b(N),b(P+u(a)*m),b(N+h(a)*m))):(a=p(g,l),T.push(b(P-u(a)*v),b(N-h(a)*v)),a=p(_,A),T.push(b(P),b(N),b(P+u(a)*m),b(N+h(a)*m))));return T.push(b(M),b(C),b(M),b(C)),T}function F(t){v(t[0])&&(t=[t]);var e,n,r,o,i="",a=t.length;for(n=0;n<a;n++){for(o=t[n],i+="M"+b(o[0])+","+b(o[1])+" C",e=o.length,r=2;r<e;r++)i+=b(o[r++])+","+b(o[r++])+" "+b(o[r++])+","+b(o[r++])+" "+b(o[r++])+","+b(o[r])+" ";o.closed&&(i+="z")}return i}
/*!
 * matrix 3.1.1
 * https://greensock.com
 *
 * Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var G,J,U,Z,D,H,Q,K="transform",W=K+"Origin",$=[],tt=[],et=function(){return J.pageYOffset||G.scrollTop||U.scrollTop||Z.scrollTop||0},nt=function(){return J.pageXOffset||G.scrollLeft||U.scrollLeft||Z.scrollLeft||0},rt=function(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)},ot=function t(e){return"fixed"===J.getComputedStyle(e).position||((e=e.parentNode)&&1===e.nodeType?t(e):void 0)},it=function t(e,n){if(e.parentNode&&(G||function(t){var e=t.ownerDocument||t;!(K in t.style)&&"msTransform"in t.style&&(W=(K="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););return J=window,Q=new lt,e&&(G=e,U=e.documentElement,Z=e.body),e}(e))){var r=rt(e),o=r?r.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i=r?n?"rect":"g":"div",a=2!==n?0:100,s=3===n?100:0,l="position:absolute;display:block;pointer-events:none;",h=G.createElementNS?G.createElementNS(o.replace(/^https/,"http"),i):G.createElement(i);return n&&(r?(H||(H=t(e)),h.setAttribute("width",1),h.setAttribute("height",1),h.setAttribute("transform","translate("+a+","+s+")"),H.appendChild(h)):(D||((D=t(e)).style.cssText=l),h.style.cssText=l+"width:1px;height:1px;top:"+s+"px;left:"+a+"px",D.appendChild(h))),h}throw"Need document and parent."},at=function(t){var e,n,r,o,i,a=rt(t),s=t===a,l=a?$:tt;return t===J?t:(l.length||l.push(it(t,1),it(t,2),it(t,3)),e=a?H:D,a?(r=s?{x:0,y:0}:t.getBBox(),(n=t.transform?t.transform.baseVal:[]).length?(o=(n=n.consolidate().matrix).a*r.x+n.c*r.y,i=n.b*r.x+n.d*r.y):(n=Q,o=r.x,i=r.y),"g"===t.tagName.toLowerCase()&&(o=i=0),e.setAttribute("transform","matrix("+n.a+","+n.b+","+n.c+","+n.d+","+(n.e+o)+","+(n.f+i)+")"),(s?a:t.parentNode).appendChild(e)):(e.style.top=t.offsetTop+"px",e.style.left=t.offsetLeft+"px",n=J.getComputedStyle(t),e.style[K]=n[K],e.style[W]=n[W],e.style.position="fixed"===n.position?"fixed":"absolute",t.parentNode.appendChild(e)),e)},st=function(t,e,n,r,o,i,a){return t.a=e,t.b=n,t.c=r,t.d=o,t.e=i,t.f=a,t},lt=function(){function t(t,e,n,r,o,i){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===o&&(o=0),void 0===i&&(i=0),st(this,t,e,n,r,o,i)}var e=t.prototype;return e.inverse=function(){var t=this.a,e=this.b,n=this.c,r=this.d,o=this.e,i=this.f,a=t*r-e*n;return st(this,r/a,-e/a,-n/a,t/a,(n*i-r*o)/a,-(t*i-e*o)/a)},e.multiply=function(t){var e=this.a,n=this.b,r=this.c,o=this.d,i=this.e,a=this.f,s=t.a,l=t.c,h=t.b,u=t.d,f=t.e,c=t.f;return st(this,s*e+h*r,s*n+h*o,l*e+u*r,l*n+u*o,i+f*e+c*r,a+f*n+c*o)},e.equals=function(t){var e=this.a,n=this.b,r=this.c,o=this.d,i=this.e,a=this.f;return e===t.a&&n===t.b&&r===t.c&&o===t.d&&i===t.e&&a===t.f},e.apply=function(t,e){void 0===e&&(e={});var n=t.x,r=t.y,o=this.a,i=this.b,a=this.c,s=this.d,l=this.e,h=this.f;return e.x=n*o+r*a+l,e.y=n*i+r*s+h,e},t}();function ht(t,e){if(!t||!t.parentNode)return new lt;var n=rt(t)?$:tt,r=at(t),o=n[0].getBoundingClientRect(),i=n[1].getBoundingClientRect(),a=n[2].getBoundingClientRect(),s=r.parentNode,l=ot(t),h=new lt((i.left-o.left)/100,(i.top-o.top)/100,(a.left-o.left)/100,(a.top-o.top)/100,o.left+(l?0:nt()),o.top+(l?0:et()));return s.removeChild(r),e?h.inverse():h}n.d(e,"a",(function(){return Nt}));
/*!
 * MotionPathPlugin 3.1.1
 * https://greensock.com
 *
 * @license Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var ut,ft,ct,pt,gt=["x","translateX","left","marginLeft"],dt=["y","translateY","top","marginTop"],vt=Math.PI/180,mt=function(t,e,n,r){for(var o=e.length,i=r,a=0;a<o;a++)t[i]=parseFloat(e[a][n]),i+=2;return t},yt=function(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0},xt=function(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r},wt=function(t,e,n,r,o,i,a){"cubic"===a.type?e=[e]:(e.unshift(yt(n,r,a.unitX),o?yt(n,o,a.unitY):0),a.relative&&xt(e),e=[(o?q:j)(e,a.curviness)]);return e=i(Lt(e,n,a)),Pt(t,n,r,e,"x",a.unitX),o&&Pt(t,n,o,e,"y",a.unitY),z(e,a.resolution||(0===a.curviness?20:12))},bt=function(t){return t},Lt=function(t,e,n){var r,o,i,a,s,l,h,u,f,c,p,g=n.align,d=n.matrix,v=n.offsetX,m=n.offsetY;return t&&t.length?(g&&("self"===g||(s=pt(g)[0]||e)===e?V(t,1,0,0,1,r=yt(e,"x")-t[0][0],o=yt(e,"y")-t[0][1]):(i=ut.to(e,{xPercent:0,yPercent:0,x:0,y:0,scale:1,rotation:0,skewX:0,skewY:0}).progress(1),a=ht(e),i.render(-1).kill(),s.getTotalLength&&"path"===s.tagName.toLowerCase()?(l=C(s),h=ht(s.parentNode),p=(p=s.transform)&&p.baseVal.length&&p.baseVal.consolidate().matrix||{e:0,f:0},r=l[0][0]+p.e,o=l[0][1]+p.f):(h=ht(s),r=0,o=0),f=h.a*r+h.c*o+h.e-a.e,c=h.b*r+h.d*o+h.f-a.f,r=(u=ht(e.parentNode,!0)).a*f+u.c*c,o=u.b*f+u.d*c,f=t[0][0],c=t[0][1],h.multiply(u),r-=h.a*f+h.c*c,o-=h.b*f+h.d*c,V(t,h.a,h.b,h.c,h.d,r,o))),d?V(t,d.a,d.b,d.c,d.d,d.e,d.f):(v||m)&&V(t,1,0,0,1,v||0,m||0),t):C("M0,0L0,0")},Pt=function(t,e,n,r,o,i){var a=e._gsap,s=a.harness,l=s&&s.aliases&&s.aliases[n]||n,h=t._pt=new ft(t._pt,e,l,0,0,bt,0,a.set(e,l,t));h.u=ct(a.get(e,l,i))||0,h.path=r,h.pp=o,t._props.push(l)},Nt={version:"3.1.1",name:"motionPath",register:function(t,e,n){ct=(ut=t).utils.getUnit,pt=ut.utils.toArray,ft=n},init:function(t,e,n,r,o){if(!ut)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var i,a,s,l,h,u,f=[],c=e.path,p=c[0],g=e.autoRotate,d=(h=e.start,u="end"in e?e.end:1,function(t){return h||1!==u?k(t,h,u):t});if(this.rawPaths=f,this.target=t,(this.rotate=g||0===g)&&(this.rOffset=parseFloat(g)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=ct(t._gsap.get(t,this.rProp))||0),!Array.isArray(c)||"closed"in c||"number"==typeof p)z(i=d(Lt(C(e.path),t,e)),e.resolution),f.push(i),Pt(this,t,e.x||"x",i,"x",e.unitX||"px"),Pt(this,t,e.y||"y",i,"y",e.unitY||"px");else{for(a in p)~gt.indexOf(a)?s=a:~dt.indexOf(a)&&(l=a);for(a in s&&l?f.push(wt(this,mt(mt([],c,s,0),c,l,1),t,e.x||s,e.y||l,d,e)):s=l=0,p)a!==s&&a!==l&&f.push(wt(this,mt([],c,a,0),t,a,0,d,e))}},render:function(t,e){var n=e.rawPaths,r=n.length,o=e._pt;for(t>1?t=1:t<0&&(t=0);r--;)E(n[r],t,!r&&e.rotate,n[r]);for(;o;)o.set(o.t,o.p,o.path[o.pp]+o.u,o.d,t),o=o._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?vt:1)+e.rOffset+e.ru,e,t)},getLength:function(t){return z(C(t)).totalLength},sliceRawPath:k,getRawPath:C,pointsToSegment:q,stringToRawPath:Y,rawPathToString:F,transformRawPath:V,convertToPath:function(t,e){return pt(t).map((function(t){return function(t,e){var n,r,i,a,s,l,h,u,f,c,p,g,d,v,m,y,x,w,b,L,P,N,M=t.tagName.toLowerCase(),C=.552284749831;return"path"!==M&&t.getBBox?(l=A(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),N=R(t,_[M]),"rect"===M?(a=N.rx,s=N.ry,r=N.x,i=N.y,c=N.width-2*a,p=N.height-2*s,n=a||s?"M"+(y=(v=(d=r+a)+c)+a)+","+(w=i+s)+" V"+(b=w+p)+" C"+[y,L=b+s*C,m=v+a*C,P=b+s,v,P,v-(v-d)/3,P,d+(v-d)/3,P,d,P,g=r+a*(1-C),P,r,L,r,b,r,b-(b-w)/3,r,w+(b-w)/3,r,w,r,x=i+s*(1-C),g,i,d,i,d+(v-d)/3,i,v-(v-d)/3,i,v,i,m,i,y,x,y,w].join(",")+"z":"M"+(r+c)+","+i+" v"+p+" h"+-c+" v"+-p+" h"+c+"z"):"circle"===M||"ellipse"===M?("circle"===M?u=(a=s=N.r)*C:(a=N.rx,u=(s=N.ry)*C),n="M"+((r=N.cx)+a)+","+(i=N.cy)+" C"+[r+a,i+u,r+(h=a*C),i+s,r,i+s,r-h,i+s,r-a,i+u,r-a,i,r-a,i-u,r-h,i-s,r,i-s,r+h,i-s,r+a,i-u,r+a,i].join(",")+"z"):"line"===M?n="M"+N.x1+","+N.y1+" L"+N.x2+","+N.y2:"polyline"!==M&&"polygon"!==M||(n="M"+(r=(f=(t.getAttribute("points")+"").match(o)||[]).shift())+","+(i=f.shift())+" L"+f.join(","),"polygon"===M&&(n+=","+r+","+i+"z")),l.setAttribute("d",F(l._gsRawPath=Y(n))),e&&t.parentNode&&(t.parentNode.insertBefore(l,t),t.parentNode.removeChild(t)),l):t}(t,!1!==e)}))},getGlobalMatrix:ht,getPositionOnPath:E,cacheRawPathMeasurements:z,arrayToRawPath:function(t,e){var n=mt(mt([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&xt(n),["cubic"===e.type?n:q(n,e.curviness)]}};(ut||"undefined"!=typeof window&&(ut=window.gsap)&&ut.registerPlugin&&ut)&&ut.registerPlugin(Nt)}}]);