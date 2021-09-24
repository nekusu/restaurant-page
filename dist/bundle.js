/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/contact.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/contact.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#contact {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n}\n\n#contact-us {\n\tmargin: 10px 0 20px;\n\tfont-size: min(60px, 12vw);\n\tfont-weight: 800;\n\tcolor: white;\n\tanimation: var(--time) move-in;\n}\n\n#contact #info-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tanimation: var(--delay) hidden, var(--time) move-in var(--delay);\n}\n\n.contact-info {\n\tmargin: 2px 0;\n\tpadding: 10px 0;\n\tposition: relative;\n\tcursor: pointer;\n\tuser-select: none;\n\toverflow-wrap: anywhere;\n\tfont-size: 18px;\n\tcolor: var(--text-alt);\n\ttransition: var(--transition);\n}\n\n.contact-info:after {\n\tcontent: '';\n\theight: 4px;\n\twidth: 98%;\n\tposition: absolute;\n\tbottom: 1px;\n\tleft: 1.5%;\n\tborder-radius: 2px;\n\tbackground-color: var(--accent);\n\ttransform: scaleX(0);\n\topacity: 0;\n\ttransition: background-color 0.25s, transform 0.3s, opacity 0.25s;\n}\n\n.contact-info span {\n\tmargin-right: 10px;\n\tvertical-align: bottom;\n\tcolor: var(--text);\n\ttransition: var(--transition);\n}\n\n.contact-info:hover span {\n\tcolor: var(--accent);\n}\n\n.contact-info:hover {\n\tcolor: var(--text);\n\ttransform: translateY(-6px);\n}\n\n.contact-info:hover:after {\n\ttransform: scaleX(1);\n\topacity: 1;\n}\n\n.copy {\n\tpadding: 10px 18px;\n\tposition: absolute;\n\tpointer-events: none;\n\tfont-size: 15px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n\tbackground-color: var(--accent);\n\tbox-shadow: var(--distant-shadow);\n\tanimation: 0.25s grow, 0.5s grow reverse forwards 0.5s;\n}\n\n#contact form {\n\tmargin: 40px 0 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tanimation: calc(var(--delay) * 2) hidden, var(--time) move-in calc(var(--delay) * 2);\n}\n\n#contact form p {\n\tfont-size: 22px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n}\n\n#contact form input[type=email] {\n\twidth: 100%;\n\tmax-width: 400px;\n\tmargin: 35px 0 25px;\n\tpadding: 8px 20px;\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\ttext-align: center;\n\tfont-size: 18px;\n\tcolor: var(--text-alt);\n\tbackground-color: var(--bg-alt);\n\tborder: 2px solid transparent;\n}\n\n#contact form input[type=email]:hover {\n\tbackground-color: var(--hover);\n}\n\n#contact form input[type=email]:focus {\n\tcolor: var(--text);\n\tbackground-color: var(--hover);\n\tborder-color: var(--accent);\n\tbox-shadow: var(--distant-shadow);\n}\n\n#contact form input[type=submit] {\n\tpadding: 12px 24px;\n\tcursor: pointer;\n\tfont-size: 20px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n\tbackground-color: var(--accent2);\n}\n\n#contact form input[type=submit]:hover {\n\tbox-shadow: 0 10px 20px rgba(197, 30, 85, 0.4);\n\ttransform: scale(1.075) translateY(-2px);\n}\n\n#contact form input[type=submit]:active {\n\ttransform: scale(0.925);\n}\n", "",{"version":3,"sources":["webpack://./src/contact.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,kBAAkB;AACnB;;AAEA;CACC,mBAAmB;CACnB,0BAA0B;CAC1B,gBAAgB;CAChB,YAAY;CACZ,8BAA8B;AAC/B;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,gEAAgE;AACjE;;AAEA;CACC,aAAa;CACb,eAAe;CACf,kBAAkB;CAClB,eAAe;CACf,iBAAiB;CACjB,uBAAuB;CACvB,eAAe;CACf,sBAAsB;CACtB,6BAA6B;AAC9B;;AAEA;CACC,WAAW;CACX,WAAW;CACX,UAAU;CACV,kBAAkB;CAClB,WAAW;CACX,UAAU;CACV,kBAAkB;CAClB,+BAA+B;CAC/B,oBAAoB;CACpB,UAAU;CACV,iEAAiE;AAClE;;AAEA;CACC,kBAAkB;CAClB,sBAAsB;CACtB,kBAAkB;CAClB,6BAA6B;AAC9B;;AAEA;CACC,oBAAoB;AACrB;;AAEA;CACC,kBAAkB;CAClB,2BAA2B;AAC5B;;AAEA;CACC,oBAAoB;CACpB,UAAU;AACX;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;CAClB,oBAAoB;CACpB,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,+BAA+B;CAC/B,iCAAiC;CACjC,sDAAsD;AACvD;;AAEA;CACC,mBAAmB;CACnB,aAAa;CACb,sBAAsB;CACtB,uBAAuB;CACvB,mBAAmB;CACnB,oFAAoF;AACrF;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,WAAW;CACX,gBAAgB;CAChB,mBAAmB;CACnB,iBAAiB;CACjB,qBAAqB;CACrB,sBAAsB;CACtB,kBAAkB;CAClB,eAAe;CACf,sBAAsB;CACtB,+BAA+B;CAC/B,6BAA6B;AAC9B;;AAEA;CACC,8BAA8B;AAC/B;;AAEA;CACC,kBAAkB;CAClB,8BAA8B;CAC9B,2BAA2B;CAC3B,iCAAiC;AAClC;;AAEA;CACC,kBAAkB;CAClB,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,gCAAgC;AACjC;;AAEA;CACC,8CAA8C;CAC9C,wCAAwC;AACzC;;AAEA;CACC,uBAAuB;AACxB","sourcesContent":["#contact {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\ttext-align: center;\n}\n\n#contact-us {\n\tmargin: 10px 0 20px;\n\tfont-size: min(60px, 12vw);\n\tfont-weight: 800;\n\tcolor: white;\n\tanimation: var(--time) move-in;\n}\n\n#contact #info-container {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tanimation: var(--delay) hidden, var(--time) move-in var(--delay);\n}\n\n.contact-info {\n\tmargin: 2px 0;\n\tpadding: 10px 0;\n\tposition: relative;\n\tcursor: pointer;\n\tuser-select: none;\n\toverflow-wrap: anywhere;\n\tfont-size: 18px;\n\tcolor: var(--text-alt);\n\ttransition: var(--transition);\n}\n\n.contact-info:after {\n\tcontent: '';\n\theight: 4px;\n\twidth: 98%;\n\tposition: absolute;\n\tbottom: 1px;\n\tleft: 1.5%;\n\tborder-radius: 2px;\n\tbackground-color: var(--accent);\n\ttransform: scaleX(0);\n\topacity: 0;\n\ttransition: background-color 0.25s, transform 0.3s, opacity 0.25s;\n}\n\n.contact-info span {\n\tmargin-right: 10px;\n\tvertical-align: bottom;\n\tcolor: var(--text);\n\ttransition: var(--transition);\n}\n\n.contact-info:hover span {\n\tcolor: var(--accent);\n}\n\n.contact-info:hover {\n\tcolor: var(--text);\n\ttransform: translateY(-6px);\n}\n\n.contact-info:hover:after {\n\ttransform: scaleX(1);\n\topacity: 1;\n}\n\n.copy {\n\tpadding: 10px 18px;\n\tposition: absolute;\n\tpointer-events: none;\n\tfont-size: 15px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n\tbackground-color: var(--accent);\n\tbox-shadow: var(--distant-shadow);\n\tanimation: 0.25s grow, 0.5s grow reverse forwards 0.5s;\n}\n\n#contact form {\n\tmargin: 40px 0 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: center;\n\talign-items: center;\n\tanimation: calc(var(--delay) * 2) hidden, var(--time) move-in calc(var(--delay) * 2);\n}\n\n#contact form p {\n\tfont-size: 22px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n}\n\n#contact form input[type=email] {\n\twidth: 100%;\n\tmax-width: 400px;\n\tmargin: 35px 0 25px;\n\tpadding: 8px 20px;\n\tdisplay: inline-block;\n\tbox-sizing: border-box;\n\ttext-align: center;\n\tfont-size: 18px;\n\tcolor: var(--text-alt);\n\tbackground-color: var(--bg-alt);\n\tborder: 2px solid transparent;\n}\n\n#contact form input[type=email]:hover {\n\tbackground-color: var(--hover);\n}\n\n#contact form input[type=email]:focus {\n\tcolor: var(--text);\n\tbackground-color: var(--hover);\n\tborder-color: var(--accent);\n\tbox-shadow: var(--distant-shadow);\n}\n\n#contact form input[type=submit] {\n\tpadding: 12px 24px;\n\tcursor: pointer;\n\tfont-size: 20px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n\tbackground-color: var(--accent2);\n}\n\n#contact form input[type=submit]:hover {\n\tbox-shadow: 0 10px 20px rgba(197, 30, 85, 0.4);\n\ttransform: scale(1.075) translateY(-2px);\n}\n\n#contact form input[type=submit]:active {\n\ttransform: scale(0.925);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/home.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/home.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#home {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#home #container {\n\tmargin: 10px 0;\n\tmargin-left: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n}\n\n#home #title {\n\tfont-size: min(70px, 12vw);\n\tfont-weight: 800;\n\tcolor: white;\n\tanimation: var(--time) move-in;\n}\n\n#home #title span {\n\tdisplay: inline-block;\n\tcolor: var(--accent);\n\ttransition: transform 0.25s, text-shadow 0.4s;\n}\n\n#home #title span:hover {\n\ttext-shadow: 0 0 35px rgba(71, 41, 206, 0.5);\n\ttransform: scale(1.1);\n}\n\n#home #description {\n\twidth: 60%;\n\tmargin: 30px 0;\n\tfont-size: 20px;\n\tline-height: 35px;\n\tcolor: var(--text-alt);\n\tanimation: var(--delay) hidden, var(--time) move-in var(--delay);\n}\n\n#home #order {\n\tmargin: 10px 0;\n\tpadding: 15px 25px;\n\tcursor: pointer;\n\tfont-size: 24px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n\tbackground-color: var(--accent2);\n\tanimation: calc(var(--delay) * 2) hidden, var(--time) move-in calc(var(--delay) * 2);\n}\n\n#home #order:hover {\n\tbox-shadow: 0 10px 25px rgba(197, 30, 85, 0.4);\n\ttransform: scale(1.075) translateY(-3px);\n}\n\n#home #order:active {\n\ttransform: scale(0.925);\n}\n\n#home img {\n\twidth: 40vw;\n\tmax-width: 550px;\n\tmargin: 40px 0;\n\ttransition: transform 0.3s, filter 0.5s;\n\tanimation: calc(var(--delay) * 2.5) hidden, 1.1s grow calc(var(--delay) * 2.5);\n}\n\n#home img:hover {\n\tfilter: drop-shadow(0 0 12px rgba(255, 200, 0, 0.4));\n\ttransform: scale(1.05);\n}\n\n@media screen and (max-width:1030px) {\n\t#home {\n\t\tflex-direction: column;\n\t}\n\t#home #container {\n\t\tmargin-left: 0;\n\t\talign-items: center;\n\t\ttext-align: center;\n\t}\n\t#home #description {\n\t\twidth: 100%;\n\t}\n\t#home img {\n\t\twidth: 80vw;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/home.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,8BAA8B;CAC9B,mBAAmB;AACpB;;AAEA;CACC,cAAc;CACd,iBAAiB;CACjB,aAAa;CACb,sBAAsB;CACtB,uBAAuB;AACxB;;AAEA;CACC,0BAA0B;CAC1B,gBAAgB;CAChB,YAAY;CACZ,8BAA8B;AAC/B;;AAEA;CACC,qBAAqB;CACrB,oBAAoB;CACpB,6CAA6C;AAC9C;;AAEA;CACC,4CAA4C;CAC5C,qBAAqB;AACtB;;AAEA;CACC,UAAU;CACV,cAAc;CACd,eAAe;CACf,iBAAiB;CACjB,sBAAsB;CACtB,gEAAgE;AACjE;;AAEA;CACC,cAAc;CACd,kBAAkB;CAClB,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,gCAAgC;CAChC,oFAAoF;AACrF;;AAEA;CACC,8CAA8C;CAC9C,wCAAwC;AACzC;;AAEA;CACC,uBAAuB;AACxB;;AAEA;CACC,WAAW;CACX,gBAAgB;CAChB,cAAc;CACd,uCAAuC;CACvC,8EAA8E;AAC/E;;AAEA;CACC,oDAAoD;CACpD,sBAAsB;AACvB;;AAEA;CACC;EACC,sBAAsB;CACvB;CACA;EACC,cAAc;EACd,mBAAmB;EACnB,kBAAkB;CACnB;CACA;EACC,WAAW;CACZ;CACA;EACC,WAAW;CACZ;AACD","sourcesContent":["#home {\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n}\n\n#home #container {\n\tmargin: 10px 0;\n\tmargin-left: 10px;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: flex-start;\n}\n\n#home #title {\n\tfont-size: min(70px, 12vw);\n\tfont-weight: 800;\n\tcolor: white;\n\tanimation: var(--time) move-in;\n}\n\n#home #title span {\n\tdisplay: inline-block;\n\tcolor: var(--accent);\n\ttransition: transform 0.25s, text-shadow 0.4s;\n}\n\n#home #title span:hover {\n\ttext-shadow: 0 0 35px rgba(71, 41, 206, 0.5);\n\ttransform: scale(1.1);\n}\n\n#home #description {\n\twidth: 60%;\n\tmargin: 30px 0;\n\tfont-size: 20px;\n\tline-height: 35px;\n\tcolor: var(--text-alt);\n\tanimation: var(--delay) hidden, var(--time) move-in var(--delay);\n}\n\n#home #order {\n\tmargin: 10px 0;\n\tpadding: 15px 25px;\n\tcursor: pointer;\n\tfont-size: 24px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n\tbackground-color: var(--accent2);\n\tanimation: calc(var(--delay) * 2) hidden, var(--time) move-in calc(var(--delay) * 2);\n}\n\n#home #order:hover {\n\tbox-shadow: 0 10px 25px rgba(197, 30, 85, 0.4);\n\ttransform: scale(1.075) translateY(-3px);\n}\n\n#home #order:active {\n\ttransform: scale(0.925);\n}\n\n#home img {\n\twidth: 40vw;\n\tmax-width: 550px;\n\tmargin: 40px 0;\n\ttransition: transform 0.3s, filter 0.5s;\n\tanimation: calc(var(--delay) * 2.5) hidden, 1.1s grow calc(var(--delay) * 2.5);\n}\n\n#home img:hover {\n\tfilter: drop-shadow(0 0 12px rgba(255, 200, 0, 0.4));\n\ttransform: scale(1.05);\n}\n\n@media screen and (max-width:1030px) {\n\t#home {\n\t\tflex-direction: column;\n\t}\n\t#home #container {\n\t\tmargin-left: 0;\n\t\talign-items: center;\n\t\ttext-align: center;\n\t}\n\t#home #description {\n\t\twidth: 100%;\n\t}\n\t#home img {\n\t\twidth: 80vw;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/menu.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/menu.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "#menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n\tgrid-gap: 10px;\n}\n\n#menu .food.box {\n\tmargin: 12px;\n\tpadding: 25px 30px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tbackground-color: var(--bg-alt);\n}\n\n#menu .food.box:hover {\n\tbackground-color: var(--hover);\n\tbox-shadow: var(--distant-shadow);\n\ttransform: scale(1.05) translateY(-4px);\n}\n\n#menu .food.box .name {\n\tfont-size: 30px;\n\tfont-weight: 800;\n\tcolor: var(--accent2);\n}\n\n#menu .food.box .description {\n\tmargin: 15px 0;\n\tfont-size: 16px;\n\tline-height: 22px;\n\tcolor: var(--text-alt);\n}\n\n#menu .food.box .price-order {\n\tmax-width: 164px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tjustify-content: space-around;\n}\n\n#menu .food.box .price {\n\tmargin: 5px 0;\n\tfont-size: 28px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n}\n\n#menu .food.box .order {\n\tmargin: 5px 15px;\n\tpadding: 10px 22px;\n\tcursor: pointer;\n\tfont-size: 20px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n\tbackground-color: var(--accent);\n}\n\n#menu .food.box .order:hover {\n\tbox-shadow: 0 10px 20px rgba(71, 41, 206, 0.4);\n\ttransform: scale(1.075);\n}\n\n#menu .food.box .order:active {\n\ttransform: scale(0.925);\n}\n", "",{"version":3,"sources":["webpack://./src/menu.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,4DAA4D;CAC5D,cAAc;AACf;;AAEA;CACC,YAAY;CACZ,kBAAkB;CAClB,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,+BAA+B;AAChC;;AAEA;CACC,8BAA8B;CAC9B,iCAAiC;CACjC,uCAAuC;AACxC;;AAEA;CACC,eAAe;CACf,gBAAgB;CAChB,qBAAqB;AACtB;;AAEA;CACC,cAAc;CACd,eAAe;CACf,iBAAiB;CACjB,sBAAsB;AACvB;;AAEA;CACC,gBAAgB;CAChB,aAAa;CACb,eAAe;CACf,mBAAmB;CACnB,6BAA6B;AAC9B;;AAEA;CACC,aAAa;CACb,eAAe;CACf,gBAAgB;CAChB,kBAAkB;AACnB;;AAEA;CACC,gBAAgB;CAChB,kBAAkB;CAClB,eAAe;CACf,eAAe;CACf,gBAAgB;CAChB,kBAAkB;CAClB,+BAA+B;AAChC;;AAEA;CACC,8CAA8C;CAC9C,uBAAuB;AACxB;;AAEA;CACC,uBAAuB;AACxB","sourcesContent":["#menu {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n\tgrid-gap: 10px;\n}\n\n#menu .food.box {\n\tmargin: 12px;\n\tpadding: 25px 30px;\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tbackground-color: var(--bg-alt);\n}\n\n#menu .food.box:hover {\n\tbackground-color: var(--hover);\n\tbox-shadow: var(--distant-shadow);\n\ttransform: scale(1.05) translateY(-4px);\n}\n\n#menu .food.box .name {\n\tfont-size: 30px;\n\tfont-weight: 800;\n\tcolor: var(--accent2);\n}\n\n#menu .food.box .description {\n\tmargin: 15px 0;\n\tfont-size: 16px;\n\tline-height: 22px;\n\tcolor: var(--text-alt);\n}\n\n#menu .food.box .price-order {\n\tmax-width: 164px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\talign-items: center;\n\tjustify-content: space-around;\n}\n\n#menu .food.box .price {\n\tmargin: 5px 0;\n\tfont-size: 28px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n}\n\n#menu .food.box .order {\n\tmargin: 5px 15px;\n\tpadding: 10px 22px;\n\tcursor: pointer;\n\tfont-size: 20px;\n\tfont-weight: 700;\n\tcolor: var(--text);\n\tbackground-color: var(--accent);\n}\n\n#menu .food.box .order:hover {\n\tbox-shadow: 0 10px 20px rgba(71, 41, 206, 0.4);\n\ttransform: scale(1.075);\n}\n\n#menu .food.box .order:active {\n\ttransform: scale(0.925);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\toutline: none;\n\tfont-family: Sen;\n}\n\n:root {\n\t--accent: rgb(71, 41, 206);\n\t--accent2: rgb(197, 30, 85);\n\t--bg: rgb(25, 26, 29);\n\t--bg-alt: rgb(30, 31, 35);\n\t--hover: rgb(35, 36, 40);\n\t--text: rgb(240, 240, 240);\n\t--text-alt: rgb(170, 170, 170);\n\t--radius: 25px;\n\t--lightest: 0.075;\n\t--light: 0.1;\n\t--dark: 0.125;\n\t--darkest: 0.175;\n\t--close-shadow: 0 2px 6px rgba(0, 0, 0, var(--lightest)), 0 8px 14px rgba(0, 0, 0, var(--light));\n\t--distant-shadow: 0 2px 6px rgba(0, 0, 0, var(--dark)), 0 12px 20px rgba(0, 0, 0, var(--darkest));\n\t--transition: color 0.25s, background-color 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.2s, opacity 0.25s, filter 0.25s;\n\t--time: 0.85s;\n\t--delay: 0.2s;\n}\n\nhtml::-webkit-scrollbar {\n\tdisplay: none;\n}\n\nhtml {\n\t-ms-overflow-style: none;\n\tscrollbar-width: none;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmin-height: 100vh;\n\tbackground-color: var(--bg);\n}\n\nheader {\n\tmin-height: 120px;\n\tpadding: 10px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n\talign-items: center;\n}\n\n.box {\n\tborder-radius: var(--radius);\n\tbox-shadow: var(--close-shadow);\n\ttransition: var(--transition);\n}\n\n#logo {\n\theight: 80px;\n\tmargin: 5px 20px;\n\tpadding: 0 20px;\n\tcursor: pointer;\n\tfilter: invert(0.6);\n\ttransition: transform 0.2s, filter 0.25s;\n\tanimation: 1.5s grow;\n}\n\n#logo:hover {\n\tfilter: invert(1);\n}\n\n#tabs {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n}\n\n.tab {\n\tmargin: 5px 40px;\n\tpadding: 10px;\n\tposition: relative;\n\tcursor: pointer;\n\tuser-select: none;\n\tlist-style: none;\n\ttext-decoration: none;\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tcolor: var(--text-alt);\n\ttransition: var(--transition);\n}\n\n.tab:nth-child(1) {\n\tanimation: 1.2s fade-in;\n}\n.tab:nth-child(2) {\n\tanimation: var(--delay) hidden, 0.6s move-in var(--delay);\n}\n.tab:nth-child(3) {\n\tanimation: calc(var(--delay) * 2) hidden, 0.6s move-in calc(var(--delay) * 2);\n}\n\n.tab:after {\n\tcontent: '';\n\theight: 4px;\n\twidth: 40px;\n\tposition: absolute;\n\tbottom: 1px;\n\tleft: calc(50% - 20px);\n\tdisplay: block;\n\tborder-radius: 2px;\n\tbackground-color: var(--accent2);\n\ttransform: scaleX(0);\n\topacity: 0;\n\ttransition: background-color 0.25s, transform 0.3s, opacity 0.25s;\n}\n\n.tab.selected,\n.tab:hover {\n\tcolor: var(--text);\n\ttransform: translateY(-6px);\n}\n\n.tab:hover:after {\n\ttransform: scaleX(0.8);\n\topacity: 1;\n}\n\n.tab.selected:after{\n\tbackground-color: var(--accent);\n\ttransform: scaleX(1.2);\n\topacity: 1;\n}\n\n#logo:active,\n.tab:active {\n\ttransform: scale(0.85);\n}\n\n#content {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n#content > * {\n\twidth: 1200px;\n\tmax-width: 80vw;\n}\n\nfooter {\n\tmin-height: 120px;\n\tpadding: 10px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n#github {\n\tpadding: 10px 20px;\n\tdisplay: inline-block;\n\tuser-select: none;\n\tfont-size: 20px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcolor: var(--text);\n\tbackground-color: var(--hover);\n\ttransition: var(--transition);\n\tanimation: calc(var(--delay) * 3) hidden, var(--time) move-in calc(var(--delay) * 3);\n}\n\n#github img {\n\theight: 25px;\n\tmargin-left: 10px;\n\tposition: relative;\n\ttop: -1px;\n\tvertical-align: middle;\n\tfilter: invert(.95);\n}\n\n#github:hover {\n\tbox-shadow: var(--distant-shadow);\n\ttransform: scale(1.1);\n}\n\n@keyframes fade-in {\n\tfrom {\n\t\topacity: 0;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n}\n\n@keyframes move-in {\n\tfrom {\n\t\ttransform: translateY(70px);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: translateY(0);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes grow {\n\tfrom {\n\t\ttransform: scale(0.9);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: scale(1);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes hidden {\n\tfrom, to {\n\t\topacity: 0;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,UAAU;CACV,SAAS;CACT,aAAa;CACb,gBAAgB;AACjB;;AAEA;CACC,0BAA0B;CAC1B,2BAA2B;CAC3B,qBAAqB;CACrB,yBAAyB;CACzB,wBAAwB;CACxB,0BAA0B;CAC1B,8BAA8B;CAC9B,cAAc;CACd,iBAAiB;CACjB,YAAY;CACZ,aAAa;CACb,gBAAgB;CAChB,gGAAgG;CAChG,iGAAiG;CACjG,oIAAoI;CACpI,aAAa;CACb,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,wBAAwB;CACxB,qBAAqB;AACtB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,8BAA8B;CAC9B,iBAAiB;CACjB,2BAA2B;AAC5B;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,aAAa;CACb,eAAe;CACf,6BAA6B;CAC7B,mBAAmB;AACpB;;AAEA;CACC,4BAA4B;CAC5B,+BAA+B;CAC/B,6BAA6B;AAC9B;;AAEA;CACC,YAAY;CACZ,gBAAgB;CAChB,eAAe;CACf,eAAe;CACf,mBAAmB;CACnB,wCAAwC;CACxC,oBAAoB;AACrB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,eAAe;CACf,uBAAuB;AACxB;;AAEA;CACC,gBAAgB;CAChB,aAAa;CACb,kBAAkB;CAClB,eAAe;CACf,iBAAiB;CACjB,gBAAgB;CAChB,qBAAqB;CACrB,eAAe;CACf,gBAAgB;CAChB,sBAAsB;CACtB,6BAA6B;AAC9B;;AAEA;CACC,uBAAuB;AACxB;AACA;CACC,yDAAyD;AAC1D;AACA;CACC,6EAA6E;AAC9E;;AAEA;CACC,WAAW;CACX,WAAW;CACX,WAAW;CACX,kBAAkB;CAClB,WAAW;CACX,sBAAsB;CACtB,cAAc;CACd,kBAAkB;CAClB,gCAAgC;CAChC,oBAAoB;CACpB,UAAU;CACV,iEAAiE;AAClE;;AAEA;;CAEC,kBAAkB;CAClB,2BAA2B;AAC5B;;AAEA;CACC,sBAAsB;CACtB,UAAU;AACX;;AAEA;CACC,+BAA+B;CAC/B,sBAAsB;CACtB,UAAU;AACX;;AAEA;;CAEC,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,eAAe;AAChB;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,kBAAkB;CAClB,qBAAqB;CACrB,iBAAiB;CACjB,eAAe;CACf,kBAAkB;CAClB,qBAAqB;CACrB,kBAAkB;CAClB,8BAA8B;CAC9B,6BAA6B;CAC7B,oFAAoF;AACrF;;AAEA;CACC,YAAY;CACZ,iBAAiB;CACjB,kBAAkB;CAClB,SAAS;CACT,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;CACC,iCAAiC;CACjC,qBAAqB;AACtB;;AAEA;CACC;EACC,UAAU;CACX;CACA;EACC,UAAU;CACX;AACD;;AAEA;CACC;EACC,2BAA2B;EAC3B,UAAU;CACX;CACA;EACC,wBAAwB;EACxB,UAAU;CACX;AACD;;AAEA;CACC;EACC,qBAAqB;EACrB,UAAU;CACX;CACA;EACC,mBAAmB;EACnB,UAAU;CACX;AACD;;AAEA;CACC;EACC,UAAU;CACX;AACD","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\toutline: none;\n\tfont-family: Sen;\n}\n\n:root {\n\t--accent: rgb(71, 41, 206);\n\t--accent2: rgb(197, 30, 85);\n\t--bg: rgb(25, 26, 29);\n\t--bg-alt: rgb(30, 31, 35);\n\t--hover: rgb(35, 36, 40);\n\t--text: rgb(240, 240, 240);\n\t--text-alt: rgb(170, 170, 170);\n\t--radius: 25px;\n\t--lightest: 0.075;\n\t--light: 0.1;\n\t--dark: 0.125;\n\t--darkest: 0.175;\n\t--close-shadow: 0 2px 6px rgba(0, 0, 0, var(--lightest)), 0 8px 14px rgba(0, 0, 0, var(--light));\n\t--distant-shadow: 0 2px 6px rgba(0, 0, 0, var(--dark)), 0 12px 20px rgba(0, 0, 0, var(--darkest));\n\t--transition: color 0.25s, background-color 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.2s, opacity 0.25s, filter 0.25s;\n\t--time: 0.85s;\n\t--delay: 0.2s;\n}\n\nhtml::-webkit-scrollbar {\n\tdisplay: none;\n}\n\nhtml {\n\t-ms-overflow-style: none;\n\tscrollbar-width: none;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-between;\n\tmin-height: 100vh;\n\tbackground-color: var(--bg);\n}\n\nheader {\n\tmin-height: 120px;\n\tpadding: 10px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n\talign-items: center;\n}\n\n.box {\n\tborder-radius: var(--radius);\n\tbox-shadow: var(--close-shadow);\n\ttransition: var(--transition);\n}\n\n#logo {\n\theight: 80px;\n\tmargin: 5px 20px;\n\tpadding: 0 20px;\n\tcursor: pointer;\n\tfilter: invert(0.6);\n\ttransition: transform 0.2s, filter 0.25s;\n\tanimation: 1.5s grow;\n}\n\n#logo:hover {\n\tfilter: invert(1);\n}\n\n#tabs {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n}\n\n.tab {\n\tmargin: 5px 40px;\n\tpadding: 10px;\n\tposition: relative;\n\tcursor: pointer;\n\tuser-select: none;\n\tlist-style: none;\n\ttext-decoration: none;\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tcolor: var(--text-alt);\n\ttransition: var(--transition);\n}\n\n.tab:nth-child(1) {\n\tanimation: 1.2s fade-in;\n}\n.tab:nth-child(2) {\n\tanimation: var(--delay) hidden, 0.6s move-in var(--delay);\n}\n.tab:nth-child(3) {\n\tanimation: calc(var(--delay) * 2) hidden, 0.6s move-in calc(var(--delay) * 2);\n}\n\n.tab:after {\n\tcontent: '';\n\theight: 4px;\n\twidth: 40px;\n\tposition: absolute;\n\tbottom: 1px;\n\tleft: calc(50% - 20px);\n\tdisplay: block;\n\tborder-radius: 2px;\n\tbackground-color: var(--accent2);\n\ttransform: scaleX(0);\n\topacity: 0;\n\ttransition: background-color 0.25s, transform 0.3s, opacity 0.25s;\n}\n\n.tab.selected,\n.tab:hover {\n\tcolor: var(--text);\n\ttransform: translateY(-6px);\n}\n\n.tab:hover:after {\n\ttransform: scaleX(0.8);\n\topacity: 1;\n}\n\n.tab.selected:after{\n\tbackground-color: var(--accent);\n\ttransform: scaleX(1.2);\n\topacity: 1;\n}\n\n#logo:active,\n.tab:active {\n\ttransform: scale(0.85);\n}\n\n#content {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n#content > * {\n\twidth: 1200px;\n\tmax-width: 80vw;\n}\n\nfooter {\n\tmin-height: 120px;\n\tpadding: 10px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n#github {\n\tpadding: 10px 20px;\n\tdisplay: inline-block;\n\tuser-select: none;\n\tfont-size: 20px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tcolor: var(--text);\n\tbackground-color: var(--hover);\n\ttransition: var(--transition);\n\tanimation: calc(var(--delay) * 3) hidden, var(--time) move-in calc(var(--delay) * 3);\n}\n\n#github img {\n\theight: 25px;\n\tmargin-left: 10px;\n\tposition: relative;\n\ttop: -1px;\n\tvertical-align: middle;\n\tfilter: invert(.95);\n}\n\n#github:hover {\n\tbox-shadow: var(--distant-shadow);\n\ttransform: scale(1.1);\n}\n\n@keyframes fade-in {\n\tfrom {\n\t\topacity: 0;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n}\n\n@keyframes move-in {\n\tfrom {\n\t\ttransform: translateY(70px);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: translateY(0);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes grow {\n\tfrom {\n\t\ttransform: scale(0.9);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: scale(1);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes hidden {\n\tfrom, to {\n\t\topacity: 0;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/contact.css":
/*!*************************!*\
  !*** ./src/contact.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./contact.css */ "./node_modules/css-loader/dist/cjs.js!./src/contact.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_contact_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/home.css":
