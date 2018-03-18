function numberGenerator() {
  var min = 1, max = 20, rand;
  rand = Math.floor(min + Math.random() * (max + 1 - min));
  var result;
  for (var i = 0; i < 5; i++) {
    if (rand % 2 == 0) {
      result = rand + ' четное';
    } else {
      result = rand + ' нечетное';
    }
  }
  console.log(result);
  console.log(result);
  console.log(result);
  console.log(result);
  console.log(result);
}
  //numberGenerator();

function multiplicationTable() {
}

function checkAssignGrade() {
}
