<?php
function updateUser(mysqli $conn, string $username, string $passcode, string $email, string $firstname, string $lastname, int $dob, int $lastlogin, string $api) {
    $sql = "INSERT INTO 
    Users (username, passcode, email, firstname, lastname, dob, lastlogin, apikey) 
    VALUES ('Test', 'test123', 'Testing@tesing.com', 'Jane', 'Doe', 12/12/12, 12/12/12, '12')";
    if ($conn->query($sql) === TRUE) {
        echo "Users updated successfully";
      } else {
        echo "Error updating table: " . $conn->error;
      }
}
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
        dob DATE NOT NULL,
        datejoined TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        lastlogin TIMESTAMP,
        apikey VARCHAR(50) NOT NULL
        )";
        
        if ($conn->query($sql) === TRUE) {
          echo "Users created successfully";
        } else {
          echo "Error creating table: " . $conn->error;
        }
}


?>