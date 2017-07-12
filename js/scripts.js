var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

var pigLatinTranslatorWord = function(word) {
  if (!/[a-zA-Z]/.test(word)) {
    return word;
  }
  if (vowels.includes(word.charAt(0))) {
    return (word + "way");
  } else {
    var wordArr = word.split('');
    for (i = 0; i < wordArr.length; i++) {
      if (!(vowels.includes(wordArr[0]))) {
        if (wordArr[0].toLowerCase() === 'q' && wordArr[1].toLowerCase() === 'u') {
          wordArr.push(wordArr[0]);
          wordArr.shift();
          wordArr.push(wordArr[0]);
          wordArr.shift();
          break;
        }
        wordArr.push(wordArr[0]);
        wordArr.shift();
      } else {
        break;
      }
    }
    word = wordArr.join('') + "ay";
    return word;
  }
}

var pigLatinTranslatorSentence = function(sentence) {
  var sentenceArr = sentence.split(' ');
  var translatedArr = [];
  sentenceArr.forEach(function(word){
    translatedArr.push(pigLatinTranslatorWord(word));
  });
  return translatedArr.join(' ');
}



$(function() {
  $("#pigLatin").submit(function(event) {
    event.preventDefault();
    var english = $("#pig").val();
    var translated = pigLatinTranslatorSentence(english);
    $(".output").text(translated);
  });
});
