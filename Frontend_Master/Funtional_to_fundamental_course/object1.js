function personalQuestion(friend) {
  this.friend = friend;
}
personalQuestion.prototype.ask = function (question) {
  console.log(this.friend, question);
};
var deepJS = new personalQuestion('Suzy');
var reactJS = new personalQuestion('Zaw');
deepJS.ask('Hey Are you single?');
reactJS.ask('Yes,!I am.');
