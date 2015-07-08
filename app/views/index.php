<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <?php echo $this->tag->getTitle(); ?>
    <?php echo $this->tag->stylesheetLink('css/bootstrap.min.css'); ?>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="北京璐璐源商贸有限公司">
    <meta name="author" content="李杜康">
</head>
<body class="container">
    <?php echo $this->getContent(); ?>
    <?php echo $this->tag->javascriptInclude('js/jquery.min.js'); ?>
    <?php echo $this->tag->javascriptInclude('js/bootstrap.min.js'); ?>
    <?php echo $this->tag->javascriptInclude('js/utils.js'); ?>
</body>
</html>