<template lang="html">
  <!-- 重点国家境外人员临住预警 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">预警时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginBJSJ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endBJSJ" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJ" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.gjdq"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="input-input"></el-input>
                </el-col>
                <!-- <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">所属分局：</span>
                    <el-select v-model="pd.FJ" @change="getPSC(pd.FJ)" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" :disabled="juState=='1'?false:true">
                      <el-option
                        v-for="item in getallfj"
                        :key="item.DM"
                        :label="item.DM+' - '+item.MC"
                        :value="item.DM">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text" title="所属派出所">所属派出所：</span>
                    <el-select v-model="pd.PCS" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" :disabled="juState=='3'" :no-data-text="pd.FJ==''||pd.FJ==undefined?'请先选择所属分局':'无数据'">
                      <el-option
                        v-for="item in PSC"
                        :key="item.DM"
                        :label="item.MC"
                        :value="item.DM">
                      </el-option>
                    </el-select>
                </el-col> -->
                <AREA @getArea="getArea"></AREA>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">处理状态：</span>
                    <el-select v-model="pd.CLZT" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.clzt1"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">甄别信息列表</div>
       <COUNT :ccPd="ccPd" :random="new Date().getTime()" :typeCount="true"></COUNT>
        <!-- 简表按钮 -->
       <el-row class="mb-15">
         <el-button type="primary"  size="small" @click="jbFnc" style="float:right;margin-top:-35px">简表</el-button>
       </el-row>
       <!-- 简表按钮 -->
      <el-table
           :data="tableData"
           border
           style="width: 100%"
           @header-click="titleShow">


          <!-- 循环生成动态表格 -->
            <template v-for="(lb,i) in lbData">
            <el-table-column
              :key="i"
              v-if="lb.xm"
              :prop="lb.dm"
              :label="lb.cm">
             <template slot-scope="scope">
                <span>{{getXM(scope.row.ZWXM,scope.row.YWXM)}}</span>
             </template>
            </el-table-column>
            <el-table-column
              :key="i"
              v-else
              :prop="lb.dm"
              :label="lb.cm">
            </el-table-column>
          </template>

           <!-- <el-table-column
             prop="ZWXM"
             label="姓名">
             <template slot-scope="scope">
                <span>{{getXM(scope.row.ZWXM,scope.row.YWXM)}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="XB_DESC"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="GJDQ_DESC"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="ZJZL_DESC"
             label="证件种类">
           </el-table-column>
           <el-table-column
             prop="ZJHM"
             label="证件号码">
           </el-table-column>
           <el-table-column
             prop="QZZL_DESC"
             label="签证种类">
           </el-table-column>
           <el-table-column
             prop="QZHM"
             label="签证号码">
           </el-table-column>
           <el-table-column
             prop="BJSJ"
             label="预警时间">
           </el-table-column>
           <el-table-column
             prop="CLZT_DESC"
             label="处理状态">
           </el-table-column> -->
           <el-table-column
             label="操作" width="70">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'GJYWWYLZYJ_LB',query:{type:1,row:scope.row}})"></el-button>
             </template>
           </el-table-column>
         </el-table>
     <div class="middle-foot">
        <div class="page-msg">
          <div class="">
        共{{TotalResult}}条记录
          </div>
          <div class="">
            每页显示
            <el-select v-model="pageSize" @change="pageSizeChange(pageSize)" placeholder="10" size="mini" class="page-select">
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
            共{{Math.ceil(TotalResult/pageSize)}}页
          </div>
        </div>
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :current-page:sync="CurrentPage"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="TotalResult">
        </el-pagination>
      </div>
    </div>
    <!--===================简表开始======================-->
    <el-dialog title="简表" :visible.sync="jbDialogVisible" width="1000px">
      <Trans
        :key="timer"
        :transData="lbDataAll"
        :pointData="pointData"
        @transSave="transSave"
        @dialogCancel="jbDialogVisible=false"></Trans>
    </el-dialog>
    <!--===================简表结束======================-->
  </div>
