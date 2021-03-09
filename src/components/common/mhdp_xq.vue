<template lang="html">
  <el-form  ref="formLN3">
    <el-row :gutter="3"  class="mb-6">
        <el-col :span="12" class="input-item">
          <span class="input-text">姓名：</span>
          <span class="input-input detailinput">  {{formLN3.XM_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">性别：</span>
          <span class="input-input detailinput">  {{formLN3.XB_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">出生日期：</span>
          <span class="input-input detailinput">  {{formLN3.CSRQ_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="国籍/地区">国籍/地区：</span>
          <span class="input-input detailinput">  {{formLN3.GJDQ_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">证件种类：</span>
          <span class="input-input detailinput">  {{formLN3.ZJZL_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="证件号码">证件号码：</span>
          <span class="input-input detailinput">  {{formLN3.ZJHM_CRJ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="承运航空公司">承运航空公司：</span>
          <span class="input-input detailinput">  {{formLN3.AIR_CARR_CD}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="航班号">航班号：</span>
          <span class="input-input detailinput">  {{formLN3.AIR_SEG_FLT_NBR}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="出发日期">出发日期：</span>
          <span class="input-input detailinput">  {{formLN3.CFRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="到达日期">到达日期：</span>
          <span class="input-input detailinput">  {{formLN3.DDRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="登机机场">登机机场：</span>
          <span class="input-input detailinput">  {{formLN3.CFCSMC}}</span>
        </el-col>

        <el-col :span="12" class="input-item">
          <span class="input-text" title="到达机场">到达机场：</span>
          <span class="input-input detailinput">  {{formLN3.DDCSMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="子舱位">子舱位：</span>
          <span class="input-input detailinput">  {{formLN3.SUB_CLS_CD}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="代理人代号">代理人代号：</span>
          <span class="input-input detailinput">  {{formLN3.OFFC_CD}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="责任航空公司">责任航空公司：</span>
          <span class="input-input detailinput">  {{formLN3.RSP_AIRLN_CD}}</span>
        </el-col>

        <el-col :span="12" class="input-item">
          <span class="input-text" title="责任代理人">责任代理人：</span>
          <span class="input-input detailinput">  {{formLN3.RSP_OFC_CD}}</span>
        </el-col>

        <el-col :span="12" class="input-item">
          <span class="input-text" title="团队标识">团队标识：</span>
          <span class="input-input detailinput">  {{formLN3.GRP_IND}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="VIP标识">VIP标识：</span>
          <span class="input-input detailinput">  {{formLN3.VIP_IND}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="同订票人数">同订票人数：</span>
          <span class="input-input detailinput">  {{formLN3.PN_SEAT}}</span>
        </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name:'MHDP',
  props:['rowData'],
  data(){
    return{
      formLN3:{},
    }
  },
  mounted(){
    this.formLN3 = this.rowData
  },
  watch:{},
  methods:{},
}
</script>
