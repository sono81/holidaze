<?php
    header('Access-Control-Allow-Origin: *'); 
    $contactList = file_get_contents('http:localhost:80/holidaze/public/api/contact.json');
    header('Content-Type: application/json');
    echo ($contactList);
?>