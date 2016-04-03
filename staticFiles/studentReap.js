/*
*Conatins the javascripts that wil be used by
* Student module html and php pages
*/
var s,t;
var usn = "1pi12cs015";
var qn,eval;
function loadSubjects()
{

    select = document.getElementById("subjects");                
    xhr= new XMLHttpRequest();
    xhr.onreadystatechange = showSubjects;
    xhr.open("GET","http://localhost/REAP/dataFetchingFiles/getSubjects.php?USN=1pi12cs015", true);
    xhr.send();                                                       
}

function showSubjects()
{
	if(xhr.readyState==4 && xhr.status==200)
    {
        select.innerHTML = "";
        subject = JSON.parse(xhr.responseText);
        var len = subject.length;
        var option = document.createElement("option");
        option.innerHTML = "-----------";
       	option.value = "None";
        select.appendChild(option);
        for(i=0;i<len;i++)
        {
            var option = document.createElement("option");
            option.innerHTML = subject[i];
            option.value = subject[i];
            select.appendChild(option);
        }
        /*
        select = document.getElementByName("exam_type");
        for(i=0;i<len;i++)
        {
          	var option = document.createElement("option");
            option.innerHTML = exam_type[i];
            option.value = exam_type[i];
            select.appendChild(option);
        }*/
    }
}

function fetch()
{       
    var sub = document.getElementById("subjects");
    var type = document.getElementById("exam_type");
    s = sub.options[sub.selectedIndex].value;
    t = type.options[type.selectedIndex].value;
    var subjectCode = document.getElementById("subjectCode");
    subjectCode.style.display = "block";
    subjectCode.innerHTML = "Subject Code : " + s;
    xhr= new XMLHttpRequest();
    xhr.onreadystatechange = showResult;        
    xhr.open("GET","http://localhost/REAP/dataFetchingFiles/getquestionAndAnswers.php?sub_code="+s+"&examtype="+t+"&USN=1pi12cs015", true);
    xhr.send();   
}

function mysortfunc(a,b)
{
	return a["question_num"] > b["question_num"];
}

