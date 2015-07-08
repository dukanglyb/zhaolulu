define('main', function(require, exports, module) {
    var $=require("jquery");

    var fn= {
    };

    module.exports=fn;

    //fn.injectCode();

    //$('#slider').nivoSlider();
    $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
});