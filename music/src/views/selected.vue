<template>
    <!-- this is 搜索-->
    <div>
      <wy-header :indexlist="indexlist" :navs="navs"></wy-header>
      <div  class="bgGray cs2">
          <div class="border-left border-right contentS cs2 bgWhite select-content">
            <!-- 搜索框 -->
            <div class="sprite-select this-select">
              <input type="text">
              <a href="#" class="txt-select"></a>
            </div>
            <div class="nav-txt"></div>
            <!-- 内容框 -->
            <div>
              <!-- 内容导航栏 -->
              <div class="nac-items border">
              <ul > 
                <li ><a href="#">单曲</a></li>
                <li><a href="#">歌手</a></li>
                <li class="active"><a href="#">专辑</a></li>
                <li><a href="#">歌单</a></li>
                <li><a href="#">用户</a></li>
                <li><a href="#">主播电台</a></li>
                <li><a href="#">专辑</a></li>
                <li><a href="#">视频</a></li>
              </ul>
              </div>
              <!-- 内容框 -->
              <div>
                  

              </div>
            </div>
          </div>
      </div>
      <wy-footer></wy-footer>
    </div>
</template>
<script>
import WyHeader from '@/components/commect/WyHeader.vue'
import WyFooter from '@/components/commect/WyFooter.vue'
// import WyLogin from '@/components/WyLogin.vue'



export default {
name: 'selected',
data:function(){
  return{
    indexlist:[],
        navs:[
          {title:"发现音乐",href:"/",hot:"show2",hotcontent:"",class:""},
          {title:"我的音乐",href:"/mysonglist",hot:"show2",hotcontent:"",class:""},
          {title:"朋友",href:"#",hot:"show2",hotcontent:"",class:""},
          {title:"商城",href:"#",hot:"show2",hotcontent:"",class:""},
          {title:"音乐人",href:"#",hot:"show2",hotcontent:"",class:""},
          {title:"下载客户端",href:"#",hot:"show1",hotcontent:"hot",class:""},

        ]
  }
},
components: {
  WyHeader,WyFooter,
}
}
  </script>
  <style >
    .select-content{
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .sprite-select.this-select{
      margin: 40px auto;
      display: flex;
      align-items: center;
      justify-content: space-around;

    }
    .sprite-select.this-select input{
      width: 320px;
      height: 32px;
      margin-left:-55px; 
    }
    .nac-items{
      border-top:2px solid #ccc;
      width: 800px;
      height: 39px;
      box-sizing: border-box;
      background-image:linear-gradient(180deg,#F9F9F9 0%,#F6F6F6 100%) 

    }
    .nac-items>ul{
      display: flex;
      width: 800px;
      height: 39px;
      box-sizing: border-box;
    }
    .nac-items>ul>li{
      border:1px solid transparent;
      border-top: 2px solid transparent;  
      width: 108px;
      height: 39px;
      box-sizing: border-box;
      position: relative;
      top: -2px;
      left: -1px;
    }
    .nac-items>ul>li.active{
      border: 1px solid #ccc;
      border-bottom-color: white;
      background-image: linear-gradient(180deg,rgb(236, 236, 236) 0%,white 100%)
    }
    .nac-items>ul>li:hover,.nac-items>ul>li.active{
      border-top: 2px solid red;
      
    }
    .nac-items>ul>li>a{
      display: flex;
      width: 100%;
      height: 100%;;
      justify-content: center;
      align-items: center;
      font-size:14px; 
    }
  </style>