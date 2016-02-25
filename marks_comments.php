<?php
extract($_GET);
$image_id = $_GET["image_id"];
$eval_email = $_GET["eval_email"];
$marks = $_GET["marks"];
$comments = $_GET["comments"];

if (!$conn = mysql_connect("localhost", "root", "paswrd")) {
    die('Error : Could not connect to database, Database may not exist or you do not have access to it');
}

if (!$db = mysql_select_db('REAP')) {
    die ('Error : Could not select the database');
}

if(!$result = mysql_query("INSERT INTO marks_comments(image_id,eval_email,marks,comments) values ('$image_id','$eval_email','$marks','$comments');"))
{
	die("Error : Could not save the data");
}

else
	echo "Comments and marks saved";
?>
