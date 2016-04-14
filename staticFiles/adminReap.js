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

function startImageProcessing(event)
{	
	var type = document.getElementById("examTypeSelect").value;
	var subjectCode = document.getElementById("subjectCodeSelect").value;		 
	if(type == "Select" || subjectCode== "Select")
	{
	  alertify.alert("Kindly enter the inputs");
	  return;	
	}
	var processing = document.getElementById("processing");
	processing.src = "/REAP/wait_circle.gif";
	alertify.alert("Starting answer extraction !!");
	var go = document.getElementById("startImageProc");
	go.disabled = true;	
	var xhr = new XMLHttpRequest();
	//alertify.alert(type+subjectCode);
	xhr.onreadystatechange=function() {
		if(xhr.readyState==4 && xhr.status==200) {
			alertify.alert("Answer Extraction Done");
			go.disabled = false;
			processing.src = "";
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

function basicDetails(){
	alertify.alert("Disable");
	if(document.getElementById("examTypeBundle").value=="Select" || document.getElementById("departmentBundle").value=="Select" || document.getElementById("subjectCodeBundle").value=="Select" ) {
		alertify.alert("Please enter all the mandatory fields");
	} else {
		document.getElementById("bundleSteps").style="display:block";
	}
	updateBundleInfo(1);
	updateBundleInfo2();
	getEvaluators();
	
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
		//getStudentUSN();
		updateBundleInfo2();
		getEvaluators();
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
	bundle_id = bundle_info.split(":")[0]; //this is being used at all the places;
	sub_code = bundle_info.split(":")[1]; 
	var stud = document.getElementById("studentsBundle");
	var xhr = new XMLHttpRequest();
	var examType = document.getElementById("examTypeBundle");
	examtype = examType.options[examType.selectedIndex].value;
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			stud.innerHTML = "";
			var res1 = JSON.parse(xhr.responseText);
			//alert(res1);
			res=res1["UnassignedUsns"];
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
		    //show the total count 
		    document.getElementById("totalStud").innerHTML = res1["totalStudent"];
		    document.getElementById("totalUnAssigned").innerHTML = res.length;

		}
	}
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/fetchUSNSbySub.php?subCode="+
		sub_code+"&examtype="+examtype,true);
	xhr.send();
}

