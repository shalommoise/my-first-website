const { whatTimeIsit } = require("./utils");

describe("whatTimeIsIt", () => {
  test("Default is 'Hello there', when time cannot be read", () => {
    expect(whatTimeIsit()).toBe("Hello there :)");
  });
  test("change to Good afternoon whentime is between 12-17", () => {
    const time = 15;
    expect(whatTimeIsit(time)).toBe("Good Afternoon :)");
  });
  test("change to Good morning whentime is between 00-12", () => {
    const time = 3;
    expect(whatTimeIsit(time)).toBe("Good Morning :)");
  });
  test("change to Good Evening when time is between 17- midnight", () => {
    const time = 20;
    expect(whatTimeIsit(time)).toBe("Good Evening :)");
  });
});
