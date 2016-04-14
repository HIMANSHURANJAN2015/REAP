<?php
include("connection.php");
extract($_GET);
$type=$_GET['examtype'];
$subCode = $_GET['subCode'];
$result = mysql_query("select USN from takes where sub_code = '$subCode' and USN not in (select bs.USN from bundle_stud bs inner join bundle b on b.bundle_id=bs.bundle_id inner join question_paper q on q.qp_id=b.qp_id and q.sub_code='$subCode' and q.examtype='$examtype'  );");
$usns = array();
while($row = mysql_fetch_assoc($result))
{
 $usns[] = $row['USN'];	
}
//echo (json_encode($usns));	
$result1 = mysql_query("select count(*) as count from takes where sub_code='$subCode'");
$row = mysql_fetch_assoc($result1);
$totalStudent = $row['count'];
$unassignedStudent = sizeof($usns);
//echo $countStudent;
//echo $unassignedStudent;

$finalResult = array("UnassignedUsns"=>$usns,"totalStudent"=>$totalStudent);
echo json_encode($finalResult);
