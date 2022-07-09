"use strict";(self.webpackChunklnctrl=self.webpackChunklnctrl||[]).push([[737],{93554:function(e,t,n){var r=n(61889),i=n(54905),s=n(63466),a=n(65773),c=n(72791),o=n(80184);t.Z=function(e){var t=e.parameters,n=e.setters,l=e.labels,u=e.units;return(0,o.jsx)(c.Fragment,{children:t instanceof Array&&t.map((function(e,t){return(0,o.jsx)(r.ZP,{md:12,sm:4,xs:6,item:!0,children:(0,o.jsx)(i.Z,{onChange:function(e){return n[t](e.target.value)},value:e,sx:{width:"100%"},InputProps:{startAdornment:(0,o.jsx)(s.Z,{position:"left",children:(0,o.jsx)(a.Z,{children:l[t]})}),endAdornment:u[t]&&(0,o.jsx)(s.Z,{position:"right",children:(0,o.jsx)(a.Z,{children:u[t]})})}})})}))})}},63970:function(e,t,n){n(72791);var r=n(68286),i=n(80184);t.Z=function(e){var t=e.traces,n=e.title,s=(e.width,e.height),a=void 0===s?500:s,c=e.logX;return(0,i.jsx)(r.Z,{style:{textAlign:"center"},data:t,layout:{margin:{t:30,l:30,r:20,b:30},xaxis:{rangemode:"tozero",zeroline:!0,type:c?"log":"dec"},yaxis:{rangemode:"tozero",zeroline:!0},height:a,title:n,hoverlabel:{align:"auto",boxmode:"overlay",font:{color:"#000000FF"}},legend:{orientation:"h"}}})}},29961:function(e,t,n){var r=n(70885),i=n(91720),s=n(27247),a=n(85029),c=n(63787),o=n(61889),l=n(13400),u=n(53767),d=n(82550),h=n(72791),x=n(24250),m=n(37185),v=n(80184);t.Z=function(e){var t=e.capture,n=e.reset,Z=e.update,p=e.toggle3DPlot,f=(0,h.useState)(!1),g=(0,r.Z)(f,2),j=g[0],$=g[1],w=(0,h.useState)(20),y=(0,r.Z)(w,2),P=y[0],b=y[1];return(0,h.useEffect)((function(){Z({thickness:P/20+.1})}),[P,Z]),(0,v.jsxs)(o.ZP,{sx:{direction:"rtl"},container:!0,direction:"row",children:[(0,v.jsxs)(o.ZP,{md:10,sm:8,xs:6,sx:{direction:"rtl"},item:!0,children:[p&&(0,v.jsx)(l.Z,{color:"secondary","aria-label":"capture graph",component:"span",onClick:function(){$(!j),p()},children:j?(0,v.jsx)(m.Z,{}):(0,v.jsx)(x.Z,{})}),t&&(0,v.jsx)(l.Z,{color:"secondary","aria-label":"capture graph",component:"span",onClick:t,children:(0,v.jsx)(i.Z,{})}),n&&(0,v.jsx)(l.Z,{color:"secondary","aria-label":"capture graph",component:"span",onClick:n,children:(0,v.jsx)(s.Z,{})})]}),(0,v.jsx)(o.ZP,{md:2,sm:4,xs:6,item:!0,children:(0,v.jsxs)(u.Z,{spacing:2,direction:"row",sx:{mt:.5,direction:"ltr"},alignItems:"center",children:[(0,v.jsx)(a.Z,{}),(0,v.jsx)(d.ZP,{"aria-label":"Volume",value:P,onChange:function(e,t){return b(t)}}),(0,v.jsx)(c.Z,{})]})})]})}},18737:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(15861),i=n(42982),s=n(70885),a=n(87757),c=n.n(a),o=n(71598),l=n(30830),u=n(72791),d=n(29961),h=n(61889),x=n(63970),m=n(65773),v=n(64715),Z=n(78793),p=n(91923),f=n(5913),g=n(93554),j=n(71479),$=n(80184),w=["$$Num = [$$","$$Den = [$$","$$\\omega_{min} = $$","$$\\omega_{max} = $$","$$N = $$"],y=["$$]$$","$$]$$","$$Hz$$","$$Hz$$",null],P=function(e){var t=e.rawNumerator,n=e.rawDenominator,r=e.$rawNumerator,i=e.$rawDenominator,s=e.w_min,a=e.w_max,c=e.$w_min,l=e.$w_max,u=e.N,d=e.$N,x=e.responseTime;return(0,$.jsx)(o.Z,{darkBorder:!0,title:"\u067e\u0627\u0631\u0627\u0645\u062a\u0631\u0647\u0627",sx:{direction:"ltr",textAlign:"right",height:"100%"},children:(0,$.jsxs)(h.ZP,{spacing:p.dv,container:!0,direction:"row",children:[(0,$.jsx)(g.Z,{parameters:[t,n,s,a,u],setters:[r,i,c,l,d],labels:w,units:y}),(0,$.jsx)("hr",{}),(0,$.jsx)(h.ZP,{xs:12,sx:{mt:1},item:!0,children:(0,$.jsx)(j.Z,{background:"lightcoral",id:"precvious_plots_progressbar"})}),(0,$.jsx)(h.ZP,{xs:12,sx:{mt:1},item:!0,children:(0,$.jsx)(j.Z,{id:"nyquist_progressbar"})}),x&&(0,$.jsx)(h.ZP,{xs:12,sx:{mt:1},item:!0,children:(0,$.jsxs)("p",{style:{textAlign:"center",color:"coral"},children:["\u0645\u062f\u062a \u0632\u0645\u0627\u0646 \u0639\u0645\u0644\u06cc\u0627\u062a: ",x]})})]})})},b="jw",k="H",S=function(e,t){for(var n=0,r=0;!t[t.length-1-n];n++);for(;!e[e.length-1-r];r++);var i=!t[t.length-1]&&r<n;return{sensitiveSystem:i,systemIsPainInTheA:i&&t.length>e.length+1&&t.length>2&&t.length-n>1}},z="",H="",_=function(){var e=(0,u.useState)("1"),t=(0,s.Z)(e,2),n=t[0],a=t[1],g=(0,u.useState)("1 1"),j=(0,s.Z)(g,2),w=j[0],y=j[1],_=(0,u.useState)([[1],[1,1]]),A=(0,s.Z)(_,2),V=A[0],C=A[1],T=(0,u.useState)(null),M=(0,s.Z)(T,2),D=M[0],N=M[1],I=(0,u.useState)(-10),B=(0,s.Z)(I,2),E=B[0],R=B[1],q=(0,u.useState)(10),F=(0,s.Z)(q,2),L=F[0],O=F[1],X=(0,u.useState)([]),Y=(0,s.Z)(X,2),G=Y[0],J=Y[1],K=(0,u.useState)([]),Q=(0,s.Z)(K,2),U=Q[0],W=Q[1],ee=(0,u.useState)(null),te=(0,s.Z)(ee,2),ne=te[0],re=te[1],ie=(0,u.useState)(1),se=(0,s.Z)(ie,2),ae=se[0],ce=se[1],oe=(0,u.useState)(!1),le=(0,s.Z)(oe,2),ue=le[0],de=le[1],he=(0,u.useState)(!1),xe=(0,s.Z)(he,2),me=xe[0],ve=xe[1],Ze=(0,u.useState)(1e3),pe=(0,s.Z)(Ze,2),fe=pe[0],ge=pe[1],je=(0,u.useState)(null),$e=(0,s.Z)(je,2),we=$e[0],ye=$e[1],Pe=(0,u.useState)("polar"),be=(0,s.Z)(Pe,2),ke=be[0],Se=be[1];(0,u.useEffect)((function(){(0,r.Z)(c().mark((function e(){var t,n,r,i,a,o,u,d,h,x,m,Z,p,g,j,$,w,y,P,z;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=document.getElementById("nyquist_progressbar"),n=document.getElementById("precvious_plots_progressbar"),r=(0,s.Z)(V,2),i=r[0],a=r[1],o=new v.Z(i,a),N(o),re("$$"+o.label("H")+"$$"),ye("\u062f\u0631\u062d\u0627\u0644 \u0631\u0633\u0645"),u=!1,d=new Date,h=Array(G.length),x=c().mark((function e(t){var r,i,a,d,x,m,v,Z,p;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=G[t].H_s.getA(),i=G[t].H_s.getB(),a=S(r,i),d=a.sensitiveSystem,x=a.systemIsPainInTheA,e.next=4,(0,f.tV)(n,100*t/G.length);case 4:return e.next=6,l.ZP.complexPointify((function(e){return G[t].H_s.nyquist(e,ke)}),+E,+L,"complex"===ke&&!d,+fe);case 6:m=e.sent,v=(0,s.Z)(m,2),Z=v[0],p=v[1],o.equals(G[t].H_s)&&(u=!0),h[t]=l.ZP.arrayToTrace(Z,p,G[t].thickness,G[t].legend,me,"polar"!==ke&&x?"markers":"lines");case 12:case"end":return e.stop()}}),e)})),m=0;case 12:if(!(m<G.length)){e.next=17;break}return e.delegateYield(x(m),"t0",14);case 14:m++,e.next=12;break;case 17:if(!h.length){e.next=20;break}return e.next=20,(0,f.tV)(n,100);case 20:if(u){e.next=36;break}return e.next=23,(0,f.tV)(t,0);case 23:return Z=S(i,a),p=Z.sensitiveSystem,g=Z.systemIsPainInTheA,e.next=26,l.ZP.complexPointify((function(e){return o.nyquist(e,ke)}),+E,+L,"complex"===ke&&!p,+fe,t);case 26:return j=e.sent,$=(0,s.Z)(j,2),w=$[0],y=$[1],P=l.ZP.arrayToTrace(w,y,ae,"".concat(k,"(").concat(b,")"),me,"polar"!==ke&&g?"markers":"lines"),h.push(P),z=new Date,ye((+z-+d)/1e3+" \u062b\u0627\u0646\u06cc\u0647"),e.next=36,(0,f.tV)(t,100);case 36:W(h),e.next=42;break;case 39:e.prev=39,e.t1=e.catch(0),console.log(e.t1);case 42:case"end":return e.stop()}}),e,null,[[0,39]])})))()}),[V,E,L,ke,me,ae,G,fe]),(0,u.useEffect)((function(){if(n.trim()!==z||w.trim()!==H){var e=l.ZP.stringToArray(n),t=l.ZP.stringToArray(w);H=w,z=n,C([e,t])}}),[n,w]),(0,u.useEffect)((function(){de(!1)}),[n,w]);return(0,$.jsxs)(Z.Z,{children:[(0,$.jsx)(h.ZP,{item:!0,spacing:p.dv,children:(0,$.jsx)("h2",{className:"chapter-section-title",children:"\u0646\u0645\u0648\u062f\u0627\u0631 \u0646\u0627\u06cc\u06a9\u0648\u0626\u06cc\u0633\u062a"})}),(0,$.jsx)(h.ZP,{item:!0,spacing:p.dv,children:(0,$.jsxs)(h.ZP,{container:!0,direction:"column",spacing:1,children:[(0,$.jsx)(h.ZP,{sx:{margin:"auto",width:"100%"},item:!0,children:(0,$.jsx)(o.Z,{sx:{direction:"ltr"},children:(0,$.jsxs)(h.ZP,{id:"formulaBox",sx:{margin:"auto"},container:!0,direction:"row",children:[G.map((function(e,t){var n="$$"+e.H_s.label("H",t+1)+"$$";return(0,$.jsx)(h.ZP,{style:{fontSize:"18px"},md:6,sm:12,item:!0,children:(0,$.jsx)(m.Z,{children:n})})})),!ue&&(0,$.jsx)(h.ZP,{style:{fontSize:"18px"},md:6,sm:12,children:(0,$.jsx)(m.Z,{children:ne})})]})})}),(0,$.jsxs)(h.ZP,{spacing:2,style:{width:"100%",height:"100%",margin:"auto",direction:"ltr"},container:!0,children:[(0,$.jsx)(h.ZP,{md:3,sm:12,xs:12,sx:{marginTop:"1%",width:"100%"},container:!0,children:(0,$.jsx)(h.ZP,{xs:12,children:(0,$.jsx)(P,{rawNumerator:n,rawDenominator:w,$rawNumerator:a,$rawDenominator:y,w_min:E,w_max:L,$w_min:R,$w_max:O,responseTime:we,N:fe,$N:ge,method:ke,changeMethod:Se})})}),(0,$.jsxs)(h.ZP,{md:9,sm:12,xs:12,item:!0,children:[(0,$.jsx)(o.Z,{children:(0,$.jsx)(d.Z,{capture:function(){var e=(0,i.Z)(G);-1===e.findIndex((function(e){return D.equals(e.H)}))&&(e.push({H_s:D,thickness:ae,legend:k+"_{"+(G.length+1).toString()+"}"}),J(e),de(!0))},reset:function(){return J([])},update:function(e){return function(e){e&&ce(e.thickness)}(e)},toggle3DPlot:function(){return ve(!me)}})}),(0,$.jsx)("hr",{}),(0,$.jsx)(h.ZP,{lg:12,md:12,sm:12,xs:12,item:!0,children:(0,$.jsx)(o.Z,{children:(0,$.jsx)(h.ZP,{lg:12,md:12,sm:12,xs:12,item:!0,children:(0,$.jsx)(x.Z,{title:"\u067e\u0627\u0633\u062e \u0641\u0631\u06a9\u0627\u0646\u0633\u06cc",traces:U})})})})]})]})]})})]})}},71479:function(e,t,n){var r=n(80184);t.Z=function(e){var t=e.id,n=e.color,i=void 0===n?"white":n,s=e.background,a=void 0===s?"lightgreen":s,c=e.borderRadius,o=void 0===c?"10px":c;return(0,r.jsx)("div",{style:{width:"0%",textAlign:"right",background:a,color:i,borderRadius:o,padding:"1%"},id:t})}},27247:function(e,t,n){var r=n(95318);t.Z=void 0;var i=r(n(45649)),s=n(80184),a=(0,i.default)((0,s.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=a},63787:function(e,t,n){var r=n(95318);t.Z=void 0;var i=r(n(45649)),s=n(80184),a=(0,i.default)((0,s.jsx)("path",{d:"M5 15H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"FilterCenterFocus");t.Z=a},85029:function(e,t,n){var r=n(95318);t.Z=void 0;var i=r(n(45649)),s=n(80184),a=(0,i.default)((0,s.jsx)("path",{d:"M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"}),"Fullscreen");t.Z=a},91720:function(e,t,n){var r=n(95318);t.Z=void 0;var i=r(n(45649)),s=n(80184),a=(0,i.default)([(0,s.jsx)("circle",{cx:"12",cy:"12",r:"3.2"},"0"),(0,s.jsx)("path",{d:"M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"},"1")],"PhotoCamera");t.Z=a},24250:function(e,t,n){var r=n(95318);t.Z=void 0;var i=r(n(45649)),s=n(80184),a=(0,i.default)((0,s.jsx)("path",{d:"M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"}),"ThreeDRotation");t.Z=a},37185:function(e,t,n){var r=n(95318);t.Z=void 0;var i=r(n(45649)),s=n(80184),a=(0,i.default)((0,s.jsx)("path",{d:"M12 7C6.48 7 2 9.24 2 12c0 2.24 2.94 4.13 7 4.77V20l4-4-4-4v2.73c-3.15-.56-5-1.9-5-2.73 0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58 0-2.76-4.48-5-10-5z"}),"ThreeSixty");t.Z=a},53767:function(e,t,n){var r=n(4942),i=n(63366),s=n(87462),a=n(72791),c=(n(52007),n(51184)),o=n(45682),l=n(78519),u=n(82466),d=n(47630),h=n(93736),x=n(80184),m=["component","direction","spacing","divider","children"];function v(e,t){var n=a.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,i){return e.push(r),i<n.length-1&&e.push(a.cloneElement(t,{key:"separator-".concat(i)})),e}),[])}var Z=(0,d.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,i=(0,s.Z)({display:"flex"},(0,c.k9)({theme:n},(0,c.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var a=(0,o.hB)(n),l=Object.keys(n.breakpoints.values).reduce((function(e,n){return null==t.spacing[n]&&null==t.direction[n]||(e[n]=!0),e}),{}),d=(0,c.P$)({values:t.direction,base:l}),h=(0,c.P$)({values:t.spacing,base:l});i=(0,u.Z)(i,(0,c.k9)({theme:n},h,(function(e,n){return{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((i=n?d[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i])),(0,o.NA)(a,e))};var i})))}return i})),p=a.forwardRef((function(e,t){var n=(0,h.Z)({props:e,name:"MuiStack"}),r=(0,l.Z)(n),a=r.component,c=void 0===a?"div":a,o=r.direction,u=void 0===o?"column":o,d=r.spacing,p=void 0===d?0:d,f=r.divider,g=r.children,j=(0,i.Z)(r,m),$={direction:u,spacing:p};return(0,x.jsx)(Z,(0,s.Z)({as:c,ownerState:$,ref:t},j,{children:f?v(g,f):g}))}));t.Z=p}}]);
//# sourceMappingURL=737.9fc712f8.chunk.js.map