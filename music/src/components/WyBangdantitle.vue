<template>
    <div class="WyBangdantitle box-bdtitle">
        <!-- this is 榜单头部 -->
        <!-- 左侧 -->
        <div class="border axxxx">
            <img :src="item.pic" class="img-kg">
        </div>
        <!-- 右侧 -->
        <div class="box-bdtitle-right">
            <div class="fontXX box-bdtitle-p">云音乐飙升榜</div>
            <div class="fontSS box-bdtitle-mb">最近更新：10月28日(每天更新)</div>
            <div class="conflex">
                <div class="conflex ">
                    <a href="#" class="box-bdtitle-play border-right a-link">
                         <div class="iconall-zanting5"></div>
                        <span>播放</span>
                    </a>
                    <a href="#" class="box-border-radius fontXX box-bdtitle-play a-link">+</a>
                </div>
                <div class="m-2 ">
                    <a href="#" class="a-color conflex box-bdtitle-play border">
                        <div class="icon-add"></div>
                        <span class="a-sizecolor fontSS">({{item.add}})</span>
                    </a>      
                </div>
                <div class="m-2">
                    <a href="#" class="a-color conflex box-bdtitle-play border">
                        <div class="icon-share"></div>
                        <span class="a-sizecolor fontSS">({{item.share}})</span>
                    </a>      
                </div>
                <div class="m-2">
                        <a href="#" class="a-color conflex box-bdtitle-play border asxs">
                            <div class="button2-xiazai"></div>
                            <span class="a-sizecolor fontSS">({{item.down}})</span>
                        </a>      
                </div>
                <div class="m-2">
                    <a href="#" class="a-color conflex box-bdtitle-play border asxs">
                        <div class="button2-comment"></div>
                        <span class="a-sizecolor fontSS">({{item.cot}})</span>
                    </a>      
                </div>


            </div>
        </div> 
    </div>
  </template> 
  <script>  
  export default {
    name: 'WyBangdantitle',
    data:function(){
      return{
        
      }
    },
    components: {
      
    }, props:['item']
  }
  </script>
  <style>
    .WyBangdantitle .a-sizecolor{
        color: #666;
    }
    .WyBangdantitle.box-bdtitle{
        width: 660px;
        padding-bottom: 40px; 
        display: flex;
        align-items: center
    }
    .WyBangdantitle .fontXX{
        font-size: 20px;
    }
    .WyBangdantitle .a-link{
        display: block;
        width: 66px;
        height: 31px;
        background-color: #3E8DD7;
        border-radius: 6px 0px 0px 6px;
        font-size: 14px;
        color: #fff;
        line-height: 31px;
    }
    .axxxx{
        padding: 3px;
        width: 150px;
        height: 150px;
    }
    .WyBangdantitle .box-bdtitle-mb{
        margin-bottom: 20px;
        height: 35px;
        line-height: 35px;
        padding-left: 10px;
    }
    .WyBangdantitle .box-bdtitle-p{
        padding: 10px
    }
    .WyBangdantitle .img-kg{
        width: 150px;
        height: 150px;
    }
    .WyBangdantitle .box-bdtitle-right{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px
    }
    .WyBangdantitle .box-bdtitle-play{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .WyBangdantitle .conflex{
        display: flex
    }
    .WyBangdantitle .box-border-radius{
        width: 33px;
        border-radius: 0px 6px 6px 0px;
    }
    .WyBangdantitle .a-color{
        background-color: #f7f7f7;
        display: flex;
        width: 84px;
        height: 31px;
        align-items: center;
        border-radius: 5px;
    }
    .WyBangdantitle .m-2{
        margin-left: 10px;
    }

  </style>