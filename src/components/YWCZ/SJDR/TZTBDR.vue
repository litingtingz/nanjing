<template lang="html">
  <!-- 临住布控人员导入 -->
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
                <span class="input-text">中文姓名：</span>
                <el-input placeholder="请输入内容" size="small" v-model="pd.ZWXM" class="input-input"></el-input>
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
                <span class="input-text">护照号码：</span>
                <el-input placeholder="请输入内容" size="small" v-model="pd.HZHM" class="input-input"></el-input>
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
          :label="lb.cm"
          :width="lb.width">
        </el-table-column>
      </template>
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
              <span class="input-text">中文姓名：</span>
              <el-input placeholder="请输入内容" size="small" v-model="editform.ZWXM"  class="input-input"></el-input>
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
            <el-col :span="8" class="input-item yzform" data-scope="demo" data-name="GJDQDM" data-type="select"
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
            <el-col :span="8" class="input-item">
              <span class="input-text">护照号码：</span>
              <el-input placeholder="请输入内容" size="small" v-model="editform.HZHM"  class="input-input"></el-input>
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
              <span class="input-text">申请时间：</span>
              <el-date-picker class="input-input"
                v-model="editform.SQRQ" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy-MM-dd"
                placeholder="选择时间" >
              </el-date-picker>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">入学时间：</span>
              <el-date-picker class="input-input"
                v-model="editform.RXSJ" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy-MM-dd"
                placeholder="选择时间" >
              </el-date-picker>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">学校名称：</span>
              <el-input placeholder="请输入内容" size="small" v-model="editform.XXMC"  class="input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">实际留学城市：</span>
              <el-select v-model="editform.SJLXCSDM" placeholder="请选择" @change="getLable(3,editform.SJLXCSDM)"  filterable clearable default-first-option size="small" class="input-input">
                <el-option
                  v-for="(item,ind3) in $store.state.xzqh"
                  :key="ind3"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">最高学历：</span>
              <el-input placeholder="请输入内容" size="small" v-model="editform.ZGXL"  class="input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">婚姻状况：</span>
              <el-select v-model="editform.HYZKDM" placeholder="请选择" @change="getLable(4,editform.HYZKDM)"  filterable clearable default-first-option size="small" class="input-input">
                <el-option
                  v-for="(item,ind4) in $store.state.hyzt"
                  :key="ind4"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">宗教信仰：</span>
              <el-select v-model="editform.ZJXYDM" placeholder="请选择" @change="getLable(5,editform.ZJXYDM)"  filterable clearable default-first-option size="small" class="input-input">
                <el-option
                  v-for="(item,ind5) in $store.state.zjxy"
                  :key="ind5"
                  :label="item.dm+' - '+item.mc"
                  :value="item.dm">
                </el-option>
              </el-select>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">工作或学习单位：</span>
              <el-input placeholder="请输入内容" size="small" v-model="editform.GZHXXDW"  class="input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">专业中文名称：</span>
              <el-input placeholder="请输入内容" size="small" v-model="editform.ZYZWMC"  class="input-input"></el-input>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">报到开始日期：</span>
              <el-date-picker class="input-input"
                v-model="editform.BDKSRQ" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy-MM-dd"
                placeholder="选择时间" >
              </el-date-picker>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">报到截止日期：</span>
              <el-date-picker class="input-input"
                v-model="editform.BDJZRQ" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy-MM-dd"
                placeholder="选择时间" >
              </el-date-picker>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">学习开始日期：</span>
              <el-date-picker class="input-input"
                v-model="editform.XXKSRQ" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy-MM-dd"
                placeholder="选择时间" >
              </el-date-picker>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">学习截止日期：</span>
              <el-date-picker class="input-input"
                v-model="editform.XXJZRQ" format="yyyy-MM-dd"
                type="date" size="small" value-format="yyyy-MM-dd"
                placeholder="选择时间" >
              </el-date-picker>
            </el-col>
             <el-col :span="8" class="input-item">
              <span class="input-text">授课语言：</span>
              <el-input placeholder="请输入内容" size="small" v-model="editform.SKYY"  class="input-input"></el-input>
            </el-col>
             <el-col :span="8" class="input-item">
              <span class="input-text">入学学期：</span>
              <el-input placeholder="请输入内容" size="small" v-model="editform.RXXQ"  class="input-input"></el-input>
            </el-col>
          </el-row>
           <el-row :gutter="2" v-show="dialogText=='编辑'">
              <el-col :span="8" class="input-item">
                <span class="input-text">操作人：</span>
                <el-input placeholder="请输入内容" size="small" :disabled="true" v-model="editform.CZR"  class="input-input"></el-input>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">操作时间：</span>
                <el-input placeholder="请输入内容" size="small" :disabled="true" v-model="editform.CZSJ"  class="input-input"></el-input>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">操作单位：</span>
                <el-input placeholder="请输入内容" size="small" :disabled="true" v-model="editform.CZDWID"  class="input-input"></el-input>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">修改人：</span>
                <el-input placeholder="请输入内容" size="small" :disabled="true" v-model="editform.XGR"  class="input-input"></el-input>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">修改时间：</span>
                <el-input placeholder="请输入内容" size="small" :disabled="true" v-model="editform.XGSJ"  class="input-input"></el-input>
              </el-col>
              <el-col :span="8" class="input-item">
                <span class="input-text">修改单位：</span>
                <el-input placeholder="请输入内容" size="small" :disabled="true" v-model="editform.XGDWID"  class="input-input"></el-input>
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
            <span class="input-input detailinput">  {{mapForm.YWXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
            <span class="input-text">中文姓名：</span>
            <span class="input-input detailinput">  {{mapForm.ZWXM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">性别：</span>
              <span class="input-input detailinput">  {{mapForm.XBMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
            <span class="input-text">国家地区：</span>
            <span class="input-input detailinput">  {{mapForm.GJDQMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
            <span class="input-text">护照号码：</span>
            <span class="input-input detailinput">  {{mapForm.HZHM}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">出生日期：</span>
              <span class="input-input detailinput">  {{mapForm.CSRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">申请时间：</span>
              <span class="input-input detailinput">  {{mapForm.SQRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">入学时间：</span>
              <span class="input-input detailinput">  {{mapForm.RXSJ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">学校名称：</span>
              <span class="input-input detailinput">  {{mapForm.XXMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="实际留学城市">实际留学城市：</span>
              <span class="input-input detailinput">  {{mapForm.SJLXCSMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">最高学历：</span>
              <span class="input-input detailinput">  {{mapForm.ZGXL}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">婚姻状况：</span>
              <span class="input-input detailinput">  {{mapForm.HYZKMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="宗教信仰">宗教信仰：</span>
              <span class="input-input detailinput">  {{mapForm.ZJXYMC}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">工作或学习单位：</span>
              <span class="input-input detailinput">  {{mapForm.GZHXXDW}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">专业中文名称：</span>
              <span class="input-input detailinput">  {{mapForm.ZYZWMC}}</span>
            </el-col>
             <el-col :span="8" class="input-item">
              <span class="input-text" title="报到开始日期">报到开始日期：</span>
              <span class="input-input detailinput">  {{mapForm.BDKSRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="报到截止日期：">报到截止日期：</span>
              <span class="input-input detailinput">  {{mapForm.BDJZRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="学习开始日期">学习开始日期：</span>
              <span class="input-input detailinput">  {{mapForm.XXKSRQ}}</span>
            </el-col>
            </el-col>
             <el-col :span="8" class="input-item">
              <span class="input-text" title="学习截止日期">学习截止日期：</span>
              <span class="input-input detailinput">  {{mapForm.XXJZRQ}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="授课语言">授课语言：</span>
              <span class="input-input detailinput">  {{mapForm.SKYY}}</span>
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text" title="入学学期">入学学期：</span>
              <span class="input-input detailinput">  {{mapForm.RXXQ}}</span>
            </el-col>
        </el-row>
        <el-row :gutter="2">
            <el-col :span="8" class="input-item">
              <span class="input-text">操作人：</span>
              <span class="input-input detailinput">{{mapForm.CZR}}</span>              
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">操作时间：</span>
              <span class="input-input detailinput">{{mapForm.CZSJ}}</span>  
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">操作单位：</span>
              <span class="input-input detailinput">{{mapForm.CZDWID}}</span>  
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改人：</span>
              <span class="input-input detailinput">{{mapForm.XGR}}</span>  
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改时间：</span>
              <span class="input-input detailinput">{{mapForm.XGSJ}}</span>  
            </el-col>
            <el-col :span="8" class="input-item">
              <span class="input-text">修改单位：</span>
              <span class="input-input detailinput">{{mapForm.XGDWID}}</span>                
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
          dm:'ZWXM',
          cm:'中文姓名',
        },
        {
          dm:'GJDQMC',
          cm:'国籍地区'
        },
        {
          dm:'XBMC',
          cm:'性别',
        },
        {
          dm:'CSRQ',
          cm:'出生日期',
        },
        {
          dm:'HZHM',
          cm:'护照号码'
        },
        {
          dm:'SQRQ',
          cm:'申请时间'
        },
        {
          dm:'RXSJ',
          cm:'入学时间'
        },
        {
          dm:'XXMC',
          cm:'学校名称'
        },
        {
          dm:'XXDM',
          cm:'学校代码'
        },
        {
          dm:'SJLXCSMC',
          cm:'实际留学城市'
        },
        {
          dm:'ZGXL',
          cm:'最高学历'
        },
        {
          dm:'HYZKMC',
          cm:'婚姻状况'
        },
        {
          dm:'ZJXYMC',
          cm:'宗教信仰'
        },
        {
          dm:'GZHXXDW',
          cm:'工作或学习单位',
          width:'150'
        },
        {
          dm:'ZYZWMC',
          cm:'专业中文吗名称'
        },
        {
          dm:'BDKSRQ',
          cm:'报到开始日期'
        },
        {
          dm:'BDJZRQ',
          cm:'报道截止日期'
        },
        {
          dm:'XXKSRQ',
          cm:'学习开始日期'
        },
        {
          dm:'XXJZRQ',
          cm:'学习截止日期'
        },
        {
          dm:'SKYY',
          cm:'授课语言'
        },
        {
          dm:'RXXQ',
          cm:'入学学期'
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
    this.$store.dispatch('getXzqh');
    this.$store.dispatch('getHyzt');
    this.$store.dispatch('getZjxy');
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
      this.$api.post(this.Global.aport3+'/zdlxs/getZdlxsPage', p,
        r => {
          if(r.code=="1000001"){
              window.location.href ="#/";
          }
          this.tableData = r.data.resultList;
          this.TotalResult = r.data.totalResult;
        })
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
        var url=this.Global.aport3+'/zdlxs/addZdlxs';
        if(this.isadd==1){//编辑
          url=this.Global.aport3+'/zdlxs/updateZdlxs';
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
