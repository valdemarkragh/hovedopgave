<?php
include '../../classes/User.class.php';

if(!empty($_POST['username'] || $_POST['password'])) {
    $userName = $_POST['username'];
    $userPassword = $_POST['password'];

    $user = new User($userName, $userPassword);
    $user = $user->login();

    foreach($user as $info) {
        if($info['status'] === 'success') {
            $data = array('status' => 'success', 'id' => $info['id'], 'user' => $info['name']);
            echo json_encode($data);
        } else {
            $data = array('status' => 'error', 'message' => $info['message']);
            echo json_encode($data);
        }
    }
} 