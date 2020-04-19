<?php

include '../../classes/Arrangement.class.php';

if(isset($_POST['id'])) {
    $id = $_POST['id'];

    $arrangement = new Arrangement();

    $del = $arrangement->deleteArrangement($id);

    if($del) {
        echo 'deleted';
    }
}