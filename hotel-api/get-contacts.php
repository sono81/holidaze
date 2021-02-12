<?php
    header('Access-Control-Allow-Origin: *'); 
    $contactList = file_get_contents('c:/xampp/htdocs/holidaze/public/api/contact.json');
    header('Content-Type: application/json');
    echo ($contactList);
?>