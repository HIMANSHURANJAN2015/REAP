<?php
include("connection.php");
extract($_GET);
$type=$_GET['type'];
$subCode = $_GET['subCode'];
$result = mysql_query("select USN from takes where sub_code = '$subCode' and USN not in (select bs.USN from bundle_stud bs inner join bundle b on b.bundle_id=bs.bundle_id inner join question_paper q on q.qp_id=b.qp_id and q.sub_code='$subCode' and q.examtype='$type'  );");
$usns = array();
while($row = mysql_fetch_assoc($result))
{
 $usn[] = $row['USN'];	
}
echo (json_encode($usn));	