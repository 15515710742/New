<template>
  <div class="box-bangdanlist">
    <div class="box-bangdanlist-left">
      <img :src="item.pic" alt="">
    </div>
    <div class="box-bangdanlist-right">
      <div>{{item.title}}</div>
      <div>{{item.updata}}</div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'WyBangdanlist',
  data:function(){
    return {

    }
  },
  methods:{
    
  },
  components: {

  },
  props:["item"]
}
</script>
<style>
.box-bangdanlist{
  width: 100%;
  height: 62px;
  display: flex;
  box-sizing: border-box;
  padding: 10px 0 10px 20px ;
  justify-content: start;

}
.box-bangdanlist:hover,.box-bangdanlist.active{
  background: #E6E6E6;
}
.box-bangdanlist-left img{
  height: 100%;
  width: 42px;
}
.box-bangdanlist-right{
  font-size: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 10px;
}
.box-bangdanlist-right>:last-child{
  color: #999999;
}
</style>