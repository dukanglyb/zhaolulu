
<?php echo $this->getContent(); ?>

<div id="wrapper">
    <div class="slider-wrapper theme-default">
        <div id="slider" class="nivoSlider">
            <img src="/dep/nivoSlider/images/toystory.jpg" data-thumb="/dep/nivoSlider/images/toystory.jpg" alt="" />
            <a href="http://baidu.com"><img src="/dep/nivoSlider/images/up.jpg" data-thumb="/dep/nivoSlider/images/up.jpg" alt="" title="This is an example of a caption" /></a>
            <img src="/dep/nivoSlider/images/walle.jpg" data-thumb="/dep/nivoSlider/images/walle.jpg" alt="" data-transition="slideInLeft" />
            <img src="/dep/nivoSlider/images/nemo.jpg" data-thumb="/dep/nivoSlider/images/nemo.jpg" alt="" title="#htmlcaption" />
        </div>
        <div id="htmlcaption" class="nivo-html-caption">
            <strong>This</strong> is an example of a <em>HTML</em> caption with <a href="#">a link</a>.
        </div>
    </div>
    <div class="footer-banner" style="width:728px; margin:0 auto"></div>
</div>


<div class="jumbotron">
    <h1>欢迎来到璐璐源</h1>
    <p>INVO是一个革命性的应用程序在线创建发票免费。从客户端接收在线付款和改善现金流</p>
    <p><?php echo $this->tag->linkTo(array('register', '免费试用 &raquo;', 'class' => 'btn btn-primary btn-large btn-success')); ?></p>
</div>

<div class="row">
    <div class="col-md-4">
        <h2>管理在线发票</h2>
        <p>创建，跟踪和在线导出您的发票。自动重复发票和使用我们的发票模板和品牌它与您的企业徽标设计自己的发票。</p>
    </div>
    <div class="col-md-4">
        <h2>仪表板和报告</h2>
        <p>获得关键洞察到你的企业是如何做的。看看销售最多的，谁是你的前付费用户的平均时间你的客户需要支付。</p>
    </div>
    <div class="col-md-4">
        <h2>邀请，分享和协作</h2>
        <p>邀请用户和分享您的工作量发票支持多个用户使用不同的权限。它可以帮助您的企业获得更高的生产效率。</p>
    </div>
</div>


<?php echo $this->tag->javascriptInclude('js/main.js'); ?>
<script>
    require('jquery.nivo.slider');
    require('main');
</script>
