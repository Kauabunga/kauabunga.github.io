(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/index.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcarsonbruce%2Fdev%2Fcarson%2Fceevee%2Fpages%2Findex.js&hotRouterUpdates=true!./":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcarsonbruce%2Fdev%2Fcarson%2Fceevee%2Fpages%2Findex.js&hotRouterUpdates=true ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/",
      function () {
        var mod = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
        if (true) {
          module.hot.accept(/*! ./pages/index.js */ "./pages/index.js", function () {
            if (!next.router.components["/"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/index.js */ "./pages/index.js");
            next.router.update("/", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/App */ "./src/components/App/index.js");
var _jsxFileName = "/Users/carsonbruce/dev/carson/ceevee/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Home() {
  return __jsx(_src_components_App__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  });
}

/***/ }),

/***/ "./src/components/App/index.js":
/*!*************************************!*\
  !*** ./src/components/App/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header */ "./src/components/Header/index.js");
/* harmony import */ var _Introduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Introduction */ "./src/components/Introduction/index.js");
/* harmony import */ var _Experience__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Experience */ "./src/components/Experience/index.js");
/* harmony import */ var _Education__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Education */ "./src/components/Education/index.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Projects */ "./src/components/Projects/index.js");
/* harmony import */ var _Interests__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Interests */ "./src/components/Interests/index.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Footer */ "./src/components/Footer/index.js");
var _this = undefined,
    _jsxFileName = "/Users/carsonbruce/dev/carson/ceevee/src/components/App/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "header-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  })), __jsx("div", {
    className: "content-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "introduction-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, __jsx(_Introduction__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "experience-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_Experience__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "education-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, __jsx(_Education__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "project-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(_Projects__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "interests-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_Interests__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "footer-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx(_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }))));
});

/***/ }),

/***/ "./src/components/Education/index.js":
/*!*******************************************!*\
  !*** ./src/components/Education/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/carsonbruce/dev/carson/ceevee/src/components/Education/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var education = {
  year: "2007-2012",
  title: "Victoria University of Wellington",
  university: "Bachelor of Engineering, Software Engineering, First Class Honours"
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "educationContent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, "Education"), __jsx("div", {
    className: "educationContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, education.university), __jsx("h3", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, education.title), __jsx("em", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, education.year))));
});

/***/ }),

/***/ "./src/components/Experience/index.js":
/*!********************************************!*\
  !*** ./src/components/Experience/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/carsonbruce/dev/carson/ceevee/src/components/Experience/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var properlyLogo = __webpack_require__(/*! ./properly.svg */ "./src/components/Experience/properly.svg");

var solnetLogo = __webpack_require__(/*! ./solnet.svg */ "./src/components/Experience/solnet.svg");

var victoriaLogo = __webpack_require__(/*! ./vuw.png */ "./src/components/Experience/vuw.png");

var middlewareLogo = __webpack_require__(/*! ./mwnz.png */ "./src/components/Experience/mwnz.png");

var jobs = [{
  title: "Middleware NZ",
  date: "Mar 2019 - Now",
  brief: "\n    \n    I started Middleware NZ as an API developer and have been learning lots. \n\n\n\n    ",
  svg: {
    src: middlewareLogo,
    height: "132px",
    width: "135px",
    style: {
      width: 52,
      "float": "right",
      padding: 4,
      backgroundColor: "#282940"
    }
  }
}, {
  title: "Properly",
  date: "Nov 2017 - Mar 2019",
  brief: "\n    \n    I joined Properly with a team of 14, working across the world to provide tools and people\n    to property owners and managers.\n\n    After achieving our Series-A funding I became the lead for the frontend team, together owning the multiple web apps of Properly.\n\n    Beyond this role, I was involved with more of our engineering, design, and test team activities. This included:\n    Web/Service implementation design, Full stack development, UX design, UI test automation, CI pipelines, Infrastructure design, and Infrastructure as code.\n\n    ",
  svg: {
    src: properlyLogo,
    height: "2215px",
    width: "770px"
  }
}, {
  title: "Solnet",
  date: "Aug 2012 - Nov 2017 ( 5 years 3 months )",
  brief: "\n    \n    I started with Solnet after graduating, joining the delivery team.\n\n    I gained experience with a variety of clients, first as a front end developer, then as others:\n     Devops developer, API developer, Automation tester, and UX designer.\n\n    Later at my time in Solnet I mentored team members in Javascript \n    tooling and practices, through 1-on-1's and group presentations.\n\n    ",
  link: "See the Projects section and some of the work I've done with Solnet.",
  linkHref: "#Projects",
  svg: {
    src: solnetLogo,
    height: "2215px",
    width: "770px"
  }
}, {
  title: "Research Project: Query Expansion",
  date: "Nov 2011 - March 2012 ( 4 months )",
  brief: "\n\n    My second research opportunity was offered by the supervisor of my honours project.\n    \n    The project looked at ways that Wikipedia and its hyperlinks could be used to support \n    Query Expansion.  \n    \n    With Victoria's Web Intelligence team, I managed to get the my thesis submitted and accepted to an \n    Australasian Web Intelligence conference.\n\n    ",
  svg: {
    src: victoriaLogo,
    height: "792px",
    width: "192px"
  }
}, {
  title: "Research Project: Eye Gaze tracking",
  date: "Nov 2010 - March 2011 ( 4 months )",
  brief: "\n    At the end of my 300 level university year I was awarded a research scholarship.\n    \n    With the support of my supervisor and his team,\n    I contributed to the development of an open source gaze tracking system.\n\n    ",
  svg: {
    src: victoriaLogo,
    height: "792px",
    width: "192px"
  }
}, {
  title: "Cool Bananas",
  date: "Nov 2009 - March 2010 ( 4 months )",
  brief: "\n\n    During an internship with another student and senior\n     our team prototyped a scripting interpreter and runtime for embedded systems.\n     \n    The experience helped cement the past year study learning C, Agile processes, and Testing practices.\n    \n    "
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 5
    }
  }, __jsx("h1", {
    id: "Experience",
    className: "experienceTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, "Experience"), jobs.map(function (job, i) {
    return __jsx("div", {
      key: job.title,
      className: i !== jobs.length - 1 ? "job" : "lastJob",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jobContentContainer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jobContent",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "titleContainer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }
    }, __jsx("h2", {
      className: "jobTitle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 19
      }
    }, job.title), __jsx("em", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 19
      }
    }, job.date)), job.svg ? __jsx("div", {
      className: "jobImage",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 19
      }
    }, __jsx("amp-img", {
      style: job.svg.style,
      src: job.svg.src,
      height: job.svg.height,
      width: job.svg.width,
      layout: "responsive",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 21
      }
    })) : null, __jsx("p", {
      className: "jobBrief",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }
    }, job.brief), job.link ? __jsx("a", {
      className: "jobLink",
      href: job.linkHref,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 19
      }
    }, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 21
      }
    }, job.link)) : null)));
  }));
});

/***/ }),

