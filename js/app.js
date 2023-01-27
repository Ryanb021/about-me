'use strict';
let score = 0;

function helloThere() {
  let username = prompt('Hi there! Will you please introduce yourself?'); {
    alert('Hello ' + username + '! Welcome to my page and get to know a little bit about me.');
  }
}
helloThere();

function oldJob() {
  let formerJob = prompt('Will you believe me if I said I used to be a Radio Jock? Yes or No only.').toLowerCase();
  if (formerJob === 'yes' || formerJob === 'y') {
    //console.log('Damn right! I used to be a Radio Jock!');
    alert('Damn right! I used to be a Radio Jock!');
    score++;
  } else if (formerJob === 'no' || formerJob === 'n') {
    //console.log('Wrong! Try again. I am sure you know the answer my friend.');
    alert('Wrong there my friend. I used to be a Radio Jock.');
  } else {
    //console.log('Yes or No only buddy.');
    alert('Come on it is so simple. Yes or No only. Missed your chance.');
  }
}
oldJob();

function priorService() {

  let serviceStatus = prompt('Am I a Veteran or not? Yes or No only.').toLowerCase();
  if (serviceStatus === 'yes' || serviceStatus === 'y') {
    //console.log('You got that right!')
    alert('You got that right!');
    score++;
  } else if (serviceStatus === 'no' || serviceStatus === 'n') {
    //console.log('Negative shipmate! I am a Veteran. US NAVY Veteran.');
    alert('Negative shipmate! I am a Veteran. US NAVY Veteran.');
  } else {
    //console.log('Come on man! Yes or No only.');
    alert('Come on man! Yes or No only. Moving on then.');
  }
}
priorService();

function oldStation() {
  let stationCountry = prompt('So now that you know I used to be in the NAVY, will you believe me if I said I was stationed in Japan for 15 years? Yes or No again.').toLowerCase();
  if (stationCountry === 'yes' || stationCountry === 'y') {
    //console.log('Yes you are right. I love Japan.');
    alert('Yes you are right. I love Japan.');
    score++;
  } else if (stationCountry === 'no' || stationCountry === 'n') {
    //console.log('Incorrect my friend.');
    alert('Incorrect my friend.');
  } else {
    //console.log('Yes or No only my friend.');
    alert('Yes or No only, come on now. Moving on.');
  }
}
oldStation();

function mySports() {
  let favSport = prompt('In my spare time, I play sports. And Curling for me is the best sports of all time, Agree? Yes or No only.').toLowerCase();
  if (favSport === 'yes' || favSport === 'y') {
    //console.log('You must be out of your mind jack!');
    alert('You must be out of your mind jack!');
  } else if (favSport === 'no' || favSport === 'n') {
    //console.log('Damn right it's not! Best sports of all time for me is Basketball shipmate!');
    alert('Damn right it is not! Best sports of all time for me is Basketball!');
    score++;
  } else {
    //console.log('Yes or No only my friend.');
    alert('OMG! Yes or No only buddy. Ok moving on.');
  }
}
mySports();

function faveTekken() {
  let favGame = prompt('Another hobby I do in my spare time is play fighting video games. Virtua Fighter is my favorite fighting game. Yes or No?').toLowerCase();
  if (favGame === 'no' || favGame === 'n') {
    //console.log('Yup! That is not it. Tekken is my favorite fighting game.');
    alert('Yup! That is not it. Tekken is my favorite fighting game.');
    score++;
  } else if (favGame === 'yes' || favGame === 'y') {
    //console.log('You really do not know me eh?');
    alert('Nope! You really do not know me eh?');
  } else {
    //console.log('Yes or No only damnit!!! Lost your chance.');
    alert('Yes or No only damnit!!! Lost your chance.');
  }
}
faveTekken();

function arcadeGames() {

  let attemptsRemaining = 4;

  for (let i = 0; i < attemptsRemaining; i++) {

    console.log(attemptsRemaining);
    console.log(i);

    let arcadeStick = prompt('Guess how many arcade sticks I have destroyed by playing Tekken 7... out of frustration. Choose from 1 to 10 only. Reminder that you only have 4 attempts.');

    if (arcadeStick === '5') {
      score++;
      console.log('Amazing! You got it right!');
      alert('Amazing! You got it right!');
      break;

    } else if (arcadeStick > 5) {
      console.log(`Wrong! Too high! You have ${attemptsRemaining - i - 1} tries remaining!`);
      alert(`Wrong! Too high! You have ${attemptsRemaining - i - 1} tries remaining!`);

    } else if (arcadeStick < '5') {
      console.log(`Try again, that is too low! You have ${attemptsRemaining - i - 1} tries remaining!`);
      alert(`Try again, that is too low! You have ${attemptsRemaining - i - 1} tries remaining!`);

    }
  }
}

