function toggleMenu() {
    let menuItems = document.getElementById("headerMenuitems");
    if (menuItems.style.display === "none" || menuItems.style.display === "") {
        menuItems.style.display = "flex";
        menuItems.style.transform = "scale(1)";
        menuItems.style.opacity = 1;
    } else {
        menuItems.style.display = "none";
        menuItems.style.transform = "scale(0.95)";
        menuItems.style.opacity = 0;
    }
}

const swiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

function toggleExpand(event, cardId, iconId) {
    const card = document.getElementById(cardId);
    const cardBody = card.querySelector('.workingprocess__card-body');
    const icon = document.getElementById(iconId);

    cardBody.classList.toggle('expanded');
    card.classList.toggle('active');


    if (cardBody.classList.contains('expanded')) {
        console.log("check")
        icon.src = "./icons/minus-icon.svg";
    } else {
        icon.src = "./icons/plus-icon.svg";
    }
}
