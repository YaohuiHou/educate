<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-25 14:12:48
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-25 15:43:21
 * @Description: 每日一练
-->
<template>
  <view class="daily">
    <view-top
      :changeOption="changeOption"
      :loadshow="loadshow"
      titleText="每日一练"
      @scrolltoupperFun="gotoAjax"
      @changeSubject="changeSubject"
    >
      <view v-for="i in 30" :key="i" :class="['link',i > 4 ? 'done':'']">
        <view class="timer">
          2020年01月{{i}}日
        </view>
        <view class="right-text" v-if="i > 4">
          共8道题 对<text class="yes">5</text>题 错<text class="no">3</text>题
        </view>
        <view class="right-text" v-else>
          未做
        </view>
      </view>
    </view-top>
  </view>
</template>
<script>
import viewTop from "@/components/viewtop/index.vue";
export default {
  components:{
    viewTop
  },
  data(){
    return{
      changeOption: 0,
      loadshow: false
    }
  },
  onLoad(option){
    // this.changeOption = option.type
    this.changeOption = 0
  },
  methods:{
    // 请求页面
    gotoAjax(n){
      console.log('请求页面',n);
    },
    // 选择科目
    changeSubject(i){
      this.changeOption = i
      console.log('选择科目',i);
    }
  }
}
</script>
<style scoped lang="scss">
.slot-wrap {
  display: flex;
  flex: 1;
  align-items: center;
  .arrow-down{
    margin-left: 10rpx;
  }
}
.daily{
  .link{
    width: 100%;
    box-sizing: border-box;
    padding: 0 20rpx;
    height: 90rpx;
    line-height: 90rpx;
    border-bottom: 1rpx solid #eee;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    &:last-child{
      border: none;
    }
    &.done{
      opacity: .6;
    }
    .timer{
      width: 400rpx;
      height: 90rpx;
      font-size: 28rpx;
      line-height: 90rpx;
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .right-text{
      height: 90rpx;
      font-size: 24rpx;
      line-height: 90rpx;
      color: #666;
      text{
        padding: 0 3rpx;
      }
      .yes{
        color: #19be6b;
      }
      .no{
        color: #fa3534;
      }
    }
  }
}
</style>