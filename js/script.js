var paliUser = prompt('Inserisci un palindromo: ');

function paliTest(pali1) {
  var pali2 = [];
  var temp;
  for (var x = pali1.length - 1; x >= 0 ; x--) {
    temp = pali1[x];
    pali2.push(temp);
  }
  for (var i = 0; i < pali1.length; i++) {
    if (pali1[i] === pali2[i]) {
      return 'la frase è palindroma';
    } else {
      return 'la frase non è palindroma'
    }
  }
}

console.log(paliTest(paliUser));
