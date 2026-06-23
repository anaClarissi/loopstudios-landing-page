function showImages() {

    const imagesName = ["deep-earth", "night-arcade", "soccer-team", "grid", "from-above", "pocket-borealis", "curiosity", "fisheye"];

    const cards = document.querySelectorAll(".creations-grid .card");

    const windowWidth = window.innerWidth;

    const imageSrc = windowWidth < 960 ? "mobile" : "desktop";

    cards.forEach((card, index) => {

        card.style.backgroundImage = `url('./src/images/${imageSrc}/image-${imagesName[index]}.jpg')`;

    });
}

function checkBtnSeeAll() {

    const windowWidth = window.innerWidth;

    const btnSeeAllDesktop = document.querySelector(".btn-see-all.desktop");

    const btnSeeAllMobile = document.querySelector(".btn-see-all.mobile");

    if (windowWidth < 960) {

        btnSeeAllDesktop.hidden = true;

        btnSeeAllMobile.hidden = false;

    } else {

        btnSeeAllDesktop.hidden = false;

        btnSeeAllMobile.hidden = true;

    }

}

checkBtnSeeAll();

showImages();
