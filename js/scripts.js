function giveNumber(newNumber) {
  
  
}


$(document).ready(function() {
  $("form#romanNumeralInput").submit(function(event) {
    event.preventDefault();
    var ourNumber = parseInt($("#input").val());
    giveNumber(ourNumber);
  });
});,

