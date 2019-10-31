$(document).ready(function(){

  const settings = {

    moduleAlwaysActive: true,
    moduleActivationParam: 'promo',
    countryInput: $('[name="country"]'),
    orderbox: $('.product'),
    orderSeq: [1,3,false,false],
    orderSelectedPackage: 0,
    orderImages: ['1cream.png','2cream.png'],
    orderImagesPath: '../images/promo/',
    gratisBox: '.quantity',
    timeQty: '.quantity b',
    supplyBox: '.supply',
    discountClass: 'getfree',
    discountStyle: '    background: #df3232; color: white; padding: 2px 10px !important; margin: 0 auto;font-size: 1.6rem;font-weight: bold;position: absolute;width: 150px;text-align: center;right: 20px;top: 26px;border-radius: 10px;',
    elements:{
      DiscountLabel: $('.product-discout-price'),
      ShippingLabel: $('.freeshipping')
    },
    defaults:{
      DiscountLabel: true,
      ShippingLabel: false,
    },
    texts:{
      languages:{
        en: "GIFT",
        ro: "CADOU",
        es: "REGALO",
        it: "REGALO",
        pt: "PRESENTE",
        sk: "DARČEK",
        si: "DARILO",
        pl: "PREZENT",
        hu: "AJÁNDÉK",
        hr: "POKLON",
        cz: "DÁREK",
        gr: "ΔΩΡΟ",
      }
    }
  }

  // overwrite default settings with custom one
  if(typeof custom_settings !== "undefined"){
    for(var key in settings){
      if(custom_settings.hasOwnProperty( key )){
        settings[ key ] = custom_settings[ key ]
      }
    }
  }

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
      var [ key, value ] = param.split('=');
      params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
      return params;
    }, { });
  };
  var queryActivator = getQueryStringParameters();
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
            var countExist = 0;
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
            var secondLevelElements = settings.elements;
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
              var defaults = settings.defaults;
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
            
            var quantityEle = document.querySelectorAll("[name=quantity]")[0];
            var priceEle = document.querySelectorAll("[name=price]")[0];
            var prices = JSON.parse(priceEle.getAttribute('data-values'));

            quantityEle.value = settings.orderSeq[ settings.orderSelectedPackage ];

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
          var isActiveState = runLogic;
          var runLogicChecker = await runLogicRegister(isActiveState)
          var firstLevelNodes = await checkFirstLevelNodes(runLogicChecker);
          var secondLevelNodes = await checkSecondLevelNodes(firstLevelNodes);
          var prepareDefaultSettings = await runDefaultSettings(secondLevelNodes);
          var setDefaultsValues = await setDefaultValues(prepareDefaultSettings);
          var runChanges = await addDataAttrOrder(setDefaultsValues);
          var setClickerLogic = await setPricerClick(runChanges);
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
    $(el).html('<b>'+ q + 'x'+ '</b>');
  }

  function replaceMontlyDose(el,q){
    var totalMonthsSupply = q;

    var text = $(el).text();
    var num = text.replace(/[^0-9]/g,'');
    $(el).text( text.replace(num, totalMonthsSupply) );
  }

  //adding gratis text
  function addGratisText(el, q, regQ) {
      $(el).find('span').text(regQ)
      var style = "fill: #fff";
      var gratisText = '<svg style="' + style + '" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z"/></svg>';
      if (settings.currentLocale in settings.texts.languages) {
          gratisText = settings.texts.languages[settings.currentLocale];
      }
      regQ != 1 ? $(el).html($(el).html() + '<span style="' + settings.discountStyle + '" class="' + settings.discountClass + '">'+ q + ' + ' + (q - regQ) + '&nbsp;' + gratisText + '</span>') : $(el).html();
  }

  function replaceSupplyPeriod(el, q, regQ){
    regQ != 1 ? $(el).text().replace(regQ, q) : $(el).text();
  }

  //changes images
  function changeImage(el, path, img){
    var imgElement = $(el).find('.oneCream')[0];
    var imagePath = path + img;
    addAttribute(imgElement, 'src', imagePath);
  }

  function selectedPackage( packageId ){
      package = $(settings.orderbox);
      $( package[ packageId ] ).click();
  }

  //adding Data Order
  function addDataOrder(){

    $(settings.orderbox).each(function(e,i){

      var q = $(this).attr('data-q');
      var dataOrder = settings.orderSeq[q-1];

      if(dataOrder == false){

        $(this).hide();

      }else{
        addAttribute($(this), 'data-order',dataOrder)
        addGratisText( $($(this)).find(settings.gratisBox), dataOrder, q);
        changeTimesQty($($(this)).find(settings.timeQty),dataOrder);
        replaceMontlyDose($($(this)).find('.supply'),dataOrder)
        if(e === settings.orderSelectedPackage){
          selectedPackage(settings.orderSelectedPackage);
        }
        // replaceSupplyPeriod( $($(this)).find(settings.supplyBox), dataOrder, q);
        changeImage($(this),settings.orderImagesPath, settings.orderImages[q-1]);

      }

    });

  }

});
