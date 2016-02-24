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
 var qno = document.getElementById("question_num").value;
 var q = "What do you mean by openstack ??";
 var a = "OpenStack is a free and open-source software platform for cloud computing, mostly deployed as an infrastructure-as-a-service (IaaS). The software platform consists of interrelated components that control hardware pools of processing, storage, and networking resources throughout a data center.";
 //var buttons = document.getElementById("buttons");
 var question = document.getElementById("question");
 question.style.display = "block";
 //buttons.style.position = "absolute";
 //buttons.style.top = question.offsetHeight + "px";
 document.getElementById("qno").innerHTML=q;
 document.getElementById("a1").innerHTML=a;
 var i1=document.createElement("img");
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
 	comments = document.createElement("input");
 	comments.type = "textarea"; comments.placeholder = "Comments";
 	comments.rows = "50";
 	td.appendChild(comments);
 	tr.appendChild(td);
 	td = document.createElement("td");
 	marks = document.createElement("input");
 	marks.type = "text"; marks.placeholder = "Marks";
 	td.appendChild(marks);
 	tr.appendChild(td);
 	table.appendChild(tr);
 }
}
