<?php

use Phalcon\Forms\Form;
use Phalcon\Forms\Element\Text;
use Phalcon\Forms\Element\TextArea;
use Phalcon\Validation\Validator\PresenceOf;
use Phalcon\Validation\Validator\Email;

class ContactForm extends Form
{

    public function initialize($entity = null, $options = null)
    {
        // Name
        $name = new Text('name');
        $name->setLabel('您的全名');
        $name->setFilters(array('striptags', 'string'));
        $name->addValidators(array(
            new PresenceOf(array(
                'message' => '名称是必填项'
            ))
        ));
        $this->add($name);

        // Email
        $email = new Text('email');
        $email->setLabel('您的邮箱');
        $email->setFilters('email');
        $email->addValidators(array(
            new PresenceOf(array(
                'message' => '邮箱是必填项'
            )),
            new Email(array(
                'message' => '无效的邮箱地址'
            ))
        ));
        $this->add($email);

        $comments = new TextArea('comments');
        $comments->setLabel('评论');
        $comments->setFilters(array('striptags', 'string'));
        $comments->addValidators(array(
            new PresenceOf(array(
                'message' => '评论内容是必填项'
            ))
        ));
        $this->add($comments);
    }
}