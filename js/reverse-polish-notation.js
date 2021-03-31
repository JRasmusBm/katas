// https://www.codewars.com/kata/52f78966747862fc9a0009ae

const operand = {
  "+": true,
  "-": true,
  "*": true,
  "/": true,
};

function createTree() {
  return { type: "init" };
}

function createNode(symbol) {
  return { type: "node", symbol, left: createTree(), right: createTree() };
}

function createLeaf(value) {
  return { type: "leaf", value };
}

function rightFirstInsert(tree, node) {
  if (tree.type === "init") {
    for (let key in node) {
      tree[key] = node[key];
    }
    return true;
  }

  if (tree.type === "leaf") {
    return false;
  }

  return (
    rightFirstInsert(tree.right, node) || rightFirstInsert(tree.left, node)
  );
}

function toNormalNotation(tree) {
  if (tree.type === "leaf") {
    return tree.value;
  }

  return (
    "(" +
    toNormalNotation(tree.left) +
    tree.symbol +
    toNormalNotation(tree.right) +
    ")"
  );
}

function calc(reversePolishNotation) {
  if (!reversePolishNotation) {
    return 0;
  }

  const expressionTree = createTree();
  const tokens = reversePolishNotation.split(" ");

  for (let i = tokens.length - 1; i >= 0; i--) {
    const token = tokens[i];

    if (operand[token]) {
      rightFirstInsert(expressionTree, createNode(token));
    } else {
      rightFirstInsert(expressionTree, createLeaf(token));
    }
  }

  return eval(toNormalNotation(expressionTree));
}

console.log(calc("") === 0, "Should work with empty string");
console.log(calc("3") === 3, "Should parse numbers");
console.log(calc("3.5") === 3.5, "Should parse float numbers");
console.log(calc("1 3 +") === 4, "Should support addition");
console.log(calc("1 3 *") === 3, "Should support multiplication");
console.log(calc("1 3 -") === -2, "Should support subtraction");
console.log(calc("4 2 /") === 2, "Should support division");
