document.addEventListener("DOMContentLoaded", () => {
  const leaderboardBody = document.getElementById("leaderboardBody");
  const leaderboard = JSON.parse(localStorage.getItem("quizLeaderboard")) || [];

  // --- Sort by highest score ---
  leaderboard.sort((a, b) => b.score - a.score);

  // --- Display leaderboard data ---
  if (leaderboard.length === 0) {
    leaderboardBody.innerHTML = `<tr><td colspan="6">No quiz results yet — take your first quiz to appear here 🎮</td></tr>`;
  } else {
    leaderboard.forEach((player, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${player.name || ""}</td>
        <td>${player.subject ? player.subject.toUpperCase() : ""}</td>
        <td>${player.score}</td>
        <td>${player.percentage}</td>
        <td>${player.date}</td>
      `;
      leaderboardBody.appendChild(row);
    });
  }
  // --- Mobile version ---
  const mobileContainer = document.getElementById("mobileLeaderboard");
  mobileContainer.innerHTML = ""; // clear old data

  leaderboard.forEach((player, index) => {
    const card = document.createElement("div");
    card.className = "player-card";
    card.innerHTML = `
    <h2>#${index + 1} - ${player.name || "Unknown"}</h2>
    <div class="player-info">
      <p><span>Score:</span> ${player.score}</p>
      <p><span>Language:</span> ${player.language || "N/A"}</p>
      <p><span>Date:</span> ${player.date}</p>
    </div>
  `;
    mobileContainer.appendChild(card);
  });

  // --- Buttons ---
  document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "index.html";
  });

  document.getElementById("tryAgainBtn").addEventListener("click", () => {
    window.location.href = "quiz.html";
  });
});

