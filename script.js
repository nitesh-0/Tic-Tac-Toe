let container = document.querySelector(".container");
let game = document.querySelector(".game");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#newBtn");
let msg = document.querySelector("#msg");

let turn0 = true //playerX, player0

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}




boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked")
        if (turn0 === true) {
            box.innerText = "0"
            turn0 = false;
        }
        else {
            box.innerText = "X"
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

const checkWinner = () => {
    for (let pattern of winPattern) {
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if (position1 != "" && position2 != "" && position3 != "") {
            if (position1 === position2 && position2 === position3) {
                console.log("winner", position1);

                showWinner(position1);

            }
        }
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
        box.innerText = "";
    }
}
const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
