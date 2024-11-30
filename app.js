const btn = document.querySelector('.btn')
const body = document.body
const cont = document.querySelector('.container')
const cont2 = document.querySelector('.cont2')

document.addEventListener('DOMContentLoaded', () => {
    console.log('1')
})


btn.addEventListener('click', () => {
    body.style.animationName = 'body'
    cont.style.animationName = 'cont'
    setTimeout(()=> {
        cont.style.display = 'none'
        cont2.style.display = 'block'
        cont2.style.animationName = 'c2'
    }, 1500)
})  