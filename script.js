// pegando as variaveis
let board = document.querySelectorAll(".board")
let boxes = document.querySelectorAll(".box")
let contx = document.getElementById("contx")
let conto = document.getElementById("conto")
const reset = document.getElementById("btn")
let result = document.getElementById("result")

reset.addEventListener("click", resetbtn)

board.forEach(square => {
    square.addEventListener("click", mouseClick)
})

let squares = ["","","","","","","","","",]
contx.innerText = 0
conto.innerText = 0
playerx = "x"
playero = "o"
currentPlayer = playero
gameOver = false

function win(){
    
    if(squares[0] === currentPlayer && squares[1] === currentPlayer 
        && squares[2] === currentPlayer){
            result.innerHTML = currentPlayer === playerx ?
             `<img class="iconx" src="./assets/x.png" height="50px"> HAS WON` :
             `<img class="icono" src="./assets/o.png" height="50px"> HAS WON` 
            currentPlayer === playerx ? contx.innerText++ : conto.innerText++
            gameOver = true
    }
    if(squares[0] === currentPlayer && squares[3] === currentPlayer 
        && squares[6] === currentPlayer){
             result.innerHTML = currentPlayer === playerx ?
             `<img class="iconx" src="./assets/x.png" height="50px"> HAS WON` :
             `<img class="icono" src="./assets/o.png" height="50px"> HAS WON`
            currentPlayer === playerx ? contx.innerText++ : conto.innerText++
            gameOver = true
    }
    if(squares[0] === currentPlayer && squares[4] === currentPlayer 
        && squares[8] === currentPlayer){
             result.innerHTML = currentPlayer === playerx ?
             `<img class="iconx" src="./assets/x.png" height="50px"> HAS WON` :
             `<img class="icono" src="./assets/o.png" height="50px"> HAS WON`
            currentPlayer === playerx ? contx.innerText++ : conto.innerText++
            gameOver = true
    }
    if(squares[1] === currentPlayer && squares[4] === currentPlayer 
        && squares[7] === currentPlayer){
             result.innerHTML = currentPlayer === playerx ?
             `<img class="iconx" src="./assets/x.png" height="50px"> HAS WON` :
             `<img class="icono" src="./assets/o.png" height="50px"> HAS WON`
            currentPlayer === playerx ? contx.innerText++ : conto.innerText++
            gameOver = true
    }
    if(squares[2] === currentPlayer && squares[5] === currentPlayer 
        && squares[8] === currentPlayer){
             result.innerHTML = currentPlayer === playerx ?
             `<img class="iconx" src="./assets/x.png" height="50px"> HAS WON` :
             `<img class="icono" src="./assets/o.png" height="50px"> HAS WON`
            currentPlayer === playerx ? contx.innerText++ : conto.innerText++
            gameOver = true
    }
    if(squares[2] === currentPlayer && squares[4] === currentPlayer 
        && squares[6] === currentPlayer){
             result.innerHTML = currentPlayer === playerx ?
             `<img class="iconx" src="./assets/x.png" height="50px"> HAS WON` :
             `<img class="icono" src="./assets/o.png" height="50px"> HAS WON`
            currentPlayer === playerx ? contx.innerText++ : conto.innerText++
            gameOver = true
    }
    if(squares[3] === currentPlayer && squares[4] === currentPlayer 
        && squares[5] === currentPlayer){
             result.innerHTML = currentPlayer === playerx ?
             `<img class="iconx" src="./assets/x.png" height="50px"> HAS WON` :
             `<img class="icono" src="./assets/o.png" height="50px"> HAS WON`
            currentPlayer === playerx ? contx.innerText++ : conto.innerText++
            gameOver = true
    }
    if(squares[6] === currentPlayer && squares[7] === currentPlayer 
        && squares[8] === currentPlayer){
             result.innerHTML = currentPlayer === playerx ?
             `<img class="iconx" src="./assets/x.png" height="50px"> HAS WON` :
             `<img class="icono" src="./assets/o.png" height="50px"> HAS WON`
            currentPlayer === playerx ? contx.innerText++ : conto.innerText++
            gameOver = true
    }
}

function resetbtn(){
    currentPlayer = playero
    squares = ["","","","","","","","","",]
    gameOver = false
    result.innerText = ""
    boxes.forEach(square => {
        square.classList = "box xgray"
    })
}

function mouseClick(e) {
    let find = e.target.dataset.index
    
    if(gameOver === true){
        return
    }
    if(squares[find]!== ""){
        return
    }
    
    currentPlayer = currentPlayer === playerx ? playero : playerx
    if(currentPlayer === playerx){
        boxes[find].classList.add("x")
        boxes.forEach(box =>{
            box.classList.add("ogray")
            box.classList.remove("xgray")
        })
    }
    if(currentPlayer === playero){
        boxes[find].classList.add("o")
        boxes.forEach(box =>{
            box.classList.add("xgray")
            box.classList.remove("ogray")
        })
    }
   

    if(squares[find] == ""){
        squares[find] = currentPlayer
        win()
        console.log(squares)
      
    }




}
