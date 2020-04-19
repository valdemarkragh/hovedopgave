<?php
header("Access-Control-Allow-Origin: *");
include '../../classes/Ship.class.php';

if(isset($_GET['id'])) {
    $id = $_GET['id'];

    $singleShip = new Ship();
    echo $singleShip->fetchSingleShip($id);
}