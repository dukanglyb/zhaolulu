<?php

use Phalcon\Forms\Form;
use Phalcon\Forms\Element\Text;
use Phalcon\Forms\Element\Password;
use Phalcon\Validation\Validator\PresenceOf;
use Phalcon\Validation\Validator\Email;

class RegisterForm extends Form
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

        // Name
        $name = new Text('username');
        $name->setLabel('用户名');
        $name->setFilters(array('alpha'));
        $name->addValidators(array(
            new PresenceOf(array(
                'message' => '请输入您的用户名'
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

        // Password
        $password = new Password('password');
        $password->setLabel('密码');
        $password->addValidators(array(
            new PresenceOf(array(
                'message' => '密码是必填项'
            ))
        ));
        $this->add($password);

        // Confirm Password
        $repeatPassword = new Password('repeatPassword');
        $repeatPassword->setLabel('确认密码');
        $repeatPassword->addValidators(array(
            new PresenceOf(array(
                'message' => '确认密码必填项'
            ))
        ));
        $this->add($repeatPassword);
    }
}