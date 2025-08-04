
const firstBars = document.querySelector('.first-bars')
const secondBars = document.querySelector('.second-bars')
const sidebar = document.querySelector('main aside')
const mainContent = document.querySelector('main .main-content')
const dots = document.querySelector('.dots')
const headerRight = document.querySelector('.header-right')
const headerLeft = document.querySelector('.header-left')
const form = document.querySelector('form')
const description = document.querySelector('#description')
const designation = document.querySelector('#designation')
const pu = document.querySelector('#pu')
const errors = document.querySelectorAll('.error')

firstBars.addEventListener('click', () => {
    sidebar.classList.toggle('minimize')
    headerLeft.classList.toggle('minimize')
    mainContent.classList.toggle('grow')
    headerRight.classList.toggle('grow')
})

dots.addEventListener('click', () => {
    headerRight.classList.toggle('h-0')
})

secondBars.addEventListener('click', () => {
    sidebar.classList.toggle('slide')
    if(!secondBars.className.includes('fa-solid fa-xmark')){
        secondBars.className = 'fa-solid fa-xmark second-bars'
    }else{
        secondBars.className = 'fa-solid fa-bars second-bars'
    }
})

const displayError = (index, message) => {
    errors[index].innerHTML = message
}

let isValidate = true

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if(!designation.value.trim()){
        displayError(0, "La designation est requise")
    }else{
        displayError(0, "")
    }

    if(!description.value.trim()){
        displayError(1, "La description est requise")
    }else{
        displayError(1, "")
    }

    if(!pu.value.trim()){
        displayError(2, "Le prix unitaire est requis")
    }
    else if(!/^\d+$/.test(pu.value)){
        displayError(2, "Le prix unitaire doit etre un nombre")
    } 
    else{
        displayError(2, "")
    }

    errors.forEach(error => {
        if(error.innerHTML !== ''){
            isValidate = false
        }
    })
})

designation.addEventListener('input', (e) => {
    e.preventDefault()
    if(!designation.value.trim()){
        displayError(0, "La designation est requise")
    }else{
        displayError(0, "")
    }
})

description.addEventListener('input', (e) => {
    e.preventDefault()
    if(!description.value.trim()){
        displayError(1, "La description est requise")
    }else{
        displayError(1, "")
    }
})

pu.addEventListener('input', (e) => {
    e.preventDefault()
    if(!pu.value.trim()){
        displayError(2, "Le prix unitaire est requis")
    }
    else if(!/^\d+$/.test(pu.value)){
        displayError(2, "Le prix unitaire doit etre un nombre")
    } 
    else{
        displayError(2, "")
    }
})