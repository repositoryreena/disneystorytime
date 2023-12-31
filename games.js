// Word Scramble Game
const disneyWords = [
    "mickey",
    "minnie",
    "donald",
    "goofy",
    "pluto",
    "ariel",
    "belle",
    "cinderella",
    "buzz lightyear",
    "woody",
  ];
  
  let currentWordIndex;
  let wordScrambleScore = 0;
  const scrambledWordElement = document.getElementById("scrambled-word");
  const guessInput = document.getElementById("guess-input");
  const guessButton = document.getElementById("guess-button");
  const resultElement = document.getElementById("result");
  const wordScrambleScoreElement = document.getElementById("wordscramble-score");
  
  guessButton.addEventListener("click", handleGuess);
  
  function initializeWordScrambleGame() {
    currentWordIndex = Math.floor(Math.random() * disneyWords.length);
    scrambledWord = scrambleWord(disneyWords[currentWordIndex]);
    scrambledWordElement.textContent = scrambledWord;
    guessInput.value = "";
    resultElement.textContent = "";
  }
  
  function scrambleWord(word) {
    const characters = word.split("");
    for (let i = characters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
    return characters.join("");
  }
  
  function handleGuess() {
    const guess = guessInput.value.trim().toLowerCase();
    if (guess === disneyWords[currentWordIndex]) {
      resultElement.textContent = "Correct! You guessed the word.";
      resultElement.style.color = "green";
      wordScrambleScore++;
      initializeWordScrambleGame();
    } else {
      resultElement.textContent = "Incorrect guess. Try again.";
      resultElement.style.color = "red";
    }
    updateWordScrambleScore();
  }
  
  function updateWordScrambleScore() {
    wordScrambleScoreElement.textContent = "Score: " + wordScrambleScore;
  }
  
  initializeWordScrambleGame();
  