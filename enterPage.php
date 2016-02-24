<html>
<!--
	USN,SUBJECT CODE AND SCANNED IMAGE WILL BE INPUT
	This is sample,start page that reads examp type from configuration file,config.json
	and calls our python application which generates question,num

	#######		INCLUDE SOME KIND OF PROGRESS BAR OR SPINNING WHEEL ##############################
-->
	<head>
		<title>ENTER PAGE</title>
		<script type="text/javascript">
		var usn="1pi12cs004";
		var subjectCode = "12cs405";
		function init() {
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function() {
				if(xhr.readyState == 4 && xhr.status == 200){
					var select = document.getElementById("examType");
					select.innerHTML = "";
					var res = JSON.parse(xhr.responseText);
					var examTypeArray = res;
					for(i=0 ; i<examTypeArray.length;i++) {
						var op = document.createElement("option");
						op.innerHTML = examTypeArray[i];
						select.appendChild(op);
					}
				}
		    }
			xhr.open("GET","examTypeFromConfig.php",true);
			xhr.send();
		}

		function startImageProcessing(){
			var xhr = new XMLHttpRequest();
			var type=document.getElementById("examType").value;
			xhr.onreadystatechange=function() {
				if(xhr.readyState==4 && xhr.status==200) {
					alert("Processing Done");
				}
			}
			xhr.open("GET","startImageProcessing.php?type="+type+"&&usn="+usn+"&&subjectCode="+subjectCode,true);
			xhr.send();
		}
		</script>

	</head>
	<body onload="init()">
		
	<form action="" method="POST">
		<label>EXAM TYPE </label>
		
			<select id="examType">
				<option>T1</option>
				<option>T2</option>
			</select>
		<br /><br /><br /><br />
		<label>OTHER</label>
			<select id="option">
				<option>op1</option>
				<option>op2</option>
			</select>
		<br /><br /><br /><br />
		<input type="button" value ="submit" onclick="startImageProcessing()" />
	</form>
	</body>
</html>
