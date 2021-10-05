const main = document.getElementById('main')

const gameBoard = () => {
    for (let i = 0; i < 7; i++){
        let column = document.createElement('div')
        column.id = `column${i}`
        
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
