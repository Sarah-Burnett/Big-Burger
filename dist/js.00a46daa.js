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
})({"menu.json":[function(require,module,exports) {
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
},{}],"js/menu.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuContents = menuContents;

// menu items
var menuJSON = require('/menu.json');

var menuContainer = document.querySelector(".menu-container");

function menuContents() {
  function updateMenu(index) {
    menuContainer.style.opacity = 0;
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
    menuContainer.style.opacity = 1;
  }

  ;
  document.querySelector("#button-starter").addEventListener('click', function () {
    updateMenu(0);
  });
  document.querySelector("#button-burger").addEventListener('click', function () {
    updateMenu(2);
  });
  document.querySelector("#button-sides").addEventListener('click', function () {
    updateMenu(1);
  });
  document.querySelector("#button-pudding").addEventListener('click', function () {
    updateMenu(3);
  });
} //0 = starter; 1 = sides; 2= burger; 3=pudding
},{"/menu.json":"menu.json"}],"js/review.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reviewCarousel = reviewCarousel;

function reviewCarousel() {
  var reviewCounter = 0;
  var reviewItems = document.querySelectorAll(".review-item");
  var reviewDots = document.querySelectorAll(".review-dot");

  function autoReview() {
    reviewDots.forEach(function (dot) {
      dot.style.background = "#36970F";
    });
    reviewItems.forEach(function (review) {
      review.style.opacity = "0";
    });
    reviewDots[reviewCounter].style.background = "#205909";
    reviewItems[reviewCounter].style.opacity = "1";
    if (reviewCounter === reviewItems.length - 1) return reviewCounter = 0;
    reviewCounter++;
  }

  ;

  var reviewInterval = function reviewInterval() {
    return setInterval(autoReview, 3000);
  };

  reviewInterval();

  var clickReview = function clickReview(item, index) {
    clearInterval(reviewInterval);
    item.addEventListener('click', function () {
      reviewDots.forEach(function (dot) {
        return dot.style.background = "#36970F";
      });
      reviewItems.forEach(function (item) {
        return item.style.opacity = "0";
      });
      reviewDots[index].style.background = "#205909";
      reviewItems[index].style.opacity = "1";
      reviewCounter = index;
      reviewInterval();
    });
  };

  reviewDots.forEach(clickReview);
}

;
},{}],"js/location.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locationCarousel = locationCarousel;

// location carousel 
function locationCarousel() {
  var locationItems = document.querySelectorAll(".location-item");
  var locationDots = document.querySelectorAll(".location-dot");

  var changeLocation = function changeLocation(item, index) {
    item.addEventListener('click', function () {
      locationDots.forEach(function (dot) {
        return dot.style.background = "#36970F";
      });
      locationItems.forEach(function (item) {
        item.style.opacity = "0";
        item.style.pointerEvents = "none";
      });
      locationDots[index].style.background = "#205909";
      locationItems[index].style.opacity = "1";
      locationItems[index].style.pointerEvents = "auto";
    });
  };

  locationDots.forEach(changeLocation);
}

;
},{}],"js/modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleModal = toggleModal;

function toggleModal() {
  var modal = document.querySelector(".modal-bg");

  function showModal(contents) {
    modal.classList.remove("modal-inactive");
    modal.classList.add("modal-active");
    document.querySelector(contents).style.display = "block";
  }

  ;

  function hideModal() {
    modal.classList.remove("modal-active");
    document.querySelector("#glensgaich-map").style.display = "none";
    document.querySelector("#tanygrisiau-map").style.display = "none";
  }

  document.querySelector(".glensgaich-btn").addEventListener('click', function () {
    showModal("#glensgaich-map");
  });
  document.querySelector(".tanygrisiau-btn").addEventListener('click', function () {
    showModal("#tanygrisiau-map");
  });
  document.querySelector(".modal-close").addEventListener('click', hideModal);
  hideModal();
}
},{}],"js/index.js":[function(require,module,exports) {
"use strict"; // nav bar burger

var _menu = require("./menu");

var _review = require("./review");

var _location = require("./location");

var _modal = require("./modal");

var burger = document.querySelector(".burger");
var nav = document.querySelector("nav");

function toggleNav() {
  nav.classList.toggle("nav-active");
}

burger.addEventListener('click', toggleNav); // fixed nav bar

window.onscroll = function () {
  if (window.pageYOffset >= 10) {
    nav.classList.add("nav-fixed");
  } else {
    nav.classList.remove("nav-fixed");
  }

  ;
}; // smooth scroll 


var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
  header: '[data-scroll-header]'
}); // update menu

(0, _menu.menuContents)(); // review carousel

(0, _review.reviewCarousel)(); // location carousel

(0, _location.locationCarousel)(); //modal

(0, _modal.toggleModal)();
},{"./menu":"js/menu.js","./review":"js/review.js","./location":"js/location.js","./modal":"js/modal.js"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49533" + '/');

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
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map