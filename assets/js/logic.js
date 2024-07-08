//Tying my js to the emoji I'm using as a button
const modeToggle = document.querySelector('#modeToggle');

//tying my js to the body so I can easily swap all colors
const body = document.querySelector('body');

//getting a variable tied to whatever state we have, if any, from the dark/light mode
let chosenMode = localStorage.getItem('modeStored');

//function looks at the state of light/dark mode, if any. By default, the page will be in light mode (null state), but otherwise it will load as whatever the state icon is set to.
    //I am kind of really liking using emoji in code. It honestly makes it a lot easier for me to keep track of certain stuff.
const lightDark = function() {
    if (chosenMode == null || chosenMode === '☀️') {
        body.removeAttribute('class', 'dark');
        body.setAttribute('class', 'light');
        console.log("The screen view mode is ☀️");
    } else if (chosenMode === '🌙') {
        body.removeAttribute('class', 'light');
        body.setAttribute('class', 'dark')
        modeToggle.textContent = modeToggle.textContent.replace('☀️','🌙');
        console.log("The screen view mode is 🌙");
    }
}
lightDark();

//Regardless of whether it renders as a sun or moon, the event listener allows the user to toggle between the two accurately, and it sets to state so reloaded pages will have whatever state the user left off with.
    //I was able to make this really simple by just having a light and dark class for everything in the body.
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