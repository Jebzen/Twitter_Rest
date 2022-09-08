<?php
header("Content-Type:application/json");
include("db.php");

$response = "Empty response";

if($_GET){
    echo json_encode($_GET);
    return;
}

if($_POST){
    echo json_encode($_POST);
    return;
}

echo json_encode($response);