<?php

include("connection.php");
extract($_GET);
$qp_id = $_GET['qp_id'];

if(!$result = mysql_query("select bundle_id from bundle where qp_id='$qp_id';"))
{
 die("Error : Could not find a question paper related to given subject Code");	
}

$bundle_id = array();
while($row = mysql_fetch_row($result))
{
	$bundle_id[] = $row[0];
}

if(!$result = mysql_query("select sub_code from question_paper where qp_id='$qp_id';"))
{
 die("Error");	
}

if(!$row = mysql_fetch_row($result))
{
	die("Error : Could not fetch data");
}

$sub_code = $row[0];

$bundle_details["bundle_id"] = $bundle_id;
$bundle_details["sub_code"] = $sub_code;

$bundle_details = json_encode($bundle_details);

echo $bundle_details;