/*!**********************!*\
  !*** ./src/home.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/menu.css":
/*!**********************!*\
  !*** ./src/menu.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./menu.css */ "./node_modules/css-loader/dist/cjs.js!./src/menu.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_menu_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contact_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.css */ "./src/contact.css");


function copyToClipboard(e) {
	const copy = document.createElement('span');
	const el = e.target;
	navigator.clipboard.writeText(el.lastChild.textContent);
	el.style.filter = 'blur(2.5px)';
	copy.classList.add('copy', 'box');
	copy.textContent = 'Copied!';
	document.body.appendChild(copy);
	copy.style.top = `${el.offsetTop + el.offsetHeight / 2 - copy.offsetHeight / 2}px`;
	copy.style.left = `${el.offsetLeft + el.offsetWidth / 2 - copy.offsetWidth / 2}px`;
	setTimeout(() => {
		el.style.filter = '';
		copy.remove();
	}, 1000);
}

function createContactInfo(text, icon) {
	const info = document.createElement('p');
	const infoIcon = document.createElement('span');
	infoIcon.textContent = icon;
	infoIcon.classList.add('material-icons-outlined');
	info.textContent = text;
	info.title = 'Click to copy';
	info.classList.add('contact-info');
	info.addEventListener('click', copyToClipboard);
	info.insertBefore(infoIcon, info.firstChild);
	return info;
}

