/*
*Conatins the javascripts that wil be used by
* Evaluator module html and php pages
*/
var global_bundle_id = 0;
var global_subject_code = 0;
var evaluator_email="abc";
var global_type = 1;  //1 means show that is yet to be evaluated 2-> show that is evaluated 3->  show challenge parts
var global_completedImagesDetails = [[]];
var global_challengedImagesDetails = [[]];
var qp_id = 0;
var max_marks=0;
//var imageIdsWithoutMarks = [];

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
  alertify.alert("INVALID QUESTION NUMBER");
 	//alert("Invalid Question Number"); 	return;
 }
 else
 {
 	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = getQAndA;
  //alert("reading from global"+qp_id);
	xhr.open("GET","http://localhost/REAP/question_and_answer.php?qp_id="+qp_id+"&qno="+qno,false);
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
    //alert(max_marks);
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
    //alert(max_marks);
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
  
  //Show expected question and answer
  //Upddate expected Question and Answer
  //alert(global_bundle_id);
  //alert(global_subject_code);
  //var subjectCode = document.getElementById("subjectCode");
  	var questionNumber = document.getElementById("questionNumber").value;
    var valid = validate_question_no(questionNumber);
    if(!valid)
    {
      alertify.alert("Invalid Question number, please try again!");
      //alert("Invalid Question number, please try again!jk");  return;
    }
    else
    {
        if(document.getElementById("option1").checked)
            option =1;
        else if(document.getElementById("option2").checked)
            option =2;
        else 
            option=3;
        global_type = option;    
        //alert(option);
        //alert(questionNumber);
        xhr = new XMLHttpRequest();
        xhr.onreadystatechange = getURL;
        //alert(global_bundle_id);
        xhr.open("GET","http://localhost/REAP/dataFetchingFiles/getImageURL.php?bundle_id="+global_bundle_id+"&qno="+questionNumber+"&qp_id="+qp_id,true);
        xhr.send();
        updateExpectedQuestionAnswer(questionNumber);
        var frames = document.getElementsByTagName("iframe");
  frames[0].style.display = "block";
  frames[1].style.display = "block";
        //imageDetails = fetchURL(questionNumber);    
    }
    
} 

