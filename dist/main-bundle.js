/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  var url = \"http://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=ca5b6461d1d543d893339c704b9836ea\";\n  $.ajax({\n    url: url,\n    method: \"GET\",\n    dataType: \"JSON\",\n    beforeSend: function beforeSend() {\n      $(\".progress\").show();\n    },\n    complete: function complete() {\n      $(\".progress\").hide();\n    },\n    success: function success(newsdata) {\n      var output = \"\";\n      var latestNews = newsdata.articles;\n\n      for (var i in latestNews) {\n        output += \"\\n\\n        <style>\\n\\n        span{\\n          padding-right: 5px;\\n          padding-top: 3px;\\n        }\\n\\n        \\n        a{\\n          text-align:center;\\n          font-weight: 900;\\n          font-size: 16px;\\n        }\\n\\n        </style>\\n\\n          <div class=\\\"col l6 m6 s12\\\">\\n          <div class=\\\"card medium hoverable\\\">\\n            <div class=\\\"card-image\\\">\\n              <img src=\\\"\".concat(latestNews[i].urlToImage, \"\\\" class=\\\"responsive-img\\\" alt=\\\"\").concat(latestNews[i].title, \"\\\">\\n            </div>\\n            <div class=\\\"card-content\\\">\\n              <span class=\\\"card-title activator\\\"><i class=\\\"material-icons right\\\">more_vert</i></span>\\n              <h6 class=\\\"truncate\\\"><a href=\\\"\").concat(latestNews[i].url, \"\\\" target=\\\"_blank\\\" title=\\\"\").concat(latestNews[i].title, \"\\\">\").concat(latestNews[i].title, \"</a></h6>\\n              <p><b>By</b>: \").concat(latestNews[i].source.name, \" </p>\\n            </div>\\n\\n            <div class=\\\"card-reveal\\\">\\n              <span class=\\\"card-title\\\"><i class=\\\"material-icons right\\\">close</i></span>\\n              <p><b>Description</b>: \").concat(latestNews[i].description, \"</p>\\n            </div>\\n\\n            <div class=\\\"card-action orange darken-1\\\">\\n              <a href=\\\"\").concat(latestNews[i].url, \"\\\" style=\\\"text-align:center; font-size: 14px; padding-bottom: 20px 10px;\\\"  target=\\\"_blank\\\" class=\\\"btn amber\\\"><span class=\\\"material-icons\\\">local_library</span>Read More</a>\\n            </div>\\n           </div>\\n          </div>\\n        \");\n      }\n\n      if (output !== \"\") {\n        $(\"#newsResults\").html(output);\n      }\n    },\n    error: function error() {\n      var errorMsg = \"<div class=\\\"errorMsg center\\\">Some error occured</div>\";\n      $(\"#newsResults\").html(errorMsg);\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });