<?php
include "autoload.php";
include "users.php";

updateUser("JDoe", "test", "jane@doe.com.au", "Jane", "Doe", "14");
//Create COnnection
$conn = new mysqli(env('servername'), env('username'), env('password'), env('dbname'));
//check Connection
if ($conn->connect_error) {
    die("connection failed: " . $conn->connect_error);
}
echo "Connected successfully. \n";

$val =  $conn->query("select 1 from `Users` LIMIT 1");

if($val !== FALSE)
{
   echo "Users exists \n";
}
else
{
    echo "Users does not exist. Creating Table... \n";
    $sql = "CREATE TABLE Users (
        userid INT(6) AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(30) NOT NULL,
        passcode VARCHAR(30) NOT NULL,
        email VARCHAR(50),
        firstname VARCHAR(30) NOT NULL,
        lastname VARCHAR(30) NOT NULL,
        apikey VARCHAR(50) NOT NULL
        )";
        
        if ($conn->query($sql) === TRUE) {
          echo "Users created successfully";
        } else {
          echo "Error creating table: " . $conn->error;
        }
}


?>