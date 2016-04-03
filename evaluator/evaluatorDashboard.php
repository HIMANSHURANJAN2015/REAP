<?php
/*session_start();
if(isset($_SESSION["name"]))
{
	$name = $_SESSION["name"];
	$eval_email = $_SESSION["email"];
}
else
{
	header('Location:http://localhost/REAP/login.html');
}*/
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="HimanshuRanjan">
    <link rel="icon" href="../staticFiles/paper.ico">
    <title>Evaluator Dashboard</title>
	<!-- Our core javascripts -->
	<script type="text/javascript" src="../staticFiles/evaluatorReap.js?x=<?php echo rand(0,100) ?>"></script>
	<link href="../staticFiles/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../staticFiles/css/myfile.css" rel="stylesheet">
	<script src="../staticFiles/assets/js/ie-emulation-modes-warning.js"></script>
	<!--This is to Enable Tabbing Action-->
	<link rel="stylesheet" href="../staticFiles/dist/css/bootstrap-theme.min.css">
	<!--alertify -->
	<link rel="stylesheet" href="../staticFiles/alertify/themes/alertify.core.css" />
    <link rel="stylesheet" href="../staticFiles/alertify/themes/alertify.default.css" />
	<script src="../staticFiles/js/jquery-1.11.2.min.js"></script>
	<script src="../staticFiles/dist/js/bootstrap.min.js"></script>
 </head>
<body bgcolor="#00cc66">
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
				<li><a href="#"><?php echo $name; ?></a></li>
				<li><a href="http://localhost/REAP/login.html" onclick = "session_destroy()">LogOut</a></li>
			</ul>
	</div>
</div>
 </nav>
    <!-- Make this div block when u logout so that php session is set to empty array -->
    <div id = "sessionDestroy" style="display:none;"><?php $_SESSION = array(); ?></div>
	<!-- ############end of top navigation bar #############-->
	<!-- start of side Navigation bar and Place holder-->
    <div id = "verticalnav" class="container-fluid">
		<div class="row">
			<!--Side Navigation Bar-->
			<div class="col-sm-3 col-md-2 sidebar">
				<!--Profile pic -->
				<img class="profile-pic" src="../staticFiles/evaluatorImages/professor.jpg" height="200px" />
				<!--links on side Navigation bar-->
					<ul class="nav nav-sidebar">
						<ul class="nav nav-tabs nav-stacked">
							<li id="link1" class="active"><a data-toggle="tab" href="#evaluatorHomepage">Home Page</a></li>
							<li id="link2"><a data-toggle="tab" href="#history">history</a></li>
							<li id="link3"><a data-toggle="tab" href="#pendingQueue">Pending Queue</a></li>
							<li id="link4"><a data-toggle="tab" href="#evaluation" onclick="startEvaluation();">Evaluation</a></li>
							<li id="link5"><a data-toggle="tab" href="#statistics">View Statistics</a></li>
							<li id="link6"><a data-toggle="tab" href="#uploadAnswer" >Upload answer</a></li>
							<li id="link7"><a data-toggle="tab" href="#reportAnIssue" >Report an issue </a></li>
							<li id="link8"><a data-toggle="tab" href="#profile">Profile</a></li>
						</ul>
					</ul>	
			</div>
