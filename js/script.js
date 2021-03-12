// palindromo

// var paliUser = prompt('Inserisci un palindromo: ');
//
// function paliEx(pali1) {
//   var pali2 = [];
//   var temp;
//   for (var x = pali1.length - 1; x >= 0 ; x--) {
//     temp = pali1[x];
//     pali2.push(temp);
//   }
//   for (var i = 0; i < pali1.length; i++) {
//     console.log(i);
//     if (pali1[i] === pali2[i]) {
//
//     } else {
//       return false;
//     }
//   }
//   return true;
// }
//
// var result = paliEx(paliUser);
//
// if (result) {
//   console.log('La frase è palindroma');
// } else {
//   console.log('La frase non è palindroma');
// }





// numeri casuali

var parOddUser = prompt('Scegli "pari" o "dispari": ');
var numUser = parseInt(prompt('Inserisci un numero da 1 a 5: '));
var min = 1;
var max = 5;

if (numUser > 5 || numUser < 0) {
  alert('eeeeeeeeeeeeeeeeeh volevi!!!');
} else {


  

  var varNumRnd = numRnd(min, max);
  var sum = varNumRnd + numUser;



  console.log(varNumRnd);
  console.log(mach(sum));

}



// qui iniziano le funzioni

function numRnd(minRnd, maxRnd) {
  maxRnd -= minRnd + 1;
  var numPc = Math.floor(Math.random() * maxRnd) + minRnd;
  return numPc;
}

function mach(summ){

  if (parOddUser == 'pari' && summ % 2 == 0) {
    return 'Hai vinto ' + summ;
  } else if (parOddUser == 'dispari' && summ % 2 == 1) {
    return 'Hai vinto ' + summ;
  } else {
    return 'Hai perso ' + summ;
  }

}
