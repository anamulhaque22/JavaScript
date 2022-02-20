/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Steps
//Globals Variable
let div = null;
// Step 1 - create onload handler
window.onload = () => {
    main();
}
function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const copyBtn = document.getElementById('copy-btn');
    const colorField = document.getElementById('output');
    btn.addEventListener('click', function () {
        let bgColor = generatingHexColor();
        root.style.backgroundColor = bgColor;
        colorField.value = bgColor;
    })

    //copy the color code by clinking copy button
    copyBtn.addEventListener('click', function () {
        navigator.clipboard.writeText(colorField.value);
        if (div != null) {
            div.remove();
            div = null;
        }
        generateTostMesssage(`${colorField.value} copied`);
    })
}
function generateTostMesssage(msg) {
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'tost-message tost-message-slide-in';
    div.addEventListener('click', function () {
        div.classList.remove('tost-message-slide-in');
        div.classList.add('tost-message-slide-out');
        div.addEventListener('animationend', function () {
            div.remove();
            div = null;
        })
    })
    document.body.appendChild(div);
}
// step 2 - random color generator function
function generatingHexColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}