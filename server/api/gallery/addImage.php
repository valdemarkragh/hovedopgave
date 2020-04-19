<?php

include '../../classes/ImageUpload.class.php';
include '../../classes/Gallery.class.php';

if(!empty($_FILES['image']['name'])) {
    
    $fileUpload = new ImageUpload();
    $upload = $fileUpload->startUpload();

    if($upload === true) {
        $image = $_FILES['image']['name'];
        $caption = empty($_POST['caption']) ? '' : $_POST['caption'];

        $add = new Gallery($image, $caption);

        echo $add->addImage();
    } else {
        echo $upload;
    }
    
}