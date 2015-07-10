<?php

use Phalcon\Mvc\Model\Criteria;
use Phalcon\Paginator\Adapter\Model as Paginator;

/**
 * ProductsController
 *
 * Manage CRUD operations for products
 */
class ProductsController extends ControllerBase
{
    public function initialize()
    {
        $this->tag->setTitle('产品中心');
        parent::initialize();
    }

    /**
     * 产品中心
     */
    public function indexAction()
    {

    }

    /**
     * 产品详情
     */
    public function detailAction()
    {

    }


}
