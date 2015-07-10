<nav class="navbar navbar-default navbar-inverse" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">切换导航</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">璐璐源</a>
        </div>
        <?php echo $this->elements->getMenu(); ?>
    </div>
</nav>

<div>
    <?php echo $this->getContent(); ?>
    <hr>
    <div id="index-footer" class="footer">
        <div class="footer-center"
            <!--合作伙伴-->
            <div class="footer-link">
                <p>
                    <a href="/about/index">关于我们</a>
                    <b>|</b>
                    <a href="/contact/contactus">联系我们</a>
                    <b>|</b>
                    <a href="/contact/employ">招贤纳士</a>
                    <b>|</b>
                    <a href="/contact/suggestion">意见反馈</a>
                </p>
            </div>
            <div class="footer-copyright">
                <p>
                    <em>Company &copy; 2014-<?php echo date("Y");?> 璐璐源 京 ICP 备 10011451号-6 北京璐璐源商贸有限公司</em>
                </p>
                <p style="text-align: center;">
                    全国统一客服专线:18612098866    QQ在线技术咨询号码:245012628
                </p>
            </div>
        </div>
    </div>
    <footer>
        <p> </p>
    </footer>
</div>