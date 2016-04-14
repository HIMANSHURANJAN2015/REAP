<?php
extract($_POST);
foreach($_GET as $key => $value){
	echo $key;
}
?>