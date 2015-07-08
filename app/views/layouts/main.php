<nav class="navbar navbar-default navbar-inverse" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
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
    <footer>
        <p>北京璐璐源商贸有限公司 Company &copy; 2014-<?php echo date("Y");?></p>
    </footer>
</div>