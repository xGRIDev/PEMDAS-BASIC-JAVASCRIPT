function varTest() {
  var ux = 54;
  {
    var ux = 25;
    console.log(ux);
  }
  console.log(ux);
}

function letTest() {
  var ui = 32;
  {
    var ui = 44;
    console.log(ui);
  }
  console.log(ui);
}
