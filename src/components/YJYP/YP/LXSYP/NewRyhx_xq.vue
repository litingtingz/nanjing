<template lang="html">
   <div class="ryhx">
    <div class="tshu" id="target" style="overflow-y:hidden">
      <div style="margin: 10px; padding: 20px;">
        <el-container style="height:450px;overflow-y:hidden">
          <!-- <el-row> -->
          <el-aside style="width:300px;overflow-y:hidden">
          <!-- 左侧面板开始 -->
           <!-- <el-col :span="4" style=""> -->
              <el-card shadow="hover">
                  <!-- <div class="photo-content"> -->
                    <img style="height:120px;width:120px;margin-left:23%;margin-bottom:5px;border-radius:50%;border:1px solid #ccc">
                      <el-button @click="drawer = true" type="text" style="margin-left:35%">
                        个人标签
                      </el-button>
                    <el-drawer
                      title="个人标签"
                      :visible.sync="drawer"
                      :before-close="handleClose">
                        <el-collapse v-model="activeNames" @change="handleChange">
                          <el-collapse-item title="标签分类一" name="1" style="padding-left:20px">
                            <div>存在年龄偏高</div>
                            <div>33岁</div>
                          </el-collapse-item>
                          <el-collapse-item title="标签分类二" name="2" style="padding-left:20px">
                            <div>211高校</div>
                            <div>留学生申请信息</div>
                          </el-collapse-item>
                          <el-collapse-item title="标签分类三" name="3" style="padding-left:20px">
                            <div>男</div>
                            <div>美国</div>
                            <div>南京农业大学</div>
                          </el-collapse-item>
                          <el-collapse-item title="标签分类四" name="4" style="padding-left:20px">
                            <div>经济管理学院</div>
                            <div>农业经济管理</div>
                          </el-collapse-item>
                        </el-collapse>
                    </el-drawer>
                    <!-- <div class="hisPhoto">
                      查看历史照片
                    </div> -->
                    <div style="height:1px;width:80;margin:20px auto;background-color:#ccc"></div>
                      <el-row >
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
                  <el-carousel arrow="always" height="100px" :autoplay="false" indicator-position="none">
                      <el-carousel-item>
                              <el-row :gutter="20" class="list">
                                <el-col :span="4" :offset="0">
                                  <div class="item" style="height:100px;background-color:yellow;">
                                    1
                                  </div>
                                </el-col>
                                <el-col :span="4" :offset="0">
                                  <div class="item" style="height:100px;background-color:#ccc;">
                                    2
                                  </div>
                                </el-col>
                                <el-col :span="4" :offset="0">
                                  <div class="item" style="height:100px;background-color:#3e8e8e;">
                                    3
                                  </div>
                                </el-col>
                                <el-col :span="4" :offset="0">
                                  <div class="item" style="height:100px;background-color:yellow;">
                                    4
                                  </div>
                                </el-col>
                                <el-col :span="4" :offset="0">
                                  <div class="item" style="height:100px;background-color:#ccc;">
                                    5
                                  </div>
                                </el-col>
                                <el-col :span="4" :offset="0">
                                  <div class="item" style="height:100px;background-color:#f00;">
                                    6
                                  </div>
                                </el-col>
                              </el-row>
                            </el-carousel-item>
                            <el-carousel-item>
                              <el-row :gutter="20" class="list">
                                <el-col :span="4" :offset="0">
                                  <div class="item" style="height:100px;background-color:yellow;">
                                    7
                                  </div>
                                </el-col>
                                <el-col :span="4" :offset="0">
                                  <div class="item" style="height:100px;background-color:#ccc;">
                                    8
                                  </div>
                                </el-col>
                                <el-col :span="4" :offset="0">
                                  <div class="item" style="height:100px;background-color:#3e8e8e;">
                                    9
                                  </div>
                                </el-col>
                              </el-row>
                            </el-carousel-item>
                 </el-carousel>
                 </el-col>
             </el-row>
             <!-- 右侧下边面板部分 -->
             <el-container>
               <!-- 标签栏设置开始 -->
               <!-- <el-aside  width="220px">
                    <div style="height:335px;background-color:#fff;margin-top:15px;margin-left:10px">
                        <h1 align="center">标签</h1>
                    </div>
               </el-aside> -->
               <!-- 标签栏设置结束 -->
               <!-- 主要面板部分开始 -->
              <el-main style="height:400px;margin-top:20px;padding:0px 10px">
                  <el-row :gutter="20">
                    <el-col :lg="24" :xl="12" style="margin-bottom:20px">
                      <el-card shadow="always">
                        <div class="mb">
                          <span>留学生申请信息</span>
                          <ul>
                            <li>南京工业大学</li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :lg="24" :xl="12" style="margin-bottom:20px">
                      <el-card shadow="always">
                        <div class="mb">
                          <span>留学生申请信息</span>                      
                          <ul>
                            <li>南京工业大学</li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :lg="24" :xl="12" style="margin-bottom:20px">
                      <el-card shadow="always">
                        <div class="mb">
                          <span>留学生申请信息</span>
                          <ul>
                            <li>南京工业大学</li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :lg="24" :xl="12" style="margin-bottom:20px">
                      <el-card shadow="always" >
                        <div class="mb">
                          <span>留学生申请信息</span>                      
                          <ul>
                            <li>南京工业大学</li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :lg="24" :xl="12" style="margin-bottom:20px">
                      <el-card shadow="always">
                        <div class="mb">
                          <span>留学生申请信息</span>
                          <ul>
                            <li>南京工业大学</li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :lg="24" :xl="12" style="margin-bottom:20px">
                      <el-card shadow="always">
                        <div class="mb">
                          <span>留学生申请信息</span>                      
                          <ul>
                            <li>南京工业大学</li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :lg="24" :xl="12" style="margin-bottom:20px">
                      <el-card shadow="always">
                        <div class="mb">
                          <span>留学生申请信息</span>
                          <ul>
                            <li>南京工业大学</li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :lg="24" :xl="12" style="margin-bottom:20px">
                      <el-card shadow="always">
                        <div class="mb">
                          <span>留学生申请信息</span>                      
                          <ul>
                            <li>南京工业大学</li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :lg="24" :xl="12" style="margin-bottom:20px">
                      <el-card shadow="always">
                        <div class="mb">
                          <span>留学生申请信息</span>
                          <ul>
                            <li>南京工业大学</li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :lg="24" :xl="12" style="margin-bottom:20px">
                      <el-card shadow="always">
                        <div class="mb">
                          <span>留学生申请信息</span>                      
                          <ul>
                            <li>南京工业大学</li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :lg="24" :xl="12" style="margin-bottom:20px">
                      <el-card shadow="always">
                        <div class="mb">
                          <span>留学生申请信息</span>
                          <ul>
                            <li>南京工业大学</li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                    <el-col :lg="24" :xl="12" style="margin-bottom:20px">
                      <el-card shadow="always">
                        <div class="mb">
                          <span>留学生申请信息</span>                      
                          <ul>
                            <li>南京工业大学</li>
                            <li></li>
                            <li></li>
                          </ul>
                        </div>
                      </el-card>
                    </el-col>
                  </el-row>
              </el-main>
               <!-- 主要面板部分结束 -->
             </el-container>
             </el-main>
           <!-- 右侧面板结束 -->
      </el-container>
      <!-- 底部时间轴开始 -->
      <div style="width:100%;height:30px;font-weight:bold;font-size:18px;margin-top:10px">人员入住信息</div>
      <el-row :gutter="20" style="background-color:#fff;height:200px">
          <el-col :span="24">
                <!-- <div class="timeLine" style="overflow: hidden;"> -->
                  <!-- <div class="my_timeline_prev" @click="moveLeft">
                      <div class="my_timeline_item_line" style="margin-top: -18px;"></div>
                  </div> -->
                  <div class="ul_box">
                      <ul class="my_timeline" ref="mytimeline" style="margin-left: 10px;">
                          <li class="my_timeline_item" v-for="(item,index) in timeLineList" :key="index">
                              <!--圈圈节点-->
                              <div class="my_timeline_node" :style = " {backgroundColor: item.bgcolor, width: item.size + 'px', height: item.size + 'px'}" @click="changeActive(index)" :class="{active: index == timeIndex}"></div>
                              <!--线-->
                              <div class="my_timeline_item_line"></div>
                              <!--标注-->
                              <div class="my_timeline_item_content" :style="{color: item.color, fontSize: item.fontsize + 'px'}">
                                  {{item.timestamp}}
                              </div>
                          </li>
                      </ul>
                  </div>
                  <!-- <div class="my_timeline_next" @click="moveRight">
                      <div class="my_timeline_item_content" style="color: rgba(0,0,0,0);">下</div>
                  </div> -->
              <!-- </div> -->
          </el-col>
      </el-row>
    <!-- 底部时间轴结束 -->
