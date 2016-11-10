'use strict';

var firstPersonalQuestionAnswer = prompt('Do I own a dog?').toLowerCase();
if (firstPersonalQuestionAnswer === 'yes' || firstPersonalQuestionAnswer === 'y') {
  alert(firstPersonalQuestionAnswer + ' that is correct');}
else if (firstPersonalQuestionAnswer === 'no' || firstPersonalQuestionAnswer === 'n'){
  alert(firstPersonalQuestionAnswer + ' is the wrong answer.');
}else{
  alert('you did not answer my question');
}
var secondQuestionAnswer = prompt('Do I like to cook?').toLowerCase();
if (secondQuestionAnswer === 'yes' || secondQuestionAnswer === 'y'){
  alert(secondQuestionAnswer + ' Definitely.');}
else if (secondPersonalQuestionAnswer === 'no' || secondPersonalQuestionAnswer === 'n'){
  alert(secondPersonalQuestionAnswer + ' you are incorrect.');
}else{
  alert('you are not speaking English.');
}
var thirdQuestionAnswer = prompt('Do I like to watch sports?').toLowerCase();
if(thirdQuestionAnswer === 'no' || thirdQuestionAnswer === 'n') {
  alert(thirdQuestionAnswer + ' I do not like to watch sports, especially basketball.');}
else if (thirdQuestionAnswer === 'yes' || thirdQuestionAnswer === 'y'){
  alert('Sorry, but ' + thirdQuestionAnswer + ' is not the correct answer.');
}else{
  alert('You are not making any sense.');
}
var fourthQuestionAnswer = prompt('Am I a musician?').toLowerCase();
if(fourthQuestionAnswer === 'yes' || fourthQuestionAnswer === 'y') {
  alert(fourthQuestionAnswer + ' you say? that is right.');}
else if (fourthQuestionAnswer === 'no' || fourthQuestionAnswer === 'n') {
  alert(fourthQuestionAnswer + 'is not correct.Try again');
}else{
  alert('I cannot understand you.');
}
var fifthQuestionAnswer = prompt('Do I like the rain?').toLowerCase();
if(fifthQuestionAnswer === 'yes' || fifthQuestionAnswer === 'y') {
  alert(fifthQuestionAnswer + ' Definitely!');}
else if(fifthQuestionAnswer === 'no' || fifthQuestionAnswer === 'n') {
  alert(fifthQuestionAnswer + ' ? sorry, try again.');
}else{
  alert('no idea what language you are speaking!');
}
for(var i = 0; i <= 3; i += 1){
  var guessMyNumber = prompt('Can you guess a number 1-20?');
  console.log(typeof guessMyNumber);
  if(guessMyNumber > 11) {
    alert('Your guess is too high!');
  }else if(guessMyNumber < 11){
    alert('That is too low!');}
  else if(guessMyNumber == 11){
    alert('That is correct!');
    break;
  }
}

var seventhQuestionAnswer = prompt('Can you guess an instrument I can play?');
var myAnswerArray = ['piano', 'guitar','ukulele'];
for(var seventh = 0; seventh < myAnswerArray.length; seventh += 1){
  console.log(myAnswerArray[i]);
  if(seventhQuestionAnswer === myAnswerArray[seventh]) {
    alert('Yes, you are correct. I play piano, guitar, and ukulele.');
    break;
  }else if(seventhQuestionAnswer != myAnswerArray[seventh]){
    alert('guess again.');
  }}
