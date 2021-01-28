<template lang="html">
<div class="yyryhm">
      <div class="ryhm">
       <el-row type="flex">
         <el-col :span="24">
        <!-- 外层布局容器开始 -->
        <el-container>
          <!-- 左侧侧边栏容器开始 -->
          <el-aside class="kuang">
           <el-row :gutter="1" >
             <el-col :span="24" style="margin-top:50px">
               <el-upload
                 v-if="imageUrls.length==0"
                 ref="upload"
                 class="avatar-uploader"
                 multiple
                 :action="actions"
                 :show-file-list="false"
                 :file-list="fileList"
                 :on-change='changeUpload'
                 :on-success="handleAvatarSuccess"
                 :before-upload="beforeAvatarUpload">
                <i  class="el-icon-plus avatar-uploader-icon"></i>  
               </el-upload>            
             </el-col>
             <!-- 图片上传成功时 -->
             <el-col  :span="24" class="wsc" ref="wsc">
               <div v-if="imageUrls.length">
                    <div class="scbut" @click="scbut()">上传图片</div>
                    <div class="tpline"></div>
                      <div  class="kk">
                        <div v-for="(p,i) of imageUrls" :key="i" style="border: 1px solid rgb(33, 150, 228);flex-basis: 45%; margin-bottom: 10px; margin-right:10px;height:170px" >
                              <!-- <img  :src="p" class="avatar"  style="padding:10px"> -->
                              <a href="#" style="cursor:pointer">
                                <img  :src="p.url" :class="sbtp===i?'ava':'avatar'"  @click="getImg(i,p)" style="padding:10px">
                              </a>
                               <el-col :span="24">
                                  <span class="input-text" style="float:left;margin-top:5px"> &nbsp;相似度：</span>
                                  <slider :min='0' :max='100' v-model="pxr" class="input-input" input-size="mini" style="margin-top:17px;"></slider>
                                </el-col>
                        </div>
                 </div>
               </div>   
             </el-col>
           </el-row>
           <div class="bnt" @click="getrlsb()"> </div>
           <!-- <div class="bnt" @click="submitUpload()"> </div> -->
           <div class="arrow_line" style="left:0px;top:0px; border-bottom-width:0;border-right-width:0"></div>
           <div class="arrow_line" style="left:380px;top:0px; border-bottom-width:0;border-left-width:0"></div>
           <div class="arrow_line" style="left:0px;bottom:0px; border-top-width:0;border-right-width:0"></div>
           <div class="arrow_line" style="left:380px;bottom:0px; border-top-width:0;border-left-width:0"></div>
         </el-aside>
         <!-- 左侧侧边栏容器结束 -->
         <!-- 右侧侧边栏容器开始 -->
          <el-container class="kuangr">
                  <!-- 第一次调用接口 -->
                  <!-- <div class="pd" v-if="first"> -->
                    <!-- 初始化查询如果没有重点国家的人员做判断 -->
                    <div style="padding-top: 15%;width:100%" v-if="tshow">{{cont}}</div>
                    <!-- 初始化调用接口获取重点国家的人员 -->
                    <div  v-if="bshow" style="width:calc(100%)">
                       <div class="total">共{{TotalResult}}条记录</div>
                         <div class="yline"></div>
                           <div style="overflow-y:auto; height:430px;">
                             <div v-for="item in result" >
                               <el-row class="crry">
                                  <el-col :span="9" style="padding:10px 5px;">
                                    <img :src="item.imageBase64"  width="110" height="140">
                                  </el-col>
                                  <el-col  :span="15" class="crryfont" >
                                  <p style="text-align:right;padding-right:5px;margin-top:5px; color:#FFFF04; font-size:16px; font-weight:400;">
                                    {{item.xsd | filteint}}<br/>匹配</p>
                                  <p class="slh" style="margin-top:-38px;">国家地区：<span :class="item.istsry==='y'?'gjj':'gj'">{{item.gjdq}}</span></p>
                                  <p class="slh" >人员性别：<span>{{item.xb}}</span></p>
                                  <p class="slh" >证件号码：<span>{{item.sfzh}}</span></p>
                                  <p class="slh" >中文姓名：<span>{{item.xm}}</span></p>
                                  <p class="slh" >英文姓名：<span>{{item.ywxm}}</span></p>
                                  <!-- <p class="slh" >英文姓名：<span :title="item.ywx+item.ywm">{{item.ywx}}{{item.ywm}}</span></p> -->
                                  </el-col>
                               </el-row>
                             </div>
                           </div> 
                        </div> 
                   <!-- </div> -->
                  <div class="arrow_line" style="left:415px;top:0px; border-bottom-width:0;border-right-width:0"></div>
                  <div class="arrow_line" style="right:0px;top:0px; border-bottom-width:0;border-left-width:0"></div>
                  <div class="arrow_line" style="left:415px;bottom:0px; border-top-width:0;border-right-width:0"></div>
                  <div class="arrow_line" style="right:0px;bottom:0px; border-top-width:0;border-left-width:0"></div>
         </el-container>
        <!-- 右侧侧边栏容器结束 -->
      </el-container>
      <!-- 外层布局容器结束 -->
      </el-col>
         </el-row>
      </div>
