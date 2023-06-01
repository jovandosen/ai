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

function addStyle() {

    circleDivs.forEach((div, index) => {
        div.classList.remove("circle-background");
    });

    if(initial >= 50) {
        initial = 0;
    }

    circleDivs[initial].classList.add("circle-background");
    
    initial++;

}

interval = setInterval(addStyle, 30);