// numbers to text
$('input.user-input').on('input', function(e) {
  if($(this).val().length == 0){
    $(".txt-one").val("");
  } else {
    $(".txt-one").val(numbered.stringify($(this).val()));
  }
});
