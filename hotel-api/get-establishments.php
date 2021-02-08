<?php
header('Access-Control-Allow-Origin: *'); 
$establishmentsList = file_get_contents('c:/xampp/htdocs/holidaze/public/api/establishments.json');


header('Content-Type: application/json');
echo ($establishmentsList);

?>