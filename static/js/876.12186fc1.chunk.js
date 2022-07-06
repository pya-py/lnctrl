"use strict";(self.webpackChunklnctrl=self.webpackChunklnctrl||[]).push([[876],{94447:function(e,n,t){t(72791);var r=t(68286),i=t(80184);n.Z=function(e){var n=e.traces,t=e.title,s=(e.width,e.height),a=void 0===s?500:s;return(0,i.jsx)(r.Z,{style:{textAlign:"center"},data:n,layout:{margin:{t:30,l:30,r:20,b:30},xaxis:{rangemode:"tozero",zeroline:!0},yaxis:{rangemode:"tozero",zeroline:!0},height:a,title:t,hoverlabel:{align:"auto",boxmode:"overlay",font:{color:"#000000FF"}},legend:{orientation:"h"}}})}},52378:function(e,n,t){var r=t(70885),i=t(16346),s=t(91720),a=t(27247),o=t(85029),c=t(63787),l=t(61889),d=t(13400),u=t(53767),h=t(82550),x=t(64802),m=t(72791),g=t(25498),p=t.n(g),Z=t(24250),f=t(37185),j=t(80184);n.Z=function(e){var n=e.capture,t=e.graphFileName,g=e.formulaFileName,$=e.reset,w=e.update,P=e.toggle3DPlot,v=(0,m.useState)(!1),y=(0,r.Z)(v,2),k=y[0],b=y[1],S=(0,m.useState)(20),_=(0,r.Z)(S,2),A=_[0],H=_[1];return(0,m.useEffect)((function(){w({thickness:A/20+.1})}),[A,w]),(0,j.jsxs)(l.ZP,{sx:{direction:"rtl"},container:!0,direction:"row",children:[(0,j.jsxs)(l.ZP,{md:10,sm:8,xs:6,sx:{direction:"rtl"},item:!0,children:[P&&(0,j.jsx)(d.Z,{color:"secondary","aria-label":"capture graph",component:"span",onClick:function(){b(!k),P()},children:k?(0,j.jsx)(f.Z,{}):(0,j.jsx)(Z.Z,{})})," ",(0,j.jsx)(d.Z,{color:"secondary","aria-label":"capture graph",component:"span",onClick:n,children:(0,j.jsx)(s.Z,{})}),(0,j.jsx)(d.Z,{color:"secondary","aria-label":"download graph",component:"span",onClick:function(){var e=document.getElementById("graphBox"),n=document.createElement("canvas");n.width=e.width,n.height=e.height;var r=n.getContext("2d");r.fillStyle="white",r.fillRect(0,0,e.width,e.height),r.drawImage(e,0,0),n.toBlob((function(e){(0,x.saveAs)(e,t)})),p()(document.getElementById("formulaBox")).then((function(e){e.toBlob((function(e){(0,x.saveAs)(e,g)}))}))},children:(0,j.jsx)(i.Z,{})}),(0,j.jsx)(d.Z,{color:"secondary","aria-label":"capture graph",component:"span",onClick:$,children:(0,j.jsx)(a.Z,{})})]}),(0,j.jsx)(l.ZP,{md:2,sm:4,xs:6,item:!0,children:(0,j.jsxs)(u.Z,{spacing:2,direction:"row",sx:{mt:.5,direction:"ltr"},alignItems:"center",children:[(0,j.jsx)(o.Z,{}),(0,j.jsx)(h.ZP,{"aria-label":"Volume",value:A,onChange:function(e,n){return H(n)}}),(0,j.jsx)(c.Z,{})]})})]})}},93554:function(e,n,t){var r=t(61889),i=t(54905),s=t(63466),a=t(65773),o=(t(3174),t(72791)),c=t(80184);n.Z=function(e){var n=e.parameters,t=e.setters,l=e.labels,d=e.units;return(0,c.jsx)(o.Fragment,{children:n instanceof Array&&n.map((function(e,n){return(0,c.jsx)(r.ZP,{md:12,sm:4,xs:6,item:!0,children:(0,c.jsx)(i.Z,{onChange:function(e){return t[n](e.target.value)},value:e,sx:{width:"100%"},InputProps:{startAdornment:(0,c.jsx)(s.Z,{position:"left",children:(0,c.jsx)(a.Z,{children:l[n]})}),endAdornment:d[n]&&(0,c.jsx)(s.Z,{position:"right",children:(0,c.jsx)(a.Z,{children:d[n]})})}})})}))})}},85876:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(1413),i=t(15861),s=t(42982),a=t(70885),o=t(87757),c=t.n(o),l=t(71598),d=t(3174),u=t(72791),h=t(52378),x=t(61889),m=t(94447),g=t(65773),p=t(36151),Z=t(93554),f=t(91923),j=t(71479),$=t(80184),w=["$$Num = [$$","$$Den = [$$","$$\\omega_{min} = $$","$$\\omega_{max} = $$"],P=["$$]$$","$$]$$","$$Hz$$","$$Hz$$"],v=function(e){var n=e.rawNumerator,t=e.rawDenominator,r=e.$rawNumerator,i=e.$rawDenominator,s=e.w_min,a=e.w_max,o=e.$w_min,c=e.$w_max,d=e.phaseInRadianScale,u=e.setPhaseInRadianScale,h=e.responseTime;return(0,$.jsx)(l.Z,{darkBorder:!0,title:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",sx:{direction:"ltr",textAlign:"right",height:"100%"},children:(0,$.jsxs)(x.ZP,{spacing:f.dv,container:!0,direction:"row",children:[(0,$.jsx)(Z.Z,{parameters:[n,t,s,a],setters:[r,i,o,c],labels:w,units:P}),(0,$.jsxs)(x.ZP,{xs:12,style:{paddingLeft:"3%"},container:!0,children:[(0,$.jsx)(x.ZP,{xs:6,sx:{p:1},item:!0,children:(0,$.jsx)(p.Z,{onClick:function(){return u(!1)},style:{width:"100%",textTransform:"none"},variant:d?"outlined":"contained",children:"\u062f\u0631\u062c\u0647"})}),(0,$.jsx)(x.ZP,{xs:6,sx:{p:1},item:!0,children:(0,$.jsx)(p.Z,{onClick:function(){return u("rad")},style:{width:"100%",textTransform:"none"},variant:d?"contained":"outlined",children:"\u0631\u0627\u062f\u06cc\u0627\u0646"})})]}),(0,$.jsx)(x.ZP,{xs:12,sx:{mt:1},item:!0,children:(0,$.jsx)(j.Z,{id:"fr_progressbar"})}),h&&(0,$.jsx)(x.ZP,{xs:12,sx:{mt:1},item:!0,children:(0,$.jsxs)("p",{style:{textAlign:"center",color:"coral"},children:["\u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u0639\u0645\u0644\u06cc\u0627\u062a: ",h," \u062b\u0627\u0646\u06cc\u0647"]})})]})})},y=t(64715),k=t(78793),b=t(5913),S="jw",_="H",A=180/Math.PI,H=function(e,n,t,r,i){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"lines";return{x:e,y:n,z:i?Array(e.length).fill(0):null,line:{width:t},type:"scatter"+(i?"3d":""),mode:s,name:"$$".concat(r,"$$")}},I=function(e,n,t,r,i,s){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:1e3,c=d.ZP.pointify(e,n,t,o),l=(0,a.Z)(c,2),u=l[0],h=l[1];return H(u,h,r,i,s)},C=function(){var e=(0,u.useState)("1"),n=(0,a.Z)(e,2),t=n[0],o=n[1],p=(0,u.useState)("1 1"),Z=(0,a.Z)(p,2),j=Z[0],w=Z[1],P=(0,u.useState)(null),C=(0,a.Z)(P,2),N=C[0],z=C[1],B=(0,u.useState)(-10),D=(0,a.Z)(B,2),R=D[0],E=D[1],T=(0,u.useState)(10),F=(0,a.Z)(T,2),q=F[0],V=F[1],L=(0,u.useState)([]),M=(0,a.Z)(L,2),W=M[0],G=M[1],J=(0,u.useState)({whole:[],phase:[],amplitude:[],degreePhase:[]}),K=(0,a.Z)(J,2),O=K[0],Q=K[1],U=(0,u.useState)(null),X=(0,a.Z)(U,2),Y=X[0],ee=X[1],ne=(0,u.useState)(1),te=(0,a.Z)(ne,2),re=te[0],ie=te[1],se=(0,u.useState)(!1),ae=(0,a.Z)(se,2),oe=ae[0],ce=ae[1],le=(0,u.useState)(!1),de=(0,a.Z)(le,2),ue=de[0],he=de[1],xe=(0,u.useState)(!0),me=(0,a.Z)(xe,2),ge=me[0],pe=me[1],Ze=(0,u.useState)(1e3),fe=(0,a.Z)(Ze,2),je=fe[0],$e=(fe[1],(0,u.useState)(null)),we=(0,a.Z)($e,2),Pe=we[0],ve=we[1];(0,u.useEffect)((function(){(0,i.Z)(c().mark((function e(){var n,i,s,o,l,u,h,x,m,g,p,Z,f,$,w,P,v,k,C,N,B;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n=d.ZP.stringToArray(t),i=d.ZP.stringToArray(j),s=document.getElementById("fr_progressbar"),o=new y.Z(n,i),z(o),ee("$$"+o.label("H")+"$$"),l=!1,u={amplitude:Array(W.length),phase:Array(W.length),degreePhase:Array(W.length),whole:Array(W.length)},h=new Date,x=0;case 10:if(!(x<W.length)){e.next=28;break}return u.amplitude[x]=I(W[x].H_s.amplitude,+R,+q,W[x].thickness,W[x].legend,ue,je),u.phase[x]=I(W[x].H_s.phase,+R,+q,W[x].thickness,W[x].legend,ue,je),u.degreePhase[x]=(0,r.Z)({},u.phase[x]),u.degreePhase[x].y=u.degreePhase[x].y.map((function(e){return e*A})),e.next=17,d.ZP.complexPointify(W[x].H_s.frequencyResponse,+R,+q,je);case 17:return m=e.sent,g=(0,a.Z)(m,2),p=g[0],Z=g[1],u.whole[x]=H(p,Z,W[x].thickness,W[x].legend,ue,"lines"),o.equals(W[x].H_s)&&(l=!0),e.next=25,(0,b.tV)(s,100*x/(W.length+1));case 25:x++,e.next=10;break;case 28:if(l){e.next=44;break}return e.next=31,d.ZP.complexPointify(o.frequencyResponse,+R,+q,je);case 31:f=e.sent,$=(0,a.Z)(f,2),w=$[0],P=$[1],v=H(w,P,re,"".concat(_,"(").concat(S,")"),ue,"lines"),k=I(o.amplitude,+R,+q,re,"".concat(_,"(").concat(S,")"),ue,je),C=I(o.phase,+R,+q,re,"".concat(_,"(").concat(S,")"),ue,je),(N=(0,r.Z)({},C)).y=N.y.map((function(e){return e*A})),u.whole.push(v),u.phase.push(C),u.degreePhase.push(N),u.amplitude.push(k),B=new Date,ve((+B-+h)/1e3);case 44:return e.next=46,(0,b.tV)(s,100);case 46:Q(u),e.next=52;break;case 49:e.prev=49,e.t0=e.catch(0),console.log(e.t0);case 52:case"end":return e.stop()}}),e,null,[[0,49]])})))()}),[t,j,R,q,ue,re,W,je]),(0,u.useEffect)((function(){ce(!1)}),[t,j]);return(0,$.jsxs)(k.Z,{children:[(0,$.jsx)(x.ZP,{item:!0,spacing:f.dv,children:(0,$.jsxs)("h2",{className:"chapter-section-title",children:[" ","\u067e\u0627\u0633\u062e \u0641\u0631\u06a9\u0627\u0646\u0633\u06cc \u0633\u06cc\u0633\u062a\u0645 \u0647\u0627"]})}),(0,$.jsx)(x.ZP,{item:!0,spacing:f.dv,children:(0,$.jsxs)(x.ZP,{container:!0,direction:"column",spacing:1,children:[(0,$.jsx)(x.ZP,{sx:{margin:"auto",width:"100%"},item:!0,children:(0,$.jsx)(l.Z,{sx:{direction:"ltr"},children:(0,$.jsxs)(x.ZP,{id:"formulaBox",sx:{margin:"auto"},container:!0,direction:"row",children:[W.map((function(e,n){var t="$$"+e.H_s.label("H",n+1)+"$$";return(0,$.jsx)(x.ZP,{style:{fontSize:"18px"},md:6,sm:12,item:!0,children:(0,$.jsx)(g.Z,{children:t})})})),!oe&&(0,$.jsx)(x.ZP,{style:{fontSize:"18px"},md:6,sm:12,children:(0,$.jsx)(g.Z,{children:Y})})]})})}),(0,$.jsxs)(x.ZP,{spacing:2,style:{width:"100%",height:"100%",margin:"auto",direction:"ltr"},container:!0,children:[(0,$.jsx)(x.ZP,{md:3,sm:12,xs:12,sx:{marginTop:"1%",width:"100%"},container:!0,children:(0,$.jsx)(x.ZP,{xs:12,children:(0,$.jsx)(v,{rawNumerator:t,rawDenominator:j,$rawNumerator:o,$rawDenominator:w,w_min:R,w_max:q,$w_min:E,$w_max:V,phaseInRadianScale:ge,setPhaseInRadianScale:pe,responseTime:Pe})})}),(0,$.jsxs)(x.ZP,{md:9,sm:12,xs:12,item:!0,children:[(0,$.jsx)(l.Z,{children:(0,$.jsx)(h.Z,{capture:function(){var e=(0,s.Z)(W);-1===e.findIndex((function(e){return N.equals(e.H)}))&&(e.push({H_s:N,thickness:re,legend:_+"_{"+(W.length+1).toString()+"}"}),G(e),ce(!0),console.log(e))},formulaFileName:"Water Tank Level Equations _ "+(0,s.Z)(W.map((function(e){return e.legend}))).join()+".png",graphFileName:(0,s.Z)(W.map((function(e){return"".concat(e.legend,"{alpha=").concat(e.a,"_k=").concat(e.k,"_in=").concat(e.inputSignal?"ramp":"step","}")}))).join(", ")+".png",reset:function(){return G([])},update:function(e){return function(e){e&&ie(e.thickness)}(e)},toggle3DPlot:function(){return he(!ue)}})}),(0,$.jsx)("hr",{}),(0,$.jsx)(x.ZP,{lg:12,md:12,sm:12,xs:12,item:!0,children:(0,$.jsx)(l.Z,{children:(0,$.jsx)(x.ZP,{lg:12,md:12,sm:12,xs:12,item:!0,children:(0,$.jsx)(m.Z,{title:"\u067e\u0627\u0633\u062e \u0641\u0631\u06a9\u0627\u0646\u0633\u06cc",traces:O.whole})})})})]}),(0,$.jsx)(x.ZP,{lg:12,md:12,sm:12,xs:12,item:!0,children:(0,$.jsx)(l.Z,{children:(0,$.jsxs)(x.ZP,{spacing:f.dv,direction:"row",container:!0,children:[(0,$.jsx)(x.ZP,{lg:6,md:6,sm:12,xs:12,item:!0,children:(0,$.jsx)(m.Z,{title:"\u0627\u0646\u062f\u0627\u0632\u0647",traces:O.amplitude})}),(0,$.jsx)(x.ZP,{lg:6,md:6,sm:12,xs:12,item:!0,children:(0,$.jsx)(m.Z,{title:"\u0641\u0627\u0632",traces:ge?O.phase:O.degreePhase})})]})})})]})]})})]})}},71479:function(e,n,t){var r=t(80184);n.Z=function(e){var n=e.id,t=e.color,i=void 0===t?"white":t,s=e.background,a=void 0===s?"lightgreen":s,o=e.borderRadius,c=void 0===o?"10px":o;return(0,r.jsx)("div",{style:{width:"0%",textAlign:"right",background:a,color:i,borderRadius:c,padding:"1%"},id:n})}}}]);
//# sourceMappingURL=876.12186fc1.chunk.js.map