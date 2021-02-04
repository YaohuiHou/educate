<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-20 21:16:09
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-21 13:33:41
 * @Description: 个人信息中心
-->
<template>
  <view class="userinfo">
    <view class="info-item" v-for="(item,key) in userinfo" :key="key" @click="gotoLink(item.set,key)">
      <text class="title">{{item.name}}</text>
      <view class="item-content">
        <text class="text" v-if="item.type === 'text'">{{item.value}}</text>
        <u-avatar v-if="item.type === 'img'" class="head-img" :src="item.value" mode="square" size="100" img-mode="aspectFill"></u-avatar>
        <u-icon :style="item.set ? '' : 'opacity: 0;'" name="arrow-right" color="#999" size="32"></u-icon>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data(){
    return{
      userinfo: {
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
    }
  },
  onShow(){
    this.userinfo = this.$store.state.userinfo
  },
  methods:{
    gotoLink(set,type){
      // 不能设置不跳转
      if(!set) return;
      uni.navigateTo({
        url: `/pages/userinforevise/index?formType=${type}`
      });
    }
  }
}
</script>
<style lang="scss">
.userinfo{
  height: 100vh;
  background: #f5f5f5;
  .info-item{
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 10rpx 5rpx 10rpx 30rpx;
    min-height: 100rpx;
    background: #fff;
    border-bottom: 1rpx solid #eee;
    .title{
      font-size: 32rpx;
      line-height: 60rpx;
      font-size: #333;
    }
    .item-content{
      display: flex;
      align-items: center;
      .text{
        margin-right: 20rpx;
        font-size: 28rpx;
        line-height: 60rpx;
        font-size: #999;
      }
      .head-img{
        margin-right: 20rpx;
      }
    }
  }
}
</style>