<?php

namespace App;

use MF\Init\Bootstrap;

class Route extends Bootstrap{

    protected function initRoutes(){

        $routes['home'] = array(
            'route' => '/',
            'controller' => 'IndexController',
            'action' => 'index'
        );

        $routes['registro_marcas'] = array(
            'route' => '/registro_marcas',
            'controller' => 'IndexController',
            'action' => 'registro_marcas'
        );

        $routes['registro_patentes'] = array(
            'route' => '/registro_patentes',
            'controller' => 'IndexController',
            'action' => 'registro_patentes'
        );

        $routes['direito_autoral'] = array(
            'route' => '/direito_autoral',
            'controller' => 'IndexController',
            'action' => 'direito_autoral'
        );

        $routes['juridicos'] = array(
            'route' => '/juridicos',
            'controller' => 'IndexController',
            'action' => 'juridicos'
        );

        $routes['enviemail'] = array(
            'route' => '/envia_email',
            'controller' => 'EmailController',
            'action' => 'enviaEmail'
        );

        $this->setRoutes($routes);
    }
}

?>