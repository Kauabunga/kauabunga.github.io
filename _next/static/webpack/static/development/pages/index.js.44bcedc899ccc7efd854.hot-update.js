webpackHotUpdate("static/development/pages/index.js",{

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
  brief: "\n    \n    I started Middleware NZ taking on more of an API developer on projects and have been learning lots.\n\n    ",
  svg: {
    src: middlewareLogo,
    height: "132px",
    width: "135px"
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
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx("h1", {
    id: "Experience",
    className: "experienceTitle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, "Experience"), jobs.map(function (job, i) {
    return __jsx("div", {
      key: job.title,
      className: i !== jobs.length - 1 ? "job" : "lastJob",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "jobContentContainer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jobContent",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "titleContainer",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, __jsx("h2", {
      className: "jobTitle",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 19
      }
    }, job.title), __jsx("em", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 19
      }
    }, job.date)), job.svg ? __jsx("div", {
      className: "jobImage",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 19
      }
    }, __jsx("amp-img", {
      src: job.svg.src,
      height: job.svg.height,
      width: job.svg.width,
      layout: "responsive",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 21
      }
    })) : null, __jsx("p", {
      className: "jobBrief",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, job.brief), job.link ? __jsx("a", {
      className: "jobLink",
      href: job.linkHref,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 19
      }
    }, __jsx("strong", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 21
      }
    }, job.link)) : null)));
  }));
});

/***/ })

})
//# sourceMappingURL=index.js.44bcedc899ccc7efd854.hot-update.js.map