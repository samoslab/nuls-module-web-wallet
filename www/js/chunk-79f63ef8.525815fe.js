(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-79f63ef8"],{"0a49":function(t,e,r){var n=r("9b43"),s=r("626a"),a=r("4bf8"),o=r("9def"),u=r("cd1c");t.exports=function(t,e){var r=1==t,i=2==t,c=3==t,f=4==t,l=6==t,p=5==t||l,d=e||u;return function(e,u,h){for(var b,w,m=a(e),v=s(m),g=n(u,h,3),y=o(v.length),x=0,O=r?d(e,y):i?d(e,0):void 0;y>x;x++)if((p||x in v)&&(b=v[x],w=g(b,x,m),t))if(r)O[x]=w;else if(w)switch(t){case 3:return!0;case 5:return b;case 6:return x;case 2:O.push(b)}else if(f)return!1;return l?-1:c||f?f:O}}},"188a":function(t,e,r){},1959:function(t,e,r){"use strict";r.d(e,"i",function(){return o}),r.d(e,"d",function(){return u}),r.d(e,"c",function(){return i}),r.d(e,"h",function(){return c}),r.d(e,"f",function(){return l}),r.d(e,"k",function(){return d}),r.d(e,"b",function(){return b}),r.d(e,"j",function(){return m}),r.d(e,"a",function(){return g}),r.d(e,"e",function(){return x}),r.d(e,"g",function(){return _});r("7514"),r("c5f6"),r("96cf");var n=r("3b8d"),s=r("9f30"),a=r("6ace");function o(t){return 2===t}function u(t,e){var r=t.txSerialize().length;return r+=110*e,1e5*Math.ceil(r/1024)}function i(t,e){var r=t.txSerialize().length;return r+=110*e,1e6*Math.ceil(r/1024)}function c(t,e,r){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark(function t(e,r,n){var s,o,u,i,c,f,p,d;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(s=Number(Object(a["b"])(e.amount,e.fee)),o=0,u=r.nonce,i=e.amount,c=0,4===n?c=-1:5===n?c=-1:6===n?(s=e.amount,o=-1,u=e.depositHash.substring(e.depositHash.length-16),i=e.amount-e.fee):9===n&&(s=e.amount,o=-1,u=e.depositHash.substring(e.depositHash.length-16),i=e.amount-e.fee,c=(new Date).valueOf()+2592e5),f=[{address:e.fromAddress,assetsChainId:e.assetsChainId,assetsId:e.assetsId,amount:s,locked:o,nonce:u}],2!==n||e.assetsChainId===Object(a["f"])()){t.next=16;break}return f[0].amount=e.amount,t.next=11,l(Object(a["f"])(),e.assetsId,e.fromAddress);case 11:if(p=t.sent,!(p.data.balance<1e5)){t.next=15;break}return console.log("余额小于手续费"),t.abrupt("return");case 15:f.push({address:e.fromAddress,assetsChainId:Object(a["f"])(),assetsId:e.assetsId,amount:1e5,locked:o,nonce:p.data.nonce});case 16:if(d=[],15!==n&&17!==n){t.next=19;break}return t.abrupt("return",{success:!0,data:{inputs:f,outputs:d}});case 19:if(16!==n){t.next=25;break}if(e.toAddress){t.next=24;break}return t.abrupt("return",{success:!0,data:{inputs:f,outputs:d}});case 24:i=e.value;case 25:return d=[{address:e.toAddress?e.toAddress:e.fromAddress,assetsChainId:e.assetsChainId,assetsId:e.assetsId,amount:i,lockTime:c}],t.abrupt("return",{success:!0,data:{inputs:f,outputs:d}});case 27:case"end":return t.stop()}},t)})),f.apply(this,arguments)}function l(){return p.apply(this,arguments)}function p(){return p=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,r,n,a=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:2,r=a.length>1&&void 0!==a[1]?a[1]:1,n=a.length>2?a[2]:void 0,t.next=5,Object(s["a"])("/","getAccountBalance",[e,r,n]).then(function(t){return t.hasOwnProperty("result")?{success:!0,data:{balance:t.result.balance,nonce:t.result.nonce}}:{success:!1,data:t}}).catch(function(t){return{success:!1,data:t}});case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t)})),p.apply(this,arguments)}function d(t){return h.apply(this,arguments)}function h(){return h=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])("/","validateTx",[e]).then(function(t){return t.hasOwnProperty("result")?{success:!0,data:t.result}:{success:!1,data:t.error}}).catch(function(t){return{success:!1,data:t}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),h.apply(this,arguments)}function b(t){return w.apply(this,arguments)}function w(){return w=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])("/","broadcastTx",[e]).then(function(t){return t.hasOwnProperty("result")?{success:!0,data:t.result}:{success:!1,data:t.error}}).catch(function(t){return{success:!1,data:t}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),w.apply(this,arguments)}function m(t){return v.apply(this,arguments)}function v(){return v=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])("/","validateTx",[e]).then(function(t){if(t.hasOwnProperty("result")){var r=t.result.value;return Object(s["a"])("/","broadcastTx",[e]).then(function(t){return t.hasOwnProperty("result")?{success:!0,hash:r}:{success:!1,data:t.error}}).catch(function(t){return{success:!1,data:t}})}return{success:!1,data:t.error}}).catch(function(t){return{success:!1,data:t}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),v.apply(this,arguments)}function g(t){return y.apply(this,arguments)}function y(){return y=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])("/","getConsensusDeposit",[1,300,e]).then(function(t){return t.result}).catch(function(t){return{success:!1,data:t}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),y.apply(this,arguments)}function x(t){return O.apply(this,arguments)}function O(){return O=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])("/","getContractConstructor",[e]).then(function(t){return t.hasOwnProperty("result")?{success:!0,data:t.result.constructor}:{success:!1,data:t.error}}).catch(function(t){return{success:!1,data:t}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),O.apply(this,arguments)}function k(){return A.apply(this,arguments)}function A(){return A=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=[{chainId:1,addressPrefix:"NULS"},{chainId:2,addressPrefix:"tNULS"}],t.next=3,Object(s["a"])("/","getAllAddressPrefix",[]).then(function(t){t.hasOwnProperty("result")?(sessionStorage.hasOwnProperty("prefixData")&&sessionStorage.removeItem("prefixData"),sessionStorage.setItem("prefixData",JSON.stringify(t.result))):sessionStorage.setItem("prefixData",JSON.stringify(e))}).catch(function(t){console.log(t),sessionStorage.setItem("prefixData",JSON.stringify(e))});case 3:case"end":return t.stop()}},t)})),A.apply(this,arguments)}function _(t){return j.apply(this,arguments)}function j(){return j=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,k();case 2:if(r=JSON.parse(sessionStorage.getItem("prefixData")),!r){t.next=8;break}return n=r.find(function(t){return t.chainId===e}),t.abrupt("return",n.addressPrefix);case 8:return t.abrupt("return","");case 9:case"end":return t.stop()}},t)})),j.apply(this,arguments)}},"2e64":function(t,e,r){"use strict";var n=r("ff03"),s=r.n(n);s.a},"3e8f":function(t,e){},7514:function(t,e,r){"use strict";var n=r("5ca1"),s=r("0a49")(5),a="find",o=!0;a in[]&&Array(1)[a](function(){o=!1}),n(n.P+n.F*o,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(a)},7672:function(t,e,r){"use strict";var n=r("188a"),s=r.n(n);s.a},b301:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"back",attrs:{backUrl:t.backUrl}},[r("span",{staticClass:"back-box",on:{click:t.back}},[r("i",{staticClass:"el-icon-arrow-left"}),r("span",[t._v(t._s(t.backTitle))])])])},s=[],a={props:{backTitle:{type:String,default:""},backUrl:{type:String,default:"1"},backParams:{type:String,default:""}},methods:{back:function(){"1"===this.backUrl?this.$router.go(-1):this.$router.push({name:this.backUrl})}}},o=a,u=(r("2e64"),r("2877")),i=Object(u["a"])(o,n,s,!1,null,null,null);e["a"]=i.exports},bdb9:function(t,e,r){(function(e){var n=r("3e8f"),s=r("df7c"),a=s.join(e,"path.txt");function o(){if(n.existsSync(a)){var t=n.readFileSync(a,"utf-8");return Object({NODE_ENV:"production",VUE_APP_I18N_LOCALE:"en",VUE_APP_I18N_FALLBACK_LOCALE:"en",BASE_URL:"/dist/"}).ELECTRON_OVERRIDE_DIST_PATH?s.join(Object({NODE_ENV:"production",VUE_APP_I18N_LOCALE:"en",VUE_APP_I18N_FALLBACK_LOCALE:"en",BASE_URL:"/dist/"}).ELECTRON_OVERRIDE_DIST_PATH,t):s.join(e,"dist",t)}throw new Error("Electron failed to install correctly, please delete node_modules/electron and try installing again")}t.exports=o()}).call(this,"/")},cd1c:function(t,e,r){var n=r("e853");t.exports=function(t,e){return new(n(t))(e)}},d1f0:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{staticClass:"password-dialog",attrs:{title:t.$t("password.password1"),visible:t.passwordVisible,top:"30vh",width:"30rem","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.passwordVisible=e},open:t.passwordShow,close:t.passwordClose}},[r("el-form",{ref:"passwordForm",attrs:{model:t.passwordForm,rules:t.passwordRules},nativeOn:{submit:function(t){t.preventDefault()}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[t._v(t._s(t.$t("password.password1")))]),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{ref:"inpus",attrs:{type:"password",maxlength:22},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterSubmit("passwordForm")}},model:{value:t.passwordForm.password,callback:function(e){t.$set(t.passwordForm,"password",e)},expression:"passwordForm.password"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:t.passwordClose}},[t._v(t._s(t.$t("password.password2")))]),r("el-button",{attrs:{type:"success",id:"passwordInfo"},on:{click:function(e){return t.dialogSubmit("passwordForm")}}},[t._v(t._s(t.$t("password.password3"))+"\n    ")])],1)],1)},s=[],a={props:{},data:function(){var t=this,e=function(e,r,n){""===r?n(new Error(t.$t("password.password1"))):n()};return{passwordVisible:!1,passwordForm:{password:""},passwordRules:{password:[{validator:e,trigger:["blur","change"]}]}}},created:function(){},mounted:function(){},watch:{passwordVisible:function(t){var e=this;t&&setTimeout(function(){e.$refs["inpus"].focus()},200)}},methods:{enterSubmit:function(t){this.passwordForm.password&&this.dialogSubmit(t)},passwordShow:function(){},passwordClose:function(){this.$refs["passwordForm"].resetFields(),this.passwordVisible=!1},showPassword:function(t){this.passwordVisible=t},dialogSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.$emit("passwordSubmit",e.passwordForm.password),e.passwordVisible=!1})}}},o=a,u=(r("7672"),r("2877")),i=Object(u["a"])(o,n,s,!1,null,null,null);e["a"]=i.exports},df7c:function(t,e,r){(function(t){function r(t,e){for(var r=0,n=t.length-1;n>=0;n--){var s=t[n];"."===s?t.splice(n,1):".."===s?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function n(t){"string"!==typeof t&&(t+="");var e,r=0,n=-1,s=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!s){r=e+1;break}}else-1===n&&(s=!1,n=e+1);return-1===n?"":t.slice(r,n)}function s(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}e.resolve=function(){for(var e="",n=!1,a=arguments.length-1;a>=-1&&!n;a--){var o=a>=0?arguments[a]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,n="/"===o.charAt(0))}return e=r(s(e.split("/"),function(t){return!!t}),!n).join("/"),(n?"/":"")+e||"."},e.normalize=function(t){var n=e.isAbsolute(t),o="/"===a(t,-1);return t=r(s(t.split("/"),function(t){return!!t}),!n).join("/"),t||n||(t="."),t&&o&&(t+="/"),(n?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(s(t,function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,r){function n(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var r=t.length-1;r>=0;r--)if(""!==t[r])break;return e>r?[]:t.slice(e,r-e+1)}t=e.resolve(t).substr(1),r=e.resolve(r).substr(1);for(var s=n(t.split("/")),a=n(r.split("/")),o=Math.min(s.length,a.length),u=o,i=0;i<o;i++)if(s[i]!==a[i]){u=i;break}var c=[];for(i=u;i<s.length;i++)c.push("..");return c=c.concat(a.slice(u)),c.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),r=47===e,n=-1,s=!0,a=t.length-1;a>=1;--a)if(e=t.charCodeAt(a),47===e){if(!s){n=a;break}}else s=!1;return-1===n?r?"/":".":r&&1===n?"/":t.slice(0,n)},e.basename=function(t,e){var r=n(t);return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,r=0,n=-1,s=!0,a=0,o=t.length-1;o>=0;--o){var u=t.charCodeAt(o);if(47!==u)-1===n&&(s=!1,n=o+1),46===u?-1===e?e=o:1!==a&&(a=1):-1!==e&&(a=-1);else if(!s){r=o+1;break}}return-1===e||-1===n||0===a||1===a&&e===n-1&&e===r+1?"":t.slice(e,n)};var a="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,r("f28c"))},e853:function(t,e,r){var n=r("d3f4"),s=r("1169"),a=r("2b4c")("species");t.exports=function(t){var e;return s(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)||(e=void 0),n(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}},ff03:function(t,e,r){}}]);
//# sourceMappingURL=chunk-79f63ef8.525815fe.js.map