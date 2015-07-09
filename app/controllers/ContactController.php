<?php

/**
 * ContactController
 *
 * Allows to contact the staff using a contact form
 */
class ContactController extends ControllerBase
{
    public function initialize()
    {
        $this->tag->setTitle('联系我们');
        parent::initialize();
    }

    public function indexAction(){

    }
}
