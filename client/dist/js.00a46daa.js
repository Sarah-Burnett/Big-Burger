// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/utilities/dom/toggleClassList.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleClassList = exports.removeClassList = exports.addClassList = void 0;

var addClassList = function addClassList(elem, className) {
  typeof elem === "string" ? document.querySelector(elem).classList.add(className) : elem.classList.add(className);
};

exports.addClassList = addClassList;

var removeClassList = function removeClassList(elem, className) {
  typeof elem === "string" ? document.querySelector(elem).classList.remove(className) : elem.classList.remove(className);
};

exports.removeClassList = removeClassList;

var toggleClassList = function toggleClassList(elem, className) {
  typeof elem === "string" ? document.querySelector(elem).classList.toggle(className) : elem.classList.remove(className);
};

exports.toggleClassList = toggleClassList;
},{}],"js/utilities/dom/toggleModal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showModal = exports.hideModal = void 0;

var _toggleClassList = require("./toggleClassList");

var hideModal = function hideModal() {
  if (document.querySelector(".modal-active")) {
    (0, _toggleClassList.removeClassList)(".modal-active", "modal-active");
  }
};

exports.hideModal = hideModal;

var showModal = function showModal(modal) {
  hideModal();
  (0, _toggleClassList.addClassList)("nav", "nav-fixed");
  (0, _toggleClassList.addClassList)(modal, "modal-active");
};

exports.showModal = showModal;
},{"./toggleClassList":"js/utilities/dom/toggleClassList.js"}],"js/utilities/dom/changeVisibility.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayElement = exports.hideElement = void 0;

var hideElement = function hideElement(elem) {
  elem.style.opacity = "0";
  elem.style.pointerEvents = "none";
};

exports.hideElement = hideElement;

var displayElement = function displayElement(elem) {
  elem.style.opacity = "1";
  elem.style.pointerEvents = "auto";
};

exports.displayElement = displayElement;
},{}],"menu.json":[function(require,module,exports) {
module.exports = [{
  "menu": "To tempt your appetite",
  "intro": "What will it be",
  "items": [{
    "title": "Nachos",
    "ingredients": "Tortilla chips, guac, salsa, cheese",
    "price": "£5.99"
  }, {
    "title": "BBQ Chicken wings",
    "ingredients": "Chicken wings in our sticky bbq sauce",
    "price": "£3.99"
  }, {
    "title": "Halloumi fries",
    "ingredients": "Battered halloumi sticks with tomato chutney",
    "price": "£5.99"
  }, {
    "title": "Something else",
    "ingredients": "My brain has died now",
    "price": "£2.99"
  }]
}, {
  "menu": "Choose your sides",
  "intro": "All our sides are scrumptious",
  "items": [{
    "title": "Rosemary fries",
    "ingredients": "Fries with signature rosemary salt",
    "price": "£2.99"
  }, {
    "title": "Sweet potato fries",
    "ingredients": "Sweet potato fries with signature rosemary salt",
    "price": "£3.99"
  }, {
    "title": "Coleslaw",
    "ingredients": "You know what coleslaw is",
    "price": "£2.99"
  }, {
    "title": "House salad",
    "ingredients": "Leaves and red things",
    "price": "£2.99"
  }]
}, {
  "menu": "Choose your burger",
  "intro": "All handcrafted burgers come with lettuce, tomato and a fresh bun",
  "items": [{
    "title": "Smoking cow",
    "ingredients": "Our beef patty, BBQ sauce, Jalapenos",
    "price": "£9"
  }, {
    "title": "Chicken Lickn",
    "ingredients": "Southern fried chicken, Montery jack cheese, BBQ sauce",
    "price": "£3.99"
  }, {
    "title": "Three pigs",
    "ingredients": "Sausage patty, Bacon, Chorizo",
    "price": "£2.99"
  }, {
    "title": "Classic",
    "ingredients": "Our beef patty, Gherkins, Tomato sauce",
    "price": "£2.99"
  }]
}, {
  "menu": "Puddings",
  "intro": "To finish off",
  "items": [{
    "title": "Sticky toffee pudding",
    "ingredients": "Sponge of the toffee kind",
    "price": "£5"
  }, {
    "title": "Apple crumble",
    "ingredients": "Get in my belly",
    "price": "£5"
  }, {
    "title": "Another pudding",
    "ingredients": "Did I look hard enough for a menu api?",
    "price": "£5"
  }, {
    "title": "Brownie",
    "ingredients": "Classic with side of raspberry coulis",
    "price": "£5"
  }]
}];
},{}],"js/utilities/dom/updateMenu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMenu = void 0;

