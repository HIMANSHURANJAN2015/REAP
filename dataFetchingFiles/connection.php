<?php
if (!$conn = mysql_connect('localhost', 'root', '')) {
    die('Error : Could not connect to database');
}

if (!$db = mysql_select_db('REAP')) {
    die ('Error : Could not select the database');
}

?>
