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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

var btnGarn = document.querySelector('.garn'),
    btnWhole = document.querySelector('.whole'),
    generalAnswer = document.querySelector('.main-window__answer-text'),
    finalAnswer = document.querySelector('.main-window__answer-final'),
    repeatAnswer = document.querySelector('.main-window__answer-repeat'),
    garn = ['Драники с сосисками', 'Пюре с котлетами', 'Запеченая картошка с колбасками'],
    whole = ['Пицца', 'Чебуреки', 'Пельмени'];
generalAnswer.style.display = 'none';
generalAnswer.classList.add('animated');
finalAnswer.style.display = 'none';
finalAnswer.classList.add('animated');
repeatAnswer.style.display = 'none';
repeatAnswer.classList.add('animated');
btnGarn.addEventListener('click', function () {
  if (generalAnswer.style.display !== 'block') {
    generalAnswer.style.display = 'block';
    generalAnswer.classList.add('fadeIn');
    setTimeout(function () {
      finalAnswer.textContent = garn[getRandomInRange(0, 2)];
      finalAnswer.classList.add('fadeIn');
      finalAnswer.style.display = 'block';
    }, 2000);
    setTimeout(function () {
      repeatAnswer.classList.add('fadeIn');
      repeatAnswer.style.display = 'block';
    }, 3000);
  } else {
    generalAnswer.style.display = 'none';
    finalAnswer.style.display = 'none';
    repeatAnswer.style.display = 'none';
    generalAnswer.classList.remove('fadeIn');
    finalAnswer.classList.remove('fadeIn');
    repeatAnswer.classList.remove('fadeIn');
    setTimeout(function () {
      generalAnswer.style.display = 'block';
      generalAnswer.classList.add('fadeIn');
    }, 1000);
    setTimeout(function () {
      finalAnswer.textContent = garn[getRandomInRange(0, 2)];
      finalAnswer.classList.add('fadeIn');
      finalAnswer.style.display = 'block';
    }, 2000);
    setTimeout(function () {
      repeatAnswer.classList.add('fadeIn');
      repeatAnswer.style.display = 'block';
    }, 3000);
  }
});
btnWhole.addEventListener('click', function () {
  if (generalAnswer.style.display !== 'block') {
    generalAnswer.style.display = 'block';
    generalAnswer.classList.add('fadeIn');
    setTimeout(function () {
      finalAnswer.textContent = whole[getRandomInRange(0, 2)];
      finalAnswer.classList.add('fadeIn');
      finalAnswer.style.display = 'block';
    }, 2000);
    setTimeout(function () {
      repeatAnswer.classList.add('fadeIn');
      repeatAnswer.style.display = 'block';
    }, 3000);
  } else {
    generalAnswer.style.display = 'none';
    finalAnswer.style.display = 'none';
    repeatAnswer.style.display = 'none';
    generalAnswer.classList.remove('fadeIn');
    finalAnswer.classList.remove('fadeIn');
    repeatAnswer.classList.remove('fadeIn');
    setTimeout(function () {
      generalAnswer.style.display = 'block';
      generalAnswer.classList.add('fadeIn');
    }, 1000);
    setTimeout(function () {
      finalAnswer.textContent = whole[getRandomInRange(0, 2)];
      finalAnswer.classList.add('fadeIn');
      finalAnswer.style.display = 'block';
    }, 2000);
    setTimeout(function () {
      repeatAnswer.classList.add('fadeIn');
      repeatAnswer.style.display = 'block';
    }, 3000);
  }
});

function getRandomInRange(min, max) {
  // функция для рандомного целого числа в диапазоне
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map