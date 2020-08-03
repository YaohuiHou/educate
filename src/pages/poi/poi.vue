<template>
    <view class="poi-view">
        <web-view :src="url"></web-view>
    </view>
</template>
<script>
  import Vue from 'vue';
	export default Vue.extend({
    data() {
        return {
          webId:'',
          url: 'https://daole.qyer.com/zworldrankingdetail?id=177',
          shareurl:'',
        }
    },
    onLoad(option) {
      if(option.data){
        let data = option.url
        this.shareurl = data
        // this.poiDataInfo()
      }
		},
    onShareAppMessage(res) {
      return {
        "title": '最世界榜单',
        "path": "/pages/poi/poi?url="+this.shareurl,
        "content": '一起发现最世界，Mark你走过的山水，为你的远方打榜！',
        desc: '一起发现最世界，Mark你走过的山水，为你的远方打榜！'
      }
    },
    methods:{
      poiDataInfo(){
        this.url = this.shareurl
        if(this.shareurl.indexOf('https%') == -1){
          this.url = this.shareurl.replace('http%','https%')
        }
        this.url = "https://m.qyer.com/place/sri-lanka"
      },
    }
  })
</script>
<style lang="less" scoped>
.poi-view{
  width: 100%;
  height: 100vh;
}
web-view{
  width: 100%;
  height: 100vh;
}
</style>