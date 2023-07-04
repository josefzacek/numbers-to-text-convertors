// numbers to text
$('input.user-input').on('input', function(e) {
  if($(this).val().length == 0){
    $(".txt-one").val("");
  } else {
    $(".txt-one").val(numbered.stringify($(this).val()));
  }
});

// number to text
$('input.user-input').on('input', function(e) {
  $(".txt-two").val("");
  var userInput = "";
  userInput = $(this).val();

  if (userInput.length > 0 ){
    $("button").removeClass("disabled")
  } else {
    $("button").addClass("disabled")
  }

  var number = ""
  for (var i = 0; i < userInput.length; i++) {
    number += convertToWord(userInput[i])
    number += " ";
  }

  $(".txt-two").val(number.trim());

  function convertToWord(number) {
    switch (number) {
      case '0':
        return "zero"
        break;
      case '1':
        return "one"
        break;
      case '2':
        return "two"
        break;
      case '3':
        return "three"
        break;
      case '4':
        return "four"
        break;
      case '5':
        return "five"
        break;
      case '6':
        return "six"
        break;
      case '7':
        return "seven"
        break;
      case '8':
        return "eight"
        break;
      case '9':
        return "nine"
        break;
    }
  }
});

// click to copy
$(".copy-text-one-button").click(function() {
  copyText("txt-one")
})

$(".copy-text-two-button").click(function() {
  copyText("txt-two")
})

function copyText(className) {
  $("textarea." + className).select();
  document.execCommand('copy');
}
