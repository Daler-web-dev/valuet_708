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
let days = ['Monday', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday ']
let day = new Date().getDate()
let month = new Date().getMonth()
let year = new Date().getFullYear()
let date = new Date(year, month, day)

data.innerHTML = date.getDate() + ' ' + str[date.getMonth()] + ' , ' + days[date.getDay()]





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





const arr = [
    {
        time: 'AM 01:16',
        date: '24 dec 2018',
        btc: '0000.3',
        status: 'Waiting'
    },
    {
        time: 'PM 03:46',
        date: '15 july 2020',
        btc: '0000.9',
        status: 'Error'
    },
    {
        time: 'PM 11:46',
        date: '24 dec 2018',
        btc: '0000.3',
        status: 'Waiting'
    },
    {
        time: 'AM 01:16',
        date: '24 dec 2018',
        btc: '0000.3',
        status: 'Completed'
    },
    {
        time: 'AM 01:16',
        date: '24 dec 2018',
        btc: '0000.3',
        status: 'Waiting'
    },
    {
        time: 'PM 01:16',
        date: '24 dec 2018',
        btc: '0000.3',
        status: 'Error'
    },
    {
        time: 'AM 01:16',
        date: '24 dec 2018',
        btc: '0000.3',
        status: 'Completed'
    }
]

const list = document.querySelector('.list')
function reload(arr, place) {
    place.innerHTML = ''
    for (const item of arr) {
        const item1 = document.createElement('div')
        const leftList = document.createElement('div')
        const leftInfo = document.createElement('div')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const roll = document.createElement('div')
        const img = document.createElement('img')
        const rightToken = document.createElement('div')
        const tokenImg = document.createElement('img')
        const p3 = document.createElement('p')
        const rightbtc = document.createElement('div')
        const p4 = document.createElement('p')
        const btn = document.createElement('button')

        item1.classList.add('item')
        leftList.classList.add('left-list-graph')
        leftInfo.classList.add('left-info')
        roll.classList.add('roll')
        roll.classList.add('roll2')
        rightToken.classList.add('right-token')
        rightbtc.classList.add('right-btc-status')
        btn.classList.add('btn-status')
        p1.innerHTML = item.time
        p2.innerHTML = item.date
        tokenImg.src = './public/icons/arrow.svg'
        img.src = './public/icons/bitcoin.png'
        p3.innerHTML = '74EKRJMXkhKDR5dj34578fgirwE22sfg'
        p4.innerHTML = item.btc
        btn.innerHTML = item.status

        if(item.status === 'Error'){
            btn.classList.add('error')
        } else if(item.status === 'Completed'){
            btn.classList.add('completed')
        }

        place.append(item1)
        item1.append(leftList, rightbtc)
        leftList.append(leftInfo, rightToken)
        leftInfo.append(p1, p2, roll)
        roll.append(img)
        rightToken.append(tokenImg, p3)
        rightbtc.append(p4, btn)

    }
}
reload(arr, list)


