<?php

include("connection.php");

extract($_GET);

$query = $_GET["query"];

if(!$result = mysql_query("insert into bundle_stud values $query;"))
{
	die("Error : Failed to assign students ...".mysql_error());
}
else
{
	echo "Successfully assigned students to bundle";
}
?>