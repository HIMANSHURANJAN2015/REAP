<?php
include("connection.php");
if(!$result = mysql_query("select q.sub_code, s.title from question_paper q inner join subject s on q.sub_code=s.sub_code and q.extraction_done=0")) 
{
	die("Error : Could not fetch the data");
}
//var_dump($result);
$subjectCode = array();
$subjectTitle = array();

while($row = mysql_fetch_assoc($result))
{
  //var_dump($row);
  $subjectCode[] = $row['sub_code'];
  $title[] = $row['title'];
}
$subjectDetails = array($subjectCode,$title);
echo (json_encode($subjectDetails));