/***/ "./src/components/Experience/mwnz.png":
/*!********************************************!*\
  !*** ./src/components/Experience/mwnz.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/Experience/properly.svg":
/*!************************************************!*\
  !*** ./src/components/Experience/properly.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTIzcHgiIGhlaWdodD0iMzBweCIgdmlld0JveD0iMCAwIDEyMyAzMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNDEuMSAoMzUzNzYpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPnByb3Blcmx5bG9ja3VwPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPHBvbHlsaW5lIGlkPSJwYXRoLTEiIHBvaW50cz0iMCAzMCAxMjIuMTE5NjU1IDMwIDEyMi4xMTk2NTUgMC4wMzAzNDQ4Mjc2IDAgMC4wMzAzNDQ4Mjc2Ij48L3BvbHlsaW5lPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IlN5bWJvbHMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJwcm9wZXJseWxvY2t1cCI+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtMiI+PC9nPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMDAuOTI3OTMxLDMuNjY2NTUxNzIgQzk2LjA4LDguNTE0MTM3OTMgOTYuMDc5MzEwMywxNi4zNzM3OTMxIDEwMC45Mjc5MzEsMjEuMjIyMDY5IEwxMDkuNzA1NTE3LDMwIEwxMTIuNjMxNzI0LDI3LjA3NDEzNzkgTDEwMy44NTQxMzgsMTguMjk1ODYyMSBDMTAwLjYyMjc1OSwxNS4wNjM3OTMxIDEwMC42MjEzNzksOS44MjQ0ODI3NiAxMDMuODUzNDQ4LDYuNTkyNDEzNzkgQzEwNy4wODYyMDcsMy4zNiAxMTIuMzI2NTUyLDMuMzYwMzQ0ODMgMTE1LjU1NzI0MSw2LjU5MjQxMzc5IEMxMTguNzg5MzEsOS44MjM3OTMxIDExOC43ODkzMSwxNS4wNjQxMzc5IDExNS41NTcyNDEsMTguMjk2MjA2OSBDMTE0LjQ5MDY5LDE5LjM2MzQ0ODMgMTEzLjMxNjU1MiwxOS45NTY4OTY2IDExMS44NDI0MTQsMjAuNDMyNzU4NiBMMTE1LjU1NzI0MSwyNC4xNDc5MzEgTDExOC40ODM3OTMsMjEuMjIyMDY5IEMxMjMuMzMxMzc5LDE2LjM3Mzc5MzEgMTIzLjMzMTM3OSw4LjUxNDEzNzkzIDExOC40ODM3OTMsMy42NjYyMDY5IEMxMTMuNjM1MTcyLC0xLjE4MTcyNDE0IDEwNS43NzYyMDcsLTEuMTgyMDY4OTcgMTAwLjkyNzkzMSwzLjY2NjU1MTcyIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkY1NzIyIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMTIuNjMxNzI0LDE1LjM3IEMxMTQuMjQ3MjQxLDEzLjc1NDgyNzYgMTE0LjI0NzkzMSwxMS4xMzM0NDgzIDExMi42MzEwMzQsOS41MTc1ODYyMSBDMTExLjAxNjU1Miw3LjkwMTcyNDE0IDEwOC4zOTU1MTcsNy45MDIwNjg5NyAxMDYuNzgwMzQ1LDkuNTE3OTMxMDMgQzEwNS4xNjQxMzgsMTEuMTM0MTM3OSAxMDUuMTY0MTM4LDEzLjc1NDQ4MjggMTA2Ljc4MDM0NSwxNS4zNyBDMTA4LjM5NTUxNywxNi45ODYyMDY5IDExMS4wMTU4NjIsMTYuOTg2MjA2OSAxMTIuNjMxNzI0LDE1LjM3IiBpZD0iRmlsbC00IiBmaWxsPSIjRkY1NzIyIj48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNOS4yMTQ0ODI3NiwxNy41ODY4OTY2IEw5LjIxNDQ4Mjc2LDE3LjM5OTMxMDMgQzkuMjE0NDgyNzYsMTQuOTE0MTM3OSA3Ljk5NTE3MjQxLDEzLjY5NDgyNzYgNi4yODM0NDgyOCwxMy42OTQ4Mjc2IEM0LjUwMTcyNDE0LDEzLjY5NDgyNzYgMy4yODI0MTM3OSwxNC45MzcyNDE0IDMuMjgyNDEzNzksMTcuMzk5MzEwMyBMMy4yODI0MTM3OSwxNy41ODY4OTY2IEMzLjI4MjQxMzc5LDIwLjA0ODYyMDcgNC40NTQ4Mjc1OSwyMS4yNDQxMzc5IDYuMzA2ODk2NTUsMjEuMjQ0MTM3OSBDOC4xODI3NTg2MiwyMS4yNDQxMzc5IDkuMjE0NDgyNzYsMTkuOTc4Mjc1OSA5LjIxNDQ4Mjc2LDE3LjU4Njg5NjYgTDkuMjE0NDgyNzYsMTcuNTg2ODk2NiBaIE0wLDExLjM3MzQ0ODMgTDMuMzk5NjU1MTcsMTEuMzczNDQ4MyBMMy4zOTk2NTUxNywxMy4yOTYyMDY5IEM0LjA3OTY1NTE3LDEyLjEyMzc5MzEgNS41MSwxMS4wOTI0MTM4IDcuMzE1MTcyNDEsMTEuMDkyNDEzOCBDMTAuMzE2MjA2OSwxMS4wOTI0MTM4IDEyLjY2MDY4OTcsMTMuMzE5NjU1MiAxMi42NjA2ODk3LDE3LjM3NTg2MjEgTDEyLjY2MDY4OTcsMTcuNTYzNDQ4MyBDMTIuNjYwNjg5NywyMS42MTkzMTAzIDEwLjM2MzEwMzQsMjMuODkzNzkzMSA3LjMxNTE3MjQxLDIzLjg5Mzc5MzEgQzUuNDE1ODYyMDcsMjMuODkzNzkzMSA0LjAzMjQxMzc5LDIyLjk1NTg2MjEgMy4zOTk2NTUxNywyMS43NjAzNDQ4IEwzLjM5OTY1NTE3LDI3LjgwOTMxMDMgTDAsMjcuODA5MzEwMyBMMCwxMS4zNzM0NDgzIEwwLDExLjM3MzQ0ODMgWiIgaWQ9IkZpbGwtNSIgZmlsbD0iIzMzM0Q0NiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzLjk5ODYyMDcsMTEuMzczNDQ4MyBMMTcuMzk4Mjc1OSwxMS4zNzM0NDgzIEwxNy4zOTgyNzU5LDEzLjcxODI3NTkgQzE4LjE3MTcyNDEsMTIuMDc2ODk2NiAxOS4zNjc1ODYyLDExLjIwOTY1NTIgMjEuMzYwMzQ0OCwxMS4xODYyMDY5IEwyMS4zNjAzNDQ4LDE0LjM1MTAzNDUgQzE4Ljg1MTcyNDEsMTQuMzI3OTMxIDE3LjM5ODI3NTksMTUuMTQ4NjIwNyAxNy4zOTgyNzU5LDE3LjQ5Mjc1ODYgTDE3LjM5ODI3NTksMjMuNjM1ODYyMSBMMTMuOTk4NjIwNywyMy42MzU4NjIxIEwxMy45OTg2MjA3LDExLjM3MzQ0ODMiIGlkPSJGaWxsLTYiIGZpbGw9IiMzMzNENDYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMS4zNzI0MTM4LDE3LjU4Njg5NjYgTDMxLjM3MjQxMzgsMTcuNDIyNDEzOCBDMzEuMzcyNDEzOCwxNS4wNzgyNzU5IDMwLjI3MDM0NDgsMTMuNjcxMDM0NSAyOC4zNzEwMzQ1LDEzLjY3MTAzNDUgQzI2LjQ5NTUxNzIsMTMuNjcxMDM0NSAyNS4zNywxNS4wMzEzNzkzIDI1LjM3LDE3LjM3NTg2MjEgTDI1LjM3LDE3LjU2MzQ0ODMgQzI1LjM3LDE5LjkwNzkzMSAyNi40NDg2MjA3LDIxLjMxNDgyNzYgMjguMzcxMDM0NSwyMS4zMTQ4Mjc2IEMzMC4yNzAzNDQ4LDIxLjMxNDgyNzYgMzEuMzcyNDEzOCwxOS45MDc5MzEgMzEuMzcyNDEzOCwxNy41ODY4OTY2IEwzMS4zNzI0MTM4LDE3LjU4Njg5NjYgWiBNMjEuOTAwMzQ0OCwxNy42MzM3OTMxIEwyMS45MDAzNDQ4LDE3LjQ0NjIwNjkgQzIxLjkwMDM0NDgsMTMuNjAwNjg5NyAyNC42OTAzNDQ4LDExLjA5MjQxMzggMjguMzcxMDM0NSwxMS4wOTI0MTM4IEMzMi4wNTI0MTM4LDExLjA5MjQxMzggMzQuODE4OTY1NSwxMy41NTQxMzc5IDM0LjgxODk2NTUsMTcuMzc1ODYyMSBMMzQuODE4OTY1NSwxNy41NjM0NDgzIEMzNC44MTg5NjU1LDIxLjQzMTcyNDEgMzIuMDI4OTY1NSwyMy44OTM3OTMxIDI4LjM0NzkzMSwyMy44OTM3OTMxIEMyNC42OTAzNDQ4LDIzLjg5Mzc5MzEgMjEuOTAwMzQ0OCwyMS40NTU1MTcyIDIxLjkwMDM0NDgsMTcuNjMzNzkzMSBMMjEuOTAwMzQ0OCwxNy42MzM3OTMxIFoiIGlkPSJGaWxsLTciIGZpbGw9IiMzMzNENDYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00NS4xMzY4OTY2LDE3LjU4Njg5NjYgTDQ1LjEzNjg5NjYsMTcuMzk5MzEwMyBDNDUuMTM2ODk2NiwxNC45MTQxMzc5IDQzLjkxNzI0MTQsMTMuNjk0ODI3NiA0Mi4yMDYyMDY5LDEzLjY5NDgyNzYgQzQwLjQyNDEzNzksMTMuNjk0ODI3NiAzOS4yMDQ4Mjc2LDE0LjkzNzI0MTQgMzkuMjA0ODI3NiwxNy4zOTkzMTAzIEwzOS4yMDQ4Mjc2LDE3LjU4Njg5NjYgQzM5LjIwNDgyNzYsMjAuMDQ4NjIwNyA0MC4zNzcyNDE0LDIxLjI0NDEzNzkgNDIuMjI5MzEwMywyMS4yNDQxMzc5IEM0NC4xMDQ4Mjc2LDIxLjI0NDEzNzkgNDUuMTM2ODk2NiwxOS45NzgyNzU5IDQ1LjEzNjg5NjYsMTcuNTg2ODk2NiBMNDUuMTM2ODk2NiwxNy41ODY4OTY2IFogTTM1LjkyMjQxMzgsMTEuMzczNDQ4MyBMMzkuMzIyMDY5LDExLjM3MzQ0ODMgTDM5LjMyMjA2OSwxMy4yOTYyMDY5IEM0MC4wMDIwNjksMTIuMTIzNzkzMSA0MS40MzIwNjksMTEuMDkyNDEzOCA0My4yMzc1ODYyLDExLjA5MjQxMzggQzQ2LjIzODYyMDcsMTEuMDkyNDEzOCA0OC41ODM0NDgzLDEzLjMxOTY1NTIgNDguNTgzNDQ4MywxNy4zNzU4NjIxIEw0OC41ODM0NDgzLDE3LjU2MzQ0ODMgQzQ4LjU4MzQ0ODMsMjEuNjE5MzEwMyA0Ni4yODU1MTcyLDIzLjg5Mzc5MzEgNDMuMjM3NTg2MiwyMy44OTM3OTMxIEM0MS4zMzgyNzU5LDIzLjg5Mzc5MzEgMzkuOTU1MTcyNCwyMi45NTU4NjIxIDM5LjMyMjA2OSwyMS43NjAzNDQ4IEwzOS4zMjIwNjksMjcuODA5MzEwMyBMMzUuOTIyNDEzOCwyNy44MDkzMTAzIEwzNS45MjI0MTM4LDExLjM3MzQ0ODMgTDM1LjkyMjQxMzgsMTEuMzczNDQ4MyBaIiBpZD0iRmlsbC04IiBmaWxsPSIjMzMzRDQ2Ij48L3BhdGg+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNTguMzg0ODI3NiwxNi4xOCBDNTguMjY3NTg2MiwxNC4zMjc5MzEgNTcuMzI5NjU1MiwxMy40MzY4OTY2IDU1LjcxMjA2OSwxMy40MzY4OTY2IEM1NC4xODgyNzU5LDEzLjQzNjg5NjYgNTMuMTU2MjA2OSwxNC40NDUxNzI0IDUyLjg5ODI3NTksMTYuMTggTDU4LjM4NDgyNzYsMTYuMTggTDU4LjM4NDgyNzYsMTYuMTggWiBNNDkuNDA0ODI3NiwxNy42NTcyNDE0IEw0OS40MDQ4Mjc2LDE3LjQ2OTY1NTIgQzQ5LjQwNDgyNzYsMTMuNjAwNjg5NyA1Mi4xNDgyNzU5LDExLjA5MjQxMzggNTUuNzEyMDY5LDExLjA5MjQxMzggQzU4Ljg3Njg5NjYsMTEuMDkyNDEzOCA2MS42OTA2ODk3LDEyLjk0NDQ4MjggNjEuNjkwNjg5NywxNy4zMjg5NjU1IEw2MS42OTA2ODk3LDE4LjI2Njg5NjYgTDUyLjg1MTcyNDEsMTguMjY2ODk2NiBDNTIuOTQ1MTcyNCwyMC4zMDY1NTE3IDU0LjA0NzI0MTQsMjEuNDc4NjIwNyA1NS44OTkzMTAzLDIxLjQ3ODYyMDcgQzU3LjQ3MDM0NDgsMjEuNDc4NjIwNyA1OC4yNDQxMzc5LDIwLjc5ODYyMDcgNTguNDU1MTcyNCwxOS43NjcyNDE0IEw2MS42NjcyNDE0LDE5Ljc2NzI0MTQgQzYxLjI2ODYyMDcsMjIuNDE2ODk2NiA1OS4xNTg2MjA3LDIzLjg5Mzc5MzEgNTUuODA1ODYyMSwyMy44OTM3OTMxIEM1Mi4xMDEzNzkzLDIzLjg5Mzc5MzEgNDkuNDA0ODI3NiwyMS41NzI3NTg2IDQ5LjQwNDgyNzYsMTcuNjU3MjQxNCBMNDkuNDA0ODI3NiwxNy42NTcyNDE0IFoiIGlkPSJGaWxsLTkiIGZpbGw9IiMzMzNENDYiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik02Mi45ODEzNzkzLDExLjM3MzQ0ODMgTDY2LjM4MTAzNDUsMTEuMzczNDQ4MyBMNjYuMzgxMDM0NSwxMy43MTgyNzU5IEM2Ny4xNTQ0ODI4LDEyLjA3Njg5NjYgNjguMzUwMzQ0OCwxMS4yMDk2NTUyIDcwLjM0MzEwMzQsMTEuMTg2MjA2OSBMNzAuMzQzMTAzNCwxNC4zNTEwMzQ1IEM2Ny44MzQ0ODI4LDE0LjMyNzkzMSA2Ni4zODEwMzQ1LDE1LjE0ODYyMDcgNjYuMzgxMDM0NSwxNy40OTI3NTg2IEw2Ni4zODEwMzQ1LDIzLjYzNTg2MjEgTDYyLjk4MTM3OTMsMjMuNjM1ODYyMSBMNjIuOTgxMzc5MywxMS4zNzM0NDgzIiBpZD0iRmlsbC0xMCIgZmlsbD0iIzMzM0Q0NiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtMTEiIGZpbGw9IiMzMzNENDYiIHBvaW50cz0iNzEuNzI3MjQxNCA1LjgxNjg5NjU1IDc1LjEwMzQ0ODMgNS44MTY4OTY1NSA3NS4xMDM0NDgzIDIzLjYzNTg2MjEgNzEuNzI3MjQxNCAyMy42MzU4NjIxIj48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWxpbmUgaWQ9IkZpbGwtMTIiIGZpbGw9IiMzMzNENDYiIHBvaW50cz0iODAuOTY1NTE3MiAyMi4zOTMxMDM0IDc2LjA4ODYyMDcgMTEuMzczNDQ4MyA3OS43NDYyMDY5IDExLjM3MzQ0ODMgODIuNzIzNzkzMSAxOC43MzU1MTcyIDg1LjQ2NzI0MTQgMTEuMzczNDQ4MyA4OC43MjYyMDY5IDExLjM3MzQ0ODMgODIuMDkxMDM0NSAyNy44MDkzMTAzIDc4LjgwODI3NTkgMjcuODA5MzEwMyA4MC45NjU1MTcyIDIyLjM5MzEwMzQiPjwvcG9seWxpbmU+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "./src/components/Experience/solnet.svg":
/*!**********************************************!*\
  !*** ./src/components/Experience/solnet.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDIyMTQuMjIxIDc2OS42MjEiPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iIzBjNGI4NyIgZD0iTTIzMS4xNjcsNTIzLjgxNWMtNDAuNDY3LTUxLjA0NS01NS4zMTgtMTA5LjMzLTQxLjgyMi0xNjQuMTE3YzEwLjAzOC00MC43NDIsMzUuNTI2LTcxLjk2Niw3My43MTUtOTAuMjk0CiAgICAgICAgICAgICAgICAgICAgYzEuNzc4LTAuODU1LDMuNjE1LTEuNTkxLDUuNDMyLTIuMzc3TDE4MywxOTMuOTAxQzExMC4wMjIsMjM1Ljg5LDYyLjEyLDMwNi4zNjQsNjIuMTIsMzg2LjI1NwogICAgICAgICAgICAgICAgICAgIGMwLDEyOC43MDksMTI0LjI3OSwyMzMuMDU5LDI3Ny42MDIsMjMzLjA1OWM4LjUxNiwwLDE2LjkwNC0wLjQzMiwyNS4yMjMtMS4wNzFDMzExLjMxNSw1OTguMSwyNjQuMjk3LDU2NS41OTksMjMxLjE2Nyw1MjMuODE1egogICAgICAgICAgICAgICAgICAgICBNNDE4LjY3OSwyNjguNDk3YzQ5LjU3MiwyMi45ODQsODQuMzgyLDcwLjU0Miw4Ni42MzEsMTE4LjMyN2MxLjQ3MywzMS4zNTItOS44NTIsNzUuNzg3LTY4LjQxMSwxMTYuNTE5CiAgICAgICAgICAgICAgICAgICAgYzMyLjYyOSw1LjI0NSw3My4yNDMsMi41MDUsMTA3LjI3Ny0xMy44M2MzMy40MTUtMTYuMDMsNTQuODA3LTQyLjIxNSw2My41NzgtNzcuODJjMTIuMDcxLTQ5LjAxMi0xLjUyMi0xMDEuNTQxLTM4LjI5Ni0xNDcuOTIxCiAgICAgICAgICAgICAgICAgICAgYy0zOS4wOTItNDkuMjk3LTk4Ljk2Ny04NC44MzMtMTY2LjAzMi0xMDAuODUzYy0yMS4zNTMtNC40Mi00My42NC02LjgxNy02Ni42MTMtNi44MTdjLTUwLjU4NCwwLTk3Ljk2NSwxMS40MTMtMTM4LjgwNiwzMS4yNjQKICAgICAgICAgICAgICAgICAgICBsODcuOTM3LDc1LjIxOEMzMzMuODY1LDI0OC41NTgsMzg3LjMyNywyNTMuOTYxLDQxOC42NzksMjY4LjQ5N3ogTTQ3MC42MDgsNTIxLjUyNWMtMjguNTkyLDAtNTUuMi01LjQ1MS03My45MTEtMTQuMTI0CiAgICAgICAgICAgICAgICAgICAgYy00OS41NzItMjIuOTg0LTg0LjM5MS03MC41NDItODYuNjQxLTExOC4zMzZjLTEuNDczLTMxLjM1Miw5Ljg2MS03NS43ODcsNjguNDIxLTExNi41MTkKICAgICAgICAgICAgICAgICAgICBjLTMyLjYxOS01LjI1NS03My4yNDMtMi41MTQtMTA3LjI3NywxMy44MjljLTMzLjQxNSwxNi4wMy01NC44MDcsNDIuMjE1LTYzLjU4OCw3Ny44M2MtMTIuMDcxLDQ5LjAwMiwxLjUzMiwxMDEuNTQxLDM4LjI5NiwxNDcuOTIxCiAgICAgICAgICAgICAgICAgICAgYzM4LjcwOSw0OC44MTYsOTcuODA4LDg0LjEzNiwxNjQuMDg4LDEwMC4zODJjMjEuMzMzLDQuNDEsNDMuNjEsNi44MDcsNjYuNTY0LDYuODA3YzU3LjU3NywwLDExMS4wNTgtMTQuNzIzLDE1NS40MDUtMzkuOTE3CiAgICAgICAgICAgICAgICAgICAgbC04NC42MDctNzIuMzY5QzUyMi45NCw1MTcuMTc0LDQ5NS45OTgsNTIxLjUyNSw0NzAuNjA4LDUyMS41MjV6IE00NzYuNTU2LDE1My4yMDFjLTguMzI5LDAtMTYuNTQsMC40MjItMjQuNjkzLDEuMDIxCiAgICAgICAgICAgICAgICAgICAgYzU0LjIyOCwyMC4xMDYsMTAxLjgxNiw1Mi44MDQsMTM1LjI0LDk0Ljk1YzQwLjQ2Nyw1MS4wNDUsNTUuMzE4LDEwOS4zMyw0MS44MjIsMTY0LjExN2MtOS4wODUsMzYuODcyLTMwLjg2MSw2NS45MDYtNjMuMjA1LDg0LjY4NgogICAgICAgICAgICAgICAgICAgIGw4My4wMjYsNzEuMDE0YzY0LjE4Ny00Mi42ODcsMTA1LjQxMS0xMDguNjQyLDEwNS40MTEtMTgyLjczQzc1NC4xNTgsMjU3LjU0MSw2MjkuODY5LDE1My4yMDEsNDc2LjU1NiwxNTMuMjAxeiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZmlsbD0iIzBjNGI4NyIgZD0iTTkwMy43NjgsMzU4LjYzNWMwLTE5LjYxNSwyMy4xNDEtMjcuNjU5LDQxLjczNC0yNy42NTljMzkuNzQsMCw1OS44NTYsMjAuMTE2LDU5Ljg1NiwyMC4xMTZsMjkuMTcyLTQzLjc1NwogICAgICAgICAgICAgICAgICAgIGMwLDAtMzAuNjg0LTI5LjE2Mi04OS4wMjctMjkuMTYyYy01MC43OCwwLTEwMS41OCwzMC42NzQtMTAxLjU4LDgwLjk2NGMwLDc0LjkzMywxMDcuNjIxLDc0LjQzMiwxMDcuNjIxLDEwNy4xMgogICAgICAgICAgICAgICAgICAgIGMwLDE4LjYxMy0yMi4xMjksMjcuNjU5LTQxLjc0NCwyNy42NTljLTQyLjc0NiwwLTY4LjM5MS0yNS42NDUtNjguMzkxLTI1LjY0NWwtMzMuMTk5LDQxLjIzM2MwLDAsMzcuNzE3LDM3LjIxNiwxMDEuNTksMzcuMjE2CiAgICAgICAgICAgICAgICAgICAgYzU4LjMzMywwLDEwMi4wOTEtMzIuNjg4LDEwMi4wOTEtODAuNDYzQzEwMTEuODg5LDM4OS44MTEsOTAzLjc2OCwzODkuODExLDkwMy43NjgsMzU4LjYzNXogTTExODYuOTI1LDI3OC4xNzEKICAgICAgICAgICAgICAgICAgICBjLTc5Ljk2MiwwLTE1OC40MTEsNjUuODc3LTE1OC40MTEsMTU0Ljg5NGMwLDY4LjM5MSw1Mi4yOTMsMTEzLjY2MSwxMjUuNzEzLDExMy42NjFjNzkuNDYxLDAsMTU4LjkzMS02NS4zODYsMTU4LjkzMS0xNTUuNDA1CiAgICAgICAgICAgICAgICAgICAgQzEzMTMuMTU4LDMyMy45MzIsMTI2MC44NTYsMjc4LjE3MSwxMTg2LjkyNSwyNzguMTcxeiBNMTE1NS4yMzksNDkyLjQxYy0zNi4yMTQsMC02Mi4zNi0yNC4xNDMtNjIuMzYtNjIuMzYKICAgICAgICAgICAgICAgICAgICBjMC01Ni4zMyw0Ny43NzUtOTcuNTczLDkzLjUzNi05Ny41NzNjMzYuMjE0LDAsNjEuODU5LDI1LjE1NCw2MS44NTksNjIuODcxQzEyNDguMjc0LDQ1Mi4xNzksMTIwMSw0OTIuNDEsMTE1NS4yMzksNDkyLjQxegogICAgICAgICAgICAgICAgICAgICBNMTM4OS42MTcsNDY3LjI2MWMwLTQuNTI4LDEuNTEzLTEzLjU3NCwzLjAxNS0yMC42MTdsNTAuOC0yNjMuMDI2aC02My44NjNsLTUyLjgxMywyNzMuMDgzCiAgICAgICAgICAgICAgICAgICAgYy0yLjAwNCwxMC4wNTgtMy4wMTUsMTguNjEzLTMuMDE1LDI1LjY0NWMwLDQ3Ljc3NSwzMy4xOTksNjAuODU4LDY3LjM4OSw2MC44NThjOS4wNTYsMCwxOC4xMTItMS41MTMsMTguMTEyLTEuNTEzbDExLjA2LTU1LjgxOQogICAgICAgICAgICAgICAgICAgIGMwLDAtNC4wMjcsMC41MDEtOS4wNTYsMC41MDFDMTQwMC42ODcsNDg2LjM3NSwxMzg5LjYxNyw0ODMuODYsMTM4OS42MTcsNDY3LjI2MXogTTE2MzEuNTM3LDI3OC4xNzEKICAgICAgICAgICAgICAgICAgICBjLTQ0Ljc1OSwwLTgzLjQ4OCwzMC4xNzMtOTcuNTczLDU0LjMwNmgtMC45OTJjMCwwLDQuMDA3LTEyLjU2Miw2LjUyMi0yNS4xMzVsNC41MzgtMjMuMTQxaC02MS44NTlsLTQ5Ljc5OCwyNTYuNDg0aDYzLjg3MwogICAgICAgICAgICAgICAgICAgIGwyMi4xMjktMTE1LjY2NWM5LjA1Ni00Ni43NzMsNDcuMjc0LTg4LjUxNyw5MS41MzItODguNTE3YzIwLjExNiwwLDMyLjE4Nyw5LjU1NywzMi4xODcsMzEuMTg1YzAsNi41MzItMS41MDMsMTUuMDg3LTMuMDE1LDIzLjYzMgogICAgICAgICAgICAgICAgICAgIGwtMjkuMTcyLDE0OS4zNjRoNjMuODYzbDMwLjY4NS0xNTkuNDIyYzIuMDEzLTExLjA2LDQuNTI4LTIzLjYzMiw0LjUyOC0zMy4xODlDMTcwOC45ODUsMjk4Ljc4OCwxNjc2Ljc5OCwyNzguMTcxLDE2MzEuNTM3LDI3OC4xNzEKICAgICAgICAgICAgICAgICAgICB6IE0xODY5LjkzOSwyNzguMTcxYy04NS41MDEsMC0xNDguMzYzLDcxLjQwNy0xNDguMzYzLDE1OC40MTFjMCw2MS44NTksNDQuNzY5LDExMC4xNDUsMTI0LjcyMSwxMTAuMTQ1CiAgICAgICAgICAgICAgICAgICAgYzU2Ljg0LDAsMTAwLjA4Ny0zMy43LDEwMC4wODctMzMuN2wtMTcuMS00OC43ODZjMCwwLTM4LjIxOCwyOC4xNy03OS40NjEsMjguMTdzLTYzLjM2Mi0yNS42NDUtNjMuMzYyLTU4LjM0MwogICAgICAgICAgICAgICAgICAgIGMwLTMuMDE1LDAtNi4wMzEsMC41MDEtOS41NDdoMTc2LjUyMmMwLDAsOS4wNDYtMjcuMTU4LDkuMDQ2LTQ5LjI4N0MxOTcyLjUzMSwzMTguNDAyLDE5MzguODMxLDI3OC4xNzEsMTg2OS45MzksMjc4LjE3MXoKICAgICAgICAgICAgICAgICAgICAgTTE5MDguNjY4LDM4MC43NjNIMTc5Ny4wMWMxMi41ODItMzEuNjg2LDM5LjIzOS01My4zMDQsNzEuOTE3LTUzLjMwNGMyNC4xNDMsMCw0MC43MzIsMTUuNTg4LDQwLjczMiw0Mi4yNDUKICAgICAgICAgICAgICAgICAgICBDMTkwOS42NiwzNzUuMjMzLDE5MDguNjY4LDM4MC43NjMsMTkwOC42NjgsMzgwLjc2M3ogTTIwODMuNzAxLDMzOC41MThoNTguODQ0bDkuNTU3LTUwLjc5aC01OC44NDRsMTQuNTg2LTczLjQzaC02MS4zNTkKICAgICAgICAgICAgICAgICAgICBsLTE0LjU4Niw3My40M2gtMzQuNzAxbC05LjU1Nyw1MC43OWgzMi42OThsLTIwLjExNSwxMDIuNTkyYy0xLjUwMyw4LjU0NS0zLjAyNSwxNy4xLTMuMDI1LDI0LjE0MwogICAgICAgICAgICAgICAgICAgIGMwLDU5Ljg0Niw0NC43NjksNzcuOTQ4LDkxLjAzMSw3Ny45NDhjOS4wNTYsMCwxOC42MDMtMS41MTMsMTguNjAzLTEuNTEzbDExLjA3LTU1LjgxOWMwLDAtNi4wMzEsMS4wMTItMTQuMDg1LDEuMDEyCiAgICAgICAgICAgICAgICAgICAgYy0xOS4xMDQsMC00MC4yMzEtNS4wMzktNDAuMjMxLTM0LjIwMWMwLTQuMDI3LDAuNTAxLTEyLjU3MiwyLjAxMy0yMC42MTdMMjA4My43MDEsMzM4LjUxOHoiPjwvcGF0aD4KICAgICAgICAgICAgPC9zdmc+Cg=="

/***/ }),

