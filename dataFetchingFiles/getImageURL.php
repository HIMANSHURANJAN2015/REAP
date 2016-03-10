<?php
extract($_GET);
$bundle_id = $_GET["bundle_id"];
$qno = $_GET["qno"];
$qp_id = $_GET["qp_id"];
include("connection.php");
if(!$result = mysql_query("SELECT USN from bundle_stud where bundle_id = '$bundle_id';"))
{
	die("Error : 1 Could not query the database");
}

if(!$result1 = mysql_query("SELECT question_id from question where qp_id = '$qp_id' and question_num = '$qno';"))
{
	die("Error : 2 Could not query the database");
}

$USN = array();
$ques_id = array();
while($row = mysql_fetch_row($result))
{
	$USN[] = $row[0];
}

while($row1 = mysql_fetch_row($result1))
{
	$ques_id = $row1[0];
}

$missing = array();
$URL = array();
$final_result = array();
$found = array();
$image_id = array();
for($i = 0; $i < sizeof($USN); $i++)
{
	if(!$result2 = mysql_query("SELECT image_id,URL from image where ques_id = '$ques_id' and USN = '$USN[$i]';"))
	{
		die("Error : 3 Could not query the database");
	}
	$row2 = mysql_fetch_row($result2);
	if(!$row2)
	{
		$missing[] = $USN[$i];
	}
	else
	{
		$URL[] = $row2[1];
		$found[] = $USN[$i];
		$image_id[] = $row2[0];
	}
}
$final_result["URL"] = $URL;
$final_result["missing"] = $missing;
$final_result["USN"] = $USN;
$final_result["found"] = $found;
$final_result["image_id"] = $image_id;
$final_result = json_encode($final_result);
echo $final_result;
?>