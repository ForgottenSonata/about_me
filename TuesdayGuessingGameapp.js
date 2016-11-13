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
  alert(thirdQuestionAnswer + ' is an incorrect answer.' );
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
