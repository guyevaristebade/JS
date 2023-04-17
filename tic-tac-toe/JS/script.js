function main() {
    /**
     * déclaration des variables
    */

    /**
     * il manque le resetPlateau 
     * stockage et récupération des scores dans le locl storage 
     * faire les bot sur 3 niveaux
    */

    let pionArray = document.querySelectorAll('.pion')
    let currentPlayer = document.getElementById('currentPlayer')
    let p1 = document.getElementById('player1')
    let p2 = document.getElementById('player2')
    let nul = document.getElementById('null')

    let state = {
        cp : "O",
        color : 'blue',
        score_j1 : 0,
        score_j2 : 0,
        score_nul : 0
    }

    currentPlayer.textContent = state.cp
    const pion_croix = 'X' 
    // currentPlayer.style.color = state.color

    let WINNINGCOMBI = [
        [0,1,2],[3,4,5],
        [6,7,8],[0,3,6],
        [1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]

    // function playerCircleStyle(e){
    //     state.cp = "O" 
    //     state.color = "red"
    //     e.target.style.color = state.color
    //     currentPlayer.textContent = state.cp
    //     currentPlayer.style.color = "blue"
    // }

    // function playerCrossStyle(e){
    //     state.cp = "X" 
    //     state.color = "blue"
    //     e.target.style.color = state.color
    //     currentPlayer.textContent = state.cp
    //     currentPlayer.style.color = "red"
    // }

    function checkNull(){
        const cpPions = [...pionArray]
        return cpPions.every((el)=>{
            return el.textContent === "X" || el.textContent === "O"
        })
    }

    /**
     * on test tous les tableaux de la combinaison gagnante 
     * si au moins un éléments est vrai 
     * on vérifie ensuite chaques éléments du tableau renvoyé précedement 
     * si tous ses élémens vérifie le test alors le joueur gagne 
    */
    function checkWins(){
        return WINNINGCOMBI.some((combi)=>{
            return combi.every((i) =>{
                return pionArray[i].textContent === state.cp
            })
        })
    }

    function ResetPlateau() {
        for (let index = 0 ; index < pionArray.length ; index++) {
            pionArray[index].textContent = ""
        }
        // state.cp = "O"
        // currentPlayer.textContent = state.cp
        // state.color = "blue"
        // currentPlayer.style.color = state.color
        // console.log(currentPlayer.textContent ,"text du currentPlayer ")
    }

    function chekWinsOrDraw(){

        if(checkWins()){

            if(state.cp === "O"){
                state.score_j1 += 1
                p1.textContent = state.score_j1
                alert("Player " + state.cp + " Wins")
                ResetPlateau()
                state.cp = "O"
                currentPlayer.textContent = state.cp
                console.log(state , " victoire joueur O")

            }
            else if (state.cp === "X"){
                state.score_j2 += 1
                p2.textContent = state.score_j2
                alert("Player " + state.cp + " Wins")
                ResetPlateau()
                state.cp = "O"
                currentPlayer.textContent = state.cp
                console.log(state , " victoire joueur X")
            }
        }
        else if(checkNull()){
            state.score_nul += 1
            nul.textContent = state.score_nul
            alert("Its Draw")
            ResetPlateau()
            state.cp = "O"
            currentPlayer.textContent = state.cp
            console.log(state , " debug")
        }
    }

    function  Game(e){
        if(e.target.textContent === ""){
            console.log(state)
            e.target.textContent = state.cp
            currentPlayer.textContent = state.cp
            chekWinsOrDraw()
            state.cp === "O" ? state.cp = "X" : state.cp = "O"

        }
    }

    pionArray.forEach((el) =>{
        el.addEventListener('click',(e)=>{
            Game(e)
        })
    })
}

main()
