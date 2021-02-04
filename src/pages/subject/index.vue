<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-19 19:40:52
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-25 17:05:20
 * @Description: 科目练习
-->
<template>
  <view class="subject">
    <u-navbar :title="title" title-width="0">
      <view class="slot-wrap" @click="show = !show">
        {{title}}<u-icon class="arrow-down" size="14" name="arrow-down-fill"></u-icon>
			</view>
    </u-navbar>
    <view class="btns">
      <u-button class="btn" :ripple="true" plain type="primary">知识点练习</u-button>
      <u-button class="btn" :ripple="true" plain type="primary">每日一练</u-button>
      <u-button class="btn" :ripple="true" plain type="primary">模拟考试</u-button>
      <u-button class="btn" :ripple="true" plain type="primary">辅导回放</u-button>
    </view>
    <u-picker
      v-model="show"
      mode="selector"
      :range="selectorObj"
      range-key="cateName"
      @confirm="changeSubject"
    ></u-picker>
  </view>
</template>
<script>
export default {
  data(){
    return{
      show: false,
      type: '',
      title: '',
      value: '',
      selectorObj: [
        {
          cateName: '大学英语B',
          id: 1
        },
        {
          cateName: '计算机应用基础',
          id: 2
        },
        {
          cateName: '大学语文',
          id: 3
        },
        {
          cateName: '高等数学',
          id: 4
        }
      ],
      subject:{
        'en': '大学英语B',
        'jc': '计算机应用基础',
        'cn': '大学语文',
        'ma': '高等数学'
      }
    }
  },
  onLoad(option){
    console.log(option);
    if(option.type){
      // uni.setNavigationBarTitle({
      //     title: this.subject[option.type]
      // });
      this.type = option.type
      this.title = this.subject[option.type].cateName
    }
  },
  methods:{
    gotoLink(url){
      if(this.$store.state.login){
        // 登录
         uni.navigateTo({
            url: `/pages/login/index?url=${url}&type=${this.type}`
        });
      }else{
        // 未登录
        uni.navigateTo({
            url: `/pages/login/index?url=${url}&type=${this.type}`
        });
      }
    },
    // 选中科目
    changeSubject(e){
       this.type = e[0]
      this.title = this.selectorObj[e[0]].cateName
    }
  }
}
</script>
<style lang="scss">
.subject{
  height: 100vh;
  .btns{
    height: 80vh;
    box-sizing: border-box;
    padding: 50rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .btn{
    width: 100%;
    margin-bottom: 80rpx;
  }
}
.slot-wrap {
  display: flex;
  flex: 1;
  align-items: center;
  .arrow-down{
    margin-left: 10rpx;
  }
}
</style>