function getRandomNumber( upper ) {
  var randomNumber = Math.floor( Math.random() * upper ) + 1;
  return randomNumber;
}

alert( getRandomNumber(6) );
alert( getRandomNumber(100) );
alert( getRandomNumber(2000) );
alert( getRandomNumber(4) );




/*
function alertRandom() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  alert(randomNumber);
}
alertRandom();
alertRandom();
alertRandom();
alertRandom();
alertRandom();
*/

/*
var alertRandom = function() {
  var randomNumber = Math.floor(Math.random() * 6 ) + 1;
  alert(randomNumber);
}
alertRandom();
alertRandom();
alertRandom();
*/

// returning a random number
/*
function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}
alert(getRandomNumber());
alert(getRandomNumber());
alert(getRandomNumber());
*/

/*
function isEmailEmpty() {
  var field = document.getElementById('email');
  if (field.value === '') {
    return true;
  } else {
    return false;
  }
}
var fieldTest = isEmailEmpty();
if (fieldTest === true) {
  alert('Email address is required');
  }

*/



