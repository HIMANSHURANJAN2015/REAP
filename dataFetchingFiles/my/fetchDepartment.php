<?php
include("connection.php");
$temp = array();
$depts = (mysql_query("SELECT dept_name from department;"));
while($row = mysql_fetch_assoc($depts))
	{
		$temp[] = $row['dept_name'];
	}	


$temp = json_encode($temp);
echo $temp;
?>
