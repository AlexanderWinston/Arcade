const gameState = {
	players: ['x', 'o'],
	board: [
	  [null, null, null],
	  [null, null, null],
	  [null, null, null]
	]
  }
  const startGameBtn = document.getElementById('startGameBtn');
  startGameBtn.addEventListener('click', chooseRandomPlayer)
  let selectedPlayer;
  function chooseRandomPlayer (){
	let a = (Math.random())
	document.getElementById('griddy').style.display = "flex"
	if(a >= .5){
		const playerOne = document.getElementById('playerOne').style.display = "block"
		selectedPlayer = 'Player One'
		const playerTwo = document.getElementById('playerTwo').style.display = "none"
	} else {
		const playerTwo = document.getElementById('playerTwo').style.display = "block"
		selectedPlayer = 'Player Two'
		const playerOne = document.getElementById('playerOne').style.display = "none"
	}
	
  }
  function addXorO(addTextToSquare, row, column) {
	if(addTextToSquare.innerText == 'X' || addTextToSquare.innerText == 'O'){
		return;
		
	}
	
	
	if (selectedPlayer === 'Player One'){
		addTextToSquare.innerText = 'X'
		selectedPlayer = 'Player Two'
		gameState.board[row][column] = 'X';
		

	} else {
		addTextToSquare.innerText = 'O'
		selectedPlayer = 'Player One'
		gameState.board[row][column] = 'O'
	}
	let winningPlayer;
	for (let i = 0; i < 3; i++){
		let player1WinCounter = 0;
		let player2WinCounter = 0;
		for (let j = 0; j < 3; j++){
			let enteredValue = gameState.board[i][j]
			if (enteredValue == null){
				return;

			}
			else if (enteredValue == 'X'){
				player1WinCounter ++;
			} else {
				player2WinCounter ++;
			}
			if (player1WinCounter >=3){
				winningPlayer = 'Player1Wins'
				console.log('winner1')
				return;


			}
			if (player2WinCounter >=3){
				winningPlayer ='Player2Wins'
				console.log('winner2')
				return;
			}

		
		}
		
	}

  }
  let resetBtn = document.getElementById('resetBtn');
  resetBtn.addEventListener('click', resetGame)
  function resetGame(){
	let cells = document.getElementsByClassName('cell')
		for (let i = 0; i < cells.length; i++){
			let cell = cells[i];
			cell.innerText = ''
			document.getElementById('griddy').style.display = "none"


		}
	
	




  }