const myFunction = require("./busFunction");
// can merge test cases let input1=[[10, 0], [3, 5], [5, 8]]
test("test with three values", () => {
  let input1 = [[10, 0], [3, 5], [5, 8]];
  let input2 = [[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]];
  let input3 = [[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]];
  expect(myFunction(input1)).toEqual(5);
  expect(myFunction(input2)).toEqual(17);
  expect(myFunction(input3)).toEqual(21);
});

test("test with invalid values", () => {
  expect(myFunction([[3, 0], [3, 9]])).toEqual("Invalid input");
});
