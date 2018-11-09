<template>
    <div>
        <div class="item">
            <a href="#" class="item-t">
              <div class="coverall-1-1 change"></div>
              <div class="item-nav">
                <div>
                  <div>
                    <div class="iconall-erji"></div>
                    <div class="fontCWhite nub">{{item.number}}</div>
                  </div>
                  <div class="iconall-zanting8"></div>
                </div>
              </div>
              <div>
                <img :src="item.pic" alt="">
              </div>
            </a>
            <a href="#" class="item-b">{{item.name}}</a>
          </div>
    </div>
  </template>
  <script>
  export default {
      name: 'WyCoHot',
      data:function(){
        return{}
      },
      components: {
      },
      props:["item"]
  }
  </script>
  <style >
.item{
  float: left;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 140px;
  height: 178px;
  overflow: hidden;
}
.item>a{
    display: block;
}
.item>a.item-t{
  height: 140px;
  position: relative;
}
.item>a.item-t>.change{
  position: absolute;
  top:-1px;
}
.item-nav{
  background: rgba(0,0,0,0.4);
  position: absolute;
  width: 140px;
  height: 25px;
  bottom: 0px;
}
.item-nav>div,.item-nav>div>div{
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 25px;
  margin: 0 5px;
}
.item-nav>div .nub{
  font-size:12px; 
}
.item-b{
  width: 140px;
  font-size: 14px;
}
  </style>