function createForm() {
	const form = document.createElement('form');
	const paragraph = document.createElement('p');
	const input = document.createElement('input');
	const submit = document.createElement('input');
	paragraph.textContent = 'Leave us your email to receive exclusive promotions and discount coupons!';
	input.type = 'email';
	input.placeholder = 'Enter your email address';
	input.required = true;
	submit.value = 'Subscribe';
	submit.type = 'submit';
	[input, submit].forEach(el => el.classList.add('box'));
	[paragraph, input, submit].forEach(el => form.appendChild(el));
	return form;
}

function createContact() {
	const contact = document.createElement('div');
	const contactUs = document.createElement('div');
	const infoContainer = document.createElement('div');
	const phone = createContactInfo('+1-555-4444-333', 'phone');
	const email = createContactInfo('fakemail@burgerstore.com', 'email');
	const location = createContactInfo('160 Broadway, New York, NY 10038, United States', 'place');
	const form = createForm();
	contact.id = 'contact';
	contact.dataset.id = 2;
	contactUs.id = 'contact-us';
	contactUs.textContent = 'Contact us!';
	infoContainer.id = 'info-container';
	[phone, email, location].forEach(el => infoContainer.appendChild(el));
	[contactUs, infoContainer, form].forEach(el => contact.appendChild(el));
	return contact;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);


