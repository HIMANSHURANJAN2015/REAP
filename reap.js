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
 var c = document.getElementById("prescriptioninfo");
 var qno = document.getElementById("question_num").value;
 alert(qno);
 var q="What do you mean by openstack ??";
 var a="OpenStack is a free and open-source software platform for cloud computing, mostly deployed as an infrastructure-as-a-service (IaaS). The software platform consists of interrelated components that control hardware pools of processing, storage, and networking resources throughout a data center.";
 
 document.getElementById("qno").innerHTML=q;
 document.getElementById("a1").innerHTML=a;
 var i1=document.createElement("img");
 i1.src="images/1pi12cs059/t112cs4051.jpg";
 i1.height="500";
 i1.width="800";
 c.appendChild(i1);
 c.appendChild(document.createElement("br"));
 c.appendChild(document.createElement("br"));
 var i2=document.createElement("img");
 i2.src="images/1pi12cs059/t112cs4052.jpg";
 i2.height="500";
 i2.width="800";
 c.appendChild(i2);
 c.appendChild(document.createElement("br"));
 c.appendChild(document.createElement("br"));
 var i3=document.createElement("img");
 i3.src="images/1pi12cs059/t112cs4053.jpg";
 i3.height="500";
 i3.width="800";
 c.appendChild(i3);
 c.appendChild(document.createElement("br"));
 c.appendChild(document.createElement("br"));
 
 
}
