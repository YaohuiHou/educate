<template>
  <view class="detail">
    <view class="banner">
      <image mode="widthFix" :src="rankData.photo" ></image>
    </view>
    <view class="info">
      <view class="h2">{{rankData.name}}</view>
      <view class="p">{{rankData.introduction}}</view>
    </view>
    <view class="pois">
      <view class="li" v-for="(item,index) in rankData.poi_list" :key="index" @click="openPoi('poi',item)">
        <view class="header">
          <view class="name-img">
            <view class="figure">
              <image
                class="tophead"
                v-if="rankData.medal_show == 1 && index < 3"
                :src="rankHead[index]"
                mode="aspectFill"
              >
              </image>
              <image
                class="poihead"
                v-else
                :src="item.photo"
                mode="aspectFill"
              >
              </image>
            </view>
            <view :class="['names',item.englishname?'':'mille']">
              <view class="h5">{{item.chinesename}}</view>
              <view class="span" v-if="item.englishname">{{item.englishname}}</view>
            </view>
          </view>
          <view
            class="biu-btn goto"
            v-if="item.poi_type != 'article'"
          >浏览更多</view>
        </view>
        <view class="content-imgs">
          <view class="p">{{item.introduction}}</view>
          <view class="photo3">
            <view class="li">
              <view class="figure">
                <image
                  :src="item.photo_list[0].url"
                  mode="aspectFill"
                >
                </image>
              </view>
            </view>
            <view class="li">
              <view class="figure">
                <image
                  :src="item.photo_list[1].url"
                  mode="aspectFill"
                >
                </image>
              </view>
              <view class="figure img2">
                <image
                  :src="item.photo_list[2].url"
                  mode="scaleToFill"
                >
                </image>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <view class="footer-view">
      <!-- biu -->
      <view class="bius-list" v-if="bius && bius.length > 0">
        <view class="h3">大家怎么玩？</view>
        <view class="bius-view" v-if="bius">
          <view class="ul" v-for="i in [0,1]" :key="'biu'+i">
            <view
              class="li"
              v-for="(item,index) in bius"
              :key="item.id"
              v-if="index%2 == i"
              @click="openPoi('biu',item)"
            >
              <view class="figure">
                <image class="img" mode="widthFix" :src="item.cover" ></image>
              </view>
              <view class="p">{{item.title}}</view>
              <view class="info">
                <view class="user">
                  <view class="span">
                    <image class="img" mode="aspectFill" :src="item.avator" ></image>
                  </view>
                  <view class="em">{{item.username}}</view>
                </view>
                <view class="like">{{item.likes}}</view>
              </view>
            </view>
          </view>
        </view>
      </view>
      <!-- 更多榜单 -->
      <view :class="['more-rank',bius.length <= 0 ? 'no-bius':'']">
        <view class="h2">发现更多榜单</view>
        <view class="p">
          我们热爱旅行，
          <br />因为旅行让生活在别处成为可能，
          <br />感谢你一直以来与穷游分享这份热爱，
          <br />愿我们的一些微小工作，
          <br />能带给你无限旅行灵感。
        </view>
        <view class="ul">
          <view
            class="li"
            v-for="item in rankData.tag_ranklist"
            :key="item.id"
          >
            <view class="img-view" @click="gotoDetail(item.id)">

              <image class="img" mode="aspectFill" :src="item.photo" ></image>
              <view class="span">
                <view class="i" v-for="i in item.poiListArr" :key="'num'+i">
                  <image class="img" mode="heightFix" :src="topList[i]" ></image>
                </view>
              </view>
              <view class="p">{{item.name}}</view>
            </view>
          </view>
        </view>
        <view class="figure">
          <image class="img" mode="widthFix" src="https://fes.qyerstatic.com/FrgJL0Yu94v5Tgi0LCtbM4rxaVf1?imageslim" ></image>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
  import Vue from 'vue';
  import globalFun from '../../static/global.js'
	export default Vue.extend({
		data() {
      return {
        optionid: 0,
        showSwiperImgs: false,
        swiperIndex: 0,
        cookie: "",
        biugoDisable: false,
        poiBeento: 0,
        rankData: null,
        bius: "",
        rankHead: [
          "https://fes.qyerstatic.com/FoYM5V0pmxSwLHB3BQ-lt4K93v1f?imageslim",
          "https://fes.qyerstatic.com/FoO7qVZJyqR09TCoO45JpJcbOEo7?imageslim",
          "https://fes.qyerstatic.com/Fl6y7RA3ExaGgIUEMRsTw6SNYRFs?imageslim"
        ],
        topList: [
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
        poiList: [
          { value: "poi", label: "POI" },
          { value: "city", label: "城市" },
          { value: "country", label: "国家" },
          { value: "article", label: "图文" }
        ]
      };
    },
    onLoad(option) {
      if(option.id){
        this.getHomeList(option.id)
        this.optionid = option.id
      }
      // 微信下打开
      wx.showShareMenu({
        withShareTicket: true,
        menus: ['shareAppMessage', 'shareTimeline']
      })
		},
    onShareAppMessage(res) {
      return {
        "title": this.rankData.name,
        "path": "/pages/detail/detail?id="+this.optionid,
        "content": this.rankData.introduction,
        "desc": this.rankData.introduction,
        'imageUrl': this.rankData.photo
      }
    },
    onShareTimeline(){
      return {
        "title": this.rankData.name,
        query: 'id='+this.optionid
      }
    },
    methods:{
      gotoDetail(id){
        uni.redirectTo({
            url: '/pages/detail/detail?id='+id,
            animationType: 'pop-in',
            animationDuration: 200
        });
      },
      // 打开poi
      openPoi(type,item){
        if(!item.poi_type == "article" && type == 'poi') return
        let urls = {
          poi:'pages/place/poi/poi',
          city:'pages/place/city/city',
          country:'pages/place/country/country',
          biu: 'pages/post/post'
        }
        let path = ''
        let obj = {}
        if(type == 'biu'){
          path = urls['biu']
          obj.id = item.id
        }else{
          path = urls[item.poi_type]
          obj.id = item.id
        }
        console.log(path);
        
        // 头条下
        // this.openOtherApp('ttc02ab6975f004458',path+'?id='+item.id,obj)
        // return;
        uni.getSystemInfo({
          success:  (res)=> {
            // 头条  宿主APP名称
            if(res.appName){
                this.openOtherApp('ttc02ab6975f004458',path+'?id='+item.id,obj)
            }else if(res.host){
              // 百度  宿主平台
              uni.navigateToMiniProgram({
                appKey: 'xTfjwxtrmbmKItoKXN7neMtuZUOGd6X8',
                path: '/'+path+'?id='+item.id,
                extraData: obj,
                success(res) {
                  // 打开成功
                  console.log(res);
                  
                }
              })
            }else{
              // 微信
              this.openOtherApp('wx19526333e900a842',path+'?id='+item.id,obj)
            }
          }
        })
      },
      // 打开小程序
      openOtherApp(appid,path,obj){
        uni.navigateToMiniProgram({
          appId: appid,
          path: path,
          extraData: obj,
          success(res) {
            // 打开成功
            console.log(res);
            
          }
        })
      },
      getHomeList(id){
        globalFun
        .ajax(`/rank/api/rank/get?id=${id}&tag_ranklist_show=1`, "get")
        .then(res => {
          if(res.data.code == 0){
            res.data.data.photo = res.data.data.photo.indexOf('imageslim') != -1 ? res.data.data.photo.replace('imageslim', 'imageMogr2/auto-orient/thumbnail/750/format/jpg') : res.data.data.photo+'?imageMogr2/auto-orient/thumbnail/750/format/jpg'
            res.data.data.tag_ranklist.map(item=>{
              item.photo = item.photo.indexOf('imageslim') != -1 ? item.photo.replace('imageslim', 'imageMogr2/auto-orient/thumbnail/348x250/format/jpg') : item.photo+'?imageMogr2/auto-orient/thumbnail/78x78/format/jpg'
              item.poiListArr = item.poi_list.length.toString().split('')
              return item
            })
            res.data.data.poi_list = this.listChange(res.data.data.poi_list)
            this.rankData = res.data.data;
            console.log(this.rankData);
            // 设置标题
            uni.setNavigationBarTitle({
                title: this.rankData.name
            });
            let ids = [];
            res.data.data.biu_list.map(item => {
              ids.push(item.id);
            });
            this.getBiusInfo(ids.join(","));
          }
        })
      },
      // 获取biu详情
      getBiusInfo(ids) {
        globalFun
          .ajax(`/qcross/m/feeds/ajax/post/biulist?ids=${ids}`,"get")
          .then(res => {
            if (res.data.error_code == 0) {
              this.bius = res.data.data;
            }
          });
      },
      listChange(arr){
        arr.map(item=>{
          item.photo = item.photo.indexOf('imageslim') != -1 ? item.photo.replace('imageslim', 'imageMogr2/auto-orient/thumbnail/78x78/format/jpg') : item.photo+'?imageMogr2/auto-orient/thumbnail/78x78/format/jpg'
          
          let pois = item.photo_list;
          pois.map(img=>{
            if(img.url.indexOf('imageslim') != -1){
              img.url.replace('imageslim', 'imageMogr2/auto-orient/thumbnail/430x324/format/jpg')
            }else{
              img.url = img.url+'?imageMogr2/auto-orient/thumbnail/430x324/format/jpg'
            }
          })
          item.photo_list = pois
          return item
        })
        return arr
      },
    }
	});
</script>
<style lang="less">
.detail {
  background: rgba(30, 30, 30, 1);
  overflow: auto;

  .banner {
    width: 100%;
    min-height: 300rpx;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 70%;
      background-image: linear-gradient(180deg, transparent 0%, rgba(30, 30, 30, 0.1) 10%, rgba(30, 30, 30, 1));
    }
    image{
      width: 100%;
      height: auto;
    }
  }

  >.info {
    padding: 0 80rpx 64rpx;
    color: #FEDB9C;
    position: relative;
    z-index: 2;

    &:after, &:before {
      content: '';
      position: absolute;
      width: 108rpx;
      height: 90rpx;
      background: url('https://fes.qyerstatic.com/Fmr2s_drO-1sUPWYvnzl6QK4m_TN?imageslim') no-repeat;
      background-size: 100% 100%;
    }

    &:before {
      left: 30rpx;
      top: 0;
      transform: rotate(180deg);
    }

    &:after {
      right: 32rpx;
      bottom:50rpx;
    }

    .h2 {
      font-size: 40rpx;
      margin-bottom: 34rpx;
      line-height: 42rpx;
      font-weight: bold;
    }

    .p {
      font-size: 26rpx;
      line-height: 38rpx;
      color: #FEDB9C;
      font-weight: 300;
      text-align: justify;
      text-justify: inter-ideograph;
    }
  }

  .pois {
    padding: 0 18rpx;
    overflow: hidden;

    >.li {
      background: #fff;
      border-radius: 20rpx;
      width: 100%;
      box-sizing: border-box;
      padding: 30rpx;
      margin-bottom: 40rpx;

      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80rpx;
        margin-bottom: 30rpx;

        .name-img {
          display: flex;
          .figure {
            height: 80rpx;
            margin-right: 14rpx;

            image {
              display: block;
              width: 100%;
              height: 100%;

              &.tophead {
                width: 94rpx;
                height: 75rpx;
                overflow: hidden;
                border-radius: 8rpx;
              }

              &.poihead {
                width: 80rpx;
                height: 80rpx;
                overflow: hidden;
                border-radius: 8rpx;
              }
            }
          }

          .names {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            color: #000;

            &.mille {
              align-items: center;
              justify-content: center;
            }

            .h5 {
              max-width: 370rpx;
              height: 42rpx;
              font-size: 32rpx;
              line-height: 42rpx;
              font-weight: bold;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              opacity: 0.8;
            }

            .span {
              max-width: 370rpx;
              height: 28rpx;
              line-height: 28rpx;
              font-size: 26rpx;
              opacity: 0.8;
              font-weight: 300;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
        .biu-btn {
          flex-shrink: 1;
          width: 180rpx;
          height: 60rpx;
          border: none;
          border-radius: 60rpx;
          line-height: 60rpx;
          font-size: 28rpx;
          color: #fff;
          position: relative;
          z-index: 3;
          text-align: center;

          &.goto {
            background-image: linear-gradient(30deg, #15DB91, #06CCC7);
            box-shadow: 0 1px 10px 1px rgba(21, 219, 145, 0.4);
          }
        }
      }

      .content-imgs {
        .p {
          font-size: 26rpx;
          color: rgba(0, 0, 0, 0.8);
          font-weight: 300;
          line-height: 40rpx;
          margin-bottom: 22rpx;
          text-align: justify;
          text-justify: inter-ideograph;
        }

        .photo3 {
          display: flex;
          justify-content: space-between;
            .li {
              width: 430rpx;
              height: 324rpx;
              box-sizing: border-box;

              .figure {
                width: 430rpx;
                height: 324rpx;
                border-radius: 8rpx 0 0 8rpx;
                overflow: hidden;
                image {
                  width: 430rpx;
                  height: 324rpx;
                  border-radius: 8rpx 0 0 8rpx;
                }
              }

              &:nth-of-type(2) {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                width: 220rpx;

                .figure {
                  width: 220rpx;
                  height: 160rpx;
                  border-radius: 0 8rpx 8rpx 0;
                  overflow: hidden;
                  image{
                    width: 220rpx;
                    height: 160rpx;
                    border-radius: 0 8rpx 8rpx 0;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  .footer-view {
    background: #fff;
    border-radius: 22rpx 22rpx 0 0;
  }

  .bius-list {
    background: #fff;
    border-radius: 22rpx 22rpx 0 0;
    box-sizing: border-box;
    padding: 60rpx 18rpx 60rpx;

    .h3 {
      padding-left: 44rpx;
      font-size: 38rpx;
      line-height: 40rpx;
      color: #000;
      font-weight: bold;
      margin-bottom: 30rpx;
      background: url('https://fes.qyerstatic.com/FryDnCCpeJPzSEItaaBxFM463q7S?imageslim') no-repeat;
      background-size: 40rpx 40rpx;
    }
    .bius-view {
      display: flex;
      justify-content: space-between;

      .ul {
        width: 348rpx;

        .li {
          width: 100%;
          margin-bottom: 40rpx;

          .figure {
            width: 100%;
            border-radius: 16rpx;
            overflow: hidden;
            margin-bottom: 18rpx;
            image{
              width: 100%;
              height: auto
            }
          }

          >.p {
            font-size: 26rpx;
            line-height: 40rpx;
            color: #000;
            margin-bottom: 12rpx;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }

          .info {
            height: 36rpx;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .user {
              height: 36rpx;
              display: flex;

              .span {
                width: 36rpx;
                height: 36rpx;
                border-radius: 50%;
                margin-right: 10rpx;

                .img {
                  width: 36rpx;
                  height: 36rpx;
                  border-radius: 50%;
                }
              }

              .em {
                font-size: 22rpx;
                color: rgba(0, 0, 0, 0.4);
                line-height: 36rpx;
              }
            }

            .like {
              position: relative;
              font-size: 26rpx;
              display: flex;
              align-items: center;
              color: rgba(0, 0, 0, 0.8);
              font-style: normal;
              font-weight: bold;
              font-family: DIN Condensed;

              &:before {
                content: '';
                position: absolute;
                left: -34rpx;
                top: 50%;
                transform: translateY(-60%);
                width: 26rpx;
                height: 24rpx;
                background: url('https://fes.qyerstatic.com/FvD6UEcyFlH5EgC8VE8dfZvDnQMv?imageslim') no-repeat;
                background-size: 100% 100%;
              }
            }
          }
        }
      }
    }
}
.more-rank {
    padding: 0 20rpx 80rpx;
    background: #fff url('https://fes.qyerstatic.com/FmGlL7T4YrtUS9Tp61-QdJUv3J_R?imageslim') no-repeat 100% 20px;
    background-size: 714rpx 696rpx;

    &.no-bius {
      padding-top: 30rpx;
      border-radius: 22rpx 22rpx 0 0;
    }

    .h2 {
      padding: 60rpx 0 34rpx 60rpx;
      line-height: 42rpx;
      font-size: 42rpx;
      color: #000;
      font-weight: bold;
    }

    >.p {
      padding-left: 60rpx;
      line-height: 46rpx;
      font-size: 26rpx;
      color: #000;
      margin-bottom: 42rpx;
    }

    .ul {
      display: flex;
      justify-content: space-between;
      margin-bottom: 90rpx;

      .li {
        width: 348rpx;
        height: 250rpx;
        overflow: hidden;
        border-radius: 16rpx;
        position: relative;
        .img-view{
          width: 348rpx;
          height: 250rpx;
          overflow: hidden;
          border-radius: 16rpx;
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
        }

        .img {
          width: 100%;
          height: 100%;
        }

        .span {
          position: absolute;
          left: 0;
          top: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 150rpx;
          height: 60rpx;
          border-radius: 16rpx 0 16rpx 0;
          background-image: linear-gradient(90deg, #FFECCB, #CFB381);
          color: #000;
          text-align: center;
          font-weight: bold;
          z-index: 2;

          &:before {
            content: '';
            display: block;
            width: 72rpx;
            height: 32rpx;
            background: url('https://fes.qyerstatic.com/FmlIZuZviMtNPThqBjZ0uIXQJT03?imageslim') no-repeat;
            margin-right: 8rpx;
            background-size: 100% 100%;
          }

          .i {
            width: 24rpx;
            height: 28rpx;
            text-align: center;

            .img {
              height: 32rpx;
              width: 20rpx;
            }
          }
        }

        .p {
          position: absolute;
          right: 30rpx;
          bottom: 30rpx;
          line-height: 42rpx;
          font-size: 36rpx;
          width: 228rpx;
          text-align: right;
          color: #fff;
          text-shadow: 0 0 30rpx #000;
          font-weight: bold;
          z-index: 2;
        }
      }
    }

    .figure {
      height: 48rpx;
      text-align: center;

      .img {
        width: 166rpx;
      }
    }
  }
</style>