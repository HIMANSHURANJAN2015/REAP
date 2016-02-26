<?php
session_start();
/*if(isset($_SESSION["email"]))
{
	$eval_email = $_SESSION["email"];
}
else
{
	die("Error : Evaluator not identified");
}*/

if (!$conn = mysql_connect("localhost", "root", "paswrd")) {
    die('Error : Could not connect to database, Database may not exist or you do not have access to it');
}

if (!$db = mysql_select_db('REAP')) {
    die ('Error : Could not find the database');
}

if(!$result = mysql_query("SELECT bundle_id from completed where eval_email = 'kumaradhara@gmail.com';"))
{
	die("Error : Could not query the database");
}

$bundle_id = array();
while($row = mysql_fetch_row($result))
{
	$bundle_id[] = $row[0];
}
if(sizeof($row) == 0)	
{
	die("Error : No matching information found");
}

$result = json_encode($bundle_id);
echo $result;

?>