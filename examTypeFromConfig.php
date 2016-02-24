<?php
			$str = file_get_contents("config.json");
			//$str = file_get_contents("localhost:80/reap/config.json");
			$json = json_decode($str,true);
			//echo print_r($json);
			$examTypeArray = $json["examType"];
			//echo print_r($examTypeArray);
			echo json_encode($examTypeArray);

		?>