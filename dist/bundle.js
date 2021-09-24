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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\toutline: none;\n\tfont-family: Sen;\n}\n\n:root {\n\t--accent: rgb(71, 41, 206);\n\t--accent2: rgb(197, 30, 85);\n\t--bg: rgb(25, 26, 29);\n\t--bg-alt: rgb(30, 31, 35);\n\t--hover: rgb(35, 36, 40);\n\t--text: rgb(240, 240, 240);\n\t--text-alt: rgb(170, 170, 170);\n\t--radius: 25px;\n\t--lightest: 0.075;\n\t--light: 0.1;\n\t--dark: 0.125;\n\t--darkest: 0.175;\n\t--close-shadow: 0 2px 6px rgba(0, 0, 0, var(--lightest)), 0 8px 14px rgba(0, 0, 0, var(--light));\n\t--distant-shadow: 0 2px 6px rgba(0, 0, 0, var(--dark)), 0 12px 20px rgba(0, 0, 0, var(--darkest));\n\t--transition: color 0.25s, background-color 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.2s, opacity 0.25s, filter 0.25s;\n\t--time: 0.85s;\n\t--delay: 0.2s;\n}\n\nhtml::-webkit-scrollbar {\n\tdisplay: none;\n}\n\nhtml {\n\t-ms-overflow-style: none;\n\tscrollbar-width: none;\n}\n\nbody {\n\tmin-height: 100vh;\n\tbackground-color: var(--bg);\n}\n\nheader {\n\tmin-height: 120px;\n\tpadding: 10px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n\talign-items: center;\n}\n\n.box {\n\tborder-radius: var(--radius);\n\tbox-shadow: var(--close-shadow);\n\ttransition: var(--transition);\n}\n\n#logo {\n\theight: 80px;\n\tmargin: 5px 20px;\n\tpadding: 0 20px;\n\tcursor: pointer;\n\tfilter: invert(0.6);\n\ttransition: transform 0.2s, filter 0.25s;\n\tanimation: 1.5s grow;\n}\n\n#logo:hover {\n\tfilter: invert(1);\n}\n\n#tabs {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n}\n\n.tab {\n\tmargin: 5px 40px;\n\tpadding: 10px;\n\tposition: relative;\n\tcursor: pointer;\n\tuser-select: none;\n\tlist-style: none;\n\ttext-decoration: none;\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tcolor: var(--text-alt);\n\ttransition: var(--transition);\n}\n\n.tab:nth-child(1) {\n\tanimation: 1.2s fade-in;\n}\n.tab:nth-child(2) {\n\tanimation: var(--delay) hidden, 0.6s move-in var(--delay);\n}\n.tab:nth-child(3) {\n\tanimation: calc(var(--delay) * 2) hidden, 0.6s move-in calc(var(--delay) * 2);\n}\n\n.tab:after {\n\tcontent: '';\n\theight: 4px;\n\twidth: 40px;\n\tposition: absolute;\n\tbottom: 1px;\n\tleft: calc(50% - 20px);\n\tdisplay: block;\n\tborder-radius: 2px;\n\tbackground-color: var(--accent2);\n\ttransform: scaleX(0);\n\topacity: 0;\n\ttransition: background-color 0.25s, transform 0.3s, opacity 0.25s;\n}\n\n.tab.selected,\n.tab:hover {\n\tcolor: var(--text);\n\ttransform: translateY(-6px);\n}\n\n.tab:hover:after {\n\ttransform: scaleX(0.8);\n\topacity: 1;\n}\n\n.tab.selected:after{\n\tbackground-color: var(--accent);\n\ttransform: scaleX(1.2);\n\topacity: 1;\n}\n\n#logo:active,\n.tab:active {\n\ttransform: scale(0.85);\n}\n\n#content {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n#content > * {\n\twidth: 1200px;\n\tmax-width: 80vw;\n}\n\n@keyframes fade-in {\n\tfrom {\n\t\topacity: 0;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n}\n\n@keyframes move-in {\n\tfrom {\n\t\ttransform: translateY(70px);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: translateY(0);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes grow {\n\tfrom {\n\t\ttransform: scale(0.9);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: scale(1);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes hidden {\n\tfrom, to {\n\t\topacity: 0;\n\t}\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,SAAS;CACT,UAAU;CACV,SAAS;CACT,aAAa;CACb,gBAAgB;AACjB;;AAEA;CACC,0BAA0B;CAC1B,2BAA2B;CAC3B,qBAAqB;CACrB,yBAAyB;CACzB,wBAAwB;CACxB,0BAA0B;CAC1B,8BAA8B;CAC9B,cAAc;CACd,iBAAiB;CACjB,YAAY;CACZ,aAAa;CACb,gBAAgB;CAChB,gGAAgG;CAChG,iGAAiG;CACjG,oIAAoI;CACpI,aAAa;CACb,aAAa;AACd;;AAEA;CACC,aAAa;AACd;;AAEA;CACC,wBAAwB;CACxB,qBAAqB;AACtB;;AAEA;CACC,iBAAiB;CACjB,2BAA2B;AAC5B;;AAEA;CACC,iBAAiB;CACjB,aAAa;CACb,aAAa;CACb,eAAe;CACf,6BAA6B;CAC7B,mBAAmB;AACpB;;AAEA;CACC,4BAA4B;CAC5B,+BAA+B;CAC/B,6BAA6B;AAC9B;;AAEA;CACC,YAAY;CACZ,gBAAgB;CAChB,eAAe;CACf,eAAe;CACf,mBAAmB;CACnB,wCAAwC;CACxC,oBAAoB;AACrB;;AAEA;CACC,iBAAiB;AAClB;;AAEA;CACC,aAAa;CACb,eAAe;CACf,uBAAuB;AACxB;;AAEA;CACC,gBAAgB;CAChB,aAAa;CACb,kBAAkB;CAClB,eAAe;CACf,iBAAiB;CACjB,gBAAgB;CAChB,qBAAqB;CACrB,eAAe;CACf,gBAAgB;CAChB,sBAAsB;CACtB,6BAA6B;AAC9B;;AAEA;CACC,uBAAuB;AACxB;AACA;CACC,yDAAyD;AAC1D;AACA;CACC,6EAA6E;AAC9E;;AAEA;CACC,WAAW;CACX,WAAW;CACX,WAAW;CACX,kBAAkB;CAClB,WAAW;CACX,sBAAsB;CACtB,cAAc;CACd,kBAAkB;CAClB,gCAAgC;CAChC,oBAAoB;CACpB,UAAU;CACV,iEAAiE;AAClE;;AAEA;;CAEC,kBAAkB;CAClB,2BAA2B;AAC5B;;AAEA;CACC,sBAAsB;CACtB,UAAU;AACX;;AAEA;CACC,+BAA+B;CAC/B,sBAAsB;CACtB,UAAU;AACX;;AAEA;;CAEC,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,uBAAuB;AACxB;;AAEA;CACC,aAAa;CACb,eAAe;AAChB;;AAEA;CACC;EACC,UAAU;CACX;CACA;EACC,UAAU;CACX;AACD;;AAEA;CACC;EACC,2BAA2B;EAC3B,UAAU;CACX;CACA;EACC,wBAAwB;EACxB,UAAU;CACX;AACD;;AAEA;CACC;EACC,qBAAqB;EACrB,UAAU;CACX;CACA;EACC,mBAAmB;EACnB,UAAU;CACX;AACD;;AAEA;CACC;EACC,UAAU;CACX;AACD","sourcesContent":["* {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\toutline: none;\n\tfont-family: Sen;\n}\n\n:root {\n\t--accent: rgb(71, 41, 206);\n\t--accent2: rgb(197, 30, 85);\n\t--bg: rgb(25, 26, 29);\n\t--bg-alt: rgb(30, 31, 35);\n\t--hover: rgb(35, 36, 40);\n\t--text: rgb(240, 240, 240);\n\t--text-alt: rgb(170, 170, 170);\n\t--radius: 25px;\n\t--lightest: 0.075;\n\t--light: 0.1;\n\t--dark: 0.125;\n\t--darkest: 0.175;\n\t--close-shadow: 0 2px 6px rgba(0, 0, 0, var(--lightest)), 0 8px 14px rgba(0, 0, 0, var(--light));\n\t--distant-shadow: 0 2px 6px rgba(0, 0, 0, var(--dark)), 0 12px 20px rgba(0, 0, 0, var(--darkest));\n\t--transition: color 0.25s, background-color 0.25s, border-color 0.25s, box-shadow 0.25s, transform 0.2s, opacity 0.25s, filter 0.25s;\n\t--time: 0.85s;\n\t--delay: 0.2s;\n}\n\nhtml::-webkit-scrollbar {\n\tdisplay: none;\n}\n\nhtml {\n\t-ms-overflow-style: none;\n\tscrollbar-width: none;\n}\n\nbody {\n\tmin-height: 100vh;\n\tbackground-color: var(--bg);\n}\n\nheader {\n\tmin-height: 120px;\n\tpadding: 10px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: space-around;\n\talign-items: center;\n}\n\n.box {\n\tborder-radius: var(--radius);\n\tbox-shadow: var(--close-shadow);\n\ttransition: var(--transition);\n}\n\n#logo {\n\theight: 80px;\n\tmargin: 5px 20px;\n\tpadding: 0 20px;\n\tcursor: pointer;\n\tfilter: invert(0.6);\n\ttransition: transform 0.2s, filter 0.25s;\n\tanimation: 1.5s grow;\n}\n\n#logo:hover {\n\tfilter: invert(1);\n}\n\n#tabs {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n}\n\n.tab {\n\tmargin: 5px 40px;\n\tpadding: 10px;\n\tposition: relative;\n\tcursor: pointer;\n\tuser-select: none;\n\tlist-style: none;\n\ttext-decoration: none;\n\tfont-size: 18px;\n\tfont-weight: 700;\n\tcolor: var(--text-alt);\n\ttransition: var(--transition);\n}\n\n.tab:nth-child(1) {\n\tanimation: 1.2s fade-in;\n}\n.tab:nth-child(2) {\n\tanimation: var(--delay) hidden, 0.6s move-in var(--delay);\n}\n.tab:nth-child(3) {\n\tanimation: calc(var(--delay) * 2) hidden, 0.6s move-in calc(var(--delay) * 2);\n}\n\n.tab:after {\n\tcontent: '';\n\theight: 4px;\n\twidth: 40px;\n\tposition: absolute;\n\tbottom: 1px;\n\tleft: calc(50% - 20px);\n\tdisplay: block;\n\tborder-radius: 2px;\n\tbackground-color: var(--accent2);\n\ttransform: scaleX(0);\n\topacity: 0;\n\ttransition: background-color 0.25s, transform 0.3s, opacity 0.25s;\n}\n\n.tab.selected,\n.tab:hover {\n\tcolor: var(--text);\n\ttransform: translateY(-6px);\n}\n\n.tab:hover:after {\n\ttransform: scaleX(0.8);\n\topacity: 1;\n}\n\n.tab.selected:after{\n\tbackground-color: var(--accent);\n\ttransform: scaleX(1.2);\n\topacity: 1;\n}\n\n#logo:active,\n.tab:active {\n\ttransform: scale(0.85);\n}\n\n#content {\n\tdisplay: flex;\n\tjustify-content: center;\n}\n\n#content > * {\n\twidth: 1200px;\n\tmax-width: 80vw;\n}\n\n@keyframes fade-in {\n\tfrom {\n\t\topacity: 0;\n\t}\n\tto {\n\t\topacity: 1;\n\t}\n}\n\n@keyframes move-in {\n\tfrom {\n\t\ttransform: translateY(70px);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: translateY(0);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes grow {\n\tfrom {\n\t\ttransform: scale(0.9);\n\t\topacity: 0;\n\t}\n\tto {\n\t\ttransform: scale(1);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes hidden {\n\tfrom, to {\n\t\topacity: 0;\n\t}\n}\n"],"sourceRoot":""}]);
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






