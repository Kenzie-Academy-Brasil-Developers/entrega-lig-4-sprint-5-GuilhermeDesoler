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

let player = false

const position = (evt) => {
    let click = evt.target.parentNode.childNodes
    console.log(evt.target.parentNode.childNodes)
    
    for (let i = 0;i < click.length; i++) {
        if (click[i].firstChild === null) {
            if (player === false) {
                player = true
                let circleRed =document.createElement('div')
                circleRed.classList.add('red')
                click[i].appendChild(circleRed)
                break;
            } else if (player === true) {
                player = false
                let cirlceBlack =document.createElement('div')
                cirlceBlack.classList.add('black')
                click[i].appendChild(cirlceBlack)
                break;
            }
        } 
    }
    
}

columns.forEach((torre) => {
    torre.addEventListener("click", position);
});
