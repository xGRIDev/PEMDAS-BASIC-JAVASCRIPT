//CONTOH PENERAPAN BLOCK-SCOPE

function BlockExample(text) {
  if (text == "blockEx" || text == "ExBlock") {
    var msg = "Example Block Has been Verified";
    console.log(msg);
  }
}
printBlockExample("ExBlock");
