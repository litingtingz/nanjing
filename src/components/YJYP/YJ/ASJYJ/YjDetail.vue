<template>
  <div class="yymain">
    <div class="t-content">
      <div class="yj-title mb-15">基本信息</div>
      <el-row type="flex">
        <el-col :span="21">
          <el-row>
            <el-col :span="6" class="basic-box" v-for="(item,ind) in basicLabel" :key="ind">
              <span class="basic-key">{{item.mc}}</span>
              <el-tooltip placement="top" :content="basicData[item.dm]" :disabled="!item.els">
                <span class="basic-value">{{basicData[item.dm]}}</span>
              </el-tooltip> 
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="3" class="wh-center-btn">
          <el-button type="primary" size="mini" 
          @click="$router.push({name:'RYHX_XQ',query:{zjhm:$route.query.row.ZJHM,gjdq:$route.query.row.GJ,row:$route.query.row}})">人员画像</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="t-content mt-10">
      <div class="yj-title mb-15">预警原因</div>
      <el-row>
        <el-col :span="6" class="yjyi-box" v-for="(item,index) in yjData" :key="index">
          <span class="yjyi-key">{{item.mc}}</span>
          <span class="yjyi-value hand" @click="openDetailDialog(item)">{{item.count}}条</span>
        </el-col>
      </el-row>
    </div>
    <div class="t-content mt-10">
      <div class="yj-title mb-15">时间轴统计</div>
      <el-container style="width:100%">
        <el-row  class="axis">
          <el-col :span="24" class="time-box">
            <div class="ul_box" :style="{ width: timeLineList.length * 250 + 50 + 'px' }">
              <ul style="margin-left: 10px;"  >
                <li class="my_timeline_item" v-for="(item, index) in timeLineList" :key="index"  @click="changeActive(index)">
                  <!--圈圈节点-->
                  <div class="my_timeline_node" :style="{backgroundColor: item.bgcolor,width: item.size + 'px',height: item.size + 'px',}"
                    :class="{ active: index == timeIndex }"></div>
                  <!--时间轴线-->
                  <div class="my_timeline_item_line" v-if="index !== timeLineList.length - 1"></div>
                  <!-- 控制节点下面的字样式 -->
                  <div class="my_timeline_item_content"
                    :class="{'color1':index%9 <=2,'color2':index%9>2 && index%9<=5,'color3':index%9>5}"
                    :style="{
                      color: item.color,
                      fontSize: item.fontsize + 'px',
                    }">{{ item.trackTime }}
                  </div>
                  <!-- 描述的线 -->
                  <div :class="index%2 ? 'content-line-top' : 'content-line-bottom'"></div>
                  <!-- 内容显示区 -->
                  <!--<div :class="index%2 ? 'content-top' : 'content-bottom'"> -->
                  <div :class="{'content-top':index%2===1,'content-bottom':index%2===0,'color1':index%9 <=2,'color2':index%9>2 && index%9<=5,'color3':index%9>5}" >                     <!-- <el-main class="time-main"> -->
                        <div v-for="(p,i) of item.trackDataList" :key="i" class="time_content">
                              <p style="margin:2px 10px;line-height:18px;">{{p.colComment}}：{{p.colVal}}</p>
                        </div>
                    <!-- </el-main> -->
                  </div>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </el-container>
    </div>
     <!-- 分局级别是2并且是未处理状态   展示派出所详情和分局意见输入框-->
    <div class="stu-footer" v-if="jb=='2' && showFJ">
      <!-- <div class="stu-title">处理结果：{{pd.CLJG}}</div> -->
      <div class="stu-title">支队处理意见：{{pd.ZDYJ_DESC}}</div>
      <div class="stu-title">支队处理详情：{{pd.CLXQ}}</div>
      <div class="stu-title">分局调查意见</div>
      <el-row type="flex" class="mb-15">
        <el-col :span="20">
          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 3}"
            placeholder="分局调查意见必须填写原因(不超过100个字符)"
            v-model="pd.FJYJ">
          </el-input>
        </el-col>
        <el-col :span="4"  class="down-btn-area">
          <el-button type="primary" class="mb-5" size="small" @click="chuli()">确定</el-button>
          <!-- <el-button type="warning" class="m0" size="small" @click="$router.go(-1)">返回</el-button> -->
        </el-col>
      </el-row>
      <div class="czfont">
        处理人: {{FJCLR==''?$store.state.uname:FJCLR}}
      </div>
    </div>
    <!-- 分局级别是2且是已处理状态  展示两个详情 -->
    <div class="stu-footer" v-if="jb=='2' && !showFJ">
      <!-- <div class="stu-title">处理结果：{{pd.CLJG}}</div> -->
      <div class="stu-title">支队处理意见：{{pd.ZDYJ_DESC}}</div>
      <div class="stu-title">支队处理详情：{{pd.CLXQ}}</div>
      <div class="stu-title">分局调查意见：{{pd.FJYJ}}</div>
      <div class="czfont" v-if="FJCLR!=''">
        处理人: {{FJCLR==''?$store.state.uname:FJCLR}}
      </div>
    </div>

    <!-- 市局和支队级别是1 且是未处理状态 展示分局和派出所意见详情 支队处理意见输入框 -->
    <div class="stu-footer" v-if="(org=='320100060000'||jb=='1') && showZD">
      <div class="stu-title">分局调查意见：{{pd.FJYJ}}</div>
      <!-- <div class="stu-title">处理结果：{{pd.CLJG}}</div> -->
      <div class="stu-title">支队处理意见</div>
      <el-row  class="mb-15">
          <el-col :span="20" style="">
            <span  style="text-align:left;font-size:12px;">处理意见：</span>
            <el-select v-model="pd.ZDYJ" placeholder="请选择"  filterable clearable default-first-option   size="small" :disabled="showXF" @change="isXF(pd.ZDYJ)">
              <el-option v-for="item in $store.state.yjcl2"
                :key="item.dm"
                :label="item.mc"
                :value="item.dm">
              </el-option>
            </el-select>
          </el-col>
      </el-row>
      <el-row  class="mb-15">
        <el-col :span="20">

          <el-input
            type="textarea"
            :autosize="{ minRows: 3, maxRows: 3}"
            placeholder="处理详情必须填写原因(不超过100个字符)"
            v-model="pd.CLXQ"
            @input="isXF(pd.CLXQ)"
            :disabled="showXF">
          </el-input>
        </el-col>
        <el-col :span="4"  class="down-btn-area">
          <el-button type="warning" class="mb-5" size="small" @click="release()" v-if="!showXF" :disabled="isXf" style="width:78px">下发分局</el-button>
          <el-button type="warning" class="mb-5" size="small" @click="release()" :disabled="showXF" v-if="showXF" style="width:78px;margin-left:0px">已下发</el-button>
          <el-button type="primary" class="mb-5" size="small" @click="chuli()" :disabled="showXF" style="width:78px;margin-left:0px">确定</el-button>
        </el-col>
      </el-row>
      <div class="czfont">
        处理人: {{ZDCLR==''?$store.state.uname:ZDCLR}}
      </div>
    </div>
    <!-- 市局和支队 已处理状态 展示三个详情 -->
    <div class="stu-footer" v-if="(org=='320100060000'||jb=='1') && !showZD">
      <div class="stu-title">支队处理意见：{{pd.ZDYJ_DESC}}</div>
      <div class="stu-title">支队处理详情：{{pd.CLXQ}}</div>
      <div class="stu-title">分局调查意见：{{pd.FJYJ}}</div>
      <!-- <div class="stu-title">处理结果：{{pd.CLJG}}</div> -->
      <div class="czfont">
        处理人: {{ZDCLR==''?$store.state.uname:ZDCLR}}
      </div>
    </div>

    <!-- 预警原因详情弹窗 -->
    <el-dialog :title="DetailTitle" :visible.sync="DetailDialogVisible" class="dialog-none-lineHeight" width="1000px">
      <el-table
       :data="DetailTableData"
       style="width:100%"
       border
       class="yj-table">
       <template v-for="(lb,ind) in DetailLbData">
         <el-table-column
          :key="ind"
          :label="lb.mc"
          v-if="lb.type=='czqzyxq'">
            <template slot-scope="scope">
              <span>{{scope.row.SSCS=='3201'?scope.row.TLYXQ:scope.row.QZYXQ}}</span>
            </template>
         </el-table-column>
         <el-table-column
          v-else
          :key="ind"
          :prop="lb.dm"
          :label="lb.mc">
         </el-table-column>
       </template>
        <el-table-column
          v-if="DetailType!='zjxx'"
          label="操作" width="80">
          <template slot-scope="scope">
            <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="getDetails(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="middle-foot mt-10">
        <div class="page-msg">
          <div class="">共{{TotalResult}}条记录</div>
          <div class="">每页显示
            <el-select v-model="pageSize" @change="pageSizeChange(pageSize)" placeholder="10" size="mini" class="page-select">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>条
          </div>
          <div class="">共{{Math.ceil(TotalResult/pageSize)}}页</div>
        </div>
        <el-pagination
          background
          @current-change="handleCurrentChange"
          :page-size="pageSize"
          layout="prev, pager, next"
          :total="TotalResult"
          :current-page.sync="CurrentPage">
        </el-pagination>
      </div>
    </el-dialog>
    <!-- 二次详情 -->
    <el-dialog :title="DetailsTip" :visible.sync="innerDetailDialogVisible" custom-class="big_dialog combine" :append-to-body="true" :modal="false">
      <LZXX v-if="DetailType=='lz'" :type="type" :xid="xid" :rybh="rybh" :random="random"></LZXX>
      <CRJXX v-if="DetailType=='crj'" :type="type" :xid="xid" :random="random"></CRJXX>
      <CZXX v-if="DetailType=='cz'" :type="type" :xid="xid" :rybh="rybh" :row="allData" :random="random"></CZXX>
      <QZ v-if="DetailType=='qz'" :xid="xid" :random="random"></QZ>
      <TBRY v-if="DetailType=='tb'" :type="type" :xid="xid" :rybh="rybh" :random="random"></TBRY>
      <FFJL v-if="DetailType=='ffjl'" :rowData="allData" :key="random"></FFJL>
      <JZXX v-if="DetailType=='jzxx'" :rowData="allData" :key="random"></JZXX>
      <NMXX v-if="DetailType=='nmxx'" :rowData="allData" :key="random"></NMXX>
      <ANSJ v-if="DetailType=='asj'" :type="type" :xid="xid"></ANSJ>
      <div slot="footer" class="dialog-footer">
          <el-button @click="innerDetailDialogVisible = false" size="small">取 消</el-button>
        </div>
    </el-dialog>
  </div>
