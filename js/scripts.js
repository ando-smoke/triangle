var triangleType = function(side1, side2, side3) {
  var triType = "";
  var sides = [side1, side2, side3];
  sides.sort(function(a, b) {
    return a - b;
  });

  if (sides[0] + sides[1] <= sides[2]) {
    triType = "not a valid triangle";
  }
  else if ((side1 === side2) && (side2 === side3)) {
    triType = "equilateral";
  }
  else if ((sides[0] === sides[1]) || (sides[1] === sides[2])) {
    triType = "isosceles";
  }

  return triType;
};
