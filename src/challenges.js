// Desafio 1
function compareTrue(v1, v2) {
  if (v1 === true && v2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
let result;
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
function concatName() {}

// Desafio 5
function footballPoints(wins, ties) {
  result = (wins * 3) + ties;
  return result;
  
}


// Desafio 6
function highestCount() {
  // seu código aqui
}

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