</template>
<script>
import AREA from '../../../common/area'
import COUNT from '../../../common/CLZTCount'
import Trans from "@/components/common/Transfer.vue"
export default {
  components:{AREA,COUNT,Trans},
  data() {
    return {
          //简表开始
          timer:'',
          jbDialogVisible:false,
          pointData:[],//选中项
          lbDataAll:[//列表总数据===简表数据源
            {
              dm:'ZWXM',
              cm:'姓名',
              xm:true
            },
            {
              dm:'XB_DESC',
              cm:'性别',
            },
            {
              dm:'GJDQ_DESC',
              cm:'国家地区',
            },
            {
              dm:'ZJZL_DESC',
              cm:'证件种类',
            },
            {
              dm:'ZJHM',
              cm:'证件号码',
            },
            {
              dm:'QZZL_DESC',
              cm:'签证种类',
            },
            {
              dm:'QZHM',
              cm:'签证号码',
            },
            {
              dm:'BJSJ',
              cm:'预警时间',
            },
            {
              dm:'CLZT_DESC',
              cm:'处理状态',
            },
          ],
          lbData:[],//列表简表动态加载数据====简表选中项
          //简表结束
      areaPd:{},
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {BJSJ_DateRange:{begin:'',end:''}},
      options: this.pl.ps,
      tableData: [],
      pd0:{},

      getallfj:[],
      PSC:[],

      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
      ccPd:{},
    }
  },
  activated(){
    if(this.juState=='2'){//分局登录
      this.pd.FJ = this.orgCode;
      this.getPSC(this.pd.FJ);
    }
    if(this.juState=='3'){//派出所登录
      this.pd.FJ = this.$store.state.pcsToju;
      this.getPSC(this.pd.FJ);
      this.pd.PCS = this.orgCode;
    }
    let _this = this;
    setTimeout(function(){
      _this.getList(_this.CurrentPage, _this.pageSize, _this.pd);
    },1000)
  },
  mounted() {
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getClzt1');
    this.lbData = this.lbDataAll//页面加载 列表选中项 == 列表总数据源
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    if(this.Global.serviceState==1){this.$set(this.pd,'CLZT','1')};
    this.getList(this.CurrentPage, this.pageSize, this.pd);
    this.getFj();
  },
  methods: {
    titleShow(e,el){
      el.target.title = e.label;
    },
    getFj(){
      this.$api.post(this.Global.aport5+'/djbhl/getallfj',{userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r =>{
         if(r.success){
           this.getallfj=r.data;
         }
       })
    },
    //=================================================简表开始=====================
    jbFnc(){
      this.timer = new Date().getTime();
      this.jbDialogVisible = true
    },
    transSave(data){
      this.pointData = [];
      if(data.length == 0){
        this.lbData = this.lbDataAll
      }else{
        this.lbDataAll.forEach(item =>{
          data.forEach(jtem => {
            if(item.dm == jtem){
              this.pointData.push(item)
            }
          })
        })
        this.lbData = this.pointData;
      }
      this.jbDialogVisible = false;
    },
    //=================================================简表结束=====================
    getPSC(i){
      this.$set(this.pd,'PCS','');
      this.$api.post(this.Global.aport5+'/djbhl/getpcsbyfjdm',{pd:{fjdm:i},userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
      r =>{
        if(r.success){
          this.PSC=r.data;
        }
      })
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    getArea(val){
      this.areaPd = val;
    },
    getList(currentPage, showCount, pd) {
      this.ccPd.MXLX="LZ_ZDGJRYYJ";
      this.ccPd.FJ=this.areaPd.FJ;
      this.ccPd.PCS=this.areaPd.PCS;
      this.pd.MXLX='LZ_ZDGJRYYJ';
      this.pd.BJSJ_DateRange.begin=this.pd0.beginBJSJ;
      this.pd.BJSJ_DateRange.end=this.pd0.endBJSJ;
      pd = Object.assign({},pd,this.areaPd);
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd
      };
      this.$api.post(this.Global.aport4+'/warningInfoController/getInfoListByMxLx1', p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
    getXM(zw,yw){
        if(zw!=undefined && yw!=undefined){
          return yw+"("+zw+")";
        }else {
          if(zw!=undefined){
            return zw;
          }
          if(yw!=undefined){
            return yw;
           }
          }
    },
  }
}
</script>
<style scoped>

</style>