function showResult()
{
	if(xhr.readyState==4 && xhr.status==200)
    {   
    	//alert("showResult");
        var result = JSON.parse(xhr.responseText);
        result.sort(mysortfunc);
        var subjectDiv = document.getElementById("outerSubject");
        subjectDiv.style.display = "none";
        var table = document.getElementById("answerTableBody");
        table.style.display = "block";
        //var tableBody = document.getElementById("answerTableBody");
        var i = 0;
        //alert(result[i+1]["question_num"]);
        for(var i = 0; i < result.length-1; i++)
        {
        	//alertify.alert(usn);
        	//alert(result[i+1]["question_num"]);
        	if(result.length > 1 && (result[i]["question_num"] == result[i+1]["question_num"]) && (i != result.length-1))
	        {
	        	//alert(result[i]["question_num"]);
	        	//alert("ssup");
	        	tr = document.createElement("tr");
	        	td = document.createElement("td");
	        	qn = result[i]["question_num"];
	            td.innerHTML = "<b>"+result[i]["question_num"] +")</b>  ";
	            td.innerHTML +=  result[i]["question_text"];
	            td.setAttribute("colspan", 3);
	            tr.style.height = "200";
	        	tr.appendChild(td);
	        	td = document.createElement("td");
	        	td.innerHTML = "<b>Evaluator 1</b>";
	        	tr.appendChild(td);
	        	td = document.createElement("td");
	        	td.innerHTML = "<b>Evaluator 2</b>";
	        	tr.appendChild(td);
	            table.appendChild(tr);
	            tr = document.createElement("tr");
	        	td = document.createElement("td");
	        	td.innerHTML = "<b>Answer: </b>"+result[i]["expected_answer"];
	            td.setAttribute("colspan", 3);
	            tr.appendChild(td);
	            td = document.createElement("td");
	        	var eval_first_name = result[i]["eval_first_name"];
	        	var eval_last_name = result[i]["eval_last_name"];
	        	eval = eval_first_name + " " + eval_last_name;
	            td.innerHTML = eval_first_name + " " + eval_last_name;
	            td.setAttribute("align","centre");
	        	tr.appendChild(td);
	            td = document.createElement("td");
	        	var eval_first_name = result[i+1]["eval_first_name"];
	        	var eval_last_name = result[i+1]["eval_last_name"];
	        	eval = eval_first_name + " " + eval_last_name;
	            td.innerHTML = eval_first_name + " " + eval_last_name;
	            td.setAttribute("align","centre");
	        	tr.appendChild(td);
	            table.appendChild(tr);
	        	td = document.createElement("td");
	            tr = document.createElement("tr");
	        	img = document.createElement("img");
	        	img.src = "/REAP/extractedImages/"+result[i]["URL"];
	        	img.width = "800"; img.height = "400"; 
	        	img.alt = "Image not found on the server";
	            td.setAttribute("colspan", 3);
	            td.setAttribute("rowspan",3);
	            td.appendChild(img);
	            td.setAttribute("align","centre");
	        	tr.appendChild(td);
	            td = document.createElement("td");
	            td.innerHTML = "<b>Marks: </b>" +result[i]["marks"];
	        	tr.appendChild(td);
	        	td = document.createElement("td");
	            td.innerHTML = "<b>Marks: </b>" +result[i+1]["marks"];
	        	tr.appendChild(td);
	        	table.appendChild(tr);
	        	td = document.createElement("td");
	            tr = document.createElement("tr");
	            td.innerHTML = "<b>Comments: </b>"+result[i]["comments"];
	            tr.appendChild(td);
	            td = document.createElement("td");
	            td.innerHTML = "<b>Comments: </b>"+result[i+1]["comments"];
	            tr.appendChild(td);
	            table.appendChild(tr);
	        	tr = document.createElement("tr");
	            td = document.createElement("td");
	            a = document.createElement("a");
	            a.setAttribute('data-toggle', "modal");
	            a.href = "#reportModal"; a.innerHTML = "Challenge";
	            a.onclick = saveId;
	            a.id = result[i]["eval_email"]+":"+result[i]["image_id"];
	            td.setAttribute("align","centre");
	            td.appendChild(a);
	        	tr.appendChild(td);
	            td = document.createElement("td");
	            a = document.createElement("a");
	            a.setAttribute('data-toggle', "modal");
	            a.href = "#reportModal"; a.innerHTML = "Challenge";
	            a.onclick = saveId;
	            a.id = result[i+1]["eval_email"]+":"+result[i+1]["image_id"];
	            td.setAttribute("align","centre");
	            td.appendChild(a);
	        	tr.appendChild(td);
	            table.appendChild(tr);
	        	td = document.createElement('td');
	        	tr = document.createElement('tr');
	        	td.innerHTML = "<pre>     </pre>";
	        	td.setAttribute('colspan',5);
	        	tr.appendChild(td);
	        	table.appendChild(tr);
	        }
	    	else
		    { 
		    	tr = document.createElement("tr");
	        	td = document.createElement("td");
	        	qn = result[i]["question_num"];
	            td.innerHTML = "<b>"+result[i]["question_num"] +")</b>  ";
	            td.innerHTML +=  result[i]["question_text"];
	            td.setAttribute("colspan", 3);
	            tr.style.height = "200";
	        	tr.appendChild(td);
	        	td = document.createElement("td");
	        	td.innerHTML = "<b>Evaluator 1</b>";
	        	td.setAttribute("colspan", 2);
	        	tr.appendChild(td);
	        	//td = document.createElement("td");
	        	//td.innerHTML = "<b>Evaluator 2</b>";
	        	//tr.appendChild(td);
	            table.appendChild(tr);
	            tr = document.createElement("tr");
	        	td = document.createElement("td");
	        	td.innerHTML = "<b>Answer: </b>"+result[i]["expected_answer"];
	            td.setAttribute("colspan", 3);
	            tr.appendChild(td);
	            td = document.createElement("td");
	        	var eval_first_name = result[i]["eval_first_name"];
	        	var eval_last_name = result[i]["eval_last_name"];
	        	eval = eval_first_name + " " + eval_last_name;
	            td.innerHTML = eval_first_name + " " + eval_last_name;
	            td.setAttribute("align","centre");
	            td.setAttribute("colspan", 2);
	        	tr.appendChild(td);
	            table.appendChild(tr);
	        	td = document.createElement("td");
	            tr = document.createElement("tr");
	        	img = document.createElement("img");
	        	img.src = "/REAP/extractedImages/"+result[i]["URL"];
	        	img.width = "800"; img.height = "400"; 
	        	img.alt = "Image not found on the server";
	            td.setAttribute("colspan", 3);
	            td.setAttribute("rowspan",3);
	            td.appendChild(img);
	            td.setAttribute("align","centre");
	        	tr.appendChild(td);
	            td = document.createElement("td");
	            td.innerHTML = "<b>Marks: </b>" +result[i]["marks"];
	        	td.setAttribute("colspan", 2);
	        	tr.appendChild(td);
	        	table.appendChild(tr);
	        	td = document.createElement("td");
	            tr = document.createElement("tr");
	            td.innerHTML = "<b>Comments: </b>"+result[i]["comments"];
	            td.setAttribute("colspan", 2);
	            tr.appendChild(td);
	            table.appendChild(tr);
	        	tr = document.createElement("tr");
	            td = document.createElement("td");
	            a = document.createElement("a");
	            a.setAttribute('data-toggle', "modal");
	            a.href = "#reportModal"; a.innerHTML = "Challenge";
	            a.onclick = saveId;
	            a.id = result[i]["eval_email"]+":"+result[i]["image_id"];
	            td.setAttribute("align","centre");
	            td.setAttribute("colspan", 2);
	            td.appendChild(a);
	        	tr.appendChild(td);
	            table.appendChild(tr);
	        	td = document.createElement('td');
	        	tr = document.createElement('tr');
	        	td.innerHTML = "<pre>     </pre>";
	        	td.setAttribute('colspan',5);
	        	tr.appendChild(td);
	        	table.appendChild(tr);

		    }
	       
        } 
        
    }
}

