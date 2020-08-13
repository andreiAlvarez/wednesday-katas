//You have an array of numbers.
//Your task is to sort ascending odd numbers but even numbers must be on their places.
//Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

var array = [5, 3, 2, 8, 1, 4],
    indices = [];

array
    .filter((v, i) => v % 2 && indices.push(i))
    .sort((a, b) => a - b)
    .forEach((v, i) => array[indices[i]] = v);

console.log(array);

//Another solution 
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

//search in multidimensional array

var locate = function(arr, v) {
  return arr.some(function(e) { return Array.isArray(e) ? locate(e, v) : e === v; });
}

console.log(locate(['a', 'b', ['c', 'd', ['e']]], 'e')); // true
console.log(locate(['a', 'b', ['c', 'd', ['e']]], 'a')); // true
console.log(locate(['a', 'b', ['c', 'd', ['e']]], 'f')); // false
