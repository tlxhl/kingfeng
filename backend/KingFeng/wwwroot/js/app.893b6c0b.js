(function(e){function t(t){for(var s,o,r=t[0],c=t[1],d=t[2],l=0,g=[];l<r.length;l++)o=r[l],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&g.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);u&&u(t);while(g.length)g.shift()();return i.push.apply(i,d||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(s=!1)}s&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},n={app:0},i=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var d=0;d<r.length;d++)t(r[d]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},1:function(e,t){},2154:function(e,t,a){},"222d":function(e,t,a){},3139:function(e,t,a){"use strict";a("f407")},"56d7":function(e,t,a){"use strict";a.r(t),a.d(t,"preventReClick",(function(){return ae}));a("380f");var s=a("f64c"),n=(a("0c1d"),a("8592")),i=(a("02cf"),a("9839")),o=(a("0a41"),a("1d87")),r=(a("a71a"),a("b558")),c=(a("19ac"),a("cdeb")),d=(a("805a"),a("0c63")),u=(a("e1f5"),a("5efb")),l=(a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("159b"),a("b0c0"),a("2b0e")),g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header",{attrs:{title:"KingFeng"}}),a("div",{attrs:{id:"app"}},[a("router-view")],1)],1)},m=[],p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"header"}},[s("div",{staticClass:"header-wrapper"},[s("div",{staticClass:"header-content"},[s("img",{staticClass:"header-logo",attrs:{src:a("cf05")}}),s("div",{staticClass:"header-tittle"},[e._v(" "+e._s(e.title)+" ")])])])])},h=[],v={name:"Header",props:["title"]},f=v,k=(a("8baf"),a("2877")),A=Object(k["a"])(f,p,h,!1,null,null,null),w=A.exports,C={name:"App",components:{Header:w}},y=C,b=(a("034f"),Object(k["a"])(y,g,m,!1,null,null,null)),$=b.exports,I=a("28dd"),S=a("8c4f"),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("Notice",{staticClass:"Card ant-card ant-card-bordered"}),e.lodings.noticIsShow?a("div",[a("a-spin",{attrs:{spinning:!e.lodings.noticeIsLoding}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.lodings.noticeIsLoding,expression:"lodings.noticeIsLoding"}],staticClass:"Card ant-card ant-card-bordered"},[a("div",{staticClass:"ant-card-head"},[a("div",{staticClass:"ant-card-head-wrapper"},[a("a-icon",{attrs:{type:"calendar",theme:"twoTone"}}),a("div",{staticClass:"ant-card-head-title"},[e._v(e._s(e.config.name)+"温馨提醒您")])],1)]),a("div",{staticClass:"ant-card-body",domProps:{innerHTML:e._s(e.config.notice)}})])])],1):e._e(),a("a-spin",{attrs:{spinning:!e.lodings.serverIsLoding}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.lodings.serverIsLoding,expression:"lodings.serverIsLoding"}],staticClass:"Card ant-card ant-card-bordered"},[a("div",{staticClass:"ant-card-head"},[a("div",{staticClass:"ant-card-head-wrapper"},[a("a-icon",{staticStyle:{color:"#2c99ff"},attrs:{type:"radar-chart"}}),a("div",{staticClass:"ant-card-head-title"},[e._v("节点选择")])],1)]),a("div",{staticClass:"ant-card-body"},[a("div",{staticClass:"text-center"},[a("div",[e.servers?a("a-select",{staticStyle:{width:"100%"},attrs:{"default-active-first-option":!1},on:{change:e.nodeChange}},e._l(e.servers,(function(t){return a("a-select-option",{key:t.id,attrs:{disabled:t.maxCount-t.currentCount<=0&&1}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e()],1)])])])]),e.selecItem?a("div",{staticClass:"Card ant-card ant-card-bordered"},[a("div",{staticClass:"ant-card-head"},[a("div",{staticClass:"ant-card-head-wrapper"},[a("a-icon",{attrs:{type:"code",theme:"twoTone"}}),a("div",{staticClass:"ant-card-head-title"},[e._v("Cookies登录")])],1)]),a("div",{staticClass:"ant-card-body"},[a("div",{staticClass:"text-center"},[a("a-input",{staticClass:"magrin",staticStyle:{"text-align":"center"},attrs:{type:"text",placeholder:"请输入cookies"},model:{value:e.cookies,callback:function(t){e.cookies=t},expression:"cookies"}}),a("br"),a("a-input",{staticClass:"magrin",staticStyle:{width:"60%","text-align":"center"},attrs:{type:"text",placeholder:"请输入备注"},model:{value:e.remarks,callback:function(t){e.remarks=t},expression:"remarks"}}),a("br"),a("a-button",{staticClass:"magrin",attrs:{type:"primary",shape:"round",loading:e.isLogin.loading},on:{click:e.CookiesCheck}},[e._v(" 登录 ")])],1)])]):e._e()],1)},x=[],L=a("1da1"),O=(a("96cf"),a("ac1f"),a("466d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Card ant-card ant-card-bordered"},[a("div",{staticClass:"ant-card-head"},[a("div",{staticClass:"ant-card-head-wrapper"},[a("a-icon",{attrs:{type:"calendar",theme:"twoTone"}}),a("div",{staticClass:"ant-card-head-title"},[e._v(" 作者温馨提醒您 ")])],1)]),a("div",{staticClass:"ant-card-body"},[a("div",[a("p",[e._v(e._s(e.p1))]),a("p",[e._v(e._s(e.p2))]),a("div",{staticStyle:{}},[e._v(" 本项目在 "),a("a",{on:{click:function(t){return e.open("https://github.com/QiFengg/kingfeng")}}},[e._v("Github")]),e._v(" 和 "),a("a",{on:{click:function(t){return e.open("https://github.com/QiFengg/kingfeng")}}},[e._v("TG频道")]),e._v(" 进行分发✨ ")])])])])}),T=[],D={data:function(){return{p1:"请关闭免密支付以及打开支付验密",p2:"建议微信绑定账户以保证提现能到账",p3:"需手动抓取Cookies 教程请点击下面链接获取"}},mounted:function(){},methods:{open:function(e){window.open(e,"_blank")}}},B=D,E=(a("d8db"),Object(k["a"])(B,O,T,!1,null,null,null)),Q=E.exports,M={components:{Notice:Q},data:function(){return{servers:void 0,lodings:{serverIsLoding:!0,noticeIsLoding:!0,noticIsShow:!1},isLogin:{loading:!1},cookies:"",remarks:"",config:{notice:void 0,name:void 0},selecItem:void 0}},mounted:function(){console.log("本项目在 github:https://github.com/QiFengg/kingfeng 进行分发 喜欢的话麻烦给个start 谢谢~"),console.log("By:qifeng https://github.com/QiFengg"),this.getServer()},created:function(){document.title="KingFeng - 登录页面";var e=localStorage.getItem("uid"),t=localStorage.getItem("adminkey");e?this.$router.push("/index"):t&&this.$router.push("/admin"),this.getConfig()},methods:{CookiesCheck:function(){var e=this;return Object(L["a"])(regeneratorRuntime.mark((function t(){var a,s,n,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.$set(e.isLogin,"loading",!0),a=e.selecItem.address,s=e.cookies.match(/pin=(.*?);/)&&e.cookies.match(/pin=(.*?);/)[1],n=e.cookies.match(/wskey=(.*?);/)&&e.cookies.match(/wskey=(.*?);/)[1],i=e.cookies.match(/pt_key=(.*?);/)&&e.cookies.match(/pt_key=(.*?);/)[1],o=e.cookies.match(/pt_pin=(.*?);/)&&e.cookies.match(/pt_pin=(.*?);/)[1],!s||!n){t.next=10;break}e.$http.get("api/Userexitst?ql_url="+a+"&cookies="+e.cookies).then((function(t){if(200===t.data.code)return localStorage.setItem("name",t.data.msg),localStorage.setItem("address",a),localStorage.setItem("uid",t.data.data),e.$message.success("欢迎回来 "+t.data.msg,2),void setTimeout((function(){e.$router.push({name:"Index",params:{push:e.push}})}),1e3);if(e.selecItem.maxCount-1==e.selecItem.currentCount)return e.$message.warning("当前ck数量达到最大数值,无法添加ck ",2),void e.$set(e.isLogin,"loading",!1);if(""==e.remarks)return e.$message.error("备注不能为空",1.5),void e.$set(e.isLogin,"loading",!1);if(e.remarks.length<3)return e.$message.error("备注长度不能少于三个字",1.5),void e.$set(e.isLogin,"loading",!1);if(e.remarks.length>20)return e.$message.error("备注长度不能超过二十个字",1.5),void e.$set(e.isLogin,"loading",!1);var s=[{name:"JD_WSCK",value:e.cookies,remarks:e.remarks}];e.$http.get("api/CheeckWsCk?wsck="+e.cookies).then((function(t){200===t.data.code?e.$http.post("api/env?ql_url="+a,s).then((function(t){if(200!==t.data.code)return e.$message.error(t.data.msg,1.5),void e.$set(e.isLogin,"loading",!1);localStorage.setItem("uid",t.data.data._id[0]),setTimeout((function(){e.$router.push({name:"Index",params:{push:e.push}})}),1e3),localStorage.setItem("name",e.remarks),localStorage.setItem("address",a),e.$message.success("欢迎回来 "+e.remarks,2)}),(function(t){e.$message.error(t.data.msg,1.5),e.$set(e.isLogin,"loading",!1)})):(e.$message.error(t.data.msg,1.5),e.$set(e.isLogin,"loading",!1))}))})),t.next=19;break;case 10:if(!i||!o){t.next=14;break}e.$http.get("api/Userexitst?ql_url="+a+"&cookies="+e.cookies).then((function(t){if(200===t.data.code)return localStorage.setItem("name",t.data.msg),localStorage.setItem("address",a),localStorage.setItem("uid",t.data.data),e.$message.success("欢迎回来 "+t.data.msg,2),void setTimeout((function(){e.$router.push({name:"Index",params:{push:e.push}})}),1e3);if(e.selecItem.maxCount-1==e.selecItem.currentCount)return e.$message.warning("当前ck数量达到最大数值,无法添加ck ",2),void e.$set(e.isLogin,"loading",!1);if(""==e.remarks)return e.$message.error("备注不能为空",1.5),void e.$set(e.isLogin,"loading",!1);if(e.remarks.length<3)return e.$message.error("备注长度不能少于三个字",1.5),void e.$set(e.isLogin,"loading",!1);if(e.remarks.length>20)return e.$message.error("备注长度不能超过二十个字",1.5),void e.$set(e.isLogin,"loading",!1);var s=[{name:"JD_COOKIE",value:e.cookies,remarks:e.remarks}];e.$http.get("api/CheeckPinCk?pinck="+e.cookies).then((function(t){200==t.data.code?e.$http.post("api/env?ql_url="+a,s).then((function(t){return 200===t.data.code?(localStorage.setItem("uid",t.data.data._id[0]),localStorage.setItem("name",e.remarks),setTimeout((function(){e.$router.push({name:"Index",params:{push:e.push}})}),1e3),localStorage.setItem("address",a),e.$message.success("欢迎回来 "+e.remarks,2),void e.$set(e.isLogin,"loading",!1)):(e.$message.error(t.data.msg,1.5),void e.$set(e.isLogin,"loading",!1))}),(function(t){e.$message.error(t.data.msg,1.5)})):(e.$message.error(t.data.msg,1.5),e.$set(e.isLogin,"loading",!1))}))})),t.next=19;break;case 14:if(""!=e.cookies){t.next=18;break}return e.$message.error("输入框不能为空",1.5),e.$set(e.isLogin,"loading",!1),t.abrupt("return");case 18:e.$http.get("api/admin?key="+e.cookies).then((function(t){return 200===t.data.code?(localStorage.setItem("adminkey",e.cookies),e.$message.success("管理员 欢迎回来 ",2),setTimeout((function(){}),200),setTimeout((function(){e.$router.push({name:"Admin"})}),1e3),void e.$set(e.isLogin,"loading",!1)):(e.$message.error("登录失败,请检查是否输入正确",1.5),void e.$set(e.isLogin,"loading",!1))}),(function(t){e.$message.error(t.data.msg,2),e.$set(e.isLogin,"loading",!1)}));case 19:case"end":return t.stop()}}),t)})))()},getServer:function(){var e=this;this.lodings.serverIsLoding=!this.lodings.serverIsLoding,this.$http.get("api/servers").then(function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:200===a.data.code?e.servers=a.data.data:e.$message.error(a.data.msg,1.5),setTimeout((function(){e.lodings.serverIsLoding=!e.lodings.serverIsLoding}),200);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){e.$message.error(t.data.msg,3)}))},getConfig:function(){var e=this;this.lodings.noticeIsLoding=!this.lodings.noticeIsLoding,this.$http.get("api/config").then(function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:200===a.data.code?null!=a.data.data.name&&null!=a.data.data.notice&&(e.config=a.data.data,console.log(e.lodings.noticIsShow),e.$set(e.lodings,"noticIsShow",!e.lodings.noticIsShow),console.log(e.lodings.noticIsShow),setTimeout((function(){e.lodings.noticeIsLoding=!e.lodings.noticeIsLoding}),200)):e.$message.error(a.data.msg,2);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){e.$message.error(t.data.msg,2)}))},nodeChange:function(e){this.selecItem=this.servers[e-1],console.log(this.selecItem)}}},P=M,j=(a("66c0"),Object(k["a"])(P,_,x,!1,null,null,null)),N=j.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"Card ant-card ant-card-bordered"},[a("div",{staticClass:"ant-card-head"},[a("div",{staticClass:"ant-card-head-wrapper"},[a("a-icon",{attrs:{type:"crown",theme:"twoTone"}}),a("div",{staticClass:"ant-card-head-title"},[e._v(" 个人中心 ")])],1)]),a("div",{staticClass:"ant-card-body"},[a("br"),a("div",[a("p",[e._v("昵称："+e._s(e.remarks))]),a("p",[e._v("添加时间："+e._s(e.timestamp))]),a("p",[e._v(" 状态： "),a("a-icon",{attrs:{type:e.statuss,theme:"twoTone","two-tone-color":e.color}}),e._v(e._s(0==e.status?" 正常":" 被禁用")+" ")],1)]),a("br"),a("a-input",{attrs:{placeholder:"请输入新的cookies"},model:{value:e.wskey,callback:function(t){e.wskey=t},expression:"wskey"}}),a("div",[a("br"),a("a-space",[a("a-button",{attrs:{type:"primary",shape:"round"},on:{click:e.updatewskey}},[e._v(" 更新cookies ")]),a("a-button",{attrs:{type:"primary",shape:"round"},on:{click:e.logout}},[e._v(" 退出登录 ")]),a("a-button",{attrs:{type:"danger",shape:"round"},on:{click:e.remove}},[e._v(" 删除账号 ")])],1)],1)],1)]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.pushIsShow,expression:"pushIsShow"}],staticClass:"Card ant-card ant-card-bordered"},[a("div",{staticClass:"ant-card-head"},[a("div",{staticClass:"ant-card-head-wrapper"},[a("a-icon",{attrs:{type:"pushpin",theme:"twoTone"}}),a("div",{staticClass:"ant-card-head-title"},[e._v(" 扫码接收通知 ")])],1)]),a("div",{staticClass:"ant-card-body"},[a("a-spin",{attrs:{spinning:!e.pushLoding}},[a("img",{staticClass:"img",attrs:{src:e.push}})])],1)])])},Y=[],z={data:function(){return{pushIsShow:!1,pushLoding:!1,push:"",wskey:"",remarks:"",timestamp:void 0,status:0}},computed:{statuss:function(){return 0==this.status?"check-circle":"close-circle"},color:function(){return 0==this.status?"#52c41a":"#DC143C"}},created:function(){document.title="KingFeng - 个人中心";var e=localStorage.getItem("uid");e||this.$router.push("/"),this.remarks=localStorage.getItem("name"),this.timestamp=localStorage.getItem("timestamp")},mounted:function(){var e=this,t=localStorage.getItem("uid"),a=localStorage.getItem("address");this.$http.get("api/exitst?uid="+t+"&ql_url="+a).then((function(t){if(200===t.data.code){var a=t.data.msg;e.time=e.dateFormat(t.data.msg),localStorage.setItem("timestamp",e.dateFormat(a)),t.data.data||(e.status=1,e.$message.error("用户被管理员禁用,请联系管理员处理",3))}else e.$message.error("用户被删除,请联系管理员处理",3),e.delete(),e.$router.push("/")})),this.getConfig()},methods:{dateFormat:function(e){var t=new Date(e),a=t.getFullYear(),s=t.getMonth()+1;s=s<10?"0"+s:s;var n=t.getDate();n=n<10?"0"+n:n;var i=t.getHours();i=i<10?"0"+i:i;var o=t.getMinutes();o=o<10?"0"+o:o;var r=t.getSeconds();r=r<10?"0"+r:r;var c=a+"-"+s+"-"+n+" "+i+":"+o+":"+r;return c},remove:function(){var e=this,t=localStorage.getItem("address"),a=localStorage.getItem("uid");this.$http.delete("api/deleteEnv?ql_url="+t+"&uid="+a).then((function(t){200==t.data.code?(e.delete(),e.$message.success("删除账号成功",2),e.$router.push("/")):e.$message.error("删除失败,请联系管理员处理")}))},updatewskey:function(){var e=this,t=localStorage.getItem("address"),a=this.wskey.match(/pin=(.*?);/)&&this.wskey.match(/pin=(.*?);/)[1];decodeURIComponent(a);var s=this.wskey.match(/wskey=(.*?);/)&&this.wskey.match(/wskey=(.*?);/)[1],n=this.wskey.match(/pt_key=(.*?);/)&&this.wskey.match(/pt_key=(.*?);/)[1];decodeURIComponent(a);var i=this.wskey.match(/pt_pin=(.*?);/)&&this.wskey.match(/pt_pin=(.*?);/)[1];a&&s?this.$http.post("api/updateEnv?ql_url="+t+"&uid="+localStorage.getItem("uid")+"&wskey="+this.wskey).then((function(t){200==t.data.code?(e.wskey="",e.$message.success("更新wskey成功",2)):e.$message.error("更新失败,请联系管理员处理")})):n&&i&&this.$http.get("api/CheeckPinCk?pinck="+this.wskey).then((function(a){if(200!=a.data.code)return e.$message.error("pinck过期,请填写状态正常的pinck",1.5),void e.$set(e.isLogin,"loading",!1);e.$http.post("api/updateEnv?ql_url="+t+"&uid="+localStorage.getItem("uid")+"&wskey="+e.wskey).then((function(t){200==t.data.code?(e.wskey="",e.$message.success("更新pinck成功",2)):e.$message.error("更新失败,请联系管理员处理")}))}))},checkPinck:function(){this.$http.get("api/").then((function(e){return!(e.data.data.code=200)}))},getConfig:function(){var e=this;this.$http.get("api/config").then(function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:200===a.data.code?(setTimeout((function(){}),200),e.push=a.data.data.push,null!=a.data.data.push&&(e.pushIsShow=!0),e.pushLoding=!e.pushLoding):e.$message.error("连接服务器错误,请稍后再试",1.5);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){e.$message.error(t.data.msg,2)}))},delete:function(){localStorage.removeItem("uid"),localStorage.removeItem("name"),localStorage.removeItem("address")},logout:function(){this.delete(),this.$message.success("退出登录成功",2),this.$router.push("/")}}},G=z,H=(a("d44d"),Object(k["a"])(G,R,Y,!1,null,null,null)),K=H.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("div",{staticClass:"Card ant-card ant-card-bordered"},[a("div",{staticClass:"ant-card-head"},[a("div",{staticClass:"ant-card-head-wrapper"},[a("a-icon",{attrs:{type:"crown",theme:"twoTone"}}),a("div",{staticClass:"ant-card-head-title"},[e._v(" 个人中心 ")])],1)]),a("div",{staticClass:"ant-card-body"},[a("div",[a("a-input",{attrs:{type:"text",placeholder:"请输入新的SecretKey"},model:{value:e.secretkey,callback:function(t){e.secretkey=t},expression:"secretkey"}})],1),a("br"),a("div",[a("a-space",{attrs:{size:"large"}},[a("a-button",{attrs:{type:"primary",shape:"round"},on:{click:e.updateadminkey}},[e._v(" 修改SecretKey ")]),a("a-button",{attrs:{type:"danger",shape:"round"},on:{click:e.logout}},[e._v(" 退出登录 ")])],1)],1)])]),a("div",{staticClass:"Card ant-card ant-card-bordered"},[a("div",{staticClass:"ant-card-head"},[a("div",{staticClass:"ant-card-head-wrapper"},[a("a-icon",{attrs:{type:"tool",theme:"twoTone"}}),a("div",{staticClass:"ant-card-head-title"},[e._v(" 配置管理 ")])],1)]),a("div",{staticClass:"ant-card-body"},[a("a-spin",{attrs:{spinning:!e.isLoding}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.isLoding,expression:"isLoding"}]},[a("div",[a("a-input",{attrs:{type:"text",placeholder:"公告来自谁"},model:{value:e.config.name,callback:function(t){e.$set(e.config,"name",t)},expression:"config.name"}})],1),a("br"),a("div",[a("a-input",{attrs:{type:"text",placeholder:"公告内容"},model:{value:e.config.notice,callback:function(t){e.$set(e.config,"notice",t)},expression:"config.notice"}})],1),a("br"),a("div",[a("a-input",{attrs:{type:"text",placeholder:"推送图片图床地址"},model:{value:e.config.push,callback:function(t){e.$set(e.config,"push",t)},expression:"config.push"}})],1),a("br"),a("a-space",{attrs:{size:"large"}},[a("a-button",{attrs:{type:"primary",shape:"round"},on:{click:e.savaConfig}},[e._v(" 保存配置 ")]),a("a-button",{attrs:{type:"primary",shape:"round"},on:{click:function(t){return e.open(e.config.push)}}},[e._v(" 预览推送图片 ")])],1)],1)])],1)])])},J=[],q={data:function(){return{config:{notice:void 0,name:void 0,push:void 0},isLoding:!1,taskName:"",logs:void 0,adminkey:"",timer:void 0,secretkey:""}},created:function(){var e=this,t=localStorage.getItem("adminkey");t?this.$http.get("api/admin?key="+t).then((function(t){200===t.data.code?e.$http.get("api/config").then(function(){var t=Object(L["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:200===a.data.code?(e.config=a.data.data,setTimeout((function(){e.isLoding=!e.isLoding}),200)):e.$message.error(a.data.msg,2);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),(function(t){e.$message.error(t.data.msg,2)})):(e.$message.error("SecretKey已被更改,请重新登录",2),localStorage.removeItem("adminkey"),e.$router.push("/"))})):this.$router.push("/")},mounted:function(){this.adminkey=localStorage.getItem("adminkey"),document.title="KingFeng - 管理员"},beforeDestroy:function(){},methods:{wskeytask:function(){var e=this;this.taskName="",this.$http.put("api/task?taskName=ws&key="+this.adminkey).then((function(t){200===t.data.code?(e.$message.success("执行wskey转换成功",1.5),e.timer=setInterval(e.readLog,1e3)):e.$message.error("错误:"+t.data.msg,2)}))},logout:function(){var e=this;localStorage.removeItem("adminkey"),this.$message.success("退出成功",1),setTimeout((function(){e.$router.push("/")}),1e3)},savaConfig:function(){var e=this,t={name:this.config.name,push:this.config.push,notice:this.config.notice};this.$http.post("api/config",t).then((function(t){200==t.data.code&&e.$message.success("更新配置成功",1.5)}))},open:function(e){window.open(e,"_blank")},updateadminkey:function(){var e=this;this.$http.put("api/updateSecretKey?oldkey="+localStorage.getItem("adminkey")+"&newkey="+this.secretkey).then((function(t){200==t.data.code?(e.$message.success(t.data.msg+" 请重新登录",1.5),localStorage.removeItem("adminkey"),e.$router.push("/")):400==t.data.code&&e.$message.error(t.data.msg,1.5)}))}}},F=q,W=(a("3139"),Object(k["a"])(F,U,J,!1,null,null,null)),Z=W.exports;l["a"].use(S["a"]);var V=[{path:"/",name:"Login",component:N},{path:"/index",name:"Index",component:K},{path:"/admin",name:"Admin",component:Z}],X=new S["a"]({routes:V}),ee=X,te=[u["a"],d["a"],c["a"],r["a"],r["a"].TextArea,o["a"],i["a"],i["a"].Option,n["a"]];l["a"].use(I["a"]),te.forEach((function(e){l["a"].component(e.name,e)})),l["a"].config.productionTip=!1,l["a"].prototype.$message=s["a"];var ae=l["a"].directive("preventReClick",{inserted:function(e,t){console.log(e.disabled),e.addEventListener("click",(function(){e.disabled||(e.disabled=!0,setTimeout((function(){e.disabled=!1}),t.value||3e3))}))}});new l["a"]({render:function(e){return e($)},router:ee}).$mount("#app")},"66c0":function(e,t,a){"use strict";a("2154")},6860:function(e,t,a){},"85ec":function(e,t,a){},"8baf":function(e,t,a){"use strict";a("6860")},cf05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAETElEQVR4Xu2dva4NURiG35OITqvSuQR69CoNiU4hboDoUPkpTohOJ+EalCioKCWuwRWQSMiwj0zGPntm1nwz65v9PlOv+Wa+dz3nWTOz9+xzIDbrBA6su6d5AYA5BAAAAOYJmLePAQDAPAHz9jEAAJgnYN4+BgAA8wTM28cAAGCegHn7GAAAzBMwbx8DAIB5AubtYwAAME/AvH0MAADmCZi3jwEAwDwB8/YxAACYJ2DePgYAAPME+tu/KOlta9h9SQ/6d1vHCAzQP08A0J9R+Igm9OjtXWFBACgMbspu9yQ1qo3aLkkCgC1pZl0CACAK/Z46ANAfNEtAf0bhIxoDRG7vWQK2x5nVAJGTf1ytMZC1r0emXJtMAXGWTJwB+DVLoruLTrkYneV0AWCWWI8tCgDL5r3zaBhAsv6JmDEPm7qPgpu1vHQrfR5Reryd+2VdAngOMMt0/18UAPqD5jlAf0bhI/bFAN1bzXSfImY2QCRVU+6/pxiguXY4utZo1v7mLiDVlhWATCEBQKbZqHAuAFAh9CUOOXR9BoAlZqPCMdoXmru+5gUAlSYn8rDbLgIBIPGTwCVuA6cAMBTOxh7cBQxNqzUuMwAF7fzZhdvAEckBwIiwpgx1fg5QugSU5o0BSpObab8xAESdQqpPApumMMDfqd2rt33G0AoAADCGl70aO3QJ2Kumu81gAAyQDvDuo9d0J1h4QimvMzIaAAAKCSvZDQBKUivbBwMMzG3Mt3UHltw67ELrDeRmcqZ803foefAcYGhSC4zjLoAHQf9+gyClnhf4I+BJ4CZkAFiCtmTHYAlgCWAJyHgbOFQU7S91lnzvP8IANzsn+2LoyWcZt2YA2m/3lrx2HQHAJ0nnNpP5WdL5LBM79DwAYNpnAQAwlLQZxmGAgFAxAAYIwKhOCQwQkDsGwAABGNUpgQECcscAGCAAozolMEBA7hgAAwRgVKcEBgjIHQNggACM6pTAAAG5YwAMEIBRnRIYICB3DIABAjCqUwIDBOSOATBAAEZ1SmCAgNwxAAYIwKhOCQwQkDsGwAABGNUpgQECcscAGCAAozolMEBA7hgAAwRgVKcEBgjIfY0GuCzpqaSzrf55NawQhjUBcFLSM0m3Or1+k3S14L+D827gil4Pv7KZ/DOdyW+AuCvpe8EfAACsAIBTG93f6EzwB0l3JH0smPijXQAgOQDXNn/1p1uT/EPSbUnPJ0w8ALTCy3oN8ErS9c4kv5T0SNLXgMlvSmCAxAZo/8fNL5IeSnodNPEYYAUGOALgUNJjSc2VfvSGAZIb4ImkN9Gz3qoHAIkBOCHp54yTH1WaH4mKSpI6dRLIehdQJw3DowKA4aS3WwYAADBPwLx9DAAA5gmYt48BAMA8AfP2MQAAmCdg3j4GAADzBMzbxwAAYJ6AefsYAADMEzBvHwMAgHkC5u1jAAAwT8C8fQwAAOYJmLePAQDAPAHz9n8D0SxskHKY3ocAAAAASUVORK5CYII="},d44d:function(e,t,a){"use strict";a("222d")},d8db:function(e,t,a){"use strict";a("fe31")},f407:function(e,t,a){},fe31:function(e,t,a){}});
//# sourceMappingURL=app.893b6c0b.js.map