<template>
    <!-- this is 歌单-->
    <div>
      <wy-header :indexlist="indexlist" :navs="navs"></wy-header>
      <!-- <div >
        这是歌单
      </div> -->
      <div  class="bgGray cs2">
          <div class="border-left border-right contentS cs2 bgWhite">
            <div class="content-songlist">
              <!-- 头部 -->
              <div>
                  <div class="nav ">
                      <div class="nav-left">
                        <div class="index-circle"></div>
                        <div>全部</div>
                        <div>
                          <button>选择分类</button>
                        </div>
                      </div>    
                      <div>
                        <a href="#" class="more">
                        </a>
                      </div>
                    </div>
              </div>
              <!-- 体部 -->
              <div class="content-body">
                <wy-co-hot v-for="item in list" :item="item"></wy-co-hot>
              </div>
              <!-- 尾部 -->
              <div>
                <wy-co-pages></wy-co-pages>
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
import WyCoHot from '@/components/commect/WyCoHot.vue'

import WyCoPages from '@/components/commect/WyCopages.vue'


export default {
name: 'songlist',
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
          {id:1,name:"还在暗恋？一封歌单情书拿去表白",pic:"http://127.0.0.1:7200/image/login/gedan/109951163129075134.jpg",number:"11万"},
          {id:2,name:"【黑童话】这个大人有点可爱",pic:"http://127.0.0.1:7200/image/login/gedan/109951163400839430.jpg",number:"11万"},
          {id:3,name:"鱼仔（抖音22秒）",pic:"http://127.0.0.1:7200/image/login/gedan/109951163409351445.jpg",number:"11万"},
          {id:4,name:"泸沽寻梦",pic:"http://127.0.0.1:7200/image/login/gedan/109951163452730083.jpg",number:"11万"},
          {id:5,name:"气场两米八 | 内心要骚 步子要稳 眼神要狠",pic:"http://127.0.0.1:7200/image/login/gedan/109951163462053571.jpg",number:"11万"},
          {id:6,name:"清Flow徐來 | 行雲流水的中文說唱",pic:"http://127.0.0.1:7200/image/login/gedan/109951163467205956.jpg",number:"11万"},
          {id:7,name:"浪漫制造器丨爱你这件小事",pic:"http://127.0.0.1:7200/image/login/gedan/109951163501107766.jpg",number:"11万"},
          {id:8,name:"还在暗恋？一封歌单情书拿去表白",pic:"http://127.0.0.1:7200/image/login/gedan/109951163510481670.jpg",number:"11万"},
        ],
        indexlist:[
          {id:1,href:"./",title:"推荐",class:""},
          {id:2,href:"./bangdan",title:"排行榜",class:""},
          {id:3,href:"./songlist",title:"歌单",class:"active"},
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
  WyHeader,WyFooter,WyCoHot,WyCoPages
},
methods:{
  addCart(){
    this.$store.commit("increment",Number(this.num));
    console.log(1);
  },
  minusCart(){
    this.$store.commit("subtract");
  },
  clearCart(){
    this.$store.commit("clearCount");
  }
}
}
  </script>
  <style >
    @import "../assets/css/index.css";
    .nav{
      width: 100%;
    }
    .nav-left{
      padding: 5px;
    }
    .nav-left button{
      color: rgb(127, 193, 255);
      border-radius: 3px;
      border:none;
      padding: 5px 10px;
      margin-left: 10px;
    }
    .content-songlist{
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 25px;
      width: 1000px;
    }
    .content-body{
      flex-wrap: wrap;
      display: flex;
      width: 100%;
      min-height: 50px;
      margin-top:10px; 
    }
    .content-body>div{
      margin: 10px 0 0 62px;
    }
    .content-body>div+div:nth-child(5n+1),.content-body>div:first-child{
      margin-left: 0px;
    }
  </style>