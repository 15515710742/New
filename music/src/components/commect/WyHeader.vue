<template>
  <div class="bgBlack cell WyHeader">
    <!-- <span>this is header!!!</span> -->
    <!-- 第一行 -->
    <div class=" bgBlack">
      <div class="contentB cs1">
        <div class="header">
          <!-- 左侧 -->
          <div class="left">
            <!-- logo -->
            <router-link to="/"><div class="topbar-login"></div></router-link>
            <!-- nav -->
            <div>
              <ul class="nav">
                <li class="nav-item" :class="itema.class" v-for="itema in navs">
                  <div class="topbar-sanjiao change1 "></div>
                  <div class="huizhang change2 " :class="itema.hot">{{itema.hotcontent}}</div>
                  <router-link :to="itema.href" >{{itema.title}}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <!-- 右侧 -->
          <div>
            <div class="right">
              <div class="search">
                <div class="topbar-selected"></div>
                <input type="text" placeholder="音乐/视频/电台/用户">
              </div>
              <!-- login -->
              <div class="login">
                <ul class="login-nav" v-if="!this.$store.state.isLogin">
                  <li><router-link to="/login" class="denglu fontCWhite">登录</router-link></li>
                  <li>|</li>
                  <li><router-link to="/register" class="zhuce fontCWhite">注册</router-link></li>
                </ul>
                <ul class="login-nav" v-if="this.$store.state.isLogin "  style="position:relative; left: -40px;">
                    <li><p class="denglu fontCWhite text" style="width:60px">欢迎{{this.$store.state.user_name}}</p></li>
                    <li><p @click="clearAll" class="zhuce fontCWhite " style="width:24px;">注销</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 第二行 -->
    <div class="cs1 bgRed">
      <div class="contentB cs1">
        <ul v-if="change" class="nav-two">
          <li class="nav-item-two" v-for=" item in indexlist">
            <router-link :to="item.href" class="huizhang" :class="item.class">{{item.title}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import qs from 'qs' 
  export default {
    name: "login",
    data: function () {
      return {
        change:"true",
      }
    },
    methods:{
      clearAll(){
        this.$store.commit('$_removeStorage')
      }
    },
    watch:{

    },
    components: {

    },
    props:["indexlist","navs"],
    created(){
      // 获取页面上的location.storage
      if(localStorage.getItem("user_name")!==null&&localStorage.getItem("user_upwd")!==null){
        var uname=localStorage.getItem("user_name");
        var upwd=localStorage.getItem("user_upwd");
        var obj={uname,upwd};
        var url = "http://127.0.0.1:7300/user/login/"
            this.$http.post(url,qs.stringify(obj)).then((res)=>{
              if(res.data.code==1){
                this.$store.commit("$_setStorage",obj)
              }else{
                this.$store.commit('$_setStorage',res.data)
              }
            })
      }

    },
    // beforeCreate(){console.log(1)},
    // beforeMount(){console.log(3)},
    // mounted(){console.log(4)},
    // beforeUpdate(){console.log(5)},
    
  }
</script>
<style scoped>
  .header,
  .left,
  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header {
    width:100%;
  }
  .WyHeader .left {
    width: 700px;
  }
  .WyHeader .left .nav {
    display: flex;
    width: 500px;
    border: none;
  }
  .nav{
    justify-content: start;
  }
  .WyHeader .left .nav .nav-item {
    position: relative;
  }
  .WyHeader .left .nav .nav-item>div {
    position: absolute;
  }

  .WyHeader .change1 {
    bottom: 0px;
    left: 35px;
  }

  .WyHeader .change2 {
    color: white;
    background: #C20C0C;
    right: -10px;
    font-size: 8px;
  }

  .WyHeader .show1 {
    display: block;
  }

  .WyHeader .show2 {
    display: none;
  }

  .WyHeader .left .nav .nav-item>a {
    display: block;
    padding: 25px 15px;
    font-size: 14px;
    color: #ccc;
  }

  .WyHeader .left .nav .nav-item>a:hover,
 {
    color: white;
    background: black;
  }
  .WyHeader .left .nav .nav-item.active>a{
    color: white;
    background: black;
  } 
  .WyHeader .left .nav .nav-item>div.topbar-sanjiao{
    display: none;
  }
  .WyHeader .left .nav .nav-item.active>div.topbar-sanjiao{
    display: block;
  }
 .WyHeader  .nav-two {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

 .WyHeader  .nav-item-two {
    margin: 0 30px;
  }

  .WyHeader .nav-item-two>a {
    font-size: 10px;
    color: white;
  }
  .nav-item-two{
    padding: 5px;
  }
  .WyHeader .nav-item-two>a:hover,
  .WyHeader .nav-item-two>a.active {
    background: #9B0909;
  }

  .WyHeader .search {
    display: flex;
    justify-content: space-between;
    border-radius: 30px;
    height: 30px;
    background: white;
    align-items: center;
    overflow: hidden;
  }
  .WyHeader .login-nav{
    display: flex;
    padding-left: 5px;
  }
  .WyHeader .denglu,.zhuce{
    font-size: 10px;
    padding: 10px;
  }
  .WyHeader .denglu:hover,.zhuce:hover{
    background: rgb(121, 117, 117);
    color: #ccc;
    border-radius: 30px;
  }
  .WyHeader .login{
    padding-left: 40px;
    width: 100px;;
  }

</style>