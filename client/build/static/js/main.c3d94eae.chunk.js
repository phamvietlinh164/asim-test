(this.webpackJsonpmedpro_form_content=this.webpackJsonpmedpro_form_content||[]).push([[0],{172:function(e,t,n){e.exports=n(330)},177:function(e,t,n){},178:function(e,t,n){},250:function(e,t,n){},260:function(e,t,n){},330:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"DOMAIN_URL",(function(){return j})),n.d(a,"RESTFULL_API_URL_V2",(function(){return S})),n.d(a,"COOKIE_EXPIRES",(function(){return A})),n.d(a,"SOCKET_CHAT",(function(){return y}));var r={};n.r(r),n.d(r,"DOMAIN_URL",(function(){return w})),n.d(r,"RESTFULL_API_URL_V2",(function(){return T})),n.d(r,"COOKIE_EXPIRES",(function(){return C})),n.d(r,"SOCKET_CHAT",(function(){return U}));var o={};n.r(o),n.d(o,"DOMAIN_URL",(function(){return x})),n.d(o,"RESTFULL_API_URL_V2",(function(){return F})),n.d(o,"COOKIE_EXPIRES",(function(){return N})),n.d(o,"SOCKET_CHAT",(function(){return k}));var c={};n.r(c),n.d(c,"DOMAIN_URL",(function(){return R})),n.d(c,"RESTFULL_API_URL_V2",(function(){return M})),n.d(c,"COOKIE_EXPIRES",(function(){return G})),n.d(c,"SOCKET_CHAT",(function(){return D}));var s=n(0),l=n.n(s),i=n(14),p=n.n(i),u=(n(177),n(33)),m=n(34),d=n(38),f=n(36),h=(n(178),n(23)),b=n(79),g=(n(128),n(84)),E=(n(129),n(53)),O=n(47),v=(n(119),n(74)),I=(n(112),n(61)),_=n(335),L=n(334),j="http://localhost:6700",S="https://medpro-api-v2-testing.medpro.com.vn",A=43200,y="wss://socket.pkh.vn/cable",w=window.location.origin,T="https://medpro-api-v2-testing.medpro.com.vn",C=43200,U="wss://alpha-api.medpro.com.vn/cable",x="https://static-inside-testing.medpro.com.vn",F="https://medpro-api-v2-testing.medpro.com.vn",N=43200,k="wss://alpha-api.medpro.com.vn/cable",R="https://static-inside-testing.medpro.com.vn",M="https://medpro-api-v2-testing.medpro.com.vn",G=43200,D="wss://alpha-api.medpro.com.vn/cable",P={development:a,testing:o,staging:c,production:r},H=P.production;function W(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)}var B=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,imageUrl:"".concat(H.DOMAIN_URL,"/static/upload/hospitals/").concat(e.props.hospital,"/").concat(e.props.name,".").concat(e.props.typeUrl,"?").concat((new Date).getTime()),isOnSize:!1},e.handleChange=function(t){"uploading"!==t.file.status?("done"===t.file.status&&W(t.file.originFileObj,(function(t){e.setState({imageUrl:"".concat(H.DOMAIN_URL,"/static/upload/hospitals/").concat(e.props.hospital,"/").concat(e.props.name,".").concat(e.props.typeUrl,"?").concat((new Date).getTime()),loading:!1})})),"error"===t.file.status&&401===t.file.response.statusCode&&e.props.history.push({pathname:"/login",state:{message:"Login to upload!"}})):e.setState({loading:!0})},e.beforeUpload=function(t){return new Promise((function(n,a){var r=t.type===e.props.type;r||I.a.error("You can only upload ".concat(e.props.type," file!"));var o=t.size/1024/1024<5;o||I.a.error("Image must smaller than 5MB!");var c=new Image;c.src=window.URL.createObjectURL(t),c.onload=function(){r&&o&&c.width>100?n(t):a("abc")}}))},e.UNSAFE_componentWillReceiveProps=function(t){e.setState({imageUrl:"".concat(H.DOMAIN_URL,"/static/upload/hospitals/").concat(t.hospital,"/").concat(t.name,".").concat(e.props.typeUrl)})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=l.a.createElement("div",null,this.state.loading?l.a.createElement(_.a,null):l.a.createElement(L.a,null),l.a.createElement("div",{className:"ant-upload-text"},"Upload")),t=this.state.imageUrl;return l.a.createElement("div",{className:"upload"},l.a.createElement(v.a,{name:this.props.fieldName,listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"".concat(H.DOMAIN_URL,"/upload"),headers:{hospital:this.props.hospital,name:this.props.name,token:"".concat(localStorage.getItem("token"))},beforeUpload:this.beforeUpload,onChange:this.handleChange},t?l.a.createElement("img",{src:t,alt:"",style:{maxHeight:"86px",maxWidth:"86px"}}):e),l.a.createElement("p",null,this.props.label),l.a.createElement("br",null))}}]),n}(l.a.Component),V=Object(h.g)(B),z=(n(78),n(50)),K=n(65),X=n(333),Y=n(332),q=n(57),J=n.n(q),$=(n(250),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={fileList:[]},e.handleChange=function(t){var n=Object(K.a)(t.fileList);(n=n.slice(-1)).length>0&&n[0].type!==e.props.type&&(n[0].status="error"),e.setState({fileList:n}),"error"===t.file.status&&401===t.file.response.statusCode&&e.props.history.push({pathname:"/login",state:{message:"Login to upload!"}})},e.beforeUpload=function(t){var n=t.type===e.props.type;n||I.a.error("You can only upload ".concat(e.props.type," file!"));var a=t.size/1024/1024<5;return a||I.a.error("File must smaller than 5MB!"),n&&a},e.onClick=function(){var t=e.props.manageContent.partnerId;J()({url:"".concat(H.DOMAIN_URL,"/download/client-upload-hospitals-").concat(t,"-content.json"),method:"GET",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","content.json"),document.body.appendChild(n),n.click()})).catch((function(e){alert("Some error happen!")}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e={name:this.props.fieldName,action:"".concat(H.DOMAIN_URL,"/").concat(this.props.action),headers:{hospital:this.props.hospital,name:this.props.name,token:"".concat(localStorage.getItem("token"))},onChange:this.handleChange,beforeUpload:this.beforeUpload,multiple:!0};return l.a.createElement("div",{className:"upload"},l.a.createElement("div",{className:"up_cont"},l.a.createElement(v.a,Object.assign({},e,{fileList:this.state.fileList}),l.a.createElement(z.a,null,l.a.createElement(X.a,null)," Upload")),l.a.createElement("div",{className:"download-but"},l.a.createElement(z.a,{type:"primary",icon:l.a.createElement(Y.a,null),size:"small",onClick:this.onClick},"Download"))),l.a.createElement("p",null,this.props.label),l.a.createElement("br",null))}}]),n}(l.a.Component)),Q=Object(O.b)((function(e){return{manageContent:e.manageContent}}))($),Z=function(e){return{type:"GET_LIST_FILE",payload:e}};function ee(e,t){var n=new FileReader;n.addEventListener("load",(function(){return t(n.result)})),n.readAsDataURL(e)}var te=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,imageUrl:"".concat(H.DOMAIN_URL,"/static/upload/").concat(e.props.subfol.replace(/-/g,"/"),"/").concat(e.props.name)},e.UNSAFE_componentWillReceiveProps=function(t){var n=t.subfol.replace(/-/g,"/");e.setState({imageUrl:"".concat(H.DOMAIN_URL,"/static/upload/").concat(n,"/").concat(t.name,"?").concat((new Date).getTime())})},e.handleChange=function(t){"uploading"!==t.file.status?("done"===t.file.status&&(ee(t.file.originFileObj,(function(t){e.setState({imageUrl:"".concat(H.DOMAIN_URL,"/static/upload/").concat(e.props.subfol.replace(/-/g,"/"),"/").concat(e.props.name,"?").concat((new Date).getTime()),loading:!1})})),e.props.name||e.props.getNewListFile()),"error"===t.file.status&&401===t.file.response.statusCode&&e.props.history.push({pathname:"/login",state:{message:"Login to upload!"}})):e.setState({loading:!0})},e.beforeUpload=function(t){var n="image/png"===t.type||"image/svg+xml"===t.type||"application/json"===t.type||"image/jpeg"===t.type;n||I.a.error("You can only upload image/png, image/svg+xml, image/jpeg or application/json file!");var a=!0;if(e.props.name&&t.name.split(".").slice(-1)[0]!==e.props.name.split(".").slice(-1)[0]){a=!1;I.a.error("Have to be the same type!")}var r=t.size/1024/1024<5;return r||I.a.error("Image must smaller than 5MB!"),n&&r&&a},e}return Object(m.a)(n,[{key:"render",value:function(){var e=l.a.createElement("div",null,this.state.loading?l.a.createElement(_.a,null):l.a.createElement(L.a,null),l.a.createElement("div",{className:"ant-upload-text"},"Upload")),t=this.state.imageUrl;return l.a.createElement("div",{className:"upload"},l.a.createElement(v.a,{name:this.props.fieldName,listType:"picture-card",className:"avatar-uploader",showUploadList:!1,action:"".concat(H.DOMAIN_URL,"/").concat(this.props.action),headers:{name:this.props.name,subfol:this.props.subfol.replace(/-/g,"/"),token:"".concat(localStorage.getItem("token"))},beforeUpload:this.beforeUpload,onChange:this.handleChange},t?l.a.createElement("img",{src:t,alt:"",style:{maxHeight:"86px",maxWidth:"86px"}}):e),l.a.createElement("p",null,this.props.label),l.a.createElement("br",null))}}]),n}(l.a.Component),ne=Object(O.b)(null,(function(e){return{getListFile:function(){e(Z())},getNewListFile:function(){e({type:"GET_NEW_LIST_FILE"})}}}))(Object(h.g)(te)),ae=(n(144),n(76)),re=function(e){return{type:"GET_MANAGE_CONTENT",partnerId:e}},oe=(ae.a.Search,function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).UNSAFE_componentWillReceiveProps=function(e){a.props.manageContent.partnerId!==e.manageContent.partnerId&&a.setState({message:"",disabled:!0})},a.onClick=function(){if(a.state.disabled){a.setState({loading:!0});var e,t=a.props.manageContent.partnerId;J()({method:"get",url:"".concat(H.RESTFULL_API_URL_V2,"/mongo/hospital/danh-sach"),headers:{accept:"*/*",appid:"medpro"}}).then((function(n){n.data.forEach((function(n){n.partnerId===t&&(e=n.message)})),a.setState({disabled:!1,message:e,loading:!1})})).catch((function(e){console.log(e),a.setState({loading:!1})}))}else a.setState({disabled:!0,loading:!0}),J()({method:"post",url:"".concat(H.RESTFULL_API_URL_V2,"/mongo/hospital/update-message-partner"),headers:{accept:"*/*",appid:"medpro",ContentType:"application/json"},data:{partnerId:a.props.manageContent.partnerId,message:a.state.message}}).then((function(e){a.setState({loading:!1})})).catch((function(e){console.log(e),a.setState({loading:!1})}))},a.onChange=function(e){a.setState({message:e.target.value})},a.state={message:"",disabled:!0,loading:!1},a}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement(g.a,{justify:"center"},l.a.createElement(E.a,{xs:24,sm:12,md:12,lg:12},l.a.createElement(ae.a,{placeholder:"Enter your message",value:this.state.message,size:"middle",disabled:this.state.disabled,onChange:this.onChange})),l.a.createElement(E.a,{xs:24,sm:4,md:8,lg:10},l.a.createElement(z.a,{type:"primary",size:"middle",onClick:this.onClick,loading:this.state.loading},"Update Message")))}}]),n}(l.a.Component)),ce=Object(O.b)((function(e){return{manageContent:e.manageContent}}),(function(e){return{getManageContent:function(){e(re())}}}))(oe),se=(n(157),n(75)),le=se.a.Option,ie=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.getHospitalList()},e.handleChange=function(t){localStorage.setItem("hospital",t),e.props.getManageContent(t)},e.showOption=function(){return e.props.hospitalList.map((function(e,t){return l.a.createElement(le,{value:e.partnerId,key:t},e.name)}))},e}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement(se.a,{defaultValue:this.props.default,style:{width:320},onChange:this.handleChange,size:"middle"},this.showOption())}}]),n}(l.a.Component),pe=Object(O.b)((function(e){return{hospitalList:e.hospitalList}}),(function(e){return{getHospitalList:function(){e({type:"GET_HOSPITAL_LIST"})},getManageContent:function(t){e(re(t))}}}))(ie),ue=se.a.Option,me=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=function(){e.props.getListFile(e.props.subfolAppIcons.subfolAppIcons),e.props.listSubFol()},e.handleChange=function(t){e.props.getListFile(t)},e.showOption=function(e){return e.map((function(e,t){return l.a.createElement(ue,{value:e.value,key:t},e.name)}))},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.subfolAppIcons.listSubFol.map((function(e,t){var n=e.slice(22).length>0?e.slice(22):"(root)";return{value:e.replace(/\//g,"-").slice(22),name:n}}));return l.a.createElement(se.a,{defaultValue:this.props.subfolAppIcons.subfolAppIcons,style:{width:320},onChange:this.handleChange,size:"middle"},this.showOption(e))}}]),n}(l.a.Component),de=Object(O.b)((function(e){return{subfolAppIcons:e.subfolAppIcons}}),(function(e){return{getListFile:function(t){e(Z(t))},listSubFol:function(){e({type:"GET_SUBFOL_LIST"})}}}))(me),fe=(n(260),function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){J.a.post("".concat(H.DOMAIN_URL,"/checkAuth"),{token:localStorage.getItem("token")}).then((function(e){a.setState({isLogin:e.data.isLogin})})).catch((function(e){a.setState({isLogin:!1})})),a.props.getManageContent(a.props.manageContent.partnerId)},a.changeHospital=function(e){},a.showAvatar=function(e){return e.map((function(e,t){if("content"!==e.fieldName)return l.a.createElement(E.a,{xs:24,sm:12,md:8,lg:4,key:t},l.a.createElement(V,{label:e.label,name:e.name,hospital:a.props.manageContent.partnerId,type:e.type,fieldName:e.fieldName,typeUrl:e.typeUrl}))}))},a.showAppIconUpload=function(e){return e.map((function(e,t){return l.a.createElement(E.a,{xs:24,sm:12,md:8,lg:4,key:t},l.a.createElement(ne,{label:e,name:e,fieldName:"customUpload",action:"customUpload",subfol:"AppIcon/".concat(a.props.subfolAppIcons.subfolAppIcons)}))}))},a.state={isLogin:!0,subfol:"",availableAt:""},a}return Object(m.a)(n,[{key:"render",value:function(){var e=this.state.isLogin,t=this.props.manageContent.content.length>0?this.props.manageContent.content:[];return l.a.createElement(l.a.Fragment,null,e?l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(E.a,{xs:24,sm:24,md:12,lg:6,offset:6},l.a.createElement("h1",null,"Hospitals Content")),l.a.createElement(E.a,{xs:24,sm:24,md:24,lg:12},l.a.createElement(pe,{changeHospital:this.changeHospital,default:this.props.manageContent.partnerId})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),this.showAvatar(t),l.a.createElement(E.a,{xs:24,sm:12,md:8,lg:4},l.a.createElement(Q,{label:"content.json",name:"content",hospital:this.props.manageContent.partnerId,type:"application/json",fieldName:"content",action:"upload"})),l.a.createElement(E.a,{xs:24,sm:24,md:24,lg:24},l.a.createElement(ce,null))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(E.a,{xs:24,sm:24,md:16,lg:4,offset:6},l.a.createElement("h1",null,"App Icon")),l.a.createElement(E.a,{xs:24,sm:24,md:23,lg:14},l.a.createElement(de,null)),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),this.showAppIconUpload(this.props.subfolAppIcons.listFileAppIcons),l.a.createElement(E.a,{xs:24,sm:12,md:8,lg:4},l.a.createElement(ne,{label:"New File",fieldName:"customUpload",action:"customUpload",subfol:"AppIcon/".concat(this.props.subfolAppIcons.subfolAppIcons)}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)):l.a.createElement(h.a,{to:{pathname:"/login"}}))}}]),n}(l.a.Component)),he=Object(O.b)((function(e){return{manageContent:e.manageContent,subfolAppIcons:e.subfolAppIcons}}),(function(e){return{getManageContent:function(t){e(re(t))}}}))(fe),be=(n(261),n(87)),ge={labelCol:{span:8},wrapperCol:{span:8}},Ee={wrapperCol:{offset:8,span:16}},Oe=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onFinish=function(t){J.a.post("".concat(H.DOMAIN_URL,"/login"),{username:t.username,password:t.password}).then((function(t){t.data?(localStorage.setItem("token",t.data),e.props.history.push("/")):alert("Wrong username or password!")})).catch((function(e){console.log(e),alert("Some error have happened!")}))},e.onFinishFailed=function(e){console.log("Failed:",e)},e.componentDidMount=function(){e.props.location.state&&e.props.location.state.message&&alert(e.props.location.state.message)},e}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(be.a,Object.assign({},ge,{name:"basic",initialValues:{remember:!0},onFinish:this.onFinish,onFinishFailed:this.onFinishFailed}),l.a.createElement(be.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}]},l.a.createElement(ae.a,null)),l.a.createElement(be.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},l.a.createElement(ae.a.Password,null)),l.a.createElement(be.a.Item,Ee,l.a.createElement(z.a,{type:"primary",htmlType:"submit"},"Submit"))))}}]),n}(l.a.Component),ve=[{path:"/",exact:!0,main:function(e){return l.a.createElement(he,e)}},{path:"/login",exact:!1,main:function(e){return l.a.createElement(Oe,e)}}],Ie=n(48),_e=Object(Ie.a)(),Le=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).showContentMenus=function(e){var t=null;return e.length>0&&(t=e.map((function(e,t){return l.a.createElement(h.b,{key:t,path:e.path,exact:e.exact,render:e.main})}))),l.a.createElement(h.d,null,t)},e}return Object(m.a)(n,[{key:"render",value:function(){return l.a.createElement(b.a,{history:_e},l.a.createElement("div",{className:"App"},this.showContentMenus(ve)))}}]),n}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=n(59),Se=n(9),Ae=n.n(Se),ye=n(8),we=n(125),Te=function(){var e=Object(we.a)(Ae.a.mark((function e(t){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",J.a.get(t));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ce=function(e){return Te(e)},Ue=Ae.a.mark(Ne),xe=Ae.a.mark(ke),Fe=Ae.a.mark(Re);function Ne(e){var t,n,a;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ye.b)(Ce,"".concat(H.RESTFULL_API_URL_V2,"/mongo/hospital/list"));case 3:if(200===(t=e.sent).status&&!t.data.error_code){e.next=6;break}throw new Error("L\u1ed7i server!");case 6:if(!t){e.next=11;break}return n=t.data,a=n.map((function(e,t){return{name:e.name,partnerId:e.partnerId}})),e.next=11,Object(ye.d)({type:"GET_HOSPITAL_LIST_SUCCESS",payload:a});case 11:e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(0),e.next=17,Object(ye.d)({type:"GET_HOSPITAL_LIST_FAIL",error:e.t0});case 17:case"end":return e.stop()}}),Ue,null,[[0,13]])}function ke(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.f)("GET_HOSPITAL_LIST",Ne);case 2:case"end":return e.stop()}}),xe)}function Re(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Object(ye.c)(ke)]);case 2:case"end":return e.stop()}}),Fe)}var Me=function(e){return Te(e)},Ge=Ae.a.mark(He),De=Ae.a.mark(We),Pe=Ae.a.mark(Be);function He(e){var t,n,a;return Ae.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,Object(ye.b)(Me,"".concat(H.DOMAIN_URL,"/content/").concat(e.partnerId));case 3:if(200===(t=r.sent).status&&!t.data.error_code){r.next=6;break}throw new Error("L\u1ed7i server!");case 6:if(!t){r.next=11;break}return n=t.data,a=n.imageManage?n.imageManage:[],r.next=11,Object(ye.d)({type:"GET_MANAGE_CONTENT_SUCCESS",payload:a});case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(0),r.next=17,Object(ye.d)({type:"GET_MANAGE_CONTENT_FAIL",error:r.t0});case 17:case"end":return r.stop()}}),Ge,null,[[0,13]])}function We(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.f)("GET_MANAGE_CONTENT",He);case 2:case"end":return e.stop()}}),De)}function Be(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Object(ye.c)(We)]);case 2:case"end":return e.stop()}}),Pe)}var Ve=function(e){return Te(e)},ze=Ae.a.mark(Qe),Ke=Ae.a.mark(Ze),Xe=Ae.a.mark(et),Ye=Ae.a.mark(tt),qe=Ae.a.mark(nt),Je=Ae.a.mark(at),$e=Ae.a.mark(rt);function Qe(e){var t,n,a,r,o;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ye.e)((function(e){return e.subfolAppIcons.subfolAppIcons}));case 3:return t=e.sent,n=t.length>0?"".concat(H.DOMAIN_URL,"/getListFile/client-upload-AppIcon-").concat(t):"".concat(H.DOMAIN_URL,"/getListFile/client-upload-AppIcon"),e.next=7,Object(ye.b)(Ve,n);case 7:if(200===(a=e.sent).status&&!a.data.error_code){e.next=10;break}throw new Error("L\u1ed7i server!");case 10:if(!a){e.next=15;break}return r=a.data,o=r.filter((function(e){return e})),e.next=15,Object(ye.d)({type:"GET_LIST_FILE_SUCCESS",payload:o});case 15:e.next=21;break;case 17:return e.prev=17,e.t0=e.catch(0),e.next=21,Object(ye.d)({type:"GET_LIST_FILE_FAIL",error:e.t0});case 21:case"end":return e.stop()}}),ze,null,[[0,17]])}function Ze(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.f)("GET_LIST_FILE",Qe);case 2:case"end":return e.stop()}}),Ke)}function et(e){var t,n,a,r,o,c,s,l;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ye.e)((function(e){return e.subfolAppIcons.subfolAppIcons}));case 3:return t=e.sent,e.next=6,Object(ye.e)((function(e){return e.subfolAppIcons.listFileAppIcons}));case 6:return n=e.sent,a=t.length>0?"".concat(H.DOMAIN_URL,"/getListFile/client-upload-AppIcon-").concat(t):"".concat(H.DOMAIN_URL,"/getListFile/client-upload-AppIcon"),e.next=10,Object(ye.b)(Ve,a);case 10:if(200===(r=e.sent).status&&!r.data.error_code){e.next=13;break}throw new Error("L\u1ed7i server!");case 13:if(!r){e.next=21;break}return o=r.data,c=o.filter((function(e){return e})),s=n.filter((function(e){return-1!==c.indexOf(e)})),l=[],c.forEach((function(e){-1===s.indexOf(e)&&l.push(e)})),e.next=21,Object(ye.d)({type:"GET_NEW_LIST_FILE_SUCCESS",payload:[].concat(Object(K.a)(s),l)});case 21:e.next=27;break;case 23:return e.prev=23,e.t0=e.catch(0),e.next=27,Object(ye.d)({type:"GET_NEW_LIST_FILE_FAIL",error:e.t0});case 27:case"end":return e.stop()}}),Xe,null,[[0,23]])}function tt(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.f)("GET_NEW_LIST_FILE",et);case 2:case"end":return e.stop()}}),Ye)}function nt(e){var t,n;return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ye.b)(Ve,"".concat(H.DOMAIN_URL,"/getSubFol/client-upload-AppIcon"));case 3:if(200===(t=e.sent).status&&!t.data.error_code){e.next=6;break}throw new Error("L\u1ed7i server!");case 6:if(!t){e.next=10;break}return n=t.data,e.next=10,Object(ye.d)({type:"GET_SUBFOL_LIST_SUCCESS",payload:n});case 10:e.next=16;break;case 12:return e.prev=12,e.t0=e.catch(0),e.next=16,Object(ye.d)({type:"GET_SUBFOL_LIST_FAIL",error:e.t0});case 16:case"end":return e.stop()}}),qe,null,[[0,12]])}function at(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.f)("GET_SUBFOL_LIST",nt);case 2:case"end":return e.stop()}}),Je)}function rt(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Object(ye.c)(Ze),Object(ye.c)(tt),Object(ye.c)(at)]);case 2:case"end":return e.stop()}}),$e)}var ot=Ae.a.mark(ct);function ct(){return Ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ye.a)([Object(ye.c)(Re),Object(ye.c)(Be),Object(ye.c)(rt)]);case 2:case"end":return e.stop()}}),ot)}var st=n(16),lt={username:{value:""},password:{value:""}};var it=[];var pt={partnerId:localStorage.getItem("hospital")||"dkkvangiang",content:[]};var ut={subfolAppIcons:"image",listFileAppIcons:[],listSubFol:[]};var mt=Object(je.combineReducers)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:lt,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"SAVE_FIELD_LOGIN":return Object(st.a)(Object(st.a)({},e),t.payload);default:return e}},hospitalList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_HOSPITAL_LIST":return Object(K.a)(e);case"GET_HOSPITAL_LIST_SUCCESS":return Object(K.a)(t.payload);case"GET_HOSPITAL_LIST_FAIL":return[].concat(Object(K.a)(e),Object(K.a)(t.error));default:return e}},manageContent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_MANAGE_CONTENT":return Object(st.a)(Object(st.a)({},e),{},{partnerId:t.partnerId});case"GET_MANAGE_CONTENT_SUCCESS":return Object(st.a)(Object(st.a)({},e),{},{content:t.payload});case"GET_MANAGE_CONTENT_FAIL":return Object(st.a)(Object(st.a)({},e),t.error);default:return e}},subfolAppIcons:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ut,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"GET_LIST_FILE":return Object(st.a)(Object(st.a)({},e),{},{subfolAppIcons:t.payload});case"GET_LIST_FILE_SUCCESS":return Object(st.a)(Object(st.a)({},e),{},{listFileAppIcons:t.payload});case"GET_LIST_FILE_FAIL":return Object(st.a)(Object(st.a)({},e),t.error);case"GET_NEW_LIST_FILE":return Object(st.a)({},e);case"GET_NEW_LIST_FILE_SUCCESS":return Object(st.a)(Object(st.a)({},e),{},{listFileAppIcons:t.payload});case"GET_NEW_LIST_FILE_FAIL":return Object(st.a)(Object(st.a)({},e),t.error);case"GET_SUBFOL_LIST_SUCCESS":return Object(st.a)(Object(st.a)({},e),{},{listSubFol:t.payload});case"GET_SUBFOL_LIST_FAIL":return Object(st.a)(Object(st.a)({},e),t.error);default:return e}}}),dt=n(170),ft=n(169),ht=Object(dt.a)(),bt=Object(ft.composeWithDevTools)({}),gt=Object(je.createStore)(mt,bt(Object(je.applyMiddleware)(ht)));ht.run(ct),p.a.render(l.a.createElement(O.a,{store:gt},l.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[172,1,2]]]);
//# sourceMappingURL=main.c3d94eae.chunk.js.map