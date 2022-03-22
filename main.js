/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --primary-dark: #333;\\n  --background-grey: #ededed;\\n  --background-color: rgba(255, 255, 255, 0);\\n  --grid-size: 16;\\n  --cube-size: 30px;\\n}\\n\\nbody {\\n  font-family: 'Poppins';\\n  margin: 0px;\\n  color: var(--primary-dark);\\n  background-color: var(--background-grey);\\n}\\n\\n#header {\\n  /* border: 1px solid blue; */\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 70px;\\n  height: 100px;\\n  font-weight: bold;\\n  letter-spacing: 0.1em;\\n}\\n\\n#main {\\n  /* height: 100vh;  */\\n  position: relative;\\n}\\n\\n#grid-page {\\n  /* border: 1px solid black; */\\n  display: flex;\\n\\n  justify-content: center;\\n  align-items: center;\\n  gap: 125px;\\n  padding: 10px;\\n}\\n\\n#grid-page .grid-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 10px;\\n}\\n\\n.grid-container .grid-container-title {\\n  font-size: 28px;\\n}\\n\\n.grid {\\n  /* height: 100px; */\\n  /* width: 100px; */\\n  /* border: 1px solid black; */\\n\\n  display: grid;\\n  grid-template-columns: repeat(calc(var(--grid-size) + 1), var(--cube-size));\\n  grid-template-rows: repeat(calc(var(--grid-size) + 1), var(--cube-size));\\n\\n  /* position: absolute; */\\n  /* top: calc(50% - (var(--grid-size) * var(--cube-size))/2); */\\n  /* left: calc(50% - (var(--grid-size) * var(--cube-size))/2); */\\n\\n}\\n\\n.cube {\\n  width: var(--cube-size);\\n  height: var(--cube-size);\\n  border: 1px solid lightgray;\\n  cursor: pointer;\\n\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.cube.miss {\\n  background-color: lightgray;\\n  border: 1px solid transparent;\\n  z-index: 1;\\n}\\n\\n.cube.set {\\n  background-color: #333;\\n  border: 1px solid #333;\\n  z-index: 1;\\n}\\n\\n.cube.hit {\\n  background-color: red;\\n  border: 1px solid red;\\n  z-index: 2;\\n}\\n\\n#overlay {\\n  position: fixed;\\n  opacity: 0;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  pointer-events: none;\\n}\\n\\n#overlay.active {\\n  opacity: 1;\\n  pointer-events: all;\\n}\\n\\n#start {\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%) scale(0);  /* Hidden */\\n  z-index: 10;\\n  background-color: var(--background-grey);\\n\\n  padding: 20px;\\n  max-width: 80%;\\n  border-radius: 10px;\\n\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 20px;\\n  cursor: pointer;\\n}\\n\\n#start.active {\\n  transform: translate(-50%, -50%) scale(1);\\n}\\n\\n#rotate-button {\\n  width: 90px;\\n  height: 40px;\\n  /* background-color: #lightgrey; */\\n}\\n\\n.label {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', (0,_modules_UI__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _features__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features */ \"./src/modules/features.js\");\n\n\nconst content = document.querySelector('.content');\nconst gridSize = 16;\n\nfunction generateGrid(title, id) {\n  const gridContainer = document.createElement('div');\n  gridContainer.classList.add('grid-container');\n\n  const gridTitle = document.createElement('div');\n  gridTitle.classList.add('grid-container-title');\n  gridTitle.textContent = title;\n  gridContainer.appendChild(gridTitle);\n\n  const grid = document.createElement('div');\n  grid.classList.add('grid');\n  grid.setAttribute('id', id);\n\n  // for (let i = 0; i < gridSize; i += 1) {\n  //   const row = document.createElement('div');\n  //   row.textContent = i;\n  //   grid.appendChild(row);\n  // }\n\n  for (let y = -1; y < gridSize; y += 1) {\n    for (let x = -1; x < gridSize; x += 1) {\n      if (x === -1 && y === -1) {\n        const label = document.createElement('div');\n        label.classList.add('label');\n        grid.appendChild(label);\n      } else if (x !== -1 && y === -1) {\n        const label = document.createElement('div');\n        label.classList.add('label');\n        label.textContent = x;\n        grid.appendChild(label);\n      } else if (x === -1 && y !== -1) {\n        const label = document.createElement('div');\n        label.classList.add('label');\n        label.textContent = y;\n        grid.appendChild(label);\n      } else {\n        const cube = document.createElement('div');\n        cube.setAttribute('data-key', `x${x}-y${y}`);\n        cube.classList.add('cube');\n        grid.appendChild(cube);\n      }\n    }\n  }\n  gridContainer.appendChild(grid);\n\n  return gridContainer;\n}\n\nfunction addGridPage() {\n  const gridPage = document.createElement('div');\n  gridPage.setAttribute('id', 'grid-page');\n\n  gridPage.appendChild(generateGrid('Player', 'player1-grid'));\n  gridPage.appendChild(generateGrid('Computer', 'computer-grid'));\n\n  return gridPage;\n}\n\nfunction loadHeader() {\n  const header = document.createElement('div');\n  header.setAttribute('id', 'header');\n  header.textContent = 'BATTLESHIP';\n\n  content.appendChild(header);\n}\n\nfunction loadMain() {\n  const main = document.createElement('div');\n  main.setAttribute('id', 'main');\n\n  main.appendChild(addGridPage());\n  content.appendChild(main);\n}\n\nfunction loadStartPage() {\n  // Create overlay\n  const overlay = document.createElement('div');\n  overlay.setAttribute('id', 'overlay');\n  overlay.classList.add('active');\n  content.appendChild(overlay);\n\n  // Create start page to place ships\n  const start = document.createElement('div');\n  start.setAttribute('id', 'start');\n  start.classList.add('active');\n\n  // Add grid\n  start.appendChild(generateGrid('', 'start-grid'));\n\n  // Add rotate button\n  const button = document.createElement('button');\n  button.setAttribute('id', 'rotate-button');\n  button.textContent = 'Rotate';\n  start.appendChild(button);\n\n  content.appendChild(start);\n}\n\nfunction loadPage() {\n  loadHeader();\n  loadMain();\n  loadStartPage();\n  (0,_features__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n\n//# sourceURL=webpack://battleship/./src/modules/UI.js?");

