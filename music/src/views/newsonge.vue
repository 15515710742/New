<template>
    <!-- this is 新歌上架-->
    <div>
      <wy-header :indexlist="indexlist" :navs="navs"></wy-header>
      <!-- <div >
        新碟上架
      </div> -->
      <div  class="bgGray cs2">
          <div class="border-left border-right contentS cs2 bgWhite changearr">
            <div class="content-hotsonglist">
              <!-- 头部 -->
              <div>
                  <div class="nav ">
                      <div class="nav-left">
                        <div class="index-circle"></div>
                        <div>热门新碟</div>
                      </div>    
                      <div>
                        <a href="#" class="more">
                          <!-- <div class="fontSS fontCGray">更多</div>
                          <div class="index-jiantou1 this-chenage"></div> -->
                        </a>
                      </div>
                    </div>
              </div>
              <!-- 尾部 -->
              <div>
                <wy-co-newsong v-for="item in hotlist" :item="item"></wy-co-newsong>
              </div>
            </div>
            <!-- 全部新碟 -->
            <div class="content-hotsonglist">
                <!-- 头部 -->
                <div>
                    <div class="nav ">
                        <div class="nav-left">
                          <div class="index-circle"></div>
                          <div>全部新碟</div>
                        </div>    
                        <div>
                          <a href="#" class="more">
                          </a>
                        </div>
                      </div>
                </div>
                <!-- 体部 -->
                <div >
                  <wy-co-newsong v-for="item in alllist" :item="item"></wy-co-newsong>
                </div>
                <!-- 尾部 -->
                <div >
                    <wy-copages class="box-arr"></wy-copages>
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
import WyCoNewsong from '@/components/commect/WyCoNewsong.vue'
import WyCopages from '@/components/commect/WyCopages.vue'



export default {
name: 'newsonge',
data:function(){
  return{
    hotlist:[
          {id:1,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:2,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163445068364.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:3,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163451314191.jpg",name:"中国音乐公告牌 第六期",title:"中国音乐公告牌 第六期"},
          {id:4,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163452419421.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:5,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163456268389.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:6,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:7,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163456397957.jpg",name:"中国音乐公告牌 第六期",title:"中国音乐公告牌 第六期"},
          {id:8,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163462585557.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:9,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163511602813.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:10,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:11,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
        ],
        alllist:[
          {id:1,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:2,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163445068364.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:3,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163451314191.jpg",name:"中国音乐公告牌 第六期",title:"中国音乐公告牌 第六期"},
          {id:4,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163452419421.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:5,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163456268389.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:6,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:7,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163456397957.jpg",name:"中国音乐公告牌 第六期",title:"中国音乐公告牌 第六期"},
          {id:8,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163462585557.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:9,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163511602813.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:10,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:11,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:1,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:2,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163445068364.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:3,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163451314191.jpg",name:"中国音乐公告牌 第六期",title:"中国音乐公告牌 第六期"},
          {id:4,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163452419421.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:5,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163456268389.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:6,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:7,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163456397957.jpg",name:"中国音乐公告牌 第六期",title:"中国音乐公告牌 第六期"},
          {id:8,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163462585557.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:9,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163511602813.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:10,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:11,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:1,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:2,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163445068364.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:3,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163451314191.jpg",name:"中国音乐公告牌 第六期",title:"中国音乐公告牌 第六期"},
          {id:4,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163452419421.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:5,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163456268389.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:6,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:7,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163456397957.jpg",name:"中国音乐公告牌 第六期",title:"中国音乐公告牌 第六期"},
          {id:8,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163462585557.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:9,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163511602813.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:10,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:11,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          
        ],
        indexlist:[
          {id:1,href:"./",title:"推荐",class:""},
          {id:2,href:"./bangdan",title:"排行榜",class:""},
          {id:3,href:"./songlist",title:"歌单",class:""},
          {id:4,href:"./songlist",title:"主播电台",class:""},
          {id:5,href:"./songer",title:"歌手",class:""},
          {id:6,href:"./newsonge",title:"新碟上架",class:"active"},
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
  WyHeader,WyFooter,WyCoNewsong,WyCopages
}
}
  </script>
  <style >
  @import "../assets/css/index.css";
    .nav{
      width: 100%;
    }
    .changearr{
      flex-direction: column;
    }
.box-all{
  padding: 20px;
}

.box-newsong{
  display: flex;
}
.content-hotsonglist{
  padding: 35px;
}
.content-hotsonglist+.content-hotsonglist{
  padding-top:0px; 
}
.content-hotsonglist>div:nth-child(2){
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 20px;
}
.content-hotsonglist>div>div{
  margin:5px 0  1px 29px;
}
.content-hotsonglist>div>div:first-child,.content-hotsonglist>div>div:nth-child(6n+1){
  margin-left:0; 
}
.box-arr{
  width: 100%;
  height: 40px;
}
  </style>