import Vuex from "vuex";
import Vue from "vue";
import apis from "@/core/api"
import {
  Indicator
} from 'mint-ui';
import {
  MessageBox
} from 'mint-ui';
import Store from 'storejs'
Vue.use(Vuex);
// Vuex作用是什么? 全局状态管理

//理解为 组件内部  data 属性
const state = {
  
}
//定义  methods 同步方法   视图调用     this.$store.commit("xxxx",val)
const mutations = {
  // 没有第三个参数
  // 在函数内部去  statet

  

}
// 定义 compunted  属性计算
const getters = {
  

}
// --------------
//定义 异步方法 通用接口调用    视图调用     this.$store.dispatch("xxxx",val)
const actions = {
  // test(context,data){
  //     console.log(context)  //可以调用  mutations 方法    actions调actions自己的方法,也可以使用 getters,也可以使用state
  //     // apis.getItem().then((res)=>{
  //         // console.log(res)
  //     // })
  // },
 
  
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})
