<template lang="html">
  <!-- 临住布控人员导入 -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XM" class="input-input"></el-input>
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
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">身份证号：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.SFZH" class="input-input"></el-input>
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
                   <span class="input-text">标题：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.BT" class="input-input"></el-input>
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
        <el-button type="warning"  size="small" @click="showUpload">批量导入</el-button>
        <el-button type="success" size="small" @click="download">模板下载</el-button>
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
              :label="lb.cm">
            </el-table-column>
          </template>
           <!-- <el-table-column
             prop="BT"
             label="标题">
           </el-table-column>
           <el-table-column
             prop="XM"
             label="姓名">
           </el-table-column>
           <el-table-column
             prop="XBMC"
             label="性别">
           </el-table-column>
           <el-table-column
             prop="CSRQ"
             label="出生日期">
           </el-table-column>
           <el-table-column
             prop="ZJHM"
             label="证件号码">
           </el-table-column>
           <el-table-column
             prop="SFZH"
             label="身份证号">
           </el-table-column>
           <el-table-column
             prop="BKRQSTART"
             label="布控开始时间">
           </el-table-column>
           <el-table-column
             prop="BKRQEND"
             label="布控结束时间">
           </el-table-column>
           <el-table-column
             prop="GJDQMC"
             label="国家地区">
           </el-table-column> -->

           <el-table-column
             label="操作" width="90">
             <div slot-scope="scope">
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="details(scope.row)"></el-button>
                <el-button type="text"  class="a-btn"  title="编辑"  icon="el-icon-edit" @click="edits(1,scope.row)"></el-button>
                <el-button type="text"  class="a-btn"  title="删除"  icon="el-icon-delete" @click="deletes(scope.row)"></el-button>
             </div>
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

      <el-dialog title="上传模板" :visible.sync="uploadDialogVisible"  width="640px">

      <el-form>
      <el-row type="flex" class="mb-6">
       <el-col :span="24" class="input-item">
            <el-upload
              class="input-input"
              ref="upload"
              :action='actions+"/drlzbk/readExcel"'
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


