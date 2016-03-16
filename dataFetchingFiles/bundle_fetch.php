<?php
    echo "hello";
    include('connection.php');
    echo "hello2";	
    $i = 0;
    $bundle = array();
    #$name=mysql_escape_string($_SESSION['name']);
    #$names = explode(' ',$name)
    $query = mysql_query("SELECT count(*) from department;");
    $count=8;
    while ($row = mysql_fetch_array($query))
    {
     $count=$row['count(*)'];
    }
     echo $count;
		 	
    $query=mysql_query("SELECT eval_email FROM evaluator WHERE eval_first_name='Nagabhushana' and eval_last_name='Kumar'");
    if ($query) 
    {
                
              if($row = mysql_fetch_assoc($query))
              {
		        $email = $row['eval_email'];
		       	$query2 = mysql_query("SELECT bundle_id FROM bundle_eval WHERE eval_email = '$email'");
				if(mysql_num_rows($query2)) 
		    	{
			      while($row = mysql_fetch_assoc($query2))
			      {
			       	$bundle[$i] = $row['bundle_id'];
					$i +=1;

			      }

				}

				else
				{
				  	echo "No Bundles";
				}
              
	      }
   
   } 
    
    if(!$query)
    {
      echo "Sorry we are having trouble accessing the requested Data";
    }

echo "hello3";

?>
