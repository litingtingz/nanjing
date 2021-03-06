import Vue from 'vue'
import Vuex from 'vuex'
import router from '../../router'

import global_ from '../../Global.js'
import api from '../../api/index.js';
import {
  ToArray,sortByKey
} from './ToArray.js'

Vue.use(Vuex);
var store = new Vuex.Store({
  state: {
    token: localStorage.getItem('TOKEN') || '',
    wtoken: localStorage.getItem('WTOKEN') || '',
    serverip: localStorage.getItem('SERVERIP') || '',
    uname: localStorage.getItem('UNAME') || '',
    uid: localStorage.getItem('UID') || '',
    orgname: localStorage.getItem('ORGNAME') || '',
    orgid: localStorage.getItem('ORGID') || '',
    type: localStorage.getItem('Type') || '',
    jb: localStorage.getItem('JB') || '',
    juState:localStorage.getItem('juState') || '',
    imgHeightOne:localStorage.getItem('imgHeightOne') || 0,
    imgHeightTwo:localStorage.getItem('imgHeightTwo') || 0,
    imgHeightThr:localStorage.getItem('imgHeightThr') || 0,
    imgHeightFor:localStorage.getItem('imgHeightFor') || 0,
    pcsToju:localStorage.getItem('pcsToju') || '',
    zrqTopcs:localStorage.getItem('zrqTopcs') || '',
    key: {},
    key2:'',
    ssdw: [],
    gjdq: [],
    zjzl: [],
    qzzl: [],
    rjkn: [],
    rjsy: [],
    qfjg: [],
    pcs: [],
    jzlx: [],
    zsxz: [],
    jzzt: [],
    xzqh: [],
    jtgx: [],
    sflx: [],
    xb: [],
    rjqzzl: [],
    dwlb:[],
    dwxz:[],
    zsbg:[],
    tlyxq:[],
    sf:[],
    clzt:[],
    sjly:[],
    rzfs:[],
    zflx:[],
    jzztlx:[],
    xxdm:[],
    erxxdm:[],
    shzt:[],
    tbry:[],
    ymsqzt:[],
    ymqzzl:[],
    ymzl:[],
    lgyj:[],
    gljb:[],
    ymzt:[],
    sldw:[],
    bzlb:[],
    sqsy:[],
    rydylb:[],
    sqqzzl:[],
    jzztcz:[],
    hyzt:[],
    zjxy:[],
    tabList:[],
    currentKey:null,

    sqlb:[],
    swdwclzt:[],
    xslb:[],
    fjclzt:[],
    ajlb:[],
    cqlb:[],
    ajxz:[],
    yjcl1:[],
    yjcl2:[],
    yjcl3:[],
    clzt1:[],
    zy:[],
    hjd:[],
    crjbs:[],
    jtfs:[],
    wlg:[],
    mz:[],
    lnzt:[],
    queryType:'',
    tokenT:localStorage.getItem('tokenT') || '',
    cusCountry:[],
    backstatus: [],//数据状态
  },
  mutations: {
    getOne(state,data){
      localStorage.setItem('imgHeightOne', data);
      state.imgHeightOne = data;
    },
    getTwo(state,data){
      localStorage.setItem('imgHeightTwo', data);
      state.imgHeightTwo = data;
    },
    getThr(state,data){
      localStorage.setItem('imgHeightThr', data);
      state.imgHeightThr = data;
    },
    getFor(state,data){
      localStorage.setItem('imgHeightFor', data);
      state.imgHeightFor = data;
    },
    getJuS(state,data){
      localStorage.setItem('juState', data);
      state.juState = data;
    },
    PcsToJu(state,data){
      localStorage.setItem('pcsToju',data);
      state.pcsToju = data;
    },
    ZrqToPcs(state,data){
      localStorage.setItem('zrqTopcs',data);
      state.zrqTopcs = data;
    },
    getActiveTab(state,data){
      state.currentKey = data;
    },
    getQueryType(state,data){
      state.queryType = data;
    },
    getTabList(state,data){
      // localStorage.setItem('tabList', data)
      state.tabList = data;
    },
    getToken(state, data) {
      localStorage.setItem('TOKEN', data)
      state.token = data;
    },
    getWtoken(state, data) {
      localStorage.setItem('WTOKEN', data)
      state.wtoken = data;
    },
    getServerip(state, data) {
      localStorage.setItem('SERVERIP', data)
      state.serverip = data;
    },
    getUname(state, data) {
      localStorage.setItem('UNAME', data)
      state.uname = data;
    },
    getUid(state, data) {
      // state.uid = data;
      // window.localStorage.setItem('UID', data)
      localStorage.setItem('UID', data)
      state.uid = data;
    },
    getOrgname(state, data) {
      localStorage.setItem('ORGNAME', data)
      state.orgname = data;
    },
    getOrgid(state, data) {
      localStorage.setItem('ORGID', data)
      state.orgid = data;
    },
    getType(state, data) {
      localStorage.setItem('Type', data)
      state.type = data;
    },
    getJb(state, data) {
      localStorage.setItem('JB', data)
      state.jb = data;
    },
    getKey(state, data) {
      // localStorage.setItem('Key', data)
      state.key = data;
      if(data.id==0){
        state.key2=data.name!== undefined? data.name +new Date(): data.name +new Date();
      }
    },
    getHyzt(state, data){
      state.hyzt = data;
    },
    getZjxy(state, data){
      state.zjxy = data;
    },
    getSsdw(state, data) {
      state.ssdw = data;
    },
    getGjdq(state, data) {
      state.gjdq = data;
    },
    getZjzl(state, data) {
      state.zjzl = data;
    },
    getQzzl(state, data) {
      state.qzzl = data;
    },
    getRjkn(state, data) {
      state.rjkn = data;
    },
    getRjsy(state, data) {
      state.rjsy = data;
    },
    getQfjg(state, data) {
      state.qfjg = data;
    },
    getPcs(state, data) {
      state.pcs = data;
    },
    getJzlx(state, data) {
      state.jzlx = data;
    },
    getZsxz(state, data) {
      state.zsxz = data;
    },
    getJzzt(state, data) {
      state.jzzt = data;
    },
    getXzqh(state, data) {
      state.xzqh = data;
    },
    getJtgx(state, data) {
      state.jtgx = data;
    },
    getSflx(state, data) {
      state.sflx = data;
    },
    getXB(state, data) {
      state.xb = data;
    },
    getRjqzzl(state, data) {
      state.rjqzzl = data;
    },
    getDwlb(state, data) {
      state.dwlb = data;
    },
    getDwxz(state, data) {
      state.dwxz = data;
    },
    getZsbg(state, data) {
      state.zsbg = data;
    },
    getTlyxq(state, data) {
      state.tlyxq = data;
    },
    getSf(state, data) {
      state.sf = data;
    },
    getClzt(state,data){
      state.clzt=data;
    },
    getSjly(state,data){
      state.sjly=data;
    },
    getRzfs(state,data){
      state.rzfs=data;
    },
    getZflx(state,data){
      state.zflx=data;
    },
    getJzztlx(state,data){
      state.jzztlx=data;
    },
    getXxdm(state,data){
      state.xxdm=data;
    },
    geterXxdm(state,data){
      state.erxxdm=data;
    },
    getShzt(state,data){
      state.shzt=data;
    },
    getTbry(state,data){
      state.tbry=data;
    },
    getYmsqzt(state,data){
      state.ymsqzt=data;
    },
    getYmqzzl(state,data){
      state.ymqzzl=data;
    },
    getLgyj(state,data){
      state.lgyj=data;
    },
    getGljb(state,data){
      state.gljb=data;
    },
    getYmzt(state,data){
      state.ymzt=data;
    },
    getYmzl(state,data){
      state.ymzl=data;
    },
    getSldw(state,data){
      state.sldw=data;
    },
    getBzlb(state,data){
      state.bzlb=data;
    },
    getSqsy(state,data){
      state.sqsy=data;
    },
    getRydylb(state,data){
      state.rydylb=data;
    },
    getSqqzzl(state,data){
      state.sqqzzl=data;
    },
    getJzztcz(state,data){
      state.jzztcz=data;
    },
    getSqlb(state,data){
      state.sqlb=data;
    },
    getSwcl(state,data){
      state.swdwclzt=data;
    },
    getXslb(state,data){
      state.xslb=data;
    },
    getFjclzt(state,data){
      state.fjclzt=data;
    },
    getAjlb(state,data){
      state.ajlb=data;
    },
    getCqlb(state,data){
      state.cqlb=data;
    },
    getAjxz(state,data){
      state.ajxz=data;
    },
    getSszrq(state,data){
      state.sszrq=data;
    },
    getYjcl1(state,data){
      state.yjcl1=data;
    },
    getYjcl2(state,data){
      state.yjcl2=data;
    },
    getYjcl3(state,data){
      state.yjcl3=data;
    },
    getClzt1(state,data){
      state.clzt1=data;
    },
    getZy(state,data){
      state.zy=data;
    },
    getHjd(state,data){
      state.hjd=data;
    },
    getCrjbs(state,data){
      state.crjbs=data;
    },
    getJtfs(state,data){
      state.jtfs=data;
    },
    getWlg(state,data){
      state.wlg=data;
    },
    getMz(state,data){
      state.mz=data;
    },
    getLnzt(state,data){
      state.lnzt=data;
    },
    getTokenT(state,data){
      state.tokenT=data;
      localStorage.setItem('tokenT',data)
    },
    getCusCon(state,data){
      state.cusCountry=data;
    },
    getBackstatus(state, data) {
      state.backstatus = data;
    },
  },
  actions: {
    getZjxy(context){
      api.get(global_.aport1 + global_.zjxy, null,
        r => {
          context.commit('getZjxy', ToArray(r.data))
        })
    },
    getHyzt(context){
      api.get(global_.aport1 + global_.hyzt, null,
        r => {
          context.commit('getHyzt', ToArray(r.data))
        })
    },
    getJzztcz(context){
      api.get(global_.aport1 + global_.jzztcz, null,
        r => {
          context.commit('getJzztcz', ToArray(r.data))
        })
    },
    getSldw(context){
      api.get(global_.aport1 + global_.sldw, null,
        r => {
          context.commit('getSldw', ToArray(r.data))
        })
    },
    getYmzt(context){
      api.get(global_.aport1 + global_.ymzt, null,
        r => {
          context.commit('getYmzt', ToArray(r.data))
        })
    },
     getLgyj(context) {
      api.get(global_.aport1 + global_.lgyj, null,
        r => {
          context.commit('getLgyj', ToArray(r.data))
        })
    },
    getGljb(context) {
      api.get(global_.aport1 + global_.gljb, null,
        r => {
          context.commit('getGljb', ToArray(r.data))
        })
    },
    getSsdw(context) {
      var formData = new FormData();
      formData.append("org", global_.org);
      formData.append("token",store.state.token);
      let p = formData;
      api.post(global_.aport1 + global_.ssdw, p,
        r => {
          context.commit('getSsdw', r.data)
        })
    },
    getGjdq(context) {
      api.get(global_.aport1 + global_.gjdq, null,
        r => {
          context.commit('getGjdq', ToArray(r.data))
        })
    },
    getZjzl(context) {
      api.get(global_.aport1 + global_.zjzl, null,
        r => {
          context.commit('getZjzl', ToArray(r.data))
        })
    },
    getQzzl(context) {
      api.get(global_.aport1 + global_.qzzl, null,
        r => {
          context.commit('getQzzl', ToArray(r.data))
        })
    },
    getRjkn(context) {
      api.get(global_.aport1 + global_.rjkn, null,
        r => {
          context.commit('getRjkn', ToArray(r.data))
        })
    },
    getRjsy(context) {
      api.get(global_.aport1 + global_.rjsy, null,
        r => {
          context.commit('getRjsy', ToArray(r.data))
        })
    },
    getQfjg(context) {
      api.get(global_.aport1 + global_.qfjg, null,
        r => {
          context.commit('getQfjg', ToArray(r.data))
        })
    },
    getPcs(context) {
      api.get(global_.aport1 + global_.pcs, null,
        r => {
          context.commit('getPcs', ToArray(r.data))
        })
    },
    getJzlx(context) {
      api.get(global_.aport1 + global_.jzlx, null,
        r => {
          context.commit('getJzlx', ToArray(r.data))
        })
    },
    getZsxz(context) {
      api.get(global_.aport1 + global_.zsxz, null,
        r => {
          context.commit('getZsxz', ToArray(r.data))
        })
    },
    getJzzt(context) {
      api.get(global_.aport1 + global_.jzzt, null,
        r => {
          context.commit('getJzzt', ToArray(r.data))
        })
    },
    getXzqh(context) {
      api.get(global_.aport1 + global_.xzqh, null,
        r => {
          context.commit('getXzqh', ToArray(r.data))
        })
    },
    getJtgx(context) {
      api.get(global_.aport1 + global_.jtgx, null,
        r => {
          context.commit('getJtgx', ToArray(r.data))
        })
    },
    getSflx(context) {
      api.get(global_.aport1 + global_.sflx, null,
        r => {
          context.commit('getSflx', ToArray(r.data))
        })
    },
    getXB(context) {
      api.get(global_.aport1 + global_.xb, null,
        r => {
          context.commit('getXB', ToArray(r.data))
        })
    },
    getRjqzzl(context) {
      api.get(global_.aport1 + global_.rjqzzl, null,
        r => {
          context.commit('getRjqzzl', ToArray(r.data))
        })
    },
    getDwlb(context) {
      api.get(global_.aport1 + global_.dwlb, null,
        r => {
          context.commit('getDwlb', ToArray(r.data))
        })
    },
    getDwxz(context) {
      api.get(global_.aport1 + global_.dwxz, null,
        r => {
          context.commit('getDwxz', ToArray(r.data))
        })
    },
    getZsbg(context) {
      api.get(global_.aport1 + global_.zsbg, null,
        r => {
          context.commit('getZsbg', ToArray(r.data))
        })
    },
    getTlyxq(context) {
      api.get(global_.aport1 + global_.tlyxq, null,
        r => {
          context.commit('getTlyxq', ToArray(r.data))
        })
    },
    getSf(context) {
      api.get(global_.aport1 + global_.sf, null,
        r => {
          context.commit('getSf', ToArray(r.data))
        })
    },
    getClzt(context){
      api.get(global_.aport1 + global_.clzt, null,
        r => {
          context.commit('getClzt', ToArray(r.data))
        })
    },
    getSjly(context){
      api.get(global_.aport1 + global_.sjly, null,
        r => {
          context.commit('getSjly', ToArray(r.data))
        })
    },
    getRzfs(context){
      api.get(global_.aport1 + global_.rzfs, null,
        r => {
          context.commit('getRzfs', ToArray(r.data))
        })
    },
    getZflx(context){
      api.get(global_.aport1 + global_.zflx, null,
        r => {
          context.commit('getZflx', ToArray(r.data))
        })
    },
    getJzztlx(context){
      api.get(global_.aport1 + global_.jzztlx, null,
        r => {
          context.commit('getJzztlx', ToArray(r.data))
        })
    },
    getXxdm(context){
      api.get(global_.aport1 + global_.xxdm, null,
        r => {
          context.commit('getXxdm', ToArray(r.data))
        })
    },
    geterXxdm(context){
      api.get(global_.aport1 + global_.erxxdm, null,
        r => {
          context.commit('geterXxdm', ToArray(r.data))
        })
    },
    getShzt(context){
      api.get(global_.aport1 + global_.shzt, null,
        r => {
          context.commit('getShzt', ToArray(r.data))
        })
    },
    getTbry(context){
      api.get(global_.aport1 + global_.tbry, null,
        r => {
          context.commit('getTbry', ToArray(r.data))
        })
    },
    getYmsqzt(context){
      api.get(global_.aport1 + global_.ymsqzt, null,
        r => {
          context.commit('getYmsqzt', ToArray(r.data))
        })
    },
    getYmqzzl(context){
      api.get(global_.aport1 + global_.ymqzzl, null,
        r => {
          context.commit('getYmqzzl', ToArray(r.data))
        })
    },
    getYmzl(context){
      api.get(global_.aport1 + global_.ymzl, null,
        r => {
          context.commit('getYmzl', ToArray(r.data))
        })
    },
    getBzlb(context){
      api.get(global_.aport1 + global_.bzlb, null,
        r => {
          context.commit('getBzlb', ToArray(r.data))
        })
    },
    getSqsy(context){
      api.get(global_.aport1 + global_.sqsy, null,
        r => {
          context.commit('getSqsy', ToArray(r.data))
        })
    },
    getRydylb(context){
      api.get(global_.aport1 + global_.rydylb, null,
        r => {
          context.commit('getRydylb', ToArray(r.data))
        })
    },
    getSqqzzl(context){
      api.get(global_.aport1 + global_.sqqzzl, null,
        r => {
          context.commit('getSqqzzl', ToArray(r.data))
        })
    },
    getSqlb(context){
      api.get(global_.aport1 + global_.sqlb, null,
        r => {
          context.commit('getSqlb', ToArray(r.data))
        })
    },
    getSwcl(context){
      api.get(global_.aport1 + global_.swdwclzt,null,
        r =>{
          context.commit('getSwcl',ToArray(r.data))
        })
    },
    getXslb(context){
      api.get(global_.aport1 + global_.xslb,null,
        r =>{
          context.commit('getXslb',ToArray(r.data))
        })
    },
    getFjclzt(context){
      api.get(global_.aport1+global_.fjclzt,null,
       r =>{
         context.commit('getFjclzt',ToArray(r.data))
       })
    },
    getAjlb(context){
      api.get(global_.aport1+global_.ajlb,null,
       r =>{
         context.commit('getAjlb',ToArray(r.data))
       })
    },
    getCqlb(context){
      api.get(global_.aport1+global_.cqlb,null,
       r =>{
         context.commit('getCqlb',ToArray(r.data))
       })
    },
    getAjxz(context){
      api.get(global_.aport1+global_.ajxz,null,
       r =>{
         context.commit('getAjxz',ToArray(r.data))
       })
    },
    getSszrq(context){
      api.get(global_.aport1+global_.sszrq,null,
       r =>{
         context.commit('getSszrq',ToArray(r.data))
       })
    },
    getYjcl1(context){
      api.get(global_.aport1+global_.yjcl1,null,
       r =>{
         context.commit('getYjcl1',ToArray(r.data))
       })
    },
    getYjcl2(context){
      api.get(global_.aport1+global_.yjcl2,null,
       r =>{
         context.commit('getYjcl2',ToArray(r.data))
       })
    },
    getYjcl3(context){
      api.get(global_.aport1+global_.yjcl3,null,
       r =>{
         context.commit('getYjcl3',ToArray(r.data))
       })
    },
    getClzt1(context){
      api.get(global_.aport1+global_.clzt1,null,
       r =>{
         context.commit('getClzt1',ToArray(r.data))
       })
    },
    getZy(context){
      api.get(global_.aport1+global_.zy,null,
       r =>{
         context.commit('getZy',ToArray(r.data))
       })
    },
    getHjd(context){
      api.get(global_.aport1+global_.hjd,null,
       r =>{
         context.commit('getHjd',ToArray(r.data))
       })
    },
    getCrjbs(context){
      api.get(global_.aport1+global_.crjbs,null,
      r =>{
        context.commit('getCrjbs',ToArray(r.data))
      })
    },
    getJtfs(context){
      api.get(global_.aport1+global_.jtfs,null,
      r =>{
        context.commit('getJtfs',ToArray(r.data))
      })
    },
    getWlg(context){
      api.get(global_.aport1+global_.wlg,null,
      r =>{
        context.commit('getWlg',ToArray(r.data))
      })
    },
    getMz(context){
      api.get(global_.aport1+global_.mz,null,
      r =>{
        context.commit('getMz',ToArray(r.data))
      })
    },
    getLnzt(context){
      api.get(global_.aport1+global_.lnzt,null,
       r =>{
         context.commit('getLnzt',ToArray(r.data))
       })
    },
    getTokenT(context){
      api.post(global_.aport3+'/swdw/getSwdwXtUserToken',{token:store.state.token},
       r =>{
         if(r.success){
           context.commit('getTokenT',r.data)
         }
       })
    },
    aGetCusCon(context, payload){
      return new Promise((resolve) => {
        api.post(global_.aport5 + '/country/getCustomDmMc', {}, r => {
          context.commit('getCusCon', sortByKey(r.data,'dm'))
          resolve(payload)
        })
      })
    },
    aGetBackstatus(context, payload) {
      return new Promise((resolve) => {
        api.get(global_.aport1 + global_.backstatus,null, r => {
          context.commit('getBackstatus',ToArray(r.data))
          resolve(payload)
        })
      })
    },
  }
});
export default store;