function saveId(event) 
{
 document.getElementById("tempId").innerHTML = event.target.id;   

}

function fullscreenMode(event)
{
	//var image_id = event.target.id; 
	//$('#fullscreen').css('width', $('document').outerWidth() + 'px');
	var src = event.target.src; //get the source attribute of the clicked image
	//alert(src);
    $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
    $('#fullscreen').fadeIn();
                
    $('#fullscreen').click(function(){
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
}

function done()
{
    if(xhrComment.readyState==4 && xhrComment.status==200)
    {    
        alertify.alert(xhrComment.responseText);
        //alert("tana");
        //console.log("dhawaan");
        
        //i will fetch this from db
        qno = "1a";
        challenge = comments;  //see for any issues
        commentByEval = "Bad indentation";
        marksGiven = 3;
        maxMarks = 5; 
        //evalEmail = "neel.7365@gmail.com";
        evalEmail = "himanshu.eagerbeaver009@gmail.com";
        xhrMail= new XMLHttpRequest();
        xhrMail.onreadystatechange = done2; 
        xhrMail.open("GET","http://localhost/REAP/sendMail.php?qno="+qno+"&challenge="+challenge+"&commentByEval="+commentByEval+"&marksGiven="+marksGiven+"&maxMarks="+maxMarks+"&evalEmail="+evalEmail,true);
        xhrMail.send(); 
     }
} 

function done2()
{
    if(xhrMail.readyState==4 && xhrMail.status==200)
        { 
            alertify.alert(xhrMail.responseText);
        }    
}       

function addComment()
{
	comments = document.getElementById("comments").value;
    //coment = comments.value;
    var ids = document.getElementById("tempId").innerHTML;
    //alert(ids);
    var image_id = ids.split(":")[1];
    var  eval_email = ids.split(":")[0];
    //alert(eval_email+" and " + image_id);
    //alert(comments);
    //return;
    xhrComment= new XMLHttpRequest();
    xhrComment.onreadystatechange = done;        
    xhrComment.open("GET","http://localhost/REAP/dataFetchingFiles/addCommentChallenge2.php?comments="+comments+"&imageId="+image_id+"&evalEmail="+eval_email,true);
    xhrComment.send();   
}