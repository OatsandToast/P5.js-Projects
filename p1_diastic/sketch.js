var srctxt;

function preload() {
  srctxt = loadStrings('text.text');
}


function setup() {
  noCanvas();
  srctxt = join(srctext, ' ');

  var seed = select("#seed");
  var submit = select("#submit");
  submit.mousePressed(function() {
    createP(seed.value());
  });





}
