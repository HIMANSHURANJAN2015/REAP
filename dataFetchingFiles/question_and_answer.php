<?php
extract($_GET);
$qp_id = $_GET["qp_id"];
$qno = $_GET["qno"];

include("connection.php");

if(!$result = mysql_query("SELECT question_id,question_text,expected_answer,max_marks from question where qp_id = '$qp_id' and question_num = '$qno';"))
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
