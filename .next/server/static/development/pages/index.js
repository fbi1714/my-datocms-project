module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/datocms.js":
/*!************************!*\
  !*** ./lib/datocms.js ***!
  \************************/
/*! exports provided: request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction request({\n  query,\n  variables,\n  preview\n}) {\n  const endpoint = preview ? `https://graphql.datocms.com/preview` : `https://graphql.datocms.com/`;\n  const client = new graphql_request__WEBPACK_IMPORTED_MODULE_0__[\"GraphQLClient\"](endpoint, {\n    headers: {\n      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`\n    }\n  });\n  return client.request(query, variables);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGF0b2Ntcy5qcz8xNTk2Il0sIm5hbWVzIjpbInJlcXVlc3QiLCJxdWVyeSIsInZhcmlhYmxlcyIsInByZXZpZXciLCJlbmRwb2ludCIsImNsaWVudCIsIkdyYXBoUUxDbGllbnQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX0RBVE9DTVNfQVBJX1RPS0VOIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0EsT0FBVCxDQUFpQjtBQUFFQyxPQUFGO0FBQVNDLFdBQVQ7QUFBb0JDO0FBQXBCLENBQWpCLEVBQWdEO0FBQ3JELFFBQU1DLFFBQVEsR0FBR0QsT0FBTyxHQUNuQixxQ0FEbUIsR0FFbkIsOEJBRkw7QUFJQSxRQUFNRSxNQUFNLEdBQUcsSUFBSUMsNkRBQUosQ0FBa0JGLFFBQWxCLEVBQTRCO0FBQ3pDRyxXQUFPLEVBQUU7QUFDUEMsbUJBQWEsRUFBRyxVQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsc0JBQXVCO0FBRHJEO0FBRGdDLEdBQTVCLENBQWY7QUFLQSxTQUFPTixNQUFNLENBQUNMLE9BQVAsQ0FBZUMsS0FBZixFQUFzQkMsU0FBdEIsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vbGliL2RhdG9jbXMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmFwaFFMQ2xpZW50IH0gZnJvbSAnZ3JhcGhxbC1yZXF1ZXN0J1xuXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdCh7IHF1ZXJ5LCB2YXJpYWJsZXMsIHByZXZpZXcgfSkge1xuICBjb25zdCBlbmRwb2ludCA9IHByZXZpZXdcbiAgICA/IGBodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20vcHJldmlld2BcbiAgICA6IGBodHRwczovL2dyYXBocWwuZGF0b2Ntcy5jb20vYFxuXG4gIGNvbnN0IGNsaWVudCA9IG5ldyBHcmFwaFFMQ2xpZW50KGVuZHBvaW50LCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgYXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Byb2Nlc3MuZW52Lk5FWFRfREFUT0NNU19BUElfVE9LRU59YFxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGNsaWVudC5yZXF1ZXN0KHF1ZXJ5LCB2YXJpYWJsZXMpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/datocms.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_datocms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/datocms */ \"./lib/datocms.js\");\n/* harmony import */ var react_datocms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datocms */ \"react-datocms\");\n/* harmony import */ var react_datocms__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datocms__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/home/fabio/my-datocms-project/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst HOMEPAGE_QUERY = `\nquery HomePage($limit: IntType) {\n  site: _site {\n    favicon: faviconMetaTags {\n      attributes\n      content\n      tag\n    }\n  }\n  blog {\n    seo: _seoMetaTags {\n      attributes\n      content\n      tag\n    }\n  }\n  allPosts(first: $limit) {\n    id\n    title\n    excerpt\n    date\n    author {\n      name\n    }\n    coverImage {\n      responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {\n        srcSet\n        webpSrcSet\n        sizes\n        src\n        width\n        height\n        aspectRatio\n        alt\n        title\n        base64\n      }\n    }\n  }\n}`;\nasync function getStaticProps(context) {\n  const data = await Object(_lib_datocms__WEBPACK_IMPORTED_MODULE_1__[\"request\"])({\n    query: HOMEPAGE_QUERY,\n    variables: {\n      limit: 10\n    },\n    preview: context.preview\n  });\n  return {\n    props: {\n      data\n    }\n  };\n}\nfunction Home({\n  data\n}) {\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 7\n    }\n  }, Object(react_datocms__WEBPACK_IMPORTED_MODULE_2__[\"renderMetaTags\"])(data.blog.seo.concat(data.site.favicon))), data.allPosts.map(blogPost => __jsx(\"article\", {\n    key: blogPost.id,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(\"h6\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, blogPost.title))));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhPTUVQQUdFX1FVRVJZIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiZGF0YSIsInJlcXVlc3QiLCJxdWVyeSIsInZhcmlhYmxlcyIsImxpbWl0IiwicHJldmlldyIsInByb3BzIiwiSG9tZSIsInJlbmRlck1ldGFUYWdzIiwiYmxvZyIsInNlbyIsImNvbmNhdCIsInNpdGUiLCJmYXZpY29uIiwiYWxsUG9zdHMiLCJtYXAiLCJibG9nUG9zdCIsImlkIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxjQUFjLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUF4QjtBQXlDTyxlQUFlQyxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUM1QyxRQUFNQyxJQUFJLEdBQUcsTUFBTUMsNERBQU8sQ0FBQztBQUN6QkMsU0FBSyxFQUFFTCxjQURrQjtBQUV6Qk0sYUFBUyxFQUFFO0FBQUVDLFdBQUssRUFBRTtBQUFULEtBRmM7QUFHekJDLFdBQU8sRUFBRU4sT0FBTyxDQUFDTTtBQUhRLEdBQUQsQ0FBMUI7QUFNQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUFFTjtBQUFGO0FBREYsR0FBUDtBQUdEO0FBRWMsU0FBU08sSUFBVCxDQUFjO0FBQUVQO0FBQUYsQ0FBZCxFQUF3QjtBQUNyQyxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT1Esb0VBQWMsQ0FBQ1IsSUFBSSxDQUFDUyxJQUFMLENBQVVDLEdBQVYsQ0FBY0MsTUFBZCxDQUFxQlgsSUFBSSxDQUFDWSxJQUFMLENBQVVDLE9BQS9CLENBQUQsQ0FBckIsQ0FERixFQUVHYixJQUFJLENBQUNjLFFBQUwsQ0FBY0MsR0FBZCxDQUFrQkMsUUFBUSxJQUN6QjtBQUFTLE9BQUcsRUFBRUEsUUFBUSxDQUFDQyxFQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRCxRQUFRLENBQUNFLEtBQWQsQ0FERixDQURELENBRkgsQ0FERjtBQVVEIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vbGliL2RhdG9jbXMnXG5pbXBvcnQgeyBJbWFnZSwgcmVuZGVyTWV0YVRhZ3MgfSBmcm9tICdyZWFjdC1kYXRvY21zJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5jb25zdCBIT01FUEFHRV9RVUVSWSA9IGBcbnF1ZXJ5IEhvbWVQYWdlKCRsaW1pdDogSW50VHlwZSkge1xuICBzaXRlOiBfc2l0ZSB7XG4gICAgZmF2aWNvbjogZmF2aWNvbk1ldGFUYWdzIHtcbiAgICAgIGF0dHJpYnV0ZXNcbiAgICAgIGNvbnRlbnRcbiAgICAgIHRhZ1xuICAgIH1cbiAgfVxuICBibG9nIHtcbiAgICBzZW86IF9zZW9NZXRhVGFncyB7XG4gICAgICBhdHRyaWJ1dGVzXG4gICAgICBjb250ZW50XG4gICAgICB0YWdcbiAgICB9XG4gIH1cbiAgYWxsUG9zdHMoZmlyc3Q6ICRsaW1pdCkge1xuICAgIGlkXG4gICAgdGl0bGVcbiAgICBleGNlcnB0XG4gICAgZGF0ZVxuICAgIGF1dGhvciB7XG4gICAgICBuYW1lXG4gICAgfVxuICAgIGNvdmVySW1hZ2Uge1xuICAgICAgcmVzcG9uc2l2ZUltYWdlKGltZ2l4UGFyYW1zOiB7IGZpdDogY3JvcCwgdzogMzAwLCBoOiAzMDAsIGF1dG86IGZvcm1hdCB9KSB7XG4gICAgICAgIHNyY1NldFxuICAgICAgICB3ZWJwU3JjU2V0XG4gICAgICAgIHNpemVzXG4gICAgICAgIHNyY1xuICAgICAgICB3aWR0aFxuICAgICAgICBoZWlnaHRcbiAgICAgICAgYXNwZWN0UmF0aW9cbiAgICAgICAgYWx0XG4gICAgICAgIHRpdGxlXG4gICAgICAgIGJhc2U2NFxuICAgICAgfVxuICAgIH1cbiAgfVxufWBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcXVlc3Qoe1xuICAgIHF1ZXJ5OiBIT01FUEFHRV9RVUVSWSxcbiAgICB2YXJpYWJsZXM6IHsgbGltaXQ6IDEwIH0sXG4gICAgcHJldmlldzogY29udGV4dC5wcmV2aWV3XG4gIH0pXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYXRhIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZGF0YSB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPntyZW5kZXJNZXRhVGFncyhkYXRhLmJsb2cuc2VvLmNvbmNhdChkYXRhLnNpdGUuZmF2aWNvbikpfTwvSGVhZD5cbiAgICAgIHtkYXRhLmFsbFBvc3RzLm1hcChibG9nUG9zdCA9PiAoXG4gICAgICAgIDxhcnRpY2xlIGtleT17YmxvZ1Bvc3QuaWR9PlxuICAgICAgICAgIDxoNj57YmxvZ1Bvc3QudGl0bGV9PC9oNj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/fabio/my-datocms-project/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"graphql-request\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXJlcXVlc3RcIj9jYzFhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImdyYXBocWwtcmVxdWVzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWwtcmVxdWVzdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///graphql-request\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-datocms":
/*!********************************!*\
  !*** external "react-datocms" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-datocms\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kYXRvY21zXCI/OWMyZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWFjdC1kYXRvY21zLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF0b2Ntc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-datocms\n");

/***/ })

/******/ });