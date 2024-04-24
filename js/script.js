const openButton = document.querySelector('header > button')
const closeButton = document.querySelector('header nav button')

const body = document.querySelector('body')
const nav = document.querySelector('header .mobile')

openButton.addEventListener('click', openMenu)
closeButton.addEventListener('click', closeMenu)

function openMenu() {
    body.classList.add('dark')
    nav.classList.add('open')
}

function closeMenu() {
    body.classList.remove('dark')
    nav.classList.remove('open')
}