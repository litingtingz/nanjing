<template lang="html">
    <!-- 临住境外人员分布分析 -->
      <div class="yymain ">
        <!-- 地图 -->

        <div id="mainMap" class="mapbj lzxx"></div>

        <!-- 查询导航 -->
        <div class="fxleft">
             <div class="fxbnt">
               <el-button  size="mini" type="primary" @click="changtab()" v-if="show" icon="iconfont el-icon-yy-xiangshangjiantou" style="border-radius:0px!important;border-width: 1px 1px 0px 1px"></el-button>
               <el-button  size="mini" type="primary" @click="changtab()" v-else icon="iconfont el-icon-yy-xiangxiajiantou" style="border-radius:0px!important;"></el-button>
             </div>
             <el-collapse-transition>
             <div class="fxcont" v-if="show">
                <el-row :gutter="1">
                  <el-col :span="24">
                      <span class="yy-input-text">所属分局：</span>
                      <el-select v-model="pd.ssfj" @change="getSSPCS(pd.ssfj)" filterable clearable default-first-option  placeholder="请选择"  size="small" class="yy-input-input" :disabled="juState=='1'?false:true">
                        <el-option
                          v-for="(item,ind) in ssfj"
                          :key="ind"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                   </el-col>
                   <el-col :span="24">
                       <span class="yy-input-text">所属派出所：</span>
                       <el-select v-model="pd.sspcs" filterable @change="getZrq(pd.sspcs)" clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input"  :disabled="juState=='3'||juState=='4'" :no-data-text="pd.ssfj==''||pd.ssfj==undefined?'请先选择所属分局':'无数据'">
                         <el-option
                           v-for="(item,ind) in sspcs"
                           :key="ind"
                           :label="item.dm+' - '+item.mc"
                           :value="item.dm">
                         </el-option>
                       </el-select>
                    </el-col>
                    <el-col :span="24">
                        <span class="yy-input-text">责任区：</span>
                        <el-select v-model="pd.zrq" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input" :no-data-text="pd.ssfj==''||pd.ssfj==undefined?'请先选择所属分局':pd.sspcs==''||pd.sspcs==undefined?'请先选择派出所':'无数据'">
                          <el-option
                            v-for="(item,ind) in zrq"
                            :key="ind"
                            :label="item.dm+' - '+item.mc"
                            :value="item.dm">
                          </el-option>
                        </el-select>
                    </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text"><font color=red>*</font> 住宿时间：</span>
                        <el-date-picker class="yy-input-input"
                           v-model="pd.beginTime" format="yyyy-MM-dd"
                           type="date" size="small" value-format="yyyy-MM-dd"
                           placeholder="开始时间">
                        </el-date-picker>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text"></span>
                        <el-date-picker class="yy-input-input"
                            v-model="pd.endTime" format="yyyy-MM-dd"
                            type="date" size="small" value-format="yyyy-MM-dd"
                            placeholder="结束时间">
                        </el-date-picker>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">证件种类：</span>
                      <el-select v-model="pd.zjzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind4) in $store.state.zjzl"
                          :key="ind4"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">签证种类：</span>
                      <el-select v-model="pd.qzzl" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind3) in $store.state.rjqzzl"
                          :key="ind3"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">国家地区：</span>
                      <el-select v-model="pd.gjdq" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind2) in $store.state.gjdq"
                          :key="ind2"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">停留事由：</span>
                      <el-select v-model="pd.tlsy" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option
                          v-for="(item,ind) in $store.state.rjsy"
                          :key="ind"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24">
                      <span class="yy-input-text">投宿于：</span>
                      <el-select v-model="pd.tsj" @change="changeTSY(pd.tsj)" filterable clearable default-first-option placeholder="请选择"  size="small" class="yy-input-input">
                        <el-option label="旅馆" value="2">
                        </el-option>
                        <el-option label="社会面" value="1">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24"  v-show="bzhshow">
                      <span class="yy-input-text" title="标准化地址">标准化地址：</span>
                        <el-input placeholder="请输入内容" size="small" v-model="pd.bzhdz"   class="yy-input-input"></el-input>
                  </el-col>
                  <el-col :span="24"  v-show="lgshow">
                    <el-col :span="24">
                        <span class="yy-input-text">住宿宾馆：</span>
                        <el-select v-model="pd.zsbg" placeholder="请搜索" size="small" class="yy-input-input"  filterable clearable  :filter-method="userFilter">
                        <el-option
                          v-for="item in zsbg"
                          :key="item.dm"
                          :label="item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                    </el-col>
                  </el-col>
                </el-row>
                <el-row type="flex">
                  <el-col :span="24" style="text-align:center;">
                    <el-button type="primary" size="mini" @click="doSearch()">查询</el-button>
                    <el-button type="primary" size="mini" @click="doset()">重置</el-button>
                  </el-col>
                </el-row>
                <el-row type="flex" v-if="ccshow">
                  <el-col :span="24" style="text-align:center;font-size:16px;">
                        统计总数：<span style="color:red">{{count}}</span>
                  </el-col>
                </el-row>

             </div>
            </el-collapse-transition>
        </div>
      <div class="bghome">
        <el-dialog :title="diatext" :visible.sync="lzhDialogVisible">
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
                 prop="rzrq"
                 label="入住日期">
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
            <img src="../../../../assets/img/qx.png" border="0" @click="lzhDialogVisible = false" style="cursor:pointer" >
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
import {ToArray,sortByKey} from '@/assets/js/ToArray.js'
import {formatDate,getServerDate} from '@/assets/js/date.js'
import {createMapL,getSearh} from '@/assets/js/SuperMap/lzmap.js'
let lzvm;
export default {
  data(){
    return{
      CurrentPage: 1,
      pageSize: 5,
      TotalResult: 0,
      allUserList:{},
       pd:{beginTime:'',endTime:''},
       swdw:[],
       show:true,
       bzhshow:false,
       lgshow:false,
       zsbg:[],
       list:[],
       tableData:[],
       ssfj: [],
       sspcs: [],
       zrq:[],
       loading:false,
       lzhDialogVisible:false,
       diatext:'标准化地址',
       bzhid:'',
       mc:'',
       lrdw:'',
       ccshow:false,
       count:0,
       centers:[32.03613281, 118.78211975],
       juState:'',
       userCode:'',
       userName:'',
       orgCode:'',
       orgName:'',
    }
  },
  mounted() {
    window.lzvm=this;
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getRjsy');
    this.$store.dispatch('getZjzl');
    this.$store.dispatch('getRjqzzl');
    this.juState=this.$store.state.juState;
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.pd.beginTime=getServerDate();
    this.pd.endTime=getServerDate();
    this.getFJ();
    if(this.juState=='2'){//分局登录
      // this.pd.ssfj = this.orgCode;
      this.$set(this.pd,'ssfj',this.orgCode);
      this.getSSPCS(this.pd.ssfj);
    }
    if(this.juState=='3'){//派出所登录
      // this.pd.ssfj = this.$store.state.pcsToju;
      this.$set(this.pd,'ssfj',this.$store.state.pcsToju);
      this.getSSPCS(this.pd.ssfj);
      this.$set(this.pd,'sspcs',this.orgCode)
    }
    if(this.juState=='4'){
      this.$set(this.pd,'ssfj',this.$store.state.pcsToju);
      this.getSSPCS(this.pd.ssfj);
      this.$set(this.pd,'sspcs',this.$store.state.zrqTopcs);
      this.getZrq(this.pd.sspcs);
    }
    createMapL();
    this.getUserWhiteList();
  },
  activated(){

  },
  methods:{
    userFilter(query = '') {
             let arr = this.allUserList.filter((item) => {
              if(item.mc!=undefined){
                  return item.mc.includes(query)
               }
             })
             if (arr.length > 50) {
               this.zsbg = arr.slice(0, 50)
             } else {
               this.zsbg= arr
             }
           },
    getUserWhiteList() {
               this.$api.get(this.Global.aport1+this.Global.zsbg, null,
                r => {
                    this.allUserList=ToArray(r.data);
                    this.userFilter();
               });
        },
    pageSizeChange(val) {
      this.getRyxx(this.CurrentPage,val,this.bzhid,this.mc);
    },
    handleCurrentChange(val) {
        this.getRyxx(val,this.pageSize,this.bzhid,this.mc);
    },
    getFJ() {
      let p = {
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname
      };
      this.$api.post(this.Global.aport2 + '/data_report/selectSsfjDm', p,
        r => {
          this.ssfj = sortByKey(r.data.SSFJ,'dm');
          // if(this.$store.state.jb=='2'){
          //    this.pd.ssfj=this.$store.state.orgname;
          // }
        })
    },
    getSSPCS(arr) {
      this.$set(this.pd, "sspcs", '');
      var srr = [];
      srr.push(arr);
      console.log(srr);
      let p = {
        "fjdmList": srr
      }
      this.$api.post(this.Global.aport2 + '/data_report/selectPcsDm', p,
        r => {
          if (r.success) {
            this.sspcs = r.data.PCS;
          }
        })
    },
    getZrq(arr) {
      this.$set(this.pd,"zrq",'');
      let p = {
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname,
        "pcsdm":[arr]
      };
      var url = this.Global.aport2 + "/data_report/selectZrqDm";
      this.$api.post(url, p,
        r => {
          this.zrq =sortByKey(r.data.ZRQ,'dm');
        })
    },
      changtab(){
        this.show=!this.show;
      },
      changeTSY(t){
        if(t=="2"){
          this.lgshow=true;
          this.bzhshow=false;
        }else if(t=="1"){
          this.lgshow=false;
          this.bzhshow=true;
        }else {
          this.lgshow=false;
          this.bzhshow=false;
        }
      },
      getZsbg(){
        var url=this.Global.aport1+this.Global.zsbg;
        this.$api.get(url,null,
        r=>{
          // console.log(ToArray(r.data));
          this.list=ToArray(r.data);
        })
      },
    doset(){
       this.$set(this.pd,"zjzl",'');
       this.$set(this.pd,"qzzl",'');
       this.$set(this.pd,"gjdq",'');
       this.$set(this.pd,"tlsy",'');
       this.$set(this.pd,"ssfj",'');
       this.$set(this.pd, "sspcs", '');
       this.$set(this.pd, "zrq", '');
       this.$set(this.pd,"beginTime",'');
       this.$set(this.pd,"endTime",'');
       this.$set(this.pd,"tsj",'');
       this.$set(this.pd,"bzhdz",'');
       this.$set(this.pd,"zsbg",'');
       this.ccshow=false;
    },
    doSearch() {

      // 以下为查询ES，由于es_lz_lzxx被删除，暂时注释掉。
      // 数据模拟
      // if (this.pd.ssfj == undefined || this.pd.ssfj == "") {
      //   this.$message.error("请选择所属分局!");
      //   return;
      // } else {
      //   var ssj = this.pd.ssfj.substr(0, 6);
      //   switch (ssj) {
      //     case '320116': //六合区
      //       this.centers = [32.39215480155289, 118.81641980133281];
      //       break;
      //     case '320112': //江北新区
      //       this.centers = [32.03613281, 118.78211975];
      //       break;
      //     case '320113': //栖霞区
      //       this.centers = [32.137307901838255, 118.9995913711449];
      //       break;
      //     case '320102': //玄武区
      //       this.centers = [32.062475576087024, 118.8436456413333];
      //       break;
      //     case '320106': //鼓楼区
      //       this.centers = [32.08265178165445, 118.75812113098544];
      //       break;
      //     case '320111': //浦口区
      //       this.centers = [31.943626916199264, 118.35524238617728];
      //       break;
      //     case '320104': //秦淮区
      //       this.centers = [32.01143013679143, 118.81736758064937];
      //       break;
      //     case '320105': //建邺区
      //       this.centers = [32.0275950355325, 118.70538415685343];
      //       break;
      //     case '320114': //雨花台区
      //       this.centers = [31.94205101079558, 118.69497417187063];
      //       break;
      //     case '320115': //江宁区
      //       this.centers = [31.865733721334237, 118.79198266097109];
      //       break;
      //     case '320124 ': //溧水区
      //       this.centers = [31.726803147547287, 119.1224894259463];
      //       break;
      //     case '320125 ': //高淳区
      //       this.centers = [31.3703836314495, 119.19202124153713];
      //       break;
      //     default:
      //
      //   }
      // }
      if(this.pd.beginTime==undefined  && this.pd.endTime==undefined){
        this.$message.error("请输入住宿的开始时间或结束时间!");return ;
      }
      getSearh(this.centers);

    },
    //得到标准化地址
    getBZHDZ(callback){
      var searchResult = [];
      var ssfj="";
      if(this.pd.ssfj!=this.$store.state.orgname){
          if(this.pd.ssfj!=undefined && this.pd.ssfj!=""){
            ssfj=this.pd.ssfj.substr(0,6);
          }
      }else {
           ssfj=this.$store.state.orgid.substr(0,6);
      }
        let p={
          "zjzl":this.pd.zjzl,
          "qzzl":this.pd.qzzl,
          "gjdq":this.pd.gjdq,
          "tlsy":this.pd.tlsy,
          "rzsjStart":formatDate(new Date(this.pd.beginTime),"yyyy/MM/dd"),
          "rzsjEnd":formatDate(new Date(this.pd.endTime),"yyyy/MM/dd"),
          "zsbg":this.pd.zsbg,
          "likeBzhdzMc":this.pd.bzhdz,
          "ssfj":ssfj,
          "pcs": this.pd.sspcs.substr(0, 12),
          "zrq":this.pd.zrq,
          "tsy":this.pd.tsj
        };
        if(this.pd.beginTime==''||this.pd.beginTime==null){
          p.rzsjStart=''
        }
        if(this.pd.endTime==''||this.pd.endTime==null){
          p.rzsjEnd=''
        }
        var url=this.Global.aport+"/zxdt/getLSZSDJXXBZHDZList";
        this.$api.post(url, p,
          r => {
            if (r.success) {
              var arr=r.data;
              for (var i = 0; i < arr.length; i++) {

                if(arr[i].SumList==undefined)
                {
                  searchResult.push(arr[i]);
                }else {
                  this.count=arr[i].SumList;
                  this.ccshow=true;
                }
              }
              if(searchResult.length==0){
                this.ccshow=false;
                this.$message.error("没有查询到数据信息! ");return ;
              }
              callback && callback(searchResult)
            }
          });
          // callback(searchResult);
    },

    //人员信息
    getRyxx(currentPage,showCount,bzhid,mc)
    {
      if(currentPage==1){
        this.CurrentPage=1;
        this.tableData=[];
        this.TotalResult=0;
        this.bzhid=bzhid;
        this.mc=mc;
      }

       this.diatext=this.mc;
       var ssfj="";
       if(this.pd.ssfj!=undefined && this.pd.ssfj!=""){
         ssfj=this.pd.ssfj.substr(0,6);
       }
       let p={
         "currentPage":currentPage,
         "showCount":showCount,
         "bzhdzMc":this.bzhid,
         "zjzl":this.pd.zjzl,
         "qzzl":this.pd.qzzl,
         "gjdq":this.pd.gjdq,
         "tlsy":this.pd.tlsy,
         "rzsjStart":formatDate(new Date(this.pd.beginTime),"yyyy/MM/dd"),
         "rzsjEnd":formatDate(new Date(this.pd.endTime),"yyyy/MM/dd"),
         "zsbg":this.pd.zsbg,
         "ssfj":ssfj,
         "pcs": this.pd.sspcs.substr(0, 12),
         "zrq":this.pd.zrq,
         "tsy":this.pd.tsj

       };
       var url=this.Global.aport+"/zxdt/getLSZSDJXXRYList";
       this.$api.post(url, p,
         r => {
           if (r.success) {
             console.log(r.data);
             this.tableData=r.data.resultList;
             this.TotalResult=r.data.totalResult;
           }
         });
       this.lzhDialogVisible=true;
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
    gotos(zjhms,gjdq){
     let routeData=this.$router.resolve({path:'/Home/RYHX_NX',query:{zjhm:zjhms,gjdq:gjdq}});
     window.open(routeData.href,'_blank')
    },
  },

}
</script>

<style scoped>
.yy-input-text{text-align: left!important; width: 30%!important;}
.yy-input-input{width: 65%!important;}
.arrow_line {
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid #06B4FB;
}
</style>
<style>
.lzxx  .my-div-icon {
        border-radius: 50%;
        line-height:20px;
        text-align: center;
        vertical-align: middle;
        color: #ffffff;
        font-size: 16px;
    }
.lzxx   .lzgreen {
		background:url(../../../../assets/img/tb/location_green.png) no-repeat;font-size:12px; font-weight: bold;
		}

.lzxx		.cz {
			background-color: rgba(155, 0, 0, 0.8);
		}
    .bghome .el-dialog{ width: 70%!important;}
</style>