</div>
</template>
<script>
import slider from "../../common/slider.vue";
export default {
  components: { slider },
  data() {
    return {
      pd: { xb: "1" },
      limitNum: 1,
      fileList2: [],
      TotalResult: 0,
      uploadDialogVisible: false,
      actions: "",
      // num1: 20,
      // num2: 60,
      cont: "暂无数据",
      base64: [],
      imgs: {},
      imageUrl: "",
      tshow: false,
      bshow: true,
      // xshow: false,
      // fshow: true,
      hnum: 1,
      pxr: this.Global.xsd,
      //代码重写
      lh:false,
      fileList:[],
      // pic:[],
      // dialogImageUrl: [],
      imageUrls:[],//将上传图片存放此数组
      sbtp:0,//
      result:[],
      results:[],
      trip:[],
      zdry:false,
      cc:[],
      first:'',
      firstFile:[]
      //接口假数据
    };
  },
  // activated()：
  // 在vue对象存活的情况下，进入当前存在activated()函数的页面时，一进入页面就触发；
  // 可用于初始化页面数据等
  activated() {
    //console.log("------", this.$route.query.row);
    if (this.$route.query.row) {
      this.pd.xb = this.$route.query.row.xb;
      this.pxr = this.$route.query.row.xsd;
      this.num1 = this.$route.query.row.age1;
      this.num2 = this.$route.query.row.age2;
      this.imageUrl = this.$route.query.row.base64._v;
      this.base64 = this.$route.query.row.base64._v;
      //this.submitUpload();
    }
    //上传到服务器的路径
    this.actions = window.IPConfig.IP + this.Global.aport3 + "/getTp";
    // if(this.handleAvatarSuccess){
    //   this.second=true;
    //   //this.first=false;
    //   // 调用第二个版本的页面
    // }
  },
  mounted(){
      // 页面初始化
       //初始化第一次请求接口获得数据
        let p = this.$store.state.wtoken
        //var url='http://10.0.9.175:9439/rlsb';
        var url = this.Global.aport3 + "/selectTsryList";
        this.$api.post(url, p, r => {
          if (r.status) {
            // this.imgs = r.data;
            // 根据接口返回的数据渲染页面
            console.log(r.selectdata);
            //判断
            // if(this.result.length!==0){
            //     this.result=[]
            // }
            this.result = r.selectdata;
            console.log('result===',this.result);
            this.tshow = false;
            this.bshow = true;
            this.TotalResult = r.total;         
            // this.uplo adDialogVisible=true;
          } else {
            this.cont = "查询无数据";
            this.tshow = true;
            this.bshow = false;
            this.$message.error(r.msg);
          }
        });
  },

  methods: {
    //控制重新选择图片事件
    getImg(i){
      //alert(i)
      this.sbtp=i
      if(this.result.length!==0){  
           this.result=[];
      }
      if(!this.TotalResult){
            this.TotalResult = 0;
      }
      console.log('3333333333333333333');
      // this.TotalResult=r.total
      // this.handleAvatarSuccess(res, file)
      
      this.result=this.results[this.firstFile[i]];
      console.log('3333333333=====',this.result)
      this.TotalResult=this.result.length==0?0:this.result[0].size
      //this.TotalResult=this.results[this.firstFile[i]].total;
      this.tshow = false;
      this.bshow = true;
    },
    //页面上传按钮跳转事件
    scbut(){      
      if(this.imageUrls!==[]){        
        this.imageUrls=[];
        console.log('122222222222');
        this.$refs.wsc.innerHTML=`
                       <el-upload
                 v-if="imageUrls.length==0"
                 ref="upload"
                 class="avatar-uploader"
                 multiple
                 :action="actions"
                 :show-file-list="false"
                 :file-list="fileList"
                 :on-change='changeUpload'
                 :on-success="handleAvatarSuccess"
                 :before-upload="beforeAvatarUpload">
                <i  class="el-icon-plus avatar-uploader-icon"></i>  
               </el-upload>
        `;
      }
        //初始化第一次请求接口获得数据
        let p = this.$store.state.wtoken;
        this.firstFile=[];
        this.base64=[];
        //var url='http://10.0.9.175:9439/rlsb';
        var url = this.Global.aport3 + "/selectTsryList";
        this.$api.post(url, p, r => {
          if (r.status) {
            // this.imgs = r.data;
            // 根据接口返回的数据渲染页面
            console.log(r.selectdata);
            // 判断
            // if(this.result.length!==0){
            //     this.result=[]
            // }
            this.result = r.selectdata;
            console.log('result===',this.result);
            this.tshow = false;
            this.bshow = true;
            this.TotalResult = r.total;         
            // this.uplo adDialogVisible=true;
          } else {
            this.cont = "查询无数据";
            this.tshow = true;
            this.bshow = false;
            this.$message.error(r.msg);
          }
        });
    },
    //人脸识别按钮
    getrlsb() {
      if (this.hnum == 1) {
        this.$message.error("请上传图片!");
        return;
      }
      //点击人脸识别按钮重新调用接口
      // this.getBase64(file.raw).then(res=>{
      //   // console.log('res:',res)
      //   this.base64 = res
      //   // console.log('base64===', this.base64);
      // });

        // 传参
        this.cc=[];
        for(var i=0;i<this.base64.length;i++){
          let ccs={};
          ccs.image = this.base64[i];
          ccs.serverip=this.$store.state.serverip;
          ccs.token=this.$store.state.wtoken;
          ccs.xb=this.pd.xb,
          ccs.xsd=this.Global.xsd;
          this.cc.push(ccs)
        }

      // let p = [
      //   {
      //     image:this.base64,
      //     serverip:this.$store.state.serverip,
      //     token: this.$store.state.wtoken,
      //     xb:this.pd.xb,
      //     xsd:this.Global.xsd
      //   },
      //   {
      //     image:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBLAEsAAD/2wBDAAMCAg2122",
      //     serverip:"",
      //     token:"",
      //     xsd:"60"
      //   }
      // ]
      console.log('211111111111')
        if(this.result.length!==0){  
           this.result.length=0;
        }
        if(!this.TotalResult){
            this.TotalResult = 0;
        }

        var url = this.Global.aport3 + "/rlsb";
        this.$api.post(url,this.cc, r => {
          if (r.status) {
            console.log('22222222222222222222222')
              this.results=r.data;
              console.log(this.results);
              this.result=r.data[this.firstFile[0]];
              console.log('base64前7位',this.result);
              console.log('result=======2===',this.result);
              this.TotalResult=this.result.length===0?0:this.result[0].size
              // this.TotalResult=r.total
              this.tshow = false;
              this.bshow = true;
            // this.imgs = r.data;
            // this.uplo adDialogVisible=true;
          } else {
            this.cont = "查询无数据";
            this.tshow = true;
            this.bshow = false;
            this.$message.error(r.msg);
          }
        });
    },
    //控制性别按钮的事件
    getXB(n,i) {
      this.pd.xb = n;
      if (n == 2) {
        this.imageUrls[i].xshow = true;
        this.imageUrls[i].fshow = false;
      } else {
        this.imageUrls[i].xshow = false;
        this.imageUrls[i].fshow = true;
      }
    },
    handleChange(value) {
      // console.log(value);
    },

    // 文件上传成功时的钩子
    handleAvatarSuccess(res, file) {
      let obj= {};
      obj.xshow = false;
      obj.fshow = true;
      //obj.sbtp = true;
      obj.num1 = 20;
      obj.num2 = 60;
      obj.uid = file.uid;
      //获取当前图片----存取当前图片的路径
      obj.url = URL.createObjectURL(file.raw)
      this.getBase64(file.raw).then(res=>{
        // console.log('res:',res)
        obj.image = res; 
        this.imageUrls.push(obj);   
        let k1 = res.substr(res.length-7,res.length-1);
        this.firstFile.push(res.substr(res.length-7,res.length-1));
        console.log('k1',k1);
        this.base64.push(res);
      });
       
      this.tshow=true;
      this.bshow=false;
    },

    //文件状态改变时的钩子，添加文件，上传成功，上传失败时都会被调用
    changeUpload(file, fileList) {
      // this.getBase64(file.raw).then(res=>{
      //   // console.log('res:',res)
      //   this.base64 = res
      //   // console.log('base64===', this.base64);
      // });
    },

    //上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 10;
      if (!isJPG) {
        this.hnum = 1;
        this.$message.error("上传图片的格式只能是 JPG或PNG 格式!");
      }
      if (!isLt2M) {
        this.hnum = 1;
        return this.$message.error("上传图片大小不能超过 10MB!");
      }
      this.hnum = 0;
      return isJPG && isLt2M;
      this.getBase64(file.raw);
    },
    handleChange(value) {
      //console.log(value);
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      // console.log(file);
    },

    upSuccess(r) {
      if (r.success) {
        this.$message({
          message: r.data,
          type: "success"
        });
      }
      // this.uploadDialogVisible = false;
    },
    // submitUpload() {
    //   if (
    //     this.$refs.upload.uploadFiles.length == 0 &&
    //     this.imageUrl == "" &&
    //     this.hnum != 1
    //   ) {
    //     this.$message({
    //       message: "请先选择图片！",
    //       type: "warning"
    //     });
    //     return;
    //   }
    //   let p = [
    //     {
    //       token: this.$store.state.wtoken,
    //       serverip: this.$store.state.serverip,
    //       image: this.base64,
    //       xb: this.pd.xb,
    //       csrq: this.pd.csrq,
    //       xsd: this.Global.xsd
    //     },
    //   ];
    //   //console.log("xsd", this.Global.xsd);
    //   //var url='http://10.0.9.175:9439/rlsb';
    //   var url = this.Global.aport3 + "/rlsb";

    //   this.$api.post(url, p, r => {
    //     if (r.status) {
    //       this.imgs = r.data;
    //       this.tshow = false;
    //       this.bshow = true;
    //       this.TotalResult = r.total;
          
    //       //this.getBase64(file.raw);
    //       // this.uplo adDialogVisible=true;
    //     } else {
    //       this.cont = "查询无数据";
    //       this.tshow = true;
    //       this.bshow = false;
    //       this.$message.error(r.msg);
    //     }
    //   });
    //    //this.$refs.upload.submit();
    // },

    getBase64(file) {
      return new Promise(function(resolve, reject) {
        let reader = new FileReader();
        let imgResult = "";
        reader.readAsDataURL(file);
        // 文件读取成功时触发
        reader.onload = function() {
          // 获取base64编码
          imgResult = reader.result;
          resolve(imgResult)
        };
        //出错时触发
        reader.onerror = function(error) {
          reject(error);
        };
        //读取完成触发，无论成功或者失败
        reader.onloadend = function() {
          resolve(imgResult);
        };
      });
    }
  },

  //   getBase64(file) {
  //     return new Promise(function(resolve, reject) {
  //       var article_image, image_base64;
  //       let reader = new FileReader();
  //       let imgResult = "";
  //       //获取base64编码
  //       reader.readAsDataURL(file);
  //       //文件读取成功时触发
  //       reader.onload = function() {
  //         image_base64 = this.result.split(",")[1];
  //         article_image = image_base64;
  //         //imgResult = reader.result;
  //         var params = {
  //                 imgdata: article_image
  //         };
  //         var url = this.Global.aport3 + "/rlsb";
  //         let p = {
  //             token: this.$store.state.wtoken,
  //             serverip: this.$store.state.serverip,
  //             // "token":'1111',
  //             // "serverip":'222',
  //             image: this.base64,
  //             xb: this.pd.xb,
  //             csrq: this.pd.csrq,
  //             xsd: this.Global.xsd,
  //             //     image1: this.base64,
  //             //     xb: this.pd.xb,
  //             //     csrq: this.pd.csrq,
  //             //     xsd: this.Global.xsd
  //        };
         
  //       this.$api.post(url, p, r => {
  //         if (r.status) {
  //           this.imgs = r.data;
  //           this.tshow = false;
  //           this.bshow = true;
  //           this.TotalResult = r.total;
  //           this.pic.push(res.data.result.url);
  //           this.dialogImageUrl.push({
  //                 'url':res.data.result.url
  //           })
  //           // this.uplo adDialogVisible=true;
  //         } else {
  //           this.cont = "查询无数据";
  //           this.tshow = true;
  //           this.bshow = false;
  //           this.$message.error(r.msg);
  //         }
  //       });
  //       };
  //       //出错时触发
  //       reader.onerror = function(error) {
  //         reject(error);
  //       };
  //       //读取完成触发，无论成功或者失败
  //       // reader.onloadend = function() {
  //       //   resolve(imgResult);
  //       // };
  //     });
  //   }
  // },
  filters: {
    filteint(n) {
      var ss = (n+'').split(".");
      //console.log(ss);
      if (ss.length > 1) {
        return parseInt(n * 100) + "%";
      }
      return n;
    }
  }
};
</script>



