<?php
extract($_GET);
$image_id = $_GET["image_id"];
//echo $image_id,$eval_email,$marks,$comments;
include("connection.php");
//echo "hello";
if(!$result = mysql_query("select comments from marks_comments where marks = -1 and image_id='$image_id';"))
{
	die("Error : Could not query database");
}
else { 
	 //echo "2";
 $row = mysql_fetch_assoc($result);
 echo $row['comments'];
}	
?>
