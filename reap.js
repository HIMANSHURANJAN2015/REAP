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
 table.innerHTML = "";
 var tr = document.createElement("tr");
 var th = document.createElement("th");
 th.innerHTML = "Answers";
 tr.appendChild(th);
 var th = document.createElement("th");
 th.innerHTML = "Comments And Marks";
 tr.appendChild(th);
 table.appendChild(tr);
 var qno = document.getElementById("question_num").value;
 var valid = validate_question_no(qno);
 if(!valid)
 {
 	alert("Invalid Question Number"); 	return;
 }
 else
 {
 	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = getResult;
	xhr.open("GET","http://localhost/REAP/question_and_answer.php?qp_id="+1+"&qno="+qno,false);
	xhr.send();	
 	//make a xhr call to getImageURL.php and return URLs in JSON format
 	result = new Array("images/1pi12cs059/t112cs4051.jpg","images/1pi12cs059/t112cs4052.jpg","images/1pi12cs059/t112cs4053.jpg");
 	fillTable(result,table);
 }
}

function validate_question_no(qno)
{
	if(qno.length > 1 && qno.length < 3)
	{
		if(!isNaN(qno[0]) && qno[1].match(/[a-zA-Z]/))
			return true;
		else
			return false;
	}
	else if(qno.length == 1)
	{
		if(!isNaN(qno[0]))
			return true;
	}
	else
		return false;
}

function getResult()
{
	if(xhr.readyState == 4 && xhr.status == 200)
	{
		result = JSON.parse(xhr.responseText);
		var q = result["question_text"];
 		var a = result["expected_answer"];
 		max_marks = result["max_marks"];
 		var question = document.getElementById("question");
 		question.style.display = "block";
 		document.getElementById("qno").innerHTML = q;
 		document.getElementById("a1").innerHTML = a;
 		var buttons = document.getElementById("outerdiv");
 		buttons.style.position = "absolute";
 		buttons.style.top = question.offsetHeight + 20 + "px";
	}
}

function fillTable(result,table)
{
 	table.style.display = "block";
 	var i;
 	for (i = 0; i < result.length; i++)
 	{
 		image = document.createElement("img");
 		image.src = result[i]; image.id = "image"+i+1; 
 		image.height = "500";  	image.width = "700";
 		image.addEventListener("click", fullscreenMode);
 		tr = document.createElement("tr");
 		td = document.createElement("td");	
 		td.appendChild(image);
 		tr.appendChild(td);
 		td = document.createElement("td");
 		comments = document.createElement("textarea");
 		comments.placeholder = "Comments";
 		comments.rows = "20"; comments.cols = "38";
 		td.appendChild(comments);
 		marks = document.createElement("input");
 		marks.type = "text"; marks.placeholder = "Marks (Max marks : "+max_marks+" )";
 		td.appendChild(marks);
 		tr.appendChild(td);
 		table.appendChild(tr);
 	}
}

function fullscreenMode(event)
{
	var image_id = event.target.id; 
	//$('#fullscreen').css('width', $('document').outerWidth() + 'px');
	var src = event.target.src; //get the source attribute of the clicked image
	alert(src);
    $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
    $('#fullscreen').fadeIn();
                
    $('#fullscreen').click(function(){
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
}

function session_destroy(event)
{
	//event.preventDefault();
	div = document.getElementById("sessionDestroy");
	div.style.display = "block";
}