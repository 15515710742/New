<template>
    <!-- this is 榜单-->
    <div>
      <wy-header :indexlist="indexlist" :navs="navs"></wy-header>
      <!-- <div>
      bangdan
      </div> -->
      <div  class="bgGray cs2">
          <div class="border-left border-right contentS cs2 bgWhite">
            <!-- 左 -->
            <div class="boxsizing border-right cs2 bgGray content-left-25">
              <div class="bangdan1">
                  <div>云音乐特色榜</div>
                  <ul>
                    <li>
                      <wy-bangdanglist v-for="item in bangdanglist" :item="item"></wy-bangdanglist>
                    </li>
                  </ul>
              </div>
            </div>
            <!-- 右边 -->
            <div class="boxsizing cs2 bgWhite content-right-75 change-bangdan">
              <!-- bangdan top title   -->
              <div>
                <wy-bangdantitle :item="item"></wy-bangdantitle>
              </div>
              <!-- bangdan 详细信息 -->
              <div>
                  <div class="nav ">
                      <div class="nav-left">
                        <div class="index-circle"></div>
                        <div>歌曲列表</div>
                        <span class="fontSS fontCGray pad">100首歌</span>
                      </div>    
                      <div>
                        <a href="#" class="more">
                          <span class="fontSS fontCGray">播放:
                            <span class="fontCRed">{{1111111111}}</span>
                            <span>次</span>
                          </span>
                        </a>
                      </div>
                    </div>
              </div>
              <!-- bangdan列表 -->
              <div class="bangdanList border cs2">
                <div class="border-bottom cs1 bangdantitlelist">
                  <div></div>
                  <div class="fontCGray fontSS">标题</div>
                  <div class="fontCGray fontSS">时长</div>
                  <div class="fontCGray fontSS">歌手</div>
                </div>
                <!-- 组件单歌曲列表 -->
                <div class="wysonglistitems">
                  <wy-songlistitem v-for="item in list" :item="item"></wy-songlistitem>
                </div>
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
import WyBangdanglist from '@/components/WyBangdanList.vue'
import WySonglistitem from '@/components/WySonglistitem.vue'
import WyBangdantitle from '@/components/WyBangdantitle.vue'