arcadeGames();

/*let attemptsRemaining = 3;
  for (let i = 0; i <= attemptsRemaining; i++) {

    console.log(attemptsRemaining);
    console.log(i);

    let arcadeStick = prompt('Guess how many arcade sticks I have destroyed by playing Tekken 7... out of frustration. Choose from 1 to 10 only. Reminder that you only have 4 attempts.');
    if (arcadeStick === '5') {
      console.log('Amazing! You got it right!');
      alert('Amazing! You got it right!');
      score++;
      break;

    } else if (arcadeStick > '5') {
      console.log(`Wrong! Too high! You have ${attemptsRemaining - i - 1} tries remaining!`);
      alert(`Wrong! Too high! You have ${attemptsRemaining - i - 1} tries remaining!`);

    } else if (arcadeStick < '5') {
      console.log(`Try again, that is too low! You have ${attemptsRemaining - i - 1} tries remaining!`);
      alert(`Try again, that is too low! You have ${attemptsRemaining - i - 1} tries remaining!`);

    } else {
      console.log(arcadeStick);
      alert('please enter a number between 1 to 10');
    }

    attemptsRemaining--;
    arcadeStick = prompt('Guess a number between 1 to 10.');
  }
  alert('The right answer is 5');
}*/


let food = ['Tomahawk Steak', 'Pork Sinigang', 'Chicken Adobo', 'Lamb Chops'];
let favFood = prompt('Which of the following are my favorite foods? Just pick one: Chicken Adobo, Mongolian Barbecue, Lamb Chops, Tomahawk Steak, Pork Sinigang, Spaghetti, Fried Chicken').toLowerCase();
let guessAttempts = 6;
let userRight = false;

while (guessAttempts) {
  guessAttempts--;
  alert(`you have ${guessAttempts} attempts left.`);

  for (let i = 0; i < food.length; i++) {
    if (favFood === food[i]) {
      userRight = true;
    }
  }
  if (userRight === true) {
    score++;
    userRight = false;
    alert('Nice! You got it right my friend.');
    break;
  } else if (guessAttempts > 0) {
    favFood = prompt('Guess again.');
  }
  alert(`Answers can be ${food} & your final score is ${score} out of 7!`);
}
/*function goodFood() {
  let favFood = ['Tomahawk Steak', 'Pork Sinigang', 'Chicken Adobo', 'Lamb Chops'];

  for (let i = 0; i < favFood.length; i++) {
    console.log(favFood[i]);
  }
  let try1 = prompt('Hello there! Which of the following are my favorite foods? Just pick one: Chicken Adobo, Mongolian Barbecue, Lamb Chops, Tomahawk Steak, Pork Sinigang, Spaghetti, Fried Chicken');

  if (favFood.includes(try1)) {
    alert('Good golly Miss Molly! I do like ' + try1);
  } else {
    alert('Nope! You got that wrong buddy.');
  }
  let try2 = false;

  for (let i = 0; i < favFood.length; i++) {
    if (try1 === favFood[i]) {
      try2 = true;
    }
  }
  if (try2) {
    alert('Good Job!');
  } else {
    alert('Try again!');
  }
}
goodFood();
*/


/*let attemptsRemaining = 4;

while (attemptsRemaining) {
  attemptsRemaining--;
  console.log(`You have ${attemptsRemaining} attempts remaining`);
}
*/
/*
let attempts = 7;

for (let i = 0; i < attempts; i++) {
  console.log(`You have ${attempts - i -1} attempts remaining`);
}
*/
/*
let score = 0;

let myFavColors = ['blue', 'gold', 'cream'];
let userResponse = 'orange';

let attemptsThatRemain = 3;

while (attemptsThatRemain) {
  attemptsThatRemain--;
  console.log(`I'm in the loop. You have ${attemptsThatRemain} attempts remaining.`);
  for (let i = 0; i < myFavColors.length; i++) {
    console.log(myFavColors[i]);
    if (myFavColors[i] === userResponse) {
      console.log('You are correct!');
    }
  }
}

let attemptsToGo = 5;

for (let i =0; i < attemptsToGo; i++) {
  console.log(`User has ${attemptsToGo - i -1} attempts remaining`);
  for (let j = 0; j < myFavColors.length; j++) {
    console.log(myFavColors[j]);
    if (myFavColors[j] === userResponse) {
      console.log('You are correct!');
      score++;
    }
  }
}
*/
