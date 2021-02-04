<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-25 14:15:01
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-25 16:32:44
 * @Description: 知识点练习
-->
<template>
  <view class="knowledge">
    <view-top
    :loadshow="loadshow"
    :bottomShow="bottomShow"
    :changeOption="changeOption" 
    titleText="知识点练习" 
    @changeSubject="changeSubject"
  >
      <view v-for="i in 7" :key="i" class="link">
        <view class="left">
          完形填空
        </view>
        <view class="right-text">
          <view class="right-top" v-if="i > 2">
            <u-button class="btn" type="error" size="mini" plain>重做</u-button>
            <u-button class="btn" type="success" size="mini" plain>续做</u-button>
          </view>
          <view class="right-top" v-else>
            <u-button type="primary" size="mini" plain>答题</u-button>
          </view>
          <view class="right-bottom">
            0 / 12344
          </view>
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
      loadshow: false,
      bottomShow: false
    }
  },
  onLoad(option){
    // this.changeOption = option.type
    this.changeOption = 0
  },
  methods:{
    // 请求页面
    gotoAjax(){
      return
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
.knowledge{
  .link{
    width: 100%;
    box-sizing: border-box;
    padding: 20rpx;
    border-bottom: 1rpx solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    &:last-child{
      border: none;
    }
    .left{
      width: 300rpx;
      height: 90rpx;
      font-size: 28rpx;
      line-height: 90rpx;
      color: #333;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .right-text{
      display: flex;
      flex-direction: column;
      color: #333;
      .right-top{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 10rpx;
        .btn{
          margin-left: 20rpx;
        }
      }
      .right-bottom{
        text-align: right;
        line-height: 40rpx;
        font-size: 26rpx;
        color: #333;
      }
    }
  }
}
</style>