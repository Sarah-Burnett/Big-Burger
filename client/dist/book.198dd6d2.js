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
})({"js/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.url = void 0;
var url = './api/guest/booking';
exports.url = url;
},{}],"js/date.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.minmaxDate = exports.dateFortnightplus1 = exports.dateTodayplus1 = void 0;
var dateInput = document.querySelector('#date');
var dateTodayplus1 = new Date(Date.now() + 86400000);
exports.dateTodayplus1 = dateTodayplus1;
var dateFortnightplus1 = new Date(Date.now() + 1296000000);
exports.dateFortnightplus1 = dateFortnightplus1;

var minmaxDate = function minmaxDate() {
  dateInput.min = dateTodayplus1.toISOString().split('T')[0];
  dateInput.max = dateFortnightplus1.toISOString().split('T')[0];
  ;
};

exports.minmaxDate = minmaxDate;
},{}],"js/selectBtns.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectBtns = void 0;

var selectBtns = function selectBtns() {
  // party buttons
  var selectParty = function selectParty() {
    var increment = function increment(field, _increment, max) {
      var _document$querySelect = document.querySelector(field),
          value = _document$querySelect.value;

      if (value < max) document.querySelector(field).value = parseInt(value) + _increment;
    };

    var decrement = function decrement(field, _decrement, min) {
      var _document$querySelect2 = document.querySelector(field),
          value = _document$querySelect2.value;

      if (value > min) document.querySelector(field).value = parseInt(value) - _decrement;
    };

    document.querySelector(".incPartyBtn").onclick = function () {
      return increment('#party', 1, 8);
    };

    document.querySelector(".decPartyBtn").onclick = function () {
      return decrement('#party', 1, 2);
    };
  }; //time selection


  var selectTime = function selectTime() {
    var time = ["17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00"];

    var plus30 = function plus30() {
      var index = time.indexOf(document.querySelector('#time').value);
      if (index < time.length - 1) document.querySelector('#time').value = time[index + 1];
    };

    var minus30 = function minus30() {
      var index = time.indexOf(document.querySelector('#time').value);
      if (index > 0) document.querySelector('#time').value = time[index - 1];
    };

    document.querySelector(".incTimeBtn").onclick = plus30;
    document.querySelector(".decTimeBtn").onclick = minus30;
  }; //restaurant selection


  var selectRestaurant = function selectRestaurant() {
    var rest = ["Glensgaich", "Tanygrisiau"];

    var inc = function inc() {
      var index = rest.indexOf(document.querySelector('#restaurant').value);
      if (index < rest.length - 1) document.querySelector('#restaurant').value = rest[index + 1];
    };

    var dec = function dec() {
      var index = rest.indexOf(document.querySelector('#restaurant').value);
      if (index > 0) document.querySelector('#restaurant').value = rest[index - 1];
    };

    document.querySelector(".incRestBtn").onclick = inc;
    document.querySelector(".decRestBtn").onclick = dec;
  };

  selectRestaurant();
  selectTime();
  selectParty();
};

exports.selectBtns = selectBtns;
},{}],"js/validation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkError = void 0;

var _date = require("./date");

var name = document.querySelector('#name');
var email = document.querySelector('#email');
var date = document.querySelector('#date');
var time = document.querySelector('#time');
var party = document.querySelector('#party');
var formBoxes = document.querySelectorAll('#bookForm div');
var inputs = document.querySelectorAll('input');
var errorBoxes = document.querySelectorAll('.error');

