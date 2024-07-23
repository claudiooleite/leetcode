const { isValid } = require("../problem20");

test("valid closing tags", () => {
  expect(isValid("()[]{}")).toBe(true);
});
