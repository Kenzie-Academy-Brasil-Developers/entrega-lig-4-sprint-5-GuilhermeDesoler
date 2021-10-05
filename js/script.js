const main = document.getElementById('main')

const gameBoard = () => {
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

const columns = document.querySelectorAll('section')
console.log(columns)

let player = false

const position = (evt) => {
    let click = evt.target
    console.log(evt)

    if (click.className === 'cell' && click.childElementCount === 0) {
        if (player === false) {
            player = true
            let circleRed =document.createElement('div')
            circleRed.classList.add('red')
            click.appendChild(circleRed)
        } else if (player === true) {
            player = false
            let cirlceBlack =document.createElement('div')
            cirlceBlack.classList.add('black')
            click.appendChild(cirlceBlack)
        }
    } else {
        alert("Está casa já está ocupada!!")
    }
}

columns.forEach((torre) => {
    torre.addEventListener("click", position);
});
