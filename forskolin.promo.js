document.addEventListener("DOMContentLoaded", function(event) {


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

  document.getElementsByClassName('bonus-bottle')[0].remove();

  const settingsDefault = {

      moduleAlwaysActive: true,
      moduleActivationParam: 'promo',
      countryInput: $('[name="country"]'),
      orderbox: $('.product'),
      orderSeq: [1, 3, 4, 6],
      // orderImages: ['product1.png','product2_1free.png','product3_2free.png','product4.png'],
      // orderImagesPath: '//forskolinactive.com/js/img/',
      orderImages: ['1.png', '2+1.png', '3+1.png', '4+2.png'],
      orderImagesPath: '//forskolinactive.com/js/packages/images/',
      gratisBox: '.box-header',
      supplyBox: '.supply',
      discountClass: 'getfree',
      discountStyle: 'background: #a30c7f; color: white;padding: 0px 10px;margin: 0 10px;',
      elements: {
          DiscountLabel: $('.save'),
          ShippingLabel: $('.shipping')
      },
      defaults: {
          DiscountLabel: true,
          ShippingLabel: true,
      },
      texts: {
          languages: {
              en: "FOR FREE",
              ro: "GRATIS",
              es: "GRATIS",
              it: "GRATUITO",
              pt: "GRÁTIS",
              sk: "ZADARMO",
              si: "BREZPLAČNO",
              pl: "ZA DARMO",
              hu: "INGYEN",
              hr: "BESPLATNO",
              cz: "ZDARMA",
              gr: "ΔΩΡΕΆΝ",
          }
      }
  }

  var userSettings = typeof packageSettings === 'object' ? packageSettings : {};
  var settings = extend(settingsDefault, userSettings);

  const getQueryStringParameters = url => {
      if (url) {
          if (url.split("?").length > 0) {
              query = url.split("?")[1];
          }
      } else {
          url = window.location.href;
          query = window.location.search.substring(1);
      }
      return (/^[?#]/.test(query) ? query.slice(1) : query)
          .split('&')
          .reduce((params, param) => {
              let [key, value] = param.split('=');
              params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
              return params;
          }, {});
  };

  let queryActivator = getQueryStringParameters();
  const listenForActivation = settings.moduleActivationParam in queryActivator ? true : false;
  const isActive = settings.moduleAlwaysActive == true ? true : false;
  const runLogic = isActive == true ? true : (listenForActivation == true ? true : false);

  async function runLogicRegister(runLogicVar) {
      return new Promise(
          (resolve, reject) => {
              if (runLogic) {
                  const runState = true;
                  resolve(runState);
              } else {
                  const error = new Error('Error runLogicRegister did not start');
                  reject(error);
              }
          }
      );
  };

  async function checkFirstLevelNodes(isActive) {
      return new Promise(
          (resolve, reject) => {
              if (settings.orderbox) {
                  const productExists = true;
                  resolve(productExists);
              } else {
                  const error = new Error('Error element OrderBox did not exist');
                  reject(error);
              }
          }
      );
  };

  async function checkSecondLevelNodes(exist) {
      return new Promise(
          (resolve, reject) => {
              if (settings.elements.DiscountLabel && settings.elements.ShippingLabel) {
                  const secondLevelNodes = true;
                  resolve(secondLevelNodes);
              } else {
                  const error = new Error('Error SecondLevelNodes dont exist');
                  reject(error);
              }
          }
      );
  };

  async function checkNodeExistance(els) {
      return new Promise(
          (resolve, reject) => {
              let countExist = 0;
              Object.keys(els).forEach(function(key) {
                  for (var i = 0; i < els[key].length; i++) {
                      countExist += (els[key][i] !== null ? 1 : 0);
                  }
              });
              if (countExist > 0) {
                  resolve(true);
              } else {
                  const error = new Error('Error checkNodeExistance dont exist');
                  reject(error);
              }
          }
      );
  };

  async function runDefaultSettings(exist) {
      return new Promise(
          (resolve, reject) => {
              let secondLevelElements = settings.elements;
              var existance = checkNodeExistance(secondLevelElements);
              // if (settings.elements.DiscountLabel && settings.elements.ShippingLabel) {
              if (existance) {
                  const secondLevelNodes = true;
                  resolve(secondLevelNodes);
              } else {
                  const error = new Error('Error runDefaultSettings cannot run because checkNodeExistance dont exist');
                  reject(error);
              }
          }
      );
  };

  async function setDefaultValues(runDefaultSettings) {
      return new Promise(
          (resolve, reject) => {
              let defaults = settings.defaults;
              //sets the current language
              settings.currentLocale = settings.countryInput.val();

              for (var key in defaults) {
                  $(settings.elements[key]).each(function() {
                      if (defaults[key] == false) {
                          $(this).hide();
                      }
                  });
              }
              resolve(true);
          }
      );
  };

  async function addDataAttrOrder(exist) {
      return new Promise(
          (resolve, reject) => {
              addDataOrder();
              resolve(true);
          }
      );
  };

  async function setPricerClick(addDataAttrOrder) {
      return new Promise(
          (resolve, reject) => {
            var priceEle = document.getElementsByName("price")[0];
            var prices = JSON.parse(priceEle.getAttribute('data-values'));

            var quantityEle = document.getElementsByName("quantity")[0];
            var products = document.getElementsByClassName('product');

              productsArray.forEach(function(product) {
                  product.addEventListener('click', function(e) {
                      var quantity = this.attributes["data-q"].value;
                      var quantityOrder = this.attributes["data-order"].value;
                      quantityReg = quantity;
                      setPrice(prices[(quantityReg - 1)]);
                      quantityEle.value = quantityOrder;
                  });
              });
              resolve(true);
          }
      );
  };

  // call our promise
  async function modifyProduct() {
          try {
              // let isActiveState = await isActive;
              let isActiveState = runLogic;
              let runLogicChecker = await runLogicRegister(isActiveState)
              let firstLevelNodes = await checkFirstLevelNodes(runLogicChecker);
              let secondLevelNodes = await checkSecondLevelNodes(firstLevelNodes);
              let prepareDefaultSettings = await runDefaultSettings(secondLevelNodes);
              let setDefaultsValues = await setDefaultValues(prepareDefaultSettings);
              let runChanges = await addDataAttrOrder(setDefaultsValues);
              let setClickerLogic = await setPricerClick(runChanges);
          } catch (error) {
              console.log(error.message);
          }
      }
      (async () => {
          await modifyProduct();
      })();


  //adds attribute to an element
  function addAttribute(el, attr, value) {
      $(el).attr(attr, value);
  };

  function replaceMontlyDose(el, q) {
      let totalMonthsSupply = q;
      let text = $(el).text();
      var num = text.replace(/[^0-9]/g, '');
      $(el).text(text.replace(num, totalMonthsSupply));
  }

  //adding gratis text
  function addGratisText(el, q, regQ) {
      $(el).find('span').text(regQ)
      var style = "fill: #fff";
      var gratisText = '<svg style="' + style + '" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z"/></svg>';
      if (settings.currentLocale in settings.texts.languages) {
          gratisText = settings.texts.languages[settings.currentLocale];
      }
      regQ != 1 ? $(el).html($(el).html() + '<span style="' + settings.discountStyle + '" class="' + settings.discountClass + '">+' + (q - regQ) + '&nbsp;' + gratisText + '</span>') : $(el).html();
  }

  function replaceSupplyPeriod(el, q, regQ) {
      regQ != 1 ? $(el).text().replace(regQ, q) : $(el).text();
  }

  //changes images
  function changeImage(el, path, img) {
      let imgElement = $(el).find('.product-img2 img')[0];
      let imagePath = path + img;
      addAttribute(imgElement, 'src', imagePath);
  }

  //adding Data Order
  function addDataOrder() {
      $(settings.orderbox).each(function() {
          var q = $(this).attr('data-q');
          var dataOrder = settings.orderSeq[q - 1];
          if (dataOrder == false) {
              $(this).hide();
          } else {
              addAttribute($(this), 'data-order', dataOrder)
              addGratisText($($(this)).find(settings.gratisBox), dataOrder, q);
              replaceMontlyDose($($(this)).find('.supply'), dataOrder)
              replaceSupplyPeriod($($(this)).find(settings.supplyBox), dataOrder, q);
              changeImage($(this), settings.orderImagesPath, settings.orderImages[q - 1])
          }
      });
  } 
});