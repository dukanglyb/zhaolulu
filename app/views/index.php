<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui">
    <meta http-equiv="cache-control" content="no-siteapp"/>
    <meta name="robots" content="index,follow">
    <meta name="keywords" content="璐璐源,璐璐">
    <meta name="description" content="北京璐璐源商贸有限公司">
    <meta name="author" content="李杜康">
    <link href="/public/faeimg/favicon.ico" rel="shortcut icon" type="image/x-icon">
    <?php echo $this->tag->getTitle(); ?>
    <?php echo $this->tag->stylesheetLink('css/base.css'); ?>
    <?php echo $this->tag->stylesheetLink('dep/bootstrap/css/bootstrap.min.css'); ?>
    <?php echo $this->tag->stylesheetLink('dep/bootstrap/css/font-awesome.min.css');?>
<!--    --><?php //echo $this->tag->stylesheetLink('dep/bootstrap/css/font-awesome.min.css');?>
<!--    --><?php //echo $this->tag->stylesheetLink('dep/bootstrap/css/font-awesome.min.css');?>
<!--    --><?php //echo $this->tag->stylesheetLink('dep/bootstrap/css/font-awesome.min.css');?>

    <link rel="stylesheet/less" type="text/css" href="/css/main.less"/>
    <?php echo $this->tag->javascriptInclude('dep/less/less.min.js'); ?>
    <?php echo $this->tag->javascriptInclude('dep/mod.js'); ?>
    <?php echo $this->tag->javascriptInclude('dep/jquery/jquery-1.11.2.min.js'); ?>
    <?php echo $this->tag->javascriptInclude('dep/bootstrap/js/bootstrap.min.js'); ?>
    <!--轮播图片插件start-->
    <?php echo $this->tag->stylesheetLink('dep/flexslider/flexslider.css');?>
    <?php echo $this->tag->javascriptInclude('dep/flexslider/jquery.flexslider.js'); ?>
    <!--轮播图片插件结束-->

    <?php echo $this->tag->javascriptInclude('js/comm.js'); ?>

    <?php echo $this->tag->javascriptInclude('js/utils.js'); ?>
</head>
<body class="container">
    <?php echo $this->getContent(); ?>
</body>
</html>