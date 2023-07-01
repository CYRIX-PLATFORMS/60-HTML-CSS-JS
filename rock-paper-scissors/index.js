const r = document.getElementById("rock");
const p = document.getElementById("paper");
const s = document.getElementById("scissors");
const result = document.getElementById("result");
const analysis = document.getElementById("analysis");
const user = document.getElementById("my-score");
const computer = document.getElementById("comp-score");

const options = ["rock", "paper", "scissors"];
const compOP = options[Math.floor(Math.random() * options.length)];

function conditions(userOP) {
    if (compOP == options[0]) {
        analysis.innerHTML = `You selected ${userOP} and the computer selected ${compOP}`;
        result.innerHTML = "It's a tie";
    } else if (compOP == options[1] ) {
        analysis.innerHTML = `You selected ${userOP} and the computer selected ${compOP}`;
        result.innerHTML = "Computer wins";
    } else if (compOP == options[2]) {
        analysis.innerHTML = `You selected ${userOP} and the computer selected ${compOP}`;
        result.innerHTML = "You win";
    }
}

r.addEventListener("click", () => {
    conditions(compOP, "rock")
});
p.addEventListener("click", () => {
    var compOP = 
    conditions(compOP, "paper")
});
s.addEventListener("click", () => {
    var compOP = options[Math.floor(Math.random() * options.length)];

    conditions(compOP, "scissors")
});
