
/**
 * déclaration des variables
*/
const pionArray = document.querySelectorAll('.pion')
let currentPlayer = document.getElementById('currentPlayer')
let p1 = document.getElementById('player1')
let p2 = document.getElementById('player2')
let nul = document.getElementById('null')
let popup = document.querySelector('.popup')
const restart_btn =  document.getElementById('restart')
const continue_btn = document.getElementById('continue')
let popup_msg = document.querySelector('.popup-message')
const playerOne = document.getElementById("one")
const playerTwo = document.getElementById("two")

let state = {
    cp : "O",
    color : 'blue',
    score_j1 : 0,
    score_j2 : 0,
    score_nul : 0
}

currentPlayer.textContent = state.cp
const pion_croix = 'X' 
currentPlayer.style.color = state.color

let WINNINGCOMBI = [
    [0,1,2],[3,4,5],
    [6,7,8],[0,3,6],
    [1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]


function showAndClosePopup(e,message){
    popup.classList.add('show')
    popup_msg.textContent = message

    continue_btn.addEventListener('click',(ev)=>{
        ResetPlateau()
        popup.classList.remove('show')
    })

    restart_btn.addEventListener('click',(ev)=>{
        restartGame()
        popup.classList.remove('show')
    })
}


function playerCircleStyle(e){
    state.cp = "O" 
    state.color = "red"
    e.target.style.color = state.color
    currentPlayer.textContent = state.cp
    currentPlayer.style.color = "blue"
}

function playerCrossStyle(e){
    state.cp = "X" 
    state.color = "blue"
    e.target.style.color = state.color
    currentPlayer.textContent = state.cp
    currentPlayer.style.color = "red"
}

function checkNull(){
    const cpPions = [...pionArray]
    return cpPions.every((el)=>{
        return el.textContent === "X" || el.textContent === "O"
    })
}

function botEasy(){
    let randNumber = Math.floor(Math.random() * pionArray.length)
    pionArray[randNumber].textContent = "X"
}


function checkWins(){
    return WINNINGCOMBI.some((combi)=>{
            return combi.every((i) =>{
                if(state.cp === "O") {
                    return pionArray[i].textContent === "X"
                }
                else if(state.cp === "X") {
                    return pionArray[i].textContent === "O"
                }
        })
    })
}

function ResetPlateau() {
    for (let index = 0 ; index < pionArray.length ; index++) {
        pionArray[index].textContent = ""
    }
    state.cp = "O"
    state.color = "blue"
    currentPlayer.textContent = state.cp
    currentPlayer.style.color = state.color
}



function restartGame(){
    window.location.reload()
}

function chekWinsOrDraw(e){

    if(checkWins()){
        if(state.cp === "O"){
            state.score_j2 += 1
            p2.textContent = state.score_j2
            showAndClosePopup(e,"Player "+ playerTwo.textContent + " wins")
        }
        else if (state.cp === "X"){
            state.score_j1 += 1
            p1.textContent = state.score_j1
            showAndClosePopup(e,"Player "+ playerOne.textContent + " wins")
        }
    }
    else if(checkNull()){
        state.score_nul += 1
        nul.textContent = state.score_nul
        showAndClosePopup(e, "It's Draw")
        console.log(state , " debug")
    }

}

function  Game(e){
    if(e.target.textContent === ""){

        e.target.textContent = state.cp
        state.cp === "O" ? playerCrossStyle(e) : playerCircleStyle(e)
        chekWinsOrDraw(e)
        currentPlayer.textContent = state.cp

    }
}

function WhatIsYourName(){
    playerOne.textContent = prompt("What is first Player Name ?")
    playerTwo.textContent = prompt("What is second Player Name ?")
}

function Play(){
    WhatIsYourName()
    pionArray.forEach((el) =>{
        el.addEventListener('click', Game)
    })
}

Play()

