import { expect } from "chai";
import { summation } from "./some-generic-module";

describe("some-generic-module unit tests", function () {
  it("should sum 1+1=2", function () {
    const result = summation(1, 1);
    expect(result).to.eq(2);
  });

  it("should fail to sum 2+2=4", function () {
    const result = summation(2, 2);
    expect(result).to.eq(4);
  });
});