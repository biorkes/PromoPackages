# PromoPackages
Activates Promo packages


To activate promo scripts, include this snippet in a `<script></script>` tags as a "body script" in Cmanager or directly in the web.

If the website is using form-builder.js, this script will be included after the form initialization.

`document.addEventListener("DOMContentLoaded", function(event) {

    ( function(){

      var dir = document.querySelector('script[src$="form-builder.js"]');

      if(dir !== null){

          var scriptEle = document.createElement("script");

          scriptEle.src = "forskolin.promo.js" + "?v=" + new Date().getTime();

          dir.appendChild(scriptEle);

      }

    }() );

});`

# Compatible with these websites

**forskolin.promo.js**

- forskolinactive.com


**fitonorm.promo.js**

- fitonorm.com


**diet-trends.promo.js**

- diet-trends.us/mjs
- izabela.wiltu.com
- tatiana.wiltu.com
- maja.wiltu.com
- andrea.wiltu.com
- xenia.wiltu.com
- patricia.wiltu.com
- marta.wiltu.com
- sara.wiltu.com
- sarka.wiltu.com
- cristinastory.wiltu.com


# Installation

- Copy the snippet for the desired product

-- If the website is using the old form (form-builder JS) copy the snippet for form-builder.js (code is at bottom of the page)

-- If the website is using the new form (PHP) replace the `document.addEventListener("DOMContentLoad..` snippet with a simple script src tag, providing the script url of the promopackage js file. Ex. *`<script src="//schnellevena.com/js/packages/schnellevena.promo.js"></script>`*


# Mezoderma

**Syntax for Mezoderma* *

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
```

**JS FORM**

```
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function(event) {
      (function(){
              var dir = document.querySelector('script[src$="form-builder.js"]');
              if(dir !== null){
                  var scriptEle = document.createElement("script");
                  scriptEle.src = "//mezodermacream.com/js/packages.js" + "?v=" + new Date().getTime();
                  dir.appendChild(scriptEle);
              }
      }());
  });
</script>
```

**PHP FORM**

```
<script src="//mezodermacream.com/js/packages/packages.js"></script>
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
```

**JS FORM**

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

**PHP FORM**

```
<script src="//schnellevena.com/js/packages/schnellevena.promo.js"></script>
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
    document.addEventListener("DOMContentLoaded", function(event) {
        (function(){
                var dir = document.querySelector('script[src$="form-builder.js"]');
                if(dir !== null){
                    var scriptEle = document.createElement("script");
                    scriptEle.src = "//forskolinactive.com/js/packages.js" + "?v=" + new Date().getTime();
                    dir.appendChild(scriptEle);
                }
        }());
    });
</script>
```

