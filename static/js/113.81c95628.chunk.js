"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[113],{241:function(e,r,t){t.d(r,{Z:function(){return s}});var n=t(501),a=t(6871),u={item:"filmList_item__tU9hF",link:"filmList_link__XanvP"},c=t(184),i=function(e){var r=e.items,t=(0,a.TH)(),i=r.map((function(e){var r=e.id,a=e.original_title,i=e.name;return(0,c.jsx)("li",{className:u.item,children:(0,c.jsx)(n.rU,{state:{from:t},to:"/movies/".concat(r),className:u.link,children:a||i})},r)}));return(0,c.jsx)("ul",{className:u.list,children:i})},s=i;i.propsDefault={items:[]}},4113:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var n=t(1413),a=t(5861),u=t(885),c=t(7757),i=t.n(c),s=t(2791),o=t(501),f=t(8565),p=t(4942),d="moviesSearchForm_input__390H4",l="moviesSearchForm_btn__Q5mOU",m="moviesSearchForm_form__8bc-M",v=t(184),h=function(e){var r=e.getQuery,t=(0,s.useState)({q:""}),n=(0,u.Z)(t,2),a=n[0],c=n[1];return(0,v.jsxs)("form",{className:m,action:"",onSubmit:function(e){e.preventDefault(),r(a.q),c({q:""})},children:[(0,v.jsx)("input",{value:a.q,name:"q",onChange:function(e){var r=e.target,t=r.value,n=r.name;c((0,p.Z)({},n,t))},type:"text",className:d}),(0,v.jsx)("button",{className:l,type:"submit",children:"Search"})]})},_=t(241),x="moviesSearch_search__9UZwf",g=function(){var e=(0,o.lr)(),r=(0,u.Z)(e,2),t=r[0],c=r[1],p=(0,s.useState)({items:[],loading:!1,error:null}),d=(0,u.Z)(p,2),l=d[0],m=d[1],g=t.get("query");(0,s.useEffect)((function(){try{var e=function(){var e=(0,a.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g){e.next=2;break}return e.abrupt("return");case 2:return m((0,n.Z)((0,n.Z)({},l),{},{loading:!0,error:null})),e.next=5,(0,f.E3)(g);case 5:r=e.sent,t=r.results,m((function(e){return(0,n.Z)((0,n.Z)({},e),{},{items:t,loading:!1,error:null})}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(k){m((0,n.Z)((0,n.Z)({},l),{},{loading:!1,error:k.message}))}}),[g]);var w=l.items,y=l.loading,k=l.error;return(0,v.jsxs)("div",{className:x,children:[(0,v.jsx)(h,{getQuery:function(e){c({query:e})}}),y&&(0,v.jsx)("p",{children:"loading..."}),k&&(0,v.jsx)("p",{children:k}),(0,v.jsx)(_.Z,{items:w})]})},w={},y=function(){return(0,v.jsx)("div",{className:w.search,children:(0,v.jsx)(g,{})})}},8565:function(e,r,t){t.d(r,{E3:function(){return f},IV:function(){return p},Mc:function(){return o},vw:function(){return s},wH:function(){return d}});var n=t(5861),a=t(7757),u=t.n(a),c=t(4569),i=t.n(c)().create({baseURL:"https://api.themoviedb.org/3"}),s=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/all/day?",{params:{api_key:"dfa76d92e5d98a5a83f843d9aefc907e"}});case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r,"?"),{params:{api_key:"dfa76d92e5d98a5a83f843d9aefc907e"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie?",{params:{api_key:"dfa76d92e5d98a5a83f843d9aefc907e",query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r,"/credits?"),{params:{api_key:"dfa76d92e5d98a5a83f843d9aefc907e"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r,"/reviews?"),{params:{api_key:"dfa76d92e5d98a5a83f843d9aefc907e"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=113.81c95628.chunk.js.map