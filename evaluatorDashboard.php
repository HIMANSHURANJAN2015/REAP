<?php
session_start();
$name = $_SESSION["name"];
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="HimanshuRanjan">
    <link rel="icon" href="paper.ico">
    <title>Evaluator Dashboard</title>
	 <script type="text/javascript" src="reap.js"></script>
	<link href="dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="css/myfile.css" rel="stylesheet">
	<script src="assets/js/ie-emulation-modes-warning.js"></script>
	<!--This is to Enable Tabbing Action-->
	<link rel="stylesheet" href="dist/css/bootstrap-theme.min.css">
	<script src="js/jquery-1.11.2.min.js"></script>
	<script src="dist/js/bootstrap.min.js"></script>
	<style type="text/css">
	{
		.bs-example
		margin: 20px;
	}
	</style>	
	<!--Ends Tabbing Action-->
	</head>
<body>
  <!--navigation bar-->
  <!-- THe following code will be for horizontal navigation bar at the top of the page -->
  <nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
	<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
				<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Evaluator</a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<ul class="nav navbar-nav navbar-right">
					<li><a href="patient.php"><?php echo $name; ?></a></li>
					<li><a href="login.html">LogOut</a></li>
				</ul>
				
          
			</div>
		</div>
    </nav>
	<!-- ############end of top navigation bar #############-->
	<!-- start of side Navigation bar and Place holder-->
    <div id = "verticalnav" class="container-fluid">
		<div class="row">
			<!--Side Navigation Bar-->
			<div class="col-sm-3 col-md-2 sidebar">
				<!--Profile pic -->
				<img class="profile-pic" src="images/professor.jpg" height="200px"></img>
				<!--links on side Navigation bar-->
					<ul class="nav nav-sidebar">
						<ul class="nav nav-tabs nav-stacked">
							<li id="link1" class="active"><a data-toggle="tab" href="#Patient_homepage">Home Page</a></li>
							<li id="link2" ><a data-toggle="tab" href="#History">History</a></li>
							<li id="link3"><a data-toggle="tab" href="#Admit_info">Pending Queue</a></li>
							<li id="link4"><a data-toggle = "tab" href="#evaluation">Evaluation</a></li>
							<li id="link6"><a data-toggle="tab" href="#Appointment">View Statistics</a></li>
							<li id="link7"><a data-toggle="tab" href="#Viewdocap" >Upload answer</a></li>
							<li id="link7"><a data-toggle="tab" href="#Viewdocap" >Report an issue </a></li>
							<li id="link5"><a data-toggle="tab" href="#Profile">Profile</a></li>
						</ul>
					</ul>	
			</div>
