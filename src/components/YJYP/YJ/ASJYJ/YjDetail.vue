<template>
  <div class="yymain">
    <div class="t-content">
      <div class="yj-title mb-15">基本信息</div>
      <el-row type="flex">
        <el-col :span="21">
          <el-row>
            <el-col :span="6" class="basic-box">
              <span class="basic-key">姓名：</span>
              <span class="basic-value">张三</span>
            </el-col>
            <el-col :span="6" class="basic-box">
              <span class="basic-key">性别：</span>
              <span class="basic-value">男</span>
            </el-col>
            <el-col :span="6" class="basic-box">
              <span class="basic-key">国籍：</span>
              <span class="basic-value">中国</span>
            </el-col>
            <el-col :span="6" class="basic-box">
              <span class="basic-key">证件种类：</span>
              <span class="basic-value">护照</span>
            </el-col>
            <el-col :span="6" class="basic-box">
              <span class="basic-key">证件有效期：</span>
              <span class="basic-value">M123456</span>
            </el-col>
            <el-col :span="6" class="basic-box">
              <span class="basic-key">签证种类：</span>
              <span class="basic-value">护照</span>
            </el-col>
            <el-col :span="6" class="basic-box">
              <span class="basic-key">签证号码：</span>
              <span class="basic-value">QZ123456</span>
            </el-col>
            <el-col :span="6" class="basic-box">
              <span class="basic-key">证件号码：</span>
              <span class="basic-value">QZ123456</span>
            </el-col>
            <el-col :span="6" class="basic-box">
              <span class="basic-key">预警时间：</span>
              <!-- <div class="basic-value-box"> -->
                <span title="2019/01/20 17:45:01" class="basic-value">2019/01/20 17:45:01</span>
              <!-- </div> -->
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="3" class="wh-center-btn">
          <el-button type="primary" size="mini" 
          @click="$router.push({name:'RYHX_XQ',query:{zjhm:$route.query.row.ZJHM,gjdq:$route.query.row.GJ,row:$route.query.row}})">人员画像</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="mt-10">
      <el-row class="yj-table-box" type="flex" justify="space-between" style="flex-wrap: wrap">
        <el-col :span="12" class="t-content mb-5">
          <div class="yj-title mb-15">出入境信息</div>
          <el-table
            :data="tdCrj"
            border
            style="width: 100%"
            class="yj-table">
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="count"
              label="数量">
              <template slot-scope="scope">
                <span class="hand tc-b">{{ scope.row.count }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12" class="t-content mb-5">
          <div class="yj-title mb-15">临住信息</div>
          <el-table
            :data="tdCrj"
            border
            style="width: 100%"
            class="yj-table">
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="count"
              label="数量">
              <template slot-scope="scope">
                <span class="hand tc-b">{{ scope.row.count }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="12" class="t-content mb-5">
          <div class="yj-title mb-15">临住信息</div>
          <el-table
            :data="tdCrj"
            border
            style="width: 100%"
            class="yj-table">
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="mc"
              label="入境事由">
            </el-table-column>
            <el-table-column
              prop="count"
              label="数量">
              <template slot-scope="scope">
                <span class="hand tc-b">{{ scope.row.count }}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      tdCrj:[
        {
          mc:'身份证',
          count:100,
        },
        {
          mc:'身份证',
          count:100,
        },
      ],
    }
  }
}
</script>
<style scoped>

</style>