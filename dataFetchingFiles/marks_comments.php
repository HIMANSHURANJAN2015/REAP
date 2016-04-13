<?php
extract($_GET);
$image_id = $_GET["image_id"];
$eval_email = $_GET["eval_email"];
$marks = $_GET["marks"];
$comments = $_GET["comments"];
$typeImages = $_GET["typeImages"];
//echo $image_id,$eval_email,$marks,$comments;
include("connection.php");
$countQuery = mysql_query("select count(*) from marks_comments where image_id='$image_id'");
$row1 = mysql_fetch_assoc($countQuery);
$count = $row1['count(*)'];
$flag = false;
if($count >0) {
	$query = "update marks_comments set marks=$marks, comments='$comments' where image_id=$image_id and eval_email='$eval_email' ;";
	//$a= $query;
	//echo($query);
	$r =mysql_query($query);
	if(!$r) {
		die("Error : Could not update ".$query);
	}
	else {
		$flag = true;
		echo "Updated"; 

	}
}
else {
		if(!$result = mysql_query("INSERT INTO marks_comments(image_id,eval_email,marks,comments) values ('$image_id','$eval_email','$marks','$comments');"))
		{
			die("Error : Could not save the data");
		}

		else {
			$flag=true;
			echo "Comments and marks saved";
		}
}
if($flag==true && $typeImages==3){
	//update challenge table
	$queryc = "update challenge set status='UPDATED' where image_id=$image_id and eval_email='$eval_email' ;";
	$r = mysql_query($queryc);
}
?>
