
<?php echo $this->getContent(); ?>

<div class="page-header">
    <h2>联系我们</h2>
</div>
<p>Tel: 010-53673598<br>
    Fax: 010-53673598<br>
    Mobile:18888888888<br>
    QQ: 98769876<br>
    E-mail: zflcskj@163.com<br>
    Add: 北京市海淀区知春路甲48号盈都大厦C座4单元16D</p>

<p>给我们留言，让我们知道我们如何能帮助。请尽可能描述，因为这将帮助我们更好地为您服务。</p>

<?php echo $this->tag->form(array('contact/send', 'role' => 'form')); ?>
<fieldset>
    <div class="form-group">
        <?php echo $form->label('name'); ?>
        <?php echo $form->render('name', array('class' => 'form-control')); ?>
    </div>
    <div class="form-group">
        <?php echo $form->label('email'); ?>
        <?php echo $form->render('email', array('class' => 'form-control')); ?>
    </div>
    <div class="form-group">
        <?php echo $form->label('comments'); ?>
        <?php echo $form->render('comments', array('class' => 'form-control')); ?>
    </div>
    <div class="form-group">
        <?php echo $this->tag->submitButton(array('发送', 'class' => 'btn btn-primary btn-large')); ?>
    </div>
</fieldset>
</form>