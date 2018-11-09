<template>
    <div class="similar">
        <h5><span>相似歌曲</span></h5>
         <ul>
             <li v-for="item in list">
                <div>
                    <div>
                        <a href="#">{{item.s_name}}</a>
                    </div>
                    <div class="text">
                        <a href="#" v-for="name in item.autor">{{name}}</a>
                    </div>
                </div>
                <div>
                    <a href="#" class="icon">
                        <div class="ck-icon"></div>
                        <div class="icon-add-1"></div>
                    </a>
                </div>
             </li>
         </ul>          
    </div>
</template>
<script>
    export default{
        name:"WyCK",
        data:function(){
            return {
                list:[
                    {id:1,s_name:"年少有为",autor:["李荣浩"]},
                    {id:2,s_name:"流浪",autor:["Mc半阳","/Fi9江澈"]},
                    {id:3,s_name:"侧脸",autor:["于果",]},
                    {id:4,s_name:"目不转睛",autor:["王以太"]},
                    {id:5,s_name:"去年夏天",autor:["王大毛"]}
                ]
            }
        }
      }
</script>
<style>
.similar h5{
    width:200px;
    height: 24px;
    margin-bottom: 20px;
    color: rgb(51, 51, 51);
    border-bottom: 1px solid rgb(204, 204, 204);
}
.similar>h3>span{
    float: left;
}
.similar>ul>li{
    display: flex;
    justify-content:space-between;
    align-items: center;
    width:200px;
    height:40px;
}
.similar>ul>li a{
    color:#333;
    font-size:12px;
}
.similar>ul>li>div>.icon{
    display: flex;
    justify-content: start;
    align-items: center;
}
.similar>ul>li>div>.icon>div{
    margin-left:10px;
}
.similar>ul>li>div>.text>a{
    color:#9999B2;
}
</style>