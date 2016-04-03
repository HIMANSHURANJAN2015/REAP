<?php
extract($_GET);
$USN = $_GET["USN"];

//echo $image_id,$eval_email,$marks,$comments;
include("connection.php");

if(!$result = mysql_query("SELECT sub_code FROM takes WHERE USN = '$USN';"))
{
	die("Error : Could not save the data");
}

$subjects = array();
while($row = mysql_fetch_row($result))
{
	$subjects[] = $row[0];
}

$subjects = json_encode($subjects);

echo $subjects;
?>
