webpackJsonp([122],{"0WHj":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("woOf"),s=a.n(l),i=a("XLwt"),n=a.n(i),d={components:{CZXX:a("7WET").a},data:function(){return{pageC:!0,tableDataC:[],CZDialogVisible:!1,type:3,rybh:"",xid:"",CurrentPage:1,pageSize:10,TotalResult:0,options:[{value:10,label:"10"},{value:20,label:"20"},{value:30,label:"30"}],tableData:[],getallfj:[],PSC:[],pd:{SJXFSJ_DateRange:{begin:"",end:"",dataType:"date"},CSRQ_DateRange:{begin:"",end:"",dataType:"date"},TLYXQ_DateRange:{begin:"",end:"",dataType:"date"},FJJSSJ_DateRange:{begin:"",end:"",dataType:"date"}},pd0:{SJXFSJ_DateRange:{begin:"",end:"",dataType:"date"},CSRQ_DateRange:{begin:"",end:"",dataType:"date"},TLYXQ_DateRange:{begin:"",end:"",dataType:"date"},FJJSSJ_DateRange:{begin:"",end:"",dataType:"date"}},lineChart:null,page:0,pdTu:{},allData:{}}},mounted:function(){this.$store.dispatch("getGjdq"),this.$store.dispatch("getZjzl"),this.$store.dispatch("getQzzl"),this.$store.dispatch("getSf"),this.$store.dispatch("getXB"),this.$store.dispatch("getPcs"),this.$store.dispatch("getRjsy"),this.$store.dispatch("getZsbg"),this.$store.dispatch("getRjqzzl"),this.getFj(),this.getListTu(this.pd0,this.pd)},methods:{changeTu:function(){this.pageC=!this.pageC,1==this.pageC?this.getListTu(this.pd0,this.pd):this.getListC(this.pd0,this.pd)},pageSizeChange:function(t){this.getList(this.CurrentPage,t,this.pdTu)},handleCurrentChange:function(t){this.getList(t,this.pageSize,this.pdTu)},changeTime:function(t,e){""==t.begin?e.begin="":null==t.begin?e.begin=null:e.begin=t.begin+" 00:00:00",""==t.end?e.end="":null==t.end?e.end=null:e.end=t.end+" 00:00:00"},getListC:function(t,e){var a=this;this.changeTime(t.SJXFSJ_DateRange,e.SJXFSJ_DateRange),this.changeTime(t.CSRQ_DateRange,e.CSRQ_DateRange),this.changeTime(t.TLYXQ_DateRange,e.TLYXQ_DateRange),this.changeTime(t.FJJSSJ_DateRange,e.FJJSSJ_DateRange),this.$api.post(this.Global.aport5+"/djbhl/getdjbhltjlb",{pd:e},function(t){t.success&&(a.tableDataC=t.data.resultList)})},getListTu:function(t,e){var a=this;this.changeTime(t.SJXFSJ_DateRange,e.SJXFSJ_DateRange),this.changeTime(t.CSRQ_DateRange,e.CSRQ_DateRange),this.changeTime(t.TLYXQ_DateRange,e.TLYXQ_DateRange),this.changeTime(t.FJJSSJ_DateRange,e.FJJSSJ_DateRange),this.$api.post(this.Global.aport5+"/djbhl/getdjbhl",{pd:e},function(t){t.success&&a.drawLine(t.data.legend,t.data.xAxis,t.data.series)})},downloadC:function(t,e){var a=this;0!=this.tableDataC.length?(this.changeTime(t.SJXFSJ_DateRange,e.SJXFSJ_DateRange),this.changeTime(t.CSRQ_DateRange,e.CSRQ_DateRange),this.changeTime(t.TLYXQ_DateRange,e.TLYXQ_DateRange),this.changeTime(t.FJJSSJ_DateRange,e.FJJSSJ_DateRange),this.$api.post(this.Global.aport5+"/djbhl/exportdjbhlchart",{pd:e},function(t){a.downloadM(t)},function(t){},{},"blob")):this.$message({message:"列表无数据！",type:"warning"})},downloadM:function(t){if(t){var e=window.URL.createObjectURL(new Blob([t],{type:"application/xls"})),a=document.createElement("a");a.style.display="none",a.href=e,a.setAttribute("download","常住登记变化量列表"+this.format(new Date,"yyyyMMddhhmmss")+".xls"),document.body.appendChild(a),a.click()}},getList:function(t,e,a){var l=this,s={currentPage:t,showCount:e,pd:a};this.$api.post(this.Global.aport5+"/djbhl/getjbxx",s,function(t){t.success&&(l.tableData=t.data.resultList,l.TotalResult=t.data.totalResult)})},details:function(t){this.xid=t.RGUID,this.rybh=t.RYBH,this.allData=t,this.CZDialogVisible=!0},getFj:function(){var t=this;this.$api.post(this.Global.aport5+"/djbhl/getallfj",{},function(e){e.success&&(t.getallfj=e.data)})},getPSC:function(t){var e=this;this.$api.post(this.Global.aport5+"/djbhl/getpcsbyfjdm",{fjdm:t},function(t){t.success&&(e.PSC=t.data)})},drawLine:function(t,e,a){this.lineChart=n.a.init(document.getElementById("echarts")),window.onresize=n.a.init(document.getElementById("echarts")).resize;for(var l={normal:{show:!0,position:"top"}},i=0;i<a.length;i++)for(var d=0,o=0;o<a[i].data.length;o++)0!=(d+=a[i].data[o])&&(a[i].label=l);var p=this,c=["#5793f3","#d14a61","#675bba"];p.lineChart.setOption({color:c,tooltip:{trigger:"axis",axisPointer:{type:"cross"}},legend:{data:t},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisLine:{onZero:!1,lineStyle:{color:c[1]}},data:e}],yAxis:[{type:"value"}],series:a},!0),p.lineChart.off("click"),p.lineChart.on("click",function(t){var e={};e=s()({},p.pd),p.changeTime(p.pd0.SJXFSJ_DateRange,e.SJXFSJ_DateRange),p.changeTime(p.pd0.CSRQ_DateRange,e.CSRQ_DateRange),p.changeTime(p.pd0.TLYXQ_DateRange,e.TLYXQ_DateRange),p.changeTime(p.pd0.FJJSSJ_DateRange,e.FJJSSJ_DateRange),e.SJD=t.name,p.pdTu=e,p.page=1,p.CurrentPage=1,p.getList(p.CurrentPage,p.pageSize,p.pdTu)}),p.lineChart.resize()}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"yymain"},[a("div",{staticClass:"yytitle"},[a("el-row",{attrs:{type:"flex"}},[a("el-col",{staticClass:"br pr-20",attrs:{span:22}},[a("el-row",{attrs:{align:"center",gutter:2}},[a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text",attrs:{title:"市局下发时间"}},[t._v("市局下发时间：")]),t._v(" "),a("div",{staticClass:"input-input t-flex t-date"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"开始时间"},model:{value:t.pd0.SJXFSJ_DateRange.begin,callback:function(e){t.$set(t.pd0.SJXFSJ_DateRange,"begin",e)},expression:"pd0.SJXFSJ_DateRange.begin"}}),t._v(" "),a("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"结束时间"},model:{value:t.pd0.SJXFSJ_DateRange.end,callback:function(e){t.$set(t.pd0.SJXFSJ_DateRange,"end",e)},expression:"pd0.SJXFSJ_DateRange.end"}})],1)]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("国家地区：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.GJDQ,callback:function(e){t.$set(t.pd,"GJDQ",e)},expression:"pd.GJDQ"}},t._l(t.$store.state.gjdq,function(t){return a("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("性别：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.XB,callback:function(e){t.$set(t.pd,"XB",e)},expression:"pd.XB"}},t._l(t.$store.state.xb,function(t){return a("el-option",{key:t.dm,attrs:{value:t.dm,label:t.dm+" - "+t.mc}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("出生日期：")]),t._v(" "),a("div",{staticClass:"input-input t-flex t-date"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"开始时间"},model:{value:t.pd0.CSRQ_DateRange.begin,callback:function(e){t.$set(t.pd0.CSRQ_DateRange,"begin",e)},expression:"pd0.CSRQ_DateRange.begin"}}),t._v(" "),a("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"结束时间"},model:{value:t.pd0.CSRQ_DateRange.end,callback:function(e){t.$set(t.pd0.CSRQ_DateRange,"end",e)},expression:"pd0.CSRQ_DateRange.end"}})],1)]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text",attrs:{title:"停留有效期"}},[t._v("停留有效期：")]),t._v(" "),a("div",{staticClass:"input-input t-flex t-date"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"开始时间"},model:{value:t.pd0.TLYXQ_DateRange.begin,callback:function(e){t.$set(t.pd0.TLYXQ_DateRange,"begin",e)},expression:"pd0.TLYXQ_DateRange.begin"}}),t._v(" "),a("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"结束时间"},model:{value:t.pd0.TLYXQ_DateRange.end,callback:function(e){t.$set(t.pd0.TLYXQ_DateRange,"end",e)},expression:"pd0.TLYXQ_DateRange.end"}})],1)]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("停留事由：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.TLSY,callback:function(e){t.$set(t.pd,"TLSY",e)},expression:"pd.TLSY"}},t._l(t.$store.state.rjsy,function(t){return a("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("证件种类：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.ZJZL,callback:function(e){t.$set(t.pd,"ZJZL",e)},expression:"pd.ZJZL"}},t._l(t.$store.state.zjzl,function(t){return a("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("签证种类：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.QZZl,callback:function(e){t.$set(t.pd,"QZZl",e)},expression:"pd.QZZl"}},t._l(t.$store.state.rjqzzl,function(t){return a("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("身份：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.SFDM,callback:function(e){t.$set(t.pd,"SFDM",e)},expression:"pd.SFDM"}},t._l(t.$store.state.sf,function(t){return a("el-option",{key:t.dm,attrs:{label:t.dm+" - "+t.mc,value:t.dm}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text",attrs:{title:"分局接收时间"}},[t._v("分局接收时间：")]),t._v(" "),a("div",{staticClass:"input-input t-flex t-date"},[a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"开始时间"},model:{value:t.pd0.FJJSSJ_DateRange.begin,callback:function(e){t.$set(t.pd0.FJJSSJ_DateRange,"begin",e)},expression:"pd0.FJJSSJ_DateRange.begin"}}),t._v(" "),a("span",{staticClass:"septum"},[t._v("-")]),t._v(" "),a("el-date-picker",{attrs:{format:"yyyy-MM-dd",type:"date",size:"small","value-format":"yyyy/MM/dd",placeholder:"结束时间"},model:{value:t.pd0.FJJSSJ_DateRange.end,callback:function(e){t.$set(t.pd0.FJJSSJ_DateRange,"end",e)},expression:"pd0.FJJSSJ_DateRange.end"}})],1)]),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("所属分局：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},on:{change:function(e){t.getPSC(t.pd.SSFJ)}},model:{value:t.pd.SSFJ,callback:function(e){t.$set(t.pd,"SSFJ",e)},expression:"pd.SSFJ"}},t._l(t.getallfj,function(t){return a("el-option",{key:t.DM,attrs:{label:t.DM+" - "+t.MC,value:t.DM}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text",attrs:{title:"所属派出所"}},[t._v("所属派出所：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.SSPCS,callback:function(e){t.$set(t.pd,"SSPCS",e)},expression:"pd.SSPCS"}},t._l(t.PSC,function(t){return a("el-option",{key:t.DM,attrs:{label:t.MC,value:t.DM}})}),1)],1),t._v(" "),a("el-col",{staticClass:"input-item",attrs:{sm:24,md:12,lg:8}},[a("span",{staticClass:"input-text"},[t._v("显示类别：")]),t._v(" "),a("el-select",{staticClass:"input-input",attrs:{filterable:"",clearable:"","default-first-option":"",placeholder:"请选择",size:"small"},model:{value:t.pd.XSLB,callback:function(e){t.$set(t.pd,"XSLB",e)},expression:"pd.XSLB"}},[a("el-option",{attrs:{value:"day",label:"日"}}),t._v(" "),a("el-option",{attrs:{value:"month",label:"月"}}),t._v(" "),a("el-option",{attrs:{value:"quarter",label:"季度"}}),t._v(" "),a("el-option",{attrs:{value:"year",label:"年"}})],1)],1)],1)],1),t._v(" "),a("el-col",{staticClass:"down-btn-area",attrs:{span:2}},[a("el-button",{attrs:{type:"success",size:"small"},on:{click:function(e){t.page=0,t.tableData=[],t.CurrentPage=1,t.TotalResult=0,t.getListTu(t.pd0,t.pd),t.getListC(t.pd0,t.pd)}}},[t._v("查询")])],1)],1)],1),t._v(" "),a("div",{staticClass:"yycontent"},[a("div",{staticClass:"ak-tabs"},[a("div",{staticClass:"ak-tab-item hand",class:{"ak-checked":0==t.page},on:{click:function(e){t.page=0,t.getList()}}},[t._v("\n        图表\n      ")]),t._v(" "),a("div",{staticClass:"ak-tab-item hand",class:{"ak-checked":1==t.page},on:{click:function(e){t.page=1}}},[t._v("\n        列表\n      ")])]),t._v(" "),a("div",{staticClass:"ak-tab-pane"},[a("div",{},[a("span",{staticClass:"t-fr"},[a("i",{directives:[{name:"show",rawName:"v-show",value:0==t.page,expression:"page==0"}],staticClass:"iconbtn hand",class:{"el-icon-s-grid":1==t.pageC,"el-icon-s-data":0==t.pageC},attrs:{title:1==t.pageC?"转为列表":"转为图表"},on:{click:function(e){t.changeTu()}}})]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:0==t.pageC&&0==t.page,expression:"pageC==false&&page==0"}],attrs:{type:"primary",size:"small"},on:{click:function(e){t.downloadC(t.pd0,t.pd)}}},[t._v("导出")]),t._v(" "),a("div",{staticStyle:{clear:"both"}})],1),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.page,expression:"page==0"}]},[a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.pageC,expression:"pageC==true"}],staticClass:"chart",staticStyle:{width:"100%"}},[a("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"echarts"}})]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:0==t.pageC,expression:"pageC==false"}],staticClass:"t-mt10"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableDataC,border:""}},[a("el-table-column",{attrs:{prop:"rq",label:"日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"sl",label:"数量"}})],1)],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1==t.page,expression:"page==1"}]},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},[a("el-table-column",{attrs:{prop:"CSRQ",label:"出生日期"}}),t._v(" "),a("el-table-column",{attrs:{prop:"GJDQ_DESC",label:"国家地区"}}),t._v(" "),a("el-table-column",{attrs:{prop:"SFDM_DESC",label:"身份"}}),t._v(" "),a("el-table-column",{attrs:{prop:"XB_DESC",label:"性别"}}),t._v(" "),a("el-table-column",{attrs:{prop:"YWXM",label:"英文姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"ZWXM",label:"中文姓名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"SJXFSJ",label:"市局下发时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"SSPCS_DESC",label:"所属派出所"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{staticClass:"a-btn",attrs:{type:"text",title:"详情",size:"mini",icon:"el-icon-tickets"},on:{click:function(a){t.details(e.row)}}})]}}])})],1),t._v(" "),a("div",{staticClass:"middle-foot"},[a("div",{staticClass:"page-msg"},[a("div",{},[t._v("\n                  共"+t._s(t.TotalResult)+"条记录\n              ")]),t._v(" "),a("div",{},[t._v("\n                每页显示\n                "),a("el-select",{staticClass:"page-select",attrs:{placeholder:"10",size:"mini"},on:{change:function(e){t.pageSizeChange(t.pageSize)}},model:{value:t.pageSize,callback:function(e){t.pageSize=e},expression:"pageSize"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1),t._v("\n                条\n              ")],1),t._v(" "),a("div",{},[t._v("\n              共"+t._s(Math.ceil(t.TotalResult/t.pageSize))+"页\n              ")])]),t._v(" "),a("el-pagination",{attrs:{background:"","current-page":t.CurrentPage,"page-size":t.pageSize,layout:"prev, pager, next",total:t.TotalResult},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.CurrentPage=e}}})],1)],1)])]),t._v(" "),a("el-dialog",{attrs:{title:"常住信息详情",visible:t.CZDialogVisible,"custom-class":"big_dialog","append-to-body":!1,modal:!1},on:{"update:visible":function(e){t.CZDialogVisible=e}}},[a("CZXX",{attrs:{type:t.type,xid:t.xid,rybh:t.rybh,random:(new Date).getTime(),row:t.allData}}),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(e){t.CZDialogVisible=!1}}},[t._v("取 消")])],1)],1)],1)},staticRenderFns:[]},p=a("VU/8")(d,o,!1,null,null,null);e.default=p.exports}});
//# sourceMappingURL=122.9be3269f23bc7bc78d7b.js.map