<?php
use Phalcon\Mvc\Controller;
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

    public function suggestionAction()
    {
        $this->tag->setTitle('意见反馈');
        $this->view->form = new ContactForm;
    }

    /**
     * Saves the contact information in the database
     */
    public function sendAction()
    {
        if ($this->request->isPost() != true) {
            return $this->forward('contact/suggestion');
        }

        $form = new ContactForm;
        $contact = new Contact();

        // Validate the form
        $data = $this->request->getPost();
        if (!$form->isValid($data, $contact)) {
            foreach ($form->getMessages() as $message) {
                $this->flash->error($message);
            }
            return $this->forward('contact/suggestion');
        }

        if ($contact->save() == false) {
            foreach ($contact->getMessages() as $message) {
                $this->flash->error($message);
            }
            return $this->forward('contact/suggestion');
        }

        $this->flash->success('Thanks, we will contact you in the next few hours');
        return $this->forward('index/index');
    }
}
