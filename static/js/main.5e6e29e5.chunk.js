(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[0],{303:function(t,e,n){},304:function(t,e,n){},443:function(t,e,n){"use strict";n.r(e);var a=n(39),r=(n(0),n(12)),c=n.n(r),i=(n(303),n(304),n(511)),o=n(510),s=n(83),u=n(58),d=n.n(u),f=n(84),l=n(147),g=n(122),h=Object({NODE_ENV:"production",PUBLIC_URL:"https://shessafridi.github.io/admin-panel",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL||"http://localhost:3100/segments",p=new function t(){var e=this;Object(g.a)(this,t),this.segmentsObj={},this.getSlice=function(t){return e.segmentsObj[t].data},this.getSliceResource=function(t){return e.segmentsObj[t]},this.delete=function(t,n){var a=e.getSliceResource(n),r=a.data.findIndex((function(e){return e.id===t}));return a.data.splice(r,1),e.updateDb(a)},this.getSegmentBody=function(t){return JSON.stringify({SegmentDetailID:t.id,SegmentID:t.id,Title:t.title,Details:JSON.stringify(t.data)})},this.arrangeId=function(t){return t.data.forEach((function(t,e){return t.id=e+1}))},this.updateDb=function(t){return e.arrangeId(t),l.a.fetchJson("".concat(h,"/").concat(t.id),{method:"PUT",body:e.getSegmentBody(t)})},this.getSegments=Object(f.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==Object.keys(e.segmentsObj).length){t.next=15;break}return t.prev=1,console.log(h,"DEBUG"),t.next=5,l.a.fetchJson(h);case 5:return t.next=7,t.sent.json;case 7:t.sent.forEach((function(t){var n=t.Title.toLowerCase().replace(" ","");e.segmentsObj[n]={id:t.SegmentDetailID,title:t.Title,data:JSON.parse(t.Details)}})),console.log(e.segmentsObj),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,12]])})))},b=function(t,e){return p.getSlice(e).find((function(e){return e.id===t}))},j=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l.a.fetchJson;return{getList:function(){var t=Object(f.a)(d.a.mark((function t(e,n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.getSegments();case 2:return t.abrupt("return",{total:10,data:p.getSlice(e)});case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),getOne:function(t,e){return b(parseInt(e.id.toString()),t)},getMany:function(){var t=Object(f.a)(d.a.mark((function t(e,n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.getSegments();case 2:return t.abrupt("return",{data:p.getSlice(e)});case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),getManyReference:function(){var t=Object(f.a)(d.a.mark((function t(e,n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.getSegments();case 2:return t.abrupt("return",{total:10,data:p.getSlice(e)});case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),update:function(n,a){return e("".concat(t,"/").concat(n,"/").concat(a.id),{method:"PUT",body:JSON.stringify(a.data)}).then((function(t){return{data:t.json}}))},updateMany:function(n,a){return Promise.all(a.ids.map((function(r){return e("".concat(t,"/").concat(n,"/").concat(r),{method:"PUT",body:JSON.stringify(a.data)})}))).then((function(t){return{data:t.map((function(t){return t.json.id}))}}))},create:function(n,a){return e("".concat(t,"/").concat(n),{method:"POST",body:JSON.stringify(a.data)}).then((function(t){var e=t.json;return{data:Object(s.a)(Object(s.a)({},a.data),{},{id:e.id})}}))},delete:function(t,e){return console.log(e),p.delete(parseInt(e.id),t).then((function(t){return{data:t.json}}))},deleteMany:function(n,a){return Promise.all(a.ids.map((function(a){return e("".concat(t,"/").concat(n,"/").concat(a),{method:"DELETE"})}))).then((function(t){return{data:t.map((function(t){return t.json.id}))}}))}}},O=n(512),m=n(513),S=n(518),x=n(508),v=n(515),y=function(t){return Object(a.jsx)(O.a,Object(s.a)(Object(s.a)({pagination:!1},t),{},{children:Object(a.jsxs)(m.a,{children:[Object(a.jsx)(S.a,{source:"id",sortable:!1}),Object(a.jsx)(S.a,{source:"title",sortable:!1}),Object(a.jsx)(S.a,{source:"text",sortable:!1}),Object(a.jsx)(x.a,{basePath:"id"}),Object(a.jsx)(v.a,{basePath:"id"})]})}))},P=n(262),T=n.n(P);var D=function(){return Object(a.jsx)(i.a,{title:"Admin Panel",dataProvider:j(h),children:Object(a.jsx)(o.a,{icon:T.a,options:{label:"Headers"},name:"header",list:y})})},E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,521)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};c.a.render(Object(a.jsx)(D,{}),document.getElementById("root")),E()}},[[443,1,2]]]);
//# sourceMappingURL=main.5e6e29e5.chunk.js.map