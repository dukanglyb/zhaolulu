define('main', function(require, exports, module) {
    var $=require("jquery");

    var fn= {
    };

    module.exports=fn;

    //fn.injectCode();

    //轮播图片
    $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider){
            $('body').removeClass('loading');
        }
    });
});