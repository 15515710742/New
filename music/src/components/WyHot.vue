<template>
    <div >
      <!-- this is 热门推荐 -->
      <!-- 导航栏 -->
      <div class="nav ">
        <div class="nav-left">
          <div class="index-circle"></div>
          <div>热门推荐</div>
          <ul class="nav-contant-list">
              <li><a href="#" class="fontCGray">华语</a></li>
              <li><a href="#">丨</a></li>
              <li><a href="#" class="fontCGray">流行</a></li>
              <li><a href="#">丨</a></li>
              <li><a href="#" class="fontCGray">摇滚</a></li>
              <li><a href="#">丨</a></li>
              <li><a href="#" class="fontCGray">民谣</a></li>
              <li><a href="#">丨</a></li>
              <li><a href="#" class="fontCGray">电子</a></li>
          </ul>
        </div>    
        <div>
          <a href="#" class="more">
            <div class="fontSS fontCGray">更多</div>
            <div class="index-jiantou1 change"></div>
          </a>
        </div>
      </div>
      <!-- 内容框 -->
      <div class="cont">
          <!-- 小组件 -->
          <wy-co-hot v-for="item in list" :item="item"></wy-co-hot>
          <!-- 小组件 -->
      </div>
    </div>
  </template>
  
  <script>  
  import WyCoHot from "./commect/WyCoHot.vue"
  export default {
    name: 'WyHot',
    data:function(){
      return{
        list:[
          {id:1,name:"还在暗恋？一封歌单情书拿去表白",pic:"http://127.0.0.1:7200/image/login/gedan/109951163129075134.jpg",number:"11万"},
          {id:2,name:"【黑童话】这个大人有点可爱",pic:"http://127.0.0.1:7200/image/login/gedan/109951163400839430.jpg",number:"11万"},
          {id:3,name:"鱼仔（抖音22秒）",pic:"http://127.0.0.1:7200/image/login/gedan/109951163409351445.jpg",number:"11万"},
          {id:4,name:"泸沽寻梦",pic:"http://127.0.0.1:7200/image/login/gedan/109951163452730083.jpg",number:"11万"},
          {id:5,name:"气场两米八 | 内心要骚 步子要稳 眼神要狠",pic:"http://127.0.0.1:7200/image/login/gedan/109951163462053571.jpg",number:"11万"},
          {id:6,name:"清Flow徐來 | 行雲流水的中文說唱",pic:"http://127.0.0.1:7200/image/login/gedan/109951163467205956.jpg",number:"11万"},
          {id:7,name:"浪漫制造器丨爱你这件小事",pic:"http://127.0.0.1:7200/image/login/gedan/109951163501107766.jpg",number:"11万"},
          {id:8,name:"还在暗恋？一封歌单情书拿去表白",pic:"http://127.0.0.1:7200/image/login/gedan/109951163510481670.jpg",number:"11万"},
        ]
      }
    },
    components: {
      WyCoHot
    }
  }
  </script>
  <style >
.nav-contant-list{
  display: flex;
  align-items: center;
}
.nav-contant-list>li>a{
  font-size:12px; 
  padding: 3px;
}
.cont{
  overflow: hidden;
  margin-bottom: 15px;
}
.cont>div>div{
  margin-top: 15px;
  margin-left: 36px;
}
.cont>div:nth-child(4n+1)>div.item{
  margin-left: 0px;
}

  </style>