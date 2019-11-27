# PromoPackages

# Explanation

## Default Settings

| Setting       | Value         |
| ------------- | ------------- |
| moduleAlwaysActive | true |
| moduleActivationParam | "promo" |
| countryInput | document.querySelectorAll("input[name=country]")[0] |
| orderbox | ".product" |
| orderSeq | [1, 3, 5, 8] |
| orderImages | [ "1-package.png",  "2-packages.png",  "3-packages.png",  "4-packages.png"] |
| orderImagesPath | "//schnellevena.com/js/packages/images/" |
| package.packageGratisParentElement | ".product-info span.fs18.italic.bold" |
| package.packageNumberElement | ".product-info span.fs60.bold" |
| package.packageImageElement | ".product-thumb img" |
| gratis.packageGratisClass | "getfree" |
| gratis.packageGratisStyle | "background: #a30c7f;color: white;padding: 0px 10px;margin: 0 auto;font-weight: bold;display: inline-block;padding: 2px 0;text-align: left;padding: 5px;" |
| elements.discountLabel.show | true |
| elements.discountLabel.element | ".product-discout-price" |
| elements.discountLabel.style | "" |
| elements.shippingLabel.show | true |
| elements.discountLabel.element | ".shipping" |
| elements.discountLabel.style | "" |
| texts.languages.en | "FOR FREE" |
| texts.languages.ro | "GRATIS" |
| texts.languages.es | "GRATIS" |
| texts.languages.it | "GRATUITO" |
| texts.languages.pt | "PRESENTE" |
| texts.languages.sk | "ZADARMO" |
| texts.languages.si | "BREZPLAČNO" |
| texts.languages.pl | "ZA DARMO" |
| texts.languages.hu | "INGYEN" |
| texts.languages.hr | "BESPLATNO" |
| texts.languages.cz | "ZDARMA" |
| texts.languages.gr | "ΔΩΡΟ |
| fallback | SVG icon or an image |

**Default image:** 

`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M11 24h-9v-12h9v12zm0-18h-11v4h11v-4zm2 18h9v-12h-9v12zm0-18v4h11v-4h-11zm4.369-6c-2.947 0-4.671 3.477-5.369 5h5.345c3.493 0 3.53-5 .024-5zm-.796 3.621h-2.043c.739-1.121 1.439-1.966 2.342-1.966 1.172 0 1.228 1.966-.299 1.966zm-9.918 1.379h5.345c-.698-1.523-2.422-5-5.369-5-3.506 0-3.469 5 .024 5zm.473-3.345c.903 0 1.603.845 2.342 1.966h-2.043c-1.527 0-1.471-1.966-.299-1.966z"/></svg>`

To activate the script **for a channel** - copy-paste the js snippet in the body script section in Cmanager and replace the url of the promo script

***If the website is using form-builder.js and you are using this snippet in the Cmanager, use this snippet below and replace the scriptEle.src with the proper script for the product webpage. This example snippet is using the *schnellevena* promotional js file.***

```
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function(event) {
      (function(){
              var dir = document.querySelector('script[src$="form-builder.js"]');
              if(dir !== null){
                  var scriptEle = document.createElement("script");
                  scriptEle.src = "//schnellevena.com/js/packages/schnellevena.promo.js" + "?v=" + new Date().getTime();
                  dir.appendChild(scriptEle);
              }
      }());
  });
</script>
```

***If the website is using the new PHP forms there is no need to look for form-builder.js and append the script after this file. So in this case you have to copy-paste this snippet and replace the `src` with the proper script for the product webpage***

```
<script src="//schnellevena.com/js/packages/schnellevena.promo.js"></script>
```

# Options

Not all scripts have options to be provided, but if there is custom options you can control the number of packages, images and images path.

```
var packageSettings = {
  orderSeq:[1,3,4,6],
  orderImages:['1-package.jpg','2-1-packages.png','3-1-packages.png','4-2-packages.png'],
  orderImagesPath: '//schnellevena.com/js/packages/images/'
};
```

`orderSeq` - array of integers - Items number user gets
`orderImages` - array of strings - Image names with extensions (ex. `1-package.jpg`)
`orderImagesPath` - string - Full image path with two leading slashes `//`.


# Installation

- Copy the snippet for the desired product

-- If the website is using the old form (form-builder JS) copy the snippet for form-builder.js (code is at bottom of the page)

