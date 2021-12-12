exports.ids = [5];
exports.modules = {

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(8).default
module.exports.__inject__ = function (context) {
  add("2f81bacc", content, true, context)
};

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_code_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".quantity{width:65px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_code.vue?vue&type=template&id=0737672e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<main><div class=\"py-5 text-center\"><h2>Welcome</h2> <p class=\"lead\">"+_vm._ssrEscape(_vm._s(_vm.user.first_name)+" has invited you to buy these products!")+"</p></div> <div class=\"row g-5\"><div class=\"col-md-5 col-lg-4 order-md-last\"><h4 class=\"d-flex justify-content-between align-items-center mb-3\"><span class=\"text-primary\">Products</span></h4> <ul class=\"list-group mb-3\">"+(_vm._ssrList((_vm.products),function(product){return ("<li class=\"list-group-item d-flex justify-content-between lh-sm\"><div><h6 class=\"my-0\">"+_vm._ssrEscape(_vm._s(product.title))+"</h6> <small class=\"text-muted\">"+_vm._ssrEscape(_vm._s(product.description))+"</small></div> <span class=\"text-muted\">"+_vm._ssrEscape(_vm._s(product.price))+"</span></li> <li class=\"list-group-item d-flex justify-content-between lh-sm\"><div><h6 class=\"my-0\">Quantity</h6></div> <input type=\"number\" min=\"0\""+(_vm._ssrAttr("value",(_vm.quantities[product.id])))+" class=\"text-muted form-control quantity\"></li>")}))+" <li class=\"list-group-item d-flex justify-content-between\"><span>Total (USD)</span> <strong>"+_vm._ssrEscape("$"+_vm._s(_vm.total))+"</strong></li></ul></div> <div class=\"col-md-7 col-lg-8\"><h4 class=\"mb-3\">Personal info</h4> <form class=\"needs-validation\"><div class=\"row g-3\"><div class=\"col-sm-6\"><label for=\"firstName\" class=\"form-label\">First name</label> <input type=\"text\" id=\"firstName\" placeholder=\"First Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.first_name)))+" class=\"form-control\"></div> <div class=\"col-sm-6\"><label for=\"lastName\" class=\"form-label\">Last name</label> <input type=\"text\" id=\"lastName\" placeholder=\"Last Name\" required=\"required\""+(_vm._ssrAttr("value",(_vm.last_name)))+" class=\"form-control\"></div> <div class=\"col-12\"><label for=\"email\" class=\"form-label\">Email</label> <input type=\"email\" id=\"email\" placeholder=\"you@example.com\""+(_vm._ssrAttr("value",(_vm.email)))+" class=\"form-control\"></div> <div class=\"col-12\"><label for=\"address\" class=\"form-label\">Address</label> <input type=\"text\" id=\"address\" placeholder=\"1234 Main St\" required=\"required\""+(_vm._ssrAttr("value",(_vm.address)))+" class=\"form-control\"></div> <div class=\"col-md-5\"><label for=\"country\" class=\"form-label\">Country</label> <input type=\"text\" id=\"country\" placeholder=\"Country\""+(_vm._ssrAttr("value",(_vm.country)))+" class=\"form-control\"></div> <div class=\"col-md-4\"><label for=\"city\" class=\"form-label\">City</label> <input type=\"text\" id=\"city\" placeholder=\"City\""+(_vm._ssrAttr("value",(_vm.city)))+" class=\"form-control\"></div> <div class=\"col-md-3\"><label for=\"zip\" class=\"form-label\">Zip</label> <input type=\"text\" id=\"zip\" placeholder=\"Zip\""+(_vm._ssrAttr("value",(_vm.zip)))+" class=\"form-control\"></div></div> <hr class=\"my-4\"> <button type=\"submit\" class=\"w-100 btn btn-primary btn-lg\">Checkout</button></form></div></div></main>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/_code.vue?vue&type=template&id=0737672e&

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--12-0!./node_modules/ts-loader??ref--12-1!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/_code.vue?vue&type=script&lang=ts&

/* harmony default export */ var _codevue_type_script_lang_ts_ = (external_vue_default.a.extend({
  // Async allow us to render the data in the server
  async asyncData(ctx) {
    const {
      data
    } = await ctx.$axios.get(`links/${ctx.params.code}`);
    const user = data.user;
    const products = data.products;
    let quantities = [];
    products.forEach(p => {
      quantities[p.id] = 0;
    });
    return {
      user,
      products,
      quantities
    };
  },

  data() {
    return {
      user: null,
      products: [],
      quantities: [],
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      country: '',
      city: '',
      zip: ''
    };
  },

  methods: {
    async submit() {
      const {
        data
      } = await this.$axios.post('orders', {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        address: this.address,
        country: this.country,
        city: this.city,
        zip: this.zip,
        code: this.$route.params.code,
        products: this.products.map(p => ({
          product_id: p.id,
          quantity: this.quantities[p.id]
        }))
      });
    },

    total() {
      return this.products.reduce((s, p) => {
        return s + p.price * this.quantities[p.id];
      }, 0);
    }

  }
}));
// CONCATENATED MODULE: ./pages/_code.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pages_codevue_type_script_lang_ts_ = (_codevue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/_code.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(23)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_codevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "315b767d"
  
)

/* harmony default export */ var _code = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_code.js.map