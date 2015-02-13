describe("triangleType", function() {
  it("returns 'not a valid triangle' for inputs 2, 2 and 8", function() {
    expect(triangleType(2, 2, 8)).to.equal("not a valid triangle");
  });
});
