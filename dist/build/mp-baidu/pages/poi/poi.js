(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/poi/poi"],{"17aa":function(t,e,n){"use strict";(function(t){n("6cdc");var e=a(n("907e"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("5486")["createPage"])},"49a7":function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var r=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"6f2e":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}var u=a.default.extend({data:function(){return{webId:"",url:"https://daole.qyer.com/zworldrankingdetail?id=177",shareurl:""}},onLoad:function(t){if(t.data){var e=t.url;this.shareurl=e}},onShareAppMessage:function(t){return{title:"最世界榜单",path:"/pages/poi/poi?url="+this.shareurl,content:"一起发现最世界，Mark你走过的山水，为你的远方打榜！",desc:"一起发现最世界，Mark你走过的山水，为你的远方打榜！"}},methods:{poiDataInfo:function(){this.url=this.shareurl,-1==this.shareurl.indexOf("https%")&&(this.url=this.shareurl.replace("http%","https%")),this.url="https://m.qyer.com/place/sri-lanka"}}});e.default=u},"907e":function(t,e,n){"use strict";n.r(e);var a=n("49a7"),r=n("9c11");for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);n("ab47");var i,o=n("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"8a84c6a0",null,!1,a["a"],i);e["default"]=c.exports},"9c11":function(t,e,n){"use strict";n.r(e);var a=n("6f2e"),r=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=r.a},ab47:function(t,e,n){"use strict";var a=n("f7e8"),r=n.n(a);r.a},f7e8:function(t,e,n){}},[["17aa","common/runtime","common/vendor"]]]);