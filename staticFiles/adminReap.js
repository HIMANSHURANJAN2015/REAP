/*
*Conatins the javascripts that wil be used by
* Admin module html and php pages
*/

function init() //for tab1
{
	//fetch exam type from config and display in select
	//fetch remaining subject Codesubject code from config and display in select
	//fetch extracted subject Codes and show in table
	var select = document.getElementById("examTypeSelect");
	updateExamTypeSelect(select);
	updatesubjectCodeSelect();
}

function init2()  //for tab2
{
	var select = document.getElementById("examTypeBundle");
	updateExamTypeSelect(select);
	select = document.getElementById("departmentBundle");
	updateDeptSelect(select);
	select.onchange = updateSubBundle;
}

function resultInit()
{
	var select = document.getElementById("examTypeResult");
	updateExamTypeSelect(select);
	select = document.getElementById("deptResult");
	updateDeptSelect(select);
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
				op.value = examTypeArray[i];
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

function updateDeptSelect(select)
{
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			select.innerHTML = "";
			var dept = JSON.parse(xhr.responseText);
			var op = document.createElement("option");
			op.innerHTML = "Select";
			select.appendChild(op);
			for(i = 0; i < dept.length; i++)
			{
				var op = document.createElement("option");
				op.innerHTML = dept[i];
				op.value = dept[i];
				select.appendChild(op);
		    }
		}
	}
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/fetchDepartment.php",true);
	xhr.send()
} 

function updateSubBundle(select)
{
	var dept = document.getElementById("departmentBundle");
	var dept_selected = dept.options[dept.selectedIndex].value;
	var select = document.getElementById("subjectCodeBundle");
	select.addEventListener("change",updateBundleInfo);
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			select.innerHTML = "";
			var subject = JSON.parse(xhr.responseText);
			var op = document.createElement("option");
			op.innerHTML = "Select";
			select.appendChild(op);
			for(i = 0; i < subject.length; i++)
			{
				var op = document.createElement("option");
				op.innerHTML = subject[i][0] + "(" + subject[i][1] + ")";
				op.value = subject[i][0];
				select.appendChild(op);
		    }
		}
	}
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/fetchSubjectCodeByDept.php?dept="+dept_selected,true);
	xhr.send();
}

function createBundle()
{
	var subject = document.getElementById("subjectCodeBundle");
	var sub_code = subject.options[subject.selectedIndex].value;
	examType = document.getElementById("examTypeBundle");
	examType = examType.options[examType.selectedIndex].value;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			var res = JSON.parse(xhr.responseText);
			alertify.alert("Bundle created");
			bundle_id = res["bundle_id"];
			qp_id = res["qp_id"];
		}
		updateBundleInfo(1);
	}
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/bundleCreate.php?sub_code="+sub_code+
		"&examtype="+examType,true);
	xhr.send();
}

function updateBundleInfo()
{
	var bundle = document.getElementById("idBundleStudent");
	bundle.onchange = getStudentUSN;
	subject = document.getElementById("subjectCodeBundle"); 
	sub_code = subject.options[subject.selectedIndex].value;
	//alert(sub_code);
	examType = document.getElementById("examTypeBundle");
	examType = examType.options[examType.selectedIndex].value;
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			var res = JSON.parse(xhr.responseText);
			//var sub_code = res["sub_code"];
			bundle.innerHTML = "";
			var op = document.createElement("option");
			op.innerHTML = "Select";
			bundle.appendChild(op);
			for(i = 0; i < res["bundle_id"].length; i++)
			{
				var op = document.createElement("option");
				op.innerHTML = res["bundle_id"][i] + "(" + res["eval_email"][i] + "," + res["numStuds"][i] + ")";
				op.value = res["bundle_id"][i] + ":" + sub_code;
				bundle.appendChild(op);
		    }

		}
	}
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/bundleDetails.php?subCode="+sub_code+"&type="+examType,true);
	xhr.send();
}

