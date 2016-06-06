$(document).ready(function() {
  $('#btn').click(function(event) {
        event.preventDefault();
debugger;
    var flavors = ['flavor1', 'flavor2', 'flavor3'];

    var counter = 0;
    flavors.forEach(function(flavor) {
      $("#results").append("<li>" + flavors[counter] + "</li>");
      counter += 1;
    });

    $('#results').show();

    console.log(flavors);

  });
});