var _changeVisibility = require("./changeVisibility");

// menu items
var menuJSON = require('/menu.json');

var menuContainer = document.querySelector(".menu-container");

var updateMenu = function updateMenu(index) {
  (0, _changeVisibility.hideElement)(menuContainer);
  var _menuJSON$index = menuJSON[index],
      menu = _menuJSON$index.menu,
      intro = _menuJSON$index.intro,
      items = _menuJSON$index.items;
  var output = "";
  output += "\n      <h3>".concat(menu, "</h3>\n      <p class=\"menu-description\">").concat(intro, "</p>\n      <div class=\"menu-list\">\n      ");
  items.forEach(function (item) {
    output += "\n      <div class=\"menu-item\">\n        <h4>".concat(item.title, "</h4>\n        <span>").concat(item.ingredients, "</span>\n        <div>").concat(item.price, "</div>\n      </div>\n      ");
  });
  menuContainer.innerHTML = output;
  (0, _changeVisibility.displayElement)(menuContainer);
};

exports.updateMenu = updateMenu;
},{"./changeVisibility":"js/utilities/dom/changeVisibility.js","/menu.json":"menu.json"}],"js/utilities/styles.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.darkGreen = exports.green = exports.white = void 0;
var white = '#F5F5F5';
exports.white = white;
var green = '#36970F';
exports.green = green;
var darkGreen = '#205909';
exports.darkGreen = darkGreen;
},{}],"js/utilities/dom/Carousel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("../styles");

var _changeVisibility = require("./changeVisibility");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var displayDotActive = function displayDotActive(dot) {
  return dot.style.background = _styles.green;
};

var displayDotInactive = function displayDotInactive(dot) {
  return dot.style.background = _styles.darkGreen;
};

var Carousel = /*#__PURE__*/function () {
  function Carousel(items, dots) {
    _classCallCheck(this, Carousel);

    this.items = document.querySelectorAll(items);
    this.dots = document.querySelectorAll(dots);
    this.length = this.items.length;
    this.activeIndex = 0;
    this.interval = false;
  }

  _createClass(Carousel, [{
    key: "changeItem",
    value: function changeItem(index) {
      (0, _changeVisibility.hideElement)(this.items[this.activeIndex]);
      displayDotInactive(this.dots[this.activeIndex]);
      (0, _changeVisibility.displayElement)(this.items[index]);
      displayDotActive(this.dots[index]);
      this.activeIndex = index;
      return this;
    }
  }, {
    key: "autoChangeItem",
    value: function autoChangeItem() {
      var index = this.activeIndex + 1;

      if (index < this.length) {
        this.changeItem(index);
        this.activeIndex = index;
        return;
      }

      this.changeItem(0);
      this.activeIndex = 0;
    }
  }]);

  return Carousel;
}();

