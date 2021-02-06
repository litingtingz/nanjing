export function formatDate(date, fmt) {

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

export function format (date,format) {
     var args = {
         "M+": date.getMonth() + 1,
         "d+": date.getDate(),
         "h+": date.getHours(),
         "m+": date.getMinutes(),
         "s+": date.getSeconds(),
         "q+": Math.floor((date.getMonth() + 3) / 3),  //quarter
         "S": date.getMilliseconds()
     };
     if (/(y+)/.test(format))
         format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
     for (var i in args) {
         var n = args[i];
         if (new RegExp("(" + i + ")").test(format))
             format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? n : ("00" + n).substr(("" + n).length));
     }
     return format;
 };

function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}

function timestampToTime(timestamp,type) {//type为0，精确到分；为1，精确到秒
  let timeS='';
  let year = timestamp.slice(0,4);
  let month = timestamp.slice(4,6);
  let day = timestamp.slice(6,8);
  let hour = timestamp.slice(8,10);
  let min = timestamp.slice(10,12);
  if(type==0){
    timeS = year +'/'+month +'/'+day+' '+hour+':'+min;
  }else if(type == 1){
    let seconed = timestamp.slice(12,14);
    timeS = year +'/'+month +'/'+day+' '+hour+':'+min+':'+seconed;
  }
  return  timeS;
}
export function dayGap(start,end,type){//相差天数  type =1 到分  type=0 秒

  let startT = new Date(timestampToTime(start,type)).getTime();
  let endT = new Date(timestampToTime(end,type)).getTime();
  let day = parseInt((endT-startT)/(1000 * 60 * 60 * 24));
  return day;
}
export function tabclick(e){
  console.log("###########",e)
}

//获取服务器时间
export   function getServerDate(){
        var xhr = null;
        if(window.XMLHttpRequest){
          xhr = new window.XMLHttpRequest();
        }else{ // ie
          xhr = new ActiveObject("Microsoft")
        }
        xhr.open("GET","/",false)//false不可变
        xhr.send(null);
        var date = xhr.getResponseHeader("Date");
        console.log(formatDate(new Date(date),"yyyy-MM-dd"));
        return formatDate(new Date(date),"yyyy-MM-dd");
}

//压缩图片
export function compressImg(file){
  // var src;
  // var files;
  var fileSize = parseFloat(parseInt(file['size'])/1024/1024).toFixed(2);
  var read = new FileReader();
  read.readAsDataURL(file);
  return new Promise(function(resolve){
   read.onload = function (e) {
     var img = new Image();
     img.src = e.target.result;
     img.onload = function(){
       //默认按比例压缩
       var w = this.width,
         h = this.height;
       //生成canvas
       var canvas = document.createElement('canvas');
       var ctx = canvas.getContext('2d');
       var base64;
       // 创建属性节点
       canvas.setAttribute("width", w);
       canvas.setAttribute("height", h);
       ctx.drawImage(this, 0, 0, w, h);
       if(fileSize<1){
         //如果图片小于一兆 那么不执行压缩操作
         base64 = canvas.toDataURL(file['type'], 1);
       }else if(fileSize>1&&fileSize<2){
         //如果图片大于1M并且小于2M 那么压缩0.5
         base64 = canvas.toDataURL(file['type'], 0.5);
       }else{
         //如果图片超过2m 那么压缩0.2
         base64 = canvas.toDataURL(file['type'], 0.2);
       }
      //  // 回调函数返回file的值（将base64编码转成file）
      //  files = dataURLtoFile(base64); //如果后台接收类型为base64的话这一步可以省略
       resolve(base64)
     };
   };
  })
}
