const words = [
  { word: "planet", hint: "A celestial body" },
  { word: "guitar", hint: "A musical instrument" },
  { word: "python", hint: "A programming language" },
  { word: "ocean", hint: "Large body of saltwater" },
  { word: "flower", hint: "Blossom of a plant" }
];

let currentWord, timer;
const scrambledEl = document.getElementById("scrambled-word");
const hintEl = document.getElementById("hint");
const inputEl = document.getElementById("user-input");
const messageEl = document.getElementById("message");
const timeEl = document.getElementById("time");

function scramble(word) {
  return word.split('').sort(() => Math.random() - 0.5).join('');
}

function loadNewWord() {
  clearInterval(timer);
  const random = words[Math.floor(Math.random() * words.length)];
  currentWord = random.word;
  hintEl.textContent = "Hint: " + random.hint;
  scrambledEl.textContent = scramble(currentWord);
  inputEl.value = "";
  messageEl.textContent = "";
  startTimer();
}

function startTimer() {
  let timeLeft = 30;
  timeEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timeEl.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      messageEl.textContent = `⏰ Time's up! The word was "${currentWord}".`;
    }
  }, 1000);
}

function checkWord() {
  if (inputEl.value.toLowerCase() === currentWord.toLowerCase()) {
    messageEl.textContent = "✅ Correct!";
    clearInterval(timer);
  } else {
    messageEl.textContent = "❌ Wrong! Try again.";
  }
}

window.onload = loadNewWord;
