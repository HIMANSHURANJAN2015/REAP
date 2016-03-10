/*
*Conatins the javascripts that wil be used by
* Evaluator module html and php pages
*/
var global_bundle_id = 0;
var global_subject_code = 0;
var evaluator_email="abc";

/* 
*Evaluates the question number 
*/
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
	xhr.onreadystatechange = getQAndA;
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
	//var image_id = event.target.id; 
	//$('#fullscreen').css('width', $('document').outerWidth() + 'px');
	var src = event.target.src; //get the source attribute of the clicked image
    $('#fullscreen img').attr('src', src); //assign it to the tag for your fullscreen div
    $('#fullscreen').fadeIn();
                
    $('#fullscreen').click(function(){
        $(this).fadeOut(); //this will hide the fullscreen div if you click away from the image. 
    });
}



/*
*Fetches the details - id and url of images
*/
function fetchURL(qno){
// i ll write the logic behind fetchin the image from folders...for now i am hardcoding url of images
// 1) modify pending_images tabel to add bundle_id
// 2) select top 10 pending_images which are not evaluated and correspond to this bundle_id  (pending_images)
// 3) select see image table to see if evaluation_done = 0 then only fetch url from (image) table
// 4) evaluation complete hote hi pending_images se remove plus insert into completed table   
//var imageurls= ["1pi12cs002/t112CS4011a2016.jpg","1pi12cs003/t112CS4011a2016.jpg","1pi12cs004/t112CS4011a2016.jpg","1pi12cs005/t112CS4011a2016.jpg","1pi12cs008/t112CS4011a2016.jpg"];
	/*var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = getURL;
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/getImageURL.php?bundle_id="+bundle_id+"&qno="+qno,true);
	xhr.send(); 
	var imageurls= ["1pi12cs003/t112CS4011a2016.jpg","1pi12cs004/t112CS4011a2016.jpg","1pi12cs005/t112CS4011a2016.jpg","1pi12cs008/t112CS4011a2016.jpg"];
	var imageIds = [10004,10005,10006,10007,10008];
	var imageDetails ={"imageurls":imageurls,"imageids":imageIds};
	if(questionNumber != "1a") 
  		return null;  
	return imageDetails;*/

}


//Calls showAnswerImages which display the answer images. Triggered by pressing go button on evaluation tab
function showAnswerImagesQuestionWise()
{
  var frames = document.getElementsByTagName("iframe");
  frames[0].style.display = "block";
  frames[1].style.display = "block";
  //Show expected question and answer
  //Upddate expected Question and Answer
  //alert(global_bundle_id);
  //alert(global_subject_code);
  //var subjectCode = document.getElementById("subjectCode");
  	var questionNumber = document.getElementById("questionNumber").value;
  //alert(questionNumber);
  	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = getURL;
	xhr.open("GET","http://localhost/REAP/dataFetchingFiles/getImageURL.php?bundle_id="+global_bundle_id+"&qno="+questionNumber+"&qp_id=1",true);
	xhr.send();
  	updateExpectedQuestionAnswer(questionNumber);
  	//imageDetails = fetchURL(questionNumber);
} 

