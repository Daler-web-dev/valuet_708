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
let arr = ['Monday', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday ', 'Sunday ']
let day = new Date().getDate()
let month = new Date().getMonth()
let year = new Date().getFullYear()
let date = new Date(year, month, day)

data.innerHTML = date.getDate() + ' ' + str[date.getMonth()] + ' , ' + arr[date.getDay()]





const ctx = document.getElementById('doughnut').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
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
myChart.config._config.data.datasets[0].backgroundColor
console.log();

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
