<?php echo $this->tag->form(array('producttypes/create', 'autocomplete' => 'off')); ?>

<ul class="pager">
    <li class="previous pull-left">
        <?php echo $this->tag->linkTo(array('producttypes', '&larr; Go Back')); ?>
    </li>
    <li class="pull-right">
        <?php echo $this->tag->submitButton(array('Save', 'class' => 'btn btn-success')); ?>
    </li>
</ul>

<?php echo $this->getContent(); ?>

<div class="center scaffold">
    <h2>Create product types</h2>

    <div class="clearfix">
        <label for="name">Name</label>
        <?php echo $this->tag->textField(array('name', 'size' => 24, 'maxlength' => 70)); ?>
    </div>

</div>
</form>