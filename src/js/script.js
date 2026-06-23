const imagesName = ["deep-earth", "night-arcade", "soccer-team", "grid", "from-above", "pocket-borealis", "curiosity", "fisheye"];

const cards = document.querySelectorAll(".creations-grid .card");

cards.forEach((card, index) => {

    card.style.backgroundImage = `url('./src/images/mobile/image-${imagesName[index]}.jpg')`;

});