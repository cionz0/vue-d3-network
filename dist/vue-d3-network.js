(function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.vueD3Network=n():t.vueD3Network=n()})(this,function(){return function(t){function n(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var i={};return n.m=t,n.c=i,n.i=function(t){return t},n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=43)}([function(t,n,i){"use strict";n.a=function(t){return function(){return t}}},function(t,n,i){"use strict";function e(){}function r(t,n){var i=new e;if(t instanceof e)t.each(function(t,n){i.set(n,t)});else if(Array.isArray(t)){var r,o=-1,s=t.length;if(null==n)for(;++o<s;)i.set(o,t[o]);else for(;++o<s;)i.set(n(r=t[o],o,t),r)}else if(t)for(var a in t)i.set(a,t[a]);return i}i.d(n,"b",function(){return o});var o="$";e.prototype=r.prototype={constructor:e,has:function(t){return o+t in this},get:function(t){return this[o+t]},set:function(t,n){return this[o+t]=n,this},remove:function(t){var n=o+t;return n in this&&delete this[n]},clear:function(){for(var t in this)t[0]===o&&delete this[t]},keys:function(){var t=[];for(var n in this)n[0]===o&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)n[0]===o&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)n[0]===o&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)n[0]===o&&++t;return t},empty:function(){for(var t in this)if(t[0]===o)return!1;return!0},each:function(t){for(var n in this)n[0]===o&&t(this[n],n.slice(1),this)}},n.a=r},function(t,n,i){"use strict";n.a=function(){return 1e-6*(Math.random()-.5)}},function(t,n,i){"use strict";n.a=function(t,n,i,e,r){this.node=t,this.x0=n,this.y0=i,this.x1=e,this.y1=r}},function(t,n,i){"use strict";function e(){return _||(k(r),_=m.now()+w)}function r(){_=0}function o(){this._call=this._time=this._next=null}function s(t,n,i){var e=new o;return e.restart(t,n,i),e}function a(){e(),++v;for(var t,n=h;n;)(t=_-n._time)>=0&&n._call.call(null,t),n=n._next;--v}function u(){_=(g=m.now())+w,v=y=0;try{a()}finally{v=0,f(),_=0}}function c(){var t=m.now(),n=t-g;n>x&&(w-=n,g=t)}function f(){for(var t,n,i=h,e=1/0;i;)i._call?(e>i._time&&(e=i._time),t=i,i=i._next):(n=i._next,i._next=null,i=t?t._next=n:h=n);d=t,l(e)}function l(t){if(!v){y&&(y=clearTimeout(y));var n=t-_;n>24?(t<1/0&&(y=setTimeout(u,n)),p&&(p=clearInterval(p))):(p||(g=_,p=setInterval(c,x)),v=1,k(u))}}n.c=e,n.b=o,n.a=s;var h,d,v=0,y=0,p=0,x=1e3,g=0,_=0,w=0,m="object"==typeof performance&&performance.now?performance:Date,k="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};o.prototype=s.prototype={constructor:o,restart:function(t,n,i){if("function"!=typeof t)throw new TypeError("callback is not a function");i=(null==i?e():+i)+(null==n?0:+n),this._next||d===this||(d?d._next=this:h=this,d=this),this._call=t,this._time=i,l()},stop:function(){this._call&&(this._call=null,this._time=1/0,l())}}},function(t,n,i){"use strict";var e=(i(11),i(12),i(1));i.d(n,"a",function(){return e.a});i(10),i(13),i(9)},function(t,n,i){"use strict";function e(t){return t.x}function r(t){return t.y}n.b=e,n.c=r;var o=i(14),s=i(5),a=i(36),u=Math.PI*(3-Math.sqrt(5));n.a=function(t){function n(){e(),g.call("tick",f),l<h&&(x.stop(),g.call("end",f))}function e(){var n,i,e=t.length;for(l+=(v-l)*d,p.each(function(t){t(l)}),n=0;n<e;++n)i=t[n],null==i.fx?i.x+=i.vx*=y:(i.x=i.fx,i.vx=0),null==i.fy?i.y+=i.vy*=y:(i.y=i.fy,i.vy=0)}function r(){for(var n,i=0,e=t.length;i<e;++i){if(n=t[i],n.index=i,isNaN(n.x)||isNaN(n.y)){var r=10*Math.sqrt(i),o=i*u;n.x=r*Math.cos(o),n.y=r*Math.sin(o)}(isNaN(n.vx)||isNaN(n.vy))&&(n.vx=n.vy=0)}}function c(n){return n.initialize&&n.initialize(t),n}var f,l=1,h=.001,d=1-Math.pow(h,1/300),v=0,y=.6,p=i.i(s.a)(),x=i.i(a.a)(n),g=i.i(o.a)("tick","end");return null==t&&(t=[]),r(),f={tick:e,restart:function(){return x.restart(n),f},stop:function(){return x.stop(),f},nodes:function(n){return arguments.length?(t=n,r(),p.each(c),f):t},alpha:function(t){return arguments.length?(l=+t,f):l},alphaMin:function(t){return arguments.length?(h=+t,f):h},alphaDecay:function(t){return arguments.length?(d=+t,f):+d},alphaTarget:function(t){return arguments.length?(v=+t,f):v},velocityDecay:function(t){return arguments.length?(y=1-t,f):1-y},force:function(t,n){return arguments.length>1?(null==n?p.remove(t):p.set(t,c(n)),f):p.get(t)},find:function(n,i,e){var r,o,s,a,u,c=0,f=t.length;for(null==e?e=1/0:e*=e,c=0;c<f;++c)a=t[c],r=n-a.x,o=i-a.y,(s=r*r+o*o)<e&&(u=a,e=s);return u},on:function(t,n){return arguments.length>1?(g.on(t,n),f):g.on(t)}}}},function(t,n,i){"use strict";var e=i(28);i.d(n,"a",function(){return e.a})},function(t,n,i){i(40);var e=i(41)(i(39),i(42),null,null);t.exports=e.exports},function(t,n,i){"use strict"},function(t,n,i){"use strict"},function(t,n,i){"use strict";i(1)},function(t,n,i){"use strict";function e(){}function r(t,n){var i=new e;if(t instanceof e)t.each(function(t){i.add(t)});else if(t){var r=-1,o=t.length;if(null==n)for(;++r<o;)i.add(t[r]);else for(;++r<o;)i.add(n(t[r],r,t))}return i}var o=i(1),s=o.a.prototype;e.prototype=r.prototype={constructor:e,has:s.has,add:function(t){return t+="",this[o.b+t]=t,this},remove:s.remove,clear:s.clear,values:s.keys,size:s.size,empty:s.empty,each:s.each}},function(t,n,i){"use strict"},function(t,n,i){"use strict";var e=i(15);i.d(n,"a",function(){return e.a})},function(t,n,i){"use strict";function e(){for(var t,n=0,i=arguments.length,e={};n<i;++n){if(!(t=arguments[n]+"")||t in e)throw new Error("illegal type: "+t);e[t]=[]}return new r(e)}function r(t){this._=t}function o(t,n){return t.trim().split(/^|\s+/).map(function(t){var i="",e=t.indexOf(".");if(e>=0&&(i=t.slice(e+1),t=t.slice(0,e)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}function s(t,n){for(var i,e=0,r=t.length;e<r;++e)if((i=t[e]).name===n)return i.value}function a(t,n,i){for(var e=0,r=t.length;e<r;++e)if(t[e].name===n){t[e]=u,t=t.slice(0,e).concat(t.slice(e+1));break}return null!=i&&t.push({name:n,value:i}),t}var u={value:function(){}};r.prototype=e.prototype={constructor:r,on:function(t,n){var i,e=this._,r=o(t+"",e),u=-1,c=r.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++u<c;)if(i=(t=r[u]).type)e[i]=a(e[i],t.name,n);else if(null==n)for(i in e)e[i]=a(e[i],t.name,null);return this}for(;++u<c;)if((i=(t=r[u]).type)&&(i=s(e[i],t.name)))return i}},copy:function(){var t={},n=this._;for(var i in n)t[i]=n[i].slice();return new r(t)},call:function(t,n){if((i=arguments.length-2)>0)for(var i,e,r=new Array(i),o=0;o<i;++o)r[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(e=this._[t],o=0,i=e.length;o<i;++o)e[o].value.apply(n,r)},apply:function(t,n,i){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var e=this._[t],r=0,o=e.length;r<o;++r)e[r].value.apply(n,i)}},n.a=e},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i(17);i.d(n,"forceCenter",function(){return e.a});var r=i(18);i.d(n,"forceCollide",function(){return r.a});var o=i(19);i.d(n,"forceLink",function(){return o.a});var s=i(20);i.d(n,"forceManyBody",function(){return s.a});var a=i(6);i.d(n,"forceSimulation",function(){return a.a});var u=i(21);i.d(n,"forceX",function(){return u.a});var c=i(22);i.d(n,"forceY",function(){return c.a})},function(t,n,i){"use strict";n.a=function(t,n){function i(){var i,r,o=e.length,s=0,a=0;for(i=0;i<o;++i)r=e[i],s+=r.x,a+=r.y;for(s=s/o-t,a=a/o-n,i=0;i<o;++i)r=e[i],r.x-=s,r.y-=a}var e;return null==t&&(t=0),null==n&&(n=0),i.initialize=function(t){e=t},i.x=function(n){return arguments.length?(t=+n,i):t},i.y=function(t){return arguments.length?(n=+t,i):n},i}},function(t,n,i){"use strict";function e(t){return t.x+t.vx}function r(t){return t.y+t.vy}var o=i(0),s=i(2),a=i(7);n.a=function(t){function n(){function t(t,n,e,r,o){var a=t.data,u=t.r,f=p+u;{if(!a)return n>v+f||r<v-f||e>y+f||o<y-f;if(a.index>c.index){var l=v-a.x-a.vx,d=y-a.y-a.vy,g=l*l+d*d;g<f*f&&(0===l&&(l=i.i(s.a)(),g+=l*l),0===d&&(d=i.i(s.a)(),g+=d*d),g=(f-(g=Math.sqrt(g)))/g*h,c.vx+=(l*=g)*(f=(u*=u)/(x+u)),c.vy+=(d*=g)*f,a.vx-=l*(f=1-f),a.vy-=d*f)}}}for(var n,o,c,v,y,p,x,g=f.length,_=0;_<d;++_)for(o=i.i(a.a)(f,e,r).visitAfter(u),n=0;n<g;++n)c=f[n],p=l[c.index],x=p*p,v=c.x+c.vx,y=c.y+c.vy,o.visit(t)}function u(t){if(t.data)return t.r=l[t.data.index];for(var n=t.r=0;n<4;++n)t[n]&&t[n].r>t.r&&(t.r=t[n].r)}function c(){if(f){var n,i,e=f.length;for(l=new Array(e),n=0;n<e;++n)i=f[n],l[i.index]=+t(i,n,f)}}var f,l,h=1,d=1;return"function"!=typeof t&&(t=i.i(o.a)(null==t?1:+t)),n.initialize=function(t){f=t,c()},n.iterations=function(t){return arguments.length?(d=+t,n):d},n.strength=function(t){return arguments.length?(h=+t,n):h},n.radius=function(e){return arguments.length?(t="function"==typeof e?e:i.i(o.a)(+e),c(),n):t},n}},function(t,n,i){"use strict";function e(t){return t.index}function r(t,n){var i=t.get(n);if(!i)throw new Error("missing: "+n);return i}var o=i(0),s=i(2),a=i(5);n.a=function(t){function n(t){return 1/Math.min(y[t.source.index],y[t.target.index])}function u(n){for(var e=0,r=t.length;e<w;++e)for(var o,a,u,c,f,l,v,y=0;y<r;++y)o=t[y],a=o.source,u=o.target,c=u.x+u.vx-a.x-a.vx||i.i(s.a)(),f=u.y+u.vy-a.y-a.vy||i.i(s.a)(),l=Math.sqrt(c*c+f*f),l=(l-d[y])/l*n*h[y],c*=l,f*=l,u.vx-=c*(v=p[y]),u.vy-=f*v,a.vx+=c*(v=1-v),a.vy+=f*v}function c(){if(v){var n,e,o=v.length,s=t.length,u=i.i(a.a)(v,x);for(n=0,y=new Array(o);n<s;++n)e=t[n],e.index=n,"object"!=typeof e.source&&(e.source=r(u,e.source)),"object"!=typeof e.target&&(e.target=r(u,e.target)),y[e.source.index]=(y[e.source.index]||0)+1,y[e.target.index]=(y[e.target.index]||0)+1;for(n=0,p=new Array(s);n<s;++n)e=t[n],p[n]=y[e.source.index]/(y[e.source.index]+y[e.target.index]);h=new Array(s),f(),d=new Array(s),l()}}function f(){if(v)for(var n=0,i=t.length;n<i;++n)h[n]=+g(t[n],n,t)}function l(){if(v)for(var n=0,i=t.length;n<i;++n)d[n]=+_(t[n],n,t)}var h,d,v,y,p,x=e,g=n,_=i.i(o.a)(30),w=1;return null==t&&(t=[]),u.initialize=function(t){v=t,c()},u.links=function(n){return arguments.length?(t=n,c(),u):t},u.id=function(t){return arguments.length?(x=t,u):x},u.iterations=function(t){return arguments.length?(w=+t,u):w},u.strength=function(t){return arguments.length?(g="function"==typeof t?t:i.i(o.a)(+t),f(),u):g},u.distance=function(t){return arguments.length?(_="function"==typeof t?t:i.i(o.a)(+t),l(),u):_},u}},function(t,n,i){"use strict";var e=i(0),r=i(2),o=i(7),s=i(6);n.a=function(){function t(t){var n,e=c.length,r=i.i(o.a)(c,s.b,s.c).visitAfter(a);for(l=t,n=0;n<e;++n)f=c[n],r.visit(u)}function n(){if(c){var t,n,i=c.length;for(h=new Array(i),t=0;t<i;++t)n=c[t],h[n.index]=+d(n,t,c)}}function a(t){var n,i,e,r,o,s=0;if(t.length){for(e=r=o=0;o<4;++o)(n=t[o])&&(i=n.value)&&(s+=i,e+=i*n.x,r+=i*n.y);t.x=e/s,t.y=r/s}else{n=t,n.x=n.data.x,n.y=n.data.y;do{s+=h[n.data.index]}while(n=n.next)}t.value=s}function u(t,n,e,o){if(!t.value)return!0;var s=t.x-f.x,a=t.y-f.y,u=o-n,c=s*s+a*a;if(u*u/p<c)return c<y&&(0===s&&(s=i.i(r.a)(),c+=s*s),0===a&&(a=i.i(r.a)(),c+=a*a),c<v&&(c=Math.sqrt(v*c)),f.vx+=s*t.value*l/c,f.vy+=a*t.value*l/c),!0;if(!(t.length||c>=y)){(t.data!==f||t.next)&&(0===s&&(s=i.i(r.a)(),c+=s*s),0===a&&(a=i.i(r.a)(),c+=a*a),c<v&&(c=Math.sqrt(v*c)));do{t.data!==f&&(u=h[t.data.index]*l/c,f.vx+=s*u,f.vy+=a*u)}while(t=t.next)}}var c,f,l,h,d=i.i(e.a)(-30),v=1,y=1/0,p=.81;return t.initialize=function(t){c=t,n()},t.strength=function(r){return arguments.length?(d="function"==typeof r?r:i.i(e.a)(+r),n(),t):d},t.distanceMin=function(n){return arguments.length?(v=n*n,t):Math.sqrt(v)},t.distanceMax=function(n){return arguments.length?(y=n*n,t):Math.sqrt(y)},t.theta=function(n){return arguments.length?(p=n*n,t):Math.sqrt(p)},t}},function(t,n,i){"use strict";var e=i(0);n.a=function(t){function n(t){for(var n,i=0,e=o.length;i<e;++i)n=o[i],n.vx+=(a[i]-n.x)*s[i]*t}function r(){if(o){var n,i=o.length;for(s=new Array(i),a=new Array(i),n=0;n<i;++n)s[n]=isNaN(a[n]=+t(o[n],n,o))?0:+u(o[n],n,o)}}var o,s,a,u=i.i(e.a)(.1);return"function"!=typeof t&&(t=i.i(e.a)(null==t?0:+t)),n.initialize=function(t){o=t,r()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:i.i(e.a)(+t),r(),n):u},n.x=function(o){return arguments.length?(t="function"==typeof o?o:i.i(e.a)(+o),r(),n):t},n}},function(t,n,i){"use strict";var e=i(0);n.a=function(t){function n(t){for(var n,i=0,e=o.length;i<e;++i)n=o[i],n.vy+=(a[i]-n.y)*s[i]*t}function r(){if(o){var n,i=o.length;for(s=new Array(i),a=new Array(i),n=0;n<i;++n)s[n]=isNaN(a[n]=+t(o[n],n,o))?0:+u(o[n],n,o)}}var o,s,a,u=i.i(e.a)(.1);return"function"!=typeof t&&(t=i.i(e.a)(null==t?0:+t)),n.initialize=function(t){o=t,r()},n.strength=function(t){return arguments.length?(u="function"==typeof t?t:i.i(e.a)(+t),r(),n):u},n.y=function(o){return arguments.length?(t="function"==typeof o?o:i.i(e.a)(+o),r(),n):t},n}},function(t,n,i){"use strict";function e(t,n,i,e){if(isNaN(n)||isNaN(i))return t;var r,o,s,a,u,c,f,l,h,d=t._root,v={data:e},y=t._x0,p=t._y0,x=t._x1,g=t._y1;if(!d)return t._root=v,t;for(;d.length;)if((c=n>=(o=(y+x)/2))?y=o:x=o,(f=i>=(s=(p+g)/2))?p=s:g=s,r=d,!(d=d[l=f<<1|c]))return r[l]=v,t;if(a=+t._x.call(null,d.data),u=+t._y.call(null,d.data),n===a&&i===u)return v.next=d,r?r[l]=v:t._root=v,t;do{r=r?r[l]=new Array(4):t._root=new Array(4),(c=n>=(o=(y+x)/2))?y=o:x=o,(f=i>=(s=(p+g)/2))?p=s:g=s}while((l=f<<1|c)==(h=(u>=s)<<1|a>=o));return r[h]=d,r[l]=v,t}function r(t){var n,i,r,o,s=t.length,a=new Array(s),u=new Array(s),c=1/0,f=1/0,l=-1/0,h=-1/0;for(i=0;i<s;++i)isNaN(r=+this._x.call(null,n=t[i]))||isNaN(o=+this._y.call(null,n))||(a[i]=r,u[i]=o,r<c&&(c=r),r>l&&(l=r),o<f&&(f=o),o>h&&(h=o));for(l<c&&(c=this._x0,l=this._x1),h<f&&(f=this._y0,h=this._y1),this.cover(c,f).cover(l,h),i=0;i<s;++i)e(this,a[i],u[i],t[i]);return this}n.b=r,n.a=function(t){var n=+this._x.call(null,t),i=+this._y.call(null,t);return e(this.cover(n,i),n,i,t)}},function(t,n,i){"use strict";n.a=function(t,n){if(isNaN(t=+t)||isNaN(n=+n))return this;var i=this._x0,e=this._y0,r=this._x1,o=this._y1;if(isNaN(i))r=(i=Math.floor(t))+1,o=(e=Math.floor(n))+1;else{if(!(i>t||t>r||e>n||n>o))return this;var s,a,u=r-i,c=this._root;switch(a=(n<(e+o)/2)<<1|t<(i+r)/2){case 0:do{s=new Array(4),s[a]=c,c=s}while(u*=2,r=i+u,o=e+u,t>r||n>o);break;case 1:do{s=new Array(4),s[a]=c,c=s}while(u*=2,i=r-u,o=e+u,i>t||n>o);break;case 2:do{s=new Array(4),s[a]=c,c=s}while(u*=2,r=i+u,e=o-u,t>r||e>n);break;case 3:do{s=new Array(4),s[a]=c,c=s}while(u*=2,i=r-u,e=o-u,i>t||e>n)}this._root&&this._root.length&&(this._root=c)}return this._x0=i,this._y0=e,this._x1=r,this._y1=o,this}},function(t,n,i){"use strict";n.a=function(){var t=[];return this.visit(function(n){if(!n.length)do{t.push(n.data)}while(n=n.next)}),t}},function(t,n,i){"use strict";n.a=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}},function(t,n,i){"use strict";var e=i(3);n.a=function(t,n,i){var r,o,s,a,u,c,f,l=this._x0,h=this._y0,d=this._x1,v=this._y1,y=[],p=this._root;for(p&&y.push(new e.a(p,l,h,d,v)),null==i?i=1/0:(l=t-i,h=n-i,d=t+i,v=n+i,i*=i);c=y.pop();)if(!(!(p=c.node)||(o=c.x0)>d||(s=c.y0)>v||(a=c.x1)<l||(u=c.y1)<h))if(p.length){var x=(o+a)/2,g=(s+u)/2;y.push(new e.a(p[3],x,g,a,u),new e.a(p[2],o,g,x,u),new e.a(p[1],x,s,a,g),new e.a(p[0],o,s,x,g)),(f=(n>=g)<<1|t>=x)&&(c=y[y.length-1],y[y.length-1]=y[y.length-1-f],y[y.length-1-f]=c)}else{var _=t-+this._x.call(null,p.data),w=n-+this._y.call(null,p.data),m=_*_+w*w;if(m<i){var k=Math.sqrt(i=m);l=t-k,h=n-k,d=t+k,v=n+k,r=p.data}}return r}},function(t,n,i){"use strict";function e(t,n,i){var e=new r(null==n?p.a:n,null==i?x.a:i,NaN,NaN,NaN,NaN);return null==t?e:e.addAll(t)}function r(t,n,i,e,r,o){this._x=t,this._y=n,this._x0=i,this._y0=e,this._x1=r,this._y1=o,this._root=void 0}function o(t){for(var n={data:t.data},i=n;t=t.next;)i=i.next={data:t.data};return n}n.a=e;var s=i(23),a=i(24),u=i(25),c=i(26),f=i(27),l=i(29),h=i(30),d=i(31),v=i(32),y=i(33),p=i(34),x=i(35),g=e.prototype=r.prototype;g.copy=function(){var t,n,i=new r(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root;if(!e)return i;if(!e.length)return i._root=o(e),i;for(t=[{source:e,target:i._root=new Array(4)}];e=t.pop();)for(var s=0;s<4;++s)(n=e.source[s])&&(n.length?t.push({source:n,target:e.target[s]=new Array(4)}):e.target[s]=o(n));return i},g.add=s.a,g.addAll=s.b,g.cover=a.a,g.data=u.a,g.extent=c.a,g.find=f.a,g.remove=l.a,g.removeAll=l.b,g.root=h.a,g.size=d.a,g.visit=v.a,g.visitAfter=y.a,g.x=p.b,g.y=x.b},function(t,n,i){"use strict";function e(t){for(var n=0,i=t.length;n<i;++n)this.remove(t[n]);return this}n.b=e,n.a=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(s=+this._y.call(null,t)))return this;var n,i,e,r,o,s,a,u,c,f,l,h,d=this._root,v=this._x0,y=this._y0,p=this._x1,x=this._y1;if(!d)return this;if(d.length)for(;;){if((c=o>=(a=(v+p)/2))?v=a:p=a,(f=s>=(u=(y+x)/2))?y=u:x=u,n=d,!(d=d[l=f<<1|c]))return this;if(!d.length)break;(n[l+1&3]||n[l+2&3]||n[l+3&3])&&(i=n,h=l)}for(;d.data!==t;)if(e=d,!(d=d.next))return this;return(r=d.next)&&delete d.next,e?(r?e.next=r:delete e.next,this):n?(r?n[l]=r:delete n[l],(d=n[0]||n[1]||n[2]||n[3])&&d===(n[3]||n[2]||n[1]||n[0])&&!d.length&&(i?i[h]=d:this._root=d),this):(this._root=r,this)}},function(t,n,i){"use strict";n.a=function(){return this._root}},function(t,n,i){"use strict";n.a=function(){var t=0;return this.visit(function(n){if(!n.length)do{++t}while(n=n.next)}),t}},function(t,n,i){"use strict";var e=i(3);n.a=function(t){var n,i,r,o,s,a,u=[],c=this._root;for(c&&u.push(new e.a(c,this._x0,this._y0,this._x1,this._y1));n=u.pop();)if(!t(c=n.node,r=n.x0,o=n.y0,s=n.x1,a=n.y1)&&c.length){var f=(r+s)/2,l=(o+a)/2;(i=c[3])&&u.push(new e.a(i,f,l,s,a)),(i=c[2])&&u.push(new e.a(i,r,l,f,a)),(i=c[1])&&u.push(new e.a(i,f,o,s,l)),(i=c[0])&&u.push(new e.a(i,r,o,f,l))}return this}},function(t,n,i){"use strict";var e=i(3);n.a=function(t){var n,i=[],r=[];for(this._root&&i.push(new e.a(this._root,this._x0,this._y0,this._x1,this._y1));n=i.pop();){var o=n.node;if(o.length){var s,a=n.x0,u=n.y0,c=n.x1,f=n.y1,l=(a+c)/2,h=(u+f)/2;(s=o[0])&&i.push(new e.a(s,a,u,l,h)),(s=o[1])&&i.push(new e.a(s,l,u,c,h)),(s=o[2])&&i.push(new e.a(s,a,h,l,f)),(s=o[3])&&i.push(new e.a(s,l,h,c,f))}r.push(n)}for(;n=r.pop();)t(n.node,n.x0,n.y0,n.x1,n.y1);return this}},function(t,n,i){"use strict";function e(t){return t[0]}n.a=e,n.b=function(t){return arguments.length?(this._x=t,this):this._x}},function(t,n,i){"use strict";function e(t){return t[1]}n.a=e,n.b=function(t){return arguments.length?(this._y=t,this):this._y}},function(t,n,i){"use strict";var e=i(4);i.d(n,"a",function(){return e.a});i(38),i(37)},function(t,n,i){"use strict";i(4)},function(t,n,i){"use strict";i(4)},function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i(16),r=Object.assign({},e);n.default={name:"d3-network",props:{netNodes:{type:Array},netLinks:{type:Array},options:{type:Object},selection:{type:Object,default:function(){return{nodes:{},links:{}}}}},data:function(){return{nodes:[],links:[],simulation:null,force:500,size:{w:500,h:500},offset:{x:0,y:0},maxLinks:3,maxNodes:20,strLinks:!0,linkStyle:"line",fontSize:10,dragging:!1,mouseOfst:{x:0,y:0},conf:{allEventsAs:!1},linkWidth:1,nodeLabels:!1,nodeSize:5,padding:{x:0,y:0}}},created:function(){this.updateOptions(this.options),this.buildNodes(this.netNodes),this.links=this.buildLinks(this.netLinks)},mounted:function(){var t=this;this.size.w=this.$el.clientWidth,this.size.h=this.$el.clientHeight,this.onResize(),this.$nextTick(function(){t.animate()}),window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},computed:{selected:function(){return this.selection.nodes},linksSelected:function(){return this.selection.links},center:function(){return{x:this.size.w/2+this.size.w/200*this.offset.x,y:this.size.h/2+this.size.h/200*this.offset.y}}},watch:{netNodes:function(t){this.buildNodes(t),this.reset()},netLinks:function(t,n){this.links=this.buildLinks(t),this.reset()},options:function(t,n){this.updateOptions(t),n.size&&t.size&&(n.size.w===t.size.w&&n.size.h===t.size.h||this.onResize()),this.animate()}},methods:{onResize:function(){this.size.w=this.$el.clientWidth,this.size.h=this.$el.clientHeight,this.padding.x=0,this.padding.y=0;for(var t=this;t.$parent;)this.padding.x+=t.$el.offsetLeft,this.padding.y+=t.$el.offsetTop,t=t.$parent;this.animate()},updateOptions:function(t){for(var n in t)this.hasOwnProperty(n)&&(this[n]=t[n])},buildNodes:function(t){var n=this;this.nodes=t.map(function(t,i){return t.id||n.$set(t,"id",i),t.x||n.$set(t,"x",0),t.y||n.$set(t,"y",0),t.name||n.$set(t,"name","node "+t.id),t})},buildLinks:function(t){return t.concat().map(function(t){return t.source=t.sid,t.target=t.tid,t})},simulate:function(t,n){return r.forceSimulation().alpha(.6).nodes(t).force("center",r.forceCenter(this.center.x,this.center.y)).force("X",r.forceX(this.center.x).strength(.5)).force("Y",r.forceY(this.center.y).strength(.5)).force("charge",r.forceManyBody().strength(-this.force)).force("link",r.forceLink(n).id(function(t){return t.id}))},animate:function(){this.simulation&&this.simulation.stop(),this.simulation=this.simulate(this.nodes,this.links)},reset:function(){this.animate(),this.nodes=this.simulation.nodes(),this.links=this.simulation.force("link").links()},move:function(t){!1!==this.dragging&&this.nodes[this.dragging]&&(this.simulation.restart(),this.simulation.alpha(.5),this.nodes[this.dragging].fx=t.clientX-this.padding.x-this.offset.x,this.nodes[this.dragging].fy=t.clientY-this.padding.y-this.offset.y)},dragStart:function(t,n){this.dragging=!1!==n&&n,this.setMouseOffset(t,this.nodes[n]),this.dragging||(this.simulation.alpha(.1),this.simulation.restart(),this.setMouseOffset())},dragEnd:function(){var t=this.nodes[this.dragging];t&&!t.pinned&&(t.fx=null,t.fy=null),this.dragStart(!1)},linkClass:function(t){var n="link ";return this.linksSelected.hasOwnProperty(t)&&(n+="selected"),n},clickNode:function(t,n){this.$emit("node-click",t,n)},clickLink:function(t,n){this.$emit("link-click",t,n)},curve:function(t){var n={M:[t.source.x,t.source.y],Q:[t.source.x,t.target.y],X:[t.target.x,t.target.y]};return"M "+n.M+" Q "+n.Q.join(" ")+" "+n.X},nodeStyle:function(t){var n="";return t.color&&(n+="fill: "+t.color),n},nodeClass:function(t){var n="node";return this.selected[t.id]&&(n+=" selected"),(t.fx||t.fy)&&(n+=" pinned"),n},setMouseOffset:function(t,n){var i=0,e=0;t&&n&&(i=t.clientX-n.x,e=t.clientY-n.y),this.mouseOfst={x:i,y:e}}}}},function(t,n){},function(t,n){t.exports=function(t,n,i,e){var r,o=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(r=t,o=t.default);var a="function"==typeof o?o.options:o;if(n&&(a.render=n.render,a.staticRenderFns=n.staticRenderFns),i&&(a._scopeId=i),e){var u=a.computed||(a.computed={});Object.keys(e).forEach(function(t){var n=e[t];u[t]=function(){return n}})}return{esModule:r,exports:o,options:a}}},function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"net"},[i("svg",{ref:"svg",staticClass:"graph",attrs:{width:t.size.w,height:t.size.h},on:{"!mousemove":function(n){t.move(n)},mouseup:t.dragEnd}},[t.strLinks?i("g",{staticClass:"links",attrs:{id:"links"}},t._l(t.links,function(n,e){return i("line",{class:t.linkClass(n.id),attrs:{x1:n.source.x,y1:n.source.y,x2:n.target.x,y2:n.target.y,"stroke-width":t.linkWidth},on:{click:function(i){t.clickLink(i,n)}}})})):i("g",{staticClass:"links",attrs:{id:"links"}},t._l(t.links,function(n){return i("path",{class:t.linkClass(n.id)+" curve",attrs:{d:t.curve(n),"stroke-width":t.linkWidth},on:{click:function(i){t.clickLink(i,n)}}})})),i("g",{staticClass:"nodes",attrs:{id:"nodes"}},t._l(t.nodes,function(n,e){return i("circle",{key:e,class:t.nodeClass(n),style:t.nodeStyle(n),attrs:{r:t.nodeSize,cx:n.x,cy:n.y,title:n.name},on:{click:function(i){t.clickNode(i,n)},mousedown:function(n){n.preventDefault(),t.dragStart(n,e)}}})})),t.nodeLabels?i("g",{attrs:{id:"names"}},t._l(t.nodes,function(n){return i("text",{staticClass:"node-names",attrs:{x:n.x+t.nodeSize+t.fontSize/2,y:n.y+t.nodeSize-t.fontSize/2,"font-family":"Arial","font-size":t.fontSize,"stroke-width":t.fontSize/8}},[t._v(t._s(n.name))])})):t._e()])])},staticRenderFns:[]}},function(t,n,i){t.exports=i(8)}])});
//# sourceMappingURL=vue-d3-network.js.map