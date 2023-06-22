// numbers to text
$('input.user-input').on('input', function(e) {
  if($(this).val().length == 0){
    $(".txt-one").val("");
  } else {
    $(".txt-one").val(numbered.stringify($(this).val()));
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
