<template lang="html">
  <el-form  ref="formLN4">
    <el-row :gutter="3"  class="mb-6">
        <el-col :span="12" class="input-item">
          <span class="input-text">姓名：</span>
          <span class="input-input detailinput">  {{formLN4.XM_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">性别：</span>
          <span class="input-input detailinput">  {{formLN4.XB_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">出生日期：</span>
          <span class="input-input detailinput">  {{formLN4.CSRQ_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="国籍/地区">国籍/地区：</span>
          <span class="input-input detailinput">  {{formLN4.GJDQ_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">证件种类：</span>
          <span class="input-input detailinput">  {{formLN4.ZJZL_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="证件号码">证件号码：</span>
          <span class="input-input detailinput">  {{formLN4.ZJHM_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="购票日期">购票日期：</span>
          <span class="input-input detailinput">  {{formLN4.GPRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="发车日期">发车日期：</span>
          <span class="input-input detailinput">  {{formLN4.CFRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="上车站点名称">上车站点名称：</span>
          <span class="input-input detailinput">  {{formLN4.CFCS}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="到达站点名称">到达站点名称：</span>
          <span class="input-input detailinput">  {{formLN4.DDCS}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="车牌号">车牌号：</span>
          <span class="input-input detailinput">  {{formLN4.BCH}}</span>
        </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name:'KY',
  props:['rowData'],
  data(){
    return{
      formLN4:{},
    }
  },
  mounted(){
    this.formLN4 = this.rowData
  },
  watch:{},
  methods:{},
}
</script>
