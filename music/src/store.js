import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)
export default new Vuex.Store({
  state: {        //保存共享数据
    // carCount:0
    // 登陆
    isLogin:false,
    user_name:"",
    user_upwd:""
  },
  mutations: { //操作共享数据 修改共享数据
    // increment(state,num){state.carCount+=num},
    // subtract(state){state.carCount--},
    // clearCount(state){state.carCount=0},
// 登陆
    $_setStorage(state,obj){
      state.isLogin=true;
      state.user_name=obj.uname;
      state.user_upwd=obj.upwd;
      localStorage.setItem("user_name",obj.uname);
      localStorage.setItem("user_upwd",obj.upwd);
    },
    $_removeStorage(state){
      state.isLogin =false;
      state.user_name="";
      state.user_upwd="";
      localStorage.removeItem("user_name");
      localStorage.removeItem("user_upwd")
    }

  },
  getters:{   //时时获取数据，保持监听数据的变化
    // optCount:function(state){
    //   return state.carCount
    // }

  },
  actions: {
    
  }
})
// <!-- <div>
// {{$store.getters.optCount}}
// </div>
// <div>
//   <input type="text" v-model="num" >
// </div>
// <div>
//   <button @click="addCart">aaa</button>
//   <button @click="minusCart">bbb</button>
//   <button @click="clearCart">vvv</button>
// </div> -->
