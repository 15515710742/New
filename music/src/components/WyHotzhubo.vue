<template>
    <div class="hotzhubo">
      <!-- 热门主播 -->
      <h3>热门主播</h3>
      <ul>
        <li v-for="(item) in list">
          <a href="#"><img :src="item.img"></a>
          <div class="info2">
            <p>
              <a href="#" class="text">{{item.singer}}</a>
              <sup class="u-icn"></sup>
            </p>
            <p class="f-thide text">{{item.jianjie}}</p>
          </div>
        </li>
      </ul>
    </div>
  </template>
  
  <script>  
  export default {
    name: 'WyHotzhubo',
    data:function(){
      return{
        list:[
          {id:1,img:"http://127.0.0.1:7200/image/login/zhubo/1407374893913311.jpg",singer:"陈立",jianjie:"心理学家、美食家陈立教授"},
          {id:1,img:"http://127.0.0.1:7200/image/login/zhubo/7942872001461517.jpg",singer:"DJ艳秋",jianjie:"著名音乐节目主持人"},
          {id:1,img:"http://127.0.0.1:7200/image/login/zhubo/3427177769086282.jpg",singer:"国家大剧院古典音乐频道",jianjie:"国家大剧院古典音乐官方"},
          {id:1,img:"http://127.0.0.1:7200/image/login/zhubo/3130309604335651.jpg",singer:"谢谢收听",jianjie:"南京电台主持人王馨"},
          {id:1,img:"http://127.0.0.1:7200/image/login/zhubo/3440371884651965.jpg",singer:"DJ晓苏",jianjie:"独立DJ，CRI环球旅游广播特邀DJ"},
        ]
      }
    },
    components: {
      
    }
  }
  </script>
  <style scoped>
    div.hotzhubo{
      padding-top:20px;
      font-size: 12px; 
      background: white
    }
    div.hotzhubo h3{
      height: 23px;
      margin: 0 15px;
      border-bottom: 1px solid #ccc;
      color: #333;
    }
    div.hotzhubo ul{
      margin: 20px 0 0 20px;
    }
    div.hotzhubo ul li{
      width: 270px;
      height: 50px;
    }
    div.hotzhubo ul li a{
      float: left;
      width: 40px;
      margin-right: 10px;
    }
    div.hotzhubo ul li div.info2{
      float: left;
      width: 207px;
      line-height: 21px;
      font-size: 12px;
    }
    div.hotzhubo ul li div.info2 p{
      width: 100%;
    }
    div.hotzhubo ul li div.info2 p a{
      display: inline-block;
      zoom: 1;
      width: 180px;
      vertical-align: middle;
    }
    div.hotzhubo ul li div.info2 p sup{
      margin-top: -1px;
      width: 11px;
      height: 13px;
      background-position: 0 1px;
      font-size: 100%;
      font-style: normal;
    }
    div.hotzhubo ul li div.info2 p.f-thide{
      width: 100%;
      color: #666;
    }
  </style>