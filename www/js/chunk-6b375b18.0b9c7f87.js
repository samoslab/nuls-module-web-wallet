(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b375b18"],{"0a49":function(t,e,r){var n=r("9b43"),s=r("626a"),a=r("4bf8"),u=r("9def"),o=r("cd1c");t.exports=function(t,e){var r=1==t,i=2==t,c=3==t,p=4==t,d=6==t,f=5==t||d,l=e||o;return function(e,o,h){for(var w,m,b=a(e),v=s(b),g=n(o,h,3),y=u(v.length),x=0,O=r?l(e,y):i?l(e,0):void 0;y>x;x++)if((f||x in v)&&(w=v[x],m=g(w,x,b),t))if(r)O[x]=m;else if(m)switch(t){case 3:return!0;case 5:return w;case 6:return x;case 2:O.push(w)}else if(p)return!1;return d?-1:c||p?p:O}}},"188a":function(t,e,r){},1959:function(t,e,r){"use strict";r.d(e,"i",function(){return o}),r.d(e,"d",function(){return i}),r.d(e,"c",function(){return c}),r.d(e,"h",function(){return d}),r.d(e,"f",function(){return l}),r.d(e,"k",function(){return w}),r.d(e,"b",function(){return b}),r.d(e,"j",function(){return g}),r.d(e,"a",function(){return x}),r.d(e,"e",function(){return k}),r.d(e,"g",function(){return R});r("7514"),r("c5f6"),r("6b54"),r("96cf");var n=r("3b8d"),s=r("9f30"),a=r("6ace"),u=r("db49");function o(t){return t===u["e"].chainId}function i(t,e){var r=t.txSerialize().length;return r+=110*e,1e5*Math.ceil(r/1024)}function c(t,e){return p.apply(this,arguments)}function p(){return p=Object(n["a"])(regeneratorRuntime.mark(function t(e,r){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=0,t.next=3,Object(s["a"])("/","getByzantineCount",[e.txSerialize().toString("hex")]).then(function(t){if(t.hasOwnProperty("result")){var s=e.txSerialize().length;s+=110*(r+t.result.value),n=1e6*Math.ceil(s/1024)}else n=-100}).catch(function(t){console.log(t),n=-100});case 3:return t.abrupt("return",n);case 4:case"end":return t.stop()}},t)})),p.apply(this,arguments)}function d(t,e,r){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark(function t(e,r,n){var s,u,o,i,c,p,d,f;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(s=Number(Object(a["b"])(e.amount,e.fee)),u=0,o=r.nonce,i=e.amount,c=0,4===n?c=-1:5===n?c=-1:6===n?(s=e.amount,u=-1,o=e.depositHash.substring(e.depositHash.length-16),i=e.amount-e.fee):9===n&&(s=e.amount,u=-1,o=e.depositHash.substring(e.depositHash.length-16),i=e.amount-e.fee,c=(new Date).valueOf()+2592e5),p=[{address:e.fromAddress,assetsChainId:e.assetsChainId,assetsId:e.assetsId,amount:s,locked:u,nonce:o}],2!==n||e.assetsChainId===Object(a["f"])()){t.next=16;break}return p[0].amount=e.amount,t.next=11,l(Object(a["f"])(),e.assetsId,e.fromAddress);case 11:if(d=t.sent,!(d.data.balance<1e5)){t.next=15;break}return console.log("余额小于手续费"),t.abrupt("return");case 15:p.push({address:e.fromAddress,assetsChainId:Object(a["f"])(),assetsId:e.assetsId,amount:1e5,locked:u,nonce:d.data.nonce});case 16:if(f=[],15!==n&&17!==n){t.next=19;break}return t.abrupt("return",{success:!0,data:{inputs:p,outputs:f}});case 19:if(16!==n){t.next=22;break}return e.toAddress&&e.value&&(p[0].amount=e.amount,f=[{address:e.toAddress,assetsChainId:e.assetsChainId,assetsId:e.assetsId,amount:e.value,lockTime:c}]),t.abrupt("return",{success:!0,data:{inputs:p,outputs:f}});case 22:return f=[{address:e.toAddress?e.toAddress:e.fromAddress,assetsChainId:e.assetsChainId,assetsId:e.assetsId,amount:i,lockTime:c}],t.abrupt("return",{success:!0,data:{inputs:p,outputs:f}});case 24:case"end":return t.stop()}},t)})),f.apply(this,arguments)}function l(){return h.apply(this,arguments)}function h(){return h=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,r,n,a=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=a.length>0&&void 0!==a[0]?a[0]:2,r=a.length>1&&void 0!==a[1]?a[1]:1,n=a.length>2?a[2]:void 0,t.next=5,Object(s["a"])("/","getAccountBalance",[e,r,n]).then(function(t){return t.hasOwnProperty("result")?{success:!0,data:{balance:t.result.balance,nonce:t.result.nonce}}:{success:!1,data:t}}).catch(function(t){return{success:!1,data:t}});case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}},t)})),h.apply(this,arguments)}function w(t){return m.apply(this,arguments)}function m(){return m=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])("/","validateTx",[e]).then(function(t){return t.hasOwnProperty("result")?{success:!0,data:t.result}:{success:!1,data:t.error}}).catch(function(t){return{success:!1,data:t}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),m.apply(this,arguments)}function b(t){return v.apply(this,arguments)}function v(){return v=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])("/","broadcastTx",[e]).then(function(t){return t.hasOwnProperty("result")?{success:!0,data:t.result}:{success:!1,data:t.error}}).catch(function(t){return{success:!1,data:t}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),v.apply(this,arguments)}function g(t){return y.apply(this,arguments)}function y(){return y=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])("/","validateTx",[e]).then(function(t){if(t.hasOwnProperty("result")){var r=t.result.value;return Object(s["a"])("/","broadcastTx",[e]).then(function(t){return t.hasOwnProperty("result")?{success:!0,hash:r}:{success:!1,data:t.error}}).catch(function(t){return{success:!1,data:t}})}return{success:!1,data:t.error}}).catch(function(t){return{success:!1,data:t}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),y.apply(this,arguments)}function x(t){return O.apply(this,arguments)}function O(){return O=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])("/","getConsensusDeposit",[1,300,e]).then(function(t){return t.result}).catch(function(t){return{success:!1,data:t}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),O.apply(this,arguments)}function k(t){return I.apply(this,arguments)}function I(){return I=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(s["a"])("/","getContractConstructor",[e]).then(function(t){return t.hasOwnProperty("result")?{success:!0,data:t.result.constructor}:{success:!1,data:t.error}}).catch(function(t){return{success:!1,data:t}});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)})),I.apply(this,arguments)}function S(){return j.apply(this,arguments)}function j(){return j=Object(n["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=[{chainId:1,addressPrefix:"NULS"},{chainId:2,addressPrefix:"tNULS"}],t.next=3,Object(s["a"])("/","getAllAddressPrefix",[]).then(function(t){t.hasOwnProperty("result")?(sessionStorage.hasOwnProperty("prefixData")&&sessionStorage.removeItem("prefixData"),sessionStorage.setItem("prefixData",JSON.stringify(t.result))):sessionStorage.setItem("prefixData",JSON.stringify(e))}).catch(function(t){console.log(t),sessionStorage.setItem("prefixData",JSON.stringify(e))});case 3:case"end":return t.stop()}},t)})),j.apply(this,arguments)}function R(t){return A.apply(this,arguments)}function A(){return A=Object(n["a"])(regeneratorRuntime.mark(function t(e){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,S();case 2:if(r=JSON.parse(sessionStorage.getItem("prefixData")),!r){t.next=8;break}return n=r.find(function(t){return t.chainId===e}),t.abrupt("return",n.addressPrefix);case 8:return t.abrupt("return","");case 9:case"end":return t.stop()}},t)})),A.apply(this,arguments)}},7514:function(t,e,r){"use strict";var n=r("5ca1"),s=r("0a49")(5),a="find",u=!0;a in[]&&Array(1)[a](function(){u=!1}),n(n.P+n.F*u,"Array",{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(a)},7672:function(t,e,r){"use strict";var n=r("188a"),s=r.n(n);s.a},"7f7f":function(t,e,r){var n=r("86cc").f,s=Function.prototype,a=/^\s*function ([^ (]*)/,u="name";u in s||r("9e1e")&&n(s,u,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(t){return""}}})},cd1c:function(t,e,r){var n=r("e853");t.exports=function(t,e){return new(n(t))(e)}},d1f0:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-dialog",{staticClass:"password-dialog",attrs:{title:t.$t("password.password1"),visible:t.passwordVisible,top:"30vh",width:"30rem","close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(e){t.passwordVisible=e},open:t.passwordShow,close:t.passwordClose}},[r("el-form",{ref:"passwordForm",attrs:{model:t.passwordForm,rules:t.passwordRules},nativeOn:{submit:function(t){t.preventDefault()}}},[r("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[t._v(t._s(t.$t("password.password1")))]),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{ref:"inpus",attrs:{type:"password",maxlength:22},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.enterSubmit("passwordForm")}},model:{value:t.passwordForm.password,callback:function(e){t.$set(t.passwordForm,"password",e)},expression:"passwordForm.password"}})],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:t.passwordClose}},[t._v(t._s(t.$t("password.password2")))]),r("el-button",{attrs:{type:"success",id:"passwordInfo"},on:{click:function(e){return t.dialogSubmit("passwordForm")}}},[t._v(t._s(t.$t("password.password3"))+"\n    ")])],1)],1)},s=[],a={props:{},data:function(){var t=this,e=function(e,r,n){""===r?n(new Error(t.$t("password.password1"))):n()};return{passwordVisible:!1,passwordForm:{password:""},passwordRules:{password:[{validator:e,trigger:["blur","change"]}]}}},created:function(){},mounted:function(){},watch:{passwordVisible:function(t){var e=this;t&&setTimeout(function(){e.$refs["inpus"].focus()},200)}},methods:{enterSubmit:function(t){this.passwordForm.password&&this.dialogSubmit(t)},passwordShow:function(){},passwordClose:function(){this.$refs["passwordForm"].resetFields(),this.passwordVisible=!1},showPassword:function(t){this.passwordVisible=t},dialogSubmit:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return!1;e.$emit("passwordSubmit",e.passwordForm.password),e.passwordVisible=!1})}}},u=a,o=(r("7672"),r("2877")),i=Object(o["a"])(u,n,s,!1,null,null,null);e["a"]=i.exports},e065:function(t,e,r){"use strict";function n(t){return null===t?null:t.toString()}function s(t){return null===t||0===t.trim.length}t.exports={stringToByte:function(t){var e=[],r=void 0,n=void 0;r=t.length;for(var s=0;s<r;s++)n=t.charCodeAt(s),n>=65536&&n<=1114111?(e.push(n>>18&7|240),e.push(n>>12&63|128),e.push(n>>6&63|128),e.push(63&n|128)):n>=2048&&n<=65535?(e.push(n>>12&15|224),e.push(n>>6&63|128),e.push(63&n|128)):n>=128&&n<=2047?(e.push(n>>6&31|192),e.push(63&n|128)):e.push(255&n);return e},twoDimensionalArray:function(t,e){if(0===t.length)return null;for(var r=t.length,a=new Array(r),u=void 0,o=0;o<r;o++)if(u=t[o],null!=u)if("String"===typeof u){var i=u;null!=e&&s(i)&&"String"!==e[o]?a[o]=[]:a[o]=[i]}else if(Array.isArray(u)){for(var c=u.length,p=new Array[c],d=0;d<c;d++)p[d]=n(u[d]);a[o]=p}else a[o]=[n(u)];else a[o]=[];return a}}},e853:function(t,e,r){var n=r("d3f4"),s=r("1169"),a=r("2b4c")("species");t.exports=function(t){var e;return s(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!s(e.prototype)||(e=void 0),n(e)&&(e=e[a],null===e&&(e=void 0))),void 0===e?Array:e}}}]);
//# sourceMappingURL=chunk-6b375b18.0b9c7f87.js.map