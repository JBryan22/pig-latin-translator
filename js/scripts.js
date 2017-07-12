var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

var pigLatinTranslator = function(sentence) {
  if (vowels.includes(sentence.charAt(0))) {
    return (sentence + "way");
  } else {
    var sentenceArr = sentence.split('');
    for (i = 0; i < sentenceArr.length; i++) {
      if (!(vowels.includes(sentenceArr[0]))) {
        sentenceArr.push(sentenceArr[0]);
        sentenceArr.shift();
      } else {
        break;
      }
    }

    sentence = sentenceArr.join('') + "ay";
    return sentence;
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