function getURL()
{
	if(xhr.readyState == 4 && xhr.status == 200)
	{
		result = JSON.parse(xhr.responseText);
		var imageurls = result["URL"];
		var imageIds = result["image_id"];
		var missing = result["missing"];
		var foundUSN = result["found"];
		imageDetails = {"imageurls":imageurls,"imageIds":imageIds};
		if(imageDetails == null)
  		{
    		return;
  		}
  		showAnswerImages(imageurls,imageIds,missing,foundUSN);
	}
}
//subjectCode and bundle_id are global
//updates the area of ecxpected question and answer
function updateExpectedQuestionAnswer(questionNumber) {
  // 4) fetch from db expected question and answer
 var xhr= new XMLHttpRequest();
xhr.onreadystatechange= function(){
        if(xhr.readyState==4 && xhr.status==200)
        {
          return_data=xhr.responseText;
          //alert(return_data);
          returnDataArray = JSON.parse(return_data);
          var expected_answer = returnDataArray['expectedAnswer'];
          //var diagram = "1a.jpg";
          var question_text = returnDataArray['questionText'];
          var maxMarks = returnDataArray['maxMarks'];
          var questionId = returnDataArray['question_id'];
          var iframe = document.getElementById("expectedQuestionAnswerFrame");
          var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
          var k =(innerDoc.getElementById("expectedQuestionInFrame"));
          innerDoc.getElementById("expectedQuestionInFrame").innerHTML=question_text;
          //innerDoc.getElementById("expectedAnswerInFrame").style.whiteSpace = "nowrap";
          innerDoc.getElementById("expectedAnswerInFrame").innerHTML=expected_answer;
          //var img=innerDoc.getElementById("expectedDiagramImageInFrame");
          //img.width = "400";
          //img.src="answers/"+diagram;
        }
      
  }//end of function
  //
  xhr.open("GET","http://localhost/REAP/dataFetchingFiles/questionDetails.php?questionNumber="+questionNumber+"&subjectCode="+global_subject_code, true);
  xhr.send();

  //var expected_answer = "OpenStack is a free and open-source software platform for cloud computing, mostly deployed as an infrastructure-as-a-service (IaaS). The software platform consists of interrelated components that control hardware pools of processing, storage, and networking resources throughout a data center";
  //var diagram = "1a.jpg";
  //var question_text = "What is OpenStack ?";
  //var iframe = document.getElementById("expectedQuestionAnswerFrame");
  //alert(iframe);
  //var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  //alert(innerDoc);
  //var k =(innerDoc.getElementById("expectedQuestionInFrame"));
  //alert(k);
  //alert("ok");
  //var items = innerDoc.getElementsByTagName("*");
  //for(i=0 ;i<items.length;i++) {
    //alert(items[i]);
  //}
  //innerDoc.getElementById("expectedQuestionInFrame").innerHTML=question_text;
  //innerDoc.getElementById("expectedAnswerInFrame").innerHTML=expected_answer;
  //var img=innerDoc.getElementById("expectedDiagramImageInFrame");
  //img.width = "400";
  //img.src="answers/"+diagram;
}
/*
* Shows the answer parts on the related areas
*/
function showAnswerImages(imageurls,imageIds,missing,found) 
{
	
 	var l=imageurls.length;
 	var iframe = document.getElementById("answerFrame");
 	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
 	var table =innerDoc.getElementById("imagesTable");
 	table.innerHTML = "";
 	if(missing.length > 0)
	{
		fillMissingDiv(missing,innerDoc,table)
	}
 	for(i=0; i<l;i++) {
   	var tr1 = innerDoc.createElement("tr");
    var td1 = innerDoc.createElement("td");
    var img=innerDoc.createElement("img");
    img.src = "/REAP/extractedImages/"+imageurls[i];
    img.id = imageIds[i];
    img.addEventListener("click", fullscreenMode)
    img.width=800;
    td1.appendChild(img);
    td1.setAttribute("rowspan",3);
    tr1.appendChild(td1);
    var td2 = innerDoc.createElement("td");
    //td2.innerHTML = "Comment";
    var a = document.createElement("a");
    a.setAttribute('data-toggle', "modal");
    a.href = "#commentModal";
    a.id = imageIds[i];
    a.onclick = saveId;
    //alert("hello");
    a.innerHTML = "Write a comment";
    td2.appendChild(a);
    tr1.appendChild(td2);    
    table.appendChild(tr1);
    //till now row 1 is appended
    var tr2 = innerDoc.createElement("tr");
    var td1 = innerDoc.createElement("td");
    //td1.innerHTML="";
    //5)fetchMaximumMarks...
    var max = 5;
    var ip=innerDoc.createElement("input");
    ip.id=imageIds[i];
    //alert(ip.id);
    ip.type="number";
    ip.placeholder=max;
    ip.style = "width: 60px;maxlength:2";
    td1.appendChild(ip);
    tr2.appendChild(td1);
    table.appendChild(tr2);
    var tr3 = innerDoc.createElement("tr");
    var td1 = innerDoc.createElement("td");
    td1.innerHTML="Report an issue !!";
    tr3.appendChild(td1);
    //tr3.style = "outline: thin solid blue";
    table.appendChild(tr3);
    var dummyRow =innerDoc.createElement("tr");
    var td=innerDoc.createElement("td");
    td.innerHTML="";
    td.style = "background:yellow";
    dummyRow.style = "outline: thick solid black"; 
    dummyRow.appendChild(td);
    table.appendChild(dummyRow);
     


   /*
   var tr1 = innerDoc.createElement("tr");
      var td1 = innerDoc.createElement("td");
        var img=innerDoc.createElement("img");
        img.src = "images/"+imageurls[i];
        //img.setAttribute("width",1000);
        img.width=900;
      td1.appendChild(img);
    tr1.appendChild(td1);
        var td2 = innerDoc.createElement("td");
        //td2.innerHTML = "Comment";
        var a = document.createElement("a");
        a.setAttribute('data-toggle', "modal");
        a.href = "#myModal";
        a.innerHTML = "comment";
        td2.appendChild(a);
        
  tr1.appendChild(td2);
  tr1.style = "outline: thin solid blue";
  table.appendChild(tr1);
  */
  }
}

