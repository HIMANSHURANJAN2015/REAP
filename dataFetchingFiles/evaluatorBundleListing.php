<?php
 include "connection.php";
 //Take username from session
 $query = mysql_query("select distinct a.bundle_id, c.sub_code from bundle_eval a,bundle b, question_paper c where a.eval_email='kumaradhara@gmail.com' and b.qp_id=c.qp_id;");
$i=0;
$bundle_id[0] = "null";
$subject_code[0] = "null";
while ($row = mysql_fetch_array($query))
    {
     $bundle_id[$i] = $row['bundle_id'];
     $subject_code[$i] = $row['sub_code'];
     $i++; 
    }
$resultArray = array("bundle_id"=>$bundle_id,"subject_code"=>$subject_code);
echo json_encode($resultArray);
//echo json_encode($bundle_id);
//echo json_encode($subject_code);
?>

