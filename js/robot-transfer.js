// https://www.codewars.com/kata/58aaa3ca821a767300000017/train/javascript

function finalPosition(matrix, steps, position) {
  console.log(position);
}

function startingPositions(matrix) {
  if (!matrix) {
    return [];
  }
  return [
    ...startingPositions(matrix.slice(1)),
    typeof matrix[0] === "object" ? startingPositions(type) : 1,
  ];
}

function robotTransfer(matrix, steps) {
  return startingPositions(matrix).filter(
    finalPosition(matrix, steps, [x, y]) === [x, y]
  ).length;
}

console.log(
  robotTransfer(
    [
      ["0,1", "0,0", "1,2"],
      ["1,1", "1,0", "0,2"],
      ["2,1", "2,0", "0,0"],
    ],
    2
  ) == 8
);

console.log(
  robotTransfer(
    [
      ["0,1", "0,0"],
      ["1,1", "1,0"],
    ],
    2
  ) == 4
);
