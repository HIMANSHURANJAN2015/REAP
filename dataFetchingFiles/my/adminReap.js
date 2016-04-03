/*
*Conatins the javascripts that wil be used by
* Admin module html and php pages
*/

function init() {
	//fetch exam type from config and display in select
	//fetch remaining subject Codesubject code from config and display in select
	//fetch extracted subject Codes and show in table
	var select = document.getElementById("examTypeSelect");
	updateExamTypeSelect(select);
	updatesubjectCodeSelect();
}

function updateExamTypeSelect(select) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200){
			select.innerHTML = "";
			var res = JSON.parse(xhr.responseText);
			var examTypeArray = res;
			var op = document.createElement("option");
			op.innerHTML = "Select";
			select.appendChild(op);
			for(i=0 ; i<examTypeArray.length;i++) {
				var op = document.createElement("option");
				op.innerHTML = examTypeArray[i];
				select.appendChild(op);
			}
	    }
    }
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/examTypeFromConfig.php",true);
	xhr.send();

}

function updatesubjectCodeSelect() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4 && xhr.status == 200){
			var select = document.getElementById("subjectCodeSelect");
			select.innerHTML = "";
			var res = JSON.parse(xhr.responseText);
			var subjectCodes = res[0];
			var subjectTitles = res[1];
			var op = document.createElement("option");
			op.innerHTML = "Select";
			select.appendChild(op);
			for(i=0 ; i<subjectCodes.length;i++) {
				var op = document.createElement("option");
				op.innerHTML = subjectCodes[i] + " ("+subjectTitles[i]+")";
				op.value = subjectCodes[i];
				select.appendChild(op);
			}
	    }
    }
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/getSubjectCodeTitle.php",true);
	xhr.send();
}

function startImageProcessing(){
	var type = document.getElementById("examTypeSelect").value;
	var subjectCode = document.getElementById("subjectCodeSelect").value; 
	if(type == "Select" || subjectCode== "Select")
	{
	  alertify.alert("Kindly enter the inputs");
	  return;	
	}
	alertify.alert("Starting answer extraction !!");	
	var xhr = new XMLHttpRequest();
	//alertify.alert(type+subjectCode);
	xhr.onreadystatechange=function() {
		if(xhr.readyState==4 && xhr.status==200) {
			alertify.alert("Answer Extraction Done");
			init(); //to reset everything since the dropdown for selecting subject will now show 1 less`
		}
	}
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/startImageProcessing.php?type="+type+"&subjectCode="+subjectCode,true);
	xhr.send();
}

function init2() {
	var select = document.getElementById("examTypeBundle");
	updateExamTypeSelect(select);
	

}


