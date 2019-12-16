window.addEventListener('load', init);

/////////////// DIFFICULTY SETTING //////////////////////
const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');

let time;
let levels = {
    easy: 5,
    medium: 3,
    hard: 2
};

let currentLevel;
easy.addEventListener('click', () => {
    currentLevel = levels.easy;
    time = currentLevel;
    seconds.innerHTML = currentLevel;
    wordInput.focus();
});
medium.addEventListener('click', () => {
    currentLevel = levels.medium;
    time = currentLevel;
    seconds.innerHTML = currentLevel;
    wordInput.focus();
});
hard.addEventListener('click', () => {
    currentLevel = levels.hard;
    time = currentLevel;
    seconds.innerHTML = currentLevel;
    wordInput.focus();
});
///////////////////////////////////////////////////////

//////////////////// LANGUAGE SETTING//////////////////
const indonesia = document.getElementById('indonesia');
const usa = document.getElementById('USA');
const skr = document.getElementById('southKorea');

let language = {
    indonesian: ['demam','kocak','amplop','ompong','nongkrong','inteligensia','idealisme','transformasi','propaganda','narsisistik','justifikasi','urbanisasi','tetikus','warganet',
    'pranala','swafoto','hedonisme','meritokrasi','bersilengah','cakna','bertiwikrama','diktator','dasawarsa'],
    english: ['aberration', 'abnegation', 'adumbrate', 'aggrandize', 'beguile', 'blandishment', 'camaraderie', 'circumlocution', 'commensurate', 'conflagration', 'conflagration',
    'debacle', 'demagogue', 'egregious', 'embezzlement', 'equivocal', 'fortuitous', 'grandiloquent', 'hegemony', 'idiosyncratic', 'incontrovertible', 'interlocutor', 'linchpin',
    'negligent', 'ostensible', 'pejorative'],
    hangul: ['maenyeon', 'meoksseumnida', 'oneul', 'naeil', 'eoje', 'dallyeogeseo', 'itsseumnida', 'garikimnida', 'sigye', 'meogeul', 'sayonghada', 'jibanireul', 'gicharo',
    'hyanghae', 'sajineul', 'mandeunda', 'ilmoreul']
};
let currentLanguage;
indonesia.addEventListener('click', () => {
    currentLanguage = language.indonesian;
    showWord(currentLanguage);
    wordInput.focus();
});
usa.addEventListener('click', () => {
    currentLanguage = language.english;
    showWord(currentLanguage);
    wordInput.focus();
}); 
skr.addEventListener('click', () => {
    currentLanguage = language.hangul;
    showWord(currentLanguage);
    wordInput.focus();
});     
/////////////////////////////////////////////////////////


// Globals
let score = 0;
let isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

function init() {
    wordInput.addEventListener('input', startMatch);
    setInterval(countdown, 10);
    setInterval(checkStatus, 50);
    console.log(time);    
}

function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        showWord(currentLanguage);
        time = currentLevel + 1;
        wordInput.value = '';
        score++;
    }
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

function showWord(word) {
    const randIndex = Math.floor(Math.random() * word.length);
    currentWord.innerHTML = word[randIndex];
}

function countdown() {
    if (time > 0) {
        time = time - 0.01;
    } else if (time === 0) {
        isPlaying = false;
    }
    // timeDisplay.innerHTML = time;
    timeDisplay.innerHTML = time.toFixed(2);
}

const checkStatus = () => {
    if (!isPlaying && time === 0) {
        message.innerHTML = "Game Over!!!";
        score = -1;
    }
};