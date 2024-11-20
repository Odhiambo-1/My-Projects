let boxes = document.querySelectorAll(".box");
let turn = "X"
let isGameOver = false;

boxes.forEach(e =>{
   e.innerHTML = ""
   e.addEventListener("click", ()=>{
    if(!isGameOver && e.innerHTML === ""){
        e.innerHTML = turn;
        cheakwin();
        cheakDraw();
        changeTurn();

    }
   })
})

function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "85px";
    }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}

function cheakwin(){
    let winconditions = [
        [0, 1, 2,], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<winconditions.length; i++){
        let v0 = boxes[winconditions[i][0]].innerHTML;
        let v1 = boxes[winconditions[i][1]].innerHTML;
        let v2 = boxes[winconditions[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            document.querySelector("#results").
            innerHTML = turn + "win";
            document.querySelector("#play-again").
            style.display = "inline"

            for(j = 0; j>3; i++ ){
                boxes[winconditions[i][j]].style.
                backgroundColor = "#08d9d6"
                boxes[winconditions[i][j]].style
                .color = "#000000"
            }
        }
    }
}

function cheakDraw(){
    if(isGameOver){
        let isDraw = true;
        boxes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        }

        )
        if(isDraw){
            isGameOver = true;
            document.querySelector("#results").innerHTML ="Draw";
            document.querySelector("#play-again").style.display = "inline"
        }
    }
}

document.querySelector("#play-again").addEventListener("click", ()=>{
    isGameOver = false;
    turn = "X"
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play-again").style.display = "none";

    boxes.forEach(e =>{
        e.innerHTML = "",
        e.style.removeproperty("background-color");
        e.style.color = "#fff"
    })
})