<template lang="html">
    <!-- 持长期签证非法就业预警(留学生非法预警) -->
      <div class="yymain ">
        <!-- 地图 -->

        <div id="mainMap" class="mapbj lzxx"></div>

        <!-- 右侧查询导航 -->
        <div class="fxleft">
            <!-- 右侧隐藏 -->
             <div class="fxbnt">
               <el-button  size="mini" type="primary" @click="changtab()" v-if="show" icon="iconfont el-icon-yy-xiangshangjiantou" style="border-radius:0px!important;border-width: 1px 1px 0px 1px"></el-button>
               <el-button  size="mini" type="primary" @click="changtab()" v-else icon="iconfont el-icon-yy-xiangxiajiantou" style="border-radius:0px!important;"></el-button>
             </div>
             <el-collapse-transition>
             <div class="fxcont" v-if="show">
                <el-row :gutter="1">
                  <el-col  :span="24">
                     <span class="input-text" style="width:25%!important;">距离设置：</span>
                     <el-input-number v-model="jlsz" controls-position="right" size="mini" :min="5" :max="10"></el-input-number>
                     <span style="font-size:12px;">公里</span>
                  </el-col>
                  <el-col :span="24">
                    <span style="font-size:12px; color:red">* 距离设置区间5-10</span>
                  </el-col>
                </el-row>
                <div class="resultpaneltitle">南京高校列表</div>
                <div  style="max-height:500px;  overflow-y: scroll;margin-top:25px" element-loading-text="正在加载中" v-loading="loading1" element-loading-spinner="el-icon-loading">
                <div id="resultpanel" v-for="item in datastr" >
                    <div class="fflist" @click="getInfo(item.xxdm,item.xxmc)">
                      {{item.xxmc}} 
                      <!-- 数量样式 -->
                      <span class="sl">({{item.count}})</span>
                     </div>
                </div>
              </div>
             </div>
            </el-collapse-transition>
        </div>
        <!-- 左侧导航查询开始 -->
        <div class="fxright">
             <!-- 右侧上下贴换按钮 -->
             <div class="rightbnt">
               <el-button  size="mini" type="primary" @click="changtab1()" v-if="show1" icon="iconfont el-icon-yy-xiangshangjiantou" style="border-radius:0px!important;border-width: 1px 1px 0px 1px"></el-button>
               <el-button  size="mini" type="primary" @click="changtab1()" v-else icon="iconfont el-icon-yy-xiangxiajiantou" style="border-radius:0px!important;"></el-button>
             </div>     
             <!--右侧面板嵌套表格-->
            <el-collapse-transition>
             <div class="bghome bhgg" v-if="show1">
             <!-- 正常可以查询导出还有分页 -->
               <!--<el-dialog title="留学生非法就业列表" :visible.sync="show1">-->
                <!-- 查询框 -->
                <el-row class="bghome1">
                  <el-col :span="22">
                    <el-row align="center" :gutter="2">
                      <el-col  :sm="24" :md="12" :lg="12"   class="input-item1" >
                        <span class="input-text1">服务处所：</span>
                        <el-input v-model="pd1.FWCS" placeholder="请输入内容" size="small" class="input-input"></el-input>
                      </el-col>
                      <el-col  :sm="24" :md="12" :lg="12"   class="input-item1">
                        <span class="input-text1">详细地址：</span>
                        <el-input v-model="pd1.XXDZ" placeholder="请输入内容" size="small"  class="input-input"></el-input>
                      </el-col>
                      <el-col  :sm="24" :md="12" :lg="12"   class="input-item1">
                        <span class="input-text1">所属派出所：</span>
                          <el-select v-model="pd1.PCS" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" :disabled="juState=='3'" :no-data-text="pd1.FJ==''||pd1.FJ==undefined?'请先选择所属分局':'无数据'">
                            <el-option
                              v-for="item in PSC"
                              :key="item.DM"
                              :label="item.MC"
                              :value="item.DM">
                            </el-option>
                          </el-select>
                      </el-col>
                      <el-col  :sm="24" :md="12" :lg="12"   class="input-item1">
                        <span class="input-text1">所属分局：</span>
                          <el-select v-model="pd1.FJ" @change="getPSC(pd1.FJ)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" :disabled="juState=='1'?false:true">
                            <el-option
                              v-for="item in getallfj"
                              :key="item.DM"
                              :label="item.DM+' - '+item.MC"
                              :value="item.DM">
                            </el-option>
                          </el-select>
                      </el-col>                      
                    </el-row>
                  </el-col> 
                  <!-- 查询，导出按钮 --> 
                  <el-col :span="2">
                        <el-button type="success" size="small"  class="mb-15"  @click="CurrentPage1=1;getLxs(CurrentPage1,pageSize1,pd1)">查询</el-button>
                        <el-button type="success" size="small"  class="mb-15" @click="download()">导出</el-button>
                  </el-col> 
                </el-row>
                <!-- 留学生数据表格 -->
                  <el-table :data="tableData1" 
                    v-loading="loading" 
                    element-loading-text="正在加载中"  
                    element-loading-spinner="el-icon-loading"
                    element-loading-background="rgba(0,0,0,0.2)"
                  style="width: 100%" >
                    <el-table-column
                      prop="gjdq"
                      label="国家地区">
                    </el-table-column>
                    <el-table-column
                      prop="csrq"
                      label="出生日期">
                    </el-table-column>
                    <el-table-column
                      prop="xb"
                      label="性别">
                    </el-table-column>
                    <el-table-column
                      prop="djrq"
                      label="登记日期">
                    </el-table-column>
                    <el-table-column
                      prop="ywxm"
                      label="英文姓名">
                    </el-table-column>
                    <el-table-column
                      prop="zjhm"
                      label="证件号码">
                    </el-table-column>
                    <el-table-column
                      prop="xxdz"
                      label="详细地址">
                    </el-table-column>
                    <el-table-column
                      prop="fwcs"
                      label="服务处所">
                    </el-table-column>
                    <el-table-column
                      prop="sf"
                      label="身份">
                    </el-table-column>
                    <el-table-column
                      prop="sspcs_desc"
                      label="所属配出所">
                    </el-table-column>
                    <el-table-column
                      prop="zjzl"
                      label="证件种类">
                    </el-table-column>
                  </el-table>
                  <!--分页操作-->
                  <div class="middle-foot ab" >
                        <div class="page-msg">
                          <div class="">
                        共{{TotalResult1}}条记录
                          </div>
                          <div class="">
                            每页显示
                            <el-select v-model="pageSize1" @change="pageSizeChange1(pageSize1)" placeholder="6" size="mini" class="page-select">
                              <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                            条
                          </div>
                          <div class="">
                          共{{Math.ceil(TotalResult1/pageSize1)}}页
                          </div>
                        </div>
                        <el-pagination
                          background
                          @current-change="handleCurrentChange1"
                          :current-page.sync ="CurrentPage1"
                          :page-size="pageSize1"
                          layout="prev, pager, next"
                          :total="TotalResult1">
                        </el-pagination>
                      </div>
              <!--</el-dialog>-->
             </div>
              </el-collapse-transition>
        </div>
        <!-- 左侧导航查询结束 -->
        <!-- 人信息弹框 -->
        <div class="bghome">
          <el-dialog :title="diatext" :visible.sync="bzhDialogVisible">
            <el-table
                 :data="tableData"
                 style="width: 100%"
                 >
                 <el-table-column
                   label="照片">
                   <template slot-scope="scope">
                     <div v-if="scope.row.zp">
                      <el-popover placement="right" title="" trigger="hover">
                        <img :src="scope.row.zp" style="max-width:700px; max-height:700px;"/>
                        <img slot="reference" :src="scope.row.zp" :alt="scope.row.zp"  width="50" height="50">
                      </el-popover>
                     </div>
                   </template>
                 </el-table-column>
                 <el-table-column
                   prop="sf"
                   label="身份">
                 </el-table-column>
                 <el-table-column
                   prop="fwcs"
                   label="服务处所">
                 </el-table-column>
                 <el-table-column
                   prop="ywxm"
                   label="英文姓名">
                 </el-table-column>
                 <el-table-column
                   prop="zwxm"
                   label="中文姓名">
                 </el-table-column>
                 <el-table-column
                   prop="xb"
                   label="性别" width="60">
                 </el-table-column>
                 <el-table-column
                   prop="csrq"
                   label="出生日期">
                 </el-table-column>
                 <el-table-column
                   prop="djrq"
                   label="登记日期">
                 </el-table-column>
                 <el-table-column
                   prop="gjdq"
                   label="国家地区">
                 </el-table-column>
                 <el-table-column
                   prop="zjzl"
                   label="证件种类">
                 </el-table-column>
                 <el-table-column
                   prop="zjhm"
                   label="证件号码">
                   <template slot-scope="scope">
                    <span style="color:yellow;cursor:pointer" @click="gotos(scope.row.zjhm,scope.row.gjdqdm)">{{scope.row.zjhm}}</span>
                   </template>
                 </el-table-column>
             </el-table>
             <div class="middle-foot mt-10">
                <div class="page-msg">
                  <div class="crrcolor">
                  共{{TotalResult}}条记录
                  </div>
                  <div class="crrcolor">

                    <!-- 每页显示
                    <el-select v-model="pageSize" @change="pageSizeChange(pageSize)" placeholder="10" size="mini" class="page-select">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                    条 -->
                  </div>
                  <div class="crrcolor">
                    <!-- 共{{Math.ceil(TotalResult/pageSize)}}页 -->
                  </div>
                </div>
                <el-pagination
                background
                  @current-change="handleCurrentChange"
                  :current-page.sync ="CurrentPage"
                  :page-size="pageSize"
                  layout="prev, pager, next"
                  :total="TotalResult">
                </el-pagination>
              </div>
            <div slot="footer">
              <img src="../../../../assets/img/qx.png" border="0" @click="bzhDialogVisible = false" style="cursor:pointer" >
            </div>
           <div class="arrow_line" style="left:0px;top:0px; border-bottom-width:0;border-right-width:0"></div>
           <div class="arrow_line" style="right:0px;top:0px; border-bottom-width:0;border-left-width:0"></div>
           <div class="arrow_line" style="left:0px;bottom:0px; border-top-width:0;border-right-width:0"></div>
           <div class="arrow_line" style="right:0px;bottom:0px; border-top-width:0;border-left-width:0"></div>
          </el-dialog>
        </div>
      </div>
