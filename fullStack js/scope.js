function getRandomNumber( lower, upper ) {
  if (isNaN(lower) || isNaN(upper) ) {
    throw new Error('Both auguments must be numbers');
    }
  
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}
console.log(getRandomNumber(5,10));
console.log(getRandomNumber(2,4));
console.log(getRandomNumber(1,5));
console.log(getRandomNumber(5,nine));
console.log(getRandomNumber(s,10));

