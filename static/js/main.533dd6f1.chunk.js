(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[0],{351:function(e,t,n){},352:function(e,t,n){},490:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(0),c=n(17),i=n.n(c),s=(n(351),n(352),n(576)),o=n(575),u=n(21),l=n(24),d=n.n(l),j=n(45),b=n(67),p=n(81),O=n(111),f="https://api.alhamdian.pk/api/SegmentDetail",h=Object({NODE_ENV:"production",PUBLIC_URL:"https://shessafridi.github.io/admin-panel",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://api.alhamdian.pk/api/SegmentDetail"}).REACT_APP_AUTH_URL||"https://api.alhamdian.pk/api/login",x=Object({NODE_ENV:"production",PUBLIC_URL:"https://shessafridi.github.io/admin-panel",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://api.alhamdian.pk/api/SegmentDetail"}).REACT_APP_FILE_UPLOAD_URL||"https://api.nisafoundation.org/api/SegmentDetail/UploadFile",m=new function e(){var t=this;Object(b.a)(this,e),this.uploadAllFiles=function(e){return console.log(e),Promise.all(e.map((function(e){return t.uploadFile(e)}))).then((function(e){return e.map((function(e){return e.body}))}))},this.uploadFile=function(e){var t=new FormData;return t.append("formFile",e,e.name),O.a.fetchJson(x,{method:"POST",body:t})}},g=new(function(){function e(){var t=this;Object(b.a)(this,e),this.segmentsObj={},this._arrangeId=function(e){return e.data.forEach((function(e,t){return e.id=t+1}))},this._updateDb=function(e){return t._arrangeId(e),O.a.fetchJson("".concat(f,"/").concat(e.id),{method:"PUT",headers:t._getHttpHeaders(),body:t._getSegmentBody(e)})},this._getSegmentBody=function(e){return JSON.stringify({SegmentDetailID:e.id,SegmentID:e.id,Title:e.title,Details:JSON.stringify(e.data)})},this._uploadImagesIfExist=function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.imageUpload.rawFile){e.next=3;break}return e.next=3,m.uploadFile(t.imageUpload.rawFile).then((function(e){return delete t.imageUpload,t.imageUrl=e.body.replace(/"/g,"")}));case 3:if(!t.imageUpload||!Array.isArray(t.imageUpload)){e.next=6;break}return e.next=6,m.uploadAllFiles(t.imageUpload.map((function(e){return e.rawFile}))).then((function(e){return delete t.imageUpload,t.imageUrl=e.map((function(e){return e.replace(/"/g,"")}))}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.create=function(){var e=Object(j.a)(d.a.mark((function e(n,a){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getSlice(a),n.id=r.data.length+1,r.data.push(n),e.next=5,t._uploadImagesIfExist(n);case 5:return e.abrupt("return",t._updateDb(r).then((function(){return{data:Object(u.a)(Object(u.a)({},n),{},{id:n.id})}})));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.getSliceData=function(e){return t.segmentsObj[e].data},this.getSlice=function(e){return t.segmentsObj[e]},this.update=function(){var e=Object(j.a)(d.a.mark((function e(n,a){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.getSlice(a),c=r.data.findIndex((function(e){return e.id===n.id})),r.data[c]=n,e.next=5,t._uploadImagesIfExist(n);case 5:return e.abrupt("return",t._updateDb(r).then((function(){return{data:Object(u.a)(Object(u.a)({},n),{},{id:n.id})}})));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.delete=function(e,n){var a=t.getSlice(n),r=a.data.findIndex((function(t){return t.id===e})),c=a.data.splice(r,1);return t._updateDb(a).then((function(){return{data:c[0]}}))},this.getSegments=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==Object.keys(t.segmentsObj).length){e.next=14;break}return e.prev=1,e.next=4,O.a.fetchJson(f);case 4:return e.next=6,e.sent.json;case 6:e.sent.forEach((function(e){var n=e.Title.toLowerCase().replace(" ","");t.segmentsObj[n]={id:e.SegmentDetailID,title:e.Title,data:JSON.parse(e.Details)}})),console.log(t.segmentsObj),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))}return Object(p.a)(e,[{key:"_getHttpHeaders",value:function(){var e=localStorage.getItem("auth");return e?new Headers({"Content-Type":"application/json",Authorization:"Bearer "+e}):new Headers({"Content-Type":"application/json"})}}]),e}()),v=function(e,t){return g.getSliceData(t).find((function(t){return t.id===e}))},S=n(29),w=n(491),y=n(577),_=n(578),T=n(566),k=n(567),I=n(583),P=function(e){var t=e.children,n=e.padding;return Object(a.jsx)("div",{style:{padding:n},children:t})},E=function(e){var t=e,n=t.resource[0].toUpperCase()+t.resource.slice(1),r=Object(S.a)(),c=Object(w.a)(r.breakpoints.down("sm"));return Object(a.jsxs)(P,{padding:"10px",children:[Object(a.jsxs)("h2",{children:[n," List"]}),Object(a.jsx)(y.a,Object(u.a)(Object(u.a)({pagination:!1},e),{},{children:Object(a.jsxs)(_.a,{style:{overflowY:"hidden",overflowX:"scroll"},children:[Object(a.jsx)(T.a,{source:"id",sortable:!1}),Object(a.jsx)(T.a,{source:"title",sortable:!1}),!c&&Object(a.jsx)(T.a,{source:"text",sortable:!1}),Object(a.jsx)(k.a,{}),Object(a.jsx)(I.a,{})]})}))]})},C=n(311),A=n(569),U=n(570),D={iconColor:A.a.A700,textColor:A.a.A700},L=Object(C.a)({palette:{primary:{main:A.a[500]},secondary:{main:U.a[600]}},overrides:{MuiToolbar:{dense:{minHeight:"55px"}},MuiListItemIcon:{root:{color:A.a[300]}},MuiMenuItem:{root:{textTransform:"uppercase",fontSize:"14px",fontWeight:"bold",marginTop:"8px",paddingTop:"14px",paddingBottom:"14px"}},MuiAppBar:{colorSecondary:{color:"white",backgroundColor:A.a[500]}}}}),F=n(589),R=n(590),H=n(586),W=n(579),B=n(574),N=n(209),M=n(286),J=n.n(M),q=n(15),K=Object(q.j)((function(e){return Object(a.jsx)(N.a,{color:"primary",onClick:e.history.goBack,children:Object(a.jsx)(J.a,{})})})),Y=function(e){return Object(a.jsxs)(P,{padding:"10px",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(K,{}),Object(a.jsx)("h2",{style:{marginLeft:"18px"},children:"Add a new Header"})]}),Object(a.jsx)(F.a,Object(u.a)(Object(u.a)({title:"Add a new header"},e),{},{children:Object(a.jsxs)(R.a,{margin:"normal",redirect:"list",children:[Object(a.jsx)(H.a,{required:!0,source:"title"}),Object(a.jsx)(W.a,{accept:"image/*",source:"imageUpload",children:Object(a.jsx)(B.a,{source:"src",title:"title"})}),Object(a.jsx)(H.a,{rows:6,required:!0,multiline:!0,source:"text"})]})}))]})},V=n(582),z=function(e){return Object(a.jsxs)(P,{padding:"10px",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(K,{}),Object(a.jsx)("h2",{style:{marginLeft:"18px",marginBottom:"30px"},children:"Edit Header"})]}),Object(a.jsx)(V.a,Object(u.a)(Object(u.a)({},e),{},{children:Object(a.jsxs)(R.a,{margin:"normal",redirect:"list",children:[Object(a.jsx)(H.a,{disabled:!0,source:"id"}),Object(a.jsx)(H.a,{required:!0,source:"title"}),Object(a.jsx)(B.a,{source:"imageUrl",label:"Image"}),Object(a.jsx)(W.a,{accept:"image/*",source:"imageUpload",children:Object(a.jsx)(B.a,{source:"src",title:"title"})}),Object(a.jsx)(H.a,{rows:6,required:!0,multiline:!0,source:"text"})]})}))]})},X=function(){return Object(a.jsx)(P,{padding:"10px",children:Object(a.jsx)("h1",{children:"Welcome to the dashboard"})})},G=function e(t,n){Object(b.a)(this,e),this.UsernameOrEmail=t,this.Password=n},Q=new function e(){var t=this;Object(b.a)(this,e),this.currentUser=null,this.login=function(){var e=Object(j.a)(d.a.mark((function e(n,a){var r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.fetchJson(h,{method:"POST",body:JSON.stringify(new G(n,a)),headers:new Headers({"Content-Type":"application/json"})});case 2:if(!((r=e.sent).status<200||r.status>=300)&&r.json.Successful){e.next=5;break}throw new Error("".concat(r.status));case 5:return c=r.json.Response,t.currentUser=c,e.abrupt("return",c.access_token);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},Z={login:function(){var e=Object(j.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.username,a=t.password,e.abrupt("return",Q.login(n,a).then((function(e){localStorage.setItem("auth",e)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logout:function(e){return localStorage.removeItem("auth"),Promise.resolve()},checkAuth:function(e){return localStorage.getItem("auth")?Promise.resolve():Promise.reject()},checkError:function(e){return Promise.resolve()},getPermissions:function(e){return Promise.resolve()}},$=n(168),ee=n(572),te=n(588),ne=n(208),ae=n(591),re=n(294),ce=n.n(re),ie=n(292),se=n.n(ie),oe=n(291),ue=n.n(oe),le=n(293),de=n.n(le),je=n(8),be=function(e){return Object(a.jsx)($.a,Object(u.a)(Object(u.a)({},e),{},{children:Object(a.jsx)(ee.a,{disabled:e.saving&&e.invalid})}))},pe=function(e){var t=r.useRef(),n=Object(je.f)((function(e){return e.admin.ui.sidebarOpen}));return r.useEffect((function(){setTimeout((function(){var e;return null===(e=t.current)||void 0===e?void 0:e.updateIndicator()}),220)}),[n]),"1"!==e.id?Object(a.jsx)(q.a,{to:"/".concat(e.resource,"/1")}):Object(a.jsxs)(P,{padding:"10px",children:[Object(a.jsx)("div",{children:Object(a.jsx)("h2",{style:{marginLeft:"18px",marginBottom:"30px"},children:"Footer"})}),Object(a.jsx)(V.a,Object(u.a)(Object(u.a)({},e),{},{children:Object(a.jsxs)(te.a,{margin:"normal",tabs:Object(a.jsx)(ne.a,{action:t,centered:!0}),redirect:!1,toolbar:Object(a.jsx)(be,{}),children:[Object(a.jsx)(ae.a,{icon:Object(a.jsx)(ue.a,{}),label:"About",children:Object(a.jsx)(H.a,{multiline:!0,rows:8,label:"About Text",fullWidth:!0,source:"about.aboutUs"})}),Object(a.jsxs)(ae.a,{icon:Object(a.jsx)(se.a,{}),label:"Contact",children:[Object(a.jsx)(H.a,{label:"Address",fullWidth:!0,source:"contact.address"}),Object(a.jsx)(H.a,{label:"Phone",fullWidth:!0,source:"contact.phone"}),Object(a.jsx)(H.a,{label:"Email",fullWidth:!0,source:"contact.email"})]}),Object(a.jsxs)(ae.a,{icon:Object(a.jsx)(de.a,{}),label:"Social",children:[Object(a.jsx)(H.a,{label:"Facebook",fullWidth:!0,source:"social.facebook"}),Object(a.jsx)(H.a,{label:"Instagram",fullWidth:!0,source:"social.instagram"}),Object(a.jsx)(H.a,{label:"Twitter",fullWidth:!0,source:"social.twitter"}),Object(a.jsx)(H.a,{label:"YouTube",fullWidth:!0,source:"social.youtube"})]}),Object(a.jsxs)(ae.a,{icon:Object(a.jsx)(ce.a,{}),label:"Stores",children:[Object(a.jsx)(H.a,{label:"App Store",fullWidth:!0,source:"stores.appStore"}),Object(a.jsx)(H.a,{label:"Play Store",fullWidth:!0,source:"stores.playStore"})]})]})}))]})},Oe=function(e){var t=e.resource;return Object(a.jsx)(q.a,{to:"".concat(t,"/1")})},fe=n(307),he=n.n(fe),xe=n(309),me=n.n(xe),ge=n(308),ve=n.n(ge),Se=n(93),we=n(310),ye=n(163),_e=n(164),Te=n.n(_e),ke=Object(Se.a)({active:{color:D.textColor,"& .MuiListItemIcon-root":{color:D.iconColor}}}),Ie=Object(q.j)((function(e){var t=e.onMenuClick,n=e.logout,c=Object(w.a)((function(e){return e.breakpoints.down("xs")})),i=Object(je.f)((function(e){return e.admin.ui.sidebarOpen})),s=Object(je.f)(we.b),o=ke();return Object(a.jsxs)("div",{children:[Object(a.jsx)(ye.a,{to:"/",primaryText:"Dashboard",activeClassName:o.active,leftIcon:Object(a.jsx)(Te.a,{}),onClick:t,sidebarIsOpen:i,exact:!0},"dashboard"),s.map((function(e){return Object(a.jsx)(ye.a,{to:"/".concat(e.name),primaryText:e.options&&e.options.label||e.name,activeClassName:o.active,leftIcon:Object(r.createElement)(e.icon),onClick:t,sidebarIsOpen:i},e.name)})),c&&n]})})),Pe=function(e){var t=e,n=t.resource[0].toUpperCase()+t.resource.slice(1),r=Object(S.a)(),c=Object(w.a)(r.breakpoints.down("sm"));return Object(a.jsxs)(P,{padding:"10px",children:[Object(a.jsxs)("h2",{children:[n," List"]}),Object(a.jsx)(y.a,Object(u.a)(Object(u.a)({pagination:!1},e),{},{children:Object(a.jsxs)(_.a,{style:{overflowY:"hidden",overflowX:"scroll"},children:[Object(a.jsx)(T.a,{source:"id",sortable:!1}),Object(a.jsx)(T.a,{source:"title",sortable:!1}),!c&&Object(a.jsx)(T.a,{source:"text",sortable:!1}),Object(a.jsx)(k.a,{}),Object(a.jsx)(I.a,{})]})}))]})},Ee=n(41),Ce=n(584),Ae=function(e){var t=r.useState(!1),n=Object(Ee.a)(t,2),c=n[0],i=n[1];return Object(a.jsxs)(P,{padding:"10px",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(K,{}),Object(a.jsx)("h2",{style:{marginLeft:"18px"},children:"Add a new Notice"})]}),Object(a.jsx)(F.a,Object(u.a)(Object(u.a)({title:"Add a new header"},e),{},{children:Object(a.jsxs)(R.a,{margin:"normal",redirect:"list",children:[Object(a.jsx)(H.a,{required:!0,source:"title"}),Object(a.jsx)(Ce.a,{onChange:function(e){return i(e)},label:"Enable Video",source:"videoOptions.enabled"}),c&&Object(a.jsx)(H.a,{label:"YouTube embed link",source:"videoOptions.ytLink"}),!c&&Object(a.jsx)(W.a,{accept:"image/*",source:"imageUpload",children:Object(a.jsx)(B.a,{source:"src",title:"title"})}),Object(a.jsx)(H.a,{rows:6,required:!0,multiline:!0,source:"text"})]})}))]})},Ue=n(98);var De=function(e){var t=function(e,t){var n=Object(Ue.a)({type:"getOne",resource:e,payload:{id:t}}).data;return null===n||void 0===n?void 0:n.videoOptions.enabled}(e.resource,e.id),n=r.useState(t),c=Object(Ee.a)(n,2),i=c[0],s=c[1];return r.useEffect((function(){s(t)}),[t]),Object(a.jsxs)(P,{padding:"10px",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)(K,{}),Object(a.jsx)("h2",{style:{marginLeft:"18px",marginBottom:"30px"},children:"Edit Notice"})]}),Object(a.jsx)(V.a,Object(u.a)(Object(u.a)({},e),{},{children:Object(a.jsxs)(R.a,{margin:"normal",redirect:"list",children:[Object(a.jsx)(H.a,{disabled:!0,source:"id"}),Object(a.jsx)(H.a,{required:!0,source:"title"}),Object(a.jsx)(B.a,{source:"imageUrl",label:"Image"}),Object(a.jsx)(Ce.a,{onChange:function(e){return s(e)},label:"Enable Video",source:"videoOptions.enabled"}),i&&Object(a.jsx)(H.a,{label:"YouTube embed link",source:"videoOptions.ytLink"}),!i&&Object(a.jsx)(W.a,{accept:"image/*",source:"imageUpload",children:Object(a.jsx)(B.a,{source:"src",title:"title"})}),Object(a.jsx)(H.a,{rows:6,required:!0,multiline:!0,source:"text"})]})}))]})};var Le=function(){return Object(a.jsxs)(s.a,{theme:L,title:"Admin Panel",dashboard:X,authProvider:Z,dataProvider:{getList:function(){var e=Object(j.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getSegments();case 2:return e.abrupt("return",{total:10,data:g.getSliceData(t)});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getOne:function(){var e=Object(j.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getSegments();case 2:return e.abrupt("return",{data:Object(u.a)({},v(parseInt(n.id.toString()),t))});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getMany:function(){var e=Object(j.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getSegments();case 2:return e.abrupt("return",{data:g.getSliceData(t)});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),getManyReference:function(){var e=Object(j.a)(d.a.mark((function e(t,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.getSegments();case 2:return e.abrupt("return",{total:10,data:g.getSliceData(t)});case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),update:function(e,t){return g.update(t.data,e)},updateMany:function(e,t){return Promise.all(t.ids.map((function(t){return g.update(parseInt(t),e)}))).then((function(e){return{data:e.map((function(e){return e.data}))}}))},create:function(e,t){return g.create(t.data,e)},delete:function(e,t){return g.delete(parseInt(t.id),e)},deleteMany:function(e,t){return Promise.all(t.ids.map((function(t){return g.delete(parseInt(t),e)}))).then((function(e){return{data:e.map((function(e){return e.data}))}}))}},menu:Ie,children:[Object(a.jsx)(o.a,{icon:he.a,options:{label:"Headers"},name:"header",list:E,create:Y,edit:z}),Object(a.jsx)(o.a,{icon:ve.a,options:{label:"Notice Board"},name:"noticeboard",list:Pe,edit:De,create:Ae}),Object(a.jsx)(o.a,{icon:me.a,options:{label:"Footer"},name:"footer",list:Oe,edit:pe})]})};var Fe=function(){return Object(a.jsx)(Le,{})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,592)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(a.jsx)(Fe,{}),document.getElementById("root")),Re()}},[[490,1,2]]]);
//# sourceMappingURL=main.533dd6f1.chunk.js.map