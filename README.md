# PromoPackages
Activates Promo packages


To activate promo scripts, include this snippet.
If the website is using form-builder.js, this script will be included after the form initialization.

`<script type="text/javascript">
    document.addEventListener("DOMContentLoaded", function(event) {
        (function(){
          var dir = document.querySelector('script[src$="form-builder.js"]');
          if(dir !== null){
              var scriptEle = document.createElement("script");
              scriptEle.src = "forskolin.promo.js" + "?v=" + new Date().getTime();
              dir.appendChild(scriptEle);
          }
        }());
    });
</script>`

**Compatible with these websites**

*forskolin.promo.js*

- forskolinactive.com


*fitonorm.promo.js*

- fitonorm.com


*diet-trends.promo.js*

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