/***/ "./src/components/Experience/vuw.png":
/*!*******************************************!*\
  !*** ./src/components/Experience/vuw.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/vuw-22ca271b4d97d9b28cf90dac05bea522.png";

/***/ }),

/***/ "./src/components/Footer/github.svg":
/*!******************************************!*\
  !*** ./src/components/Footer/github.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNDM4LjU0OXB4IiBoZWlnaHQ9IjQzOC41NDlweCIgdmlld0JveD0iMCAwIDQzOC41NDkgNDM4LjU0OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjU0OSA0MzguNTQ5OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIiBkPSJNNDA5LjEzMiwxMTQuNTczYy0xOS42MDgtMzMuNTk2LTQ2LjIwNS02MC4xOTQtNzkuNzk4LTc5LjhDMjk1LjczNiwxNS4xNjYsMjU5LjA1Nyw1LjM2NSwyMTkuMjcxLDUuMzY1CgkJYy0zOS43ODEsMC03Ni40NzIsOS44MDQtMTEwLjA2MywyOS40MDhjLTMzLjU5NiwxOS42MDUtNjAuMTkyLDQ2LjIwNC03OS44LDc5LjhDOS44MDMsMTQ4LjE2OCwwLDE4NC44NTQsMCwyMjQuNjMKCQljMCw0Ny43OCwxMy45NCw5MC43NDUsNDEuODI3LDEyOC45MDZjMjcuODg0LDM4LjE2NCw2My45MDYsNjQuNTcyLDEwOC4wNjMsNzkuMjI3YzUuMTQsMC45NTQsOC45NDUsMC4yODMsMTEuNDE5LTEuOTk2CgkJYzIuNDc1LTIuMjgyLDMuNzExLTUuMTQsMy43MTEtOC41NjJjMC0wLjU3MS0wLjA0OS01LjcwOC0wLjE0NC0xNS40MTdjLTAuMDk4LTkuNzA5LTAuMTQ0LTE4LjE3OS0wLjE0NC0yNS40MDZsLTYuNTY3LDEuMTM2CgkJYy00LjE4NywwLjc2Ny05LjQ2OSwxLjA5Mi0xNS44NDYsMWMtNi4zNzQtMC4wODktMTIuOTkxLTAuNzU3LTE5Ljg0Mi0xLjk5OWMtNi44NTQtMS4yMzEtMTMuMjI5LTQuMDg2LTE5LjEzLTguNTU5CgkJYy01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5CgkJYy00LjA5My01LjMzMS04LjIzMi04Ljk0NS0xMi40MTktMTAuODQ4bC0xLjk5OS0xLjQzMWMtMS4zMzItMC45NTEtMi41NjgtMi4wOTgtMy43MTEtMy40MjljLTEuMTQyLTEuMzMxLTEuOTk3LTIuNjYzLTIuNTY4LTMuOTk3CgkJYy0wLjU3Mi0xLjMzNS0wLjA5OC0yLjQzLDEuNDI3LTMuMjg5YzEuNTI1LTAuODU5LDQuMjgxLTEuMjc2LDguMjgtMS4yNzZsNS43MDgsMC44NTNjMy44MDcsMC43NjMsOC41MTYsMy4wNDIsMTQuMTMzLDYuODUxCgkJYzUuNjE0LDMuODA2LDEwLjIyOSw4Ljc1NCwxMy44NDYsMTQuODQyYzQuMzgsNy44MDYsOS42NTcsMTMuNzU0LDE1Ljg0NiwxNy44NDdjNi4xODQsNC4wOTMsMTIuNDE5LDYuMTM2LDE4LjY5OSw2LjEzNgoJCWM2LjI4LDAsMTEuNzA0LTAuNDc2LDE2LjI3NC0xLjQyM2M0LjU2NS0wLjk1Miw4Ljg0OC0yLjM4MywxMi44NDctNC4yODVjMS43MTMtMTIuNzU4LDYuMzc3LTIyLjU1OSwxMy45ODgtMjkuNDEKCQljLTEwLjg0OC0xLjE0LTIwLjYwMS0yLjg1Ny0yOS4yNjQtNS4xNGMtOC42NTgtMi4yODYtMTcuNjA1LTUuOTk2LTI2LjgzNS0xMS4xNGMtOS4yMzUtNS4xMzctMTYuODk2LTExLjUxNi0yMi45ODUtMTkuMTI2CgkJYy02LjA5LTcuNjE0LTExLjA4OC0xNy42MS0xNC45ODctMjkuOTc5Yy0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNmMwLTIzLjAzNSw3LjUyLTQyLjYzNywyMi41NTctNTguODE3CgkJYy03LjA0NC0xNy4zMTgtNi4zNzktMzYuNzMyLDEuOTk3LTU4LjI0YzUuNTItMS43MTUsMTMuNzA2LTAuNDI4LDI0LjU1NCwzLjg1M2MxMC44NSw0LjI4MywxOC43OTQsNy45NTIsMjMuODQsMTAuOTk0CgkJYzUuMDQ2LDMuMDQxLDkuMDg5LDUuNjE4LDEyLjEzNSw3LjcwOGMxNy43MDUtNC45NDcsMzUuOTc2LTcuNDIxLDU0LjgxOC03LjQyMXMzNy4xMTcsMi40NzQsNTQuODIzLDcuNDIxbDEwLjg0OS02Ljg0OQoJCWM3LjQxOS00LjU3LDE2LjE4LTguNzU4LDI2LjI2Mi0xMi41NjVjMTAuMDg4LTMuODA1LDE3LjgwMi00Ljg1MywyMy4xMzQtMy4xMzhjOC41NjIsMjEuNTA5LDkuMzI1LDQwLjkyMiwyLjI3OSw1OC4yNAoJCWMxNS4wMzYsMTYuMTgsMjIuNTU5LDM1Ljc4NywyMi41NTksNTguODE3YzAsMTYuMTc4LTEuOTU4LDMwLjQ5Ny01Ljg1Myw0Mi45NjZjLTMuOSwxMi40NzEtOC45NDEsMjIuNDU3LTE1LjEyNSwyOS45NzkKCQljLTYuMTkxLDcuNTIxLTEzLjkwMSwxMy44NS0yMy4xMzEsMTguOTg2Yy05LjIzMiw1LjE0LTE4LjE4Miw4Ljg1LTI2Ljg0LDExLjEzNmMtOC42NjIsMi4yODYtMTguNDE1LDQuMDA0LTI5LjI2Myw1LjE0NgoJCWM5Ljg5NCw4LjU2MiwxNC44NDIsMjIuMDc3LDE0Ljg0Miw0MC41Mzl2NjAuMjM3YzAsMy40MjIsMS4xOSw2LjI3OSwzLjU3Miw4LjU2MmMyLjM3OSwyLjI3OSw2LjEzNiwyLjk1LDExLjI3NiwxLjk5NQoJCWM0NC4xNjMtMTQuNjUzLDgwLjE4NS00MS4wNjIsMTA4LjA2OC03OS4yMjZjMjcuODgtMzguMTYxLDQxLjgyNS04MS4xMjYsNDEuODI1LTEyOC45MDYKCQlDNDM4LjUzNiwxODQuODUxLDQyOC43MjgsMTQ4LjE2OCw0MDkuMTMyLDExNC41NzN6Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/carsonbruce/dev/carson/ceevee/src/components/Footer/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var text = "";

var githubLogo = __webpack_require__(/*! ./github.svg */ "./src/components/Footer/github.svg");

