<template lang="html">
  <!-- 违临预判预警 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJDQ" filterable clearable multiple collapse-tags default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.gjdq"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">护照号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.HZHM" class="input-input"></el-input>
                </el-col>

                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text" title="签证有效期">签证有效期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginqz" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endqz" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text" title="申请作废原因">申请作废原因：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.SQZFYY" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">申请时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd0.beginsq" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy-MM-dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd0.endsq" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy-MM-dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">核查状态：</span>
                  <el-select v-model="pd.FKZT" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option label="已签收" value="4"></el-option>
                    <el-option label="待处理" value="0"></el-option>
                    <el-option label="同意" value="1"></el-option>
                    <el-option label="不同意" value="2"></el-option>
                    <el-option label="退回" value="3"></el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                  <span class="input-text">处理状态：</span>
                  <el-select v-model="pd.CLZT" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                    <el-option
                      v-for="item in $store.state.swdwclzt"
                      :key="item.dm"
                      :label="item.dm+' - '+item.mc"
                      :value="item.dm">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">上报单位：</span>
                   <el-select v-model="pd.SBDWBH" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" :filter-method="userFilter">
                     <el-option
                       v-for="(item,index) in dwdata"
                       :key="index"
                       :label="item.ZZJGDM+' - '+item.DWZWMC"
                       :value="item.ZZJGDM">
                     </el-option>
                   </el-select>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  class="t-mb" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
          <!-- <el-button type="success" size="small"  class="t-ml0" @click="download">导出</el-button> -->
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">甄别信息列表</div>
        <!-- 简表按钮 -->
        <el-row class="mb-15">
         <el-button type="primary"  size="small" @click="jbFnc" style="float:left;">简表</el-button>
        </el-row>
      <el-table
           :data="tableData"
           border
           ref="multipleTable"
           :highlight-current-row="true"
           style="width: 100%"
           @select="selectfn"
           @header-click="titleShow"
           :row-class-name="tableRowClassName">
           <!-- <el-table-column
             type="selection"
             width="55">
           </el-table-column> -->


            <!-- 循环生成动态表格 -->
            <template v-for="(lb,i) in lbData">
            <el-table-column
              :key="i"
              v-if="lb.zt"
              :prop="lb.dm"
              :label="lb.cm">
            <template slot-scope="scope">
              {{scope.row.FKZT=='0'?'待处理':scope.row.FKZT=='1'?'同意':scope.row.FKZT=='2'?'不同意':scope.row.FKZT=='3'?'退回':'已签收'}}
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
             prop="XM"
             label="姓名">
           </el-table-column>
           <el-table-column
             prop="GJDQ_DESC"
             label="国家地区">
           </el-table-column>
           <el-table-column
             prop="HZHM"
             label="护照号码">
           </el-table-column>
           <el-table-column
             prop="QZYXQ"
             label="签证有效期">
           </el-table-column>
           <el-table-column
             prop="SQZFYY"
             label="申请作废原因">
           </el-table-column>
           <el-table-column
             prop="SBDWMC"
             label="上报单位">
           </el-table-column>
           <el-table-column
             prop="SQSJ"
             label="申请时间">
           </el-table-column>
           <el-table-column
             prop="FKZT"
             label="核查状态">
            <template slot-scope="scope">
              {{scope.row.FKZT=='0'?'待处理':scope.row.FKZT=='1'?'同意':scope.row.FKZT=='2'?'不同意':scope.row.FKZT=='3'?'退回':'已签收'}}
            </template>
           </el-table-column>
           <el-table-column
             prop="CLZT_DESC"
             label="处理状态"> -->
             <!-- <template slot-scope="scope">
               {{scope.row.CLZT=='0'?'已处理':'未处理'}}
             </template> -->
           <!-- </el-table-column> -->

           <el-table-column
             label="操作" width="70">
             <template slot-scope="scope">
               <div>
                  <el-button type="text"  class="a-btn"  title="签收"  icon="el-icon-document-checked" :disabled="scope.row.FKZT!='0'" @click="sign(scope.row)"></el-button>
                  <el-button type="text"  class="a-btn"  title="处理"  icon="el-icon-edit" @click="stateId=scope.row.DTID;$router.push({name:'JLXK_XQ',query:{hiType:'jlxk',row:scope.row}})"></el-button>
               </div>
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
// import {format} from '@/assets/js/date.js'
import Trans from "@/components/common/Transfer.vue"
export default {
  components:{Trans},
  data() {
    return {

      //简表开始
      timer:'',
      jbDialogVisible:false,
      pointData:[],//选中项
      lbDataAll:[//列表总数据===简表数据源
        {
          dm:'XM',
          cm:'姓名',
        },
        {
          dm:'GJDQ_DESC',
          cm:'国家地区',
        },
        {
          dm:'HZHM',
          cm:'护照号码'
        },
        {
          dm:'QZYXQ',
          cm:'签证有效期'
        },
        {
          dm:'SQZFYY',
          cm:'申请作废原因',
        },
        {
          dm:'SBDWMC',
          cm:'上报单位'
        },
        {
          dm:'SQSJ',
          cm:'申请时间'
        },
        {
          dm:'FKZT',
          cm:'核查状态',
          zt:true
        },
        {
          dm:'CLZT_DESC',
          cm:'处理状态',
        },
      ],
      lbData:[],//列表简表动态加载数据====简表选中项
      //简表结束
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {QZYXQ_DateRange:{},SQSJ_DateRange:{}},
      pd0:{},
      options: this.pl.ps,
      tableData: [],
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      juState:'',
      token:'',
      multipleSelection:[],
      selectionAll:[],
      yuid:[],
      selectionReal:[],
      dwdata:[],
      dwList:{},
      stateId:'',
    }
  },

  activated(){
      let _this = this;
      setTimeout(function(){
        _this.getList(_this.CurrentPage, _this.pageSize, _this.pd);
      },1000)
  },
  mounted() {
    this.lbData = this.lbDataAll//页面加载 列表选中项 == 列表总数据源
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getClzt');
    this.$store.dispatch('getZjzl');
    this.$store.dispatch('getXB');
    this.$store.dispatch('getRjqzzl');
    this.$store.dispatch('getLgyj');
    this.$store.dispatch('getGljb');
    this.$store.dispatch('getSwcl');
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgCode=this.$store.state.orgid;
    this.orgName=this.$store.state.orgname;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    this.getDw();
  },
  methods: {
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
    tableRowClassName({row, rowIndex}){
      // console.log(row,row.DTID,this.stateId);
      if(row.DTID == this.stateId){
        return 'bac-yel'
      }
    },
    titleShow(e,el){
      el.target.title = e.label;
    },
    sign(val){
      let pcl={
        pd:{
          DTID:val.DTID,
          FKZT:'4',
          hcztType:'qs',
          HCCLRDW:this.$store.state.orgname,
          HCCLR:this.$store.state.uname,
        },
        userCode:this.userCode,
        userName:this.userName,
        orgCode:this.orgCode,
        orgJB:this.juState,
        token:this.token,
      }
      let url='/JLXKXBZFWarningInfoController/saveCLJG';
      this.$api.post(this.Global.aport4+url,pcl,
       r => {
          if(r.success){
            this.$message({
              message: '反馈成功',
              type: 'success'
            });
            this.getList(this.CurrentPage, this.pageSize, this.pd);
          }
        })
    },
    getDw(){
      this.$api.post(this.Global.aport4+'/SWDW_SJSBController/getAllDW',{},
        r =>{
          if(r.success){
            this.dwList = r.data.resultList;
            this.userFilter();
          }
        })
    },
    userFilter(query = '') {
             let arr = this.dwList.filter((item) => {
              if(item.DWZWMC!=undefined){
                  return item.DWZWMC.includes(query)
               }
             })
             if (arr.length > 50) {
               this.dwdata = arr.slice(0, 50)
             } else {
               this.dwdata= arr
             }
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
      let p={};
      if(this.selectionAll.length==0){//全部导出
         p={
          "pd":this.pd,
          'orderby':{value:'SBSJ',datatype:'date'},
          "orderType":'DESC',
          userCode:this.userCode,
          userName:this.userName,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token,
        }
      }else{//导出选中
        this.yuid=[];
        for(var i in this.selectionAll){
          this.yuid.push(this.selectionAll[i].YJID)
        };
        this.pd.YJID=this.yuid;
         p={
          "pd":this.pd,
          'orderby':{value:'SBSJ',datatype:'date'},
          "orderType":'DESC',
          userCode:this.userCode,
          userName:this.userName,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token,
        }
      }
      this.$api.post(this.Global.aport4+'/warningInfoController/exportByMxLx',p,
        r =>{
          this.downloadM(r)
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
        link.setAttribute('download', '违临预判报表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
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
    getList(currentPage, showCount, pd) {
      if(pd.hasOwnProperty('YJID')){
        delete pd['YJID']
      }
      console.log(this.stateId);
      this.pd.QZYXQ_DateRange.begin=this.pd0.beginqz;
      this.pd.QZYXQ_DateRange.end=this.pd0.endqz;
      this.pd.SQSJ_DateRange.begin=this.pd0.beginsq;
      this.pd.SQSJ_DateRange.end=this.pd0.endsq;

      let p = {
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        'orderBy':{value:'SBSJ',dataType:'date'},
        "orderType":'DESC',
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      };
      this.$api.post(this.Global.aport4+'/JLXKXBZFWarningInfoController/getInfoList', p,
        r => {
          if(r.success){
            this.tableData = r.data.resultList;
            this.TotalResult = r.data.totalResult;
            if(this.selectionReal.length==0){//声明一个数组对象
              this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
            }
            this.$nextTick(()=>{
              this.multipleSelection=[]
              for(var i=0;i<this.tableData.length;i++){
                for(var j=0;j<this.selectionAll.length;j++){
                  if(this.tableData[i].YJID==this.selectionAll[j].YJID){
                    this.$refs.multipleTable.toggleRowSelection(this.tableData[i],true);
                  }
                }
              }
            })
          }
        })
    },
  }
}
</script>
<style>

</style>
