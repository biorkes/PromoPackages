var extend = function ( defaults, options ) {
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


  const settingsDefault = {

    moduleAlwaysActive: true,
    moduleActivationParam: 'promo',
    countryInput: $('[name="country"]'),
    orderbox: $('.product'),
    orderSeq: [1,3,5,8],
    orderImages: ['1_package.jpg','2_plus_1_package.jpg','3_plus_1_package.jpg','4_plus_2_package.jpg'],
    orderImagesPath: '//glycozal.com/js/packages/images/',
    gratisBox: '.product-name',
    supplyBox: '.product-qty',
    discountClass: 'getfree',
    discountStyle: 'background: #a30c7f;color: white;padding: 0px 10px;margin: 0 auto;font-weight: bold;display: inline-block;padding: 2px 0;text-align: left;padding: 5px;',
    elements:{
      DiscountLabel: $('.product-discout-price'),
      ShippingLabel: $('.shipping')
    },
    defaults:{
      DiscountLabel: true,
      ShippingLabel: false,
    },
    texts:{
      languages:{
        en: "FOR FREE",
        ro: "GRATIS",
        es: "GRATIS",
        it: "GRATUITO",
        pt: "PRESENTE",
        sk: "ZADARMO",
        si: "BREZPLAДЊNO",
        pl: "ZA DARMO",
        hu: "INGYEN",
        hr: "BESPLATNO",
        cz: "ZDARMA",
        gr: "ΔΩΡΟ",
      }
    }
  }

  var userSettings = typeof packageSettings === 'object' ? packageSettings : {};
  var settings = extend(settingsDefault, userSettings);

  const getQueryStringParameters = url => {
      if (url){
        if(url.split("?").length>0){
        query = url.split("?")[1];
      }
      }else{
         url = window.location.href;
         query = window.location.search.substring(1);
      }
      return (/^[?#]/.test(query) ? query.slice(1) : query)
      .split('&')
      .reduce((params, param) => {
      let [ key, value ] = param.split('=');
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
      return params;
    }, { });
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
              const secondLevelNodes  = true;
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
            Object.keys(els).forEach(function (key) {
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
              if (existance) {
              const secondLevelNodes  = true;
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
          $(settings.elements[key]).each(function(){
            if(defaults[key] == false){
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
          if (typeof setPrice === "function") { 
            
            
            let quantityEle = document.querySelectorAll("[name=quantity]")[0];
            productsArray.forEach(function(product) {
              product.addEventListener('click', function(e) {
                var quantity = parseInt(this.attributes["data-q"].value);

                this.attributes["data-order"].value = settings.orderSeq[quantity-1];

                var quantityOrder = this.attributes["data-order"].value;
                quantityReg = quantity;
                quantityEle.value = quantityOrder;
                setPrice( quantity );
              });
            });

            resolve(true);
            }
          }
      );
  };

  // call our promise
  async function modifyProduct() {
      try {
          let isActiveState = runLogic;
          let runLogicChecker = await runLogicRegister(isActiveState)
          let firstLevelNodes = await checkFirstLevelNodes(runLogicChecker);
          let secondLevelNodes = await checkSecondLevelNodes(firstLevelNodes);
          let prepareDefaultSettings = await runDefaultSettings(secondLevelNodes);
          let setDefaultsValues = await setDefaultValues(prepareDefaultSettings);
          let runChanges = await addDataAttrOrder(setDefaultsValues);
          let setClickerLogic = await setPricerClick(runChanges);

      }
      catch (error) {
        console.log(error.message);
      }
  }
  (async () => {
      await modifyProduct();

      // await setPricerClick();
  })();


  //adds attribute to an element
  function addAttribute(el,attr,value) {
        $(el).attr(attr,value);
  };

  function changeTimesQty(el,q){
    $(el).css('font-size','3rem');
    $(el).html(q+'X');
  }

  function replaceMontlyDose(el,q){
    let totalMonthsSupply = q * 60;

    let text = $(el).text();
    var num = text.replace(/[^0-9]/g,'');
    $(el).text( text.replace(num, totalMonthsSupply) );
  }

  //adding gratis text
  function addGratisText(el, q, regQ){
    // regQ != 1 ? $(el).html($(el).html() + '<span style="'+ settings.discountStyle +'" class="' + settings.discountClass + '">+' + (q - regQ) + '&nbsp;' + settings.texts.languages[settings.currentLocale] + '</span>') : $(el).html();
    var elem = '<span style="'+ settings.discountStyle +'" class="' + settings.discountClass + '">' + regQ + ' + <b>' + (q - regQ) + '&nbsp;' + settings.texts.languages[settings.currentLocale] + '</b></span>' ;
    regQ != 1 ? $(el).html(elem) : '';
    // regQ != 1 ? '<span style="'+ settings.discountStyle +'" class="' + settings.discountClass + '">+' + (q - regQ) + '&nbsp;' + settings.texts.languages[settings.currentLocale] + '</span>' : $(el).html();
  }

  function replaceSupplyPeriod(el, q, regQ){
    regQ != 1 ? $(el).text().replace(regQ, q) : $(el).text();
  }

  //changes images
  function changeImage(el, path, img){
    let imgElement = $(el).find('.product-thumb img')[0];
    let imagePath = path + img;
    addAttribute(imgElement, 'src', imagePath);
  }

  //adding Data Order
  function addDataOrder(){
    $(settings.orderbox).each(function(){
      var q = $(this).attr('data-q');
      var dataOrder = settings.orderSeq[q-1];
      if(dataOrder == false){
        $(this).hide();
      }else{
        addAttribute($(this), 'data-order',dataOrder)
        addGratisText( $($(this)).find(settings.gratisBox), dataOrder, q);
        changeTimesQty($($(this)).find('.product-qty'),dataOrder);
        replaceMontlyDose($($(this)).find('.montly-dose'),dataOrder)
        // replaceSupplyPeriod( $($(this)).find(settings.supplyBox), dataOrder, q);
        changeImage($(this),settings.orderImagesPath, settings.orderImages[q-1])
      }
    });
  }
