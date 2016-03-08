<?php
 $exam = $_GET['type'];
 $usn = $_GET['usn'];
 $subjectCode =$_GET['subjectCode'];
 //$result = exec("python imageProcessing.py $exam $usn $subjectCode");
 $result = exec("/home/himanshu/.virtualenvs/cv/bin/python3 hough_circles.py '$exam' '$usn' '$subjectCode");
 //var_dump($result);
 //exit(0);
?>