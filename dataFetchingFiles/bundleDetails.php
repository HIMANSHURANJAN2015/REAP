<?php
include('connection.php');
extract($_GET);
$subCode = $_GET['subCode'];
$type= $_GET['type'];
$result1 = mysql_query("select bundle_id from bundle where qp_id in (select qp_id from question_paper where examtype = '$type' and sub_code='$subCode')");
if(!$result1)
{
  die("Error : Could not fetch the data");
}	
$bundleIds = array();
$bundleEvals = array();
$bundleStuds = array();
while($row=mysql_fetch_assoc($result1))
{
	$id = $row['bundle_id'];
	$bundleIds[]= $id;
	$result2 = mysql_query("select eval_email from bundle_eval where bundle_id='$id';");
	if(mysql_num_rows($result2)==0){
		$bundleEvals[]="NO Evaluator";
	} else {
		$eval = '';
		while($row = mysql_fetch_assoc($result2))
		{
		  if($eval == '')
		  	$eval=$row['eval_email'];
		  else
 		   $eval=$eval." & ".$row['eval_email'];	
		}	
		$bundleEvals[]=$eval;
	}
	$result3= mysql_query("select count(*) as count from bundle_stud where bundle_id='$id'");
	if(!$result3){
		die("Error : Could not count the data");
	}
	$bundleStuds[]=mysql_fetch_assoc($result3)['count'];

}
$bundleDetails = array("bundle_id"=>$bundleIds,"eval_email"=>$bundleEvals,"numStuds"=>$bundleStuds);
echo json_encode($bundleDetails);
//echo json_encode($bundleEvals);
//echo json_encode($bundleIds);
//echo json_encode($bundleStuds);