function getStudentUSN()
{
	var bundle = document.getElementById("idBundleStudent");
	var bundle_info = bundle.options[bundle.selectedIndex].value;
	bundle_id = bundle_info.split(":")[0];
	sub_code = bundle_info.split(":")[1]; 
	var stud = document.getElementById("studentsBundle");
	var xhr = new XMLHttpRequest();
	var examType = document.getElementById("examTypeBundle");
	examtype = examType.options[examType.selectedIndex].value;
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			stud.innerHTML = "";
			var res = JSON.parse(xhr.responseText);
			var op = document.createElement("option");
			op.innerHTML = "Select";
			stud.appendChild(op);
			for(i = 0; i < res.length; i++)
			{
				var op = document.createElement("option");
				op.innerHTML = res[i];
				op.value = res[i];
				stud.appendChild(op);
		    }

		}
	}
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/fetchUSNSbySub.php?subCode="+
		sub_code+"&examtype="+examtype,true);
	xhr.send();
}

function assignStudents()
{
	var stud = document.getElementById("studentsBundle");
	var selected_students = stud.selectedOptions;
	var values = "";
	for(var i = 0; i < selected_students.length; i++)
	{
		//alert(bundle_id);
		if(selected_students.length == 1) {
			values += "(" + bundle_id + "," + "\'" + selected_students[i].value + "\'" + ")";
		}
		else{
			//values += "," + "(" + bundle_id + "," + "\'" + selected_students[i].value + "\'" + ")";
			values += "("+ bundle_id + "," + "\'" + selected_students[i].value + "\'" + ")" + ",";
		}	
		
	}
	//alert(values);
	if(values.slice(-1)==",")
		values = values.slice(0,values.length-1);
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			//alert(xhr.responseText);
			assignBundleImage(bundle_id,selected_students);
			updateBundleInfo2();
			getEvaluators();
			stud.innerHTML = "";
		}
	}
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/insertBundleStud.php?query="+values,true);
	xhr.send();
}

function updateBundleInfo2()
{
	var bundle = document.getElementById("idBundleEvaluator");
	examType = document.getElementById("examTypeBundle");
	examType = examType.options[examType.selectedIndex].value;
	var subject = document.getElementById("subjectCodeBundle"); 
	sub_code = subject.options[subject.selectedIndex].value;
	//alert(sub_code);
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{						
			var res = JSON.parse(xhr.responseText);
			//var sub_code = res["sub_code"];
			bundle.innerHTML = "";
			var op = document.createElement("option");
			op.innerHTML = "Select";
			bundle.appendChild(op);
			for(i = 0; i < res["bundle_id"].length; i++)
			{
				var op = document.createElement("option");
				op.innerHTML = res["bundle_id"][i] + "(" + res["eval_email"][i] + "," + res["numStuds"][i] + ")";
				op.value = res["bundle_id"][i] + ":" + sub_code;
				bundle.appendChild(op);
		    }

		}
	}
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/bundleDetails.php?subCode="+sub_code+"&type="+examType,true);
	xhr.send();
}
function assignBundleImage(bundleId,selectedStudents)
{
  var usns = [];
  for(i=0;i<selectedStudents.length;i++)
  {
  	usns[i] = selectedStudents[i].value;
  }	
  //alert(usns);
  usns = JSON.stringify(usns); 	
  alert(usns);
  var type = document.getElementById("examTypeBundle").value;
  var subCode = document.getElementById("subjectCodeBundle").value;
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
  	if(xhr.readyState == 4 && xhr.status == 200)
		{
			alert(xhr.responseText);
			
		}
  }
  xhr.open("GET","http://localhost/REAP/dataFetchingFiles/insertBundleImage.php?bundleId="+bundleId+"&type="+type+"&subCode="+subCode+"&usns="+usns,true);
  xhr.send();
}

