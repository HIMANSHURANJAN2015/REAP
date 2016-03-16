<?php
extract($_GET);
 $exam = $_GET['type'];
 //$usn = $_GET['usn'];
 $subjectCode =$_GET['subjectCode'];
 //$result = exec("python imageProcessing.py $exam $usn $subjectCode");
 $result = shell_exec("/home/himanshu/.virtualenvs/cv/bin/python3 /var/www/html/REAP/imageProcessing/hough_circles.py '$exam' '$subjectCode'");
 $result = shell_exec("chmod -R 777 /var/www/html/REAP/extractedImages");
 //var_dump($result);
 //exit(0);
?>
