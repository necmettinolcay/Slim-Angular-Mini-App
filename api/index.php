<?php
require '../../vendor/autoload.php';

$c = new \Slim\Container();
$c['foundHandler'] = function() {
    return new \Slim\Handlers\Strategies\RequestResponseArgs();
};

$app = new \Slim\App($c);
$app->get('/users', 'getUsers');
$app->get('/users/{email}', function ($request, $response, $email) {
   $sql = "SELECT * FROM customer WHERE email=:email"; 
   try {
     $db = getConnection();
     $stmt = $db->prepare($sql);
     $stmt->bindParam("email", $email);
     $stmt->execute();
     $foo = $stmt->fetchObject();
     $db = null;
     echo json_encode($foo);
   }
   catch(PDOException $e) {
     echo '{"error":{"text":'. $e->getMessage() .'}}';
   } 
});
$app->post('/users', function ($request, $response){
 });
$app->run();

function getUsers() {
  $sql = "select * from customer";
  try{
    $db = getConnection();
    $stmt = $db->query($sql);
    $foo = $stmt->fetchAll(PDO::FETCH_OBJ);
    $db = null;
    echo json_encode($foo);
  } 
  catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
}

function getUser($id) {
  $sql = "SELECT * FROM customer WHERE id=:id"; 
  try {
    $db = getConnection();
    $stmt = $db->prepare($sql);
    $stmt->bindParam("id", $id);
    $stmt->execute();
    $foo = $stmt->fetchObject();
    $db = null;
    echo json_encode($foo);
  }
  catch(PDOException $e) {
    echo '{"error":{"text":'. $e->getMessage() .'}}';
  }
    
}

function getConnection() {
    $dbhost="localhost";
    $dbuser="";
    $dbpass="";
    $dbname="foo";
    $dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
    $dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $dbh;
}
