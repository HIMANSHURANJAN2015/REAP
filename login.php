<?php
//extract($_POST);
echo(1);
$type = $_POST['role'];
$email = $_POST['inputEmail'];
$password = $_POST['inputPassword'];
var_dump($_POST);
echo($type);
echo($email);
echo($password);
if($email=='evaluator@pesit.com' && $password=='e')
{
  header("Location:evaluatorDashboard.php");
 echo(3);
}
echo(2);

?>
