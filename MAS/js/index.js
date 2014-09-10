var $;
var Handlebars;
var testing = true;
var results = {
  prescreen: [],
  rel1: [],
  rel2: [],
  irr1: [],
  irr2: [],
  surveyResponses: []
};

var clearScreen = function(nextScreen) {
  $('#page-title').empty();
  $('#content-instructions').empty();
  $('#content-text').empty();
  if (nextScreen < 100) {
    document.getElementById('button-next').onclick = function() { next(nextScreen) };
  }
};

var showI = function () {
  $('#content-instructions').show();  
  $('#content-text').hide();
};
var showT = function () {
  $('#content-instructions').hide();  
  $('#content-text').show();
};

var runActivities = function() {
  console.log("starting activity " + progress.gameID);
  if (progress.gameID > 3) { console.log("Done with all the activities!"); next(7); return; }
  currActivity = condition.activityOrder[progress.gameID];
  progress.page = 100;
  progress.stage = currActivity;
  progress.trialsLeft = 10;
  if (testing) { progress.trialsLeft = 2; }
  runActivity();
};

var start = function() {
  showI();
  document.getElementById('page-title').innerHTML = "";
  document.getElementById('content-instructions').innerHTML = '<h2>When instructed, press Next to begin.</h2>';
  document.getElementById('button-next').onclick = function() { next(0); };
};

var next = function(id) {
    switch(id) {
      case 0: // Display consent screen
        clearScreen(1);
        showT();
        document.getElementById('content-text').innerHTML = '<object type="text/html" style="width:700px;height:450px" data="consent.html" ></object>';
        break;
      case 1: // Display prescreen
        clearScreen(2);
        document.getElementById('page-title').innerHTML = "<h1>PRE-SCREEN SURVEY</h1>"
        document.getElementById('content-text').innerHTML = '<object type="text/html" style="width:700px;height:400px" data="prescreen.html" ></object>';
        break;
      case 2: // Display loading page
        clearScreen(3);
        showI();
        $('#button-next').hide();
        document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;" data="postPrescreen.html" ></object>';
        if(!testing) { t=2000; }
        setTimeout(function() { next(3) }, t);
        break;
      case 3: // Display pre-screen results screen
        clearScreen(4);
        $('#button-next').show();
        document.getElementById('page-title').innerHTML = "<h1>PRE-SCREEN RESULTS</h1>"
        switch (condition.agency) {
          case "high":
            document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;height:120px;margin:0;" data="groupPlacementHigh.html" ></object>';
            break; 
          case "low":
            document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;height:120px;margin:0;" data="groupPlacementLow.html" ></object>';
            break;
          default:
            console.log("404: Agency category not found.");
        }
        break;
      case 4: // Display group placement intro screen
        clearScreen(5);
        document.getElementById('page-title').innerHTML = "<h1>GROUP ASSIGNMENT</h1>" //is this the right word? look up
        document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;height:140px;margin-top:-20px;" data="groupIntro.html" ></object>';
        break;
      case 5: // Display members info screen
        clearScreen(6);
        showT();
        document.getElementById('page-title').innerHTML = "<h1>GROUP ASSIGNMENT</h1>" //is this the right word? look up
        document.getElementById('content-text').innerHTML = '<object type="text/html" style="width:700px;height:400px" data="groupInfo.html" ></object>';
        break;
      case 6: // gameplay
        if (testing) { progress.gameID = 3; }
        runActivities();
        break;
      case 7: // surveys!!!
        console.log("surveys");
        runSurveys(0);
        break;
      case 8: //debrief
        clearScreen(9);
        showI();
        document.getElementById('page-title').innerHTML = "<h1>DEBRIEF</h1>";
        var s = '<object type="text/html" style="width:700px;height:120px;margin:0;" data="debrief.html" ></object>';
        document.getElementById('content-instructions').innerHTML = s;
        break;
      default:
        console.log("404");

    }
  };