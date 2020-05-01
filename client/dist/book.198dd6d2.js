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
})({"js/date.js":[function(require,module,exports) {
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
var time = document.querySelector('input[name="time"]');
var party = document.querySelector('input[name="party"]');
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
},{"./date":"js/date.js"}],"js/postForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postForm = void 0;

var postForm = function postForm(url) {
  var form = document.querySelector('#bookForm');
  var name = form.elements["name"].value;
  var email = form.elements["email"].value;
  var restaurant = form.elements["restaurant"].value;
  var date = form.elements["date"].value;
  var time = form.elements["time"].value;
  var party = form.elements["party"].value;
  var message = form.elements["message"].value;
  var params = "form-name=booking&name=".concat(name, "&email=").concat(email, "&restaurant=").concat(restaurant, "&date=").concat(date, "&time=").concat(time, "&party=").concat(party, "&message=").concat(message);
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
        resolve("Booking successful. <br> Your booking reference is <br><a href=\"./booking.html?id=".concat(_id, "\">").concat(_id, "</a><br> Looking forward to seeing you soon"));
      } else if (this.status === 403) {
        resolve("Booking full at your selected time and date.<br>Date: ".concat(date, "<br>Time: ").concat(time, "<br> Please update booking for a different time"));
      } else {
        reject('Booking error. <br> Please try again or give us a call');
      }
    };

    xhr.onerror = function () {
      reject("Booking error. <br> Please try again or give us a call");
    };

    xhr.send(params);
  });
};

exports.postForm = postForm;
},{}],"js/book.js":[function(require,module,exports) {
"use strict";

var _date = require("./date");

var _validation = require("./validation");

var _postForm = require("./postForm");

//restaurant selector 
var checkRestaurant = function checkRestaurant() {
  var restaurantBtns = document.querySelectorAll('.restaurant label');
  restaurantBtns[0].style.background = "#205909";

  var selectRestaurant = function selectRestaurant(item, index) {
    item.addEventListener('click', function () {
      restaurantBtns.forEach(function (btn) {
        return btn.style.background = "#F5F5F5";
      });
      restaurantBtns[index].style.background = "#205909";
    });
  };

  restaurantBtns.forEach(selectRestaurant);
}; // time selector


var checkTime = function checkTime() {
  var timeContainer = document.querySelector('#time-selection');
  var hourContainer = document.querySelector('#hour-selection');
  var hourBtns = document.querySelectorAll('#hour-selection span');
  var timeBtns = document.querySelectorAll('#time-selection label');
  var timeTxt = document.querySelectorAll('#time-selection label span');
  var timeRadio = document.querySelectorAll('#time-selection input[type="radio"]');
  var hours = [["12:00", "12:30", "13:00", "13:30", "14:00"], ["14:00", "14:30", "15:00", "15:30", "16:00"], ["16:00", "16:30", "17:00", "17:30", "18:00"], ["18:00", "18:30", "19:00", "19:30", "20:00"], ["20:00", "20:30", "21:00", "21:30", "22:00"]];

  var selectTime = function selectTime(item, index) {
    item.addEventListener('click', function () {
      timeBtns.forEach(function (btn) {
        return btn.style.background = "#F5F5F5";
      });
      timeBtns[index].style.background = "#205909";
    });
  };

  var changeTime = function changeTime(item, index) {
    item.addEventListener('click', function () {
      timeContainer.style.display = "block";
      hourContainer.style.display = "none";
      hourBtns.forEach(function (btn) {
        return btn.style.background = "#F5F5F5";
      });
      hourBtns[index].style.background = "#205909";
      timeTxt[0].innerHTML = hours[index][0];
      timeRadio[0].value = hours[index][0];
      timeTxt[1].innerHTML = hours[index][1];
      timeRadio[1].value = hours[index][1];
      timeTxt[2].innerHTML = hours[index][2];
      timeRadio[2].value = hours[index][2];
      timeTxt[3].innerHTML = hours[index][3];
      timeRadio[3].value = hours[index][3];
      timeTxt[4].innerHTML = hours[index][4];
      timeRadio[4].value = hours[index][4];
    });
  };

  hourBtns.forEach(changeTime);
  timeBtns.forEach(selectTime);
}; //time back button


var backTime = function backTime() {
  var timeContainer = document.querySelector('#time-selection');
  var hourContainer = document.querySelector('#hour-selection');
  document.querySelector('#timebackBtn').addEventListener('click', function () {
    timeContainer.style.display = "none";
    hourContainer.style.display = "block";
  });
}; // party selection


var checkParty = function checkParty() {
  var partyBtns = document.querySelectorAll('.party label');

  var selectParty = function selectParty(item, index) {
    item.addEventListener('click', function () {
      partyBtns.forEach(function (btn) {
        return btn.style.background = "#F5F5F5";
      });
      partyBtns[index].style.background = "#205909";
    });
  };

  partyBtns.forEach(selectParty);
}; //form submit


var submitForm = function submitForm() {
  var bookForm = document.querySelector('#bookForm');
  var submitBtn = document.querySelector('input[type="submit"]');
  bookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var error = (0, _validation.checkError)();

    if (error === 0) {
      submitBtn.value = "Sending...";
      submitBtn.disabled = true;
      (0, _postForm.postForm)('/book').then(function (reply) {
        return document.querySelector('#book').innerHTML = reply;
      }).catch(function () {
        return document.querySelector('#book').innerHTML = "Booking error. <br> Please try again or give us a call";
      });
    }
  });
}; //call functions


checkRestaurant();
(0, _date.minmaxDate)();
checkTime();
backTime();
checkParty();
submitForm();
},{"./date":"js/date.js","./validation":"js/validation.js","./postForm":"js/postForm.js"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62146" + '/');

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