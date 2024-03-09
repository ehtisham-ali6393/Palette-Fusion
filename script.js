// Function for mixing the colors
function colorChange() {
    var redSlider = document.getElementById("red");
    var greenSlider = document.getElementById("green");
    var blueSlider = document.getElementById("blue");
    var redValue = document.getElementById("text-input-red");
    var greenValue = document.getElementById("text-input-green");
    var blueValue = document.getElementById("text-input-blue");
    var red = redSlider.value;
    var green = greenSlider.value;
    var blue = blueSlider.value;
    redValue.value = red;
    greenValue.value = green;
    blueValue.value = blue;
    document.getElementById("box").style.backgroundColor="rgba("+red+","+green+","+blue+", 0.62)";
    document.getElementById("display").style.backgroundColor="rgb("+red+","+green+","+blue+")";
    updateHexDisplay(red, green, blue);
}

    // main slider control (aio : all in one)
    function colorChangeAio() {
        var aioSlider = document.getElementById("aio");
        var redSlider = document.getElementById("red");
        var greenSlider = document.getElementById("green");
        var blueSlider = document.getElementById("blue");
        var aio = aioSlider.value;
        redSlider.value = aio;
        greenSlider.value = aio;
        blueSlider.value = aio;
        colorChange(); 
    }
    
    function colorChangeNI() {
        var redSlider = document.getElementById("red");
        var greenSlider = document.getElementById("green");
        var blueSlider = document.getElementById("blue");
        var redValue = document.getElementById("text-input-red");
        var greenValue = document.getElementById("text-input-green");
        var blueValue = document.getElementById("text-input-blue");
        var red = redValue.value;
        var green = greenValue.value;
        var blue = blueValue.value;
        if (red === "") red = "0";
        if (green === "") green = "0";
        if (blue === "") blue = "0";
        redSlider.value = red;
        greenSlider.value = green;
        blueSlider.value = blue;
        document.getElementById("box").style.backgroundColor="rgba("+red+","+green+","+blue+", 0.62)";
        document.getElementById("display").style.backgroundColor="rgb("+red+","+green+","+blue+")";
        updateHexDisplay(red, green, blue);
    }
    


function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}
function updateHexDisplay() {
    var redSlider = document.getElementById("red");
    var greenSlider = document.getElementById("green");
    var blueSlider = document.getElementById("blue");
    var hexCode = rgbToHex(parseInt(redSlider.value), parseInt(greenSlider.value), parseInt(blueSlider.value));
    document.getElementById("hex-display").innerText = "HEX : " + hexCode;
}


