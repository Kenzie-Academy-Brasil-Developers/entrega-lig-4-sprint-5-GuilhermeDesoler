const ulSquares = document.querySelector("ul.animation-bg");

for (let i = 0; i < 11; i++) {

  const li       = document.createElement("li");

  const random   = (min, max) => Math.random() * (max - min) + min;

  const size     = Math.floor(random(10, 120));
  const position = random(1, 99);
  const delay    = random(5, 0.1);
  const duration = random(24, 12);

  li.style.width    = `${size}px`;
  li.style.height   = `${size}px`;
  li.style.bottom   = `-${size}px`;

  li.style.left     = `${position}%`;

  li.style.animationDelay          = `${delay}s`;
  li.style.animationDuration       = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

  ulSquares.appendChild(li);

}

function closeModal(){
    document.getElementById('bgModal').style.top = '-100%'
}

function openModal(){
  document.getElementById('bgModal').style.top = '0%'
  
  const modal = document.getElementById('modal');
  modal.innerHTML = "";
  modal.style.justifyContent = "space-around"

  const lig4 = document.createElement('h1');
  lig4.innerText = "Lig-4"
  modal.appendChild(lig4);

  const text = document.createElement('p');
  text.classList.add('textFinal')

  if (discCount === 42) {
    text.innerText = "This match tied!!"
  }else if(currentColor === 'red' && discCount <= 42) {
    text.innerText = "Player 1 wins!!"
  } else if (currentColor === 'black' && discCount <= 42) {
    text.innerText = "Player 2 wins!!"
  }

  modal.appendChild(text);

  const resetButton = document.createElement('button');
  resetButton.classList.add('reset-button');
  resetButton.innerText = "PLAY AGAIN"
  resetButton.setAttribute("onclick", "resetGame()");
  modal.appendChild(resetButton);
}
