
<template lang="html">
  <div class="ryhx">
    <div class="tshu" id="target" style="overflow-y:hidden">
      <div style="margin: 10px; padding: 20px;">
        <el-container style="overflow-y:hidden">
          <!-- <el-row> -->
          <el-aside style="width:300px;overflow-y:hidden">
            <!-- 左侧面板开始 -->
            <!-- <el-col :span="4" style=""> -->
            <el-card shadow="hover">
              <!-- <div class="photo-content"> -->
              <img
                style="height:120px;width:120px;margin-left:23%;margin-bottom:5px;border-radius:50%;border:1px solid #ccc"
              />
              <el-button
                @click="drawer = true"
                type="text"
                style="margin-left:35%"
              >
                个人标签
              </el-button>
              <el-drawer
                title="个人标签"
                :visible.sync="drawer"
                :before-close="handleClose"
              >
                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item
                    title="标签分类一"
                    name="1"
                    style="padding-left:20px"
                  >
                    <div>存在年龄偏高</div>
                    <div>33岁</div>
                  </el-collapse-item>
                  <el-collapse-item
                    title="标签分类二"
                    name="2"
                    style="padding-left:20px"
                  >
                    <div>211高校</div>
                    <div>留学生申请信息</div>
                  </el-collapse-item>
                  <el-collapse-item
                    title="标签分类三"
                    name="3"
                    style="padding-left:20px"
                  >
                    <div>男</div>
                    <div>美国</div>
                    <div>南京农业大学</div>
                  </el-collapse-item>
                  <el-collapse-item
                    title="标签分类四"
                    name="4"
                    style="padding-left:20px"
                  >
                    <div>经济管理学院</div>
                    <div>农业经济管理</div>
                  </el-collapse-item>
                </el-collapse>
              </el-drawer>
              <!-- <div class="hisPhoto">
                      查看历史照片
                    </div> -->
              <div
                style="height:1px;width:80;margin:20px auto;background-color:#ccc"
              ></div>
              <el-row>
                <el-col class="t1">
                  性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：
                </el-col>
                <el-col class="t1">
                  <!-- 出&nbsp;生&nbsp;日&nbsp;期：{{(baseinfo.csrq).substring(0,10)}} -->
                  出&nbsp;生&nbsp;日&nbsp;期：
                </el-col>
                <el-col class="t1">
                  国&nbsp;家&nbsp;地&nbsp;区：
                </el-col>
                <el-col class="t1">
                  证&nbsp;件&nbsp;种&nbsp;类：
                </el-col>
                <el-col class="t1">
                  <!-- 证&nbsp;件&nbsp;号&nbsp;码：{{baseinfo.zjhm}} -->
                  证&nbsp;件&nbsp;号&nbsp;码：121332
                </el-col>
                <el-col class="t1">
                  证件有效期：
                </el-col>
                <!-- <el-col class="t1">
                            英文姓名：{{baseinfo.ywxm}}
                          </el-col>
                          <el-col class="t1">
                            中文姓名：{{baseinfo.zwxm}}
                          </el-col> -->
              </el-row>
              <!-- </div>         -->
            </el-card>
            <!-- </el-col> -->
            <!-- 左侧面板结束 -->
          </el-aside>
          <!-- 右侧面板开始 -->
          <el-main style="margin-top:-20px;overflow-y:hidden">
            <el-row>
              <el-col :span="24">
                <el-carousel
                  arrow="always"
                  height="100px"
                  :autoplay="false"
                  indicator-position="none"
                >
                  <el-carousel-item>
                    <el-row :gutter="20" class="list">
                      <el-col :span="4" :offset="0">
                        <div
                          class="item"
                          style="height:80px;background-color: #90C8F9;"
                        >
                          <div class="title">出入境记录</div>
                          <div class="bj">3</div>
                          <div class="sl">15</div>
                          <div class="ci">次</div>
                        </div>
                      </el-col>
                      <el-col :span="4" :offset="0">
                        <div
                          class="item"
                          style="height:80px;background-color: #46B1E7;"
                        >
                          <div class="title">临住记录</div>
                          <div class="bj">3</div>
                          <div class="sl">15</div>
                          <div class="ci">次</div>
                        </div>
                      </el-col>
                      <el-col :span="4" :offset="0">
                        <div
                          class="item"
                          style="height:80px;background-color: #42C6DF;"
                        >
                          <div class="title">常住记录</div>
                          <div class="bj">3</div>
                          <div class="sl">15</div>
                          <div class="ci">次</div>
                        </div>
                      </el-col>
                      <el-col :span="4" :offset="0">
                        <div
                          class="item"
                          style="height:80px;background-color: #F0C078;"
                        >
                          <div class="title">案事件记录</div>
                          <div class="bj">3</div>
                          <div class="sl">15</div>
                          <div class="ci">条</div>
                        </div>
                      </el-col>
                      <el-col :span="4" :offset="0">
                        <div
                          class="item"
                          style="height:80px;background-color:#A8D9DE;"
                        >
                          <div class="title">留学生申请记录</div>
                          <div class="bj">3</div>
                          <div class="sl">15</div>
                          <div class="ci">条</div>
                        </div>
                      </el-col>
                      <el-col :span="4" :offset="0">
                        <div
                          class="item"
                          style="height:80px;background-color:#32B6CF;"
                        >
                          <div class="title">留学生在校记录</div>
                          <div class="bj">3</div>
                          <div class="sl">15</div>
                          <div class="ci">条</div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-carousel-item>
                  <el-carousel-item>
                    <el-row :gutter="20" class="list">
                      <el-col :span="4" :offset="0">
                        <div
                          class="item"
                          style="height:80px;background-color:yellow;"
                        >
                          <div class="title">留学生在校记录</div>
                          <div class="bj">3</div>
                          <div class="sl">15</div>
                          <div class="ci">条</div>
                        </div>
                      </el-col>
                      <el-col :span="4" :offset="0">
                        <div
                          class="item"
                          style="height:80px;background-color:#ccc;"
                        >
                          <div class="title">留学生在校记录</div>
                          <div class="bj">3</div>
                          <div class="sl">15</div>
                          <div class="ci">条</div>
                        </div>
                      </el-col>
                      <el-col :span="4" :offset="0">
                        <div
                          class="item"
                          style="height:80px;background-color:#3e8e8e;"
                        >
                          <div class="title">留学生在校记录</div>
                          <div class="bj">3</div>
                          <div class="sl">15</div>
                          <div class="ci">条</div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-carousel-item>
                </el-carousel>
              </el-col>
            </el-row>
            <!-- 右侧下边面板部分 -->
            <el-container>
              <!-- 主要面板部分开始 -->
              <el-main style="height:379px;margin-top:20px;padding:0px 10px">
                <!-- 出入境表格 -->
                <el-row :gutter="10">
                  <!-- 表格内容开始 -->
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;出入境记录</div>
                          <el-button type="text" size="mini" @click="dialog = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb"  width="80%"  :header-cell-style="{color:'#1c6cb4',}"
                              :data="tableData1.length==0?tableData1:tableData1.slice((CurrentPage1-1)*pageSize1,CurrentPage1*pageSize1)"
                          >
                            <el-table-column
                              prop="ioDate"
                              label="出入境日期">
                            </el-table-column>
                            <el-table-column
                              prop="personType.value"
                              label="人员类别（出入境状态）">
                            </el-table-column>
                            <el-table-column
                              prop="ioPort.value"
                              label="出入境口岸">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;临住信息</div>
                          <el-button type="text" size="mini" @click="dialog = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}">
                            <el-table-column
                              prop="ioDate"
                              label="出入境日期">
                            </el-table-column>
                            <el-table-column
                              prop="personType.value"
                              label="人员类别（出入境状态）">
                            </el-table-column>
                            <el-table-column
                              prop="ioPort.value"
                              label="出入境口岸">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;常住信息</div>
                          <el-button type="text" size="mini" @click="dialog = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}">
                            <el-table-column
                              prop="ioDate"
                              label="出入境日期">
                            </el-table-column>
                            <el-table-column
                              prop="personType.value"
                              label="人员类别（出入境状态）">
                            </el-table-column>
                            <el-table-column
                              prop="ioPort.value"
                              label="出入境口岸">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;案事件记录</div>
                          <el-button type="text" size="mini" @click="dialog = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}">
                            <el-table-column
                              prop="ioDate"
                              label="出入境日期">
                            </el-table-column>
                            <el-table-column
                              prop="personType.value"
                              label="人员类别（出入境状态）">
                            </el-table-column>
                            <el-table-column
                              prop="ioPort.value"
                              label="出入境口岸">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;民航进出港信息</div>
                          <el-button type="text" size="mini" @click="dialog = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}">
                            <el-table-column
                              prop="ioDate"
                              label="出入境日期">
                            </el-table-column>
                            <el-table-column
                              prop="personType.value"
                              label="人员类别（出入境状态）">
                            </el-table-column>
                            <el-table-column
                              prop="ioPort.value"
                              label="出入境口岸">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;单位信息</div>
                          <el-button type="text" size="mini" @click="dialog = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}">
                            <el-table-column
                              prop="ioDate"
                              label="出入境日期">
                            </el-table-column>
                            <el-table-column
                              prop="personType.value"
                              label="人员类别（出入境状态）">
                            </el-table-column>
                            <el-table-column
                              prop="ioPort.value"
                              label="出入境口岸">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;留学生信息-申请信息</div>
                          <el-button type="text" size="mini" @click="dialog = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}">
                            <el-table-column
                              prop="ioDate"
                              label="出入境日期">
                            </el-table-column>
                            <el-table-column
                              prop="personType.value"
                              label="人员类别（出入境状态）">
                            </el-table-column>
                            <el-table-column
                              prop="ioPort.value"
                              label="出入境口岸">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;留学生信息-在校信息</div>
                          <el-button type="text" size="mini" @click="dialog = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}">
                            <el-table-column
                              prop="ioDate"
                              label="出入境日期">
                            </el-table-column>
                            <el-table-column
                              prop="personType.value"
                              label="人员类别（出入境状态）">
                            </el-table-column>
                            <el-table-column
                              prop="ioPort.value"
                              label="出入境口岸">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;通报人员信息</div>
                          <el-button type="text" size="mini" @click="dialog = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}">
                            <el-table-column
                              prop="ioDate"
                              label="出入境日期">
                            </el-table-column>
                            <el-table-column
                              prop="personType.value"
                              label="人员类别（出入境状态）">
                            </el-table-column>
                            <el-table-column
                              prop="ioPort.value"
                              label="出入境口岸">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <!-- 表格内容结束 -->
                </el-row>
              </el-main>
              <!-- 主要面板部分结束 -->
            </el-container>
          </el-main>
          <!-- 右侧面板结束 -->
        </el-container>
        <!-- 底部时间轴开始 -->
        <div
          style="width:100%;height:30px;font-weight:bold;font-size:18px;margin-top:10px"
        >
          人员入住信息
        </div>
        <el-row :gutter="20" style="background-color:#fff;height:200px">
          <el-col :span="24">
            <div class="ul_box">
              <ul class="my_timeline" ref="mytimeline" style="margin-left: 10px;">
                <li class="my_timeline_item" v-for="(item, index) in timeLineList" :key="index">
                  <!-- 节点对应的文字信息 -->
                  <div class="my_timeline_item_content" :style="{color: item.color, fontSize: item.fontsize + 'px',}">
                    {{ item.timestamp }}
                  </div>
                  <!--圈圈节点-->
                  <div
                    class="my_timeline_node"
                    :style="{
                      backgroundColor: item.bgcolor,
                      width: item.size + 'px',
                      height: item.size + 'px',
                    }"
                    @click="changeActive(index)"
                    :class="{ active: index == timeIndex }"
                  ></div>
                  <!--线-->
                  <div class="my_timeline_item_line"></div>
                  <!-- 描述的线 -->
                  <el-popover
                    placement="bottom"
                    width=""
                    trigger="manual"
                    v-model="desc"
                    content="内容"
                  >
                    <!-- <el-button slot="reference">content</el-button> -->
                    <div class="my_timeline_desc_line" slot="reference" @click="show"></div>
                  </el-popover>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
        <!-- 底部时间轴结束 -->
      </div>
    </div>
    <!-- 弹出的表格开始 -->
    <el-dialog :visible.sync="dialog">
      <el-table class="w-jb" :data="data[0].student">
        <el-table-column>
          <template slot="header" slot-scope="scope">
            <div class="header">
              <div>{{ data[0].title }}</div>
              <el-button type="primary" size="mini">更多</el-button>
            </div>
          </template>
          <template slot-scope="scope">
            <div class="desc">
              <div>
                {{ scope.row.title }}
              </div>
              <div>
                {{ scope.row.time }}
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
    <!-- 弹出的表格结束 -->
  </div>
