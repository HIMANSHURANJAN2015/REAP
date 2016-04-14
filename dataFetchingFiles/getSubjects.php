<?php
extract($_GET);
$USN = $_GET["USN"];

//echo $image_id,$eval_email,$marks,$comments;
include("connection.php");

if(!$result = mysql_query("SELECT DISTINCT a.sub_code,b.examtype FROM takes a,question_paper b WHERE 
	(USN = '$USN')
	AND (a.sub_code = b.sub_code);"))
{
	die();
}

$subjects = array();
while($row = mysql_fetch_row($result))
{
	$subjects[] = $row;
}

$subjects = json_encode($subjects);

echo $subjects;
?>
