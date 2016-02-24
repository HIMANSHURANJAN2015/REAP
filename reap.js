function reapify()
{
 var usn=document.getElementById("usn").value;
 //alert(usn);	
 var type=document.getElementById("type").value;
 var subjectCode=document.getElementById("subjectCode").value;
 //var imageURL="images/"+usn+"/"+type+subjectCode;
 var imageURL="images/"+usn;
 //alert(imageURL);
 var op=document.getElementById("answerImage");
 op.innerHTML=""; 
 var xhr=new XMLHttpRequest();
 filenamesArray='';
 xhr.onreadystatechange=function(){
 	if(xhr.readyState==4 && xhr.status==200){
 		filenames = String(xhr.responseText);
 		//document.write(filenamesArray);
 		//alert(filenames);
 		filenamesArray=JSON.parse(filenames);
 		alert(filenamesArray);
 		for (i=0;i<filenamesArray.length;i++)
 		{
 			var img=document.createElement("img");
 			var src1="images/"+usn+"/"+filenamesArray[i];
 			alert(src1);
 			img.src=src1;
 			op.appendChild(img);
 			op.appendChild(document.createElement("br"));
 			op.appendChild(document.createElement("br"));
		}
 		//var img=document.createElement("img");
 		//img.src="images/"+usn+"/"+filenamesArray[0];
 		//op.appendChild(img);
 	}
 }
 xhr.open("GET","fetchFileNames.php?path="+imageURL,true);
 xhr.send();
//alert("yes");


}


function reapify2()
{
 var table = document.getElementById("answers");
 table.style.display = "block";
 var qno = document.getElementById("question_num").value;
 var valid = validate_question_no(qno);
 if(!valid)
 {
 	alert("Invalid Question Number");
 	return;
 }
 else
 {
 	result = getQuestionAndAnswer(qp_id,qno);
 	var q = result[0];
 	var a = result[1];
 	//var buttons = document.getElementById("buttons");
 	var question = document.getElementById("question");
 	question.style.display = "block";
 	//buttons.style.position = "absolute";
 	//buttons.style.top = question.offsetHeight + "px";
 	document.getElementById("qno").innerHTML = q;
 	document.getElementById("a1").innerHTML = a;
 	var i1 = document.createElement("img");
 	//make a xhr call to getImageURL.php and return URLs in JSON format
 	result = new Array("images/1pi12cs059/t112cs4051.jpg","images/1pi12cs059/t112cs4052.jpg","images/1pi12cs059/t112cs4053.jpg");
 	var i;
 	for (i = 0; i < result.length; i++)
 	{
 		image = document.createElement("img");
 		image.src = result[i];
 		image.height = "500";
 		image.width = "700";
 		tr = document.createElement("tr");
 		td = document.createElement("td");	
 		td.appendChild(image);
 		tr.appendChild(td);
 		td = document.createElement("td");
 		comments = document.createElement("textarea");
 		comments.placeholder = "Comments";
 		comments.rows = "20"; comments.cols = "38";
 		td.appendChild(comments);
 		//tr.appendChild(td);
 		//td = document.createElement("td");
 		marks = document.createElement("input");
 		marks.type = "text"; marks.placeholder = "Marks";
 		td.appendChild(marks);
 		tr.appendChild(td);
 		table.appendChild(tr);
 	}
 }
}

function validate_question_no(qno)
{
	if(qno.length > 0 && qno.length < 3 && !isNaN(qno[0]) && qno[1].match([a-zA-Z]))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function getQuestionAndAnswer(qp_id,qno)
{
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function.success{
		if(xhr.readyState == 4 && xhr.status == 200)
		{
			return(JSON.parse(xhr.responseText));
		}
	};
	xhr.open("GET","http://localhost/REAP/question_and_answer.php?qp_id="+qp_id+"qno"+qno);
	xhr.send();
}
