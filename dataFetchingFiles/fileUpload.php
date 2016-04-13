<?php
if( isset( $_POST["Upload"] ) )
{
    $target_path = "/";

    $target_path = $target_path . basename( $_FILES['filename']['name']); 

    if(move_uploaded_file($_FILES['filename']['tmp_name'], $target_path)) {
        header("Location: http://localhost/REAP/admin/adminDashboard.php");
		die();
    } else{
        echo "There was an error uploading the file, please try again!";
    }
}
?>
