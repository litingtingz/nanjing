<template lang="html">
  <!-- 教育厅招生预警、审核  -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                <span class="input-text">详细地址：</span>
                <el-input placeholder="请输入内容" size="small" v-model="pd.address" class="input-input"></el-input>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                <span class="input-text">证件号码：</span>
                <el-input placeholder="请输入内容" size="small" v-model="pd.passportno" class="input-input"></el-input>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
              <span class="input-text">国家地区：</span>
              <el-select v-model="pd.nationality" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                <el-option
                  v-for="item in $store.state.gjdq"
                  :key="item.dm"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                <span class="input-text">标题：</span>
                <el-input placeholder="请输入内容" size="small" v-model="pd.title" class="input-input"></el-input>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
              <span class="input-text">分局下发时间：</span>
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
              <span class="input-text">分局上报时间：</span>
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
              <span class="input-text">派出所反馈时间：</span>
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
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  class="mb-15" @click="getList(CurrentPage,pageSize,pd,1)">查询</el-button>
          <el-button type="primary" size="small"  class="t-ml0" @click="download">导出</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">地址线索排查列表</div>
       <div class="ak-tabs">
          <div class="ak-tab-item hand" :class="{'ak-checked':page=='0'}" @click="page='0';pageTab='2'">
            未走访
          </div>
          <div class="ak-tab-item hand" :class="{'ak-checked':page=='1'}" @click="page='1';pageTab='1'">
            已走访
          </div>
        </div>
        <div class="ak-tab-pane">
          <div class="table-other">
            <div class="table-tab-box" v-show="page=='0'">
              <span class="hand" :class="{'tab_active':pageTab=='2'}" v-if="juState=='1'||juState=='2'" @click="pageTab='2'">分局待下发</span>
              <span class="hand" :class="{'tab_active':pageTab=='5'}" v-if="juState=='1'||juState=='2'" @click="pageTab='5'">分局待上报</span>
              <span class="hand" :class="{'tab_active':pageTab=='3'}" v-if="juState=='1'||juState=='2'||juState=='3'" @click="pageTab='3'">派出所未处理</span>
            </div>
            <div class="table-tab-box" v-show="page=='1'">
              <span class="hand" :class="{'tab_active':pageTab=='1'}" v-if="juState=='1'" @click="pageTab='1'">已归档</span>
              <span class="hand" :class="{'tab_active':pageTab=='2'}" v-if="juState=='1'||juState=='2'" @click="pageTab='2'">分局已上报</span>
              <span class="hand" :class="{'tab_active':pageTab=='3'}" v-if="juState=='1'||juState=='2'||juState=='3'" @click="pageTab='3'">派出所已上报</span>
            </div>
            <div class="table-btn-box" id="plBtn">
              <template>
                <el-button size="mini" :type="'primary'">导出</el-button>
                <el-button size="mini" :type="'primary'">导入</el-button>
                <el-button size="mini" :type="'primary'">模板下载</el-button>
                <el-button size="mini" :type="'primary'">下发</el-button>
                <el-button size="mini" :type="'primary'">上报</el-button>
                <el-button size="mini" :type="'primary'">新增</el-button>
              </template>
            </div>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            border
            :highlight-current-row="true"
            style="width: 100%"
            @select="selectfn"
            @select-all="selectfn"
            @header-click="titleShow">
            <el-table-column
              type="selection"
              width="50">
            </el-table-column>
          <!-- 循环生成动态表格 -->
            <template v-for="(lb,i) in lbData">
              <el-table-column
                :key="i"
                :width="lb.width"
                :prop="lb.dm"
                :label="lb.cm">
              </el-table-column>
            </template>
            <el-table-column
              label="操作" width="70">
              <div slot-scope="scope">
                <el-button
                  type="text"
                  class="a-btn"
                  title="编辑"
                  icon="el-icon-edit-outline"
                  @click="$router.push({name:'LXSXXGLYJ_XQ',query:{row:scope.row,sh_special:true}})"
                ></el-button>
              </div>
            </el-table-column>
          </el-table>
          <div class="middle-foot">
            <div class="page-msg">
              <div class="">共{{TotalResult}}条记录</div>
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
              <div class="">共{{Math.ceil(TotalResult/pageSize)}}页</div>
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
       <!-- 简表按钮 -->
        <!-- <el-row class="mb-15">
         <el-button type="primary"  size="small" @click="jbFnc" style="float:right;margin-top:-35px">简表</el-button>
        </el-row> -->
       <!-- 简表按钮 -->
      
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
// import AREA from '../../../common/area'
import Trans from "@/components/common/Transfer.vue";
export default {
  components: { Trans },
  data() {
    return {
      //简表开始
      timer: "",
      jbDialogVisible: false,
      pointData: [], //选中项
      lbDataAll: [
        //列表总数据===简表数据源
        {
          cm: "详细地址",
          dm: "address",
          width: "280"
        },
        {
          cm: "所属分局",
          dm: "suboffice_desc",
          width: "280"
        },
        {
          cm: "所属派出所",
          dm: "policestation_desc",
          width: "280"
        },
        {
          cm: "接收时间",
          dm: "turnoutarea_receive_time"
        },
        {
          cm: "市局下发时间",
          dm: "issuedate"
        },
        {
          cm: "分局下发时间",
          dm: "suboffice_issue_time"
        },
        {
          cm: "派出所下发时间",
          dm: "policestation_issue_time"
        },
        {
          cm: "标题",
          dm: "title"
        },
        {
          cm: "备注",
          dm: "remarks"
        },
        {
          cm: "采集人",
          dm: "create_userid"
        },
        {
          cm: "数据来源",
          dm: "datasources_desc"
        }
      ],
      lbData: [], //列表简表动态加载数据====简表选中项
      //简表结束

      areaPd: {},
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: { BJSJ_DateRange: {} },
      pd0: {},
      options: this.pl.ps,
      tableData: [],
      getallfj: [],
      PSC: [],

      multipleSelection: [],
      selectionAll: [],
      yuid: [],
      selectionReal: [],

      page:'0',
      pageTab:'2',
      userCode: "",
      userName: "",
      orgCode: "",
      orgName: "",
      token: "",
      juState: ""
    };
  },
  activated() {
    if (this.juState == "2") {
      //分局登录
      this.pd.FJ = this.orgCode;
      this.getPSC(this.pd.FJ);
    }
    if (this.juState == "3") {
      //派出所登录
      this.pd.FJ = this.$store.state.pcsToju;
      this.getPSC(this.pd.FJ);
      this.pd.PCS = this.orgCode;
    }
    this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  mounted() {
    if (this.Global.serviceState == 0) {
      this.$set(this.pd, "CLZT", "CLZT_1");
    }
    if (this.Global.serviceState == 1) {
      this.$set(this.pd, "CLZT", "1");
    }
    this.lbData = this.lbDataAll; //页面加载 列表选中项 == 列表总数据源
    this.$store.dispatch("getGjdq");
    this.$store.dispatch("getClzt");
    this.$store.dispatch("getShzt");
    this.$store.dispatch("getClzt1");
    this.userCode = this.$store.state.uid;
    this.userName = this.$store.state.uname;
    this.orgName = this.$store.state.orgname;
    this.orgCode = this.$store.state.orgid;
    this.juState = this.$store.state.juState;
    this.token = this.$store.state.token;
    this.getFj();
  },
  methods: {
    titleShow(e, el) {
      el.target.title = e.label;
    },
    //=================================================简表开始=====================
    jbFnc() {
      this.timer = new Date().getTime();
      this.jbDialogVisible = true;
    },
    transSave(data) {
      this.pointData = [];
      if (data.length == 0) {
        this.lbData = this.lbDataAll;
      } else {
        this.lbDataAll.forEach(item => {
          data.forEach(jtem => {
            if (item.dm == jtem) {
              this.pointData.push(item);
            }
          });
        });
        this.lbData = this.pointData;
      }
      this.jbDialogVisible = false;
    },
    //=================================================简表结束=====================
    getFj() {
      this.$api.post(this.Global.aport5 + "/djbhl/getallfj", {}, r => {
        if (r.success) {
          this.getallfj = r.data;
        }
      });
    },
    getPSC(i) {
      this.$set(this.pd, "PCS", "");
      this.$api.post(
        this.Global.aport5 + "/djbhl/getpcsbyfjdm",
        { pd: { fjdm: i } },
        r => {
          if (r.success) {
            this.PSC = r.data;
          }
        }
      );
    },
    selectfn(a, b) {
      this.multipleSelection = a;
      this.dataSelection();
    },
    dataSelection() {
      // console.log('this.multipleSelection',this.multipleSelection)
      this.selectionReal.splice(
        this.CurrentPage - 1,
        1,
        this.multipleSelection
      );
      // console.log('this.selectionReal',this.selectionReal);
      this.selectionAll = [];
      for (var i = 0; i < this.selectionReal.length; i++) {
        if (this.selectionReal[i]) {
          for (var j = 0; j < this.selectionReal[i].length; j++) {
            this.selectionAll.push(this.selectionReal[i][j]);
          }
        }
      }
      // console.log('this.selectionAll',this.selectionAll);
    },
    download() {
      if (this.tableData.length == 0) {
        this.$message.error("无可导出数据！");
        return;
      }
      let p = {};
      this.pd = Object.assign({}, this.pd, this.areaPd);
      if (this.selectionAll.length == 0) {
        //全部导出
        p = {
          pd: this.pd,
          userCode: this.userCode,
          userName: this.userName,
          orgJB: this.juState,
          orgCode: this.orgCode,
          token: this.token
          // "orderBy":'BJSJ',
          // "orderType":'DESC'
        };
      } else {
        //导出选中
        this.yuid = [];
        for (var i in this.selectionAll) {
          this.yuid.push(this.selectionAll[i].YJID);
        }
        this.pd.YJID = this.yuid;
        p = {
          pd: this.pd,
          userCode: this.userCode,
          userName: this.userName,
          orgJB: this.juState,
          orgCode: this.orgCode,
          token: this.token
          // "orderBy":'BJSJ',
          // "orderType":'DESC',
        };
      }
      this.$api.post(
        this.Global.aport4 + "/warningInfoController/exportByMxLx",
        p,
        r => {
          this.downloadM(r);
          this.selectionAll = [];
          this.multipleSelection = [];
          this.getList(this.CurrentPage, this.pageSize, this.pd, 1);
        },
        e => {},
        {},
        "blob"
      );
    },
    downloadM(data) {
      if (!data) {
        return;
      }
      let url = window.URL.createObjectURL(
        new Blob([data], { type: "application/xls" })
      );
      let link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.setAttribute(
        "download",
        "教育厅招生预警报表" +
          this.format(new Date(), "yyyyMMddhhmmss") +
          ".xls"
      );
      document.body.appendChild(link);
      link.click();
    },
    pageSizeChange(val) {
      this.pageSize = val;
      this.getList(this.CurrentPage, val, this.pd);
    },
    handleCurrentChange(val) {
      this.CurrentPage = val;
      this.getList(val, this.pageSize, this.pd);
    },
    getArea(val) {
      this.areaPd = val;
    },
    getList(currentPage, showCount, pd, type) {
      this.pd.MXLX = "LXS_ZSYJ";
      this.pd.BJSJ_DateRange.begin = this.pd0.beginBJSJ;
      this.pd.BJSJ_DateRange.end = this.pd0.endBJSJ;
      if (pd.hasOwnProperty("YJID")) {
        delete pd["YJID"];
      }
      pd = Object.assign({}, pd, this.areaPd);
      if (type == 1) {
        this.selectionAll = [];
        this.multipleSelection = [];
        this.selectionReal = [];
      }
      let p = {
        currentPage: currentPage,
        showCount: showCount,
        pd: pd,
        userCode: this.userCode,
        userName: this.userName,
        orgJB: this.juState,
        orgCode: this.orgCode,
        token: this.token
      };
      this.$api.post(
        this.Global.aport4 + "/warningInfoController/getInfoListByMxLx1",
        p,
        r => {
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
          if (this.selectionReal.length == 0) {
            //声明一个数组对象
            this.selectionReal = new Array(
              Math.ceil(this.TotalResult / showCount)
            );
          }
          this.$nextTick(() => {
            this.multipleSelection = [];
            for (var i = 0; i < this.tableData.length; i++) {
              for (var j = 0; j < this.selectionAll.length; j++) {
                if (this.tableData[i].YJID == this.selectionAll[j].YJID) {
                  this.$refs.multipleTable.toggleRowSelection(
                    this.tableData[i],
                    true
                  );
                }
              }
            }
          });
        }
      );
    },
    getXM(zw, yw) {
      if (zw != undefined && yw != undefined) {
        return yw + "(" + zw + ")";
      } else {
        if (zw != undefined) {
          return zw;
        }
        if (yw != undefined) {
          return yw;
        }
      }
    }
  }
};
</script>
<style scoped>
</style>
