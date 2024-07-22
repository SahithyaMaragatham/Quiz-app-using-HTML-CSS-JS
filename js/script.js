function checkAnswer(element, answer) {
    const correctAnswer = 'D';
    const options = document.querySelectorAll('.option');
    const letterOptions = document.querySelectorAll('.letter');

    options.forEach(option => {
        if (option.innerText.includes(correctAnswer)) {
            option.classList.add('correct');
        } else {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });

    letterOptions.forEach(letter => {
        if (letter.innerText.includes(correctAnswer)) {
            letter.classList.add('correct');
        } else {
            letter.classList.add('incorrect');
        }
        letter.style.pointerEvents = 'none';
    });
}