exports.default = Carousel;
},{"../styles":"js/utilities/styles.js","./changeVisibility":"js/utilities/dom/changeVisibility.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

var _toggleModal = require("./utilities/dom/toggleModal");

var _updateMenu = require("./utilities/dom/updateMenu");

var _toggleClassList = require("./utilities/dom/toggleClassList");

var _Carousel = _interopRequireDefault(require("./utilities/dom/Carousel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//nav bar - fixed on scroll & mob nav
window.onscroll = function () {
  window.pageYOffset >= 10 ? (0, _toggleClassList.addClassList)("nav", "nav-fixed") : (0, _toggleClassList.removeClassList)("nav", "nav-fixed");
};

<<<<<<< HEAD
(0, _addEventListener.addEventListener)(".burger", function () {
  return (0, _toggleClassList.toggleClassList)("body", "nav-active");
=======
burger.addEventListener("click", function () {
  return (0, _toggleClassList.toggleClassList)("nav", "nav-active");
>>>>>>> dates
}); // smooth scroll

new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
  header: "[data-scroll-header]"
}); //update menu contents

starterBtn.addEventListener("click", function () {
  return (0, _updateMenu.updateMenu)(0);
});
sidesBtn.addEventListener("click", function () {
  return (0, _updateMenu.updateMenu)(1);
});
burgerBtn.addEventListener("click", function () {
  return (0, _updateMenu.updateMenu)(2);
});
puddingBtn.addEventListener("click", function () {
  return (0, _updateMenu.updateMenu)(3);
<<<<<<< HEAD
}); //review carousel

{
  var reviewCounter = 0;
  var reviewInterval;
  var reviewItems = document.querySelectorAll(".review-item");
  var reviewDots = document.querySelectorAll(".review-dot");

  var updateReviewDot = function updateReviewDot(index) {
    (0, _updateActiveDot.updateActiveDot)(reviewDots, reviewItems, index);
  }; //auto update review


  var autoUpdateReview = function autoUpdateReview() {
    updateReviewDot(reviewCounter);
    return reviewCounter < reviewItems.length - 1 ? reviewCounter++ : reviewCounter = 0;
  };

  var setReviewInterval = function setReviewInterval() {
    reviewInterval = setInterval(autoUpdateReview, 3000);
  };

  setReviewInterval(); //manually click to update review

  var manualUpdateReview = function manualUpdateReview(index) {
    clearInterval(reviewInterval);
    updateReviewDot(index);
    reviewCounter = index;
    setReviewInterval();
  };

  reviewDots.forEach(function (dot, index) {
    (0, _addEventListener.addEventListener)(dot, function () {
      return manualUpdateReview(index);
    });
  });
} //location carousel

{
  var locationItems = document.querySelectorAll(".location-item");
  var locationDots = document.querySelectorAll(".location-dot");

  var updateLocationDot = function updateLocationDot(index) {
    (0, _updateActiveDot.updateActiveDot)(locationDots, locationItems, index);
  };

  locationDots.forEach(function (dot, index) {
    (0, _addEventListener.addEventListener)(dot, function () {
      return updateLocationDot(index);
=======
});
{
  var review = new _Carousel.default(".review-item", ".review-dot");
  var reviewInterval;

  var setReviewInterval = function setReviewInterval() {
    reviewInterval = setInterval(function () {
      return review.autoChangeItem();
    }, 3000);
  };

  review.dots.forEach(function (item, index) {
    item.addEventListener("click", function () {
      clearInterval(reviewInterval);
      review.changeItem(index);
      setReviewInterval();
    });
  });
  setReviewInterval();
}
{
  var location = new _Carousel.default(".location-item", ".location-dot");
  location.dots.forEach(function (item, index) {
    item.addEventListener("click", function () {
      return location.changeItem(index);
>>>>>>> dates
    });
  });
} //location modals

document.querySelector(".glensgaich-btn").addEventListener("click", function () {
  return (0, _toggleModal.showModal)(".glensgaich-map");
});
document.querySelector(".tanygrisiau-btn").addEventListener("click", function () {
  return (0, _toggleModal.showModal)(".tanygirisau-map");
});
document.querySelectorAll(".modal-close").forEach(function (close) {
  return close.addEventListener("click", _toggleModal.hideModal);
});
},{"./utilities/dom/toggleModal":"js/utilities/dom/toggleModal.js","./utilities/dom/updateMenu":"js/utilities/dom/updateMenu.js","./utilities/dom/toggleClassList":"js/utilities/dom/toggleClassList.js","./utilities/dom/Carousel":"js/utilities/dom/Carousel.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
<<<<<<< HEAD
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54907" + '/');
=======
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54689" + '/');
>>>>>>> dates

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map