const slider = document.createElement("input");
slider.type = "range";
slider.min = 0;
slider.max = 100;
slider.value = 50;
document.body.appendChild(slider);

slider.addEventListener("input", (event) => {
  console.log(event.target.value);
});

const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
  ];
  
  const container = document.createElement("div");
  container.style.width = "600px";
  container.style.height = "400px";
  container.style.overflow = "hidden";
  document.body.appendChild(container);
  
  const image = document.createElement("img");
  image.src = images[0];
  image.style.width = "100%";
  image.style.height = "100%";
  container.appendChild(image);
  
  let currentIndex = 0;
  
  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
  }
  
  function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    image.src = images[currentIndex];
  }
  
  const nextButton = document.createElement("button");
  nextButton.textContent = "Next";
  nextButton.addEventListener("click", showNextImage);
  document.body.appendChild(nextButton);
  
  const previousButton = document.createElement("button");
  previousButton.textContent = "Previous";
  previousButton.addEventListener("click", showPreviousImage);
  document.body.appendChild(previousButton);
  