<?php
session_start();
extract($_POST);
$type = $_POST['role'];
$email = $_POST['inputEmail'];
$password = $_POST['inputPassword'];
#var_dump($_POST);

if (!$conn = mysql_connect("localhost", "root", "paswrd")) {
    die('Error : Could not connect to database, Database may not exist or you do not have access to it');
}

if (!$db = mysql_select_db('REAP')) {
    die ('Error : Could not select the database');
}

if($type == "Evaluator")
{
	if(!$result = mysql_query("SELECT password,eval_first_name,eval_last_name from evaluator where eval_email = '$email';"))
	{
		die("Error : Could not query the database");
	}
}
elseif ($type == "Student") 
{
	if(!$result = mysql_query("SELECT password from student where stud_email = '$email';"))
	{
		die("Error : Could not query the database");
	}	
}
elseif ($type == "Admin") 
{
	if(!$result = mysql_query("SELECT password from admin where admin_email = '$email';"))
	{
		die("Error : Could not query the database");
	}
}
$row = mysql_fetch_row($result);

if($row[0] == $password)
{
	$_SESSION["name"] = $row[1] . " " . $row[2];
	if($type == "Evaluator")
	{
		header("Location:evaluatorDashboard.php");
	}
	elseif($type == "Student")
	{
		header("Location:studentDashboard.php");
	}
	elseif($type == "Admin")
	{
		header("Location:adminDashboard.php");
	}
  	
}
else
{
	die("Error : The email address and password do not match, please try again.  In case you forgot your
		password click on Forgot Password to reset your password");
}

?>
