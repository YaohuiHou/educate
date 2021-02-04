/*
 * @Author: yaohui.hou
 * @Date: 2021-01-19 18:12:06
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-21 11:40:57
 * @Description: ajax公共组件
 */
import store from '@/store/index.js';
export function request(options) {
  // 公共参数
  // client_id= qyer_android&client_secret=9fcaae8aefc4f9ac4915
  // client_id=qyer_ios&client_secret=cd254439208ab658ddf9

  let { url, data, method } = options
  let obj = {}
  if (store.state.login) {
    obj.oauth_token = store.state.token
  }
  data = Object.assign(data, obj) || obj
  return new Promise((resolve, rejext) => {
    uni.request({
      url: url, //仅为示例，并非真实接口地址。
      data: data,
      method: method || 'GET', //默认请求方式是get
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: res => {
        console.log(store.state.login,'测试测试');
        resolve(res)
      }
    })
  })
}
