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
    orderSeq: [1,3,5,false],
    orderImages: ['product1.png','product2_1.png','product3_2.png','product.png'],
    orderImagesPath: '//en.diet-trends.us/packages/images/',
    gratisBox: '.box-header',
    supplyBox: '.supply',
    discountClass: 'getfree',
    discountStyle: 'background: #df3232; color: white;padding: 0px 10px;margin: 0 auto;font-size: 1.3rem;font-weight: bold;width: 100%;display: block;padding: 2px 0;text-align: center;',
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
  console.log(runLogic);

    async function runLogicRegister(runLogicVar) {
      return new Promise(
          (resolve, reject) => {
              if (runLogic) {
              const runState = true;
              console.log('runLogicRegister = true')
                resolve(runState);
            } else {
              console.log('runLogicRegister = false')
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
              console.log('checkFirstLevelNodes = true')
                resolve(productExists);
            } else {
              console.log('checkFirstLevelNodes = false')
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
              console.log('checkSecondLevelNodes = true')
                resolve(secondLevelNodes);
            } else {
              console.log('checkSecondLevelNodes = false')
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
              // if (settings.elements.DiscountLabel && settings.elements.ShippingLabel) {
              if (existance) {
              const secondLevelNodes  = true;
              console.log('runDefaultSettings = true')
                resolve(secondLevelNodes);
            } else {
              console.log('runDefaultSettings = false')
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
            
            console.log('function exists');
            
            let quantityEle = document.querySelectorAll("[name=quantity]")[0];
            let priceEle = document.querySelectorAll("[name=price]")[0];
            let prices = JSON.parse(priceEle.getAttribute('data-values'));

            productsArray.forEach(function(product) {
              product.addEventListener('click', function(e) {
                var quantity = this.attributes["data-q"].value;

                this.attributes["data-order"].value = settings.orderSeq[quantity-1];

                var quantityOrder = this.attributes["data-order"].value;
                quantityReg = quantity;
                quantityEle.value = quantityOrder;
                setPrice( prices[(quantity-1)] );
              });
            });

            console.log('setPricerClick = true');
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
  })();


  //adds attribute to an element
  function addAttribute(el,attr,value) {
        $(el).attr(attr,value);
  };

  function changeTimesQty(el,q){
    $(el).html(q);
  }

  function replaceMontlyDose(el,q){
    let totalMonthsSupply = q;

    let text = $(el).text();
    var num = text.replace(/[^0-9]/g,'');
    $(el).text( text.replace(num, totalMonthsSupply) );
  }

  //adding gratis text
  function addGratisText(el, q, regQ){
    // regQ != 1 ? $(el).html($(el).html() + '<span style="'+ settings.discountStyle +'" class="' + settings.discountClass + '">+' + (q - regQ) + '&nbsp;' + settings.texts.languages[settings.currentLocale] + '</span>') : $(el).html();
    var elem = '<span style="'+ settings.discountStyle +'" class="' + settings.discountClass + '">' + regQ + ' + <b>' + (q - regQ) + '&nbsp;' + settings.texts.languages[settings.currentLocale] + '</b></span>' ;
    regQ != 1 ? $(el).after(elem) : '';
    // regQ != 1 ? '<span style="'+ settings.discountStyle +'" class="' + settings.discountClass + '">+' + (q - regQ) + '&nbsp;' + settings.texts.languages[settings.currentLocale] + '</span>' : $(el).html();
  }

  function replaceSupplyPeriod(el, q, regQ){
    regQ != 1 ? $(el).text().replace(regQ, q) : $(el).text();
  }

  //changes images
  function changeImage(el, path, img){
    let imgElement = $(el).find('.product-img2 img')[0];
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
        changeTimesQty($($(this)).find('.num'),dataOrder);
        replaceMontlyDose($($(this)).find('.supply'),dataOrder)
        // replaceSupplyPeriod( $($(this)).find(settings.supplyBox), dataOrder, q);
        changeImage($(this),settings.orderImagesPath, settings.orderImages[q-1])
      }
    });
  }