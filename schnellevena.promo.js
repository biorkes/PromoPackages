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
        moduleActivationParam: 'promo',
        countryInput: document.querySelectorAll("[name=country]")[0],
        orderbox: document.querySelectorAll("[name=product]")[0],
        orderSeq: [1, 3, 5, 8],
        orderImages: ['1-package.png', '2-packages.png', '3-packages.png', '4-packages.png'],
        orderImagesPath: '//schnellevena.com/js/packages/images/',
        gratisBox: '.product-info span.fs18.italic.bold',
        supplyBox: '.product-info span.fs60.bold',
        imageBox: '.product-thumb img',
        discountClass: 'getfree',
        discountStyle: 'background: #a30c7f;color: white;padding: 0px 10px;margin: 0 auto;font-weight: bold;display: inline-block;padding: 2px 0;text-align: left;padding: 5px;',
        elements: {
            DiscountLabel: document.querySelectorAll(".product-discout-price"),
            ShippingLabel: document.querySelectorAll(".shipping")
        },
        defaults: {
            DiscountLabel: true,
            ShippingLabel: false,
        },
        texts: {
            languages: {
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
            fallback: '<svg style="fill: #fff" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z"/></svg>'
        }
    }

    /**
     * Check if the User have passed packageSettings
     * @type {Object}
     */
    var userSettings = typeof packageSettings === 'object' ? packageSettings : {};

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

    /**
     * Store the array with query params in a variable
     * @type {Array}
     */
    let queryActivator = getQueryStringParameters();

    /**
     * Check how the script will be invoked - with a query parameter or it is active by default
     * @type {Bool}
     */
    const runLogic = settings.moduleAlwaysActive === true ? true : (settings.moduleActivationParam in queryActivator ? true : false);

    async function runLogicRegister(runLogicVar) {
        return new Promise(
            (resolve, reject) => {
                if (runLogic) {
                    const runState = true;
                    resolve(runState);
                } else {
                    const error = new Error('No Active Promotions');
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
                    const error = new Error('Error SecondLevelNodes does not exist');
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
                    const error = new Error('Error checkNodeExistance does not exist');
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
                if (typeof setPrice === "function") {


                    let quantityEle = document.querySelectorAll("[name=quantity]")[0];
                    let productsArray = document.querySelectorAll(".product");

                    productsArray.forEach(function(product) {
                        product.addEventListener('click', function(e) {
                            var quantity = parseInt(this.attributes["data-q"].value);
                            var quantityOrder = this.attributes["data-order"].value;
                            quantityOrder.value = settings.orderSeq[quantity - 1];
                            quantityEle.value = quantityOrder;
                        });
                    });

                    resolve(true);
                }
            }
        );
    };

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
            } catch (error) {
                console.log(error.message);
            }
        }
        (async () => {
            await modifyProduct();
        })();


    function changeTimesQty(el, q) {
        el.style.fontSize = "3rem";
        el.innerHTML = q + 'X';
    }

    function replaceMontlyDose(el, q) {
        let totalMonthsSupply = q * 60;
        let text = el.innerText;
        var num = text.replace(/[^0-9]/g, '');
        el.innerText = text.replace(num, totalMonthsSupply);
    }

    function addGratisText(el, q, regQ) {
        var gratisText = settings.texts.fallback;
        var elem = '<span style="' + settings.discountStyle + '" class="' + settings.discountClass + '">' + q + ' + ' + (q - regQ) + '&nbsp;' + gratisText + '</span>';
        el.innerHTML = regQ !== 1 ? elem : el.innerHTML;
    }

    function replaceSupplyPeriod(el, q, regQ) {
      el.innerText = regQ !== 1 ? el.innerText.replace(regQ, q) : el.innerText;
    }

    //changes images
    function changeImage(el, path, img) {
        let imgElement = doucment.querySelectorAll(el + settings.imageBox)[0];
        let imagePath = path + img;
        imgElement.setAttribute('src', imagePath)
    }

    //adding Data Order
    function addDataOrder() {
      settings.orderbox.forEach(function(e,i){
        let q = this.getAttribute('data-q');
        let dataOrder = settings.orderSeq[q - 1];
        if( dataOrder === false ){
          this.style.display = 'none';
        }else{
          this.setAttribute('data-order', dataOrder);
          addGratisText( document.querySelectorAll(settings.gratisBox)[i] , dataOrder, q);
          changeTimesQty( document.querySelectorAll(settings.supplyBox)[i] , dataOrder);
          changeImage(this, settings.orderImagesPath, settings.orderImages[q - 1])
          // replaceMontlyDose($($(this)).find('.montly-dose'),dataOrder)
          // replaceSupplyPeriod( $($(this)).find(settings.supplyBox), dataOrder, q);
        }
      });
    }

});