(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00cf568e"],{"0d70":function(e,t,a){},"2e64":function(e,t,a){"use strict";var s=a("ff03"),l=a.n(s);l.a},"482b":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"txlist bg-gray"},[a("div",{staticClass:"bg-white"},[a("div",{staticClass:"w1200"},[a("BackBar",{attrs:{backTitle:e.$t("nav.wallet")}}),a("h3",{staticClass:"title"},[e._v(e._s(e.$t("home.home2")))])],1)]),a("div",{staticClass:"w1200"},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.txListDataLoading,expression:"txListDataLoading"}]},[a("div",{staticClass:"filter"},[a("el-select",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],on:{change:e.channgeAsesets},model:{value:e.assetsValue,callback:function(t){e.assetsValue=t},expression:"assetsValue"}},e._l(e.assetsOptions,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1),a("el-select",{attrs:{value:e.$t("type."+e.typeValue)},on:{change:e.channgeType}},e._l(e.typeOptions,function(t){return a("el-option",{key:t.value,attrs:{label:e.$t("type."+t.value),value:t.value}})}),1),e._e(),a("el-switch",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{"active-text":"","inactive-text":e.$t("public.hideReward"),width:35},on:{change:e.changeHide},model:{value:e.isHide,callback:function(t){e.isHide=t},expression:"isHide"}})],1),a("el-table",{attrs:{data:e.txListData,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"symbol",label:e.$t("tab.tab0"),align:"center",width:"100"}}),a("el-table-column",{attrs:{label:e.$t("tab.tab1"),align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.$t("type."+t.row.type)))])]}}])}),a("el-table-column",{attrs:{label:"TxID",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticClass:"click ",on:{click:function(a){return e.toUrl("transferInfo",t.row.txHash)}}},[e._v(e._s(t.row.txid))])]}}])}),a("el-table-column",{attrs:{prop:"createTime",label:e.$t("tab.tab5"),align:"center"}}),a("el-table-column",{attrs:{label:e.$t("tab.tab6"),align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{class:-1===t.row.transferType?"fred":"fCN"},[e._v("\n              "+e._s(t.row.amount*t.row.transferType)+"\n            ")])]}}])}),a("el-table-column",{attrs:{prop:"balance",label:e.$t("tab.tab9"),align:"center"}}),a("el-table-column",{attrs:{label:e.$t("tab.tab10"),align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.$t("transferStatus."+t.row.status)))])]}}])})],1),a("div",{staticClass:"pages"},[a("div",{staticClass:"page-total"},[e._v("\n          "+e._s(e.pageIndex-1===0?1:(e.pageIndex-1)*e.pageSize)+"-"+e._s(e.pageIndex*e.pageSize)+"\n          of "+e._s(e.pageTotal)+"\n        ")]),a("el-pagination",{directives:[{name:"show",rawName:"v-show",value:e.pageTotal>e.pageSize,expression:"pageTotal > pageSize"}],staticClass:"fr",attrs:{"current-page":e.pageIndex,"page-size":e.pageSize,background:"",layout:" prev, pager, next, jumper",total:e.pageTotal},on:{"current-change":e.txListPages}})],1)],1)])])},l=[],n=(a("c5f6"),a("ac6a"),a("06db"),a("5d73")),i=a.n(n),r=a("c1df"),o=a.n(r),c=a("6ace"),u=a("b301"),d={data:function(){return{assetsOptions:[{value:"0",label:"0"},{value:"1",label:"1"},{value:"2",label:"2"}],assetsValue:"0",typeOptions:[{value:"0",label:"0"},{value:"2",label:"2"},{value:"3",label:"3"},{value:"4",label:"4"},{value:"5",label:"5"},{value:"6",label:"6"},{value:"7",label:"7"},{value:"8",label:"8"},{value:"9",label:"9"},{value:"10",label:"10"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"},{value:"18",label:"18"},{value:"19",label:"19"}],typeValue:"0",inAndOutOptions:[{value:"0",label:"0"},{value:"1",label:"1"},{value:"2",label:"2"}],inAndOutValue:"0",txListDataLoading:!0,txListData:[],pageIndex:1,pageSize:10,pageTotal:0,addressInfo:[],types:0,isHide:!0,txListSetInterval:null}},created:function(){var e=this;this.addressInfo=Object(c["e"])(1),setInterval(function(){e.addressInfo=Object(c["e"])(1)},500)},watch:{addressInfo:function(e,t){e.address!==t.address&&t.address&&this.getTxlistByAddress(this.pageIndex,this.pageSize,this.addressInfo.address,this.types)}},mounted:function(){var e=this;this.getTxlistByAddress(this.pageIndex,this.pageSize,this.addressInfo.address,this.types),this.txListSetInterval=setInterval(function(){e.getTxlistByAddress(e.pageIndex,e.pageSize,e.addressInfo.address,e.types)},1e4)},destroyed:function(){clearInterval(this.txListSetInterval)},components:{BackBar:u["a"]},methods:{getTxlistByAddress:function(e,t,a,s){var l=this;this.$post("/","getAccountTxs",[e,t,a,s,-1,-1]).then(function(e){if(e.hasOwnProperty("result")){var t=!0,a=!1,s=void 0;try{for(var n,r=i()(e.result.list);!(t=(n=r.next()).done);t=!0){var u=n.value;u.createTime=o()(Object(c["l"])(1e3*u.createTime)).format("YYYY-MM-DD HH:mm:ss"),u.txid=Object(c["o"])(u.txHash,8),u.balance=Object(c["p"])(u.balance),16===u.type?u.amount=Object(c["p"])(u.fee.value):u.amount=Object(c["p"])(u.values)}}catch(d){a=!0,s=d}finally{try{t||null==r.return||r.return()}finally{if(a)throw s}}l.txListData=e.result.list,l.pageTotal=e.result.totalCount,l.txListDataLoading=!1}}).catch(function(e){console.log("getAccountTxs:"+e)})},channgeAsesets:function(e){console.log(e)},channgeType:function(e){this.types=Number(e),this.typeValue=Number(e),this.getTxlistByAddress(this.pageIndex,this.pageSize,this.addressInfo.address,this.types)},channgeInAndOut:function(e){this.inAndOutValue=Number(e)},changeHide:function(e){this.isHide=e,this.pageIndex=1,this.getTxlistByAddress(this.pageIndex,this.pageSize,this.addressInfo.address,this.types)},txListPages:function(e){this.pageIndex=e,this.txListDataLoading=!0,this.getTxlistByAddress(this.pageIndex,this.pageSize,this.addressInfo.address,this.types)},toUrl:function(e,t){var a={hash:t};this.$router.push({name:e,query:a})}}},p=d,b=(a("c33b"),a("2877")),f=Object(b["a"])(p,s,l,!1,null,null,null);t["default"]=f.exports},ac6a:function(e,t,a){for(var s=a("cadf"),l=a("0d58"),n=a("2aba"),i=a("7726"),r=a("32e9"),o=a("84f2"),c=a("2b4c"),u=c("iterator"),d=c("toStringTag"),p=o.Array,b={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=l(b),h=0;h<f.length;h++){var g,v=f[h],x=b[v],y=i[v],m=y&&y.prototype;if(m&&(m[u]||r(m,u,p),m[d]||r(m,d,v),o[v]=p,x))for(g in s)m[g]||n(m,g,s[g],!0)}},b301:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"back",attrs:{backUrl:e.backUrl}},[a("span",{staticClass:"back-box",on:{click:e.back}},[a("i",{staticClass:"el-icon-arrow-left"}),a("span",[e._v(e._s(e.backTitle))])])])},l=[],n={props:{backTitle:{type:String,default:""},backUrl:{type:String,default:"1"},backParams:{type:String,default:""}},methods:{back:function(){"1"===this.backUrl?this.$router.go(-1):this.$router.push({name:this.backUrl})}}},i=n,r=(a("2e64"),a("2877")),o=Object(r["a"])(i,s,l,!1,null,null,null);t["a"]=o.exports},c33b:function(e,t,a){"use strict";var s=a("0d70"),l=a.n(s);l.a},ff03:function(e,t,a){}}]);
//# sourceMappingURL=chunk-00cf568e.28fb88e2.js.map