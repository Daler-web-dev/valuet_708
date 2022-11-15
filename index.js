let pagesBtn = document.querySelectorAll('nav a')
let pages = document.querySelectorAll('.content')

pagesBtn.forEach(btn => {
    btn.onclick = () => {
        let pageid = btn.getAttribute('data-p')

        pages.forEach(p => {
            console.log(pageid, p.id);
            if (pageid === p.id) {
                p.classList.add('activePage')
            } else {
                p.classList.remove('activePage')
            }
        });

        pagesBtn.forEach(b => b.classList.remove('activeA'))
        btn.classList.add('activeA')

    }
})


// Overview



let data = document.querySelector('.data')

let str = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let arrr = ['Monday', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday ']
let day = new Date().getDate()
let month = new Date().getMonth()
let year = new Date().getFullYear()
let date = new Date(year, month, day)

data.innerHTML = date.getDate() + ' ' + str[date.getMonth()] + ' , ' + arrr[date.getDay()]





const ctx_1 = document.getElementById('doughnut').getContext('2d');
const myChart = new Chart(ctx_1, {
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: ' ',
            data: [18, 64, 18],
            backgroundColor: [
                '#F5FBFE',
                '#018FFF',
                '#FAD679',
            ],
            borderColor: [

            ],
            borderWidth: 1
        }]
    },

});

const ctx = document.getElementById('line').getContext('2d');
const myChart_1 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
         
            date.getDate() -7 + ' ' + str[date.getMonth()],
            date.getDate() -6 + ' ' + str[date.getMonth()],
            date.getDate() -5 + ' ' + str[date.getMonth()],
            date.getDate() -4 + ' ' + str[date.getMonth()],
            date.getDate() -3 + ' ' + str[date.getMonth()],
            date.getDate() -2 + ' ' + str[date.getMonth()],
            date.getDate() -1 + ' ' + str[date.getMonth()],
            date.getDate() -0 + ' ' + str[date.getMonth()]],
        datasets: [{
            label: ' ',
            data: [12, 19, 3, 5, 2, 3 , 12 , 15 , 6],
            backgroundColor: [
                '#018FFF',

            ],
            borderColor: [
                '#0097E8',

            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
const ctx_2 = document.getElementById('line_2').getContext('2d');
const myChart_2 = new Chart(ctx_2, {
    type: 'line',
    data: {
        labels: [ ' ' , ' ' ,' ',' ',' ',' ',' ',' '],
        datasets: [{
            label: ' ',
            data: [12, 19, 3, 5, 2, 3 , 12 , 15 , 6],
            backgroundColor: [
                '#018FFF',

            ],
            borderColor: [
                '#0097E8',

            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
let color = document.querySelectorAll('#create')
let procent = document.querySelectorAll('.procent')
let colors = myChart.config._config.data.datasets[0].backgroundColor
let dat = myChart.config._config.data.datasets[0].data

color.forEach(col => {
    let index = col.getAttribute('data-color')
    color[index].style.backgroundColor = colors[index]
    procent[index].innerHTML = dat[index] + '%'

})




// let coin = [
//     {
//         name: 'BitCoin',
            
//     }
// ]




