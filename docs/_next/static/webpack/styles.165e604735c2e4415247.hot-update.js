webpackHotUpdate("styles",{

/***/ "../../node_modules/react-image-gallery/styles/css/image-gallery.css":
/*!*************************************************************************************************************************************************!*\
  !*** /Users/shaunfarrell/Documents/Development/CodedPlanet/GreenerWeb/SuperProps/node_modules/react-image-gallery/styles/css/image-gallery.css ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1556441479621");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.165e604735c2e4415247.hot-update.js.map