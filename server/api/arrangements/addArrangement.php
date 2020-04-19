<?php

include '../../classes/ImageUpload.class.php';
include '../../classes/Arrangement.class.php';

if(!empty($_POST['title'] && $_FILES['image']['name'] && $_POST['details'])) {
    
    $fileUpload = new ImageUpload();
    $upload = $fileUpload->startUpload();

    if($upload === true) {
        $title = filter_var($_POST['title'], FILTER_SANITIZE_STRING);
        $details = filter_var($_POST['details'], FILTER_SANITIZE_STRING);
        $image = $_FILES['image']['name'];
        $ships = empty($_POST['ships']) ? null : $_POST['ships'];

        $add = new Arrangement($title, $details, $image);

        $values = $add->addArrangement();

        $values_decoded = json_decode($values, true);

        $arrangementId = $values_decoded['arrangementId'];

        if(!empty($ships)) {
            foreach($ships as $shipId) {
                $add->joinArrangementOnShips($shipId, $arrangementId);
            }
        }

        echo $values;
        
    } else {
        echo $upload;
    }
    
}