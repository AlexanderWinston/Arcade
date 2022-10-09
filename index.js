function initGame(){
	const gameBoard = [null, null, null, null, null, null, null, null, null]
	let currPlayer;
	const startGameButton = document.getElementById('twoPlayerStartGame')
	startGameButton.addEventListener('click', function(){
		const teamXName = document.getElementById('teamxname').value
		const teamOName = document.getElementById('teamoname').value
		const startScreen = document.getElementById('twoPlayerStartScreen')
		startScreen.style.display = 'none'
		const turnScreen = document.getElementById('playerTurnScreen')
		turnScreen.style.display = 'block'
		const teamxnamespan = document.querySelector('#teamxnamewrapper #teamXdisplayname')
		console.log(teamxnamespan)
		const teamonamespan = document.querySelector('#teamonamewrapper #teamOdisplayname')
		console.log(teamonamespan)
		teamxnamespan.innerText = teamXName
		teamonamespan.innerText = teamOName
		const playerTypes = ['x','o']
		currPlayer = playerTypes[Math.floor(Math.random()*playerTypes.length)]
		const currPlayerspan = document.querySelector('#team'+currPlayer+'namewrapper .isCurrentPlayer')
		currPlayerspan.style.display = 'block'

	})
}
initGame()
