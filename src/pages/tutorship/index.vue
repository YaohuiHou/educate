<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-25 14:17:51
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-25 17:39:49
 * @Description: 辅导回放
-->
<template>
  <view class="tutorship">
    <view-top
      :changeOption="changeOption"
      :loadshow="loadshow"
      titleText="辅导回放"
      @scrolltoupperFun="gotoAjax"
      @changeSubject="changeSubject"
    >
      <view v-for="i in 30" :key="i" class="link">
        <u-image
          width="120"
          height="120"
          src="https://cdn.uviewui.com/uview/example/fade.jpg"
          mode="widthFix"
          :lazy-load="true"
        ></u-image>
        <view class="content">
          <view class="h1">这里是标题这里是标题</view>
          <view class="p">这里是介绍文案这里是介绍文案，这里是介绍文案这里是介绍文案这里是介绍文案。</view>
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
.tutorship{
  .link{
    width: 100%;
    box-sizing: border-box;
    padding: 0 20rpx 20rpx;
    min-height: 90rpx;
    border-bottom: 1rpx solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    &:last-child {
      border: none;
    }
    .content{
      margin-left: 20rpx;
      display: flex;
      flex-direction: column;
      padding: 10rpx 0;
      .h1 {
        width: 100%;
        height: 46rpx;
        line-height: 46rpx;
        font-size: 30rpx;
        color: #333;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .p {
        max-height: 80rpx;
        line-height: 40rpx;
        font-size: 22rpx;
        color: #666;
        padding-bottom: 20rpx;
        padding-top: 10rpx;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
</style>
