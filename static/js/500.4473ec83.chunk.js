"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[500],{241:function(e,r,n){n.d(r,{Z:function(){return s}});var t=n(501),a=n(6871),i={item:"filmList_item__tU9hF",link:"filmList_link__XanvP"},u=n(184),c=function(e){var r=e.items,n=(0,a.TH)(),c=r.map((function(e){var r=e.id,a=e.original_title,c=e.name;return(0,u.jsx)("li",{className:i.item,children:(0,u.jsx)(t.rU,{state:{from:n},to:"/movies/".concat(r),className:i.link,children:a||c})},r)}));return(0,u.jsx)("ul",{className:i.list,children:c})},s=c;c.propsDefault={items:[]}},8500:function(e,r,n){n.r(r),n.d(r,{default:function(){return _}});var t=n(907);var a=n(181);function i(e){return function(e){if(Array.isArray(e))return(0,t.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=n(1413),c=n(5861),s=n(885),o=n(7757),f=n.n(o),d=n(2791),l=n(8565),p=n(241),m="homePage_trending__ekaM2",v="homePage_title__FzVmN",h=n(184),_=function(){var e=(0,d.useState)({items:[],loading:!1,error:null}),r=(0,s.Z)(e,2),n=r[0],t=r[1];(0,d.useEffect)((function(){var e=function(){var e=(0,c.Z)(f().mark((function e(){var r,a;return f().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t((0,u.Z)((0,u.Z)({},n),{},{loading:!0,error:null})),e.prev=1,e.next=4,(0,l.vw)();case 4:r=e.sent,a=r.results,t((function(e){return(0,u.Z)((0,u.Z)({},e),{},{items:i(a),loading:!1,error:null})})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t((0,u.Z)((0,u.Z)({},n),{},{loading:!1,error:e.t0.message}));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var a=n.items,o=n.loading,_=n.error;return(0,h.jsxs)("div",{className:m,children:[(0,h.jsx)("h2",{className:v,children:"Trending today"}),o&&(0,h.jsx)("p",{children:"loading..."}),_&&(0,h.jsx)("p",{children:_}),Boolean(a.length)&&(0,h.jsx)(p.Z,{items:a})]})}},8565:function(e,r,n){n.d(r,{E3:function(){return f},IV:function(){return d},Mc:function(){return o},vw:function(){return s},wH:function(){return l}});var t=n(5861),a=n(7757),i=n.n(a),u=n(4569),c=n.n(u)().create({baseURL:"https://api.themoviedb.org/3"}),s=function(){var e=(0,t.Z)(i().mark((function e(){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/trending/all/day?",{params:{api_key:"dfa76d92e5d98a5a83f843d9aefc907e"}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"?"),{params:{api_key:"dfa76d92e5d98a5a83f843d9aefc907e"}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie?",{params:{api_key:"dfa76d92e5d98a5a83f843d9aefc907e",query:r}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits?"),{params:{api_key:"dfa76d92e5d98a5a83f843d9aefc907e"}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(r){var n,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews?"),{params:{api_key:"dfa76d92e5d98a5a83f843d9aefc907e"}});case 2:return n=e.sent,t=n.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=500.4473ec83.chunk.js.map