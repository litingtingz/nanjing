<template lang="html">
  <el-form  ref="formLN2">
     <el-row :gutter="3"  class="mb-6">
        <el-col :span="12" class="input-item">
          <span class="input-text">姓名：</span>
          <span class="input-input detailinput">  {{formLN2.XM_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">性别：</span>
          <span class="input-input detailinput">  {{formLN2.XB_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">出生日期：</span>
          <span class="input-input detailinput">  {{formLN2.CSRQ_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="国籍/地区">国籍/地区：</span>
          <span class="input-input detailinput">  {{formLN2.GJDQ_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">证件种类：</span>
          <span class="input-input detailinput">  {{formLN2.ZJZL_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="证件号码">证件号码：</span>
          <span class="input-input detailinput">  {{formLN2.ZJHM_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="航班号">航班号：</span>
          <span class="input-input detailinput">  {{formLN2.FLT_NUMBER}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="航空公司">航空公司：</span>
          <span class="input-input detailinput">  {{formLN2.FLT_AIRLCODE}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="航班日期">航班日期：</span>
          <span class="input-input detailinput">  {{formLN2.FLT_DATE}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="起飞站">起飞站：</span>
          <span class="input-input detailinput">  {{formLN2.CFCSMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="到达站">到达站：</span>
          <span class="input-input detailinput">  {{formLN2.DDCSMC}}</span>
        </el-col>

        <el-col :span="12" class="input-item">
          <span class="input-text" title="离港时间">离港时间：</span>
          <span class="input-input detailinput">  {{formLN2.CFSJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="进港时间">进港时间：</span>
          <span class="input-input detailinput">  {{formLN2.DDSJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">电话：</span>
          <span class="input-input detailinput">  {{formLN2.TELNO}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">仓位：</span>
          <span class="input-input detailinput">  {{formLN2.PSR_CLASS}}</span>
        </el-col>

        <el-col :span="12" class="input-item">
          <span class="input-text" title="盲人旅客标识">盲人旅客标识：</span>
          <span class="input-input detailinput">  {{formLN2.PSR_BLND}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="手提狗笼">手提狗笼：</span>
          <span class="input-input detailinput">  {{formLN2.PSR_AVIH}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">宠物笼子：</span>
          <span class="input-input detailinput">  {{formLN2.PSR_PETC}}</span>
        </el-col>
      </el-row>
  </el-form>
</template>
<script>
export default {
  name:'MHJG',
  props:['rowData'],
  data(){
    return{
      formLN2:{},
    }
  },
  mounted(){
    this.formLN2 = this.rowData
  },
  watch:{},
  methods:{},
}
</script>
