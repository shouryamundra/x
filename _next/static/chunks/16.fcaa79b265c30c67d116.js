(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[16],{bMDe:function(e,t,n){"use strict";n.r(t);var i=n("rePB"),r=n("nKUr"),o=n("Oesx"),a=n.n(o),c=n("a6RD"),d=n.n(c),u=n("Evpv"),s=function(e,t){return t.find((function(t){return e.find((function(e){return e.id===t&&!e.minimized}))}))||""},h=n("ZMKu"),l=n("9Z7V"),f=n("m+kb"),m=n("q1tI"),b=n("gVB8");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(i.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=d()((function(){return n.e(15).then(n.bind(null,"Kg0h"))}),{loadableGenerated:{webpack:function(){return["Kg0h"]},modules:["@/components/System/WindowManager/Window"]}}),g=u.f+u.h*u.i;t.default=function(e){var t=e.loader,n=t.loader,i=t.loadedAppOptions,o=t.loaderOptions,c=o.width,d=o.height,w=e.bgColor,j=e.height,x=e.icon,v=e.id,y=e.launchElement,z=e.lockAspectRatio,M=e.maximized,E=e.minimized,k=e.name,P=e.taskbarElement,S=e.width,D=e.windowed,C=e.x,I=e.y,W=Object(m.useContext)(f.a),K=W.foreground,_=W.getState,A=W.saveState,B=W.session,N=B.foregroundId,R=B.stackOrder,H=Object(m.useContext)(l.a),J=H.processes,T=H.close,V=H.maximize,Z=H.minimize,q=H.position,F=H.restore,G=H.size,U=Object(m.useState)(!1),X=U[0],Y=U[1],L=_({id:v}),Q=L.x,$=L.y,ee=function(e,t){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(e===(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)&&t===n){var r=window.innerWidth,o=window.innerHeight-u.d;if(i){var a=Math.min(r,e)*(t/e);a>o?r=o/(t/e):o=a}return{height:Math.floor(Math.min(o,t)),width:Math.floor(Math.min(r,e))}}return{height:t,width:e}}(S,j,c,d,z),te=ee.height,ne=ee.width,ie=-Math.floor(ne/2)+.5*window.innerWidth,re=-Math.floor(te/2)+.45*window.innerHeight,oe={onMinimize:function(){return Z(v)},onMaximize:function(){return M?F(v,"maximized"):V(v)},onClose:function(){A({height:te,id:v,width:ne,x:Q?C:ie+C,y:$?I:re+I}),T(v)},onFocus:function(){return K(v)},onBlur:function(e){e.relatedTarget!==P&&K("")},updatePosition:q(v),zIndex:g+R.slice().reverse().indexOf(v),maximized:X,minimized:E,id:v,height:te,width:ne};return Object(m.useEffect)((function(){N===v&&E?K(s(J,R.filter((function(e){return e!==v})))):R.includes(v)||K(s(J,R))}),[N,v,E,J,R]),Object(m.useEffect)((function(){M?Y(!0):X&&setTimeout((function(){return Y(!1)}),u.a*u.b)}),[M]),Object(r.jsx)(h.b.article,p(p({className:a.a.animatedWindows,style:{zIndex:N===v?u.g:oe.zIndex,height:te,width:ne}},Object(b.d)({initialX:Q||ie,initialY:$||re,animation:(M&&E?"maxmin":M&&"maximized")||E&&"minimized"||"start",height:te,width:ne,x:C,y:I,taskbarElement:P,launchElement:y})),{},{children:D?Object(r.jsx)(O,p(p({icon:x,name:k,bgColor:w,lockAspectRatio:z,updateSize:G(v)},oe),{},{children:Object(r.jsx)(n,p(p({},i),oe))})):Object(r.jsx)(n,p(p({},i),oe))}),v)}}}]);