<div v-if="editsDialogVisible">
  <el-dialog :title="dialogText" :visible.sync="editsDialogVisible">
    <el-form   ref="editform">
      <el-row :gutter="2"  class="mb-6">
        <el-col :span="12" class="input-item">
          <span class="input-text">姓名：</span>
          <el-input placeholder="请输入内容" size="small" v-model="editform.XM"  class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
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
        <el-col :span="12" class="input-item yzform" data-scope="demo" data-name="ZJHM" data-type="input"
         v-validate-easy="[['required']]">
          <span class="input-text"><font class="redx">*</font>证件号码：</span>
          <el-input placeholder="请输入内容" size="small" v-model="editform.ZJHM"  class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">身份证号：</span>
          <el-input placeholder="请输入内容" size="small" v-model="editform.SFZH"  class="input-input"></el-input>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">出生日期：</span>
          <el-date-picker class="input-input"
             v-model="editform.CSRQ" format="yyyy-MM-dd"
             type="date" size="small" value-format="yyyy-MM-dd"
             placeholder="选择时间" >
          </el-date-picker>
        </el-col>
        <el-col :span="12" class="input-item yzform" data-scope="demo" data-name="GJDQDM" data-type="select"
         v-validate-easy="[['required']]">
          <span class="input-text"><font class="redx">*</font>国家地区：</span>
          <el-select v-model="editform.GJDQDM" filterable clearable default-first-option @change="getLable(2,editform.GJDQDM)" placeholder="请选择"  size="small" class="input-input">
            <el-option
              v-for="(item,ind3) in $store.state.gjdq"
              :key="ind3"
              :label="item.dm+' - '+item.mc"
              :value="item.dm">
            </el-option>
          </el-select>
        </el-col>
        <el-col  :span="12" class="input-item">
          <span class="input-text">布控时间段：</span>
          <div class="input-input t-flex ">
            <el-date-picker
               v-model="editform.BKRQSTART" format="yyyy-MM-dd"
               type="date" size="small" value-format="yyyy-MM-dd"
               placeholder="开始时间" >
            </el-date-picker>
            <span class="septum">-</span>
            <el-date-picker
                v-model="editform.BKRQEND" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy-MM-dd"
                placeholder="结束时间" >
            </el-date-picker>
         </div>
        </el-col>
      </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="editsItem('editForm')" size="small">确 定</el-button>
        <el-button @click="editsDialogVisible = false" size="small">取 消</el-button>
      </div>
  </el-dialog>
  </div>
  <el-dialog title="详情" :visible.sync="detailsDialogVisible">
    <el-form   ref="mapForm">
      <el-row :gutter="2"  class="mb-6">
          <el-col :span="12" class="input-item">
           <span class="input-text">标题：</span>
           <span class="input-input detailinput">  {{mapForm.BT}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
           <span class="input-text">姓名：</span>
           <span class="input-input detailinput">  {{mapForm.XM}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">性别：</span>
            <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
           <span class="input-text">证件号码：</span>
           <span class="input-input detailinput">  {{mapForm.ZJHM}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
           <span class="input-text">身份证号：</span>
           <span class="input-input detailinput">  {{mapForm.SFZH}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">出生日期：</span>
            <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">国家地区：</span>
            <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text" title="布控开始时间">布控开始时间：</span>
            <span class="input-input detailinput">  {{mapForm.BKRQSTART}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text" title="布控结束时间">布控结束时间：</span>
            <span class="input-input detailinput">  {{mapForm.BKRQEND}}</span>
          </el-col>
      </el-row>
      <el-row :gutter="2">
          <el-col :span="12" class="input-item">
            <span class="input-text">操作人：</span>
            <span class="input-input detailinput">  {{mapForm.CZR}}</span>
          </el-col>
          <el-col :span="12" class="input-item">
            <span class="input-text">操作日期：</span>
            <span class="input-input detailinput">  {{mapForm.CZSJ}}</span>
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
          dm:'BT',
          cm:'标题',
        },
        {
          dm:'XM',
          cm:'姓名',
        },
        {
          dm:'XBMC',
          cm:'性别',
        },
        {
          dm:'CSRQ',
          cm:'出生日期'
        },
        {
          dm:'ZJHM',
          cm:'证件号码'
        },
        {
          dm:'SFZH',
          cm:'身份证号'
        },
        {
          dm:'BKRQSTART',
          cm:'布控开始时间'
        },
        {
          dm:'BKRQEND',
          cm:'布控结束时间'
        },
        {
          dm:'GJDQMC',
          cm:'国家地区'
        },
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
    }
  },
  mounted() {
    this.lbData = this.lbDataAll//页面加载 列表选中项 == 列表总数据源
    this.$store.dispatch('getGjdq');
    this.$store.dispatch('getXB');
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
        "currentPage": currentPage,
        "showCount": showCount,
        "pd": pd,
        "token":this.$store.state.token
      };
      this.$api.post(this.Global.aport3+'/drlzbk/getLZBKPage', p,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
    },
    details(n)
    {
      this.detailsDialogVisible=true;
      this.mapForm=n;
    },
    edits(t,n){
      this.editsDialogVisible=true;
      if(t==1){
      this.isadd=1;
      // this.$set(this.editform,'ZJHM',n.ZJHM);
      this.editform=Object.assign({}, n);

      // console.log(this.editform.ZJHM,n.ZJHM);
      this.dialogText="编辑";
    }else {
      this.isadd=0;
      this.editform={CSRQ:"",ZJHM:""};
      this.dialogText="新增";
    }
    this.V.$reset('demo');

    },
    editsItem(){
      this.V.$submit('demo',(canSumit,data) =>{
        if(!canSumit) return;
        this.editform.token=this.$store.state.token;
        var url=this.Global.aport3+'/drlzbk/addLZBK';
        if(this.isadd==1){
          url=this.Global.aport3+'/drlzbk/updateLZBK';
        }
        this.$api.post(url, this.editform,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          if (r.success) {
            this.$message({
              message: '保存成功！',
              type: 'success'
            });
            this.editsDialogVisible = false;
            this.getList(this.CurrentPage,this.pageSize,this.pd);
          } else {
            this.$message.error(r.Message);
          }
          // this.$refs[afrom].resetFields();

        }, e => {
          this.$message.error('失败了');
        });
      })
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
      this.$api.post(this.Global.aport3+'/drlzbk/deleteLZBKById', p,
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
      console.log(this.$refs.upload)
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
       window.location.href = window.IPConfig.IP +"/"+this.Global.aport3 + '/webapp/templateFile/临住布控导入模板.xlsx'
    },
  }
}
</script>

<style scoped>
.input-text{ width: 30%!important;}
</style>
<style>

</style>
