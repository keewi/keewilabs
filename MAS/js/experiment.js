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

var results = {
	rel1: [],
	rel2: [],
	irr1: [],
	irr2: [],
	prescreen: [],
	
};
var clearScreen2 = function(nextScreen, stage, id, trialsLeft) {
  $('#page-title').empty();
  $('#content-instructions').empty();
  $('#content-text').empty();
  if (nextScreen < 100) {
    document.getElementById('button-next').onclick = function() { next(nextScreen) };
  } else if (nextScreen < 200) {
    document.getElementById('button-next').onclick = function() { runActivity(nextScreen, stage, id, trialsLeft) };
  }
};

var gameInstructions = function(stage) {
	showI();
	document.getElementById('page-title').innerHTML = "<h1>INSTRUCTIONS</h1>";
	var s = '<object type="text/html" style="width:700px;height:120px;margin:0;" data="inst'+stage.toString()+'.html" ></object>';
	document.getElementById('content-instructions').innerHTML = s;
};

var practicePrep = function(stage) {
	showI();
	document.getElementById('page-title').innerHTML = "<h1>PRACTICE ROUND</h1>";
    document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;margin:-11px;" data="practicePrep.html" ></object>';
};
var gameplay = function(stage, trial) {
	console.log(trial);
	//do gameplay stuff here
	//return result
	//go back to case 104
};
var scoredPrep = function(stage) {
	showI();
	document.getElementById('page-title').innerHTML = "<h1>SCORED ROUNDS</h1>";
    document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;margin:-20px;" data="scoredPrep.html" ></object>';
};
var scoredResult = function(stage) {
	showI();
	document.getElementById('page-title').innerHTML = "<h1>ROUND RESULTS</h1>";
    document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;margin:-20px;" data="scoredPrep.html" ></object>';
};
var pDilemma = function(stage) {
	showI();
	document.getElementById('page-title').innerHTML = "<h1>ROUND RESULTS</h1>";
    document.getElementById('content-instructions').innerHTML = '<object type="text/html" style="width:700px;margin:-20px;" data="scoredPrep.html" ></object>';
};

var runActivity = function (page, stage, id, trialsLeft) {
	/* Page: which page in the activity it is
	** stage: which game it is
	** id: how many games you've done + 1 (which game youre on)
	** trialsLeft: trials left 0 < x < 11
	*/
	var trials = 10-trialsLeft; // 0 <= x < 10
	switch (page) {
		case 100: //game instructions
			clearScreen2(101, stage, id, trialsLeft);
			gameInstructions(stage);
			break;
		case 101: //practice round prep
			clearScreen2(102, stage, id, trialsLeft);
			practicePrep(stage);
			break;
		case 102: //practice round
			clearScreen2(103, stage, id, trialsLeft);
			gameplay(stage, trials);
			break;
		case 103: //scored rounds prep
			clearScreen2(104, stage, id, trialsLeft);
			scoredPrep(stage);
			break;
		case 104: //scored rounds process
			if (trialsLeft > 0) {
				trialsLeft -= 1;
				clearScreen2(104, stage, id, trialsLeft);
				gameplay(stage, trials);
			}
			else {
				console.log("Finished trials");
				runActivity(105, stage, id, trialsLeft);
			}
			break;
		case 105: //summary of rounds and pdilemma
			clearScreen2(106, stage, id, trialsLeft);
			console.log("old id is "+id);
			console.log("pdilemma!");
			pDilemma(stage);
			break;
		case 106: //end
			console.log("done!!");
			id += 1;
			runActivities(id);
			break;
	}
};