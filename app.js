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
const button1 = document.getElementById('button1');

button1.addEventListener('click', 
    function makeDecal(){
        const color = colorInput.value;
        const weight = weightInput.value;

        /*Check if inputted values are valid*/
        if (isHexColor(color) == false) {
            alert("Inputted color is invalid!");
        }
        if (isWeight(weight) == false) {
            alert("Inputted weight is invalid!");
        }

        alert("Making the decal");
        
        /*Make the decal*/

    }
)




