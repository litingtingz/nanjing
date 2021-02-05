<template lang="html">
  <!-- 教育厅招生预警、审核  -->
  <div class="yymain">
    <!--===================查询项======================-->
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
                    v-model="pd.suboffice_issuedateStart" format="yyyy-MM-dd"
                    type="date" size="small" value-format="yyyy-MM-dd"
                    placeholder="开始时间" >
                </el-date-picker>
                <span class="septum">-</span>
                <el-date-picker
                    v-model="pd.suboffice_issuedateEnd" format="yyyy-MM-dd"
                    type="date" size="small" value-format="yyyy-MM-dd"
                    placeholder="结束时间" >
                </el-date-picker>
              </div>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
              <span class="input-text">分局上报时间：</span>
              <div class="input-input t-flex t-date">
                <el-date-picker
                    v-model="pd.suboffice_back_timeStart" format="yyyy-MM-dd"
                    type="date" size="small" value-format="yyyy-MM-dd"
                    placeholder="开始时间" >
                </el-date-picker>
                <span class="septum">-</span>
                <el-date-picker
                    v-model="pd.suboffice_back_timeEnd" format="yyyy-MM-dd"
                    type="date" size="small" value-format="yyyy-MM-dd"
                    placeholder="结束时间" >
                </el-date-picker>
              </div>
            </el-col>
            <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
              <span class="input-text">派出所反馈时间：</span>
              <div class="input-input t-flex t-date">
                <el-date-picker
                    v-model="pd.policestation_backtimeStart" format="yyyy-MM-dd"
                    type="date" size="small" value-format="yyyy-MM-dd"
                    placeholder="开始时间" >
                </el-date-picker>
                <span class="septum">-</span>
                <el-date-picker
                    v-model="pd.policestation_backtimeEnd" format="yyyy-MM-dd"
                    type="date" size="small" value-format="yyyy-MM-dd"
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
    <!--===================表格======================-->
    <div class="yycontent">
       <div class="yylbt mb-15">地址线索排查列表</div>
       <div class="ak-tabs">
          <div class="ak-tab-item hand" :class="{'ak-checked':page==1}" @click="page=1;pageTab='2';ATabFnc(page)">
            未走访
          </div>
          <div class="ak-tab-item hand" :class="{'ak-checked':page==2}" @click="page=2;pageTab='1';ATabFnc(page)">
            已走访
          </div>
        </div>
        <div class="ak-tab-pane">
          <div class="table-other">
            <div class="table-tab-box" v-show="page==1">
              <span class="hand" :class="{'tab_active':pageTab=='2'}" v-if="juState=='1'||juState=='2'" @click="pageTab='2';BTabFnc(pageTab)">分局待下发</span>
              <span class="hand" :class="{'tab_active':pageTab=='5'}" v-if="juState=='1'||juState=='2'" @click="pageTab='5';BTabFnc(pageTab)">分局待上报</span>
              <span class="hand" :class="{'tab_active':pageTab=='3'}" v-if="juState=='1'||juState=='2'||juState=='3'" @click="pageTab='3';BTabFnc(pageTab)">派出所未处理</span>
            </div>
            <div class="table-tab-box" v-show="page==2">
              <span class="hand" :class="{'tab_active':pageTab=='1'}" v-if="juState=='1'" @click="pageTab='1';BTabFnc(pageTab)">已归档</span>
              <span class="hand" :class="{'tab_active':pageTab=='2'}" v-if="juState=='1'||juState=='2'" @click="pageTab='2';BTabFnc(pageTab)">分局已上报</span>
              <span class="hand" :class="{'tab_active':pageTab=='3'}" v-if="juState=='1'||juState=='2'||juState=='3'" @click="pageTab='3';BTabFnc(pageTab)">派出所已上报</span>
            </div>
            <div class="table-btn-box" id="plBtn">
              <template>
                <el-button size="mini" :type="'primary'" @click="exportFnc">导出</el-button>
                <el-button size="mini" :type="'primary'" @click="importFnc">导入</el-button>
                <el-button size="mini" :type="'primary'">模板下载</el-button>
                <el-button size="mini" :type="'primary'">下发</el-button>
                <el-button size="mini" :type="'primary'">上报</el-button>
                <el-button size="mini" :type="'primary'" @click="xzFnc">新增</el-button>
                <el-button size="mini" type="primary"  @click="jbFnc">简表</el-button>
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
                  title="详情"
                  icon="el-icon-document-outline"
                  v-if="scope.row.whetherUpdateState=='0'"
                  @click="detailFnc(scope.row)"
                ></el-button>
                <el-button
                  type="text"
                  class="a-btn"
                  title="编辑"
                  v-else
                  icon="el-icon-edit-outline"
                  @click="editFnc(scope.row)"
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
    </div>
    <!--===================简表======================-->
    <el-dialog title="简表" :visible.sync="jbDialogVisible" width="1000px">
      <Trans
        :key="timer"
        :transData="lbDataAll"
        :pointData="pointData"
        @transSave="transSave"
        @dialogCancel="jbDialogVisible=false"></Trans>
    </el-dialog>
    <!--===================处理======================-->
    <el-dialog title="处理" :visible.sync="clDialogVisible" width="1200px" class="hc-dialog" top="3vh">
      <el-row type="flex">
        <el-col :span="16">
          <el-form ref="editForm" :model="editData">
            <el-row :gutter="30" align="center">
              <el-col :span="20" class="form-line">
                <span class="divider-text">排查信息</span>
                <el-divider></el-divider>
              </el-col>
              <el-col :span="24" class="input-item">
                <span class="input-text">详细地址：</span>
                <el-input size="mini" v-model="editData.address"  class="input-input" :disabled="true"></el-input>
              </el-col>
              <el-col :span="24" class="input-item">
                <span class="input-text">住宿人数：</span>
                <el-input size="mini" v-model="editData.live_number"  class="input-input" :disabled="true"></el-input>
              </el-col>
              <el-col :span="20" class="form-line">
                <span class="divider-text">数据基础信息</span>
                <el-divider></el-divider>
              </el-col>
              <el-col :span="24" class="input-item">
                <span class="input-text">采集人：</span>
                <el-input size="mini" v-model="editData.create_userid"  class="input-input" :disabled="true"></el-input>
              </el-col>
              <el-col :span="24" class="input-item">
                <span class="input-text">数据来源：</span>
                <el-input size="mini" v-model="editData.datasources_desc"  class="input-input" :disabled="true"></el-input>
              </el-col>
              <el-col :span="24" class="input-item">
                <span class="input-text">标题：</span>
                <el-input size="mini" v-model="editData.title"  class="input-input" :disabled="true"></el-input>
              </el-col>
              <el-col :span="24" class="input-item">
                <span class="input-text">采集备注：</span>
                <el-input size="mini" type="textarea" :row="1" v-model="editData.remarks"  class="input-input" :disabled="true"></el-input>
              </el-col>
              <el-col :span="20" class="form-line">
                <span class="divider-text">数据归属</span>
                <el-divider></el-divider>
              </el-col>
              <el-col :span="24" class="input-item">
                <span class="input-text">所属分局：</span>
                <el-input size="mini" v-model="editData.suboffice_desc"  class="input-input" :disabled="true"></el-input>
              </el-col>
              <el-col :span="24" class="input-item">
                <span class="input-text">所属派出所：</span>
                <el-input size="mini" v-model="editData.policestation_desc"  class="input-input" :disabled="true"></el-input>
              </el-col>
              <el-col :span="24" class="input-item">
                <span class="input-text">所属责任区：</span>
                <el-input size="mini" v-model="editData.turnoutarea_desc"  class="input-input" :disabled="true"></el-input>
              </el-col>
              <el-col :span="20" class="form-line">
                <span class="divider-text">走访结果</span>
                <el-divider></el-divider>
              </el-col>
              <el-col :span="24" class="input-item">
                <span class="input-text">走访信息：</span>
                <el-radio-group v-model="editData.backstatus" @change="radioChange" class="form-radio" :disabled="true">
                  <el-radio
                    :label="item.dm"
                    v-for="(item,ind) in $store.state.backstatus"
                    :key="ind"
                  >{{item.mc}}</el-radio>
                </el-radio-group>
              </el-col>
            </el-row>
            <el-row :gutter="30" align="center" class="cus-adress">
              <el-col :span="24" v-for="(all,alls) in editData.userInforList" :key="alls" class="cus-children">
                <el-row type="flex">
                  <el-col :span="22">
                    <el-col :span="24" class="input-item">
                      <span class="input-text">境外人员证件号码：</span>
                      <el-input size="mini" v-model="all.passportno"  class="input-input" :disabled="true"></el-input>
                    </el-col>
                    <el-col :span="24" class="input-item">
                      <span class="input-text">境外人员国家地区：</span>
                      <el-select v-model="all.nationality" filterable clearable default-first-option placeholder="请选择"  :disabled="true" size="mini" class="input-input">
                        <el-option
                          v-for="(item,ind3) in $store.state.gjdq"
                          :key="ind3"
                          :label="item.dm+' - '+item.mc"
                          :value="item.dm">
                        </el-option>
                      </el-select>
                    </el-col>
                    <el-col :span="24" class="input-item">
                      <span class="input-text">手机号码：</span>
                      <el-input size="mini" v-model="all.phone"  class="input-input" :disabled="true"></el-input>
                    </el-col>
                    <el-col :span="24">
                      <span class="input-text">图片：</span>
                      <div class="dz-upload">
                          <el-upload
                            class="upload-box"
                            :disabled="joinZf"
                            :name="'arr_passport_photo'"
                            ref="load1"
                            action
                            :limit="1"
                            :file-list="all.arr_passport_photo"
                            list-type="picture-card"
                            :multiple="false"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="(file,fileList)=>handleRemove('arr_passport_photo',alls,file,fileList)"
                            :on-change="(file,fileList)=>imgOnChange('arr_passport_photo',alls,file,fileList)"
                            :auto-upload="false">
                            <div class="upload-text">
                              <i class="el-icon-plus"></i>
                              <div class="upload-text-span">护照资料页</div>
                            </div>                
                          </el-upload>
                          <el-upload
                            class="upload-box"
                            :name="'arr_portrait_photo'"
                            :disabled="joinZf"
                            ref="load2"
                            action="111"
                            :limit="1"
                            :file-list="all.arr_portrait_photo"
                            list-type="picture-card"
                            :multiple="false"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="(file,fileList)=>handleRemove('arr_portrait_photo',alls,file,fileList)"
                            :on-change="(file,fileList)=>imgOnChange('arr_portrait_photo',alls,file,fileList)"
                            :auto-upload="false">
                            <div class="upload-text">
                              <i class="el-icon-plus"></i>
                              <div class="upload-text-span">人像照片</div>
                            </div>                             
                          </el-upload>
                          <el-upload
                            class="upload-box"
                            :name="'arr_visa_photo'"
                            :disabled="joinZf"
                            ref="load3"
                            action="111"
                            :limit="1"
                            :file-list="all.arr_visa_photo"
                            list-type="picture-card"
                            :multiple="false"
                            :on-preview="handlePictureCardPreview"
                            :on-remove="(file,fileList)=>handleRemove('arr_visa_photo',alls,file,fileList)"
                            :on-change="(file,fileList)=>imgOnChange('arr_visa_photo',alls,file,fileList)"
                            :auto-upload="false">
                            <div class="upload-text">
                              <i class="el-icon-plus"></i>
                              <div class="upload-text-span">签证页照片</div>
                            </div>
                          </el-upload>
                        </div>
                    </el-col>
                  </el-col>
                  <el-col :span="2" class="adress-btn">
                    <el-button :disabled="joinZf" type="primary" icon="el-icon-plus" size="mini" circle @click="Add_DZ()" v-if="editData.userInforList.length-1==alls"></el-button>
                    <el-button :disabled="joinZf" type="danger" icon="el-icon-minus" size="mini" circle @click="deleteModel_DZ(alls)" v-if="editData.userInforList.length>1" style="margin-left:0"></el-button>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-form>
        </el-col>
        <el-col :span="8">
          <div class="block timeLine">
            <el-timeline>
              <el-timeline-item v-for="(val, key, i) in cxData" :key="i" :timestamp="key" placement="top">
                <el-card v-for="(ic,ick) in val" :key="ick" :style="{'backgroundColor':ic.SSYS}">
                    <h4 v-if="ic.XM">姓名：{{ic.XM}}</h4>
                    <h4 v-if="ic.XTYHBMMC">所属单位：{{ic.XTYHBMMC}}</h4>
                    <p v-if="ic.CZZT">操作状态：{{ic.CZZT}}</p>
                    <p v-if="ic.CZSJ">操作时间：{{ic.CZSJ}}</p>
                    <p v-if="ic.BZ">备注：{{ic.BZ}}</p>
                    <p v-if="ic.ZFZT">走访状态：{{ic.ZFZT}}</p>
                </el-card>
              </el-timeline-item>
              <el-timeline-item style="top:-9px"></el-timeline-item>
            </el-timeline>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
    <!--===================新增======================-->
    <el-dialog title="新增" :visible.sync="xzDialogVisible" width="800px">
      <el-form ref="xzForm" :model="xzData">
        <el-row :gutter="30" align="center">
          <el-col :span="24" class="input-item yzform" data-scope="demo" data-name="title" data-type="input"
            v-validate-easy="[['required']]">
            <span class="input-text"><font class="redx">*</font>标题：</span>
              <el-input placeholder="请输入内容" size="mini" v-model="xzData.title"  class="input-input"></el-input>
          </el-col>
          <el-col :span="24" class="input-item yzform" data-scope="demo" data-name="address" data-type="input"
            v-validate-easy="[['required']]">
            <span class="input-text"><font class="redx">*</font>地址：</span>
              <el-input placeholder="请输入内容" size="mini" v-model="xzData.address"  class="input-input"></el-input>
          </el-col>
          <el-col :span="24" class="input-item yzform" data-scope="demo" data-name="suboffice" data-type="select"
            v-validate-easy="[['required']]">
            <span class="input-text"><font class="redx">*</font>所属分局：</span>
            <el-select 
              v-model="xzData.suboffice" 
              placeholder="请选择" 
              @change="getPSC(xzData.suboffice)" 
              filterable clearable default-first-option size="mini" 
              class="input-input"
              :disabled="juState=='1'?false:true">
                <el-option
                  v-for="(item,ind2) in getallfj"
                  :key="ind2"
                  :label="item.DM+' - '+item.MC"
                  :value="item.DM">
                </el-option>
            </el-select>
          </el-col>
          <el-col :span="24" class="input-item">
            <span class="input-text">所属派出所：</span>
              <el-select 
                v-model="xzData.policestation" 
                placeholder="请选择"  
                filterable clearable default-first-option size="mini" 
                class="input-input"
                :disabled="juState=='3'||juState=='4'" :no-data-text="xzData.suboffice==''||xzData.suboffice==undefined?'请先选择所属分局':'无数据'">
                <el-option
                  v-for="(item,ind3) in PSC"
                  :key="ind3"
                  :label="item.DM+' - '+item.MC"
                  :value="item.DM">
                </el-option>
              </el-select>
          </el-col>
          <el-col :span="24" class="input-item">
            <span class="input-text">备注：</span>
            <el-input size="mini" type="textarea" :row="1" v-model="xzData.remarks"  class="input-input"></el-input>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="xzSave" size="small">保 存</el-button>
        <el-button @click="xzDialogVisible = false" size="small">取 消</el-button>
      </div>
    </el-dialog>
    <div id="big-img-box" v-dragOnly v-if="isimgclick">
      <el-image-viewer :on-close="()=>{isimgclick=false}" :url-list="imgList" />
    </div>
  </div>
