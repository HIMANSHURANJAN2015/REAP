<?php
include("connection.php");
extract($_GET);
$dept= $_GET['dept'];
if(!$result = mysql_query("select s.sub_code, s.title from subject s where s.dept_name='$dept';")) 
{
	die("Error : Could not fetch the data");
}
$temp = array();
$subjectDetails = array();
while($row = mysql_fetch_assoc($result))
{
  $temp[] = $row['sub_code'];
  $temp[] = $row['title'];
  $subjectDetails[] = $temp;
  $temp = array();
}
$subjectDetails = json_encode($subjectDetails);
echo $subjectDetails;
