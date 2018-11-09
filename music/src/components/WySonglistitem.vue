<template>
    <div class="list">
        <div class="list-item">
            <span>{{item.id}}</span>
            <span>NEW</span>
        </div>
        <div class="list-icon">
            <div class="icon">
                <img  v-if="item.id<4" :src="item.src">
                <div class="index-bofang-small-1"></div>
                <a href="#">{{item.songName}}</a>
                <span></span>
            </div>
        </div>
        <div class="list-item show">
            <span>04:33</span>
        </div>
        <div class="list-item hide">
            <div class="icon-add-1"></div>
            <div class="icon-add"></div>
            <div class="icon-share"></div>
        </div>
        <div class="list-item">
            <a href="#" v-for="names in item.author">{{names.name}}</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'WySonglistitem',
    data:function(){
      return{

      } 
    },
    components:{},
   props:['item']
  }
</script>
<style>
.list{
    width: 100%;
    height: 70px;
    display:flex;
    justify-content:space-between;
}
.list .list-icon{
    width:400px;
    height:70px;
    line-height:70px;
}
.list .list-icon .icon{
    display: flex; 
    align-items: center;
    justify-content: start;
}
.list .list-icon .icon div,
.list .list-icon .icon a,
.list .list-icon .icon span{
    margin-left: 10px;
} 
.list .list-item{
    width:90px;
    height:70px;
    line-height:70px;
    text-align:center;
}
.list .hide{
    display:none;
}
.list:hover .hide{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.list:hover .show{
    display:none;
}
.list .icon a,
.list .list-item a,
.list .list-item span{
    font-size:12px;
    color: #333;
}
.list>div:first-child{
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.list>div:first-child>span{
    display: block;
    width:40px;
    height:40px;
    text-align: center;
    line-height:40px;
}
.list>div:first-child>span:last-child{
    font-size:12px;
    color:#268431;
}

</style>