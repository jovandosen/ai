const container = document.getElementById("container");

// Create 100 div elements
for (let i = 0; i < 50; i++) {
    const div = document.createElement('div');
    div.className = 'circle';
    container.appendChild(div);
}
  
// Calculate the angle between each div
const angle = (2 * Math.PI) / 50;

// Position the divs in a circle
const circleDivs = document.querySelectorAll('.circle');

circleDivs.forEach((div, index) => {
    const x = Math.cos(angle * index) * 200 + window.innerWidth / 2;
    const y = Math.sin(angle * index) * 200 + window.innerHeight / 2;
    div.style.left = x + 'px';
    div.style.top = y + 'px';
});

var initial = 0;
var interval;
var colorClasses = ["circle-red", "circle-green", "circle-blue"];
var colorCounter = 0;

function addStyle() {

    if(colorCounter >= 3) {
        colorCounter = 0;
    }

    circleDivs.forEach((div, index) => {
        div.classList.remove(colorClasses[colorCounter]);
    });

    if(initial >= 50) {
        initial = 0;
        colorCounter++;
    }

    circleDivs[initial].classList.add(colorClasses[colorCounter]);
    
    initial++;

}

interval = setInterval(addStyle, 50);