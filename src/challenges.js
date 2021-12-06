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
  return number;

  // for (let i = 0; i <= number.lenght - 1; i = +1) {}
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  
  let dCat1 = mouse - cat1;
  let dCat2 = mouse - cat2;


  console.log("mouse ini " + mouse);
  console.log("gato1 ini " + cat1);
  console.log("gato2 ini " + cat2);
  
  Math.abs(dCat1);
  Math.abs(dCat2);

  console.log("mouse end " + mouse);
  console.log("gato1 end " + dCat1);
  console.log("gato2 end " + dCat2);

  

  if (dCat2 > dCat1) {
    return 'cat2';
  } else if (dCat1 > dCat2) {
    return 'cat1';
  } else {
    return 'os gatos trombam e o rato foge';
  }
  
}
catAndMouse(0, -3, 3)


// Desafio 8
function fizzBuzz(array) {
  let fiz;
  let buz;
  for (let i = 0; i <= array.length - 1; i = i + 1) {
    if ((array[i] % 3 == 0) && (array[i] % 5 == 0)){
      array[i] = 'fizzBuzz';
    } else if (array[i] % 5 == 0) {
      array[i] = 'buzz';
    } else if (array[i] % 3 == 0) {
      array[i] = 'fizz';
    } else {
      array[i] = 'bug!';
    }
  }
  return array;
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
