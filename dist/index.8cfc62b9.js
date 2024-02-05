// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3yPwA":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b3c595598cfc62b9";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"6rimH":[function(require,module,exports) {
var _errorJs = require("./src/components/Error.js");
var _jobDetailsJs = require("./src/components/JobDetails.js");
var _jobListJs = require("./src/components/JobList.js");
var _paginationJs = require("./src/components/Pagination.js");
var _routingJs = require("./src/components/Routing.js");
var _searchJs = require("./src/components/Search.js");
var _sortingJs = require("./src/components/Sorting.js");
var _spinnerJs = require("./src/components/Spinner.js");
var _bookmarksJs = require("./src/components/Bookmarks.js");

},{"./src/components/Error.js":"kvula","./src/components/JobDetails.js":"9QC2B","./src/components/JobList.js":"66fOy","./src/components/Pagination.js":"dpcro","./src/components/Routing.js":"iNgj0","./src/components/Search.js":"jqPPz","./src/components/Sorting.js":"lVzLm","./src/components/Spinner.js":"23cTm","./src/components/Bookmarks.js":"9Lox2"}],"kvula":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _commonJs = require("../src/common.js");
const renderError = (message = "Something went wrong")=>{
    (0, _commonJs.errorTextEl).textContent = message;
    (0, _commonJs.errorEl).classList.add("error--visible");
    setTimeout(()=>{
        (0, _commonJs.errorEl).classList.remove("error--visible");
    }, (0, _commonJs.DEFAULT_DISPLAY_TIME));
};
exports.default = renderError;

},{"../common.js":"8wzUn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8wzUn":[function(require,module,exports) {
// CONSTANTS
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BASE_API_URL", ()=>BASE_API_URL);
parcelHelpers.export(exports, "DEFAULT_DISPLAY_TIME", ()=>DEFAULT_DISPLAY_TIME);
parcelHelpers.export(exports, "RESULTS_PER_PAGE", ()=>RESULTS_PER_PAGE);
parcelHelpers.export(exports, "state", ()=>state);
parcelHelpers.export(exports, "bookmarksBtnEl", ()=>bookmarksBtnEl);
parcelHelpers.export(exports, "errorEl", ()=>errorEl);
parcelHelpers.export(exports, "errorTextEl", ()=>errorTextEl);
parcelHelpers.export(exports, "jobDetailsEl", ()=>jobDetailsEl);
parcelHelpers.export(exports, "jobDetailsContentEl", ()=>jobDetailsContentEl);
parcelHelpers.export(exports, "jobListBookmarksEl", ()=>jobListBookmarksEl);
parcelHelpers.export(exports, "jobListSearchEl", ()=>jobListSearchEl);
parcelHelpers.export(exports, "numberEl", ()=>numberEl);
parcelHelpers.export(exports, "paginationEl", ()=>paginationEl);
parcelHelpers.export(exports, "paginationBtnNextEl", ()=>paginationBtnNextEl);
parcelHelpers.export(exports, "paginationBtnBackEl", ()=>paginationBtnBackEl);
parcelHelpers.export(exports, "paginationNumberNextEl", ()=>paginationNumberNextEl);
parcelHelpers.export(exports, "paginationNumberBackEl", ()=>paginationNumberBackEl);
parcelHelpers.export(exports, "searchFormEl", ()=>searchFormEl);
parcelHelpers.export(exports, "searchInputEl", ()=>searchInputEl);
parcelHelpers.export(exports, "sortingEl", ()=>sortingEl);
parcelHelpers.export(exports, "sortingBtnRelevantEl", ()=>sortingBtnRelevantEl);
parcelHelpers.export(exports, "sortingBtnRecentEl", ()=>sortingBtnRecentEl);
parcelHelpers.export(exports, "spinnerSearchEl", ()=>spinnerSearchEl);
parcelHelpers.export(exports, "spinnerJobDetailsEl", ()=>spinnerJobDetailsEl);
parcelHelpers.export(exports, "getData", ()=>getData);
const BASE_API_URL = "https://bytegrad.com/course-assets/js/2/api";
const DEFAULT_DISPLAY_TIME = 3500;
const RESULTS_PER_PAGE = 7;
const state = {
    searchJobItems: [],
    bookmarkedJobItems: [],
    activeJobItem: {},
    currentPage: 1
};
const bookmarksBtnEl = document.querySelector(".bookmarks-btn");
const errorEl = document.querySelector(".error");
const errorTextEl = document.querySelector(".error__text");
const jobDetailsEl = document.querySelector(".job-details");
const jobDetailsContentEl = document.querySelector(".job-details__content");
const jobListBookmarksEl = document.querySelector(".job-list--bookmarks");
const jobListSearchEl = document.querySelector(".job-list--search");
const numberEl = document.querySelector(".count__number");
const paginationEl = document.querySelector(".pagination");
const paginationBtnNextEl = document.querySelector(".pagination__button--next");
const paginationBtnBackEl = document.querySelector(".pagination__button--back");
const paginationNumberNextEl = document.querySelector(".pagination__number--next");
const paginationNumberBackEl = document.querySelector(".pagination__number--back");
const searchFormEl = document.querySelector(".search");
const searchInputEl = document.querySelector(".search__input");
const sortingEl = document.querySelector(".sorting");
const sortingBtnRelevantEl = document.querySelector(".sorting__button--relevant");
const sortingBtnRecentEl = document.querySelector(".sorting__button--recent");
const spinnerSearchEl = document.querySelector(".spinner--search");
const spinnerJobDetailsEl = document.querySelector(".spinner--job-details");
const getData = async (completeURL)=>{
    const response = await fetch(completeURL);
    const data = await response.json();
    if (!response.ok) throw new Error(data.description);
    return data;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9QC2B":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _commonJs = require("../src/common.js");
const renderJobDetails = (jobItem)=>{
    const jobDetailsHTML = `
        <img src="${jobItem.coverImgURL}" alt="#" class="job-details__cover-img">

        <a class="apply-btn" href="${jobItem.companyURL}" target="_blank">Apply <i class="fa-solid fa-square-arrow-up-right apply-btn__icon"></i></a>

        <section class="job-info">
            <div class="job-info__left">
                <div class="job-info__badge">${jobItem.badgeLetters}</div>
                <div class="job-info__below-badge">
                    <time class="job-info__time">${jobItem.daysAgo}d</time>
                    <button class="job-info__bookmark-btn">
                        <i class="fa-solid fa-bookmark job-info__bookmark-icon"></i>
                    </button>
                </div>
            </div>
            <div class="job-info__right">
                <h2 class="second-heading">${jobItem.title}</h2>
                <p class="job-info__company">${jobItem.company}</p>
                <p class="job-info__description">${jobItem.description}</p>
                <div class="job-info__extras">
                    <p class="job-info__extra"><i class="fa-solid fa-clock job-info__extra-icon"></i> ${jobItem.duration}</p>
                    <p class="job-info__extra"><i class="fa-solid fa-money-bill job-info__extra-icon"></i> ${jobItem.salary}</p>
                    <p class="job-info__extra"><i class="fa-solid fa-location-dot job-info__extra-icon"></i> ${jobItem.location}</p>
                </div>
            </div>
        </section>

        <div class="job-details__other">
            <section class="qualifications">
                <div class="qualifications__left">
                    <h4 class="fourth-heading">Qualifications</h4>
                    <p class="qualifications__sub-text">Other qualifications may apply</p>
                </div>
                <ul class="qualifications__list">
                    ${jobItem.qualifications.map((qualificationText)=>`<li class="qualifications__item">${qualificationText}</li>`).join("")}
                </ul>
            </section>
            
            <section class="reviews">
                <div class="reviews__left">
                    <h4 class="fourth-heading">Company reviews</h4>
                    <p class="reviews__sub-text">Recent things people are saying</p>
                </div>
                <ul class="reviews__list">
                    ${jobItem.reviews.map((reviewText)=>`<li class="reviews__item">${reviewText}</li>`).join("")}
                </ul>
            </section>
        </div>

        <footer class="job-details__footer">
            <p class="job-details__footer-text">If possible, please reference that you found the job on <span class="u-bold">rmtDev</span>, we would really appreciate it!</p>
        </footer>
    `;
    (0, _commonJs.jobDetailsContentEl).innerHTML = jobDetailsHTML;
};
exports.default = renderJobDetails;

},{"../common.js":"8wzUn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"66fOy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _commonJs = require("../src/common.js");
var _spinnerJs = require("./Spinner.js");
var _spinnerJsDefault = parcelHelpers.interopDefault(_spinnerJs);
var _jobDetailsJs = require("./JobDetails.js");
var _jobDetailsJsDefault = parcelHelpers.interopDefault(_jobDetailsJs);
var _errorJs = require("./Error.js");
var _errorJsDefault = parcelHelpers.interopDefault(_errorJs);
const renderJobList = (whichList = "search")=>{
    const jobItems = whichList === "search" ? (0, _commonJs.jobListSearchEl) : (0, _commonJs.jobListBookmarksEl);
    let jobs = [];
    if (whichList === "search") jobs = (0, _commonJs.state).searchJobItems.slice((0, _commonJs.state).currentPage * (0, _commonJs.RESULTS_PER_PAGE) - (0, _commonJs.RESULTS_PER_PAGE), (0, _commonJs.state).currentPage * (0, _commonJs.RESULTS_PER_PAGE));
    else jobs = (0, _commonJs.state).bookmarkedJobItems;
    // remove previous job items
    jobItems.innerHTML = "";
    // display job items
    jobs.forEach((jobItem)=>{
        const newJobItemHTML = `
            <li class="job-item ${(0, _commonJs.state).activeJobItem.id === jobItem.id ? "job-item--active" : ""}">
                <a class="job-item__link" href="${jobItem.id}">
                    <div class="job-item__badge">${jobItem.badgeLetters}</div>
                    <div class="job-item__middle">
                        <h3 class="third-heading">${jobItem.title}</h3>
                        <p class="job-item__company">${jobItem.company}</p>
                        <div class="job-item__extras">
                            <p class="job-item__extra"><i class="fa-solid fa-clock job-item__extra-icon"></i> ${jobItem.duration}</p>
                            <p class="job-item__extra"><i class="fa-solid fa-money-bill job-item__extra-icon"></i> ${jobItem.salary}</p>
                            <p class="job-item__extra"><i class="fa-solid fa-location-dot job-item__extra-icon"></i> ${jobItem.location}</p>
                        </div>
                    </div>
                    <div class="job-item__right">
                        <i class="fa-solid fa-bookmark job-item__bookmark-icon ${(0, _commonJs.state).bookmarkedJobItems.find((bookmarkedJobItem)=>bookmarkedJobItem.id === jobItem.id) ? "job-item__bookmark-icon--bookmarked" : ""}"></i>
                        <time class="job-item__time">${jobItem.daysAgo}d</time>
                    </div>
                </a>
            </li>
        `;
        jobItems.insertAdjacentHTML("beforeend", newJobItemHTML);
    });
};
const clickHandler = async (event)=>{
    // prevent default behavior (navigation)
    event.preventDefault();
    // get clicked job item element
    const jobItemEl = event.target.closest(".job-item");
    // remove the active class from previously active job item
    document.querySelector(".job-item--active")?.classList.remove("job-item--active");
    // add active class
    jobItemEl.classList.add("job-item--active");
    // empty the job details section
    (0, _commonJs.jobDetailsContentEl).innerHTML = "";
    // render spinner
    (0, _spinnerJsDefault.default)("job-details");
    // get the id
    const id = jobItemEl.children[0].getAttribute("href");
    (0, _commonJs.state).activeJobItem = (0, _commonJs.state).searchJobItems.find((jobItem)=>jobItem.id === +id);
    console.log((0, _commonJs.state).activeJobItem);
    // add id to url
    history.pushState(null, "", `/#${id}`);
    try {
        // fetch job item data
        const data = await (0, _commonJs.getData)(`${(0, _commonJs.BASE_API_URL)}/jobs/${id}`);
        // extract job item
        const { jobItem } = data;
        // remove spinner
        (0, _spinnerJsDefault.default)("job-details");
        // render job details
        (0, _jobDetailsJsDefault.default)(jobItem);
    } catch (error) {
        (0, _spinnerJsDefault.default)("job-details");
        (0, _errorJsDefault.default)(error.message);
    }
};
(0, _commonJs.jobListSearchEl).addEventListener("click", clickHandler);
exports.default = renderJobList;

},{"../common.js":"8wzUn","./Spinner.js":"23cTm","./JobDetails.js":"9QC2B","./Error.js":"kvula","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"23cTm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _commonJs = require("../src/common.js");
const renderSpinner = (whichSpinner)=>{
    const spinnerEl = whichSpinner === "search" ? (0, _commonJs.spinnerSearchEl) : (0, _commonJs.spinnerJobDetailsEl);
    spinnerEl.classList.toggle("spinner--visible");
};
exports.default = renderSpinner;

},{"../common.js":"8wzUn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dpcro":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _commonJs = require("../src/common.js");
var _jobListJs = require("./JobList.js");
var _jobListJsDefault = parcelHelpers.interopDefault(_jobListJs);
const renderPaginationButtons = ()=>{
    // display back button if we are on page 2 or further
    if ((0, _commonJs.state).currentPage >= 2) (0, _commonJs.paginationBtnBackEl).classList.remove("pagination__button--hidden");
    else (0, _commonJs.paginationBtnBackEl).classList.add("pagination__button--hidden");
    // display next button if there are more job items on next page
    if ((0, _commonJs.state).searchJobItems.length - (0, _commonJs.state).currentPage * (0, _commonJs.RESULTS_PER_PAGE) <= 0) (0, _commonJs.paginationBtnNextEl).classList.add("pagination__button--hidden");
    else (0, _commonJs.paginationBtnNextEl).classList.remove("pagination__button--hidden");
    // update page numbers
    (0, _commonJs.paginationNumberNextEl).textContent = (0, _commonJs.state).currentPage + 1;
    (0, _commonJs.paginationNumberBackEl).textContent = (0, _commonJs.state).currentPage - 1;
    // unfocus ('blur') buttons
    (0, _commonJs.paginationBtnNextEl).blur();
    (0, _commonJs.paginationBtnBackEl).blur();
};
const clickHandler = (event)=>{
    // get clicked button element
    const clickedButtonEl = event.target.closest(".pagination__button");
    // stop function if null
    if (!clickedButtonEl) return;
    // check if intention is next or back
    const nextPage = clickedButtonEl.className.includes("--next") ? true : false;
    // update state
    nextPage ? (0, _commonJs.state).currentPage++ : (0, _commonJs.state).currentPage--;
    // render pagination buttons
    renderPaginationButtons();
    // render job items for that page
    (0, _jobListJsDefault.default)();
};
(0, _commonJs.paginationEl).addEventListener("click", clickHandler);
exports.default = renderPaginationButtons;

},{"../common.js":"8wzUn","./JobList.js":"66fOy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iNgj0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _commonJs = require("../src/common.js");
var _spinnerJs = require("./Spinner.js");
var _spinnerJsDefault = parcelHelpers.interopDefault(_spinnerJs);
var _jobDetailsJs = require("./JobDetails.js");
var _jobDetailsJsDefault = parcelHelpers.interopDefault(_jobDetailsJs);
const loadHashChangeHandler = async ()=>{
    // get id from url
    const id = window.location.hash.substring(1);
    if (id) {
        // remove previous job details content
        (0, _commonJs.jobDetailsContentEl).innerHTML = "";
        // add spinner
        (0, _spinnerJsDefault.default)("job-details");
        try {
            // fetch job item data
            const data = await (0, _commonJs.getData)(`${(0, _commonJs.BASE_API_URL)}/jobs/${id}`);
            // extract job item
            const { jobItem } = data;
            (0, _commonJs.state).activeJobItem = jobItem;
            // remove spinner
            (0, _spinnerJsDefault.default)("job-details");
            // render job details
            (0, _jobDetailsJsDefault.default)(jobItem);
        } catch (error) {
            (0, _spinnerJsDefault.default)("job-details");
            renderError(error.message);
        }
    }
};
window.addEventListener("DOMContentLoaded", loadHashChangeHandler);
window.addEventListener("hashchange", loadHashChangeHandler);

},{"../common.js":"8wzUn","./Spinner.js":"23cTm","./JobDetails.js":"9QC2B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jqPPz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _commonJs = require("../src/common.js");
var _errorJs = require("./Error.js");
var _errorJsDefault = parcelHelpers.interopDefault(_errorJs);
var _spinnerJs = require("./Spinner.js");
var _spinnerJsDefault = parcelHelpers.interopDefault(_spinnerJs);
var _jobListJs = require("./JobList.js");
var _jobListJsDefault = parcelHelpers.interopDefault(_jobListJs);
var _paginationJs = require("./Pagination.js");
var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
const submitHandler = async (event)=>{
    // prevent default behavior
    event.preventDefault();
    // get search text
    const searchText = (0, _commonJs.searchInputEl).value;
    // validation (regular expression example)
    const forbiddenPattern = /[0-9]/;
    const patternMatch = forbiddenPattern.test(searchText);
    if (patternMatch) {
        (0, _errorJsDefault.default)("Your search may not contain numbers");
        return;
    }
    // blur input
    (0, _commonJs.searchInputEl).blur();
    // remove previous job items
    (0, _commonJs.jobListSearchEl).innerHTML = "";
    // reset sorting buttons
    (0, _commonJs.sortingBtnRecentEl).classList.remove("sorting__button--active");
    (0, _commonJs.sortingBtnRelevantEl).classList.add("sorting__button--active");
    // render spinner
    (0, _spinnerJsDefault.default)("search");
    try {
        // fetch search results
        const data = await (0, _commonJs.getData)(`${(0, _commonJs.BASE_API_URL)}/jobs?search=${searchText}`);
        // extract job items
        const { jobItems } = data;
        // update state
        (0, _commonJs.state).searchJobItems = jobItems;
        (0, _commonJs.state).currentPage = 1;
        // remove spinner
        (0, _spinnerJsDefault.default)("search");
        // render number of results
        (0, _commonJs.numberEl).textContent = jobItems.length;
        // reset pagination buttons
        (0, _paginationJsDefault.default)();
        // render job items in search job list
        (0, _jobListJsDefault.default)();
    } catch (error) {
        (0, _spinnerJsDefault.default)("search");
        (0, _errorJsDefault.default)(error.message);
    }
};
(0, _commonJs.searchFormEl).addEventListener("submit", submitHandler);

},{"../common.js":"8wzUn","./Error.js":"kvula","./Spinner.js":"23cTm","./JobList.js":"66fOy","./Pagination.js":"dpcro","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lVzLm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _commonJs = require("../src/common.js");
var _jobListJs = require("./JobList.js");
var _jobListJsDefault = parcelHelpers.interopDefault(_jobListJs);
var _paginationJs = require("./Pagination.js");
var _paginationJsDefault = parcelHelpers.interopDefault(_paginationJs);
const clickHandler = (event)=>{
    // get clicked button element
    const clickedButtonEl = event.target.closest(".sorting__button");
    // stop function if no clicked button element
    if (!clickedButtonEl) return;
    // update state (reset to page 1)
    (0, _commonJs.state).currentPage = 1;
    // check if intention is recent or relevant sorting
    const recent = clickedButtonEl.className.includes("--recent") ? true : false;
    // make sorting button look (in)active
    if (recent) {
        (0, _commonJs.sortingBtnRecentEl).classList.add("sorting__button--active");
        (0, _commonJs.sortingBtnRelevantEl).classList.remove("sorting__button--active");
    } else {
        (0, _commonJs.sortingBtnRecentEl).classList.remove("sorting__button--active");
        (0, _commonJs.sortingBtnRelevantEl).classList.add("sorting__button--active");
    }
    // sort job items
    // how [].sort works: return positive number to sort b higher than a, return negative number to sort a higher than b, return 0 to stay same
    if (recent) (0, _commonJs.state).searchJobItems.sort((a, b)=>{
        return a.daysAgo - b.daysAgo; // e.g. if a.daysAgo = 10 and b.daysAgo = 5, then b is more recent. b should be sorted higher than a. return a positive number.
    });
    else (0, _commonJs.state).searchJobItems.sort((a, b)=>{
        return b.relevanceScore - a.relevanceScore; // e.g. if a.relevanceScore = 94 and b.relevanceScore = 78, then a is more relevant. a should be sorted higher than b. return a negative number.
    });
    // reset pagination buttons
    (0, _paginationJsDefault.default)();
    // render job items in list
    (0, _jobListJsDefault.default)();
};
(0, _commonJs.sortingEl).addEventListener("click", clickHandler);

},{"../common.js":"8wzUn","./JobList.js":"66fOy","./Pagination.js":"dpcro","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Lox2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _commonJs = require("../src/common.js");
var _jobListJs = require("./JobList.js");
var _jobListJsDefault = parcelHelpers.interopDefault(_jobListJs);
const clickHandler = (event)=>{
    const bookmarkBtn = event.target.className.includes("bookmark");
    if (!bookmarkBtn) return;
    document.querySelector(".job-info__bookmark-icon").classList.toggle("job-info__bookmark-icon--bookmarked");
    if ((0, _commonJs.state).bookmarkedJobItems.some((jobItem)=>jobItem.id === (0, _commonJs.state).activeJobItem.id)) (0, _commonJs.state).bookmarkedJobItems = (0, _commonJs.state).bookmarkedJobItems.filter((bookmarkJobItem)=>bookmarkJobItem.id !== (0, _commonJs.state).activeJobItem.id);
    else (0, _commonJs.state).bookmarkedJobItems.push((0, _commonJs.state).activeJobItem);
    (0, _jobListJsDefault.default)("search");
};
const mouseEnterHandler = ()=>{
    (0, _commonJs.bookmarksBtnEl).classList.add("bookmarks-btn--active");
    (0, _commonJs.jobListBookmarksEl).classList.add("job-list--visible");
    (0, _jobListJsDefault.default)("bookmark");
};
const mouseLeaveHandler = ()=>{
    (0, _commonJs.bookmarksBtnEl).classList.remove("bookmarks-btn--active");
    (0, _commonJs.jobListBookmarksEl).classList.remove("job-list--visible");
};
(0, _commonJs.bookmarksBtnEl).addEventListener("mouseenter", mouseEnterHandler);
(0, _commonJs.jobListBookmarksEl).addEventListener("mouseleave", mouseLeaveHandler);
(0, _commonJs.jobDetailsEl).addEventListener("click", clickHandler);

},{"../common.js":"8wzUn","./JobList.js":"66fOy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["3yPwA","6rimH"], "6rimH", "parcelRequireff6a")

//# sourceMappingURL=index.8cfc62b9.js.map
