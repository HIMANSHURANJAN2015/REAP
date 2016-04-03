<?php
include("connection.php");
extract($_GET);
$dept= $_GET['dept'];
$subjectCode = array();
$subjectTitle = array();
if(!$result = mysql_query("select s.sub_code, s.title from subject s where s.dept_name='$dept';")) 
{
	die("Error : Could not fetch the data");
}
while($row = mysql_fetch_assoc($result))
{
  $subjectCode[] = $row['sub_code'];
  $title[] = $row['title'];
}
$subjectDetails = array($subjectCode,$title);
echo (json_encode($subjectDetails));