var checkError = function checkError() {
  formBoxes.forEach(function (div) {
    if (div.classList.contains('invalid')) {
      div.classList.remove('invalid');
    }

    ;
  });
  inputs.forEach(function (input) {
    if (input.classList.contains('invalid')) {
      input.classList.remove('invalid');
    }

    ;
  });
  errorBoxes.forEach(function (p) {
    p.innerHTML = '';
    p.style.display = 'none';
  });
  var error = 0;

  if (!party.validity.valid) {
    error = 1;
    showError(5, 'Please select the number of people');
  }

  if (!time.validity.valid) {
    error = 1;
    showError(4, 'Please select the time you would like to book');
  }

  if (!date.validity.valid) {
    error = 1;
    showError(3, "Please input a date (dd/mm/yy) between ".concat(_date.dateTodayplus1.getDate(), "/").concat(_date.dateTodayplus1.getMonth() + 1, "/").concat(_date.dateTodayplus1.getFullYear(), " and ").concat(_date.dateFortnightplus1.getDate(), "/").concat(_date.dateFortnightplus1.getMonth() + 1, "/").concat(_date.dateFortnightplus1.getFullYear()));
  }

  if (!email.validity.valid) {
    error = 1;
    showError(1, 'Please enter your valid email address');
  }

  if (!name.validity.valid) {
    error = 1;
    showError(0, 'Please enter your name');
  }

  return error;
};

exports.checkError = checkError;

var showError = function showError(index, msg) {
  var errorMsg = msg;
  errorBoxes[index].innerHTML = errorMsg;
  errorBoxes[index].style.display = 'block';

  if (index == 0) {
    document.querySelector('#name').classList.add('invalid');
  }

  if (index == 1) {
    document.querySelector('#email').classList.add('invalid');
  }

  if (index == 3) {
    document.querySelector('#date').classList.add('invalid');
  }

  formBoxes[index].scrollIntoView();
};
},{"./date":"js/date.js"}],"js/book.js":[function(require,module,exports) {
"use strict";

var _api = require("./api");

var _date = require("./date");

var _selectBtns = require("./selectBtns");

var _validation = require("./validation");

console.log(_api.url); //form submit

var submitForm = function submitForm() {
  var bookForm = document.querySelector('#bookForm');
  var bookBtn = document.querySelector('#bookBtn');

  var postBooking = function postBooking(url) {
    var form = document.querySelector('#bookForm');
    var name = form.elements["name"].value;
    var email = form.elements["email"].value;
    var restaurant = form.elements["restaurant"].value;
    var date = form.elements["date"].value;
    var time = form.elements["time"].value;
    var party = form.elements["party"].value;
    var message = form.elements["message"].value;
    var params = "form-name=booking&name=".concat(name, "&email=").concat(email, "&restaurant=").concat(restaurant, "&date=").concat(date, "&time=").concat(time, "&party=").concat(party, "&message=").concat(message);
    console.log(params);
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url, true);
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');

      xhr.onload = function () {
        var _JSON$parse = JSON.parse(this.responseText),
            _id = _JSON$parse._id,
            date = _JSON$parse.date,
            time = _JSON$parse.time;

        if (this.status === 200) {
          resolve({
            message: "bookSuccess",
            id: _id
          });
        } else if (this.status === 403) {
          resolve({
            message: "bookFull",
            date: date,
            time: time
          });
        } else {
          reject({
            message: "bookFail"
          });
        }
      };

      xhr.onerror = function () {
        reject({
          message: "bookFail"
        });
      };

      xhr.send(params);
    });
  };

  bookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var error = (0, _validation.checkError)();

    if (error === 0) {
      bookBtn.value = "Sending...";
      bookBtn.disabled = true;
      postBooking(_api.url).then(function (reply) {
        var message = reply.message,
            id = reply.id,
            date = reply.date,
            time = reply.time;
        document.querySelector('#id').innerHTML = "<a href=\"booking.html?".concat(id, "\">").concat(id, "</a>");
        document.querySelector('#date').innerHTML = date;
        document.querySelector('#time').innerHTML = time;
        document.querySelector(".".concat(message)).classList.add("modalActive");
      }).catch(function () {
        return document.querySelector(".bookFail").classList.add("modalActive");
      });
    }
  });
}; //call functions


(0, _date.minmaxDate)();
(0, _selectBtns.selectBtns)();
submitForm();
},{"./api":"js/api.js","./date":"js/date.js","./selectBtns":"js/selectBtns.js","./validation":"js/validation.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50034" + '/');

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