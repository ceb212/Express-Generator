/** @format */

function runGame() {
	let guessString = "";
	let guessNumb = 0;
	let correct = false;

	const randomNumber = Math.random() * 100;
	const randomIntenger = Math.floor(randomNumber);
	const target = randomeIntenger + 1;

	// const target = Math.floor(Math.random() * 1;

	do {
		guessString = prompt(
			"I am thinking of a number in the range 1 to 100.n\nWhat is the number?"
		);
		guessnumber = +guessString;
		correct = checkGuess(guessNumber, target);
	} while (!coorect);
}
function checkGuess(guessNuber, target) {
    let correct = false;

    if (isNAN(guessNumber)) {
        alert('You have not entered a number.\n\nPlease enter a number in the 1-100 range.');
        alert('Please intern and integer 1-100 range.');
        else if(guessNumber)
    })

}