function play() {
    hideElementByid('home');
    showElementByid('play-ground');
    continueGame();
}

function handleKeyboardKeyupEvent(event) {
    const playerPressed = event.key;

    const currentAlphabetElement = document.getElementById('current-alphabet');

    currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet, playerPressed );

    // check condition

    if(playerPressed === expectedAlphabet){
        // score increment

        const scorr = document.getElementById('score');

        const scoree = scorr.innerText;

        const currentScore = parseInt(scoree);
        const newScore = currentScore +1;


        scorr.innerText = newScore;



        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else{

        const scorr = document.getElementById('life');

        const scoree = scorr.innerText;

        const currentScore = parseInt(scoree);
        const newScore = currentScore -1;


        scorr.innerText = newScore;
        console.log('you lose');
    }


}

document.addEventListener('keyup', handleKeyboardKeyupEvent);

function continueGame() {
    const alphabet = getRandomAlphabet();

    const currentAlphabetElement = document.getElementById('current-alphabet');

    currentAlphabetElement.innerText = alphabet;
    setBackgroundColor(alphabet);
}