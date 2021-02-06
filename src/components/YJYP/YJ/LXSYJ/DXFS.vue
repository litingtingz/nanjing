<template lang="html">
  <!-- 短信发送界面  -->
  <div class="yymain">
    <div class="yytitle">
      <el-row type="flex">
        <el-col :span="22" class="br pr-20">
          <el-row align="center"   :gutter="2">
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">类型：</span>
                    <el-select v-model="RYLX" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option>常住人员</el-option>
                      <el-option>临住人员</el-option>
                      <el-option>难民</el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">中文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="ZWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">英文姓名：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="YWXM" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">身份：</span>
                    <el-select v-model="RYSF" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option>常住人员</el-option>
                      <el-option>临住人员</el-option>
                      <el-option>难民</el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">服务处所：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="FUCS" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"  class="input-item">
                    <span class="input-text">国家地区：</span>
                    <el-select v-model="GJDQ" filterable clearable default-first-option placeholder="请选择"  size="small" class="input-input">
                      <el-option>常住人员</el-option>
                      <el-option>临住人员</el-option>
                      <el-option>难民</el-option>
                    </el-select>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">住宿地址：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="ZSDZ" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">电话：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="LXDH" class="input-input"></el-input>
                </el-col>
                <el-col  :sm="24" :md="12" :lg="8"   class="input-item">
                   <span class="input-text">证件号码：</span>
                   <el-input placeholder="请输入内容" size="small" v-model="ZJHM" class="input-input"></el-input>
                </el-col>
          </el-row>
         </el-col>
        <el-col :span="2" class="down-btn-area">
          <el-button type="success" size="small"  class="mb-15" @click="getList(CurrentPage,pageSize,pd,1)">查询</el-button>
          <el-button type="primary" size="small"  class="t-ml0" @click="getdxfs()">短信预览</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="yycontent">
       <div class="yylbt mb-15">数据列表 历史记录</div>
       <!-- 简表按钮 -->
        <!-- <el-row class="mb-15">
         <el-button type="primary"  size="small" @click="jbFnc" style="float:right;margin-top:-35px">简表</el-button>
        </el-row> -->
       <!-- 简表按钮 -->
      <el-table>          
           <el-table-column
             type="selection"
             width="50">
           </el-table-column>
           <el-table-column
             prop="ZWXM"
             label="英文姓名">
           </el-table-column>
           <el-table-column
             prop="ZWXM"
             label="中文姓名">
           </el-table-column>
           <el-table-column
             prop="ZJHM"
             label="证件号码">
           </el-table-column>
           <el-table-column
             prop="RYSF"
             label="人员身份">
           </el-table-column>
           <el-table-column
             prop="FUCS"
             label="服务处所">
           </el-table-column>
           <el-table-column
             prop="GJDQ"
             label="国家地区">
           </el-table-column>
           <!-- <el-table-column
             prop="ZSDZ"
             label="住宿地址">
           </el-table-column> -->
           <el-table-column
             prop="LXDH"
             label="联系电话">
           </el-table-column>
         </el-table>
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
      pd:{},

      }
  },
  activated(){
    //查询方法 
    this.getList(this.CurrentPage, this.pageSize, this.pd);
  },
  methods:{
      getList(currentPage,showCount,pd,type){
    
      }
  }
}
</script>
<style scoped>

</style>
