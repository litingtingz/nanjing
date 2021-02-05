<template lang="html">
   <div class="qwjs">
      <el-card shadow="always">
        <div class="top">
          <i class="el-icon-search" style="line-height:2.2;margin-right:5px"></i>
          <el-input placeholder="" v-model="content" class="inputs" @keyup.enter.native="CurrentPage=1;getList(CurrentPage,pageSize)">
              <el-select v-model="type" slot="prepend" placeholder="请选择" max="500" style="width:100px;" @change="typeChange">
                <el-option label="综合" value="all"></el-option>
                <el-option label="单位" value="ssdw"></el-option>
                <el-option label="人员" value="user"></el-option>
                <el-option label="案件" value="aj"></el-option>
                <el-option label="地址" value="addr"></el-option>
              </el-select>
          </el-input>
          <el-button type="primary"  @click="CurrentPage=1;getList(CurrentPage,pageSize)" style="margin-left:-10px;">查询</el-button>
          <el-button type="success" @click="$router.push({name:'RYHX'})">返回</el-button>
        </div>
        <div class="navinfo" v-if="type=='all'||type=='user'">
          <span :class="{'redy':check==0}" @click="check=0;CurrentPage=1;getList(CurrentPage,pageSize,'lz')"> 临住数据 ( <b>{{info.lz}}</b> 条)  </span>
          <span :class="{'redy':check==1}" @click="check=1;CurrentPage=1;getList(CurrentPage,pageSize,'cz')"> 常住数据 ( <b>{{info.cz}}</b>  条)  </span>
          <span :class="{'redy':check==2}" @click="check=2;CurrentPage=1;getList(CurrentPage,pageSize,'qz')"> 签证数据 ( <b>{{info.qz}}</b>  条)  </span>
          <span :class="{'redy':check==3}" @click="check=3;CurrentPage=1;getList(CurrentPage,pageSize,'ajxx')"> 案件数据 ( <b>{{info.ajxx}}</b>  条)  </span>
          <span :class="{'redy':check==4}" @click="check=4;CurrentPage=1;getList(CurrentPage,pageSize,'crj')"> 出入境数据 ( <b>{{info.crj}}</b>  条)  </span>
        </div>
      </el-card>
      <div class="main">
        <div v-if="!tipShow">
          <el-row v-for="(item,index) in items" :key="index">
            <el-card class="box-card" style="margin:5px 0;" v-if="type=='user'||type=='all'">
              <el-row type="flex">
              <el-col :span="2" style="padding:10px;width:120px;">
                <div class="shover"  @click="$router.push({name:'RYHX_XQ',query:{zjhm:item.zjhm,zjhmes:content,stype:type,gjdq:item.gjdq}})">
                <img :src="item.photo" v-if="item.photo" width="100" height="120">
                <img src="../../../../assets/img/mrzp.png" width="100" height="120" v-else >
              </div>
              </el-col>
              <el-col :span="22">
                <div class="shover" @click="$router.push({name:'RYHX_XQ',query:{zjhm:item.zjhm,zjhmes:content,stype:type,gjdq:item.gjdq}})">
                  <div class="list">
                    <p style="margin-bottom:15px!important"><b>{{item.ywxm}}</b></p>
                    <el-row type="flex"  class="t-detail">
                      <el-col :span="22">
                        <el-row class="t-mb15">
                          <el-col :span="6" class="t-el-content"><div class="t-el-text">性别：</div><div class="t-el-sub">{{item.xb}}</div></el-col>
                          <el-col :span="6" class="t-el-content"><div class="t-el-text">出生日期：</div><div class="t-el-sub">{{item.csrq}}</div></el-col>
                          <el-col :span="6" class="t-el-content"><div class="t-el-text">国家地区：</div><div class="t-el-sub">{{item.gjdqmc}}</div></el-col>
                          <el-col :span="6" class="t-el-content"><div class="t-el-text">证件号码：</div><div class="t-el-sub">{{item.zjhm}}</div></el-col>
                        </el-row>
                        <el-row>
                          <el-col :span="24" class="t-el-content"><div class="t-el-text">命中信息：</div><div class="t-el-sub t-el-sub-long"><span v-html='item.cusHighlight'></span></div></el-col>
                        </el-row>
                      </el-col>
                      <el-col :span="2">
                        <!-- <el-button type="text" title="详情">详情</el-button> -->
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </el-col>
              </el-row>
            </el-card>
            <el-card class="box-card" style="margin:5px 0;" v-else>
              <el-row type="flex">
                <el-col :span="24">
                  <div class="shover" @click="getRYXX(item)">
                    <div class="list">
                      <el-row type="flex"  class="t-detail">
                        <el-col :span="24">
                          <el-row class="t-mb15">
                            <el-col v-for="(card,cards) in cardData" :key="cards" :span="card.col?card.col:6" class="t-el-content">
                              <div class="t-el-text">{{card.mc}}：</div>
                              <div class="t-el-sub">{{item[card.dm]}}</div>
                            </el-col>
                          </el-row>
                          <el-row>
                            <el-col :span="24" class="t-el-content"><div class="t-el-text">命中信息：</div><div class="t-el-sub t-el-sub-long"><span v-html='item.cusHighlight'></span></div></el-col>
                          </el-row>                     
                        </el-col>
                      </el-row>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-card>
          </el-row>
        </div>
        <div v-if="tipShow">
          <el-row>
            <div class="redx text-center t-mt20">
              没有查询到相关数据！
            </div>
          </el-row>
        </div>
        <div class="middle-foot" style="margin-top:10px;" v-if="TotalResult!=0">
            <el-pagination
              background
              @current-change="handleCurrentChange"
              :current-page.sync ="CurrentPage"
              :page-size="pageSize"
              layout="prev, pager, next"
              :total="TotalResult">
            </el-pagination>
          </div>
      </div>
      <div class="bgh1">
        <el-dialog :title="DetailTitle" :visible.sync="DetailDialogVisible">
          <el-table
            :data="DiaTableData"
            style="width: 100%">
            <el-table-column
              label="照片">
              <template slot-scope="scope">
                <div v-if="scope.row.photo">
                  <el-popover placement="right" title="" trigger="hover">
                    <img :src="scope.row.photo"  style="max-width:700px; max-height:700px;"/>
                    <img slot="reference" :src="scope.row.photo" :alt="scope.row.photo"  width="50" height="50">
                  </el-popover>
                </div>
              </template>
            </el-table-column>
            <el-table-column
              prop="xb"
              label="性别">
            </el-table-column>
            <el-table-column
              prop="csrq"
              label="出生日期">
            </el-table-column>
            <el-table-column
              prop="gjdqmc"
              label="国家地区">
            </el-table-column>                                    
            <el-table-column
              prop="zjhm"
              label="证件号码">
              <div slot-scope="scope">
                <span
                  style="color:yellow; cursor:pointer"
                  @click="gotos(scope.row.zjhm,scope.row.gjdq)">{{scope.row.zjhm}}</span>
              </div>
            </el-table-column>
          </el-table>
          <div class="middle-foot mt-10">
            <div class="page-msg">
              <div class="crrcolor">共{{TotalResult}}条记录</div>
            </div>
            <el-pagination
              background
              @current-change="DetailhandleCurrentChange"
              :current-page.sync ="DetailCurrentPage"
              :page-size="DetailpageSize"
              layout="prev, pager, next"
              :total="DetailTotalResult">
            </el-pagination>
          </div>
          <div slot="footer">
            <img src="../../../../assets/img/qx.png" border="0" @click="DetailDialogVisible = false" style="cursor:pointer" >
          </div>
          <div class="arrow_line" style="left:0px;top:0px; border-bottom-width:0;border-right-width:0"></div>
          <div class="arrow_line" style="right:0px;top:0px; border-bottom-width:0;border-left-width:0"></div>
          <div class="arrow_line" style="left:0px;bottom:0px; border-top-width:0;border-right-width:0"></div>
          <div class="arrow_line" style="right:0px;bottom:0px; border-top-width:0;border-left-width:0"></div>
        </el-dialog>
      </div>
   </div>