function getEvaluators()
{
	var evaluator = document.getElementById("evaluatorsBundle");
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			var res = JSON.parse(xhr.responseText);
			evaluator.innerHTML = "";
			var op = document.createElement("option");
			op.innerHTML = "Select";
			evaluator.appendChild(op);
			for(i = 0; i < res.length; i++)
			{
				var op = document.createElement("option");
				op.innerHTML = res[i];
				op.value = res[i];
				evaluator.appendChild(op);
		    }

		}
	}
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/fetchEvaluatorBySubject.php?subCode="+sub_code,true);
	xhr.send();
}

function assignEvaluators()
{
	var bundle = document.getElementById("idBundleEvaluator");
	var bundle_info = bundle.options[bundle.selectedIndex].value;
	bundle_id = bundle_info.split(":")[0];
	var evaluator = document.getElementById("evaluatorsBundle");
	var selected_evaluators = evaluator.selectedOptions;
	var values = "";
	for(var i = 0; i < selected_evaluators.length; i++)
	{
		//alert(bundle_id);
		if(selected_evaluators.length == 1)
			values += "(" + bundle_id + "," + "\'" + selected_evaluators[i].value + "\'" + ")";
		else
			values += "," + "(" + bundle_id + "," + "\'" + selected_evaluators[i].value + "\'" + ")";
		alert(values);
	}
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			if(xhr.responseText == 1)
			{
				alert("Assigned bundle "+bundle.options[bundle.selectedIndex].innerHTML+" to selected evaluators");
			}
			updateBundleInfo2();
		}
	}
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/insertBundleEval.php?query="+values,true);
	xhr.send();
}

function fetchResult()
{
 	var select = document.getElementById("examTypeResult");
 	var type = select.options[select.selectedIndex].value;
 	select = document.getElementById("deptResult");
	var dept = select.options[select.selectedIndex].value;
 	xhrResult= new XMLHttpRequest();
 	xhrResult.onreadystatechange = updateResultsTable;
 	xhrResult.open("GET","http://localhost/REAP/dataFetchingFiles/fetchResults.php?dept="+dept+"&type="+type,true);
 	xhrResult.send(); 
}

function updateResultsTable()
{
 if(xhrResult.readyState == 4 && xhrResult.status == 200)
 {
		  var publishResult = JSON.parse(xhrResult.responseText);
		  var subjects = publishResult["subjects"];
		  var result = publishResult["result"];
		  var tableHead = document.getElementById("resultHead");
		  var tableBody = document.getElementById("resultBody");
		  var numberOfSubjects = subjects.length;

		  var rowHead = tableHead.insertRow(0);
		  var cellHead = rowHead.insertCell(0);
		  cellHead.innerHTML = "USN";
		  for(i=0; i<numberOfSubjects; i++)
		  {
		  	cellHead=rowHead.insertCell(i+1);
		  	cellHead.innerHTML = subjects[i];

		  } 

		  for(i=0; i< result.length;i++)
		  {
            for(key in result[i])
            {
            	var usnMarks = result[i][key];
            	var rowBody = tableBody.insertRow(i);
            	var cell = rowBody.insertCell(0);
            	cell.innerHTML = key;
            	for(j=0; j< numberOfSubjects; j++)
            	{
                   cell = rowBody.insertCell(j+1);
                   cell.innerHTML= usnMarks[j];  
            	}	
            } 
		  }	
		  /*	
		  for(i=0;i<result.length;i++)
		  {
		  	//alert(typeof result[i]);
		  	for(key in result[i])
		  		alert(typeof result[i][key][0]);
		  	//alert(result[i][0]+result[i][1]);
		  } */
		  /*
		  console.log(result);
		  for(i in result)
		  {
		  	console.log(i);
		  	for(key in result[i])
		  	{
		  	  console.log( key + ": " + result[i][key]);
		  	}	
		  	
		  }	*/
		  
 } 

}