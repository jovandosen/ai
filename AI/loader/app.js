const container = document.getElementById("container");

// Create 100 div elements
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.className = 'circle';
    container.appendChild(div);
}
  
// Calculate the angle between each div
const angle = (2 * Math.PI) / 100;

// Position the divs in a circle
const circleDivs = document.querySelectorAll('.circle');

circleDivs.forEach((div, index) => {
    const x = Math.cos(angle * index) * 200 + window.innerWidth / 2;
    const y = Math.sin(angle * index) * 200 + window.innerHeight / 2;
    div.style.left = x + 'px';
    div.style.top = y + 'px';
});