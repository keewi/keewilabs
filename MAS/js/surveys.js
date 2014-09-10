var clearScreen3 = function(nextScreen) {
  $('#page-title').empty();
  $('#content-instructions').empty();
  $('#content-text').empty();
  document.getElementById('button-next').onclick = function() { runSurveys(nextScreen) };
};

var groupFeedback = function(id) {

};

var runSurveys = function(id) {
	switch(id) {
		case 0: //group feedback survey
	        clearScreen3(1);
	        document.getElementById('page-title').innerHTML = "<h1>GROUP FEEDBACK</h1>"
	        document.getElementById('content-text').innerHTML = '<object type="text/html" style="width:700px;height:400px" data="groupFeedback.html" ></object>';
	        break;
		case 1: //affect survey
	        clearScreen3(2);
	        document.getElementById('page-title').innerHTML = "<h1>SURVEY (1 OF n)</h1>"
	        document.getElementById('content-text').innerHTML = '<object type="text/html" style="width:700px;height:400px" data="survey1.html" ></object>';
			break;
		case 2: //more stuff
	        clearScreen3(3);
	        document.getElementById('page-title').innerHTML = "<h1>SURVEY (2 OF n)</h1>" //page subtitle? or progress bar someplace?
	        document.getElementById('content-text').innerHTML = '<object type="text/html" style="width:700px;height:400px" data="survey2.html" ></object>';
	        break;
	    case 3:
	    	next(8);
		default:
            console.log("404: Survey not found.");
    }
};