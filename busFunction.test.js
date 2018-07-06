const myFunction = require("./busFunction");
test("test with three values", () => {
  expect(myFunction([[10, 0], [3, 5], [5, 8]])).toEqual(5);
});
test("test with five values", () => {
  expect(
    myFunction([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])
  ).toEqual(17);
});
test("test with 5 values", () => {
  expect(myFunction([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])).toEqual(
    21
  );
});
test("test with invalid values", () => {
  expect(myFunction([[3, 0], [3, 9]])).toEqual("Invalid input");
});
