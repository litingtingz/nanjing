
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
              <img :src="imgdm"
                style="height:120px;width:120px;margin-left:23%;margin-bottom:5px;border-radius:50%;border:1px solid #ccc"/>
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
              <div
                style="height:1px;width:80;margin:20px auto;background-color:#ccc"
              ></div>
              <el-row>
                <el-col class="t1">
                  性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：{{baseinfo.xb_desc}}
                </el-col>
                <el-col class="t1">
                  <!-- 出&nbsp;生&nbsp;日&nbsp;期：{{(baseinfo.csrq).substring(0,10)}} -->
                  出&nbsp;生&nbsp;日&nbsp;期：{{(baseinfo.csrq)}}
                </el-col>
                <el-col class="t1">
                  国&nbsp;家&nbsp;地&nbsp;区：{{baseinfo.gjdq_desc}}
                </el-col>
                <el-col class="t1">
                  证&nbsp;件&nbsp;种&nbsp;类：
                </el-col>
                <el-col class="t1">
                  <!-- 证&nbsp;件&nbsp;号&nbsp;码：{{baseinfo.zjhm}} -->
                  证&nbsp;件&nbsp;号&nbsp;码：{{baseinfo.zjhm}}
                </el-col>
                <el-col class="t1">
                  证件有效期：
                </el-col>
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
                          <!-- <div class="bj">3</div> -->
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
                          <!-- <div class="bj">3</div> -->
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
                          <!-- <div class="bj">3</div> -->
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
                          <!-- <div class="bj">3</div> -->
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
                          <!-- <div class="bj">3</div> -->
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
                          <!-- <div class="bj">3</div> -->
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
                          <!-- <div class="bj">3</div> -->
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
                          <!-- <div class="bj">3</div> -->
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
                  <!-- 1.出入境记录 -->
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;出入境记录</div>
                          <el-button type="text" size="mini" @click="dialog1 = true" style="float:right;margin-right:10px">更多</el-button>
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
                  <!-- 2.临住信息 -->
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;临住信息</div>
                          <el-button type="text" size="mini" @click="dialog2 = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}"
                                :data="tableData2.length==0?tableData2:tableData2.slice((CurrentPage2-1)*pageSize2,CurrentPage2*pageSize2)">
                            <el-table-column
                                prop="resideTime"
                                label="住宿日期">
                            </el-table-column>
                            <el-table-column
                                prop="tmpResideRegOrgName"
                                label="登记单位">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <!-- 3.常住信息 -->
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;常住信息</div>
                          <el-button type="text" size="mini" @click="dialog3 = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}"
                              :data="tableData3.length==0?tableData3:tableData3.slice((CurrentPage3-1)*pageSize3,CurrentPage3*pageSize3)">
                            <el-table-column
                                prop="residePermitExpiredDay"
                                label="停留有效期">
                            </el-table-column>
                            <el-table-column
                                prop="inhabiDetailAddr"
                                label="居住地址">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <!-- 4.案事件记录 -->
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;案事件记录</div>
                          <el-button type="text" size="mini" @click="dialog4 = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}"
                              :data="tableData4.length==0?tableData4:tableData4.slice((CurrentPage4-1)*pageSize4,CurrentPage4*pageSize4)">
                            <el-table-column
                                  prop="caseTime"
                                  label="案发时间">
                            </el-table-column>
                            <el-table-column
                                  prop="caseName"
                                  label="案件名称">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <!-- 5.明航进出港信息 -->
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;民航进出港信息</div>
                          <el-button type="text" size="mini" @click="dialog5 = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}" 
                            :data="tableData5.length==0?tableData5:tableData5.slice((CurrentPage5-1)*pageSize5,CurrentPage5*pageSize5)">
                            <el-table-column
                              prop="STA_ARVETM"
                              label="进港时间">
                            </el-table-column>
                            <el-table-column
                              prop="STA_DEPTTM"
                              label="出港时间">
                            </el-table-column>
                            <el-table-column
                              prop="FLT_NUMBER"
                              label="航班号">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <!-- 6.单位信息  -->
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;单位信息</div>
                          <el-button type="text" size="mini" @click="dialog6 = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}"
                                :data="tableData6.length==0?tableData6:tableData6.slice((CurrentPage6-1)*pageSize6,CurrentPage6*pageSize6)">
                            <el-table-column
                              prop="GZD_MC"
                              label="单位名称">
                            </el-table-column>
                            <el-table-column
                              prop="XXDZ"
                              label="单位地址">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <!-- 7.留学生信息--申请信息 -->
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;留学生信息-申请信息</div>
                          <el-button type="text" size="mini" @click="dialog7 = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}"
                              :data="tableData7.length==0?tableData7:tableData7.slice((CurrentPage7-1)*pageSize7,CurrentPage7*pageSize7)">
                            <el-table-column
                                prop="STAREPORTS"
                                label="报到时间">
                            </el-table-column>
                            <el-table-column
                                prop="ACCACADEMY"
                                label="学校名称">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <!-- 8.留学生信息--在校信息 -->
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;留学生信息-在校信息</div>
                          <el-button type="text" size="mini" @click="dialog8 = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}"
                              :data="tableData8.length==0?tableData8:tableData8.slice((CurrentPage8-1)*pageSize8,CurrentPage8*pageSize8)">
                            <el-table-column
                                prop="SIGNUPDATE"
                                label="报到时间">
                            </el-table-column>
                            <el-table-column
                                prop="COLLEGENAME"
                                label="院系名称">
                            </el-table-column>
                          </el-table>
                    </div> 
                  </el-col>
                  <!-- 9.通报人员 -->
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:100%;height:180px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:5px">&nbsp;&nbsp;&nbsp;通报人员信息</div>
                          <el-button type="text" size="mini" @click="dialog9 = true" style="float:right;margin-right:10px">更多</el-button>
                          <el-table class="w-jb" :header-cell-style="{color:'#1c6cb4'}"
                              :data="tableData9.length==0?tableData9:tableData9.slice((CurrentPage9-1)*pageSize9,CurrentPage9*pageSize9)">
                            <el-table-column
                                prop="TBRYZL_DESC"
                                label="通报人员类别">
                            </el-table-column>
                            <el-table-column
                                prop="FBSJ"
                                label="发布时间">
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
    <!-- 1.出入境记录 -->
    <el-dialog :visible.sync="dialog1">
       <el-table class="w-jb"  width="80%"  :header-cell-style="{color:'#1c6cb4',}"
            :data="tableData1.length==0?tableData1:tableData1.slice((CurrentPage1-1)*pageSize11,CurrentPage1*pageSize11)"
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
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">共{{TotalResult1}}条记录</div>
            <div class="">
              每页显示
              <el-select v-model="pageSize11" @change="pageSizeChange1(pageSize11)" placeholder="10" size="mini" class="page-select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              条
            </div>
            <div class="">共{{Math.ceil(TotalResult1/pageSize11)}}页</div>
          </div>
          <el-pagination
            background
            @current-change="handleCurrentChange1"
            :current-page:sync="CurrentPage1"
            :page-size="pageSize11"
            layout="prev, pager, next"
            :total="TotalResult1">
          </el-pagination>
        </div>
    </el-dialog>
    <!-- 2.临住信息表格记录 -->
    <el-dialog :visible.sync="dialog2">
       <el-table class="w-jb"  width="80%"  :header-cell-style="{color:'#1c6cb4',}"
            :data="tableData2.length==0?tableData2:tableData2.slice((CurrentPage2-1)*pageSize22,CurrentPage2*pageSize22)"
        >
             <el-table-column
               prop="resideTime"
               label="住宿日期">
             </el-table-column>
             <el-table-column
               prop="leaveTime"
               label="离开日期">
             </el-table-column>
             <el-table-column
               prop="tmpResideRegOrgName"
               label="登记单位">
             </el-table-column>
             <el-table-column
               prop="tmpResideRegOrgArea_desc"
               label="登记单位行政区划">
             </el-table-column>
             <el-table-column
               prop="visaType_desc"
               label="签证种类">
             </el-table-column>
             <el-table-column
               label="操作" width="120">
               <div slot-scope="scope">
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailslzxx(scope.row)"></el-button>
               </div>
             </el-table-column>
         </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">共{{TotalResult2}}条记录</div>
            <div class="">
              每页显示
              <el-select v-model="pageSize11" @change="pageSizeChange2(pageSize22)" placeholder="10" size="mini" class="page-select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              条
            </div>
            <div class="">共{{Math.ceil(TotalResult2/pageSize22)}}页</div>
          </div>
          <el-pagination
            background
            @current-change="handleCurrentChange2"
            :current-page:sync="CurrentPage2"
            :page-size="pageSize11"
            layout="prev, pager, next"
            :total="TotalResult2">
          </el-pagination>
        </div>
    </el-dialog>    
    <!-- 3.常住信息表格记录 -->
    <el-dialog :visible.sync="dialog3">
       <el-table class="w-jb"  width="80%"  :header-cell-style="{color:'#1c6cb4',}"
              :data="tableData3.length==0?tableData3:tableData3.slice((CurrentPage3-1)*pageSize33,CurrentPage3*pageSize33)">
              <el-table-column
                prop="degreeCode_desc"
                label="身份">
              </el-table-column>
              <el-table-column
                prop="workplaceName"
                label="服务处所">
              </el-table-column>
              <el-table-column
                prop="inhabiPoliceStation_desc"
                label="所属单位">
              </el-table-column>
              <el-table-column
                prop="residePermitExpiredDay"
                label="停留有效期">
              </el-table-column>
              <el-table-column
                prop="inhabiDetailAddr"
                label="居住地址">
              </el-table-column>
              <el-table-column
                label="操作" width="120">
                <div slot-scope="scope">
                  <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailscz(scope.row)"></el-button>
                </div>
              </el-table-column>
         </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">共{{TotalResult3}}条记录</div>
            <div class="">
              每页显示
              <el-select v-model="pageSize33" @change="pageSizeChange3(pageSize33)" placeholder="10" size="mini" class="page-select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              条
            </div>
            <div class="">共{{Math.ceil(TotalResult3/pageSize33)}}页</div>
          </div>
          <el-pagination
            background
            @current-change="handleCurrentChange3"
            :current-page:sync="CurrentPage3"
            :page-size="pageSize33"
            layout="prev, pager, next"
            :total="TotalResult3">
          </el-pagination>
        </div>
    </el-dialog>
    <!-- 4.案发时间记录 -->
    <el-dialog :visible.sync="dialog4">
       <el-table class="w-jb"  width="80%"  :header-cell-style="{color:'#1c6cb4',}"
             :data="tableData4.length==0?tableData4:tableData4.slice((CurrentPage4-1)*pageSize44,CurrentPage4*pageSize44)">
             <el-table-column
               prop="caseType_desc"
               label="案事件类型">
             </el-table-column>
             <el-table-column
               prop="caseTime"
               label="案发时间">
             </el-table-column>
             <el-table-column
               prop="caseName"
               label="案件名称">
             </el-table-column>
             <el-table-column
               prop="caseRegion_desc"
               label="案发地区">
             </el-table-column>
             <el-table-column
               label="操作" width="120">
               <div slot-scope="scope">
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsasj(scope.row)"></el-button>
               </div>
             </el-table-column>
         </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">共{{TotalResult4}}条记录</div>
            <div class="">
              每页显示
              <el-select v-model="pageSize44" @change="pageSizeChange4(pageSize44)" placeholder="10" size="mini" class="page-select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              条
            </div>
            <div class="">共{{Math.ceil(TotalResult4/pageSize44)}}页</div>
          </div>
          <el-pagination
            background
            @current-change="handleCurrentChange4"
            :current-page:sync="CurrentPage4"
            :page-size="pageSize44"
            layout="prev, pager, next"
            :total="TotalResult4">
          </el-pagination>
        </div>
    </el-dialog>
    <!-- 5.明航进出港信息 -->
    <el-dialog :visible.sync="dialog5">
       <el-table class="w-jb"  width="80%"  :header-cell-style="{color:'#1c6cb4',}"
              :data="tableData5.length==0?tableData5:tableData5.slice((CurrentPage5-1)*pageSize55,CurrentPage5*pageSize55)">
            <el-table-column
              prop="STA_ARVETM"
              label="进港时间">
            </el-table-column>
            <el-table-column
              prop="STA_DEPTTM"
              label="出港时间">
            </el-table-column>
            <el-table-column
              prop="FLT_AIRLCODE"
              label="航空公司代码">
            </el-table-column>
            <el-table-column
              prop="FLT_NUMBER"
              label="航班号">
            </el-table-column>
            <el-table-column
              label="操作" width="120">
              <div slot-scope="scope">
                <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsMH(scope.row)"></el-button>
              </div>
            </el-table-column>
         </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">共{{TotalResult5}}条记录</div>
            <div class="">
              每页显示
              <el-select v-model="pageSize55" @change="pageSizeChange5(pageSize55)" placeholder="10" size="mini" class="page-select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              条
            </div>
            <div class="">共{{Math.ceil(TotalResult5/pageSize55)}}页</div>
          </div>
          <el-pagination
            background
            @current-change="handleCurrentChange5"
            :current-page:sync="CurrentPage5"
            :page-size="pageSize55"
            layout="prev, pager, next"
            :total="TotalResult5">
          </el-pagination>
        </div>
    </el-dialog>
    <!-- 6.单位信息 -->
    <el-dialog :visible.sync="dialog6">
       <el-table class="w-jb"  width="80%"  :header-cell-style="{color:'#1c6cb4',}"
              :data="tableData6.length==0?tableData6:tableData6.slice((CurrentPage6-1)*pageSize66,CurrentPage6*pageSize66)">
           <el-table-column
             prop="GZD_MC"
             label="单位名称">
           </el-table-column>
           <el-table-column
             prop="GZD_ZZJG"
             label="组织机构代码">
           </el-table-column>
           <el-table-column
             prop="XXDZ"
             label="单位地址">
           </el-table-column>
           <el-table-column
             label="操作" width="120">
             <div slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailsdw(scope.row)"></el-button>
             </div>
           </el-table-column>
         </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">共{{TotalResult6}}条记录</div>
            <div class="">
              每页显示
              <el-select v-model="pageSize66" @change="pageSizeChange6(pageSize66)" placeholder="10" size="mini" class="page-select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              条
            </div>
            <div class="">共{{Math.ceil(TotalResult6/pageSize66)}}页</div>
          </div>
          <el-pagination
            background
            @current-change="handleCurrentChange6"
            :current-page:sync="CurrentPage6"
            :page-size="pageSize66"
            layout="prev, pager, next"
            :total="TotalResult6">
          </el-pagination>
        </div>
    </el-dialog>    
   <!--7.留学生基本信息--申请信息  -->
    <el-dialog :visible.sync="dialog7">
       <el-table class="w-jb"  width="80%"  :header-cell-style="{color:'#1c6cb4',}"
              :data="tableData7.length==0?tableData7:tableData7.slice((CurrentPage7-1)*pageSize77,CurrentPage7*pageSize77)">
          <el-table-column
            prop="STAREPORTS"
            label="报到时间">
          </el-table-column>
          <el-table-column
            prop="CFACULTY"
            label="院系中文名称">
          </el-table-column>
          <el-table-column
            prop="ACCACADEMY"
            label="学校名称">
          </el-table-column>
          <el-table-column
            label="操作" width="120">
            <div slot-scope="scope">
              <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailslxs(scope.row)"></el-button>
            </div>
          </el-table-column>
         </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">共{{TotalResult7}}条记录</div>
            <div class="">
              每页显示
              <el-select v-model="pageSize77" @change="pageSizeChange7(pageSize77)" placeholder="10" size="mini" class="page-select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              条
            </div>
            <div class="">共{{Math.ceil(TotalResult7/pageSize77)}}页</div>
          </div>
          <el-pagination
            background
            @current-change="handleCurrentChange7"
            :current-page:sync="CurrentPage7"
            :page-size="pageSize77"
            layout="prev, pager, next"
            :total="TotalResult7">
          </el-pagination>
        </div>
    </el-dialog> 
    <!-- 8.留学生信息--在校信息 -->
    <el-dialog :visible.sync="dialog8">
       <el-table class="w-jb"  width="80%"  :header-cell-style="{color:'#1c6cb4',}"
              :data="tableData8.length==0?tableData8:tableData8.slice((CurrentPage8-1)*pageSize88,CurrentPage8*pageSize88)">
             <el-table-column
               prop="COLLEGENAME"
               label="院系名称">
             </el-table-column>
             <el-table-column
               prop="MAJORNAME"
               label="学习专业">
             </el-table-column>
             <el-table-column
               prop="SIGNUPDATE"
               label="报到时间">
             </el-table-column>
             <el-table-column
               label="操作" width="120">
               <div slot-scope="scope">
                  <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailslxszx(scope.row)"></el-button>
               </div>
             </el-table-column>
         </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">共{{TotalResult8}}条记录</div>
            <div class="">
              每页显示
              <el-select v-model="pageSize88" @change="pageSizeChange8(pageSize88)" placeholder="10" size="mini" class="page-select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              条
            </div>
            <div class="">共{{Math.ceil(TotalResult8/pageSize88)}}页</div>
          </div>
          <el-pagination
            background
            @current-change="handleCurrentChange8"
            :current-page:sync="CurrentPage8"
            :page-size="pageSize88"
            layout="prev, pager, next"
            :total="TotalResult8">
          </el-pagination>
        </div>
    </el-dialog>  
    <!-- 9.通报信息 -->
    <el-dialog :visible.sync="dialog9">
       <el-table class="w-jb"  width="80%"  :header-cell-style="{color:'#1c6cb4',}"
              :data="tableData9.length==0?tableData9:tableData9.slice((CurrentPage9-1)*pageSize99,CurrentPage9*pageSize99)">
                   <el-table-column
                     prop="TBRYZL_DESC"
                     label="通报人员类别">
                   </el-table-column>
                   <el-table-column
                     prop="TBBH"
                     label="通报编号">
                   </el-table-column>
                   <el-table-column
                     prop="FBSJ"
                     label="发布时间">
                   </el-table-column>
                   <el-table-column
                     label="操作" width="120">
                     <div slot-scope="scope">
                        <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailstbxx(scope.row)"></el-button>
                     </div>
                   </el-table-column>
         </el-table>
        <div class="middle-foot">
          <div class="page-msg">
            <div class="">共{{TotalResult9}}条记录</div>
            <div class="">
              每页显示
              <el-select v-model="pageSize99" @change="pageSizeChange9(pageSize99)" placeholder="10" size="mini" class="page-select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              条
            </div>
            <div class="">共{{Math.ceil(TotalResult9/pageSize99)}}页</div>
          </div>
          <el-pagination
            background
            @current-change="handleCurrentChange9"
            :current-page:sync="CurrentPage9"
            :page-size="pageSize99"
            layout="prev, pager, next"
            :total="TotalResult9">
          </el-pagination>
        </div>
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
      gjdq:'',
      token:'',
      pd:{},
      imgdm:imgUrl,
      CurrentPage1: 1,
      pageSize1: 3,
      pageSize11: 10,
      CurrentPage2: 1,
      pageSize2: 3,
      pageSize22: 10,      
      CurrentPage3: 1,
      pageSize3: 3,
      pageSize33: 10,
      CurrentPage4: 1,
      pageSize4: 3,
      pageSize44: 10,
      CurrentPage5: 1,
      pageSize5: 3,
      pageSize55: 10,
      CurrentPage6: 1,
      pageSize6: 3,
      pageSize66: 10,
      CurrentPage7: 1,
      pageSize7: 3,
      pageSize77: 10,
      CurrentPage8: 1,
      pageSize8: 3,
      pageSize88: 10,
      CurrentPage9: 1,
      pageSize9: 3,
      pageSize99: 10,
      TotalResult1: 0,
      TotalResult2: 0,
      TotalResult3: 0,
      TotalResult4: 0,
      TotalResult5: 0,
      TotalResult6: 0,
      TotalResult7: 0,
      TotalResult8: 0,
      TotalResult9: 0,
      tableData1:[],
      tableData2:[],
      tableData3:[],
      tableData4:[],
      tableData5:[],
      tableData6:[],
      tableData7:[],
      tableData8:[],
      tableData9:[],
      pd:{},
      baseinfo:{},
      options: this.pl.ps,
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
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      dialog7: false,
      dialog8: false,
      dialog9: false,
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
    this.gjdq=this.$route.query.gjdq;

    if(this.zjhm!="" && this.zjhm!=undefined){
      this.pd.ZJHM=this.zjhm;
    }
    if(this.gjdq){
      this.pd.GJDQ=this.gjdq
    }
    this.getRYXX(); 
    this.getZXZP();
    this.getCrj(this.CurrentPage1,this.pageSize1,this.pd);
    this.getLzxx(this.CurrentPage2, this.pageSize2,this.pd);
    this.getCZXX(this.CurrentPage3,this.pageSize3,this.pd);
    this.getASJXX(this.CurrentPage4,this.pageSize4,this.pd);
    this.getMHJCGXX(this.CurrentPage5,this.pageSize5,this.pd);
    this.getDWJBXX(this.CurrentPage6,this.pageSize6,this.pd);
    this.getLXSXX(this.CurrentPage7,this.pageSize7,this.pd);
    this.getLXSXXZXXX(this.CurrentPage8,this.pageSize8,this.pd);
    this.getTbxx(this.CurrentPage9,this.pageSize9,this.pd);
  },
  mounted(){
    this.token = this.$store.state.token;
    this.show();
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
    //2.临住信息
    getLzxx(currentPage,showCount,pd){
      let p={
        "paperNO":this.zjhm,
        "nationality":this.gjdq,
        'token':this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getlzxx', p,
        r => {
          this.tableData2 = r.data.info;
          this.TotalResult2=r.data.info.length;
        })
    },
    //3. 常住信息
    getCZXX(currentPage,showCount,pd){
      let p={
        "paperNO":this.zjhm,
        "nationality":this.gjdq,
        "token":this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getczxx', p,
        r => {
          this.tableData3 = r.data.info;
          this.TotalResult3=r.data.info.length;
        })
    },
   //4.案事件记录
    getASJXX(currentPage,showCount,pd){
      let p={
        "paperNO":this.zjhm,
        "nationality":this.gjdq,
        "token":this.token,

      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getajjbxx', p,
        r => {
          this.tableData4 = r.data;
          this.TotalResult4=r.data.length;
        })
    },
    // 5.民航进出港信息
    getMHJCGXX(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd,
        "token":this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhx/getstmhjgxxn', p,
        r => {
          this.tableData5 = r.data.resultList;
          this.TotalResult5=r.data.totalResult;
        })
    },
    //6.单位基本信息 
    getDWJBXX(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd,
        "token":this.token
      };
      this.$api.post(this.Global.aport3+'/ryhx/getczgzdxx', p,
        r => {
          this.tableData6 = r.data.resultList;
          this.TotalResult6=r.data.totalResult;
        })
    },    
    // 7.留学生基本信息---申请信息
    getLXSXX(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd,
        "token":this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhx/getlxjsbaseinfo', p,
        r => {
          this.tableData7 = r.data.resultList;
          this.TotalResult7=r.data.totalResult;
        })
    },
    // 8. 留学生基本信息----在校信息
    getLXSXXZXXX(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd,
        "token":this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhx/getzyxdcrjstudent', p,
        r => {
          this.tableData8 = r.data.resultList;
          this.TotalResult8=r.data.totalResult;
        })
    },
    //9. 通报信息
    getTbxx(currentPage,showCount,pd){
      let p={
        "currentPage":currentPage,
        "showCount":showCount,
        "pd":pd,
        "token":this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhx/gettbryjbxx', p,
        r => {
          this.tableData9 = r.data.resultList;
          this.TotalResult9=r.data.totalResult;
        })
    },
    //最新照片
    getZXZP(){
      console.log(this.pd);
      let p = {
        "pd": this.pd,
        "token":this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhx/getrytpxxpro', p,
        r => {
          this.imgdm = imgUrl
          if(r.data.ZPNR){
            this.imgdm = r.data.ZPNR;
          }
        })
    },
    //人员基本信息
    getRYXX(){
      let p = {
        "certificateNO": this.zjhm,
        "GJDQ":this.gjdq,
        "token":this.token,
      };
      this.$api.post(this.Global.aport3+'/ryhxhx/getryryxx', p,
        r => {
          // if(r.data.resultList.length!=0){
            this.baseinfo = r.data;
            this.rybh = r.data.RYBH;
            this.gjdqxq = r.data.gjdq;
          // }
        })
    },
    pageSizeChange1(val){
      this.pageSize11=val;
    },
    handleCurrentChange1(val) {
      this.CurrentPage1=val;
    },
    pageSizeChange2(val){
      this.pageSize22=val;
    },
    handleCurrentChange2(val) {
      this.CurrentPage2=val;
    },
    pageSizeChange3(val) {
      this.pageSize33=val;
    },
    handleCurrentChange3(val) {
      this.CurrentPage3=val;
    },    
    pageSizeChange4(val) {
      this.pageSize44=val;
    },
    handleCurrentChange4(val) {
      this.CurrentPage4=val;
    },
    pageSizeChange5(val) {
        this.getMHJCGXX(this.CurrentPage5,val,this.pd);
    },
    handleCurrentChange5(val) {
        this.getMHJCGXX(val,this.pageSize5,this.pd);
    },
    pageSizeChange6(val) {
      this.getDWJBXX(this.CurrentPage6,val,this.pd);
    },
    handleCurrentChange6(val) {
      this.getDWJBXX(val,this.pageSize6,this.pd);
    },
    pageSizeChange7(val) {
        this.getLXSXX(this.CurrentPage7,val,this.pd);
    },
    handleCurrentChange7(val) {
      this.getLXSXX(val,this.pageSize7,this.pd);
    },
    pageSizeChange8(val) {
      this.getLXSXXZXXX(this.CurrentPage8,val,this.pd);
    },
    handleCurrentChange8(val) {
      this.getLXSXXZXXX(val,this.pageSize8,this.pd);
    },
    pageSizeChange9(val) {
      this.getTbxx(this.CurrentPage9,val,this.pd);
    },
    handleCurrentChange9(val) {
      this.getTbxx(val,this.pageSize9,this.pd);
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
.middle-foot{ margin-top: 10px;}

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
