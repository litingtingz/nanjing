
<template lang="html">
  <div class="ryhx">
    <div class="tshu" id="target" style="overflow-y:hidden;background-color:#E8F0FC">
      <div style="margin: 10px;background-color:#E8F0FC">
        <el-container style="overflow-y:hidden">
          <!-- <el-row> -->
          <el-aside style="width:300px;overflow-y:hidden">
            <!-- 左侧面板开始 -->
            <!-- <el-col :span="4" style=""> -->
            <el-card shadow="hover">
              <!-- <div class="photo-content"> -->
              <img :src="imgdm"
                style="height:120px;width:120px;margin-left:25.5%;margin-bottom:5px;border-radius:50%;border:1px solid #ccc"/>
                <div style="wight:100%;height:30px;line-height:30px;font-size:17px;font-weight:bold;text-align:center;">{{baseinfo.zwxm}}</div>
                <div style="wight:100%;height:20px;line-height:20px;font-size:13px;color:#859396;text-align:center;">{{baseinfo.ywxm}}</div>
              <el-button
                @click="getLable()"
                type="text"
                style="margin-left:38%;"
                class="w-grbq"
              >
                个人标签
              </el-button>
              <el-drawer
                title="个人标签"
                :visible.sync="drawer"
                class="bqq"
              >
                <el-collapse v-model="nums" @change="handleChange">
                  <el-collapse-item
                    :title="i"
                    v-for="(p,i) of labs"
                    :key="i"
                    :name="1+''"
                    style="padding-left:20px"
                    class="aaaa"
                  >
                    <div v-for="(ele,i) of p" :key="i" :class="i%2?'aaa':'bbb'">{{ele.tagMc}}</div>
                  </el-collapse-item>
                </el-collapse>
              </el-drawer>
              <div
                style="height:1px;width:80;margin:20px auto;background-color:#ccc"
              ></div>
              <el-row>
                <el-col class="t1">
                  性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：<span>{{baseinfo.xb_desc}}</span>
                </el-col>
                <el-col class="t1">
                  <!-- 出&nbsp;生&nbsp;日&nbsp;期：{{(baseinfo.csrq).substring(0,10)}} -->
                  出&nbsp;生&nbsp;日&nbsp;期：<span>{{(baseinfo.csrq)}}</span>
                </el-col>
                <el-col class="t1">
                  国&nbsp;家&nbsp;地&nbsp;区：<span>{{baseinfo.gjdq_desc}}</span>
                </el-col>
                <el-col class="t1">
                  证&nbsp;件&nbsp;种&nbsp;类：<span>{{baseinfo.zjzl}}</span>
                </el-col>
                <el-col class="t1">
                  <!-- 证&nbsp;件&nbsp;号&nbsp;码：{{baseinfo.zjhm}} -->
                  证&nbsp;件&nbsp;号&nbsp;码：<span>{{baseinfo.zjhm}}</span>
                </el-col>
                <el-col class="t1">
                  证件有效期：<span>{{baseinfo.zjyxq}}</span>
                </el-col>
              </el-row>
            </el-card>
            <!-- 左侧面板结束 -->
          </el-aside>
          <!-- 右侧面板开始 -->
          <el-main style="overflow-y:hidden;paddding:10px" class="right-m">
            <el-row>
              <el-col :span="24">
                <el-carousel arrow="always" height="100px" :autoplay="false" indicator-position="none">
                  <el-carousel-item>
                    <el-row :gutter="20" class="list">
                      <el-col :span="4" :offset="0" v-for="(p,i) of carousel_data" :key="i">
                        <div class="item" style="height:80px" :style="{'background-color':color[i]}">
                          <div class="title">{{ btmc1[i] }}</div>
                          <!-- <div class="bj">{{ p.bj }}</div> -->
                          <div class="sl">{{ p.num }}</div>
                          <div class="ci">次</div>
                        </div>
                      </el-col>
                    </el-row>
                  </el-carousel-item> 
                  <el-carousel-item>
                    <el-row :gutter="20" class="list">
                      <el-col :span="4" :offset="0" v-for="(p, i) of carousel_data_2" :key="i">
                        <div class="item" style="height:80px" :style="{'background-color':color[i]}">
                          <div class="title">{{ btmc2[i] }}</div>
                          <!-- <div class="bj">{{ p.bj }}</div> -->
                          <div class="sl">{{ p.num }}</div>
                          <div class="ci">次</div>
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
              <el-main style="height:389px;width:110%;margin-top:20px;margin-left:12px;padding:0px" class="t-main">
                <!-- 出入境表格 -->
                <el-row :gutter="10">
                  <!-- 表格内容开始 -->
                  <!-- 1.出入境记录 -->
                  <el-col :span="12" :offset="0" class="tab-list">
                    <div class="t_crj" style="width:99%;height:190px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:7px;margin-bottom:7px;color:#818181;font-weight:bold">&nbsp;&nbsp;&nbsp;出入境记录</div>
                          <el-button type="primary"  size="mini" round class="ztys">{{this.crjzt}}</el-button>
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
                    <div class="t_crj" style="width:99%;height:190px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:7px;margin-bottom:7px;color:#818181;font-weight:bold">&nbsp;&nbsp;&nbsp;临住信息</div>
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
                    <div class="t_crj" style="width:99%;height:190px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:7px;margin-bottom:7px;color:#818181;font-weight:bold">&nbsp;&nbsp;&nbsp;常住信息</div>
                          <el-button type="success"  size="mini" round class="ztys">{{this.czjl}}</el-button>
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
                    <div class="t_crj" style="width:99%;height:190px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:7px;margin-bottom:7px;color:#818181;font-weight:bold">&nbsp;&nbsp;&nbsp;案事件记录</div>
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
                    <div class="t_crj" style="width:99%;height:190px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:7px;margin-bottom:7px;color:#818181;font-weight:bold">&nbsp;&nbsp;&nbsp;民航进出港信息</div>
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
                    <div class="t_crj" style="width:99%;height:190px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:7px;margin-bottom:7px;color:#818181;font-weight:bold">&nbsp;&nbsp;&nbsp;单位信息</div>
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
                    <div class="t_crj" style="width:99%;height:190px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:7px;margin-bottom:7px;color:#818181;font-weight:bold">&nbsp;&nbsp;&nbsp;留学生信息-申请信息</div>
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
                    <div class="t_crj" style="width:99%;height:190px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:7px;margin-bottom:7px;color:#818181;font-weight:bold">&nbsp;&nbsp;&nbsp;留学生信息-在校信息</div>
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
                    <div class="t_crj" style="width:99%;height:190px;background-color:#fff;">
                      <div style="font-size:15px;float:left;margin-top:7px;margin-bottom:7px;color:#818181;font-weight:bold">&nbsp;&nbsp;&nbsp;通报人员信息</div>
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
        <div style="width:100%;height:30px;font-weight:bold;font-size:18px;margin-top:3px">人员入住信息</div>
        <el-row :gutter="20"  style="background-color:#fff;height:300px;margin-left:5px" class="axis">
          <el-col :span="24" class="time-box">
            <div class="ul_box" :style="{ width: timeLineList.length * 250 + 50 + 'px' }">
              <ul style="margin-left: 10px;"  >
                <li class="my_timeline_item" v-for="(item, index) in timeLineList" :key="index"  >
                  <!--圈圈节点-->
                  <div class="my_timeline_node" :style="{backgroundColor: item.bgcolor,width: item.size + 'px',height: item.size + 'px',}"
                    @click="changeActive(index)"
                    :class="{ active: index == timeIndex }"
                  ></div>
                  <!--时间轴线-->
                  <div class="my_timeline_item_line" v-if="index !== timeLineList.length - 1"></div>
                  <!-- 控制节点下面的字样式 -->
                  <div class="my_timeline_item_content"
                    :style="{
                      color: item.color,
                      fontSize: item.fontsize + 'px',
                    }"
                  >
                    {{ item.trackTime }}
                  </div>
                  <!-- 描述的线 -->
                  <div :class="index%2 ? 'content-line-top' : 'content-line-bottom'"></div>
                  <!-- 内容显示区 -->
                  <div :class="index%2 ? 'content-top' : 'content-bottom'">
                    <!-- <el-main class="time-main"> -->
                        <div v-for="(p,i) of item.trackDataList" :key="i" class="time_content">
                              <p style="margin:2px 0px;line-height:18px;margin-left:10px">{{p.colComment}}：{{p.colVal}}</p>
                        </div>
                    <!-- </el-main> -->
                  </div>
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
    <el-dialog :visible.sync="dialog1" class="xcc">
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
             <el-table-column
               label="操作" width="120">
               <template slot-scope="scope">
                 <div>
                    <el-button type="text"  class="a-btn"  title="详情"  icon="el-icon-document" @click="detailscrj(scope.row)"></el-button>
                 </div>
               </template>
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
    <el-dialog :visible.sync="dialog2" class="xcc">
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
    <el-dialog :visible.sync="dialog3" class="xcc">
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
    <el-dialog :visible.sync="dialog4" class="xcc">
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
    <el-dialog :visible.sync="dialog5" class="xcc">
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
    <el-dialog :visible.sync="dialog6" class="xcc">
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
    <el-dialog :visible.sync="dialog7" class="xcc">
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
    <el-dialog :visible.sync="dialog8" class="xcc">
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
    <el-dialog :visible.sync="dialog9" class="xcc">
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
    <!-- 详情记录 -->
      <!-- 出入境信息 -->
      <el-dialog title="出入境信息详情" :visible.sync="crjDialogVisible"  custom-class="big_dialog combine" :append-to-body="true" :modal="false">
                <CRJXXRY :type="type" :xid="xid" :random="randomcrj"></CRJXXRY>
                   <div slot="footer" class="dialog-footer">
                     <el-button @click="crjDialogVisible = false" size="small">取 消</el-button>
                   </div>
      </el-dialog>
      <!-- 临住信息详情 -->
      <el-dialog title="临住信息详情" :visible.sync="lzxxDialogVisible" custom-class="big_dialog combine" :append-to-body="true" :modal="false">
         <LZXXRY :type="type" :xid="xid" :random="randomlzxx" :rybh="rybh" :gjdq="gjdqxq"></LZXXRY>
         <div slot="footer" class="dialog-footer">
           <el-button @click="lzxxDialogVisible = false" size="small">取 消</el-button>
         </div>
       </el-dialog>
       <!-- 3.常住信息详情 -->
       <el-dialog title="常住信息详情" :visible.sync="czDialogVisible" custom-class="big_dialog combine" :append-to-body="true" :modal="false">
         <CZXXRY :type="type" :xid="xid" :random="randomczxx" :rid="rid" :rybh="rybh" :gjdq="gjdqxq"></CZXXRY>
         <div slot="footer" class="dialog-footer">
           <el-button @click="czDialogVisible = false" size="small">取 消</el-button>
         </div>
       </el-dialog>
       <!-- 4.案事件详情 -->
       <el-dialog title="案事件详情" :visible.sync="asjDialogVisible" custom-class="big_dialog combine" :append-to-body="true" :modal="false">
         <ANSJRY :type="type" :xid="xid" :random="randomasj" :rybh="rybh"></ANSJRY>
         <div slot="footer" class="dialog-footer">
           <el-button @click="asjDialogVisible = false" size="small">取 消</el-button>
         </div>
       </el-dialog>
       <!-- 5.民航进出港信息 -->
      <el-dialog title="民航进出港信息详情" :visible.sync="mhDialogVisible" custom-class="big_dialog combine" :append-to-body="true" :modal="false">
         <MHXX :type="type" :xid="xid"></MHXX>
         <div slot="footer" class="dialog-footer">
           <el-button @click="mhDialogVisible = false" size="small">取 消</el-button>
         </div>
      </el-dialog>
      <!-- 6.单位信息详情 -->
      <el-dialog title="单位信息详情" :visible.sync="dwDialogVisible"  custom-class="big_dialog combine" :append-to-body="true" :modal="false">
                <DWXX :type="type" :xid="xid" :random="new Date().getTime()"></DWXX>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dwDialogVisible = false" size="small">取 消</el-button>
                    </div>
      </el-dialog>
      <!-- 7.留学生信息详情 -->
      <el-dialog title="留学生申请信息详情" :visible.sync="lxsDialogVisible"  custom-class="big_dialog combine" :append-to-body="true" :modal="false">
                  <LXSXX :type="type" :xid="xid" :random="new Date().getTime()"></LXSXX>
                  <div slot="footer" class="dialog-footer">
                    <el-button @click="lxsDialogVisible = false" size="small">取 消</el-button>
                  </div>
     </el-dialog>
     <!-- 留学生信息详情 -->
     <el-dialog title="留学生在校信息详情" :visible.sync="lxsZXDialogVisible"  custom-class="big_dialog combine" :append-to-body="true" :modal="false">
                 <LXSXXZX :type="type" :xid="xid" :random="new Date().getTime()"></LXSXXZX>
                 <div slot="footer" class="dialog-footer">
                   <el-button @click="lxsZXDialogVisible = false" size="small">取 消</el-button>
                 </div>
    </el-dialog>
    <!-- 通报信息详情 -->
    <el-dialog title="通报人员信息详情" :visible.sync="tbDialogVisible"  custom-class="big_dialog combine" :append-to-body="true" :modal="false">
                <TBRYXX  :xid="xid" :random="new Date().getTime()"></TBRYXX>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="tbDialogVisible = false" size="small">取 消</el-button>
                </div>
   </el-dialog>
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
      color:["#90C8F9","#46B1E7","#42C6DF","#F0C078","#A8D9DE","#32B6CF"],
      btmc1:["出入境记录","临住记录","常住记录","案事件记录","民航进出港信息","单位信息"],
      btmc2:["留学生申请信息","留学生在校信息","通报人员信息"],
      timeIndex: 2,
      //变量
      zjhm:'',
      gjdq:'',
      gjdqxq:'',
      token:'',
      userName:'',
      userCode:'',
      pd:{},
      rid:{},
      crjzt:'',
      czjl:'',
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
       bqDialogVisible:false,
       zpDialogVisible:false,
       lzxxDialogVisible:false,
       crjDialogVisible:false,
       asjDialogVisible:false,
       lxsDialogVisible:false,
       czDialogVisible:false,
       dwDialogVisible:false,
       mhDialogVisible:false,
       lxsZXDialogVisible:false,
       tbDialogVisible:false,
      tableData1:[],
      tableData2:[],
      tableData3:[],
      tableData4:[],
      tableData5:[],
      tableData6:[],
      tableData7:[],
      tableData8:[],
      tableData9:[],
      randomcrj:'',
      randomlzxx:'',
      randomczxx:'',
      randomasj:'',
      pd:{},
      type:2,
      rybh:'',
      xid:'',
      baseinfo:{},
      labs:[],
      nums:[],
      timez:[],
      options: this.pl.ps,
      //将接口返回来的数据重新组装为新数组
      carousel_data: [
        {
          color: "#90C8F9",
          title: "出入境记录",
          dm:'crj',
          num:0,
          bj: 3,
          sl: 15,
        },
        {
          color: "#1c87b1",
          title: "临住记录",
          dm:'lz',
          num:0,
          bj: 3,
          sl: 15,
        },
        {
          color: "#46B1E7",
          title: "常住记录",
          dm:'cz',
          num:0,
          bj: 3,
          sl: 15,
        },
        {
          color: "#dbc560",
          title: "案事件记录",
          dm:'asj',
          num:0,
          bj: 3,
          sl: 15,
        },
        {
          color: "#41C6DF",
          title: "民航进出港信息",
          dm:'mhjcg',
          num:0,
          bj: 3,
          sl: 15,
        },
        {
          color: "#EEBE76",
          title: "单位信息",
          dm:'dwjbxx',
          num:0,
          bj: 3,
          sl: 15,
        },
      ],
      carousel_data_2: [
        {
          color: "yellow",
          title: "留学生申请信息",
          dm:'lxssqxx',
          num:0,
          bj: 3,
          sl: 12,
        },
        {
          color: "#ccc",
          title: "留学生在校记录",
          dm:'lxszxjl',
          num:0,
          bj: 3,
          sl: 15,
        },
        {
          color: "#3e8e8e",
          title: "通报人员信息",
          dm:'tbry',
          num:0,
          bj: 3,
          sl: 15,
        },
      ],
      timeLineList: [],
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
    };
  },
  activated(){
    this.bqDialogVisible=false;
    this.zpDialogVisible=false;
    this.lzxxDialogVisible=false;
    this.crjDialogVisible=false;
    this.asjDialogVisible=false;
    this.lxsDialogVisible=false;
    this.czDialogVisible=false;
    this.dwDialogVisible=false;
    this.mhDialogVisible=false;
    this.lxsZXDialogVisible=false;
    this.row=this.$route.query.row;
    //路由跳转获取传到的参数
    this.zjhm=this.$route.query.zjhm;
    this.gjdq=this.$route.query.gjdq;

    if(this.zjhm!="" && this.zjhm!=undefined){
      this.pd.ZJHM=this.zjhm;
    }else if(this.row.RYBH){
      this.pd.RYBH=this.row.RYBH;
    }else{
      this.pd.RYBH=""
    }
    if(this.gjdq){
      this.pd.GJDQ=this.gjdq
    }else{
      this.pd.GJDQ=''
    }
    this.getRYXX(); 
    this.getZXZP();
    this.getTime();
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
    this.userName = this.$store.state.userName;
    this.userCode = this.$store.state.userCode;
    this.bqDialogVisible=false;
    this.zpDialogVisible=false;
    this.lzxxDialogVisible=false;
    this.crjDialogVisible=false;
    this.asjDialogVisible=false;
    this.lxsDialogVisible=false;
    this.czDialogVisible=false;
    this.dwDialogVisible=false;
    this.mhDialogVisible=false;
    this.lxsZXDialogVisible=false;
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
      // this.$api.post(this.Global.aport3+'/ryhxhx/getcrjjl', p,
      // 测试接口
      this.$api.post(this.Global.aport3+'/UserInfoTestController/getcrjjl', p,
      // this.$api.post(this.Global.aport3+'/UserInfoTestController/listCrjjl', p,
        r => {
          // this.tableData1 = r.data;         
          this.tableData1 = r.data.resultList;     
          this.crjzt=r.data.personType.value;    
          // console.log(this.tableData1.length)
          this.TotalResult1=this.tableData1.length
          // alert(this.tableData1.lengths)
          //遍历返回的数据，根据属性判断状态，重新赋值
          for(var i=0;i<this.carousel_data.length;i++){
            if(this.carousel_data[i].dm=="crj"){
              this.carousel_data[i].num=this.tableData1.length
            }
          }
        })
    },
    //2.临住信息
    getLzxx(currentPage,showCount,pd){
      let p={
        "paperNO":this.zjhm,
        "nationality":this.gjdq,
        'token':this.token,
      };
      // this.$api.post(this.Global.aport3+'/ryhxhx/getlzxx', p,
      // 测试接口
      this.$api.post(this.Global.aport3+'/UserInfoTestController/getlzxx', p,
        r => {
          this.tableData2 = r.data.info;
          this.TotalResult2=r.data.info.length;
          for(var i=0;i<this.carousel_data.length;i++){
            if(this.carousel_data[i].dm=="lz"){
              this.carousel_data[i].num=this.TotalResult2
            }
          }
        })
    },
    //3. 常住信息
    getCZXX(currentPage,showCount,pd){
      let p={
        "paperNO":this.zjhm,
        "nationality":this.gjdq,
        "token":this.token,
      };
      // this.$api.post(this.Global.aport3+'/ryhxhx/getczxx', p,
      // 测试接口
      this.$api.post(this.Global.aport3+'/UserInfoTestController/getczxx', p,
        r => {
          this.tableData3 = r.data.info;
          this.TotalResult3=r.data.info.length;
          this.czjl=r.data.inhabiState_desc;
          for(var i=0;i<this.carousel_data.length;i++){
            if(this.carousel_data[i].dm=="cz"){
              this.carousel_data[i].num=this.TotalResult3
            }
          }
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
          for(var i=0;i<this.carousel_data.length;i++){
            if(this.carousel_data[i].dm=="asj"){
              this.carousel_data[i].num=this.TotalResult4
            }
          }
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
          for(var i=0;i<this.carousel_data.length;i++){
            if(this.carousel_data[i].dm=="mhjcg"){
              this.carousel_data[i].num=this.TotalResult5
            }
          }
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
          for(var i=0;i<this.carousel_data.length;i++){
            if(this.carousel_data[i].dm=="dwjbxx"){
              this.carousel_data[i].num=this.TotalResult6
            }
          }

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
          this.sllength2.push(this.tableData7)
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
          this.sllength2.push(this.tableData8)
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
          this.sllength2.push(this.tableData9)
        })
    },
    //10.时间轴数据接口
    getTime(){
      let p={
        "nationality":this.gjdq,
        "paperNO":this.zjhm,
        "userName":this.userName,
        "userCode":this.userCode,
        "token":this.token,
      }
      this.$api.post(this.Global.aport3+'/api/user/getTimeTrack',p,
        r =>{
          this.timez=r.data
          for(let i=0;i<this.timez.length;i++){
            let obj={};
            obj.trackTime=this.timez[i].trackTime;
            obj.color="#fff";
            obj.fontsize=12;
            obj.size="15";
            obj.bgcolor="#46cdd9";
            obj.trackDataList=this.timez[i].trackDataList;
            this.timeLineList.push(obj);
          }
          console.log(this.timeLineList)
          // this.timeLineList
          // console.log(this.timez);
        }
      )
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
    //获取标签
    getLable(){
      this.drawer=true
      let p = {
        "gjdq":this.gjdq,
        "zjhm":this.zjhm,
        "token":this.token,
      };
      this.$api.post(this.Global.aport6+'/api/es/rytag/getRyTag', p,
      // 测试接口
      // this.$api.post(this.Global.aport6+'/api/es/rytag/listRyTag', p,
        r => {
          if(r.success){
            this.labs = r.respondResult;
            // 获取对象中有多少个属性
            console.log((Object.getOwnPropertyNames(this.labs).length)-1)
            for(let i=0;i<Object.getOwnPropertyNames(this.labs).length-1;i++){
               this.nums.push(i+'');
              //  console.log(this.nums)
            }
          }
        })
    },
    //出入境详情
    detailscrj(n){
        this.xid=n;
        this.randomcrj=new Date().getTime();
        // target.scrollIntoView();
        this.crjDialogVisible=true;
    },
    //临住信息详情
    detailslzxx(n){
      this.xid=n;
      this.randomlzxx=new Date().getTime();
      // target.scrollIntoView();
      this.lzxxDialogVisible=true;
    },
    //常住信息详情
    detailscz(n){
      this.xid=n.DTID;
      this.rid=n;
      this.randomczxx=new Date().getTime();
      // target.scrollIntoView();
      this.czDialogVisible=true;
    },
    //案事件信息详情
    detailsasj(n){
      this.xid=n;
      this.randomasj=new Date().getTime();
      // target.scrollIntoView();
      this.asjDialogVisible=true;
    },
    // 民航出港信息
    detailsMH(n){
      this.xid=n.RGUID;
      this.mhDialogVisible==true;
    },
    // 单位信息
    detailsdw(n){
      // this.xid=n.RGUID;
      // this.type=2;
      this.xid=n;
      // target.scrollIntoView();
      this.dwDialogVisible=true;
    },
    //留学生申请信息
    detailslxs(n){
      this.xid=n;
      this.type=2;
      // target.scrollIntoView();
      this.lxsDialogVisible=true;
    },
    //留学生在校信息
    detailslxszx(n){
      this.xid=n;
      // target.scrollIntoView();
      this.lxsZXDialogVisible=true;
    },
    //通报详情
    detailstbxx(val){
      this.xid=val;
      // target.scrollIntoView();
      this.tbDialogVisible=true;
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
    handleChange(val) {
      console.log(val);
    },
    changeActive(index) {
      this.timeIndex = index;
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
.axis {
  overflow-x: scroll;
  overflow-y: hidden;
}
.time-box{
  padding-top: 120px;
  /* padding-left: 30px; */
  /* margin-left: 15px; */
}
/* 线在底部的样式 */
.content-line-bottom{
  height: 44px;
  border-left: 1px solid #90C8F9;
  position: absolute;
  left: 2.2%;
  bottom: -21%;
}
/* 内容底部的样式 */
.content-bottom{
  width: 250px;
  height: 80px;
  border-radius: 5px;
  background-color: #90C8F9;
  position: absolute;
  bottom: -210%;
  left: -7%;
  /* overflow-y: scroll; */
}
/* .content-bottom::after{
  content: " ";
  display: block;
  border-width: 6px;
  border-style: solid;
  border-color:  transparent transparent  #46BAE2;
  width: 0;
  height: 0;
  font-family: arial;
  position: absolute;
  top: -24%;
  left: 17.5%;
  margin-left: -5px;
} */
/* 线在顶部的样式 */
.content-line-top {
  height: 44px;
  border-left: 1px solid #90C8F9;
  position: absolute;
  left: 2.2%;
  top: -88%;
}
/* 内容在顶部的样式 */
.content-top{
  width: 250px;
  height: 80px;
  border-radius: 5px;
  background-color: #90C8F9;
  position: absolute;
  top: -277%;
  left: -7%;
  /* overflow-y: scroll; */
}
/* .content-top::after{
  content: " ";
  display: block;
  border-width: 6px;
  border-style: solid;
  border-color: #46BAE2  transparent transparent;
  width: 0;
  height: 0;
  font-family: arial;
  position: absolute;
  bottom: -23%;
  left: 17.5%;
  margin-left: -5px;
} */
.time_content{
  color:#fff;
  font-size: 14px;
  /* padding:3x 10px ; */
  /* line-height: 6px; */
  /* overflow-y: scroll; */
}
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
.aaa{
  color: #0577b4;
  font-size:15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
}
.bbb{
  color: #e27713;
  font-size: 15px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-weight: bold;
}
.t1 {
  margin-bottom: 20px;
  font-size: 16px;
  /* font-family: */
  font-weight:500;
}
.t1 span{
  font-size:15px;
  font-weight: bold;
  color: #122557;
}
.list {
  padding: 0 10px;
}
/* 大屏样式 */
@media screen and (min-width: 1700px) {
  .item {
    width: 94%;
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
    margin-left: 21px;
    margin-top: -16px;
  }
}
/* 大屏样式结束 */
/* 中瓶样式开始 */
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
    margin-left: 15px;
    margin-top: -13px;
  }
}
/* 中瓶样式结束 */
/* 小屏样式开始 */
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
    margin-left: 15px;
    margin-top: -13px;
  }
  .table {
    width: 100% !important;
    margin: 5px auto 0px;
  }
}
/* 小屏样式结束 */
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
/* 时间轴样式开始 */
.ul_box {
  height: 290px;
  display: inline-block;
  margin-top: 2px;
  padding-left:42px;
  /* overflow: hidden; */
}
/* 控制间距 */
.my_timeline_item {
  display: inline-block;
  width: 250px;
  position: relative;
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
/* 时间轴线 */
.my_timeline_item_line {
  width: 100%;
  height: 10px;
  margin: -9px 0 0 15px;
  border-top: 2px dotted #42B3E5;
  border-left: none;
}
/* 时间轴节点 */
.my_timeline_item_content {
  margin: 4px 0 0 -42px;
  width: 100px;
  background-color: #42B3E5;
  border-radius: 50px;
  text-align:center;
  line-height: 20px;
}
th .el-table_1_column_1 .is-leaf{
    color: #ccc  !important;
    background: #fff !important;
}
.middle-foot{ margin-top: 10px;}
.w-grbq{
  padding: 2px 0px  !important;
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
 .right-m{
   padding: 0px 7px 7px 0px !important;
 }
 .tab-list {
  margin-bottom: 11px;
  padding-left: 0px  !important;
  padding-right: 0px  !important;
  /* margin-right: 10px; */
}
/* .tab-list:nth-child(2n){
  margin-right: 10px;
} */
.t-main{
  width:100%;
  overflow-x: hidden;
}
.ztys .el-button--mini, .el-button--mini.is-round{
  padding:3px 13px;
  margin-top: 5px;
  margin-left: 15px;
}
.time-main{
  padding:5px;
  overflow-y:scroll
}
.xcc .el-dialog__headerbtn{
  margin-top: -13px;
}
.aaaa .el-collapse-item__header{
  font-size: 20px;
  font-family:serif ;
  font-weight: bold;
  height:25px;
  line-height: 20px;
}
</style>
