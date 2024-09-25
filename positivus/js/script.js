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