<?php
extract($_GET);
$bundle_id = $_GET["bundle_id"];
$qno = $_GET["qno"];
$qp_id = $_GET["qp_id"];
$listType = 1;    //1- show yet to be evaluated  2- show evaluated ones
include("connection.php");

$bundleUSNs = array();  //list of allowed usns
$questionId = "";   
$missing = array();     // list of usns whose images for this answer is missing
$commentedImagesId = array();  //image ids
$completedImagesId = array();  //image ids
$URL = array();                // url   
$found = array();
$image_id = array();

//list of allowed usns 
if(!$usnQuery = mysql_query("SELECT USN from bundle_stud where bundle_id = '$bundle_id';"))
{
	die("Error : 1 Could not query the database");
}
while($row = mysql_fetch_row($usnQuery))
{
	$bundleUSNs[] = $row[0];
}
//fetching question id
if(!$questionIdQuery = mysql_query("SELECT question_id from question where qp_id = '$qp_id' and question_num = '$qno';"))
{
	die("Error : 2 Could not query the database");
}
while($row1 = mysql_fetch_row($questionIdQuery))
{
	$questionId = $row1[0];
}
for($i = 0; $i < sizeof($bundleUSNs); $i++)
{
	if(!$imageUrlQuery = mysql_query("SELECT image_id,URL from image where ques_id = '$questionId' and USN = '$bundleUSNs[$i]';"))
	{
		die("Error : 3 Could not query the database");
	}
	$row2 = mysql_fetch_row($imageUrlQuery);
	if(!$row2)
	{
		$missing[] = $bundleUSNs[$i];
	}
	else
	{
		$URL[] = $row2[1];
		$found[] = $bundleUSNs[$i];
		$image_id[] = $row2[0];
		if(!$commentedImageQuery = mysql_query("select count(*) as total from marks_comments where image_id=".$row2[0]." and marks = -1;"))
		{
		  die("Error : 3 Could not query the database");	
		}
		$commentedRow = mysql_fetch_assoc($commentedImageQuery);
		if($commentedRow['total'] > 0) {
			$commentedImagesId[] = $row2[0];
		}
		if(!$completedImageQuery = mysql_query("select count(*) as total from marks_comments where image_id=".$row2[0]." and marks != -1;"))
		{
		  die("Error : 3 Could not query the database");	
		}
		$completedRow = mysql_fetch_assoc($completedImageQuery);
		if($completedRow['total'] > 0) {
			$completedImagesId[] = $row2[0];
		}
	}
}
//print_r("hello");
//print_r($missing);
//print_r("commented");
//print_r($commentedImagesId);
//print_r($image_id);
//print_r($URL);
$displayImageUrl = array();
$displayImageId = array();
for($i=0; $i< sizeOf($image_id); $i++) {
	if(in_array($image_id[$i],$completedImagesId)) 
		continue;
	else {
		$displayImageId[] = $image_id[$i];
		$displayImageUrl[] = $URL[$i];
	}

}
//print_r("final");
//print_r($displayImageUrl);
//print_r($displayImageId);
$completedImagesDetails = array();
for($i = 0 ;$i<sizeof($completedImagesId); $i++){
	$details = array();
	$id = $completedImagesId[$i];
	//marks and comments 
    $result = mysql_query("select marks, comments from marks_comments where image_id = '$id';");
    $data = mysql_fetch_assoc($result);
    $marksc = $data['marks'];
    $commentsc = $data['comments'];
    //url
    $result = mysql_query("select URL from image where image_id = '$id';");
    $data = mysql_fetch_assoc($result);
    $urlc = $data['URL'];
    $details[] = $marksc;
    $details[] = $commentsc;
    $details[] = $urlc;
    $completedImagesDetails[$id] = $details; 
}

//Challenge part  
$evalEmail = 'kumaradhara@gmail.com';
$challengedImagesId = array();
if(!$result = mysql_query("select image_id from challenge where eval_email='$evalEmail' and status='PENDING';"))
{
  die("Error : 3 Could not query the database");	
}
while($row = mysql_fetch_assoc($result))
{
  $challengedImagesId[] = $row["image_id"]; 
} 

$challengedImagesDetails = array();
for($i = 0 ;$i<sizeof($challengedImagesId); $i++){
	$details = array();
	$id = $challengedImagesId[$i];
	//marks and comments 
    $result = mysql_query("select m.marks, c.comments, i.URL from marks_comments m ,image i, challenge c where i.image_id = m.image_id and m.image_id = c.image_id and i.image_id = '$id';");
    $data = mysql_fetch_assoc($result);
    $marksc = $data['marks'];
    $challengesc = $data['comments'];
    $urlc = $data['URL'];
    //url
    //$result = mysql_query("select URL from image where image_id = '$id';");
    //$data = mysql_fetch_assoc($result);
    //$urlc = $data['URL'];
    $details[] = $marksc;
    $details[] = $challengesc;
    $details[] = $urlc;
    $challengedImagesDetails[$id] = $details; 
}
//$challengedImagesId= array(10000,10023);
//$challengedImagesDetails = array(10000=>array("4","Sir this is correct","1pi12cs102/t112CS4011a2016.jpg"),10023=>array("3","It was 1 2 marks question","1pi12cs028/t112CS4011a2016.jpg"));
$stat1 = sizeof($missing);
$stat2 = sizeof($bundleUSNs);
$stats = $stat1."as".$stat2;

$final_result = array();
$final_result['allusn'] = $bundleUSNs;
$final_result['commentedImagesId'] = $commentedImagesId;
$final_result['completedImagesId'] = $completedImagesId;
$final_result['completedImagesDetails'] = $completedImagesDetails;
$final_result['missing'] = $stats;
//$final_result['missing'] = $missing;
$final_result['URL'] = $displayImageUrl;
$final_result['image_id'] = $displayImageId;
//
$final_result['challengedImagesId'] = $challengedImagesId;
$final_result['challengedImagesDetails'] = $challengedImagesDetails;
$final_result = json_encode($final_result);
echo $final_result;


/*
$final_result["URL"] = $URL;
$final_result["missing"] = $missing;
$final_result["USN"] = $USN;
$final_result["found"] = $found;
$final_result["image_id"] = $image_id;
$final_result = json_encode($final_result);
echo $final_result;
?>