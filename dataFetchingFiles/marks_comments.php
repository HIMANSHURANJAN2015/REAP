<?php
extract($_GET);
$image_id = $_GET["image_id"];
$eval_email = $_GET["eval_email"];
$marks = $_GET["marks"];
$comments = $_GET["comments"];
//echo $image_id,$eval_email,$marks,$comments;
include("connection.php");

if(!$result = mysql_query("INSERT INTO marks_comments(image_id,eval_email,marks,comments) values ('$image_id','$eval_email','$marks','$comments');"))
{
	die("Error : Could not save the data");
}

else
	echo "Comments and marks saved";
?>
