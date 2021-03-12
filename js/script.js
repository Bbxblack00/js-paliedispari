// palindromo

// var paliUser = prompt('Inserisci un palindromo: ');

function paliEx(pali1) {
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

// console.log(paliEx(paliUser));





// numeri casuali

var parOddUser = prompt('Scegli "pari" o "dispari": ');
var numUser = parseInt(prompt('Inserisci un numero da 1 a 5: '));

if (numUser > 5 || numUser < 0) {
  alert('eeeeeeeeeeeeeeeeeh volevi!!!');
} else {
  function numRnd() {
    var numPc = Math.floor(Math.random() * 5) + 1;
    return numPc;
  }

  var sum = numRnd() + numUser;

  function mach(){

    if (parOddUser == 'pari' && sum % 2 == 0) {
      return 'Hai vinto ' + sum;
    } else if (parOddUser == 'dispari' && sum % 2 == 1) {
      return 'Hai vinto ' + sum;
    } else {
      return 'Hai perso ' + sum;
    }

  }

  console.log(mach());

}
