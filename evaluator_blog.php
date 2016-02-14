<!DOCTYPE html>
<!-- hi buddy..... this is the rough prototype of our UI....This will change -->
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!--<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">-->
  <link rel="stylesheet" href="static/bootstrap.min.css">
  <!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>-->
  <script src="static/jquery.min.js"></script>
  <!--<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>-->
  <script src="static/bootstrap.min.js"></script>
  <script type="text/javascript" src="reap.js"></script>
  <style>
    /* Set height of the grid so .sidenav can be 100% (adjust if needed) */
    .row.content {height: 1500px}
    
    /* Set gray background color and 100% height */
    .sidenav {
      background-color: #f1f1f1;
      height: 100%;
    }
    
    /* Set black background color, white text and some padding */
    footer {
      background-color: #555;
      color: white;
      padding: 15px;
    }
    
    /* On small screens, set height to 'auto' for sidenav and grid */
    @media screen and (max-width: 767px) {
      .sidenav {
        height: auto;
        padding: 15px;
      }
      .row.content {height: auto;} 
    }
    #answerImage
    {
      float:left;
      width:1000px;
      overflow-y: auto;
      height: 500px;
    }
  </style>
</head>
<body>

<div class="container-fluid">
  <div class="row content">
    <!--This is for side navigation -->
    <div class="col-sm-3 sidenav">
      <h4>Hello, Mr Anthony</h4>
      <ul class="nav nav-pills nav-stacked">
        <li class="active"><a href="#section1">Evaluation</a></li>
        <li><a href="#section2">Pending Queue</a></li>
        <li><a href="#section3">Statistics</a></li>
        <li><a href="#section3">Extras</a></li>
      </ul><br>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="Search Blog..">
        <span class="input-group-btn">
          <button class="btn btn-default" type="button">
            <span class="glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    </div>

    <div class="col-sm-9" onchange="reapify()">
      <br><br>
      <label>USN</label> 
      <select id="usn">
        <option value="1pi12cs059">1PI12CS059</option>
        <option value="1pi12cs060">1PI12CS060</option>
        <option value="1pi12cs061">1PI12CS061</option>
        <option value="1pi12cs072">1PI12CS072</option>
      </select>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      <label>TEST TYPE</label> 
      <select id="type">
        <option value="t1">T1</option>
        <option value="t2">T2</option>
        <option value="t3">T3</option>
        <option value="se">SEE</option>
      </select>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
      <label>SUBJECT CODE</label> 
      <select id="subjectCode">
        <option value="12cs405">12CS405</option>
      </select>
      <br><br>
      <div id="answerImage">
      </div>


  </div>
</div>

<footer class="container-fluid">
  <p>Footer Text</p>
</footer>

</body>
</html>
