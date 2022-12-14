document.addEventListener("DOMContentLoaded",() => {
    console.log("content loaded")
})


const ulMenu = document.querySelector('.list-group')
const poster = document.querySelector('img')
const title = document.querySelector('#title')
const description = document.querySelector('#description')
const showtime = document.querySelector('#showTime')
const availableTickets = document.querySelector('#availableTickets')

function getfilms(films){
        title.innerText = films.title
        description.innerText = films.description
        showtime.innerText = films.showtime
        let remainingTick = films.capacity - films.tickets_sold
        availableTickets.innerText = remainingTick
            poster.src = films.poster 
}

fetch("https://issa92optimus.github.io/db.json")
    .then(res => res.json())
    .then(data => {
        data.films.forEach((films) => {
        const li = document.createElement('li')
        li.innerText = films.title
        ulMenu.appendChild(li)

        li.addEventListener('click', () => {
            getfilms(films)
        })
        })
            })


fetch("https://issa92optimus.github.io/db.json")
    .then(res => res.json())
    .then(data => {
            getfilms(data.films[0]) 
            })

            