<?php

namespace App\Controllers;

//Miniframework
use MF\Controller\Action;


class IndexController extends Action{

    public function index(){
        $this->render('index', 'layout1');
    }

    public function registro_marcas(){

        $this->render('registro_marcas', 'layout2');
    }

    public function registro_patentes(){

        $this->render('registro_patentes', 'layout2');
    }

    public function direito_autoral(){

        $this->render('direito_autoral', 'layout2');
    }

    public function juridicos(){

        $this->render('juridicos', 'layout2');
    }
    
}

?>