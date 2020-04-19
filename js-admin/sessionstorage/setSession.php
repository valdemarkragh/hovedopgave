<?php
session_start();

if(isset($_POST['userid']) && isset($_POST['username'])) {
    $_SESSION['userid'] = $_POST['userid'];
    $_SESSION['username'] = $_POST['username'];

    echo 'success';
}

