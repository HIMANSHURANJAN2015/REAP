<?php
 include "connection.php";
 //Take username from session
 $subjectCode = $_GET['subjectCode'];
 $examType = "t1";
 $question_num = $_GET['questionNumber'];
 $query = mysql_query("select b.question_text,b.expected_answer,b.max_marks, b.question_id from question_paper a,question b where a.sub_code='$subjectCode' and a.examType='$examType' and a.qp_id= b.qp_id and b.question_num = '$question_num';");
//$i=0;
//$bundle_id[0] = "null";
//$subject_code[0] = "null";
while ($row = mysql_fetch_array($query))
    {
      $questionText = $row['question_text'];
      $expectedAnswer = $row['expected_answer'];
      $maxMarks = $row['max_marks'];
      $questionId = $row['question_id'];
      $post = array("questionText"=>$questionText,"expectedAnswer"=>$expectedAnswer,"maxmarks"=>$maxMarks);
     //$bundle_id[$i] = $row['bundle_id'];
     //$subject_code[$i] = $row['sub_code'];
     //$i++; 
    }
//$resultArray = array("bundle_id"=>$bundle_id,"subject_code"=>$subject_code);
echo json_encode($post);
//echo json_encode($bundle_id);
//echo json_encode($subject_code);
?>

