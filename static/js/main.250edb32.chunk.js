(this.webpackJsonpjavascriptfullstack=this.webpackJsonpjavascriptfullstack||[]).push([[0],{49:function(e,t,n){e.exports=n(66)},54:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(20),l=n.n(c),i=(n(54),n(15)),o=n(72),u=n(73),s=function(){var e=Object(a.useState)("#/"),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement(o.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(o.a.Brand,{onClick:function(){return c("#/")},href:"#/",style:{marginLeft:"37px"}},"Fullstack"),r.a.createElement(o.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(o.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(u.a,{className:"mr-auto",activeKey:n,onSelect:function(e){return c(e)},defaultActiveKey:"#/"})))},m=n(32),d=n(17),g=n(75),p=n(77),f=(n(37),n(74)),E=n(68),h=n(76),b={type:"FeatureCollection",properties:{name:"DK2"},features:[{id:"DK2",type:"Feature",properties:{},geometry:{type:"Polygon",coordinates:[[[10.9423828125,55.416543608580064],[11.0467529296875,55.068932343778684],[10.810546875,54.7404787914159],[11.2445068359375,54.58797989384959],[11.8927001953125,54.463652645044796],[13.0462646484375,54.88608683754535],[15.287475585937498,54.930298209559496],[15.27099609375,55.363502833950776],[12.711181640625,55.229023057406344],[12.711181640625,55.50374985927514],[12.8759765625,55.6682913590041],[12.601318359374998,55.91227293006361],[12.645263671875,56.05056742320484],[12.50244140625,56.13330691237569],[11.4422607421875,56.32567522544464],[10.772094726562498,55.73638916286441],[10.9423828125,55.416543608580064]]]}}]},v=function(e){e.setZone;var t=e.feature,n=e.lat,a=e.lng,c=function(){return r.a.createElement(f.a,{data:b})};return"zones"===t?r.a.createElement(c,null):"point"===t?r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{position:[n,a]},r.a.createElement(h.a,null,"IM A POPUP"))):null};function y(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}var O=n(69),j=n(70),w=n(71),S=n(8),I={grid:{paddingLeft:0,paddingRight:0},row:{marginLeft:0,marginRight:0},col1:{paddingLeft:0,paddingRight:0,width:"30%"},col2:{paddingLeft:0,paddingRight:0},myPadding:{paddingLeft:15,paddingRight:15}},L=r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),r.a.createElement(p.a,{url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",attribution:"Tiles \xa9 Esri \u2014 Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community"})),U=function(){var e=[57.42630884997942,-1.7578125000000002],t=Object(a.useState)(e[0]),c=Object(i.a)(t,2),l=c[0],o=c[1],u=Object(a.useState)(e[1]),s=Object(i.a)(u,2),m=s[0],d=s[1],p=Object(a.useState)("zones"),f=Object(i.a)(p,2),E=f[0],h=(f[1],Object(a.useState)()),b=Object(i.a)(h,2),U=b[0],k=b[1],G={center:[].concat(e),zoom:4};Object(a.useEffect)((function(){delete S.Icon.Default.prototype._getIconUrl,S.Icon.Default.mergeOptions({iconRetinaUrl:n(60),iconUrl:n(61),shadowUrl:n(62)})}),[]);var P=function(){var e=Object(a.useState)(y()),t=Object(i.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){function e(){r(y())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n}(),z=P.height,R=(P.width,z-56);return r.a.createElement(r.a.Fragment,null,r.a.createElement(O.a,{fluid:!0},r.a.createElement(j.a,null,r.a.createElement(w.a,{style:I.col1,sm:"auto"},"HELLO PUT THINGS HERE"),r.a.createElement(w.a,{style:I.col2},r.a.createElement(g.a,Object.assign({style:{height:"".concat(R,"px"),width:"100%"},id:"MyMap",onClick:function(e){o(e.latlng.lat),d(e.latlng.lng)}},G),L," ",r.a.createElement(v,{zone:U,setZone:k,feature:E,lat:l,lng:m}))))))};var k=Object(d.f)((function(e){var t=e.history;return Object(a.useEffect)((function(){var e=t.listen((function(){window.scrollTo(0,0)}));return function(){e()}}),[]),null}));var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("h1",{style:{marginLeft:30}},"There is nothing here."))},P=function(){return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(m.a,null,r.a.createElement(k,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:U}),r.a.createElement(d.a,{path:"*",component:G}))))};n(65);l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.250edb32.chunk.js.map