window.onload = function() {
    var generateBtn = document.getElementById("generate");
    generateBtn.onclick = function() {
        var fromRed = parseInt(document.getElementById("fromRed").value, 10);
        var fromGreen = parseInt(document.getElementById("fromGreen").value, 10);
        var fromBlue = parseInt(document.getElementById("fromBlue").value, 10);
        var toRed = parseInt(document.getElementById("toRed").value, 10);
        var toGreen = parseInt(document.getElementById("toGreen").value, 10);
        var toBlue = parseInt(document.getElementById("toBlue").value, 10);
        var steps = parseInt(document.getElementById("steps").value, 10);
        var paletteOutput = document.getElementById("palette-output");
        paletteOutput.innerHTML = "";
        var stepR = (toRed - fromRed) / (steps - 1);
        var stepG = (toGreen - fromGreen) / (steps - 1);
        var stepB = (toBlue - fromBlue) / (steps - 1);
        for (var i = 0; i < steps; i++) {
            var r = Math.round(fromRed + stepR * i);
            var g = Math.round(fromGreen + stepG * i);
            var b = Math.round(fromBlue + stepB * i);
            var color = "rgb(" + r + ", " + g + ", " + b + ")";
            var div = document.createElement("div");
            div.style.backgroundColor = color;
            paletteOutput.appendChild(div);
        }
    };
};