/***/ }),

/***/ "./src/modules/features.js":
/*!*********************************!*\
  !*** ./src/modules/features.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst { Player } = __webpack_require__(/*! ./player */ \"./src/modules/player.js\");\nconst { Gameboard } = __webpack_require__(/*! ./gameboard */ \"./src/modules/gameboard.js\");\n\n// Initialize Players and Gameboards\nconst p1 = Player();\nconst p2 = Player();\n\nconst board1 = Gameboard();\nconst board2 = Gameboard();\n\n// const playerTurn = 1;\n\nconst ship = {\n  destroyer: 2,\n  submarine: 3,\n  cruiser: 3,\n  battleship: 4,\n  carrier: 5,\n};\n\n// Ships to be placed on player 1's board\nconst shipyard = [\n  { length: ship.destroyer, horizontal: true },\n  { length: ship.submarine, horizontal: true },\n  { length: ship.cruiser, horizontal: true },\n  { length: ship.battleship, horizontal: true },\n  { length: ship.carrier, horizontal: true },\n];\n\nfunction getCubeCoordinate(doc) {\n  const childID = doc.getAttribute('data-key');\n  const regex = /x([0-9]+)-y([0-9]+)/;\n  const results = {\n    x: parseInt(regex.exec(childID)[1], 10),\n    y: parseInt(regex.exec(childID)[2], 10),\n  };\n  return results;\n}\n\nfunction refreshGrid(board) {\n  const missedList = board.getMissedList();\n  const hitList = board.getHitList();\n  console.log(hitList);\n\n  missedList.forEach((miss) => {\n    const cubes = document.querySelectorAll(`div[data-key=\"x${miss.x}-y${miss.y}\"]`);\n    cubes.forEach((cube) => {\n      if (cube.parentNode.getAttribute('id') === 'player1-grid') {\n        cube.classList.add('miss');\n      }\n    });\n  });\n\n  hitList.forEach((hit) => {\n    const cubes = document.querySelectorAll(`div[data-key=\"x${hit.x}-y${hit.y}\"]`);\n    cubes.forEach((cube) => {\n      if (cube.parentNode.getAttribute('id') === 'player1-grid') {\n        cube.classList.add('hit');\n        // cube.classList.add('set');\n      }\n    });\n  });\n}\n\nfunction mouseClick() {\n  const childID = this.getAttribute('data-key');\n  const parentID = this.parentNode.getAttribute('id');\n\n  const regex = /x([0-9]+)-y([0-9]+)/;\n  const results = {\n    x: parseInt(regex.exec(childID)[1], 10),\n    y: parseInt(regex.exec(childID)[2], 10),\n  };\n\n  const gridNode = document.querySelector(`#${parentID}`);\n  const cubeNode = gridNode.querySelector(`div[data-key=\"${childID}\"]`);\n\n  // Ignore click if previously clicked\n  // if (cubeNode.classList.contains('hit') || cubeNode.classList.contains('miss')) {\n  //   return;\n  // }\n\n  if (board2.alreadyHit(results.x, results.y)) {\n    return;\n  }\n\n  if (p1.attack(board2, results.x, results.y)) {\n    cubeNode.classList.add('hit');\n    // console.log('Hit!');\n  } else {\n    cubeNode.classList.add('miss');\n    // console.log('Miss!');\n  }\n\n  if (!p2.randomAttack(board1)) {\n    console.log('No more option!');\n  }\n\n  refreshGrid(board1);\n}\n\n// Add grid functions\nfunction runGame() {\n  const grids = document.querySelectorAll('.grid');\n  grids.forEach((grid) => {\n    if (grid.getAttribute('id') === 'computer-grid') {\n      const cubes = grid.childNodes;\n      cubes.forEach((cube) => {\n        cube.addEventListener('click', mouseClick, false);\n      });\n    }\n  });\n}\n\nfunction displayShip() {\n  if (shipyard.length === 0) { return; }\n  const coordinate = getCubeCoordinate(this);\n\n  const parentID = this.parentNode.getAttribute('id');\n  const gridNode = document.querySelector(`#${parentID}`);\n  gridNode.childNodes.forEach((cube) => {\n    cube.classList.remove('miss');\n  });\n\n  const currentShip = shipyard[shipyard.length - 1];\n\n  for (let i = 0; i < currentShip.length; i += 1) {\n    const cubes = currentShip.horizontal\n      ? document.querySelectorAll(`div[data-key=\"x${coordinate.x + i}-y${coordinate.y}\"]`)\n      : document.querySelectorAll(`div[data-key=\"x${coordinate.x}-y${coordinate.y + i}\"]`);\n\n    cubes.forEach((cube) => {\n      if (cube.parentNode.getAttribute('id') === 'start-grid') {\n        cube.classList.add('miss');\n      }\n    });\n  }\n}\n\nfunction generateRandomCoord(currentShip) {\n  let xPos;\n  let yPos;\n  let randomBoolean;\n  let isConflicted;\n\n  do {\n    xPos = Math.floor(Math.random() * board2.getBoardSize());\n    yPos = Math.floor(Math.random() * board2.getBoardSize());\n    randomBoolean = Math.random() < 0.5;\n\n    isConflicted = board2.isConflict(\n      xPos,\n      yPos,\n      currentShip.length,\n      randomBoolean,\n    );\n  } while (isConflicted);\n\n  return {\n    x: parseInt(xPos, 10),\n    y: parseInt(yPos, 10),\n    horizontal: randomBoolean,\n  };\n}\n\nfunction placeShips() {\n  // Ignore if no ships left to place\n  if (shipyard.length === 0) { return; }\n\n  // Initialize\n  const currentShip = shipyard[shipyard.length - 1];\n  const coordinate = getCubeCoordinate(this);\n\n  const isConflicted = board1.isConflict(\n    coordinate.x,\n    coordinate.y,\n    currentShip.length,\n    currentShip.horizontal,\n  );\n\n  // If ship placement is not conflicing with existing ship, place on board\n  if (!isConflicted) {\n    for (let i = 0; i < currentShip.length; i += 1) {\n      const cubes = currentShip.horizontal\n        ? document.querySelectorAll(`div[data-key=\"x${coordinate.x + i}-y${coordinate.y}\"]`)\n        : document.querySelectorAll(`div[data-key=\"x${coordinate.x}-y${coordinate.y + i}\"]`);\n\n      cubes.forEach((cube) => {\n        if (cube.parentNode.getAttribute('id') !== 'computer-grid') {\n          cube.classList.add('set');\n        }\n      });\n    }\n\n    // Place ship on Player 1 board\n    board1.placeShip(coordinate.x, coordinate.y, currentShip.length, currentShip.horizontal);\n    shipyard.pop();\n\n    // Place ship on Computer board randomly\n    const compCoord = generateRandomCoord(currentShip);\n    console.log(compCoord.x, compCoord.y, compCoord.horizontal);\n    board2.placeShip(compCoord.x, compCoord.y, currentShip.length, compCoord.horizontal);\n\n    // Remove UI once all Player 1 ships are placed\n    if (shipyard.length === 0) {\n      const overlay = document.querySelector('#overlay');\n      const start = document.querySelector('#start');\n\n      overlay.classList.remove('active');\n      start.classList.remove('active');\n    }\n  }\n}\n\nfunction addRotateFeature() {\n  const button = document.querySelector('#rotate-button');\n  button.addEventListener('click', () => {\n    if (shipyard.length === 0) { return; }\n    const currentShip = shipyard[shipyard.length - 1];\n    currentShip.horizontal = !currentShip.horizontal;\n  });\n}\n\n// Add start functions for initial ship placement\nfunction runSetup() {\n  addRotateFeature();\n\n  const grid = document.querySelector('#start-grid');\n  const cubes = grid.childNodes;\n  cubes.forEach((cube) => {\n    if (!(cube.classList.contains('label'))) {\n      cube.addEventListener('mouseover', displayShip, false);\n      cube.addEventListener('click', placeShips, false);\n    }\n  });\n}\n\nfunction loadFeatures() {\n  runGame();\n  runSetup();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadFeatures);\n\n\n//# sourceURL=webpack://battleship/./src/modules/features.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const myFunctions = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\nconst { Ship } = myFunctions;\n\nconst Gameboard = () => {\n  const size = 16;\n  const shipList = [];\n  const missedList = [];\n  const hitList = [];\n\n  // Initialize board as 2D array\n  const board = [];\n  for (let row = 0; row < size; row += 1) {\n    board[row] = new Array(size).fill(0);\n  }\n\n  const getMissedList = () => missedList;\n  const getHitList = () => hitList;\n  const getBoardSize = () => size;\n\n  const isBoardFull = () => {\n    const totalHits = missedList.length + hitList.length;\n    if (totalHits === size * size) return true;\n    return false;\n  };\n\n  const isConflict = (xPos, yPos, length, horizontal = false) => {\n    if (horizontal && (xPos + length > size)) { return true; }\n    if (!horizontal && (yPos + length > size)) { return true; }\n\n    for (let i = 0; i < length; i += 1) {\n      if (horizontal) {\n        if (board[xPos + i][yPos] === 1) {\n          return true;\n        }\n      } else if (board[xPos][yPos + i] === 1) {\n        return true;\n      }\n    }\n    return false;\n  };\n\n  const placeShip = (xPos, yPos, length, horizontal = false) => {\n    // Check that input coordinates don't conflict with existing ship location\n    if (typeof (xPos) !== 'number' || typeof (yPos) !== 'number') {\n      throw new Error('Invalid coordinates - not a number');\n    }\n\n    if (xPos < 0 || yPos < 0) {\n      throw new Error('Invalid coordinates - no negative values');\n    }\n\n    // Check if ship placement conflicts with existing ships\n    if (isConflict(xPos, yPos, length, horizontal)) { return false; }\n\n    // Initialize ship\n    const ship = Ship(length);\n    ship.setHorizontal(horizontal);\n    ship.setCoordinate(xPos, yPos);\n\n    // Place ship on board\n    for (let i = 0; i < length; i += 1) {\n      if (horizontal) {\n        board[xPos + i][yPos] = 1;\n      } else {\n        board[xPos][yPos + i] = 1;\n      }\n    }\n\n    shipList.push(ship);\n    return true;\n  };\n\n  // Print out ships\n  const displayShips = () => shipList.forEach((ship) => {\n    console.log(ship.getCoordinate(), `Length: ${ship.getLength()}`);\n  });\n\n  // Check if position has already been hit\n  const alreadyHit = (xPos, yPos) => {\n    const missedFound = missedList.some((miss) => (miss.x === xPos) && (miss.y === yPos));\n    const hitFound = hitList.some((hits) => (hits.x === xPos) && (hits.y === yPos));\n\n    if (missedFound || hitFound) {\n      return true;\n    }\n    return false;\n  };\n\n  // Receive attack at position\n  const receiveAttack = (xPos, yPos) => {\n    let isValid = false;\n    const between = (x, min, max) => (x >= min && x <= max);\n\n    if (shipList.length === 0) throw new Error('Empty ship list');\n\n    // Iterate ship\n    shipList.forEach((ship) => {\n      const length = ship.getLength();\n      const min = ship.getCoordinate();\n      const max = ship.isHorizontal()\n        ? { x: min.x + length - 1, y: min.y } : { x: min.x, y: min.y + length - 1 };\n\n      if (between(xPos, min.x, max.x) && between(yPos, min.y, max.y)) {\n        hitList.push({ x: xPos, y: yPos });\n        if (ship.isHorizontal() === true) {\n          ship.hit(xPos - min.x);\n        } else {\n          ship.hit(yPos - min.y);\n        }\n        isValid = true;\n      }\n    });\n\n    if (!isValid) { missedList.push({ x: xPos, y: yPos }); }\n    // console.log(missedList);\n    return isValid;\n  };\n\n  const emptyShipList = () => {\n    shipList.length = 0;\n  };\n\n  const isShipListEmpty = () => {\n    let isEmpty = true;\n    if (shipList.length !== 0) isEmpty = false;\n    return isEmpty;\n  };\n\n  const checkAllShipsSunk = () => !(shipList.find((ship) => ship.isSunk() === false));\n\n  return {\n    displayShips,\n    getBoardSize,\n    isBoardFull,\n    isConflict,\n    placeShip,\n    alreadyHit,\n    receiveAttack,\n    emptyShipList,\n    isShipListEmpty,\n    checkAllShipsSunk,\n    getMissedList,\n    getHitList,\n  };\n};\n\nmodule.exports = {\n  Gameboard,\n};\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((module) => {