<style scoped>
.kk{
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 380px;
  overflow-y:auto; 
  overflow-x: hidden;
  height:430px;  
  margin-top: 26px;
}

.nzd{
  border: 1px solid red;
}
/* .imgsb{

} */

.ryhm {
  text-align: center;
  margin: auto;
}
.slh {
  overflow: hidden !important;
  text-overflow: ellipsis !important;
  white-space: nowrap !important;
  position: relative !important;
  padding-left: 0px;
}
.slh span {
  color: #13d2f7;
}
.gj {
  color: #13d2f7  !important;
}
.gjj{
  color: red  !important;
  font-weight: bold;
}
.rowcont1 {
  width: 390px !important;
  line-height: 50px;
  font-size: 16px;
  padding-right: 10px;
}
.rowcont2 {
  width: 380px !important;
  font-size: 16px;
  padding-left: 10px;
  margin-top: 30px;
}
.input-text {
  text-align: left !important;
  width: 45% !important;
  padding-left: 2px;
  color: #55d5f4;
}
/* .input-text1 {
  text-align: left !important;
  width: 45% !important;
  padding-left: 2px;
  color: #55d5f4;
} */
.input-input {
  /* float: left; */
  /* margin-left: -10px; */
  margin-top: 8px;
  width: 25% !important;
}
.colleft {
  /* text-align: left; */
}
.yyryhm {
  background: url(../../../assets/img/tb/bgry.png) repeat;
  min-height: 650px;
  min-width: 1100px;
  padding: 20px;
}
.kuang {
  padding: 10px;
  width: 400px !important; 
  height: 600px;
  color: #13d2f7;
  border: 2px solid rgba(11, 154, 251, 0.9);
  overflow-x: hidden;
}
.kuangr {
  width: 100%;
  padding: 10px;
  margin-left: 15px;
  min-height: 600px;
  color: #13d2f7;
  border: 2px solid rgba(11, 154, 251, 0.9);
}
.crry {
  width: 31%;
  border: 2px solid rgba(33, 148, 226, 1);
  border-radius: 3px;
  float: left;
  margin: 5px 7px 7px 7px;
  background: url(../../../assets/img/tb/brj.png) no-repeat top right
    rgba(1, 95, 159, 0.47);
}
.crryfont {
  font-size: 14px;
  color: rgba(205, 229, 254, 1);
  text-align: left;
}
.bnt {
  margin-top: 40px;
  margin-left: 90px;
  width: 200px;
  height: 44px;
  cursor: pointer;
  background: url(../../../assets/img/tb/bnt01.png) no-repeat;
}
.bnt:hover {
  width: 200px;
  height: 44px;
  background: url(../../../assets/img/tb/bnt02.png) no-repeat;
}
.arrow_line {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 3px solid #01fbef;
}
.sex {
  width: 30px;
  height: 28px;
  line-height: 5px;
  background: rgba(0, 85, 148, 1);
  color: #13d2f7;
  border: 1px solid rgba(19, 210, 247, 1);
  cursor: pointer;
}
.sex:hover {
  width: 30px;
  height: 28px;
  color: #ffffff;
  line-height: 5px;
  background: rgba(14, 180, 223, 1);
  border: 1px solid rgba(19, 210, 247, 1);
}
.sexx {
  width: 30px;
  height: 28px;
  color: #ffffff;
  line-height: 5px;
  background: rgba(14, 180, 223, 1);
  border: 1px solid rgba(19, 210, 247, 1);
  /* margin-left: -40px; */

}
.yline {
  width: 100%;
  height: 1px;
  background: rgba(33, 148, 226, 1);
  margin-bottom: 10px;
}
.tpline{
  width: 100%;
  height: 1px;
  background: rgb(33, 150, 228);
  margin-bottom: 10px;
  margin-top: -20px;
  position: relative;
  top: 10px;
  left: 0;
}
.total {
  padding-left: 15px;
  line-height: 40px;
  color: #13d2f7;
  text-align: left;
}
.scbut{
  text-align: center;
  line-height: 26px;
  color: #13d2f7;
  cursor: pointer;
  position: absolute;
  top:5px;
  left: 0px;
  /* margin-bottom: 10px; */
  border: 1px solid rgb(33, 150, 228);
  width: 70px;
  height: 25px;
}
.scbut:hover{
  color: #ffffff;
  border: 1px solid #fff;
}
.imgcs {
  border-radius: 15px;
  border: 1px solid rgba(11, 154, 251, 0.6);
  padding: 5px;
  background: #0b5298;
}
.yzd {
  border-radius: 15px;
  /* border: 1px solid red; */
  color: red;
  padding: 5px;
  background: #0b5298;
}
.slider {
  margin-left: 90px !important;
  margin-top: 12px;
}
</style>
<style>
.yyryhm .avatar-uploader .el-upload {
  width: 160px;
  height: 160px;
  background: rgba(24, 201, 250, 0.2);
  border: 3px solid rgba(14, 180, 223, 0.5);
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-top: 49px;
}

