const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const picture = document.getElementById("picture");

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

picture.appendChild(bgImage);

function randomImageAlert() {
  alert("F5를 눌러봐! 다른 그림도 있어!");
}

bgImage.addEventListener("mouseleave", randomImageAlert, {once : true});