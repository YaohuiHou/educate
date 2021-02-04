<template>
	<view class="content">
    <view class="view">
      <view class="h1">
        <u-section title="统考资讯" font-size="40" sub-title="查看全部" @click="gotoLink(0)"></u-section>
      </view>
      <navigator v-for="i in 3" :key="i" class="news-link" url="/pages/newDetail/index" hover-class="navigator-hover">
        <view class="text">
          电商开发感觉哎两点上课感觉哎
        </view>
        <u-icon name="arrow-right" color="#eee" size="28"></u-icon>
      </navigator>
    </view>
    <view class="view">
      <view class="h1">
        <u-section title="辅导通知" font-size="40"  sub-title="查看全部" @click="gotoLink(1)"></u-section>
      </view>
      <navigator v-for="i in 3" :key="i" class="news-link" url="/pages/newDetail/index" hover-class="navigator-hover">
        <view class="text">
          电商开发感觉哎两点上课感觉哎电商开发感觉哎两点上课感觉哎是点击返回
        </view>
        <u-icon name="arrow-right" color="#eee" size="28"></u-icon>
      </navigator>
    </view>
    <view class="view">
      <view class="h1">
        <u-section title="考试科目" font-size="40" :right="false"></u-section>
      </view>
      <u-grid :col="2" border bg-color="#fff">
        <u-grid-item @click="gotoLink(2, 'en')">
          <u-image width="50rpx" height="50rpx" src="/static/imgs/english.png"></u-image>
          <view class="grid-text">大学英语B</view>
        </u-grid-item>
        <u-grid-item @click="gotoLink(2, 'jc')">
          <u-image width="50rpx" height="50rpx" src="/static/imgs/computer.png"></u-image>
          <view class="grid-text">计算机应用基础</view>
        </u-grid-item>
        <u-grid-item @click="gotoLink(2, 'cn')">
          <u-image width="50rpx" height="50rpx" src="/static/imgs/language.png"></u-image>
          <view class="grid-text">大学语文</view>
        </u-grid-item>
        <u-grid-item @click="gotoLink(2, 'ma')">
          <u-image width="50rpx" height="50rpx" src="/static/imgs/math.png"></u-image>
          <view class="grid-text">高等数学</view>
        </u-grid-item>
      </u-grid>
    </view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
        
			}
		},
		onLoad() {
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
		},
    methods:{
      gotoLink(n, type){
        switch (Number(n)) {
          case 0:
            uni.navigateTo({
                url: `/pages/news/index?type=${n}`
            });
            break;
          case 1:
            uni.navigateTo({
                url: `/pages/news/index?type=${n}`
            });
            break;
          case 2:
            uni.navigateTo({
                url: `/pages/subject/index?type=${type}`
            })
            break;
        }
      }
    }
	}
</script>

<style lang="scss">
  .content{
    min-height: 100vh;
    background: #f5f5f5;
  }
  .grid-text{
    padding: 20rpx 0;
  }
  .collapses{
    padding: 20rpx 30rpx;
    background: #fff;
    margin-top: 20rpx;
  }
  .view{
    background: #fff;
    margin-bottom: 20rpx;
    .h1{
      position: relative;
      padding:  20rpx 20rpx 20rpx 0;
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
  }
</style>
