function myfunction() {
  var x = parseInt(document.getElementById("input1").value);
  var y = parseInt(document.getElementById("input2").value);
  console.log(x);
  var Area = x * y;
  var Parameter = 2 * (x + y);
  document.getElementById("output1").innerHTML =
    "Area is " + Area + "  sq.  mtr.";
  document.getElementById("output2").innerHTML =
    "Perimeter is " + Parameter + "  mtr";
}
