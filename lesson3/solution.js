
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
//------------------------------------------------------------------------------
var arr = [1, 2, 0, -1, 2, -3];
function negativeElementsSum(arr) {
  var n = arr.length;
  var result = 0;
  var firstElement = arr.indexOf(0);
  console.log(firstElement);
  for (var i = firstElement + 1; i < n; i++) {
    if (arr[i] < 0) {
      result += arr[i];
    }
  }
  return result;
}
  negativeElementsSum(arr);
//------------------------------------------------------------------------------
var arr1 = [1,'a',2,3];
var arr2 = ['a','b',2,'c'];

function commonElements(arr1, arr2) {
  var m = arr1.length;
  var n = arr2.length;
  var arr3 = [];
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (arr1[i] == arr2[j]) {
        arr3.push(arr1[i])
      }
    }
}
return arr3;
}
commonElements(['a','b',2,'c'], [1,'a',2,3]);
//------------------------------------------------------------------------------
function identityMatrix() {

}
