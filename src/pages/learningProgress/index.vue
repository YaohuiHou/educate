<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-21 14:38:23
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-22 10:12:18
 * @Description: 学习进度表
-->
<template>
	<view class="qiun-columns">
    <view class="header">
      <u-avatar class="head-img" :src="$store.state.userinfo.headImg.value"  size="100" img-mode="aspectFill"></u-avatar>
      <view class="name-id">
        <!-- <text class="name">{{$store.state.userinfo.name.value}}</text>
        <text>{{$store.state.userinfo.subjectId.value}}</text> -->
        <text class="name">学员名称</text>
        <text>3958710353</text>
      </view>
    </view>
		<view class="qiun-charts" >
			<canvas canvas-id="canvasMix" id="canvasMix" class="charts" disable-scroll=true @touchstart="touchMix" @touchmove="moveMix" @touchend="touchEndMix"></canvas>
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	var _self;
	var canvaMix=null;
   
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
        chartData: {
          "categories": ["大学英语B", "计算机应用基础", "大学语文", "高等数学"],
          "series": [
            {
              "name": "错题数",
              "data": [40, 30, 55, 110],
              "type": "column",
              "color": "#fa3534"
            }, {
              "name": "完成数",
              "data": [50, 20, 75, 60],
              "type": "column",
              "color": "#19be6b"
            },
            // 曲面
            {
              "name": "题目数",
              "data": [1290, 5230, 8533, 1330],
              "type": "area",
              "style": "curve"
            },
          ]
        }
			}
		},
		onLoad() {
			_self = this;
			this.cWidth=uni.upx2px(750);
			this.cHeight=uni.upx2px(550);
			this.showMix("canvasMix",this.chartData);
		},
		methods: {
			// getServerData(){
			// 	uni.request({
			// 		url: 'https://www.ucharts.cn/data.json',
			// 		data:{
			// 		},
			// 		success: function(res) {
			// 			console.log(res.data.data)
			// 			let Mix={categories:[],series:[]};
			// 			//这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
			// 			Mix.categories=res.data.data.Mix.categories;
			// 			Mix.series=res.data.data.Mix.series;
			// 			_self.showMix("canvasMix",Mix);
			// 		},
			// 		fail: () => {
			// 			_self.tips="网络错误，小程序端请检查合法域名";
			// 		},
			// 	});
			// },
			showMix(canvasId,chartData){
				canvaMix=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'mix',
					fontSize:12,
					legend:{show:true},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					enableScroll: true,//开启图表拖拽功能
					xAxis: {
						disableGrid:false,
						type:'grid',
						gridType:'dash',
						itemCount:10,
						scrollShow:true,
						scrollAlign:'left',
					},
					yAxis: {
						gridType:'dash',
						splitNumber: 7,
						min:50,
						format:(val)=>{return val.toFixed(0)}
					},
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
          padding: [15,15,15,15],
					dataLabel: true,
					dataPointShape: true,
					extra: {
						tooltip:{
							bgColor:'#000000',
							bgOpacity:0.7,
							gridType:'dash',
							dashLength:8,
							gridColor:'#1890ff',
							fontColor:'#FFFFFF',
							horizentalLine:true,
							xAxisLabel:true,
							yAxisLabel:true,
							labelBgColor:'#DFE8FF',
							labelBgOpacity:0.95,
							labelAlign:'left',
							labelFontColor:'#666666'
						}
					},
				});
			},
			touchMix(e){
        console.log(e);
				canvaMix.scrollStart(e);
			},
			moveMix(e) {
				canvaMix.scroll(e);
			},
			touchEndMix(e) {
				canvaMix.scrollEnd(e);
				//下面是toolTip事件，如果滚动后不需要显示，可不填写
				canvaMix.showToolTip(e, {
					format: function (item, category) {
            console.log(item, category);
						return category + ' ' + item.name + ':' + item.data 
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.qiun-columns{
    .header{
      padding: 70rpx 40rpx;
      margin-bottom: 60rpx;
      box-shadow: 0 0 10px 1px #ccc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .head-img{
        margin-bottom: 20rpx;
      }
      .name-id{
        width: 100%;
        height: 60rpx;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text{
          &.name{
            color: #333;
            font-size: 34rpx;
            line-height: 50rpx;
            margin-bottom: 20rpx;
          }
          margin: 0 30rpx;
          text-align: center;
          font-size: 28rpx;
          line-height: 48rpx;
          color: #666;
        }
      }
    }
    .charts {
      width: 750upx;
      height: 600upx;
      background-color: #FFFFFF;
    }
  }
</style>
