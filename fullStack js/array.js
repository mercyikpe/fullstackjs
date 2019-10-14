var playlist = [
  'mercy',
  'michael',
  'ikpe',
  'peace',
  'michael'
];

function print(message) {
  document.write(message);
}

function printList( list ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}
printList(playlist);




/*
var students = ['becky', 'mercy', 'peace', 'ezinne'];
for (var i = 0; i < students.length; i += 1) {
  document.write(students[i]);
}
*/



/*
var shoppingList = [ 
  'carrots',
  'milk',
  'eggs'
];
alert(shoppingList[2]);
*/

/*
var playList = [];
playList.push('I did it my way');
playList.push('I did it', 'Imagine');
playList.unshift('she knows', 'here it is', 'god is good');

document.writeln(  playList );

*/