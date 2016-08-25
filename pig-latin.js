/*
Move the first letter of each word to the end of it, then add 'ay' to the end of
the word.

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
*/

function pigIt(str){
  var strArr = []
  str.split(" ").map(function(word) {
    var wordBegArr = word.split("");
    wordBegArr.shift();
    var wordBegining = wordBegArr.join("");
    strArr.push(wordBegining + word[0] + "ay");
  })
  return strArr.join(" ");
}