<!--############## end of left navigation bar ################-->
			<!--Rest of Front page This has our entire logic -->
			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				<div class="tab-content">
				<!-- ################## Starting tab content for PATIENT HOMEPAGE ##TAB-1####################-->
					<div id="Patient_homepage" class="tab-pane fade in active">
						<!--Header of the page for this module Doctor Dashboard-->
						<h1 class="page-header">Evaluator Dashboard</h1>
							<!--Place Holders-->
							<div class="table-responsive">
								<ul class="nav nav-pills" role="tablist" >
									<!-- jioo betaa nav_set takes the link num as parameter-->
									<a onclick="nav_set(2);fun_payment();stopit();" data-toggle="tab" href="#History" ><img src="images/evaluator/history.png" height="150px"></img></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
									<a onclick="nav_set(8);stopit();" data-toggle="tab" href="#Viewdocap"><img src="images/evaluator/queue1.jpg" height="150px"></img></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
									<a onclick="nav_set(6);fun_appointment();stopit();" data-toggle="tab" href="#Appointment"><img src="images/evaluator/evaluation2.jpg" height="150px"></img></a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
									<a onclick="nav_set(4);fun_prescription();stopit();" data-toggle="tab" href="#evaluation" ><img src="images/evaluator/statistics1.jpg" height="150px"></img></a>
									<br><br>
								</ul>  
							</div>
							<div class="row placeholders">
								<!-- ########################### VIDEO #####################################-->
								<div class="col-xs-4 col-sm-4 placeholder">
									<br /><br />
									<h3><span class="label label-success"> TOP 5 HEALTH TIPS.</span></h3>
									<br />
									<div align="center" class="embed-responsive embed-responsive-16by9">
										<video id="myvideo1" controls="controls" autoplay class="embed-responsive-item">
										<source src=heart.mp4 type=video/mp4>
										<source src=http://techslides.com/demos/sample-videos/small.mp4 type=video/mp4>
										</video>
									</div>
								</div>
								<!-- ### Notice Board which will display the list of appointments and reports that have come ########-->
								<div class="col-xs-6 col-sm-6 placeholder">
									<div class="container">
										<div class="row">
											<div class="col-md-5 text-center">
												<!--Just above notice board-->
												<h2>Notice Board</h2>
											</div>
										</div>
										<div class="row">
											<div class="col-md-4 col-md-offset-1 text-left">
												<div class="notice-board">
													<div class="panel panel-default">
														<div class="panel-heading">
														<!--Header of Notice Panel-->
															Active  Notice Panel
															<div class="pull-right" >
																<div class="dropdown">
																	<!--Button on notice header panel-->
																	<button class="btn btn-success dropdown-toggle btn-xs" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-expanded="true">
																		<span class="glyphicon glyphicon-cog"></span>
																		<span class="caret"></span>
																	</button>
																	<!--Options in above button-->
																	<ul class="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
																		<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Refresh</a></li>
																		<li role="presentation"><a role="menuitem" tabindex="-1" href="#">Logout</a></li>
																	</ul>
																</div>
															</div>
														</div>
														<!--Body of notice board-->
														<div class="panel-body">
															<ul style="padding-left:0px;list-style:none;" id="notice_manage">
																<li>
																	<span class="glyphicon glyphicon-headphones"  text-success font-size="5px" >
																		Hello sir, you have a meeting scheduled at 9:30 am tomorrow !! 
																	</span>  
																</li>
															</ul>
														</div>
														<!--Refresh Button-->
														<div class="panel-footer">
															<a href="#" onclick="fun_notice()" class="btn btn-default btn-block"> <i class="glyphicon glyphicon-repeat"></i> Refresh</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div> 
					<!-- ######### STARTING OF HISTORY TAB CONTENT- PAYMENT and treatment ##TAB-2########## -->
					<!--    @HISTORY BOTH-->
					<div id="History" class="tab-pane fade">
						<h1 class="sub-header" >Your History</h1><br>
						<ul class="nav nav-pills">
							<li class="active">
								<a data-toggle="tab" href="#payment_history" onclick="fun_admitroom()">
									<span class="glyphicon glyphicon-th-list"></span> PAPERS CORRECTED
								</a>
							</li>
							<li>
								<a data-toggle="tab" href="#operation_history" onclick="fun_attended()">
									<span class="glyphicon glyphicon-th-list"></span>Another TAB
								</a>
							</li>
						</ul>

						<div class="tab-content">
							<br />
							<!-- ################ SHOWS ROOM RELATED INFORMATION ####  internal tab 1 #######-->
							<div id="payment_history" class="tab-pane fade in active">
								1	
							</div>
								<!--##################Form for people attended #############################-->
							<div id="operation_history" class="tab-pane fade">
								2	
						    </div>

						</div>
						
					</div>



	<div id="evaluation">
		<div id = "question" style = "position:fixed;overflow-y:scroll;background-color:cyan;display:none;">
			<h4 id="qno"></h4>
			<p id="a1"></p>
		</div>	<br><br><br><br><br><br><br><br>
		<div id = "buttons">								    
			<form role="form" action="" method="POST">
				<div class="form-group">
					<label>Question_num:
						<input type="text" class="form-control" name="profile_name" id="question_num" value="" >
					</label>
						<input type="button" onclick="reapify2()" value="go" />
				</div>
			</form>		
		</div>
		<table id = "answers" style = "display:none;">
			<col width = "700">
			<col width = "200">			
			<tr>
				<th>ANSWERS</th>
				<th>COMMENTS AND MARKS</th>
			</tr>
		</table>					
	</div>
					<!-- ################################ ADMIT INFORMATION- ROOM NO AND NURSES ######TAB-3#######################-->
					<!--   @admitinfo-->
					<div id="Admit_info" class="tab-pane fade">
						<h1 class="sub-header" >Pending Queue</h1>
						<br />
						
						<!--For tabs-->
						<ul class="nav nav-pills">
							<li class="active"><a data-toggle="tab" href="#admitinfo" onclick="fun_admitroom()"><span class="glyphicon glyphicon-th-list"></span> Image</a></li>
							<li><a data-toggle="tab" href="#attended" onclick="fun_attended()"><span class="glyphicon glyphicon-th-list"></span>Another TAB</a></li>
						</ul>
						<div class="tab-content">
							<br />
							<!-- ###################################### SHOWS ROOM RELATED INFORMATION #########################################-->
							<div id="admitinfo" class="tab-pane fade in active">
								<div class="table-responsive">
									
									<table class="table table-striped">
										<thead>
											<tr>
												<th>#</th>
												<th>Question Number</th>
												<th>Subject Code</th>
												
												<th>Image</th>
												
											</tr>
										</thead>
										<tbody id="roombody">
											
										</tbody>
									</table>
								</div>
							</div>
								<!--##########################################################Form for people attended #############################-->
								<div id="attended" class="tab-pane fade">
									<div class="mylist" width="300px">
										<h3><span class="label label-success">LIST OF NURSES ATTENDED.</span></h3>
										<ul class="list-group" id="ulist">
											<!--  code to be appended by javascript-->											
										</ul>
									</div>
								</div>

								</div>
							</div>
				 
				
				
			
					
								
								<div id="reports" class="tab-pane fade">
									<h3><span class="label label-success">Your Report List</span></h3>
									<div class="table-responsive">
										<table class="table table-hover" id="report_tab">
											<thead>
											<tr id="firstrowreport">
												<th>#</th>
												<th>Report SL NO.</th>
												<th>Lab Name</th>
												<th>SEE full report</th>
											</tr>
											</thead>
											<tbody id="reportbody">
											</tbody>
											
										</table>
									</div>			
								</div>
						
				<!-- #################### PROFILE MANAGE ########TAB-5#########################-->
					<!--  @profile-->
					<div id="Profile" class="tab-pane fade">
						<h1 class="sub-header" >Manage Profile</h1><br>
						<ul class="nav nav-pills">
							<li class="active"><a data-toggle="tab" href="#profile_content"><span class="glyphicon glyphicon-th-list"></span> Edit Profile</a></li>
							<li><a data-toggle="tab" href="#change_password"><span class="glyphicon glyphicon-plus"></span>Change Password</a></li>
							</ul>
						<div class="tab-content">
							<div id="profile_content" class="tab-pane fade in active">
								<h2>Update Profile</h2>
								<form role="form" action="update_profile.php" method="POST">
									<div class="form-group">
										<label for="profile_name">Name:</label>
										<input type="text" class="form-control" name="profile_name" id="profile_name" value="" >
									</div>
									<div class="form-group">
										<label for="profile_age">Age:</label>
										<input type="number" class="form-control" name="profile_age" id="profile_age" value="">
									</div>
									<div class="form-group">
										<label for="profile_bgroup">Blood group:(FOR ANY  CHANGES IN BLOOD GROUP CONTACT US )</label>
										<input type="text" class="form-control" name="profile_bgroup" id="profile_bgroup" value="" readonly>
									</div>
									<div class="form-group">
										<label for="profile_phone">Phone No:</label>
										<input type="number" class="form-control" name="profile_phone" id="profile_phone" value="">
									</div>
									<div class="form-group">
										<label for="profile_address">Address:</label>
										<input type="text" class="form-control" name="profile_address" id="profile_address" value="">
									</div>
									
									<button type="submit" class="btn btn-default">Update Profile</button>
								</form>
							</div>
							<div id="change_password" class="tab-pane fade">
								<form class="form-signin" method="POST"  action="Doctor.html">
									<h2 class="form-signin-heading">Change password</h2>
									<input type="password"  class="form-control" placeholder="old password" >
									<input type="password"  class="form-control" placeholder="new password" >
									<input type="password"  class="form-control" placeholder="retype password" >
									<br>
									<input type="submit" class="btn btn-lg btn-primary btn-block" value="Submit" ></input>
								</form>
							</div>
						</div>
		
        </div>
					<!-- @appointment status-- #########  every appointment has a unique prescription id -TAB-6 -->
					<div id="Appointment" class="tab-pane fade">
				<h1 class="sub-header" >Your Statistics</h1><br>
				<div class="table-responsive">
					<table class="table table-hover" id="patient_tab">
						<thead>
						<tr id="firstrow">
							<th>#</th>
							<th>image</th>
							<th>id</th>
							<th>extra</th>
							<th>extra</th>
							<th><span class="glyphicon glyphicon-wrench"></span>  Manage</th>
							<!--<th>CHANGE</th> -->
						</tr>
						</thead>
						<tbody id="appointmentbody">
						</tbody>
					</table>
				</div>
				 <span></span>
				
				</div>
					<!-- @############ view doctor and book an appointment -TAB 6- -->
					<div id="Viewdocap" class="tab-pane fade">
						<h2 class="sub-header" >UPLOAD ANSWER</h2>
						
						<br />
						<br />
											
						
						
						<div class="row">
							<div class="col-lg-3">
								<h3><span class="label label-success">SELECT THE METHOD</span></h3>
								<select id="method_selected" onchange="fun()" class="form-control" placeholder=".col-lg-4">
									<option value="none"> NoneSelected </option>
									<option value="name"> BY Typing</option>
									<option value="dept"> BY uploading word file</option>
								</select>
								
							</div>
							<script type="text/javascript">
							//if(document.getElementById("method_selected").value=="none")
								//alert("plzz select a method first !!");
							function fun()
							{
							    
								var val=document.getElementById("method_selected").value;
								if(val=="none")
									alert("plzz select a method first !!");
								if(val=="name")
									document.getElementById("id1").innerHTML="Enter Doctor's Name :";
								
								else
									{
									document.getElementById("id1").innerHTML="Enter Department's Name :";
									//alert("dept");
									}
								// i am pasting here start
								
								var xhr= new XMLHttpRequest();
								xhr.onreadystatechange= function(){
								if(xhr.readyState==4 && xhr.status==200)
								{
									var dropdownmenu=document.getElementById("enteredname");
									dropdownmenu.innerHTML="";
									dropdownmenu.innerHTML="";
									return_data=String(xhr.responseText);
									
									//alert(return_data);
									
									return_data_array=return_data.split(",");
									//alert(return_data_array);
									/*

									dropdownmenu.innerHTML="";
									var op=document.createElement("option");
									op.innerHTML="none";
									dropdownmenu.appendChild(op);*/
									//var len=strlen(return_data_array);
									var len=return_data_array.length;
									//alert(len);
									for(i=0;i<len-1;i++)
									{
									 var op9=document.createElement("option");
									 
										op9.innerHTML=return_data_array[i];
										
									dropdownmenu.appendChild(op9);	
										}
									 //alert(op.innerHTML);
									 
									
									}
									//end of for
									
									//alert(return_data);
									//var new_label=document.createElement("pre");
									//new_label.style.fontFamily="Verdana";
									//new_label.innerHTML=return_data;
									//display_modal_body.appendChild(new_label);
				
				
								}
								//end of function
								xhr.open("GET","display_listdoctorbynamedept.php?cond="+val, true);
								xhr.send();
								// i am pasting here stop
									
								
							
							}
						</script>
							
							<div class="col-lg-4">
								<h3><span class="label label-success" id="id1">FILE NAME :</span></h3>
								<select class="form-control" id="enteredname" >
								</select>
							</div>
							<div class="col-lg-2">
								<br />
								<h3><span class="label label-success" id="id1"></span></h3>
								<input type="submit" name="submit" class="btn btn-lg btn-success" value="Go" onclick="display_doctor_start()"></input><br/><br/>
							</div>
						</div>
						<br /><br />
							<h3><span class="label label-success" id="id1">YOUR RECENT UPLOADS</span></h3>
							<div class="table-responsive">
								<table class="table table-striped">
								<thead>
									<tr>
									<th>#</th>
									<th>Q.No</th>
									<th>Subject Code</th>
									<th>Answer</th>
									</tr>
								</thead>
									<tbody id="searchdocbody"></tbody>
								</table>
							</div>
								
						</div>  <!-- end of search doctor div -->
		  
				</div>   <!-- end of class tab-content-->
		
			</div> 
        </div>   <!-- end of right side of page size 9 waala -->
	</div>     <!-- end of row -->
    		<!-- end of container  -->
		<!-- end of container fluid -->

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="js/jquery-1.11.2.min.js"></script>
	<script src="dist/js/bootstrap.min.js"></script>
    <script src="assets/js/docs.min.js"></script>
    <script src="assets/js/ie10-viewport-bug-workaround.js"></script>
	
  </body>
</html>  	
		
		
