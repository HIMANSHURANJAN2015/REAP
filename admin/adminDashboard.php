<?php
session_start();
if(isset($_SESSION["name"]))
{
  $name = $_SESSION["name"];
  $eval_email = $_SESSION["email"];
}
else
{
  header('Location:http://localhost/REAP/login.html');
}
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
    <title>Admin Dashboard</title>
  <!-- Our core javascripts -->
  <script type="text/javascript" src="../staticFiles/adminReap.js?x=<?php echo rand(0,100) ?>"></script>
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
  <style type="text/css">
      input[type=text]{
          width: 75%;
          padding: 12px 20px;
          margin-left : 20px;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
      }
      textarea {
          width: 75%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
      }

      .formfield * {
          vertical-align: middle;
      }

      input[type=submit]#question {
          width: 10%;
          background-color: #4CAF50;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
      }

      input[type=submit]:hover#question {
          background-color: #45a049;
      }

  </style>
 </head>
<body bgcolor="#00cc66" onload="init()">
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
        <a class="navbar-brand" href="#">Admin</a>
  </div>
  <div id="navbar" class="navbar-collapse collapse">
      <ul class="nav navbar-nav navbar-right">
        <!-- <li><a href="#"><?php echo $name; ?></a></li>-->
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
      <div class="tab-content">
        <div id="adminHomepage" class="tab-pane fade in active">
          <!--
          <h1 class="page-header">Admin Dashboard</h1> -->
          <ul class="nav nav-pills">
              <li class="active" style="padding:10px">
                <a data-toggle="tab" href="#answerParts" onclick="init()">
                  <span class="glyphicon glyphicon-scissors"></span> ANSWER PARTS EXTRACTION
                </a>
              </li>
              <li style="padding:10px">  
                <a data-toggle="tab" href="#bundles" onclick="init2()">
                <span class="glyphicon glyphicon-tasks"></span> BUNDLES 
                </a>
              </li>
              <li style="padding:10px">  
                <a data-toggle="tab" href="#result" onclick="resultInit()">
                <span class="glyphicon glyphicon-stats"></span> RESULT 
                </a>
              </li>
              <li style="padding:10px">  
                <a data-toggle="tab" href="#qpaper" onclick="">
                <span class="glyphicon glyphicon-file"></span>QUESTION PAPER 
                </a>
              </li>
              <li style="padding:10px">  
                <a data-toggle="tab" href="#issues" onclick="issueInit()">
                <span class="glyphicon glyphicon-exclamation-sign"></span> ISSUES 
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <br />
              <!-- ################  ####  internal tab 1 #######-->
              <div id="answerParts" class="tab-pane fade in active">
                <p class="text-success"> Run Your Image Extraction Module to get all the answer parts... It may take some time </p>
                <div class="row">
                  <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT EXAM TYPE</span></h3>
                    <select id="examTypeSelect" class="form-control" placeholder=".col-lg-4">
                    </select>
                  </div>
                  <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT SUBJECT CODE</span></h3>
                    <select id="subjectCodeSelect" class="form-control" placeholder=".col-lg-4">
                    </select>
                  </div>
                  <div class="col-lg-2">
                    <br/><br />
                    <input id = "startImageProc" type="submit" name="submit" class="btn btn-lg btn-success" value="Go" onclick="startImageProcessing() " />
                    <img id = "processing">
                  </div>
                </div>
              </div>  

              <div id = "bundles" class ="tab-pane fade" >
                <p class="text-success"> Create and assign bundles to the evaluators..from this beautiful UI. This will assist you maintaing the log of all the assignment </p>
                <div class="row">
                  <div style="width: 100%; height: 20px; border-bottom: 1px solid black; text-align: center">
                      <span style="font-size: 20px; background-color: #F3F5F6; padding: 0 10px;">
                      Step-1 Basic Information (MANDATORY)  <!--Padding is optional-->
                      </span>
                  </div>
                  <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT EXAM TYPE</span></h3>
                    <select id="examTypeBundle" class="form-control" placeholder=".col-lg-4">
                      <option>Select</option>
                    </select>
                  </div>
                  <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT DEPARTMENT</span></h3>
                    <select id="departmentBundle" class="form-control" placeholder=".col-lg-4">
                      <option>Select</option>
                    </select>
                  </div>
                  <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT SUBJECT CODE</span></h3>
                    <select id="subjectCodeBundle" class="form-control" placeholder=".col-lg-4">
                      <option>Select</option>
                    </select>
                  </div>
                  <div class="col-lg-2">
                    <br/><br />
                    <div style = "display:inline;">
                    <input type="submit" name="submit" class="btn btn-lg btn-success" value="Go" onclick="basicDetails()" /> </div>
                  </div>
                </div>
          <div id="bundleSteps" style="display:none">        
                <div class="row">
                  <br/><br/><br/><br/><br/>
                  <div style="width: 100%; height: 20px; border-bottom: 1px solid black; text-align: center">
                      <span style="font-size: 20px; background-color: #F3F5F6; padding: 0 10px;">
                      Step-2 CREATE Bundle (OPTIONAL) <!--Padding is optional-->
                      </span>
                  </div>
                   <div style = "display:inline;">
                   <br/><br/>
                    <input type="submit" name="submit" class="btn btn-lg btn-success" value="Create a Bundle" onclick="createBundle()" />
                  </div>
                </div>

                <div class="row">
                  <br/><br/><br/><br/><br/>
                  <div style="width: 100%; height: 20px; border-bottom: 1px solid black; text-align: center">
                      <span style="font-size: 20px; background-color: #F3F5F6; padding: 0 10px;">
                      Step-3 Assign Students to a Bundle <!--Padding is optional-->
                      </span>
                  </div>
                  <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT BUNDLE-ID</span></h3>
                    <select id="idBundleStudent"  class="form-control" placeholder=".col-lg-4">
                      <option>Select</option>
                    </select>
                  </div>
                  <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT STUDENTS</span></h3>
                    <h6>Mutiple select list (hold ctrl or shift (or drag with the mouse) to select more than one):</h6>
                    <select multiple id="studentsBundle" class="form-control" placeholder=".col-lg-4" style="height:100px;">
                      <option>Select</option>
                    </select>
                  </div>
                  <div class="col-lg-2">
                    <br/><br />
                    <div class="checkbox">
                      <label><input type="checkbox" id="assignNext10" value="" onclick="changeStudentMethod()">Select next 10 students</label>
                    </div>
                    
                  </div>
                  <div class="col-lg-2">
                    <br/><br />
                    <input id = "assignStudents" type="submit" name="submit" class="btn btn-lg btn-success" value="Assign Student" onclick="assignStudents()" />
                  </div>
                  <div class="col-lg-3">
                    <br/><br />
                    <h4><span class="label label-success">Total student who have taken this course =<span id="totalStud">24</span></span></h4>
                    <h4><span class="label label-success">Total student un-assigned to any bundle =<span id=totalUnAssigned>12</span></span></h4>
                    
                  </div>
                </div>

                <div class="row">
                  <br/><br/><br/><br/><br/>
                  <div style="width: 100%; height: 20px; border-bottom: 1px solid black; text-align: center">
                      <span style="font-size: 20px; background-color: #F3F5F6; padding: 0 10px;">
                      Step-4 Assign Bundle to a Evaluator <!--Padding is optional-->
                      </span>
                  </div>
                  <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT BUNDLE-ID</span></h3>
                    <select id="idBundleEvaluator" class="form-control" placeholder=".col-lg-4">
                      <option>Select</option>
                    </select>
                  </div>
                  <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT EVALUATOR</span></h3>
                    <h6>Mutiple select list (hold ctrl or shift (or drag with the mouse) to select more than one):</h6>
                    <select multiple id="evaluatorsBundle" name = "evaluatorsBundle" class="form-control" placeholder=".col-lg-4" style="height:100px;">
                      <option>Select</option>
                    </select>
                  </div>
                  <div class="col-lg-2">
                    <br/><br />
                    <input type="submit" name="submit" class="btn btn-lg btn-success" value="Assign Evaluator" onclick="assignEvaluators()" />
                  </div>
                </div>
            </div>    

                <br /><br /><br />
              </div>

              <div id = "result" class ="tab-pane fade">
                <p class="text-success"> U can see the entire marks scored by each candidate</p>
                <div class="row">
                  <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT EXAM TYPE</span></h3>
                    <select id="examTypeResult" class="form-control" placeholder=".col-lg-4">
                    </select>
                  </div>
                  <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT DEPARTMENT</span></h3>
                    <select id="deptResult" class="form-control" placeholder=".col-lg-4">
                    </select>
                  </div>
                  <div class="col-lg-2">
                    <br/><br />
                    <input type="submit" name="submit" class="btn btn-lg btn-success" value="Go" onclick="fetchResult()" />
                  </div>
                </div>
                <div class="table-responsive">
                	<table class="table table-hover">
                		<thead id="resultHead">
                		</thead>
                		<tbody id="resultBody">
                		</tbody>
                	</table>
                </div>
             	</div>

              <div id= "qpaper" class="tab-pane fade">
                  <form method="post" enctype="multipart/form-data" action="http://localhost/REAP/dataFetchingFiles/fileUpload.php" >
                          <input type="hidden" name="MAX_FILE_SIZE" value="100000" />
                          <input type="file" name="filename" value = ""/>
                          <input type="submit" value="Upload" name="Upload" />
                  </form> 
                  <form id = "QandA" method="POST" action="http://localhost/REAP/dataFetchingFiles/insertQuestions.php">
                      <h3>Question 1</h3><br><br>
                        <label>a</label><input class = "que" id="1aq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="1aa"></textarea></p><br>
                        <label>b</label><input class = "que" id="1bq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="1ba"></textarea></p><br>    
                        <label>c</label><input class = "que" id="1cq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="1ca"></textarea></p><br>    
                        <label>d</label><input class = "que" id="1dq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="1da"></textarea></p><br>    
                        <label>e</label><input class = "que" id="1eq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="1ea"></textarea></p><br><br>    
                      <h3>Question 2</h3><br><br>
                        <label>a</label><input class = "que" id="2aq" size = "48px" placeholder="Enter Question 1a here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="2aa"></textarea></p><br>
                        <label>b</label><input class = "que" id="2bq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="2ba"></textarea></p><br>    
                        <label>c</label><input class = "que" id="2cq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="2ca"></textarea></p><br>    
                        <label>d</label><input class = "que" id="2dq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="2da"></textarea></p><br>    
                        <label>e</label><input class = "que" id="2eq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="2ea"></textarea></p><br><br>
                      <h3>Question 3</h3><br><br>
                        <label>a</label><input class = "que" id="3aq" size = "48px" placeholder="Enter Question 1a here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="3aa"></textarea></p><br>
                        <label>b</label><input class = "que" id="3bq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="3ba"></textarea></p><br>    
                        <label>c</label><input class = "que" id="3cq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="3ca"></textarea></p><br>    
                        <label>d</label><input class = "que" id="3dq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="3da"></textarea></p><br>    
                        <label>e</label><input class = "que" id="3eq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="3ea"></textarea></p><br><br>  
                      <h3>Question 4</h3><br><br>
                        <label>a</label><input class = "que" id="4aq" size = "48px" placeholder="Enter Question 1a here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="4aa"></textarea></p><br>
                        <label>b</label><input class = "que" id="4bq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="4ba"></textarea></p><br>    
                        <label>c</label><input class = "que" id="4cq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="4ca"></textarea></p><br>    
                        <label>d</label><input class = "que" id="4dq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="4da"></textarea></p><br>    
                        <label>e</label><input class = "que" id="4eq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="4ea"></textarea></p><br><br>  
                      <h3>Question 5</h3><br><br>
                        <label>a</label><input class = "que" id="5aq" size = "48px" placeholder="Enter Question 1a here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="5aa"></textarea></p><br>
                        <label>b</label><input class = "que" id="5bq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="5ba"></textarea></p><br>    
                        <label>c</label><input class = "que" id="5cq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="5ca"></textarea></p><br>    
                        <label>d</label><input class = "que" id="5dq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="5da"></textarea></p><br>    
                        <label>e</label><input class = "que" id="5eq" size = "48px" placeholder="Enter Question here !" type="text"/><br>
                        <p class="formfield"><label>Ans</label><textarea rows = "8" cols = "50" id="5ea"></textarea></p><br><br>        
                        
                  </form>
                  <input type="submit" form = "QandA"id="question"  value="Submit">
              </div>

              <div id = "issues" class ="tab-pane fade">
                <p class="text-success"> We have been notified about the following issues...Kindly look it !!</p>
                <div id = "issueContainer">
                <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT EXAM TYPE</span></h3>
                    <select id="examTypeIssue" class="form-control" placeholder=".col-lg-4">
                      <option>Select</option>
                    </select>
                </div>
                <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT DEPARTMENT</span></h3>
                    <select id="departmentIssue" class="form-control" placeholder=".col-lg-4">
                      <option>Select</option>
                    </select>
                </div>
                <div class="col-lg-3">
                    <h3><span class="label label-success">SELECT SUBJECT CODE</span></h3>
                    <select id="subjectCodeIssue" class="form-control" placeholder=".col-lg-4">
                      <option>Select</option>
                    </select>
                </div><br><br>
                <div class="col-lg-3">
                    <input type="submit" name="submit" class="btn btn-lg btn-success" value="Get Errors" onclick="getErrors()" />
                </div>
                </div>
                <div id = "details" style = "display:none;"></div>
                <table id = "issueImages" style = "display:none;" border = "1">
                  <col width = "100">
                </table>
              </div>
        </div> 
      </div>   <!-- end of class tab-content-->
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