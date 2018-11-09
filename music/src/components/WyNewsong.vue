<template>
    <div >
      <!-- this is 新碟上架 -->
      <!-- 导航栏 -->
      <div class="nav ">
          <div class="nav-left">
            <div class="index-circle"></div>
            <div>新碟上架</div>
          </div>    
          <div>
            <a href="#" class="more">
              <div class="fontSS fontCGray">更多</div>
              <div class="index-jiantou1 this-chenage"></div>
            </a>
          </div>
        </div>
        <!-- 内容框 -->
        <div class="bgGray  items border">
          <div class="index-jiantou2-left"></div>
          <div class="itemsbox">
            <div>
                <wy-co-newsong v-for="item in list" :item="item"></wy-co-newsong>
            </div>
          </div>
          <div class="index-jiantou2-right"></div>
        </div>
    </div>
  </template>
  
  <script scoped>  
  import WyCoNewsong from "./commect/WyCoNewsong.vue"
  export default {
    name: 'WyNewsong',
    data:function(){
      return{
        list:[
          {id:1,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:2,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163445068364.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:3,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163451314191.jpg",name:"中国音乐公告牌 第六期",title:"中国音乐公告牌 第六期"},
          {id:4,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163452419421.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:1,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163456268389.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:2,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:3,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163456397957.jpg",name:"中国音乐公告牌 第六期",title:"中国音乐公告牌 第六期"},
          {id:4,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163462585557.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:1,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163511602813.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
          {id:2,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"Porch Songs",title:"Rachael Yamagata"},
          {id:4,pic:"http://127.0.0.1:7200/image/login/zhuanji/109951163440625910.jpg",name:"破坏王",title:"陈奕迅 / eason and the duo band"},
        ]
      }
    },
    components: {
      WyCoNewsong
    }
  }
  </script>
  <style scoped>
    .items{
      height: 180px;
      margin: 15px 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .itemsbox{
      overflow: hidden;
      width: 645px;
      height: 150px;
    }
    .itemsbox>div{
      display: flex;
      width: 2580px;
      overflow: hidden;
      height: 100%;
    }
    .item{
      width: 120px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      margin: 0 5px;
    }
    .item>a{
      display: block;
    }
    .item>a:first-child{
      position: relative;
    }
    .item>a:first-child:hover .change{
      display: block;
    }
    .item>a:first-child>div{
      position: absolute;
    }
    .change{
      top: 75px;
      left: 75px;
      display: none;
    }
    .item>a+a{
      font-size: 12px;
      width: 100px;
      padding: 3px;
    }

    
    .this-chenage{
      top: 3px;
      position: relative;
    }
  </style>