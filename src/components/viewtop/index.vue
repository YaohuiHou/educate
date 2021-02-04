<!--
 * @Author: yaohui.hou
 * @Date: 2021-01-25 14:38:12
 * @LastEditors: yaohui.hou
 * @LastEditTime: 2021-01-25 15:53:51
 * @Description: 公共页面主体，用于练习题页面
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
        {{ titleText }} - {{ title
        }}<u-icon class="arrow-down" size="14" name="arrow-down-fill"></u-icon>
      </view>
    </u-navbar>
    <slot></slot>
    <view class="bottom-text" v-if="bottomShow">
      <u-loading
        :show="loadShow"
        mode="flower"
        color="#999"
        size="36"
      ></u-loading>
      <view class="text">{{ bottomText }}</view>
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
  props: {
    changeOption: {},
    titleText: {},
    loadShow: {},
    bottomShow: {
      default: true
    }
  },
  data() {
    return {
      show: false,
      type: "",
      title: "",
      bottomText: "加载中...",
      selectorObj: [
        {
          cateName: "大学英语B",
          id: 1,
        },
        {
          cateName: "计算机应用基础",
          id: 2,
        },
        {
          cateName: "大学语文",
          id: 3,
        },
        {
          cateName: "高等数学",
          id: 4,
        },
      ],
    };
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  mounted() {
    this.title = this.selectorObj[this.changeOption].cateName;
  },
  methods: {
    // 滚动加载
    scrolltoupperFun() {
      console.log(123);
      this.$emit("scrolltoupperFun", 1);
    },
    // 选择title
    changeSubject(e) {
      // this.changeOption = e[0]
      this.title = this.selectorObj[e[0]].cateName;
      this.$emit("changeSubject", e[0]);
    },
  },
};
</script>
<style scoped lang="scss">
.list {
  position: relative;
  height: 100vh;
  overflow: auto;
  overflow-anchor: auto;
  .sticky {
    background: #fff;
    box-sizing: border-box;
    padding: 10rpx 20rpx;
  }
  .bottom-text {
    height: 80rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    .text {
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
  .arrow-down {
    margin-left: 10rpx;
  }
}
</style>