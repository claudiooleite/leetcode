const { twoSum } = require("../problem1");

test("sum array with 3 int, same length", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
