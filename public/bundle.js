/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _person_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person.js */ \"./src/person.js\");\n// import './utils';\r\n// import subtract, { square, add } from \"./utils.js\";\r\n\r\n// console.log(\"app.js is running!\");\r\n// console.log(add(square(4), 3));\r\n// console.log(subtract(100, 80));\r\n\r\n\r\n\r\nconst person = {\r\n  name: \"little boy \",\r\n  age: 25,\r\n};\r\nconsole.log(\r\n  (0,_person_js__WEBPACK_IMPORTED_MODULE_0__.isAdult)(person.age)\r\n    ? `you are adult ${person.name}`\r\n    : `you aren't adult ${person.name}`\r\n);\r\nconsole.log(\r\n  (0,_person_js__WEBPACK_IMPORTED_MODULE_0__.canDrink)(person.age)\r\n    ? `You can drink ${person.name}`\r\n    : `you can't drink ${person.name}`\r\n);\r\nconsole.log(`this is a simple constant ${_person_js__WEBPACK_IMPORTED_MODULE_0__.iAmConstant + 23}`);\r\nconsole.log(\r\n  (0,_person_js__WEBPACK_IMPORTED_MODULE_0__.default)(person.age)\r\n    ? `You are a Senior ${person.name}`\r\n    : `You aren't a senior ${person.name}`\r\n);\r\n\n\n//# sourceURL=webpack://indecision-app/./src/app.js?");

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isAdult\": () => (/* binding */ isAdult),\n/* harmony export */   \"canDrink\": () => (/* binding */ canDrink),\n/* harmony export */   \"iAmConstant\": () => (/* binding */ iAmConstant),\n/* harmony export */   \"default\": () => (/* binding */ isSenior)\n/* harmony export */ });\nconst isAdult = (age) => age >= 18;\r\nconst canDrink = (age) => age >= 21;\r\nconst iAmConstant = 23;\r\n// Mode #2 to export default\r\nconst isSenior = (age) => age >= 60;\r\n\r\n// Mode #2 to export default\r\n\r\n\r\n// Mode #1\r\n// export default (age) => age >= 60;\r\n\n\n//# sourceURL=webpack://indecision-app/./src/person.js?");

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
/******/ 			// no module.id needed
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;