</div>
</div>
</div>
</template>
<script scoped>
export default{
  data(){
    return{
      drawer: false,
      activeNames: ['1','2','3','4'],
      timeIndex: 2,
            timeLineList: [{
                  timestamp: '2014年',
                  color: '#999',
                  fontsize: 18,
                  size: '28',
                  bgcolor: '#4886a8',
                  year: '2014',
                }, {
                  timestamp: '2015年',
                  color: '#999',
                  fontsize: 18,
                  year: '2015',
                  size: '28',
                  bgcolor: '#4886a8',
                }, {
                  timestamp: '2016年',
                  color: '#999',
                  fontsize: 18,
                  size: '28',
                  year: '2016',
                  bgcolor: '#4886a8',
                }, {
                  timestamp: '2019年',
                  color: '#999',
                  fontsize: 18,
                  year: '2019',
                  bgcolor: '#4886a8',
                  size: '28',
                },{
                  timestamp: '2019年',
                  color: '#999',
                  fontsize: 18,
                  year: '2019',
                  bgcolor: '#4886a8',
                  size: '28',
                },{
                  timestamp: '2019年',
                  color: '#999',
                  fontsize: 18,
                  year: '2019',
                  bgcolor: '#4886a8',
                  size: '28',
                },{
                  timestamp: '2019年',
                  color: '#999',
                  fontsize: 18,
                  year: '2019',
                  bgcolor: '#4886a8',
                  size: '28',
                },{
                  timestamp: '2019年',
                  color: '#999',
                  fontsize: 18,
                  year: '2019',
                  bgcolor: '#4886a8',
                  size: '28',
                },
                ]
    }
  },
  methods:{
    handleClose(done){
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
    },
    handleChange(val){
      console.log(val)
    },
    changeActive(index) {
            this.timeIndex = index;
        },
    moveLeft()  {
            let marginLeft = parseInt(this.$refs.mytimeline.style.marginLeft);
            let listNum = 0;
            if(marginLeft <= 10 && (marginLeft >= -650)){
                this.$refs.mytimeline.style.marginLeft = marginLeft - 220 + 'px';
            }
    },
    moveRight() {
            let marginLeft = parseInt(this.$refs.mytimeline.style.marginLeft);
            if(marginLeft < (-200)){
                this.$refs.mytimeline.style.marginLeft = marginLeft + 220 + 'px';
            }
    }
  }
}
</script>
<style scoped>
.bainfo{font-size: 12px;line-height: 30px; padding-left:15px;}
.middle-foot{ margin-top: 10px;}
.v-modal{background: none!important;}
.t1{
  margin-bottom: 20px;
}
.list{
  padding: 0 20px;
}
.item {
  width: 100%;
}
.mb{
  height: 110px;
  background-color: #fff;
}
.el-card__body{
  padding:5px 10px !important;
}
.el-collapse-item__header{
  /* margin-left: 20px !important; */
  padding-left: 20px !important;
  font-size: 18px !important;
  font-weight: bold !important; 
  z-index: 1000;
}
/* .my_timeline_prev, .my_timeline_next {
    float: left;
    display: inline-block;
    background-color: green;
    cursor: pointer;
} */
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
    height: 60px;
    display: inline-block;
    float: left;
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
    /* border: 6px solid #4886a8; */

}
.my_timeline_item_line {
    width: 100%;
    height: 10px;
    margin: -14px 0 0 28px;
    border-top: 2px solid #E4E7ED;
    border-left: none;
}
.my_timeline_item_content {
    margin: 10px 0 0 -10px;
}
</style>
