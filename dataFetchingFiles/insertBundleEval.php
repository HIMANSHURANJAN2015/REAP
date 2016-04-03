<?php
include("connection.php");
extract($_GET);
$query = $_GET['query'];
$result = mysql_query("insert into bundle_eval values $query");
if(!$result)
{
	die("Error : Could not assign the bundle to the selected evaluators");
}
else
{
	echo "1";
}
?>