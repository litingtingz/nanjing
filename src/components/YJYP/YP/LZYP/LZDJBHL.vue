<template lang="html">
  <!-- 临住登记变化量 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">录入日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.LRRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.LRRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">住宿日期：</span>
                  <div class="input-input t-flex t-date">
                    <el-date-picker
                       v-model="pd.ZSRQ_DateRange.begin" format="yyyy-MM-dd"
                       type="date" size="small" value-format="yyyyMMdd"
                       placeholder="开始时间" >
                    </el-date-picker>
                    <span class="septum">-</span>
                    <el-date-picker
                        v-model="pd.ZSRQ_DateRange.end" format="yyyy-MM-dd"
                        type="date" size="small" value-format="yyyyMMdd"
                        placeholder="结束时间">
                    </el-date-picker>
                 </div>
                </el-col>
                <el-col :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">证件种类：</span>
                    <el-select v-model="pd.ZJZL" multiple  :multiple-limit="5"   collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.zjzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">签证种类：</span>
                    <el-select v-model="pd.QZZL" multiple :multiple-limit="5"   collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.rjqzzl"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJDQ" multiple :multiple-limit="5"   collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.gjdq"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">停留事由：</span>
                    <el-select v-model="pd.JLSY" multiple :multiple-limit="5"  collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.rjsy"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <!-- <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">投宿于：</span>
                    <el-select v-model="pd.LB_DJDW" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="1" label="1 - 旅馆">
                      </el-option>
                      <el-option value="0" label="0 - 派出所">
                      </el-option>
                      <el-option value="2" label="2 - 其他">
                      </el-option>
                    </el-select>
                </el-col> -->
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">所属分局：</span>
                    <div class="input-input t-fuzzy-12 t-flex">
                      <el-select v-model="pd.LRDW_Like" multiple :multiple-limit="5" @change="getFJ()"  collapse-tags  filterable clearable default-first-option placeholder="请选择"  size="small" :disabled="juState=='1'?false:true">
                        <el-option
                          v-for="item in fjlist"
                          :key="item.dm"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>&nbsp;&nbsp;
                      <el-checkbox v-model="checkedfj"  @change="getRadiofj(checkedfj)">包含</el-checkbox>
                    </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">派出所：</span>
                    <div class="input-input t-fuzzy-12 t-flex">
                      <el-select v-model="pd.LRDW" multiple :multiple-limit="5" @change="getZrq(pd.LRDW)" @visible-change="getPCS(pd.LRDW_Like)" collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" :disabled="juState=='3'||juState=='4'" :no-data-text="pd.LRDW_Like==''||pd.LRDW_Like==undefined?'请先选择所属分局':'无数据'">
                        <el-option
                          v-for="(item,ind) in pcslist"
                          :key="ind"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>&nbsp;&nbsp;
                      <el-checkbox v-model="checkedpcs"  @change="getRadiopcs(checkedpcs)">包含</el-checkbox>
                    </div>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">责任区：</span>
                    <el-select v-model="pd.SSZRQ" multiple :multiple-limit="5" collapse-tags filterable clearable  default-first-option placeholder="请选择"  size="small" class="input-input"
                    :no-data-text="pd.LRDW_Like==''||pd.LRDW_Like==undefined?'请先选择所属分局':pd.LRDW==''||pd.LRDW==undefined?'请先选择派出所':'无数据'">
                      <el-option
                        v-for="item in zrq"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">旅馆名称：</span>
                    <el-select v-model="pd.DJDWDM" multiple :multiple-limit="5"  collapse-tags filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.zsbg"
                        :key="item.dm"
                        :label="item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                    <span class="input-text">日期选择：</span>
                    <el-select v-model="pd.ZSLX" filterable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option value="0" label="0 - 请选择">
                      </el-option>
                      <el-option value="1" label="1 - 按日查询">
                      </el-option>
                      <el-option value="2" label="2 - 按月查询">
                      </el-option>
                      <el-option value="3" label="3 - 按季度查询">
                      </el-option>
                      <el-option value="4" label="4 - 按年查询">
                      </el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="12"  class="input-item">
                  <span class="input-text">快速预览：</span>
                  <div class="alone-flex">
                    <el-button type="primary" size="mini" @click="pd.TYPE='YN';page=0;tableData=[];CurrentPage=1;TotalResult=0;getList()">年</el-button>
                    <el-button type="primary" size="mini" @click="pd.TYPE='BN';page=0;tableData=[];CurrentPage=1;TotalResult=0;getList()">半年</el-button>
                    <el-button type="primary" size="mini" @click="pd.TYPE='JD';page=0;tableData=[];CurrentPage=1;TotalResult=0;getList()">季度</el-button>
                    <el-button type="primary" size="mini" @click="pd.TYPE='YF';page=0;tableData=[];CurrentPage=1;TotalResult=0;getList()">月</el-button>
                  </div>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  class="t-mb" @click="QueryFnc">查询</el-button>
          <!-- <el-button type="primary" size="small"  class="t-ml0" @click="download">导出</el-button> -->
        </el-col>
      </el-row>
    </div>

    <div class="yycontent t-ml0">
      <div class="ak-tabs">
        <div class="ak-tab-item hand" :class="{'ak-checked':page==0}" @click="page=0;getList()">
          图表
        </div>
        <div class="ak-tab-item hand" :class="{'ak-checked':page==1}" @click="page=1">
          列表
        </div>
      </div>
      <div class="ak-tab-pane">
        <div v-show="page==0">
          <el-row>
            <el-col :xl="12" :lg="12">
              <p class="chart-title mb-10">同比/环比</p>
              <div class="chart-outer ml-10">
                <div>
                  <div class="chart-outer-label">分析维度</div>
                  <el-select class="chart-select" v-model="analyArr.type_1" @change="analyFun(1)" placeholder="请选择" size="medium">
                    <el-option v-for="(item,ind) in analysis_3" :key="ind" :label="item.mc" :value="item.dm"></el-option>
                  </el-select>
                </div>
                <div style="margin-right: 70px;">
                  <div class="chart-compare">同比：<span>{{InObj.y2y}}</span><i :class="InObj.y2y.includes('-')?'el-icon-bottom compare-icon icon-red':'el-icon-top compare-icon icon-green'"></i></div>
                  <div class="chart-compare">环比：<span>{{InObj.m2m}}</span><i :class="InObj.m2m.includes('-')?'el-icon-bottom compare-icon icon-red':'el-icon-top compare-icon icon-green'"></i></div>
                </div>
              </div>
              <div class = "chart" style="width:100%">
                <div id = "echartsqr" style = "width: 100%;height: 250px"></div>
              </div>
            </el-col>
            <!-- <el-col :xl="8" :lg="8">
              <p class="chart-title mb-10">迁出量</p>
              <div class="chart-outer ml-10">
                <div>
                  <div class="chart-outer-label">分析维度</div>
                  <el-select class="chart-select" v-model="analyArr.type_2" @change="analyFun(2)" placeholder="请选择" size="medium">
                    <el-option v-for="(item,ind) in analysis_3" :key="ind" :label="item.mc" :value="item.dm"></el-option>
                  </el-select>
                </div>
                <div style="margin-right: 70px;">
                  <div class="chart-compare">同比：<span>{{OutObj.y2y}}</span><i :class="OutObj.y2y.includes('-')?'el-icon-bottom compare-icon icon-red':'el-icon-top compare-icon icon-green'"></i></div>
                  <div class="chart-compare">环比：<span>{{OutObj.m2m}}</span><i :class="OutObj.m2m.includes('-')?'el-icon-bottom compare-icon icon-red':'el-icon-top compare-icon icon-green'"></i></div>
                </div>
              </div>
              <div class = "chart" style="width:100%">
                <div id = "echartsqc" style = "width: 100%;height: 250px"></div>
              </div>
            </el-col> -->
            <el-col :xl="12" :lg="12">
              <p class="chart-title mb-10">前五国家/地区</p>
              <!-- <div class="chart-outer ml-10">
                <div class="chart-outer-label">分析维度</div>
                <el-select class="chart-select" v-model="analyArr.type_3" @change="analyFun(3)" placeholder="请选择" size="medium">
                  <el-option v-for="(item,ind) in analysis_3" :key="ind" :label="item.mc" :value="item.dm"></el-option>
                </el-select>
              </div> -->
              <div class = "chart" style="width:100%">
                <div id = "echartsTop" style = "width: 100%;height: 250px"></div>
              </div>
            </el-col>
            <el-col :xl="24" :lg="24">
              <p class="chart-title mb-10">{{pageC==true?'变化趋势分析图':'变化趋势列表信息'}}</p>
              <div class="">
                <span class="t-fr">
                  <i class="iconbtn hand" :class="{'el-icon-open':numChange==true,'el-icon-turn-off':numChange==false}" :title="numChange==true?'关闭数字':'展示数字'" @click="numChange=!numChange;getList()" v-show="page==0&&pageC==true"></i>
                  <i class="iconbtn hand" :class="{'el-icon-s-grid':pageC==true,'el-icon-s-data':pageC==false}" :title="pageC==true?'转为列表':'转为图表'" @click="changeTu()" v-show="page==0"></i>
                </span>
                <el-button type="primary" size="small"  @click="downloadC()" v-show="pageC==false&&page==0">导出</el-button>
                <div style="clear:both"></div>
              </div>
              <div class = "chart" style="width:100%" v-show="pageC==true">
                <div id = "echarts" style = "width: 100%;height: 350px"></div>
              </div>
            </el-col>
          </el-row>
          
          <div v-show="pageC==false" class="t-mt10">
            <el-table
               :data="tableDataC"
               border
               style="width: 100%"
               @header-click="titleShow">
               <el-table-column
                 prop="rq"
                 label="日期">
               </el-table-column>
               <el-table-column
                   v-for="(val,i) in tableHeader"
                   :key="i"
                   :prop="val.code"
                   :label="val.lable">
               </el-table-column>
             </el-table>
          </div>
        </div>
        <div v-show="page==1" style="width:100%;text-align:right;">
          <el-button type="primary" size="small" class="mb-5" @click="exportexcel">导出</el-button>
          <el-table
              ref="multipleTable"
             :data="tableData"
             border
             @select="selectfn"
             style="width: 100%"
             @header-click="titleShow">
             <!-- <el-table-column
               type="selection"
               width="55">
             </el-table-column> -->
             <el-table-column
               prop="YWXM"
               label="英文姓名">
             </el-table-column>
             <el-table-column
               prop="ZWXM"
               label="中文姓名">
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
               prop="CSRQ"
               label="出生日期">
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
               prop="LRDW_DESC"
               label="派出所名称">
             </el-table-column>
             <el-table-column
               prop="LSDWDZ"
               label="地址">
             </el-table-column>
             <el-table-column
               prop="ZSRQ"
               label="入住日期">
             </el-table-column>
             <el-table-column
               label="操作">
               <template slot-scope="scope">
                 <el-button type="text"  class="a-btn" title="详情" size="mini" icon="el-icon-tickets" @click="details(scope.row)"></el-button>
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
      </div>
    </div>
    <el-dialog title="列表" :visible.sync="listDialogVisible"  width="1000px">

    </el-dialog>
    <el-dialog title="临住详情" :visible.sync="detailsDialogVisible" custom-class="big_dialog" :append-to-body="false" :modal="false">
        <LZXX :type="type" :xid="xid" :rybh="rybh" :random="new Date().getTime()"></LZXX>
      <div slot="footer" class="dialog-footer">
        <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script scoped>
