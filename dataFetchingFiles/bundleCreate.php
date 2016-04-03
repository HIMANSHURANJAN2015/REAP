<?php
extract($_GET);
$sub_code = $_GET['sub_code'];
$type= $_GET['examtype'];
include("connection.php");
$result1 = mysql_fetch_assoc(mysql_query("select qp_id from question_paper where examtype='$examtype' and sub_code='$sub_code';"));
if(!$result1)
{
 die("Error : Could not find a question paper related to given subject Code");	
}
$final_result = array();
$qpid = $result1['qp_id'];
$final_result["qp_id"] = $result1['qp_id'];
if(!$result = mysql_query("insert into bundle (qp_id) values('$qpid') ")) 
{
	die("Error : Could not insert the data");
}
$final_result["bundle_id"] = mysql_insert_id();
$final_result = json_encode($final_result);
echo $final_result;
