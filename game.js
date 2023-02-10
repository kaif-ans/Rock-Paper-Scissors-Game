let player1 = document.getElementById("player1")

let player2 = document.getElementById("player2")

let playBtn = document.getElementById("play")

let p1Score = document.getElementById("player1Score")

let p2Score = document.getElementById("player2Score")


let characters = ["🗿", "📄", "✂"]

playBtn.addEventListener("click", function () {
    let randomChar1 = characters[Math.floor(Math.random() * characters.length)]
    let randomChar2 = characters[Math.floor(Math.random() * characters.length)]

    player1.innerText = randomChar1
    player2.innerText = randomChar2


    if (player1.innerText === "🗿" && player2.innerText === "✂") {  //player1 winner
        p1Score.innerText = "Winner 🎉"
        p2Score.innerText = "Loser 😭"
    }
    else if (player1.innerText === "✂" && player2.innerText === "📄") {
        p1Score.innerText = "Winner 🎉"
        p2Score.innerText = "Loser 😭"
    }
    else if (player1.innerText === "📄" && player2.innerText === "🗿") {
        p1Score.innerText = "Winner 🎉"
        p2Score.innerText = "Loser 😭"
    }
    else if (player1.innerText === "✂" && player2.innerText === "🗿") {  //player2 winner
        p1Score.innerText = "Loser 😭"
        p2Score.innerText = "Winner 🎉"
    }
    else if (player1.innerText === "🗿" && player2.innerText === "📄") {
        p1Score.innerText = "Loser 😭"
        p2Score.innerText = "Winner 🎉"
    }
    else if (player1.innerText === "📄" && player2.innerText === "✂") {
        p1Score.innerText = "Loser 😭"
        p2Score.innerText = "Winner 🎉"
    }
    else if (player1.innerText === "📄" && player2.innerText === "📄") {  //if both are same
        p1Score.innerText = ""
        p2Score.innerText = ""
    }
    else if (player1.innerText === "✂" && player2.innerText === "✂") {
        p1Score.innerText = ""
        p2Score.innerText = ""
    }
    else if (player1.innerText === "🗿" && player2.innerText === "🗿") {
        p1Score.innerText = ""
        p2Score.innerText = ""
    }

})





