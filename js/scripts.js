var triangleType = function(side1, side2, side3) {
  var triType = "not a valid triangle";
  var sides = [side1, side2, side3];
  sides.sort(function(a, b) {
    return a - b;
  });

  if ((side1 === side2) && (side2 === side3)) {
    triType = "equilateral";
  }

  return triType;
};
