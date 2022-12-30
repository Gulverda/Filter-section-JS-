let menu1 = document.querySelector("#menu-icon");
let navbar = document.querySelector(".menu");

menu1.addEventListener("click",function () {
    navbar.classList.toggle("active");
})

window.onscroll = () => {
    navbar.classList.remove("active")
}
(function() {

    const buttons = document.querySelectorAll('.btn')
    const storeImages = document.querySelectorAll('.store-item')

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault()
            const filter = e.target.dataset.filter

            storeImages.forEach((item) => {
                if (filter === 'all') {
                    item.style.display = 'block'
                } else {
                    if (item.classList.contains(filter)) {
                        item.style.display = 'block'
                    } else {
                        item.style.display = 'none'
                    }
                }
            })
        })
    })
})();