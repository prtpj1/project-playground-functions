// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  result = (base * height) / 2;
  return result;
}

// Desafio 3

function splitSentence(str) {
  let sentence = str.split(' ');
  return sentence;
}

// Desafio 4
function concatName(concat) {
  let ultimo = concat[concat.length - 1];
  let primeiro = concat[0];
  return ultimo + ', ' + primeiro;
}

// Desafio 5
function footballPoints(wins, ties) {
  result = wins * 3 + ties;
  return result;
}

// Desafio 6
function highestCount(number) {
  let hNumber;

  for (let i = 0; i <= number.lenght - 1; i = +1) {}
}
console.log(highestCount(9, 1, 2, 3, 9, 5, 7));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
