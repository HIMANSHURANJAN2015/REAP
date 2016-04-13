<?php
extract($_GET);
$image_id = $_GET["image_id"];
$eval_email = $_GET["eval_email"];
include("connection.php");
$queryc = "update challenge set status='REJECTED' where image_id=$image_id and eval_email='$eval_email' ;";
$r = mysql_query($queryc);
if(!$r) {
	die("Error : Could not update challenge ".$query);
}
else {
	$flag = true;
	echo "Thank You !! This challenge has been successfully declined"; 
}
?>
