(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/detail/detail"],{

/***/ 23:
/*!********************************************************!*\
  !*** ./src/main.ts?{"page":"pages%2Fdetail%2Fdetail"} ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {

__webpack_require__(/*! uni-pages */ 4);

var _detail = _interopRequireDefault(__webpack_require__(/*! ./pages/detail/detail.vue */ 24));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

createPage(_detail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 24:
/*!*************************************!*\
  !*** ./src/pages/detail/detail.vue ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail.vue?vue&type=template&id=3e159eb4& */ 25);
/* harmony import */ var _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail.vue?vue&type=script&lang=js& */ 27);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _detail_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail.vue?vue&type=style&index=0&lang=less& */ 29);
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/detail/detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 25:
/*!********************************************************************!*\
  !*** ./src/pages/detail/detail.vue?vue&type=template&id=3e159eb4& ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=template&id=3e159eb4& */ 26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_template_id_3e159eb4___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 26:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/detail/detail.vue?vue&type=template&id=3e159eb4& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 27:
/*!**************************************************************!*\
  !*** ./src/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=script&lang=js& */ 28);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 28:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/detail/detail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));

var _global = _interopRequireDefault(__webpack_require__(/*! ../../static/global.js */ 17));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = _vue.default.extend({
  data: function data() {
    return {
      optionid: 0,
      showSwiperImgs: false,
      swiperIndex: 0,
      cookie: "",
      biugoDisable: false,
      poiBeento: 0,
      rankData: null,
      bius: "",
      rankHead: ["https://fes.qyerstatic.com/FoYM5V0pmxSwLHB3BQ-lt4K93v1f?imageslim", "https://fes.qyerstatic.com/FoO7qVZJyqR09TCoO45JpJcbOEo7?imageslim", "https://fes.qyerstatic.com/Fl6y7RA3ExaGgIUEMRsTw6SNYRFs?imageslim"],
      topList: ['https://fes.qyerstatic.com/FnSM0L0RkuD6fpZzjQIWXjYvJxHY?imageslim', 'https://fes.qyerstatic.com/FtRKczHDMUaI-Ij3ApFrHLlNeIlZ?imageslim', 'https://fes.qyerstatic.com/FodgZy7mY7rEmXgFNcRE1IqtmGu0?imageslim', 'https://fes.qyerstatic.com/FpQlgGGFC6xG6onfdYgEtg116YJM?imageslim', 'https://fes.qyerstatic.com/FqY10zz3wXmIA6UH4l47PtDRUZQ5?imageslim', 'https://fes.qyerstatic.com/FnjfAZk3dnEl5q-XqCXOLmCN0K89?imageslim', 'https://fes.qyerstatic.com/Fh-uSH2N3P8ZeahIia-xdYSifCJA?imageslim', 'https://fes.qyerstatic.com/FpTBVvznHeauP-1ta3uBCaatmCFb?imageslim', 'https://fes.qyerstatic.com/FhWyYglE5itITtXKQDCaZjFlBDTl?imageslim', 'https://fes.qyerstatic.com/FoIYq-QDm2PwlSdsGy4X9Pzf_I3K?imageslim'],
      poiList: [{
        value: "poi",
        label: "POI"
      }, {
        value: "city",
        label: "城市"
      }, {
        value: "country",
        label: "国家"
      }, {
        value: "article",
        label: "图文"
      }]
    };
  },
  onLoad: function onLoad(option) {
    if (option.id) {
      this.getHomeList(option.id);
      this.optionid = option.id;
    } // wx.showShareMenu({
    //   withShareTicket: true,
    //   menus: ['shareAppMessage', 'shareTimeline']
    // })

  },
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      "title": this.rankData.name,
      "path": "/pages/detail/detail?id=" + this.optionid,
      "content": this.rankData.introduction,
      "desc": this.rankData.introduction,
      'imageUrl': this.rankData.photo
    };
  },
  onShareTimeline: function onShareTimeline() {
    return {
      "title": this.rankData.name,
      query: 'id=' + this.optionid
    };
  },
  methods: {
    gotoDetail: function gotoDetail(id) {
      uni.redirectTo({
        url: '/pages/detail/detail?id=' + id,
        animationType: 'pop-in',
        animationDuration: 200
      });
    },
    // 打开poi
    openPoi: function openPoi(type, item) {
      var _this = this;

      if (!item.poi_type == "article" && type == 'poi') return;
      var urls = {
        poi: 'pages/place/poi/poi',
        city: 'pages/place/city/city',
        country: 'pages/place/country/country',
        biu: 'pages/post/post'
      };
      var path = '';
      var obj = {};

      if (type == 'biu') {
        path = urls['biu'];
        obj.id = item.id;
      } else {
        path = urls[item.poi_type];
        obj.id = item.id;
      }

      console.log(path); // 头条下

      this.openOtherApp('ttc02ab6975f004458', path + '?id=' + item.id, obj);
      return;
      uni.getSystemInfo({
        success: function success(res) {
          // 头条  宿主APP名称
          if (res.appName) {
            _this.openOtherApp('ttc02ab6975f004458', path + '?id=' + item.id, obj);
          } else if (res.host) {
            // 百度  宿主平台
            uni.navigateToMiniProgram({
              appKey: 'xTfjwxtrmbmKItoKXN7neMtuZUOGd6X8',
              path: '/' + path + '?id=' + item.id,
              extraData: obj,
              success: function success(res) {
                // 打开成功
                console.log(res);
              }
            });
          } else {
            // 微信
            _this.openOtherApp('wx19526333e900a842', path + '?id=' + item.id, obj);
          }
        }
      });
    },
    // 打开小程序
    openOtherApp: function openOtherApp(appid, path, obj) {
      uni.navigateToMiniProgram({
        appId: appid,
        path: path,
        extraData: obj,
        success: function success(res) {
          // 打开成功
          console.log(res);
        }
      });
    },
    getHomeList: function getHomeList(id) {
      var _this2 = this;

      _global.default.ajax("/rank/api/rank/get?id=".concat(id, "&tag_ranklist_show=1"), "get").then(function (res) {
        if (res.data.code == 0) {
          res.data.data.photo = res.data.data.photo.indexOf('imageslim') != -1 ? res.data.data.photo.replace('imageslim', 'imageMogr2/auto-orient/thumbnail/750/format/jpg') : res.data.data.photo + '?imageMogr2/auto-orient/thumbnail/750/format/jpg';
          res.data.data.tag_ranklist.map(function (item) {
            item.photo = item.photo.indexOf('imageslim') != -1 ? item.photo.replace('imageslim', 'imageMogr2/auto-orient/thumbnail/348x250/format/jpg') : item.photo + '?imageMogr2/auto-orient/thumbnail/78x78/format/jpg';
            item.poiListArr = item.poi_list.length.toString().split('');
            return item;
          });
          res.data.data.poi_list = _this2.listChange(res.data.data.poi_list);
          _this2.rankData = res.data.data;
          console.log(_this2.rankData); // 设置标题

          uni.setNavigationBarTitle({
            title: _this2.rankData.name
          });
          var ids = [];
          res.data.data.biu_list.map(function (item) {
            ids.push(item.id);
          });

          _this2.getBiusInfo(ids.join(","));
        }
      });
    },
    // 获取biu详情
    getBiusInfo: function getBiusInfo(ids) {
      var _this3 = this;

      _global.default.ajax("/qcross/m/feeds/ajax/post/biulist?ids=".concat(ids), "get").then(function (res) {
        if (res.data.error_code == 0) {
          _this3.bius = res.data.data;
        }
      });
    },
    listChange: function listChange(arr) {
      arr.map(function (item) {
        item.photo = item.photo.indexOf('imageslim') != -1 ? item.photo.replace('imageslim', 'imageMogr2/auto-orient/thumbnail/78x78/format/jpg') : item.photo + '?imageMogr2/auto-orient/thumbnail/78x78/format/jpg';
        var pois = item.photo_list;
        pois.map(function (img) {
          if (img.url.indexOf('imageslim') != -1) {
            img.url.replace('imageslim', 'imageMogr2/auto-orient/thumbnail/430x324/format/jpg');
          } else {
            img.url = img.url + '?imageMogr2/auto-orient/thumbnail/430x324/format/jpg';
          }
        });
        item.photo_list = pois;
        return item;
      });
      return arr;
    }
  }
});

exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-toutiao/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 29:
/*!***********************************************************************!*\
  !*** ./src/pages/detail/detail.vue?vue&type=style&index=0&lang=less& ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./detail.vue?vue&type=style&index=0&lang=less& */ 30);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_detail_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 30:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./src/pages/detail/detail.vue?vue&type=style&index=0&lang=less& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[23,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cz9hZWYyIixudWxsLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlPzk2MjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlP2E2YzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlP2FiZjciLCJ1bmktYXBwOi8vL3NyYy9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZGV0YWlsL2RldGFpbC52dWU/NDAzMSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZGV0YWlsL2RldGFpbC52dWU/ZmUzNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUNBLFVBQVUsQ0FBQyxlQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtSDtBQUNuSDtBQUMwRDtBQUNMO0FBQ2M7OztBQUduRTtBQUNtSTtBQUNuSSxnQkFBZ0IsZ0pBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFGQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQW1jLENBQWdCLCtkQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3lJdmQ7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLDJCQUZBO0FBR0Esb0JBSEE7QUFJQSxnQkFKQTtBQUtBLHlCQUxBO0FBTUEsa0JBTkE7QUFPQSxvQkFQQTtBQVFBLGNBUkE7QUFTQSxpQkFDQSxtRUFEQSxFQUVBLG1FQUZBLEVBR0EsbUVBSEEsQ0FUQTtBQWNBLGdCQUNBLG1FQURBLEVBRUEsbUVBRkEsRUFHQSxtRUFIQSxFQUlBLG1FQUpBLEVBS0EsbUVBTEEsRUFNQSxtRUFOQSxFQU9BLG1FQVBBLEVBUUEsbUVBUkEsRUFTQSxtRUFUQSxFQVVBLG1FQVZBLENBZEE7QUEwQkEsZ0JBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLE9BRkEsRUFHQTtBQUFBO0FBQUE7QUFBQSxPQUhBLEVBSUE7QUFBQTtBQUFBO0FBQUEsT0FKQTtBQTFCQTtBQWlDQSxHQW5DQTtBQW9DQSxRQXBDQSxrQkFvQ0EsTUFwQ0EsRUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBLENBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsR0E3Q0E7QUE4Q0EsbUJBOUNBLDZCQThDQSxHQTlDQSxFQThDQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSx3REFGQTtBQUdBLDJDQUhBO0FBSUEsd0NBSkE7QUFLQTtBQUxBO0FBT0EsR0F0REE7QUF1REEsaUJBdkRBLDZCQXVEQTtBQUNBO0FBQ0EsaUNBREE7QUFFQTtBQUZBO0FBSUEsR0E1REE7QUE2REE7QUFDQSxjQURBLHNCQUNBLEVBREEsRUFDQTtBQUNBO0FBQ0EsNENBREE7QUFFQSwrQkFGQTtBQUdBO0FBSEE7QUFLQSxLQVBBO0FBUUE7QUFDQSxXQVRBLG1CQVNBLElBVEEsRUFTQSxJQVRBLEVBU0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQSxxQ0FGQTtBQUdBLDhDQUhBO0FBSUE7QUFKQTtBQU1BO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLHdCQWpCQSxDQW1CQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSx3REFEQTtBQUVBLGlEQUZBO0FBR0EsNEJBSEE7QUFJQSxxQkFKQSxtQkFJQSxHQUpBLEVBSUE7QUFDQTtBQUNBO0FBRUE7QUFSQTtBQVVBLFdBWkEsTUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBdUJBLEtBdERBO0FBdURBO0FBQ0EsZ0JBeERBLHdCQXdEQSxLQXhEQSxFQXdEQSxJQXhEQSxFQXdEQSxHQXhEQSxFQXdEQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxrQkFGQTtBQUdBLHNCQUhBO0FBSUEsZUFKQSxtQkFJQSxHQUpBLEVBSUE7QUFDQTtBQUNBO0FBRUE7QUFSQTtBQVVBLEtBbkVBO0FBb0VBLGVBcEVBLHVCQW9FQSxFQXBFQSxFQW9FQTtBQUFBOztBQUNBLHNCQUNBLElBREEsaUNBQ0EsRUFEQSwyQkFDQSxLQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FKQTtBQUtBO0FBQ0E7QUFDQSx1Q0FUQSxDQVVBOztBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLFdBRkE7O0FBR0E7QUFDQTtBQUNBLE9BdkJBO0FBd0JBLEtBN0ZBO0FBOEZBO0FBQ0EsZUEvRkEsdUJBK0ZBLEdBL0ZBLEVBK0ZBO0FBQUE7O0FBQ0Esc0JBQ0EsSUFEQSxpREFDQSxHQURBLEdBQ0EsS0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTkE7QUFPQSxLQXZHQTtBQXdHQSxjQXhHQSxzQkF3R0EsR0F4R0EsRUF3R0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsU0FOQTtBQU9BO0FBQ0E7QUFDQSxPQWJBO0FBY0E7QUFDQTtBQXhIQTtBQTdEQSxFOzs7Ozs7Ozs7Ozs7Ozs7QUMzSUE7QUFBQTtBQUFBO0FBQUE7QUFBODBCLENBQWdCLDJ6QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQWwyQjtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2RldGFpbC9kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvZGV0YWlsL2RldGFpbC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlMTU5ZWI0JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTE1OWViNCZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG4gIDx2aWV3IGNsYXNzPVwiZGV0YWlsXCI+XG4gICAgPHZpZXcgY2xhc3M9XCJiYW5uZXJcIj5cbiAgICAgIDxpbWFnZSBtb2RlPVwid2lkdGhGaXhcIiA6c3JjPVwicmFua0RhdGEucGhvdG9cIiA+PC9pbWFnZT5cbiAgICA8L3ZpZXc+XG4gICAgPHZpZXcgY2xhc3M9XCJpbmZvXCI+XG4gICAgICA8dmlldyBjbGFzcz1cImgyXCI+e3tyYW5rRGF0YS5uYW1lfX08L3ZpZXc+XG4gICAgICA8dmlldyBjbGFzcz1cInBcIj57e3JhbmtEYXRhLmludHJvZHVjdGlvbn19PC92aWV3PlxuICAgIDwvdmlldz5cbiAgICA8dmlldyBjbGFzcz1cInBvaXNcIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwibGlcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiByYW5rRGF0YS5wb2lfbGlzdFwiIDprZXk9XCJpbmRleFwiIEBjbGljaz1cIm9wZW5Qb2koJ3BvaScsaXRlbSlcIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cIm5hbWUtaW1nXCI+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImZpZ3VyZVwiPlxuICAgICAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICAgICAgICBjbGFzcz1cInRvcGhlYWRcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJyYW5rRGF0YS5tZWRhbF9zaG93ID09IDEgJiYgaW5kZXggPCAzXCJcbiAgICAgICAgICAgICAgICA6c3JjPVwicmFua0hlYWRbaW5kZXhdXCJcbiAgICAgICAgICAgICAgICBtb2RlPVwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9pbWFnZT5cbiAgICAgICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJwb2loZWFkXCJcbiAgICAgICAgICAgICAgICB2LWVsc2VcbiAgICAgICAgICAgICAgICA6c3JjPVwiaXRlbS5waG90b1wiXG4gICAgICAgICAgICAgICAgbW9kZT1cImFzcGVjdEZpbGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvaW1hZ2U+XG4gICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICA8dmlldyA6Y2xhc3M9XCJbJ25hbWVzJyxpdGVtLmVuZ2xpc2huYW1lPycnOidtaWxsZSddXCI+XG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaDVcIj57e2l0ZW0uY2hpbmVzZW5hbWV9fTwvdmlldz5cbiAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJzcGFuXCIgdi1pZj1cIml0ZW0uZW5nbGlzaG5hbWVcIj57e2l0ZW0uZW5nbGlzaG5hbWV9fTwvdmlldz5cbiAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgPHZpZXdcbiAgICAgICAgICAgIGNsYXNzPVwiYml1LWJ0biBnb3RvXCJcbiAgICAgICAgICAgIHYtaWY9XCJpdGVtLnBvaV90eXBlICE9ICdhcnRpY2xlJ1wiXG4gICAgICAgICAgPua1j+iniOabtOWkmjwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgICA8dmlldyBjbGFzcz1cImNvbnRlbnQtaW1nc1wiPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwicFwiPnt7aXRlbS5pbnRyb2R1Y3Rpb259fTwvdmlldz5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cInBob3RvM1wiPlxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJsaVwiPlxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImZpZ3VyZVwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZVxuICAgICAgICAgICAgICAgICAgOnNyYz1cIml0ZW0ucGhvdG9fbGlzdFswXS51cmxcIlxuICAgICAgICAgICAgICAgICAgbW9kZT1cImFzcGVjdEZpbGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2ltYWdlPlxuICAgICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImxpXCI+XG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZmlndXJlXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICAgICAgICA6c3JjPVwiaXRlbS5waG90b19saXN0WzFdLnVybFwiXG4gICAgICAgICAgICAgICAgICBtb2RlPVwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJmaWd1cmUgaW1nMlwiPlxuICAgICAgICAgICAgICAgIDxpbWFnZVxuICAgICAgICAgICAgICAgICAgOnNyYz1cIml0ZW0ucGhvdG9fbGlzdFsyXS51cmxcIlxuICAgICAgICAgICAgICAgICAgbW9kZT1cInNjYWxlVG9GaWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9pbWFnZT5cbiAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cbiAgICA8dmlldyBjbGFzcz1cImZvb3Rlci12aWV3XCI+XG4gICAgICA8IS0tIGJpdSAtLT5cbiAgICAgIDx2aWV3IGNsYXNzPVwiYml1cy1saXN0XCIgdi1pZj1cImJpdXMgJiYgYml1cy5sZW5ndGggPiAwXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiaDNcIj7lpKflrrbmgI7kuYjnjqnvvJ88L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiYml1cy12aWV3XCIgdi1pZj1cImJpdXNcIj5cbiAgICAgICAgICA8dmlldyBjbGFzcz1cInVsXCIgdi1mb3I9XCJpIGluIFswLDFdXCIgOmtleT1cIidiaXUnK2lcIj5cbiAgICAgICAgICAgIDx2aWV3XG4gICAgICAgICAgICAgIGNsYXNzPVwibGlcIlxuICAgICAgICAgICAgICB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiBiaXVzXCJcbiAgICAgICAgICAgICAgOmtleT1cIml0ZW0uaWRcIlxuICAgICAgICAgICAgICB2LWlmPVwiaW5kZXglMiA9PSBpXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwib3BlblBvaSgnYml1JyxpdGVtKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZmlndXJlXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiaW1nXCIgbW9kZT1cIndpZHRoRml4XCIgOnNyYz1cIml0ZW0uY292ZXJcIiA+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInBcIj57e2l0ZW0udGl0bGV9fTwvdmlldz5cbiAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJpbmZvXCI+XG4gICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJ1c2VyXCI+XG4gICAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInNwYW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiaW1nXCIgbW9kZT1cImFzcGVjdEZpbGxcIiA6c3JjPVwiaXRlbS5hdmF0b3JcIiA+PC9pbWFnZT5cbiAgICAgICAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZW1cIj57e2l0ZW0udXNlcm5hbWV9fTwvdmlldz5cbiAgICAgICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJsaWtlXCI+e3tpdGVtLmxpa2VzfX08L3ZpZXc+XG4gICAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICAgIDwhLS0g5pu05aSa5qac5Y2VIC0tPlxuICAgICAgPHZpZXcgOmNsYXNzPVwiWydtb3JlLXJhbmsnLGJpdXMubGVuZ3RoIDw9IDAgPyAnbm8tYml1cyc6JyddXCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiaDJcIj7lj5HnjrDmm7TlpJrmppzljZU8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwicFwiPlxuICAgICAgICAgIOaIkeS7rOeDreeIseaXheihjO+8jFxuICAgICAgICAgIDxiciAvPuWboOS4uuaXheihjOiuqeeUn+a0u+WcqOWIq+WkhOaIkOS4uuWPr+iDve+8jFxuICAgICAgICAgIDxiciAvPuaEn+iwouS9oOS4gOebtOS7peadpeS4juept+a4uOWIhuS6q+i/meS7veeDreeIse+8jFxuICAgICAgICAgIDxiciAvPuaEv+aIkeS7rOeahOS4gOS6m+W+ruWwj+W3peS9nO+8jFxuICAgICAgICAgIDxiciAvPuiDveW4pue7meS9oOaXoOmZkOaXheihjOeBteaEn+OAglxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwidWxcIj5cbiAgICAgICAgICA8dmlld1xuICAgICAgICAgICAgY2xhc3M9XCJsaVwiXG4gICAgICAgICAgICB2LWZvcj1cIml0ZW0gaW4gcmFua0RhdGEudGFnX3JhbmtsaXN0XCJcbiAgICAgICAgICAgIDprZXk9XCJpdGVtLmlkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImltZy12aWV3XCIgQGNsaWNrPVwiZ290b0RldGFpbChpdGVtLmlkKVwiPlxuXG4gICAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImltZ1wiIG1vZGU9XCJhc3BlY3RGaWxsXCIgOnNyYz1cIml0ZW0ucGhvdG9cIiA+PC9pbWFnZT5cbiAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJzcGFuXCI+XG4gICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJpXCIgdi1mb3I9XCJpIGluIGl0ZW0ucG9pTGlzdEFyclwiIDprZXk9XCInbnVtJytpXCI+XG4gICAgICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpbWdcIiBtb2RlPVwiaGVpZ2h0Rml4XCIgOnNyYz1cInRvcExpc3RbaV1cIiA+PC9pbWFnZT5cbiAgICAgICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJwXCI+e3tpdGVtLm5hbWV9fTwvdmlldz5cbiAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJmaWd1cmVcIj5cbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpbWdcIiBtb2RlPVwid2lkdGhGaXhcIiBzcmM9XCJodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GcmdKTDBZdTk0djVUZ2kwTEN0Yk00cnhhVmYxP2ltYWdlc2xpbVwiID48L2ltYWdlPlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG4gICAgPC92aWV3PlxuICA8L3ZpZXc+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgaW1wb3J0IFZ1ZSBmcm9tICd2dWUnO1xuICBpbXBvcnQgZ2xvYmFsRnVuIGZyb20gJy4uLy4uL3N0YXRpYy9nbG9iYWwuanMnXG5cdGV4cG9ydCBkZWZhdWx0IFZ1ZS5leHRlbmQoe1xuXHRcdGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBvcHRpb25pZDogMCxcbiAgICAgICAgc2hvd1N3aXBlckltZ3M6IGZhbHNlLFxuICAgICAgICBzd2lwZXJJbmRleDogMCxcbiAgICAgICAgY29va2llOiBcIlwiLFxuICAgICAgICBiaXVnb0Rpc2FibGU6IGZhbHNlLFxuICAgICAgICBwb2lCZWVudG86IDAsXG4gICAgICAgIHJhbmtEYXRhOiBudWxsLFxuICAgICAgICBiaXVzOiBcIlwiLFxuICAgICAgICByYW5rSGVhZDogW1xuICAgICAgICAgIFwiaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRm9ZTTVWMHBteFN3TEhCM0JRLWx0NEs5M3YxZj9pbWFnZXNsaW1cIixcbiAgICAgICAgICBcImh0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZvTzdxVlpKeXFSMDlUQ29PNDVKcEpjYk9Fbzc/aW1hZ2VzbGltXCIsXG4gICAgICAgICAgXCJodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GbDZ5N1JBM0V4YUdnSVVFTVJzVHc2U05ZUkZzP2ltYWdlc2xpbVwiXG4gICAgICAgIF0sXG4gICAgICAgIHRvcExpc3Q6IFtcbiAgICAgICAgICAnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRm5TTTBMMFJrdUQ2ZnBaempRSVdYall2SnhIWT9pbWFnZXNsaW0nLFxuICAgICAgICAgICdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GdFJLY3pIRE1VYUktSWozQXBGckhMbE5lSWxaP2ltYWdlc2xpbScsXG4gICAgICAgICAgJ2h0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZvZGdaeTdtWTdyRW1YZ0ZOY1JFMUlxdG1HdTA/aW1hZ2VzbGltJyxcbiAgICAgICAgICAnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRnBRbGdHR0ZDNnhHNm9uZmRZZ0V0ZzExNllKTT9pbWFnZXNsaW0nLFxuICAgICAgICAgICdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GcVkxMHp6M3dYbUlBNlVINGw0N1B0RFJVWlE1P2ltYWdlc2xpbScsXG4gICAgICAgICAgJ2h0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZuamZBWmszZG5FbDVxLVhxQ1hPTG1DTjBLODk/aW1hZ2VzbGltJyxcbiAgICAgICAgICAnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRmgtdVNIMk4zUDhaZWFoSWlhLXhkWVNpZkNKQT9pbWFnZXNsaW0nLFxuICAgICAgICAgICdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GcFRCVnZ6bkhlYXVQLTF0YTN1QkNhYXRtQ0ZiP2ltYWdlc2xpbScsXG4gICAgICAgICAgJ2h0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZoV3lZZ2xFNWl0SVR0WEtRRENhWmpGbEJEVGw/aW1hZ2VzbGltJyxcbiAgICAgICAgICAnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRm9JWXEtUURtMlB3bFNkc0d5NFg5UHpmX0kzSz9pbWFnZXNsaW0nLFxuICAgICAgICBdLFxuICAgICAgICBwb2lMaXN0OiBbXG4gICAgICAgICAgeyB2YWx1ZTogXCJwb2lcIiwgbGFiZWw6IFwiUE9JXCIgfSxcbiAgICAgICAgICB7IHZhbHVlOiBcImNpdHlcIiwgbGFiZWw6IFwi5Z+O5biCXCIgfSxcbiAgICAgICAgICB7IHZhbHVlOiBcImNvdW50cnlcIiwgbGFiZWw6IFwi5Zu95a62XCIgfSxcbiAgICAgICAgICB7IHZhbHVlOiBcImFydGljbGVcIiwgbGFiZWw6IFwi5Zu+5paHXCIgfVxuICAgICAgICBdXG4gICAgICB9O1xuICAgIH0sXG4gICAgb25Mb2FkKG9wdGlvbikge1xuICAgICAgaWYob3B0aW9uLmlkKXtcbiAgICAgICAgdGhpcy5nZXRIb21lTGlzdChvcHRpb24uaWQpXG4gICAgICAgIHRoaXMub3B0aW9uaWQgPSBvcHRpb24uaWRcbiAgICAgIH1cbiAgICAgIC8vIHd4LnNob3dTaGFyZU1lbnUoe1xuICAgICAgLy8gICB3aXRoU2hhcmVUaWNrZXQ6IHRydWUsXG4gICAgICAvLyAgIG1lbnVzOiBbJ3NoYXJlQXBwTWVzc2FnZScsICdzaGFyZVRpbWVsaW5lJ11cbiAgICAgIC8vIH0pXG5cdFx0fSxcbiAgICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIFwidGl0bGVcIjogdGhpcy5yYW5rRGF0YS5uYW1lLFxuICAgICAgICBcInBhdGhcIjogXCIvcGFnZXMvZGV0YWlsL2RldGFpbD9pZD1cIit0aGlzLm9wdGlvbmlkLFxuICAgICAgICBcImNvbnRlbnRcIjogdGhpcy5yYW5rRGF0YS5pbnRyb2R1Y3Rpb24sXG4gICAgICAgIFwiZGVzY1wiOiB0aGlzLnJhbmtEYXRhLmludHJvZHVjdGlvbixcbiAgICAgICAgJ2ltYWdlVXJsJzogdGhpcy5yYW5rRGF0YS5waG90b1xuICAgICAgfVxuICAgIH0sXG4gICAgb25TaGFyZVRpbWVsaW5lKCl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBcInRpdGxlXCI6IHRoaXMucmFua0RhdGEubmFtZSxcbiAgICAgICAgcXVlcnk6ICdpZD0nK3RoaXMub3B0aW9uaWRcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgZ290b0RldGFpbChpZCl7XG4gICAgICAgIHVuaS5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9kZXRhaWwvZGV0YWlsP2lkPScraWQsXG4gICAgICAgICAgICBhbmltYXRpb25UeXBlOiAncG9wLWluJyxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAyMDBcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgLy8g5omT5byAcG9pXG4gICAgICBvcGVuUG9pKHR5cGUsaXRlbSl7XG4gICAgICAgIGlmKCFpdGVtLnBvaV90eXBlID09IFwiYXJ0aWNsZVwiICYmIHR5cGUgPT0gJ3BvaScpIHJldHVyblxuICAgICAgICBsZXQgdXJscyA9IHtcbiAgICAgICAgICBwb2k6J3BhZ2VzL3BsYWNlL3BvaS9wb2knLFxuICAgICAgICAgIGNpdHk6J3BhZ2VzL3BsYWNlL2NpdHkvY2l0eScsXG4gICAgICAgICAgY291bnRyeToncGFnZXMvcGxhY2UvY291bnRyeS9jb3VudHJ5JyxcbiAgICAgICAgICBiaXU6ICdwYWdlcy9wb3N0L3Bvc3QnXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhdGggPSAnJ1xuICAgICAgICBsZXQgb2JqID0ge31cbiAgICAgICAgaWYodHlwZSA9PSAnYml1Jyl7XG4gICAgICAgICAgcGF0aCA9IHVybHNbJ2JpdSddXG4gICAgICAgICAgb2JqLmlkID0gaXRlbS5pZFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBwYXRoID0gdXJsc1tpdGVtLnBvaV90eXBlXVxuICAgICAgICAgIG9iai5pZCA9IGl0ZW0uaWRcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhwYXRoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOWktOadoeS4i1xuICAgICAgICB0aGlzLm9wZW5PdGhlckFwcCgndHRjMDJhYjY5NzVmMDA0NDU4JyxwYXRoKyc/aWQ9JytpdGVtLmlkLG9iailcbiAgICAgICAgcmV0dXJuO1xuICAgICAgICB1bmkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICAgICAgc3VjY2VzczogIChyZXMpPT4ge1xuICAgICAgICAgICAgLy8g5aS05p2hICDlrr/kuLtBUFDlkI3np7BcbiAgICAgICAgICAgIGlmKHJlcy5hcHBOYW1lKXtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5PdGhlckFwcCgndHRjMDJhYjY5NzVmMDA0NDU4JyxwYXRoKyc/aWQ9JytpdGVtLmlkLG9iailcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlcy5ob3N0KXtcbiAgICAgICAgICAgICAgLy8g55m+5bqmICDlrr/kuLvlubPlj7BcbiAgICAgICAgICAgICAgdW5pLm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XG4gICAgICAgICAgICAgICAgYXBwS2V5OiAneFRmand4dHJtYm1LSXRvS1hON25lTXR1WlVPR2Q2WDgnLFxuICAgICAgICAgICAgICAgIHBhdGg6ICcvJytwYXRoKyc/aWQ9JytpdGVtLmlkLFxuICAgICAgICAgICAgICAgIGV4dHJhRGF0YTogb2JqLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgICAvLyDmiZPlvIDmiJDlip9cbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgLy8g5b6u5L+hXG4gICAgICAgICAgICAgIHRoaXMub3Blbk90aGVyQXBwKCd3eDE5NTI2MzMzZTkwMGE4NDInLHBhdGgrJz9pZD0nK2l0ZW0uaWQsb2JqKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDmiZPlvIDlsI/nqIvluo9cbiAgICAgIG9wZW5PdGhlckFwcChhcHBpZCxwYXRoLG9iail7XG4gICAgICAgIHVuaS5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xuICAgICAgICAgIGFwcElkOiBhcHBpZCxcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIGV4dHJhRGF0YTogb2JqLFxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAvLyDmiZPlvIDmiJDlip9cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgZ2V0SG9tZUxpc3QoaWQpe1xuICAgICAgICBnbG9iYWxGdW5cbiAgICAgICAgLmFqYXgoYC9yYW5rL2FwaS9yYW5rL2dldD9pZD0ke2lkfSZ0YWdfcmFua2xpc3Rfc2hvdz0xYCwgXCJnZXRcIilcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICBpZihyZXMuZGF0YS5jb2RlID09IDApe1xuICAgICAgICAgICAgcmVzLmRhdGEuZGF0YS5waG90byA9IHJlcy5kYXRhLmRhdGEucGhvdG8uaW5kZXhPZignaW1hZ2VzbGltJykgIT0gLTEgPyByZXMuZGF0YS5kYXRhLnBob3RvLnJlcGxhY2UoJ2ltYWdlc2xpbScsICdpbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3RodW1ibmFpbC83NTAvZm9ybWF0L2pwZycpIDogcmVzLmRhdGEuZGF0YS5waG90bysnP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvdGh1bWJuYWlsLzc1MC9mb3JtYXQvanBnJ1xuICAgICAgICAgICAgcmVzLmRhdGEuZGF0YS50YWdfcmFua2xpc3QubWFwKGl0ZW09PntcbiAgICAgICAgICAgICAgaXRlbS5waG90byA9IGl0ZW0ucGhvdG8uaW5kZXhPZignaW1hZ2VzbGltJykgIT0gLTEgPyBpdGVtLnBob3RvLnJlcGxhY2UoJ2ltYWdlc2xpbScsICdpbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3RodW1ibmFpbC8zNDh4MjUwL2Zvcm1hdC9qcGcnKSA6IGl0ZW0ucGhvdG8rJz9pbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3RodW1ibmFpbC83OHg3OC9mb3JtYXQvanBnJ1xuICAgICAgICAgICAgICBpdGVtLnBvaUxpc3RBcnIgPSBpdGVtLnBvaV9saXN0Lmxlbmd0aC50b1N0cmluZygpLnNwbGl0KCcnKVxuICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEucG9pX2xpc3QgPSB0aGlzLmxpc3RDaGFuZ2UocmVzLmRhdGEuZGF0YS5wb2lfbGlzdClcbiAgICAgICAgICAgIHRoaXMucmFua0RhdGEgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yYW5rRGF0YSk7XG4gICAgICAgICAgICAvLyDorr7nva7moIfpophcbiAgICAgICAgICAgIHVuaS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLnJhbmtEYXRhLm5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGlkcyA9IFtdO1xuICAgICAgICAgICAgcmVzLmRhdGEuZGF0YS5iaXVfbGlzdC5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgIGlkcy5wdXNoKGl0ZW0uaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmdldEJpdXNJbmZvKGlkcy5qb2luKFwiLFwiKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIOiOt+WPlmJpdeivpuaDhVxuICAgICAgZ2V0Qml1c0luZm8oaWRzKSB7XG4gICAgICAgIGdsb2JhbEZ1blxuICAgICAgICAgIC5hamF4KGAvcWNyb3NzL20vZmVlZHMvYWpheC9wb3N0L2JpdWxpc3Q/aWRzPSR7aWRzfWAsXCJnZXRcIilcbiAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmVycm9yX2NvZGUgPT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLmJpdXMgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGxpc3RDaGFuZ2UoYXJyKXtcbiAgICAgICAgYXJyLm1hcChpdGVtPT57XG4gICAgICAgICAgaXRlbS5waG90byA9IGl0ZW0ucGhvdG8uaW5kZXhPZignaW1hZ2VzbGltJykgIT0gLTEgPyBpdGVtLnBob3RvLnJlcGxhY2UoJ2ltYWdlc2xpbScsICdpbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3RodW1ibmFpbC83OHg3OC9mb3JtYXQvanBnJykgOiBpdGVtLnBob3RvKyc/aW1hZ2VNb2dyMi9hdXRvLW9yaWVudC90aHVtYm5haWwvNzh4NzgvZm9ybWF0L2pwZydcbiAgICAgICAgICBcbiAgICAgICAgICBsZXQgcG9pcyA9IGl0ZW0ucGhvdG9fbGlzdDtcbiAgICAgICAgICBwb2lzLm1hcChpbWc9PntcbiAgICAgICAgICAgIGlmKGltZy51cmwuaW5kZXhPZignaW1hZ2VzbGltJykgIT0gLTEpe1xuICAgICAgICAgICAgICBpbWcudXJsLnJlcGxhY2UoJ2ltYWdlc2xpbScsICdpbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3RodW1ibmFpbC80MzB4MzI0L2Zvcm1hdC9qcGcnKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIGltZy51cmwgPSBpbWcudXJsKyc/aW1hZ2VNb2dyMi9hdXRvLW9yaWVudC90aHVtYm5haWwvNDMweDMyNC9mb3JtYXQvanBnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgICAgaXRlbS5waG90b19saXN0ID0gcG9pc1xuICAgICAgICAgIHJldHVybiBpdGVtXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhcnJcbiAgICAgIH0sXG4gICAgfVxuXHR9KTtcbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJsZXNzXCI+XG4uZGV0YWlsIHtcbiAgYmFja2dyb3VuZDogcmdiYSgzMCwgMzAsIDMwLCAxKTtcbiAgb3ZlcmZsb3c6IGF1dG87XG5cbiAgLmJhbm5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMzAwcnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm90dG9tOiAtMXB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHRyYW5zcGFyZW50IDAlLCByZ2JhKDMwLCAzMCwgMzAsIDAuMSkgMTAlLCByZ2JhKDMwLCAzMCwgMzAsIDEpKTtcbiAgICB9XG4gICAgaW1hZ2V7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG4gIH1cblxuICA+LmluZm8ge1xuICAgIHBhZGRpbmc6IDAgODBycHggNjRycHg7XG4gICAgY29sb3I6ICNGRURCOUM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICAmOmFmdGVyLCAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHdpZHRoOiAxMDhycHg7XG4gICAgICBoZWlnaHQ6IDkwcnB4O1xuICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GbXIyc19kck8tMXNVUFdZdm56bDZRSzRtX1ROP2ltYWdlc2xpbScpIG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgIH1cblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGxlZnQ6IDMwcnB4O1xuICAgICAgdG9wOiAwO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIHJpZ2h0OiAzMnJweDtcbiAgICAgIGJvdHRvbTo1MHJweDtcbiAgICB9XG5cbiAgICAuaDIge1xuICAgICAgZm9udC1zaXplOiA0MHJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDM0cnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQycnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgLnAge1xuICAgICAgZm9udC1zaXplOiAyNnJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzOHJweDtcbiAgICAgIGNvbG9yOiAjRkVEQjlDO1xuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICB0ZXh0LWp1c3RpZnk6IGludGVyLWlkZW9ncmFwaDtcbiAgICB9XG4gIH1cblxuICAucG9pcyB7XG4gICAgcGFkZGluZzogMCAxOHJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgPi5saSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBycHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBwYWRkaW5nOiAzMHJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQwcnB4O1xuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDgwcnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHJweDtcblxuICAgICAgICAubmFtZS1pbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLmZpZ3VyZSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcnB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNHJweDtcblxuICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAgICAgICAmLnRvcGhlYWQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA5NHJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDc1cnB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHJweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICYucG9paGVhZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwcnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogODBycHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5hbWVzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG5cbiAgICAgICAgICAgICYubWlsbGUge1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmg1IHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNzBycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogNDJycHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJycHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MnJweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zcGFuIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzNzBycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjhycHg7XG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOHJweDtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnJweDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmJpdS1idG4ge1xuICAgICAgICAgIGZsZXgtc2hyaW5rOiAxO1xuICAgICAgICAgIHdpZHRoOiAxODBycHg7XG4gICAgICAgICAgaGVpZ2h0OiA2MHJweDtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNjBycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDYwcnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhycHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHotaW5kZXg6IDM7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgJi5nb3RvIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMGRlZywgIzE1REI5MSwgIzA2Q0NDNyk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAxMHB4IDFweCByZ2JhKDIxLCAyMTksIDE0NSwgMC40KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmNvbnRlbnQtaW1ncyB7XG4gICAgICAgIC5wIHtcbiAgICAgICAgICBmb250LXNpemU6IDI2cnB4O1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBycHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjJycHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgICAgICAgICB0ZXh0LWp1c3RpZnk6IGludGVyLWlkZW9ncmFwaDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5waG90bzMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgLmxpIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDQzMHJweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMjRycHg7XG4gICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgICAgICAgLmZpZ3VyZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQzMHJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyNHJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cnB4IDAgMCA4cnB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgaW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDQzMHJweDtcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogMzI0cnB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHJweCAwIDAgOHJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmOm50aC1vZi10eXBlKDIpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBycHg7XG5cbiAgICAgICAgICAgICAgICAuZmlndXJlIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBycHg7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2MHJweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgOHJweCA4cnB4IDA7XG4gICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgICAgaW1hZ2V7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBycHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTYwcnB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDhycHggOHJweCAwO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5mb290ZXItdmlldyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMnJweCAyMnJweCAwIDA7XG4gIH1cblxuICAuYml1cy1saXN0IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDIycnB4IDIycnB4IDAgMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDYwcnB4IDE4cnB4IDYwcnB4O1xuXG4gICAgLmgzIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNDRycHg7XG4gICAgICBmb250LXNpemU6IDM4cnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQwcnB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcnB4O1xuICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GcnlEbkNDcGVKUHpTRUl0YWFCeEZNNDYzcTdTP2ltYWdlc2xpbScpIG5vLXJlcGVhdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogNDBycHggNDBycHg7XG4gICAgfVxuICAgIC5iaXVzLXZpZXcge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgICAgLnVsIHtcbiAgICAgICAgd2lkdGg6IDM0OHJweDtcblxuICAgICAgICAubGkge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcnB4O1xuXG4gICAgICAgICAgLmZpZ3VyZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cnB4O1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4cnB4O1xuICAgICAgICAgICAgaW1hZ2V7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICA+LnAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnJweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHJweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJycHg7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAgICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmluZm8ge1xuICAgICAgICAgICAgaGVpZ2h0OiAzNnJweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAudXNlciB7XG4gICAgICAgICAgICAgIGhlaWdodDogMzZycHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgICAgLnNwYW4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzNnJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcnB4O1xuXG4gICAgICAgICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMzZycHg7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cnB4O1xuICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5lbSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnJweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnJweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGlrZSB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyNnJweDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IERJTiBDb25kZW5zZWQ7XG5cbiAgICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMzRycHg7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02MCUpO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyNnJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cnB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRnZENlVFY3lGbEg1RWdDOFZFOGRmWnZEblFNdj9pbWFnZXNsaW0nKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG59XG4ubW9yZS1yYW5rIHtcbiAgICBwYWRkaW5nOiAwIDIwcnB4IDgwcnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmYgdXJsKCdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GbUdsTDdUNFlydFVTOVRwNjEtUWRKVXYzSl9SP2ltYWdlc2xpbScpIG5vLXJlcGVhdCAxMDAlIDIwcHg7XG4gICAgYmFja2dyb3VuZC1zaXplOiA3MTRycHggNjk2cnB4O1xuXG4gICAgJi5uby1iaXVzIHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIycnB4IDIycnB4IDAgMDtcbiAgICB9XG5cbiAgICAuaDIge1xuICAgICAgcGFkZGluZzogNjBycHggMCAzNHJweCA2MHJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MnJweDtcbiAgICAgIGZvbnQtc2l6ZTogNDJycHg7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgID4ucCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDYwcnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQ2cnB4O1xuICAgICAgZm9udC1zaXplOiAyNnJweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDJycHg7XG4gICAgfVxuXG4gICAgLnVsIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiA5MHJweDtcblxuICAgICAgLmxpIHtcbiAgICAgICAgd2lkdGg6IDM0OHJweDtcbiAgICAgICAgaGVpZ2h0OiAyNTBycHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC5pbWctdmlld3tcbiAgICAgICAgICB3aWR0aDogMzQ4cnB4O1xuICAgICAgICAgIGhlaWdodDogMjUwcnB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZycHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3BhbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTUwcnB4O1xuICAgICAgICAgIGhlaWdodDogNjBycHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZycHggMCAxNnJweCAwO1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI0ZGRUNDQiwgI0NGQjM4MSk7XG4gICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHotaW5kZXg6IDI7XG5cbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDcycnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRm1sSVp1WnZpTXROUFRocUJqWjB1SVhRSlQwMz9pbWFnZXNsaW0nKSBuby1yZXBlYXQ7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaSB7XG4gICAgICAgICAgICB3aWR0aDogMjRycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI4cnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAuaW1nIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMnJweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwcnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5wIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgcmlnaHQ6IDMwcnB4O1xuICAgICAgICAgIGJvdHRvbTogMzBycHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQycnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZycHg7XG4gICAgICAgICAgd2lkdGg6IDIyOHJweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDMwcnB4ICMwMDA7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5maWd1cmUge1xuICAgICAgaGVpZ2h0OiA0OHJweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgLmltZyB7XG4gICAgICAgIHdpZHRoOiAxNjZycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3N0eWxlPiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtNCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtNSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtNCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtNSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCIiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNTk2NDM4MDU4MjU3XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9Vc2Vycy9ob3V5YW9odWkvd3d3cm9vdC9RWWVyL3p3b3JsZHJhbmtpbmcvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wiaG1yXCI6dHJ1ZSxcInB1YmxpY1BhdGhcIjpcIi4uLy4uL1wiLFwibG9jYWxzXCI6ZmFsc2V9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgbW9kdWxlLmhvdC5hY2NlcHQodW5kZWZpbmVkLCBjc3NSZWxvYWQpO1xuICAgIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ==