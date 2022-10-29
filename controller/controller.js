let birds = ['Sparrow', 'Peacock', 'Dove', 'Crow', 'Goose', 'Ostrich', 'Pigeon', 'Turkey'];
let currentBirdsIndex = 0;
let firstOrLast = 0; //0 - trying to find first letter, 1 - trying to find last letter
let currentBird;
let h1 = document.getElementById('bird');

setBird();
showBird();

document.addEventListener('keydown', logKey);

function logKey(e) {
    let actualKey = e.code.toUpperCase().substring(3);

    //If user is guessing first or last letter
    if (firstOrLast === 0) {
        if (currentBird[0] === actualKey) {
            currentBird = currentBird.replaceAll(actualKey, '');
            showBird();
        } else {
            //pups-up decline
            return;
        }
        firstOrLast = 1;
    } else {
        if (currentBird[currentBird.length - 1] === actualKey) {
            currentBird = currentBird.replaceAll(actualKey, '');
            showBird();
        } else {
            //pups-up decline
            return;
        }
        firstOrLast = 0;
    }
    //Move to other bird, if the string is empty
    if (currentBird === '') {
        currentBirdsIndex++;
        firstOrLast = 0;
        setBird();
        showBird();
    }

}

//Rewrites the birds name on the page
function showBird() {
    h1.innerHTML = currentBird;
}

//Sets value of currentBird
function setBird() {
    if (currentBirdsIndex === birds.length) {
        alert("Congratulations!!! You finished the game!\nIf you wish to play again, reload the page.");
    }
    currentBird = birds[currentBirdsIndex].toUpperCase();
}