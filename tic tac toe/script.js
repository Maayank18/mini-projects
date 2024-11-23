let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGame = document.querySelector("#newgame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player O

const winnning_pattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetG = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");

}

const disableboxes = () => {
    for( let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for( let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", ()  => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkwin();
    })
});

const showWinner = (winner) => {
    msg.innerText =`Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwin = () => {
    for(let patterns of winnning_pattern){
        let pos1val = boxes[patterns[0]].innerText;
        let pos2val = boxes[patterns[1]].innerText;
        let pos3val = boxes[patterns[2]].innerText;

        if(pos1val != "" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
};

newGame.addEventListener("click",resetG);
resetBtn.addEventListener("click",resetG);