function fillMissingDiv(missing,innerDoc,table)
{
	div = innerDoc.getElementById("missing");
	div.style.display = "block";
	div.innerHTML = "";
	div.innerHTML += "Following students answers were not found : \n";
	for(var i = 0; i < missing.length; i++)
	{
		div.innerHTML += (missing[i]+"  ");
	}	 
	
}
//First function that is called and on the popup shows the bundles
function startEvaluation() {
	var qno = document.getElementById("questionNumber");
	qno.value = ""; 
	var input = document.getElementById("qinputs");
	input.style.display = "none";
	var frames = document.getElementsByTagName("iframe");
    frames[0].style.display = "none";
    frames[1].style.display = "none";
 	var xhr= new XMLHttpRequest();
  	xhr.onreadystatechange= function(){
        if(xhr.readyState==4 && xhr.status==200)
        {
          return_data=xhr.responseText;
          //var new_label=document.createElement("pre");
          //new_label.style.fontFamily="Verdana";
          //new_label.innerHTML=return_data;
          //display_modal_body.appendChild(new_label);
          returnArray =JSON.parse(xhr.responseText);
          bundleArray = returnArray['bundle_id'];
          codeArray = returnArray['subject_code'];
          l=bundleArray.length;
          //var body = document.getElementById("bundleModalBody");
          var body = document.getElementById("bundleDialog");
          body.innerHTML = ""; 
          var h1=document.createElement("h1");
          h1.innerHTML="Select The bundle";
          h1.style="color:red";
          body.appendChild(h1);
          body.style.height="500px";
          body.style.width= "1000px";
          body.style.position = "absolute";
          body.style.top = "100px";

          for(i=0;i<l;i++) {
            var h=document.createElement("h4");
            h.innerHTML=bundleArray[i] + "      "+codeArray[i];
            h.onclick = showAnswerImagesQuestionWisePre;
            h.onHover = "red"
            body.appendChild(h);
          }
          document.getElementById("bundleDialog").showModal();

          
          //var bundle_id=prompt
          
          //showAnswerImagesQuestionWise();
        
        
        }
      
      }//end of function
      xhr.open("GET","http://localhost/REAP/dataFetchingFiles/evaluatorBundleListing.php", true);
      xhr.send();
  //<?php include('evaluator_bundleListing.php'); ?>
  //bundleArray = String(<?php echo json_encode($bundle_id);?>);
  //subjectCodeArray = String(<?php echo json_encode($bundle_id);?>);
  //alert(bundleArray);
  //alert(subjectCodeArray);
  
}

