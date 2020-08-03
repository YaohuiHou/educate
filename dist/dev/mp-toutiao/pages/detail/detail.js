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
    }
  },
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      "title": this.rankData.name,
      "path": "/pages/detail/detail",
      "content": this.rankData.introduction,
      "desc": this.rankData.introduction,
      'imageUrl': this.rankData.photo
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

      console.log(path);
      this.openOtherApp('ttc02ab6975f004458', path + '?id=' + item.id, obj);
      return;
      uni.getSystemInfo({
        success: function success(res) {
          // 头条  宿主APP名称
          if (res.appName) {
            console.log(tt.navigateToMiniProgram);

            if (tt.navigateToMiniProgram) {
              _this.openOtherApp('ttc02ab6975f004458', path + '?id=' + item.id, obj);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cz9hZWYyIixudWxsLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlPzk2MjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlP2E2YzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlP2FiZjciLCJ1bmktYXBwOi8vL3NyYy9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZGV0YWlsL2RldGFpbC52dWU/NDAzMSIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvZGV0YWlsL2RldGFpbC52dWU/ZmUzNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQUNBLFVBQVUsQ0FBQyxlQUFELENBQVYsQzs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtSDtBQUNuSDtBQUMwRDtBQUNMO0FBQ2M7OztBQUduRTtBQUNtSTtBQUNuSSxnQkFBZ0IsZ0pBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLHFGQUFVO0FBQ1o7QUFDQTs7QUFFQTtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2QmY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQW1jLENBQWdCLCtkQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3lJdmQ7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBQ0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLG9CQUZBO0FBR0EsZ0JBSEE7QUFJQSx5QkFKQTtBQUtBLGtCQUxBO0FBTUEsb0JBTkE7QUFPQSxjQVBBO0FBUUEsaUJBQ0EsbUVBREEsRUFFQSxtRUFGQSxFQUdBLG1FQUhBLENBUkE7QUFhQSxnQkFDQSxtRUFEQSxFQUVBLG1FQUZBLEVBR0EsbUVBSEEsRUFJQSxtRUFKQSxFQUtBLG1FQUxBLEVBTUEsbUVBTkEsRUFPQSxtRUFQQSxFQVFBLG1FQVJBLEVBU0EsbUVBVEEsRUFVQSxtRUFWQSxDQWJBO0FBeUJBLGdCQUNBO0FBQUE7QUFBQTtBQUFBLE9BREEsRUFFQTtBQUFBO0FBQUE7QUFBQSxPQUZBLEVBR0E7QUFBQTtBQUFBO0FBQUEsT0FIQSxFQUlBO0FBQUE7QUFBQTtBQUFBLE9BSkE7QUF6QkE7QUFnQ0EsR0FsQ0E7QUFtQ0EsUUFuQ0Esa0JBbUNBLE1BbkNBLEVBbUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0F2Q0E7QUF3Q0EsbUJBeENBLDZCQXdDQSxHQXhDQSxFQXdDQTtBQUNBO0FBQ0EsaUNBREE7QUFFQSxvQ0FGQTtBQUdBLDJDQUhBO0FBSUEsd0NBSkE7QUFLQTtBQUxBO0FBT0EsR0FoREE7QUFpREE7QUFDQSxjQURBLHNCQUNBLEVBREEsRUFDQTtBQUNBO0FBQ0EsNENBREE7QUFFQSwrQkFGQTtBQUdBO0FBSEE7QUFLQSxLQVBBO0FBUUE7QUFDQSxXQVRBLG1CQVNBLElBVEEsRUFTQSxJQVRBLEVBU0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQSxxQ0FGQTtBQUdBLDhDQUhBO0FBSUE7QUFKQTtBQU1BO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FIQSxNQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBLHdEQURBO0FBRUEsaURBRkE7QUFHQSw0QkFIQTtBQUlBLHFCQUpBLG1CQUlBLEdBSkEsRUFJQTtBQUNBO0FBQ0E7QUFFQTtBQVJBO0FBVUEsV0FaQSxNQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUEyQkEsS0F6REE7QUEwREE7QUFDQSxnQkEzREEsd0JBMkRBLEtBM0RBLEVBMkRBLElBM0RBLEVBMkRBLEdBM0RBLEVBMkRBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLGtCQUZBO0FBR0Esc0JBSEE7QUFJQSxlQUpBLG1CQUlBLEdBSkEsRUFJQTtBQUNBO0FBQ0E7QUFFQTtBQVJBO0FBVUEsS0F0RUE7QUF1RUEsZUF2RUEsdUJBdUVBLEVBdkVBLEVBdUVBO0FBQUE7O0FBQ0Esc0JBQ0EsSUFEQSxpQ0FDQSxFQURBLDJCQUNBLEtBREEsRUFFQSxJQUZBLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUpBO0FBS0E7QUFDQTtBQUNBLHVDQVRBLENBVUE7O0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FGQTs7QUFHQTtBQUNBO0FBQ0EsT0F2QkE7QUF3QkEsS0FoR0E7QUFpR0E7QUFDQSxlQWxHQSx1QkFrR0EsR0FsR0EsRUFrR0E7QUFBQTs7QUFDQSxzQkFDQSxJQURBLGlEQUNBLEdBREEsR0FDQSxLQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FOQTtBQU9BLEtBMUdBO0FBMkdBLGNBM0dBLHNCQTJHQSxHQTNHQSxFQTJHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQSxTQU5BO0FBT0E7QUFDQTtBQUNBLE9BYkE7QUFjQTtBQUNBO0FBM0hBO0FBakRBLEU7Ozs7Ozs7Ozs7Ozs7OztBQzNJQTtBQUFBO0FBQUE7QUFBQTtBQUE4MEIsQ0FBZ0IsMnpCQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBbDJCO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvZGV0YWlsL2RldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2UxNTllYjQmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2RldGFpbC9kZXRhaWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci9wYWdlLW1ldGEuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlMTU5ZWI0JlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxufVxudmFyIHJlY3ljbGFibGVSZW5kZXIgPSBmYWxzZVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zY3JpcHQuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cbiAgPHZpZXcgY2xhc3M9XCJkZXRhaWxcIj5cbiAgICA8dmlldyBjbGFzcz1cImJhbm5lclwiPlxuICAgICAgPGltYWdlIG1vZGU9XCJ3aWR0aEZpeFwiIDpzcmM9XCJyYW5rRGF0YS5waG90b1wiID48L2ltYWdlPlxuICAgIDwvdmlldz5cbiAgICA8dmlldyBjbGFzcz1cImluZm9cIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwiaDJcIj57e3JhbmtEYXRhLm5hbWV9fTwvdmlldz5cbiAgICAgIDx2aWV3IGNsYXNzPVwicFwiPnt7cmFua0RhdGEuaW50cm9kdWN0aW9ufX08L3ZpZXc+XG4gICAgPC92aWV3PlxuICAgIDx2aWV3IGNsYXNzPVwicG9pc1wiPlxuICAgICAgPHZpZXcgY2xhc3M9XCJsaVwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHJhbmtEYXRhLnBvaV9saXN0XCIgOmtleT1cImluZGV4XCIgQGNsaWNrPVwib3BlblBvaSgncG9pJyxpdGVtKVwiPlxuICAgICAgICA8dmlldyBjbGFzcz1cImhlYWRlclwiPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwibmFtZS1pbWdcIj5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZmlndXJlXCI+XG4gICAgICAgICAgICAgIDxpbWFnZVxuICAgICAgICAgICAgICAgIGNsYXNzPVwidG9waGVhZFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInJhbmtEYXRhLm1lZGFsX3Nob3cgPT0gMSAmJiBpbmRleCA8IDNcIlxuICAgICAgICAgICAgICAgIDpzcmM9XCJyYW5rSGVhZFtpbmRleF1cIlxuICAgICAgICAgICAgICAgIG1vZGU9XCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2ltYWdlPlxuICAgICAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICAgICAgICBjbGFzcz1cInBvaWhlYWRcIlxuICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgIDpzcmM9XCJpdGVtLnBob3RvXCJcbiAgICAgICAgICAgICAgICBtb2RlPVwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPC9pbWFnZT5cbiAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgIDx2aWV3IDpjbGFzcz1cIlsnbmFtZXMnLGl0ZW0uZW5nbGlzaG5hbWU/Jyc6J21pbGxlJ11cIj5cbiAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJoNVwiPnt7aXRlbS5jaGluZXNlbmFtZX19PC92aWV3PlxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInNwYW5cIiB2LWlmPVwiaXRlbS5lbmdsaXNobmFtZVwiPnt7aXRlbS5lbmdsaXNobmFtZX19PC92aWV3PlxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICA8dmlld1xuICAgICAgICAgICAgY2xhc3M9XCJiaXUtYnRuIGdvdG9cIlxuICAgICAgICAgICAgdi1pZj1cIml0ZW0ucG9pX3R5cGUgIT0gJ2FydGljbGUnXCJcbiAgICAgICAgICA+5rWP6KeI5pu05aSaPC92aWV3PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY29udGVudC1pbWdzXCI+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJwXCI+e3tpdGVtLmludHJvZHVjdGlvbn19PC92aWV3PlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwicGhvdG8zXCI+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImxpXCI+XG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZmlndXJlXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICAgICAgICA6c3JjPVwiaXRlbS5waG90b19saXN0WzBdLnVybFwiXG4gICAgICAgICAgICAgICAgICBtb2RlPVwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGlcIj5cbiAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJmaWd1cmVcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICAgICAgICAgIDpzcmM9XCJpdGVtLnBob3RvX2xpc3RbMV0udXJsXCJcbiAgICAgICAgICAgICAgICAgIG1vZGU9XCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9pbWFnZT5cbiAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImZpZ3VyZSBpbWcyXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICAgICAgICA6c3JjPVwiaXRlbS5waG90b19saXN0WzJdLnVybFwiXG4gICAgICAgICAgICAgICAgICBtb2RlPVwic2NhbGVUb0ZpbGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2ltYWdlPlxuICAgICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgPC92aWV3PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG4gICAgPC92aWV3PlxuICAgIDx2aWV3IGNsYXNzPVwiZm9vdGVyLXZpZXdcIj5cbiAgICAgIDwhLS0gYml1IC0tPlxuICAgICAgPHZpZXcgY2xhc3M9XCJiaXVzLWxpc3RcIiB2LWlmPVwiYml1cyAmJiBiaXVzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJoM1wiPuWkp+WutuaAjuS5iOeOqe+8nzwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJiaXVzLXZpZXdcIiB2LWlmPVwiYml1c1wiPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwidWxcIiB2LWZvcj1cImkgaW4gWzAsMV1cIiA6a2V5PVwiJ2JpdScraVwiPlxuICAgICAgICAgICAgPHZpZXdcbiAgICAgICAgICAgICAgY2xhc3M9XCJsaVwiXG4gICAgICAgICAgICAgIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGJpdXNcIlxuICAgICAgICAgICAgICA6a2V5PVwiaXRlbS5pZFwiXG4gICAgICAgICAgICAgIHYtaWY9XCJpbmRleCUyID09IGlcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCJvcGVuUG9pKCdiaXUnLGl0ZW0pXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJmaWd1cmVcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpbWdcIiBtb2RlPVwid2lkdGhGaXhcIiA6c3JjPVwiaXRlbS5jb3ZlclwiID48L2ltYWdlPlxuICAgICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwicFwiPnt7aXRlbS50aXRsZX19PC92aWV3PlxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwic3BhblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpbWdcIiBtb2RlPVwiYXNwZWN0RmlsbFwiIDpzcmM9XCJpdGVtLmF2YXRvclwiID48L2ltYWdlPlxuICAgICAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJlbVwiPnt7aXRlbS51c2VybmFtZX19PC92aWV3PlxuICAgICAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImxpa2VcIj57e2l0ZW0ubGlrZXN9fTwvdmlldz5cbiAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgICAgPCEtLSDmm7TlpJrmppzljZUgLS0+XG4gICAgICA8dmlldyA6Y2xhc3M9XCJbJ21vcmUtcmFuaycsYml1cy5sZW5ndGggPD0gMCA/ICduby1iaXVzJzonJ11cIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJoMlwiPuWPkeeOsOabtOWkmuamnOWNlTwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJwXCI+XG4gICAgICAgICAg5oiR5Lus54Ot54ix5peF6KGM77yMXG4gICAgICAgICAgPGJyIC8+5Zug5Li65peF6KGM6K6p55Sf5rS75Zyo5Yir5aSE5oiQ5Li65Y+v6IO977yMXG4gICAgICAgICAgPGJyIC8+5oSf6LCi5L2g5LiA55u05Lul5p2l5LiO56m35ri45YiG5Lqr6L+Z5Lu954Ot54ix77yMXG4gICAgICAgICAgPGJyIC8+5oS/5oiR5Lus55qE5LiA5Lqb5b6u5bCP5bel5L2c77yMXG4gICAgICAgICAgPGJyIC8+6IO95bim57uZ5L2g5peg6ZmQ5peF6KGM54G15oSf44CCXG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ1bFwiPlxuICAgICAgICAgIDx2aWV3XG4gICAgICAgICAgICBjbGFzcz1cImxpXCJcbiAgICAgICAgICAgIHYtZm9yPVwiaXRlbSBpbiByYW5rRGF0YS50YWdfcmFua2xpc3RcIlxuICAgICAgICAgICAgOmtleT1cIml0ZW0uaWRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaW1nLXZpZXdcIiBAY2xpY2s9XCJnb3RvRGV0YWlsKGl0ZW0uaWQpXCI+XG5cbiAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiaW1nXCIgbW9kZT1cImFzcGVjdEZpbGxcIiA6c3JjPVwiaXRlbS5waG90b1wiID48L2ltYWdlPlxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInNwYW5cIj5cbiAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImlcIiB2LWZvcj1cImkgaW4gaXRlbS5wb2lMaXN0QXJyXCIgOmtleT1cIidudW0nK2lcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImltZ1wiIG1vZGU9XCJoZWlnaHRGaXhcIiA6c3JjPVwidG9wTGlzdFtpXVwiID48L2ltYWdlPlxuICAgICAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInBcIj57e2l0ZW0ubmFtZX19PC92aWV3PlxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgICA8dmlldyBjbGFzcz1cImZpZ3VyZVwiPlxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImltZ1wiIG1vZGU9XCJ3aWR0aEZpeFwiIHNyYz1cImh0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZyZ0pMMFl1OTR2NVRnaTBMQ3RiTTRyeGFWZjE/aW1hZ2VzbGltXCIgPjwvaW1hZ2U+XG4gICAgICAgIDwvdmlldz5cbiAgICAgIDwvdmlldz5cbiAgICA8L3ZpZXc+XG4gIDwvdmlldz5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG4gIGltcG9ydCBnbG9iYWxGdW4gZnJvbSAnLi4vLi4vc3RhdGljL2dsb2JhbC5qcydcblx0ZXhwb3J0IGRlZmF1bHQgVnVlLmV4dGVuZCh7XG5cdFx0ZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNob3dTd2lwZXJJbWdzOiBmYWxzZSxcbiAgICAgICAgc3dpcGVySW5kZXg6IDAsXG4gICAgICAgIGNvb2tpZTogXCJcIixcbiAgICAgICAgYml1Z29EaXNhYmxlOiBmYWxzZSxcbiAgICAgICAgcG9pQmVlbnRvOiAwLFxuICAgICAgICByYW5rRGF0YTogbnVsbCxcbiAgICAgICAgYml1czogXCJcIixcbiAgICAgICAgcmFua0hlYWQ6IFtcbiAgICAgICAgICBcImh0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZvWU01VjBwbXhTd0xIQjNCUS1sdDRLOTN2MWY/aW1hZ2VzbGltXCIsXG4gICAgICAgICAgXCJodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9Gb083cVZaSnlxUjA5VENvTzQ1SnBKY2JPRW83P2ltYWdlc2xpbVwiLFxuICAgICAgICAgIFwiaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRmw2eTdSQTNFeGFHZ0lVRU1Sc1R3NlNOWVJGcz9pbWFnZXNsaW1cIlxuICAgICAgICBdLFxuICAgICAgICB0b3BMaXN0OiBbXG4gICAgICAgICAgJ2h0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZuU00wTDBSa3VENmZwWnpqUUlXWGpZdkp4SFk/aW1hZ2VzbGltJyxcbiAgICAgICAgICAnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRnRSS2N6SERNVWFJLUlqM0FwRnJITGxOZUlsWj9pbWFnZXNsaW0nLFxuICAgICAgICAgICdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9Gb2RnWnk3bVk3ckVtWGdGTmNSRTFJcXRtR3UwP2ltYWdlc2xpbScsXG4gICAgICAgICAgJ2h0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZwUWxnR0dGQzZ4RzZvbmZkWWdFdGcxMTZZSk0/aW1hZ2VzbGltJyxcbiAgICAgICAgICAnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRnFZMTB6ejN3WG1JQTZVSDRsNDdQdERSVVpRNT9pbWFnZXNsaW0nLFxuICAgICAgICAgICdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GbmpmQVprM2RuRWw1cS1YcUNYT0xtQ04wSzg5P2ltYWdlc2xpbScsXG4gICAgICAgICAgJ2h0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZoLXVTSDJOM1A4WmVhaElpYS14ZFlTaWZDSkE/aW1hZ2VzbGltJyxcbiAgICAgICAgICAnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRnBUQlZ2em5IZWF1UC0xdGEzdUJDYWF0bUNGYj9pbWFnZXNsaW0nLFxuICAgICAgICAgICdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GaFd5WWdsRTVpdElUdFhLUURDYVpqRmxCRFRsP2ltYWdlc2xpbScsXG4gICAgICAgICAgJ2h0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZvSVlxLVFEbTJQd2xTZHNHeTRYOVB6Zl9JM0s/aW1hZ2VzbGltJyxcbiAgICAgICAgXSxcbiAgICAgICAgcG9pTGlzdDogW1xuICAgICAgICAgIHsgdmFsdWU6IFwicG9pXCIsIGxhYmVsOiBcIlBPSVwiIH0sXG4gICAgICAgICAgeyB2YWx1ZTogXCJjaXR5XCIsIGxhYmVsOiBcIuWfjuW4glwiIH0sXG4gICAgICAgICAgeyB2YWx1ZTogXCJjb3VudHJ5XCIsIGxhYmVsOiBcIuWbveWutlwiIH0sXG4gICAgICAgICAgeyB2YWx1ZTogXCJhcnRpY2xlXCIsIGxhYmVsOiBcIuWbvuaWh1wiIH1cbiAgICAgICAgXVxuICAgICAgfTtcbiAgICB9LFxuICAgIG9uTG9hZChvcHRpb24pIHtcbiAgICAgIGlmKG9wdGlvbi5pZCl7XG4gICAgICAgIHRoaXMuZ2V0SG9tZUxpc3Qob3B0aW9uLmlkKVxuICAgICAgfVxuXHRcdH0sXG4gICAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBcInRpdGxlXCI6IHRoaXMucmFua0RhdGEubmFtZSxcbiAgICAgICAgXCJwYXRoXCI6IFwiL3BhZ2VzL2RldGFpbC9kZXRhaWxcIixcbiAgICAgICAgXCJjb250ZW50XCI6IHRoaXMucmFua0RhdGEuaW50cm9kdWN0aW9uLFxuICAgICAgICBcImRlc2NcIjogdGhpcy5yYW5rRGF0YS5pbnRyb2R1Y3Rpb24sXG4gICAgICAgICdpbWFnZVVybCc6IHRoaXMucmFua0RhdGEucGhvdG9cbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgZ290b0RldGFpbChpZCl7XG4gICAgICAgIHVuaS5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9kZXRhaWwvZGV0YWlsP2lkPScraWQsXG4gICAgICAgICAgICBhbmltYXRpb25UeXBlOiAncG9wLWluJyxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAyMDBcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgLy8g5omT5byAcG9pXG4gICAgICBvcGVuUG9pKHR5cGUsaXRlbSl7XG4gICAgICAgIGlmKCFpdGVtLnBvaV90eXBlID09IFwiYXJ0aWNsZVwiICYmIHR5cGUgPT0gJ3BvaScpIHJldHVyblxuICAgICAgICBsZXQgdXJscyA9IHtcbiAgICAgICAgICBwb2k6J3BhZ2VzL3BsYWNlL3BvaS9wb2knLFxuICAgICAgICAgIGNpdHk6J3BhZ2VzL3BsYWNlL2NpdHkvY2l0eScsXG4gICAgICAgICAgY291bnRyeToncGFnZXMvcGxhY2UvY291bnRyeS9jb3VudHJ5JyxcbiAgICAgICAgICBiaXU6ICdwYWdlcy9wb3N0L3Bvc3QnXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhdGggPSAnJ1xuICAgICAgICBsZXQgb2JqID0ge31cbiAgICAgICAgaWYodHlwZSA9PSAnYml1Jyl7XG4gICAgICAgICAgcGF0aCA9IHVybHNbJ2JpdSddXG4gICAgICAgICAgb2JqLmlkID0gaXRlbS5pZFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBwYXRoID0gdXJsc1tpdGVtLnBvaV90eXBlXVxuICAgICAgICAgIG9iai5pZCA9IGl0ZW0uaWRcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhwYXRoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMub3Blbk90aGVyQXBwKCd0dGMwMmFiNjk3NWYwMDQ0NTgnLHBhdGgrJz9pZD0nK2l0ZW0uaWQsb2JqKVxuICAgICAgICByZXR1cm47XG4gICAgICAgIHVuaS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgICAgICBzdWNjZXNzOiAgKHJlcyk9PiB7XG4gICAgICAgICAgICAvLyDlpLTmnaEgIOWuv+S4u0FQUOWQjeensFxuICAgICAgICAgICAgaWYocmVzLmFwcE5hbWUpe1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0dC5uYXZpZ2F0ZVRvTWluaVByb2dyYW0pO1xuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKHR0Lm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgIHRoaXMub3Blbk90aGVyQXBwKCd0dGMwMmFiNjk3NWYwMDQ0NTgnLHBhdGgrJz9pZD0nK2l0ZW0uaWQsb2JqKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZSBpZihyZXMuaG9zdCl7XG4gICAgICAgICAgICAgIC8vIOeZvuW6piAg5a6/5Li75bmz5Y+wXG4gICAgICAgICAgICAgIHVuaS5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xuICAgICAgICAgICAgICAgIGFwcEtleTogJ3hUZmp3eHRybWJtS0l0b0tYTjduZU10dVpVT0dkNlg4JyxcbiAgICAgICAgICAgICAgICBwYXRoOiAnLycrcGF0aCsnP2lkPScraXRlbS5pZCxcbiAgICAgICAgICAgICAgICBleHRyYURhdGE6IG9iaixcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgLy8g5omT5byA5oiQ5YqfXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIC8vIOW+ruS/oVxuICAgICAgICAgICAgICB0aGlzLm9wZW5PdGhlckFwcCgnd3gxOTUyNjMzM2U5MDBhODQyJyxwYXRoKyc/aWQ9JytpdGVtLmlkLG9iailcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8g5omT5byA5bCP56iL5bqPXG4gICAgICBvcGVuT3RoZXJBcHAoYXBwaWQscGF0aCxvYmope1xuICAgICAgICB1bmkubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcbiAgICAgICAgICBhcHBJZDogYXBwaWQsXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICBleHRyYURhdGE6IG9iaixcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgLy8g5omT5byA5oiQ5YqfXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdldEhvbWVMaXN0KGlkKXtcbiAgICAgICAgZ2xvYmFsRnVuXG4gICAgICAgIC5hamF4KGAvcmFuay9hcGkvcmFuay9nZXQ/aWQ9JHtpZH0mdGFnX3JhbmtsaXN0X3Nob3c9MWAsIFwiZ2V0XCIpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgaWYocmVzLmRhdGEuY29kZSA9PSAwKXtcbiAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEucGhvdG8gPSByZXMuZGF0YS5kYXRhLnBob3RvLmluZGV4T2YoJ2ltYWdlc2xpbScpICE9IC0xID8gcmVzLmRhdGEuZGF0YS5waG90by5yZXBsYWNlKCdpbWFnZXNsaW0nLCAnaW1hZ2VNb2dyMi9hdXRvLW9yaWVudC90aHVtYm5haWwvNzUwL2Zvcm1hdC9qcGcnKSA6IHJlcy5kYXRhLmRhdGEucGhvdG8rJz9pbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3RodW1ibmFpbC83NTAvZm9ybWF0L2pwZydcbiAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEudGFnX3JhbmtsaXN0Lm1hcChpdGVtPT57XG4gICAgICAgICAgICAgIGl0ZW0ucGhvdG8gPSBpdGVtLnBob3RvLmluZGV4T2YoJ2ltYWdlc2xpbScpICE9IC0xID8gaXRlbS5waG90by5yZXBsYWNlKCdpbWFnZXNsaW0nLCAnaW1hZ2VNb2dyMi9hdXRvLW9yaWVudC90aHVtYm5haWwvMzQ4eDI1MC9mb3JtYXQvanBnJykgOiBpdGVtLnBob3RvKyc/aW1hZ2VNb2dyMi9hdXRvLW9yaWVudC90aHVtYm5haWwvNzh4NzgvZm9ybWF0L2pwZydcbiAgICAgICAgICAgICAgaXRlbS5wb2lMaXN0QXJyID0gaXRlbS5wb2lfbGlzdC5sZW5ndGgudG9TdHJpbmcoKS5zcGxpdCgnJylcbiAgICAgICAgICAgICAgcmV0dXJuIGl0ZW1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICByZXMuZGF0YS5kYXRhLnBvaV9saXN0ID0gdGhpcy5saXN0Q2hhbmdlKHJlcy5kYXRhLmRhdGEucG9pX2xpc3QpXG4gICAgICAgICAgICB0aGlzLnJhbmtEYXRhID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmFua0RhdGEpO1xuICAgICAgICAgICAgLy8g6K6+572u5qCH6aKYXG4gICAgICAgICAgICB1bmkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5yYW5rRGF0YS5uYW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBpZHMgPSBbXTtcbiAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEuYml1X2xpc3QubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICBpZHMucHVzaChpdGVtLmlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5nZXRCaXVzSW5mbyhpZHMuam9pbihcIixcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDojrflj5ZiaXXor6bmg4VcbiAgICAgIGdldEJpdXNJbmZvKGlkcykge1xuICAgICAgICBnbG9iYWxGdW5cbiAgICAgICAgICAuYWpheChgL3Fjcm9zcy9tL2ZlZWRzL2FqYXgvcG9zdC9iaXVsaXN0P2lkcz0ke2lkc31gLFwiZ2V0XCIpXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5lcnJvcl9jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5iaXVzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBsaXN0Q2hhbmdlKGFycil7XG4gICAgICAgIGFyci5tYXAoaXRlbT0+e1xuICAgICAgICAgIGl0ZW0ucGhvdG8gPSBpdGVtLnBob3RvLmluZGV4T2YoJ2ltYWdlc2xpbScpICE9IC0xID8gaXRlbS5waG90by5yZXBsYWNlKCdpbWFnZXNsaW0nLCAnaW1hZ2VNb2dyMi9hdXRvLW9yaWVudC90aHVtYm5haWwvNzh4NzgvZm9ybWF0L2pwZycpIDogaXRlbS5waG90bysnP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvdGh1bWJuYWlsLzc4eDc4L2Zvcm1hdC9qcGcnXG4gICAgICAgICAgXG4gICAgICAgICAgbGV0IHBvaXMgPSBpdGVtLnBob3RvX2xpc3Q7XG4gICAgICAgICAgcG9pcy5tYXAoaW1nPT57XG4gICAgICAgICAgICBpZihpbWcudXJsLmluZGV4T2YoJ2ltYWdlc2xpbScpICE9IC0xKXtcbiAgICAgICAgICAgICAgaW1nLnVybC5yZXBsYWNlKCdpbWFnZXNsaW0nLCAnaW1hZ2VNb2dyMi9hdXRvLW9yaWVudC90aHVtYm5haWwvNDMweDMyNC9mb3JtYXQvanBnJylcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBpbWcudXJsID0gaW1nLnVybCsnP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvdGh1bWJuYWlsLzQzMHgzMjQvZm9ybWF0L2pwZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGl0ZW0ucGhvdG9fbGlzdCA9IHBvaXNcbiAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYXJyXG4gICAgICB9LFxuICAgIH1cblx0fSk7XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxuLmRldGFpbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMSk7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIC5iYW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvdHRvbTogLTFweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB0cmFuc3BhcmVudCAwJSwgcmdiYSgzMCwgMzAsIDMwLCAwLjEpIDEwJSwgcmdiYSgzMCwgMzAsIDMwLCAxKSk7XG4gICAgfVxuICAgIGltYWdle1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgPi5pbmZvIHtcbiAgICBwYWRkaW5nOiAwIDgwcnB4IDY0cnB4O1xuICAgIGNvbG9yOiAjRkVEQjlDO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgJjphZnRlciwgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTA4cnB4O1xuICAgICAgaGVpZ2h0OiA5MHJweDtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRm1yMnNfZHJPLTFzVVBXWXZuemw2UUs0bV9UTj9pbWFnZXNsaW0nKSBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBsZWZ0OiAzMHJweDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICByaWdodDogMzJycHg7XG4gICAgICBib3R0b206NTBycHg7XG4gICAgfVxuXG4gICAgLmgyIHtcbiAgICAgIGZvbnQtc2l6ZTogNDBycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzNHJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MnJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5wIHtcbiAgICAgIGZvbnQtc2l6ZTogMjZycHg7XG4gICAgICBsaW5lLWhlaWdodDogMzhycHg7XG4gICAgICBjb2xvcjogI0ZFREI5QztcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgdGV4dC1qdXN0aWZ5OiBpbnRlci1pZGVvZ3JhcGg7XG4gICAgfVxuICB9XG5cbiAgLnBvaXMge1xuICAgIHBhZGRpbmc6IDAgMThycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgID4ubGkge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcnB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgcGFkZGluZzogMzBycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHJweDtcblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA4MHJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBycHg7XG5cbiAgICAgICAgLm5hbWUtaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC5maWd1cmUge1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTRycHg7XG5cbiAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgJi50b3BoZWFkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTRycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXJweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhycHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLnBvaWhlYWQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcnB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHJweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYW1lcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuXG4gICAgICAgICAgICAmLm1pbGxlIHtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oNSB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzcwcnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQycnB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDMycnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDJycHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3BhbiB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzcwcnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI4cnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhycHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZycHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5iaXUtYnRuIHtcbiAgICAgICAgICBmbGV4LXNocmluazogMTtcbiAgICAgICAgICB3aWR0aDogMTgwcnB4O1xuICAgICAgICAgIGhlaWdodDogNjBycHg7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDYwcnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA2MHJweDtcbiAgICAgICAgICBmb250LXNpemU6IDI4cnB4O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB6LWluZGV4OiAzO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICYuZ290byB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzBkZWcsICMxNURCOTEsICMwNkNDQzcpO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMTBweCAxcHggcmdiYSgyMSwgMjE5LCAxNDUsIDAuNCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50LWltZ3Mge1xuICAgICAgICAucCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnJweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIycnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgdGV4dC1qdXN0aWZ5OiBpbnRlci1pZGVvZ3JhcGg7XG4gICAgICAgIH1cblxuICAgICAgICAucGhvdG8zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIC5saSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MzBycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzI0cnB4O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgICAgICAgIC5maWd1cmUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MzBycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMjRycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHJweCAwIDAgOHJweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MzBycHg7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyNHJweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhycHggMCAwIDhycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjIwcnB4O1xuXG4gICAgICAgICAgICAgICAgLmZpZ3VyZSB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcnB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBycHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDhycHggOHJweCAwO1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgIGltYWdle1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2MHJweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA4cnB4IDhycHggMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZm9vdGVyLXZpZXcge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjJycHggMjJycHggMCAwO1xuICB9XG5cbiAgLmJpdXMtbGlzdCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMnJweCAyMnJweCAwIDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA2MHJweCAxOHJweCA2MHJweDtcblxuICAgIC5oMyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQ0cnB4O1xuICAgICAgZm9udC1zaXplOiAzOHJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHJweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHJweDtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRnJ5RG5DQ3BlSlB6U0VJdGFhQnhGTTQ2M3E3Uz9pbWFnZXNsaW0nKSBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcnB4IDQwcnB4O1xuICAgIH1cbiAgICAuYml1cy12aWV3IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIC51bCB7XG4gICAgICAgIHdpZHRoOiAzNDhycHg7XG5cbiAgICAgICAgLmxpIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHJweDtcblxuICAgICAgICAgIC5maWd1cmUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnJweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHJweDtcbiAgICAgICAgICAgIGltYWdle1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPi5wIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBycHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycnB4O1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgIGhlaWdodDogMzZycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLnVzZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDM2cnB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICAgIC5zcGFuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzZycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHJweDtcblxuICAgICAgICAgICAgICAgIC5pbWcge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IDM2cnB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnJweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZW0ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzZycHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmxpa2Uge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZycHg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBESU4gQ29uZGVuc2VkO1xuXG4gICAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgbGVmdDogLTM0cnB4O1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjAlKTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjZycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0Z2RDZVRWN5RmxINUVnQzhWRThkZlp2RG5RTXY/aW1hZ2VzbGltJykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxufVxuLm1vcmUtcmFuayB7XG4gICAgcGFkZGluZzogMCAyMHJweCA4MHJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmIHVybCgnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRm1HbEw3VDRZcnRVUzlUcDYxLVFkSlV2M0pfUj9pbWFnZXNsaW0nKSBuby1yZXBlYXQgMTAwJSAyMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNzE0cnB4IDY5NnJweDtcblxuICAgICYubm8tYml1cyB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBycHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMnJweCAyMnJweCAwIDA7XG4gICAgfVxuXG4gICAgLmgyIHtcbiAgICAgIHBhZGRpbmc6IDYwcnB4IDAgMzRycHggNjBycHg7XG4gICAgICBsaW5lLWhlaWdodDogNDJycHg7XG4gICAgICBmb250LXNpemU6IDQycnB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICA+LnAge1xuICAgICAgcGFkZGluZy1sZWZ0OiA2MHJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0NnJweDtcbiAgICAgIGZvbnQtc2l6ZTogMjZycHg7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQycnB4O1xuICAgIH1cblxuICAgIC51bCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOTBycHg7XG5cbiAgICAgIC5saSB7XG4gICAgICAgIHdpZHRoOiAzNDhycHg7XG4gICAgICAgIGhlaWdodDogMjUwcnB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnJweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAuaW1nLXZpZXd7XG4gICAgICAgICAgd2lkdGg6IDM0OHJweDtcbiAgICAgICAgICBoZWlnaHQ6IDI1MHJweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmltZyB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNwYW4ge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDE1MHJweDtcbiAgICAgICAgICBoZWlnaHQ6IDYwcnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cnB4IDAgMTZycHggMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNGRkVDQ0IsICNDRkIzODEpO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuXG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHdpZHRoOiA3MnJweDtcbiAgICAgICAgICAgIGhlaWdodDogMzJycHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZtbEladVp2aU10TlBUaHFCalowdUlYUUpUMDM/aW1hZ2VzbGltJykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmkge1xuICAgICAgICAgICAgd2lkdGg6IDI0cnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyOHJweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICAgIGhlaWdodDogMzJycHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMHJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucCB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHJpZ2h0OiAzMHJweDtcbiAgICAgICAgICBib3R0b206IDMwcnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MnJweDtcbiAgICAgICAgICBmb250LXNpemU6IDM2cnB4O1xuICAgICAgICAgIHdpZHRoOiAyMjhycHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAzMHJweCAjMDAwO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZmlndXJlIHtcbiAgICAgIGhlaWdodDogNDhycHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC5pbWcge1xuICAgICAgICB3aWR0aDogMTY2cnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0xMC1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTQhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcz8/cmVmLS0xMC1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTQhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU5NDYzNjI1MjAxNVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIvVXNlcnMvaG91eWFvaHVpL3d3d3Jvb3QvUVllci96d29ybGRyYW5raW5nL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=