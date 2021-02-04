/*
 * @Author: yaohui.hou
 * @Date: 2021-01-19 18:12:06
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-21 11:42:29
 * @Description: 接口列表
 */
import { request } from './index.js'

const baseUrl = 'https://open.qyer.com/ad'

class globleAjax {
  // 发送短信验证码
  /**
   * @method SEND_SMS 发送短信验证码
   * @param {Object} payload 接口参数（
   */
  LOGOUT(data) {
    return request({
      url: 'https://www.uviewui.com/components/button.html',
      data: data ? data : {},
      method: 'GET'
    })
  }
}

export default new globleAjax()
