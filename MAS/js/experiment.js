var agencyConditions = ["low", "high"];
var gameConditions = ["Rel", "Irr", "Both", "Neither"];
var activities = [0,1,2,3];
if(testing) { activities = [0,0,0,0]; }
/* Activities
** 0: Rel1
** 1: Rel2
** 2: Irr1
** 3: Irr2
*/

var randomPick = function (list) {
	if (list.length == 0) { return null; }
	else {
		return (list[Math.floor(Math.random() * list.length)]);
	}
};

var randomShuffle = function (list) {
	//Fisher-Yates (Knuth) Shuffle
	var currentIndex = list.length, temporaryValue, randomIndex;

	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = list[currentIndex];
		list[currentIndex] = list[randomIndex];
		list[randomIndex] = temporaryValue;
	}

	return list;
};

var condition = {
  agency: randomPick(agencyConditions),
  game: randomPick(gameConditions),
  activityOrder: randomShuffle(activities)
};

var progress = {
	page: 0,
	stage: 0,
	gameID: 0,
	trialsLeft: 0
};

var clearScreen2 = function(nextScreen) {
  $('#page-title').empty();
  $('#content-instructions').empty();
  $('#content-text').empty();
  progress.page = nextScreen;
  document.getElementById('button-next').onclick = function() { runActivity() };
};

var gameInstructions = function() {
	showI();
	document.getElementById('page-title').innerHTML = "<h1>INSTRUCTIONS</h1>";
	var s = '<object type="text/html" style="width:700px;height:120px;margin:0;" data="inst'+progress.stage.toString()+'.html" ></object>';
	document.getElementById('content-instructions').innerHTML = s;
};

var practicePrep = function() {
	showI();
	document.getElementById('page-title').innerHTML = "<h1>PRACTICE ROUND</h1>";
    document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;margin:-11px;" data="practicePrep.html" ></object>';
};
var gameplay = function(page) {
	console.log("Trials left: " + progress.trialsLeft);
	scoredResult();
	//do gameplay stuff here
	//return result
	//go back to case 104
};
var scoredPrep = function() {
	showI();
	document.getElementById('page-title').innerHTML = "<h1>SCORED ROUNDS</h1>";
    document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;margin:-20px;" data="scoredPrep.html" ></object>';
};
var scoredResult = function() {
	showI();
	document.getElementById('page-title').innerHTML = "<h1>ROUND RESULTS</h1>";
    document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;margin:-20px;" data="roundResults.html" ></object>';
};
var pDilemma = function() {
	showI();
	document.getElementById('page-title').innerHTML = "<h1>OVERALL RESULTS</h1>";
    document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;margin:-20px;" data="pDilemma.html" ></object>';
};

var runActivity = function () {
	/* Page: which page in the activity it is
	** stage: which game it is
	** gameID: how many games you've done + 1 (which game youre on)
	** trialsLeft: trials left 0 < x < 11
	*/
	switch (progress.page) {
		case 100: //game instructions
			clearScreen2(101);
			gameInstructions();
			break;
		case 101: //practice round prep
			clearScreen2(102);
			practicePrep();
			break;
		case 102: //practice round
			clearScreen2(103);
			gameplay();
			break;
		case 103: //scored rounds prep
			clearScreen2(104);
			scoredPrep();
			break;
		case 104: //scored rounds process
			if (progress.trialsLeft > 0) {
				progress.trialsLeft -= 1;
				clearScreen2(104);
				gameplay(301);
			}
			else {
				progress.page = 105;
				console.log("Finished trials");
				runActivity();
			}
			break;
		case 105: //summary of rounds and pdilemma
			clearScreen2(106);
			console.log("pdilemma!");
			pDilemma();
			break;
		case 106: //end
			console.log("done!!");
			progress.gameID += 1;
			runActivities();
			break;
	}
};