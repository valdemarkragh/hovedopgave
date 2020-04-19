<?php

include '../../classes/ImageUpload.class.php';
include '../../classes/Ship.class.php';

if(isset($_POST['id'])) {
    $id = $_POST['id'];
    $title = filter_var($_POST['title'], FILTER_SANITIZE_STRING);
    $details = filter_var($_POST['details'], FILTER_SANITIZE_STRING);
    $price = filter_var($_POST['price'], FILTER_VALIDATE_INT);
    $image = filter_var($_POST['defimage'], FILTER_SANITIZE_STRING);

    if(!empty($_FILES['image']['name'])) {
        $file = $_FILES['image'];
        $fileUpload = new ImageUpload();
        $upload = $fileUpload->startUpload();

        if($upload === true) {
            $ship = new Ship($title, $details, $price, $image);

            $edit = $ship->editShip($id);

            if($edit) {
                echo json_encode(array('message' => 'Opdatering fuldført!'));
            }
        } else {
            echo $upload;
        }
    } else {
        $ship = new Ship($title, $details, $price, $image);

        $edit = $ship->editShip($id);

        if($edit) {
            echo json_encode(array('message' => 'Opdatering fuldført!'));
        } else {
            echo json_encode(array('message' => 'Something went wrong!'));
        }
    }
}