</template>
<script scoped>
import {
  ToArray
} from '@/assets/js/ToArray.js'
import {
  createMapL,
  createDWMap
} from '@/assets/js/SuperMap/ffjymap.js'
let ffvm;
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 5,
      TotalResult: 0,
      CurrentPage1: 1,
      pageSize1: 10,
      TotalResult1: 0,
      pd: {},
      pd1:{},
      swdw: [],
      show: true,
      show2:true,
      show1:false,
      bzhshow: false,
      lgshow: false,
      jlsz: 10,
      pcs: [],
      xzqh: [],
      tableData: [],
      datastr: [],
      bzhDialogVisible: false,
      diatext: '标准化地址',
      bzhid: '',
      mc: '',
      lrdw: '',
      iid: '',
      xydata: [],
      cuint: 0,
      // 新添字段
      multipleSelection:[],
      tableData1:[],
      juState:'',
      orgCode:'',
      userCode:'',
      userName:'',    
      token:'',
      getallfj:[],
      PSC:[],
      options:this.pl.ps,
      type:'',
      selectionAll:[],
      selectionReal:[],
      yuid:[],
      loading:false,
      loading1:false,
      }
  },
  mounted() {
    window.ffvm = this;
    //首屏加载调用南京高校列表
    this.getGX();
    //首屏加载默认调用地图
    createMapL();
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.juState=this.$store.state.juState;
    this.orgCode=this.$store.state.orgid;
    this.token=this.$store.state.token;
    this.getLxs();
  },
  activated(){
    if(this.juState=='2'){//分局登录
      this.pd1.FJ = this.orgCode;
      this.getPSC(this.pd1.FJ);
    }
    if(this.juState=='3'){//派出所登录
      this.pd1.FJ = this.$store.state.pcsToju;
      this.getPSC(this.pd1.FJ);
      this.pd1.PCS = this.orgCode;
    }
     this.getFj();
  },
  methods: {
    getLoad(){
      if(this.tableData1.length==0){
        this.loading=true
        console.log('1111111111111111')
      }else{
        this.loading=false
        console.log('111')
      }
    },
   //查询方法
    // getList(currentPage,showCount,pd){
    //   if(this.tableData1!==[]){
    //     this.tableData1=[];
    //     this.TotalResult1=0;
    //   }
    //   let p={
    //    "currentPage":currentPage,
    //    "showCount":showCount,
    //    "SSFJ":this.pd1.FJ,
    //    "pcsList":this.pd1.PCS,
    //    "fwcs":this.pd1.FWCS,
    //    "xxdz":this.pd1.XXDZ,
    //    "sf":"61",
    //    "postType":"ffjy"
    //  }
    //  this.$api.post(this.Global.aport+'/ywczdt/getCZXXRYList',p,
    //      r=>{
    //       // console.log(r.data);
    //       this.tableData1=r.data.resultList;
    //       this.TotalResult1 = r.data.totalResult;
    //     }
    //   )

    // },
   //获得留学生非法就业列表
   getLxs(currentPage, showCount, pd){
    //  this.getLoad();
    if(this.tableData1.length==0){
      this.loading=true
    }
     let p={
       "currentPage":currentPage,
       "showCount":showCount,
       "SSFJ":this.pd1.FJ,
       "pcsList":this.pd1.PCS,
       "fwcs":this.pd1.FWCS,
       "xxdz":this.pd1.XXDZ,
       "sf":"61",
       "postType":"ffjy"
     }
     this.$api.post(this.Global.aport+'/ywczdt/getCZXXRYList',p,
         r=>{
          // console.log(r.data);
          this.tableData1=r.data.resultList;
          this.loading=false
          this.TotalResult1 = r.data.totalResult;
        }
      )
   },
   //获得分局
   getFj(){
      this.$api.post(this.Global.aport5+'/djbhl/getallfj',{userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r =>{
         if(r.success){
           this.getallfj=r.data;
         }
       })
   },
   //根据分局获得派出所
   getPSC(i){
      this.$set(this.pd1,'PCS','');
      this.$api.post(this.Global.aport5+'/djbhl/getpcsbyfjdm',
      {pd
      :{fjdm:i},userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
      r =>{
        if(r.success){
          this.PSC=r.data;
        }
      })
    },
    //导出留学生非法就业列表
    download(){
      console.log('11111111111');
      if(this.tableData1.length==0){
         this.$message.error('无可导出数据！');
         return
      }
      let p={
       "currentPage":1,
       "showCount":10000,
       "SSFJ":this.pd1.FJ,
       "pcsList":this.pd1.PCS,
       "fwcs":this.pd1.FWCS,
       "xxdz":this.pd1.XXDZ,
       "sf":"61",
       "postType":"ffjy"
      }
      this.$api.post(this.Global.aport+'/ywczdt/exportCZXXRYList',p,
        r =>{
            // console.log('222222222222222');
            // console.log('3333333333333333333',r)
            // console.log('777777777777777',r)
            this.downloadM(r,'留学生非法就业报表')
        },e=>{},{},'blob')
    },
    downloadM (data,name) {
        if (!data) {
            return
        }
        // let url = window.URL.createObjectURL(new Blob([data],{type:"application/octet-stream"}))
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
        // let url = window.URL.createObjectURL(new Blob([data]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', name+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },

    // 当用户手动勾选数据行的 Checkbox 时触发的事件
    // selectfn(a,b){
    //   this.multipleSelection = a;
    //   // this.dataSelection()
    // },
    // handleSelectionChange(val) {},
    // dataSelection(){
    //   // console.log('this.multipleSelection',this.multipleSelection)
    //   this.selectionReal.splice(this.CurrentPage1-1,1,this.multipleSelection);
    //   // console.log('this.selectionReal',this.selectionReal);
    //   this.selectionAll=[];
    //   for(var i=0;i<this.selectionReal.length;i++){
    //     if(this.selectionReal[i]){
    //       for(var j=0;j<this.selectionReal[i].length;j++){
    //         this.selectionAll.push(this.selectionReal[i][j])
    //       }
    //     }
    //   }
    //   // console.log('this.selectionAll',this.selectionAll);
    // },
    pageSizeChange(val) {
      this.getRyxx(this.CurrentPage, val, this.bzhid, this.mc, this.lrdw);
    },
    handleCurrentChange(val) {
      this.getRyxx(val, this.pageSize, this.bzhid, this.mc, this.lrdw);
    },
    pageSizeChange1(val) {
      this.pageSize1=val;
      this.getLxs(this.CurrentPage1,this.pageSize1,this.pd1);
      // this.getList(this.CurrentPage1,this.pageSize1,this.pd1)
    },
    handleCurrentChange1(val) {
      this.CurrentPage1=val;
      this.getLxs(this.CurrentPage1,this.pageSize1,this.pd1);
      // this.getList(this.CurrentPage1,this.pageSize1,this.pd1)
    },
    //贴换按钮
    changtab() {
      this.show = !this.show;
    },
    // 右侧贴换按钮
    changtab1() {
      // this.getLoad();
      this.show1 = !this.show1;
    },
    changeTSY(t) {
      if (t == "1") {
        this.lgshow = true;
        this.bzhshow = false;
      } else if (t == "2") {
        this.lgshow = false;
        this.bzhshow = true;
      } else {
        this.lgshow = false;
        this.bzhshow = false;
      }
    },
    getPcs() {
      var url = this.Global.aport1 + this.Global.pcs;
      this.$api.get(url, null,
        r => {
          this.pcs = ToArray(r.data);
        })
    },
    getXzqh() {
      var url = this.Global.aport1 + this.Global.xzqh;
      this.$api.get(url, null,
        r => {
          this.xzqh = ToArray(r.data);
        })
    },
    // doset() {
    //   this.$set(this.pd, "dwlb", '');

    // },
    //获得南京高校列表
    getGX() {
      // this.$api.get(this.Global.aport1 + '/servicemap/getUniversity', null,
      if(this.datastr.length==0){
        this.loading1=true
      }
      let p={
        "token":this.token
      }
      this.$api.get(this.Global.aport + '/ywczdt/getUniversityRenshu', p,
        r => {
          // console.log(r.data);
          this.loading1=false
          this.datastr = r.data;
        });
    },
    getInfo(dm, mc) {

      if (this.jlsz == undefined) {
        this.$message.error("距离设置不能为空！");
        return;
      }
      this.show = !this.show;
      this.iid = mc;
      //左边列表点击
      createDWMap(dm, mc); //dm:学校列表编码
    },
    //得到学校信息
    getxxinfo(dm, callback) {
      let p = {
        "xxbh": dm,
      };
      var url = this.Global.aport + "/zxdt/getXXDZList";
      this.$api.post(url, p,
        r => {
          if (r.success) {
            callback && callback(r.data);
          }
        })

    },
    //后期匹配地址
    getXY1(data,callback) {

      let _this=this;
      let nextfun=function(dz){
        return new Promise(function(resolve,reject){
          var url = _this.Global.xyaddress + "?dz=" + dz;
          let p = {
            "url": url,
          };
          _this.$api.post(_this.Global.aport + "/zxdt/getCtUrl", p,
            r => {
               var arr=[];
               arr.push(r.data.result.ycoord);
               arr.push(r.data.result.xcoord);
               var obj={};
               obj.dm=dz;
               obj.zb=arr;
               resolve(obj);
            });
        });
      }

var srr=[];
for (var i = 0; i < data.length; i++) {
  srr.push(nextfun(data[i].DZXQ))
  // console.log(nextfun(data[i].DZXQ));
}

    callback && callback(srr);

    },
    //得到学校详细地址
    getXXDZ(dm, callback) {
      var searchResult = [];
      let p = {
        "xxdm": dm,
        "xxmc": this.iid,
        "sf":"61",
        "postType":"ffjy"
      };
      this.$api.post(this.Global.aport + '/ywczdt/getFfjlBzhdz', p,
        r => {
          callback && callback(r.data);
        });
    },

    //后期匹配地址
    getXY(data, callback) {
      var url = this.Global.xyaddress + "?dz=" + data;
      let p = {
        "url": url,
      };
      this.$api.post(this.Global.aport + "/zxdt/getCtUrl", p,
        r => {
          callback && callback(r.data.result)
        });
    },
    //人员信息
                                    //详细地址 
    getRyxx(currentPage, showCount, bzhid, mc) {
            //当前页      当前页显示的数量
      if (currentPage == 1) {
        this.tableData = [];
        this.TotalResult = 0;
        this.CurrentPage = 1;
      }
      this.bzhid = bzhid;
      this.mc = mc;

      this.diatext = this.mc;

      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "xxdz": this.bzhid,
        "fwcs": this.iid,
        "sf":"61",
        "postType":"ffjy"
      };
      var url = this.Global.aport + "/ywczdt/getCZDJXXRYList";
      this.$api.post(url, p,
        r => {
          if (r.success) {

            this.tableData = r.data.resultList;
            this.TotalResult = r.data.totalResult;
          }
        });
      this.bzhDialogVisible = true;
    },

    getXY2(data, callback) {
      var url = this.Global.xyaddress + "?dz=" + data.dm;
      let p = {
        "url": url,
      };
      this.$api.post(this.Global.aport + "/zxdt/getCtUrl", p,
        r => {
          callback && callback(r.data.result, data.dm, data.count)
        });
    },
    gotos(zjhms,gjdq){
     let routeData=this.$router.resolve({path:'/Home/RYHX_NX',query:{zjhm:zjhms,gjdq:gjdq}});
     window.open(routeData.href,'_blank')
    },
  },
}
</script>

<style scoped>
.yy-input-text {
  text-align: left !important;
  width: 25% !important;
}

.yy-input-input {
  width: 70% !important;
}

.resultpaneltitle {
  color: #fff;
  background-color: #3992d0;
  text-align: center;
  font-size: 15px;
  margin-right: 10px;
  cursor: pointer;
}

#resultpanel {
  line-height: 25px;
  font-size: 12px;
}

