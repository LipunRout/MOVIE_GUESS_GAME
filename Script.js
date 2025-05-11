
  // Movie name to guess (you can randomize this later)
  const movie = "AVATAR".toUpperCase();
  let guessed = new Set();
  let attempts = 0;

  const maskedWordDiv = document.getElementById("maskedWord");
  const message = document.getElementById("message");
  const input = document.getElementById("userGuess");

  function updateMaskedWord() {
    let display = "";
    for (let letter of movie) {
      display += guessed.has(letter) ? letter + " " : "_ ";
    }
    maskedWordDiv.textContent = display.trim();
  }

  function checkGuess() {
    const guess = input.value.trim().toUpperCase();
    input.value = "";

    if (!guess) {
      message.textContent = "Please enter a letter or movie name.";
      return;
    }

    attempts++;

    // Full movie name guess
    if (guess.length > 1) {
      if (guess === movie) {
        guessed = new Set(movie); // reveal all letters
        updateMaskedWord();
        message.textContent = `🎉 Correct! You guessed the movie in ${attempts} attempt(s)!`;
      } else {
        message.textContent = "❌ Incorrect movie name. Try again!";
      }
      return;
    }

    // Single letter guess
    if (movie.includes(guess)) {
      guessed.add(guess);
      updateMaskedWord();

      if (movie.split("").every(letter => guessed.has(letter))) {
        message.textContent = `🎉 Well done! You guessed all letters in ${attempts} attempt(s)!`;
      } else {
        message.textContent = `✅ Correct letter!`;
      }
    } else {
      message.textContent = `❌ Wrong letter. Try again!`;
    }
  }

  // Initialize
  updateMaskedWord();

