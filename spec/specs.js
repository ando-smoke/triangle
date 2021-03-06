describe("triangleType", function() {
  it("returns 'not a valid triangle' for inputs 2, 2 and 8", function() {
    expect(triangleType(2, 2, 8)).to.equal("not a valid triangle");
  });

  it("returns 'equilateral' for inputs 4, 4 and 4", function() {
    expect(triangleType(4, 4, 4)).to.equal("equilateral");
  });

  it("returns 'isosceles' for inputs 10, 4 and 10", function() {
    expect(triangleType(10, 4, 10)).to.equal("isosceles");
  });

  it("returns 'scalene' for inputs 4, 3 and 5", function() {
    expect(triangleType(4, 3, 5)).to.equal("scalene");
  });

  it("returns 'not a valid triangle' where any of the inputs are nonpositive", function() {
    expect(triangleType(-3, -4, -5)).to.equal("not a valid triangle");
  });
});
