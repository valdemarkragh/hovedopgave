<?php
header("Access-Control-Allow-Origin: *");
include '../../classes/Ship.class.php';

$ships = new Ship();
echo $ships->fetchShips();