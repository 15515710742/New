<template>
    <div class="content-box">
      <div class="content" v-if="!this.$store.state.isLogin" >
          <div class="fontCGray">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</div>
          <router-link to="/login" class="index-button fontCWhite">用户登录</router-link>
      </div>
      <div v-if="this.$store.state.isLogin" class="content-login" >
        <div>
          <img src="http://127.0.0.1:7200/image/login/gedan/109951163452730083.jpg" alt="">
        </div>
        <div>欢迎回来！{{this.$store.state.user_name}}</div>
      </div>
    </div>
  </template>  
  <script>  
  export default {
    name: 'WyIndexlogin',
    data:function(){
      return{
      }
    },
    components: {
      
    }
  }
  </script>
  <style scoped>
    .content-box{
      padding: 15px;
      
    }
    .content-login{
      width: 100%;
      height: 110px;
      display: flex;
    }
    .content-login>div:first-child{
      border: 1px solid #ccc;
      padding: 2px;
      width: 104px;
    }
    .content-login>div>img{
      height: 100%;
    }
    .content-login>div:last-child{
      padding: 5px;
    }
    .content{

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .content>div:first-child{
      font-size: 14px;
      padding:15px;
    }
    .index-button {
      text-align: center;
      line-height: 32px;
      font-size: 14px;
      margin: 10px;
    }
  </style>