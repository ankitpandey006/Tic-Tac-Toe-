let boxes = document.querySelectorAll(".box")
let RestBtn = document.querySelector("#rest-btn")
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let trunO = true; // player o , plyer x 


const winPattren =
    [
        [0, 1, 2],
        [0, 3, 6],
        [0, 4, 8],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [3, 4, 5],
        [6, 7, 8]
    ];
    const resetGame = () => {
        trunO = true;
          enebleBoxes();
          msgContainer.classList.add("hide")

    }
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (trunO === true) { // player O
            box.innerText = "O";
            trunO = false;
        }
        else {
            box.innerText = "X";
            trunO = true;
        }
        box.disabled = true; // Corrected here
        checkWinner();
    });
    
});

const disableBoxes = () => {
       for(let box of boxes) {
        box.disabled = true;
       }
}

const enebleBoxes = () => {
    for(let box of boxes) {
     box.disabled = false;
     box.innerText="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const checkWinner = () => {
    for (pattren of winPattren) {
        let pos1Val = boxes[pattren[0]].innerText;
        let pos2Val = boxes[pattren[1]].innerText;
        let pos3Val = boxes[pattren[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
                disableBoxes();
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
RestBtn.addEventListener("click",resetGame);