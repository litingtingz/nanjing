<template lang="html">
  <el-form    ref="jzinfo">
    <el-row :gutter="2"  class="mb-6">
      <el-col :span="12" class="input-item">
        <span class="input-text">中文姓名：</span>
        <span class="input-input detailinput">  {{jzinfo.ZWXM}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">英文姓名：</span>
        <span class="input-input detailinput">  {{jzinfo.YWXM}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">国家地区：</span>
        <span class="input-input detailinput">  {{jzinfo.GJDQ_DESC}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">性别：</span>
        <span class="input-input detailinput">  {{jzinfo.XB_DESC}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">出生日期：</span>
        <span class="input-input detailinput">  {{jzinfo.CSRQ}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">证件种类：</span>
        <span class="input-input detailinput">  {{jzinfo.ZJZL_DESC}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">证件号码：</span>
        <span class="input-input detailinput">  {{jzinfo.ZJHM}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">签证类型：</span>
        <span class="input-input detailinput">  {{jzinfo.QZZL_DESC}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">签证号码：</span>
        <span class="input-input detailinput">  {{jzinfo.QZHM}}</span>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name:'JZXX',
  props:['rowData'],
  data(){
    return{
      jzinfo:{},
    }
  },
  mounted(){
    this.jzinfo = this.rowData
  },
  watch:{},
  methods:{},
}
</script>

