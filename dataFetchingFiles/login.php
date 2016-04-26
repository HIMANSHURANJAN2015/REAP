<?php
session_start();
include("connection.php");
extract($_POST);
$type = $_POST['role'];
$email = $_POST['inputEmail'];
$password = $_POST['inputPassword'];
#var_dump($_POST);

if($type == "Evaluator")
{
	if(!$result = mysql_query("SELECT password,eval_first_name,eval_last_name from evaluator where eval_email = '$email';"))
	{
		die("Error : Could not query the database");
	}
}
elseif ($type == "Student") 
{
	if(!$result = mysql_query("SELECT password, USN from student where stud_email = '$email';"))
	{
		die("Error : Could not query the database");
	}	
}
elseif ($type == "Admin") 
{
	if(!$result = mysql_query("SELECT password,admin_first_name,admin_last_name from admin where admin_email = '$email';"))
	{
		die("Error : Could not query the database");
	}
}
$row = mysql_fetch_row($result);

if($row[0] == $password)
{
	if($type == "Evaluator")
	{
		$_SESSION["name"] = $row[1] . " " . $row[2];
		$_SESSION["email"] = $email;
		header("Location:http://localhost/REAP/evaluator/evaluatorDashboard.php");
	}
	elseif($type == "Student")
	{
		$_SESSION["USN"] = $row[1];
		header("Location:http://localhost/REAP/student/studentDashboard.php");
	}
	elseif($type == "Admin")
	{
		$_SESSION["name"] = $row[1] . " " . $row[2];
		$_SESSION["email"] = $email;
		header("Location:http://localhost/REAP/admin/adminDashboard.php");
	}
  	
}
else
{	
	header("Location:http://localhost/REAP/login.html");
}

?>