var linkedInLogo = __webpack_require__(/*! ./linkedin.svg */ "./src/components/Footer/linkedin.svg");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("span", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, text), __jsx("span", {
    className: "text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("b", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, "hello@carson.kiwi"))), __jsx("div", {
    className: "socialLinkPrint",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, "GitHub https://github.com/Kauabunga"), __jsx("div", {
    className: "socialLinkPrint",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Linkedin https://nz.linkedin.com/in/carsonbruce"), __jsx("a", {
    href: "https://github.com/Kauabunga",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "socialLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("amp-img", {
    src: githubLogo,
    height: "40px",
    width: "40px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  })), __jsx("a", {
    href: "https://nz.linkedin.com/in/carsonbruce",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "socialLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("amp-img", {
    src: linkedInLogo,
    height: "40px",
    width: "40px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }))));
});

/***/ }),

/***/ "./src/components/Footer/linkedin.svg":
/*!********************************************!*\
  !*** ./src/components/Footer/linkedin.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB3aWR0aD0iNDMwLjExN3B4IiBoZWlnaHQ9IjQzMC4xMThweCIgdmlld0JveD0iMCAwIDQzMC4xMTcgNDMwLjExOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDMwLjExNyA0MzAuMTE4OyIKCSB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBmaWxsPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIiBpZD0iTGlua2VkSW5fX3gyOF9hbHRfeDI5XyIgZD0iTTM5OC4zNTUsMEgzMS43ODJDMTQuMjI5LDAsMC4wMDIsMTMuNzkzLDAuMDAyLDMwLjgxN3YzNjguNDcxCgkJYzAsMTcuMDI1LDE0LjIzMiwzMC44MywzMS43OCwzMC44M2gzNjYuNTczYzE3LjU0OSwwLDMxLjc2LTEzLjgxNCwzMS43Ni0zMC44M1YzMC44MTdDNDMwLjExNSwxMy43OTgsNDE1LjkwNCwwLDM5OC4zNTUsMHoKCQkgTTEzMC40LDM2MC4wMzhINjUuNDEzVjE2NS44NDVIMTMwLjRWMzYwLjAzOHogTTk3LjkxMywxMzkuMzE1aC0wLjQzN2MtMjEuNzkzLDAtMzUuOTItMTQuOTA0LTM1LjkyLTMzLjU2MwoJCWMwLTE5LjAzNSwxNC41NDItMzMuNTM1LDM2Ljc2Ny0zMy41MzVjMjIuMjI3LDAsMzUuODk5LDE0LjQ5NiwzNi4zMzEsMzMuNTM1QzEzNC42NTQsMTI0LjQxNSwxMjAuNTU1LDEzOS4zMTUsOTcuOTEzLDEzOS4zMTV6CgkJIE0zNjQuNjU5LDM2MC4wMzhoLTY0Ljk2NlYyNTYuMTM4YzAtMjYuMTA3LTkuNDEzLTQzLjkyMS0zMi45MDctNDMuOTIxYy0xNy45NzMsMC0yOC42NDIsMTIuMDE4LTMzLjMyNywyMy42MjEKCQljLTEuNzM2LDQuMTQ0LTIuMTY2LDkuOTQtMi4xNjYsMTUuNzI4djEwOC40NjhoLTY0Ljk1NGMwLDAsMC44NS0xNzUuOTc5LDAtMTk0LjE5Mmg2NC45NjR2MjcuNTMxCgkJYzguNjI0LTEzLjIyOSwyNC4wMzUtMzIuMSw1OC41MzQtMzIuMWM0Mi43NiwwLDc0LjgyMiwyNy43MzksNzQuODIyLDg3LjQxNFYzNjAuMDM4eiBNMjMwLjg4MywxOTMuOTkKCQljMC4xMTEtMC4xODIsMC4yNjYtMC40MDEsMC40Mi0wLjYxNHYwLjYxNEgyMzAuODgzeiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "./src/components/Header/arrow.svg":
/*!*****************************************!*\
  !*** ./src/components/Header/arrow.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDMzLjUgNDMzLjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzMy41IDQzMy41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgo8ZyBpZD0iZmlsZS1kb3dubG9hZCI+CiAgPHBhdGggZD0iTTM5NS4yNSwxNTNoLTEwMlYwaC0xNTN2MTUzaC0xMDJsMTc4LjUsMTc4LjVMMzk1LjI1LDE1M3ogTTM4LjI1LDM4Mi41djUxaDM1N3YtNTFIMzguMjV6IiBmaWxsPSIjMjAzNDY2Ii8+CjwvZz4KCjwvc3ZnPgo="

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/carsonbruce/dev/carson/ceevee/src/components/Header/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var arrow = __webpack_require__(/*! ./arrow.svg */ "./src/components/Header/arrow.svg");

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "Carson Bruce"), __jsx("em", {
    className: "onlineView",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, "View at carson.kiwi"), __jsx("a", {
    className: "downloadButton",
    href: "/carson.bruce_cv.pdf",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("amp-img", {
    src: arrow,
    width: "20px",
    height: "20px",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }))));
});

