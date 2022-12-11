const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input')
const keysCheckbox = document.querySelector('.keys-checkbox input')

let allKeys = [],
audio = new Audio('tunes/tunes/a.wav'); // audio src is '.a'

const playTune = (key) => {
    audio.src = `tunes/tunes/${key}.wav` // will pass the .wav based on which key is pressed
    audio.play(); // plays audio

    const clickedKey = document.querySelector(`[data-key='${key}']`) // this is going to get whichever key was clicked
    clickedKey.classList.add('active'); // adds the active css class 
    setTimeout(() => { // sets time until the active class is removed
        clickedKey.classList.remove('active');
    }, 150)
} 

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key) //this adds the data-key values to the all keys array
    // This is going to call the playTune function which passes the data-key value as argument
    key.addEventListener('click', () => playTune(key.dataset.key))
});

const pressedKey = (e) => {
    // if the key that was pressed is the the allKeys array only call the playTune function
    if(allKeys.includes(e.key)) playTune(e.key) 
}

const handleVolume = (e) => {
    audio.volume = e.target.value; // passes the slider value as audio volume
}


document.addEventListener('input', handleVolume)
document.addEventListener('keydown', pressedKey)