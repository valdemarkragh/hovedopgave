<?php

include '../../classes/ImageUpload.class.php';
include '../../classes/Arrangement.class.php';

if(isset($_POST['id'])) {
    $id = $_POST['id'];
    $title = filter_var($_POST['title'], FILTER_SANITIZE_STRING);
    $details = filter_var($_POST['details'], FILTER_SANITIZE_STRING);
    $image = filter_var($_POST['defimage'], FILTER_SANITIZE_STRING);
    $ships = empty($_POST['ships']) ? null : $_POST['ships'];

    if(!empty($_FILES['image']['name'])) {
        $file = $_FILES['image'];
        $fileUpload = new ImageUpload();
        $upload = $fileUpload->startUpload();

        if($upload === true) {
            $arrangement = new Arrangement($title, $details, $image);

            $edit = $arrangement->editArrangement($id);
            $arrangement->deleteArrangementOnShips($id);

            if($edit) {
                if(!empty($ships)) {
                    foreach($ships as $shipId) {
                        $arrangement->joinArrangementOnShips($shipId, $id);
                    }
                } 
                
                echo json_encode(array('message' => 'Opdatering fuldført!'));
            }
        } else {
            echo $upload;
        }
    } else {
        $arrangement = new Arrangement($title, $details, $image);

        $edit = $arrangement->editArrangement($id);
        $arrangement->deleteArrangementOnShips($id);

        if($edit) {
            if(!empty($ships)) {
                foreach($ships as $shipId) {
                    $arrangement->joinArrangementOnShips($shipId, $id);
                }
            } 
            
            echo json_encode(array('message' => 'Opdatering fuldført!'));
        } else {
            echo json_encode(array('message' => 'Something went wrong!'));
        }
    }
}