function assignStudents()
{
	var values = "";
	var selected = "";
	var type = "MANUAL";   //MANUAL or NEXT10
	var stud = document.getElementById("studentsBundle");
	if(document.getElementById("assignNext10").checked) {
		for(i=0;i<res.length;i++) {
			if(i==10){
				break;
			}
			//alert(bundle_id);
			if(res.length == 1) {
				values += "(" + bundle_id + "," + "\'" + res[i] + "\'" + ")";
			}
			else{
				//values += "," + "(" + bundle_id + "," + "\'" + selected_students[i].value + "\'" + ")";
				values += "("+ bundle_id + "," + "\'" + res[i]+ "\'" + ")" + ",";
			}	

		}
		selected = res;
		type="NEXT10";
	} else {
		//select.disabled=false;
		//var stud = document.getElementById("studentsBundle");
		var selected_students = stud.selectedOptions;
		//alert(selected_students);
		//var values = "";
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
		selected = selected_students;
		type="MANUAL";
	}
	//alert(values);
	if(values.slice(-1)==",")
		values = values.slice(0,values.length-1);
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			//alert(xhr.responseText);
			assignBundleImage(bundle_id,selected, type);
			updateBundleInfo();
			getStudentUSN();
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
function assignBundleImage(bundleId,Students,type)
{
  var usns = [];	
  if(type == "NEXT10") {
  	for(i=0;i<Students.length;i++)
  	{
  		usns[i] = Students[i];
  	}	
      
  }	else {
  	for(i=0;i<Students.length;i++)
  	{
  	usns[i] = Students[i].value;
  	}	
  }
  //var usns = [];
  
  //alert(usns);
  usns = JSON.stringify(usns); 	
  //alert(usns);
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
	alertify.alert("Assigning to evals");
	var bundle = document.getElementById("idBundleEvaluator");
	var bundle_info = bundle.options[bundle.selectedIndex].value;
	bundle_id = bundle_info.split(":")[0];
	var evaluator = document.getElementById("evaluatorsBundle");
	var selected_evaluators = evaluator.selectedOptions;
	var values = "";
	for(var i = 0; i < selected_evaluators.length; i++)
	{
		//alert(bundle_id);
		if(i==0) //if(selected_evaluators.length == 1)
			values += "(" + bundle_id + "," + "\'" + selected_evaluators[i].value + "\'" + ")";
		else
			values += "," + "(" + bundle_id + "," + "\'" + selected_evaluators[i].value + "\'" + ")";
		//alert(values);
	}
	//alert(values);
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			if(xhr.responseText == 1)
			{
				alertify.alert("Assigned bundle "+bundle.options[bundle.selectedIndex].innerHTML+" to selected evaluators");
			} else {
				alertify.alert(xhr.responseText);
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

function issueInit()  //for Issue (tab4)
{
	var select = document.getElementById("examTypeIssue");
	updateExamTypeSelect(select);
	select = document.getElementById("departmentIssue");
	updateDeptSelect(select);
	select.onchange = updateSubIssue;
}

function updateSubIssue(select)
{
	var dept = document.getElementById("departmentIssue");
	var dept_selected = dept.options[dept.selectedIndex].value;
	var select = document.getElementById("subjectCodeIssue");
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

function getErrors()
{
	$.ajax({
        type: "GET",
        url: "http://localhost/REAP/imageProcessing/error.csv",
        dataType: "text",
        success: function(data) {processData(data);}
        });
}

function processData(data)
{
    var container = document.getElementById("issueContainer");
    container.style.display = "none";
    var lines = data.split(/\r\n|\n/);

    //Set up the data arrays
    var USN = [];
    var error = [];
    var imagePath = [];

    var headings = lines[0].split(','); // Splice up the first row to get the headings

    for (var j=1; j<lines.length-1; j++) 
    {
        var values = lines[j].split(','); // Split up the comma seperated values
        // We read the key,1st, 2nd and 3rd rows 
        USN.push(values[0]); // Read in as string
        error.push(values[1]);
        var x = values[2].split("(")[1];
        x = x.split(")")[0];
        x = x.replace(/['"]+/g, '');
        imagePath.push(x);
    }
    //alert(imagePath);
    populateImageIssuesTable(USN,error,imagePath);
}

function populateImageIssuesTable(USN,error,imagePath)
{
	var select = document.getElementById("examTypeIssue");
	examTypeIssue = select.options[select.selectedIndex].value;
	alert(examTypeIssue);
	select = document.getElementById("departmentIssue");
	deptIssue = select.options[select.selectedIndex].value;
	var subject = document.getElementById("subjectCodeIssue");
	subject_selected = subject.options[subject.selectedIndex].value;
	var details = document.getElementById("details");
	details.style.display = "block";
	details.innerHTML = "Department : " + deptIssue + " <br>Exam : " + examTypeIssue + " <br>Subject : " + subject_selected;
	var issueImages = document.getElementById("issueImages");
	issueImages.style.display = "block";
	for(var i = 0; i < USN.length; i++)
	{
		var tr = document.createElement("tr");
		var td = document.createElement("td");
		td.innerHTML = USN[i];
		tr.appendChild(td);
		issueImages.appendChild(tr);
		tr = document.createElement("tr");
		td = document.createElement("td");
		td.innerHTML = error[i];
		tr.appendChild(td);
		issueImages.appendChild(tr);
		tr = document.createElement("tr");
		var img = document.createElement("img");
		//alert(imagePath[i]);
		//img.src = "http://localhost/REAP/imageProcessing/inputScannedImages/1PI13CS061/page1.jpg";
		img.src = imagePath[i];
		img.alt = "Image not found";
		img.width = "800";
		tr.appendChild(img);
		issueImages.appendChild(tr);
	}

	
}

function changeStudentMethod(){
	//alert("here");
	var select = document.getElementById("studentsBundle");
	if(document.getElementById("assignNext10").checked) {
		select.disabled=true;
	} else {
		select.disabled=false;
	}
}