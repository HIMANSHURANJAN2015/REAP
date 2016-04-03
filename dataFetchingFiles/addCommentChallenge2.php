<?php
include("connection.php");

extract($_GET);
$comments = $_GET["comments"];
$imageId = $_GET["imageId"];
$evalEmail = $_GET["evalEmail"];
//echo("$comments,$imageId,$evalEmail");

if(!$result = mysql_query("INSERT INTO `REAP`.`challenge` (`image_id`, `comments`, `eval_email`) VALUES ('$imageId', '$comments', '$evalEmail');"))
{
	die("HAHAHA ! Please try again after sometime");
}
else
	echo("You have challenged the evaluator, good for you !")
?>