eval("const Player = () => {\n  const attack = (opponentBoard, posX, posY) => {\n    if (!opponentBoard.alreadyHit(posX, posY)) {\n      if (opponentBoard.receiveAttack(posX, posY)) {\n        return true;\n      }\n    }\n    return false;\n  };\n\n  // Randomly target a spot\n  const randomAttack = (opponentBoard) => {\n    let posX;\n    let posY;\n\n    // Check there are still spots to hit\n    do {\n      if (opponentBoard.isBoardFull()) return false;\n      posX = Math.floor(Math.random() * opponentBoard.getBoardSize());\n      posY = Math.floor(Math.random() * opponentBoard.getBoardSize());\n    } while (opponentBoard.alreadyHit(posX, posY));\n\n    // console.log(`Computer hit: ${posX} ${posY}`);\n    opponentBoard.receiveAttack(posX, posY);\n    return true;\n  };\n\n  return {\n    attack,\n    randomAttack,\n  };\n};\n\nmodule.exports = {\n  Player,\n};\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((module) => {

eval("const Ship = (length) => {\n  const body = new Array(length).fill(0);\n  let horizontal = false;\n  const coordinate = {\n    x: null,\n    y: null,\n  };\n\n  const hit = (location) => {\n    if (location >= body.length || location < 0) {\n      throw new Error('Invalid location');\n    }\n    body[location] = 1;\n  };\n\n  const isSunk = () => !!(body.reduce(\n    (prev, curr) => prev * curr,\n  ));\n\n  const setHorizontal = (rotate) => {\n    if (rotate) horizontal = true;\n    else horizontal = false;\n  };\n\n  const display = () => ({ horizontal, body });\n\n  const setCoordinate = (xPos, yPos) => {\n    if (typeof (xPos) !== 'number' || typeof (yPos) !== 'number') {\n      throw new Error('Invalid coordinates - not a number');\n    }\n\n    if (xPos < 0 || yPos < 0) {\n      throw new Error('Invalid coordinates - no negative values');\n    }\n    coordinate.x = xPos;\n    coordinate.y = yPos;\n  };\n\n  const getCoordinate = () => coordinate;\n  const getLength = () => body.length;\n  const isHorizontal = () => horizontal;\n\n  return {\n    hit,\n    isSunk,\n    display,\n    setHorizontal,\n    setCoordinate,\n    getCoordinate,\n    getLength,\n    isHorizontal,\n  };\n};\n\nmodule.exports = {\n  Ship,\n};\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;