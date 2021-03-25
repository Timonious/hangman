function displayWordSoFar(word, guesses) {
  let letterArray = word.split("");
  let output = "";
  for (let i = 0; i < letterArray.length; i++) {
    const letterInWord = letterArray[i];
    const letterGuessed = guesses.includes(letterInWord);
    if(!letterGuessed){
      output = output + "_ ";
    }
    if(letterGuessed){
      output = output + letterInWord +" ";
    }
  }
  return output;
}

function isGameWon(word, guesses) {
  const letterArray = word.split("");
  let uniqueLetterInArray = [...new Set(letterArray)];
  let score = 0;
  for (let i = 0; i < uniqueLetterInArray.length; i++) {
    const letterInWord = uniqueLetterInArray[i];
    const letterGuessed = guesses.includes(letterInWord);
    if (letterGuessed) {
      score++;
    }
    if (score === uniqueLetterInArray.length) {
      return true;
    }
  }
  if (score < uniqueLetterInArray.length) {
    return false;
  }
}
function isGameLost(word, guesses) {
  const amountOfGuesses = guesses.length
  const letterArray = word.split("");
  let uniqueLetterInArray = [...new Set(letterArray)];
  let score = 0
  for (let i = 0; i < uniqueLetterInArray.length; i++) {
    const letterInWord = uniqueLetterInArray[i];
    const letterGuessed = guesses.includes(letterInWord);
    if(letterGuessed){
      score++
    }
  }
  const incorrectLetter = amountOfGuesses-score
  return incorrectLetter > 6;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};
