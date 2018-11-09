<template>
    <div class="vip">
        <div>
            <div class="title">
                <a href="#" @click="update">
                    <div :class="isOK ? classA : classB"></div>
                    <span>创建的歌单(2)</span>
                </a>
                <a href="#" class="create">
                    <div class="ck-icon-1"></div>
                    <span>新建</span>
                </a>
            </div>
            <ul>
                <li>
                    <div><img src="http://127.0.0.1:7200/image/login/ck/3397490930543093.jpg" alt=""></div>
                    <div>
                        <div><a href="#" title="我喜欢的音乐">我喜欢的音乐</a></div>
                        <p>0首</p>
                    </div>
                </li>
                 <li v-for="item in likeList"  v-if="item.id>3" class="bg">
                    <div><img :src="item.src"></div>
                    <div>
                        <div><a href="#" :title="item.title">{{item.title}}</a></div>
                        <p>{{item.num}}首</p>
                    </div>
                    <div class="none">
                        <div class="icon-write"></div>
                        <div class="icon-delete"></div>   
                    </div>
                </li>
            </ul>                    
        </div>
    </div>  
</template>
<script>
    export default{
        name:"WyHy",
        data:function(){
            return {
                likeList:[
                    {id:1,src:"http://127.0.0.1:7200/image/login/ck/2002210674180197.jpg",title:"喜欢的",num:19},
                    {id:2,src:"http://127.0.0.1:7200/image/login/ck/2002210674180197.jpg",title:"讨厌的",num:10},
                    {id:3,src:"http://127.0.0.1:7200/image/login/ck/2002210674180197.jpg",title:"惊喜的",num:11},
                    {id:4,src:"http://127.0.0.1:7200/image/login/ck/2002210674180197.jpg",title:"恐惧的",num:16},
                    {id:5,src:"http://127.0.0.1:7200/image/login/ck/2002210674180197.jpg",title:"惊悚的",num:18}
                ],
                isOK:true,
                classA:"ck-icon-bottom",
                classB:"ck-icon-right",
            }                          
        },
        methods:{
            update(){
            }
        },
        created(){}
        
    }
</script>
<style>
.vip .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width:200px;
    height:30px;
    background: #F2F2F2;
}
.vip .title>a:first-child{
    display: flex;
    justify-content: start;
    align-items: center;
    font-weight: bold;
    font-family:"simsun";
}
.vip .title>a:first-child>span{
    margin-left:4px;
}
.vip .title .create{
    display:flex;
    width:50px;
    height:22px;
    background:#F3F3F3;
    border-radius:3px;
    border:1px solid #C4C4C4;
    justify-content: space-around;
    align-items: center;   
}
.vip .title .create span{
    font-size:14px;
    color:#333;
    font-family:"simsun";
}
.vip ul>li>div:first-child{
    width:40px;
    height:40px;
}
.vip ul{
    margin-top:10px;
}
.vip ul li{
    display: flex;
    justify-content:start;
    align-items: center;
    width:200px;
    height:50px;
    padding: 2px;
}
.vip ul li:hover{
    cursor: pointer;
}
.vip ul>li>div:nth-child(2){
    margin-left: 10px;
    font-size:14px;   
}
.vip ul>li>div:nth-child(2)>p{
    margin-top:4px;
    color:#9999A3;
}
.vip ul>li>.none{
    display: none;  
}
.vip ul>li>.none>div{
    margin-left: 10px;
}
.vip ul .bg:hover{
    background: #e6e6e6;
}
.vip ul>li:hover>.none{
    display: flex;
    justify-content: start;
    margin-left:50px;
}
</style>