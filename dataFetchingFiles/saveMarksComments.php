<?php
 include "connection.php";
 $input="(10004,'kumaradhara@gmail.com',3,'good1'),(10005,'kumaradhara@gmail.com',4,'good2')";
 $query = mysql_query("insert into marks_comments values '$input' ;");
 echo $query;
 echo "helo";
?>

