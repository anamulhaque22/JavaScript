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
    btn.addEventListener('click', function () {
        let bgColor = generatingRGBColor();
        root.style.backgroundColor = bgColor;
    })
}

// step 2 - random color generator function
function generatingRGBColor() {
    let red = Math.round((Math.random() * 255));
    let green = Math.round((Math.random() * 255));
    let blue = Math.round((Math.random() * 255));
    return `rgb(${red}, ${green}, ${blue})`;
}