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
    orderSeq: [1,3,4,6],
    orderImages: ['1_package.jpg','2_plus_1_package.jpg','3_plus_1_package.jpg','4_plus_2_package.jpg'],
    orderImagesPath: '//glycozal.com/js/packages/images/',
    gratisBox: '.product-name',
    supplyBox: '.product-quantity',
    discountClass: 'getfree',
    discountStyle: 'font-size: 1rem;background: #a30c7f;color: white;padding: 0px 10px;margin: 0 auto;font-weight: bold;display: inline-block;padding: 2px 0;text-align: left;padding: 5px;',
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
        // en: "FOR FREE",
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
  };

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

   function runLogicRegister(runLogicVar) {
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
  }

     function checkFirstLevelNodes(isActive) {
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
  }

   function checkSecondLevelNodes(exist) {
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
  }

   function checkNodeExistance(els) {
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
  }

   function runDefaultSettings(exist) {
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
  }

   function setDefaultValues(runDefaultSettings) {
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
  }

   function addDataAttrOrder(exist) {
      return new Promise(
          (resolve, reject) => {
              addDataOrder();
              resolve(true);
          }
      );
  }

   function setPricerClick(addDataAttrOrder) {
    return new Promise(
          (resolve, reject) => {
          var quantityReg;
            
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
  }

  // call our promise
   function modifyProduct() {
      try {
          let isActiveState = runLogic;
          let runLogicChecker = runLogicRegister(isActiveState);
          let firstLevelNodes = checkFirstLevelNodes(runLogicChecker);
          let secondLevelNodes = checkSecondLevelNodes(firstLevelNodes);
          let prepareDefaultSettings = runDefaultSettings(secondLevelNodes);
          let setDefaultsValues = setDefaultValues(prepareDefaultSettings);
          let runChanges = addDataAttrOrder(setDefaultsValues);
          let setClickerLogic = setPricerClick(runChanges);

      }
      catch (error) {
        console.log(error.message);
      }
  }

  modifyProduct();


  //adds attribute to an element
  function addAttribute(el,attr,value) {
        $(el).attr(attr,value);
  }

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
    let gratisText = '<svg style="fill:white" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path d="M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z"/></svg>';
    if(settings.currentLocale in settings.texts.languages){
      gratisText = settings.texts.languages[settings.currentLocale];
    }
    
    var elem = '<span style="'+ settings.discountStyle +'" class="' + settings.discountClass + '">' + regQ + ' + <b>' + (q - regQ) + '&nbsp;' + gratisText + '</b></span>' ;
    regQ = regQ != 1 ? $(el).html(elem) : '';
    
  }



  //changes images
  function changeImage(el, path, img){
    let imgElement = $(el).find('.product-thumb')[0];
    imgElement.setAttribute('style', 'width: 50%; background: none; padding: 10px 0 10px 10px; z-index: 990;');

    let imagePath = path + img;

    $(settings.elements.DiscountLabel).css('padding-top','15px');

    $('.product span.icon.checkrounded').css({'width':'30px', 'height':'30px', 'z-index':'991'});
    $('.product span.icon.checkrounded').html('<style>.products-container .product .checkrounded:after{ left:8px;font-size:20px;line-height:28px;}</style>');
    
    let imageCreator = document.createElement('img');
    imageCreator.setAttribute('src', imagePath);

    imgElement.append(imageCreator);
    // addAttribute(imgElement, 'src', imagePath);
  }

  //adding Data Order
  function addDataOrder(){
    $(settings.orderbox).each(function(){
      var q = $(this).attr('data-q');
      var dataOrder = settings.orderSeq[q-1];
      if(dataOrder == false){
        $(this).hide();
      }else{
        addAttribute($(this), 'data-order',dataOrder);
        addGratisText( $($(this)).find(settings.gratisBox), dataOrder, q);
        changeTimesQty($($(this)).find(settings.supplyBox),dataOrder);
        changeImage($(this),settings.orderImagesPath, settings.orderImages[q-1]);
      }
    });
  }
