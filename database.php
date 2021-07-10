<?php

echo "DB Username ";
$username = chop(fgets(STDIN));
echo "DB Password ";
$password = chop(fgets(STDIN));

$dbname = "habitable";
$servername="localhost";

echo "Welcome $username connecting to $dbname. \n"; 

//Create COnnection
$conn = new mysqli($servername, $username, $password, $dbname);
//check Connection
if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

?>