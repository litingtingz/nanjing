<template lang="html">
  <!-- 内控人员管理 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                <span class="input-text">英文姓名：</span>
                <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM" class="input-input"></el-input>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
              <span class="input-text">性别：</span>
              <el-select v-model="pd.XBDM" placeholder="请选择"  filterable clearable default-first-option size="small" class="input-input">
                <el-option
                  v-for="(item,ind1) in $store.state.xb"
                  :key="ind1"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
              <span class="input-text">出生日期：</span>
              <div class="input-input t-flex t-date">
                <el-date-picker
                    v-model="pd.CSRQKSSJ" format="yyyy-MM-dd"
                    type="date" size="small" value-format="yyyy-MM-dd"
                    placeholder="开始时间" >
                </el-date-picker>
                <span class="septum">-</span>
                <el-date-picker
                    v-model="pd.CSRQJSSJ" format="yyyy-MM-dd"
                    type="date" size="small" value-format="yyyy-MM-dd"
                    placeholder="结束时间" >
                </el-date-picker>
              </div>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                <span class="input-text">国家地区：</span>
                <el-select v-model="pd.GJDQDM" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                  <el-option
                    v-for="(item,ind1) in $store.state.gjdq"
                    :key="ind1"
                    :label="item.dm+' - '+item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                <span class="input-text">证件种类：</span>
                <el-input placeholder="请输入内容" size="small" v-model="pd.ZJZL" class="input-input"></el-input>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                <span class="input-text">证件号码：</span>
                <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="input-input"></el-input>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                <span class="input-text">签证种类：</span>
                <el-select v-model="pd.QZZL" filterable clearable  placeholder="请选择"  size="small" class="input-input">
                  <el-option
                    v-for="item in $store.state.rjqzzl"
                    :key="item.dm"
                    :label="item.dm+' - '+item.mc"
                    :value="item.dm">
                  </el-option>
                </el-select>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                <span class="input-text">居住地址：</span>
                <el-input placeholder="请输入内容" size="small" v-model="pd.JZDZ" class="input-input"></el-input>
            </el-col>
          </el-row>
         </el-col>
          <el-col :span="2" class="down-btn-area">
            <el-button type="success" size="small" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
          </el-col>
          </el-row>
    </div>
    <div class="yycontent">
      <!-- <div class="yylbt mb-15">留学生录入未报到信息导入</div> -->
      <el-row class="mb-15">
        <el-button type="primary"  size="small" @click="edits(0,'')">新增</el-button>
        <!-- <el-button type="warning"  size="small" @click="showUpload">批量导入</el-button>
        <el-button type="success" size="small" @click="download">模板下载</el-button> -->
      </el-row>
       <el-row class="mb-15">
         <el-button type="primary"  size="small" @click="jbFnc" style="float:right;margin-top:-45px">简表</el-button>
       </el-row>
      <el-table
        ref="multipleTable"
        :data="tableData"
        border
        style="width: 100%"
        @selection-change="handleSelectionChange"
        @header-click="titleShow">
        <!-- <el-table-column
          type="selection"
          width="55">
        </el-table-column> -->
        <!-- 循环生成动态表格 -->
        <template v-for="(lb,i) in lbData">
        <el-table-column
          :key="i"
          :prop="lb.dm"
          :label="lb.cm"
          :width="lb.width">
        </el-table-column>
      </template>
        <el-table-column
          label="操作" width="90">
          <div slot-scope="scope">
          <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
          <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(1,scope.row)"></el-button>
          <!-- <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row)"></el-button> -->
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
    <el-dialog title="上传模板" :visible.sync="uploadDialogVisible"  width="640px">
      <el-form>
        <el-row type="flex" class="mb-6">
          <el-col :span="24" class="input-item">
            <el-upload
              class="input-input"
              ref="upload"
              :action='actions+"/zdlxs/readExcel"'
              :file-list="fileList"
              multiple
              :on-success="upSuccess"
              :data="uploadIconData"
              :before-upload="beforeAvatarUpload"
              :limit="1"
              :auto-upload="false">
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
              <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
              <br/>
              <span slot="tip" class="el-upload__tip">只能上传EXCEL文件</span>
            </el-upload>
          </el-col>
        </el-row>
      </el-form>
    </el-dialog>
    <div>
    <el-dialog :title="dialogText" :visible.sync="editsDialogVisible" :width="'1300px'">
      <el-form   ref="editform">
        <el-row :gutter="2"  class="mb-6">
          <el-col :span="8" class="input-item">
            <span class="input-text">英文姓名：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editform.YWXM"  class="input-input"></el-input>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">性别：</span>
            <el-select v-model="editform.XBDM" placeholder="请选择" @change="getLable(1,editform.XBDM)"  filterable clearable default-first-option size="small" class="input-input">
              <el-option
                v-for="(item,ind2) in $store.state.xb"
                :key="ind2"
                :label="item.dm+' - '+item.mc"
                :value="item.dm">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">出生日期：</span>
            <el-date-picker class="input-input"
              v-model="editform.CSRQ" format="yyyy-MM-dd"
              type="date" size="small" value-format="yyyy-MM-dd"
              placeholder="选择时间" >
            </el-date-picker>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">国家地区：</span>
            <el-select v-model="editform.GJDQDM" filterable clearable default-first-option @change="getLable(2,editform.GJDQDM)" placeholder="请选择"  size="small" class="input-input">
              <el-option
                v-for="(item,ind3) in $store.state.gjdq"
                :key="ind3"
                :label="item.dm+' - '+item.mc"
                :value="item.dm">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">证件种类：</span>
            <el-select v-model="editform.ZJZL" filterable clearable default-first-option @change="getLable(3,editform.ZJZL)" placeholder="请选择"  size="small" class="input-input">
              <el-option
                v-for="(item,ind3) in $store.state.zjzl"
                :key="ind3"
                :label="item.dm+' - '+item.mc"
                :value="item.dm">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">证件号码：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editform.HZHM"  class="input-input"></el-input>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">证件有效期：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editform.ZJYXQ"  class="input-input"></el-input>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">签证种类：</span>
            <el-select v-model="editform.QZZL" filterable clearable default-first-option @change="getLable(4,editform.QZZL)" placeholder="请选择"  size="small" class="input-input">
              <el-option
                v-for="(item,ind3) in $store.state.rjqzzl"
                :key="ind3"
                :label="item.dm+' - '+item.mc"
                :value="item.dm">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">签证号码：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editform.QZHM"  class="input-input"></el-input>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">签证有效期：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editform.QZYXQ"  class="input-input"></el-input>
          </el-col>
           <el-col :span="8" class="input-item">
            <span class="input-text">居住地址：</span>
            <el-input placeholder="请输入内容" size="small" v-model="editform.JZDZ"  class="input-input"></el-input>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">所属分局：</span>
            <el-select v-model="editform.SSFJ" filterable clearable default-first-option 
            @change="getPSC(editform.SSFJ)" 
            placeholder="请选择"  size="small" class="input-input">
              <el-option
                v-for="(item,ind3) in getallfj"
                :key="ind3"
                :label="item.DM+' - '+item.MC"
                :value="item.DM">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">所属派出所：</span>
            <el-select v-model="editform.SSPCS" filterable clearable default-first-option 
            placeholder="请选择"  size="small" class="input-input"
            @change="getZrq(editform.SSPCS)"
            :disabled="juState=='3'||juState=='4'" :no-data-text="editform.SSFJ==''||editform.SSFJ==undefined?'请先选择所属分局':'无数据'">
              <el-option
                v-for="(item,ind3) in PSC"
                :key="ind3"
                :label="item.DM+' - '+item.MC"
                :value="item.DM">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8" class="input-item">
            <span class="input-text">所属责任区：</span>
            <el-select v-model="editform.SSZRQ" filterable clearable default-first-option 
            placeholder="请选择"  size="small" class="input-input"
            :no-data-text="editform.SSFJ==''||editform.SSFJ==undefined?'请先选择所属分局':editform.SSPCS==''||editform.SSPCS==undefined?'请先选择派出所':'无数据'">
              <el-option
                v-for="(item,ind3) in zrq"
                :key="ind3"
                :label="item.dm+' - '+item.mc"
                :value="item.dm">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
          <el-row :gutter="2" v-show="dialogText=='编辑'">
            <el-col :span="8" class="input-item">
              <span class="input-text">申报人：</span>
              <el-input placeholder="请输入内容" size="small" :disabled="true" v-model="editform.SBR"  class="input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">申报单位：</span>
              <el-input placeholder="请输入内容" size="small" :disabled="true" v-model="editform.SBDW"  class="input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">申报时间：</span>
              <el-input placeholder="请输入内容" size="small" :disabled="true" v-model="editform.SBSJ"  class="input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改人：</span>
              <el-input placeholder="请输入内容" size="small" :disabled="true" v-model="editform.XGR"  class="input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改单位：</span>
              <el-input placeholder="请输入内容" size="small" :disabled="true" v-model="editform.CZDWID"  class="input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改时间：</span>
              <el-input placeholder="请输入内容" size="small" :disabled="true" v-model="editform.CZSJ"  class="input-input"></el-input>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="editsItem('editForm')" size="small">确 定</el-button>
          <el-button @click="editsDialogVisible = false" size="small">取 消</el-button>
        </div>
    </el-dialog>
    </div>
    <el-dialog title="详情" :visible.sync="detailsDialogVisible" :width="'1300px'">
      <el-form   ref="mapForm" :disabled="true">
        <el-row :gutter="2"  class="mb-6">
            <el-col :span="8" class="input-item">
            <span class="input-text">英文姓名：</span>
            <span class="input-input detailinput ellipsis" :title="mapForm.YWXM">  {{mapForm.YWXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">性别：</span>
              <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">出生日期：</span>
              <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">国家地区：</span>
              <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件种类：</span>
              <span class="input-input detailinput">  {{mapForm.ZJZL}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件号码：</span>
              <span class="input-input detailinput">  {{mapForm.HZHM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">证件有效期：</span>
              <span class="input-input detailinput">  {{mapForm.ZJYXQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">签证种类：</span>
              <span class="input-input detailinput">  {{mapForm.QZZL}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">签证号码：</span>
              <span class="input-input detailinput">  {{mapForm.QZHM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="签证有效期">签证有效期：</span>
              <span class="input-input detailinput">  {{mapForm.QZYXQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">居住地址：</span>
              <span class="input-input detailinput ellipsis" :title="mapForm.JZDZ">  {{mapForm.JZDZ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">所属分局：</span>
              <span class="input-input detailinput">  {{mapForm.SSFJ_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="所属派出所">所属派出所：</span>
              <span class="input-input detailinput">  {{mapForm.SSPCS_DESC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">所属责任区：</span>
              <span class="input-input detailinput">  {{mapForm.SSZRQ}}</span>
            </el-col>
        </el-row>
        <el-row :gutter="2">
            <el-col :span="8" class="input-item">
              <span class="input-text">申报人：</span>
              <span class="input-input detailinput">{{mapForm.SBR}}</span>              
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">申报单位：</span>
              <span class="input-input detailinput">{{mapForm.SBDW}}</span>  
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">申报时间：</span>
              <span class="input-input detailinput">{{mapForm.SBSJ}}</span>  
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改人：</span>
              <span class="input-input detailinput">{{mapForm.XGR}}</span>  
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改单位：</span>
              <span class="input-input detailinput">{{mapForm.CZDWID}}</span>                
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改时间：</span>
              <span class="input-input detailinput">{{mapForm.CZSJ}}</span>  
            </el-col>
        </el-row>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="detailsDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
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
          dm:'YWXM',
          cm:'英文姓名',
          width:'150'
        },
        {
          dm:'XBMC',
          cm:'性别',
        },
        // {
        //   dm:'CSRQ',
        //   cm:'出生日期',
        // },
        {
          dm:'GJDQMC',
          cm:'国籍地区'
        },
        {
          dm:'ZJZL',
          cm:'证件种类',
        },
        {
          dm:'HZHM',
          cm:'证件号码'
        },
        // {
        //   dm:'ZJYXQ',
        //   cm:'证件有效期'
        // },
        {
          dm:'QZZL',
          cm:'签证种类'
        },
        // {
        //   dm:'QZHM',
        //   cm:'签证号码'
        // },
        // {
        //   dm:'QZYXQ',
        //   cm:'签证有效期'
        // },
        {
          dm:'JZDZ',
          cm:'居住地址',
          width:'220'
        },
        {
          dm:'SSFJ_DESC',
          cm:'所属分局'
        },
        {
          dm:'SSPCS_DESC',
          cm:'所属派出所',
          width:'150'
        },
        // {
        //   dm:'SSZRQ',
        //   cm:'所属责任区'
        // },
        // {
        //   dm:'SBR',
        //   cm:'申报人'
        // },
        // {
        //   dm:'SBDW',
        //   cm:'申报单位',
        //   width:'160'
        // },
        {
          dm:'SBSJ',
          cm:'申报时间',
        },
        // {
        //   dm:'XGR',
        //   cm:'修改人'
        // },
        // {
        //   dm:'CZDWID',
        //   cm:'修改单位',
        //   width:'100'
        // },
        // {
        //   dm:'CZSJ',
        //   cm:'修改时间'
        // },
      ],
      lbData:[],//列表简表动态加载数据====简表选中项
      //简表结束
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      pd: {},
      nation: [],
      fileList: [],
      actions: "",
      dialogText:'新增',
      uploadDialogVisible: false,
      detailsDialogVisible:false,
      editsDialogVisible:false,
      editform:{CSRQ:"",ZJHM:''},
      uploadIconData:{token:this.$store.state.token},
      mapForm:{},
      options:this.pl.options,
      tableData: [],
      isadd:0,

      getallfj: [],
      PSC: [],
      zrq:[],

      userCode: "",
      userName: "",
      orgCode: "",
      orgName: "",
      token: "",
      juState: ""
    }
  },
  mounted() {
    this.lbData = this.lbDataAll//页面加载 列表选中项 == 列表总数据源
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXB');
    this.$store.dispatch('getXzqh');
    this.$store.dispatch('getHyzt');
    this.$store.dispatch('getZjxy');
    this.$store.dispatch('getRjqzzl');
    this.$store.dispatch('getZjzl');
    this.userCode = this.$store.state.uid;
    this.userName = this.$store.state.uname;
    this.orgName = this.$store.state.orgname;
    this.orgCode = this.$store.state.orgid;
    this.juState = this.$store.state.juState;
    this.token = this.$store.state.token;
    this.getFj();
    this.getList(this.CurrentPage, this.pageSize, this.pd);
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
    getFj(){
      this.$api.post(this.Global.aport5+'/djbhl/getallfj',{userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r =>{
         if(r.success){
           this.getallfj=r.data;
         }
       })
    },
    getPSC(i,flag){
      if(!flag){
        this.$set(this.editform,'SSPCS','');
        this.$set(this.editform,'SSZRQ','');
      }
      this.$api.post(this.Global.aport5+'/djbhl/getpcsbyfjdm',{pd:{fjdm:i},userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
      r =>{
        if(r.success){
          this.PSC=r.data;
        }
      })
    },
    getZrq(arr,flag) {
      if(!flag){this.$set(this.pd,'SSZRQ','')}
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
    titleShow(e,el){
      el.target.title = e.label;
    },
    getLable(t,val){
      if(t==1){//性别
        let obj = {};
         obj = this.$store.state.xb.find((item)=>{
             return item.dm === val;
         });
         this.editform.XBMC = obj.mc;
      }
      if(t==2){
        let obj = {};
         obj = this.$store.state.gjdq.find((item)=>{
             return item.dm === val;
         });
         this.editform.GJDQMC = obj.mc;
      }
      if(t==3){//实际留学城市
        let obj = {};
         obj = this.$store.state.xzqh.find((item)=>{
             return item.dm === val;
         });
         this.editform.SJLXCSMC = obj.mc;
      }
      if(t==4){//婚姻状况
        let obj = {};
         obj = this.$store.state.hyzt.find((item)=>{
             return item.dm === val;
         });
         this.editform.HYZKMC = obj.mc;
      }
      if(t==5){//宗教信仰
        let obj = {};
         obj = this.$store.state.zjxy.find((item)=>{
             return item.dm === val;
         });
         this.editform.ZJXYMC = obj.mc;
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val, this.pd);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize, this.pd);
    },
    getList(currentPage, showCount, pd) {
      let p = {
        currentPage: currentPage,
        showCount: showCount,
        pd: pd,
        token:this.$store.state.token
      };
      // this.$api.post(this.Global.aport3+'/zdlxs/getZdlxsPage', p,
      //   r => {
        let r={
          "code":-1,
          "data":{
            "currentPage":1,
            "currentResult":0,
            "direction":0,
            "endResult":0,
            "entityOrField":true,
            "log":{},
            "nextState":0,
            "pd":{"CZDWID":"3201"},
            "pdList":[],
            "resultList":[
              {"SBSJ":"2020-09-01","XGR":"管理员","ZJZL":"普通护照","QZZL":"旅游签证","QZHM":"K7632773","SBR":"1211","SBDW":"出入境管理支队（第十处）","JZDZ":"江苏南京市栖霞区家天下花园星月园4幢2号","SSFJ":"320106000000","SSPCS":"320106780000","SSFJ_DESC":"鼓楼分局","SSPCS_DESC":"鼓楼分局二板桥派出所","SSZRQ":"","GZHXXDW":"RAJSHRI SHAHU COLLEGE","ZGXL":"高中","CZDWID":"南京市公安局","BDJZRQ":"2020-09-11","CZSJ":"2021-02-03 15:42:18","ZJXYMC":"-","ZWXM":"1111","RXXQ":"-","XBDM":"2","GJDQMC":"印度","SKYY":"英语","SJLXCSMC":"江苏南京市","XXDM":"4132010286","GJDQDM":"IND","BDKSRQ":"2020-09-07","XBMC":"女","SJLXCSDM":"320100","XXJZRQ":"2026-07-15","RYBH":"BA69CFE80B3559E5E0530100007F0BF8","XGDWID":"南京市公安局","XGSJ":"2021-02-03 17:22:10","CSRQ":"1999-09-06","YXZT":"1","HZHM":"U2929377","ZYZWMC":"临床医学（英）","YWXM":"GOKHALE TANISKSHA SATISH","CZR":"管理员","QZYXQ":"2020-12-23","ZJYXQ":"2020-09-01","RN":2,"XXMC":"东南大学"},
              {"SBSJ":"2021-03-01","XGR":"管理员","ZJZL":"普通护照","QZZL":"贸易签证","QZHM":"L5227693","SBR":"1211","SBDW":"出入境管理支队（第十处）","JZDZ":"江苏南京市鼓楼区中央路311号211室","SSFJ":"320102000000","SSPCS":"320102740000","SSFJ_DESC":"玄武分局","SSPCS_DESC":"玄武分局板仓派出所","SSZRQ":"","GZHXXDW":"南京财经大学","ZGXL":"高中","CZDWID":"南京市公安局","BDJZRQ":"2021-02-08","CZSJ":"2021-02-03 15:42:18","ZJXYMC":"无宗教信仰","ZWXM":"朴财利","RXXQ":"-","XBDM":"2","GJDQMC":"韩国","SKYY":"汉语;中文","SJLXCSMC":"江苏南京市","XXDM":"4132010327","GJDQDM":"KOR","BDKSRQ":"2021-01-30","XBMC":"女","SJLXCSDM":"320100","ZJXYDM":"00","XXJZRQ":"2024-06-30","RYBH":"BA69CFE80B3659E5E0530100007F0BF8","CSRQ":"2001-11-26","YXZT":"1","HZHM":"M13498596","ZYZWMC":"市场营销","YWXM":"PARK JAY","CZR":"管理员","QZYXQ":"2020-12-23","ZJYXQ":"2021-03-01","RN":3,"XXMC":"南京财经大学"},
              {"SBSJ":"2021-02-22","XGR":"管理员","ZJZL":"普通护照","QZZL":"旅游签证","QZHM":"L0641599","SBR":"1211","SBDW":"出入境管理支队（第十处）","JZDZ":"江苏南京市玄武区进香河路33号16幢302室","SSFJ":"320113000000","SSPCS":"320113720000","SSFJ_DESC":"栖霞分局","SSPCS_DESC":"栖霞分局仙林派出所","SSZRQ":"","GZHXXDW":"韩国外国语大学","ZGXL":"本科","CZDWID":"南京市公安局","BDJZRQ":"2021-02-21","CZSJ":"2021-02-03 15:42:17","ZJXYMC":"天主教","ZWXM":"-","RXXQ":"-","XBDM":"1","GJDQMC":"韩国","SKYY":"汉语;中文","SJLXCSMC":"江苏南京市","XXDM":"4132010315","GJDQDM":"KOR","BDKSRQ":"2021-02-20","XBMC":"男","SJLXCSDM":"320100","ZJXYDM":"40","XXJZRQ":"2021-06-30","RYBH":"BA69CFE80B2B59E5E0530100007F0BF8","CSRQ":"1996-07-08","YXZT":"1","HZHM":"M05340735","ZYZWMC":"汉语","YWXM":"PARK GEONHO","CZR":"管理员","QZYXQ":"2020-12-21","ZJYXQ":"2021-02-22","RN":4,"XXMC":"南京中医药大学"},
              {"SBSJ":"2021-03-01","XGR":"管理员","ZJZL":"普通护照","QZZL":"贸易签证","QZHM":"L0495355","SBR":"1211","SBDW":"出入境管理支队（第十处）","JZDZ":"江苏南京市鼓楼区定淮门大街20号五单元502室","SSFJ":"320106000000","SSPCS":"320106640000","SSFJ_DESC":"鼓楼分局","SSPCS_DESC":"鼓楼分局江东派出所","SSZRQ":"","GZHXXDW":"NANJING AGRICULTURAL UNIVERSITY","ZGXL":"硕士","CZDWID":"南京市公安局","BDJZRQ":"2021-03-31","CZSJ":"2021-02-03 15:42:17","ZJXYMC":"基督教","ZWXM":"-","RXXQ":"-","XBDM":"1","GJDQMC":"厄立特里亚","SKYY":"汉语;中文","SJLXCSMC":"江苏南京市","XXDM":"4132010298","GJDQDM":"ERI","BDKSRQ":"2021-01-01","XBMC":"男","SJLXCSDM":"320100","ZJXYDM":"50","XXJZRQ":"2022-12-31","RYBH":"BA69CFE80B3159E5E0530100007F0BF8","CSRQ":"1986-10-20","YXZT":"1","HZHM":"K0484205","ZYZWMC":"汉语言","YWXM":"WOLDEMICAEL ABESELOM GHIRMAI","CZR":"管理员","QZYXQ":"2020-12-23","RXSJ":"2021-03-01","RN":5,"XXMC":"南京林业大学"},
              {"SBSJ":"2014-09-11","XGR":"管理员","ZJZL":"普通护照","QZZL":"旅游签证","QZHM":"L0816815","SBR":"1211","SBDW":"出入境管理支队（第十处）","JZDZ":"江苏南京市鼓楼区汇贤居2号1102室","SSFJ":"320115000000","SSPCS":"320115590000","SSFJ_DESC":"江宁分局","SSPCS_DESC":"江宁分局高新区派出所","SSZRQ":"","GZHXXDW":"-","ZGXL":"本科","CZDWID":"南京市公安局","BDJZRQ":"2018-09-12","CZSJ":"2021-02-03 15:42:17","ZJXYMC":"无宗教信仰","ZWXM":"金容鉐","RXXQ":"-","XBDM":"1","GJDQMC":"韩国","SKYY":"汉语;中文","SJLXCSMC":"江苏南京市","XXDM":"4132010284","GJDQDM":"KOR","BDKSRQ":"2018-09-03","XBMC":"男","SJLXCSDM":"320100","ZJXYDM":"00","XXJZRQ":"2021-06-30","RYBH":"BA69CFE80B3059E5E0530100007F0BF8","CSRQ":"1994-03-17","YXZT":"1","HZHM":"M37942237","ZYZWMC":"市场营销","YWXM":"KIM YONGSUK","CZR":"管理员","QZYXQ":"2020-12-22","ZJYXQ":"2014-09-11","RN":6,"XXMC":"南京大学"},
              {"SBSJ":"2021-03-01","XGR":"管理员","ZJZL":"普通护照","QZZL":"贸易签证","QZHM":"L2486111","SBR":"1211","SBDW":"出入境管理支队（第十处）","JZDZ":"江苏南京市玄武区东苑路1号银城东苑毓秀园3幢904室","SSFJ":"320106000000","SSPCS":"320106660000","SSFJ_DESC":"鼓楼分局","SSPCS_DESC":"鼓楼分局汉中门派出所","SSZRQ":"","GZHXXDW":"Hohai University","ZGXL":"硕士","CZDWID":"南京市公安局","BDJZRQ":"2021-03-02","CZSJ":"2021-02-03 15:42:17","ZJXYMC":"无宗教信仰","ZWXM":"施佩妮","RXXQ":"-","XBDM":"2","GJDQMC":"苏里南","SKYY":"汉语;中文","SJLXCSMC":"江苏南京市","XXDM":"4132010294","GJDQDM":"SUR","BDKSRQ":"2021-03-01","XBMC":"女","SJLXCSDM":"320100","ZJXYDM":"00","XXJZRQ":"2022-01-15","RYBH":"BA69CFE80B2F59E5E0530100007F0BF8","CSRQ":"1991-03-21","YXZT":"1","HZHM":"R1417905","ZYZWMC":"汉语","YWXM":"STIPPEL DAPHNEY MARUSCHKA CHARMAINE","CZR":"管理员","QZYXQ":"2020-12-22","RXSJ":"2021-03-01","RN":7,"XXMC":"河海大学"},
              {"SBSJ":"2015-09-07","XGR":"管理员","ZJZL":"普通护照","QZZL":"旅游签证","QZHM":"J0786100","SBR":"1211","SBDW":"出入境管理支队（第十处）","JZDZ":"江苏南京市玄武区环陵路9号","SSFJ":"320102000000","SSPCS":"320102580000","SSFJ_DESC":"玄武分局","SSPCS_DESC":"玄武分局新街口派出所","SSZRQ":"","GZHXXDW":"大圣高中","ZGXL":"高中","CZDWID":"南京市公安局","BDJZRQ":"2021-01-10","CZSJ":"2021-02-03 15:42:17","ZJXYMC":"天主教","ZWXM":"李承俊","RXXQ":"-","XBDM":"1","GJDQMC":"韩国","SKYY":"汉语;中文","SJLXCSMC":"江苏南京市","XXDM":"4132010284","GJDQDM":"KOR","BDKSRQ":"2015-09-07","XBMC":"男","SJLXCSDM":"320100","ZJXYDM":"40","XXJZRQ":"2021-07-01","RYBH":"BA69CFE80B2E59E5E0530100007F0BF8","CSRQ":"1996-07-29","YXZT":"1","HZHM":"M76240434","ZYZWMC":"市场营销","YWXM":"LEE SEONG JUN","CZR":"管理员","QZYXQ":"2020-12-22","ZJYXQ":"2015-09-07","RN":8,"XXMC":"南京大学"},
              {"SBSJ":"2021-03-01","XGR":"管理员","ZJZL":"普通护照","QZZL":"贸易签证","QZHM":"L7857823","SBR":"1211","SBDW":"出入境管理支队（第十处）","JZDZ":"江苏南京市鼓楼区长江之家公寓14号1704室","SSFJ":"320104000000","SSPCS":"320104780000","SSFJ_DESC":"秦淮分局","SSPCS_DESC":"秦淮分局月牙湖派出所","SSZRQ":"","GZHXXDW":"南京财经大学","ZGXL":"高中","CZDWID":"南京市公安局","BDJZRQ":"2021-02-08","CZSJ":"2021-02-03 15:42:17","ZJXYMC":"无宗教信仰","ZWXM":"崔有辰","RXXQ":"-","XBDM":"2","GJDQMC":"韩国","SKYY":"汉语;中文","SJLXCSMC":"江苏南京市","XXDM":"4132010327","GJDQDM":"KOR","BDKSRQ":"2021-01-30","XBMC":"女","SJLXCSDM":"320100","ZJXYDM":"00","XXJZRQ":"2021-06-30","RYBH":"BA69CFE80B2D59E5E0530100007F0BF8","CSRQ":"1998-08-10","YXZT":"1","HZHM":"M10587243","ZYZWMC":"金融学","YWXM":"CHOI YOUJIN","CZR":"管理员","QZYXQ":"2020-12-22","ZJYXQ":"2021-03-01","RN":9,"XXMC":"南京财经大学"},
              {"SBSJ":"2021-03-01","XGR":"管理员","ZJZL":"普通护照","QZZL":"贸易签证","QZHM":"L7616817","SBR":"1211","SBDW":"出入境管理支队（第十处）","JZDZ":"江苏南京市玄武区后半山园2号19幢502室","SSFJ":"320102000000","SSPCS":"320102520000","SSFJ_DESC":"玄武分局","SSPCS_DESC":"玄武分局后宰门派出所","SSZRQ":"","GZHXXDW":"南京财经大学","ZGXL":"高中","CZDWID":"南京市公安局","BDJZRQ":"2021-02-08","CZSJ":"2021-02-03 15:42:17","ZJXYMC":"基督教","ZWXM":"朴洪植","RXXQ":"-","XBDM":"1","GJDQMC":"韩国","SKYY":"汉语;中文","SJLXCSMC":"江苏南京市","XXDM":"4132010327","GJDQDM":"KOR","BDKSRQ":"2021-01-30","XBMC":"男","SJLXCSDM":"320100","ZJXYDM":"50","XXJZRQ":"2021-06-30","RYBH":"BA69CFE80B2C59E5E0530100007F0BF8","CSRQ":"1998-06-05","YXZT":"1","HZHM":"M22912433","ZYZWMC":"国际经济与贸易","YWXM":"PARK HONGSIK","CZR":"管理员","QZYXQ":"2020-12-22","ZJYXQ":"2021-03-01","RN":10,"XXMC":"南京财经大学"}],
              "showCount":10,"token":"6c20b8f6-ffd2-41af-b9dd-1c1716bd41aa","totalPage":1,"totalResult":9},"success":true}
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        // })
    },
    details(n){
      this.detailsDialogVisible=true;
      this.mapForm=n;
    },
    edits(t,n){
      this.editsDialogVisible=true;
      if(t==1){
        this.isadd=1;
        this.editform=Object.assign({}, n);
        this.dialogText="编辑";
        this.getPSC(this.editform.SSFJ,true);
        this.getZrq(this.editform.SSPCS,true);
      }else {
        this.isadd=0;
        this.editform={CSRQ:"",ZJHM:""};
        this.dialogText="新增";
        if(this.juState=='2'){//分局登录
          this.editform.SSFJ = this.orgCode
          this.getPSC(this.orgCode);
        }
        if(this.juState=='3'){//派出所登录
          this.editform.SSFJ = this.$store.state.pcsToju;
          this.getPSC(this.$store.state.pcsToju);
          this.editform.SSPCS = this.orgCode;
        }
        if(this.juState=='4'){
          this.editform.SSFJ = this.$store.state.pcsToju;
          this.getPSC(this.editform.SSFJ);
          this.editform.SSPCS = this.$store.state.zrqTopcs;
          this.getZrq(this.editform.SSPCS);
        }
      }
      this.V.$reset('demo');
    },
    editsItem(){
      this.editsDialogVisible = false;
      // this.V.$submit('demo',(canSumit,data) =>{
      //   if(!canSumit) return;
      //   this.editform.token=this.$store.state.token;
      //   var url=this.Global.aport3+'/zdlxs/addZdlxs';
      //   if(this.isadd==1){//编辑
      //     url=this.Global.aport3+'/zdlxs/updateZdlxs';
      //   }
      //   this.$api.post(url, this.editform,
      //   r => {
      //     if(r.code=="1000001"){
      //         window.location.href ="#/";
      //     }
      //     if (r.success) {
      //       this.$message({
      //         message: '保存成功！',
      //         type: 'success'
      //       });
      //       this.editsDialogVisible = false;
      //       this.getList(this.CurrentPage,this.pageSize,this.pd);
      //     } else {
      //       this.$message.error(r.Message);
      //     }
      //   }, e => {
      //     this.$message.error('失败了');
      //   });
      // })
    },
    deletes(i) {
    let p = {
      "RYBH": i.RYBH,
      "token":this.$store.state.token
    };
    this.$confirm('您是否确认删除？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      // http://10.0.30.53:9439/drlzbk/deleteLZBKById
      this.$api.post(this.Global.aport3+'/zdlxs/deleteZdlxsById', p,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          if (r.success) {
            this.$message({
              message: '删除成功！',
              type: 'success'
            });
            this.getList(this.CurrentPage, this.pageSize, this.pd);
          } else {
            this.$message.error(r.Message);
          }
        }, e => {
          this.$message.error('失败了');
        });
    }).catch(() => {
      this.$message({
        type: 'info',
        message: '已取消删除'
      });
    });
  },
    upSuccess(r) {
      if (r.success) {
        this.$message({
          message: r.data,
          type: 'success'
        });
      } else {
        if(r.errorExportByte){
          this.downLoadCom(r.errorExportByte);
        }
        this.$message.error(r.message);
      }
      this.uploadDialogVisible = false;
      this.getList(this.CurrentPage, this.pageSize, this.pd);
    },
    beforeAvatarUpload(file) {
      // console.log(file.type)
      // const isEXL = file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      // const isExls=file.type==='application/vnd.ms-excel';
      //
      // if (!isEXL && !isExls) {
      //   this.$message.error('上传文件只能是 xlsx或者xls 格式!');
      // }
      // return isEXL?isEXL:isExls;
    },
    showUpload() {
      this.uploadDialogVisible = true;
      this.typemd = "";
      this.actions = window.IPConfig.IP+this.Global.aport3;
      // this.actions="http://10.0.30.63:9439/"
      if (this.$refs.upload) {
        this.$refs.upload.clearFiles();
      }
    },
    submitUpload() {
      if (this.$refs.upload.uploadFiles.length == 0) {
        this.$message({
          message: '请先选择文件！',
          type: 'warning'
        });
        return
      }
      this.$refs.upload.submit();
    },
    download() {
       window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/202数据导入模板.xlsx'
    },
  }
}
</script>

<style scoped>
.input-text{ width: 30%!important;}
</style>
<style>

</style>
