const colorPaletteResult = document.getElementById("color-palette-result");

function submitColorPalette() {
    var fromColor = document.getElementById("from").value;
    var toColor = document.getElementById("to").value;
    var steps = document.getElementById("steps").value;
    var method = document.getElementById("methods").value;
    colorPaletteResult.innerHTML = "";
    for (let i = 0; i < steps; i++) {
        var colorPaletteDiv = document.createElement("div");
        colorPaletteDiv.className = "col-4 col-sm-3 col-md-2 col-xl-1";
        var colorPaletteDivInner = document.createElement("div");
        colorPaletteDivInner.className = "py-5 my-2 w-auto rounded";
        colorPaletteDivInner.style.backgroundColor = "color-mix(in " + method + ", " + fromColor + ", " + toColor + " " + (i / (steps - 1)) * 100 + "%)";
        colorPaletteResult.appendChild(colorPaletteDiv);
        colorPaletteDiv.appendChild(colorPaletteDivInner);
    }
}