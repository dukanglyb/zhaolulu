<?php

error_reporting(E_ALL);

use Phalcon\Mvc\Application;
//use Phalcon\Config\Adapter\Ini as ConfigIni;
use Phalcon\Config as Config;

//$_GET['_url'] = '/contact/send';
//$_SERVER['REQUEST_METHOD'] = 'POST';

try {

	define('APP_PATH', realpath('..') . '/');

	/**
	 * Read the configuration
	 */
//	$config = new Config(APP_PATH . 'app/config/config.php');
    require APP_PATH.'app/config/config.php';
    $config = new Config($settings);

	/**
	 * Auto-loader configuration
	 */
	require APP_PATH . 'app/config/loader.php';

	/**
	 * Load application services
	 */
	require APP_PATH . 'app/config/services.php';

	$application = new Application($di);

	echo $application->handle()->getContent();

} catch (Exception $e){
	echo $e->getMessage();
}
