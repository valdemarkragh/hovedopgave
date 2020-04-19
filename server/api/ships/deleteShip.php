<?php

include '../../classes/Ship.class.php';

if(isset($_POST['id'])) {
    $id = $_POST['id'];

    $ship = new Ship();

    $del = $ship->deleteShip($id);

    if($del) {
        echo 'deleted';
    }
}