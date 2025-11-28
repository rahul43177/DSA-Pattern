// 2 pointers
function twoSum(arr, target) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    let sum = arr[i] + arr[j];
    if (sum == target) {
      return [arr[i], arr[j]];
    } else if (sum < target) {
      i++;
    } else {
      j--;
    }
  }
  return -1;
}

let arr = [1, 5, 7, 10];
let target = 8;

let pairs = twoSum(arr, target);
console.log(pairs);
