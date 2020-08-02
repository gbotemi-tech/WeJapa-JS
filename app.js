//select DOM
const colorOutput = document.getElementById('color');
const message = document.querySelector('.small');
const numberInput = document.getElementById('number');
const btn = document.querySelector('.btn');

//generate random whole number
function colorGenerator(min, max) {
    const randGen = min + Math.floor(Math.random() * (max - min + 1));
    return randGen;
}

//when the input number changes
numberInput.addEventListener('change', () => {
    const randNumber = numberInput.value * 1;

    //rgba color code
    const r = colorGenerator(randNumber, 255);
    const g = colorGenerator(randNumber, 255);
    const b = colorGenerator(randNumber, 255);
    const rgb = `rgb(${r}, ${g}, ${b})`;

    
    //generate color upon clicked
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        checkInputs();

    });

    //generate color upon clicked
    function checkInputs() {
        //get values from input
        const numberValue = numberInput.value.trim();

        if (numberValue === "") {
            //if input is empty
            message.textContent = `Enter a valid number`;
            numberInput.style.borderColor = 'red';
            message.style.color = 'red';
        } else if (numberValue < 0 || numberValue > 255) {
            //if input has a value less than 0 and greater than 255
            message.textContent = `Enter number between 0 and 255`;
            message.style.color = 'red';
            message.style.fontSize = '16px';
            numberInput.style.borderColor = 'red';
        } else {
            colorOutput.style.backgroundColor = rgb;
            message.textContent = rgb;
            message.style.color = 'black';
            numberInput.style.borderColor = rgb;
            colorOutput.style.border = rgb;
            btn.style.backgroundColor = rgb;
        }
    }
});