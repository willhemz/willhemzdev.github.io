const viewBtn = document.querySelector('.readMore')
let body = document.querySelector('body')

viewBtn.addEventListener('click', e => {
    e.preventDefault()
    body.classList.add('change')
})

const dropdown = document.querySelector('.dropdown i')

dropdown.addEventListener('click', event => {
    event.preventDefault()
    let options = document.querySelector('.nav-options')
    body.classList.toggle('show') ? (dropdown.className = 'fa-solid fa-xmark') : (dropdown.className = 'fa-solid fa-list')
})

