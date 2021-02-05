<template lang="html">
    <!-- 出入境记录核查 -->
  <div class="yymain tshu">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="19" class="br pr-20">
          <el-row align="center" :gutter="1">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">住宿日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.ZSRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyy/MM/dd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.ZSRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyy/MM/dd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                  <span class="input-text">报警时间：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.BJSJ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.BJSJ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间" >
                    </el-date-picker>
                 </div>
                </el-col>
                <AREAFP @getArea="getArea" ></AREAFP>
         </el-row>
         </el-col>
         <el-col :span="5">
           <el-button type="success" size="small" @click="getList(pd,deepCli,1)" class="mb-15 tt-mr10">查询</el-button>
           <el-button type="info" size="small" @click="goBack" class="mb-15 tt-mr10">返回</el-button>
           <el-button type="warning" size="small" @click="download(pd,deepCli)" class="mb-15">导出</el-button>
         </el-col>
        </el-row>
    </div>
    <div class="yycontent">
          <el-table
           ref="multipleTable"
           :data="tableData"
           border
           style="width: 100%"
           @selection-change="handleSelectionChange"
           @header-click="titleShow">
           <el-table-column
             prop="dwmc"
             label="单位">
             <template slot-scope="scope">
               <span class="sb" @click="getList(pd,scope.row)" v-if="scope.row.level!='2'">{{scope.row.dwmc}}</span>
               <span v-if="scope.row.level=='2'">{{scope.row.dwmc}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="wclTotal"
             label="未处理">
             <template slot-scope="scope">
               <span class="sb" @click="toLink (pd,scope.row,'1')">{{scope.row.wclTotal}}</span>
             </template>
           </el-table-column>
           <el-table-column
             prop="clTotal"
             label="已处理">
             <div slot-scope="scope">
               <span class="sb" @click="toLink (pd,scope.row,'0')" >{{scope.row.clTotal}}</span>
             </div>
           </el-table-column>
         </el-table>
    </div>
  </div>
</template>
<script>
import {ToArray} from '@/assets/js/ToArray.js'
import AREAFP from '../../../common/areafp'
export default {
  components:{AREAFP},
  data() {
    return {
      pd: {
        ZSRQ_DateRange:{
          dataType:'date',
          begin:'',
          end:''
        },
        BJSJ_DateRange:{
          begin:'',
          end:'',
        },
      },
      areaPd:{},
      deepCli:{
        level:'',
        dwbm:'',
      },
      form:{},
      nation:[],
      tableData:[],
      eidtsDialogVisible:false,
      tableData: [],
      levelSave:'',
      dwSave:'',
      typeSave:'',
      listSave:[],
      levelKon:{
        level:'',
        dwbm:'',
      },
      levelOne:{
        level:'',
        dwbm:'',
      },
      levelTwo:{
        level:'',
        dwbm:'',
      },
      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',
    }
  },
  activated(){
    this.getList(this.pd,this.deepCli,1);
  },
  mounted() {
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    if(this.juState=='2'||this.juState=='1'){this.levelSave=''}
    if(this.juState=='3'){this.levelSave='1'}
    this.getList(this.pd,this.deepCli,1);
    this.$store.dispatch('getZsbg');
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    titleShow(e,el){
      el.target.title = e.label;
    },
    getArea(val){
      this.areaPd = val;
    },
    getList(pd,deepCli,type) {
      let p={};
      pd = Object.assign({},pd,this.areaPd);
      if(type==1){//点击查询按钮查询当前
        // if(this.levelSave=='2'){deepCli = this.levelTwo};
        if(this.levelSave=='1'){deepCli = this.levelOne;p.groupList=['PCS']};
        if(this.levelSave==''){deepCli = this.levelKon;p.groupList=['SSFJ']};
        deepCli.level = this.levelSave;
         p = {
          pd:pd,
          userCode:this.$store.state.uid,
          userName:this.$store.state.uname,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token,
        };
        p.pd.level=deepCli.level+'';
        p.pd.SSFJ=deepCli.dwbm;
        p.pd.MXLX='CZW_ZDCZWYJ'
      }else{//点击列表嵌入
         p = {
          pd:pd,
          userCode:this.$store.state.uid,
          userName:this.$store.state.uname,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token
        };
        p.pd.level=deepCli.level+'';
        p.pd.SSFJ=deepCli.dwbm?deepCli.dwbm:'';
        p.pd.MXLX='CZW_ZDCZWYJ'
        this.levelSave = deepCli.level+'';
      }
      // if(this.levelSave=='2'){this.levelTwo.dwbm = deepCli.dwbm;this.levelTwo.list = deepCli.hjList;this.levelTwo.type = deepCli.type;this.levelTwo.level = deepCli.level;};
      if(this.levelSave=='1'){this.levelOne.dwbm = deepCli.dwbm;this.levelOne.level = deepCli.level+'';p.groupList=['PCS']};
      if(this.levelSave==''){this.levelKon.dwbm = deepCli.dwbm;this.levelKon.level = deepCli.level+'';p.groupList=['SSFJ']};
      var url=this.Global.aport4+'/api/roomController/aggRoomInfo';
      this.$api.post(url, p,
        r => {
          if(r.success){
            this.tableData = r.data;
          }
        })
    },
    goBack(){
      if(this.levelSave=='2'){
        this.deepCli.level='1';
        this.getList(this.pd,this.levelOne)
      }else if(this.levelSave=='1'){
        if(this.juState=='3'){
          this.deepCli.level='1';
          return
        }
        this.deepCli.level='';
        this.getList(this.pd,this.levelKon)
      }
      this.levelSave = this.deepCli.level+'';
    },
    toLink(pd,deepCli,type){
        let p={
          CLZT:type,
        }
        if(deepCli.level=='1'){
          p.FJ=deepCli.dwbm
          if(deepCli.dwmc=='合计'){
            p.FJ=''
          }
          this.$router.push({name:'ZDCZWYJ',query:{row:p}});
        }else if(deepCli.level=='2'){
          p.PCS=deepCli.dwbm
          if(deepCli.ssfj){
            p.FJ=deepCli.ssfj
            this.$router.push({name:'ZDCZWYJ',query:{row:p}});
          }else if(deepCli.dwmc=='合计'){
            p.PCS='';
            p.FJ='';
            this.$router.push({name:'ZDCZWYJ',query:{row:p}});
          }else{
            let data={
              currentPage: 1,
              showCount: 10,
              pd: { DM: deepCli.dwbm }
            }
            this.$api.post(this.Global.aport4 + "/LRDWController/getAllParentByChildDW",data,r=>{
              if(r.success){
                p.FJ = r.data.FJDM
                this.$router.push({name:'ZDCZWYJ',query:{row:p}});
              }
            })
          }
        }
    },
    download(pd,deepCli){
      // if(this.levelSave=='2'){deepCli = this.levelTwo};
      let p={};
      pd = Object.assign({},pd,this.areaPd);
      if(this.levelSave=='1'){deepCli = this.levelOne;p.groupList=['PCS']};
      if(this.levelSave==''){deepCli = this.levelKon;p.groupList=['PCS']};
      p = {
        userCode:this.$store.state.uid,
        userName:this.$store.state.uname,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };
      p.pd.level=deepCli.level+'';
      p.pd.SSFJ=deepCli.dwbm;
      this.$api.post(this.Global.aport4+'/api/roomController/exportAggRoomInfo',p,
        r =>{
          this.downloadM(r,'重点出租屋预警统计列表');
        },e=>{},{},'blob')
    },
    downloadM (data,name) {
        if (!data) {
            return
        }
        let url = window.URL.createObjectURL(new Blob([data],{type:"application/xls"}))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', name+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },

  }
}
</script>

<style scoped>
.sb{color: blue}
.sb:hover{color: red}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
  /* background: url(../../../assets/img/t1.png); */
  background-size: 100% 100%;
  }

  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  .block{padding-top: 5px;}
  .crcolor{background: #EFF3F6;}
  .yy-input-text{text-align:left!important;}
</style>
