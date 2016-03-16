<?php
include("connection.php");

extract($_GET);
$comments = $_GET["comments"];
$imageId = $_GET["imageId"];
$evalEmail = $_GET["evalEmail"];

if(!$result = mysql_query("INSERT INTO challenge values ('$comments','$imageId','$evalEmail');"))
{
	echo("HAHAHA ! Please try again after sometime");
}
else
	echo("You have challenged the evaluator, good for you !")
?>
