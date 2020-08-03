<template>
	<view class="home">
    <view class="banner" v-if="swiperList">
      <swiper class="swiper"
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
        :indicator-color="swiperColor"
        :indicator-active-color="activeColor"
      >
        <swiper-item v-for="item in swiperList" :key="item.img_head">
            <view class="swiper-item" @click="gotoUrl(item)">
              <image :src="item.img_head"></image>
            </view>
        </swiper-item>
      </swiper>
    </view>
    <!-- 列表 -->
    <view class="board">
      <view class="li" v-for="item in list" :key="item.id">
        <view class="a" @click="gotolink(item.id)">
          <view class="figure">
            <view class="i ibefore"
            v-bind:style="{ backgroundImage: `linear-gradient(180deg, transparent 40%, ${item.color ? item.color :'rgba(0,0,0,.3)'})`}"
            ></view>
            <image
              class="img"
              mode="widthFix"
              :lazy-load="true"
              :src="item.photo">
            </image>
            <view class="info">
              <view class="span">
                <view class="imgs" v-for="i in item.poiListArr" :key="'imgs'+i">
                  <image class="img" mode="heightFix" :src="topList[i]"></image>
                </view>
              </view>
              <view class="h2">{{item.name}}</view>
              <view class="p" v-if="item.introduction_show == 1">{{item.introduction}}</view>
            </view>
          </view>
          <view class="list">
            <view class="img" v-for="img in item.poi_list" :key="img.id" >
              <view class="span">
                <image
                  class="img"
                  :lazy-load="true"
                  :src="img.photo"
                  mode="aspectFill"
                ></image>
              </view>
              <view class="p">{{img.chinesename}}</view>
            </view>
            <em class="icon"></em>
          </view>
        </view>
      </view>
    </view>
    <view class="footer">
      <view class="p" v-if="loadList">正在加载...</view>
      <view v-else class="goback p" @click="gotoTop">😆已经到底了，回到顶部</view>
    </view>
	</view>
</template>

<script>
  import Vue from 'vue';
  import globalFun from '../../static/global.js'
	export default Vue.extend({
		data() {
			return {
        swiperList:[],
        list:[],
        loadList:true,
        page: 2,
        topList:[
          'https://fes.qyerstatic.com/FnSM0L0RkuD6fpZzjQIWXjYvJxHY?imageslim',
          'https://fes.qyerstatic.com/FtRKczHDMUaI-Ij3ApFrHLlNeIlZ?imageslim',
          'https://fes.qyerstatic.com/FodgZy7mY7rEmXgFNcRE1IqtmGu0?imageslim',
          'https://fes.qyerstatic.com/FpQlgGGFC6xG6onfdYgEtg116YJM?imageslim',
          'https://fes.qyerstatic.com/FqY10zz3wXmIA6UH4l47PtDRUZQ5?imageslim',
          'https://fes.qyerstatic.com/FnjfAZk3dnEl5q-XqCXOLmCN0K89?imageslim',
          'https://fes.qyerstatic.com/Fh-uSH2N3P8ZeahIia-xdYSifCJA?imageslim',
          'https://fes.qyerstatic.com/FpTBVvznHeauP-1ta3uBCaatmCFb?imageslim',
          'https://fes.qyerstatic.com/FhWyYglE5itITtXKQDCaZjFlBDTl?imageslim',
          'https://fes.qyerstatic.com/FoIYq-QDm2PwlSdsGy4X9Pzf_I3K?imageslim',
        ],
        background: ['color1', 'color2', 'color3'],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 1000,
        activeColor: '#fff',
        swiperColor: 'rgba(255,255,255,.4)'
			}
		},
		onLoad() {
      this.getHomeList()
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
		},
    onShareAppMessage(res) {
      return {
        "title": "最世界榜单",
        "path": "/pages/index/index",
        "content": "一起发现最世界，Mark你走过的山水，为你的远方打榜！",
        desc: "一起发现最世界，Mark你走过的山水，为你的远方打榜！"
      }
    },
    onShareTimeline(){
      return {
        "title": this.rankData.name,
        query: ''
      }
    },
    // 下拉刷新
    onPullDownRefresh(){
      this.list = []
      this.page = 2
      this.getHomeList()
    },
    // 滚动加载
    onReachBottom(){
      this.getList();
    },
		methods: {
      gotoUrl(item){
        uni.navigateTo({
            url: '../poi/poi?url='+encodeURIComponent(item.link),
            animationType: 'pop-in',
            animationDuration: 200
        });
      },
      gotolink(id){
        uni.navigateTo({
            url: '../detail/detail?id='+id,
            animationType: 'pop-in',
            animationDuration: 200
        });
      },
      // 加载首页
      getHomeList(){
        globalFun.ajax('/rank/api/fp/get','get',{}).then(res=>{
          if(res.data.code == 0){
            this.swiperList = res.data.data.focuslist.list
            console.log(this.swiperList);
            
            // let arr = res.data.data.ranklist.list
            
            this.list = this.listChange(res.data.data.ranklist.list)
          }
        })
      },
      // 转化代码
      listChange(arr){
        arr.map(item=>{
          item.photo = item.photo.indexOf('imageslim') != -1 ? item.photo.replace('imageslim', 'imageMogr2/auto-orient/thumbnail/714x400/format/jpg') : item.photo+'?imageMogr2/auto-orient/thumbnail/714x400/format/jpg'
          
          item.poiListArr = item.poi_list.length.toString().split('')
          let pois = item.poi_list.slice(0,3);
          pois.map(img=>{
            if(img.photo.indexOf('imageslim') != -1){
              img.photo.replace('imageslim', 'imageMogr2/auto-orient/thumbnail/200x148/format/jpg')
            }else{
              img.photo = img.photo+'?imageMogr2/auto-orient/thumbnail/200x148/format/jpg'
            }
          })
          item.poi_list = pois
          return item
        })
        return arr
      },
      // 获取列表
      getList() {
        if (this.disableList) return;
          this.disableList = true;
          globalFun
            .ajax(`/rank/api/ranklist/get?sn=10&cn=${this.page}&status=2,1`, "get",{})
            .then(res => {
              this.disableList = false;
              if (res.data.code == 0) {
                this.list = [...this.list, ...this.listChange(res.data.data.list)];
                if (this.list.length >= res.data.data.tn) {
                  this.loadList = false
                  this.disableList = true;
                } else {
                  this.page += 1;
                }
              }
            });
        }
		}
	});