.yyryhm .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 160px;
  height: 160px;
  line-height: 178px;
  text-align: center;
  background: url(../../../assets/img/tb/tx.png) no-repeat;
}
.yyryhm .avatar {
  width: 100px;
  height: 100px;
  display: block;
  /* margin-left: px; */
  margin: 0px auto;
}
.ava{
  width: 100px;
  height: 100px;
  display: block;
  margin: 0px auto;
  border-radius: 10px;
  border: 2px solid #fff;
}
.yyryhm .el-icon-plus:before {
  content: none;
}
.yyryhm .el-input-number--small {
  width: 50px;
  line-height: 30px;
}
.yyryhm .el-input-number.is-controls-right .el-input__inner {
  /* margin-left:10px; */
  width: 30px;
  height: 28px;
  padding-left: 3px;
  padding-right:10px;
  background: #054473;
  font-size: 10px;
  border: 1px solid rgba(19, 210, 247, 1);
  color: #13d2f7;
}
.yyryhm .el-input-number--small .el-input-number__decrease,
.yyryhm .el-input-number--small .el-input-number__increase {
  width: 10px !important;
  font-size: 10px;
  /* float: right; */
  right:10px !important;
  background: linear-gradient(
    0deg,
    rgba(0, 255, 234, 1),
    rgba(24, 201, 250, 1),
    rgba(0, 255, 234, 1)
  );
  opacity: 0.6;
  color: #333;
}
.yyryhm .el-button.is-circle {
  border-radius: 50%;
  padding: 2px;
}
</style>
