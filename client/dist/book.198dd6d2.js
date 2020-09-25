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
})({"js/utilities/booking/availableDates.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAvailableDates = exports.getAvailableDates = void 0;

var getAvailableDates = function getAvailableDates(today) {
  var minDate = new Date(today + 86400000);
  var maxDate = new Date(today + 1296000000);
  return {
    minDate: minDate,
    maxDate: maxDate
  };
};

exports.getAvailableDates = getAvailableDates;

var setAvailableDates = function setAvailableDates(today) {
  var _getAvailableDates = getAvailableDates(today),
      minDate = _getAvailableDates.minDate,
      maxDate = _getAvailableDates.maxDate;

  var dateInput = document.querySelector("#date");
  dateInput.min = minDate.toISOString().split("T")[0];
  dateInput.max = maxDate.toISOString().split("T")[0];
};

exports.setAvailableDates = setAvailableDates;
},{}],"js/utilities/dom/changeInputValue.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeInputValue = void 0;

var changeInputValue = function changeInputValue(input, value) {
  document.querySelector(input).value = value;
};

exports.changeInputValue = changeInputValue;
},{}],"js/utilities/booking/submitBooking.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleSubmit = exports.setParams = void 0;

var _fetch = require("./fetch");

var _validateBooking = require("./validateBooking");

var _disableButton = require("../dom/disableButton");

var _addSessionStorage = require("../storage/addSessionStorage");

var setParams = function setParams() {
  var form = document.querySelector("#bookForm");
  var name = form.elements["name"].value;
  var email = form.elements["email"].value;
  var restaurant = form.elements["restaurant"].value;
  var date = form.elements["date"].value;
  var time = form.elements["time"].value;
  var party = form.elements["party"].value;
  var message = form.elements["message"].value;
  return {
    name: name,
    email: email,
    restaurant: restaurant,
    date: date,
    time: time,
    party: party,
    message: message
  };
};

exports.setParams = setParams;

var handleSubmit = function handleSubmit(e, type, button) {
  e.preventDefault();
  var params = setParams();
  (0, _addSessionStorage.addSessionStorage)("booking", JSON.stringify(params));
  var err = (0, _validateBooking.validateBooking)();

  if (!err) {
    document.querySelector(button).disabled = true;
    (0, _fetch.fetch)(type, params);
  }
};

exports.handleSubmit = handleSubmit;
},{}],"js/utilities/booking/types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DELETE_BOOKING = exports.PUT_BOOKING = exports.POST_BOOKING = exports.GET_BOOKING = exports.SHOW_CANCELLED = exports.SHOW_FULL = exports.SHOW_FAILED = exports.SHOW_MODIFIED = exports.SHOW_BOOKED = void 0;
var SHOW_BOOKED = "SHOW_BOOKED";
exports.SHOW_BOOKED = SHOW_BOOKED;
var SHOW_MODIFIED = "SHOW_MODIFIED";
exports.SHOW_MODIFIED = SHOW_MODIFIED;
var SHOW_FAILED = "SHOW_FAILED";
exports.SHOW_FAILED = SHOW_FAILED;
var SHOW_FULL = "SHOW_FULL";
exports.SHOW_FULL = SHOW_FULL;
var SHOW_CANCELLED = "SHOW_CANCELLED";
exports.SHOW_CANCELLED = SHOW_CANCELLED;
var GET_BOOKING = "GET_BOOKING";
exports.GET_BOOKING = GET_BOOKING;
var POST_BOOKING = "POST_BOOKING";
exports.POST_BOOKING = POST_BOOKING;
var PUT_BOOKING = "PUT_BOOKING";
exports.PUT_BOOKING = PUT_BOOKING;
var DELETE_BOOKING = "DELETE_BOOKING";
exports.DELETE_BOOKING = DELETE_BOOKING;
},{}],"js/utilities/dom/toggleClassList.js":[function(require,module,exports) {
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
},{"./toggleClassList":"js/utilities/dom/toggleClassList.js"}],"js/utilities/booking/autofillForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autoFillForm = void 0;

var _toggleModal = require("../dom/toggleModal");

var autoFillForm = function autoFillForm(data) {
  var inputs = document.querySelectorAll("input");
  inputs.forEach(function (input) {
    if (input.name !== "id") input.value = data[input.name];
  });
  if (document.querySelector(".modal-active")) (0, _toggleModal.hideModal)();
};

exports.autoFillForm = autoFillForm;
},{"../dom/toggleModal":"js/utilities/dom/toggleModal.js"}],"js/book.js":[function(require,module,exports) {
"use strict";

var _availableDates = require("./utilities/booking/availableDates");

var _changeInputValue = require("./utilities/dom/changeInputValue");

var _submitBooking = require("./utilities/booking/submitBooking");

var _types = require("./utilities/booking/types");

var _autofillForm = require("./utilities/booking/autofillForm");

//preparing form and form Buttons
(0, _availableDates.setAvailableDates)(Date.now());
document.querySelector("#date").addEventListener("onchange", function (event) {
  if (event.target.validity.valid) {
    var day = getDayFromDate;
    setAvailableTimes(day);
  }
}); // form dropdown buttons

document.querySelectorAll(".dropdownBtn").forEach(function (btn) {
  btn.addEventListener('click', function () {
    (0, _changeInputValue.changeInputValue)(btn.dataset.input, btn.dataset.value);
  });
}); //fill from session storage

if (sessionStorage.booking) {
  (0, _autofillForm.autoFillForm)(JSON.parse(sessionStorage.booking));
} // create booking /book


var bookBtn = ".bookBtn";

document.querySelector(".postBookForm").onsubmit = function (e) {
  return (0, _submitBooking.handleSubmit)(e, _types.POST_BOOKING, bookBtn);
};
},{"./utilities/booking/availableDates":"js/utilities/booking/availableDates.js","./utilities/dom/changeInputValue":"js/utilities/dom/changeInputValue.js","./utilities/booking/submitBooking":"js/utilities/booking/submitBooking.js","./utilities/booking/types":"js/utilities/booking/types.js","./utilities/booking/autofillForm":"js/utilities/booking/autofillForm.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49262" + '/');

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
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","js/book.js"], null)
//# sourceMappingURL=/book.198dd6d2.js.map