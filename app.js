function isHexColor(str) {
    const regex = /^#([0-9a-fA-F]){6}$/i;
    return regex.test(str);
}

function isWeight(str) {
    const num = Number(str);
    return Number.isFinite(num) && num < 1000;
}

const colorInput = document.getElementById('color');
const weightInput = document.getElementById('weight');
const colorError = document.getElementById('colorError');
const weightError = document.getElementById('weightError');
const button1 = document.getElementById('button1');

button1.addEventListener('click', 
    function makeDecal(){
        const color = colorInput.value;
        const weight = weightInput.value;
        colorError.textContent = "";
        weightError.textContent = "";

        /*Check if inputted values are valid*/
        if (isHexColor(color) == false) {
            colorError.textContent = "Invalid color!";
        } else if (isWeight(weight) == false) {
            weightError.textContent = "Invalid weight!";
        } else {
            /*Make the decal*/
            alert("Making the decal");
        }

    }
)




