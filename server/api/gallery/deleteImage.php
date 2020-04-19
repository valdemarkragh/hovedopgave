<?php

include '../../classes/Gallery.class.php';

if(isset($_POST['id'])) {
    $id = $_POST['id'];

    $image = new Gallery();

    $del = $image->deleteImage($id);

    if($del) {
        echo 'deleted';
    }
}