/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.css */ "./src/home.css");
/* harmony import */ var _burger_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger.png */ "./src/burger.png");




function createHome() {
	const home = document.createElement('div');
	const container = document.createElement('div');
	const title = document.createElement('p');
	const titleSpan = document.createElement('span');
	const paragraph = document.createElement('p');
	const button = document.createElement('button');
	const img = document.createElement('img');
	home.id = 'home';
	home.dataset.id = 0;
	container.id = 'container';
	title.id = 'title';
	title.textContent = 'Order Juicy & Scrummy Food ';
	titleSpan.textContent = 'anytime!';
	title.appendChild(titleSpan);
	paragraph.id = 'description';
	paragraph.textContent = 'Just confirm your order and enjoy our delicious fastest delivery.'
	button.id = 'order';
	button.classList.add('box');
	button.textContent = 'Order Now';
	button.addEventListener('click', () => tabs.childNodes[1].click());
	[title, paragraph, button].forEach(el => container.appendChild(el));
	img.src = _burger_png__WEBPACK_IMPORTED_MODULE_1__;
	home.appendChild(container);
	home.appendChild(img);
	return home;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);


/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.css */ "./src/menu.css");


function createFoodBox(food, i) {
	const foodBox = document.createElement('div');
	const foodName = document.createElement('div');
	const foodDescription = document.createElement('div');
	const foodPriceOrder = document.createElement('div');
	const foodPrice = document.createElement('div');
	const foodOrder = document.createElement('button');
	foodBox.classList.add('food', 'box');
	foodBox.style.animation = `${i * 0.1}s hidden, 0.85s move-in ${i * 0.1}s`
	foodName.textContent = food.name;
	foodName.classList.add('name');
	foodDescription.textContent = food.description;
	foodDescription.classList.add('description');
	foodPriceOrder.classList.add('price-order');
	foodPrice.textContent = `$${food.price}`;
	foodPrice.classList.add('price');
	foodOrder.textContent = 'Order';
	foodOrder.classList.add('order', 'box');
	foodOrder.addEventListener('click', () => tabs.lastElementChild.click());
	[foodPrice, foodOrder].forEach(el => foodPriceOrder.appendChild(el));
	[foodName, foodDescription, foodPriceOrder].forEach(el => foodBox.appendChild(el));
	return foodBox;
}

function createMenu() {
	const menu = document.createElement('div');
	const foodMenu = [
		{ name: 'Classic', description: 'Lettuce, tomato, red onion, pickles, mustard, ketchup, mayo', price: 2 },
		{ name: 'Double Classic', description: 'Two flame-grilled beef patties, lettuce, tomato, red onion, pickles, mustard, ketchup, mayo', price: 4 },
		{ name: 'Black Jack', description: 'Blackened beef, pepper jack cheese, lettuce, tomato, creole mayo', price: 3 },
		{ name: 'Bacon Cheddar', description: 'Cheddar cheese, bacon, lettuce, tomato, red onion, pickles, mustard, ketchup, mayo', price: 5 },
		{ name: 'Southwest BBQ', description: 'Cheddar cheese, bacon, onion straws, BBQ sauce, chipotle mayo, lettuce, tomato, pickles', price: 8 },
		{ name: 'Black & Bleu', description: 'Blackened beef, crumbled blue cheese, bacon, lettuce, tomato, red onion, mayo', price: 6 },
	]
	const foodBoxes = foodMenu.map((food, i) => createFoodBox(food, i));
	menu.id = 'menu';
	menu.dataset.id = 1;
	foodBoxes.forEach(box => menu.appendChild(box));
	return menu;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);


/***/ }),

/***/ "./src/burger.png":
/*!************************!*\
  !*** ./src/burger.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94bd205c92a2e14b81f5.png";

/***/ }),

/***/ "./src/logo.png":
/*!**********************!*\
  !*** ./src/logo.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d78289e1d17e0403f594.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo.png */ "./src/logo.png");






function createTabs() {
	const tabs = ['Home', 'Menu', 'Contact'];
	const listItems = [];
	for (let i = 0; i < tabs.length; i++) {
		const li = document.createElement('li');
		li.textContent = tabs[i];
		li.classList.add('tab');
		li.addEventListener('click', () => createContent(i));
		listItems.push(li);
	}
	return listItems;
}

function createHeader() {
	const header = document.createElement('header');
	const img = document.createElement('img');
	const ul = document.createElement('ul');
	img.id = 'logo';
	img.src = _logo_png__WEBPACK_IMPORTED_MODULE_4__;
	ul.id = 'tabs';
	createTabs().forEach(tab => ul.appendChild(tab));
	ul.addEventListener('click', selectTab);
	ul.firstElementChild.click();
	img.addEventListener('click', () => ul.firstElementChild.click());
	header.appendChild(img);
	header.appendChild(ul);
	return header;
}

function selectTab(e) {
	if (e.target !== this) {
		for (const tab of this.childNodes) {
			if (tab === e.target) {
				tab.classList.add('selected');
			} else {
				tab.classList.remove('selected');
			}
		}
	}
}

