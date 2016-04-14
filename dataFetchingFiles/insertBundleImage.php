<?php
//Fetches al the images ids which wil be inserted into bundle_stud table
//run like this and check http://localhost/REAP/dataFetchingFiles/insertBundleImage.php?bundleId=8&type=t1&subCode=12CS401&usns=[%221PI12CS028%22,%221PI12CS102%22]     ""=> converted to %22 :D :D
include("connection.php");
extract($_GET);
$type = $_GET['type'];
$subCode = $_GET['subCode'];
$bundleId = $_GET['bundleId'];
//$usns = $_GET['usns'];
$usns = isset($_REQUEST['usns']) ? json_decode($_REQUEST['usns']) : array();
/*
echo $type;
echo $subCode;
echo $usns;
echo "hello";
foreach ($usns as $usn) {
	echo($usn);
}
echo sizeof($usns);
*/

//extracting question id's      not needed
/*
$qIds = array();
$result = mysql_query("select q.question_id from question q inner join question_paper qp on qp.qp_id=q.qp_id and qp.sub_code='$subCode' and qp.examtype = '$type'");
while($row = mysql_fetch_assoc($result))
{
	$qIds[] = $row['question_id'];		
}
//echo json_encode($qIds);
*/

$imageIds = array();
foreach($usns as $usn)
{
  //$usnImagesIds = array();
  $result2 = mysql_query("select i.image_id from image i inner join question q on q.question_id=i.ques_id and i.USN='$usn' inner join question_paper qp on qp.qp_id=q.qp_id and qp.sub_code='$subCode' and qp.examtype='$type'");
  while($row2= mysql_fetch_assoc($result2)){
  	$imagesIds[] = $row2['image_id'];
  } 	
}
//echo (json_encode($imagesIds)." ".$type." ".$subCode." ".$usns." ".$bundleId);

$query="";
foreach($imagesIds as $imagesId)
{
 $query.= "($bundleId , '$imagesId' ),";
}
$query = substr($query, 0, -1);
//echo ($query);

if(!$result = mysql_query("insert into bundle_image values $query;"))
{
	die("Error : Failed to assign images".mysql_error().$query);
}
else
{
	echo "Successfully assigned images to bundle";
}
?>
