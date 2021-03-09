<template lang="html">
  <el-form  ref="formLN1">
     <el-row :gutter="3"  class="mb-6">
        <el-col :span="12" class="input-item">
          <span class="input-text">姓名：</span>
          <span class="input-input detailinput">  {{formLN1.XM_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">性别：</span>
          <span class="input-input detailinput">  {{formLN1.XB_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">出生日期：</span>
          <span class="input-input detailinput">  {{formLN1.CSRQ_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="国籍/地区">国籍/地区：</span>
          <span class="input-input detailinput">  {{formLN1.GJDQ_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">证件种类：</span>
          <span class="input-input detailinput">  {{formLN1.ZJZL_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="证件号码">证件号码：</span>
          <span class="input-input detailinput">  {{formLN1.ZJHM_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="发车日期">发车日期：</span>
          <span class="input-input detailinput">  {{formLN1.FCRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="列车车次">列车车次：</span>
          <span class="input-input detailinput">  {{formLN1.TRAIN_NO}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="发车站">发车站：</span>
          <span class="input-input detailinput">  {{formLN1.CFCS}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="到达站">到达站：</span>
          <span class="input-input detailinput">  {{formLN1.DDCS}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="车厢号">车厢号：</span>
          <span class="input-input detailinput">  {{formLN1.COACH}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="座位号">座位号：</span>
          <span class="input-input detailinput">  {{formLN1.SEAT}}</span>
        </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name:'TLDP',
  props:['rowData'],
  data(){
    return{
      formLN1:{},
    }
  },
  mounted(){
    this.formLN1 = this.rowData
  },
  watch:{},
  methods:{},
}
</script>