/***/ }),

/***/ "./src/components/Interests/index.js":
/*!*******************************************!*\
  !*** ./src/components/Interests/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/carsonbruce/dev/carson/ceevee/src/components/Interests/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var interests = [{
  title: "Javascript"
}, {
  title: "User experience"
}, {
  title: "Netball"
}, {
  title: "Running"
}, {
  title: "Cycling"
}, {
  title: "Photography"
}, {
  title: "Gaming"
}, {
  title: "Sound systems"
}, {
  title: "Beer brewing"
}, {
  title: "Stenciling"
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "interestsContainer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Interests"), __jsx("ul", {
    className: "chipList",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, interests.map(function (interest) {
    return __jsx("li", {
      key: interest.title,
      className: "chip",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, interest.title);
  }))));
});

/***/ }),

/***/ "./src/components/Introduction/index.js":
/*!**********************************************!*\
  !*** ./src/components/Introduction/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/carsonbruce/dev/carson/ceevee/src/components/Introduction/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var text = "\nI plan and deliver throughout the entire software development process, from when a project is imagined to its release. \n\nI've worked on a number of large projects, demonstrating my experience through a range of roles.\n\n";
var text2 = "\n\n  My key attributes include: problem solving, passion to learn and share, open mindedness, and being a team player.\n\n";
var text3 = "\n\n  I am at home when working with and sharing JavaScript along with all the technologies and processes it enables.\n\n";
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "root",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "firstSentence",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("b", {
    className: "blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "I am passionate about creating simple and beautiful\xA0apps.")), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, text), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, text2), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, text3), __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, "Get in touch at", __jsx("a", {
    href: "mailto:hello@carson.kiwi",
    className: "introLink",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("b", {
    className: "blue",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "\xA0hello@carson.kiwi"))), __jsx("div", {
    style: {
      display: "block",
      height: 72
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }));
});

/***/ }),

