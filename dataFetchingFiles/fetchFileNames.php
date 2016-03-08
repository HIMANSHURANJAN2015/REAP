<?php
	$path=$_GET['path'];
	//echo($path);
	$names=scandir($path);
	//echo($path);
	//$names=glob($path+"*");
	//echo json_encode($names);
	/*
	foreach($names as $name){
		if(strlen($name)<3)
			continue;
		//echo $name;
	}
	*/
	array_splice($names,0,2); //to remove . and ..
	$data = json_encode($names);
	echo $data;

?>