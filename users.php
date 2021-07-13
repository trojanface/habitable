<?php


function updateUser(string $username, string $passcode, string $email, string $firstname, string $lastname, string $api) {
    $conn = new mysqli(env('servername'), env('username'), env('password'), env('dbname'));
   $sql = "INSERT INTO 
    Users (username, passcode, email, firstname, lastname, apikey) 
    VALUES ('$username', '$passcode', '$email', '$firstname', '$lastname',  '$api')";
    if ($conn->query($sql) === TRUE) {
        echo "Users updated successfully";
      } else {
        echo "Error updating table: " . $conn->error;
      }
}


?>