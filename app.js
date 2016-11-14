'use strict';


var answerTally = 0;

function firstQuestion(){
  var firstPersonalQuestionAnswer = prompt('Do I own a dog?').toLowerCase();

  console.log('User reponded to the first question with: ' + firstPersonalQuestionAnswer, '  Correct answer is: yes');

  if (firstPersonalQuestionAnswer === 'yes' || firstPersonalQuestionAnswer === 'y'){
    alert( ' that is correct');
  } else if (firstPersonalQuestionAnswer === 'no' || firstPersonalQuestionAnswer === 'n'){
    alert(' that is the wrong answer.');
  } else {
    alert(' you did not answer my question');
  }
  console.log('The correct answer tally after the first question: ' + answerTally);
}

//question 2
function secondQuestion(){
  var secondQuestionAnswer = prompt('Do I like to cook?').toLowerCase();

  console.log('User answered the second question with: ' + secondQuestionAnswer, ' correct answer is: yes');

  if (secondQuestionAnswer === 'yes' || secondQuestionAnswer === 'y'){
    alert(' Definitely.');
  } else if (secondPersonalQuestionAnswer === 'no' || secondPersonalQuestionAnswer === 'n'){
    alert(' you are incorrect.');
  } else {
    alert('you are not speaking English.');
  }
  console.log('The correct answer tally after the second question is: ' + answerTally);
}
//question 3
function thirdQuestion(){
  var thirdQuestionAnswer = prompt('Do I like to watch sports?').toLowerCase();

  console.log('User responded to the third question with: ' + thirdQuestionAnswer, ' Correct answer is: no');

  if(thirdQuestionAnswer === 'no' || thirdQuestionAnswer === 'n'){
    alert('no, I do not like to watch sports, especially basketball.');
  } else if (thirdQuestionAnswer === 'yes' || thirdQuestionAnswer === 'y'){
    alert('Sorry, you are incorrect!');
  } else {
    alert('You are not making any sense.');
  }
  console.log('The correct answer tally after the third question is: ' + answerTally);
}
//question 4
function fourthQuestion(){
  var fourthQuestionAnswer = prompt('Am I a musician?').toLowerCase();
  console.log('User answered the fourth question with ' + fourthQuestionAnswer, ' Correct answer is:no');
  if(fourthQuestionAnswer === 'yes' || fourthQuestionAnswer === 'y') {
    alert(fourthQuestionAnswer + ' you say? that is right.');
  } else if (fourthQuestionAnswer === 'no' || fourthQuestionAnswer === 'n'){
    alert(fourthQuestionAnswer + 'is not correct.Try again');
  } else {
    alert('I cannot understand you.');
  }
  console.log('The correct answer tally after the fourth question is: ' + answerTally);
}
//question 5
function fifthQuestion(){
  var fifthQuestionAnswer = prompt('Do I like the rain?').toLowerCase();
  console.log('User answered the fifth question with ' + fifthQuestionAnswer, ' and the correct answer is: yes');
  if(fifthQuestionAnswer === 'yes' || fifthQuestionAnswer === 'y') {
    alert(fifthQuestionAnswer + ' Definitely!');
  } else if(fifthQuestionAnswer === 'no' || fifthQuestionAnswer === 'n') {
    alert(fifthQuestionAnswer + ' ? sorry, try again.');
  } else {
    alert('no idea what language you are speaking!');
  }
  console.log('The correct answer tally after the fifth question: ' + answerTally);
}
//question 6
function sixthQuestion(){
  for(var i = 0; i <= 3; i += 1){
    var guessMyNumber = prompt('Can you guess a number 1-20?');
    console.log(typeof guessMyNumber);
    if(guessMyNumber > 11) {
      alert('Your guess is too high!');
    } else if(guessMyNumber < 11){
      alert('That is too low!');
    } else if(guessMyNumber == 11){
      alert('That is correct!');
      break;
    }
    console.log('The correct answer tally after the sixth question : ' + answerTally);
  }
}

//question 7
function seventhQuestion(){
  var seventhQuestionAnswer = prompt('Can you guess an instrument I can play?');
  var myAnswerArray = ['piano', 'guitar','ukulele'];
  console.log('The guess is: ' , seventhQuestionAnswer, '  Correct answers are: piano, guitar, and ukulele');
  for(var x = 0; x < 5; x++){
    if(seventhQuestionAnswer.toLowerCase() === myAnswerArray[0]) {
      x = 5;
      answerTally += 1;
      alert('Yes, you are correct. I play piano. I also play guitar and ukulele.');
    } else if(seventhQuestionAnswer.toLowerCase() != myAnswerArray[1]){
      x = 5;
      answerTally += 1;
      alert('Yes. I play guitar! I also play piano and ukulele.');
    } else if(seventhQuestionAnswer.toLowerCase() === myAnswerArray[2]) {
      x = 5;
      answerTally += 1;
      alert('Yes I play the ukulele. I also play piano and guitar.');
    } else {
      alert('I do not know how to play that instrument.');
      seventhQuestionAnswer = prompt('Try and guess again!');
    }
  }
}

firstQuestion();
secondQuestion();
thirdQuestion();
fourthQuestion();
fifthQuestion();
sixthQuestion();
seventhQuestion();

//current answer tally

console.log('The correct answer tally after the seventh question.');
//Final answer tally
console.log('user answered ' + 'of the seven questions asked.');

//prompt to show at the end of guessing game
if (answerTally <= 4){
  alert('You got ' + answerTally + ' out of 7 correct. Better luck next time!');
} else if (answerTally === 7){
  alert('You got ' + answerTally + ' out of 7 correct. Perfect score!');
} else {
  alert(' You got ' + answerTally + ' out of 7 correct. Not too shabby!');
}
