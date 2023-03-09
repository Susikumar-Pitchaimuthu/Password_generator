/*get the number of characters*/
function charLength() {
  let charLength = document.getElementById("length").value;
  document.getElementById("result").innerHTML = charLength;
  return charLength;
}

document.getElementById("length").addEventListener("change", charLength);

//
let showPassword = document.getElementById("password__result");
console.log(showPassword);

let lowerElement = document.getElementById("lowercase");

// Upper case generator

let upperElement = document.getElementById("uppercase");

let numberElement = document.getElementById("numbers");

let SymbolElement = document.getElementById("symbols");

function myFunction(e) {
  var x = document.getElementById("length").value;
}

function RandomUpperLetter() {
  if (
    upperElement.checked &&
    lowerElement.checked &&
    numberElement.checked &&
    SymbolElement.checked
  ) {
    let lenth = 10;
    console.log("upper");
    let upper =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuioplkjhgfdsazxcvbnm1234567890!@#$%^&*";

    var final = "";
    for (var i = 0; i < 12; i++) {
      var rnd = Math.floor(Math.random() * upper.length);
      final = final + upper.charAt(rnd);
    }

    showPassword.value = final;
  } else if (
    upperElement.checked &&
    lowerElement.checked &&
    numberElement.checked
  ) {
    let lenth = 10;
    console.log("upper");
    let upper =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm1234567890";

    var final = "";
    for (var i = 0; i < 12; i++) {
      var rnd = Math.floor(Math.random() * upper.length);
      final = final + upper.charAt(rnd);
    }

    showPassword.value = final;
  } else if (upperElement.checked && lowerElement.checked) {
    let lenth = 10;
    console.log("upper");
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZqwertyuiopasdfghjklzxcvbnm";

    var final = "";
    for (var i = 0; i < 12; i++) {
      var rnd = Math.floor(Math.random() * upper.length);
      final = final + upper.charAt(rnd);
    }

    showPassword.value = final;
  } else if (upperElement.checked) {
    let lenth = 10;
    console.log("upper");
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var final = "";
    for (var i = 0; i < 12; i++) {
      var rnd = Math.floor(Math.random() * upper.length);
      final = final + upper.charAt(rnd);
    }

    showPassword.value = final;
  } else {
    return;
  }
}