</script>

<style lang="less">
image{
  will-change: transform
}
.home{
  padding: 40rpx 18rpx 0 18rpx;
  background-image: linear-gradient( #fff, #F5F5F5);
  .banner{
    background:#F5F5F5;
    border-radius: 16rpx;
    margin-bottom: 40rpx;
    .swiper{
      height: 280rpx;
    }
    .swiper-item{
      border-radius: 16rpx;
      overflow: hidden;
      image{
        width: 100%;
        height: 280rpx;
        border-radius: 16rpx;
      }
    }
  }
  .board {
    .li {
      margin-bottom: 40rpx;
      border-radius: 16rpx;
      width: 100%;
      overflow: hidden;
      background: #fff;
      box-shadow: 0 2px 30px 0 rgba(0, 0, 0, 0.2);

      .a {
        display: block;
        position: relative;
        width: 100%;

        .figure {
          position: relative;
          overflow: hidden;
          width: 100%;
          min-height: 200rpx;
          border-radius: 16rpx 16rpx 0 0;
          margin-bottom: 20rpx;
          background-color: #ddd;

          .ibefore {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
          }
          >.img{
            width: 100%;
            min-height: 400rpx;
            border-radius: 16rpx 16rpx 0 0;
            height: auto;
          }
          .info {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            box-sizing: border-box;
            padding: 0 30rpx 36rpx;
            z-index: 1;

            .span {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 150rpx;
              height: 60rpx;
              background-image: linear-gradient(90deg, #FFECCB, #CFB381);
              color: #000;
              font-size: 0.21rem;
              text-align: center;
              font-weight: bold;
              border-radius: 8rpx;

              &:before {
                content: '';
                display: block;
                width: 72rpx;
                height: 32rpx;
                background: url('https://fes.qyerstatic.com/FmlIZuZviMtNPThqBjZ0uIXQJT03?imageslim') no-repeat;
                margin-right: 8rpx;
                background-size: 100% 100%;
              }

              .imgs {
                width: 24rpx;
                height: 32rpx;
                border-radius: 8rpx;
                text-align: center;

                .img {
                  height: 32rpx;
                  width: 20rpx;
                }
              }
            }

            .h2 {
              line-height: 42rpx;
              font-size: 42rpx;
              font-weight: bold;
              color: #fff;
              padding: 30rpx 0 20rpx;
            }

            .p {
              line-height: 28rpx;
              font-size: 28rpx;
              color: #fff;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }

        .list {
          position: relative;
          padding: 0 64rpx 30rpx 20rpx;
          display: flex;

          .img {
            width: 200rpx;
            margin-right: 16rpx;
            overflow: hidden;

            &:nth-of-type(3) {
              margin: 0;
            }

            .span {
              width: 200rpx;
              height: 148rpx;
              display: inline-block;
              background-color: #ddd;
              border-radius: 8rpx;
              overflow: hidden;
              position: relative;

              &:before {
                content: '';
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.2);
                z-index: 1;
              }

              .img {
                width: 200rpx;
                height: 148rpx;
                object-fit: cover;
                border-radius: 8rpx;
              }
            }

            .p {
              width: 100%;
              text-align: center;
              height: 24rpx;
              line-height: 24rpx;
              padding-top: 18rpx;
              color: #000;
              font-size: 24rpx;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }

          .icon {
            position: absolute;
            right: 24rpx;
            top: 60rpx;
            width: 20rpx;
            height: 20rpx;
            border-top: 4rpx solid rgba(0, 0, 0, 0.5);
            border-right: 4rpx solid rgba(0, 0, 0, 0.5);
            transform: rotate(45deg);
          }
        }
      }
    }
  }
  .footer {
    padding: 20rpx;

    .p {
      font-size: 24rpx;
      text-align: center;
      color: #999;
      margin: 0 auto 20rpx;
    }
    .goback{
      display: table;
      padding: 8rpx 20rpx;
      border-radius: 40rpx;
      border: 1rpx solid #ccc;
    }
  }
}
</style>
