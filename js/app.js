'use strict';
console.log('Hi there!');
alert('Hi there!');
let username = prompt('Will you please introduce yourself?'); {
  alert('Hello ' + username + '! Welcome to my page and see if you know a little bit about me.');
}
let formerJob = prompt(username + ', will you believe me if I said I used to be a Radio Jock? Yes or No only.').toLowerCase();
if(formerJob === 'yes' || formerJob === 'y'){
  //console.log('Damn right! I used to be a Radio Jock!');
  alert('Damn right! I used to be a Radio Jock!');
} else if(formerJob === 'no' || formerJob === 'n'){
  //console.log('Wrong! Try again. I am sure you know the answer my friend.');
  alert('Wrong there my friend. I used to be a Radio Jock.');
} else {
  //console.log('Yes or No only buddy.');
  alert('Yes or No only buddy.');
}
let favGame = prompt('Guess my favorite fighting game from these selection. Street Fighter, Tekken, or Virtua Fighter?').toLowerCase();
if (favGame === Tekken){
  //console.log('You got that right!')
  alert('You got that right');
} else if(favGame !== 'Tekken'){
  //console.log('Wrong! Tekken is the right answer');
  alert('Wrong! Tekken is the right answer.');
}
