<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-18 17:58:28
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-21 11:38:56
 * @Description: 登录
-->
<template>
  <view class="login-view">
    <image class="img" src="../../static/imgs/logo.png" mode="widthFix"></image>
    <u-form :model="form" ref="uForm" class="form" :label-style="labelStyle">
      <u-form-item label="学号" prop="studentId">
        <u-input v-model="form.studentId" />
      </u-form-item>
      <u-form-item label="密码" prop="password">
        <u-input v-model="form.password" type="password"/>
      </u-form-item>
    </u-form>
    <u-button class="button" @click="submit">提交</u-button>
  </view>
</template>
<script>
export default {
  data(){
    return{
      labelStyle: {
        color: '#fff'
      },
      form: {
				studentId: '',
				password: '',
			},
      rules: {
				studentId: [
					{ 
						required: true, 
						message: '请输入学号', 
						// 可以单个或者同时写两个触发验证方式 
						trigger: ['change','blur'],
					}
				],
				password: [
					{
						min: 8, 
						message: '密码不能少于8位', 
						trigger: 'blur'
					},
          {
						required: true,
						message: '密码不能为空',
						// 可以单个或者同时写两个触发验证方式
						trigger: 'blur'
					}
				]
			},
      option: null
    }
  },
  onLoad(option){
    this.option = option
    console.log(option);
  },
  // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	onReady() {
		this.$refs.uForm.setRules(this.rules);
	},
  methods:{
    // 用户信息
    setUserInfo(){
      const userinfo = {
        headImg:{
          key: 'headImg',
          name: '头像',
          type: 'img',
          set: false,
          value: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg'
        },
        name:{
          key: 'name',
          name: '名称',
          type: 'text',
          set: true,
          value: 'rancho'
        },
        subjectId:{
          key: 'subjectId',
          name: '学号',
          type: 'text',
          set: false,
          value: '23525434'
        },
        tel:{
          key: 'tel',
          name: '手机号',
          type: 'text',
          set: true,
          value: '18235137651'
        },
        card:{
          key: 'card',
          name: '身份证',
          type: 'text',
          set: true,
          value: '238719791357139457034'
        },
        content:{
          key: 'content',
          name: '学习中心',
          type: 'text',
          set: false,
          value: '中国石油大学东区'
        },
        vocational:{
          key: 'vocational',
          name: '专业',
          type: 'text',
          set: false,
          value: '计算机专业'
        },
        grade:{
          key: 'grade',
          name: '年级',
          type: 'text',
          set: false,
          value: '五年级'
        },
      }
      this.$store.commit('SET_USER_INFO', userinfo)
    },
    submit(){
      // this.show = !this.show
      this.$store.commit('SET_LOGIN', true)
      this.setUserInfo()
      if(this.option.url === 'me'){
        uni.switchTab({
            url: `/pages/me/index`
        });
      }else{
        uni.redirectTo({
          url: `/pages/${this.option.url}/index?type=${this.option.type}`
        });
      }
      
      console.log(this.option.url);
      // this.$ajax.LOGOUT()
      this.$refs.uForm.validate(valid => {
				if (valid) {
					console.log('验证通过');
				} else {
					console.log('验证失败');
				}
			});
    }
  }
}
</script>
<style lang="scss">
.login-view{
  height: 100vh;
  box-sizing: border-box;
  padding-bottom: 140rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #023877;
  .img{
    width: 500rpx;
    margin-bottom: 40rpx;
  }
  .form{
    width: 500rpx;
    input{
      color: #fff;
    }
  }
  .button{
    width: 500rpx;
    margin-top: 80rpx;
  }
}
</style>