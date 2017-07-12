var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

var pigLatinTranslator = function(sentence) {
  if (vowels.includes(sentence.charAt(0))) {
    return (sentence + "way");
  }
}



$(function() {
  $("#pigLatin").submit(function(event) {
    event.preventDefault();
    var english = $("#pig").val();
    var translated = pigLatinTranslator(english);
    $(".output").text(translated);
  });
});