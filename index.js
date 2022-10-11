function initGame(){
	const squares = document.getElementsByClassName('cell')
	const state = { 
		startingPlayer: null,
		currPlayer: null,
		isGameOn: false,
		playerOne: {symbol: 'O', choices:{}, name:''},
		playerTwo: {symbol: 'X', choices:{}, name:''},
		winner: null
	}
	
	// let currPlayer;
	// let isGameOn = 'false'
	// const playerOne = {symbol: 'O', choices:{}}

	// const playerTwo = {symbol: 'X', choices:{}}
	// let winner = ''
	const startGameBtn = document.getElementById('startGameBtn')
	const selectBox = function(currPlayer, event){
		console.log('selectBox')
		console.log(event)
		console.log(event.srcElement)
		console.log(currPlayer)
		if (currPlayer === 'playerOne'){
			event.srcElement.innerText = playerOne.symbol


		}
		else {event.srcElement.innerText = playerTwo.symbol}
	}
	for (let i = 0; i < squares.length; i++){
		//console.log(squares[i]) 
		state.currPlayer = 'playerOne'
		//remove after^
		squares[i].addEventListener("click", selectBox.bind(null, state.currPlayer))	
		squares[i].classList.add(`square${i}`)
		console.log(squares[i])
		} 
	const startGameFunc = function(){
		state.isGameOn = true
		state.playerOne.name = document.getElementById('playerOne').value
		state.playerTwo.name = document.getElementById('playerTwo').value
		const startScreen = document.getElementById('twoPlayerStartScreen')
		startScreen.style.display = 'none'
		const playerTypes = ['1','2']
		state.startingPlayer = playerTypes[Math.floor(Math.random()*playerTypes.length)]
		console.log(state.startingPlayer)
		//const turnScreen = document.getElementById('playerTurnScreen')
		//turnScreen.style.display = 'block'
		const playerOneNameSpan = document.querySelector('#playerOneNameWrapper #playerOneDisplayName')
		console.log(playerOneNameSpan)
		const playerTwoNameSpan = document.querySelector('#playerTwoNameWrapper #playerTwoDisplayName')
		console.log(playerTwoNameSpan)
		playerOneNameSpan.innerText = state.playerOne.name
		playerTwoNameSpan.innerText = state.playerTwo.name
		
		//const currPlayerspan = document.querySelector('#team'+currPlayer+'namewrapper .isCurrentPlayer')
		//currPlayerspan.style.display = 'block'
// //while (state.isGameOn === true){





// 	//update winner
// }
alert(`${state.winner} has won the game!`)
	}

	
	startGameBtn.addEventListener('click', startGameFunc)
	
}
initGame()
// for loop 
// if, else if, else
// templating and rendering
// dynamically create array boxes
// rename grid class
// X's and O's
//adjust code for randomly selected
//every time box is clicked do if check full or not 
// know when player wins 
// create reset button 