<?php
extract($_GET);
$qp_id = $_GET["qp_id"];
$qno = $_GET["qno"];

if (!$conn = mysql_connect("localhost", "root", "himanshu")) {
    die('Error : Could not connect to database, Database may not exist or you do not have access to it');
}

if (!$db = mysql_select_db('REAP')) {
    die ('Error : Could not select the database');
}

if(!$result = mysql_query("SELECT question_text,expected_answer,max_marks from question where qp_id = '$qp_id' and question_num = '$qno';"))
{
	die("Error : Could not query the database");
}

$row = mysql_fetch_assoc($result);

if(sizeof($row) == 0)	
{
	die("Error : No matching information found");
}

$result = json_encode($row);
echo $result;

?>
