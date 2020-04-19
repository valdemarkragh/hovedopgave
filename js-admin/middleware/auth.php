<?php
session_start(); 
$path = 'http://vkragh.one/js-admin';

if(!isset($_SESSION['userid'])) {
    header("location: $path/index.php");
} 