</template>
<script>
import Trans from "@/components/common/Transfer.vue";
import compressImg from "@/assets/js/date.js"
export default {
  components: { 
    Trans ,
    "el-image-viewer": () =>
      import("element-ui/packages/image/src/image-viewer")
  },
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
      pd: {},
      options: this.pl.ps,
      tableData: [],
      
      getallfj: [],
      PSC: [],

      multipleSelection: [],
      selectionAll: [],
      yuid: [],
      selectionReal: [],

      page:1,
      pageTab:'2',
      //处理弹窗开始
      clDialogVisible:false,
      editData:{},
      userInforList:[],
      dzmodel:{
        passportno:'',
        nationality:'',
        phone:'',
        arr_passport_photo:[],
        arr_portrait_photo:[],
        arr_visa_photo:[],
      },
      joinZf:true,
      isimgclick:false,
      imgList:[],
      cxData:{"2021-02-03":[{"CZSJ":"2021-02-03 19:21:18","XM":"测试用户","BZ":"23","CZRQ":"2021-02-03","XTYHBMMC":"江苏省苏州市公安局","CZZT":"下发"}],"2020-12-07":[{"CZSJ":"2020-12-07 19:30:03","XM":"郑晓东","BZ":"23","CZRQ":"2020-12-07","XTYHBMMC":"江苏省苏州市公安局苏州高新区分局横塘派出所","CZZT":"上报","ZFZT":"有境外人员"},{"CZSJ":"2020-12-07 19:28:54","XM":"郑晓东","BZ":"23","CZRQ":"2020-12-07","XTYHBMMC":"江苏省苏州市公安局苏州高新区分局横塘派出所","CZZT":"上报","ZFZT":"有境外人员"},{"CZSJ":"2020-12-07 19:28:17","XM":"郑晓东","BZ":"23","CZRQ":"2020-12-07","XTYHBMMC":"江苏省苏州市公安局苏州高新区分局横塘派出所","CZZT":"上报","ZFZT":"有境外人员"},{"CZSJ":"2020-12-07 19:27:54","XM":"郑晓东","BZ":"2","CZRQ":"2020-12-07","XTYHBMMC":"江苏省苏州市公安局苏州高新区分局横塘派出所","CZZT":"上报","ZFZT":"有境外人员"},{"CZSJ":"2020-12-07 19:27:42","XM":"郑晓东","BZ":"2","CZRQ":"2020-12-07","XTYHBMMC":"江苏省苏州市公安局苏州高新区分局横塘派出所","CZZT":"上报","ZFZT":"无境外人员"},{"CZSJ":"2020-12-07 19:27:35","XM":"郑晓东","BZ":"2","CZRQ":"2020-12-07","XTYHBMMC":"江苏省苏州市公安局苏州高新区分局横塘派出所","CZZT":"上报","ZFZT":"无效地址"},{"CZSJ":"2020-12-07 18:45:42","BZ":"2","CZRQ":"2020-12-07","CZZT":"系统自动下发"}]},
      //处理弹窗结束
      //新增弹窗开始
      xzDialogVisible:false,
      xzData:{},
      //新增弹窗结束

      userCode: "",
      userName: "",
      orgCode: "",
      orgName: "",
      token: "",
      juState: ""
    };
  },
  activated() {
    this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  mounted() {
    this.lbData = this.lbDataAll; //页面加载 列表选中项 == 列表总数据源
    this.$store.dispatch("getGjdq");
    this.userCode = this.$store.state.uid;
    this.userName = this.$store.state.uname;
    this.orgName = this.$store.state.orgname;
    this.orgCode = this.$store.state.orgid;
    this.juState = this.$store.state.juState;
    this.token = this.$store.state.token;
    this.getFj();
    
  },
  directives: {
    dragOnly: {
      // 指令的定义
      bind: (el) => {
        let odiv = el; //获取当前元素
        let left = "";
        let top = "";
        let leftImg = "";
        let topImg = "";
        el.onmousedown = e => {
          //算出鼠标相对元素的位置
          // console.log("el===", el, el.getElementsByTagName("img")[0]);
          let oImg = el.getElementsByTagName("img")[0];
          // console.log("oImg==", oImg);
          if (e.target.tagName == "IMG") {
            // oImg.style.position = "relative";
            console.log("onmousedown", oImg.offsetLeft);
            //算出鼠标相对元素的位置
            let disX = e.clientX - oImg.offsetLeft;
            let disY = e.clientY - oImg.offsetTop;

            // let off_left = oImg.offsetLeft;
            // let off_top = oImg.offsetTop;
            // console.log("img=",oImg, off_left);
            e.preventDefault();
            document.onmousemove = e => {
              // console.log("移动", e);
              //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
              // console.log("e.clientX", e.clientX);
              // console.log("disX", disX);
              // console.log("oImg.offsetLeft", oImg.offsetLeft);
              leftImg = e.clientX - disX - 40;
              topImg = e.clientY - disY - 40;
              // console.log('leftImg==',leftImg,e.clientX,disX)
              // leftImg = e.clientX - disX - off_left;
              // topImg = e.clientY - disY - off_top;

              // leftImg = e.clientX - disX - oImg.offsetLeft;
              // topImg = e.clientY - disY;
              //绑定元素位置到positionX和positionY上面
              //移动当前元素
              oImg.style.left = leftImg + "px";
              oImg.style.top = topImg + "px";
              oImg.style.right = "auto";
              oImg.style.bottom = "auto";
            };
            document.onmouseup = () => {
              document.onmousemove = null;
              document.onmouseup = null;
            };
          } else {
            let disX = e.clientX - odiv.offsetLeft;
            let disY = e.clientY - odiv.offsetTop;
            document.onmousemove = e => {
              //用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
              left = e.clientX - disX;
              top = e.clientY - disY;
              //绑定元素位置到positionX和positionY上面
              //移动当前元素
              odiv.style.left = left + "px";
              odiv.style.top = top + "px";
              odiv.style.right = "auto";
              odiv.style.bottom = "auto";
            };
            document.onmouseup = () => {
              document.onmousemove = null;
              document.onmouseup = null;
            };
          }
        };
      }
    }
  },
  methods: {
    titleShow(e, el) {
      el.target.title = e.label;
    },
    ATabFnc(val){
      this.getList(this.CurrentPage, this.pageSize, this.pd, 1);
    },
    BTabFnc(val){
      this.getList(this.CurrentPage, this.pageSize, this.pd, 1);
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
    //================================简表结束=====================
    //================================处理========================
    //时间轴
    getTimeData(serial){
      this.$api.post(this.Global.aport3+'/issueDataZfjl/getIssueDataZfjlList',{serial:serial,token:this.token},r=>{
        this.cxData = r;
      })
    },
    editFnc(data){
      this.editData = data;
      this.$store.dispatch("aGetBackstatus", data.datatype)
      this.getTimeData(data.serial)//时间轴
      this.$api.post(this.Global.aport3+'/issueDataAddress/getIssueDataAddressInfor',{ADDRESS_SERIAL:data.serial,token:this.token},r=>{
        this.editData.userInforList = r.data;
        if(this.editData.userInforList.length==0){
          this.editData.userInforList=[{
            passportno:'',
            nationality:'',
            phone:'',
            arr_passport_photo:[],
            arr_portrait_photo:[],
            arr_visa_photo:[],
          }]
        }
        this.clDialogVisible=true;
      })
    },
    detailFnc(data){

    },
    radioChange(){},
    //放大查看图片
    handlePictureCardPreview(){
      this.isimgclick = true;
      this.imgList = [file.url]
    },
    //删除照片
    handleRemove(item,key,file,fileList){
      this.editData.userInforList[key][item] = [];
      console.log('shanchu',file,fileList)
    },
    //图片上传change事件  base64交互
    imgOnChange(item,key,file,fileList){
      console.log('+++',key,file.raw.type,fileList)
      // var reader = new FileReader()
      // reader.readAsDataURL(file.raw)
      // reader.onload = () => {
      //   // console.log('file 转 base64结果：' + reader.result)
      //   this.userInforList[key][item] = [{url:reader.result,type:file.raw.type}];
      //   // console.log('----',this.userInforList)
      // }

      this.compressImg(file.raw).then(data =>{
        this.editData.userInforList[key][item] = [{url:data,type:file.raw.type,updataPhotoStatus:true}];
      })
    },
    Add_DZ(){
      this.dzmodel={
        passportno:'',
        nationality:'',
        phone:'',
        arr_passport_photo:[],
        arr_portrait_photo:[],
        arr_visa_photo:[],
      }
      this.editData.userInforList.push(this.dzmodel)
      console.log('====',this.editData.userInforList)
    },
    deleteModel_DZ(ind){
      this.editData.userInforList.splice(ind,1)
    },
    //==============================新增=========================
    xzFnc(){
      this.xzData={};
      this.V.$reset('demo')
      this.xzDialogVisible=true;
      if(this.juState=='2'){//分局登录
        this.xzData.suboffice = this.orgCode
        this.getPSC(this.orgCode);
      }
      if(this.juState=='3'){//派出所登录
        this.xzData.suboffice = this.$store.state.pcsToju;
        this.getPSC(this.$store.state.pcsToju);
        this.xzData.policestation = this.orgCode;
      }
    },
    xzSave(){
      this.V.$submit('demo',(canSumit,data) =>{
        if(!canSumit) return;
        this.xzData.token = this.$store.state.token;
        this.$api.post(this.Global.aport3+'/issueDataAddress/addIssueDataAddress',this.xzData,r=>{
          console.log(r);
          // this.getList(this.CurrentPage,this.pageSize,this.pd, 1)
          // this.xzDialogVisible=false;
        })
      })
    },
    getFj(){
      this.$api.post(this.Global.aport5+'/djbhl/getallfj',{userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
       r =>{
         if(r.success){
           this.getallfj=r.data;
         }
       })
    },
    getPSC(i){
      this.$set(this.xzData,'policestation','');
      this.$api.post(this.Global.aport5+'/djbhl/getpcsbyfjdm',{pd:{fjdm:i},userCode:this.userCode,userName:this.userName,orgJB:this.juState,orgCode:this.orgCode,token:this.token},
      r =>{
        if(r.success){
          this.PSC=r.data;
        }
      })
    },
    //导入
    importFnc(){},
    //导出
    exportFnc(){},
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
      if (pd.hasOwnProperty("YJID")) {
        delete pd["YJID"];
      }
      if (type == 1) {
        this.selectionAll = [];
        this.multipleSelection = [];
        this.selectionReal = [];
      }
      let p = {
        currentPage: currentPage,
        showCount: showCount,
        pd: pd,
        token: this.token
      };
      p.pd.clzt = this.page;
      p.pd.cljg = this.pageTab;
      p.pd.bmbh = this.orgCode;
      p.pd.jb = this.juState;
      this.$api.post(
        this.Global.aport3 + "/issueDataAddress/getIssueDataAddressPage",p,r => {
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
