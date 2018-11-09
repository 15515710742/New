<template>
<div class="mysonglist">
  <wy-header :indexlist="indexlist" :navs="navs"></wy-header>
    <div class="bgGray cs2">
        <div class="border-left border-right contentS cs2 bgWhite">
          <!-- 左 -->
          <div class="boxsizing border-right cs2 bgGray content-left-25">

          </div>
          <!-- 右边 -->
          <div class="boxsizing cs2 bgWhite content-right-75">
              <!-- ---------------歌曲导航栏---------------- -->
                    <!-- 导航栏 -->
              <div class="nav ">
                  <div class="nav-left">
                    <div class="index-circle"></div>
                    <div>歌曲列表</div>
                    <span class="fontSS fontCGray">100首</span>
                  </div>    
                  <div>
                    <a href="#" class="more">
                      <div class="fontSS fontCGray">播放:<span class="fontCRed fontSS">111</span></div>
                      <div class="fontSS fontCGray">次</div>
                    </a>
                  </div>
                </div>
              <!-- ------------------------------- -->
              <div>
                <div class="bangdanList border-top border-bottom cs2">
                <div class="border-bottom cs1 bangdantitlelist">
                  <div></div>
                  <div class="fontCGray fontSS">标题</div>
                  <div class="fontCGray fontSS">时长</div>
                  <div class="fontCGray fontSS">歌手</div>
                  <div class="fontCGray fontSS">专辑</div>
                </div>
                <!-- 组件单歌曲列表 -->
                <div class="wysonglistitems">
                  <!-- <wy-songlistitem v-for="item in list" :item="item"></wy-songlistitem> -->
                </div>
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

export default {
name: 'mysonglist',
data:function(){
  return{
    indexlist:[],
        navs:[
          {title:"发现音乐",href:"/",hot:"show2",hotcontent:"",class:""},
          {title:"我的音乐",href:"/mysonglist",hot:"show2",hotcontent:"",class:"active"},
          {title:"朋友",href:"#",hot:"show2",hotcontent:"",class:""},
          {title:"商城",href:"#",hot:"show2",hotcontent:"",class:""},
          {title:"音乐人",href:"#",hot:"show2",hotcontent:"",class:""},
          {title:"下载客户端",href:"#",hot:"show1",hotcontent:"hot",class:""},

        ]
  }
},
components: {
  WyHeader,WyFooter
}
}
  </script>
  <style  lang="scss" scoped="" type="text/css">
  @import "../assets/css/index.css";
  .mysonglist{
    .nav{
    width: 100%;
    padding: 3px 15px;
    box-sizing: border-box;
    }
    .nav-left>span{
      margin-left: 20px;
      position: relative;
      top: 5px;
    }
    .nav>div:last-child{
      position: relative;
      top: 5px;
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
  }
  
  </style>