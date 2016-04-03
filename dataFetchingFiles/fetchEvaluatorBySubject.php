<?php
include("connection.php");
extract($_GET);
$code = $_GET['subCode'];
$result = mysql_query("select distinct eval_email from teaches where sub_code = '$code'");
$evals = array();
while($row = mysql_fetch_assoc($result))
{
  $evals[] = $row['eval_email'];	
}

echo json_encode($evals);