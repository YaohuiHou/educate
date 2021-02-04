<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-25 17:56:13
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-25 18:19:45
 * @Description: 辅导课程回放详情页
-->
<template>
  <view class="course">
    <u-sticky>
			<!-- 只能有一个根元素 -->
			<view class="sticky">
        <video 
          id="myVideo" 
          src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" 
          controls
        ></video>
      </view>
    </u-sticky>
    <view class="detail">
      <view class="h1">{{title}}</view>
      <view class="time">发布时间：{{time}}</view>
      <u-parse :html="strings" :tag-style="style"></u-parse>
    </view>
  </view>
</template>

<script>
	export default {
		data() {
			return {
        title: '7部图书获2020年中国石油和化学工业优秀出版物奖',
        time: '2021-01-18 19:24:44',
        style: {
					// 字符串的形式
					p: 'color: #333;font-size:32rpx;line-height: 50rpx;margin-bottom: 20rpx',
					span: 'font-size: 30rpx'
				},
        strings: `
        <div id="vsb_content_2" class="nr-cont"><div class="v_news_content">
          <p class="vsbcontent_start">【本站讯】近日，中国石油和化学工业联合会公布2020年中国石油和化学工业优秀出版物奖（图书奖、教材奖）评选结果，我校7部图书获奖。其中，教材奖一等奖3项、二等奖2项，图书奖一等奖1项、二等奖1项。</p>
          <p>中国石油和化学工业优秀出版物奖由中国石油和化学工业联合会评选，此次评选范围为2017年1月至2019年12月之间出版的教材新书（含修订本）和2019年1月至2019年12月之间出版的科技新书。</p>
          <p><strong>我校获2020年中国石油和化学工业优秀出版物奖列表</strong></p>
          <div>
          <table cellspacing="0" cellpadding="0">
            <tbody>
            <tr class="firstRow">
              <td width="199" height="40"><p><strong>书名</strong></p></td>
              <td width="126" height="40"><p><strong>作者</strong></p></td>
              <td width="136" height="40"><p><strong>出版单位</strong></p></td>
              <td width="118" height="40"><p><strong>奖项类别及等级</strong></p></td>
            </tr>
            <tr>
              <td width="199" height="40"><p>油气田开发设计与应用</p></td>
              <td width="126" height="40"><p>谷建伟、孙致学、王夕宾等</p></td>
              <td width="136" height="40"><p>中国石油大学出版社</p></td>
              <td width="118" height="40"><p>教材奖一等奖</p></td>
            </tr>
            <tr>
              <td width="199" height="40"><p>地质学基础</p></td>
              <td width="126" height="40"><p>冀国盛、贾军涛、吴花果</p></td>
              <td width="136" height="40"><p>中国石化出版社</p></td>
              <td width="118" height="40"><p>教材奖一等奖</p></td>
            </tr>
            <tr>
              <td width="199" height="40"><p>应用物理化学</p></td>
              <td width="126" height="40"><p>王业飞</p></td>
              <td width="136" height="40"><p>中国石化出版社</p></td>
              <td width="118" height="40"><p>教材奖一等奖</p></td>
            </tr>
            <tr>
              <td width="199" height="51"><p>数值计算方法（第三版）</p></td>
              <td width="126" height="51"><p>李维国、聂立新</p></td>
              <td width="136" height="51"><p>石油工业出版社</p></td>
              <td width="118" height="51"><p>教材奖二等奖</p></td>
            </tr>
            <tr>
              <td width="199" height="40"><p>压力容器安全评定技术</p></td>
              <td width="126" height="40"><p>蒋文春</p></td>
              <td width="136" height="40"><p>中国石化出版社</p></td>
              <td width="118" height="40"><p>教材奖二等奖</p></td>
            </tr>
            <tr>
              <td width="199" height="40"><p>油井水泥石微裂缝自愈合理论研究</p></td>
              <td width="126" height="40"><p>步玉环、柳华杰、郭胜来等</p></td>
              <td width="136" height="40"><p>中国石油大学出版社</p></td>
              <td width="118" height="40"><p>图书奖一等奖</p></td>
            </tr>
            <tr>
              <td width="199" height="40"><p>高阶煤煤层气勘探开发技术丛书卷三：煤层气钻完井新技术</p></td>
              <td width="126" height="40"><p>周卫东、李罗鹏、左景栾、吕开河等</p></td>
              <td width="136" height="40"><p>中国石油大学出版社</p></td>
              <td width="118" height="40"><p class="vsbcontent_end">图书奖二等奖</p></td>
            </tr>
            </tbody>
          </table>
          </div>
          </div></div>
        `
			}
		},
		onLoad() {
      // wx.showShareMenu({
      //   withShareTicket: true,
      //   menus: ['shareAppMessage', 'shareTimeline']
      // })
      uni.setNavigationBarTitle({
          title: this.title
      });
		},
	}
</script>
<style lang="scss">
.course{
  .sticky{
    width: 100%;
    video{
      width: 100%;
    }
  }
  .detail{
    padding: 30rpx 20rpx;
    .h1{
      line-height: 56rpx;
      font-size: 40rpx;
      font-weight: bold;
      color: #000;
    }
    .time{
      margin-bottom: 20rpx;
      font-size: 20rpx;
      text-align: right;
      color: #999;
      line-height: 40rpx;
    }
  }
}
</style>