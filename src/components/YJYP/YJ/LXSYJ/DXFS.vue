<template lang="html">
  <!-- 短信发送界面  -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">类型：</span>
                    <el-select v-model="pd.TYPE" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input" @change="bclxChange">
                      <el-option value="1" label="常驻人员"></el-option>
                      <el-option value="2" label="临住人员"></el-option>                  
                      <el-option value="3" label="难民和寻求庇护者"></el-option>                  
                    </el-select>
                </el-col>
                <!-- 常驻 -->
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="zwxm">
                   <span class="input-text">中文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="xm">
                   <span class="input-text">姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XM" class="input-input"></el-input>
                </el-col>
                <!-- 常驻 -->
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="isLzry">
                   <span class="input-text">英文姓：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWX" class="input-input"></el-input>
                </el-col>
                <!-- 常驻 -->
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="isLzry">
                   <span class="input-text">英文名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="isLzry1">
                   <span class="input-text">英文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.YWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="isNm">
                   <span class="input-text">案卷编号：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.AJBH" class="input-input"></el-input>
                </el-col>                
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="isNm">
                   <span class="input-text">护照号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.HZHM" class="input-input"></el-input>
                </el-col>                
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="isNm">
                   <span class="input-text">详细地址：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.XXDZ" class="input-input"></el-input>
                </el-col>
                <!-- 常驻 -->
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item" v-if="isLzry">
                    <span class="input-text">身份：</span>
                    <el-select v-model="pd.SFDM"  filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.sf"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <!-- 常驻 -->
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="isCzry1">
                   <span class="input-text" >服务处所：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.FWCS" class="input-input"></el-input>
                </el-col>
                <!-- 常驻 -->
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item" v-if="isNm1">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="pd.GJDQ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option
                        v-for="item in $store.state.gjdq"
                        :key="item.dm"
                        :label="item.dm+' - '+item.mc"
                        :value="item.dm">
                      </el-option>
                    </el-select>
                </el-col>
                <!-- 常住人员隐藏 -->
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="czzs">
                   <span class="input-text">住宿地址：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.LSDEDZ_Like" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="lzzs">
                   <span class="input-text">住宿地址：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.LSDWDZ" class="input-input"></el-input>
                </el-col>
                <!-- <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="chdh">
                   <span class="input-text" >电话：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.LXDH" class="input-input"></el-input>
                </el-col> -->
                <!-- <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="lzdh">
                   <span class="input-text" >联系电话：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.BRLXDH" class="input-input"></el-input>
                </el-col>                 -->
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="nmdh">
                   <span class="input-text" >联系电话：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.DHHM" class="input-input"></el-input>
                </el-col>
                <!-- 常驻 -->
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item" v-if="isNm1">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="pd.ZJHM" class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  class="mb-15" @click="CurrentPage=1;getList(CurrentPage,pageSize,pd)">查询</el-button>
          <el-button type="primary" size="small"  class="t-ml0" @click="dialog=true;getDxfs()">短信预览</el-button>
        </el-col>
      </el-row>
    </div>
    <el-dialog title="短信预览" :visible.sync="dialog">
      <!-- <el-button></el-button> -->
      <el-button type="text" @click="open()" style="margin-top:-10px;margin-left:95%;z-index:2300">添加</el-button>
      <!-- 添加页面开始 -->
      <!-- 常驻添加开始 -->
        <el-dialog title="添加人员" :visible.sync="cztj">
          <el-form :model="form1">
            <el-form-item label="中文姓名" :label-width="formLabelWidth">
              <el-input v-model="form1.ZWXM" autocomplete="off"></el-input>
            </el-form-item>           
            <el-form-item label="证件号码" :label-width="formLabelWidth">
              <el-input v-model="form1.ZJHM" autocomplete="off"></el-input>
            </el-form-item>            
            <el-form-item label="联系电话" :label-width="formLabelWidth">
              <el-input v-model="form1.LXDH" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="cztj = false">取 消</el-button>
            <el-button type="primary" @click="cztj = false;tjsu('form1')">确 定</el-button>
          </div>
        </el-dialog>
        <!-- 临住添加开始 -->
        <el-dialog title="添加人员" :visible.sync="lztj">
          <el-form :model="form2">
            <el-form-item label="中文姓名" :label-width="formLabelWidth">
              <el-input v-model="form2.ZWXM" autocomplete="off"></el-input>
            </el-form-item>           
            <el-form-item label="证件号码" :label-width="formLabelWidth">
              <el-input v-model="form2.ZJHM" autocomplete="off"></el-input>
            </el-form-item>            
            <el-form-item label="联系电话" :label-width="formLabelWidth">
              <el-input v-model="form2.BRLXDH" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="lztj = false">取 消</el-button>
            <el-button type="primary" @click="lztj = false;tjsu('form2')">确 定</el-button>
          </div>
        </el-dialog>
        <!-- 难民添加开始 -->
        <el-dialog title="添加人员" :visible.sync="nmtj">
          <el-form :model="form3">
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="form3.XM" autocomplete="off"></el-input>
            </el-form-item>           
            <el-form-item label="护照号码" :label-width="formLabelWidth">
              <el-input v-model="form3.HZHM" autocomplete="off"></el-input>
            </el-form-item>            
            <el-form-item label="联系电话" :label-width="formLabelWidth">
              <el-input v-model="form3.DHHM" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="nmtj = false">取 消</el-button>
            <el-button type="primary" @click="nmtj = false;tjsu('form3')">确 定</el-button>
          </div>
        </el-dialog>
      <!-- 添加页面结束 -->
       <el-table class="w-jb"  width="80%" :data="tableData1" :header-cell-style="{color:'#d9eeff',}"           
          :highlight-current-row="true"
           style="width: 100%"
           @select="selectfn"
           @select-all="selectfn"
           @header-click="titleShow">
           <el-table-column
             type="selection"
             width="50"> 
           </el-table-column>
            <el-table-column
               prop="ZWXM"
               label="中文姓名"
               v-if="zwxm">
            </el-table-column>
            <el-table-column
              prop="XM"
              label="姓名"
              v-if="xm">
           </el-table-column> 
             <el-table-column
               prop="ZJHM"
               label="证件号码"
               v-if="isNm1">
             </el-table-column>
           <el-table-column
             prop="HZHM"
             label="护照号码"
             v-if="isNm">
           </el-table-column>
           <el-table-column
             prop="LXDH"
             label="联系电话"
             v-if="chdh">
           </el-table-column>
           <el-table-column
             prop="BRLXDH"
             label="联系电话"
             v-if="lzdh">
           </el-table-column>
           <el-table-column
             prop="DHHM"
             label="联系电话"
             v-if="nmdh">
           </el-table-column>
        </el-table>
        <div>
          <div>短信发送</div>
          <el-input
            type="textarea"
            :autosize="{ minRows: 4, maxRows: 4}"
            placeholder="请输入短信内容"
            v-model="textarea"
            style="width:84%"
            clearable
            @clear="clearable()">
          </el-input>
          <el-button size="mini" style="margin-left:35px" @click="getFsdx()">短信发送</el-button>
        </div>
    </el-dialog>
    <div class="yycontent">
       <!-- <div class="yylbt mb-15">数据列表 历史记录</div> -->
      <div class="ak-tabs">
        <div class="ak-tab-item hand" :class="{'ak-checked':page==1}" @click="page=1;">
          数据列表
        </div>
        <div class="ak-tab-item hand" :class="{'ak-checked':page==0}" @click="page=0;getList1(CurrentPage,pageSize,pd)">
          短信历史记录
        </div>
      </div>
       <!-- 简表按钮 -->
        <!-- <el-row class="mb-15">
         <el-button type="primary"  size="small" @click="jbFnc" style="float:right;margin-top:-35px">简表</el-button>
        </el-row> -->
       <!-- 简表按钮 -->
      <div class="ak-tab-pane">
        <div v-show="page==1">
        <!-- 数据列表 -->
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
              <el-table-column
                prop="XM"
                label="姓名"
                v-if="xm">
              </el-table-column>              
              <el-table-column
                prop="ZWXM"
                label="中文姓名"
                v-if="zwxm">
              </el-table-column>           
              <el-table-column
                prop="YWX"
                label="英文姓"
                v-if="isLzry">
              </el-table-column>           
              <el-table-column
                prop="YWM"
                label="英文名"
                v-if="isLzry">
              </el-table-column>
              <el-table-column
                prop="YWXM"
                label="英文姓名"
                v-if="isLzry1">
              </el-table-column>
              <el-table-column
                prop="ZJHM"
                label="证件号码"
                v-if="isNm1">
              </el-table-column>           
              <el-table-column
                prop="HZHM"
                label="护照号码"
                v-if="isNm">
              </el-table-column>
              <el-table-column
                prop="FWCS"
                label="服务处所"
                v-if="isCzry1"
                >
              </el-table-column>
              <el-table-column
                prop="GJDQ"
                label="国家地区"
                v-if="isNm1">
              </el-table-column>
              <el-table-column
                prop="GJDQ_DESC"
                label="国家地区"
                v-if="lzgj">
              </el-table-column>
              <el-table-column
                prop="XXDZ"
                label="详细地址"
                v-if="isNm">
              </el-table-column>
              <el-table-column
                prop="LXDH"
                label="联系电话"
                v-if="chdh">
              </el-table-column>
              <el-table-column
                prop="BRLXDH"
                label="联系电话"
                v-if="lzdh">
              </el-table-column>
              <el-table-column
                prop="DHHM"
                label="联系电话"
                v-if="nmdh">
              </el-table-column>
            </el-table>
          <!-- 数据列表分页 -->
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
        <!-- 短信发送历史记录 -->
          <div v-show="page==0">
            <el-table
                ref="multipleTable"
              :data="tableData2"
              border
              :highlight-current-row="true"
              style="width: 100%"
              @select="selectfn"
              @select-all="selectfn"
              @header-click="titleShow">
              <el-table-column
                prop="FSXM"
                label="发送人">
              </el-table-column>                
              <el-table-column
                prop="FSORG"
                label="发送人组织">
              </el-table-column>
                <el-table-column
                prop="FSSJ"
                label="发送时间">
              </el-table-column>     
              <el-table-column
                prop="SJRHM"
                label="收件人短信号码">
              </el-table-column>
                <el-table-column
                prop="DXNR"
                label="短信内容">
              </el-table-column>                     
            </el-table>
          <!-- 短信历史记录分页 -->
                <div class="middle-foot" style="margin-top:10px">
                   <div class="page-msg">
                     <div class="">
                   共{{TotalResult1}}条记录
                     </div>
                     <div class="">
                       每页显示
                       <el-select v-model="pageSize1" @change="pageSizeChange1(pageSize1)" placeholder="10" size="mini" class="page-select">
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
                     共{{Math.ceil(TotalResult1/pageSize1)}}页
                     </div>
                   </div>
                   <el-pagination
                     background
                     @current-change="handleCurrentChange1"
                     :current-page.sync ="CurrentPage1"
                     :page-size="pageSize1"
                     layout="prev, pager, next"
                     :total="TotalResult1">
                   </el-pagination>
                 </div>
                <!-- 分页结束 -->
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import AREA from '../../../common/area'
import Trans from "@/components/common/Transfer.vue"
export default {
  components:{AREA,Trans},
  data(){
      return{
      CurrentPage: 1,
      pageSize: 10,
      TotalResult: 0,
      CurrentPage1: 1,
      pageSize1: 10,
      TotalResult1: 0,
      options: this.pl.ps,
      pd:{},
      pd1:{},
      dialog:false,
      textarea:'',
      RYLX:'',
      isCzry:false,
      isCzry1:true,
      isLzry:false,
      isLzry1:false,
      isCzry_zs:false,
      isCzry_dh:false,
      xm:false,
      zwxm:true,
      isNm:false,
      isNm1:true,
      tableData:[],
      tableData1:[],
      tableData2:[],
      page:1,
      multipleSelection:[],
      lzdh:false,
      lzgj:false,
      chdh:false,
      lzzs:false,
      czzs:false,
      nmdh:false,
      // dialogFormVisible:false,
      formLabelWidth: '120px',
      fshm:[],
      fshmsfc:'',
      userName:'',
      cztj:false,
      lztj:false,
      nmtj:false,
      orgName:'',
      token:'',
      form1:{
        // 常驻
        ZWXM:'',
        ZJHM:'',
        LXDH:'',
      },
      // 临住
      form2:{
        ZWXM:'',
        ZJHM:'',
        BRLXDH:'',
      },
      //难民
      form3:{
        XM:'',
        ZJHM:'',
        DHHM:'',
      }
      }
  },
  mounted(){
    this.$store.dispatch("getSf");
    this.$store.dispatch("getGjdq");
    this.userName=this.$store.state.uname;
    this.orgName=this.$store.state.orgname
    this.token=this.$store.state.token
  },
  activated(){
    //查询方法 
    // this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  methods:{
      //获得短信发送历史记录 
      getList1(currentPage,showCount,pd){
        let p ={
            "currentPage": currentPage,
            "showCount": showCount,
            "token":this.token
        }
        this.$api.post(this.Global.aport3+'/selectSmsList',p,
            r=>{
              this.tableData2=r.data;
              this.TotalResult1 = r.totalResult;
            }
          )
      },
      //查询方法
      getList(currentPage,showCount,pd){
        // 常驻查询
        if(this.pd.TYPE=='1'){
          let p ={
            "currentPage": currentPage,
            "showCount": showCount,
            "pd":pd
          }
          this.$api.post(this.Global.aport3+'/selectDxjbxx',p,
            r=>{
              console.log(r.data);
              this.tableData=r.data.resultList;
              this.TotalResult = r.data.totalResult;
            }
          )
        // 临住查询
        }else if(this.pd.TYPE=='2'){
          this.tableData=[];
          // this.TotalResult=0;
          let p={
            "currentPage": currentPage,
            "showCount": showCount,
            "pd":pd
          }
          this.$api.post(this.Global.aport3+'/selectDxjbxx',p,
            r=>{
              console.log(r.data);
              this.tableData=r.data.resultList;
              this.TotalResult = r.data.totalResult;
            }
          )
        // 难民查询
        }else if(this.pd.TYPE=='3'){
            this.tableData=[];
            // this.TotalResult=0;
            let p={
              "currentPage": currentPage,
              "showCount": showCount,
              "pd":pd
            }
            this.$api.post(this.Global.aport3+'/selectDxjbxx',p,
            r=>{
              console.log(r.data);
              this.tableData=r.data.resultList;
              this.TotalResult = r.data.totalResult;
            }
          )
        }
      },
      // 获得多选框选定的值
      getDxfs(){
        this.tableData1=this.multipleSelection
        console.log(this.tableData1)
      },
      // 当某一列的表头被点击时会触发该事件
      titleShow(e,el){
        el.target.title = e.label;
      },
      // 当用户手动勾选数据行的 Checkbox 时触发的事件
      selectfn(a,b){
        this.multipleSelection = a;
        // this.dataSelection()
      },
      pageSizeChange(val) {
          this.pageSize=val;
          // console.log(this.pageSize)
          this.getList(this.CurrentPage, this.pageSize, this.pd);
      },
      handleCurrentChange(val) {
          this.CurrentPage=val;
          console.log(this.CurrentPage)
          this.getList(this.CurrentPage, this.pageSize, this.pd);
      },
      pageSizeChange1(val) {
        this.pageSize1=val;
        this.getList1(this.CurrentPage1, val, this.pd1);
      },
      handleCurrentChange1(val) {
        this.CurrentPage1=val;
        this.getList1(val, this.pageSize1, this.pd1);
      },
      //清空按钮
      clearable(){
        if(this.textarea!==''){
          this.textarea.clearable=true
        }
      },
      //根据类型值显示对于的模块添加发送手机号码
      open(){
        if(this.pd.TYPE=='1'){
          this.cztj=true
        }else if(this.pd.TYPE=='2'){
          this.lztj=true
        }else{
          this.nmtj=true
        }
      },
      // 短信添加成功
      tjsu(type){
        if(type=="form1"){
          if(this.form1.LXDH!==''){
            this.tableData1.push(this.form1)
          }
        }else if(type=="form2"){
          if(this.form2.BRLXDH!==''){
            this.tableData1.push(this.form2)
          }
        }else if(type=="form3"){
          if(this.form3.DHHM!==''){
              this.tableData1.push(this.form3)
            }
        }
      },
      // 发送短信方法
      getFsdx(){
        if(this.textarea==''){
                this.$message({
                  message: '请输入短信内容',
                });
        }
        if(this.textarea!==''){
          // this.tableData1.LXDH
          // var st=[];
          for(var i=0;i<this.tableData1.length;i++){
            this.fshm.push(this.tableData1[i].LXDH)  
          }
          this.fshmsfc =this.fshm.join();
          let p={
            "content":this.textarea,
            "lxdh":this.fshmsfc,
            "username":this.userName,
            "org":this.orgName
          }
          this.$api.post(this.Global.aport3+'/sendSms',p,
            r=>{
              if(r.status){
                this.$message({
                  message: r.msg,
                });
              }else{
                this.$message({
                  message: r.msg,
                });
              }
            }
          )
        }
      },
      //根据下拉框的值显示对应的html片段
      bclxChange(selectValue){
        //常驻分组
        if(selectValue==1){
          this.isLzry1=false
          this.isLzry=true
          this.isCzry1=true 
          this.chdh=true
        }else{
          this.isCzry1=false  
          this.chdh=false  
        }
        //临住分组
        if(selectValue==2){
          this.isLzry1=true
          this.isLzry=false
          this.lzdh=true  
          this.lzgj=true 
          this.lzzs=true
        }else{
          this.lzdh=false
          this.lzzs=false
          this.isLzry=true
          this.lzgj=false
        }
        //难民分组
        if(selectValue==3){
          this.xm=true
          this.zwxm=false
          this.isLzry=false
          this.isLzry1=false
          this.isNm=true
          this.isNm1=false
          this.nmdh=true
        }else{
          this.xm=false
          this.isNm1=true
          this.isNm=false
          this.zwxm=true
          this.nmdh=false
        }
      }
  }
}
</script>
<style scoped>
</style>