function createContent(i) {
	const tabContent = document.querySelector('#content');
	const createFunctions = [_home_js__WEBPACK_IMPORTED_MODULE_0__["default"], _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"], _contact_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
	if (!tabContent.firstElementChild) {
		tabContent.appendChild(createFunctions[i]());
	} else if (tabContent.firstElementChild.dataset.id != i) {
		tabContent.replaceChild(createFunctions[i](), tabContent.firstElementChild);
	}
}

function createGithubButton() {
	const a = document.createElement('a');
	const img = document.createElement('img');
	a.id = 'github';
	a.href = 'https://github.com/nekusu';
	a.target = '_blank';
	a.title = 'Check my GitHub!';
	a.textContent = 'nekusu';
	a.classList.add('box');
	img.src = 'https://pngimg.com/uploads/github/github_PNG80.png';
	img.alt = 'GitHub';
	a.appendChild(img);
	return a;
}

function createFooter() {
	const footer = document.createElement('footer');
	footer.appendChild(createGithubButton());
	return footer;
}

document.body.insertBefore(createHeader(), document.body.firstElementChild);
document.body.appendChild(createFooter());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsa0NBQWtDLGlCQUFpQixLQUFLLFFBQVEsK0JBQStCLGlCQUFpQixLQUFLLEdBQUcscUJBQXFCLFVBQVUsNEJBQTRCLGlCQUFpQixLQUFLLFFBQVEsMEJBQTBCLGlCQUFpQixLQUFLLEdBQUcsdUJBQXVCLGNBQWMsaUJBQWlCLEtBQUssR0FBRyxTQUFTLGdGQUFnRixVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFB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QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQ0FBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQixnREFBVSxFQUFFLGdEQUFVLEVBQUUsbURBQWE7QUFDL0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuY3NzPzMxM2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuY3NzPzdmOWMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuY3NzPzExMGIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjY29udGFjdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFjdC11cyB7XFxuXFx0bWFyZ2luOiAxMHB4IDAgMjBweDtcXG5cXHRmb250LXNpemU6IG1pbig2MHB4LCAxMnZ3KTtcXG5cXHRmb250LXdlaWdodDogODAwO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRhbmltYXRpb246IHZhcigtLXRpbWUpIG1vdmUtaW47XFxufVxcblxcbiNjb250YWN0ICNpbmZvLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YW5pbWF0aW9uOiB2YXIoLS1kZWxheSkgaGlkZGVuLCB2YXIoLS10aW1lKSBtb3ZlLWluIHZhcigtLWRlbGF5KTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyB7XFxuXFx0bWFyZ2luOiAycHggMDtcXG5cXHRwYWRkaW5nOiAxMHB4IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtYWx0KTtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbzphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0aGVpZ2h0OiA0cHg7XFxuXFx0d2lkdGg6IDk4JTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym90dG9tOiAxcHg7XFxuXFx0bGVmdDogMS41JTtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMsIHRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IDAuMjVzO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHNwYW4ge1xcblxcdG1hcmdpbi1yaWdodDogMTBweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbzpob3ZlciBzcGFuIHtcXG5cXHRjb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbzpob3ZlciB7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbzpob3ZlcjphZnRlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLmNvcHkge1xcblxcdHBhZGRpbmc6IDEwcHggMThweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tZGlzdGFudC1zaGFkb3cpO1xcblxcdGFuaW1hdGlvbjogMC4yNXMgZ3JvdywgMC41cyBncm93IHJldmVyc2UgZm9yd2FyZHMgMC41cztcXG59XFxuXFxuI2NvbnRhY3QgZm9ybSB7XFxuXFx0bWFyZ2luOiA0MHB4IDAgMTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRhbmltYXRpb246IGNhbGModmFyKC0tZGVsYXkpICogMikgaGlkZGVuLCB2YXIoLS10aW1lKSBtb3ZlLWluIGNhbGModmFyKC0tZGVsYXkpICogMik7XFxufVxcblxcbiNjb250YWN0IGZvcm0gcCB7XFxuXFx0Zm9udC1zaXplOiAyMnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4jY29udGFjdCBmb3JtIGlucHV0W3R5cGU9ZW1haWxdIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDQwMHB4O1xcblxcdG1hcmdpbjogMzVweCAwIDI1cHg7XFxuXFx0cGFkZGluZzogOHB4IDIwcHg7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1hbHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFsdCk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNjb250YWN0IGZvcm0gaW5wdXRbdHlwZT1lbWFpbF06aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuI2NvbnRhY3QgZm9ybSBpbnB1dFt0eXBlPWVtYWlsXTpmb2N1cyB7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG5cXHRib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tZGlzdGFudC1zaGFkb3cpO1xcbn1cXG5cXG4jY29udGFjdCBmb3JtIGlucHV0W3R5cGU9c3VibWl0XSB7XFxuXFx0cGFkZGluZzogMTJweCAyNHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Mik7XFxufVxcblxcbiNjb250YWN0IGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcXG5cXHRib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDE5NywgMzAsIDg1LCAwLjQpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpIHRyYW5zbGF0ZVkoLTJweCk7XFxufVxcblxcbiNjb250YWN0IGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgwLjkyNSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jb250YWN0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsMEJBQTBCO0NBQzFCLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osOEJBQThCO0FBQy9COztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLGdFQUFnRTtBQUNqRTs7QUFFQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsdUJBQXVCO0NBQ3ZCLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0JBQWtCO0NBQ2xCLCtCQUErQjtDQUMvQixvQkFBb0I7Q0FDcEIsVUFBVTtDQUNWLGlFQUFpRTtBQUNsRTs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsVUFBVTtBQUNYOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQixvQkFBb0I7Q0FDcEIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsK0JBQStCO0NBQy9CLGlDQUFpQztDQUNqQyxzREFBc0Q7QUFDdkQ7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIsbUJBQW1CO0NBQ25CLG9GQUFvRjtBQUNyRjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLHFCQUFxQjtDQUNyQixzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixzQkFBc0I7Q0FDdEIsK0JBQStCO0NBQy9CLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQiw4QkFBOEI7Q0FDOUIsMkJBQTJCO0NBQzNCLGlDQUFpQztBQUNsQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsOENBQThDO0NBQzlDLHdDQUF3QztBQUN6Qzs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjY29udGFjdCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jY29udGFjdC11cyB7XFxuXFx0bWFyZ2luOiAxMHB4IDAgMjBweDtcXG5cXHRmb250LXNpemU6IG1pbig2MHB4LCAxMnZ3KTtcXG5cXHRmb250LXdlaWdodDogODAwO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRhbmltYXRpb246IHZhcigtLXRpbWUpIG1vdmUtaW47XFxufVxcblxcbiNjb250YWN0ICNpbmZvLWNvbnRhaW5lciB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YW5pbWF0aW9uOiB2YXIoLS1kZWxheSkgaGlkZGVuLCB2YXIoLS10aW1lKSBtb3ZlLWluIHZhcigtLWRlbGF5KTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyB7XFxuXFx0bWFyZ2luOiAycHggMDtcXG5cXHRwYWRkaW5nOiAxMHB4IDA7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRvdmVyZmxvdy13cmFwOiBhbnl3aGVyZTtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtYWx0KTtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbzphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0aGVpZ2h0OiA0cHg7XFxuXFx0d2lkdGg6IDk4JTtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym90dG9tOiAxcHg7XFxuXFx0bGVmdDogMS41JTtcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMsIHRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IDAuMjVzO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHNwYW4ge1xcblxcdG1hcmdpbi1yaWdodDogMTBweDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbzpob3ZlciBzcGFuIHtcXG5cXHRjb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbzpob3ZlciB7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcXG59XFxuXFxuLmNvbnRhY3QtaW5mbzpob3ZlcjphZnRlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLmNvcHkge1xcblxcdHBhZGRpbmc6IDEwcHggMThweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0cG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxNXB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tZGlzdGFudC1zaGFkb3cpO1xcblxcdGFuaW1hdGlvbjogMC4yNXMgZ3JvdywgMC41cyBncm93IHJldmVyc2UgZm9yd2FyZHMgMC41cztcXG59XFxuXFxuI2NvbnRhY3QgZm9ybSB7XFxuXFx0bWFyZ2luOiA0MHB4IDAgMTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRhbmltYXRpb246IGNhbGModmFyKC0tZGVsYXkpICogMikgaGlkZGVuLCB2YXIoLS10aW1lKSBtb3ZlLWluIGNhbGModmFyKC0tZGVsYXkpICogMik7XFxufVxcblxcbiNjb250YWN0IGZvcm0gcCB7XFxuXFx0Zm9udC1zaXplOiAyMnB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4jY29udGFjdCBmb3JtIGlucHV0W3R5cGU9ZW1haWxdIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRtYXgtd2lkdGg6IDQwMHB4O1xcblxcdG1hcmdpbjogMzVweCAwIDI1cHg7XFxuXFx0cGFkZGluZzogOHB4IDIwcHg7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1hbHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFsdCk7XFxuXFx0Ym9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblxcbiNjb250YWN0IGZvcm0gaW5wdXRbdHlwZT1lbWFpbF06aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG59XFxuXFxuI2NvbnRhY3QgZm9ybSBpbnB1dFt0eXBlPWVtYWlsXTpmb2N1cyB7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG5cXHRib3JkZXItY29sb3I6IHZhcigtLWFjY2VudCk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tZGlzdGFudC1zaGFkb3cpO1xcbn1cXG5cXG4jY29udGFjdCBmb3JtIGlucHV0W3R5cGU9c3VibWl0XSB7XFxuXFx0cGFkZGluZzogMTJweCAyNHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Mik7XFxufVxcblxcbiNjb250YWN0IGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcXG5cXHRib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDE5NywgMzAsIDg1LCAwLjQpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpIHRyYW5zbGF0ZVkoLTJweCk7XFxufVxcblxcbiNjb250YWN0IGZvcm0gaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgwLjkyNSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNob21lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG9tZSAjY29udGFpbmVyIHtcXG5cXHRtYXJnaW46IDEwcHggMDtcXG5cXHRtYXJnaW4tbGVmdDogMTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNob21lICN0aXRsZSB7XFxuXFx0Zm9udC1zaXplOiBtaW4oNzBweCwgMTJ2dyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YW5pbWF0aW9uOiB2YXIoLS10aW1lKSBtb3ZlLWluO1xcbn1cXG5cXG4jaG9tZSAjdGl0bGUgc3BhbiB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cywgdGV4dC1zaGFkb3cgMC40cztcXG59XFxuXFxuI2hvbWUgI3RpdGxlIHNwYW46aG92ZXIge1xcblxcdHRleHQtc2hhZG93OiAwIDAgMzVweCByZ2JhKDcxLCA0MSwgMjA2LCAwLjUpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuI2hvbWUgI2Rlc2NyaXB0aW9uIHtcXG5cXHR3aWR0aDogNjAlO1xcblxcdG1hcmdpbjogMzBweCAwO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRsaW5lLWhlaWdodDogMzVweDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1hbHQpO1xcblxcdGFuaW1hdGlvbjogdmFyKC0tZGVsYXkpIGhpZGRlbiwgdmFyKC0tdGltZSkgbW92ZS1pbiB2YXIoLS1kZWxheSk7XFxufVxcblxcbiNob21lICNvcmRlciB7XFxuXFx0bWFyZ2luOiAxMHB4IDA7XFxuXFx0cGFkZGluZzogMTVweCAyNXB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Mik7XFxuXFx0YW5pbWF0aW9uOiBjYWxjKHZhcigtLWRlbGF5KSAqIDIpIGhpZGRlbiwgdmFyKC0tdGltZSkgbW92ZS1pbiBjYWxjKHZhcigtLWRlbGF5KSAqIDIpO1xcbn1cXG5cXG4jaG9tZSAjb3JkZXI6aG92ZXIge1xcblxcdGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMTk3LCAzMCwgODUsIDAuNCk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA3NSkgdHJhbnNsYXRlWSgtM3B4KTtcXG59XFxuXFxuI2hvbWUgI29yZGVyOmFjdGl2ZSB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgwLjkyNSk7XFxufVxcblxcbiNob21lIGltZyB7XFxuXFx0d2lkdGg6IDQwdnc7XFxuXFx0bWF4LXdpZHRoOiA1NTBweDtcXG5cXHRtYXJnaW46IDQwcHggMDtcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgZmlsdGVyIDAuNXM7XFxuXFx0YW5pbWF0aW9uOiBjYWxjKHZhcigtLWRlbGF5KSAqIDIuNSkgaGlkZGVuLCAxLjFzIGdyb3cgY2FsYyh2YXIoLS1kZWxheSkgKiAyLjUpO1xcbn1cXG5cXG4jaG9tZSBpbWc6aG92ZXIge1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDEycHggcmdiYSgyNTUsIDIwMCwgMCwgMC40KSk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDMwcHgpIHtcXG5cXHQjaG9tZSB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR9XFxuXFx0I2hvbWUgI2NvbnRhaW5lciB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcdCNob21lICNkZXNjcmlwdGlvbiB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcblxcdCNob21lIGltZyB7XFxuXFx0XFx0d2lkdGg6IDgwdnc7XFxuXFx0fVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsYUFBYTtDQUNiLHNCQUFzQjtDQUN0Qix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQywwQkFBMEI7Q0FDMUIsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWiw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsb0JBQW9CO0NBQ3BCLDZDQUE2QztBQUM5Qzs7QUFFQTtDQUNDLDRDQUE0QztDQUM1QyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsY0FBYztDQUNkLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsc0JBQXNCO0NBQ3RCLGdFQUFnRTtBQUNqRTs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGdDQUFnQztDQUNoQyxvRkFBb0Y7QUFDckY7O0FBRUE7Q0FDQyw4Q0FBOEM7Q0FDOUMsd0NBQXdDO0FBQ3pDOztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsV0FBVztDQUNYLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsdUNBQXVDO0NBQ3ZDLDhFQUE4RTtBQUMvRTs7QUFFQTtDQUNDLG9EQUFvRDtDQUNwRCxzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQztFQUNDLHNCQUFzQjtDQUN2QjtDQUNBO0VBQ0MsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7Q0FDbkI7Q0FDQTtFQUNDLFdBQVc7Q0FDWjtDQUNBO0VBQ0MsV0FBVztDQUNaO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2hvbWUge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNob21lICNjb250YWluZXIge1xcblxcdG1hcmdpbjogMTBweCAwO1xcblxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuI2hvbWUgI3RpdGxlIHtcXG5cXHRmb250LXNpemU6IG1pbig3MHB4LCAxMnZ3KTtcXG5cXHRmb250LXdlaWdodDogODAwO1xcblxcdGNvbG9yOiB3aGl0ZTtcXG5cXHRhbmltYXRpb246IHZhcigtLXRpbWUpIG1vdmUtaW47XFxufVxcblxcbiNob21lICN0aXRsZSBzcGFuIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuXFx0Y29sb3I6IHZhcigtLWFjY2VudCk7XFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCB0ZXh0LXNoYWRvdyAwLjRzO1xcbn1cXG5cXG4jaG9tZSAjdGl0bGUgc3Bhbjpob3ZlciB7XFxuXFx0dGV4dC1zaGFkb3c6IDAgMCAzNXB4IHJnYmEoNzEsIDQxLCAyMDYsIDAuNSk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4jaG9tZSAjZGVzY3JpcHRpb24ge1xcblxcdHdpZHRoOiA2MCU7XFxuXFx0bWFyZ2luOiAzMHB4IDA7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGxpbmUtaGVpZ2h0OiAzNXB4O1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWFsdCk7XFxuXFx0YW5pbWF0aW9uOiB2YXIoLS1kZWxheSkgaGlkZGVuLCB2YXIoLS10aW1lKSBtb3ZlLWluIHZhcigtLWRlbGF5KTtcXG59XFxuXFxuI2hvbWUgI29yZGVyIHtcXG5cXHRtYXJnaW46IDEwcHggMDtcXG5cXHRwYWRkaW5nOiAxNXB4IDI1cHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZvbnQtc2l6ZTogMjRweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQyKTtcXG5cXHRhbmltYXRpb246IGNhbGModmFyKC0tZGVsYXkpICogMikgaGlkZGVuLCB2YXIoLS10aW1lKSBtb3ZlLWluIGNhbGModmFyKC0tZGVsYXkpICogMik7XFxufVxcblxcbiNob21lICNvcmRlcjpob3ZlciB7XFxuXFx0Ym94LXNoYWRvdzogMCAxMHB4IDI1cHggcmdiYSgxOTcsIDMwLCA4NSwgMC40KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KSB0cmFuc2xhdGVZKC0zcHgpO1xcbn1cXG5cXG4jaG9tZSAjb3JkZXI6YWN0aXZlIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTI1KTtcXG59XFxuXFxuI2hvbWUgaW1nIHtcXG5cXHR3aWR0aDogNDB2dztcXG5cXHRtYXgtd2lkdGg6IDU1MHB4O1xcblxcdG1hcmdpbjogNDBweCAwO1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBmaWx0ZXIgMC41cztcXG5cXHRhbmltYXRpb246IGNhbGModmFyKC0tZGVsYXkpICogMi41KSBoaWRkZW4sIDEuMXMgZ3JvdyBjYWxjKHZhcigtLWRlbGF5KSAqIDIuNSk7XFxufVxcblxcbiNob21lIGltZzpob3ZlciB7XFxuXFx0ZmlsdGVyOiBkcm9wLXNoYWRvdygwIDAgMTJweCByZ2JhKDI1NSwgMjAwLCAwLCAwLjQpKTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEwMzBweCkge1xcblxcdCNob21lIHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdH1cXG5cXHQjaG9tZSAjY29udGFpbmVyIHtcXG5cXHRcXHRtYXJnaW4tbGVmdDogMDtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHR9XFxuXFx0I2hvbWUgI2Rlc2NyaXB0aW9uIHtcXG5cXHRcXHR3aWR0aDogMTAwJTtcXG5cXHR9XFxuXFx0I2hvbWUgaW1nIHtcXG5cXHRcXHR3aWR0aDogODB2dztcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNtZW51IHtcXG5cXHRkaXNwbGF5OiBncmlkO1xcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG5cXHRncmlkLWdhcDogMTBweDtcXG59XFxuXFxuI21lbnUgLmZvb2QuYm94IHtcXG5cXHRtYXJnaW46IDEycHg7XFxuXFx0cGFkZGluZzogMjVweCAzMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctYWx0KTtcXG59XFxuXFxuI21lbnUgLmZvb2QuYm94OmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tZGlzdGFudC1zaGFkb3cpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSkgdHJhbnNsYXRlWSgtNHB4KTtcXG59XFxuXFxuI21lbnUgLmZvb2QuYm94IC5uYW1lIHtcXG5cXHRmb250LXNpemU6IDMwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG5cXHRjb2xvcjogdmFyKC0tYWNjZW50Mik7XFxufVxcblxcbiNtZW51IC5mb29kLmJveCAuZGVzY3JpcHRpb24ge1xcblxcdG1hcmdpbjogMTVweCAwO1xcblxcdGZvbnQtc2l6ZTogMTZweDtcXG5cXHRsaW5lLWhlaWdodDogMjJweDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1hbHQpO1xcbn1cXG5cXG4jbWVudSAuZm9vZC5ib3ggLnByaWNlLW9yZGVyIHtcXG5cXHRtYXgtd2lkdGg6IDE2NHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbiNtZW51IC5mb29kLmJveCAucHJpY2Uge1xcblxcdG1hcmdpbjogNXB4IDA7XFxuXFx0Zm9udC1zaXplOiAyOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG4jbWVudSAuZm9vZC5ib3ggLm9yZGVyIHtcXG5cXHRtYXJnaW46IDVweCAxNXB4O1xcblxcdHBhZGRpbmc6IDEwcHggMjJweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbiNtZW51IC5mb29kLmJveCAub3JkZXI6aG92ZXIge1xcblxcdGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IHJnYmEoNzEsIDQxLCAyMDYsIDAuNCk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA3NSk7XFxufVxcblxcbiNtZW51IC5mb29kLmJveCAub3JkZXI6YWN0aXZlIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDAuOTI1KTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21lbnUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLDREQUE0RDtDQUM1RCxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsOEJBQThCO0NBQzlCLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixpQ0FBaUM7Q0FDakMsdUNBQXVDO0FBQ3hDOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixzQkFBc0I7QUFDdkI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsK0JBQStCO0FBQ2hDOztBQUVBO0NBQ0MsOENBQThDO0NBQzlDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjbWVudSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuXFx0Z3JpZC1nYXA6IDEwcHg7XFxufVxcblxcbiNtZW51IC5mb29kLmJveCB7XFxuXFx0bWFyZ2luOiAxMnB4O1xcblxcdHBhZGRpbmc6IDI1cHggMzBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFsdCk7XFxufVxcblxcbiNtZW51IC5mb29kLmJveDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLWRpc3RhbnQtc2hhZG93KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHRyYW5zbGF0ZVkoLTRweCk7XFxufVxcblxcbiNtZW51IC5mb29kLmJveCAubmFtZSB7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0Y29sb3I6IHZhcigtLWFjY2VudDIpO1xcbn1cXG5cXG4jbWVudSAuZm9vZC5ib3ggLmRlc2NyaXB0aW9uIHtcXG5cXHRtYXJnaW46IDE1cHggMDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0bGluZS1oZWlnaHQ6IDIycHg7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtYWx0KTtcXG59XFxuXFxuI21lbnUgLmZvb2QuYm94IC5wcmljZS1vcmRlciB7XFxuXFx0bWF4LXdpZHRoOiAxNjRweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jbWVudSAuZm9vZC5ib3ggLnByaWNlIHtcXG5cXHRtYXJnaW46IDVweCAwO1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuI21lbnUgLmZvb2QuYm94IC5vcmRlciB7XFxuXFx0bWFyZ2luOiA1cHggMTVweDtcXG5cXHRwYWRkaW5nOiAxMHB4IDIycHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4jbWVudSAuZm9vZC5ib3ggLm9yZGVyOmhvdmVyIHtcXG5cXHRib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDcxLCA0MSwgMjA2LCAwLjQpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpO1xcbn1cXG5cXG4jbWVudSAuZm9vZC5ib3ggLm9yZGVyOmFjdGl2ZSB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgwLjkyNSk7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBTZW47XFxufVxcblxcbjpyb290IHtcXG5cXHQtLWFjY2VudDogcmdiKDcxLCA0MSwgMjA2KTtcXG5cXHQtLWFjY2VudDI6IHJnYigxOTcsIDMwLCA4NSk7XFxuXFx0LS1iZzogcmdiKDI1LCAyNiwgMjkpO1xcblxcdC0tYmctYWx0OiByZ2IoMzAsIDMxLCAzNSk7XFxuXFx0LS1ob3ZlcjogcmdiKDM1LCAzNiwgNDApO1xcblxcdC0tdGV4dDogcmdiKDI0MCwgMjQwLCAyNDApO1xcblxcdC0tdGV4dC1hbHQ6IHJnYigxNzAsIDE3MCwgMTcwKTtcXG5cXHQtLXJhZGl1czogMjVweDtcXG5cXHQtLWxpZ2h0ZXN0OiAwLjA3NTtcXG5cXHQtLWxpZ2h0OiAwLjE7XFxuXFx0LS1kYXJrOiAwLjEyNTtcXG5cXHQtLWRhcmtlc3Q6IDAuMTc1O1xcblxcdC0tY2xvc2Utc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCB2YXIoLS1saWdodGVzdCkpLCAwIDhweCAxNHB4IHJnYmEoMCwgMCwgMCwgdmFyKC0tbGlnaHQpKTtcXG5cXHQtLWRpc3RhbnQtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCB2YXIoLS1kYXJrKSksIDAgMTJweCAyMHB4IHJnYmEoMCwgMCwgMCwgdmFyKC0tZGFya2VzdCkpO1xcblxcdC0tdHJhbnNpdGlvbjogY29sb3IgMC4yNXMsIGJhY2tncm91bmQtY29sb3IgMC4yNXMsIGJvcmRlci1jb2xvciAwLjI1cywgYm94LXNoYWRvdyAwLjI1cywgdHJhbnNmb3JtIDAuMnMsIG9wYWNpdHkgMC4yNXMsIGZpbHRlciAwLjI1cztcXG5cXHQtLXRpbWU6IDAuODVzO1xcblxcdC0tZGVsYXk6IDAuMnM7XFxufVxcblxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5odG1sIHtcXG5cXHQtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuXFx0c2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXG59XFxuXFxuaGVhZGVyIHtcXG5cXHRtaW4taGVpZ2h0OiAxMjBweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib3gge1xcblxcdGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cyk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tY2xvc2Utc2hhZG93KTtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG59XFxuXFxuI2xvZ28ge1xcblxcdGhlaWdodDogODBweDtcXG5cXHRtYXJnaW46IDVweCAyMHB4O1xcblxcdHBhZGRpbmc6IDAgMjBweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoMC42KTtcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycywgZmlsdGVyIDAuMjVzO1xcblxcdGFuaW1hdGlvbjogMS41cyBncm93O1xcbn1cXG5cXG4jbG9nbzpob3ZlciB7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbiN0YWJzIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRhYiB7XFxuXFx0bWFyZ2luOiA1cHggNDBweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtYWx0KTtcXG5cXHR0cmFuc2l0aW9uOiB2YXIoLS10cmFuc2l0aW9uKTtcXG59XFxuXFxuLnRhYjpudGgtY2hpbGQoMSkge1xcblxcdGFuaW1hdGlvbjogMS4ycyBmYWRlLWluO1xcbn1cXG4udGFiOm50aC1jaGlsZCgyKSB7XFxuXFx0YW5pbWF0aW9uOiB2YXIoLS1kZWxheSkgaGlkZGVuLCAwLjZzIG1vdmUtaW4gdmFyKC0tZGVsYXkpO1xcbn1cXG4udGFiOm50aC1jaGlsZCgzKSB7XFxuXFx0YW5pbWF0aW9uOiBjYWxjKHZhcigtLWRlbGF5KSAqIDIpIGhpZGRlbiwgMC42cyBtb3ZlLWluIGNhbGModmFyKC0tZGVsYXkpICogMik7XFxufVxcblxcbi50YWI6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGhlaWdodDogNHB4O1xcblxcdHdpZHRoOiA0MHB4O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXHRib3R0b206IDFweDtcXG5cXHRsZWZ0OiBjYWxjKDUwJSAtIDIwcHgpO1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdGJvcmRlci1yYWRpdXM6IDJweDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQyKTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXG5cXHRvcGFjaXR5OiAwO1xcblxcdHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMsIHRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IDAuMjVzO1xcbn1cXG5cXG4udGFiLnNlbGVjdGVkLFxcbi50YWI6aG92ZXIge1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XFxufVxcblxcbi50YWI6aG92ZXI6YWZ0ZXIge1xcblxcdHRyYW5zZm9ybTogc2NhbGVYKDAuOCk7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuLnRhYi5zZWxlY3RlZDphZnRlcntcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcblxcdHRyYW5zZm9ybTogc2NhbGVYKDEuMik7XFxuXFx0b3BhY2l0eTogMTtcXG59XFxuXFxuI2xvZ286YWN0aXZlLFxcbi50YWI6YWN0aXZlIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDAuODUpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRlbnQgPiAqIHtcXG5cXHR3aWR0aDogMTIwMHB4O1xcblxcdG1heC13aWR0aDogODB2dztcXG59XFxuXFxuZm9vdGVyIHtcXG5cXHRtaW4taGVpZ2h0OiAxMjBweDtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2dpdGh1YiB7XFxuXFx0cGFkZGluZzogMTBweCAyMHB4O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcblxcdGFuaW1hdGlvbjogY2FsYyh2YXIoLS1kZWxheSkgKiAzKSBoaWRkZW4sIHZhcigtLXRpbWUpIG1vdmUtaW4gY2FsYyh2YXIoLS1kZWxheSkgKiAzKTtcXG59XFxuXFxuI2dpdGh1YiBpbWcge1xcblxcdGhlaWdodDogMjVweDtcXG5cXHRtYXJnaW4tbGVmdDogMTBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0dG9wOiAtMXB4O1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuXFx0ZmlsdGVyOiBpbnZlcnQoLjk1KTtcXG59XFxuXFxuI2dpdGh1Yjpob3ZlciB7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tZGlzdGFudC1zaGFkb3cpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlLWluIHtcXG5cXHRmcm9tIHtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG5cXHR0byB7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgbW92ZS1pbiB7XFxuXFx0ZnJvbSB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDcwcHgpO1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcblxcdHRvIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgZ3JvdyB7XFxuXFx0ZnJvbSB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcblxcdHRvIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGhpZGRlbiB7XFxuXFx0ZnJvbSwgdG8ge1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBp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QixVQUFVO0NBQ1g7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtDQUNYO0FBQ0RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdG91dGxpbmU6IG5vbmU7XFxuXFx0Zm9udC1mYW1pbHk6IFNlbjtcXG59XFxuXFxuOnJvb3Qge1xcblxcdC0tYWNjZW50OiByZ2IoNzEsIDQxLCAyMDYpO1xcblxcdC0tYWNjZW50MjogcmdiKDE5NywgMzAsIDg1KTtcXG5cXHQtLWJnOiByZ2IoMjUsIDI2LCAyOSk7XFxuXFx0LS1iZy1hbHQ6IHJnYigzMCwgMzEsIDM1KTtcXG5cXHQtLWhvdmVyOiByZ2IoMzUsIDM2LCA0MCk7XFxuXFx0LS10ZXh0OiByZ2IoMjQwLCAyNDAsIDI0MCk7XFxuXFx0LS10ZXh0LWFsdDogcmdiKDE3MCwgMTcwLCAxNzApO1xcblxcdC0tcmFkaXVzOiAyNXB4O1xcblxcdC0tbGlnaHRlc3Q6IDAuMDc1O1xcblxcdC0tbGlnaHQ6IDAuMTtcXG5cXHQtLWRhcms6IDAuMTI1O1xcblxcdC0tZGFya2VzdDogMC4xNzU7XFxuXFx0LS1jbG9zZS1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIHZhcigtLWxpZ2h0ZXN0KSksIDAgOHB4IDE0cHggcmdiYSgwLCAwLCAwLCB2YXIoLS1saWdodCkpO1xcblxcdC0tZGlzdGFudC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIHZhcigtLWRhcmspKSwgMCAxMnB4IDIwcHggcmdiYSgwLCAwLCAwLCB2YXIoLS1kYXJrZXN0KSk7XFxuXFx0LS10cmFuc2l0aW9uOiBjb2xvciAwLjI1cywgYmFja2dyb3VuZC1jb2xvciAwLjI1cywgYm9yZGVyLWNvbG9yIDAuMjVzLCBib3gtc2hhZG93IDAuMjVzLCB0cmFuc2Zvcm0gMC4ycywgb3BhY2l0eSAwLjI1cywgZmlsdGVyIDAuMjVzO1xcblxcdC0tdGltZTogMC44NXM7XFxuXFx0LS1kZWxheTogMC4ycztcXG59XFxuXFxuaHRtbDo6LXdlYmtpdC1zY3JvbGxiYXIge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmh0bWwge1xcblxcdC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXG5cXHRzY3JvbGxiYXItd2lkdGg6IG5vbmU7XFxufVxcblxcbmJvZHkge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdG1pbi1oZWlnaHQ6IDEyMHB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJveCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1jbG9zZS1zaGFkb3cpO1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcbn1cXG5cXG4jbG9nbyB7XFxuXFx0aGVpZ2h0OiA4MHB4O1xcblxcdG1hcmdpbjogNXB4IDIwcHg7XFxuXFx0cGFkZGluZzogMCAyMHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmaWx0ZXI6IGludmVydCgwLjYpO1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBmaWx0ZXIgMC4yNXM7XFxuXFx0YW5pbWF0aW9uOiAxLjVzIGdyb3c7XFxufVxcblxcbiNsb2dvOmhvdmVyIHtcXG5cXHRmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuI3RhYnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFiIHtcXG5cXHRtYXJnaW46IDVweCA0MHB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1hbHQpO1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcbn1cXG5cXG4udGFiOm50aC1jaGlsZCgxKSB7XFxuXFx0YW5pbWF0aW9uOiAxLjJzIGZhZGUtaW47XFxufVxcbi50YWI6bnRoLWNoaWxkKDIpIHtcXG5cXHRhbmltYXRpb246IHZhcigtLWRlbGF5KSBoaWRkZW4sIDAuNnMgbW92ZS1pbiB2YXIoLS1kZWxheSk7XFxufVxcbi50YWI6bnRoLWNoaWxkKDMpIHtcXG5cXHRhbmltYXRpb246IGNhbGModmFyKC0tZGVsYXkpICogMikgaGlkZGVuLCAwLjZzIG1vdmUtaW4gY2FsYyh2YXIoLS1kZWxheSkgKiAyKTtcXG59XFxuXFxuLnRhYjphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0aGVpZ2h0OiA0cHg7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvdHRvbTogMXB4O1xcblxcdGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDIpO1xcblxcdHRyYW5zZm9ybTogc2NhbGVYKDApO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cywgdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4yNXM7XFxufVxcblxcbi50YWIuc2VsZWN0ZWQsXFxuLnRhYjpob3ZlciB7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcXG59XFxuXFxuLnRhYjpob3ZlcjphZnRlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZVgoMC44KTtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFiLnNlbGVjdGVkOmFmdGVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZVgoMS4yKTtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4jbG9nbzphY3RpdmUsXFxuLnRhYjphY3RpdmUge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCA+ICoge1xcblxcdHdpZHRoOiAxMjAwcHg7XFxuXFx0bWF4LXdpZHRoOiA4MHZ3O1xcbn1cXG5cXG5mb290ZXIge1xcblxcdG1pbi1oZWlnaHQ6IDEyMHB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jZ2l0aHViIHtcXG5cXHRwYWRkaW5nOiAxMHB4IDIwcHg7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxuXFx0YW5pbWF0aW9uOiBjYWxjKHZhcigtLWRlbGF5KSAqIDMpIGhpZGRlbiwgdmFyKC0tdGltZSkgbW92ZS1pbiBjYWxjKHZhcigtLWRlbGF5KSAqIDMpO1xcbn1cXG5cXG4jZ2l0aHViIGltZyB7XFxuXFx0aGVpZ2h0OiAyNXB4O1xcblxcdG1hcmdpbi1sZWZ0OiAxMHB4O1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR0b3A6IC0xcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG5cXHRmaWx0ZXI6IGludmVydCguOTUpO1xcbn1cXG5cXG4jZ2l0aHViOmhvdmVyIHtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1kaXN0YW50LXNoYWRvdyk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcblxcdGZyb20ge1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcblxcdHRvIHtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlLWluIHtcXG5cXHRmcm9tIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzBweCk7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxuXFx0dG8ge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBncm93IHtcXG5cXHRmcm9tIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxuXFx0dG8ge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgaGlkZGVuIHtcXG5cXHRmcm9tLCB0byB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWN0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29udGFjdC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vY29udGFjdC5jc3MnO1xuXG5mdW5jdGlvbiBjb3B5VG9DbGlwYm9hcmQoZSkge1xuXHRjb25zdCBjb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRjb25zdCBlbCA9IGUudGFyZ2V0O1xuXHRuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChlbC5sYXN0Q2hpbGQudGV4dENvbnRlbnQpO1xuXHRlbC5zdHlsZS5maWx0ZXIgPSAnYmx1cigyLjVweCknO1xuXHRjb3B5LmNsYXNzTGlzdC5hZGQoJ2NvcHknLCAnYm94Jyk7XG5cdGNvcHkudGV4dENvbnRlbnQgPSAnQ29waWVkISc7XG5cdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29weSk7XG5cdGNvcHkuc3R5bGUudG9wID0gYCR7ZWwub2Zmc2V0VG9wICsgZWwub2Zmc2V0SGVpZ2h0IC8gMiAtIGNvcHkub2Zmc2V0SGVpZ2h0IC8gMn1weGA7XG5cdGNvcHkuc3R5bGUubGVmdCA9IGAke2VsLm9mZnNldExlZnQgKyBlbC5vZmZzZXRXaWR0aCAvIDIgLSBjb3B5Lm9mZnNldFdpZHRoIC8gMn1weGA7XG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGVsLnN0eWxlLmZpbHRlciA9ICcnO1xuXHRcdGNvcHkucmVtb3ZlKCk7XG5cdH0sIDEwMDApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0SW5mbyh0ZXh0LCBpY29uKSB7XG5cdGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGNvbnN0IGluZm9JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRpbmZvSWNvbi50ZXh0Q29udGVudCA9IGljb247XG5cdGluZm9JY29uLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLWljb25zLW91dGxpbmVkJyk7XG5cdGluZm8udGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRpbmZvLnRpdGxlID0gJ0NsaWNrIHRvIGNvcHknO1xuXHRpbmZvLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtaW5mbycpO1xuXHRpbmZvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY29weVRvQ2xpcGJvYXJkKTtcblx0aW5mby5pbnNlcnRCZWZvcmUoaW5mb0ljb24sIGluZm8uZmlyc3RDaGlsZCk7XG5cdHJldHVybiBpbmZvO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xuXHRjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXHRjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0Y29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0cGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0xlYXZlIHVzIHlvdXIgZW1haWwgdG8gcmVjZWl2ZSBleGNsdXNpdmUgcHJvbW90aW9ucyBhbmQgZGlzY291bnQgY291cG9ucyEnO1xuXHRpbnB1dC50eXBlID0gJ2VtYWlsJztcblx0aW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgeW91ciBlbWFpbCBhZGRyZXNzJztcblx0aW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXHRzdWJtaXQudmFsdWUgPSAnU3Vic2NyaWJlJztcblx0c3VibWl0LnR5cGUgPSAnc3VibWl0Jztcblx0W2lucHV0LCBzdWJtaXRdLmZvckVhY2goZWwgPT4gZWwuY2xhc3NMaXN0LmFkZCgnYm94JykpO1xuXHRbcGFyYWdyYXBoLCBpbnB1dCwgc3VibWl0XS5mb3JFYWNoKGVsID0+IGZvcm0uYXBwZW5kQ2hpbGQoZWwpKTtcblx0cmV0dXJuIGZvcm07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKSB7XG5cdGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgY29udGFjdFVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgcGhvbmUgPSBjcmVhdGVDb250YWN0SW5mbygnKzEtNTU1LTQ0NDQtMzMzJywgJ3Bob25lJyk7XG5cdGNvbnN0IGVtYWlsID0gY3JlYXRlQ29udGFjdEluZm8oJ2Zha2VtYWlsQGJ1cmdlcnN0b3JlLmNvbScsICdlbWFpbCcpO1xuXHRjb25zdCBsb2NhdGlvbiA9IGNyZWF0ZUNvbnRhY3RJbmZvKCcxNjAgQnJvYWR3YXksIE5ldyBZb3JrLCBOWSAxMDAzOCwgVW5pdGVkIFN0YXRlcycsICdwbGFjZScpO1xuXHRjb25zdCBmb3JtID0gY3JlYXRlRm9ybSgpO1xuXHRjb250YWN0LmlkID0gJ2NvbnRhY3QnO1xuXHRjb250YWN0LmRhdGFzZXQuaWQgPSAyO1xuXHRjb250YWN0VXMuaWQgPSAnY29udGFjdC11cyc7XG5cdGNvbnRhY3RVcy50ZXh0Q29udGVudCA9ICdDb250YWN0IHVzISc7XG5cdGluZm9Db250YWluZXIuaWQgPSAnaW5mby1jb250YWluZXInO1xuXHRbcGhvbmUsIGVtYWlsLCBsb2NhdGlvbl0uZm9yRWFjaChlbCA9PiBpbmZvQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsKSk7XG5cdFtjb250YWN0VXMsIGluZm9Db250YWluZXIsIGZvcm1dLmZvckVhY2goZWwgPT4gY29udGFjdC5hcHBlbmRDaGlsZChlbCkpO1xuXHRyZXR1cm4gY29udGFjdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDtcbiIsImltcG9ydCAnLi9ob21lLmNzcyc7XG5pbXBvcnQgQnVyZ2VyIGZyb20gJy4vYnVyZ2VyLnBuZyc7XG5cblxuZnVuY3Rpb24gY3JlYXRlSG9tZSgpIHtcblx0Y29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGNvbnN0IHRpdGxlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0Y29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXHRjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0Y29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cdGhvbWUuaWQgPSAnaG9tZSc7XG5cdGhvbWUuZGF0YXNldC5pZCA9IDA7XG5cdGNvbnRhaW5lci5pZCA9ICdjb250YWluZXInO1xuXHR0aXRsZS5pZCA9ICd0aXRsZSc7XG5cdHRpdGxlLnRleHRDb250ZW50ID0gJ09yZGVyIEp1aWN5ICYgU2NydW1teSBGb29kICc7XG5cdHRpdGxlU3Bhbi50ZXh0Q29udGVudCA9ICdhbnl0aW1lISc7XG5cdHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlU3Bhbik7XG5cdHBhcmFncmFwaC5pZCA9ICdkZXNjcmlwdGlvbic7XG5cdHBhcmFncmFwaC50ZXh0Q29udGVudCA9ICdKdXN0IGNvbmZpcm0geW91ciBvcmRlciBhbmQgZW5qb3kgb3VyIGRlbGljaW91cyBmYXN0ZXN0IGRlbGl2ZXJ5Lidcblx0YnV0dG9uLmlkID0gJ29yZGVyJztcblx0YnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuXHRidXR0b24udGV4dENvbnRlbnQgPSAnT3JkZXIgTm93Jztcblx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFicy5jaGlsZE5vZGVzWzFdLmNsaWNrKCkpO1xuXHRbdGl0bGUsIHBhcmFncmFwaCwgYnV0dG9uXS5mb3JFYWNoKGVsID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbCkpO1xuXHRpbWcuc3JjID0gQnVyZ2VyO1xuXHRob21lLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cdGhvbWUuYXBwZW5kQ2hpbGQoaW1nKTtcblx0cmV0dXJuIGhvbWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhvbWU7XG4iLCJpbXBvcnQgJy4vbWVudS5jc3MnO1xuXG5mdW5jdGlvbiBjcmVhdGVGb29kQm94KGZvb2QsIGkpIHtcblx0Y29uc3QgZm9vZEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBmb29kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgZm9vZFByaWNlT3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgZm9vZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IGZvb2RPcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRmb29kQm94LmNsYXNzTGlzdC5hZGQoJ2Zvb2QnLCAnYm94Jyk7XG5cdGZvb2RCb3guc3R5bGUuYW5pbWF0aW9uID0gYCR7aSAqIDAuMX1zIGhpZGRlbiwgMC44NXMgbW92ZS1pbiAke2kgKiAwLjF9c2Bcblx0Zm9vZE5hbWUudGV4dENvbnRlbnQgPSBmb29kLm5hbWU7XG5cdGZvb2ROYW1lLmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcblx0Zm9vZERlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZm9vZC5kZXNjcmlwdGlvbjtcblx0Zm9vZERlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG5cdGZvb2RQcmljZU9yZGVyLmNsYXNzTGlzdC5hZGQoJ3ByaWNlLW9yZGVyJyk7XG5cdGZvb2RQcmljZS50ZXh0Q29udGVudCA9IGAkJHtmb29kLnByaWNlfWA7XG5cdGZvb2RQcmljZS5jbGFzc0xpc3QuYWRkKCdwcmljZScpO1xuXHRmb29kT3JkZXIudGV4dENvbnRlbnQgPSAnT3JkZXInO1xuXHRmb29kT3JkZXIuY2xhc3NMaXN0LmFkZCgnb3JkZXInLCAnYm94Jyk7XG5cdGZvb2RPcmRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRhYnMubGFzdEVsZW1lbnRDaGlsZC5jbGljaygpKTtcblx0W2Zvb2RQcmljZSwgZm9vZE9yZGVyXS5mb3JFYWNoKGVsID0+IGZvb2RQcmljZU9yZGVyLmFwcGVuZENoaWxkKGVsKSk7XG5cdFtmb29kTmFtZSwgZm9vZERlc2NyaXB0aW9uLCBmb29kUHJpY2VPcmRlcl0uZm9yRWFjaChlbCA9PiBmb29kQm94LmFwcGVuZENoaWxkKGVsKSk7XG5cdHJldHVybiBmb29kQm94O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZW51KCkge1xuXHRjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IGZvb2RNZW51ID0gW1xuXHRcdHsgbmFtZTogJ0NsYXNzaWMnLCBkZXNjcmlwdGlvbjogJ0xldHR1Y2UsIHRvbWF0bywgcmVkIG9uaW9uLCBwaWNrbGVzLCBtdXN0YXJkLCBrZXRjaHVwLCBtYXlvJywgcHJpY2U6IDIgfSxcblx0XHR7IG5hbWU6ICdEb3VibGUgQ2xhc3NpYycsIGRlc2NyaXB0aW9uOiAnVHdvIGZsYW1lLWdyaWxsZWQgYmVlZiBwYXR0aWVzLCBsZXR0dWNlLCB0b21hdG8sIHJlZCBvbmlvbiwgcGlja2xlcywgbXVzdGFyZCwga2V0Y2h1cCwgbWF5bycsIHByaWNlOiA0IH0sXG5cdFx0eyBuYW1lOiAnQmxhY2sgSmFjaycsIGRlc2NyaXB0aW9uOiAnQmxhY2tlbmVkIGJlZWYsIHBlcHBlciBqYWNrIGNoZWVzZSwgbGV0dHVjZSwgdG9tYXRvLCBjcmVvbGUgbWF5bycsIHByaWNlOiAzIH0sXG5cdFx0eyBuYW1lOiAnQmFjb24gQ2hlZGRhcicsIGRlc2NyaXB0aW9uOiAnQ2hlZGRhciBjaGVlc2UsIGJhY29uLCBsZXR0dWNlLCB0b21hdG8sIHJlZCBvbmlvbiwgcGlja2xlcywgbXVzdGFyZCwga2V0Y2h1cCwgbWF5bycsIHByaWNlOiA1IH0sXG5cdFx0eyBuYW1lOiAnU291dGh3ZXN0IEJCUScsIGRlc2NyaXB0aW9uOiAnQ2hlZGRhciBjaGVlc2UsIGJhY29uLCBvbmlvbiBzdHJhd3MsIEJCUSBzYXVjZSwgY2hpcG90bGUgbWF5bywgbGV0dHVjZSwgdG9tYXRvLCBwaWNrbGVzJywgcHJpY2U6IDggfSxcblx0XHR7IG5hbWU6ICdCbGFjayAmIEJsZXUnLCBkZXNjcmlwdGlvbjogJ0JsYWNrZW5lZCBiZWVmLCBjcnVtYmxlZCBibHVlIGNoZWVzZSwgYmFjb24sIGxldHR1Y2UsIHRvbWF0bywgcmVkIG9uaW9uLCBtYXlvJywgcHJpY2U6IDYgfSxcblx0XVxuXHRjb25zdCBmb29kQm94ZXMgPSBmb29kTWVudS5tYXAoKGZvb2QsIGkpID0+IGNyZWF0ZUZvb2RCb3goZm9vZCwgaSkpO1xuXHRtZW51LmlkID0gJ21lbnUnO1xuXHRtZW51LmRhdGFzZXQuaWQgPSAxO1xuXHRmb29kQm94ZXMuZm9yRWFjaChib3ggPT4gbWVudS5hcHBlbmRDaGlsZChib3gpKTtcblx0cmV0dXJuIG1lbnU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjcmVhdGVIb21lIGZyb20gJy4vaG9tZS5qcyc7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tICcuL21lbnUuanMnO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvLnBuZyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoKSB7XG5cdGNvbnN0IHRhYnMgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XG5cdGNvbnN0IGxpc3RJdGVtcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0bGkudGV4dENvbnRlbnQgPSB0YWJzW2ldO1xuXHRcdGxpLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXHRcdGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlQ29udGVudChpKSk7XG5cdFx0bGlzdEl0ZW1zLnB1c2gobGkpO1xuXHR9XG5cdHJldHVybiBsaXN0SXRlbXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdGltZy5pZCA9ICdsb2dvJztcblx0aW1nLnNyYyA9IExvZ287XG5cdHVsLmlkID0gJ3RhYnMnO1xuXHRjcmVhdGVUYWJzKCkuZm9yRWFjaCh0YWIgPT4gdWwuYXBwZW5kQ2hpbGQodGFiKSk7XG5cdHVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0VGFiKTtcblx0dWwuZmlyc3RFbGVtZW50Q2hpbGQuY2xpY2soKTtcblx0aW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdWwuZmlyc3RFbGVtZW50Q2hpbGQuY2xpY2soKSk7XG5cdGhlYWRlci5hcHBlbmRDaGlsZChpbWcpO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQodWwpO1xuXHRyZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RUYWIoZSkge1xuXHRpZiAoZS50YXJnZXQgIT09IHRoaXMpIHtcblx0XHRmb3IgKGNvbnN0IHRhYiBvZiB0aGlzLmNoaWxkTm9kZXMpIHtcblx0XHRcdGlmICh0YWIgPT09IGUudGFyZ2V0KSB7XG5cdFx0XHRcdHRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGFiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoaSkge1xuXHRjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblx0Y29uc3QgY3JlYXRlRnVuY3Rpb25zID0gW2NyZWF0ZUhvbWUsIGNyZWF0ZU1lbnUsIGNyZWF0ZUNvbnRhY3RdO1xuXHRpZiAoIXRhYkNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcblx0XHR0YWJDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZ1bmN0aW9uc1tpXSgpKTtcblx0fSBlbHNlIGlmICh0YWJDb250ZW50LmZpcnN0RWxlbWVudENoaWxkLmRhdGFzZXQuaWQgIT0gaSkge1xuXHRcdHRhYkNvbnRlbnQucmVwbGFjZUNoaWxkKGNyZWF0ZUZ1bmN0aW9uc1tpXSgpLCB0YWJDb250ZW50LmZpcnN0RWxlbWVudENoaWxkKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVHaXRodWJCdXR0b24oKSB7XG5cdGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRhLmlkID0gJ2dpdGh1Yic7XG5cdGEuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vbmVrdXN1Jztcblx0YS50YXJnZXQgPSAnX2JsYW5rJztcblx0YS50aXRsZSA9ICdDaGVjayBteSBHaXRIdWIhJztcblx0YS50ZXh0Q29udGVudCA9ICduZWt1c3UnO1xuXHRhLmNsYXNzTGlzdC5hZGQoJ2JveCcpO1xuXHRpbWcuc3JjID0gJ2h0dHBzOi8vcG5naW1nLmNvbS91cGxvYWRzL2dpdGh1Yi9naXRodWJfUE5HODAucG5nJztcblx0aW1nLmFsdCA9ICdHaXRIdWInO1xuXHRhLmFwcGVuZENoaWxkKGltZyk7XG5cdHJldHVybiBhO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XG5cdGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuXHRmb290ZXIuYXBwZW5kQ2hpbGQoY3JlYXRlR2l0aHViQnV0dG9uKCkpO1xuXHRyZXR1cm4gZm9vdGVyO1xufVxuXG5kb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjcmVhdGVIZWFkZXIoKSwgZG9jdW1lbnQuYm9keS5maXJzdEVsZW1lbnRDaGlsZCk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==