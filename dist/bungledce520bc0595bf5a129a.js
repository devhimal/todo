/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/styles.css":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/styles.css ***!
  \*******************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: orangered;
}

::selection {
  color: #fff;
  background: #3c87ff;
}

.wrapper {
  height: 100%;
  max-width: 1366px;
  padding-top: 50px;
  margin: 0px auto;
  background: #fff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.task-input {
  height: 52px;
  padding: 0 50px;
  position: relative;
}

.task-input input {
  height: 100%;
  width: 100%;
  outline: none;
  font-size: 18px;
  border-radius: 5px;
  padding: 0 20px 0 10px;
  border: 1px solid #bfbfbf;
}

.task-input input:focus,
.task-input input.active {
  border: 1px solid orangered;
}

.task-input input::placeholder {
  color: #bfbfbf;
}

.controls,
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.controls {
  margin: 18px 50px;
  padding: 10px 0px;
  border-bottom: 1px solid orangered;
}

.filters span {
  margin: 0 8px;
  font-size: 17px;
  color: #444444;
  cursor: pointer;
}

.filters span:first-child {
  margin-left: 0;
}

.filters span.active {
  color: orangered;
}

.controls .clear-btn {
  border: none;
  opacity: 0.6;
  outline: none;
  color: #fff;
  cursor: pointer;
  font-size: 13px;
  padding: 7px 13px;
  border-radius: 4px;
  letter-spacing: 0.3px;
  transition: transform 0.25s ease;
  background-color: orangered;
}

.clear-btn.active {
  opacity: 0.9;
}

.clear-btn:active {
  transform: scale(0.93);
}

.clear-btn:hover {
  cursor: pointer;
}

.task-box {
  margin-top: 20px;
  margin-right: 5px;
  padding: 0 50px 10px 50px;
}

.task-box.overflow {
  overflow-y: auto;
  max-height: 300px;
}

.task-box::-webkit-scrollbar {
  width: 5px;
}

.task-box::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 25px;
}

.task-box::-webkit-scrollbar-thumb {
  background: #e6e6e6;
  border-radius: 25px;
}

.task-box .task {
  list-style: none;
  font-size: 17px;
  margin-bottom: 18px;
  padding-bottom: 16px;
  align-items: flex-start;
  border-bottom: 1px solid #ccc;
}

.task-box .task:last-child {
  margin-bottom: 0;
  border-bottom: 0;
  padding-bottom: 0;
}

.task-box .task label {
  display: flex;
  align-items: flex-start;
}

.task label input {
  margin-top: 7px;
  accent-color: orangered;
}

.task label p {
  user-select: none;
  margin-left: 12px;
  word-wrap: break-word;
}

.task label p.checked {
  text-decoration: line-through;
}

.task-box .settings {
  position: relative;
}

.settings :where(i, li) {
  cursor: pointer;
}

.settings .task-menu {
  z-index: 10;
  right: -5px;
  bottom: -65px;
  padding: 5px 0;
  background: #fff;
  position: absolute;
  border-radius: 4px;
  transform: scale(0);
  transform-origin: top right;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
}

.task-box .task:last-child .task-menu {
  bottom: 0;
  transform-origin: bottom right;
}

.task-box .task:first-child .task-menu {
  bottom: -65px;
  transform-origin: top right;
}

.task-menu.show {
  transform: scale(1);
}

.task-menu li {
  height: 25px;
  font-size: 16px;
  margin-bottom: 2px;
  padding: 17px 15px;
  cursor: pointer;
  justify-content: flex-start;
}

.task-menu li:last-child {
  margin-bottom: 0;
}

.settings li:hover {
  background: #f5f5f5;
}

.settings li i {
  padding-right: 8px;
}

