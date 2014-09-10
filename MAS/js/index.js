var $;
var Handlebars;
var testing = true;

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
}
var showT = function () {
  $('#content-instructions').hide();  
  $('#content-text').show();
}

var runHelper = function(id) {
  currActivity = condition.activityOrder[id];
  var done = runActivity(100, currActivity);
}

var runActivities = function(id) {
  console.log("starting activity " + id);
  if (id > 3) { return true; }
  currActivity = condition.activityOrder[id];
  runActivity(100, currActivity, id, 10);
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
        if(testing) { next(3); }
        else { (function() { next(3) }, 2000); }
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
      case 6: // should a group cohesion task go here?
        runActivities(0);
        break;
      case 7:
        //experiments go here!
      default:
        console.log("404");

    }
  };