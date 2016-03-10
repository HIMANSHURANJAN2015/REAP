<?php
//extract($_GET);
//$sub_code = $_GET["sub_code"];
//$exam_type = $_GET["exam_type"];
$sub_code = '12CS401';
$exam_type = 't1';
include("connection.php");
$result = mysql_query("SELECT DISTINCT a.question_num,a.question_text,a.expected_answer from question a,question_paper b where 
	(b.sub_code = '$sub_code')
	and (b.examtype = '$exam_type') 
	and (a.qp_id = b.qp_id)
	");

$temp = array();

if($result)
{
	while($row = mysql_fetch_assoc($result))
	{
		$temp[] = $row;
	}
}

echo json_encode($temp);
?>
