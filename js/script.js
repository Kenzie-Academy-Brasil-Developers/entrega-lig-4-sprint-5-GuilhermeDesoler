const main = document.getElementById('main')

const header = document.getElementById('header')

const currentPlayer = document.createElement('div')
const playerText = document.createElement('h3')
const currentDisc = document.createElement('div')
currentPlayer.classList.add('player')
currentPlayer.appendChild(playerText)
currentPlayer.appendChild(currentDisc)

header.appendChild(currentPlayer)

let player       = false

function changePlayer() {
    if(!player) {
        playerText.innerText = ''
        playerText.innerText = 'Player 1:'
        currentDisc.classList = 'div-red'
    } else if(player) {
        playerText.innerText = ''
        playerText.innerText = 'Player 2:'
        currentDisc.classList = 'div-black'
    }
}

changePlayer()

function gameBoard() {
    for (let i = 0; i < 7; i++){
        let column = document.createElement('section')
        column.id = `column${i}`
        column.classList.add('column')
        
        for(let j = 0; j < 6; j++){
            let cell = document.createElement('div')
            cell.id = `cell${j}`
            cell.classList.add('cell')

            column.appendChild(cell)
        }
        main.appendChild(column)
    }
}

gameBoard()

const columns    = document.querySelectorAll('section')
let position     = 0
let discCount    = 0
let currentColor = ''

function position2(evt) {
    let click = evt.target.parentNode.closest('section').childNodes
    
    for (let i = 5; i >= 0; i--) {
        if (click[i].childElementCount === 0) {
            if (player === false) {
                player = true
                let circleRed =document.createElement('div')
                circleRed.classList.add('red')
                click[i].appendChild(circleRed)

                currentColor = 'red'
                position = i

                break;
            } else if (player === true) {
                player = false
                let cirlceBlack =document.createElement('div')
                cirlceBlack.classList.add('black')
                click[i].appendChild(cirlceBlack)

                currentColor = 'black'
                position = i

                break;
            }
        } 
    }

    discCount += 1

    if(discCount === 42) {
        draw()
        stopGame(true)
    }
   
    changePlayer()

    verticalWin(click, position)
    horizontalWin(click, position)
    diagonal1(click, position)
    diagonal2(click, position)
    
}

columns.forEach((torre) => {
    torre.addEventListener("click", position2);
});

// OK
function verticalWin(array, position) {

    let closesColor = 0

    for(let i = position; i < array.length; i++) {

        let discBeforeColor = array[i].firstChild.classList

        if(discBeforeColor[0] === currentColor) {

            closesColor += 1

            if(closesColor === 4) {
                console.log('Vertical Win!!!')
                stopGame(true)
            }

        } else if(discBeforeColor !== currentColor) {

            break

        }

    }
    
}

// OK
function horizontalWin(arrayCell, position) {

    let towerNumber = Number(arrayCell[position].parentNode.id[6])
    
    let closesColor = 1

    let discToVerify
    
    //olhar para a esquerda
    for(let i = towerNumber - 1; i >= 0; i--) {

        discToVerify = document.querySelector(`#column${i}`).childNodes[position].firstChild

        if(discToVerify !== null) {

            let colorToCompare = discToVerify.classList[0]

            if(colorToCompare === currentColor) {

                closesColor += 1

            } else {

                break;

            }
        } else {

            break

        }
    }

    //olhar para a direita
    for(let j = towerNumber + 1; j < 7; j++) {
 
        discToVerify = document.querySelector(`#column${j}`).childNodes[position].firstChild

        if(discToVerify !== null) {

            let colorToCompare = discToVerify.classList[0]

            if(colorToCompare === currentColor) {

                closesColor += 1

            } else {

                break

            }

        } else {

            break

        }

    }

    //bateu 4 ganhou
    if(closesColor >= 4) {
        console.log('Horizontal Win!!!')
        stopGame()
    }

}

// OK
function diagonal1(arrayCell, position) {

    let towerNumber = Number(arrayCell[position].parentNode.id[6])

    let closesColor = 1

    let discToVerify

    let k = 1

    let y = 1
    //olhar para a esquerda - baixo
    for(let i = towerNumber - 1; i >= 0; i--) { //olha esquerda


        let nextPosition = position - k //baixo

        discToVerify = document.querySelector(`#column${i}`).childNodes[nextPosition]

        if(discToVerify !== undefined) {
        

            discToVerify = document.querySelector(`#column${i}`).childNodes[nextPosition].firstChild

            k += 1

            if(discToVerify !== null) {


                let colorToCompare = discToVerify.classList[0]

                if(colorToCompare === currentColor) {

                    closesColor += 1

                } else {

                    break

                }
            } else {
                
                break
            
            }

        } else {

            break

        }
    }

    //olhar para a direita - cima
    for(let i = towerNumber + 1; i < 7; i++) { //olha direita

        let nextPosition = position + y //cima

        discToVerify = document.querySelector(`#column${i}`).childNodes[nextPosition]
        if(discToVerify !== undefined) {        

            discToVerify = document.querySelector(`#column${i}`).childNodes[nextPosition].firstChild

            y += 1

            if(discToVerify !== null) {


                let colorToCompare = discToVerify.classList[0]

                if(colorToCompare === currentColor) {

                    closesColor += 1

                } else {

                    break

                }
            } else {
                
                break
            
            }

        } else {

            break

        }
    }

    if(closesColor >= 4) {
        stopGame()
        console.log('cabou')
    }

}

// 
function diagonal2(arrayCell, position) {

    let towerNumber = Number(arrayCell[position].parentNode.id[6])

    let closesColor = 1

    let discToVerify

    let k = 1

    let y = 1
    //olhar para a esquerda - cima
    for(let i = towerNumber - 1; i >= 0; i--) { // olha esquerda
        

        let nextPosition = position + k

        discToVerify = document.querySelector(`#column${i}`).childNodes[nextPosition]
        if(discToVerify !== undefined) {       

            discToVerify = document.querySelector(`#column${i}`).childNodes[nextPosition].firstChild

            k += 1

            if(discToVerify !== null) {

                let colorToCompare = discToVerify.classList[0]

                if(colorToCompare === currentColor) {

                    closesColor += 1

                } else {

                    break

                }
            } else {

                break

            }

        } else {

            break

        }
    }

    //olhar para a direita - cima
    for(let i = towerNumber + 1; i < 7; i++) { //olha direita

        let nextPosition = position - y // baixo

        discToVerify = document.querySelector(`#column${i}`).childNodes[nextPosition]
        if(discToVerify !== undefined) {
        
            discToVerify = document.querySelector(`#column${i}`).childNodes[nextPosition].firstChild

            y += 1

            if(discToVerify !== null) {

                let colorToCompare = discToVerify.classList[0]

                if(colorToCompare === currentColor) {

                    closesColor += 1

                } else {

                    break

                }
            } else {

                break

            }

        } else {

            break

        }
    }

    if(closesColor >= 4) {
        stopGame()
        console.log('cabou2')
    }

}

function draw() {

    console.log("it's a Draw")

}

function stopGame(cond) {
    
    if(cond) {
        for(let k = 0; k < 7; k++) {

            document.getElementById(`column${k}`).removeEventListener('click', position2)
            
        }
    
    } else {
        for(let k = 0; k < 7; k++) {

            document.getElementById(`column${k}`).addEventListener('click', position2)
            
        }
    
    }

}

function resetGame() {
    main.innerHTML = ''
    position     = 0
    discCount    = 0
    currentColor = ''
    player       = false
    changePlayer()
    gameBoard()
    stopGame(false)
}