import echarts from 'echarts'
import {formatDate} from '@/assets/js/date.js'
import LZXX from '../../../common/lzxx_xq'
 export default {
  components:{LZXX},
  data() {

    return {
      pageC:true,
      numChange:true,
      tableDataC:[],
      tableHeader:[],
      rybh:'',
      detailsDialogVisible:false,
      listDialogVisible:false,
      page:0,
      type:1,
      xid:'',
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd:{LRRQ_DateRange:{begin:'',end:''},ZSRQ_DateRange:{begin:'',end:''},LRDW_BH_Like:'1',LRDW_BH:'1',DJDWXZQH:'3201',LB_DJDW:'',ZSLX:'0',TYPE:'YF'},
      pdTu:{},
      pd0:{
        begin:'',
        end:'',
      },
      fjlist:[],
      pcslist:[],
      zrq:[],
      checkedfj:false,
      checkedpcs:false,
      tableData:[],
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      options:this.pl.options,
      dataname:[],
      rr:0,
      lineChart:null,
      seriesT:[],


      multipleSelection:[],
      selectionAll:[],
      yuid:[],
      selectionReal:[],

      ChartQr:null,
      ChartQc:null,
      ChartTop:null,
      analyArr:{
        type_1:'',
        type_2:'',
        type_3:'',
      },
      optData_1:{},
      optData_2:{},
      optData_3: {},
      analysis_3:[
        {
          dm:'01',
          mc:'1月'
        },
        {
          dm:'02',
          mc:'2月'
        },
        {
          dm:'03',
          mc:'3月'
        },
        {
          dm:'04',
          mc:'4月'
        },
        {
          dm:'05',
          mc:'5月'
        },
        {
          dm:'06',
          mc:'6月'
        },
        {
          dm:'07',
          mc:'7月'
        },
        {
          dm:'08',
          mc:'8月'
        },
        {
          dm:'09',
          mc:'9月'
        },
        {
          dm:'10',
          mc:'10月'
        },
        {
          dm:'11',
          mc:'11月'
        },
        {
          dm:'12',
          mc:'12月'
        },
      ],
      InObj:{
        y2y:"",
        m2m:"",
      },
      OutObj:{
        y2y:"",
        m2m:"",
      },

      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      token:'',
      juState:'',

    }
  },
  mounted(){
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;

    this.$store.dispatch("getGjdq");
    this.$store.dispatch("getZjzl");
    this.$store.dispatch("getRjqzzl");
    this.$store.dispatch("getPcs");
    this.$store.dispatch("getRjsy");
    this.$store.dispatch("getZsbg");
    // this.pd0.begin=formatDate(new Date(),'yyyyMMdd');
    // this.pd0.end=formatDate(new Date(),'yyyyMMdd');
    this.getFJ();
    this.getList();
    this.chartFun_1();
    // this.chartFun_2();
    this.chartFun_3();
  },
  // beforeDestroy(){
  //   this.lineChart.dispose();
  //   this.lineChart=null;
  //   this.seriesT=[];
  // },
  activated(){
    if(this.juState=='2'){//分局登录
      this.pd.LRDW_Like = [this.orgCode];
      this.getPCS(this.pd.LRDW_Like);
    }
    if(this.juState=='3'){//派出所登录
      this.pd.LRDW_Like = [this.$store.state.pcsToju];
      this.getPCS(this.pd.LRDW_Like);
      this.pd.LRDW = [this.orgCode];
    }
    if(this.juState=='4'){
      this.pd.LRDW_Like = [this.$store.state.pcsToju];
      this.getPCS(this.pd.LRDW_Like);
      this.pd.LRDW = [this.$store.state.zrqTopcs];
      this.getZrq(this.pd.LRDW);
    }
  },
  methods:{
    QueryFnc(){
      this.page=0;
      this.tableData=[];
      this.CurrentPage=1;
      this.TotalResult=0;
      this.getList();
      this.chartFun_1();
      // this.chartFun_2();
      this.chartFun_3();
    },
    analyFun(val){
      if(val == 1){this.chartFun_1()}
      // if(val == 2){this.chartFun_2()}
      if(val == 3){this.chartFun_3()}
    },
    chartFun_1(){
      let p = {};
      let cx_1 = {};
      cx_1 = JSON.parse(JSON.stringify(this.pd))
      cx_1.MONTH = this.analyArr.type_1;
      p = {
        pd: cx_1,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };
      this.$api.post(this.Global.aport4 + '/eS_LZ_LZXXController/getHbTbCount',p,r=>{
        // let r={"y2y":"-100.0%","xAxis":{"xAxis":["上期","本期","同期"]},"series":[{"data":[1837,0,2885],"name":"总计"}],"m2m":"-100.0%"}
        this.InObj.y2y = r.data.y2y;
        this.InObj.m2m = r.data.m2m;
        let double={
            type: "bar",
            barWidth: 10,
            barGap: '50%',
            showBackground: true,
            backgroundStyle: {            
              color: 'rgba(220, 220, 220, 0.3)',
              barBorderRadius: 30
            },
            itemStyle: {
              normal: {
                barBorderRadius: 10, //柱状图边角圆弧化
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#000",
                    fontSize: 12,
                    fontWeight:'bold'
                  }
                },
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#D5C95D"
                  },
                  {
                    offset: 1,
                    color: "#C39E69"
                  }
                ])
              }
            },
        }
        let dataReal = [];
        r.data.series.forEach(item => {
          let dataItem = Object.assign({},item,double)
          dataReal.push(dataItem)
        })
        this.chartShow_1(r.data.xAxis.xAxis,dataReal)
      })
    },
    chartShow_1(xAxis,series){
      this.optData_1 = {
        tooltip: {},
        grid: {
          x: 0,
          y: 20
        },
        xAxis: [
          {
            type: "category",
            data: xAxis,
            axisPointer: {
              type: "none"
            },
            axisLine: {
              //去除x坐标轴
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              show: true, //这行代码控制着坐标轴x轴的文字是否显示
              color: "#919294",
              fontSize: 12
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              //去除y坐标轴
              lineStyle: {
                color: "#fff"
              }
            },
            axisPointer: {
              //去除鼠标hover样式
              type: "none"
            },
            axisTick: {
              //去掉坐标刻度线
              show: false
            },
            splitLine: {
              //去除网格线
              show: false
            }
          }
        ],
        series: series
      };
      this.ChartQr = echarts.init(document.getElementById('echartsqr'));
      this.ChartQr.setOption(this.optData_1)
       window.addEventListener("resize", (()=>{
        this.ChartQr.resize();
      }));
    },
    //============================暂时废弃=======================================================
    chartFun_2(){
      // let cx_2 = {}
      // cx_2 = JSON.parse(JSON.stringify(this.pd))
      // cx_2.MONTH = this.analyArr.type_2;
      // cx_2.qcl = '1';
      // this.$api.post(this.Global.aport4 + '/comprehensive/periodComparison2',cx_2,r=>{
        let r={"y2y":"-74.31192%","xAxis":{"xAxis":["上期","本期","同期"]},"series":[{"data":[1546,504,1962],"name":"总计"}],"m2m":"-67.39974%"}
        this.OutObj.y2y = r.y2y;
        this.OutObj.m2m = r.m2m;
        let double={
          type: "bar",
            barWidth: 10,
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.3)',
              barBorderRadius: 30
            },
            itemStyle: {
              normal: {
                barBorderRadius: 10, //柱状图边角圆弧化
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#000",
                    fontSize: 12,
                    fontWeight:'bold'
                  }
                },
                color:((para)=>{
                  var colorList = [
                    {
                      c1:"#FCAC62",
                      c2:"#FC8C7E"
                    },
                    {
                      c1:"#F86948",
                      c2:"#E2453F"
                    },
                    {
                      c1:"#AA30DF",
                      c2:"#CE4AC0"
                    },
                    {
                      c1:"#30BFDA",
                      c2:"#1ACCE8"
                    },
                    {
                      c1:"#0FACFA",
                      c2:"#1ACCE8"
                    },
                    {
                      c1:"#FCAC62",
                      c2:"#FC8C7E"
                    },
                    {
                      c1:"#F86948",
                      c2:"#E2453F"
                    },
                    {
                      c1:"#AA30DF",
                      c2:"#CE4AC0"
                    },
                    {
                      c1:"#30BFDA",
                      c2:"#1ACCE8"
                    },
                    {
                      c1:"#0FACFA",
                      c2:"#1ACCE8"
                    }
                  ]
                  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                      offset: 0,
                      color: colorList[para.dataIndex].c1
                    },
                    {
                      offset: 1,
                      color: colorList[para.dataIndex].c2
                    }
                  ])
                })
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#D5C95D"
                  },
                  {
                    offset: 1,
                    color: "#C39E69"
                  }
                ])
              }
            },
        }
        let dataReal = [];
        r.series.forEach(item => {
          let dataItem = Object.assign({},item,double)
          dataReal.push(dataItem)
        })
        this.chartShow_2(r.xAxis.xAxis,dataReal)
      // })
    },
    chartShow_2(xAxis,series){
      this.optData_2 = {
        tooltip: {},
        grid: {
          x: 0,
          y: 20
        },
        xAxis: [
          {
            type: "category",
            data: xAxis,
            axisPointer: {
              type: "none"
            },
            axisLine: {
              //去除x坐标轴
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              show: true, //这行代码控制着坐标轴x轴的文字是否显示
              color: "#919294",
              fontSize: 12
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              //去除y坐标轴
              lineStyle: {
                color: "#fff"
              }
            },
            axisPointer: {
              //去除鼠标hover样式
              type: "none"
            },
            axisTick: {
              //去掉坐标刻度线
              show: false
            },
            splitLine: {
              //去除网格线
              show: false
            }
          }
        ],
        series: series
      };
      this.ChartQc = echarts.init(document.getElementById('echartsqc'));
      this.ChartQc.setOption(this.optData_2)
       window.addEventListener("resize", (()=>{
        this.ChartQc.resize();
      }));
    },
    //============================暂时废弃=======================================================
    //TOP
    chartFun_3(){
      // let p={};
      // let cx_3={};
      // cx_3 = JSON.parse(JSON.stringify(this.pd))
      // cx_3.MONTH = this.analyArr.type_3;
      let p = {
        pd: this.pd,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };
      this.$api.post(this.Global.aport4 + '/eS_LZ_LZXXController/getQwgjCount',p,r=>{
        this.chartShow_3(r.data.xAxis.xAxis,r.data.series[0].data)
      })
    },
    chartShow_3(xAxis,series) {
      this.optData_3 = {
        tooltip: {},
        grid: {
          x: 0,
          y: 20
        },
        xAxis: [
          {
            type: "category",
            data: xAxis,
            axisPointer: {
              type: "none"
            },
            axisLine: {
              //去除x坐标轴
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              show: true, //这行代码控制着坐标轴x轴的文字是否显示
              color: "#919294",
              fontSize: 12
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLine: {
              //去除y坐标轴
              lineStyle: {
                color: "#fff"
              }
            },
            axisPointer: {
              //去除鼠标hover样式
              type: "none"
            },
            axisTick: {
              //去掉坐标刻度线
              show: false
            },
            splitLine: {
              //去除网格线
              show: false
            }
          }
        ],
        series: [
          {
            name:'',
            type: "bar",
            barWidth: 10,
            showBackground: true,
            backgroundStyle: {
              color: "#1AC8EA",
              opacity: 0.1,
              barBorderRadius: 30
            },
            itemStyle: {
              normal: {
                barBorderRadius: 30, //柱状图边角圆弧化
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#000",
                    fontSize: 12,
                    fontWeight:'bold'
                  }
                },
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#1AC8EA"
                  },
                  {
                    offset: 1,
                    color: "#10ADFA"
                  }
                ])
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#D5C95D"
                  },
                  {
                    offset: 1,
                    color: "#C39E69"
                  }
                ])
              }
            },
            data: series
          }
        ]
      };
      this.ChartTop = echarts.init(document.getElementById('echartsTop'));
      this.ChartTop.setOption(this.optData_3)
       window.addEventListener("resize", (()=>{
        this.ChartTop.resize();
      }));
    },
    titleShow(e,el){
      el.target.title = e.label;
    },
    changeTu(){
      this.pageC=!this.pageC;
      if(this.pageC==true){
        this.getList();
      }else{
        this.getListC()
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
          "pd":this.pdTu,
          userCode:this.userCode,
          userName:this.userName,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token
        }
      }else{//导出选中
        this.yuid=[];
        for(var i in this.selectionAll){
          this.yuid.push(this.selectionAll[i].DTID)
        };
        this.pdTu.DTID=this.yuid;
         p={
          "pd":this.pdTu,
          userCode:this.userCode,
          userName:this.userName,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token
        }
      }
      this.$api.post(this.Global.aport4+'/warningInfoController/exportByMxLx',p,
        r =>{
          this.downloadM(r,'临住登记总量变化量')
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
        link.setAttribute('download', '临住登记变化量报表'+this.format(new Date(),'yyyyMMddhhmmss')+'.xls')
        document.body.appendChild(link)
        link.click()
    },
    downloadC(){
      if(this.tableDataC.length==0){
        this.$message({
          message: '列表无数据！',
          type: 'warning'
        });
        return
      }
      let p={
        pd:this.pd,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      }
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/exportList',p,
       r =>{
         this.downloadM(r,'临住登记变化量');
       },e=>{},{},'blob')
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getListTu(this.CurrentPage,val,this.pdTu);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getListTu(val,this.pageSize,this.pdTu);
    },
    getFJ(){
      this.$set(this.pd,'LRDW',[]);
      let p={
        "operatorId":this.$store.state.uid,
        "operatorNm":this.$store.state.uname,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };
      this.$api.post(this.Global.aport2+'/data_report/selectSsfjDm', p,
        r => {
          this.fjlist = r.data.SSFJ;
        })
    },
    getZrq(arr) {
      this.$set(this.pd,'SSZRQ',[]);
      let p = {
        "operatorId": this.$store.state.uid,
        "operatorNm": this.$store.state.uname,
        "pcsdm":arr
      };
      var url = this.Global.aport2 + "/data_report/selectZrqDm";
      this.$api.post(url, p,
        r => {
          this.zrq = r.data.ZRQ;
        })
    },
    details(i){
      this.xid=i.DTID;
      this.rybh=i.RYBH;
      this.detailsDialogVisible = true;
    },

    getRadiofj(n){
      if(n==true){
        this.pd.LRDW_BH_Like='0'
      }
      else if (n==false) {
        this.pd.LRDW_BH_Like='1'
      }
    },
    getRadiopcs(n){
      if(n==true){
        this.pd.LRDW_BH='0'
      }else if(n==false){
        this.pd.LRDW_BH='1'
      }
    },
    getPCS(arr){
      let p={
        "fjdmList":arr,
      }
      this.$api.post(this.Global.aport3+'/data_report/selectPcsDm',p,
       r=>{
         if(r.success){
           this.pcslist = r.data.PCS;
         }
       })
    },

    getList(){
      if(((this.pd.LRRQ_DateRange.begin!=''&&this.pd.LRRQ_DateRange.begin!=null)||(this.pd.LRRQ_DateRange.end!=''&&this.pd.LRRQ_DateRange.end!=null))&&((this.pd.ZSRQ_DateRange.begin!=''&&this.pd.ZSRQ_DateRange.begin!=null)||(this.pd.ZSRQ_DateRange.begin!=''&&this.pd.ZSRQ_DateRange.begin!=null))){
        this.$alert('录入日期和住宿日二者只能选其一！', '提示', {
          confirmButtonText: '确定',
          type: 'warning'
        })
        return
      }
      let p = {
        "pd": this.pd,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      };
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getCountByParam', p,
        r => {
          if(r.success){
            this.seriesT = r.data.series;
            this.drawLine(r.data.legend,r.data.header,this.seriesT);
          }
        })
    },
    getListC(){
      //表格
      let p={
        pd:this.pd,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      }
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getListByParam',p,
       r =>{
         if(r.success){
           this.tableHeader = r.data.table;
           this.tableDataC = r.data.resultList;
         }
       })
    },
    getListTu(currentPage,pageSize,pd){
      let p={
        'currentPage':currentPage,
        'showCount':pageSize,
        'pd':pd,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      }
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/getLzListByParams',p,
        r =>{
          if(r.success){
            this.tableData=r.data.resultList;
            this.TotalResult=r.data.totalResult;
            if(this.selectionReal.length==0){//声明一个数组对象
              this.selectionReal=new Array(Math.ceil(this.TotalResult/showCount))
            }
            this.$nextTick(()=>{
              this.multipleSelection=[]
              for(var i=0;i<this.tableData.length;i++){
                for(var j=0;j<this.selectionAll.length;j++){
                  if(this.tableData[i].DTID==this.selectionAll[j].DTID){
                    this.$refs.multipleTable.toggleRowSelection(this.tableData[i],true);
                  }
                }
              }
            })
          }
        })
    },
    //折线图
    drawLine(dataname,ydata,series){
      this.lineChart = echarts.init(document.getElementById('echarts'));
      window.onresize = echarts.init(document.getElementById('echarts')).resize;
      let chartStyle={
        smooth: 0.7,
        symbolSize: 8,
        symbol: "emptyCircle", //设定为实心点
        label: {
          show: this.numChange,
          fontSize: 14,
          position:'right',
          fontWeight:'bold'
        },
        lineStyle: {
          width: 3,
        },
      }
      let dataReal = [];
      series.forEach(item => {
        let dataItem =  Object.assign({},item,chartStyle)
        dataReal.push(dataItem)
      })
      let that = this;
              // 折线图初始化
     that.lineChart.setOption({
        color:['#c23531','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#FCAC62', '#F86948', '#30BFDA','#AA30DF','#30BFDA', '#0FACFA','#749f83'],
        // tooltip: {
        //     // trigger: 'none',
        //     axisPointer: {
        //         type: 'cross'
        //     }
        // },
        legend: {
            data:dataname
        },
        grid: {
            x: 40,
            y: 40,
            x2: 40,
            y2: 30
        },
        xAxis: [
            {
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                axisLine: {
                    onZero: false,
                    lineStyle: {
                      color: "#eee"
                    }
                },
                axisPointer: {
                  type: "none"
                },
                axisLabel: {
                  show: true, //这行代码控制着坐标轴x轴的文字是否显示
                  color: "#919294",
                  fontSize: 12
                },
                data:ydata
            },
        ],
        yAxis: [
            {
                type: 'value',
                boundaryGap: [0, "50%"],
                axisLine: {
                  //去除y坐标轴
                  lineStyle: {
                    color: "#fff"
                  }
                },
                axisLabel: {
                  show: true, //这行代码控制着坐标轴的文字是否显示
                  color: "#919294",
                  fontSize: 12
                },
                axisPointer: {
                  //去除鼠标hover样式
                  type: "none"
                },
                axisTick: {
                  //去掉坐标刻度线
                  show: false
                },
                splitLine: {
                  //网格线
                  show: true,
                  lineStyle: {
                    color: ["#ddd"],
                    type: "dashed"
                  }
                }
            }
        ],
        series: dataReal
      },true)
      that.lineChart.off('click');
      that.lineChart.on('click',function(params){
        let p={};
        p=Object.assign({}, that.pd);
        if(p.hasOwnProperty('LRDW_BH_Like')){delete p.LRDW_BH_Like};
        if(p.hasOwnProperty('LRDW_BH')){delete p.LRDW_BH};
        p.HEADER=ydata;
        p.TIME=params.name;
        p.DW=params.seriesName;
        that.pdTu=p;
        that.page=1;
        that.CurrentPage=1;
        that.selectionAll=[];
        that.getListTu(that.CurrentPage,that.pageSize,that.pdTu);
      })
      that.lineChart.resize();
    },
    exportexcel(){
      if(this.tableData.length==0){
         this.$message.error('无可导出数据');
         return
      }
      let p={
        'currentPage':1,
        'showCount':10000,
        'pd':this.pdTu,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token
      }
      this.$api.post(this.Global.aport4+'/eS_LZ_LZXXController/export',p,

            r =>{
              this.downloadM(r,'临住登记变化量');
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
        link.click();
        this.$refs.multipleTable.clearSelection();
        this.selectionAll=[];
    },
  }
}
</script>
<style media="screen">
  .t-ml0 .el-checkbox{
    margin-left: 0px!important;
  }
  .t-ml0 .el-checkbox+.el-checkbox{margin-left: 0px!important;}
</style>
