<?php
// for JSON w php
$_POST = json_decode(file_get_contents('php://input'), true);
echo var_dump($_POST);
// Takes client data sent to the server and shows us again on client side. For debugging purposes