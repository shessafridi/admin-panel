(this["webpackJsonpadmin-panel"]=this["webpackJsonpadmin-panel"]||[]).push([[0],{358:function(e,t,a){},496:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a(0),c=a(20),i=a.n(c),s=(a(358),a(585)),o=a(584),l=a(319),u=a(561),j=a(562),d={iconColor:u.a.A700,textColor:u.a.A700},b=Object(l.a)({palette:{primary:{main:u.a[500]},secondary:{main:j.a[600]}},overrides:{MuiToolbar:{dense:{minHeight:"55px"}},MuiListItemIcon:{root:{color:u.a[300]}},MuiMenuItem:{root:{textTransform:"uppercase",fontSize:"14px",fontWeight:"bold",marginTop:"8px",paddingTop:"14px",paddingBottom:"14px"}},MuiAppBar:{colorSecondary:{color:"white",backgroundColor:u.a[500]}}}}),p=a(16),O=function(e){var t=e.resource;return Object(r.jsx)(p.a,{to:"".concat(t,"/1")})},x=a(8),h=a(95),m=a(497),f=a(318),g=a(149),v=a(151),w=a.n(v),y=Object(h.a)({active:{color:d.textColor,"& .MuiListItemIcon-root":{color:d.iconColor}}}),S=Object(p.j)((function(e){var t=e.onMenuClick,a=e.logout,c=Object(m.a)((function(e){return e.breakpoints.down("xs")})),i=Object(x.f)((function(e){return e.admin.ui.sidebarOpen})),s=Object(x.f)(f.b),o=y();return Object(r.jsxs)("div",{children:[Object(r.jsx)(g.a,{to:"/",primaryText:"Dashboard",activeClassName:o.active,leftIcon:Object(r.jsx)(w.a,{}),onClick:t,sidebarIsOpen:i,exact:!0},"dashboard"),s.map((function(e){return Object(r.jsx)(g.a,{to:"/".concat(e.name),primaryText:e.options&&e.options.label||e.name,activeClassName:o.active,leftIcon:Object(n.createElement)(e.icon),onClick:t,sidebarIsOpen:i},e.name)})),c&&a]})})),I=a(10),U=a(588),_=a(320),T=a(215),k=a(29),P=Object(h.a)({title:{flex:1,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},spacer:{flex:1}}),A=function(e){var t=P(),a=Object(k.a)(),n=Object(m.a)(a.breakpoints.down("sm"));return Object(r.jsxs)(_.a,Object(I.a)(Object(I.a)({},e),{},{children:[Object(r.jsx)(T.a,{variant:"h6",color:"inherit",className:t.title,children:"Admin Panel"}),!n&&Object(r.jsx)("span",{className:t.spacer})]}))},C=function(e){return Object(r.jsx)(U.a,Object(I.a)(Object(I.a)({},e),{},{appBar:A}))},E=a(23),D=a.n(E),L=a(40),N=a(36),F=a(69),B=a(83),R=a(114),W=a(63),H="https://api.alhamdian.pk/api/SegmentDetail",M=Object({NODE_ENV:"production",PUBLIC_URL:"https://shessafridi.github.io/admin-panel",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://api.alhamdian.pk/api/SegmentDetail"}).REACT_APP_AUTH_URL||"https://api.alhamdian.pk/api/login",J=Object({NODE_ENV:"production",PUBLIC_URL:"https://shessafridi.github.io/admin-panel",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_URL:"https://api.alhamdian.pk/api/SegmentDetail"}).REACT_APP_FILE_UPLOAD_URL||"https://api.nisafoundation.org/api/SegmentDetail/UploadFile",q=a(206),V=a.n(q),Y=new function e(){var t=this;Object(F.a)(this,e),this._uploadAllFiles=function(e){return console.log(e),Promise.all(e.map((function(e){return t._uploadFile(e)}))).then((function(e){return e.map((function(e){return e.body}))}))},this._uploadFile=function(e){var t=new FormData;return t.append("formFile",e,e.name),R.a.fetchJson(J,{method:"POST",body:t})},this._setCustomProperty=function(e,t,a){return V.a.set(e,t,a)},this._mapToGallery=function(e,t){return{id:t+1,imageUrl:e.replace(/"/g,"")}},this.uploadSingleImage=function(){var e=Object(L.a)(D.a.mark((function e(a,r,n){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._uploadFile(r.rawFile).then((function(e){return t._setCustomProperty(a,n,e.body.replace(/"/g,""))}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}(),this.uploadMultipleImages=function(){var e=Object(L.a)(D.a.mark((function e(a,r,n){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._uploadAllFiles(r.map((function(e){return e.rawFile}))).then((function(e){var r=V.a.get(a,n)||[];return(r=[].concat(Object(W.a)(r),Object(W.a)(e.map(t._mapToGallery)))).forEach((function(e,t){return e.id=t+1})),t._setCustomProperty(a,n,r)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}()},K=new(function(){function e(){var t=this;Object(F.a)(this,e),this.segmentsObj={},this._arrangeId=function(e){return e.data.forEach((function(e,t){return e.id=t+1}))},this._updateDb=function(e){return t._arrangeId(e),R.a.fetchJson("".concat(H,"/").concat(e.id),{method:"PUT",headers:t._getHttpHeaders(),body:t._getSegmentBody(e)})},this._getSegmentBody=function(e){return JSON.stringify({SegmentDetailID:e.id,SegmentID:e.id,Title:e.title,Details:JSON.stringify(e.data)})},this._uploadImagesIfExist=function(){var e=Object(L.a)(D.a.mark((function e(t){var a;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.imageUploaders){e.next=4;break}return a=Object.entries(t.imageUploaders).map((function(e){var t=Object(N.a)(e,2),a=t[0],r=t[1];return{path:a.replace(/_/g,"."),files:r}})),e.next=4,Promise.all(a.map((function(e){return Array.isArray(e.files)?Y.uploadMultipleImages(t,e.files,e.path):Y.uploadSingleImage(t,e.files,e.path)})));case 4:delete t.imageUploaders;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.create=function(){var e=Object(L.a)(D.a.mark((function e(a,r){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.getSlice(r),a.id=n.data.length+1,e.prev=2,e.next=5,t._uploadImagesIfExist(a);case 5:return n.data.push(a),e.abrupt("return",t._updateDb(n).then((function(){return{data:Object(I.a)(Object(I.a)({},a),{},{id:a.id})}})));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,a){return e.apply(this,arguments)}}(),this.getSliceData=function(e){return t.segmentsObj[e].data},this.getSlice=function(e){return t.segmentsObj[e]},this.update=function(){var e=Object(L.a)(D.a.mark((function e(a,r){var n,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.getSlice(r),e.prev=1,e.next=4,t._uploadImagesIfExist(a);case 4:return c=n.data.findIndex((function(e){return e.id===a.id})),n.data[c]=a,e.abrupt("return",t._updateDb(n).then((function(){return{data:Object(I.a)(Object(I.a)({},a),{},{id:a.id})}})));case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",Promise.reject(e.t0));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t,a){return e.apply(this,arguments)}}(),this.delete=function(e,a){var r=t.getSlice(a),n=r.data.findIndex((function(t){return t.id===e})),c=r.data.splice(n,1);return t._updateDb(r).then((function(){return{data:c[0]}}))},this.getSegments=Object(L.a)(D.a.mark((function e(){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==Object.keys(t.segmentsObj).length){e.next=14;break}return e.prev=1,e.next=4,R.a.fetchJson(H);case 4:return e.next=6,e.sent.json;case 6:e.sent.forEach((function(e){var a=e.Title.toLowerCase().replace(" ","");t.segmentsObj[a]={id:e.SegmentDetailID,title:e.Title,data:JSON.parse(e.Details)}})),console.log(t.segmentsObj),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})))}return Object(B.a)(e,[{key:"_getHttpHeaders",value:function(){var e=localStorage.getItem("auth");return e?new Headers({"Content-Type":"application/json",Authorization:"Bearer "+e}):new Headers({"Content-Type":"application/json"})}}]),e}()),X=function(e,t){return K.getSliceData(t).find((function(t){return t.id===e}))},z=function e(t,a){Object(F.a)(this,e),this.UsernameOrEmail=t,this.Password=a},G=new function e(){var t=this;Object(F.a)(this,e),this.currentUser=null,this.login=function(){var e=Object(L.a)(D.a.mark((function e(a,r){var n,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.a.fetchJson(M,{method:"POST",body:JSON.stringify(new z(a,r)),headers:new Headers({"Content-Type":"application/json"})});case 2:if(!((n=e.sent).status<200||n.status>=300)&&n.json.Successful){e.next=5;break}throw new Error("".concat(n.status));case 5:return c=n.json.Response,t.currentUser=c,e.abrupt("return",c.access_token);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},Q={login:function(){var e=Object(L.a)(D.a.mark((function e(t){var a,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,r=t.password,e.abrupt("return",G.login(a,r).then((function(e){localStorage.setItem("auth",e)})));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),logout:function(e){return localStorage.removeItem("auth"),Promise.resolve()},checkAuth:function(e){return localStorage.getItem("auth")?Promise.resolve():Promise.reject()},checkError:function(e){return Promise.resolve()},getPermissions:function(e){return Promise.resolve()}},Z=a(500),$=function(e){var t=e.children,a=e.padding,n=e.className;return Object(r.jsx)("div",{className:n,style:{padding:a},children:t})},ee=Object(h.a)({root:{marginTop:"15px",height:"100%"}}),te=function(){var e=ee();return Object(r.jsx)(Z.a,{className:e.root,children:Object(r.jsx)($,{padding:"10px",children:Object(r.jsx)("h1",{children:"Welcome to the dashboard"})})})},ae=a(586),re=a(587),ne=a(579),ce=a(580),ie=a(593),se=function(e){var t=e,a=t.resource[0].toUpperCase()+t.resource.slice(1),n=Object(k.a)(),c=Object(m.a)(n.breakpoints.down("sm"));return Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsxs)("h2",{children:[a," List"]}),Object(r.jsx)(ae.a,Object(I.a)(Object(I.a)({pagination:!1},e),{},{children:Object(r.jsxs)(re.a,{style:{overflowY:"hidden",overflowX:"scroll"},children:[Object(r.jsx)(ne.a,{source:"id",sortable:!1}),Object(r.jsx)(ne.a,{source:"title",sortable:!1}),!c&&Object(r.jsx)(ne.a,{source:"text",sortable:!1}),Object(r.jsx)(ce.a,{}),!c&&Object(r.jsx)(ie.a,{})]})}))]})},oe=a(599),le=a(600),ue=a(596),je=a(589),de=a(582),be=a(214),pe=a(300),Oe=a.n(pe),xe=Object(p.j)((function(e){return Object(r.jsx)(be.a,{color:"primary",onClick:e.history.goBack,children:Object(r.jsx)(Oe.a,{})})})),he=function(e){return Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(xe,{}),Object(r.jsx)("h2",{style:{marginLeft:"18px"},children:"Add a new Header"})]}),Object(r.jsx)(oe.a,Object(I.a)(Object(I.a)({title:"Add a new header"},e),{},{children:Object(r.jsxs)(le.a,{margin:"normal",redirect:"list",children:[Object(r.jsx)(ue.a,{required:!0,source:"title"}),Object(r.jsx)(je.a,{accept:"image/*",label:"Image Upload",source:"imageUploaders.imageUrl",children:Object(r.jsx)(de.a,{source:"src",title:"title"})}),Object(r.jsx)(ue.a,{rows:6,required:!0,multiline:!0,source:"text"})]})}))]})},me=a(592),fe=function(e){return Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(xe,{}),Object(r.jsx)("h2",{style:{marginLeft:"18px",marginBottom:"30px"},children:"Edit Header"})]}),Object(r.jsx)(me.a,Object(I.a)(Object(I.a)({},e),{},{children:Object(r.jsxs)(le.a,{margin:"normal",redirect:"list",children:[Object(r.jsx)(ue.a,{disabled:!0,source:"id"}),Object(r.jsx)(ue.a,{required:!0,source:"title"}),Object(r.jsx)(de.a,{source:"imageUrl",label:"Image"}),Object(r.jsx)(je.a,{accept:"image/*",label:"Image Upload",source:"imageUploaders.imageUrl",children:Object(r.jsx)(de.a,{source:"src",title:"title"})}),Object(r.jsx)(ue.a,{rows:6,required:!0,multiline:!0,source:"text"})]})}))]})},ge=a(313),ve=a.n(ge),we=function(e){var t=e,a=t.resource[0].toUpperCase()+t.resource.slice(1),n=Object(k.a)(),c=Object(m.a)(n.breakpoints.down("sm"));return Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsxs)("h2",{children:[a," List"]}),Object(r.jsx)(ae.a,Object(I.a)(Object(I.a)({pagination:!1},e),{},{children:Object(r.jsxs)(re.a,{style:{overflowY:"hidden",overflowX:"scroll"},children:[Object(r.jsx)(ne.a,{source:"id",sortable:!1}),Object(r.jsx)(ne.a,{source:"title",sortable:!1}),!c&&Object(r.jsx)(ne.a,{source:"text",sortable:!1}),Object(r.jsx)(ce.a,{}),!c&&Object(r.jsx)(ie.a,{})]})}))]})},ye=a(594),Se=function(e){var t=n.useState(!1),a=Object(N.a)(t,2),c=a[0],i=a[1];return Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(xe,{}),Object(r.jsx)("h2",{style:{marginLeft:"18px"},children:"Add a new Notice"})]}),Object(r.jsx)(oe.a,Object(I.a)(Object(I.a)({title:"Add a new header"},e),{},{children:Object(r.jsxs)(le.a,{margin:"normal",redirect:"list",children:[Object(r.jsx)(ue.a,{label:"Title",source:"title"}),Object(r.jsx)(ye.a,{onChange:function(e){return i(e)},defaultValue:c,label:"Enable Video",source:"videoOptions.enabled"}),c&&Object(r.jsx)(ue.a,{label:"YouTube embed link",source:"videoOptions.ytLink"}),!c&&Object(r.jsx)(je.a,{accept:"image/*",label:"Image Upload",source:"imageUploaders.imageUrl",children:Object(r.jsx)(de.a,{source:"src",title:"title"})}),Object(r.jsx)(ue.a,{rows:6,label:"Text",defaultValue:"",multiline:!0,source:"text"})]})}))]})},Ie=a(100);var Ue=function(e){var t=function(e,t){var a=Object(Ie.a)({type:"getOne",resource:e,payload:{id:t}}).data;return null===a||void 0===a?void 0:a.videoOptions.enabled}(e.resource,e.id),a=n.useState(t),c=Object(N.a)(a,2),i=c[0],s=c[1];return n.useEffect((function(){s(t)}),[t]),Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(xe,{}),Object(r.jsx)("h2",{style:{marginLeft:"18px",marginBottom:"30px"},children:"Edit Notice"})]}),Object(r.jsx)(me.a,Object(I.a)(Object(I.a)({},e),{},{children:Object(r.jsxs)(le.a,{margin:"normal",redirect:"list",children:[Object(r.jsx)(ue.a,{disabled:!0,source:"id"}),Object(r.jsx)(ue.a,{required:!0,source:"title"}),Object(r.jsx)(de.a,{source:"imageUrl",label:"Image"}),Object(r.jsx)(ye.a,{onChange:function(e){return s(e)},label:"Enable Video",source:"videoOptions.enabled"}),i&&Object(r.jsx)(ue.a,{label:"YouTube embed link",source:"videoOptions.ytLink"}),!i&&Object(r.jsx)(je.a,{accept:"image/*",label:"Image Upload",source:"imageUploaders.imageUrl",children:Object(r.jsx)(de.a,{source:"src",title:"title"})}),Object(r.jsx)(ue.a,{rows:6,required:!0,multiline:!0,source:"text"})]})}))]})},_e=a(316),Te=a.n(_e),ke=a(171),Pe=a(581),Ae=function(e){return Object(r.jsx)(ke.a,Object(I.a)(Object(I.a)({},e),{},{children:Object(r.jsx)(Pe.a,{disabled:e.saving&&e.invalid})}))},Ce=function(e){return"1"!==e.id?Object(r.jsx)(p.a,{to:"/".concat(e.resource,"/1")}):Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h2",{style:{marginLeft:"18px",marginBottom:"30px"},children:"About"})}),Object(r.jsx)(me.a,Object(I.a)(Object(I.a)({},e),{},{children:Object(r.jsxs)(le.a,{toolbar:Object(r.jsx)(Ae,{}),margin:"normal",redirect:!1,children:[Object(r.jsx)(ue.a,{fullWidth:!0,required:!0,source:"title"}),Object(r.jsx)(de.a,{source:"imageUrl",label:"Image"}),Object(r.jsx)(je.a,{accept:"image/*",label:"Image Upload",source:"imageUploaders.imageUrl",children:Object(r.jsx)(de.a,{source:"src",title:"title"})}),Object(r.jsx)(ue.a,{fullWidth:!0,rows:8,required:!0,multiline:!0,source:"text"})]})}))]})},Ee=a(167),De=a.n(Ee),Le=a(597),Ne=a(212),Fe=a(601),Be=a(307),Re=a.n(Be),We=a(305),He=a.n(We),Me=a(306),Je=a.n(Me),qe=function(e){return Object(r.jsx)(ke.a,Object(I.a)(Object(I.a)({},e),{},{children:Object(r.jsx)(Pe.a,{disabled:e.saving&&e.invalid})}))},Ve=function(e){var t=n.useRef(),a=Object(x.f)((function(e){return e.admin.ui.sidebarOpen}));return n.useEffect((function(){setTimeout((function(){var e;return null===(e=t.current)||void 0===e?void 0:e.updateIndicator()}),220)}),[a]),"1"!==e.id?Object(r.jsx)(p.a,{to:"/".concat(e.resource,"/1")}):Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsx)("div",{children:Object(r.jsx)("h2",{style:{marginLeft:"18px",marginBottom:"30px"},children:"Footer"})}),Object(r.jsx)(me.a,Object(I.a)(Object(I.a)({},e),{},{children:Object(r.jsxs)(Le.a,{margin:"normal",tabs:Object(r.jsx)(Ne.a,{action:t,centered:!0}),redirect:!1,toolbar:Object(r.jsx)(qe,{}),children:[Object(r.jsx)(Fe.a,{icon:Object(r.jsx)(De.a,{}),label:"About",children:Object(r.jsx)(ue.a,{multiline:!0,rows:8,label:"About Text",fullWidth:!0,source:"about.aboutUs"})}),Object(r.jsxs)(Fe.a,{icon:Object(r.jsx)(He.a,{}),label:"Contact",children:[Object(r.jsx)(ue.a,{label:"Address",fullWidth:!0,source:"contact.address"}),Object(r.jsx)(ue.a,{label:"Phone",fullWidth:!0,source:"contact.phone"}),Object(r.jsx)(ue.a,{label:"Email",fullWidth:!0,source:"contact.email"})]}),Object(r.jsxs)(Fe.a,{icon:Object(r.jsx)(Je.a,{}),label:"Social",children:[Object(r.jsx)(ue.a,{label:"Facebook",fullWidth:!0,source:"social.facebook"}),Object(r.jsx)(ue.a,{label:"Instagram",fullWidth:!0,source:"social.instagram"}),Object(r.jsx)(ue.a,{label:"Twitter",fullWidth:!0,source:"social.twitter"}),Object(r.jsx)(ue.a,{label:"YouTube",fullWidth:!0,source:"social.youtube"})]}),Object(r.jsxs)(Fe.a,{icon:Object(r.jsx)(Re.a,{}),label:"Stores",children:[Object(r.jsx)(ue.a,{label:"App Store",fullWidth:!0,source:"stores.appStore"}),Object(r.jsx)(ue.a,{label:"Play Store",fullWidth:!0,source:"stores.playStore"})]})]})}))]})},Ye=a(317),Ke=a.n(Ye),Xe=function(e){var t=e,a=t.resource[0].toUpperCase()+t.resource.slice(1),n=Object(k.a)(),c=Object(m.a)(n.breakpoints.down("sm"));return Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsxs)("h2",{children:[a," List"]}),Object(r.jsx)(ae.a,Object(I.a)(Object(I.a)({pagination:!1},e),{},{children:Object(r.jsxs)(re.a,{style:{overflowY:"hidden",overflowX:"scroll"},children:[Object(r.jsx)(ne.a,{source:"reg",sortable:!1}),Object(r.jsx)(ne.a,{source:"name",sortable:!1}),Object(r.jsx)(ce.a,{}),!c&&Object(r.jsx)(ie.a,{})]})}))]})},ze=a(583),Ge=function(e){return Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(xe,{}),Object(r.jsx)("h2",{style:{marginLeft:"18px"},children:"Add a new Birthday"})]}),Object(r.jsx)(oe.a,Object(I.a)(Object(I.a)({title:"Add a new birthday"},e),{},{children:Object(r.jsxs)(le.a,{margin:"normal",redirect:"list",children:[Object(r.jsx)(ue.a,{label:"Name",source:"name"}),Object(r.jsx)(ue.a,{label:"Regestration",source:"reg"}),Object(r.jsx)(ze.a,{label:"Date",source:"date"}),Object(r.jsx)(je.a,{accept:"image/*",label:"Image Upload",source:"imageUploaders.imageUrl",children:Object(r.jsx)(de.a,{source:"src",title:"title"})})]})}))]})},Qe=function(e){return Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(xe,{}),Object(r.jsx)("h2",{style:{marginLeft:"18px",marginBottom:"30px"},children:"Edit Birthday"})]}),Object(r.jsx)(me.a,Object(I.a)(Object(I.a)({},e),{},{children:Object(r.jsxs)(le.a,{margin:"normal",redirect:"list",children:[Object(r.jsx)(ue.a,{disabled:!0,label:"Id",source:"id"}),Object(r.jsx)(ue.a,{label:"Name",source:"name"}),Object(r.jsx)(ue.a,{label:"Regestration",source:"reg"}),Object(r.jsx)(ze.a,{label:"Date",source:"date"}),Object(r.jsx)(de.a,{source:"imageUrl",label:"Image"}),Object(r.jsx)(je.a,{accept:"image/*",label:"Image Upload",source:"imageUploaders.imageUrl",children:Object(r.jsx)(de.a,{source:"src",title:"title"})})]})}))]})},Ze=a(315),$e=a.n(Ze),et=function(e){var t=e,a=t.resource[0].toUpperCase()+t.resource.slice(1),n=Object(k.a)(),c=Object(m.a)(n.breakpoints.down("sm"));return Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsxs)("h2",{children:[a," List"]}),Object(r.jsx)(ae.a,Object(I.a)(Object(I.a)({pagination:!1},e),{},{children:Object(r.jsxs)(re.a,{style:{overflowY:"hidden",overflowX:"scroll"},children:[Object(r.jsx)(ne.a,{source:"id",sortable:!1}),Object(r.jsx)(ne.a,{source:"title",sortable:!1}),!c&&Object(r.jsx)(ne.a,{source:"text",sortable:!1}),Object(r.jsx)(ce.a,{}),!c&&Object(r.jsx)(ie.a,{})]})}))]})},tt=function(e){return Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(xe,{}),Object(r.jsx)("h2",{style:{marginLeft:"18px",marginBottom:"30px"},children:"Edit News"})]}),Object(r.jsx)(me.a,Object(I.a)(Object(I.a)({},e),{},{children:Object(r.jsxs)(le.a,{margin:"normal",redirect:"list",children:[Object(r.jsx)(ue.a,{label:"Id",disabled:!0,source:"id"}),Object(r.jsx)(ue.a,{label:"Title",source:"title"}),Object(r.jsx)(ze.a,{source:"date"}),Object(r.jsx)(de.a,{source:"imageUrl",label:"Image"}),Object(r.jsx)(je.a,{accept:"image/*",label:"Image Upload",source:"imageUploaders.imageUrl",children:Object(r.jsx)(de.a,{source:"src",title:"title"})}),Object(r.jsx)(ue.a,{rows:6,label:"Text",multiline:!0,source:"text"})]})}))]})},at=function(e){return Object(r.jsxs)($,{padding:"10px",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(xe,{}),Object(r.jsx)("h2",{style:{marginLeft:"18px"},children:"Add a new News"})]}),Object(r.jsx)(oe.a,Object(I.a)(Object(I.a)({title:"Add another News"},e),{},{children:Object(r.jsxs)(le.a,{margin:"normal",redirect:"list",children:[Object(r.jsx)(ue.a,{label:"Title",source:"title"}),Object(r.jsx)(ze.a,{label:"Date",defaultValue:Date.now(),source:"date"}),Object(r.jsx)(je.a,{accept:"image/*",label:"Image Upload",source:"imageUploaders.imageUrl",children:Object(r.jsx)(de.a,{source:"src",title:"title"})}),Object(r.jsx)(ue.a,{rows:6,defaultValue:"",multiline:!0,label:"Text",source:"text"})]})}))]})},rt=a(314),nt=a.n(rt);var ct=function(){return Object(r.jsxs)(s.a,{theme:b,title:"Admin Panel",dashboard:te,authProvider:Q,dataProvider:{getList:function(){var e=Object(L.a)(D.a.mark((function e(t,a){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.getSegments();case 2:return e.abrupt("return",{total:10,data:K.getSliceData(t)});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),getOne:function(){var e=Object(L.a)(D.a.mark((function e(t,a){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.getSegments();case 2:return e.abrupt("return",{data:Object(I.a)({},X(parseInt(a.id.toString()),t))});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),getMany:function(){var e=Object(L.a)(D.a.mark((function e(t,a){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.getSegments();case 2:return e.abrupt("return",{data:K.getSliceData(t)});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),getManyReference:function(){var e=Object(L.a)(D.a.mark((function e(t,a){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,K.getSegments();case 2:return e.abrupt("return",{total:10,data:K.getSliceData(t)});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),update:function(e,t){return K.update(t.data,e)},updateMany:function(e,t){return Promise.all(t.ids.map((function(t){return K.update(parseInt(t),e)}))).then((function(e){return{data:e.map((function(e){return null===e||void 0===e?void 0:e.data}))}}))},create:function(e,t){return K.create(t.data,e)},delete:function(e,t){return K.delete(parseInt(t.id),e)},deleteMany:function(e,t){return Promise.all(t.ids.map((function(t){return K.delete(parseInt(t),e)}))).then((function(e){return{data:e.map((function(e){return e.data}))}}))}},menu:S,layout:C,children:[Object(r.jsx)(o.a,{icon:ve.a,options:{label:"Headers"},name:"header",list:se,create:he,edit:fe}),Object(r.jsx)(o.a,{icon:nt.a,options:{label:"News"},name:"news",list:et,edit:tt,create:at}),Object(r.jsx)(o.a,{icon:$e.a,options:{label:"Birthday"},name:"birthday",list:Xe,edit:Qe,create:Ge}),Object(r.jsx)(o.a,{icon:Te.a,options:{label:"Notice Board"},name:"noticeboard",list:we,edit:Ue,create:Se}),Object(r.jsx)(o.a,{icon:De.a,options:{label:"About"},name:"about",list:O,edit:Ce}),Object(r.jsx)(o.a,{icon:Ke.a,options:{label:"Footer"},name:"footer",list:O,edit:Ve})]})};var it=function(){return Object(r.jsx)(ct,{})},st=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,602)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),c(e),i(e)}))};i.a.render(Object(r.jsx)(it,{}),document.getElementById("root")),st()}},[[496,1,2]]]);
//# sourceMappingURL=main.b684b626.chunk.js.map