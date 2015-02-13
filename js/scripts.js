var triangleType = function(side1, side2, side3) {
  var triType = "";
  var sides = [side1, side2, side3];
  sides.sort(function(a, b) {
    return a - b;
  });

  if ((side1 <= 0) || (side2 <= 0) || (side3 <= 0) ||
      (sides[0] + sides[1] <= sides[2])) {
    triType = "not a valid triangle";
  }
  else if ((side1 === side2) && (side2 === side3)) {
    triType = "equilateral";
  }
  else if ((sides[0] === sides[1]) || (sides[1] === sides[2])) {
    triType = "isosceles";
  }
  else {
    triType = "scalene";
  }

  return triType;
};

$(document).ready(function() {
  $("form#side_lengths").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var triangleTypeResult = triangleType(side1, side2, side3);

    $(".triangle-type").text(triangleTypeResult);

    $("#result").show();
    event.preventDefault();
  });
});
