<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-28 11:08:43
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-28 13:50:25
 * @Description: 考试介绍
-->
<template>
  <view class="exampaper">
    <view class="title">某某某考试 v1.0.0</view>
    <view class="ul">
      <view class="li">
        <text>总分：</text>100
      </view>
      <view class="li">
        <text>时间：</text>60分钟
      </view>
      <view class="li">
        <text>总分：</text>100
      </view>
      <view class="li">
        <text>总分：</text>100
      </view>
    </view>
    <!-- 按钮 -->
    <view class="btns">
      <u-button class="btn" :custom-style="customStyle" size="default" ripple type="primary">查看解析</u-button>
      <u-button class="btn" :custom-style="customStyle" size="default" ripple type="success">开始考试</u-button>
    </view>
    <!-- 介绍 -->
    <view class="summary" v-for="i in 6" :key="i">
      <text class="h1">一、完形填空</text>
      <text class="p">共10题 50分 每题5分</text>
    </view>
  </view>
</template>
<script>
export default {
  data(){
    return{
      customStyle: {
        flexGrow: 1,
        borderRadius: 0
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.exampaper{
  padding: 40rpx 20rpx;
  .title{
    line-height: 60rpx;
    font-size: 40rpx;
    color: #333;
    padding: 20rpx 0;
    text-align: center;
  }
  .ul{
    padding: 40rpx;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .li{
      width: 50%;
      line-height: 60rpx;
      font-size: 28rpx;
      color: #666;
      text{
        color: #333;
      }
    }
  }
  .btns{
    width: 100%;
    display: flex;
    margin-bottom: 40rpx;
    .btn{
      flex: 1;
    }
  }
  .summary {
    display: flex;
    flex-direction: column;
    color: #333;
    overflow: hidden;
    box-sizing: border-box;
    padding: 10rpx 20rpx;
    border-bottom: 1rpx solid #eee;
    .h1 {
      line-height: 60rpx;
      font-size: 28rpx;
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .p {
      line-height: 30rpx;
      font-size: 22rpx;
      color: #999;
      padding-bottom: 20rpx;
      padding-top: 10rpx;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>