const tabContent = document.querySelector('#content');

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
	const createFunctions = [_home_js__WEBPACK_IMPORTED_MODULE_0__["default"], _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"], _contact_js__WEBPACK_IMPORTED_MODULE_2__["default"]];
	if (!tabContent.firstElementChild) {
		tabContent.appendChild(createFunctions[i]());
	} else if (tabContent.firstElementChild.dataset.id != i) {
		tabContent.replaceChild(createFunctions[i](), tabContent.firstElementChild);
	}
}

document.body.insertBefore(createHeader(), tabContent);
tabs.addEventListener('click', selectTab);
tabs.firstElementChild.click();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmbUM7QUFDQTtBQUNNO0FBQ3BCO0FBQ1M7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxzQ0FBSTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQixnREFBVSxFQUFFLGdEQUFVLEVBQUUsbURBQWE7QUFDL0Q7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmNzcz8zMTNlIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmNzcz83ZjljIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmNzcz8xMTBiIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI2NvbnRhY3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhY3QtdXMge1xcblxcdG1hcmdpbjogMTBweCAwIDIwcHg7XFxuXFx0Zm9udC1zaXplOiBtaW4oNjBweCwgMTJ2dyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YW5pbWF0aW9uOiB2YXIoLS10aW1lKSBtb3ZlLWluO1xcbn1cXG5cXG4jY29udGFjdCAjaW5mby1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGFuaW1hdGlvbjogdmFyKC0tZGVsYXkpIGhpZGRlbiwgdmFyKC0tdGltZSkgbW92ZS1pbiB2YXIoLS1kZWxheSk7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcblxcdG1hcmdpbjogMnB4IDA7XFxuXFx0cGFkZGluZzogMTBweCAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0b3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWFsdCk7XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxufVxcblxcbi5jb250YWN0LWluZm86YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGhlaWdodDogNHB4O1xcblxcdHdpZHRoOiA5OCU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvdHRvbTogMXB4O1xcblxcdGxlZnQ6IDEuNSU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzLCB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjI1cztcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyBzcGFuIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxufVxcblxcbi5jb250YWN0LWluZm86aG92ZXIgc3BhbiB7XFxuXFx0Y29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi5jb250YWN0LWluZm86aG92ZXIge1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XFxufVxcblxcbi5jb250YWN0LWluZm86aG92ZXI6YWZ0ZXIge1xcblxcdHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbi5jb3B5IHtcXG5cXHRwYWRkaW5nOiAxMHB4IDE4cHg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMTVweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLWRpc3RhbnQtc2hhZG93KTtcXG5cXHRhbmltYXRpb246IDAuMjVzIGdyb3csIDAuNXMgZ3JvdyByZXZlcnNlIGZvcndhcmRzIDAuNXM7XFxufVxcblxcbiNjb250YWN0IGZvcm0ge1xcblxcdG1hcmdpbjogNDBweCAwIDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YW5pbWF0aW9uOiBjYWxjKHZhcigtLWRlbGF5KSAqIDIpIGhpZGRlbiwgdmFyKC0tdGltZSkgbW92ZS1pbiBjYWxjKHZhcigtLWRlbGF5KSAqIDIpO1xcbn1cXG5cXG4jY29udGFjdCBmb3JtIHAge1xcblxcdGZvbnQtc2l6ZTogMjJweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuI2NvbnRhY3QgZm9ybSBpbnB1dFt0eXBlPWVtYWlsXSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiA0MDBweDtcXG5cXHRtYXJnaW46IDM1cHggMCAyNXB4O1xcblxcdHBhZGRpbmc6IDhweCAyMHB4O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtYWx0KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1hbHQpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jY29udGFjdCBmb3JtIGlucHV0W3R5cGU9ZW1haWxdOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcbiNjb250YWN0IGZvcm0gaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMge1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLWRpc3RhbnQtc2hhZG93KTtcXG59XFxuXFxuI2NvbnRhY3QgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcblxcdHBhZGRpbmc6IDEycHggMjRweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDIpO1xcbn1cXG5cXG4jY29udGFjdCBmb3JtIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XFxuXFx0Ym94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgxOTcsIDMwLCA4NSwgMC40KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KSB0cmFuc2xhdGVZKC0ycHgpO1xcbn1cXG5cXG4jY29udGFjdCBmb3JtIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMC45MjUpO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY29udGFjdC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLDBCQUEwQjtDQUMxQixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixnRUFBZ0U7QUFDakU7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QixlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsVUFBVTtDQUNWLGtCQUFrQjtDQUNsQiwrQkFBK0I7Q0FDL0Isb0JBQW9CO0NBQ3BCLFVBQVU7Q0FDVixpRUFBaUU7QUFDbEU7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsb0JBQW9CO0NBQ3BCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLCtCQUErQjtDQUMvQixpQ0FBaUM7Q0FDakMsc0RBQXNEO0FBQ3ZEOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLG1CQUFtQjtDQUNuQixvRkFBb0Y7QUFDckY7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQixxQkFBcUI7Q0FDckIsc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2Ysc0JBQXNCO0NBQ3RCLCtCQUErQjtDQUMvQiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyw4QkFBOEI7QUFDL0I7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsOEJBQThCO0NBQzlCLDJCQUEyQjtDQUMzQixpQ0FBaUM7QUFDbEM7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLGdDQUFnQztBQUNqQzs7QUFFQTtDQUNDLDhDQUE4QztDQUM5Qyx3Q0FBd0M7QUFDekM7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2NvbnRhY3Qge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI2NvbnRhY3QtdXMge1xcblxcdG1hcmdpbjogMTBweCAwIDIwcHg7XFxuXFx0Zm9udC1zaXplOiBtaW4oNjBweCwgMTJ2dyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YW5pbWF0aW9uOiB2YXIoLS10aW1lKSBtb3ZlLWluO1xcbn1cXG5cXG4jY29udGFjdCAjaW5mby1jb250YWluZXIge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGFuaW1hdGlvbjogdmFyKC0tZGVsYXkpIGhpZGRlbiwgdmFyKC0tdGltZSkgbW92ZS1pbiB2YXIoLS1kZWxheSk7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcblxcdG1hcmdpbjogMnB4IDA7XFxuXFx0cGFkZGluZzogMTBweCAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxuXFx0b3ZlcmZsb3ctd3JhcDogYW55d2hlcmU7XFxuXFx0Zm9udC1zaXplOiAxOHB4O1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWFsdCk7XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxufVxcblxcbi5jb250YWN0LWluZm86YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGhlaWdodDogNHB4O1xcblxcdHdpZHRoOiA5OCU7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvdHRvbTogMXB4O1xcblxcdGxlZnQ6IDEuNSU7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzLCB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjI1cztcXG59XFxuXFxuLmNvbnRhY3QtaW5mbyBzcGFuIHtcXG5cXHRtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxufVxcblxcbi5jb250YWN0LWluZm86aG92ZXIgc3BhbiB7XFxuXFx0Y29sb3I6IHZhcigtLWFjY2VudCk7XFxufVxcblxcbi5jb250YWN0LWluZm86aG92ZXIge1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XFxufVxcblxcbi5jb250YWN0LWluZm86aG92ZXI6YWZ0ZXIge1xcblxcdHRyYW5zZm9ybTogc2NhbGVYKDEpO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbi5jb3B5IHtcXG5cXHRwYWRkaW5nOiAxMHB4IDE4cHg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMTVweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLWRpc3RhbnQtc2hhZG93KTtcXG5cXHRhbmltYXRpb246IDAuMjVzIGdyb3csIDAuNXMgZ3JvdyByZXZlcnNlIGZvcndhcmRzIDAuNXM7XFxufVxcblxcbiNjb250YWN0IGZvcm0ge1xcblxcdG1hcmdpbjogNDBweCAwIDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0YW5pbWF0aW9uOiBjYWxjKHZhcigtLWRlbGF5KSAqIDIpIGhpZGRlbiwgdmFyKC0tdGltZSkgbW92ZS1pbiBjYWxjKHZhcigtLWRlbGF5KSAqIDIpO1xcbn1cXG5cXG4jY29udGFjdCBmb3JtIHAge1xcblxcdGZvbnQtc2l6ZTogMjJweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuI2NvbnRhY3QgZm9ybSBpbnB1dFt0eXBlPWVtYWlsXSB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWF4LXdpZHRoOiA0MDBweDtcXG5cXHRtYXJnaW46IDM1cHggMCAyNXB4O1xcblxcdHBhZGRpbmc6IDhweCAyMHB4O1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtYWx0KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1hbHQpO1xcblxcdGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cXG4jY29udGFjdCBmb3JtIGlucHV0W3R5cGU9ZW1haWxdOmhvdmVyIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxufVxcblxcbiNjb250YWN0IGZvcm0gaW5wdXRbdHlwZT1lbWFpbF06Zm9jdXMge1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlcik7XFxuXFx0Ym9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLWRpc3RhbnQtc2hhZG93KTtcXG59XFxuXFxuI2NvbnRhY3QgZm9ybSBpbnB1dFt0eXBlPXN1Ym1pdF0ge1xcblxcdHBhZGRpbmc6IDEycHggMjRweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDIpO1xcbn1cXG5cXG4jY29udGFjdCBmb3JtIGlucHV0W3R5cGU9c3VibWl0XTpob3ZlciB7XFxuXFx0Ym94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSgxOTcsIDMwLCA4NSwgMC40KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KSB0cmFuc2xhdGVZKC0ycHgpO1xcbn1cXG5cXG4jY29udGFjdCBmb3JtIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMC45MjUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjaG9tZSB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2hvbWUgI2NvbnRhaW5lciB7XFxuXFx0bWFyZ2luOiAxMHB4IDA7XFxuXFx0bWFyZ2luLWxlZnQ6IDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4jaG9tZSAjdGl0bGUge1xcblxcdGZvbnQtc2l6ZTogbWluKDcwcHgsIDEydncpO1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0Y29sb3I6IHdoaXRlO1xcblxcdGFuaW1hdGlvbjogdmFyKC0tdGltZSkgbW92ZS1pbjtcXG59XFxuXFxuI2hvbWUgI3RpdGxlIHNwYW4ge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG5cXHRjb2xvcjogdmFyKC0tYWNjZW50KTtcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMsIHRleHQtc2hhZG93IDAuNHM7XFxufVxcblxcbiNob21lICN0aXRsZSBzcGFuOmhvdmVyIHtcXG5cXHR0ZXh0LXNoYWRvdzogMCAwIDM1cHggcmdiYSg3MSwgNDEsIDIwNiwgMC41KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbiNob21lICNkZXNjcmlwdGlvbiB7XFxuXFx0d2lkdGg6IDYwJTtcXG5cXHRtYXJnaW46IDMwcHggMDtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0bGluZS1oZWlnaHQ6IDM1cHg7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtYWx0KTtcXG5cXHRhbmltYXRpb246IHZhcigtLWRlbGF5KSBoaWRkZW4sIHZhcigtLXRpbWUpIG1vdmUtaW4gdmFyKC0tZGVsYXkpO1xcbn1cXG5cXG4jaG9tZSAjb3JkZXIge1xcblxcdG1hcmdpbjogMTBweCAwO1xcblxcdHBhZGRpbmc6IDE1cHggMjVweDtcXG5cXHRjdXJzb3I6IHBvaW50ZXI7XFxuXFx0Zm9udC1zaXplOiAyNHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDIpO1xcblxcdGFuaW1hdGlvbjogY2FsYyh2YXIoLS1kZWxheSkgKiAyKSBoaWRkZW4sIHZhcigtLXRpbWUpIG1vdmUtaW4gY2FsYyh2YXIoLS1kZWxheSkgKiAyKTtcXG59XFxuXFxuI2hvbWUgI29yZGVyOmhvdmVyIHtcXG5cXHRib3gtc2hhZG93OiAwIDEwcHggMjVweCByZ2JhKDE5NywgMzAsIDg1LCAwLjQpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpIHRyYW5zbGF0ZVkoLTNweCk7XFxufVxcblxcbiNob21lICNvcmRlcjphY3RpdmUge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMC45MjUpO1xcbn1cXG5cXG4jaG9tZSBpbWcge1xcblxcdHdpZHRoOiA0MHZ3O1xcblxcdG1heC13aWR0aDogNTUwcHg7XFxuXFx0bWFyZ2luOiA0MHB4IDA7XFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGZpbHRlciAwLjVzO1xcblxcdGFuaW1hdGlvbjogY2FsYyh2YXIoLS1kZWxheSkgKiAyLjUpIGhpZGRlbiwgMS4xcyBncm93IGNhbGModmFyKC0tZGVsYXkpICogMi41KTtcXG59XFxuXFxuI2hvbWUgaW1nOmhvdmVyIHtcXG5cXHRmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMCAxMnB4IHJnYmEoMjU1LCAyMDAsIDAsIDAuNCkpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MTAzMHB4KSB7XFxuXFx0I2hvbWUge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0fVxcblxcdCNob21lICNjb250YWluZXIge1xcblxcdFxcdG1hcmdpbi1sZWZ0OiAwO1xcblxcdFxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0XFx0dGV4dC1hbGlnbjogY2VudGVyO1xcblxcdH1cXG5cXHQjaG9tZSAjZGVzY3JpcHRpb24ge1xcblxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdH1cXG5cXHQjaG9tZSBpbWcge1xcblxcdFxcdHdpZHRoOiA4MHZ3O1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2hvbWUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0NBQ0MsYUFBYTtDQUNiLDhCQUE4QjtDQUM5QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixzQkFBc0I7Q0FDdEIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osOEJBQThCO0FBQy9COztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLG9CQUFvQjtDQUNwQiw2Q0FBNkM7QUFDOUM7O0FBRUE7Q0FDQyw0Q0FBNEM7Q0FDNUMscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsaUJBQWlCO0NBQ2pCLHNCQUFzQjtDQUN0QixnRUFBZ0U7QUFDakU7O0FBRUE7Q0FDQyxjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixnQ0FBZ0M7Q0FDaEMsb0ZBQW9GO0FBQ3JGOztBQUVBO0NBQ0MsOENBQThDO0NBQzlDLHdDQUF3QztBQUN6Qzs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsY0FBYztDQUNkLHVDQUF1QztDQUN2Qyw4RUFBOEU7QUFDL0U7O0FBRUE7Q0FDQyxvREFBb0Q7Q0FDcEQsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0M7RUFDQyxzQkFBc0I7Q0FDdkI7Q0FDQTtFQUNDLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQ25CO0NBQ0E7RUFDQyxXQUFXO0NBQ1o7Q0FDQTtFQUNDLFdBQVc7Q0FDWjtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNob21lIHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jaG9tZSAjY29udGFpbmVyIHtcXG5cXHRtYXJnaW46IDEwcHggMDtcXG5cXHRtYXJnaW4tbGVmdDogMTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbiNob21lICN0aXRsZSB7XFxuXFx0Zm9udC1zaXplOiBtaW4oNzBweCwgMTJ2dyk7XFxuXFx0Zm9udC13ZWlnaHQ6IDgwMDtcXG5cXHRjb2xvcjogd2hpdGU7XFxuXFx0YW5pbWF0aW9uOiB2YXIoLS10aW1lKSBtb3ZlLWluO1xcbn1cXG5cXG4jaG9tZSAjdGl0bGUgc3BhbiB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcblxcdGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cywgdGV4dC1zaGFkb3cgMC40cztcXG59XFxuXFxuI2hvbWUgI3RpdGxlIHNwYW46aG92ZXIge1xcblxcdHRleHQtc2hhZG93OiAwIDAgMzVweCByZ2JhKDcxLCA0MSwgMjA2LCAwLjUpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuI2hvbWUgI2Rlc2NyaXB0aW9uIHtcXG5cXHR3aWR0aDogNjAlO1xcblxcdG1hcmdpbjogMzBweCAwO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRsaW5lLWhlaWdodDogMzVweDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1hbHQpO1xcblxcdGFuaW1hdGlvbjogdmFyKC0tZGVsYXkpIGhpZGRlbiwgdmFyKC0tdGltZSkgbW92ZS1pbiB2YXIoLS1kZWxheSk7XFxufVxcblxcbiNob21lICNvcmRlciB7XFxuXFx0bWFyZ2luOiAxMHB4IDA7XFxuXFx0cGFkZGluZzogMTVweCAyNXB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDI0cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Mik7XFxuXFx0YW5pbWF0aW9uOiBjYWxjKHZhcigtLWRlbGF5KSAqIDIpIGhpZGRlbiwgdmFyKC0tdGltZSkgbW92ZS1pbiBjYWxjKHZhcigtLWRlbGF5KSAqIDIpO1xcbn1cXG5cXG4jaG9tZSAjb3JkZXI6aG92ZXIge1xcblxcdGJveC1zaGFkb3c6IDAgMTBweCAyNXB4IHJnYmEoMTk3LCAzMCwgODUsIDAuNCk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA3NSkgdHJhbnNsYXRlWSgtM3B4KTtcXG59XFxuXFxuI2hvbWUgI29yZGVyOmFjdGl2ZSB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgwLjkyNSk7XFxufVxcblxcbiNob21lIGltZyB7XFxuXFx0d2lkdGg6IDQwdnc7XFxuXFx0bWF4LXdpZHRoOiA1NTBweDtcXG5cXHRtYXJnaW46IDQwcHggMDtcXG5cXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgZmlsdGVyIDAuNXM7XFxuXFx0YW5pbWF0aW9uOiBjYWxjKHZhcigtLWRlbGF5KSAqIDIuNSkgaGlkZGVuLCAxLjFzIGdyb3cgY2FsYyh2YXIoLS1kZWxheSkgKiAyLjUpO1xcbn1cXG5cXG4jaG9tZSBpbWc6aG92ZXIge1xcblxcdGZpbHRlcjogZHJvcC1zaGFkb3coMCAwIDEycHggcmdiYSgyNTUsIDIwMCwgMCwgMC40KSk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDMwcHgpIHtcXG5cXHQjaG9tZSB7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHR9XFxuXFx0I2hvbWUgI2NvbnRhaW5lciB7XFxuXFx0XFx0bWFyZ2luLWxlZnQ6IDA7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHR0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFx0fVxcblxcdCNob21lICNkZXNjcmlwdGlvbiB7XFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxuXFx0fVxcblxcdCNob21lIGltZyB7XFxuXFx0XFx0d2lkdGg6IDgwdnc7XFxuXFx0fVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIjbWVudSB7XFxuXFx0ZGlzcGxheTogZ3JpZDtcXG5cXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuXFx0Z3JpZC1nYXA6IDEwcHg7XFxufVxcblxcbiNtZW51IC5mb29kLmJveCB7XFxuXFx0bWFyZ2luOiAxMnB4O1xcblxcdHBhZGRpbmc6IDI1cHggMzBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWFsdCk7XFxufVxcblxcbiNtZW51IC5mb29kLmJveDpob3ZlciB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXIpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLWRpc3RhbnQtc2hhZG93KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDUpIHRyYW5zbGF0ZVkoLTRweCk7XFxufVxcblxcbiNtZW51IC5mb29kLmJveCAubmFtZSB7XFxuXFx0Zm9udC1zaXplOiAzMHB4O1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0Y29sb3I6IHZhcigtLWFjY2VudDIpO1xcbn1cXG5cXG4jbWVudSAuZm9vZC5ib3ggLmRlc2NyaXB0aW9uIHtcXG5cXHRtYXJnaW46IDE1cHggMDtcXG5cXHRmb250LXNpemU6IDE2cHg7XFxuXFx0bGluZS1oZWlnaHQ6IDIycHg7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQtYWx0KTtcXG59XFxuXFxuI21lbnUgLmZvb2QuYm94IC5wcmljZS1vcmRlciB7XFxuXFx0bWF4LXdpZHRoOiAxNjRweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4jbWVudSAuZm9vZC5ib3ggLnByaWNlIHtcXG5cXHRtYXJnaW46IDVweCAwO1xcblxcdGZvbnQtc2l6ZTogMjhweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG59XFxuXFxuI21lbnUgLmZvb2QuYm94IC5vcmRlciB7XFxuXFx0bWFyZ2luOiA1cHggMTVweDtcXG5cXHRwYWRkaW5nOiAxMHB4IDIycHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0KTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQpO1xcbn1cXG5cXG4jbWVudSAuZm9vZC5ib3ggLm9yZGVyOmhvdmVyIHtcXG5cXHRib3gtc2hhZG93OiAwIDEwcHggMjBweCByZ2JhKDcxLCA0MSwgMjA2LCAwLjQpO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4wNzUpO1xcbn1cXG5cXG4jbWVudSAuZm9vZC5ib3ggLm9yZGVyOmFjdGl2ZSB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgwLjkyNSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tZW51LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGFBQWE7Q0FDYiw0REFBNEQ7Q0FDNUQsY0FBYztBQUNmOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDhCQUE4QjtDQUM5QiwrQkFBK0I7QUFDaEM7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsaUNBQWlDO0NBQ2pDLHVDQUF1QztBQUN4Qzs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakIsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixlQUFlO0NBQ2YsbUJBQW1CO0NBQ25CLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsa0JBQWtCO0NBQ2xCLCtCQUErQjtBQUNoQzs7QUFFQTtDQUNDLDhDQUE4QztDQUM5Qyx1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyx1QkFBdUI7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI21lbnUge1xcblxcdGRpc3BsYXk6IGdyaWQ7XFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcblxcdGdyaWQtZ2FwOiAxMHB4O1xcbn1cXG5cXG4jbWVudSAuZm9vZC5ib3gge1xcblxcdG1hcmdpbjogMTJweDtcXG5cXHRwYWRkaW5nOiAyNXB4IDMwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1hbHQpO1xcbn1cXG5cXG4jbWVudSAuZm9vZC5ib3g6aG92ZXIge1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyKTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1kaXN0YW50LXNoYWRvdyk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjA1KSB0cmFuc2xhdGVZKC00cHgpO1xcbn1cXG5cXG4jbWVudSAuZm9vZC5ib3ggLm5hbWUge1xcblxcdGZvbnQtc2l6ZTogMzBweDtcXG5cXHRmb250LXdlaWdodDogODAwO1xcblxcdGNvbG9yOiB2YXIoLS1hY2NlbnQyKTtcXG59XFxuXFxuI21lbnUgLmZvb2QuYm94IC5kZXNjcmlwdGlvbiB7XFxuXFx0bWFyZ2luOiAxNXB4IDA7XFxuXFx0Zm9udC1zaXplOiAxNnB4O1xcblxcdGxpbmUtaGVpZ2h0OiAyMnB4O1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWFsdCk7XFxufVxcblxcbiNtZW51IC5mb29kLmJveCAucHJpY2Utb3JkZXIge1xcblxcdG1heC13aWR0aDogMTY0cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuI21lbnUgLmZvb2QuYm94IC5wcmljZSB7XFxuXFx0bWFyZ2luOiA1cHggMDtcXG5cXHRmb250LXNpemU6IDI4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxufVxcblxcbiNtZW51IC5mb29kLmJveCAub3JkZXIge1xcblxcdG1hcmdpbjogNXB4IDE1cHg7XFxuXFx0cGFkZGluZzogMTBweCAyMnB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmb250LXNpemU6IDIwcHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG59XFxuXFxuI21lbnUgLmZvb2QuYm94IC5vcmRlcjpob3ZlciB7XFxuXFx0Ym94LXNoYWRvdzogMCAxMHB4IDIwcHggcmdiYSg3MSwgNDEsIDIwNiwgMC40KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMDc1KTtcXG59XFxuXFxuI21lbnUgLmZvb2QuYm94IC5vcmRlcjphY3RpdmUge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMC45MjUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHRmb250LWZhbWlseTogU2VuO1xcbn1cXG5cXG46cm9vdCB7XFxuXFx0LS1hY2NlbnQ6IHJnYig3MSwgNDEsIDIwNik7XFxuXFx0LS1hY2NlbnQyOiByZ2IoMTk3LCAzMCwgODUpO1xcblxcdC0tYmc6IHJnYigyNSwgMjYsIDI5KTtcXG5cXHQtLWJnLWFsdDogcmdiKDMwLCAzMSwgMzUpO1xcblxcdC0taG92ZXI6IHJnYigzNSwgMzYsIDQwKTtcXG5cXHQtLXRleHQ6IHJnYigyNDAsIDI0MCwgMjQwKTtcXG5cXHQtLXRleHQtYWx0OiByZ2IoMTcwLCAxNzAsIDE3MCk7XFxuXFx0LS1yYWRpdXM6IDI1cHg7XFxuXFx0LS1saWdodGVzdDogMC4wNzU7XFxuXFx0LS1saWdodDogMC4xO1xcblxcdC0tZGFyazogMC4xMjU7XFxuXFx0LS1kYXJrZXN0OiAwLjE3NTtcXG5cXHQtLWNsb3NlLXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgdmFyKC0tbGlnaHRlc3QpKSwgMCA4cHggMTRweCByZ2JhKDAsIDAsIDAsIHZhcigtLWxpZ2h0KSk7XFxuXFx0LS1kaXN0YW50LXNoYWRvdzogMCAycHggNnB4IHJnYmEoMCwgMCwgMCwgdmFyKC0tZGFyaykpLCAwIDEycHggMjBweCByZ2JhKDAsIDAsIDAsIHZhcigtLWRhcmtlc3QpKTtcXG5cXHQtLXRyYW5zaXRpb246IGNvbG9yIDAuMjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzLCBib3JkZXItY29sb3IgMC4yNXMsIGJveC1zaGFkb3cgMC4yNXMsIHRyYW5zZm9ybSAwLjJzLCBvcGFjaXR5IDAuMjVzLCBmaWx0ZXIgMC4yNXM7XFxuXFx0LS10aW1lOiAwLjg1cztcXG5cXHQtLWRlbGF5OiAwLjJzO1xcbn1cXG5cXG5odG1sOjotd2Via2l0LXNjcm9sbGJhciB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuaHRtbCB7XFxuXFx0LW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xcblxcdHNjcm9sbGJhci13aWR0aDogbm9uZTtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcbn1cXG5cXG5oZWFkZXIge1xcblxcdG1pbi1oZWlnaHQ6IDEyMHB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJveCB7XFxuXFx0Ym9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzKTtcXG5cXHRib3gtc2hhZG93OiB2YXIoLS1jbG9zZS1zaGFkb3cpO1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcbn1cXG5cXG4jbG9nbyB7XFxuXFx0aGVpZ2h0OiA4MHB4O1xcblxcdG1hcmdpbjogNXB4IDIwcHg7XFxuXFx0cGFkZGluZzogMCAyMHB4O1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRmaWx0ZXI6IGludmVydCgwLjYpO1xcblxcdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzLCBmaWx0ZXIgMC4yNXM7XFxuXFx0YW5pbWF0aW9uOiAxLjVzIGdyb3c7XFxufVxcblxcbiNsb2dvOmhvdmVyIHtcXG5cXHRmaWx0ZXI6IGludmVydCgxKTtcXG59XFxuXFxuI3RhYnMge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC13cmFwOiB3cmFwO1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGFiIHtcXG5cXHRtYXJnaW46IDVweCA0MHB4O1xcblxcdHBhZGRpbmc6IDEwcHg7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHR1c2VyLXNlbGVjdDogbm9uZTtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRmb250LXNpemU6IDE4cHg7XFxuXFx0Zm9udC13ZWlnaHQ6IDcwMDtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dC1hbHQpO1xcblxcdHRyYW5zaXRpb246IHZhcigtLXRyYW5zaXRpb24pO1xcbn1cXG5cXG4udGFiOm50aC1jaGlsZCgxKSB7XFxuXFx0YW5pbWF0aW9uOiAxLjJzIGZhZGUtaW47XFxufVxcbi50YWI6bnRoLWNoaWxkKDIpIHtcXG5cXHRhbmltYXRpb246IHZhcigtLWRlbGF5KSBoaWRkZW4sIDAuNnMgbW92ZS1pbiB2YXIoLS1kZWxheSk7XFxufVxcbi50YWI6bnRoLWNoaWxkKDMpIHtcXG5cXHRhbmltYXRpb246IGNhbGModmFyKC0tZGVsYXkpICogMikgaGlkZGVuLCAwLjZzIG1vdmUtaW4gY2FsYyh2YXIoLS1kZWxheSkgKiAyKTtcXG59XFxuXFxuLnRhYjphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0aGVpZ2h0OiA0cHg7XFxuXFx0d2lkdGg6IDQwcHg7XFxuXFx0cG9zaXRpb246IGFic29sdXRlO1xcblxcdGJvdHRvbTogMXB4O1xcblxcdGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxuXFx0Ym9yZGVyLXJhZGl1czogMnB4O1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudDIpO1xcblxcdHRyYW5zZm9ybTogc2NhbGVYKDApO1xcblxcdG9wYWNpdHk6IDA7XFxuXFx0dHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cywgdHJhbnNmb3JtIDAuM3MsIG9wYWNpdHkgMC4yNXM7XFxufVxcblxcbi50YWIuc2VsZWN0ZWQsXFxuLnRhYjpob3ZlciB7XFxuXFx0Y29sb3I6IHZhcigtLXRleHQpO1xcblxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcXG59XFxuXFxuLnRhYjpob3ZlcjphZnRlciB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZVgoMC44KTtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFiLnNlbGVjdGVkOmFmdGVye1xcblxcdGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZVgoMS4yKTtcXG5cXHRvcGFjaXR5OiAxO1xcbn1cXG5cXG4jbG9nbzphY3RpdmUsXFxuLnRhYjphY3RpdmUge1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMC44NSk7XFxufVxcblxcbiNjb250ZW50IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jY29udGVudCA+ICoge1xcblxcdHdpZHRoOiAxMjAwcHg7XFxuXFx0bWF4LXdpZHRoOiA4MHZ3O1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xcblxcdGZyb20ge1xcblxcdFxcdG9wYWNpdHk6IDA7XFxuXFx0fVxcblxcdHRvIHtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBtb3ZlLWluIHtcXG5cXHRmcm9tIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNzBweCk7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxuXFx0dG8ge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBncm93IHtcXG5cXHRmcm9tIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxuXFx0dG8ge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuXFx0XFx0b3BhY2l0eTogMTtcXG5cXHR9XFxufVxcblxcbkBrZXlmcmFtZXMgaGlkZGVuIHtcXG5cXHRmcm9tLCB0byB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxhQUFhO0NBQ2IsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLDJCQUEyQjtDQUMzQixxQkFBcUI7Q0FDckIseUJBQXlCO0NBQ3pCLHdCQUF3QjtDQUN4QiwwQkFBMEI7Q0FDMUIsOEJBQThCO0NBQzlCLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsWUFBWTtDQUNaLGFBQWE7Q0FDYixnQkFBZ0I7Q0FDaEIsZ0dBQWdHO0NBQ2hHLGlHQUFpRztDQUNqRyxvSUFBb0k7Q0FDcEksYUFBYTtDQUNiLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxpQkFBaUI7Q0FDakIsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MsaUJBQWlCO0NBQ2pCLGFBQWE7Q0FDYixhQUFhO0NBQ2IsZUFBZTtDQUNmLDZCQUE2QjtDQUM3QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsK0JBQStCO0NBQy9CLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsZUFBZTtDQUNmLGVBQWU7Q0FDZixtQkFBbUI7Q0FDbkIsd0NBQXdDO0NBQ3hDLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixlQUFlO0NBQ2YsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGlCQUFpQjtDQUNqQixnQkFBZ0I7Q0FDaEIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsc0JBQXNCO0NBQ3RCLDZCQUE2QjtBQUM5Qjs7QUFFQTtDQUNDLHVCQUF1QjtBQUN4QjtBQUNBO0NBQ0MseURBQXlEO0FBQzFEO0FBQ0E7Q0FDQyw2RUFBNkU7QUFDOUU7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLHNCQUFzQjtDQUN0QixjQUFjO0NBQ2Qsa0JBQWtCO0NBQ2xCLGdDQUFnQztDQUNoQyxvQkFBb0I7Q0FDcEIsVUFBVTtDQUNWLGlFQUFpRTtBQUNsRTs7QUFFQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLFVBQVU7QUFDWDs7QUFFQTtDQUNDLCtCQUErQjtDQUMvQixzQkFBc0I7Q0FDdEIsVUFBVTtBQUNYOztBQUVBOztDQUVDLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGFBQWE7Q0FDYix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZUFBZTtBQUNoQjs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtDQUNYO0NBQ0E7RUFDQyxVQUFVO0NBQ1g7QUFDRDs7QUFFQTtDQUNDO0VBQ0MsMkJBQTJCO0VBQzNCLFVBQVU7Q0FDWDtDQUNBO0VBQ0Msd0JBQXdCO0VBQ3hCLFVBQVU7Q0FDWDtBQUNEOztBQUVBO0NBQ0M7RUFDQyxxQkFBcUI7RUFDckIsVUFBVTtDQUNYO0NBQ0E7RUFDQyxtQkFBbUI7RUFDbkIsVUFBVTtDQUNYO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLFVBQVU7Q0FDWDtBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRvdXRsaW5lOiBub25lO1xcblxcdGZvbnQtZmFtaWx5OiBTZW47XFxufVxcblxcbjpyb290IHtcXG5cXHQtLWFjY2VudDogcmdiKDcxLCA0MSwgMjA2KTtcXG5cXHQtLWFjY2VudDI6IHJnYigxOTcsIDMwLCA4NSk7XFxuXFx0LS1iZzogcmdiKDI1LCAyNiwgMjkpO1xcblxcdC0tYmctYWx0OiByZ2IoMzAsIDMxLCAzNSk7XFxuXFx0LS1ob3ZlcjogcmdiKDM1LCAzNiwgNDApO1xcblxcdC0tdGV4dDogcmdiKDI0MCwgMjQwLCAyNDApO1xcblxcdC0tdGV4dC1hbHQ6IHJnYigxNzAsIDE3MCwgMTcwKTtcXG5cXHQtLXJhZGl1czogMjVweDtcXG5cXHQtLWxpZ2h0ZXN0OiAwLjA3NTtcXG5cXHQtLWxpZ2h0OiAwLjE7XFxuXFx0LS1kYXJrOiAwLjEyNTtcXG5cXHQtLWRhcmtlc3Q6IDAuMTc1O1xcblxcdC0tY2xvc2Utc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCB2YXIoLS1saWdodGVzdCkpLCAwIDhweCAxNHB4IHJnYmEoMCwgMCwgMCwgdmFyKC0tbGlnaHQpKTtcXG5cXHQtLWRpc3RhbnQtc2hhZG93OiAwIDJweCA2cHggcmdiYSgwLCAwLCAwLCB2YXIoLS1kYXJrKSksIDAgMTJweCAyMHB4IHJnYmEoMCwgMCwgMCwgdmFyKC0tZGFya2VzdCkpO1xcblxcdC0tdHJhbnNpdGlvbjogY29sb3IgMC4yNXMsIGJhY2tncm91bmQtY29sb3IgMC4yNXMsIGJvcmRlci1jb2xvciAwLjI1cywgYm94LXNoYWRvdyAwLjI1cywgdHJhbnNmb3JtIDAuMnMsIG9wYWNpdHkgMC4yNXMsIGZpbHRlciAwLjI1cztcXG5cXHQtLXRpbWU6IDAuODVzO1xcblxcdC0tZGVsYXk6IDAuMnM7XFxufVxcblxcbmh0bWw6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5odG1sIHtcXG5cXHQtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XFxuXFx0c2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcbn1cXG5cXG5ib2R5IHtcXG5cXHRtaW4taGVpZ2h0OiAxMDB2aDtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxufVxcblxcbmhlYWRlciB7XFxuXFx0bWluLWhlaWdodDogMTIwcHg7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG5cXHRhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm94IHtcXG5cXHRib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLWNsb3NlLXNoYWRvdyk7XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxufVxcblxcbiNsb2dvIHtcXG5cXHRoZWlnaHQ6IDgwcHg7XFxuXFx0bWFyZ2luOiA1cHggMjBweDtcXG5cXHRwYWRkaW5nOiAwIDIwcHg7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdGZpbHRlcjogaW52ZXJ0KDAuNik7XFxuXFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMsIGZpbHRlciAwLjI1cztcXG5cXHRhbmltYXRpb246IDEuNXMgZ3JvdztcXG59XFxuXFxuI2xvZ286aG92ZXIge1xcblxcdGZpbHRlcjogaW52ZXJ0KDEpO1xcbn1cXG5cXG4jdGFicyB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi50YWIge1xcblxcdG1hcmdpbjogNXB4IDQwcHg7XFxuXFx0cGFkZGluZzogMTBweDtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdHVzZXItc2VsZWN0OiBub25lO1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMThweDtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcblxcdGNvbG9yOiB2YXIoLS10ZXh0LWFsdCk7XFxuXFx0dHJhbnNpdGlvbjogdmFyKC0tdHJhbnNpdGlvbik7XFxufVxcblxcbi50YWI6bnRoLWNoaWxkKDEpIHtcXG5cXHRhbmltYXRpb246IDEuMnMgZmFkZS1pbjtcXG59XFxuLnRhYjpudGgtY2hpbGQoMikge1xcblxcdGFuaW1hdGlvbjogdmFyKC0tZGVsYXkpIGhpZGRlbiwgMC42cyBtb3ZlLWluIHZhcigtLWRlbGF5KTtcXG59XFxuLnRhYjpudGgtY2hpbGQoMykge1xcblxcdGFuaW1hdGlvbjogY2FsYyh2YXIoLS1kZWxheSkgKiAyKSBoaWRkZW4sIDAuNnMgbW92ZS1pbiBjYWxjKHZhcigtLWRlbGF5KSAqIDIpO1xcbn1cXG5cXG4udGFiOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRoZWlnaHQ6IDRweDtcXG5cXHR3aWR0aDogNDBweDtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Ym90dG9tOiAxcHg7XFxuXFx0bGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG5cXHRib3JkZXItcmFkaXVzOiAycHg7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50Mik7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxuXFx0b3BhY2l0eTogMDtcXG5cXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzLCB0cmFuc2Zvcm0gMC4zcywgb3BhY2l0eSAwLjI1cztcXG59XFxuXFxuLnRhYi5zZWxlY3RlZCxcXG4udGFiOmhvdmVyIHtcXG5cXHRjb2xvcjogdmFyKC0tdGV4dCk7XFxuXFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02cHgpO1xcbn1cXG5cXG4udGFiOmhvdmVyOmFmdGVyIHtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlWCgwLjgpO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbi50YWIuc2VsZWN0ZWQ6YWZ0ZXJ7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlWCgxLjIpO1xcblxcdG9wYWNpdHk6IDE7XFxufVxcblxcbiNsb2dvOmFjdGl2ZSxcXG4udGFiOmFjdGl2ZSB7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgwLjg1KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNjb250ZW50ID4gKiB7XFxuXFx0d2lkdGg6IDEyMDBweDtcXG5cXHRtYXgtd2lkdGg6IDgwdnc7XFxufVxcblxcbkBrZXlmcmFtZXMgZmFkZS1pbiB7XFxuXFx0ZnJvbSB7XFxuXFx0XFx0b3BhY2l0eTogMDtcXG5cXHR9XFxuXFx0dG8ge1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIG1vdmUtaW4ge1xcblxcdGZyb20ge1xcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg3MHB4KTtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG5cXHR0byB7XFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xcblxcdFxcdG9wYWNpdHk6IDE7XFxuXFx0fVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGdyb3cge1xcblxcdGZyb20ge1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG5cXHR0byB7XFxuXFx0XFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcXG5cXHRcXHRvcGFjaXR5OiAxO1xcblxcdH1cXG59XFxuXFxuQGtleWZyYW1lcyBoaWRkZW4ge1xcblxcdGZyb20sIHRvIHtcXG5cXHRcXHRvcGFjaXR5OiAwO1xcblxcdH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IHRoaXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNbX2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgbW9kdWxlcy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pMl0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2NvbnRhY3QuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9jb250YWN0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWVudS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21lbnUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9jb250YWN0LmNzcyc7XG5cbmZ1bmN0aW9uIGNvcHlUb0NsaXBib2FyZChlKSB7XG5cdGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdGNvbnN0IGVsID0gZS50YXJnZXQ7XG5cdG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGVsLmxhc3RDaGlsZC50ZXh0Q29udGVudCk7XG5cdGVsLnN0eWxlLmZpbHRlciA9ICdibHVyKDIuNXB4KSc7XG5cdGNvcHkuY2xhc3NMaXN0LmFkZCgnY29weScsICdib3gnKTtcblx0Y29weS50ZXh0Q29udGVudCA9ICdDb3BpZWQhJztcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb3B5KTtcblx0Y29weS5zdHlsZS50b3AgPSBgJHtlbC5vZmZzZXRUb3AgKyBlbC5vZmZzZXRIZWlnaHQgLyAyIC0gY29weS5vZmZzZXRIZWlnaHQgLyAyfXB4YDtcblx0Y29weS5zdHlsZS5sZWZ0ID0gYCR7ZWwub2Zmc2V0TGVmdCArIGVsLm9mZnNldFdpZHRoIC8gMiAtIGNvcHkub2Zmc2V0V2lkdGggLyAyfXB4YDtcblx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0ZWwuc3R5bGUuZmlsdGVyID0gJyc7XG5cdFx0Y29weS5yZW1vdmUoKTtcblx0fSwgMTAwMCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RJbmZvKHRleHQsIGljb24pIHtcblx0Y29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0Y29uc3QgaW5mb0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdGluZm9JY29uLnRleHRDb250ZW50ID0gaWNvbjtcblx0aW5mb0ljb24uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtaWNvbnMtb3V0bGluZWQnKTtcblx0aW5mby50ZXh0Q29udGVudCA9IHRleHQ7XG5cdGluZm8udGl0bGUgPSAnQ2xpY2sgdG8gY29weSc7XG5cdGluZm8uY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbmZvJyk7XG5cdGluZm8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb3B5VG9DbGlwYm9hcmQpO1xuXHRpbmZvLmluc2VydEJlZm9yZShpbmZvSWNvbiwgaW5mby5maXJzdENoaWxkKTtcblx0cmV0dXJuIGluZm87XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XG5cdGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5cdGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSAnTGVhdmUgdXMgeW91ciBlbWFpbCB0byByZWNlaXZlIGV4Y2x1c2l2ZSBwcm9tb3Rpb25zIGFuZCBkaXNjb3VudCBjb3Vwb25zISc7XG5cdGlucHV0LnR5cGUgPSAnZW1haWwnO1xuXHRpbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3MnO1xuXHRpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG5cdHN1Ym1pdC52YWx1ZSA9ICdTdWJzY3JpYmUnO1xuXHRzdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuXHRbaW5wdXQsIHN1Ym1pdF0uZm9yRWFjaChlbCA9PiBlbC5jbGFzc0xpc3QuYWRkKCdib3gnKSk7XG5cdFtwYXJhZ3JhcGgsIGlucHV0LCBzdWJtaXRdLmZvckVhY2goZWwgPT4gZm9ybS5hcHBlbmRDaGlsZChlbCkpO1xuXHRyZXR1cm4gZm9ybTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcblx0Y29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBjb250YWN0VXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgaW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBwaG9uZSA9IGNyZWF0ZUNvbnRhY3RJbmZvKCcrMS01NTUtNDQ0NC0zMzMnLCAncGhvbmUnKTtcblx0Y29uc3QgZW1haWwgPSBjcmVhdGVDb250YWN0SW5mbygnZmFrZW1haWxAYnVyZ2Vyc3RvcmUuY29tJywgJ2VtYWlsJyk7XG5cdGNvbnN0IGxvY2F0aW9uID0gY3JlYXRlQ29udGFjdEluZm8oJzE2MCBCcm9hZHdheSwgTmV3IFlvcmssIE5ZIDEwMDM4LCBVbml0ZWQgU3RhdGVzJywgJ3BsYWNlJyk7XG5cdGNvbnN0IGZvcm0gPSBjcmVhdGVGb3JtKCk7XG5cdGNvbnRhY3QuaWQgPSAnY29udGFjdCc7XG5cdGNvbnRhY3QuZGF0YXNldC5pZCA9IDI7XG5cdGNvbnRhY3RVcy5pZCA9ICdjb250YWN0LXVzJztcblx0Y29udGFjdFVzLnRleHRDb250ZW50ID0gJ0NvbnRhY3QgdXMhJztcblx0aW5mb0NvbnRhaW5lci5pZCA9ICdpbmZvLWNvbnRhaW5lcic7XG5cdFtwaG9uZSwgZW1haWwsIGxvY2F0aW9uXS5mb3JFYWNoKGVsID0+IGluZm9Db250YWluZXIuYXBwZW5kQ2hpbGQoZWwpKTtcblx0W2NvbnRhY3RVcywgaW5mb0NvbnRhaW5lciwgZm9ybV0uZm9yRWFjaChlbCA9PiBjb250YWN0LmFwcGVuZENoaWxkKGVsKSk7XG5cdHJldHVybiBjb250YWN0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0O1xuIiwiaW1wb3J0ICcuL2hvbWUuY3NzJztcbmltcG9ydCBCdXJnZXIgZnJvbSAnLi9idXJnZXIucG5nJztcblxuXG5mdW5jdGlvbiBjcmVhdGVIb21lKCkge1xuXHRjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblx0Y29uc3QgdGl0bGVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cdGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXHRjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblx0aG9tZS5pZCA9ICdob21lJztcblx0aG9tZS5kYXRhc2V0LmlkID0gMDtcblx0Y29udGFpbmVyLmlkID0gJ2NvbnRhaW5lcic7XG5cdHRpdGxlLmlkID0gJ3RpdGxlJztcblx0dGl0bGUudGV4dENvbnRlbnQgPSAnT3JkZXIgSnVpY3kgJiBTY3J1bW15IEZvb2QgJztcblx0dGl0bGVTcGFuLnRleHRDb250ZW50ID0gJ2FueXRpbWUhJztcblx0dGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVTcGFuKTtcblx0cGFyYWdyYXBoLmlkID0gJ2Rlc2NyaXB0aW9uJztcblx0cGFyYWdyYXBoLnRleHRDb250ZW50ID0gJ0p1c3QgY29uZmlybSB5b3VyIG9yZGVyIGFuZCBlbmpveSBvdXIgZGVsaWNpb3VzIGZhc3Rlc3QgZGVsaXZlcnkuJ1xuXHRidXR0b24uaWQgPSAnb3JkZXInO1xuXHRidXR0b24uY2xhc3NMaXN0LmFkZCgnYm94Jyk7XG5cdGJ1dHRvbi50ZXh0Q29udGVudCA9ICdPcmRlciBOb3cnO1xuXHRidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0YWJzLmNoaWxkTm9kZXNbMV0uY2xpY2soKSk7XG5cdFt0aXRsZSwgcGFyYWdyYXBoLCBidXR0b25dLmZvckVhY2goZWwgPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKGVsKSk7XG5cdGltZy5zcmMgPSBCdXJnZXI7XG5cdGhvbWUuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblx0aG9tZS5hcHBlbmRDaGlsZChpbWcpO1xuXHRyZXR1cm4gaG9tZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSG9tZTtcbiIsImltcG9ydCAnLi9tZW51LmNzcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb2RCb3goZm9vZCwgaSkge1xuXHRjb25zdCBmb29kQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBmb29kUHJpY2VPcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRjb25zdCBmb29kUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgZm9vZE9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdGZvb2RCb3guY2xhc3NMaXN0LmFkZCgnZm9vZCcsICdib3gnKTtcblx0Zm9vZEJveC5zdHlsZS5hbmltYXRpb24gPSBgJHtpICogMC4xfXMgaGlkZGVuLCAwLjg1cyBtb3ZlLWluICR7aSAqIDAuMX1zYFxuXHRmb29kTmFtZS50ZXh0Q29udGVudCA9IGZvb2QubmFtZTtcblx0Zm9vZE5hbWUuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xuXHRmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBmb29kLmRlc2NyaXB0aW9uO1xuXHRmb29kRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcblx0Zm9vZFByaWNlT3JkZXIuY2xhc3NMaXN0LmFkZCgncHJpY2Utb3JkZXInKTtcblx0Zm9vZFByaWNlLnRleHRDb250ZW50ID0gYCQke2Zvb2QucHJpY2V9YDtcblx0Zm9vZFByaWNlLmNsYXNzTGlzdC5hZGQoJ3ByaWNlJyk7XG5cdGZvb2RPcmRlci50ZXh0Q29udGVudCA9ICdPcmRlcic7XG5cdGZvb2RPcmRlci5jbGFzc0xpc3QuYWRkKCdvcmRlcicsICdib3gnKTtcblx0Zm9vZE9yZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGFicy5sYXN0RWxlbWVudENoaWxkLmNsaWNrKCkpO1xuXHRbZm9vZFByaWNlLCBmb29kT3JkZXJdLmZvckVhY2goZWwgPT4gZm9vZFByaWNlT3JkZXIuYXBwZW5kQ2hpbGQoZWwpKTtcblx0W2Zvb2ROYW1lLCBmb29kRGVzY3JpcHRpb24sIGZvb2RQcmljZU9yZGVyXS5mb3JFYWNoKGVsID0+IGZvb2RCb3guYXBwZW5kQ2hpbGQoZWwpKTtcblx0cmV0dXJuIGZvb2RCb3g7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG5cdGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0Y29uc3QgZm9vZE1lbnUgPSBbXG5cdFx0eyBuYW1lOiAnQ2xhc3NpYycsIGRlc2NyaXB0aW9uOiAnTGV0dHVjZSwgdG9tYXRvLCByZWQgb25pb24sIHBpY2tsZXMsIG11c3RhcmQsIGtldGNodXAsIG1heW8nLCBwcmljZTogMiB9LFxuXHRcdHsgbmFtZTogJ0RvdWJsZSBDbGFzc2ljJywgZGVzY3JpcHRpb246ICdUd28gZmxhbWUtZ3JpbGxlZCBiZWVmIHBhdHRpZXMsIGxldHR1Y2UsIHRvbWF0bywgcmVkIG9uaW9uLCBwaWNrbGVzLCBtdXN0YXJkLCBrZXRjaHVwLCBtYXlvJywgcHJpY2U6IDQgfSxcblx0XHR7IG5hbWU6ICdCbGFjayBKYWNrJywgZGVzY3JpcHRpb246ICdCbGFja2VuZWQgYmVlZiwgcGVwcGVyIGphY2sgY2hlZXNlLCBsZXR0dWNlLCB0b21hdG8sIGNyZW9sZSBtYXlvJywgcHJpY2U6IDMgfSxcblx0XHR7IG5hbWU6ICdCYWNvbiBDaGVkZGFyJywgZGVzY3JpcHRpb246ICdDaGVkZGFyIGNoZWVzZSwgYmFjb24sIGxldHR1Y2UsIHRvbWF0bywgcmVkIG9uaW9uLCBwaWNrbGVzLCBtdXN0YXJkLCBrZXRjaHVwLCBtYXlvJywgcHJpY2U6IDUgfSxcblx0XHR7IG5hbWU6ICdTb3V0aHdlc3QgQkJRJywgZGVzY3JpcHRpb246ICdDaGVkZGFyIGNoZWVzZSwgYmFjb24sIG9uaW9uIHN0cmF3cywgQkJRIHNhdWNlLCBjaGlwb3RsZSBtYXlvLCBsZXR0dWNlLCB0b21hdG8sIHBpY2tsZXMnLCBwcmljZTogOCB9LFxuXHRcdHsgbmFtZTogJ0JsYWNrICYgQmxldScsIGRlc2NyaXB0aW9uOiAnQmxhY2tlbmVkIGJlZWYsIGNydW1ibGVkIGJsdWUgY2hlZXNlLCBiYWNvbiwgbGV0dHVjZSwgdG9tYXRvLCByZWQgb25pb24sIG1heW8nLCBwcmljZTogNiB9LFxuXHRdXG5cdGNvbnN0IGZvb2RCb3hlcyA9IGZvb2RNZW51Lm1hcCgoZm9vZCwgaSkgPT4gY3JlYXRlRm9vZEJveChmb29kLCBpKSk7XG5cdG1lbnUuaWQgPSAnbWVudSc7XG5cdG1lbnUuZGF0YXNldC5pZCA9IDE7XG5cdGZvb2RCb3hlcy5mb3JFYWNoKGJveCA9PiBtZW51LmFwcGVuZENoaWxkKGJveCkpO1xuXHRyZXR1cm4gbWVudTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGNyZWF0ZUhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBjcmVhdGVNZW51IGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL2xvZ28ucG5nJztcblxuY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoKSB7XG5cdGNvbnN0IHRhYnMgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XG5cdGNvbnN0IGxpc3RJdGVtcyA9IFtdO1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IHRhYnMubGVuZ3RoOyBpKyspIHtcblx0XHRjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cdFx0bGkudGV4dENvbnRlbnQgPSB0YWJzW2ldO1xuXHRcdGxpLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuXHRcdGxpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY3JlYXRlQ29udGVudChpKSk7XG5cdFx0bGlzdEl0ZW1zLnB1c2gobGkpO1xuXHR9XG5cdHJldHVybiBsaXN0SXRlbXM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcblx0Y29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG5cdGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRjb25zdCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cdGltZy5pZCA9ICdsb2dvJztcblx0aW1nLnNyYyA9IExvZ287XG5cdHVsLmlkID0gJ3RhYnMnO1xuXHRjcmVhdGVUYWJzKCkuZm9yRWFjaCh0YWIgPT4gdWwuYXBwZW5kQ2hpbGQodGFiKSk7XG5cdGltZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHVsLmZpcnN0RWxlbWVudENoaWxkLmNsaWNrKCkpO1xuXHRoZWFkZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblx0aGVhZGVyLmFwcGVuZENoaWxkKHVsKTtcblx0cmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gc2VsZWN0VGFiKGUpIHtcblx0aWYgKGUudGFyZ2V0ICE9PSB0aGlzKSB7XG5cdFx0Zm9yIChjb25zdCB0YWIgb2YgdGhpcy5jaGlsZE5vZGVzKSB7XG5cdFx0XHRpZiAodGFiID09PSBlLnRhcmdldCkge1xuXHRcdFx0XHR0YWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KGkpIHtcblx0Y29uc3QgY3JlYXRlRnVuY3Rpb25zID0gW2NyZWF0ZUhvbWUsIGNyZWF0ZU1lbnUsIGNyZWF0ZUNvbnRhY3RdO1xuXHRpZiAoIXRhYkNvbnRlbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcblx0XHR0YWJDb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUZ1bmN0aW9uc1tpXSgpKTtcblx0fSBlbHNlIGlmICh0YWJDb250ZW50LmZpcnN0RWxlbWVudENoaWxkLmRhdGFzZXQuaWQgIT0gaSkge1xuXHRcdHRhYkNvbnRlbnQucmVwbGFjZUNoaWxkKGNyZWF0ZUZ1bmN0aW9uc1tpXSgpLCB0YWJDb250ZW50LmZpcnN0RWxlbWVudENoaWxkKTtcblx0fVxufVxuXG5kb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjcmVhdGVIZWFkZXIoKSwgdGFiQ29udGVudCk7XG50YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VsZWN0VGFiKTtcbnRhYnMuZmlyc3RFbGVtZW50Q2hpbGQuY2xpY2soKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==