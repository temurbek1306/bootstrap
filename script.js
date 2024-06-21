const show1 = document.querySelector('.show1')
const show2 = document.querySelector('.show2')
const hide1 = document.querySelector('.hide1')
const hide2 = document.querySelector('.hide2')
const password1 = document.querySelector('.password1')
const password2 = document.querySelector('.password2')


show1.addEventListener('click', ()=>{
    show1.style.display = 'none'
    hide1.style.display = 'inline-block'

    const type = password1.getAttribute('type') === 'password' ? 'text': 'type'
    password1.setAttribute('type', type)
})

show2.addEventListener('click', ()=>{
    show2.style.display = 'none'
    hide2.style.display = 'inline-block'

    const type = password2.getAttribute('type') === 'password' ? 'text': 'type'
    password2.setAttribute('type', type)
})

hide1.addEventListener('click', ()=>{
    hide1.style.display = 'none'
    show1.style.display = 'inline-block'

    const type = password1.getAttribute('type') === 'text' ? 'password': 'password'
    password1.setAttribute('type', type)
})

hide2.addEventListener('click', ()=>{
    hide2.style.display = 'none'
    show2.style.display = 'inline-block'

    const type = password2.getAttribute('type') === 'text' ? 'password': 'password'
    password2.setAttribute('type', type)
})