var $;
var Handlebars;

var clearScreen = function(nextScreen) {
  $('#page-title').empty();
  $('#content-instructions').empty();
  $('#content-instructions').hide();  
  $('#content-text').empty();
  document.getElementById('button-next').onclick = function() { next(nextScreen) };
};

var next = function(id) {
    switch(id) {
      case 0: // Display consent screen
        clearScreen(1);
        document.getElementById('content-text').innerHTML = '<object type="text/html" style="width:700px;height:500px" data="consent.html" ></object>';
        break;
      case 1: // Display prescreen
        clearScreen(2);
        document.getElementById('page-title').innerHTML = "<h1>PRE-SCREEN SURVEY</h1>"
        document.getElementById('content-text').innerHTML = '<object type="text/html" style="width:700px;height:500px" data="prescreen.html" ></object>';
        break;
      case 2: // Display loading page
        clearScreen(3);
        $('#content-instructions').show();
        $('#button-next').hide();
        document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;" data="postPrescreen.html" ></object>';
        setTimeout(function() { next(3) }, 2000);
        break;
      case 3: // Display pre-screen results screen
        clearScreen(4);
        $('#button-next').show();
        $('#content-instructions').show();
        document.getElementById('page-title').innerHTML = "<h1>PRE-SCREEN RESULTS</h1>"
        switch (condition.agency) {
          case "high":
            document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;" data="groupPlacementHigh.html" ></object>';
            break; 
          case "low":
            document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;" data="groupPlacementLow.html" ></object>';
            break;
          default:
            console.log("404: Agency category not found.");
        }
        break;
      case 4: // Display group placement intro screen
        clearScreen(5);
        document.getElementById('page-title').innerHTML = "<h1>GROUP ASSIGNMENT</h1>" //is this the right word? look up
        document.getElementById('content-text').innerHTML = '<object type="text/html" style="width:700px;height:500px" data="groupIntro.html" ></object>';
        break;
      case 5: // Display members info screen
        clearScreen(6);
        document.getElementById('page-title').innerHTML = "<h1>GROUP ASSIGNMENT</h1>" //is this the right word? look up
        $('#content-instructions').hide();
        document.getElementById('content-text').innerHTML = '<object type="text/html" style="width:700px;height:500px" data="groupInfo.html" ></object>';
        break;
      case 6: // should a group cohesion task go here?
        clearScreen(7);
        document.getElementById('content-text').innerHTML = '<h1>Group cohesion task?</h1>';
      case 7:
        //experiments go here!
      default:
        console.log("404");

    }
  };