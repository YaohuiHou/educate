(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/detail/detail"],{1529:function(t,a,i){"use strict";i.r(a);var e=i("46fe"),o=i.n(e);for(var n in e)"default"!==n&&function(t){i.d(a,t,(function(){return e[t]}))}(n);a["default"]=o.a},"1de6":function(t,a,i){"use strict";var e=i("2ce1"),o=i.n(e);o.a},"2ce1":function(t,a,i){},"2e7d":function(t,a,i){"use strict";var e;i.d(a,"b",(function(){return o})),i.d(a,"c",(function(){return n})),i.d(a,"a",(function(){return e}));var o=function(){var t=this,a=t.$createElement;t._self._c},n=[]},"3a5c":function(t,a,i){"use strict";i.r(a);var e=i("2e7d"),o=i("1529");for(var n in o)"default"!==n&&function(t){i.d(a,t,(function(){return o[t]}))}(n);i("1de6");var s,r=i("f0c5"),l=Object(r["a"])(o["default"],e["b"],e["c"],!1,null,null,null,!1,e["a"],s);a["default"]=l.exports},"46fe":function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=n(i("66fd")),o=n(i("a18e"));function n(t){return t&&t.__esModule?t:{default:t}}var s=e.default.extend({data:function(){return{optionid:0,showSwiperImgs:!1,swiperIndex:0,cookie:"",biugoDisable:!1,poiBeento:0,rankData:null,bius:"",rankHead:["https://fes.qyerstatic.com/FoYM5V0pmxSwLHB3BQ-lt4K93v1f?imageslim","https://fes.qyerstatic.com/FoO7qVZJyqR09TCoO45JpJcbOEo7?imageslim","https://fes.qyerstatic.com/Fl6y7RA3ExaGgIUEMRsTw6SNYRFs?imageslim"],topList:["https://fes.qyerstatic.com/FnSM0L0RkuD6fpZzjQIWXjYvJxHY?imageslim","https://fes.qyerstatic.com/FtRKczHDMUaI-Ij3ApFrHLlNeIlZ?imageslim","https://fes.qyerstatic.com/FodgZy7mY7rEmXgFNcRE1IqtmGu0?imageslim","https://fes.qyerstatic.com/FpQlgGGFC6xG6onfdYgEtg116YJM?imageslim","https://fes.qyerstatic.com/FqY10zz3wXmIA6UH4l47PtDRUZQ5?imageslim","https://fes.qyerstatic.com/FnjfAZk3dnEl5q-XqCXOLmCN0K89?imageslim","https://fes.qyerstatic.com/Fh-uSH2N3P8ZeahIia-xdYSifCJA?imageslim","https://fes.qyerstatic.com/FpTBVvznHeauP-1ta3uBCaatmCFb?imageslim","https://fes.qyerstatic.com/FhWyYglE5itITtXKQDCaZjFlBDTl?imageslim","https://fes.qyerstatic.com/FoIYq-QDm2PwlSdsGy4X9Pzf_I3K?imageslim"],poiList:[{value:"poi",label:"POI"},{value:"city",label:"城市"},{value:"country",label:"国家"},{value:"article",label:"图文"}]}},onLoad:function(t){t.id&&(this.getHomeList(t.id),this.optionid=t.id)},onShareAppMessage:function(t){return{title:this.rankData.name,path:"/pages/detail/detail?id="+this.optionid,content:this.rankData.introduction,desc:this.rankData.introduction,imageUrl:this.rankData.photo}},onShareTimeline:function(){return{title:this.rankData.name,query:"id="+this.optionid}},methods:{gotoDetail:function(a){t.redirectTo({url:"/pages/detail/detail?id="+a,animationType:"pop-in",animationDuration:200})},openPoi:function(a,i){var e=this;if("article"!=!i.poi_type||"poi"!=a){var o={poi:"pages/place/poi/poi",city:"pages/place/city/city",country:"pages/place/country/country",biu:"pages/post/post"},n="",s={};"biu"==a?(n=o["biu"],s.id=i.id):(n=o[i.poi_type],s.id=i.id),console.log(n),t.getSystemInfo({success:function(a){a.appName?e.openOtherApp("ttc02ab6975f004458",n+"?id="+i.id,s):a.host?t.navigateToMiniProgram({appKey:"xTfjwxtrmbmKItoKXN7neMtuZUOGd6X8",path:"/"+n+"?id="+i.id,extraData:s,success:function(t){console.log(t)}}):e.openOtherApp("wx19526333e900a842",n+"?id="+i.id,s)}})}},openOtherApp:function(a,i,e){t.navigateToMiniProgram({appId:a,path:i,extraData:e,success:function(t){console.log(t)}})},getHomeList:function(a){var i=this;o.default.ajax("/rank/api/rank/get?id=".concat(a,"&tag_ranklist_show=1"),"get").then((function(a){if(0==a.data.code){a.data.data.photo=-1!=a.data.data.photo.indexOf("imageslim")?a.data.data.photo.replace("imageslim","imageMogr2/auto-orient/thumbnail/750/format/jpg"):a.data.data.photo+"?imageMogr2/auto-orient/thumbnail/750/format/jpg",a.data.data.tag_ranklist.map((function(t){return t.photo=-1!=t.photo.indexOf("imageslim")?t.photo.replace("imageslim","imageMogr2/auto-orient/thumbnail/348x250/format/jpg"):t.photo+"?imageMogr2/auto-orient/thumbnail/78x78/format/jpg",t.poiListArr=t.poi_list.length.toString().split(""),t})),a.data.data.poi_list=i.listChange(a.data.data.poi_list),i.rankData=a.data.data,console.log(i.rankData),t.setNavigationBarTitle({title:i.rankData.name});var e=[];a.data.data.biu_list.map((function(t){e.push(t.id)})),i.getBiusInfo(e.join(","))}}))},getBiusInfo:function(t){var a=this;o.default.ajax("/qcross/m/feeds/ajax/post/biulist?ids=".concat(t),"get").then((function(t){0==t.data.error_code&&(a.bius=t.data.data)}))},listChange:function(t){return t.map((function(t){t.photo=-1!=t.photo.indexOf("imageslim")?t.photo.replace("imageslim","imageMogr2/auto-orient/thumbnail/78x78/format/jpg"):t.photo+"?imageMogr2/auto-orient/thumbnail/78x78/format/jpg";var a=t.photo_list;return a.map((function(t){-1!=t.url.indexOf("imageslim")?t.url.replace("imageslim","imageMogr2/auto-orient/thumbnail/430x324/format/jpg"):t.url=t.url+"?imageMogr2/auto-orient/thumbnail/430x324/format/jpg"})),t.photo_list=a,t})),t}}});a.default=s}).call(this,i("5486")["default"])},"66ed":function(t,a,i){"use strict";(function(t){i("6cdc");var a=e(i("3a5c"));function e(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,i("5486")["createPage"])}},[["66ed","common/runtime","common/vendor"]]]);