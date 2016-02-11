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

 		for (i=0;i<filenamesArray.length;i++)
 		{
 			var img=document.createElement("img");
 			img.src="images/"+usn+"/"+filenamesArray[i];
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