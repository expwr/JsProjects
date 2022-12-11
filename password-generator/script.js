// Pulling the element by id from the html file
const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('len'); 
const upperEl = document.getElementById('upper'); 
const lowerEl = document.getElementById('lower'); 
const numberEl = document.getElementById('number'); 
const symbolEl = document.getElementById('symbol'); 
const generateEl = document.getElementById('generate'); 

// Stating values for numbers, letters, and symbols that are being used in the generator
const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=';

// Functions to get the actual variable that is used in the password. Math.floor is used for a single element, Math.random is used to make a random value out of the element that it is being multiplied, that is how a random piece of the variables above gets presented.
function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)]; 
}

function getNumber() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

// Brain function, this is going to be how the generator works. The lenEl.value is used to check the value in the text field. Then below that with let password is going to set the field where the password is actually presented to an empty string so that the password can be printed into that. The for statement is going to first check the length of the password then is going to call the function that is used to present the random values. 
function generatePassword() {
    const len = lenEl.value;

    let password = ""

    for (let i = 0; i < len; i++) {
        const x = generateX();
        password += x;
    }

    pwEl.innerText = password;
}

// The generateX function is going to be used to generate the actual password that is being output in the function above. The xs const is going to create an empty list for the numbers, letters, and symbols to be put into. Then after that each of the if statements are going to push the values that are being generated randomly by each of the 4 functions. Length of xs is also going to be checked because a password cannot have 0 length because it will be undefined if so, so that is implemented to make it impossible to have a break in the function
function generateX() {
    const xs = [];
    if(upperEl.checked) {
        xs.push(getUppercase())
    }

    if(lowerEl.checked) {
        xs.push(getLowercase())
    }

    if(numberEl.checked) {
        xs.push(getNumber())
    }

    if(symbolEl.checked) {
        xs.push(getSymbol())
    }

    if (xs.length === 0) return ''


    return xs[Math.floor(Math.random() * xs.length)];
}

// This is going to to call the function on click and generate the password
generateEl.addEventListener('click', generatePassword);

// Once again using the addEventListener to take on click then using a new object to create a new element from the on click and this new element that is created is going to be a copy of the pwEl that was already generated. Then after the if statement which is just going to check if there is a password there to being with it is going to append the new password to the clipboard with the execCommand then will alert the user that the password has been copied.
copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = pwEl.innerText;

    if (!password) {return; }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard');
});