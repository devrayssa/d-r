const clues = [
  "Primeira pista: Encontre o coração no mapa.",
  "Segunda pista: Procure o cupcake.",
  "Terceira pista: Olhe perto do baú do tesouro.",
  "Quarta pista: Veja onde estão as estrelas.",
];

function showClue(clueNumber) {
  alert(clues[clueNumber - 1]);
  if (clueNumber === 4) {
    document.getElementById("message-container").classList.remove("hidden");
    startCountdown();
  }
}

function startCountdown() {
  const targetDate = new Date("June 30, 2024 00:00:00").getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(
      "countdown"
    ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "É hora!";
    }
  }, 1000);
}
