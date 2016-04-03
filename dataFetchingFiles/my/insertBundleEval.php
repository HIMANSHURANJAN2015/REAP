<?php
include("connection.php");
extract($_GET);
$query = $_GET['query'];
$result = mysql_query("insert into bundle_eval values $query");
if(!$result){
	die("Error : FAiled".mysql_error());
}