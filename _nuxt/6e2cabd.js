(window.webpackJsonp=window.webpackJsonp||[]).push([[38,7,8,16],{341:function(e,t,n){"use strict";n.r(t);n(251),n(54);var o=n(65),l=n(0),r={props:{label:String,value:[Number,String]},data:function(){return{copied:!1}},computed:{iconVariant:function(){return this.copied?"success":"primary"},icon:function(){return this.copied?"clipboard-check":"clipboard"},textClass:function(){return this.copied?"text-success":""}},methods:{onClick:function(){var e=this;navigator.clipboard.writeText(this.value),this.copied=!0,setTimeout((function(){return e.copied=!1}),2e3)}},components:{BIcon:o.a,BIconClipboard:l.nh,BIconClipboardCheck:l.oh}},c=(n(344),n(74)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{class:e.textClass,on:{click:e.onClick}},[n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.right",value:"Copy to clipboard.",expression:"'Copy to clipboard.'",modifiers:{hover:!0,right:!0}}],staticClass:"pr-1"},[e._v("\n        "+e._s(e.label)+": "),n("b",[e._v(e._s(e.value))]),e._v(" "),n("b-icon",{staticClass:"ml-2",attrs:{variant:e.iconVariant,icon:e.icon}})],1)])}),[],!1,null,"1ddf5822",null);t.default=component.exports},342:function(e,t,n){var content=n(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(90).default)("1ea0f587",content,!0,{sourceMap:!1})},344:function(e,t,n){"use strict";n(342)},345:function(e,t,n){var o=n(89)(!1);o.push([e.i,"p[data-v-1ddf5822]{margin-top:.15rem;margin-bottom:.15rem}p[data-v-1ddf5822]:hover{cursor:pointer}p>svg[data-v-1ddf5822]{font-size:larger}",""]),e.exports=o},346:function(e,t,n){"use strict";n.r(t);n(251),n(24),n(32),n(9),n(51),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(369),n(370),n(371);var o=n(65),l=n(0),r=n(341),c={props:{title:String,visible:{type:Boolean,default:!0},config:Object,items:Array,value:[Object,String,Number],vselect:{type:Boolean,default:!1}},components:{BIcon:o.a,BIconChevronExpand:l.fh,BIconChevronContract:l.Zg,ConfigValue:r.default},data:function(){return{uuid:([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(function(e){return(e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)})),show:this.visible}},watch:{visible:function(e){this.show=e}}},d=n(74),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-card",{attrs:{"header-class":"p-0","body-class":"px-2 py-1"},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:""+e.uuid,expression:"`${uuid}`"}],staticClass:"d-flex px-2 pt-1"},[n("h6",{staticClass:"mb-0"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"ml-auto px-2 py-0",attrs:{size:"sm"}},[e.show?n("b-icon",{attrs:{icon:"chevron-contract"}}):n("b-icon",{attrs:{icon:"chevron-expand"}})],1)])]},proxy:!0}])},[e._v(" "),n("b-collapse",{attrs:{id:e.uuid},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._t("default"),e._v(" "),e.config?[e._l(e.config,(function(t,o,i){return[t instanceof Array?e._l(t,(function(e,t){return n("ConfigValue",{key:e.label+t,attrs:{label:e.label,value:e.value}})})):"Any"!==t.value?[n("ConfigValue",{key:o+i,attrs:{label:t.label,value:t.value}})]:e._e()]}))]:e._e(),e._v(" "),e.items?[e.vselect?[n("v-select",{attrs:{value:e.value,label:"text",reduce:function(e){return e.value},options:e.items,placeholder:"-- Please select and option --"},on:{input:function(t){return e.$emit("input",t)},search:function(t,n){return e.$emit("search",t,n)}},scopedSlots:e._u([{key:"no-options",fn:function(t){t.search,t.searching,t.loading;return[e._v("\n                        Search must be 3 or more characers.\n                    ")]}}],null,!1,1527003152)})]:[n("b-form-select",{attrs:{id:"item",value:e.value,options:e.items},on:{input:function(t){return e.$emit("input",t)}},scopedSlots:e._u([{key:"first",fn:function(){return[n("b-form-select-option",{attrs:{value:null,disabled:""}},[e._v("\n                            -- Please select an option --\n                        ")])]},proxy:!0}],null,!1,2226584658)})]]:e._e()],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ConfigValue:n(341).default})},373:function(e,t,n){"use strict";n.r(t);var o=n(65),l=n(0),r={data:function(){return{port:8080,start:!1,showConfigLoader:!1}},computed:{isDev:function(){return"true"==this.$route.query.dev||!1}},components:{BIcon:o.a,BIconInfoCircle:l.Do}},c=n(74),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-1"},[e.isDev||e.showConfigLoader?n("div",[n("ConfigCardV2",{attrs:{title:"PureConfigLoader"}},[n("b-form",{staticClass:"gap-3",attrs:{inline:""}},[n("label",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{for:"port",title:"Should match PureConfigLoader plugin's port"}},[n("b-icon",{staticClass:"mr-1",attrs:{icon:"info-circle"}}),e._v(" Port\n                ")],1),e._v(" "),n("b-input",{model:{value:e.port,callback:function(t){e.port=t},expression:"port"}}),e._v(" "),n("b-form-checkbox",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:"Should BankStander start when config is loaded?"},model:{value:e.start,callback:function(t){e.start=t},expression:"start"}},[n("b-icon",{staticClass:"mr-1",attrs:{icon:"info-circle"}}),e._v(" Start?\n                ")],1),e._v(" "),n("b-btn",{attrs:{size:"sm"},on:{click:function(t){return e.$emit("post",e.port,e.start)}}},[e._v("Send to RuneLite")]),e._v(" "),e.isDev?e._e():n("b-btn",{attrs:{size:"sm"},on:{click:function(t){e.showConfigLoader=!1}}},[e._v("Back")])],1)],1)],1):n("div",[n("b-btn",{attrs:{size:"sm"},on:{click:function(t){return e.$emit("click")}}},[e._v("Save Setup")]),e._v(" "),n("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.save-help",modifiers:{"save-help":!0}}],attrs:{size:"sm",variant:"info"}},[e._v("Save Help")]),e._v(" "),n("b-btn",{attrs:{size:"sm"},on:{click:function(t){e.showConfigLoader=!e.showConfigLoader}}},[e._v("Config Loader")])],1),e._v(" "),n("b-modal",{attrs:{id:"save-help",size:"xl",title:"Save Help","header-class":"bg-dark text-white","ok-title":"Close","ok-only":""}},[n("b-card",{attrs:{"header-class":"h5"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Selecting Properties File")]},proxy:!0}])},[e._v(" "),n("p",{staticClass:"text-danger h6"},[e._v("\n                MAKE A BACKUP OF YOUR PROPERTIES FILE BEFORE SAVING!\n            ")]),e._v(" "),n("p",[e._v('\n                Click "Save Setup" and select the properties file for the RuneLite profile you are using. It is most\n                likely located at one of\n                these locations:\n            ')]),e._v(" "),n("ul",[n("li",[e._v("%userprofile%/.runelite/profiles")]),e._v(" "),n("li",[e._v("%userprofile%/.runelite/profiles2")])]),e._v(" "),n("p",[e._v("The file is likely named something similar to:")]),e._v(" "),n("ul",[n("li",[e._v("default-0.properties")])]),e._v(" "),n("p",[n("img",{attrs:{src:"/bank-stander/profiles.png",alt:"",width:"100%"}})]),e._v(" "),n("p",[e._v('After you\'ve selected your properties file, click "Save Setup" again to save the config. Your\n                properties file will stay loaded until your refresh the page. If you wish to select a new properties\n                file, refresh the page.')])]),e._v(" "),n("b-card",{attrs:{"header-class":"h5"},scopedSlots:e._u([{key:"header",fn:function(){return[e._v("Reloading Bank Stander")]},proxy:!0}])},[e._v(" "),n("div",{staticClass:"mb-3"},[n("p",[e._v("Create a new RuneLite profile by duplicating your current one "),n("span",{staticClass:"text-success h6"},[e._v("(skip if\n                        you've done this already).")])]),e._v(" "),n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"/bank-stander/duplicate_profile.png",alt:""}})]),e._v(" "),n("div",{staticClass:"mb-3"},[n("p",[e._v("Double click the new profile to load it.")]),e._v(" "),n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"/bank-stander/load_new.png",alt:""}})]),e._v(" "),n("div",{staticClass:"mb-3"},[n("p",[e._v("Double click the old profile to reload it.")]),e._v(" "),n("img",{staticStyle:{"max-width":"100%"},attrs:{src:"/bank-stander/load_old.png",alt:""}})])])],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ConfigCardV2:n(346).default})},374:function(e,t,n){"use strict";var o=n(47),l=n(45),r=(n(102),n(30),n(252),n(24),n(32),n(375),n(9),n(11),n(377)),c=n.n(r);t.a={data:function(){return{config:{general:{type:{label:"Type",value:"Any"},spellOnItem:{label:"Spell (On Item)",value:"Any"}},item:{firstId:{label:"First Item ID",value:0},firstAmount:{label:"First Amount",value:0},useSecond:{label:"Use Second Item",value:"☐"},secondId:{label:"Second/Tool ID",value:0},secondAmount:{label:"Second/Tool Amount",value:0},placeholderIds:[{label:"Placeholder ID",value:0},{label:"Placeholder ID",value:0},{label:"Placeholder ID",value:0}]},object:{id:{label:"Object ID",value:0}},bank:{type:{label:"Bank Type",value:0},id:{label:"Bank ID",value:0},opcode:{label:"Bank Op Code",value:0}},menu:{opcode:{label:"Menu OpCode",value:0},param:{label:"Menu Param1",value:0}},inventory:{opcode:{label:"Inventory OpCode",value:0}}},bank:null,item:null,tool:null,placeholders:[null,null,null]}},computed:{fileHandle:{get:function(){return this.$store.state.properties.fileHandle},set:function(e){this.$store.commit("properties/setFileHandle",e)}},properties:{get:function(){return this.$store.state.properties.properties},set:function(e){this.$store.commit("properties/setProperties",e)}}},methods:{getCfgTitle:function(e){return e.charAt(0).toUpperCase()+e.slice(1)+" Config"},setDefaultConfig:function(e){for(var t=0,n=Object.entries(e);t<n.length;t++)for(var o=Object(l.a)(n[t],2),r=o[0],c=o[1],d=0,f=Object.entries(c);d<f.length;d++){var v=Object(l.a)(f[d],2),m=v[0],h=v[1];if(h instanceof Array)for(var i in h)this.config[r][m][0].value=h[i];else this.config[r][m].value=h}},selectFile:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.showOpenFilePicker({types:[{description:"Properties",accept:{"text/properties":".properties"}}]}).then((function(e){return e[0]})).catch((function(){return null}));case 2:e.fileHandle=t.sent,e.fileHandle&&e.fileHandle.getFile().then((function(t){t.text().then((function(text){e.properties=c.a.parseToProperties(text),e.$bvToast.toast("You can now save your config.",{title:"File Loaded",variant:"warning",solid:!0})}))}));case 4:case"end":return t.stop()}}),t)})))()},saveConfig:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.fileHandle){t.next=5;break}return t.next=3,e.selectFile();case 3:t.next=6;break;case 5:e.properties&&e.fileHandle?((n=Object.assign({},e.properties))["ElBankStander.type"]=""+e.config.general.type.value.replaceAll(" ","_").toUpperCase(),n["ElBankStander.firstId"]=""+e.config.item.firstId.value,n["ElBankStander.firstAmount"]=""+e.config.item.firstAmount.value,n["ElBankStander.useSecond"]=e.config.item.firstAmount.value?"true":"false",n["ElBankStander.secondId"]=""+e.config.item.secondId.value,n["ElBankStander.secondAmount"]=""+e.config.item.secondAmount.value,n["ElBankStander.usePlaceholders"]=e.config.item.placeholderIds[0].value?"true":"false",n["ElBankStander.placeholder1Id"]=""+e.config.item.placeholderIds[0].value,n["ElBankStander.placeholder2Id"]=""+e.config.item.placeholderIds[1].value,n["ElBankStander.placeholder3Id"]=""+e.config.item.placeholderIds[2].value,n["ElBankStander.objectId"]=""+e.config.object.id.value,n["ElBankStander.bankType"]=""+e.config.bank.type.value,n["ElBankStander.bankId"]=""+e.config.bank.id.value,n["ElBankStander.bankOpCode"]=""+e.config.bank.opcode.value,n["ElBankStander.menuOp"]=""+e.config.menu.opcode.value,n["ElBankStander.menuParam1"]=""+e.config.menu.param.value,n["ElBankStander.inventoryOp"]=""+e.config.inventory.opcode.value,n["ElBankStander.startButton"]="false",e.properties=n,e.fileHandle.createWritable().then((function(t){t.write(c.a.stringifyFromProperties(e.properties)).then((function(){t.close(),e.$bvToast.toast("Successfully saved config.",{title:"Config Saved",autoHideDelay:2e3,variant:"success",solid:!0})}))}))):e.$bvToast.toast("Unable to save config.",{title:"Save Failed",autoHideDelay:2e3,variant:"danger",solid:!0});case 6:case"end":return t.stop()}}),t)})))()},postConfigToPlugin:function(){var e=arguments,t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.length>0&&void 0!==e[0]?e[0]:8080,l=e.length>1&&void 0!==e[1]&&e[1],n.next=4,t.$axios.post("http://localhost:".concat(o,"/config"),{group:"ElBankStander",items:[{key:"type",value:t.config.general.type.value.replaceAll(" ","_").toUpperCase()},{key:"firstId",value:t.config.item.firstId.value},{key:"firstAmount",value:t.config.item.firstAmount.value},{key:"useSecond",value:t.config.item.firstAmount.value},{key:"secondId",value:t.config.item.secondId.value},{key:"secondAmount",value:t.config.item.secondAmount.value},{key:"usePlaceholders",value:!!t.config.item.placeholderIds[0].value},{key:"placeholder1Id",value:t.config.item.placeholderIds[0].value},{key:"placeholder2Id",value:t.config.item.placeholderIds[1].value},{key:"placeholder3Id",value:t.config.item.placeholderIds[2].value},{key:"objectId",value:t.config.object.id.value},{key:"bankType",value:t.config.bank.type.value},{key:"bankId",value:t.config.bank.id.value},{key:"bankOpCode",value:t.config.bank.opcode.value},{key:"menuOp",value:t.config.menu.opcode.value},{key:"menuParam1",value:t.config.menu.param.value},{key:"inventoryOp",value:t.config.inventory.opcode.value},{key:"startButton",value:l}]}).then((function(e){t.$bvToast.toast("Config sent to RuneLite",{title:"Success",variant:"success",solid:!0})})).catch((function(e){t.$bvToast.toast("".concat(e),{title:"Request Failed",variant:"danger",solid:!0})}));case 4:case"end":return n.stop()}}),n)})))()}},watch:{bank:function(e){e&&(this.config.bank.id.value=e.id,this.config.bank.type.value=e.type,this.config.bank.opcode.value=e.opCode,this.config.object.id.value=e.obj||0)},item:function(e){e&&(this.config.item.firstId.value=e.id,e.firstAmount&&(this.config.item.firstAmount.value=e.firstAmount),e.secondId&&(this.config.item.secondId.value=e.secondId,e.stackable?(this.config.general.type.value="Use Tool on Item",this.config.item.firstAmount.value=27,this.config.item.secondAmount.value=1):1==this.config.item.firstAmount.value&&this.config.item.firstAmount.value||(e.secondAmount?this.config.item.secondAmount.value=e.secondAmount:(this.config.general.type.value="Use Item on Item",this.config.item.firstAmount.value=14,this.config.item.secondAmount.value=14))))},tool:function(e){this.config.item.secondId.value=e.id,null!=e.firstAmount&&(this.config.item.firstAmount.value=e.firstAmount),null!=e.secondAmount&&(this.config.item.secondAmount.value=e.secondAmount)},placeholders:function(e){var t=this;e.forEach((function(p,i){t.config.item.placeholderIds[i].value=p?p.id:0}))}}}},375:function(e,t,n){n(376)},376:function(e,t,n){"use strict";var o=n(26),l=n(21),r=n(44),c=n(25),d=n(57),f=n(35),v=n(148),m=n(42),h=n(83),k=n(149),y=n(253),C=n(34),_=n(68),x=C("replace"),S=RegExp.prototype,I=l.TypeError,w=c(k),A=c("".indexOf),B=c("".replace),O=c("".slice),E=Math.max,P=function(e,t,n){return n>e.length?-1:""===t?n:A(e,t,n)};o({target:"String",proto:!0},{replaceAll:function(e,t){var n,o,l,c,k,C,j,T,$,R=d(this),D=0,F=0,V="";if(null!=e){if((n=v(e))&&(o=m(d("flags"in S?e.flags:w(e))),!~A(o,"g")))throw I("`.replaceAll` does not allow non-global regexes");if(l=h(e,x))return r(l,e,R,t);if(_&&n)return B(m(R),e,t)}for(c=m(R),k=m(e),(C=f(t))||(t=m(t)),j=k.length,T=E(1,j),D=P(c,k,0);-1!==D;)$=C?m(t(k,D,c)):y(k,c,D,[],void 0,t),V+=O(c,F,D)+$,F=D+j,D=P(c,k,D+T);return F<c.length&&(V+=O(c,F)),V}})},378:function(e){e.exports=JSON.parse('[{"text":"Grand Exchange","value":{"type":"Npc","id":1634,"opCode":11}},{"text":"Prifddinas","value":{"type":"Npc","id":9131,"opCode":11}},{"text":"Varrock West","value":{"type":"Npc","id":2897,"opCode":11}},{"text":"Woodcutting Guild","value":{"type":"Game Object","id":28861,"opCode":3}},{"text":"Clan Hall","value":{"type":"Npc","id":10737,"opCode":11}}]')},417:function(e){e.exports=JSON.parse('{"config":{"general":{"type":"Use Tool on Item"},"item":{"firstAmount":27,"secondId":1755,"secondAmount":1},"menu":{"opcode":57,"param":17694734}},"items":[{"text":"Opal","value":{"id":1625}},{"text":"Jade","value":{"id":1627}},{"text":"Red topaz","value":{"id":1629}},{"text":"Sapphire","value":{"id":1623}},{"text":"Emerald","value":{"id":1621}},{"text":"Ruby","value":{"id":1619}},{"text":"Diamond","value":{"id":1617}},{"text":"Dragonstone","value":{"id":1631}},{"text":"Onyx","value":{"id":6571}},{"text":"Zenyte","value":{"id":19496}}]}')},447:function(e,t,n){"use strict";n.r(t);var o=n(417),l=n(378),r=n(374),c=n(373),d={name:"GemCutting",layout:"layoutv2",mixins:[r.a],data:function(){return{gemcutting:o,banks:l}},created:function(){this.setDefaultConfig(this.gemcutting.config)},components:{SaveButtons:c.default}},f=n(74),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-3"},[n("SaveButtons",{on:{click:e.saveConfig,post:e.postConfigToPlugin}}),e._v(" "),n("ConfigCardV2",{attrs:{items:e.banks,title:"Bank",visible:""},model:{value:e.bank,callback:function(t){e.bank=t},expression:"bank"}}),e._v(" "),n("ConfigCardV2",{attrs:{items:e.gemcutting.items,title:"Item",visible:""},model:{value:e.item,callback:function(t){e.item=t},expression:"item"}}),e._v(" "),e._l(e.config,(function(t,o,i){return n("ConfigCardV2",{key:o,attrs:{title:e.getCfgTitle(o),config:t,visible:""}})}))],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SaveButtons:n(373).default,ConfigCardV2:n(346).default})}}]);