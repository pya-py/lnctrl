"use strict";(self.webpackChunklnctrl=self.webpackChunklnctrl||[]).push([[761],{5540:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(1413),o=n(43144),a=n(15671),s=n(60136),i=n(43668),l=n(75758),u=n(381),c=n(19596),p=function(e){(0,s.Z)(n,e);var t=(0,i.Z)(n);function n(e,o){var s,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"t",p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return(0,a.Z)(this,n),(s=t.call(this,e,(0,r.Z)({symbol:i,type:"exp",b:o},p))).copy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new n(s.a,s.b,s.symbol,{dot:s.dot,plus:s.plus,previous:e?s.previous:null,input:s.input})},s.toSin=function(){var e=s.copy();if("exp"===e.type&&e.b instanceof u.Z&&e.b instanceof u.Z&&0===e.b.real()){var t=new c.mc(e.a,e.b.imaginary()),n=new c.RQ(e.a,e.b.imaginary());return new u.Z(t,n)}return e},s.amplitude=function(e){},s.phase=function(e){var t=new u.Z(0,e),n=+s.b;return s.b===n?n*e:s.b instanceof l.Z?(n=s.b.$(t),t.multiply(n).imaginary()):void 0},s.valueAt=function(e){var t=+e;if(t===e){var r=l.Z.valueOf(s.a,t),o=l.Z.valueOf(s.b,t);return r*Math.exp(o*t)}if(e instanceof u.Z)return e.real()?e.imaginary()?new n(s.a,s.b,s.symbol).valueAt(e.real())*new n(1,new u.Z(0,s.b*e.imaginary()),s.symbol).toSin():s.valueAt(e.real()):new n(s.a,new u.Z(0,s.b*e.imaginary()),s.symbol).toSin()},s}return(0,o.Z)(n)}(l.Z)},64715:function(e,t,n){n.d(t,{Z:function(){return _}});var r=n(42982),o=n(15861),a=n(43144),s=n(15671),i=n(97326),l=n(60136),u=n(43668),c=n(87757),p=n.n(c),f=n(75758),h=n(381),v=n(5540),d=n(29695),Z=n(82842),b=n(79959),g=function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"t";return(0,s.Z)(this,n),(e=t.call(this,r,"u",o)).copy=function(){return new n(e.amp,e.symbol)},e.$=function(t){return(t>=0)*e.amp},e}return(0,a.Z)(n)}(Z.Z),m=n(19596),w=n(30830),y=n(66316),x=(0,a.Z)((function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"x";if((0,s.Z)(this,e),this.solve=function(){console.log(n.expression);var e=y.nroots(n.expression).toString().replaceAll("...","");return(e=(e=e.slice(1,e.length-1)).split(",").filter((function(e){return e&&""!==e}))).map((function(e,t){for(var n=1;n<e.length&&("+"!==e[n]&&"-"!==e[n]||!(0,w.X1)(e[n-1])||!(0,w.X1)(e[n+1]));n++);var r=[];if(r.push(e.slice(0,n)),n<e.length&&r.push(e.slice(n,e.length-2)),1===r.length){var o=r[0].replace("*i");return o===r[0]?new h.Z(Number(o)):new h.Z(0,Number(o))}return new h.Z(Number(r[0]),Number(r[1]))}))},this.approximate=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.Methods.newton,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3,a=[],s=function(e){return!isNaN(e)&&-1===a.findIndex((function(t){return t instanceof h.Z?t.equals(e):t===e}))},i=function(e){return e instanceof h.Z&&-1===a.findIndex((function(t){return e.equals(t)}))};if(n.expression instanceof f.Z){for(var l=0,u=n.expression.a.length-1;u>=0;u--)if(n.expression.a[u]){l=n.expression.a[u];break}var c=n.expression.a[0];l&&0!==c&&(o=Math.abs(l/c));for(var p=-o;p<=o;p++){var v=t(n.algebra,p,r);if(!isNaN(v)){var d=(0,w.NM)(v);s(d)&&a.push(d)}i(v=t(n.algebra,new h.Z(0,p),r))&&a.push(v)}}return a},this.durandKerner=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20;if(n.algebra instanceof f.Z){var t,r=n.algebra.$,o=n.algebra.degree();do{t=new h.Z(Math.random(),Math.random())}while(t.isReal());var a=Array(o).fill(0).map((function(e){return[]}));a[0].push(new h.Z(1,0));for(var s=1;s<o;s++)a[s][0]=t.multiply(a[s-1][0]);for(var i=0;i<e;i++)for(var l=0;l<o;l++){for(var u=a[l][i].copy(),c=new h.Z(1,0),p=0;p<o;p++)if(l!==p){var v=a[p][a[p].length-1];c=c.multiply(u.substract(v))}var d=r(u).devide(c);a[l].push(u.substract(d))}return a.map((function(e){return e[e.length-1]}))}},t instanceof Array){this.algebra=new b.Z(t),this.symbol=r,this.expression="";var o=t.length-1;this.degree=o;for(var a=0;a<t.length;this.expression+=e.GetAlgebriteTerm(o-a,t[a],a,r),a++);}else if("string"===typeof t)this.expression=t,this.algebra=null,this.symbol=r;else if(t instanceof b.Z){this.expression="",this.algebra=t.copy(),this.symbol=this.exp.symbol;var i=this.getA(),l=i.length-1;this.degree=l;for(var u=0;u<i.length;this.expression+=e.GetAlgebriteTerm(l-u,i[u],u,r),u++);}else t instanceof f.Z&&(this.expression=t.toString(),this.algebra=t.copy(),this.symbol=this.exp.symbol,this.degree=void 0);this.symbol=r}));x.zeroPrecision=(0,w.NM)(Math.pow(10,-w.ch.get())),x.GetAlgebriteTerm=function(e,t,n,r){if(t===+t){var o=0|t,a=e>0?"*".concat(r,"^").concat(e):"";return o!==t?(y.run("a".concat(n," = ").concat(t)),(t>=0?"+":"")+"a".concat(n).concat(a)):(o>=0?"+":"")+"".concat(o).concat(a)}return"".concat(t).concat(r,"^").concat(e)},x.Methods={newton:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:20,r=e.$,o=e.derivative().$,a=Array(n+1).fill(0),s=o(t);if(s&&(!(s instanceof h.Z)||!s.isZero())){if(t instanceof h.Z){a[0]=t;for(var i=0;i<n;i++)a[i+1]=a[i].substract(r(a[i]).devide(o(a[i])));var l=r(a[n]);if(Math.abs(l.real())>x.zeroPrecision||Math.abs(l.imaginary())>x.zeroPrecision)return NaN}else{a[0]=t;for(var u=0;u<n;u++)a[u+1]=a[u]-r(a[u])/o(a[u]);if(r(a[n])>x.zeroPrecision)return NaN}return a[a.length-1]}return NaN},middlePoint:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;t=Math.abs(t);for(var n=x.zeroPrecision,r=[],o=0,a=1,s=0;s<t;s++){for(var i=((a=t-s)-(o=-t+s))/(2*Math.max(Math.abs(o),Math.abs(a))),l=null;i>=n&&e(l=(o+a)/2);)e(l)*e(o)<0?a=l:i=(a-(o=l))/(2*Math.max(Math.abs(o),Math.abs(a)));e(l)||r.push((0,w.NM)(l))}return new Set(r)}};var M=n(5913),_=function(e){(0,l.Z)(n,e);var t=(0,u.Z)(n);function n(e,a){var l,u=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,s.Z)(this,n);var c=[],d=[];if(u){if(u.overshoot&&u.t_rise){u.overshoot=Number(u.overshoot),u.t_rise=Number(u.t_rise);var Z=Math.log10(u.overshoot);u.zeta=-Z/Math.pow(Math.PI*Math.PI+Z*Z,.5),u.w_d=Math.PI/u.t_rise,u.w_n=u.w_d/Math.pow(1-u.zeta*u.zeta,.5)}if(u.w_n){u.w_n=Number(u.w_n),u.zeta=Number(u.zeta);var y=u.w_n,_=u.zeta,z=y*y;e=z,a=[1,2*_*y,z],d=n.omegaZetaPoles(y,_),c=[]}}if((l=t.call(this,e,a,"s",u)).roots=function(){return l.zeros&&l.zeros.length||l.poles&&l.poles.length||l.a instanceof Array&&l.b instanceof Array&&!l.a.find((function(e){return e!==+e}))&&!l.b.find((function(e){return e!==+e}))&&(l.zeros=l.a.length>1?new x(l.a,l.symbol).solve():[],l.poles=l.b.length>1?new x(l.b,l.symbol).solve():[]),[l.zeros.map((function(e){return e instanceof f.Z?e.copy():e})),l.poles.map((function(e){return e instanceof f.Z?e.copy():e}))]},l.setRoots=function(e,t){return l.poles=t.map((function(e){return e instanceof h.Z&&e.isReal()?e.real():e})),l.zeros=e.map((function(e){return e instanceof h.Z&&e.isReal()?e.real():e})),(0,i.Z)(l)},l.getDampingSystemCharasteristics=function(){return l.w_d?{t_rise:(0,w.NM)(Math.PI/l.w_d),overshoot:l.zeta>=-1&&l.zeta<=1?(0,w.NM)(100*Math.exp(-l.zeta*Math.PI/Math.pow(1-Math.pow(l.zeta,2),.5))):null}:null},l.getOrder=function(){return l.order},l.setOrder=function(e){return l.order=e,(0,i.Z)(l)},l.getPoles=function(){return l.poles},l.setPoles=function(e){return l.poles=n.sortRoots(e).map((function(e){return e instanceof h.Z&&e.isReal()?e.real():e})),(0,i.Z)(l)},l.getZeros=function(){return l.zeros},l.setZeros=function(e){return l.zeros=e.map((function(e){return e instanceof h.Z&&e.isReal()?e.real():e})),(0,i.Z)(l)},l.poleOrder=function(e){return l.poles.filter((function(t){return f.Z.areTheseTwoEqual(e,t)})).length},l.laplace=function(){return l.copy()},l.laplaceInverse=function(){var e=l.zeros.length-1,t=l.poles.length-1;if(0===e)switch(t){case 2:case 0:default:return null;case 1:return new f.Z(1,{type:"exp"})}},l.step=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(!e){var t=l.copy(),n=t.getPoles();return n.push(0),t.getB().push(0),t.setPoles(n).setDenominator(t.getB()),t}var r=l.zeros.length,o=l.poles.length,a=l.poles.filter((function(e){return!(e instanceof h.Z)})).length;if(0===r){var s=l.numerator();if(1===o);else if(2===o){var i=-l.poles[0],u=-l.poles[1];if(2===a){if(i!==u)return new v.Z(1/i,-i).add(new v.Z(-1/u,-u)).multiply(s/(i-u)).multiply(new g).add(new g(s/(i*u)));var c=i*i;return new v.Z(-s/c,-i).multiply(new b.Z([i,1])).multiply(new g).add(new g(s/c))}if(0===a){var p=-l.poles[0].real(),f=l.poles[0].imaginary(),d=s/(Math.pow(p,2)+Math.pow(f,2));return new v.Z(-d,-p).multiply(new m.mc(1,f)).add(new v.Z(-d,-p).multiply(new m.RQ(p/f,f))).multiply(new g).add(new g(d))}}}},l.copy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new n(l.a,l.b,{overshoot:l.overshoot,t_rise:l.t_rise,t_settle:l.t_settle,w_d:l.w_d,timeConstant:l.timeConstant,w_n:l.w_n,zeta:l.zeta,dot:l.dot,plus:l.plus,previous:e?l.previous:null,input:l.input}).setRoots(l.zeros,l.poles)},l.lim=function(e){var t,n;if(!e){for(t={a:0,sp:l.a.length-1},n={b:1,sp:l.b.length-1};t.sp>0&&0===l.a[t.sp];t.sp--);for(t.a=l.a[t.sp];n.sp>0&&0===l.b[n.sp];n.sp--);if(n.b=l.b[n.sp],t.sp=l.a.length-t.sp-1,n.sp=l.b.length-n.sp-1,t.sp===n.sp)return t.a/n.b;var r=Math.min(n.sp,t.sp);return r&&(t.sp-=r,n.sp-=r),n.sp?1/0:0}if(e===1/0){for(t={a:0,sp:0},n={b:1,sp:0};t.sp<l.a.length&&0===l.a[t.sp];t.sp++);for(t.a=l.a[t.sp];n.sp<l.b.length&&0===l.b[n.sp];n.sp++);if(n.b=l.b[n.sp],t.sp=l.a.length-t.sp-1,n.sp=l.b.length-n.sp-1,t.sp===n.sp)return t.a/n.b;var o=Math.min(n.sp,t.sp);return o&&(t.sp-=o,n.sp-=o),n.sp?0:1/0}if(t=l.numerator().$(e),n=l.denominator().$(e))return t/n},l.errors=function(){var e=l.multiply(new b.Z([1,0],"s")),t=e.multiply(new b.Z([1,0],"s"));return{Ks:(0,w.NM)(l.lim(0)),Kr:(0,w.NM)(e.lim(0)),Ka:(0,w.NM)(t.lim(0))}},l.amplitude=function(e){var t=new h.Z(0,e),n=l.numerator(),r=l.denominator();return(n instanceof v.Z?Math.abs(n.getA()):n.$(t).magnitude())/(r instanceof v.Z?Math.abs(r.getB()):r.$(t).magnitude())},l.phase=function(e){var t=new h.Z(0,e),n=l.numerator(),r=l.denominator(),o=n instanceof v.Z?n.phase(e):n.$(t).phase(),a=r instanceof v.Z?r.phase(e):r.$(t).phase();return+a===a&&+o===o?o-a:(o instanceof Function?o(e):o)-(a instanceof Function?a(e):a)},l.nyquist=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"complex";return"complex"===t?l.$(new h.Z(0,e)):n.PolarToComplex(l.amplitude(e),l.phase(e))},l.bode=function(e){return 20*Math.log10(l.amplitude(e))},l.rootLocus=function(){var e=(0,o.Z)(p().mark((function e(t,n,r){var o,a,s,i,u,c,f,v,d,Z,b,g,m,w,y,_,z,N,A,P,R,$,C,S=arguments;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=S.length>3&&void 0!==S[3]?S[3]:1e3,a=(n-t)/o,s=l.getA(),i=l.getB(),u=s.length-1,c=i.length-1,f=[],v=[],d=100/(n-t),Z=x.GetAlgebriteTerm,b=t;case 8:if(!(b<=n)){e.next=18;break}if(g=null,m="",u<=c){for(g=Array(c),w=c-u,y=0;y<w;g[y]=i[y],m+=Z(c-y,g[y],y,l.symbol),y++);for(_=0,z=w;_<=u;g[z]=i[z]+b*s[_],m+=Z(u-_,g[z],z,l.symbol),_++,z++);}else{for(g=Array(u),N=u-c,A=0;A<N;g[A]=i[A],m+=Z(u-A,g[A],A,l.symbol),A++);for(P=0,R=N;P<=c;g[R]=i[R]+b*s[P],m+=Z(c-P,g[R],R,l.symbol),P++,R++);}return $=new x(m).solve(),e.next=14,(0,M.tV)(r,b*d);case 14:for(C=0;C<$.length;C++)$[C]instanceof h.Z?(f.push($[C].real()),v.push($[C].imaginary())):(f.push($[C]),v.push(0));case 15:b+=a,e.next=8;break;case 18:return e.next=20,(0,M.tV)(r,100);case 20:return e.abrupt("return",[f,v]);case 21:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),l.poles=(0,r.Z)(d),l.zeros=(0,r.Z)(c),!l.a instanceof Array&&(l.a=[l.a]),1!==l.a.length||l.w_n||3===l.b.length&&l.b[l.b.length-1]===l.a[0]&&(l.w_n=l.a[0],l.zeta=l.b[1]/(2*l.w_n),l.timeConstant=(0,w.NM)(1/(l.zeta*l.w_n)),l.t_settle=4*l.timeConstant,u&&u.w_d?l.w_d=u.w_d:l.zeta>=-1&&l.zeta<=1&&(l.w_d=l.w_n*Math.pow(1-Math.pow(l.zeta,2),.5)),l.order=2,l.setRoots([],n.omegaZetaPoles(l.w_n,l.zeta))),l.order||(l.order=a instanceof Array?a.length-1:1),u.overshoot&&u.t_rise){var N=[u.overshoot,u.t_rise];l.overshoot=N[0],l.t_rise=N[1]}else{var A=l.getDampingSystemCharasteristics();A&&(l.overshoot=A.overshoot,l.t_rise=A.t_rise)}return l}return(0,a.Z)(n)}(d.Z);_.Specials={$1:function(e,t){return new _([e],[1,t]).setRoots([],[-t]).setOrder(1)},$2:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t instanceof h.Z?t.conjugate:t,r=t instanceof f.Z?t.add(n):n instanceof f.Z?n.add(t):n+t,o=t instanceof f.Z?t.multiply(n):n instanceof f.Z?n.multiply(t):n*t;return r instanceof h.Z&&r.isReal()&&(r=r.real()),o instanceof h.Z&&o.isReal()&&(o=o.real()),new _([e],[1,r instanceof f.Z?r.negation():-r,o]).setRoots([],[t,n]).setOrder(2)},$WnZ:function(e,t){return new _(null,null,{w_n:e,zeta:t})},$design:function(e,t){return new _(null,null,{overshoot:t,t_rise:e})}},_.omegaZetaPoles=function(e,t){if(Math.abs(t)>=1){var n=-t*e,r=e*Math.pow(t*t-1,.5);return[n+r,n-r]}var o=-t*e,a=e*Math.pow(1-t*t,.5);return[new h.Z(o,a),new h.Z(o,-a)]},_.sortRoots=function(e){return e.sort((function(e,t){return e instanceof f.Z?e.substract(t):t instanceof f.Z?t.substract(e):Math.abs(e)-Math.abs(t)}))},_.PolarToComplex=function(e,t){return new h.Z(e*Math.cos(t),e*Math.sin(t))}},19596:function(e,t,n){n.d(t,{RQ:function(){return p},mc:function(){return f}});var r=n(1413),o=n(43144),a=n(15671),s=n(60136),i=n(43668),l=n(75758),u=n(381),c=n(5540),p=(n(29695),function(e){(0,s.Z)(n,e);var t=(0,i.Z)(n);function n(e,o){var s,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"t",f=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return(0,a.Z)(this,n),o===+o&&o<0&&(o*=-1,e*=-1),(s=t.call(this,e,(0,r.Z)({symbol:p,type:"sin",b:o,teta:i},f))).copy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new n(s.a,s.b,s.teta,s.symbol,{dot:s.dot,plus:s.plus,previous:e?s.previous:null,input:s.input})},s.toExp=function(){var e=s.copy(),t=new c.Z(e.a/2,new u.Z(0,-e.b)),n=new c.Z(-e.a/2,new u.Z(0,e.b));return new u.Z(0,t.add(n))},s.valueAt=function(e){var t=l.Z.valueOf(s.a,e),n=l.Z.valueOf(s.b,e),r=l.Z.valueOf(s.teta,e);return t*Math.sin(n*e+r)},s}return(0,o.Z)(n)}(l.Z)),f=function(e){(0,s.Z)(n,e);var t=(0,i.Z)(n);function n(e,o){var s,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,p=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"t",f=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return(0,a.Z)(this,n),+o===o&&o<0&&(o*=-1),(s=t.call(this,e,(0,r.Z)({symbol:p,type:"cos",b:o,teta:i},f))).copy=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new n(s.a,s.b,s.teta,s.symbol,{dot:s.dot,plus:s.plus,previous:e?s.previous:null,input:s.input})},s.toExp=function(){var e=s.copy(),t=new c.Z(e.a/2,new u.Z(0,e.b)),n=new c.Z(e.a/2,new u.Z(0,-e.b));return t.add(n)},s.valueAt=function(e){var t=l.Z.valueOf(s.a,e),n=l.Z.valueOf(s.b,e),r=l.Z.valueOf(s.teta,e);return t*Math.cos(n*e+r)},s}return(0,o.Z)(n)}(l.Z)},78793:function(e,t,n){var r=n(1413),o=n(45987),a=n(72791),s=n(13967),i=n(57621),l=n(9585),u=n(20890),c=n(47924),p=n(39504),f=n(80184),h=["border","boxShadow","children","content","contentClass","contentSX","darkTitle","secondary","shadow","sx","title"],v={"& .MuiCardHeader-action":{mr:0}},d=(0,a.forwardRef)((function(e,t){var n=e.border,a=void 0===n||n,d=e.boxShadow,Z=e.children,b=e.content,g=void 0===b||b,m=e.contentClass,w=void 0===m?"":m,y=e.contentSX,x=void 0===y?{}:y,M=e.darkTitle,_=e.secondary,z=e.shadow,N=e.sx,A=void 0===N?{}:N,P=e.title,R=(0,o.Z)(e,h),$=(0,s.Z)();return(0,f.jsxs)(i.Z,(0,r.Z)((0,r.Z)({ref:t},R),{},{sx:(0,r.Z)({overflowY:"auto",border:a?"1px solid":"none",borderColor:$.palette.primary[200]+75,":hover":{boxShadow:d?z||"0 2px 14px 0 rgb(32 40 45 / 8%)":"inherit"}},A),children:[!M&&P&&(0,f.jsx)(l.Z,{sx:v,title:P,action:_}),M&&P&&(0,f.jsx)(l.Z,{sx:v,title:(0,f.jsx)(u.Z,{variant:"h3",children:P}),action:_}),P&&(0,f.jsx)(c.Z,{}),g&&(0,f.jsx)(p.Z,{sx:x,className:w,children:Z}),!g&&Z]}))}));t.Z=d}}]);
//# sourceMappingURL=761.5906a526.chunk.js.map