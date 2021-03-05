<template lang="html">
  <el-form    ref="nzinfo">
    <el-row :gutter="2"  class="mb-6">
      <el-col :span="12" class="input-item">
        <span class="input-text">姓名：</span>
        <span class="input-input detailinput">  {{nzinfo.XM}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">国家地区：</span>
        <span class="input-input detailinput">  {{nzinfo.GJDQMC}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">性别：</span>
        <span class="input-input detailinput">  {{nzinfo.XBDM}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">出生日期：</span>
        <span class="input-input detailinput">  {{nzinfo.CSRQ}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">电话号码：</span>
        <span class="input-input detailinput">  {{nzinfo.DHHM}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">邮箱：</span>
        <span class="input-input detailinput">  {{nzinfo.YXDZ}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">护照号码：</span>
        <span class="input-input detailinput">  {{nzinfo.HZHM}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text" title="现持证件种类">现持证件种类：</span>
        <span class="input-input detailinput">  {{nzinfo.XCQZLX}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">身份：</span>
        <span class="input-input detailinput">  {{nzinfo.SFMC}}</span>
      </el-col>

      <el-col :span="12" class="input-item">
        <span class="input-text">省：</span>
        <span class="input-input detailinput">  {{nzinfo.SHENG}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">城市：</span>
        <span class="input-input detailinput">  {{nzinfo.CS}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text" title="入境签证类型">入境签证类型：</span>
        <span class="input-input detailinput">  {{nzinfo.RJQZLXMC}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">有效签证：</span>
        <span class="input-input detailinput">  {{nzinfo.SFCYYXQZ}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text" title="临住登记情况">临住登记情况：</span>
        <span class="input-input detailinput">  {{nzinfo.LZDJMC}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">人数：</span>
        <span class="input-input detailinput">  {{nzinfo.RS}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">案卷编号：</span>
        <span class="input-input detailinput">  {{nzinfo.AJBH}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">注册日期：</span>
        <span class="input-input detailinput">  {{nzinfo.ZCRQ}}</span>
      </el-col>
      <el-col :span="12" class="input-item">
        <span class="input-text">详细地址：</span>
        <span class="input-input detailinput">  {{nzinfo.XXDZ}}</span>
      </el-col>
  </el-row>
  </el-form>
</template>
<script>
export default {
  name:'NMXX',
  props:['rowData'],
  data(){
    return{
      nzinfo:{},
    }
  },
  mounted(){
    this.nzinfo = this.rowData
  },
  watch:{},
  methods:{},
}
</script>