</template>
<script scoped>
export default {
  data() {
    return {
      CurrentPage: 1,
      pageSize: 5,
      TotalResult: 0,
      items:[],
      dwitems:[],
      type:'',
      content:'',
      info:{lz:0,cz:0,qz:0,ajxx:0,crj:0},
      datatype:'',
      check:7,
      tipShow:false,
      cardData:[],
      dwData:[
        {
          mc:'单位名称',
          dm:'dwzwmc'
        },
        {
          mc:'单位地址',
          dm:'dwdz'
        },
        {
          mc:'所属分局',
          dm:'ssfjmc'
        },
        {
          mc:'所属派出所',
          dm:'sspcsmc'
        },
        {
          mc:'所属责任区',
          dm:'sszrqmc',
          col:24
        },
      ],
      ajData:[
        {
          mc:'案件名称',
          dm:'ajmc'
        },
        {
          mc:'案件编号',
          dm:'asjbh'
        },
        {
          mc:'案件类别',
          dm:'asjlxmc'
        },
        {
          mc:'受理单位',
          dm:'sldwmc'
        },
        {
          mc:'受理时间',
          dm:'slsj',
          col:24
        },
      ],
      dzData:[
        {
          mc:'详细地址',
          dm:'xxdz'
        },
        {
          mc:'所属分局',
          dm:'ssfjmc'
        },
        {
          mc:'所属派出所',
          dm:'sspcsmc'
        },
        {
          mc:'所属责任区',
          dm:'sszrqmc'
        },
      ],
      DetailTitle:'详情',
      dialogType:'',
      DetailDialogVisible:false,
      DiaTableData:[],
      DetailPd:{},
      DetailUrl:'',
      DetailCurrentPage:1,
      DetailpageSize:5,
      DetailTotalResult:0,
    }
  },
    activated(){
      this.type=this.$route.query.stype;//查询类
      this.content=this.$route.query.zjhmes;//查询内容
      this.getList(this.CurrentPage, this.pageSize,this.$store.state.queryType);
    },
  mounted() {
    // this.getList(this.CurrentPage, this.pageSize);
    this.type=this.$route.query.stype;//查询类型
    if(this.type == 'ssdw'){
        this.cardData = this.dwData
      }else if(this.type == 'aj'){
        this.cardData = this.ajData
      }else if(this.type == 'addr'){
        this.cardData = this.dzData
      }
  },
  methods: {
    pageSizeChange(val) {
      this.getList(this.CurrentPage, val,this.datatype);
    },
    handleCurrentChange(val) {
      this.getList(val, this.pageSize,this.datatype);
    },
    DetailhandleCurrentChange(val){
      this.DetailCurrentPage = val
      this.getListRYXX(this.DetailCurrentPage,this.DetailpageSize,this.DetailUrl,this.DetailPd)
    },
    gotos(zjhms, gjdq) {
      let routeData = this.$router.resolve({
        path: "/Home/RYHX_NX",
        query: { zjhm: zjhms, gjdq: gjdq }
      });
      window.open(routeData.href, "_blank");
    },
    getListRYXX(currentPage,showCount,url,pd){
      pd.page=currentPage;
      pd.pageSize=showCount;
      pd.userName=this.$store.state.uname;
      pd.userCode=this.$store.state.uid;
      pd.token=this.$store.state.token;
      this.$api.post(this.Global.aport6 + url,pd,r=>{
        if(r.success){
          this.DiaTableData = r.respondResult.respondData
          this.DetailTotalResult = r.respondResult.totalSize
        }
      })
    },
    getRYXX(data){
      if(this.type == 'ssdw'){
        this.DetailTitle="单位人员信息详情";
        this.dialogType="dw";
        this.DetailUrl="/api/es/search/searchSsdw";
        this.DetailPd={
          paramMap:{
            dwdz:data.dwdz,
            dzzwmc:data.dzzwmc
          }
        }
      }else if(this.type == 'aj'){
        this.DetailTitle="案件人员信息详情";
        this.dialogType="aj";
        this.DetailUrl="/api/es/search/searchAj";
        this.DetailPd={
          paramMap:{
            dtid:data.dtid,
          }
        }
      }else if(this.type == 'addr'){
        this.DetailTitle="地址人员信息详情";
        this.dialogType="dz";
        this.DetailUrl="/api/es/search/searchAddr";
        this.DetailPd={
          paramMap:{
            xxdz:data.xxdz,
          }
        }
      }
      this.DetailDialogVisible=true;
      this.getListRYXX(this.DetailCurrentPage,this.DetailpageSize,this.DetailUrl,this.DetailPd)
    },
    typeChange(){
      if(this.type == 'ssdw'){
        this.cardData = this.dwData
      }else if(this.type == 'aj'){
        this.cardData = this.ajData
      }else if(this.type == 'addr'){
        this.cardData = this.dzData
      }
      this.CurrentPage=1;
      this.getList(this.CurrentPage,this.pageSize)
    },
    //点击 各类型 查询
    getListType(currentPage,showCount,type){
      if(type=='lz'){this.check=0}
      if(type=='cz'){this.check=1}
      if(type=='qz'){this.check=2}
      if(type=='ajxx'){this.check=3}
      if(type=='crj'){this.check=4}
      let p={
        "keywords":this.content,
        "type":type,
        "pageSize":showCount,
        "page":currentPage,
        "token":this.$store.state.token,
        "userCode":this.$store.state.uid,
        "userName":this.$store.state.uname
      };
      this.$api.post(this.Global.aport6+"/api/es/search/searchCount",p,r=>{
        if(r.success){
          (r.respondResult==null||r.respondResult=={})?this.info={lz:0,cz:0,qz:0,ajxx:0,crj:0}:this.info=r.respondResult;//各类型数据条数
        }
      })
    },
    getList(currentPage,showCount,type){
      this.check=7;
      this.tipShow=false;
      if(this.content!=this.$route.query.zjhmes || this.type!=this.$route.query.stype){//全文检索数据被人员画像查询覆盖
        this.$router.push({name:'QWJS',query:{zjhmes:this.content,stype:this.type}});
      }
      this.items=[];
      this.TotalResult=0;
      let p={
        "keywords":this.content,
        
        "pageSize":showCount,
        "page":currentPage,
        "token":this.$store.state.token,
        "userCode":this.$store.state.uid,
        "userName":this.$store.state.uname
      };
      this.getListType(currentPage,showCount,type);//得到条数
      if(type!="" && type!=undefined){//如果点击条数查询相应数据
         this.datatype=type;
         p.type=type
      }else {//点击查询
        p.type=this.type
        this.datatype="";
        if(this.content==undefined || this.content==""){
          this.$message.error("请输入查询内容!");return ;
        }
        if(this.type==undefined || this.type==""){
          this.$message.error("请选择类型!");return ;
        }
       }
       this.$api.post(this.Global.aport6+"/api/es/search/searchAll",p,r=>{//查询所有数据
          if(r.success){
            (r.respondResult.respondData==null||r.respondResult.respondData.length==0)?this.items=[]:this.items=r.respondResult.respondData;//数据
            this.items.length==0?this.tipShow=true:this.tipShow=false;
            this.TotalResult=r.respondResult.totalSize;//数据条数
          }else{
            this.info={lz:0,cz:0,qz:0,ajxx:0,crj:0}
          }
        })
      this.$store.commit('getQueryType',this.datatype);
    },
  },
}
</script>
<style scoped>
.qwjs{background: #ffffff; min-height: 700px; margin: 10px;}
.qwjs .top {
  width: 100%;
  height: 40px;
  display: flex;
}
.qwjs .inputs{
  width: 480px;
}
.qwjs .main{
  width: 95%;  padding-left: 30px; font-size:13px; margin-top: 20px; padding-bottom: 20px;
}
.qwjs .main .list{
  width: 99%;margin-top: 10px;
}
.qwjs .main .list span{margin-left: 10px;}
.shover{cursor:pointer;}
.shover:hover{font-size: 14px;font-weight: bold;}
.navinfo{color: blue;margin-top: 10px; font-size: 14px;}
.navinfo span{ padding-left: 20px;cursor: pointer; }
.navinfo span :hover{color: #333}
.navinfo span b{color: red}
</style>
<style>
.qwjs  .el-input-group__prepend {
    background-color: #fff;
  }
.box-card .el-card__body{
  padding: 5px 20px!important;
}
</style>
