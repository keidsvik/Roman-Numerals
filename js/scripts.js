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


function giveWords(tableWords) {
  console.log(tableWords.length)
  tableWords.toLowerCase();
  console.log(tableWords.length)
  var stuffToKeep = ["a","b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o", "p","q", "r", "s", "t", 'u', "v", "x", "y", "z" ];
  for (i = 0; i < tableWords.length; i++){
    if (!(stuffToKeep.includes(tableWords[i]))){
      tableWords = tableWords.replace(tableWords[i], "")
      i = i - 1;
    }
    
  }
  var letterLocation = 0;
  var encoded = "";
  var sentenceLength = tableWords.length;
  console.log(sentenceLength)
  var longestEdge = Math.ceil(Math.sqrt(tableWords.length));
  var shortestEdge = longestEdge;
  
  if ((longestEdge * longestEdge) - sentenceLength >= longestEdge){
     shortestEdge = shortestEdge - 1;
  }
console.log(shortestEdge, longestEdge)
  for (i = 0; i < sentenceLength; i++){
    if (i % 5 === 0) {
      encoded = (encoded + " ")
    }
    console.log(letterLocation, tableWords[letterLocation])
    encoded = (encoded + tableWords[letterLocation]);
    letterLocation = letterLocation + shortestEdge;
  if (letterLocation >= sentenceLength) {
    letterLocation = letterLocation - sentenceLength;
  }
  }
  return encoded;
}

$(document).ready(function() {
  $("form#romanNumeralInput").submit(function(event) {
    event.preventDefault();
    $("#resultsDiv").text("");
    var ourNumber = parseInt($("#input").val());
    var result = giveNumber(ourNumber);
    $("#resultsDiv").append(result);
  });
});

$(document).ready(function() {
  $("form#squareCodeForm").submit(function(event) {
    event.preventDefault();
    $("#squareCodeResults").text("");
    var crypto = $("#squareCodeInput").val();
    var codeResults = giveWords(crypto);
    $("#squareCodeResults").append(codeResults);
  });
});



12345
12345
12345
12345
1234
