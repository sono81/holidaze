<?php
    header('Access-Control-Allow-Origin: *'); 
    $enquiriesList = file_get_contents('c:/xampp/htdocs/holidaze/public/api/enquiries.json');
    header('Content-Type: application/json');
    echo ($enquiriesList);
?>