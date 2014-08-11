var agencyConditions = ["low", "high"]; //should we add a none?
var gameConditions = ["Rel", "Irr", "All", "None"];

var condition = {
  agency: agencyConditions[Math.floor(Math.random() * 2)],
  game: gameConditions[Math.floor(Math.random() * 4)]
};