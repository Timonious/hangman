const { question } = require("readline-sync");
const { displayWordSoFar, isGameWon, isGameLost } = require("./gamelogic");

function game(word, guesses) {
  console.log("Dit heb je tot nu toe geraden: ", guesses);
  let letter
  do {
    letter = question("Raad een letter: ");
    if (letter.length > 1) {
      console.log("je mag maar EEN letter tegelijk invoeren")
    }
    function isCharacterALetter(char) {
      return (/[a-zA-Z]/).test(char)
    }
    if (!isCharacterALetter(letter)) {
      console.log("Je moet een LETTER invoeren")
    }
  }
  while (letter.length > 1 || !isCharacterALetter(letter))
  letter = letter.toLowerCase()
  word = word.toLowerCase()
  guesses.push(letter);
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

  console.log(displayWordSoFar(word,guesses))
  if (isGameWon(word,guesses)) {
    console.log("Hoera je heb gewonnen!")
    return
  }

  if (incorrectLetter === 1) {
    console.log("FOUT!!")
    console.log( `
    |
    |
    |
    |
    |
    ===========`)
  }

  if (incorrectLetter === 2) {
    console.log("je hebt al " + incorrectLetter + " foute letters ingevoerd!!")
    console.log( `
      __________
    |     
    |    
    |       
    |       
    |
    ===========`)
  }

  if (incorrectLetter === 3) {
    console.log("je hebt al " + incorrectLetter + " foute letters ingevoerd!!")
    console.log( `
      __________
    | /     |
    |/     
    |       
    |       
    |
    ===========`)
  }

  if (incorrectLetter === 4) {
    console.log("je hebt al " + incorrectLetter + " foute letters ingevoerd!!")
    console.log( `
      __________
    | /     |
    |/     _o_
    |       
    |       
    |
    ===========`)
  }

  if (incorrectLetter === 5) {
    console.log("je hebt al " + incorrectLetter + " foute letters ingevoerd!!")
    console.log( `
      __________
    | /     |
    |/     _o_
    |       O
    |       
    |
    ===========`)
  }

  if (incorrectLetter === 6) {
    console.log("je hebt al " + incorrectLetter + " foute letters ingevoerd!!" +
        "Hij gaat er bijna aan!!")
    console.log( `
      __________
    | /     |
    |/     _o_
    |       O
    |      / 
    |
    ===========`)
  }

  if (incorrectLetter === 7) {
    console.log("je hebt " + incorrectLetter + " foute letters ingevoerd!!")
    console.log( `
      __________
    | /     |
    |/     _o_
    |       O
    |      / \\
    |
    ===========`)
  }

  if (isGameLost(word,guesses)) {
    console.log("Helaas je hebt het spel verloren , het woord was: "+word)
    return
  }
  game(word, guesses);
}

console.log(`
__________  
| /     |    ░██████╗░░█████╗░██╗░░░░░░██████╗░░░░░░██╗███████╗
|/     _o_   ██╔════╝░██╔══██╗██║░░░░░██╔════╝░░░░░░██║██╔════╝
|       O    ██║░░██╗░███████║██║░░░░░██║░░██╗░░░░░░██║█████╗░░
|      / \\   ██║░░╚██╗██╔══██║██║░░░░░██║░░╚██╗██╗░░██║██╔══╝░░
|            ╚██████╔╝██║░░██║███████╗╚██████╔╝╚█████╔╝███████╗
===========  ░╚═════╝░╚═╝░░╚═╝╚══════╝░╚═════╝░░╚════╝░╚══════╝
`);
const things = ['javascript', 'hangman', 'microsoft', 'react', 'galgje','coderen', 'internet','laptop','frontend','fullstack','backend'];
const thing = things[Math.floor(Math.random() * things.length)];
game(thing, []);
