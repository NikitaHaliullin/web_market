let basket = document.getElementById('basket')
let massage_basket = document.getElementById('massage-basket')
let massage_computers = document.getElementById('massage-computers')
let choose = document.getElementById('choose')
let high_low = document.getElementById('high_low')
let pc_color = document.getElementById('PcColor')
let computers = document.getElementById('computers')
let price_text = document.querySelectorAll('.price_text')
let title_text = document.querySelectorAll('.title_text')
let card = document.querySelectorAll('.card')

console.log(card[0].innerHTML)

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
    let color_value = pc_color.value
    let sort_value = high_low.value
    let text_number

    let max = -Infinity
    let maxIndex = -1

    console.log(text_number)

    for (let i = 0; price_text.length; i++) {
        text_number = Number(price_text[i].textContent.slice(0, 5))

        if(text_number > max) {
            max = text_number
            maxIndex = i
        }

        card[i].innerHTML = `                                
            <div id="computer_${i}">
                <img src="image/407295381.webp" width="140px" height="200px">
                <p class="title_text">Ігровий компютер на основі gtx 1060 6gb; ryzen 5 3600; b450m; bp 1000w</p>
                <p class="price_text">${text_number}</p>
            </div>
            `
            console.log(card[i].innerHTML)
    }

    
})

