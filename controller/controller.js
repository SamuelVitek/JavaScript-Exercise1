//Set of birds and necessary attributes to manipulate them
let birds = ['Sparrow', 'Peacock', 'Dove', 'Crow', 'Goose', 'Ostrich', 'Pigeon', 'Turkey'];
let currentBirdsIndex = 0; //Helps with which bird should be shown
let firstOrLast = 0; //0 - trying to find first letter, 1 - trying to find last letter
let currentBird;
let h1 = document.getElementById('bird');
let circle = document.getElementById('circle');

setBird();
showBird();

/**
 * On pressing a key window reacts
 * It removes all occurrences of the letter in the birds name alternately from the beginning and from the end of the name
 */
document.addEventListener('keydown', function(e) {
    let actualKey = e.code.toUpperCase().substring(3);

    //If user is guessing first or last letter
    if (firstOrLast === 0) {
        if (currentBird[0] === actualKey) {
            deleteLetterSuccess(actualKey)
        } else {
            circle.classList.remove('fa-circle-check');
            circle.classList.add('fa-circle-xmark');
            return;
        }
        firstOrLast = 1;
    } else {
        if (currentBird[currentBird.length - 1] === actualKey) {
            deleteLetterSuccess(actualKey)
        } else {
            circle.classList.remove('fa-circle-check');
            circle.classList.add('fa-circle-xmark');
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

});

//Removes the letter equal to the key from the birds name
function deleteLetterSuccess(key) {
    currentBird = currentBird.replaceAll(key, '');
    showBird();
    circle.classList.remove('fa-circle-xmark');
    circle.classList.add('fa-circle-check');
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