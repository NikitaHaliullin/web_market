let basket = document.getElementById('basket')
let massage_basket = document.getElementById('massage-basket')
let massage_computers = document.getElementById('massage-computers')
let choose = document.getElementById('choose')
let high_low = document.getElementById('high_low')
let pc_color = document.getElementById('PcColor')
let computers = document.getElementById('computers')
let price_text = document.querySelectorAll('.price_text')
let title_text = document.querySelectorAll('.title_text')
let cards = document.querySelectorAll('.card')
let name_image = document.querySelectorAll('.name_image')
let color_text = document.querySelectorAll('.black')

let pos = -425
let isOpen = false
let start = true

function animate() {
    let target = isOpen ? -425 : 10

    if (!isOpen && pos < target && start == true) {
        pos += 15
        massage_basket.style.right = pos + "px"
        requestAnimationFrame(animate)
        if (pos === 10) {
            isOpen = true
            start = false
            massage_basket.style.position = "fixed"
        }
    } else if (isOpen && pos > target && start == true) {
        pos -= 15
        massage_basket.style.right = pos + "px"
        requestAnimationFrame(animate)
        if (pos === -425) {
            massage_basket.style.display = "none"
            isOpen = false
            start = false
        }
    }
}

basket.addEventListener('click', function () {
    start = true
    if (!isOpen){
        massage_basket.style.display = "flex"
        animate()
    } else {
        animate()
    }

})

choose.addEventListener("click", function () {
    let Min = document.getElementById('min').value
    let Max = document.getElementById('max').value
    let color_value = pc_color.value
    let sort_value = high_low.value
    let text_number
    let id_price = {}
    let sorted
    let img

    for (let i = 0; i < price_text.length; i++) {
        text_number = Number(price_text[i].textContent.trim())
        console.log(text_number)
        img = name_image[i].src;
        let title = title_text[i].textContent.trim()
        let color = color_text[i].textContent.trim()
    
        id_price[`computer_${i + 1}`] = {
            price: text_number,
            img: img,
            title: title,
            color: color
        };
    }
    
    if (sort_value === "high") {
        sorted = Object.entries(id_price).sort((a, b) => b[1].price - a[1].price)
    } else {
        sorted = Object.entries(id_price).sort((a, b) => a[1].price - b[1].price)
    }
    
    for (let i = 0; i < sorted.length; i++) {

            if (sorted[i][1].color == color_value) {
                cards[i].innerHTML = `                                
                <div id="${sorted[i][0]}">
                    <img src="${sorted[i][1].img}" width="140px" height="200px">
                    <p class="title_text">${sorted[i][1].title}</p>
                    <p class="price_text">${sorted[i][1].price}</p>
                    <p class="black">${sorted[i][1].color}</p>
                </div>
                `;

                if (sorted[i][1].price >= Min && sorted[i][1].price <= Max || Max === "" && Min === "") {
                    cards[i].style.display = "flex"
                } else {
                    console.log(color_value)
                    cards[i].style.display = "none"
                }

            } else if (color_value === "All") {

                cards[i].innerHTML = `                                
                <div id="${sorted[i][0]}">
                    <img src="${sorted[i][1].img}" width="140px" height="200px">
                    <p class="title_text">${sorted[i][1].title}</p>
                    <p class="price_text">${sorted[i][1].price}</p>
                    <p class="black">${sorted[i][1].color}</p>
                </div>
                `;

                if (sorted[i][1].price >= Min && sorted[i][1].price <= Max || Max === "" && Min === "") {
                    cards[i].style.display = "flex"
                } else {
                    cards[i].style.display = "none"
                }
            } else {
                cards[i].style.display = "none"
            }
        
    }

})

cards.forEach((card) => {
    card.addEventListener("click", () => {
        let img = card.querySelector("img").src
        let price = card.querySelector('.price_text').textContent.trim()
        let title = card.querySelector('.title_text').textContent.trim()
        let color = card.querySelector('.black').textContent.trim()
        
        localStorage.setItem('selectComputer', JSON.stringify({
            img: img,
            price: price,
            title: title,
            color: color
        }))
    })
})




