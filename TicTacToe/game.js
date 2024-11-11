let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player x, player y
let count = 0; // to track draw

const winnerPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const boxEnabled = () => {
  // to disable remaining buttons once the winner is declared
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    box.style.backgroundColor = "";
  }
};

const boxDisabled = () => {
  // to disable remaining buttons once the winner is declared
  for (let box of boxes) {
    box.disabled = true;
  }
};

const resetGame = () => {
  // once clicked on the resetBtn
  turnO = true;
  count = 0;
  boxEnabled();
  msgContainer.classList.add("hide");
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide"); // to show the Winner div
  boxDisabled();
};

const checkWinner = () => {
  for (let pattern of winnerPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    debugger;
    if (turnO) {
      //Player O
      box.innerText = "O";
      box.style.color = "green";
      box.style.backgroundColor = "black";
      turnO = false;
    } else {
      //Player X
      box.innerText = "S";
      box.style.color = "black";
      box.style.backgroundColor = "white";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      isGameDraw();
    }
  });
});

const isGameDraw = () => {
  msg.innerText = "Game was a draw.";
  msgContainer.classList.remove("hide"); // to show the Winner div
  boxDisabled();
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
