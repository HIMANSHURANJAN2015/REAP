<?php
    
    include('connection.php');
    $i = 0;
    $row="";    
	#$name=mysql_escape_string($_SESSION['name']);
    #$names = explode(' ',$name)
    $query=mysql_query("SELECT eval_email FROM evaluator WHERE eval_first_name='Nagabhushana' and eval_last_name='Kumar'");
    if ($query) 
    {
                
              if($row = mysql_fetch_assoc($query))
              {	echo 'hello1';
		        $email = $row['eval_email'];
		       	$query2 = mysql_query("SELECT pq_id FROM pending_queue WHERE eval_email ='".$email."'");
echo $query2;
			if ($row = mysql_fetch_assoc($query)) 
		    	{echo 'hello2';
			      while($row = mysql_fetch_assoc($query2))
			      {
			        $pending_qid[$i] = $row['pq_id'];
				$i +=1;
echo 'hello4';
			      }
				#we have pending queue IDs
			      for($j=0; $j< sizeof($pending_qid); $j++)
			      {		echo 'hello3';			
				$query3 = mysql_query("SELECT image_id FROM pending_images WHERE pq_id = '".$pending_qid[$j]."'");
				$i = 0;				
				if ($row = mysql_fetch_assoc($query3)) 
		    		{
			      		while($row = mysql_fetch_assoc($query3))
			      		{
			        		$image_id[$j][$i] = $row['image_id'];
						$i +=1;
			      		}
echo 'hello';
					echo $image_id;
					#we have all the image IDs			
				
				}			
		   	     }	
			}

			else
			{
			  	echo mysql_error();
			}
              
	      }
              else
	      {
			#no pending queue	
			   
	      }
   }
    
    
    if(!$query)
    {
      echo mysql_error();
    }

?>

