<?php
include("connection.php");
extract($_GET);
 $exam = $_GET['type'];
 //$usn = $_GET['usn'];
 $subjectCode =$_GET['subjectCode'];
 
 //$result = exec("python imageProcessing.py $exam $usn $subjectCode");
 $result = shell_exec("/home/neel/.virtualenvs/cv/bin/python3 /var/www/html/REAP/imageProcessing/hough_circles.py '$exam' '$subjectCode'");
 $result = shell_exec("chmod -R 777 /var/www/html/REAP/extractedImages");
 //var_dump($result);
 //exit(0);

 //updating the db so that next time in the dropdown this subject wont be seen
 if(!$result = mysql_query("update question_paper set extraction_done = '1' where examtype = '$exam' and sub_code = '$subjectCode';"))
{
	die("Error : Could not update extractionDone field");
}
//echo "hello";
?>