-- If the website is using the new form (PHP) replace the `document.addEventListener("DOMContentLoad..` snippet with a simple script src tag, providing the script url of the promopackage js file. Ex. *`<script src="//schnellevena.com/js/packages/schnellevena.promo.js"></script>`*


# Mezoderma

**Syntax for Mezoderma**

**Upload the Product Images in desired directory, change the urls**

```
<script type="text/javascript">
  const custom_settings = {
    orderSeq: [1,3,4,6],
    orderSelectedPackage: 1,
    orderImages: ['1cream.png','2cream.png','3cream.png','4cream.png'],
    orderImagesPath: 'https://mezodermacream.com/images/promo/'
  };
</script>
<script src="//mezodermacream.com/js/packages/packages.js"></script>
```

# Теchnoweek

**Syntax for Теchnoweek**

**Upload the Product Images in desired directory, change the urls**

```
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function(event) {
      (function(){
              var dir = document.querySelector('script[src$="form-builder.js"]');
              if(dir !== null){
                  var scriptEle = document.createElement("script");
                  scriptEle.src = "//forskolinactive.com/js/packages/technoweek/pt/packages.js" + "?v=" + new Date().getTime();
                  dir.appendChild(scriptEle);
              }
      }());
  });
</script>
```



# Glycozal

**Syntax for Glycozal**

**Upload the Product Images in desired directory, change the urls**

```
<script type="text/javascript">
  var packageSettings = {
      orderSeq:[1,3,4,6],
      orderImages:['1-package.png','2-packages.png','3-1-packages.png','4-2-packages.png'],
      orderImagesPath: '//schnellevena.com/js/packages/images/'
  };
</script>
<script src="//glycozal.com/js/packages/glycozal.promo.js"></script>
```


# Forskolin

**Syntax for Forskolin**
**ALL SETTINGS ARE HARDCODED**

| Setting       | Value         |
| ------------- | ------------- |
| moduleAlwaysActive | false |
| moduleActivationParam | 'promo' |
| countryInput | $('[name="country"]') |
| orderbox | $('.product') |
| orderSeq | [1,3,5,false] |
| orderImages | ['product1.png','product2_1free.png','product3_2free.png','product4.png'] |
| orderImagesPath | '//forskolinactive.com/js/img/' |
| gratisBox | '.box-header' |
| supplyBox | '.supply' |
| discountClass | 'getfree' |
| discountStyle | 'background: #a30c7f; color: white;padding: 0px 10px;margin: 0 10px;' |
| DiscountLabel | $('.save') |
| ShippingLabel | $('.shipping') |
| DiscountLabel | false |
| ShippingLabel | true |

| Language | Translation |
| ------------- | ------------- |
| en | "FOR FREE" |
| ro | "GRATIS" |
| es | "GRATIS" |
| it | "GRATUITO" |
| pt | "GRÁTIS" |
| sk | "ZADARMO" |
| si | "BREZPLAČNO" |
| pl | "ZA DARMO" |
| hu | "INGYEN" |
| hr | "BESPLATNO" |
| cz | "ZDARMA" |
| gr | "ΔΩΡΕΆΝ" |

```
<script type="text/javascript">
    var packageSettings = {
        orderSeq:[1,3,4,6],
        orderImages:['1-package.jpg','2-1-packages.png','3-1-packages.png','4-2-packages.png'],
        orderImagesPath: '//bactrostop.com/js/packages/images/'
    };
</script>
<script src="//forskolinactive.com/js/packages.js"></script>
```


# Bactrostop

**Syntax for Bactrostop**

**Upload the Product Images in desired directory, change the urls**


```
<script type="text/javascript">
    var packageSettings = {
        orderSeq:[1,3,4,6],
        orderImages:['1-package.jpg','2-1-packages.png','3-1-packages.png','4-2-packages.png'],
        orderImagesPath: '//bactrostop.com/js/packages/images/'
    };
</script>
<script src="//bactrostop.com/js/packages/bactrostop.promo.js"></script>
```

# Garcinia

## Diet Trends MJS

**Syntax for Garcinia - Diet Trends**

```
<script type="text/javascript">
  var packageSettings = {
      orderSeq: [1,3,5,false],
      orderImages: ['product1.png','product2_1.png','product3_2.png','product.png'],
      orderImagesPath: '//en.diet-trends.us/packages/images/'
  };
</script>
<script src="//en.diet-trends.us/packages/packages.js"></script>
```