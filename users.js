const users = [
    {
        nom: "KENFACK",
        prenom: "Aurelien",
        email: "test@yahoo.com",
        telephone: "690452345",
        localisation: "--"
    },
    {
        nom: "NDEFFO",
        prenom: "Armel",
        email: "demo@yahoo.com",
        telephone: "690452345",
        localisation: "--"
    },
    {
        nom: "TCHOMO",
        prenom: "Andre",
        email: "andre@yahoo.com",
        telephone: "690452345",
        localisation: "--"
    },
    {
        nom: "TOTO",
        prenom: "Armel",
        email: "demo@yahoo.com",
        telephone: "690452345",
        localisation: "--"
    },
    {
        nom: "BIYO",
        prenom: "Johan",
        email: "johaninho2432006@gmail.com",
        telephone: "690321390",
        localisation: "--"
    },
    {
        nom: "KENFACK",
        prenom: "Aurelien",
        email: "test@yahoo.com",
        telephone: "690452345",
        localisation: "--"
    },
    {
        nom: "TCHOMO",
        prenom: "Andre",
        email: "andre@yahoo.com",
        telephone: "690452345",
        localisation: "--"
    }
]

const tableUsers = document.querySelector("#tableUsers")


const firstBars = document.querySelector('.first-bars')
const secondBars = document.querySelector('.second-bars')
const sidebar = document.querySelector('main aside')
const mainContent = document.querySelector('main .main-content')
const dots = document.querySelector('.dots')
const headerRight = document.querySelector('.header-right')
const headerLeft = document.querySelector('.header-left')

users.forEach(entry => {
    const html = `<tr>
        <td>${entry.nom}</td>
        <td>${entry.prenom}</td>
        <td title ="${entry.email}">${entry.email}</td>
        <td title ="${entry.telephone}">${entry.telephone}</td>
        <td>${entry.localisation}</td>
    </tr>`    
    tableUsers.querySelector('tbody').innerHTML += html
})

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