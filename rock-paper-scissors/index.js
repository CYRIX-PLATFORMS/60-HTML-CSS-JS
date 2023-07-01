const r = document.getElementById("rock");
const p = document.getElementById("paper");
const s = document.getElementById("scissors");
const result = document.getElementById("result");
const analysis = document.getElementById("analysis");

var numPlays = document.getElementById("num-plays")
var userScore = document.getElementById("my-score")
var compScore = document.getElementById("comp-score")

const options = ["rock", "paper", "scissors"];
r.addEventListener("click", () => {
    let compOP = options[Math.floor(Math.random() * options.length)]

    if (compOP == options[0]) {
        analysis.innerHTML = `You selected rock and the computer selected ${compOP}`
        result.innerHTML = "It's a tie";
    } else if (compOP == options[1]) {
        analysis.innerHTML = `You selected rock and the computer selected ${compOP}`
        result.innerHTML = "Computer wins"
        
        compScore.innerHTML = Number(compScore.innerHTML) + 1

    } else if (compOP == options[2]) {
        analysis.innerHTML = `You selected rock and the computer selected ${compOP}`
        result.innerHTML = "You win"

        userScore.innerHTML = Number(userScore.innerHTML) + 1

    }

    numPlays.innerHTML = Number(numPlays.innerHTML) + 1

})

p.addEventListener("click", () => {
    let compOP = options[Math.floor(Math.random() * options.length)]
    if (compOP == options[1]) {
        analysis.innerHTML = `You selected paper and the computer selected ${compOP}`
        result.innerHTML = "It's a tie";
    } else if (compOP == options[2]) {
        analysis.innerHTML = `You selected paper and the computer selected ${compOP}`
        result.innerHTML = "Computer wins"

        compScore.innerHTML = Number(compScore.innerHTML)  + 1;
    } else if (compOP == options[0]) {
        analysis.innerHTML = `You selected paper and the computer selected ${compOP}`
        result.innerHTML = "You win"

        userScore.innerHTML = Number(userScore.innerHTML) + 1
    }

    numPlays.innerHTML = Number(numPlays.innerHTML) + 1
    
})

s.addEventListener("click", () => {
    let compOP = options[Math.floor(Math.random() * options.length)]

    if (compOP == options[2]) {
        analysis.innerHTML = `You selected scissors and the computer selected ${compOP}`
        result.innerHTML = "It's a tie";
    } else if (compOP == options[0]) {
        analysis.innerHTML = `You selected scissors and the computer selected ${compOP}`
        result.innerHTML = "Computer wins"
        
        compScore.innerHTML = Number(compScore.innerHTML)  + 1;
    } else if (compOP == options[1]) {
        analysis.innerHTML = `You selected scissors and the computer selected ${compOP}`
        result.innerHTML = "You win"

        userScore.innerHTML = Number(userScore.innerHTML) + 1.
    }

    numPlays.innerHTML = Number(numPlays.innerHTML) + 1

})

