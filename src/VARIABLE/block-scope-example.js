//CONTOH PENERAPAN BLOCK-SCOPE

function BlockExample(text) {
  if (text == "GeeksForGeek" || text == "ExBlock") {
    var msg = "Example Block Has been Verified";
    console.log(msg);
  }
  console.log(msg);
}
BlockExample("ExBlock");