</template>
<script>
import LZXX from '../../../common/lzxx_xq'
import CZXX from '../../../common/czxx_xq'
import CRJXX from '../../../common/crjxx_xq'
import QZ from '../../../common/qz_xq'
import TBRY from '../../../common/tbry_xq'
import FFJL from '../../../common/ffjl_xq'
import JZXX from '../../../common/jzxx_xq'
import NMXX from '../../../common/nmxx_xq'
import ANSJ from '../../../common/ansj_xq'
export default {
  components:{LZXX,CZXX,CRJXX,QZ,TBRY,FFJL,JZXX,NMXX,ANSJ},
  data(){
    return{
      tdCrj:[
        {
          mc:'身份证',
          count:100,
        },
        {
          mc:'身份证',
          count:100,
        },
      ],
      basicLabel:[
        {
          mc:'姓名',
          dm:'YWXM',
          els:true,
        },
        {
          mc:'性别',
          dm:'XB_DESC',
        },
        {
          mc:'国家/地区',
          dm:'GJDQ_DESC',
        },
        {
          mc:'证件种类',
          dm:'ZJZL_DESC',
        },
        {
          mc:'证件有效期',
          dm:'ZJYXQ',
        },
        {
          mc:'证件号码',
          dm:'ZJHM',
        },
        {
          mc:'签证种类',
          dm:'QZZL_DESC',
        },
        {
          mc:'签证号码',
          dm:'QZHM',
        },
        {
          mc:'预警时间',
          dm:'BJSJ',
        },
        {
          mc:'出生日期',
          dm:'CSRQ',
        },
      ],
      jtlnBasicLabel:[
        {
          mc:'姓名',
          dm:'XM',
        },
        {
          mc:'性别',
          dm:'XB_DESC',
        },
        {
          mc:'国家/地区',
          dm:'GJDQ_DESC',
        },
        {
          mc:'出生日期',
          dm:'CSRQ',
        },
        {
          mc:'证件种类',
          dm:'ZJZL_DESC',
        },
        {
          mc:'证件号码',
          dm:'ZJHM',
        },
        {
          mc:'入境签证种类',
          dm:'QZZL_DESC',
        },
        {
          mc:'联系电话',
          dm:'LXDH',
        },
        {
          mc:'人员类别',
          dm:'RYLB_DESC',
        },
        {
          mc:'在宁状态',
          dm:'ZNZT_DESC',
        },
        {
          mc:'服务处所',
          dm:'FWCS',
        },
      ],
      nmbhBasicLabel:[
        {
          mc:'案卷编号',
          dm:'AJBH',
        },
        {
          mc:'登记日期',
          dm:'ZCRQ',
        },
        {
          mc:'人数',
          dm:'RS',
        },
        {
          mc:'姓名',
          dm:'XM',
        },
        {
          mc:'出生日期',
          dm:'CSRQ',
        },
        {
          mc:'护照号',
          dm:'HZHM',
        },
        {
          mc:'签证种类',
          dm:'RJQZLXMC',
        },
        {
          mc:'邮箱地址',
          dm:'YXDZ',
        },
        {
          mc:'省',
          dm:'SHENG',
        },
        {
          mc:'城市',
          dm:'CS',
        },
        {
          mc:'电话号码',
          dm:'DHHM',
        },
        {
          mc:'详细地址',
          dm:'XXDZ',
        },
      ],
      basicData:{},
      DetailLbData:[],
      lzLbData:[
        {
          dm:'ZSRQ',
          mc:'住宿时间',
        },
        {
          dm:'LSDWDZ',
          mc:'住宿地址',
        },
        {
          dm:'DJDWMC',
          mc:'登记单位',
        },
      ],
      czLbData:[
        {
          dm:'SFDM_DESC',
          mc:'身份',
        },
        {
          dm:'FWCS',
          mc:'服务处所',
        },
        {
          dm:'QZYXQ',
          mc:'签证有效期',
          type:'czqzyxq'
        },
        {
          dm:'SSPCS_DESC',
          mc:'所属单位',
        },
        {
          dm:'XXDZ',
          mc:'居住地址',
        },
      ],
      crjLbData:[
        {
          dm:'IOSTRING',
          mc:'出入境日期',
        },
        {
          dm:'CRJBS_DESC',
          mc:'出入境状态',
        },
        {
          dm:'IOPORT_DESC',
          mc:'出入境口岸',
        },
      ],
      qzLbData:[
        {
          dm:'QZZL_DESC',
          mc:'签证种类',
        },
        {
          dm:'QZHM',
          mc:'签证号码',
        },
        {
          dm:'QZYXQZ',
          mc:'签证有效期至',
        },
        {
          dm:'QFJG_DESC',
          mc:'签发地',
        },
      ],
      tbLbData:[
        {
          dm:'TBRYZL',
          mc:'通报人员类别',
        },
        {
          dm:'TBBH',
          mc:'通报编号',
        },
        {
          dm:'FBSJ',
          mc:'发布时间',
        },
        {
          dm:'BZ',
          mc:'备注',
        },
      ],
      //临住核查
      jzxxLbData:[//记者信息-
        {
          dm:'ZWXM',
          mc:'中文姓名',
        },
        {
          dm:'YWXM',
          mc:'英文姓名',
        },
        {
          dm:'GJDQ_DESC',
          mc:'国家地区',
        },
        {
          dm:'ZJHM',
          mc:'证件号码',
        },
      ],
      ffjlLbData:[//非法居留信息
        {
          dm:'RJRQ',
          mc:'入境日期',
        },
        {
          dm:'RJKAMC',
          mc:'入境口岸名称',
        },
        {
          dm:'RJQZHM',
          mc:'入境签证号码',
        },
      ],
      nmxxLbData:[//难民信息
        {
          dm:'XM',
          mc:'姓名',
        },
        {
          dm:'XBMC',
          mc:'性别',
        },
        {
          dm:'GJDQMC',
          mc:'国家地区',
        },
        {
          dm:'CSRQ',
          mc:'出生日期',
        },
        {
          dm:'LZDJMC',
          mc:'临住登记名称',
        },
      ],
      //受理、签发
      zjxxLbData:[//证件信息
        {
          dm:'ZJZL_DESC',
          mc:'证件种类',
        },
        {
          dm:'ZJHM',
          mc:'证件号码',
        },
        {
          dm:'ZJZT',
          mc:'证件状态',
        },
        {
          dm:'ZJYXQ',
          mc:'证件有效期',
        },
        {
          dm:'QZQFD_DESC',
          mc:'签证签发地',
        },
      ],
      //难民和寻求庇护
      asjLbData:[//案事件信息
        {
          dm:'ASJBH',
          mc:'案事件编号',
        },
        {
          dm:'AJMC',
          mc:'案件名称',
        },
        {
          dm:'AJLB',
          mc:'案件类别',
        },
        {
          dm:'AJZT',
          mc:'案件状态',
        },
        {
          dm:'FXSJ',
          mc:'发现时间',
        },
      ],
      jzsjLbData:[//警综涉警信息
        {
          dm:'SJRYDJDWMC',
          mc:'涉警人员登记单位名称',
        },
        {
          dm:'SJRYDJRXM',
          mc:'涉警人员登记人姓名',
        },
        {
          dm:'SJRYDJSJ',
          mc:'涉警人员登记时间',
        },
        {
          dm:'SJRYXGDW',
          mc:'涉警人员修改单位',
        },
      ],
      yjDataAll:[
        {
          dm:'qz',
          mc:'签证信息',
          titlePre:'',
          titleEnd:'',
          url:'/eS_FNVISASController/getResultListByParams',
          yjRule:'',
          count:100,
        },
        {
          dm:'crj',
          mc:'出入境信息',
          titlePre:'',
          titleEnd:'',
          url:'/eS_CRJJLBController/getResultListByParams',
          orderBy:{value:"IOSTRING",dataType:"date"},
          orderType:'DESC',
          yjRule:'',
          count:100,
        },
        {
          dm:'cz',
          mc:'常住信息',
          titlePre:'',
          titleEnd:'',
          url:'/ryhx/getczryjbxx',
          yjRule:'',
          count:100,
        },
        {
          dm:'lz',
          mc:'临住信息',
          titlePre:'',
          titleEnd:'',
          url:'/eS_LZ_LZXXController/getResultListByParams',
          orderBy:{value:"ZSRQ",dataType:"date"},
          orderType:"DESC",
          yjRule:'',
          count:100,
        },
        {
          dm:'tb',
          mc:'通报人员信息',
          titlePre:'',
          titleEnd:'',
          url:'',
          yjRule:'',
          count:100,
        },
        //临住核查
        {
          dm:'jzxx',
          mc:'记者信息',
          titlePre:'',
          titleEnd:'',
          url:'',
          yjRule:'',
          count:100,
        },
        {
          dm:'ffjl',
          mc:'非法居留信息',
          titlePre:'',
          titleEnd:'',
          url:'',
          yjRule:'',
          count:100,
        },
        {
          dm:'nmxx',
          mc:'难民信息',
          titlePre:'',
          titleEnd:'',
          url:'',
          yjRule:'',
          count:100,
        },
        //受理签发
        {
          dm:'zjxx',
          mc:'证件信息',
          titlePre:'',
          titleEnd:'',
          url:'',
          yjRule:'',
          count:100,
        },
        //难民和寻求庇护
        {
          dm:'asj',
          mc:'案事件信息',
          titlePre:'',
          titleEnd:'',
          url:'/eS_AJ_GroupController/getAnJianInfoByRYBH',
          yjRule:'',
          count:100,
        },
        {
          dm:'jzsj',
          mc:'警综涉警信息',
          titlePre:'',
          titleEnd:'',
          url:'/eS_JCJ_SJXXController/getResultListByParams',
          orderBy:{value:"CJSJ",dataType:"date"},
          orderType:"DESC",
          yjRule:'',
          count:100,
        },
      ],
      yjData:[],

      //时间轴
      timeLineList: [],
      timez:[],
      timeIndex:0,

      DetailTitle:'列表',
      DetailsTip:'详情',
      DetailType:'',
      DetailDialogVisible:false,
      DetailTableData:[],
      DetailUrl:"",
      DetailPara:{},
      DetailOrder:{},
      TotalResult:0,
      pageSize:10,
      CurrentPage:1,

      innerDetailDialogVisible:false,
      xid:'',
      type:0,
      rybh:'',
      random:0,
      allData:{},

      options:this.pl.ps,
      row:{},
      yjType:0,
      yjMark:'',
      yjEdit:[],

      //处理结果
      pd:{
        CLJG:'',
        FJYJ:'',
        ZDYJ:'',
      },
      pcl:{},
      jb:1,
      org:'320100060000',
      showZD:true,
      showXF:false,
      showFJ:true,
      showPCS:true,
      isXf:false,
      withname:this.$store.state.uname,
      FJCLR:'',//分局处理人
      ZDCLR:'',//支队处理人

      userCode:'',
      userName:'',
      orgCode:'',
      orgName:'',
      juState:'',
      token:'',
    }
  },
  activated(){
    this.userCode=this.$store.state.uid;
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname;
    this.orgCode=this.$store.state.orgid;
    this.juState=this.$store.state.juState;
    this.token=this.$store.state.token;
    this.row = this.$route.query.row;
    this.org=this.$store.state.orgid;
    this.yjData=[];
    // this.getJB();
    this.jb=this.$store.state.juState;
    this.yjType = this.$route.query.yjType;
    this.yjMark = this.$route.query.yjMark;
    this.FJCLR=this.row.FJCLR==undefined?'':this.row.FJCLR;
    this.ZDCLR=this.row.ZDCLR==undefined?'':this.row.ZDCLR;
    //支队  详情展示支队 分局 派出所意见
    this.showZD=true;
    this.showXF=false;//下发分局
    this.pd.CLJG='';
    this.pd.FJYJ='';
    this.pd.ZDYJ='';
    //支队已处理  展示分局和支队意见  按钮隐藏
    if(this.row!=undefined && (this.row.CLZT=='0')){
      this.showZD=false;//已处理
      this.pd.ZDYJ_DESC=this.row.ZDYJ_DESC;
      this.pd.CLXQ=this.row.CLXQ;
      this.pd.FJYJ=this.row.FJYJ;
      this.pd.CLJG=this.row.CLJG;
    }else if(this.row!=undefined && (this.row.CLZT=='2')){//支队已下发
      this.showZD=true;//需要支队处理
      this.showXF=true;//下发分局,且支队不可填写意见
    }
    //分局  详情展示分局和派出所意见
    this.showFJ=true;
    if(this.row!=undefined && (this.row.CLZT=='0'||this.row.FJCLZT=='3')){//支队已处理||分局已上报
      this.showFJ=false;//无需填写意见
      this.$set(this.pd,'FJYJ',this.row.FJYJ);
      this.$set(this.pd,'CLJG',this.row.CLJG);
    }
    //派出所
    this.showPCS=true;
    if(this.row!=undefined && (this.row.CLZT=='0'||this.row.FJCLZT=='3')){
      this.showPCS=false;//支队已处理||分局已办结||派出所已办结
      this.pd.CLJG=this.row.CLJG;
    }
    this.getJbxx();//除了交通来宁和难民
    this.getInit();
    this.getTime();
    
  },
  mounted(){
    this.$store.dispatch("getYjcl2");
    // this.getJB();
  },
  methods:{
    getInit(){
      // switch(this.yjMark){
      //   case 'tygbj': this.yjEdit=['qz','crj','lz'];break;
      //   case 'bk': this.yjEdit=['lz','crj','tb'];break;
      // }
      let p={
        pd:{
          id:this.row.YJID,
          mxmc:this.row.MXLX
        }
      }
      this.$api.post(this.Global.aport4+'/api/dataanalyseController/countWarnDataInfo',p,r=>{
        if(r.success){
          let arr = r.data
          let arrAll = this.yjDataAll
          for(let i=0;i<arr.length;i++){
            for(let j=0;j<arrAll.length;j++){
              if(arr[i].searchType == arrAll[j].dm){
                arrAll[j].count = arr[i].count
                arrAll[j].yjRule = arr[i].ruleName
                this.yjData.push(arrAll[j])
              }
            }
          }
        }
      })
    },
    isXF(item){
      if(item!=''){
        this.isXf=true;
      }else{
        this.isXf=false;
      }
    },
    goBackS(){
      if(this.yjType==2){this.$router.push({name:'DQQZFFJYYJ'})}//持短期签证非法就业
      if(this.yjType==1){this.$router.push({name:'WGRFFJLYJ'})}//外国人非法居留预警
      if(this.yjType==20){this.$router.push({name:'GWHZYJ'})}//公务护照预警
      if(this.yjType==3){this.$router.push({name:'CFRYWBZYJ'})}//处罚人员未办证预警
      if(this.yjMark=='jtln'){this.$router.push({name:'JTLN'})}//交通来宁
      if(this.yjMark=='nmbh'){this.$router.push({name:'NMXQPHZYJ'})}//难民庇护
      if(this.yjType==16){this.$router.push({name:'ZDYQGJYJ'})}//交通来宁
    },
    getJB(){
      let p = {
        currentPage: 1,
        showCount: 10,
        pd: {DM:this.$store.state.orgid},
      };
      this.$api.post(this.Global.aport4+'/LRDWController/getMCAndJBByDM', p,
        r => {
          this.jb=r.data[0].JB
        })
    },
    release(){//支队下发分局  已下发状态是2
      // if(this.pd.ZDYJ==undefined || this.pd.ZDYJ==''){
      //   this.$message.error("请选择处理意见 ！");return ;
      // }
      let p={
        pd:{
          YJID:this.row.YJID,
          CLZT:'2',
          FJCLZT:'2',
        },
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      }
      let url = '/warningInfoController/sentData'
      if(this.yjMark=='jtln'){
        p={
          pd:{
            DTID:this.row.DTID,
            CLZT:'2',
            FJCLZT:'2',
          },
          userCode:this.userCode,
          userName:this.userName,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token,
        }
        url="/JTLNInfoController/sentData"
      }
      this.$api.post(this.Global.aport4+url,p,
       r =>{
         if(r.success){
           this.$message({
             message: '下发成功！',
             type: 'success'
            });
            this.goBackS();
         }
       })
    },
    chuli() {
      let url="";
        if(this.jb=="2"){//分局上报
          if(this.pd.FJYJ=="" || this.pd.FJYJ==undefined){
            this.$alert('分局调查意见不能为空！', '提示', {
              confirmButtonText: '确定',
            });
            return;
          }
         this.pcl.FJYJ=this.pd.FJYJ;
         this.pcl.FJCLR=this.withname;
         this.pcl.CLZT="3";
         this.pcl.FJCLZT="3";
         url="/warningInfoController/uploadData"
         if(this.yjMark=='jtln'){
           url="/JTLNInfoController/uploadData"
         }
       }else if(this.jb=="1"||this.org=='320100060000'){
          if(this.pd.ZDYJ=="" || this.pd.ZDYJ==undefined){
            this.$alert('处理意见不能为空！', '提示', {
              confirmButtonText: '确定',
            });
            return;
          }
          if(this.pd.CLXQ=="" || this.pd.CLXQ==undefined)
          {
            this.$alert('处理详情不能为空！', '提示', {
              confirmButtonText: '确定',
            });
            return;
          }
          this.pcl.ZDCLR=this.withname;
          this.pcl.ZDYJ=this.pd.ZDYJ;
          this.pcl.CLXQ=this.pd.CLXQ;
          this.pcl.CLZT="0";
          this.pcl.FJCLZT=this.row.FJCLZT;
          url="/warningInfoController/saveCLJG"
          if(this.yjMark=='jtln'){
            url="/JTLNInfoController/saveCLJG"
          }
        }else {
          if(this.pd.CLJG=="" || this.pd.CLJG==undefined)
          {
            this.$alert('处理意见不能为空！', '提示', {
              confirmButtonText: '确定',
            });
            return;
          }
         this.pcl.ZDCLR=this.withname;
         this.pcl.CLJG=this.pd.CLJG;
         this.pcl.CLZT="3";
      }
      if(this.yjMark=='jtln'){
        this.pcl.DTID=this.row.DTID;
      }else{
        this.pcl.YJID=this.row.YJID;
      }
      this.pcl.CLDW=this.$store.state.orgid;
      this.pcl.CLR=this.withname;
      this.pcl.CLRID=this.$store.state.uid;
      let p = {
        pd:this.pcl,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      };
      this.$api.post(this.Global.aport4+url, p,
        r => {
          if(r.success){
          this.$message({
            message: '处理成功！',
            type: 'success'
           });
            this.goBackS();
          }else {
            this.$message.error('处理失败了');
          }
        })
    },
    //时间轴
    changeActive(index) {
      this.timeIndex = index;
    },
    getTime(){
      let p={
        pd:{
          id:this.row.YJID,
          mxmc:this.row.MXLX
        }
      }
      this.$api.post(this.Global.aport4+'/api/dataanalyseController/getTimeTrack',p,
        r =>{
          this.timez=r.data
          for(let i=0;i<this.timez.length;i++){
            let obj={};
            obj.trackTime=this.timez[i].trackTime;
            obj.color="#fff";
            obj.fontsize=12;
            obj.size="15";
            obj.bgcolor="#46cdd9";
            obj.trackDataList=this.timez[i].trackDataList;
            this.timeLineList.push(obj);
          }
          // console.log(this.timeLineList)
        })
    },
    //人员基本信息
    getJbxx(){
        let url="";
        let p={
          userCode:this.userCode,
          userName:this.userName,
          orgJB:this.juState,
          orgCode:this.orgCode,
          token:this.token,
        }
        if(this.$route.query.mark=='jtln'){
          this.basicLabel = this.jtlnBasicLabel;
          this.basicData = this.row;
          return
        }else if(this.$route.query.mark=='nmbh'){
          this.basicLabel = this.nmbhBasicLabel;
          p.pd={RYBH:this.row.RYBH?this.row.RYBH:''}
          url="/eS_NM_JBXXController/getEntityByRYBH"
        }else{
          p.pd={YJID:this.row.YJID?this.row.YJID:''}
          url="/warningInfoController/getEntityByYJID"
        }
        this.$api.post(this.Global.aport4+url,p,r=>{
          if(r.success){
            this.basicData = r.data
            if(r.data.YWXM&&r.data.ZWXM){
              this.basicData.YWXM = r.data.YWXM
            }else if(r.data.ZWXM){
              this.basicData.YWXM = r.data.ZWXM
            }else{
              this.basicData.YWXM = r.data.YWXM
            }
          }
        })
    },
    openDetailDialog(data){
      this.DetailType = data.dm;
      this.DetailTitle = data.mc+'列表';
      this.DetailsTip = data.mc+'详情';
      this.DetailLbData = this[data.dm+'LbData'];
      this.DetailUrl='/api/dataanalyseController/pageWarnDataInfo';
      this.CurrentPage=1;
      this.pageSize=10;
      this.DetailPara={
        pd:{
          id:this.row.YJID,
          ruleName:data.yjRule,
          searchType:data.dm
        },
        orderBy:data.orderBy?data.orderBy:'',
        orderType:data.orderType?data.orderType:'',
      };
      this.getDetailList(this.CurrentPage,this.pageSize,this.DetailUrl,this.DetailPara)
      this.DetailDialogVisible = true;
    },
    getDetailList(currentPage,showCount,url,para){
      let p={
        currentPage:currentPage,
        showCount:showCount,
        pd:para.pd,
        // orderBy:para.orderBy,
        // orderType:para.orderType,
        userCode:this.userCode,
        userName:this.userName,
        orgJB:this.juState,
        orgCode:this.orgCode,
        token:this.token,
      }
      this.$api.post(this.Global.aport4+url,p,r=>{
        this.DetailTableData = r.data.dataList;
        this.TotalResult = r.data.totalSize;
      })
    },
    pageSizeChange(val) {
      this.pageSize=val;
      this.getDetailList(this.CurrentPage,this.pageSize,this.DetailUrl,this.DetailPara);
    },
    handleCurrentChange(val) {
      this.CurrentPage=val;
      this.getDetailList(this.CurrentPage,this.pageSize,this.DetailUrl,this.DetailPara);
    },
    getDetails(data){
      if(this.DetailType=='lz'){
        this.xid = data.DTID;
        this.rybh = data.RYBH;
        this.type = 0;//所有预警类的临住信息都是0
      }else if(this.DetailType=='crj'){
        this.xid = data.RGUID;
        this.type=1;//所有预警类的出入境信息都是1
      }else if(this.DetailType=='cz'){
        this.xid = data.RGUID;
        this.rybh = data.RYBH;
        this.type=1;//项目所有常住信息都是1，2,3共用一个接口。。。
        this.allData = data;
      }else if(this.DetailType=='qz'){
        this.xid = data.RGUID;
      }else if(this.DetailType=='tb'){
        this.xid = data.RGUID;
        this.rybh = data.RYBH;
      }else if(this.DetailType=='ffjl'){
        this.allData = data;
      }else if(this.DetailType=='jzxx'){
        this.allData = data;
      }else if(this.DetailType=='nmxx'){
        this.allData = data;
      }else if(this.DetailType=='asj'){
        this.xid = data.RGUID+','+data.DTID;
        //type 看起来没有用处
      }
      this.random = new Date().getTime();
      this.innerDetailDialogVisible=true;
    },
  }
}
</script>
<style scoped>
/* 时间轴样式开始 */
.ul_box {
  height: 290px;
  display: inline-block;
  margin-top: 2px;
  padding-left:42px;
  /* overflow: hidden; */
}
/* 控制间距 */
.my_timeline_item {
  display: inline-block;
  width: 250px;
  position: relative;
}
.my_timeline_node {
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
}
.my_timeline_node.active {
  background-color: #fff !important;
  border: 6px solid #0577b4;
}
/* 时间轴线 */
.my_timeline_item_line {
  width: 100%;
  height: 10px;
  margin: -9px 0 0 15px;
  border-top: 2px dotted #46cdd9;
  border-left: none;
}
/* 时间轴节点 */
.my_timeline_item_content {
  margin: 4px 0 0 -42px;
  width: 100px;
  background-color: #46cdd9;
  border-radius: 50px;
  text-align:center;
  line-height: 20px;
}
.time-box{
  padding-top: 120px;
  /* padding-left: 30px; */
  /* margin-left: 15px; */
}
/* 线在底部的样式 */
.content-line-bottom{
  height: 44px;
  border-left: 1px solid #90C8F9;
  position: absolute;
  left: 2.9%;
  bottom: -21%;
}
/* 内容底部的样式 */
.content-bottom{
  width: 250px;
  height: 80px;
  border-radius: 5px;
  background-color: #90C8F9;
  position: absolute;
  bottom: -210%;
  left: -7%;
  /* overflow-y: scroll; */
}
/* 线在顶部的样式 */
.content-line-top {
  height: 44px;
  border-left: 1px solid #90C8F9;
  position: absolute;
  left: 2.9%;
  top: -88%;
}
/* 内容在顶部的样式 */
.content-top{
  width: 250px;
  height: 80px;
  border-radius: 5px;
  background-color: #90C8F9;
  position: absolute;
  top: -277%;
  left: -7%;
  /* overflow-y: scroll; */
}
.color1{
  background-color: #43B3E5  !important;
}
.color2{
  background-color: #42C6DF  !important;
}
.color3{
  background-color: #0D9BEF  !important;
}
.time_content{
  color:#fff;
  font-size: 14px;
  /* padding:3x 10px ; */
  /* line-height: 6px; */
  /* overflow-y: scroll; */
}
.axis {
  overflow-x: scroll;
  overflow-y: hidden;
  height:350px;
  width:100%;
  margin-left:0px;
  margin-top:6px
}
</style>