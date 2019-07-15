var names = ["Max", "Blair", "Jesse", "Kai", "Eli", "London"]

var button = $('button')
button.on('click', doSomething);
function doSomething() {
$('.baby-name').text(pickBaby)
}

function pickBaby() {
  var random = Math.random() * 6;
  var rounded = Math.floor(random);
  var baby = names[rounded];
  return baby;
}
