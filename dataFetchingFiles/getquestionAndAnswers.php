<?php
extract($_GET);
$sub_code = $_GET["sub_code"];
$examtype = $_GET["examtype"];
$USN = $_GET["USN"];
//echo $image_id,$eval_email,$marks,$comments;
include("connection.php");

if(!$result = mysql_query("SELECT qp_id FROM question_paper WHERE sub_code = '$sub_code' and 
	examtype = '$examtype';"))
{
	die("Error : Could not save the data");
}

$row = mysql_fetch_row($result);
$qp_id = $row[0];
$final_result = array();

if(!$result1 = mysql_query("SELECT question_id,question_num,question_text,expected_answer FROM question WHERE qp_id = '$qp_id';"))
{
	die("Error : Could not save the data");
}

$temp = array();
while($row1 = mysql_fetch_row($result1))
{
	$temp[] = $row1[0];
	$temp[] = $row1[1];
	$temp[] = $row1[2];
	$temp[] = $row1[3];
	$final_result[] = $temp;
	$temp = array();
}

$final_result = json_encode($final_result);

$ques_id = array();
if(!$result2 = mysql_query("SELECT question_id FROM question WHERE qp_id = '$qp_id';"))
{
	die("Error : Could not save the data");
}

while($row2 = mysql_fetch_row($result2))
{
	$ques_id[] = $row2[0];
}

//echo json_encode($ques_id);
$image_id = array();
for($i = 0; $i < sizeof($ques_id); $i++)
{
	if(!$result2 = mysql_query("SELECT image_id FROM image WHERE ques_id = '$ques_id[$i]' and USN = '$USN';"))
	{
		die("Error : Could not save the data");
	}

	if($row2 = mysql_fetch_row($result2))
	{
		$image_id[$ques_id[$i]] = $row2[0];
	}
	else
	{
		$image_id[$ques_id[$i]] = "-1";
	}
	
}
//echo json_encode($image_id);
//echo $image_id[$ques_id[1]];
$marks_comments = array();
$found = array();
for($i = 0; $i < sizeof($ques_id); $i++)
{

	//if($image_id[$ques_id[$i]] == -1)
	//	continue;
	$q = $image_id[$ques_id[$i]];
	if($q == -1)
	{
		$temp[] = -1;
		$temp[] = -1;
		$temp[] = "NA";

		$marks_comments[] = $temp;
		continue;
	}
	if(!$result2 = mysql_query("SELECT image_id,marks,comments FROM marks_comments WHERE image_id = '$q' and eval_email='kumaradhara@gmail.com';"))
	{
		die("Error : Could not save the data");
	}
	$temp = array();
	while($row2 = mysql_fetch_row($result2))
	{
		$temp[] = $row2[0];
		$temp[] = $row2[1];
		$temp[] = $row2[2];
		//echo "12";
		$found[] = $ques_id[$i];
		$marks_comments[] = $temp;
		$temp = array();
	}

}
$imag_id = json_encode($image_id);
$ques_id = json_encode($ques_id);
$found = json_encode($found);
$marks_comments = json_encode($marks_comments);
$r = array();
$r[] = $final_result;
$r[] = $marks_comments;
$r[] = $found;
$r[] = $ques_id;
$r[] = $image_id;
$r = json_encode($r);
echo $r;
?>
