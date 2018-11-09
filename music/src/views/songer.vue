<template>
    <!-- this is 歌手-->
    <div>
      <wy-header :indexlist="indexlist" :navs="navs"></wy-header>
      <!-- <div >
        这是歌手
      </div> -->
      <div  class="bgGray cs2">
        <div class="border-left border-right contentS cs2 bgWhite">
          <!-- 左 -->
          <div class="boxsizing border-right cs2 bgGray content-left-25">
              <div class="songertuijian">
                <div>推荐</div>
                <ul>
                  <li class="active"> <a href="#"> <span>■</span> 推荐歌手</a></li>
                  <li><a href="#"><span>■</span>入驻歌手</a></li>
                </ul>
              </div>
          </div>
          <!-- 右边 -->
          <div class="boxsizing cs2 bgWhite content-right-75">
            
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
name: 'songer',
data:function(){
  return{
    indexlist:[
          {id:1,href:"./",title:"推荐",class:""},
          {id:2,href:"./bangdan",title:"排行榜",class:""},
          {id:3,href:"./songlist",title:"歌单",class:""},
          {id:4,href:"./#",title:"主播电台",class:""},
          {id:5,href:"./songer",title:"歌手",class:"active"},
          {id:6,href:"./newsonge",title:"新碟上架",class:""},
        ],
        navs:[
          {title:"发现音乐",href:"/",hot:"show2",hotcontent:"",class:"active"},
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
.songertuijian{
  margin-top:10px; 
}
.songertuijian>div:first-child{
  font-family:"Microsoft Yahei";
  font-weight: 900;
  font-size: 16px;
  margin-left: 15px;
}
.songertuijian>ul>li{
  width: 180px;
  margin: 0 auto;
  display: flex;
  justify-content:start;
  align-items: center;
  margin-top: 10px;
  padding: 5px;
}
.songertuijian>ul>li>a{
  color: #666666;
  font-size: 14px;
  display: flex;
}
.songertuijian>ul>li>a>span{
  margin: 0 5px;
}
.songertuijian>ul>li.active{
  border: 1px solid #d3d3d3;
}
.songertuijian>ul>li.active>a{
  color: #c20c0c;
}
  </style>