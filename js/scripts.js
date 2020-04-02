function giveNumber(newNumber) {
  var ourResult = "";

    while(newNumber >= 1000){
      ourResult = (ourResult + "M");
      newNumber = newNumber - 1000;
    }
    if (newNumber >= 900) {
      newNumber = newNumber - 900;
      ourResult = (ourResult + "CM")
    }
    else if (newNumber >= 500) {
      newNumber = newNumber - 500;
      ourResult = (ourResult + "D")
    }
    if (newNumber >= 400) {
      newNumber = newNumber - 400;
      ourResult = (ourResult + "CD")
    }
    while (newNumber >= 100) {
      newNumber = newNumber - 100;
      ourResult = (ourResult + "C")
    }
    if (newNumber >= 90) {
      newNumber = newNumber - 90;
      ourResult = (ourResult + "XC")
    }
    else if (newNumber >= 50) {
      newNumber = newNumber - 50;
      ourResult = (ourResult + "L")
    }
    if (newNumber >= 40) {
      newNumber = newNumber - 40;
      ourResult = (ourResult + "XL")
    }
    while (newNumber >= 10) {
      newNumber = newNumber - 10;
      ourResult = (ourResult + "X")
    }
    if (newNumber >= 9) {
      newNumber = newNumber - 9;
      ourResult = (ourResult + "IX")
    }
    else if (newNumber >= 5) {
      newNumber = newNumber - 5;
      ourResult = (ourResult + "V")
    }
    if (newNumber >= 4) {
      newNumber = newNumber - 4;
      ourResult = (ourResult + "IV")
    }
    while (newNumber > 0) {
      newNumber = newNumber - 1;
      ourResult = (ourResult + "I")
    }
  
  
  return ourResult
}


$(document).ready(function() {
  $("form#romanNumeralInput").submit(function(event) {
    event.preventDefault();
    var ourNumber = parseInt($("#input").val());
    var result = giveNumber(ourNumber);
    $("#resultsDiv").append(result);
  });
});

