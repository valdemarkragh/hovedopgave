<?php

include '../../classes/ImageUpload.class.php';
include '../../classes/Ship.class.php';

if(!empty($_POST['title'] && $_POST['price'] && $_FILES['image']['name'] && $_POST['details'])) {
    
    $fileUpload = new ImageUpload();
    $upload = $fileUpload->startUpload();

    if($upload === true) {
        $title = filter_var($_POST['title'], FILTER_SANITIZE_STRING);
        $details = filter_var($_POST['details'], FILTER_SANITIZE_STRING);
        $price = filter_var($_POST['price'], FILTER_VALIDATE_INT);
        $image = $_FILES['image']['name'];

        $add = new Ship($title, $details, $price, $image);

        echo $add->addShip();
    } else {
        echo $upload;
    }
    
}