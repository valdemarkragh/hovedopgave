<?php
header("Access-Control-Allow-Origin: *");
include '../../classes/Arrangement.class.php';

if(isset($_GET['id'])) {
    $id = $_GET['id'];

    $singleArrangement = new Arrangement();
    echo $singleArrangement->fetchSingleArrangement($id);

} else {
    echo json_encode(array('message' => 'id is required'));
}