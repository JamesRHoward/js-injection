$(document).ready(function() {
  $('#flavors').submit(function(event) {
        event.preventDefault();
debugger;
    var flavors = ['flavor1', 'flavor2', 'flavor3'];

    flavors.forEach(function(flavor) {
      var userInput = $('input#' + flavor).val();
      $('.' + flavor).text(userInput);
    });

    $('#results').show();

    console.log(flavors);

  });
});
