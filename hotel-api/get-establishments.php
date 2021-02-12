<?php
header('Access-Control-Allow-Origin: *'); 
$establishmentsList = file_get_contents('http:localhost:80/holidaze/public/api/establishments.json');


header('Content-Type: application/json');
echo ($establishmentsList);

?>