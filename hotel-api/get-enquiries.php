<?php
    header('Access-Control-Allow-Origin: *'); 
    $enquiriesList = file_get_contents('http:localhost:80/holidaze/public/api/enquiries.json');
    header('Content-Type: application/json');
    echo ($enquiriesList);
?>