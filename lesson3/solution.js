
var arr = [1,2,3,4,5,6];
function hasRepeatingElements(arr) {
var n = arr.length;
  for (var i = 0; i < n; i++) {
    var arrayElement = arr[i];
    if (arr.indexOf(arrayElement, i+1) != -1) {
      return true;
    }
}
return false;
}
hasRepeatingElements([1,2,3,4,5,6]);


var arr = [1,2,0,-1,2,-3];
function negativeElementsSum(arr) {
var n = arr.length;
var result;
  for (var i = 1; i < n; i++) {
    if (arr[i] < 0) {
      console.log(arr[i]);
    }
  }
  return result;
}
negativeElementsSum([1,-2,3,-4,5,-6]);

function commonElements() {
}

function identityMatrix() {
}
