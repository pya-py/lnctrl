"use strict";(self.webpackChunklnctrl=self.webpackChunklnctrl||[]).push([[772],{94447:function(e,n,t){t(72791);var i=t(68286),r=t(80184);n.Z=function(e){var n=e.traces,t=e.title,s=(e.width,e.height),a=void 0===s?500:s;return(0,r.jsx)(i.Z,{style:{textAlign:"center"},data:n,layout:{margin:{t:30,l:30,r:20,b:30},xaxis:{rangemode:"tozero",zeroline:!0},yaxis:{rangemode:"tozero",zeroline:!0},height:a,title:t,hoverlabel:{align:"auto",boxmode:"overlay",font:{color:"#000000FF"}},legend:{orientation:"h"}}})}},52378:function(e,n,t){var i=t(70885),r=t(16346),s=t(91720),a=t(27247),c=t(85029),l=t(63787),o=t(61889),d=t(13400),h=t(53767),u=t(82550),x=t(64802),m=t(72791),Z=t(25498),p=t.n(Z),g=t(24250),f=t(37185),j=t(80184);n.Z=function(e){var n=e.capture,t=e.graphFileName,Z=e.formulaFileName,$=e.reset,P=e.update,w=e.toggle3DPlot,v=(0,m.useState)(!1),y=(0,i.Z)(v,2),k=y[0],S=y[1],_=(0,m.useState)(20),b=(0,i.Z)(_,2),C=b[0],R=b[1];return(0,m.useEffect)((function(){P({thickness:C/20+.1})}),[C,P]),(0,j.jsxs)(o.ZP,{sx:{direction:"rtl"},container:!0,direction:"row",children:[(0,j.jsxs)(o.ZP,{md:10,sm:8,xs:6,sx:{direction:"rtl"},item:!0,children:[w&&(0,j.jsx)(d.Z,{color:"secondary","aria-label":"capture graph",component:"span",onClick:function(){S(!k),w()},children:k?(0,j.jsx)(f.Z,{}):(0,j.jsx)(g.Z,{})})," ",(0,j.jsx)(d.Z,{color:"secondary","aria-label":"capture graph",component:"span",onClick:n,children:(0,j.jsx)(s.Z,{})}),(0,j.jsx)(d.Z,{color:"secondary","aria-label":"download graph",component:"span",onClick:function(){var e=document.getElementById("graphBox"),n=document.createElement("canvas");n.width=e.width,n.height=e.height;var i=n.getContext("2d");i.fillStyle="white",i.fillRect(0,0,e.width,e.height),i.drawImage(e,0,0),n.toBlob((function(e){(0,x.saveAs)(e,t)})),p()(document.getElementById("formulaBox")).then((function(e){e.toBlob((function(e){(0,x.saveAs)(e,Z)}))}))},children:(0,j.jsx)(r.Z,{})}),(0,j.jsx)(d.Z,{color:"secondary","aria-label":"capture graph",component:"span",onClick:$,children:(0,j.jsx)(a.Z,{})})]}),(0,j.jsx)(o.ZP,{md:2,sm:4,xs:6,item:!0,children:(0,j.jsxs)(h.Z,{spacing:2,direction:"row",sx:{mt:.5,direction:"ltr"},alignItems:"center",children:[(0,j.jsx)(c.Z,{}),(0,j.jsx)(u.ZP,{"aria-label":"Volume",value:C,onChange:function(e,n){return R(n)}}),(0,j.jsx)(l.Z,{})]})})]})}},93554:function(e,n,t){var i=t(61889),r=t(54905),s=t(63466),a=t(65773),c=(t(3174),t(72791)),l=t(80184);n.Z=function(e){var n=e.parameters,t=e.setters,o=e.labels,d=e.units;return(0,l.jsx)(c.Fragment,{children:n instanceof Array&&n.map((function(e,n){return(0,l.jsx)(i.ZP,{md:12,sm:4,xs:6,item:!0,children:(0,l.jsx)(r.Z,{onChange:function(e){return t[n](e.target.value)},value:e,sx:{width:"100%"},InputProps:{startAdornment:(0,l.jsx)(s.Z,{position:"left",children:(0,l.jsx)(a.Z,{children:o[n]})}),endAdornment:d[n]&&(0,l.jsx)(s.Z,{position:"right",children:(0,l.jsx)(a.Z,{children:d[n]})})}})})}))})}},85772:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var i=t(1413),r=t(15861),s=t(42982),a=t(70885),c=t(87757),l=t.n(c),o=t(71598),d=t(61889),h=(t(59416),t(65773)),u=t(83962),x=t(80184),m=function(){return(0,x.jsxs)(o.Z,{title:"\u062a\u0627\u0628\u0639 \u062a\u0628\u062f\u06cc\u0644 \u0645\u0631\u062a\u0628\u0647 \u06cc\u06a9",darkBorder:!0,sx:{direction:"rtl"},children:[(0,x.jsx)(d.ZP,{className:"lecture-text",item:!0,children:(0,x.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0 \u0627\u06cc\u0646 \u062a\u0648\u0627\u0628\u0639 \u062a\u0628\u062f\u06cc\u0644 \u0628\u0647 \u0641\u0631\u0645 \u0632\u06cc\u0631 \u0645\u06cc \u0628\u0627\u0634\u0646\u062f:"})}),(0,x.jsx)(d.ZP,{item:!0,children:(0,x.jsx)(h.Z,{children:"$$G(s) = \\frac{k}{s + a}$$"})}),(0,x.jsxs)(d.ZP,{className:"lecture-text",item:!0,children:[(0,x.jsx)("h1",{style:{marginTop:"5%",marginBottom:"3%"},children:"\xa0\u067e\u0627\u0633\u062e \u062d\u0627\u0644\u062a \u0645\u0627\u0646\u062f\u06af\u0627\u0631"}),(0,x.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0 \u062f\u06cc\u0627\u06af\u0631\u0627\u0645 \u06cc\u06a9 \u0633\u06cc\u0633\u062a\u0645 LTI \u0633\u0627\u062f\u0647 \u0628\u0635\u0648\u0631\u062a \u0632\u06cc\u0631 \u0645\u06cc \u0628\u0627\u0634\u062f:"})]}),(0,x.jsx)(d.ZP,{item:!0,children:(0,x.jsx)("img",{className:"lecture-image",src:u,alt:"\u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u062a\u0635\u0648\u06cc\u0631 \u0628\u0627 \u0645\u0634\u06a9\u0644 \u0645\u0648\u0627\u062c\u0647 \u0634\u062f"})})]})},Z=t(3174),p=t(72791),g=t(52378),f=t(94447),j=t(36151),$=t(93554),P=t(91923),w=["$$R = $$","$$C = $$","$$\\omega_{min} = $$","$$\\omega_{max} = $$"],v=["$$k\\Omega$$","$$\\mu F$$","$$Hz$$","$$Hz$$"],y=function(e){var n=e.R,t=e.C,i=e.$R,r=e.$C,s=e.w_min,a=e.w_max,c=e.$w_min,l=e.$w_max,h=e.phaseInRadianScale,u=e.setPhaseInRadianScale;return(0,x.jsx)(o.Z,{darkBorder:!0,title:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",sx:{direction:"ltr",textAlign:"right",height:"100%"},children:(0,x.jsxs)(d.ZP,{spacing:P.dv,container:!0,direction:"row",children:[(0,x.jsx)($.Z,{parameters:[n,t,s,a],setters:[i,r,c,l],labels:w,units:v}),(0,x.jsxs)(d.ZP,{xs:12,style:{paddingLeft:"3%"},container:!0,children:[(0,x.jsx)(d.ZP,{xs:6,sx:{p:1},item:!0,children:(0,x.jsx)(j.Z,{onClick:function(){return u(!1)},style:{width:"100%",textTransform:"none"},variant:h?"outlined":"contained",children:"\u062f\u0631\u062c\u0647"})}),(0,x.jsx)(d.ZP,{xs:6,sx:{p:1},item:!0,children:(0,x.jsx)(j.Z,{onClick:function(){return u("rad")},style:{width:"100%",textTransform:"none"},variant:h?"contained":"outlined",children:"\u0631\u0627\u062f\u06cc\u0627\u0646"})})]})]})})},k=t(64715),S=t(78793),_="jw",b="H",C=180/Math.PI,R=function(e,n,t,i,r){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"lines";return{x:e,y:n,z:r?Array(e.length).fill(0):null,line:{width:t},type:"scatter"+(r?"3d":""),mode:s,name:"$$".concat(i,"$$")}},A=function(e,n,t,i,r,s){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1e3,l=Z.ZP.pointify(e,n,t,c),o=(0,a.Z)(l,2),d=o[0],h=o[1];return R(d,h,i,r,s)},I=function(){var e=(0,p.useState)(.001),n=(0,a.Z)(e,2),t=n[0],c=n[1],u=(0,p.useState)(1),j=(0,a.Z)(u,2),$=j[0],w=j[1],v=(0,p.useState)(null),I=(0,a.Z)(v,2),H=I[0],B=I[1],z=(0,p.useState)(-5),F=(0,a.Z)(z,2),N=F[0],E=F[1],T=(0,p.useState)(5),q=(0,a.Z)(T,2),L=q[0],D=q[1],G=(0,p.useState)([]),M=(0,a.Z)(G,2),O=M[0],V=M[1],W=(0,p.useState)({whole:[],phase:[],amplitude:[],degreePhase:[]}),J=(0,a.Z)(W,2),K=J[0],Q=J[1],U=(0,p.useState)(null),X=(0,a.Z)(U,2),Y=X[0],ee=X[1],ne=(0,p.useState)(1),te=(0,a.Z)(ne,2),ie=te[0],re=te[1],se=(0,p.useState)(!1),ae=(0,a.Z)(se,2),ce=ae[0],le=ae[1],oe=(0,p.useState)(!1),de=(0,a.Z)(oe,2),he=de[0],ue=de[1],xe=(0,p.useState)(!0),me=(0,a.Z)(xe,2),Ze=me[0],pe=me[1],ge=(0,p.useState)(1e3),fe=(0,a.Z)(ge,2),je=fe[0];fe[1];(0,p.useEffect)((function(){(0,r.Z)(l().mark((function e(){var n,r,s,c,o,d,h,u,x,m,p,g,f,j,P,w;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=new k.Z([1],[+t*+$*1e4,1]),B(n),ee("$$"+n.label("H")+"$$"),r=!1,s={amplitude:Array(O.length),phase:Array(O.length),degreePhase:Array(O.length),whole:Array(O.length)},c=0;case 7:if(!(c<O.length)){e.next=23;break}return s.amplitude[c]=A(O[c].H_s.amplitude,+N,+L,O[c].thickness,O[c].legend,he,je),s.phase[c]=A(O[c].H_s.phase,+N,+L,O[c].thickness,O[c].legend,he,je),s.degreePhase[c]=(0,i.Z)({},s.phase[c]),s.degreePhase[c].y=s.degreePhase[c].y.map((function(e){return e*C})),e.next=14,Z.ZP.complexPointify(O[c].H_s.frequencyResponse,+N,+L,je);case 14:o=e.sent,d=(0,a.Z)(o,2),h=d[0],u=d[1],s.whole[c]=R(h,u,O[c].thickness,O[c].legend,he,"lines"),n.equals(O[c].H_s)&&(r=!0);case 20:c++,e.next=7;break;case 23:if(r){e.next=37;break}return e.next=26,Z.ZP.complexPointify(n.frequencyResponse,+N,+L,je);case 26:x=e.sent,m=(0,a.Z)(x,2),p=m[0],g=m[1],f=R(p,g,ie,"".concat(b,"(").concat(_,")"),he,"lines"),j=A(n.amplitude,+N,+L,ie,"".concat(b,"(").concat(_,")"),he,je),P=A(n.phase,+N,+L,ie,"".concat(b,"(").concat(_,")"),he,je),(w=(0,i.Z)({},P)).y=w.y.map((function(e){return e*C})),s.whole.push(f),s.phase.push(P),s.degreePhase.push(w),s.amplitude.push(j);case 37:Q(s),e.next=43;break;case 40:e.prev=40,e.t0=e.catch(0),console.log(e.t0);case 43:case"end":return e.stop()}}),e,null,[[0,40]])})))()}),[t,$,N,L,he,ie,O,je]),(0,p.useEffect)((function(){le(!1)}),[t,$]);return(0,x.jsxs)(S.Z,{children:[(0,x.jsx)(d.ZP,{item:!0,spacing:P.dv,children:(0,x.jsx)("h2",{className:"chapter-section-title",children:"\u067e\u0627\u0633\u062e \u0641\u0631\u06a9\u0627\u0646\u0633\u06cc \u0641\u06cc\u0644\u062a\u0631 RC"})}),(0,x.jsx)(d.ZP,{item:!0,spacing:P.dv,children:(0,x.jsxs)(d.ZP,{container:!0,direction:"column",spacing:1,children:[(0,x.jsx)(d.ZP,{style:{width:"100%",height:"100%",margin:"auto",direction:"ltr"},item:!0,children:(0,x.jsx)(m,{})}),(0,x.jsx)(d.ZP,{sx:{margin:"auto",width:"100%"},item:!0,children:(0,x.jsx)(o.Z,{sx:{direction:"ltr"},children:(0,x.jsxs)(d.ZP,{id:"formulaBox",sx:{margin:"auto"},container:!0,direction:"row",children:[O.map((function(e,n){var t="$$"+e.H_s.label("H",n+1)+"$$";return(0,x.jsx)(d.ZP,{style:{fontSize:"18px"},md:6,sm:12,item:!0,children:(0,x.jsx)(h.Z,{children:t})})})),!ce&&(0,x.jsx)(d.ZP,{style:{fontSize:"18px"},md:6,sm:12,children:(0,x.jsx)(h.Z,{children:Y})})]})})}),(0,x.jsxs)(d.ZP,{spacing:2,style:{width:"100%",height:"100%",margin:"auto",direction:"ltr"},container:!0,children:[(0,x.jsx)(d.ZP,{md:3,sm:12,xs:12,sx:{marginTop:"1%",width:"100%"},container:!0,children:(0,x.jsx)(d.ZP,{xs:12,children:(0,x.jsx)(y,{C:$,R:t,$C:function(e){e>=0&&w(e)},$R:function(e){e>=0&&c(e)},w_min:N,w_max:L,$w_min:E,$w_max:D,phaseInRadianScale:Ze,setPhaseInRadianScale:pe})})}),(0,x.jsxs)(d.ZP,{md:9,sm:12,xs:12,item:!0,children:[(0,x.jsx)(o.Z,{children:(0,x.jsx)(g.Z,{capture:function(){var e=(0,s.Z)(O);-1===e.findIndex((function(e){return e.R===+t&&e.C===+$}))&&(e.push({R:+t,C:+$,H_s:H,thickness:ie,legend:b+"_{"+(O.length+1).toString()}),V(e),le(!0))},formulaFileName:"Water Tank Level Equations _ "+(0,s.Z)(O.map((function(e){return e.legend}))).join()+".png",graphFileName:(0,s.Z)(O.map((function(e){return"".concat(e.legend,"{alpha=").concat(e.a,"_k=").concat(e.k,"_in=").concat(e.inputSignal?"ramp":"step","}")}))).join(", ")+".png",reset:function(){return V([])},update:function(e){return function(e){e&&re(e.thickness)}(e)},toggle3DPlot:function(){return ue(!he)}})}),(0,x.jsx)("hr",{}),(0,x.jsx)(d.ZP,{lg:12,md:12,sm:12,xs:12,item:!0,children:(0,x.jsx)(o.Z,{children:(0,x.jsx)(d.ZP,{lg:12,md:12,sm:12,xs:12,item:!0,children:(0,x.jsx)(f.Z,{title:"\u067e\u0627\u0633\u062e \u0641\u0631\u06a9\u0627\u0646\u0633\u06cc",traces:K.whole})})})})]}),(0,x.jsx)(d.ZP,{lg:12,md:12,sm:12,xs:12,item:!0,children:(0,x.jsx)(o.Z,{children:(0,x.jsxs)(d.ZP,{spacing:P.dv,direction:"row",container:!0,children:[(0,x.jsx)(d.ZP,{lg:6,md:6,sm:12,xs:12,item:!0,children:(0,x.jsx)(f.Z,{title:"\u0627\u0646\u062f\u0627\u0632\u0647",traces:K.amplitude})}),(0,x.jsx)(d.ZP,{lg:6,md:6,sm:12,xs:12,item:!0,children:(0,x.jsx)(f.Z,{title:"\u0641\u0627\u0632",traces:Ze?K.phase:K.degreePhase})})]})})})]})]})})]})}},59416:function(){},83962:function(e,n,t){e.exports=t.p+"static/media/rc_filter_circuit.293b9d9ec97dfe9e1e14.png"}}]);
//# sourceMappingURL=772.719d368b.chunk.js.map