/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Steps

// Step 1 - create onload handler
window.onload = () => {
    main();
}
function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('change-btn');
    const colorField = document.getElementById('output');
    btn.addEventListener('click', function () {
        let bgColor = generatingHexColor();
        root.style.backgroundColor = bgColor;
        colorField.value = bgColor;
    })
}

// step 2 - random color generator function
function generatingHexColor() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}