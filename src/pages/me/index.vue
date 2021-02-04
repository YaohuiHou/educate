<!--
 * @Author: yaohui.hou
 * @Date: 2020-11-15 23:12:38
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-21 17:13:51
 * @Description: 个人中心
-->
<template>
  <view class="me">
    <!-- head -->
    <view class="header" v-if="login" @click="gotoLink('userinfo','me')">
      <view class="figure">
        <u-avatar class="head-img" :src="headImg" mode="square" size="120" img-mode="aspectFill"></u-avatar>
        <view class="info">
          <text class="h2">{{name}}</text>
          <text class="h4">{{subjectId}}</text>
        </view>
      </view>
      <u-icon name="arrow-right" color="#999" size="28"></u-icon>
    </view>
    <view class="header" v-if="!login" @click="gotoLink('login','me')">
      <view class="figure">
        <u-avatar class="head-img" src="/static/imgs/man.png" mode="square" size="120" img-mode="aspectFill"></u-avatar>
        <view class="info nologin">
          <text class="h3">请点击登录</text>
        </view>
      </view>
    </view>
    <view class="ul">
      <view class="li" v-for="(item, i) in contents" :key="i" @click="gotoLink(item.url,item.type)">
        <u-icon class="icon" :name="item.icon" :color="item.color" size="32"></u-icon>
        <view class="text">
          <text>{{item.name}}</text>
          <u-icon name="arrow-right" color="#999" size="28"></u-icon>
        </view>
      </view>
    </view>
    <view class="li password" @click="gotoLink('userinforevise','password')">
      <u-icon class="icon" name="setting" color="#2b85e4" size="32"></u-icon>
      <view class="text">
        <text>修改密码</text>
        <u-icon name="arrow-right" color="#999" size="28"></u-icon>
      </view>
    </view>
    <view v-if="login" class="out-login" @click="outLogin = true">退出</view>
    <!-- 退出提示 -->
    <u-modal v-model="outLogin" :content="modalContent" show-cancel-button :async-close="true" @confirm="confirmOut"></u-modal>
  </view>
</template>
<script>
export default {
  data(){
    const _this = this
    return{
      outLogin: false,
      login: _this.$store.state.login,
      modalContent: '是否要退出账号？',
      headImg: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
			name: 'rancho',
      subjectId: 12837123,
      contents: [
        {
          name: '学习进度',
          type: '',
          url: 'learningProgress',
          icon: 'integral',
          color: '#19be6b'
        },
        {
          name: '错题集',
          url: 'favorites',
          type: 'wrong',
          icon: 'coupon',
          color: '#fa3534'
        },
        {
          name: '收藏夹',
          url: 'favorites',
          type: 'collect',
          icon: 'star',
          color: '#ff9900'
        }
      ]
    }
  },
  onShow(){
    this.login = this.$store.state.login
  },
  methods:{
    // 退出登录
    confirmOut(){
      console.log('退出');
      this.$store.commit('SET_LOGIN', false)
      this.login = false
      this.outLogin = false
    },
    gotoLink(url,type){
      if(url !== 'login' && !this.login) return
      uni.navigateTo({
        url: `/pages/${url}/index?formType=${type}&url=me`
      });
    },
  }
}
</script>
<style lang="scss">
.me{
  min-height: 100vh;
  background: #f5f5f5;
  .header{
    padding: 60rpx 40rpx;
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    height: 240rpx;
    box-sizing: border-box;
    margin-bottom: 20rpx;
    .figure{
      display: flex;
      .head-img{
        margin-right: 20rpx;
      }
      .info{
        height: 120rpx;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        &.nologin{
          align-items: center;
          justify-content: center;
          .h3{
            color: #666;
            font-size: 36rpx;
            line-height: 60rpx;
            margin-left: 20rpx;
          }
        }
        .h2{
          font-weight: bold;
          color: #000;
          font-size: 40rpx;
          line-height: 60rpx;
        }
        .h4{
          color: #666;
          font-size: 24rpx;
          line-height: 36rpx;
        }
      }
    }
  }
  .ul{
    margin-bottom: 20rpx;
    &:last-child{
      .text{
        border: none;
      }
    }
  }
  .li{
    padding: 0 30rpx;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon{
      margin-right: 20rpx;
    }
    .text{
      padding: 20rpx 0 20rpx 0;
      box-sizing: border-box;
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1rpx solid #eee;
      text{
        font-size: 30rpx;
        color: #333;
      }
    }
  }
  .password{
    margin-bottom: 20rpx;
  }
  .out-login{
    height: 90rpx;
    line-height: 90rpx;
    text-align: center;
    font-size: 30rpx;
    color: #333;
    background: #fff;
  }
}
</style>