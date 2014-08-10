var $;
var Handlebars;

var displayPrescreen = function() {
  var prescreen = document.createElement('div');
  var questions = ["major", "gender", "hair-color", "eye-color", "height", "kk-pref", "pA", "pB", "pC"]
  var q1 = document.createElement("INPUT");
  q1.setAttribute("type", "text");
  q1.setAttribute("placeholder","ex. major");
  q1.setAttribute("name","major");
  var q2 = document.createElement("INPUT");
  prescreen.appendChild(q1);
  prescreen.setAttribute("id", "prescreen");
  document.getElementById("content-text").appendChild(prescreen);
};

var next = function(id) {
    switch(id) {
      case 0: // Display consent screen
        console.log("Displaying consent screen");
        $('#content-instructions').hide();
        // document.getElementById('content-text').innerHTML = consent;
        document.getElementById('content-text').innerHTML = '<object type="text/html" style="width:700px;height:500px" data="consent.html" ></object>';
        // document.getElementById('button-next').value = "Continue";
        document.getElementById('button-next').onclick = function() {next(1)};
        break;
      case 1: // Display prescreen
        console.log("Displaying prescreen screen");
        document.getElementById('page-title').innerHTML = "<h1>PRE-SCREEN SURVEY</h1>"
        // document.getElementById('button-next').value = "Next";
        $('#content-text').empty();
        document.getElementById('content-text').innerHTML = '<object type="text/html" style="width:700px;height:500px" data="prescreen.html" ></object>';
        document.getElementById('button-next').onclick = function() {next(2)};        
        break;
      case 2: // Display loading page
        console.log("Displaying loading screen");
        $('#content-text').empty();
        $('#page-title').empty();
        $('#content-instructions').show();
        $('#button-next').hide();
        document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;" data="postPrescreen.html" ></object>';
        setTimeout(function() {
          next(3)}, 2000);
        break;
      case 3: // Display pre-screen results screen
        console.log("Displaying pre-screen results screen");
        $('#content-instructions').empty();
        $('#button-next').show();
        document.getElementById('page-title').innerHTML = "<h1>PRE-SCREEN RESULTS</h1>"
        switch (condition.substring(0,4)) {
          case "high":
            document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;" data="groupPlacementHigh.html" ></object>';
            break; 
          default:
            document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;" data="groupPlacementLow.html" ></object>';
        }
        console.log(this.condition);
        document.getElementById('button-next').onclick = function() {next(4)};
        break;
      case 4: // Display group placement intro screen
        console.log("Displaying group placement intro screen");
        document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;height:500px" data="groupIntro.html" ></object>';
        document.getElementById('button-next').onclick = function() {next(5)};
        break;
      case 5: // Display members info screen
        console.log("Displaying members info screen");
        document.getElementById('button-next').onclick = function() {next(6)};
        break;
      default:
        console.log("404");

    }
  };


  //its just var index = { next: function() { … } };
