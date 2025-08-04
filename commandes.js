const orders = [
    {
        client: "Airi Satou",
        medicament: "Parac&eacute;tamol",
        pu: 2000,
        qte: 2,
        date: "25/07/2025",
        montant: 4000
    },
    {
        client: "Angelica Ramos",
        medicament: "Efferalgan",
        pu: 3000,
        qte: 3,
        date: "23/07/2025",
        montant: 9000
    },
    {
        client: "Ashton Cox",
        medicament: "Parac&eacute;tamol",
        pu: 2000,
        qte: 2,
        date: "25/07/2025",
        montant: 4000
    },
    {
        client: "Bradley Greer",
        medicament: "Doliprane",
        pu: 500,
        qte: 2,
        date: "25/07/2025",
        montant: 1000
    },
    {
        client: "Brenden Wagner",
        medicament: "Doliprane",
        pu: 500,
        qte: 2,
        date: "25/07/2025",
        montant: 1000
    },
    {
        client: "Brielle Williamson",
        medicament: "Parac&eacute;tamol",
        pu: 2000,
        qte: 2,
        date: "25/07/2025",
        montant: 4000
    },
    {
        client: "Bruno Nash",
        medicament: "Doliprane",
        pu: 500,
        qte: 2,
        date: "25/07/2025",
        montant: 1000
    }
]


const tableOrders = document.querySelector("#tableOrders")


const firstBars = document.querySelector('.first-bars')
const secondBars = document.querySelector('.second-bars')
const sidebar = document.querySelector('main aside')
const mainContent = document.querySelector('main .main-content')
const dots = document.querySelector('.dots')
const headerRight = document.querySelector('.header-right')
const headerLeft = document.querySelector('.header-left')

orders.forEach(entry => {
    const html = `<tr>
        <td>${entry.client}</td>
        <td>${entry.medicament}</td>
        <td>${entry.pu}</td>
        <td>${entry.qte}</td>
        <td>${entry.date}</td>
        <td>${entry.montant}</td>
    </tr>`    
    tableOrders.querySelector('tbody').innerHTML += html
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