@media (max-width: 400px) {
  .wrapper {
    padding: 20px 0;
  }
  .task-input input {
    padding: 0px 10px 0px 8px;
  }
  .controls {
    margin: 5px 20px;
  }
  .controls .filters {
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
  .filters span {
    margin: 0px;
  }
  .task-input {
    padding: 0 20px;
  }
  .task-box {
    padding: 0px 20px;
  }
  .task label input {
    margin-top: 4px;
  }
}
@media (min-width: 1367px) {
  .wrapper {
    margin: 50px auto;
    border-radius: 10px;
  }
}`, "",{"version":3,"sources":["webpack://./style/styles.css"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,WAAA;EACA,sBAAA;EACA,kCAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,gBAAA;EACA,2BAAA;AACF;;AACA;EACE,WAAA;EACA,mBAAA;AAEF;;AAAA;EACE,YAAA;EACA,iBAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;EACA,0CAAA;AAGF;;AADA;EACE,YAAA;EACA,eAAA;EACA,kBAAA;AAIF;;AADA;EACE,YAAA;EACA,WAAA;EACA,aAAA;EACA,eAAA;EACA,kBAAA;EACA,sBAAA;EACA,yBAAA;AAIF;;AADA;;EAEE,2BAAA;AAIF;;AAFA;EACE,cAAA;AAKF;;AAHA;;EAEE,aAAA;EACA,mBAAA;EACA,8BAAA;AAMF;;AAJA;EACE,iBAAA;EACA,iBAAA;EACA,kCAAA;AAOF;;AALA;EACE,aAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;AAQF;;AANA;EACE,cAAA;AASF;;AAPA;EACE,gBAAA;AAUF;;AARA;EACE,YAAA;EACA,YAAA;EACA,aAAA;EACA,WAAA;EACA,eAAA;EACA,eAAA;EACA,iBAAA;EACA,kBAAA;EACA,qBAAA;EACA,gCAAA;EACA,2BAAA;AAWF;;AATA;EACE,YAAA;AAYF;;AAVA;EACE,sBAAA;AAaF;;AAXA;EACE,eAAA;AAcF;;AAXA;EACE,gBAAA;EACA,iBAAA;EACA,yBAAA;AAcF;;AAZA;EACE,gBAAA;EACA,iBAAA;AAeF;;AAbA;EACE,UAAA;AAgBF;;AAdA;EACE,mBAAA;EACA,mBAAA;AAiBF;;AAfA;EACE,mBAAA;EACA,mBAAA;AAkBF;;AAhBA;EACE,gBAAA;EACA,eAAA;EACA,mBAAA;EACA,oBAAA;EACA,uBAAA;EACA,6BAAA;AAmBF;;AAjBA;EACE,gBAAA;EACA,gBAAA;EACA,iBAAA;AAoBF;;AAlBA;EACE,aAAA;EACA,uBAAA;AAqBF;;AAnBA;EACE,eAAA;EACA,uBAAA;AAsBF;;AApBA;EACE,iBAAA;EACA,iBAAA;EACA,qBAAA;AAuBF;;AArBA;EACE,6BAAA;AAwBF;;AAtBA;EACE,kBAAA;AAyBF;;AAvBA;EACE,eAAA;AA0BF;;AAxBA;EACE,WAAA;EACA,WAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,2BAAA;EACA,uCAAA;EACA,+BAAA;AA2BF;;AAzBA;EACE,SAAA;EACA,8BAAA;AA4BF;;AA1BA;EACE,aAAA;EACA,2BAAA;AA6BF;;AA3BA;EACE,mBAAA;AA8BF;;AA5BA;EACE,YAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,2BAAA;AA+BF;;AA7BA;EACE,gBAAA;AAgCF;;AA9BA;EACE,mBAAA;AAiCF;;AA/BA;EACE,kBAAA;AAkCF;;AA/BA;EAEE;IACE,eAAA;EAiCF;EA9BF;IACI,yBAAA;EAgCF;EA9BF;IACE,gBAAA;EAgCA;EA7BF;IACI,aAAA;IACA,sBAAA;IACA,YAAA;EA+BF;EA5BA;IACE,WAAA;EA8BF;EA5BA;IACE,eAAA;EA8BF;EA3BA;IACE,iBAAA;EA6BF;EA3BA;IACE,eAAA;EA6BF;AACF;AAzBA;EACE;IACE,iBAAA;IACA,mBAAA;EA2BF;AACF","sourcesContent":["* {\r\n  padding: 0px;\r\n  margin: 0px;\r\n  box-sizing: border-box;\r\n  font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100vh;\r\n  overflow: hidden;\r\n  background-color: orangered;\r\n}\r\n::selection {\r\n  color: #fff;\r\n  background: #3c87ff;\r\n}\r\n.wrapper {\r\n  height: 100%;\r\n  max-width: 1366px;\r\n  padding-top: 50px;\r\n  margin: 0px auto;\r\n  background: #fff;\r\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\r\n}\r\n.task-input {\r\n  height: 52px;\r\n  padding: 0 50px;\r\n  position: relative;\r\n}\r\n\r\n.task-input input {\r\n  height: 100%;\r\n  width: 100%;\r\n  outline: none;\r\n  font-size: 18px;\r\n  border-radius: 5px;\r\n  padding: 0 20px 0 10px;\r\n  border: 1px solid #bfbfbf;\r\n}\r\n\r\n.task-input input:focus,\r\n.task-input input.active {\r\n  border: 1px solid orangered;\r\n}\r\n.task-input input::placeholder {\r\n  color: #bfbfbf;\r\n}\r\n.controls,\r\nli {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.controls {\r\n  margin: 18px 50px;\r\n  padding: 10px 0px;\r\n  border-bottom: 1px solid orangered;\r\n}\r\n.filters span {\r\n  margin: 0 8px;\r\n  font-size: 17px;\r\n  color: #444444;\r\n  cursor: pointer;\r\n}\r\n.filters span:first-child {\r\n  margin-left: 0;\r\n}\r\n.filters span.active {\r\n  color: orangered;\r\n}\r\n.controls .clear-btn {\r\n  border: none;\r\n  opacity: 0.6;\r\n  outline: none;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-size: 13px;\r\n  padding: 7px 13px;\r\n  border-radius: 4px;\r\n  letter-spacing: 0.3px;\r\n  transition: transform 0.25s ease;\r\n  background-color: orangered;\r\n}\r\n.clear-btn.active {\r\n  opacity: 0.9;\r\n}\r\n.clear-btn:active {\r\n  transform: scale(0.93);\r\n}\r\n.clear-btn:hover {\r\n  cursor: pointer;\r\n}\r\n\r\n.task-box {\r\n  margin-top: 20px;\r\n  margin-right: 5px;\r\n  padding: 0 50px 10px 50px;\r\n}\r\n.task-box.overflow {\r\n  overflow-y: auto;\r\n  max-height: 300px;\r\n}\r\n.task-box::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n.task-box::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n  border-radius: 25px;\r\n}\r\n.task-box::-webkit-scrollbar-thumb {\r\n  background: #e6e6e6;\r\n  border-radius: 25px;\r\n}\r\n.task-box .task {\r\n  list-style: none;\r\n  font-size: 17px;\r\n  margin-bottom: 18px;\r\n  padding-bottom: 16px;\r\n  align-items: flex-start;\r\n  border-bottom: 1px solid #ccc;\r\n}\r\n.task-box .task:last-child {\r\n  margin-bottom: 0;\r\n  border-bottom: 0;\r\n  padding-bottom: 0;\r\n}\r\n.task-box .task label {\r\n  display: flex;\r\n  align-items: flex-start;\r\n}\r\n.task label input {\r\n  margin-top: 7px;\r\n  accent-color: orangered;\r\n}\r\n.task label p {\r\n  user-select: none;\r\n  margin-left: 12px;\r\n  word-wrap: break-word;\r\n}\r\n.task label p.checked {\r\n  text-decoration: line-through;\r\n}\r\n.task-box .settings {\r\n  position: relative;\r\n}\r\n.settings :where(i, li) {\r\n  cursor: pointer;\r\n}\r\n.settings .task-menu {\r\n  z-index: 10;\r\n  right: -5px;\r\n  bottom: -65px;\r\n  padding: 5px 0;\r\n  background: #fff;\r\n  position: absolute;\r\n  border-radius: 4px;\r\n  transform: scale(0);\r\n  transform-origin: top right;\r\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);\r\n  transition: transform 0.2s ease;\r\n}\r\n.task-box .task:last-child .task-menu {\r\n  bottom: 0;\r\n  transform-origin: bottom right;\r\n}\r\n.task-box .task:first-child .task-menu {\r\n  bottom: -65px;\r\n  transform-origin: top right;\r\n}\r\n.task-menu.show {\r\n  transform: scale(1);\r\n}\r\n.task-menu li {\r\n  height: 25px;\r\n  font-size: 16px;\r\n  margin-bottom: 2px;\r\n  padding: 17px 15px;\r\n  cursor: pointer;\r\n  justify-content: flex-start;\r\n}\r\n.task-menu li:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.settings li:hover {\r\n  background: #f5f5f5;\r\n}\r\n.settings li i {\r\n  padding-right: 8px;\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  \r\n  .wrapper {\r\n    padding: 20px 0;\r\n  }\r\n  \r\n.task-input input{\r\n    padding: 0px 10px 0px 8px;\r\n}\r\n.controls{\r\n  margin: 5px 20px;\r\n}\r\n\r\n.controls .filters{\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 0px;\r\n}\r\n\r\n  .filters span {\r\n    margin: 0px;\r\n  }\r\n  .task-input {\r\n    padding: 0 20px;\r\n  }\r\n\r\n  .task-box {\r\n    padding: 0px 20px;\r\n  }\r\n  .task label input {\r\n    margin-top: 4px;\r\n  }\r\n}\r\n\r\n\r\n@media (min-width: 1367px){\r\n  .wrapper{\r\n    margin: 50px auto;\r\n    border-radius: 10px;\r\n  }\r\n}"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./style/styles.css":
/*!**************************!*\
  !*** ./style/styles.css ***!
  \**************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./style/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./assets/himal.png":
/*!**************************!*\
  !*** ./assets/himal.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "himal.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/styles.css */ "./style/styles.css");
/* harmony import */ var _assets_himal_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/himal.png */ "./assets/himal.png");


var taskInput = document.querySelector(".task-input input"),
  filters = document.querySelectorAll(".filters span"),
  clearAll = document.querySelector(".clear-btn"),
  taskBox = document.querySelector(".task-box");
var editId,
  isEditTask = false,
  todos = JSON.parse(localStorage.getItem("todo-list"));
filters.forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelector("span.active").classList.remove("active");
    btn.classList.add("active");
    showTodo(btn.id);
  });
});
function showTodo(filter) {
  var liTag = "";
  if (todos) {
    todos.forEach(function (todo, id) {
      var completed = todo.status == "completed" ? "checked" : "";
      if (filter == todo.status || filter == "all") {
        liTag += "<li class=\"task\">\n                            <label for=\"".concat(id, "\">\n                                <input onclick=\"updateStatus(this)\" type=\"checkbox\" id=\"").concat(id, "\" ").concat(completed, ">\n                                <p class=\"").concat(completed, "\">").concat(todo.name, "</p>\n                            </label>\n                            <div class=\"settings\">\n                                <i onclick=\"showMenu(this)\" class=\"uil uil-ellipsis-h\"></i>\n                                <ul class=\"task-menu\">\n                                    <li onclick='editTask(").concat(id, ", \"").concat(todo.name, "\")'><i class=\"uil uil-pen\"></i>Edit</li>\n                                    <li onclick='deleteTask(").concat(id, ", \"").concat(filter, "\")'><i class=\"uil uil-trash\"></i>Delete</li>\n                                </ul>\n                            </div>\n                        </li>");
      }
    });
  }
  taskBox.innerHTML = liTag || "<span>You don't have any task here</span>";
  var checkTask = taskBox.querySelectorAll(".task");
  !checkTask.length ? clearAll.classList.remove("active") : clearAll.classList.add("active");
  taskBox.offsetHeight >= 300 ? taskBox.classList.add("overflow") : taskBox.classList.remove("overflow");
}
showTodo("all");
function showMenu(selectedTask) {
  var menuDiv = selectedTask.parentElement.lastElementChild;
  menuDiv.classList.add("show");
  document.addEventListener("click", function (e) {
    if (e.target.tagName != "I" || e.target != selectedTask) {
      menuDiv.classList.remove("show");
    }
  });
}
function updateStatus(selectedTask) {
  var taskName = selectedTask.parentElement.lastElementChild;
  if (selectedTask.checked) {
    taskName.classList.add("checked");
    todos[selectedTask.id].status = "completed";
  } else {
    taskName.classList.remove("checked");
    todos[selectedTask.id].status = "pending";
  }
  localStorage.setItem("todo-list", JSON.stringify(todos));
}
function editTask(taskId, textName) {
  editId = taskId;
  isEditTask = true;
  taskInput.value = textName;
  taskInput.focus();
  taskInput.classList.add("active");
}
function deleteTask(deleteId, filter) {
  isEditTask = false;
  todos.splice(deleteId, 1);
  localStorage.setItem("todo-list", JSON.stringify(todos));
  showTodo(filter);
}
clearAll.addEventListener("click", function () {
  isEditTask = false;
  todos.splice(0, todos.length);
  localStorage.setItem("todo-list", JSON.stringify(todos));
  showTodo();
});
taskInput.addEventListener("keyup", function (e) {
  var userTask = taskInput.value.trim();
  if (e.key == "Enter" && userTask) {
    if (!isEditTask) {
      todos = !todos ? [] : todos;
      var taskInfo = {
        name: userTask,
        status: "pending"
      };
      todos.push(taskInfo);
    } else {
      isEditTask = false;
      todos[editId].name = userTask;
    }
    taskInput.value = "";
    localStorage.setItem("todo-list", JSON.stringify(todos));
    showTodo(document.querySelector("span.active").id);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bungledce520bc0595bf5a129a.js.map