</template>
<script scoped>
import LZXXRY from './lzxxxq_ry'
import ANSJRY from './ansjxq_ry'
import CRJXXRY from './crjxq_ry'
import LXSXX from '../../../common/lxsxx_xq'
import LXSXXZX from '../../../common/lxsZx_xq'
import CZXXRY from './czxxxq_ry'
import DWXX from '../../../common/dwxx_xq'
import MHXX from '../../../common/mhjcg_xq'
import TBRYXX from '../../../common/tbryxx_xq'
import imgUrl from '../../../../assets/img/mrzp.png'
export default {
      components:{LZXXRY,ANSJRY,CRJXXRY,LXSXX,CZXXRY,DWXX,MHXX,LXSXXZX,TBRYXX},
  data() {
    return {
      drawer: false,
      activeNames: ["1", "2", "3", "4"],
      timeIndex: 2,
      //变量
      zjhm:'',
      token:'',
      pd:{},
      CurrentPage1: 1,
      pageSize1: 3,
      TotalResult1: 0,
      table1:[],
      tableData1:[],
      timeLineList: [
        {
          timestamp: "2014年",
          color: "#43B2E6",
          fontsize: 18,
          size: "28",
          bgcolor: "#4886a8",
          year: "2014",
        },
        {
          timestamp: "2015年",
          color: "#099BED",
          fontsize: 18,
          year: "2015",
          size: "28",
          bgcolor: "#4886a8",
        },
        {
          timestamp: "2016年",
          color: "#43B2E6",
          fontsize: 18,
          size: "28",
          year: "2016",
          bgcolor: "#4886a8",
        },
        {
          timestamp: "2019年",
          color: "#43B2E6",
          fontsize: 18,
          year: "2019",
          bgcolor: "#4886a8",
          size: "28",
        },
        {
          timestamp: "2019年",
          color: "#43B2E6",
          fontsize: 18,
          year: "2019",
          bgcolor: "#4886a8",
          size: "28",
        },
        {
          timestamp: "2019年",
          color: "#43B2E6",
          fontsize: 18,
          year: "2019",
          bgcolor: "#4886a8",
          size: "28",
        },
      ],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: " 1518 ",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: " 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: " 1519 弄",
        },
      ],
      desc: false,
      // 表格相关
      dialog: false,
      data: [
        {
          title: "留学生申请信息",
          student: [
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
          ],
        },
        {
          title: "留学生申请信息",
          student: [
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
          ],
        },
        {
          title: "留学生申请信息",
          student: [
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
          ],
        },
        {
          title: "留学生申请信息",
          student: [
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
          ],
        },
        {
          title: "留学生申请信息",
          student: [
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
          ],
        },
        {
          title: "留学生申请信息",
          student: [
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
          ],
        },
        {
          title: "留学生申请信息",
          student: [
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
          ],
        },
        {
          title: "留学生申请信息",
          student: [
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
          ],
        },
        {
          title: "留学生申请信息",
          student: [
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
            {
              title: "南京工业大学",
              time: "2020-09-05",
            },
          ],
        },
      ],
    };
  },
  activated(){
    //路由跳转获取传到的参数
    this.zjhm=this.$route.query.zjhm;
    if(this.zjhm!="" && this.zjhm!=undefined){
      this.pd.ZJHM=this.zjhm;
    }
    this.getCrj(this.CurrentPage1,this.pageSize1,this.pd);
  },
  mounted(){
    this.token = this.$store.state.toke
    this.show()
    //调用接口
    // this.getCrj(this.CurrentPage1,this.pageSize1,this.pd);
  },
  methods: {
    //1、出入境
    getCrj(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
      	"showCount":showCount,
        "certificateNO":this.zjhm,
        "token":this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getcrjjl', p,
        r => {
          this.tableData1 = r.data;         
          console.log(this.tableData1.length)
        })
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    handleChange(val) {
      console.log(val);
    },
    changeActive(index) {
      this.timeIndex = index;
    },
    moveLeft() {
      let marginLeft = parseInt(this.$refs.mytimeline.style.marginLeft);
      let listNum = 0;
      if (marginLeft <= 10 && marginLeft >= -650) {
        this.$refs.mytimeline.style.marginLeft = marginLeft - 220 + "px";
      }
    },
    moveRight() {
      let marginLeft = parseInt(this.$refs.mytimeline.style.marginLeft);
      if (marginLeft < -200) {
        this.$refs.mytimeline.style.marginLeft = marginLeft + 220 + "px";
      }
    },
    show(){
      this.desc = !this.desc
    }

  },
}
</script>
<style scoped>
/* 俺写的样式 */
.desc {
  display: flex;
  justify-content: space-between;
}
.header {
  display: flex;
  justify-content: space-between;
  /* background: #fff; */
  /* color: red; */
  /* width: 100%; */
}
.tab-list {
  margin-bottom: 10px;
}
.ryhx {
  background-color: #e4e7ed;
}
.drawer {
  width: 50% !important;
}
.my_timeline_desc_line {
  height: 30px;
  width: 1px;
  border-left: 2px solid #e4e7ed;
  margin-left: 13px;
  margin-top: 2px;
}

