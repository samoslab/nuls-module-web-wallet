(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-426af7ea"],{"11b9":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"set bg-gray"},[n("div",{staticClass:"bg-white"},[n("div",{staticClass:"w1200"},[n("h3",{staticClass:"title"},[e._v("\n        "+e._s(e.$t("public.about"))+"\n      ")])])]),n("div",{staticClass:"w1200 mt_20 bg-white set_info"},[n("div",{staticClass:"tc mzt_20"},[n("h4",{staticClass:"font24 mb_20"},[e._v("NULS Wallet")]),n("ul",[n("li",{directives:[{name:"show",rawName:"v-show",value:e.RUN_PATTERN,expression:"RUN_PATTERN"}]},[n("span",[e._v(e._s(e.$t("public.operatingSystem"))+":")]),e._v(e._s(e.system))]),n("li",[n("span",[e._v(e._s(e.$t("public.version"))+":")]),e.RUN_DEV?n("font",[e._v("V "+e._s(e.version))]):n("font",[e._v("B "+e._s(e.version))])],1),n("li",{directives:[{name:"show",rawName:"v-show",value:e.RUN_PATTERN&&"Darwin"!==e.system,expression:"RUN_PATTERN && system !== 'Darwin'"}]},[n("span",[e._v(e._s(e.$t("public.logInfo"))+":")]),e._v(e._s(e.logUrl))]),n("li",{directives:[{name:"show",rawName:"v-show",value:"Darwin"===e.system,expression:"system === 'Darwin'"}]},[n("span",[e._v(e._s(e.$t("public.downloadUrl"))+":")]),n("font",[e._v(e._s(e.FILE_URL)+"/NULS-Wallet-"+e._s(e.version)+".dmg")])],1)]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:e.RUN_PATTERN&&"Darwin"!==e.system,expression:"RUN_PATTERN && system !== 'Darwin'"}],attrs:{type:"success"},on:{click:e.checkUpdate}},[e._v(e._s(e.$t("public.checkUpdates")))])],1)]),n("el-dialog",{attrs:{title:e.$t("bottom.updateWallet"),width:"35rem",visible:e.updateDialogVisible,"show-close":1===e.tips.type||4===e.tips.type,"close-on-press-escape":!1,"close-on-click-modal":!1},on:{"update:visible":function(t){e.updateDialogVisible=t}}},[n("div",{staticClass:"upload"},[n("div",{staticClass:"upload-tips"},[e._v(e._s(e.$t("bottom.Tips"))+": "+e._s(e.$t("TipsType."+e.tips.type)))]),0!==e.downloadPercent?n("div",{staticClass:"upload-percent"},[n("el-progress",{attrs:{"text-inside":!0,"stroke-width":18,percentage:e.downloadPercent,status:"success"}})],1):e._e(),3===e.tips.type?n("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"upload-bt"},[n("el-button",{attrs:{type:"info"},on:{clcik:e.afterRun}},[e._v(e._s(e.$t("bottom.Backstage")))])],1):e._e()])])],1)},s=[],r=n("d137"),l=r["a"],o=(n("bb97"),n("2877")),a=Object(o["a"])(l,i,s,!1,null,null,null);t["default"]=a.exports},1458:function(e,t,n){},"28a5":function(e,t,n){"use strict";var i=n("aae3"),s=n("cb7c"),r=n("ebd6"),l=n("0390"),o=n("9def"),a=n("5f1b"),c=n("520a"),u=n("79e5"),p=Math.min,d=[].push,v="split",f="length",h="lastIndex",b=4294967295,m=!u(function(){RegExp(b,"y")});n("214f")("split",2,function(e,t,n,u){var g;return g="c"=="abbc"[v](/(b)*/)[1]||4!="test"[v](/(?:)/,-1)[f]||2!="ab"[v](/(?:ab)*/)[f]||4!="."[v](/(.?)(.?)/)[f]||"."[v](/()()/)[f]>1||""[v](/.?/)[f]?function(e,t){var s=String(this);if(void 0===e&&0===t)return[];if(!i(e))return n.call(s,e,t);var r,l,o,a=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,v=void 0===t?b:t>>>0,m=new RegExp(e.source,u+"g");while(r=c.call(m,s)){if(l=m[h],l>p&&(a.push(s.slice(p,r.index)),r[f]>1&&r.index<s[f]&&d.apply(a,r.slice(1)),o=r[0][f],p=l,a[f]>=v))break;m[h]===r.index&&m[h]++}return p===s[f]?!o&&m.test("")||a.push(""):a.push(s.slice(p)),a[f]>v?a.slice(0,v):a}:"0"[v](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:n.call(this,e,t)}:n,[function(n,i){var s=e(this),r=void 0==n?void 0:n[t];return void 0!==r?r.call(n,s,i):g.call(String(s),n,i)},function(e,t){var i=u(g,e,this,t,g!==n);if(i.done)return i.value;var c=s(e),d=String(this),v=r(c,RegExp),f=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(m?"y":"g"),w=new v(m?c:"^(?:"+c.source+")",h),_=void 0===t?b:t>>>0;if(0===_)return[];if(0===d.length)return null===a(w,d)?[d]:[];var y=0,R=0,N=[];while(R<d.length){w.lastIndex=m?R:0;var x,U=a(w,m?d:d.slice(R));if(null===U||(x=p(o(w.lastIndex+(m?0:R)),d.length))===y)R=l(d,R,f);else{if(N.push(d.slice(y,R)),N.length===_)return N;for(var E=1;E<=U.length-1;E++)if(N.push(U[E]),N.length===_)return N;R=y=x}}return N.push(d.slice(y)),N}]})},"3c43":function(e,t){t.endianness=function(){return"LE"},t.hostname=function(){return"undefined"!==typeof location?location.hostname:""},t.loadavg=function(){return[]},t.uptime=function(){return 0},t.freemem=function(){return Number.MAX_VALUE},t.totalmem=function(){return Number.MAX_VALUE},t.cpus=function(){return[]},t.type=function(){return"Browser"},t.release=function(){return"undefined"!==typeof navigator?navigator.appVersion:""},t.networkInterfaces=t.getNetworkInterfaces=function(){return{}},t.arch=function(){return"javascript"},t.platform=function(){return"browser"},t.tmpdir=t.tmpDir=function(){return"/tmp"},t.EOL="\n",t.homedir=function(){return"/"}},9224:function(e){e.exports={name:"wallet_2.0",version:"2.0.1",private:!0,scripts:{serve:"vue-cli-service serve",build:"vue-cli-service build",lint:"vue-cli-service lint","electron:build":"vue-cli-service electron:build","electron:serve":"vue-cli-service electron:serve",postinstall:"electron-builder install-app-deps",postuninstall:"electron-builder install-app-deps"},dependencies:{"bignumber.js":"^8.1.1","copy-to-clipboard":"^3.1.0","element-ui":"^2.4.5",less:"^3.9.0","less-loader":"^4.1.0",moment:"^2.24.0","nuls-sdk-js":"^2.1.7",qrcodejs2:"^0.0.2",vue:"^2.6.6","vue-electron":"^1.0.6","vue-i18n":"^8.0.0","vue-router":"^3.0.1",vuex:"^3.0.1"},devDependencies:{"@vue/cli-plugin-babel":"^3.5.0","@vue/cli-plugin-eslint":"^3.5.0","@vue/cli-service":"^3.5.0","babel-eslint":"^10.0.1",electron:"^4.0.0","electron-builder":"^20.18.0","electron-updater":"^4.0.6",eslint:"^5.8.0","eslint-plugin-vue":"^5.0.0","vue-cli-plugin-electron-builder":"^1.2.0","vue-cli-plugin-element":"^1.0.1","vue-cli-plugin-i18n":"^0.5.2","vue-template-compiler":"^2.5.21"},eslintConfig:{root:!0,env:{node:!0},extends:["plugin:vue/essential","eslint:recommended"],rules:{"no-console":"off"},parserOptions:{parser:"babel-eslint"}},postcss:{plugins:{autoprefixer:{}}},browserslist:["> 1%","last 2 versions","not ie <= 8"],publish:[{provider:"generic",url:"http://192.168.1.119:8000/"}],main:"background.js"}},aae3:function(e,t,n){var i=n("d3f4"),s=n("2d95"),r=n("2b4c")("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==s(e))}},bb97:function(e,t,n){"use strict";var i=n("1458"),s=n.n(i);s.a},d137:function(e,t,n){"use strict";(function(e){n("28a5"),n("c5f6"),n("96cf");var i=n("3b8d"),s=n("9224"),r=n("db49");t["a"]={data:function(){return{updateDialogVisible:!1,tips:{},downloadPercent:0,logUrl:"",system:"",version:s.version,RUN_PATTERN:r["g"],RUN_DEV:r["f"],FILE_URL:r["d"]}},created:function(){this.seeLog()},mounted:function(){},components:{},methods:{checkUpdate:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.updateDialogVisible=!0,this.tips={},this.downloadPercent=0,t=this,t.$electron.ipcRenderer.send("checkForUpdate"),e.next=7,t.$electron.ipcRenderer.on("message",function(e,n){t.tips=n});case 7:t.$electron.ipcRenderer.on("downloadProgress",function(e,n){t.downloadPercent=Number(n.percent.toFixed(2))||0}),t.$electron.ipcRenderer.on("isUpdateNow",function(){t.$electron.ipcRenderer.send("isUpdateNow")});case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),afterRun:function(){this.updateDialogVisible=!1},seeLog:function(){var t=n("3c43");this.system=t.type();var i=e;if("Windows_NT"===this.system){var s=i.split("\\"),r="\\"+s[s.length-2],l=i.lastIndexOf(r);this.logUrl=i.slice(0,l)+"\\wallet_web_log"}else if("Darwin"===this.system){var o=i.split("/"),a="/"+o[o.length-2],c=i.lastIndexOf(a);this.logUrl=i.slice(0,c)+"/wallet_web_log"}}}}}).call(this,"/")}}]);
//# sourceMappingURL=chunk-426af7ea.ab72be59.js.map