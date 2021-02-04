<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-20 22:12:21
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-21 13:54:23
 * @Description: 密码修改
-->
<template>
  <view class="password">
    <u-form :model="form" ref="uForm" class="form" :label-style="labelStyle">
      <u-form-item
        v-for="(item, i) in formList[formType].form"
        :key="i"
        :label="item.title"
        :maxlength="item.maxlength ? item.maxlength : 20"
        label-width="200rpx">
        <u-input v-model="form[item.id]" :type="item.type"/>
      </u-form-item>
    </u-form>
    <u-gap height="80" bg-color="#fff"></u-gap>
    <u-button class="button" type="primary" plain @click="submit">提交</u-button>
  </view>
</template>
<script>
export default {
  data(){
    return{
      labelStyle: {
        color: '#333'
      },
      // 提交数据
      form:{},
      formType: '',
      formList: {
        name: {
          title: '姓名修改',
          form: [
            {
              title: '名字',
              id: 'name',
              value: '',
              type: 'text'
            }
          ]
        },
        tel:{
          title: '手机修改',
          form: [
            {
              title: '手机',
              id: 'tel',
              value: '',
              type: 'number',
              maxlength: 11
            }
          ]
        },
        card: {
          title: '身份证修改',
          form: [
            {
              title: '身份证',
              id: 'card',
              value: '',
              type: 'idcard',
              maxlength: 14
            }
          ]
        },
				password: {
          title: '密码修改',
          form: [
            {
              title: '原密码',
              id: 'oldpassword',
              value: '',
              type: 'password'
            },
            {
              title: '新密码',
              id: 'newpassword',
              value: '',
              type: 'password'
            },
            {
              title: '确认密码',
              id: 'password',
              value: '',
              type: 'password'
            }
          ]
        }
			}
    }
  },
  onLoad(option){
    this.formType = option.formType
    uni.setNavigationBarTitle({
      title: this.formList[this.formType].title
    });

    // 设置值
    if(this.formType !== 'password'){
      this.$set(this.formList[this.formType].form[0],'value',this.$store.state.userinfo[this.formType].value)
      this.form[this.formType] = this.$store.state.userinfo[this.formType].value
    }else{
      this.form = {
        password:'',
        oldpassword:'',
        newpassword:''
      }
    }
  },
  // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
	// onReady() {
	// 	this.$refs.uForm.setRules(this.rules);
	// },
  methods:{
    submit(){
      uni.navigateBack({
        delta: 1
      });
    }
  }
}
</script>
<style lang="scss">
.password{
  height: 100vh;
  box-sizing: border-box;
  padding: 30rpx;
  .form{
    width: 100%;
    input{
      color: #000;
    }
  }
  .button{
    display: block;
    width: 100%;
  }
}
</style>