.fflist {
  color: #333333;
  cursor: pointer;
  
}
/*数量样式*/
.fflist .sl{
  display:inline-block;
  float:right;
  margin-right:5px;
  width:40px;
  height:18px;
  /* border-radius:50%;*/
  /* background-color:#3992d0;*/
  line-height:20px;
  font-size:12px;
  text-align:center;
}
/* 弹出框样式 */

/* 查询表单样式 */
.bghome .input-item1{
  margin-bottom:10px;
}
.bghome .input-text1{
      color: #86cdfb!important;
      font-size: 14px;font-weight: lighter;
      border-left: 4px #86cdfb solid;padding-left: 10px;
}
.fflist:hover {
  color: #0E93DA
}

.arrow_line {
  position: absolute;
  width: 10px;
  height: 10px;
  border: 2px solid #06B4FB;
}
.bghome .bghome1{
    background-color: rgba(7,67,124,0.9);
    width:100% !important;
    padding-top:20px;
}
.bhgg{
  width:102.7% !important;
  margin-left:-35px !important;
  margin-bottom:50px !important;
}
.bghome .ab{
    background-color: rgba(7,67,124,0.9) !important;
    margin-top:-15px !important;
    padding-left:20px !important;
    padding-bottom:5px !important;
}
</style>
<style>
.lzxx .my-div-icon {
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
}

.lzxx .cqgreen {
  background: url(../../../../assets/img/tb/location_green.png) no-repeat;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
}

.lzxx .cqred {
  background: url(../../../../assets/img/tb/location_red.png) no-repeat;
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
}

.bghome .el-dialog {
  width: 85% !important;
}
</style>
