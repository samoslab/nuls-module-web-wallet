(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d839f29"],{"033b":function(e,t,s){"use strict";var r=s("e0a2"),n=s.n(r);n.a},"0a49":function(e,t,s){var r=s("9b43"),n=s("626a"),a=s("4bf8"),i=s("9def"),o=s("cd1c");e.exports=function(e,t){var s=1==e,u=2==e,c=3==e,d=4==e,l=6==e,f=5==e||l,p=t||o;return function(t,o,h){for(var b,m,w=a(t),v=n(w),g=r(o,h,3),x=i(v.length),y=0,k=s?p(t,x):u?p(t,0):void 0;x>y;y++)if((f||y in v)&&(b=v[y],m=g(b,y,w),e))if(s)k[y]=m;else if(m)switch(e){case 3:return!0;case 5:return b;case 6:return y;case 2:k.push(b)}else if(d)return!1;return l?-1:c||d?d:k}}},1169:function(e,t,s){var r=s("2d95");e.exports=Array.isArray||function(e){return"Array"==r(e)}},"188a":function(e,t,s){},1959:function(e,t,s){"use strict";s.d(t,"i",function(){return c}),s.d(t,"d",function(){return d}),s.d(t,"c",function(){return l}),s.d(t,"h",function(){return p}),s.d(t,"f",function(){return b}),s.d(t,"k",function(){return w}),s.d(t,"b",function(){return g}),s.d(t,"j",function(){return y}),s.d(t,"a",function(){return O}),s.d(t,"e",function(){return I}),s.d(t,"g",function(){return C});s("7514");var r=s("f499"),n=s.n(r),a=(s("c5f6"),s("6b54"),s("06db"),s("96cf"),s("3b8d")),i=s("9f30"),o=s("6ace"),u=s("db49");function c(e){return e===u["e"].chainId}function d(e,t){var s=e.txSerialize().length;return s+=110*t,1e5*Math.ceil(s/1024)}function l(e,t){return f.apply(this,arguments)}function f(){return f=Object(a["a"])(regeneratorRuntime.mark(function e(t,s){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=0,e.next=3,Object(i["a"])("/","getByzantineCount",[t.txSerialize().toString("hex")]).then(function(e){if(e.hasOwnProperty("result")){var n=t.txSerialize().length;n+=110*(s+e.result.value),r=1e6*Math.ceil(n/1024)}else r=-100}).catch(function(e){console.log(e),r=-100});case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}},e)})),f.apply(this,arguments)}function p(e,t,s){return h.apply(this,arguments)}function h(){return h=Object(a["a"])(regeneratorRuntime.mark(function e(t,s,r){var n,a,i,u,c,d,l,f;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=Number(Object(o["b"])(t.amount,t.fee)),a=0,i=s.nonce,u=t.amount,c=0,4===r?c=-1:5===r?c=-1:6===r?(n=t.amount,a=-1,i=t.depositHash.substring(t.depositHash.length-16),u=t.amount-t.fee):9===r?(n=t.amount,a=-1,i=t.depositHash.substring(t.depositHash.length-16),u=t.amount-t.fee,c=(new Date).valueOf()+2592e5):16===r&&(n=t.amount),d=[{address:t.fromAddress,assetsChainId:t.assetsChainId,assetsId:t.assetsId,amount:n,locked:a,nonce:i}],2!==r||t.assetsChainId===Object(o["f"])()){e.next=16;break}return d[0].amount=t.amount,e.next=11,b(Object(o["f"])(),t.assetsId,t.fromAddress);case 11:if(l=e.sent,!(l.data.balance<1e5)){e.next=15;break}return console.log("余额小于手续费"),e.abrupt("return");case 15:d.push({address:t.fromAddress,assetsChainId:Object(o["f"])(),assetsId:t.assetsId,amount:1e5,locked:a,nonce:l.data.nonce});case 16:if(f=[],15!==r&&17!==r){e.next=19;break}return e.abrupt("return",{success:!0,data:{inputs:d,outputs:f}});case 19:if(16!==r){e.next=26;break}if(!t.toAddress){e.next=25;break}return t.value&&(f=[{address:t.toAddress,assetsChainId:t.assetsChainId,assetsId:t.assetsId,amount:t.value,lockTime:c}]),e.abrupt("return",{success:!0,data:{inputs:d,outputs:f}});case 25:u=t.value;case 26:return f=[{address:t.toAddress?t.toAddress:t.fromAddress,assetsChainId:t.assetsChainId,assetsId:t.assetsId,amount:u,lockTime:c}],e.abrupt("return",{success:!0,data:{inputs:d,outputs:f}});case 28:case"end":return e.stop()}},e)})),h.apply(this,arguments)}function b(){return m.apply(this,arguments)}function m(){return m=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,s,r,n=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:2,s=n.length>1&&void 0!==n[1]?n[1]:1,r=n.length>2?n[2]:void 0,e.next=5,Object(i["a"])("/","getAccountBalance",[t,s,r]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:{balance:e.result.balance,nonce:e.result.nonce}}:{success:!1,data:e}}).catch(function(e){return{success:!1,data:e}});case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}},e)})),m.apply(this,arguments)}function w(e){return v.apply(this,arguments)}function v(){return v=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["a"])("/","validateTx",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:e.result}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),v.apply(this,arguments)}function g(e){return x.apply(this,arguments)}function x(){return x=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["a"])("/","broadcastTx",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:e.result}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),x.apply(this,arguments)}function y(e){return k.apply(this,arguments)}function k(){return k=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["a"])("/","validateTx",[t]).then(function(e){if(e.hasOwnProperty("result")){var s=e.result.value;return Object(i["a"])("/","broadcastTx",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,hash:s}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}})}return{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),k.apply(this,arguments)}function O(e){return $.apply(this,arguments)}function $(){return $=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["a"])("/","getConsensusDeposit",[1,300,t]).then(function(e){return e.result}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),$.apply(this,arguments)}function I(e){return _.apply(this,arguments)}function _(){return _=Object(a["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(i["a"])("/","getContractConstructor",[t]).then(function(e){return e.hasOwnProperty("result")?{success:!0,data:e.result.constructor}:{success:!1,data:e.error}}).catch(function(e){return{success:!1,data:e}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),_.apply(this,arguments)}function A(){return j.apply(this,arguments)}function j(){return j=Object(a["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=[{chainId:1,addressPrefix:"NULS"},{chainId:2,addressPrefix:"tNULS"}],e.next=3,Object(i["a"])("/","getAllAddressPrefix",[]).then(function(e){e.hasOwnProperty("result")?(sessionStorage.hasOwnProperty("prefixData")&&sessionStorage.removeItem("prefixData"),sessionStorage.setItem("prefixData",n()(e.result))):sessionStorage.setItem("prefixData",n()(t))}).catch(function(e){console.log(e),sessionStorage.setItem("prefixData",n()(t))});case 3:case"end":return e.stop()}},e)})),j.apply(this,arguments)}function C(e){return S.apply(this,arguments)}function S(){return S=Object(a["a"])(regeneratorRuntime.mark(function e(t){var s,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,A();case 2:if(s=JSON.parse(sessionStorage.getItem("prefixData")),!s){e.next=8;break}return r=s.find(function(e){return e.chainId===t}),e.abrupt("return",r.addressPrefix);case 8:return e.abrupt("return","");case 9:case"end":return e.stop()}},e)})),S.apply(this,arguments)}},"2e64":function(e,t,s){"use strict";var r=s("ff03"),n=s.n(r);n.a},7514:function(e,t,s){"use strict";var r=s("5ca1"),n=s("0a49")(5),a="find",i=!0;a in[]&&Array(1)[a](function(){i=!1}),r(r.P+r.F*i,"Array",{find:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),s("9c6c")(a)},7672:function(e,t,s){"use strict";var r=s("188a"),n=s.n(r);n.a},b301:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"back",attrs:{backUrl:e.backUrl}},[s("span",{staticClass:"back-box",on:{click:e.back}},[s("i",{staticClass:"el-icon-arrow-left"}),s("span",[e._v(e._s(e.backTitle))])])])},n=[],a={props:{backTitle:{type:String,default:""},backUrl:{type:String,default:"1"},backParams:{type:String,default:""}},methods:{back:function(){"1"===this.backUrl?this.$router.go(-1):this.$router.push({name:this.backUrl})}}},i=a,o=(s("2e64"),s("2877")),u=Object(o["a"])(i,r,n,!1,null,null,null);t["a"]=u.exports},cd1c:function(e,t,s){var r=s("e853");e.exports=function(e,t){return new(r(e))(t)}},d1f0:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-dialog",{staticClass:"password-dialog",attrs:{title:e.$t("password.password1"),visible:e.passwordVisible,top:"30vh",width:"30rem","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.passwordVisible=t},open:e.passwordShow,close:e.passwordClose}},[s("el-form",{ref:"passwordForm",attrs:{model:e.passwordForm,rules:e.passwordRules},nativeOn:{submit:function(e){e.preventDefault()}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[e._v(e._s(e.$t("password.password1")))]),s("el-form-item",{attrs:{prop:"password"}},[s("el-input",{ref:"inpus",attrs:{type:"password",maxlength:22},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.enterSubmit("passwordForm")}},model:{value:e.passwordForm.password,callback:function(t){e.$set(e.passwordForm,"password",t)},expression:"passwordForm.password"}})],1)],1),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.passwordClose}},[e._v(e._s(e.$t("password.password2")))]),s("el-button",{attrs:{type:"success",id:"passwordInfo"},on:{click:function(t){return e.dialogSubmit("passwordForm")}}},[e._v(e._s(e.$t("password.password3"))+"\n    ")])],1)],1)},n=[],a={props:{},data:function(){var e=this,t=function(t,s,r){""===s?r(new Error(e.$t("password.password1"))):r()};return{passwordVisible:!1,passwordForm:{password:""},passwordRules:{password:[{validator:t,trigger:["blur","change"]}]}}},created:function(){},mounted:function(){},watch:{passwordVisible:function(e){var t=this;e&&setTimeout(function(){t.$refs["inpus"].focus()},200)}},methods:{enterSubmit:function(e){this.passwordForm.password&&this.dialogSubmit(e)},passwordShow:function(){},passwordClose:function(){this.$refs["passwordForm"].resetFields(),this.passwordVisible=!1},showPassword:function(e){this.passwordVisible=e},dialogSubmit:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$emit("passwordSubmit",t.passwordForm.password),t.passwordVisible=!1})}}},i=a,o=(s("7672"),s("2877")),u=Object(o["a"])(i,r,n,!1,null,null,null);t["a"]=u.exports},e0a2:function(e,t,s){},e853:function(e,t,s){var r=s("d3f4"),n=s("1169"),a=s("2b4c")("species");e.exports=function(e){var t;return n(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!n(t.prototype)||(t=void 0),r(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?Array:t}},eb26:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"new_address bg-gray"},[s("div",{staticClass:"bg-white"},[s("div",{staticClass:"w1200"},[s("BackBar",{attrs:{backTitle:e.$t("address.address0")}}),s("h3",{staticClass:"title"},[e._v(e._s(e.$t("setAlias.setAlias0")))])],1)]),s("div",{staticClass:"new w1200 mt_20 bg-white"},[s("div",{staticClass:"w630"},[s("h3",{staticClass:"tc mzt_20"},[e._v(e._s(this.$route.query.address))]),s("div",{staticClass:"tip bg-gray"},[s("p",[e._v("• "+e._s(e.$t("setAlias.setAlias1"))+e._s(e.addressInfo.symbol)+e._s(e.$t("setAlias.setAlias11")))]),s("p",[e._v("• "+e._s(e.$t("setAlias.setAlias2"))+e._s(e.addressInfo.symbol))])]),s("el-form",{ref:"aliasForm",staticClass:"mb_20",attrs:{model:e.aliasForm,"status-icon":"",rules:e.aliasRules}},[s("el-form-item",{attrs:{label:e.$t("public.alias"),prop:"alias"}},[s("span",{staticClass:"balance font12 fr"},[e._v(e._s(e.$t("public.usableBalance"))+"："+e._s(e.addressInfo.balance))]),s("el-input",{attrs:{type:"text",maxlength:"20",autocomplete:"off"},model:{value:e.aliasForm.alias,callback:function(t){e.$set(e.aliasForm,"alias",t)},expression:"aliasForm.alias"}})],1),s("div",{staticClass:"div-data font14"},[e._v("\n          "+e._s(e.$t("public.fee"))+": "),s("label",[e._v("0.001 "),s("span",{staticClass:"fCN"},[e._v(e._s(e.addressInfo.symbol))])])]),s("el-form-item",{staticClass:"form-next"},[s("el-button",{attrs:{type:"success"},on:{click:function(t){return e.submitAliasForm("aliasForm")}}},[e._v(" "+e._s(e.$t("public.next")))])],1),s("div",{staticClass:"tc font18 mzt_20"},[e._v("\n          "+e._s(e.$t("setAlias.setAlias3"))+": 1.001\n        ")])],1)],1)]),s("Password",{ref:"password",on:{passwordSubmit:e.passSubmit}})],1)},n=[],a=(s("96cf"),s("3b8d")),i=s("5d73"),o=s.n(i),u=s("0ad0"),c=s.n(u),d=s("1959"),l=s("d1f0"),f=s("b301"),p=s("db49"),h=s("6ace"),b={data:function(){var e=this,t=function(t,s,r){var n=/^(?!_)(?!.*?_$)[a-z0-9_]+$/;""===s?r(new Error(e.$t("setAlias.setAlias4"))):n.exec(s)?r():r(new Error(e.$t("setAlias.setAlias5")))};return{aliasForm:{alias:""},aliasRules:{alias:[{validator:t,trigger:"blur"}]},addressInfo:"",balanceInfo:"",prefix:""}},created:function(){var e=this;Object(d["g"])(Object(h["f"])()).then(function(t){e.prefix=t}).catch(function(t){console.log(t),e.prefix=""});var t=!0,s=!1,r=void 0;try{for(var n,a=o()(Object(h["e"])(0));!(t=(n=a.next()).done);t=!0){var i=n.value;i.address===this.$route.query.address&&(this.addressInfo=i)}}catch(u){s=!0,r=u}finally{try{t||null==a.return||a.return()}finally{if(s)throw r}}this.getNulsBalance(Object(h["f"])(),1,this.$route.query.address)},watch:{addressInfo:function(e,t){e.address!==t.address&&t.address&&(this.transferForm.fromAddress=this.addressInfo.address)}},components:{Password:l["a"],BackBar:f["a"]},methods:{submitAliasForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.balanceInfo.balance>1001e5?t.$refs.password.showPassword(!0):t.$message({message:t.$t("newConsensus.newConsensus7"),type:"error",duration:1e3})})},getNulsBalance:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t,s,r){var n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$post("/","getAccountBalance",[t,s,r]).then(function(e){e.hasOwnProperty("result")?n.balanceInfo={balance:e.result.balance,nonce:e.result.nonce}:n.$message({message:n.$t("public.err2")+e,type:"error",duration:1e3})}).catch(function(e){n.$message({message:n.$t("public.err3")+e,type:"error",duration:1e3})});case 2:case"end":return e.stop()}},e,this)}));function t(t,s,r){return e.apply(this,arguments)}return t}(),passSubmit:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(t){var s,r,n,a,i,o,u,l,f=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(s=c.a.decrypteOfAES(this.addressInfo.aesPri,t),r=c.a.importByKey(Object(h["f"])(),s,t,this.prefix),r.address!==this.addressInfo.address){e.next=19;break}return n=c.a.getAddressByPub(Object(h["f"])(),1,p["a"],this.prefix),a={fromAddress:this.addressInfo.address,toAddress:n,assetsChainId:Object(h["f"])(),assetsId:1,amount:1e8,fee:1e5},e.next=7,Object(d["h"])(a,this.balanceInfo,3);case 7:return i=e.sent,o={fromAddress:this.addressInfo.address,alias:this.aliasForm.alias},e.next=11,c.a.transactionAssemble(i.data.inputs,i.data.outputs,"",3,o);case 11:return u=e.sent,e.next=14,c.a.transactionSerialize(c.a.decrypteOfAES(this.addressInfo.aesPri,t),this.addressInfo.pub,u);case 14:return l=e.sent,e.next=17,Object(d["j"])(l).then(function(e){e.success?f.toUrl("txList"):f.$message({message:f.$t("error."+e.data.code),type:"error",duration:3e3})}).catch(function(e){f.$message({message:f.$t("public.err0")+e,type:"error",duration:1e3})});case 17:e.next=20;break;case 19:this.$message({message:this.$t("address.address13"),type:"error",duration:1e3});case 20:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),toUrl:function(e){this.$router.push({name:e})}}},m=b,w=(s("033b"),s("2877")),v=Object(w["a"])(m,r,n,!1,null,null,null);t["default"]=v.exports},ff03:function(e,t,s){}}]);
//# sourceMappingURL=chunk-4d839f29.c3210fe3.js.map