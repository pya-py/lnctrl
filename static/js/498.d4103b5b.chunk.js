"use strict";(self.webpackChunklnctrl=self.webpackChunklnctrl||[]).push([[498],{14102:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(42982),i=n(70885),s=n(71598),a=n(61889),c=(n(59416),n(65773)),l=n(91923),o=n(5913),u=n(80184),x="$$ t_{pk} = \\frac{k\\pi}{\\omega_n \\sqrt{1 - \\zeta^2}} = \\frac{k\\pi}{\\omega_d} "+(0,o.f)(3)+" k = 1, 2, 3, ...\\\\ t_{rise} = t_p = \\frac{\\pi}{\\omega_d} $$",d=function(){return(0,u.jsxs)(s.Z,{title:"\u0637\u0631\u0627\u062d\u06cc \u0633\u06cc\u0633\u062a\u0645 \u0627\u0632 \u0637\u0631\u06cc\u0642 \u0645\u0634\u062e\u0635\u0627\u062a \u0645\u06cc\u0631\u0627\u06cc\u06cc",darkBorder:!0,sx:{direction:"rtl"},spacing:l.dv,children:[(0,u.jsx)(a.ZP,{className:"lecture-text",style:{fontSize:"20px"},item:!0,children:(0,u.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0 \u0632\u0645\u0627\u0646 \u0627\u0648\u062c (Rise Time)"})}),(0,u.jsx)(a.ZP,{style:{fontSize:"20px"},item:!0,children:(0,u.jsx)(c.Z,{children:x})}),(0,u.jsx)(a.ZP,{className:"lecture-text",style:{fontSize:"20px"},item:!0,children:(0,u.jsx)("p",{children:"\xa0 \xa0 \xa0 \xa0 \u0628\u0627\u0644\u0627\u0632\u062f\u06af\u06cc (Overshoot)"})}),(0,u.jsx)(a.ZP,{style:{fontSize:"20px"},item:!0,children:(0,u.jsx)(c.Z,{children:"$$M_p = e^{\\frac{-\\zeta \\pi}{\\sqrt{1 - \\zeta^2}}} = e ^ {-\\pi cot\\theta} \\\\\n    \\zeta = \\frac{-\\ln M_p}{\\sqrt{\\pi^2 + \\lgroup \\ln M_p \\rgroup ^ 2}} $$"})})]})},m=n(3174),h=n(72791),p=n(52378),Z=n(94447),f=n(65599),$=n(93554),j=["$$Num = [$$","$$Den = [$$","$$k_{min} = $$","$$k_{max} = $$"],g=["$$]$$","$$]$$",null,null],_=function(e){var t=e.rawNumerator,n=e.rawDenominator,r=e.$rawNumerator,i=e.$rawDenominator,c=e.k_min,l=e.k_max,o=e.$k_min,x=e.$k_max;return(0,u.jsx)(s.Z,{darkBorder:!0,title:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",sx:{direction:"ltr",textAlign:"right",height:"100%"},children:(0,u.jsxs)(a.ZP,{spacing:.6,container:!0,direction:"row",children:[(0,u.jsx)($.Z,{parameters:[t,n,c,l],setters:[r,i,o,x],labels:j,units:g}),(0,u.jsxs)(a.ZP,{sx:{mt:1},md:12,sm:4,xs:6,item:!0,children:[(0,u.jsx)("p",{style:{textAlign:"center"},children:"\u0645\u062d\u062f\u0648\u062f\u0647 \u06cc \u0628\u0647\u0631\u0647 \u0631\u0627 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u062f"}),(0,u.jsx)(f.Z,{point:{y:0,x:c,select:function(e){var t=e.x;t&&o(t)}},extra:{y:0,x:l,select:function(e){var t=e.x;t&&t>=c&&x(t)}},options:{pointSize:20,grids:10}})]})]})})},k=n(64715),P=(n(4758),n(78793)),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;return"$$ "+e.label("G",t)+" $$"},S=function(){var e=(0,h.useState)("1"),t=(0,i.Z)(e,2),n=t[0],o=t[1],x=(0,h.useState)("1 1"),f=(0,i.Z)(x,2),$=f[0],j=f[1],g=(0,h.useState)(0),S=(0,i.Z)(g,2),v=S[0],y=S[1],N=(0,h.useState)(5),z=(0,i.Z)(N,2),b=z[0],q=z[1],D=(0,h.useState)([]),G=(0,i.Z)(D,2),A=G[0],E=G[1],T=(0,h.useState)([]),B=(0,i.Z)(T,2),M=B[0],C=B[1],F=(0,h.useState)(1),I=(0,i.Z)(F,2),L=I[0],O=I[1],R=(0,h.useState)(!1),W=(0,i.Z)(R,2),H=W[0],J=W[1],K=(0,h.useState)(null),Q=(0,i.Z)(K,2),U=Q[0],V=Q[1],X=(0,h.useState)(""),Y=(0,i.Z)(X,2),ee=Y[0],te=(Y[1],(0,h.useState)(null)),ne=(0,i.Z)(te,2),re=ne[0],ie=ne[1];(0,h.useEffect)((function(){V(new k.Z(m.ZP.stringToArray(n),m.ZP.stringToArray($)))}),[n,$]);(0,h.useEffect)((function(){if(U){var e=U.rootLocus(v,b),t=(0,i.Z)(e,2),n=t[0],r=t[1];ie(w(U));var s=A.map((function(e,t){var n=m.ZP.pointify(e.G_s.$,Number(v),Number(b)),r=(0,i.Z)(n,2);return{x:r[0],y:r[1],line:{width:e.thickness},type:"scatter",mode:"markers",name:e.legend}}));-1===A.findIndex((function(e){return U.equals(e.G_s)}))&&s.push({x:n,y:r,line:{width:L},type:"scatter",mode:"markers",name:"c(t)"}),C(s)}}),[U,v,b,L,A]),(0,h.useEffect)((function(){J(!1)}),[n,$]);return(0,u.jsxs)(P.Z,{children:[(0,u.jsx)(a.ZP,{item:!0,spacing:l.dv,children:(0,u.jsxs)("h2",{className:"chapter-section-title",children:["\u0637\u0631\u0627\u062d\u06cc \u0633\u06cc\u0633\u062a\u0645 \u0628\u0627 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u0645\u0634\u062e\u0635\u0627\u062a \u0645\u06cc\u0631\u0627\u06cc\u06cc \u0633\u06cc\u0633\u062a\u0645"," "]})}),(0,u.jsx)(a.ZP,{item:!0,spacing:l.dv,children:(0,u.jsxs)(a.ZP,{container:!0,direction:"column",spacing:l.dv,children:[(0,u.jsx)(a.ZP,{style:{width:"100%",height:"100%",margin:"auto",direction:"ltr"},item:!0,children:(0,u.jsx)(d,{})}),(0,u.jsx)(a.ZP,{sx:{margin:"auto",width:"100%"},item:!0,children:(0,u.jsx)(s.Z,{sx:{direction:"ltr"},children:(0,u.jsxs)(a.ZP,{id:"formulaBox",sx:{margin:"auto"},container:!0,direction:"row",children:[A instanceof Array&&A.map((function(e,t){var n=w(e.G_s,t+1);return(0,u.jsx)(a.ZP,{style:{fontSize:"18px"},xs:12,item:!0,children:(0,u.jsx)(c.Z,{children:n})})})),!H&&(0,u.jsx)(a.ZP,{style:{fontSize:"18px"},xs:12,children:(0,u.jsx)(c.Z,{children:re})})]})})}),(0,u.jsxs)(a.ZP,{spacing:2,style:{width:"100%",height:"100%",margin:"auto",direction:"ltr"},container:!0,children:[(0,u.jsx)(a.ZP,{md:4,sm:12,xs:12,sx:{marginTop:"1%",width:"100%"},container:!0,children:(0,u.jsx)(a.ZP,{xs:12,children:(0,u.jsx)(_,{rawNumerator:n,rawDenominator:$,k_min:v,k_max:b,$rawNumerator:o,$rawDenominator:j,$k_min:y,$k_max:q})})}),(0,u.jsxs)(a.ZP,{md:8,sm:12,xs:12,item:!0,children:[(0,u.jsx)(s.Z,{children:(0,u.jsx)(p.Z,{capture:function(){var e=(0,r.Z)(A);-1===e.findIndex((function(e){return U.equals(e.G_s)}))&&(e.push({G_s:U,thickness:L,legend:"$$_{"+(A.length+1).toString()+"}$$"}),E(e),J(!0))},formulaFileName:"Water Tank Level Equations _ "+(0,r.Z)(A.map((function(e){return e.legend}))).join()+".png",graphFileName:(0,r.Z)(A.map((function(e){return"".concat(e.legend,"{rawNumerator=_rawDenominator=_k=").concat(e.k,"_in=").concat(e.inputSignal?"ramp":"step","}")}))).join(", ")+".png",reset:function(){return E([])},update:function(e){return function(e){e&&O(e.thickness)}(e)}})}),(0,u.jsx)("hr",{}),(0,u.jsx)(a.ZP,{lg:12,md:12,sm:12,xs:12,item:!0,children:(0,u.jsx)(s.Z,{children:(0,u.jsx)(Z.Z,{title:"\u067e\u0627\u0633\u062e \u067e\u0644\u0647",traces:M})})}),(0,u.jsx)("hr",{}),(0,u.jsx)(a.ZP,{lg:12,md:12,sm:12,xs:12,item:!0,children:ee&&(0,u.jsx)(ee.Explain,{})})]})]})]})})]})}}}]);
//# sourceMappingURL=498.d4103b5b.chunk.js.map