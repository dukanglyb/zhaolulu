<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="renderer" content="webkit">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui">
    <meta http-equiv="cache-control" content="no-siteapp"/>
    <meta name="robots" content="index,follow">
    <meta name="keywords" content="百市通，电子商务，互联网金融，P2P">
    <meta name="description" content="北京璐璐源商贸有限公司">
    <meta name="author" content="李杜康">
    <link href="/public/faeimg/favicon.ico" rel="shortcut icon" type="image/x-icon">



    <?php echo $this->tag->getTitle(); ?>
    <?php echo $this->tag->stylesheetLink('dep/bootstrap/css/bootstrap.min.css'); ?>
    <?php echo $this->tag->stylesheetLink('dep/bootstrap/css/font-awesome.min.css');?>
<!--    --><?php //echo $this->tag->stylesheetLink('dep/bootstrap/css/font-awesome.min.css');?>
<!--    --><?php //echo $this->tag->stylesheetLink('dep/bootstrap/css/font-awesome.min.css');?>
<!--    --><?php //echo $this->tag->stylesheetLink('dep/bootstrap/css/font-awesome.min.css');?>

    <?php echo $this->tag->javascriptInclude('dep/less/less.min.js'); ?>
    <?php echo $this->tag->javascriptInclude('dep/mod.js'); ?>
    <?php echo $this->tag->javascriptInclude('dep/jquery/jquery-1.11.2.min.js'); ?>
    <?php echo $this->tag->javascriptInclude('dep/bootstrap/js/bootstrap.min.js'); ?>
    <!--轮播图片插件start-->
    <?php echo $this->tag->stylesheetLink('dep/nivoSlider/themes/bar/bar.css');?>
    <?php echo $this->tag->stylesheetLink('dep/nivoSlider/themes/dark/dark.css');?>
    <?php echo $this->tag->stylesheetLink('dep/nivoSlider/themes/default/default.css');?>
    <?php echo $this->tag->stylesheetLink('dep/nivoSlider/themes/light/light.css');?>

    <?php echo $this->tag->stylesheetLink('dep/nivoSlider/init.css');?>
    <?php echo $this->tag->stylesheetLink('dep/nivoSlider/style.css');?>

    <?php echo $this->tag->stylesheetLink('dep/nivoSlider/nivo-slider.css');?>
    <?php echo $this->tag->javascriptInclude('dep/nivoSlider/jquery.nivo.slider.js'); ?>
    <!--轮播图片插件结束-->
    <?php echo $this->tag->javascriptInclude('js/utils.js'); ?>
</head>
<body class="container">
    <?php echo $this->getContent(); ?>
</body>
</html>