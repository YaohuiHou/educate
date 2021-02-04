<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-19 13:24:59
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-25 14:06:12
 * @Description: 资讯列表页
-->
<template>
  <scroll-view
    class="list"
    scroll-y="true"
    enable-back-to-top
    scroll-anchoring="true"
    upper-threshold="50"
    lower-threshold="100"
    @scrolltolower="scrolltoupperFun"
  >
    <u-navbar :title="title" title-width="0">
      <view class="slot-wrap" @click="show = !show">
        {{title}}<u-icon class="arrow-down" size="14" name="arrow-down-fill"></u-icon>
			</view>
    </u-navbar>
    <u-sticky>
      <view class="sticky">
        <u-search
          placeholder="输入您要查找的关键字"
          height="80"
          :clearabled="true"
          v-model="keyword"
          @search="searchKeyList"
          @custom="searchKeyList"
        ></u-search>
      </view>
    </u-sticky>
    <navigator v-for="i in 32" :key="i" class="news-link" url="/pages/newDetail/index" hover-class="navigator-hover">
      <view class="text">
        电商开发感觉哎两点上课感觉哎
      </view>
      <u-icon name="arrow-right" color="#eee" size="28"></u-icon>
    </navigator>
    <view class="bottom-text">
      <u-loading :show="loadShow" mode="flower" color="#999" size="36"></u-loading>
      <view class="text">{{bottomText}}</view>
    </view>
    <!-- 选择 -->
    <u-picker
      v-model="show"
      mode="selector"
      :range="selectorObj"
      range-key="cateName"
      @confirm="changeSubject"
    ></u-picker>
  </scroll-view>
</template>
<script>
export default {
  data(){
    return{
      show: false,
      type: '',
      title: '',
      keyword: '',
      loadShow: true,
      bottomText: '加载中...',
      changeOption: 0,
      selectorObj: [
        {
          cateName: '统考资讯',
          id: 0
        },
        {
          cateName: '辅导通知',
          id: 1
        }
      ],
    }
  },
  onPageScroll(e) {
		this.scrollTop = e.scrollTop;
	},
  onLoad(option){
    this.changeOption = option.type
    this.title = this.selectorObj[this.changeOption].cateName
  },
  methods:{
    // 搜索
    searchKeyList(){
      console.log(this.keyword);
    },
    // 滚动加载
    scrolltoupperFun(){
      console.log(123);
    },
    // 选择title
    changeSubject(e){
      this.changeOption = e[0]
      this.title = this.selectorObj[this.changeOption].cateName
    }
  }
}
</script>
<style scoped lang="scss">
.list{
  position: relative;
  height: 100vh;
  overflow: auto;
  overflow-anchor: auto;
  .sticky{
    background: #fff;
    box-sizing: border-box;
    padding: 10rpx 20rpx;
  }
  .news-link{
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
    .text{
      width: 600rpx;
      height: 90rpx;
      font-size: 28rpx;
      line-height: 90rpx;
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .bottom-text{
    height: 80rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .text{
      font-size: 30rpx;
      color: #999;
      margin-left: 12rpx;
    }
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