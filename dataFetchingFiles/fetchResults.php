<?php
include("connection.php");
extract($_GET);
$dept = $_GET["dept"];
$type = $_GET["type"];
$result = array();
//fetch number of subjects
//$subjects = array("12CS401","12CS402","12CS403","12CS404","12CS405");
$subjects = array();
$resultSubject = mysql_query("select sub_code from subject where dept_name = '$dept'");
if(!$resultSubject)
{
  die(mysql_error());	
}
while($row = mysql_fetch_assoc($resultSubject))
{
  $subjects[] = $row['sub_code'];	
}
//fetch usns from takes subjects
//$usns = array("1PI12CS059","1PI12CS060","1PI12CS061","1PI12CS062","1PI12CS063","1PI12CS064","1PI12CS065","1PI12CS065","1PI12CS065","1PI12CS065","1PI12CS065","1PI12CS065","1PI12CS065","1PI12CS065","1PI12CS065","1PI12CS065","1PI12CS065","1PI12CS065","1PI12CS065");
$usns = array();
$resultUsns = mysql_query("select t.USN from takes t inner join subject s on t.sub_code = s.sub_code and s.dept_name = '$dept'");
while($row = mysql_fetch_assoc($resultUsns))
{
  $usns[] = $row['USN'];	
}
foreach($usns as $usn)
{
  $resultByUsn = array();
  foreach($subjects as $subject)
  {
    //fetch marks of this subject for this usn
    $query = "select sum(q.max_marks) as total_marks , sum(mc.marks) as marks from marks_comments mc inner join image i on i.image_id=mc.image_id inner join question q on q.question_id=i.ques_id inner join question_paper qp on qp.qp_id=q.qp_id where qp.examtype = '$type' and qp.sub_code = '$subject' and i.USN = '$usn'";
    $resultMarks = mysql_query($query);
    if(!$resultMarks)
    {
     die(mysql_error());	
    }	
    $a = mysql_fetch_assoc($resultMarks);
    $resultByUsn[] = $a['marks'];
    //$resultByUsn[] = 2;
  }
  $result[]=array($usn=>$resultByUsn);  	
}
//var_dump($result);
//var_dump("<br />");
$finalPublish = array("subjects"=>$subjects,"result"=>$result);
//var_dump($finalPublish);
echo json_encode($finalPublish);
