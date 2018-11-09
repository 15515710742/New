<template>
    <div class="n-bill">
      <!-- 导航 -->
      <div class="nav ">
          <div class="nav-left">
            <div class="index-circle"></div>
            <div>榜单</div>
          </div>    
          <div>
            <a href="#" class="more">
              <div class="fontSS fontCGray">更多</div>
              <div class="index-jiantou1 change">

              </div>
            </a>
          </div>
      </div>
      <!-- 内容 -->
      <div id="top-flag" class="n-bilst border">
        <div class="blk " v-for="item in alllist " >
          <div class="top border-bottom">
            <div class="cver" style="float:left">
              <a><img :src="item.pic"></a>
            </div>
            <div class="tit">
              <a src="" ><h3 class="f-fs1">{{item.name}}</h3></a>
              <div class="btn">
                <a href="#">
                  <div class="iconall-zanting3 bofang"></div>
                </a>
                <a href="#">
                  <div class="index-wjj-big-1 shoucang"></div>
                </a>
              </div>
            </div>
          </div>
          <div class="body">
            <ul>
              <li v-for="a in item.list" class="hove-change">
                <span class="num">{{a.num}}</span>
                <a class="text song">{{a.song}}</a>
                <div class="oper">
                  <a class="#"><div class="iconall-zanting5"></div></a>
                  <a href="#"><div class="icon-add-1"></div></a>
                  <a href="#"><div class="index-wjj-small-1"></div></a>
                </div>
              </li>
            </ul>
            <div class="more border-bottom" ><a href="#">查看全部></a></div>
          </div>
        </div>
        </div>
      </div>
    </div>
</template>
  
  <script scoped>  
  export default {
    name: 'WyBangdan',
    data:function(){
      return{
      alllist:[
        {id:1,list:[
            {id:1,num:1,song:"扑朔迷离 (跑得快)",},
            {id:1,num:2,song:"君のうた",},
            {id:1,num:3,song:"即刻启程",},
            {id:1,num:4,song:"삐삐",},
            {id:1,num:5,song:"1941. 2018 CYPHER",},
            {id:1,num:6,song:"HOPE",},
            {id:1,num:7,song:"Money",},
            {id:1,num:8,song:"东西",},
            {id:1,num:9,song:"Pure",},
            {id:1,num:10,song:"Love Song",},     
        ],name:"云音乐飙升榜",pic:"http://127.0.0.1:7200/image/login/bandan/18696095720518497.jpg"},
        {id:2,list:[
            {id:1,num:1,song:"年少有为",},
            {id:1,num:2,song:"贝贝",},
            {id:1,num:3,song:"扑朔迷离 (跑得快)",},
            {id:1,num:4,song:"耳朵",},
            {id:1,num:5,song:"RISE",},
            {id:1,num:6,song:"出山",},
            {id:1,num:7,song:"我抬头一看满街都是单身的狗",},
            {id:1,num:8,song:"You (Live)",},
            {id:1,num:9,song:"삐삐",},
            {id:1,num:10,song:"很高兴认识你",},     
        ],name:"云音乐新歌榜",pic:"http://127.0.0.1:7200/image/login/bandan/18713687906568048.jpg"},
        {id:3,list:[
            {id:1,num:1,song:"想淋雨就别走",},
            {id:1,num:2,song:"对不起"},
            {id:1,num:3,song:"道理的道理",},
            {id:1,num:4,song:"Blues River",},
            {id:1,num:5,song:"Sunny Rain",},
            {id:1,num:6,song:"给懒惰的你",},
            {id:1,num:7,song:"别人",},
            {id:1,num:8,song:"但凡",},
            {id:1,num:9,song:"梦骨",},
            {id:1,num:10,song:"想像一座城市",},     
        ],name:"网易原创歌曲榜",pic:"http://127.0.0.1:7200/image/login/bandan/18740076185638788.jpg"}
      ]    
      }
    },
    components: {
      
    }
  }
  </script>
  <style>
    div.n-bill{
      font-size: 12px;
      color: #333;
      background-color: white;
    }
    div.v-hd2{
      height: 33px;
      padding: 0 10px 0 34px;
      background-position: -225px -156px;
      border-bottom: 2px solid #C10D0C;
    }
    div.v-hd2 a.tit{
      float: left;
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }
    div.v-hd2 span.more{
      float: right;
      margin-top: 9px;
    }
    #top-flag{
      height: 472px;
      display: flex;
      margin-top: 20px;
      padding-left: 1px;
    }
    div.bofang{
      float: left;
    }
    div.shoucang{
      margin-left: 10px;
      margin-top: 3px;
      float: left;
    }
    div.body{
      clear: both;
    }
    div.body ul{
      height: 319px;
      line-height: 32px;
    }
    div.body ul li{
      height: 32px;
      background:#F4F4F4;
    }
    div.body ul li:nth-child(2n){
      background: #E8E8E8;
    }
    span.num{
      clear: both;
      float: left;
      position: relative;
      width: 35px;
      height: 32px;
      text-align: center;
      color: #666;
      font-size: 16px;
    }
    div.body ul li a.song{
      float: left;
      width: 120px;
      height: 32px;
      cursor: pointer;
    }
    div.oper{
      float: left;
      margin-top: 3px;
      display: none;
    }
    .icon-add-1{
      margin-top: 2px;
    }
    div.oper a{
      float: left;
    }
    div.blk {
      width: 223px;
      float: left;
      width: 230px;
      box-sizing: border-box;
    }
    div.blk+div.blk{
      border-left: 1px solid #ccc;
    }
    div.blk div.top{
      height: 100px;
      padding: 20px 0 0 19px;
      background-color: #F4F4F4;
    }
    div.blk div.top div.cver{
      display: inline;
      width: 80px;
      height: 80px;
    }
    div.blk div.top div.cver a{
      display: block;
      width: 100%;
      height: 100%;
    }
    div.blk div.top div.cver a img{
      display: block;
      float: left;
      width: 100%;
      height: 100%;
    }

    h3.f-fs1{
      margin-top: 5px;
      margin-left:10px; 
    }
    div.btn{
      margin-top: 10px;
      margin-left: 10px;
    }
    div.more{
      background:#F4F4F4; 
      /* clear: both; */
      width: 100%;
      line-height: 32px;
      
      color: #000;
    }
    div.more::before{
      content: " ";
      clear: both;
      display: table;
    }
    div.more>a{
      position: relative;
      left: 150px;
    }
    .hove-change:hover .oper{
      display: block;
    }
  </style>