<template>
    <div class="box">
      <!-- 导航 -->
      <div class="nav ">
          <div class="nav-left">
            <div class="index-circle"></div>
            <div>注册</div>
          </div>    
          <div>
            <a href="#" class="more">
              <router-link to="/login" class="fontSS fontCGray">登录</router-link>
              <div class="index-jiantou1 change"></div>
            </a>
          </div>
      </div>
      <!-- 内容 -->
      <div>
          <form id="f3">
              <div class="border" :class="arr">
                <div> 用户名</div>
                <input type="text" class="lg" v-model="uname" @blur="testuname" placeholder="请输入用户名" required minlength="2" maxlength="18">
              </div>
              <span class="text" v-text="msg"></span>
              <div class="border" :class="arr1">
               <div>密码</div> 
                <input type="password" class="lg" v-model="upwd" @blur="testupwd" placeholder="请输入密码">
              </div>
              <span class="text" v-text="msg1"></span>
              <div class="border" :class="arr2">
               <div>确认密码</div> 
                <input type="password" class="lg" v-model="cpwd" @blur="test" placeholder="确认密码">
              </div>
              <span class="text" v-text="txt"></span>
              <div class="border" :class="arr3">
               <div>手机号</div> 
                <input type="text" class="lg" v-model="phone" placeholder="请输入手机号码" @blur="testphone">
              </div>
              <span class="text" v-text="msg2"></span>
              <div class="border" :class="arr4">             
               <div>电子邮件</div> 
                <input type="email" class="lg" v-model="email" @blur="testemail" placeholder="请输入邮箱地址">
              </div>
              <span class="text" v-text="msg3"></span>
              <div class="border">
                <div> 验证码</div>
                <input type="text"  placeholder="输入验证码">
                <div class="cavse border"></div>               
              </div>
              <span class="text"></span>
              <div class="border">
                <input type="button" value="注册" class="button" @click="register">
                <input type="reset" value="清空" class="reset">
              </div>
              </form>  
      </div>
    </div>
</template>
  <script>
  import qs from 'qs'  
  export default {
    name: 'WyRegister',
    data(){
        return {
          uname:"",
          upwd:"",
          cpwd:"",
          phone:"",
          email:"",
          isRegister:false,
          msg:"",
          msg1:"",
          msg2:"",
          msg3:'',
          txt:"",
          danger:"danger",
          success:"success",
          arr:"",
          arr1:"",
          arr2:"",
          arr3:"",
          arr4:"",
        }
    },
    methods:{      
        testuname(){
          var obj = this.uname;
          var url = "http://127.0.0.1:7300/user/test?uname="+obj;
          this.$http.get(url).then((res)=>{
               if(res.data.code==1){
                  this.msg=res.data.msg;
                  this.arr=this.danger;
                  this.uname="";
                  this.isRegister=false;
              }else if(res.data.code==0){
                  this.msg=res.data.msg;
                  this.arr=this.danger;
                  this.isRegister=false;
              }else{
                this.msg=res.data.msg;
                this.arr=this.success;
                this.isRegister=true;
              }
          })
        },
        testupwd(){
            var reg= /^\w{6,16}$/;
            if(reg.test(this.upwd)){
                this.msg="";
                this.msg1="密码格式正确";
                this.arr1=this.success;
            }else{
              this.msg1="密码格式错误";
              this.arr1=this.danger;
              this.upwd=""
            }
        },
        test(){
          if(!this.upwd){
            this.arr2=this.danger;
          }else if(this.upwd == this.cpwd){
              this.txt=""
              this.arr2=this.success;         
          }else{
              this.txt="两次密码不一致请重新输入!";
              this.msg1="";
              this.arr2=this.danger;
          }
        },
        testphone(){
            var reg=/^(\+86|0086)?\s*1[3-8]\d{9}$/;
            if(reg.test(this.phone)){
              this.msg1="";
              this.msg2="手机号码格式正确";
              this.arr3=this.success;
            }else{
              this.msg2="手机号码格式错误";              
              this.phone="";
              this.arr3=this.danger;
            } 
        }, 
        testemail(){
          var reg=/^[^.@]+@[^.@]+\.(com|cn|net)(\.cn)?$/
          if(reg.test(this.email)){
            this.msg3="邮箱格式正确";            
            this.msg2="";
            this.arr4=this.success;
          }else{
            this.msg3="邮箱格式错误";           
            this.email="";
            this.arr4=this.danger;
          }
        },      
        register(){
            if(this.isRegister==true){              
                var obj={
                  uname:this.uname,
                  upwd:this.upwd,
                  cpwd:this.cpwd,
                  phone:this.phone,
                  email:this.email
                }
                var url = "http://127.0.0.1:7300/user/register/"
                this.$http.post(url,qs.stringify(obj)).then((res)=>{                
                  if(res.data.code==200){
                      confirm(res.data.msg);
                      this.$router.push("/login");
                  }else{
                      confirm(res.data.msg);
                      this.$router.go(0);
                  }                    
                });                
            }else{
              confirm("请检查注册信息");
              this.$router.go(0);
            }
        }
    },
    watch:{
  
    },
    components: {
      
    }
  }
  </script>
  <style scoped>
    @import "../assets/css/index.css";
    .box{
      min-height: 300px;
      width: 600px;
      background: white !important;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content:start !important;
      padding: 10px;
      margin-bottom:50px; 
    }
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
      min-height: 280px;
      padding: 10px;
      width: 550px;
      border: 2px solid #C20C0C;
      border-radius: 10px;
      margin: 10px;
    }
    #f3>div{
      background: #F5F5F5;     
      border-radius: 10px;
      justify-content: space-between;
      display: flex;
      align-items: center;
      padding: 10px 50px;
    }
    #f3>.text{
      display: inline-block;
      height:16px;
      width:100%;
      font-size:14px;
      text-align: center;
      line-height:16px;
      color:#A60B0B;
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
      width:70%;
    }
    .button,.reset{
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
  </style>