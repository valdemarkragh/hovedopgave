<?php
header("Access-Control-Allow-Origin: *");
include '../../classes/Gallery.class.php';

$images = new Gallery();
echo $images->fetchImages();