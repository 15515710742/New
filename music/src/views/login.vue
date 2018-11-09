<template>
    <!-- this is 登录-->
    <div>
      <wy-header :indexlist="indexlist" :navs="navs"></wy-header>
      <div class="box">
        <wy-login></wy-login>
      </div>
      <wy-footer></wy-footer>
    </div>
</template>
<script>
import WyHeader from '@/components/commect/WyHeader.vue'
import WyFooter from '@/components/commect/WyFooter.vue'
import WyLogin from '@/components/WyLogin.vue'



export default {
name: 'login',
data:function(){
  return{
    indexlist:[],
        navs:[
          {title:"发现音乐",href:"/",hot:"show2",hotcontent:"",class:""},
          {title:"我的音乐",href:"/mysonglist",hot:"show2",hotcontent:"",class:""},
          {title:"朋友",href:"#",hot:"show2",hotcontent:"",class:""},
          {title:"商城",href:"#",hot:"show2",hotcontent:"",class:""},
          {title:"音乐人",href:"#",hot:"show2",hotcontent:"",class:""},
          {title:"下载客户端",href:"#",hot:"show1",hotcontent:"hot",class:""},

        ]
  }
},
components: {
  WyHeader,WyFooter,WyLogin
}
}
  </script>
  <style >
    .box{
      min-height: 500px;
      background-image:linear-gradient(120deg ,black 30% ,#C20C0C 100% );
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top:40px; 
    }
  </style>