//Called to set gloabl variables by startEvaluation() This closes with the click
function showAnswerImagesQuestionWisePre(event) {
  var input = document.getElementById("qinputs");
  input.style.display = "inline-block";
  var source = event.target || event.srcElement;
  var sourceString = (source.innerHTML);
  var b= sourceString.split(" ");
  var bundle_id = b[0].trim();
  var subject_code=b[b.length-1].trim();
  global_subject_code=subject_code;
  global_bundle_id=bundle_id;
  document.getElementById("bundleDialog").close();
}


function reset() {

}


function save(event) 
{
 var table = document.getElementById("imagesTable");
 //var iframe = document.getElementById("answerFrame");
 //var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
 /*var marksTags= innerDoc.getElementsByTagName("input");
 var r="";
 for(i=0;i<marksTags.length;i++) {
   var id=marksTags[i].id;
   var value=marksTags[i].value;
   //if(Number.isInteger(id) && value != null)  
     r=r+"("+id+","+value+")";

 }
 alert(r);
 //alert(marksTags);
 //alert(marksTags.length); 
 */
 var comments = document.getElementById("comments");
 comments = comments.value;
 //alert(comments);
 var div = document.getElementById("imageId");
 var image_id = parseInt(div.innerHTML);
 //alert(image_id);
 xhr = new XMLHttpRequest();
 xhr.onreadystatechange = updated;
 var marks = document.getElementsByTagName("input");
 //alert(marks);
 for(i = 0; i < marks.length; i++)
 {
 	if(marks[i].id == image_id)
 	{
 		//alert("In for loop:");
 		//alert(marks[i].id);
 		marks = parseInt(marks[i].value);
 		break;
 	}
 	else
 		marks = -1
 }
 //alert(marks);
 xhr.open("GET","http://localhost/REAP/dataFetchingFiles/marks_comments.php?image_id="+
 	image_id+"&eval_email=kumaradhara@gmail.com"+"&marks="+marks+"&comments="+comments,true);
 xhr.send();
}

function updated()
{
	if(xhr.readyState == 4 && xhr.status == 200)
	{
		alert(xhr.responseText);
	}
}

function history()
{
  var evalEmail = document.getElementById("evalEmail");
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = showHistory;
  xhr.open("GET","http://localhost/REAP/dataFetchingFiles/get_history.php?eval_email="
  			+evalEmail.innerHTML,true);
  xhr.send();
}

function showHistory()
{
	if(xhr.readyState == 4 && xhr.status == 200)
	{
		var result = JSON.parse(xhr.responseText); 
		var table = document.getElementById("historyTable");
		var tbody = table.getElementsByTagName("tbody");
		tbody[0].innerHTML = "";
		table.style.display = "block";
		for(var i = 0; i < result.length; i++)
		{		
			tr = document.createElement("tr");		
			for (var j = 0; j < result[i].length; j++) 
			{
				td = document.createElement("td");
				td.innerHTML = result[i][j];
				tr.appendChild(td);
			}		
			tbody[0].appendChild(tr);				
		}		
	}
}

function saveComments()
{
  alert("ok");
}

function saveId(event)
{
	var image_id = event.target.id;
	//alert(image_id);
	var iframe = document.getElementById("answerFrame");
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
	var div = innerDoc.getElementById("imageId");
	div.innerHTML = "";
	div.innerHTML = image_id;
}

function changeQFontSize(event)
{
    //div_id = event.target.id;
    question = document.getElementById("expectedQuestionInFrame");
    font_size = parseInt(prompt("Enter font size (current font size is 14): "));
    question.style.fontSize = font_size + "px";    
}

function changeAnswerFontSize(event)
{
  answer = document.getElementById("expectedAnswerInFrame");
  font_size = parseInt(prompt("Enter font size (current font size is 14): "));
  answer.style.fontSize = font_size + "px"; 
}

function session_destroy(event)
{
	//event.preventDefault();
	div = document.getElementById("sessionDestroy");
	div.style.display = "block";
}

