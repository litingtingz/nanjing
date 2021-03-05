<template lang="html">
  <el-form    ref="jlinfo">
    <el-row :gutter="2"  class="mb-6">
        <el-col :span="12" class="input-item">
          <span class="input-text">姓名：</span>
          <span class="input-input detailinput">  {{jlinfo.XM}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
         <span class="input-text">国家地区：</span>
         <span class="input-input detailinput">  {{jlinfo.GJDQMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
         <span class="input-text">性别：</span>
         <span class="input-input detailinput">  {{jlinfo.XBMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">出生日期：</span>
          <span class="input-input detailinput">  {{jlinfo.CSRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">证件种类：</span>
          <span class="input-input detailinput">  {{jlinfo.ZJZLMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">证件号码：</span>
          <span class="input-input detailinput">  {{jlinfo.ZJHM}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="入境证件种类">入境证件种类：</span>
          <span class="input-input detailinput">  {{jlinfo.RJZJZLMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="入境证件号码">入境证件号码：</span>
          <span class="input-input detailinput">  {{jlinfo.RJZJHM}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">签证类型：</span>
          <span class="input-input detailinput">  {{jlinfo.QZLXMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">签证号码：</span>
          <span class="input-input detailinput">  {{jlinfo.QZHM}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="入境签证类型">入境签证类型：</span>
          <span class="input-input detailinput">  {{jlinfo.RJQZLXMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="入境签证号码">入境签证号码：</span>
          <span class="input-input detailinput">  {{jlinfo.RJQZHM}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="签证签发日期">签证签发日期：</span>
          <span class="input-input detailinput">  {{jlinfo.QZQFRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="签证有效日期">签证有效日期：</span>
          <span class="input-input detailinput">  {{jlinfo.QZYXRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">入境日期：</span>
          <span class="input-input detailinput">  {{jlinfo.RJRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">入境口岸：</span>
          <span class="input-input detailinput">  {{jlinfo.RJKAMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">签发机关：</span>
          <span class="input-input detailinput">  {{jlinfo.QFJGMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">行政区划：</span>
          <span class="input-input detailinput">  {{jlinfo.XZQHMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">口岸：</span>
          <span class="input-input detailinput">  {{jlinfo.KAMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">签发地：</span>
          <span class="input-input detailinput">  {{jlinfo.QFDMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="住宿登记日期">住宿登记日期：</span>
          <span class="input-input detailinput">  {{jlinfo.ZSDJRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">住宿登记地：</span>
          <span class="input-input detailinput">  {{jlinfo.ZSDJD}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="最后住宿登记日期">最后住宿登记日期：</span>
          <span class="input-input detailinput">  {{jlinfo.ZHZSDJRQ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text" title="最后住宿登记地">最后住宿登记地：</span>
          <span class="input-input detailinput">  {{jlinfo.ZHZSDJDMC}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">邀请单位：</span>
          <span class="input-input detailinput">  {{jlinfo.YQDW}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">地址：</span>
          <span class="input-input detailinput">  {{jlinfo.DZ}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">联系电话：</span>
          <span class="input-input detailinput">  {{jlinfo.LXDH}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">操作人：</span>
          <span class="input-input detailinput">  {{jlinfo.CZR}}</span>
        </el-col>
        <el-col :span="12" class="input-item">
          <span class="input-text">操作时间：</span>
          <span class="input-input detailinput">  {{jlinfo.CZSJ}}</span>
        </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  name:'FFJL',
  props:['rowData'],
  data(){
    return{
      jlinfo:{},
    }
  },
  mounted(){
    this.jlinfo = this.rowData
  },
  watch:{},
  methods:{
    // getData1(){
    //   this.pp.RGUID=this.id;
    //   let p = {
    //     "pd": this.pp
    //   };
    //    this.$api.post(this.Global.aport4+'/eS_CRJJLBController/getEntityByRGUID', p,
    //     r => {
    //       this.jlinfo=r.data.resultList;
    //   })
    // },
  },
}
</script>
