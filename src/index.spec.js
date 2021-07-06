const { sayHello } = require("./index");

describe("Index file", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should say hello", () => {
    expect(sayHello()).toBe("Hello!");
  });
});
