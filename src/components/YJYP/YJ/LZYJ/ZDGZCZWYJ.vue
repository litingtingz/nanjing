<template lang="html">
  <!-- 重点出租房屋隐患预警 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
            <!-- <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                <span class="input-text">所属分局：</span>
                <el-select v-model="pd.FJ" filterable clearable @change="getPSC(pd.FJ)" default-first-option placeholder="请选择"  size="small" class="input-input" :disabled="juState=='1'?false:true">
                  <el-option
                    v-for="(item,ind) in getallfj"
                    :key="item.DM"
                    :label="item.DM+' - '+item.MC"
                    :value="item.DM">
                  </el-option>
                </el-select>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                <span class="input-text">派出所：</span>
                <el-select v-model="pd.PCS" filterable clearable @change="getZrq(pd.PCS)" default-first-option placeholder="请选择"  size="small" class="input-input" :disabled="juState=='3'" :no-data-text="pd.FJ==''||pd.FJ==undefined?'请先选择所属分局':'无数据'">
                  <el-option
                    v-for="item in PSC"
                    :key="item.DM"
                    :label="item.DM+' - '+item.MC"
                    :value="item.DM">
                  </el-option>
                </el-select>
            </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">责任区：</span>
                    <el-select v-model="pd.JWZRQ" filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input"
                    :no-data-text="pd.FJ==''||pd.FJ==undefined?'请先选择所属分局':pd.PCS==''||pd.PCS==undefined?'请先选择派出所':'无数据'">
                      <el-option
                        v-for="item in zrq"
                        :key="item.dm"
                        :label="item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col> -->
                <AREA @getArea="getArea" :key="areaKey" :turnData="turnData"></AREA>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">街道名称：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.JLXMC_Like" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">入住时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginZSRQ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endZSRQ" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">预警时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginBJSJ" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间">
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endBJSJ" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>
                <!-- <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">审核状态：</span>

                  <el-select v-model="pd.SHZT" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.shzt"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col> -->
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
          <el-button type="success" size="small"  @click="CurrentPage=1;getList(CurrentPage,pageSize,pd,1)" class="t-mb">查询</el-button>
          <el-button type="primary" size="small"  class="t-ml0" @click="download">导出</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">甄别信息列表</div>
       <!-- <COUNT :ccPd="ccPd" :random="new Date().getTime()" :typeCount="true" :state="'CZW'"></COUNT> -->
       <!-- 简表按钮 -->
       <el-row class="mb-15 float-right">
         <el-button type="primary"  size="small" @click="jbFnc">简表</el-button>
         <el-button type="primary"  size="small" @click="$router.go(-1)">返回</el-button>
       </el-row>
       <!-- 简表按钮 -->
      <el-table
           :data="tableData"
           border
           style="width: 100%"
           ref="multipleTable"
           @select="selectfn"
           @select-all="selectfn"
           @header-click="titleShow">
           <el-table-column
             type="selection"
             width="55">
           </el-table-column>
           
            <!-- 循环生成动态表格 -->
              <template v-for="(lb,i) in lbData">
              <el-table-column
                :key="i"
                :prop="lb.dm"
                :label="lb.cm">
              </el-table-column>
            </template>
           <!-- <el-table-column
             prop="FJ_DESC"
             label="所属分局">
           </el-table-column>
           <el-table-column
             prop="PCS_DESC"
             label="派出所">
           </el-table-column>
           <el-table-column
             prop="JWZRQ"
             label="责任区">
           </el-table-column>
           <el-table-column
             prop="JLXMC"
             label="街道名称">
           </el-table-column>
           <el-table-column
             prop="ZSRQ"
             label="入住时间">
           </el-table-column>
           <el-table-column
             prop="BJSJ"
             label="预警时间">
           </el-table-column> -->

           <!-- <el-table-column
             prop="SHZT"
             label="审核状态">
             <template slot-scope="scope">
                <span>{{scope.row.SHZT=="0"?"已通过":scope.row.SHZT=="1"?"未通过":""}}</span>
              </template>
           </el-table-column> -->
           <!-- <el-table-column
             prop="CLZT_DESC"
             label="处理状态">
           </el-table-column> -->

           <el-table-column
             label="操作" width="70">
             <template slot-scope="scope">
             <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="$router.push({name:'CZFWYHYJ_XQ',query:{type:0,row:scope.row,leiType:'zd'}})"></el-button>
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
          :current-page.sync ="CurrentPage"
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
              dm:'FJ_DESC',
              cm:'所属分局'
            },
            {
              dm:'PCS_DESC',
              cm:'派出所',
            },
            {
              dm:'JWZRQ',
              cm:'责任区'
            },
            {
              dm:'JLXMC',
              cm:'街道名称',
            },
            {
              dm:'ZSRQ',
              cm:'入住时间',
            },
            {
              dm:'BJSJ',
              cm:'预警时间'
            },
            {
              dm:'CLZT_DESC',
              cm:'处理状态',
            },
          ],
          lbData:[],//列表简表动态加载数据====简表选中项
          //简表结束

      getallfj:[],
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd0: {},
      options: this.pl.ps,
      tableData: [],
      zrq: [],
      PSC:[],
      pd:{ZSRQ_DateRange:{dataType:'date'},BJSJ_DateRange:{}},
      multipleSelection:[],
      selectionAll:[],
      yuid:[],
      selectionReal:[],
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
      areaPd:{},
      ccPd:{},
      areaKey:0,
      turnData:{},
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
    if(this.$route.query.row.CLZT){
      this.areaKey=new Date().getTime();
      this.turnData=this.$route.query.row;
      this.pd.CLZT = this.$route.query.row.CLZT
      this.queryPd = this.$route.query.row;
    }
    let _this = this;
    setTimeout(function(){
      _this.getList(_this.CurrentPage, _this.pageSize, _this.pd);
    },1000)
  },
  mounted() {
    if(this.Global.serviceState==0){this.$set(this.pd,'CLZT','CLZT_1')};
    if(this.Global.serviceState==1){this.$set(this.pd,'CLZT','1')};
    this.lbData = this.lbDataAll//页面加载 列表选中项 == 列表总数据源

    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getPcs');
    this.$store.dispatch('getXzqh');
    this.$store.dispatch('getClzt');
    this.$store.dispatch('getShzt');
    this.$store.dispatch('getClzt1');
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
  },

  methods: {
    titleShow(e,el){
      el.target.title = e.label;
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
      this.$api.post(this.Global.aport5+'/djbhl/getpcsbyfjdm',{pd:{fjdm:i}},
      r =>{
        if(r.success){
          this.PSC=r.data;
        }
      })
    },
    getZrq(arr) {
      let p = {
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname,
        "pcsdm":[arr]
      };
      var url = this.Global.aport2 + "/data_report/selectZrqDm";
      this.$api.post(url, p,
        r => {
          this.zrq = r.data.ZRQ;
        })
    },
    selectfn(a,b){
      this.multipleSelection = a;
      this.dataSelection()
    },
    dataSelection(){
      // console.log('this.multipleSelection',this.multipleSelection)
      this.selectionReal.splice(this.CurrentPage-1,1,this.multipleSelection);
      // console.log('this.selectionReal',this.selectionReal);
      this.selectionAll=[];
      for(var i=0;i<this.selectionReal.length;i++){
        if(this.selectionReal[i]){
          for(var j=0;j<this.selectionReal[i].length;j++){
            this.selectionAll.push(this.selectionReal[i][j])
          }
        }
      }
      // console.log('this.selectionAll',this.selectionAll);
    },
    download(){
      if(this.tableData.length==0){
         this.$message.error('无可导出数据！');
         return
      }
      let p={};
      this.pd = Object.assign({},this.pd,this.areaPd);
      if(this.selectionAll.length==0){//全部导出
         p={
          "pd":this.pd,
          "orderBy":'BJSJ',
          "orderType":'DESC',
          userCode:this.userCode,
          userName:this.userName,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token
        }
      }else{//导出选中
        this.yuid=[];
        for(var i in this.selectionAll){
          this.yuid.push(this.selectionAll[i].YJID)
        };
        this.pd.YJID=this.yuid;
         p={
          "pd":this.pd,
          "orderBy":'BJSJ',
          "orderType":'DESC',
          userCode:this.userCode,
          userName:this.userName,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token
        }
      }
      this.$api.post(this.Global.aport4+'/fangWuWarningInfoController/exportByMxLx',p,
        r =>{
          this.downloadM(r);
          this.selectionAll=[];
          this.multipleSelection=[];
          this.getList(this.CurrentPage,this.pageSize,this.pd,1);
        },e=>{},{},'blob')
    },
    downloadM (data) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', '重点关注出租屋报表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
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
      this.ccPd.MXLX="CZW_ZDGZYJ";
      this.ccPd.FJ=this.areaPd.FJ;
      this.ccPd.PCS=this.areaPd.PCS;
    },
    getList(currentPage, showCount, pd,type) {
      
      pd.MXLX='CZW_ZDGZYJ';
      pd.ZSRQ_DateRange.begin=this.pd0.beginZSRQ;
      pd.ZSRQ_DateRange.end=this.pd0.endZSRQ;
      pd.BJSJ_DateRange.begin=this.pd0.beginBJSJ;
      pd.BJSJ_DateRange.end=this.pd0.endBJSJ;
      if(pd.hasOwnProperty('YJID')){
        delete pd['YJID']
      }
      pd = Object.assign({},pd,this.areaPd);
      if(type==1){
        this.selectionAll=[];
        this.multipleSelection=[];
        this.selectionReal=[];
      }
      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };
      this.$api.post(this.Global.aport4+'/api/roomController/listCzw', p,
        r => {
          this.tableData = r.data.dataList;
          this.TotalResult = r.data.totalSize;
          if(this.selectionReal.length==0){//声明一个数组对象
            this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
          }
          this.$nextTick(()=>{
            this.multipleSelection=[]
             // let arr=this.selectionReal[currentPage-1]
             // console.log("arr",arr)
            for(var i=0;i<this.tableData.length;i++){
              for(var j=0;j<this.selectionAll.length;j++){
                if(this.tableData[i].YJID==this.selectionAll[j].YJID){
                  this.$refs.multipleTable.toggleRowSelection(this.tableData[i],true);
                }
              }
            }
          })
        })
    },
  }

}
</script>
<style scoped>

</style>
