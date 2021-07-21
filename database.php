<?php
// Include the main Propel script
require_once './vendor/propel/runtime/lib/Propel.php';

// Initialize Propel with the runtime configuration
Propel::init("./build/conf/habitable-conf.php");

// Add the generated 'classes' directory to the include path
set_include_path("./build/classes" . PATH_SEPARATOR . get_include_path());

include "autoload.php";
include "users.php";
echo(date('d-m-y', strtotime('11-12-21')));
$user = new Users();
$user->setUsername('testUser');
$user->setPassword('test');
$user->setEmail('test@test.com');
$user->setFirstname('Test');
$user->setLastname('Testman');
$user->setDob(date('d-m-y', strtotime('11-12-21')));
$user->setDatejoined(date('d-m-y', strtotime('11-12-21')));
$user->setLastlogin(date('d-m-y', strtotime('11-12-21')));
$user->setApikey('apiyay');
$user->save();

echo $user->getUsername();



?>