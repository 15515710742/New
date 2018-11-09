<template>
    <div class="box ">
      <!-- 导航 -->
      <div class="nav ">
            <div class="nav-left">
              <div class="index-circle"></div>
              <div>登录</div>
            </div>    
            <div>
              <a href="#" class="more">
                <router-link class="fontSS fontCGray" to="/register">注册</router-link>
                <div class="index-jiantou1 change"> </div>       
              </a>
            </div>
        </div>
        <!-- 内容 -->
        <div>
          <form id="f3">
              <div class="border" :class="unameClass">
                  <div> 用户名</div>
                  <input type="text" class="lg" v-model="uname" :class="unameClass">
              </div>
              <div class="border" >
                  <div>密码</div> 
                  <input type="password" class="lg" v-model="upwd">
              </div>
              <div class="border">
                  <div> 验证码</div>
                  <input type="text">
                  <div class="cavse border">
                      <wy-yan></wy-yan>
                  </div>               
              </div>
              <div class="border">
                  <input type="button" value="登录" class="button" @click="getInfo">
                  <input type="reset" value="清空" class="reset">
              </div>
          </form>  
        </div>
    </div>
  </template> 
  <script>
  import WyYan from '@/components/commect/yzm.vue'
  import qs from 'qs'  
  export default {
      name: 'WyLogin',
      data(){
          return {
              uname:"",
              upwd:"",
              unameClass:"",
              danger:"danger",
              success:"success",
              a:[]             
          }
      },
      methods:{
          getInfo(){
            var obj={uname:this.uname,upwd:this.upwd}
            var url = "http://127.0.0.1:7300/user/login/"
            this.$http.post(url,qs.stringify(obj)).then((res)=>{
              if(res.data.code==1){
                 confirm(res.data.msg) 
                this.$store.commit("$_setStorage",obj)
                 this.$router.push("/");               
              }else{
                  // this.$store.commit('$_setStorage',res.data)
                  confirm(res.data.msg);
                  this.$router.go(0);
              }
            })   
          }
      },
      watch:{
        async uname(){
          var url="http://127.0.0.1:7300/user/test"
          url+=`?uname=${this.uname}`
          var res=await this.$http.get(url);
          if(res.data.code==-1){
            this.unameClass=this.danger
          }else{
            this.unameClass=this.success;
          }
        }
      },
      components:{WyYan}       
  }
  </script>
  <style scoped lang="scss">
    @import "../assets/css/index.css";
    .box{
      min-height: 300px;
      width: 600px;
      background: white;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content:start;
      padding: 10px;
    .danger{
      background: rgba(233, 87, 87, 0.3) !important;
      border-color:#C20C0C !important;
    }
    .success{
      background: rgba(132, 223, 132, 0.3) !important;
      border-color: rgb(82, 139, 24);
    }
    .nav{
      width: 100%;
    }
    #f3{
      display: flex;
      flex-direction: column;
      height: 280px;
      padding: 10px;
      width: 550px;
      border: 2px solid #C20C0C;
      border-radius: 10px;
      margin: 10px;
    }
    #f3>div{
      background: #F5F5F5;
      height: 100px;
      margin: 10px;
      border-radius: 10px;
      justify-content: space-between;
      display: flex;
      align-items: center;
      padding: 0 50px;
    }
    .cavse{
      width: 100px;
      height: 30px;
    }
    #f3>div>input{
      height: 30px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    #f3>div>input.lg{
      width: 70%;
    }
    .button,
    .reset{
      width: 30%;
      background: #C20C0C;      
      text-align: center;
      border-radius: 5px;
      color: white;
    }
    .button:hover,
    .reset:hover{
     cursor: pointer;
    }
  }
  </style>