<?php
// Include the main Propel script
require_once './vendor/propel/runtime/lib/Propel.php';

// Initialize Propel with the runtime configuration
Propel::init("./build/conf/habitable-conf.php");

// Add the generated 'classes' directory to the include path
set_include_path("./build/classes" . PATH_SEPARATOR . get_include_path());

include "autoload.php";

$postObj=json_decode(file_get_contents("php://input"));
//some code
// error_log('your jason is ' . json_encode($postObj) . ' and your name is ' . $postObj->{'username'});

// $STRING = implode(", ", $_REQUEST);
// error_log("\n your data is " . $STRING . "\n", 0);

// $data = json_decode($_POST['body']);
if("" != trim($postObj->{'username'})){
   
     $user = new Users();
     $user->setUsername( $postObj->{'username'});
     $user->setPassword( $postObj->{'password'});
     $user->setEmail( $postObj->{'email'});
     $user->setFirstname( $postObj->{'first_name'});
     $user->setLastname( $postObj->{'last_name'});
     $user->setDob(date('d-m-y', strtotime('11-12-21')));
     $user->setDatejoined(date('d-m-y', strtotime('11-12-21')));
     $user->setLastlogin(date('d-m-y', strtotime('11-12-21')));
     $user->setApikey('sefgsef');
     $user->save();
    
    echo $user->getUsername();
}   




?>