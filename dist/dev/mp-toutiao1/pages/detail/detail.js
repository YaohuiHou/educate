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

    console.log(window.navigator.userAgent);
  },
  onShareAppMessage: function onShareAppMessage(res) {
    return {
      "title": this.rankData.name,
      "path": "pages/detail/detail",
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
    openOtherApp: function openOtherApp() {
      uni.navigateToMiniProgram({
        appId: '',
        path: 'pages/index/index?id=123',
        extraData: {
          'data1': 'test'
        },
        success: function success(res) {// 打开成功
        }
      });
    },
    getHomeList: function getHomeList(id) {
      var _this = this;

      _global.default.ajax("/rank/api/rank/get?id=".concat(id, "&tag_ranklist_show=1"), "get").then(function (res) {
        console.log(res.data);

        if (res.data.code == 0) {
          res.data.data.photo = res.data.data.photo.indexOf('imageslim') != -1 ? res.data.data.photo.replace('imageslim', 'imageMogr2/auto-orient/thumbnail/750/format/jpg') : res.data.data.photo + '?imageMogr2/auto-orient/thumbnail/750/format/jpg';
          res.data.data.tag_ranklist.map(function (item) {
            item.photo = item.photo.indexOf('imageslim') != -1 ? item.photo.replace('imageslim', 'imageMogr2/auto-orient/thumbnail/348x250/format/jpg') : item.photo + '?imageMogr2/auto-orient/thumbnail/78x78/format/jpg';
            item.poiListArr = item.poi_list.length.toString().split('');
            return item;
          });
          res.data.data.poi_list = _this.listChange(res.data.data.poi_list);
          _this.rankData = res.data.data;
          console.log(_this.rankData);
          var ids = [];
          res.data.data.biu_list.map(function (item) {
            ids.push(item.id);
          });

          _this.getBiusInfo(ids.join(","));
        }
      });
    },
    // 获取biu详情
    getBiusInfo: function getBiusInfo(ids) {
      var _this2 = this;

      _global.default.ajax("/qcross/m/feeds/ajax/post/biulist?ids=".concat(ids), "get").then(function (res) {
        if (res.data.error_code == 0) {
          _this2.bius = res.data.data;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cz9hZWYyIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZT85YTRiIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZT85NjIwIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZT9hNmM1Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZT9hYmY3IiwidW5pLWFwcDovLy9zcmMvcGFnZXMvZGV0YWlsL2RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlPzQwMzEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2RldGFpbC9kZXRhaWwudnVlP2ZlMzciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFDQSxVQUFVLENBQUMsZUFBRCxDQUFWLEM7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUg7QUFDbkg7QUFDMEQ7QUFDTDtBQUNjOzs7QUFHbkU7QUFDbUk7QUFDbkksZ0JBQWdCLGdKQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSxxRkFBVTtBQUNaO0FBQ0E7O0FBRUE7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkJmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFtYyxDQUFnQiwrZEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNzSXZkOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztlQUNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSxvQkFGQTtBQUdBLGdCQUhBO0FBSUEseUJBSkE7QUFLQSxrQkFMQTtBQU1BLG9CQU5BO0FBT0EsY0FQQTtBQVFBLGlCQUNBLG1FQURBLEVBRUEsbUVBRkEsRUFHQSxtRUFIQSxDQVJBO0FBYUEsZ0JBQ0EsbUVBREEsRUFFQSxtRUFGQSxFQUdBLG1FQUhBLEVBSUEsbUVBSkEsRUFLQSxtRUFMQSxFQU1BLG1FQU5BLEVBT0EsbUVBUEEsRUFRQSxtRUFSQSxFQVNBLG1FQVRBLEVBVUEsbUVBVkEsQ0FiQTtBQXlCQSxnQkFDQTtBQUFBO0FBQUE7QUFBQSxPQURBLEVBRUE7QUFBQTtBQUFBO0FBQUEsT0FGQSxFQUdBO0FBQUE7QUFBQTtBQUFBLE9BSEEsRUFJQTtBQUFBO0FBQUE7QUFBQSxPQUpBO0FBekJBO0FBZ0NBLEdBbENBO0FBbUNBLFFBbkNBLGtCQW1DQSxNQW5DQSxFQW1DQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUVBLEdBekNBO0FBMENBLG1CQTFDQSw2QkEwQ0EsR0ExQ0EsRUEwQ0E7QUFDQTtBQUNBLGlDQURBO0FBRUEsbUNBRkE7QUFHQSwyQ0FIQTtBQUlBLHdDQUpBO0FBS0E7QUFMQTtBQU9BLEdBbERBO0FBbURBO0FBQ0EsY0FEQSxzQkFDQSxFQURBLEVBQ0E7QUFDQTtBQUNBLDRDQURBO0FBRUEsK0JBRkE7QUFHQTtBQUhBO0FBS0EsS0FQQTtBQVFBLGdCQVJBLDBCQVFBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLHdDQUZBO0FBR0E7QUFDQTtBQURBLFNBSEE7QUFNQSxlQU5BLG1CQU1BLEdBTkEsRUFNQSxDQUNBO0FBQ0E7QUFSQTtBQVVBLEtBbkJBO0FBb0JBLGVBcEJBLHVCQW9CQSxFQXBCQSxFQW9CQTtBQUFBOztBQUNBLHNCQUNBLElBREEsaUNBQ0EsRUFEQSwyQkFDQSxLQURBLEVBRUEsSUFGQSxDQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FKQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBRkE7O0FBR0E7QUFDQTtBQUNBLE9BckJBO0FBc0JBLEtBM0NBO0FBNENBO0FBQ0EsZUE3Q0EsdUJBNkNBLEdBN0NBLEVBNkNBO0FBQUE7O0FBQ0Esc0JBQ0EsSUFEQSxpREFDQSxHQURBLEdBQ0EsS0FEQSxFQUVBLElBRkEsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTkE7QUFPQSxLQXJEQTtBQXNEQSxjQXREQSxzQkFzREEsR0F0REEsRUFzREE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsU0FOQTtBQU9BO0FBQ0E7QUFDQSxPQWJBO0FBY0E7QUFDQTtBQXRFQTtBQW5EQSxFOzs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7QUFBQTtBQUFBO0FBQUE7QUFBODBCLENBQWdCLDJ6QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQWwyQjtBQUNBLE9BQU8sS0FBVSxFQUFFLGtCQUtkIiwiZmlsZSI6InBhZ2VzL2RldGFpbC9kZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBQYWdlIGZyb20gJy4vcGFnZXMvZGV0YWlsL2RldGFpbC52dWUnXG5jcmVhdGVQYWdlKFBhZ2UpIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNlMTU5ZWI0JlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9kZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9kZXRhaWwvZGV0YWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTE2LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZTE1OWViNCZcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbn1cbnZhciByZWN5Y2xhYmxlUmVuZGVyID0gZmFsc2VcbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTItMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL2RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XG4gIDx2aWV3IGNsYXNzPVwiZGV0YWlsXCI+XG4gICAgPHZpZXcgY2xhc3M9XCJiYW5uZXJcIj5cbiAgICAgIDxpbWFnZSBtb2RlPVwid2lkdGhGaXhcIiA6c3JjPVwicmFua0RhdGEucGhvdG9cIiA+PC9pbWFnZT5cbiAgICA8L3ZpZXc+XG4gICAgPHZpZXcgY2xhc3M9XCJpbmZvXCI+XG4gICAgICA8dmlldyBjbGFzcz1cImgyXCI+e3tyYW5rRGF0YS5uYW1lfX08L3ZpZXc+XG4gICAgICA8dmlldyBjbGFzcz1cInBcIj57e3JhbmtEYXRhLmludHJvZHVjdGlvbn19PC92aWV3PlxuICAgIDwvdmlldz5cbiAgICA8dmlldyBjbGFzcz1cInBvaXNcIj5cbiAgICAgIDx2aWV3IGNsYXNzPVwibGlcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiByYW5rRGF0YS5wb2lfbGlzdFwiIDprZXk9XCIncG9pc18nK2luZGV4XCI+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiaGVhZGVyXCI+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJuYW1lLWltZ1wiIEBjbGljaz1cImdvdG9MaW5rKGl0ZW0udXJsKVwiPlxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJmaWd1cmVcIj5cbiAgICAgICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJ0b3BoZWFkXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwicmFua0RhdGEubWVkYWxfc2hvdyA9PSAxICYmIGluZGV4IDwgM1wiXG4gICAgICAgICAgICAgICAgOnNyYz1cInJhbmtIZWFkW2luZGV4XVwiXG4gICAgICAgICAgICAgICAgbW9kZT1cImFzcGVjdEZpbGxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDwvaW1hZ2U+XG4gICAgICAgICAgICAgIDxpbWFnZVxuICAgICAgICAgICAgICAgIGNsYXNzPVwicG9paGVhZFwiXG4gICAgICAgICAgICAgICAgdi1lbHNlXG4gICAgICAgICAgICAgICAgOnNyYz1cIml0ZW0ucGhvdG9cIlxuICAgICAgICAgICAgICAgIG1vZGU9XCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2ltYWdlPlxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgPHZpZXcgOmNsYXNzPVwiWyduYW1lcycsaXRlbS5lbmdsaXNobmFtZT8nJzonbWlsbGUnXVwiPlxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImg1XCI+e3tpdGVtLmNoaW5lc2VuYW1lfX08L3ZpZXc+XG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwic3BhblwiIHYtaWY9XCJpdGVtLmVuZ2xpc2huYW1lXCI+e3tpdGVtLmVuZ2xpc2huYW1lfX08L3ZpZXc+XG4gICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgPC92aWV3PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiY29udGVudC1pbWdzXCIgQGNsaWNrPVwiZ290b0xpbmsoaXRlbS51cmwpXCI+XG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJwXCI+e3tpdGVtLmludHJvZHVjdGlvbn19PC92aWV3PlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwicGhvdG8zXCI+XG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImxpXCI+XG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZmlndXJlXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICAgICAgICA6c3JjPVwiaXRlbS5waG90b19saXN0WzBdLnVybFwiXG4gICAgICAgICAgICAgICAgICBtb2RlPVwiYXNwZWN0RmlsbFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDwvaW1hZ2U+XG4gICAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGlcIj5cbiAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJmaWd1cmVcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2VcbiAgICAgICAgICAgICAgICAgIDpzcmM9XCJpdGVtLnBob3RvX2xpc3RbMV0udXJsXCJcbiAgICAgICAgICAgICAgICAgIG1vZGU9XCJhc3BlY3RGaWxsXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPC9pbWFnZT5cbiAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImZpZ3VyZSBpbWcyXCI+XG4gICAgICAgICAgICAgICAgPGltYWdlXG4gICAgICAgICAgICAgICAgICA6c3JjPVwiaXRlbS5waG90b19saXN0WzJdLnVybFwiXG4gICAgICAgICAgICAgICAgICBtb2RlPVwic2NhbGVUb0ZpbGxcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8L2ltYWdlPlxuICAgICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgPC92aWV3PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICA8L3ZpZXc+XG4gICAgPC92aWV3PlxuICAgIDx2aWV3IGNsYXNzPVwiZm9vdGVyLXZpZXdcIj5cbiAgICAgIDwhLS0gYml1IC0tPlxuICAgICAgPHZpZXcgY2xhc3M9XCJiaXVzLWxpc3RcIiB2LWlmPVwiYml1cyAmJiBiaXVzLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJoM1wiPuWkp+WutuaAjuS5iOeOqe+8nzwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJiaXVzLXZpZXdcIiB2LWlmPVwiYml1c1wiPlxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwidWxcIiB2LWZvcj1cImkgaW4gWzAsMV1cIiA6a2V5PVwiJ2JpdScraVwiPlxuICAgICAgICAgICAgPHZpZXdcbiAgICAgICAgICAgICAgY2xhc3M9XCJsaVwiXG4gICAgICAgICAgICAgIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGJpdXNcIlxuICAgICAgICAgICAgICA6a2V5PVwiJ2JpdWtleV8nK2l0ZW0uaWRcIlxuICAgICAgICAgICAgICB2LWlmPVwiaW5kZXglMiA9PSBpXCJcbiAgICAgICAgICAgICAgQGNsaWNrPVwiZ290b0xpbmsoaXRlbS51cmwpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJmaWd1cmVcIj5cbiAgICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpbWdcIiBtb2RlPVwid2lkdGhGaXhcIiA6c3JjPVwiaXRlbS5jb3ZlclwiID48L2ltYWdlPlxuICAgICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwicFwiPnt7aXRlbS50aXRsZX19PC92aWV3PlxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInVzZXJcIj5cbiAgICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwic3BhblwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpbWdcIiBtb2RlPVwiYXNwZWN0RmlsbFwiIDpzcmM9XCJpdGVtLmF2YXRvclwiID48L2ltYWdlPlxuICAgICAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJlbVwiPnt7aXRlbS51c2VybmFtZX19PC92aWV3PlxuICAgICAgICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImxpa2VcIj57e2l0ZW0ubGlrZXN9fTwvdmlldz5cbiAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgIDwvdmlldz5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgICAgPCEtLSDmm7TlpJrmppzljZUgLS0+XG4gICAgICA8dmlldyA6Y2xhc3M9XCJbJ21vcmUtcmFuaycsYml1cy5sZW5ndGggPD0gMCA/ICduby1iaXVzJzonJ11cIj5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJoMlwiPuWPkeeOsOabtOWkmuamnOWNlTwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJwXCI+XG4gICAgICAgICAg5oiR5Lus54Ot54ix5peF6KGM77yMXG4gICAgICAgICAgPGJyIC8+5Zug5Li65peF6KGM6K6p55Sf5rS75Zyo5Yir5aSE5oiQ5Li65Y+v6IO977yMXG4gICAgICAgICAgPGJyIC8+5oSf6LCi5L2g5LiA55u05Lul5p2l5LiO56m35ri45YiG5Lqr6L+Z5Lu954Ot54ix77yMXG4gICAgICAgICAgPGJyIC8+5oS/5oiR5Lus55qE5LiA5Lqb5b6u5bCP5bel5L2c77yMXG4gICAgICAgICAgPGJyIC8+6IO95bim57uZ5L2g5peg6ZmQ5peF6KGM54G15oSf44CCXG4gICAgICAgIDwvdmlldz5cbiAgICAgICAgPHZpZXcgY2xhc3M9XCJ1bFwiPlxuICAgICAgICAgIDx2aWV3XG4gICAgICAgICAgICBjbGFzcz1cImxpXCJcbiAgICAgICAgICAgIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHJhbmtEYXRhLnRhZ19yYW5rbGlzdFwiXG4gICAgICAgICAgICA6a2V5PVwiJ3Bob25lJytpdGVtLmlkXCJcbiAgICAgICAgICAgIEBjbGljaz1cImdvdG9EZXRhaWwocmFua0RhdGEudGFnX3JhbmtsaXN0W2luZGV4XS5pZClcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaW1nLXZpZXdcIj5cblxuICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpbWdcIiBtb2RlPVwiYXNwZWN0RmlsbFwiIDpzcmM9XCJpdGVtLnBob3RvXCIgPjwvaW1hZ2U+XG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwic3BhblwiPlxuICAgICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaVwiIHYtZm9yPVwiaSBpbiBpdGVtLnBvaUxpc3RBcnJcIiA6a2V5PVwiJ251bScraVwiPlxuICAgICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiaW1nXCIgbW9kZT1cImhlaWdodEZpeFwiIDpzcmM9XCJ0b3BMaXN0W2ldXCIgPjwvaW1hZ2U+XG4gICAgICAgICAgICAgICAgPC92aWV3PlxuICAgICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwicFwiPnt7aXRlbS5uYW1lfX08L3ZpZXc+XG4gICAgICAgICAgICA8L3ZpZXc+XG4gICAgICAgICAgPC92aWV3PlxuICAgICAgICA8L3ZpZXc+XG4gICAgICAgIDx2aWV3IGNsYXNzPVwiZmlndXJlXCI+XG4gICAgICAgICAgPGltYWdlIGNsYXNzPVwiaW1nXCIgbW9kZT1cIndpZHRoRml4XCIgc3JjPVwiaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRnJnSkwwWXU5NHY1VGdpMExDdGJNNHJ4YVZmMT9pbWFnZXNsaW1cIiA+PC9pbWFnZT5cbiAgICAgICAgPC92aWV3PlxuICAgICAgPC92aWV3PlxuICAgIDwvdmlldz5cbiAgPC92aWV3PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCBWdWUgZnJvbSAndnVlJztcbiAgaW1wb3J0IGdsb2JhbEZ1biBmcm9tICcuLi8uLi9zdGF0aWMvZ2xvYmFsLmpzJ1xuXHRleHBvcnQgZGVmYXVsdCBWdWUuZXh0ZW5kKHtcblx0XHRkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2hvd1N3aXBlckltZ3M6IGZhbHNlLFxuICAgICAgICBzd2lwZXJJbmRleDogMCxcbiAgICAgICAgY29va2llOiBcIlwiLFxuICAgICAgICBiaXVnb0Rpc2FibGU6IGZhbHNlLFxuICAgICAgICBwb2lCZWVudG86IDAsXG4gICAgICAgIHJhbmtEYXRhOiBudWxsLFxuICAgICAgICBiaXVzOiBcIlwiLFxuICAgICAgICByYW5rSGVhZDogW1xuICAgICAgICAgIFwiaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRm9ZTTVWMHBteFN3TEhCM0JRLWx0NEs5M3YxZj9pbWFnZXNsaW1cIixcbiAgICAgICAgICBcImh0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZvTzdxVlpKeXFSMDlUQ29PNDVKcEpjYk9Fbzc/aW1hZ2VzbGltXCIsXG4gICAgICAgICAgXCJodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GbDZ5N1JBM0V4YUdnSVVFTVJzVHc2U05ZUkZzP2ltYWdlc2xpbVwiXG4gICAgICAgIF0sXG4gICAgICAgIHRvcExpc3Q6IFtcbiAgICAgICAgICAnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRm5TTTBMMFJrdUQ2ZnBaempRSVdYall2SnhIWT9pbWFnZXNsaW0nLFxuICAgICAgICAgICdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GdFJLY3pIRE1VYUktSWozQXBGckhMbE5lSWxaP2ltYWdlc2xpbScsXG4gICAgICAgICAgJ2h0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZvZGdaeTdtWTdyRW1YZ0ZOY1JFMUlxdG1HdTA/aW1hZ2VzbGltJyxcbiAgICAgICAgICAnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRnBRbGdHR0ZDNnhHNm9uZmRZZ0V0ZzExNllKTT9pbWFnZXNsaW0nLFxuICAgICAgICAgICdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GcVkxMHp6M3dYbUlBNlVINGw0N1B0RFJVWlE1P2ltYWdlc2xpbScsXG4gICAgICAgICAgJ2h0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZuamZBWmszZG5FbDVxLVhxQ1hPTG1DTjBLODk/aW1hZ2VzbGltJyxcbiAgICAgICAgICAnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRmgtdVNIMk4zUDhaZWFoSWlhLXhkWVNpZkNKQT9pbWFnZXNsaW0nLFxuICAgICAgICAgICdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GcFRCVnZ6bkhlYXVQLTF0YTN1QkNhYXRtQ0ZiP2ltYWdlc2xpbScsXG4gICAgICAgICAgJ2h0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZoV3lZZ2xFNWl0SVR0WEtRRENhWmpGbEJEVGw/aW1hZ2VzbGltJyxcbiAgICAgICAgICAnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRm9JWXEtUURtMlB3bFNkc0d5NFg5UHpmX0kzSz9pbWFnZXNsaW0nLFxuICAgICAgICBdLFxuICAgICAgICBwb2lMaXN0OiBbXG4gICAgICAgICAgeyB2YWx1ZTogXCJwb2lcIiwgbGFiZWw6IFwiUE9JXCIgfSxcbiAgICAgICAgICB7IHZhbHVlOiBcImNpdHlcIiwgbGFiZWw6IFwi5Z+O5biCXCIgfSxcbiAgICAgICAgICB7IHZhbHVlOiBcImNvdW50cnlcIiwgbGFiZWw6IFwi5Zu95a62XCIgfSxcbiAgICAgICAgICB7IHZhbHVlOiBcImFydGljbGVcIiwgbGFiZWw6IFwi5Zu+5paHXCIgfVxuICAgICAgICBdXG4gICAgICB9O1xuICAgIH0sXG4gICAgb25Mb2FkKG9wdGlvbikge1xuICAgICAgaWYob3B0aW9uLmlkKXtcbiAgICAgICAgdGhpcy5nZXRIb21lTGlzdChvcHRpb24uaWQpXG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgICBcblx0XHR9LFxuICAgIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgXCJ0aXRsZVwiOiB0aGlzLnJhbmtEYXRhLm5hbWUsXG4gICAgICAgIFwicGF0aFwiOiBcInBhZ2VzL2RldGFpbC9kZXRhaWxcIixcbiAgICAgICAgXCJjb250ZW50XCI6IHRoaXMucmFua0RhdGEuaW50cm9kdWN0aW9uLFxuICAgICAgICBcImRlc2NcIjogdGhpcy5yYW5rRGF0YS5pbnRyb2R1Y3Rpb24sXG4gICAgICAgICdpbWFnZVVybCc6IHRoaXMucmFua0RhdGEucGhvdG9cbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6e1xuICAgICAgZ290b0RldGFpbChpZCl7XG4gICAgICAgIHVuaS5yZWRpcmVjdFRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9kZXRhaWwvZGV0YWlsP2lkPScraWQsXG4gICAgICAgICAgICBhbmltYXRpb25UeXBlOiAncG9wLWluJyxcbiAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAyMDBcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgb3Blbk90aGVyQXBwKCl7XG4gICAgICAgIHVuaS5uYXZpZ2F0ZVRvTWluaVByb2dyYW0oe1xuICAgICAgICAgIGFwcElkOiAnJyxcbiAgICAgICAgICBwYXRoOiAncGFnZXMvaW5kZXgvaW5kZXg/aWQ9MTIzJyxcbiAgICAgICAgICBleHRyYURhdGE6IHtcbiAgICAgICAgICAgICdkYXRhMSc6ICd0ZXN0J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgIC8vIOaJk+W8gOaIkOWKn1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICBnZXRIb21lTGlzdChpZCl7XG4gICAgICAgIGdsb2JhbEZ1blxuICAgICAgICAuYWpheChgL3JhbmsvYXBpL3JhbmsvZ2V0P2lkPSR7aWR9JnRhZ19yYW5rbGlzdF9zaG93PTFgLCBcImdldFwiKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcbiAgICAgICAgICBpZihyZXMuZGF0YS5jb2RlID09IDApe1xuICAgICAgICAgICAgcmVzLmRhdGEuZGF0YS5waG90byA9IHJlcy5kYXRhLmRhdGEucGhvdG8uaW5kZXhPZignaW1hZ2VzbGltJykgIT0gLTEgPyByZXMuZGF0YS5kYXRhLnBob3RvLnJlcGxhY2UoJ2ltYWdlc2xpbScsICdpbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3RodW1ibmFpbC83NTAvZm9ybWF0L2pwZycpIDogcmVzLmRhdGEuZGF0YS5waG90bysnP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvdGh1bWJuYWlsLzc1MC9mb3JtYXQvanBnJ1xuICAgICAgICAgICAgcmVzLmRhdGEuZGF0YS50YWdfcmFua2xpc3QubWFwKGl0ZW09PntcbiAgICAgICAgICAgICAgaXRlbS5waG90byA9IGl0ZW0ucGhvdG8uaW5kZXhPZignaW1hZ2VzbGltJykgIT0gLTEgPyBpdGVtLnBob3RvLnJlcGxhY2UoJ2ltYWdlc2xpbScsICdpbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3RodW1ibmFpbC8zNDh4MjUwL2Zvcm1hdC9qcGcnKSA6IGl0ZW0ucGhvdG8rJz9pbWFnZU1vZ3IyL2F1dG8tb3JpZW50L3RodW1ibmFpbC83OHg3OC9mb3JtYXQvanBnJ1xuICAgICAgICAgICAgICBpdGVtLnBvaUxpc3RBcnIgPSBpdGVtLnBvaV9saXN0Lmxlbmd0aC50b1N0cmluZygpLnNwbGl0KCcnKVxuICAgICAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEucG9pX2xpc3QgPSB0aGlzLmxpc3RDaGFuZ2UocmVzLmRhdGEuZGF0YS5wb2lfbGlzdClcbiAgICAgICAgICAgIHRoaXMucmFua0RhdGEgPSByZXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5yYW5rRGF0YSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBpZHMgPSBbXTtcbiAgICAgICAgICAgIHJlcy5kYXRhLmRhdGEuYml1X2xpc3QubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICBpZHMucHVzaChpdGVtLmlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5nZXRCaXVzSW5mbyhpZHMuam9pbihcIixcIikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDojrflj5ZiaXXor6bmg4VcbiAgICAgIGdldEJpdXNJbmZvKGlkcykge1xuICAgICAgICBnbG9iYWxGdW5cbiAgICAgICAgICAuYWpheChgL3Fjcm9zcy9tL2ZlZWRzL2FqYXgvcG9zdC9iaXVsaXN0P2lkcz0ke2lkc31gLFwiZ2V0XCIpXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5lcnJvcl9jb2RlID09IDApIHtcbiAgICAgICAgICAgICAgdGhpcy5iaXVzID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICBsaXN0Q2hhbmdlKGFycil7XG4gICAgICAgIGFyci5tYXAoaXRlbT0+e1xuICAgICAgICAgIGl0ZW0ucGhvdG8gPSBpdGVtLnBob3RvLmluZGV4T2YoJ2ltYWdlc2xpbScpICE9IC0xID8gaXRlbS5waG90by5yZXBsYWNlKCdpbWFnZXNsaW0nLCAnaW1hZ2VNb2dyMi9hdXRvLW9yaWVudC90aHVtYm5haWwvNzh4NzgvZm9ybWF0L2pwZycpIDogaXRlbS5waG90bysnP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvdGh1bWJuYWlsLzc4eDc4L2Zvcm1hdC9qcGcnXG4gICAgICAgICAgXG4gICAgICAgICAgbGV0IHBvaXMgPSBpdGVtLnBob3RvX2xpc3Q7XG4gICAgICAgICAgcG9pcy5tYXAoaW1nPT57XG4gICAgICAgICAgICBpZihpbWcudXJsLmluZGV4T2YoJ2ltYWdlc2xpbScpICE9IC0xKXtcbiAgICAgICAgICAgICAgaW1nLnVybC5yZXBsYWNlKCdpbWFnZXNsaW0nLCAnaW1hZ2VNb2dyMi9hdXRvLW9yaWVudC90aHVtYm5haWwvNDMweDMyNC9mb3JtYXQvanBnJylcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBpbWcudXJsID0gaW1nLnVybCsnP2ltYWdlTW9ncjIvYXV0by1vcmllbnQvdGh1bWJuYWlsLzQzMHgzMjQvZm9ybWF0L2pwZydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICAgIGl0ZW0ucGhvdG9fbGlzdCA9IHBvaXNcbiAgICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gYXJyXG4gICAgICB9LFxuICAgIH1cblx0fSk7XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwibGVzc1wiPlxuLmRldGFpbCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzAsIDMwLCAzMCwgMSk7XG4gIG92ZXJmbG93OiBhdXRvO1xuXG4gIC5iYW5uZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDMwMHJweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGJvdHRvbTogLTFweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA3MCU7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB0cmFuc3BhcmVudCAwJSwgcmdiYSgzMCwgMzAsIDMwLCAwLjEpIDEwJSwgcmdiYSgzMCwgMzAsIDMwLCAxKSk7XG4gICAgfVxuICAgIGltYWdle1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuICB9XG5cbiAgPi5pbmZvIHtcbiAgICBwYWRkaW5nOiAwIDgwcnB4IDY0cnB4O1xuICAgIGNvbG9yOiAjRkVEQjlDO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgJjphZnRlciwgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogMTA4cnB4O1xuICAgICAgaGVpZ2h0OiA5MHJweDtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRm1yMnNfZHJPLTFzVVBXWXZuemw2UUs0bV9UTj9pbWFnZXNsaW0nKSBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBsZWZ0OiAzMHJweDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICByaWdodDogMzJycHg7XG4gICAgICBib3R0b206NTBycHg7XG4gICAgfVxuXG4gICAgLmgyIHtcbiAgICAgIGZvbnQtc2l6ZTogNDBycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzNHJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MnJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5wIHtcbiAgICAgIGZvbnQtc2l6ZTogMjZycHg7XG4gICAgICBsaW5lLWhlaWdodDogMzhycHg7XG4gICAgICBjb2xvcjogI0ZFREI5QztcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgdGV4dC1qdXN0aWZ5OiBpbnRlci1pZGVvZ3JhcGg7XG4gICAgfVxuICB9XG5cbiAgLnBvaXMge1xuICAgIHBhZGRpbmc6IDAgMThycHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgID4ubGkge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIwcnB4O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgcGFkZGluZzogMzBycHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MHJweDtcblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiA4MHJweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBycHg7XG5cbiAgICAgICAgLm5hbWUtaW1nIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC5maWd1cmUge1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHJweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTRycHg7XG5cbiAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgJi50b3BoZWFkIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogOTRycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3NXJweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhycHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAmLnBvaWhlYWQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHJweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDgwcnB4O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHJweDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5uYW1lcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuXG4gICAgICAgICAgICAmLm1pbGxlIHtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oNSB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzcwcnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDQycnB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDMycnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDJycHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3BhbiB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMzcwcnB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDI4cnB4O1xuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhycHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZycHg7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5jb250ZW50LWltZ3Mge1xuICAgICAgICAucCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnJweDtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIycnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gICAgICAgICAgdGV4dC1qdXN0aWZ5OiBpbnRlci1pZGVvZ3JhcGg7XG4gICAgICAgIH1cblxuICAgICAgICAucGhvdG8zIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIC5saSB7XG4gICAgICAgICAgICAgIHdpZHRoOiA0MzBycHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMzI0cnB4O1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgICAgICAgIC5maWd1cmUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MzBycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMjRycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHJweCAwIDAgOHJweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIGltYWdlIHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MzBycHg7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMyNHJweDtcbiAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhycHggMCAwIDhycHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogMjIwcnB4O1xuXG4gICAgICAgICAgICAgICAgLmZpZ3VyZSB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcnB4O1xuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNjBycHg7XG4gICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDhycHggOHJweCAwO1xuICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgIGltYWdle1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcnB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2MHJweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA4cnB4IDhycHggMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZm9vdGVyLXZpZXcge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMjJycHggMjJycHggMCAwO1xuICB9XG5cbiAgLmJpdXMtbGlzdCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyMnJweCAyMnJweCAwIDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiA2MHJweCAxOHJweCA2MHJweDtcblxuICAgIC5oMyB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQ0cnB4O1xuICAgICAgZm9udC1zaXplOiAzOHJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHJweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHJweDtcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9mZXMucXllcnN0YXRpYy5jb20vRnJ5RG5DQ3BlSlB6U0VJdGFhQnhGTTQ2M3E3Uz9pbWFnZXNsaW0nKSBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDQwcnB4IDQwcnB4O1xuICAgIH1cbiAgICAuYml1cy12aWV3IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgIC51bCB7XG4gICAgICAgIHdpZHRoOiAzNDhycHg7XG5cbiAgICAgICAgLmxpIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHJweDtcblxuICAgICAgICAgIC5maWd1cmUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnJweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOHJweDtcbiAgICAgICAgICAgIGltYWdle1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPi5wIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjZycHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBycHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycnB4O1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pbmZvIHtcbiAgICAgICAgICAgIGhlaWdodDogMzZycHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICAgICAgLnVzZXIge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDM2cnB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgICAgICAgIC5zcGFuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzZycHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNnJweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcnB4O1xuXG4gICAgICAgICAgICAgICAgLmltZyB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmVtIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIycnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM2cnB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5saWtlIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDI2cnB4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogRElOIENvbmRlbnNlZDtcblxuICAgICAgICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGxlZnQ6IC0zNHJweDtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYwJSk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI2cnB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjRycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GdkQ2VUVjeUZsSDVFZ0M4VkU4ZGZadkRuUU12P2ltYWdlc2xpbScpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbn1cbi5tb3JlLXJhbmsge1xuICAgIHBhZGRpbmc6IDAgMjBycHggODBycHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZiB1cmwoJ2h0dHBzOi8vZmVzLnF5ZXJzdGF0aWMuY29tL0ZtR2xMN1Q0WXJ0VVM5VHA2MS1RZEpVdjNKX1I/aW1hZ2VzbGltJykgbm8tcmVwZWF0IDEwMCUgMjBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcxNHJweCA2OTZycHg7XG5cbiAgICAmLm5vLWJpdXMge1xuICAgICAgcGFkZGluZy10b3A6IDMwcnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjJycHggMjJycHggMCAwO1xuICAgIH1cblxuICAgIC5oMiB7XG4gICAgICBwYWRkaW5nOiA2MHJweCAwIDM0cnB4IDYwcnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQycnB4O1xuICAgICAgZm9udC1zaXplOiA0MnJweDtcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuXG4gICAgPi5wIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNjBycHg7XG4gICAgICBsaW5lLWhlaWdodDogNDZycHg7XG4gICAgICBmb250LXNpemU6IDI2cnB4O1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0MnJweDtcbiAgICB9XG5cbiAgICAudWwge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDkwcnB4O1xuXG4gICAgICAubGkge1xuICAgICAgICB3aWR0aDogMzQ4cnB4O1xuICAgICAgICBoZWlnaHQ6IDI1MHJweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZycHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLmltZy12aWV3e1xuICAgICAgICAgIHdpZHRoOiAzNDhycHg7XG4gICAgICAgICAgaGVpZ2h0OiAyNTBycHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnJweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zcGFuIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxNTBycHg7XG4gICAgICAgICAgaGVpZ2h0OiA2MHJweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNnJweCAwIDE2cnB4IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjRkZFQ0NCLCAjQ0ZCMzgxKTtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgei1pbmRleDogMjtcblxuICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB3aWR0aDogNzJycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDMycnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKCdodHRwczovL2Zlcy5xeWVyc3RhdGljLmNvbS9GbWxJWnVadmlNdE5QVGhxQmpaMHVJWFFKVDAzP2ltYWdlc2xpbScpIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogOHJweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5pIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNHJweDtcbiAgICAgICAgICAgIGhlaWdodDogMjhycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIC5pbWcge1xuICAgICAgICAgICAgICBoZWlnaHQ6IDMycnB4O1xuICAgICAgICAgICAgICB3aWR0aDogMjBycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnAge1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMzBycHg7XG4gICAgICAgICAgYm90dG9tOiAzMHJweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDJycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnJweDtcbiAgICAgICAgICB3aWR0aDogMjI4cnB4O1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgMzBycHggIzAwMDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmZpZ3VyZSB7XG4gICAgICBoZWlnaHQ6IDQ4cnB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAuaW1nIHtcbiAgICAgICAgd2lkdGg6IDE2NnJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS00IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9sb2FkZXIuanM/P3JlZi0tMTAtb25lT2YtMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAtb25lT2YtMS00IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTAtb25lT2YtMS01IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vZGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9bGVzcyZcIiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE1OTQyNzM0NzgyODNcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiL1VzZXJzL2hvdXlhb2h1aS93d3dyb290L1FZZXIvendvcmxkcmFua2luZy9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi4vLi4vXCIsXCJsb2NhbHNcIjpmYWxzZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBtb2R1bGUuaG90LmFjY2VwdCh1bmRlZmluZWQsIGNzc1JlbG9hZCk7XG4gICAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9