/* .thh{
    color: #ccc  !important;
    background: yellow !important;
} */

/* 样式结束 */
.bainfo {
  font-size: 12px;
  line-height: 30px;
  padding-left: 15px;
}
.middle-foot {
  margin-top: 10px;
}
.v-modal {
  background: none !important;
}
.t1 {
  margin-bottom: 20px;
}
.list {
  padding: 0 10px;
}
@media screen and (min-width: 1700px) {
  .item {
    width: 92%;
    padding-left: 20px;
    padding-top: 20px;
    border-radius: 5px;
  }
  .title {
    color: #fff;
    font-size: 18px;
    float: left;
  }
  .bj {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    font-size: 20px;
    line-height: 25px;
    color: red;
    float: left;
    margin-left: 10px;
    margin-top: -2px;
  }
  .sl {
    clear: both;
    font-size: 26px;
    color: #fff;
    margin-top: 30px;
    /* margin-left:-130px; */
  }
  .ci {
    font-size: 15px;
    color: #fff;
    margin-left: 33px;
    margin-top: -16px;
  }
}
@media screen and (min-width: 1366px) and (max-width: 1700px) {
  .item {
    width: 99%;
    padding-left: 10px;
    padding-top: 20px;
    border-radius: 5px;
  }
  .title {
    color: #fff;
    font-size: 15px;
    float: left;
  }
  .bj {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    font-size: 17px;
    line-height: 20px;
    color: red;
    float: left;
    margin-left: 4px;
    margin-top: -2px;
  }
  .sl {
    clear: both;
    font-size: 20px;
    color: #fff;
    margin-top: 30px;
    /* margin-left:px; */
  }
  .ci {
    /* display: inline-block; */
    font-size: 13px;
    color: #fff;
    margin-left: 26px;
    margin-top: -13px;
  }
}
@media screen and (max-width: 1366px) {
  .item {
    width: 99%;
    padding-left: 10px;
    padding-top: 20px;
    border-radius: 5px;
  }
  .title {
    color: #fff;
    font-size: 15px;
    float: left;
  }
  .bj {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #fff;
    text-align: center;
    font-size: 17px;
    line-height: 20px;
    color: red;
    float: left;
    margin-left: 4px;
    margin-top: -2px;
  }
  .sl {
    clear: both;
    font-size: 20px;
    color: #fff;
    margin-top: 30px;
    /* margin-left:px; */
  }
  .ci {
    /* display: inline-block; */
    font-size: 13px;
    color: #fff;
    margin-left: 26px;
    margin-top: -13px;
  }
  /* 表格样式 */
  /* .el-table_1_column_1 .cell{
        width: 80px !important;
    }   */
  .table {
    width: 100% !important;
    margin: 5px auto 0px;
  }
}

