<template>
    <div class="n-singer">
      <!-- 入驻歌手 -->
      <h3 class="v-hd3">
        <span class="f-fl">入驻歌手</span>
        <a href="#" class="more s-fc3">查看全部 ></a>
      </h3>
      <!-- 循环几个音乐 -->
      <ul class="n-enter" id="singer-list">
        <li v-for="(item) in list">
          <a href="#">
            <div class="left">
              <img :src="item.img">
            </div>
            <div class="info">
              <h4>{{item.singer}}</h4>
              <p class="text" style="width: 120px;">{{item.jianjie}}</p>
            </div>
          </a>
        </li>
      </ul>
      <!-- 按钮 -->
      <button class="yinyueren">申请成为网易音乐人</button>
    </div>
  </template>
  
  <script>  
  export default {
    name: 'WyMysonger',
    data:function(){
      return{
        list:[
          {id:1,img:"http://127.0.0.1:7200/image/login/songer/5931865232210340.jpg",singer:"张惠妹aMEI",jianjie:"台湾歌手张惠妹"},
          {id:1,img:"http://127.0.0.1:7200/image/login/songer/3302932937408956.jpg",singer:"Fine乐团",jianjie:"独立音乐人"},
          {id:1,img:"http://127.0.0.1:7200/image/login/songer/19027048718765608.jpg",singer:"萬曉利",jianjie:"民谣歌手、中国现代民谣的代表人物之一"},
          {id:1,img:"http://127.0.0.1:7200/image/login/songer/7943971513291094.jpg",singer:"音乐人赵雷",jianjie:"民谣歌手"},
          {id:1,img:"http://127.0.0.1:7200/image/login/songer/109951162895674268.jpg",singer:"王三溥",jianjie:"音乐人"},
        ]
      }
    },
    components: {
      
    }
  }
  </script>
  <style >
    div.n-singer{
      padding-top:15px; 
      font-size: 12px;
      background: white
    }
    div.n-singer h3.v-hd3{
      height: 23px;
      margin: 0 15px;
      border-bottom: 1px solid #ccc;
      color: #333;
    }
    div.n-singer h3.v-hd3 a.more{
      float: left;
      float: right;
      font-weight: normal;
    }
    div.n-singer h3.v-hd3 a.s-fc3{
      color: #666;
    }
    #singer-list{
      margin: 6px 0 14px 15px;
    }
    #singer-list li{
      margin-top: 14px;
      width: 270px;
      height: 62px;
      background: #fafafa;
    }
    #singer-list li a{
      width: 270px;
      height: 62px;
      background: #fafafa;
    }
    #singer-list li a div.left{
      width: 62px;
      height: 62px;
      float: left;
    }
    #singer-list li a div.left img{
      width: 62px;
      height: 62px;
      float: left;
    }
    #singer-list li a div.info{
      width: 207px;
      height: 60px;
      padding-left:62px;
      border: 1px solid #e9e9e9;
      border-left: none;
    }
    #singer-list li a div.info h4{
      font-size: 12px;
      padding-left: 20px;
      padding-top: 10px
    }
    #singer-list li a div.info p{
      font-size: 12px;
      padding-left: 20px;
      padding-top: 8px
    }
    button.yinyueren{
      width: 230px;
      height: 35px;
      margin-left: 35px;
      margin-bottom: 10px;
      font-weight: bold;
      border-radius: 5px;
      border: none;
    }
  </style>