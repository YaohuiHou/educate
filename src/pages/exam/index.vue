<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-25 14:16:41
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-25 17:18:27
 * @Description: 模拟考试
-->
<template>
  <view class="exam">
    <view-top
      :changeOption="changeOption"
      :loadshow="loadshow"
      titleText="模拟考试"
      @scrolltoupperFun="gotoAjax"
      @changeSubject="changeSubject"
    >
      <view v-for="i in 30" :key="i" :class="['link', i > 4 ? 'done' : '']">
        <view class="timer">
          <text class="h1">2020年01月{{ i }}日模拟练习题</text>
          <text class="p" v-if="i > 4">得分90 用时60分钟</text>
        </view>
        <view class="right-text">
          <u-button v-if="i > 4" class="btn" type="error" size="mini" plain
            >重练</u-button
          >
          <u-button v-else class="btn" type="success" size="mini" plain
            >练习</u-button
          >
        </view>
      </view>
    </view-top>
  </view>
</template>
<script>
import viewTop from "@/components/viewtop/index.vue";
export default {
  components: {
    viewTop,
  },
  data() {
    return {
      changeOption: 0,
      loadshow: false,
    };
  },
  onLoad(option) {
    // this.changeOption = option.type
    this.changeOption = 0;
  },
  methods: {
    // 请求页面
    gotoAjax(n) {
      console.log("请求页面", n);
    },
    // 选择科目
    changeSubject(i) {
      this.changeOption = i;
      console.log("选择科目", i);
    },
  },
};
</script>
<style scoped lang="scss">
.slot-wrap {
  display: flex;
  flex: 1;
  align-items: center;
  .arrow-down {
    margin-left: 10rpx;
  }
}
.exam {
  .link {
    width: 100%;
    box-sizing: border-box;
    padding: 0 20rpx;
    min-height: 90rpx;
    border-bottom: 1rpx solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    &:last-child {
      border: none;
    }
    &.done {
      opacity: 0.6;
    }
    .timer {
      display: flex;
      flex-direction: column;
      width: 400rpx;
      color: #333;
      overflow: hidden;
      .h1 {
        width: 400rpx;
        line-height: 60rpx;
        font-size: 28rpx;
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .p {
        width: 400rpx;
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
    .right-text {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 90rpx;
      font-size: 24rpx;
      color: #666;
      .btn {
        margin-left: 10rpx;
      }
    }
  }
}
</style>