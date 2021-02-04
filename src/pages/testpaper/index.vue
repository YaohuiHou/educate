<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-28 13:52:40
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-28 18:27:53
 * @Description: 开始考试
-->
<template>
  <view class="testpaper">
    <view class="header">
      <view class="number">
        <text>试卷总分：100</text>
        <text>答题时间：60分钟</text>
      </view>
      <!-- 倒计时 -->
      <view class="timer" v-if="showTimer">
        <u-icon class="icon" name="clock" color="#666" size="28"></u-icon>
        <u-count-down :timestamp="timestamp" font-size="24" color="#666"></u-count-down>
      </view>
      <!-- 答题数 -->
      <view class="count">
        <u-count-to :start-val="0" :end-val="overnum" font-size="24" color="#999"></u-count-to>/{{count}}
      </view>
    </view>
    <!-- 题目详情 -->
    {{pageNum}}
    <!-- 吸低 -->
    <view class="footer">
      <u-icon @click="chooseQuestions(-1)" name="arrow-leftward" :color="pageNum <= 0 ? '#999' : '#333'" size="45"></u-icon>
      <view class="center">
        <view class="card btn" @click="showPop = !showPop">
          <u-icon class="icon" name="calendar-fill" color="#19be6b" size="42"></u-icon>
          <text>答题卡</text>
        </view>
        <view class="collect btn" @click="collectExam">
          <u-icon class="icon" name="star-fill" :color="collect?'#ff9900':'#999'" size="42"></u-icon>
          <text>收藏</text>
        </view>
        <view class="btn">
          <u-icon class="icon" name="error-circle" :color="resolve?'#2979ff':'#999'" size="42"></u-icon>
          <text>解析</text>
        </view>
        <u-button type="success">提交答卷</u-button>
      </view>
      <u-icon @click="chooseQuestions(1)" name="arrow-rightward" :color="pageNum >= count ? '#999' : '#333'" size="45"></u-icon>
    </view>
    <!-- 弹出层 -->
    <u-popup v-model="showPop" mode="left" width="500rpx" closeable>
      <view class="popup">
        <view class="ol">
          <!-- <view class="h3">一、完形填空</view> -->
          <view
            :class="['li', i == 3 ? 'error' : '',i == 9 ? 'success' : '']"
            v-for="i in 300" :key="i"
          >{{i}}</view>
        </view>
        <!-- 提示 -->
        <view class="points">
          <view class="point info">未答</view>
          <view class="point primary">已答</view>
          <view class="point success">答对</view>
          <view class="point error">答错</view>
        </view>
      </view>
    </u-popup>
  </view>
</template>
<script>
export default {
  data(){
    return{
      showPop:false,
      // 当前试题页
      pageNum: 0,
      // 完成的试题
      overnum: 4,
      // 题目总数
      count: 12,
      // 倒计时
      timestamp: 0,
      // 显示倒计时
      showTimer: false,
      collect: false,
      resolve: false
    }
  },
  onLoad(){
    uni.setNavigationBarTitle({
      title: '新标题'
    });

    // 倒计时
    this.showTimer = true
    this.timestamp = 60*60
  },
  methods:{
    // 收藏题目
    collectExam(){
      this.collect = !this.collect
    },
    // 选择试题
    chooseQuestions(i){
      if(this.pageNum <= 0 && this.pageNum >= this.count) return;

      this.pageNum += i;

      // 当前是否为收藏项
      this.collect = true
    }
  }
}
</script>
<style lang="scss">
.testpaper{
  padding-bottom: 80rpx;
  .header{
    height: 80rpx;
    padding: 10rpx 20rpx;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #f5f5f5;
    .number{
      display: flex;
      flex-direction: column;
      line-height: 36rpx;
      font-size: 24rpx;
      color: #666;
    }
    .timer{
      font-size: 24rpx;
      color: #666;
      .icon{
        margin-right: 6rpx;
      }
    }
    .count{
      font-size: 24rpx;
      color: #333;
    }
  }
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100rpx;
    background: #fff;
    box-shadow: 0 1px 10px 1px #666;
    box-sizing: border-box;
    padding: 0 20rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .center{
      display: flex;
      align-items: center;
      padding: 0 20rpx;
      .btn{
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 0 20rpx;
        text-align: center;
        .icon{
          justify-content: center;
          text-align: center;
        }
        text{
          display: block;
          font-size: 20rpx;
          color: #666;
          line-height: 30rpx;
          padding-top: 10rpx;
        }
      }
    }
  }
  .popup{
    position: relative;
    height: 100vh;
    box-sizing: border-box;
    padding: 100rpx 40rpx 80rpx;
    .ol{
      height: 100%;
      overflow: auto;
      display: flex;
      flex-wrap: wrap;
      .li{
        margin: 0 20rpx 20rpx 0;
        width: 64rpx;
        height: 64rpx;
        text-align: center;
        line-height: 64rpx;
        font-size: 28rpx;
        color: #333;
        border: 1rpx solid #999;
        border-radius: 50%;
        background: #fff;
        &.error{
          border-color: #fa3534;
          color: #fa3534;
          background: #fef0f0;
        }
        &.success{
          border-color: #19be6b;
          color: #19be6b;
          background: #dbf1e1;
        }
        &.primary{
          border-color: #2979ff;
          color: #2979ff;
          background: #ecf5ff;
        }
      }
    }
    .points{
      position: absolute;
      left: 0;
      bottom: 20rpx;
      width: 100%;
      height: 60rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      .point{
        position: relative;
        padding: 0 20rpx 0 40rpx;
        font-size: 24rpx;
        color: #666;
        line-height: 30rpx;
        &:before{
          content:'';
          position: absolute;
          left: 0;
          top: 0;
          width: 30rpx;
          height: 30rpx;
          box-sizing: border-box;
          border: 1rpx solid #999;
          border-radius: 50%;
          background: #fff;
        }
        &.error{
          &:before{
            border-color: #fa3534;
            color: #fa3534;
            background: #fef0f0;
          }
        }
        &.success{
          &:before{
            border-color: #19be6b;
            color: #19be6b;
            background: #dbf1e1;
          }
        }
        &.primary{
          &:before{
            border-color: #2979ff;
            color: #2979ff;
            background: #ecf5ff;
          }
        }
      }
    }
  }
}
</style>