.mb {
  height: 155px;
  background-color: #fff;
  border-radius: 10px;
}
.tbt {
  display: inline-block;
  font-size: 15px;
  margin-left: 15px;
  margin-top: 8px;
  font-weight: bold;
  color: #9e9e9e;
}
.table {
  width: 95% !important;
  margin: 5px auto 0px;
}
.el-card__body {
  padding: 5px 10px !important;
}
.el-collapse-item__header {
  padding-left: 20px !important;
  font-size: 18px !important;
  font-weight: bold !important;
  z-index: 1000;
}

.my_timeline_prev {
  width: 200px;
  float: left;
}
.my_timeline_next {
  width: 34px;
  margin-left: -22px;
}
.ul_box {
  /* width: 900px; */
  height: 200px;
  display: inline-block;
  /* float: left; */
  margin-top: 2px;
  overflow: hidden;
}
.my_timeline_item {
  display: inline-block;
  width: 200px;
}
.my_timeline_node {
  box-sizing: border-box;
  border-radius: 50%;
  cursor: pointer;
}
.my_timeline_node.active {
  background-color: #fff !important;
  border: 6px solid #0577b4;
}
.my_timeline_item_line {
  width: 100%;
  height: 10px;
  margin: -14px 0 0 28px;
  border-top: 2px solid #e4e7ed;
  border-left: none;
}
.my_timeline_item_content {
  margin: 10px 0 0 -10px;
}
/* .el-table th{
    color: #ccc !important;
} */
th .el-table_1_column_1 .is-leaf{
    color: #ccc  !important;
    background: #fff !important;
}
</style>
<style>
/* 控制表头的样式 */
 .w-jb th{
   background: #C9E3F7 !important;
   height: 26px !important;
 }
 .w-jb{
   width: 96%;
   margin-bottom: 10px;
   margin-left:2%;
 }
</style>