export default {
name: 'bangdan',
data:function(){
  return{
    item:{pic:"http://127.0.0.1:7200/image/login/bandan/18696095720518497.jpg",add:"12535",share:"12535",down:"12535",cot:"25458"},
    bangdanglist:[
      {id:1,pic:"http://127.0.0.1:7200/image/login/gedan130/18696095720518497.jpg",title:"音乐飙升榜",updata:"每天更新"},
      {id:2,pic:"http://127.0.0.1:7200/image/login/gedan130/18713687906568048.jpg",title:"云音乐新歌榜",updata:"每天更新"},
      {id:3,pic:"http://127.0.0.1:7200/image/login/gedan130/18740076185638788.jpg",title:"网易原创歌曲榜",updata:"每周四更新"}
    ],
    list:[
          {id:1,src:"http://127.0.0.1:7200/image/Login/zhubo/3440371884651965.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希"},{name:"/陈鸿宇"}]},
          {id:2,src:"http://127.0.0.1:7200/image/Login/zhubo/7942872001461517.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希1"},{name:"/陈鸿宇a"}]},
          {id:3,src:"http://127.0.0.1:7200/image/Login/zhubo/3440371884651965.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希2"},{name:"/陈鸿宇s"}]},
          {id:4,src:"http://127.0.0.1:7200/image/Login/zhubo/3427177769086282.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希3"},{name:"/陈鸿宇s"}]},          
          {id:5,src:"http://127.0.0.1:7200/image/Login/zhubo/3440371884651965.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希4"},{name:"/陈鸿宇s"}]},
          {id:6,src:"http://127.0.0.1:7200/image/Login/zhubo/3440371884651965.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希"},{name:"/陈鸿宇"}]},
          {id:7,src:"http://127.0.0.1:7200/image/Login/zhubo/7942872001461517.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希1"},{name:"/陈鸿宇a"}]},
          {id:8,src:"http://127.0.0.1:7200/image/Login/zhubo/3440371884651965.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希2"},{name:"/陈鸿宇s"}]},
          {id:9,src:"http://127.0.0.1:7200/image/Login/zhubo/3427177769086282.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希3"},{name:"/陈鸿宇s"}]},          
          {id:10,src:"http://127.0.0.1:7200/image/Login/zhubo/3440371884651965.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希4"},{name:"/陈鸿宇s"}]},
          {id:11,src:"http://127.0.0.1:7200/image/Login/zhubo/3440371884651965.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希"},{name:"/陈鸿宇"}]},
          {id:12,src:"http://127.0.0.1:7200/image/Login/zhubo/7942872001461517.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希1"},{name:"/陈鸿宇a"}]},
          {id:13,src:"http://127.0.0.1:7200/image/Login/zhubo/3440371884651965.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希2"},{name:"/陈鸿宇s"}]},
          {id:14,src:"http://127.0.0.1:7200/image/Login/zhubo/3427177769086282.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希3"},{name:"/陈鸿宇s"}]},          
          {id:15,src:"http://127.0.0.1:7200/image/Login/zhubo/3440371884651965.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希4"},{name:"/陈鸿宇s"}]},
          {id:16,src:"http://127.0.0.1:7200/image/Login/zhubo/3440371884651965.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希"},{name:"/陈鸿宇"}]},
          {id:17,src:"http://127.0.0.1:7200/image/Login/zhubo/7942872001461517.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希1"},{name:"/陈鸿宇a"}]},
          {id:18,src:"http://127.0.0.1:7200/image/Login/zhubo/3440371884651965.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希2"},{name:"/陈鸿宇s"}]},
          {id:19,src:"http://127.0.0.1:7200/image/Login/zhubo/3427177769086282.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希3"},{name:"/陈鸿宇s"}]},          
          {id:20,src:"http://127.0.0.1:7200/image/Login/zhubo/3440371884651965.jpg",songName:"橙梦",time:"04:33",author:[{name:"张希4"},{name:"/陈鸿宇s"}]},
        ],
        indexlist:[
          {id:1,href:"./",title:"推荐",class:""},
          {id:2,href:"./bangdan",title:"排行榜",class:"active"},
          {id:3,href:"./songlist",title:"歌单",class:""},
          {id:4,href:"./songlist",title:"主播电台",class:""},
          {id:5,href:"./songer",title:"歌手",class:""},
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

  WyHeader,WyFooter,WyBangdanglist, WySonglistitem ,WyBangdantitle
},
  created(){
  }
}
  </script>
  <style >
  @import "../assets/css/index.css";
    
.bangdan1{
  width: 100%;
  min-height: 100px;
}
.bangdan1>div{
  margin: 20px 10px 10px 10px;
  font-weight: 800;
  font-size: 16px;
  font-family: simsun,\5b8b\4f53;
}
.bangdan1>ul>li{
  width: 100%;
  height: 62px;
}
.bangdan1 .active{
  background: #ccc;
}
.change-bangdan{
  padding: 40px;
}
.pad{
  padding: 0 5px;
}
.bangdantitlelist{
  background-image: linear-gradient(180deg,#FFFFFF 0%,#F0F0F0 100%);
  height:35px;
  box-sizing: border-box;
  display: flex;
}
.bangdantitlelist>div{
  height: 100%;
  padding: 8px 10px;
  box-sizing: border-box;
  width: 90px;
}
.bangdantitlelist>div+div{
  border-left: 1px solid #d3d3d3;
}
.bangdantitlelist>div:nth-child(2){
  width: 400px;
}
.wysonglistitems>.list:nth-child(2n-1){
  background: #F7F7F7;

}
  </style>