
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

function negativeElementsSum() {

}

function commonElements() {
}

function identityMatrix() {
}
