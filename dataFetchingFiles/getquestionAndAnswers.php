<?php
extract($_GET);
$sub_code = $_GET["sub_code"];
$examtype = $_GET["examtype"];
$USN = $_GET["USN"];
//echo $image_id,$eval_email,$marks,$comments;
include("connection.php");

$temp = array();
$qp_id = mysql_fetch_assoc(mysql_query("SELECT qp_id from question_paper WHERE sub_code ='$sub_code' AND examtype = '$examtype'"));
$query = "SELECT DISTINCT a.URL,a.image_id,b.marks,b.comments,c.question_num,c.question_text,c.expected_answer,e.eval_first_name,e.eval_last_name, e.eval_email from image a, marks_comments b, question c,question_paper d,evaluator e WHERE 
			(c.qp_id = ".$qp_id['qp_id'].")
			AND (a.image_id = b.image_id) 
			AND (a.USN = '$USN')
			AND (a.evaluation_done = '0')
			AND (a.ques_id = c.question_id)
			AND (e.eval_email = b.eval_email)";
$result = mysql_query($query);
if($result)
{	
	while($row = mysql_fetch_assoc($result))
	{
		$temp[] = $row;
	}	
}

$temp = json_encode($temp);
echo $temp;
?>
