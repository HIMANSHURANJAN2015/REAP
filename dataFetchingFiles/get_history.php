<?php
//session_start();
extract($_GET);
if(isset($_GET["eval_email"]))
{
	$eval_email = $_GET["eval_email"];
}
else
{
	echo "Error";
}

if (!$conn = mysql_connect("localhost", "root", "paswrd")) {
    die('Error : Could not connect to database, Database may not exist or you do not have access to it');
}

if (!$db = mysql_select_db('REAP')) {
    die ('Error : Could not find the database');
}

if(!$result = mysql_query("SELECT bundle_id from completed where eval_email = '$eval_email';"))
{
	die("Error : Could not query the database");
}

$bundle_id = array();
while($row = mysql_fetch_row($result))
{
	$bundle_id[] = $row[0];
}

$qp_id = array();
$final_result = array();
for($i = 0; $i < sizeof($bundle_id); $i++)
{
	if(!$result1 = mysql_query("SELECT qp_id from bundle where bundle_id = '$bundle_id[$i]';"))
	{
		die("Error : Could not fetch data");
	}

	$row = mysql_fetch_row($result1);
	$qp_id[] = $row[0];

	if(!$result2 = mysql_query("SELECT sub_code,examtype,test_date,test_time,max_marks from question_paper where qp_id = '$qp_id[$i]';"))
	{
		die("Error : Could not fetch data");
	}

	if(!$result3 = mysql_query("SELECT count(image_id) FROM completed WHERE bundle_id = '$bundle_id[$i]' and eval_email = '$eval_email';"))
	{
		die("Error : Could not fetch data");
	}

	if(!$result4 = mysql_query("SELECT count(image_id) FROM bundle_image WHERE bundle_id = '$bundle_id[$i]';"))
	{
		die("Error : Could not fetch data");
	}
	$row1 = mysql_fetch_row($result2);
	$row2 = mysql_fetch_row($result3);
	$row3 = mysql_fetch_row($result4);
	$row1[] = $row2[0];
	$row1[] = $row3[0];
	$final_result[] = $row1; 
}

$final_result = json_encode($final_result);
echo $final_result;

?>