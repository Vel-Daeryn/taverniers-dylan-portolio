const buttonMenu = document.querySelector("nav .burger-menu")
const openBurgerMenu = document.getElementById("burger-menu")
const closeBurgerMenu = document.getElementById("close-burger-menu")
const primaryNav = document.getElementById("primary-navigation")

let stateMenu = true

buttonMenu.addEventListener("click", (e) => {
    e.preventDefault()

    if (stateMenu) {
        stateMenu = false
        openBurgerMenu.classList.add("inactive")
        closeBurgerMenu.classList.remove("inactive")
        primaryNav.classList.add("active")
        buttonMenu.ariaExpanded = true
    } else {
        stateMenu = true
        closeBurgerMenu.classList.add("inactive")
        openBurgerMenu.classList.remove("inactive")
        primaryNav.classList.remove("active")
        primaryNav.classList.add("closed")
        buttonMenu.ariaExpanded = false

        setTimeout(() => {
            primaryNav.classList.remove("closed")
        }, 400)
    }
})