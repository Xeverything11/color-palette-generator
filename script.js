const colorPaletteResult = document.getElementById("color-palette-result");
const fromColorText = document.getElementById("from-color-text");
const toColorText = document.getElementById("to-color-text");

function updateColorText() {
    const fromColor = document.getElementById("from").value;
    const toColor = document.getElementById("to").value;

    fromColorText.textContent = fromColor; // Update the text for from-color-text
    toColorText.textContent = toColor;    // Update the text for to-color-text
}

function handlePaletteInputChange() {
    updateColorText();
    submitColorPalette();
}

// Add event listeners to update the color text and palette when any input changes
document.getElementById("from").addEventListener("input", handlePaletteInputChange);
document.getElementById("to").addEventListener("input", handlePaletteInputChange);
document.getElementById("steps").addEventListener("input", handlePaletteInputChange);
document.getElementById("methods").addEventListener("input", handlePaletteInputChange);

// Optionally, call once on page load to initialize
handlePaletteInputChange();

function submitColorPalette() {
    var fromColor = document.getElementById("from").value;
    var toColor = document.getElementById("to").value;
    var steps = parseInt(document.getElementById("steps").value, 10);
    var method = document.getElementById("methods").value;
    colorPaletteResult.innerHTML = "";
    for (let i = 0; i < steps; i++) {
        // Create the palette cell with Tailwind grid classes
        var colorPaletteDiv = document.createElement("div");
        colorPaletteDiv.className = "h-24 rounded";
        // Calculate the percentage for color-mix
        var percent = (i / (steps - 1)) * 100;
        colorPaletteDiv.style.backgroundColor = `color-mix(in ${method}, ${fromColor}, ${toColor} ${percent}%)`;
        colorPaletteResult.appendChild(colorPaletteDiv);
    }
}

// Add event listeners to update the color text when the color inputs change
document.getElementById("from").addEventListener("input", updateColorText);
document.getElementById("to").addEventListener("input", updateColorText);

document.getElementById("user-agent").textContent = navigator.userAgent;
