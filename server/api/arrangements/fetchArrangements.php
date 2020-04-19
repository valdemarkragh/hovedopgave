<?php
header("Access-Control-Allow-Origin: *");
include '../../classes/Arrangement.class.php';

if(isset($_GET['shipId'])) {
    $id = $_GET['shipId'];

    $arrangements = new Arrangement();
    echo $arrangements->fetchArrangementsOnShipId($id);
} else {
    $arrangements = new Arrangement();
    echo $arrangements->fetchArrangements();
}

