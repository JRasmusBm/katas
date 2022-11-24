// https://www.codewars.com/kata/57b06f90e298a7b53d000a86

function minIndex(array) {
  let resultingIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[resultingIndex]) {
      resultingIndex = i;
    }
  }
  return resultingIndex;
}

function queueTime(queue, tills) {
  const tillSums = Array.from({ length: tills }, () => 0);

  for (let checkoutTime of queue) {
    tillSums[minIndex(tillSums)] += checkoutTime;
  }

  return Math.max(...tillSums);
}

console.log(queueTime([], 1) === 0);
console.log(queueTime([1, 2, 3, 4], 1) === 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2) === 9);
console.log(queueTime([1, 2, 3, 4, 5], 100) === 5);
