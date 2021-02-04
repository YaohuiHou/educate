/*
 * @Author: yaohui.hou
 * @Date: 2021-01-19 18:24:03
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-21 11:53:09
 * @Description: vuex公共参数
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
  state: {
    // 登录状态
    login: false,
    token: '',
    // 个人信息
    userinfo: null
  },
  mutations: {
    // 设置登录状态
    SET_LOGIN(state, type) {
      // 变更状态
      state.login = type
    },
    // 设置个人信息
    SET_USER_INFO(state, userinfo){
      state.userinfo = userinfo
      // 执行ajax
      // Vue.prototype.$ajax.LOGOUT().then(res=>{
      //   console.log(res);
      // })
    }
  }
})
export default store