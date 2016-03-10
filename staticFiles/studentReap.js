/*
*Conatins the javascripts that wil be used by
* Student module html and php pages
*/
function loadSubjects()
{
    select = document.getElementById("subjects");                
    xhr= new XMLHttpRequest();
    xhr.onreadystatechange = showSubjects;
    xhr.open("GET","http://localhost/REAP/dataFetchingFiles/getSubjects.php?USN=1pi12cs102", true);
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
    var t = type.options[type.selectedIndex].value;
    var subjectCode = document.getElementById("subjectCode");
    subjectCode.style.display = "block";
    subjectCode.innerHTML = "Subject Code : " + s;
    xhr= new XMLHttpRequest();
    xhr.onreadystatechange = showResult;        
    xhr.open("GET","http://localhost/REAP/dataFetchingFiles/getquestionAndAnswers.php?sub_code="+s+"&examtype="+t+"&USN=1pi12cs102", true);
    xhr.send();   
}

function showResult()
{
	if(xhr.readyState==4 && xhr.status==200)
    {
        result = JSON.parse(xhr.responseText);
        var subjectDiv = document.getElementById("outerSubject");
        subjectDiv.style.display = "none";
        var table = document.getElementById("answerTable");
        table.style.display = "block";
        var tableBody = document.getElementById("answerTableBody");
        for(var i = 0; i < result.length; i++)
        {
        	tr = document.createElement("tr");
        	td = document.createElement("td");
        	td.innerHTML = result[i]["question_num"];
        	tr.appendChild(td);
        	td = document.createElement("td");
        	td.innerHTML = result[i]["question_text"];
        	tr.appendChild(td);
        	td = document.createElement("td");
        	td.innerHTML = result[i]["expected_answer"];
        	tr.appendChild(td);
        	td = document.createElement("td");
        	img = document.createElement("img");
        	img.src = "/REAP/extractedImages/"+result[i]["URL"];
        	img.width = "300"; img.height = "200"; 
        	img.alt = "Image not found on the server";
        	img.addEventListener("click", fullscreenMode);
        	td.appendChild(img);
        	tr.appendChild(td);
        	td = document.createElement("td");
        	var eval_first_name = result[i]["eval_first_name"];
        	var eval_last_name = result[i]["eval_last_name"];
        	td.innerHTML = eval_first_name + " " + eval_last_name;
        	tr.appendChild(td);
        	td = document.createElement("td");
        	td.innerHTML = result[i]["marks"];
        	tr.appendChild(td);
        	td = document.createElement("td");
        	td.innerHTML = result[i]["comments"];
        	tr.appendChild(td);
        	td = document.createElement("td");
            a = document.createElement("a");
            a.setAttribute('data-toggle', "modal");
            a.href = "#reportModal"; a.innerHTML = "Challenge";
            td.appendChild(a);
        	tr.appendChild(td);
        	tableBody.appendChild(tr);
        } 
        
    }
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