let basket = document.getElementById('basket')
let massage_basket = document.getElementById('massage-basket')

basket.addEventListener('click', function() {
    if (massage_basket.style.display === "flex") {
        massage_basket.style.display = "none";
    } else {
        massage_basket.style.display = "flex";
    }
});