function getURL()
{
	if(xhr.readyState == 4 && xhr.status == 200)
	{
		result = JSON.parse(xhr.responseText);
    //alert(result);
    var imageurls;
    var imageIds;
    var missing; 
    //alert(global_type +"type ");
    if(global_type == 1) {
		  imageurls = result["URL"];
		  imageIds = result["image_id"];
		  missing = result["missing"];
     }
    else if(global_type==2) {
      missing = result["missing"];
      imageurls = [];
      //alert(result['completedImagesDetails'] + "ye");
      global_completedImagesDetails = result['completedImagesDetails'];
      //alert(global_completedImagesDetails);
      //alert("trying for ids");
      imageIds = result["completedImagesId"];
      //alert(imageIds);
      //return ;
      for(i=0;i<imageIds.length;i++){
        imageurls.push(global_completedImagesDetails[imageIds[i]][2]);
      }
      //alert(imageurls);
    } else {
      // challenged parts
      missing = result["missing"];
      imageIds = result["challengedImagesId"];
      //alert(imageIds);
      imageurls = [];
      global_challengedImagesDetails = result["challengedImagesDetails"];
      for(i=0;i<imageIds.length;i++){
        imageurls.push(global_challengedImagesDetails[imageIds[i]][2]);
      }
    } 
    imageDetails = {"imageurls":imageurls,"imageIds":imageIds};
		if(imageDetails == null)
  		{
    		return;
  		}
  		//showAnswerImages(imageurls,imageIds,missing,foundUSN);
      showAnswerImages(imageurls,imageIds,missing);
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
          var expected_answer = returnDataArray['expected_answer'];
          //var diagram = "1a.jpg";
          // alert(expected_answer);
          var question_text = returnDataArray['question_text'];
          max_marks = returnDataArray['max_marks'];
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
    xhr.open("GET","http://localhost/REAP/dataFetchingFiles/question_and_answer.php?qp_id="+qp_id+"&qno="+questionNumber,false);
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
function showAnswerImages(imageurls,imageIds,missing) 
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
    //console.log(innerDoc.getElementById("comments"));
    innerDoc.getElementById("commentText").innerHTML = "";
    //var comment = checkForComment();
    if(global_type == 1) {
      a.innerHTML = "Write a comment<br /><span></span>";
    } else if(global_type == 2) {
      a.innerHTML = "See the comment given<br /><span></span>";
    } else {
      a.innerHTML = "This is what the student has said !!<br /><span></span>"
    }
    
    td2.appendChild(a);
    tr1.appendChild(td2);    
    table.appendChild(tr1);
    //till now row 1 is appended
    var tr2 = innerDoc.createElement("tr");
    var td1 = innerDoc.createElement("td");
    //td1.innerHTML="";
    //5)fetchMaximumMarks...
    var max = 5; /// #TODO....done in other other function..
    var ip=innerDoc.createElement("input");
    ip.id=imageIds[i];
    //alert(ip.id);
    ip.type="number";
    //alert(max_marks+"here");
    ip.placeholder=max_marks;
    ip.max=max;
    ip.min=0;
    //alert(global_completedImagesDetails+" from another");
    var foo = innerDoc.getElementById("ChallengeExtraArea");
    //removing challenge text area in all the 3 cases;
    foo.style = "display:none";
    if(global_type == 1){
      ip.style="width : 200px";
      ip.onkeyup = validateMarksEntered;
      ip.onblur = validateMarksEnteredOnBlur;
      
      //change header
      innerDoc.getElementById("Header1").innerHTML="Enter Your Comments";
      //disable footer area
      innerDoc.getElementById("modalFooter").style="display:block";
      //disable student comment
      innerDoc.getElementById("commentText").disabled = false;
      //hide buttons
      innerDoc.getElementById("buttonArea").style = "display:none";

       //button thing for type 2
      var button =innerDoc.getElementById("commentButton");
      button.disabled=false;


    }
    if(global_type == 2) {
      ip.value= global_completedImagesDetails[imageIds[i]][0];
      ip.readOnly = true;
      innerDoc.getElementById("missing").style.display="none";
      
      //change header
      innerDoc.getElementById("Header1").innerHTML="See the Comment given";
      //disable footer area
      innerDoc.getElementById("modalFooter").style="display:block";
      //disable student comment
      innerDoc.getElementById("commentText").disabled = true;
      //hide buttons
      innerDoc.getElementById("buttonArea").style = "display:none";

      //button thing for type 2
      var button =innerDoc.getElementById("commentButton");
      button.disabled=true;


    
    }
    if(global_type == 3) {
      ip.style="width : 200px";
      ip.onkeyup = validateMarksEntered;
      ip.onblur = validateMarksEnteredOnBlur;

      ip.value = global_challengedImagesDetails[imageIds[i]][0];
      ip.style = "background-color : green";
      innerDoc.getElementById("missing").style.display="none";
      
      //change header
      innerDoc.getElementById("Header1").innerHTML="Comment by student";
      //disable footer area
      innerDoc.getElementById("modalFooter").style="display:none";
      //disable student comment
      innerDoc.getElementById("commentText").disabled = true;
      //show buttons
      innerDoc.getElementById("buttonArea").style = "display:block";

      //button thing for type 2
      var button =innerDoc.getElementById("commentButton");
      button.disabled=false;

    }
    
    //ip.value=-1;  //giving default value to differentiate between case when he has intentionally given 0 marks and case when the default value is 0
    
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
    td.innerHTML="&nbsp";
    td.style = "background:white";
    dummyRow.style = "outline: thin solid black"; 
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

function validateMarksEntered(event) {
  //alert("yes");
  var input = event.target;
  //console.log(input.max +"" +input.min);
  if(input.value > max_marks || input.value< 0) {
    input.style= "background-color: red";
  } else {
    input.style= "background-color: green";
  }
}

function validateMarksEnteredOnBlur(event) {
  var input = event.target;
  if(input.value > max_marks || input.value < 0) {
    alert("PLEASE ENTER THE MARKS WITHIN THE MAXIMUM AND MINIMUM MARKS");
  }
}

function fillMissingDiv(missing,innerDoc,table)
{
	div = innerDoc.getElementById("missing");
	div.style.display = "block";
	div.innerHTML = "";
	div.innerHTML += "Number of students who did not answer this question: \n";
  miss = missing.split("as");
  div.innerHTML += miss[0] + "/" + miss[1];
	/*for(var i = 0; i < missing.length; i++)
	{
		div.innerHTML += (missing[i]+"  ");
	}*/	 
	
}
//First function that is called and on the popup shows the bundles
function startEvaluation() {
  evaluator_email = "kumaradhara@gmail.com";
  //saving in frame2
  var iframe = document.getElementById("answerFrame");
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  var div = innerDoc.getElementById("evalEmailDiv");  //saving evaluator email..so that i can be accessed by other frames also..sinc they cant access variable alone
  div.innerHTML= "kumaradhara@gmail.com";

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
          qpidArray = returnArray['qp_id'];
          //alert(qpidArray);
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
            h.onHover = "red";
            h.id = qpidArray[i];
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
  //alert(evaluator_email);
  var input = document.getElementById("qinputs");
  input.style.display = "inline-block";
  var source = event.target || event.srcElement;
  var sourceString = (source.innerHTML);
  var b= sourceString.split(" ");
  var bundle_id = b[0].trim();
  var subject_code=b[b.length-1].trim();
  global_subject_code=subject_code;
  global_bundle_id=bundle_id;
  qp_id = event.target.id;
  //alert(qp_id);
  document.getElementById("bundleDialog").close();
}


function reset() {

}


function save(event) 
{
 //alert(global_challengedImagesDetails);
 //alert(window.opener.global_type); 
 var comments="";
 var typeImages = 1; //yet to be // or evaluated // or challenged
 if(window.parent.document.getElementById('option3').checked) {
  //means it corresponds to challenge
  //alertify.alert("yes..."); 
  comments= document.getElementById("challengeReply").value;
  typeImages=3;
  //remove from challenge table
 } 
 else
 {
   comments = document.getElementById("commentText").value;
   typeImages=1;  //it can be 2 also
 } 

 var table = document.getElementById("imagesTable");
 
 var div = document.getElementById("imageId");
 var image_id = parseInt(div.innerHTML);
 xhr = new XMLHttpRequest();
 xhr.onreadystatechange = updated;
 var marksTags = document.getElementsByTagName("input");
 //alert(marksTags);
 var marks = -1;
 for(i = 0; i < marksTags.length; i++)
 {
  console.log(marksTags[i].value);
  if(marksTags[i].id == image_id)
  {
    marks = parseInt(marksTags[i].value);
    break;
  }
 }
 //confirm("marks="+marks);
 //alert("comment="+comments);
 if(isNaN(marks)) {
  //means marks is not given..hence the default value is there.
  alertify.alert("You haven't enter marks yet !! You can save your comments and later on give marks");
  //var p =document.getElementById("commentMessage");
  //p.innerHTML = "You haven't enter marks yet !! You can save your comments and later on give marks";
  //p.style = "color:red";
  marks =-1;
 } else {
  //var r = confirm("The marks entered by you is +"+marks+" ?");
  //var p =document.getElementById("commentMessage");
  //p.innerHTML = "";
  //p.style = "color:red";
}
 var divEmail = document.getElementById("evalEmailDiv").innerHTML;
 //alert(marks+" "+comments+" "+image_id+" ko update");
 xhr.open("GET","http://localhost/REAP/dataFetchingFiles/marks_comments.php?image_id="+
 image_id+"&eval_email="+divEmail+"&marks="+marks+"&comments="+comments+"&typeImages"+typeImages,true);
 xhr.send();
}

function updated()
{
	if(xhr.readyState == 4 && xhr.status == 200)
	{
		alertify.alert(xhr.responseText);
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
  //alertify.alert("ok");
}

function saveId(event)
{
  
  var source = event.target;
  //alert(source.max +"" + event.min);
	var image_id = event.target.id;
  //alert(image_id);
	//alert(image_id);
	var iframe = document.getElementById("answerFrame");
	var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
	var div = innerDoc.getElementById("imageId");
	div.innerHTML = "";
	div.innerHTML = image_id;
  //alert("Add the comments for"+image_id);
  fetchComments(image_id);
}

function fetchComments(image_id) {
 //if (imageIdsWithoutMarks.length == 0) {
  //initilizer the array with those ids which has no marks but only comments
 //}
 //if(imageIdsWithoutMarks.indexOf(image_id) != -1) {
  // i should fetch comments
 //}
 //alert(image_id+"inside");
 if(global_type == 1) {
  xhr = new XMLHttpRequest();
 xhr.onreadystatechange = displayComments;
 xhr.open("GET","http://localhost/REAP/dataFetchingFiles/fetchComments.php?image_id="+image_id,true);
 xhr.send();

} else if(global_type ==2 ){
  //alert("populate modal");
  var iframe = document.getElementById("answerFrame");
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  innerDoc.getElementById("commentText").value="";
  innerDoc.getElementById("commentText").value=global_completedImagesDetails[image_id][1];
  /* shifting it to up
  var button =innerDoc.getElementById("commentButton");
  //alert(button);
  button.disabled=true;
  */
}else {
  var iframe = document.getElementById("answerFrame");
  var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  innerDoc.getElementById("commentText").value="";
  innerDoc.getElementById("commentText").value=global_challengedImagesDetails[image_id][1];
}
}

function displayComments() {
  if(xhr.readyState == 4 && xhr.status == 200)
  {
    //alert("yahan to aa raha");
    
    var result = xhr.responseText;
    //alert(result);
    var iframe = document.getElementById("answerFrame");
    var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
    var k =(innerDoc.getElementById("answerFrame"));
    if(result.length!=0) {
      //alert("You have given comment on this image");
      var span=innerDoc.getElementsByTagName("span")[0];
      span.innerHTML = "You have given comment on this image";
      span.style = "color:green";

    }
    //alert(result);
    //return;
    
    //alert("i am changing text area");
    innerDoc.getElementById("commentText").value="";
    innerDoc.getElementById("commentText").value=result;
    innerDoc.getElementById("commentButton").disabled=false;
  }
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


function addChallengeTextArea(){
    //alert("Will Add Comment Reply");
    var foo = document.getElementById("ChallengeExtraArea");  
    foo.style="display:block";
    // removing previous div if any
    var h=document.getElementById("Header2");
    var cln = h.cloneNode(true);
    foo.innerHTML = "";
    foo.appendChild(cln);
    //showing save and cancel button
    var b=document.getElementById("modalFooter");
    b.style="display:block";
    //Create an input type dynamically.
    var element = document.createElement("textarea");
  //Assign different attributes to the element.
    //element.setAttribute("type", "textarea");
    element.setAttribute("value", "");
    element.setAttribute("name", "challengeReply");
    element.setAttribute("id", "challengeReply");
    element.setAttribute("class","form-control");
    element.setAttribute("rows","5");
 
 
    
 
    //Append the element in page (in span).
    foo.appendChild(element);
}

function rejectChallenge(){
  //var iframe = document.getElementById("answerFrame");
  //var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
  var div1 = document.getElementById("evalEmailDiv");
  var div2= document.getElementById("imageId");
  //div.innerHTML= "kumaradhara@gmail.com";
  //alertify.alert(div1.innerHTML);
  //alertify.alert(div2.innerHTML);
  //alertify.alert("i will remove the challenge from challenge table");
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if(xhr.readyState==4 && xhr.status==200){
      alertify.alert(xhr.responseText);
    }
  }
  xhr.open("GET","http://localhost/REAP/dataFetchingFiles/rejectChallenge.php?image_id="+
 div2.innerHTML+"&eval_email="+div1.innerHTML,true);
 xhr.send();
}