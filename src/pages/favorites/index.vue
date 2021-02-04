<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-21 17:10:18
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-21 18:12:18
 * @Description: 错题集 & 收藏夹
-->
<template>
  <view class="favorites">
    <u-sticky>
			<!-- 只能有一个根元素 -->
			<view class="sticky">
				<u-tabs
          :list="list"
          height="90"
          :is-scroll="true"
          :current="current"
          @change="change"
        ></u-tabs>
			</view>
		</u-sticky>
    <!-- 题目内容 -->
    <swiper class="swiper" duration="300" :current="current" @change="swiperChange">
      <swiper-item v-for="item in list" :key="item.id">
        <scroll-view
          class="list"
          scroll-y="true"
          enable-back-to-top
          scroll-anchoring="true"
          upper-threshold="50"
          lower-threshold="100"
          @scrolltolower="scrolltoupperFun"
        >
          <navigator v-for="i in 32" :key="i" class="news-link" url="/pages/newDetail/index" hover-class="navigator-hover">
            <view class="text">
              电商开发感觉哎两点上课感觉哎电商开发感觉哎两点上课感觉哎电商开发感觉哎两点上课感觉哎
            </view>
            <u-icon name="arrow-right" color="#eee" size="28"></u-icon>
          </navigator>
          <view class="bottom-text">
            <u-loading :show="loadShow" mode="flower" color="#999" size="36"></u-loading>
            <view class="text">{{bottomText}}</view>
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>
  </view>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          name: "大学英语B",
          id: 0
        },
        {
          name: "计算机应用基础",
          id: 1
        },
        {
          name: "大学语文",
          id: 2
        },
        {
          name: "高等数学",
          id: 3
        },
      ],
      current: 0,
      typeList:{
        // 收藏夹
        collect: {
          title: '收藏夹'
        },
        // 错题集
        wrong: {
          title: '错题集'
        }
      },
      loadShow: true,
      bottomText: '加载中...'
    };
  },
  onLoad(option){
    uni.setNavigationBarTitle({
        title: this.typeList[option.formType].title
    });
  },
  methods: {
    change(index) {
      this.current = index;
    },
    swiperChange(e){
      this.current = e.detail.current
    },
    // 滚动加载
    scrolltoupperFun(){
      console.log(123);
    }
  },
};
</script>
<style lang="scss" scoped>
.favorites{
  height: 100vh;
  overflow: hidden;
  .sticky{
    height: 90rpx;
  }
  .swiper{
    height: calc(100vh - #{90rpx});
    background: #f5f5f5;
    .list{
      position: relative;
      height: calc(100vh - #{90rpx});
      overflow: auto;
      overflow-anchor: auto;
      .news-link{
        width: 100%;
        box-sizing: border-box;
        padding: 20rpx 20rpx 20rpx 30rpx;
        background: #fff;
        border-bottom: 1rpx solid #eee;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        &:last-child{
          border: none;
        }
        .text{
          width: 640rpx;
          font-size: 28rpx;
          line-height: 40rpx;
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
  }
}
</style>