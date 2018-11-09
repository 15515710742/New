<template>
  <div>
      <div class="item" >
          <a href="#">
            <div class="coverall-4-1"></div>
            <div class="coverall-1-5"></div>
            <div class="iconall-zanting8 change"></div>
            <img :src="item.pic" alt="">
          </a>
          <a href="#" class="text">{{item.name}}</a>
          <a href="#" class="text fontCGray">{{item.title}}</a>
        </div>
      </div>
  </div>
</template>
<script>
export default {
    name: 'WyCoNewsonge',
    data:function(){
      return{}
    },
    components: {
    },
    props:["item"]
}
</script>
<style scoped>
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
</style>