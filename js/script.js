function changeColor() {
  var rangeRed = document.querySelector('#rColor').value;
  var rangeGreen = document.querySelector('#gColor').value;
  var rangeBlue = document.querySelector('#bColor').value;

  document.querySelector('#valRed').value = rangeRed;
  document.querySelector('#valGreen').value = rangeGreen;
  document.querySelector('#valBlue').value = rangeBlue;

  var divColor = document.querySelector('#panelColor');

  divColor.style.background =
    'rgb(' + [rangeRed, rangeGreen, rangeBlue].join(',') + ')';
}

window.addEventListener('load', on_load, false);

function on_load() {
  var rangeRed = document.querySelector('#rColor');
  var rangeGreen = document.querySelector('#gColor');
  var rangeBlue = document.querySelector('#bColor');

  rangeRed.addEventListener('input', changeColor);
  rangeGreen.addEventListener('input', changeColor);
  rangeBlue.addEventListener('input', changeColor);
}