<!--############## end of left navigation bar ################-->
			<!--Rest of Front page This has our entire logic -->
			<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
				<div class="tab-content">
				<!-- #################### TAB-1 HOMEPAGE ####################-->
					<div id="evaluatorHomepage" class="tab-pane fade in active">
						<!--Header of the page for this module Doctor Dashboard-->
						<h1 class="page-header">Evaluator Dashboard</h1>
							<!--Place Holders-->
							<div class="table-responsive">
								<ul class="nav nav-pills" role="tablist" >
									<!-- jioo betaa nav_set takes the link num as parameter-->
									<a onclick="nav_set(2);fun_payment();stopit();" data-toggle="tab" href="#History" >
										<img src="../staticFiles/evaluatorImages/history.png" height="150px" />
									</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
									<a onclick="nav_set(8);stopit();" data-toggle="tab" href="#Viewdocap">
										<img src="../staticFiles/evaluatorImages/queue1.jpg" height="150px" />
									</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp 
									<a onclick="nav_set(6);fun_appointment();stopit();" data-toggle="tab" href="#Appointment">
										<img src="../staticFiles/evaluatorImages/evaluation2.jpg" height="150px" />
									</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
									<a onclick="nav_set(4);fun_prescription();stopit();" data-toggle="tab" href="#evaluation" >
										<img src="../staticFiles/evaluatorImages/statistics1.jpg" height="150px"/>
									</a>
									<br /><br />
								</ul>  
							</div>
							<div class="row placeholders">
								<!-- ########################### VIDEO #####################################-->
								<div class="col-xs-4 col-sm-4 placeholder">
									<br /><br />
									<h3><span class="label label-success"> TOP 5 HEALTH TIPS.</span></h3>
									<br />
									<div align="center" class="embed-responsive embed-responsive-16by9">
										
							
				
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
				<!-- #################### TAB-2 HISTORY ####################-->
					<div id="history" class="tab-pane fade">
						<h1 class="sub-header" >Your History</h1><br>
						<ul class="nav nav-pills">
							<li class="active">
								<a data-toggle="tab" href="#historyInternal1" onclick="history()">
									<span class="glyphicon glyphicon-th-list"></span> PAPERS CORRECTED
								</a>
							</li>
							<li>	
								<a data-toggle="tab" href="#historyInternal2" onclick="">
								<span class="glyphicon glyphicon-th-list"></span>Another TAB
								</a>
							</li>
						</ul>
						<div class="tab-content">
						<br />
						<!-- ################ SHOWS ROOM RELATED INFORMATION ####  internal tab 1 #######-->
						<div id="historyInternal1" class="tab-pane fade in active">
							<table id = "historyTable" style = "display:none;">
								<col width="200">
								<col width="200">
								<col width="200">
								<col width="200">
								<col width="200">
								<col width="200">
								<col width="200">
								<thead>
									<th>Subject Code</th>
									<th>Exam Type</th>					
									<th>Test Date</th>
									<th>Test Time</th>
									<th>Max Marks</th>
									<th>Answers Pending</th>
									<th>Total Answers</th>
								</thead>
								<tbody></tbody>
							</table>
						</div>
						<div id = "evalEmail" class ="tab-pane fade" style = "display:none;"><?php echo "kumaradhara@gmail.com"; ?></div>
						</div>
					</div>
				<!-- #################### TAB-3 PENDING QUEUE ####################-->					
					<div id="pendingQueue" class="tab-pane fade">
						<h1 class="sub-header" >Pending Queue</h1>
						<br />
					</div>
				<!-- #################### TAB-4 EVALUATION ####################-->
					<div id="evaluation" class="tab-pane fade">
						<!--start of  modal -->
						<div class="modal fade" id="bunldleModal" role="dialog">
		    					<div class="modal-dialog" id="wModal">
		    						<!-- Modal content-->
		      						<div class="modal-content">
										<div class="modal-header" >
		          							<button type="button" class="close" data-dismiss="modal">&times;</button>
											<h4 class = "centered"> BUNDLE LIST</h4>
		         						</div>
		          						<div class="modal-body" id="bundleModalBody" style="padding:40px 50px;">
		          						</div>
									</div>
		      					</div> <!-- End of modal dialog.-->
  						</div> <!-- end of modal-->
						<dialog id="bundleDialog"  height="500px" width="500px"></dialog>
  	  					<div id = "qinputs" style = "display:none;">
  	  					<label id = "qnolabel">Question Number : <input type="text" value="" id="questionNumber" /> </label>
  	  	 				
  	  	 				<label class="radio-inline"><input type="radio" id="option1" name="optradio" value=1 checked="">Yet to be evaluated</label>
						<label class="radio-inline"><input type="radio" id="option2" name="optradio" value=2>Evaluated</label>
						<label class="radio-inline"><input type="radio" id="option3" name="optradio" value=3>Challenged scripts</label>
  	  	 				
  	  	 				<input type="button" class="btn btn-success" id = "button" value="    Go    " onclick="showAnswerImagesQuestionWise()"/>
  	  	 				</div>
  	  	 				 &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
  	  	 				 <input type="button" value="Save" style = "display:none;" onclick="save()" />
  	  	 				 <iframe style = "display:none;" src="secondaryHtmlPages/one.html" id="expectedQuestionAnswerFrame" allowfullscreen="" height="100px" width="1000px">
  	  	 				 </iframe>
						 <br /><br />
						<iframe style = "display:none;" src="secondaryHtmlPages/secondFrame.html" id="answerFrame" height="500px" width="1000px"></iframe>
						<div id = "fullscreen">
							<img/>
						</div>
					</div>
				<!-- #################### TAB-5 STATISTICS ####################-->					
					<div id="statistics" class="tab-pane fade">
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
					</div>
				<!-- #################### TAB-6 UPLOAD ANSWER ####################-->
					<div id="uploadAnswer" class="tab-pane fade">
						<h2 class="sub-header" >UPLOAD ANSWER</h2>
						<br /><br />
						<div class="row">
							<div class="col-lg-3">
								<h3><span class="label label-success">SELECT THE METHOD</span></h3>
								<select id="method_selected" onchange="fun()" class="form-control" placeholder=".col-lg-4">
									<option value="none"> NoneSelected </option>
									<option value="name"> BY Typing</option>
									<option value="dept"> BY uploading word file</option>
								</select>
								
							</div>
							<div class="col-lg-4">
								<h3><span class="label label-success" id="id1">FILE NAME :</span></h3>
								<select class="form-control" id="enteredname" >
								</select>
							</div>
							<div class="col-lg-2">
								<br />
								<h3><span class="label label-success" id="id1"></span></h3>
								<input type="submit" name="submit" class="btn btn-lg btn-success" value="Go" onclick="display_doctor_start()" />
								<br/><br/>
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
									<tbody id="searchdocbody">
										
									</tbody>
							</table>
						</div>
					</div>  
				<!-- #################### TAB-7 REPORT AN ISSUES ####################-->				
					<div id="reportAnIssue" class="tab-pane fade">
						<h3><span class="label label-success">REPORT AN ISSUE</span></h3>
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
				<!-- #################### TAB-8 PROFILE SETTINGS ####################-->
					<div id="profile" class="tab-pane fade">
						<h1 class="sub-header" >Manage Profile</h1>
						<br />
						<ul class="nav nav-pills">
							<li class="active">
								<a data-toggle="tab" href="#profile_content">
									<span class="glyphicon glyphicon-th-list"></span> Edit Profile
								</a>
							</li>
							<li>
								<a data-toggle="tab" href="#change_password">
									<span class="glyphicon glyphicon-plus"></span>Change Password
								</a>
							</li>
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
									<input type="password"  class="form-control" placeholder="old password"/ >
									<input type="password"  class="form-control" placeholder="new password" />
									<input type="password"  class="form-control" placeholder="retype password" />
									<br />
									<input type="submit" class="btn btn-lg btn-primary btn-block" value="Submit" />
								</form>
							</div>
						</div>
					</div>

				</div>   <!-- end of class tab-content-->
			</div> <!-- end of right side of page size 9 waala -->
        </div>   <!-- end of main row -->
	</div>     <!-- end of container-->
    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="../staticFiles/js/jquery-1.11.2.min.js"></script>
	<script src="../staticFiles/dist/js/bootstrap.min.js"></script>
    <script src="../staticFiles/assets/js/docs.min.js"></script>
    <script src="../staticFiles/assets/js/ie10-viewport-bug-workaround.js"></script>
    <script src="../staticFiles/alertify/lib/alertify.min.js"></script>


</body>
</html>