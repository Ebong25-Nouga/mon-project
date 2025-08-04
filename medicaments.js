const medicaments = [
    {
        designation: "Parac&eacute;tamol",
        description: "--",
        pu: 2000,
        date: "25/07/2025"
    },
    {
        designation: "Parac&eacute;tamol",
        description: "--",
        pu: 2000,
        date: "25/07/2025"
    },
    {
        designation: "Parac&eacute;tamol",
        description: "--",
        pu: 2000,
        date: "25/07/2025"
    },
    {
        designation: "Parac&eacute;tamol",
        description: "--",
        pu: 2000,
        date: "25/07/2025"
    },
    {
        designation: "Parac&eacute;tamol",
        description: "--",
        pu: 2000,
        date: "25/07/2025"
    },
    {
        designation: "Parac&eacute;tamol",
        description: "--",
        pu: 2000,
        date: "25/07/2025"
    },
    {
        designation: "Parac&eacute;tamol",
        description: "--",
        pu: 2000,
        date: "25/07/2025"
    }
]

const tableMedicaments = document.querySelector("#tableMedicaments")


const firstBars = document.querySelector('.first-bars')
const secondBars = document.querySelector('.second-bars')
const sidebar = document.querySelector('main aside')
const mainContent = document.querySelector('main .main-content')
const dots = document.querySelector('.dots')
const headerRight = document.querySelector('.header-right')
const headerLeft = document.querySelector('.header-left')

medicaments.forEach(entry => {
    const html = `<tr>
        <td>${entry.designation}</td>
        <td>${entry.description}</td>
        <td>${entry.pu}</td>
        <td>${entry.date}</td>
    </tr>`    
    tableMedicaments.querySelector('tbody').innerHTML += html
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