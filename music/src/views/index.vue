<template>
    <div>
      <wy-header :indexlist="indexlist" :navs="navs"></wy-header>
        <div class="cell bgGray cs2">
          <!-- banner -->
          <div class="bgBlack cs2">
            <div class="contentS cs1" style="background: green">
            banner
            </div>
          </div>
          <!-- content -->
          <div class="bgWhite">
            <div class="contentS bgWhite border-left border-right cs2">
              <!-- 左侧楼层 -->
              <div class="content-left border-right bgWhite cs2"  >
                  <!-- 楼层1 热门推荐 -->
                  <div class="cs3" >
                    <!-- 热门推荐 -->
                    <wy-hot></wy-hot>
                  </div>
                  <!-- 楼层2 新碟上架 -->
                  <div class="cs3">
                    <!-- 新碟上架 -->
                    <wy-newsong></wy-newsong>
                  </div>
                  <!-- 楼层3 榜单 -->
                  <div class="cs3" >
                    <!-- 榜单 -->
                    <wy-bangdan></wy-bangdan>
                  </div>
              </div>
              <!-- 右侧楼层 -->
              <div class="content-right cs2"> 
                  <!--1 登录 -->
                  <div class="cs3 bgGray  border-bottom" >
                    <!-- 登录 -->
                    <wy-indexlogin ></wy-indexlogin>
                  </div>
                  <!--2 入驻歌手 -->
                  <div class="cs3">
                    <!-- 入驻歌手 -->
                    <wy-mysonger></wy-mysonger>
                  </div>
                  <!--3 热门主播 -->
                  <div class="cs3">
                    <!-- 热门主播 -->
                    <wy-hotzhubo></wy-hotzhubo>
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
import WyHot from '@/components/WyHot.vue'
import WyNewsong from '@/components/WyNewsong.vue'
import WyBangdan from '@/components/WyBangdan.vue'
import WyIndexlogin from '@/components/WyIndexlogin.vue'
import WyMysonger from '@/components/WyMysonger.vue'
import WyHotzhubo from '@/components/WyHotzhubo.vue'

export default {
  name: 'index',
  data:function(){
    return{
      indexlist:[
          {id:1,href:"./",title:"推荐",class:"active"},
          {id:2,href:"./bangdan",title:"排行榜",class:""},
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
    WyHeader,WyFooter,WyHot,WyNewsong,WyBangdan,WyIndexlogin,WyMysonger,WyHotzhubo
  }
}
</script>
<style scoped>
  @import "../assets/css/index.css";
  .content-left,.content-right{
    box-sizing: border-box;  
  }
 .content-left{
   width: 700px;
  padding: 15px;
 }
 .content-right{
   width: 300px;
 }
</style>