/***/ "./src/components/Projects/index.js":
/*!******************************************!*\
  !*** ./src/components/Projects/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/carsonbruce/dev/carson/ceevee/src/components/Projects/index.js",
    _this2 = undefined;

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var projects = [{
  title: "Properly",
  client: "Properly",
  isDisabled: true,
  brief: "\n\n\n    ",
  bullets: []
}, {
  title: "Lending and Onboarding",
  client: "BNZ",
  isDisabled: false,
  brief: "\n\n      I joined a product team at BNZ to help transform their Lending and Onboarding systems, aiming to improve the experience\n      for customers and bank users. This transformation was supported by a new way of delivery, promoting more modular systems\n      design and implementation with supporting platforms and dev-ops processes.\n\n      I shared the lead for the Front-end implementation of two major applications and a component library.\n\n    ",
  bullets: ["Lead app development seeing Angular 2 through its beta releases.", "Promoted and adapted a UI component library for multiple applications.", "Guided Front-end developers through best practices, process and tooling.", "Guided UI Integration testers through best practices, process and tooling."]
}, {
  title: "Employment Agreement Builder",
  client: "Ministry of Business and Innovation and Employment",
  brief: "\n\n      EAB is an application for small to medium businesses to create new Employment agreements while learning\n      about employment law with easy-to-digest content.\n        \n      EAB exceeded its objectives and was built, tested, and delivered in three months.\n\n    ",
  bullets: ["Practiced BDD and TDD creating a suite of feature-complete integration and unit tests.", "Created a reusable forms solution, reused for a second MBIE Policy Builder app.", "Promoted a full stack Javascript solution supported by docker.", "Implemented Node.js micro service handling 10x expected load.", "Implemented a CI pipeline that performed automated testing and releasing dozenes of times a day."]
}, {
  title: "Online Banking",
  client: "Westpac",
  brief: "\n\n      I was part of a Westpac team with a goal to better their online banking experience.\n\n      I helped keep the developers of the project, mediating communications between development teams.\n      I improved automation in local, development, and test environments helping developers become more autonomous.\n\n      After two months my role extended to a technical lead of a team of five, responsible for feature development in the middleware.\n\n    ",
  bullets: ["Trusted as the gatekeeper of environments relied on by a team of 60+.", "Lead and mentor of a team of five.", "Proposed and owned developer tooling and experience improvements.", "Implemented a Javascript framework that supported other teams.", "Implemented the security feature of the client.", "Created and implemented a UX review noting usability and performance improvements for the application."]
}, {
  title: "NEON",
  client: "Sky TV",
  brief: "\n\n      NEON is Sky TV's entry into the New Zealand TV on demand market. Our project's team was responsible for \n      implementing the Front-end and API supporting other NEON product sitting on different platforms.\n\n      My role was a Front-end developer with close contact to the Web API and UX layers.\n\n    ",
  bullets: ["With the team, implement Neon's web application using angular.", "Integrated with a Salesforce API.", "Worked remotely for a thrid of the time."]
}, {
  title: "Crew Forms",
  client: "Air New Zealand",
  isDisabled: true,
  brief: "\n\n      The Crew Forms application looked to turn a paper based form into a mobile tablet-based solution.\n\n      The experience of these forms was improved with the new technology and with a change in platform \n      the forms were able to be re-imagined to provide a better user experience.\n\n      I worked on the project in its second phase, bringing in new features and tidying the first implementation.\n\n    ",
  bullets: ["Polished up the app correcting dozens of rendering bottlenecks, resulting in a jank-free hybrid solution.", "Worked with the UX and Design team to best fit solutions with the technology stack.", "Extended the apps feature list and matching test coverage.", "Provided solutions to bugs found within open source libraries"]
}, {
  title: "Name learning game",
  client: "Private",
  isDisabled: true,
  brief: "\n      We entered in a competition to imagine, design, and develop a proof of concept mobile gamification app in 3 days.\n\n      The brief was to create an educational tool that would help staff learn the names of their clients.\n\n      We placed well in the competition, gaining access to the company's evaluation panel for future\n      projects. Shortly after Solnet made a winning proposal for a separate project.\n\n    ",
  bullets: ["Created a proof of concept application in 3 days.", "Succeeded in gaining a position on the client's project panel.", "Worked effectively with other Javascript, UX and UI developers in parallel streams."]
}];

function Bullet(_ref) {
  var _this = this;

  var bullets = _ref.bullets;
  return __jsx("ul", {
    className: "projectBullets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, bullets.map(function (bullet) {
    return __jsx("li", {
      key: bullet,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 16
      }
    }, bullet);
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    className: "root",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 5
    }
  }, __jsx("h1", {
    id: "Projects",
    className: "projectsTitle",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 7
    }
  }, "Projects"), __jsx("div", {
    className: "projectsContainer",
    __self: _this2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }
  }, projects.filter(function (project) {
    return !project.isDisabled;
  }).map(function (project, i) {
    return __jsx("div", {
      key: project.title,
      className: i === 0 ? "firstProject" : "project",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "projectContainer",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "projectContent",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "projectTitleContainer",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 21
      }
    }, __jsx("h2", {
      className: "projectTitle",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 23
      }
    }, project.title), __jsx("em", {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 23
      }
    }, project.client)), __jsx("div", {
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "projectBrief",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 23
      }
    }, project.brief), __jsx(Bullet, {
      bullets: project.bullets,
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 23
      }
    })))));
  })));
});

/***/ }),

/***/ 1:
/*!********************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fcarsonbruce%2Fdev%2Fcarson%2Fceevee%2Fpages%2Findex.js&hotRouterUpdates=true ***!
  \********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=%2FUsers%2Fcarsonbruce%2Fdev%2Fcarson%2Fceevee%2Fpages%2Findex.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=%2FUsers%2Fcarsonbruce%2Fdev%2Fcarson%2Fceevee%2Fpages%2Findex.js&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map