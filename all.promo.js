'use strict';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}


function _asyncToGenerator(fn) {
  return function() {
    var self = this,
      args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

document.addEventListener("DOMContentLoaded", function(event) {
  /**
   * Merge user settings with default settings
   */
  var extend = function(defaults, options) {
    var extended = {};
    var prop;

    for (prop in defaults) {
      if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
        extended[prop] = defaults[prop];
      }
    }

    for (prop in options) {
      if (Object.prototype.hasOwnProperty.call(options, prop)) {
        extended[prop] = options[prop];
      }
    }

    return extended;
  };
  /**
   * Default Settings
   * @type {Object}
   */

  const settingsDefault = {
    moduleAlwaysActive: true,
    moduleActivationParam: "promo",
    countryInput: document.querySelectorAll("input[name=country]")[0],
    orderbox: ".product",
    orderSeq: [1, 3, 5, 8],
    orderImages: [
      "1-package.png",
      "2-packages.png",
      "3-packages.png",
      "4-packages.png"
    ],
    orderImagesPath: "//schnellevena.com/js/packages/images/",
    package: {
      packageGratisParentElement: ".product-info span.fs18.italic.bold",
      packageNumberElement: ".product-info span.fs60.bold",
      packageImageElement: ".product-thumb img"
    },
    gratis: {
      packageGratisClass: "getfree",
      packageGratisStyle:
        "background: #a30c7f;color: white;padding: 0px 10px;margin: 0 auto;font-weight: bold;display: inline-block;padding: 2px 0;text-align: left;padding: 5px;"
    },
    elements: {
      discountLabel: {
        show: true,
        element: ".product-discout-price",
        style: ""
      },
      shippingLabel: {
        show: true,
        element: ".shipping",
        style: ""
      }
    },
    texts: {
      languages: {
        en: "FOR FREE",
        ro: "GRATIS",
        es: "GRATIS",
        it: "GRATUITO",
        pt: "PRESENTE",
        sk: "ZADARMO",
        si: "BREZPLAČNO",
        pl: "ZA DARMO",
        hu: "INGYEN",
        hr: "BESPLATNO",
        cz: "ZDARMA",
        gr: "ΔΩΡΟ"
      },
      fallback:
        '<svg style="fill: #fff" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z"/></svg>'
    }
  };
  /**
   * Check if the User have passed packageSettings
   * @type {Object}
   */

  var userSettings = typeof packageSettings === "object" ? packageSettings : {};
  /**
   * Merging userSettings with packageSettings if the user passed one
   * @type {Object}
   */

  var settings = extend(settingsDefault, userSettings);
  /**
   * Get Query Parameter from the Url
   * @param  {String} url Current Url String
   * @return {Array}  Array containing query params as a key - value pair
   */
    if (typeof NodeList !== "undefined" && NodeList.prototype && !NodeList.prototype.forEach) {
        // Yes, there's really no need for `Object.defineProperty` here
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
  var getQueryStringParameters = function getQueryStringParameters(url) {
  var query;

  if (url) {
    if (url.split("?").length > 0) {
      query = url.split("?")[1];
    }
  } else {
    url = window.location.href;
    query = window.location.search.substring(1);
  }

  return (/^[?#]/.test(query) ? query.slice(1) : query)
    .split("&")
    .reduce(function(params, param) {
      var _param$split = param.split("="),
        key = _param$split[0],
        value = _param$split[1];

      params[key] = value ? decodeURIComponent(value.replace(/\+/g, " ")) : "";
      return params;
    }, {});
};

  /**
   * Store the array with query params in a variable
   * @type {Array}
   */

  let queryActivator = getQueryStringParameters();
  /**
   * Check how the script will be invoked - with a query parameter or it is active by default
   * @type {Bool}
   */

  const runLogic =
    settings.moduleAlwaysActive === true
      ? true
      : settings.moduleActivationParam in queryActivator
        ? true
        : false;

  function runLogicRegister(_x) {
    return _runLogicRegister.apply(this, arguments);
  }

  function _runLogicRegister() {
    _runLogicRegister = _asyncToGenerator(function*(runLogicVar) {
      return new Promise((resolve, reject) => {
        if (runLogic) {
          const runState = true;
          resolve(runState);
        } else {
          const error = new Error("No Active Promotions");
          reject(error);
        }
      });
    });
    return _runLogicRegister.apply(this, arguments);
  }

  function checkProductBoxExistance(_x2) {
    return _checkProductBoxExistance.apply(this, arguments);
  }

  function _checkProductBoxExistance() {
    _checkProductBoxExistance = _asyncToGenerator(function*(isActive) {
      return new Promise((resolve, reject) => {
        if (typeof document.querySelectorAll(settings.orderbox) === "object") {
          resolve(true);
        } else {
          const error = new Error("Error element OrderBox does not exist");
          reject(error);
        }
      });
    });
    return _checkProductBoxExistance.apply(this, arguments);
  }

  function checkSecondLevelNodes(_x3) {
    return _checkSecondLevelNodes.apply(this, arguments);
  }

  function _checkSecondLevelNodes() {
    _checkSecondLevelNodes = _asyncToGenerator(function*(exist) {
      return new Promise((resolve, reject) => {
        let err = {
          count: 0,
          message: ""
        };

        if (settings.elements.discountLabel.show === true) {
          if (
            typeof document.querySelectorAll(
              settings.elements.discountLabel.element
            ) !== "object"
          ) {
            err.count++;
            err.message =
              'Error Discount Label was not found with this selector: "' +
              settings.elements.discountLabel.element +
              '"';
          }
        }

        if (settings.elements.shippingLabel.show === true) {
          if (
            typeof document.querySelectorAll(
              settings.elements.shippingLabel.element
            ) !== "object"
          ) {
            err.count++;
            err.message =
              'Error Shipping Label was not found with this selector: "' +
              settings.elements.shippingLabel.element +
              '"';
          }
        }

        if (
          typeof document.querySelectorAll(
            settings.package.packageGratisParentElement
          ) !== "object"
        ) {
          err.count++;
          err.message =
            'Error Gratis Parent was not found with this selector: "' +
            settings.package.packageGratisParentElement +
            '"';
        }

        if (
          typeof document.querySelectorAll(
            settings.package.packageNumberElement
          ) !== "object"
        ) {
          err.count++;
          err.message =
            'Error Package Number was not found with this selector: "' +
            settings.package.packageNumberElement +
            '"';
        }

        if (
          typeof document.querySelectorAll(
            settings.package.packageImageElement
          ) !== "object"
        ) {
          err.count++;
          err.message =
            'Error Package Image was not found with this selector: "' +
            settings.package.packageImageElement +
            '"';
        }

        if (err.count === 0) {
          const secondLevelNodes = true;
          resolve(secondLevelNodes);
        } else {
          const error = new Error(err.message);
          reject(error);
        }
      });
    });
    return _checkSecondLevelNodes.apply(this, arguments);
  }

  function setDefaultValues() {
    return _setDefaultValues.apply(this, arguments);
  }

  function _setDefaultValues() {
    _setDefaultValues = _asyncToGenerator(function*() {
      return new Promise((resolve, reject) => {
        let defaults = settings.defaults;
        settings.currentLocale = settings.countryInput.value;

        for (let i = 0; i < settings.elements.length; i++) {
          for (var eleName in settings.elements[i]) {
            if (settings.elements[eleName].show === false) {
              document.querySelectorAll(
                settings.elements[eleName].element
              ).style.display =
                "none";
            }
          }
        }

        resolve(true);
      });
    });
    return _setDefaultValues.apply(this, arguments);
  }

  function addDataAttrOrder(_x4) {
    return _addDataAttrOrder.apply(this, arguments);
  }

  function _addDataAttrOrder() {
    _addDataAttrOrder = _asyncToGenerator(function*(exist) {
      return new Promise((resolve, reject) => {
        document.querySelectorAll(settings.orderbox).forEach(function(e, i) {
          let q = parseInt(e.getAttribute("data-q"));
          let dataOrder = settings.orderSeq[q - 1];

          if (dataOrder == false) {
            e.style.display = "none";
          } else {
            e.setAttribute("data-order", dataOrder);
            addGratisText(
              e.querySelector(settings.package.packageGratisParentElement),
              dataOrder,
              q
            );
            changeTimesQty(
              e.querySelector(settings.package.packageNumberElement),
              dataOrder
            );
            changeImage(
              e,
              settings.orderImagesPath,
              settings.orderImages[q - 1]
            ); 
            // replaceMontlyDose($($(this)).find('.montly-dose'),dataOrder)
            // replaceSupplyPeriod( $($(this)).find(settings.package.packageNumberElement), dataOrder, q);
          }
        });
        resolve(true);
      });
    });
    return _addDataAttrOrder.apply(this, arguments);
  }

  function setPricerClick(_x5) {
    return _setPricerClick.apply(this, arguments);
  }

  function _setPricerClick() {
    _setPricerClick = _asyncToGenerator(function*(addDataAttrOrder) {
      return new Promise((resolve, reject) => {
        if (typeof setPrice === "function") {
          let quantityEle = document.querySelectorAll("[name=quantity]")[0];
          let productsArray = document.querySelectorAll(settings.orderbox);
          productsArray.forEach(function(product) {
            product.addEventListener("click", function(e) {
              var quantity = parseInt(this.attributes["data-q"].value);
              var quantityOrder = this.attributes["data-order"].value;
              console.log(quantityOrder)
              quantityOrder = settings.orderSeq[quantity - 1];
              quantityEle.value = quantityOrder;
            });
          });
          resolve(true);
        }
      });
    });
    return _setPricerClick.apply(this, arguments);
  }

  function modifyProduct() {
    return _modifyProduct.apply(this, arguments);
  }

  function _modifyProduct() {
    _modifyProduct = _asyncToGenerator(function*() {
      try {
        let isActiveState = runLogic;
        let runLogicChecker = yield runLogicRegister(isActiveState);
        let firstLevelNodes = yield checkProductBoxExistance(runLogicChecker);
        let secondLevelNodes = yield checkSecondLevelNodes(firstLevelNodes);
        let setDefaultsValues = yield setDefaultValues(secondLevelNodes);
        let runChanges = yield addDataAttrOrder(setDefaultsValues);
        let setClickerLogic = yield setPricerClick(runChanges);
      } catch (error) {
        console.log(error.message);
      }
    });
    return _modifyProduct.apply(this, arguments);
  }

  _asyncToGenerator(function*() {
    yield modifyProduct();
  })();

  function changeTimesQty(timesQty, q) {
    timesQty.setAttribute("style", "font-size:3rem");
    timesQty.innerHTML = q + "X";
  }

  function replaceMontlyDose(el, q) {
    let totalMonthsSupply = q * 60;
    let text = el.innerText;
    let num = text.replace(/[^0-9]/g, "");
    el.innerText = text.replace(num, totalMonthsSupply);
  }

  function addGratisText(el, q, regQ) {
    let gratisText =
      settings.currentLocale in settings.texts.languages
        ? settings.texts.languages[settings.currentLocale]
        : settings.texts.fallback;
    let elem =
      '<span style="' +
      settings.gratis.packageGratisStyle +
      '" class="' +
      settings.gratis.packageGratisClass +
      '">' +
      regQ +
      " + " +
      (q - regQ) +
      "&nbsp;" +
      gratisText +
      "</span>";
    el.innerHTML = regQ !== 1 ? elem : el.innerHTML;
  }

  function replaceSupplyPeriod(el, q, regQ) {
    el.innerText = regQ !== 1 ? el.innerText.replace(regQ, q) : el.innerText;
  } //changes images

  function changeImage(el, path, img) {
    let imgElement = el.querySelector(settings.package.packageImageElement);
    let imagePath = path + img;
    imgElement.setAttribute("src", imagePath);
  }
});