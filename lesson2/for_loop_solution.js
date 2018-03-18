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
    console.log(result);
  }
}
  numberGenerator();

function multiplicationTable() {
for (var i = 1; i <=10; i++) {
  for (var j = 1; j <= 10; j++) {
    console.log(i + ' * ' + j + ' = ' + i*j );
  }
  }
}
multiplicationTable();

function checkAssignGrade() {
  var result;
  for (var i = 80; i <= 100; i++) {
    console.log(assignGrade(i));
  }
  return result;
}
console.log(checkAssignGrade());
