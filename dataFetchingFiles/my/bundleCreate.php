<?php
extract($_GET);
$subCode = $_GET['subCode'];
$type= $_GET['type'];
include("connection.php");
$result1 = mysql_fetch_assoc(mysql_query("select qp_id from question_paper where examtype='$type' and sub_code='$subCode'"));
if(!$result1)
{
 die("Error : Could not find a question paper related to given subject Code");	
}
$qpid = $result1['qp_id'];
if(!$result = mysql_query("insert into bundle (qp_id) values('$qpid') ")) 
{
	die("Error : Could not insert the data");
}
echo (mysql_insert_id());
