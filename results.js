// --- Retrieve stored results ---
let correctAnswers = parseInt(localStorage.getItem("correct")) || 0;
let totalQuestions = parseInt(localStorage.getItem("total")) || 15;
let wrongAnswers = totalQuestions - correctAnswers;
let scorePercentage = Math.round((correctAnswers / totalQuestions) * 100);

// --- Update DOM values ---
document.getElementById("correct").textContent = correctAnswers;
document.getElementById("wrong").textContent = wrongAnswers;
document.getElementById("score").textContent = correctAnswers;
document.getElementById("percentage").textContent = scorePercentage + "%";

// --- Circle progress ---
let circle = document.querySelector(".circle");
circle.style.background = `conic-gradient(darkcyan ${scorePercentage * 3.6}deg, #222 ${scorePercentage * 3.6}deg)`;

// --- Message based on score ---
let message = document.getElementById("message");
if (scorePercentage >= 80) {
  message.textContent = "Excellent! You're a Web Pro 🎯";
} else if (scorePercentage >= 50) {
  message.textContent = "Good job! Keep practicing 💪";
} else {
  message.textContent = "Keep learning! You'll get better 🚀";
}

// --- Custom Popup for Name ---
const popup = document.getElementById("namePopup");
const saveBtn = document.getElementById("saveNameBtn");
const cancelBtn = document.getElementById("cancelNameBtn"); // ✅ New cancel button
const input = document.getElementById("playerNameInput");

// ✅ Show popup but DO NOT save anything automatically
window.addEventListener("load", () => {
  popup.classList.add("active");
  input.focus();
});

// --- Save Button Click ---
saveBtn.addEventListener("click", () => {
  const playerName = input.value.trim();
  if (!playerName) {
    alert("Please enter your name before saving!");
    return;
  }

  // Save name for future
  localStorage.setItem("lastPlayerName", playerName);

  // --- Get leaderboard data ---
  const boardKey = "quizLeaderboard";
  let leaderboard = JSON.parse(localStorage.getItem(boardKey)) || [];
  leaderboard = leaderboard.filter(entry => entry && entry.name && entry.name.trim() !== "");

  // --- Get subject/language ---
  const quizLanguage = localStorage.getItem("quizLanguage") || "HTML";

  // --- Prepare player data ---
  const playerData = {
    name: playerName,
    subject: quizLanguage,
    score: correctAnswers,
    percentage: scorePercentage + "%",
    date: new Date().toLocaleDateString("en-GB")
  };

  // --- Save to leaderboard ---
  leaderboard.push(playerData);
  if (leaderboard.length > 50) leaderboard = leaderboard.slice(-50);
  localStorage.setItem(boardKey, JSON.stringify(leaderboard));

  // Hide popup & redirect
  popup.classList.remove("active");
  window.location.href = "leaderboard.html";
});

// --- Cancel Button Click --- ✅
cancelBtn.addEventListener("click", () => {
  popup.classList.remove("active");
});

// --- Buttons ---
document.getElementById("tryAgain").addEventListener("click", () => {
  window.location.href = "quiz.html";
});

document.getElementById("leaderboardBtn").addEventListener("click", () => {
  // ✅ If user canceled earlier, show popup again before redirect
  popup.classList.add("active");
  input.focus();
});
