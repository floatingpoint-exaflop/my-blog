
const modeToggle = document.querySelector('#modeToggle');

const body = document.querySelector('body');

let chosenMode = localStorage.getItem('modeStored');
const applyMode = chosenMode.value;
const lightDark = function() {
    if (!applyMode || applyMode === '☀️') {
        body.setAttribute('class', 'light');
    } else if (applyMode === '🌙') {
        body.setAttribute('class', 'light')
    }
}

body.setAttribute('class', 'light');

modeToggle.addEventListener('click', function (event) {
    event.preventDefault();
    if (body.classList.contains('light')) {
    body.classList.replace('light', 'dark');
    modeToggle.textContent = modeToggle.textContent.replace('☀️','🌙');
    localStorage.setItem('modeStored', '🌙');
    console.log('The screen view mode has been changed to 🌙');
    } else if (body.classList.contains('dark')) {
        body.classList.replace('dark', 'light');
        modeToggle.textContent = modeToggle.textContent.replace('🌙','☀️');
        console.log('The screen view mode has been changed to ☀️');
        localStorage.setItem('modeStored', '☀️');
    }
});